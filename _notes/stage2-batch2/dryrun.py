#!/usr/bin/env python3
"""Dry-run: parse all 93 emails and report section counts without writing anything."""

import sys
sys.path.insert(0, "/root/projects/brightkidco/_notes/stage2-batch2")
from process_stage2 import (
    FLOWS, detect_sections_from_text, detect_sections_from_wireframe_file,
    parse_copy_sections, parse_wireframe_sections, email_level, get_palette,
    categorize_section, slugify, COPY_BASE, WIRE_BASE
)
import os
import re

queue = []
for flow_key, flow in FLOWS.items():
    for email_id in flow["emails"]:
        queue.append((flow_key, email_id, email_level(email_id)))

total_sections = 0
total_emails = 0
no_sections_emails = []

for flow_key, email_id, level in queue:
    flow = FLOWS[flow_key]
    copy_path = os.path.join(COPY_BASE, flow["dir"], f"{email_id}.md")
    if not os.path.exists(copy_path):
        continue

    with open(copy_path, "r") as f:
        copy_text = f.read()

    sections, source = detect_sections_from_text(copy_text)

    if not sections:
        wf_filename = f"{email_id}-wireframe.md"
        wf_path = os.path.join(WIRE_BASE, flow["dir"], wf_filename)
        if os.path.exists(wf_path):
            with open(wf_path, "r") as f:
                wf_text = f.read()
            sections, source = detect_sections_from_wireframe_file(wf_text)

    if not sections:
        m = re.match(rf"(\w+)-(\d+)-e(\d+)-(\w+)", email_id)
        if m and flow["dir"] in ["winback-a", "winback-b", "pp-extended-ed"]:
            fname_tpl_map = {
                "winback-a": "winback-a-19-e{}-{}-wireframe.md",
                "winback-b": "winback-b-24-e{}-{}-wireframe.md",
                "pp-extended-ed": "pped-22-e{}-{}-wireframe.md",
            }
            fname = fname_tpl_map[flow["dir"]].format(m.group(3), m.group(4))
            wf_path = os.path.join(WIRE_BASE, flow["dir"], fname)
            if os.path.exists(wf_path):
                with open(wf_path, "r") as f:
                    wf_text = f.read()
                sections, source = detect_sections_from_wireframe_file(wf_text)

    if not sections:
        no_sections_emails.append((email_id, flow_key))
    else:
        total_sections += len(sections)
        total_emails += 1

print(f"Total emails processed: {len(queue)}")
print(f"Emails with sections: {total_emails}")
print(f"Total sections found: {total_sections}")
print(f"Average sections per email: {total_sections/max(total_emails,1):.1f}")
print(f"\nEmails without sections ({len(no_sections_emails)}):")
for eid, fk in no_sections_emails:
    print(f"  {eid}  ({fk})")
