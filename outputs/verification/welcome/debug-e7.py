#!/usr/bin/env python3
"""Take screenshots of the rendered email — with robust CDN wait."""
from playwright.sync_api import sync_playwright

html_path = "/root/projects/brightkidco/outputs/verification/welcome/welcome-01-e7-gf-render.html"
out_dir = "/root/projects/brightkidco/outputs/verification/welcome"
base = "welcome-01-e7-gf"

console_msgs = []

with sync_playwright() as p:
    browser = p.chromium.launch(
        args=['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage',
              '--disable-gpu', '--single-process', '--disable-web-security']
    )
    
    page = browser.new_page(viewport={"width": 420, "height": 800})
    page.on("console", lambda msg: console_msgs.append(f"{msg.type}: {msg.text}"))
    
    page.goto(f"file://{html_path}", wait_until="networkidle", timeout=30000)
    page.wait_for_timeout(5000)
    
    # Check if root has content
    root_html = page.evaluate("document.getElementById('root').innerHTML.substring(0, 200)")
    print(f"Root innerHTML preview: {root_html[:200]}")
    
    # Check if React loaded
    react_loaded = page.evaluate("typeof React !== 'undefined'")
    print(f"React loaded: {react_loaded}")
    
    # Check all console messages
    print(f"\nConsole messages ({len(console_msgs)}):")
    for m in console_msgs:
        print(f"  {m}")

    browser.close()
