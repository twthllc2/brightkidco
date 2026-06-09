#!/usr/bin/env python3
"""Deep verification of browse-04-e1 render — gather all measurements."""
import json
from playwright.sync_api import sync_playwright

OUT_DIR = "/root/projects/brightkidco/outputs/verification/browse"
HTML_FILE = f"{OUT_DIR}/browse-04-e1-render.html"
file_uri = f"file://{HTML_FILE}"

with sync_playwright() as p:
    browser = p.chromium.launch()
    ctx = browser.new_context(viewport={"width": 420, "height": 800})
    page = ctx.new_page()
    page.goto(file_uri, wait_until="networkidle")
    page.wait_for_timeout(2000)
    
    data = page.evaluate("""() => {
        const root = document.getElementById('root');
        const email = root.firstElementChild;
        const result = {};
        
        // 1. Rendered dimensions
        const emailRect = email.getBoundingClientRect();
        result.width = emailRect.width;
        result.height = emailRect.height;
        
        // 2. All text content extracted section by section
        const sections = [];
        const children = email.children;
        for (let i = 0; i < children.length; i++) {
            const child = children[i];
            const text = child.innerText.trim();
            if (text.length > 0) {
                const rect = child.getBoundingClientRect();
                sections.push({
                    index: i,
                    tag: child.tagName,
                    text: text.substring(0, 200),
                    height: rect.height,
                    y: rect.y
                });
            }
        }
        result.sections = sections;
        
        // 3. Color sampling — get 10+ element colors
        const colorSamples = [];
        const selectors = [
            {sel: 'h1', label: 'H1 headline'},
            {sel: 'h1 + p', label: 'Subhead'},
        ];
        
        // Sample colors from specific elements
        const allDivs = email.querySelectorAll('div');
        let sampled = 0;
        for (const div of allDivs) {
            if (sampled >= 12) break;
            const style = window.getComputedStyle(div);
            const bg = style.backgroundColor;
            const color = style.color;
            if (bg !== 'rgba(0, 0, 0, 0)' && bg !== 'rgb(255, 255, 255)') {
                const rect = div.getBoundingClientRect();
                if (rect.height > 5 && rect.width > 50) {
                    colorSamples.push({
                        label: div.textContent.substring(0, 40).trim(),
                        bg, color,
                        fontSize: style.fontSize,
                        fontFamily: style.fontFamily.substring(0, 40),
                        fontWeight: style.fontWeight,
                        width: Math.round(rect.width),
                        height: Math.round(rect.height)
                    });
                    sampled++;
                }
            }
        }
        result.colorSamples = colorSamples;
        
        // 4. Font family checks
        const fontChecks = [];
        const h1 = email.querySelector('h1');
        if (h1) {
            const s = window.getComputedStyle(h1);
            fontChecks.push({el: 'h1', family: s.family, size: s.size, weight: s.weight, color: s.color, lineHeight: s.lineHeight});
        }
        const pullQuote = email.querySelectorAll('p');
        for (const p of pullQuote) {
            const s = window.getComputedStyle(p);
            if (s.fontFamily.includes('Fraunces')) {
                fontChecks.push({el: 'pull-quote', family: s.family, size: s.size, weight: s.weight, color: s.color, fontStyle: s.fontStyle});
                break;
            }
        }
        result.fontChecks = fontChecks;
        
        // 5. CTA button measurement
        const cta = email.querySelector('a[href="#"]');
        if (cta) {
            const rect = cta.getBoundingClientRect();
            const style = window.getComputedStyle(cta);
            result.cta = {
                text: cta.textContent.trim(),
                width: Math.round(rect.width),
                height: Math.round(rect.height),
                bg: style.backgroundColor,
                color: style.color,
                borderRadius: style.borderRadius,
                fontSize: style.fontSize,
                fontWeight: style.fontWeight,
                padding: style.padding
            };
        }
        
        // 6. Image info
        const imgs = email.querySelectorAll('img');
        result.images = Array.from(imgs).map(img => ({
            src: img.src.split('/').pop(),
            alt: img.alt,
            naturalWidth: img.naturalWidth,
            naturalHeight: img.naturalHeight,
            renderedWidth: Math.round(img.getBoundingClientRect().width),
            renderedHeight: Math.round(img.getBoundingClientRect().height),
            objectFit: window.getComputedStyle(img).objectFit
        }));
        
        // 7. Gradient bands
        const gradientBands = [];
        for (const div of allDivs) {
            const bg = window.getComputedStyle(div).backgroundImage;
            if (bg.includes('gradient')) {
                const rect = div.getBoundingClientRect();
                if (rect.height < 20 && rect.height > 0) {
                    gradientBands.push({
                        height: Math.round(rect.height),
                        bg: bg.substring(0, 80),
                        y: Math.round(rect.y)
                    });
                }
            }
        }
        result.gradientBands = gradientBands;
        
        // 8. Card shadows
        const cards = [];
        for (const div of allDivs) {
            const style = window.getComputedStyle(div);
            if (style.boxShadow && style.boxShadow !== 'none') {
                const rect = div.getBoundingClientRect();
                if (rect.height > 50) {
                    cards.push({
                        shadow: style.boxShadow,
                        borderRadius: style.borderRadius,
                        border: style.border,
                        height: Math.round(rect.height),
                        bg: style.backgroundColor
                    });
                }
            }
        }
        result.cards = cards.slice(0, 5);
        
        // 9. Section rules (1px lines)
        const rules = [];
        for (const div of allDivs) {
            const rect = div.getBoundingClientRect();
            const bg = window.getComputedStyle(div).backgroundColor;
            if (rect.height <= 2 && rect.height > 0 && bg !== 'rgba(0, 0, 0, 0)') {
                rules.push({height: Math.round(rect.height * 10) / 10, bg, y: Math.round(rect.y)});
            }
        }
        result.rules = rules;
        
        // 10. Full text for copy comparison
        result.fullText = email.innerText;
        
        return result;
    }""")
    
    browser.close()
    
    print(json.dumps(data, indent=2))
