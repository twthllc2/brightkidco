#!/usr/bin/env python3
"""
Stage 2 WRAP tag applicator.
Adds - **WRAP: <value>** and - WHY: <reason> lines to each "section"
in the STAGE 2 PICKS block of every copy file.

Handles multiple section header formats:
  - "### Section 1: Hook"
  - "### Hero (Section 1: Opening)"
  - "### HERO (UNIQUE — never reused)"
  - "### SECTION 1: Hook / Observation"
  - "### Components (7/8)"  (table format with | Component ID |)
  - "### Images (5/6)"  (just images, no per-image WRAP)

Rules (apply in order):
1. Sign-offs (12.1, 12.2, UTIL-05, EMODEEP-18/04/03/15):
   - WRAP: component-text-only (locked, not in cap)

2. Image-required components (image IS the component):
   HERO-*, PROD-*, 6.1, 6.2, 6.3, IMAGE-*, IMG-*, image-showcase,
   FLOWIMG-*, CAMIMG-*, PDISP-*, DEEPPROD-*, FLOWDEEP-*,
   EDU-* (per task: "EDU → image-inside-component"),
   M10, M2, 21.1, 19.2:
   - image picked: WRAP: image-inside-component
   - no image: WRAP: image-required-component (BUG)

3. Text-link CTAs (CTADEEP-*, CTA-*, 5.1, 5, 5.2, 6, 8, PERS-*, REV-*):
   - image picked: WRAP: image-standalone
   - no image: WRAP: component-text-only

4. Letter / pull-quote / testimonial (LETTER-*, 4.3, 4.4, 4.5,
   SP-*, SP2, SP-13, PS-*, M3, 22.1, 22.2):
   - image picked: WRAP: image-inside-component
   - no image: WRAP: component-text-only

5. Content blocks (DEEP-01..25, EMO-*, EMO-1..15, BONUS-*,
   PSYDEEP-*, EJ-*, EMODEEP-*, STORY-*, OBJ-*, CMP-*, PSYCH-*,
   STATS-*, VSOCIAL-*, TRUST-*, TRUSTDEEP-*):
   - image picked: WRAP: image-standalone
   - no image: WRAP: component-text-only

6. Image + text-only component: WRAP: image-standalone

Section header formats handled:
  - "### Section 1: Hook"
  - "### Hero (Section 1: Opening)"
  - "### HERO (UNIQUE — never reused)"
  - "### SECTION 1: Hook / Observation" (uppercase)
  - "### Sign-off / Lena / Footer / CTA ..."
  - "### Components (7/8)" (table format with || ROLE | **COMPID** | reason |)
  - "### Images (5/6)" (just image list, no per-image WRAP)
"""
import re
from pathlib import Path
from collections import defaultdict

COPY_DIR = Path("/root/projects/brightkidco/outputs/copy")
NOTES_DIR = Path("/root/projects/brightkidco/_notes")

# === Rule 1: sign-offs (locked, not in cap) ===
SIGNOFF_IDS = {
    "12.1", "12.2", "UTIL-05",
    "EMODEEP-18", "EMODEEP-04", "EMODEEP-03", "EMODEEP-15",
}

# === Rule 2: image-required components (image IS the component) ===
# Note: All HERO-/PROD-/IMAGE-/FLOWIMG-/CAMIMG-/PDISP-/DEEPPROD-/EDU-* (per task: EDU → image-inside).
# PS- and SP- are NOT in rule 2 — they fall to rule 4 (letter).
def _is_image_required(cid):
    """Components that are always image-inside (per task rule 2)."""
    return cid.startswith((
        "HERO-", "PROD-", "IMAGE-", "IMG-", "FLOWIMG-", "CAMIMG-",
        "PDISP-", "DEEPPROD-", "EDU-", "FLOWDEEP-",
    ))


IMAGE_INSIDE_IDS = {
    # Explicit IDs (some that don't follow the prefix pattern)
    "6.1", "6.2", "6.3",
    "image-showcase",
    "M10", "M2",
    "21.1", "19.2",
    "EDU-2", "EDU-3", "EDU-8", "EDU-10", "EDU-11",
}

# === Rule 3: text-link CTAs ===
TEXT_LINK_CTA_IDS = {
    "CTADEEP-1", "CTADEEP-2", "CTADEEP-3", "CTADEEP-4", "CTADEEP-5",
    "CTA-1", "CTA-2", "CTA-3", "CTA-4", "CTA-5", "CTA-6", "CTA-7", "CTA-8",
    "5.1", "5", "5.2",
    "6",
    "8",
    "PERS-1", "PERS-2", "PERS-3",
    "REV-1", "REV-2", "REV-3", "REV-4", "REV-5",
}

# === Rule 4: pull-quote / testimonial / letter ===
LETTER_IDS = {
    "LETTER-1", "LETTER-2", "LETTER-3", "LETTER-4", "LETTER-5",
    "4.3", "4.4", "4.5",
    "SP-1", "SP-2", "SP-3", "SP-4", "SP-5", "SP-6", "SP-7", "SP-8",
    "SP-9", "SP-10", "SP-11", "SP-12", "SP-13",
    "PS-1", "PS-2", "PS-3", "PS-4", "PS-5",
    "SP2",
    "M3",
    "22.1", "22.2",
}

# === Rule 5: content blocks ===
CONTENT_IDS = set()
CONTENT_IDS |= {f"DEEP-{i:02d}" for i in range(1, 26)}
CONTENT_IDS |= {f"EMO-{i}" for i in range(1, 16)}
CONTENT_IDS |= {f"BONUS-{i}" for i in range(1, 6)}
CONTENT_IDS |= {f"PSYDEEP-{i}" for i in range(1, 6)}
CONTENT_IDS |= {f"EJ-{i}" for i in range(1, 6)}


def _norm(s: str) -> str:
    return s.upper().replace("_", "-").strip()


SIGNOFF_IDS_N = {_norm(x) for x in SIGNOFF_IDS}
IMAGE_INSIDE_IDS_N = {_norm(x) for x in IMAGE_INSIDE_IDS}
TEXT_LINK_CTA_IDS_N = {_norm(x) for x in TEXT_LINK_CTA_IDS}
LETTER_IDS_N = {_norm(x) for x in LETTER_IDS}
CONTENT_IDS_N = {_norm(x) for x in CONTENT_IDS}


def classify(component_id: str, has_image: bool, role_hint: str = ""):
    """Return (wrap_value, why_sentence) based on rules."""
    cid_n = _norm(component_id)
    role_lower = (role_hint or "").lower()

    # Rule 1: sign-offs
    if cid_n in SIGNOFF_IDS_N:
        return (
            "component-text-only",
            "Sign-off/footer is hardcoded in locked footer.html, not a body component.",
        )
    if any(cid_n.startswith(p) for p in ("UTIL-",)) and "signoff" in role_lower:
        return (
            "component-text-only",
            "Sign-off component (locked, not in cap).",
        )

    # Rule 2: image-required components (check explicit set first)
    if cid_n in IMAGE_INSIDE_IDS_N or _is_image_required(cid_n):
        if has_image:
            return (
                "image-inside-component",
                "Image IS the component (hero/product showcase).",
            )
        return (
            "image-required-component",
            "Component requires image but none picked (BUG).",
        )

    # Rule 3: text-link CTAs
    if cid_n in TEXT_LINK_CTA_IDS_N:
        if has_image:
            return (
                "image-standalone",
                "CTA button is text-only by design; image is decorative (placed between sections).",
            )
        return (
            "component-text-only",
            "CTA is text-link or button only.",
        )

    # Rule 4: letter / pull-quote / testimonial
    if cid_n in LETTER_IDS_N:
        if has_image:
            return (
                "image-inside-component",
                "Parent-quote photo anchors the callout.",
            )
        return (
            "component-text-only",
            "Quote/text-only callout.",
        )

    # Rule 5: content blocks
    if cid_n in CONTENT_IDS_N:
        if has_image:
            return (
                "image-standalone",
                "Content block; image is decorative (placed between sections).",
            )
        return (
            "component-text-only",
            "Content block, text-only.",
        )

    # Heuristics for common prefix families (in case our explicit list missed variants)
    # - HERO-/PROD-/IMAGE-/IMG-/FLOWIMG-/CAMIMG-/PDISP-/DEEPPROD- → image-required
    if any(cid_n.startswith(p) for p in (
        "HERO-", "PROD-", "IMAGE-", "IMG-", "FLOWIMG-", "FLOWDEEP-",
        "CAMIMG-", "PDISP-", "DEEPPROD-", "M10", "M2",
    )):
        if has_image:
            return (
                "image-inside-component",
                "Image IS the component (hero/product showcase).",
            )
        return (
            "image-required-component",
            "Component requires image but none picked (BUG).",
        )

    # - EMODEEP-* (content/emotional) → content block
    if cid_n.startswith("EMODEEP-"):
        if has_image:
            return (
                "image-standalone",
                "Emotional content block; image is decorative (placed between sections).",
            )
        return (
            "component-text-only",
            "Emotional content block, text-only.",
        )

    # - DEEP-* / PSYDEEP-* / EJ-* / BONUS-* → content block (rule 5)
    if any(cid_n.startswith(p) for p in ("DEEP-", "PSYDEEP-", "EJ-", "BONUS-")):
        if has_image:
            return (
                "image-standalone",
                "Content block; image is decorative (placed between sections).",
            )
        return (
            "component-text-only",
            "Content block, text-only.",
        )

    # - EMO-* / STORY-* / OBJ-* (mostly content)
    if any(cid_n.startswith(p) for p in ("EMO-", "STORY-", "OBJ-", "STATS-", "VSOCIAL-", "CMP-", "PSYCH-")):
        if has_image:
            return (
                "image-standalone",
                "Content block; image is decorative (placed between sections).",
            )
        return (
            "component-text-only",
            "Content block, text-only.",
        )

    # - SP-* / PS-* → letter
    if any(cid_n.startswith(p) for p in ("SP-", "PS-")):
        if has_image:
            return (
                "image-inside-component",
                "Parent-quote photo anchors the callout.",
            )
        return (
            "component-text-only",
            "Quote/text-only callout.",
        )

    # - LETTER-* → letter
    if cid_n.startswith("LETTER-"):
        if has_image:
            return (
                "image-inside-component",
                "Parent-quote photo anchors the callout.",
            )
        return (
            "component-text-only",
            "Quote/text-only callout.",
        )

    # - TRUSTDEEP-* / TRUST-* → content
    if any(cid_n.startswith(p) for p in ("TRUSTDEEP-", "TRUST-", "CMP-")):
        if has_image:
            return (
                "image-standalone",
                "Content block; image is decorative (placed between sections).",
            )
        return (
            "component-text-only",
            "Content block, text-only.",
        )

    # - UTIL-* → signoff/locked by default (no image)
    if cid_n.startswith("UTIL-"):
        return (
            "component-text-only",
            "Utility/signoff component (locked, not in cap).",
        )

    # - 22.* / 21.* / 19.* / 33.* / 17.* / 18.* etc.
    # Two-digit prefixes: 22.* are pull-quotes, 33.* signoffs, 17.* letters, 18.* hero, 21.* image
    if cid_n.startswith("22."):
        if has_image:
            return (
                "image-inside-component",
                "Parent-quote photo anchors the callout.",
            )
        return (
            "component-text-only",
            "Quote/text-only callout.",
        )
    if cid_n.startswith(("33.", "12.")):
        return (
            "component-text-only",
            "Sign-off/footer is hardcoded in locked footer.html, not a body component.",
        )
    if cid_n.startswith(("18.", "21.")):
        if has_image:
            return (
                "image-inside-component",
                "Image IS the component (hero/product showcase).",
            )
        return (
            "image-required-component",
            "Component requires image but none picked (BUG).",
        )
    if cid_n.startswith(("5.", "5")):
        if has_image:
            return (
                "image-standalone",
                "CTA button is text-only by design; image is decorative (placed between sections).",
            )
        return (
            "component-text-only",
            "CTA is text-link or button only.",
        )
    if cid_n.startswith(("4.", "4")):
        if has_image:
            return (
                "image-inside-component",
                "Parent-quote photo anchors the callout.",
            )
        return (
            "component-text-only",
            "Quote/text-only callout.",
        )
    if cid_n.startswith("M"):
        # M1-M10 are usually hero/stat, treat as image-required
        if cid_n in ("M3",):
            if has_image:
                return (
                    "image-inside-component",
                    "Parent-quote photo anchors the callout.",
                )
            return (
                "component-text-only",
                "Quote/text-only callout.",
            )
        # M2, M10 → image-required
        if has_image:
            return (
                "image-inside-component",
                "Image IS the component.",
            )
        return (
            "image-required-component",
            "Component requires image but none picked (BUG).",
        )

    # Unknown component: safest default
    if has_image:
        return (
            "image-standalone",
            "Unclassified component with image: default to image-standalone (between sections).",
        )
    return (
        "component-text-only",
        "Unclassified component without image: default to component-text-only.",
    )


# === Regex patterns ===

# Section-style header regex (single canonical pattern; supports multiple formats):
#   "### Section 1: Hook"
#   "### SECTION 1: Hook" (uppercase variant)
#   "### Hero (Section 1: Opening)"
#   "### HERO (UNIQUE — never reused)"
#   "### Sign-off ..." / "### Lena ..." / "### Footer ..." / "### CTA ..."
#   "### Components (7/8)" (table format)
SECTION_HEADER_RE = re.compile(
    r"^###\s+(?:Section\s+\d+|HERO\b|Hero\s*\(|SECTION\s+\d+|Sign-?off\b|Lena\b|Footer\b|CTA\b|Components?\s*\()",
    re.IGNORECASE | re.MULTILINE,
)

# Component pick line - matches "COMPONENT PICKED:" or "HERO PICKED:"
COMPONENT_PICKED_RE = re.compile(
    r"^\s*-\s*(?:COMPONENT|HERO)\s+PICKED:\s*([A-Za-z0-9.\-]+)",
    re.MULTILINE,
)
# Image pick line
IMAGE_PICKED_RE = re.compile(
    r"^\s*-\s*IMAGE PICKED:\s*(.+?)\s*$",
    re.MULTILINE,
)
# Table format: "|| ROLE | **COMPID** | reason |"
TABLE_COMPONENT_RE = re.compile(
    r"^\|\|\s*([A-Z][A-Z0-9 \-_/]+?)\s*\|\s*\*\*([A-Z0-9.\-]+)\*\*\s*\|",
    re.MULTILINE,
)
# Marker to detect if WRAP already present
WRAP_RE = re.compile(r"^\s*-\s*\*\*WRAP:\s*", re.MULTILINE)
STAGE2_HEADER_RE = re.compile(r"^## STAGE 2 PICKS\s*", re.MULTILINE)
END_OF_STAGE2_RE = re.compile(r"^##\s", re.MULTILINE)
# Role line in section blocks
ROLE_RE = re.compile(
    r"^\s*-\s*ROLE slot:\s*(.+)$",
    re.MULTILINE,
)


def has_image_picked(section_text: str) -> bool:
    m = IMAGE_PICKED_RE.search(section_text)
    if not m:
        return False
    value = m.group(1).strip().lower()
    return not value.startswith("none")


def get_role(section_text: str) -> str:
    m = ROLE_RE.search(section_text)
    return m.group(1).strip() if m else ""


def process_bullet_format(stage2_block: str, audit: dict, path: Path) -> tuple[str, int, int]:
    """Process sections that use ### Section N: with - COMPONENT PICKED: bullets.
    Returns (new_block, insertions, skipped_already)."""
    # Find all section starts
    sec_starts = [m.start() for m in SECTION_HEADER_RE.finditer(stage2_block)]
    if not sec_starts:
        return stage2_block, 0, 0

    sections = []
    for i, s in enumerate(sec_starts):
        e = sec_starts[i + 1] if i + 1 < len(sec_starts) else len(stage2_block)
        sections.append((s, e))

    new_block = stage2_block
    insertions = 0
    skipped_already = 0

    for s, e in reversed(sections):
        sec_text = new_block[s:e]
        if WRAP_RE.search(sec_text):
            skipped_already += 1
            continue

        comp_m = COMPONENT_PICKED_RE.search(sec_text)
        if not comp_m:
            # No component picked in this section
            continue
        component_id = comp_m.group(1).strip()
        has_img = has_image_picked(sec_text)
        role = get_role(sec_text)
        wrap_val, why = classify(component_id, has_img, role)

        # Insert at end of section
        trimmed_end = sec_text.rstrip()
        trailing = sec_text[len(trimmed_end):]
        wrap_block = f"\n- **WRAP: {wrap_val}**\n- WHY: {why}\n"
        new_sec = trimmed_end + wrap_block + trailing
        new_block = new_block[:s] + new_sec + new_block[e:]
        insertions += 1

        if wrap_val == "image-required-component":
            audit.setdefault("anomalies", []).append({
                "file": str(path),
                "component": component_id,
                "note": "BUG: image-required component has no image picked",
            })

    return new_block, insertions, skipped_already


def process_table_format(stage2_block: str, audit: dict, path: Path) -> tuple[str, int, int]:
    """Process sections that use a markdown table under '### Components (N/8)'.
    Returns (new_block, insertions, skipped_already)."""
    # Find the ### Components (...) block
    m = re.search(r"^###\s+Components?\s*\(\d+/\d+\)\s*$", stage2_block, re.MULTILINE)
    if not m:
        return stage2_block, 0, 0

    block_start = m.end()
    # End at next ### or end of block
    rest = stage2_block[block_start:]
    end_m = re.search(r"^###\s", rest, re.MULTILINE)
    block_end = block_start + end_m.start() if end_m else len(stage2_block)
    table_block = stage2_block[block_start:block_end]

    # Skip if WRAP already present anywhere
    if WRAP_RE.search(table_block):
        return stage2_block, 0, 1

    # Build a map from component ID → list of (image_path, full_match) from the Images list
    # We don't have a clean way to map images to roles in the table format.
    # Default: no image for each component.
    rows = list(TABLE_COMPONENT_RE.finditer(table_block))
    if not rows:
        return stage2_block, 0, 0

    # Build new table block by inserting WRAP/WHY after each row line
    # Process in reverse to keep offsets valid
    new_table = table_block
    insertions = 0
    for match in reversed(rows):
        comp_id = match.group(2)
        role = match.group(1).strip()
        # No image info in table format → assume no image
        wrap_val, why = classify(comp_id, False, role)
        # Skip rows that already have WRAP (shouldn't happen due to check above)
        line_end_in_table = match.end()
        # Find end of line
        nl = new_table.find("\n", line_end_in_table)
        if nl == -1:
            nl = len(new_table)
        insert_at = nl
        wrap_block = f"\n- **WRAP: {wrap_val}**\n- WHY: {why}"
        new_table = new_table[:insert_at] + wrap_block + new_table[insert_at:]
        insertions += 1
        if wrap_val == "image-required-component":
            audit.setdefault("anomalies", []).append({
                "file": str(path),
                "component": comp_id,
                "note": "BUG: image-required component (table format, no image info)",
            })

    new_block = stage2_block[:block_start] + new_table + stage2_block[block_end:]
    return new_block, insertions, 0


def process_file(path: Path, audit: dict):
    """Insert WRAP/WHY lines into every section of the STAGE 2 PICKS block."""
    try:
        original = path.read_text(encoding="utf-8")
    except Exception as e:
        audit.setdefault("errors", []).append(f"{path}: read error {e}")
        return

    m = STAGE2_HEADER_RE.search(original)
    if not m:
        audit.setdefault("skipped_files", []).append(f"{path}: no STAGE 2 PICKS block")
        return

    stage2_start = m.end()
    rest = original[stage2_start:]
    end_match = END_OF_STAGE2_RE.search(rest)
    stage2_end = stage2_start + end_match.start() if end_match else len(original)
    stage2_block = original[stage2_start:stage2_end]

    # Detect format: bullet vs table
    has_bullets = bool(COMPONENT_PICKED_RE.search(stage2_block))
    has_table = bool(re.search(r"^###\s+Components?\s*\(\d+/\d+\)\s*$",
                               stage2_block, re.MULTILINE))

    new_block = stage2_block
    insertions = 0
    skipped_already = 0

    if has_bullets:
        new_block, ins, skip = process_bullet_format(new_block, audit, path)
        insertions += ins
        skipped_already += skip

    if has_table:
        new_block, ins, skip = process_table_format(new_block, audit, path)
        insertions += ins
        skipped_already += skip

    if insertions == 0 and skipped_already == 0:
        audit.setdefault("skipped_files", []).append(f"{path}: no sections matched (bullet or table)")
        return

    # Splice back
    new_content = original[:stage2_start] + new_block + original[stage2_end:]

    if insertions > 0:
        try:
            path.write_text(new_content, encoding="utf-8")
        except Exception as e:
            audit.setdefault("errors", []).append(f"{path}: write error {e}")
            return

    audit.setdefault("files_processed", []).append(str(path))
    audit["total_insertions"] = audit.get("total_insertions", 0) + insertions
    audit["total_skipped"] = audit.get("total_skipped", 0) + skipped_already


def main():
    all_md = sorted(COPY_DIR.rglob("*.md"))
    copy_files = [
        p for p in all_md
        if "/analysis/" not in str(p)
        and "SKELETON" not in p.name
        and ".bak" not in p.name
    ]
    print(f"Found {len(copy_files)} copy files (expected 125).")

    audit = {}
    for p in copy_files:
        process_file(p, audit)

    # Compute wrap distribution
    wrap_dist = defaultdict(int)
    flow_wrap = defaultdict(lambda: defaultdict(int))

    for p in copy_files:
        try:
            txt = p.read_text(encoding="utf-8")
        except Exception:
            continue
        m = STAGE2_HEADER_RE.search(txt)
        if not m:
            continue
        block_start = m.end()
        rest = txt[block_start:]
        end_m = END_OF_STAGE2_RE.search(rest)
        block = rest[:end_m.start()] if end_m else rest

        rel = p.relative_to(COPY_DIR)
        flow = rel.parts[0] if len(rel.parts) > 1 else "_root"

        for wm in re.finditer(r"-\s*\*\*WRAP:\s*([^*]+?)\*\*", block):
            val = wm.group(1).strip()
            wrap_dist[val] += 1
            flow_wrap[flow][val] += 1

    # Write audit markdown
    audit_path = NOTES_DIR / "stage-2-wrap-tag-audit.md"
    lines = []
    lines.append("# Stage 2 WRAP Tag Audit")
    lines.append("")
    lines.append("**Date:** 2026-06-29")
    lines.append("")
    lines.append(f"**Files targeted:** {len(copy_files)}")
    lines.append(f"**Files with at least one WRAP inserted:** {len(audit.get('files_processed', []))}")
    lines.append(f"**Total WRAP lines inserted:** {audit.get('total_insertions', 0)}")
    lines.append(f"**Sections skipped (WRAP already present, idempotent re-run):** {audit.get('total_skipped', 0)}")
    lines.append("")

    lines.append("## Overall WRAP distribution (after processing)")
    lines.append("")
    lines.append("| WRAP value | Count |")
    lines.append("|------------|-------|")
    for v, c in sorted(wrap_dist.items(), key=lambda x: -x[1]):
        lines.append(f"| {v} | {c} |")
    lines.append("")

    lines.append("## Per-flow WRAP distribution")
    lines.append("")
    all_flows = sorted(flow_wrap.keys())
    all_wraps = sorted(wrap_dist.keys())
    if all_wraps:
        header = "| Flow | " + " | ".join(all_wraps) + " | Total |"
        sep = "|------|" + "|".join(["----"] * len(all_wraps)) + "|------|"
        lines.append(header)
        lines.append(sep)
        for flow in all_flows:
            row_vals = [str(flow_wrap[flow].get(v, 0)) for v in all_wraps]
            total = sum(flow_wrap[flow].values())
            lines.append(f"| {flow} | " + " | ".join(row_vals) + f" | {total} |")
        lines.append("")

    if audit.get("skipped_files"):
        lines.append("## Files skipped (no STAGE 2 PICKS block or no sections matched)")
        lines.append("")
        for s in audit["skipped_files"]:
            lines.append(f"- {s}")
        lines.append("")

    if audit.get("errors"):
        lines.append("## Errors")
        lines.append("")
        for s in audit["errors"]:
            lines.append(f"- {s}")
        lines.append("")

    anomalies = audit.get("anomalies", [])
    if anomalies:
        lines.append("## Anomalies: image-required-component (BUG)")
        lines.append("")
        lines.append("These sections picked a rule-2 image-required component without an image. Per the rules this is a BUG.")
        lines.append("")
        lines.append("| File | Component |")
        lines.append("|------|-----------|")
        for a in anomalies:
            lines.append(f"| {a['file']} | {a['component']} |")
        lines.append("")
    else:
        lines.append("## Anomalies")
        lines.append("")
        lines.append("None detected.")
        lines.append("")

    audit_path.write_text("\n".join(lines), encoding="utf-8")
    print(f"Audit written to: {audit_path}")
    print(f"Total WRAP lines: {sum(wrap_dist.values())}")
    print(f"WRAP distribution: {dict(wrap_dist)}")
    print(f"Anomalies (image-required with no image): {len(audit.get('anomalies', []))}")


if __name__ == "__main__":
    main()
