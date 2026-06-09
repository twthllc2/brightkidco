from playwright.sync_api import sync_playwright
import os

HTML_PATH = "/root/projects/brightkidco/outputs/verification/welcome/welcome-01-e4-l2-render.html"
OUT_DIR = "/root/projects/brightkidco/outputs/verification/welcome"

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    
    # 420x568 above-fold screenshot
    page = browser.new_page(viewport={"width": 420, "height": 568})
    page.goto(f"file://{HTML_PATH}", wait_until="networkidle")
    page.wait_for_timeout(2000)
    path3 = os.path.join(OUT_DIR, "welcome-01-e4-l2-420x568-above-fold.png")
    page.screenshot(path=path3, full_page=False)
    sz3 = os.path.getsize(path3)
    print(f"420x568 above-fold: {sz3} bytes")
    page.close()
    
    browser.close()

print("Done")
