#!/usr/bin/env python3
"""Take screenshots of the rendered email."""
import sys
from playwright.sync_api import sync_playwright

html_path = "/root/projects/brightkidco/outputs/verification/welcome/welcome-01-e7-gf-render.html"
out_dir = "/root/projects/brightkidco/outputs/verification/welcome"
base = "welcome-01-e7-gf"

console_errors = []

with sync_playwright() as p:
    browser = p.chromium.launch(
        args=['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage',
              '--disable-gpu', '--single-process']
    )
    
    # 1. Full-page screenshot at 420px width
    page = browser.new_page(viewport={"width": 420, "height": 800})
    page.on("console", lambda msg: console_errors.append(f"{msg.type}: {msg.text}") if msg.type in ["error", "warning"] else None)
    page.goto(f"file://{html_path}", wait_until="networkidle")
    page.wait_for_timeout(2000)
    page.screenshot(path=f"{out_dir}/{base}-screenshot.png", full_page=True)
    print(f"Full-page screenshot saved")

    # 2. Above fold (420x568)
    page.set_viewport_size({"width": 420, "height": 568})
    page.screenshot(path=f"{out_dir}/{base}-above-fold.png")
    print(f"Above-fold screenshot saved")

    # 3. Mobile (320px)
    page.set_viewport_size({"width": 320, "height": 800})
    page.wait_for_timeout(500)
    page.screenshot(path=f"{out_dir}/{base}-mobile.png", full_page=True)
    print(f"Mobile screenshot saved")

    # Collect console output for verification
    errors = [e for e in console_errors if "error" in e.lower()]
    if errors:
        print(f"\nConsole errors found: {len(errors)}")
        for e in errors:
            print(f"  {e}")
    else:
        print(f"\nNo console errors. ({len(console_errors)} messages total)")

    # Get page width for check #6
    page.set_viewport_size({"width": 420, "height": 800})
    width = page.evaluate("document.getElementById('root').offsetWidth")
    print(f"\nRoot element width: {width}px")

    # Check for CTA button dimensions for check #8
    cta_dims = page.evaluate("""
    (() => {
        const links = document.querySelectorAll('a');
        let cta = null;
        for (const l of links) {
            if (l.textContent.includes('Try the 3+3 Bundle')) {
                cta = l;
                break;
            }
        }
        if (!cta) return null;
        const rect = cta.getBoundingClientRect();
        return { width: rect.width, height: rect.height };
    })()
    """)
    print(f"CTA button dims: {cta_dims}")

    # Extract all text content for copy alignment check
    all_text = page.evaluate("document.body.innerText")
    with open(f"{out_dir}/{base}-text.txt", "w") as f:
        f.write(all_text)
    print(f"Text content extracted ({len(all_text)} chars)")

    browser.close()
    print("\nDone!")
