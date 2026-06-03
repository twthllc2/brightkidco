# BrightKidCo — Email Wireframe Production Plan

> **Phase: Email Wireframes** — Produce complete visual wireframes for all ~114 emails across 25 flows
> Generated: May 29, 2026 | Source: Copy outputs (each email's copy + creative strategy), GIULIANO-DEMANDS.md, Consolidated Design Skills (186KB reference)
> Output dir: `/root/projects/brightkidco/wireframes/`

---

## Purpose

The copy phase produced one file per email with **what to say** (copy) and **what to build** (creative strategy). The wireframe phase translates that into **exactly how it looks** — every element spec'd with hex values, pixel dimensions, SVG paths, border-radius, box-shadow, gradient directions, font sizes, and CTA styling.

**Rules of the road:**

1. **Copy is NEVER rewritten.** The copy in each wireframe is implanted VERBATIM from the copy output file. The wireframe agent does not rephrase, reword, or "improve" the copy — ever. If the copy output says "You haven't done anything wrong.", the wireframe says exactly that.

2. **Creative vision comes from the Consolidated Design Skills file.** Every technique, every layout architecture, every visual treatment is drawn from the 12 design skills in the consolidated file. The wireframe agent does not invent new design patterns — it searches the skills for the matching technique spec and applies it.

3. **The wireframe IS the creative.** Not a description of it. Every wireframe is full ASCII box art showing the exact visual layout. Every hex color is written inline on the ASCII element. Every section transition has from→to gradient hexes. Every SVG path is described inline.

4. **Extreme specificity — zero ambiguity.** An ops agent with no reasoning ability must be able to produce correct HTML from the wireframe alone. No design decisions are left to the HTML builder.

---

## Universal Rules — APPLY TO ALL AGENTS

These rules are MANDATORY. Failure to follow any rule means the output is rejected.

### Rule 1: Read Inputs in Order

Your source files are listed in priority order in the agent type definition. Read them in that order. The most important files are listed first. If you cannot read all files (token limit), read the top ones first.

### Rule 2: Copy Is NEVER Rewritten

Every word of the email copy — subject line, preview text, H1, body paragraphs, section headings, bullet points, CTA button text, Lena sign-off, postscript, fine print, footer, unsubscribe line — is taken VERBATIM from the copy output file. No paraphrasing. No "I think this flows better." No rewrites. The copy output is the final approved copy. Your job is to lay it out, not to re-author it.

**Exception:** Line breaks and paragraph spacing may be adjusted for visual balance in the email shell (e.g., one sentence may wrap to 2 lines). But the text itself is unchanged.

### Rule 3: Every Design Decision Comes from the Consolidated Design Skills

The Consolidated Design Skills file at the path specified below is the sole source of visual design reference. It contains:
- 12 raw design skill verbatims (huashu-design, design-taste-frontend, high-end-visual-design, brandkit, imagegen-frontend-web, impeccable, email-design-master, email-design-standards-and-template-build, visual-explainer, concept-diagrams, email-template-library, email-cta-conversion-design)
- Full technique specifications — CSS values, SVG paths, dimensions, rendering notes, dark mode overrides
- Email design constraints (max-width 600px, responsive, dark mode, image blocking)
- Color systems, typography systems, layout patterns
- Premium creative principles and anti-slop rules
- The wireframing protocol (6-part format)

Nothing else informs the visual direction. No external design tutorials. No "standard email best practices" from outside. No generic marketing templates.

**How to find techniques in the consolidated file:** Every technique described in the creative strategy of the copy output (e.g., "circle crop hero", "pill CTA button", "comparison row", "floating testimonial card", "arcway section divider") exists as a full specification within one of the 12 skills. Search the consolidated file for the technique name to find its CSS values, SVG coordinates, dimensions, rendering approach, and dark mode overrides. Read the full specification — never invent values or apply a partial read.

### Rule 4: Every Wireframe Has Exactly 8 Mandatory Sections

Every output file MUST follow the 8-section output template defined below. No deviations. No missing sections. No extra sections. Each section has a specific format — follow it exactly.

### Rule 5: Every Hex, Pixel, and Degree Is Specified Inline

On every ASCII element, the following properties are written inline:
- Background hex color (e.g., `bg: #FFFBF0`)
- Border width, border color, border-radius (e.g., `border: 2px #1F2D2F · border-radius: 16`)
- Box-shadow when present (e.g., `box-shadow: 3px 3px 0 #1F2D2F`)
- Font-size and weight for text (e.g., `19px bold #1F2D2F`)
- Padding and margin (e.g., `padding: 40px 22px 32px`)
- Width and height for images/spacers
- Rotation for tilted elements (e.g., `rotate(-1.5°)`)

Gradient bands specify exact from → to hex values (e.g., `#FFFBF0 → #FFF6E2`).

### Rule 6: Every Technique Is Found by Searching the Consolidated File

Every creative technique used in the wireframe is found by searching the consolidated design skills file for the technique's descriptive name (e.g., `circle crop hero`, `pill button`, `comparison row`, `floating card`, `arcway divider`). The full CSS specification, SVG paths, dimensions, and rendering notes are extracted from the relevant skill section.

Do not use technique names generically without reading the full spec from the skills file (e.g., don't write "rounded card with shadow 3px 3px" — search the skills for the card technique, find the exact shadow values, and use those). If the exact technique doesn't exist in any skill, flag this in the output as `[MISSING TECHNIQUE: description]` — do not improvise values.

### Rule 7: Flow Continuity — Read the Adjacent Emails' Wireframes

Before creating a wireframe for email N in a flow, read the wireframe for email N-1 (if it exists) to ensure:
- Color chapter progression is continuous (section bg colors flow naturally from email to email)
- Contraption language is consistent (same hero style across adjacent emails, same card patterns)
- CTA button styling is consistent across the flow
- Signoff format is identical
- Footer is identical

If email N-1 has no wireframe yet (first email in a flow, or first wave), skip this rule.

### Rule 8: Level-Specific vs Cross-Level

**Level-specific emails** (Welcome, Winback A/B, PP-Extended Ed): Each level variant (L1, L2, L3, GF) is a SEPARATE wireframe produced by a SEPARATE agent. The visual direction may differ per level — the copy output's creative strategy already defines level-calibrated direction. Follow it exactly.

**Cross-level emails** (Cart, Checkout, Browse, Transactional, etc.): ONE wireframe serves all 4 levels. The copy output's creative strategy defines R1-R6 calibration rules. Embed those rules in the wireframe's Contraption Specs and Render Notes sections so the HTML builder knows how to apply level-specific adjustments.

### Rule 9: The Template IS the Brand — Work FROM It

The reference template (`email-1.jsx` in the zip) defines the **BrightKidCo brand system for email**. Every wireframe is built on top of it — not beside it.

**Structural foundation that all wireframes inherit:**

```
Font system:     Fraunces (serif) for headlines · Inter (sans-serif) for body
Color tokens:    #2BAEB4 teal · #5DD07A green · #1F3A3D ink · #4A6568 soft
                 #FBF7F1 cream · #FFFFFF paper · #E8F5EC mint · #EEE8F6 lilac
CTA pattern:     Rounded pill, gradient teal→green or solid, box-shadow
Section arc:     Preheader → Logo header → Hero → Body → Sections → CTA → Signoff → Footer
```

**Existing contraptions in the template — USE THESE across wireframes:**

The Welcome Flow template already contains these brand-specific creative elements. They are the brand's visual vocabulary. Use them across all flows/emails:

| Contraption | Where it lives | When to use |
|-------------|----------------|-------------|
| **Floating decorative circles** | Hero section, absolute positioned, 3 sizes (8/14/22px), semi-opaque purple/lilac | Section headers, hero areas, transition zones — softens hard edges |
| **Lilac gradient hero** | Top content section, `linear-gradient(180deg, #EEE8F6 → #F6F1FB)`, border-radius 28 | Welcome-style openings, soft educational content |
| **Series badge** | Eyebrow label, uppercase 12px Inter, letter-spacing 2, colored accent | Flow position markers, section labels |
| **Mint insight block** | Content card, `#E8F5EC` bg, border-radius 24, eyebrow + H2 + body | Reframe sections, educational callouts, "the part nobody explained" moments |
| **Tilted creed stickers** | Rotated cards (-1°/0.8°/-0.5°), box-shadow 3px 3px 0 ink, colored bg per card | Affirmations, key reframes, 3-line statements of belief |
| **3-step path cards** | Flex row with number badge (32px Fraunces), tinted bg per step, body text | Process explanations, methodology steps, progressive reveals |
| **Parent quote block** | Bordered top+bottom, centered, Fraunces italic, attribution below | Testimonials, social proof, expert quotes |
| **Soft gradient CTA pill** | `linear-gradient(135deg, teal → green)`, border-radius 999, box-shadow, white text | Primary actions, no-urgency CTAs |
| **Signoff with PS** | "With you," / name / PS format, Inter 15px body, Fraunces 22px name | Every email — brand signature pattern |

**AND be creative — add MORE contraptions from the consolidated design skills:**

The template's existing contraptions are the foundation. Wireframes should also introduce NEW creative elements from the 12 design skills in the consolidated file. Each email/flow can add:

- New hero treatments (circle crop, full-bleed, illustration-backed, split layout)
- New section dividers (gradient bands, arcway dividers, ruled lines, decorative SVGs)
- New card patterns (border accent cards, floating testimonial cards, comparison rows)
- New decorative vocabulary (corner marks, SVG flourishes, pattern overlays, color washes)
- New CTA treatments (text-only, underlined, icon-button, secondary ghost)
- New typography treatments (gradient text, tilted headings, decorative drop caps)

**The rule:** Every wireframe must feel like it belongs to BrightKidCo (inherits the template's system) while being visually distinct from every other email (adds new contraptions per the creative strategy). Same brand language, different sentences — and growing the vocabulary with each email.

---

## Input Sources Reference

```
Source Type                           │ Directory/Path
──────────────────────────────────────┼─────────────────────────────────────────────────────────────────────────
Giuliano Demands                       │ /root/projects/brightkidco/demands/GIULIANO-DEMANDS.md
Copy output (primary source —         │ /root/projects/brightkidco/outputs/copy/<flow>/<email>.md
  the specific email being wireframed) │
Consolidated Design Skills             │ /root/projects/brightkidco/plans/consolidated-design-skills-trimmed.md
(covers all 12 design skills, 185KB   │
of raw specs — CSS, SVG, dimensions,  │
rendering notes, dark mode overrides) │
Reference Template (Welcome Flow)     │ /root/projects/brightkidco/raw/BKCO - EMAIL MARKETING-2.zip →
                                       │   autistic-welcome/email-1.jsx
                                       │ THE template that wireframes follow. Study the structure:
                                       │   inline styles, token colors (#2BAEB4, #5DD07A, #1F3A3D),
                                       │   font stack (Fraunces serif headlines + Inter sans body),
                                       │   section architecture, CTA pattern.
                                       │ This is the structural foundation — NOT a layout to clone.
Adjacent email wireframe (if exists)  │ /root/projects/brightkidco/wireframes/<flow>/<email-previous>.md
(for flow visual continuity)          │
Wireframe output dir                  │ /root/projects/brightkidco/wireframes/<flow>/
```

---

## Wireframe Output Template — 8 Mandatory Sections

Every wireframe file produced MUST follow this template exactly. Each section heading is mandatory. Section content within each heading follows a specific format — variations are accepted only if they improve clarity.

---

### SECTION 1 — Metadata

```
──────────────────────────────────────────────────────────────────────────────────────────────
METADATA
──────────────────────────────────────────────────────────────────────────────────────────────
Flow:             Flow name (e.g., Welcome, Cart Abandonment)
Email #:          Position in flow (e.g., E1, E2)
Subject:          Exact subject line from copy output
Preheader:        Exact preview text from copy output
Archetype:        From copy output creative strategy (EDUCATOR, SUPPORTER, etc.)
Level:            L1 / L2 / L3 / GF (for level-specific) or CROSS (for cross-level)
Source file:      Absolute path to the copy output file used as source
Contraptions:     Descriptive names of techniques used (e.g., circle crop hero,
                  pill CTA button, comparison row, arcway divider)
```

### SECTION 2 — Strategy Box

```
Strategy Box
┌──────────────────────────────────────────────────────────────────────────────────────────────┐
│ Archetype:   EDUCATOR                                                                        │
│ Timing:      +24 hours after Email 1                                                         │
│ Subject:     "Why rewards couldn't fix this."                                                │
│ Preheader:   "The word nobody explained to you yet."                                         │
│ Goal:        Explain interoception and why standard methods fail                             │
└──────────────────────────────────────────────────────────────────────────────────────────────┘
```

Data in this section is drawn EXACTLY from the copy output file's Part 1 (Email Copy) metadata and Part 2 (Creative Strategy).

### SECTION 3 — Creative Box

```
Creative Box
┌──────────────────────────────────────────────────────────────────────────────────────────────┐
│ Visual Metaphor:  Body-signal loop diagram, soft teal/green, educational                     │
│ Color Chapters:   HERO(#FFFBF0) → LETTER(#FFF6E2) → DEF(#EAF6F2) → COMPARE(#EAF6F2) →       │
│                   QUOTE(#F0EDF8) → PRODUCT(#FFFBF0) → CTA(#1F2D2F)                           │
│ Hero Style:       A06 Circle Crop Hero — diagram cropped to circle                           │
│ CTA Energy:       Gentle — "See the pants"                                                   │
│ Contraptions:     H02 Comparison Row, E10 Border Accent Card, E07 Floating Card,             │
│                   D04 Arcway Divider                                                         │
└──────────────────────────────────────────────────────────────────────────────────────────────┘
```

Data is drawn from the copy output file's Part 2 (Creative Strategy) — specifically The Big Idea, Layout Architecture, and Contraption sections.

### SECTION 4 — Layout ASCII

This is the core of the wireframe. The full email is drawn as ASCII box art using `┌─┐│└┘├┤╔╗╚╝║═╬╩╦╠╣` and `░░░▒▒▒▓▓▓███` characters for visual weight.

Format rules:
- Background color of the email shell is the first element (`bg: #HEX`)
- Every section is a bordered box with properties written inline on the top border line
- Every section transition includes gradient band if specified (from→to hex values written inline)
- Every hex color is written INLINE on the element, not referenced by token name
- Every font size and weight is specified inline
- Every border-radius, box-shadow, padding is written inline
- Copy is placed EXACTLY as it appears in the copy output — verbatim, no rephrasing
- Long copy blocks can be summarized with `[...full body text in Copy Blocks section...]` only if the ASCII would be illegible at full length. The tag must reference the Section 6 copy block ID.

Example structure (the existing wireframe for Welcome E1 at `/root/projects/brightkidco/wireframes/flow1-email1.md` shows the exact standard):

```
┌──────────────────────────────────────────────────────────────────────────────┐
│                                                                              │
│                              ██████████████████                              │
│                              ██  LOGO 34px  ██                               │
│                              ██████████████████                              │
│                           padding: 24px 20px 0                               │
│                                                                              │
├──────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│   ╔══════════════════════════════════════════════════════════════════════╗   │
│   ║  ┌──────────────────────────────────────────────────────────────┐  ║   │
│   ║  │  ┌──┐                              ┌──┐                      │  ║   │
│   ║  │  │L1│                              │L2│                      │  ║   │
│   ║  │  └──┘                              └──┘                      │  ║   │
│   ║  │                                                              │  ║   │
│   ║  │                  ┌──────────────────┐                        │  ║   │
│   ║  │                  │   ▓▓▓▓▓▓▓▓▓▓▓▓   │                        │  ║   │
│   ║  │                  │  ▓  IMAGE  ▓     │                        │  ║   │
│   ║  │                  │   ▓▓▓▓▓▓▓▓▓▓▓▓   │                        │  ║   │
│   ║  │                  └──────────────────┘                        │  ║   │
│   ║  │                                                              │  ║   │
│   ║  │   HERO IMAGE / DESCRIPTION / RATIO / MOOD                   │  ║   │
│   ║  │                                                              │  ║   │
│   ║  │  ┌──┐                              ┌──┐                      │  ║   │
│   ║  │  │L3│                              │L4│                      │  ║   │
│   ║  │  └──┘                              └──┘                      │  ║   │
│   ║  └──────────────────────────────────────────────────────────────┘  ║   │
│   ║    240px · #FFFFFF · border: 2px dashed #2BAEB4                    ║   │
│   ╚══════════════════════════════════════════════════════════════════════╝   │
│                                                                              │
├──────────────────────────────────────────────────────────────────────────────┤
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │
│  ░░░░░░░░░░░░░░░░░░░░ GRADIENT BAND 40px ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │
├──────────────────────────────────────────────────────────────────────────────┤
│   ...next section...                                                          │
└──────────────────────────────────────────────────────────────────────────────┘
```

### SECTION 5 — Contraption Specs

Each technique used in the wireframe is listed with:
- Its descriptive name (e.g., `circle crop hero`)
- What it does in this specific email
- Any configuration parameters specific to this email (colors, sizes, angles)

```
Contraption Specs
┌──────────────────────────────────────────────────────────────────────────────┐
│ Circle Crop Hero                                                             │
│   Crop: 240px circle, border: 3px #2BAEB4, box-shadow: 2px 2px 0 #1F2D2F   │
│   Image: Body-signal loop diagram, soft teal/green tones                     │
│   Position: Hero slot, centered, above H1                                    │
│   Source: Search "circle crop" in consolidated design skills                 │
│                                                                              │
│ Comparison Row (3 columns)                                                   │
│   Labels: "✕ Pull-ups" / "✕ Regular" / "✓ Body-Signal"                      │
│   Stripe colors: #E8534A / #FFB84D / #2BAEB4                                 │
│   Card bg: #FFF, border: 2px #1F2D2F, border-radius: 16                     │
│   Source: Search "comparison" in consolidated design skills                  │
│                                                                              │
│ Border Accent Card                                                           │
│   Position: Definition section body card                                     │
│   bg: #FFF, border-top: 4px solid #2BAEB4, border-radius: 16                │
│   padding: 16px 20px, box-shadow: 2px 2px 0 #1F2D2F                         │
│   Source: Search "accent card" in consolidated design skills                 │
│                                                                              │
│ Pill CTA Button                                                              │
│   Text: "See the pants →"                                                    │
│   bg: #D8F57C, text: #1F2D2F, border-radius: 999                            │
│   padding: 14px 32px, font: 16px bold                                        │
│   Source: Search "pill button" in consolidated design skills                 │
│                                                                              │
│ Arcway Section Divider                                                       │
│   Position: Between Definition section and Reframe section                   │
│   Height: 30px, color: #EAF6F2, curved separator shape                      │
│   Source: Search "arcway divider" in consolidated design skills              │
└──────────────────────────────────────────────────────────────────────────────┘
```

### SECTION 6 — Copy Blocks

Every block of copy from the email is listed with its position in the layout. This serves as a reference for the HTML builder so they can find the exact text without parsing the ASCII.

```
Copy Blocks
┌──────────────────────────────────────────────────────────────────────────────┐
│ SECTION: HEADER                                                              │
│   Logo | BrightKidCo logotype, centered, padding: 24px 20px 0               │
│                                                                              │
│ SECTION: HERO                                                                │
│   HERO IMAGE: Body-signal loop diagram (see Image Briefs)                    │
│                                                                              │
│ SECTION: LETTER                                                              │
│   Eyebrow: ✿ Part two of six | badge, yellow #FFD866, rotate(-1.5°)         │
│   H1: "Why rewards" / "couldn't fix this." [GRADIENT on "couldn't fix this" │
│       #2BAEB4 → #5DD07A]                                                     │
│   P1: "Hi again."                                                            │
│   P2: "Yesterday we said: you haven't done anything wrong."                  │
│   [...]                                                                      │
│                                                                              │
│ SECTION: CTA                                                                 │
│   CTA: "See the pants →" | J01 Lime Pill                                    │
│   Fine: "No rush. No pressure."                                              │
│                                                                              │
│ SECTION: SIGNOFF                                                             │
│   Header: "A note from" / "Lena Bauer" / "Founder · BrightKidCo · Mom of two"│
│   Body: "With you," / "Lena"                                                 │
│   PS: "P.S. If you ever want to reply and tell me about your child —         │
│        I read every one. Really."                                            │
│                                                                              │
│ SECTION: FOOTER                                                              │
│   Tagline: "Calm progress, one day at a time."                               │
│   Links: Our Method · Shop the Pants · Parent Stories                        │
│   Address: BrightKidCo Ltd · Berlin, Germany · hello@brightkidco.com         │
│   Unsubscribe: [Unsubscribe] link                                            │
└──────────────────────────────────────────────────────────────────────────────┘
```

Every copy block is EXACT — verbatim from the copy output file's Part 1 (Email Copy). No rewrites, no rephrasing, no substitutions.

### SECTION 7 — Image Briefs

Every image in the wireframe is documented with:
- ID (e.g., `HERO-01`, `SECTION-01`, `STEP-01`)
- Description (what the image shows, in photographic terms)
- Ratio (e.g., `5:3`, `16:9`, `1:1`, `4:5`)
- Crop treatment (e.g., `circle crop`, `full-bleed`, `rounded corners 12px`)
- Mood/lighting (e.g., `warm morning light`, `soft editorial`, `clean product`)
- Alt text (accessibility description)
- Any overlay treatment (e.g., `corner marks SVG`, `gradient overlay`)

```
Image Briefs
┌──────────────────────────────────────────────────────────────────────────────┐
│ HERO-01                                                                      │
│   Description: Body-signal loop diagram in soft teal/green tones.            │
│                Child silhouette with arrows showing body→signal→brain→aware- │
│                ness loop. Simple icon-based, educational.                     │
│   Ratio: 1:1 (square for circle crop)                                        │
│   Crop: Circle crop, 240px diameter, 3px #2BAEB4 border                     │
│   Mood: Clean, warm editorial, teal/green tones                              │
│   Alt: "Diagram: body-signal loop showing how neurodivergent children        │
│         process sensation differently"                                       │
│                                                                              │
│ PRODUCT-01                                                                   │
│   Description: BrightKidCo pants on soft cream background, gentle lighting,  │
│                folded neatly.                                                │
│   Ratio: 4:5                                                                 │
│   Crop: Rounded corners 12px                                                 │
│   Mood: Product editorial, clean warm light                                  │
│   Alt: "BrightKidCo Body-Signal Learning Layer™ pants — sensory-friendly    │
│         training underwear"                                                  │
└──────────────────────────────────────────────────────────────────────────────┘
```

### SECTION 8 — Render Notes

Technical notes for HTML production:

```
Render Notes
┌──────────────────────────────────────────────────────────────────────────────┐
│ HERO-01 (circle crop):    → PNG with circle crop baked in (email-safe)      │
│ Corner marks:             → baked into hero PNG                              │
│ Gradient bands:           → 32-40px PNG stripes (email-safe)                │
│ 4 sticker reasons:        → rendered as live HTML (table, no rotation)      │
│ Comparison cards:         → live HTML table, accent stripes as PNG overlays │
│ Expert quote:             → live HTML (floating card = wide shadow only)    │
│ Product soft:             → live HTML with product PNG                      │
│ CTA button:               → live HTML (table cell method, VML for Outlook)  │
│ Signoff:                  → avatar as PNG, signature as web font + fallback │
│                                                                              │
│ Dark mode:                → bg #FFFBF0→#1A1A1A, #FFF6E2→#2A2A2A,           │
│                              #EAF6F2→#1A2A2C, text #1F2D2F→#F5F5F5         │
│ Outlook:                  → VML roundrect for CTA button                     │
│ Gmail clip:               → HTML under 102KB                                 │
│ Responsive:               → 600px max-width, 320px mobile collapse          │
│ Font stack:               → Georgia, 'Times New Roman', serif for body      │
│                              (as defined in design skills)                   │
│ Web fonts:                → None — use system font stack only (email-safe)   │
│                                                                              │
│ Level adjustments:        → R1-R6: [list specific R1-R6 adjustments from    │
│                              copy output creative strategy]                  │
└──────────────────────────────────────────────────────────────────────────────┘
```

The Render Notes section is the HTML builder's technical spec. It must answer every "how do I build this?" question before it's asked.

---

## Agent Types

### TYPE A — Level-Specific Wireframe Agent

**Used for:** Welcome Flow (32), Winback Path A (12), Winback Path B (12), PP-Extended Education (20)

**Reads 1 copy output file (the specific level variant being wireframed) and produces 1 wireframe.**

#### Phase 1 — Read ALL of these (in order):

```
1. /root/projects/brightkidco/outputs/copy/<flow>/<email-level>.md
   (THE copy output file — contains the exact copy + creative strategy for this email + level)

2. /root/projects/brightkidco/demands/GIULIANO-DEMANDS.md
   (Giuliano's quality standards and specific demands)

3. /root/projects/brightkidco/plans/consolidated-design-skills-trimmed.md
   (Full creative reference — 12 design skills, 185KB of raw technique specs)

4. Extract from BKCO - EMAIL MARKETING-2.zip → autistic-welcome/email-1.jsx
   (Reference template — study the structural foundation: font stack, color tokens,
    inline style patterns, section architecture, CTA pattern. This gives you the
    grammar. Your wireframe writes different sentences with it.)
```

**If email N > E1 in the flow (optional but recommended):**
```
4. /root/projects/brightkidco/wireframes/<flow>/<email-(N-1)-<same-level>.md
   (The previous email's wireframe for THIS level — visual continuity)
```

#### Phase 2 — Write the Deliverable

1. Read ALL Phase 1 source files in order
2. Extract the following from the copy output file:
   - Part 1: Full email copy (subject, preheader, H1, body paragraphs, CTA, signoff, footer) — extract VERBATIM
   - Part 2: Creative strategy (big idea, layout architecture, contraption list, color narrative, typography, level calibration) — extract as the creative brief
3. Search the Consolidated Design Skills for each technique described in the creative strategy (e.g., search for `circle crop`, `pill button`, `comparison row`, `floating card`, `arcway divider`). For each technique found, read the FULL specification — CSS values, SVG paths, dimensions, border properties, box-shadow, padding, rendering approach, dark mode overrides. Do not use partial specs or invent values.
4. **For contraptions that come from the template** (floating circles, lilac gradient hero, mint insight block, tilted creed stickers, 3-step path cards, parent quote block, soft gradient CTA pill, signoff with PS): extract the EXACT CSS values from `email-1.jsx` verbatim. Do not approximate. The template's CSS is the brand standard — every px, every hex, every border-radius must match. Open `email-1.jsx`, find the corresponding JSX element, and copy its style values directly into the Contraption Specs section.
5. From GIULIANO-DEMANDS.md, check for any specific demands that affect visual execution (image standards, quality bar, specific preferences)
6. Write 1 wireframe file at the specified output path containing ALL 8 mandatory sections:
   - Section 1: Metadata
   - Section 2: Strategy Box
   - Section 3: Creative Box
   - Section 4: Layout ASCII (full wireframe — the primary deliverable)
   - Section 5: Contraption Specs
   - Section 6: Copy Blocks
   - Section 7: Image Briefs
   - Section 8: Render Notes
6. Apply level-specific calibration from the copy output's creative strategy:
   - L1: Calm, supportive, scientific — visual pace is slower, more breathing room
   - L2: Gentle reframe, empathetic — slightly more contrast in color pacing
   - L3: Direct, clear, no-nonsense — higher contrast, tighter spacing
   - GF: Inclusive, warm, community — warmer tones, family imagery, soft shapes

#### Phase 3 — Validation

Before writing the file, verify each item:

- [ ] Copy is VERBATIM from the copy output — every word matches
- [ ] All 8 sections present with correct heading formatting
- [ ] Every hex color written inline on ASCII elements (not referenced by token name)
- [ ] Every border-radius, padding, font-size, box-shadow specified inline
- [ ] Every gradient has from→to hex values
- [ ] Every technique sourced by searching the consolidated file — not invented, not from external knowledge
- [ ] Contraption Specs section lists EVERY contraption used in the layout
- [ ] Image Briefs cover EVERY image shown in the layout
- [ ] Render Notes cover dark mode, Outlook/VML, Gmail clip limit, responsive behavior
- [ ] Previous email's wireframe checked for visual continuity (color chapters, contraption language, CTA style, signoff format)
- [ ] Level calibration from creative strategy applied to visual direction
- [ ] File path matches the exact naming convention: `wireframes/<flow>/<flow>-<email#>-e<#>[-l<level>].md`

---

### TYPE B — Cross-Level Wireframe Agent

**Used for:** Cart Abandonment (3), Checkout Abandonment (2), Browse Abandonment (3), Order Confirmation (1), Shipping (1), Out for Delivery (1), Arrived & Welcome (1), PP-Direct Upsell (2), PP-Level Detection (1), PP-Education D0-21 (4), PP-Extended Upsell (3), PP-Mid Check-In (3), PP-Mary S. Story (1), Replenish A/B/C (7), Review Request (2), Site Abandonment (1), FAQ/Objection Library (6), PP-Support At-Risk (4), Sunset Flow (2)

**Reads 1 copy output file (cross-level — serves all levels) and produces 1 wireframe.**

#### Phase 1 — Read ALL of these (in order):

```
1. /root/projects/brightkidco/outputs/copy/<flow>/<email>.md
   (THE copy output file — contains the exact copy + creative strategy for this email)

2. /root/projects/brightkidco/demands/GIULIANO-DEMANDS.md
   (Giuliano's quality standards)

3. /root/projects/brightkidco/plans/consolidated-design-skills-trimmed.md
   (Full creative reference — 12 design skills, 185KB of raw technique specs)

4. Extract from BKCO - EMAIL MARKETING-2.zip → autistic-welcome/email-1.jsx
   (Reference template — study the structural foundation. This gives you the
    grammar. Your wireframe writes different sentences with it.)
```

**If email N > E1 in the flow (optional but recommended):**
```
4. /root/projects/brightkidco/wireframes/<flow>/<email-(N-1)>.md
   (The previous email's wireframe — visual continuity)
```

#### Phase 2 — Write the Deliverable

1. Read ALL Phase 1 source files in order
2. Extract the following from the copy output file:
   - Part 1: Full email copy — extract VERBATIM
   - Part 2: Creative strategy — extract R1-R6 calibration rules specifically
3. Search the Consolidated Design Skills for each technique described in the creative strategy. Read the full specification for each technique — CSS, SVG, dimensions, rendering notes. Do not invent values.
4. **For contraptions that come from the template** (floating circles, lilac gradient hero, mint insight block, tilted creed stickers, 3-step path cards, parent quote block, soft gradient CTA pill, signoff with PS): extract the EXACT CSS values from `email-1.jsx` verbatim. The template's CSS is the brand standard — copy directly into the Contraption Specs section.
5. Write 1 wireframe file with ALL 8 mandatory sections, with one addition:
   - In Section 3 (Creative Box), add an R1-R6 Calibration sub-block:
     ```
     R1-R6 Calibration:
       R1 (Calm/Safe):    Use softer gradient transitions, wider padding
       R2 (Empathetic):   Warmer section bg tones (#FFF6E2 dominant)
       R3 (Direct/Deep):  Higher contrast, tighter spacing
       R4 (Scientific):   Add data element or diagram reference
       R5 (Playful):      More decorative elements, brighter accents
       R6 (Minimal):      Reduce decorative elements, max whitespace
     ```
   - In Section 5 (Contraption Specs), note which contraptions are level-adjusted
   - In Section 8 (Render Notes), include the full R1-R6 adjustments in a Level Adjustments block

5. Apply cross-level calibration: one visual direction that serves all 4 levels simultaneously
   - No level-specific imagery — use universal scenes (parent+child, nature, everyday moments)
   - Color palette must work for all tonalities — keep mid-range contrast
   - Typography must be universally readable — no stylistic extremes
   - All levels must feel addressed, none must feel excluded

#### Phase 3 — Validation

- [ ] Copy is VERBATIM from the copy output — every word matches
- [ ] All 8 sections present with correct heading formatting
- [ ] Every hex color written inline on ASCII elements
- [ ] Every border-radius, padding, font-size, box-shadow specified inline
- [ ] Every gradient has from→to hex values
- [ ] Every technique sourced by searching the consolidated file — not invented, not from external knowledge
- [ ] R1-R6 calibration block present in Creative Box
- [ ] Level adjustments documented in Render Notes section
- [ ] Cross-level calibration: no level-feels-excluded trap
- [ ] One visual direction serves all levels — no level-specific imagery
- [ ] Previous email's wireframe checked for visual continuity

---

## Task List — All ~114 Wireframes

### Wave 1 — Welcome Flow E1-E4 (Level-Specific) — 16 files

```
┌─────────┬──────────────────────────────────────────────────────────────────────────────────────┐
│ Task ID │ Output File                                                                           │
├─────────┼──────────────────────────────────────────────────────────────────────────────────────┤
│ WF-001  │ /root/projects/brightkidco/wireframes/welcome/welcome-01-e1-l1.md                     │
│ WF-002  │ /root/projects/brightkidco/wireframes/welcome/welcome-01-e1-l2.md                     │
│ WF-003  │ /root/projects/brightkidco/wireframes/welcome/welcome-01-e1-l3.md                     │
│ WF-004  │ /root/projects/brightkidco/wireframes/welcome/welcome-01-e1-gf.md                     │
│ WF-005  │ /root/projects/brightkidco/wireframes/welcome/welcome-01-e2-l1.md                     │
│ WF-006  │ /root/projects/brightkidco/wireframes/welcome/welcome-01-e2-l2.md                     │
│ WF-007  │ /root/projects/brightkidco/wireframes/welcome/welcome-01-e2-l3.md                     │
│ WF-008  │ /root/projects/brightkidco/wireframes/welcome/welcome-01-e2-gf.md                     │
│ WF-009  │ /root/projects/brightkidco/wireframes/welcome/welcome-01-e3-l1.md                     │
│ WF-010  │ /root/projects/brightkidco/wireframes/welcome/welcome-01-e3-l2.md                     │
│ WF-011  │ /root/projects/brightkidco/wireframes/welcome/welcome-01-e3-l3.md                     │
│ WF-012  │ /root/projects/brightkidco/wireframes/welcome/welcome-01-e3-gf.md                     │
│ WF-013  │ /root/projects/brightkidco/wireframes/welcome/welcome-01-e4-l1.md                     │
│ WF-014  │ /root/projects/brightkidco/wireframes/welcome/welcome-01-e4-l2.md                     │
│ WF-015  │ /root/projects/brightkidco/wireframes/welcome/welcome-01-e4-l3.md                     │
│ WF-016  │ /root/projects/brightkidco/wireframes/welcome/welcome-01-e4-gf.md                     │
└─────────┴──────────────────────────────────────────────────────────────────────────────────────┘
```

**Wave 1 wireframes map to copy outputs at:**
`/root/projects/brightkidco/outputs/copy/welcome/welcome-01-e<1-4>-l<1/2/3/gf>.md`

**Dependency:** Copy Waves 1-2 must be 100% complete before this wave starts.

---

### Wave 2 — Welcome Flow E5-E8 (Level-Specific) — 16 files

```
┌─────────┬──────────────────────────────────────────────────────────────────────────────────────┐
│ Task ID │ Output File                                                                           │
├─────────┼──────────────────────────────────────────────────────────────────────────────────────┤
│ WF-017  │ /root/projects/brightkidco/wireframes/welcome/welcome-01-e5-l1.md                     │
│ WF-018  │ /root/projects/brightkidco/wireframes/welcome/welcome-01-e5-l2.md                     │
│ WF-019  │ /root/projects/brightkidco/wireframes/welcome/welcome-01-e5-l3.md                     │
│ WF-020  │ /root/projects/brightkidco/wireframes/welcome/welcome-01-e5-gf.md                     │
│ WF-021  │ /root/projects/brightkidco/wireframes/welcome/welcome-01-e6-l1.md                     │
│ WF-022  │ /root/projects/brightkidco/wireframes/welcome/welcome-01-e6-l2.md                     │
│ WF-023  │ /root/projects/brightkidco/wireframes/welcome/welcome-01-e6-l3.md                     │
│ WF-024  │ /root/projects/brightkidco/wireframes/welcome/welcome-01-e6-gf.md                     │
│ WF-025  │ /root/projects/brightkidco/wireframes/welcome/welcome-01-e7-l1.md                     │
│ WF-026  │ /root/projects/brightkidco/wireframes/welcome/welcome-01-e7-l2.md                     │
│ WF-027  │ /root/projects/brightkidco/wireframes/welcome/welcome-01-e7-l3.md                     │
│ WF-028  │ /root/projects/brightkidco/wireframes/welcome/welcome-01-e7-gf.md                     │
│ WF-029  │ /root/projects/brightkidco/wireframes/welcome/welcome-01-e8-l1.md                     │
│ WF-030  │ /root/projects/brightkidco/wireframes/welcome/welcome-01-e8-l2.md                     │
│ WF-031  │ /root/projects/brightkidco/wireframes/welcome/welcome-01-e8-l3.md                     │
│ WF-032  │ /root/projects/brightkidco/wireframes/welcome/welcome-01-e8-gf.md                     │
└─────────┴──────────────────────────────────────────────────────────────────────────────────────┘
```

**Dependency:** Copy Waves 1-2 complete. Also depends on Wave 1 wireframes being complete (continuity requires E4 before E5 within same level).

---

### Wave 3 — Cart + Checkout + Browse Abandonment (Cross-Level) — 8 files

```
┌─────────┬──────────────────────────────────────────────────────────────────────────────────────┐
│ Task ID │ Output File                                                                           │
├─────────┼──────────────────────────────────────────────────────────────────────────────────────┤
│ WF-033  │ /root/projects/brightkidco/wireframes/cart/cart-02-e1.md                              │
│ WF-034  │ /root/projects/brightkidco/wireframes/cart/cart-02-e2.md                              │
│ WF-035  │ /root/projects/brightkidco/wireframes/cart/cart-02-e3.md                              │
│ WF-036  │ /root/projects/brightkidco/wireframes/checkout/checkout-03-e1.md                      │
│ WF-037  │ /root/projects/brightkidco/wireframes/checkout/checkout-03-e2.md                      │
│ WF-038  │ /root/projects/brightkidco/wireframes/browse/browse-04-e1.md                          │
│ WF-039  │ /root/projects/brightkidco/wireframes/browse/browse-04-e2.md                          │
│ WF-040  │ /root/projects/brightkidco/wireframes/browse/browse-04-e3.md                          │
└─────────┴──────────────────────────────────────────────────────────────────────────────────────┘
```

**Dependency:** Copy Wave 3 complete.

---

### Wave 4 — Transactional + PP-Level Detection (Cross-Level) — 7 files

```
┌─────────┬──────────────────────────────────────────────────────────────────────────────────────┐
│ Task ID │ Output File                                                                           │
├─────────┼──────────────────────────────────────────────────────────────────────────────────────┤
│ WF-041  │ /root/projects/brightkidco/wireframes/transactional/order-05-e1.md                    │
│ WF-042  │ /root/projects/brightkidco/wireframes/transactional/shipping-06.md                    │
│ WF-043  │ /root/projects/brightkidco/wireframes/transactional/ofd-07-e1.md                      │
│ WF-044  │ /root/projects/brightkidco/wireframes/transactional/arrived-08.md                     │
│ WF-045  │ /root/projects/brightkidco/wireframes/pp-direct-upsell/upsell-09-e1.md                │
│ WF-046  │ /root/projects/brightkidco/wireframes/pp-direct-upsell/upsell-09-e2.md                │
│ WF-047  │ /root/projects/brightkidco/wireframes/pp-level-detection/detection-10.md              │
└─────────┴──────────────────────────────────────────────────────────────────────────────────────┘
```

**Dependency:** Copy Wave 4 complete.

---

### Wave 5 — Post-Purchase Education + Mary S. Story (Cross-Level) — 8 files

```
┌─────────┬──────────────────────────────────────────────────────────────────────────────────────┐
│ Task ID │ Output File                                                                           │
├─────────┼──────────────────────────────────────────────────────────────────────────────────────┤
│ WF-048  │ /root/projects/brightkidco/wireframes/pp-education/pped-11-d0.md                      │
│ WF-049  │ /root/projects/brightkidco/wireframes/pp-education/pped-11-d7.md                      │
│ WF-050  │ /root/projects/brightkidco/wireframes/pp-education/pped-11-d14.md                     │
│ WF-051  │ /root/projects/brightkidco/wireframes/pp-education/pped-11-d21.md                     │
│ WF-052  │ /root/projects/brightkidco/wireframes/pp-extended-upsell/ppupsell-12-e1.md            │
│ WF-053  │ /root/projects/brightkidco/wireframes/pp-extended-upsell/ppupsell-12-e2.md            │
│ WF-054  │ /root/projects/brightkidco/wireframes/pp-extended-upsell/ppupsell-12-e3.md            │
│ WF-055  │ /root/projects/brightkidco/wireframes/pp-mary-story/mary-14-e1.md                     │
└─────────┴──────────────────────────────────────────────────────────────────────────────────────┘
```

**Dependency:** Copy Wave 5 complete.

---

### Wave 6 — PP-Mid Check-In + Replenish A/B/C + Review Request (Cross-Level) — 12 files

```
┌─────────┬──────────────────────────────────────────────────────────────────────────────────────┐
│ Task ID │ Output File                                                                           │
├─────────┼──────────────────────────────────────────────────────────────────────────────────────┤
│ WF-056  │ /root/projects/brightkidco/wireframes/pp-mid-checkin/mid-13-d30.md                    │
│ WF-057  │ /root/projects/brightkidco/wireframes/pp-mid-checkin/mid-13-d45.md                    │
│ WF-058  │ /root/projects/brightkidco/wireframes/pp-mid-checkin/mid-13-d60.md                    │
│ WF-059  │ /root/projects/brightkidco/wireframes/replenish-a/repa-15-e1.md                       │
│ WF-060  │ /root/projects/brightkidco/wireframes/replenish-a/repa-15-e2.md                       │
│ WF-061  │ /root/projects/brightkidco/wireframes/replenish-a/repa-15-e3.md                       │
│ WF-062  │ /root/projects/brightkidco/wireframes/replenish-b/repb-16-e1.md                       │
│ WF-063  │ /root/projects/brightkidco/wireframes/replenish-b/repb-16-e2.md                       │
│ WF-064  │ /root/projects/brightkidco/wireframes/replenish-c/repc-17-e1.md                       │
│ WF-065  │ /root/projects/brightkidco/wireframes/replenish-c/repc-17-e2.md                       │
│ WF-066  │ /root/projects/brightkidco/wireframes/review-request/review-18-e1.md                  │
│ WF-067  │ /root/projects/brightkidco/wireframes/review-request/review-18-e2.md                  │
└─────────┴──────────────────────────────────────────────────────────────────────────────────────┘
```

**Dependency:** Copy Wave 6 complete.

---

### Wave 7 — Winback Path A (Level-Specific) + Site Abandonment + FAQ E1 (Cross-Level) — 14 files

```
┌─────────┬──────────────────────────────────────────────────────────────────────────────────────────┐
│ Task ID │ Output File                                                                               │
├─────────┼──────────────────────────────────────────────────────────────────────────────────────────┤
│ WF-068  │ /root/projects/brightkidco/wireframes/winback-a/winback-a-19-e1-l1.md                     │
│ WF-069  │ /root/projects/brightkidco/wireframes/winback-a/winback-a-19-e1-l2.md                     │
│ WF-070  │ /root/projects/brightkidco/wireframes/winback-a/winback-a-19-e1-l3.md                     │
│ WF-071  │ /root/projects/brightkidco/wireframes/winback-a/winback-a-19-e1-gf.md                     │
│ WF-072  │ /root/projects/brightkidco/wireframes/winback-a/winback-a-19-e2-l1.md                     │
│ WF-073  │ /root/projects/brightkidco/wireframes/winback-a/winback-a-19-e2-l2.md                     │
│ WF-074  │ /root/projects/brightkidco/wireframes/winback-a/winback-a-19-e2-l3.md                     │
│ WF-075  │ /root/projects/brightkidco/wireframes/winback-a/winback-a-19-e2-gf.md                     │
│ WF-076  │ /root/projects/brightkidco/wireframes/winback-a/winback-a-19-e3-l1.md                     │
│ WF-077  │ /root/projects/brightkidco/wireframes/winback-a/winback-a-19-e3-l2.md                     │
│ WF-078  │ /root/projects/brightkidco/wireframes/winback-a/winback-a-19-e3-l3.md                     │
│ WF-079  │ /root/projects/brightkidco/wireframes/winback-a/winback-a-19-e3-gf.md                     │
│ WF-080  │ /root/projects/brightkidco/wireframes/site-abandonment/site-20-e1.md                      │
│ WF-081  │ /root/projects/brightkidco/wireframes/faq-library/faq-21-e1.md                            │
└─────────┴──────────────────────────────────────────────────────────────────────────────────────────┘
```

**Dependency:** Copy Wave 7 complete.

---

### Wave 8 — FAQ Objection Library E2-E6 (Cross-Level) — 5 files

```
┌─────────┬──────────────────────────────────────────────────────────────────────────────────────────┐
│ Task ID │ Output File                                                                               │
├─────────┼──────────────────────────────────────────────────────────────────────────────────────────┤
│ WF-082  │ /root/projects/brightkidco/wireframes/faq-library/faq-21-e2.md                            │
│ WF-083  │ /root/projects/brightkidco/wireframes/faq-library/faq-21-e3.md                            │
│ WF-084  │ /root/projects/brightkidco/wireframes/faq-library/faq-21-e4.md                            │
│ WF-085  │ /root/projects/brightkidco/wireframes/faq-library/faq-21-e5.md                            │
│ WF-086  │ /root/projects/brightkidco/wireframes/faq-library/faq-21-e6.md                            │
└─────────┴──────────────────────────────────────────────────────────────────────────────────────────┘
```

**Dependency:** Copy Wave 8 complete.

---

### Wave 9 — PP-Extended Education E1-E3 (Level-Specific) — 12 files

```
┌─────────┬──────────────────────────────────────────────────────────────────────────────────────────────┐
│ Task ID │ Output File                                                                                   │
├─────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ WF-087  │ /root/projects/brightkidco/wireframes/pp-extended-ed/pped-22-e1-l1.md                         │
│ WF-088  │ /root/projects/brightkidco/wireframes/pp-extended-ed/pped-22-e1-l2.md                         │
│ WF-089  │ /root/projects/brightkidco/wireframes/pp-extended-ed/pped-22-e1-l3.md                         │
│ WF-090  │ /root/projects/brightkidco/wireframes/pp-extended-ed/pped-22-e1-gf.md                         │
│ WF-091  │ /root/projects/brightkidco/wireframes/pp-extended-ed/pped-22-e2-l1.md                         │
│ WF-092  │ /root/projects/brightkidco/wireframes/pp-extended-ed/pped-22-e2-l2.md                         │
│ WF-093  │ /root/projects/brightkidco/wireframes/pp-extended-ed/pped-22-e2-l3.md                         │
│ WF-094  │ /root/projects/brightkidco/wireframes/pp-extended-ed/pped-22-e2-gf.md                         │
│ WF-095  │ /root/projects/brightkidco/wireframes/pp-extended-ed/pped-22-e3-l1.md                         │
│ WF-096  │ /root/projects/brightkidco/wireframes/pp-extended-ed/pped-22-e3-l2.md                         │
│ WF-097  │ /root/projects/brightkidco/wireframes/pp-extended-ed/pped-22-e3-l3.md                         │
│ WF-098  │ /root/projects/brightkidco/wireframes/pp-extended-ed/pped-22-e3-gf.md                         │
└─────────┴──────────────────────────────────────────────────────────────────────────────────────────────┘
```

**Dependency:** Copy Wave 9 complete. Also depends on Wave 8 wireframes being complete for PP-Extended Ed continuity.

---

### Wave 10 — PP-Extended Ed E4-E5 (Level-Specific) + At-Risk + Sunset (Cross-Level) — 14 files

```
┌─────────┬──────────────────────────────────────────────────────────────────────────────────────────────┐
│ Task ID │ Output File                                                                                   │
├─────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ WF-099  │ /root/projects/brightkidco/wireframes/pp-extended-ed/pped-22-e4-l1.md                         │
│ WF-100  │ /root/projects/brightkidco/wireframes/pp-extended-ed/pped-22-e4-l2.md                         │
│ WF-101  │ /root/projects/brightkidco/wireframes/pp-extended-ed/pped-22-e4-l3.md                         │
│ WF-102  │ /root/projects/brightkidco/wireframes/pp-extended-ed/pped-22-e4-gf.md                         │
│ WF-103  │ /root/projects/brightkidco/wireframes/pp-extended-ed/pped-22-e5-l1.md                         │
│ WF-104  │ /root/projects/brightkidco/wireframes/pp-extended-ed/pped-22-e5-l2.md                         │
│ WF-105  │ /root/projects/brightkidco/wireframes/pp-extended-ed/pped-22-e5-l3.md                         │
│ WF-106  │ /root/projects/brightkidco/wireframes/pp-extended-ed/pped-22-e5-gf.md                         │
│ WF-107  │ /root/projects/brightkidco/wireframes/pp-at-risk/atrisk-23-e1.md                              │
│ WF-108  │ /root/projects/brightkidco/wireframes/pp-at-risk/atrisk-23-e2.md                              │
│ WF-109  │ /root/projects/brightkidco/wireframes/pp-at-risk/atrisk-23-e3.md                              │
│ WF-110  │ /root/projects/brightkidco/wireframes/pp-at-risk/atrisk-23-e4.md                              │
│ WF-111  │ /root/projects/brightkidco/wireframes/sunset/sunset-25-e1.md                                  │
│ WF-112  │ /root/projects/brightkidco/wireframes/sunset/sunset-25-e2.md                                  │
└─────────┴──────────────────────────────────────────────────────────────────────────────────────────────┘
```

**Dependency:** Copy Wave 10 complete. PP-Extended Ed E4-E5 depend on E3 being wireframed first.

---

### Wave 11 — Winback Path B (Level-Specific) — 12 files

```
┌─────────┬──────────────────────────────────────────────────────────────────────────────────────────────┐
│ Task ID │ Output File                                                                                   │
├─────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ WF-113  │ /root/projects/brightkidco/wireframes/winback-b/winback-b-24-e1-l1.md                         │
│ WF-114  │ /root/projects/brightkidco/wireframes/winback-b/winback-b-24-e1-l2.md                         │
│ WF-115  │ /root/projects/brightkidco/wireframes/winback-b/winback-b-24-e1-l3.md                         │
│ WF-116  │ /root/projects/brightkidco/wireframes/winback-b/winback-b-24-e1-gf.md                         │
│ WF-117  │ /root/projects/brightkidco/wireframes/winback-b/winback-b-24-e2-l1.md                         │
│ WF-118  │ /root/projects/brightkidco/wireframes/winback-b/winback-b-24-e2-l2.md                         │
│ WF-119  │ /root/projects/brightkidco/wireframes/winback-b/winback-b-24-e2-l3.md                         │
│ WF-120  │ /root/projects/brightkidco/wireframes/winback-b/winback-b-24-e2-gf.md                         │
│ WF-121  │ /root/projects/brightkidco/wireframes/winback-b/winback-b-24-e3-l1.md                         │
│ WF-122  │ /root/projects/brightkidco/wireframes/winback-b/winback-b-24-e3-l2.md                         │
│ WF-123  │ /root/projects/brightkidco/wireframes/winback-b/winback-b-24-e3-l3.md                         │
│ WF-124  │ /root/projects/brightkidco/wireframes/winback-b/winback-b-24-e3-gf.md                         │
└─────────┴──────────────────────────────────────────────────────────────────────────────────────────────┘
```

**Dependency:** Copy Wave 11 complete.

---

## Execution Flow

```
                        COPY PHASE                     |                   WIREFRAME PHASE
                                                        |
  Copy Wave 1-2 (Welcome E1-E8)    ✅                   |  WF Wave 1-2 (Welcome E1-E8)
  Copy Wave 3 (Cart/Checkout/Browse) ✅                  |  WF Wave 3 (Cart/Checkout/Browse)
  Copy Wave 4 (Transactional)      ✅                   |  WF Wave 4 (Transactional)
  Copy Wave 5 (PP Ed + Upsell)     ✅                   |  WF Wave 5 (PP Ed + Upsell)
  Copy Wave 6 (Mid-Check/Replenish) ✅                   |  WF Wave 6 (Mid-Check/Replenish)
  Copy Wave 7 (Winback A/Site/FAQ) ✅                   |  WF Wave 7 (Winback A/Site/FAQ)
  Copy Wave 8 (FAQ E2-E6)          🔄 RUNNING           |  WF Wave 8 (FAQ E2-E6)     ← WAITING
  Copy Wave 9 (PP-Ext Ed E1-E3)    🔄 RUNNING           |  WF Wave 9 (PP-Ext Ed E1-E3) ← WAITING
  Copy Wave 10 (PP-Ext Ed E4-E5/At-Risk/Sunset) ⏳      |  WF Wave 10                  ← WAITING
  Copy Wave 11 (Winback B)         ⏳                   |  WF Wave 11 (Winback B)     ← WAITING
```

**Execution flow for each wave:**

1. Copy wave completes (all copy files validated on disk)
2. Wireframe wave is triggered — Ralph dispatches 15 agents in parallel (ops + ops2-ops15)
3. Each agent reads its copy output file + demands + consolidated design skills
4. Each agent writes 1 wireframe file with all 8 sections
5. Ralph validates: file exists, 8 sections present, copy is verbatim, every hex inline
6. Validated wireframes pass; failed tasks are retried once, then flagged
7. Wave complete → mark in STATUS.md → next wireframe wave starts
8. After ALL wireframe waves complete → next phase (HTML production)

**Total wireframe waves: 11**
**Total tasks: ~124**
**Agents per wave: 15 (ops + ops2-ops15)**
**Rounds per wave: ~8-9 (124/15 = 8.3)**

---

## Validation Criteria (Applied by Ralph Per Task)

- [ ] Output file exists at the exact path
- [ ] File size minimum 8KB (15KB for level-specific with 4 levels variant detail)
- [ ] All 8 mandatory sections present: Metadata, Strategy Box, Creative Box, Layout ASCII, Contraption Specs, Copy Blocks, Image Briefs, Render Notes
- [ ] Section headings match exactly: `METADATA`, `Strategy Box`, `Creative Box`, `Contraption Specs`, `Copy Blocks`, `Image Briefs`, `Render Notes`
- [ ] Section 4 (Layout ASCII) contains actual ASCII box art with `┌─┐│└┘├┤╔╗╚╝║═` characters — not a text description of the layout
- [ ] Every hex value is written inline on ASCII elements (e.g., `bg: #FFFBF0`, `border: 2px #1F2D2F`)
- [ ] Every gradient band has from→to hex values (e.g., `#FFFBF0 → #FFF6E2`)
- [ ] Every combined border-radius, padding, box-shadow property is specified
- [ ] Section 5 lists every technique used, sourced from the consolidated file by descriptive name
- [ ] Section 6 copy blocks match the copy output file's Part 1 content — random sampling of 3 copy blocks must match verbatim
- [ ] Section 7 covers every image shown in the layout with ratio + mood + alt
- [ ] Section 8 includes dark mode colors, Outlook considerations, Gmail clip limit note, responsive behavior
- [ ] For level-specific (Type A): the wireframe's visual direction matches the copy output's level calibration
- [ ] For cross-level (Type B): R1-R6 calibration block is present in Creative Box
- [ ] File naming convention matches: `<flow>-<id>-e<email#>[-l<level>].md`

**Failure criteria (file is rejected if any of these are true):**
- Copy is not verbatim from the copy output (any deviation causes rejection)
- Layout ASCII is missing or is a text description instead of box art
- Any hex color is missing a value (e.g., `bg: accent` instead of `bg: #2BAEB4`)
- Section 1 (Metadata) missing the contraptions list
- Any section is entirely missing (not just empty — absent)

---

## Output Directory Structure

```
/root/projects/brightkidco/wireframes/
├── welcome/
│   ├── welcome-01-e1-l1.md
│   ├── welcome-01-e1-l2.md
│   ├── welcome-01-e1-l3.md
│   ├── welcome-01-e1-gf.md
│   ├── welcome-01-e2-l1.md
│   ├── ... (32 total)
├── cart/
│   ├── cart-02-e1.md
│   ├── cart-02-e2.md
│   ├── cart-02-e3.md
├── checkout/
│   ├── checkout-03-e1.md
│   ├── checkout-03-e2.md
├── browse/
│   ├── browse-04-e1.md
│   ├── browse-04-e2.md
│   ├── browse-04-e3.md
├── transactional/
│   ├── order-05-e1.md
│   ├── shipping-06.md
│   ├── ofd-07-e1.md
│   ├── arrived-08.md
├── pp-direct-upsell/
│   ├── upsell-09-e1.md
│   ├── upsell-09-e2.md
├── pp-level-detection/
│   ├── detection-10.md
├── pp-education/
│   ├── pped-11-d0.md
│   ├── pped-11-d7.md
│   ├── pped-11-d14.md
│   ├── pped-11-d21.md
├── pp-extended-upsell/
│   ├── ppupsell-12-e1.md
│   ├── ppupsell-12-e2.md
│   ├── ppupsell-12-e3.md
├── pp-mid-checkin/
│   ├── mid-13-d30.md
│   ├── mid-13-d45.md
│   ├── mid-13-d60.md
├── pp-mary-story/
│   ├── mary-14-e1.md
├── replenish-a/
│   ├── repa-15-e1.md
│   ├── repa-15-e2.md
│   ├── repa-15-e3.md
├── replenish-b/
│   ├── repb-16-e1.md
│   ├── repb-16-e2.md
├── replenish-c/
│   ├── repc-17-e1.md
│   ├── repc-17-e2.md
├── review-request/
│   ├── review-18-e1.md
│   ├── review-18-e2.md
├── winback-a/
│   ├── winback-a-19-e1-l1.md
│   ├── ... (12 total)
├── site-abandonment/
│   ├── site-20-e1.md
├── faq-library/
│   ├── faq-21-e1.md
│   ├── faq-21-e2.md
│   ├── faq-21-e3.md
│   ├── faq-21-e4.md
│   ├── faq-21-e5.md
│   ├── faq-21-e6.md
├── pp-extended-ed/
│   ├── pped-22-e1-l1.md
│   ├── ... (20 total)
├── pp-at-risk/
│   ├── atrisk-23-e1.md
│   ├── atrisk-23-e2.md
│   ├── atrisk-23-e3.md
│   ├── atrisk-23-e4.md
├── winback-b/
│   ├── winback-b-24-e1-l1.md
│   ├── ... (12 total)
├── sunset/
│   ├── sunset-25-e1.md
│   ├── sunset-25-e2.md
```

**Total: ~124 files across 19 subdirectories (matching the copy output structure)**
