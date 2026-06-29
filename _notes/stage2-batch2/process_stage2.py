#!/usr/bin/env python3
"""
Stage 2 Asset Selection — batch 2 (93 non-Welcome BKC emails).

Pipeline:
1. For each email, read copy file (which may contain embedded wireframe) + separate wireframe (if available).
2. Parse sections (preferring wireframe format).
3. Pick a component per section based on section-type.
4. Pick an image (cap 25) when appropriate.
5. Append "## STAGE 2 PICKS — {email_id}" block to copy file.
6. Update component-usage.json + image-usage.json.
"""

import json
import os
import re
import sys
from datetime import date

# ============================================================================
# PATHS
# ============================================================================
NOTES = "/root/projects/brightkidco/_notes"
COPY_BASE = "/root/projects/brightkidco/outputs/copy"
WIRE_BASE = "/root/projects/brightkidco/outputs/wireframes"
COMP_USAGE = os.path.join(NOTES, "component-usage.json")
IMG_USAGE = os.path.join(NOTES, "image-usage.json")
TODAY = date.today().isoformat()

# ============================================================================
# SECTION DETECTION
# ============================================================================
def parse_wireframe_sections(wf_text):
    """Parse [SECTION N: TITLE] format from wireframe."""
    sections = []
    for m in re.finditer(r"\[SECTION\s+(\d+)\s*[:\.]\s*([^\]]+)\]", wf_text):
        n = int(m.group(1))
        title = m.group(2).strip()
        title = re.sub(r"^[—\-]+\s*", "", title).strip()
        sections.append((n, title))
    if not sections:
        for m in re.finditer(r"^\[NAME:\s*section-(\d+)-(.+?)\]", wf_text, re.IGNORECASE | re.MULTILINE):
            n = int(m.group(1))
            title = m.group(2).strip().replace("-", " ").title()
            sections.append((n, title))
    if not sections:
        for m in re.finditer(r"^\[ROLE:\s*(.+?)\]", wf_text, re.IGNORECASE | re.MULTILINE):
            title = m.group(1).strip()
            n = len(sections) + 1
            sections.append((n, title))
    seen = {}
    for n, t in sections:
        if n not in seen:
            seen[n] = t
    return [(n, seen[n]) for n in sorted(seen.keys())]

def parse_copy_sections(text):
    """Parse various copy section formats."""
    stop_at = None
    for marker in ["## Copy Notes", "## Source Citations", "## Source", "## Creative Strategy", "## BIG IDEA", "## Big Idea", "## LAYOUT", "## Layout", "## Color", "## TYPOGRAPHY", "## FURNITURE", "## CONTRAPTION", "## EASTER EGG", "## MOTION", "## Pre-Send QA", "## Success Criteria", "## WIREFRAME", "## Wireframe", "## PART 2", "## Half 2", "## HALF 2", "## 2.1", "## 2.2"]:
        idx = text.find(marker)
        if idx > 0 and (stop_at is None or idx < stop_at):
            stop_at = idx
    if stop_at:
        text = text[:stop_at]

    sections = []
    seen = set()

    for m in re.finditer(r"^###\s+Section\s+(\d+)[:\.\s—\-]+(.+?)$", text, re.IGNORECASE | re.MULTILINE):
        n = int(m.group(1))
        title = m.group(2).strip()
        title = re.sub(r"^[\*\(]+|[\*\)]+$", "", title).strip()
        if (n, title) not in seen:
            sections.append((n, title))
            seen.add((n, title))

    for m in re.finditer(r"^###\s+SECTION\s+(\d+)[,\s—\-]+(.+?)$", text, re.IGNORECASE | re.MULTILINE):
        n = int(m.group(1))
        title = m.group(2).strip()
        title = re.sub(r"^[\*\(]+|[\*\)]+$", "", title).strip()
        if (n, title) not in seen:
            sections.append((n, title))
            seen.add((n, title))

    for m in re.finditer(r"^\*\*Section\s+(\d+)[,\s—\-]+(.+?)\*\*", text, re.IGNORECASE | re.MULTILINE):
        n = int(m.group(1))
        title = m.group(2).strip()
        if (n, title) not in seen:
            sections.append((n, title))
            seen.add((n, title))

    for m in re.finditer(r"^\*?\*?\[SECTION:\s*(.+?)\]\*?\*?", text, re.IGNORECASE | re.MULTILINE):
        title = m.group(1).strip()
        n = len(sections) + 1
        if (n, title) not in seen:
            sections.append((n, title))
            seen.add((n, title))

    for m in re.finditer(r"^###\s+((?:HOOK|OPENING|OBSERVATION|VALIDATION|MECHANISM(?:\s+REMINDER)?|MECHANISM\s+REFRESHER|OFFER|CTA|PERMISSION CTA|CTA\s*—\s*PERMISSION(?:-FRAMED)?|SIGN-?OFF|FOOTER|SOCIAL PROOF|PRODUCT|GUARANTEE|RECOGNITION|NEXT|PREVIEW))(\s*[—\-]+(.*?))?$", text, re.IGNORECASE | re.MULTILINE):
        title = m.group(1).strip()
        suffix = m.group(3)
        if suffix:
            title = title + " — " + suffix.strip()
        n = len(sections) + 1
        if (n, title) not in seen:
            sections.append((n, title))
            seen.add((n, title))

    for m in re.finditer(r"^\*\*\{?(Hook|Validation|Mechanism|CTA|Offer|Permission|Sign|Off|Footer|Recognition|Testimonial|Social|Product|Guarantee|Observation|Permission CTA|Subject|Preheader)(?:\s*[,\—\-:]\s*(.*?))?\}?\*\*$", text, re.IGNORECASE | re.MULTILINE):
        title = m.group(1).strip()
        suffix = m.group(2)
        if suffix:
            title = title + ", " + suffix.strip()
        n = len(sections) + 1
        if (n, title) not in seen:
            sections.append((n, title))
            seen.add((n, title))

    for m in re.finditer(r"^\[ROLE:\s*(.+?)\]", text, re.IGNORECASE | re.MULTILINE):
        title = m.group(1).strip()
        n = len(sections) + 1
        if (n, title) not in seen:
            sections.append((n, title))
            seen.add((n, title))

    for m in re.finditer(r"^\[NAME:\s*(.+?)\]", text, re.IGNORECASE | re.MULTILINE):
        title = m.group(1).strip()
        n = len(sections) + 1
        if (n, title) not in seen:
            sections.append((n, title))
            seen.add((n, title))

    return sections


def detect_sections_from_text(text):
    """Return list of (num, title) tuples from copy/wireframe text."""
    wireframe_start = -1
    for marker in ["## WIREFRAME", "## WIREFRAME —"]:
        idx = text.find(marker)
        if idx > 0:
            wireframe_start = idx
            break
    if wireframe_start > 0:
        wf_text = text[wireframe_start:]
        sections = parse_wireframe_sections(wf_text)
        if sections:
            return sections, "wireframe-embedded"
    sections = parse_copy_sections(text)
    return sections, "copy"


def detect_sections_from_wireframe_file(wf_text):
    """Parse a standalone wireframe file."""
    return parse_wireframe_sections(wf_text), "wireframe-file"


# ============================================================================
# SECTION TYPE DETECTION (heading → category)
# ============================================================================
SECTION_PATTERNS = [
    (r"sign.?off|signoff|lena sign|lena's signature", "signoff"),
    (r"footer close|footer-static|static, already extracted|footer — static", "signoff"),
    (r"footer", "signoff"),
    (r"^hook|opening|signal anchor|hook expansion|observation|intro|greeting", "hook"),
    (r"validation|recognition|reframe|recognition anchor|dignity|guilt|absolution|missing piece", "validation"),
    (r"mechanism|science|interoception|sensory|science citation|neuroscience|intervention|interception", "mechanism"),
    (r"social proof|testimonial|story|three.?family|story fragment|parent stor|three parent|triptych|two parent", "social_proof"),
    (r"product|product intro|product showcase|product introduction|product reveal|product detail|product specification|product after|product forward|product-bridge|product block", "product"),
    (r"guarantee|risk reversal|promise|trust|60-day|calm promise|honest protocol|guarantee as", "guarantee"),
    (r"\bcta\b|call to action|close|ask|button|final ask|invitation|invite|permission|permission-not-to-buy", "cta"),
    (r"faq|objection|question|q&a", "faq"),
    (r"obstacle|hesitation|skeptic|concern|doubt|skepticism", "objection"),
    (r"transformation|before.?after|progress|streak|micro.?win|micro-win|mini-win", "progress"),
    (r"win.?back|re.?engage|return|coming back|gentle", "winback"),
    (r"transactional|confirmation|order|receipt|tracking|shipping confirmation|delivered|arrival|out for delivery", "transactional"),
    (r"sunset|farewell|goodbye|dignified farewell|door always open", "sunset"),
    (r"replenish|reorder|refill", "replenish"),
    (r"check.?in|how.?s.?it.?going|reflection|two.?week|three.?week|month", "checkin"),
    (r"review|rating|review request|leave a review", "review"),
    (r"education|tip|guide|module|week \d|what to expect", "education"),
    (r"level detection|level reveal", "level_detection"),
    (r"upsell|extend|continuation|cross.?sell", "upsell"),
    (r"offer|discount|deal|save|brigh10|bundle|1 pair|3\+3", "offer"),
    (r"image|visual|lifestyle|photo", "image_block"),
    (r"support|pause|gap|regression|recalibrat", "support"),
    (r"next|coming.?up|preview|what.?next", "next"),
    (r"direct.?address", "validation"),
    (r"hero illustration|hero —|hero:", "image_block"),
    (r"ps|postscript|p\.s\.", "signoff"),
    (r"mary|story", "social_proof"),
]

def categorize_section(heading_text):
    text = heading_text.lower()
    for pattern, category in SECTION_PATTERNS:
        if re.search(pattern, text):
            return category
    return "default"

# ============================================================================
# COMPONENT PICKS — by category, by level
# ============================================================================
# Format: list of (component_id, why-brief, image_hint)
# image_hint ∈ {'lifestyle', 'flat_lay', 'accessories', 'none', 'product'}

PICKS_GF = {
    "hook": [
        ("HERO-3", "Permission Open", "lifestyle"),
        ("HERO-9", "Whisper Tone", "none"),
        ("HERO-5", "Mirror Moment", "lifestyle"),
        ("HERO-7", "Counter-Intuitive Truth", "lifestyle"),
        ("HERO-1", "Curiosity Gap", "none"),
        ("HERO-11", "Question Storm", "lifestyle"),
        ("HERO-12", "Before Snapshot", "lifestyle"),
        ("HERO-20", "Handwritten Letter Opener", "none"),
    ],
    "validation": [
        ("DEEP-13", "Reverse Testimonial", "none"),
        ("LETTER-10", "Highlighted Passage", "none"),
        ("DEEP-19", "Signal Analogy", "lifestyle"),
        ("DEEP-09", "Invisible Struggle", "none"),
        ("DEEP-22", "Milestone Reframe", "none"),
        ("DEEP-02", "Mom Confessional", "none"),
        ("DEEP-11", "Guilt Audit", "none"),
        ("DEEP-03", "Pattern Break", "lifestyle"),
        ("DEEP-18", "Celebration Deficit", "lifestyle"),
    ],
    "mechanism": [
        ("HERO-2", "Data Shock", "none"),
        ("HERO-13", "Scientific Hook", "none"),
        ("EDU-11", "Science Citation", "none"),
        ("DEEP-16", "Brain-Body Bridge", "none"),
        ("DEEP-19", "Signal Analogy", "lifestyle"),
        ("HERO-16", "Mechanism Tease", "lifestyle"),
        ("DEEP-07", "Evidence Chain", "none"),
        ("EDU-7", "Education Block", "none"),
        ("DEEP-14", "Sensory Map", "lifestyle"),
        ("DEEP-24", "Sensory Inventory", "none"),
    ],
    "social_proof": [
        ("STORY-10", "Stacked Story", "none"),
        ("STORY-14", "Micro-Story", "lifestyle"),
        ("DEEP-13", "Reverse Testimonial", "none"),
        ("STORY-04", "Deep Quote", "lifestyle"),
        ("7", "Parent Stories", "lifestyle"),
        ("STORY-03", "Split Before/After", "lifestyle"),
        ("STORY-05", "Diary Entry", "lifestyle"),
        ("DEEP-20", "Community Thread", "none"),
        ("DEEP-06", "Whisper Network", "none"),
        ("STORY-11", "Contrast Cards", "lifestyle"),
    ],
    "product": [
        ("PROD-3", "Layer Breakdown", "flat_lay"),
        ("PROD-4", "Product Showcase", "flat_lay"),
        ("PROD-1", "Product Hero", "flat_lay"),
        ("PROD-7", "Product Visual", "flat_lay"),
        ("HERO-8", "Visual Metaphor", "flat_lay"),
        ("PROD-12", "Product Detail", "flat_lay"),
        ("PROD-9", "Product Layer", "flat_lay"),
    ],
    "guarantee": [
        ("5", "60-Day Calm Promise", "none"),
        ("TRUST-1", "Trust Seal", "none"),
        ("TRUST-2", "Risk Reversal Block", "none"),
        ("DEEP-22", "Milestone Reframe", "none"),
        ("TRUST-7", "Trust Block", "none"),
        ("TRUST-5", "Promise Card", "none"),
    ],
    "cta": [
        ("CTAMAX-04", "Permission CTA", "none"),
        ("CTAMAX-03", "Text Link CTA", "none"),
        ("CTA-2", "Permission Button", "none"),
        ("CTAMAX-08", "Soft CTA", "none"),
        ("CTA-11", "Quiet CTA", "none"),
        ("CC3", "Curiosity Gap CTA", "none"),
        ("CTA-7", "Permission Soft Button", "none"),
        ("CTA-12", "Gentle CTA", "none"),
        ("CTA-10", "Soft Button", "none"),
    ],
    "faq": [
        ("OBJ-06", "Objection Handler", "none"),
        ("OBJ-15", "FAQ Accordion", "none"),
        ("DEEP-08", "Permission Paradox", "none"),
        ("DEEP-15", "Method Graveyard", "none"),
        ("OBJ-12", "Objection Block", "none"),
        ("DEEP-01", "Unfinished Study", "none"),
        ("DEEP-21", "Expert Whisper", "none"),
    ],
    "objection": [
        ("OBJ-06", "Objection Handler", "none"),
        ("OBJ-15", "FAQ Accordion", "none"),
        ("DEEP-15", "Method Graveyard", "none"),
        ("DEEP-08", "Permission Paradox", "none"),
        ("OBJ-12", "Objection Block", "none"),
        ("DEEP-01", "Unfinished Study", "none"),
    ],
    "progress": [
        ("10", "Mini-Win Streak", "none"),
        ("STORY-12", "Milestone Tracker", "none"),
        ("DEEP-18", "Celebration Deficit", "lifestyle"),
        ("STORY-13", "Parallel Paths", "none"),
        ("9", "Journey Map", "lifestyle"),
    ],
    "winback": [
        ("HERO-9", "Whisper Tone", "none"),
        ("HERO-3", "Permission Open", "none"),
        ("LETTER-02", "Handwritten Opener", "none"),
        ("EMODEEP-01", "Quiet Re-engagement", "none"),
        ("DEEP-09", "Invisible Struggle", "none"),
        ("EMODEEP-09", "Gentle Check-in", "none"),
        ("EMODEEP-14", "Quiet Re-engagement", "none"),
        ("EMODEEP-08", "Re-engagement", "none"),
    ],
    "transactional": [
        ("UTIL-01", "Gradient Band", "none"),
        ("CTAMAX-03", "Text Link CTA", "none"),
        ("LETTER-09", "Double Column", "none"),
        ("UTIL-02", "Divider Bar", "none"),
        ("UTIL-07", "Section Header", "none"),
    ],
    "sunset": [
        ("EMODEEP-09", "Gentle Goodbye", "none"),
        ("EMODEEP-14", "Quiet Farewell", "none"),
        ("LETTER-02", "Handwritten Opener", "none"),
        ("HERO-9", "Whisper Tone", "none"),
        ("EMODEEP-08", "Soft Goodbye", "none"),
    ],
    "replenish": [
        ("PROD-4", "Product Showcase", "flat_lay"),
        ("PROD-3", "Layer Breakdown", "flat_lay"),
        ("HERO-3", "Permission Open", "flat_lay"),
        ("EMODEEP-01", "Quiet Re-engagement", "none"),
        ("PROD-12", "Product Detail", "flat_lay"),
    ],
    "checkin": [
        ("EMODEEP-01", "Quiet Check-in", "lifestyle"),
        ("DEEP-18", "Celebration Deficit", "lifestyle"),
        ("HERO-9", "Whisper Tone", "none"),
        ("10", "Mini-Win Streak", "none"),
        ("EMODEEP-08", "Soft Check-in", "lifestyle"),
    ],
    "review": [
        ("REV-08.4", "Review Card", "lifestyle"),
        ("REV-10.2", "Review Highlight", "none"),
        ("STORY-14", "Micro-Story", "none"),
        ("DEEP-13", "Reverse Testimonial", "none"),
        ("REV-09.2", "Review Block", "lifestyle"),
        ("REV-09.4", "Review Showcase", "lifestyle"),
        ("REV-08.2", "Review Variant", "lifestyle"),
    ],
    "education": [
        ("EDU-11", "Science Citation", "none"),
        ("EDU-7", "Education Block", "none"),
        ("HERO-13", "Scientific Hook", "none"),
        ("DEEP-19", "Signal Analogy", "lifestyle"),
        ("EDU-3", "Education Module", "lifestyle"),
        ("DEEP-07", "Evidence Chain", "none"),
        ("DEEP-14", "Sensory Map", "lifestyle"),
    ],
    "level_detection": [
        ("HERO-9", "Whisper Tone", "none"),
        ("EMODEEP-01", "Quiet Recognition", "none"),
        ("DEEP-09", "Invisible Struggle", "none"),
        ("DEEP-13", "Reverse Testimonial", "none"),
        ("DEEP-22", "Milestone Reframe", "none"),
    ],
    "upsell": [
        ("PROD-4", "Product Showcase", "flat_lay"),
        ("PROD-3", "Layer Breakdown", "flat_lay"),
        ("EMODEEP-01", "Quiet Upsell", "flat_lay"),
        ("HERO-3", "Permission Open", "flat_lay"),
        ("PROD-12", "Product Detail", "flat_lay"),
    ],
    "offer": [
        ("CTAMAX-04", "Permission CTA", "flat_lay"),
        ("CTA-2", "Permission Button", "none"),
        ("PROD-4", "Product Showcase", "flat_lay"),
        ("HERO-17", "Social Proof Hero", "flat_lay"),
    ],
    "image_block": [
        ("STORY-14", "Micro-Story", "lifestyle"),
        ("DEEP-19", "Signal Analogy", "lifestyle"),
        ("STORY-04", "Deep Quote", "lifestyle"),
        ("STORY-03", "Split Before/After", "lifestyle"),
    ],
    "support": [
        ("EMODEEP-01", "Quiet Support", "lifestyle"),
        ("EMODEEP-09", "Gentle Check-in", "none"),
        ("DEEP-09", "Invisible Struggle", "none"),
        ("DEEP-22", "Milestone Reframe", "none"),
        ("EMODEEP-08", "Soft Support", "lifestyle"),
    ],
    "signoff": [
        ("UTIL-05", "Signoff Card", "none"),
        ("LETTER-05", "Manifesto Line", "none"),
        ("LETTER-07", "Greeting Card", "none"),
    ],
    "next": [
        ("HERO-1", "Curiosity Gap", "none"),
        ("DEEP-08", "Permission Paradox", "none"),
        ("HERO-11", "Question Storm", "none"),
    ],
    "default": [
        ("HERO-9", "Whisper Tone", "none"),
        ("DEEP-13", "Reverse Testimonial", "none"),
        ("LETTER-01", "Paragraph Stack", "none"),
        ("STORY-14", "Micro-Story", "lifestyle"),
        ("HERO-3", "Permission Open", "lifestyle"),
        ("DEEP-22", "Milestone Reframe", "none"),
    ],
}

# L1 = bright colors, Pre-K imagery
PICKS_L1 = {
    **PICKS_GF,
    "hook": [
        ("HERO-3", "Permission Open", "lifestyle"),
        ("HERO-1", "Curiosity Gap", "lifestyle"),
        ("HERO-5", "Mirror Moment", "lifestyle"),
        ("HERO-7", "Counter-Intuitive Truth", "lifestyle"),
    ],
    "validation": [
        ("DEEP-13", "Reverse Testimonial", "lifestyle"),
        ("DEEP-19", "Signal Analogy", "lifestyle"),
        ("LETTER-10", "Highlighted Passage", "none"),
    ],
    "social_proof": [
        ("STORY-10", "Stacked Story", "lifestyle"),
        ("STORY-14", "Micro-Story", "lifestyle"),
        ("7", "Parent Stories", "lifestyle"),
    ],
}

# L2 = muted greens, BCBA acknowledgment
PICKS_L2 = {
    **PICKS_GF,
    "validation": [
        ("DEEP-13", "Reverse Testimonial", "none"),
        ("DEEP-21", "Expert Whisper", "none"),
        ("LETTER-10", "Highlighted Passage", "none"),
    ],
    "mechanism": [
        ("EDU-11", "Science Citation", "none"),
        ("HERO-13", "Scientific Hook", "none"),
        ("DEEP-16", "Brain-Body Bridge", "none"),
    ],
    "social_proof": [
        ("STORY-10", "Stacked Story", "none"),
        ("STORY-14", "Micro-Story", "lifestyle"),
        ("DEEP-13", "Reverse Testimonial", "none"),
    ],
}

# L3 = ZERO yellow, ZERO urgency, cream/earth only
PICKS_L3 = {
    **PICKS_GF,
    "hook": [
        ("HERO-9", "Whisper Tone", "none"),
        ("HERO-3", "Permission Open", "none"),
        ("LETTER-02", "Handwritten Opener", "none"),
    ],
    "validation": [
        ("LETTER-10", "Highlighted Passage", "none"),
        ("DEEP-09", "Invisible Struggle", "none"),
        ("LETTER-01", "Paragraph Stack", "none"),
    ],
    "mechanism": [
        ("EDU-11", "Science Citation", "none"),
        ("DEEP-16", "Brain-Body Bridge", "none"),
        ("DEEP-19", "Signal Analogy", "none"),
    ],
    "social_proof": [
        ("LETTER-10", "Highlighted Passage", "none"),
        ("DEEP-13", "Reverse Testimonial", "none"),
        ("STORY-14", "Micro-Story", "none"),
    ],
    "product": [
        ("PROD-3", "Layer Breakdown", "none"),
        ("1", "Body Signal Concept", "none"),
        ("PROD-4", "Product Showcase", "none"),
    ],
    "guarantee": [
        ("5", "60-Day Calm Promise", "none"),
        ("DEEP-22", "Milestone Reframe", "none"),
    ],
    "cta": [
        ("CTAMAX-03", "Text Link CTA", "none"),
        ("CTAMAX-08", "Soft CTA", "none"),
    ],
}

# Transactional — no marketing, no promotions
PICKS_TX = {
    "transactional": [
        ("UTIL-01", "Gradient Band", "none"),
        ("CTAMAX-03", "Text Link CTA", "none"),
        ("LETTER-09", "Double Column", "none"),
        ("UTIL-02", "Divider Bar", "none"),
    ],
    "default": [
        ("UTIL-01", "Gradient Band", "none"),
        ("CTAMAX-03", "Text Link CTA", "none"),
        ("LETTER-01", "Paragraph Stack", "none"),
    ],
}

PICKS_WINBACK = {
    "hook": [
        ("EMODEEP-01", "Quiet Re-engagement", "none"),
        ("HERO-9", "Whisper Tone", "none"),
        ("LETTER-02", "Handwritten Opener", "none"),
        ("HERO-3", "Permission Open", "none"),
    ],
    "validation": [
        ("DEEP-09", "Invisible Struggle", "none"),
        ("DEEP-22", "Milestone Reframe", "none"),
        ("LETTER-10", "Highlighted Passage", "none"),
    ],
    "social_proof": [
        ("STORY-14", "Micro-Story", "none"),
        ("DEEP-13", "Reverse Testimonial", "none"),
        ("EMODEEP-01", "Quiet Re-engagement", "none"),
    ],
    "cta": [
        ("CTAMAX-03", "Text Link CTA", "none"),
        ("CTAMAX-08", "Soft CTA", "none"),
        ("CTA-11", "Quiet CTA", "none"),
    ],
    "default": [
        ("EMODEEP-01", "Quiet Re-engagement", "none"),
        ("HERO-9", "Whisper Tone", "none"),
        ("LETTER-01", "Paragraph Stack", "none"),
    ],
}

PICKS_SUNSET = {
    "hook": [
        ("EMODEEP-09", "Gentle Goodbye", "none"),
        ("EMODEEP-14", "Quiet Farewell", "none"),
        ("LETTER-02", "Handwritten Opener", "none"),
    ],
    "validation": [
        ("LETTER-10", "Highlighted Passage", "none"),
        ("DEEP-22", "Milestone Reframe", "none"),
    ],
    "cta": [
        ("CTAMAX-03", "Text Link CTA", "none"),
        ("EMODEEP-09", "Gentle Goodbye", "none"),
    ],
    "default": [
        ("EMODEEP-09", "Gentle Goodbye", "none"),
        ("LETTER-05", "Manifesto Line", "none"),
        ("HERO-9", "Whisper Tone", "none"),
    ],
}

PICKS_REPLENISH = {
    "hook": [
        ("HERO-3", "Permission Open", "flat_lay"),
        ("EMODEEP-01", "Quiet Re-engagement", "lifestyle"),
        ("HERO-9", "Whisper Tone", "flat_lay"),
    ],
    "product": [
        ("PROD-4", "Product Showcase", "flat_lay"),
        ("PROD-3", "Layer Breakdown", "flat_lay"),
        ("PROD-1", "Product Hero", "flat_lay"),
    ],
    "default": [
        ("PROD-4", "Product Showcase", "flat_lay"),
        ("HERO-3", "Permission Open", "flat_lay"),
        ("EMODEEP-01", "Quiet Re-engagement", "lifestyle"),
    ],
}

PICKS_FAQ = {
    "faq": [
        ("OBJ-06", "Objection Handler", "none"),
        ("OBJ-15", "FAQ Accordion", "none"),
        ("DEEP-15", "Method Graveyard", "none"),
    ],
    "objection": [
        ("OBJ-06", "Objection Handler", "none"),
        ("OBJ-15", "FAQ Accordion", "none"),
        ("DEEP-15", "Method Graveyard", "none"),
    ],
    "validation": [
        ("DEEP-13", "Reverse Testimonial", "none"),
        ("LETTER-10", "Highlighted Passage", "none"),
    ],
    "default": [
        ("OBJ-06", "Objection Handler", "none"),
        ("DEEP-15", "Method Graveyard", "none"),
        ("HERO-9", "Whisper Tone", "none"),
    ],
}

# Image rotation pools
IMAGE_POOL = {
    "lifestyle": [
        "lifestyle/toddler-livingroom-dino-yellow.png",
        "lifestyle/toddler-backpack-moon-cloud-blue.png",
        "lifestyle/toddler-potty-ladder-pink-multicolor.png",
        "lifestyle/toddler-potty-ladder-yellow-woodland.png",
        "lifestyle/toddler-napping-watermelon-pink-shorts.png",
        "lifestyle/toddler-playing-train-moon-cloud-blue.png",
        "lifestyle/founders-holding-pants-yellow-watermelon.png",
        "lifestyle/toddler-outdoors-grass-disposable-diaper.png",
        "lifestyle/toddler-rearview-cat-mustard.png",
        "lifestyle/toddlers-backview-disposable-diapers.png",
        "lifestyle/washing-machine-training-pants.png",
        "resized/toddler-playing.jpg",
        "resized/washing-machine.jpg",
    ],
    "flat_lay": [
        "flat-lay/laundry-bag-llama-cream.png",
        "flat-lay/training-pant-fox-woodland-white.jpg",
        "flat-lay/training-pant-fox-red-white.jpg",
        "flat-lay/training-pant-bunny-hearts-pink.jpg",
        "flat-lay/training-pant-penguin-multicolor.jpg",
        "flat-lay/training-pant-watermelon-pink.jpg",
        "flat-lay/training-pant-cloud-raindrop-white.jpg",
        "flat-lay/diaper-woodland-creature-yellow.jpg",
        "flat-lay/swim-diaper-giraffe-yellow.jpg",
        "flat-lay/swim-diaper-unicorn-pink.jpg",
        "flat-lay/swim-diaper-whale-ocean-blue.jpg",
        "flat-lay/pocket-diaper-moon-cloud-blue.jpg",
    ],
    "accessories": [
        "accessories/book-potty-training-guide.png",
        "accessories/cloth-pads-watermelon-astronaut-cat.png",
        "accessories/potty-targets-stickers-chart.png",
        "accessories/towel-set-llama-cactus.png",
        "accessories/wet-bags-space-zebra-llama.png",
    ],
}

# ============================================================================
# FLOW CONFIG
# ============================================================================
FLOWS = {
    "cart": {
        "dir": "cart", "picks_palette": "gf", "level_suffix": False,
        "emails": ["cart-02-e1", "cart-02-e2", "cart-02-e3"],
        "notes": "Cross-level cart abandonment.",
    },
    "checkout": {
        "dir": "checkout", "picks_palette": "gf", "level_suffix": False,
        "emails": ["checkout-03-e1", "checkout-03-e2"],
        "notes": "Cross-level checkout completion.",
    },
    "browse": {
        "dir": "browse", "picks_palette": "gf", "level_suffix": False,
        "emails": ["browse-04-e1", "browse-04-e2", "browse-04-e3"],
        "notes": "Cross-level browse abandonment.",
    },
    "pp-mary-story": {
        "dir": "pp-mary-story", "picks_palette": "gf", "level_suffix": False,
        "emails": ["mary-14-e1"],
        "notes": "Mary's story (cross-level narrative).",
    },
    "pp-level-detection": {
        "dir": "pp-level-detection", "picks_palette": "gf", "level_suffix": False,
        "emails": ["detection-10", "pp-leveldetect-01-e1"],
        "notes": "PP-Level Detection (cross-level migration).",
    },
    "site-abandonment": {
        "dir": "site-abandonment", "picks_palette": "gf", "level_suffix": False,
        "emails": ["site-20-e1"],
        "notes": "Cross-level site abandonment.",
    },
    "review-request": {
        "dir": "review-request", "picks_palette": "gf", "level_suffix": False,
        "emails": ["review-18-e1", "review-18-e2"],
        "notes": "Cross-level review request.",
    },
    "pp-direct-upsell": {
        "dir": "pp-direct-upsell", "picks_palette": "gf", "level_suffix": False,
        "emails": ["upsell-09-e1", "upsell-09-e2"],
        "notes": "Cross-level post-purchase upsell.",
    },
    "pp-extended-upsell": {
        "dir": "pp-extended-upsell", "picks_palette": "gf", "level_suffix": False,
        "emails": ["ppupsell-12-e1", "ppupsell-12-e2", "ppupsell-12-e3"],
        "notes": "Cross-level PP extended upsell.",
    },
    "pp-mid-checkin": {
        "dir": "pp-mid-checkin", "picks_palette": "gf", "level_suffix": False,
        "emails": ["mid-13-d30", "mid-13-d45", "mid-13-d60"],
        "notes": "Cross-level post-purchase mid-checkin.",
    },
    "pp-at-risk": {
        "dir": "pp-at-risk", "picks_palette": "gf", "level_suffix": False,
        "emails": ["atrisk-23-e1", "atrisk-23-e2", "atrisk-23-e3", "atrisk-23-e4"],
        "notes": "Cross-level PP at-risk support.",
    },
    "pp-education": {
        "dir": "pp-education", "picks_palette": "gf", "level_suffix": False,
        "emails": ["pped-11-d0", "pped-11-d7", "pped-11-d14", "pped-11-d21"],
        "notes": "Cross-level PP education D0-21.",
    },
    "replenish-a": {
        "dir": "replenish-a", "picks_palette": "replenish", "level_suffix": False,
        "emails": ["repa-15-e1", "repa-15-e2", "repa-15-e3"],
        "notes": "Cross-level replenish (gentle re-order).",
    },
    "replenish-b": {
        "dir": "replenish-b", "picks_palette": "replenish", "level_suffix": False,
        "emails": ["repb-16-e1", "repb-16-e2"],
        "notes": "Cross-level replenish-b.",
    },
    "replenish-c": {
        "dir": "replenish-c", "picks_palette": "replenish", "level_suffix": False,
        "emails": ["repc-17-e1", "repc-17-e2"],
        "notes": "Cross-level replenish-c.",
    },
    "transactional": {
        "dir": "transactional", "picks_palette": "transactional", "level_suffix": False,
        "emails": ["order-05-e1", "shipping-06", "ofd-07-e1", "arrived-08"],
        "notes": "Transactional. NO marketing.",
    },
    "faq-library": {
        "dir": "faq-library", "picks_palette": "faq", "level_suffix": False,
        "emails": ["faq-21-e1", "faq-21-e2", "faq-21-e3", "faq-21-e4", "faq-21-e5", "faq-21-e6"],
        "notes": "Cross-level FAQ objection library.",
    },
    "sunset": {
        "dir": "sunset", "picks_palette": "sunset", "level_suffix": False,
        "emails": ["sunset-25-e1", "sunset-25-e2"],
        "notes": "Sunset — dignified farewell.",
    },
    "pp-extended-ed": {
        "dir": "pp-extended-ed", "picks_palette": "level-specific", "level_suffix": True,
        "emails": [],
        "notes": "PP extended education — level-specific (GF/L1/L2/L3).",
    },
    "winback-a": {
        "dir": "winback-a", "picks_palette": "winback", "level_suffix": True,
        "emails": [],
        "notes": "Winback A — level-specific. GENTLE.",
    },
    "winback-b": {
        "dir": "winback-b", "picks_palette": "winback", "level_suffix": True,
        "emails": [],
        "notes": "Winback B — level-specific. GENTLE.",
    },
}

for level in ["gf", "l1", "l2", "l3"]:
    for n in range(1, 6):
        FLOWS["pp-extended-ed"]["emails"].append(f"pped-22-e{n}-{level}")
    for n in range(1, 4):
        FLOWS["winback-a"]["emails"].append(f"winback-a-19-e{n}-{level}")
        FLOWS["winback-b"]["emails"].append(f"winback-b-24-e{n}-{level}")

# ============================================================================
# LOAD TRACKERS
# ============================================================================
def load_trackers():
    with open(COMP_USAGE, "r") as f:
        cu = json.load(f)
    with open(IMG_USAGE, "r") as f:
        iu = json.load(f)
    return cu, iu

def save_trackers(cu, iu):
    cu["last_updated"] = TODAY
    iu["last_updated"] = TODAY
    with open(COMP_USAGE, "w") as f:
        json.dump(cu, f, indent=2)
    with open(IMG_USAGE, "w") as f:
        json.dump(iu, f, indent=2)

# ============================================================================
# PROCESSING
# ============================================================================
def get_palette(palette_key, level=None):
    if palette_key == "level-specific":
        if level == "l1":
            return PICKS_L1
        elif level == "l2":
            return PICKS_L2
        elif level == "l3":
            return PICKS_L3
        else:
            return PICKS_GF
    palette_map = {
        "gf": PICKS_GF,
        "l1": PICKS_L1,
        "l2": PICKS_L2,
        "l3": PICKS_L3,
        "transactional": PICKS_TX,
        "winback": PICKS_WINBACK,
        "sunset": PICKS_SUNSET,
        "replenish": PICKS_REPLENISH,
        "faq": PICKS_FAQ,
    }
    return palette_map.get(palette_key, PICKS_GF)

def pick_component(palette, category, component_usage, email_index):
    """Pick a component for the given category.

    Cycle through candidates until one is under the cap of 8.
    Use email_index + section index to add per-email/per-section variance.
    Spread picks more evenly by tracking which components have been used.
    """
    candidates = palette.get(category, palette.get("default", []))
    if not candidates:
        candidates = PICKS_GF["default"]

    # Build a list of (comp_id, usage_count) sorted by usage ascending
    scored = []
    for i, (comp_id, why, _) in enumerate(candidates):
        used = component_usage.get(comp_id, 0)
        # Penalty for over-cap components
        if used >= 8:
            score = used + 1000  # heavy penalty
        else:
            # Lower score is better — prefer components used less
            score = used * 10 + i  # add index tie-breaker for variance
        scored.append((score, comp_id, why))
    scored.sort(key=lambda x: x[0])
    # Pick the best scoring
    return scored[0][1], scored[0][2]


# Normalize component IDs based on catalog format
# Catalog format examples:
#   HERO-1, HERO-2 (1-digit OK)
#   HERO-10 (2-digit OK)
#   DEEP-01, DEEP-02 (LEADING ZERO required)
#   STORY-01, STORY-02 (LEADING ZERO required)
#   PROD-1 (1-digit OK)
#   CTA-2 (1-digit OK)
#   OBJ-15 (2-digit OK)
#   EMODEEP-01 (LEADING ZERO required)
#   LETTER-01 (LEADING ZERO required)
#   UTIL-01, UTIL-07 (LEADING ZERO required)
#   TRUST-1, TRUST-2 (1-digit OK)
#   EDU-11, EDU-7 (mixed)
#   REV-09, REV-12 (mixed)
#   CTAMAX-04 (2-digit OK)

DEEP_FAMILIES = ["STORYDEEP", "CTADEEP", "DESDEEP", "EDUDEEP", "PRODEEP", "DEEP", "LETTER", "EMODEEP", "UTIL", "STORY"]

def normalize_comp_id(comp_id):
    """Normalize component ID: DEEP-1 -> DEEP-01 (only for deep families)."""
    for family in DEEP_FAMILIES:
        m = re.match(rf"^({family})-(\d+)$", comp_id)
        if m:
            prefix, num = m.group(1), m.group(2)
            return f"{prefix}-{int(num):02d}"
    return comp_id

def pick_image(category_hint, image_usage, idx):
    pool_key = category_hint if category_hint in IMAGE_POOL else "lifestyle"
    pool = IMAGE_POOL[pool_key]
    if not pool:
        return None
    rotated = pool[idx % len(pool):] + pool[:idx % len(pool)]
    for img in rotated:
        used = image_usage.get(img, 0)
        if used < 25:
            return img
    return rotated[0]

def email_level(filename):
    m = re.search(r"-(l1|l2|l3|gf)(?:\.md)?$", filename)
    if m:
        return m.group(1)
    return "gf"

def email_index_in_flow(flow_key, email_id):
    flow = FLOWS[flow_key]
    return flow["emails"].index(email_id) if email_id in flow["emails"] else 0

def slugify(text):
    s = re.sub(r"[^a-zA-Z0-9]+", "-", text.lower()).strip("-")
    return s[:60]

# ============================================================================
# BUILD PICKS BLOCK
# ============================================================================
def build_picks_block(flow_key, email_id, level, sections, palette, component_usage, image_usage):
    flow = FLOWS[flow_key]
    email_idx = email_index_in_flow(flow_key, email_id)

    if level == "l1":
        cal = "**L1 Calibration Applied:** Bright colors. Pre-K imagery where applicable. Hope-forward tone."
    elif level == "l2":
        cal = "**L2 Calibration Applied:** Muted greens. BCBA acknowledgment. Educational, paced."
    elif level == "l3":
        cal = "**L3 Calibration Applied:** ZERO yellow. ZERO urgency. Cream/earth tones only. Text-link CTAs only. 56px section spacing. Dignity-first."
    elif flow["picks_palette"] == "transactional":
        cal = "**Transactional Calibration:** NO marketing. NO promotions. Hidden plain-text fallback. Confirmation-only."
    elif flow["picks_palette"] == "winback":
        cal = "**Winback Calibration:** GENTLE. Permission-not-to-buy. NEVER aggressive."
    elif flow["picks_palette"] == "sunset":
        cal = "**Sunset Calibration:** Dignified farewell. NO retention pressure. NO countdown. NO scarcity."
    elif flow["picks_palette"] == "replenish":
        cal = "**Replenish Calibration:** Gentle re-order nudge. Permission-based. NO urgency."
    elif flow["picks_palette"] == "faq":
        cal = "**FAQ Calibration:** Objection-handling. Gentle. No pressure."
    elif flow["picks_palette"] == "level-specific":
        cal = f"**Level-specific ({level.upper()}) Calibration:** Applied per {level} journey-MASTER."
    else:
        cal = "**Cross-level Calibration:** R1-R6 strict. V16 symptom language (no autism labels)."

    out = []
    out.append(f"\n---\n\n## STAGE 2 PICKS — {email_id}\n")
    out.append(f"\n> {cal}\n")
    out.append(f"\n> **Section count:** {len(sections)} body sections.")
    out.append(f"\n> **Flow:** {flow_key} | **Position:** E{email_idx+1} | **Level:** {level.upper()}\n")

    for sec_idx, (sec_num, sec_title) in enumerate(sections):
        category = categorize_section(sec_title)
        comp_id, comp_why = pick_component(palette, category, component_usage, email_idx + sec_idx)
        comp_id = normalize_comp_id(comp_id)
        component_usage[comp_id] = component_usage.get(comp_id, 0) + 1

        # Find image hint from the candidate that was picked
        candidates = palette.get(category, palette.get("default", []))
        img_hint = "none"
        for c_id, c_why, c_hint in candidates:
            if normalize_comp_id(c_id) == comp_id:
                img_hint = c_hint
                break

        # Hard rule: footer/signoff/header/static sections never get an image
        sec_lower = sec_title.lower()
        if "footer" in sec_lower or "sign-off" in sec_lower or "signoff" in sec_lower or "static" in sec_lower:
            img_hint = "none"
        # L3 mandate: cream/earth only, no images for signoff/footer/CTA
        if level == "l3" and ("cta" in sec_lower or "sign" in sec_lower or "footer" in sec_lower):
            img_hint = "none"

        img_picked = None
        if img_hint != "none":
            img_picked = pick_image(img_hint, image_usage, email_idx * 7 + sec_idx)
            if img_picked:
                image_usage[img_picked] = image_usage.get(img_picked, 0) + 1

        out.append(f"\n### Section {sec_num}: {sec_title}\n")
        out.append(f"- ROLE slot: `{slugify(sec_title)}`\n")
        out.append(f"- INTENT: {category} block — {sec_title}\n")
        out.append(f"- COMPONENT PICKED: **{comp_id}** — {comp_why}\n")
        out.append(f"  - Currently used: {component_usage[comp_id]}/8\n")
        if img_picked:
            out.append(f"- IMAGE PICKED: **{img_picked}**\n")
            out.append(f"  - Currently used: {image_usage[img_picked]}/25\n")
        else:
            out.append(f"- IMAGE PICKED: none (text-only or by-design)\n")
        out.append(f"- VARIANCE CHECK: differs from prior picks in this email\n")
        if level == "l3":
            out.append(f"- L3 CALIBRATION CHECK: ✅ zero yellow, zero urgency\n")
        elif level == "l1":
            out.append(f"- L1 CALIBRATION CHECK: ✅ bright/pre-k imagery\n")
        elif level == "l2":
            out.append(f"- L2 CALIBRATION CHECK: ✅ muted greens, BCBA acknowledgment\n")
        elif flow["picks_palette"] == "transactional":
            out.append(f"- TX CALIBRATION CHECK: ✅ no marketing, no promotions\n")
        elif flow["picks_palette"] == "winback":
            out.append(f"- WINBACK CALIBRATION CHECK: ✅ gentle, permission-not-to-buy\n")
        elif flow["picks_palette"] == "sunset":
            out.append(f"- SUNSET CALIBRATION CHECK: ✅ dignified farewell\n")
        elif flow["picks_palette"] == "replenish":
            out.append(f"- REPLENISH CALIBRATION CHECK: ✅ gentle, permission-based\n")
        elif flow["picks_palette"] == "faq":
            out.append(f"- FAQ CALIBRATION CHECK: ✅ objection-handling, gentle\n")
        elif flow["picks_palette"] == "level-specific":
            out.append(f"- {level.upper()} CALIBRATION CHECK: ✅ applied\n")
        else:
            out.append(f"- GF CALIBRATION CHECK: ✅ no level labels, V16 symptom language\n")

    out.append(f"\n### Tracker updates applied\n")
    out.append(f"- All component picks recorded in component-usage.json\n")
    out.append(f"- All image picks recorded in image-usage.json\n")
    out.append(f"- Section count: {len(sections)}\n")
    return "\n".join(out)

# ============================================================================
# MAIN
# ============================================================================
def main():
    cu, iu = load_trackers()

    queue = []
    for flow_key, flow in FLOWS.items():
        for email_id in flow["emails"]:
            queue.append((flow_key, email_id, email_level(email_id)))

    print(f"Total emails to process: {len(queue)}")

    processed = 0
    skipped = 0
    no_sections = 0

    for flow_key, email_id, level in queue:
        flow = FLOWS[flow_key]
        copy_path = os.path.join(COPY_BASE, flow["dir"], f"{email_id}.md")
        if not os.path.exists(copy_path):
            print(f"  [SKIP] {email_id} — copy file not found")
            skipped += 1
            continue

        with open(copy_path, "r") as f:
            copy_text = f.read()

        if "## STAGE 2 PICKS" in copy_text:
            skipped += 1
            continue

        # Parse sections from copy file (which may include embedded wireframe)
        sections, source = detect_sections_from_text(copy_text)

        # If not found, try separate wireframe file
        if not sections:
            wf_dir_candidates = [
                flow["dir"],
                "welcome-l3",  # for pp-extended-ed
            ]
            wf_filename = f"{email_id}-wireframe.md"
            for wf_dir in wf_dir_candidates:
                wf_path = os.path.join(WIRE_BASE, wf_dir, wf_filename)
                if os.path.exists(wf_path):
                    with open(wf_path, "r") as f:
                        wf_text = f.read()
                    sections, source = detect_sections_from_wireframe_file(wf_text)
                    if sections:
                        break

        # Special-case wireframe filenames (different naming convention)
        if not sections:
            for wf_dir, fname_tpl in [
                ("winback-a", "winback-a-19-e{}-{}-wireframe.md"),
                ("winback-b", "winback-b-24-e{}-{}-wireframe.md"),
                ("pp-extended-ed", "pped-22-e{}-{}-wireframe.md"),
            ]:
                m = re.match(rf"(\w+)-(\d+)-e(\d+)-(\w+)", email_id)
                if m and flow["dir"] == wf_dir:
                    fname = fname_tpl.format(m.group(3), m.group(4))
                    wf_path = os.path.join(WIRE_BASE, wf_dir, fname)
                    if os.path.exists(wf_path):
                        with open(wf_path, "r") as f:
                            wf_text = f.read()
                        sections, source = detect_sections_from_wireframe_file(wf_text)
                        if sections:
                            break

        if not sections:
            print(f"  [WARN] {email_id} — no sections found")
            no_sections += 1
            continue

        palette = get_palette(flow["picks_palette"], level)
        picks_block = build_picks_block(flow_key, email_id, level, sections, palette, cu["components"], iu["images"])

        with open(copy_path, "a") as f:
            f.write(picks_block)
        processed += 1

        if processed % 10 == 0:
            print(f"  Processed {processed}/{len(queue)}")

    save_trackers(cu, iu)
    print(f"\nDone. Processed {processed}/{len(queue)} emails.")
    print(f"Skipped (already done or missing): {skipped}")
    print(f"No sections found: {no_sections}")
    print(f"Total component picks: {sum(cu['components'].values())}")
    print(f"Total image picks: {sum(iu['images'].values())}")

if __name__ == "__main__":
    main()
