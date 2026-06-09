#!/usr/bin/env python3
"""Render welcome-01-e8-gf email to screenshots at required viewports."""
import os
from playwright.sync_api import sync_playwright

HTML_PATH = "/root/projects/brightkidco/outputs/verification/welcome/welcome-01-e8-gf-render.html"
OUT_DIR = "/root/projects/brightkidco/outputs/verification/welcome"

def main():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True, args=["--allow-file-access-from-files"])

        # 1. Mobile at 375px width (full page)
        page = browser.new_page(viewport={"width": 375, "height": 800})
        page.goto(f"file://{HTML_PATH}", wait_until="networkidle")
        page.wait_for_timeout(5000)
        page.screenshot(
            path=os.path.join(OUT_DIR, "welcome-01-e8-gf-375-mobile.png"),
            full_page=True
        )
        print("OK: welcome-01-e8-gf-375-mobile.png saved")
        page.close()

        # 2. Full page at 420px width
        page = browser.new_page(viewport={"width": 420, "height": 800})
        page.goto(f"file://{HTML_PATH}", wait_until="networkidle")
        page.wait_for_timeout(5000)
        page.screenshot(
            path=os.path.join(OUT_DIR, "welcome-01-e8-gf-420-full.png"),
            full_page=True
        )
        print("OK: welcome-01-e8-gf-420-full.png saved")
        page.close()

        # 3. Above-fold at 420x568
        page = browser.new_page(viewport={"width": 420, "height": 568})
        page.goto(f"file://{HTML_PATH}", wait_until="networkidle")
        page.wait_for_timeout(5000)
        page.screenshot(
            path=os.path.join(OUT_DIR, "welcome-01-e8-gf-420x568-above-fold.png"),
            full_page=False
        )
        print("OK: welcome-01-e8-gf-420x568-above-fold.png saved")
        page.close()

        browser.close()
        print("All screenshots done.")

if __name__ == "__main__":
    main()
