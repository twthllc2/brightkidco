from playwright.sync_api import sync_playwright
import os

url = 'file:///root/projects/brightkidco/outputs/verification/winback-b/winback-b-24-e2-gf-render.html'
out_dir = '/root/projects/brightkidco/outputs/verification/winback-b'

with sync_playwright() as p:
    browser = p.chromium.launch()
    
    # Screenshot 1: 420px full page
    page1 = browser.new_page(viewport={'width': 420, 'height': 800})
    page1.goto(url)
    page1.wait_for_timeout(2000)
    page1.screenshot(path=os.path.join(out_dir, 'winback-b-24-e2-gf-420-full.png'), full_page=True)
    print('420 full captured')
    page1.close()
    
    # Screenshot 2: 375px mobile full page
    page2 = browser.new_page(viewport={'width': 375, 'height': 812})
    page2.goto(url)
    page2.wait_for_timeout(2000)
    page2.screenshot(path=os.path.join(out_dir, 'winback-b-24-e2-gf-375-mobile.png'), full_page=True)
    print('375 mobile captured')
    page2.close()
    
    # Screenshot 3: 420x568 above-fold
    page3 = browser.new_page(viewport={'width': 420, 'height': 568})
    page3.goto(url)
    page3.wait_for_timeout(2000)
    page3.screenshot(path=os.path.join(out_dir, 'winback-b-24-e2-gf-420x568-above-fold.png'), full_page=False)
    print('420x568 above-fold captured')
    page3.close()
    
    browser.close()
print('All screenshots captured')
