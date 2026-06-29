#!/usr/bin/env python3
"""Fix candidate IDs in PICKS_* dicts to use proper catalog format."""

import re

# Read the process_stage2.py file
filepath = "/root/projects/brightkidco/_notes/stage2-batch2/process_stage2.py"
with open(filepath, "r") as f:
    text = f.read()

DEEP_FAMILIES = ["STORYDEEP", "CTADEEP", "DESDEEP", "EDUDEEP", "PRODEEP", "DEEP", "LETTER", "EMODEEP", "UTIL", "STORY"]

def normalize_comp_id(comp_id):
    for family in DEEP_FAMILIES:
        m = re.match(rf"^({family})-(\d+)$", comp_id)
        if m:
            prefix, num = m.group(1), m.group(2)
            return f"{prefix}-{int(num):02d}"
    return comp_id

# Pattern to match (like ("DEEP-1", "Unfinished Study", "none"))
PATTERN = re.compile(r'\("([A-Z]+(?:DEEP)?)-(\d+)"')

# We need to find all tuples inside PICKS_* dicts and normalize them.
# A simpler approach: find all quoted IDs like "DEEP-1", "STORY-1", "LETTER-1", etc. and normalize.
# But we should only modify IDs that are inside the PICKS_* dicts.

# Easiest: do a global replace for known patterns, but only for valid catalog IDs.
# Catalog uses IDs: DEEP-01 through DEEP-24, STORY-01 through STORY-15, etc.

# Find all tuple patterns and normalize the first element
def normalize_tuple(match):
    full = match.group(0)
    comp_id_match = re.match(r'\("([A-Z]+(?:DEEP)?)-(\d+)"', full)
    if comp_id_match:
        prefix = comp_id_match.group(1)
        num = int(comp_id_match.group(2))
        normalized = f'("{prefix}-{num:02d}"'
        return normalized + full[len(comp_id_match.group(0)):]
    return full

# Apply normalization to all tuples in PICKS dicts
# We'll find each PICKS_* dict and process its content
picks_pattern = re.compile(r'(PICKS_\w+\s*=\s*\{.*?\n\})', re.DOTALL)

def fix_picks(match):
    block = match.group(1)
    # Find all tuples and normalize first element
    def fix_tuple(tuple_match):
        comp_id = tuple_match.group(1)
        rest = tuple_match.group(2)
        return f'("{normalize_comp_id(comp_id)}"{rest}'
    fixed = re.sub(r'\("([A-Z]+(?:-DEEP)?-\d+)"(.*?)\)', fix_tuple, block, flags=re.DOTALL)
    return fixed

new_text = picks_pattern.sub(fix_picks, text)

with open(filepath, "w") as f:
    f.write(new_text)
print("Done. IDs normalized.")
