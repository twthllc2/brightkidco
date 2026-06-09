from playwright.sync_api import sync_playwright
import os

HTML_PATH = "/root/projects/brightkidco/outputs/verification/welcome/welcome-01-e4-l2-render.html"
OUT_DIR = "/root/projects/brightkidco/outputs/verification/welcome"

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    
    # 420px full screenshot
    page = browser.new_page(viewport={"width": 420, "height": 800})
    page.goto(f"file://{HTML_PATH}", wait_until="networkidle")
    page.wait_for_timeout(2000)
    path2 = os.path.join(OUT_DIR, "welcome-01-e4-l2-420-full.png")
    page.screenshot(path=path2, full_page=True)
    sz2 = os.path.getsize(path2)
    print(f"420px full: {sz2} bytes")
    page.close()
    
    browser.close()

print("Done")
