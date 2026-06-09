#!/usr/bin/env python3
"""Debug CTA rendering for faq-21-e6."""
import asyncio
from playwright.async_api import async_playwright

async def main():
    html_path = "file:///root/projects/brightkidco/outputs/verification/faq-library/faq-21-e6-render.html"

    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(viewport={"width": 420, "height": 800})
        
        await page.goto(html_path, wait_until="networkidle")
        await page.wait_for_timeout(3000)
        
        # Get all links
        links = await page.evaluate("""() => {
            const links = document.querySelectorAll('a');
            return Array.from(links).map(a => ({
                text: a.innerText,
                href: a.href,
                display: window.getComputedStyle(a).display,
            }));
        }""")
        
        print("All links on page:")
        for link in links:
            print(f"  Text: '{link['text']}' | Href: {link['href']} | Display: {link['display']}")
        
        # Check for the CTA button specifically
        cta_text = await page.evaluate("""() => {
            const elements = document.querySelectorAll('*');
            for (const el of elements) {
                if (el.innerText && el.innerText.includes("When you're ready")) {
                    return {
                        tag: el.tagName,
                        text: el.innerText.substring(0, 100),
                        display: window.getComputedStyle(el).display,
                    };
                }
            }
            return null;
        }""")
        
        print(f"\nCTA element: {cta_text}")
        
        # Get the last 500 chars of the page text
        full_text = await page.evaluate("document.body.innerText")
        print(f"\nLast 500 chars of page text:")
        print(full_text[-500:])
        
        await browser.close()

asyncio.run(main())
