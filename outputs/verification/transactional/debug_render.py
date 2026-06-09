#!/usr/bin/env python3
"""Screenshot the arrived-08 email at 3 viewports — v2 with diagnostics."""
import subprocess, sys, os

OUTDIR = "/root/projects/brightkidco/outputs/verification/transactional"
HTML = "file:///root/projects/brightkidco/outputs/verification/transactional/arrived-08.html"

from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(args=["--allow-file-access-from-files"])
    
    # Collect ALL console messages
    all_msgs = []
    
    page = browser.new_page(viewport={"width": 420, "height": 800})
    page.on("console", lambda msg: all_msgs.append(f"[{msg.type}] {msg.text}"))
    page.on("pageerror", lambda err: all_msgs.append(f"[PAGE_ERROR] {err}"))
    
    page.goto(HTML, wait_until="networkidle", timeout=30000)
    page.wait_for_timeout(5000)  # Extra time for Babel compilation
    
    # Diagnostics
    root_html = page.evaluate("document.getElementById('root')?.innerHTML?.substring(0, 500) || 'EMPTY'")
    root_children = page.evaluate("document.getElementById('root')?.children?.length || 0")
    root_height = page.evaluate("document.querySelector('#root > div')?.offsetHeight || 0")
    body_height = page.evaluate("document.body.scrollHeight")
    
    print(f"Root children: {root_children}")
    print(f"Root innerHTML preview: {root_html[:200]}")
    print(f"Root first div height: {root_height}")
    print(f"Body scroll height: {body_height}")
    print(f"Console messages ({len(all_msgs)}):")
    for m in all_msgs[:20]:
        print(f"  {m}")
    
    # Take screenshot of whatever state we have
    if root_height > 0:
        page.set_viewport_size({"width": 420, "height": root_height + 100})
        page.wait_for_timeout(500)
    
    page.screenshot(path=os.path.join(OUTDIR, "arrived-08-desktop-420.png"), full_page=True)
    print(f"\nSaved: arrived-08-desktop-420.png (body_h={body_height})")
    
    browser.close()
