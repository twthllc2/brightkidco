#!/usr/bin/env python3
"""Check console errors from the E6 L3 render."""
import os
from playwright.sync_api import sync_playwright

OUT = "/root/projects/brightkidco/outputs/verification/welcome"
HTML = f"{OUT}/welcome-01-e6-l3-render.html"

errors = []

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page(viewport={"width": 420, "height": 800})
    page.on("console", lambda msg: errors.append(msg.text) if msg.type == "error" else None)
    page.goto(f"file://{HTML}", wait_until="networkidle")
    page.wait_for_timeout(3000)
    browser.close()

if errors:
    print(f"CONSOLE ERRORS ({len(errors)}):")
    for e in errors:
        print(f"  - {e}")
else:
    print("No console errors.")
