#!/usr/bin/env python3
"""Take 3 screenshots of the rendered email HTML."""
import asyncio
from playwright.async_api import async_playwright

HTML_PATH = "/root/projects/brightkidco/outputs/verification/pp-extended-ed/pped-22-e3-l3-render.html"
OUT_DIR = "/root/projects/brightkidco/outputs/verification/pp-extended-ed"

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(device_scale_factor=2)

        # 1. Full page at 420px width
        await page.set_viewport_size({"width": 420, "height": 900})
        await page.goto(f"file://{HTML_PATH}")
        await page.wait_for_load_state("domcontentloaded")
        await page.wait_for_timeout(2000)
        await page.screenshot(
            path=f"{OUT_DIR}/pped-22-e3-l3-420-full.png",
            full_page=True,
        )
        print("Screenshot 1: full page done")

        # 2. Above the fold at 420x568
        await page.set_viewport_size({"width": 420, "height": 568})
        await page.goto(f"file://{HTML_PATH}")
        await page.wait_for_load_state("domcontentloaded")
        await page.wait_for_timeout(2000)
        await page.screenshot(
            path=f"{OUT_DIR}/pped-22-e3-l3-420x568-above-fold.png",
            full_page=False,
        )
        print("Screenshot 2: above the fold done")

        # 3. Mobile at 375px width (full page)
        await page.set_viewport_size({"width": 375, "height": 812})
        await page.goto(f"file://{HTML_PATH}")
        await page.wait_for_load_state("domcontentloaded")
        await page.wait_for_timeout(2000)
        await page.screenshot(
            path=f"{OUT_DIR}/pped-22-e3-l3-375-mobile.png",
            full_page=True,
        )
        print("Screenshot 3: mobile done")

        await browser.close()
        print("All screenshots complete.")

asyncio.run(main())
