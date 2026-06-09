#!/usr/bin/env python3
"""Screenshot the E6 L3 render HTML."""
import os
from playwright.sync_api import sync_playwright

OUT = "/root/projects/brightkidco/outputs/verification/welcome"
HTML = f"{OUT}/welcome-01-e6-l3-render.html"

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page(viewport={"width": 420, "height": 800})
    page.goto(f"file://{HTML}", wait_until="networkidle")
    # Wait for fonts to load
    page.wait_for_timeout(3000)

    # 1. Full page screenshot
    page.screenshot(path=f"{OUT}/welcome-01-e6-l3-screenshot.png", full_page=True)
    print(f"Saved: {OUT}/welcome-01-e6-l3-screenshot.png")

    # 2. Above the fold (420x568)
    page.set_viewport_size({"width": 420, "height": 568})
    page.wait_for_timeout(500)
    page.screenshot(path=f"{OUT}/welcome-01-e6-l3-above-fold.png")
    print(f"Saved: {OUT}/welcome-01-e6-l3-above-fold.png")

    # 3. Mobile (320px)
    page.set_viewport_size({"width": 320, "height": 800})
    page.wait_for_timeout(500)
    page.screenshot(path=f"{OUT}/welcome-01-e6-l3-mobile.png", full_page=True)
    print(f"Saved: {OUT}/welcome-01-e6-l3-mobile.png")

    browser.close()
    print("\nAll screenshots saved successfully.")
