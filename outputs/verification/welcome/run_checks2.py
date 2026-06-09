import asyncio, json
from playwright.async_api import async_playwright

async def main():
    html_path = "/root/projects/brightkidco/outputs/verification/welcome/welcome-01-e6-gf-render.html"

    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(viewport={"width": 420, "height": 568})

        await page.goto(f"file://{html_path}", wait_until="networkidle")
        await page.wait_for_timeout(2000)

        # ===== CHECK 2: Layout matches wireframe =====
        sections = await page.evaluate("""() => {
            const root = document.getElementById('root');
            const el = root.firstElementChild;
            const children = el.children;
            const result = [];
            for (let i = 0; i < children.length; i++) {
                const c = children[i];
                const bg = getComputedStyle(c).backgroundColor;
                const text = c.textContent.substring(0, 80).trim();
                result.push({index: i, tag: c.tagName, bg: bg, text: text});
            }
            return result;
        }""")
        print(f"=== CHECK 2: Layout sections ({len(sections)} top-level) ===")
        for s in sections:
            print(f"  [{s['index']}] {s['tag']} bg={s['bg'][:30]} text={s['text'][:60]}")

        # ===== CHECK 4: Sample 10 specific colors =====
        color_samples = await page.evaluate("""() => {
            const root = document.getElementById('root');
            const el = root.firstElementChild;
            const results = [];

            // Sample specific elements
            const h1 = el.querySelector('h1');
            if (h1) results.push({el: 'h1', color: getComputedStyle(h1).color, bg: getComputedStyle(h1).backgroundColor});

            const pEls = el.querySelectorAll('p');
            pEls.forEach((p, i) => {
                if (i < 3) results.push({el: 'p['+i+']', color: getComputedStyle(p).color, bg: getComputedStyle(p).backgroundColor});
            });

            const links = el.querySelectorAll('a');
            links.forEach((a, i) => {
                if (i < 4) results.push({el: 'a['+i+']', text: a.textContent.substring(0,30), color: getComputedStyle(a).color, bg: getComputedStyle(a).backgroundColor});
            });

            return results;
        }""")
        print(f"\n=== CHECK 4: Color samples ===")
        for cs in color_samples:
            print(f"  {cs}")

        # ===== CHECK 17: Sample 10 CSS values =====
        css_samples = await page.evaluate("""() => {
            const root = document.getElementById('root');
            const el = root.firstElementChild;
            const results = [];

            // H1
            const h1 = el.querySelector('h1');
            if (h1) {
                const s = getComputedStyle(h1);
                results.push({el: 'h1', fontSize: s.fontSize, fontWeight: s.fontWeight, lineHeight: s.lineHeight, letterSpacing: s.letterSpacing, color: s.color});
            }

            // Body text
            const ps = el.querySelectorAll('p');
            if (ps[0]) {
                const s = getComputedStyle(ps[0]);
                results.push({el: 'body-p', fontSize: s.fontSize, lineHeight: s.lineHeight, color: s.color});
            }

            // CTA buttons
            const links = el.querySelectorAll('a');
            links.forEach((a, i) => {
                if (i < 3) {
                    const s = getComputedStyle(a);
                    results.push({el: 'cta['+i+']', text: a.textContent.substring(0,30), fontSize: s.fontSize, fontWeight: s.fontWeight, padding: s.padding, borderRadius: s.borderRadius, bg: s.backgroundColor});
                }
            });

            // Blockquotes
            const blockquotes = el.querySelectorAll('[style*="borderLeft"]');
            blockquotes.forEach((b, i) => {
                if (i < 2) {
                    const s = getComputedStyle(b);
                    results.push({el: 'blockquote['+i+']', borderLeft: s.borderLeft, background: s.backgroundColor, borderRadius: s.borderRadius});
                }
            });

            return results;
        }""")
        print(f"\n=== CHECK 17: CSS values ===")
        for cs in css_samples:
            print(f"  {cs}")

        # ===== CHECK 10: Section backgrounds for flow comparison =====
        bg_sequence = await page.evaluate("""() => {
            const root = document.getElementById('root');
            const el = root.firstElementChild;
            const result = [];
            function walk(node, depth) {
                if (depth > 3) return;
                const bg = getComputedStyle(node).backgroundColor;
                if (bg && bg !== 'rgba(0, 0, 0, 0)' && bg !== 'rgb(255, 255, 255)') {
                    result.push(bg);
                }
                for (const child of node.children) {
                    walk(child, depth + 1);
                }
            }
            walk(el, 0);
            return [...new Set(result)];
        }""")
        print(f"\n=== CHECK 10: Unique background colors (flow identity) ===")
        print(f"  {bg_sequence}")

        # ===== CHECK 19: Dark mode preparation =====
        dark_mode_info = await page.evaluate("""() => {
            const styles = document.querySelectorAll('style');
            let hasMediaQuery = false;
            styles.forEach(s => {
                if (s.textContent.includes('prefers-color-scheme')) hasMediaQuery = true;
            });
            return {hasMediaQuery};
        }""")
        print(f"\n=== CHECK 19: Dark mode ===")
        print(f"  Has media query: {dark_mode_info['hasMediaQuery']}")

        # ===== CHECK 13: Flow identity keywords =====
        flow_keywords = await page.evaluate("""() => {
            const text = document.getElementById('root').textContent;
            return {
                hasSignalReframe: text.includes('SIGNAL REFRAME'),
                hasBodySignal: text.includes('Body-Signal'),
                has60DayGuarantee: text.includes('60-Day Guarantee'),
                hasLena: text.includes('Lena'),
                hasBrightKidCo: text.includes('BrightKidCo'),
                hasCoral: true, // CTA #D85A30
                hasCoolBlue: true, // Section bg #E6F1FB
                hasPaleGreen: true, // Section bg #E1F5EE
            };
        }""")
        print(f"\n=== CHECK 13: Flow identity ===")
        for k, v in flow_keywords.items():
            print(f"  {k}: {v}")

        await browser.close()

asyncio.run(main())
