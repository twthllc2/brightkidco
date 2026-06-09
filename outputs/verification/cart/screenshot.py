#!/usr/bin/env python3
"""Take screenshots of cart-02-e1 rendered HTML using Playwright."""
import asyncio
from playwright.async_api import async_playwright

RENDER_PATH = "file:///root/projects/brightkidco/outputs/verification/cart/cart-02-e1-render.html"
OUT_DIR = "/root/projects/brightkidco/outputs/verification/cart"

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(
            executable_path="/root/.hermes/profiles/ops13/home/.cache/ms-playwright/chromium-1223/chrome-linux64/chrome",
            args=["--no-sandbox", "--disable-gpu", "--disable-dev-shm-usage"]
        )
        
        # 1. Full-page screenshot at 420px width
        page = await browser.new_page(viewport={"width": 420, "height": 800})
        await page.goto(RENDER_PATH, wait_until="networkidle")
        await page.wait_for_timeout(2000)  # let fonts load
        await page.screenshot(
            path=f"{OUT_DIR}/cart-02-e1-screenshot.png",
            full_page=True
        )
        print("Full-page screenshot saved")

        # 2. Above-fold screenshot (420x568)
        await page.screenshot(
            path=f"{OUT_DIR}/cart-02-e1-above-fold.png",
            full_page=False,
            clip={"x": 0, "y": 0, "width": 420, "height": 568}
        )
        print("Above-fold screenshot saved")

        # 3. Mobile screenshot at 320px
        page2 = await browser.new_page(viewport={"width": 320, "height": 800})
        await page2.goto(RENDER_PATH, wait_until="networkidle")
        await page2.wait_for_timeout(2000)
        await page2.screenshot(
            path=f"{OUT_DIR}/cart-02-e1-mobile.png",
            full_page=True
        )
        print("Mobile screenshot saved")

        # 4. Console error check
        errors = []
        page3 = await browser.new_page(viewport={"width": 420, "height": 800})
        page3.on("console", lambda msg: errors.append(msg.text) if msg.type == "error" else None)
        await page3.goto(RENDER_PATH, wait_until="networkidle")
        await page3.wait_for_timeout(2000)
        
        if errors:
            print(f"CONSOLE ERRORS: {errors}")
        else:
            print("No console errors")

        # 5. Measure rendered width
        width = await page3.evaluate("document.getElementById('root').offsetWidth")
        print(f"Rendered width: {width}px")

        # 6. Measure CTA button dimensions
        cta_info = await page3.evaluate("""() => {
            const links = document.querySelectorAll('a');
            for (const link of links) {
                if (link.textContent.includes('Check out when')) {
                    const rect = link.getBoundingClientRect();
                    return { width: rect.width, height: rect.height, text: link.textContent };
                }
            }
            return null;
        }""")
        print(f"CTA button: {cta_info}")

        # 7. Check computed fonts
        font_info = await page3.evaluate("""() => {
            const h1 = document.querySelector('h1');
            const body = document.querySelector('p');
            return {
                h1Font: h1 ? getComputedStyle(h1).fontFamily : 'N/A',
                bodyFont: body ? getComputedStyle(body).fontFamily : 'N/A',
            };
        }""")
        print(f"Font info: {font_info}")

        # 8. Get all text content for copy verification
        text_content = await page3.evaluate("""() => {
            return document.getElementById('root').innerText;
        }""")
        with open(f"{OUT_DIR}/cart-02-e1-text.txt", "w") as f:
            f.write(text_content)
        print("Text content extracted")

        # 9. Check background colors of major sections
        colors = await page3.evaluate("""() => {
            const root = document.getElementById('root');
            const children = root.children[0].children; // EmailShell > preheader + sections
            const results = [];
            for (let i = 0; i < children.length; i++) {
                const el = children[i];
                const bg = getComputedStyle(el).backgroundColor;
                const text = el.innerText.substring(0, 60).replace(/\\n/g, ' ');
                results.push({ index: i, bg, text });
            }
            return results;
        }""")
        print(f"Section colors: {colors}")

        # 10. Get SVG element info
        svg_info = await page3.evaluate("""() => {
            const svgs = document.querySelectorAll('svg');
            return { count: svgs.length };
        }""")
        print(f"SVG count: {svg_info}")

        await browser.close()
        print("All screenshots captured successfully")

asyncio.run(main())
