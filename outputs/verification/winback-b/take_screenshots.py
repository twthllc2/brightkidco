#!/usr/bin/env python3
"""Take screenshots of the winback-b-24-e1-l1 email at multiple viewports."""
import asyncio
from playwright.async_api import async_playwright

async def main():
    html_path = "file:///root/projects/brightkidco/outputs/verification/winback-b/render-winback-b-24-e1-l1.html"
    out_dir = "/root/projects/brightkidco/outputs/verification/winback-b"

    async with async_playwright() as p:
        browser = await p.chromium.launch()

        # 1. 420px full page
        page = await browser.new_page(viewport={"width": 420, "height": 800})
        errors = []
        page.on("console", lambda msg: errors.append(msg.text) if msg.type == "error" else None)
        await page.goto(html_path, wait_until="networkidle")
        await page.wait_for_timeout(3000)

        root_info = await page.evaluate("""() => {
            const root = document.getElementById('root');
            return {
                hasContent: root && root.innerHTML.length > 100,
                height: root ? root.scrollHeight : 0,
                innerHTMLLength: root ? root.innerHTML.length : 0,
            };
        }""")
        print(f"Root info: {root_info}")

        if root_info["hasContent"]:
            await page.screenshot(path=f"{out_dir}/winback-b-24-e1-l1-420-full.png", full_page=True)
            print("420-full screenshot saved")
        else:
            print("ERROR: Page did not render content")
        await page.close()

        # 2. 420x568 above-fold
        page = await browser.new_page(viewport={"width": 420, "height": 568})
        await page.goto(html_path, wait_until="networkidle")
        await page.wait_for_timeout(2000)
        await page.screenshot(path=f"{out_dir}/winback-b-24-e1-l1-420x568-above-fold.png", full_page=False)
        print("420x568-above-fold screenshot saved")
        await page.close()

        # 3. 375px mobile full page
        page = await browser.new_page(viewport={"width": 375, "height": 812})
        await page.goto(html_path, wait_until="networkidle")
        await page.wait_for_timeout(2000)
        await page.screenshot(path=f"{out_dir}/winback-b-24-e1-l1-375-mobile.png", full_page=True)
        print("375-mobile screenshot saved")
        await page.close()

        print(f"Console errors: {errors}")
        await browser.close()

asyncio.run(main())
