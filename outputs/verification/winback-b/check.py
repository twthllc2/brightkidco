#!/usr/bin/env python3
"""20-point verification checklist for winback-b-24-e3-l3."""
import re

jsx = open("/root/projects/brightkidco/outputs/emails/winback-b/winback-b-24-e3-l3.jsx").read()
copy = open("/root/projects/brightkidco/outputs/copy/winback-b/winback-b-24-e3-l3.md").read()

# Strip JSX to plain text
t = re.sub(r'/\*.*?\*/', '', jsx, flags=re.DOTALL)
t = re.sub(r'<[^>]+>', ' ', t)
t = re.sub(r'\s+', ' ', t).strip()

checks = [
    ("Preview text", "This my last email unless you tell me otherwise"),
    ("S1 opening", "You've been at this longer than most of us can imagine"),
    ("S1 L3 quote", "I don't 'hope' anymore"),
    ("S1 closing", "you've been doing the hardest work a parent can do"),
    ("S2 intro", "I've heard versions of this from parents"),
    ("Quote 1", "40 hours of ABA a week for 2 years"),
    ("Quote 2", "residential program for 3 weeks"),
    ("Quote 3", "$2500 on a private potty consultant"),
    ("Quote 4", "stopped active training 2 years ago"),
    ("Quote 5", "He'll get there when he gets there"),
    ("Quote 6", "Maybe one day. Maybe never"),
    ("Maureen Bennie", "Maureen Bennie"),
    ("Nicholson", "Nicholson et al. (2019)"),
    ("S3 opening", "This my last email unless you tell me to keep going"),
    ("Mechanism", "gentle, sustained"),
    ("Offer", "$34.99"),
    ("60 days", "60 days to try it"),
    ("Guarantee", "full refund"),
    ("CTA", "When you decide, it's here"),
    ("Sign-off", "With care"),
    ("Lena name", "Lena"),
    ("PS link", "Explore Body-Signal Underwear"),
    ("Footer", "You're receiving this because you signed up"),
]

print("=== COPY VERBATIM CHECK ===")
all_pass = True
for label, snip in checks:
    ok = snip in t
    if not ok:
        all_pass = False
    print(f"  [{'PASS' if ok else 'FAIL'}] {label}: '{snip[:50]}'")

print("\n=== EXCLAMATION MARKS ===")
print(f"  Count in body: {t.count('!')}")

print("\n=== BRAND COLORS IN JSX ===")
for c in ["#FBF7F1", "#FFFFFF", "#1F2D2F", "#4A6568", "#8A9B9D", "#DBFFCD", "#FBF7EB", "#039902"]:
    print(f"  [{'PASS' if c in jsx else 'MISS'}] {c}")

print("\n=== 48PX SPACING ===")
print(f"  height:48 divs: {len(re.findall(r'height.*48', jsx))}")

print("\n=== BORDER RADIUS 12 ===")
print(f"  borderRadius:12 count: {len(re.findall(r'borderRadius.*12', jsx))}")

print("\n=== FONT (F.main) USAGE ===")
print(f"  F.main refs: {jsx.count('F.main')}")

print("\n=== FLOW IDENTITY ===")
print(f"  'winback-b' in JSX: {'winback-b' in jsx}")
print(f"  'E3' or 'Day 74' in JSX: {'Day 74' in jsx}")
print(f"  'L3' or 'Maria' in JSX: {'L3' in jsx or 'Maria' in jsx}")

print("\n=== FORBIDDEN WORDS ===")
for w in ["exclamation", "countdown", "limited time", "hurry", "last chance"]:
    print(f"  [{'PASS' if w not in t.lower() else 'FAIL'}] '{w}' absent")

print("\n=== SUMMARY ===")
print(f"  Verbatim: {'ALL PASS' if all_pass else 'SOME FAILURES'}")
