#!/usr/bin/env python3
"""Take screenshots of the rendered email using Playwright."""
import asyncio
from playwright.async_api import async_playwright

async def main():
    html_path = "file:///root/projects/brightkidco/outputs/verification/checkout/checkout-03-e1-render.html"
    out_dir = "/root/projects/brightkidco/outputs/verification/checkout"

    async with async_playwright() as p:
        browser = await p.chromium.launch()

        # 1. Full-page screenshot at 420px width
        page = await browser.new_page(viewport={"width": 420, "height": 800})
        await page.goto(html_path, wait_until="networkidle")
        await page.wait_for_timeout(3000)  # wait for fonts + React render
        await page.screenshot(path=f"{out_dir}/checkout-03-e1-screenshot.png", full_page=True)
        print("Full-page screenshot saved")

        # 2. Above-the-fold (420x568)
        page2 = await browser.new_page(viewport={"width": 420, "height": 568})
        await page2.goto(html_path, wait_until="networkidle")
        await page2.wait_for_timeout(3000)
        await page2.screenshot(path=f"{out_dir}/checkout-03-e1-above-fold.png", full_page=False)
        print("Above-fold screenshot saved")

        # 3. Mobile (320px)
        page3 = await browser.new_page(viewport={"width": 320, "height": 800})
        await page3.goto(html_path, wait_until="networkidle")
        await page3.wait_for_timeout(3000)
        await page3.screenshot(path=f"{out_dir}/checkout-03-e1-mobile.png", full_page=True)
        print("Mobile screenshot saved")

        # 4. Check console errors
        errors = []
        page4 = await browser.new_page(viewport={"width": 420, "height": 800})
        page4.on("console", lambda msg: errors.append(f"{msg.type}: {msg.text}") if msg.type == "error" else None)
        await page4.goto(html_path, wait_until="networkidle")
        await page4.wait_for_timeout(3000)

        # 5. Gather verification data
        data = await page4.evaluate("""() => {
            const root = document.getElementById('root');
            const rootRect = root.getBoundingClientRect();

            // Get all text content
            const allText = root.innerText;

            // Get all images
            const images = Array.from(root.querySelectorAll('img')).map(img => ({
                src: img.src,
                alt: img.alt,
                width: img.naturalWidth,
                height: img.naturalHeight,
                rendered: img.complete && img.naturalHeight > 0,
            }));

            // Get computed styles for color sampling
            const colorSamples = [];
            const elements = root.querySelectorAll('*');
            const sampledColors = new Set();
            for (const el of elements) {
                const style = window.getComputedStyle(el);
                const color = style.color;
                const bg = style.backgroundColor;
                if (color && !sampledColors.has('color:' + color)) {
                    sampledColors.add('color:' + color);
                    colorSamples.push({ type: 'color', value: color, tag: el.tagName, text: el.textContent?.substring(0, 50) });
                }
                if (bg && bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent' && !sampledColors.has('bg:' + bg)) {
                    sampledColors.add('bg:' + bg);
                    colorSamples.push({ type: 'bg', value: bg, tag: el.tagName, text: el.textContent?.substring(0, 50) });
                }
                if (colorSamples.length >= 20) break;
            }

            // Get font families
            const fonts = new Set();
            for (const el of elements) {
                const ff = window.getComputedStyle(el).fontFamily;
                if (ff) fonts.add(ff);
            }

            // Find CTA button
            let ctaButton = null;
            const links = root.querySelectorAll('a');
            for (const a of links) {
                if (a.textContent.includes('Complete Your Order')) {
                    const rect = a.getBoundingClientRect();
                    ctaButton = {
                        text: a.textContent,
                        width: rect.width,
                        height: rect.height,
                        bg: window.getComputedStyle(a).backgroundColor,
                        color: window.getComputedStyle(a).color,
                    };
                    break;
                }
            }

            // Get all section backgrounds for band transition check
            const sectionBgs = [];
            for (const el of elements) {
                const bg = window.getComputedStyle(el).backgroundColor;
                const rect = el.getBoundingClientRect();
                if (bg && bg !== 'rgba(0, 0, 0, 0)' && rect.height > 20) {
                    sectionBgs.push({ bg, top: rect.top, height: rect.height, tag: el.tagName });
                }
            }

            return {
                rootWidth: rootRect.width,
                rootHeight: rootRect.height,
                allText,
                images,
                colorSamples,
                fonts: Array.from(fonts),
                ctaButton,
                sectionBgs: sectionBgs.slice(0, 15),
            };
        }""")

        await browser.close()

        # Output results as JSON
        import json
        result = {
            "console_errors": errors,
            "verification_data": data,
        }
        print(json.dumps(result, indent=2))

asyncio.run(main())
