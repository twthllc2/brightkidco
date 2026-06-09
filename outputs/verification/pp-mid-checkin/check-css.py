#!/usr/bin/env python3
"""Check specific CSS values for the 20-point checklist."""
import os, json
from playwright.sync_api import sync_playwright

OUT = "/root/projects/brightkidco/outputs/verification/pp-mid-checkin"
HTML = os.path.join(OUT, "mid-13-d30-render.html")
FILE_URL = f"file://{HTML}"

def main():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page(viewport={"width": 420, "height": 800})
        page.goto(FILE_URL, wait_until="networkidle")
        page.wait_for_timeout(3000)

        results = {}

        # 1. CTA tap targets
        ctas = page.evaluate("""() => {
            const links = document.querySelectorAll('a');
            return Array.from(links).map(a => {
                const r = a.getBoundingClientRect();
                const s = getComputedStyle(a);
                return {
                    text: a.textContent.trim().substring(0, 50),
                    height: Math.round(r.height),
                    width: Math.round(r.width),
                    bg: s.backgroundColor,
                    color: s.color,
                    border: s.border,
                    fontSize: s.fontSize,
                    fontWeight: s.fontWeight,
                    borderRadius: s.borderRadius,
                };
            });
        }""")
        results["ctas"] = ctas

        # 2. Color verification
        colors = page.evaluate("""() => {
            const root = document.querySelector('#root > div');
            const bg = getComputedStyle(root).backgroundColor;
            // Check eyebrow
            const eyebrow = document.querySelector('[style*="letter-spacing: 2"]');
            const eyebrowColor = eyebrow ? getComputedStyle(eyebrow).color : 'N/A';
            // Check h1
            const h1 = document.querySelector('h1');
            const h1Color = h1 ? getComputedStyle(h1).color : 'N/A';
            // Check body text
            const p = document.querySelector('p');
            const pColor = p ? getComputedStyle(p).color : 'N/A';
            return { rootBg: bg, eyebrowColor, h1Color, bodyColor: pColor };
        }""")
        results["colors"] = colors

        # 3. Component count
        sections = page.evaluate("""() => {
            const root = document.querySelector('#root > div');
            // Count direct children of EmailShell content (skip preheader)
            const children = root.children;
            let count = 0;
            for (let c of children) {
                if (c.textContent.includes('Preheader:')) continue;
                count++;
            }
            return count;
        }""")
        results["section_count"] = sections

        # 4. Signal indicator dots
        dots = page.evaluate("""() => {
            const divs = document.querySelectorAll('div[style*="border-radius: \\"50%\\""]');
            let filled = 0, outlined = 0;
            divs.forEach(d => {
                const s = getComputedStyle(d);
                if (s.background.includes('rgb(43, 174, 180)') || s.backgroundColor === 'rgb(43, 174, 180)') filled++;
                if (s.borderStyle === 'solid' && s.borderWidth === '2px' && s.background === 'transparent') outlined++;
            });
            return { filled, outlined };
        }""")
        results["signal_dots"] = dots

        # 5. Image paths check
        images = page.evaluate("""() => {
            const imgs = document.querySelectorAll('img');
            return Array.from(imgs).map(img => ({
                src: img.src,
                naturalWidth: img.naturalWidth,
                naturalHeight: img.naturalHeight,
                loaded: img.complete && img.naturalWidth > 0,
            }));
        }""")
        results["images"] = images

        # 6. Preheader text
        preheader = page.evaluate("""() => {
            const divs = document.querySelectorAll('div');
            for (let d of divs) {
                if (d.textContent.startsWith('Preheader:')) return d.textContent;
            }
            return 'not found';
        }""")
        results["preheader"] = preheader

        # 7. Easter egg check
        easter = page.evaluate("""() => {
            const ps = document.querySelectorAll('p');
            for (let p of ps) {
                if (p.textContent.includes('made it to the bottom')) return p.textContent;
            }
            return 'not found';
        }""")
        results["easter_egg"] = easter

        # 8. PS text in sign-off
        ps_text = page.evaluate("""() => {
            const ps = document.querySelectorAll('p');
            for (let p of ps) {
                if (p.textContent.includes('PS, If nothing changed')) return p.textContent;
            }
            return 'not found';
        }""")
        results["ps_text"] = ps_text

        # 9. Brand color verification
        brand_check = page.evaluate("""() => {
            const teal = '#2BAEB4';
            const green = '#5DD07A';
            const ink = '#1F2D2F';
            const cream = '#FBF7F1';
            // Check teal on CTA
            const primaryCTA = document.querySelector('a[href="#"]');
            const ctaBg = primaryCTA ? getComputedStyle(primaryCTA).backgroundColor : 'N/A';
            return { teal, ctaBg, cream_bg: getComputedStyle(document.querySelector('#root > div')).backgroundColor };
        }""")
        results["brand_check"] = brand_check

        browser.close()

        # Write results
        with open(os.path.join(OUT, "checklist-data.json"), "w") as f:
            json.dump(results, f, indent=2)

        print(json.dumps(results, indent=2))

if __name__ == "__main__":
    main()
