#!/usr/bin/env python3
"""Build render HTML for welcome-01-e6-l3.jsx"""
import os

os.chdir("/root/projects/brightkidco/outputs/verification/welcome")

# Read primitives
with open("/root/projects/brightkidco/raw/BKCO - EMAIL MARKETING/welcome-flow/primitives.jsx") as f:
    prims = f.read()

# Read product showcase components
with open("/root/projects/brightkidco/raw/BKCO - EMAIL MARKETING/welcome-flow/product-showcase.jsx") as f:
    products = f.read()

# Read email
with open("/root/projects/brightkidco/outputs/emails/welcome/welcome-01-e6-l3.jsx") as f:
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
  signoff: { line1: "With you,", name: "Lena Bauer", ps: "P.S. If you ever want to reply and tell me about your child \\\\u2014 I read every one. Really." },
  out: "You can pause this series anytime. Come back when you're ready.",
  footer: { tagline: "Calm progress, one day at a time.", links: ["Our Method", "Shop the Pants", "Parent Stories"], address: "BrightKidCo Ltd \\\\u00b7 Berlin, Germany \\\\u00b7 hello@brightkidco.com" },
};
"""

render = f'''<!DOCTYPE html>
<html><head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Welcome E6 L3 — Render</title>
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
root.render(React.createElement(Email_welcome_01_e6_l3));
</script>
</body></html>'''

with open("welcome-01-e6-l3-render.html", "w") as f:
    f.write(render)
print(f"Written {len(render)} bytes")
