#!/usr/bin/env python3
"""Simplified verification for checkout-03-e2."""
import json, os
from playwright.sync_api import sync_playwright

OUT_DIR = "/root/projects/brightkidco/outputs/verification/checkout"
HTML_FILE = f"{OUT_DIR}/checkout-03-e2-render.html"
SCREENSHOT = f"{OUT_DIR}/checkout-03-e2-screenshot.png"
ABOVE_FOLD = f"{OUT_DIR}/checkout-03-e2-above-fold.png"
MOBILE = f"{OUT_DIR}/checkout-03-e2-mobile.png"

console_msgs = []
console_errs = []

with sync_playwright() as p:
    browser = p.chromium.launch(args=['--no-sandbox', '--disable-gpu'])

    # Full-page 420px
    ctx1 = browser.new_context(viewport={"width": 420, "height": 800})
    page1 = ctx1.new_page()
    page1.on("console", lambda m: console_msgs.append({"type": m.type, "text": m.text}))
    page1.on("pageerror", lambda e: console_errs.append(str(e)))
    page1.goto(f"file://{HTML_FILE}", wait_until="load", timeout=15000)
    page1.wait_for_timeout(3000)
    page1.screenshot(path=SCREENSHOT, full_page=True)

    R = {}
    R["full_page"] = page1.evaluate("JSON.stringify({h: document.getElementById('root').scrollHeight, w: document.getElementById('root').scrollWidth})")

    # Above fold 420x568
    ctx2 = browser.new_context(viewport={"width": 420, "height": 568})
    page2 = ctx2.new_page()
    page2.goto(f"file://{HTML_FILE}", wait_until="load", timeout=15000)
    page2.wait_for_timeout(3000)
    page2.screenshot(path=ABOVE_FOLD)

    # Mobile 320px
    ctx3 = browser.new_context(viewport={"width": 320, "height": 800})
    page3 = ctx3.new_page()
    page3.goto(f"file://{HTML_FILE}", wait_until="load", timeout=15000)
    page3.wait_for_timeout(3000)
    page3.screenshot(path=MOBILE, full_page=True)
    R["mobile"] = page3.evaluate("JSON.stringify({h: document.getElementById('root').scrollHeight, w: document.getElementById('root').scrollWidth})")

    # ── Collect all verification data from page1 ──
    R["checks"] = page1.evaluate("""() => {
        const root = document.getElementById('root');
        const r = {};

        // Check 1: console errors (will be added from outside)

        // Check 2: Layout sections
        const shell = root.firstElementChild;
        r.numSections = shell ? shell.children.length : 0;

        // Check 4: Color samples
        const samples = [];
        const h1 = root.querySelector('h1');
        if (h1) {
            const s = getComputedStyle(h1);
            samples.push({label: 'h1', color: s.color, fontSize: s.fontSize, fontWeight: s.fontWeight, letterSpacing: s.letterSpacing, lineHeight: s.lineHeight});
        }
        const ps = root.querySelectorAll('p');
        for (let i = 0; i < Math.min(ps.length, 5); i++) {
            const s = getComputedStyle(ps[i]);
            samples.push({label: 'p['+i+']', color: s.color, bg: s.backgroundColor || 'none', fontSize: s.fontSize});
        }
        r.colorSamples = samples;

        // Check 5: Fonts
        const fonts = [];
        if (h1) fonts.push({el: 'h1', font: getComputedStyle(h1).fontFamily});
        if (ps[0]) fonts.push({el: 'p[0]', font: getComputedStyle(ps[0]).fontFamily});
        // Fraunces
        const fraunces = root.querySelector('p[style*="Fraunces"]');
        if (fraunces) fonts.push({el: 'fraunces_quote', font: getComputedStyle(fraunces).fontFamily, style: getComputedStyle(fraunces).fontStyle});
        // Caveat
        const caveat = root.querySelector('div[style*="Caveat"]');
        if (caveat) fonts.push({el: 'caveat_sig', font: getComputedStyle(caveat).fontFamily});
        r.fonts = fonts;

        // Check 3: Images
        const imgs = [];
        root.querySelectorAll('img').forEach(img => {
            const rect = img.getBoundingClientRect();
            imgs.push({alt: img.alt, src: img.src.split('/').pop(), naturalW: img.naturalWidth, naturalH: img.naturalHeight, renderedW: Math.round(rect.width), renderedH: Math.round(rect.height)});
        });
        r.images = imgs;

        // Check 8: CTA measurement
        const links = root.querySelectorAll('a');
        const ctaLinks = [];
        links.forEach(a => {
            if (a.textContent.includes('ready')) {
                const rect = a.getBoundingClientRect();
                const s = getComputedStyle(a);
                ctaLinks.push({text: a.textContent.trim().substring(0,50), w: Math.round(rect.width), h: Math.round(rect.height), fontSize: s.fontSize, color: s.color});
            }
        });
        r.ctaLinks = ctaLinks;

        // Check 9: Gradient/band transitions
        const grads = [];
        root.querySelectorAll('div').forEach(d => {
            const bg = getComputedStyle(d).backgroundImage;
            if (bg && bg.includes('linear-gradient')) {
                grads.push({h: getComputedStyle(d).height, bg: bg.substring(0,60)});
            }
        });
        r.gradients = grads;

        // Check 12: Component diversity
        const cats = new Set();
        if (h1) cats.add('HERO');
        if (ps.length > 3) cats.add('TEXT/LETTER');
        if (root.querySelector('div[style*="borderLeft"]')) cats.add('TESTIMONIAL');
        if (root.textContent.includes('BSL Layer')) cats.add('MECHANISM/EDUCATION');
        if (root.querySelector('img[alt*="training"]')) cats.add('PRODUCT');
        if (root.querySelector('a[href="#"]')) cats.add('CTA');
        if (root.textContent.includes('60-Day Trial')) cats.add('GUARANTEE/TRUST');
        if (root.querySelector('svg')) cats.add('DECORATIVE');
        r.componentCategories = Array.from(cats);

        // Check 15: Conversion rules - CTA count and placement
        const tealLinks = [];
        links.forEach(a => {
            const s = getComputedStyle(a);
            if (s.color.includes('43, 174, 180') || s.color.includes('rgb(43, 174, 180)')) {
                tealLinks.push({text: a.textContent.trim().substring(0,50)});
            }
        });
        r.tealCTALinks = tealLinks;

        // Check 14: Mobile readiness - badge overflow check
        r.badges = [];
        root.querySelectorAll('div[style*="flex: 1"]').forEach(d => {
            if (d.textContent.includes('60-Day') || d.textContent.includes('Judgment') || d.textContent.includes('Questions')) {
                const rect = d.getBoundingClientRect();
                r.badges.push({text: d.textContent.trim().substring(0,30), w: Math.round(rect.width), h: Math.round(rect.height)});
            }
        });

        // Check 19: Dark mode
        r.darkModeDataAttrs = !!root.querySelector('[data-theme="dark"]');
        r.darkSections = 0;
        root.querySelectorAll('div').forEach(d => {
            const bg = getComputedStyle(d).backgroundColor;
            if (bg && (bg.includes('31, 45, 47') || bg.includes('31, 42, 44'))) r.darkSections++;
        });

        // Measurements for contraption check
        r.measurements = {};
        // preheader bg
        root.querySelectorAll('div').forEach(d => {
            const bg = getComputedStyle(d).backgroundColor;
            if (bg === 'rgb(246, 242, 234)') r.measurements.preheader_bg = bg;
        });
        // 1px rule
        root.querySelectorAll('div').forEach(d => {
            if (getComputedStyle(d).height === '1px') r.measurements.rule_height = '1px';
        });
        // Signoff card
        const signoffDivs = root.querySelectorAll('div');
        signoffDivs.forEach(d => {
            const bg = getComputedStyle(d).backgroundColor;
            if (bg === 'rgb(31, 42, 44)') {
                r.measurements.signoffCard_bg = bg;
                r.measurements.signoffCard_radius = getComputedStyle(d).borderRadius;
            }
        });
        // Testimonial block
        const testBlock = root.querySelector('div[style*="borderLeft"]');
        if (testBlock) {
            r.measurements.testimonial_bg = getComputedStyle(testBlock).backgroundColor;
            r.measurements.testimonial_radius = getComputedStyle(testBlock).borderRadius;
            r.measurements.testimonial_borderLeft = getComputedStyle(testBlock).borderLeft;
        }
        // ED3 box
        root.querySelectorAll('div').forEach(d => {
            if (d.textContent.includes('BSL Layer') && getComputedStyle(d).borderRadius === '12px') {
                r.measurements.ed3_bg = getComputedStyle(d).backgroundColor;
                r.measurements.ed3_radius = '12px';
                r.measurements.ed3_border = getComputedStyle(d).border;
            }
        });

        // Text extraction for copy alignment
        r.textContent = [];
        const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null, false);
        while (walker.nextNode()) {
            const t = walker.currentNode.textContent.trim();
            if (t.length > 5) r.textContent.push(t);
        }

        return r;
    }""")

    R["console_msgs"] = console_msgs
    R["console_errs"] = console_errs

    browser.close()

with open(f"{OUT_DIR}/checkout-03-e2-verification-data.json", "w") as f:
    json.dump(R, f, indent=2)

# Print summary
print("=== Verification Data ===")
print(f"Console errors: {len(console_errs)}")
for e in console_errs:
    print(f"  ERROR: {e}")
print(f"Console msgs: {len(console_msgs)}")
for m in console_msgs:
    if m['type'] in ('error', 'warning'):
        print(f"  {m['type']}: {m['text']}")
print(f"Full page: {R['full_page']}")
print(f"Mobile: {R['mobile']}")
print(f"Sections: {R['checks']['numSections']}")
print(f"Components: {R['checks']['componentCategories']}")
print(f"Images: {R['checks']['images']}")
print(f"CTA links: {R['checks']['ctaLinks']}")
print(f"Gradients: {len(R['checks']['gradients'])}")
print(f"Dark mode sections: {R['checks']['darkSections']}")
print(f"Badges: {R['checks']['badges']}")
print(f"Fonts: {R['checks']['fonts']}")
print(f"Measurements: {R['checks']['measurements']}")
