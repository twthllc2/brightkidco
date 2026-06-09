#!/usr/bin/env python3
"""Debug order-05-e1 render."""
from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(args=["--allow-file-access-from-files"])
    page = browser.new_page(viewport={"width": 420, "height": 800})
    
    errors = []
    page.on("console", lambda msg: errors.append(f"{msg.type}: {msg.text}"))
    
    page.goto("file:///root/projects/brightkidco/outputs/verification/transactional/order-05-e1-render.html", wait_until="networkidle")
    page.wait_for_timeout(3000)
    
    # Check if root has content
    root_html = page.evaluate("document.getElementById('root')?.innerHTML?.substring(0, 500) || 'EMPTY'")
    print("Root HTML:", root_html)
    height = page.evaluate("document.querySelector('#root > div')?.offsetHeight || 0")
    print("Height:", height)
    
    # Print any console messages
    for e in errors:
        print("Console:", e)
    
    browser.close()
