import re

jsx_path = "/root/projects/brightkidco/outputs/emails/winback-b/winback-b-24-e2-l1.jsx"
with open(jsx_path) as f:
    jsx = f.read()

# Required brand tokens from checklist
tokens = {
    "teal": "#2BAEB4",
    "green": "#5DD07A",
    "ink": "#1F2D2F",
    "soft": "#4A6568",
    "cream": "#FBF7F1",
    "paper": "#FFFFFF",
    "muted": "#8A9B9D",
}

print("=== Brand Token Audit ===")
hex_colors = set(re.findall(r'["\']?(#[0-9A-Fa-f]{6})["\']?', jsx))
print(f"All hex colors in JSX: {sorted(hex_colors)}")

for name, hex_val in tokens.items():
    if hex_val in jsx:
        print(f"  {name} ({hex_val}): FOUND")
    else:
        print(f"  {name} ({hex_val}): *** MISSING ***")

brand_hexes = set(tokens.values())
extra = hex_colors - brand_hexes
if extra:
    print(f"\nNon-brand hex colors found: {sorted(extra)}")
else:
    print("\nAll hex colors are brand tokens.")

print("\n=== Font Check ===")
if "F.main" in jsx:
    print("  F.main (Questrial): USED throughout")
else:
    print("  *** F.main not found ***")
if "'Caveat'" in jsx or '"Caveat"' in jsx:
    print("  Caveat (handwriting): USED for signature")
else:
    print("  *** Caveat not found ***")

print("\n=== Flow Identity ===")
if "winback" in jsx.lower():
    print("  Flow identity: winback found")
else:
    print("  Flow identity: *** NOT FOUND ***")

# Check copy verbatim from the copy doc
copy_path = "/root/projects/brightkidco/outputs/copy/winback-b/winback-b-24-e2-l1.md"
with open(copy_path) as f:
    copy = f.read()

# Extract key paragraphs to compare
# Check hook
hook1 = "You signed up 67 days ago. In that time, you've read the mechanism, you understand the interoception gap, and you're still asking the same question"
hook2 = "That's not skepticism. That's being a good parent."
hook3 = "a 2025 review of 49 scientific studies confirmed that body signal difficulties"

# Check mechanism box
mech = "BrightKidCo's Body-Signal Learning Layer doesn't train behavior, it gives the brain formation it's been missing"

# Check offer copy
offer1 = "One pair, $34.99. Put it alongside your current routine"
offer2 = "And if you're ready for the full approach? The 3+3 Bundle ($79.99, free shipping, 6 pairs, 62% savings)"

# Check CTA
cta = "See if the signal works for your child"

# Check signoff
signoff = "Customer Support · Mom of two autistic sons"

print("\n=== Copy Verbatim Check ===")
checks = [
    ("Hook opening", hook1),
    ("Hook validation", hook2),
    ("Hook citation", hook3),
    ("Mechanism box", mech),
    ("Offer 1-pair", offer1),
    ("Offer bundle", offer2),
    ("CTA text", cta),
    ("Signoff role", signoff),
]
for name, text in checks:
    if text in jsx:
        print(f"  {name}: MATCH")
    else:
        print(f"  {name}: *** MISMATCH ***")

# Check that the wireframe fidelity
print("\n=== Wireframe Fidelity ===")
wireframe_path = "/root/projects/brightkidco/outputs/wireframes/winback-b/winback-b-24-e2-l1.md"
with open(wireframe_path) as f:
    wf = f.read()

sections = ["Header", "Brand-Green Divider", "Hook", "Validation + Mechanism", "Updated Offer", "CTA Button", "Lena Sign-Off", "Footer"]
for s in sections:
    if s.lower() in wf.lower():
        print(f"  {s}: in wireframe ✓")
    else:
        print(f"  {s}: *** NOT in wireframe ***")

# Check JSX has all sections
jsx_sections = ["SECTION 1", "SECTION 2", "SECTION 3", "SECTION 4", "SECTION 5", "SECTION 6", "SECTION 7", "SECTION 8"]
for s in jsx_sections:
    if s in jsx:
        print(f"  {s}: in JSX ✓")
    else:
        print(f"  {s}: *** NOT in JSX ***")

# Check no repetition
print("\n=== No Repetition Check ===")
# Count occurrences of key phrases
for phrase in ["You signed up 67 days ago", "hope-fear", "Body-Signal Learning Layer", "60-Day Guarantee", "60 days"]:
    count = jsx.count(phrase)
    print(f"  '{phrase}': {count} occurrences")

print("\n=== Image Briefs ===")
# Check if product image is referenced
if "product-photos" in jsx or "flat-lay" in jsx or "ImgFrame" in jsx:
    print("  Product image: referenced in JSX")
else:
    print("  Product image: NOT in JSX (no hero image — correct per wireframe)")

print("\n=== Dark Mode Prep ===")
# Check for dark mode considerations
if "dark" in jsx.lower() or "prefers-color-scheme" in jsx.lower():
    print("  Dark mode: has considerations")
else:
    print("  Dark mode: inline styles only (standard for email)")

print("\n=== Conversion Rules ===")
if "60 days" in jsx.lower() or "60-day" in jsx.lower():
    print("  60-day guarantee: present ✓")
if "$34.99" in jsx:
    print("  Single pair price: $34.99 ✓")
if "$79.99" in jsx:
    print("  Bundle price: $79.99 ✓")
if "free shipping" in jsx.lower():
    print("  Free shipping: mentioned ✓")
if "Full refund" in jsx or "full refund" in jsx:
    print("  Refund promise: present ✓")

print("\n=== Level Calibration ===")
if "67 days" in jsx:
    print("  Precision number (67 days): present ✓")
if "P.S." in jsx:
    print("  P.S. block: present ✓")
if "With care" in jsx:
    print("  Sign-off 'With care,': present ✓")
if "See if" in jsx:
    print("  CTA 'See if' (medium aggression): present ✓")
