#!/usr/bin/env python3
"""Take screenshots via local HTTP server for reliable CDN loading."""
import http.server
import threading
import os
from playwright.sync_api import sync_playwright

out_dir = "/root/projects/brightkidco/outputs/verification/welcome"
base = "welcome-01-e7-gf"
html_file = f"{out_dir}/{base}-render.html"

# Start a simple HTTP server in a thread
os.chdir(out_dir)
handler = http.server.SimpleHTTPRequestHandler
server = http.server.HTTPServer(("127.0.0.1", 18923), handler)
t = threading.Thread(target=server.serve_forever, daemon=True)
t.start()

console_msgs = []

with sync_playwright() as p:
    browser = p.chromium.launch(
        args=['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage',
              '--disable-gpu', '--single-process']
    )
    
    page = browser.new_page(viewport={"width": 420, "height": 800})
    page.on("console", lambda msg: console_msgs.append(f"{msg.type}: {msg.text}"))
    page.on("pageerror", lambda err: console_msgs.append(f"PAGE_ERROR: {str(err)}"))
    
    page.goto("http://127.0.0.1:18923/welcome-01-e7-gf-render.html", 
              wait_until="networkidle", timeout=30000)
    page.wait_for_timeout(5000)
    
    # Check rendering
    root_len = page.evaluate("document.getElementById('root').innerHTML.length")
    print(f"Root innerHTML length: {root_len}")
    
    if root_len == 0:
        print("ERROR: Page did not render!")
        # Check console
        for m in console_msgs:
            print(f"  {m}")
        browser.close()
        server.shutdown()
        exit(1)
    
    # 1. Full-page screenshot at 420px
    page.screenshot(path=f"{out_dir}/{base}-screenshot.png", full_page=True)
    print(f"Full-page screenshot saved ({os.path.getsize(f'{out_dir}/{base}-screenshot.png') // 1024}KB)")

    # 2. Above fold (420x568)
    page.set_viewport_size({"width": 420, "height": 568})
    page.screenshot(path=f"{out_dir}/{base}-above-fold.png")
    print(f"Above-fold screenshot saved ({os.path.getsize(f'{out_dir}/{base}-above-fold.png') // 1024}KB)")

    # 3. Mobile (320px)
    page.set_viewport_size({"width": 320, "height": 800})
    page.wait_for_timeout(500)
    page.screenshot(path=f"{out_dir}/{base}-mobile.png", full_page=True)
    print(f"Mobile screenshot saved ({os.path.getsize(f'{out_dir}/{base}-mobile.png') // 1024}KB)")

    # Extract text content for verification
    page.set_viewport_size({"width": 420, "height": 800})
    all_text = page.evaluate("document.body.innerText")
    with open(f"{out_dir}/{base}-text.txt", "w") as f:
        f.write(all_text)
    print(f"\nText extracted: {len(all_text)} chars")

    # CTA button dims
    cta_dims = page.evaluate("""
    (() => {
        const links = document.querySelectorAll('a');
        for (const l of links) {
            if (l.textContent.includes('Try the 3+3 Bundle')) {
                const rect = l.getBoundingClientRect();
                return { width: rect.width, height: rect.height, top: rect.top };
            }
        }
        return null;
    })()
    """)
    print(f"CTA button dims: {cta_dims}")

    # Console messages
    errors_only = [m for m in console_msgs if m.startswith("error:") or m.startswith("PAGE_ERROR:")]
    print(f"\nConsole errors ({len(errors_only)}):")
    for e in errors_only:
        print(f"  {e[:200]}")

    browser.close()
    server.shutdown()
    print("\nDone!")
