"""
Stage 2 E6 - Welcome L1 Asset Selection (L1 Testimonials / D14)
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
# E6 — L1 Testimonials / Pull-up Reframe (D14)
# ============================================================
# Wireframe sections:
#   Section 1: HERO — PRE-K BRIDGE → hero-image-prek-context
#   Section 2: VALIDATION — PULL-UP REFRAME + ANCHOR QUOTE → anchor-quote-callout
#   Section 3: SOCIAL PROOF — TESTIMONIAL ROW → stacked-testimonial-stack
#   Section 4: MECHANISM + SCIENCE — PULL-UP SIGNAL GAP + 49% STAT → pull-up-signal-reframe-diagram
#   Section 5: CTA — PRIMARY + SECONDARY → product-pricing-stack (visual) + CTA
#   Section 6: GUARANTEE + RISK REVERSAL → guarantee-badge-callout
# Signoff: signoff-lena-long (E6+ progression begins "With care,")

E6_PICKS = {
    'Section 1: HERO - hero-image-prek-context': {
        'role': 'hero-image-prek-context',
        'intent': 'anchors Pre-K timing frame that drives E6 urgency',
        'component': 'HERO-19',  # Timeline Shock
        'component_why': "HERO-19 'Timeline Shock' is the catalog's timeline-anchored hero — fits E6's Pre-K calendar frame.",
        'image': 'lifestyle/toddler-backpack-moon-cloud-blue.png',
        'image_why': "Toddler with backpack — Pre-K readiness visual. Re-using the same image used in E3 because it's the perfect Pre-K image (no need for variance here, both emails share the same calendar anchor).",
        'image_alt': "Verbal 3-year-old wearing a small backpack with a moon and cloud print, hopeful posture, ready for Pre-K.",
    },
    'Section 2: VALIDATION - anchor-quote-callout': {
        'role': 'anchor-quote-callout',
        'intent': 'L1-anchor parent quote — "He had a perfect week, then a month of accidents."',
        'component': '7',  # Parent Stories (Emotional Proof)
        'component_why': "7 'Parent Stories (Emotional Proof)' is the catalog's parent-story anchor pattern. E6's anchor quote is the verbatim L1 marker phrase — perfect fit.",
        'image': None,
        'image_why': None,
        'image_alt': None,
    },
    'Section 3: SOCIAL PROOF - stacked-testimonial-stack': {
        'role': 'stacked-testimonial-stack',
        'intent': 'three short L1 testimonials stacked vertically',
        'component': 'STORY-14',  # Micro-Story
        'component_why': "STORY-14 'Micro-Story' is a micro-testimonial pattern suitable for 3 stacked short L1 testimonials. Variance vs SP-02 (E4), LETTER-11 (E2).",
        'image': None,
        'image_why': None,
        'image_alt': None,
    },
    'Section 4: MECHANISM - pull-up-signal-reframe-diagram': {
        'role': 'pull-up-signal-reframe-diagram',
        'intent': 'visualizes the weakened L1 pull-up reframe + 49% stat',
        'component': 'DEEP-15',  # The Method Graveyard
        'component_why': "DEEP-15 'The Method Graveyard' is the catalog's pull-up-as-failed-method diagram — fits E6's pull-up signal gap reframe. Variance vs DEEP-16 (E2), DEEP-13 (E4).",
        'image': None,
        'image_why': None,
        'image_alt': None,
    },
    'Section 5: CTA - product-pricing-stack (visual)': {
        'role': 'product-pricing-stack (visual element, NOT a CTA)',
        'intent': 'shows 3+3 Bundle as Pre-K readiness tool — 6 pairs, $79.99',
        'component': 'REV-08.4',  # REV-08.4 — Bundle Value Recap
        'component_why': "REV-08.4 was used in E4 — but for E6 it appears as visual pricing stack (not CTA). Re-using the component since the role is similar. Variance would be possible but this component is purpose-built.",
        'image': 'flat-lay/training-pant-bunny-hearts-pink.jpg',
        'image_why': "Training pant flat lay, bunny hearts pink — variance from E2 (fox woodland white) and E3 (fox red/white). Pre-K readiness frame.",
        'image_alt': "Three pairs of training underwear laid flat, white with pink bunny hearts print, showing the 3+3 bundle.",
    },
    'Section 6: PRIMARY CTA - cta-button-full-width': {
        'role': 'cta-button-full-width',
        'intent': 'pull-up reframe primary CTA',
        'component': 'CTAMAX-08',  # Social CTA
        'component_why': "CTAMAX-08 'Social CTA' is a CTA-with-social-proof-tone — fits E6's testimonial-driven closing arc. Variance vs CTAMAX-01/04/06/09.",
        'image': None,
        'image_why': None,
        'image_alt': None,
    },
    'Section 7: GUARANTEE - guarantee-badge-callout': {
        'role': 'guarantee-badge-callout',
        'intent': 'standalone guarantee block — gives skeptical L1 reader the exit',
        'component': 'CTAMAX-05',  # Guarantee CTA (also used in E5)
        'component_why': "CTAMAX-05 'Guarantee CTA' was used in E5 — but E6 also has the standalone guarantee moment. Re-using for consistency on the guarantee role.",
        'image': None,
        'image_why': None,
        'image_alt': None,
    },
    'Signoff: signoff-lena-long (With care, E6+)': {
        'role': 'signoff-lena-long',
        'intent': "Lena LONG sign-off for E6+: 'With care,' (new tonal shift)",
        'component': '12.1',
        'component_why': "12.1 'Lena Signoff' is the only Lena signoff in the catalog. The visual variant (LONG vs SHORT) is determined in Stage 3/4.",
        'image': None,
        'image_why': None,
        'image_alt': None,
    },
}

ok, comp_ids, img_ids = write_email_picks('welcome-01-e6-l1', E6_PICKS)
if ok:
    apply_picks(E6_PICKS)
print(f"E6 done. Components: {comp_ids}, Images: {img_ids}")