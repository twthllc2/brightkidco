#!/usr/bin/env python3
"""Inspect tracker JSON files."""
import json
import os

notes_dir = "/root/projects/brightkidco/_notes"

# Load component-usage.json
cu_path = os.path.join(notes_dir, "component-usage.json")
with open(cu_path, "r") as f:
    cu = json.load(f)

print(f"component-usage.json: {len(cu.get('components', {}))} components tracked")
sorted_components = sorted(cu.get('components', {}).items(), key=lambda x: -x[1])
print("Top 20 most used components:")
for k, v in sorted_components[:20]:
    print(f"  {k}: {v}/8")
print(f"\nTotal component picks: {sum(cu.get('components', {}).values())}")

# Load image-usage.json
iu_path = os.path.join(notes_dir, "image-usage.json")
with open(iu_path, "r") as f:
    iu = json.load(f)

print(f"\nimage-usage.json: {len(iu.get('images', {}))} images tracked")
sorted_images = sorted(iu.get('images', {}).items(), key=lambda x: -x[1])
print("All images:")
for k, v in sorted_images:
    print(f"  {k}: {v}/25")
print(f"\nTotal image picks: {sum(iu.get('images', {}).values())}")
