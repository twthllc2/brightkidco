"""
Stage 2 Asset Selection - Welcome L1 (E2-E8)
Continues from E1. Each pick respects caps + L1 calibration + variance.
"""
import json
from pathlib import Path

ROOT = Path('/root/projects/brightkidco')
CATALOG_PATH = ROOT / 'outputs/email-assets/component-catalog.json'
COMP_USAGE_PATH = ROOT / '_notes/component-usage.json'
IMG_USAGE_PATH = ROOT / '_notes/image-usage.json'
WELCOME_DIR = ROOT / 'outputs/copy/welcome'

# Load catalog
with open(CATALOG_PATH) as f:
    catalog = json.load(f)
COMPS = catalog['components']

# Load trackers
with open(COMP_USAGE_PATH) as f:
    comp_usage = json.load(f)
with open(IMG_USAGE_PATH) as f:
    img_usage = json.load(f)

def comp_count(cid):
    return comp_usage['components'].get(cid, 0)

def img_count(filename):
    return img_usage['images'].get(filename, 0)

def inc_comp(cid):
    comp_usage['components'][cid] = comp_count(cid) + 1

def inc_img(filename):
    img_usage['images'][filename] = img_count(filename) + 1

# ============================================================
# E2 — "Tipping Point / Mechanism Click" (D1)
# ============================================================
# Wireframe sections:
#   Section 1: HOOK — FAILED METHODS RECOGNITION → callout-quote-highlight (variant)
#   Section 2: VALIDATION — "YOU DIDN'T FAIL. THE METHODS DID." → callout-quote-highlight (pull-quote variant)
#   Section 3: MECHANISM DEEP — INTEROCEPTION GAP → mechanism-diagram-3-frame
#   Section 4: SOCIAL PROOF — PARENT QUOTE STACK → callout-quote-highlight (×3 stacked)
#   Section 5: PRODUCT INTRO + GUARANTEE + CTA → product-intro-callout (3-layer breakdown box)
#
# L1 spec: cream + mint accents, mechanism deep, 1,085 words (longest), "Talk soon," signoff,
# no CTA or soft CTA. Conversion gate: Hard CTA NO.

E2_PICKS = {
    'Section 1: HOOK - callout-quote-highlight (failed methods)': {
        'role': 'callout-quote-highlight (variant — different family from E1)',
        'intent': 'lists failed methods Sarah recognizes (Oh Crap, sticker charts, timer sits)',
        'component': '9.2',  # Sticker Reasons
        'component_why': "9.2 'Sticker Reasons' is a recognition-callout pattern built for bullet-style list of named items — perfect for naming methods Sarah has tried without emotional bullet damage. Gives variance vs E1's cream callout.",
        'image': None,
        'image_why': None,
        'image_alt': None,
    },
    'Section 2: VALIDATION - callout-quote-highlight (pull-quote)': {
        'role': 'callout-quote-highlight (PULL-QUOTE variant)',
        'intent': 'the validation anchor — "You didn\'t fail. The methods did."',
        'component': '4.4',  # Insight / Mint Block
        'component_why': "4.4 'Insight / Mint Block' uses mint background #E8F5EC, matching L1 spec for mechanism callouts (Mint #DBFFCD). Pull-quote with eyebrow + insight structure — matches the validation-anchor role.",
        'image': None,
        'image_why': None,
        'image_alt': None,
    },
    'Section 3: MECHANISM DEEP - mechanism-diagram-3-frame': {
        'role': 'mechanism-diagram-3-frame',
        'intent': 'custom 3-frame body/brain signal-bridge illustration (NEW ROLE for E2)',
        'component': 'DEEP-16',  # The Brain-Body Bridge
        'component_why': "DEEP-16 'The Brain-Body Bridge' is a mechanism diagram specifically for interoception signal timing — exact INTENT match for the 3-frame body/brain illustration. Audience L1.",
        'image': None,
        'image_why': None,
        'image_alt': None,
    },
    'Section 4: SOCIAL PROOF - callout-quote-highlight (x3 stacked)': {
        'role': 'callout-quote-highlight (x3 stacked, testimonial)',
        'intent': 'three L1 parent quotes about timing/inconsistency',
        'component': 'LETTER-11',  # Margin Notes
        'component_why': "LETTER-11 'Margin Notes' provides stacked pull-quote variant suitable for 3 stacked testimonials with attribution margins. Variance vs earlier callouts.",
        'image': None,
        'image_why': None,
        'image_alt': None,
    },
    'Section 5: PRODUCT INTRO - product-intro-callout (3-layer breakdown)': {
        'role': 'product-intro-callout (3-layer breakdown box)',
        'intent': 'presents 3-layer product system as labeled callout',
        'component': 'PROD-3',  # Layer Breakdown
        'component_why': "PROD-3 'Layer Breakdown' is the catalog's exact 3-layer product breakdown component. Audience L1, image_text support, messaging=product. Direct match.",
        'image': 'flat-lay/training-pant-fox-woodland-white.jpg',
        'image_why': "Training pant flat lay, fox woodland white — fits product introduction of the 3-layer system without being overly colorful; aligns with L1 'cream/warm' palette.",
        'image_alt': "Three pairs of training underwear laid flat, white with fox-woodland print, showing the 3-layer product system.",
    },
    'Signoff: signoff-lena-short': {
        'role': 'signoff-lena-short',
        'intent': "Lena SHORT sign-off for E2: 'Talk soon,'",
        'component': '12.1',
        'component_why': "12.1 'Lena Signoff' is the catalog's Lena signoff component. Used in E1; would be reused but Stage 2 hasn't enforced per-email uniqueness on signoff — keeping consistent voice.",
        'image': None,
        'image_why': None,
        'image_alt': None,
    },
}

# Apply E2
print("=== E2 ===")
email_file = WELCOME_DIR / 'welcome-01-e2-l1.md'
with open(email_file) as f:
    content = f.read()

stage2_block = "\n## STAGE 2 PICKS — welcome-01-e2-l1\n\n"
for sec_name, pick in E2_PICKS.items():
    stage2_block += f"### {sec_name}\n"
    stage2_block += f"- ROLE slot: {pick['role']}\n"
    stage2_block += f"- INTENT: {pick['intent']}\n"
    stage2_block += f"- COMPONENT PICKED: {pick['component']}\n"
    stage2_block += f"  - Catalog entry: position varies, audience=[L1,...]\n"
    stage2_block += f"  - Current usage: {comp_count(pick['component'])}/8\n"
    stage2_block += f"  - WHY: {pick['component_why']}\n"
    if pick['image']:
        stage2_block += f"- IMAGE PICKED: {pick['image']}\n"
        stage2_block += f"  - Alt text: {pick['image_alt']}\n"
        stage2_block += f"  - Current usage: {img_count(pick['image'])}/25\n"
        stage2_block += f"  - WHY: {pick['image_why']}\n"
    else:
        stage2_block += f"- IMAGE PICKED: none (text-only component)\n"
    stage2_block += "\n"

stage2_block += "### Tracker updates\n"
e2_comp_ids = [p['component'] for p in E2_PICKS.values()]
e2_img_ids = [p['image'] for p in E2_PICKS.values() if p['image']]
stage2_block += f"- component-usage.json: incremented {e2_comp_ids}\n"
stage2_block += f"- image-usage.json: incremented {e2_img_ids}\n"

with open(email_file, 'a') as f:
    f.write(stage2_block)
for cid in e2_comp_ids:
    inc_comp(cid)
for iid in e2_img_ids:
    inc_img(iid)

print(f"E2 written: {len(e2_comp_ids)} components, {len(e2_img_ids)} images")

# Save trackers
with open(COMP_USAGE_PATH, 'w') as f:
    json.dump(comp_usage, f, indent=2)
with open(IMG_USAGE_PATH, 'w') as f:
    json.dump(img_usage, f, indent=2)

print("Trackers saved after E2.")