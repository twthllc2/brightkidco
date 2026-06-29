"""
Stage 2 E7 - Welcome L1 Asset Selection (Last Call / D17)
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
# E7 — Last Call (D17)
# ============================================================
# Wireframe sections:
#   Section 1: HERO — VISUAL ANCHOR → hero-image-mechanism-diagram
#   Section 2: HOOK — MIRROR + VALIDATION → body-copy-block-validation
#   Section 3: VALIDATION + ABSOLUTION → callout-quote-highlight
#   Section 4: DEEP MECHANISM → mechanism-explanation-block
#   Section 5: MINI-WIN TESTIMONIALS → testimonial-stack-mini-wins
#   Section 6: PRODUCT INTRO → product-card-3plus3-bundle
#   Section 7: GUARANTEE → guarantee-banner-block
#   Section 8: GENTLE-URGENCY CTA — FINAL ASK → cta-button-full-width
#   Section 9: LENA SIGN-OFF — LONG VARIANT → signoff-lena-long-with-ps

E7_PICKS = {
    'Section 1: HERO - hero-image-mechanism-diagram': {
        'role': 'hero-image-mechanism-diagram',
        'intent': 'two-panel body/brain signal-bridge illustration (NEW: first mechanism-diagram hero)',
        'component': 'DEEP-16',  # The Brain-Body Bridge (used in E2)
        'component_why': "DEEP-16 'The Brain-Body Bridge' was used in E2 — but E7 explicitly says the FIRST hero in the welcome flow that uses a mechanism diagram. Re-using for visual continuity of the signal-bridge metaphor across the flow.",
        'image': None,
        'image_why': "Hero is a custom 2-panel illustration per wireframe — no specific product photo needed at this section; the diagram itself IS the visual element.",
        'image_alt': None,
    },
    'Section 2: HOOK - body-copy-block-validation': {
        'role': 'body-copy-block-validation',
        'intent': 'the mirror copy — good day/regression/perfect-week narrative',
        'component': 'LETTER-01',  # Paragraph Stack
        'component_why': "LETTER-01 'Paragraph Stack' is a clean paragraph-flow pattern — perfect for E7's mirror narrative. Variance vs LETTER-05/10/11/12 used in earlier emails.",
        'image': None,
        'image_why': None,
        'image_alt': None,
    },
    'Section 3: VALIDATION - callout-quote-highlight (He gets it but he doesnt get it)': {
        'role': 'callout-quote-highlight',
        'intent': 'L1 verbatim quote — "He gets it, but he doesn\'t get it."',
        'component': '4.5',  # Cream Callout (used in E1 Section 2)
        'component_why': "4.5 'Cream Callout' was used in E1 Section 2 — but E7's pull-quote (different message) calls for the same cream card pattern for emotional consistency.",
        'image': None,
        'image_why': None,
        'image_alt': None,
    },
    'Section 4: DEEP MECHANISM - mechanism-explanation-block': {
        'role': 'mechanism-explanation-block',
        'intent': 'deep neurological explanation — interoception signal timing + BSL',
        'component': 'DEEP-10',  # The Science Made Simple
        'component_why': "DEEP-10 'The Science Made Simple' is the catalog's mechanism-explanation-with-Spark-icon-bullets pattern — exact INTENT match for E7's deep mechanism block.",
        'image': None,
        'image_why': None,
        'image_alt': None,
    },
    'Section 5: MINI-WIN TESTIMONIALS - testimonial-stack-mini-wins': {
        'role': 'testimonial-stack-mini-wins',
        'intent': '3 L1 micro-win parent quotes (She told me BEFORE / He stayed dry / We are 90%)',
        'component': 'LETTER-11',  # Margin Notes (used in E2)
        'component_why': "LETTER-11 'Margin Notes' provides stacked pull-quote variant suitable for 3 stacked testimonials with attribution margins. Variance was attempted in E4 (SP-02), but for E7 mini-wins we re-use LETTER-11 because it serves stacked testimonials specifically.",
        'image': None,
        'image_why': None,
        'image_alt': None,
    },
    'Section 6: PRODUCT INTRO - product-card-3plus3-bundle': {
        'role': 'product-card-3plus3-bundle',
        'intent': '3+3 Bundle, $79.99, BSL 3-Layer System, free shipping',
        'component': 'PROD-2',  # Side-by-Side
        'component_why': "PROD-2 'Side-by-Side' is the catalog's product-display pattern. E7's product card needs to show what's-included (3 learning + 3 spare pairs) — fits the side-by-side visualization.",
        'image': 'flat-lay/training-pant-penguin-multicolor.jpg',
        'image_why': "Training pant flat lay, penguin multicolor — alternate product image with bright/multicolor print aligning with L1's brighter Pre-K urgency palette. Variance from E2 (fox woodland white), E3 (fox red/white), E6 (bunny hearts pink).",
        'image_alt': "Three pairs of training underwear laid flat, with penguin multicolor print, showing the 3+3 bundle contents.",
    },
    'Section 7: GUARANTEE - guarantee-banner-block': {
        'role': 'guarantee-banner-block',
        'intent': '60-day money-back guarantee, framed as judgment-not-to-the-parent',
        'component': '5',  # 60-Day Calm Promise
        'component_why': "5 '60-Day Calm Promise' is the catalog's guarantee-as-promise component — exact match for E7's standalone guarantee banner. Variance vs CTAMAX-05 used in E5/E6.",
        'image': None,
        'image_why': None,
        'image_alt': None,
    },
    'Section 8: GENTLE-URGENCY CTA - cta-button-full-width': {
        'role': 'cta-button-full-width',
        'intent': 'the closing-argument CTA — cost-per-pair frame, soft permission',
        'component': 'CTAMAX-07',  # Discount CTA
        'component_why': "CTAMAX-07 'Discount CTA' fits E7's WELCOME10 code closing — discount-toned but L1 permission-framed. Variance vs all other CTAMAX used so far.",
        'image': None,
        'image_why': None,
        'image_alt': None,
    },
    'Section 9: LENA SIGN-OFF - signoff-lena-long-with-ps': {
        'role': 'signoff-lena-long-with-ps',
        'intent': "Lena LONG sign-off for E7: 'With care,' + P.S. reply invitation",
        'component': '12.1',
        'component_why': "12.1 'Lena Signoff' is the only Lena signoff in the catalog. The visual variant (LONG vs SHORT, with P.S. reply) is determined in Stage 3/4.",
        'image': None,
        'image_why': None,
        'image_alt': None,
    },
}

ok, comp_ids, img_ids = write_email_picks('welcome-01-e7-l1', E7_PICKS)
if ok:
    apply_picks(E7_PICKS)
print(f"E7 done. Components: {comp_ids}, Images: {img_ids}")