# BrightKidCo — Email Marketing Pipeline

```
═══════════════════════════════════════════════════════════════
BKC EMAIL PIPELINE
═══════════════════════════════════════════════════════════════

125 copy files → 125 unique Klaviyo HTML emails
Each: different layout, 4-6 images, 3-6 components, all on-brand

PIPELINE:
  Step 0: Study actual emails    ✅ DONE
  Step 1: Map 949 components     ✅ DONE
  Step 2: Generate 125 layouts   ✅ DONE (99 unique patterns)
  Step 3: Fill with picks        ✅ DONE (variance enforced)
  Step 4: Assemble HTML          🔄 IN PROGRESS (v4 subagents)

OUTPUT: 125 HTML files → outputs/html/
═══════════════════════════════════════════════════════════════
```

## Structure

```
brightkidco/
├── outputs/
│   ├── copy/             125 approved copy files (.md)
│   ├── email-assets/
│   │   ├── showcase-artifacts-final.html   949 components
│   │   ├── component-index-v2.md          component index
│   │   ├── section-components.json        mapped to section types
│   │   └── product-photos/                31 product images
│   ├── email-design-environment/           Giuliano's JSX source
│   ├── layouts/           125 layout blueprints
│   ├── picks/             125 component picks
│   └── html/              125 HTML emails (being built)
├── raw/                   Source materials (PDFs, zips)
├── demands/               Giuliano's requirements
├── scripts/
│   ├── generate-layouts.py      Step 2: layout blueprints
│   ├── map-section-components.py Step 1: component mapping
│   └── track-variance.py        Step 3: variance enforcement
├── plans/
│   └── status-report.md  Master plan and status
└── README.md
```

## Brand Tokens

```
colors:  teal #2BAEB4  green #5DD07A  ink #1F2D2F
         cream #FBF7F1  soft #4A6568  muted #8A9B9D
fonts:   Questrial (main)  Fraunces (display)  Caveat (hand)
gradient: linear-gradient(135deg, #2BAEB4, #5DD07A)
width:   600px desktop, 420px mobile
```

## Section Colors

```
warm white  #FFFBF0    hero, creed, path, comparison
cream       #FFF6E2    letter, reframe, quote, story
mint        #EAF6F2    definition, feel, guarantee
lavender    #F0EDF8    product, expert
beige       #F5F1EA    product full, images
dark        #1F2D2F    CTA sections (ALWAYS)
white       #FFFFFF    FAQ, objections, footer
```

## Pipeline Status

```
Step 0: STUDY         ✅ Extracted patterns from Giuliano's JSX
       - 27 primitives, 8 section colors, gradient bands
       - VARIETY = different color sequences per email

Step 1: MAP           ✅ 949 components → 16 section types
       - hero(42), testimonial(42), product(102), cta(54) etc.

Step 2: LAYOUTS       ✅ 125 blueprints with color sequences
       - 99 unique patterns, 5-8 sections each
       - 0 adjacent same colors, CTA always dark

Step 3: PICKS         ✅ 125 picks with variance tracked
       - Max 10x component reuse, 117 unique components
       - 123/125 have 4-6 images

Step 4: ASSEMBLY      🔄 Building via subagents (v4 approach)
       - One subagent per email — makes design decisions
       - Studies actual component HTML, not generic templates
       - Output: 125 Klaviyo-compatible HTML files
```

## Links

- GitHub: https://github.com/twthllc2/brightkidco
- Client: BrightKidCo (Giuliano)
- Agency: TENZA GROUP LLC
