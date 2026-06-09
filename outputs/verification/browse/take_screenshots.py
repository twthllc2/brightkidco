#!/usr/bin/env python3
"""Take screenshots of browse-04-e2-render.html at required viewport sizes."""

import asyncio
from playwright.async_api import async_playwright

HTML_PATH = "file:///root/projects/brightkidco/outputs/verification/browse/browse-04-e2-render.html"
OUT_DIR = "/root/projects/brightkidco/outputs/verification/browse"

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        
        # 1. 375px mobile screenshot (full page)
        page = await browser.new_page(viewport={"width": 375, "height": 800})
        await page.goto(HTML_PATH, wait_until="networkidle")
        await page.wait_for_timeout(2000)  # Wait for fonts/images
        await page.screenshot(
            path=f"{OUT_DIR}/browse-04-e2-375-mobile.png",
            full_page=True
        )
        print("Saved: browse-04-e2-375-mobile.png")
        await page.close()
        
        # 2. 420px full screenshot (full page)
        page = await browser.new_page(viewport={"width": 420, "height": 800})
        await page.goto(HTML_PATH, wait_until="networkidle")
        await page.wait_for_timeout(2000)
        await page.screenshot(
            path=f"{OUT_DIR}/browse-04-e2-420-full.png",
            full_page=True
        )
        print("Saved: browse-04-e2-420-full.png")
        await page.close()
        
        # 3. 420x568 above-fold screenshot (viewport only)
        page = await browser.new_page(viewport={"width": 420, "height": 568})
        await page.goto(HTML_PATH, wait_until="networkidle")
        await page.wait_for_timeout(2000)
        await page.screenshot(
            path=f"{OUT_DIR}/browse-04-e2-420x568-above-fold.png",
            full_page=False
        )
        print("Saved: browse-04-e2-420x568-above-fold.png")
        await page.close()
        
        await browser.close()
        print("All screenshots taken successfully.")

asyncio.run(main())
