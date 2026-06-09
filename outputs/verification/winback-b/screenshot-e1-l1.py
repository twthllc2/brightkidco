#!/usr/bin/env python3
"""Render winback-b-24-e1-l1 email to screenshots using Playwright."""
import os
from playwright.sync_api import sync_playwright

HTML_PATH = "/root/projects/brightkidco/outputs/verification/winback-b/render-winback-b-24-e1-l1.html"
OUT_DIR = "/root/projects/brightkidco/outputs/verification/winback-b"

def main():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        
        # 1. Full page at 420px width
        page = browser.new_page(viewport={"width": 420, "height": 800})
        page.goto(f"file://{HTML_PATH}", wait_until="networkidle")
        page.wait_for_timeout(3000)
        page.screenshot(
            path=f"{OUT_DIR}/winback-b-24-e1-l1-420-full.png",
            full_page=True
        )
        print("OK: 420-full screenshot saved")
        page.close()
        
        # 2. Mobile at 375px width
        page = browser.new_page(viewport={"width": 375, "height": 800})
        page.goto(f"file://{HTML_PATH}", wait_until="networkidle")
        page.wait_for_timeout(3000)
        page.screenshot(
            path=f"{OUT_DIR}/winback-b-24-e1-l1-375-mobile.png",
            full_page=True
        )
        print("OK: 375-mobile screenshot saved")
        page.close()
        
        # 3. Above-fold at 420x568
        page = browser.new_page(viewport={"width": 420, "height": 568})
        page.goto(f"file://{HTML_PATH}", wait_until="networkidle")
        page.wait_for_timeout(3000)
        page.screenshot(
            path=f"{OUT_DIR}/winback-b-24-e1-l1-420x568-above-fold.png",
            full_page=False
        )
        print("OK: 420x568-above-fold screenshot saved")
        page.close()
        
        browser.close()
        print("All screenshots done.")

if __name__ == "__main__":
    main()
