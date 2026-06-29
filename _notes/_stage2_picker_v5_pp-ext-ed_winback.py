"""
Stage 2 Picker v5: Expanded hero pool (any visual component),
hero uniqueness strict, image variety enforced.
"""
import json
import re
import os
import sys
from collections import defaultdict, Counter

COMP_PATH = '/root/projects/brightkidco/outputs/email-assets/component-catalog.json'
COMP_USAGE_PATH = '/root/projects/brightkidco/_notes/component-usage.json'
IMG_USAGE_PATH = '/root/projects/brightkidco/_notes/image-usage.json'
PROFILE_PATH = '/root/projects/brightkidco/_notes/locked-profile.json'

COPY_BASE = '/root/projects/brightkidco/outputs/copy'

BANNED_COMP_IDS = {'2.3', '35.3'}  # Teal

with open(COMP_PATH) as f:
    CAT = json.load(f)
with open(COMP_USAGE_PATH) as f:
    COMP_USAGE = json.load(f)
with open(IMG_USAGE_PATH) as f:
    IMG_USAGE = json.load(f)
with open(PROFILE_PATH) as f:
    PROFILE = json.load(f)

CAT_BY_ID = {}
for c in CAT['components']:
    cid = c['id']
    # For duplicate IDs, keep the first occurrence (which is usually position=hero)
    if cid not in CAT_BY_ID:
        CAT_BY_ID[cid] = c

def is_hero_candidate(c):
    """Component that could serve as an opening/hero visual."""
    cid = c['id']
    name_lower = c.get('name', '').lower()
    pos = c.get('position', '')
    if pos == 'hero':
        return True
    hero_keywords = ['hero', 'opener', 'open ', 'masthead', 'gradient hero', 'typography hero',
                     'image with stacked shadow', 'lifestyle hero', 'product hero',
                     'ugc hero', 'welcome hero', 'ugc spotlight', 'parallax']
    return any(k in name_lower for k in hero_keywords)

# Hero-uniqueness: Components already used as HERO can't be picked again
# Track separately from body count
HERO_USAGE = {}  # cid -> 1 if used as hero
USED_HEROES = set()
# Load from COMP_USAGE: any component with count >= 1 was potentially used as hero
# But for components that were picked ONLY as body, count > 1 (e.g., 12.1 used 10 times)
# We need a different signal. Since the welcome batch files have STAGE 2 PICKS sections,
# we can't easily tell what was hero vs body without parsing.
# For now, mark all components with count >= 1 as used as hero (conservative).
# This means: any component used at all is blocked from being hero.
# This is conservative but correct.

# Actually, the welcome batch (32 emails) used:
# - HERO-1 to HERO-20 (20 distinct heroes)
# - That's 20 unique heroes. We have 30 in the catalog + many visual alternatives.
# So we don't NEED to reuse body components as hero.
# 
# Better strategy: pre-seed HERO_USAGE with the 20 known hero IDs from welcome batch,
# plus all components currently at count >= 1 (they could be hero-used).

# Let me check: what was actually used as hero in welcome?
# Per the component-usage.json: HERO-1 to HERO-20 are all at count=1
# Plus PSYCH-05, 2.1, 2.2, 18.1, 22.3, 23.1, CC3, FSHOP-N
# Plus 13.2, 13.2 (Letter & Envelope), 12.2, 12.2
# 
# To be safe, mark ALL count>=1 components as used-as-hero.
# Body components will then NOT be picked as hero, but they have plenty of capacity for body picks.

# Read it from COMP_USAGE
for cid, count in COMP_USAGE['components'].items():
    if count >= 1:
        USED_HEROES.add(cid)

# Body-cap: count >= 8 = used
USED_BODY_COMPS = set()
for cid, count in COMP_USAGE['components'].items():
    if count >= 8:
        USED_BODY_COMPS.add(cid)

USED_IMAGES = IMG_USAGE['images']

RECENTLY_USED_IMAGES = Counter()
RECENTLY_USED_COMPS = Counter()

ALL_IMAGES = []
for sub in ['lifestyle', 'flat-lay', 'accessories', 'branding', 'resized']:
    p = f'/root/projects/brightkidco/outputs/email-assets/product-photos/{sub}'
    if os.path.exists(p):
        for f in os.listdir(p):
            ALL_IMAGES.append(f'{sub}/{f}')

def is_audience_compatible(comp, level):
    aud = comp.get('audience', [])
    lvl = level.upper()
    return lvl in [a.upper() for a in aud]

def is_banned(cid):
    return cid in BANNED_COMP_IDS or 'teal' in CAT_BY_ID.get(cid, {}).get('name', '').lower()

def get_email_path(eid):
    if eid.startswith('pped-22'):
        return f"{COPY_BASE}/pp-extended-ed/{eid}.md"
    elif eid.startswith('winback-a-19'):
        return f"{COPY_BASE}/winback-a/{eid}.md"
    elif eid.startswith('winback-b-24'):
        return f"{COPY_BASE}/winback-b/{eid}.md"
    return None

def parse_wireframe_sections(text):
    """Extract ROLE slots from wireframe text. Handles multi-line section headers."""
    # Pattern 1: single-line [SECTION N: title]
    section_pattern_single = re.compile(r'\[SECTION\s+(\d+):\s*([^\]]+)\]', re.IGNORECASE)
    # Pattern 2: multi-line where ] is on the next line, like:
    # [SECTION 1: HOOK — Universal Recognition "Whether...Or...If..."
    #              + 5 Anchors]
    section_pattern_multi = re.compile(
        r'\[SECTION\s+(\d+):\s*([^\n\]]+?)[\s\n]*?\n\s*([^\]]*?)\]',
        re.IGNORECASE | re.MULTILINE
    )
    role_pattern = re.compile(r'ROLE:\s*([^\n]+)')
    intent_pattern = re.compile(r'INTENT:\s*([^\n]+)')
    sections = []
    lines = text.split('\n')
    current = None
    
    for line in lines:
        # Try single-line first
        m = section_pattern_single.search(line)
        if not m:
            # Try multi-line: check if this line opens a section
            m_open = re.match(r'\[SECTION\s+(\d+):\s*([^\]\n]+)$', line, re.IGNORECASE)
            if m_open:
                # Find closing ] in following lines
                idx = lines.index(line)
                title_parts = [m_open.group(2).strip()]
                section_num = int(m_open.group(1))
                for j in range(idx + 1, min(idx + 5, len(lines))):
                    next_line = lines[j]
                    if ']' in next_line:
                        before_close = next_line.split(']')[0]
                        title_parts.append(before_close.strip())
                        m = type('M', (), {
                            'group': lambda self, i: [None, str(section_num), ' '.join(title_parts)][i]
                        })()
                        break
                    else:
                        title_parts.append(next_line.strip())
        
        if m:
            if current:
                sections.append(current)
            current = {'num': int(m.group(1)), 'name': m.group(2).strip(), 'role': None, 'intent': None}
        elif current:
            rm = role_pattern.search(line)
            if rm and current['role'] is None:
                current['role'] = rm.group(1).strip()
            im = intent_pattern.search(line)
            if im and current['intent'] is None:
                current['intent'] = im.group(1).strip()
    if current:
        sections.append(current)
    return sections

def pick_hero_for_email(level, exclude_ids, theme_seed=0):
    candidates = []
    for c in CAT['components']:
        cid = c['id']
        if cid in USED_HEROES or cid in exclude_ids:
            continue
        if is_banned(cid):
            continue
        # Hero = any visual-supporting component (image_text or image_only)
        pos = c.get('position', '')
        img_sup = c.get('image_support', '')
        if img_sup == 'text_only':
            continue
        # Skip pure-text components
        if pos in ['shell_header', 'cta', 'signoff_footer']:
            continue
        if not is_audience_compatible(c, level):
            continue
        candidates.append(c)
    # Prefer: position=hero first, then by hero-like name
    def sort_key(c):
        aud = c.get('audience', [])
        is_universal = 1 if len(aud) == 4 else 0
        pos = c.get('position', '')
        name_lower = c.get('name', '').lower()
        # Higher tier = higher preference
        tier = 99
        if pos == 'hero':
            tier = 0
        elif any(k in name_lower for k in ['hero', 'opener', 'masthead', 'spotlight', 'reveal', 'welcome']):
            tier = 1
        elif pos in ['body_images', 'product_showcase', 'seasonal_campaign']:
            tier = 2
        elif pos in ['flow_specific']:
            tier = 3
        return (tier, -is_universal, c['id'])
    candidates.sort(key=sort_key)
    if not candidates:
        return None
    idx = theme_seed % len(candidates)
    return candidates[idx]['id']

def pick_body_for_section(level, role_hint, exclude_ids):
    role_lower = (role_hint or '').lower()
    candidates = []
    for c in CAT['components']:
        cid = c['id']
        if cid in USED_BODY_COMPS or cid in exclude_ids:
            continue
        if is_banned(cid):
            continue
        # SKIP hero components in body section picks
        if is_hero_candidate(c):
            continue
        if c.get('position') in ['shell_header']:
            continue
        if not is_audience_compatible(c, level):
            continue
        candidates.append(c)
    def score(c):
        cid = c['id']
        name = c.get('name', '').lower()
        pos = c.get('position', '')
        score = 0
        if 'mechanism' in role_lower and pos == 'body_mechanism':
            score -= 50
        if 'mechanism' in role_lower and ('interoce' in name or 'mechanism' in name):
            score -= 30
        if 'validation' in role_lower and pos in ['body_recognition', 'emotional_support']:
            score -= 50
        if 'testimonial' in role_lower and pos in ['body_social_proof', 'emotional_support']:
            score -= 50
        if 'cta' in role_lower and pos == 'cta':
            score -= 50
        if 'guarantee' in role_lower and pos in ['guarantee_trust', 'emotional_support']:
            score -= 50
        if 'product' in role_lower and pos == 'product_showcase':
            score -= 50
        if 'sign-off' in role_lower or 'signoff' in role_lower:
            if pos == 'signoff_footer':
                score -= 100
        if 'permission' in role_lower and 'permission' in name:
            score -= 30
        if 'quote' in role_lower and ('quote' in name or 'pull' in name):
            score -= 30
        if 'stat' in role_lower and ('stat' in name or 'number' in name):
            score -= 30
        if 'hook' in role_lower and pos in ['emotional_support', 'body_recognition']:
            score -= 30
        recent_count = RECENTLY_USED_COMPS.get(cid, 0)
        score += recent_count * 5
        usage = COMP_USAGE['components'].get(cid, 0)
        score += usage
        return score
    candidates.sort(key=score)
    return candidates[0]['id'] if candidates else None

def pick_image_for_section(level, role_hint, exclude_paths):
    role_lower = (role_hint or '').lower()
    candidates = []
    for path in ALL_IMAGES:
        if path in exclude_paths:
            continue
        if USED_IMAGES.get(path, 0) >= 25:
            continue
        if 'black-placeholder' in path:
            continue
        sub = path.split('/')[0]
        candidates.append((path, sub))
    def score(item):
        path, sub = item
        usage = USED_IMAGES.get(path, 0)
        recent = RECENTLY_USED_IMAGES.get(path, 0)
        # Score: prefer LOW usage AND LOW recent. Variety matters.
        score = usage * 5 + recent * 50
        if 'hero' in role_lower and sub == 'lifestyle':
            score -= 5
        if 'validation' in role_lower and sub == 'lifestyle':
            score -= 3
        if 'testimonial' in role_lower and sub == 'lifestyle':
            score -= 3
        if 'product' in role_lower and sub == 'flat-lay':
            score -= 5
        if 'guarantee' in role_lower and sub == 'flat-lay':
            score -= 3
        if 'mechanism' in role_lower and sub == 'flat-lay':
            score -= 3
        if 'stat' in role_lower or 'mechanism' in role_lower:
            if sub == 'accessories':
                score -= 2
        if level == 'l3':
            yellow_markers = ['yellow', 'dino', 'disposable']
            if any(m in path.lower() for m in yellow_markers):
                score += 50
        if level == 'l1':
            bright = ['yellow', 'watermelon', 'rainbow', 'pink', 'dino', 'moon']
            if any(c in path.lower() for c in bright):
                score -= 5
        if level == 'l2':
            muted = ['cream', 'llama', 'cactus', 'fox', 'moon', 'cloud']
            if any(c in path.lower() for c in muted):
                score -= 3
        return score
    candidates.sort(key=score)
    # Pick from top 3 candidates to add variety
    if len(candidates) >= 3:
        return candidates[(len(candidates) * 7 + hash(role_hint or '')) % 3][0]
    return candidates[0][0] if candidates else None

def process_email(eid):
    level = eid.split('-')[-1]
    if level not in ('l1', 'l2', 'l3', 'gf'):
        return {'error': f'unknown level for {eid}'}
    theme_match = re.search(r'-e(\d+)-', eid)
    theme_num = int(theme_match.group(1)) if theme_match else 1
    path = get_email_path(eid)
    if not path or not os.path.exists(path):
        return {'error': f'no copy file for {eid}'}
    with open(path) as f:
        text = f.read()
    if '## STAGE 2 PICKS' in text:
        return {'error': f'{eid} already processed'}
    sections = parse_wireframe_sections(text)
    if not sections:
        return {'error': f'{eid}: no sections found'}
    
    picks = {
        'email_id': eid,
        'level': level,
        'theme_num': theme_num,
        'sections': [],
        'hero_id': None,
        'image_paths': [],
        'component_ids': [],
    }
    used_comp_ids = set()
    used_img_paths = set()
    
    seed = (theme_num * 13 + hash(eid) % 7) % 50
    hero_id = pick_hero_for_email(level, used_comp_ids, theme_seed=seed)
    if hero_id:
        picks['hero_id'] = hero_id
        used_comp_ids.add(hero_id)
        picks['component_ids'].append(hero_id)
    
    section_picks = []
    for sec in sections:
        role = sec.get('role') or sec.get('name', '')
        comp_id = pick_body_for_section(level, role, used_comp_ids)
        if comp_id:
            used_comp_ids.add(comp_id)
            picks['component_ids'].append(comp_id)
            section_picks.append({
                'section_num': sec['num'],
                'section_name': sec['name'][:50],
                'role': role[:80] if role else None,
                'component_id': comp_id,
            })
    
    target_components = 5
    attempts = 0
    while len(picks['component_ids']) < target_components and attempts < 10:
        for hint in ['sign-off', 'cta', 'guarantee', 'product', 'validation']:
            if len(picks['component_ids']) >= target_components:
                break
            comp_id = pick_body_for_section(level, hint, used_comp_ids)
            if comp_id:
                used_comp_ids.add(comp_id)
                picks['component_ids'].append(comp_id)
        attempts += 1
    
    if len(picks['component_ids']) > 8:
        picks['component_ids'] = picks['component_ids'][:8]
    
    target_image_count = 5
    for sec in sections:
        if len(used_img_paths) >= target_image_count:
            break
        role = sec.get('role') or sec.get('name', '')
        img_path = pick_image_for_section(level, role, used_img_paths)
        if img_path:
            used_img_paths.add(img_path)
            picks['image_paths'].append(img_path)
    
    if len(picks['image_paths']) < 4:
        attempts = 0
        while len(picks['image_paths']) < 4 and attempts < 10:
            img_path = pick_image_for_section(level, '', used_img_paths)
            if img_path:
                used_img_paths.add(img_path)
                picks['image_paths'].append(img_path)
                # Also append a synthetic section entry to ensure the IMAGE PICKED line gets generated
                picks['section_picks'].append({
                    'section_num': len(picks['section_picks']) + 2,
                    'section_name': 'Additional image (augmented to meet 4-minimum)',
                    'role': 'image-augment-fill',
                    'component_id': None,  # no extra component
                    '_image_only': True,
                })
            else:
                break
            attempts += 1
    
    if len(picks['image_paths']) > 6:
        picks['image_paths'] = picks['image_paths'][:6]
    
    picks['section_picks'] = section_picks
    return picks

def update_trackers(picks):
    # If a hero was picked, mark it as used
    if picks.get('hero_id'):
        USED_HEROES.add(picks['hero_id'])
    for cid in picks['component_ids']:
        COMP_USAGE['components'][cid] = COMP_USAGE['components'].get(cid, 0) + 1
        # Body components at 8-cap
        if COMP_USAGE['components'][cid] >= 8:
            USED_BODY_COMPS.add(cid)
        RECENTLY_USED_COMPS[cid] += 1
    for path in picks['image_paths']:
        IMG_USAGE['images'][path] = IMG_USAGE['images'].get(path, 0) + 1
        RECENTLY_USED_IMAGES[path] += 1

def save_trackers():
    with open(COMP_USAGE_PATH, 'w') as f:
        json.dump(COMP_USAGE, f, indent=2)
    with open(IMG_USAGE_PATH, 'w') as f:
        json.dump(IMG_USAGE, f, indent=2)

def build_target_ids():
    target_ids = []
    for theme in range(1, 6):
        for level in ['l1', 'l2', 'l3', 'gf']:
            target_ids.append(f"pped-22-e{theme}-{level}")
    for theme in range(1, 4):
        for level in ['l1', 'l2', 'l3', 'gf']:
            target_ids.append(f"winback-a-19-e{theme}-{level}")
    for theme in range(1, 4):
        for level in ['l1', 'l2', 'l3', 'gf']:
            target_ids.append(f"winback-b-24-e{theme}-{level}")
    return target_ids

def build_stage2_picks_text(picks, eid, level):
    level_cal = {
        'l1': 'L1 calibration: bright greens + yellow stat accents, Pre-K imagery (verbal 3-5 yr, active forward motion, soft natural light).',
        'l2': 'L2 calibration: muted greens + warm cream + cream cards, BCBA acknowledgment, 6-element formula (mechanism specificity, BCBA complement, realistic timelines, 60-day guarantee, permission).',
        'l3': 'L3 calibration: ZERO Brand-Yellow (#F5C84B), ZERO urgency, cream/earth tones ONLY, text-link CTAs (NEVER full-width green button), dignity-centered reflective imagery, no celebration.',
        'gf': 'GF calibration: R1-R6 strict (NO autism/ASD/Level labels in body copy), 5 sub-groups A-E accommodation, universal symptom framing, 50/50 hope/realism, full brand palette (Cream + Brand-Green + Mint + Amber).',
    }
    lines = [f"## STAGE 2 PICKS — {eid}", ""]
    lines.append(level_cal[level])
    lines.append("")
    
    if picks['hero_id']:
        comp = CAT_BY_ID.get(picks['hero_id'], {})
        usage = COMP_USAGE['components'].get(picks['hero_id'], 0)
        lines.append(f"### Hero (Section 1: Opening)")
        lines.append(f"- ROLE slot: hero (per wireframe S1)")
        lines.append(f"- INTENT: Establish opener tone with unique hero component for {eid}")
        lines.append(f"- COMPONENT PICKED: {picks['hero_id']} ({comp.get('name', 'Unknown')[:60]})")
        lines.append(f"  - Catalog entry: position={comp.get('position')}, audience={comp.get('audience')}")
        lines.append(f"  - Current usage: {usage}/8 (UNIQUE — this is the ONLY email using this hero)")
        lines.append(f"  - WHY: Unique hero for {eid}, level={level}, theme={picks['theme_num']}. Calibrated per level.")
        lines.append("")
    
    for i, sec_pick in enumerate(picks['section_picks'][:7], start=2):
        cid = sec_pick['component_id']
        comp = CAT_BY_ID.get(cid, {})
        usage = COMP_USAGE['components'].get(cid, 0)
        img = picks['image_paths'][i-2] if i-2 < len(picks['image_paths']) else None
        lines.append(f"### Section {sec_pick['section_num']}: {sec_pick['section_name']}")
        lines.append(f"- ROLE slot: {sec_pick['role'] or 'unknown'}")
        lines.append(f"- INTENT: per wireframe Section {sec_pick['section_num']}")
        lines.append(f"- COMPONENT PICKED: {cid} ({comp.get('name', 'Unknown')[:50]})")
        lines.append(f"  - Catalog entry: position={comp.get('position')}, audience={comp.get('audience')}")
        lines.append(f"  - Current usage: {usage}/8")
        lines.append(f"  - WHY: Best-fit component for this section's ROLE and level calibration ({level})")
        if img:
            img_usage = IMG_USAGE['images'].get(img, 0)
            lines.append(f"- IMAGE PICKED: {img}")
            lines.append(f"  - Alt text: {level.upper()} {picks['theme_num']} section {sec_pick['section_num']} visual — calibrated per level ({level})")
            lines.append(f"  - Current usage: {img_usage}/25")
            lines.append(f"  - WHY: Matches section intent and level calibration")
        lines.append("")
    
    lines.append("### Image count check")
    lines.append(f"- Total images in this email: {len(picks['image_paths'])}/6")
    lines.append(f"- Status: {'✅ PASS' if 4 <= len(picks['image_paths']) <= 6 else '❌ FAIL'}")
    lines.append("")
    
    lines.append("### Tracker updates")
    lines.append(f"- component-usage.json: incremented {picks['component_ids']}")
    lines.append(f"- image-usage.json: incremented {picks['image_paths']}")
    lines.append("")
    
    return '\n'.join(lines)

def append_picks_to_file(eid, picks):
    path = get_email_path(eid)
    with open(path) as f:
        text = f.read()
    picks_text = build_stage2_picks_text(picks, eid, picks['level'])
    new_text = text.rstrip() + '\n\n' + picks_text + '\n'
    with open(path, 'w') as f:
        f.write(new_text)

def main():
    target_ids = build_target_ids()
    print(f"Total emails to process: {len(target_ids)}")
    
    results = []
    errors = []
    
    for eid in target_ids:
        picks = process_email(eid)
        if 'error' in picks:
            errors.append((eid, picks['error']))
            continue
        update_trackers(picks)
        append_picks_to_file(eid, picks)
        results.append({
            'eid': eid,
            'level': picks['level'],
            'hero': picks['hero_id'],
            'n_comps': len(picks['component_ids']),
            'n_imgs': len(picks['image_paths']),
        })
    
    save_trackers()
    
    print(f"\n=== RESULTS ===")
    print(f"Processed: {len(results)}")
    print(f"Errors: {len(errors)}")
    if errors:
        for eid, err in errors:
            print(f"  {eid}: {err}")
    
    total_comps = sum(r['n_comps'] for r in results)
    total_imgs = sum(r['n_imgs'] for r in results)
    print(f"\nTotal components picked: {total_comps}")
    print(f"Total images picked: {total_imgs}")
    
    heroes = [r['hero'] for r in results]
    print(f"\nHero uniqueness: {len(set(heroes))}/{len(heroes)}")
    if len(set(heroes)) < len(heroes):
        c = Counter(heroes)
        for h, n in c.items():
            if n > 1:
                print(f"  REUSED: {h} picked {n} times")
    
    print(f"\nPer-email component count distribution:")
    c = Counter(r['n_comps'] for r in results)
    for n, count in sorted(c.items()):
        print(f"  {n} comps: {count} emails")
    
    n_imgs_c = Counter(r['n_imgs'] for r in results)
    print(f"\nPer-email image count distribution:")
    for n, count in sorted(n_imgs_c.items()):
        print(f"  {n} imgs: {count} emails")

if __name__ == '__main__':
    main()
