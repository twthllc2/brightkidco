"""Prompts the 8 welcome-gf emails via parallel sub-agents.

For each of the 8 emails (welcome-01-e1-gf.md ... welcome-01-e8-gf.md):
  1. Spawn a sub-agent with:
     - the email's copy file (read it, don't reference it)
     - the 14-primitive catalog (inline)
     - the 3-product-variant catalog (inline)
     - the brand rules block (inline)
     - the previous email's component list (variance blacklist)
     - the welcome-gf-flow content.js (so the sub-agent sees the FIELD NAMES in use)
  2. The sub-agent outputs a single JSON: component picks + image assignments + copy-field mapping
  3. This orchestrator collects all 8 outputs, builds content.js, emails.jsx, app.jsx, bundles, render-checks.
"""
import json
import os
import sys
from pathlib import Path
from concurrent.futures import ThreadPoolExecutor, as_completed

PROJECT = Path("/root/projects/brightkidco")
OUT = PROJECT / "outputs/email-design/raw/BKCO - EMAIL MARKETING/welcome-gf-flow"
COPY_DIR = PROJECT / "outputs/copy/welcome"

# Field names that are KNOWN to exist in content.js (so the sub-agent knows what's available)
KNOWN_FIELDS = """preheader, subject, heroBadge, h1a, h1b, subhead, hook, validation, mechanism,
letterOpening, definitionLabel, definitionTitle, definitionBody, expertLabel, expertQuote, expertBy,
stat (number, label, compare), socialProof (array of {quote, by}),
socialProofClosing, socialProofStat, product, objections (array of {header, body}),
reframe, testimonials (array of {quote, by, family?}), testimonialsClosing, recap (array of {label, body}),
recapClosing, migrationLabel, migrationText, migrationHref, offer (primary {label, price, note, cta, href}, secondary {label, price, note, cta, href, rationale}),
psLine, signoffName, signoffClosing, signoffMessage, footerAddress,
guaranteeLabel, guaranteeAccent, guaranteeSub, guaranteePoints (array of {title, body})"""

PRIMITIVE_CATALOG = """## THE 14 PRIMITIVES (you can ONLY use these)

```yaml
EmailShell:    { wraps everything; props: preheader (string), bg (hex color) }
Header:        { logo bar; props: bg }
PartBadge:     { yellow pill sticker, rotate(-1.5deg); props: children (text) }
TitleBlock:    { hero title with gradient accent on second word; props: badge, part1, part2, subhead? }
Eyebrow:       { small uppercase label; props: children (text), color? }
H2:            { section heading with gradient span on accent word; props: children (text), center (bool), size (number) }
Letter:        { paragraph stack on warm bg; props: bg (hex), paras (array of strings), first? (lead text) }
Band:          { gradient transition strip; props: from (hex), to (hex), height (40) }
FramedImage:   { image with 2px ink border + hard shadow; props: shadow (3|4|6), src (path), alt (text) }
ImgFrame:      { dashed teal placeholder when no real image; props: height, label, sublabel, aspect?, radius? }
CTAClose:      { dark ink CTA bar with arrow; props: ctaText, href }
Signoff:       { Lena signature card; reads from window.FLOW_WELCOME_GF_SHARED.signoff. NO PROPS. }
OutLine:       { small framed inline element; NO PROPS. }
Footer:        { legal + unsubscribe links; reads from window.FLOW_WELCOME_GF_SHARED.footer. NO PROPS. }
```

Plus 3 product variants (read from welcome-flow/product-showcase.jsx):
```yaml
ProductShowcaseFull:    { full product card with 2 product images + price + bundle toggle; image_slots: 2 }
ProductShowcaseMedium:  { single product card with 1 image + price; image_slots: 1 }
ProductShowcaseSoft:    { small product mention strip; image_slots: 0 }
```

## INLINE PATTERNS (you implement as inline JSX, not a primitive)

- **60-Day Guarantee circular seal** — pattern copied from welcome-flow/email-6.jsx (200x200 SVG with circle text "Calm Progress · No Questions · Real Returns · {N} Full Days", 56px gradient number, "Calm Days" label, 6px ink shadow)
- **3-dot color-coded guarantee checkmark cards** — pattern from email-6.jsx (3 cards, 42px color stripe on left, title + body)
- **Quote card with left-border accent** — used for parent testimonials
- **Inline CTA button** — dark ink bg, lime #D8F57C button text, pill border-radius, 17px 32px padding (CTAClose primitive hardcodes href="#", so do NOT use it; build inline)

## BRAND RULES (non-negotiable)

```yaml
copy:
  verbatim: true            # character-for-character from .md, no rewrites
  no_em_dash: true          # no — anywhere
  no_double_hyphen: true    # no -- anywhere
  currency: "€"             # never $
  cta_arrow: "→"            # every CTA button ends with →
signoff:
  E1: "BKC team"
  E2+: "Lena Bauer"
closing_word:
  E1-E2: "Talk soon"
  E3-E5: "With understanding"
  E6+: "With care"
structure:
  min_sections: 7           # total component count >= 7
  min_image_slots: 3
  max_image_slots: 4
  min_hard_shadows: 1       # at least one FramedImage with shadow >= 3
  min_tilted_stickers: 1    # at least one PartBadge
  width_px: 420             # mobile-first
  min_email_height: 3500    # the artboard needs enough height to not clip
colors:
  approved_bg_palette: [#FFFBF0 (cream warm), #FFF6E2 (yellow warm), #EAF6F2 (teal pale), #F0EDF8 (lavender pale), #FFFFFF, transparent]
  brand_tokens: [B.teal, B.ink, B.cream, B.lime, B.yellow]  # B = window.BRAND
borders: "2px solid #1F2D2F"  # all cards
shadows: "3px 3px 0 / 4px 4px 0 / 6px 6px 0 with #1F2D2F"  # no blur, no rgba
fonts: [F.main (Questrial), F.display (Fraunces), F.hand (Caveat)]
forbidden_in_jsx: [<html>, <body>, <head>, import statements, export default, <> Fragments, em dash, double hyphen, $ sign]
```

## IMAGE SLOT TABLE (counts toward 3-4 quota)

- `FramedImage` with `<img>` child: 1 slot
- `FramedImage` with `ImgFrame` placeholder: 1 slot
- `ImgFrame` (standalone): 1 slot
- `ProductShowcaseFull`: 2 slots
- `ProductShowcaseMedium`: 1 slot
- `ProductShowcaseSoft`: 0 slots
- All other primitives: 0 slots
- Inline circular seal: 0 slots (SVG, not photo)

## THE 28 PRODUCT PHOTOS (use these for src paths in FramedImage/ProductShowcase)

```yaml
# 11 lifestyle photos — context, daily routine, emotional state
lifestyle/:
  - founders-holding-pants-yellow-watermelon.png
  - toddler-livingroom-dino-yellow.png
  - toddler-outdoors-grass-disposable-diaper.png
  - toddler-napping-watermelon-pink-shorts.png
  - toddler-potty-ladder-pink-multicolor.png
  - toddler-potty-ladder-yellow-woodland.png
  - toddler-backpack-moon-cloud-blue.png
  - toddler-playing-train-moon-cloud-blue.png
  - toddler-rearview-cat-mustard.png
  - toddlers-backview-disposable-diapers.png
  - washing-machine-training-pants.png

# 12 flat-lay photos — product detail, kit spread, texture
flat-lay/:
  - diaper-woodland-creature-yellow.jpg
  - pocket-diaper-moon-cloud-blue.jpg
  - training-pant-bunny-hearts-pink.jpg
  - training-pant-cloud-raindrop-white.jpg
  - training-pant-fox-red-white.jpg
  - training-pant-fox-woodland-white.jpg
  - training-pant-penguin-multicolor.jpg
  - training-pant-watermelon-pink.jpg
  - swim-diaper-giraffe-yellow.jpg
  - swim-diaper-unicorn-pink.jpg
  - swim-diaper-whale-ocean-blue.jpg
  - laundry-bag-llama-cream.png

# 5 accessories
accessories/:
  - book-potty-training-guide.png
  - cloth-pads-watermelon-astronaut-cat.png
  - potty-targets-stickers-chart.png
  - towel-set-llama-cactus.png
  - wet-bags-space-zebra-llama.png
```

NOTE: The standalone HTML output is at `raw/Welcome GF _standalone_.html` (one level up from the flow folder). So image `src` paths in your JSX must be relative to the standalone HTML's location, which is `raw/`. So use paths like `product-photos/lifestyle/toddler-livingroom-dino-yellow.png` (NO leading `../`, NO `BKCO - EMAIL MARKETING/` prefix).

## IMAGE SLOT ROUTING RULES

- `hero_image` (position 2-3, the lead image): lifestyle or flat-lay
- `body_product` (inside `ProductShowcaseFull`): flat-lay only, match by product name
- `body_inline_breaker` (mid-body): lifestyle or accessories
- `signoff` (Lena card): no image (uses black-placeholder.png from primitives internally)
- `guarantee_seal` (inline circular): no photo, SVG only

## ANTI-DUPLICATION

No two slots in the same email can share an image path.

## NARRATIVE CHUNKING (CRITICAL)

Do NOT just dump the copy into a single `Letter` block. Read the copy, segment it into narrative chunks by INTENT, and route each chunk to a STRUCTURALLY DIFFERENT primitive:

- **Hook** → TitleBlock (hero title with gradient accent)
- **Empathy / Validation / Story** → Letter block with first= lead, OR a quote card with left-border accent, OR a FramedImage with sublabel
- **Science / Mechanism** → Letter block, OR H2 + Letter combo, OR the 3-layer LayerRow explainer
- **Reviews / Social Proof** → Quote cards (left-border accent), italic, attribution
- **Risk Reversal / 60-Day Guarantee** → The inline circular seal (200x200 SVG) + 3-dot color-coded checkmark cards
- **Call to Action** → Inline CTA button (dark ink bg, lime #D8F57C button, 17px 32px padding, pill radius)
- **Sign-off / P.S.** → Signoff primitive (which reads from window.FLOW_WELCOME_GF_SHARED)
- **Legal / Unsubscribe** → Footer primitive

MECHANISM BEFORE GUARANTEE — never put the guarantee seal before the mechanism explainer.

VARY THE STRUCTURE ACROSS EMAILS. Email 1 might lead with FramedImage + TitleBlock + 3 Letter blocks. Email 3 might open with a 3-card quote triptych then a StatCallout. Email 5 might use 3 objection callouts (border-left) instead of plain Letter. Each email must feel like a DIFFERENT composition of the same primitive set, not the same template with different copy.

## VARIANCE BLACKLIST (per build_unit)

Do NOT use any primitive that was in the PREVIOUS email's component list, except bookends: EmailShell, Header, Footer, Band. If forced to violate, log `variance_bypass: "reason"` in the output.

## OUTPUT FORMAT (strict JSON, no prose)

```json
{
  "email_id": "welcome-01-e1-gf",
  "build_unit": "welcome-gf-flow",
  "variant": "gf",
  "position_number": 1,
  "metadata": {
    "subject": "[verbatim]",
    "preheader": "[verbatim]",
    "day": 0,
    "level": "General Family"
  },
  "signoff_name": "BKC team" or "Lena Bauer",
  "closing_word": "Talk soon" / "With understanding" / "With care",
  "total_image_slots": 3,
  "components": [
    {
      "position": 1,
      "primitive": "EmailShell",
      "props": { "preheader": "[verbatim]", "bg": "#FFFBF0" },
      "image_slots": 0
    },
    ...
  ],
  "image_slots_detail": [
    { "component_position": 3, "image_path": "product-photos/lifestyle/..." }
  ],
  "variance_bypass": null
}
```

## TASK

For the email copy at <COPY_FILE_PATH>:

1. Read the file
2. Extract metadata (subject, preheader, day, level, position)
3. Segment the email body into narrative chunks
4. For each chunk, pick a primitive that STRUCTURALLY matches the chunk's intent (do NOT default to Letter)
5. Sequence the components, with mechanism before guarantee
6. Assign 3-4 image slots from the 28-photo manifest
7. Apply the variance blacklist from <PREVIOUS_BLACKLIST>
8. Validate: 7-12 components, 3-4 image slots, ≥1 hard shadow, ≥1 PartBadge
9. Output the strict JSON blueprint

Do not produce any prose, markdown fences, or explanations. Output ONLY the JSON.
"""
