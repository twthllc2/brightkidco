import os
os.environ["PLAYWRIGHT_BROWSERS_PATH"] = "/root/.cache/ms-playwright"

from playwright.sync_api import sync_playwright

HTML_PATH = "/root/projects/brightkidco/outputs/verification/welcome/welcome-01-e2-gf-render.html"
OUT_DIR = "/root/projects/brightkidco/outputs/verification/welcome"

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
    page = browser.new_page(viewport={"width": 420, "height": 800})
    page.goto(f"file://{HTML_PATH}", wait_until="networkidle")
    page.wait_for_timeout(3000)
    
    root_info = page.evaluate("""() => {
        const root = document.getElementById('root');
        return {
            hasContent: root && root.innerHTML.length > 100,
            height: root ? root.scrollHeight : 0,
            innerHTMLLength: root ? root.innerHTML.length : 0,
        };
    }""")
    print(f"Root info: {root_info}")
    
    if root_info["hasContent"]:
        page.screenshot(path=f"{OUT_DIR}/welcome-01-e2-gf-420-full.png", full_page=True)
        print("Saved: welcome-01-e2-gf-420-full.png")
    else:
        print("ERROR: Page did not render")
        # Debug: check what's on the page
        content = page.evaluate("document.body.innerHTML.substring(0, 500)")
        print(f"Body content: {content}")
    
    browser.close()

# Verify
path = os.path.join(OUT_DIR, "welcome-01-e2-gf-420-full.png")
if os.path.exists(path):
    size = os.path.getsize(path)
    status = "OK" if size > 100 else "TOO SMALL"
    print(f"  welcome-01-e2-gf-420-full.png: {size} bytes [{status}]")
else:
    print("  welcome-01-e2-gf-420-full.png: MISSING")
