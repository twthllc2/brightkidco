#!/usr/bin/env python3
"""Take screenshots of mid-13-d45 render HTML using Playwright."""
import os
from playwright.sync_api import sync_playwright

OUT = "/root/projects/brightkidco/outputs/verification/pp-mid-checkin"
HTML = os.path.join(OUT, "mid-13-d45-render.html")
FILE_URL = f"file://{HTML}"

def main():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        errors = []

        # 1. Full page at 420px → mid-13-d45-420-full.png
        page = browser.new_page(viewport={"width": 420, "height": 800})
        page.on("console", lambda msg: errors.append(msg.text) if msg.type == "error" else None)
        page.on("pageerror", lambda exc: errors.append(str(exc)))
        page.goto(FILE_URL, wait_until="networkidle")
        page.wait_for_timeout(3000)
        full_path = os.path.join(OUT, "mid-13-d45-420-full.png")
        page.screenshot(path=full_path, full_page=True)
        print(f"Full 420px: {full_path}")

        # 2. Mobile at 375px → mid-13-d45-375-mobile.png
        page2 = browser.new_page(viewport={"width": 375, "height": 667})
        page2.goto(FILE_URL, wait_until="networkidle")
        page2.wait_for_timeout(2000)
        mob_path = os.path.join(OUT, "mid-13-d45-375-mobile.png")
        page2.screenshot(path=mob_path, full_page=True)
        print(f"Mobile 375px: {mob_path}")

        # 3. Above-fold at 420x568 → mid-13-d45-420x568-above-fold.png
        page3 = browser.new_page(viewport={"width": 420, "height": 568})
        page3.goto(FILE_URL, wait_until="networkidle")
        page3.wait_for_timeout(2000)
        abf_path = os.path.join(OUT, "mid-13-d45-420x568-above-fold.png")
        page3.screenshot(path=abf_path, full_page=False)
        print(f"Above-fold 420x568: {abf_path}")

        # Check console errors
        if errors:
            print(f"Console errors: {errors}")
        else:
            print("Console errors: none")

        browser.close()

if __name__ == "__main__":
    main()
