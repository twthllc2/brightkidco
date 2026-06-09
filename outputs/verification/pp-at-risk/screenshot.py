import os
from playwright.sync_api import sync_playwright

html_path = "/root/projects/brightkidco/outputs/verification/pp-at-risk/atrisk-23-e1-render.html"
out_dir = "/root/projects/brightkidco/outputs/verification/pp-at-risk"

with sync_playwright() as p:
    browser = p.chromium.launch()
    
    # 1. Full page at 420px width
    page = browser.new_page(viewport={"width": 420, "height": 800})
    page.goto("file://" + html_path)
    page.wait_for_load_state("networkidle")
    page.screenshot(
        path=os.path.join(out_dir, "atrisk-23-e1-420-full.png"),
        full_page=True
    )
    print("Screenshot 1: Full page (420px) saved")
    
    # 2. Above the fold at 420x568
    page2 = browser.new_page(viewport={"width": 420, "height": 568})
    page2.goto("file://" + html_path)
    page2.wait_for_load_state("networkidle")
    page2.screenshot(
        path=os.path.join(out_dir, "atrisk-23-e1-420x568-above-fold.png"),
        full_page=False
    )
    print("Screenshot 2: Above the fold (420x568) saved")
    
    # 3. Mobile at 375px
    page3 = browser.new_page(viewport={"width": 375, "height": 812})
    page3.goto("file://" + html_path)
    page3.wait_for_load_state("networkidle")
    page3.screenshot(
        path=os.path.join(out_dir, "atrisk-23-e1-375-mobile.png"),
        full_page=True
    )
    print("Screenshot 3: Mobile (375px) saved")
    
    browser.close()
    print("All screenshots complete")
