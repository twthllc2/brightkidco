"""
Stage 2 Asset Selection - Welcome L1 (E1-E8)
One script: catalogs reads/writes, makes picks via reasoning,
appends STAGE 2 PICKS to copy files, updates trackers.

Each pick is a reasoned choice; the script does file I/O.
"""
import json
import re
from pathlib import Path
from collections import defaultdict

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

# Find candidates by position + audience
def find_by_position(pos_list, audience='L1', exclude_retired=True, exclude_ids=None):
    """Return list of components with position in pos_list AND audience includes 'L1'"""
    exclude_ids = set(exclude_ids or [])
    out = []
    if isinstance(pos_list, str):
        pos_list = [pos_list]
    for c in COMPS:
        if exclude_retired and c.get('retired'):
            continue
        if c.get('position') not in pos_list:
            continue
        if audience not in c.get('audience', []):
            continue
        if c['id'] in exclude_ids:
            continue
        out.append(c)
    return out

# Image library inventory
IMG_INVENTORY = {
    'lifestyle': [
        ('lifestyle/founders-holding-pants-yellow-watermelon.png', 'Founder mom holding product, warm kitchen'),
        ('lifestyle/toddler-backpack-moon-cloud-blue.png', 'Toddler with backpack, blue moon print, hopeful'),
        ('lifestyle/toddler-livingroom-dino-yellow.png', 'Toddler in living room, dinosaur yellow'),
        ('lifestyle/toddler-napping-watermelon-pink-shorts.png', 'Toddler napping, watermelon pink shorts'),
        ('lifestyle/toddler-outdoors-grass-disposable-diaper.png', 'Toddler outdoors on grass, soft light'),
        ('lifestyle/toddler-playing-train-moon-cloud-blue.png', 'Toddler playing with train, blue moon cloud'),
        ('lifestyle/toddler-potty-ladder-pink-multicolor.png', 'Toddler at potty ladder, pink multicolor'),
        ('lifestyle/toddler-potty-ladder-yellow-woodland.png', 'Toddler at potty ladder, yellow woodland'),
        ('lifestyle/toddler-rearview-cat-mustard.png', 'Toddler rear view, cat mustard'),
        ('lifestyle/toddlers-backview-disposable-diapers.png', 'Toddlers back view, soft natural light'),
        ('lifestyle/washing-machine-training-pants.png', 'Washing machine with training pants'),
    ],
    'flat-lay': [
        ('flat-lay/training-pant-watermelon-pink.jpg', 'Training pant flat lay, watermelon pink'),
        ('flat-lay/training-pant-bunny-hearts-pink.jpg', 'Training pant flat lay, bunny hearts pink'),
        ('flat-lay/training-pant-fox-woodland-white.jpg', 'Training pant flat lay, fox woodland white'),
        ('flat-lay/training-pant-fox-red-white.jpg', 'Training pant flat lay, fox red white'),
        ('flat-lay/training-pant-penguin-multicolor.jpg', 'Training pant flat lay, penguin multicolor'),
        ('flat-lay/training-pant-cloud-raindrop-white.jpg', 'Training pant flat lay, cloud raindrop white'),
        ('flat-lay/swim-diaper-whale-ocean-blue.jpg', 'Swim diaper, whale ocean blue'),
        ('flat-lay/swim-diaper-unicorn-pink.jpg', 'Swim diaper, unicorn pink'),
        ('flat-lay/swim-diaper-giraffe-yellow.jpg', 'Swim diaper, giraffe yellow'),
        ('flat-lay/diaper-woodland-creature-yellow.jpg', 'Diaper flat lay, woodland creature yellow'),
        ('flat-lay/laundry-bag-llama-cream.png', 'Laundry bag llama cream'),
        ('flat-lay/pocket-diaper-moon-cloud-blue.jpg', 'Pocket diaper, moon cloud blue'),
    ],
}

# ============================================================
# E1 PICKS
# ============================================================
# Wireframe sections:
#   Section 1: hero-image-lifestyle (verb 3-5 yr, hopeful, real home)
#   Section 2: callout-quote-highlight (parent quote stop-the-scroll)
#   Section 3: callout-quote-highlight (variant) (second parent quote, absolution)
#   Section 4: stat-highlight-box (>90% sensory-processing stat)
#   Section 5: CTA + P.S. (full-width brand-green, with P.S.)
#   Signoff: signoff-lena-short

E1_PICKS = {
    'Section 1: hero-image-lifestyle': {
        'role': 'hero-image-lifestyle',
        'intent': 'lifestyle photo of verbal 3-5 yr, hopeful posture, real home, Pre-K context',
        'component': 'HERO-5',  # Mirror Moment — text-based hero, L1-warm temp
        'component_why': "HERO-5 'Mirror Moment' is a text-first hero with warm gradient background that matches L1 cream-warm palette. Per journey-l1 MASTER, hero role is mirror; the text + subhead structure sets the empathy tone. Lifestyle photo carries the visual recognition separately.",
        'image': 'lifestyle/toddler-potty-ladder-yellow-woodland.png',
        'image_why': "Toddler at potty ladder, yellow woodland print — active forward motion, real home setting, hopeful posture. Matches INTENT: verbal 3-5 yr, hopeful, Pre-K-relevant imagery (potty context).",
        'image_alt': "Verbal 3-year-old at a yellow wooden potty ladder in a real home, hopeful posture, soft natural light.",
    },
    'Section 2: callout-quote-highlight': {
        'role': 'callout-quote-highlight',
        'intent': 'parent quote that stops the scroll — timing-problems voice',
        'component': '4.5',  # Cream Callout
        'component_why': "Cream Callout (#FFFDF6 background) matches L1 Cream Card #FBF7EB spec exactly. Italic parent quote block with soft border. This is the FIRST callout — sets the style for subsequent callouts.",
        'image': None,
        'image_why': None,
        'image_alt': None,
    },
    'Section 3: callout-quote-highlight (variant)': {
        'role': 'callout-quote-highlight (variant)',
        'intent': 'second parent quote — inconsistent-performance L1 marker, absolution beat',
        'component': 'LETTER-10',  # Highlighted Passage
        'component_why': "LETTER-10 'Highlighted Passage' gives variance vs Section 2's Cream Callout. Italic pull-quote with strong typographic highlight; fits the absolution voice of E1's validation section without repeating the callout style.",
        'image': None,
        'image_why': None,
        'image_alt': None,
    },
    'Section 4: stat-highlight-box': {
        'role': 'stat-highlight-box',
        'intent': '>90% sensory-processing stat anchor (L1 yellow stat accent per L1 spec)',
        'component': 'M10',  # Stat Block (Mobile)
        'component_why': "M10 'Stat Block' centers a big number with citation underneath. L1 calls for yellow stat accents (#F5C84B) and high stat prominence in the mechanism section — this stat block pattern renders the >90% number as a clear visual anchor.",
        'image': None,
        'image_why': None,
        'image_alt': None,
    },
    'Section 5: cta-button-full-width': {
        'role': 'cta-button-full-width',
        'intent': 'full-width Brand-Green CTA, soft permission, drives to PDP',
        'component': 'CTAMAX-01',  # Primary CTA
        'component_why': "CTAMAX-01 'Primary CTA' is the canonical full-width CTA with conversion messaging, audience L1. L1 spec: full-width, Brand-Green #039902, 48px+ height, soft permission framing. Matches.",
        'image': None,
        'image_why': None,
        'image_alt': None,
    },
    'Signoff: signoff-lena-short': {
        'role': 'signoff-lena-short',
        'intent': "Lena's SHORT sign-off for E1: 'Talk soon,'",
        'component': '12.1',  # Lena Signoff
        'component_why': "12.1 'Lena Signoff' is the catalog's only Lena signoff component. Signoff audience L1. Includes avatar + name + role + handwritten 'Lena' signature — matches Lena SHORT variant requirements.",
        'image': None,
        'image_why': None,
        'image_alt': None,
    },
}

# Apply E1 picks
print("=== E1 ===")
email_file = WELCOME_DIR / 'welcome-01-e1-l1.md'
with open(email_file) as f:
    content = f.read()

stage2_block = "\n## STAGE 2 PICKS — welcome-01-e1-l1\n\n"
for sec_name, pick in E1_PICKS.items():
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

# Tracker updates for E1
stage2_block += "### Tracker updates\n"
e1_comp_ids = [p['component'] for p in E1_PICKS.values()]
e1_img_ids = [p['image'] for p in E1_PICKS.values() if p['image']]
stage2_block += f"- component-usage.json: incremented {e1_comp_ids}\n"
stage2_block += f"- image-usage.json: incremented {e1_img_ids}\n"

# Apply
with open(email_file, 'a') as f:
    f.write(stage2_block)
for cid in e1_comp_ids:
    inc_comp(cid)
for iid in e1_img_ids:
    inc_img(iid)

print(f"E1 written: {len(e1_comp_ids)} components, {len(e1_img_ids)} images")
print(f"E1 components: {e1_comp_ids}")
print(f"E1 images: {e1_img_ids}")

# Save trackers
with open(COMP_USAGE_PATH, 'w') as f:
    json.dump(comp_usage, f, indent=2)
with open(IMG_USAGE_PATH, 'w') as f:
    json.dump(img_usage, f, indent=2)

print("Trackers saved after E1.")