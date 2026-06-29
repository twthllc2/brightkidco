import json
with open('/root/projects/brightkidco/outputs/email-assets/component-catalog.json') as f:
    catalog = json.load(f)
comps = catalog['components']
print(f"Total: {len(comps)}")

# Group by position
from collections import defaultdict
by_pos = defaultdict(list)
for c in comps:
    if not c.get('retired', False):
        by_pos[c.get('position')].append(c)

print("\n=== POSITION COUNTS ===")
for pos in sorted(by_pos.keys()):
    print(f"{pos}: {len(by_pos[pos])}")

# Roles I need to find for E1 wireframe
# Section 1: hero-image-lifestyle (looking for hero position components with L1 audience)
# Section 2: callout-quote-highlight (body - recognition/story or body - mechanism)
# Section 3: callout-quote-highlight (same as Section 2)
# Section 4: stat-highlight-box (body - mechanism, or product showcase)
# Section 5: cta-button-full-width (cta position)
# Plus: signoff-lena-short (signoff_footer)

target_roles = {
    'Section 1: hero-image-lifestyle': 'hero',
    'Section 2: callout-quote-highlight (first)': ['body_recognition', 'body_mechanism', 'body_social_proof'],
    'Section 3: callout-quote-highlight (variant)': ['body_recognition', 'body_mechanism', 'body_social_proof'],
    'Section 4: stat-highlight-box': ['body_mechanism', 'product_showcase'],
    'Section 5: cta-button-full-width': 'cta',
    'Signoff: signoff-lena-short': 'signoff_footer',
}

print("\n=== HERO + L1 candidates (not retired) ===")
for c in by_pos.get('hero', []):
    aud = c.get('audience', [])
    if 'L1' in aud:
        print(f"  {c['id']:20s} | {c['name'][:75]}")
        print(f"     img_support={c.get('image_support')}, messaging={c.get('messaging')}, temp={c.get('temperature')}")

print("\n=== BODY RECOGNITION + L1 (not retired) ===")
recog_l1 = [c for c in by_pos.get('body_recognition', []) if 'L1' in c.get('audience', [])]
print(f"Count: {len(recog_l1)}")
for c in recog_l1:
    img = c.get('image_support')
    name = c['name'][:65]
    print(f"  {c['id']:15s} | {name} | img={img} | msg={c.get('messaging')}")

print("\n=== BODY MECHANISM + L1 (not retired) ===")
mech_l1 = [c for c in by_pos.get('body_mechanism', []) if 'L1' in c.get('audience', [])]
print(f"Count: {len(mech_l1)}")
for c in mech_l1[:30]:
    img = c.get('image_support')
    name = c['name'][:65]
    print(f"  {c['id']:15s} | {name} | img={img} | msg={c.get('messaging')}")