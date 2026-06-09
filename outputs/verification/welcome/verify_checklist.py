from playwright.sync_api import sync_playwright
import time
import os
import json

html_path = 'file:///root/projects/brightkidco/outputs/verification/welcome/welcome-01-e7-l1-render.html'

with sync_playwright() as p:
    browser = p.chromium.launch(
        executable_path='/root/.hermes/profiles/ops6/home/.cache/ms-playwright/chromium-1223/chrome-linux64/chrome',
        args=['--no-sandbox', '--disable-setuid-sandbox']
    )
    
    # Full page analysis at 420px
    page = browser.new_page(viewport={'width': 420, 'height': 800})
    errors = []
    page.on('console', lambda msg: errors.append(f'{msg.type}: {msg.text}'))
    page.goto(html_path)
    page.wait_for_load_state('networkidle')
    time.sleep(3)
    
    # 1. Console errors
    print("=== 1. CONSOLE ERRORS ===")
    error_msgs = [e for e in errors if 'error' in e.lower()]
    print(f"Total console messages: {len(errors)}")
    for e in error_msgs:
        print(f"  {e}")
    
    # 2. Layout structure
    print("\n=== 2. LAYOUT STRUCTURE ===")
    sections = page.evaluate('''() => {
        const root = document.querySelector('#root');
        const results = [];
        function walk(el, depth) {
            if (depth > 3) return;
            const cs = getComputedStyle(el);
            const rect = el.getBoundingClientRect();
            if (el.children.length === 0 || el.tagName === 'IMG' || el.tagName === 'SVG' || el.tagName === 'A' || el.tagName === 'H1' || el.tagName === 'H2' || el.tagName === 'H3' || el.tagName === 'P') {
                results.push({
                    tag: el.tagName,
                    class: el.className,
                    bg: cs.backgroundColor,
                    w: Math.round(rect.width),
                    h: Math.round(rect.height),
                    text: (el.innerText || '').substring(0, 50)
                });
            }
            for (const child of el.children) {
                walk(child, depth + 1);
            }
        }
        walk(root, 0);
        return results;
    }''')
    for s in sections[:15]:
        print(f"  {s['tag']}: {s['w']}x{s['h']}px bg={s['bg']} text=\"{s['text'][:40]}\"")
    
    # 3. Images check
    print("\n=== 3. IMAGES ===")
    images = page.evaluate('''() => {
        const imgs = document.querySelectorAll('img');
        return Array.from(imgs).map(i => ({
            src: i.src,
            alt: i.alt,
            naturalWidth: i.naturalWidth,
            naturalHeight: i.naturalHeight,
            displayed: i.offsetWidth > 0 && i.offsetHeight > 0,
            broken: i.naturalWidth === 0
        }));
    }''')
    for img in images:
        print(f"  src={os.path.basename(img['src'])}, alt=\"{img['alt']}\", natural={img['naturalWidth']}x{img['naturalHeight']}, displayed={img['displayed']}, broken={img['broken']}")
    
    # 4. Color sampling
    print("\n=== 4. COLOR SAMPLES ===")
    color_samples = page.evaluate('''() => {
        const samples = [];
        // Sample specific elements
        const targets = [
            {sel: 'h1', name: 'H1 headline'},
            {sel: 'p', name: 'Body text'},
            {sel: 'a[href="#"]', name: 'CTA links'},
        ];
        targets.forEach(t => {
            const el = document.querySelector(t.sel);
            if (el) {
                const cs = getComputedStyle(el);
                samples.push({name: t.name, color: cs.color, bg: cs.backgroundColor, fontSize: cs.fontSize});
            }
        });
        
        // Sample backgrounds of major sections
        const rootDiv = document.querySelector('#root > div');
        if (rootDiv) {
            for (const child of rootDiv.children) {
                const cs = getComputedStyle(child);
                if (cs.backgroundColor !== 'rgba(0, 0, 0, 0)') {
                    samples.push({name: 'section-bg', color: cs.color, bg: cs.backgroundColor, fontSize: 'N/A'});
                }
            }
        }
        return samples;
    }''')
    for c in color_samples:
        print(f"  {c['name']}: color={c['color']} bg={c['bg']} size={c['fontSize']}")
    
    # 5. Font check
    print("\n=== 5. FONTS ===")
    fonts = page.evaluate('''() => {
        const results = [];
        const elements = [
            {sel: 'h1', name: 'H1'},
            {sel: 'h2', name: 'H2'},
            {sel: 'p', name: 'Body P'},
        ];
        elements.forEach(e => {
            const el = document.querySelector(e.sel);
            if (el) {
                const cs = getComputedStyle(el);
                results.push({name: e.name, fontFamily: cs.fontFamily, fontSize: cs.fontSize, fontWeight: cs.fontWeight});
            }
        });
        // Check for eyebrow text
        const eyebrow = document.querySelector('[style*="uppercase"]');
        if (eyebrow) {
            const cs = getComputedStyle(eyebrow);
            results.push({name: 'Eyebrow', fontFamily: cs.fontFamily, fontSize: cs.fontSize, fontWeight: cs.fontWeight});
        }
        return results;
    }''')
    for f in fonts:
        print(f"  {f['name']}: font={f['fontFamily'][:50]} size={f['size'] if 'size' in f else f['fontSize']} weight={f['fontWeight']}")
    
    # 6. Width check
    print("\n=== 6. WIDTH CHECK ===")
    width = page.evaluate('document.querySelector("#root").offsetWidth')
    root_width = page.evaluate('document.querySelector("#root > div").offsetWidth')
    print(f"  #root width: {width}px")
    print(f"  EmailShell width: {root_width}px")
    
    # 7. Above fold check
    print("\n=== 7. ABOVE FOLD (420x568) ===")
    page2 = browser.new_page(viewport={'width': 420, 'height': 568})
    page2.goto(html_path)
    page2.wait_for_load_state('networkidle')
    time.sleep(3)
    above_fold = page2.evaluate('''() => {
        const root = document.querySelector('#root');
        const children = root.querySelectorAll('div, h1, h2, img, a');
        const visible = [];
        children.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < 568 && rect.bottom > 0 && el.innerText && el.innerText.trim().length > 0) {
                visible.push({
                    tag: el.tagName,
                    text: el.innerText.substring(0, 50),
                    top: Math.round(rect.top),
                    bottom: Math.round(rect.bottom)
                });
            }
        });
        return visible.slice(0, 15);
    }''')
    for v in above_fold:
        print(f"  {v['tag']} top={v['top']} bottom={v['bottom']} text=\"{v['text'][:40]}\"")
    
    # 8. CTA dimensions
    print("\n=== 8. CTA DIMENSIONS ===")
    cta = page.evaluate('''() => {
        const links = document.querySelectorAll('a');
        const results = [];
        links.forEach(l => {
            const text = (l.innerText || l.textContent || '').trim();
            if (text.includes('Bundle') || text.includes('single pairs')) {
                const r = l.getBoundingClientRect();
                const cs = getComputedStyle(l);
                results.push({
                    text: text.substring(0, 60),
                    width: Math.round(r.width),
                    height: Math.round(r.height),
                    bg: cs.backgroundColor,
                    padding: cs.padding,
                    fontSize: cs.fontSize,
                    fontWeight: cs.fontWeight
                });
            }
        });
        return results;
    }''')
    for c in cta:
        print(f"  \"{c['text'][:50]}\" -> {c['width']}x{c['height']}px bg={c['bg']} padding={c['padding']}")
    
    # 9. Gradient bands
    print("\n=== 9. GRADIENT BANDS ===")
    bands = page.evaluate('''() => {
        const divs = document.querySelectorAll('#root div');
        const results = [];
        divs.forEach(d => {
            const cs = getComputedStyle(d);
            if (cs.background && cs.background.includes('gradient')) {
                const r = d.getBoundingClientRect();
                results.push({
                    height: Math.round(r.height),
                    bg: cs.background.substring(0, 100),
                    top: Math.round(r.top)
                });
            }
        });
        return results;
    }''')
    for b in bands:
        print(f"  height={b['height']}px top={b['top']}px bg={b['bg'][:80]}")
    
    # 10. Wave dividers
    print("\n=== 10. WAVE DIVIDERS ===")
    waves = page.evaluate('''() => {
        const svgs = document.querySelectorAll('#root svg');
        const results = [];
        svgs.forEach(svg => {
            const paths = svg.querySelectorAll('path');
            paths.forEach(p => {
                const d = p.getAttribute('d');
                if (d && d.includes('C') && d.includes(',')) {
                    const r = svg.getBoundingClientRect();
                    results.push({width: Math.round(r.width), height: Math.round(r.height), top: Math.round(r.top)});
                }
            });
        });
        return results;
    }''')
    for w in waves:
        print(f"  SVG wave: {w['width']}x{w['height']}px at top={w['top']}px")
    
    # 11. All text content extraction for copy verification
    print("\n=== 11. FULL TEXT (for copy comparison) ===")
    all_text = page.evaluate('document.querySelector("#root").innerText')
    print(all_text)
    
    browser.close()
