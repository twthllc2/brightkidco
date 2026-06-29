#!/usr/bin/env python3
"""Print section details for select emails."""

import sys
sys.path.insert(0, "/root/projects/brightkidco/_notes/stage2-batch2")
from process_stage2 import (
    detect_sections_from_text, detect_sections_from_wireframe_file,
    parse_copy_sections, parse_wireframe_sections, email_level, get_palette,
    categorize_section, slugify, COPY_BASE, WIRE_BASE
)
import os
import re

SAMPLE_EMAILS = [
    "cart/cart-02-e1", "cart/cart-02-e2", "cart/cart-02-e3",
    "checkout/checkout-03-e1", "checkout/checkout-03-e2",
    "browse/browse-04-e1", "browse/browse-04-e2", "browse/browse-04-e3",
    "pp-extended-ed/pped-22-e1-gf",
    "winback-a/winback-a-19-e1-l3",
    "transactional/order-05-e1",
    "sunset/sunset-25-e1",
    "faq-library/faq-21-e1",
]

for email_id_full in SAMPLE_EMAILS:
    if "/" in email_id_full:
        flow_dir, eid = email_id_full.split("/", 1)
    else:
        flow_dir, eid = None, email_id_full
    copy_path = os.path.join(COPY_BASE, flow_dir, f"{eid}.md") if flow_dir else os.path.join(COPY_BASE, f"{eid}.md")
    if not os.path.exists(copy_path):
        print(f"  {email_id_full}: NOT FOUND")
        continue

    with open(copy_path, "r") as f:
        copy_text = f.read()

    sections, source = detect_sections_from_text(copy_text)
    # Skip palette lookup since we just want sections
    palette = None

    print(f"\n=== {email_id_full} (source={source}) ===")
    print(f"Sections: {len(sections)}")
    for sec_num, sec_title in sections:
        cat = categorize_section(sec_title)
        print(f"  {sec_num}. [{cat}] {sec_title}")

# Add PICKS_GF reference
from process_stage2 import PICKS_GF, PICKS_L1, PICKS_L2, PICKS_L3, PICKS_WINBACK, PICKS_SUNSET, PICKS_REPLENISH, PICKS_FAQ, PICKS_TX
