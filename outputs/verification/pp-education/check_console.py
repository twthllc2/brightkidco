#!/usr/bin/env python3
"""Check console errors."""
import os
from playwright.sync_api import sync_playwright

OUT = "/root/projects/brightkidco/outputs/verification/pp-education"
HTML = f"file://{OUT}/pped-11-d7-render.html"

errors = []
with sync_playwright() as p:
    browser = p.chromium.launch(args=["--no-sandbox", "--disable-gpu", "--disable-dev-shm-usage"])
    page = browser.new_page(viewport={"width": 420, "height": 900})
    page.on("console", lambda msg: errors.append(f"[{msg.type}] {msg.text}") if msg.type in ("error", "warning") else None)
    page.goto(HTML, wait_until="networkidle", timeout=30000)
    page.wait_for_timeout(2000)
    browser.close()

with open(f"{OUT}/console-errors.txt", "w") as f:
    if errors:
        f.write("\n".join(errors))
    else:
        f.write("No console errors or warnings\n")
print(f"Found {len(errors)} console issues")
for e in errors:
    print(e)
