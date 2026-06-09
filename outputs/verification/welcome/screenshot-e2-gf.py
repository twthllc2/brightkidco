import os
os.environ["PLAYWRIGHT_BROWSERS_PATH"] = "/root/.cache/ms-playwright"

from playwright.sync_api import sync_playwright

HTML_PATH = "/root/projects/brightkidco/outputs/verification/welcome/welcome-01-e2-gf-render.html"
OUT_DIR = "/root/projects/brightkidco/outputs/verification/welcome"

def take_screenshot(viewport_width, viewport_height, filename, full_page=True):
    with sync_playwright() as p:
        browser = p.chromium.launch(
            args=[
                "--no-sandbox",
                "--disable-gpu",
                "--disable-dev-shm-usage",
                "--disable-setuid-sandbox",
            ],
            headless=True,
        )
        page = browser.new_page(viewport={"width": viewport_width, "height": viewport_height})
        page.goto(f"file://{HTML_PATH}", wait_until="networkidle")
        page.wait_for_timeout(2000)
        
        root_info = page.evaluate("""() => {
            const root = document.getElementById('root');
            return {
                hasContent: root && root.innerHTML.length > 100,
                height: root ? root.scrollHeight : 0,
            };
        }""")
        print(f"Root info ({viewport_width}px): {root_info}")
        
        if root_info["hasContent"]:
            page.screenshot(path=f"{OUT_DIR}/{filename}", full_page=full_page)
            print(f"Saved: {filename}")
        else:
            print(f"ERROR: Page did not render at {viewport_width}px")
        
        browser.close()

# 1) 375px mobile
take_screenshot(375, 800, "welcome-01-e2-gf-375-mobile.png", full_page=True)

# 2) 420px full
take_screenshot(420, 800, "welcome-01-e2-gf-420-full.png", full_page=True)

# 3) 420x568 above-fold
take_screenshot(420, 568, "welcome-01-e2-gf-420x568-above-fold.png", full_page=False)

print("Done!")

# Verify file sizes
for name in [
    "welcome-01-e2-gf-375-mobile.png",
    "welcome-01-e2-gf-420-full.png",
    "welcome-01-e2-gf-420x568-above-fold.png",
]:
    path = os.path.join(OUT_DIR, name)
    if os.path.exists(path):
        size = os.path.getsize(path)
        status = "OK" if size > 100 else "TOO SMALL"
        print(f"  {name}: {size} bytes [{status}]")
    else:
        print(f"  {name}: MISSING")
