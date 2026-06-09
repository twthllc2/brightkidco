#!/usr/bin/env python3
"""Generate screenshots for shipping-06 email verification."""
import os
from playwright.sync_api import sync_playwright

OUTDIR = "/root/projects/brightkidco/outputs/verification/transactional"
HTML = "file:///root/projects/brightkidco/outputs/verification/transactional/shipping-06-render.html"

with sync_playwright() as p:
    browser = p.chromium.launch(args=["--allow-file-access-from-files"])
    page = browser.new_page(viewport={"width": 420, "height": 800})
    page.goto(HTML, wait_until="networkidle")
    page.wait_for_timeout(3000)

    height = page.evaluate("document.querySelector('#root > div')?.offsetHeight || document.body.scrollHeight")
    print(f"Full page height: {height}px")

    # 1. Mobile 375px full page
    page.set_viewport_size({"width": 375, "height": max(height + 100, 812)})
    page.wait_for_timeout(1000)
    page.screenshot(path=os.path.join(OUTDIR, "shipping-06-375-mobile.png"), full_page=True)
    print("Saved: shipping-06-375-mobile.png")

    # 2. Desktop 420px full page
    page.set_viewport_size({"width": 420, "height": max(height + 100, 800)})
    page.wait_for_timeout(500)
    page.screenshot(path=os.path.join(OUTDIR, "shipping-06-420-full.png"), full_page=True)
    print("Saved: shipping-06-420-full.png")

    # 3. Above-fold 420x568
    page.set_viewport_size({"width": 420, "height": 568})
    page.wait_for_timeout(500)
    page.screenshot(path=os.path.join(OUTDIR, "shipping-06-420x568-above-fold.png"), full_page=False)
    print("Saved: shipping-06-420x568-above-fold.png")

    browser.close()
    print("All screenshots complete.")
