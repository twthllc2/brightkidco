#!/usr/bin/env python3
"""Take 3 screenshots of welcome-01-e4-l1"""
from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch()
    
    console_errors = []
    
    # Screenshot 1: 375px mobile
    print("Taking 375px mobile screenshot...")
    page = browser.new_page(viewport={'width': 375, 'height': 800})
    page.on('console', lambda msg: console_errors.append(msg.text) if msg.type == 'error' else None)
    page.goto('file:///root/projects/brightkidco/outputs/verification/welcome/welcome-01-e4-l1-render.html')
    page.wait_for_timeout(4000)
    page.screenshot(
        path='/root/projects/brightkidco/outputs/verification/welcome/welcome-01-e4-l1-375-mobile.png',
        full_page=True
    )
    height = page.evaluate('document.body.scrollHeight')
    print(f'  375px mobile: height={height}px')
    page.close()
    
    # Screenshot 2: 420px full
    print("Taking 420px full screenshot...")
    page = browser.new_page(viewport={'width': 420, 'height': 800})
    page.on('console', lambda msg: console_errors.append(msg.text) if msg.type == 'error' else None)
    page.goto('file:///root/projects/brightkidco/outputs/verification/welcome/welcome-01-e4-l1-render.html')
    page.wait_for_timeout(4000)
    page.screenshot(
        path='/root/projects/brightkidco/outputs/verification/welcome/welcome-01-e4-l1-420-full.png',
        full_page=True
    )
    height = page.evaluate('document.body.scrollHeight')
    print(f'  420px full: height={height}px')
    page.close()
    
    # Screenshot 3: 420x568 above-fold
    print("Taking 420x568 above-fold screenshot...")
    page = browser.new_page(viewport={'width': 420, 'height': 568})
    page.on('console', lambda msg: console_errors.append(msg.text) if msg.type == 'error' else None)
    page.goto('file:///root/projects/brightkidco/outputs/verification/welcome/welcome-01-e4-l1-render.html')
    page.wait_for_timeout(4000)
    page.screenshot(
        path='/root/projects/brightkidco/outputs/verification/welcome/welcome-01-e4-l1-420x568-above-fold.png',
        full_page=False  # viewport only, not full page
    )
    print(f'  420x568 above-fold: viewport only')
    page.close()
    
    browser.close()
    
    if console_errors:
        print(f'\nConsole errors ({len(console_errors)}):')
        for e in console_errors:
            print(f'  - {e}')
    else:
        print('\nNo console errors')
    
    print('\nAll 3 screenshots saved!')
