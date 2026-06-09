#!/usr/bin/env python3
"""Extract all text from rendered email for copy verification."""
from playwright.sync_api import sync_playwright

def main():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page(viewport={"width": 420, "height": 800})
        page.goto("file:///root/projects/brightkidco/outputs/verification/welcome/welcome-01-e8-l2-render.html")
        page.wait_for_timeout(3000)
        text = page.evaluate("document.body.innerText")
        print(text)
        browser.close()

if __name__ == "__main__":
    main()
