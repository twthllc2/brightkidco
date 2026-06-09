#!/usr/bin/env python3
"""Screenshot capture for welcome-01-e8-l1 verification."""
import sys
import time
import os

os.environ["PLAYWRIGHT_BROWSERS_PATH"] = "/root/.hermes/profiles/ops10/home/.cache/ms-playwright"

from playwright.sync_api import sync_playwright

HTML_PATH = "/root/projects/brightkidco/outputs/verification/welcome/welcome-01-e8-l1-render.html"
SCREENSHOT_DIR = "/root/projects/brightkidco/outputs/verification/welcome"

def main():
    with sync_playwright() as p:
        browser = p.chromium.launch(
            executable_path="/root/.hermes/profiles/ops10/home/.cache/ms-playwright/chromium-1223/chrome-linux64/chrome",
            args=[
                "--no-sandbox",
                "--disable-gpu",
                "--disable-dev-shm-usage",
                "--disable-setuid-sandbox",
                "--single-process",
            ],
            headless=True,
        )
        page = browser.new_page(viewport={"width": 420, "height": 800})

        errors = []
        page.on("console", lambda msg: errors.append(msg.text) if msg.type == "error" else None)

        page.goto(f"file://{HTML_PATH}", wait_until="networkidle")
        time.sleep(3)

        print(f"Console errors: {len(errors)}")
        for e in errors:
            print(f"  ERROR: {e}")

        page.screenshot(path=f"{SCREENSHOT_DIR}/welcome-01-e8-l1-screenshot.png", full_page=True)
        print("Saved: welcome-01-e8-l1-screenshot.png")

        page.set_viewport_size({"width": 420, "height": 568})
        time.sleep(0.5)
        page.screenshot(path=f"{SCREENSHOT_DIR}/welcome-01-e8-l1-above-fold.png", full_page=False)
        print("Saved: welcome-01-e8-l1-above-fold.png")

        page.set_viewport_size({"width": 320, "height": 800})
        time.sleep(0.5)
        page.screenshot(path=f"{SCREENSHOT_DIR}/welcome-01-e8-l1-mobile.png", full_page=True)
        print("Saved: welcome-01-e8-l1-mobile.png")

        text_content = page.evaluate("document.body.innerText")
        with open(f"{SCREENSHOT_DIR}/welcome-01-e8-l1-text.txt", "w") as f:
            f.write(text_content)
        print("Saved: welcome-01-e8-l1-text.txt")

        width = page.evaluate("document.querySelector('#root').offsetWidth")
        print(f"Rendered width: {width}px")

        cta_info = page.evaluate("""
            () => {
                const btn = document.querySelector('.l1-cta-btn');
                if (!btn) return null;
                const rect = btn.getBoundingClientRect();
                const style = window.getComputedStyle(btn);
                return {
                    width: rect.width,
                    height: rect.height,
                    background: style.backgroundColor,
                    color: style.color,
                    fontSize: style.fontSize,
                    borderRadius: style.borderRadius,
                };
            }
        """)
        print(f"CTA button: {cta_info}")

        fonts = page.evaluate("""
            () => {
                const results = {};
                const selectors = [['h1', 'Hook heading'], ['p', 'Body text']];
                for (const [sel, label] of selectors) {
                    const el = document.querySelector(sel);
                    if (el) {
                        const s = window.getComputedStyle(el);
                        results[label] = {
                            fontFamily: s.fontFamily,
                            fontSize: s.fontSize,
                            fontWeight: s.fontWeight,
                            color: s.color,
                            lineHeight: s.lineHeight,
                        };
                    }
                }
                return results;
            }
        """)
        print(f"Computed fonts: {fonts}")

        colors = page.evaluate("""
            () => {
                const allElements = document.querySelectorAll('#root *');
                const colors = new Set();
                for (const el of allElements) {
                    const s = window.getComputedStyle(el);
                    if (s.color) colors.add('color:' + s.color);
                    if (s.backgroundColor && s.backgroundColor !== 'rgba(0, 0, 0, 0)') colors.add('bg:' + s.backgroundColor);
                    if (s.borderColor && s.borderColor !== 'rgb(0, 0, 0)') colors.add('border:' + s.borderColor);
                }
                return [...colors].slice(0, 30);
            }
        """)
        print(f"Unique colors (first 30): {colors}")

        images = page.evaluate("""
            () => {
                const imgs = document.querySelectorAll('img');
                return Array.from(imgs).map(img => ({
                    src: img.src,
                    alt: img.alt,
                    naturalWidth: img.naturalWidth,
                    rendered: img.complete && img.naturalHeight !== 0,
                }));
            }
        """)
        print(f"Images: {images}")

        browser.close()
        print("Done!")

main()
