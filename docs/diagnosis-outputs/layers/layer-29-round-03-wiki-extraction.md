# L29 R3: Visual Calibration — Wiki Extraction

**Task:** t_117b8546 — L29 R3: Visual Calibration — Wiki Extraction
**Date:** May 25, 2026
**Assignee:** ops15

---

## 1. Wiki Sections Read

| # | Wiki Path | Type | Relevance |
|---|-----------|------|-----------|
| 1 | `/root/wiki/about-me/brightkidco-project-overview.md` | Project overview | Brand identity, avatar levels, client info |
| 2 | `/root/wiki/skills-tools/memory-drops/brightkidco-is-a-dtc-ecommerce-brand-for-wiki-ingestion-ex--20260523-173000.md` | Memory drop | DTC scope rules (exclude cold email, client acquisition) |
| 3 | `/root/wiki/skills-tools/memory-drops/brightkidco-project-rootprojectsbrightkidco-email-mar--20260523-112608.md` | Memory drop | Project context (Giuliano, training underwear, Klaviyo) |
| 4 | `/root/wiki/tenza-marketing/_hub-business-strategy/__enqueued__/tenza-visual-identity.md` | Visual identity doc | Full design system: color palette, typography, design rules |
| 5 | `/root/wiki/tenza-marketing/_hub-email-marketing/__enqueued__/vawzine-6-typography-hierarchy-and-visual-composition.md` | Protocol (transcript) | Typography basics, serif/sans-serif, visual hierarchy, tracking, alignment |
| 6 | `/root/wiki/marketing-copy/copywriting/__enqueued__/tenza-email-design-standards.md` | Design standards | 3 pillars (ease of click, skimmability, branding), transitions, email type protocols, technical specs |
| 7 | `/root/wiki/tenza-marketing/_hub-email-marketing/__enqueued__/SOP-email-design-master.md` | SOP (63KB, high confidence) | Complete email design system: mobile-first, visual hierarchy, CTA design, dark mode, accessibility |
| 8 | `/root/wiki/tenza-marketing/_hub-email-marketing/__enqueued__/SOP-email-design-standards-and-template-build.md` | SOP (24KB, high confidence) | Design standards, template build, image strategy, QA checklist |
| 9 | `/root/projects/brightkidco/archive-20260523-1139/strategy/brand-brief.md` | Project strategy brief | Brand constants, font/colors, avatar levels, offers, Lena voice rules |
| 10 | `/root/projects/brightkidco/archive-20260523-1139/diagnosis/layer-38-brand-constants.md` | Previous diagnosis | All brand constants: pricing, colors, font, URLs, social, footer |
| 11 | `/root/projects/brightkidco/archive-20260523-1139/diagnosis/layer-29-visual-calibration.md` | Previous Layer 29 (33KB) | Complete visual calibration per level (L1/L2/L3/GF) |

---

## 2. Extracted Content

### 2.1 BrightKidCo Brand Visual Constants (from brand-brief + Layer 38)

**Font:**
- Family: Questrial (mandatory for ALL assets)
- Weight: 400 ONLY — never bold for body text
- Headlines: 24-32px desktop / 20-24px mobile, weight 400
- Body: 16px mobile / 17px desktop, weight 400
- Captions: 13-14px, weight 400
- Line-height: 1.5 minimum

**Color Palette (locked):**

| Color | Hex | Role |
|-------|-----|------|
| Brand-Green | `#039902` | Primary — CTAs, accents, brand identity |
| Mint | `#DBFFCD` | Highlight boxes, soft backgrounds |
| Cream | `#FBF7EB` / `#FAF5E8` | Card backgrounds, section warmth |
| Yellow | `#F5C84B` / `#F5CB5C` | Badges, stars, trust signals |
| Gray | `#9AA8A7` | Subtle text, strikethrough |
| Dark Text | `#1A1A1A` | Primary body text |
| Body Gray | `#4A4A4A` | Sub-captions, italic notes |
| Off-white BG | `#FAF9F7` | Overall email background |

**Design Patterns (cross-level baseline):**
- Cards: subtle shadows, border-radius 12-16px
- Whitespace: plenty — section spacing 48-64px
- Separators: "—" dash for list items, not bullets
- CTAs: min 48px height, full-width mobile
- Max width: 600px
- Mobile-first: 60%+ traffic is mobile

**Universal Image Rules (DOC1 §25):**
- DO: Real parents and real kids in real homes; soft natural lighting; diverse representation; kids 3-10 years; hands/silhouettes/half-faces; product context visible; calm, real-life mood
- DON'T: Stock neurotypical happy families; bright cartoon colors; cleaning chaos drama; children's faces full-on; "Before/After" with shame implications; pull-ups staged as "evil"; NO cartoon kid illustrations; NO infantilized "Big Kid Underwear" graphics

### 2.2 Visual Calibration Per Level (from previous Layer 29 run — 33KB document)

The archived Layer 29 document provides a complete visual calibration system. Key findings:

**Level 1 (Verbal 3-5yr, 35% audience, 70% hope):**
- Design Tone: OPTIMISTIC BUT GROUNDED
- Hero imagery: 3-5 year olds playing, learning, succeeding; Pre-K context
- Color vibrancy: MOST VIBRANT — green dominant, cream warm, yellow present (Pre-K vibe)
- Short scannable sections, more whitespace, "steps" visualizations
- NO: heavy struggle, older kids, clinical/sterile, non-verbal profiles

**Level 2 (Mixed 5-7yr, 40% audience, 40% hope):**
- Design Tone: CALM, PROFESSIONAL, SCIENCE-ADJACENT
- Hero imagery: 5-8 year olds; calm, focused; OT/therapy-adjacent contexts
- Color: RESTRAINED — mint more prominent (science-adjacent), soft gray prominent (credibility)
- Medium-length sections; science callout boxes (Kelly Mahler quotes); mechanism diagrams
- NO: toddler imagery, Pre-K energy, bright oversaturated colors

**Level 3 (Non-verbal 6-10+, 25% audience, 20% hope):**
- Design Tone: QUIET WARMTH + CLINICAL REALITY
- Hero imagery: 7-12 year olds; AAC devices in background OK; sensory tools visible; half-faces/hands/silhouettes
- Color: MUTEST palette — less saturation, more restraint; soft grays prominent
- Long sections OK (slow reader); LOTS of whitespace (sensory-friendly); dignity anchors
- DIGNITY-FIRST IS NON-NEGOTIABLE
- NO: young children, bright cartoons, happy-family stock, cheerleader visuals, diapers, toilet prominently shown

**General Fallback (~50% real volume):**
- Design Tone: INCLUSIVE WARMTH
- Hero imagery: age-diverse (3, 5, 7, 9); diverse families/ethnicities; mix of settings
- Color: BALANCED — neither as vibrant as L1 nor muted as L3
- Multiple visual entry points; migration anchors (subtle); three-family testimonial format
- DELIBERATELY VARY across mail series

### 2.3 Email Design Standards (from wiki)

**The 3 Pillars of Email Design (Tenza standards, transferable):**
1. **Ease of Click:** Button above fold, large buttons (min 2" mobile), clear CTA text, centered CTAs, high contrast
2. **Skimmability:** Simplicity first, clear sections, minimal copy, bold headlines, one main point per email
3. **Branding:** Client brand colors only, client brand fonts only, branded graphics, consistent header/footer

**Technical Specs:**
- Email width: 600px
- Mobile breakpoint: 480px
- Max email file size: under 100KB (avoid clipping)
- Image format: JPG (photos) / PNG (graphics with transparency)
- GIF max size: under 500KB
- Text over images: Avoid — use HTML text instead
- Dark mode check: Always test light + dark mode before sending

**Design Transitions:**
1. Gradient (The Fade) — linear gradient from image to solid background
2. Wave/Curved Shape (The Modern Curve) — custom vector curve in Figma
3. Blob (The Organic Divider) — soft, amorphous shape as background element

### 2.4 Typography & Visual Hierarchy (from wiki — Vawzine transcript)

**Typography System:**
- Serif styles: humanist, transitional, modern, slab (slab used for commercial; modern for editorial)
- Sans-serif: humanist (warm), transitional (tech), geometric (popular now, big titles)
- Serif fonts easier to read in long text
- Cursives: script, brush (avoid for premium), black letter (gothic)

**Visual Hierarchy Principles:**
- 3 levels: Primary (title — biggest), Secondary (extra info — smaller), Tertiary (main text — readable)
- Proportion: important things are bigger
- Contrast: different colors, sizes, weights to signal importance
- Tracking: larger text needs more tracking; smaller text needs less
- Alignment: flush-left most natural; avoid widows; center needs line-length variation

### 2.5 Email Design Master SOP (63KB, high confidence)

**Core principle:** If it doesn't work on a 375px-wide iPhone screen, it doesn't work anywhere.

**Key Specifications:**
- H1: 24-32px mobile / 32-48px desktop, Bold (700)
- H2: 20-24px mobile / 24-32px desktop, Semi-Bold (600)
- Body: 16px minimum, Regular (400), line-height 1.4-1.5
- CTA: 16-18px, Bold (700)
- Footer/Legal: 11-12px

**Layout Patterns:**
- Reverse Triangle: Headline (30-40%) → Supporting Copy (5-10%) → Product (10-15%) → CTA (15-20%) → Footer (<5%)
- F-Pattern: Top-left logo → headline → left column details → right/bottom CTA
- Z-Pattern: Top-left logo+headline → top-right hero → bottom-left value props → bottom-right CTA

**Dark Mode Strategy:**
- @media (prefers-color-scheme: dark) with !important overrides
- Dark backgrounds (#1A1A1A), light text (#E0E0E0), white headlines (#FFFFFF)
- Medium-gray borders (#999999) survive inversion
- NEVER: white text on colored backgrounds, pure black text, delicate light borders

### 2.6 Email Design Standards & Template Build SOP (24KB)

**Template System:**
- 7 master templates: Campaign, Welcome Flow, Abandoned Cart, Post-Purchase, Product Nurture, Newsletter, Plain Text
- Naming: `{brand}-{type}-{variant}-v{number}`
- Wireframing: 600px frame in Figma, build hero→bridge→product→CTA→footer

**Image Strategy:**
- Text-to-image ratio: 40-60% text minimum
- Hero images: 1200px width at 2x (600px display), compress
- GIFs: max 1.5-2 seconds, compress with TinyPNG
- Background images: VML for Outlook + CSS fallback (avoid critical info in BG images)

**CTA Design:**
- One primary action per email
- Above the fold primary + bottom reinforced
- Formula: Action Verb + Benefit + (Optional) Urgency
- NEVER "Shop Now" — thematic and benefit-driven CTAs only

---

## 3. Summary of Findings for Visual Calibration

The wiki contains **extensive** visual calibration content for BrightKidCo:

1. **Brand constants are fully locked** — Questrial font, 8-color palette, 600px width, mobile-first. No ambiguity.

2. **Per-level visual calibration is complete** — The archived Layer 29 (33KB) already defines hero imagery, color accent weighting, whitespace density, section length, design tone, and emotional temperature for each of the 4 avatar levels.

3. **Universal image rules are explicit** — DOC1 §25 defines DO/DON'T for imagery: real parents/kids, soft lighting, diverse, no cartoons, no stock happy families, no shame implications.

4. **Email design SOPs are comprehensive** — Two SOPs (63KB + 24KB) provide complete technical specs: typography scale, CTA design, dark mode strategy, image handling, template library, QA checklist.

5. **Visual hierarchy is well-documented** — Reverse triangle, F-pattern, Z-pattern layouts; 3 levels of visual meaning; proportion/contrast/alignment rules.

6. **Critical absolute rules:**
   - NO cartoon kid illustrations — ever, at any level
   - NO infantilized "Big Kid Underwear" graphics
   - DIGNITY-FIRST for Level 3 is non-egotiable
   - NEVER use "Level 1/2/3" in copy — backend logic only
   - CTA buttons: 4.5:1 contrast ratio minimum (WCAG AA)

---

## 4. Gaps (What's Missing from the Wiki)

| Gap | Severity | Notes |
|-----|----------|-------|
| **BrightKidCo-specific email templates** | Medium | Wiki has generic email design SOPs but no BKC-specific Klaviyo templates built yet |
| **Actual hero images** | High | Image direction rules exist but no actual curated/selected hero images for each level |
| **Dark mode testing results** | Medium | Rules exist but no actual dark mode rendering tests documented for BKC colors |
| **CTA contrast verification** | Medium | BKC green (#039902) contrast ratio against cream/white not measured with WebAIM |
| **Character/mascot guidelines** | High | No wiki content about BKC characters, mascots, or illustration style (brand explicitly avoids cartoons) |
| **Photography style guide** | Medium | Direction rules exist but no actual photo shoot brief or stock photo curation |
| **Email width testing across clients** | Low | 600px standard assumed but no BKC-specific rendering test results |
| **Figma template files** | Medium | Wireframing protocol documented but no actual Figma files for BKC |
| **Brand-Green dark mode behavior** | Medium | Layer 29 notes green may shift in dark mode but no actual test data |

---

## 5. Source File Paths

- `/root/wiki/about-me/brightkidco-project-overview.md`
- `/root/wiki/skills-tools/memory-drops/brightkidco-is-a-dtc-ecommerce-brand-for-wiki-ingestion-ex--20260523-173000.md`
- `/root/wiki/skills-tools/memory-drops/brightkidco-project-rootprojectsbrightkidco-email-mar--20260523-112608.md`
- `/root/wiki/tenza-marketing/_hub-business-strategy/__enqueued__/tenza-visual-identity.md`
- `/root/wiki/tenza-marketing/_hub-email-marketing/__enqueued__/vawzine-6-typography-hierarchy-and-visual-composition.md`
- `/root/wiki/marketing-copy/copywriting/__enqueued__/tenza-email-design-standards.md`
- `/root/wiki/tenza-marketing/_hub-email-marketing/__enqueued__/SOP-email-design-master.md`
- `/root/wiki/tenza-marketing/_hub-email-marketing/__enqueued__/SOP-email-design-standards-and-template-build.md`
- `/root/projects/brightkidco/archive-20260523-1139/strategy/brand-brief.md`
- `/root/projects/brightkidco/archive-20260523-1139/diagnosis/layer-38-brand-constants.md`
- `/root/projects/brightkidco/archive-20260523-1139/diagnosis/layer-29-visual-calibration.md`

---

*Generated: May 25, 2026*
*Wiki sections navigated: 11*
*Total extracted content: ~150KB of source material reviewed*
