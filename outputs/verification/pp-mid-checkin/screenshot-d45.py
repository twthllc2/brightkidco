#!/usr/bin/env python3
"""Take screenshots of mid-13-d45 render HTML using Playwright."""
import os
from playwright.sync_api import sync_playwright

OUT = "/root/projects/brightkidco/outputs/verification/pp-mid-checkin"
HTML = os.path.join(OUT, "mid-13-d45-render.html")
FILE_URL = f"file://{HTML}"

def main():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        errors = []

        # 1. Full page at 420px
        page = browser.new_page(viewport={"width": 420, "height": 800})
        page.on("console", lambda msg: errors.append(msg.text) if msg.type == "error" else None)
        page.on("pageerror", lambda exc: errors.append(str(exc)))
        page.goto(FILE_URL, wait_until="networkidle")
        page.wait_for_timeout(3000)
        full_path = os.path.join(OUT, "mid-13-d45-full-420.png")
        page.screenshot(path=full_path, full_page=True)
        print(f"Full 420px: {full_path}")
        dims_420 = page.evaluate("({ w: document.querySelector('#root > div').offsetWidth, h: document.querySelector('#root > div').offsetHeight })")
        print(f"420px dims: {dims_420}")

        # 2. Mobile at 375px
        page2 = browser.new_page(viewport={"width": 375, "height": 667})
        page2.goto(FILE_URL, wait_until="networkidle")
        page2.wait_for_timeout(2000)
        mob_path = os.path.join(OUT, "mid-13-d45-mobile-375.png")
        page2.screenshot(path=mob_path, full_page=True)
        print(f"Mobile 375px: {mob_path}")
        dims_375 = page2.evaluate("({ w: document.querySelector('#root > div').offsetWidth, h: document.querySelector('#root > div').offsetHeight })")
        print(f"375px dims: {dims_375}")

        # 3. Above-fold at 420x568
        page3 = browser.new_page(viewport={"width": 420, "height": 568})
        page3.goto(FILE_URL, wait_until="networkidle")
        page3.wait_for_timeout(2000)
        abf_path = os.path.join(OUT, "mid-13-d45-above-fold-420x568.png")
        page3.screenshot(path=abf_path, full_page=False)
        print(f"Above-fold 420x568: {abf_path}")

        # Get total height for above-fold check
        total_h = page3.evaluate("document.querySelector('#root > div').offsetHeight")
        print(f"Total height: {total_h}px, Above-fold: {'PASS' if total_h > 568 else 'FAIL'} (email extends beyond fold)")

        # Get computed font info
        font_info = page.evaluate("""() => {
            const h1 = document.querySelector('h1');
            const body = document.querySelector('p');
            return {
                h1Font: h1 ? getComputedStyle(h1).fontFamily : 'N/A',
                bodyFont: body ? getComputedStyle(body).fontFamily : 'N/A',
            }
        }""")
        print(f"Fonts: h1={font_info['h1Font']}, body={font_info['bodyFont']}")

        # Check console errors
        if errors:
            print(f"Console errors: {errors}")
        else:
            print("Console errors: none")

        browser.close()

        # Write errors to file for later use
        with open(os.path.join(OUT, "console-errors-d45.txt"), "w") as f:
            f.write("\n".join(errors) if errors else "no errors")

if __name__ == "__main__":
    main()
