#!/usr/bin/env python3
"""Render welcome-01-e3-l2 email to screenshots using Playwright."""
import sys
from playwright.sync_api import sync_playwright

html_path = "/root/projects/brightkidco/outputs/verification/welcome/welcome-01-e3-l2-render.html"
out_dir = "/root/projects/brightkidco/outputs/verification/welcome"

def main():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        
        # 1. Full page at 420px width
        page = browser.new_page(viewport={"width": 420, "height": 800})
        page.goto(f"file://{html_path}", wait_until="networkidle")
        page.wait_for_timeout(3000)
        page.screenshot(
            path=f"{out_dir}/welcome-01-e3-l2-420-full.png",
            full_page=True
        )
        print(f"OK: 420-full screenshot saved")
        page.close()
        
        # 2. Mobile at 375px width
        page = browser.new_page(viewport={"width": 375, "height": 800})
        page.goto(f"file://{html_path}", wait_until="networkidle")
        page.wait_for_timeout(3000)
        page.screenshot(
            path=f"{out_dir}/welcome-01-e3-l2-375-mobile.png",
            full_page=True
        )
        print(f"OK: 375-mobile screenshot saved")
        page.close()
        
        # 3. Above-fold at 420x568
        page = browser.new_page(viewport={"width": 420, "height": 568})
        page.goto(f"file://{html_path}", wait_until="networkidle")
        page.wait_for_timeout(3000)
        page.screenshot(
            path=f"{out_dir}/welcome-01-e3-l2-420x568-above-fold.png",
            full_page=False
        )
        print(f"OK: 420x568-above-fold screenshot saved")
        
        # 4. Check console errors
        errors = []
        page.on("console", lambda msg: errors.append(msg.text) if msg.type == "error" else None)
        page.reload(wait_until="networkidle")
        page.wait_for_timeout(2000)
        if errors:
            print(f"Console errors: {errors}")
        else:
            print("OK: No console errors")
        page.close()
        
        browser.close()
        print("All screenshots done.")

if __name__ == "__main__":
    main()
