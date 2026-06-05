# BrightKidCo — Email Marketing Project

Email marketing for Giuliano's kids ecommerce brand. Copy done (124 files). Design system in progress via email-ops.

## Client

- **Name:** Giuliano
- **Brand:** brightkidco.com
- **Niche:** Kids brand (ecommerce)
- **Location:** Germany
- **Notes:** German — expects precision, data-backed strategy, professional delivery. Business partner is final decision-maker.

## What Exists

### Copy (done)
124 email copy + creative strategy files across 20 flow types. All complete, all correct.

### HTML Emails (127 files, mostly broken)
`email-design/xhtml-emails/` has 127 HTML emails across 25 flows. Most of them are problematic:
- **Not actually XHTML** — many are plain HTML, not email-client-compatible XHTML
- **Broken rendering** — broken gradients, broken layouts, missing components
- **No images or product showcases** — most are just walls of text and colors
- **No creative angles** — no illustrations, no product photos, no lifestyle imagery
- **Only 1-2 usable** — level-detection flow (2 emails) is the only decent one

### Design System (in progress)
Giuliano's JSX templates (`raw/BKCO - EMAIL MARKETING/`) are the design truth — they have SVG illustrations, product showcases, gradient bands, component variety. The canvas (`email-design/canvas.html`) extracts these components for composing new emails.

## What Happened

```
PHASE 1: Source Ingestion (54+ docs)           ✅ Done
PHASE 2: Strategy Docs (8 docs, 793KB)        ✅ Done
PHASE 3: Email Copy + Creative (124 files)     ✅ Done
PHASE 4: Email HTML (multiple attempts)        ❌ Rejected — broken, no images
PHASE 5: Design System (in progress)           🔄 Building from JSX source
```

The first round of HTML emails failed — no images, broken layouts, no product showcases. Now building from Giuliano's JSX templates which have actual visual quality.

## Project Structure

```
brightkidco/
├── README.md
├── outputs/
│   ├── copy/                  124 email copy files (all flows, all levels)
│   ├── email-design/          → symlink to email-ops/email-design/
│   ├── strategy/              Strategy documents
│   └── synthesis/             Source synthesis docs
├── raw/
│   ├── BKCO - EMAIL MARKETING/   JSX source (10-email welcome flow)
│   ├── Welcome Flows - 10 Emails _standalone_.html
│   └── *.md                       Design briefs, demands
├── docs/                      Design briefs, demands
└── demands/                   Client requirements
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

The HTML emails didn't pass this test. Building from Giuliano's JSX source to match his visual standard.

## License

Private. All rights reserved.
