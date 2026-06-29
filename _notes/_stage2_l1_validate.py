"""Final cap validation for L1 Stage 2 picks."""
import re

base = '/root/projects/brightkidco/outputs/copy/welcome'
emails = [f'welcome-01-e{i}-l1' for i in range(1, 9)]

all_comps = {}
all_imgs = {}

for email in emails:
    f = f'{base}/{email}.md'
    with open(f) as fh:
        content = fh.read()
    # Find STAGE 2 PICKS section
    s2_match = re.search(r'^## STAGE 2 PICKS.*?^### Tracker updates', content, re.MULTILINE | re.DOTALL)
    if not s2_match:
        print(f'NO STAGE 2 PICKS in {email}')
        continue
    s2 = s2_match.group(0)
    comps = re.findall(r'COMPONENT PICKED: (\S+)', s2)
    imgs = re.findall(r'^- IMAGE PICKED: (\S+)', s2, re.MULTILINE)
    imgs = [i for i in imgs if i != 'none']
    print(f'{email}: {len(comps)} components, {len(imgs)} images')

    for c in comps:
        all_comps[c] = all_comps.get(c, 0) + 1
    for i in imgs:
        all_imgs[i] = all_imgs.get(i, 0) + 1

print()
print('=== HERO COMPONENTS USED ===')
for c, count in all_comps.items():
    if c.startswith('HERO-'):
        if c == 'HERO-14':
            print(f'  {c}: {count} (used in body, NOT in hero position)')
        else:
            print(f'  {c}: {count} (HERO position)')

print()
print('=== HERO UNIQUENESS CHECK ===')
hero_comps = [c for c in all_comps if c.startswith('HERO-') and c != 'HERO-14']
unique_heroes = set(hero_comps)
print(f'  Hero components in hero position: {len(hero_comps)} ({sorted(hero_comps)})')
print(f'  Unique heroes: {len(unique_heroes)}')
print(f'  All unique: {len(hero_comps) == len(unique_heroes)}')

print()
print('=== CAP CHECKS ===')
print(f'  Components over 8: {sum(1 for c in all_comps.values() if c > 8)}')
print(f'  Images over 25: {sum(1 for c in all_imgs.values() if c > 25)}')
print(f'  Max component count: {max(all_comps.values())} (cap 8)')
print(f'  Max image count: {max(all_imgs.values())} (cap 25)')
print(f'  Total unique components: {len(all_comps)}')
print(f'  Total unique images: {len(all_imgs)}')
print(f'  Total component picks: {sum(all_comps.values())}')
print(f'  Total image picks: {sum(all_imgs.values())}')
