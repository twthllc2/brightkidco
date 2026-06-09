#!/usr/bin/env python3
"""Final border and CTA tap target checks."""
from playwright.sync_api import sync_playwright

OUT = "/root/projects/brightkidco/outputs/verification/welcome"
HTML = f"{OUT}/welcome-01-e6-l3-render.html"

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page(viewport={"width": 420, "height": 800})
    page.goto(f"file://{HTML}", wait_until="networkidle")
    page.wait_for_timeout(3000)

    # Check testimonial card border
    testimonial_border = page.evaluate("""() => {
        const divs = document.querySelectorAll('div');
        for (const d of divs) {
            if (d.textContent.includes('I have 2 ASD kiddos')) {
                const cs = getComputedStyle(d);
                if (cs.borderLeftStyle === 'solid' && cs.borderLeftWidth !== '0px') {
                    return {
                        borderLeft: cs.borderLeft,
                        borderLeftWidth: cs.borderLeftWidth,
                        borderLeftColor: cs.borderLeftColor,
                        borderLeftStyle: cs.borderLeftStyle,
                        borderRadius: cs.borderRadius,
                        background: cs.backgroundColor,
                        padding: cs.padding
                    };
                }
            }
        }
        return null;
    }""")
    print(f"Testimonial card: {testimonial_border}")

    # Check guarantee card border
    guarantee_border = page.evaluate("""() => {
        const divs = document.querySelectorAll('div');
        for (const d of divs) {
            if (d.textContent.includes("I can't promise your child will train")) {
                const cs = getComputedStyle(d);
                if (cs.borderStyle === 'dashed') {
                    return {
                        border: cs.border,
                        borderStyle: cs.borderStyle,
                        borderRadius: cs.borderRadius,
                        padding: cs.padding
                    };
                }
            }
        }
        return null;
    }""")
    print(f"Guarantee card: {guarantee_border}")

    # Check CTA tap target - measure the actual clickable area
    cta_tap = page.evaluate("""() => {
        const links = document.querySelectorAll('a');
        for (const a of links) {
            if (a.textContent.includes('Add alongside')) {
                const r = a.getBoundingClientRect();
                return {
                    width: Math.round(r.width),
                    height: Math.round(r.height),
                    top: Math.round(r.top),
                    // Also check if parent has padding
                    parentHeight: Math.round(a.parentElement.getBoundingClientRect().height),
                    lineHeight: getComputedStyle(a).lineHeight,
                    padding: getComputedStyle(a).padding,
                    display: getComputedStyle(a).display
                };
            }
        }
        return null;
    }""")
    print(f"CTA tap target: {cta_tap}")

    # Check PS line separator
    ps_sep = page.evaluate("""() => {
        const divs = document.querySelectorAll('div');
        for (const d of divs) {
            if (d.textContent.includes('Maureen Bennie') && d.children.length > 0) {
                for (const child of d.children) {
                    const cs = getComputedStyle(child);
                    if (cs.height === '1px' || cs.height === '1') {
                        return {
                            width: cs.width,
                            height: cs.height,
                            background: cs.backgroundColor
                        };
                    }
                }
            }
        }
        return null;
    }""")
    print(f"PS separator: {ps_sep}")

    # Check signal wave details
    wave = page.evaluate("""() => {
        const svgs = document.querySelectorAll('svg');
        for (const s of svgs) {
            if (s.getAttribute('viewBox') === '0 0 480 120') {
                const paths = s.querySelectorAll('path');
                const texts = s.querySelectorAll('text');
                return {
                    width: s.getAttribute('width'),
                    height: s.getAttribute('height'),
                    pathCount: paths.length,
                    label: texts.length > 0 ? texts[0].textContent : null,
                    hasAnimation: s.querySelector('style') !== null,
                    hasGlow: s.querySelector('linearGradient') !== null
                };
            }
        }
        return null;
    }""")
    print(f"Signal wave: {wave}")

    # Check feather easter egg
    feather = page.evaluate("""() => {
        const svgs = document.querySelectorAll('svg');
        for (const s of svgs) {
            if (s.getAttribute('viewBox') === '0 0 480 120') {
                const paths = s.querySelectorAll('path');
                for (const p of paths) {
                    const d = p.getAttribute('d');
                    if (d && d.includes('472') && d.includes('110')) {
                        return {
                            d: d,
                            stroke: p.getAttribute('stroke'),
                            strokeWidth: p.getAttribute('stroke-width'),
                            fill: p.getAttribute('fill'),
                            opacity: p.getAttribute('opacity')
                        };
                    }
                }
            }
        }
        return null;
    }""")
    print(f"Feather easter egg: {feather}")

    # Check Lena signature SVG dimensions
    sig = page.evaluate("""() => {
        const svgs = document.querySelectorAll('svg');
        for (const s of svgs) {
            if (s.getAttribute('viewBox') === '0 0 80 24') {
                const paths = s.querySelectorAll('path');
                return {
                    width: s.getAttribute('width'),
                    height: s.getAttribute('height'),
                    pathCount: paths.length,
                    firstPath: paths.length > 0 ? {
                        stroke: paths[0].getAttribute('stroke'),
                        strokeWidth: paths[0].getAttribute('stroke-width'),
                        fill: paths[0].getAttribute('fill')
                    } : null
                };
            }
        }
        return null;
    }""")
    print(f"Lena signature: {sig}")

    browser.close()
