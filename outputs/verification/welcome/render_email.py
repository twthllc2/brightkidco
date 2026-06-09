from playwright.sync_api import sync_playwright
import json

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page(viewport={'width': 420, 'height': 800})
    
    # Collect console messages
    console_errors = []
    page.on('console', lambda msg: console_errors.append(msg.text) if msg.type == 'error' else None)
    
    page.goto('file:///root/projects/brightkidco/outputs/verification/welcome/welcome-01-e2-l3-render.html')
    page.wait_for_timeout(4000)  # wait for fonts and React to render
    
    # Take full-page screenshot
    page.screenshot(path='/root/projects/brightkidco/outputs/verification/welcome/welcome-01-e2-l3-screenshot.png', full_page=True)
    
    # Get page height
    height = page.evaluate('document.body.scrollHeight')
    print(f'Page height: {height}px')
    
    # Check for console errors
    if console_errors:
        print(f'Console errors ({len(console_errors)}):')
        for e in console_errors:
            print(f'  - {e}')
    else:
        print('No console errors')
    
    # Check rendered width
    width = page.evaluate('document.body.scrollWidth')
    print(f'Page width: {width}px')
    
    browser.close()
    print('Screenshot saved successfully')
