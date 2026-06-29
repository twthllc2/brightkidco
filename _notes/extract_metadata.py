#!/usr/bin/env python3
"""Extract metadata from 125 BKC copy files. Robust pattern detection.

Cross-check strategy:
  - filename_vs_declared_level: compare filename suffix level (-l1/l2/l3/gf) vs normalized declared level
  - folder_vs_declared_flow: compare FOLDER MAPPING to declared flow number (1-25), OR
                              check if declared flow name contains the folder name's clean version
"""
import json
import re
import sys
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path

ROOT = Path("/root/projects/brightkidco")
COPY_DIR = ROOT / "outputs" / "copy"
OUTPUT_FILE = ROOT / "_notes" / "extracted-metadata.json"

# Mapping from folder to canonical flow name and number
FOLDER_TO_FLOW = {
    "welcome":               {"name": "Welcome Flow",                           "number": 1},
    "cart":                  {"name": "Cart Abandonment",                       "number": 2},
    "checkout":              {"name": "Checkout Abandonment",                   "number": 3},
    "browse":                {"name": "Browse Abandonment",                     "number": 4},
    "pp-direct-upsell":      {"name": "Post-Purchase Direct Upsell",            "number": 9},
    "pp-level-detection":    {"name": "Post-Purchase Level Detection",          "number": 10},
    "pp-education":          {"name": "Post-Purchase Education",                "number": 11},
    "pp-extended-upsell":    {"name": "Post-Purchase Extended Upsell",          "number": 12},
    "pp-mid-checkin":        {"name": "Post-Purchase Mid Check-In",             "number": 13},
    "pp-mary-story":         {"name": "Post-Purchase Mary Story",               "number": 14},
    "replenish-a":           {"name": "Replenish A",                            "number": 15},
    "replenish-b":           {"name": "Replenish B",                            "number": 16},
    "replenish-c":           {"name": "Replenish C",                            "number": 17},
    "review-request":        {"name": "Review Request",                         "number": 18},
    "winback-a":             {"name": "Winback Path A",                         "number": 19},
    "site-abandonment":      {"name": "Site Abandonment",                       "number": 20},
    "faq-library":           {"name": "FAQ/Objection Library",                  "number": 21},
    "pp-extended-ed":        {"name": "PP-Extended Education",                  "number": 22},
    "pp-at-risk":            {"name": "PP-Support At-Risk",                     "number": 23},
    "winback-b":             {"name": "Winback Path B",                         "number": 24},
    "sunset":                {"name": "Sunset",                                 "number": 25},
}
# Sub-flows inside transactional
TRANSACTIONAL_SUBFLOWS = {
    "order-05":     {"name": "Order Confirmation",   "number": 5},
    "shipping-06":  {"name": "Shipping Notification", "number": 6},
    "ofd-07":       {"name": "Out for Delivery",     "number": 7},
    "arrived-08":   {"name": "Delivery Confirmation","number": 8},
}

# Alternative names that should map to the canonical flow name (for flow-name detection)
FLOW_ALIASES = {
    1: ["welcome"],
    2: ["cart", "cart abandonment"],
    3: ["checkout", "checkout abandonment"],
    4: ["browse", "browse abandonment"],
    5: ["order", "order confirmation"],
    6: ["shipping", "shipping notification"],
    7: ["out for delivery", "ofd"],
    8: ["delivered", "delivery confirmation", "arrived"],
    9: ["pp-direct upsell", "direct upsell", "post-purchase direct upsell"],
    10: ["pp-level detection", "level detection", "post-purchase level detection"],
    11: ["pp-education", "post-purchase education"],
    12: ["pp-extended upsell", "extended upsell", "post-purchase extended upsell"],
    13: ["pp-mid check-in", "mid check-in", "post-purchase mid check-in"],
    14: ["pp-mary story", "mary story", "post-purchase mary story"],
    15: ["replenish-a", "replenish a", "replenishment a", "replenishment path a"],
    16: ["replenish-b", "replenish b", "replenishment b", "replenishment path b"],
    17: ["replenish-c", "replenish c", "replenishment c", "replenishment path c"],
    18: ["review request", "review-request"],
    19: ["winback-a", "winback path a", "winback a"],
    20: ["site abandonment"],
    21: ["faq", "faq/objection library", "faq library", "objection library"],
    22: ["pp-extended education", "pp-extended-ed", "extended education"],
    23: ["pp-at-risk", "pp-support at-risk", "at-risk", "at risk"],
    24: ["winback-b", "winback path b", "winback b"],
    25: ["sunset"],
}


def normalize_level(raw):
    if raw is None:
        return None
    s = str(raw).strip().lower()
    if any(x in s for x in ["cross-level", "cross level", "r1-r6", "r1–r6", "all level", "all 4 level"]):
        return "cross-level"
    if "gf" in s or "general family" in s or "general fallback" in s or "all 5 sub" in s or "avatar_general" in s:
        return "gf"
    if "l1" in s or "sarah" in s:
        return "l1"
    if "l2" in s or "lisa" in s:
        return "l2"
    if "l3" in s or "maria" in s:
        return "l3"
    return None


def parse_table(content):
    """Pattern A: `## Metadata` header followed by a markdown table."""
    hdr_re = re.compile(r"^#{1,4}\s+\**metadata\**\s*$", re.IGNORECASE | re.MULTILINE)
    m = hdr_re.search(content)
    if not m:
        return None
    after = content[m.end():]
    next_hdr = re.search(r"^#{1,2}\s+\S", after, re.MULTILINE)
    block = after if not next_hdr else after[:next_hdr.start()]
    fields = {}
    for line in block.splitlines():
        m1 = re.match(r"^\|\s*\*+(.+?)\*+\s*[:\-]?\s*\|\s*(.+?)\s*\|?\s*$", line)
        if m1:
            k = m1.group(1).strip()
            v = m1.group(2).strip()
            if k.lower() not in ("field", "-------", "") and len(k) < 80:
                fields[k] = v
            continue
        m2 = re.match(r"^\|\s*(?!-+)([^*|][^|]*?)\s*\|\s*(.+?)\s*\|?\s*$", line)
        if m2:
            k = re.sub(r"\*+", "", m2.group(1)).strip()
            v = m2.group(2).strip()
            if k.lower() not in ("field", "-------", "") and not re.match(r"^[\s\-:|]+$", k) and len(k) < 80:
                fields[k] = v
    return fields if fields else None


def parse_bullets(content):
    """Pattern B: `## Metadata` followed by bullet list `- **Key:** value`."""
    hdr_re = re.compile(r"^#{1,4}\s+\**metadata\**\s*$", re.IGNORECASE | re.MULTILINE)
    m = hdr_re.search(content)
    if not m:
        return None
    after = content[m.end():]
    next_hdr = re.search(r"^#{1,2}\s+\S", after, re.MULTILINE)
    block = after if not next_hdr else after[:next_hdr.start()]
    first_line = next((ln for ln in block.splitlines() if ln.strip()), "")
    if not first_line.lstrip().startswith("-"):
        return None
    fields = {}
    for line in block.splitlines():
        m1 = re.match(r"^\s*-\s*\*+(.+?)\*+\s*[:\-]?\s*(.+?)\s*$", line)
        if m1:
            k = m1.group(1).strip().rstrip(":")
            v = m1.group(2).strip()
            if k and k.lower() != "field" and len(k) < 80:
                fields[k] = v
    return fields if fields else None


def parse_top_block(content):
    """Pattern C: metadata at top of file after H1, before body section headers.

    Captures:
      - Blockquote `> **Field:** value` lines
      - Blockquote `> Field: value` lines (plain)
      - Blockquote bold `> **Flow NN · ...**` (extract Flow + number)
      - Blockquote pipe-separated lines like `> Wave 3 | Cart Flow | Email 3 of 3 | Cross-Level`
        which become {"Wave": "3", "Flow": "Cart Flow", ...}
      - Plain bold lines `**Field:** value`
      - H2/H3 headers like `## Flow 22: PP-Extended Education` (extract Flow + value)
    """
    h1 = re.search(r"^#\s+.+?\n", content, re.MULTILINE)
    if not h1:
        return None
    head_start = h1.end()
    head = content[head_start:head_start + 5000]
    end_re = re.compile(
        r"^#{1,3}\s+(?:"
        r"SUBJECT\s+LINE|Subject\s+Line|"
        r"PREVIEW\s+TEXT|Preview\s+Text|"
        r"EMAIL\s+BODY|Email\s+Body|"
        r"BODY\s+COPY|Body\s+Copy|BODY|"
        r"PART\s+\d+|PART\s+\d+\s*[:\-—]|HALF\s+\d+|HALF\s+(?:ONE|TWO)|"
        r"SECTION\s+\d+|"
        r"Creative\s+Strategy|CREATIVE\s+STRATEGY|"
        r"\d+\.\s+\w+|"
        r"FINAL\s+COPY|Full\s+Email\s+Copy|FULL\s+EMAIL\s+COPY|Email\s+Copy|EMAIL\s+COPY"
        r")",
        re.IGNORECASE | re.MULTILINE,
    )
    em = end_re.search(head)
    block = head[: em.start()] if em else head
    block = re.split(r"^---\s*$", block, maxsplit=1, flags=re.MULTILINE)[0]

    fields = {}
    for line in block.splitlines():
        # 0. H2/H3 header with "Flow NN:" or "Flow NN ·" — treat as Flow
        hm = re.match(r"^#{1,4}\s+(.+)$", line)
        if hm:
            text = hm.group(1).strip()
            fm = re.match(r"^Flow\s*(\d+)\s*[:·]\s*(.+)$", text, re.IGNORECASE)
            if fm:
                fnum = int(fm.group(1))
                rest = fm.group(2).strip()
                if "Flow" not in fields:
                    fields["Flow"] = f"Flow {fnum}"
                if "Flow Header" not in fields and rest:
                    fields["Flow Header"] = rest
                continue
            fm2 = re.match(r"^Flow\s*(\d+)\s*[·\-—]\s*(.+)$", text, re.IGNORECASE)
            if fm2:
                fnum = int(fm2.group(1))
                rest = fm2.group(2).strip()
                if "Flow" not in fields:
                    fields["Flow"] = f"Flow {fnum}"
                if "Flow Header" not in fields and rest:
                    fields["Flow Header"] = rest
                continue
        # 1. Blockquote + bold with FIELD:VALUE or FIELD:: value patterns
        # Format: > **Field:** value  OR  > **Field** value
        # Strict: require colon INSIDE the bold or right after, to avoid false matches
        # like `> **Email Copy + Creative Strategy, 72 Hours Post-Abandon**`
        bm = None
        # Pattern A: `> **Field:** value` or `> **Field: text** value` (colon inside or after bold)
        bm_a = re.match(r"^\s*>\s*\*+\s*([^*\n]+?)\s*:\s*(?:\*+\s*)?([^*\n]*?)\s*(?:\*+\s*)?[,;:\-]?\s*(.+?)\s*$", line)
        if bm_a:
            k = bm_a.group(1).strip()
            v = bm_a.group(3).strip() if bm_a.group(3) else bm_a.group(2).strip()
            if not v:
                v = bm_a.group(2).strip()
            # Strip trailing ** from value (closing bold)
            v = re.sub(r"\*+\s*$", "", v).strip()
            if k and len(k) < 60:
                fields[k] = v
                bm = "matched"
                continue
        # Pattern B: `> **Field** value` (no colon, but Field is short < 30 chars)
        if not bm_a:
            # Allow optional punctuation/whitespace between the closing ** and the value
            bm_b = re.match(r"^\s*>\s*\*+\s*([^*\n]+?)\s*\*+\s*[,;:\-]?\s*([^*\n].+?)\s*$", line)
            if bm_b:
                k = bm_b.group(1).strip()
                v = bm_b.group(2).strip()
                # Only accept if key is short (likely a field name, not a subtitle)
                if k and len(k) < 30 and len(v) < 200:
                    fields[k] = v
                    bm = "matched"
                    continue
        # 1b. Blockquote + bold: > **Flow NN, ...** (single bold with flow number, comma/colon/dash separator)
        bm = re.match(r"^\s*>\s*\*+\s*Flow\s*(\d+)\s*[,·\-—:]\s*(.+?)\s*\*+\s*$", line, re.IGNORECASE)
        if bm:
            fnum = int(bm.group(1))
            rest = bm.group(2).strip()
            if "Flow" not in fields:
                fields["Flow"] = f"Flow {fnum}"
            if "Flow Header" not in fields and rest:
                fields["Flow Header"] = rest
                continue
            continue
        # 2. Blockquote plain: > Field: value  (not bold)
        # Must NOT start with `**` or `*` (those are handled above)
        if not (line.lstrip().startswith(">*") or line.lstrip().startswith("> *")):
            bm = re.match(r"^\s*>\s*([^*\n:][^>\n]*?)\s*[:\-]\s*(.+?)\s*$", line)
            if bm:
                k = bm.group(1).strip().rstrip(":")
                v = bm.group(2).strip()
                if k and 0 < len(k) < 60 and "|" not in k:
                    fields[k] = v
                    continue
        # 3. Blockquote pipe-separated: > Wave 3 | Cart Flow | Email 3 of 3 | Cross-Level
        bm = re.match(r"^\s*>\s*(.+)$", line)
        if bm and "|" in bm.group(1):
            parts = [p.strip() for p in bm.group(1).split("|") if p.strip()]
            if 2 <= len(parts) <= 12:
                # Build a synthesized key/value map from the pipe parts.
                kw_to_key = {
                    "flow": "Flow",
                    "wave": "Wave",
                    "email": "Email",
                    "level": "Level",
                    "type": "Type",
                    "segmentation": "Segmentation",
                    "voice": "Voice",
                    "timing": "Timing",
                    "purpose": "Purpose",
                    "status": "Status",
                    "format": "Format",
                    "trigger": "Trigger",
                    "audience": "Audience",
                    "cadence": "Cadence",
                    "length": "Length",
                    "topic": "Topic",
                    "exit": "Exit",
                }
                for part in parts:
                    pm = re.match(r"^([A-Za-z][A-Za-z0-9 _/-]*?)\s*[:\-]\s*(.+)$", part)
                    if pm:
                        k = pm.group(1).strip()
                        v = pm.group(2).strip()
                        if k and len(k) < 60 and k not in fields:
                            fields[k] = v
                    else:
                        # Known multi-word patterns where the LAST word is a field name:
                        # "Cart Flow" -> Flow=Cart Flow
                        # "Welcome Flow" -> Flow=Welcome Flow
                        # "Browse Abandonment" -> Flow=Browse Abandonment
                        # "Checkout Abandonment" -> Flow=Checkout Abandonment
                        # "Cross-Level (R1-R6)" -> Level=Cross-Level (R1-R6)
                        trailing_keywords = {
                            "flow": "Flow", "abandonment": "Flow", "upsell": "Flow",
                            "education": "Flow", "detection": "Flow", "library": "Flow",
                            "request": "Flow", "story": "Flow", "check-in": "Flow",
                            "checkin": "Flow", "winback": "Flow", "at-risk": "Flow",
                            "atrisk": "Flow", "replenish": "Flow", "replenishment": "Flow",
                            "sunset": "Flow",
                            "level": "Level", "variant": "Level", "sub-group": "Level",
                            "subgroup": "Level",
                            "email": "Email", "position": "Position",
                            "copy": "Copy", "strategy": "Strategy",
                            "wave": "Wave", "phase": "Phase", "timing": "Timing",
                            "audience": "Audience", "voice": "Voice",
                        }
                        # Split part into tokens
                        tokens = part.split()
                        if len(tokens) >= 2:
                            last = tokens[-1].lower().rstrip(",;:.")
                            full_key = trailing_keywords.get(last)
                            if full_key and full_key not in fields:
                                # Skip if last token is just a number ("Wave 3", "Email 3 of 3")
                                if not last.isdigit():
                                    # Use the WHOLE part as the value (not just tokens[:-1])
                                    # e.g., "Cart Flow" -> Flow = "Cart Flow"
                                    value = part.rstrip(",;:.")
                                    # Strip trailing noise
                                    value = re.sub(r"\s*\(R1[-–]R6\)\s*$", "", value).strip()
                                    if value and len(value) < 60:
                                        fields[full_key] = value
                                        continue
                        # "Cross-Level (R1-R6)" — special
                        cl = re.match(r"^(Cross-Level|Cross-level)\s*\(?([^)]*)\)?\s*$", part)
                        if cl:
                            if "Level" not in fields:
                                fields["Level"] = part
                            continue
                        # "Wave 3" / "Email 3 of 3" / "Day 35" patterns
                        m3 = re.match(r"^([A-Za-z][A-Za-z]*)\b\s*(.+)$", part)
                        if m3:
                            kw = m3.group(1).lower()
                            rest = m3.group(2).strip()
                            full_key = kw_to_key.get(kw)
                            if full_key and rest and full_key not in fields:
                                fields[full_key] = rest
                                continue
                        if part and len(part) < 60:
                            fields.setdefault("Header", part)
                if not any(k in fields for k in ("Flow", "Email", "Level", "Type", "Wave", "Segmentation")):
                    fields.setdefault("Header", bm.group(1).strip())
            continue
    for line in block.splitlines():
        if line.lstrip().startswith(">"):
            continue
        # Skip H1/H2/H3 headers (already handled above)
        if re.match(r"^#{1,4}\s", line):
            continue
        bm = re.match(r"^\s*\*+(.+?)\*+\s*[:\-]?\s*(.+?)\s*$", line)
        if bm:
            k = bm.group(1).strip().rstrip(":")
            v = bm.group(2).strip()
            if k and len(k) < 60 and k not in fields:
                fields[k] = v
    return fields if fields else None


def parse_metadata(content):
    """Try each pattern. Always also try parse_top_block to capture frontmatter,
    merge with Pattern A/B results so that files with table+frontmatter get both."""
    top_fields = parse_top_block(content) or {}
    f = parse_table(content)
    if f:
        # Merge with top_block so flow/level from frontmatter is preserved
        merged = {**top_fields, **f}
        return "Pattern A", merged
    f = parse_bullets(content)
    if f:
        merged = {**top_fields, **f}
        return "Pattern B", merged
    if top_fields:
        return "Pattern C", top_fields
    return "missing", {}


# Recognized field aliases for various metadata keys
FIELD_ALIASES = {
    "flow": ["flow", "flow name", "email flow", "campaign"],
    "flow_number": ["flow number", "flow #", "flow number:"],
    "position": ["position", "email position", "email", "email #", "day", "timing", "send day", "send timing"],
    "level": ["level", "level variant", "variant", "audience", "segmentation",
              "avatar", "avatar level", "type", "sub-group", "segment"],
    "phase": ["phase", "wave"],
    "purpose": ["purpose", "purpose as per s2", "email purpose", "objective", "topic"],
    "section_structure_declared": ["section structure", "section structure declared"],
    "framework_declared": ["framework", "framework declared", "framework used"],
    "signoff_variant_declared": ["sign-off variant", "lena sign-off variant",
                                  "signoff variant", "lena signoff variant",
                                  "sign-off", "signoff", "sign off"],
}


def get_field_any(fields, key_name):
    """Look up a field by canonical name (e.g., 'flow') using FIELD_ALIASES."""
    if not fields:
        return None
    aliases = FIELD_ALIASES.get(key_name, [key_name])
    lower = {k.lower().strip(): v for k, v in fields.items()}
    for a in aliases:
        v = lower.get(a.lower())
        if v is not None:
            return v
    # partial match
    for a in aliases:
        for k, v in lower.items():
            if a.lower() in k:
                return v
    return None


def derive_flow_number(folder, file_stem):
    if folder == "transactional":
        for sub, info in TRANSACTIONAL_SUBFLOWS.items():
            if sub in file_stem:
                return info["number"]
        return None
    if folder == "pp-level-detection":
        if "detection-10" in file_stem: return 10
        if "pp-leveldetect-01" in file_stem: return 1
        return 10
    return FOLDER_TO_FLOW.get(folder, {}).get("number")


def derive_flow_name(folder, file_stem):
    if folder == "transactional":
        for sub, info in TRANSACTIONAL_SUBFLOWS.items():
            if sub in file_stem:
                return info["name"]
        return "Transactional"
    if folder == "pp-level-detection":
        if "pp-leveldetect-01" in file_stem:
            return "Welcome Flow (Level Detection Email)"
        return "Post-Purchase Level Detection"
    return FOLDER_TO_FLOW.get(folder, {}).get("name")


def parse_position_from_stem(file_stem):
    m = re.search(r"-(e\d+(?:-\d+h)?|d\d+)(?:-|$)", file_stem)
    return m.group(1) if m else None


def parse_level_from_stem(file_stem):
    m = re.search(r"-(l[123]|gf)(?:\.|$)", file_stem.lower())
    return m.group(1) if m else None


def parse_phase(text):
    m = re.search(r"\bphase\s*(\d)\b", text, re.IGNORECASE)
    if m:
        return int(m.group(1))
    if "pre-purchase" in text.lower() or "pre purchase" in text.lower():
        return 1
    if "post-purchase" in text.lower() or "post purchase" in text.lower():
        return 2
    if "winback" in text.lower() or "sunset" in text.lower() or "at-risk" in text.lower() or "at risk" in text.lower():
        return 3
    return None


def get_field(fields, *candidates):
    if not fields:
        return None
    lower = {k.lower().strip(): v for k, v in fields.items()}
    for c in candidates:
        v = lower.get(c.lower().strip())
        if v is not None:
            return v
    for c in candidates:
        for k, v in lower.items():
            if c.lower() in k:
                return v
    return None


def extract_section_structure_declared(fields):
    for key, val in fields.items():
        if "section structure" in key.lower():
            return val
    return None


def extract_framework_declared(fields):
    for key, val in fields.items():
        if "framework" in key.lower() and "source" not in key.lower():
            return val
    return None


def extract_signoff_variant_declared(fields, content):
    for key, val in fields.items():
        if "sign-off" in key.lower() or "signoff" in key.lower() or "sign off" in key.lower():
            return val
    m = re.search(
        r"\*?\*?[Ll]ena\s+[Ss]ign[-\s]?[Oo]ff\s+[Vv]ariant\*?\*?\s*[:\-]\s*(.+?)(?:\n|$)",
        content[:3000],
    )
    if m:
        return m.group(1).strip()
    return None


def infer_flow_from_declared_text(declared_raw, folder):
    """Given the raw declared 'Flow' value, infer which flow number (1-25) it represents.

    Matching strategy (priority order):
      1. Explicit "(Flow NN)" pattern (most reliable)
      2. Exact alias match
      3. Substring match (more specific aliases first)
    """
    if not declared_raw:
        return None
    s = str(declared_raw)

    # 1. Look for "(Flow NN)" or "Flow NN" pattern in the raw value
    m = re.search(r"[Ff]low\s*[:\-]?\s*(\d+)", s)
    if m:
        return int(m.group(1))

    # 2. Try to match against aliases
    s_lower = s.lower()
    # Build a sorted list of (alias_length, alias, flow_number)
    candidates = []
    for num, aliases in FLOW_ALIASES.items():
        for alias in aliases:
            candidates.append((len(alias), alias, num))
    # Sort by length descending (most specific first)
    candidates.sort(key=lambda x: -x[0])
    for _, alias, num in candidates:
        if alias in s_lower:
            return num
    return None


def process_file(file_path):
    rel = file_path.relative_to(ROOT).as_posix()
    file_stem = file_path.stem
    folder = file_path.parent.name
    email_id = file_stem

    try:
        content = file_path.read_text(encoding="utf-8")
    except Exception as e:
        return {
            "file_path": rel, "email_id": email_id,
            "metadata_pattern": "missing", "fields": {}, "cross_checks": {},
            "_error": f"read failed: {e}",
        }

    pattern, fields = parse_metadata(content)
    head = content[:3500]

    # H1 title as additional source for flow info (e.g., "Flow 14")
    h1_match = re.search(r"^#\s+(.+)", content, re.MULTILINE)
    h1_title = h1_match.group(1).strip() if h1_match else ""

    flow_raw = get_field_any(fields, "flow")
    # If flow not found, try to extract from H1 title
    if not flow_raw and h1_title:
        m = re.search(r"[Ff]low\s*(\d+)", h1_title)
        if m:
            flow_num = int(m.group(1))
            flow_raw = f"Flow {flow_num}"

    flow_number_raw = get_field_any(fields, "flow_number")
    flow_number_from_field = None
    if flow_number_raw:
        m = re.search(r"\d+", str(flow_number_raw))
        if m:
            flow_number_from_field = int(m.group(0))
    flow_number_from_declared = infer_flow_from_declared_text(flow_raw, folder)
    flow_number = flow_number_from_field or flow_number_from_declared or derive_flow_number(folder, file_stem)

    # If flow is still missing but we have a flow_number, populate flow from mapping
    if not flow_raw and flow_number:
        for fname, info in FOLDER_TO_FLOW.items():
            if info["number"] == flow_number and folder == fname:
                flow_raw = info["name"]
                break
        # Also check transactional sub-flows
        if not flow_raw and folder == "transactional":
            for sub, info in TRANSACTIONAL_SUBFLOWS.items():
                if info["number"] == flow_number:
                    flow_raw = info["name"]
                    break

    position_raw = get_field_any(fields, "position")
    position = None
    if position_raw:
        m = re.search(r"e\d+(?:\s*[-–]\s*\d+h)?", str(position_raw), re.IGNORECASE)
        if m:
            position = m.group(0).lower().replace(" ", "")
        else:
            m = re.search(r"d\d+", str(position_raw), re.IGNORECASE)
            if m:
                position = m.group(0).lower()
            else:
                position = str(position_raw).strip()
    if not position:
        position = parse_position_from_stem(file_stem)

    level_raw = get_field_any(fields, "level")
    level_declared = normalize_level(level_raw) if level_raw else None

    phase_raw = get_field_any(fields, "phase")
    phase = None
    if phase_raw:
        m = re.search(r"\d", str(phase_raw))
        if m:
            phase = int(m.group(0))
    if phase is None:
        phase = parse_phase(head)

    purpose_raw = get_field_any(fields, "purpose")
    section_struct = extract_section_structure_declared(fields)
    framework = extract_framework_declared(fields)
    signoff = extract_signoff_variant_declared(fields, content)

    filename_level = parse_level_from_stem(file_stem)
    folder_flow_number = derive_flow_number(folder, file_stem)
    folder_flow_name = derive_flow_name(folder, file_stem)

    # ----- Cross-check 1: filename vs declared level -----
    level_match = None
    if filename_level and level_declared:
        level_match = (filename_level == level_declared)

    # ----- Cross-check 2: folder vs declared flow -----
    flow_match = None
    if folder_flow_number and flow_number:
        flow_match = (folder_flow_number == flow_number)

    def field_obj(raw, normalized, found):
        return {"raw": raw if raw is not None else None, "normalized": normalized, "found": found}

    out = {
        "file_path": rel,
        "email_id": email_id,
        "metadata_pattern": pattern,
        "fields": {
            "flow": field_obj(flow_raw, flow_raw.strip() if flow_raw else None, bool(flow_raw)),
            "flow_number": field_obj(
                flow_number_raw if flow_number_raw else (str(flow_number) if flow_number else None),
                flow_number, flow_number is not None,
            ),
            "position": field_obj(position_raw, position, bool(position)),
            "level": field_obj(level_raw, level_declared, bool(level_declared)),
            "phase": field_obj(phase_raw if phase_raw else (str(phase) if phase else None), phase, phase is not None),
            "purpose": field_obj(purpose_raw, purpose_raw, bool(purpose_raw)),
            "section_structure_declared": {"raw": section_struct, "found": bool(section_struct)},
            "framework_declared": {"raw": framework, "found": bool(framework)},
            "signoff_variant_declared": {"raw": signoff, "found": bool(signoff)},
        },
        "cross_checks": {
            "filename_vs_declared_level": {
                "filename": filename_level,
                "declared": level_declared,
                "match": level_match,
            },
            "folder_vs_declared_flow": {
                "folder": folder,
                "folder_expected_flow_number": folder_flow_number,
                "folder_expected_flow_name": folder_flow_name,
                "declared_flow": flow_raw.strip() if flow_raw else None,
                "declared_flow_number": flow_number,
                "match": flow_match,
            },
        },
    }
    return out


def gather_files():
    files = []
    skip_names = (
        "DEEP-ANALYSIS-REPORT.md", "SKELETON-ANALYSIS.md",
        "MASTER-CONCLUSION.md", "MASTER-lifecycle.md",
        "MASTER-postpurchase.md", "MASTER-transactional.md", "MASTER-welcome.md",
    )
    for path in COPY_DIR.rglob("*.md"):
        rel = path.relative_to(ROOT).as_posix()
        if "/analysis/" in rel:
            continue
        if path.name in skip_names:
            continue
        files.append(path)
    return sorted(files)


def main():
    files = gather_files()
    print(f"Found {len(files)} copy files", file=sys.stderr)
    results = []
    with ThreadPoolExecutor(max_workers=8) as ex:
        futures = {ex.submit(process_file, f): f for f in files}
        for fut in as_completed(futures):
            try:
                r = fut.result()
            except Exception as e:
                f = futures[fut]
                r = {
                    "file_path": str(f), "email_id": f.stem,
                    "metadata_pattern": "missing", "fields": {}, "cross_checks": {},
                    "_error": str(e),
                }
            results.append(r)
    results.sort(key=lambda x: x["file_path"])

    total = len(results)
    no_meta = sum(1 for r in results if r["metadata_pattern"] == "missing")
    incomplete = sum(
        1 for r in results
        if r["metadata_pattern"] != "missing" and not r["fields"].get("flow", {}).get("found")
    )
    level_mismatch = sum(
        1 for r in results
        if r["cross_checks"].get("filename_vs_declared_level", {}).get("match") is False
    )
    flow_mismatch = sum(
        1 for r in results
        if r["cross_checks"].get("folder_vs_declared_flow", {}).get("match") is False
    )

    output = {
        "_summary": {
            "total_files_processed": total,
            "files_missing_metadata_block": no_meta,
            "files_incomplete_fields": incomplete,
            "filename_vs_declared_level_mismatches": level_mismatch,
            "folder_vs_declared_flow_mismatches": flow_mismatch,
            "output_path": str(OUTPUT_FILE),
        },
        "files": results,
    }
    OUTPUT_FILE.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT_FILE.write_text(json.dumps(output, indent=2, ensure_ascii=False), encoding="utf-8")
    print(f"Wrote {OUTPUT_FILE}", file=sys.stderr)
    print(json.dumps(output["_summary"], indent=2), file=sys.stderr)


if __name__ == "__main__":
    main()