#!/usr/bin/env python3
"""Take screenshot 2: 420px full page"""
from playwright.sync_api import sync_playwright

RENDER = '/root/projects/brightkidco/outputs/verification/welcome/welcome-01-e7-l3-render.html'
OUT = '/root/projects/brightkidco/outputs/verification/welcome'

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page(viewport={'width': 420, 'height': 800})
    page.goto('file://' + RENDER)
    page.wait_for_timeout(3000)
    page.screenshot(path=OUT + '/welcome-01-e7-l3-420-full.png', full_page=True)
    h = page.evaluate('document.body.scrollHeight')
    print(f'420px full: height={h}px')
    page.close()
    browser.close()
    print('Done')
