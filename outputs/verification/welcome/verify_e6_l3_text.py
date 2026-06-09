#!/usr/bin/env python3
"""Extract all text from the E6 L3 render for copy alignment check."""
import os, json
from playwright.sync_api import sync_playwright

OUT = "/root/projects/brightkidco/outputs/verification/welcome"
HTML = f"{OUT}/welcome-01-e6-l3-render.html"

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page(viewport={"width": 420, "height": 800})
    page.goto(f"file://{HTML}", wait_until="networkidle")
    page.wait_for_timeout(3000)

    # Extract all text content
    text = page.evaluate("""() => {
        const texts = [];
        const walker = document.createTreeWalker(document.querySelector('#root'), NodeFilter.SHOW_TEXT);
        while (walker.nextNode()) {
            const t = walker.currentNode.textContent.trim();
            if (t && t.length > 1) texts.push(t);
        }
        return texts;
    }""")
    
    # Extract paragraph-level text
    paras = page.evaluate("""() => {
        const ps = document.querySelectorAll('p');
        return Array.from(ps).map(p => p.textContent.trim()).filter(t => t.length > 0);
    }""")

    # Get font size samples
    sizes = page.evaluate("""() => {
        const results = [];
        const els = document.querySelectorAll('h1, p, a, div');
        const seen = new Set();
        for (const el of els) {
            const cs = getComputedStyle(el);
            const key = `${cs.fontSize}|${cs.fontWeight}|${cs.fontFamily.substring(0,20)}`;
            if (!seen.has(key) && el.textContent.trim().length > 5) {
                seen.add(key);
                results.push({
                    tag: el.tagName,
                    text: el.textContent.trim().substring(0, 80),
                    fontSize: cs.fontSize,
                    fontWeight: cs.fontWeight,
                    lineHeight: cs.lineHeight,
                    color: cs.color,
                    fontFamily: cs.fontFamily.substring(0, 40)
                });
            }
        }
        return results;
    }""")

    # Get image/SVG info
    images = page.evaluate("""() => {
        const svgs = document.querySelectorAll('svg');
        return Array.from(svgs).map((s, i) => ({
            index: i,
            width: s.getAttribute('width'),
            height: s.getAttribute('height'),
            viewBox: s.getAttribute('viewBox'),
            hasAnimation: s.querySelector('style') !== null
        }));
    }""")

    # Check border styles on key elements
    borders = page.evaluate("""() => {
        const results = [];
        const divs = document.querySelectorAll('div');
        for (const d of divs) {
            const cs = getComputedStyle(d);
            const borderLeft = cs.borderLeft;
            const borderStyle = cs.borderStyle;
            if (borderLeft && borderLeft !== 'none' && borderLeft !== '0px none rgb(0, 0, 0)') {
                results.push({
                    text: d.textContent.trim().substring(0, 60),
                    borderLeft: borderLeft
                });
            }
            if (borderStyle === 'dashed') {
                const fullBorder = cs.border;
                results.push({
                    text: d.textContent.trim().substring(0, 60),
                    border: fullBorder
                });
            }
        }
        return results;
    }""")

    browser.close()

    print("=== TEXT CONTENT ===")
    for t in paras[:30]:
        print(f"  {t[:120]}")
    
    print("\n=== FONT SIZE SAMPLES ===")
    for s in sizes[:15]:
        print(f"  {s['tag']} | {s['fontSize']} | {s['fontWeight']} | {s['fontFamily'][:30]} | {s['color']}")
    
    print("\n=== SVGs ===")
    for img in images:
        print(f"  SVG {img['index']}: {img['width']}x{img['height']} viewBox={img['viewBox']} animation={img['hasAnimation']}")
    
    print("\n=== BORDERS ===")
    for b in borders[:10]:
        if 'borderLeft' in b:
            print(f"  border-left: {b['borderLeft'][:80]}")
        if 'border' in b:
            print(f"  border: {b['border'][:80]}")
