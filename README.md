# BrightKidCo — Email Marketing Project

Email marketing system for Giuliano's kids ecommerce brand. Copy complete, HTML iterations rejected, pivoted to email-service-delivery-system.

## Client

- **Name:** Giuliano
- **Brand:** brightkidco.com
- **Niche:** Kids brand (ecommerce)
- **Location:** Germany
- **Notes:** German — expects precision, data-backed strategy, professional delivery. Business partner is final decision-maker.

## What Happened

```
PHASE 1: Source Ingestion (54+ docs)           ✅ Done
PHASE 2: Strategy Docs (8 docs, 793KB)        ✅ Done
PHASE 3: Email Copy + Creative (124 files)     ✅ Done
PHASE 4: Email HTML (multiple attempts)        ❌ Rejected — Giuliano didn't like any version
PHASE 5: Pivot to Email Service Delivery       ✅ Started — build proper design system first
```

**The problem:** We tried to produce 124 HTML emails directly. Made multiple versions.
None of them impressed Giuliano. The approach was wrong — building emails one by one
without a proper design system underneath.

**The solution:** Start the Email Service Delivery System (`ecom-email-service-delivery-system`).
Build 300 universal templates, 120 base section patterns, token-swappable design system.
Then come back to BrightKidCo with a system that produces premium emails every time.

## Project Structure

```
brightkidco/
├── README.md                      This file
├── compile-jsx.mjs                JSX → HTML compiler (esbuild + React)
├── generate-task.py               Task body generator for Ralph
│
├── plans/                         Execution plans
│   ├── email-jsx-production.md    40KB — 9 waves, 124 tasks
│   └── email-html-production.md   24KB — conversion rules
│
├── outputs/
│   ├── copy/                      124 email copy + creative strategy files
│   │   ├── browse/                Browse abandonment emails
│   │   ├── cart/                  Cart abandonment emails
│   │   ├── checkout/              Checkout abandonment emails
│   │   ├── faq-library/           FAQ library emails
│   │   ├── pp-at-risk/            Post-purchase at-risk emails
│   │   ├── pp-direct-upsell/      Direct upsell emails
│   │   ├── pp-education/          Post-purchase education emails
│   │   ├── pp-extended-ed/        Extended education emails
│   │   ├── pp-extended-upsell/    Extended upsell emails
│   │   ├── pp-level-detection/    Level detection emails
│   │   ├── pp-mary-story/         Mary story email
│   │   ├── pp-mid-checkin/        Mid check-in emails
│   │   ├── pp-pps-upsell/         PPS upsell emails
│   │   ├── replenish/             Replenishment emails
│   │   ├── review-request/        Review request emails
│   │   ├── site-abandonment/      Site abandonment email
│   │   ├── sunset/                Sunset emails
│   │   ├── transactional/         Transactional emails
│   │   ├── welcome/               Welcome flow emails
│   │   └── winback/               Winback emails
│   │
│   ├── archive-html/              Previous HTML attempts (all rejected)
│   │   ├── html/                  HTML archive
│   │   ├── html-preview/          Preview archive
│   │   ├── html3/                 Version 3 archive
│   │   ├── prototypes/            Prototype archive
│   │   └── prototypes-archive/    Older prototypes
│   │
│   ├── strategy/                  Strategy documents
│   │   ├── 1-full-email-strategy.md
│   │   ├── 2-full-email-copy-strategy.md
│   │   ├── 3-segmentation-blueprint.md
│   │   ├── 4-popup-strategy.md
│   │   └── giuliano/              Client-facing docs
│   │
│   ├── synthesis/                 Source synthesis docs
│   └── mission-log.md             Production log
│
├── showcase/                      Showcase site (queued)
│   ├── 3-diagrams.html           Gold standard template
│   ├── PLAN-SECTIONS.md          Section production plan
│   ├── PLAN-ARTIFACT-PRODUCTION.md
│   ├── FIX-PLAN.md
│   ├── Caddyfile                  Deployment config
│   ├── outputs/
│   │   └── artifacts/             188 section artifacts built
│   └── src/                       Site source
│
├── raw/                           Client-provided source files
│   ├── extracted/                 Extracted JSX components
│   ├── extracted_bkco/            BKC-specific extractions
│   └── Welcome Flows/             Original welcome flow HTML
│
├── email-artifact-library.md      101 reusable email components
└── scripts/                       Utility scripts
```

## Brand Tokens

```
Primary:    #2BAEB4 (teal)
Secondary:  #5DD07A (green)
Dark:       #1F2D2F (ink)
Body:       #4A6568 (soft)
Background: #FBF7F1 (cream)
Accent:     #FFD866 (yellow)

Fonts: Questrial (body) + Fraunces (display) + Caveat (handwritten)
Sender: "Lena from BrightKidCo"
```

## Quality Standard

> **"Would Giuliano be impressed?"**

The first round of HTML emails failed this test. That's why we pivoted —
build the system first, then the emails will be premium every time.

## License

Private. All rights reserved.
