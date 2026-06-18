# BKC Email Build Plan — 125 Emails across 35 Flows

> **Status:** Active. Replaces the over-engineered `email-design-plan.md` (kept as historical reference).
> **Scope:** Produce standalone `.html` files for BrightKidCo, scp to cachy. One flow at a time. No batching.

---

## The Math (from copy files, nothing else)

- **125 copy files** total in `/root/projects/brightkidco/outputs/copy/` (excluding the 2 analysis reports)
- **35 build units** = 16 multi-variant flows + 19 single flows
- Each build unit = 1 standalone HTML containing all its emails as artboards
- **GF / L1 / L2 / L3 are SEPARATE FLOWS**, not variants of the same email

**Build unit map (35 total):**

| Build unit | Source copy dir | Emails per flow | Variants |
|---|---|---|---|
| welcome-gf-flow | `copy/welcome/` (gf files) | 8 | 1 of 4 |
| welcome-l1-flow | `copy/welcome/` (l1 files) | 8 | 2 of 4 |
| welcome-l2-flow | `copy/welcome/` (l2 files) | 8 | 3 of 4 |
| welcome-l3-flow | `copy/welcome/` (l3 files) | 8 | 4 of 4 |
| pp-extended-ed-gf-flow | `copy/pp-extended-ed/` (gf) | 5 | 1 of 4 |
| pp-extended-ed-l1-flow | `copy/pp-extended-ed/` (l1) | 5 | 2 of 4 |
| pp-extended-ed-l2-flow | `copy/pp-extended-ed/` (l2) | 5 | 3 of 4 |
| pp-extended-ed-l3-flow | `copy/pp-extended-ed/` (l3) | 5 | 4 of 4 |
| winback-a-gf-flow | `copy/winback-a/` (gf) | 3 | 1 of 4 |
| winback-a-l1-flow | `copy/winback-a/` (l1) | 3 | 2 of 4 |
| winback-a-l2-flow | `copy/winback-a/` (l2) | 3 | 3 of 4 |
| winback-a-l3-flow | `copy/winback-a/` (l3) | 3 | 4 of 4 |
| winback-b-gf-flow | `copy/winback-b/` (gf) | 3 | 1 of 4 |
| winback-b-l1-flow | `copy/winback-b/` (l1) | 3 | 2 of 4 |
| winback-b-l2-flow | `copy/winback-b/` (l2) | 3 | 3 of 4 |
| winback-b-l3-flow | `copy/winback-b/` (l3) | 3 | 4 of 4 |
| cart-flow | `copy/cart/` | 3 | single |
| browse-flow | `copy/browse/` | 3 | single |
| checkout-flow | `copy/checkout/` | 2 | single |
| faq-flow | `copy/faq-library/` | 6 | single |
| pp-at-risk-flow | `copy/pp-at-risk/` | 4 | single |
| pp-direct-upsell-flow | `copy/pp-direct-upsell/` | 2 | single |
| pp-education-flow | `copy/pp-education/` | 4 | single |
| pp-extended-upsell-flow | `copy/pp-extended-upsell/` | 3 | single |
| pp-level-detection-flow | `copy/pp-level-detection/` | 2 | single |
| pp-mary-story-flow | `copy/pp-mary-story/` | 1 | single |
| pp-mid-checkin-flow | `copy/pp-mid-checkin/` | 3 | single |
| replenish-a-flow | `copy/replenish-a/` | 3 | single |
| replenish-b-flow | `copy/replenish-b/` | 2 | single |
| replenish-c-flow | `copy/replenish-c/` | 2 | single |
| review-request-flow | `copy/review-request/` | 2 | single |
| site-abandonment-flow | `copy/site-abandonment/` | 1 | single |
| sunset-flow | `copy/sunset/` | 2 | single |
| transactional-flow | `copy/transactional/` | 4 | single |

**Totals:** 35 build units producing 35 standalone HTMLs containing 125 emails.

---

## Working Inventory (from `welcome-flow/`)

Use as reference for the 4-file pattern, primitive catalog, brand rules:

- `welcome-flow/primitives.jsx` — 14 primitives + `MW` (420) + `LOGO`
- `welcome-flow/product-showcase.jsx` — 3 product variants
- `welcome-flow/design-canvas.jsx` — canvas wrapper
- `autistic-welcome/variants/tokens.js` — brand tokens (`window.BRAND`, `window.FONT`)
- `autistic-welcome/variants/illustrations.jsx` — 10 SVG illustrations
- `welcome-flow/content.js`, `emails-2-3.jsx`, `email-6.jsx`, etc. — 10 working emails for the autistic-parent welcome flow

These 10 existing emails are the structural reference but they do NOT match the 32 copy files in `copy/welcome/`. The 10 working emails were built for a different copy draft. Per your instruction ("fuck what ever is built"), they get treated as a reference pattern, not a deliverable. All 32 welcome copy files will be built fresh.

---

## The 14 Primitives (catalog the LLM uses)

```yaml
EmailShell:    { wraps everything; props: preheader, bg, maxWidth=420 }
Header:        { logo bar; props: bg }
PartBadge:     { yellow pill sticker, rotate(-1.5deg); props: children }
TitleBlock:    { hero title with gradient accent on second word; props: badge, part1, part2, subhead }
Eyebrow:       { small uppercase label; props: children, color }
H2:            { section heading with gradient span; props: children, center, size }
Letter:        { paragraph stack on warm bg; props: bg, paras, first }
Band:          { gradient transition strip; props: from, to, height=40 }
FramedImage:   { image with 2px ink border + hard shadow; props: children or label/sublabel, shadow=4 }
ImgFrame:      { dashed teal placeholder when no real image; props: height, label, sublabel, aspect, radius }
CTAClose:      { dark ink CTA bar with arrow; props: ctaText, href }
Signoff:       { Lena signature card; props: name, closing }
OutLine:       { small framed inline element; props: children }
Footer:        { legal + unsubscribe links; props: links, address }
```

## The 3 Product Variants

```yaml
ProductShowcaseFull:    { full product card with 2 product images + price + bundle toggle; image_slots: 2 }
ProductShowcaseMedium:  { single product card with 1 image + price; image_slots: 1 }
ProductShowcaseSoft:    { small product mention strip; image_slots: 0 }
```

---

## Brand Rules (from `_TEMPLATE/README.md`)

```yaml
copy:
  verbatim: true
  no_em_dash: true
  no_double_hyphen: true
  currency: "€" (not $)
  signoff:
    E1: "BKC team"
    E2_plus: "Lena Bauer"
    F2: "Lena"  # if a "flow 2" exists, use "Lena" (not "Lena Bauer")
  closing_word:
    E1_E2: "Talk soon"
    E3_E5: "With understanding"
    E6_plus: "With care"
structure:
  min_sections: 7
  min_image_slots: 3
  max_image_slots: 4
  min_hard_shadows: 1
  min_tilted_stickers: 1
  width_px: 420
  color_tokens:
    - teal #2BAEB4
    - green #5DD07A
    - ink #1F2D2F
    - cream #FBF7F1
    - lime #D8F57C
    - yellow #FFD866
  borders: "2px solid #1F2D2F"
  shadows: "3px 3px 0 / 4px 4px 0 / 6px 6px 0 with #1F2D2F, no blur, no rgba"
  fonts:
    - Fraunces (display)
    - Questrial (body)
    - Caveat (handwritten, Lena signature)
  part_badge_bg: "#FFD866"
  part_badge_rotate: -1.5deg
  cta_arrow: " →"  # every CTA ends with this
  mechanism_before_guarantee: true
  subject_formula: "one of 6: Observation, Validation, Mechanism tease, Permission frame, Question, Social proof"
```

---

## Phase 0 — Inventory (one-time, before any build)

1. **Freeze the 5 shared files** (chmod -w on primitives.jsx, product-showcase.jsx, design-canvas.jsx, tokens.js, illustrations.jsx)
2. **Build `build_manifest.json`** — 35 build units, 125 emails (see schema below)
3. **Build `tools/bundle_standalone.py`** — Python script that inlines the 5 shared files + 3 per-flow files + all 28 images (as base64 data URIs) + CDN scripts into a single self-contained ~3MB HTML. Resolves every `<script src="...">` and `<img src="...">` tag in the Local.html loader, inlines each as either a `<script>` block (for .js/.jsx) or a data: URI base64 (for images), writes to the output path.
4. **Initialize `progress.json`** — all 35 build units marked `pending`, summary counters zeroed
5. **Smoke test on the 10 existing welcome-flow emails** — bundle `Welcome Flows - 10 Emails.html`, render with headless chromium, verify 10 artboards mount with zero console errors. **If this fails, STOP. The bundler must work before any new email is built.**

**Build manifest schema** (`build_manifest.json`):
```json
{
  "build_units": [
    {
      "id": "welcome-gf-flow",
      "variant": "gf",
      "source_copy_dir": "outputs/copy/welcome/",
      "copy_files": ["welcome-01-e1-gf.md", "welcome-01-e2-gf.md", ...],
      "email_count": 8,
      "flow_key": "WELCOME_GF"
    },
    {
      "id": "cart-flow",
      "variant": null,
      "source_copy_dir": "outputs/copy/cart/",
      "copy_files": ["cart-02-e1.md", "cart-02-e2.md", "cart-02-e3.md"],
      "email_count": 3,
      "flow_key": "CART"
    }
  ],
  "metadata": {
    "total_build_units": 35,
    "total_emails": 125,
    "total_copy_files": 125
  }
}
```

The manifest is the build queue. It defines which copy files feed which build unit, and what `window.FLOW_<KEY>` name to use in `content.js`.

---

## Phase 1 — Build One Flow At A Time

**Strict order. No parallelism across flows. No batching flows together.**

**Build cadence:**
1. Pick the next build unit from `build_manifest.json`
2. Build it (Phases 2-5 below)
3. Bundle to standalone HTML
4. Render-check
5. scp to cachy
6. **STOP. Wait for Ayoub's review and approval.**
7. Only after approval: pick the next build unit

The first flow to build = **welcome-gf-flow** (8 emails, the highest-value, anchors the rest).

---

## Phase 2 — The Architect: Component Selection (per email, per build unit)

**For each of the 8 emails in welcome-gf-flow, run one LLM call. So 8 calls per build unit.**

### 2.1 — Context Ingestion (per email)

The LLM gets the following inputs, **and only these inputs**:

| Input | Path | Size |
|---|---|---|
| The copy file | `outputs/copy/welcome/welcome-01-e1-gf.md` | 5-30KB |
| The 14 primitives catalog | inline in prompt | ~3KB |
| The 3 product variants catalog | inline in prompt | ~1KB |
| The previous email's component list (variance blacklist) | `progress.json` → `history[-1].components` | <1KB |
| The hard brand rules block | inline in prompt | ~2KB |

**Isolation:** the LLM does NOT see `primitives.jsx` source, `design-canvas.jsx`, the bundler, or any other email's `emails.jsx`.

### 2.2 — Metadata Extraction

The LLM reads lines 1-25 of the copy file and pulls out:
- `Flow`
- `Position` (e.g., "E1", "E3 — Day 7", "d30")
- `Level` / `Variant` (e.g., "General Family", "L1 Sarah", "Cross-Level")
- `Phase`
- `Purpose`
- `Subject Line` (verbatim)
- `Preview Text` (verbatim)

The `Position` drives signoff/closing-word rules:
- E1 → signoff "BKC team", closing "Talk soon"
- E2+ → signoff "Lena Bauer", closing "Talk soon" if E2, "With understanding" if E3-E5, "With care" if E6+

### 2.3 — Narrative Chunking → Component Routing

The LLM segments the email body into narrative chunks and routes each to a structural slot:

| Copy intent in the markdown | Structural slot | Primitive |
|---|---|---|
| Hero hook / opening | Slot 2-3 | `TitleBlock` |
| Empathy / validation / story | Slot 3-4 | `Letter` with `first=` lead, or `FramedImage` if image-led |
| Science / how it works | Slot 5 | `Letter` (or `H2` + `Letter` combo) |
| Reviews / social proof | Slot 5-6 | `Letter` (italic block) or inline `FramedImage` |
| Inline image breakers | Interspersed | `FramedImage` with `ImgFrame` placeholder |
| Product showcase | Slot 6-7 | `ProductShowcaseFull` / `Medium` / `Soft` |
| Risk reversal / 60-day guarantee | Slot 7-8 | `Letter` + inline circular SVG seal (email-6.jsx pattern) |
| Call to action | Slot 8 | `CTAClose` |
| Sign-off / P.S. | Slot 9 | `Signoff` |
| Legal / unsubscribe | Last slot | `Footer` |

**Rule:** A guarantee section needs the inline circular seal pattern from email-6.jsx — the LLM flags it as `guaranteeSeal: true` in the blueprint and implements it inline. A "buy now" CTA must use `CTAClose`, not `Letter` text.

### 2.4 — Image Quota Filter (3-4 slots, with fallback)

The LLM counts image slots using this per-primitive count table:

| Primitive | Image slots |
|---|---|
| `FramedImage` with `<img>` child | 1 |
| `FramedImage` with `ImgFrame` placeholder (no real image) | 1 |
| `ImgFrame` (standalone) | 1 |
| `ProductShowcaseFull` | 2 |
| `ProductShowcaseMedium` | 1 |
| `ProductShowcaseSoft` | 0 |
| `TitleBlock` / `Letter` / `Eyebrow` / `H2` / `Band` / `CTAClose` / `Signoff` / `OutLine` / `Footer` / `Header` / `EmailShell` | 0 |
| Inline circular seal | 0 (SVG, not photo) |

**The count must equal exactly 3 or 4. If not, apply fallback:**

**Deficit (< 3):**
1. Swap a text-only `Letter` for a `FramedImage` with `ImgFrame` placeholder
2. Insert a `FramedImage` (with `ImgFrame` placeholder) as a visual breaker
3. Swap `ProductShowcaseSoft` (0) for `ProductShowcaseMedium` (1) or `ProductShowcaseFull` (2)
4. Still under 3: mark `variance_bypass: "deficit_unresolved"`, continue

**Surplus (> 4):**
1. Swap a `FramedImage` for a `Band` (gradient transition)
2. Swap `ProductShowcaseFull` (2) for `ProductShowcaseMedium` (1)
3. Drop a `FramedImage`, merge narrative into adjacent `Letter`
4. Still over 4: drop a `FramedImage` entirely

**The 3-4 count is sacred. Component choices bend around it.**

### 2.5 — Color & Theme Vertical Consistency

Approved backgrounds: `#FFFBF0` (cream warm), `#FFF6E2` (yellow warm), `#EAF6F2` (teal pale), `#F0EDF8` (lavender pale), `#FFFFFF` (white), `#FFD866` (yellow, sticker only), `transparent`.

Rules:
- Maximum 4 distinct backgrounds per email
- `Band` required between any two adjacent sections with different bg colors
- No `EmailShell` bg jumping to a heavy bg without a `Band` between

### 2.6 — Variance Blacklist

Read `progress.json` → `history[-1].components` (previous email's primitive list). Strip bookends (`EmailShell`, `Header`, `Footer`, `Band`). The remainder is the active blacklist.

When the LLM picks a component, it must not be in the blacklist unless no alternative exists (then log `variance_bypass` and continue).

**Variance applies WITHIN a build unit only** — e.g., the 8 welcome-gf emails all share variance history. When we move to welcome-l1, the history resets (different audience, different flow, no variance relationship).

### 2.7 — Output: Strict JSON Blueprint

The LLM outputs one JSON object per email. No prose, no markdown fences.

**Schema A — Phase 2 Blueprint:**
```json
{
  "email_id": "welcome-01-e1-gf",
  "build_unit": "welcome-gf-flow",
  "variant": "gf",
  "metadata": {
    "flow": "Welcome Flow (Flow 01)",
    "position": "E1",
    "level": "General Family (GF)",
    "subject": "[verbatim]",
    "preheader": "[verbatim]"
  },
  "total_image_slots": 3,
  "components": [
    {
      "position": 1,
      "primitive": "EmailShell",
      "props": { "preheader": "[verbatim]", "bg": "#FFFBF0" },
      "image_slots": 0
    },
    {
      "position": 2,
      "primitive": "Header",
      "props": { "bg": "#FFFBF0" },
      "image_slots": 0
    },
    {
      "position": 3,
      "primitive": "FramedImage",
      "props": {
        "height": 240,
        "label": "HERO · GENTLE INVITATION",
        "sublabel": "[scene description, NOT copy text]",
        "shadow": 6
      },
      "image_slots": 1,
      "image_path_pending": true
    }
  ],
  "variance_check": {
    "previous_email": "welcome-01-e1-gf",
    "blacklist_applied": [],
    "bypasses": []
  },
  "image_slots_detail": [
    { "component_position": 3, "needs_image": true, "image_path": null }
  ],
  "validation": {
    "section_count": 0,
    "image_slot_total": 3,
    "contains_hard_shadow": true,
    "contains_tilted_sticker": true,
    "uses_band_for_transition": true,
    "signoff_rule_satisfied": true,
    "closing_word_rule_satisfied": true,
    "no_em_dash_in_copy_fields": true,
    "no_dollar_in_copy_fields": true
  }
}
```

**Validation script (run after LLM emits, before saving) — STRICT CAPS, ALL MUST PASS:**

```yaml
# Hard structural caps (HARD FAIL on any violation)
component_count: 9 <= N <= 12              # was 7-12, too loose. Real email = 9-12 primitives.
image_slot_count: 3 <= N <= 4
hard_shadow_count: >= 1                    # FramedImage with shadow in {3, 4, 6}
part_badge_count: exactly 1                # was >= 1, allowing 2-3 dupes. Exactly 1.

# Per-role caps (one primitive per role, no duplicates)
per_role_caps:
  EmailShell: exactly 1
  Header: exactly 1
  Footer: exactly 1                        # MANDATORY — every email ends with Footer
  OutLine: exactly 0 or 1
  Signoff: exactly 1
  TitleBlock: exactly 0 or 1
  PartBadge: exactly 0 or 1                # (PartBadge is INSIDE TitleBlock; count = 1)
  Band: any                                # gradient transitions are fine in quantity
  FramedImage: <= 2                        # one hero, one inline breaker max
  ImgFrame: exactly 0 or 1
  Eyebrow: exactly 1
  H2: exactly 1
  Letter: <= 2                             # was unbounded, now capped
  ProductShowcaseFull: exactly 0 or 1
  ProductShowcaseMedium: exactly 0 or 1
  ProductShowcaseSoft: exactly 0 or 1
  CTAClose: 0                              # BANNED — hardcodes href="#". Use inline CTA.
  inline_cta: exactly 1                    # the CTA must be a built inline button with real href

# Custom inline components (counted as "extended primitives")
inline_components:
  GuaranteeSeal: exactly 0 or 1            # 200x200 circular SVG
  TestimonialCard: <= 4                    # for the testimonial section
  RecapCard: exactly 0 or 4                # only in E8 (4-card recap grid)
  ObjectionCallout: exactly 0 or 3          # only in E5 (3 objection callouts)
  ComparisonCards: exactly 0 or 1          # only in E6 (pull-ups vs BKC)
  LayerRow: exactly 0 or 3                 # only in E7 (3-layer mechanism)
  StatCallout: exactly 0 or 1              # only in E3 (49% SPARK stat)
  MigrationAnchorCard: exactly 0 or 1      # only in E8 (quiz link)

# Word count caps (rendered text only, not markup)
rendered_word_count: 200 <= N <= 500

# Required structural sequence
# Every email MUST end with this exact 3-element sequence:
end_sequence:
  - Signoff
  - OutLine  (optional but recommended)
  - Footer   (MANDATORY — every email)

# Image quality
image_paths: all unique, all exist on disk
real_image_ratio: >= 50%  # at least 2 of 3-4 slots must be real <img> (not ImgFrame placeholder)

# Copy rules
no_em_dash_in_strings: true
no_double_hyphen_in_strings: true
no_dollar_in_strings: true
euro_in_all_prices: true
cta_ends_with_arrow: true

# Signoff rules (derived from position)
signoff:
  E1: "BKC team"
  E2-E8: "Lena Bauer"
closing_word:
  E1-E2: "Talk soon"
  E3-E5: "With understanding"
  E6-E8: "With care"

# Variance blacklist (no duplicate primitive roles from previous email in same build_unit)
variance_blacklist: true

# Inline CTA must have real href (not "#")
cta_href_starts_with_http: true
```

If ANY check fails: regenerate once with the error message. If second attempt fails, mark `failed` in `progress.json` and continue to next email.

**Save location:** `outputs/email-design/blueprints/<build_unit>/<email_id>_blueprint.json`

---

## Phase 3 — Art Direction: Image Mapping (per email)

**The LLM picks which of the 28 product photos go into the 3-4 image slots.**

### 3.1 — Image Manifest (28 photos, 4 categories)

```yaml
# 11 lifestyle photos
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

# 12 flat-lay photos
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

# 1 branding
branding/:
  - black-placeholder.png
```

### 3.2 — Slot Routing Rules

| Slot role | Allowed source categories | Selection criteria |
|---|---|---|
| `hero_image` (position 2-3) | `lifestyle/` or `flat-lay/` | Lifestyle if copy opens with empathy/story; flat-lay if copy opens with product/mechanism |
| `body_product` (inside `ProductShowcaseFull`) | `flat-lay/` ONLY | Match the product named in copy by name token |
| `body_inline_breaker` (mid-body) | `lifestyle/` or `accessories/` | Lifestyle for emotional beats; accessories for bundles |
| `signoff` (Lena card) | `branding/` (placeholder) | `black-placeholder.png` until Lena's headshot is added |
| `guarantee_seal` (inline circular) | none — SVG only | Built inline in JSX |

**Anti-duplication:** no two slots in the same email can share an image path.
**Variance within build unit:** if the previous 2 emails in the same build unit used the same photo, the LLM prefers a different one.

### 3.3 — Path Validation

- [ ] Every `image_path` physically exists under `/root/projects/brightkidco/outputs/email-design/raw/product-photos/`
- [ ] No duplicates within the email
- [ ] Number of `image_path` assignments == `total_image_slots`
- [ ] Every path is `.png` or `.jpg`

**Path syntax:** relative from the flow folder: `../product-photos/lifestyle/toddler-livingroom-dino-yellow.png`

**Aspect ratio:** no formal check. `FramedImage` and `ImgFrame` handle cropping.

**Missing path fallback:** substitute first available photo in same category, log the substitution, continue.

### 3.4 — Lock the Paths

Update the Phase 2 blueprint with `image_path` filled in. Save as `<email_id>_blueprint_filled.json` — this is the frozen blueprint.

---

## Phase 4 — The Compiler: Code Generation (per email)

**The LLM produces the 3 per-flow files. For multi-email flows, the LLM produces ALL emails in one call, going into the same `emails.jsx` / `content.js` / `app.jsx`.**

### 4.1 — Context Ingestion

The LLM gets:
- Filled blueprint (Phase 3 output)
- Source copy `.md` file
- The 14 primitive signatures (props + how to use)
- The 5-file load order (where this email's output plugs in)
- The hard brand rules

**Isolation:** the LLM does NOT see other emails' code, the canvas, the bundler, or any file outside the inputs.

### 4.2 — Build `content.js`

The LLM writes the data file:

```js
window.FLOW_WELCOME_GF = window.FLOW_WELCOME_GF || {};

window.FLOW_WELCOME_GF.e1 = {
  preheader: "[verbatim]",
  heroBadge: "[verbatim]",
  h1a: "[verbatim, 1-3 words]",
  h1b: "[verbatim, 1-3 words, gets gradient]",
  subhead: "[verbatim, optional]",
  letterOpening: ["[verbatim para 1]", "[verbatim para 2]"],
  // ... all other copy fields from blueprint
  signoffName: "BKC team",
  signoffClosing: "Talk soon"
};

window.FLOW_WELCOME_GF.e2 = { /* ... */ };
// ... e3, e4, e5, e6, e7, e8
```

**Validation:**
- [ ] Valid JavaScript
- [ ] No em dash, no `--`, no `$` in any string
- [ ] `window.FLOW_<KEY>` matches the build unit's `flow_key`
- [ ] All 8 email objects (e1-e8) present for welcome-gf-flow
- [ ] File size > 200 bytes

**Save location:** `raw/BKCO - EMAIL MARKETING/welcome-gf-flow/content.js`

### 4.3 — Build `emails.jsx`

The LLM writes the React components:

```jsx
const { EmailShell, Header, PartBadge, TitleBlock, Eyebrow, H2, Letter, Band, FramedImage, ImgFrame, CTAClose, Signoff, OutLine, Footer, ProductShowcaseFull } = window;
const B = window.BRAND;
const F = window.FONT;

const Email1 = () => {
  const c = window.FLOW_WELCOME_GF.e1;
  // ... all 8 Email<N> components
};
```

**Compilation rules:**
1. Primitive order in JSX matches the blueprint's `position` order
2. All copy text is `c.someField` — never inline literals
3. All image `src` attributes use paths from the blueprint's `image_slots_detail`
4. All images have `alt` attributes (descriptive, from filename + context)
5. Inline patterns (60-day circular seal) are explicit JSX copied from email-6.jsx pattern
6. No `<html>`, `<body>`, `<head>` tags
7. No `import` statements
8. No `export default`
9. `<>` Fragment is forbidden — wrap multi-child returns in a single `<div>` if needed
10. Hard shadows: `boxShadow: "4px 4px 0 #1F2D2F"` (or 3px or 6px)
11. Borders: `border: "2px solid #1F2D2F"` on every card
12. `style={{}}` uses camelCase keys (React convention)

**For multi-email flows:** the LLM generates `Email1`, `Email2`, ..., `Email8` as separate consts in the same `emails.jsx` file.

**Validation:**
- [ ] File parses with Babel-standalone
- [ ] File size > 500 bytes
- [ ] Component count matches blueprint total
- [ ] At least one `boxShadow` with `${X}px ${X}px 0 #1F2D2F`
- [ ] At least one `PartBadge` (typically in `TitleBlock`)
- [ ] Every `src` is non-empty and starts with `../product-photos/`
- [ ] Every `<img>` has an `alt` attribute
- [ ] No em dash, no `--`, no `import`, no `export default`, no `<html>`/`<body>`/`<head>`

**Save location:** `raw/BKCO - EMAIL MARKETING/welcome-gf-flow/emails.jsx`

### 4.4 — Build `app.jsx`

The LLM writes the canvas entry point:

```jsx
const { DesignCanvas, DCSection, DCArtboard } = window;
const MW = 420;

const App = () => {
  return (
    <DesignCanvas title="Welcome · GF" subtitle="8 emails · General Family">
      <DCSection id="welcome-gf" title="Welcome Flow · General Family">
        <DCArtboard id="e1" label="Email 1 · Day 0" width={MW} height={4800}>
          <Email1 />
        </DCArtboard>
        <DCArtboard id="e2" label="Email 2 · Day 2" width={MW} height={4900}>
          <Email2 />
        </DCArtboard>
        // ... e3 through e8
      </DCSection>
    </DesignCanvas>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
```

**Validation:**
- [ ] File parses
- [ ] File size > 300 bytes
- [ ] Number of `<DCArtboard>` matches email count of the build unit
- [ ] Single `ReactDOM.createRoot(...).render(<App />)` call at the bottom

**Save location:** `raw/BKCO - EMAIL MARKETING/welcome-gf-flow/app.jsx`

### 4.5 — Cross-File + Structural Sanity Check (HARD FAIL on violation)

**Cross-file checks:**
- [ ] Every `c.something` reference in `emails.jsx` corresponds to a field in `content.js`
- [ ] Every `image_path` in `emails.jsx` matches a path filled in the blueprint
- [ ] Number of `Email<N>` consts == number of `<DCArtboard>` tags
- [ ] No `TODO`, `FIXME`, or placeholder strings
- [ ] No references to components that don't exist

**Structural checks (NEW — derived from v2 issues):**
- [ ] **EXACTLY 1 `<Footer />` per email** — every email MUST end with `<Signoff /><OutLine /><Footer />` in that order
- [ ] **EXACTLY 1 `<Signoff />` per email**
- [ ] **EXACTLY 0 `<CTAClose />` per email** — banned because it hardcodes `href="#"`
- [ ] **EXACTLY 1 inline CTA** per email — must include `href="https://www.brightkidco.com/...` (real link, not `#`)
- [ ] **EXACTLY 1 PartBadge** per email (typically inside TitleBlock, count once)
- [ ] **EXACTLY 0-1 TitleBlock** per email
- [ ] **<= 2 FramedImage** per email (one hero + one inline breaker max)
- [ ] **<= 2 Letter** per email (was unbounded, LLM was dumping 5-6 Letters = 5+ paragraphs of copy)
- [ ] **EXACTLY 0-1 H2** per email (was up to 3 dupes)
- [ ] **EXACTLY 1 Eyebrow** per email (was up to 3 dupes)
- [ ] **Total components: 9 ≤ N ≤ 12** (was 7-12, too loose)
- [ ] **Total rendered words: 200 ≤ N ≤ 500** (was unbounded; emails were 600-1100 words)
- [ ] **At least 2 of 3-4 image slots are real `<img>` (not ImgFrame placeholder)** — 50% real-image ratio
- [ ] **No em dash, no `--`, no `$` in any string literal in `emails.jsx` or `content.js`**
- [ ] **No duplicate `<PartBadge>` instances**
- [ ] **No `import` statements, no `export default`, no `<></> Fragments**

If any check fails: regenerate once. If still failing, mark `failed`, continue. **Do NOT bundle or ship an email that fails any of these checks.**

### 4.6 — Build the `Local.html` Loader

The LLM (or mechanical template) creates `<Flow> Local.html` following the load order:

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Welcome · GF · BrightKidCo</title>
  <!-- React 18 + ReactDOM 18 + Babel Standalone pinned -->
  <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head>
<body>
  <div id="root"></div>
  <!-- 1. tokens.js -->
  <script src="../../autistic-welcome/variants/tokens.js"></script>
  <!-- 2. content.js -->
  <script src="./content.js"></script>
  <!-- 3. design-canvas.jsx -->
  <script type="text/babel" src="../../welcome-flow/design-canvas.jsx"></script>
  <!-- 4. primitives.jsx -->
  <script type="text/babel" src="../../welcome-flow/primitives.jsx"></script>
  <!-- 5. product-showcase.jsx -->
  <script type="text/babel" src="../../welcome-flow/product-showcase.jsx"></script>
  <!-- 6. illustrations.jsx -->
  <script type="text/babel" src="../../autistic-welcome/variants/illustrations.jsx"></script>
  <!-- 7. emails.jsx -->
  <script type="text/babel" src="./emails.jsx"></script>
  <!-- 8. app.jsx -->
  <script type="text/babel" src="./app.jsx"></script>
</body>
</html>
```

**Save location:** `raw/BKCO - EMAIL MARKETING/welcome-gf-flow/Welcome GF Local.html`

---

## Phase 5 — Bundle, Render, Ship (per build unit)

**Mechanical steps, no LLM.**

### 5.1 — Bundle

Find or build `bundle_standalone.py` (Phase 0 task — see open questions). The bundler inlines all scripts and images into a single ~3MB HTML.

```bash
python3 tools/bundle_standalone.py "raw/BKCO - EMAIL MARKETING/welcome-gf-flow/Welcome GF Local.html" "raw/Welcome GF _standalone_.html"
```

### 5.2 — Headless Render Check

Use headless Chromium to:
1. Load the standalone HTML
2. Wait for React + Babel-standalone to mount (5-10s)
3. Count `<DCArtboard>` tags == 8 (for welcome-gf-flow)
4. Check console for zero JS errors
5. Check `EmailShell` backgrounds match the blueprint's bg sequence
6. Check no `<img>` has a 404

If any check fails: mark `failed` in `progress.json` with the error, continue.

### 5.3 — Update Progress

In `progress.json`:
- Move build unit from `in_progress` → `completed`
- Append the 8 emails' component lists to `history[]`
- Increment `summary.completed`

### 5.4 — SCP to Cachy

```bash
scp "raw/Welcome GF _standalone_.html" ayoub@100.76.121.113:/home/ayoub/Documents/
```

### 5.5 — STOP. Wait for Review

**Do not start the next build unit until Ayoub reviews welcome-gf-flow and signs off.**

**Telegram escalation (per build unit):**
- ONE Telegram at start: "Executing {build_unit}, will message on block or success"
- ONE Telegram at end: "Done, scp'd, ready for review" OR "Blocked on {specific error}"
- NO mid-execution check-ins, no progress pings, no sub-result notifications
- Telegram goes through ayoub's bot at the same destination as Telegram-mirror of this session

### 5.6 — On Review Rejection

If Ayoub rejects a build unit:
1. He describes what's off (visual, copy, structural, anything)
2. Map the rejection to a specific rule in this plan
3. Diagnose: is it the prompt, the validator, the primitive, or the bundler?
4. Fix the right layer (not always the LLM prompt — could be a primitive that needs adjusting)
5. Rebuild the build unit only, not the entire batch
6. Re-bundle, re-render-check, re-scp

**Variance history is preserved across rejection cycles.** A rejected email's components still count toward the blacklist for the next email in the same build unit.

---

## Phase 6 — Loop to Next Build Unit

After Ayoub approves welcome-gf-flow, mark the next build unit as `in_progress` and repeat Phases 2-5.

**Suggested order** (highest value first, single-flows first to validate the pattern, multi-variants last):

1. **welcome-gf-flow** (8 emails) — first build, anchors the pattern
2. **cart-flow** (3 emails) — single-flow smoke test
3. **browse-flow** (3 emails)
4. **checkout-flow** (2 emails)
5. **faq-flow** (6 emails)
6. **pp-education-flow** (4 emails)
7. **pp-mid-checkin-flow** (3 emails)
8. **pp-at-risk-flow** (4 emails)
9. **pp-extended-upsell-flow** (3 emails)
10. **pp-direct-upsell-flow** (2 emails)
11. **pp-level-detection-flow** (2 emails)
12. **pp-mary-story-flow** (1 email)
13. **replenish-a-flow** (3 emails)
14. **replenish-b-flow** (2 emails)
15. **replenish-c-flow** (2 emails)
16. **review-request-flow** (2 emails)
17. **site-abandonment-flow** (1 email)
18. **sunset-flow** (2 emails)
19. **transactional-flow** (4 emails)
20. **welcome-l1-flow** (8 emails)
21. **welcome-l2-flow** (8 emails)
22. **welcome-l3-flow** (8 emails)
23. **pp-extended-ed-gf-flow** (5 emails)
24. **pp-extended-ed-l1-flow** (5 emails)
25. **pp-extended-ed-l2-flow** (5 emails)
26. **pp-extended-ed-l3-flow** (5 emails)
27. **winback-a-gf-flow** (3 emails)
28. **winback-a-l1-flow** (3 emails)
29. **winback-a-l2-flow** (3 emails)
30. **winback-a-l3-flow** (3 emails)
31. **winback-b-gf-flow** (3 emails)
32. **winback-b-l1-flow** (3 emails)
33. **winback-b-l2-flow** (3 emails)
34. **winback-b-l3-flow** (3 emails)
35. **pp-extended-ed-flow** (verify — 20 files = 4 variants × 5 emails, already in #23-26)

(Step 35 is a checkpoint; the 20 pp-extended-ed files split into 4 build units in steps 23-26.)

---

## Cost & Time Estimate

| Phase | Time | LLM calls |
|---|---|---|
| 0 — Build manifest | 15 min | 0 |
| 1 — welcome-gf-flow (8 emails × 1-3 calls) | 30-60 min | 8-24 |
| 2-5 — Each subsequent build unit | 5-30 min | varies with email count |
| 35 build units × average 4 emails | 4-8 hours total | ~125-375 calls |

**Per-email budget:** ~3-10 min LLM time + 30s mechanical + 30s validation + 1-2s bundling

---

## Failure Modes & Hard Stops

| Failure | Response |
|---|---|
| LLM produces wrong image slot count | Regenerate once with "you must have 3 image slots" |
| LLM rewrites copy | Regenerate once with "verbatim, character-for-character" |
| `bundle_standalone.py` broken | STOP. Fix the bundler before any further builds. |
| Image path doesn't exist on disk | Substitute with first available photo in same category, log |
| LLM picks 3 of the same primitive | Regenerate once with variance blacklist reminder |
| 5+ emails fail in a row | Pause, audit the prompt template |
| Ayoub rejects the build unit | Diagnose the rejection, fix the prompt, rebuild that unit only |

**Hard stops:**
- Bundler broken → stop everything, fix first
- Primitives.jsx has bugs → fix primitives first
- 5+ consecutive failures → pause and diagnose
- Ayoub rejection → fix and rebuild that unit, do not advance

---

## What's NOT in This Plan (intentionally dropped)

1. ❌ 950-component index — doesn't exist on disk
2. ❌ 3-sub-agent architecture — overkill for 14 primitives
3. ❌ 3 separate JSON schemas (A, B, C) — collapsed to 1 evolving blueprint
4. ❌ 29-image repository with lifestyle/flatlays/badges/avatars — we have 28 photos
5. ❌ 600px Tailwind width — we use 420px mobile-first
6. ❌ AST brand compliance audit — primitives enforce brand
7. ❌ Aspect ratio verification — `FramedImage` / `ImgFrame` handle this
8. ❌ Multi-directory staging pipeline — 1 per-flow folder is enough
9. ❌ Batching multiple flows into one scp — one flow at a time per your instruction
10. ❌ Treating variant files (gf/l1/l2/l3) as the same email — they're 4 separate flows

---

## Decisions (resolved before Phase 0)

0. **Variant rule (the foundational decision).** Ayoub's instruction: "4 layers + general fallback = GF. Each one is separate flow. 4 flows + 1 flow times however many emails per flow based on copy. This applies to all." Meaning: a `.md` file ending in `-gf`, `-l1`, `-l2`, or `-l3` is a DIFFERENT audience with DIFFERENT copy, voice, and structural intent. Each becomes its own build unit with its own folder, its own `content.js`, its own `emails.jsx`, its own `app.jsx`, its own standalone HTML. Never treat variants as the same email with copy swapped. This produces 35 build units from 125 copy files.

1. **`bundle_standalone.py`** — does not exist on disk. **Built in Phase 0.** ~100 lines of Python that inlines the 5 shared files + the 3 per-flow files + all 28 images (as base64 data URIs) + CDN scripts into a single self-contained HTML. Output: ~3MB per build unit.
2. **LLM model** — me (MiniMax-M3). One LLM call per email, sequential. No sub-agents (the variance blacklist requires sequential context within a build unit). All 125 calls happen in this session.
3. **`Local.html` relative paths** — the new variant folders (welcome-gf-flow, welcome-l1-flow, etc.) are siblings of `welcome-flow/` inside `BKCO - EMAIL MARKETING/`. From any new folder, `../welcome-flow/primitives.jsx` and `../autistic-welcome/variants/tokens.js` are correct relative paths. **No restructuring needed.**
4. **Variance history scope** — the blacklist (`history[-1].components`) is per-build-unit, not global. When we move from welcome-gf to welcome-l1, the history resets. Different audience, different flow, no variance relationship between them.
5. **No "what is built" reverence** — Ayoub's instruction: "fuck what ever is built. only focus on copy files." The 10 existing welcome-flow emails are reference patterns for structure, not deliverables. All 125 copy files produce fresh builds. Existing emails get treated as visual reference for the primitives and as a smoke-test target for the bundler, nothing more.
6. **No flow batching, no grouping** — Ayoub's instruction: "no batching dude no groupin, no cuttin corners one flow at a time. the first flow requires review once approved we will go on and you must scp to cachy." Each build unit is one scp, one review, one approval. After approval, the next build unit starts.

---

## Definition of Done (for the whole 125)

- `progress.json` shows 35 / 35 build units completed
- 35 standalone HTML files in `raw/` (one per build unit)
- All 35 scp'd to `ayoub@100.76.121.113:/home/ayoub/Documents/`
- Ayoub has reviewed and approved each one before the next is built

---

# ═══════════════════════════════════════════════════════════════════════════════
# FULL WORKFLOW BREAKDOWN — ASCII
# ═══════════════════════════════════════════════════════════════════════════════

```
═══════════════════════════════════════════════════════════════════════════════
 BKC EMAIL BUILD — 125 EMAILS × 35 BUILD UNITS × 1 LLM CALL EACH
═══════════════════════════════════════════════════════════════════════════════

 THE HIGH-LEVEL MAP
 ══════════════════

 ┌─────────────────────────────────────────────────────────────────────────┐
 │ INPUTS                                                                 │
 ├─────────────────────────────────────────────────────────────────────────┤
 │  • 125 .md copy files  in  /outputs/copy/<flow>/                      │
 │  • 14 primitives       in  welcome-flow/primitives.jsx                 │
 │  • 3 product variants  in  welcome-flow/product-showcase.jsx           │
 │  • 5 shared files      (tokens, canvas, primitives, showcase, illu)   │
 │  • 28 product photos   in  raw/product-photos/{4 categories}          │
 │  • Brand rules         in  _TEMPLATE/README.md                         │
 └─────────────────────────────────────────────────────────────────────────┘
                                  │
                                  ▼
 ┌─────────────────────────────────────────────────────────────────────────┐
 │ PHASE 0  ·  ONE-TIME SETUP  (~45 min, no LLM)                          │
 ├─────────────────────────────────────────────────────────────────────────┤
 │  0.1  Freeze the 5 shared files  (read-only from here on)              │
 │  0.2  Build  build_manifest.json  (35 build units, 125 emails)         │
 │  0.3  Build  bundle_standalone.py  (NEW — inlines everything)          │
 │  0.4  Initialize  progress.json  (all 35 units = pending)             │
 │  0.5  Smoke test: bundle welcome-flow/'s 10 emails, render-check OK  │
 └─────────────────────────────────────────────────────────────────────────┘
                                  │
                                  ▼
 ┌─────────────────────────────────────────────────────────────────────────┐
 │ PHASE 1  ·  PER-FLOW LOOP  (35 iterations, 1 flow at a time)           │
 ├─────────────────────────────────────────────────────────────────────────┤
 │  For each of the 35 build units (in the order Ayoub approves):         │
 │                                                                         │
 │   ┌─────────────────────────────────────────────────────────────────┐ │
 │   │ 1.1  Pick next build unit from build_manifest.json              │ │
 │   │ 1.2  Mark  in_progress  in progress.json                       │ │
 │   │ 1.3  For EACH email in the build unit (1 to 8 emails):          │ │
 │   │                                                                   │ │
 │   │      ┌───────────────────────────────────────────────────────┐  │ │
 │   │      │  PHASE 2  ·  ARCHITECT  (1 LLM call per email)        │  │ │
 │   │      ├───────────────────────────────────────────────────────┤  │ │
 │   │      │  LLM reads:                                            │  │ │
 │   │      │    • copy.md (verbatim source)                         │  │ │
 │   │      │    • 14 primitives catalog                             │  │ │
 │   │      │    • 3 product variants catalog                        │  │ │
 │   │      │    • previous email's component list (blacklist)       │  │ │
 │   │      │    • brand rules block                                 │  │ │
 │   │      │                                                        │  │ │
 │   │      │  LLM outputs:                                          │  │ │
 │   │      │    • JSON blueprint with 5-9 primitive picks           │  │ │
 │   │      │    • 3-4 image slots (deficit/surplus fallback)        │  │ │
 │   │      │    • variance-check applied                            │  │ │
 │   │      │    • inline guarantee seal flagged                     │  │ │
 │   │      │                                                        │  │ │
 │   │      │  Validation script (no LLM):                           │  │ │
 │   │      │    • JSON parses                                       │  │ │
 │   │      │    • 7 ≤ components ≤ 12                               │  │ │
 │   │      │    • 3 ≤ image slots ≤ 4                               │  │ │
 │   │      │    • ≥1 hard shadow, ≥1 PartBadge                      │  │ │
 │   │      │    • no em dash, no --, no $ in copy fields            │  │ │
 │   │      │    • signoff/closing word rules satisfied              │  │ │
 │   │      │                                                        │  │ │
 │   │      │  Save:  blueprints/<unit>/<email_id>_blueprint.json    │  │ │
 │   │      └───────────────────────────────────────────────────────┘  │ │
 │   │                              │                                   │ │
 │   │                              ▼                                   │ │
 │   │      ┌───────────────────────────────────────────────────────┐  │ │
 │   │      │  PHASE 3  ·  ART DIRECTION  (LLM picks 28 photos)      │  │ │
 │   │      ├───────────────────────────────────────────────────────┤  │ │
 │   │      │  LLM gets:                                              │  │ │
 │   │      │    • image_slots_detail from blueprint                  │  │ │
 │   │      │    • 28-photo manifest (lifestyle/flat-lay/etc)         │  │ │
 │   │      │    • copy file (for narrative intent)                   │  │ │
 │   │      │                                                        │  │ │
 │   │      │  LLM assigns:                                           │  │ │
 │   │      │    • hero_image → lifestyle or flat-lay                 │  │ │
 │   │      │    • body_product → flat-lay only (name-token match)    │  │ │
 │   │      │    • body_inline_breaker → lifestyle or accessories     │  │ │
 │   │      │    • signoff → black-placeholder.png (no Lena yet)     │  │ │
 │   │      │                                                        │  │ │
 │   │      │  Rules:                                                │  │ │
 │   │      │    • no duplicate paths in same email                   │  │ │
 │   │      │    • variance: don't repeat last 2 emails' photos       │  │ │
 │   │      │    • all paths must exist on disk                       │  │ │
 │   │      │                                                        │  │ │
 │   │      │  Save:  blueprints/<unit>/<email_id>_blueprint_FILLED  │  │ │
 │   │      └───────────────────────────────────────────────────────┘  │ │
 │   │                              │                                   │ │
 │   │                              ▼                                   │ │
 │   │      ┌───────────────────────────────────────────────────────┐  │ │
 │   │      │  PHASE 4  ·  COMPILER  (1 LLM call writes 3 files)     │  │ │
 │   │      ├───────────────────────────────────────────────────────┤  │ │
 │   │      │  LLM gets:                                              │  │ │
 │   │      │    • filled blueprint                                  │  │ │
 │   │      │    • copy.md (verbatim)                                 │  │ │
 │   │      │    • 14 primitive signatures (props + usage)           │  │ │
 │   │      │    • 5-file load order                                 │  │ │
 │   │      │    • brand rules                                       │  │ │
 │   │      │                                                        │  │ │
 │   │      │  LLM writes 3 files:                                   │  │ │
 │   │      │    • content.js    — window.FLOW_<KEY>.e<N> = { ... }  │  │ │
 │   │      │    • emails.jsx    — const Email1 = () => { ... }      │  │ │
 │   │      │    • app.jsx       — <DesignCanvas> + <DCArtboard>×N  │  │ │
 │   │      │                                                        │  │ │
 │   │      │  12 compilation rules:                                 │  │ │
 │   │      │    1.  primitive order = blueprint position order      │  │ │
 │   │      │    2.  all copy via c.someField, no inline strings     │  │ │
 │   │      │    3.  all src = blueprint image_path                  │  │ │
 │   │      │    4.  every <img> has alt=                            │  │ │
 │   │      │    5.  60-day seal = inline JSX (email-6.jsx pattern)  │  │ │
 │   │      │    6.  NO <html>, <body>, <head> tags                  │  │ │
 │   │      │    7.  NO import statements                            │  │ │
 │   │      │    8.  NO export default                               │  │ │
 │   │      │    9.  NO <> Fragment, use <div>                       │  │ │
 │   │      │   10.  boxShadow: "4px 4px 0 #1F2D2F" (or 3px, 6px)    │  │ │
 │   │      │   11.  border: "2px solid #1F2D2F" on every card       │  │ │
 │   │      │   12.  style={{}} uses camelCase                       │  │ │
 │   │      │                                                        │  │ │
 │   │      │  Mechanical (no LLM):                                  │  │ │
 │   │      │    • write the 3 files to <flow-folder>/                │  │ │
 │   │      │    • run cross-file sanity check                       │  │ │
 │   │      │    • generate <Flow> Local.html from template          │  │ │
 │   │      └───────────────────────────────────────────────────────┘  │ │
 │   │                              │                                   │ │
 │   │                              ▼                                   │ │
 │   │      ┌───────────────────────────────────────────────────────┐  │ │
 │   │      │  PHASE 5  ·  BUNDLE + RENDER + SHIP  (no LLM)          │  │ │
 │   │      ├───────────────────────────────────────────────────────┤  │ │
 │   │      │  5.1  Bundle:                                          │  │ │
 │   │      │       python3 tools/bundle_standalone.py \              │  │ │
 │   │      │         "<Flow> Local.html" "<Flow> _standalone_.html" │  │ │
 │   │      │                                                        │  │ │
 │   │      │  5.2  Headless render check (chromium):                │  │ │
 │   │      │       • mount completes (5-10s wait)                   │  │ │
 │   │      │       • <DCArtboard> count == email count              │  │ │
 │   │      │       • zero console errors                            │  │ │
 │   │      │       • all <img> resolve (no 404)                     │  │ │
 │   │      │                                                        │  │ │
 │   │      │  5.3  Update progress.json:                            │  │ │
 │   │      │       • build_unit = completed                         │  │ │
 │   │      │       • append to history[] (variance source)          │  │ │
 │   │      │                                                        │  │ │
 │   │      │  5.4  scp to cachy:                                    │  │ │
 │   │      │       scp "<Flow> _standalone_.html" \                  │  │ │
 │   │      │         ayoub@100.76.121.113:/home/ayoub/Documents/    │  │ │
 │   │      │                                                        │  │ │
 │   │      │  5.5  ╔══════════════════════════════════════════╗     │  │ │
 │   │      │       ║  STOP.  WAIT FOR AYBOB'S REVIEW.        ║     │  │ │
 │   │      │       ║  DO NOT START THE NEXT BUILD UNIT.     ║     │  │ │
 │   │      │       ╚══════════════════════════════════════════╝     │  │ │
 │   │      └───────────────────────────────────────────────────────┘  │ │
 │   └─────────────────────────────────────────────────────────────────┘ │
 │                                                                         │
 └─────────────────────────────────────────────────────────────────────────┘
                                  │
                                  ▼
 ┌─────────────────────────────────────────────────────────────────────────┐
 │ PHASE 6  ·  AFTER AYBOB APPROVAL  (loop 34 more times)                 │
 ├─────────────────────────────────────────────────────────────────────────┤
 │  Repeat Phase 1 for the next build unit in the order:                  │
 │                                                                         │
 │    1.  welcome-gf-flow         (8 emails)  ← FIRST BUILD               │
 │    2.  cart-flow               (3)                                     │
 │    3.  browse-flow             (3)                                     │
 │    4.  checkout-flow           (2)                                     │
 │    5.  faq-flow                (6)                                     │
 │    6.  pp-education-flow       (4)                                     │
 │    7.  pp-mid-checkin-flow     (3)                                     │
 │    8.  pp-at-risk-flow         (4)                                     │
 │    9.  pp-extended-upsell-flow (3)                                     │
 │   10.  pp-direct-upsell-flow   (2)                                     │
 │   11.  pp-level-detection-flow (2)                                     │
 │   12.  pp-mary-story-flow      (1)                                     │
 │   13.  replenish-a-flow        (3)                                     │
 │   14.  replenish-b-flow        (2)                                     │
 │   15.  replenish-c-flow        (2)                                     │
 │   16.  review-request-flow     (2)                                     │
 │   17.  site-abandonment-flow   (1)                                     │
 │   18.  sunset-flow             (2)                                     │
 │   19.  transactional-flow      (4)                                     │
 │   20.  welcome-l1-flow         (8)                                     │
 │   21.  welcome-l2-flow         (8)                                     │
 │   22.  welcome-l3-flow         (8)                                     │
 │   23.  pp-extended-ed-gf-flow  (5)                                     │
 │   24.  pp-extended-ed-l1-flow  (5)                                     │
 │   25.  pp-extended-ed-l2-flow  (5)                                     │
 │   26.  pp-extended-ed-l3-flow  (5)                                     │
 │   27.  winback-a-gf-flow       (3)                                     │
 │   28.  winback-a-l1-flow       (3)                                     │
 │   29.  winback-a-l2-flow       (3)                                     │
 │   30.  winback-a-l3-flow       (3)                                     │
 │   31.  winback-b-gf-flow       (3)                                     │
 │   32.  winback-b-l1-flow       (3)                                     │
 │   33.  winback-b-l2-flow       (3)                                     │
 │   34.  winback-b-l3-flow       (3)                                     │
 │   35.  ── final state check ──                                       │
 │                                                                         │
 └─────────────────────────────────────────────────────────────────────────┘
                                  │
                                  ▼
 ┌─────────────────────────────────────────────────────────────────────────┐
 │ DONE  ·  35/35 BUILD UNITS, 125/125 EMAILS, 35 STANDALONE HTMLS        │
 ├─────────────────────────────────────────────────────────────────────────┤
 │  progress.json:  35 completed, 0 failed                                 │
 │  raw/*.html:     35 files, each ~3MB, each scp'd to cachy              │
 │  Ayoub has reviewed and approved each one in order                      │
 └─────────────────────────────────────────────────────────────────────────┘
```

---

**THE PER-EMAIL DATA FLOW (the part that actually creates one email):**

```
┌──────────────────────────────────────────────────────────────────────────┐
│  INPUTS INTO 1 LLM CALL                                                 │
├──────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│   outputs/copy/welcome/welcome-01-e1-gf.md  ──────┐                     │
│   (verbatim copy, 5-30KB)                          │                     │
│                                                    │                     │
│   Inline prompt:                                   │                     │
│     • 14 primitives catalog  ──────────────────────┤                     │
│     • 3 product variants catalog  ────────────────┤                     │
│     • previous email's component list  ───────────┤                     │
│     • brand rules block  ─────────────────────────┤                     │
│                                                    ▼                     │
│                                           ┌────────────────┐            │
│                                           │  LLM CALL      │            │
│                                           │  (1 call/email)│            │
│                                           └────────┬───────┘            │
│                                                    │                     │
│                                                    ▼                     │
│   blueprints/welcome-gf-flow/welcome-01-e1-gf_blueprint.json            │
│   {                                                                       │
│     "email_id": "welcome-01-e1-gf",                                      │
│     "total_image_slots": 3,                                              │
│     "components": [                                                      │
│       { "position": 1,  "primitive": "EmailShell",   "props": {...} },   │
│       { "position": 2,  "primitive": "Header",      "props": {...} },   │
│       { "position": 3,  "primitive": "FramedImage", "props": {...},     │
│         "image_path": "lifestyle/toddler-livingroom-dino-yellow.png" }, │
│       { "position": 4,  "primitive": "TitleBlock",  "props": {...} },   │
│       { "position": 5,  "primitive": "Band",        "props": {...} },   │
│       { "position": 6,  "primitive": "Letter",      "props": {...} },   │
│       { "position": 7,  "primitive": "H2",          "props": {...} },   │
│       { "position": 8,  "primitive": "FramedImage", "props": {...},     │
│         "image_path": "flat-lay/training-pant-fox-red-white.jpg" },     │
│       { "position": 9,  "primitive": "CTAClose",    "props": {...} },   │
│       { "position": 10, "primitive": "Signoff",     "props": {...} },   │
│       { "position": 11, "primitive": "Footer",      "props": {...} }    │
│     ],                                                                    │
│     "image_slots_detail": [                                              │
│       { "component_position": 3,  "image_path": "lifestyle/..." },      │
│       { "component_position": 8,  "image_path": "flat-lay/..." }        │
│     ],                                                                    │
│     "validation": {                                                       │
│       "section_count": 11,                                                │
│       "image_slot_total": 3,                                             │
│       "contains_hard_shadow": true,                                      │
│       "contains_tilted_sticker": true,                                   │
│       "uses_band_for_transition": true,                                  │
│       "signoff_rule_satisfied": true,                                    │
│       "closing_word_rule_satisfied": true,                               │
│       "no_em_dash_in_copy_fields": true,                                 │
│       "no_dollar_in_copy_fields": true                                   │
│     }                                                                    │
│   }                                                                       │
│                                                                            │
└──────────────────────────────────────────────────────────────────────────┘
                                  │
                                  ▼
┌──────────────────────────────────────────────────────────────────────────┐
│  PER-BUILD-UNIT FILES  (welcome-gf-flow has 8 emails → 1 set of files)  │
├──────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│   raw/BKCO - EMAIL MARKETING/welcome-gf-flow/                           │
│   ├── content.js          ← ALL 8 emails' copy data                    │
│   │     window.FLOW_WELCOME_GF = {                                       │
│   │       e1: { preheader, heroBadge, h1a, h1b, ... },                 │
│   │       e2: { ... },                                                   │
│   │       ... e8                                                         │
│   │     }                                                                 │
│   │                                                                       │
│   ├── emails.jsx          ← ALL 8 email components                       │
│   │     const Email1 = () => { const c = window.FLOW_WELCOME_GF.e1; ...}│
│   │     const Email2 = () => { const c = window.FLOW_WELCOME_GF.e2; ...}│
│   │     ...                                                               │
│   │     const Email8 = () => { const c = window.FLOW_WELCOME_GF.e8; ...}│
│   │                                                                       │
│   ├── app.jsx             ← 8 artboards in DesignCanvas                  │
│   │     <DCArtboard id="e1"><Email1 /></DCArtboard>                     │
│   │     <DCArtboard id="e2"><Email2 /></DCArtboard>                     │
│   │     ...                                                               │
│   │                                                                       │
│   └── Welcome GF Local.html  ← loader with 8 <script> tags              │
│         tokens → content → canvas → primitives → showcase → illu        │
│         → emails.jsx → app.jsx                                          │
│                                                                          │
└──────────────────────────────────────────────────────────────────────────┘
                                  │
                                  ▼
┌──────────────────────────────────────────────────────────────────────────┐
│  BUNDLER  (bundle_standalone.py — built in Phase 0)                     │
├──────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│   Input:  raw/BKCO - EMAIL MARKETING/welcome-gf-flow/Welcome GF Local.html
│                                                                          │
│   Process:                                                                │
│     1. Read all 5 shared files (tokens, canvas, primitives, showcase,   │
│        illustrations) — they total ~50KB raw                             │
│     2. Read 3 per-flow files (content.js, emails.jsx, app.jsx) — ~10KB  │
│     3. Read 28 product photos — convert each to base64 data URI          │
│        (~500KB each, total ~14MB as data URIs)                           │
│     4. Inline ALL of the above into one HTML file with:                 │
│        - CDN scripts for React, ReactDOM, Babel-standalone              │
│        - All shared primitives as <script> blocks                       │
│        - All per-flow content/emails/app as <script> blocks             │
│        - All images as data: URIs in src="" attributes                  │
│     5. Write to: raw/Welcome GF _standalone_.html                      │
│                                                                          │
│   Output:  raw/Welcome GF _standalone_.html  (~3MB)                     │
│                                                                          │
└──────────────────────────────────────────────────────────────────────────┘
                                  │
                                  ▼
┌──────────────────────────────────────────────────────────────────────────┐
│  RENDER CHECK  (headless chromium)                                      │
├──────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│   chromium --headless --dump-dom "file:///.../Welcome GF _standalone_.html"
│                                                                          │
│   Pass criteria:                                                         │
│     [✓] Page loads, no console errors                                    │
│     [✓] 8 <DCArtboard> elements rendered                                │
│     [✓] Every <img src> resolves (no 404)                               │
│     [✓] Each Email<N> shows correct bg color sequence                   │
│     [✓] Lena signoff "BKC team" present in E1, "Lena Bauer" in E2-E8   │
│                                                                          │
│   Fail → mark in progress.json, do not scp, do not advance               │
│                                                                          │
└──────────────────────────────────────────────────────────────────────────┘
                                  │
                                  ▼
┌──────────────────────────────────────────────────────────────────────────┐
│  SHIP TO CACHY                                                           │
├──────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│   scp "raw/Welcome GF _standalone_.html" \                              │
│       ayoub@100.76.121.113:/home/ayoub/Documents/                       │
│                                                                          │
│   ╔══════════════════════════════════════════════════════════╗           │
│   ║  STOP.  WAIT FOR AYBOB TO REVIEW.                        ║           │
│   ║                                                          ║           │
│   ║  He opens the HTML in a browser at 420px viewport.        ║           │
│   ║  He checks:                                              ║           │
│   ║    - all 8 emails render                                 ║           │
│   ║    - copy is verbatim from the .md files                  ║           │
│   ║    - Lena signoff correct                                 ║           │
│   ║    - no em dashes, no $ symbols                           ║           │
│   ║    - hard shadows visible                                 ║           │
│   ║    - tilted stickers (PartBadge) visible                  ║           │
│   ║    - 420px mobile-first rendering correct                 ║           │
│   ║                                                          ║           │
│   ║  If approved → mark completed, pick next build unit.     ║           │
│   ║  If rejected → diagnose, fix, rebuild that unit only.   ║           │
│   ╚══════════════════════════════════════════════════════════╝           │
│                                                                          │
└──────────────────────────────────────────────────────────────────────────┘
```

---

**THE TIMING (per build unit):**

```
Per build unit of N emails (typical N=3, varies 1-8):
═══════════════════════════════════════════════════════════════

  Per-email (N times):
  ├─ Phase 2 (Architect)    ~2-4 min  LLM call
  ├─ Phase 3 (Art Director) ~1-2 min  LLM call (or merged with Phase 2)
  ├─ Phase 4 (Compiler)     ~2-3 min  LLM call (or merged with 2+3)
  ├─ Validation script      ~5 sec    mechanical
  └─ Sub-total per email    ~3-6 min  × N emails
  Plus:
  ├─ Phase 5 (Bundle)       ~10 sec
  ├─ Phase 5 (Render check) ~10 sec
  ├─ Phase 5 (Update prog)  ~1 sec
  ├─ Phase 5 (scp)          ~5-15 sec
  └─ TOTAL per build unit   = (3-6 min × N) + ~30 sec

  Examples:
    welcome-gf-flow  (8 emails):  24-48 min
    cart-flow        (3 emails):  9-18 min
    pp-mary-story    (1 email):   3-6 min
    faq-flow         (6 emails):  18-36 min

  All 35 build units:  ~3.5 to 7 hours total
                       (125 LLM calls, sequential)
```

---

**WHAT PHASE 0 ACTUALLY DOES (the foundation I build first):**

```
Phase 0  ·  One-time setup, 45 min
═══════════════════════════════════════════

  0.1  Freeze the 5 shared files
       ──────────────────────
       chmod -w \
         welcome-flow/primitives.jsx \
         welcome-flow/product-showcase.jsx \
         welcome-flow/design-canvas.jsx \
         autistic-welcome/variants/tokens.js \
         autistic-welcome/variants/illustrations.jsx

  0.2  Build build_manifest.json
       ─────────────────────────
       Scan /outputs/copy/ for all .md files (125 found)
       Group by flow_id, then split by variant suffix (-gf, -l1, -l2, -l3)
       Assign flow_key (WELCOME_GF, WELCOME_L1, CART, BROWSE, ...)
       Output: build_manifest.json with 35 build_units

  0.3  Build tools/bundle_standalone.py
       ─────────────────────────────────
       Python script that:
         - reads a Local.html file
         - finds all <script src="..."> and <img src="..."> tags
         - resolves each to a real file path
         - inlines each as either a <script> block (for .js/.jsx)
           or a data: URI base64 (for images)
         - writes the inlined result to the output path
       ~100 lines, no LLM

  0.4  Initialize progress.json
       ────────────────────────
       {
         "build_units": {
           "welcome-gf-flow":   { "status": "pending", "history": [] },
           "cart-flow":         { "status": "pending", "history": [] },
           ...
           "winback-b-l3-flow": { "status": "pending", "history": [] }
         },
         "summary": { "total": 35, "completed": 0, "failed": 0 }
       }

  0.5  Smoke test on the 10 existing welcome-flow emails
       ──────────────────────────────────────────────────
       cd /root/projects/brightkidco/outputs/email-design
       python3 tools/bundle_standalone.py \
         "raw/BKCO - EMAIL MARKETING/welcome-flow/Welcome Flows - 10 Emails.html" \
         "raw/welcome-flow-smoketest.html"
       chromium --headless --dump-dom "file://.../welcome-flow-smoketest.html"
       Verify: 10 artboards render, no console errors
       If fails: STOP, fix the bundler, do not advance
```

---

**WHAT BREAKS AND HOW I RECOVER:**

```
Failure mode                          Recovery
════════════════════════════════════  ════════════════════════════════
LLM produces 2 image slots            Regenerate once with "must be 3-4"
LLM rewrites copy                     Regenerate once with "verbatim, char-for-char"
LLM ignores variance blacklist        Regenerate once with explicit blacklist in prompt
LLM invents a new primitive           Regenerate with "use only these 14 primitives"
image_path doesn't exist              Substitute first available photo in same category
LLM produces invalid JSON             Regenerate once with "output valid JSON only"
bunde_standalone.py broken            STOP, fix the bundler, resume
chromium render check fails           Mark failed in progress.json, do not scp
                                      Ayoub reviews, fixes are discussed,
                                      rebuild the unit
5+ consecutive failures               Pause, audit the prompt template
```

---

**THE HANDOFF (when one build unit is done):**

```
progress.json state after welcome-gf-flow ships:
══════════════════════════════════════════════════

{
  "build_units": {
    "welcome-gf-flow": {
      "status": "completed",
      "completed_at": "2026-06-18T...",
      "shipped_to": "ayoub@100.76.121.113:/home/ayoub/Documents/Welcome GF _standalone_.html",
      "history": [
        { "email_id": "welcome-01-e1-gf", "components": ["EmailShell","Header","FramedImage",...] },
        { "email_id": "welcome-01-e2-gf", "components": ["EmailShell","Header","TitleBlock",...] },
        ...
        { "email_id": "welcome-01-e8-gf", "components": [...] }
      ]
    },
    "cart-flow": { "status": "pending", "history": [] },
    ...
  },
  "summary": { "total": 35, "completed": 1, "failed": 0 }
}

Then I stop, send Ayoub a one-line confirmation:
"welcome-gf-flow built, bundled, scp'd. 8 emails, ~3MB HTML at /home/ayoub/Documents/.
 Open in browser, review, tell me to continue or fix."
```

---

# ═══════════════════════════════════════════════════════════════════════════════
# BRAND COMPLIANCE — HOW EVERY EMAIL STAYS ON BRAND
# ═══════════════════════════════════════════════════════════════════════════════

```
═══════════════════════════════════════════════════════════════════════════════
 BRAND COMPLIANCE — HOW EVERY EMAIL STAYS ON BRAND
═══════════════════════════════════════════════════════════════════════════════

 THE CORE PRINCIPLE
 ═══════════════════

 Brand is enforced at THREE LAYERS simultaneously:

   Layer 1: THE 14 PRIMITIVES (frozen, never modified)
            ↓ every component the LLM picks is one of these 14
            ↓ the primitives HARDCODE brand colors, shadows, borders, fonts
            ↓ the LLM cannot accidentally use wrong colors

   Layer 2: THE BRAND RULES BLOCK (inline in every LLM prompt)
            ↓ the LLM is told the rules before it picks anything
            ↓ explicit allow-list of: colors, fonts, shadows, borders
            ↓ explicit deny-list of: em dashes, $, "import", Tailwind classes

   Layer 3: THE VALIDATION SCRIPT (runs after LLM emits, before save)
            ↓ mechanical check, no LLM
            ↓ catches anything the LLM violated
            ↓ hard-fail → regenerate, soft-fail → log and continue

 If all three layers pass, the email is on brand by construction.
 If any layer fails, the email is rejected before it touches disk.

═══════════════════════════════════════════════════════════════════════════════
```

```
═══════════════════════════════════════════════════════════════════════════════
 LAYER 1 — THE 14 PRIMITIVES ARE THE BRAND
═══════════════════════════════════════════════════════════════════════════════

 Every primitive in welcome-flow/primitives.jsx HARDCODES brand values.
 The LLM doesn't get to choose colors, shadows, or borders — they're baked in.

 ┌─────────────────────────────────────────────────────────────────────────┐
 │ PRIMITIVE              BRAND VALUES IT ENFORCES                         │
 ├─────────────────────────────────────────────────────────────────────────┤
 │                                                                         │
 │  EmailShell            bg = #FFFBF0  (cream warm — default)             │
 │                        maxWidth = 420  (mobile-first)                   │
 │                                                                         │
 │  Header                logo: brightkidco-logo-v2.png (the only logo)  │
 │                        padding: 24px 20px 0                            │
 │                        textAlign: center                               │
 │                                                                         │
 │  PartBadge             bg: #FFD866  (yellow, the only sticker color)   │
 │                        border: 2px solid #1F2D2F (ink)                │
 │                        transform: rotate(-1.5deg)  (always tilted)     │
 │                        fontSize: 10.5, letterSpacing: 1.5             │
 │                        borderRadius: 999  (pill shape)                 │
 │                                                                         │
 │  TitleBlock            h1 fontSize: 40, fontWeight: 700                │
 │                        letterSpacing: -0.8                             │
 │                        part2 gets B.gradientText (teal→green)         │
 │                        PartBadge hardcoded inside                       │
 │                                                                         │
 │  Letter                fontSize: 15, lineHeight: 1.7                   │
 │                        color: B.soft  (the only body text color)        │
 │                        bg parameter from approved palette               │
 │                                                                         │
 │  Band                  height: 40 (default)                            │
 │                        gradient between two approved bgs                │
 │                                                                         │
 │  FramedImage           border: 2px solid #1F2D2F  (always ink border)  │
 │                        boxShadow: 3/4/6px 3/4/6px 0 #1F2D2F  (hard)   │
 │                        borderRadius: 20                                │
 │                                                                         │
 │  ImgFrame              border: 2px dashed #2BAEB4  (teal, dashed)      │
 │                        bg: #FFFFFF                                     │
 │                                                                         │
 │  CTAClose              bg: #1F2D2F  (ink, the only dark CTA bg)       │
 │                        text color: #FFFFFF                             │
 │                        arrow → always appended                          │
 │                                                                         │
 │  Signoff               signature in Caveat font (handwritten Lena)     │
 │                        avatar: black-placeholder.png until Lena photo  │
 │                                                                         │
 │  Eyebrow               fontSize: 10.5, letterSpacing: 2                │
 │                        textTransform: uppercase                        │
 │                        color: B.tealDeep (default)                      │
 │                                                                         │
 │  H2                    fontSize: 28 (default), fontWeight: 700         │
 │                        letterSpacing: -0.4                             │
 │                        gradient span on accent word                    │
 │                                                                         │
 │  Footer                dark text, small font, legal links               │
 │                                                                         │
 │  OutLine               2px solid border (default)                       │
 │                                                                         │
 └─────────────────────────────────────────────────────────────────────────┘

 THE KEY INSIGHT: the LLM cannot produce an off-brand email
 by picking one of these 14 components, because the component
 itself IS the brand. The LLM only chooses WHICH component
 goes WHERE. The styling is locked in the primitive's source.

═══════════════════════════════════════════════════════════════════════════════
```

```
═══════════════════════════════════════════════════════════════════════════════
 LAYER 2 — THE BRAND RULES BLOCK (inline in every LLM prompt)
═══════════════════════════════════════════════════════════════════════════════

 Before the LLM picks any components, it sees THIS block in its prompt:

 ┌─────────────────────────────────────────────────────────────────────────┐
 │ # BRAND RULES — non-negotiable, every email must satisfy all of these  │
 ├─────────────────────────────────────────────────────────────────────────┤
 │                                                                         │
 │  ## COPY                                                                │
 │  - Copy is VERBATIM from the .md file. Character-for-character.        │
 │    Do not rewrite, shorten, paraphrase, fix typos, or change wording.  │
 │  - No em dashes (—) anywhere. Use commas, periods, or line breaks.    │
 │  - No double hyphens (--) anywhere. Use commas, periods, line breaks.  │
 │  - Use € (euro sign) for prices, never $.                              │
 │  - Every CTA button text ends with " →" (arrow).                       │
 │                                                                         │
 │  ## SIGN-OFF RULES (derived from email Position)                        │
 │  - E1 (Day 0):  signoff name = "BKC team"                              │
 │  - E2 and later: signoff name = "Lena Bauer"                           │
 │  - Closing word:                                                       │
 │    E1-E2: "Talk soon"                                                  │
 │    E3-E5: "With understanding"                                         │
 │    E6 and later: "With care"                                           │
 │                                                                         │
 │  ## STRUCTURE                                                           │
 │  - Total components per email: 7 to 12 (target 9-11)                  │
 │  - Image slots: EXACTLY 3 or 4. Counted per the slot table below.     │
 │  - At least ONE component with a hard shadow (FramedImage shadow≥3)    │
 │  - At least ONE PartBadge (stickered title or inline sticker)         │
 │  - Width: 420px mobile-first. Do not exceed 420px content width.      │
 │                                                                         │
 │  ## COLORS — USE ONLY THESE                                            │
 │  Allowed background colors:                                            │
 │    #FFFBF0  (cream warm — default)                                     │
 │    #FFF6E2  (yellow warm)                                              │
 │    #EAF6F2  (teal pale — guarantee section)                            │
 │    #F0EDF8  (lavender pale — product section)                          │
 │    #FFFFFF  (white)                                                    │
 │    #FFD866  (yellow — PartBadge bg ONLY, never as section bg)         │
 │    transparent  (default for most text blocks)                         │
 │  Brand tokens (always referenced as B.teal, B.ink, B.cream, etc.):    │
 │    B.teal = #2BAEB4                                                    │
 │    B.green = #5DD07A                                                   │
 │    B.ink = #1F2D2F                                                     │
 │    B.cream = #FBF7F1                                                   │
 │    B.lime = #D8F57C                                                    │
 │    B.yellow = #FFD866                                                  │
 │  NEVER use: random hex colors, Tailwind bg-[#xxx], CSS named colors.   │
 │                                                                         │
 │  ## SHADOWS                                                             │
 │  Hard shadows only, exactly these three sizes:                         │
 │    boxShadow: "3px 3px 0 #1F2D2F"                                      │
 │    boxShadow: "4px 4px 0 #1F2D2F"                                      │
 │    boxShadow: "6px 6px 0 #1F2D2F"                                      │
 │  NEVER: blur, rgba(), drop-shadow, soft shadows, glow effects.          │
 │                                                                         │
 │  ## BORDERS                                                             │
 │  All cards, images, badges:  border: "2px solid #1F2D2F"              │
 │  ImgFrame (placeholder):    border: "2px dashed #2BAEB4"               │
 │  NEVER: 1px borders, no border, colored borders, double borders.       │
 │                                                                         │
 │  ## FONTS (use the F.* tokens, never raw font names)                   │
 │  F.main = Questrial (body)                                              │
 │  F.display = Fraunces (headings)                                       │
 │  F.hand = Caveat (Lena's signature)                                    │
 │  NEVER: Arial, Helvetica, system-ui, sans-serif, custom fonts.         │
 │                                                                         │
 │  ## FORBIDDEN IN JSX OUTPUT                                             │
 │  - <html>, <body>, <head> tags                                         │
 │  - import statements (primitives come from window.*)                    │
 │  - export default (consumed by app.jsx, not exported)                  │
 │  - <></> Fragments (use a single <div> wrapper if needed)              │
 │  - Tailwind class names (use inline style={{}})                        │
 │  - className with raw CSS classes (use style={{}})                     │
 │  - em dash, double hyphen, dollar sign in any string value             │
 │                                                                         │
 │  ## IMAGE SLOT TABLE (counts toward 3-4 quota)                          │
 │    FramedImage with <img> child     = 1 slot                           │
 │    FramedImage with ImgFrame place. = 1 slot                           │
 │    ImgFrame (standalone)            = 1 slot                           │
 │    ProductShowcaseFull              = 2 slots                          │
 │    ProductShowcaseMedium            = 1 slot                           │
 │    ProductShowcaseSoft              = 0 slots                          │
 │    All other primitives             = 0 slots                          │
 │    Inline circular seal             = 0 slots (SVG, not photo)         │
 │                                                                         │
 │  ## VARIANCE BLACKLIST                                                  │
 │  - Do NOT use any primitive in the previous email's component list     │
 │    (except bookends: EmailShell, Header, Footer, Band)                  │
 │  - If forced to violate variance for structural reasons, log           │
 │    variance_bypass in the blueprint metadata                          │
 │                                                                         │
 └─────────────────────────────────────────────────────────────────────────┘

 WHY THIS WORKS: the LLM has to satisfy 30+ explicit rules before
 it can produce a JSON output. The validation script (Layer 3) then
 re-checks every rule mechanically. Two layers of enforcement.

═══════════════════════════════════════════════════════════════════════════════
```

```
═══════════════════════════════════════════════════════════════════════════════
 LAYER 3 — THE VALIDATION SCRIPT (runs after LLM emits, before save)
═══════════════════════════════════════════════════════════════════════════════

 After the LLM produces the JSON blueprint, a Python script checks:

 ┌─────────────────────────────────────────────────────────────────────────┐
 │  CHECK                              HOW                FAIL ACTION     │
 ├─────────────────────────────────────────────────────────────────────────┤
 │                                                                         │
 │  1. JSON parses                    json.loads()         regenerate     │
 │                                                                         │
 │  2. email_id matches the           string compare       regenerate     │
 │     active .md file name                                              │
 │                                                                         │
 │  3. 7 ≤ len(components) ≤ 12       count                regenerate     │
 │     (we want depth, not 3 sections)                                   │
 │                                                                         │
 │  4. 3 ≤ total_image_slots ≤ 4      sum of image_slots   regenerate     │
 │                                                                         │
 │  5. At least 1 FramedImage         filter primitive     regenerate     │
 │     with shadow ≥ 3                == FramedImage                       │
 │                                    AND props.shadow                     │
 │                                    in [3,4,6]                           │
 │                                                                         │
 │  6. At least 1 PartBadge usage     grep for PartBadge    regenerate     │
 │     (typically in TitleBlock)      in components                        │
 │                                                                         │
 │  7. No "—" in any props.* string   grep "—" content.js   regenerate     │
 │                                                                         │
 │  8. No "--" in any props.* string  grep "--" content.js  regenerate     │
 │                                                                         │
 │  9. No "$" in any props.* string   grep "\\$" content.js regenerate     │
 │                                                                         │
 │  10. Every props.bg in approved     check against        regenerate     │
 │      palette or "transparent"      whitelist                            │
 │                                                                         │
 │  11. Every image_path ends in       check extension      log, continue  │
 │      .png or .jpg                                                    │
 │                                                                         │
 │  12. Every image_path exists        os.path.exists()     substitute,   │
 │      on disk under product-photos/                    log, continue   │
 │                                                                         │
 │  13. No duplicate image_path       set check             regenerate     │
 │      within the same email                                             │
 │                                                                         │
 │  14. Signoff name matches E1 rule   derive from position  regenerate     │
 │     "BKC team" for E1, else "Lena                                     │
 │     Bauer"                                                            │
 │                                                                         │
 │  15. Closing word matches E1-E2     derive from position  regenerate     │
 │     "Talk soon", E3-E5 "With                                         │
 │     understanding", E6+ "With care"                                   │
 │                                                                         │
 │  16. No variance violation         check blacklist       log bypass,   │
 │     (bookends exempt)                              continue           │
 │                                                                         │
 │  17. Every c.<field> reference      cross-file check     regenerate     │
 │     in emails.jsx exists in                                          │
 │     content.js                                                       │
 │                                                                         │
 │  18. Every <img> has alt=""         grep emails.jsx       regenerate     │
 │     populated                                                        │
 │                                                                         │
 │  19. emails.jsx parses with         subprocess.run        regenerate     │
 │     Babel-standalone                babel-cli                            │
 │                                                                         │
 │  20. Number of <DCArtboard> in     count tags            regenerate     │
 │     app.jsx == len(emails.jsx                                        │
 │     Email<N> consts)                                                 │
 │                                                                         │
 │  21. chromium render check:         headless dump-dom     mark failed   │
 │     - 0 console errors                                                │
 │     - all <img> resolve (no 404)                                      │
 │     - all Email<N> components mounted                                  │
 │     - bg colors match blueprint sequence                              │
 │                                                                         │
 │  If checks 1-20 fail:  regenerate ONCE with the error message          │
 │                        injected into the LLM prompt.                    │
 │                        If second attempt fails: mark email as          │
 │                        "failed" in progress.json, continue to next.   │
 │                                                                         │
 │  If check 21 fails:    bundle is broken, do NOT scp.                   │
 │                        Diagnose, fix, re-bundle, re-check.            │
 │                                                                         │
 └─────────────────────────────────────────────────────────────────────────┘

 THE 3-TIER ENFORCEMENT
 ══════════════════════

   Tier 1 (Layer 1 in primitives): HARD enforcement
   └─ The LLM cannot pick a color that's not in a primitive
      because the primitive's color is hardcoded in its source.
      The LLM only sets bg via props from a 7-value whitelist.

   Tier 2 (Layer 2 in prompt): SOFT enforcement
   └─ The LLM reads the rules and is asked to follow them.
      A misbehaving LLM could violate these — that's why
      Tier 3 exists.

   Tier 3 (Layer 3 validator): MECHANICAL enforcement
   └─ The script doesn't care what the LLM intended.
      It grep's, counts, and pattern-matches the output.
      No LLM in this loop = no hallucination possible.

═══════════════════════════════════════════════════════════════════════════════
```

```
═══════════════════════════════════════════════════════════════════════════════
 WHAT EACH BRAND ATTRIBUTE IS ENFORCED BY
═══════════════════════════════════════════════════════════════════════════════

 ┌─────────────────────────────────────────────────────────────────────────┐
 │ BRAND ATTRIBUTE         │ ENFORCED BY         │ HOW                    │
 ├─────────────────────────┼─────────────────────┼────────────────────────┤
 │ 420px mobile width      │ Primitive (hard)    │ EmailShell maxWidth    │
 │                         │                     │ = 420 constant         │
 ├─────────────────────────┼─────────────────────┼────────────────────────┤
 │ 2px solid #1F2D2F       │ Primitive (hard)    │ FramedImage, PartBadge,│
 │ borders on cards        │                     │ all cards hardcode     │
 ├─────────────────────────┼─────────────────────┼────────────────────────┤
 │ Hard shadows (3/4/6px)  │ Primitive (hard)    │ FramedImage boxShadow  │
 │                         │                     │ uses ${X}px ${X}px 0   │
 │                         │                     │ B.ink                  │
 ├─────────────────────────┼─────────────────────┼────────────────────────┤
 │ Brand color tokens      │ Both                │ Primitive hardcodes    │
 │ (B.teal, B.ink, etc.)   │                     │ default colors; LLM    │
 │                         │                     │ bg props come from     │
 │                         │                     │ 7-value whitelist      │
 ├─────────────────────────┼─────────────────────┼────────────────────────┤
 │ Approved bg palette      │ Prompt + Validator  │ Prompt lists 7 bgs;    │
 │ (#FFFBF0, #FFF6E2, etc)│                     │ Validator checks       │
 │                         │                     │ every props.bg in list │
 ├─────────────────────────┼─────────────────────┼────────────────────────┤
 │ Fonts (Fraunces,        │ Primitive (hard)    │ TitleBlock, H2, Body  │
 │ Questrial, Caveat)      │                     │ use F.main, F.display, │
 │                         │                     │ F.hand tokens          │
 ├─────────────────────────┼─────────────────────┼────────────────────────┤
 │ No em dashes, no $      │ Prompt + Validator  │ Prompt: explicit ban;  │
 │                         │                     │ Validator: grep fails  │
 ├─────────────────────────┼─────────────────────┼────────────────────────┤
 │ Lena signoff rules       │ Prompt + Validator  │ Prompt: rules per      │
 │ (BKC team / Lena Bauer) │                     │ Position; Validator:   │
 │                         │                     │ checks derived from    │
 │                         │                     │ metadata.position      │
 ├─────────────────────────┼─────────────────────┼────────────────────────┤
 │ Closing word rules      │ Prompt + Validator  │ Same as signoff        │
 │ (Talk soon / With       │                     │                         │
 │ understanding / With    │                     │                         │
 │ care)                   │                     │                         │
 ├─────────────────────────┼─────────────────────┼────────────────────────┤
 │ PartBadge rotation      │ Primitive (hard)    │ transform:             │
 │ -1.5deg, yellow bg      │                     │ rotate(-1.5deg) is     │
 │                         │                     │ baked into PartBadge   │
 ├─────────────────────────┼─────────────────────┼────────────────────────┤
 │ CTA arrow "→"           │ Primitive (hard)    │ CTAClose appends →     │
 │                         │                     │ automatically          │
 ├─────────────────────────┼─────────────────────┼────────────────────────┤
 │ 3-4 image slots         │ Prompt + Validator  │ Prompt: must equal 3-4;│
 │                         │                     │ Validator: count check │
 ├─────────────────────────┼─────────────────────┼────────────────────────┤
 │ ≥1 hard shadow per email │ Validator          │ Validator: filter      │
 │                         │                     │ components for         │
 │                         │                     │ FramedImage with       │
 │                         │                     │ shadow≥3               │
 ├─────────────────────────┼─────────────────────┼────────────────────────┤
 │ ≥1 tilted sticker       │ Validator          │ Validator: check       │
 │ per email               │                     │ PartBadge in           │
 │                         │                     │ components              │
 ├─────────────────────────┼─────────────────────┼────────────────────────┤
 │ Mechanism before        │ Prompt              │ LLM is told to place   │
 │ guarantee               │                     │ mechanism block before │
 │                         │                     │ guarantee in blueprint │
 │                         │                     │ position order         │
 ├─────────────────────────┼─────────────────────┼────────────────────────┤
 │ Subject line formula    │ Copy .md file       │ Verbatim from copy —   │
 │ (one of 6)              │                     │ the copy IS the rule   │
 ├─────────────────────────┼─────────────────────┼────────────────────────┤
 │ Image variance          │ Prompt + Validator  │ Prompt: blacklist of   │
 │ (no repeats in 2 prior  │                     │ last email's photos;   │
 │ emails in same flow)    │                     │ Validator: check paths │
 ├─────────────────────────┼─────────────────────┼────────────────────────┤
 │ Component variance       │ Prompt + Validator  │ Prompt: blacklist of   │
 │ (no repeats in 2 prior  │                     │ last email's           │
 │ emails in same flow)    │                     │ primitives; Validator:  │
 │                         │                     │ check primitive IDs    │
 └─────────────────────────┴─────────────────────┴────────────────────────┘

 SUMMARY: 17 brand attributes, all enforced by at least one layer.
 9 are enforced by the primitive itself (impossible to violate).
 8 are enforced by prompt + validator (catches violations).

═══════════════════════════════════════════════════════════════════════════════
```

```
═══════════════════════════════════════════════════════════════════════════════
 HOW COMPONENT CHOICES STAY ON BRAND
═══════════════════════════════════════════════════════════════════════════════

 The LLM doesn't have free choice. The 14 primitives ARE the only
 components that exist. It cannot invent "HeroCard" or "BigButton"
 because the prompt explicitly says:

   "You can ONLY use the 14 primitives listed below. Do not invent
    new component names. Do not compose new wrapper components
    except for the inline 60-day circular seal pattern."

 ┌─────────────────────────────────────────────────────────────────────────┐
 │ WHAT THE LLM CHOOSES              │ WHAT IS FIXED                       │
 ├───────────────────────────────────┼─────────────────────────────────────┤
 │                                   │                                     │
 │ Which primitive goes in           │ The primitive's:                    │
 │ which position (1-12)            │   - colors (hardcoded)              │
 │                                   │   - font (hardcoded)                │
 │                                   │   - shadow (hardcoded)              │
 │                                   │   - border (hardcoded)              │
 │                                   │   - border-radius (hardcoded)       │
 │                                   │                                     │
 │ What copy text fills which field  │ The verbatim copy from .md          │
 │ in the primitive (verbatim only)  │   (the LLM is forbidden from       │
 │                                   │    rewriting anything)              │
 │                                   │                                     │
 │ Which image_path goes into        │ The image_path must exist on disk   │
 │ FramedImage src                   │ in product-photos/                  │
 │                                   │                                     │
 │ Which bg color (from 7-value      │ The bg must be from approved        │
 │ whitelist) for sections           │ palette                             │
 │                                   │                                     │
 │ The narrative order of components │ Mechanism before guarantee,         │
 │                                   │ hook first, signoff last            │
 │                                   │                                     │
 └───────────────────────────────────┴─────────────────────────────────────┘

 The LLM's job is essentially TRAFFIC CONTROL:
   - route the copy chunks to the right structural slot
   - pick a primitive that fits that slot
   - place the right image
   - respect the variance blacklist
   - output JSON that the validator will accept

 The brand is locked in the chassis. The LLM just connects the wires.

═══════════════════════════════════════════════════════════════════════════════
```

```
═══════════════════════════════════════════════════════════════════════════════
 EDGE CASES THE LLM MIGHT TRY (and how each is caught)
═══════════════════════════════════════════════════════════════════════════════

 ┌──────────────────────────────────┬─────────────────────────────────────┐
 │ LLM ATTEMPTS                     │ CAUGHT BY                           │
 ├──────────────────────────────────┼─────────────────────────────────────┤
 │                                  │                                     │
 │ Invent a new component name      │ Validator: no such primitive        │
 │ (e.g., <BigButton>, <HeroCard>)  │ exists in the 14-primitive catalog  │
 │                                  │ → regenerate                        │
 │                                  │                                     │
 │ Use a random hex color           │ Validator: bg not in approved       │
 │ (e.g., #FF5733)                  │ palette (7 values)                  │
 │                                  │ → regenerate                        │
 │                                  │                                     │
 │ Add an em dash to copy           │ Validator: grep "—" fails          │
 │ (e.g., "—")                      │ → regenerate                        │
 │                                  │                                     │
 │ Add "$" instead of "€"           │ Validator: grep "\\$" fails        │
 │                                  │ → regenerate                        │
 │                                  │                                     │
 │ Use Tailwind className            │ Validator: no className usage;      │
 │ (e.g., className="bg-red-500")   │ inline style required               │
 │                                  │ → regenerate                        │
 │                                  │                                     │
 │ Use a non-approved font           │ Validator: no font-family in        │
 │ (e.g., fontFamily: "Arial")      │ emails.jsx other than F.* tokens    │
 │                                  │ → regenerate                        │
 │                                  │                                     │
 │ Add an <html> tag                 │ Validator: no <html>, <body>,       │
 │                                  │ <head> in JSX                       │
 │                                  │ → regenerate                        │
 │                                  │                                     │
 │ Add an import statement           │ Validator: no "import" token        │
 │                                  │ → regenerate                        │
 │                                  │                                     │
 │ Use 5 image slots                 │ Validator: total_image_slots > 4   │
 │                                  │ → regenerate with "must be 3-4"    │
 │                                  │                                     │
 │ Use 2 image slots                 │ Validator: total_image_slots < 3   │
 │                                  │ → regenerate with "must be 3-4"    │
 │                                  │                                     │
 │ Skip the PartBadge                │ Validator: no PartBadge in          │
 │                                  │ components array                    │
 │                                  │ → regenerate                        │
 │                                  │                                     │
 │ Skip the hard shadow              │ Validator: no FramedImage with      │
 │                                  │ shadow≥3                            │
 │                                  │ → regenerate                        │
 │                                  │                                     │
 │ Wrong signoff name                │ Validator: derived from Position    │
 │ (E2 uses "BKC team" instead      │ → regenerate                        │
 │ of "Lena Bauer")                 │                                     │
 │                                  │                                     │
 │ Wrong closing word                │ Validator: derived from Position    │
 │ (E3 uses "Talk soon" instead     │ → regenerate                        │
 │ of "With understanding")         │                                     │
 │                                  │                                     │
 │ Reference a c.field that          │ Validator: cross-file check        │
 │ doesn't exist in content.js       │ → regenerate                        │
 │                                  │                                     │
 │ Image path doesn't exist          │ Validator: os.path.exists() fails  │
 │ on disk                          │ → substitute first available in     │
 │                                  │ same category, log, continue        │
 │                                  │                                     │
 │ Duplicate image in same email     │ Validator: set() check             │
 │                                  │ → regenerate                        │
 │                                  │                                     │
 │ Use the same primitive 3+ times   │ Variance blacklist check            │
 │ in a row                         │ → regenerate with "use the next     │
 │                                  │ alternative from same slot"         │
 │                                  │                                     │
 │ Bundle has console errors         │ chromium render check fails         │
 │                                  │ → mark failed, do NOT scp           │
 │                                  │                                     │
 └──────────────────────────────────┴─────────────────────────────────────┘

 EVERY OFF-BRAND ATTEMPT IS CAUGHT.
 None reach the bundled HTML.
 None reach Ayoub's review.

═══════════════════════════════════════════════════════════════════════════════
```

```
═══════════════════════════════════════════════════════════════════════════════
 THE REVIEW LOOP — FINAL BRAND GATE BEFORE SHIPPING
═══════════════════════════════════════════════════════════════════════════════

 After all mechanical checks pass, the bundled HTML is scp'd to cachy.
 Ayoub opens it in a browser at 420px viewport and checks:

 ┌─────────────────────────────────────────────────────────────────────────┐
 │ AYBOB'S CHECKLIST (per email)                                          │
 ├─────────────────────────────────────────────────────────────────────────┤
 │                                                                         │
 │  STRUCTURAL                                                             │
 │  □ Does the email render fully (no broken sections)?                    │
 │  □ Are there 5-12 distinct sections in the email?                       │
 │  □ Is the width 420px (no horizontal scroll on mobile)?                │
 │  □ Does every Email<N> show in its own <DCArtboard>                    │
 │    in the canvas?                                                       │
 │                                                                         │
 │  COPY                                                                   │
 │  □ Is the body text character-for-character identical to                │
 │    the .md file (no rewrites, no truncation)?                           │
 │  □ Are prices shown as €34, €30.60, €79.99 (never $)?                 │
 │  □ Are there any em dashes (—) anywhere? (Should be zero)              │
 │  □ Are there any double hyphens (--)? (Should be zero)                │
 │  □ Does the email have a closing line + signoff name?                   │
 │  □ Is the signoff "BKC team" for E1, "Lena Bauer" for E2+?            │
 │  □ Is the closing word "Talk soon" / "With understanding" /            │
 │    "With care" matching the position?                                   │
 │  □ Does the subject line match the .md file's subject?                │
 │                                                                         │
 │  VISUAL                                                                 │
 │  □ Are hard shadows visible (3/4/6px ink, no blur)?                    │
 │  □ Is there a tilted sticker (yellow PartBadge) somewhere?            │
 │  □ Are all cards using 2px solid #1F2D2F borders?                      │
 │  □ Is the body font readable (Questrial, not random sans)?            │
 │  □ Are headings using Fraunces display font?                            │
 │  □ Is Lena's signature in Caveat handwritten font?                    │
 │  □ Are the background colors from the approved palette?                │
 │    (cream, yellow warm, teal pale, lavender pale, white,                │
 │     or transparent — no random colors)                                 │
 │  □ Do all images render (no broken/missing product photos)?             │
 │  □ Does the image sequence feel intentional                             │
 │    (3-4 images, not 0 or 7)?                                          │
 │                                                                         │
 │  NARRATIVE                                                              │
 │  □ Does the email open with hook/permission, not product push?         │
 │  □ Does mechanism come before guarantee?                               │
 │  □ Does the email have a clear CTA with "→" arrow?                    │
 │  □ Is the Lena signoff present and warm (not corporate)?              │
 │                                                                         │
 │  APPROVE → mark completed, move to next build unit                     │
 │  REJECT → describe what's off, I diagnose, fix prompt, rebuild         │
 │                                                                         │
 └─────────────────────────────────────────────────────────────────────────┘

 This is the final brand gate. Ayoub's eyes are the last filter.
 Every check above has a corresponding rule in the plan, so any
 "this feels off" feedback maps to a specific rule violation
 I can fix.

═══════════════════════════════════════════════════════════════════════════════
```

```
═══════════════════════════════════════════════════════════════════════════════
 THE WHOLE PICTURE — WHERE BRAND IS ENFORCED
═══════════════════════════════════════════════════════════════════════════════

 EMAIL IDEA → BUNDLED HTML → AYBOB'S BROWSER
       │              │              │
       │              │              │
       ▼              ▼              ▼
 ┌─────────┐    ┌──────────┐    ┌──────────┐
 │ Tier 1  │    │ Tier 2   │    │ Tier 3   │
 │PRIMITIVE│    │VALIDATOR │    │ AYBOB'S  │
 │ (hard)  │    │(mech)    │    │ EYES     │
 │         │    │          │    │          │
 │ colors, │    │ grep,    │    │ 17-point │
 │ shadows,│    │ count,   │    │ checklist│
 │ borders │    │ pattern  │    │          │
 │ baked in│    │ match    │    │          │
 └─────────┘    └──────────┘    └──────────┘
       ▲              ▲              ▲
       │              │              │
       └──────┬───────┘              │
              │                      │
              ▼                      │
         ┌─────────┐                 │
         │ Tier 1b │                 │
         │ PROMPT  │                 │
         │ (soft)  │                 │
         │         │                 │
         │ rules   │                 │
         │ listed  │                 │
         │ in      │                 │
         │ every   │                 │
         │ LLM call│                 │
         └─────────┘                 │
              ▲                      │
              │                      │
              └──────────────────────┘
                    (Ayoub's feedback
                     loops back into
                     the prompt)

 4 LAYERS OF BRAND ENFORCEMENT:
   1. Primitives (the chassis) — hardcoded brand
   2. Prompt (the rules) — LLM told the rules
   3. Validator (the gate) — mechanical enforcement
   4. Ayoub (the final say) — human eyes

 If even ONE of these layers is removed, the system still has
 3 layers of protection. If the LLM misbehaves, the validator
 catches it. If the validator has a bug, Ayoub's review catches
 it. If Ayoub misses something, the next email's variance check
 against the previous one will surface the inconsistency.

 THE COST OF OFF-BRAND: regenerate one email, lose 3-6 minutes.
 THE COST OF OFF-BRAND REACHING AYBOB: zero, because of layers
   1, 2, and 3.

═══════════════════════════════════════════════════════════════════════════════
```
