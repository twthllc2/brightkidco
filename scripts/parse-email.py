#!/usr/bin/env python3
"""
BKC 3-Source Email Parser
Reads copy file + JSX template + messaging type → structured JSON per email.

Usage: python3 parse-email.py <copy-file.md> [--jsx-template <jsx-dir>] [--output <output.json>]
"""

import re
import json
import os
import sys
from pathlib import Path

# ============================================================
# BRAND TOKENS (from Giuliano's design system reference)
# ============================================================
BRAND_TOKENS = {
    "colors": {
        "teal": "#2BAEB4",
        "tealDeep": "#1E8A8F",
        "green": "#5DD07A",
        "greenDeep": "#3BB35E",
        "ink": "#1F2D2F",
        "soft": "#4A6568",
        "muted": "#8A9B9D",
        "cream": "#FBF7F1",
        "paper": "#FFFFFF",
        "yellow": "#FFD866",
        "lilac": "#EEE8F6",
        "mint": "#E8F5EC",
        "lavender": "#F0EDF8",
    },
    "gradients": {
        "primary": "linear-gradient(135deg, #2BAEB4 0%, #5DD07A 100%)",
        "warm": "linear-gradient(180deg, #FFFBF0 0%, #FFF6E2 100%)",
    },
    "fonts": {
        "main": "'Questrial', system-ui, sans-serif",
        "display": "'Fraunces', Georgia, serif",
        "handwritten": "'Caveat', cursive",
        "body": "'Inter', system-ui, sans-serif",
    },
    "width": 600,
    "mobile_width": 420,
    "border_radius": {"small": 8, "medium": 16, "large": 24, "pill": 999},
    "spacing": {"section_gap": 40, "cta_above": 24, "cta_below": 20},
}

# ============================================================
# MESSAGING TYPE DEFINITIONS
# ============================================================
MESSAGING_TYPES = {
    "awareness": {
        "purpose": "education",
        "emotional_arc": ["curiosity", "recognition", "validation", "mechanism", "permission"],
        "cta_force": "very_low",
        "urgency": "none",
        "product_push": False,
    },
    "consideration": {
        "purpose": "product_education",
        "emotional_arc": ["recognition", "validation", "product_reveal", "social_proof", "cta"],
        "cta_force": "low",
        "urgency": "soft",
        "product_push": True,
    },
    "conversion": {
        "purpose": "sales",
        "emotional_arc": ["recognition", "proof", "offer", "guarantee", "cta"],
        "cta_force": "medium",
        "urgency": "medium",
        "product_push": True,
    },
    "retention": {
        "purpose": "engagement",
        "emotional_arc": ["celebration", "progress", "community", "next_step"],
        "cta_force": "low",
        "urgency": "none",
        "product_push": False,
    },
    "winback": {
        "purpose": "reengagement",
        "emotional_arc": ["reconnection", "update", "new_product", "incentive", "cta"],
        "cta_force": "medium",
        "urgency": "medium",
        "product_push": True,
    },
}

# ============================================================
# COPY PARSER
# ============================================================
def parse_copy_file(filepath):
    """Parse a copy .md file into structured sections."""
    with open(filepath, 'r') as f:
        content = f.read()
    
    result = {
        "file": os.path.basename(filepath),
        "metadata": {},
        "subject": "",
        "preview": "",
        "from_name": "",
        "sections": [],
        "cta": {},
        "signoff": {},
        "footer": {},
    }
    
    # Extract metadata
    metadata_match = re.search(r'## Metadata\n(.*?)(?=\n---|\n## Subject)', content, re.DOTALL)
    if metadata_match:
        meta_text = metadata_match.group(1)
        # Parse table rows
        for row in re.findall(r'\|\s*\*\*(.+?)\*\*\s*\|\s*(.+?)\s*\|', meta_text):
            key = row[0].strip().lower().replace(' ', '_')
            val = row[1].strip()
            result["metadata"][key] = val
    
    # Extract subject line
    subject_match = re.search(r'(?:## Subject Line|## Subject)\s*\n.*?\*\*Subject:\*\*\s*(.+?)(?:\n|$)', content, re.DOTALL)
    if subject_match:
        result["subject"] = subject_match.group(1).strip()
    
    # Extract preview text
    preview_match = re.search(r'(?:## Preview Text|## Preview)\s*\n.*?(?:\*\*Preview:\*\*)?\s*(.+?)(?:\n\*\*|\n##|\n---)', content, re.DOTALL)
    if preview_match:
        result["preview"] = preview_match.group(1).strip()
    
    # Extract from name
    from_match = re.search(r'## From Name\s*\n\s*(.+?)(?:\n|$)', content)
    if from_match:
        result["from_name"] = from_match.group(1).strip()
    
    # Extract email body sections (case-insensitive, multiple header formats)
    # Try ## Email Body first, then ### Email Body under ## EMAIL COPY, then # PART 1
    body_match = re.search(r'## (?:Email Body|EMAIL BODY|EMAIL COPY)\s*\n(?:---\s*\n)?(.*?)(?=\n## (?:Lena|Footer|PART 2)|\n---\s*\n## |\Z)', content, re.DOTALL | re.IGNORECASE)
    
    if not body_match:
        # Try ### Email Body under a parent section
        body_match = re.search(r'### (?:Email Body|EMAIL BODY)\s*\n(?:---\s*\n)?(.*?)(?=### (?:How|What|Why|Section)|\Z)', content, re.DOTALL | re.IGNORECASE)
    
    if not body_match:
        # Try # PART 1 (some files use this format)
        body_match = re.search(r'# PART 1.*?\n(.*?)(?=\n# PART 2|\Z)', content, re.DOTALL | re.IGNORECASE)
    if body_match:
        body_text = body_match.group(1)
        # Split by ## or ### headers - handle multiple formats (case-insensitive)
        section_pattern = r'#{2,3} (?:Section \d+: )?(.+?)\n(.*?)(?=#{2,3} (?:Section \d+: )?(?:Hook|Validation|Mechanism|Social Proof|Product|Guarantee|Offer|CTA|Comparison|Recognition|Body|The Plateau|What|Where|When|How)|#{2,3} (?:The Big Idea|Footer|2\.\d)|\Z)'
        sections = re.findall(section_pattern, body_text, re.DOTALL | re.IGNORECASE)
        
        # If no sections found with the complex pattern, try simpler approach
        if not sections:
            section_pattern = r'#{2,3} (.+?)\n(.*?)(?=#{2,3} |\Z)'
            sections = re.findall(section_pattern, body_text, re.DOTALL | re.IGNORECASE)
        
        # If still no sections, treat entire body as one section
        if not sections and body_text.strip():
            # Clean up the body text
            clean_body = body_text.strip()
            clean_body = re.sub(r'\*\*(.+?)\*\*', r'\1', clean_body)
            # Remove table rows
            clean_body = re.sub(r'\|.*\|', '', clean_body)
            # Remove horizontal rules
            clean_body = re.sub(r'^---+$', '', clean_body, flags=re.MULTILINE)
            # Remove empty lines
            clean_body = re.sub(r'\n\s*\n', '\n', clean_body)
            clean_body = clean_body.strip()
            
            if clean_body and len(clean_body) > 20:
                sections = [("Email Body", clean_body)]
        
        for section_name, section_content in sections:
            # Clean up section name
            clean_name = section_name.strip()
            # Remove "Section N: " prefix if present
            clean_name = re.sub(r'^Section \d+:\s*', '', clean_name)
            # Remove markdown formatting
            clean_content = re.sub(r'\*\*(.+?)\*\*', r'\1', section_content)
            clean_content = clean_content.strip()
            
            # Skip non-email sections (creative strategy, layout, etc.)
            skip_sections = ["The Big Idea", "Layout Architecture", "Custom Illustration", 
                           "Color Narrative", "Typography as Design", "Decorative Furniture",
                           "Hidden Detail", "Motion / Animation", "Level Calibration",
                           "Creative Strategy", "Visual Direction", "Design rationale"]
            if any(skip in clean_name for skip in skip_sections):
                continue
            
            # Skip empty sections
            if not clean_content or len(clean_content) < 10:
                continue
            
            result["sections"].append({
                "name": clean_name,
                "content": clean_content,
                "type": classify_section(clean_name),
            })
    
    # Extract CTA
    cta_match = re.search(r'### (?:Section \d+: )?CTA\s*\n(.*?)(?=\n##|\n---|\Z)', content, re.DOTALL)
    if cta_match:
        cta_text = cta_match.group(1)
        # Extract button text
        button_match = re.search(r'\*\*Button text:\*\*\s*["\']?(.+?)["\']?\s*(?:\(|$)', cta_text)
        if button_match:
            result["cta"]["button_text"] = button_match.group(1).strip()
        else:
            # Try to find button text in quotes
            button_match2 = re.search(r'["\'](.+?)["\']', cta_text)
            if button_match2:
                result["cta"]["button_text"] = button_match2.group(1).strip()
        
        # Extract secondary link
        secondary_match = re.search(r'\*\*Secondary.*?link.*?:\*\*\s*["\']?(.+?)["\']?\s*(?:\(|$)', cta_text)
        if secondary_match:
            result["cta"]["secondary_text"] = secondary_match.group(1).strip()
        
        # Extract CTA formula/type
        formula_match = re.search(r'\*\*CTA Formula:\*\*\s*(.+?)(?:\n|$)', cta_text)
        if formula_match:
            result["cta"]["formula"] = formula_match.group(1).strip()
        
        # Extract price anchor
        price_match = re.search(r'\*\*Price anchor:\*\*\s*(.+?)(?:\n|$)', cta_text)
        if price_match:
            result["cta"]["price_anchor"] = price_match.group(1).strip()
    
    # Extract Lena sign-off
    signoff_match = re.search(r'## Lena Sign-Off.*?\n(.*?)(?=\n## Footer|\n---|\Z)', content, re.DOTALL)
    if signoff_match:
        signoff_text = signoff_match.group(1)
        # Extract variant
        variant_match = re.search(r'\*\*Variant:\*\*\s*(.+?)(?:\n|$)', signoff_text)
        if variant_match:
            result["signoff"]["variant"] = variant_match.group(1).strip()
        
        # Extract closing words
        closing_match = re.search(r'\*\*Closing Words:\*\*\s*(.+?)(?:\n|$)', signoff_text)
        if closing_match:
            result["signoff"]["closing"] = closing_match.group(1).strip()
        
        # Extract the actual signoff text
        actual_signoff = re.sub(r'\|.*\|', '', signoff_text).strip()
        actual_signoff = re.sub(r'\*\*.*?\*\*', '', actual_signoff).strip()
        if actual_signoff:
            result["signoff"]["text"] = actual_signoff
    
    # Extract footer
    footer_match = re.search(r'## Footer\s*\n(.*?)(?=\n---|\Z)', content, re.DOTALL)
    if footer_match:
        footer_text = footer_match.group(1)
        result["footer"]["text"] = footer_text.strip()
    
    return result

def classify_section(name):
    """Classify a section by its type based on name patterns."""
    name_lower = name.lower()
    
    if any(kw in name_lower for kw in ["hook", "opener", "headline"]):
        return "hook"
    elif any(kw in name_lower for kw in ["validation", "absolution", "guilt", "empathy"]):
        return "validation"
    elif any(kw in name_lower for kw in ["mechanism", "science", "education", "definition", "how it works"]):
        return "mechanism"
    elif any(kw in name_lower for kw in ["social proof", "testimonial", "review", "story", "parent"]):
        return "social_proof"
    elif any(kw in name_lower for kw in ["product", "showcase", "reveal", "feature", "benefit"]):
        return "product"
    elif any(kw in name_lower for kw in ["guarantee", "trust", "risk", "refund"]):
        return "guarantee"
    elif any(kw in name_lower for kw in ["offer", "price", "bundle", "discount", "code"]):
        return "offer"
    elif any(kw in name_lower for kw in ["cta", "button", "close", "action"]):
        return "cta"
    elif any(kw in name_lower for kw in ["comparison", "method", "failed", "alternative"]):
        return "comparison"
    elif any(kw in name_lower for kw in ["recognition", "anchor", "whether", "if"]):
        return "recognition"
    else:
        return "body"

# ============================================================
# MESSAGING ANALYZER
# ============================================================
def analyze_messaging(copy_data):
    """Determine the messaging type based on copy content."""
    metadata = copy_data.get("metadata", {})
    
    # Determine flow
    flow = metadata.get("flow", "").lower()
    if "welcome" in flow:
        flow_type = "welcome"
    elif "cart" in flow:
        flow_type = "cart"
    elif "browse" in flow:
        flow_type = "browse"
    elif "checkout" in flow:
        flow_type = "checkout"
    elif "post-purchase" in flow or "pp" in flow:
        flow_type = "post_purchase"
    elif "winback" in flow:
        flow_type = "winback"
    elif "replenish" in flow:
        flow_type = "replenish"
    elif "referral" in flow:
        flow_type = "referral"
    elif "level detection" in flow or "level-detection" in flow:
        flow_type = "level_detection"
    else:
        flow_type = "unknown"
    
    # Determine position
    position = metadata.get("position", "")
    
    # Determine level
    level = metadata.get("level", "")
    if "l1" in level.lower() or "sarah" in level.lower():
        audience = "L1"
    elif "l2" in level.lower() or "lisa" in level.lower():
        audience = "L2"
    elif "l3" in level.lower() or "maria" in level.lower():
        audience = "L3"
    elif "gf" in level.lower() or "general" in level.lower() or "cross-level" in level.lower():
        audience = "GF"
    else:
        audience = "UNKNOWN"
    
    # Determine emotional arc
    emotional_arc = metadata.get("emotional_arc", "")
    
    # Determine hope/realism ratio
    hope_ratio = metadata.get("hope/realism_ratio", "")
    
    # Determine urgency
    if "urgency ok" in str(metadata).lower() or "pre-k" in str(metadata).lower():
        urgency = "allowed"
    elif "zero urgency" in str(metadata).lower() or "no urgency" in str(metadata).lower():
        urgency = "none"
    elif "low urgency" in str(metadata).lower():
        urgency = "low"
    else:
        urgency = "unknown"
    
    # Determine messaging type based on flow and position
    if flow_type == "welcome" and "e1" in position.lower():
        messaging_type = "awareness"
    elif flow_type == "welcome" and any(e in position.lower() for e in ["e2", "e3"]):
        messaging_type = "awareness"
    elif flow_type == "welcome" and any(e in position.lower() for e in ["e4", "e5", "e6"]):
        messaging_type = "consideration"
    elif flow_type == "welcome" and any(e in position.lower() for e in ["e7", "e8"]):
        messaging_type = "conversion"
    elif flow_type == "cart":
        messaging_type = "conversion"
    elif flow_type == "browse":
        messaging_type = "awareness"
    elif flow_type == "checkout":
        messaging_type = "conversion"
    elif flow_type == "post_purchase":
        messaging_type = "retention"
    elif flow_type == "winback":
        messaging_type = "winback"
    elif flow_type == "replenish":
        messaging_type = "winback"
    elif flow_type == "referral":
        messaging_type = "retention"
    elif flow_type == "level_detection":
        messaging_type = "awareness"
    else:
        messaging_type = "unknown"
    
    return {
        "flow_type": flow_type,
        "position": position,
        "audience": audience,
        "messaging_type": messaging_type,
        "emotional_arc": emotional_arc,
        "hope_ratio": hope_ratio,
        "urgency": urgency,
        "purpose": MESSAGING_TYPES.get(messaging_type, {}).get("purpose", "unknown"),
        "cta_force": MESSAGING_TYPES.get(messaging_type, {}).get("cta_force", "unknown"),
        "product_push": MESSAGING_TYPES.get(messaging_type, {}).get("product_push", False),
    }

# ============================================================
# JSX TEMPLATE PARSER
# ============================================================
def parse_jsx_template(jsx_dir):
    """Extract brand tokens and visual patterns from JSX files."""
    tokens = BRAND_TOKENS.copy()
    
    # Try to read tokens.js if it exists
    tokens_file = os.path.join(jsx_dir, "tokens.js")
    if os.path.exists(tokens_file):
        with open(tokens_file, 'r') as f:
            content = f.read()
            # Extract color values
            color_matches = re.findall(r'(\w+):\s*["\']([^"\']+)["\']', content)
            for name, value in color_matches:
                if value.startswith('#'):
                    tokens["colors"][name] = value
    
    # Try to read content.js if it exists
    content_file = os.path.join(jsx_dir, "content.js")
    if os.path.exists(content_file):
        with open(content_file, 'r') as f:
            content = f.read()
            # Extract flow data
            flow_matches = re.findall(r'(\w+):\s*\{([^}]+)\}', content)
            tokens["flows"] = {}
            for flow_name, flow_data in flow_matches:
                tokens["flows"][flow_name] = {"raw": flow_data}
    
    return tokens

# ============================================================
# SECTION-TO-COMPONENT MAPPER
# ============================================================
def map_sections_to_components(sections, messaging_data):
    """Map each section to potential component types."""
    mappings = []
    
    for section in sections:
        section_type = section["type"]
        content = section["content"]
        
        # Determine if section needs an image
        needs_image = False
        image_type = None
        
        if section_type == "hook":
            needs_image = True
            image_type = "lifestyle_hero"
        elif section_type == "social_proof":
            needs_image = True
            image_type = "testimonial_card"
        elif section_type == "product":
            needs_image = True
            image_type = "product_flatlay"
        elif section_type == "mechanism":
            needs_image = True
            image_type = "educational"
        elif section_type == "comparison":
            needs_image = True
            image_type = "comparison_table"
        elif section_type == "guarantee":
            needs_image = True
            image_type = "badge_seal"
        elif section_type == "validation":
            # Sometimes needs image
            needs_image = "quote" in content.lower() or "said" in content.lower()
            if needs_image:
                image_type = "quote_card"
        elif section_type == "offer":
            needs_image = True
            image_type = "product_bundle"
        
        # Determine component category based on section type
        component_categories = {
            "hook": ["hero"],
            "validation": ["body_recognition", "emotional_support"],
            "mechanism": ["body_mechanism"],
            "social_proof": ["body_social_proof", "body_recognition"],
            "product": ["product_showcase"],
            "guarantee": ["guarantee_trust"],
            "offer": ["product_showcase", "cta"],
            "cta": ["cta"],
            "comparison": ["body_mechanism", "guarantee_trust"],
            "recognition": ["body_recognition"],
            "body": ["body_recognition", "body_mechanism"],
        }
        
        possible_categories = component_categories.get(section_type, ["body_recognition"])
        
        mappings.append({
            "section_name": section["name"],
            "section_type": section_type,
            "needs_image": needs_image,
            "image_type": image_type,
            "possible_component_categories": possible_categories,
            "content_preview": content[:200] + "..." if len(content) > 200 else content,
        })
    
    return mappings

# ============================================================
# MAIN PARSER
# ============================================================
def parse_email(copy_file, jsx_dir=None):
    """Parse a single email from copy file + JSX template."""
    # Parse copy file
    copy_data = parse_copy_file(copy_file)
    
    # Analyze messaging
    messaging_data = analyze_messaging(copy_data)
    
    # Parse JSX template if provided
    jsx_tokens = None
    if jsx_dir:
        jsx_tokens = parse_jsx_template(jsx_dir)
    
    # Map sections to components
    section_mappings = map_sections_to_components(copy_data["sections"], messaging_data)
    
    # Build final output
    email_id = Path(copy_file).stem
    
    result = {
        "email_id": email_id,
        "source_file": copy_file,
        "copy": copy_data,
        "messaging": messaging_data,
        "brand_tokens": BRAND_TOKENS,
        "jsx_tokens": jsx_tokens,
        "section_mappings": section_mappings,
        "constraints": {
            "min_images": 4,
            "max_images": 6,
            "min_components": 3,
            "max_components": 6,
            "unique_components": True,
        },
    }
    
    return result

# ============================================================
# CLI
# ============================================================
if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python3 parse-email.py <copy-file.md> [--jsx-template <jsx-dir>] [--output <output.json>]")
        sys.exit(1)
    
    copy_file = sys.argv[1]
    jsx_dir = None
    output_file = None
    
    # Parse optional arguments
    i = 2
    while i < len(sys.argv):
        if sys.argv[i] == "--jsx-template" and i + 1 < len(sys.argv):
            jsx_dir = sys.argv[i + 1]
            i += 2
        elif sys.argv[i] == "--output" and i + 1 < len(sys.argv):
            output_file = sys.argv[i + 1]
            i += 2
        else:
            i += 1
    
    # Parse email
    result = parse_email(copy_file, jsx_dir)
    
    # Output
    if output_file:
        with open(output_file, 'w') as f:
            json.dump(result, f, indent=2)
        print(f"Output written to {output_file}")
    else:
        print(json.dumps(result, indent=2))
