#!/usr/bin/env python3
from playwright.sync_api import sync_playwright
import os

out_dir = '/root/projects/brightkidco/outputs/verification/pp-education'
html_path = 'file:///root/projects/brightkidco/outputs/verification/pp-education/pped-11-d0-render.html'

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    
    # 1. Full-page at 420px
    page = browser.new_page(viewport={'width': 420, 'height': 800})
    page.goto(html_path, wait_until='networkidle', timeout=30000)
    page.wait_for_timeout(3000)
    page.screenshot(path=os.path.join(out_dir, 'pped-11-d0-screenshot.png'), full_page=True)
    print('Full-page screenshot saved')
    
    # 2. Mobile at 375px
    page2 = browser.new_page(viewport={'width': 375, 'height': 800})
    page2.goto(html_path, wait_until='networkidle', timeout=30000)
    page2.wait_for_timeout(3000)
    page2.screenshot(path=os.path.join(out_dir, 'pped-11-d0-mobile.png'), full_page=True)
    print('Mobile screenshot saved')
    
    # 3. Above-fold at 420x568
    page3 = browser.new_page(viewport={'width': 420, 'height': 568})
    page3.goto(html_path, wait_until='networkidle', timeout=30000)
    page3.wait_for_timeout(3000)
    page3.screenshot(path=os.path.join(out_dir, 'pped-11-d0-above-fold.png'), full_page=False)
    print('Above-fold screenshot saved')
    
    # 4. Get console errors
    errors = []
    page4 = browser.new_page(viewport={'width': 420, 'height': 800})
    page4.on('console', lambda msg: errors.append(f'{msg.type}: {msg.text}') if msg.type in ['error', 'warning'] else None)
    page4.goto(html_path, wait_until='networkidle', timeout=30000)
    page4.wait_for_timeout(3000)
    
    print('\n--- Console output ---')
    for e in errors:
        print(f'  {e}')
    if not errors:
        print('  (no errors)')
    
    # 5. Measure rendered width
    width = page4.evaluate('document.querySelector("#root > div").offsetWidth')
    print(f'\nRendered width: {width}px')
    
    # 6. Check font families
    fonts = page4.evaluate('''() => {
        const body = document.querySelector("#root > div");
        const h1 = document.querySelector("h1");
        return {
            body: getComputedStyle(body).fontFamily,
            h1: h1 ? getComputedStyle(h1).fontFamily : "no h1",
        };
    }''')
    print(f'Body font: {fonts["body"]}')
    print(f'H1 font: {fonts["h1"]}')
    
    # 7. Measure CTA button
    cta = page4.evaluate('''() => {
        const btns = document.querySelectorAll("a[href='#']");
        const results = [];
        btns.forEach(btn => {
            const r = btn.getBoundingClientRect();
            const s = getComputedStyle(btn);
            results.push({text: btn.textContent.trim(), width: r.width, height: r.height, bg: s.backgroundColor, color: s.color, borderRadius: s.borderRadius});
        });
        return results;
    }''')
    print(f'\n--- CTA buttons ({len(cta)} found) ---')
    for c in cta:
        print(f'  "{c["text"]}" — {c["width"]:.1f}x{c["height"]:.1f}px, bg={c["bg"]}, color={c["color"]}, radius={c["borderRadius"]}')
    
    # 8. Count sections
    sections = page4.evaluate('''() => {
        const shell = document.querySelector("#root > div > div");
        if (!shell) return 0;
        return shell.children.length;
    }''')
    print(f'\nTop-level sections in shell: {sections}')
    
    # 9. Get all background colors
    bg_colors = page4.evaluate('''() => {
        const all = document.querySelectorAll("#root div, #root p, #root h1, #root span, #root a, #root img");
        const colors = new Set();
        all.forEach(el => {
            const s = getComputedStyle(el);
            if (s.backgroundColor && s.backgroundColor !== 'rgba(0, 0, 0, 0)') {
                colors.add(s.backgroundColor);
            }
        });
        return [...colors];
    }''')
    print(f'\n--- Background colors ({len(bg_colors)} unique) ---')
    for c in bg_colors:
        print(f'  {c}')
    
    # 10. Check text colors
    text_colors = page4.evaluate('''() => {
        const all = document.querySelectorAll("#root div, #root p, #root h1, #root span, #root a");
        const colors = new Set();
        all.forEach(el => {
            const s = getComputedStyle(el);
            if (s.color) colors.add(s.color);
        });
        return [...colors];
    }''')
    print(f'\n--- Text colors ({len(text_colors)} unique) ---')
    for c in text_colors:
        print(f'  {c}')
    
    # 11. Check gradient bands
    gradients = page4.evaluate('''() => {
        const all = document.querySelectorAll("#root div");
        const grads = [];
        all.forEach(el => {
            const s = getComputedStyle(el);
            if (s.backgroundImage && s.backgroundImage.includes('linear-gradient')) {
                grads.push({height: s.height, bg: s.backgroundImage, width: s.width});
            }
        });
        return grads;
    }''')
    print(f'\n--- Gradient bands ({len(gradients)} found) ---')
    for g in gradients:
        print(f'  h={g["height"]}, w={g["width"]}, bg={g["bg"][:80]}')
    
    # 12. Check image src paths
    images = page4.evaluate('''() => {
        const imgs = document.querySelectorAll("#root img");
        return [...imgs].map(img => ({src: img.src, alt: img.alt, naturalWidth: img.naturalWidth, renderedWidth: img.offsetWidth}));
    }''')
    print(f'\n--- Images ({len(images)} found) ---')
    for img in images:
        print(f'  src={img["src"][:80]}, alt="{img["alt"]}", natural={img["naturalWidth"]}px, rendered={img["renderedWidth"]}px')
    
    # 13. Full page height
    height = page4.evaluate('document.querySelector("#root > div").offsetHeight')
    print(f'\nFull page height: {height}px')
    
    browser.close()
    print('\nDone!')
