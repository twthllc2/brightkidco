#!/usr/bin/env python3
"""Run 20-point checklist verification for faq-21-e6."""
import asyncio
from playwright.async_api import async_playwright

async def main():
    html_path = "file:///root/projects/brightkidco/outputs/verification/faq-library/faq-21-e6-render.html"

    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(viewport={"width": 420, "height": 800})
        
        errors = []
        page.on("console", lambda msg: errors.append(msg.text) if msg.type == "error" else None)
        
        await page.goto(html_path, wait_until="networkidle")
        await page.wait_for_timeout(3000)
        
        # Get full page text
        full_text = await page.evaluate("document.body.innerText")
        
        # Check for the missing sentence
        missing_sentence = "The methods you've tried couldn't create a signal that wasn't there."
        has_missing_sentence = missing_sentence in full_text
        print(f"CHECK 11 - Copy verbatim match (missing sentence): {'PASS' if has_missing_sentence else 'FAIL'}")
        print(f"  Sentence found: {has_missing_sentence}")
        
        # Check key content
        checks = {
            "Headline": "Three questions I hear every week" in full_text,
            "Travel eyebrow": "ON OUTINGS AND TRAVEL" in full_text,
            "Poop eyebrow": "ON POOP-SPECIFIC STRUGGLES" in full_text,
            "Communication eyebrow": "ON COMMUNICATION BARRIERS" in full_text,
            "Unifying reframe": "Three different concerns, one shared explanation" in full_text,
            "BSL system": "Body-Signal Learning Layer" in full_text,
            "Guarantee": "60 days to try it" in full_text,
            "CTA": "When you're ready, it's here" in full_text,
            "Sign-off": "With care," in full_text,
            "P.S. medical": "medical GI involvement" in full_text,
            "P.S. late": "Late is not never" in full_text,
            "Interoception gap": "interoception gap is the common thread" in full_text,
            "Signal arrives": "signal arrives from the body" in full_text,
        }
        
        for check, result in checks.items():
            print(f"  {check}: {'PASS' if result else 'FAIL'}")
        
        # Check page dimensions
        dims = await page.evaluate("""() => {
            const root = document.getElementById('root');
            return {
                width: root.offsetWidth,
                height: root.scrollHeight,
            };
        }""")
        print(f"\nPage dimensions: {dims['width']}px wide, {dims['height']}px tall")
        
        # Check console errors (excluding expected logo error)
        real_errors = [e for e in errors if "logo" not in e.lower() and "brightkidco-logo" not in e]
        print(f"Console errors (excluding logo): {len(real_errors)}")
        for e in real_errors:
            print(f"  {e}")
        
        await browser.close()
        
        # Summary
        all_pass = has_missing_sentence and all(checks.values()) and len(real_errors) == 0
        print(f"\n{'='*60}")
        print(f"OVERALL: {'ALL CHECKS PASS' if all_pass else 'SOME CHECKS FAILED'}")
        print(f"{'='*60}")

asyncio.run(main())
