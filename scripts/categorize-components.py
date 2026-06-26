#!/usr/bin/env python3
"""
BKC Component Categorizer
Reads component-index-v2.md and outputs structured JSON with 6 tags per component.
"""

import re
import json

# Read the index file
with open('/root/projects/brightkidco/outputs/email-assets/component-index-v2.md', 'r') as f:
    content = f.read()

# Parse components
components = []
current_category = ""

# Category to position mapping
category_positions = {
    "SHELL & HEADER": "shell_header",
    "HERO": "hero",
    "BODY — RECOGNITION & STORY": "body_recognition",
    "BODY — MECHANISM & EDUCATION": "body_mechanism",
    "BODY — SOCIAL PROOF & TESTIMONIALS": "body_social_proof",
    "BODY — IMAGES & PHOTOS": "body_images",
    "PRODUCT SHOWCASE": "product_showcase",
    "GUARANTEE & TRUST": "guarantee_trust",
    "CTA — THE CLOSE": "cta",
    "EMOTIONAL SUPPORT": "emotional_support",
    "FLOW-SPECIFIC PATTERNS": "flow_specific",
    "SEASONAL & CAMPAIGN": "seasonal_campaign",
    "SIGNOFF & FOOTER": "signoff_footer",
}

# Component name to messaging mapping
messaging_keywords = {
    "education": ["EDU", "MECHANISM", "DEFINITION", "STEP", "CHECKLIST", "MYTH", "FACT", "INFOGRAPHIC", "FAQ", "DID YOU KNOW", "HOW IT WORKS", "SCIENCE", "COMPARISON", "VOCABULARY", "TIP", "QUIZ", "EXPLAINER", "ANATOMY", "DIAGRAM"],
    "proof": ["TESTIMONIAL", "REVIEW", "SOCIAL PROOF", "STAT", "COUNTER", "RATING", "STAR", "UGC", "ENDORSEMENT", "COMMUNITY", "QUOTE", "BEFORE/AFTER", "TRANSFORMATION"],
    "conversion": ["CTA", "CONVERSION", "OFFER", "DISCOUNT", "PROMO", "SALE", "URGENCY", "COUNTDOWN", "TIMER", "PROGRESS BAR", "FLASH", "LIMITED"],
    "emotional": ["EMOTION", "EMPATHY", "GUILT", "GRIEF", "HOPE", "PATIENCE", "PERMISSION", "COMFORT", "SUPPORT", "VALIDATION", "REFRAME", "STRENGTH", "COURAGE", "SAFE SPACE"],
    "product": ["PRODUCT", "SHOWCASE", "FEATURE", "BENEFIT", "LAYER", "MATERIAL", "SIZE", "COLOR", "WEAR", "TEST", "BUNDLE", "UNBOXING", "PACKAGING", "FLAT LAY", "LIFESTYLE", "HERO IMAGE", "DETAIL", "COMPARISON TABLE"],
    "guarantee": ["GUARANTEE", "TRUST", "SEAL", "BADGE", "CERTIFICATION", "REFUND", "RETURN", "PROMISE", "COVERAGE", "POLICY", "RISK"],
    "story": ["STORY", "NARRATIVE", "CHAPTER", "TIMELINE", "DIARY", "DIALOGUE", "ORIGIN", "JOURNEY", "PARALLEL", "MICRO-STORY", "CAROUSEL", "SPLIT SCREEN", "DAY IN THE LIFE", "CONVERSATION", "SEASON", "RECIPE", "MAP", "PLAYLIST", "WEATHER", "MOVIE", "DICTIONARY", "MUSEUM", "NEWS", "COMIC", "MIXTAPE", "TIME LAPSE", "FIELD NOTES"],
    "design": ["GRADIENT", "COLOR", "TYPOGRAPHY", "BORDER", "BADGE", "HANDWRITTEN", "DARK MODE", "PAPER", "STAMP", "WAX SEAL", "TAPE", "ENVELOPE", "NEON", "OVERLAP", "SPLIT", "LAYERED", "ROTATED", "NEGATIVE SPACE"],
    "psychology": ["ANCHOR", "LOSS AVERSION", "SOCIAL PROOF CASCADE", "COMMITMENT", "PERMISSION MESSAGING", "MICRO-WIN", "ENDOWMENT", "RECIPROCITY", "SCARCITY", "DEFAULT", "CHOICE", "IKEA", "BANDWAGON", "FRAME", "HYPERBOLIC", "OPTIMISM", "PEAK-END"],
    "flow": ["FLOW", "WELCOME", "CART", "WINBACK", "POST-PURCHASE", "BROWSE", "CHECKOUT", "LEVEL DETECTION", "REPLENISH", "SUNSET", "REFERRAL", "REVIEW REQUEST", "SHIPPING", "CROSS-SELL", "UPSELL", "BUNDLE UPGRADE"],
    "campaign": ["CAMPAIGN", "SEASONAL", "FLASH", "BESTSELLER", "NEW ARRIVAL", "GIFT", "VIP", "LAUNCH", "COLLECTION", "LOOKBOOK", "GIVEAWAY", "REFER", "APPRECIATION", "BACK TO SCHOOL", "HOLIDAY", "SUMMER", "WINTER", "SPRING", "FALL"],
    "image": ["PHOTO", "IMAGE", "UGC", "GRID", "CAROUSEL", "GALLERY", "MOSAIC", "COLLECTION", "STRIP", "PARALLAX", "SPLIT IMAGE", "HOTSPOT", "ZOOM", "MASONRY", "BLEED", "PANORAMIC", "FLOATING", "COLLAGE", "POLAROID", "ROTATION"],
}

# Temperature mapping based on keywords
temperature_keywords = {
    "urgent": ["URGENCY", "FLASH", "LIMITED", "COUNTDOWN", "TIMER", "PROGRESS BAR", "LAST CHANCE", "FINAL", "EXPIRES", "HURRY"],
    "warm": ["STORY", "EMPATHY", "GUILT", "GRIEF", "HOPE", "PATIENCE", "PERMISSION", "COMFORT", "SUPPORT", "VALIDATION", "LETTER", "QUOTE", "PARENT", "MOM", "FAMILY", "CHILD", "GENTLE", "CALM", "SOFT", "WARM"],
    "neutral": ["FAQ", "DEFINITION", "STEP", "CHECKLIST", "COMPARISON", "TABLE", "DIAGRAM", "EXPLAINER", "SCIENCE", "RESEARCH", "DATA", "STAT", "NUMBER"],
}

# Audience mapping based on keywords
audience_keywords = {
    "L1": ["SARAH", "VERBAL", "PRE-K", "3-5", "LOW SUPPORT", "MILD", "URGENCY OK", "ENERGETIC"],
    "L2": ["LISA", "MIXED", "5-7", "MODERATE", "BCBA", "OT", "SENSORY", "MEASURED"],
    "L3": ["MARIA", "NON-VERBAL", "6-10", "HIGH SUPPORT", "DIGNITY", "GENTLE", "ZERO URGENCY"],
    "GF": ["GENERAL", "FALLBACK", "UNKNOWN", "UNDECLARED", "SYMPTOM", "CROSS-LEVEL"],
}

# Retired patterns
retired_patterns = ["QUOTE CARD YELLOW", "60-DAY SEAL", "LIME-ON-DARK", "BODY SIGNAL SVG", "EM DASH", "DOLLAR SIGN", "EXTERNAL LABEL"]

def get_giuliano_status(line):
    """Determine if component is from Giuliano source."""
    if "[G]" in line and "[G+]" not in line:
        return "giuliano_source"
    elif "[G+]" in line:
        return "giuliano_derived"
    elif "[A*]" in line:
        return "quality_approved"
    else:
        return "agent_standard"

def get_image_support(name, category):
    """Determine image support based on component name and category."""
    name_upper = name.upper()
    
    # Image-only components
    image_only_kws = [
        "IMAGE", "PHOTO", "UGC", "GRID", "CAROUSEL", "GALLERY", "MOSAIC",
        "COLLECTION", "STRIP", "PARALLAX", "SPLIT IMAGE", "HOTSPOT", "ZOOM",
        "MASONRY", "BLEED", "PANORAMIC", "FLOATING", "COLLAGE", "POLAROID",
        "ROTATION", "HERO IMAGE", "LIFESTYLE", "FLAT LAY", "UNBOXING",
        "DETAIL", "CONTEXT", "GIF", "SEASONAL", "BUNDLE VISUAL",
        "FOUNDER PORTRAIT", "CUSTOMER TESTIMONIAL PHOTO", "VIDEO THUMBNAIL",
        "INSTAGRAM", "SIZE GUIDE", "COLOURWAY", "PROCESS",
        "TESTIMONIAL WALL", "PRODUCT COMPARISON VISUAL", "PRODUCT IN HANDS",
        "CINEMATIC", "PHOTO ESSAY", "REVIEW SCREENSHOT",
        "SOCIAL MEDIA EMBED", "PHOTO MEMORY", "UNBOXING VIDEO",
        "REVIEW OF THE WEEK", "COMMUNITY COUNTER"
    ]
    if any(kw in name_upper for kw in image_only_kws):
        return "image_only"
    
    # Text-only components
    text_only_kws = [
        "CTA", "BUTTON", "TEXT", "LETTER", "PARAGRAPH", "SIGNOFF", "FOOTER",
        "LEGAL", "NAV", "PREHEADER", "REMINDER", "TIMELINE", "CODE",
        "DIVIDER", "BAND", "BADGE", "LABEL", "ARROW", "SVG", "DECORATION",
        "WAVE", "DOT", "UNDERLINE", "GRADIENT TEXT", "WIREFRAME",
        "ANNOTATION", "COLOR PALETTE", "TYPOGRAPHY", "PART", "OUTLINE",
        "GREETING", "DYNAMIC", "LEVEL"
    ]
    if any(kw in name_upper for kw in text_only_kws):
        return "text_only"
    
    # Image+text components (most body/mechanism/proof/product)
    if category in ["body_recognition", "body_mechanism", "body_social_proof", "body_images", "product_showcase", "guarantee_trust", "flow_specific", "seasonal_campaign"]:
        return "image_text"
    
    # Default based on name patterns
    if any(kw in name_upper for kw in ["CARD", "BLOCK", "SECTION", "ROW", "STRIP", "STACK", "LAYER", "PANEL", "SPLIT", "BREAK", "QUOTE", "STICKER", "CALLOUT", "RECOGNITION", "ANCHOR", "BRIDGE", "REFRAME", "CELEBRATION", "MOMENT", "CONCEPT", "INVENTORY", "DESCRIPTION", "STORY", "CHAPTER", "CONVERSATION", "THREAD", "MAP", "JOURNEY", "METAPHOR", "ANALOGY", "REPORT", "ENTRY", "BULLETIN", "ARTICLE", "COMIC", "PLAQUE", "CARD", "NOTE", "LOG", "SCENE", "DICTIONARY"]):
        return "image_text"
    
    return "text_only"

def get_messaging(name, category):
    """Determine messaging type based on component name."""
    name_upper = name.upper()
    
    for messaging_type, keywords in messaging_keywords.items():
        if any(kw in name_upper for kw in keywords):
            return messaging_type
    
    # Default based on category
    category_defaults = {
        "shell_header": "design",
        "hero": "emotional",
        "body_recognition": "story",
        "body_mechanism": "education",
        "body_social_proof": "proof",
        "body_images": "image",
        "product_showcase": "product",
        "guarantee_trust": "guarantee",
        "cta": "conversion",
        "emotional_support": "emotional",
        "flow_specific": "flow",
        "seasonal_campaign": "campaign",
        "signoff_footer": "design",
    }
    
    return category_defaults.get(category, "neutral")

def get_temperature(name, messaging):
    """Determine emotional temperature."""
    name_upper = name.upper()
    
    for temp, keywords in temperature_keywords.items():
        if any(kw in name_upper for kw in keywords):
            return temp
    
    # Default based on messaging
    temp_defaults = {
        "emotional": "warm",
        "story": "warm",
        "proof": "neutral",
        "education": "neutral",
        "product": "neutral",
        "conversion": "neutral",
        "guarantee": "neutral",
        "design": "neutral",
        "flow": "neutral",
        "campaign": "neutral",
        "image": "neutral",
        "psychology": "neutral",
    }
    
    return temp_defaults.get(messaging, "neutral")

def get_audience(name):
    """Determine audience level."""
    name_upper = name.upper()
    
    for level, keywords in audience_keywords.items():
        if any(kw in name_upper for kw in keywords):
            return [level]
    
    # Default: all audiences
    return ["L1", "L2", "L3", "GF"]

def is_retired(name):
    """Check if component is retired."""
    name_upper = name.upper()
    return any(pattern in name_upper for pattern in retired_patterns)

# Parse each line
lines = content.split('\n')
for line in lines:
    # Detect category headers
    for cat_name, cat_position in category_positions.items():
        if line.startswith(f"## {cat_name}"):
            current_category = cat_position
            break
    
    # Parse component lines
    if line.startswith("- `") and current_category:
        # Extract component ID and name
        match = re.match(r'- `([^`]+)`\s*\[([^\]]+)\]\s*—\s*(.+?)(?:\s*\*\((\d+)\)\*\s*)?$', line)
        if match:
            comp_id = match.group(1).strip()
            source_tag = match.group(2).strip()
            comp_name = match.group(3).strip()
            source_line = match.group(4)
            
            # Skip retired patterns
            if "⚠️ RETIRED" in line:
                continue
            
            # Determine attributes
            giuliano = get_giuliano_status(line)
            image_support = get_image_support(comp_name, current_category)
            messaging = get_messaging(comp_name, current_category)
            temperature = get_temperature(comp_name, messaging)
            audience = get_audience(comp_name)
            
            components.append({
                "id": comp_id,
                "name": comp_name,
                "position": current_category,
                "image_support": image_support,
                "messaging": messaging,
                "audience": audience,
                "temperature": temperature,
                "giuliano": giuliano,
                "source_line": int(source_line) if source_line else None,
                "retired": False
            })

# Output JSON
output = {
    "total_components": len(components),
    "categories": {},
    "components": components
}

# Count by category
for comp in components:
    cat = comp["position"]
    if cat not in output["categories"]:
        output["categories"][cat] = 0
    output["categories"][cat] += 1

# Write output
with open('/root/projects/brightkidco/outputs/email-assets/component-catalog.json', 'w') as f:
    json.dump(output, f, indent=2)

print(f"Total components categorized: {len(components)}")
print(f"Categories: {json.dumps(output['categories'], indent=2)}")

# Print sample
print("\nSample components:")
for comp in components[:5]:
    print(json.dumps(comp, indent=2))
