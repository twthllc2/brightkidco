#!/usr/bin/env python3
"""Debug order-05-e1 render - check for JS errors."""
from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(args=["--allow-file-access-from-files"])
    page = browser.new_page(viewport={"width": 420, "height": 800})
    
    console_msgs = []
    page.on("console", lambda msg: console_msgs.append(f"{msg.type}: {msg.text}"))
    page.on("pageerror", lambda err: console_msgs.append(f"PAGE ERROR: {err}"))
    
    page.goto("file:///root/projects/brightkidco/outputs/verification/transactional/order-05-e1-render.html", wait_until="networkidle")
    page.wait_for_timeout(5000)
    
    # Print all console messages
    print("=== Console Messages ===")
    for msg in console_msgs:
        print(msg)
    
    # Check if component is defined
    has_component = page.evaluate("typeof Email_transactional_order_05_e1")
    print(f"\nComponent type: {has_component}")
    
    # Check React
    has_react = page.evaluate("typeof React")
    print(f"React type: {has_react}")
    
    # Check ReactDOM
    has_reactdom = page.evaluate("typeof ReactDOM")
    print(f"ReactDOM type: {has_reactdom}")
    
    # Try to manually render
    try:
        page.evaluate("""
            try {
                var root = ReactDOM.createRoot(document.getElementById("root"));
                root.render(React.createElement(Email_transactional_order_05_e1));
            } catch(e) {
                console.error("Manual render error:", e.message);
            }
        """)
        page.wait_for_timeout(2000)
        root_content = page.evaluate("document.getElementById('root')?.innerHTML?.length || 0")
        print(f"After manual render, root content length: {root_content}")
    except Exception as e:
        print(f"Manual render failed: {e}")
    
    browser.close()
