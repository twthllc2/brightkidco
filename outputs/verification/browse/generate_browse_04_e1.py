#!/usr/bin/env python3
"""Generate screenshots for browse-04-e1 with correct viewport sizes."""
import os
from playwright.sync_api import sync_playwright

OUT_DIR = "/root/projects/brightkidco/outputs/verification/browse"
HTML_FILE = os.path.join(OUT_DIR, "browse-04-e1-render.html")
file_uri = f"file://{HTML_FILE}"

with sync_playwright() as p:
    browser = p.chromium.launch()
    
    # 1. 375px mobile screenshot
    ctx1 = browser.new_context(viewport={"width": 375, "height": 800})
    page1 = ctx1.new_page()
    page1.goto(file_uri, wait_until="networkidle")
    page1.wait_for_timeout(2000)
    page1.screenshot(
        path=os.path.join(OUT_DIR, "browse-04-e1-375-mobile.png"),
        full_page=True
    )
    print("375px mobile screenshot saved")
    
    # 2. 420px full screenshot
    ctx2 = browser.new_context(viewport={"width": 420, "height": 800})
    page2 = ctx2.new_page()
    page2.goto(file_uri, wait_until="networkidle")
    page2.wait_for_timeout(2000)
    page2.screenshot(
        path=os.path.join(OUT_DIR, "browse-04-e1-420-full.png"),
        full_page=True
    )
    print("420px full screenshot saved")
    
    # 3. 420x568 above-fold screenshot
    ctx3 = browser.new_context(viewport={"width": 420, "height": 568})
    page3 = ctx3.new_page()
    page3.goto(file_uri, wait_until="networkidle")
    page3.wait_for_timeout(2000)
    page3.screenshot(
        path=os.path.join(OUT_DIR, "browse-04-e1-420x568-above-fold.png")
    )
    print("420x568 above-fold screenshot saved")
    
    browser.close()
    
    # Verify all files exist and are >100 bytes
    files = [
        "browse-04-e1-375-mobile.png",
        "browse-04-e1-420-full.png",
        "browse-04-e1-420x568-above-fold.png"
    ]
    
    print("\nVerification:")
    all_ok = True
    for f in files:
        path = os.path.join(OUT_DIR, f)
        if os.path.exists(path):
            size = os.path.getsize(path)
            status = "OK" if size > 100 else "TOO SMALL"
            print(f"  {f}: {size} bytes - {status}")
            if size <= 100:
                all_ok = False
        else:
            print(f"  {f}: MISSING")
            all_ok = False
    
    if all_ok:
        print("\nAll screenshots generated successfully!")
    else:
        print("\nSome screenshots failed!")
