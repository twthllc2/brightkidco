# BRIGHTKIDCO EMAIL ASSEMBLY — THE PLAN

## WHAT WE WANT

125 Klaviyo HTML emails. Each unique. All on brand. No two looking the same.

## WHAT ONE SUBAGENT DOES (ONE EMAIL = ONE SUBAGENT)

```
┌─────────────────────────────────────────────────────────────────┐
│ SUBAGENT TASK: BUILD ONE EMAIL FROM SCRATCH                     │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  INPUT:                                                          │
│    email_id: "welcome-01-e1-l1"                                 │
│    copy_file: outputs/copy/welcome/welcome-01-e1-l1.md          │
│    component_library: outputs/email-assets/showcase-final.html  │
│    product_photos: outputs/email-assets/product-photos/         │
│    brand_tokens: teal=#2BAEB4, ink=#1F2D2F, fonts, etc.        │
│    jsx_reference: outputs/email-design-environment/             │
│    other_emails_in_flow: what was used in welcome-01-e1-l2,l3,gf│
│                                                                  │
│  PROCESS:                                                        │
│                                                                  │
│  1. READ the copy file. Understand what this email is saying.   │
│     What's the hook? What's the mechanism? Is there a product?  │
│     Is there social proof? What's the CTA?                      │
│                                                                  │
│  2. DECIDE the structure.                                        │
│     How many sections? What types? What order?                  │
│     This is a DESIGN DECISION, not a template.                  │
│     - Awareness email (E1)? → text-heavy, 4-5 sections,         │
│       warm colors, few images                                    │
│     - Product email (E4)? → image-heavy, 3 sections,            │
│       product showcase prominent                                 │
│     - Cart recovery? → short, urgent, 2-3 sections              │
│                                                                  │
│  3. STUDY the component library.                                 │
│     Open showcase-artifacts-final.html. Look at the components.  │
│     What does HERO-5 look like? What does STORY-14 look like?   │
│     What does PRODUCT-6.1 look like?                             │
│     UNDERSTAND each component's DESIGN, not just its label.     │
│                                                                  │
│  4. PICK components for each section.                            │
│     For the hero section: browse hero components.               │
│     Which one fits this email's tone? Warm? Direct? Emotional?  │
│     PICK IT. Don't use the same hero as the last email.         │
│     For the body section: browse body components.               │
│     Cards? Timeline? Comparison? Paragraphs?                    │
│     PICK IT.                                                     │
│                                                                  │
│  5. PICK images for each section.                                │
│     Hero → lifestyle photo of kid playing/potty.                │
│     Product → flat-lay of the training pants.                   │
│     Guarantee → accessory or badge image.                       │
│     PICK from the 31 product photos.                            │
│     Don't reuse images within this email.                       │
│                                                                  │
│  6. BUILD the HTML.                                              │
│     Start with the email shell: DOCTYPE, head, Google Fonts.    │
│     600px table. Header with logo.                              │
│     For each section:                                            │
│       → Gradient band (color1 → color2, 40px)                   │
│       → Section content on the section's background color       │
│       → Component HTML adapted for email (inline CSS, tables)   │
│       → Copy text injected from the .md file                    │
│       → Image placed according to the component's design        │
│     CTA section: dark background (#1F2D2F), lime button.        │
│     Signoff: Lena Bauer. Footer: tagline + unsubscribe.         │
│                                                                  │
│  7. VALIDATE.                                                    │
│     4-6 images? ✓                                                │
│     Brand colors present? ✓                                      │
│     Gradient bands between sections? ✓                           │
│     Real copy text (not section names)? ✓                        │
│     Different structure from other emails in flow? ✓             │
│     No duplicate components in this email? ✓                     │
│                                                                  │
│  OUTPUT: one HTML file to outputs/html/<email_id>.html          │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

## WHAT THE SUBAGENT MUST KNOW

```
BRAND RULES (from Giuliano's JSX):

  SECTION COLORS (never same color adjacent):
    hero       → #FFFBF0 (warm white) or #EEE8F6 (lilac)
    letter     → #FFF6E2 (cream)
    definition → #EAF6F2 (mint)
    testimonial → #FFF6E2 (cream) or #FFFBF0
    product    → #F0EDF8 (lavender) or #F5F1EA (beige)
    guarantee  → #EAF6F2 (mint)
    cta        → #1F2D2F (dark, ALWAYS)

  COMPONENT TYPES (what they look like):
    hero:       image+headline+body (or text-only, or image-first)
    letter:     paragraph text with good line height
    definition: eyebrow label + title + body paragraphs
    testimonial: quote card with attribution
    product:    image + name + price + feature pills
    guarantee:  60-day seal + promise text
    cta:        dark background + lime button (#D8F57C)

  GRADIENT BANDS:
    40px height, linear-gradient(180deg, color1 0%, color2 100%)

  TYPOGRAPHY:
    headlines: Fraunces, 28-34px, bold
    body: Questrial, 15-16px, line-height 1.65-1.7
    eyebrow: 10.5px, uppercase, letter-spacing 2px

  KLAVIYO REQUIREMENTS:
    600px width, table layout, inline CSS only, no JavaScript
    MSO conditionals for Outlook
    Google Fonts link in head
    Preheader div (hidden, for inbox preview)
```

## DESIGN DECISIONS PER SECTION TYPE

```
HERO:
  Question: What's the first thing the reader should see?
  Image-first? → big product/child photo, headline below
  Text-first? → emotional headline, image optional
  Dark? → serious/urgent topic
  Light? → warm/gentle introduction

  Examples from component library:
  HERO-5 (Mirror Moment): text-first, emotional, centers reader's experience
  HERO-20 (Letter Opener): handwritten feel, warm, personal
  HERO-4 (Story Fragment): narrative hook, image optional

TESTIMONIAL:
  Question: How should social proof be presented?
  Single quote card? → bold quote with attribution
  Multiple reviews? → grid of mini-reviews
  With photo? → lifestyle image + quote

  Examples:
  SP-08 (Stacked Mini-Reviews): multiple short quotes in a stack
  STORY-14 (Micro-Story): single powerful moment with attribution
  SP-01 (Yellow Quote Block): single quote in yellow card

PRODUCT:
  Question: How much product detail does this email need?
  Full showcase? → hero image + price + features + colorways
  Soft mention? → small product card inline
  Comparison? → side-by-side with alternatives

  Examples:
  6.1 (ProductShowcaseFull): hero image, price, feature pills, sub-grid
  6.2 (ProductShowcaseMedium): side-by-side image + info
  6.3 (ProductShowcaseSoft): gentle end-of-email mention

DEFINITION / MECHANISM:
  Question: How technical should this be?
  Simple explanation? → eyebrow + title + 2-3 paragraphs
  Diagram? → image + text side-by-side
  Steps? → numbered sequence

  Examples:
  EDU-1 (Definition Block): clear explanation with title
  EDU-8 (Mechanism Diagram): image-based explanation
  EDU-2 (Step Cards): numbered steps

GUARANTEE:
  Question: How prominent should the guarantee be?
  Full section? → 60-day seal + detailed promise
  Inline badge? → small trust badge near CTA

CTA:
  Question: What action and how urgent?
  Soft invite? → "Take your time, we're here"
  Direct ask? → "Shop the pants →"
  Community? → "Talk to parents who get it"
```

## VARIANCE RULES

```
WITHIN AN EMAIL:
  - No duplicate component
  - No duplicate image
  - No adjacent same background color
  - At least 4 images, max 6

ACROSS EMAILS IN SAME FLOW:
  - Different hero component (HERO-5 in E1, not in E2)
  - Different structure (E1 has 5 sections, E2 has 3 sections)
  - Different color sequence (E1 warm→cream→mint, E2 lilac→beige→dark)
  - Different image types (E1 lifestyle-heavy, E2 product-heavy)

ACROSS ALL 125 EMAILS:
  - No component used more than 8 times total
  - At least 50 different components used
  - Section counts: 2-8 per email
```

## TRACKING (SHARED BETWEEN SUBAGENTS)

```
A shared tracking file: outputs/tracking/usage.json

Each subagent READS this before building, then WRITES after.

{
  "used_components": {
    "HERO-5": 3,
    "HERO-20": 5,
    "STORY-14": 2,
    ...
  },
  "used_images": {
    "toddler-playing.jpg": 4,
    ...
  },
  "flow_structures": {
    "welcome": ["AW-03", "AW-01", "AW-05", ...],
    "cart": ["CV-01", "CV-03", ...]
  },
  "completed_emails": [
    "welcome-01-e1-l1",
    "welcome-01-e1-l2",
    ...
  ]
}

BEFORE picking a hero component:
  → Check which heroes are used <8 times
  → Check which heroes were NOT used in this flow
  → Pick from available

This prevents the 5.1-used-100x problem.
```

## LAUNCH PLAN

```
Wave 1: welcome-01-e1-l1 (TEST)
  → 1 subagent
  → Verify output quality
  → If good, continue

Wave 2: welcome E1 (l2, l3, gf) + cart E1
  → 4 subagents, parallel
  → Each builds one email independently

Wave 3+: Continue 4-10 at a time
  → 13-31 waves for 125 emails
  → Each subagent reads tracking, builds, writes tracking
```

## WHAT MAKES THIS DIFFERENT FROM SCRIPTING

```
SCRIPTING:
  generate-layouts.py → fills in a template
  fill-picks.py → queries a database
  assemble-email.py → applies functions to all sections

  Result: same output, same structure, no design decisions

SUBAGENT:
  Reads copy → understands content
  Studies components → understands design
  Makes decisions → picks, orders, arranges
  Builds HTML → from scratch, not from templates
  Validates → checks against rules

  Result: unique output, design decisions, actual variety
```

## THE CRITICAL RULE

```
NO PYTHON SCRIPTS FOR ASSEMBLY.

The subagent does not run a script to build the email.
The subagent BUILDS THE EMAIL. It writes the HTML.
Raw. From scratch. Using its understanding of design.

This is the difference between "generate" and "create".
```
