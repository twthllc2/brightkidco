#!/usr/bin/env python3
"""
Generate proper <title> tags from H1 content for emails with generic titles.
"""
import os
import re
import glob

HTML_DIR = "."

files = glob.glob("**/*.html", recursive=True)
fixed = 0

for f in files:
    with open(f, "r") as fh:
        content = fh.read()
    
    # Check if title is generic "BrightKidCo — Email 0X"
    title_match = re.search(r"<title>([^<]*)</title>", content)
    if not title_match:
        continue
    
    title = title_match.group(1)
    if not re.match(r"BrightKidCo — Email \d+$", title):
        continue
    
    # Extract H1 content
    h1_match = re.findall(r"<h1[^>]*>(.*?)</h1>", content, re.DOTALL)
    h1_text = ""
    for h in h1_match:
        clean = re.sub(r"<[^>]*>", "", h).strip()
        if clean and len(clean) > 5:
            h1_text = clean
            break
    
    if not h1_text:
        continue
    
    # Clean H1 for title (remove newlines, limit length)
    h1_text = re.sub(r"\s+", " ", h1_text).strip()
    if len(h1_text) > 80:
        h1_text = h1_text[:77] + "..."
    
    new_title = f"BrightKidCo — {h1_text}"
    
    if new_title != title:
        content = content.replace(f"<title>{title}</title>", f"<title>{new_title}</title>")
        with open(f, "w") as fh:
            fh.write(content)
        fixed += 1
        rel = os.path.relpath(f, HTML_DIR)
        print(f"Fixed: {rel}: {new_title}")

print(f"\nTotal titles fixed: {fixed}")
