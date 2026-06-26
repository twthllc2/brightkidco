# BKC EMAIL PIPELINE — COMPLETE STATUS REPORT
# 2026-06-26

═══════════════════════════════════════════════════════════════
THE GOAL
═══════════════════════════════════════════════════════════════
125 unique Klaviyo-compatible HTML emails from approved copy.
Each different layout. All on brand. 4-6 images per email.
3-6 components per email. No component fatigue.
═══════════════════════════════════════════════════════════════

THE PIPELINE (4 STEPS + 1 ZERO STEP)
═══════════════════════════════════════════════════════════════

  STEP 0: STUDY ACTUAL EMAILS
  ┌─────────────────────────────────────────────────────────┐
  │ WHAT: Opened Giuliano's actual JSX source files        │
  │       (primitives.jsx, email-1.jsx, emails-2-3.jsx...) │
  │                                                        │
  │ FOUND:                                                 │
  │   - 27 primitives (EmailShell, Header, FramedImage,    │
  │     Band, TitleBlock, Letter, Signoff, Footer, etc.)   │
  │   - Section background colors:                         │
  │     #FFFBF0 warm white, #FFF6E2 cream, #EAF6F2 mint,   │
  │     #F0EDF8 lavender, #F5F1EA beige, #1F2D2F dark CTA  │
  │   - VARIETY comes from COLOR SEQUENCES, not components  │
  │   - Gradient bands connect sections                    │
  │   - Each section has UNIQUE background color           │
  │                                                        │
  │ STATUS: ✅ DONE                                         │
  │ EVIDENCE: docs in plans/macro-plan.md                   │
  └─────────────────────────────────────────────────────────┘
                        │
                        ▼
  STEP 1: MAP COMPONENTS
  ┌─────────────────────────────────────────────────────────┐
  │ WHAT: Read all 949 components from the index file      │
  │       and mapped each one to a SECTION TYPE             │
  │                                                        │
  │ 16 SECTION TYPES (from real emails):                    │
  │   hero, letter, definition, reframe, comparison,       │
  │   expert, product, feel, testimonial, objections,      │
  │   guarantee, cta, story, steps, code, stat              │
  │                                                        │
  │ 949 COMPONENTS MAPPED:                                  │
  │   hero: 42, letter: 461, definition: 19, reframe: 16,  │
  │   comparison: 44, expert: 14, product: 102, feel: 6,   │
  │   testimonial: 42, objections: 8, guarantee: 54,       │
  │   cta: 54, story: 41, steps: 14, code: 13, stat: 19    │
  │                                                        │
  │ STATUS: ✅ DONE                                         │
  │ OUTPUT: outputs/email-assets/section-components.json   │
  └─────────────────────────────────────────────────────────┘
                        │
                        ▼
  STEP 2: GENERATE LAYOUTS
  ┌─────────────────────────────────────────────────────────┐
  │ WHAT: Read each copy .md file and create a LAYOUT      │
  │       BLUEPRINT: list of section types + colors         │
  │                                                        │
  │ HOW:                                                   │
  │   1. Parse copy file → extract section headers         │
  │   2. Classify each section → hero, definition, etc.     │
  │   3. Assign background color → avoid adjacent repeats  │
  │   4. CTA always dark (#1F2D2F) at the end              │
  │   5. If too few sections → add defaults                │
  │   6. If too many → cap at 8                            │
  │                                                        │
  │ RESULTS:                                                │
  │   125 layout blueprints                                 │
  │   99 UNIQUE patterns out of 125 (79%)                   │
  │   Most common: 12x (10%): hero→reframe→definition→     │
  │                testimonial→product→guarantee→cta        │
  │   5-8 sections per email                                │
  │   0 adjacent same colors                                │
  │                                                        │
  │ EXAMPLE LAYOUT (Welcome E1 L1):                         │
  │   section 0: hero       #FFFBF0                        │
  │   section 1: guarantee  #EAF6F2                        │
  │   section 2: story      #FFF6E2                        │
  │   section 3: definition #EAF6F2                        │
  │   section 4: cta        #1F2D2F                        │
  │                                                        │
  │ STATUS: ✅ DONE                                         │
  │ OUTPUT: outputs/layouts/<flow>/<email>.json            │
  └─────────────────────────────────────────────────────────┘
                        │
                        ▼
  STEP 3: FILL WITH PICKS
  ┌─────────────────────────────────────────────────────────┐
  │ WHAT: For each section in each layout, pick a SPECIFIC │
  │       component from the catalog + an image             │
  │                                                        │
  │ HOW: Subagents. Each subagent handles 1 email.         │
  │   - Reads layout + section-components.json             │
  │   - For each section: picks component + image          │
  │   - Prefers Giuliano-derived (G+), then quality (A*)   │
  │   - Saves picks JSON                                   │
  │                                                        │
  │ VARIANCE TRACKER:                                       │
  │   Built after first run because components were        │
  │   overused: 5.1 used 100x (80%), HERO-20 used 34x      │
  │   Fix: enforce MAX 10x reuse per component             │
  │   Result: 227 fixes, all ≤10x, 117 unique components   │
  │                                                        │
  │ RESULTS:                                                │
  │   125 picks files                                       │
  │   123 valid (image counts 4-6)                          │
  │   2 need 1 extra image each                             │
  │   0 overused components                                 │
  │                                                        │
  │ EXAMPLE PICKS (Welcome E1 L1):                          │
  │   section 0: HERO-20 (G+) + toddler-potty-ladder-yellow │
  │   section 1: STORY-14 (A*) + toddler-napping-watermelon │
  │   section 2: EDU-1 (A*) + no image                     │
  │   section 3: 6.1 (G) + training-pant-watermelon-pink   │
  │   section 4: 5.1 (G+) + no image                       │
  │                                                        │
  │ STATUS: ✅ DONE                                         │
  │ OUTPUT: outputs/picks/<email>.json                     │
  └─────────────────────────────────────────────────────────┘
                        │
                        ▼
  STEP 4: ASSEMBLE HTML (v3 — CURRENT/IN PROGRESS)
  ┌─────────────────────────────────────────────────────────┐
  │ WHAT: Take layout + picks + copy → Klaviyo HTML        │
  │                                                        │
  │ TEMPLATES (one per section type, different HTML):       │
  │                                                        │
  │   t_hero():                                            │
  │   ┌──────────────────────────────────────┐             │
  │   │  [IMAGE if present]                  │             │
  │   │  [HEADLINE] (Fraunces, 30px, bold)   │             │
  │   │  [BODY COPY] (Questrial, 16px)       │             │
  │   └──────────────────────────────────────┘             │
  │                                                        │
  │   t_testimonial():                                     │
  │   ┌──────────────────────────────────────┐             │
  │   │  ┌──────────────────────────────┐    │             │
  │   │  │  "QUOTE TEXT"                │    │             │
  │   │  │  — Attribution               │    │             │
  │   │  └──────────────────────────────┘    │             │
  │   │  (card with border + shadow)         │             │
  │   └──────────────────────────────────────┘             │
  │                                                        │
  │   t_product():                                         │
  │   ┌──────────────────────────────────────┐             │
  │   │  [PRODUCT IMAGE] (centered)          │             │
  │   │  Body-Signal Learning Layer™          │             │
  │   │  €34 starter pair                     │             │
  │   │  [Feature text]                       │             │
  │   └──────────────────────────────────────┘             │
  │                                                        │
  │   t_definition():                                      │
  │   ┌──────────────────────────────────────┐             │
  │   │  THE SCIENCE (eyebrow label)          │             │
  │   │  [TITLE] (Fraunces, 22px)            │             │
  │   │  [BODY] (Questrial, 15px)            │             │
  │   └──────────────────────────────────────┘             │
  │                                                        │
  │   t_guarantee():                                       │
  │   ┌──────────────────────────────────────┐             │
  │   │      ┌──────────┐                    │             │
  │   │      │    60    │                    │             │
  │   │      │  days    │  (circular seal)   │             │
  │   │      └──────────┘                    │             │
  │   │  Full refund if it doesn't work...   │             │
  │   └──────────────────────────────────────┘             │
  │                                                        │
  │   t_cta():                                             │
  │   ┌──────────────────────────────────────┐             │
  │   │  ┌──────────────────────────┐        │             │
  │   │  │  Shop the pants →        │        │             │
  │   │  └──────────────────────────┘        │             │
  │   │  (dark bg, lime button, pill shape)  │             │
  │   └──────────────────────────────────────┘             │
  │                                                        │
  │ EMAIL SHELL:                                            │
  │ ┌─────────────────────────────────────────────────────┐│
  │ │ BODY (cream #FBF7F1 background)                     ││
  │ │  ┌──────────────────────────────────────────┐       ││
  │ │  │ TABLE (600px, white background)          │       ││
  │ │  │  HEADER (logo centered)                  │       ││
  │ │  │  ── gradient band ──                     │       ││
  │ │  │  SECTION 1 (hero, #FFFBF0)               │       ││
  │ │  │  ── gradient band ──                     │       ││
  │ │  │  SECTION 2 (letter, #FFF6E2)             │       ││
  │ │  │  ── gradient band ──                     │       ││
  │ │  │  SECTION 3 (definition, #EAF6F2)          │       ││
  │ │  │  ...                                     │       ││
  │ │  │  ── gradient band ──                     │       ││
  │ │  │  CTA (dark #1F2D2F)                      │       ││
  │ │  │  SIGNOFF (Lena Bauer)                    │       ││
  │ │  │  FOOTER (cream, tagline, unsubscribe)    │       ││
  │ │  └──────────────────────────────────────────┘       ││
  │ └─────────────────────────────────────────────────────┘│
  │                                                        │
  │ STATUS: 🔄 IN PROGRESS — subagent batching all 125     │
  │ OUTPUT: outputs/html/<email>.html                      │
  │                                                        │
  │ WHAT WAS FIXED FROM v1/v2:                             │
  │   v1: Used showcase HTML raw → garbage                 │
  │   v2: Colored boxes with text → all looked same        │
  │   v3: Proper templates per type → different layouts    │
  │        Real copy injection → actual email text         │
  │        Correct image paths → images load               │
  └─────────────────────────────────────────────────────────┘

═══════════════════════════════════════════════════════════════
WHAT IS CURRENTLY RUNNING
═══════════════════════════════════════════════════════════════

  1 subagent assembling all 125 emails using v3 assembler.
  Each email uses proper HTML templates per section type.

  Script: /root/projects/brightkidco/scripts/assemble-email.py
  Input:  outputs/layouts/*.json + outputs/picks/*.json
  Output: outputs/html/*.html (125 files)

═══════════════════════════════════════════════════════════════
PROBLEMS IDENTIFIED AND FIXED
═══════════════════════════════════════════════════════════════

  PROBLEM 1: Components not used
    Root: Assembler used generic section(color,text,img)
    Fix: Built proper HTML templates per section type

  PROBLEM 2: Copy text was section names
    Root: Copy extraction returned section names, not content
    Fix: Parse .md files by ### headers, map to section types

  PROBLEM 3: Same layout over and over
    Root: All sections used the same colored box
    Fix: Different templates → different visual output

  PROBLEM 4: Images not loading
    Root: Wrong paths, subdirectories not handled
    Fix: Strip subdirectory prefixes, use flat image/ path

  PROBLEM 5: Component overuse (5.1 = 100x)
    Root: Subagents all defaulted to same G+ components
    Fix: Variance tracker caps reuse at 10x

  PROBLEM 6: CTA text was random copy paragraph
    Root: Copy extraction didn't match section types
    Fix: Map copy sections to section types by ### header

═══════════════════════════════════════════════════════════════
FILES CREATED
═══════════════════════════════════════════════════════════════

  scripts/
    ├── categorize-components.py    (Phase 1 — 949 tagged)
    ├── parse-email.py              (Phase 2 — copy parser)
    ├── generate-layouts.py         (Phase 2 — 125 blueprints)
    ├── map-section-components.py   (Phase 1 — 949 to types)
    ├── decide-components.py        (Phase 3 — picks)
    ├── track-variance.py           (Phase 3 — reuse tracker)
    └── assemble-email.py           (Phase 4 — HTML output)

  outputs/
    ├── email-assets/
    │   ├── component-catalog.json  (949 tagged components)
    │   └── section-components.json (components by section type)
    ├── parsed-emails/              (125 parsed JSONs)
    ├── layouts/                    (125 layout blueprints)
    ├── picks/                      (125 component picks)
    └── html/                       (125 HTML emails)

  plans/
    ├── email-assembly-pipeline.md  (original plan)
    ├── macro-plan.md               (expanded macro plan)
    ├── phase-4-assembler-plan.md   (assembler specifics)
    └── phase-1-2-summary-phase-3-plan.md

═══════════════════════════════════════════════════════════════
