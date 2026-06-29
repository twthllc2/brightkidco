import json
with open('/root/projects/brightkidco/outputs/email-assets/component-catalog.json') as f:
    catalog = json.load(f)
comps = catalog['components']

# I need to find specific types of components for L1 E1
# Let me look at CTA components, signoff, stat-relevant ones

print("=== CTA + L1 candidates ===")
ctas = [c for c in comps if c.get('position') == 'cta' and 'L1' in c.get('audience', []) and not c.get('retired', False)]
print(f"Count: {len(ctas)}")
for c in ctas:
    print(f"  {c['id']:20s} | {c['name'][:70]} | img={c.get('image_support')} | msg={c.get('messaging')}")

print("\n=== SIGNOFF_FOOTER + L1 ===")
signs = [c for c in comps if c.get('position') == 'signoff_footer' and 'L1' in c.get('audience', []) and not c.get('retired', False)]
print(f"Count: {len(signs)}")
for c in signs:
    print(f"  {c['id']:20s} | {c['name']} | img={c.get('image_support')} | msg={c.get('messaging')}")

# Stat highlight box: looking for body_mechanism components that highlight stats
print("\n=== BODY_MECHANISM candidates with 'stat' or 'data' or 'highlight' in name ===")
mech = [c for c in comps if c.get('position') == 'body_mechanism' and 'L1' in c.get('audience', []) and not c.get('retired', False)]
stat_match = [c for c in mech if any(k in c['name'].lower() for k in ['stat', 'data', 'highlight', 'number', 'metric', 'shock'])]
print(f"Count: {len(stat_match)}")
for c in stat_match[:20]:
    print(f"  {c['id']:20s} | {c['name'][:70]} | img={c.get('image_support')} | msg={c.get('messaging')}")

# Also look at product_showcase for stat-like boxes
print("\n=== PRODUCT_SHOWCASE + L1 candidates ===")
ps = [c for c in comps if c.get('position') == 'product_showcase' and 'L1' in c.get('audience', []) and not c.get('retired', False)]
print(f"Count: {len(ps)}")
for c in ps[:15]:
    print(f"  {c['id']:20s} | {c['name'][:70]} | img={c.get('image_support')} | msg={c.get('messaging')}")

# Show all HERO components for L1 specifically (we want "lifestyle" feel)
print("\n=== HERO L1 - the right ones for lifestyle ===")
hero_l1 = [c for c in comps if c.get('position') == 'hero' and 'L1' in c.get('audience', []) and not c.get('retired', False)]
print(f"Count: {len(hero_l1)}")
for c in hero_l1:
    img = c.get('image_support')
    if img in ['image_text', 'image_only']:
        print(f"  {c['id']:20s} | {c['name'][:70]} | img={img} | temp={c.get('temperature')}")

# Look for specific quote callout styles
print("\n=== QUOTE/CALLOUT in body_recognition + L1 ===")
reco = [c for c in comps if c.get('position') == 'body_recognition' and 'L1' in c.get('audience', []) and not c.get('retired', False)]
quote_match = [c for c in reco if any(k in c['name'].lower() for k in ['quote', 'callout', 'cream', 'pull', 'insight', 'mint', 'highlight'])]
print(f"Count: {len(quote_match)}")
for c in quote_match:
    print(f"  {c['id']:20s} | {c['name'][:70]} | img={c.get('image_support')} | msg={c.get('messaging')}")