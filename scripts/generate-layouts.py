#!/usr/bin/env python3
"""Generate 125 unique layout blueprints with structural variety — template-based approach."""
import json, os, re, random
from pathlib import Path
from collections import defaultdict

SECTION_COLORS = {
    "hero": ["#FFFBF0", "#EEE8F6"],
    "letter": ["#FFF6E2", "#FFFFFF"],
    "definition": ["#EAF6F2", "#FFFFFF"],
    "reframe": ["#EAF6F2", "#FFF6E2", "#FFFBF0"],
    "comparison": ["#FFFBF0", "#FFF6E2"],
    "testimonial": ["#FFF6E2", "#FFFBF0"],
    "product": ["#F0EDF8", "#F5F1EA", "#FFFBF0"],
    "guarantee": ["#EAF6F2", "#FFFFFF", "#FFFBF0"],
    "cta": ["#1F2D2F"],
    "story": ["#FFF6E2", "#FFFBF0"],
    "steps": ["#FFFBF0", "#FFF6E2"],
    "code": ["#FAF7F0", "#FFFFFF"],
    "offer": ["#FAF7F0", "#FFFBF0"],
    "stat": ["#FFFBF0", "#EAF6F2"],
    "feel": ["#EAF6F2", "#FFFFFF"],
    "objections": ["#FFFFFF", "#FFF6E2"],
    "expert": ["#F0EDF8", "#FFFFFF"],
}

TEMPLATES = {
    "awareness": [
        {"id":"AW-01","sections":["hero","letter","testimonial","cta"],"images":4,"layout":"single"},
        {"id":"AW-02","sections":["hero","definition","cta"],"images":5,"layout":"hybrid","columns":{"definition":"2-col","hero":"image-top"}},
        {"id":"AW-03","sections":["hero","testimonial","story","definition","cta"],"images":4,"layout":"single"},
        {"id":"AW-04","sections":["hero","letter","steps","cta"],"images":4,"layout":"single"},
        {"id":"AW-05","sections":["hero","testimonial","guarantee","cta"],"images":5,"layout":"single"},
        {"id":"AW-06","sections":["hero","story","testimonial","cta"],"images":5,"layout":"single"},
        {"id":"AW-07","sections":["hero","reframe","testimonial","cta"],"images":4,"layout":"single"},
    ],
    "education": [
        {"id":"ED-01","sections":["hero","definition","comparison","steps","cta"],"images":5,"layout":"single"},
        {"id":"ED-02","sections":["hero","definition","stat","cta"],"images":4,"layout":"hybrid","columns":{"definition":"2-col"}},
        {"id":"ED-03","sections":["hero","definition","steps","cta"],"images":5,"layout":"hybrid","columns":{"steps":"3-grid"}},
        {"id":"ED-04","sections":["hero","definition","objections","cta"],"images":4,"layout":"single"},
        {"id":"ED-05","sections":["hero","reframe","definition","expert","cta"],"images":5,"layout":"single"},
        {"id":"ED-06","sections":["hero","comparison","definition","cta"],"images":5,"layout":"single"},
        {"id":"ED-07","sections":["hero","steps","testimonial","cta"],"images":5,"layout":"single"},
        {"id":"ED-08","sections":["hero","definition","story","cta"],"images":4,"layout":"single"},
    ],
    "consideration": [
        {"id":"CO-01","sections":["hero","product","cta"],"images":5,"layout":"image-heavy"},
        {"id":"CO-02","sections":["hero","story","product","cta"],"images":5,"layout":"single"},
        {"id":"CO-03","sections":["hero","product","testimonial","cta"],"images":6,"layout":"hybrid","columns":{"product":"2-grid"}},
        {"id":"CO-04","sections":["hero","product","feel","testimonial","cta"],"images":5,"layout":"single"},
        {"id":"CO-05","sections":["hero","comparison","product","guarantee","cta"],"images":5,"layout":"single"},
        {"id":"CO-06","sections":["hero","product","guarantee","cta"],"images":5,"layout":"single"},
        {"id":"CO-07","sections":["hero","testimonial","product","cta"],"images":5,"layout":"single"},
    ],
    "conversion": [
        {"id":"CV-01","sections":["hero","product","guarantee","cta"],"images":5,"layout":"single"},
        {"id":"CV-02","sections":["hero","offer","product","cta"],"images":5,"layout":"single"},
        {"id":"CV-03","sections":["hero","cta"],"images":4,"layout":"image-heavy"},
        {"id":"CV-04","sections":["hero","comparison","guarantee","cta"],"images":5,"layout":"single"},
        {"id":"CV-05","sections":["hero","product","stat","cta"],"images":6,"layout":"hybrid","columns":{"product":"3-grid"}},
        {"id":"CV-06","sections":["hero","product","testimonial","cta"],"images":5,"layout":"single"},
        {"id":"CV-07","sections":["hero","guarantee","product","cta"],"images":5,"layout":"single"},
    ],
    "retention": [
        {"id":"RT-01","sections":["hero","steps","cta"],"images":4,"layout":"hybrid","columns":{"steps":"2-grid"}},
        {"id":"RT-02","sections":["hero","testimonial","product","cta"],"images":5,"layout":"single"},
        {"id":"RT-03","sections":["hero","feel","cta"],"images":4,"layout":"hybrid","columns":{"feel":"3-grid"}},
        {"id":"RT-04","sections":["hero","story","testimonial","cta"],"images":5,"layout":"single"},
        {"id":"RT-05","sections":["hero","product","story","cta"],"images":5,"layout":"single"},
    ],
    "reengagement": [
        {"id":"RE-01","sections":["hero","offer","cta"],"images":4,"layout":"single"},
        {"id":"RE-02","sections":["hero","product","cta"],"images":5,"layout":"image-heavy"},
        {"id":"RE-03","sections":["hero","testimonial","offer","cta"],"images":4,"layout":"single"},
        {"id":"RE-04","sections":["hero","cta"],"images":4,"layout":"image-heavy"},
        {"id":"RE-05","sections":["hero","product","guarantee","cta"],"images":5,"layout":"single"},
        {"id":"RE-06","sections":["hero","story","cta"],"images":4,"layout":"single"},
    ],
    "transactional": [
        {"id":"TX-01","sections":["hero","letter","product","cta"],"images":5,"layout":"single"},
        {"id":"TX-02","sections":["hero","letter","cta"],"images":4,"layout":"single"},
        {"id":"TX-03","sections":["hero","product","testimonial","cta"],"images":5,"layout":"single"},
        {"id":"TX-04","sections":["hero","letter","product","story","cta"],"images":5,"layout":"single"},
    ],
}

PURPOSE_RULES = {
    "welcome": {"E1":"awareness","E2":"education","E3":"education","E4":"consideration","E5":"consideration","E6":"conversion","E7":"conversion","E8":"conversion"},
    "cart": {"E1":"conversion","E2":"conversion","E3":"conversion"},
    "browse": {"E1":"awareness","E2":"consideration","E3":"consideration"},
    "checkout": {"E1":"conversion","E2":"conversion"},
    "pp-education": {"default":"education"},
    "pp-extended-ed": {"default":"education"},
    "pp-at-risk": {"default":"education"},
    "faq-library": {"default":"education"},
    "pp-direct-upsell": {"default":"conversion"},
    "pp-extended-upsell": {"default":"conversion"},
    "pp-mid-checkin": {"default":"consideration"},
    "pp-mary-story": {"default":"consideration"},
    "pp-level-detection": {"default":"awareness"},
    "winback-a": {"default":"reengagement"},
    "winback-b": {"default":"reengagement"},
    "replenish-a": {"default":"retention"},
    "replenish-b": {"default":"retention"},
    "replenish-c": {"default":"retention"},
    "review-request": {"default":"retention"},
    "site-abandonment": {"default":"awareness"},
    "sunset": {"default":"reengagement"},
    "transactional": {"default":"transactional"},
}

def extract_position(filename):
    """Extract position from filename like welcome-01-e1-l1 → E1"""
    parts = filename.split('-')
    for p in parts:
        if p.startswith('e') and len(p) >= 2:
            return p[:2].upper()
    return "default"

def classify_purpose(flow, filename):
    """Determine email purpose from flow type and position."""
    pos = extract_position(filename)
    if flow in PURPOSE_RULES:
        rules = PURPOSE_RULES[flow]
        if pos in rules:
            return rules[pos]
        if "default" in rules:
            return rules["default"]
    if flow in PURPOSE_RULES:
        return PURPOSE_RULES[flow].get("default", "awareness")
    return "awareness"

def pick_color(section_type, prev_color, used_recent):
    """Pick a color avoiding adjacent repeats."""
    options = SECTION_COLORS.get(section_type, ["#FFFFFF"])
    valid = [c for c in options if c != prev_color]
    if not valid:
        valid = options
    candidate = [c for c in valid if c not in used_recent[-2:]]
    if not candidate:
        candidate = valid
    return random.choice(candidate)

def generate_layout(copy_file, email_id, flow):
    """Generate a layout blueprint for one email using templates."""
    purpose = classify_purpose(flow, email_id)
    available = TEMPLATES.get(purpose, TEMPLATES["awareness"])
    
    # Pick template (simple rotation)
    tmpl = random.choice(available)
    
    # Build sections from template
    sections = []
    prev_color = "#FFFFFF"
    used_colors = []
    image_slots = tmpl.get("images", 0)
    # Target exactly 4-6 images per email. Use a random target in that range.
    target_images = random.randint(4, 6)
    image_eligible = ["hero","product","testimonial","story","definition","comparison","guarantee","offer","letter","feel","steps","reframe","expert","stat","code","objections"]
    img_idx = 0
    
    for i, stype in enumerate(tmpl["sections"]):
        color = pick_color(stype, prev_color, used_colors)
        used_colors.append(color)
        prev_color = color
        
        has_img = (img_idx < target_images)
        img_count = 1
        if has_img:
            img_idx += 1
            # If we need more images than sections, give 2 images to early sections
            remaining_sections = len(tmpl["sections"]) - i - 1
            images_still_needed = target_images - img_idx
            if images_still_needed > remaining_sections:
                img_count = min(2, images_still_needed - remaining_sections + 1)
                img_idx += img_count - 1
        img_type = "lifestyle" if has_img else None
        
        # Determine column layout
        columns = tmpl.get("columns", {})
        col_layout = columns.get(stype, "single")
        
        sections.append({
            "index": i,
            "type": stype,
            "color": color,
            "column_layout": col_layout,
            "has_image": has_img,
            "image_count": img_count if has_img else 0,
            "image_type": img_type,
        })
    
    # CTA always dark
    for s in sections:
        if s["type"] == "cta":
            s["color"] = "#1F2D2F"
    
    return {
        "email_id": email_id,
        "purpose": purpose,
        "template": tmpl["id"],
        "sections": sections,
    }

# Process all copy files
copy_dir = Path("/root/projects/brightkidco/outputs/copy")
output_dir = Path("/root/projects/brightkidco/outputs/layouts")

# Delete old layouts
import shutil
if output_dir.exists():
    shutil.rmtree(output_dir)

layouts = []
flow_template_used = defaultdict(set)

for md_file in sorted(copy_dir.rglob("*.md")):
    if "analysis" in str(md_file) or "DEEP" in str(md_file) or "SKELETON" in str(md_file):
        continue
    
    flow = md_file.parent.name
    email_id = md_file.stem
    
    # Generate layout
    layout = generate_layout(str(md_file), email_id, flow)
    
    # Ensure template variety within same flow
    retries = 0
    while layout["template"] in flow_template_used[flow] and retries < 10:
        layout = generate_layout(str(md_file), email_id, flow)
        retries += 1
    
    flow_template_used[flow].add(layout["template"])
    layouts.append(layout)
    
    # Save
    os.makedirs(output_dir / flow, exist_ok=True)
    with open(output_dir / flow / f"{email_id}.json", 'w') as f:
        json.dump(layout, f, indent=2)

# Print summary
from collections import Counter
structure_counts = Counter()
template_counts = Counter()
purpose_counts = Counter()

for l in layouts:
    types = "→".join(s["type"] for s in l["sections"])
    structure_counts[types] += 1
    template_counts[l["template"]] += 1
    purpose_counts[l["purpose"]] += 1

print(f"Generated {len(layouts)} layout blueprints")
print(f"\nPurpose distribution:")
for p, n in purpose_counts.most_common():
    print(f"  {p:20s}: {n} emails")
print(f"\nTemplate usage (top 15):")
for t, n in template_counts.most_common(15):
    print(f"  {t}: {n}x")
print(f"\nMost common structures:")
for s, n in structure_counts.most_common(5):
    print(f"  {n}x: {s}")
