# BKCO Email Build Environment

This is the complete base structure for building BrightKidCo emails. **22 flow folders, 5-file pattern each, all using the same shared primitives.**

## Folder Map

```
BKCO - EMAIL MARKETING/
├── _TEMPLATE/                      ← The canonical 4-file pattern (copy these for new flows)
│   ├── Local.html                  ← The loader (template — copy & rename for each flow)
│   ├── content.js                  ← The empty content data pattern
│   ├── emails.jsx                  ← The empty email component pattern
│   ├── app.jsx                     ← The empty canvas app pattern
│   └── README.md                   ← Pattern documentation
│
├── welcome-flow/                   ← ✅ WORKING — 6 emails (Flow 1) + 4 emails (Flow 2)
│   ├── Welcome Flows - 10 Emails.html
│   ├── app.jsx, content.js, content-flow2.js
│   ├── email-6.jsx, emails-2-3.jsx, emails-4-5.jsx, flow2-emails.jsx
│   ├── primitives.jsx              ← ⚠️  SHARED — used by ALL flows
│   ├── product-showcase.jsx        ← ⚠️  SHARED — used by ALL flows
│   ├── design-canvas.jsx           ← ⚠️  SHARED — used by ALL flows
│   └── illustrations.jsx is in ../autistic-welcome/variants/  (⚠️  SHARED)
│
├── autistic-welcome/
│   ├── V10 Final.html              ← Email 1 of welcome flow (the V10 final version)
│   ├── V10-final.jsx
│   └── variants/
│       ├── tokens.js               ← ⚠️  SHARED — brand tokens (window.BRAND, window.FONT)
│       ├── content.js              ← Email 1 copy
│       ├── illustrations.jsx       ← ⚠️  SHARED — 10 SVG illustrations
│       ├── new-v1-4.jsx, new-v5-7.jsx, new-v8-10.jsx  ← Variants (reference only)
│       └── variants-1-3.jsx, variants-4-6.jsx, variants-7-10.jsx  ← Variants
│
├── cart-flow/                      ← 🆕 Cart Abandonment (3 emails, ready to build)
├── browse-flow/                    ← 🆕 Browse Abandonment (3 emails)
├── checkout-flow/                  ← 🆕 Checkout Abandonment (2 emails)
├── pp-education-flow/              ← 🆕 PP Education (4 emails, D0/D7/D14/D21)
├── pp-extended-ed-flow/            ← 🆕 PP Extended Ed (20 emails, 5×4 levels)
├── pp-direct-upsell-flow/          ← 🆕 PP Direct Upsell (2 emails)
├── pp-extended-upsell-flow/        ← 🆕 PP Extended Upsell (3 emails)
├── pp-mid-checkin-flow/            ← 🆕 PP Mid Checkin (3 emails, D30/D45/D60)
├── pp-level-detection-flow/        ← 🆕 PP Level Detection (2 emails)
├── pp-mary-story-flow/             ← 🆕 PP Mary Story (1 email)
├── pp-at-risk-flow/                ← 🆕 PP At Risk (4 emails)
├── winback-a-flow/                 ← 🆕 Winback A (12 emails, 3×4 levels)
├── winback-b-flow/                 ← 🆕 Winback B (12 emails, 3×4 levels)
├── replenish-a-flow/               ← 🆕 Replenish A (3 emails)
├── replenish-b-flow/               ← 🆕 Replenish B (2 emails)
├── replenish-c-flow/               ← 🆕 Replenish C (2 emails)
├── review-request-flow/            ← 🆕 Review Request (2 emails)
├── site-abandonment-flow/          ← 🆕 Site Abandonment (1 email)
├── sunset-flow/                    ← 🆕 Sunset (2 emails)
├── transactional-flow/             ← 🆕 Transactional (4 emails)
├── faq-flow/                       ← 🆕 FAQ Library (6 emails)
│
├── assets/                         ← Brand logos (DO NOT MODIFY)
├── references/                     ← Reference screenshots from other brands
├── research/                       ← PDFs of the source research (BKC NEU, Autistic language, etc)
├── research/extracted/             ← .txt extractions of the research PDFs
├── uploads/                        ← Miscellaneous upload files
├── scraps/                         ← Quick sketches (not for production)
│
├── emails/                         ← Loose email experiments
│   ├── hifi.jsx
│   └── wireframes.jsx
│
└── design-canvas.jsx               ← ⚠️  SHARED — canvas wrapper (loaded by welcome-flow and all new flow Local.html files)
```

## The Pattern (every flow follows this)

For each flow folder:
```
<flow>-flow/
├── <Flow Name> Local.html    ← Loader (open in browser)
├── content.js                ← window.FLOW_<KEY> = { e1, e2, ... } (all copy data)
├── emails.jsx                ← const Email1 = () => { ... } (all email components)
└── app.jsx                   ← Renders all emails in artboards
```

**All 4 files are templated and ready** in every flow folder. The content.js, emails.jsx, and app.jsx are empty stubs that a subagent (or you) fills in by reading the .md copy files in `/root/projects/brightkidco/outputs/copy/<flow>/`.

## What's Shared (NEVER modify without intent)

These files are loaded by every flow's Local.html. Changes here affect ALL flows.

| File | Lives in | Used for |
|------|----------|----------|
| `primitives.jsx` | `welcome-flow/` | 14 shared components (EmailShell, Header, ImgFrame, FramedImage, Band, PartBadge, TitleBlock, Letter, Eyebrow, H2, CTAClose, Signoff, OutLine, Footer) + MW (420px) + LOGO |
| `product-showcase.jsx` | `welcome-flow/` | 3 product variants (ProductShowcaseFull, ProductShowcaseMedium, ProductShowcaseSoft) |
| `design-canvas.jsx` | `welcome-flow/` (and root) | Canvas wrapper (DesignCanvas, DCSection, DCArtboard, DCPostIt) |
| `tokens.js` | `autistic-welcome/variants/` | Brand tokens (window.BRAND, window.FONT) |
| `illustrations.jsx` | `autistic-welcome/variants/` | 10 SVG illustrations (Illu_GentleMorning, etc.) |

## How To Build One Email (in any flow)

1. Open the flow folder (e.g. `cart-flow/`)
2. The 4 files are there already, empty
3. Read the copy at `/root/projects/brightkidco/outputs/copy/cart/cart-02-e1.md`
4. Fill in `content.js` with the structured copy fields
5. Fill in `emails.jsx` with the React component using Giuliano's primitives
6. Fill in `app.jsx` with the artboard entry
7. Open `<Flow Name> Local.html` in a browser to preview
8. Run the bundler: `python3 /root/projects/email-ops/email-design/tools/bundle_standalone.py "<Local.html>" "<standalone>.html"`
9. scp the standalone to cachy for Ayoub's review

## Key Rules

- **Copy is VERBATIM** — never rewrite, shorten, or paraphrase
- **No em dashes (—)** or double hyphens (--) — use commas, periods, line breaks
- **Use € not $** — €34/pair, €30.60 with BRIGHT10, €79.99 bundle
- **Brand tokens** — `B.teal`, `B.ink`, `B.cream`, `B.lime`, `B.yellow` (or window.BRAND.*)
- **Fonts** — `F.main` (Questrial), `F.display` (Fraunces), `F.hand` (Caveat for Lena's signature)
- **Hard shadows only** — 3px 3px 0 / 4px 4px 0 / 6px 6px 0 with `B.ink` color
- **2px solid borders** — `border: 2px solid ${B.ink}`
- **Mobile-first 420px** — use `MW` constant
- **Part badge** — bg #FFD866, rotate -1.5deg (use `PartBadge` primitive)
- **Every CTA** ends with ` →` arrow
- **Lena signoff** — E1 = "BKC team", E2+ = "Lena Bauer"
- **Closing word** — "Talk soon" (E1-E2), "With understanding" (E3-E5), "With care" (E6+)
- **Mechanism before guarantee** in every email
- **Subject line** — must fit one of 6 formulas: Observation, Validation, Mechanism tease, Permission frame, Question, Social proof

## Build → Bundle → Ship

```
Copy:    /root/projects/brightkidco/outputs/copy/<flow>/<file>.md
            ↓
Build:   /root/projects/email-ops/email-design/raw/BKCO - EMAIL MARKETING/<flow>-flow/
            ↓ (fill content.js, emails.jsx, app.jsx)
            ↓
Bundle:  python3 tools/bundle_standalone.py "raw/BKCO - EMAIL MARKETING/<flow>-flow/<Flow> Local.html" "raw/<Flow> _standalone_.html"
            ↓
Output:  /root/projects/email-ops/email-design/raw/<Flow> _standalone_.html
            ↓
Ship:    scp "raw/<Flow> _standalone_.html" ayoub@100.76.121.113:/home/ayoub/Documents/
```

## What This Base Is Ready For

✅ 22 flow folders with the 4-file pattern
✅ Shared primitives, canvas, tokens, illustrations all wired
✅ Consistent load order in every Local.html
✅ All `Local.html` files open in a browser will show the canvas (empty for new flows, populated for welcome-flow)
✅ Bundler is ready at `/root/projects/email-ops/email-design/tools/bundle_standalone.py`

## What's NOT Ready (needs actual building)

❌ The 21 new flow folders have empty `content.js`, `emails.jsx`, `app.jsx` — these need to be filled in from the copy files
❌ Welcome-flow has working emails (10) — the other 21 are empty
❌ No photos are wired into any flow beyond the 28 in `/raw/product-photos/`
❌ Bundler only knows 11 flat-lay photo names (per the plan) — lifestyle/accessory names need to be added

## See Also

- `_TEMPLATE/README.md` — Detailed pattern documentation
- `welcome-flow/` — The only working reference (10 emails built by Giuliano)
- `/root/projects/email-ops/email-design/component-index-v2.md` — 950 components to pick from
- `/root/projects/brightkidco/outputs/copy/` — The .md copy files for all 22 flows (125 emails)
- `/root/projects/email-ops/email-design/tools/bundle_standalone.py` — The bundler
