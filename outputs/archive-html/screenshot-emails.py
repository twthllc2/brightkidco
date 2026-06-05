#!/usr/bin/env python3
"""
Take screenshots of all html3 emails using Playwright for visual review.
"""
import os
import glob
import subprocess

HTML_DIR = "/root/projects/brightkidco/outputs/archive-html/html3"
SCREENSHOT_DIR = "/tmp/email-screenshots"

os.makedirs(SCREENSHOT_DIR, exist_ok=True)

# Start HTTP server in background
server = subprocess.Popen(
    ["python3", "-m", "http.server", "8765"],
    cwd="/root/projects/brightkidco/outputs/archive-html",
    stdout=subprocess.DEVNULL,
    stderr=subprocess.DEVNULL
)

import time
time.sleep(1)

# Get all HTML files
files = sorted(glob.glob(f"{HTML_DIR}/**/*.html", recursive=True))
print(f"Total emails to screenshot: {len(files)}")

# Use playwright to screenshot each
from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={"width": 500, "height": 900})
    
    for i, f in enumerate(files):
        rel = os.path.relpath(f, HTML_DIR)
        url = f"http://localhost:8765/html3/{rel}"
        
        # Create screenshot filename
        ss_name = rel.replace("/", "__").replace(".html", ".png")
        ss_path = os.path.join(SCREENSHOT_DIR, ss_name)
        
        try:
            page.goto(url, wait_until="networkidle", timeout=10000)
            page.screenshot(path=ss_path, full_page=True)
            print(f"  [{i+1}/{len(files)}] ✅ {rel}")
        except Exception as e:
            print(f"  [{i+1}/{len(files)}] ❌ {rel}: {e}")
    
    browser.close()

server.terminate()
print(f"\nScreenshots saved to: {SCREENSHOT_DIR}")
print(f"Total: {len(os.listdir(SCREENSHOT_DIR))} screenshots")
