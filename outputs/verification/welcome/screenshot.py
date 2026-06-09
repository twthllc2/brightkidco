from playwright.sync_api import sync_playwright
import os

HTML_PATH = "/root/projects/brightkidco/outputs/verification/welcome/welcome-01-e4-l2-render.html"
OUT_DIR = "/root/projects/brightkidco/outputs/verification/welcome"

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    
    # 1. 375px mobile screenshot
    page = browser.new_page(viewport={"width": 375, "height": 800})
    page.goto(f"file://{HTML_PATH}", wait_until="networkidle")
    page.wait_for_timeout(2000)
    path1 = os.path.join(OUT_DIR, "welcome-01-e4-l2-375-mobile.png")
    page.screenshot(path=path1, full_page=True)
    sz1 = os.path.getsize(path1)
    print(f"375px mobile: {sz1} bytes")
    page.close()
    
    # 2. 420px full screenshot
    page = browser.new_page(viewport={"width": 420, "height": 800})
    page.goto(f"file://{HTML_PATH}", wait_until="networkidle")
    page.wait_for_timeout(2000)
    path2 = os.path.join(OUT_DIR, "welcome-01-e4-l2-420-full.png")
    page.screenshot(path=path2, full_page=True)
    sz2 = os.path.getsize(path2)
    print(f"420px full: {sz2} bytes")
    page.close()
    
    # 3. 420x568 above-fold screenshot
    page = browser.new_page(viewport={"width": 420, "height": 568})
    page.goto(f"file://{HTML_PATH}", wait_until="networkidle")
    page.wait_for_timeout(2000)
    path3 = os.path.join(OUT_DIR, "welcome-01-e4-l2-420x568-above-fold.png")
    page.screenshot(path=path3, full_page=False)
    sz3 = os.path.getsize(path3)
    print(f"420x568 above-fold: {sz3} bytes")
    page.close()
    
    browser.close()

# Verify all files
for name, expected in [
    ("welcome-01-e4-l2-375-mobile.png", 100),
    ("welcome-01-e4-l2-420-full.png", 100),
    ("welcome-01-e4-l2-420x568-above-fold.png", 100),
]:
    fp = os.path.join(OUT_DIR, name)
    if os.path.exists(fp):
        sz = os.path.getsize(fp)
        status = "OK" if sz > expected else "TOO SMALL"
        print(f"  {name}: {sz} bytes [{status}]")
    else:
        print(f"  {name}: MISSING!")
