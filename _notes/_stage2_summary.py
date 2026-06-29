"""Final summary report for Stage 2 L1 Welcome."""
import json
from pathlib import Path

ROOT = Path('/root/projects/brightkidco')
WELCOME_DIR = ROOT / 'outputs/copy/welcome'

print("="*70)
print("STAGE 2 SUMMARY: Welcome Flow L1 (8 emails)")
print("="*70)

emails = ['e1', 'e2', 'e3', 'e4', 'e5', 'e6', 'e7', 'e8']
total_components = 0
total_images = 0
for e in emails:
    path = WELCOME_DIR / f'welcome-01-{e}-l1.md'
    with open(path) as f:
        content = f.read()

    # Extract section count
    import re
    sections = re.findall(r'### Section \d+', content)
    signoff = re.findall(r'### Signoff', content)
    total_sections = len(sections) + len(signoff)

    # Count components and images
    comp_ids = re.findall(r'COMPONENT PICKED:\s+(\S+)', content)
    img_ids = re.findall(r'IMAGE PICKED:\s+(\S+\.png|\S+\.jpg)', content)

    # Filter out REMEDIATION block
    if 'STAGE 2 REMEDIATION' in content:
        # Find the STAGE 2 REMEDIATION line and ignore everything after it
        pic_block = content.split('## STAGE 2 REMEDIATION')[0]
    else:
        pic_block = content
    comp_ids = re.findall(r'COMPONENT PICKED:\s+(\S+)', pic_block)
    img_ids = re.findall(r'IMAGE PICKED:\s+(\S+\.png|\S+\.jpg)', pic_block)

    n_comp = len(comp_ids)
    n_img = len(img_ids)
    total_components += n_comp
    total_images += n_img

    print(f"\n  welcome-01-{e}-l1: {total_sections} ROLE slots → {n_comp} components, {n_img} images")
    print(f"    Components: {', '.join(comp_ids)}")
    if img_ids:
        print(f"    Images: {', '.join(img_ids)}")

print(f"\n  TOTAL across 8 emails: {total_components} component picks, {total_images} image picks")

# Show final tracker state
print("\n" + "="*70)
print("TRACKER STATE (post Stage 2 L1 Welcome)")
print("="*70)

with open(ROOT / '_notes/component-usage.json') as f:
    cu = json.load(f)
with open(ROOT / '_notes/image-usage.json') as f:
    iu = json.load(f)

my_components = {
    'HERO-5', '4.5', 'LETTER-10', 'M10', 'CTAMAX-01', '12.1',
    '9.2', '4.4', 'DEEP-16', 'LETTER-11', 'PROD-3',
    'HERO-18', 'EDU-3', '32.3', 'LETTER-12', 'PROD-1', 'OBJ-15.4', 'REV-04.2', 'CTAMAX-06',
    'HERO-13', 'DEEP-13', 'LETTER-05', 'EDU-7', 'SP-02', 'PROD-4', 'REV-08.4', 'CTADEEP-02', 'CTAMAX-04', 'DEEP-19',
    'HERO-3', '7.2', 'EDU-11', 'EDU-8', 'DEEP-22', 'PROD-7', 'CTAMAX-05', 'CTAMAX-09',
    'HERO-19', '7', 'STORY-14', 'DEEP-15', 'CTAMAX-08',
    'LETTER-01', 'DEEP-10', 'PROD-2', '5', 'CTAMAX-07',
    '9', 'STORY-15', 'OBJ-15.4'
}

print("\nMy picks (unique components) usage after Stage 2:")
for c in sorted(my_components):
    cnt = cu['components'].get(c, 0)
    flag = ' ⚠️OVER CAP' if cnt > 8 else ''
    print(f"  {c:15s}: {cnt}/8{flag}")

print("\nMy picks (images):")
my_images = [
    'lifestyle/toddler-potty-ladder-yellow-woodland.png',
    'flat-lay/training-pant-fox-woodland-white.jpg',
    'lifestyle/toddler-backpack-moon-cloud-blue.png',
    'flat-lay/training-pant-fox-red-white.jpg',
    'lifestyle/founders-holding-pants-yellow-watermelon.png',
    'flat-lay/training-pant-bunny-hearts-pink.jpg',
    'flat-lay/training-pant-penguin-multicolor.jpg',
    'lifestyle/toddler-livingroom-dino-yellow.png',
    'flat-lay/training-pant-watermelon-pink.jpg',
    'lifestyle/toddler-playing-train-moon-cloud-blue.png',
]
for img in sorted(set(my_images)):
    cnt = iu['images'].get(img, 0)
    print(f"  {img:55s}: {cnt}/25")