#!/usr/bin/env python3
"""Deep verification of the rendered email — colors, fonts, dimensions."""
import json
from playwright.sync_api import sync_playwright
from pathlib import Path

HTML = "file:///root/projects/brightkidco/outputs/verification/welcome/welcome-01-e8-l2-render.html"
OUT = Path("/root/projects/brightkidco/outputs/verification/welcome")

def main():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page(viewport={"width": 420, "height": 800})
        
        # Collect console messages
        console_msgs = []
        page.on("console", lambda msg: console_msgs.append({"type": msg.type, "text": msg.text}))
        
        page.goto(HTML)
        page.wait_for_timeout(4000)
        
        results = {}
        
        # 1. Console errors
        errors = [m for m in console_msgs if m["type"] == "error"]
        results["console_errors"] = errors
        print(f"[1] Console errors: {len(errors)}")
        for e in errors:
            print(f"    - {e['text']}")
        
        # 2. Page dimensions
        dims = page.evaluate("""() => ({
            width: document.body.scrollWidth,
            height: document.body.scrollHeight,
            rootWidth: document.getElementById('root').scrollWidth,
        })""")
        results["dimensions"] = dims
        print(f"[6] Rendered width: {dims['width']}px, height: {dims['height']}px")
        
        # 3. Font check
        font_check = page.evaluate("""() => {
            const el = document.querySelector('p') || document.body;
            return window.getComputedStyle(el).fontFamily;
        }""")
        results["font_family"] = font_check
        print(f"[5] Font family: {font_check}")
        
        # 4. CTA button dimensions
        cta_dims = page.evaluate("""() => {
            const links = document.querySelectorAll('a');
            for (const a of links) {
                const text = a.textContent.trim();
                if (text.includes('Bundle') || text.includes('ready')) {
                    const r = a.getBoundingClientRect();
                    return { text, width: r.width, height: r.height, top: r.top, bottom: r.bottom };
                }
            }
            return null;
        }""")
        results["cta_button"] = cta_dims
        if cta_dims:
            print(f"[8] CTA button: '{cta_dims['text']}' — {cta_dims['width']:.0f}x{cta_dims['height']:.0f}px at y={cta_dims['top']:.0f}")
        
        # 5. Sample colors from key elements
        color_samples = page.evaluate("""() => {
            const samples = [];
            
            // Background of body/root
            const root = document.getElementById('root');
            if (root) {
                const firstChild = root.firstElementChild;
                if (firstChild) {
                    samples.push({ el: 'email-shell', bg: window.getComputedStyle(firstChild).backgroundColor });
                }
            }
            
            // Checkmark boxes (green)
            const checkDivs = document.querySelectorAll('div');
            for (const d of checkDivs) {
                const bg = window.getComputedStyle(d).backgroundColor;
                if (bg === 'rgb(93, 208, 122)') {
                    samples.push({ el: 'checkmark-green', bg });
                    break;
                }
            }
            
            // CTA button
            const links = document.querySelectorAll('a');
            for (const a of links) {
                if (a.textContent.includes('Bundle')) {
                    samples.push({ el: 'cta-button', bg: window.getComputedStyle(a).backgroundColor, color: window.getComputedStyle(a).color });
                    break;
                }
            }
            
            // Text colors
            const paras = document.querySelectorAll('p');
            if (paras.length > 1) {
                samples.push({ el: 'body-text', color: window.getComputedStyle(paras[1]).color });
            }
            
            // Muted text (footer)
            const footerParas = document.querySelectorAll('div:last-child p');
            for (const p of footerParas) {
                const color = window.getComputedStyle(p).color;
                if (color === 'rgb(138, 155, 157)') {
                    samples.push({ el: 'muted-text', color });
                    break;
                }
            }
            
            // Secondary text
            for (const p of paras) {
                const color = window.getComputedStyle(p).color;
                if (color === 'rgb(74, 101, 104)') {
                    samples.push({ el: 'secondary-text', color });
                    break;
                }
            }
            
            // Teal elements
            for (const d of checkDivs) {
                const bg = window.getComputedStyle(d).backgroundColor;
                if (bg === 'rgb(43, 174, 180)') {
                    samples.push({ el: 'teal-element', bg });
                    break;
                }
            }
            
            return samples;
        }""")
        results["color_samples"] = color_samples
        print("[4] Color samples:")
        for s in color_samples:
            print(f"    {s['el']}: {s}")
        
        # 6. Images check
        images = page.evaluate("""() => {
            const imgs = document.querySelectorAll('img');
            return Array.from(imgs).map(img => ({
                src: img.src,
                alt: img.alt,
                naturalWidth: img.naturalWidth,
                naturalHeight: img.naturalHeight,
                rendered: img.offsetWidth > 0 && img.offsetHeight > 0,
            }));
        }""")
        results["images"] = images
        print("[3] Images:")
        for img in images:
            status = "OK" if img["naturalWidth"] > 0 else "BROKEN"
            print(f"    [{status}] {img['alt'][:50]}... ({img['naturalWidth']}x{img['naturalHeight']})")
        
        # 7. CTA tap target height
        if cta_dims:
            tap_ok = cta_dims['height'] >= 44
            results["cta_tap_target"] = tap_ok
            print(f"[8] CTA tap target >= 44px: {tap_ok} (actual: {cta_dims['height']:.0f}px)")
        
        # 8. Check heading text
        heading = page.evaluate("""() => {
            const ps = document.querySelectorAll('p');
            for (const p of ps) {
                if (p.textContent.includes('last email')) return p.textContent.trim();
            }
            return null;
        }""")
        results["heading_text"] = heading
        print(f"[11] Heading text: '{heading}'")
        
        # 9. Count checkmark items
        check_count = page.evaluate("""() => {
            const checks = document.querySelectorAll('div');
            let count = 0;
            for (const d of checks) {
                if (window.getComputedStyle(d).backgroundColor === 'rgb(93, 208, 122)' 
                    && d.textContent.trim() === '✓') {
                    count++;
                }
            }
            return count;
        }""")
        results["checkmark_count"] = check_count
        print(f"[12] Checkmark items: {check_count}")
        
        # 10. Get all text content for copy verification
        all_text = page.evaluate("""() => {
            return document.body.innerText;
        }""")
        results["text_preview"] = all_text[:500]
        
        # 11. Check for star rating
        stars = page.evaluate("""() => {
            const spans = document.querySelectorAll('span');
            let starCount = 0;
            for (const s of spans) {
                if (s.textContent === '★') starCount++;
            }
            return starCount;
        }""")
        results["star_count"] = stars
        print(f"[12] Star rating count: {stars}")
        
        # 12. Check green dots (Easter egg)
        green_dots = page.evaluate("""() => {
            const divs = document.querySelectorAll('div');
            let dotCount = 0;
            for (const d of divs) {
                const style = window.getComputedStyle(d);
                if (style.width === '8px' && style.height === '8px' 
                    && style.borderRadius === '50%'
                    && style.backgroundColor === 'rgb(93, 208, 122)') {
                    dotCount++;
                }
            }
            return dotCount;
        }""")
        results["green_dots_easter_egg"] = green_dots
        print(f"[12] Green dots (Easter egg): {green_dots}")
        
        browser.close()
        
        # Write results JSON
        with open(str(OUT / "verification-data.json"), "w") as f:
            json.dump(results, f, indent=2)
        print("\nData saved to verification-data.json")

if __name__ == "__main__":
    main()
