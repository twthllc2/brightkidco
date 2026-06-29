#!/usr/bin/env python3
"""Verify all component IDs in picks blocks are valid catalog IDs."""

import os
import re
import json

# Load catalog
with open("/root/projects/brightkidco/outputs/email-assets/component-catalog.json") as f:
    catalog = json.load(f)
valid_ids = set(c["id"] for c in catalog.get("components", []))
print(f"Catalog has {len(valid_ids)} valid component IDs")

# Scan all 93 files
COPY_BASE = "/root/projects/brightkidco/outputs/copy"
FLOWS_DIRS = ["cart", "checkout", "browse", "faq-library", "pp-at-risk", "pp-direct-upsell",
              "pp-education", "pp-extended-ed", "pp-extended-upsell", "pp-level-detection",
              "pp-mary-story", "pp-mid-checkin", "replenish-a", "replenish-b", "replenish-c",
              "review-request", "site-abandonment", "sunset", "transactional",
              "winback-a", "winback-b"]

# Pattern: **COMP_ID** — name
pat = re.compile(r"\*\*([A-Z]+(?:-[A-Z]+)?-\d+(?:\.\d+)?)\*\*")
bad_ids = set()
total_picks = 0
for fdir in FLOWS_DIRS:
    fpath = os.path.join(COPY_BASE, fdir)
    for fn in sorted(os.listdir(fpath)):
        if not fn.endswith(".md"):
            continue
        full_path = os.path.join(fpath, fn)
        with open(full_path) as f:
            text = f.read()
        if "STAGE 2 PICKS" not in text:
            continue
        for m in pat.finditer(text):
            cid = m.group(1)
            total_picks += 1
            if cid not in valid_ids:
                bad_ids.add(cid)
                # Print file
                # print(f"  {full_path}: {cid}")

print(f"Total picks scanned: {total_picks}")
print(f"Bad IDs: {sorted(bad_ids)}")
