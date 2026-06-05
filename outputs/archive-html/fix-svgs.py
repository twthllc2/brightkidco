#!/usr/bin/env python3
"""
Replace all broken SVG image references with clean text/CSS alternatives.
Level detection emails (no SVGs) look great. This makes all emails match that quality.
"""
import os
import re
import glob

HTML_DIR = "."
FIXES = []

def fix_file(filepath):
    with open(filepath, "r") as f:
        content = f.read()
    
    original = content
    
    # === FIX 1: Replace logo SVGs with styled text ===
    # Pattern: <img src="...assets/brightkidco-logo.svg" ... />
    content = re.sub(
        r'<img\s+[^>]*src="[^"]*brightkidco-logo[^"]*\.svg[^"]*"[^>]*/?>',
        '<span style="font-family:\'Questrial\',system-ui,sans-serif;font-size:18px;font-weight:700;color:#1F2D2F;letter-spacing:-0.3px;">Bright<span style="color:#2BAEB4;">KidCo</span></span>',
        content
    )
    
    # Pattern: <img src="...logo-email-header.svg" ... />
    content = re.sub(
        r'<img\s+[^>]*src="[^"]*logo-email-header[^"]*\.svg[^"]*"[^>]*/?>',
        '<span style="font-family:\'Questrial\',system-ui,sans-serif;font-size:18px;font-weight:700;color:#1F2D2F;letter-spacing:-0.3px;">Bright<span style="color:#2BAEB4;">KidCo</span></span>',
        content
    )
    
    # === FIX 2: Replace hero image SVGs with styled div ===
    hero_svgs = [
        'hero-family-01', 'hero-family-02', 'hero-child-play-01', 'hero-child-play-02',
        'hero-hands-01', 'hero-hands-02', 'hero-parent-child-01', 'hero-parent-child-02',
        'hero-product-01', 'hero-product-02'
    ]
    for hero in hero_svgs:
        # Match <img ... src="...hero/hero-xxx.svg" ... /> and surrounding container
        pattern = r'<img\s+[^>]*src="[^"]*' + hero + r'[^"]*\.svg[^"]*"[^>]*/?>'
        replacement = '<div style="width:100%;height:180px;background:linear-gradient(135deg,#EAF6F2 0%,#FFFBF0 100%);border-radius:16px;border:2px solid #1F2D2F;box-shadow:4px 4px 0 #1F2D2F;display:flex;align-items:center;justify-content:center;"><span style="font-family:\'Questrial\';font-size:11px;color:#8A9B9D;letter-spacing:1px;text-transform:uppercase;">BrightKidCo</span></div>'
        content = re.sub(pattern, replacement, content)
    
    # === FIX 3: Replace social icon SVGs with text ===
    content = re.sub(
        r'<img\s+[^>]*src="[^"]*icon-instagram[^"]*\.svg[^"]*"[^>]*/?>',
        '<span style="font-size:13px;color:#1F2D2F;font-weight:500;">Instagram</span>',
        content
    )
    content = re.sub(
        r'<img\s+[^>]*src="[^"]*icon-facebook[^"]*\.svg[^"]*"[^>]*/?>',
        '<span style="font-size:13px;color:#1F2D2F;font-weight:500;">Facebook</span>',
        content
    )
    content = re.sub(
        r'<img\s+[^>]*src="[^"]*icon-tiktok[^"]*\.svg[^"]*"[^>]*/?>',
        '<span style="font-size:13px;color:#1F2D2F;font-weight:500;">TikTok</span>',
        content
    )
    
    # === FIX 4: Replace badge SVGs with styled text ===
    content = re.sub(
        r'<img\s+[^>]*src="[^"]*badge-4\.9-stars[^"]*\.svg[^"]*"[^>]*/?>',
        '<span style="display:inline-block;background:#1F2D2F;color:#FFD866;padding:6px 14px;border-radius:8px;font-size:12px;font-weight:700;font-family:\'Questrial\';">&#9733; 4.9 on Trustpilot</span>',
        content
    )
    content = re.sub(
        r'<img\s+[^>]*src="[^"]*badge-16511-reviews[^"]*\.svg[^"]*"[^>]*/?>',
        '<span style="display:inline-block;background:#1F2D2F;color:#FFF;padding:6px 14px;border-radius:8px;font-size:12px;font-weight:700;font-family:\'Questrial\';">16,511 reviews</span>',
        content
    )
    content = re.sub(
        r'<img\s+[^>]*src="[^"]*badge-100k-parents[^"]*\.svg[^"]*"[^>]*/?>',
        '<span style="display:inline-block;background:#1F2D2F;color:#FFF;padding:6px 14px;border-radius:8px;font-size:12px;font-weight:700;font-family:\'Questrial\';">100K+ parents trust us</span>',
        content
    )
    
    # === FIX 5: Replace avatar SVG with styled circle ===
    content = re.sub(
        r'<img\s+[^>]*src="[^"]*lena-avatar[^"]*\.svg[^"]*"[^>]*/?>',
        '<div style="width:53px;height:53px;border-radius:50%;background:linear-gradient(135deg,#FFD866,#2BAEB4);display:inline-flex;align-items:center;justify-content:center;border:2px solid #1F2D2F;"><span style="font-family:\'Caveat\';font-size:20px;color:#FFF;font-weight:700;">L</span></div>',
        content
    )
    
    if content != original:
        with open(filepath, "w") as f:
            f.write(content)
        return True
    return False

# Process all files
files = glob.glob("**/*.html", recursive=True)
fixed = 0
for f in files:
    if fix_file(f):
        fixed += 1

print(f"Files fixed: {fixed} / {len(files)}")

# Verify no SVG refs remain
remaining = 0
for f in files:
    with open(f) as fh:
        if '.svg' in fh.read():
            remaining += 1
            print(f"  Still has SVG: {f}")

print(f"Files still with SVG refs: {remaining}")
