#!/usr/bin/env python3
"""Screenshot arrived-08 at all viewports - single session."""
import os
from playwright.sync_api import sync_playwright

OUTDIR = "/root/projects/brightkidco/outputs/verification/transactional"
HTML = "file:///root/projects/brightkidco/outputs/verification/transactional/arrived-08.html"

with sync_playwright() as p:
    browser = p.chromium.launch(args=["--allow-file-access-from-files"])
    page = browser.new_page(viewport={"width": 420, "height": 800})
    page.goto(HTML, wait_until="networkidle")
    page.wait_for_timeout(5000)

    height = page.evaluate("document.querySelector('#root > div')?.offsetHeight || document.body.scrollHeight")
    print(f"Full page height: {height}px")

    # 1. Desktop 420px full page
    page.set_viewport_size({"width": 420, "height": max(height + 100, 800)})
    page.wait_for_timeout(500)
    page.screenshot(path=os.path.join(OUTDIR, "arrived-08-desktop-420.png"), full_page=True)
    print("Saved: arrived-08-desktop-420.png")

    # 2. Mobile 375px full page
    page.set_viewport_size({"width": 375, "height": 812})
    page.wait_for_timeout(1000)
    page.screenshot(path=os.path.join(OUTDIR, "arrived-08-mobile-375.png"), full_page=True)
    print("Saved: arrived-08-mobile-375.png")

    # 3. Above-fold 420x568
    page.set_viewport_size({"width": 420, "height": 568})
    page.wait_for_timeout(1000)
    page.screenshot(path=os.path.join(OUTDIR, "arrived-08-above-fold-420x568.png"))
    print("Saved: arrived-08-above-fold-420x568.png")

    browser.close()
    print("All screenshots complete.")
