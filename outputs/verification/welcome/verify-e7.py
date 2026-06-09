#!/usr/bin/env python3
"""Detailed verification checks for welcome-01-e7-gf."""
import http.server, threading, os
from playwright.sync_api import sync_playwright

os.chdir('/root/projects/brightkidco/outputs/verification/welcome')
handler = http.server.SimpleHTTPRequestHandler
server = http.server.HTTPServer(('127.0.0.1', 18925), handler)
t = threading.Thread(target=server.serve_forever, daemon=True)
t.start()

with sync_playwright() as p:
    browser = p.chromium.launch(args=['--no-sandbox','--disable-setuid-sandbox','--disable-dev-shm-usage','--disable-gpu','--single-process'])
    page = browser.new_page(viewport={'width': 420, 'height': 800})
    page.goto('http://127.0.0.1:18925/welcome-01-e7-gf-render.html', wait_until='networkidle', timeout=30000)
    page.wait_for_timeout(5000)

    # Check #4: Sample colors
    colors = page.evaluate("""(() => {
        const samples = [];
        const els = document.querySelectorAll('*');
        const seen = new Set();
        for (const el of els) {
            const cs = window.getComputedStyle(el);
            const bg = cs.backgroundColor;
            const fg = cs.color;
            if (bg && bg !== 'rgba(0, 0, 0, 0)' && !seen.has('bg:' + bg)) { seen.add('bg:' + bg); samples.push({type:'bg', value: bg}); }
            if (fg && fg !== 'rgba(0, 0, 0, 0)' && !seen.has('fg:' + fg)) { seen.add('fg:' + fg); samples.push({type:'fg', value: fg}); }
            if (samples.length >= 20) break;
        }
        return samples;
    })()""")
    print("=== Color Samples ===")
    for c in colors:
        print("  %s: %s" % (c['type'], c['value']))

    # Check #5: Font families
    fonts = page.evaluate("""(() => {
        const samples = [];
        const els = document.querySelectorAll('h1, h2, h3, p');
        const seen = new Set();
        for (const el of els) {
            const ff = window.getComputedStyle(el).fontFamily;
            if (ff && !seen.has(ff)) { seen.add(ff); samples.push({ff: ff, tag: el.tagName, text: el.textContent.substring(0,30)}); }
            if (samples.length >= 5) break;
        }
        return samples;
    })()""")
    print("\n=== Font Families ===")
    for f in fonts:
        print("  %s (%s: %s)" % (f['ff'], f['tag'], f['text']))

    # Check #8: CTA buttons
    ctas = page.evaluate("""(() => {
        const results = [];
        const links = document.querySelectorAll('a');
        for (const l of links) {
            const rect = l.getBoundingClientRect();
            if (rect.height > 30) {
                results.push({text: l.textContent.substring(0,40), w: rect.width, h: rect.height, top: Math.round(rect.top)});
            }
        }
        return results;
    })()""")
    print("\n=== CTA Buttons ===")
    for c in ctas:
        print("  %s: %sx%spx at y=%s" % (c['text'], c['w'], c['h'], c['top']))

    # Check #11: Copy alignment
    text = page.evaluate("document.body.innerText")
    copy_phrases = [
        'Whether your child is 3 or 10',
        'day 973 of washing pee-soaked pants',
        "He'll start to pee and THeeeen run",
        "He's been 'almost trained' for months",
        'training wheels for the body signal system',
        'He stayed dry for 2 hours',
        'She told me BEFORE for the first time',
        'He initiated. Once. After 4 years',
        '60 days to try it',
        'Try the 3+3 Bundle',
        'Not ready for 6 pairs',
        '13.33 per pair',
        'With care,',
        'Lena S.',
    ]
    print("\n=== Copy Alignment ===")
    for phrase in copy_phrases:
        found = phrase in text
        status = "PASS" if found else "FAIL"
        print("  %s: '%s'" % (status, phrase))

    # Check #17: CSS values
    css_checks = page.evaluate("""(() => {
        const results = [];
        const links = document.querySelectorAll('a');
        for (const l of links) {
            if (l.textContent.includes('Try the 3+3 Bundle')) {
                const cs = window.getComputedStyle(l);
                results.push({check: 'CTA border-radius', value: cs.borderRadius});
                results.push({check: 'CTA font-weight', value: cs.fontWeight});
                results.push({check: 'CTA font-size', value: cs.fontSize});
                results.push({check: 'CTA bg', value: cs.backgroundColor});
                results.push({check: 'CTA color', value: cs.color});
                break;
            }
        }
        const divs = document.querySelectorAll('div');
        for (const d of divs) {
            const cs = window.getComputedStyle(d);
            if (cs.borderLeftWidth === '3px') {
                results.push({check: 'Pull-quote border-left', value: cs.borderLeftWidth + ' ' + cs.borderLeftStyle + ' ' + cs.borderLeftColor});
                results.push({check: 'Pull-quote bg', value: cs.backgroundColor});
                break;
            }
        }
        const h1 = document.querySelector('h1');
        if (h1) {
            const cs = window.getComputedStyle(h1);
            results.push({check: 'H1 font-size', value: cs.fontSize});
            results.push({check: 'H1 font-weight', value: cs.fontWeight});
        }
        const root = document.getElementById('root');
        results.push({check: 'Root width', value: root.offsetWidth + 'px'});
        return results;
    })()""")
    print("\n=== CSS Values ===")
    for c in css_checks:
        print("  %s: %s" % (c['check'], c['value']))

    # Check #15: CTA count and hierarchy
    cta_count = page.evaluate("""(() => {
        const links = document.querySelectorAll('a');
        const ctas = [];
        for (const l of links) {
            const rect = l.getBoundingClientRect();
            if (rect.height > 30) {
                ctas.push({text: l.textContent.substring(0,50), y: Math.round(rect.top)});
            }
        }
        return ctas;
    })()""")
    print("\n=== CTA Hierarchy === (%d CTAs)" % len(cta_count))
    for c in cta_count:
        print("  y=%s: %s" % (c['top'], c['text']))

    # Check #12: Component categories
    print("\n=== Component Categories ===")
    sections = page.evaluate("""(() => {
        const text = document.body.innerText;
        const cats = [];
        if (text.includes('DAY 17')) cats.push('HERO (PartBadge)');
        if (text.includes('Whether your child')) cats.push('TEXT/LETTER (Hook)');
        if (text.includes("He'll start to pee")) cats.push('TESTIMONIAL/SOCIAL PROOF (Pull-quote)');
        if (text.includes('THE MECHANISM')) cats.push('MECHANISM/EDUCATION (Tip Cards)');
        if (text.includes('Layer 1')) cats.push('MECHANISM/EDUCATION (Layer cards)');
        if (text.includes('THE PRODUCT')) cats.push('PRODUCT SHOWCASE');
        if (text.includes('60 days to try it')) cats.push('GUARANTEE/TRUST');
        if (text.includes('Try the 3+3 Bundle')) cats.push('CTA (Product CTA)');
        if (text.includes('Lena Bauer')) cats.push('SIGNOFF');
        if (text.includes('Unsubscribe')) cats.push('FOOTER');
        return cats;
    })()""")
    for s in sections:
        print("  %s" % s)
    print("  Total: %d categories" % len(sections))

    browser.close()
    server.shutdown()
    print("\nDone!")
