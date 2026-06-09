#!/usr/bin/env python3
"""Take screenshots of the rendered email at different viewport sizes."""
import time
from playwright.sync_api import sync_playwright

HTML_PATH = "/root/projects/brightkidco/outputs/verification/welcome-a/welcome-a-01-e2-l3-render.html"
OUTPUT_DIR = "/root/projects/brightkidco/outputs/verification/welcome-a"
FILE_PREFIX = "welcome-a-01-e2-l3"

screenshots = [
    {"width": 375, "height": 812, "name": f"{FILE_PREFIX}-375-mobile.png", "full_page": True},
    {"width": 420, "height": 812, "name": f"{FILE_PREFIX}-420-full.png", "full_page": True},
    {"width": 420, "height": 568, "name": f"{FILE_PREFIX}-420x568-above-fold.png", "full_page": False},
]

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    
    for cfg in screenshots:
        page = browser.new_page(viewport={"width": cfg["width"], "height": cfg["height"]})
        page.goto(f"file://{HTML_PATH}", wait_until="networkidle")
        # Wait for fonts and rendering
        page.wait_for_timeout(3000)
        
        output_path = f"{OUTPUT_DIR}/{cfg['name']}"
        page.screenshot(path=output_path, full_page=cfg["full_page"], type="png")
        
        import os
        size = os.path.getsize(output_path)
        print(f"  {cfg['name']}: {size} bytes ({cfg['width']}x{'full' if cfg['full_page'] else cfg['height']})")
        
        page.close()
    
    browser.close()
    print("All screenshots generated.")
