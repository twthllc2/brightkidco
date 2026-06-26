# Phase 1 + 2 Summary + Phase 3 Plan

## WHAT WE HAVE NOW

### PHASE 1: COMPONENT CATALOG (949 components)

File: outputs/email-assets/component-catalog.json

Every component from showcase-artifacts-final.html is now tagged
with 6 attributes. Example:

```
┌─────────────────────────────────────────────────────────┐
│ COMPONENT EXAMPLE: HERO-4                               │
├─────────────────────────────────────────────────────────┤
│ id:              "HERO-4"                               │
│ name:            "Story Fragment"                       │
│ position:        hero                                   │
│ image_support:   image_text                             │
│ messaging:       emotional                              │
│ audience:        [L1, L2, L3, GF]                       │
│ temperature:     warm                                   │
│ giuliano:        quality_approved                       │
│ source_line:     3882                                  │
└─────────────────────────────────────────────────────────┘
```

Distribution by position:

```
Position             Count   What it is
───────────────────  ─────   ──────────────────────────────
shell_header           30    Logo, preheader, dividers
hero                   30    Email openers, hooks
body_recognition      116    "You are not alone" blocks
body_mechanism        177    Science, education, how-it-works
body_social_proof      15    Testimonials, reviews
body_images           140    Photo layouts, UGC grids
product_showcase       81    Product cards, pricing
guarantee_trust        84    60-day seal, trust badges
cta                    53    Buttons, links, calls to action
emotional_support      37    Permission slips, empathy
flow_specific         103    Pre-built for specific flows
seasonal_campaign      76    Holiday, flash sale, VIP
signoff_footer          7    Lena signoff, footer
```

Distribution by image support:

```
Image Support         Count   Meaning
───────────────────  ─────   ──────────────────────────────
text_only            222    No image needed
image_text           566    Image + text together
image_only           161    Image with minimal text
```

Distribution by messaging:

```
Messaging            Count   Meaning
───────────────────  ─────   ──────────────────────────────
product              137    Product-focused
proof                124    Social proof, testimonials
education            108    Science, mechanism, how-it-works
story                104    Narrative, storytelling
conversion            90    CTAs, offers, urgency
flow                  85    Flow-specific patterns
guarantee             73    Trust, guarantees, seals
emotional             61    Empathy, validation, support
design                58    Visual, decorative
campaign              45    Seasonal, promotional
psychology            32    Behavioral triggers
image                 32    Photo-focused
```

---

### PHASE 2: PARSED EMAILS (125 emails)

File: outputs/parsed-emails/<flow>/<email-id>.json

Each copy .md file is now structured JSON. Example for Welcome E1 L1:

```
┌─────────────────────────────────────────────────────────┐
│ EMAIL: welcome-01-e1-l1                                  │
├─────────────────────────────────────────────────────────┤
│                                                         │
│ COPY:                                                   │
│ ├── subject:    "He talks about it but won't do it"     │
│ ├── preview:    "His brain and bladder are sending..."  │
│ ├── from_name:  "Lena from BrightKidCo"                │
│ ├── sections:                                         │
│ │   ├── [hook]        "He talks about the potty..."    │
│ │   ├── [validation]  "This isn't your fault..."       │
│ │   ├── [mechanism]   "This is called interoception..."│
│ │   └── [cta]         "Let's explore what's happening" │
│ ├── cta:        button_text, secondary_text            │
│ ├── signoff:    variant, closing, text                 │
│ └── footer:     address, unsubscribe                   │
│                                                         │
│ MESSAGING:                                              │
│ ├── flow_type:     welcome                              │
│ ├── position:      E1                                   │
│ ├── audience:      L1 (Sarah)                           │
│ ├── messaging_type: awareness                           │
│ ├── urgency:       allowed                              │
│ ├── purpose:       education                            │
│ └── cta_force:     very_low                             │
│                                                         │
│ SECTION MAPPINGS:                                       │
│ ├── Hook:                                                   │
│ │   ├── needs_image: true                                  │
│ │   ├── image_type: lifestyle_hero                         │
│ │   └── categories: [hero]                                 │
│ ├── Validation:                                             │
│ │   ├── needs_image: false                                 │
│ │   └── categories: [body_recognition, emotional_support]  │
│ ├── Mechanism:                                              │
│ │   ├── needs_image: true                                  │
│ │   ├── image_type: educational                            │
│ │   └── categories: [body_mechanism]                       │
│ └── CTA:                                                   │
│     ├── needs_image: false                                 │
│     └── categories: [cta]                                  │
│                                                         │
│ CONSTRAINTS:                                             │
│ ├── min_images: 4                                        │
│ ├── max_images: 6                                        │
│ ├── min_components: 3                                    │
│ ├── max_components: 6                                    │
│ └── unique_components: true                              │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

## PHASE 3: THE DECISION ENGINE

### What it does

Takes parsed email + component catalog + tracking state → outputs component picks for each section.

### Pipeline

```
┌─────────────────────────────────────────────────────────┐
│ DECISION ENGINE PIPELINE                                │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  ┌──────────────┐    ┌──────────────┐                  │
│  │ PARSED EMAIL │    │  COMPONENT   │                  │
│  │ (from P2)    │    │  CATALOG     │                  │
│  └──────┬───────┘    │  (from P1)   │                  │
│         │            └──────┬───────┘                  │
│         │                   │                          │
│         ▼                   ▼                          │
│  ┌─────────────────────────────────┐                   │
│  │     FOR EACH SECTION:           │                   │
│  │                                 │                   │
│  │  1. What does copy say?         │                   │
│  │     → "Hook: emotional opener"  │                   │
│  │                                 │                   │
│  │  2. What JSX pattern?           │                   │
│  │     → "Headline above hero"     │                   │
│  │                                 │                   │
│  │  3. What messaging type?        │                   │
│  │     → "awareness, warm"         │                   │
│  │                                 │                   │
│  │  4. Query catalog:              │                   │
│  │     position=hero               │                   │
│  │     messaging=emotional         │                   │
│  │     temperature=warm            │                   │
│  │     image_support=image_text    │                   │
│  │     → returns 8 candidates      │                   │
│  │                                 │                   │
│  │  5. Filter uniqueness:          │                   │
│  │     not used in this email      │                   │
│  │     → returns 6 candidates      │                   │
│  │                                 │                   │
│  │  6. Pick best match:            │                   │
│  │     → HERO-4 (Story Fragment)   │                   │
│  │                                 │                   │
│  │  7. Track:                      │                   │
│  │     component=HERO-4 [USED]     │                   │
│  │     image_count=1/6             │                   │
│  │     component_count=1/6         │                   │
│  │                                 │                   │
│  └─────────────────────────────────┘                   │
│         │                                               │
│         ▼                                               │
│  ┌─────────────────────────────────┐                   │
│  │     AFTER ALL SECTIONS:         │                   │
│  │                                 │                   │
│  │  Validate:                      │                   │
│  │  ✓ Images: 4-6?                 │                   │
│  │  ✓ Components: 3-6?             │                   │
│  │  ✓ No duplicates?               │                   │
│  │  ✓ Brand consistent?            │                   │
│  │  ✓ Messaging flow?              │                   │
│  │                                 │                   │
│  └─────────────────────────────────┘                   │
│         │                                               │
│         ▼                                               │
│  ┌─────────────────────────────────┐                   │
│  │  OUTPUT: Component picks JSON   │                   │
│  └─────────────────────────────────┘                   │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### Example Decision: Welcome E1 L1

```
Section: Hook
├── Copy says: "He talks about the potty but won't do it"
├── Purpose: emotional validation
├── Temperature: warm
├── Needs image: YES (to hit 4-6 target)
├── Image type: lifestyle hero (parent + child)
├── Query catalog: position=hero, messaging=emotional, temp=warm
├── Candidates: HERO-1, HERO-4, HERO-5, HERO-9, HERO-18
├── Filter: not used in this email yet
├── Pick: HERO-4 (Story Fragment) — best match for emotional hook
└── Track: HERO-4 [USED], image_count=1/6, component_count=1/6

Section: Validation
├── Copy says: "This isn't your fault..."
├── Purpose: guilt absolution
├── Temperature: warm
├── Needs image: NO (text is enough)
├── Query catalog: position=body_recognition, messaging=emotional
├── Candidates: EMO-3, EMO-4, EMO-7, EMO-8, DEEP-08
├── Filter: not used in this email yet
├── Pick: EMO-7 (You're Not Alone) — matches validation purpose
└── Track: EMO-7 [USED], image_count=1/6, component_count=2/6

Section: Mechanism
├── Copy says: "This is called interoception..."
├── Purpose: education
├── Temperature: neutral
├── Needs image: YES (educational diagram)
├── Image type: product diagram or illustration
├── Query catalog: position=body_mechanism, messaging=education
├── Candidates: EDU-1, EDU-8, EDU-10, EDU-11, EDU-12
├── Filter: not used in this email yet
├── Pick: EDU-8 (Mechanism Diagram) — matches education purpose
└── Track: EDU-8 [USED], image_count=2/6, component_count=3/6

Section: CTA
├── Copy says: "Let's explore what's happening"
├── Purpose: soft conversion
├── Temperature: warm
├── Needs image: NO
├── Query catalog: position=cta, messaging=conversion
├── Candidates: CTA-2, CTA-4, CTA-7
├── Filter: not used in this email yet
├── Pick: CTA-4 (Gentle Invite) — matches soft CTA force
└── Track: CTA-4 [USED], image_count=2/6, component_count=4/6

FINAL VALIDATION:
├── Images: 2 (UNDER 4! Need to add 2 more)
│   └── Fix: Add image to Validation section? Or add product showcase?
├── Components: 4 (within 3-6 range) ✓
├── No duplicates: ✓
└── Messaging flow: hook → validation → mechanism → CTA ✓
```

### The Hard Part

```
125 emails × 5-7 sections each = ~800 section decisions

Each decision has 3 sub-decisions:
  1. Does this section need an image?
  2. What component type fits?
  3. What wrapper/component variant?

Must track uniqueness across all 125 emails:
  - No duplicate components within same email
  - Minimize reuse across emails in same flow
  - Cross-flow reuse is OK

Must ensure per email:
  - 4-6 images
  - 3-6 components
  - Brand consistency
  - Messaging flow (hook → validation → proof → CTA)
```

### What the output looks like

```
{
  "email_id": "welcome-01-e1-l1",
  "picks": {
    "hook": {
      "component_id": "HERO-4",
      "component_name": "Story Fragment",
      "image": "lifestyle-toddler-playing.jpg",
      "image_slot": 1
    },
    "validation": {
      "component_id": "EMO-7",
      "component_name": "You're Not Alone",
      "image": null,
      "image_slot": null
    },
    "mechanism": {
      "component_id": "EDU-8",
      "component_name": "Mechanism Diagram",
      "image": "product-training-pant-cloud.jpg",
      "image_slot": 2
    },
    "cta": {
      "component_id": "CTA-4",
      "component_name": "Gentle Invite",
      "image": null,
      "image_slot": null
    }
  },
  "validation": {
    "image_count": 2,
    "component_count": 4,
    "images_under_min": true,
    "fix_needed": "Add 2 more image sections to reach minimum 4"
  }
}
```

---

## THE FULL PIPELINE (Phases 1-4)

```
┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐
│  COPY    │    │  JSX     │    │  BRAND   │    │  949     │
│  .md     │    │ TEMPLATE │    │  TOKENS  │    │ COMPS    │
└────┬─────┘    └────┬─────┘    └────┬─────┘    └────┬─────┘
     │               │               │               │
     └───────────────┼───────────────┼───────────────┘
                     │               │
                     ▼               │
              ┌──────────────┐       │
              │  PHASE 2     │       │
              │  PARSER      │       │
              │  (done)      │       │
              └──────┬───────┘       │
                     │               │
                     ▼               │
              ┌──────────────┐       │
              │  PHASE 3     │◄──────┘
              │  DECISION    │
              │  ENGINE      │
              │  (next)      │
              └──────┬───────┘
                     │
                     ▼
              ┌──────────────┐
              │  PHASE 4     │
              │  ASSEMBLER   │
              │  (after P3)  │
              └──────┬───────┘
                     │
                     ▼
              ┌──────────────┐
              │  KLAVIYO     │
              │  HTML        │
              │  (125 files) │
              └──────────────┘
```
