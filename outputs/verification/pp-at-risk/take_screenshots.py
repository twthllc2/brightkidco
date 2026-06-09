#!/usr/bin/env python3
from playwright.sync_api import sync_playwright

html_path = 'file:///root/projects/brightkidco/outputs/verification/pp-at-risk/atrisk-23-e3-render.html'
out_dir = '/root/projects/brightkidco/outputs/verification/pp-at-risk'

with sync_playwright() as p:
    browser = p.chromium.launch()
    
    # 1. Full page screenshot at 420px width
    page = browser.new_page(viewport={'width': 420, 'height': 800})
    page.goto(html_path)
    page.wait_for_load_state('networkidle')
    page.screenshot(path=f'{out_dir}/atrisk-23-e3-420-full.png', full_page=True)
    print('Full page screenshot saved')
    
    # 2. Above the fold (420x568)
    page2 = browser.new_page(viewport={'width': 420, 'height': 568})
    page2.goto(html_path)
    page2.wait_for_load_state('networkidle')
    page2.screenshot(path=f'{out_dir}/atrisk-23-e3-420x568-above-fold.png', full_page=False)
    print('Above the fold screenshot saved')
    
    # 3. Mobile (375px)
    page3 = browser.new_page(viewport={'width': 375, 'height': 812})
    page3.goto(html_path)
    page3.wait_for_load_state('networkidle')
    page3.screenshot(path=f'{out_dir}/atrisk-23-e3-375-mobile.png', full_page=True)
    print('Mobile screenshot saved')
    
    browser.close()
    print('All screenshots complete')
