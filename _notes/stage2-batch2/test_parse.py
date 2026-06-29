#!/usr/bin/env python3
"""Test section parsers on all 93 emails, using both copy file and embedded wireframe."""

import re
import os

COPY_BASE = "/root/projects/brightkidco/outputs/copy"

def detect_sections_from_text(text):
    """Return list of (num, title) tuples from copy/wireframe text."""
    # First, look for embedded wireframe (after `## WIREFRAME` marker)
    wireframe_start = -1
    for marker in ["## WIREFRAME", "## WIREFRAME —"]:
        idx = text.find(marker)
        if idx > 0:
            wireframe_start = idx
            break

    # If wireframe exists, prefer wireframe sections
    if wireframe_start > 0:
        wf_text = text[wireframe_start:]
        sections = parse_wireframe_sections(wf_text)
        if sections:
            return sections, "wireframe"

    # Otherwise, parse copy sections
    sections = parse_copy_sections(text)
    return sections, "copy"

def parse_wireframe_sections(wf_text):
    """Parse [SECTION N: TITLE] format from wireframe."""
    sections = []
    # Match [SECTION N: TITLE]
    for m in re.finditer(r"\[SECTION\s+(\d+)\s*[:\.]\s*([^\]]+)\]", wf_text):
        n = int(m.group(1))
        title = m.group(2).strip()
        # Trim dashes and whitespace
        title = re.sub(r"^[—\-]+\s*", "", title).strip()
        sections.append((n, title))
    # Match [NAME: section-N-title] — extract N from "section-N-title"
    if not sections:
        for m in re.finditer(r"^\[NAME:\s*section-(\d+)-(.+?)\]", wf_text, re.IGNORECASE | re.MULTILINE):
            n = int(m.group(1))
            title = m.group(2).strip().replace("-", " ").title()
            sections.append((n, title))
    # Match [ROLE: ...] (when in wireframe context)
    if not sections:
        for m in re.finditer(r"^\[ROLE:\s*(.+?)\]", wf_text, re.IGNORECASE | re.MULTILINE):
            title = m.group(1).strip()
            n = len(sections) + 1
            sections.append((n, title))
    # Dedupe by num, keep first
    seen = {}
    for n, t in sections:
        if n not in seen:
            seen[n] = t
    return [(n, seen[n]) for n in sorted(seen.keys())]

def parse_copy_sections(text):
    """Parse various copy section formats."""
    # Stop markers
    stop_at = None
    for marker in ["## Copy Notes", "## Source Citations", "## Source", "## Creative Strategy", "## BIG IDEA", "## Big Idea", "## 2. ", "## 3. ", "## LAYOUT", "## Layout", "## Color", "## TYPOGRAPHY", "## FURNITURE", "## CONTRAPTION", "## EASTER EGG", "## MOTION", "## Pre-Send QA", "## Success Criteria", "## WIREFRAME", "## Wireframe"]:
        idx = text.find(marker)
        if idx > 0 and (stop_at is None or idx < stop_at):
            stop_at = idx
    if stop_at:
        text = text[:stop_at]

    sections = []
    seen = set()

    # Pattern 1: "### Section N: Title"
    for m in re.finditer(r"^###\s+Section\s+(\d+)[:\.\s—\-]+(.+?)$", text, re.IGNORECASE | re.MULTILINE):
        n = int(m.group(1))
        title = m.group(2).strip()
        title = re.sub(r"^[\*\(]+|[\*\)]+$", "", title).strip()
        if (n, title) not in seen:
            sections.append((n, title))
            seen.add((n, title))

    # Pattern 2: "### SECTION N, Title"
    for m in re.finditer(r"^###\s+SECTION\s+(\d+)[,\s—\-]+(.+?)$", text, re.IGNORECASE | re.MULTILINE):
        n = int(m.group(1))
        title = m.group(2).strip()
        title = re.sub(r"^[\*\(]+|[\*\)]+$", "", title).strip()
        if (n, title) not in seen:
            sections.append((n, title))
            seen.add((n, title))

    # Pattern 3: "**Section N, Title**"
    for m in re.finditer(r"^\*\*Section\s+(\d+)[,\s—\-]+(.+?)\*\*", text, re.IGNORECASE | re.MULTILINE):
        n = int(m.group(1))
        title = m.group(2).strip()
        if (n, title) not in seen:
            sections.append((n, title))
            seen.add((n, title))

    # Pattern 4: "**[SECTION: TITLE]**" or "[SECTION: TITLE]"
    for m in re.finditer(r"^\*?\*?\[SECTION:\s*(.+?)\]\*?\*?", text, re.IGNORECASE | re.MULTILINE):
        title = m.group(1).strip()
        n = len(sections) + 1
        if (n, title) not in seen:
            sections.append((n, title))
            seen.add((n, title))

    # Pattern 5: "### HOOK — ..."
    for m in re.finditer(r"^###\s+((?:HOOK|OPENING|OBSERVATION|VALIDATION|MECHANISM(?:\s+REMINDER)?|MECHANISM\s+REFRESHER|OFFER|CTA|PERMISSION CTA|CTA\s*—\s*PERMISSION(?:-FRAMED)?|SIGN-?OFF|FOOTER|SOCIAL PROOF|PRODUCT|GUARANTEE|RECOGNITION|NEXT|PREVIEW))(\s*[—\-]+(.*?))?$", text, re.IGNORECASE | re.MULTILINE):
        title = m.group(1).strip()
        suffix = m.group(3)
        if suffix:
            title = title + " — " + suffix.strip()
        n = len(sections) + 1
        if (n, title) not in seen:
            sections.append((n, title))
            seen.add((n, title))

    # Pattern 6: "**{Hook, Universal Recognition}**"
    for m in re.finditer(r"^\*\*\{?(Hook|Validation|Mechanism|CTA|Offer|Permission|Sign|Off|Footer|Recognition|Testimonial|Social|Product|Guarantee|Observation|Permission CTA|Subject|Preheader)(?:\s*[,\—\-:]\s*(.*?))?\}?\*\*$", text, re.IGNORECASE | re.MULTILINE):
        title = m.group(1).strip()
        suffix = m.group(2)
        if suffix:
            title = title + ", " + suffix.strip()
        n = len(sections) + 1
        if (n, title) not in seen:
            sections.append((n, title))
            seen.add((n, title))

    # Pattern 7: "[ROLE: TITLE]" — used in some copy files
    for m in re.finditer(r"^\[ROLE:\s*(.+?)\]", text, re.IGNORECASE | re.MULTILINE):
        title = m.group(1).strip()
        n = len(sections) + 1
        if (n, title) not in seen:
            sections.append((n, title))
            seen.add((n, title))

    # Pattern 8: "[NAME: section-N-title]" — used in some copy files
    for m in re.finditer(r"^\[NAME:\s*(.+?)\]", text, re.IGNORECASE | re.MULTILINE):
        title = m.group(1).strip()
        n = len(sections) + 1
        if (n, title) not in seen:
            sections.append((n, title))
            seen.add((n, title))

    return sections


# Test on all 93 emails
FLOWS_DIRS = ["cart", "checkout", "browse", "faq-library", "pp-at-risk", "pp-direct-upsell",
              "pp-education", "pp-extended-ed", "pp-extended-upsell", "pp-level-detection",
              "pp-mary-story", "pp-mid-checkin", "replenish-a", "replenish-b", "replenish-c",
              "review-request", "site-abandonment", "sunset", "transactional",
              "winback-a", "winback-b"]

total = 0
no_sections = []
section_counts = {}
source_counts = {"copy": 0, "wireframe": 0, "none": 0}
for fdir in FLOWS_DIRS:
    fpath = os.path.join(COPY_BASE, fdir)
    if not os.path.exists(fpath):
        continue
    for fn in sorted(os.listdir(fpath)):
        if not fn.endswith(".md"):
            continue
        email_id = fn[:-3]
        full_path = os.path.join(fpath, fn)
        with open(full_path) as f:
            text = f.read()
        sections, source = detect_sections_from_text(text)
        total += 1
        section_counts[email_id] = (len(sections), source)
        if not sections:
            no_sections.append((email_id, fdir, full_path))
            source_counts["none"] += 1
        else:
            source_counts[source] += 1

print(f"Total emails: {total}")
print(f"Source breakdown: {source_counts}")
print(f"No sections detected: {len(no_sections)}")
for eid, fdir, fp in no_sections:
    print(f"  {eid}  ({fdir})")
