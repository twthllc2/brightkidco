#!/usr/bin/env python3
"""Remove appended STAGE 2 PICKS blocks from copy files."""

import os
import re

COPY_BASE = "/root/projects/brightkidco/outputs/copy"

FLOWS_DIRS = ["cart", "checkout", "browse", "faq-library", "pp-at-risk", "pp-direct-upsell",
              "pp-education", "pp-extended-ed", "pp-extended-upsell", "pp-level-detection",
              "pp-mary-story", "pp-mid-checkin", "replenish-a", "replenish-b", "replenish-c",
              "review-request", "site-abandonment", "sunset", "transactional",
              "winback-a", "winback-b"]

removed = 0
for fdir in FLOWS_DIRS:
    fpath = os.path.join(COPY_BASE, fdir)
    if not os.path.exists(fpath):
        continue
    for fn in sorted(os.listdir(fpath)):
        if not fn.endswith(".md"):
            continue
        full_path = os.path.join(fpath, fn)
        with open(full_path, "r") as f:
            text = f.read()
        # Find the STAGE 2 PICKS marker
        marker = "## STAGE 2 PICKS"
        idx = text.find(marker)
        if idx > 0:
            # Find the start of the line (the --- that precedes)
            # The block starts with \n---\n\n## STAGE 2 PICKS
            # Look backwards for the \n---
            start_marker = "\n---\n\n" + marker
            start_idx = text.find(start_marker, idx - 100)
            if start_idx < 0:
                # Try just \n\n## STAGE 2 PICKS
                start_marker = "\n\n" + marker
                start_idx = text.find(start_marker, idx - 100)
            if start_idx < 0:
                # Fallback: cut from idx
                start_idx = idx
            new_text = text[:start_idx].rstrip() + "\n"
            with open(full_path, "w") as f:
                f.write(new_text)
            removed += 1
print(f"Removed STAGE 2 PICKS blocks from {removed} files.")
