#!/usr/bin/env python3
"""Process all welcome email picks - fill sections with components and images."""

import json
import os
import random
from pathlib import Path
from collections import defaultdict

random.seed(42)

LAYOUTS_DIR = Path("/root/projects/brightkidco/outputs/layouts/welcome")
PICKS_DIR = Path("/root/projects/brightkidco/outputs/picks")
COMPONENTS_PATH = Path("/root/projects/brightkidco/outputs/email-assets/section-components.json")
IMAGE_DIR = Path("/root/projects/brightkidco/outputs/email-assets/product-photos")

# Load components
with open(COMPONENTS_PATH) as f:
    comp_data = json.load(f)

components_by_section = comp_data["components_by_section"]

# All available images by category
IMAGES = {
    "lifestyle": [
        "toddler-outdoors-grass-disposable-diaper.png",
        "toddler-napping-watermelon-pink-shorts.png",
        "toddlers-backview-disposable-diapers.png",
        "toddler-playing-train-moon-cloud-blue.png",
        "toddler-livingroom-dino-yellow.png",
        "washing-machine-training-pants.png",
        "toddler-potty-ladder-pink-multicolor.png",
        "toddler-potty-ladder-yellow-woodland.png",
        "toddler-backpack-moon-cloud-blue.png",
        "founders-holding-pants-yellow-watermelon.png",
        "toddler-rearview-cat-mustard.png",
    ],
    "flat-lay": [
        "diaper-woodland-creature-yellow.jpg",
        "pocket-diaper-moon-cloud-blue.jpg",
        "swim-diaper-unicorn-pink.jpg",
        "training-pant-fox-red-white.jpg",
        "swim-diaper-whale-ocean-blue.jpg",
        "training-pant-penguin-multicolor.jpg",
        "training-pant-bunny-hearts-pink.jpg",
        "training-pant-fox-woodland-white.jpg",
        "training-pant-cloud-raindrop-white.jpg",
        "swim-diaper-giraffe-yellow.jpg",
        "training-pant-watermelon-pink.jpg",
        "laundry-bag-llama-cream.png",
    ],
    "accessories": [
        "potty-targets-stickers-chart.png",
        "book-potty-training-guide.png",
        "cloth-pads-watermelon-astronaut-cat.png",
        "towel-set-llama-cactus.png",
        "wet-bags-space-zebra-llama.png",
    ],
    "branding": [
        "black-placeholder.png",
    ],
    "resized": [
        "toddler-playing.jpg",
        "washing-machine.jpg",
    ],
}

# Flatten all images with categories
all_images = []
for cat, imgs in IMAGES.items():
    for img in imgs:
        all_images.append((cat, img))

# Source priority: G+ > G > A* > A
SOURCE_SCORE = {"G+": 4, "G": 3, "A*": 2, "A": 1}

# Section types that typically have images (vs text-only)
IMAGE_SECTION_TYPES = {"hero", "product", "definition", "story", "testimonial", "guarantee", "reframe", "comparison", "letter"}
TEXT_ONLY_SECTION_TYPES = {"cta", "expert", "objections", "code", "stat", "steps"}

def get_best_components(section_type, excluded_ids):
    """Get components for a section type, sorted by source preference, excluding used ones."""
    section_type = section_type.lower()
    # Map section type to component category
    type_map = components_by_section.get(section_type)
    if not type_map:
        # Try aliases
        for key, vals in comp_data["section_types"].items():
            if section_type in [v.lower() for v in vals]:
                type_map = components_by_section.get(key)
                break
    if not type_map:
        return []
    
    components = []
    for c in type_map:
        cid = c["id"]
        if cid not in excluded_ids:
            source = c["source"]
            score = SOURCE_SCORE.get(source, 0)
            components.append((score, c))
    
    # Sort by score descending
    components.sort(key=lambda x: (-x[0], x[1]["name"]))
    return [c for _, c in components]

def pick_image_for_section(section_type, used_images_in_email, used_globally, category=None):
    """Pick an image for a section. Prefer not to reuse globally."""
    available = []
    for cat, img in all_images:
        if (cat, img) not in used_images_in_email:
            available.append((cat, img))
    
    if not available:
        return None, None
    
    # Prefer images not used globally
    fresh = [(cat, img) for cat, img in available if (cat, img) not in used_globally]
    pool = fresh if fresh else available
    
    # If category specified, filter
    if category:
        cat_pool = [(cat, img) for cat, img in pool if cat == category]
        pool = cat_pool if cat_pool else pool
    
    choice = random.choice(pool)
    return choice

def get_default_category(section_type):
    """Default image category for section types."""
    mapping = {
        "hero": "lifestyle",
        "product": "flat-lay",
        "definition": "accessories",
        "story": "lifestyle",
        "testimonial": "lifestyle",
        "guarantee": "lifestyle",
        "reframe": "accessories",
        "comparison": "flat-lay",
        "letter": "lifestyle",
    }
    return mapping.get(section_type, "lifestyle")

# List of emails to process
EMAIL_IDS = [
    "welcome-01-e4-l3",
    "welcome-01-e4-gf",
    "welcome-01-e5-l1",
    "welcome-01-e5-l2",
    "welcome-01-e5-l3",
    "welcome-01-e5-gf",
    "welcome-01-e6-l1",
    "welcome-01-e6-l2",
    "welcome-01-e6-l3",
    "welcome-01-e6-gf",
    "welcome-01-e7-l1",
    "welcome-01-e7-l2",
    "welcome-01-e7-l3",
    "welcome-01-e7-gf",
    "welcome-01-e8-l1",
    "welcome-01-e8-l2",
    "welcome-01-e8-l3",
    "welcome-01-e8-gf",
]

# Global tracking
used_components_global = set()
used_images_global = set()

for email_id in EMAIL_IDS:
    layout_path = LAYOUTS_DIR / f"{email_id}.json"
    if not layout_path.exists():
        print(f"SKIP: {email_id} - layout not found")
        continue
    
    with open(layout_path) as f:
        layout = json.load(f)
    
    sections = layout["sections"]
    used_in_email = set()
    used_imgs_email = set()
    
    output = {
        "email_id": email_id,
    }
    
    section_picks = []
    image_count = 0
    
    # Determine target image count (4-6, vary by email)
    num_sections = len(sections)
    if num_sections <= 3:
        target_images = 4
    elif num_sections <= 5:
        target_images = random.choice([4, 5])
    else:
        target_images = random.choice([5, 6])
    
    # Section types that can have images
    imageable_indices = [
        i for i, s in enumerate(sections)
        if s["type"].lower() in IMAGE_SECTION_TYPES
    ]
    
    # Non-imageable sections (cta usually)
    non_imageable = [
        i for i, s in enumerate(sections)
        if s["type"].lower() not in IMAGE_SECTION_TYPES
    ]
    
    # Determine which sections get images to hit target
    if len(imageable_indices) >= target_images:
        image_sections = random.sample(imageable_indices, target_images)
    else:
        image_sections = list(imageable_indices)
        # Still try to add more by assigning to non-imageable ones
        remaining = target_images - len(image_sections)
        if remaining > 0 and non_imageable:
            extras = random.sample(non_imageable, min(remaining, len(non_imageable)))
            image_sections.extend(extras)
    
    # Process each section
    for idx, section in enumerate(sections):
        stype = section["type"].lower()
        sname = section.get("name", "")
        
        # Get components for this type
        comps = get_best_components(stype, used_components_global)
        
        if not comps:
            print(f"  WARNING: No components for {email_id} section {idx} type={stype}")
            output[f"section_{idx}"] = {
                "section_type": stype,
                "section_name": sname,
                "component_id": "UNKNOWN",
                "component_name": "Unknown",
                "component_source": "?",
                "image_file": None,
                "image_category": None,
            }
            continue
        
        # Pick best component, try to vary
        # Prefer G+ and G first, then A*, then A
        comp = comps[0]  # Already sorted by score
        
        # Mark as used
        used_components_global.add(comp["id"])
        
        # Should this section have an image?
        img_file = None
        img_cat = None
        if idx in image_sections:
            cat = get_default_category(stype)
            img = pick_image_for_section(stype, used_imgs_email, used_images_global, cat)
            if img:
                img_cat, img_file = img
                used_imgs_email.add(img)
                used_images_global.add(img)
                image_count += 1
        
        output[f"section_{idx}"] = {
            "section_type": stype,
            "section_name": sname,
            "component_id": comp["id"],
            "component_name": comp["name"],
            "component_source": comp["source"],
            "image_file": img_file,
            "image_category": img_cat,
        }
    
    output["total_images"] = image_count
    
    # Save
    out_path = PICKS_DIR / f"{email_id}.json"
    with open(out_path, "w") as f:
        json.dump(output, f, indent=2)
    
    print(f"DONE: {email_id} ({num_sections} sections, {image_count} images) -> {out_path}")

print("\nAll done!")
