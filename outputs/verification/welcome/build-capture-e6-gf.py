#!/usr/bin/env python3
"""Build render HTML and capture screenshots for welcome-01-e6-gf."""
import asyncio
import os

os.chdir("/root/projects/brightkidco/outputs/verification/welcome")

# Read primitives
with open("/root/projects/brightkidco/raw/BKCO - EMAIL MARKETING/welcome-flow/primitives.jsx") as f:
    prims = f.read()

# Read product showcase components
with open("/root/projects/brightkidco/raw/BKCO - EMAIL MARKETING/welcome-flow/product-showcase.jsx") as f:
    products = f.read()

# Read email
with open("/root/projects/brightkidco/outputs/emails/welcome/welcome-01-e6-gf.jsx") as f:
    email = f.read()

# Brand tokens
tokens = """window.BRAND = {
  teal: "#2BAEB4", tealDeep: "#1E8A8F", green: "#5DD07A", greenDeep: "#3BB35E",
  ink: "#1F2D2F", soft: "#4A6568", muted: "#8A9B9D", cream: "#FBF7F1", paper: "#FFFFFF",
  gradient: "linear-gradient(135deg, #2BAEB4 0%, #5DD07A 100%)",
  gradientText: {
    background: "linear-gradient(135deg, #2BAEB4 0%, #5DD07A 100%)",
    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
    backgroundClip: "text", color: "transparent",
  },
};
window.FONT = { main: "'Questrial', system-ui, sans-serif", display: "'Fraunces', Georgia, serif" };
window.FLOW1_SHARED = {
  signoff: { line1: "With you,", name: "Lena Bauer", ps: "P.S. If you ever want to reply and tell me about your child \\u2014 I read every one. Really." },
  out: "You can pause this series anytime. Come back when you're ready.",
  footer: { tagline: "Calm progress, one day at a time.", links: ["Our Method", "Shop the Pants", "Parent Stories"], address: "BrightKidCo Ltd \\u00b7 Berlin, Germany \\u00b7 hello@brightkidco.com" },
};
"""

render = f'''<!DOCTYPE html>
<html><head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Welcome E6 GF — Render</title>
<link href="https://fonts.googleapis.com/css2?family=Questrial&family=Fraunces:ital,wght@0,400;0,700;1,400;1,500&family=Caveat:wght@400;500;700&display=swap" rel="stylesheet">
<script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<style>
* {{ margin: 0; padding: 0; box-sizing: border-box; }}
body {{ background: #FAF9F7; display: flex; justify-content: center; }}
</style>
</head><body>
<div id="root"></div>
<script type="text/babel">
{tokens}
{prims}
{products}
{email}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(Email_Welcome_E6_GF));
</script>
</body></html>'''

with open("welcome-01-e6-gf-render.html", "w") as f:
    f.write(render)
print(f"Built HTML: {len(render)} bytes")

# Now capture screenshots
async def capture():
    from playwright.async_api import async_playwright
    
    HTML_PATH = "/root/projects/brightkidco/outputs/verification/welcome/welcome-01-e6-gf-render.html"
    SCREENSHOT_DIR = "/root/projects/brightkidco/outputs/verification/welcome"
    
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        
        # 1. Full-page at 420px width
        page = await browser.new_page(viewport={"width": 420, "height": 800})
        errors = []
        page.on("console", lambda msg: errors.append(msg.text) if msg.type == "error" else None)
        await page.goto(f"file://{HTML_PATH}", wait_until="networkidle")
        await page.wait_for_timeout(3000)
        
        print(f"Console errors: {len(errors)}")
        for e in errors[:5]:
            print(f"  ERROR: {e}")
        
        # Full-page screenshot at 420px
        await page.screenshot(
            path=f"{SCREENSHOT_DIR}/welcome-01-e6-gf-420-full.png",
            full_page=True
        )
        print("Saved: welcome-01-e6-gf-420-full.png")
        
        # 2. Above-fold at 420x568
        await page.set_viewport_size({"width": 420, "height": 568})
        await page.wait_for_timeout(500)
        await page.screenshot(
            path=f"{SCREENSHOT_DIR}/welcome-01-e6-gf-420x568-above-fold.png",
            full_page=False
        )
        print("Saved: welcome-01-e6-gf-420x568-above-fold.png")
        
        # 3. Mobile at 375px
        await page.set_viewport_size({"width": 375, "height": 800})
        await page.wait_for_timeout(500)
        await page.screenshot(
            path=f"{SCREENSHOT_DIR}/welcome-01-e6-gf-375-mobile.png",
            full_page=True
        )
        print("Saved: welcome-01-e6-gf-375-mobile.png")
        
        await browser.close()
        print("Done!")

asyncio.run(capture())
