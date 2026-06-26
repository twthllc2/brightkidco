#!/usr/bin/env python3
"""Map 950+ components to section types from actual email design system."""
import re, json

# Section types from real emails + their keywords
SECTION_MAP = {
    "hero": ["hero", "opener", "headline", "hook", "masthead", "gradient hero"],
    "letter": ["letter", "paragraph", "text block", "body text", "story letter"],
    "definition": ["definition", "mechanism", "science", "did you know", "info", "tip card"],
    "reframe": ["reframe", "insight", "mint block", "creed", "validation"],
    "comparison": ["comparison", "method card", "vs", "before/after", "checklist"],
    "expert": ["expert", "quote card", "pull quote", "endorsement"],
    "product": ["product", "showcase", "feature grid", "layer", "bundle", "detail"],
    "feel": ["feel", "benefit", "checklist", "feature", "what it feels"],
    "testimonial": ["testimonial", "review", "social proof", "parent story", "rating"],
    "objections": ["objection", "faq", "question", "answer", "wondering"],
    "guarantee": ["guarantee", "seal", "trust", "badge", "certification", "promise"],
    "cta": ["cta", "button", "close", "action", "conversion"],
    "story": ["story", "narrative", "chapter", "timeline", "journey", "diary"],
    "steps": ["step", "path", "method", "journey", "how it works", "process"],
    "code": ["code", "discount", "promo", "offer", "coupon"],
    "stat": ["stat", "number", "counter", "data", "proof point"],
}

# Load component catalog
with open('/root/projects/brightkidco/outputs/email-assets/component-index-v2.md') as f:
    content = f.read()

# Extract components
components_by_section = {s: [] for s in SECTION_MAP}
all_components = []

for line in content.split('\n'):
    match = re.match(r'- `([^`]+)`\s*\[([^\]]+)\]\s*—\s*(.+?)(?:\s*\*\(L(\d+)\)\*)?\s*$', line)
    if not match:
        continue
    comp_id = match.group(1).strip()
    source = match.group(2).strip()
    name = match.group(3).strip()
    line_num = match.group(4)
    
    if 'RETIRED' in line:
        continue
    
    # Find matching section type
    name_lower = name.lower()
    matched = False
    for section_type, keywords in SECTION_MAP.items():
        if any(kw.lower() in name_lower for kw in keywords):
            components_by_section[section_type].append({
                "id": comp_id,
                "name": name,
                "source": source,
                "line": int(line_num) if line_num else None,
            })
            matched = True
            break
    
    if not matched:
        # Default to letter/body
        components_by_section["letter"].append({
            "id": comp_id,
            "name": name,
            "source": source,
            "line": int(line_num) if line_num else None,
        })

# Print summary
print("Section type → component count:")
for section_type in SECTION_MAP:
    count = len(components_by_section[section_type])
    print(f"  {section_type:15s}: {count:3d} components")

# Save to JSON
output = {
    "section_types": SECTION_MAP,
    "components_by_section": components_by_section,
    "total_components": sum(len(v) for v in components_by_section.values()),
}

with open('/root/projects/brightkidco/outputs/email-assets/section-components.json', 'w') as f:
    json.dump(output, f, indent=2)

print(f"\nSaved to section-components.json")
print(f"Total: {output['total_components']} components mapped")
