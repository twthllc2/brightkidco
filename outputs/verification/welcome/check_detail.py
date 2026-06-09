#!/usr/bin/env python3
"""Detailed measurements for verification checklist."""
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

        # 1. CTA tap target measurement
        cta_info = await page.evaluate("""() => {
            // Find the CTA link
            const links = document.querySelectorAll('a');
            let ctaLink = null;
            for (const link of links) {
                if (link.textContent.includes('One Pair, See If It Shifts Anything')) {
                    ctaLink = link;
                    break;
                }
            }
            if (!ctaLink) return { found: false };
            const rect = ctaLink.getBoundingClientRect();
            const style = window.getComputedStyle(ctaLink);
            return {
                found: true,
                width: rect.width,
                height: rect.height,
                top: rect.top,
                fontSize: style.fontSize,
                fontWeight: style.fontWeight,
                color: style.color,
                textDecoration: style.textDecorationLine,
            };
        }""")
        print(f"CTA link details: {cta_info}")

        # 2. Color sampling - get all background colors in sequence
        sections = await page.evaluate("""() => {
            const root = document.getElementById('root');
            const children = root.children;
            const result = [];
            for (let i = 0; i < children.length; i++) {
                const el = children[i];
                const style = window.getComputedStyle(el);
                result.push({
                    index: i,
                    tag: el.tagName,
                    bg: style.backgroundColor,
                    text: el.textContent.substring(0, 60).trim(),
                });
            }
            return result;
        }""")
        print("\nSection backgrounds:")
        for s in sections:
            print(f"  [{s['index']}] {s['tag']}: bg={s['bg']}, text='{s['text']}'")

        # 3. Check for wave dividers
        wave_count = await page.evaluate("""() => {
            const svgs = document.querySelectorAll('svg');
            let waveCount = 0;
            svgs.forEach(svg => {
                if (svg.querySelector('path[d*="C10,1"]')) waveCount++;
            });
            return waveCount;
        }""")
        print(f"\nWave dividers found: {wave_count}")

        # 4. Check border-radius on key elements
        border_radii = await page.evaluate("""() => {
            const results = [];
            // Hero image
            const heroImg = document.querySelector('img[alt*="Toddler"]');
            if (heroImg) results.push({el: 'hero-image', radius: window.getComputedStyle(heroImg).borderRadius});
            // Testimonial cards
            const cards = document.querySelectorAll('div[style*="borderLeft"]');
            cards.forEach((c, i) => results.push({el: `testimonial-${i}`, radius: window.getComputedStyle(c).borderRadius}));
            // Guarantee box
            const guarantee = document.querySelector('div[style*="dashed"]');
            if (guarantee) results.push({el: 'guarantee-box', radius: window.getComputedStyle(guarantee).borderRadius});
            return results;
        }""")
        print(f"\nBorder radii: {border_radii}")

        # 5. Check section padding values
        paddings = await page.evaluate("""() => {
            const root = document.getElementById('root');
            const children = root.children;
            const result = [];
            for (let i = 0; i < children.length; i++) {
                const el = children[i];
                const style = window.getComputedStyle(el);
                result.push({
                    index: i,
                    padding: style.padding,
                });
            }
            return result;
        }""")
        print(f"\nSection paddings:")
        for p_item in paddings:
            print(f"  [{p_item['index']}] padding={p_item['padding']}")

        # 6. Check that there's no CTA above the fold
        await page.set_viewport_size({"width": 420, "height": 568})
        above_fold_cta = await page.evaluate("""() => {
            const links = document.querySelectorAll('a');
            for (const link of links) {
                const rect = link.getBoundingClientRect();
                if (rect.top < 568 && rect.bottom > 0 && link.textContent.includes('See If It')) {
                    return { found: true, top: rect.top, text: link.textContent };
                }
            }
            return { found: false };
        }""")
        print(f"\nCTA above fold: {above_fold_cta}")

        # 7. Check mountain motif
        mountain = await page.evaluate("""() => {
            const svgs = document.querySelectorAll('svg');
            for (const svg of svgs) {
                const paths = svg.querySelectorAll('path');
                for (const path of paths) {
                    const d = path.getAttribute('d') || '';
                    if (d.includes('L320,18') || d.includes('L360,10')) {
                        return { found: true, opacity: window.getComputedStyle(svg).opacity };
                    }
                }
            }
            return { found: false };
        }""")
        print(f"\nMountain motif: {mountain}")

        # 8. Check wavy line under Lena signoff
        signoff_line = await page.evaluate("""() => {
            const svgs = document.querySelectorAll('svg');
            for (const svg of svgs) {
                const w = parseInt(svg.getAttribute('width'));
                const h = parseInt(svg.getAttribute('height'));
                if (w === 120 && h === 12) {
                    return { found: true, stroke: svg.querySelector('path')?.getAttribute('stroke') };
                }
            }
            return { found: false };
        }""")
        print(f"\nSignoff wavy line: {signoff_line}")

        # 9. Get all text content for copy verification
        full_text = await page.evaluate("""() => {
            return document.getElementById('root').innerText;
        }""")
        print(f"\nFull text length: {len(full_text)} chars")
        # Check key phrases from copy
        key_phrases = [
            "Training wheels for the nervous system",
            "He doesn't realize he needs to go",
            "HOW IT WORKS",
            "training wheels for the nervous system",
            "OTHER L3 PARENTS",
            "He looked down at the wet spot",
            "He has 30 words",
            "micro-moments",
            "Sixty days to see if it shifts anything",
            "1 Pair, $34.99, No rush",
            "One Pair, See If It Shifts Anything",
            "60-day gentle guarantee",
            "With care,",
            "Lena ——",
            "You made it to the bottom",
            "Unsubscribe",
            "Manage Preferences",
            "123 Commerce St",
            "Questions? Reply to this email",
            "BrightKidCo",
        ]
        print("\nKey phrase checks:")
        for phrase in key_phrases:
            found = phrase in full_text
            print(f"  {'PASS' if found else 'FAIL'}: '{phrase}'")

        # 10. Check dark mode preparation - look for prefers-color-scheme or dark mode styles
        dark_mode = await page.evaluate("""() => {
            const styles = document.querySelectorAll('style');
            let hasDarkMode = false;
            styles.forEach(s => {
                if (s.textContent.includes('prefers-color-scheme') || s.textContent.includes('dark')) {
                    hasDarkMode = true;
                }
            });
            return { hasDarkMode };
        }""")
        print(f"\nDark mode CSS: {dark_mode}")

        # 11. Count unique component categories
        categories = [
            "HERO (logo + headline + image)",
            "TEXT/LETTER (hook paragraphs)",
            "MECHANISM/EDUCATION (How It Works section)",
            "TESTIMONIAL/SOCIAL PROOF (parent quotes)",
            "GUARANTEE (60-day dashed box)",
            "CTA (soft text link)",
            "DECORATIVE (wave dividers, mountain motif, wavy signoff line)",
        ]
        print(f"\nComponent categories ({len(categories)}):")
        for c in categories:
            print(f"  - {c}")

        await browser.close()

asyncio.run(main())
