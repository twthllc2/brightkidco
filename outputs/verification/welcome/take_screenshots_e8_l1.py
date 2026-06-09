#!/usr/bin/env python3
"""Take screenshots and extract CSS from welcome-01-e8-l1-render.html using Playwright."""

import json
import os
import time

from playwright.sync_api import sync_playwright

HTML_FILE = "/root/projects/brightkidco/outputs/verification/welcome/welcome-01-e8-l1-render.html"
OUTPUT_DIR = "/root/projects/brightkidco/outputs/verification/welcome"

def main():
    console_errors = []
    
    with sync_playwright() as p:
        browser = p.chromium.launch(
            headless=True,
            args=["--no-sandbox", "--disable-dev-shm-usage"]
        )
        
        # --- Full-page screenshot at 420px width ---
        print("[1/5] Taking full-page screenshot (420px width)...")
        page1 = browser.new_page(viewport={"width": 420, "height": 800})
        
        def on_console1(msg):
            if msg.type in ("error", "warning"):
                console_errors.append({"type": msg.type, "text": msg.text})
        page1.on("console", on_console1)
        
        page1.goto(f"file://{HTML_FILE}", wait_until="networkidle", timeout=60000)
        # Wait for React to render
        page1.wait_for_timeout(3000)
        # Wait for the root div to have content
        page1.wait_for_function("document.getElementById('root') && document.getElementById('root').children.length > 0", timeout=30000)
        page1.wait_for_timeout(1000)
        
        screenshot_path_1 = os.path.join(OUTPUT_DIR, "welcome-01-e8-l1-screenshot.png")
        page1.screenshot(path=screenshot_path_1, full_page=True)
        print(f"  Saved: {screenshot_path_1}")
        page1.close()
        
        # --- Above-fold screenshot (420x568) ---
        print("[2/5] Taking above-fold screenshot (420x568)...")
        page2 = browser.new_page(viewport={"width": 420, "height": 568})
        page2.goto(f"file://{HTML_FILE}", wait_until="networkidle", timeout=60000)
        page2.wait_for_timeout(3000)
        page2.wait_for_function("document.getElementById('root') && document.getElementById('root').children.length > 0", timeout=30000)
        page2.wait_for_timeout(1000)
        
        screenshot_path_2 = os.path.join(OUTPUT_DIR, "welcome-01-e8-l1-above-fold.png")
        page2.screenshot(path=screenshot_path_2, full_page=False)
        print(f"  Saved: {screenshot_path_2}")
        page2.close()
        
        # --- Mobile screenshot (320px width) ---
        print("[3/5] Taking mobile screenshot (320px width)...")
        page3 = browser.new_page(viewport={"width": 320, "height": 568})
        page3.goto(f"file://{HTML_FILE}", wait_until="networkidle", timeout=60000)
        page3.wait_for_timeout(3000)
        page3.wait_for_function("document.getElementById('root') && document.getElementById('root').children.length > 0", timeout=30000)
        page3.wait_for_timeout(1000)
        
        screenshot_path_3 = os.path.join(OUTPUT_DIR, "welcome-01-e8-l1-mobile.png")
        page3.screenshot(path=screenshot_path_3, full_page=True)
        print(f"  Saved: {screenshot_path_3}")
        page3.close()
        
        # --- Extract computed CSS values ---
        print("[4/5] Extracting computed CSS values...")
        page4 = browser.new_page(viewport={"width": 420, "height": 800})
        page4.goto(f"file://{HTML_FILE}", wait_until="networkidle", timeout=60000)
        page4.wait_for_timeout(3000)
        page4.wait_for_function("document.getElementById('root') && document.getElementById('root').children.length > 0", timeout=30000)
        page4.wait_for_timeout(1000)
        
        css_data = page4.evaluate("""() => {
            const result = {
                fonts: [],
                colors: [],
                computedStyles: [],
                elementCount: 0,
                bodyDimensions: {},
                sections: [],
                ctaButtons: [],
                links: []
            };
            
            // Get all elements and extract info
            const allElements = document.querySelectorAll('#root *');
            result.elementCount = allElements.length;
            
            // Body/root dimensions
            const root = document.getElementById('root');
            if (root) {
                const rootRect = root.getBoundingClientRect();
                result.bodyDimensions = {
                    rootWidth: rootRect.width,
                    rootHeight: rootRect.height
                };
            }
            
            const fontSet = new Set();
            const colorSet = new Set();
            const bgSet = new Set();
            
            // Sample key elements for computed styles
            allElements.forEach((el, i) => {
                const cs = window.getComputedStyle(el);
                const text = el.textContent?.trim().substring(0, 80) || '';
                const tag = el.tagName;
                const classes = el.className || '';
                
                if (cs.fontFamily) fontSet.add(cs.fontFamily);
                if (cs.color) colorSet.add(cs.color);
                if (cs.backgroundColor && cs.backgroundColor !== 'rgba(0, 0, 0, 0)') bgSet.add(cs.backgroundColor);
                
                // Sample specific elements
                if (i < 200 || tag === 'A' || tag === 'BUTTON' || cs.backgroundColor !== 'rgba(0, 0, 0, 0)') {
                    const style = {
                        tag: tag,
                        classes: typeof classes === 'string' ? classes.substring(0, 100) : '',
                        text: text.substring(0, 100),
                        fontFamily: cs.fontFamily,
                        fontSize: cs.fontSize,
                        fontWeight: cs.fontWeight,
                        color: cs.color,
                        backgroundColor: cs.backgroundColor,
                        padding: cs.padding,
                        margin: cs.margin,
                        borderRadius: cs.borderRadius,
                        lineHeight: cs.lineHeight,
                        letterSpacing: cs.letterSpacing
                    };
                    result.computedStyles.push(style);
                }
                
                // Track CTA-like elements (links with background colors, buttons)
                if (tag === 'A' || tag === 'BUTTON') {
                    const rect = el.getBoundingClientRect();
                    result.ctaButtons.push({
                        tag: tag,
                        text: text.substring(0, 80),
                        href: el.href || '',
                        width: Math.round(rect.width),
                        height: Math.round(rect.height),
                        backgroundColor: cs.backgroundColor,
                        color: cs.color,
                        fontSize: cs.fontSize,
                        padding: cs.padding,
                        borderRadius: cs.borderRadius
                    });
                }
                
                // Track links
                if (tag === 'A') {
                    result.links.push({
                        text: text.substring(0, 80),
                        href: el.href || '',
                        color: cs.color
                    });
                }
            });
            
            result.fonts = Array.from(fontSet);
            result.colors = Array.from(colorSet);
            result.backgroundColors = Array.from(bgSet);
            
            // Get text content
            result.textContent = root ? root.textContent.substring(0, 5000) : '';
            
            // Get outer HTML structure (abbreviated)
            result.outerHTML = root ? root.outerHTML.substring(0, 2000) : '';
            
            return result;
        }""")
        
        # Save CSS data
        css_json_path = os.path.join(OUTPUT_DIR, "welcome-01-e8-l1-css-data.json")
        with open(css_json_path, "w") as f:
            json.dump(css_data, f, indent=2, default=str)
        print(f"  Saved CSS data: {css_json_path}")
        
        # Print summary
        print(f"\n  Fonts found: {len(css_data.get('fonts', []))}")
        for font in css_data.get('fonts', []):
            print(f"    - {font}")
        
        print(f"\n  Colors found: {len(css_data.get('colors', []))}")
        for color in css_data.get('colors', [])[:20]:
            print(f"    - {color}")
        
        print(f"\n  Background colors: {len(css_data.get('backgroundColors', []))}")
        for bg in css_data.get('backgroundColors', []):
            print(f"    - {bg}")
        
        print(f"\n  CTA/Link elements: {len(css_data.get('ctaButtons', []))}")
        for btn in css_data.get('ctaButtons', []):
            print(f"    - [{btn['tag']}] '{btn['text'][:50]}' w={btn['width']} h={btn['height']} bg={btn['backgroundColor']} color={btn['color']}")
        
        print(f"\n  Total elements: {css_data.get('elementCount', 0)}")
        print(f"  Root dimensions: {css_data.get('bodyDimensions', {})}")
        
        page4.close()
        
        # --- Console errors summary ---
        print("[5/5] Console errors check...")
        page5 = browser.new_page(viewport={"width": 420, "height": 800})
        all_console = []
        def on_console_all(msg):
            all_console.append({"type": msg.type, "text": msg.text})
        page5.on("console", on_console_all)
        page5.goto(f"file://{HTML_FILE}", wait_until="networkidle", timeout=60000)
        page5.wait_for_timeout(5000)
        
        error_console = [c for c in all_console if c["type"] == "error"]
        warning_console = [c for c in all_console if c["type"] == "warning"]
        
        print(f"  Console errors: {len(error_console)}")
        for e in error_console:
            print(f"    ERROR: {e['text'][:200]}")
        print(f"  Console warnings: {len(warning_console)}")
        for w in warning_console:
            print(f"    WARN: {w['text'][:200]}")
        
        # Save console data
        console_path = os.path.join(OUTPUT_DIR, "welcome-01-e8-l1-console.json")
        with open(console_path, "w") as f:
            json.dump({
                "errors": error_console,
                "warnings": warning_console,
                "all": all_console
            }, f, indent=2)
        print(f"  Saved console data: {console_path}")
        
        page5.close()
        browser.close()
    
    print("\n[DONE] All screenshots and CSS extraction completed.")
    print(f"  Screenshots saved to: {OUTPUT_DIR}")
    print(f"  CSS data: {css_json_path}")
    print(f"  Console data: {console_path}")

if __name__ == "__main__":
    main()
