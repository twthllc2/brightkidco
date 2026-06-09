#!/usr/bin/env python3
"""Check copy alignment and CTA tap target."""
import asyncio
from playwright.async_api import async_playwright

HTML_PATH = "/root/projects/brightkidco/outputs/verification/welcome/welcome-01-e7-l3-render.html"

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        context = await browser.new_context(viewport={"width": 420, "height": 800}, device_scale_factor=2)
        page = await context.new_page()
        await page.goto(f"file://{HTML_PATH}", wait_until="networkidle", timeout=30000)
        await page.wait_for_timeout(3000)

        # Check copy with unicode-aware matching
        full_text = await page.evaluate("() => document.getElementById('root').innerText")

        # Check with curly quotes
        phrases = [
            ("He doesn\u2019t realize he needs to go", "Hook line (curly quote)"),
            ("He doesn\u2019t realize he\u2019s gone", "Hook line end"),
            ("That\u2019s not a choice he\u2019s making", "Hook paragraph 3"),
            ("training wheels for the nervous system", "Metaphor"),
            ("49 peer-reviewed studies", "Citation claim"),
            ("eighth sensory system", "Citation term"),
            ("30 to 60 seconds of feedback", "BSL description"),
            ("micro-moments", "Key term"),
            ("60 days. Your judgment.", "Guarantee close"),
            ("No rush", "CTA tone"),
            ("No longer want these emails?", "Unsubscribe"),
            ("Questions? Reply to this email, Lena reads every response.", "Footer"),
        ]

        print("Copy alignment checks:")
        for phrase, label in phrases:
            found = phrase in full_text
            print(f"  {'PASS' if found else 'FAIL'}: {label} - '{phrase}'")

        # Check CTA tap target - measure the link's actual clickable area
        # For a text link, the tap target is the text + any padding
        cta_detail = await page.evaluate("""() => {
            const links = document.querySelectorAll('a');
            for (const link of links) {
                if (link.textContent.includes('One Pair, See If It Shifts Anything')) {
                    const rect = link.getBoundingClientRect();
                    const style = window.getComputedStyle(link);
                    return {
                        text: link.textContent,
                        width: rect.width,
                        height: rect.height,
                        paddingTop: style.paddingTop,
                        paddingBottom: style.paddingBottom,
                        lineHeight: style.lineHeight,
                        fontSize: style.fontSize,
                    };
                }
            }
            return null;
        }""")
        print(f"\nCTA tap target: {cta_detail}")

        # Check all section backgrounds in the EmailShell's direct children
        bg_check = await page.evaluate("""() => {
            // Get the EmailShell div (first child of root)
            const shell = document.getElementById('root').firstElementChild;
            if (!shell) return [];
            const children = shell.children;
            const result = [];
            for (let i = 0; i < children.length; i++) {
                const el = children[i];
                const style = window.getComputedStyle(el);
                result.push({
                    index: i,
                    bg: style.backgroundColor,
                    text: el.textContent.substring(0, 50).trim(),
                });
            }
            return result;
        }""")
        print("\nEmailShell section backgrounds:")
        for s in bg_check:
            print(f"  [{s['index']}] bg={s['bg']}: '{s['text']}'")

        # Check image src attributes
        img_srcs = await page.evaluate("""() => {
            const imgs = document.querySelectorAll('img');
            return Array.from(imgs).map(img => ({
                src: img.src,
                alt: img.alt,
                broken: img.naturalWidth === 0,
            }));
        }""")
        print("\nImage sources:")
        for img in img_srcs:
            print(f"  src={img['src']}")
            print(f"  alt='{img['alt']}'")
            print(f"  broken={img['broken']}")

        # Check eyebrow text
        eyebrows = await page.evaluate("""() => {
            const allDivs = document.querySelectorAll('div');
            const results = [];
            allDivs.forEach(div => {
                const text = div.textContent.trim();
                if (text === 'HOW IT WORKS' || text === 'OTHER L3 PARENTS') {
                    const style = window.getComputedStyle(div);
                    results.push({
                        text: text,
                        fontSize: style.fontSize,
                        textTransform: style.textTransform,
                        color: style.color,
                        letterSpacing: style.letterSpacing,
                    });
                }
            });
            return results;
        }""")
        print(f"\nEyebrow checks:")
        for e in eyebrows:
            print(f"  '{e['text']}': fontSize={e['fontSize']}, transform={e['textTransform']}, color={e['color']}, letterSpacing={e['letterSpacing']}")

        # Check testimonial card styling
        card_style = await page.evaluate("""() => {
            const cards = document.querySelectorAll('div[style*="borderLeft"]');
            return Array.from(cards).map((card, i) => {
                const style = window.getComputedStyle(card);
                return {
                    index: i,
                    bg: style.backgroundColor,
                    borderLeft: style.borderLeftWidth + ' ' + style.borderLeftStyle + ' ' + style.borderLeftColor,
                    borderRadius: style.borderRadius,
                    padding: style.padding,
                };
            });
        }""")
        print(f"\nTestimonial card styles:")
        for c in card_style:
            print(f"  Card {c['index']}: bg={c['bg']}, border={c['borderLeft']}, radius={c['borderRadius']}, padding={c['padding']}")

        await browser.close()

asyncio.run(main())
