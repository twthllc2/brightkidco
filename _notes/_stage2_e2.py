"""
Stage 2 E2-E8 - Welcome L1 Asset Selection
Defensive version: re-reads trackers each call, accounts for parallel sessions.
"""
import json
from pathlib import Path

ROOT = Path('/root/projects/brightkidco')
CATALOG_PATH = ROOT / 'outputs/email-assets/component-catalog.json'
COMP_USAGE_PATH = ROOT / '_notes/component-usage.json'
IMG_USAGE_PATH = ROOT / '_notes/image-usage.json'
WELCOME_DIR = ROOT / 'outputs/copy/welcome'

with open(CATALOG_PATH) as f:
    catalog = json.load(f)
COMPS = catalog['components']

def load_json_safe(path):
    """Load JSON, return empty if file is corrupt (parallel write in progress)."""
    try:
        with open(path) as f:
            return json.load(f)
    except json.JSONDecodeError:
        return {"components": {}, "images": {}}

def comp_count(comp_usage, cid):
    return comp_usage.get('components', {}).get(cid, 0)

def img_count(img_usage, filename):
    return img_usage.get('images', {}).get(filename, 0)

def inc_comp(comp_usage, cid):
    comp_usage.setdefault('components', {})[cid] = comp_count(comp_usage, cid) + 1

def inc_img(img_usage, filename):
    img_usage.setdefault('images', {})[filename] = img_count(img_usage, filename) + 1

def write_email_picks(email_id, picks_dict):
    """Append STAGE 2 PICKS block to copy file."""
    email_file = WELCOME_DIR / f'{email_id}.md'
    with open(email_file) as f:
        content = f.read()

    # Check if STAGE 2 PICKS already present (idempotency)
    if '## STAGE 2 PICKS' in content:
        print(f"  SKIP: {email_id} already has STAGE 2 PICKS")
        return False, [], []

    stage2_block = f"\n## STAGE 2 PICKS — {email_id}\n\n"
    for sec_name, pick in picks_dict.items():
        stage2_block += f"### {sec_name}\n"
        stage2_block += f"- ROLE slot: {pick['role']}\n"
        stage2_block += f"- INTENT: {pick['intent']}\n"
        stage2_block += f"- COMPONENT PICKED: {pick['component']}\n"
        stage2_block += f"  - Catalog entry: position varies, audience=[L1,...]\n"
        stage2_block += f"  - Current usage: {comp_count(load_json_safe(COMP_USAGE_PATH), pick['component'])}/8\n"
        stage2_block += f"  - WHY: {pick['component_why']}\n"
        if pick['image']:
            stage2_block += f"- IMAGE PICKED: {pick['image']}\n"
            stage2_block += f"  - Alt text: {pick['image_alt']}\n"
            stage2_block += f"  - Current usage: {img_count(load_json_safe(IMG_USAGE_PATH), pick['image'])}/25\n"
            stage2_block += f"  - WHY: {pick['image_why']}\n"
        else:
            stage2_block += f"- IMAGE PICKED: none (text-only component)\n"
        stage2_block += "\n"

    stage2_block += "### Tracker updates\n"
    comp_ids = [p['component'] for p in picks_dict.values()]
    img_ids = [p['image'] for p in picks_dict.values() if p['image']]
    stage2_block += f"- component-usage.json: incremented {comp_ids}\n"
    stage2_block += f"- image-usage.json: incremented {img_ids}\n"

    with open(email_file, 'a') as f:
        f.write(stage2_block)
    return True, comp_ids, img_ids


def apply_picks(picks_dict):
    """Update trackers with picks. Read-modify-write."""
    comp_usage = load_json_safe(COMP_USAGE_PATH)
    img_usage = load_json_safe(IMG_USAGE_PATH)
    for p in picks_dict.values():
        inc_comp(comp_usage, p['component'])
        if p['image']:
            inc_img(img_usage, p['image'])
    # Write back
    comp_usage['version'] = '1.0'
    comp_usage['last_updated'] = '2026-06-29'
    img_usage['version'] = '1.0'
    img_usage['last_updated'] = '2026-06-29'
    with open(COMP_USAGE_PATH, 'w') as f:
        json.dump(comp_usage, f, indent=2)
    with open(IMG_USAGE_PATH, 'w') as f:
        json.dump(img_usage, f, indent=2)

# ============================================================
# E2 — Tipping Point / Mechanism Click (D1)
# ============================================================
E2_PICKS = {
    'Section 1: HOOK - callout-quote-highlight (failed methods)': {
        'role': 'callout-quote-highlight (variant)',
        'intent': 'lists failed methods Sarah recognizes (Oh Crap, sticker charts, timer sits)',
        'component': '9.2',
        'component_why': "9.2 'Sticker Reasons' is a recognition-callout pattern built for listing named items — perfect for naming failed methods without emotional bullet damage. Variance vs E1's cream callout.",
        'image': None,
        'image_why': None,
        'image_alt': None,
    },
    'Section 2: VALIDATION - callout-quote-highlight (pull-quote)': {
        'role': 'callout-quote-highlight (PULL-QUOTE variant)',
        'intent': 'the validation anchor — "You didn\'t fail. The methods did."',
        'component': '4.4',
        'component_why': "4.4 'Insight / Mint Block' uses mint background #E8F5EC, matching L1 spec for mechanism callouts (Mint #DBFFCD). Pull-quote with eyebrow + insight structure.",
        'image': None,
        'image_why': None,
        'image_alt': None,
    },
    'Section 3: MECHANISM DEEP - mechanism-diagram-3-frame': {
        'role': 'mechanism-diagram-3-frame',
        'intent': 'custom 3-frame body/brain signal-bridge illustration',
        'component': 'DEEP-16',
        'component_why': "DEEP-16 'The Brain-Body Bridge' is a mechanism diagram specifically for interoception signal timing — exact INTENT match. Audience L1.",
        'image': None,
        'image_why': None,
        'image_alt': None,
    },
    'Section 4: SOCIAL PROOF - callout-quote-highlight (x3 stacked)': {
        'role': 'callout-quote-highlight (x3 stacked, testimonial)',
        'intent': 'three L1 parent quotes about timing/inconsistency',
        'component': 'LETTER-11',
        'component_why': "LETTER-11 'Margin Notes' provides stacked pull-quote variant suitable for 3 stacked testimonials with attribution margins. Variance vs earlier callouts.",
        'image': None,
        'image_why': None,
        'image_alt': None,
    },
    'Section 5: PRODUCT INTRO - product-intro-callout (3-layer breakdown)': {
        'role': 'product-intro-callout (3-layer breakdown box)',
        'intent': 'presents 3-layer product system as labeled callout',
        'component': 'PROD-3',
        'component_why': "PROD-3 'Layer Breakdown' is the catalog's exact 3-layer product breakdown component. Audience L1, messaging=product. Direct match.",
        'image': 'flat-lay/training-pant-fox-woodland-white.jpg',
        'image_why': "Training pant flat lay, fox woodland white — fits product introduction of the 3-layer system without being overly colorful; aligns with L1 warm/cream palette.",
        'image_alt': "Three pairs of training underwear laid flat, white with fox-woodland print, showing the 3-layer product system.",
    },
    'Signoff: signoff-lena-short': {
        'role': 'signoff-lena-short',
        'intent': "Lena SHORT sign-off for E2: 'Talk soon,'",
        'component': '12.1',
        'component_why': "12.1 'Lena Signoff' is the catalog's Lena signoff component. Used for E1 (signoff = 'Talk soon,' per E1-E2 progression).",
        'image': None,
        'image_why': None,
        'image_alt': None,
    },
}

ok, comp_ids, img_ids = write_email_picks('welcome-01-e2-l1', E2_PICKS)
if ok:
    apply_picks(E2_PICKS)
print(f"E2 done. Components: {comp_ids}, Images: {img_ids}")