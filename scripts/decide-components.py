#!/usr/bin/env python3
"""
BKC Decision Engine
Reads parsed email JSON + component catalog → picks components for each section.
Ensures: 4-6 images, 3-6 components, no duplicates, messaging flow consistency.

Usage: python3 decide-components.py <parsed-email.json> [--catalog <catalog.json>] [--output <output.json>]
"""

import json
import os
import sys
import random
from pathlib import Path
from collections import defaultdict

# ============================================================
# IMAGE SLOTS (31 product images available)
# ============================================================
IMAGE_SLOTS = {
    "lifestyle": [
        "toddler-playing.jpg",
        "washing-machine.jpg",
        "toddler-backpack-moon-cloud-blue.png",
        "toddler-livingroom-dino-yellow.png",
        "toddler-napping-watermelon-pink-shorts.png",
        "toddler-outdoors-grass-disposable-diaper.png",
        "toddler-playing-train-moon-cloud-blue.png",
        "toddler-potty-ladder-pink-multicolor.png",
        "toddler-potty-ladder-yellow-woodland.png",
        "toddler-rearview-cat-mustard.png",
        "toddlers-backview-disposable-diapers.png",
        "washing-machine-training-pants.png",
        "founders-holding-pants-yellow-watermelon.png",
    ],
    "flatlay": [
        "diaper-woodland-creature-yellow.jpg",
        "training-pant-cloud-raindrop-white.jpg",
        "training-pant-penguin-multicolor.jpg",
        "training-pant-fox-woodland-white.jpg",
        "training-pant-bunny-hearts-pink.jpg",
        "training-pant-fox-red-white.jpg",
        "training-pant-watermelon-pink.jpg",
        "pocket-diaper-moon-cloud-blue.jpg",
        "swim-diaper-whale-ocean-blue.jpg",
        "swim-diaper-giraffe-yellow.jpg",
        "swim-diaper-unicorn-pink.jpg",
        "laundry-bag-llama-cream.png",
    ],
    "accessories": [
        "book-potty-training-guide.png",
        "cloth-pads-watermelon-astronaut-cat.png",
        "potty-targets-stickers-chart.png",
        "towel-set-llama-cactus.png",
        "wet-bags-space-zebra-llama.png",
    ],
}

# ============================================================
# SECTION TYPE → IMAGE TYPE MAPPING
# ============================================================
SECTION_IMAGE_TYPES = {
    "hook": "lifestyle",
    "validation": "lifestyle",
    "mechanism": "flatlay",
    "social_proof": "lifestyle",
    "product": "flatlay",
    "guarantee": "accessories",
    "offer": "flatlay",
    "cta": "lifestyle",
    "comparison": "flatlay",
    "recognition": "lifestyle",
    "body": "lifestyle",
}

# ============================================================
# COMPONENT QUERIER
# ============================================================
class ComponentQuerier:
    def __init__(self, catalog):
        self.components = catalog["components"]
        self.by_id = {c["id"]: c for c in self.components}
        
    def query(self, position=None, messaging=None, temperature=None, 
              image_support=None, audience=None, exclude_ids=None):
        """Query components by attributes. Returns list of matching components."""
        results = []
        exclude_ids = exclude_ids or set()
        
        for comp in self.components:
            if comp["id"] in exclude_ids:
                continue
            
            if position and comp["position"] != position:
                continue
            
            if messaging and comp["messaging"] != messaging:
                continue
            
            if temperature and comp["temperature"] != temperature:
                continue
            
            if image_support and comp["image_support"] != image_support:
                continue
            
            if audience and not any(a in comp["audience"] for a in audience):
                continue
            
            results.append(comp)
        
        return results
    
    def get_by_id(self, comp_id):
        return self.by_id.get(comp_id)

# ============================================================
# IMAGE TRACKER
# ============================================================
class ImageTracker:
    def __init__(self):
        self.used_images = set()
        self.image_slots = {
            "lifestyle": list(IMAGE_SLOTS["lifestyle"]),
            "flatlay": list(IMAGE_SLOTS["flatlay"]),
            "accessories": list(IMAGE_SLOTS["accessories"]),
        }
        random.shuffle(self.image_slots["lifestyle"])
        random.shuffle(self.image_slots["flatlay"])
        random.shuffle(self.image_slots["accessories"])
    
    def get_image(self, image_type):
        """Get an unused image of the specified type."""
        if image_type is None:
            return None
        
        slots = self.image_slots.get(image_type, [])
        for img in slots:
            if img not in self.used_images:
                self.used_images.add(img)
                return img
        
        # Fallback: try other types
        for alt_type in ["lifestyle", "flatlay", "accessories"]:
            if alt_type == image_type:
                continue
            for img in self.image_slots.get(alt_type, []):
                if img not in self.used_images:
                    self.used_images.add(img)
                    return img
        
        return None
    
    def count(self):
        return len(self.used_images)

# ============================================================
# EMAIL TRACKER
# ============================================================
class EmailTracker:
    def __init__(self):
        self.used_components = set()
        self.image_count = 0
        self.component_count = 0
    
    def use_component(self, comp_id):
        """Mark a component as used. Returns True if unique, False if duplicate."""
        if comp_id in self.used_components:
            return False
        self.used_components.add(comp_id)
        self.component_count += 1
        return True
    
    def use_image(self):
        """Increment image count."""
        self.image_count += 1
    
    def validate(self):
        """Check if email meets constraints."""
        issues = []
        if self.image_count < 4:
            issues.append(f"Images under minimum: {self.image_count}/4")
        if self.image_count > 6:
            issues.append(f"Images over maximum: {self.image_count}/6")
        if self.component_count < 3:
            issues.append(f"Components under minimum: {self.component_count}/3")
        if self.component_count > 6:
            issues.append(f"Components over maximum: {self.component_count}/6")
        return issues

# ============================================================
# SECTION DECIDER
# ============================================================
class SectionDecider:
    def __init__(self, querier, image_tracker, email_tracker):
        self.querier = querier
        self.image_tracker = image_tracker
        self.email_tracker = email_tracker
    
    def decide_section(self, section_mapping, messaging_data):
        """Decide which component to use for a section."""
        section_type = section_mapping["section_type"]
        needs_image = section_mapping["needs_image"]
        image_type = section_mapping.get("image_type")
        possible_categories = section_mapping["possible_component_categories"]
        
        # Determine position to query
        position = possible_categories[0] if possible_categories else "body_recognition"
        
        # Determine messaging to query
        messaging = messaging_data.get("messaging_type", "neutral")
        if messaging == "awareness":
            messaging_query = "emotional"
        elif messaging == "consideration":
            messaging_query = "product"
        elif messaging == "conversion":
            messaging_query = "conversion"
        elif messaging == "retention":
            messaging_query = "story"
        elif messaging == "winback":
            messaging_query = "conversion"
        else:
            messaging_query = None
        
        # Determine temperature
        temperature = messaging_data.get("urgency", "neutral")
        if temperature == "allowed":
            temperature = "warm"
        elif temperature == "none":
            temperature = "neutral"
        elif temperature == "low":
            temperature = "neutral"
        else:
            temperature = None
        
        # Determine image support needed
        image_support = "image_text" if needs_image else "text_only"
        
        # Query candidates
        candidates = self.querier.query(
            position=position,
            messaging=messaging_query,
            image_support=image_support,
            exclude_ids=self.email_tracker.used_components,
        )
        
        # Fallback: relax constraints if no candidates
        if not candidates:
            candidates = self.querier.query(
                position=position,
                exclude_ids=self.email_tracker.used_components,
            )
        
        # Fallback: relax position if still no candidates
        if not candidates:
            candidates = self.querier.query(
                messaging=messaging_query,
                exclude_ids=self.email_tracker.used_components,
            )
        
        # Pick the best candidate
        if candidates:
            # Prefer giuliano-derived or quality-approved
            giuliano = [c for c in candidates if c["giuliano"] in ["giuliano_source", "giuliano_derived"]]
            approved = [c for c in candidates if c["giuliano"] == "quality_approved"]
            
            if giuliano:
                pick = giuliano[0]
            elif approved:
                pick = approved[0]
            else:
                pick = candidates[0]
        else:
            # Ultimate fallback: create a generic component entry
            pick = {
                "id": f"GENERIC-{section_type.upper()}",
                "name": f"Generic {section_type.title()} Block",
                "position": position,
                "image_support": "text_only",
                "messaging": messaging_query or "neutral",
                "audience": ["L1", "L2", "L3", "GF"],
                "temperature": "neutral",
                "giuliano": "agent_standard",
            }
        
        # Track component
        self.email_tracker.use_component(pick["id"])
        
        # Handle image
        image_file = None
        if needs_image:
            img = self.image_tracker.get_image(image_type)
            if img:
                image_file = img
                self.email_tracker.use_image()
        
        return {
            "section_type": section_type,
            "component_id": pick["id"],
            "component_name": pick["name"],
            "component_position": pick["position"],
            "component_messaging": pick["messaging"],
            "component_giuliano": pick["giuliano"],
            "image": image_file,
            "image_type": image_type,
            "needs_image": needs_image,
        }

# ============================================================
# EMAIL DECIDER
# ============================================================
class EmailDecider:
    def __init__(self, querier):
        self.querier = querier
    
    def _merge_sections(self, sections):
        """Merge sections to fit within 6-component limit."""
        if len(sections) <= 6:
            return sections
        
        # Priority: keep hook, cta, product, guarantee, social_proof
        # Merge: validation+mechanism, recognition+body, etc.
        priority_types = ["hook", "product", "guarantee", "social_proof", "cta"]
        merged = []
        skipped = []
        
        # First pass: keep priority sections
        for s in sections:
            if s["section_type"] in priority_types and len(merged) < 5:
                merged.append(s)
            else:
                skipped.append(s)
        
        # Second pass: add remaining until we hit 6
        for s in skipped:
            if len(merged) >= 6:
                break
            merged.append(s)
        
        # If still over 6, just take first 6
        if len(merged) > 6:
            merged = merged[:6]
        
        return merged
    
    def _add_defaults(self, sections, parsed_email):
        """Add default sections when there are too few."""
        messaging = parsed_email.get("messaging", {})
        cta_data = parsed_email.get("copy", {}).get("cta", {})
        
        # Add CTA if not present
        has_cta = any(s["section_type"] == "cta" for s in sections)
        if not has_cta and cta_data:
            sections.append({
                "section_name": "CTA",
                "section_type": "cta",
                "needs_image": False,
                "image_type": None,
                "possible_component_categories": ["cta"],
                "content_preview": cta_data.get("button_text", "Shop now"),
            })
        
        # Add product showcase if not present and this is a conversion email
        has_product = any(s["section_type"] == "product" for s in sections)
        if not has_product and messaging.get("messaging_type") in ["conversion", "consideration"]:
            sections.append({
                "section_name": "Product Showcase",
                "section_type": "product",
                "needs_image": True,
                "image_type": "flatlay",
                "possible_component_categories": ["product_showcase"],
                "content_preview": "Product features and benefits",
            })
        
        # Add social proof if not present
        has_proof = any(s["section_type"] == "social_proof" for s in sections)
        if not has_proof:
            sections.append({
                "section_name": "Social Proof",
                "section_type": "social_proof",
                "needs_image": True,
                "image_type": "lifestyle",
                "possible_component_categories": ["body_social_proof"],
                "content_preview": "Parent testimonials and reviews",
            })
        
        # Add guarantee if not present
        has_guarantee = any(s["section_type"] == "guarantee" for s in sections)
        if not has_guarantee:
            sections.append({
                "section_name": "Guarantee",
                "section_type": "guarantee",
                "needs_image": True,
                "image_type": "accessories",
                "possible_component_categories": ["guarantee_trust"],
                "content_preview": "60-day guarantee and trust badges",
            })
        
        return sections
    
    def decide_email(self, parsed_email):
        """Decide components for an entire email."""
        email_id = parsed_email["email_id"]
        messaging = parsed_email["messaging"]
        section_mappings = parsed_email["section_mappings"]
        
        # Initialize trackers
        image_tracker = ImageTracker()
        email_tracker = EmailTracker()
        section_decider = SectionDecider(self.querier, image_tracker, email_tracker)
        
        # If too many sections, merge adjacent ones
        if len(section_mappings) > 6:
            section_mappings = self._merge_sections(section_mappings)
        
        # If too few sections, add defaults (header, footer, CTA)
        if len(section_mappings) < 3:
            section_mappings = self._add_defaults(section_mappings, parsed_email)
        
        # Decide each section
        picks = {}
        section_counts = {}
        for mapping in section_mappings:
            section_name = mapping["section_name"]
            section_type = mapping["section_type"]
            
            # Create unique key if duplicate section type
            if section_type in section_counts:
                section_counts[section_type] += 1
                unique_key = f"{section_type}_{section_counts[section_type]}"
            else:
                section_counts[section_type] = 1
                unique_key = section_type
            
            pick = section_decider.decide_section(mapping, messaging)
            picks[unique_key] = pick
        
        # Validate
        issues = email_tracker.validate()
        
        # If images under minimum, try to add image-wrapping to text sections
        if email_tracker.image_count < 4:
            for section_type, pick in picks.items():
                if email_tracker.image_count >= 4:
                    break
                if pick["image"] is None and pick["needs_image"] is False:
                    # Try to add an image here
                    img_type = SECTION_IMAGE_TYPES.get(section_type, "lifestyle")
                    img = image_tracker.get_image(img_type)
                    if img:
                        pick["image"] = img
                        pick["needs_image"] = True
                        email_tracker.use_image()
        
        # Re-validate after fixes
        issues = email_tracker.validate()
        
        return {
            "email_id": email_id,
            "flow": messaging.get("flow_type", "unknown"),
            "position": messaging.get("position", "unknown"),
            "audience": messaging.get("audience", "unknown"),
            "messaging_type": messaging.get("messaging_type", "unknown"),
            "picks": picks,
            "stats": {
                "image_count": email_tracker.image_count,
                "component_count": email_tracker.component_count,
                "images_min": 4,
                "images_max": 6,
                "components_min": 3,
                "components_max": 6,
            },
            "validation": {
                "issues": issues,
                "valid": len(issues) == 0,
            },
        }

# ============================================================
# MAIN
# ============================================================
def main():
    if len(sys.argv) < 2:
        print("Usage: python3 decide-components.py <parsed-email.json> [--catalog <catalog.json>] [--output <output.json>]")
        sys.exit(1)
    
    parsed_file = sys.argv[1]
    catalog_file = None
    output_file = None
    
    # Parse optional arguments
    i = 2
    while i < len(sys.argv):
        if sys.argv[i] == "--catalog" and i + 1 < len(sys.argv):
            catalog_file = sys.argv[i + 1]
            i += 2
        elif sys.argv[i] == "--output" and i + 1 < len(sys.argv):
            output_file = sys.argv[i + 1]
            i += 2
        else:
            i += 1
    
    # Default catalog path
    if not catalog_file:
        catalog_file = os.path.join(os.path.dirname(__file__), "..", "outputs", "email-assets", "component-catalog.json")
    
    # Load catalog
    with open(catalog_file, 'r') as f:
        catalog = json.load(f)
    
    # Load parsed email
    with open(parsed_file, 'r') as f:
        parsed_email = json.load(f)
    
    # Create querier and decider
    querier = ComponentQuerier(catalog)
    decider = EmailDecider(querier)
    
    # Decide
    result = decider.decide_email(parsed_email)
    
    # Output
    if output_file:
        os.makedirs(os.path.dirname(output_file), exist_ok=True)
        with open(output_file, 'w') as f:
            json.dump(result, f, indent=2)
        print(f"Output written to {output_file}")
    else:
        print(json.dumps(result, indent=2))

if __name__ == "__main__":
    main()
