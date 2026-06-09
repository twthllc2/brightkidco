#!/usr/bin/env python3
"""Generate 3 screenshots for checkout-03-e1 verification."""
import asyncio
from playwright.async_api import async_playwright
import os

async def main():
    html_path = "file:///root/projects/brightkidco/outputs/verification/checkout/checkout-03-e1-render.html"
    out_dir = "/root/projects/brightkidco/outputs/verification/checkout"

    async with async_playwright() as p:
        browser = await p.chromium.launch()

        # 1. 375px mobile screenshot
        page1 = await browser.new_page(viewport={"width": 375, "height": 812})
        await page1.goto(html_path, wait_until="networkidle")
        await page1.wait_for_timeout(3000)
        await page1.screenshot(path=f"{out_dir}/checkout-03-e1-375-mobile.png", full_page=True)
        size1 = os.path.getsize(f"{out_dir}/checkout-03-e1-375-mobile.png")
        print(f"375px mobile: {size1} bytes")

        # 2. 420px full screenshot
        page2 = await browser.new_page(viewport={"width": 420, "height": 812})
        await page2.goto(html_path, wait_until="networkidle")
        await page2.wait_for_timeout(3000)
        await page2.screenshot(path=f"{out_dir}/checkout-03-e1-420-full.png", full_page=True)
        size2 = os.path.getsize(f"{out_dir}/checkout-03-e1-420-full.png")
        print(f"420px full: {size2} bytes")

        # 3. 420x568 above-fold screenshot
        page3 = await browser.new_page(viewport={"width": 420, "height": 568})
        await page3.goto(html_path, wait_until="networkidle")
        await page3.wait_for_timeout(3000)
        await page3.screenshot(path=f"{out_dir}/checkout-03-e1-420x568-above-fold.png", full_page=False)
        size3 = os.path.getsize(f"{out_dir}/checkout-03-e1-420x568-above-fold.png")
        print(f"420x568 above-fold: {size3} bytes")

        await browser.close()

    # Verify all files > 100 bytes
    files = [
        ("checkout-03-e1-375-mobile.png", size1),
        ("checkout-03-e1-420-full.png", size2),
        ("checkout-03-e1-420x568-above-fold.png", size3),
    ]
    ok = True
    for name, size in files:
        if size <= 100:
            print(f"FAIL: {name} is only {size} bytes")
            ok = False
        else:
            print(f"OK: {name} = {size} bytes")

    if ok:
        print("\nAll 3 screenshots generated successfully.")
    else:
        print("\nSome screenshots failed!")
        exit(1)

asyncio.run(main())
