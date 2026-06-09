#!/usr/bin/env python3
"""Screenshot welcome-01-e7-l1 render at 420px, 375px, 420x568 viewports."""
import asyncio
from playwright.async_api import async_playwright

HTML_PATH = "/root/projects/brightkidco/outputs/verification/welcome/welcome-01-e7-l1-render.html"
OUT_DIR = "/root/projects/brightkidco/outputs/verification/welcome"
PREFIX = "welcome-01-e7-l1"

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        context = await browser.new_context(
            viewport={"width": 420, "height": 800},
            device_scale_factor=2,
        )
        page = await context.new_page()

        # Collect console messages
        console_msgs = []
        page.on("console", lambda msg: console_msgs.append(f"[{msg.type}] {msg.text}"))
        page.on("pageerror", lambda err: console_msgs.append(f"[ERROR] {err.message}"))

        # Load the HTML file
        await page.goto(f"file://{HTML_PATH}", wait_until="networkidle", timeout=30000)
        await page.wait_for_timeout(3000)  # Let fonts load

        # 1. Full-page screenshot at 420px
        await page.screenshot(
            path=f"{OUT_DIR}/{PREFIX}-420-full.png",
            full_page=True,
        )
        print("Full-page screenshot saved (420px).")

        # 2. Mobile at 375px
        await page.set_viewport_size({"width": 375, "height": 800})
        await page.wait_for_timeout(500)
        await page.screenshot(
            path=f"{OUT_DIR}/{PREFIX}-375-mobile.png",
            full_page=True,
        )
        print("Mobile screenshot saved (375px).")

        # 3. Above the fold at 420x568
        await page.set_viewport_size({"width": 420, "height": 568})
        await page.wait_for_timeout(500)
        await page.screenshot(
            path=f"{OUT_DIR}/{PREFIX}-420x568-above-fold.png",
            full_page=False,
        )
        print("Above-fold screenshot saved (420x568).")

        # Print console messages
        print("\n--- Console Messages ---")
        for msg in console_msgs:
            print(msg)
        if not console_msgs:
            print("(no console messages)")

        # Verify fixes - check ProductShowcaseFull CTA colors
        await page.set_viewport_size({"width": 420, "height": 800})
        await page.wait_for_timeout(500)

        cta_check = await page.evaluate("""() => {
            const links = document.querySelectorAll('a[href="#"]');
            const results = [];
            links.forEach(link => {
                const style = window.getComputedStyle(link);
                results.push({
                    text: link.textContent.trim().substring(0, 60),
                    bg: style.backgroundColor,
                    color: style.color,
                    borderRadius: style.borderRadius,
                });
            });
            return results;
        }""")
        print("\n--- CTA Button Check ---")
        for cta in cta_check:
            print(f"  Text: {cta['text']}")
            print(f"    bg: {cta['bg']}, color: {cta['color']}, radius: {cta['borderRadius']}")

        # Check age range text
        age_check = await page.evaluate("""() => {
            const all = document.querySelectorAll('*');
            const ages = [];
            all.forEach(el => {
                if (el.textContent.includes('Ages') && el.children.length === 0) {
                    ages.push(el.textContent.trim());
                }
            });
            return ages;
        }""")
        print(f"\n--- Age Range Text ---")
        for a in age_check:
            print(f"  {a}")

        # Check micro trust text
        trust_check = await page.evaluate("""() => {
            const all = document.querySelectorAll('*');
            const items = [];
            all.forEach(el => {
                const t = el.textContent.trim();
                if (t.includes('Free shipping') && el.children.length === 0) {
                    items.push(t);
                }
            });
            return items;
        }""")
        print(f"\n--- Micro Trust Text ---")
        for t in trust_check:
            print(f"  {t}")

        # Get root element dimensions
        dims = await page.evaluate("""() => {
            const root = document.getElementById('root');
            return {
                width: root.offsetWidth,
                height: document.documentElement.scrollHeight,
            };
        }""")
        print(f"\n--- Root Dimensions ---")
        print(f"  Width: {dims['width']}px, Height: {dims['height']}px")

        await browser.close()
        print("\nDone.")

asyncio.run(main())
