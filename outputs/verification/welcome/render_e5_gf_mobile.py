import os
os.environ['PLAYWRIGHT_BROWSERS_PATH'] = '/root/.cache/ms-playwright'

from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page(viewport={'width': 320, 'height': 800})
    
    console_errors = []
    page.on('console', lambda msg: console_errors.append(msg.text) if msg.type == 'error' else None)
    
    page.goto('file:///root/projects/brightkidco/outputs/verification/welcome/render-welcome-01-e5-gf-static.html', timeout=30000)
    page.wait_for_timeout(3000)
    
    page.screenshot(path='/root/projects/brightkidco/outputs/verification/welcome/welcome-01-e5-gf-mobile-screenshot.png', full_page=True)
    
    height = page.evaluate('document.body.scrollHeight')
    width = page.evaluate('document.body.scrollWidth')
    
    # Check for horizontal overflow
    has_overflow = page.evaluate('document.body.scrollWidth > document.body.clientWidth')
    
    print(f'Mobile (320px) height: {height}px')
    print(f'Mobile (320px) width: {width}px')
    print(f'Horizontal overflow: {has_overflow}')
    
    if console_errors:
        print(f'Console errors ({len(console_errors)}):')
        for e in console_errors:
            print(f'  - {e}')
    else:
        print('No console errors')
    
    # Check for truncated/overlapping text
    elements = page.evaluate('''() => {
        const results = [];
        const allElements = document.querySelectorAll('*');
        for (let el of allElements) {
            const rect = el.getBoundingClientRect();
            if (rect.right > 320) {
                results.push({
                    tag: el.tagName,
                    text: el.textContent.substring(0, 50),
                    right: rect.right
                });
            }
        }
        return results.slice(0, 10);
    }''')
    
    if elements:
        print(f'Elements with horizontal overflow: {len(elements)}')
        for e in elements[:5]:
            print(f'  - {e["tag"]}: {e["text"][:40]}... (right: {e["right"]:.0f}px)')
    else:
        print('No horizontal overflow detected')
    
    browser.close()
    print('Mobile screenshot saved successfully')
