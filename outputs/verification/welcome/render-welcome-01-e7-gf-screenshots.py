import os
os.environ['PLAYWRIGHT_BROWSERS_PATH'] = '/root/.cache/ms-playwright'

from playwright.sync_api import sync_playwright
HTML_PATH = 'file:///root/projects/brightkidco/outputs/verification/welcome/render-welcome-01-e7-gf.html'
OUTPUT_DIR = '/root/projects/brightkidco/outputs/verification/welcome'
BASE_NAME = 'welcome-01-e7-gf'

with sync_playwright() as p:
    browser = p.chromium.launch()
    
    # 1. 375px mobile screenshot
    print("Taking 375px mobile screenshot...")
    page = browser.new_page(viewport={'width': 375, 'height': 800})
    page.goto(HTML_PATH, timeout=30000)
    page.wait_for_timeout(3000)
    page.screenshot(path=f'{OUTPUT_DIR}/{BASE_NAME}-375-mobile.png', full_page=True)
    height = page.evaluate('document.body.scrollHeight')
    print(f"  375px mobile: height={height}px")
    page.close()
    
    # 2. 420px full screenshot
    print("Taking 420px full screenshot...")
    page = browser.new_page(viewport={'width': 420, 'height': 800})
    page.goto(HTML_PATH, timeout=30000)
    page.wait_for_timeout(3000)
    page.screenshot(path=f'{OUTPUT_DIR}/{BASE_NAME}-420-full.png', full_page=True)
    height = page.evaluate('document.body.scrollHeight')
    print(f"  420px full: height={height}px")
    page.close()
    
    # 3. 420x568 above-fold screenshot
    print("Taking 420x568 above-fold screenshot...")
    page = browser.new_page(viewport={'width': 420, 'height': 568})
    page.goto(HTML_PATH, timeout=30000)
    page.wait_for_timeout(3000)
    page.screenshot(path=f'{OUTPUT_DIR}/{BASE_NAME}-420x568-above-fold.png', full_page=False)
    print(f"  420x568 above-fold: captured viewport only")
    page.close()
    
    browser.close()
    
    # Verify all files
    print("\nVerifying screenshots...")
    files = [
        f'{BASE_NAME}-375-mobile.png',
        f'{BASE_NAME}-420-full.png',
        f'{BASE_NAME}-420x568-above-fold.png',
    ]
    all_ok = True
    for f in files:
        path = f'{OUTPUT_DIR}/{f}'
        if os.path.exists(path):
            size = os.path.getsize(path)
            status = "OK" if size > 100 else "TOO SMALL"
            print(f"  {f}: {size} bytes - {status}")
            if size <= 100:
                all_ok = False
        else:
            print(f"  {f}: MISSING")
            all_ok = False
    
    if all_ok:
        print("\nAll screenshots generated successfully!")
    else:
        print("\nSome screenshots failed verification!")
        exit(1)