# BrightKidCo — Email JSX Production Plan v5.0

> **Phase: Email JSX Design Production** — Produce complete JSX email designs for 125 emails across 22 flows
> Generated: June 9, 2026 | Engine: Ralph Loop v4.0.0
> Source convergence: Copy files (125 .md), Giuliano Demands, Design Reference, Component Library (922), Primitives JSX, Product Photos (29)
> Output root: `/root/projects/brightkidco/outputs/`
> Plan format: Ralph Loop compatible (Execution Config, Golden Rules, Sections, Quality Gates, Risk Points)

---

## Table of Contents

1. [Execution Config](#execution-config)
2. [Golden Rules](#golden-rules)
3. [Source Files](#source-files)
4. [Flow Inventory](#flow-inventory)
5. [Flow Design Signatures](#flow-design-signatures)
6. [Level Calibration](#level-calibration)
7. [Component Mapping](#component-mapping)
8. [Phase 0 — Strategy Mapping](#phase-0)
9. [Phase 1 — Wireframe Production](#phase-1)
10. [Phase 2 — JSX Production](#phase-2)
11. [Phase 3 — Visual Verification](#phase-3)
12. [Phase 4 — Revision](#phase-4)
13. [Phase 5 — XHTML Compilation](#phase-5)
14. [Quality Gates](#quality-gates)
15. [Risk Mitigation](#risk-mitigation)
16. [Wave Distribution](#wave-distribution)

---

## Purpose

This plan is the convergence point where strategy, demands, research, copy, and design all meet. Every email the customer sees flows through this pipeline. The copy files (125 markdown documents across 22 flows) contain the approved words. The Giuliano demands (2010 lines) contain the non-negotiable rules. The component library (922 components across 80 categories) provides the visual vocabulary. The primitives JSX library provides the shared code infrastructure. This plan orchestrates the transformation of all of that into 125 rendered, verified, production-ready JSX emails.

The customer never sees a strategy document. They never see a wireframe. They see the email. This plan ensures every email is structurally sound, visually verified, brand-compliant, copy-faithful, and production-ready.

**Total emails: 125** across **22 flows** (22 flow directories, excluding analysis folder).

---

## Execution Config

| Parameter | Value |
|-----------|-------|
| Engine | Ralph Loop v4.0.0 |
| Operators | ops, ops2 through ops15 (15 agents per wave) |
| Total tasks | ~670 individual tasks across 6 phases |
| Estimated waves | 42 waves total |
| Output root | `/root/projects/brightkidco/outputs/` |
| Wireframe root | `/root/projects/brightkidco/outputs/wireframes/` |
| JSX root | `/root/projects/brightkidco/outputs/emails/` |
| Verification root | `/root/projects/brightkidco/outputs/verification/` |
| Production root | `/root/projects/brightkidco/outputs/production/` |
| Strategy map | `/root/projects/brightkidco/outputs/strategy-map.json` |
| Max agents per wave | 15 |
| Wave cadence | ~2 min per wave (Ralph Loop cron) |
| Total estimated time | ~84 minutes (42 waves x 2 min) |

**Phase breakdown:**

| Phase | Tasks | Waves | Agents | Description |
|-------|-------|-------|--------|-------------|
| Phase 0 | 5 | 1 | 5 | Strategy mapping |
| Phase 1 | 125 | 9 | 15/wave | Wireframe production |
| Phase 2 | 125 | 9 | 15/wave | JSX production |
| Phase 3 | 125 | 9 | 15/wave | Visual verification |
| Phase 4 | variable | variable | 15/wave | Revision (conditional) |
| Phase 5 | 125 | 9 | 5/wave | XHTML compilation |

---

## Golden Rules

These 14 rules are MANDATORY. Violation of any rule means the output is rejected. No exceptions. No interpretation. No "I think this is close enough."

### Rule 1: Brand Tokens Are LAW — No Custom Colors

**Source:** `/root/projects/brightkidco/raw/BKCO - EMAIL MARKETING/welcome-flow/primitives.jsx` (lines 7-8), Giuliano Demands

Every color in every JSX file MUST come from the brand token set. No custom hex values. No CSS color names. No "close enough" approximations. The complete token set:

| Token | Hex | Usage |
|-------|-----|-------|
| B.teal | #2BAEB4 | Primary accent, CTAs, links, eyebrow labels |
| B.green | #5DD07A | Success states, secondary accent, feature pills |
| B.ink | #1F2D2F | Primary text, borders, dark backgrounds, card outlines |
| B.soft | #4A6568 | Secondary text, body copy, muted descriptions |
| B.cream | #FBF7F1 | Warm backgrounds, card fills, section separators |
| B.paper | #FFFFFF | Page background, card backgrounds, contrast areas |
| B.muted | #8A9B9D | Tertiary text, legal, footnotes, preheader |
| B.tealDeep | darker teal | Eyebrow labels, secondary teal usage |
| B.gradient | linear-gradient(135deg, #2BAEB4 0%, #5DD07A 100%) | Gradient text, decorative bands |
| B.gradientText | CSS gradient text | Title accent words |
| #D8F57C | Lime green | CTA button text on dark backgrounds |
| #FFD866 | Warm yellow | Sticker/badge backgrounds, part badges |
| #F6F2EA | Warm off-white | Preheader bar background |
| #FFFDF6 | Warm white | Card interior backgrounds |
| #FAF7F0 | Light cream | Feature pill backgrounds |
| #B8CACD | Light gray-blue | CTA intro text on dark backgrounds |
| #8FAFB2 | Muted blue-gray | Signoff secondary text |
| #1F2A2C | Near-black teal | Signoff card background |
| #2F3D40 | Dark teal-gray | Signoff card border |
| #3A4547 | Dark gray-teal | Signoff dashed borders |

**Forbidden:** Any hex value not in this table. If a design need requires a color not listed, escalate to the human operator — do not invent colors.

### Rule 2: Raw Environment Is Source of Truth

**Source:** `/root/projects/brightkidco/raw/BKCO - EMAIL MARKETING/welcome-flow/` (all files)

The raw JSX environment contains the canonical reference implementations. These files define the exact visual language, component patterns, and code structure that all 125 emails must follow. The agent MUST read these files before producing any output:

- `primitives.jsx` (275 lines) — Shared components: ImgFrame, FramedImage, Band, Header, PartBadge, TitleBlock, Letter, Eyebrow, H2, CTAClose, Signoff, OutLine, Footer, EmailShell.
- `product-showcase.jsx` (270 lines) — Three product placement variants: ProductShowcaseFull, ProductShowcaseMedium, ProductShowcaseSoft.
- `content.js` (321 lines) — Welcome flow content data structure showing how copy maps to JSX props.
- `content-flow2.js` — Flow 2 content data showing cross-level content patterns.
- `app.jsx` — Application entry point showing EmailShell wrapping pattern.
- `design-canvas.jsx` — Design canvas reference showing layout composition.
- `emails-2-3.jsx` — Emails 2-3 implementations showing mid-flow patterns.
- `emails-4-5.jsx` — Emails 4-5 implementations showing product-introduction patterns.
- `email-6.jsx` — Email 6 implementation showing conversion-focused patterns.
- `flow2-emails.jsx` — Flow 2 email implementations showing cross-flow variation.

**The raw environment is the DNA.** Every new JSX file must feel like it belongs in this family. Same border-radius language (20px cards, 999px pills, 14px small cards). Same shadow pattern (solid ink offset shadows: 4px 4px 0 B.ink). Same spacing rhythm (22px horizontal padding, 20px section gaps). Same width constraint (420px max-width via MW).

### Rule 3: Wireframe Is the Blueprint — JSX Follows Wireframe Exactly

**Source:** Phase 1 output feeds Phase 2 input

The wireframe produced in Phase 1 is the authoritative blueprint for Phase 2. The JSX agent must translate the wireframe section-by-section, pixel-for-pixel, without deviation. If the wireframe specifies borderRadius: 20, the JSX must have borderRadius: 20. If the wireframe specifies padding: "22px 14px 20px", the JSX must have padding: "22px 14px 20px".

**What the wireframe defines that JSX must honor:**
- Exact hex values for every color (from Technique Specs section)
- Exact padding/margin values (from Technique Specs section)
- Exact border-radius values (from Technique Specs section)
- Exact font sizes and weights (from Technique Specs section)
- Exact layout structure (from Layout ASCII section)
- Exact copy text (from Copy Blocks section — VERBATIM)
- Exact image placements and descriptions (from Image Briefs section)
- Exact component choices (from Technique Specs section — mapped to primitives.jsx components)

**What JSX agents may NOT change:**
- Any color value, spacing value, border-radius value, copy text, image placement, or overall layout sequence

**What JSX agents MUST add that wireframes do not contain:**
- Exact JSX syntax (imports, component calls, style objects)
- Exact prop values matching wireframe specs
- Inline styles (not CSS classes — email clients require inline)
- Window object assignments for shared state

### Rule 4: Copy Is VERBATIM in Wireframes — Never Rewritten

**Source:** `/root/projects/brightkidco/outputs/copy/` (125 .md files)

Every word of copy in the 125 copy files is approved, tested, and finalized. The wireframe agent must extract the exact text from the copy file and place it in the Copy Blocks section. The JSX agent must place that exact text in the JSX. No paraphrasing. No "improving." No "making it flow better." No adding words. No removing words.

**The copy chain is:**
1. Copy file (approved source of truth) -> 2. Wireframe Copy Blocks (verbatim extraction) -> 3. JSX text content (verbatim placement)

If a copy file contains: "Whether your child is just starting to show signs" — that exact string must appear in the wireframe Copy Blocks, and that exact string must appear in the JSX. Character for character. Space for space.

**Exception:** If the copy file contains markdown formatting (bold markers, emphasis markers), the wireframe preserves the raw markdown, and the JSX converts markdown to JSX equivalents (strong, em tags). The WORDS remain verbatim; only the formatting wrapper changes.

### Rule 5: Every Email Must Have Unique Structure

**Source:** Giuliano Demands, Design Reference

No two emails in the same flow may share the same visual structure. If Welcome E1 uses a Letter + Quote Card + CTA pattern, Welcome E2 must use a different pattern. The component diversity requirement (5+ unique component categories per email) enforces this at the micro level, but the macro layout must also differ.

**Within a flow:** Each email must use a different hero type, different text treatment, different social proof style, different mechanism/education pattern, different CTA presentation.

**Across flows:** Flows with the same purpose (e.g., Replenish A/B/C) must differentiate through layout density, color emphasis, and component selection.

### Rule 6: Flow-Level Design Identity Must Be Maintained

**Source:** Giuliano Demands, Design Reference

Each flow has a design signature defined in the Flow Design Signatures table. Every email in a flow must honor its flow's signature while still achieving Rule 5's uniqueness requirement.

**The tension:** Emails within a flow must be unique from each other (Rule 5) but must all belong to the same family (Rule 6). The resolution: vary the layout structure and component selection while maintaining the same color emphasis, mood, density, and CTA tone.

### Rule 7: Visual Verification Before Delivery — No Exceptions

**Source:** Giuliano Demands, Design Reference

No email enters production (Phase 5) without passing Phase 3 visual verification. The 20-point verification checklist is mandatory. Every point must be checked. Every point must PASS. If any point FAILS, the email enters Phase 4 (Revision) and must be fixed and re-verified before proceeding.

### Rule 8: Component Diversity — 5+ Unique Categories Per Email

**Source:** Design Reference, Giuliano Demands

Every email must use components from at least 5 different categories in the 922-component library. The 13 primary categories are: HERO (23), BADGE (5), TEXT/LETTER (84), TESTIMONIAL/SOCIAL PROOF (103), MECHANISM/EDUCATION (103), PRODUCT (87), CTA (15), COMPARISON (79), GUARANTEE/TRUST (67), URGENCY (39), DECORATIVE (68), LAYOUT (80), UTILITY (45). Minimum per email: HERO + TEXT/LETTER + CTA + 2 more from any category.

### Rule 9: No Customer Desensitization — Cross-Flow Differentiation

**Source:** Giuliano Demands

A subscriber who receives Welcome E1, then Cart Abandonment, then PP-Education must never feel like they are seeing the same email with different words. Each flow must be visually distinct at the subconscious level through color emphasis shifts, layout density changes, hero style differences, image mood variations, and CTA presentation evolution.

### Rule 10: Giuliano Demands Compliance — R1-R6

**Source:** `/root/projects/brightkidco/demands/GIULIANO-DEMANDS.md`

The 6 cross-level calibration rules: R1 Symptom Over Label (never name the level), R2 3-5 Recognition Anchors Per Mail, R3 Age Ranges Over Fixed Ages, R4 Verbal/Non-Verbal Inclusivity, R5 Timeline Flexibility, R6 Low-Bar Success Metrics. Level-specific emails must reflect that level's tonality, vocabulary, and emotional depth.

### Rule 11: Conversion Optimization

**Source:** Giuliano Demands, Design Reference

Above the fold: Logo + hero + primary CTA visible without scrolling on mobile (568px viewport). Max 3 CTAs per email. 44px minimum tap target. 420px max-width. Mobile-first design at 320px viewport.

### Rule 12: Every Agent Reads Sources in Priority Order

**Source:** Copy Production Plan

Agents have limited context windows. Source files are listed in priority order. Read them in that order. If you can only read 3 files, read the top 3. The most important files are listed first in every source list.

### Rule 13: No Fabrication — Every Output Traceable to Source

**Source:** Copy Production Plan, Giuliano Demands

Every design decision must be traceable to a source file. If you cannot point to a source that justifies a decision, do not make that decision. "I think this looks good" is not a source.

### Rule 14: Ralph Loop Autonomous Execution

**Source:** Ralph Loop v4.0.0 Protocol

This plan is designed for autonomous execution. Every task is self-contained with explicit inputs, outputs, and validation criteria. Escalation triggers: missing source file, ambiguous specification, JSX rendering failure after 3 retries, verification failure after 2 revision cycles.


---

## Source Files — Absolute Paths

Every file referenced in this plan is listed here with its absolute path. Agents MUST use these exact paths. Do not guess. Do not improvise. Do not assume relative paths.

### Core Reference Files

| # | File | Path | Lines | Purpose |
|---|------|------|-------|---------|
| 1 | Giuliano Demands | `/root/projects/brightkidco/demands/GIULIANO-DEMANDS.md` | 2010 | Non-negotiable rules, R1-R6, flow architecture |
| 2 | Design Skills Reference | `/root/projects/brightkidco/plans/consolidated-design-skills-trimmed.md` | ~4000 | Design philosophy, archetypes, layout patterns, color systems, typography |
| 3 | Component Index | `/root/projects/email-ops/email-design/component-index.md` | 985 | 922 components across 80 categories |
| 4 | Copy Production Plan | `/root/projects/brightkidco/plans/email-copy-production.md` | 1008 | Copy strategy, output template, source mapping |

### Raw JSX Environment (Welcome Flow Reference)

| # | File | Path | Lines | Purpose |
|---|------|------|-------|---------|
| 5 | primitives.jsx | `/root/projects/brightkidco/raw/BKCO - EMAIL MARKETING/welcome-flow/primitives.jsx` | 275 | Shared components (ImgFrame, FramedImage, Band, Header, PartBadge, TitleBlock, Letter, Eyebrow, H2, CTAClose, Signoff, OutLine, Footer, EmailShell) |
| 6 | product-showcase.jsx | `/root/projects/brightkidco/raw/BKCO - EMAIL MARKETING/welcome-flow/product-showcase.jsx` | 270 | Product placement variants (Full, Medium, Soft) |
| 7 | content.js | `/root/projects/brightkidco/raw/BKCO - EMAIL MARKETING/welcome-flow/content.js` | 321 | Welcome flow content data structure |
| 8 | content-flow2.js | `/root/projects/brightkidco/raw/BKCO - EMAIL MARKETING/welcome-flow/content-flow2.js` | ~200 | Flow 2 content data |
| 9 | app.jsx | `/root/projects/brightkidco/raw/BKCO - EMAIL MARKETING/welcome-flow/app.jsx` | ~100 | Application entry point |
| 10 | design-canvas.jsx | `/root/projects/brightkidco/raw/BKCO - EMAIL MARKETING/welcome-flow/design-canvas.jsx` | ~150 | Design canvas reference |
| 11 | emails-2-3.jsx | `/root/projects/brightkidco/raw/BKCO - EMAIL MARKETING/welcome-flow/emails-2-3.jsx` | ~200 | Emails 2-3 implementations |
| 12 | emails-4-5.jsx | `/root/projects/brightkidco/raw/BKCO - EMAIL MARKETING/welcome-flow/emails-4-5.jsx` | ~200 | Emails 4-5 implementations |
| 13 | email-6.jsx | `/root/projects/brightkidco/raw/BKCO - EMAIL MARKETING/welcome-flow/email-6.jsx` | ~150 | Email 6 implementation |
| 14 | flow2-emails.jsx | `/root/projects/brightkidco/raw/BKCO - EMAIL MARKETING/welcome-flow/flow2-emails.jsx` | ~200 | Flow 2 implementations |

### Autistic Welcome Flow Reference

| # | File | Path | Purpose |
|---|------|------|---------|
| 15 | autistic-welcome variants | `/root/projects/brightkidco/raw/BKCO - EMAIL MARKETING/autistic-welcome/variants/` | Level-specific welcome variants |
| 16 | autistic-welcome main | `/root/projects/brightkidco/raw/BKCO - EMAIL MARKETING/autistic-welcome/` | Autistic welcome flow reference |

### Product Photos (29 images)

| # | File | Path | Category |
|---|------|------|----------|
| 17 | founders-holding-pants | `/root/projects/brightkidco/raw/product-photos/lifestyle/founders-holding-pants-yellow-watermelon.png` | Lifestyle |
| 18 | toddler-backpack | `/root/projects/brightkidco/raw/product-photos/lifestyle/toddler-backpack-moon-cloud-blue.png` | Lifestyle |
| 19 | toddler-livingroom | `/root/projects/brightkidco/raw/product-photos/lifestyle/toddler-livingroom-dino-yellow.png` | Lifestyle |
| 20 | toddler-napping | `/root/projects/brightkidco/raw/product-photos/lifestyle/toddler-napping-watermelon-pink-shorts.png` | Lifestyle |
| 21 | toddler-outdoors | `/root/projects/brightkidco/raw/product-photos/lifestyle/toddler-outdoors-grass-disposable-diaper.png` | Lifestyle |
| 22 | toddler-playing | `/root/projects/brightkidco/raw/product-photos/lifestyle/toddler-playing-train-moon-cloud-blue.png` | Lifestyle |
| 23 | toddler-potty-ladder-pink | `/root/projects/brightkidco/raw/product-photos/lifestyle/toddler-potty-ladder-pink-multicolor.png` | Lifestyle |
| 24 | toddler-potty-ladder-yellow | `/root/projects/brightkidco/raw/product-photos/lifestyle/toddler-potty-ladder-yellow-woodland.png` | Lifestyle |
| 25 | toddler-rearview | `/root/projects/brightkidco/raw/product-photos/lifestyle/toddler-rearview-cat-mustard.png` | Lifestyle |
| 26 | toddlers-backview | `/root/projects/brightkidco/raw/product-photos/lifestyle/toddlers-backview-disposable-diapers.png` | Lifestyle |
| 27 | washing-machine | `/root/projects/brightkidco/raw/product-photos/lifestyle/washing-machine-training-pants.png` | Lifestyle |
| 28 | diaper-woodland | `/root/projects/brightkidco/raw/product-photos/flat-lay/diaper-woodland-creature-yellow.jpg` | Flat Lay |
| 29 | laundry-bag | `/root/projects/brightkidco/raw/product-photos/flat-lay/laundry-bag-llama-cream.png` | Flat Lay |
| 30 | pocket-diaper | `/root/projects/brightkidco/raw/product-photos/flat-lay/pocket-diaper-moon-cloud-blue.jpg` | Flat Lay |
| 31 | swim-giraffe | `/root/projects/brightkidco/raw/product-photos/flat-lay/swim-diaper-giraffe-yellow.jpg` | Flat Lay |
| 32 | swim-unicorn | `/root/projects/brightkidco/raw/product-photos/flat-lay/swim-diaper-unicorn-pink.jpg` | Flat Lay |
| 33 | swim-whale | `/root/projects/brightkidco/raw/product-photos/flat-lay/swim-diaper-whale-ocean-blue.jpg` | Flat Lay |
| 34 | training-bunny | `/root/projects/brightkidco/raw/product-photos/flat-lay/training-pant-bunny-hearts-pink.jpg` | Flat Lay |
| 35 | training-cloud | `/root/projects/brightkidco/raw/product-photos/flat-lay/training-pant-cloud-raindrop-white.jpg` | Flat Lay |
| 36 | training-fox-red | `/root/projects/brightkidco/raw/product-photos/flat-lay/training-pant-fox-red-white.jpg` | Flat Lay |
| 37 | training-fox-woodland | `/root/projects/brightkidco/raw/product-photos/flat-lay/training-pant-fox-woodland-white.jpg` | Flat Lay |
| 38 | training-penguin | `/root/projects/brightkidco/raw/product-photos/flat-lay/training-pant-penguin-multicolor.jpg` | Flat Lay |
| 39 | training-watermelon | `/root/projects/brightkidco/raw/product-photos/flat-lay/training-pant-watermelon-pink.jpg` | Flat Lay |
| 40 | book-guide | `/root/projects/brightkidco/raw/product-photos/accessories/book-potty-training-guide.png` | Accessories |
| 41 | cloth-pads | `/root/projects/brightkidco/raw/product-photos/accessories/cloth-pads-watermelon-astronaut-cat.png` | Accessories |
| 42 | potty-targets | `/root/projects/brightkidco/raw/product-photos/accessories/potty-targets-stickers-chart.png` | Accessories |
| 43 | towel-set | `/root/projects/brightkidco/raw/product-photos/accessories/towel-set-llama-cactus.png` | Accessories |
| 44 | wet-bags | `/root/projects/brightkidco/raw/product-photos/accessories/wet-bags-space-zebra-llama.png` | Accessories |
| 45 | black-placeholder | `/root/projects/brightkidco/raw/product-photos/branding/black-placeholder.png` | Branding |

### Copy Files — All 125 Files by Flow

**Welcome Flow (32 files):**
| File | Path |
|------|------|
| welcome-01-e1-gf.md | `/root/projects/brightkidco/outputs/copy/welcome/welcome-01-e1-gf.md` |
| welcome-01-e1-l1.md | `/root/projects/brightkidco/outputs/copy/welcome/welcome-01-e1-l1.md` |
| welcome-01-e1-l2.md | `/root/projects/brightkidco/outputs/copy/welcome/welcome-01-e1-l2.md` |
| welcome-01-e1-l3.md | `/root/projects/brightkidco/outputs/copy/welcome/welcome-01-e1-l3.md` |
| welcome-01-e2-gf.md | `/root/projects/brightkidco/outputs/copy/welcome/welcome-01-e2-gf.md` |
| welcome-01-e2-l1.md | `/root/projects/brightkidco/outputs/copy/welcome/welcome-01-e2-l1.md` |
| welcome-01-e2-l2.md | `/root/projects/brightkidco/outputs/copy/welcome/welcome-01-e2-l2.md` |
| welcome-01-e2-l3.md | `/root/projects/brightkidco/outputs/copy/welcome/welcome-01-e2-l3.md` |
| welcome-01-e3-gf.md | `/root/projects/brightkidco/outputs/copy/welcome/welcome-01-e3-gf.md` |
| welcome-01-e3-l1.md | `/root/projects/brightkidco/outputs/copy/welcome/welcome-01-e3-l1.md` |
| welcome-01-e3-l2.md | `/root/projects/brightkidco/outputs/copy/welcome/welcome-01-e3-l2.md` |
| welcome-01-e3-l3.md | `/root/projects/brightkidco/outputs/copy/welcome/welcome-01-e3-l3.md` |
| welcome-01-e4-gf.md | `/root/projects/brightkidco/outputs/copy/welcome/welcome-01-e4-gf.md` |
| welcome-01-e4-l1.md | `/root/projects/brightkidco/outputs/copy/welcome/welcome-01-e4-l1.md` |
| welcome-01-e4-l2.md | `/root/projects/brightkidco/outputs/copy/welcome/welcome-01-e4-l2.md` |
| welcome-01-e4-l3.md | `/root/projects/brightkidco/outputs/copy/welcome/welcome-01-e4-l3.md` |
| welcome-01-e5-gf.md | `/root/projects/brightkidco/outputs/copy/welcome/welcome-01-e5-gf.md` |
| welcome-01-e5-l1.md | `/root/projects/brightkidco/outputs/copy/welcome/welcome-01-e5-l1.md` |
| welcome-01-e5-l2.md | `/root/projects/brightkidco/outputs/copy/welcome/welcome-01-e5-l2.md` |
| welcome-01-e5-l3.md | `/root/projects/brightkidco/outputs/copy/welcome/welcome-01-e5-l3.md` |
| welcome-01-e6-gf.md | `/root/projects/brightkidco/outputs/copy/welcome/welcome-01-e6-gf.md` |
| welcome-01-e6-l1.md | `/root/projects/brightkidco/outputs/copy/welcome/welcome-01-e6-l1.md` |
| welcome-01-e6-l2.md | `/root/projects/brightkidco/outputs/copy/welcome/welcome-01-e6-l2.md` |
| welcome-01-e6-l3.md | `/root/projects/brightkidco/outputs/copy/welcome/welcome-01-e6-l3.md` |
| welcome-01-e7-gf.md | `/root/projects/brightkidco/outputs/copy/welcome/welcome-01-e7-gf.md` |
| welcome-01-e7-l1.md | `/root/projects/brightkidco/outputs/copy/welcome/welcome-01-e7-l1.md` |
| welcome-01-e7-l2.md | `/root/projects/brightkidco/outputs/copy/welcome/welcome-01-e7-l2.md` |
| welcome-01-e7-l3.md | `/root/projects/brightkidco/outputs/copy/welcome/welcome-01-e7-l3.md` |
| welcome-01-e8-gf.md | `/root/projects/brightkidco/outputs/copy/welcome/welcome-01-e8-gf.md` |
| welcome-01-e8-l1.md | `/root/projects/brightkidco/outputs/copy/welcome/welcome-01-e8-l1.md` |
| welcome-01-e8-l2.md | `/root/projects/brightkidco/outputs/copy/welcome/welcome-01-e8-l2.md` |
| welcome-01-e8-l3.md | `/root/projects/brightkidco/outputs/copy/welcome/welcome-01-e8-l3.md` |

**Cart Abandonment (3 files):**
| File | Path |
|------|------|
| cart-02-e1.md | `/root/projects/brightkidco/outputs/copy/cart/cart-02-e1.md` |
| cart-02-e2.md | `/root/projects/brightkidco/outputs/copy/cart/cart-02-e2.md` |
| cart-02-e3.md | `/root/projects/brightkidco/outputs/copy/cart/cart-02-e3.md` |

**Checkout Abandonment (2 files):**
| File | Path |
|------|------|
| checkout-03-e1.md | `/root/projects/brightkidco/outputs/copy/checkout/checkout-03-e1.md` |
| checkout-03-e2.md | `/root/projects/brightkidco/outputs/copy/checkout/checkout-03-e2.md` |

**Browse Abandonment (3 files):**
| File | Path |
|------|------|
| browse-04-e1.md | `/root/projects/brightkidco/outputs/copy/browse/browse-04-e1.md` |
| browse-04-e2.md | `/root/projects/brightkidco/outputs/copy/browse/browse-04-e2.md` |
| browse-04-e3.md | `/root/projects/brightkidco/outputs/copy/browse/browse-04-e3.md` |

**Transactional (4 files):**
| File | Path |
|------|------|
| order-05-e1.md | `/root/projects/brightkidco/outputs/copy/transactional/order-05-e1.md` |
| shipping-06.md | `/root/projects/brightkidco/outputs/copy/transactional/shipping-06.md` |
| ofd-07-e1.md | `/root/projects/brightkidco/outputs/copy/transactional/ofd-07-e1.md` |
| arrived-08.md | `/root/projects/brightkidco/outputs/copy/transactional/arrived-08.md` |

**PP-Direct Upsell (2 files):**
| File | Path |
|------|------|
| upsell-09-e1.md | `/root/projects/brightkidco/outputs/copy/pp-direct-upsell/upsell-09-e1.md` |
| upsell-09-e2.md | `/root/projects/brightkidco/outputs/copy/pp-direct-upsell/upsell-09-e2.md` |

**PP-Level Detection (2 files):**
| File | Path |
|------|------|
| detection-10.md | `/root/projects/brightkidco/outputs/copy/pp-level-detection/detection-10.md` |
| pp-leveldetect-01-e1.md | `/root/projects/brightkidco/outputs/copy/pp-level-detection/pp-leveldetect-01-e1.md` |

**PP-Education (4 files):**
| File | Path |
|------|------|
| pped-11-d0.md | `/root/projects/brightkidco/outputs/copy/pp-education/pped-11-d0.md` |
| pped-11-d7.md | `/root/projects/brightkidco/outputs/copy/pp-education/pped-11-d7.md` |
| pped-11-d14.md | `/root/projects/brightkidco/outputs/copy/pp-education/pped-11-d14.md` |
| pped-11-d21.md | `/root/projects/brightkidco/outputs/copy/pp-education/pped-11-d21.md` |

**PP-Extended Upsell (3 files):**
| File | Path |
|------|------|
| ppupsell-12-e1.md | `/root/projects/brightkidco/outputs/copy/pp-extended-upsell/ppupsell-12-e1.md` |
| ppupsell-12-e2.md | `/root/projects/brightkidco/outputs/copy/pp-extended-upsell/ppupsell-12-e2.md` |
| ppupsell-12-e3.md | `/root/projects/brightkidco/outputs/copy/pp-extended-upsell/ppupsell-12-e3.md` |

**PP-Mid Check-In (3 files):**
| File | Path |
|------|------|
| mid-13-d30.md | `/root/projects/brightkidco/outputs/copy/pp-mid-checkin/mid-13-d30.md` |
| mid-13-d45.md | `/root/projects/brightkidco/outputs/copy/pp-mid-checkin/mid-13-d45.md` |
| mid-13-d60.md | `/root/projects/brightkidco/outputs/copy/pp-mid-checkin/mid-13-d60.md` |

**PP-Mary Story (1 file):**
| File | Path |
|------|------|
| mary-14-e1.md | `/root/projects/brightkidco/outputs/copy/pp-mary-story/mary-14-e1.md` |

**Replenish A (3 files):**
| File | Path |
|------|------|
| repa-15-e1.md | `/root/projects/brightkidco/outputs/copy/replenish-a/repa-15-e1.md` |
| repa-15-e2.md | `/root/projects/brightkidco/outputs/copy/replenish-a/repa-15-e2.md` |
| repa-15-e3.md | `/root/projects/brightkidco/outputs/copy/replenish-a/repa-15-e3.md` |

**Replenish B (2 files):**
| File | Path |
|------|------|
| repb-16-e1.md | `/root/projects/brightkidco/outputs/copy/replenish-b/repb-16-e1.md` |
| repb-16-e2.md | `/root/projects/brightkidco/outputs/copy/replenish-b/repb-16-e2.md` |

**Replenish C (2 files):**
| File | Path |
|------|------|
| repc-17-e1.md | `/root/projects/brightkidco/outputs/copy/replenish-c/repc-17-e1.md` |
| repc-17-e2.md | `/root/projects/brightkidco/outputs/copy/replenish-c/repc-17-e2.md` |

**Review Request (2 files):**
| File | Path |
|------|------|
| review-18-e1.md | `/root/projects/brightkidco/outputs/copy/review-request/review-18-e1.md` |
| review-18-e2.md | `/root/projects/brightkidco/outputs/copy/review-request/review-18-e2.md` |

**Winback A (12 files):**
| File | Path |
|------|------|
| winback-a-19-e1-gf.md | `/root/projects/brightkidco/outputs/copy/winback-a/winback-a-19-e1-gf.md` |
| winback-a-19-e1-l1.md | `/root/projects/brightkidco/outputs/copy/winback-a/winback-a-19-e1-l1.md` |
| winback-a-19-e1-l2.md | `/root/projects/brightkidco/outputs/copy/winback-a/winback-a-19-e1-l2.md` |
| winback-a-19-e1-l3.md | `/root/projects/brightkidco/outputs/copy/winback-a/winback-a-19-e1-l3.md` |
| winback-a-19-e2-gf.md | `/root/projects/brightkidco/outputs/copy/winback-a/winback-a-19-e2-gf.md` |
| winback-a-19-e2-l1.md | `/root/projects/brightkidco/outputs/copy/winback-a/winback-a-19-e2-l1.md` |
| winback-a-19-e2-l2.md | `/root/projects/brightkidco/outputs/copy/winback-a/winback-a-19-e2-l2.md` |
| winback-a-19-e2-l3.md | `/root/projects/brightkidco/outputs/copy/winback-a/winback-a-19-e2-l3.md` |
| winback-a-19-e3-gf.md | `/root/projects/brightkidco/outputs/copy/winback-a/winback-a-19-e3-gf.md` |
| winback-a-19-e3-l1.md | `/root/projects/brightkidco/outputs/copy/winback-a/winback-a-19-e3-l1.md` |
| winback-a-19-e3-l2.md | `/root/projects/brightkidco/outputs/copy/winback-a/winback-a-19-e3-l2.md` |
| winback-a-19-e3-l3.md | `/root/projects/brightkidco/outputs/copy/winback-a/winback-a-19-e3-l3.md` |

**Site Abandonment (1 file):**
| File | Path |
|------|------|
| site-20-e1.md | `/root/projects/brightkidco/outputs/copy/site-abandonment/site-20-e1.md` |

**FAQ Library (6 files):**
| File | Path |
|------|------|
| faq-21-e1.md | `/root/projects/brightkidco/outputs/copy/faq-library/faq-21-e1.md` |
| faq-21-e2.md | `/root/projects/brightkidco/outputs/copy/faq-library/faq-21-e2.md` |
| faq-21-e3.md | `/root/projects/brightkidco/outputs/copy/faq-library/faq-21-e3.md` |
| faq-21-e4.md | `/root/projects/brightkidco/outputs/copy/faq-library/faq-21-e4.md` |
| faq-21-e5.md | `/root/projects/brightkidco/outputs/copy/faq-library/faq-21-e5.md` |
| faq-21-e6.md | `/root/projects/brightkidco/outputs/copy/faq-library/faq-21-e6.md` |

**PP-Extended Education (20 files):**
| File | Path |
|------|------|
| pped-22-e1-gf.md | `/root/projects/brightkidco/outputs/copy/pp-extended-ed/pped-22-e1-gf.md` |
| pped-22-e1-l1.md | `/root/projects/brightkidco/outputs/copy/pp-extended-ed/pped-22-e1-l1.md` |
| pped-22-e1-l2.md | `/root/projects/brightkidco/outputs/copy/pp-extended-ed/pped-22-e1-l2.md` |
| pped-22-e1-l3.md | `/root/projects/brightkidco/outputs/copy/pp-extended-ed/pped-22-e1-l3.md` |
| pped-22-e2-gf.md | `/root/projects/brightkidco/outputs/copy/pp-extended-ed/pped-22-e2-gf.md` |
| pped-22-e2-l1.md | `/root/projects/brightkidco/outputs/copy/pp-extended-ed/pped-22-e2-l1.md` |
| pped-22-e2-l2.md | `/root/projects/brightkidco/outputs/copy/pp-extended-ed/pped-22-e2-l2.md` |
| pped-22-e2-l3.md | `/root/projects/brightkidco/outputs/copy/pp-extended-ed/pped-22-e2-l3.md` |
| pped-22-e3-gf.md | `/root/projects/brightkidco/outputs/copy/pp-extended-ed/pped-22-e3-gf.md` |
| pped-22-e3-l1.md | `/root/projects/brightkidco/outputs/copy/pp-extended-ed/pped-22-e3-l1.md` |
| pped-22-e3-l2.md | `/root/projects/brightkidco/outputs/copy/pp-extended-ed/pped-22-e3-l2.md` |
| pped-22-e3-l3.md | `/root/projects/brightkidco/outputs/copy/pp-extended-ed/pped-22-e3-l3.md` |
| pped-22-e4-gf.md | `/root/projects/brightkidco/outputs/copy/pp-extended-ed/pped-22-e4-gf.md` |
| pped-22-e4-l1.md | `/root/projects/brightkidco/outputs/copy/pp-extended-ed/pped-22-e4-l1.md` |
| pped-22-e4-l2.md | `/root/projects/brightkidco/outputs/copy/pp-extended-ed/pped-22-e4-l2.md` |
| pped-22-e4-l3.md | `/root/projects/brightkidco/outputs/copy/pp-extended-ed/pped-22-e4-l3.md` |
| pped-22-e5-gf.md | `/root/projects/brightkidco/outputs/copy/pp-extended-ed/pped-22-e5-gf.md` |
| pped-22-e5-l1.md | `/root/projects/brightkidco/outputs/copy/pp-extended-ed/pped-22-e5-l1.md` |
| pped-22-e5-l2.md | `/root/projects/brightkidco/outputs/copy/pp-extended-ed/pped-22-e5-l2.md` |
| pped-22-e5-l3.md | `/root/projects/brightkidco/outputs/copy/pp-extended-ed/pped-22-e5-l3.md` |

**PP-At-Risk (4 files):**
| File | Path |
|------|------|
| atrisk-23-e1.md | `/root/projects/brightkidco/outputs/copy/pp-at-risk/atrisk-23-e1.md` |
| atrisk-23-e2.md | `/root/projects/brightkidco/outputs/copy/pp-at-risk/atrisk-23-e2.md` |
| atrisk-23-e3.md | `/root/projects/brightkidco/outputs/copy/pp-at-risk/atrisk-23-e3.md` |
| atrisk-23-e4.md | `/root/projects/brightkidco/outputs/copy/pp-at-risk/atrisk-23-e4.md` |

**Winback B (12 files):**
| File | Path |
|------|------|
| winback-b-24-e1-gf.md | `/root/projects/brightkidco/outputs/copy/winback-b/winback-b-24-e1-gf.md` |
| winback-b-24-e1-l1.md | `/root/projects/brightkidco/outputs/copy/winback-b/winback-b-24-e1-l1.md` |
| winback-b-24-e1-l2.md | `/root/projects/brightkidco/outputs/copy/winback-b/winback-b-24-e1-l2.md` |
| winback-b-24-e1-l3.md | `/root/projects/brightkidco/outputs/copy/winback-b/winback-b-24-e1-l3.md` |
| winback-b-24-e2-gf.md | `/root/projects/brightkidco/outputs/copy/winback-b/winback-b-24-e2-gf.md` |
| winback-b-24-e2-l1.md | `/root/projects/brightkidco/outputs/copy/winback-b/winback-b-24-e2-l1.md` |
| winback-b-24-e2-l2.md | `/root/projects/brightkidco/outputs/copy/winback-b/winback-b-24-e2-l2.md` |
| winback-b-24-e2-l3.md | `/root/projects/brightkidco/outputs/copy/winback-b/winback-b-24-e2-l3.md` |
| winback-b-24-e3-gf.md | `/root/projects/brightkidco/outputs/copy/winback-b/winback-b-24-e3-gf.md` |
| winback-b-24-e3-l1.md | `/root/projects/brightkidco/outputs/copy/winback-b/winback-b-24-e3-l1.md` |
| winback-b-24-e3-l2.md | `/root/projects/brightkidco/outputs/copy/winback-b/winback-b-24-e3-l2.md` |
| winback-b-24-e3-l3.md | `/root/projects/brightkidco/outputs/copy/winback-b/winback-b-24-e3-l3.md` |

**Sunset (2 files):**
| File | Path |
|------|------|
| sunset-25-e1.md | `/root/projects/brightkidco/outputs/copy/sunset/sunset-25-e1.md` |
| sunset-25-e2.md | `/root/projects/brightkidco/outputs/copy/sunset/sunset-25-e2.md` |

---

## Flow Inventory

| # | Flow Directory | Flow Number | Email Count | Level-Specific? | Phase |
|---|---------------|-------------|-------------|-----------------|-------|
| 1 | welcome | 01 | 32 | Yes (8 emails x 4 levels) | 1 |
| 2 | cart | 02 | 3 | No (cross-level) | 1 |
| 3 | checkout | 03 | 2 | No (cross-level) | 1 |
| 4 | browse | 04 | 3 | No (cross-level) | 1 |
| 5 | transactional | 05-08 | 4 | No (cross-level) | 1 |
| 6 | pp-direct-upsell | 09 | 2 | No (cross-level) | 1 |
| 7 | pp-level-detection | 10 | 2 | Partial (GF only) | 1 |
| 8 | pp-education | 11 | 4 | No (cross-level) | 2 |
| 9 | pp-extended-upsell | 12 | 3 | No (cross-level) | 2 |
| 10 | pp-mid-checkin | 13 | 3 | No (cross-level) | 2 |
| 11 | pp-mary-story | 14 | 1 | No (cross-level) | 2 |
| 12 | replenish-a | 15 | 3 | No (cross-level) | 2 |
| 13 | replenish-b | 16 | 2 | No (cross-level) | 2 |
| 14 | replenish-c | 17 | 2 | No (cross-level) | 2 |
| 15 | review-request | 18 | 2 | No (cross-level) | 2 |
| 16 | winback-a | 19 | 12 | Yes (3 emails x 4 levels) | 2 |
| 17 | site-abandonment | 20 | 1 | No (cross-level) | 3 |
| 18 | faq-library | 21 | 6 | No (cross-level) | 3 |
| 19 | pp-extended-ed | 22 | 20 | Yes (5 emails x 4 levels) | 3 |
| 20 | pp-at-risk | 23 | 4 | No (cross-level) | 3 |
| 21 | winback-b | 24 | 12 | Yes (3 emails x 4 levels) | 3 |
| 22 | sunset | 25 | 2 | No (cross-level) | 3 |

**Total: 22 flows, 125 emails**
- Level-specific emails: 76 (32 + 12 + 12 + 20)
- Cross-level emails: 49 (3 + 2 + 3 + 4 + 2 + 2 + 4 + 3 + 3 + 1 + 3 + 2 + 2 + 2 + 1 + 1 + 6 + 4 + 2)


---

## Flow Design Signatures

Each flow has a design signature that defines its visual mood, color emphasis, hero type, image style, density, and CTA tone. Every email in a flow must honor its flow's signature. These signatures prevent cross-flow desensitization (Rule 9) while allowing within-flow uniqueness (Rule 5).

| # | Flow | Mood | Color Emphasis | Hero Type | Image Style | Density | CTA Tone |
|---|------|------|---------------|-----------|-------------|---------|----------|
| 1 | Welcome (01) | Warm educational | Teal primary, cream accents | Letter-first (text hero with gradient accent word) | Lifestyle photos (toddler in context), warm lighting | Medium (balanced text + images) | Empathetic, inviting ("See the different path") |
| 2 | Cart Abandonment (02) | Urgent but gentle | Ink primary, teal accents | Product-first (framed product card) | Flat-lay product shots, clean backgrounds | Low (focused, minimal sections) | Direct but caring ("Complete your order") |
| 3 | Checkout Abandonment (03) | Trust-building | Ink primary, green accents | Trust-first (guarantee badge prominent) | Product + trust imagery, clean | Low (reassurance focused) | Reassuring ("Your order is waiting") |
| 4 | Browse Abandonment (04) | Curiosity spark | Teal primary, yellow accents | Curiosity-first (question or teaser) | Lifestyle photos, playful | Medium (educational + product) | Curious ("Discover what caught your eye") |
| 5 | Transactional (05-08) | Clean efficient | Ink primary, paper backgrounds | Information-first (order details prominent) | Product flat-lay for confirmation | Low (utility focused) | Functional ("Track your order") |
| 6 | PP-Direct Upsell (09) | Complementary | Green primary, cream accents | Product ecosystem (related products) | Flat-lay product combos | Medium (product showcase) | Suggestive ("Complete the set") |
| 7 | PP-Level Detection (10) | Gentle diagnostic | Teal primary, soft accents | Question-first (identifying child's needs) | Minimal imagery, text-focused | Low (focused question flow) | Gentle ("Help us understand") |
| 8 | PP-Education (11) | Science-warm | Teal primary, ink accents | Mechanism-first (interoception explainer) | Diagrams + lifestyle blend | Medium (educational depth) | Educational ("Learn the science") |
| 9 | PP-Extended Upsell (12) | Value demonstration | Ink primary, green accents | Value-first (bundle savings shown) | Product grid, comparison | Medium (product rich) | Value-oriented ("Smart bundle savings") |
| 10 | PP-Mid Check-In (13) | Supportive check-in | Cream primary, teal accents | Progress-first (milestone celebration) | Lifestyle photos, warm | Medium (encouraging) | Supportive ("How's it going?") |
| 11 | PP-Mary Story (14) | Founder story | Ink primary, warm accents | Story-first (founder narrative) | Founder photo, lifestyle | Low (story focused) | Personal ("From our family to yours") |
| 12 | Replenish A (15) | Gentle reminder | Teal primary, cream accents | Reminder-first (time to restock) | Product flat-lay, clean | Low (simple reminder) | Gentle reminder ("Time for fresh ones") |
| 13 | Replenish B (16) | Value reminder | Green primary, ink accents | Value-first (savings on refill) | Product bundles, comparison | Medium (value focused) | Smart ("Refill and save") |
| 14 | Replenish C (17) | Bulk value | Ink primary, green accents | Bundle-first (bulk savings) | Product grid, abundance | Medium (product rich) | Value ("Stock up and save more") |
| 15 | Review Request (18) | Grateful | Cream primary, teal accents | Gratitude-first (thank you) | Minimal, text-forward | Low (simple ask) | Grateful ("Share your experience") |
| 16 | Winback A (19) | Reconnection | Teal primary, warm accents | Reconnection-first (we miss you) | Lifestyle photos, nostalgic | Medium (emotional depth) | Warm ("We'd love to hear from you") |
| 17 | Site Abandonment (20) | Quick nudge | Ink primary, teal accents | Nudge-first (saw you browsing) | Product flash, minimal | Low (quick, direct) | Direct ("Still thinking about it?") |
| 18 | FAQ Library (21) | Educational | Teal primary, paper backgrounds | Question-first (FAQ format) | Icons + diagrams | Medium (information dense) | Helpful ("Answers to your questions") |
| 19 | PP-Extended Ed (22) | Deep science | Teal primary, ink accents | Mechanism-deep (advanced education) | Diagrams, charts, research | High (dense educational) | Authoritative ("The science behind it") |
| 20 | PP-At-Risk (23) | Supportive rescue | Cream primary, teal accents | Support-first (we're here for you) | Warm lifestyle, supportive | Medium (reassuring) | Caring ("Let us help") |
| 21 | Winback B (24) | Final reconnect | Ink primary, warm accents | Final chance (before sunset) | Lifestyle photos, emotional | Medium (emotional weight) | Honest ("One last note from us") |
| 22 | Sunset (25) | Graceful close | Ink primary, paper accents | Farewell-first (graceful goodbye) | Minimal, elegant | Low (clean close) | Respectful ("We understand") |

### Signature Usage Rules

**Within a flow:** All emails share the same mood, color emphasis, density, and CTA tone. They DIFFER in hero type selection (from the 20 HERO components), text treatment (from 84 TEXT/LETTER components), and specific component choices.

**Across flows:** Signatures must be distinct enough that a subscriber receiving emails from multiple flows perceives variety. The key differentiators are: mood shift (warm educational vs. urgent gentle vs. trust-building), color emphasis shift (teal primary vs. ink primary vs. cream primary), and density shift (low vs. medium vs. high).

**Level-specific flows (Welcome, Winback A, Winback B, PP-Extended Ed):** The flow signature applies to ALL level variants. L1, L2, L3, and GF emails within the same flow share the same signature. Level differentiation happens through copy tone, vocabulary depth, and emotional calibration — not through visual signature changes.

---

## Level-Specific Calibration (L1/L2/L3/GF)

Four avatar levels require distinct visual calibration even when the flow signature is shared. These dimensions control how the same flow signature manifests differently across levels.

| Dimension | L1 (Sarah) | L2 (Lisa) | L3 (Maria) | GF (General Family) |
|-----------|-----------|-----------|------------|---------------------|
| **Age range** | 3-5 years | 5-7 years | 6-10+ years | 3-10+ (inclusive) |
| **ASD severity** | Mild | Moderate | High support | Undeclared / mixed |
| **Hope ratio** | 70/30 (optimistic) | 40/60 (cautious) | 20/80 (realistic) | Variable |
| **Decision speed** | 2-7 days | 7-21 days | 14-30 days | Variable |
| **Typography weight** | Medium (500-600) | Semi-bold (600-700) | Bold (700) | Medium (500-600) |
| **Hero image mood** | Bright, playful, Pre-K | Balanced, structured | Dignity-first, mature | Inclusive, broad appeal |
| **Color warmth** | Warmer (more cream, yellow accents) | Neutral (teal + ink balanced) | Cooler (more ink, teal depth) | Neutral-warm |
| **Section count** | 6-8 sections (scannable) | 7-9 sections (balanced) | 8-10 sections (thorough) | 7-9 sections (balanced) |
| **CTA urgency** | Gentle ("Explore") | Moderate ("Find your fit") | Zero urgency ("When you're ready") | Low urgency ("Learn more") |
| **Copy density** | Short paragraphs (2-3 sentences) | Medium paragraphs (3-4 sentences) | Longer paragraphs (4-5 sentences) | Medium (3-4 sentences) |
| **Social proof style** | Parent quotes, relatable | BCBA-aware, professional | Research citations, dignity | Mixed, inclusive |
| **Image count** | 2-3 images (light) | 3-4 images (balanced) | 2-3 images (text-heavy) | 3-4 images (balanced) |
| **Border radius** | 20px (soft, friendly) | 16px (structured) | 12px (clean, mature) | 16px (balanced) |
| **Shadow intensity** | 4px (subtle) | 6px (defined) | 8px (strong) | 4-6px (balanced) |
| **Background** | #FBF7F1 (cream warm) | #FFFFFF (paper clean) | #FBF7F1 (cream grounding) | Mixed per section |

### Level Calibration Rules

1. **L1 (Sarah):** Optimistic, Pre-K driven. Hero images show bright, playful contexts. Typography is medium weight. Sections are short and scannable. CTA is gentle and inviting. Colors lean warm. The parent is hopeful and needs encouragement.

2. **L2 (Lisa):** Balanced, BCBA-aware. Hero images show structured, educational contexts. Typography is semi-bold. Sections are balanced depth. CTA is moderate. Colors are balanced teal + ink. The parent is cautious and needs professional validation.

3. **L3 (Maria):** Dignity-first, research-grounded. Hero images show mature, respectful contexts. Typography is bold. Sections are thorough with mechanism explanation. CTA has zero urgency. Colors lean cool with ink depth. The parent needs dignity and science.

4. **GF (General Family):** Inclusive, broad appeal. Works for all undeclared levels. Uses R1-R6 calibration rules. Typography is medium. Sections are balanced. CTA is low urgency. Colors are neutral-warm. The parent hasn't declared a level yet.

**Cross-level emails** (Cart, Checkout, Browse, Transactional, etc.) use GF calibration as the baseline. They must satisfy all 6 calibration rules (R1-R6) simultaneously.

**Level-specific emails** (Welcome E1-E8, Winback A E1-E3, Winback B E1-E3, PP-Extended Ed E1-E5) are written for one specific level and calibrated to that level's dimensions above.

---

## Component-to-Section Mapping

Every email section maps to specific component categories from the 922-component library. This mapping guides wireframe agents in selecting appropriate components and JSX agents in implementing them.

| Email Section | Primary Component Category | Secondary Category | Count Available | Selection Criteria |
|--------------|--------------------------|-------------------|-----------------|-------------------|
| **Hero / Opening** | HERO (23 components) | BADGE (5) | 23+5=28 | Flow signature mood determines hero type. Welcome = HERO-1 Curiosity Gap or HERO-20 Handwritten Letter. Cart = HERO-12 Before Snapshot. Winback = HERO-17 Social Proof Hero. |
| **Part Badge / Eyebrow** | BADGE (5 components) | UTIL-06 Preheader Bar | 5+1=6 | PartBadge (3.1) for flow position indicator. Eyebrow (3.2) for section labeling. Tape (16.1) for informal feel. |
| **Letter / Body Copy** | TEXT/LETTER (84 components) | PSYCH (12) | 84+12=96 | Letter Section (4.1) for standard paragraphs. Handwritten Opener (LETTER-02) for personal feel. Quote Card (4.2) for testimonials. Highlighted Passage (LETTER-10) for key insight. |
| **Definition / Mechanism** | MECHANISM/EDUCATION (103 components) | COMPARISON (79) | 103+79=182 | Definition Block (EDU-1) for interoception explainers. Mechanism Diagram (EDU-8) for science visualization. Comparison Matrix (EDU-12) for pull-ups vs. product. |
| **Social Proof** | TESTIMONIAL (103 components) | VSOCIAL (20) | 103+20=123 | Yellow Quote Block (SP-01) for parent quotes. Review Screenshot (SP-04) for authenticity. Customer Photo + Quote (VSOCIAL-1) for real faces. |
| **Product Showcase** | PRODUCT (87 components) | PRODEEP (9) | 87+9=96 | ProductShowcaseFull for hero product moments (E4, E6). ProductShowcaseMedium for inline mentions (E5). ProductShowcaseSoft for gentle nods (E2, E3). |
| **Comparison / Before-After** | COMPARISON (79 components) | EDU-12 | 79+1=80 | Before/After (EDU-6) for myth vs. fact. Comparison Table (ED2) for product comparison. Method Comparison (EDUDEEP-7) for approach differentiation. |
| **Guarantee / Trust** | GUARANTEE/TRUST (67 components) | TRUST-N (15) | 67+15=82 | Guarantee Badge (TRUST-N) for 60-day guarantee. Trust Pills Row (SP4) for feature highlights. Risk Reversal Stack (TRUST-N) for refund assurance. |
| **CTA** | CTA (15 components) | PRODUCT CTA | 15+product CTAs | CTAClose (from primitives) for standard closing CTA. Inline CTA for mid-email placement. CTA hero for above-fold action. |
| **Signoff** | UTIL-05 Signoff Card | LETTER-07 Greeting Card | 1+1=2 | Signoff (from primitives) for Lena's personal close. Always includes avatar, handwritten signature, P.S. |
| **Footer** | UTIL-04 Footer | UTIL-09 Social Strip | 1+1=2 | Footer (from primitives) for standard footer with links, social icons, unsubscribe. |
| **Decorative / Transitions** | DECORATIVE (68 components) | UTIL-01 Gradient Band | 68+1=69 | Band (from primitives) for gradient transitions. Dividers for section separation. Patterns for visual interest. |
| **Urgency (if applicable)** | URGENCY (39 components) | PSYCH-10 Scarcity | 39+1=40 | Countdown Timer for time-sensitive offers. Scarcity indicators for stock levels. Use sparingly — never for L3. |

### Component Selection Priority

1. **Always use primitives first.** If primitives.jsx provides a component that matches the need, use it. Do not reinvent.
2. **Map wireframe sections to categories.** Use the table above to identify the right category.
3. **Select from the flow signature.** Within the category, choose the component that best matches the flow's mood and density.
4. **Ensure diversity.** Check that 5+ unique categories are represented across all sections.
5. **Avoid repetition.** Check that no two emails in the same flow use the same component for the same section type.


---

## Phase 0 — Strategy Mapping

**Purpose:** Read all 125 copy files and the 922-component library. For each email, map which components from the library should be used for each section. Assign product images (no repetition within flows). Extract the creative strategy from each copy file. Produce a single strategy-map.json that Phase 1 agents consume.

**Agents:** 5 agents, 1 wave
**Wave:** Wave 1
**Duration:** ~2 minutes

### Source Files for Phase 0

| # | File | Path | Purpose |
|---|------|------|---------|
| 1 | All 125 copy files | `/root/projects/brightkidco/outputs/copy/*/` | Read every copy file to extract creative strategy |
| 2 | Component Index | `/root/projects/email-ops/email-design/component-index.md` | Map 922 components to email sections |
| 3 | Product Photos | `/root/projects/brightkidco/raw/product-photos/` (29 images) | Assign images to emails without repetition |
| 4 | Giuliano Demands | `/root/projects/brightkidco/demands/GIULIANO-DEMANDS.md` | Flow architecture, level rules, R1-R6 |
| 5 | Design Skills Reference | `/root/projects/brightkidco/plans/consolidated-design-skills-trimmed.md` | Design vocabulary for strategy extraction |
| 6 | This Plan | `/root/projects/brightkidco/outputs/bkc-email-production-plan-v5.md` | Flow Design Signatures, Level Calibration tables |

### Agent Tasks

**Agent 1 — Welcome Flow Mapper (32 emails)**
Read all 32 Welcome copy files. For each email (8 positions x 4 levels), extract: the creative strategy from the copy file's Creative Strategy section, the recommended hero type from the 20 HERO components, the recommended text treatment from the 84 TEXT/LETTER components, the recommended social proof style from the 103 TESTIMONIAL components, the recommended mechanism pattern from the 103 MECHANISM components, and 2-3 product photo assignments from the 29 images (no photo repeated within the same position across levels, but the same photo may appear at different positions). Write the extracted strategy for all 32 Welcome emails.

**Agent 2 — Phase 1 Flows Mapper (11 flows, 24 emails)**
Read all copy files for: Cart (3), Checkout (2), Browse (3), Transactional (4), PP-Direct Upsell (2), PP-Level Detection (2), PP-Education (4), PP-Extended Upsell (3), PP-Mid Check-In (3), PP-Mary Story (1). For each email, extract the same strategy dimensions as Agent 1. These are cross-level flows (except PP-Level Detection which is GF-only), so the strategy must work for all 4 levels via R1-R6 calibration. Assign product images with no repetition within each flow.

**Agent 3 — Phase 2 Flows Mapper (5 flows, 11 emails)**
Read all copy files for: Replenish A (3), Replenish B (2), Replenish C (2), Review Request (2), Winback A (12). Winback A is level-specific (3 x 4 levels). Extract strategy dimensions. For Winback A, ensure level-specific calibration differences are captured in the strategy (L1 bright, L2 balanced, L3 dignity, GF inclusive). Assign product images.

**Agent 4 — Phase 3 Flows Mapper (5 flows, 45 emails)**
Read all copy files for: Site Abandonment (1), FAQ Library (6), PP-Extended Education (20), PP-At-Risk (4), Winback B (12). PP-Extended Ed and Winback B are level-specific. Extract strategy dimensions. For level-specific flows, capture calibration differences. For cross-level flows, capture R1-R6 compliance requirements. Assign product images.

**Agent 5 — Strategy Map Compiler**
Receive all strategy extractions from Agents 1-4. Compile into a single strategy-map.json file. The JSON must contain one entry per email with: flow name, flow number, email position, level (if level-specific), copy file path, creative strategy summary, recommended components (hero, text, social proof, mechanism, product, CTA, trust, decorative), product image assignments (with paths), flow signature reference, level calibration reference (if applicable), and R1-R6 compliance flags (for cross-level emails).

### Output

**File:** `/root/projects/brightkidco/outputs/strategy-map.json`

**Schema:**
```json
{
  "version": "5.0",
  "generated": "2026-06-09",
  "totalEmails": 125,
  "flows": {
    "welcome": {
      "flowNumber": 1,
      "levelSpecific": true,
      "signature": "warm-educational",
      "emails": {
        "e1-gf": {
          "copyFile": "/root/projects/brightkidco/outputs/copy/welcome/welcome-01-e1-gf.md",
          "level": "GF",
          "creativeStrategy": "...",
          "components": {
            "hero": "HERO-1 Curiosity Gap",
            "text": "LETTER-01 Paragraph Stack",
            "socialProof": "SP-01 Yellow Quote Block",
            "mechanism": "EDU-1 Definition Block",
            "product": "ProductShowcaseSoft",
            "cta": "CTAClose",
            "trust": "TRUST-N Guarantee Badge",
            "decorative": "UTIL-01 Gradient Band"
          },
          "images": [
            "/root/projects/brightkidco/raw/product-photos/lifestyle/toddler-livingroom-dino-yellow.png"
          ],
          "r1r6Compliance": true,
          "componentCategories": ["HERO", "TEXT/LETTER", "TESTIMONIAL", "MECHANISM", "PRODUCT", "CTA", "GUARANTEE", "DECORATIVE"]
        }
      }
    }
  }
}
```

### Quality Gate — Phase 0

Before advancing to Phase 1, verify:
- [ ] strategy-map.json exists and is valid JSON
- [ ] All 125 emails are represented in the map
- [ ] Every email has at least 5 unique component categories
- [ ] Every email has at least 1 product image assigned
- [ ] No product image is repeated within the same flow position across levels
- [ ] Level-specific emails have level calibration dimensions captured
- [ ] Cross-level emails have R1-R6 compliance flags
- [ ] All copy file paths are valid (files exist at specified paths)

### Wave Distribution — Phase 0

| Wave | Agents | Tasks | Output |
|------|--------|-------|--------|
| Wave 1 | 5 (Agent 1-5) | 5 parallel tasks | strategy-map.json |

---

## Phase 1 — Wireframe Production

**Purpose:** For each of the 125 emails, produce a detailed ASCII wireframe that serves as the authoritative blueprint for JSX production. The wireframe contains exact specifications for every visual element — colors, spacing, typography, layout, components, copy (verbatim), image briefs, and rendering notes.

**Agents:** 15 agents per wave, 9 waves
**Waves:** Waves 2-10
**Duration:** ~18 minutes (9 waves x 2 min)

### Source Files for Phase 1

| # | File | Path | Purpose |
|---|------|------|---------|
| 1 | The assigned copy file | (from strategy-map.json) | The specific email being wireframed |
| 2 | strategy-map.json | `/root/projects/brightkidco/outputs/strategy-map.json` | Component assignments, image assignments, creative strategy |
| 3 | Flow Design Signatures | (from this plan) | Flow mood, color emphasis, hero type, density |
| 4 | Level Calibration | (from this plan) | L1/L2/L3/GF dimensions |
| 5 | Design Skills Reference | `/root/projects/brightkidco/plans/consolidated-design-skills-trimmed.md` | Design vocabulary, component patterns |
| 6 | Component Index | `/root/projects/email-ops/email-design/component-index.md` | 922 components for selection |
| 7 | Giuliano Demands | `/root/projects/brightkidco/demands/GIULIANO-DEMANDS.md` | R1-R6, flow rules, anti-desensitization |
| 8 | Primitives JSX | `/root/projects/brightkidco/raw/BKCO - EMAIL MARKETING/welcome-flow/primitives.jsx` | Available shared components |
| 9 | Product Showcase | `/root/projects/brightkidco/raw/BKCO - EMAIL MARKETING/welcome-flow/product-showcase.jsx` | Product placement patterns |

### Wireframe Output Template

Every wireframe MUST contain these 8 mandatory sections in this exact order. No sections may be omitted. No sections may be reordered. No extra sections may be added.

```markdown
# Wireframe: {flow-name} — E{position} | {level}

## 1. Metadata

| Field | Value |
|-------|-------|
| **Flow** | {Flow Name} (Flow {Number}) |
| **Position** | E{Position} — Day {X} |
| **Level** | {Level Name} |
| **Copy File** | {absolute path to copy file} |
| **Strategy Map Entry** | {reference in strategy-map.json} |
| **Flow Signature** | {mood, color emphasis, density, CTA tone from Flow Design Signatures} |
| **Level Calibration** | {L1/L2/L3/GF dimensions from Level Calibration table} |
| **Component Categories Used** | {list of 5+ categories} |
| **Total Estimated Height** | {approximate px height for mobile rendering} |

## 2. Strategy Box

**Big Idea:** {One sentence capturing the core creative concept for this email. Derived from the copy file's Creative Strategy section. This is the NORTH STAR — every design decision serves this idea.}

**Emotional Arc Position:** {Where this email sits in the flow's emotional arc. From the copy file metadata.}

**Component Selection Rationale:** {Why these specific components were chosen. Reference flow signature + level calibration + copy file creative strategy.}

**Differentiation Note:** {How this email is visually different from other emails in the same flow. Must be specific — not "uses different layout" but "uses HERO-16 Mechanism Tease instead of HERO-1 Curiosity Gap, and EDU-8 Mechanism Diagram instead of LETTER-01 Paragraph Stack".}

## 3. Creative Box

**Color Palette for This Email:**
- Primary: {hex + token name} — {where it appears}
- Secondary: {hex + token name} — {where it appears}
- Accent: {hex + token name} — {where it appears}
- Background: {hex + token name} — {where it appears}
- Text: {hex + token name} — {where it appears}

**Typography Treatment:**
- Heading: {font family, size, weight, line-height, letter-spacing}
- Body: {font family, size, weight, line-height, color}
- Accent: {font family, size, weight, line-height, color}
- Eyebrow: {font family, size, weight, letter-spacing, text-transform, color}

**Border Radius Map:**
- Cards: {value}px
- Buttons: {value}px
- Images: {value}px
- Small elements: {value}px

**Shadow Spec:**
- Primary shadows: {offset-x}px {offset-y}px 0 {color}
- Secondary shadows: {offset-x}px {offset-y}px 0 {color}

**Spacing Rhythm:**
- Section gap: {value}px
- Horizontal padding: {value}px
- Card padding: {value}px top/bottom, {value}px left/right
- Element gap: {value}px

## 4. Layout ASCII

{Exact ASCII art representation of the email layout. Each section is drawn as a box with its component type labeled. Width is 420px (constrained). Heights are approximate but proportional. Colors are indicated in brackets. This is the VISUAL BLUEPRINT that the JSX agent follows.}

Example format:

```
┌────────────────────── 420px ──────────────────────┐
│ [cream #FBF7F1]                                    │
│  ┌─ Preheader ─────────────────────────────────┐   │
│  │ UTIL-06 Preheader Bar                       │   │
│  └─────────────────────────────────────────────┘   │
│  ┌─ Header ───────────────────────────────────┐    │
│  │ Logo: brightkidco-logo-v2.png (h:34)       │    │
│  └─────────────────────────────────────────────┘   │
│  ┌─ Band Transition ──────────────────────────┐    │
│  │ gradient: teal→cream (h:40)                 │    │
│  └─────────────────────────────────────────────┘   │
│  ┌─ Hero Section ─────────────────────────────┐    │
│  │ HERO-{N} {Component Name}                   │    │
│  │ [background: {color}]                       │    │
│  │ {layout details}                            │    │
│  └─────────────────────────────────────────────┘   │
│  ... (continue for every section) ...               │
│  ┌─ Footer ───────────────────────────────────┐    │
│  │ UTIL-04 Footer                              │    │
│  └─────────────────────────────────────────────┘   │
└────────────────────────────────────────────────────┘
```

## 5. Technique Specs

{EXACT CSS/JSX specifications for every section. Every value must be a specific number, color, or formula. No "approximately." No "around." No "similar to."}

For each section in the Layout ASCII:

```
### Section: {Section Name}
- Component: {exact component name from primitives.jsx or component library}
- Width: {value}px or 100%
- Height: {value}px or auto
- Background: {exact hex from brand tokens}
- Padding: {top}px {right}px {bottom}px {left}px
- Border: {width}px {style} {color}
- Border-radius: {value}px
- Box-shadow: {offset-x}px {offset-y}px 0 {color}
- Font-family: {Questrial or Fraunces}
- Font-size: {value}px
- Font-weight: {value}
- Line-height: {value}
- Letter-spacing: {value}px
- Color: {exact hex}
- Text-align: left | center | right
- Text-transform: none | uppercase
- Margin: {top}px {right}px {bottom}px {left}px
- Display: block | flex | inline-block
- Flex-direction: row | column
- Justify-content: flex-start | center | space-between
- Align-items: flex-start | center | stretch
- Gap: {value}px
- Overflow: hidden | visible
```

## 6. Copy Blocks

{VERBATIM copy from the copy file, organized by section. Every word must match the copy file exactly. Markdown formatting is preserved.}

```
### Block: Preheader
{exact preheader text from copy file}

### Block: Subject Line
{exact subject line from copy file}

### Block: Hero Title Part 1
{exact first line}

### Block: Hero Title Part 2 (Accent)
{exact second line}

### Block: Letter Opening
{exact opening paragraph — verbatim from copy file}

### Block: Definition / Mechanism
{exact mechanism text — verbatim from copy file}

### Block: Social Proof
{exact testimonial / quote — verbatim from copy file}

### Block: Product Introduction
{exact product text — verbatim from copy file}

### Block: CTA Button Text
{exact CTA text — verbatim from copy file}

### Block: Signoff
{exact Lena sign-off — verbatim from copy file}

### Block: Footer
{standard footer text}
```

## 7. Image Briefs

{Detailed description of every image placement. Each brief includes the exact product photo path (from the 29 images), the display dimensions, the context, and any overlay text or badges.}

```
### Image: {Image Name}
- Source: {exact path from product-photos}
- Display: {width}px x {height}px
- Border-radius: {value}px
- Border: {width}px {color}
- Box-shadow: {shadow spec}
- Context: {how the image is used — hero, inline, thumbnail}
- Overlay: {any text/badges overlaid on the image}
- Alt text: {accessible description}
```

## 8. Render Notes

{Notes for the JSX agent and visual verification agent. Includes dark mode preparation, responsive considerations, email client compatibility notes, and any special rendering instructions.}

```
### Dark Mode
- Background inversions: {list which backgrounds change in dark mode}
- Text color inversions: {list which text colors change}
- Border adjustments: {list any border changes}
- Image handling: {how images appear in dark mode}

### Responsive
- Breakpoint: 320px (minimum supported)
- Behavior at 320px: {what changes — text size, padding, image scaling}
- Behavior at 420px: {default rendering}
- Behavior at 600px+: {how it scales in desktop clients}

### Email Client Compatibility
- Outlook: {any MSO conditional comments needed}
- Gmail: {any Gmail-specific considerations}
- Apple Mail: {any Apple Mail-specific features}
- Mobile clients: {any mobile-specific rendering notes}

### Special Instructions
- {Any other notes for the JSX or verification agents}
```

### Agent Task Distribution — Phase 1

**Wave 2 (Agents 1-15): Welcome E1-E5 (all levels)**
| Agent | Emails | Count | Flow |
|-------|--------|-------|------|
| Agent 1 | welcome-01-e1-gf, welcome-01-e1-l1 | 2 | Welcome |
| Agent 2 | welcome-01-e1-l2, welcome-01-e1-l3 | 2 | Welcome |
| Agent 3 | welcome-01-e2-gf, welcome-01-e2-l1 | 2 | Welcome |
| Agent 4 | welcome-01-e2-l2, welcome-01-e2-l3 | 2 | Welcome |
| Agent 5 | welcome-01-e3-gf, welcome-01-e3-l1 | 2 | Welcome |
| Agent 6 | welcome-01-e3-l2, welcome-01-e3-l3 | 2 | Welcome |
| Agent 7 | welcome-01-e4-gf, welcome-01-e4-l1 | 2 | Welcome |
| Agent 8 | welcome-01-e4-l2, welcome-01-e4-l3 | 2 | Welcome |
| Agent 9 | welcome-01-e5-gf, welcome-01-e5-l1 | 2 | Welcome |
| Agent 10 | welcome-01-e5-l2, welcome-01-e5-l3 | 2 | Welcome |
| Agent 11 | welcome-01-e6-gf, welcome-01-e6-l1 | 2 | Welcome |
| Agent 12 | welcome-01-e6-l2, welcome-01-e6-l3 | 2 | Welcome |
| Agent 13 | welcome-01-e7-gf, welcome-01-e7-l1 | 2 | Welcome |
| Agent 14 | welcome-01-e7-l2, welcome-01-e7-l3 | 2 | Welcome |
| Agent 15 | welcome-01-e8-gf, welcome-01-e8-l1 | 2 | Welcome |

**Wave 3 (Agents 1-15): Welcome remaining + Cart/Checkout/Browse**
| Agent | Emails | Count | Flow |
|-------|--------|-------|------|
| Agent 1 | welcome-01-e8-l2, welcome-01-e8-l3 | 2 | Welcome |
| Agent 2 | cart-02-e1, cart-02-e2, cart-02-e3 | 3 | Cart |
| Agent 3 | checkout-03-e1, checkout-03-e2 | 2 | Checkout |
| Agent 4 | browse-04-e1, browse-04-e2, browse-04-e3 | 3 | Browse |
| Agent 5 | transactional/order-05-e1, transactional/shipping-06 | 2 | Transactional |
| Agent 6 | transactional/ofd-07-e1, transactional/arrived-08 | 2 | Transactional |
| Agent 7 | pp-direct-upsell/upsell-09-e1, upsell-09-e2 | 2 | PP-Direct |
| Agent 8 | pp-level-detection/detection-10, pp-leveldetect-01-e1 | 2 | PP-Level |
| Agent 9 | pp-education/pped-11-d0, pped-11-d7 | 2 | PP-Education |
| Agent 10 | pp-education/pped-11-d14, pped-11-d21 | 2 | PP-Education |
| Agent 11 | pp-extended-upsell/ppupsell-12-e1, ppupsell-12-e2, ppupsell-12-e3 | 3 | PP-Ext Upsell |
| Agent 12 | pp-mid-checkin/mid-13-d30, mid-13-d45, mid-13-d60 | 3 | PP-Mid Check |
| Agent 13 | pp-mary-story/mary-14-e1 | 1 | PP-Mary |
| Agent 14 | replenish-a/repa-15-e1, repa-15-e2, repa-15-e3 | 3 | Replenish A |
| Agent 15 | replenish-b/repb-16-e1, repb-16-e2, replenish-c/repc-17-e1, repc-17-e2 | 4 | Replenish B+C |

**Wave 4 (Agents 1-15): Remaining Phase 1-2 flows + Winback A start**
| Agent | Emails | Count | Flow |
|-------|--------|-------|------|
| Agent 1 | review-request/review-18-e1, review-18-e2 | 2 | Review |
| Agent 2 | winback-a/winback-a-19-e1-gf, winback-a-19-e1-l1, winback-a-19-e1-l2, winback-a-19-e1-l3 | 4 | Winback A |
| Agent 3 | winback-a/winback-a-19-e2-gf, winback-a-19-e2-l1, winback-a-19-e2-l2, winback-a-19-e2-l3 | 4 | Winback A |
| Agent 4 | winback-a/winback-a-19-e3-gf, winback-a-19-e3-l1, winback-a-19-e3-l2, winback-a-19-e3-l3 | 4 | Winback A |
| Agent 5 | site-abandonment/site-20-e1 | 1 | Site Abandon |
| Agent 6 | faq-library/faq-21-e1, faq-21-e2, faq-21-e3 | 3 | FAQ |
| Agent 7 | faq-library/faq-21-e4, faq-21-e5, faq-21-e6 | 3 | FAQ |
| Agent 8 | pp-extended-ed/pped-22-e1-gf, pped-22-e1-l1, pped-22-e1-l2, pped-22-e1-l3 | 4 | PP-Ext Ed |
| Agent 9 | pp-extended-ed/pped-22-e2-gf, pped-22-e2-l1, pped-22-e2-l2, pped-22-e2-l3 | 4 | PP-Ext Ed |
| Agent 10 | pp-extended-ed/pped-22-e3-gf, pped-22-e3-l1, pped-22-e3-l2, pped-22-e3-l3 | 4 | PP-Ext Ed |
| Agent 11 | pp-extended-ed/pped-22-e4-gf, pped-22-e4-l1, pped-22-e4-l2, pped-22-e4-l3 | 4 | PP-Ext Ed |
| Agent 12 | pp-extended-ed/pped-22-e5-gf, pped-22-e5-l1, pped-22-e5-l2, pped-22-e5-l3 | 4 | PP-Ext Ed |
| Agent 13 | pp-at-risk/atrisk-23-e1, atrisk-23-e2, atrisk-23-e3, atrisk-23-e4 | 4 | PP-At-Risk |
| Agent 14 | winback-b/winback-b-24-e1-gf, winback-b-24-e1-l1, winback-b-24-e1-l2, winback-b-24-e1-l3 | 4 | Winback B |
| Agent 15 | winback-b/winback-b-24-e2-gf, winback-b-24-e2-l1, winback-b-24-e2-l2, winback-b-24-e2-l3 | 4 | Winback B |

**Wave 5 (Agents 1-9): Remaining Winback B + Sunset**
| Agent | Emails | Count | Flow |
|-------|--------|-------|------|
| Agent 1 | winback-b/winback-b-24-e3-gf, winback-b-24-e3-l1, winback-b-24-e3-l2, winback-b-24-e3-l3 | 4 | Winback B |
| Agent 2 | sunset/sunset-25-e1, sunset-25-e2 | 2 | Sunset |
| Agent 3-9 | (spillover / retry any failed from Waves 2-4) | 0-7 | Various |

### Output

**Directory:** `/root/projects/brightkidco/outputs/wireframes/`
**File naming:** `wireframes/{flow-folder}/{email-name}.md`
**Examples:**
- `wireframes/welcome/welcome-01-e1-gf.md`
- `wireframes/cart/cart-02-e1.md`
- `wireframes/winback-a/winback-a-19-e1-l3.md`
- `wireframes/pp-extended-ed/pped-22-e5-gf.md`

### Quality Gate — Phase 1

Before advancing to Phase 2, verify:
- [ ] All 125 wireframe files exist in `/root/projects/brightkidco/outputs/wireframes/`
- [ ] Every wireframe has all 8 mandatory sections
- [ ] Every wireframe has exact hex values in Technique Specs (no "teal" — must be "#2BAEB4")
- [ ] Every wireframe has verbatim copy in Copy Blocks (spot-check 10% against copy files)
- [ ] Every wireframe has valid product photo paths in Image Briefs
- [ ] Every wireframe has at least 5 component categories
- [ ] No two wireframes in the same flow share the same Layout ASCII structure
- [ ] Level-specific wireframes show level calibration differences
- [ ] Cross-level wireframes satisfy R1-R6

### Wave Distribution — Phase 1

| Wave | Agents | Emails Covered | Running Total |
|------|--------|---------------|---------------|
| Wave 2 | 15 | Welcome E1-E8 (28 of 32) | 28 |
| Wave 3 | 15 | Welcome remaining (4) + Phase 1 flows (26) | 58 |
| Wave 4 | 15 | Phase 2-3 flows (49) | 107 |
| Wave 5 | 9 | Remaining (18) + retries | 125 |


---

## Phase 2 — JSX Production

**Purpose:** Translate each of the 125 wireframes into working React JSX code. The JSX agent reads the wireframe section-by-section and produces a complete, self-contained JSX file that renders the email at 420px width using inline styles and the shared primitives.

**Agents:** 15 agents per wave, 9 waves
**Waves:** Waves 6-14
**Duration:** ~18 minutes (9 waves x 2 min)

### Source Files for Phase 2

| # | File | Path | Purpose |
|---|------|------|---------|
| 1 | The assigned wireframe | `/root/projects/brightkidco/outputs/wireframes/{flow}/{email}.md` | Authoritative blueprint |
| 2 | primitives.jsx | `/root/projects/brightkidco/raw/BKCO - EMAIL MARKETING/welcome-flow/primitives.jsx` | Shared components to reuse |
| 3 | product-showcase.jsx | `/root/projects/brightkidco/raw/BKCO - EMAIL MARKETING/welcome-flow/product-showcase.jsx` | Product placement patterns |
| 4 | content.js | `/root/projects/brightkidco/raw/BKCO - EMAIL MARKETING/welcome-flow/content.js` | Content data structure reference |
| 5 | Brand tokens | (from primitives.jsx lines 7-8: window.B, window.FONT) | Color definitions |
| 6 | strategy-map.json | `/root/projects/brightkidco/outputs/strategy-map.json` | Component assignments |
| 7 | This Plan | `/root/projects/brightkidco/outputs/bkc-email-production-plan-v5.md` | JSX Output Pattern, Golden Rules |

### JSX Output Pattern

Every JSX file MUST follow this exact structure. The file must be self-contained and render correctly when loaded in a browser with primitives.jsx and product-showcase.jsx already loaded.

```jsx
/* {Flow Name} — E{position} | {Level}
   Wireframe: wireframes/{flow}/{email}.md
   Strategy: strategy-map.json → {flow}.{email}
   Generated: {date}
*/

// ══════════════════════════════════════════════════════
// SECTION 1: PREHEADER + HEADER
// ══════════════════════════════════════════════════════
// The preheader is hidden in email clients but visible in preview.
// The header contains the logo centered on the flow's background color.

const Email_{flow}_{position}_{level} = () => (
  <EmailShell preheader="{verbatim preheader from copy file}" bg="{background color from wireframe Technique Specs}">

    {/* ── Header ── */}
    <Header bg="{header background from Technique Specs}" />

    {/* ══════════════════════════════════════════════════════
       SECTION 2: BAND TRANSITION (header → hero)
       ══════════════════════════════════════════════════════ */}
    <Band from="{color from Technique Specs}" to="{color from Technique Specs}" height={40} />

    {/* ══════════════════════════════════════════════════════
       SECTION 3: HERO / TITLE BLOCK
       ══════════════════════════════════════════════════════ */}
    {/* TitleBlock includes PartBadge + H1 with gradient accent */}
    <TitleBlock
      badge="{part badge text from Copy Blocks}"
      part1="{verbatim first line from Copy Blocks}"
      part2="{verbatim second line from Copy Blocks}"
      accent2={true}
      subhead="{subheading if present from Copy Blocks}"
    />

    {/* ══════════════════════════════════════════════════════
       SECTION 4: LETTER / BODY COPY
       ══════════════════════════════════════════════════════ */}
    <Letter
      bg="{letter background from Technique Specs}"
      first="{verbatim opening paragraph from Copy Blocks}"
      paras={[
        "{verbatim paragraph 2 from Copy Blocks}",
        "{verbatim paragraph 3 from Copy Blocks}",
        // ... all paragraphs verbatim from copy file
      ]}
    />

    {/* ══════════════════════════════════════════════════════
       SECTION 5: MECHANISM / EDUCATION (if applicable)
       ══════════════════════════════════════════════════════ */}
    {/* This section varies by email — use the component specified in wireframe */}
    <div style={{
      padding: "{from Technique Specs}",
      background: "{from Technique Specs}",
    }}>
      <Eyebrow>{verbatim eyebrow text}</Eyebrow>
      <H2 size={28} center>{verbatim heading}</H2>
      {/* Component-specific content from wireframe */}
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 6: SOCIAL PROOF / TESTIMONIAL (if applicable)
       ══════════════════════════════════════════════════════ */}
    {/* Testimonial block — exact copy from Copy Blocks */}

    {/* ══════════════════════════════════════════════════════
       SECTION 7: PRODUCT SHOWCASE (if applicable)
       ══════════════════════════════════════════════════════ */}
    {/* Use ProductShowcaseFull, ProductShowcaseMedium, or ProductShowcaseSoft
        as specified in wireframe Technique Specs */}

    {/* ══════════════════════════════════════════════════════
       SECTION 8: CTA CLOSE
       ══════════════════════════════════════════════════════ */}
    <CTAClose
      intro="{verbatim CTA intro from Copy Blocks}"
      button="{verbatim CTA button text from Copy Blocks}"
      fine="{fine print if any from Copy Blocks}"
    />

    {/* ══════════════════════════════════════════════════════
       SECTION 9: SIGNOFF (Lena)
       ══════════════════════════════════════════════════════ */}
    <Signoff />

    {/* ══════════════════════════════════════════════════════
       SECTION 10: OUT-LINE + FOOTER
       ══════════════════════════════════════════════════════ */}
    <OutLine />
    <Footer />

  </EmailShell>
);

// Register on window for rendering
Object.assign(window, { Email_{flow}_{position}_{level} });
```

### JSX Production Rules

1. **Import pattern:** All JSX files assume primitives.jsx and product-showcase.jsx are already loaded on the window object. No import statements needed. Reference components directly (e.g., `<EmailShell>`, `<Header>`, `<Band>`, `<Letter>`, `<CTAClose>`, `<Signoff>`, `<Footer>`, `<ProductShowcaseFull>`, etc.).

2. **Inline styles only:** Every style must be inline (style={{ ... }}). No CSS classes. No external stylesheets. Email clients strip <style> tags and <link> references.

3. **420px max-width:** The EmailShell component handles this via `MW = 420`. All content flows within this constraint.

4. **Font families:** Use `F.main` (Questrial) for body text. Use `F.display` (Fraunces) for accent/display text. Reference these via `window.FONT` (aliased as `F` in primitives).

5. **Brand tokens:** Use `B.teal`, `B.ink`, `B.soft`, `B.cream`, `B.paper`, `B.muted`, `B.gradient`, `B.gradientText` etc. Never hardcode hex values that exist in the token set. For hex values NOT in the token set (like `#D8F57C` for CTA text), hardcode the exact value.

6. **Copy verbatim:** Every string in the JSX must come from the Copy Blocks section of the wireframe, which was extracted verbatim from the copy file. No modifications.

7. **Component reuse:** Always prefer primitives components over custom implementations. If the wireframe specifies "Letter Section" — use the `<Letter>` component. If it specifies "CTAClose" — use `<CTAClose>`. Only build custom sections when no primitive matches.

8. **Image paths:** Product photos use relative paths from the email's location in the outputs/emails/ directory. The path format is: `../../raw/product-photos/{category}/{filename}`. Verify the path resolves correctly.

9. **Function component pattern:** Every email is a React functional component. No class components. No hooks (email rendering is static).

10. **Window registration:** Every email component must be registered on the window object at the end of the file: `Object.assign(window, { Email_{flow}_{position}_{level} });`

### Custom Section Pattern

When the wireframe specifies a section that no primitive covers, build it inline:

```jsx
{/* Custom Section: {Section Name} */}
<div style={{
  padding: "{from Technique Specs}",
  background: "{from Technique Specs}",
}}>
  {/* Section eyebrow */}
  <div style={{
    fontSize: 10.5,
    letterSpacing: 2,
    textTransform: "uppercase",
    color: "{from Technique Specs}",
    fontWeight: 700,
    marginBottom: 10,
  }}>
    {verbatim eyebrow text}
  </div>

  {/* Section heading */}
  <h2 style={{
    fontSize: {from Technique Specs},
    lineHeight: 1.15,
    fontWeight: 700,
    margin: "0 0 16px",
    letterSpacing: -0.4,
    textAlign: "center",
  }}>
    {verbatim heading text}
  </h2>

  {/* Section body — copy blocks */}
  <p style={{
    fontSize: {from Technique Specs},
    lineHeight: 1.7,
    color: "{from Technique Specs}",
    margin: "0 0 14px",
  }}>
    {verbatim body text}
  </p>
</div>
```

### Wave Distribution — Phase 2

| Wave | Agents | Emails Covered | Running Total |
|------|--------|---------------|---------------|
| Wave 6 | 15 | Welcome E1-E5 (20 of 32) | 20 |
| Wave 7 | 15 | Welcome E6-E8 (12) + Cart/Checkout/Browse (8) | 40 |
| Wave 8 | 15 | Transactional (4) + PP flows (12) | 56 |
| Wave 9 | 15 | Replenish (7) + Review (2) + Winback A (12) | 77 |
| Wave 10 | 15 | Site Abandon (1) + FAQ (6) + PP-Ext Ed (8 of 20) | 92 |
| Wave 11 | 15 | PP-Ext Ed remaining (12) + PP-At-Risk (4) | 108 |
| Wave 12 | 15 | Winback B (12 of 12) + Sunset (2) + retries (1) | 123 |
| Wave 13 | 2 | Remaining retries (2) | 125 |

### Quality Gate — Phase 2

Before advancing to Phase 3, verify:
- [ ] All 125 JSX files exist in `/root/projects/brightkidco/outputs/emails/{flow}/`
- [ ] Every JSX file has a valid function component declaration
- [ ] Every JSX file uses EmailShell wrapper
- [ ] Every JSX file references primitives components (not custom re-implementations)
- [ ] Every JSX file has inline styles only (no className, no CSS classes)
- [ ] Every JSX file has verbatim copy (spot-check 10% against wireframe Copy Blocks)
- [ ] Every JSX file registers on window object
- [ ] Every JSX file uses brand tokens for colors (no unauthorized hex values)
- [ ] Every JSX file renders at 420px width (MW constant)
- [ ] No JSX file exceeds 102KB (Gmail clip limit)

---

## Phase 3 — Visual Verification

**Purpose:** Render every JSX file in a browser environment, take a Playwright screenshot, and verify against the 20-point checklist. This is the quality gate that ensures every email looks correct before production.

**Agents:** 15 agents per wave, 9 waves
**Waves:** Waves 14-22
**Duration:** ~18 minutes (9 waves x 2 min)

### Source Files for Phase 3

| # | File | Path | Purpose |
|---|------|------|---------|
| 1 | The assigned JSX file | `/root/projects/brightkidco/outputs/emails/{flow}/{email}.jsx` | File to render and verify |
| 2 | The assigned wireframe | `/root/projects/brightkidco/outputs/wireframes/{flow}/{email}.md` | Blueprint to verify against |
| 3 | The assigned copy file | `/root/projects/brightkidco/outputs/copy/{flow}/{email}.md` | Original copy for verbatim check |
| 4 | primitives.jsx | `/root/projects/brightkidco/raw/BKCO - EMAIL MARKETING/welcome-flow/primitives.jsx` | Shared components for rendering |
| 5 | product-showcase.jsx | `/root/projects/brightkidco/raw/BKCO - EMAIL MARKETING/welcome-flow/product-showcase.jsx` | Product components for rendering |
| 6 | Brand tokens | (from primitives.jsx) | Color verification |

### 20-Point Verification Checklist

Every email must pass ALL 20 points. Failure on any point triggers Phase 4 (Revision).

| # | Check Point | How to Check | Pass Criteria |
|---|-------------|-------------|---------------|
| 1 | **JSX renders without console errors** | Load JSX in browser with primitives + product-showcase. Check browser console for errors. | Zero console errors. Zero React warnings. Clean render. |
| 2 | **Layout matches wireframe Layout ASCII** | Compare rendered email section-by-section against the Layout ASCII in the wireframe. | Every section present in the right order. No missing sections. No extra sections. Section types match. |
| 3 | **All images render correctly** | Check every image element. Verify src paths resolve. Check alt text present. | All images display (no broken image icons). Paths resolve to actual files. Alt text present on all images. |
| 4 | **Brand colors match tokens.js** | Sample 10 color values from the rendered email. Compare against brand token table. | Every sampled color matches a token value exactly. No unauthorized colors. |
| 5 | **Brand fonts load correctly** | Check computed font-family on headings, body text, accent text. | Questrial (F.main) on body. Fraunces (F.display) on accent. No fallback fonts visible. |
| 6 | **420px width renders correctly** | Measure rendered email width. Check max-width constraint. | Email renders at exactly 420px. No horizontal overflow. Content contained within bounds. |
| 7 | **Above the fold visible** | Check viewport 420x568px (iPhone SE). Verify logo + hero + CTA are visible without scrolling. | Logo visible. Hero text visible. Primary CTA visible. All within first 568px of scroll. |
| 8 | **CTA visibility (44px+ tap target)** | Measure CTA button dimensions. Check padding + font-size calculate to 44px+ height. | CTA height >= 44px. CTA width >= 44px. Touch target is clearly defined. |
| 9 | **Band transitions smooth** | Check gradient bands between sections. Verify colors transition smoothly. | No hard color breaks between sections. Gradients render smoothly. Transition colors match wireframe. |
| 10 | **No repetition within flow** | Compare this email's Layout ASCII against all other emails in the same flow. | Layout structure is unique. Hero type is different. Text treatment is different. Component selection differs. |
| 11 | **Copy alignment (verbatim)** | Extract all text from rendered email. Compare against copy file character-by-character. | Every word matches. No additions. No deletions. No paraphrasing. Formatting converted correctly (bold, italic). |
| 12 | **Component diversity (5+ categories)** | List all component categories used. Count unique categories. | At least 5 unique categories from the 13 primary categories. |
| 13 | **Flow identity** | Compare this email's visual signature against the Flow Design Signature table. | Mood matches. Color emphasis matches. Density matches. CTA tone matches. |
| 14 | **Mobile readiness (320px)** | Resize viewport to 320px. Check layout integrity. | No horizontal overflow. Text readable. Buttons tappable. Images scale proportionally. No content clipping. |
| 15 | **Conversion rules** | Check CTA placement (above fold?), CTA count (max 3?), CTA hierarchy (primary vs secondary). | Primary CTA above fold. Total CTAs <= 3. Primary CTA visually dominant. |
| 16 | **Wireframe fidelity** | Compare every section in the rendered email against every section in the wireframe. | Every wireframe section is present. No sections skipped. Section ordering matches. |
| 17 | **Contraption accuracy** | Sample 10 CSS values from rendered email. Compare against wireframe Technique Specs. | Border-radius matches. Padding matches. Font sizes match. Colors match. Shadows match. |
| 18 | **Image brief compliance** | Compare rendered images against wireframe Image Briefs. | Image source matches. Display dimensions match. Border/shadow specs match. Context matches. |
| 19 | **Dark mode preparation** | Check Render Notes section of wireframe. Verify dark mode instructions are addressed in JSX. | Dark mode background inversions specified. Text color inversions addressed. Border adjustments noted. |
| 20 | **Level calibration** | For level-specific emails: verify typography weight, hero mood, color warmth, section count, CTA urgency match level dimensions. For cross-level: verify R1-R6 compliance. | Level dimensions match the Level Calibration table. Cross-level emails satisfy all 6 R rules. |

### Verification Output Format

```markdown
# Verification Report: {flow-name} — E{position} | {level}

## Status: PASS | FAIL

## JSX File
- Path: {absolute path}
- Size: {KB} (limit: 102KB)
- Render time: {ms}

## Screenshot
- Path: {absolute path to Playwright screenshot}
- Dimensions: {width}x{height}

## Checklist Results

| # | Check | Status | Detail |
|---|-------|--------|--------|
| 1 | JSX renders | PASS/FAIL | {detail} |
| 2 | Layout matches | PASS/FAIL | {detail} |
| 3 | Images render | PASS/FAIL | {detail} |
| 4 | Colors match | PASS/FAIL | {detail} |
| 5 | Fonts load | PASS/FAIL | {detail} |
| 6 | 420px width | PASS/FAIL | {detail} |
| 7 | Above fold | PASS/FAIL | {detail} |
| 8 | CTA visibility | PASS/FAIL | {detail} |
| 9 | Band transitions | PASS/FAIL | {detail} |
| 10 | No repetition | PASS/FAIL | {detail} |
| 11 | Copy verbatim | PASS/FAIL | {detail} |
| 12 | Component diversity | PASS/FAIL | {detail} |
| 13 | Flow identity | PASS/FAIL | {detail} |
| 14 | Mobile ready | PASS/FAIL | {detail} |
| 15 | Conversion rules | PASS/FAIL | {detail} |
| 16 | Wireframe fidelity | PASS/FAIL | {detail} |
| 17 | Contraption accuracy | PASS/FAIL | {detail} |
| 18 | Image briefs | PASS/FAIL | {detail} |
| 19 | Dark mode prep | PASS/FAIL | {detail} |
| 20 | Level calibration | PASS/FAIL | {detail} |

## Issues (if FAIL)
- Issue 1: {description + location + fix suggestion}
- Issue 2: {description + location + fix suggestion}

## Recommendation: PROCEED | REVISE | ESCALATE
```

### Wave Distribution — Phase 3

| Wave | Agents | Emails Covered | Running Total |
|------|--------|---------------|---------------|
| Wave 14 | 15 | Welcome E1-E5 (20 of 32) | 20 |
| Wave 15 | 15 | Welcome E6-E8 (12) + Cart/Checkout/Browse (8) | 40 |
| Wave 16 | 15 | Transactional (4) + PP flows (12) | 56 |
| Wave 17 | 15 | Replenish (7) + Review (2) + Winback A (12) | 77 |
| Wave 18 | 15 | Site Abandon (1) + FAQ (6) + PP-Ext Ed (8 of 20) | 92 |
| Wave 19 | 15 | PP-Ext Ed remaining (12) + PP-At-Risk (4) | 108 |
| Wave 20 | 15 | Winback B (12) + Sunset (2) + retries (1) | 123 |
| Wave 21 | 2 | Remaining retries (2) | 125 |


---

## Phase 4 — Revision (Conditional)

**Purpose:** Fix any emails that failed Phase 3 visual verification. This phase only runs if Phase 3 flags failures. Each revision agent receives the specific failure report and the original wireframe, fixes the issues in the JSX, re-renders, and re-verifies.

**Agents:** 15 agents per wave (only if needed)
**Waves:** Variable (0-3 waves, depending on failure count)
**Duration:** ~6 minutes maximum (3 waves x 2 min)

### Trigger Conditions

Phase 4 activates when ANY of these conditions are met:
- Phase 3 verification report status is "FAIL" for any email
- Phase 3 verification report recommendation is "REVISE"
- More than 5 emails fail in a single Phase 3 wave

### Source Files for Phase 4

| # | File | Path | Purpose |
|---|------|------|---------|
| 1 | The failed JSX file | `/root/projects/brightkidco/outputs/emails/{flow}/{email}.jsx` | File to fix |
| 2 | The verification report | `/root/projects/brightkidco/outputs/verification/{flow}/{email}.md` | Specific failures to fix |
| 3 | The wireframe | `/root/projects/brightkidco/outputs/wireframes/{flow}/{email}.md` | Blueprint to re-check against |
| 4 | The copy file | `/root/projects/brightkidco/outputs/copy/{flow}/{email}.md` | Original copy for verbatim re-check |
| 5 | primitives.jsx | `/root/projects/brightkidco/raw/BKCO - EMAIL MARKETING/welcome-flow/primitives.jsx` | Shared components |
| 6 | product-showcase.jsx | `/root/projects/brightkidco/raw/BKCO - EMAIL MARKETING/welcome-flow/product-showcase.jsx` | Product components |

### Revision Process

1. **Read the verification report.** Identify exactly which checklist points failed. Note the specific issues described.

2. **Read the wireframe.** Understand the intended design. The wireframe is the blueprint — the JSX must match it.

3. **Read the current JSX.** Identify the code that produces the failing output.

4. **Fix the specific issues.** Only change what is needed to fix the failures. Do not refactor unrelated code. Do not "improve" things that are already passing.

5. **Re-render.** Load the fixed JSX in the browser. Take a new Playwright screenshot.

6. **Re-verify.** Run the full 20-point checklist again. ALL points must pass.

7. **Update the verification report.** Change status to "PASS" if all points now pass. Add a revision note documenting what was changed and why.

### Revision Limits

- **Maximum revision cycles:** 2 per email. If an email fails verification after 2 revision cycles, it is escalated to the human operator.
- **Maximum changes per revision:** 10 discrete changes. If more than 10 changes are needed, the wireframe itself may be flawed — escalate.
- **Escalation trigger:** If the same email fails the same checklist point after 2 revisions, the issue may be in the wireframe, not the JSX. Escalate to human for wireframe review.

### Revision Wave Distribution

| Wave | Agents | Emails Covered | Condition |
|------|--------|---------------|-----------|
| Wave R1 | 15 | First 15 failed emails | Only if Phase 3 has failures |
| Wave R2 | 15 | Next 15 failed emails (if any) | Only if Wave R1 has remaining failures |
| Wave R3 | 15 | Final retries (if any) | Only if Wave R2 has remaining failures |

### Quality Gate — Phase 4

After all revisions are complete:
- [ ] All previously failed emails now show PASS in verification report
- [ ] No email has been through more than 2 revision cycles
- [ ] No email has been escalated (or all escalations are documented)
- [ ] Revised JSX files are updated in `/root/projects/brightkidco/outputs/emails/`
- [ ] Revised verification reports are updated in `/root/projects/brightkidco/outputs/verification/`

---

## Phase 5 — XHTML Compilation

**Purpose:** Compile the 125 verified JSX files into production-ready XHTML email templates. Each JSX file is transformed into table-based HTML with MSO conditional comments for Outlook, VML image fallbacks, dark mode CSS media queries, and Gmail clip limit compliance (<102KB).

**Agents:** 5 agents per wave, 9 waves
**Waves:** Waves 22-30
**Duration:** ~18 minutes (9 waves x 2 min)

### Source Files for Phase 5

| # | File | Path | Purpose |
|---|------|------|---------|
| 1 | All 125 verified JSX files | `/root/projects/brightkidco/outputs/emails/{flow}/{email}.jsx` | Source for compilation |
| 2 | Verification reports | `/root/projects/brightkidco/outputs/verification/{flow}/{email}.md` | Confirm all PASS before compiling |
| 3 | Brand tokens | (from primitives.jsx) | Color values for CSS |
| 4 | Product photos | `/root/projects/brightkidco/raw/product-photos/` (29 images) | Image paths for src attributes |

### XHTML Compilation Requirements

Every compiled HTML file must meet these technical requirements:

1. **Table-based layout:** All layout must use HTML tables, not div-based CSS. Email clients (especially Outlook) do not support modern CSS layout (flexbox, grid). Every section is a `<table>` with `<tr>` and `<td>`.

2. **MSO conditional comments:** Outlook-specific rendering uses `<!--[if mso]>...<![endif]-->` blocks. These provide fallback layouts for Microsoft Outlook which uses Word's rendering engine.

3. **VML for Outlook images:** Images in Outlook must use VML (Vector Markup Language) fallback: `<!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml"...><![endif]-->`. This ensures images render in Outlook.

4. **Inline styles only:** All CSS must be inline (style="..." attributes). No <style> blocks (stripped by Gmail). No external stylesheets.

5. **Dark mode CSS:** Include `@media (prefers-color-scheme: dark)` media query for Apple Mail and supported clients. Override background colors and text colors for dark mode.

6. **Gmail clip limit:** Total HTML file size must be under 102KB (102,400 bytes). Gmail clips emails that exceed this limit, hiding the bottom portion. If compilation exceeds 102KB, optimize: remove comments, minify whitespace, consolidate styles.

7. **Doctype:** `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">`

8. **Language attribute:** `<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">`

9. **Meta tags:** Include `<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />` and `<meta name="viewport" content="width=device-width, initial-scale=1.0"/>`

10. **Image optimization:** All images use absolute URLs (not relative). Images include width/height attributes for layout stability. Alt text on all images.

### XHTML Template Structure

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>{Subject Line}</title>
  <!--[if mso]>
  <style type="text/css">
    body, table, td { font-family: Questrial, Arial, sans-serif !important; }
  </style>
  <![endif]-->
  <style type="text/css">
    /* Reset */
    body { margin: 0; padding: 0; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
    table { border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
    img { border: 0; -ms-interpolation-mode: bicubic; display: block; }
    /* Dark Mode */
    @media (prefers-color-scheme: dark) {
      .dark-bg { background-color: #1a1a1a !important; }
      .dark-text { color: #e0e0e0 !important; }
      .dark-border { border-color: #333333 !important; }
    }
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #FBF7F1; font-family: Questrial, Arial, sans-serif;">
  <!-- Preheader -->
  <div style="display: none; max-height: 0; overflow: hidden;">
    {preheader text}
    &zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;
  </div>

  <!-- Email Body -->
  <table role="presentation" width="420" align="center" cellpadding="0" cellspacing="0" border="0" style="max-width: 420px; margin: 0 auto;">
    <tr>
      <td style="background-color: {bg}; padding: 0;">

        <!-- Header -->
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td style="background-color: {header-bg}; padding: 24px 20px 0; text-align: center;">
              <img src="{logo-path}" alt="BrightKidCo" width="170" height="34" style="display: inline-block; height: 34px;" />
            </td>
          </tr>
        </table>

        <!-- Band Transition -->
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td style="height: 40px; background: linear-gradient(180deg, {from-color} 0%, {to-color} 100%); font-size: 0; line-height: 0;">&nbsp;</td>
          </tr>
        </table>

        <!-- ... (continue for every section from JSX) ... -->

      </td>
    </tr>
  </table>
</body>
</html>
```

### Wave Distribution — Phase 5

| Wave | Agents | Emails Covered | Running Total |
|------|--------|---------------|---------------|
| Wave 22 | 5 | Welcome E1-E6 (24 of 32) | 24 |
| Wave 23 | 5 | Welcome E7-E8 (8) + Cart/Checkout/Browse (8) | 40 |
| Wave 24 | 5 | Transactional (4) + PP flows (12) | 56 |
| Wave 25 | 5 | Replenish (7) + Review (2) + Winback A (6 of 12) | 71 |
| Wave 26 | 5 | Winback A remaining (6) + Site Abandon (1) + FAQ (6) | 84 |
| Wave 27 | 5 | PP-Extended Ed (10 of 20) | 94 |
| Wave 28 | 5 | PP-Extended Ed remaining (10) + PP-At-Risk (4) | 108 |
| Wave 29 | 5 | Winback B (12) + Sunset (2) + retries (1) | 123 |
| Wave 30 | 2 | Remaining retries (2) | 125 |

### Quality Gate — Phase 5

After all XHTML compilation is complete:
- [ ] All 125 HTML files exist in `/root/projects/brightkidco/outputs/production/{flow}/`
- [ ] Every HTML file has valid XHTML doctype
- [ ] Every HTML file has MSO conditional comments for Outlook
- [ ] Every HTML file has VML fallbacks for images
- [ ] Every HTML file has dark mode CSS media query
- [ ] Every HTML file is under 102KB (Gmail clip limit)
- [ ] Every HTML file has inline styles only (no external CSS)
- [ ] Every HTML file has preheader text
- [ ] Every HTML file renders correctly at 420px width
- [ ] Every HTML file renders correctly in Outlook (test with Litmus or Email on Acid if available)

---

## Quality Gates — Inter-Phase

Quality gates are mandatory checkpoints between every phase. No phase begins until its preceding quality gate passes. Quality gates are enforced by Ralph Loop orchestrator.

| Gate | Between | Checks | Pass Criteria | Fail Action |
|------|---------|--------|---------------|-------------|
| **G0** | Phase 0 → Phase 1 | strategy-map.json validity, 125 emails present, 5+ categories each, valid image assignments, valid copy paths | All checks pass | Re-run Phase 0 agents for failed entries |
| **G1** | Phase 1 → Phase 2 | 125 wireframes exist, all 8 sections present, exact hex values, verbatim copy, valid image paths, 5+ categories, unique layouts per flow, level calibration | All checks pass | Re-run Phase 1 agents for failed wireframes |
| **G2** | Phase 2 → Phase 3 | 125 JSX files exist, valid function components, EmailShell wrapper, inline styles, verbatim copy, window registration, brand tokens, 420px width, <102KB | All checks pass | Re-run Phase 2 agents for failed JSX files |
| **G3** | Phase 3 → Phase 4/5 | All 125 verification reports exist, all status PASS | All 125 PASS | Enter Phase 4 for failed emails |
| **G4** | Phase 4 → Phase 5 | All previously failed emails now PASS, no email exceeded 2 revision cycles | All PASS | Escalate remaining failures to human |
| **G5** | Phase 5 → Delivery | 125 HTML files exist, valid XHTML, MSO comments, VML fallbacks, dark mode CSS, <102KB, inline styles only, preheader, 420px width | All checks pass | Re-run Phase 5 agents for failed files |

### Gate Enforcement

Ralph Loop must verify each gate before advancing. The verification process:

1. **Automated checks:** File existence, file size, JSON validity, pattern matching (e.g., checking for `<table` tags in HTML files, checking for `style={{` in JSX files).

2. **Sampling checks:** For verbatim copy and color accuracy, sample 10% of files and verify against source. If any sample fails, expand to 100% check.

3. **Gate report:** Ralph produces a gate report listing all checks and their pass/fail status. The report is logged to the mission log.

4. **Gate blocking:** If any check fails, the gate blocks. Ralph retries failed items (up to 3 retries per item). If retries fail, escalation to human.

---

## Risk Mitigation

| # | Risk | Probability | Impact | Mitigation | Escalation |
|---|------|-------------|--------|------------|------------|
| R1 | **Missing source file** — A copy file or reference file does not exist at the specified path | Low | High | Phase 0 verifies all paths before starting. Ralph checks file existence before each task dispatch. | If file missing: log the missing path, skip the task, escalate to human with the exact missing path. Do not guess or substitute. |
| R2 | **Wireframe copy mismatch** — Wireframe agent paraphrases copy instead of extracting verbatim | Medium | High | Quality Gate G1 includes spot-check of 10% wireframes against copy files. Verbatim check is automated via string comparison. | If mismatch found: reject the wireframe, re-dispatch the agent with explicit "VERBATIM — NO PARAPHRASING" instruction. |
| R3 | **JSX rendering failure** — JSX file produces console errors or blank render | Medium | Medium | Phase 3 verification catches all rendering failures. Primitives.jsx is tested and known to work. | If render fails: check for missing component references, syntax errors, unclosed tags. Fix and re-render. After 3 failures, escalate. |
| R4 | **Component library mismatch** — Wireframe specifies a component that does not exist in the 922-component library | Low | Medium | Phase 0 maps components from the actual library index. Wireframe agents read the component index before selecting. | If mismatch: substitute the closest available component from the same category. Log the substitution. Do not invent components. |
| R5 | **Gmail clip limit exceeded** — Compiled HTML exceeds 102KB | Medium | Medium | Phase 5 agents check file size after compilation. If over 102KB, optimize: remove HTML comments, minify whitespace, consolidate redundant styles. | If still over 102KB after optimization: identify the largest sections and simplify. Escalate if structural changes needed. |
| R6 | **Level calibration drift** — Level-specific emails drift from their calibration dimensions | Medium | High | Quality Gate G1 and G3 both check level calibration. The Level Calibration table provides explicit dimensions. | If drift found: compare against Level Calibration table, adjust typography, colors, density, CTA tone to match. |
| R7 | **Flow desensitization** — Emails within a flow become too similar | Medium | High | Quality Gate G1 checks Layout ASCII uniqueness per flow. Rule 5 enforces unique structure. | If too similar: force different hero type, different text treatment, different component selection. Re-wireframe. |
| R8 | **Image path breakage** — Product photo paths in JSX do not resolve to actual files | Low | Medium | Phase 0 assigns images from verified paths. Phase 3 verification checks all images render. | If broken: check path construction. The base path is `/root/projects/brightkidco/raw/product-photos/`. Relative from email location. |
| R9 | **Outlook rendering failure** — VML or MSO conditional comments produce broken layout in Outlook | Medium | Medium | Phase 5 follows the XHTML template structure which includes proven MSO patterns. | If Outlook fails: check VML syntax, verify conditional comment nesting, test with Litmus/Email on Acid. |
| R10 | **Agent context overflow** — Agent runs out of context window before completing task | Low | Medium | Tasks are scoped to 2-4 emails per agent. Source files are prioritized. | If overflow: split the task into smaller chunks. Assign 1 email per agent for retries. |
| R11 | **Cross-flow image repetition** — Same product photo used in too many flows | Low | Low | Phase 0 assigns images with flow-level tracking. 29 images across 125 emails means ~4.3 emails per image average. | If repetition detected: redistribute images. Prioritize unique images for hero placements, reuse for thumbnails. |
| R12 | **Brand token violation** — JSX uses hex values not in the token set | Medium | High | Quality Gate G2 checks for unauthorized hex values. Phase 3 verification spot-checks colors. | If violation found: replace with nearest token value. Log the violation. |
| R13 | **Wireframe incomplete** — Wireframe agent skips a section or provides insufficient Technique Specs | Low | High | Quality Gate G1 checks all 8 mandatory sections. Automated check for hex values in Technique Specs. | If incomplete: reject and re-dispatch with explicit section checklist. |
| R14 | **Playwright environment failure** — Browser rendering environment not available | Low | High | Verify Playwright is installed and configured before Phase 3 begins. | If Playwright fails: install/reinstall. If still fails, escalate to human for environment fix. |

---

## Wave Distribution Summary

Complete wave map for all phases. Total: 30 waves (Phase 4 adds 0-3 conditional waves).

| Wave | Phase | Agents | Emails | Running Total | Notes |
|------|-------|--------|--------|---------------|-------|
| 1 | 0 | 5 | 125 (strategy) | 125 | Strategy mapping |
| 2 | 1 | 15 | 28 | 28 | Welcome E1-E8 (28 of 32) |
| 3 | 1 | 15 | 30 | 58 | Welcome remaining + Phase 1 flows |
| 4 | 1 | 15 | 49 | 107 | Phase 2-3 flows |
| 5 | 1 | 9 | 18 | 125 | Remaining + retries |
| 6 | 2 | 15 | 20 | 20 | Welcome E1-E5 (JSX) |
| 7 | 2 | 15 | 20 | 40 | Welcome E6-E8 + Cart/Checkout/Browse |
| 8 | 2 | 15 | 16 | 56 | Transactional + PP flows |
| 9 | 2 | 15 | 21 | 77 | Replenish + Review + Winback A |
| 10 | 2 | 15 | 15 | 92 | Site Abandon + FAQ + PP-Ext Ed start |
| 11 | 2 | 15 | 16 | 108 | PP-Ext Ed remaining + PP-At-Risk |
| 12 | 2 | 15 | 15 | 123 | Winback B + Sunset + retries |
| 13 | 2 | 2 | 2 | 125 | Final retries |
| 14 | 3 | 15 | 20 | 20 | Welcome E1-E5 (verify) |
| 15 | 3 | 15 | 20 | 40 | Welcome E6-E8 + Cart/Checkout/Browse |
| 16 | 3 | 15 | 16 | 56 | Transactional + PP flows |
| 17 | 3 | 15 | 21 | 77 | Replenish + Review + Winback A |
| 18 | 3 | 15 | 15 | 92 | Site Abandon + FAQ + PP-Ext Ed start |
| 19 | 3 | 15 | 16 | 108 | PP-Ext Ed remaining + PP-At-Risk |
| 20 | 3 | 15 | 15 | 123 | Winback B + Sunset + retries |
| 21 | 3 | 2 | 2 | 125 | Final retries |
| R1 | 4 | 15 | up to 15 | — | Revision (conditional) |
| R2 | 4 | 15 | up to 15 | — | Revision round 2 (conditional) |
| R3 | 4 | 15 | up to 15 | — | Revision round 3 (conditional) |
| 22 | 5 | 5 | 24 | 24 | Welcome E1-E6 (XHTML) |
| 23 | 5 | 5 | 16 | 40 | Welcome E7-E8 + Cart/Checkout/Browse |
| 24 | 5 | 5 | 16 | 56 | Transactional + PP flows |
| 25 | 5 | 5 | 15 | 71 | Replenish + Review + Winback A start |
| 26 | 5 | 5 | 13 | 84 | Winback A remaining + Site Abandon + FAQ |
| 27 | 5 | 5 | 10 | 94 | PP-Extended Ed (10 of 20) |
| 28 | 5 | 5 | 14 | 108 | PP-Ext Ed remaining + PP-At-Risk |
| 29 | 5 | 5 | 15 | 123 | Winback B + Sunset + retries |
| 30 | 5 | 2 | 2 | 125 | Final retries |

### Total Task Count

| Phase | Tasks | Notes |
|-------|-------|-------|
| Phase 0 | 5 | 5 agents mapping 125 emails |
| Phase 1 | 125 | 1 wireframe per email |
| Phase 2 | 125 | 1 JSX file per email |
| Phase 3 | 125 | 1 verification per email |
| Phase 4 | 0-45 | Only for failed emails (up to 2 retries each) |
| Phase 5 | 125 | 1 HTML file per email |
| **Total** | **505-550** | + 0-45 conditional revisions |

---

## Cross-Reference Matrix

This matrix shows which source files are consumed by which phases.

| Source File | Phase 0 | Phase 1 | Phase 2 | Phase 3 | Phase 4 | Phase 5 |
|-------------|---------|---------|---------|---------|---------|---------|
| Copy files (125) | Read | Read | - | Read | Read | - |
| strategy-map.json | Write | Read | Read | - | - | - |
| Giuliano Demands | Read | Read | - | Read | - | - |
| Design Skills Reference | Read | Read | - | - | - | - |
| Component Index (922) | Read | Read | - | - | - | - |
| Product Photos (29) | Assign | Brief | Path | Verify | - | Compile |
| primitives.jsx | Read | Read | Read | Render | Fix | Compile |
| product-showcase.jsx | Read | Read | Read | Render | Fix | Compile |
| content.js / content-flow2.js | Read | - | Reference | - | - | - |
| Wireframes (125) | - | Write | Read | Verify | Read | - |
| JSX files (125) | - | - | Write | Read | Fix | Read |
| Verification reports (125) | - | - | - | Write | Read | Gate |
| HTML files (125) | - | - | - | - | - | Write |

---

## Appendix A: Email-to-Flow Quick Reference

| Flow | Emails | Levels | Total Files | Phase |
|------|--------|--------|-------------|-------|
| Welcome (01) | E1-E8 | L1, L2, L3, GF | 32 | 1 |
| Cart Abandon (02) | E1-E3 | Cross-level | 3 | 1 |
| Checkout Abandon (03) | E1-E2 | Cross-level | 2 | 1 |
| Browse Abandon (04) | E1-E3 | Cross-level | 3 | 1 |
| Order Confirm (05) | E1 | Cross-level | 1 | 1 |
| Shipping (06) | E1 | Cross-level | 1 | 1 |
| Out for Delivery (07) | E1 | Cross-level | 1 | 1 |
| Arrived (08) | E1 | Cross-level | 1 | 1 |
| PP-Direct Upsell (09) | E1-E2 | Cross-level | 2 | 1 |
| PP-Level Detection (10) | E1 | GF | 1 (+meta) | 1 |
| PP-Education (11) | D0-D21 | Cross-level | 4 | 2 |
| PP-Extended Upsell (12) | E1-E3 | Cross-level | 3 | 2 |
| PP-Mid Check-In (13) | D30-D60 | Cross-level | 3 | 2 |
| PP-Mary Story (14) | E1 | Cross-level | 1 | 2 |
| Replenish A (15) | E1-E3 | Cross-level | 3 | 2 |
| Replenish B (16) | E1-E2 | Cross-level | 2 | 2 |
| Replenish C (17) | E1-E2 | Cross-level | 2 | 2 |
| Review Request (18) | E1-E2 | Cross-level | 2 | 2 |
| Winback A (19) | E1-E3 | L1, L2, L3, GF | 12 | 2 |
| Site Abandon (20) | E1 | Cross-level | 1 | 3 |
| FAQ Library (21) | E1-E6 | Cross-level | 6 | 3 |
| PP-Extended Ed (22) | E1-E5 | L1, L2, L3, GF | 20 | 3 |
| PP-At-Risk (23) | E1-E4 | Cross-level | 4 | 3 |
| Winback B (24) | E1-E3 | L1, L2, L3, GF | 12 | 3 |
| Sunset (25) | E1-E2 | Cross-level | 2 | 3 |

---

## Appendix B: Brand Token Quick Reference

```
B.teal      = #2BAEB4    (Primary accent)
B.green     = #5DD07A    (Secondary accent)
B.ink       = #1F2D2F    (Primary text/dark)
B.soft      = #4A6568    (Secondary text)
B.cream     = #FBF7F1    (Warm background)
B.paper     = #FFFFFF    (Page background)
B.muted     = #8A9B9D    (Tertiary text)
B.tealDeep  = (darker teal variant)
B.gradient  = linear-gradient(135deg, #2BAEB4 0%, #5DD07A 100%)
B.gradientText = CSS gradient text effect

#D8F57C  — Lime green (CTA text on dark)
#FFD866  — Warm yellow (badges, stickers)
#F6F2EA  — Warm off-white (preheader)
#FFFDF6  — Warm white (card interiors)
#FAF7F0  — Light cream (pills)
#B8CACD  — Light gray-blue (CTA intro)
#8FAFB2  — Muted blue-gray (signoff secondary)
#1F2A2C  — Near-black teal (signoff card)
#2F3D40  — Dark teal-gray (signoff border)
#3A4547  — Dark gray-teal (dashed borders)
#C98C6B  — Warm brown (portrait)
#D4A574  — Light brown (portrait)
#F5E8D0  — Warm beige (portrait background)

MW = 420   (Max email width)
F.main = Questrial (Primary font)
F.display = Fraunces (Serif accent)
```

---

## Appendix C: File Naming Conventions

| Output Type | Path Pattern | Example |
|-------------|-------------|---------|
| Strategy map | `outputs/strategy-map.json` | `strategy-map.json` |
| Wireframes | `outputs/wireframes/{flow}/{email}.md` | `wireframes/welcome/welcome-01-e1-gf.md` |
| JSX files | `outputs/emails/{flow}/{email}.jsx` | `emails/welcome/welcome-01-e1-gf.md` |
| Verification | `outputs/verification/{flow}/{email}.md` | `verification/welcome/welcome-01-e1-gf.md` |
| Production HTML | `outputs/production/{flow}/{email}.html` | `production/welcome/welcome-01-e1-gf.html` |

**Flow folder names** match the copy file directory names exactly:
`welcome`, `cart`, `checkout`, `browse`, `transactional`, `pp-direct-upsell`, `pp-level-detection`, `pp-education`, `pp-extended-upsell`, `pp-mid-checkin`, `pp-mary-story`, `replenish-a`, `replenish-b`, `replenish-c`, `review-request`, `winback-a`, `site-abandonment`, `faq-library`, `pp-extended-ed`, `pp-at-risk`, `winback-b`, `sunset`

**Email file names** match the copy file names exactly (minus the .md extension, plus the appropriate output extension).

---

## Appendix D: Primitives Component Reference

These components from `primitives.jsx` are available for all JSX files:

| Component | Purpose | Props |
|-----------|---------|-------|
| `EmailShell` | Root wrapper (420px, font, color) | children, preheader, bg |
| `Header` | Logo centered on background | bg |
| `Band` | Gradient transition between sections | from, to, height |
| `ImgFrame` | Dashed teal image placeholder | height, label, sublabel, radius, aspect |
| `FramedImage` | Black-bordered image with shadow | children, height, label, sublabel, shadow |
| `PartBadge` | Yellow sticker badge | children |
| `TitleBlock` | PartBadge + H1 + optional subhead | badge, part1, part2, accent2, subhead |
| `Letter` | Paragraph stack on warm background | bg, paras, first |
| `Eyebrow` | Section eyebrow label | children, color |
| `H2` | Section heading | children, center, size |
| `CTAClose` | Dark CTA close section | intro, button, fine, bg |
| `Signoff` | Lena's personal signoff card | bg |
| `OutLine` | Soft unsubscribe-adjacent line | bg |
| `Footer` | Standard footer with links + social | (no props — reads from window) |

### Product Showcase Components

| Component | Purpose | Props |
|-----------|---------|-------|
| `ProductShowcaseFull` | Hero product block (E4, E6) | eyebrow, title, titleAccent, sub, priceFrom, priceNote, features, ctaButton, guaranteeBadge |
| `ProductShowcaseMedium` | Inline product card (E5) | eyebrow, title, priceFrom, ctaButton |
| `ProductShowcaseSoft` | End-of-email gentle mention (E2, E3) | eyebrow, line, ctaText |

---

*End of Plan — BrightKidCo Email JSX Production Plan v5.0*
*Total plan lines: ~3,500+*
*Ralph Loop compatible: Yes*
*Autonomous execution ready: Yes*

---

## Appendix E: Detailed Narrative — Why Each Phase Matters

### Phase 0: The Map Before the Territory

Phase 0 is not busywork. It is the intelligence layer that prevents every downstream phase from making wrong decisions. Without a strategy map, wireframe agents would guess which components to use. They would guess which product photos to assign. They would guess which creative strategy to follow. Guessing at scale — 125 emails — produces inconsistency, repetition, and brand drift.

The strategy map solves three problems simultaneously. First, it ensures component diversity: by mapping 5+ component categories to each email before wireframing begins, we prevent the common failure mode where agents default to the same 3-4 components for every email. Second, it prevents image repetition: by tracking which product photos are assigned to which flow positions, we ensure no subscriber sees the same lifestyle photo twice in the same flow. Third, it captures the creative strategy from each copy file: the big idea, the emotional arc position, the mechanism approach — all extracted once and referenced by every downstream agent.

The 5 agents in Phase 0 are not arbitrary. Agent 1 handles Welcome Flow exclusively because Welcome has 32 emails (8 positions x 4 levels) — the largest single flow — and requires the most careful calibration across levels. Agent 2 handles the Phase 1 flows (11 flows, 24 emails) because these are the launch-critical flows that must work on day one. Agent 3 handles Phase 2 flows including Winback A (12 level-specific emails) because reconnection flows require the most emotional sensitivity. Agent 4 handles Phase 3 flows including PP-Extended Education (20 level-specific emails) because deep education requires the most technical accuracy. Agent 5 is the compiler — it takes all extractions and produces the single source-of-truth JSON that every downstream agent reads.

### Phase 1: The Blueprint Is Everything

Phase 1 produces the wireframes — the detailed ASCII blueprints that Phase 2 JSX agents follow pixel-for-pixel. This is the most critical phase in the entire pipeline because errors here cascade into every downstream phase. A wrong hex value in the wireframe produces a wrong color in the JSX, which produces a wrong screenshot in verification, which produces a wrong email in production.

The 8 mandatory sections in every wireframe are not arbitrary. Each section serves a specific downstream purpose:

**Section 1 (Metadata)** gives the agent context: which flow, which position, which level, which phase. Without this, the agent cannot calibrate its decisions.

**Section 2 (Strategy Box)** captures the big idea and component selection rationale. This prevents "component salad" — the failure mode where agents pick random components without a coherent creative vision. The differentiation note forces the agent to articulate exactly how this email differs from others in the same flow.

**Section 3 (Creative Box)** specifies exact colors, typography, border-radius, shadows, and spacing. These values come from the Flow Design Signature and Level Calibration tables. They are not invented — they are assigned.

**Section 4 (Layout ASCII)** is the visual blueprint. It shows every section as a box with its component type labeled. The JSX agent reads this top-to-bottom and builds each section in order. No guessing about what comes where.

**Section 5 (Technique Specs)** provides the exact CSS/JSX specifications for every section. Every value is a specific number. No "approximately." No "around." No "similar to." This is the contract between the wireframe agent and the JSX agent.

**Section 6 (Copy Blocks)** contains the verbatim copy extracted from the copy file. This is the mechanism that prevents copy drift. The copy goes: copy file → wireframe Copy Blocks → JSX text content. Every hop preserves every word.

**Section 7 (Image Briefs)** specifies every image placement: source path, display dimensions, border-radius, shadow, context, and alt text. This prevents the "image lottery" where agents pick random images.

**Section 8 (Render Notes)** captures dark mode preparation, responsive considerations, and email client compatibility. This is the knowledge transfer from the wireframe agent (who understands the design) to the verification agent (who checks the output).

### Phase 2: Translation, Not Invention

Phase 2 JSX agents are translators, not designers. They read the wireframe — the authoritative blueprint — and produce JSX code that implements it exactly. This distinction is critical. If JSX agents "design" as they code, they introduce drift. The wireframe says borderRadius: 20 and the JSX agent thinks "24 would look better" — that is drift. The wireframe says padding: "22px 14px 20px" and the JSX agent thinks "20px on the left would be more balanced" — that is drift.

At 125 emails, even 1% drift means 1-2 emails with wrong colors, wrong spacing, wrong typography. Multiply by the subscriber count and you have hundreds of people seeing a slightly-off brand experience. Drift is the enemy of scale.

The JSX Output Pattern in this plan provides the exact template. Every email follows the same structure: EmailShell → Header → Band → TitleBlock → Letter → [custom sections] → CTAClose → Signoff → OutLine → Footer. The custom sections in the middle vary per email (that is where the wireframe's unique layout is implemented), but the outer structure is consistent. This consistency is the family resemblance — all 125 emails look like they belong to the same brand.

### Phase 3: Trust but Verify

Phase 3 is the quality gate that catches everything Phases 0-2 might have missed. It is not a formality. It is a full 20-point inspection of every email, performed by agents who have no stake in the email's creation. They are independent auditors.

The 20-point checklist covers every dimension of email quality:

- **Technical quality** (points 1, 6, 8, 14): Does it render? Is it 420px? Is the CTA tappable? Does it work at 320px?
- **Visual fidelity** (points 2, 4, 5, 9, 17): Does it match the wireframe? Are the colors right? Do the fonts load? Are the bands smooth? Do the CSS values match?
- **Content integrity** (points 3, 11, 18): Do images render? Is copy verbatim? Do images match briefs?
- **Strategic compliance** (points 10, 12, 13, 15, 16, 20): No repetition? 5+ component categories? Flow identity preserved? Conversion rules met? Wireframe fidelity? Level calibration?
- **Production readiness** (points 7, 19): Above the fold? Dark mode prepared?

Each point has a specific how-to-check method. This is not subjective. "Layout matches wireframe Layout ASCII" means: open the wireframe, look at the Layout ASCII, open the rendered email, compare section-by-section. Every section in the ASCII must be present in the render. No sections missing. No extra sections. The order must match.

### Phase 4: Fix What Breaks

Phase 4 exists because perfection is not guaranteed. Even with careful wireframing and precise JSX translation, some emails will fail verification. Phase 4 catches these failures, diagnoses the specific issues, and fixes them.

The key constraint in Phase 4 is scope: agents must fix the specific issues flagged in the verification report, nothing more. They must not refactor unrelated code. They must not "improve" things that are already passing. The verification report says "Check 17 FAILED: border-radius on product card is 16px but wireframe specifies 20px" — the agent changes 16 to 20, re-renders, re-verifies. Done.

The 2-revision limit prevents infinite loops. If an email fails the same check twice, the problem is likely in the wireframe, not the JSX. The wireframe itself may need correction. At that point, escalation to the human operator is the right move.

### Phase 5: Production-Ready Email

Phase 5 transforms JSX (which renders in browsers) into XHTML (which renders in email clients). This is the hardest technical transformation in the pipeline because email clients are the most hostile rendering environment in web development.

Outlook uses Word's rendering engine. Gmail strips <style> tags. Yahoo Mail adds its own markup. Apple Mail supports the most CSS but is only ~30% of the market. The XHTML template in this plan is battle-tested: table-based layout (works everywhere), inline styles (works in Gmail), MSO conditional comments (handles Outlook), VML image fallbacks (handles Outlook images), dark mode CSS (handles Apple Mail dark mode).

The 102KB Gmail clip limit is a hard constraint. Gmail clips emails that exceed 102KB, hiding everything below the clip line. For a 125-email project where some emails are long (Welcome E1 can be 500+ words of body copy), this limit requires careful optimization. The Phase 5 agent must: remove HTML comments, minify whitespace, consolidate redundant inline styles, and if necessary, trim non-essential content.


---

## Appendix F: Detailed Agent Instructions

### Wireframe Agent Instructions (Phase 1)

You are a wireframe agent. Your job is to produce a detailed ASCII wireframe for one email. You are given a copy file, a strategy map entry, the flow design signature, and the level calibration dimensions. You must produce a wireframe with all 8 mandatory sections, every value exact, every word of copy verbatim.

**Step 1: Read the copy file.** Read the entire copy file for your assigned email. Understand the creative strategy, the emotional arc, the mechanism approach, the CTA hierarchy. This is your source of truth for all copy decisions.

**Step 2: Read the strategy map entry.** Look up your email in strategy-map.json. Note the recommended components, the assigned product images, and the creative strategy summary. These are your starting points — you may adjust based on the copy file, but you must justify any deviation.

**Step 3: Read the flow design signature.** Look up your flow's signature in the Flow Design Signatures table. Note the mood, color emphasis, hero type, image style, density, and CTA tone. Every design decision must honor this signature.

**Step 4: Read the level calibration.** If your email is level-specific, read the Level Calibration table for your level. Note the typography weight, hero image mood, color warmth, section count, CTA urgency, copy density, social proof style, image count, border radius, shadow intensity, and background. These dimensions differentiate your level from others.

**Step 5: Select components.** Using the Component-to-Section Mapping table, select specific components for each section. Ensure 5+ unique categories are represented. Ensure your selections match the flow signature and level calibration.

**Step 6: Build the Layout ASCII.** Draw every section as a box with its component type labeled. Width is 420px. Heights are proportional. Colors are indicated. This is the visual blueprint.

**Step 7: Write Technique Specs.** For every section in the Layout ASCII, write the exact CSS/JSX specifications. Every value must be a specific number, color, or formula. No "approximately." No "around."

**Step 8: Extract Copy Blocks.** Copy every word from the copy file into the Copy Blocks section. Preserve markdown formatting. Do not paraphrase. Do not add. Do not remove.

**Step 9: Write Image Briefs.** For every image placement, write the source path, display dimensions, border-radius, shadow, context, and alt text. Use the product photos assigned in the strategy map.

**Step 10: Write Render Notes.** Capture dark mode preparation, responsive considerations, email client compatibility, and any special instructions for the JSX and verification agents.

### JSX Agent Instructions (Phase 2)

You are a JSX agent. Your job is to translate a wireframe into working React JSX code. You are given a wireframe (the authoritative blueprint) and the primitives/product-showcase component libraries. You must produce a self-contained JSX file that renders the email at 420px width.

**Step 1: Read the wireframe.** Read the entire wireframe for your assigned email. Understand the Layout ASCII, Technique Specs, Copy Blocks, and Image Briefs. This is your blueprint.

**Step 2: Read primitives.jsx.** Understand the available shared components: EmailShell, Header, Band, ImgFrame, FramedImage, PartBadge, TitleBlock, Letter, Eyebrow, H2, CTAClose, Signoff, OutLine, Footer. Know their props and behavior.

**Step 3: Read product-showcase.jsx.** Understand the three product placement variants: ProductShowcaseFull, ProductShowcaseMedium, ProductShowcaseSoft. Know which one the wireframe specifies for each product section.

**Step 4: Build the JSX structure.** Follow the JSX Output Pattern from this plan. Start with the EmailShell wrapper, then build each section in the order specified by the Layout ASCII.

**Step 5: Implement each section.** For each section in the Layout ASCII:
- Use the primitives component specified in Technique Specs (e.g., Letter, CTAClose, TitleBlock)
- Apply the exact CSS values from Technique Specs (padding, border-radius, colors, fonts)
- Insert the verbatim copy from Copy Blocks
- Add the images from Image Briefs with correct paths

**Step 6: Build custom sections.** For sections not covered by primitives, build inline using the Custom Section Pattern. Apply the exact CSS values from Technique Specs.

**Step 7: Register on window.** At the end of the file, register the component: `Object.assign(window, { Email_{flow}_{position}_{level} });`

**Step 8: Self-check.** Before declaring done, verify:
- All sections from the Layout ASCII are present
- All copy is verbatim from Copy Blocks
- All colors use brand tokens (or exact hex values from Technique Specs)
- All styles are inline (no className, no CSS classes)
- The file is under 102KB

### Verification Agent Instructions (Phase 3)

You are a verification agent. Your job is to render a JSX file in a browser, take a Playwright screenshot, and check every point on the 20-point verification checklist. You are an independent auditor — you have no stake in the email's creation.

**Step 1: Load the environment.** Set up a browser environment with React, primitives.jsx, and product-showcase.jsx loaded. Ensure the browser viewport is 420px wide.

**Step 2: Render the JSX.** Load the assigned JSX file. Check the browser console for errors. If there are errors, log them as Check 1 FAIL.

**Step 3: Take the screenshot.** Capture a full-page Playwright screenshot at 420px width. Save it to the verification directory.

**Step 4: Run the 20-point checklist.** Go through each check point systematically:
- Check 1: Console errors? (Already done in Step 2)
- Check 2: Compare Layout ASCII against rendered sections
- Check 3: Check all image elements render (no broken icons)
- Check 4: Sample 10 color values, compare against brand tokens
- Check 5: Check computed font-family on headings and body
- Check 6: Measure rendered width (must be 420px)
- Check 7: Check viewport 420x568 for above-fold visibility
- Check 8: Measure CTA button dimensions (must be 44px+)
- Check 9: Check gradient bands for smooth transitions
- Check 10: Compare against other emails in same flow for uniqueness
- Check 11: Extract all text, compare against copy file
- Check 12: List component categories, count unique (must be 5+)
- Check 13: Compare against Flow Design Signature
- Check 14: Resize to 320px, check layout integrity
- Check 15: Check CTA placement, count, hierarchy
- Check 16: Compare every section against wireframe
- Check 17: Sample 10 CSS values against Technique Specs
- Check 18: Compare images against Image Briefs
- Check 19: Check Render Notes for dark mode preparation
- Check 20: Check level calibration dimensions

**Step 5: Write the report.** Document every check point with PASS/FAIL and specific detail. If any check FAILS, describe the exact issue and suggest a fix.

**Step 6: Set recommendation.** If all 20 checks PASS: recommendation is "PROCEED." If any check FAILS: recommendation is "REVISE." If the failure appears to be in the wireframe, not the JSX: recommendation is "ESCALATE."

### XHTML Compilation Agent Instructions (Phase 5)

You are an XHTML compilation agent. Your job is to transform a verified JSX file into a production-ready HTML email template. You must handle Outlook compatibility, dark mode, and Gmail clip limits.

**Step 1: Read the JSX file.** Understand the structure, components, styles, and content.

**Step 2: Read the verification report.** Confirm the email has PASS status. If it has FAIL status, do not compile — flag it for Phase 4 revision.

**Step 3: Transform JSX to table-based HTML.** Convert every JSX section into an HTML table structure:
- `<div style={{...}}>` → `<td style="...">`
- `<table>` layouts → `<table role="presentation">` with cellpadding/cellspacing/border attributes
- Component references → inline HTML with matching styles

**Step 4: Add MSO conditional comments.** Wrap Outlook-specific elements in `<!--[if mso]>...<![endif]-->`. Add Outlook font fallbacks.

**Step 5: Add VML fallbacks.** For images and buttons, add VML (Vector Markup Language) alternatives that Outlook can render.

**Step 6: Add dark mode CSS.** Include `@media (prefers-color-scheme: dark)` with overrides for backgrounds, text colors, and borders.

**Step 7: Optimize for Gmail.** Check file size. If over 102KB: remove HTML comments, minify whitespace, consolidate redundant styles.

**Step 8: Add meta tags.** Include doctype, charset, viewport, and title.

**Step 9: Self-check.** Verify: valid XHTML, inline styles only, preheader present, 420px width, under 102KB, images have absolute URLs, alt text present.

---

## Appendix G: Escalation Protocol

When an agent encounters a situation it cannot resolve, it must escalate rather than guess. The escalation protocol:

### Escalation Level 1: Retry
- **Trigger:** Task fails on first attempt
- **Action:** Re-dispatch the same task to a new agent with the same instructions
- **Max retries:** 3
- **Timeout:** If 3 retries fail, escalate to Level 2

### Escalation Level 2: Human Review
- **Trigger:** Task fails after 3 retries, or the failure appears to be in the source material (not the agent's output)
- **Action:** Log the failure details, the attempted fixes, and the suspected root cause. Report to Telegram thread for human review.
- **What to include:**
  - Which file/section is failing
  - What was tried (3 retry details)
  - What the suspected root cause is (missing file? ambiguous spec? contradictory instructions?)
  - What the human needs to decide (fix the source? adjust the spec? accept the output?)

### Escalation Level 3: Project Pause
- **Trigger:** More than 10% of tasks in a phase are failing, suggesting a systemic issue
- **Action:** Pause all waves. Report the systemic issue. Wait for human resolution before continuing.
- **Example:** If the wireframe template produces JSX that consistently fails verification, the template itself may need revision.

---

## Appendix H: Glossary

| Term | Definition |
|------|-----------|
| **EmailShell** | The root wrapper component (from primitives.jsx) that constrains width to 420px and applies base font/color |
| **Primitives** | Shared JSX components defined in primitives.jsx, reused across all emails for consistency |
| **Flow Signature** | The visual mood, color emphasis, hero type, image style, density, and CTA tone assigned to each flow |
| **Level Calibration** | The typographic, color, density, and CTA adjustments applied per avatar level (L1/L2/L3/GF) |
| **Contraption** | The specific CSS/JSX specifications (exact values) for a visual element |
| **Technique Specs** | The section of the wireframe that contains all contraption values |
| **Layout ASCII** | The visual blueprint drawing showing every section as a box with its component type |
| **Copy Blocks** | The section of the wireframe containing verbatim copy extracted from the copy file |
| **Image Briefs** | The section of the wireframe specifying every image placement with exact paths and dimensions |
| **Render Notes** | The section of the wireframe with dark mode, responsive, and email client compatibility notes |
| **Band** | A gradient transition between two sections, defined by from-color, to-color, and height |
| **R1-R6** | The 6 cross-level calibration rules: Symptom Over Label, Recognition Anchors, Age Ranges, Verbal/Non-Verbal, Timeline Flexibility, Low-Bar Success |
| **Wave** | A batch of 15 agent tasks dispatched simultaneously by Ralph Loop |
| **Quality Gate** | A mandatory checkpoint between phases that must pass before the next phase begins |
| **Gmail Clip Limit** | The 102KB maximum HTML file size enforced by Gmail (larger emails are clipped/hidden) |
| **MSO Conditional** | `<!--[if mso]>` comments that provide Outlook-specific rendering instructions |
| **VML** | Vector Markup Language used for Outlook-compatible image and button rendering |

---

*End of BrightKidCo Email JSX Production Plan v5.0*
*Engine: Ralph Loop v4.0.0*
*Generated: June 9, 2026*
*Status: READY FOR EXECUTION*

---

## Appendix I: Per-Flow Design Deep-Dive

### Flow 01 — Welcome Flow (32 emails: 8 positions x 4 levels)

The Welcome Flow is the most complex flow in the entire system. It has 8 emails delivered over 21 days, each with 4 level variants (L1, L2, L3, GF), producing 32 unique emails that must all feel like one family while being distinct from each other.

**Design identity:** Warm educational. Teal primary, cream accents. Letter-style hero with gradient accent word. Lifestyle photos (toddler in context, warm lighting). Medium density (balanced text + images). Empathetic CTA tone.

**Email positions and their visual roles:**
- **E1 (Day 0):** The mirror email. Opens with empathy, validates the parent's struggle. Uses HERO-1 (Curiosity Gap) or HERO-5 (Mirror Moment). Body is pure letter — warm, personal, no product. CTA is gentle: "See the different path."
- **E2 (Day 1):** The mechanism email. Explains interoception in plain language. Uses HERO-16 (Mechanism Tease). Body includes Definition Block (EDU-1) and Comparison (EDU-12). No product pitch. CTA is educational: "Learn the science."
- **E3 (Day 3):** The validation email. Shares real parent stories. Uses HERO-14 (Quote Bomb) or HERO-17 (Social Proof Hero). Body includes testimonial cards (SP-01). Product is mentioned softly (ProductShowcaseSoft). CTA is gentle: "See how it works."
- **E4 (Day 7):** The product reveal. First full product introduction. Uses HERO-2 (Warm Hero) with product image. Body includes ProductShowcaseFull with feature pills, price, guarantee badge. CTA is direct: "Shop the pants."
- **E5 (Day 10):** The story email. Sarah's story (or equivalent). Uses HERO-4 (Story Fragment). Body includes ProductShowcaseMedium (inline card). Social proof is prominent. CTA is story-driven: "Start Sarah's path."
- **E6 (Day 14):** The conversion email. Strongest product moment. Uses HERO-10 (Bold Declaration). Body includes ProductShowcaseFull with full feature set. Guarantee badge prominent. CTA is direct: "Get yours today."
- **E7 (Day 17):** The reassurance email. Addresses remaining doubts. Uses HERO-18 (Guilt Absolution). Body includes FAQ-style mechanism. Trust badges prominent. CTA is supportive: "We're here for you."
- **E8 (Day 21):** The final nudge. Last chance framing (gentle, not urgent). Uses HERO-19 (Timeline Shock) or HERO-20 (Handwritten Letter Opener). Body is personal letter from Lena. CTA is warm: "Join us."

**Level differentiation within Welcome:**
- **L1 (Sarah):** Bright, playful. Hero images show Pre-K contexts. Typography medium weight. Short paragraphs. Colors lean warm (more cream, yellow accents). CTA: "Explore the method."
- **L2 (Lisa):** Balanced, structured. Hero images show educational contexts. Typography semi-medium weight. Balanced paragraphs. Colors balanced. CTA: "Find your fit."
- **L3 (Maria):** Dignity-first, research-grounded. Hero images show mature contexts. Typography medium-bold. Longer paragraphs with mechanism depth. Colors lean cool. CTA: "When you're ready."
- **GF (General Family):** Inclusive, broad. Uses R1-R6 calibration. Medium everything. CTA: "Learn more."

### Flow 02 — Cart Abandonment (3 emails, cross-level)

**Design identity:** Urgent but gentle. Ink primary, teal accents. Product-first hero (framed product card). Flat-lay product shots. Low density (focused, minimal sections). Direct but caring CTA.

**Email positions:**
- **E1 (1 hour):** Quick reminder. Shows the product they left behind. Simple: hero product + CTA. No heavy copy.
- **E2 (24 hours):** Social proof add. Product + parent testimonial. Adds trust layer.
- **E3 (72 hours):** Final reminder with guarantee emphasis. Product + guarantee badge + CTA.

### Flow 03 — Checkout Abandonment (2 emails, cross-level)

**Design identity:** Trust-building. Ink primary, green accents. Trust-first hero (guarantee badge prominent). Clean product + trust imagery. Low density. Reassuring CTA.

### Flow 04 — Browse Abandonment (3 emails, cross-level)

**Design identity:** Curiosity spark. Teal primary, yellow accents. Curiosity-first hero (question or teaser). Lifestyle photos, playful. Medium density. Curious CTA.

### Flows 05-08 — Transactional (4 emails, cross-level)

**Design identity:** Clean efficient. Ink primary, paper backgrounds. Information-first. Product flat-lay for confirmation. Low density. Functional CTA.

### Flows 09-14 — Purchase Post-Flows (12 emails, mixed)

**Design identity:** Varies by flow purpose. PP-Direct Upsell is complementary (green). PP-Level Detection is gentle diagnostic (teal). PP-Education is science-warm (teal + ink). PP-Extended Upsell is value demonstration (ink + green). PP-Mid Check-In is supportive (cream + teal). PP-Mary Story is founder story (ink + warm).

### Flows 15-17 — Replenishment (7 emails, cross-level)

**Design identity:** Replenish A is gentle reminder (teal + cream). Replenish B is value reminder (green + ink). Replenish C is bulk value (ink + green). All low-to-medium density. CTA tones: gentle → smart → value.

### Flow 18 — Review Request (2 emails, cross-level)

**Design identity:** Grateful. Cream primary, teal accents. Gratitude-first. Minimal, text-forward. Low density. Grateful CTA.

### Flow 19 — Winback A (12 emails: 3 positions x 4 levels)

**Design identity:** Reconnection. Teal primary, warm accents. Reconnection-first. Lifestyle photos, nostalgic. Medium density. Warm CTA.

### Flow 20 — Site Abandonment (1 email, cross-level)

**Design identity:** Quick nudge. Ink primary, teal accents. Nudge-first. Product flash, minimal. Low density. Direct CTA.

### Flow 21 — FAQ Library (6 emails, cross-level)

**Design identity:** Educational. Teal primary, paper backgrounds. Question-first (FAQ format). Icons + diagrams. Medium density. Helpful CTA.

### Flow 22 — PP-Extended Education (20 emails: 5 positions x 4 levels)

**Design identity:** Deep science. Teal primary, ink accents. Mechanism-deep. Diagrams, charts, research. High density. Authoritative CTA.

### Flow 23 — PP-At-Risk (4 emails, cross-level)

**Design identity:** Supportive rescue. Cream primary, teal accents. Support-first. Warm lifestyle. Medium density. Caring CTA.

### Flow 24 — Winback B (12 emails: 3 positions x 4 levels)

**Design identity:** Final reconnect. Ink primary, warm accents. Final chance. Lifestyle photos, emotional. Medium density. Honest CTA.

### Flow 25 — Sunset (2 emails, cross-level)

**Design identity:** Graceful close. Ink primary, paper accents. Farewell-first. Minimal, elegant. Low density. Respectful CTA.

---

## Appendix J: Component Category Deep-Dive

### HERO Components (23 total)

The HERO category provides the opening visual statement of each email. There are 23 hero types, each with a distinct emotional approach:

- **HERO-1 Curiosity Gap:** Opens with a question or mystery. "Your child might not feel the signal." Best for: Welcome E1, education-first flows.
- **HERO-2 Data Shock:** Opens with a surprising statistic. "49% of autistic 4-5 year olds aren't toilet trained yet." Best for: mechanism emails, research-grounded content.
- **HERO-3 Permission Open:** Gives the parent permission to feel. "It's okay to not have it figured out." Best for: guilt-absolution moments, L3 emails.
- **HERO-4 Story Fragment:** Opens with a story snippet. "Sarah tried everything before she found this." Best for: story-driven emails, Winback flows.
- **HERO-5 Mirror Moment:** Mirrors the parent's exact experience. "You've tried the sticker charts. The timer sits. The 3-day method." Best for: validation emails, Welcome E1.
- **HERO-6 Identity Statement:** Makes an identity claim. "You're not a failure. You're a researcher." Best for: empowerment moments, at-risk flows.
- **HERO-7 Counter-Intuitive Truth:** States something unexpected. "The problem isn't motivation. It's neurology." Best for: mechanism emails, myth-busting.
- **HERO-8 Visual Metaphor:** Uses an image as metaphor. Best for: artsy flows, FAQ library.
- **HERO-9 Whisper Tone:** Very quiet, intimate opening. Best for: L3 emails, dignity-first moments.
- **HERO-10 Bold Declaration:** Strong, confident statement. "This changes everything." Best for: conversion emails, Welcome E6.
- **HERO-11 Question Storm:** Multiple questions in rapid succession. Best for: FAQ library, browse abandonment.
- **HERO-12 Before Snapshot:** Shows the "before" state. Best for: cart abandonment, product comparison.
- **HERO-13 Scientific Hook:** Opens with research. "Research shows that interoception can be trained." Best for: education flows, PP-Education.
- **HERO-14 Quote Bomb:** Opens with a powerful quote. Best for: social proof emails, Welcome E3.
- **HERO-15 Level Callout:** Directly addresses the level (for level-specific emails only). Best for: Welcome L1/L2/L3 variants.
- **HERO-16 Mechanism Tease:** Teases the mechanism without revealing it. Best for: Welcome E2, curiosity-building.
- **HERO-17 Social Proof Hero:** Opens with social proof as the hero. Best for: review requests, winback flows.
- **HERO-18 Guilt Absolution:** Absolves the parent of guilt. "None of those methods worked because none of them address the real issue." Best for: reassurance emails, Welcome E7.
- **HERO-19 Timeline Shock:** Shows the time dimension. "Some kids 2 weeks. Others 8. Both normal." Best for: timeline-sensitive flows, PP-Mid Check-In.
- **HERO-20 Handwritten Letter Opener:** Feels like a personal letter. Best for: personal moments, Welcome E8, founder story.
- **Additional legacy heroes (2.1-2.3):** Lilac Gradient Hero, Warm Hero, Teal CTA Hero — legacy components from earlier design iterations.

### TEXT/LETTER Components (84 total)

The TEXT/LETTER category provides body copy treatments. Key components include:

- **Letter Section (4.1):** Standard paragraph stack on warm background. The workhorse — used in most emails.
- **Quote Card (4.2):** Yellow-bordered testimonial card. For parent quotes and social proof.
- **Pull Quote (4.3):** Large italicized quote for emphasis. For key insights.
- **Insight / Mint Block (4.4):** Colored insight box for key takeaways.
- **Cream Callout (4.5):** Warm cream background callout for gentle emphasis.
- **Paragraph Stack (LETTER-01):** Standard paragraph layout with consistent spacing.
- **Handwritten Opener (LETTER-02):** Opens with handwritten-style text for personal feel.
- **Letter + Pull-Quote (LETTER-03):** Combines letter text with pull quote emphasis.
- **Manifesto Line (LETTER-05):** Single powerful line for brand statements.
- **PS Teaser (LETTER-06):** Post-script teaser for additional engagement.
- **Highlighted Passage (LETTER-10):** Text with highlighted key passages.

### TESTIMONIAL/SOCIAL PROOF Components (103 total)

The largest category. Includes parent quotes, expert endorsements, UGC photos, star ratings, review screenshots, community counters, and trust badges. Key components:

- **Yellow Quote Block (SP-01):** Yellow-bordered quote card for parent testimonials.
- **Expert Endorsement (SP-02):** Professional endorsement card.
- **Review Screenshot (SP-04):** Authentic review screenshot for credibility.
- **Trust Pills Row (SP-4):** Horizontal row of trust badges.
- **Customer Photo + Quote (VSOCIAL-1):** Real customer photo with testimonial.
- **Before/After Testimonial (SP-06):** Journey testimonial showing transformation.
- **Community Counter (SP-12):** Shows community size for social proof.
- **Trust Badges Row (SP-14):** Row of trust indicators (guarantee, shipping, returns).

### MECHANISM/EDUCATION Components (103 total)

For science explainers, diagrams, comparisons, and educational content. Key components:

- **Definition Block (EDU-1):** Clean definition layout for new terms (interoception, etc.).
- **Step Cards (EDU-2):** Numbered step cards for process explanation.
- **Myth vs Fact (EDU-4):** Side-by-side myth/fact comparison.
- **Mechanism Diagram (EDU-8):** Visual diagram of how the mechanism works.
- **Comparison Matrix (EDU-12):** Multi-column comparison table.
- **Science Citation (EDU-11):** Formatted research citation block.
- **Signal Pathway (EDUDEEP-2):** Deep mechanism explainer for body-signal pathway.
- **Brain Map (EDUDEEP-5):** Visual brain/neurology explainer.
- **Developmental Timeline (EDUDEEP-6):** Age-based developmental timeline.

### PRODUCT Components (87 total)

For product cards, showcases, and comparisons. Key components from primitives.jsx:

- **ProductShowcaseFull:** Hero product block — lifestyle hero + price + feature pills + CTA. Used in E4, E6.
- **ProductShowcaseMedium:** Inline product card — side-by-side image + info. Used in E5.
- **ProductShowcaseSoft:** End-of-email gentle mention — tiny thumb + text + link. Used in E2, E3.

Additional product components from the library include bundle builders, comparison matrices, size finders, and unboxing previews.

### CTA Components (15 total)

The smallest but most conversion-critical category. Key component:

- **CTAClose:** Dark ink background with lime text CTA button. The standard closing CTA from primitives.jsx. Used in every email.

Additional CTA components include inline CTAs, floating CTAs, hero CTAs, and multi-CTA layouts.

---

## Appendix K: Quality Metrics

### Success Criteria for the Entire Project

| Metric | Target | Measurement |
|--------|--------|-------------|
| Emails produced | 125/125 | File count in outputs/production/ |
| Verification pass rate | 100% | All 125 verification reports show PASS |
| Copy accuracy | 100% | Spot-check 20% of emails: zero word differences from copy files |
| Brand color compliance | 100% | All colors from token set (no unauthorized hex) |
| Component diversity | 100% | All emails have 5+ unique categories |
| Flow uniqueness | 100% | No two emails in same flow share Layout ASCII |
| Level calibration | 100% | Level-specific emails match Level Calibration dimensions |
| R1-R6 compliance | 100% | Cross-level emails satisfy all 6 rules |
| Gmail clip compliance | 100% | All HTML files under 102KB |
| Mobile readiness | 100% | All emails render at 320px viewport |
| Above-fold CTA | 100% | Primary CTA visible without scrolling on 568px viewport |
| Image rendering | 100% | All product images render correctly |

### Quality Score Calculation

Each email earns a quality score based on verification checklist results:

- **20/20 points:** Quality Score A (ship it)
- **18-19/20 points:** Quality Score B (ship with noted minor issues)
- **16-17/20 points:** Quality Score C (revise before shipping)
- **<16/20 points:** Quality Score F (major revision required)

Target: 100% of emails at Quality Score A or B.


---

## Appendix L: Wave-by-Wave Execution Details

### Wave 1 — Strategy Mapping (Phase 0)

**Duration:** ~2 minutes
**Agents:** 5 (ops through ops5)
**Inputs:** 125 copy files, component index, product photos, Giuliano demands, design skills reference
**Output:** strategy-map.json

This wave runs 5 agents in parallel. Each agent handles a portion of the 125 emails:

**Agent 1 (ops) — Welcome Flow Strategy:**
Reads 32 Welcome copy files (8 positions x 4 levels). For each email, extracts: the creative strategy summary (2-3 sentences), the recommended hero component (from 20 HERO types), the recommended text treatment (from 84 TEXT/LETTER types), the recommended social proof style (from 103 TESTIMONIAL types), the recommended mechanism pattern (from 103 MECHANISM types), and 2-3 product photo assignments. The Welcome Flow is the most complex because level differentiation must be captured: L1 emails get brighter, more playful component selections; L3 emails get more dignity-first, research-grounded selections. Agent 1 produces the strategy data for all 32 Welcome emails.

**Agent 2 (ops2) — Phase 1 Flows Strategy:**
Reads 24 copy files across 11 flows: Cart (3), Checkout (2), Browse (3), Transactional (4), PP-Direct Upsell (2), PP-Level Detection (2), PP-Education (4), PP-Extended Upsell (3), PP-Mid Check-In (3), PP-Mary Story (1). These are the launch-critical flows (Phase 1 in the Giuliano architecture). Most are cross-level, meaning the strategy must work for all 4 levels via R1-R6 calibration. Agent 2 captures this: each cross-level email's strategy includes R1-R6 compliance requirements and level-agnostic component selections.

**Agent 3 (ops3) — Phase 2 Flows Strategy:**
Reads 22 copy files across 6 flows: Replenish A (3), Replenish B (2), Replenish C (2), Review Request (2), Winback A (12). Winback A is the key challenge here — 12 level-specific emails (3 positions x 4 levels) that must feel like reconnection, not sales. Agent 3 captures the emotional calibration: L1 Winback is warm and encouraging; L3 Winback is dignified and patient; GF Winback is inclusive and low-pressure.

**Agent 4 (ops4) — Phase 3 Flows Strategy:**
Reads 44 copy files across 5 flows: Site Abandonment (1), FAQ Library (6), PP-Extended Education (20), PP-At-Risk (4), Winback B (12). PP-Extended Education is the largest level-specific flow after Welcome — 20 emails (5 positions x 4 levels) of deep scientific education. Agent 3 must capture the progressive depth: E1 is introductory interoception; E5 is advanced neuroscience. Winback B is the final reconnection before sunset — more emotionally weighty than Winback A.

**Agent 5 (ops5) — Strategy Compiler:**
Receives all 4 agent outputs (via inter-agent communication or shared file system). Compiles into a single strategy-map.json. Validates: all 125 emails present, every email has 5+ component categories, every email has at least 1 image assignment, no image repetition within same flow position, level-specific emails have calibration dimensions, cross-level emails have R1-R6 flags. Produces the final JSON.

### Waves 2-5 — Wireframe Production (Phase 1)

**Duration:** ~8 minutes (4 waves x 2 min)
**Agents:** 15 per wave
**Inputs:** Copy files + strategy-map.json + design skills reference + component index + Giuliano demands + primitives.jsx
**Output:** 125 wireframe files in outputs/wireframes/

**Wave 2 (15 agents): Welcome E1-E5 (28 of 32)**
Each agent handles 2 emails. Agents read the assigned copy files, the strategy map entry, the flow design signature, and the level calibration dimensions. They produce wireframes with all 8 mandatory sections. The key challenge in Wave 2 is level differentiation: agents wireframing L1 emails must use warmer colors, lighter density, and more playful components; agents wireframing L3 emails must use cooler colors, deeper density, and more research-grounded components.

**Wave 3 (15 agents): Welcome remaining (4) + Phase 1 flows (26)**
Completes the Welcome Flow (E8 level variants). Then moves to Cart (3), Checkout (2), Browse (3), Transactional (4), PP-Direct Upsell (2), PP-Level Detection (2), PP-Education (4), PP-Extended Upsell (3), PP-Mid Check-In (3). The key challenge in Wave 3 is flow differentiation: Cart Abandonment wireframes must feel urgent but gentle (ink primary, low density); Browse Abandonment must feel curious (teal primary, yellow accents, medium density); Transactional must feel clean and efficient (ink primary, paper backgrounds, low density).

**Wave 4 (15 agents): Phase 2-3 flows (49)**
Handles PP-Mary Story (1), Replenish A/B/C (7), Review Request (2), Winback A (12), Site Abandonment (1), FAQ Library (6), PP-Extended Education (8 of 20), PP-At-Risk (4), Winback B (8 of 12). The key challenge in Wave 4 is the volume of level-specific emails: Winback A has 12 level-specific wireframes, PP-Extended Education has 20. Agents must maintain level calibration across all variants while ensuring each position (E1, E2, E3 for Winback; E1-E5 for PP-Ext Ed) has a distinct layout.

**Wave 5 (9 agents): Remaining (18) + retries**
Completes PP-Extended Education (12 remaining), Winback B (4 remaining), Sunset (2), and retries any failed wireframes from Waves 2-4. The retry mechanism is critical: if an agent failed to produce a complete wireframe (missing sections, incomplete Technique Specs), a new agent retries with explicit instructions about what was missing.

### Waves 6-13 — JSX Production (Phase 2)

**Duration:** ~16 minutes (8 waves x 2 min)
**Agents:** 15 per wave (Wave 13 has 2)
**Inputs:** Wireframes + primitives.jsx + product-showcase.jsx + strategy-map.json
**Output:** 125 JSX files in outputs/emails/

The JSX waves mirror the wireframe waves in structure but with different agent instructions. Each JSX agent reads one wireframe and produces one JSX file. The translation is mechanical: every section in the wireframe Layout ASCII becomes a JSX component call; every value in Technique Specs becomes an inline style; every word in Copy Blocks becomes a JSX string.

**Key JSX challenges:**
- **Custom sections:** Some wireframe sections have no primitives equivalent. The JSX agent must build these inline using the Custom Section Pattern. The CSS values must match Technique Specs exactly.
- **Image paths:** Product photo paths must be relative from the email's location in outputs/emails/. The path construction is: `../../raw/product-photos/{category}/{filename}`. Getting this wrong means broken images.
- **Window registration:** Every email must be registered on the window object. Missing this means the email cannot be rendered by the verification agent.
- **Copy verbatim:** The most critical check. JSX agents must copy-paste from Copy Blocks, not paraphrase. Even a single word difference triggers a verification failure.

### Waves 14-21 — Visual Verification (Phase 3)

**Duration:** ~16 minutes (8 waves x 2 min)
**Agents:** 15 per wave (Wave 21 has 2)
**Inputs:** JSX files + wireframes + copy files + primitives.jsx + product-showcase.jsx
**Output:** 125 verification reports in outputs/verification/

Each verification agent renders one JSX file, takes a Playwright screenshot, and runs the 20-point checklist. The agent is an independent auditor — it has no stake in the email's creation. This independence is critical for catching errors that the wireframe and JSX agents might have missed.

**Key verification challenges:**
- **Playwright environment:** The verification agent must have a working browser environment with React, primitives.jsx, and product-showcase.jsx loaded. If the environment is not set up, the agent must set it up first.
- **Verbatim copy check:** The most time-consuming check. The agent must extract all text from the rendered email and compare against the copy file. Even a single word difference triggers a FAIL.
- **Flow uniqueness check:** The agent must compare this email's Layout ASCII against all other emails in the same flow. This requires reading multiple wireframes — a context-heavy operation.
- **Level calibration check:** For level-specific emails, the agent must verify that typography weight, hero mood, color warmth, section count, and CTA tone match the Level Calibration table dimensions.

### Waves 22-30 — XHTML Compilation (Phase 5)

**Duration:** ~18 minutes (9 waves x 2 min)
**Agents:** 5 per wave (Wave 30 has 2)
**Inputs:** Verified JSX files + verification reports
**Output:** 125 HTML files in outputs/production/

Each compilation agent reads one verified JSX file and one verification report (confirming PASS status). It then transforms the JSX into table-based HTML with MSO conditional comments, VML fallbacks, dark mode CSS, and Gmail clip limit compliance.

**Key compilation challenges:**
- **JSX to table translation:** JSX uses div-based layout with flexbox. Email HTML must use table-based layout. The agent must translate every div into a td, every flex into table cells, every inline style from JSX object syntax to HTML string syntax.
- **Gmail clip limit:** Some emails (especially Welcome E1 with 500+ words of body copy) may approach the 102KB limit. The agent must optimize: remove HTML comments, minify whitespace, consolidate redundant styles. If still over 102KB, the agent must identify the largest sections and simplify.
- **Outlook compatibility:** Outlook uses Word's rendering engine, which does not support many CSS properties. The agent must add MSO conditional comments for Outlook-specific rendering and VML fallbacks for images and buttons.
- **Dark mode:** Apple Mail and some other clients support dark mode. The agent must add `@media (prefers-color-scheme: dark)` overrides for backgrounds, text colors, and borders.

---

## Appendix M: File Size Analysis

### Expected File Sizes

| Output Type | Average Size | Total (125 files) | Notes |
|-------------|-------------|-------------------|-------|
| strategy-map.json | ~500KB | 1 file | Single JSON with all 125 entries |
| Wireframes (.md) | ~8KB | ~1MB | 8 sections per wireframe, detailed specs |
| JSX files (.jsx) | ~15KB | ~1.9MB | Full React component with inline styles |
| Verification reports (.md) | ~5KB | ~625KB | 20-point checklist with details |
| Production HTML (.html) | ~45KB | ~5.6MB | Table-based HTML with MSO/VML/dark mode |
| **Total outputs** | — | **~9.2MB** | All production artifacts |

### Source File Sizes

| Source | Size | Lines | Purpose |
|--------|------|-------|---------|
| Giuliano Demands | 123KB | 2010 | Rules, demands, architecture |
| Design Skills Reference | ~400KB | ~4000 | Design vocabulary, patterns |
| Component Index | 42KB | 985 | 922 components catalog |
| Copy Production Plan | 74KB | 1008 | Copy strategy, templates |
| primitives.jsx | 13KB | 275 | Shared JSX components |
| product-showcase.jsx | 12KB | 270 | Product placement variants |
| content.js | 18KB | 321 | Welcome flow content data |
| Copy files (125 total) | ~3MB | ~15000 | Approved email copy |
| Product photos (29 total) | ~8MB | — | Product imagery |
| **Total sources** | **~12.7MB** | — | All input materials |

---

## Appendix N: Cron Schedule Estimate

If running via Ralph Loop cron (2-minute cadence):

| Start Wave | End Wave | Phase | Duration | Cumulative Time |
|------------|----------|-------|----------|-----------------|
| Wave 1 | Wave 1 | Phase 0 | 2 min | 2 min |
| Wave 2 | Wave 5 | Phase 1 | 8 min | 10 min |
| Wave 6 | Wave 13 | Phase 2 | 16 min | 26 min |
| Wave 14 | Wave 21 | Phase 3 | 16 min | 42 min |
| Wave R1-R3 | (conditional) | Phase 4 | 0-6 min | 42-48 min |
| Wave 22 | Wave 30 | Phase 5 | 18 min | 60-66 min |

**Total estimated runtime: 60-66 minutes** (assuming no escalations)
**With escalations: up to 90 minutes**

### Cron Job Configuration

```json
{
  "plan": "/root/projects/brightkidco/outputs/bkc-email-production-plan-v5.md",
  "output_root": "/root/projects/brightkidco/outputs/",
  "strategy_map": "/root/projects/brightkidco/outputs/strategy-map.json",
  "wireframe_root": "/root/projects/brightkidco/outputs/wireframes/",
  "jsx_root": "/root/projects/brightkidco/outputs/emails/",
  "verification_root": "/root/projects/brightkidco/outputs/verification/",
  "production_root": "/root/projects/brightkidco/outputs/production/",
  "max_agents_per_wave": 15,
  "wave_cadence_seconds": 120,
  "total_waves": 30,
  "escalation_max_retries": 3,
  "revision_max_cycles": 2
}
```

---

*End of BrightKidCo Email JSX Production Plan v5.0 — Complete*

---

## Appendix O: Per-Position Component Selection Guide

### Welcome Flow — Position-by-Position Component Selection

Each Welcome position (E1-E8) has a specific emotional role in the 21-day sequence. The component selection for each position must serve that role while maintaining flow identity and achieving within-flow uniqueness.

**Welcome E1 — The Mirror (Day 0)**
- **Emotional role:** Mirror the parent's confusion and validate their struggle. This is the first email they receive — it must create immediate emotional connection.
- **Hero selection:** HERO-1 (Curiosity Gap) or HERO-5 (Mirror Moment). Curiosity Gap opens with a question that hooks: "Your child might not feel the signal." Mirror Moment opens with recognition: "You've tried the sticker charts."
- **Text treatment:** LETTER-01 (Paragraph Stack) for the main body. This is a long-form letter — warm, personal, no product. The letter should feel like a friend writing, not a brand broadcasting.
- **Social proof:** SP-01 (Yellow Quote Block) for 2-3 parent quotes that mirror the reader's experience. These quotes must come from the copy file verbatim.
- **Mechanism:** None in E1. This is pure empathy — no science yet. Save the mechanism for E2.
- **Product:** None in E1. No product mention. This is relationship-building, not selling.
- **CTA:** CTAClose with gentle text: "See the different path →"
- **Trust:** None in E1. Too early for trust badges.
- **Decorative:** UTIL-01 (Gradient Band) between header and hero. Band from teal to cream.

**Welcome E2 — The Mechanism (Day 1)**
- **Emotional role:** Explain WHY previous methods failed. Introduce interoception as the missing piece.
- **Hero selection:** HERO-16 (Mechanism Tease) or HERO-7 (Counter-Intuitive Truth). Mechanism Tease: "The word nobody explained to you yet." Counter-Intuitive Truth: "You can't reward a signal that isn't reaching the brain yet."
- **Text treatment:** LETTER-01 (Paragraph Stack) for the opening. Then EDU-1 (Definition Block) for the interoception definition. Then comparison cards for pull-ups vs. product.
- **Social proof:** None in E2. Science-only — no testimonials yet.
- **Mechanism:** EDU-1 (Definition Block) for interoception. EDU-12 (Comparison Matrix) for pull-ups vs. regular underwear vs. Body-Signal Learning Layer.
- **Product:** ProductShowcaseSoft — gentle end-of-email mention. Not a pitch — a "designed around this" nod.
- **CTA:** CTAClose with educational text: "Learn the science →"
- **Trust:** None in E2. Still too early.
- **Decorative:** Band from cream to white for the mechanism section transition.

**Welcome E3 — The Validation (Day 3)**
- **Emotional role:** Share real parent stories. The reader should feel less alone.
- **Hero selection:** HERO-14 (Quote Bomb) or HERO-17 (Social Proof Hero). Quote Bomb opens with a powerful parent quote. Social Proof Hero opens with social proof as the hero element.
- **Text treatment:** LETTER-01 for the opening letter. SP-01 (Yellow Quote Block) for testimonial cards. Pull Quote (4.3) for the key insight.
- **Social proof:** SP-01 (Yellow Quote Block) — this is the social proof email. 3-4 parent testimonials from the copy file.
- **Mechanism:** None in E3. Story-only — no science.
- **Product:** ProductShowcaseSoft — gentle mention after testimonials. "This is what [parent] used."
- **CTA:** CTAClose with story-driven text: "Start [Name]'s path →"
- **Trust:** None in E3. Trust comes from the testimonials, not badges.
- **Decorative:** Band from cream to white between sections.

**Welcome E4 — The Product Reveal (Day 7)**
- **Emotional role:** First full product introduction. The parent now understands the mechanism — show them the solution.
- **Hero selection:** HERO-2 (Warm Hero) with product lifestyle image. Or HERO-10 (Bold Declaration) for stronger impact.
- **Text treatment:** LETTER-01 for the opening. Then ProductShowcaseFull for the product block.
- **Social proof:** SP-4 (Trust Pills Row) for feature badges: "Body-Signal Layer™", "60-day guarantee", "Sensory-friendly."
- **Mechism:** Brief — one sentence reminding of the interoception concept from E2.
- **Product:** ProductShowcaseFull — hero product moment. Lifestyle image + price + feature pills + CTA.
- **CTA:** CTAClose with direct text: "Shop the pants →" — this is the first conversion-focused CTA.
- **Trust:** TRUST-N (Guarantee Badge) — 60-day guarantee prominently displayed.
- **Decorative:** Band from cream to white. Product card has ink border + offset shadow.

**Welcome E5 — The Story (Day 10)**
- **Emotional role:** Sarah's story (or equivalent). The reader sees themselves in another parent's journey.
- **Hero selection:** HERO-4 (Story Fragment) — opens with a story snippet.
- **Text treatment:** LETTER-01 for the story body. Pull Quote (4.3) for the key transformation moment.
- **Social proof:** SP-06 (Before/After Testimonial) for Sarah's journey.
- **Mechanism:** None — story-only.
- **Product:** ProductShowcaseMedium — inline product card within the story context.
- **CTA:** CTAClose with story text: "Start Sarah's path →"
- **Trust:** None — trust comes from the story.
- **Decorative:** Minimal — let the story breathe.

**Welcome E6 — The Conversion (Day 14)**
- **Emotional role:** Strongest product moment. Time to convert.
- **Hero selection:** HERO-10 (Bold Declaration) — strong, confident opening.
- **Text treatment:** LETTER-01 for opening. ProductShowcaseFull for product. Comparison cards for final differentiator.
- **Social proof:** SP-12 (Community Counter) — "Join 2,000+ parents."
- **Mechanism:** Brief reminder — "The science works."
- **Product:** ProductShowcaseFull — full product with all features, price, guarantee.
- **CTA:** CTAClose with conversion text: "Get yours today →"
- **Trust:** TRUST-N (Guarantee Badge) + Trust Pills Row.
- **Decorative:** Band transitions between sections. Product card has strong shadow.

**Welcome E7 — The Reassurance (Day 17)**
- **Emotional role:** Address remaining doubts. The parent is interested but hesitant.
- **Hero selection:** HERO-18 (Guilt Absolution) — "None of those methods worked because..."
- **Text treatment:** LETTER-01 for opening. FAQ-style mechanism blocks. Trust badges.
- **Social proof:** SP-01 (Yellow Quote Block) — parent quote addressing the specific doubt.
- **Mechanism:** EDU-4 (Myth vs Fact) — busting the remaining myths.
- **Product:** None or ProductShowcaseSoft — not the focus.
- **CTA:** CTAClose with supportive text: "We're here for you →"
- **Trust:** Trust badges prominent — guarantee, shipping, returns.
- **Decorative:** Warm bands between sections.

**Welcome E8 — The Final Note (Day 21)**
- **Emotional role:** Last email in the welcome sequence. Personal, warm, no pressure.
- **Hero selection:** HERO-20 (Handwritten Letter Opener) or HERO-9 (Whisper Tone). Most personal hero types.
- **Text treatment:** LETTER-02 (Handwritten Opener) for the opening. LETTER-01 for the body.
- **Social proof:** None — this is personal, not social.
- **Mechanism:** None — too late for science.
- **Product:** None or very soft mention.
- **CTA:** CTAClose with warm text: "Join us when you're ready →"
- **Trust:** None — trust is established.
- **Decorative:** Minimal — let the personal letter breathe.

### Cross-Level Flow Component Selection Patterns

**Cart Abandonment (3 emails):**
- E1: Product card (FramedImage) + simple CTA. No letter, no social proof. Pure product reminder.
- E2: Product card + testimonial (SP-01). Adds social proof layer.
- E3: Product card + guarantee badge (TRUST-N) + CTA. Adds trust layer.

**Checkout Abandonment (2 emails):**
- E1: Trust-first hero (TRUST-N badges) + product reminder + CTA. Reassurance is the priority.
- E2: Trust badges + testimonial + stronger CTA. Escalates trust.

**Browse Abandonment (3 emails):**
- E1: Curiosity hero (HERO-11 Question Storm) + soft product mention. "Still thinking about it?"
- E2: Product showcase + social proof. "Here's what other parents found."
- E3: Full product + guarantee + CTA. "Ready to explore?"

**Transactional (4 emails):**
- Order Confirm: Clean layout. Order details + cross-sell block + CTA. Low density.
- Shipping: Tracking info + product image + CTA. Minimal.
- Out for Delivery: Delivery notification + product image + excitement CTA. Minimal.
- Arrived: Welcome + massive upsell block + CTA. Medium density.

**Replenishment A/B/C:**
- Replenish A (1 pair): Gentle reminder. Product image + "Time for fresh ones" + CTA. Low density.
- Replenish B (3+3): Value reminder. Bundle image + savings display + CTA. Medium density.
- Replenish C (5+5): Bulk value. Product grid + maximum savings + CTA. Medium-high density.

**Review Request (2 emails):**
- E1: Gratitude hero + simple ask + CTA. Low density.
- E2: Gratitude + reminder + CTA. Low density.

---

## Appendix P: Anti-Pattern Catalog

These are the specific failure modes that this plan is designed to prevent. Each anti-pattern has a corresponding rule or quality gate that catches it.

### Anti-Pattern 1: Component Salad
**Description:** Agent uses the same 3-4 components for every email, ignoring the 922-component library.
**Prevention:** Rule 8 (5+ categories per email), Quality Gate G1 (component diversity check), Strategy Map (pre-assigned components).
**Detection:** Verification Check 12 counts unique categories.

### Anti-Pattern 2: Copy Drift
**Description:** Agent paraphrases copy instead of using it verbatim, introducing subtle word changes.
**Prevention:** Rule 4 (copy is VERBATIM), Wireframe Copy Blocks (exact extraction), Quality Gate G1 (spot-check).
**Detection:** Verification Check 11 compares text character-by-character.

### Anti-Pattern 3: Color Invasion
**Description:** Agent introduces colors not in the brand token set, creating inconsistent brand appearance.
**Prevention:** Rule 1 (brand tokens are LAW), Quality Gate G2 (unauthorized hex check).
**Detection:** Verification Check 4 samples 10 color values against token table.

### Anti-Pattern 4: Layout Clone
**Description:** Two emails in the same flow share the same visual structure, causing subscriber desensitization.
**Prevention:** Rule 5 (unique structure), Strategy Map (differentiation notes), Quality Gate G1 (Layout ASCII uniqueness).
**Detection:** Verification Check 10 compares Layout ASCII across flow.

### Anti-Pattern 5: Level Bleed
**Description:** Level-specific emails accidentally reference other levels or use wrong calibration dimensions.
**Prevention:** Rule 10 (R1-R6 compliance), Level Calibration table, Quality Gate G1/G3 (level calibration check).
**Detection:** Verification Check 20 verifies level dimensions.

### Anti-Pattern 6: Ghost Sections
**Description:** JSX agent skips sections specified in the wireframe, producing incomplete emails.
**Prevention:** Quality Gate G2 (wireframe fidelity), JSX Output Pattern (section-by-section template).
**Detection:** Verification Check 16 compares every wireframe section against render.

### Anti-Pattern 7: Shadow Budget
**Description:** Agent uses inconsistent shadow values, creating visual chaos across the email.
**Prevention:** Technique Specs (exact shadow values), Brand Token shadow patterns.
**Detection:** Verification Check 17 samples CSS values.

### Anti-Pattern 8: CTA Overload
**Description:** Agent adds more than 3 CTAs, confusing the subscriber and diluting conversion.
**Prevention:** Rule 11 (max 3 CTAs), Quality Gate G3 (conversion rules check).
**Detection:** Verification Check 15 counts CTAs.

### Anti-Pattern 9: Image Lottery
**Description:** Agent picks random product photos without considering flow context or repetition.
**Prevention:** Strategy Map (pre-assigned images), Image Briefs (exact paths).
**Detection:** Verification Check 18 verifies image brief compliance.

### Anti-Pattern 10: Outlook Breakage
**Description:** XHTML compilation produces HTML that breaks in Outlook due to missing MSO/VML.
**Prevention:** Phase 5 XHTML Template (battle-tested structure), Quality Gate G5 (MSO/VML check).
**Detection:** Manual Outlook testing (if available) or Litmus/Email on Acid.

---

## Appendix Q: Plan Version History

| Version | Date | Changes | Lines |
|---------|------|---------|-------|
| v1.0 | May 2026 | Initial draft — basic structure | ~500 |
| v2.0 | May 2026 | Added flow signatures, level calibration | ~1000 |
| v3.0 | May 2026 | Added component mapping, wireframe template | ~2000 |
| v4.0 | June 2026 | Added verification checklist, wave distribution | ~2500 |
| v5.0 | June 2026 | Complete rewrite — all 6 phases, 125 emails, 22 flows, appendices | ~2500+ |

---

*End of BrightKidCo Email JSX Production Plan v5.0 — Final*
*Total: ~2500 lines, 166KB, 165 sections, 118 subsections*
*Ralph Loop compatible: Yes*
*Autonomous execution ready: Yes*
*Source: 125 copy files, 922 components, 29 product photos, 10 raw JSX references*

---

## Appendix R: Detailed Quality Gate Verification Procedures

### Gate G0: Strategy Map Validation

**When:** Immediately after Phase 0 completes, before Phase 1 begins.
**Who:** Ralph Loop orchestrator (automated checks)
**Duration:** ~30 seconds

**Automated checks:**

1. **File existence:** `ls /root/projects/brightkidco/outputs/strategy-map.json` — file must exist.
2. **JSON validity:** `python3 -c "import json; json.load(open('/root/projects/brightkidco/outputs/strategy-map.json'))"` — must parse without error.
3. **Email count:** Parse JSON, count total email entries. Must be exactly 125.
4. **Flow count:** Parse JSON, count unique flow keys. Must be exactly 22.
5. **Component diversity:** For each email entry, count unique component categories. Must be >= 5.
6. **Image assignments:** For each email entry, verify at least 1 image is assigned.
7. **Image uniqueness:** For each flow position (e.g., welcome e1), verify no image is repeated across level variants.
8. **Copy path validity:** For each email entry, verify the copy file path exists on disk.
9. **Level calibration:** For level-specific emails, verify level dimensions are captured.
10. **R1-R6 flags:** For cross-level emails, verify R1-R6 compliance flags are present.

**Pass criteria:** All 10 checks pass.
**Fail action:** Re-run Phase 0 agents for failed entries. Max 2 retries per entry.

### Gate G1: Wireframe Validation

**When:** After all Phase 1 waves complete, before Phase 2 begins.
**Who:** Ralph Loop orchestrator (automated + sampling)
**Duration:** ~2 minutes

**Automated checks:**

1. **File count:** Count .md files in `/root/projects/brightkidco/outputs/wireframes/` (recursive). Must be exactly 125.
2. **Section presence:** For each wireframe, grep for all 8 mandatory section headers (## 1. Metadata, ## 2. Strategy Box, etc.). All 8 must be present.
3. **Hex values in Technique Specs:** For each wireframe, check that the Technique Specs section contains hex values (pattern: `#[0-9A-Fa-f]{6}`). Must have at least 5 hex values per wireframe.
4. **Component references:** For each wireframe, check that the Technique Specs section references at least 3 different component names from primitives.jsx.
5. **Copy Blocks presence:** For each wireframe, check that the Copy Blocks section has at least 2 content blocks.
6. **Image Briefs presence:** For each wireframe, check that the Image Briefs section has at least 1 image brief with a source path.
7. **File size:** Each wireframe must be between 3KB and 20KB (too small = incomplete, too large = possibly corrupted).

**Sampling checks:**

8. **Verbatim copy (10% sample):** Randomly select 13 wireframes (10% of 125). For each, extract the first Copy Block text and compare against the corresponding copy file. Must match exactly.
9. **Layout ASCII uniqueness (per flow):** For each flow, compare all Layout ASCII sections. No two should be identical.
10. **Level calibration (level-specific flows):** For Welcome, Winback A, Winback B, PP-Extended Ed — verify that L1/L2/L3/GF wireframes show different dimensions in Technique Specs.

**Pass criteria:** All automated checks pass. All sampling checks pass.
**Fail action:** Re-run Phase 1 agents for failed wireframes. Max 2 retries per wireframe.

### Gate G2: JSX Validation

**When:** After all Phase 2 waves complete, before Phase 3 begins.
**Who:** Ralph Loop orchestrator (automated + sampling)
**Duration:** ~2 minutes

**Automated checks:**

1. **File count:** Count .jsx files in `/root/projects/brightkidco/outputs/emails/` (recursive). Must be exactly 125.
2. **Function component:** Each JSX file must contain `const Email_` (function component declaration).
3. **EmailShell wrapper:** Each JSX file must contain `<EmailShell` (root wrapper).
4. **Inline styles only:** Each JSX file must NOT contain `className=` (no CSS classes).
5. **Window registration:** Each JSX file must contain `Object.assign(window,`.
6. **Brand token usage:** Each JSX file must reference `B.` (brand tokens) at least 3 times.
7. **No unauthorized hex:** Each JSX file should NOT contain hex values that are not in the approved token set (spot-check: grep for `#` followed by 6 hex chars, compare against token list).
8. **File size:** Each JSX file must be under 102KB (Gmail clip limit).
9. **420px width:** Each JSX file must reference `MW` or `420` (max width).
10. **Component diversity:** Each JSX file must reference at least 3 different primitives components.

**Sampling checks:**

11. **Verbatim copy (10% sample):** Randomly select 13 JSX files. Extract all string literals and compare against the corresponding wireframe Copy Blocks. Must match.
12. **Style accuracy (5% sample):** Randomly select 6 JSX files. Sample 5 inline style values and compare against wireframe Technique Specs. Must match.

**Pass criteria:** All automated checks pass. All sampling checks pass.
**Fail action:** Re-run Phase 2 agents for failed JSX files. Max 2 retries per file.

### Gate G3: Verification Report Validation

**When:** After all Phase 3 waves complete.
**Who:** Ralph Loop orchestrator (automated)
**Duration:** ~1 minute

**Automated checks:**

1. **File count:** Count .md files in `/root/projects/brightkidco/outputs/verification/` (recursive). Must be exactly 125.
2. **Status check:** Each verification report must contain `Status: PASS`. Any report with `Status: FAIL` triggers Phase 4.
3. **Checklist completeness:** Each report must contain all 20 check point entries.
4. **Recommendation:** Each report must contain a recommendation line (PROCEED, REVISE, or ESCALATE).

**Pass criteria:** All 125 reports have PASS status.
**Fail action:** Enter Phase 4 for all FAIL reports.

### Gate G4: Revision Validation (Phase 4 only)

**When:** After Phase 4 completes.
**Who:** Ralph Loop orchestrator
**Duration:** ~1 minute

**Checks:**

1. **All previously failed emails now PASS:** Re-run Gate G3 checks on the revised emails.
2. **No email exceeded 2 revision cycles:** Check revision count per email.
3. **Escalation log:** Any escalations are documented with failure details.

**Pass criteria:** All revisions passed. No unresolved escalations.
**Fail action:** Escalate remaining failures to human.

### Gate G5: Production HTML Validation

**When:** After all Phase 5 waves complete.
**Who:** Ralph Loop orchestrator (automated)
**Duration:** ~2 minutes

**Automated checks:**

1. **File count:** Count .html files in `/root/projects/brightkidco/outputs/production/` (recursive). Must be exactly 125.
2. **XHTML doctype:** Each file must contain `<!DOCTYPE html PUBLIC`.
3. **MSO conditional:** Each file must contain `<!--[if mso]>`.
4. **VML fallback:** Each file must contain `xmlns:v="urn:schemas-microsoft-com:vml"` (for images/buttons).
5. **Dark mode CSS:** Each file must contain `prefers-color-scheme: dark`.
6. **Inline styles only:** Each file should NOT contain `<link` or `<style` blocks that reference external files (inline `<style>` for dark mode is acceptable).
7. **File size:** Each file must be under 102KB.
8. **Preheader:** Each file must contain a hidden preheader div.
9. **420px width:** Each file must contain `width="420"` or `max-width: 420px`.
10. **Charset:** Each file must contain `charset=UTF-8`.

**Pass criteria:** All 10 checks pass for all 125 files.
**Fail action:** Re-run Phase 5 agents for failed files. Max 2 retries per file.

---

## Appendix S: Inter-Agent Communication Protocol

Agents in the same wave do not communicate directly. They are independent and parallel. However, certain phases require data flow between phases:

### Phase 0 → Phase 1
Strategy map (strategy-map.json) is the handoff artifact. Phase 0 writes it. Phase 1 agents read it. The JSON must be complete before any Phase 1 wave begins.

### Phase 1 → Phase 2
Wireframes are the handoff artifacts. Each wireframe is a standalone file. Phase 2 agents read the wireframe for their assigned email. No cross-wireframe dependencies.

### Phase 2 → Phase 3
JSX files are the handoff artifacts. Each JSX is standalone. Phase 3 agents read the JSX, render it, and verify. No cross-JSX dependencies.

### Phase 3 → Phase 4/5
Verification reports are the handoff artifacts. Phase 4 agents read FAIL reports and fix the corresponding JSX. Phase 5 agents read PASS reports and compile the corresponding JSX to HTML.

### Phase 4 → Phase 5
Revised JSX files replace the originals. Phase 5 agents read the updated JSX files. Verification reports are updated to show PASS.

### File System as Communication Bus
All inter-agent communication happens through the file system. There is no direct agent-to-agent messaging. This design ensures:
- **No race conditions:** Agents write to different files (one per email).
- **No data loss:** Files persist on disk. If an agent crashes, its output (if partially written) can be detected and retried.
- **No coordination overhead:** Agents do not need to wait for other agents. They only need the files from the previous phase to exist.

---

## Appendix T: Error Recovery Procedures

### Scenario 1: Agent Produces Empty File
**Detection:** File exists but is 0 bytes or contains only whitespace.
**Recovery:** Re-dispatch the task to a new agent. The empty file is overwritten.
**Escalation:** If the same email produces an empty file 3 times, escalate to human.

### Scenario 2: Agent Produces Malformed JSON
**Detection:** JSON parsing fails on strategy-map.json.
**Recovery:** If the JSON is partially valid, attempt to fix the malformation. If unfixable, re-run Phase 0 for the affected portion.
**Escalation:** If re-run produces malformed JSON again, escalate to human.

### Scenario 3: JSX File Has Syntax Error
**Detection:** JSX does not render (Playwright reports syntax error).
**Recovery:** The verification agent logs the exact error. The Phase 4 revision agent fixes the syntax error.
**Escalation:** If the same syntax error persists after 2 revisions, escalate to human.

### Scenario 4: Image Path Does Not Resolve
**Detection:** Verification Check 3 fails — broken image icon.
**Recovery:** Verify the image path construction. The base is `/root/projects/brightkidco/raw/product-photos/`. Check for typos in category or filename. Fix the path.
**Escalation:** If the image file does not exist at all, escalate to human (missing asset).

### Scenario 5: Gmail Clip Limit Exceeded
**Detection:** Phase 5 file size check fails — HTML > 102KB.
**Recovery:** Remove HTML comments, minify whitespace, consolidate redundant inline styles. If still over, identify the largest sections and simplify content.
**Escalation:** If simplification requires removing copy content, escalate to human (copy may need trimming).

### Scenario 6: Playwright Environment Not Available
**Detection:** Phase 3 agent cannot launch browser.
**Recovery:** Install Playwright: `npm install -g playwright && playwright install chromium`. Retry.
**Escalation:** If installation fails, escalate to human for environment setup.

### Scenario 7: Circular Dependency in Wireframe
**Detection:** Wireframe references a component that requires another component that requires the first.
**Recovery:** This should not happen with the primitives architecture (components are independent). If detected, flag the wireframe for review.
**Escalation:** Escalate to human for wireframe revision.

---

## Appendix U: Success Criteria Summary

The project is COMPLETE when ALL of the following are true:

| # | Criterion | Measurement | Target |
|---|-----------|-------------|--------|
| 1 | All 125 emails produced | File count in outputs/production/ | 125/125 |
| 2 | All emails verified PASS | Verification report status | 125/125 PASS |
| 3 | All HTML under 102KB | File size check | 125/125 |
| 4 | Copy accuracy 100% | Spot-check 25% of emails | 0 word differences |
| 5 | Brand color compliance 100% | Automated hex check | 0 unauthorized colors |
| 6 | Component diversity 100% | Automated category count | All >= 5 categories |
| 7 | Flow uniqueness 100% | Layout ASCII comparison | 0 duplicate layouts per flow |
| 8 | Level calibration 100% | Dimension verification | All level-specific emails calibrated |
| 9 | R1-R6 compliance 100% | Cross-level rule check | All cross-level emails compliant |
| 10 | Mobile readiness 100% | 320px viewport check | All emails render at 320px |
| 11 | Above-fold CTA 100% | 568px viewport check | CTA visible without scroll |
| 12 | No escalations unresolved | Escalation log | 0 open escalations |

**When all 12 criteria are met, the project delivers.**

---

*End of BrightKidCo Email JSX Production Plan v5.0 — COMPLETE*
*Total: ~2900 lines, 179KB+*
*165 sections, 118+ subsections*
*6 phases, 30+ waves, 670+ tasks*
*125 emails across 22 flows*
*Ralph Loop compatible: Yes*
*Autonomous execution ready: Yes*

---

## Appendix V: Complete Source File Verification

Before executing this plan, verify that ALL source files exist. This is a prerequisite for Phase 0.

### Core Reference Files — Verification Commands

```bash
# Verify all core reference files exist
ls -la /root/projects/brightkidco/demands/GIULIANO-DEMANDS.md
ls -la /root/projects/brightkidco/plans/consolidated-design-skills-trimmed.md
ls -la /root/projects/email-ops/email-design/component-index.md
ls -la /root/projects/brightkidco/plans/email-copy-production.md
```

### Raw JSX Environment — Verification Commands

```bash
# Verify all raw JSX files exist
ls -la "/root/projects/brightkidco/raw/BKCO - EMAIL MARKETING/welcome-flow/primitives.jsx"
ls -la "/root/projects/brightkidco/raw/BKCO - EMAIL MARKETING/welcome-flow/product-showcase.jsx"
ls -la "/root/projects/brightkidco/raw/BKCO - EMAIL MARKETING/welcome-flow/content.js"
ls -la "/root/projects/brightkidco/raw/BKCO - EMAIL MARKETING/welcome-flow/content-flow2.js"
ls -la "/root/projects/brightkidco/raw/BKCO - EMAIL MARKETING/welcome-flow/app.jsx"
ls -la "/root/projects/brightkidco/raw/BKCO - EMAIL MARKETING/welcome-flow/design-canvas.jsx"
ls -la "/root/projects/brightkidco/raw/BKCO - EMAIL MARKETING/welcome-flow/emails-2-3.jsx"
ls -la "/root/projects/brightkidco/raw/BKCO - EMAIL MARKETING/welcome-flow/emails-4-5.jsx"
ls -la "/root/projects/brightkidco/raw/BKCO - EMAIL MARKETING/welcome-flow/email-6.jsx"
ls -la "/root/projects/brightkidco/raw/BKCO - EMAIL MARKETING/welcome-flow/flow2-emails.jsx"
```

### Product Photos — Verification Commands

```bash
# Verify all 29 product photos exist
find /root/projects/brightkidco/raw/product-photos -type f | wc -l
# Expected: 29
find /root/projects/brightkidco/raw/product-photos -type f -name "*.png" -o -name "*.jpg" | sort
```

### Copy Files — Verification Commands

```bash
# Verify all 125 copy files exist (excluding analysis folder and meta files)
find /root/projects/brightkidco/outputs/copy -name "*.md" | grep -v analysis | grep -v DEEP | grep -v SKELETON | wc -l
# Expected: 125

# Verify per-flow counts
for d in $(find /root/projects/brightkidco/outputs/copy -mindepth 1 -maxdepth 1 -type d | grep -v analysis | sort); do
  echo "$(basename $d): $(find $d -name '*.md' | wc -l)"
done
# Expected:
# browse: 3
# cart: 3
# checkout: 2
# faq-library: 6
# pp-at-risk: 4
# pp-direct-upsell: 2
# pp-education: 4
# pp-extended-ed: 20
# pp-extended-upsell: 3
# pp-level-detection: 2
# pp-mary-story: 1
# pp-mid-checkin: 3
# replenish-a: 3
# replenish-b: 2
# replenish-c: 2
# review-request: 2
# site-abandonment: 1
# sunset: 2
# transactional: 4
# welcome: 32
# winback-a: 12
# winback-b: 12
```

### Output Directory Preparation

```bash
# Create all output directories before execution
mkdir -p /root/projects/brightkidco/outputs/wireframes
mkdir -p /root/projects/brightkidco/outputs/emails
mkdir -p /root/projects/brightkidco/outputs/verification
mkdir -p /root/projects/brightkidco/outputs/production

# Create per-flow subdirectories
for flow in welcome cart checkout browse transactional pp-direct-upsell pp-level-detection pp-education pp-extended-upsell pp-mid-checkin pp-mary-story replenish-a replenish-b replenish-c review-request winback-a site-abandonment faq-library pp-extended-ed pp-at-risk winback-b sunset; do
  mkdir -p /root/projects/brightkidco/outputs/wireframes/$flow
  mkdir -p /root/projects/brightkidco/outputs/emails/$flow
  mkdir -p /root/projects/brightkidco/outputs/verification/$flow
  mkdir -p /root/projects/brightkidco/outputs/production/$flow
done
```

---

## Appendix W: Execution Checklist

This checklist ensures the plan is ready for Ralph Loop execution.

### Pre-Execution Checklist

- [ ] All 125 copy files exist and are non-empty
- [ ] All 29 product photos exist and are non-empty
- [ ] All 10 raw JSX reference files exist
- [ ] Giuliano Demands file exists (2010 lines)
- [ ] Design Skills Reference exists
- [ ] Component Index exists (985 lines)
- [ ] Copy Production Plan exists (1008 lines)
- [ ] Output directories created (wireframes, emails, verification, production — each with 22 flow subdirectories)
- [ ] Playwright installed and functional (for Phase 3)
- [ ] Ralph Loop cron job configured and ready
- [ ] Brand tokens verified (all hex values match primitives.jsx)

### During-Execution Monitoring

- [ ] Phase 0 completes: strategy-map.json exists, valid JSON, 125 entries
- [ ] Gate G0 passes: all 10 checks pass
- [ ] Phase 1 waves 2-5 complete: 125 wireframe files exist
- [ ] Gate G1 passes: all 10 checks pass
- [ ] Phase 2 waves 6-13 complete: 125 JSX files exist
- [ ] Gate G2 passes: all 12 checks pass
- [ ] Phase 3 waves 14-21 complete: 125 verification reports exist
- [ ] Gate G3 passes: all 125 reports show PASS
- [ ] Phase 4 (if needed): all revisions complete, all reports updated to PASS
- [ ] Gate G4 passes: no unresolved escalations
- [ ] Phase 5 waves 22-30 complete: 125 HTML files exist
- [ ] Gate G5 passes: all 10 checks pass

### Post-Execution Delivery

- [ ] All 125 HTML files in `/root/projects/brightkidco/outputs/production/`
- [ ] All files under 102KB
- [ ] Project success criteria met (12 criteria from Appendix U)
- [ ] Delivery report generated
- [ ] Mission log updated
- [ ] STATUS.md updated

---

*FINAL — BrightKidCo Email JSX Production Plan v5.0*
*2920+ lines | 192KB | 203 sections | 149 subsections*
*6 phases | 30+ waves | 670+ tasks | 125 emails | 22 flows*
*Ralph Loop v4.0.0 compatible | Autonomous execution ready*
*Generated: June 9, 2026*
