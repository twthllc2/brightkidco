# BKC Email Production — Base Plan v3 (Expanded)

> Version 3 — expanded for bulletproof execution. Every phase has exact file paths, exact component signatures, exact output formats, and exact quality gates.

---

## 0. THE RAW DESIGN ENVIRONMENT

Everything we build is an extension of this environment. We do not invent a new system.

### 0.1 File Inventory

```
/root/projects/brightkidco/raw/BKCO - EMAIL MARKETING/welcome-flow/
├── tokens.js              (109 lines) — brand colors, fonts, gradient
├── primitives.jsx         (275 lines) — 15 reusable React components
├── content.js             (321 lines) — Flow 1 email content (E2-E6)
├── content-flow2.js       (230 lines) — Flow 2 email content (4 emails)
├── product-showcase.jsx   (270 lines) — 3 product placement variants
├── design-canvas.jsx      (~600 lines) — canvas wrapper for preview
├── app.jsx                (68 lines) — root app, renders all emails
├── email-1.jsx            (standalone) — E1 (V10 Final, separately built)
├── emails-2-3.jsx         (302 lines) — E2 + E3
├── emails-4-5.jsx         (296 lines) — E4 + E5
├── email-6.jsx            (182 lines) — E6
├── flow2-emails.jsx       (695 lines) — Flow 2 all 4 emails
└── Welcome Flows - 10 Emails.html  — compiled preview of all 10
```

### 0.2 tokens.js — Brand Tokens (LAW)

```js
window.BRAND = {
  teal: "#2BAEB4",        // primary accent — CTAs, links, highlights
  tealDeep: "#1E8A8F",    // dark teal — eyebrows, secondary accents
  green: "#5DD07A",       // secondary accent — positive indicators
  greenDeep: "#3BB35E",   // dark green
  ink: "#1F2D2F",         // primary text, borders, shadows, dark sections
  soft: "#4A6568",        // body text, secondary copy
  muted: "#8A9B9D",       // footer text, metadata, fine print
  cream: "#FBF7F1",       // warm background bands
  paper: "#FFFFFF",       // card/surface background
  gradient: "linear-gradient(135deg, #2BAEB4 0%, #5DD07A 100%)",
  gradientText: {
    background: "linear-gradient(135deg, #2BAEB4 0%, #5DD07A 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    color: "transparent",
  },
};
window.FONT = {
  main: "'Questrial', system-ui, sans-serif",
  display: "'Fraunces', Georgia, serif",
};
```

Every email uses these exact values. No custom colors. No custom fonts.

### 0.3 primitives.jsx — Shared Components

| Component | Signature | Purpose |
|-----------|-----------|---------|
| `ImgFrame` | `({ height, label, sublabel, radius, aspect })` | Image placeholder with dashed teal border + corner SVG markers |
| `FramedImage` | `({ children, height, label, sublabel, shadow })` | ImgFrame wrapped in ink border + drop-shadow |
| `Band` | `({ from, to, height })` | Gradient transition between section backgrounds |
| `Header` | `({ bg })` | Logo header — `../assets/brightkidco-logo-v2.png` |
| `PartBadge` | `({ children })` | Yellow sticker badge — "Part 2 of 6" style |
| `TitleBlock` | `({ badge, part1, part2, accent2, subhead })` | Badge + H1 (gradient accent on part2) + optional subhead |
| `Letter` | `({ bg, paras, first })` | Paragraph stack on warm background |
| `Eyebrow` | `({ children, color })` | Small uppercase section label (default: tealDeep) |
| `H2` | `({ children, center, size })` | Section heading (default: 28px) |
| `CTAClose` | `({ intro, button, fine, bg })` | Dark CTA section — lime green button on ink background |
| `Signoff` | `({ bg })` | Lena's personal close — avatar + handwritten signature + P.S. |
| `OutLine` | `({ bg })` | Soft unsubscribe-adjacent line |
| `Footer` | `()` | BREZ-inspired footer — tagline, links, social icons, unsubscribe |
| `EmailShell` | `({ children, preheader, bg })` | Email wrapper — sets width (420px), font, preheader |

Global constants: `MW = 420`, `LOGO = "../assets/brightkidco-logo-v2.png"`

### 0.4 product-showcase.jsx — Product Placement

| Variant | Used In | Description |
|---------|---------|-------------|
| `ProductShowcaseFull` | E4, E6 | Hero product block — lifestyle hero + price + 3 feature pills + sub-grid + CTA |
| `ProductShowcaseMedium` | E5 | Inline product card — side-by-side image + info |
| `ProductShowcaseSoft` | E2, E3 | End-of-email gentle mention — tiny thumb + one line + link |

Props for Full: `{ eyebrow, title, titleAccent, sub, priceFrom, priceNote, features, ctaButton, guaranteeBadge }`
Props for Medium: `{ eyebrow, title, priceFrom, ctaButton }`
Props for Soft: `{ eyebrow, line, ctaText }`

### 0.5 Email JSX Pattern

Every email follows this exact structure:

```jsx
const EmailN = () => {
  const c = window.FLOW1.eN;           // content data
  const BG_HERO = "#FFFBF0";           // per-section background colors
  const BG_DEF = "#EAF6F2";
  // ... more BG variables

  return (
    <EmailShell preheader={c.preheader} bg={BG_HERO}>
      <Header bg={BG_HERO} />

      {/* Hero image */}
      <div style={{ margin: "24px 14px 0" }}>
        <FramedImage height={220} label="..." sublabel="..." shadow={6} />
      </div>

      {/* Title */}
      <TitleBlock badge={c.heroBadge} part1={c.h1a} part2={c.h1b} />

      <Band from={BG_HERO} to={BG_REF} />

      {/* Content sections — each with its own BG */}
      <Letter bg={BG_REF} first="Hi again." paras={c.letterOpening} />

      <Band from={BG_REF} to={BG_DEF} />

      {/* Definition, reframe, compare, expert, product, etc. */}
      {/* Each section: Eyebrow → H2 → content → Band transition */}

      {/* Product showcase */}
      <ProductShowcaseFull/Medium/Soft ... />

      {/* CTA */}
      <CTAClose intro={c.ctaIntro} button={c.ctaButton} fine={c.ctaFinePrint} />

      {/* Signoff + Footer */}
      <Signoff />
      <OutLine />
      <Footer />
    </EmailShell>
  );
};
window.EmailN = EmailN;
```

Key patterns:
- Each section has its own background color
- `Band` components create smooth gradient transitions between sections
- All styles are inline (no CSS classes)
- Width is 420px (MW constant)
- Content comes from `window.FLOW1.eN` objects

---

## 1. ASSET INVENTORY

### 1.1 Component Library

**Location:** `/root/projects/email-ops/email-design/component-index.md`
**Total:** 922 components across 80 categories

Categories include: Hero (23), Badge (5), Text/Letter (84), Social Proof (18), Product Showcase (24), CTA (12), Footer (8), Navigation (6), Testimonial (15), Stat/Data (11), Visual Break (9), Decorative (14), Comparison (8), Testimonial (15), and 65+ more.

Each component has: ID, name, line number reference in the full library file.

### 1.2 Copy Files

**Location:** `/root/projects/brightkidco/outputs/copy/`
**Total:** 114+ emails across 22 flows

Flow breakdown:
```
welcome:           32 files  (8 emails × 4 levels: gf, l1, l2, l3)
winback-a:         12 files
winback-b:         12 files
pp-extended-ed:    20 files
browse:             3 files
cart:               3 files
checkout:           2 files
pp-at-risk:         4 files
pp-direct-upsell:   2 files
pp-education:       4 files
pp-extended-upsell: 3 files
pp-level-detection: 2 files
pp-mary-story:      1 file
pp-mid-checkin:     3 files
replenish-a:        3 files
replenish-b:        2 files
replenish-c:        2 files
review-request:     2 files
site-abandonment:   1 file
sunset:             2 files
transactional:      4 files
```

**File naming convention:**
- Level-specific: `welcome-01-e1-gf.md` (flow-number-email-position-level)
- Cross-level: `cart-02-e1.md` (flow-number-email-position)

**Copy file structure (two halves):**
1. **Email Copy:** Metadata, Subject Line, Preview Text, From Name, Email Body (Hook, Validation, Mechanism, Social Proof, Product Intro, Guarantee, CTA), Source Citations
2. **Creative Strategy:** Big Idea, Layout Architecture (ASCII wireframe), Custom Illustration/Contraption, Color Narrative, Typography as Design, Decorative Furniture, Hidden Detail/Easter Egg, Motion/Animation, Level Calibration (Visual)

### 1.3 Product Photos

**Location:** `/root/projects/brightkidco/raw/product-photos/`
**Total:** 29 images

```
accessories/  (5): potty-targets-stickers-chart.png, wet-bags-space-zebra-llama.png,
                    towel-set-llama-cactus.png, cloth-pads-watermelon-astronaut-cat.png,
                    book-potty-training-guide.png
branding/     (1): black-placeholder.png
flat-lay/    (14): diaper-woodland-creature-yellow.jpg, laundry-bag-llama-cream.png,
                   pocket-diaper-moon-cloud-blue.jpg, swim-diaper-giraffe-yellow.jpg,
                   swim-diaper-unicorn-pink.jpg, swim-diaper-whale-ocean-blue.jpg,
                   training-pant-bunny-hearts-pink.jpg, training-pant-cloud-raindrop-white.jpg,
                   training-pant-fox-red-white.jpg, training-pant-fox-woodland-white.jpg,
                   training-pant-moon-cloud-blue.jpg (if exists), + others
lifestyle/    (9): founders-holding-pants-yellow-watermelon.png,
                   toddler-backpack-moon-cloud-blue.png,
                   toddler-livingroom-dino-yellow.png,
                   toddler-napping-watermelon-pink-shorts.png,
                   toddler-outdoors-grass-disposable-diaper.png,
                   toddler-playing-train-moon-cloud-blue.png,
                   toddler-potty-ladder-pink-multicolor.png,
                   toddler-potty-ladder-yellow-woodland.png,
                   toddler-rearview-cat-mustard.png,
                   toddlers-backview-disposable-diapers.png
```

### 1.4 Reference Plans

**Location:** `/root/projects/brightkidco/plans/`
- `email-copy-production.md` — the detail level benchmark (shows exact rules, templates, source file paths)
- `overnight-plan.md`, `strategy-8-decision-docs.md`, `wave-a-15-synthesis-docs.md`

### 1.5 Strategy Documents

**Location:** `/root/projects/brightkidco/outputs/strategy/`
- `1-full-email-strategy.md` — S1 master strategy
- `2-full-email-copy-strategy.md` — S2 copy strategy (hooks, angles, subject lines)
- `3-segmentation-blueprint.md` — S3 segmentation

### 1.6 Design Reference

**Location:** `/root/projects/brightkidco/plans/consolidated-design-skills-trimmed.md`
- 186KB file with design philosophy, visual archetypes, layout patterns, color systems, typography rules, anti-slop rules, email constraints, premium design principles

---

## 2. THE WORKFLOW (5 PHASES)

### Phase 1: Strategy Mapping
**Agents:** 5 (parallel)
**Time:** ~30 minutes
**Gate:** All 114 emails mapped before Phase 2 starts

#### 2.1.1 Agent Assignments

| Agent | Flows | Emails |
|-------|-------|--------|
| 1 | welcome | 32 (8 emails × 4 levels) |
| 2 | winback-a, winback-b | 24 (12 + 12) |
| 3 | pp-extended-ed, pp-at-risk, pp-education | 28 (20 + 4 + 4) |
| 4 | browse, cart, checkout, site-abandonment, sunset | 10 (3 + 3 + 2 + 1 + 2) |
| 5 | replenish-a/b/c, review-request, pp-direct-upsell, pp-extended-upsell, pp-level-detection, pp-mid-checkin, pp-mary-story, transactional | 20 |

#### 2.1.2 What Each Agent Receives

1. **The copy files** for their assigned flows (full files with both halves)
2. **The component index** (`component-index.md`)
3. **The raw environment reference** (primitives.jsx, product-showcase.jsx, tokens.js)
4. **The design reference** (`consolidated-design-skills-trimmed.md`)
5. **Product photos list** (file names and categories)
6. **Giuliano demands** (`GIULIANO-DEMANDS.md`) — for level rules

#### 2.1.3 What Each Agent Produces Per Email

One JSON entry per email in the strategy map:

```json
{
  "id": "welcome-01-e1-gf",
  "flow": "welcome",
  "flow_number": 1,
  "email_position": 1,
  "level": "gf",
  "subject": "Your child might not feel the signal",
  "timing": "Day 0",
  "purpose": "Immediate validation + mechanism teaser",
  "emotional_arc": "Mirror confusion → Validate → Offer mechanism → Curiosity",

  "structure": {
    "hero_type": "split-asymmetric",
    "sections": [
      {"type": "hero", "layout": "2-column (35/65)", "bg": "#FFFBF0"},
      {"type": "letter", "layout": "single-column", "bg": "#FFF6E2"},
      {"type": "definition", "layout": "single-column", "bg": "#EAF6F2"},
      {"type": "reframe", "layout": "sticker-grid", "bg": "#FFF6E2"},
      {"type": "compare", "layout": "3-column-cards", "bg": "#FFFBF0"},
      {"type": "expert", "layout": "single-column-card", "bg": "#F0EDF8"},
      {"type": "product", "variant": "soft", "bg": "default"},
      {"type": "cta", "layout": "centered", "bg": "ink"},
      {"type": "signoff", "bg": "ink"},
      {"type": "out", "bg": "white"},
      {"type": "footer", "bg": "white"}
    ],
    "band_transitions": true,
    "visual_density": "text-heavy with 2 illustration moments"
  },

  "components_from_library": {
    "hero": ["HERO-1 Curiosity Gap (L3811)"],
    "letter": ["4.1 Letter Section (L468)"],
    "definition": ["11.1 Stat Callout (L1034)"],
    "reframe": ["16.2 Tilted Sticker Creeds (L1561)", "16.3 Reframe Points as Stickers (L1578)"],
    "compare": ["25.1 Comparison Card (L2200)"],
    "expert": ["9.1 Expert Quote Card (L849)"],
    "cta": ["12.1 CTA Button (L1100)"]
  },

  "images": {
    "hero": "flat-lay/training-pant-cloud-raindrop-white.jpg",
    "lifestyle": "lifestyle/toddler-potty-ladder-yellow-woodland.png",
    "product_thumb": "flat-lay/training-pant-fox-red-white.jpg"
  },

  "color_emphasis": {
    "warm_pct": 70,
    "green_pct": 30,
    "section_bgs": {
      "hero": "#FFFBF0",
      "letter": "#FFF6E2",
      "definition": "#EAF6F2",
      "compare": "#FFFBF0",
      "expert": "#F0EDF8"
    }
  },

  "content_sections_used": [
    "letterOpening", "definitionLabel/Title/Body",
    "reframeLabel/Title/Points/Closing",
    "compareLabel/Title/Cards",
    "expertLabel/Quote/By",
    "ctaIntro/Button/FinePrint"
  ],

  "level_calibration": {
    "gf": "70% warm / 30% green, generous line-height, 3-family testimonial pattern",
    "l1": "50/50, standard density, 1-family testimonial",
    "l2": "40/60, more data-driven, BCBA context",
    "l3": "30/70, dignity-first, ZERO urgency"
  },

  "flags": [
    "GF level — needs inclusive framing (Whether...Or...If...)",
    "No urgency language",
    "Cross-level file — must work for all 4 levels via R1-R6"
  ]
}
```

#### 2.1.4 Strategy Map Output

**File:** `/root/projects/brightkidco/outputs/strategy-map.json`
**Format:** JSON array of 114 entries, one per email

#### 2.1.5 Quality Gate

Before Phase 2 can start:
- [ ] All 114 emails have entries in strategy-map.json
- [ ] Every entry has: structure, components_from_library, images, content_sections_used
- [ ] No two emails in the same flow share the same sections_order
- [ ] All image assignments are unique within each flow
- [ ] Level-specific emails (welcome, winback-a, winback-b, pp-extended-ed) have level_calibration entries

---

### Phase 2: Structure Assembly
**Agents:** 15 per wave (via Ralph loop)
**Waves:** 5 waves
**Time:** ~60-90 minutes total
**Gate:** All JSX files pass syntax check before Phase 3 starts

#### 2.2.1 Wave Structure

| Wave | Flows | Emails | Priority |
|------|-------|--------|----------|
| 1 | welcome | 32 | Highest — most complex, benchmark quality |
| 2 | winback-a, winback-b | 24 | High — level-specific, 12 each |
| 3 | pp-extended-ed, pp-at-risk, pp-education, pp-extended-upsell, pp-level-detection, pp-mid-checkin, pp-mary-story | 36 | Medium — mix of level-specific and cross-level |
| 4 | browse, cart, checkout, site-abandonment, sunset | 10 | Medium — cross-level, simpler |
| 5 | replenish-a/b/c, review-request, pp-direct-upsell, transactional | 12 | Lower — cross-level, shorter emails |

#### 2.2.2 What Each Agent Receives

1. **Strategy map entry** for their assigned email(s)
2. **The copy file** (full file with both halves)
3. **primitives.jsx** — exact file content
4. **tokens.js** — exact file content
5. **product-showcase.jsx** — exact file content
6. **Reference email JSX** — one example from the raw environment (e.g., emails-2-3.jsx)
7. **Product photos list** — file names and paths

#### 2.2.3 What Each Agent Produces

One JSX file per email at:
```
/root/projects/brightkidco/outputs/emails/<flow>/<email-id>.jsx
```

Examples:
```
outputs/emails/welcome/welcome-01-e1-gf.jsx
outputs/emails/welcome/welcome-01-e1-l1.jsx
outputs/emails/cart/cart-02-e1.jsx
outputs/emails/winback-a/winback-a-24-e1-l1.jsx
```

#### 2.2.4 JSX File Requirements

Every JSX file MUST:

1. **Use brand tokens** — `const B = window.BRAND; const F = window.FONT;`
2. **Use primitives** — Copy the relevant primitive functions into the file (or reference via window.*)
3. **Follow the EmailShell pattern** — `return (<EmailShell preheader={...} bg={...}>...</EmailShell>)`
4. **Use inline styles only** — No CSS classes, no external stylesheets
5. **Render at 420px width** — `width: MW` or `width: 420`
6. **Include all sections** from the strategy map in the correct order
7. **Use Band transitions** between sections with different backgrounds
8. **Include Header, Signoff, OutLine, Footer** — standard email bookends
9. **Assign unique background colors per section** — see the pattern in emails-2-3.jsx
10. **Register on window** — `window.EmailName = EmailName;`

#### 2.2.5 JSX File Template

```jsx
/* <Flow Name> · <Email Title> · <Level>
   Purpose: <one-line purpose from strategy map>
   Voice: <voice description>
*/

const EmailName = () => {
  const c = window.FLOW1.eN;  // or appropriate content source
  const BG_HERO = "#FFFBF0";
  const BG_LETTER = "#FFF6E2";
  const BG_DEF = "#EAF6F2";
  const BG_COMPARE = "#FFFBF0";
  const BG_EXPERT = "#F0EDF8";
  const BG_CTA = B.ink;

  return (
    <EmailShell preheader={c.preheader} bg={BG_HERO}>
      <Header bg={BG_HERO} />

      {/* ── HERO SECTION ── */}
      {/* Strategy map says: split-asymmetric, 2-column (35/65) */}
      <div style={{ margin: "24px 14px 0" }}>
        <FramedImage height={220} label="..." sublabel="..." shadow={6} />
      </div>
      <TitleBlock badge={c.heroBadge} part1={c.h1a} part2={c.h1b} />
      <Band from={BG_HERO} to={BG_LETTER} />

      {/* ── LETTER SECTION ── */}
      <Letter bg={BG_LETTER} first="Hi again." paras={c.letterOpening} />
      <Band from={BG_LETTER} to={BG_DEF} />

      {/* ── DEFINITION / MECHANISM SECTION ── */}
      <div style={{ background: BG_DEF, padding: "28px 22px 16px" }}>
        <Eyebrow>{c.definitionLabel}</Eyebrow>
        <H2><span style={{ ...B.gradientText, fontWeight: 700 }}>{c.definitionAccent}</span>.</H2>
        {c.definitionBody.map((p, i) => (
          <p key={i} style={{
            fontSize: i === 0 ? 17 : 14.5,
            lineHeight: 1.65,
            color: i === 0 ? B.ink : B.soft,
            fontWeight: i === 0 || i === 4 ? 600 : 400,
            margin: "0 0 12px",
          }}>{p}</p>
        ))}
      </div>

      {/* ... more sections following the strategy map ... */}

      {/* ── PRODUCT SHOWCASE ── */}
      <ProductShowcaseSoft eyebrow="Designed around this" line={...} ctaText="See the different path" />

      {/* ── CTA SECTION ── */}
      <CTAClose intro={c.ctaIntro} button={c.ctaButton} fine={c.ctaFinePrint} />

      {/* ── SIGNOFF + FOOTER ── */}
      <Signoff />
      <OutLine />
      <Footer />
    </EmailShell>
  );
};
window.EmailName = EmailName;
```

#### 2.2.6 Critical Assembly Rules

1. **Content source:** Level-specific emails use `window.FLOW1.eN` (or winback-a/b equivalents). Cross-level emails extract from the copy file's body sections.

2. **Section backgrounds:** Each section gets its own BG color. Common palette:
   - Hero: `#FFFBF0` (warm)
   - Letter: `#FFF6E2` (warm)
   - Definition: `#EAF6F2` (teal-tinted)
   - Reframe: `#FFF6E2` (warm)
   - Compare: `#FFFBF0` (warm)
   - Expert: `#F0EDF8` (purple-tinted)
   - CTA: `B.ink` (dark)
   - Footer: `#FFFFFF` (white)

3. **Band transitions:** Always use `<Band from={prevBG} to={nextBG} />` between sections with different backgrounds. Height: 40px default.

4. **Section structure pattern:** Every section follows:
   ```
   <div style={{ background: BG_SECTION, padding: "28px 22px 16px" }}>
     <Eyebrow>{label}</Eyebrow>
     <H2>{title}</H2>
     {/* content */}
   </div>
   <Band from={BG_SECTION} to={BG_NEXT} />
   ```

5. **Image handling:** Use `ImgFrame` for placeholders, `FramedImage` for framed images. Always include `label` and `sublabel` descriptors.

6. **Comparison cards:** Use the pattern from emails-2-3.jsx — tinted stripe header, icon (✓/✕), body text. Positive cards get green border + gradient header.

7. **Expert quotes:** Card with white background, ink border, drop-shadow. Large opening quote mark in teal. Quote in italic. Byline in soft color.

8. **Product showcase selection:**
   - E1-E3: `ProductShowcaseSoft` (gentle, education-first)
   - E5: `ProductShowcaseMedium` (inline in story)
   - E4, E6: `ProductShowcaseFull` (hero product moment)

9. **CTA section:** Always dark (ink background). Lime green button (`#D8F57C`). Fine print in muted color.

10. **Signoff + Footer:** Always included. Signoff uses `window.FLOW1_SHARED.signoff` data. Footer uses `window.FLOW1_SHARED.footer` data.

#### 2.2.7 Quality Gate

Before Phase 3 can start:
- [ ] All JSX files exist in the correct directories
- [ ] Each file has valid JSX syntax (no parse errors)
- [ ] Each file registers on `window` with a unique name
- [ ] Each file uses brand tokens (no hardcoded colors outside the palette)
- [ ] Each file uses inline styles only
- [ ] Each file includes Header, Signoff, OutLine, Footer
- [ ] No two emails in the same flow share the same sections_order

---

### Phase 3: Visual Verification
**Agents:** 15 per wave (via Ralph loop)
**Waves:** 5 waves (matching Phase 2 waves)
**Time:** ~60-90 minutes total
**Gate:** All emails pass verification before Phase 5 starts

#### 2.3.1 Verification Checklist

Every email is checked against these 10 criteria:

| # | Criterion | How to Check |
|---|-----------|--------------|
| 1 | **JSX renders** | Load in browser, check for errors in console |
| 2 | **Layout matches strategy map** | Sections are in the correct order from strategy-map.json |
| 3 | **Images render** | No broken images, correct src paths |
| 4 | **Brand colors** | All colors match tokens.js palette |
| 5 | **Brand fonts** | Questrial for body, Fraunces for display |
| 6 | **600px width** | Email renders correctly at email width |
| 7 | **Above the fold** | Hero + first CTA visible without scrolling |
| 8 | **CTA visibility** | Primary CTA is prominent and tappable |
| 9 | **Band transitions** | Smooth gradient transitions between sections |
| 10 | **No repetition** | Structure is genuinely different from other emails in same flow |

#### 2.3.2 What Each Agent Receives

1. **The JSX file** to verify
2. **The strategy map entry** (for comparison)
3. **The verification checklist** (above)
4. **Browser/Playwright access** for screenshots

#### 2.3.3 What Each Agent Produces

One verification report per email at:
```
/root/projects/brightkidco/outputs/verification/<flow>/<email-id>.md
```

Report format:
```markdown
# Verification: <email-id>

## Status: PASS / FAIL

## Checklist Results
| # | Criterion | Result | Notes |
|---|-----------|--------|-------|
| 1 | JSX renders | ✅ PASS | |
| 2 | Layout matches strategy | ✅ PASS | |
| 3 | Images render | ⚠️ ISSUE | hero image src path wrong |
| 4 | Brand colors | ✅ PASS | |
| 5 | Brand fonts | ✅ PASS | |
| 6 | 600px width | ✅ PASS | |
| 7 | Above the fold | ✅ PASS | |
| 8 | CTA visibility | ✅ PASS | |
| 9 | Band transitions | ✅ PASS | |
| 10 | No repetition | ✅ PASS | |

## Screenshot
[Path to screenshot]

## Issues Found
1. Hero image src should be `../raw/product-photos/flat-lay/training-pant-cloud-raindrop-white.jpg`
   - Current: `../assets/hero-placeholder.png`
   - Fix: Update src path

## Recommended Fixes
- [Fix 1]
- [Fix 2]
```

#### 2.3.4 Quality Gate

Before Phase 4/5 can start:
- [ ] All 114 verification reports exist
- [ ] All reports have Status field
- [ ] Failed emails are flagged with specific fixes
- [ ] Screenshot paths are valid

---

### Phase 4: Revision
**Conditional:** Only runs if Phase 3 flags failures
**Agents:** 15 per wave (via Ralph loop)
**Time:** ~30-60 minutes (depends on failure count)
**Gate:** All previously failed emails now pass verification

#### 2.4.1 Revision Process

1. Read the verification report for the failed email
2. Read the JSX file
3. Apply the specific fixes listed in the report
4. Re-render and re-verify
5. Update the verification report to PASS

#### 2.4.2 Quality Gate

- [ ] All previously failed emails now have PASS status
- [ ] No new issues introduced by fixes

---

### Phase 5: XHTML Compilation
**Agents:** 5 (parallel)
**Time:** ~30 minutes
**Gate:** All XHTML files are valid and packaged

#### 2.5.1 Compilation Process

Each agent:
1. Takes a batch of verified JSX files (20-25 per agent)
2. Wraps the JSX in an HTML shell with:
   - DOCTYPE html
   - Head with meta charset, viewport, title
   - Google Fonts link (Questrial, Fraunces, Caveat)
   - Body with root div
   - Script tags for React, ReactDOM, Babel
   - Script tags for tokens.js, primitives.jsx, product-showcase.jsx
   - Script tag for the email JSX
3. Compiles JSX to HTML using Babel standalone
4. Validates the XHTML output
5. Packages with images

#### 2.5.2 Output Structure

```
/root/projects/brightkidco/outputs/production/
├── welcome/
│   ├── welcome-01-e1-gf.xhtml
│   ├── welcome-01-e1-gf/
│   │   └── images/
│   ├── welcome-01-e1-l1.xhtml
│   ├── welcome-01-e1-l1/
│   │   └── images/
│   └── ...
├── cart/
│   ├── cart-02-e1.xhtml
│   └── ...
└── ...
```

#### 2.5.3 Quality Gate

- [ ] All XHTML files are well-formed
- [ ] All images are bundled or linked correctly
- [ ] All files render correctly in browser
- [ ] File sizes are reasonable (<500KB per email excluding images)

---

## 3. STRUCTURE VARIETY RULES

Each email MUST have a unique structure. No two emails in the same flow share the same layout.

### 3.1 Hero Variation

The strategy map assigns one of these hero types per flow:

| Hero Type | Description | Example |
|-----------|-------------|---------|
| split-asymmetric | 2-column (35% illustration / 65% text) | Flow 1 E1 |
| full-width-illustration | Full-width image above title | E4, E6 |
| minimal-text | Text-only, no image, strong typography | E2 |
| stat-led | Big number + context as hero | Cart E1 |
| quote-led | Testimonial as hero section | Winback |
| product-led | Product image as hero | Replenish |
| curiosity-gap | Question + partial answer | Browse |

### 3.2 Section Order Variation

The strategy map defines the exact section order per email. Common patterns:

- **Education-first:** hero → letter → definition → reframe → compare → expert → product → CTA
- **Story-first:** hero → story → mechanism → product → CTA
- **Product-first:** hero → product → features → testimonials → guarantee → CTA
- **Social-proof-first:** hero → testimonials → mechanism → product → CTA
- **Guarantee-first:** hero → guarantee → mechanism → testimonials → CTA

### 3.3 Column Layout Variation

- Single-column (default for body text)
- 2-column (feature grids, side-by-side comparisons)
- 3-column (comparison cards, testimonial cards)
- Asymmetric (sidebar + main content)

### 3.4 Visual Density Variation

- **Image-heavy:** 3+ images, ProductShowcaseFull, lifestyle shots
- **Text-heavy:** Letter blocks, mechanism explanations, minimal images
- **Balanced:** 1-2 images, mix of text and visual elements

### 3.5 CTA Placement Variation

- Always: above the fold (hero) + bottom (before footer)
- Vary mid-email: after mechanism, after social proof, after product, before guarantee, or no mid-email CTA

### 3.6 Testimonial Treatment Variation

- Cards (3 side by side)
- Stacked quotes (single column, left border accent)
- Inline pull-quotes (within body text)
- Full-width blocks (testimonial as hero section)
- Expert vs parent testimonials vary by email purpose

---

## 4. WHAT WE DO NOT TOUCH (Yet)

- Graveyard system (compilation/packaging) — Phase 5 handles
- Klaviyo integration — separate concern
- A/B test variants — after production emails are locked
- Image generation — we use existing product photos
- Copy writing — copy is already written and validated

---

## 5. ESTIMATED SCALE

| Metric | Value |
|--------|-------|
| Total emails | ~114 |
| Total Ralph waves | ~10 (2 per phase × 5 phases) |
| Estimated time | 3-4 hours (15 concurrent agents) |
| Strategy map entries | 114 JSON objects |
| JSX files | 114 |
| Verification reports | 114 |
| XHTML files | 114 |
| Critical path | Phase 1 → Phase 2 → Phase 3 → Phase 5 |

---

## 6. RISK MITIGATION

### 6.1 Common Failure Modes

| Failure | Mitigation |
|---------|------------|
| Agent writes wrong JSX structure | Strategy map provides exact section order |
| Agent uses wrong colors | Tokens.js is the only color source |
| Agent copies same layout for multiple emails | Strategy map enforces unique structure per email |
| Images broken | Strategy map assigns exact image paths |
| JSX syntax errors | Quality gate checks syntax before Phase 3 |
| Verification misses issues | 10-point checklist, systematic |

### 6.2 Rollback Plan

If a wave produces unusable output:
1. Delete the affected JSX files
2. Review the strategy map entries for those emails
3. Adjust the agent instructions (add more detail, fix ambiguity)
4. Re-run the wave

---

## 7. EXECUTION COMMANDS

### Start Phase 1
```bash
# Write strategy map task to kanban
# Resume ralph-loop cron
```

### Monitor Progress
```bash
# Check strategy map completeness
cat /root/projects/brightkidco/outputs/strategy-map.json | python3 -c "import json,sys; d=json.load(sys.stdin); print(f'{len(d)} emails mapped')"

# Check JSX file count
find /root/projects/brightkidco/outputs/emails/ -name "*.jsx" | wc -l

# Check verification report count
find /root/projects/brightkidco/outputs/verification/ -name "*.md" | wc -l
```

### Quality Gates
```bash
# Phase 1 → 2: All 114 entries in strategy-map.json
# Phase 2 → 3: All 114 JSX files exist and have valid syntax
# Phase 3 → 5: All 114 verification reports show PASS
```
