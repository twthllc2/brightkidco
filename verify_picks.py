#!/usr/bin/env python3
"""Verify and fix missing total_images in pick files."""
import json
from pathlib import Path

PICKS_DIR = Path("/root/projects/brightkidco/outputs/picks")

for f in sorted(PICKS_DIR.glob("welcome-01-e*.json")):
    with open(f) as fh:
        data = json.load(fh)
    
    # Count images
    img_count = 0
    for key, val in data.items():
        if key.startswith("section_"):
            if val.get("image_file"):
                img_count += 1
    
    current = data.get("total_images")
    if current != img_count:
        print(f"FIX: {f.name} - total_images={current}, actual={img_count}")
        data["total_images"] = img_count
        with open(f, "w") as fh:
            json.dump(data, fh, indent=2)
    else:
        print(f"OK:  {f.name} - total_images={img_count}")

print("Done!")
