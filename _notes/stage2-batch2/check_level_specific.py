#!/usr/bin/env python3
"""Verify section parsing on level-specific emails."""

import sys
sys.path.insert(0, "/root/projects/brightkidco/_notes/stage2-batch2")
from process_stage2 import (
    detect_sections_from_text, detect_sections_from_wireframe_file,
    parse_copy_sections, parse_wireframe_sections, email_level, get_palette,
    categorize_section, slugify, COPY_BASE, WIRE_BASE
)
import os
import re

# Check all pp-extended-ed and winback-a/b emails
SAMPLE = []
for level in ["gf", "l1", "l2", "l3"]:
    for n in range(1, 6):
        SAMPLE.append(f"pp-extended-ed/pped-22-e{n}-{level}")
for level in ["gf", "l1", "l2", "l3"]:
    for n in range(1, 4):
        SAMPLE.append(f"winback-a/winback-a-19-e{n}-{level}")
        SAMPLE.append(f"winback-b/winback-b-24-e{n}-{level}")

for email_id_full in SAMPLE:
    flow_dir, eid = email_id_full.split("/", 1)
    copy_path = os.path.join(COPY_BASE, flow_dir, f"{eid}.md")
    if not os.path.exists(copy_path):
        continue
    with open(copy_path, "r") as f:
        copy_text = f.read()
    sections, source = detect_sections_from_text(copy_text)
    if not sections:
        wf_filename = f"{eid}-wireframe.md"
        wf_path = os.path.join(WIRE_BASE, flow_dir, wf_filename)
        if os.path.exists(wf_path):
            with open(wf_path, "r") as f:
                wf_text = f.read()
            sections, source = detect_sections_from_wireframe_file(wf_text)
    if not sections:
        print(f"  {email_id_full}: NO SECTIONS")
        continue
    print(f"=== {email_id_full} ({source}) === {len(sections)} sections")
