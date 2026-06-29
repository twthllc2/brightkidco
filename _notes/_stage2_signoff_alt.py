import json
with open('/root/projects/brightkidco/outputs/email-assets/component-catalog.json') as f:
    c = json.load(f)

# Find ALL signoff-like components
print("=== All components with 'sign' or 'lena' or 'signature' or 'signoff' in name ===")
for x in c['components']:
    n = x['name'].lower()
    if any(k in n for k in ['sign', 'lena', 'signature', 'foot', 'clos', 'farewell']):
        aud = x.get('audience', [])
        img = x.get('image_support')
        pos = x.get('position')
        print(f"  {x['id']:15s} | {x['name'][:70]} | pos={pos} | aud={aud} | img={img}")

# Find all components with position signoff_footer
print("\n=== All signoff_footer position components ===")
for x in c['components']:
    if x.get('position') == 'signoff_footer':
        print(f"  {x['id']:15s} | {x['name'][:70]} | aud={x.get('audience')} | img={x.get('image_support')}")

# Find all emotional_support that could be signoff
print("\n=== emotional_support with sign-off feel ===")
for x in c['components']:
    if x.get('position') == 'emotional_support':
        aud = x.get('audience', [])
        if 'L1' in aud:
            print(f"  {x['id']:15s} | {x['name'][:70]} | aud={aud} | img={x.get('image_support')}")