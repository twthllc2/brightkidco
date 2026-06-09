import os
os.environ['PLAYWRIGHT_BROWSERS_PATH'] = '/root/.cache/ms-playwright'

from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page(viewport={'width': 420, 'height': 800})
    
    page.goto('file:///root/projects/brightkidco/outputs/verification/welcome/render-welcome-01-e5-gf-static.html', timeout=30000)
    page.wait_for_timeout(3000)
    
    # Check CTA tap targets (need 44px minimum)
    cta_results = page.evaluate('''() => {
        const links = document.querySelectorAll('a');
        const results = [];
        for (let a of links) {
            const rect = a.getBoundingClientRect();
            if (rect.height > 0) {
                results.push({
                    text: a.textContent.trim().substring(0, 60),
                    height: rect.height,
                    width: rect.width,
                    pass: rect.height >= 44
                });
            }
        }
        return results;
    }''')
    
    print("=== CTA TAP TARGET CHECK ===")
    for cta in cta_results:
        status = "PASS" if cta["pass"] else "FAIL"
        print(f"  {status}: \"{cta['text'][:50]}\" — {cta['height']:.0f}x{cta['width']:.0f}px")
    
    # Check above-the-fold (first 568px)
    above_fold = page.evaluate('''() => {
        const results = [];
        const els = document.querySelectorAll('*');
        for (let el of els) {
            const rect = el.getBoundingClientRect();
            if (rect.top < 568 && rect.height > 0) {
                const text = el.textContent.trim().substring(0, 50);
                if (text && !results.some(r => r.text === text)) {
                    results.push({
                        tag: el.tagName,
                        text: text,
                        top: rect.top,
                        height: rect.height
                    });
                }
            }
        }
        return results.slice(0, 15);
    }''')
    
    print("\n=== ABOVE THE FOLD (first 568px) ===")
    for item in above_fold:
        print(f"  {item['tag']}: \"{item['text'][:50]}\" at {item['top']:.0f}px")
    
    # Count CTAs in the entire email
    cta_count = page.evaluate('''() => {
        const links = document.querySelectorAll('a[href="#"]');
        return links.length;
    }''')
    print(f"\n=== CTA COUNT: {cta_count} (max 3 allowed) ===")
    
    # Check component diversity
    sections = page.evaluate('''() => {
        const divs = document.querySelectorAll('.hero, .letter, .edu-section, .reframe, .mechanism, .social-proof, .product, .trust-detail, .cta-section, .signoff, .footer');
        return Array.from(divs).map(d => d.className);
    }''')
    print(f"\n=== COMPONENT CATEGORIES ({len(sections)} unique types) ===")
    for s in sections:
        print(f"  - {s}")
    
    browser.close()
    print("\nAll checks complete")
