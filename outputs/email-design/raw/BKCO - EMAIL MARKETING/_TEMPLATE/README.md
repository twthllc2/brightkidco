# BKC Email Build Environment

This is the file structure Giuliano uses to build BrightKidCo emails. Every flow follows the same 5-file pattern.

## The 5-File Pattern (per flow folder)

```
{FOLDER}/
├── {Flow Name} Local.html     ← The loader (open in browser to preview)
├── content.js                 ← All copy as window.FLOW_<KEY> = {{ e1, e2, ... }}
├── emails.jsx                 ← All email components (Email1, Email2, ...)
├── app.jsx                    ← Canvas app that renders all emails in artboards
└── (bundled output goes to /raw/ as <Flow> _standalone_.html)
```

## What Lives Where (DO NOT MODIFY)

- `../welcome-flow/primitives.jsx` — **14 shared components** (EmailShell, Header, ImgFrame, FramedImage, Band, PartBadge, TitleBlock, Letter, Eyebrow, H2, CTAClose, Signoff, OutLine, Footer) + `MW` (420px width) + `LOGO`. Used by every flow.
- `../welcome-flow/product-showcase.jsx` — **3 product variants** (ProductShowcaseFull, ProductShowcaseMedium, ProductShowcaseSoft).
- `../welcome-flow/design-canvas.jsx` — **Canvas wrapper** (DesignCanvas, DCSection, DCArtboard, DCPostIt). Visual frame for all emails.
- `../autistic-welcome/variants/tokens.js` — **Brand tokens** (window.BRAND = `B`, window.FONT = `F`). Colors, gradients, fonts.
- `../autistic-welcome/variants/illustrations.jsx` — **10 SVG illustrations** (Illu_GentleMorning, Illu_Letter, etc.). Used as decorative elements.

## The Load Order (in Local.html)

1. React 18 + ReactDOM 18 + Babel Standalone (CDN, pinned versions)
2. `tokens.js` (defines `window.BRAND` and `window.FONT`)
3. `content.js` (defines `window.FLOW_<KEY>` and `window.FLOW_<KEY>_SHARED`)
4. `design-canvas.jsx` (registers `DesignCanvas`, `DCSection`, `DCArtboard`, `DCPostIt` on window)
5. `primitives.jsx` (registers 14 components + MW + LOGO on window)
6. `product-showcase.jsx` (registers 3 product variants on window)
7. `illustrations.jsx` (registers 10 illustrations on window)
8. `emails.jsx` (registers Email1, Email2, ... on window)
9. `app.jsx` (renders everything to `#root`)

## How a Subagent Builds One Flow

1. Read the copy files from `/root/projects/brightkidco/outputs/copy/{flow}/` — VERBATIM
2. Copy the 4 template files from `_TEMPLATE/` into the new flow folder
3. Fill in `content.js` with the copy fields (e.g. `window.FLOW_CART.e1 = {{ ... }}`)
4. Fill in `emails.jsx` with React components using Giuliano's primitives
5. Fill in `app.jsx` with artboard entries for each email
6. Rename `Local.html` with the flow name (e.g. `Cart Abandonment Local.html`)
7. Run bundler: `python3 tools/bundle_standalone.py "raw/BKCO - EMAIL MARKETING/{folder}/{Flow} Local.html" "raw/{Flow} _standalone_.html"`
8. Open bundled HTML in browser at 420px to verify
9. scp to cachy for review

## Folder Map (22 flows)

| Folder | Copy dir | Flow Name |
|--------|----------|-----------|
| `welcome-flow/` | `copy/WELCOME/` | Welcome |
| `cart-flow/` | `copy/cart/` | Cart Abandonment |
| `browse-flow/` | `copy/browse/` | Browse Abandonment |
| `checkout-flow/` | `copy/checkout/` | Checkout Abandonment |
| `pp-education-flow/` | `copy/pp-education/` | PP Education |
| `pp-extended-ed-flow/` | `copy/pp-extended-ed/` | PP Extended Ed |
| `pp-direct-upsell-flow/` | `copy/pp-direct-upsell/` | PP Direct Upsell |
| `pp-extended-upsell-flow/` | `copy/pp-extended-upsell/` | PP Extended Upsell |
| `pp-mid-checkin-flow/` | `copy/pp-mid-checkin/` | PP Mid Checkin |
| `pp-level-detection-flow/` | `copy/pp-level-detection/` | PP Level Detection |
| `pp-mary-story-flow/` | `copy/pp-mary-story/` | PP Mary Story |
| `pp-at-risk-flow/` | `copy/pp-at-risk/` | PP At Risk |
| `winback-a-flow/` | `copy/winback-a/` | Winback A |
| `winback-b-flow/` | `copy/winback-b/` | Winback B |
| `replenish-a-flow/` | `copy/replenish-a/` | Replenish A |
| `replenish-b-flow/` | `copy/replenish-b/` | Replenish B |
| `replenish-c-flow/` | `copy/replenish-c/` | Replenish C |
| `review-request-flow/` | `copy/review-request/` | Review Request |
| `site-abandonment-flow/` | `copy/site-abandonment/` | Site Abandonment |
| `sunset-flow/` | `copy/sunset/` | Sunset |
| `transactional-flow/` | `copy/transactional/` | Transactional |
| `faq-flow/` | `copy/faq/` | FAQ Library |

## The Build → Bundle → Ship Pipeline

```
Source: /root/projects/brightkidco/outputs/copy/<flow>/<file>.md  (the .md copy)
   ↓
Build:  /root/projects/brightkidco/outputs/email-design/raw/BKCO - EMAIL MARKETING/<flow>-flow/
   ↓        (content.js + emails.jsx + app.jsx + <Flow> Local.html)
   ↓
Bundle: /root/projects/brightkidco/outputs/email-design/tools/bundle_standalone.py
   ↓        (inlines React, fonts, images into single ~3.2MB HTML)
   ↓
Output: /root/projects/brightkidco/outputs/email-design/raw/<Flow> _standalone_.html
   ↓
Ship:   scp to ayoub@100.76.121.113:/home/ayoub/Documents/
```

## Rules (from the plan)

- **Copy is VERBATIM** — never rewrite, shorten, or paraphrase
- **No em dashes (—)** or double hyphens (--) in copy — use commas, periods, line breaks
- **Use € not $** — €34/pair, €30.60 with BRIGHT10, €79.99 bundle
- **Brand tokens exact** — teal #2BAEB4, green #5DD07A, ink #1F2D2F, cream #FBF7F1, lime #D8F57C, yellow #FFD866
- **Fonts** — Fraunces display, Questrial body, Caveat handwritten (Lena's signature)
- **Hard shadows only** — 3px 3px 0 / 4px 4px 0 / 6px 6px 0 #1F2D2F. No blur, no rgba.
- **2px solid #1F2D2F borders** on all cards, images, badges
- **Mobile-first 420px** — single column
- **Border radius** — 999px (CTA/badge), 14-24px (cards), 18-20px (images)
- **Part badge** — bg #FFD866, rotate -1.5deg
- **CTA arrow** — every CTA ends with ` →`
- **Lena signoff** — E1 = "BKC team", E2+ = "Lena Bauer", F2 = "Lena"
- **Closing word** — "Talk soon" (E1-E2), "With understanding" (E3-E5), "With care" (E6+)
- **Mechanism before guarantee** in every email
- **Subject formula** — one of 6: Observation, Validation, Mechanism tease, Permission frame, Question, Social proof
