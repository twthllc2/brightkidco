#!/usr/bin/env python3
"""Debug cart-02-e3 sections."""

import re
import sys

# Copy of parse_copy_sections
def parse_copy_sections(text):
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

    # Pattern 7: "[ROLE: TITLE]"
    for m in re.finditer(r"^\[ROLE:\s*(.+?)\]", text, re.IGNORECASE | re.MULTILINE):
        title = m.group(1).strip()
        n = len(sections) + 1
        if (n, title) not in seen:
            sections.append((n, title))
            seen.add((n, title))

    # Pattern 8: "[NAME: section-N-title]"
    for m in re.finditer(r"^\[NAME:\s*(.+?)\]", text, re.IGNORECASE | re.MULTILINE):
        title = m.group(1).strip()
        n = len(sections) + 1
        if (n, title) not in seen:
            sections.append((n, title))
            seen.add((n, title))

    return sections


with open('/root/projects/brightkidco/outputs/copy/cart/cart-02-e3.md') as f:
    text = f.read()
sections = parse_copy_sections(text)
print('cart-02-e3 sections:', len(sections))
for s in sections[:10]:
    print(' ', s)

print()
print('--- review-18-e2 ---')
with open('/root/projects/brightkidco/outputs/copy/review-request/review-18-e2.md') as f:
    text = f.read()
sections = parse_copy_sections(text)
print('review-18-e2 sections:', len(sections))
for s in sections[:10]:
    print(' ', s)
