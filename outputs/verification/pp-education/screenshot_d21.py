#!/usr/bin/env python3
"""Generate 3 screenshots for pped-11-d21."""
import os
from playwright.sync_api import sync_playwright

OUT = "/root/projects/brightkidco/outputs/verification/pp-education"
HTML = f"file://{OUT}/pped-11-d21-render.html"

with sync_playwright() as p:
    browser = p.chromium.launch(args=["--no-sandbox", "--disable-gpu", "--disable-dev-shm-usage"])

    # 1. 375px mobile - full page
    page1 = browser.new_page(viewport={"width": 375, "height": 812})
    page1.goto(HTML, wait_until="networkidle", timeout=30000)
    page1.wait_for_timeout(2000)
    page1.screenshot(path=f"{OUT}/pped-11-d21-375-mobile.png", full_page=True)
    page1.close()
    print("1/3 375-mobile done")

    # 2. 420px full - full page
    page2 = browser.new_page(viewport={"width": 420, "height": 900})
    page2.goto(HTML, wait_until="networkidle", timeout=30000)
    page2.wait_for_timeout(2000)
    page2.screenshot(path=f"{OUT}/pped-11-d21-420-full.png", full_page=True)
    page2.close()
    print("2/3 420-full done")

    # 3. 420x568 above-fold - viewport only
    page3 = browser.new_page(viewport={"width": 420, "height": 568})
    page3.goto(HTML, wait_until="networkidle", timeout=30000)
    page3.wait_for_timeout(2000)
    page3.screenshot(path=f"{OUT}/pped-11-d21-420x568-above-fold.png", full_page=False)
    page3.close()
    print("3/3 above-fold done")

    browser.close()
print("All done")
