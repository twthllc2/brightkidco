#!/usr/bin/env python3
"""Take 3 screenshots of checkout-03-e2 render using Playwright."""
import asyncio
from playwright.async_api import async_playwright

HTML = "file:///root/projects/brightkidco/outputs/verification/checkout/checkout-03-e2-render.html"
OUT = "/root/projects/brightkidco/outputs/verification/checkout"

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()

        # 1. 375px mobile screenshot
        page1 = await browser.new_page(viewport={"width": 375, "height": 800})
        await page1.goto(HTML, wait_until="networkidle")
        await page1.wait_for_timeout(4000)
        await page1.screenshot(path=f"{OUT}/checkout-03-e2-375-mobile.png", full_page=True)
        print("1/3 375-mobile done")

        # 2. 420px full screenshot
        page2 = await browser.new_page(viewport={"width": 420, "height": 800})
        await page2.goto(HTML, wait_until="networkidle")
        await page2.wait_for_timeout(4000)
        await page2.screenshot(path=f"{OUT}/checkout-03-e2-420-full.png", full_page=True)
        print("2/3 420-full done")

        # 3. 420x568 above-fold screenshot
        page3 = await browser.new_page(viewport={"width": 420, "height": 568})
        await page3.goto(HTML, wait_until="networkidle")
        await page3.wait_for_timeout(4000)
        await page3.screenshot(path=f"{OUT}/checkout-03-e2-420x568-above-fold.png", full_page=False)
        print("3/3 420x568-above-fold done")

        await browser.close()
        print("All 3 screenshots saved.")

asyncio.run(main())
