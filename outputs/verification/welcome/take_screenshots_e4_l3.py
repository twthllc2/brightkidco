import asyncio
from playwright.async_api import async_playwright
import os

async def main():
    render_path = "/root/projects/brightkidco/outputs/verification/welcome/welcome-01-e4-l3-render.html"
    out_dir = "/root/projects/brightkidco/outputs/verification/welcome"
    
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        
        # 1. 375px mobile screenshot
        page = await browser.new_page(viewport={"width": 375, "height": 812})
        await page.goto(f"file://{render_path}", wait_until="networkidle")
        await page.wait_for_timeout(1000)
        await page.screenshot(
            path=os.path.join(out_dir, "welcome-01-e4-l3-375-mobile.png"),
            full_page=True
        )
        print("Screenshot 1: welcome-01-e4-l3-375-mobile.png")
        await page.close()
        
        # 2. 420px full screenshot
        page = await browser.new_page(viewport={"width": 420, "height": 812})
        await page.goto(f"file://{render_path}", wait_until="networkidle")
        await page.wait_for_timeout(1000)
        await page.screenshot(
            path=os.path.join(out_dir, "welcome-01-e4-l3-420-full.png"),
            full_page=True
        )
        print("Screenshot 2: welcome-01-e4-l3-420-full.png")
        await page.close()
        
        # 3. 420x568 above-fold screenshot
        page = await browser.new_page(viewport={"width": 420, "height": 568})
        await page.goto(f"file://{render_path}", wait_until="networkidle")
        await page.wait_for_timeout(1000)
        await page.screenshot(
            path=os.path.join(out_dir, "welcome-01-e4-l3-420x568-above-fold.png"),
            full_page=False
        )
        print("Screenshot 3: welcome-01-e4-l3-420x568-above-fold.png")
        await page.close()
        
        await browser.close()

asyncio.run(main())
