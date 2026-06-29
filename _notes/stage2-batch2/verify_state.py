#!/usr/bin/env python3
"""Verify component tracker state."""

import json

with open('/root/projects/brightkidco/_notes/component-usage.json') as f:
    cu = json.load(f)
print(f"Components tracked: {len(cu['components'])}")
print(f"Total picks (sum): {sum(cu['components'].values())}")
print(f"Top 10:")
for k, v in sorted(cu['components'].items(), key=lambda x: -x[1])[:10]:
    print(f"  {k}: {v}")

print(f"\nComponents at exactly 8 (capped):")
cap_count = sum(1 for v in cu['components'].values() if v == 8)
print(f"  {cap_count}")

print(f"\nAll HERO-* counts:")
for k, v in sorted(cu['components'].items()):
    if k.startswith("HERO-"):
        print(f"  {k}: {v}")
