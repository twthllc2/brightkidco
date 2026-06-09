#!/usr/bin/env python3
"""Take screenshots of mid-13-d30 render HTML using Playwright."""
import os
from playwright.sync_api import sync_playwright

OUT = "/root/projects/brightkidco/outputs/verification/pp-mid-checkin"
HTML = os.path.join(OUT, "mid-13-d30-render.html")
FILE_URL = f"file://{HTML}"

def main():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)

        # 1. Full page at 420px
        page = browser.new_page(viewport={"width": 420, "height": 800})
        page.goto(FILE_URL, wait_until="networkidle")
        page.wait_for_timeout(3000)
        full_path = os.path.join(OUT, "mid-13-d30-420-full.png")
        page.screenshot(path=full_path, full_page=True)
        print(f"Full 420px: {full_path}")
        dims_420 = page.evaluate("({ w: document.querySelector('#root > div').offsetWidth, h: document.querySelector('#root > div').offsetHeight })")
        print(f"420px dims: {dims_420}")

        # 2. Mobile at 375px
        page2 = browser.new_page(viewport={"width": 375, "height": 667})
        page2.goto(FILE_URL, wait_until="networkidle")
        page2.wait_for_timeout(2000)
        mob_path = os.path.join(OUT, "mid-13-d30-375-mobile.png")
        page2.screenshot(path=mob_path, full_page=True)
        print(f"Mobile 375px: {mob_path}")

        # 3. Above-fold at 420x568
        page3 = browser.new_page(viewport={"width": 420, "height": 568})
        page3.goto(FILE_URL, wait_until="networkidle")
        page3.wait_for_timeout(2000)
        abf_path = os.path.join(OUT, "mid-13-d30-420x568-above-fold.png")
        page3.screenshot(path=abf_path, full_page=False)
        print(f"Above-fold 420x568: {abf_path}")

        browser.close()

if __name__ == "__main__":
    main()
