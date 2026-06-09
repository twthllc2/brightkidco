#!/usr/bin/env python3
"""Take 3 screenshots of welcome-01-e7-l1 email."""
import os
from playwright.sync_api import sync_playwright

RENDER_HTML = "/root/projects/brightkidco/outputs/verification/welcome/welcome-01-e7-l1-render.html"
OUT_DIR = "/root/projects/brightkidco/outputs/verification/welcome"
FILE_URL = f"file://{RENDER_HTML}"

configs = [
    {"width": 375, "height": 812, "suffix": "375-mobile", "full_page": True},
    {"width": 420, "height": 900, "suffix": "420-full", "full_page": True},
    {"width": 420, "height": 568, "suffix": "420x568-above-fold", "full_page": False},
]

with sync_playwright() as p:
    browser = p.chromium.launch()
    for cfg in configs:
        page = browser.new_page(viewport={"width": cfg["width"], "height": cfg["height"]})
        page.goto(FILE_URL, wait_until="networkidle")
        page.wait_for_timeout(2000)  # let fonts/images load
        
        out_path = os.path.join(OUT_DIR, f"welcome-01-e7-l1-{cfg['suffix']}.png")
        page.screenshot(path=out_path, full_page=cfg["full_page"])
        
        size = os.path.getsize(out_path)
        print(f"{cfg['suffix']}: {size} bytes -> {out_path}")
        
        page.close()
    
    browser.close()

print("Done!")
