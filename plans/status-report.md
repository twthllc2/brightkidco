# BKC EMAIL PIPELINE — MASTER STATUS REPORT
# 2026-06-27

================================================================
THE GOAL
================================================================
125 unique Klaviyo-compatible HTML emails from approved copy.
Each different layout. All on brand. 4-6 images per email.
3-6 components per email. No component fatigue.

================================================================
WHAT WE HAVE
================================================================

125 copy files (.md) — approved content
  Location: outputs/copy/<flow>/<email>.md
  Each: subject, preview, from name, body sections, signoff, footer

949 components (showcase-artifacts-final.html) — design patterns
  27 Giuliano primitives from JSX source
  922 additional quality-approved and agent-standard components

31 product images (product-photos/) — lifestyle, flat-lay, accessories

Brand tokens (from tokens.js):
  teal=#2BAEB4, green=#5DD07A, ink=#1F2D2F
  fonts: Questrial (main), Fraunces (display), Caveat (hand)

================================================================
THE PIPELINE
================================================================

STEP 0 — STUDY ACTUAL EMAILS ✅
────────────────────────────────────────────────────────────────
Opened Giuliano's actual JSX source files and extracted patterns:

  SECTION BACKGROUND COLORS:
    warm white  #FFFBF0 — hero, creed, path, comparison
    cream       #FFF6E2 — letter, reframe, quote, story
    mint        #EAF6F2 — definition, feel, guarantee
    lavender    #F0EDF8 — product, expert
    beige       #F5F1EA — product full
    code bg     #FAF7F0 — discount code blocks
    dark        #1F2D2F — CTA sections (ALWAYS dark)

  CORE PATTERN:
    EmailShell { Header + [FramedImage] + [TitleBlock] + Band
    + Section(color1) + Band + Section(color2) + Band + ...
    + CTA(dark) + Signoff + Footer }

  CRITICAL RULES:
    1. No two adjacent sections share same background color
    2. Gradient Bands (40px) connect sections
    3. CTA section ALWAYS dark (#1F2D2F)
    4. Images wrapped in FramedImage (black border + drop-shadow)
    5. Headlines use gradientText (teal → green)
    6. All CTAs are pill-shaped (border-radius: 999px)
    7. Width: 420px mobile, 600px desktop

  SECTION TYPE → COLOR MAPPING:
    hero              → warm white #FFFBF0 or lilac #EEE8F6
    letter/body       → cream #FFF6E2
    reframe/insight   → mint #EAF6F2
    definition        → mint #EAF6F2
    comparison        → warm white #FFFBF0
    expert/quote      → lavender #F0EDF8
    product           → lavender #F0EDF8 or beige #F5F1EA
    testimonial       → cream #FFF6E2
    objections/FAQ    → white #FFFFFF
    guarantee         → mint #EAF6F2
    CTA               → dark #1F2D2F (ALWAYS)
    story             → cream #FFF6E2

  OUTPUT: Brand token documentation in macro-plan.md and status-report.md


STEP 1 — MAP COMPONENTS ✅
────────────────────────────────────────────────────────────────
Mapped all 949 components to 16 section types based on name patterns.

  16 SECTION TYPES:
    hero(42), letter(461), definition(19), reframe(16),
    comparison(44), expert(14), product(102), feel(6),
    testimonial(42), objections(8), guarantee(54), cta(54),
    story(41), steps(14), code(13), stat(19)

  OUTPUT: outputs/email-assets/section-components.json


STEP 2 — GENERATE 125 LAYOUTS ✅
────────────────────────────────────────────────────────────────
For each copy file: parse sections → classify type → assign color.

  RULES:
    - No adjacent same colors (fallback colors if needed)
    - CTA always dark (#1F2D2F) at the end
    - If <5 sections: add defaults (testimonial, product, guarantee)
    - If >8 sections: cap and deduplicate
    - Color randomization for variety

  RESULTS:
    125 layout blueprints
    99 UNIQUE patterns out of 125 (79% variance)
    Most common: 12x hero→reframe→definition→testimonial→product→guarantee→cta
    All 5-8 sections per email
    0 adjacent same colors

  EXAMPLE (Welcome E1 L1):
    section 0: hero       #FFFBF0
    section 1: story      #FFF6E2
    section 2: definition #EAF6F2
    section 3: product    #F5F1EA
    section 4: cta        #1F2D2F

  OUTPUT: outputs/layouts/<flow>/<email>.json (125 files)


STEP 3 — FILL WITH PICKS ✅
────────────────────────────────────────────────────────────────
Subagents pick one component + one image per section.

  PROCESS:
    1 subagent per email reads layout + section-components.json
    For each section: picks component (prefer G+ > A* > A) + image
    Image rules: hero→lifestyle, product→flatlay, guarantee→accessories

  VARIANCE TRACKER (track-variance.py):
    First run: 5.1 used 100x (80%), HERO-20 used 34x (25%)
    Fix: cap component reuse at 10x (8% max)
    Result: 227 fixes, all components ≤10x, 117 unique components

  RESULTS:
    125 picks files
    123 valid (4-6 images each)
    2 need 1 extra image

  EXAMPLE (Welcome E1 L1):
    section 0: HERO-5  (Mirror Moment) + toddler-potty-ladder-yellow.png
    section 1: STORY-14 (Micro-Story)  + toddler-napping-watermelon.png
    section 2: EDU-1   (Definition)    + no image
    section 3: 6.1     (ProductShowcase Full, G) + training-pant-watermelon.jpg
    section 4: CTADEEP-10 (Community CTA) + no image

  OUTPUT: outputs/picks/<email>.json (125 files)


STEP 4 — ASSEMBLE HTML 🔄 CURRENT
────────────────────────────────────────────────────────────────
v1-v3 FAILED: Python scripts produce identical output. Blind to
component design. Every hero looks the same.

v4 APPROACH: One subagent per email. No script. Design decisions.

================================================================
STEP 4 v4 — SUBAGENT PER EMAIL
================================================================

THE PROBLEM WITH SCRIPTING
────────────────────────────────────────────────────────────────
Python script applies the SAME template function to every section
type. t_hero() always returns the same HTML. t_testimonial()
always returns the same HTML. Every hero looks identical.

The script is BLIND. It doesn't know HERO-5 from HERO-20.
It doesn't know STORY-14 from SP-08. Every section gets
the same template regardless of chosen component.

THE FIX — ONE SUBAGENT PER EMAIL
────────────────────────────────────────────────────────────────
Each email gets its own subagent that:

  1. Reads the layout blueprint
  2. Reads the component picks
  3. Reads the actual component HTML from showcase file
  4. Reads the copy text from the .md file
  5. MAKES DESIGN DECISIONS:
     - Looks at the component HTML to understand the visual pattern
     - Decides how to adapt it for Klaviyo (inline CSS, table layout)
     - Positions the image, headline, body text correctly
     - Applies brand tokens
  6. BUILDS the HTML from scratch using the component patterns
  7. VALIDATES: 4-6 images, proper structure, no broken HTML

┌─────────────────────────────────────────────────────────────┐
│ SUBAGENT INPUT                                               │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  EMAIL CONTEXT:                                              │
│  ├── email_id: "welcome-01-e1-l1"                           │
│  ├── flow: "welcome"                                         │
│  ├── position: "E1"                                          │
│  └── level: "L1" (Sarah)                                     │
│                                                              │
│  LAYOUT (from Step 2):                                       │
│  ├── section 0: hero       color=#FFFBF0                    │
│  ├── section 1: story      color=#FFF6E2                    │
│  ├── section 2: definition color=#EAF6F2                    │
│  ├── section 3: product    color=#F5F1EA                    │
│  └── section 4: cta        color=#1F2D2F (dark, always)     │
│                                                              │
│  COMPONENT PICKS (from Step 3):                              │
│  ├── section 0: HERO-5  (Mirror Moment)                     │
│  │              image: toddler-potty-ladder-yellow.png       │
│  ├── section 1: STORY-14 (Micro-Story)                      │
│  │              image: toddler-napping-watermelon.png        │
│  ├── section 2: EDU-1   (Definition Block)                  │
│  │              image: none                                  │
│  ├── section 3: 6.1     (ProductShowcaseFull, Giuliano)     │
│  │              image: training-pant-watermelon-pink.jpg     │
│  └── section 4: CTADEEP-10 (The Community CTA)              │
│                 image: none                                  │
│                                                              │
│  COPY TEXT (from copy .md file):                             │
│  ├── hero copy:     "He talks about the potty..."           │
│  ├── story copy:    "Sarah's son wore pull-ups..."          │
│  ├── definition:    "This gap has a name: interoception..."  │
│  ├── product copy:  "Body-Signal Learning Layer..."         │
│  └── cta copy:      "Let's explore what's happening..."     │
│                                                              │
│  COMPONENT HTML (from showcase-artifacts-final.html):        │
│  ├── HERO-5:  ✦ Mirror Moment                                │
│  │            Emotional, text-first hero with headline       │
│  ├── STORY-14: ✦ Micro-Story                                 │
│  │            Compact quote card with attribution            │
│  ├── EDU-1:   ✦ Definition Block                             │
│  │            Eyebrow + title + body text                   │
│  ├── 6.1:     ✦ ProductShowcaseFull                          │
│  │            Hero image + price + feature pills + grid     │
│  └── CTADEEP-10: ✦ Community CTA                             │
│                 Dark block with lime button                  │
│                                                              │
│  BRAND TOKENS:                                               │
│  ├── colors: teal=#2BAEB4, ink=#1F2D2F, cream=#FBF7F1...   │
│  ├── fonts: Questrial (main), Fraunces (display)            │
│  ├── gradient: linear-gradient(135deg, #2BAEB4, #5DD07A)    │
│  └── width: 600px, table-based layout, inline CSS           │
│                                                              │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ EMAIL STRUCTURE (what the subagent must build)               │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  <!DOCTYPE html>                                             │
│  <html>                                                      │
│  <head>Google Fonts + MSO conditionals</head>                │
│  <body style="background:#FBF7F1;">                          │
│                                                              │
│  <table width="600" style="background:#FFF;">                │
│                                                              │
│    HEADER — logo centered, 34px                              │
│                                                              │
│    BAND — 40px gradient white→#FFFBF0                       │
│                                                              │
│    SECTION 0 — HERO (Mirror Moment, #FFFBF0)                │
│    ○ LOOK at HERO-5 HTML → it's emotional, text-first       │
│    ○ Headline: "He talks about the potty..." (Fraunces 30px)│
│    ○ Body: supporting text (Questrial 16px)                 │
│    ○ Image: toddler-potty-ladder-yellow.png (lifestyle)     │
│                                                              │
│    BAND — #FFFBF0→#FFF6E2                                    │
│                                                              │
│    SECTION 1 — STORY (Micro-Story, #FFF6E2)                 │
│    ○ LOOK at STORY-14 HTML → compact quote card             │
│    ○ Quote card: "The first time he paused..."              │
│    ○ Attribution: "— Sarah, mom of a 5-year-old"            │
│    ○ Image: toddler-napping-watermelon.png                  │
│                                                              │
│    BAND — #FFF6E2→#EAF6F2                                    │
│                                                              │
│    SECTION 2 — DEFINITION (Definition Block, #EAF6F2)       │
│    ○ LOOK at EDU-1 HTML → eyebrow + title + body            │
│    ○ Eyebrow: "THE SCIENCE" (tealDeep, 10.5px, uppercase)   │
│    ○ Title: "This gap has a name: interoception..."         │
│    ○ Body: Research explanation (Questrial 15px)            │
│                                                              │
│    BAND — #EAF6F2→#F5F1EA                                    │
│                                                              │
│    SECTION 3 — PRODUCT (ProductShowcaseFull, #F5F1EA)       │
│    ○ LOOK at 6.1 HTML → hero image + info + feature pills   │
│    ○ Image: training-pant-watermelon-pink.jpg               │
│    ○ Name: Body-Signal Learning Layer™                      │
│    ○ Price: €34 — starter pair                              │
│    ○ Feature pills: ◉ Body-Signal ✓ 60-day ♡ Sensory       │
│    ○ CTA: [Shop the pants →]                                │
│                                                              │
│    BAND — #F5F1EA→#1F2D2F                                    │
│                                                              │
│    SECTION 4 — CTA (Community CTA, #1F2D2F dark ALWAYS)     │
│    ○ LOOK at CTADEEP-10 HTML → dark bg, lime button         │
│    ○ Button: "Talk to parents who get it →"                 │
│    ○ Fine print: "No rush. No pressure. 60-day guarantee."   │
│                                                              │
│    SIGNOFF — Lena Bauer                                      │
│    FOOTER — tagline, links, unsubscribe                      │
│                                                              │
│  </table>                                                    │
│  </body></html>                                              │
│                                                              │
└─────────────────────────────────────────────────────────────┘

THE CRITICAL DIFFERENCE FROM SCRIPTING
────────────────────────────────────────────────────────────────
SCRIPTING:
  section_type="hero" → t_hero() always
  HERO-5 and HERO-20 produce IDENTICAL HTML

SUBAGENT:
  component_id="HERO-5" → subagent LOOKS at HERO-5 HTML
  → understands it's a Mirror Moment (emotional, text-first)
  → builds HTML matching that pattern

  component_id="HERO-20" → subagent LOOKS at HERO-20 HTML
  → understands it's a Handwritten Letter Opener (warm, personal)
  → builds HTML matching that pattern

  Same section type "hero" but DIFFERENT HTML output
  because the subagent understands COMPONENT DESIGN

EXECUTION PLAN
────────────────────────────────────────────────────────────────
125 subagents, one per email.
10 concurrent, 13 waves.
~2 min per subagent = ~26 min total.

Each subagent:
  1. Receives: email_id, layout, picks, copy, component HTML refs
  2. For each section: LOOKS at component HTML → understands
     design pattern → builds that pattern in Klaviyo HTML
  3. Connects sections with gradient bands
  4. Adds header, signoff, footer
  5. Saves to outputs/html/<email_id>.html

================================================================
WHAT STAYS, WHAT GOES
================================================================

KEEP:
  outputs/layouts/          125 layout blueprints
  outputs/picks/            125 component picks
  outputs/email-assets/     component catalog + section mapping
  outputs/copy/             original copy files
  scripts/generate-layouts.py
  scripts/track-variance.py
  scripts/map-section-components.py
  plans/status-report.md    THIS FILE

DELETED:
  outputs/html/             broken HTML outputs (v1-v3)
  scripts/assemble-email.py blind script
  plans/phase-1-2-*.md      merged into this file
  plans/phase-4-*.md        merged into this file
  plans/email-assembly-*.md merged into this file
  plans/macro-plan.md       merged into this file
  plans/assembly-v4-*.md    merged into this file

================================================================
PROBLEMS AND FIXES
================================================================

1. Components not used in HTML
   Fix: v4 subagents look at actual component HTML, not just labels

2. Copy text was section names, not real copy
   Fix: Parse .md by ### headers, map to section types

3. Same layout over and over (scripting)
   Fix: Subagents make design decisions per component

4. Images not loading (wrong paths)
   Fix: Use correct relative paths with product-photos prefix

5. Component overuse (5.1 = 100x)
   Fix: Variance tracker caps reuse at 10x per component

6. CTA text was random copy paragraph
   Fix: Map copy to section types by header classification

7. No component design variety
   Fix: Subagents study actual component HTML → interpret design
