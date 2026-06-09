#!/usr/bin/env python3
"""Render welcome-01-e5-l2 to screenshots using Playwright."""
import os
import time
from playwright.sync_api import sync_playwright

HTML_FILE = "/root/projects/brightkidco/outputs/verification/welcome/welcome-01-e5-l2-render.html"
OUTPUT_DIR = "/root/projects/brightkidco/outputs/verification/welcome"

def main():
    with sync_playwright() as p:
        browser = p.chromium.launch(
            headless=True,
            args=["--no-sandbox", "--disable-dev-shm-usage"]
        )

        # 1. Full page at 420px width
        print("[1/3] Full page screenshot (420px width)...")
        page1 = browser.new_page(viewport={"width": 420, "height": 800})
        page1.goto(f"file://{HTML_FILE}", wait_until="networkidle", timeout=60000)
        page1.wait_for_timeout(3000)
        page1.wait_for_function(
            "document.getElementById('root') && document.getElementById('root').children.length > 0",
            timeout=30000
        )
        page1.wait_for_timeout(1000)
        path1 = os.path.join(OUTPUT_DIR, "welcome-01-e5-l2-420-full.png")
        page1.screenshot(path=path1, full_page=True)
        print(f"  Saved: {path1}")
        page1.close()

        # 2. Mobile at 375px width
        print("[2/3] Mobile screenshot (375px width)...")
        page2 = browser.new_page(viewport={"width": 375, "height": 800})
        page2.goto(f"file://{HTML_FILE}", wait_until="networkidle", timeout=60000)
        page2.wait_for_timeout(3000)
        page2.wait_for_function(
            "document.getElementById('root') && document.getElementById('root').children.length > 0",
            timeout=30000
        )
        page2.wait_for_timeout(1000)
        path2 = os.path.join(OUTPUT_DIR, "welcome-01-e5-l2-375-mobile.png")
        page2.screenshot(path=path2, full_page=True)
        print(f"  Saved: {path2}")
        page2.close()

        # 3. Above-fold at 420x568
        print("[3/3] Above-fold screenshot (420x568)...")
        page3 = browser.new_page(viewport={"width": 420, "height": 568})
        page3.goto(f"file://{HTML_FILE}", wait_until="networkidle", timeout=60000)
        page3.wait_for_timeout(3000)
        page3.wait_for_function(
            "document.getElementById('root') && document.getElementById('root').children.length > 0",
            timeout=30000
        )
        page3.wait_for_timeout(1000)
        path3 = os.path.join(OUTPUT_DIR, "welcome-01-e5-l2-420x568-above-fold.png")
        page3.screenshot(path=path3, full_page=False)
        print(f"  Saved: {path3}")
        page3.close()

        browser.close()

    print("\n[DONE] All screenshots completed.")

if __name__ == "__main__":
    main()
