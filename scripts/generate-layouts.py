#!/usr/bin/env python3
"""Generate layout blueprints for all 125 emails based on copy file sections + color sequences."""
import re, json, os
from pathlib import Path
from collections import defaultdict

# Section type → background color mapping (from actual emails)
SECTION_COLORS = {
    "hero": ["#FFFBF0", "#EEE8F6"],
    "letter": ["#FFF6E2"],
    "definition": ["#EAF6F2"],
    "reframe": ["#EAF6F2"],
    "comparison": ["#FFFBF0"],
    "expert": ["#F0EDF8"],
    "product": ["#F0EDF8", "#F5F1EA"],
    "feel": ["#EAF6F2"],
    "testimonial": ["#FFF6E2"],
    "objections": ["#FFFFFF"],
    "guarantee": ["#EAF6F2"],
    "cta": ["#1F2D2F"],
    "story": ["#FFF6E2"],
    "steps": ["#FFFBF0"],
    "code": ["#FAF7F0"],
    "stat": ["#FFFBF0"],
}

# CTA is always dark
CTA_COLOR = "#1F2D2F"

def classify_section(name, content):
    """Classify a section based on its name and content hints."""
    n = name.lower()
    c = content.lower() if content else ""
    
    if any(k in n for k in ["hook", "hero", "headline", "opener"]):
        return "hero"
    if any(k in n for k in ["validation", "absolution", "guilt", "empathy", "recognition"]):
        return "reframe"
    if any(k in n for k in ["mechanism", "science", "education", "definition"]):
        return "definition"
    if any(k in n for k in ["social proof", "testimonial", "review", "story", "parent"]):
        if "story" in n or "narrative" in n:
            return "story"
        return "testimonial"
    if any(k in n for k in ["product", "showcase", "reveal", "feature"]):
        return "product"
    if any(k in n for k in ["guarantee", "trust", "risk", "refund", "60-day"]):
        return "guarantee"
    if any(k in n for k in ["cta", "button", "close", "action"]):
        return "cta"
    if any(k in n for k in ["comparison", "method", "failed", "alternative"]):
        return "comparison"
    if any(k in n for k in ["objection", "faq", "question", "wondering"]):
        return "objections"
    if any(k in n for k in ["stat", "number", "data", "proof"]):
        return "stat"
    if any(k in n for k in ["step", "path", "how it"]):
        return "steps"
    if any(k in n for k in ["code", "discount", "offer", "promo"]):
        return "code"
    if any(k in n for k in ["feel", "benefit", "checklist"]):
        return "feel"
    if any(k in n for k in ["expert", "quote", "endorsement"]):
        return "expert"
    
    # Default based on content length and keywords
    if len(c) > 500 or "research" in c or "study" in c:
        return "definition"
    if len(c) > 200 and ("said" in c or "parent" in c or "review" in c):
        return "testimonial"
    
    return "letter"

def pick_color(section_type, prev_color, used_in_email):
    """Pick a background color ensuring no adjacent repeats. Randomize for variety."""
    import random
    options = SECTION_COLORS.get(section_type, ["#FFFFFF"])
    
    # If only one option and it matches previous, use a fallback
    if len(options) == 1 and options[0] == prev_color:
        fallbacks = {
            "definition": ["#FFFFFF", "#FFFBF0"],
            "guarantee": ["#FFFFFF", "#FFFBF0"],
            "testimonial": ["#FFFBF0"],
            "letter": ["#FFFFFF"],
            "reframe": ["#FFF6E2", "#FFFBF0"],
            "comparison": ["#FFF6E2"],
            "story": ["#FFFBF0"],
        }
        options = fallbacks.get(section_type, ["#FFFFFF"])
    
    # Filter out previous color
    valid = [c for c in options if c != prev_color]
    if not valid:
        valid = options
    
    # Filter out colors used in recent positions
    recent = used_in_email[-2:] if len(used_in_email) >= 2 else used_in_email
    candidate = [c for c in valid if c not in recent]
    if not candidate:
        candidate = valid
    
    return random.choice(candidate)

def generate_layout(copy_file, email_id, flow_type):
    """Generate a layout blueprint for one email."""
    with open(copy_file, 'r') as f:
        content = f.read()
    
    # Extract sections from ## EMAIL BODY within # PART 1 (stop at # PART 2)
    # First try: find ## EMAIL BODY in content
    body_text = None
    
    # Try ## EMAIL BODY directly
    body_match = re.search(r'## (?:EMAIL BODY|Email Body)\s*\n(?:---\s*\n)?(.*?)(?=\n(?:## (?:Lena|Footer|SOURCE|CREATIVE|BIG IDEA)|\n# PART 2|\n---\s*\n##)|\Z)', content, re.DOTALL | re.IGNORECASE)
    if body_match:
        body_text = body_match.group(1)
    
    # Try within # PART 1 (some files use this format)
    if not body_text:
        part1_match = re.search(r'# PART 1.*?\n(.*?)(?=\n# PART 2|\Z)', content, re.DOTALL | re.IGNORECASE)
        if part1_match:
            part1_text = part1_match.group(1)
            # Find ## EMAIL BODY within PART 1
            body_match = re.search(r'## (?:EMAIL BODY|Email Body)\s*\n(?:---\s*\n)?(.*?)(?=\n(?:## (?:Lena|Footer|SOURCE|CREATIVE|BIG IDEA)|\n---\s*\n##)|\Z)', part1_text, re.DOTALL | re.IGNORECASE)
            if body_match:
                body_text = body_match.group(1)
            else:
                # No ## EMAIL BODY - extract everything after subject/preview lines
                body_match = re.search(r'\*\*Subject Line:\*\*.*?\n\s*\n(.*)', part1_text, re.DOTALL)
                if body_match:
                    body_text = body_match.group(1).strip()
                else:
                    # Take everything after first --- separator
                    body_match = re.search(r'---\s*\n(.*)', part1_text, re.DOTALL)
                    if body_match:
                        body_text = body_match.group(1).strip()
    
    # Fallback: take everything between ## EMAIL BODY and ## Footer
    if not body_text:
        body_match = re.search(r'## (?:EMAIL BODY|Email Body)\s*\n(?:---\s*\n)?(.*?)(?=\n## Footer|\Z)', content, re.DOTALL | re.IGNORECASE)
        if body_match:
            body_text = body_match.group(1)
    
    sections_data = []
    
    if body_text:
        # Try splitting by ## or ### headers first
        section_pattern = r'#{2,3} (.+?)\n(.*?)(?=#{2,3} |\Z)'
        sections = re.findall(section_pattern, body_text, re.DOTALL | re.IGNORECASE)
        
        # If no headers found, try splitting by bold markers (**TITLE**)
        if not sections:
            bold_pattern = r'\*\*([A-Z][A-Z\s\-/,&]+)\*\*\s*\n(.*?)(?=\*\*[A-Z][A-Z\s\-/,&]+\*\*|\Z)'
            sections = re.findall(bold_pattern, body_text, re.DOTALL)
        
        # If still no sections, split by double newlines and treat each block as a section
        if not sections:
            blocks = body_text.split('\n\n')
            blocks = [b.strip() for b in blocks if len(b.strip()) > 50]
            sections = [(f"Section {i+1}", b) for i, b in enumerate(blocks)]
        
        for name, section_content in sections:
            name = name.strip()
            # Remove "Section N:" prefix
            name = re.sub(r'^Section \d+:\s*', '', name)
            # Skip non-email sections and sign-off/footer
            skip = ['The Big Idea', 'Layout', 'Color', 'Typography', 'Decorative', 'Hidden', 'Motion', 'Level Calibration', 'Creative', 'Visual', 'Design', 'Overview', 'Strategic', 'R1-R6', 'Cross-Level', 'Proof Point', 'How Each', 'How This', 'Footer', 'Lena Sign', 'Sign-Off', 'SOURCE CITATION', 'Source Citation', 'METADATA', 'SUBJECT', 'PREVIEW', 'BIG IDEA', 'CONTRAPTION', 'FURNITURE', 'EASTER EGG', 'MOTION', 'LEVEL CALIBRATION']
            if any(s.lower() in name.lower() for s in skip):
                continue
            
            section_type = classify_section(name, section_content)
            sections_data.append({
                "name": name[:60],
                "type": section_type,
                "content_preview": section_content[:200].strip(),
            })
    
    # If no sections found, create a minimal layout
    if not sections_data:
        sections_data = [
            {"name": "Email Body", "type": "letter", "content_preview": ""},
            {"name": "CTA", "type": "cta", "content_preview": ""},
        ]
    
    # Ensure CTA is last if present
    has_cta = any(s["type"] == "cta" for s in sections_data)
    if not has_cta:
        sections_data.append({"name": "CTA", "type": "cta", "content_preview": ""})
    
    # Move CTA to end (remove duplicates first)
    cta_indices = [i for i, s in enumerate(sections_data) if s["type"] == "cta"]
    if len(cta_indices) > 1:
        for idx in sorted(cta_indices[:-1], reverse=True):
            sections_data.pop(idx)
    if not cta_indices:
        sections_data.append({"name": "CTA", "type": "cta", "content_preview": ""})
    
    # Move CTA to final position
    cta_idx = [i for i, s in enumerate(sections_data) if s["type"] == "cta"]
    if cta_idx and cta_idx[0] != len(sections_data) - 1:
        cta_section = sections_data.pop(cta_idx[0])
        sections_data.append(cta_section)
    
    # Deduplicate: remove duplicate section types (keep first), CTA always stays
    seen = set()
    deduped = []
    for s in sections_data:
        if s["type"] == "cta" or s["type"] not in seen:
            deduped.append(s)
            seen.add(s["type"])
    
    # Ensure CTA is at end
    cta_in_deduped = [i for i, s in enumerate(deduped) if s["type"] == "cta"]
    if cta_in_deduped and cta_in_deduped[-1] != len(deduped) - 1:
        cta_section = deduped.pop(cta_in_deduped[-1])
        deduped.append(cta_section)
    
    sections_data = deduped
    
    # ADD DEFAULT SECTIONS if too few (randomized order)
    import random
    default_sections = [
        {"name": "Social Proof", "type": "testimonial", "content_preview": "Parent testimonials"},
        {"name": "Product Showcase", "type": "product", "content_preview": "Product features"},
        {"name": "Guarantee", "type": "guarantee", "content_preview": "60-day guarantee"},
        {"name": "The Science", "type": "definition", "content_preview": "Mechanism explanation"},
        {"name": "Parent Story", "type": "story", "content_preview": "Real parent story"},
    ]
    random.shuffle(default_sections)
    
    existing_types = {s["type"] for s in sections_data}
    
    for default in default_sections:
        if len(sections_data) >= 5:
            break
        if default["type"] not in existing_types:
            insert_pos = len(sections_data) - 1
            sections_data.insert(insert_pos, default)
            existing_types.add(default["type"])
    
    # CAP at 8 sections: keep first 7 + CTA
    if len(sections_data) > 8:
        cta_section = sections_data[-1]
        sections_data = sections_data[:7]
        sections_data.append(cta_section)
    
    # Generate color sequence
    color_sequence = []
    prev_color = None
    used_colors = []
    
    for section in sections_data:
        color = pick_color(section["type"], prev_color, used_colors)
        color_sequence.append(color)
        prev_color = color
        used_colors.append(color)
    
    # CTA is always dark
    if sections_data[-1]["type"] == "cta":
        color_sequence[-1] = CTA_COLOR
    
    # Make sure all CTAs are dark
    for i, s in enumerate(sections_data):
        if s["type"] == "cta":
            color_sequence[i] = CTA_COLOR
    
    # Build layout blueprint
    layout = {
        "email_id": email_id,
        "flow_type": flow_type,
        "sections": [],
    }
    
    for i, section in enumerate(sections_data):
        layout["sections"].append({
            "index": i,
            "name": section["name"],
            "type": section["type"],
            "color": color_sequence[i],
            "content_preview": section["content_preview"],
        })
    
    return layout

# Process all copy files
copy_dir = Path("/root/projects/brightkidco/outputs/copy")
output_dir = Path("/root/projects/brightkidco/outputs/layouts")

layouts = []
layout_map = defaultdict(list)

for md_file in copy_dir.rglob("*.md"):
    if "analysis" in str(md_file) or "DEEP" in str(md_file) or "SKELETON" in str(md_file):
        continue
    
    flow_type = md_file.parent.name
    email_id = md_file.stem
    
    layout = generate_layout(str(md_file), email_id, flow_type)
    layouts.append(layout)
    layout_map[flow_type].append(layout)
    
    # Save individual layout
    os.makedirs(output_dir / flow_type, exist_ok=True)
    with open(output_dir / flow_type / f"{email_id}.json", 'w') as f:
        json.dump(layout, f, indent=2)

print(f"Generated {len(layouts)} layout blueprints")

# Print sample
print(f"\nSample layouts:")
for layout in layouts[:3]:
    print(f"\n{layout['email_id']} ({layout['flow_type']}):")
    for s in layout["sections"]:
        print(f"  [{s['type']:15s}] {s['color']} — {s['name'][:40]}")
