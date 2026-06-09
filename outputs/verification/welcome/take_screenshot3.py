#!/usr/bin/env python3
"""Take above-fold screenshot of welcome-01-e7-l1 email."""
import os
from playwright.sync_api import sync_playwright

RENDER_HTML = "/root/projects/brightkidco/outputs/verification/welcome/welcome-01-e7-l1-render.html"
OUT_DIR = "/root/projects/brightkidco/outputs/verification/welcome"
FILE_URL = f"file://{RENDER_HTML}"

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page(viewport={"width": 420, "height": 568})
    page.goto(FILE_URL, wait_until="load")
    page.wait_for_timeout(1500)
    
    out_path = os.path.join(OUT_DIR, "welcome-01-e7-l1-420x568-above-fold.png")
    page.screenshot(path=out_path, full_page=False)
    
    size = os.path.getsize(out_path)
    print(f"420x568-above-fold: {size} bytes -> {out_path}")
    
    page.close()
    browser.close()

print("Done!")
