#!/usr/bin/env python3
"""Fill ALL sections for ALL 125 layout blueprints with component picks and images."""

import json
import os
import random
import sys
from collections import defaultdict
from pathlib import Path

LAYOUTS_DIR = Path("/root/projects/brightkidco/outputs/layouts")
COMPONENTS_PATH = Path("/root/projects/brightkidco/outputs/email-assets/section-components.json")
PHOTOS_DIR = Path("/root/projects/brightkidco/outputs/email-assets/product-photos")
PICKS_DIR = Path("/root/projects/brightkidco/outputs/picks")

# Collect all image files (relative paths from PHOTOS_DIR, only actual images)
def collect_images():
    images = []
    for ext in ('*.jpg', '*.jpeg', '*.png', '*.webp'):
        for f in PHOTOS_DIR.rglob(ext):
            rel = str(f.relative_to(PHOTOS_DIR))
            # Skip base64 and branding black placeholder
            if 'base64' in rel or 'branding' in rel or 'black-placeholder' in rel:
                continue
            images.append(rel)
    return sorted(images)

def load_components():
    with open(COMPONENTS_PATH) as f:
        data = json.load(f)
    section_types = data.get("section_types", {})
    components_by_section = data.get("components_by_section", {})

    # section_types maps canonical -> aliases (e.g. "hero" -> ["hero","opener","headline",...])
    # Build reverse: alias -> canonical
    alias_to_canonical = {}
    for canonical, aliases in section_types.items():
        for alias in aliases:
            alias_to_canonical[alias.strip().lower()] = canonical

    # Build components per canonical category, sorted by priority: G+ > A* > A
    priority_order = {"G+": 0, "A*": 1, "A": 2}
    categorized = {}
    for canonical, comps in components_by_section.items():
        sorted_comps = sorted(comps, key=lambda c: priority_order.get(c.get("source", "A"), 99))
        categorized[canonical] = sorted_comps

    return alias_to_canonical, categorized

def load_layouts():
    layouts = []
    for f in sorted(LAYOUTS_DIR.rglob("*.json")):
        with open(f) as fh:
            data = json.load(fh)
            data["_file"] = str(f.relative_to(LAYOUTS_DIR))
            layouts.append(data)
    print(f"Loaded {len(layouts)} layout files", file=sys.stderr)
    return layouts

def pick_component(category_components, used_ids_in_email):
    """Pick best available component not already used in this email."""
    for comp in category_components:
        if comp["id"] not in used_ids_in_email:
            return comp
    return None

def main():
    random.seed(42)  # Reproducible variety

    alias_to_canonical, categorized = load_components()
    layouts = load_layouts()
    all_images = collect_images()
    print(f"Collected {len(all_images)} product images", file=sys.stderr)
    print(f"Categories: {sorted(categorized.keys())}", file=sys.stderr)
    for cat in sorted(categorized.keys()):
        print(f"  {cat}: {len(categorized[cat])} components", file=sys.stderr)

    PICKS_DIR.mkdir(parents=True, exist_ok=True)

    errors = []
    processed = 0

    for layout in layouts:
        email_id = layout.get("email_id", "")
        if not email_id:
            print(f"SKIP: {layout.get('_file')} has no email_id", file=sys.stderr)
            continue

        sections = layout.get("sections", [])
        picks_sections = []
        used_component_ids = set()
        used_images = set()

        # First pass: collect total image needs
        total_images_needed = sum(
            s["image_count"] for s in sections if s.get("has_image")
        )

        # Ensure 4-6 images total per email
        if total_images_needed < 4:
            # Need more images - add to sections that have has_image
            extra_needed = 4 - total_images_needed
            # Distribute to sections that already have images, prioritizing those with 0 or 1
            candidates = [s for s in sections if s.get("has_image")]
            while extra_needed > 0 and candidates:
                for s in candidates:
                    if extra_needed <= 0:
                        break
                    s["image_count"] += 1
                    extra_needed -= 1
                    total_images_needed += 1
        elif total_images_needed > 6:
            # Cap at 6 - reduce from sections with most images
            excess = total_images_needed - 6
            candidates = sorted(
                [s for s in sections if s.get("has_image") and s["image_count"] > 1],
                key=lambda s: -s["image_count"]
            )
            while excess > 0 and candidates:
                for s in candidates:
                    if excess <= 0:
                        break
                    if s["image_count"] > 1:
                        s["image_count"] -= 1
                        excess -= 1
                        total_images_needed -= 1

        # Image pool - shuffle for variety
        image_pool = list(all_images)
        random.shuffle(image_pool)
        image_idx = 0

        for section in sections:
            section_type = section.get("type", "").strip().lower()
            has_image = section.get("has_image", False)
            image_count = section.get("image_count", 0)

            # Map section type to canonical category
            canonical = alias_to_canonical.get(section_type)
            if canonical is None:
                # Try direct match
                if section_type in categorized:
                    canonical = section_type
                else:
                    # Fuzzy: check if it matches any alias value
                    for alias, can in alias_to_canonical.items():
                        if alias in section_type or section_type in alias:
                            canonical = can
                            break

            if canonical is None:
                errors.append(f"{email_id}: unknown section type '{section_type}'")
                continue

            if canonical not in categorized:
                errors.append(f"{email_id}: no components for canonical '{canonical}' (from type '{section_type}')")
                continue

            comp = pick_component(categorized[canonical], used_component_ids)
            if comp is None:
                # Cycle back - reuse but prefer different ones
                comp = categorized[canonical][0]
                print(f"  {email_id}: had to reuse component in '{canonical}' category", file=sys.stderr)

            used_component_ids.add(comp["id"])

            # Pick images
            image_files = []
            if has_image and image_count > 0:
                for _ in range(image_count):
                    # Try to pick non-duplicate images
                    attempts = 0
                    while attempts < len(image_pool) * 2:
                        if image_idx >= len(image_pool):
                            random.shuffle(image_pool)
                            image_idx = 0
                        img = image_pool[image_idx]
                        image_idx += 1
                        if img not in used_images:
                            used_images.add(img)
                            image_files.append(img)
                            break
                        attempts += 1
                    else:
                        # Just use next available
                        if image_idx >= len(image_pool):
                            random.shuffle(image_pool)
                            image_idx = 0
                        image_files.append(image_pool[image_idx])
                        used_images.add(image_pool[image_idx])
                        image_idx += 1

            picks_sections.append({
                "type": section_type,
                "component_id": comp["id"],
                "component_name": comp["name"],
                "image_files": image_files
            })

        picks = {
            "email_id": email_id,
            "sections": picks_sections
        }

        out_path = PICKS_DIR / f"{email_id}.json"
        with open(out_path, "w") as f:
            json.dump(picks, f, indent=2)

        img_count = sum(len(s["image_files"]) for s in picks_sections)
        print(f"  {email_id}: {len(picks_sections)} sections, {img_count} images", file=sys.stderr)
        processed += 1

    print(f"\nProcessed {processed} emails", file=sys.stderr)
    if errors:
        print(f"\nErrors ({len(errors)}):", file=sys.stderr)
        for e in errors:
            print(f"  {e}", file=sys.stderr)

if __name__ == "__main__":
    main()
