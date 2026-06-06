# Phase A.2: Autistic-Welcome JSX Analysis

> Source: `/root/projects/brightkidco/raw/BKCO - EMAIL MARKETING/autistic-welcome/`
> Total files: 16 (JSX, JS, HTML)

## Files Inventory

| File | Size | Purpose |
|------|------|---------|
| design-canvas.jsx | 31KB | Figma-like canvas wrapper (infrastructure, not design) |
| email-1.jsx | 13KB | Email 1 — DIFFERENT design approach |
| V10-final.jsx | 14KB | Final version of email |
| variants/content.js | 3KB | Content data (matches canvas.html E1_CONTENT) |
| variants/tokens.js | 875B | Brand tokens (matches canvas.html BRAND) |
| variants/illustrations.jsx | 15KB | SVG illustration components |
| variants/variants-1-3.jsx | 23KB | First 3 variants |
| variants/variants-4-6.jsx | 18KB | Variants 4-6 |
| variants/variants-7-10.jsx | 26KB | Variants 7-10 |
| variants/new-v1-4.jsx | 31KB | New versions 1-4 |
| variants/new-v5-7.jsx | 24KB | New versions 5-7 |
| variants/new-v8-10.jsx | 21KB | New versions 8-10 |
| variants/10 UX Variants.html | 6KB | Compiled HTML |
| variants/10 New UX Variants.html | 3KB | Compiled HTML |
| V10 Final.html | 2KB | Compiled HTML |
| Welcome Flow - Autistic Parent.html | 5KB | Compiled HTML |

---

## Two Different Design Approaches Found

### Approach A: email-1.jsx (Lilac/Purple)

| Token | Value |
|-------|-------|
| Main font | Fraunces (serif) |
| Ink color | #1F3A3D |
| Hero background | lilac gradient (#EEE8F6 → #F6F1FB) |
| Accent color | #7A5FA8 (purple) |
| Title color | #2D2043 (dark purple) |
| Series label | "A letter · 1 of 4" (4 emails) |
| Width | 600px |
| Border radius | 24px |

**Key differences from canvas.html:**
- Different color palette (lilac/purple vs teal/green)
- Different main font (Fraunces vs Questrial)
- Different series length (4 emails vs 6)
- Different width (600px vs 420px)
- Additional colors not in brand system (lilac, mint, purple)

### Approach B: tokens.js + content.js + canvas.html (Teal/Green)

| Token | Value |
|-------|-------|
| Main font | Questrial (sans) |
| Ink color | #1F2D2F |
| Gradient | teal→green (#2BAEB4 → #5DD07A) |
| Series label | "Part 1 of 6" (6 emails) |
| Width | 420px (MW) |
| Border radius | 28px (cards), 999 (badges) |

**This is the CANONICAL brand system** — same as canvas.html.

---

## Component Architecture (from primitives.jsx)

The welcome-flow/ directory contains the SHARED component library:

| Component | Purpose | Key Values |
|-----------|---------|------------|
| ImgFrame | Image placeholder | Dashed teal border, radius: 20 |
| FramedImage | Image wrapper | Black border + ink drop-shadow |
| Band | Gradient transition | Linear gradient between colors |
| Header | Logo placement | Height: 34px, centered |
| PartBadge | Series indicator | Yellow #FFD866, pill, rotated -1.5deg |
| TitleBlock | H1 + badge | 40px, gradient accent |
| Letter | Paragraph stack | 15px, lineHeight: 1.7, warm bg |
| Eyebrow | Section label | 10.5px, uppercase, tealDeep |
| H2 | Section heading | 28px, gradient accent word |
| CTAClose | CTA block | Dark ink background, white text |
| Signoff | Letter close | "With you, Lena Bauer" |
| Footer | Brand footer | Tagline + legal |

---

## Illustrations (from illustrations.jsx, 15KB)

10 custom SVG illustration components — hand-crafted for BKC, not stock imagery.

---

## Variant System

- **10 variants total** (numbered 1-10)
- **Two batches:** variants-1-3, variants-4-6, variants-7-10
- **"New" versions:** new-v1-4, new-v5-7, new-v8-10 (likely revised iterations)
- **All share same content** (content.js) — different UX/layout only

---

## Key Findings

1. **Two conflicting design approaches exist** in the same directory
   - email-1.jsx uses lilac/purple (NOT the brand colors)
   - tokens.js + content.js use teal/green (THE brand colors)
2. **The canonical brand system is teal/green** — confirmed by canvas.html + tokens.js + primitives.jsx
3. **email-1.jsx is an outlier** — different palette, different font, different width, different series length
4. **10 variants exist** for email 1 — extensive A/B testing exploration
5. **Content is SEPARATED from presentation** — content.js defines data, JSX defines layout
6. **Design-canvas.jsx is infrastructure** — the Figma-like wrapper, not the email design itself
7. **All compiled HTML files are small** (2-6KB) — likely wireframes or partial renders
