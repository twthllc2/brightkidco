"""
Stage 2 E4 - Welcome L1 Asset Selection (Absolution / D7)
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
# E4 — Absolution / "You didn't fail" (D7)
# ============================================================
# Wireframe sections:
#   Section 1: HERO → hero-image-lifestyle (after-state L1 child 4-6 yrs)
#   Section 2: HOOK / OBSERVATION + CALLOUT → pull-quote-callout
#   Section 3: VALIDATION — "YOU DIDN'T FAIL" → validation-block-text
#   Section 4: MECHANISM → stat-highlight-box (49% reappearance)
#   Section 5: SOCIAL PROOF / TESTIMONIAL CARDS → testimonial-card-stack
#   Section 6: PRODUCT — 3-LAYER BREAKDOWN → product-layer-diagram-stack
#   Section 7: PRICING — 3+3 BUNDLE → pricing-block-card
#   Section 8: GUARANTEE / RISK REVERSAL → guarantee-block-standalone
#   Section 9: CTA — EARLY TAP (AFTER GUARANTEE) → cta-button-full-width
#   Section 10: SECONDARY PULL-QUOTE + PRE-K CLOSE → secondary-pull-quote
#   Section 11: MID + LATE CTA + LENA SIGN-OFF → secondary-text-link, signoff-lena-long

E4_PICKS = {
    'Section 1: HERO - hero-image-lifestyle (after-state child)': {
        'role': 'hero-image-lifestyle',
        'intent': 'shows the "after" L1 child, 4-6 yrs, active, confident — mirror for Sarah',
        'component': 'HERO-13',  # Scientific Hook
        'component_why': "HERO-13 'Scientific Hook' centers a research-backed message with warm gradient — appropriate for E4's absolution moment that grounds the reframe in research. Variance vs HERO-5 (E1), HERO-18 (E3).",
        'image': 'lifestyle/toddler-playing-train-moon-cloud-blue.png',
        'image_why': "Toddler actively playing with a wooden train, moon-cloud blue print — confident forward motion, post-training hopeful state. Matches INTENT of 'after' L1 child.",
        'image_alt': "Verbal 4-year-old playing with a wooden train set, blue moon-and-cloud print, confident posture in a real home.",
    },
    'Section 2: HOOK - pull-quote-callout': {
        'role': 'pull-quote-callout',
        'intent': 'first parent quote that opens the absolution moment',
        'component': 'DEEP-13',  # The Reverse Testimonial
        'component_why': "DEEP-13 'The Reverse Testimonial' is a pull-quote testimonial pattern — appropriate for E4's parent quote opener. Audience L1.",
        'image': None,
        'image_why': None,
        'image_alt': None,
    },
    'Section 3: VALIDATION - validation-block-text': {
        'role': 'validation-block-text',
        'intent': 'validates that sticker charts, timer sits, naked weekends did not fail',
        'component': 'LETTER-05',  # Manifesto Line
        'component_why': "LETTER-05 'Manifesto Line' provides a single bold-statement validation pattern — perfect for 'You didn't fail. You solved the wrong problem.' Variance vs LETTER-10/11/12 used in earlier emails.",
        'image': None,
        'image_why': None,
        'image_alt': None,
    },
    'Section 4: MECHANISM - stat-highlight-box (49% reappearance)': {
        'role': 'stat-highlight-box',
        'intent': '49% SPARK reappearance (now familiar, second pass)',
        'component': 'EDU-7',  # Did You Know
        'component_why': "EDU-7 'Did You Know' is a stat-with-context pattern suitable for the 49% reappearance. Different from E1's M10 (Stat Block) and E3's 32.3 (Highlight Box) — adds variance.",
        'image': None,
        'image_why': None,
        'image_alt': None,
    },
    'Section 5: SOCIAL PROOF - testimonial-card-stack': {
        'role': 'testimonial-card-stack',
        'intent': 'three stacked testimonial cards showing realistic L1 wins',
        'component': 'SP-02',  # SP2 — Review Quote Card
        'component_why': "SP-02 'Review Quote Card' is the catalog's review/testimonial card with stars + attribution. E4 has social proof focus — appropriate.",
        'image': None,
        'image_why': None,
        'image_alt': None,
    },
    'Section 6: PRODUCT - product-layer-diagram-stack': {
        'role': 'product-layer-diagram-stack',
        'intent': 'stacked layer breakdown (Layer 1 inner signal / Layer 2 / Layer 3)',
        'component': 'PROD-4',  # Cross-Section
        'component_why': "PROD-4 'Cross-Section' is the catalog's layered-cutaway diagram — perfect for the 3-layer BSL breakdown in E4. Variance vs PROD-3 used in E2/E3.",
        'image': None,
        'image_why': None,
        'image_alt': None,
    },
    'Section 7: PRICING - pricing-block-card': {
        'role': 'pricing-block-card',
        'intent': '3+3 Bundle, 6 pairs, $79.99, free shipping, $13.33/pair math',
        'component': 'REV-08.4',  # REV-08.4 — Bundle Value Recap (73% Stat)
        'component_why': "REV-08.4 'Bundle Value Recap' is the bundle-value anchor with stat — perfect for the $13.33/pair math reframe. Variance vs REV-04.2 (Savings Highlight Header in E3).",
        'image': None,
        'image_why': None,
        'image_alt': None,
    },
    'Section 8: GUARANTEE - guarantee-block-standalone': {
        'role': 'guarantee-block-standalone',
        'intent': 'standalone 60-day guarantee, judgment-toned framing',
        'component': 'CTADEEP-02',  # The Risk Reversal
        'component_why': "CTADEEP-02 'The Risk Reversal' is the catalog's guarantee-as-CTA pattern — combines guarantee framing with soft conversion. Audience L1.",
        'image': None,
        'image_why': None,
        'image_alt': None,
    },
    'Section 9: EARLY CTA - cta-button-full-width (after guarantee)': {
        'role': 'cta-button-full-width',
        'intent': 'CTA after guarantee — soft permission framing',
        'component': 'CTAMAX-04',  # Soft CTA
        'component_why': "CTAMAX-04 'Soft CTA' matches E4's permission-toned early CTA after the guarantee. Variance vs CTAMAX-01 (E1), CTAMAX-06 (E3).",
        'image': None,
        'image_why': None,
        'image_alt': None,
    },
    'Section 10: SECONDARY PULL-QUOTE - secondary-pull-quote': {
        'role': 'secondary-pull-quote',
        'intent': 're-anchors the realistic-timeline message',
        'component': 'DEEP-19',  # The Signal Analogy
        'component_why': "DEEP-19 'The Signal Analogy' uses analogy framing — appropriate for the secondary pull-quote about timeline reality. Variance vs DEEP-13 (Section 2).",
        'image': None,
        'image_why': None,
        'image_alt': None,
    },
    'Section 11: LENA SIGN-OFF - signoff-lena-short (With understanding)': {
        'role': 'signoff-lena-short',
        'intent': "Lena SHORT sign-off for E4: 'With understanding,'",
        'component': '12.1',
        'component_why': "12.1 'Lena Signoff' — same component, same closing word ('With understanding,' per E3-E5 progression).",
        'image': None,
        'image_why': None,
        'image_alt': None,
    },
}

ok, comp_ids, img_ids = write_email_picks('welcome-01-e4-l1', E4_PICKS)
if ok:
    apply_picks(E4_PICKS)
print(f"E4 done. Components: {comp_ids}, Images: {img_ids}")