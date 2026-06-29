"""
Stage 2 E8 - Welcome L1 Asset Selection (Series Finale / D21)
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
# E8 — Series Finale / Lena farewell / Door-open (D21)
# ============================================================
# Wireframe sections:
#   Section 1: HERO — LENA-CENTERED → hero-image-lena-or-warm-door-metaphor
#   Section 2: VALIDATION + RECAP → recap-three-pillar-list
#   Section 3: SOCIAL PROOF — CONDENSED → quote-stack-panel
#   Section 4: PRODUCT — 3+3 BUNDLE LAYER STACK → product-three-layer-visual-stack
#   Section 5: GUARANTEE — CALM ACCENT PANEL → guarantee-panel
#   Section 6: CTA — SINGLE TAP, LATE → cta-button-full-width
#   Section 7: LENA SIGN-OFF — LONG VARIANT (E8) → signoff-lena-long
#   Section 8: P.S. LINE — REPLY-TO-LENA → ps-reply-invitation-block

E8_PICKS = {
    'Section 1: HERO - hero-image-lena-or-warm-door-metaphor': {
        'role': 'hero-image-lena-or-warm-door-metaphor',
        'intent': 'leads with Lena\'s voice (L4 lever, dominant at E8) — warm door-open frame',
        'component': 'HERO-3',  # Permission Open (used in E5)
        'component_why': "HERO-3 'Permission Open' is the perfect warm permission hero for E8's door-open Lena-centered frame. Re-using because both emails share the permission-toned opener requirement.",
        'image': 'lifestyle/toddler-livingroom-dino-yellow.png',
        'image_why': "Toddler in living room with dinosaur yellow print — warm home context, no Pre-K urgency (door-open, finale tone). Variance vs other toddler images used in E1-E7.",
        'image_alt': "Verbal 4-year-old in a warm home living room, dinosaur yellow print, relaxed hopeful posture.",
    },
    'Section 2: VALIDATION + RECAP - recap-three-pillar-list': {
        'role': 'recap-three-pillar-list',
        'intent': 'collapses the full 21-day arc into 3 lines',
        'component': '9',  # The Journey Map (Where You Are)
        'component_why': "9 'The Journey Map (Where You Are)' is the catalog's journey-recap pattern — exact match for E8's three-pillar recap.",
        'image': None,
        'image_why': None,
        'image_alt': None,
    },
    'Section 3: SOCIAL PROOF - quote-stack-panel (warm-cream background)': {
        'role': 'quote-stack-panel',
        'intent': '3 L1 parent quotes condensed (E8 trims testimonial)',
        'component': 'STORY-15',  # Story Carousel
        'component_why': "STORY-15 'Story Carousel' is the catalog's stacked-quote pattern. Variance vs STORY-14 (E6), LETTER-11 (E2/E7), SP-02 (E4).",
        'image': None,
        'image_why': None,
        'image_alt': None,
    },
    'Section 4: PRODUCT - product-three-layer-visual-stack': {
        'role': 'product-three-layer-visual-stack',
        'intent': 'shows 3-layer system (Cotton inner / Smart absorption / Leak barrier)',
        'component': 'PROD-3',  # Layer Breakdown (used in E2/E3)
        'component_why': "PROD-3 'Layer Breakdown' is the canonical 3-layer stack. Re-using for consistency on the layer system visual; E8 needs the recap of layers.",
        'image': 'flat-lay/training-pant-watermelon-pink.jpg',
        'image_why': "Training pant flat lay, watermelon pink — final product image with bright/warm color that closes the welcome flow on a positive note. Variance from E2/E3/E6/E7 product images.",
        'image_alt': "Three pairs of training underwear laid flat, watermelon pink print, showing the 3-layer product system for the final product recap.",
    },
    'Section 5: GUARANTEE - guarantee-panel (soft-sage, quiet framing)': {
        'role': 'guarantee-panel',
        'intent': 'risk reversal with calm visual treatment, sage/quiet framing',
        'component': '5',  # 60-Day Calm Promise (used in E7)
        'component_why': "5 '60-Day Calm Promise' is the catalog's guarantee-as-promise — re-using because the calm-quiet framing matches E8's tonal shift.",
        'image': None,
        'image_why': None,
        'image_alt': None,
    },
    'Section 6: CTA - cta-button-full-width (single, late)': {
        'role': 'cta-button-full-width',
        'intent': 'single late CTA — door-open framing, softest ask',
        'component': 'CTAMAX-04',  # Soft CTA (used in E4)
        'component_why': "CTAMAX-04 'Soft CTA' is the softest CTA — fits E8's door-open single-tap pattern. Re-using because the role (soft permission CTA) is identical.",
        'image': None,
        'image_why': None,
        'image_alt': None,
    },
    'Section 7: LENA SIGN-OFF - signoff-lena-long (warm-resolved tone)': {
        'role': 'signoff-lena-long',
        'intent': "personal farewell — Lena references her two autistic sons",
        'component': '12.1',
        'component_why': "12.1 'Lena Signoff' is the only Lena signoff component in the catalog — used consistently across E1-E8 with varying closing words.",
        'image': None,
        'image_why': None,
        'image_alt': None,
    },
    'Section 8: P.S. - ps-reply-invitation-block': {
        'role': 'ps-reply-invitation-block',
        'intent': 'soft secondary engagement — reply invitation, not a CTA',
        'component': 'OBJ-15.4',  # OBJ-15.4 — Lena Voice (used in E3)
        'component_why': "OBJ-15.4 'Lena Voice' is the Lena-voice pattern suitable for the personal P.S. reply invitation. Re-using because both E3 and E8 use Lena voice for closing beats.",
        'image': None,
        'image_why': None,
        'image_alt': None,
    },
}

ok, comp_ids, img_ids = write_email_picks('welcome-01-e8-l1', E8_PICKS)
if ok:
    apply_picks(E8_PICKS)
print(f"E8 done. Components: {comp_ids}, Images: {img_ids}")