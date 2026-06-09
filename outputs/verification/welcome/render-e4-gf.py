#!/usr/bin/env python3
"""Build render HTML for welcome-01-e4-gf from JSX."""
import os
import re

# Read the JSX file
jsx_path = "/root/projects/brightkidco/outputs/emails/welcome/welcome-01-e4-gf.jsx"
with open(jsx_path, "r") as f:
    jsx_lines = f.readlines()

# Find the start of actual code (skip comment block at top)
code_start = 0
in_comment = False
for i, line in enumerate(jsx_lines):
    stripped = line.strip()
    if stripped.startswith("/*"):
        in_comment = True
        continue
    if in_comment:
        if "*/" in stripped:
            in_comment = False
        continue
    if stripped.startswith("//"):
        continue
    if stripped == "":
        continue
    code_start = i
    break

# Get the code lines
code_lines = jsx_lines[code_start:]
component_code = "".join(code_lines)

# Build the render HTML
render_html = '''<!DOCTYPE html>
<html><head>
<meta charset="utf-8">
<meta name="viewport" content="width=420">
<script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Questrial&family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,700;1,9..144,0,9..144,500&family=Caveat:wght@500&display=swap" rel="stylesheet">
<style>body{margin:0;padding:0;background:#f5f5f5;display:flex;justify-content:center;}</style>
</head><body>
<div id="root"></div>
<script type="text/babel">
// ── Brand Tokens ──

window.BRAND = {
  teal: "#2BAEB4",
  tealDeep: "#1E8A8F",
  green: "#5DD07A",
  greenDeep: "#3BB35E",
  ink: "#1F2D2F",
  soft: "#4A6568",
  muted: "#8A9B9D",
  cream: "#FBF7F1",
  paper: "#FFFFFF",
  gradient: "linear-gradient(135deg, #2BAEB4 0%, #5DD07A 100%)",
  gradientText: {
    background: "linear-gradient(135deg, #2BAEB4 0%, #5DD07A 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    color: "transparent",
  },
};

window.FONT = {
  main: "'Questrial', system-ui, sans-serif",
  display: "'Fraunces', Georgia, serif",
};

// ── Primitives ──
const MW = 420;
const LOGO = "../../raw/product-photos/flat-lay/brightkidco-logo-v2.png";
const B = window.BRAND;
const F = window.FONT;

/* ── Email shell (wraps each email) ── */
const EmailShell = ({ children, preheader, bg }) => (
  <div style={{ width: MW, background: bg, fontFamily: F.main, color: B.ink }}>
    <div style={{ padding: "6px 20px", fontSize: 11, color: B.muted, background: "#F6F2EA", textAlign: "center", fontStyle: "italic" }}>
      Preheader: {preheader}
    </div>
    {children}
  </div>
);

/* ── Header with logo ── */
const Header = ({ bg }) => (
  <div style={{ background: bg, padding: "24px 20px 0", textAlign: "center" }}>
    <img src={LOGO} alt="BrightKidCo" style={{ height: 34 }} />
  </div>
);

/* ── ImgFrame placeholder ── */
const ImgFrame = ({ height, label, sublabel, radius }) => (
  <div style={{ height, borderRadius: radius || 8, background: "#F5F0E8", border: "1.5px dashed #D4CFC6", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "16px 24px", textAlign: "center" }}>
    <div style={{ fontSize: 12, fontWeight: 700, color: B.muted, letterSpacing: 1, textTransform: "uppercase", marginBottom: 4 }}>{label}</div>
    <div style={{ fontSize: 11, color: B.muted }}>{sublabel}</div>
  </div>
);

/* ── OutLine (bottom outline bar) ── */
const OutLine = () => (
  <div style={{ height: 4, background: "linear-gradient(90deg, #2BAEB4, #5DD07A)" }} />
);

Object.assign(window, {
  MW, LOGO, B, F,
  Header, EmailShell, ImgFrame, OutLine,
});


'''

# Add the email-specific components and email code (direct copy, no regex)
render_html += component_code

# Add the ReactDOM render call
render_html += '''

// ── Render ──
ReactDOM.createRoot(document.getElementById('root')).render(
  React.createElement(Email_Welcome_E4_GF)
);
</script></body></html>'''

# Write the render HTML
out_dir = "/root/projects/brightkidco/outputs/verification/welcome"
out_path = os.path.join(out_dir, "welcome-01-e4-gf-render.html")
with open(out_path, "w") as f:
    f.write(render_html)

print(f"Render HTML written to {out_path}")
print(f"File size: {len(render_html)} bytes")
