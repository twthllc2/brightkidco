#!/usr/bin/env python3
"""Take screenshots of browse-04-e1 rendered email."""
import os
from playwright.sync_api import sync_playwright

OUT_DIR = "/root/projects/brightkidco/outputs/verification/browse"
HTML_FILE = os.path.join(OUT_DIR, "browse-04-e1-render.html")
file_uri = f"file://{HTML_FILE}"

with sync_playwright() as p:
    browser = p.chromium.launch()
    
    # Full-page screenshot at 420px width
    ctx = browser.new_context(viewport={"width": 420, "height": 800})
    page = ctx.new_page()
    page.goto(file_uri, wait_until="networkidle")
    page.wait_for_timeout(2000)
    page.screenshot(
        path=os.path.join(OUT_DIR, "browse-04-e1-screenshot.png"),
        full_page=True
    )
    print("Full-page screenshot saved")
    
    # Above-the-fold (420x568)
    ctx2 = browser.new_context(viewport={"width": 420, "height": 568})
    page2 = ctx2.new_page()
    page2.goto(file_uri, wait_until="networkidle")
    page2.wait_for_timeout(2000)
    page2.screenshot(
        path=os.path.join(OUT_DIR, "browse-04-e1-above-fold.png")
    )
    print("Above-fold screenshot saved")
    
    # Mobile (320px)
    ctx3 = browser.new_context(viewport={"width": 320, "height": 800})
    page3 = ctx3.new_page()
    page3.goto(file_uri, wait_until="networkidle")
    page3.wait_for_timeout(2000)
    page3.screenshot(
        path=os.path.join(OUT_DIR, "browse-04-e1-mobile.png"),
        full_page=True
    )
    print("Mobile screenshot saved")
    
    # Collect console errors
    errors = []
    ctx4 = browser.new_context(viewport={"width": 420, "height": 800})
    page4 = ctx4.new_page()
    page4.on("console", lambda msg: errors.append(f"[{msg.type}] {msg.text}") if msg.type in ("error", "warning") else None)
    page4.goto(file_uri, wait_until="networkidle")
    page4.wait_for_timeout(2000)
    
    # Get rendered element info
    info = page4.evaluate("""() => {
        const root = document.getElementById('root');
        const firstChild = root ? root.firstElementChild : null;
        const computedWidth = firstChild ? firstChild.getBoundingClientRect().width : 0;
        const computedHeight = firstChild ? firstChild.getBoundingClientRect().height : 0;
        
        // Get all text content
        const allText = root ? root.innerText : '';
        
        // Count sections
        const sections = root ? root.querySelectorAll('div > div').length : 0;
        
        // Check for images
        const imgs = root ? root.querySelectorAll('img') : [];
        const imgSrcs = Array.from(imgs).map(img => ({
            src: img.src,
            alt: img.alt,
            naturalWidth: img.naturalWidth,
            naturalHeight: img.naturalHeight,
            renderedWidth: img.getBoundingClientRect().width,
            renderedHeight: img.getBoundingClientRect().height
        }));
        
        // Get CTA button info
        const ctaLinks = root ? root.querySelectorAll('a[href="#"]') : [];
        const ctaInfo = Array.from(ctaLinks).map(a => {
            const rect = a.getBoundingClientRect();
            const style = window.getComputedStyle(a);
            return {
                text: a.textContent.trim(),
                width: rect.width,
                height: rect.height,
                bg: style.backgroundColor,
                color: style.color,
                fontSize: style.fontSize
            };
        });
        
        // Sample colors from key elements
        const colorSamples = [];
        const h1 = root ? root.querySelector('h1') : null;
        if (h1) colorSamples.push({el: 'h1', color: window.getComputedStyle(h1).color});
        
        return {
            width: computedWidth,
            height: computedHeight,
            textLength: allText.length,
            imgCount: imgs.length,
            imgSrcs,
            ctaInfo,
            colorSamples,
            sectionCount: sections
        };
    }""")
    
    browser.close()
    
    print(f"\nConsole errors: {len(errors)}")
    for e in errors:
        print(f"  {e}")
    
    print(f"\nRendered width: {info['width']}px")
    print(f"Rendered height: {info['height']}px")
    print(f"Text length: {info['textLength']} chars")
    print(f"Image count: {info['imgCount']}")
    print(f"Section divs: {info['sectionCount']}")
    
    print("\nImages:")
    for img in info['imgSrcs']:
        print(f"  src={img['src']}, alt={img['alt']}, natural={img['naturalWidth']}x{img['naturalHeight']}, rendered={img['renderedWidth']}x{img['renderedHeight']}")
    
    print("\nCTA links:")
    for cta in info['ctaInfo']:
        print(f"  text='{cta['text']}', size={cta['width']:.0f}x{cta['height']:.0f}, bg={cta['bg']}, color={cta['color']}, fontSize={cta['fontSize']}")
    
    print("\nColor samples:")
    for cs in info['colorSamples']:
        print(f"  {cs['el']}: {cs['color']}")
