# BrightKidCo — Email Marketing Pipeline

```
═══════════════════════════════════════════════════════════════
BKC EMAIL PIPELINE
═══════════════════════════════════════════════════════════════

125 copy files → 125 unique Klaviyo HTML emails
Each: different layout, 4-6 images, 3-6 components, all on-brand

PIPELINE:
  Step 0: Study actual emails        ✅ DONE
  Step 1: Map 949 components          ✅ DONE (→ 16 section types)
  Step 2: Generate 125 layouts        ✅ REBUILT (45 templates, 7 purposes)
  Step 3: Fill with picks             ✅ DONE (55 unique components)
  Step 4: Assemble HTML               🔄 IN PROGRESS (v4 subagents)

OUTPUT: 125 HTML files → outputs/html/
═══════════════════════════════════════════════════════════════
```

## What We Have

| Asset | Location | Count |
|-------|----------|-------|
| Copy files | outputs/copy/ | 125 .md |
| Components | outputs/email-assets/ | 949 tagged |
| Product images | outputs/email-assets/product-photos/ | 31 |
| Layout blueprints | outputs/layouts/ | 125 JSON |
| Component picks | outputs/picks/ | 125 JSON |
| HTML emails | outputs/html/ | 125 HTML (building) |

## Brand

```
Colors:  teal #2BAEB4  green #5DD07A  ink #1F2D2F  cream #FBF7F1
Fonts:   Questrial (main)  Fraunces (display)  Caveat (hand)
Gradient: linear-gradient(135deg, #2BAEB4, #5DD07A)
Width:   600px desktop, 420px mobile
```

## Section Colors

```
warm white  #FFFBF0 — hero, creed, path, comparison
cream       #FFF6E2 — letter, reframe, quote, story
mint        #EAF6F2 — definition, feel, guarantee
lavender    #F0EDF8 — product, expert
dark        #1F2D2F — CTA (always)
```

## Pipeline Details

### Step 0: Study Actual Emails ✅
Extracted patterns from Giuliano's JSX source. 27 primitives (EmailShell,
Header, FramedImage, Band, TitleBlock, Letter, Signoff, Footer, etc.).
Section background colors. Gradient band transitions.

### Step 1: Map Components ✅
949 components tagged with: id, position, image_support, messaging, audience,
temperature, giuliano_source. Mapped to 16 section types.

### Step 2: Generate Layouts (Rebuilt) ✅
Replaced linear 5-section pattern with 45 structural templates across
7 purposes (awareness, education, consideration, conversion, retention,
reengagement, transactional). Each email gets 2-5 sections, 4-6 images,
and a unique column layout (single, 2-col, grid, hybrid, image-heavy).

### Step 3: Fill with Picks ✅
Components assigned per section type. 55 unique components used.
Variance tracker caps reuse at 10x. All 125 have 4-6 images.

### Step 4: Assembly (In Progress) 🔄
v4 subagents build HTML. Each subagent reads layout + picks + component HTML
+ copy file. Builds proper templates per section type with brand colors,
gradient bands, and real copy injection.

## Links

- GitHub: https://github.com/twthllc2/brightkidco
- Client: BrightKidCo (Giuliano)
- Agency: TENZA GROUP LLC
- Full status: plans/status-report.md
