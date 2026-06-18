# BKC Email Build Plan — 125 Emails across 35 Flows

> **Status:** Active. Replaces the over-engineered `email-design-plan.md` (kept as historical reference, archived as `email-design-plan-archive.md`).
> **Scope:** Produce standalone `.html` files for BrightKidCo, scp to cachy. One flow at a time. No batching.
>
> **⚠️ NEW SESSION?** Read `/root/projects/brightkidco/plans/email-plan-ascii.md` first. It has the **SESSION BOOTSTRAP** section at the top (current state, build cadence, what to do on resume) plus the full plan with the ecom email structure (Section 2.0), hard validation rules (Phase 4.5), and the brand compliance breakdown. This file (`email-build-plan.md`) is the shorter structured version without the ASCII breakdown.

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

1. Confirm the 5 shared files exist and are frozen
2. Build the **35-flow build manifest** (see schema below)
3. Initialize `progress.json` with all 35 build units marked `pending`

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

**Validation script (run after LLM emits, before saving):**
- [ ] Valid JSON, parses
- [ ] `email_id` matches the active file handle
- [ ] 7 ≤ `len(components)` ≤ 12
- [ ] 3 ≤ `total_image_slots` ≤ 4
- [ ] Sum of `image_slots` == `total_image_slots`
- [ ] At least one `FramedImage` with `props.shadow >= 3`
- [ ] At least one `PartBadge` (typically inside `TitleBlock`)
- [ ] No em dash (`—`) in any `props.*` string
- [ ] No `--` in any `props.*` string
- [ ] No `$` in any `props.*` string
- [ ] Every `props.bg` is in the approved palette or `transparent`
- [ ] Signoff/closing-word rules satisfied

If any check fails: regenerate once with the error message. If second attempt fails, mark `failed` in `progress.json` and continue to next email.

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

### 4.5 — Cross-File Sanity Check

- [ ] Every `c.something` reference in `emails.jsx` corresponds to a field in `content.js`
- [ ] Every `image_path` in `emails.jsx` matches a path filled in the blueprint
- [ ] Number of `Email<N>` consts == number of `<DCArtboard>` tags
- [ ] No `TODO`, `FIXME`, or placeholder strings
- [ ] No references to components that don't exist

If any check fails: regenerate once. If still failing, mark `failed`, continue.

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

1. **`bundle_standalone.py`** — does not exist on disk. **Built in Phase 0.** ~100 lines of Python that inlines the 5 shared files + the 3 per-flow files + all 28 images (as base64 data URIs) + CDN scripts into a single self-contained HTML. Output: ~3MB per build unit.
2. **LLM model** — me (MiniMax-M3). One LLM call per email, sequential. No sub-agents (the variance blacklist requires sequential context within a build unit). All 125 calls happen in this session.
3. **`Local.html` relative paths** — the new variant folders (welcome-gf-flow, welcome-l1-flow, etc.) are siblings of `welcome-flow/` inside `BKCO - EMAIL MARKETING/`. From any new folder, `../welcome-flow/primitives.jsx` and `../autistic-welcome/variants/tokens.js` are correct relative paths. **No restructuring needed.**

---

## Definition of Done (for the whole 125)

- `progress.json` shows 35 / 35 build units completed
- 35 standalone HTML files in `raw/` (one per build unit)
- All 35 scp'd to `ayoub@100.76.121.113:/home/ayoub/Documents/`
- Ayoub has reviewed and approved each one before the next is built
