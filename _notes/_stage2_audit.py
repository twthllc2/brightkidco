"""Audit which components I picked and their current counts."""
import json

with open('/root/projects/brightkidco/_notes/component-usage.json') as f:
    cu = json.load(f)

my_picks = {
    'E1': ['HERO-5', '4.5', 'LETTER-10', 'M10', 'CTAMAX-01', '12.1'],
    'E2': ['9.2', '4.4', 'DEEP-16', 'LETTER-11', 'PROD-3', '12.1'],
    'E3': ['HERO-18', 'EDU-3', '32.3', 'LETTER-12', 'PROD-1', 'OBJ-15.4', 'PROD-3', 'REV-04.2', 'CTAMAX-06', '12.1'],
    'E4': ['HERO-13', 'DEEP-13', 'LETTER-05', 'EDU-7', 'SP-02', 'PROD-4', 'REV-08.4', 'CTADEEP-02', 'CTAMAX-04', 'DEEP-19', '12.1'],
    'E5': ['HERO-3', '7.2', 'EDU-11', 'EDU-8', 'DEEP-22', 'PROD-7', 'CTAMAX-05', 'CTAMAX-09', '12.1'],
    'E6': ['HERO-19', '7', 'STORY-14', 'DEEP-15', 'REV-08.4', 'CTAMAX-08', 'CTAMAX-05', '12.1'],
    'E7': ['DEEP-16', 'LETTER-01', '4.5', 'DEEP-10', 'LETTER-11', 'PROD-2', '5', 'CTAMAX-07', '12.1'],
    'E8': ['HERO-3', '9', 'STORY-15', 'PROD-3', '5', 'CTAMAX-04', '12.1', 'OBJ-15.4'],
}

print("=== My picks audit ===")
all_over_cap = []
for email, picks in my_picks.items():
    print(f"\n{email}:")
    for cid in picks:
        c = cu['components'].get(cid, 0)
        flag = ' ⚠️' if c > 8 else ''
        if c > 8:
            all_over_cap.append((email, cid, c))
        print(f"  {cid}: {c}/8{flag}")

print(f"\n=== Over cap from my picks: {len(all_over_cap)} ===")
for e, cid, c in all_over_cap:
    print(f"  {e}: {cid} = {c}")

# Calculate total picks across my 8 emails
total_picks = sum(len(p) for p in my_picks.values())
print(f"\nTotal component picks across 8 emails: {total_picks}")
unique_components = set()
for p in my_picks.values():
    unique_components.update(p)
print(f"Unique components picked: {len(unique_components)}")