#!/usr/bin/env python3
"""Take 3 screenshots for welcome-01-e8-l2 using Playwright."""
import os
from playwright.sync_api import sync_playwright

HTML_FILE = "/root/projects/brightkidco/outputs/verification/welcome/welcome-01-e8-l2-render.html"
OUTPUT_DIR = "/root/projects/brightkidco/outputs/verification/welcome"

def main():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True, args=["--no-sandbox", "--disable-dev-shm-usage"])

        # 1. 375px mobile full-page screenshot
        print("[1/3] 375px mobile screenshot...")
        page1 = browser.new_page(viewport={"width": 375, "height": 800})
        page1.goto(f"file://{HTML_FILE}", wait_until="networkidle", timeout=60000)
        page1.wait_for_timeout(3000)
        page1.wait_for_function("document.getElementById('root') && document.getElementById('root').children.length > 0", timeout=30000)
        page1.wait_for_timeout(1000)
        path1 = os.path.join(OUTPUT_DIR, "welcome-01-e8-l2-375-mobile.png")
        page1.screenshot(path=path1, full_page=True)
        sz1 = os.path.getsize(path1)
        print(f"  Saved: {path1} ({sz1} bytes)")
        page1.close()

        # 2. 420px full-page screenshot
        print("[2/3] 420px full-page screenshot...")
        page2 = browser.new_page(viewport={"width": 420, "height": 800})
        page2.goto(f"file://{HTML_FILE}", wait_until="networkidle", timeout=60000)
        page2.wait_for_timeout(3000)
        page2.wait_for_function("document.getElementById('root') && document.getElementById('root').children.length > 0", timeout=30000)
        page2.wait_for_timeout(1000)
        path2 = os.path.join(OUTPUT_DIR, "welcome-01-e8-l2-420-full.png")
        page2.screenshot(path=path2, full_page=True)
        sz2 = os.path.getsize(path2)
        print(f"  Saved: {path2} ({sz2} bytes)")
        page2.close()

        # 3. 420x568 above-fold viewport screenshot
        print("[3/3] 420x568 above-fold screenshot...")
        page3 = browser.new_page(viewport={"width": 420, "height": 568})
        page3.goto(f"file://{HTML_FILE}", wait_until="networkidle", timeout=60000)
        page3.wait_for_timeout(3000)
        page3.wait_for_function("document.getElementById('root') && document.getElementById('root').children.length > 0", timeout=30000)
        page3.wait_for_timeout(1000)
        path3 = os.path.join(OUTPUT_DIR, "welcome-01-e8-l2-420x568-above-fold.png")
        page3.screenshot(path=path3, full_page=False)
        sz3 = os.path.getsize(path3)
        print(f"  Saved: {path3} ({sz3} bytes)")
        page3.close()

        browser.close()

    # Verify all files
    print("\n--- Verification ---")
    all_ok = True
    for name in ["welcome-01-e8-l2-375-mobile.png",
                  "welcome-01-e8-l2-420-full.png",
                  "welcome-01-e8-l2-420x568-above-fold.png"]:
        fp = os.path.join(OUTPUT_DIR, name)
        exists = os.path.exists(fp)
        sz = os.path.getsize(fp) if exists else 0
        ok = exists and sz > 100
        status = "OK" if ok else "FAIL"
        print(f"  {status}: {name} — {sz} bytes")
        if not ok:
            all_ok = False

    if all_ok:
        print("\nAll 3 screenshots generated successfully.")
    else:
        print("\nSome screenshots failed!")
        exit(1)

if __name__ == "__main__":
    main()
