from playwright.sync_api import sync_playwright
import json, os

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={'width': 420, 'height': 812})
    
    file_url = 'file://' + os.getcwd() + '/order-05-e1-render.html'
    page.goto(file_url, wait_until='networkidle')
    page.wait_for_timeout(3000)
    
    # Full page at 420px
    page.screenshot(path='order-05-e1-screenshot.png', full_page=True)
    print('Full page screenshot saved')
    
    # Mobile at 375px
    page.set_viewport_size({'width': 375, 'height': 812})
    page.wait_for_timeout(500)
    page.screenshot(path='order-05-e1-mobile.png', full_page=True)
    print('Mobile screenshot saved')
    
    # Above-fold at 420x568
    page.set_viewport_size({'width': 420, 'height': 568})
    page.wait_for_timeout(500)
    page.screenshot(path='order-05-e1-above-fold.png', full_page=False)
    print('Above-fold screenshot saved')
    
    # Get CSS data
    css_data = page.evaluate("""() => {
        const root = document.querySelector('#root > div');
        const computed = window.getComputedStyle(root);
        return {
            width: root.offsetWidth,
            height: root.offsetHeight,
            background: computed.backgroundColor,
            fontFamily: computed.fontFamily,
        };
    }""")
    with open('order-05-e1-css-data.json', 'w') as f:
        json.dump(css_data, f, indent=2)
    print('CSS data saved')
    
    # Get text content
    text_content = page.evaluate('() => document.querySelector("#root > div").innerText')
    with open('order-05-e1-text.txt', 'w') as f:
        f.write(text_content)
    print('Text content saved')
    
    browser.close()
    print('All done')
