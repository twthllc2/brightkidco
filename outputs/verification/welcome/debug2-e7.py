#!/usr/bin/env python3
"""Debug email rendering - check for JS errors."""
from playwright.sync_api import sync_playwright

html_path = "/root/projects/brightkidco/outputs/verification/welcome/welcome-01-e7-gf-render.html"

with sync_playwright() as p:
    browser = p.chromium.launch(
        args=['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage',
              '--disable-gpu', '--single-process', '--disable-web-security']
    )
    
    page = browser.new_page(viewport={"width": 420, "height": 800})
    
    errors = []
    page.on("pageerror", lambda err: errors.append(str(err)))
    page.on("console", lambda msg: errors.append(f"console.{msg.type}: {msg.text}") if msg.type == "error" else None)
    
    page.goto(f"file://{html_path}", wait_until="networkidle", timeout=30000)
    page.wait_for_timeout(5000)
    
    # Check globals
    babel_loaded = page.evaluate("typeof Babel !== 'undefined'")
    react_dom = page.evaluate("typeof ReactDOM !== 'undefined'")
    has_email = page.evaluate("typeof Email_welcome_01_e7_gf !== 'undefined'")
    has_brand = page.evaluate("typeof window.BRAND !== 'undefined'")
    
    print(f"Babel loaded: {babel_loaded}")
    print(f"ReactDOM loaded: {react_dom}")
    print(f"Email component defined: {has_email}")
    print(f"Brand tokens defined: {has_brand}")
    
    # Try to manually render
    try:
        result = page.evaluate("""
        (() => {
            try {
                const root = ReactDOM.createRoot(document.getElementById('root'));
                root.render(React.createElement(Email_welcome_01_e7_gf));
                return 'rendered ok';
            } catch(e) {
                return 'Error: ' + e.message;
            }
        })()
        """)
        print(f"Manual render: {result}")
    except Exception as e:
        print(f"Manual render exception: {e}")
    
    page.wait_for_timeout(2000)
    
    root_html_len = page.evaluate("document.getElementById('root').innerHTML.length")
    print(f"Root innerHTML length after manual render: {root_html_len}")
    
    print(f"\nErrors ({len(errors)}):")
    for e in errors:
        print(f"  {e[:200]}")
    
    browser.close()
