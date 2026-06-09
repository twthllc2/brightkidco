import os
os.environ['PLAYWRIGHT_BROWSERS_PATH'] = '/root/.cache/ms-playwright'

from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page(viewport={'width': 420, 'height': 800})
    
    console_errors = []
    page.on('console', lambda msg: console_errors.append(msg.text) if msg.type == 'error' else None)
    
    page.goto('file:///root/projects/brightkidco/outputs/verification/welcome/render-welcome-01-e5-gf-static.html', timeout=30000)
    page.wait_for_timeout(3000)
    
    page.screenshot(path='/root/projects/brightkidco/outputs/verification/welcome/welcome-01-e5-gf-screenshot.png', full_page=True)
    
    height = page.evaluate('document.body.scrollHeight')
    width = page.evaluate('document.body.scrollWidth')
    
    print(f'Page height: {height}px')
    print(f'Page width: {width}px')
    
    if console_errors:
        print(f'Console errors ({len(console_errors)}):')
        for e in console_errors:
            print(f'  - {e}')
    else:
        print('No console errors')
    
    browser.close()
    print('Screenshot saved successfully')
