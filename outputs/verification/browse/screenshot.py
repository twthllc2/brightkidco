import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(viewport={"width": 420, "height": 568})
        
        html_path = "file:///root/projects/brightkidco/outputs/verification/browse/browse-04-e2-render.html"
        await page.goto(html_path, wait_until="networkidle")
        
        # Full-page screenshot
        await page.screenshot(
            path="/root/projects/brightkidco/outputs/verification/browse/browse-04-e2-screenshot.png",
            full_page=True
        )
        print("Full-page screenshot saved")
        
        # Above-fold (420x568 viewport)
        await page.screenshot(
            path="/root/projects/brightkidco/outputs/verification/browse/browse-04-e2-above-fold.png",
            full_page=False
        )
        print("Above-fold screenshot saved")
        
        # Mobile (320px viewport)
        await page.set_viewport_size({"width": 320, "height": 568})
        await page.screenshot(
            path="/root/projects/brightkidco/outputs/verification/browse/browse-04-e2-mobile.png",
            full_page=True
        )
        print("Mobile screenshot saved")
        
        # Check console errors
        console_messages = []
        page.on("console", lambda msg: console_messages.append(f"{msg.type}: {msg.text}"))
        await page.reload(wait_until="networkidle")
        await page.wait_for_timeout(2000)
        
        for msg in console_messages:
            print(f"Console: {msg}")
        
        # Check page content
        title = await page.title()
        print(f"Page title: {title}")
        
        # Check rendered width
        width = await page.evaluate("document.getElementById('root').firstChild.offsetWidth")
        print(f"Rendered width: {width}px")
        
        # Check font
        font = await page.evaluate("window.getComputedStyle(document.querySelector('body')).fontFamily")
        print(f"Body font: {font}")
        
        # Get element count
        elements = await page.evaluate("document.querySelectorAll('div').length")
        print(f"Div elements: {elements}")
        
        await browser.close()

asyncio.run(main())
