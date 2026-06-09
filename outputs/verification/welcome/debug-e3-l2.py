#!/usr/bin/env python3
"""Debug render - check what's happening with the email."""
from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={"width": 420, "height": 800})
    
    messages = []
    page.on("console", lambda msg: messages.append(f"{msg.type}: {msg.text}"))
    page.on("pageerror", lambda err: messages.append(f"PAGE_ERROR: {err}"))
    
    page.goto("file:///root/projects/brightkidco/outputs/verification/welcome/welcome-01-e3-l2-render.html", wait_until="networkidle")
    page.wait_for_timeout(5000)
    
    root_html = page.evaluate('document.getElementById("root").innerHTML')
    print(f"Root HTML length: {len(root_html)}")
    print(f"Root HTML preview: {root_html[:500]}")
    
    for m in messages:
        print(f"Console: {m}")
    
    browser.close()
