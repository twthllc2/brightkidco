#!/usr/bin/env python3
"""Take 3 screenshots of the email render."""
from pathlib import Path
from playwright.sync_api import sync_playwright

HTML_PATH = "/root/projects/brightkidco/outputs/verification/pp-extended-ed/pped-22-e4-l2-render.html"
OUT_DIR = Path("/root/projects/brightkidco/outputs/verification/pp-extended-ed")
FILE_URL = Path(HTML_PATH).as_uri()

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)

    # 1. Full page — 420px width
    page1 = browser.new_page(viewport={"width": 420, "height": 900}, device_scale_factor=2)
    page1.goto(FILE_URL, wait_until="networkidle")
    page1.wait_for_timeout(1500)
    page1.screenshot(
        path=str(OUT_DIR / "pped-22-e4-l2-420-full.png"),
        full_page=True,
    )
    print("OK: full page screenshot")
    page1.close()

    # 2. Above the fold — 420x568
    page2 = browser.new_page(viewport={"width": 420, "height": 568}, device_scale_factor=2)
    page2.goto(FILE_URL, wait_until="networkidle")
    page2.wait_for_timeout(1500)
    page2.screenshot(
        path=str(OUT_DIR / "pped-22-e4-l2-420x568-above-fold.png"),
        full_page=False,
    )
    print("OK: above-fold screenshot")
    page2.close()

    # 3. Mobile — 375px width
    page3 = browser.new_page(viewport={"width": 375, "height": 812}, device_scale_factor=2)
    page3.goto(FILE_URL, wait_until="networkidle")
    page3.wait_for_timeout(1500)
    page3.screenshot(
        path=str(OUT_DIR / "pped-22-e4-l2-375-mobile.png"),
        full_page=True,
    )
    print("OK: mobile screenshot")
    page3.close()

    browser.close()
    print("ALL SCREENSHOTS DONE")
