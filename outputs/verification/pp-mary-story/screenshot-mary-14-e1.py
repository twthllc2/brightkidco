#!/usr/bin/env python3
"""Render mary-14-e1 email to screenshots."""
import os, sys
from playwright.sync_api import sync_playwright

HTML_FILE = "/root/projects/brightkidco/outputs/verification/pp-mary-story/render-mary-14-e1.html"
OUT_DIR = "/root/projects/brightkidco/outputs/verification/pp-mary-story"

os.makedirs(OUT_DIR, exist_ok=True)

with sync_playwright() as p:
    browser = p.chromium.launch()
    
    # 1. Full page at 420px width
    page = browser.new_page(viewport={"width": 420, "height": 900}, device_scale_factor=2)
    page.goto(f"file://{HTML_FILE}", wait_until="networkidle")
    page.wait_for_timeout(3000)
    page.screenshot(path=os.path.join(OUT_DIR, "mary-14-e1-full-420.png"), full_page=True)
    print("OK: full-420")
    
    # 2. Mobile at 375px width
    page2 = browser.new_page(viewport={"width": 375, "height": 812}, device_scale_factor=2)
    page2.goto(f"file://{HTML_FILE}", wait_until="networkidle")
    page2.wait_for_timeout(3000)
    page2.screenshot(path=os.path.join(OUT_DIR, "mary-14-e1-mobile-375.png"), full_page=True)
    print("OK: mobile-375")
    
    # 3. Above-fold at 420x568
    page3 = browser.new_page(viewport={"width": 420, "height": 568}, device_scale_factor=2)
    page3.goto(f"file://{HTML_FILE}", wait_until="networkidle")
    page3.wait_for_timeout(3000)
    page3.screenshot(path=os.path.join(OUT_DIR, "mary-14-e1-abovefold-420x568.png"))
    print("OK: abovefold-420x568")
    
    browser.close()
    print("All screenshots saved.")
