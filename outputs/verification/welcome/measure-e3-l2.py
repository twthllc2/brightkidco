#!/usr/bin/env python3
"""Get exact measurements for the rendered email."""
from playwright.sync_api import sync_playwright

html_path = "/root/projects/brightkidco/outputs/verification/welcome/welcome-01-e3-l2-render.html"

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={"width": 420, "height": 800})
    page.goto(f"file://{html_path}", wait_until="networkidle")
    page.wait_for_timeout(3000)
    
    total_height = page.evaluate('document.getElementById("root").scrollHeight')
    print(f"Total rendered height: {total_height}px")
    
    sections = page.evaluate('''() => {
        const root = document.getElementById("root");
        const children = root.children[0].children;
        const results = [];
        for (let i = 0; i < children.length; i++) {
            const el = children[i];
            const rect = el.getBoundingClientRect();
            results.push({
                index: i,
                tag: el.tagName,
                text: el.textContent.substring(0, 80),
                top: rect.top,
                height: rect.height,
                bottom: rect.bottom
            });
        }
        return results;
    }''')
    
    for s in sections:
        print(f"  [{s['index']}] {s['tag']} top={s['top']:.0f} h={s['height']:.0f} bottom={s['bottom']:.0f} | {s['text'][:60]}")
    
    cta_visible = page.evaluate('''() => {
        const links = document.querySelectorAll("a");
        for (const link of links) {
            if (link.textContent.includes("3+3 Bundle")) {
                const rect = link.getBoundingClientRect();
                return { text: link.textContent, top: rect.top, bottom: rect.bottom };
            }
        }
        return null;
    }''')
    
    if cta_visible:
        print(f"\nCTA button: '{cta_visible['text']}' at top={cta_visible['top']:.0f}px, bottom={cta_visible['bottom']:.0f}px")
        print(f"CTA visible in 568px viewport: {cta_visible['top'] < 568}")
    
    browser.close()
