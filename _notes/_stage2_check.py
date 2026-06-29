import json
with open('/root/projects/brightkidco/_notes/component-usage.json') as f:
    d = json.load(f)
print('=== Components with count >= 6 (approaching 8 cap) ===')
for c, count in sorted(d['components'].items(), key=lambda x: -x[1])[:20]:
    print(f'  {c}: {count}/8')
print()
print(f'Total unique components: {len(d["components"])}')
print(f'Components over 8 cap: {sum(1 for c in d["components"].values() if c > 8)}')

with open('/root/projects/brightkidco/_notes/image-usage.json') as f:
    img = json.load(f)
print()
print('=== Images with count >= 15 (approaching 25 cap) ===')
for i, count in sorted(img['images'].items(), key=lambda x: -x[1])[:20]:
    print(f'  {i}: {count}/25')
print()
print(f'Total unique images: {len(img["images"])}')
print(f'Images over 25 cap: {sum(1 for c in img["images"].values() if c > 25)}')