# BKC Email Production — Plan v4 (Ultra Bulletproof)

> Version 4 — every gap from v3 filled. This is the convergence point where strategy, demands, research, copy, and design all meet. The customer sees the email. Everything before this was preparation. This is the moment.

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
└── Welcome Flows - 10 Emails.html
```

### 0.2 tokens.js — Brand Tokens (LAW)

```js
window.BRAND = {
  teal: "#2BAEB4",        // primary accent
  tealDeep: "#1E8A8F",    // dark teal
  green: "#5DD07A",       // secondary accent
  greenDeep: "#3BB35E",   // dark green
  ink: "#1F2D2F",         // primary text, borders, shadows
  soft: "#4A6568",        // body text
  muted: "#8A9B9D",       // footer, metadata
  cream: "#FBF7F1",       // warm background
  paper: "#FFFFFF",       // card/surface
  gradient: "linear-gradient(135deg, #2BAEB4 0%, #5DD07A 100%)",
  gradientText: { ... },
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
| `ImgFrame` | `({ height, label, sublabel, radius, aspect })` | Image placeholder with dashed teal border + corner markers |
| `FramedImage` | `({ children, height, label, sublabel, shadow })` | ImgFrame wrapped in ink border + drop-shadow |
| `Band` | `({ from, to, height })` | Gradient transition between section backgrounds |
| `Header` | `({ bg })` | Logo header |
| `PartBadge` | `({ children })` | Yellow sticker badge |
| `TitleBlock` | `({ badge, part1, part2, accent2, subhead })` | Badge + H1 (gradient accent) + optional subhead |
| `Letter` | `({ bg, paras, first })` | Paragraph stack on warm background |
| `Eyebrow` | `({ children, color })` | Small uppercase section label |
| `H2` | `({ children, center, size })` | Section heading |
| `CTAClose` | `({ intro, button, fine, bg })` | Dark CTA section with lime green button |
| `Signoff` | `({ bg })` | Lena's personal close + signature + P.S. |
| `OutLine` | `({ bg })` | Soft unsubscribe line |
| `Footer` | `()` | BREZ-inspired footer |
| `EmailShell` | `({ children, preheader, bg })` | Email wrapper (420px, font, preheader) |

Global constants: `MW = 420`, `LOGO = "../assets/brightkidco-logo-v2.png"`

### 0.4 product-showcase.jsx — Product Placement

| Variant | Used In | Description |
|---------|---------|-------------|
| `ProductShowcaseFull` | E4, E6 | Hero product — lifestyle hero + price + features + sub-grid + CTA |
| `ProductShowcaseMedium` | E5 | Inline card — side-by-side image + info |
| `ProductShowcaseSoft` | E2, E3 | Gentle end-of-email mention |

### 0.5 Email JSX Pattern

```jsx
const EmailN = () => {
  const c = window.FLOW1.eN;
  const BG_HERO = "#FFFBF0";
  const BG_DEF = "#EAF6F2";
  // ... per-section BG colors

  return (
    <EmailShell preheader={c.preheader} bg={BG_HERO}>
      <Header bg={BG_HERO} />
      {/* Hero image */}
      <FramedImage height={220} label="..." sublabel="..." shadow={6} />
      <TitleBlock badge={c.heroBadge} part1={c.h1a} part2={c.h1b} />
      <Band from={BG_HERO} to={BG_DEF} />
      {/* Content sections — each with own BG */}
      <Letter bg={...} paras={c.letterOpening} />
      <Band from={...} to={...} />
      {/* Definition, reframe, compare, expert, product */}
      <ProductShowcaseSoft/Medium/Full ... />
      <CTAClose intro={...} button={...} fine={...} />
      <Signoff />
      <OutLine />
      <Footer />
    </EmailShell>
  );
};
window.EmailN = EmailN;
```

---

## 1. ASSET INVENTORY

### 1.1 Component Library

**Location:** `/root/projects/email-ops/email-design/component-index.md`
**Total:** 922 components across 80 categories

### 1.2 Copy Files

**Location:** `/root/projects/brightkidco/outputs/copy/`
**Total:** 114+ emails across 22 flows

**File naming:**
- Level-specific: `welcome-01-e1-gf.md`
- Cross-level: `cart-02-e1.md`

**Structure (two halves):**
1. Email Copy: Subject, Preview, From Name, Body (Hook, Validation, Mechanism, Social Proof, Product Intro, Guarantee, CTA)
2. Creative Strategy: Big Idea, Layout Architecture (ASCII wireframe), Illustration/Contraption, Color Narrative, Typography, Decorative Furniture, Easter Egg, Motion, Level Calibration

### 1.3 Product Photos

**Location:** `/root/projects/brightkidco/raw/product-photos/`
**Total:** 29 images — accessories (5), branding (1), flat-lay (14), lifestyle (9)

### 1.4 Strategy + Demands

- S1 Full Email Strategy: `/root/projects/brightkidco/outputs/strategy/1-full-email-strategy.md`
- S2 Copy Strategy: `/root/projects/brightkidco/outputs/strategy/2-full-email-copy-strategy.md`
- S3 Segmentation: `/root/projects/brightkidco/outputs/strategy/3-segmentation-blueprint.md`
- Giuliano Demands: `/root/projects/brightkidco/demands/GIULIANO-DEMANDS.md`
- Design Reference: `/root/projects/brightkidco/plans/consolidated-design-skills-trimmed.md`

---

## 2. THE WORKFLOW (5 PHASES)

### Phase 1: Strategy Mapping
**Agents:** 5 (parallel)
**Time:** ~30 minutes

#### 2.1.1 Agent Assignments

| Agent | Flows | Emails |
|-------|-------|--------|
| 1 | welcome | 32 |
| 2 | winback-a, winback-b | 24 |
| 3 | pp-extended-ed, pp-at-risk, pp-education | 28 |
| 4 | browse, cart, checkout, site-abandonment, sunset | 10 |
| 5 | replenish-a/b/c, review-request, pp-direct-upsell, pp-extended-upsell, pp-level-detection, pp-mid-checkin, pp-mary-story, transactional | 20 |

#### 2.1.2 What Each Agent Receives

1. Copy files (full files with both halves)
2. Component index
3. Raw environment reference
4. Design reference (consolidated-design-skills-trimmed.md)
5. Product photos list
6. Giuliano demands
7. Flow-level design identity (Section 7)
8. Component library mapping (Section 8)
9. Conversion rules (Section 9)

#### 2.1.3 Strategy Map Output

One JSON entry per email. Full schema in Section 2.1.4.

**Output:** `/root/projects/brightkidco/outputs/strategy-map.json` — 114 entries

#### 2.1.4 Strategy Map JSON Schema

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
    ]
  },

  "components_from_library": {
    "hero": ["HERO-1 Curiosity Gap (L3811)"],
    "letter": ["4.1 Letter Section (L468)"],
    "definition": ["11.1 Stat Callout (L1034)"],
    "reframe": ["16.2 Tilted Sticker Creeds (L1561)"],
    "compare": ["25.1 Comparison Card (L2200)"],
    "expert": ["9.1 Expert Quote Card (L849)"],
    "cta": ["12.1 CTA Button (L1100)"]
  },

  "images": {
    "hero": "flat-lay/training-pant-cloud-raindrop-white.jpg",
    "lifestyle": "lifestyle/toddler-potty-ladder-yellow-woodland.png",
    "product_thumb": "flat-lay/training-pant-fox-red-white.jpg"
  },

  "content_sections_used": [
    "letterOpening", "definitionLabel/Title/Body",
    "reframeLabel/Title/Points/Closing",
    "compareLabel/Title/Cards",
    "expertLabel/Quote/By",
    "ctaIntro/Button/FinePrint"
  ],

  "copy_visual_direction": {
    "big_idea": "neurological signal pathway metaphor",
    "color_narrative": "70% warm / 30% green for GF",
    "illustration": "signal bridge SVG + 3-layer exploded view",
    "typography": "Questrial primary, Fraunces for serif accent",
    "level_calibration": "GF — 70% warm, generous line-height, 3-family pattern"
  },

  "conversion_rules": {
    "hero_cvp_visible": true,
    "cta_above_fold": true,
    "cta_tap_target_44px": true,
    "social_proof_first_scroll": true,
    "max_ctas": 3
  }
}
```

#### 2.1.5 Quality Gate

- [ ] All 114 entries exist
- [ ] Every entry has: structure, components_from_library, images, content_sections_used
- [ ] No duplicate sections_order within flows
- [ ] All images unique per flow
- [ ] Level-specific emails have level_calibration
- [ ] Cross-level emails have R1-R6 rules referenced

---

### Phase 2: Structure Assembly
**Agents:** 15 per wave
**Waves:** 5
**Time:** ~60-90 minutes

#### 2.2.1 Wave Structure

| Wave | Flows | Emails |
|------|-------|--------|
| 1 | welcome | 32 |
| 2 | winback-a, winback-b | 24 |
| 3 | pp-extended-ed, pp-at-risk, pp-education, pp-extended-upsell, pp-level-detection, pp-mid-checkin, pp-mary-story | 36 |
| 4 | browse, cart, checkout, site-abandonment, sunset | 10 |
| 5 | replenish-a/b/c, review-request, pp-direct-upsell, transactional | 12 |

#### 2.2.2 What Each Agent Receives

1. Strategy map entry
2. Copy file (full)
3. primitives.jsx, tokens.js, product-showcase.jsx
4. Reference email JSX
5. Product photos list
6. Flow-level design identity (Section 7)
7. Conversion rules (Section 9)

#### 2.2.3 What Each Agent Produces

One JSX file per email at:
```
/root/projects/brightkidco/outputs/emails/<flow>/<email-id>.jsx
```

#### 2.2.4 Assembly Rules

1. Use brand tokens — `const B = window.BRAND; const F = window.FONT;`
2. Use primitives — copy relevant functions into file
3. Follow EmailShell pattern
4. Inline styles only
5. 420px width (MW constant)
6. All sections from strategy map in correct order
7. Band transitions between sections
8. Include Header, Signoff, OutLine, Footer
9. Unique background colors per section
10. Register on window

#### 2.2.5 Section Background Palette

| Section | BG Color | Rationale |
|---------|----------|-----------|
| Hero | `#FFFBF0` | Warm, inviting |
| Letter | `#FFF6E2` | Warm, readable |
| Definition/Mechanism | `#EAF6F2` | Teal-tinted, science |
| Reframe | `#FFF6E2` | Warm, human |
| Compare | `#FFFBF0` | Neutral warm |
| Expert | `#F0EDF8` | Purple-tinted, authority |
| Product | `#FFFFFF` or `#FFFDF6` | Clean, product-forward |
| CTA | `B.ink` | Dark, contrast |
| Signoff | `B.ink` | Dark, personal |
| Footer | `#FFFFFF` | Clean |

#### 2.2.6 Quality Gate

- [ ] All JSX files exist
- [ ] Valid syntax
- [ ] Unique structures per flow
- [ ] All use brand tokens (no custom colors)
- [ ] All include Header, Signoff, OutLine, Footer

---

### Phase 3: Visual Verification
**Agents:** 15 per wave
**Waves:** 5
**Time:** ~60-90 minutes

#### 2.3.1 15-Point Verification Checklist

| # | Criterion | How to Check |
|---|-----------|--------------|
| 1 | JSX renders | Browser console, no errors |
| 2 | Layout matches strategy map | Sections in correct order |
| 3 | Images render | No broken images, correct paths |
| 4 | Brand colors | All match tokens.js |
| 5 | Brand fonts | Questrial body, Fraunces display |
| 6 | 420px width | Renders correctly |
| 7 | Above the fold | Logo + hero + CTA visible without scroll |
| 8 | CTA visibility | Primary CTA prominent, 44px+ tap target |
| 9 | Band transitions | Smooth gradients between sections |
| 10 | No repetition | Different from others in same flow |
| 11 | Copy alignment | JSX matches creative strategy from copy file |
| 12 | Component diversity | 5+ unique component types used |
| 13 | Flow identity | Matches flow-level design signature |
| 14 | Mobile readiness | Works at 320px width |
| 15 | Conversion rules | CTA above fold, max 3 CTAs, social proof in first scroll |

#### 2.3.3 Quality Gate

- [ ] All 114 reports exist
- [ ] All show PASS
- [ ] Failed emails flagged with specific fixes

---

### Phase 4: Revision
**Conditional:** Only if Phase 3 flags failures

1. Read verification report
2. Read JSX file
3. Apply specific fixes
4. Re-render and re-verify
5. Update report to PASS

---

### Phase 5: XHTML Compilation
**Agents:** 5 (parallel)
**Time:** ~30 minutes

1. Wrap JSX in HTML shell with React, ReactDOM, Babel
2. Include tokens.js, primitives.jsx, product-showcase.jsx
3. Compile JSX to HTML
4. Validate XHTML
5. Package with images

**Output:** `/root/projects/brightkidco/outputs/production/<flow>/<email-id>.xhtml`

---

## 3. STRUCTURE VARIETY RULES

Each email MUST have a unique structure. No two emails in the same flow share the same layout.

### 3.1 Hero Variation (assigned per flow)

| Hero Type | Description | Best For |
|-----------|-------------|----------|
| split-asymmetric | 2-column (35% illustration / 65% text) | Education-first flows |
| full-width-illustration | Full-width image above title | Product reveals |
| minimal-text | Text-only, strong typography | Mechanism explanations |
| stat-led | Big number + context as hero | Data-driven proof |
| quote-led | Testimonial as hero | Social proof flows |
| product-led | Product image as hero | Conversion flows |
| curiosity-gap | Question + partial answer | Browse/cart recovery |

### 3.2 Section Order Variation

- **Education-first:** hero → letter → definition → reframe → compare → expert → product → CTA
- **Story-first:** hero → story → mechanism → product → CTA
- **Product-first:** hero → product → features → testimonials → guarantee → CTA
- **Social-proof-first:** hero → testimonials → mechanism → product → CTA
- **Guarantee-first:** hero → guarantee → mechanism → testimonials → CTA

### 3.3 Column Layout

- Single-column (default)
- 2-column (feature grids)
- 3-column (comparison/testimonial cards)
- Asymmetric (sidebar + main)

### 3.4 Visual Density

- Image-heavy (3+ images)
- Text-heavy (letter blocks, minimal images)
- Balanced (1-2 images, mix)

### 3.5 CTA Placement

- Always: above the fold + bottom
- Vary mid-email: after mechanism, after social proof, after product, before guarantee, or none

### 3.6 Testimonial Treatment

- Cards (3 side by side)
- Stacked quotes (left border accent)
- Inline pull-quotes
- Full-width blocks
- Expert vs parent vary by purpose

---

## 4. COMPONENT DIVERSITY TRACKING

### 4.1 Component-to-Section Mapping

| Email Section | Component Categories | Examples |
|---------------|---------------------|----------|
| Hero | Hero (23), Visual Break (9) | HERO-1 Curiosity Gap, HERO-5 Mirror Moment |
| Badge/Label | Badge (5) | Part Badge, Eyebrow Label |
| Body Copy | Text/Letter (84) | Letter Section, Quote Card, Pull Quote |
| Mechanism/Definition | Stat/Data (11) | Stat Callout, Data Block, Research Cite |
| Reframe | Decorative (14), Text/Letter (84) | Sticker Creeds, Reframe Points |
| Comparison | Comparison (8), Text/Letter (84) | Comparison Card, Feature Grid |
| Social Proof | Testimonial (15), Social Proof (18) | Expert Quote Card, Testimonial Block |
| Product | Product Showcase (24), Hero (23) | Product Card, Lifestyle Hero |
| CTA | CTA (12) | CTA Button, CTA Block, CTA Close |
| Footer | Footer (8) | BREZ Footer, Minimal Footer |

### 4.2 Diversity Rules

1. **Minimum unique component categories per email:** 5 (out of 80)
2. **Maximum reuse within flow:** No component used in more than 50% of flow emails
3. **Hero variety per flow:** At least 2 different hero types across flow emails
4. **Testimonial variety per flow:** At least 2 different testimonial treatments
5. **CTA variety per flow:** At least 2 different CTA layouts

### 4.3 Component Usage Matrix

After Phase 1, generate a matrix:

```
Flow: Welcome (32 emails)
├── E1-GF: HERO-1, Letter, StatCallout, StickerCreeds, ComparisonCard, ExpertQuote, CTAClose
├── E1-L1: HERO-5, Letter, StatCallout, ReframePoints, TestimonialBlock, CTAClose
├── E1-L2: HERO-1, Letter, DataBlock, FeatureGrid, ExpertQuote, CTAClose
├── E1-L3: HERO-8, Letter, ResearchCite, PullQuote, TestimonialBlock, CTAClose
├── E2-GF: HERO-3, Letter, DefinitionBlock, StickerCreeds, ComparisonCard, ProductSoft, CTAClose
├── E2-L1: HERO-10, Letter, DefinitionBlock, ReframePoints, ExpertQuote, ProductSoft, CTAClose
...
```

This matrix is reviewed before Phase 2 to ensure diversity.

---

## 5. FLOW-LEVEL DESIGN IDENTITY

Each flow has a distinct visual signature so customers never feel like they're seeing the same email with different words.

### 5.1 Flow Design Signatures

| Flow | Primary Mood | Color Emphasis | Hero Type | Image Style | Density | CTA Tone |
|------|-------------|----------------|-----------|-------------|---------|----------|
| **Welcome** | Warm, inviting, educational | 70% warm / 30% green | split-asymmetric | lifestyle + diagram | balanced | gentle/inviting |
| **Cart Abandonment** | Gentle reminder, not pushy | 60% warm / 40% clean | stat-led | product-focused | light | soft/confident |
| **Browse Abandonment** | Curiosity-driven, discovery | 50% warm / 50% teal | curiosity-gap | product lifestyle | balanced | exploratory |
| **Checkout Abandonment** | Trust-building, reassurance | 60% warm / 40% green | product-led | product + trust | light | direct/reassuring |
| **Winback A** | Nostalgic, personal, story | 80% warm / 20% green | quote-led | lifestyle (emotional) | text-heavy | personal/inviting |
| **Winback B** | Fresh start, new chapter | 60% warm / 40% teal | curiosity-gap | lifestyle + product | balanced | hopeful/direct |
| **Post-Purchase Education** | Celebration, empowerment | 50% warm / 50% green | full-width-illustration | lifestyle (celebration) | image-heavy | educational/empowering |
| **Post-Purchase Check-in** | Care, support, ongoing | 60% warm / 40% green | minimal-text | lifestyle (support) | text-heavy | supportive/gentle |
| **Post-Purchase At-Risk** | Concern, understanding | 70% warm / 30% green | quote-led | lifestyle (empathy) | balanced | empathetic/reassuring |
| **Replenishment** | Routine, convenience | 50% warm / 50% clean | product-led | product-focused | light | practical/direct |
| **Review Request** | Gratitude, community | 60% warm / 40% teal | minimal-text | lifestyle (community) | light | grateful/simple |
| **Site Abandonment** | Gentle reminder | 60% warm / 40% clean | stat-led | product + lifestyle | light | soft/direct |
| **Sunset** | Final, respectful | 70% warm / 30% muted | quote-led | lifestyle (emotional) | text-heavy | respectful/final |
| **Transactional** | Clean, functional | 50% clean / 50% white | minimal-text | product (functional) | light | informational |

### 5.2 Flow Identity Rules

1. **Color emphasis stays consistent** within a flow (e.g., Welcome is always 70% warm)
2. **Hero type stays consistent** within a flow (e.g., Cart always uses stat-led)
3. **Image style stays consistent** within a flow (e.g., Winback A always uses emotional lifestyle)
4. **CTA tone stays consistent** within a flow (e.g., Sunset always uses respectful/final)
5. **Density varies** between emails within a flow (some heavier, some lighter)
6. **Section order varies** between emails within a flow

### 5.3 Cross-Flow Differentiation Test

Before Phase 2, verify:
- Welcome email ≠ Cart email ≠ Winback email at first glance
- Each flow's emails share a family resemblance
- No two flows look identical when placed side by side

---

## 6. GIULIANO DEMANDS INTEGRATION

### 6.1 Demands That Control Email Design

From GIULIANO-DEMANDS.md, these sections directly gate the design:

| Section | Demand | Design Impact |
|---------|--------|---------------|
| §1 Four-Level Segmentation | L1/L2/L3/GF must be visually distinct | Level-specific color emphasis, density, hero treatment |
| §1.2 GF 5 Sub-Groups | Sub-group B (diagnosis-rejecters) — no ASD language | Visual: symptom language only, no clinical imagery |
| §4 Cross-Level Calibration R1-R6 | R1: inclusive framing, R2: recognition anchors, R3: mechanism depth, R4: proof density, R5: CTA urgency, R6: social proof pattern | Each rule affects section presence and emphasis |
| §7 Voice — Lena | Honest, direct, empathetic, never fake-cheerful | Visual: warm tones, no bright/neon, no urgency |
| §8 No Urgency for L3 | ZERO urgency language | Visual: no countdown timers, no red CTAs, no "limited time" |
| §10 Inclusive Framing | "Whether...Or...If..." pattern | Hero text must accommodate inclusive copy |
| §12 Product Claims | Only evidence-based claims | Visual: stat callouts must cite sources |
| §15 Email Structure | Each email must follow e-commerce best practices | Above-fold clarity, CTA hierarchy, mobile-first |

### 6.2 Level-Specific Design Calibration

| Dimension | L1 (Sarah) | L2 (Lisa) | L3 (Maria) | GF (General) |
|-----------|------------|------------|------------|---------------|
| Color warmth | 50% warm | 40% warm | 30% warm | 70% warm |
| Hero type | split-asymmetric | stat-led | minimal-text | split-asymmetric |
| Image density | balanced | balanced | light | balanced |
| CTA urgency | moderate | low | ZERO | low |
| Testimonial pattern | 1-family | 2-family | 1-family (dignity) | 3-family |
| Typography density | standard | standard | generous | generous |
| Mechanism depth | standard | deep | deep | standard |

### 6.3 Cross-Level Calibration Rules

| Rule | Description | Design Impact |
|------|-------------|---------------|
| R1 | Inclusive framing | Hero must accommodate "Whether...Or...If..." text |
| R2 | Recognition anchors | Early sections must validate common experiences |
| R3 | Mechanism depth | Definition section present in all emails |
| R4 | Proof density | Social proof present in all emails |
| R5 | CTA urgency | CTA tone matches level urgency |
| R6 | Social proof pattern | GF uses 3-family, L1-L3 use 1-2 family |

---

## 7. COPY-TO-DESIGN ALIGNMENT

### 7.1 Creative Strategy Extraction

Every copy file has a "Creative Strategy — Visual Direction" section. The strategy map MUST extract:

1. **Big Idea** — the visual metaphor for the email
2. **Layout Architecture** — the ASCII wireframe from the copy file
3. **Custom Illustration** — any contraptions or SVGs described
4. **Color Narrative** — how colors shift across the flow
5. **Typography Treatment** — any special typography rules
6. **Decorative Furniture** — dividers, bullets, borders
7. **Hidden Detail** — easter eggs (optional)
8. **Motion/Animation** — GIF animations (if applicable)

### 7.2 Alignment Verification

Phase 3 adds this check:
- Does the JSX layout match the ASCII wireframe from the copy file?
- Does the JSX use the colors described in the color narrative?
- Does the JSX include the custom illustrations described?
- Does the JSX follow the typography treatment?

### 7.3 When Creative Strategy Conflicts with Flow Identity

Priority order:
1. Brand tokens (LAW)
2. Flow-level design identity (Section 5)
3. Creative strategy from copy file
4. Strategy map structure

If the copy file says "use blue" but tokens.js says "teal" — use teal.
If the copy file says "stat-led hero" but flow identity says "split-asymmetric" — use split-asymmetric.

---

## 8. COMPONENT LIBRARY MAPPING

### 8.1 How to Find Components

Agents receive the component index (`component-index.md`). To find the right component:

1. **Identify the email section** (hero, body, social proof, product, CTA, footer)
2. **Map to component category** (see Section 4.1)
3. **Browse the category** in the index
4. **Select 1-2 components** per section

### 8.2 Category Quick Reference

| Category | Count | Use For |
|----------|-------|---------|
| Hero | 23 | Hero sections — curiosity gap, data shock, permission open, etc. |
| Badge | 5 | Part badges, eyebrow labels |
| Text/Letter | 84 | Body copy, quotes, callouts, blocks |
| Social Proof | 18 | Testimonials, reviews, social indicators |
| Product Showcase | 24 | Product cards, feature grids, lifestyle blocks |
| CTA | 12 | Call-to-action buttons, blocks, sections |
| Footer | 8 | Email footers, unsubscribe, legal |
| Testimonial | 15 | Quote blocks, parent stories, expert quotes |
| Stat/Data | 11 | Statistics, research citations, data visualizations |
| Visual Break | 9 | Dividers, separators, transitions |
| Decorative | 14 | Ornaments, flourishes, stickers |
| Comparison | 8 | Comparison cards, feature comparisons |

### 8.3 Component Selection Rules

1. **Minimum 5 unique categories** per email
2. **Maximum 2 components from same category** per email
3. **Hero section:** Choose from Hero (23) — pick ONE per email
4. **Body sections:** Choose from Text/Letter (84) — mix types
5. **Social proof:** Choose from Testimonial (15) + Social Proof (18) — vary treatment
6. **Product:** Choose from Product Showcase (24) — match email purpose
7. **CTA:** Choose from CTA (12) — always include primary CTA

---

## 9. CONVERSION-SPECIFIC DESIGN RULES

### 9.1 Above-the-Fold Requirements

Every email MUST have within the first viewport (before scrolling):
- Brand logo (Header component)
- Hero section with clear value proposition
- Primary CTA (or clear path to CTA)

### 9.2 CTA Specifications

| Property | Requirement |
|----------|-------------|
| Minimum tap target | 44px height (mobile) |
| Button text | 3-5 words, action-oriented |
| Maximum CTAs per email | 3 (primary, secondary, footer) |
| Primary CTA position | Above the fold + bottom |
| Button style | Rounded (borderRadius: 999), ink bg, lime text |
| Arrow indicator | "→" after button text |

### 9.3 Mobile Requirements

| Property | Requirement |
|----------|-------------|
| Width | 420px (MW constant) |
| Minimum font size | 11px (footer), 14px (body) |
| Line height | 1.6+ for body text |
| Touch targets | 44px minimum |
| Image scaling | 100% width, auto height |

### 9.4 Social Proof Placement

- Social proof must appear within the first scroll (before second CTA)
- Testimonials must be attributed (name, role, context)
- Expert quotes must cite credentials
- 3-family pattern for GF (three different family perspectives)

### 9.5 Trust Signals

- 60-day guarantee badge in product sections
- "No rush. No pressure." in CTA fine print
- "Reply to this email" in signoff
- Physical address in footer

---

## 10. DESENSITIZATION PREVENTION

### 10.1 The Problem

If a customer receives Welcome E1, then Cart E1, then Browse E1 — they must feel like THREE DIFFERENT COMMUNICATIONS, not the same email with different words.

### 10.2 The Solution: Flow-Level Visual Signatures

Each flow has a unique combination of:
- Color emphasis (warm/cool/balanced ratio)
- Hero type (assigned once per flow)
- Image style (lifestyle/product/minimal)
- Density (light/balanced/heavy)
- CTA tone (gentle/direct/urgent)

This means:
- Welcome = warm, split-asymmetric, lifestyle, balanced, gentle
- Cart = warm-clean, stat-led, product, light, soft
- Winback = warm, quote-led, emotional lifestyle, text-heavy, personal

Even if the same section types appear (letter, mechanism, CTA), the visual treatment differs.

### 10.3 Cross-Flow Differentiation Test

Before Phase 2, create a "first glance" test:
1. Take one email from Welcome, one from Cart, one from Winback
2. Place them side by side
3. Verify they look like different types of communications
4. If they look similar → adjust flow-level design signatures

### 10.4 Within-Flow Variation

Within a flow, emails also vary:
- Hero type stays consistent (flow signature)
- But section order changes
- Image assignments change
- Density shifts (some lighter, some heavier)
- CTA placement varies

This prevents:
- Customer seeing E1, E2, E3 and feeling "same email again"
- Mechanism fatigue (same layout for definition section)
- Testimonial fatigue (same quote treatment)

---

## 11. WHAT WE DO NOT TOUCH

- Graveyard system — Phase 5 handles
- Klaviyo integration — separate concern
- A/B test variants — after production locked
- Image generation — use existing product photos
- Copy writing — already written and validated

---

## 12. ESTIMATED SCALE

| Metric | Value |
|--------|-------|
| Total emails | ~114 |
| Total Ralph waves | ~10 |
| Estimated time | 3-4 hours |
| Strategy map entries | 114 JSON objects |
| JSX files | 114 |
| Verification reports | 114 |
| XHTML files | 114 |
| Critical path | Phase 1 → Phase 2 → Phase 3 → Phase 5 |

---

## 13. RISK MITIGATION

| Failure | Mitigation |
|---------|------------|
| Wrong JSX structure | Strategy map provides exact section order |
| Wrong colors | Tokens.js is only color source |
| Same layout copied | Strategy map enforces unique structure |
| Broken images | Strategy map assigns exact paths |
| Component repetition | Diversity tracking (Section 4) |
| Flow identity lost | Flow signatures enforced (Section 5) |
| Demands violated | Explicit mapping (Section 6) |
| Copy-design mismatch | Creative strategy extraction (Section 7) |
| Conversion failure | Conversion rules enforced (Section 9) |
| Customer desensitization | Cross-flow differentiation test (Section 10) |
| JSX syntax errors | Quality gate checks syntax |
| Verification misses | 15-point checklist, systematic |

---

## 14. EXECUTION COMMANDS

### Start Phase 1
```bash
# Write strategy map task to kanban
# Resume ralph-loop cron
```

### Monitor Progress
```bash
# Strategy map completeness
cat /root/projects/brightkidco/outputs/strategy-map.json | python3 -c "import json,sys; d=json.load(sys.stdin); print(f'{len(d)} emails mapped')"

# JSX file count
find /root/projects/brightkidco/outputs/emails/ -name "*.jsx" | wc -l

# Verification report count
find /root/projects/brightkidco/outputs/verification/ -name "*.md" | wc -l

# Component diversity check
python3 -c "
import json
with open('/root/projects/brightkidco/outputs/strategy-map.json') as f:
    data = json.load(f)
flows = {}
for e in data:
    f = e['flow']
    comps = set()
    for cat in e.get('components_from_library', {}).values():
        comps.update(cat)
    flows.setdefault(f, []).append((e['id'], len(comps), comps))
for f, emails in flows.items():
    avg = sum(len(c) for _,_,c in emails) / len(emails)
    print(f'{f}: {len(emails)} emails, avg {avg:.1f} unique components')
"
```

### Quality Gates
```bash
# Phase 1 → 2: All 114 entries + component diversity matrix
# Phase 2 → 3: All 114 JSX files + flow identity test
# Phase 3 → 5: All 114 reports PASS + conversion rules verified
```
