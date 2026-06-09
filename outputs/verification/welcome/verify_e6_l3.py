#!/usr/bin/env python3
"""Extract computed styles and measurements from the E6 L3 render for verification."""
import os, json
from playwright.sync_api import sync_playwright

OUT = "/root/projects/brightkidco/outputs/verification/welcome"
HTML = f"{OUT}/welcome-01-e6-l3-render.html"

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page(viewport={"width": 420, "height": 800})
    page.goto(f"file://{HTML}", wait_until="networkidle")
    page.wait_for_timeout(3000)

    results = {}

    # Check 1: Console errors
    errors = []
    page2 = browser.new_page(viewport={"width": 420, "height": 800})
    page2.on("console", lambda msg: errors.append(msg.text) if msg.type == "error" else None)
    page2.goto(f"file://{HTML}", wait_until="networkidle")
    page2.wait_for_timeout(2000)
    results["console_errors"] = errors

    # Check 6: Measure rendered width
    width = page.evaluate("document.querySelector('#root').offsetWidth")
    results["rendered_width"] = width

    # Check 7: Above the fold - check logo+hero+CTA visible in 420x568
    page.set_viewport_size({"width": 420, "height": 568})
    page.wait_for_timeout(500)
    above_fold = page.evaluate("""() => {
        const root = document.querySelector('#root');
        const rect = root.getBoundingClientRect();
        // Check what's visible in 420x568 viewport
        const viewportHeight = 568;
        const visible = [];
        const elements = document.querySelectorAll('h1, a, svg, p');
        for (const el of elements) {
            const r = el.getBoundingClientRect();
            if (r.top < viewportHeight && r.bottom > 0) {
                visible.push({
                    tag: el.tagName,
                    text: el.textContent?.substring(0, 60),
                    top: Math.round(r.top),
                    height: Math.round(r.height)
                });
            }
        }
        return visible;
    }""")
    results["above_fold_elements"] = above_fold

    # Check 8: CTA dimensions
    cta_info = page.evaluate("""() => {
        const links = document.querySelectorAll('a');
        let cta = null;
        for (const a of links) {
            if (a.textContent.includes('Add alongside')) {
                const r = a.getBoundingClientRect();
                const cs = getComputedStyle(a);
                cta = {
                    text: a.textContent,
                    width: Math.round(r.width),
                    height: Math.round(r.height),
                    fontSize: cs.fontSize,
                    fontWeight: cs.fontWeight,
                    color: cs.color,
                    textDecoration: cs.textDecorationLine,
                    fontFamily: cs.fontFamily
                };
            }
        }
        return cta;
    }""")
    results["cta_info"] = cta_info

    # Check 5: Brand fonts
    fonts = page.evaluate("""() => {
        const results = {};
        // Check body text font
        const paras = document.querySelectorAll('p');
        if (paras.length > 0) {
            const cs = getComputedStyle(paras[5]); // body paragraph
            results.body_font = cs.fontFamily;
        }
        // Check hero text font
        const h1 = document.querySelector('h1');
        if (h1) {
            const cs = getComputedStyle(h1);
            results.hero_font = cs.fontFamily;
        }
        return results;
    }""")
    results["fonts"] = fonts

    # Check 4: Sample colors (10 colors)
    colors = page.evaluate("""() => {
        const samples = [];
        // Background colors
        const divs = document.querySelectorAll('div');
        const bgColors = new Set();
        for (const d of divs) {
            const bg = getComputedStyle(d).backgroundColor;
            if (bg && bg !== 'rgba(0, 0, 0, 0)') {
                bgColors.add(bg);
            }
        }
        // Text colors
        const textColors = new Set();
        const textEls = document.querySelectorAll('p, h1, a, span');
        for (const el of textEls) {
            const c = getComputedStyle(el).color;
            if (c) textColors.add(c);
        }
        return { bgColors: [...bgColors], textColors: [...textColors] };
    }""")
    results["colors"] = colors

    # Check 12: Component diversity
    components = page.evaluate("""() => {
        const categories = new Set();
        const divs = document.querySelectorAll('div');
        for (const d of divs) {
            const bg = getComputedStyle(d).backgroundColor;
            const border = getComputedStyle(d).borderLeft;
            const border2 = getComputedStyle(d).border;
            if (border && border.includes('solid')) categories.add('TESTIMONIAL/CALLOUT');
            if (border2 && border2.includes('dashed')) categories.add('GUARANTEE/DASHED');
        }
        const svgs = document.querySelectorAll('svg');
        categories.add('SVG/DECORATIVE');
        if (svgs.length > 0) categories.add('SIGNAL_WAVE');
        const h1 = document.querySelector('h1');
        if (h1) categories.add('HERO');
        const links = document.querySelectorAll('a');
        if (links.length > 0) categories.add('CTA');
        const ps = document.querySelectorAll('p');
        if (ps.length > 3) categories.add('TEXT/LETTER');
        return [...categories];
    }""")
    results["component_categories"] = components

    browser.close()

    print(json.dumps(results, indent=2, default=str))
