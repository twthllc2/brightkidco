#!/usr/bin/env python3
"""Screenshot capture for welcome-01-e6-l3 verification."""
import asyncio
from playwright.async_api import async_playwright

HTML_PATH = "/root/projects/brightkidco/outputs/verification/welcome/welcome-01-e6-l3-render.html"
SCREENSHOT_DIR = "/root/projects/brightkidco/outputs/verification/welcome"
PREFIX = "welcome-01-e6-l3"

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(viewport={"width": 420, "height": 800})

        errors = []
        page.on("console", lambda msg: errors.append(msg.text) if msg.type == "error" else None)

        await page.goto(f"file://{HTML_PATH}", wait_until="networkidle")
        await page.wait_for_timeout(3000)  # wait for fonts and React render

        print(f"Console errors: {len(errors)}")
        for e in errors:
            print(f"  ERROR: {e}")

        # 1. 375px mobile screenshot (full page)
        await page.set_viewport_size({"width": 375, "height": 800})
        await page.wait_for_timeout(500)
        await page.screenshot(
            path=f"{SCREENSHOT_DIR}/{PREFIX}-375-mobile.png",
            full_page=True
        )
        print(f"Saved: {PREFIX}-375-mobile.png")

        # 2. 420px full screenshot (full page)
        await page.set_viewport_size({"width": 420, "height": 800})
        await page.wait_for_timeout(500)
        await page.screenshot(
            path=f"{SCREENSHOT_DIR}/{PREFIX}-420-full.png",
            full_page=True
        )
        print(f"Saved: {PREFIX}-420-full.png")

        # 3. 420x568 above-fold screenshot
        await page.set_viewport_size({"width": 420, "height": 568})
        await page.wait_for_timeout(500)
        await page.screenshot(
            path=f"{SCREENSHOT_DIR}/{PREFIX}-420x568-above-fold.png",
            full_page=False
        )
        print(f"Saved: {PREFIX}-420x568-above-fold.png")

        await browser.close()
        print("Done!")

asyncio.run(main())
