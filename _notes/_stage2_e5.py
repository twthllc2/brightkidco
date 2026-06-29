"""
Stage 2 E5 - Welcome L1 Asset Selection (Pre-K Math / D10)
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
# E5 — Pre-K Math / 3-Layer Education (D10)
# ============================================================
# Wireframe sections:
#   Section 1: HERO → hero-image-lifestyle (parent + child warm moment)
#   Section 2: HOOK — OBJECTION NAMING → numbered-list-callout
#   Section 3: VALIDATION — SCIENCE ANCHOR → science-callout-box
#   Section 4: REFRAME — MECHANISM BRIDGE → signal-gap-diagram
#   Section 5: SOCIAL PROOF — MINI-WIN → pull-quote-block
#   Section 6: PRODUCT — 3-LAYER SYSTEM EDUCATION → three-layer-stack-diagram
#   Section 7: GUARANTEE — RISK REVERSAL → guarantee-badge-callout
#   Section 8: CTA — PRIMARY + P.S. → cta-button-full-width

E5_PICKS = {
    'Section 1: HERO - hero-image-lifestyle (parent+child)': {
        'role': 'hero-image-lifestyle',
        'intent': 'shows parent + child in warm candid moment — Pre-K readiness frame',
        'component': 'HERO-3',  # Permission Open
        'component_why': "HERO-3 'Permission Open' provides the warm, permission-toned opening suitable for E5's parent+child frame. Variance vs HERO-5/13/18 used in E1/E3/E4.",
        'image': 'lifestyle/founders-holding-pants-yellow-watermelon.png',
        'image_why': "Founders holding product (a mom + child warm moment with the product) — fits E5's parent+child warm candid requirement. Different from other toddler-only lifestyle images used in E1-E4.",
        'image_alt': "Mother and child in a warm home moment, holding a pair of training pants with a yellow watermelon print, hopeful posture.",
    },
    'Section 2: HOOK - numbered-list-callout': {
        'role': 'numbered-list-callout',
        'intent': 'anchors the "three methods" frame for the L1 reader',
        'component': '7.2',  # Numbered Method Card
        'component_why': "7.2 'Numbered Method Card' is the catalog's exact numbered-method-list pattern — perfect for E5's three-method anchor. Audience L1.",
        'image': None,
        'image_why': None,
        'image_alt': None,
    },
    'Section 3: VALIDATION - science-callout-box': {
        'role': 'science-callout-box',
        'intent': 'hosts the Nicholson et al. (2019) citation that reframes behavior → signal',
        'component': 'EDU-11',  # Science Citation
        'component_why': "EDU-11 'Science Citation' is the catalog's science-citation pattern — exact match for E5's Nicholson et al. (2019) citation block.",
        'image': None,
        'image_why': None,
        'image_alt': None,
    },
    'Section 4: REFRAME - signal-gap-diagram': {
        'role': 'signal-gap-diagram',
        'intent': 'shows the interoception gap (signal arrives too late)',
        'component': 'EDU-8',  # Mechanism Diagram
        'component_why': "EDU-8 'Mechanism Diagram' is the catalog's mechanism diagram component — appropriate for the signal-gap visual. Variance vs DEEP-16 used in E2.",
        'image': None,
        'image_why': None,
        'image_alt': None,
    },
    'Section 5: SOCIAL PROOF - pull-quote-block': {
        'role': 'pull-quote-block',
        'intent': 'single L1 mini-win testimonial',
        'component': 'DEEP-22',  # The Milestone Reframe
        'component_why': "DEEP-22 'The Milestone Reframe' is a milestone-anchor pull-quote pattern — fits E5's mini-win testimonial framing. Variance vs DEEP-13 (E4), DEEP-19 (E4).",
        'image': None,
        'image_why': None,
        'image_alt': None,
    },
    'Section 6: PRODUCT - three-layer-stack-diagram': {
        'role': 'three-layer-stack-diagram',
        'intent': 'visualizes the 3-Layer System as three stacked blocks',
        'component': 'PROD-7',  # Comparison Table
        'component_why': "PROD-7 'Comparison Table' is the catalog's structured comparison pattern — appropriate for the 3-layer stack visualization (Layer 1 / Layer 2 / Layer 3). Variance vs PROD-3 (E2/E3), PROD-4 (E4).",
        'image': None,
        'image_why': None,
        'image_alt': None,
    },
    'Section 7: GUARANTEE - guarantee-badge-callout': {
        'role': 'guarantee-badge-callout',
        'intent': 'standalone guarantee section, highest-trust moment',
        'component': 'CTAMAX-05',  # Guarantee CTA
        'component_why': "CTAMAX-05 'Guarantee CTA' is the catalog's guarantee-toned CTA — appropriate for E5's standalone guarantee moment.",
        'image': None,
        'image_why': None,
        'image_alt': None,
    },
    'Section 8: PRIMARY CTA - cta-button-full-width': {
        'role': 'cta-button-full-width',
        'intent': 'Pre-K math primary CTA — full-width green, permission-toned',
        'component': 'CTAMAX-09',  # Curiosity CTA
        'component_why': "CTAMAX-09 'Curiosity CTA' is the catalog's curiosity-toned CTA — fits E5's 'see the math' Pre-K framing. Variance vs CTAMAX-01/04/06 used in earlier emails.",
        'image': None,
        'image_why': None,
        'image_alt': None,
    },
    'Signoff: signoff-lena-short (With understanding)': {
        'role': 'signoff-lena-short',
        'intent': "Lena SHORT sign-off for E5: 'With understanding,'",
        'component': '12.1',
        'component_why': "12.1 'Lena Signoff' — same component for E3-E5 progression.",
        'image': None,
        'image_why': None,
        'image_alt': None,
    },
}

ok, comp_ids, img_ids = write_email_picks('welcome-01-e5-l1', E5_PICKS)
if ok:
    apply_picks(E5_PICKS)
print(f"E5 done. Components: {comp_ids}, Images: {img_ids}")