#!/usr/bin/env python3
"""Render remaining viewports."""
import os
from playwright.sync_api import sync_playwright

HTML = "/root/projects/brightkidco/outputs/verification/winback-b/winback-b-24-e3-l3-static.html"
OUT = "/root/projects/brightkidco/outputs/verification/winback-b"
URL = f"file://{HTML}"

viewports = [
    {"width": 375, "height": 800, "name": "375-mobile", "full": True},
    {"width": 420, "height": 568, "name": "420x568-above-fold", "full": False},
]

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    for vp in viewports:
        page = browser.new_page(viewport={"width": vp["width"], "height": vp["height"]})
        page.goto(URL, wait_until="load")
        page.wait_for_timeout(2000)
        path = os.path.join(OUT, f"winback-b-24-e3-l3-{vp['name']}.png")
        page.screenshot(path=path, full_page=vp["full"])
        print(f"Saved: {path}")
        page.close()
    browser.close()
    print("Done.")
