#!/usr/bin/env python3
"""Quick screenshot with Playwright."""
import os
from playwright.sync_api import sync_playwright

OUT = "/root/projects/brightkidco/outputs/verification/pp-education"
HTML = f"file://{OUT}/pped-11-d7-render.html"

with sync_playwright() as p:
    browser = p.chromium.launch(args=["--no-sandbox", "--disable-gpu", "--disable-dev-shm-usage"])
    page = browser.new_page(viewport={"width": 420, "height": 900})
    page.goto(HTML, wait_until="networkidle", timeout=30000)
    page.wait_for_timeout(2000)
    page.screenshot(path=f"{OUT}/pped-11-d7-420-full.png", full_page=True)
    print("420 full done")
    
    page2 = browser.new_page(viewport={"width": 375, "height": 812})
    page2.goto(HTML, wait_until="networkidle", timeout=30000)
    page2.wait_for_timeout(2000)
    page2.screenshot(path=f"{OUT}/pped-11-d7-375-mobile.png", full_page=True)
    print("375 mobile done")
    
    page3 = browser.new_page(viewport={"width": 420, "height": 568})
    page3.goto(HTML, wait_until="networkidle", timeout=30000)
    page3.wait_for_timeout(2000)
    page3.screenshot(path=f"{OUT}/pped-11-d7-420-above-fold.png", full_page=False)
    print("above-fold done")
    
    browser.close()
print("All done")
