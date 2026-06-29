"""
Stage 2 E3 - Welcome L1 Asset Selection
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

def load_json_safe(path):
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
    email_file = WELCOME_DIR / f'{email_id}.md'
    with open(email_file) as f:
        content = f.read()
    if '## STAGE 2 PICKS' in content:
        print(f"  SKIP: {email_id} already has STAGE 2 PICKS")
        return False, [], []

    cu = load_json_safe(COMP_USAGE_PATH)
    iu = load_json_safe(IMG_USAGE_PATH)

    stage2_block = f"\n## STAGE 2 PICKS — {email_id}\n\n"
    for sec_name, pick in picks_dict.items():
        stage2_block += f"### {sec_name}\n"
        stage2_block += f"- ROLE slot: {pick['role']}\n"
        stage2_block += f"- INTENT: {pick['intent']}\n"
        stage2_block += f"- COMPONENT PICKED: {pick['component']}\n"
        stage2_block += f"  - Catalog entry: position varies, audience=[L1,...]\n"
        stage2_block += f"  - Current usage: {comp_count(cu, pick['component'])}/8\n"
        stage2_block += f"  - WHY: {pick['component_why']}\n"
        if pick['image']:
            stage2_block += f"- IMAGE PICKED: {pick['image']}\n"
            stage2_block += f"  - Alt text: {pick['image_alt']}\n"
            stage2_block += f"  - Current usage: {img_count(iu, pick['image'])}/25\n"
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
    cu = load_json_safe(COMP_USAGE_PATH)
    iu = load_json_safe(IMG_USAGE_PATH)
    for p in picks_dict.values():
        inc_comp(cu, p['component'])
        if p['image']:
            inc_img(iu, p['image'])
    cu['version'] = '1.0'
    cu['last_updated'] = '2026-06-29'
    iu['version'] = '1.0'
    iu['last_updated'] = '2026-06-29'
    with open(COMP_USAGE_PATH, 'w') as f:
        json.dump(cu, f, indent=2)
    with open(IMG_USAGE_PATH, 'w') as f:
        json.dump(iu, f, indent=2)


# ============================================================
# E3 — First Hard CTA / 49% stat / 3+3 bundle (D3)
# ============================================================
# Wireframe sections:
#   Section 1: HERO + PRE-K CALENDAR ANCHOR → hero-image-lifestyle
#   Section 2: VALIDATION — FAILED METHODS LIST → bulleted-failed-methods-list
#   Section 3: MECHANISM — 49% STAT CALLOUT → stat-highlight-box (49% mint)
#   Section 4: MECHANISM — INTEROCEPTION REFRAME → explanatory-paragraph-block
#   Section 5: MECHANISM — BSL PRODUCT BRIDGE → product-feature-callout
#   Section 6: SOCIAL PROOF — TESTIMONIAL MOMENT → callout-quote-highlight
#   Section 7: PRODUCT INTRODUCTION — 3 LAYERS → product-image-three-layer
#   Section 8: PRICING BOX — 3+3 BESTSELLER + GUARANTEE → pricing-box-callout
#
# L1 spec: cream + mint, 49% stat is critical anchor, "With understanding," signoff,
# first hard CTA allowed.

E3_PICKS = {
    'Section 1: HERO - hero-image-lifestyle': {
        'role': 'hero-image-lifestyle',
        'intent': 'verbal 3-5 yr in active forward motion, Pre-K calendar context',
        'component': 'HERO-18',  # Guilt Absolution
        'component_why': "HERO-18 'Guilt Absolution' is the catalog's guilt-absolution hero — appropriate for E3 which transitions from E1-E2 mirror into action. Variance vs HERO-5 used in E1.",
        'image': 'lifestyle/toddler-backpack-moon-cloud-blue.png',
        'image_why': "Toddler with backpack — Pre-K context (the calendar driver for E3), blue moon cloud print, hopeful posture. Active forward motion matches INTENT.",
        'image_alt': "Verbal 3-year-old wearing a small backpack with a moon and cloud print, hopeful posture, ready for Pre-K.",
    },
    'Section 2: VALIDATION - bulleted-failed-methods-list': {
        'role': 'bulleted-failed-methods-list',
        'intent': 'catalogs the methods Sarah has tried (sticker charts, timed sits, etc.)',
        'component': 'EDU-3',  # Checklist
        'component_why': "EDU-3 'Checklist' is a clean list pattern for failed methods. Em-dash separator (per L1 brand spec) replaces bullets. L1-compatible.",
        'image': None,
        'image_why': None,
        'image_alt': None,
    },
    'Section 3: MECHANISM - stat-highlight-box (49% mint)': {
        'role': 'stat-highlight-box',
        'intent': '49% SPARK stat as visual anchor — Mint callout, yellow accent',
        'component': '32.3',  # Highlight Box (Bordered Insight)
        'component_why': "32.3 'Highlight Box' uses mint background #EAF6F2, matching L1 Mint #DBFFCD. Has bold insight typography — supports the 49% stat as a clear visual moment. Variance vs E1's M10.",
        'image': None,
        'image_why': None,
        'image_alt': None,
    },
    'Section 4: MECHANISM - explanatory-paragraph-block': {
        'role': 'explanatory-paragraph-block',
        'intent': 'explains why everything she tried felt like it should work but did not',
        'component': 'LETTER-12',  # Fragmented Text
        'component_why': "LETTER-12 'Fragmented Text' provides paragraph-flow-with-emphasis pattern suitable for the explanation block. Variance vs LETTER-01 / LETTER-11 used in E1-E2.",
        'image': None,
        'image_why': None,
        'image_alt': None,
    },
    'Section 5: MECHANISM - product-feature-callout': {
        'role': 'product-feature-callout',
        'intent': 'introduces the 3-layer BSL system for the first time',
        'component': 'PROD-1',  # Full Showcase
        'component_why': "PROD-1 'Full Showcase' is the full product showcase — appropriate when the product is being introduced for the first time (E3 is the first hard-CTA email). Audience L1.",
        'image': 'flat-lay/training-pant-fox-red-white.jpg',
        'image_why': "Training pant flat lay, fox red/white — alternate product image with red accent aligning with L1's brighter palette (Pre-K urgency).",
        'image_alt': "Three pairs of training underwear laid flat, white with red fox print, showing the 3-layer Body-Signal Learning product system.",
    },
    'Section 6: SOCIAL PROOF - callout-quote-highlight': {
        'role': 'callout-quote-highlight',
        'intent': 'L1-anchor parent quote — the verbatim line Sarah recognizes',
        'component': 'OBJ-15.4',  # OBJ-15.4 — Lena Voice (Lena Closes Objection)
        'component_why': "OBJ-15.4 is a Lena-voice callout suitable for an emotional anchor quote. Provides L1 voice variety vs the recognition callouts used in E1-E2.",
        'image': None,
        'image_why': None,
        'image_alt': None,
    },
    'Section 7: PRODUCT INTRODUCTION - product-image-three-layer': {
        'role': 'product-image-three-layer',
        'intent': 'shows the 3+3 bundle product image with the 3-layer breakdown',
        'component': 'PROD-3',  # Layer Breakdown
        'component_why': "PROD-3 'Layer Breakdown' is the catalog's 3-layer product breakdown. Used in E2 also, but E3 needs the same component for a re-mention of layers + 3+3 bundle.",
        'image': None,
        'image_why': None,
        'image_alt': None,
    },
    'Section 8: PRICING BOX - pricing-box-callout': {
        'role': 'pricing-box-callout',
        'intent': 'the first hard CTA in the flow — pricing box with 3+3 bundle',
        'component': 'REV-04.2',  # REV-04.2 — Savings Highlight Header (Spending Anchor)
        'component_why': "REV-04.2 is a savings-highlight callout suited for the 3+3 bundle pricing reveal ($13.33/pair anchor). Includes pricing-anchor framing.",
        'image': None,
        'image_why': None,
        'image_alt': None,
    },
    'Section 9: PRIMARY CTA - cta-button-full-width': {
        'role': 'cta-button-full-width',
        'intent': 'first hard CTA, full-width green, calendar-anchored',
        'component': 'CTAMAX-06',  # Bundle CTA
        'component_why': "CTAMAX-06 'Bundle CTA' is the bundle-specific CTA — perfect for the 3+3 bundle reveal moment in E3. Variance vs E1's CTAMAX-01 (Primary).",
        'image': None,
        'image_why': None,
        'image_alt': None,
    },
    'Signoff: signoff-lena-short (With understanding)': {
        'role': 'signoff-lena-short',
        'intent': "Lena SHORT sign-off for E3: 'With understanding,' (E3-E5 progression)",
        'component': '12.1',
        'component_why': "12.1 'Lena Signoff' is the catalog's Lena signoff component. Same component, different closing words ('With understanding,' vs 'Talk soon,').",
        'image': None,
        'image_why': None,
        'image_alt': None,
    },
}

ok, comp_ids, img_ids = write_email_picks('welcome-01-e3-l1', E3_PICKS)
if ok:
    apply_picks(E3_PICKS)
print(f"E3 done. Components: {comp_ids}, Images: {img_ids}")