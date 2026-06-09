#!/usr/bin/env python3
"""Render cart-02-e2 email to screenshots using Playwright."""
from playwright.sync_api import sync_playwright

html_path = "/root/projects/brightkidco/outputs/verification/cart/cart-02-e2-render.html"
out_dir = "/root/projects/brightkidco/outputs/verification/cart"

def main():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        
        # 1. Mobile at 375px width (full page)
        page = browser.new_page(viewport={"width": 375, "height": 800})
        page.goto(f"file://{html_path}", wait_until="networkidle")
        page.wait_for_timeout(3000)
        page.screenshot(
            path=f"{out_dir}/cart-02-e2-375-mobile.png",
            full_page=True
        )
        print("OK: 375-mobile screenshot saved")
        page.close()
        
        # 2. Full page at 420px width
        page = browser.new_page(viewport={"width": 420, "height": 800})
        page.goto(f"file://{html_path}", wait_until="networkidle")
        page.wait_for_timeout(3000)
        page.screenshot(
            path=f"{out_dir}/cart-02-e2-420-full.png",
            full_page=True
        )
        print("OK: 420-full screenshot saved")
        page.close()
        
        # 3. Above-fold at 420x568
        page = browser.new_page(viewport={"width": 420, "height": 568})
        page.goto(f"file://{html_path}", wait_until="networkidle")
        page.wait_for_timeout(3000)
        page.screenshot(
            path=f"{out_dir}/cart-02-e2-420x568-above-fold.png",
            full_page=False
        )
        print("OK: 420x568-above-fold screenshot saved")
        page.close()
        
        browser.close()
        print("All screenshots done.")

if __name__ == "__main__":
    main()
