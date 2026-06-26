# BKC Email Assembly Pipeline — Systematic Approach

> Created: 2026-06-26
> Status: PLAN — awaiting approval before execution
> Goal: Build 127 Klaviyo-compatible HTML emails from approved copy + 950+ components + 31 product images

---

## THE PROBLEM

We have:
- 127 approved copy files (.md)
- 950+ HTML components (showcase-artifacts-final.html)
- 31 product images (flat-lay, lifestyle, accessories)
- Giuliano's branding reference (JSX templates, tokens, design system)

We need:
- 127 unique, on-brand, Klaviyo-compatible HTML emails
- Each email: 4-6 images, 3-6 components, no duplicate components within email
- Visual variety across emails to prevent customer fatigue
- Brand consistency across all emails

---

## THE PIPELINE

```
┌─────────────────────────────────────────────────────────────────────┐
│                    BKC EMAIL ASSEMBLY PIPELINE                       │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  ┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐      │
│  │  COPY    │    │   JSX    │    │MESSAGING │    │ BRAND    │      │
│  │  (.md)   │    │ TEMPLATE │    │   TYPE   │    │ TOKENS   │      │
│  └────┬─────┘    └────┬─────┘    └────┬─────┘    └────┬─────┘      │
│       │               │               │               │              │
│       └───────────────┼───────────────┼───────────────┘              │
│                       │               │                              │
│                       ▼               ▼                              │
│              ┌─────────────────────────────┐                        │
│              │     3-SOURCE PARSER         │                        │
│              │  (reads copy + JSX + type)  │                        │
│              └─────────────┬───────────────┘                        │
│                            │                                        │
│                            ▼                                        │
│              ┌─────────────────────────────┐                        │
│              │    SECTION DECOMPOSER       │                        │
│              │  (breaks copy into sections)│                        │
│              └─────────────┬───────────────┘                        │
│                            │                                        │
│                            ▼                                        │
│              ┌─────────────────────────────┐                        │
│              │   COMPONENT SELECTOR        │                        │
│              │  (picks from 950+ library)  │◄──── 950+ LIBRARY     │
│              │  (tracks uniqueness)        │      (categorized)     │
│              │  (ensures 4-6 images)       │                        │
│              │  (ensures 3-6 components)   │                        │
│              └─────────────┬───────────────┘                        │
│                            │                                        │
│                            ▼                                        │
│              ┌─────────────────────────────┐                        │
│              │      ASSEMBLER              │                        │
│              │  (injects copy into comp)   │◄──── 31 IMAGES        │
│              │  (applies brand tokens)     │                        │
│              │  (outputs Klaviyo HTML)     │                        │
│              └─────────────┬───────────────┘                        │
│                            │                                        │
│                            ▼                                        │
│              ┌─────────────────────────────┐                        │
│              │       VALIDATOR             │                        │
│              │  (checks image count)       │                        │
│              │  (checks component count)   │                        │
│              │  (checks uniqueness)        │                        │
│              │  (checks brand consistency) │                        │
│              └─────────────┬───────────────┘                        │
│                            │                                        │
│                            ▼                                        │
│              ┌─────────────────────────────┐                        │
│              │    KLAVIYO HTML OUTPUT      │                        │
│              │  (600px, inline CSS,        │                        │
│              │   table layout, no JS)      │                        │
│              └─────────────────────────────┘                        │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

---

## PHASE 1: CATEGORIZE 950+ COMPONENTS

Turn the unstructured component list into a queryable database.

```
For EACH component in showcase-artifacts-final.html:

┌─────────────────────────────────────────────────────┐
│ COMPONENT SCHEMA                                     │
├─────────────────────────────────────────────────────┤
│ id:           "HERO-20"                             │
│ name:         "Handwritten Letter Opener"           │
│ position:     hero | body | cta | footer | signoff  │
│ image_support: text_only | image_text | image_only  │
│ messaging:    education | proof | conversion |       │
│               emotional | product | guarantee        │
│ audience:     [L1, L2, L3, GF]                      │
│ temperature:  warm | neutral | urgent                │
│ giuliano:     true | false                          │
│ source_line:  4270                                  │
│ description:  "Letter-style opener with warm tone"  │
│ html_block:   "<div style=...>" (the actual HTML)   │
└─────────────────────────────────────────────────────┘
```

**Categories to tag:**

| Tag | Values | Purpose |
|-----|--------|---------|
| position | hero, body-recognition, body-mechanism, body-proof, body-product, cta, signoff, footer | Where it goes in the email |
| image_support | text_only, image_text, image_only | Whether it needs an image |
| messaging | education, proof, conversion, emotional, product, guarantee | What type of message it carries |
| audience | L1, L2, L3, GF | Which avatar levels it works for |
| temperature | warm, neutral, urgent | Emotional intensity |
| giuliano | true, false | Whether it's from Giuliano's source |

---

## PHASE 2: 3-SOURCE PARSER

Reads 3 inputs simultaneously:

```
INPUT 1: COPY FILE (.md)
├── Extract sections by header (### Hook, ### Validation, etc.)
├── Extract subject line, preview text, from name
├── Extract CTA text, button text
├── Extract Lena sign-off variant
├── Extract footer text
└── Extract metadata (flow, position, level, phase)

INPUT 2: JSX TEMPLATE
├── Identify fixed elements (header, footer, sign-off structure)
├── Identify variable elements (hero, body blocks, product)
├── Extract brand tokens (colors, fonts, spacing)
└── Extract visual patterns per section type

INPUT 3: MESSAGING TYPE
├── Determine email purpose (awareness, consideration, conversion, retention)
├── Determine emotional arc (validation → education → proof → CTA)
├── Determine audience level (L1/L2/L3/GF)
└── Determine urgency level (none, soft, medium)
```

**Output:** Structured JSON per email:

```json
{
  "email_id": "welcome-01-e1-l1",
  "flow": "welcome",
  "position": "E1",
  "level": "L1",
  "subject": "He talks about it but won't do it",
  "preview": "His brain and bladder are sending messages on different frequencies...",
  "from_name": "Lena from BrightKidCo",
  "sections": [
    {
      "type": "hook",
      "copy": "He talks about the potty...",
      "purpose": "emotional_validation",
      "temperature": "warm",
      "needs_image": true,
      "image_type": "lifestyle_hero"
    },
    {
      "type": "validation",
      "copy": "This isn't your fault...",
      "purpose": "absolution",
      "temperature": "warm",
      "needs_image": false
    }
    // ... more sections
  ],
  "cta": {
    "text": "Let's explore what's really happening",
    "button": "See How Body-Signal Learning Works"
  },
  "signoff": {
    "variant": "SHORT",
    "closing": "Talk soon,"
  }
}
```

---

## PHASE 3: SECTION-BY-SECTION DECISION ENGINE

For EACH section in the parsed copy:

```
┌─────────────────────────────────────────────────────────────────┐
│ SECTION DECISION TREE                                            │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  SECTION: "Hook"                                                │
│  │                                                               │
│  ├── COPY ANALYSIS                                              │
│  │   ├── What does the copy literally say?                      │
│  │   │   "He talks about the potty but won't do it"            │
│  │   ├── What emotion? → confusion, frustration, validation     │
│  │   └── What form? → observation + question                    │
│  │                                                               │
│  ├── JSX ANALYSIS                                               │
│  │   ├── How does Giuliano handle hooks?                        │
│  │   │   → Headline above hero image, warm background           │
│  │   ├── What visual pattern? → text-first, optional image      │
│  │   └── Brand constraints? → Fraunces font, cream bg           │
│  │                                                               │
│  ├── MESSAGING ANALYSIS                                         │
│  │   ├── Purpose: emotional validation (not conversion)         │
│  │   ├── Audience: L1 → energetic, hopeful, Pre-K urgency       │
│  │   └── Temperature: warm → no hard sell                        │
│  │                                                               │
│  ├── COMPONENT DECISION                                         │
│  │   ├── Image needed? YES (to hit 4-6 target)                  │
│  │   │   ├── Image type: lifestyle hero (parent + child)        │
│  │   │   └── Image slot: 1 of 5                                 │
│  │   ├── Component: HERO-4 (Story Fragment)                     │
│  │   │   ├── Unique in this email? YES                          │
│  │   │   ├── Matches messaging? YES (warm, emotional)           │
│  │   │   └── Fits audience? YES (L1 appropriate)                │
│  │   └── Wrapper: Headline component (above image)              │
│  │                                                               │
│  └── TRACK                                                      │
│      ├── Component: HERO-4 [USED]                               │
│      ├── Image: lifestyle-hero-01 [USED]                        │
│      ├── Image count: 1/6                                       │
│      └── Component count: 1/6                                   │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

**Decision rules per section type:**

| Section Type | Image Needed? | Image Type | Component Pattern |
|-------------|---------------|------------|-------------------|
| Hook/Hero | Usually YES | lifestyle_hero, illustration | Headline + optional hero image |
| Validation | Sometimes | quote_card, stat_block | Text with accent background |
| Mechanism | Usually YES | educational, product_diagram | Science block + illustration |
| Social Proof | Usually YES | testimonial_card | Quote cards, parent stories |
| Product | YES | product_flat-lay, lifestyle | Product showcase component |
| Guarantee | Sometimes | badge, seal | Trust component |
| CTA | No (text only) | — | CTA button component |
| Sign-off | No | — | Lena signoff (fixed) |
| Footer | No | — | Footer (fixed) |

---

## PHASE 4: TRACKER

Global tracking across all 127 emails:

```
┌─────────────────────────────────────────────────────────────────┐
│ COMPONENT USAGE TRACKER                                          │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Email: welcome-01-e1-l1                                        │
│  ├── Components: [HERO-4, BODY-12, PROOF-7, CTA-3, SIGNOFF]    │
│  ├── Images: [lifestyle-01, flatlay-03, product-05, ...]        │
│  ├── Image count: 5/6 ✓                                         │
│  └── Component count: 5/6 ✓                                     │
│                                                                  │
│  Email: welcome-01-e1-l2                                        │
│  ├── Components: [HERO-2, BODY-8, PROOF-15, CTA-7, SIGNOFF]    │
│  ├── Images: [lifestyle-07, illustration-02, ...]                │
│  ├── Image count: 4/6 ✓                                         │
│  └── Component count: 4/6 ✓                                     │
│                                                                  │
│  FLOW-LEVEL UNIQUENESS:                                         │
│  ├── Welcome E1 L1: HERO-4 ✓ (not used in L2/L3/GF)           │
│  ├── Welcome E1 L2: HERO-2 ✓ (not used in L1/L3/GF)           │
│  └── Cross-flow reuse allowed (Welcome vs Cart can share)       │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

**Tracking rules:**
1. No duplicate components WITHIN the same email
2. Minimize duplicate components WITHIN the same flow
3. Cross-flow reuse is allowed (Welcome and Cart can share components)
4. Each email must have 4-6 images
5. Each email must have 3-6 components

---

## PHASE 5: ASSEMBLER

Takes decision engine output → Klaviyo HTML:

```
INPUT:
├── Component HTML (from 950+ library, selected by decision engine)
├── Copy text (from parsed .md file)
├── Brand tokens (from Giuliano's reference)
├── Product images (from 31 images)
└── Klaviyo variables ({{first_name}}, etc.)

PROCESS:
├── 1. Inject copy text into component slots
├── 2. Replace image placeholders with actual product images
├── 3. Apply brand tokens (inline CSS: colors, fonts, spacing)
├── 4. Convert to table-based layout (for Outlook compat)
├── 5. Inline all CSS (for Gmail compat)
├── 6. Add Klaviyo template variables
└── 7. Validate output

OUTPUT:
└── 600px HTML file, inline CSS, table layout, no JS
    Ready to paste into Klaviyo HTML editor
```

---

## PHASE 6: VALIDATOR

Final check before output:

```
VALIDATION CHECKLIST:
├── □ Image count: 4-6 per email
├── □ Component count: 3-6 per email
├── □ No duplicate components within email
├── □ All components match brand tokens
├── □ All CSS is inline (no <style> blocks)
├── □ Table-based layout (no flexbox/grid)
├── □ 600px max width
├── □ No JavaScript
├── □ Klaviyo variables present ({{first_name}}, etc.)
├── □ Subject line present
├── □ Preview text present
├── □ Unsubscribe link present
├── □ Physical address present
└── □ Lena sign-off present
```

---

## EXECUTION PLAN

### Wave 1: Foundation (do first)
1. Categorize 50-100 components relevant to Welcome flow
2. Build the 3-source parser
3. Build the decision engine (manual rules first, not AI)
4. Build the tracker (JSON or spreadsheet)

### Wave 2: Proof of Concept
5. Pick ONE email (Welcome E1 L1)
6. Run through full pipeline manually
7. Output HTML, verify in Klaviyo
8. Refine rules based on results

### Wave 3: Batch Welcome Flow
9. Process all 32 Welcome emails (8 positions × 4 levels)
10. Validate uniqueness across flow
11. Generate all 32 HTML files

### Wave 4: Expand to All Flows
12. Categorize remaining components
13. Process remaining 95 emails (Cart, Browse, Checkout, etc.)
14. Final validation across all flows

---

## CONSTRAINTS

- **Klaviyo HTML**: 600px width, inline CSS, table layout, no JS
- **Image hosting**: Images must be hosted externally (URL required)
- **Klaviyo variables**: {{first_name}}, {{email}}, etc. for personalization
- **Brand tokens**: Colors, fonts, spacing from Giuliano's reference (FIXED)
- **Component uniqueness**: No duplicate components within same email
- **Image count**: 4-6 per email (minimum 4, maximum 6)
- **Component count**: 3-6 per email (minimum 3, maximum 6)

---

## OPEN QUESTIONS

1. Where will the 127 HTML files be stored?
2. How will product images be hosted (CDN, Klaviyo media library)?
3. Will we build a CLI tool or a web interface for the pipeline?
4. Should the decision engine be rule-based or AI-assisted?
5. What's the QA process before deploying to Klaviyo?

---

*This plan is the foundation. Execute in waves. Start small, prove it works, then scale.*
