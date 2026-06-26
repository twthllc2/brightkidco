#!/usr/bin/env python3
"""Component variance tracker — enforces component reuse limits across all emails."""
import json, os, random
from collections import defaultdict, Counter

PICKS_DIR = "/root/projects/brightkidco/outputs/picks"
CATALOG = "/root/projects/brightkidco/outputs/email-assets/section-components.json"
LAYOUTS_DIR = "/root/projects/brightkidco/outputs/layouts"
PRODUCT_PHOTOS = "/root/projects/brightkidco/outputs/email-assets/product-photos"

# Max times a component can be used across ALL emails
MAX_REUSE = 10  # 10/125 = 8% max

def load_all_picks():
    """Load all existing picks, tracking component and image usage."""
    picks = {}
    comp_usage = Counter()
    img_usage = Counter()
    
    for f in os.listdir(PICKS_DIR):
        if not f.endswith('.json'):
            continue
        with open(os.path.join(PICKS_DIR, f)) as fh:
            data = json.load(fh)
        
        sections = _extract_sections(data)
        if not sections:
            continue
        
        picks[f] = sections
        for s in sections:
            cid = s.get("component_id", "")
            if cid:
                comp_usage[cid] += 1
            img = s.get("image_file", "")
            if isinstance(img, str) and img:
                img_usage[img] += 1
            elif isinstance(img, list):
                for i in img:
                    if i:
                        img_usage[i] += 1
    
    return picks, comp_usage, img_usage

def _extract_sections(data):
    """Extract sections from any format."""
    if 'sections' in data:
        if isinstance(data['sections'], list):
            return data['sections']
        elif isinstance(data['sections'], dict):
            return list(data['sections'].values())
    if 'selections' in data:
        return list(data['selections'].values())
    if 'picks' in data:
        return list(data['picks'].values())
    return [v for k, v in data.items() if k.startswith('section_') and isinstance(v, dict)]

def get_available_components(section_type, catalog_data, used_comps, max_reuse=MAX_REUSE):
    """Get components for a section type, filtered by reuse limits."""
    components = catalog_data.get("components_by_section", {}).get(section_type, [])
    
    # Sort by preference: G+ > G > A* > A
    priority = {"giuliano_derived": 0, "G+": 0, "G": 1, "giuliano_source": 1, "quality_approved": 2, "A*": 2, "agent_standard": 3, "A": 3}
    
    def get_priority(comp):
        source = comp.get("source", "")
        return priority.get(source, 4)
    
    sorted_comps = sorted(components, key=get_priority)
    
    # Filter by reuse limit
    available = []
    for comp in sorted_comps:
        cid = comp.get("id", "")
        if used_comps.get(cid, 0) < max_reuse:
            available.append(comp)
    
    return available

def get_available_images(section_type, used_imgs, max_reuse=15):
    """Get available images filtered by reuse limits."""
    all_images = []
    for root, dirs, files in os.walk(PRODUCT_PHOTOS):
        for f in files:
            if f.endswith(('.jpg','.png','.jpeg')):
                all_images.append(f)
    
    # Filter by reuse
    available = [img for img in all_images if used_imgs.get(img, 0) < max_reuse]
    
    if not available:
        available = all_images
    
    random.shuffle(available)
    return available

def audit_and_report(picks, comp_usage, img_usage):
    """Audit current state and report issues."""
    print("=" * 60)
    print("VARIANCE AUDIT")
    print("=" * 60)
    
    # Most overused components
    print("\nOVERUSED COMPONENTS (used > {}x):".format(MAX_REUSE))
    overused = {c: n for c, n in comp_usage.items() if n > MAX_REUSE}
    for comp, count in sorted(overused.items(), key=lambda x: -x[1]):
        print(f"  {comp:15s}: {count}x (cap: {MAX_REUSE})")
    
    if not overused:
        print("  None!")
    
    # Hero variance
    hero_usage = Counter()
    for f, sections in picks.items():
        if sections:
            hero_usage[sections[0].get("component_id","")] += 1
    
    print("\nHERO VARIANCE:")
    for comp, count in hero_usage.most_common(10):
        pct = count / len(picks) * 100
        bar = "█" * int(pct / 2) + "░" * (10 - int(pct / 2))
        print(f"  {comp:15s}: {count:3d}x ({pct:4.1f}%) {bar}")
    
    # CTA variance
    cta_usage = Counter()
    for f, sections in picks.items():
        if sections:
            cta_usage[sections[-1].get("component_id","")] += 1
    
    print("\nCTA VARIANCE:")
    for comp, count in cta_usage.most_common(10):
        pct = count / len(picks) * 100
        bar = "█" * int(pct / 2) + "░" * (10 - int(pct / 2))
        print(f"  {comp:15s}: {count:3d}x ({pct:4.1f}%) {bar}")
    
    # Image variance
    print("\nIMAGE VARIANCE:")
    for img, count in img_usage.most_common(10):
        print(f"  {img[:40]:40s}: {count}x")
    
    return len(overused)

def fix_overused(picks, comp_usage, img_usage):
    """Fix files with overused components by replacing them."""
    with open(CATALOG) as f:
        catalog = json.load(f)
    
    overused = {c for c, n in comp_usage.items() if n > MAX_REUSE}
    
    if not overused:
        print("\nNo overused components to fix!")
        return picks, 0
    
    print(f"\nFixing {len(overused)} overused components...")
    fixes = 0
    
    for filename, sections in picks.items():
        modified = False
        for i, section in enumerate(sections):
            cid = section.get("component_id", "")
            section_type = section.get("section_type", section.get("type", ""))
            
            if cid in overused and comp_usage.get(cid, 0) > MAX_REUSE:
                # Find replacement
                available = get_available_components(section_type, catalog, comp_usage)
                if available:
                    replacement = available[0]
                    section["component_id"] = replacement["id"]
                    section["component_name"] = replacement["name"]
                    comp_usage[cid] -= 1
                    comp_usage[replacement["id"]] += 1
                    fixes += 1
                    modified = True
        
        if modified:
            # Save back
            picks[filename] = sections
            # Rebuild output
            output = {"email_id": filename.replace(".json", ""), "sections": []}
            for s in sections:
                output["sections"].append(s)
            
            with open(os.path.join(PICKS_DIR, filename), 'w') as f:
                json.dump(output, f, indent=2)
    
    return picks, fixes

if __name__ == "__main__":
    # Load state
    picks, comp_usage, img_usage = load_all_picks()
    
    # Audit
    issues = audit_and_report(picks, comp_usage, img_usage)
    
    # Fix
    picks, fixes = fix_overused(picks, comp_usage, img_usage)
    
    # Re-audit
    picks, comp_usage, img_usage = load_all_picks()
    print("\n" + "=" * 60)
    print("AFTER FIX:")
    issues = audit_and_report(picks, comp_usage, img_usage)
    print(f"\nFixes applied: {fixes}")
