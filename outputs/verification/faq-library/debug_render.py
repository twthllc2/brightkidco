#!/usr/bin/env python3
"""Debug render HTML for faq-21-e6."""
import asyncio
from playwright.async_api import async_playwright

async def main():
    html_path = "file:///root/projects/brightkidco/outputs/verification/faq-library/faq-21-e6-render.html"

    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(viewport={"width": 420, "height": 800})
        
        all_logs = []
        page.on("console", lambda msg: all_logs.append(f"[{msg.type}] {msg.text}"))
        page.on("pageerror", lambda err: all_logs.append(f"[PAGE_ERROR] {err}"))
        
        await page.goto(html_path, wait_until="networkidle")
        await page.wait_for_timeout(5000)
        
        # Check if Babel loaded
        babel_loaded = await page.evaluate("typeof Babel !== 'undefined'")
        print(f"Babel loaded: {babel_loaded}")
        
        # Check if React loaded
        react_loaded = await page.evaluate("typeof React !== 'undefined'")
        print(f"React loaded: {react_loaded}")
        
        # Check root content
        root_html = await page.evaluate("document.getElementById('root').innerHTML")
        print(f"Root HTML length: {len(root_html)}")
        if root_html:
            print(f"Root HTML preview: {root_html[:500]}")
        
        print(f"\nAll console logs ({len(all_logs)}):")
        for log in all_logs:
            print(f"  {log}")
        
        await browser.close()

asyncio.run(main())
