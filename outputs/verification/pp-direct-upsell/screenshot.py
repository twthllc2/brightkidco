import asyncio
from playwright.async_api import async_playwright
import os

OUTPUT_DIR = '/root/projects/brightkidco/outputs/verification/pp-direct-upsell'
HTML_PATH = os.path.join(OUTPUT_DIR, 'upsell-09-e2.html')

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()

        # Screenshot 1: Full page at 420px
        page1 = await browser.new_page()
        await page1.set_viewport_size({"width": 420, "height": 800})
        await page1.goto(f'file://{HTML_PATH}')
        await page1.wait_for_timeout(2000)
        await page1.screenshot(path=os.path.join(OUTPUT_DIR, 'upsell-09-e2-420-full.png'), full_page=True)
        print('420px full page screenshot saved')
        await page1.close()

        # Screenshot 2: Mobile at 375px
        page2 = await browser.new_page()
        await page2.set_viewport_size({"width": 375, "height": 800})
        await page2.goto(f'file://{HTML_PATH}')
        await page2.wait_for_timeout(2000)
        await page2.screenshot(path=os.path.join(OUTPUT_DIR, 'upsell-09-e2-375-mobile.png'), full_page=True)
        print('375px mobile screenshot saved')
        await page2.close()

        # Screenshot 3: Above-fold 420x568
        page3 = await browser.new_page()
        await page3.set_viewport_size({"width": 420, "height": 568})
        await page3.goto(f'file://{HTML_PATH}')
        await page3.wait_for_timeout(2000)
        await page3.screenshot(path=os.path.join(OUTPUT_DIR, 'upsell-09-e2-420x568-above-fold.png'), full_page=False)
        print('420x568 above-fold screenshot saved')
        await page3.close()

        # Screenshot 4: Console errors check
        page4 = await browser.new_page()
        errors = []
        page4.on('console', lambda msg: errors.append(msg.text) if msg.type == 'error' else None)
        await page4.set_viewport_size({"width": 420, "height": 800})
        await page4.goto(f'file://{HTML_PATH}')
        await page4.wait_for_timeout(3000)
        
        # Get rendered height
        height = await page4.evaluate('document.querySelector("#root").offsetHeight')
        width = await page4.evaluate('document.querySelector("#root").offsetWidth')
        print(f'Rendered width: {width}px, height: {height}px')
        
        if errors:
            print(f'Console errors: {errors}')
        else:
            print('No console errors')
        
        await page4.close()
        await browser.close()

asyncio.run(main())
print('Done')
