import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(viewport={"width": 420, "height": 568})
        await page.goto("file:///root/projects/brightkidco/outputs/verification/browse/browse-04-e2-render.html", wait_until="networkidle")
        await page.wait_for_timeout(3000)
        
        # Check signoff
        signoff = await page.evaluate("""() => {
            const text = document.body.innerText;
            return {
                hasNoteFrom: text.includes('A note from'),
                hasLena: text.includes('Lena'),
                hasWithUnderstanding: text.includes('With understanding,'),
                hasPS: text.includes('P.S.'),
                hasCustomerSupport: text.includes('Customer Support'),
            };
        }""")
        print("Signoff check:", signoff)
        
        # Check body overflow at 320px
        await page.set_viewport_size({"width": 320, "height": 568})
        await page.wait_for_timeout(1000)
        overflow = await page.evaluate("""() => {
            return {
                bodyScrollWidth: document.body.scrollWidth,
                bodyClientWidth: document.body.clientWidth,
                rootScrollWidth: document.getElementById('root').scrollWidth,
                rootClientWidth: document.getElementById('root').clientWidth,
                containerWidth: document.getElementById('root').firstChild.offsetWidth,
            };
        }""")
        print("Overflow check:", overflow)
        
        await browser.close()

asyncio.run(main())
