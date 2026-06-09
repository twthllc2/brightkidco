#!/usr/bin/env python3
"""Code-level checks for mary-14-e1 verification."""
import re, json

jsx = open("/root/projects/brightkidco/outputs/emails/pp-mary-story/mary-14-e1.jsx").read()
prim = open("/root/projects/brightkidco/raw/BKCO - EMAIL MARKETING/welcome-flow/primitives.jsx").read()

r = {}

# Colors
for name, color in [("teal","#2BAEB4"),("green","#5DD07A"),("ink","#1F2D2F"),("cream","#FBF7F1"),("yellow","#FFD866")]:
    r[f"color_{name}"] = jsx.upper().count(color.upper())

# Fonts
r["fonts"] = {"Questrial": "Questrial" in prim, "Fraunces": "Fraunces" in jsx, "Caveat": "Caveat" in jsx}

# Width
r["width_420"] = "MW = 420" in prim

# Copy accuracy key phrases
r["copy_checks"] = {
    "opener_hook": "Whether your child is 3 or 10" in jsx,
    "mary_intro": "I'm Mary S. I'm a mom" in jsx,
    "he_couldnt": "He couldn't." in jsx,
    "nicholson": "Nicholson et al. 2019" in jsx,
    "interoception": "interoception" in jsx,
    "triple_whether": "Whether your journey takes 2 weeks or 6 months" in jsx,
    "60day_guarantee": "60-day guarantee" in jsx,
    "reply_invitation": "hit reply" in jsx,
    "signoff_mary": "Mary S., Founder" in jsx,
    "age_range": "3 or 10" in jsx,
    "verbal_nonverbal": "verbal or non-verbal" in jsx,
    "timeline_r5": ("2 weeks" in jsx and "8 weeks" in jsx and "3-6 months" in jsx),
    "lowbar_r6": "one moment of awareness" in jsx,
}

# Sections
r["total_sections"] = len(re.findall(r"SECTION \d+:", jsx))

# Flow signature
r["flow_sig"] = all(x in jsx for x in ["Mary S.", "my own child", "bathroom floor", "Real parent"])

# Gradients
r["gradients"] = jsx.count("linear-gradient")

# Product image
r["product_image"] = "training-pant-fox-red-white.jpg" in jsx

# Forbidden
forbidden = ["Easy", "Simple", "Quickly", "Guaranteed", "Miracle", "Cure", "Fully trained", "Just like other kids"]
r["forbidden"] = [w for w in forbidden if re.search(r"\b" + w + r"\b", jsx, re.I)]

# Level calibration
r["calibration"] = {
    "R1_symptom": "3 or 10" in jsx and "verbal or non-verbal" in jsx,
    "R2_anchors": "Sitting on the toilet" in jsx,
    "R3_age_ranges": "3 or 10" in jsx,
    "R4_verbal": "verbal or non-verbal" in jsx,
    "R5_timeline": "2 weeks" in jsx and "3-6 months" in jsx,
    "R6_lowbar": "one moment of awareness" in jsx,
}

# CSS values
r["css"] = {
    "border_radius_16": "borderRadius: 16" in jsx,
    "border_radius_999": "borderRadius: 999" in jsx,
    "shadow_6px": 'boxShadow: "6px 6px 0' in jsx,
    "font_size_28_h1": "fontSize: 28" in jsx,
    "line_height_1_7": "lineHeight: 1.7" in jsx,
}

# Image paths
r["image_paths"] = {
    "product": "training-pant-fox-red-white.jpg" in jsx,
    "logo": "LOGO" in jsx or "brightkidco-logo-v2.png" in jsx,
}

# Dark mode - email HTML does not support dark mode
r["dark_mode"] = "N/A - email HTML does not support dark mode"

print(json.dumps(r, indent=2))
