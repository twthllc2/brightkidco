#!/usr/bin/env python3
"""Visual verification script for checkout-03-e2 email."""
import json, os, sys
from playwright.sync_api import sync_playwright

OUT_DIR = "/root/projects/brightkidco/outputs/verification/checkout"
HTML_FILE = f"{OUT_DIR}/checkout-03-e2-render.html"
SCREENSHOT = f"{OUT_DIR}/checkout-03-e2-screenshot.png"
ABOVE_FOLD = f"{OUT_DIR}/checkout-03-e2-above-fold.png"
MOBILE = f"{OUT_DIR}/checkout-03-e2-mobile.png"
RESULTS = {}

console_messages = []
console_errors = []

with sync_playwright() as p:
    browser = p.chromium.launch()

    # ── Full-page screenshot (420px) ──
    ctx1 = browser.new_context(viewport={"width": 420, "height": 800}, device_scale_factor=1)
    page1 = ctx1.new_page()
    page1.on("console", lambda msg: console_messages.append({"type": msg.type, "text": msg.text}))
    page1.on("pageerror", lambda err: console_errors.append(str(err)))
    page1.goto(f"file://{HTML_FILE}", wait_until="networkidle", timeout=30000)
    page1.wait_for_timeout(2000)  # let fonts load
    page1.screenshot(path=SCREENSHOT, full_page=True)
    RESULTS["full_page_height"] = page1.evaluate("document.getElementById('root').scrollHeight")
    RESULTS["full_page_width"] = page1.evaluate("document.getElementById('root').scrollWidth")

    # ── Above-the-fold screenshot (420x568) ──
    ctx2 = browser.new_context(viewport={"width": 420, "height": 568}, device_scale_factor=1)
    page2 = ctx2.new_page()
    page2.goto(f"file://{HTML_FILE}", wait_until="networkidle", timeout=30000)
    page2.wait_for_timeout(2000)
    page2.screenshot(path=ABOVE_FOLD)

    # Check what's visible above the fold
    above_fold_visible = page2.evaluate("""() => {
        const root = document.getElementById('root');
        const vh = 568;
        const elements = [];
        // Check logo
        const logo = root.querySelector('img[alt="BrightKidCo"]');
        if (logo) {
            const r = logo.getBoundingClientRect();
            elements.push({name: 'logo', visible: r.top >= 0 && r.bottom <= vh, top: r.top, bottom: r.bottom});
        }
        // Check h1
        const h1 = root.querySelector('h1');
        if (h1) {
            const r = h1.getBoundingClientRect();
            elements.push({name: 'h1', visible: r.top >= 0 && r.bottom <= vh, top: r.top, bottom: r.bottom, text: h1.textContent.substring(0, 40)});
        }
        // Check CTA link
        const cta = root.querySelector('a[href="#"]');
        // Find the teal CTA link
        const allLinks = root.querySelectorAll('a');
        let ctaFound = false;
        for (const a of allLinks) {
            const s = getComputedStyle(a);
            if (a.textContent.includes('ready')) {
                const r = a.getBoundingClientRect();
                elements.push({name: 'cta_link', visible: r.top >= 0 && r.bottom <= vh, top: r.top, bottom: r.bottom, text: a.textContent.trim().substring(0, 50)});
                ctaFound = true;
                break;
            }
        }
        return elements;
    }""")
    RESULTS["above_fold"] = above_fold_visible

    # ── Mobile screenshot (320px) ──
    ctx3 = browser.new_context(viewport={"width": 320, "height": 800}, device_scale_factor=1)
    page3 = ctx3.new_page()
    page3.goto(f"file://{HTML_FILE}", wait_until="networkidle", timeout=30000)
    page3.wait_for_timeout(2000)
    page3.screenshot(path=MOBILE, full_page=True)
    RESULTS["mobile_height"] = page3.evaluate("document.getElementById('root').scrollHeight")
    RESULTS["mobile_width"] = page3.evaluate("document.getElementById('root').scrollWidth")

    # ── Console errors ──
    RESULTS["console_messages"] = console_messages
    RESULTS["console_errors"] = console_errors

    # ── Color sampling (10 colors) ──
    color_samples = page1.evaluate("""() => {
        const root = document.getElementById('root');
        const samples = [];

        // Helper to get computed color of element matching selector
        function sample(selector, desc) {
            const el = root.querySelector(selector);
            if (!el) return {desc, color: 'NOT FOUND'};
            const s = getComputedStyle(el);
            return {desc, color: s.color, bg: s.backgroundColor, font: s.fontFamily};
        }

        // H1 text color
        const h1 = root.querySelector('h1');
        if (h1) samples.push({desc: 'h1 color', color: getComputedStyle(h1).color});

        // Body text paragraphs
        const paras = root.querySelectorAll('p');
        for (let i = 0; i < Math.min(paras.length, 3); i++) {
            const s = getComputedStyle(paras[i]);
            samples.push({desc: `p[${i}] color`, color: s.color, bg: s.backgroundColor || 'none'});
        }

        // Preheader
        const pre = root.querySelector('div[style*="F6F2EA"]');
        if (pre) samples.push({desc: 'preheader bg', bg: getComputedStyle(pre).backgroundColor});

        // Testimonial block
        const testBlock = root.querySelector('div[style*="borderLeft"]');
        if (testBlock) samples.push({desc: 'testimonial bg', bg: getComputedStyle(testBlock).backgroundColor});

        // Signoff card
        const signoff = root.querySelector('div[style*="1F2A2C"]');
        if (signoff) samples.push({desc: 'signoff card bg', bg: getComputedStyle(signoff).backgroundColor});

        // Badge teal text
        const badges = root.querySelectorAll('div[style*="uppercase"]');
        for (let i = 0; i < Math.min(badges.length, 2); i++) {
            const s = getComputedStyle(badges[i]);
            samples.push({desc: `badge[${i}] color`, color: s.color});
        }

        return samples;
    }""")
    RESULTS["color_samples"] = color_samples

    # ── Font check ──
    font_check = page1.evaluate("""() => {
        const root = document.getElementById('root');
        const results = [];

        const h1 = root.querySelector('h1');
        if (h1) results.push({el: 'h1', font: getComputedStyle(h1).fontFamily, weight: getComputedStyle(h1).fontWeight});

        const p1 = root.querySelector('p');
        if (p1) results.push({el: 'first p', font: getComputedStyle(p1).fontFamily});

        // Check Fraunces italic (pull quotes)
        const italicP = root.querySelector('p[style*="Fraunces"]');
        if (italicP) results.push({el: 'fraunces quote', font: getComputedStyle(italicP).fontFamily, style: getComputedStyle(italicP).fontStyle});

        // Check Caveat signature
        const caveat = root.querySelector('div[style*="Caveat"]');
        if (caveat) results.push({el: 'caveat sig', font: getComputedStyle(caveat).fontFamily});

        return results;
    }""")
    RESULTS["fonts"] = font_check

    # ── CTA measurement ──
    cta_measure = page1.evaluate("""() => {
        const root = document.getElementById('root');
        const links = root.querySelectorAll('a');
        const results = [];
        for (const a of links) {
            const text = a.textContent.trim();
            if (text.includes('ready') || text.includes('today')) {
                const r = a.getBoundingClientRect();
                const s = getComputedStyle(a);
                results.push({
                    text: text.substring(0, 50),
                    width: r.width,
                    height: r.height,
                    fontSize: s.fontSize,
                    color: s.color,
                });
            }
        }
        return results;
    }""")
    RESULTS["cta_measurement"] = cta_measure

    # ── Band/transition check ──
    bands = page1.evaluate("""() => {
        const root = document.getElementById('root');
        const divs = root.querySelectorAll('div');
        const gradientDivs = [];
        for (const d of divs) {
            const s = getComputedStyle(d);
            if (s.backgroundImage && s.backgroundImage.includes('linear-gradient')) {
                gradientDivs.push({
                    height: s.height,
                    bg: s.backgroundImage.substring(0, 80),
                    tag: d.tagName,
                });
            }
        }
        return gradientDivs;
    }""")
    RESULTS["gradients"] = bands

    # ── Badge dimensions ──
    badge_dims = page1.evaluate("""() => {
        const root = document.getElementById('root');
        const badges = root.querySelectorAll('div[style*="flex: 1"][style*="FBF7F1"]');
        const results = [];
        for (const b of badges) {
            const r = b.getBoundingClientRect();
            results.push({
                text: b.textContent.trim().substring(0, 40),
                width: r.width,
                height: r.height,
            });
        }
        return results;
    }""")
    RESULTS["badge_dims"] = badge_dims

    # ── Product card check ──
    product_card = page1.evaluate("""() => {
        const root = document.getElementById('root');
        const imgs = root.querySelectorAll('img');
        const results = [];
        for (const img of imgs) {
            const r = img.getBoundingClientRect();
            results.push({
                alt: img.alt,
                src: img.src,
                width: r.width,
                height: r.height,
                naturalWidth: img.naturalWidth,
                naturalHeight: img.naturalHeight,
            });
        }
        return results;
    }""")
    RESULTS["images"] = product_card

    # ── Component diversity check ──
    component_diversity = page1.evaluate("""() => {
        const root = document.getElementById('root');
        const categories = new Set();

        // Hero
        if (root.querySelector('h1')) categories.add('HERO');

        // Letter/text
        if (root.querySelectorAll('p').length > 3) categories.add('TEXT/LETTER');

        // Testimonials
        if (root.querySelector('div[style*="borderLeft"]')) categories.add('TESTIMONIAL');

        // Mechanism/education (ED3 diagram)
        if (root.textContent.includes('BSL Layer')) categories.add('MECHANISM/EDUCATION');

        // Product
        if (root.querySelector('img[alt*="training"]')) categories.add('PRODUCT');

        // CTA
        if (root.querySelector('a[href="#"]')) categories.add('CTA');

        // Trust/guarantee
        if (root.textContent.includes('60-Day Trial')) categories.add('GUARANTEE/TRUST');

        // Decorative (signoff, footer)
        if (root.querySelector('svg')) categories.add('DECORATIVE');

        return Array.from(categories);
    }""")
    RESULTS["component_categories"] = component_diversity

    # ── Text content extraction for copy alignment ──
    text_content = page1.evaluate("""() => {
        const root = document.getElementById('root');
        const texts = [];
        const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null, false);
        while (walker.nextNode()) {
            const t = walker.currentNode.textContent.trim();
            if (t.length > 5) texts.push(t);
        }
        return texts;
    }""")
    RESULTS["text_content"] = text_content

    # ── Section count ──
    section_count = page1.evaluate("""() => {
        const root = document.getElementById('root');
        // Count direct children of root's first child (the email shell)
        const shell = root.firstElementChild;
        return shell ? shell.children.length : 0;
    }""")
    RESULTS["section_count"] = section_count

    # ── Specific measurements for wireframe fidelity ──
    measurements = page1.evaluate("""() => {
        const root = document.getElementById('root');
        const results = {};

        // h1 font-size
        const h1 = root.querySelector('h1');
        if (h1) results.h1_fontSize = getComputedStyle(h1).fontSize;

        // h1 font-weight
        if (h1) results.h1_fontWeight = getComputedStyle(h1).fontWeight;

        // h1 letter-spacing
        if (h1) results.h1_letterSpacing = getComputedStyle(h1).letterSpacing;

        // product card border
        const productDiv = root.querySelector('div[style*="1.5px solid #1F2D2F"]');
        if (productDiv) results.product_border = getComputedStyle(productDiv).border;

        // signoff card border-radius
        const signoffCard = root.querySelector('div[style*="22px"]');
        if (signoffCard) results.signoff_borderRadius = getComputedStyle(signoffCard).borderRadius;

        // testimonial border-radius
        const testBlock = root.querySelector('div[style*="borderLeft"]');
        if (testBlock) results.testimonial_borderRadius = getComputedStyle(testBlock).borderRadius;

        // 1px rule height
        const rule = root.querySelector('div[style*="height: 1px"]');
        if (rule) results.rule_height = getComputedStyle(rule).height;

        // preheader font-size
        const pre = root.querySelector('div[style*="F6F2EA"]');
        if (pre) results.preheader_fontSize = getComputedStyle(pre).fontSize;

        return results;
    }""")
    RESULTS["measurements"] = measurements

    # ── Dark mode check ──
    dark_mode = page1.evaluate("""() => {
        const root = document.getElementById('root');
        // Check if any dark mode CSS or data attributes exist
        const hasDarkMode = root.querySelector('[data-theme="dark"]') ||
                           root.querySelector('.dark-mode') ||
                           root.querySelector('style[data-dark]');
        // Check signoff section has dark background
        const darkSections = [];
        const allDivs = root.querySelectorAll('div');
        for (const d of allDivs) {
            const bg = getComputedStyle(d).backgroundColor;
            if (bg && (bg.includes('31, 45, 47') || bg.includes('31, 42, 44'))) {
                darkSections.push({bg, text: d.textContent.substring(0, 50)});
            }
        }
        return {
            has_dark_mode_attributes: !!hasDarkMode,
            dark_sections_count: darkSections.length,
            dark_sections: darkSections.slice(0, 3),
        };
    }""")
    RESULTS["dark_mode"] = dark_mode

    browser.close()

# Save results
with open(f"{OUT_DIR}/checkout-03-e2-verification-data.json", "w") as f:
    json.dump(RESULTS, f, indent=2)

print("Verification data collected successfully.")
print(json.dumps({k: v for k, v in RESULTS.items() if k not in ('text_content', 'console_messages')}, indent=2))
