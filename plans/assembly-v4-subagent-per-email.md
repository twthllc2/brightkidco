# ASSEMBLY APPROACH v4 — SUBAGENT PER EMAIL

## THE PROBLEM WITH SCRIPTING

```
Python script assemble-email.py:
  layout.json → picks.json → copy.md
                    ↓
              t_hero() → same hero HTML regardless of pick
              t_testimonial() → same testimonial HTML regardless of pick
              t_product() → same product HTML regardless of pick
                    ↓
              125 nearly identical emails

The script is BLIND. It applies the same function to every
section type. It doesn't know HERO-5 from HERO-20. It doesn't
know STORY-14 from SP-08. Every section gets the same template.
```

## THE FIX — ONE SUBAGENT PER EMAIL

```
Instead of a script that blindly applies templates,
EACH EMAIL gets its own subagent that:

  1. Reads the layout blueprint
  2. Reads the component picks
  3. Reads the actual component HTML from showcase-artifacts-final.html
  4. READS THE COPY TEXT from the .md file
  5. MAKES DESIGN DECISIONS:
     - "HERO-5 is a Mirror Moment. It's a text-first hero with emotional copy.
        I should use a large headline with body text, no image necessary."
     - "STORY-14 is a Micro-Story card. It has a compact quote layout with
        attribution. I should use that pattern for this section."
     - "6.1 is ProductShowcaseFull. It has a hero product image with price,
        feature pills, and a sub-grid. I should build that."
  6. BUILDS the HTML using the REAL component patterns as reference
  7. INJECTS the actual copy text in the right place
  8. ADDS the gradient band transitions between sections
  9. APPLIES brand tokens (colors, fonts, spacing)
  10. VALIDATES: 4-6 images, proper structure, no broken HTML
```

## WHAT EACH SUBAGENT RECEIVES

```
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
│  ├── story copy:    "Sarah's son wore pull-ups for 4 years" │
│  ├── definition:    "This gap has a name: interoception..."  │
│  ├── product copy:  "Body-Signal Learning Layer..."         │
│  └── cta copy:      "Let's explore what's happening..."     │
│                                                              │
│  COMPONENT HTML (from showcase-artifacts-final.html):        │
│  ├── HERO-5:  <div class="card"><div class="card-header">   │
│  │            ✦ HERO-5 — Mirror Moment                      │
│  │            <div class="card-body">                        │
│  │              <h1 style="...">You just picked...</h1>      │
│  │              <p style="...">The teacher's face...</p>     │
│  │              <a href="#">Make it different →</a>          │
│  │            </div></div>                                   │
│  ├── STORY-14: <div class="card">... (Micro-Story HTML)     │
│  ├── EDU-1:    <div class="card">... (Definition HTML)      │
│  ├── 6.1:      <div class="card">... (ProductShowcase HTML) │
│  └── CTADEEP-10: <div class="card">... (Community CTA HTML) │
│                                                              │
│  BRAND TOKENS:                                               │
│  ├── colors: teal=#2BAEB4, ink=#1F2D2F, cream=#FBF7F1...   │
│  ├── fonts: Questrial (main), Fraunces (display)            │
│  ├── gradient: linear-gradient(135deg, #2BAEB4, #5DD07A)    │
│  └── width: 600px, table-based layout                       │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

## WHAT THE SUBAGENT MUST BUILD

```
┌─────────────────────────────────────────────────────────────┐
│ EMAIL HTML STRUCTURE (what the subagent outputs)            │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  <!DOCTYPE html>                                             │
│  <html>                                                      │
│  <head>                                                      │
│    Google Fonts (Questrial + Fraunces + Caveat)             │
│    MSO conditionals for Outlook                              │
│  </head>                                                     │
│  <body style="background:#FBF7F1;">                          │
│                                                              │
│  <table width="600" style="background:#FFF;">                │
│                                                              │
│    ┌── HEADER ──────────────────────────────────┐           │
│    │  Logo centered, 34px height                │           │
│    │  Background: white                          │           │
│    └─────────────────────────────────────────────┘           │
│                                                              │
│    ┌── GRADIENT BAND (white → #FFFBF0) ───────┐            │
│    │  40px height, smooth color transition     │            │
│    └─────────────────────────────────────────────┘           │
│                                                              │
│    ┌── SECTION 0: HERO (Mirror Moment) ────────┐           │
│    │  Background: #FFFBF0 (warm white)          │           │
│    │                                            │            │
│    │  [IMAGE: toddler-potty-ladder-yellow.png]  │            │
│    │    if the Mirror Moment component          │            │
│    │    supports an image                       │            │
│    │                                            │            │
│    │  [HEADLINE]                                │            │
│    │    "He talks about the potty,              │            │
│    │     'I need to go,' he says..."            │            │
│    │    Fraunces, 28-34px, bold, ink color      │            │
│    │                                            │            │
│    │  [BODY]                                    │            │
│    │    The copy continues as supportive text   │            │
│    │    Questrial, 16px, soft color             │            │
│    └─────────────────────────────────────────────┘           │
│                                                              │
│    ┌── GRADIENT BAND (#FFFBF0 → #FFF6E2) ────┐            │
│    └─────────────────────────────────────────────┘           │
│                                                              │
│    ┌── SECTION 1: STORY (Micro-Story) ──────┐              │
│    │  Background: #FFF6E2 (cream)            │              │
│    │                                         │               │
│    │  The Micro-Story component pattern:     │              │
│    │  - Compact card with quote              │              │
│    │  - Attribution below                    │              │
│    │  - Image if relevant                    │              │
│    │                                         │               │
│    │  [IMAGE: toddler-napping-watermelon.png]│              │
│    │                                         │               │
│    │  ┌──────────────────────────────────┐   │              │
│    │  │ "The first time he paused        │   │              │
│    │  │  mid-play and looked down..."    │   │              │
│    │  │ — Sarah, mom of a 5-year-old     │   │              │
│    │  └──────────────────────────────────┘   │              │
│    └─────────────────────────────────────────────┘           │
│                                                              │
│    ┌── GRADIENT BAND (#FFF6E2 → #EAF6F2) ────┐            │
│    └─────────────────────────────────────────────┘           │
│                                                              │
│    ┌── SECTION 2: DEFINITION (Definition Block) ┐          │
│    │  Background: #EAF6F2 (mint)                │          │
│    │                                            │           │
│    │  Eyebrow: THE SCIENCE                      │           │
│    │  Title: "This gap has a name:              │           │
│    │          interoception..."                 │           │
│    │  Body: Research text (Questrial, 15px)     │           │
│    └─────────────────────────────────────────────┘           │
│                                                              │
│    ┌── GRADIENT BAND (#EAF6F2 → #F5F1EA) ────┐            │
│    └─────────────────────────────────────────────┘           │
│                                                              │
│    ┌── SECTION 3: PRODUCT (ProductShowcaseFull) ┐          │
│    │  Background: #F5F1EA (beige)               │          │
│    │                                            │           │
│    │  ProductShowcaseFull pattern:              │           │
│    │  - Hero product image (centered)           │           │
│    │  - Product name + price                    │           │
│    │  - Feature pills / badges                  │           │
│    │  - CTA button                              │           │
│    │  - Sub-grid (colorways, sizes)             │           │
│    │                                            │           │
│    │  [IMAGE: training-pant-watermelon-pink]    │           │
│    │                                            │           │
│    │  Body-Signal Learning Layer™               │           │
│    │  €34 — starter pair                        │           │
│    │                                            │           │
│    │  ◉ Body-Signal Layer™  ✓ 60-day guarantee  │           │
│    │  ♡ Sensory-friendly                        │           │
│    │                                            │           │
│    │  [ Shop the pants → ]                      │           │
│    └─────────────────────────────────────────────┘           │
│                                                              │
│    ┌── GRADIENT BAND (#F5F1EA → #1F2D2F) ────┐            │
│    └─────────────────────────────────────────────┘           │
│                                                              │
│    ┌── SECTION 4: CTA (Community CTA) ────────┐            │
│    │  Background: #1F2D2F (dark, ALWAYS)       │            │
│    │                                           │             │
│    │  Community CTA pattern:                   │             │
│    │  - Dark background                        │             │
│    │  - Lime button (#D8F57C)                  │             │
│    │  - Pill shape (border-radius: 999px)      │             │
│    │  - Fine print below                       │             │
│    │                                           │             │
│    │  [ Shop the pants → ]                     │             │
│    │  No rush. No pressure. 60-day guarantee.   │             │
│    └─────────────────────────────────────────────┘           │
│                                                              │
│    ┌── SIGNOFF ──────────────────────────────────┐          │
│    │  Background: dark (#1F2D2F)                 │          │
│    │                                             │           │
│    │  A note from                                │           │
│    │  Lena Bauer                                 │           │
│    │  Founder · BrightKidCo · Mom of two          │           │
│    │                                             │           │
│    │  P.S. If you ever want to reply...           │           │
│    └─────────────────────────────────────────────┘          │
│                                                              │
│    ┌── FOOTER ───────────────────────────────────┐          │
│    │  Background: cream (#FBF7F1)                │          │
│    │                                             │           │
│    │  "Calm progress, one day at a time."        │          │
│    │  Our Method · Shop the Pants · Parent Stories│          │
│    │  Unsubscribe · Address                      │           │
│    │  Gradient bar accent                         │           │
│    └─────────────────────────────────────────────┘          │
│                                                              │
│  </table>                                                    │
│  </body>                                                     │
│  </html>                                                     │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

## THE CRITICAL DIFFERENCE FROM SCRIPTING

```
SCRIPTING:
  section_type="hero" → t_hero() always
  section_type="testimonial" → t_testimonial() always
  Every hero looks the same. Every testimonial looks the same.

SUBAGENT:
  component_id="HERO-5" → subagent LOOKS at HERO-5 HTML
  → understands it's a Mirror Moment (emotional, text-first)
  → builds HTML matching that pattern
  → headline + body, image optional

  component_id="HERO-20" → subagent LOOKS at HERO-20 HTML
  → understands it's a Handwritten Letter Opener (warm, personal)
  → builds HTML matching that pattern
  → letter-style text with handwritten feel

  Same section type "hero" but DIFFERENT HTML output because
  the subagent understands the COMPONENT DESIGN, not just the
  section type label.
```

## EXECUTION

```
125 subagents, one per email.

Each subagent:
  1. Receives: email_id, layout, picks, copy, component HTML refs
  2. For each section: LOOKS at the component HTML → understands
     the design pattern → builds that pattern in Klaviyo HTML
  3. Connects sections with gradient bands
  4. Adds header, signoff, footer
  5. Saves to outputs/html/<email_id>.html

10 concurrent, 13 waves. ~2 min per subagent = ~26 min total.
```

## WHY THIS WORKS WHEN SCRIPTING FAILED

```
Script:  ONE function processes ALL heroes identically
Subagent: Each subagent INTERPRETS each component's unique design

Script:  Blind to component HTML — just matches section types
Subagent: Reads component HTML → understands visual intent

Script:  No design judgment — deterministic output
Subagent: Design judgment — varies output based on component
```
