# BrightKidCo Email Design Brief — THE source of truth for email visual design

> **Written: May 31, 2026**
> **Purpose: So we never have to re-explain this. Read this FIRST before any email design work.**
> **Status: Giuliano's designs exist. Building UNIVERSAL email template library — 300 templates, 120 base sections, reusable for any client.**

---

## 1. CAPTAIN'S BRIEF (verbatim from Ayoub, reformatted)

> **Context:** Previous email designs completely missed Giuliano's branding.
> This is the core brief that drives everything below.

### The problem with old designs
All previous designs **do not use Giuliano's branding at all.** Not even close.
The source of truth is his actual exported file, not our interpretation of brand rules.

### The source of truth
The file `Welcome Flows - 10 Emails _standalone_.html` (in `raw/`) is an **exported HTML from Claude Design.** This is the success criteria — what we measure against. It contains the Figma-like canvas exploration that is needed to review all emails. The final deliverable must have that same canvas interface so it can be presented to Giuliano on a call.

### What Giuliano built
Giuliano made **2 different design systems:**
1. **Flow 1 · Welcome Flow · Autistic Parent** — 6 emails, the primary system to use
2. **Flow 2 · Discount Welcome · BRIGHT10** — 4 emails, pull artifacts from here too

### What we need to do
- Use **Flow 1** as the primary design system
- Pull **all artifacts / contraptions from BOTH flows**
- **Add more artifacts** so every email feels unique — repetitive emails = low click rate = low conversions
- The two main caveats have been: **(1) the branding itself** and **(2) the artifacts / variety**

### The source environment
The exported standalone HTML is a bundled output. The **raw Claude Design source environment** (the JSX components, canvas, content data) lives in the zip files and extracted folders:
- `BKCO - EMAIL MARKETING.zip` / `_extracted/`
- `BKCO - EMAIL MARKETING-2.zip` / `_extracted/`

### Critical rule
**Do not re-explain this.** This file exists so context windows dying doesn't mean re-explaining everything. Read this file first. Everything is here.

---

## 2. WHAT HAPPENED (history)

Previous email designs (in `/tmp/20-emails-final-v2.html` and earlier versions) were **rejected** because:
- They did NOT use Giuliano's actual brand design system
- Used wrong color palette (generic teal/green instead of his specific tokens)
- Used Fraunces font (forbidden per brand rules — Questrial 400 only)
- Sender name was "Lena Bauer" instead of "Lena from BrightKidCo"
- Generic template look — didn't feel like Giuliano's brand at all

**The problem:** We were designing from the brand rules document instead of from Giuliano's actual design files.

---

## 3. THE SOURCE OF TRUTH

### 3.1 Primary file (exported HTML from Claude Design):
```
/root/projects/brightkidco/raw/Welcome Flows - 10 Emails _standalone_.html
```
- **2,322,330 bytes (2.3MB)** bundled React app (minified)
- **183 lines** (heavily bundled/minified — not readable as source)
- Contains BOTH flows rendered in a Figma-like canvas
- This is the file Giuliano exported from his Claude Design environment
- **This is what the final output should look and feel like**

### 3.2 Source JSX files — welcome-flow/ (the main 6+4 email system):
```
/root/projects/brightkidco/raw/BKCO - EMAIL MARKETING_extracted/welcome-flow/
```

| File | Lines | Bytes | What it is |
|------|-------|-------|------------|
| `app.jsx` | 56 | 2,093 | Main app — DesignCanvas + 2 DCSections (Flow 1 + Flow 2) |
| `design-canvas.jsx` | 622 | 31,136 | Figma-like canvas: pan/zoom viewport, sections, artboards, drag-reorder, focus overlay, inline label editing |
| `primitives.jsx` | 275 | 12,855 | 14 shared UI primitives: ImgFrame, FramedImage, Band, Header, PartBadge, TitleBlock, Letter, Eyebrow, H2, CTAClose, Signoff, OutLine, Footer, EmailShell |
| `content.js` | 321 | 18,377 | Flow 1 content data: E2-E6 copy + FLOW1_SHARED (signoff, footer) |
| `content-flow2.js` | 230 | 10,196 | Flow 2 content data: E1-E4 copy + sender info |
| `emails-2-3.jsx` | 302 | 12,302 | Email 2 (Mechanism) + Email 3 (Why Everything Failed) compositions |
| `emails-4-5.jsx` | 296 | 12,317 | Email 4 (Product Works) + Email 5 (Sarah's Story) compositions |
| `email-6.jsx` | 182 | 7,565 | Email 6 (The Invitation / Guarantee) composition |
| `flow2-emails.jsx` | 695 | 26,861 | Flow 2 all 4 emails (Code Delivery, Mechanism, Parent Story, Guarantee Closer) + new primitives (CodeBlock, ReminderBar, etc.) |
| `product-showcase.jsx` | 270 | 11,633 | 3 product showcase variants: Full, Medium, Soft |
| `Welcome Flows - 10 Emails.html` | — | 2,547 | Non-standalone HTML wrapper (loads from relative paths) |

**Total: 3,249 lines of JSX source code**

Also duplicated in:
```
/root/projects/brightkidco/raw/BKCO - EMAIL MARKETING-2_extracted/welcome-flow/
```
(The `-2` version appears to be a second iteration or backup — files are identical)

### 3.3 Source JSX files — autistic-welcome/ (Email 1 + 10 UX variants):
```
/root/projects/brightkidco/raw/BKCO - EMAIL MARKETING_extracted/autistic-welcome/
```

| File | Lines | Bytes | What it is |
|------|-------|-------|------------|
| `V10-final.jsx` | 279 | 14,374 | **THE final Email 1** — story-book style, uses shared primitives |
| `email-1.jsx` | 446 | 13,153 | **Earlier Email 1 version** — DIFFERENT design (600px, Fraunces primary, different ink color #1F3A3D) |
| `design-canvas.jsx` | 622 | 31,136 | Same canvas component (duplicate) |
| `Welcome Flow - Autistic Parent.html` | — | 5,014 | Standalone HTML for autistic welcome only |
| `V10 Final.html` | — | 1,838 | Standalone HTML for V10 only |

### 3.4 Source JSX files — autistic-welcome/variants/ (10 UX variants + illustrations):
```
/root/projects/brightkidco/raw/BKCO - EMAIL MARKETING_extracted/autistic-welcome/variants/
```

| File | Lines | Bytes | What it is |
|------|-------|-------|------------|
| `content.js` | 62 | 3,095 | **E1 content data** (window.E1_CONTENT) — creed, steps, quote, CTA |
| `tokens.js` | 29 | 875 | **BRAND + FONT token definitions** (window.BRAND, window.FONT) |
| `illustrations.jsx` | 311 | 14,939 | **10 SVG illustration components** (see Section 5.5) |
| `variants-1-3.jsx` | — | 22,656 | UX variants 1-3 |
| `variants-4-6.jsx` | — | 17,887 | UX variants 4-6 |
| `variants-7-10.jsx` | — | 26,231 | UX variants 7-10 |
| `new-v1-4.jsx` | — | 30,582 | New UX variants 1-4 |
| `new-v5-7.jsx` | — | 23,521 | New UX variants 5-7 |
| `new-v8-10.jsx` | — | 20,956 | New UX variants 8-10 |
| `10 UX Variants.html` | — | 6,396 | Standalone HTML for original 10 variants |
| `10 New UX Variants.html` | — | 3,371 | Standalone HTML for new 10 variants |

**Key insight:** The `variants/` folder contains **10 different UX explorations** of Email 1, each with a different visual layout but the same copy. These are design alternatives — not different emails. The `illustrations.jsx` provides SVG illustrations that can replace the dashed placeholder frames.

### 3.5 Zipped source:
```
/root/projects/brightkidco/raw/BKCO - EMAIL MARKETING.zip
/root/projects/brightkidco/raw/BKCO - EMAIL MARKETING-2.zip
```

---

## 4. GIULIANO'S TWO DESIGN SYSTEMS

### Flow 1 · Welcome Flow · Autistic Parent (6 emails) ← PRIMARY USE THIS
### Flow 2 · Discount Welcome · BRIGHT10 (4 emails) ← USE ARTIFACTS FROM HERE TOO

Giuliano wants us to:
1. **Use Flow 1 as the primary design system** (colors, layout, typography, feel)
2. **Pull ALL artifacts/contraptions from BOTH flows** (code blocks, comparison cards, product showcases, etc.)
3. **Add MORE artifacts** so emails aren't repetitive (low click rate = low conversions)
4. Goal: professional, legitimate brand feel — not generic template spam

### 4.1 Flow 1 structure (6 emails):

```
┌────────┬────────────┬───────────────────────────────────────────────────────────┐
│ EMAIL  │ TIMING     │ THEME                                                     │
├────────┼────────────┼───────────────────────────────────────────────────────────┤
│ E1     │ Immediate  │ Permission & Reassurance — "You haven't done anything     │
│        │            │ wrong." Creed stickers, step cards, parent quote.         │
│        │            │ Source: V10-final.jsx + E1_CONTENT                        │
├────────┼────────────┼───────────────────────────────────────────────────────────┤
│ E2     │ +24 hours  │ The Mechanism — interoception explained. Sticker          │
│        │            │ reasons, comparison cards, expert OT quote.               │
│        │            │ Source: emails-2-3.jsx + FLOW1.e2                         │
├────────┼────────────┼───────────────────────────────────────────────────────────┤
│ E3     │ +2 days    │ Why Everything Failed — absolution. 4 method cards        │
│        │            │ (promise vs reality), reframe, parent quote.              │
│        │            │ Source: emails-2-3.jsx + FLOW1.e3                         │
├────────┼────────────┼───────────────────────────────────────────────────────────┤
│ E4     │ +4 days    │ How the Product Works — soft reveal. 3 layer cards,       │
│        │            │ feel/for-you checklists, objections, full product         │
│        │            │ showcase. Source: emails-4-5.jsx + FLOW1.e4               │
├────────┼────────────┼───────────────────────────────────────────────────────────┤
│ E5     │ +6 days    │ Sarah's Story — deep proof. 4 chapter cards, pull-quote,  │
│        │            │ why section, medium product showcase.                     │
│        │            │ Source: emails-4-5.jsx + FLOW1.e5                         │
├────────┼────────────┼───────────────────────────────────────────────────────────┤
│ E6     │ +8 days    │ The Invitation — 60-day guarantee. 60-Day Seal,           │
│        │            │ guarantee cards, covered checklist, full product          │
│        │            │ showcase, closing letter.                                 │
│        │            │ Source: email-6.jsx + FLOW1.e6                            │
└────────┴────────────┴───────────────────────────────────────────────────────────┘
```

### 4.2 Flow 2 structure (4 emails):

```
┌────────┬────────────┬───────────────────────────────────────────────────────────┐
│ EMAIL  │ TIMING     │ THEME                                                     │
├────────┼────────────┼───────────────────────────────────────────────────────────┤
│ F2-E1  │ Immediate  │ Code Delivery — BRIGHT10 code, what's next timeline,       │
│        │            │ differentiation paragraph, trust badges.                  │
├────────┼────────────┼───────────────────────────────────────────────────────────┤
│ F2-E2  │ +36 hours  │ Mechanism — interoception explained (discount context),   │
│        │            │ comparison strip, OT quote, code reminder.                │
├────────┼────────────┼───────────────────────────────────────────────────────────┤
│ F2-E3  │ +3 days    │ Parent Story — Sarah/Marcus timeline (3 years),           │
│        │            │ pull-quote, promise badges, code reminder.                │
├────────┼────────────┼───────────────────────────────────────────────────────────┤
│ F2-E4  │ +2 days    │ Guarantee Closer — 60-day promise, covered/not covered,   │
│        │            │ counter-testimonial (return story), code expiry.          │
└────────┴────────────┴───────────────────────────────────────────────────────────┘
```

### 4.3 Content data architecture:

```
window.E1_CONTENT          ← E1 copy (creed, steps, quote, CTA)
                              Defined in: autistic-welcome/variants/content.js

window.FLOW1 = { e2, e3, e4, e5, e6 }  ← E2-E6 copy
                              Defined in: welcome-flow/content.js

window.FLOW1_SHARED = { signoff, out, footer }  ← Shared across Flow 1
                              Defined in: welcome-flow/content.js

window.FLOW2 = { sender, e1, e2, e3, e4 }  ← Flow 2 copy
                              Defined in: welcome-flow/content-flow2.js
```

---

## 5. BRAND TOKENS (from Giuliano's tokens.js)

**Source:** `/root/projects/brightkidco/raw/BKCO - EMAIL MARKETING_extracted/autistic-welcome/variants/tokens.js`

These are GUILIANO'S ACTUAL colors — not the brand rules doc colors.

### 5.1 Core brand tokens:

```javascript
window.BRAND = {
  teal:       "#2BAEB4",     // Primary accent — used everywhere
  tealDeep:   "#1E8A8F",     // Eyebrow text, deep accent links
  green:      "#5DD07A",     // Secondary accent, checkmarks, success
  greenDeep:  "#3BB35E",     // Deep green (rarely used directly)
  ink:        "#1F2D2F",     // Dark text, borders, CTA backgrounds
  soft:       "#4A6568",     // Body text, secondary paragraphs
  muted:      "#8A9B9D",     // Tertiary text, fine print, timestamps
  cream:      "#FBF7F1",     // Light warm backgrounds
  paper:      "#FFFFFF",     // White backgrounds, card interiors
  gradient:   "linear-gradient(135deg, #2BAEB4 0%, #5DD07A 100%)",  // THE brand gradient
  gradientText: {             // CSS-in-JS object for gradient text
    background: "linear-gradient(135deg, #2BAEB4 0%, #5DD07A 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    color: "transparent",
  },
};

window.FONT = {
  main:    "'Questrial', system-ui, sans-serif",     // Body text everywhere
  display: "'Fraunces', Georgia, serif",              // Serif accent headings
};
```

### 5.2 Extended palette (used across emails, not in tokens.js):

```
┌───────────┬─────────────────────────────────────────────────────────────┐
│ HEX       │ USE                                                       │
├───────────┼─────────────────────────────────────────────────────────────┤
│ #FFD866   │ Yellow accent — part badges, quote cards, guarantee        │
│           │ stickers, parent quote backgrounds, step accents           │
│ #D8F57C   │ Lime green — CTA BUTTONS on dark backgrounds ONLY         │
│ #FFB5A0   │ Soft coral — sticker accent color (E2 reframe points)     │
│ #E8A23D   │ Amber/gold — number circle accents, layer card accents    │
│ #FFFBF0   │ Warm off-white — hero section backgrounds                 │
│ #FFF6E2   │ Warm cream — letter section backgrounds                   │
│ #EAF6F2   │ Soft mint — science/reframe section backgrounds           │
│ #F0EDF8   │ Soft lavender — product section backgrounds               │
│ #FFFDF6   │ Paper white — card interiors (slightly warmer than white) │
│ #FAF7F0   │ Light warm gray — code block backgrounds                  │
│ #1F2A2C   │ Dark (lighter than ink) — signoff card background         │
│ #2F3D40   │ Border color on signoff card                              │
│ #3A4547   │ Dashed divider lines in signoff                           │
│ #B8CACD   │ Light text on dark backgrounds (CTA intro, signoff)       │
│ #8FAFB2   │ Muted text in signoff (name label, role)                  │
│ #FFF2D8   │ Warm yellow tint — step 2 background (V10)                │
│ #E6F7E9   │ Soft green tint — step 1 background (V10)                 │
│ #EAF4F5   │ Soft teal tint — step 3 background (V10)                  │
│ #FFE8D6   │ Warm peach — illustration background (Illu_GentleMorning) │
│ #E8F5EC   │ Light green — illustration background (Illu_Letter)       │
│ #EEE8F6   │ Light lilac — illustration background (Illu_QuietRoom)    │
│ #E8F0FC   │ Light blue — illustration background (Illu_ProductPants)  │
│ #D4F0E4   │ Soft seafoam — illustration background (Illu_Airplane)    │
│ #FFE8E0   │ Soft red tint — pull-ups comparison card stripe           │
│ #F3EADF   │ Warm beige — regular underwear comparison card stripe     │
│ #FFF2D8   │ Warm yellow — method card image bg (naked training)       │
└───────────┴─────────────────────────────────────────────────────────────┘
```

### 5.3 Color usage patterns:

```
SECTION TYPE          BACKGROUND    ACCENT        TEXT
──────────────────────────────────────────────────────────
Hero (opening)        #FFFBF0       gradient      ink
Letter (personal)     #FFF6E2       —             soft
Science/Reframe       #EAF6F2       tealDeep      ink/soft
Product reveal        #F0EDF8       teal/green    ink/soft
Parent quote          #FFD866       ink           ink
Step cards            #E6F7E9 etc   green/amber   ink
CTA (dark)            #1F2D2F       #D8F57C btn   #B8CACD intro
Signoff card          #1F2A2C       #D8F57C sig   #B8CACD/#8FAFB2
Footer                #FFFFFF       gradient bar  ink/muted
```

### 5.4 Design rules:

```
┌─────────────────┬──────────────────────────────────────────────┐
│ RULE            │ VALUE                                        │
├─────────────────┼──────────────────────────────────────────────┤
│ Email width     │ 420px fixed (MW constant)                    │
│ Borders         │ 2px solid #1F2D2F (ink) on cards/images      │
│ Box shadows     │ 3px 3px 0 #1F2D2F (small) or                │
│                 │ 4px 4px 0 #1F2D2F (medium) or                │
│                 │ 6px 6px 0 #1F2D2F (hero images)              │
│                 │ ALL hard — NO blur, NO rgba                   │
│ Border radius   │ 14px (small cards), 16-18px (medium),        │
│                 │ 20-24px (large cards/hero), 999px (badges)   │
│ CTA button      │ bg: #D8F57C, color: #1F2D2F, radius: 999px  │
│ CTA on dark     │ bg: #D8F57C, color: ink, font: 15.5px bold   │
│ Gradient text   │ 135deg #2BAEB4 → #5DD07A, background-clip   │
│ Part badge      │ bg: #FFD866, border: 2px solid ink,          │
│                 │ radius: 999, rotate: -1.5deg                  │
│ Canvas bg       │ #f0eee9 with 120px grid pattern              │
│ Sticker rotate  │ -1deg to +1deg (slight tilt = playful)       │
│ Transition band │ linear-gradient(180deg, ${from} 0%, ${to} 100%) │
│ Sender (FROM)   │ "Lena from BrightKidCo" (per brand rules)    │
│ Guarantee       │ 60 days. NEVER 30.                           │
└─────────────────┴──────────────────────────────────────────────┘
```

### 5.5 Font conflict — RESOLUTION:

```
BRAND RULES DOC says:     "Questrial weight 400 only. NOT Fraunces."
GIULIANO'S DESIGNS use:    Fraunces for display headings, Questrial for body

EVIDENCE:
  - tokens.js defines BOTH: main='Questrial', display='Fraunces'
  - V10-final.jsx: fontFamily: Fv.main (Questrial)
  - email-1.jsx (earlier): fontFamily: "'Fraunces', Georgia, serif" (600px version)
  - All Flow 1 emails (E2-E6): fontFamily: F.main (Questrial)
  - H2 headings in E2-E6: use font from EmailShell (Questrial)
  - Footer tagline: F.display (Fraunces)
  - Signoff card: Caveat (handwritten) for signature

RESOLUTION: Follow Giuliano's actual design system:
  - Body text: Questrial (everywhere)
  - Display headings: Fraunces (sparingly — footer tagline, some H1s)
  - Handwritten: Caveat (Lena's signature only)
  - The brand rules doc may be outdated or refer to Klaviyo-specific constraints
```

### 5.6 Signoff name — RESOLUTION:

```
GIULIANO'S DESIGNS have 3 different signoff names:
  E1 (V10-final):     name: "The BrightKidCo team"  (we/our)
  E2-E6 (FLOW1_SHARED): name: "Lena Bauer"           (I/my)
  Flow 2 (sender):      name: "Lena"                  (first name only)

BRAND RULES DOC says:
  From Name: "Lena from BrightKidCo"
  Sign-off: varies by email position (Talk soon / With understanding / With care)
  "I have two autistic sons" — Lena voice, trust builder

RESOLUTION:
  - FROM name (inbox): "Lena from BrightKidCo" (per brand rules)
  - Signoff card in email body: Follow Giuliano's actual design
    - E1: "The BrightKidCo team" (we/our — first touch, not yet personal)
    - E2-E6: "Lena Bauer" (I/my — builds personal relationship)
    - Flow 2: "Lena" (casual first name)
  - P.S. line: Always personal, always human
```

---

## 6. ALL ARTIFACTS / CONTRAPTIONS (the building blocks)

### 6.1 From primitives.jsx (shared across all emails):

```
┌─────────────────────┬─────────────────────────────────────────────────────────┐
│ ARTIFACT            │ WHAT IT DOES                                            │
├─────────────────────┼─────────────────────────────────────────────────────────┤
│ ImgFrame            │ Dashed teal border image placeholder with 4 corner      │
│                     │ marks (SVG) + picture icon + label + sublabel.          │
│                     │ Props: height, label, sublabel, radius, aspect          │
├─────────────────────┼─────────────────────────────────────────────────────────┤
│ FramedImage         │ Wraps ImgFrame with ink border + hard drop-shadow.      │
│                     │ Props: children, height, label, sublabel, shadow        │
├─────────────────────┼─────────────────────────────────────────────────────────┤
│ Band                │ Gradient transition band between color sections.        │
│                     │ Props: from (hex), to (hex), height (default 40)        │
├─────────────────────┼─────────────────────────────────────────────────────────┤
│ Header              │ BrightKidCo logo centered at top. Props: bg             │
├─────────────────────┼─────────────────────────────────────────────────────────┤
│ PartBadge           │ Yellow (#FFD866) sticker with ink border, 999 radius,   │
│                     │ -1.5deg rotation. "✿ Part one of six" style.            │
├─────────────────────┼─────────────────────────────────────────────────────────┤
│ TitleBlock          │ Combines PartBadge + H1 (40px, bold, -0.8 letter-       │
│                     │ spacing) + gradient accent word + optional subhead.     │
│                     │ Props: badge, part1, part2, accent2, subhead            │
├─────────────────────┼─────────────────────────────────────────────────────────┤
│ Letter              │ Paragraph stack with warm background. First para can    │
│                     │ be bold/highlighted. Props: bg, paras[], first          │
├─────────────────────┼─────────────────────────────────────────────────────────┤
│ Eyebrow             │ Small uppercase label (10.5px, 2px letter-spacing,      │
│                     │ tealDeep, bold). Props: children, color                 │
├─────────────────────┼─────────────────────────────────────────────────────────┤
│ H2                  │ Section heading (28px default, bold, -0.4 spacing).     │
│                     │ Props: children, center, size                           │
├─────────────────────┼─────────────────────────────────────────────────────────┤
│ CTAClose            │ Dark ink background section with intro text (muted      │
│                     │ light), CTA button (lime #D8F57C, 999 radius),          │
│                     │ fine print. Props: intro, button, fine, bg              │
├─────────────────────┼─────────────────────────────────────────────────────────┤
│ Signoff             │ Lena's personal card: avatar circle (gradient ring +    │
│                     │ SVG portrait placeholder), "A note from" label,         │
│                     │ name, role, handwritten "Lena" in Caveat font (lime     │
│                     │ #D8F57C), flourish SVG, P.S. line. Dark bg card.        │
│                     │ Reads from window.FLOW1_SHARED.signoff                  │
├─────────────────────┼─────────────────────────────────────────────────────────┤
│ OutLine             │ "You can pause this series anytime. Come back when      │
│                     │ you're ready." — italic, muted, centered.               │
├─────────────────────┼─────────────────────────────────────────────────────────┤
│ Footer              │ Tagline in Fraunces italic, 3 nav links, social icons   │
│                     │ (Instagram, Facebook, TikTok SVGs), unsubscribe,        │
│                     │ address, gradient divider bar. Reads from               │
│                     │ window.FLOW1_SHARED.footer                              │
├─────────────────────┼─────────────────────────────────────────────────────────┤
│ EmailShell          │ 420px wrapper with preheader bar (italic, muted,        │
│                     │ cream bg). Props: children, preheader, bg               │
└─────────────────────┴─────────────────────────────────────────────────────────┘
```

### 6.2 From product-showcase.jsx (3 product placement variants):

```
┌───────────────────────┬───────────────────────────────────────────────────────┐
│ ARTIFACT              │ WHAT IT DOES                                          │
├───────────────────────┼───────────────────────────────────────────────────────┤
│ ProductShowcaseFull   │ Hero product moment. Structure:                       │
│                       │  • Eyebrow + H2 + sub text                            │
│                       │  • Large card (24px radius, 6px shadow):               │
│                       │    - Hero image (300px) with floating guarantee badge  │
│                       │    - Name + price row                                  │
│                       │    - Feature pills (3: BSL, 60-day, sensory-friendly) │
│                       │    - Full-width CTA button (ink bg, lime text)        │
│                       │    - Micro trust line                                  │
│                       │  • 2-up sub row: colourway + size range cards         │
│                       │ Props: eyebrow, title, titleAccent, sub, priceFrom,   │
│                       │        priceNote, features, ctaButton, guaranteeBadge │
│                       │ Used in: E4, E6                                       │
├───────────────────────┼───────────────────────────────────────────────────────┤
│ ProductShowcaseMedium │ Side-by-side card: image (140px left) + info (right). │
│                       │ Eyebrow, title, price, guarantee note, CTA button.    │
│                       │ Props: eyebrow, title, priceFrom, ctaButton           │
│                       │ Used in: E5                                           │
├───────────────────────┼───────────────────────────────────────────────────────┤
│ ProductShowcaseSoft   │ Tiny dashed-border (teal) card. Thumb icon (60px      │
│                       │ SVG) + eyebrow + line + text link CTA. Not pushy.     │
│                       │ Props: eyebrow, line, ctaText                         │
│                       │ Used in: E2, E3                                       │
└───────────────────────┴───────────────────────────────────────────────────────┘
```

### 6.3 From flow2-emails.jsx (Flow 2 specific primitives + compositions):

```
┌───────────────────────┬───────────────────────────────────────────────────────┐
│ ARTIFACT              │ WHAT IT DOES                                          │
├───────────────────────┼───────────────────────────────────────────────────────┤
│ CodeBlock             │ Big discount code display. Gradient top bar, label,   │
│                       │ dashed-border monospace code (34px), note.            │
│                       │ Compact mode available. Props: code, label, note,     │
│                       │ bg, compact                                           │
│                       │ Used in: F2-E1 (hero), refs in F2-E2-4                │
├───────────────────────┼───────────────────────────────────────────────────────┤
│ ReminderBar           │ Compact code reminder strip (inline with other        │
│                       │ content). Props: label, body                          │
│                       │ Used in: F2-E2, F2-E3, F2-E4                          │
├───────────────────────┼───────────────────────────────────────────────────────┤
│ WhatsNextTimeline     │ "What comes next" vertical timeline with when/what    │
│                       │ rows, connected by gradient line.                     │
│                       │ Used in: F2-E1                                        │
├───────────────────────┼───────────────────────────────────────────────────────┤
│ ComparisonStrip       │ 3-column comparison cards (pull-ups / regular /       │
│                       │ body-signal) with colored headers + check/cross.      │
│                       │ Used in: F2-E2                                        │
├───────────────────────┼───────────────────────────────────────────────────────┤
│ PromiseBadges         │ Row of trust badges (star, guarantee, parent-to-      │
│                       │ parent) with icons.                                   │
│                       │ Used in: F2-E3                                        │
├───────────────────────┼───────────────────────────────────────────────────────┤
│ CoveredChecklist      │ Two-list layout: "What's covered" (green checks) +    │
│                       │ "What's NOT" (no hidden fees, no exceptions).         │
│                       │ Used in: F2-E4                                        │
├───────────────────────┼───────────────────────────────────────────────────────┤
│ CounterTestimonial    │ Return story for honesty. Framing note underneath.    │
│                       │ Used in: F2-E4                                        │
└───────────────────────┴───────────────────────────────────────────────────────┘
```

### 6.4 From individual email compositions (V10-final, E2-E6):

```
┌───────────────────────┬──────────┬────────────────────────────────────────────┐
│ ARTIFACT              │ SOURCE   │ WHAT IT DOES                               │
├───────────────────────┼──────────┼────────────────────────────────────────────┤
│ Creed stickers        │ V10 (E1) │ 3 tilted colored stickers (teal, green,   │
│                       │          │ coral) with core beliefs. Ink border,      │
│                       │          │ hard shadow, -1° to +0.8° rotation.        │
├───────────────────────┼──────────┼────────────────────────────────────────────┤
│ Step cards            │ V10 (E1) │ 3 cards with image placeholder + number    │
│                       │          │ circle (accent color) + title + body.      │
│                       │          │ Each has different bg tint (green/yellow/  │
│                       │          │ teal) and accent color.                    │
├───────────────────────┼──────────┼────────────────────────────────────────────┤
│ Parent quote (yellow) │ V10 (E1) │ Yellow (#FFD866) background card, 20px    │
│                       │ E2, E3   │ radius, ink border, 4px shadow, slight    │
│                       │          │ rotation (-0.3° to -0.5°). Big quote mark │
│                       │          │ + italic text + attribution.               │
├───────────────────────┼──────────┼────────────────────────────────────────────┤
│ Sticker reasons       │ E2       │ 4 colored sticker-style reframe points.    │
│                       │          │ Each different color (coral, teal, green,  │
│                       │          │ yellow) + slight rotation + ink border.    │
├───────────────────────┼──────────┼────────────────────────────────────────────┤
│ Comparison cards      │ E2       │ 3 cards: Pull-ups (red stripe, ✕),        │
│                       │          │ Regular (beige stripe, ✕), BSL (gradient  │
│                       │          │ stripe, ✓). Each has colored header bar    │
│                       │          │ + body text. Green border on BSL card.     │
├───────────────────────┼──────────┼────────────────────────────────────────────┤
│ Expert quote card     │ E2       │ White card (20px radius, 4px shadow) with  │
│                       │          │ tealDeep eyebrow, big teal quote mark,     │
│                       │          │ italic body, attribution.                  │
├───────────────────────┼──────────┼────────────────────────────────────────────┤
│ Method cards          │ E3       │ 4 cards with image placeholder + number    │
│                       │          │ circle + name + "The promise" (muted) +    │
│                       │          │ "What actually happens" (tealDeep).        │
│                       │          │ Each has different accent color.           │
├───────────────────────┼──────────┼────────────────────────────────────────────┤
│ Reframe section       │ E3       │ Centered H2 "None of this is your fault"   │
│                       │          │ with gradient accent. 4 paragraphs, last   │
│                       │          │ one bold + centered. Mint bg.              │
├───────────────────────┼──────────┼────────────────────────────────────────────┤
│ Layer cards           │ E4       │ 3 product layer cards: image + number      │
│                       │          │ circle (teal/green/amber) + name + "what"  │
│                       │          │ (muted) + "does" (ink). Each different bg. │
├───────────────────────┼──────────┼────────────────────────────────────────────┤
│ Feel/ForYou lists     │ E4       │ Green checkmark lists with teal dividers.  │
│                       │          │ Eyebrow + H2 with gradient accent word.    │
├───────────────────────┼──────────┼────────────────────────────────────────────┤
│ Objection Q&A         │ E4       │ Stacked Q&A blocks with teal dividers.     │
│                       │          │ Bold question + regular answer.            │
├───────────────────────┼──────────┼────────────────────────────────────────────┤
│ Chapter cards         │ E5       │ 4 story chapter cards: image + Eyebrow     │
│                       │          │ (Chapter N · label) + italic H3 title +    │
│                       │          │ body text. White bg, ink border, shadow.   │
├───────────────────────┼──────────┼────────────────────────────────────────────┤
│ Pull-quote            │ E5       │ Large centered quote (22px italic), big    │
│                       │          │ teal quote mark (48px), gradient divider   │
│                       │          │ bar underneath. Mint bg.                   │
├───────────────────────┼──────────┼────────────────────────────────────────────┤
│ Why section           │ E5       │ Eyebrow + paragraph explaining why this    │
│                       │          │ story was chosen. Warm white bg.           │
├───────────────────────┼──────────┼────────────────────────────────────────────┤
│ 60-Day Seal           │ E6       │ 200px circle: white bg, 3px ink border,    │
│                       │          │ 6px shadow. Rotating ring text (SVG        │
│                       │          │ textPath: "Calm Progress · No Questions ·  │
│                       │          │ Real Returns · Sixty Full Days"). Big "60" │
│                       │          │ in gradient text. "Calm Days" label.       │
├───────────────────────┼──────────┼────────────────────────────────────────────┤
│ Guarantee point cards │ E6       │ 3 cards with colored sidebar (teal/green/  │
│                       │          │ amber) + checkmark + title + body.         │
│                       │          │ Each card has ink border + shadow.         │
├───────────────────────┼──────────┼────────────────────────────────────────────┤
│ Covered checklist     │ E6       │ List items with circle-gradient checkmark  │
│                       │          │ badges (22px, teal→green gradient bg).     │
│                       │          │ Teal dividers between items.               │
├───────────────────────┼──────────┼────────────────────────────────────────────┤
│ Dashed quote box      │ E6       │ Dashed teal border (2px), 14px radius,     │
│                       │          │ cream bg, italic text, bold policy quote.  │
├───────────────────────┼──────────┼────────────────────────────────────────────┤
│ Closing letter        │ E6       │ Final warm paragraphs. Last para bold.     │
│                       │          │ Middle para italic. Warm cream bg.         │
└───────────────────────┴──────────┴────────────────────────────────────────────┘
```

### 6.5 SVG Illustration Library (illustrations.jsx — 10 components):

These are **actual SVG illustrations** that can replace the dashed ImgFrame placeholders. Each is a React component that renders inline SVG using brand colors.

```
┌─────────────────────────┬─────────────────────────────────────────────────────┐
│ COMPONENT               │ SCENE                                               │
├─────────────────────────┼─────────────────────────────────────────────────────┤
│ Illu_GentleMorning      │ Parent + child silhouettes, sunrise, soft hills     │
│ Illu_Letter             │ Opened letter with confetti, sealed heart           │
│ Illu_QuietRoom          │ Calm room scene (lavender bg)                       │
│ Illu_Hands              │ Hands reaching/touching (warm yellow bg)            │
│ Illu_ProductPants       │ Product pants illustration (light blue bg)          │
│ Illu_Airplane           │ Airplane/movement scene (seafoam bg)                │
│ Illu_Signal             │ Body signal visualization (light green bg)          │
│ Illu_Sensory            │ Sensory experience scene (warm yellow bg)           │
│ Illu_CalmSun            │ Calm sun with gradient (white bg)                   │
│ Illu_QuoteBadge         │ Quote badge/sticker illustration (warm gray bg)     │
└─────────────────────────┴─────────────────────────────────────────────────────┘

Style: friendly, rounded, kid-brand. Uses brand teal (#2BAEB4) + green (#5DD07A)
       + warm accents (#FFD866, #FFB5A0). Character-strong — NOT placeholder look.
Each accepts {width, height, bg} props.
```

---

## 7. DESIGN-CANVAS COMPONENT (the Figma-like UI)

**Source:** `design-canvas.jsx` (622 lines, 31KB)

### 7.1 Features:

```
┌─────────────────────────┬─────────────────────────────────────────────────────┐
│ FEATURE                 │ HOW IT WORKS                                        │
├─────────────────────────┼─────────────────────────────────────────────────────┤
│ Pan/Zoom viewport       │ Trackpad pinch = zoom, two-finger scroll = pan,     │
│                         │ mouse wheel = zoom (notched), middle-drag = pan,    │
│                         │ primary-drag-on-bg = pan. Safari gesture events.    │
│                         │ Scale range: 0.1x to 8x. Transform via translate3d │
│                         │ + will-change for 60fps.                            │
├─────────────────────────┼─────────────────────────────────────────────────────┤
│ Grid background         │ #f0eee9 bg, 120px grid pattern (SVG data URI),     │
│                         │ pointer-events: none, z-index: -1                   │
├─────────────────────────┼─────────────────────────────────────────────────────┤
│ Sections (DCSection)    │ Editable title (contentEditable), subtitle, h-row   │
│                         │ of artboards. Section order persisted.              │
├─────────────────────────┼─────────────────────────────────────────────────────┤
│ Artboards (DCArtboard)  │ 420px wide cards with labels. Grip handle for       │
│                         │ drag-to-reorder. Click label to focus. Expand       │
│                         │ button on hover.                                    │
├─────────────────────────┼─────────────────────────────────────────────────────┤
│ Drag-reorder            │ Grip-drag slides siblings into slot positions in    │
│                         │ real-time. DOM order changes only on drop. Scale-   │
│                         │ aware (works at any zoom level). 180ms settle.      │
├─────────────────────────┼─────────────────────────────────────────────────────┤
│ Focus overlay           │ Click artboard → fullscreen overlay with backdrop    │
│                         │ blur. ←/→ to navigate within section, ↑/↓ to jump  │
│                         │ sections. Esc or backdrop click to exit.            │
│                         │ Auto-scales to fit viewport. Section dropdown.      │
├─────────────────────────┼─────────────────────────────────────────────────────┤
│ Inline label editing    │ contentEditable on labels + section titles.         │
│                         │ Commits on blur or Enter.                           │
├─────────────────────────┼─────────────────────────────────────────────────────┤
│ State persistence       │ Reads/writes .design-canvas.state.json sidecar      │
│                         │ via window.omelette bridge. Hydrates on load.       │
└─────────────────────────┴─────────────────────────────────────────────────────┘
```

### 7.2 Canvas hierarchy:

```
DesignCanvas
├── DCViewport (pan/zoom transform container)
│   ├── Grid (absolute positioned, pointer-events: none)
│   └── DCSection[] (each flow = one section)
│       ├── Editable title
│       └── DCArtboardFrame[] (horizontal row of emails)
│           ├── Grip handle (drag to reorder)
│           ├── Label (editable, click to focus)
│           ├── Expand button (hover visible)
│           └── Card (420px, overflow hidden)
│               └── Email component (the actual email)
└── DCFocusOverlay (portal to body, fixed position)
    ├── Top bar: section dropdown + close
    ├── Left/Right arrows (within section)
    └── Scaled artboard (auto-fit to viewport)
```

---

## 8. UNIVERSAL EMAIL TEMPLATE SYSTEM — THE BIG BUILD

### 8.1 The evolution:
```
  Original ask:     20 templates for BrightKidCo
  First expansion:  50 templates, 350 sections
  Final scope:      300 templates, UNIVERSAL — any e-commerce client
  
  Why: We build every email pattern ONCE. Next client? Pick, swap, ship.
```

### 8.2 The numbers:
```
  300 templates × 7 artifacts each = 2,100 section instances
  Built from 120 base section patterns × color/intensity variations
  Each template = unique recipe (no two identical)
  Output = single HTML + Figma-like canvas
```

---

## 9. ALL E-COMMERCE EMAIL TYPES (300 templates)

```
┌────┬──────────────────────────┬─────┬──────────────────────────────────────┐
│ #  │ CATEGORY                 │ TPL │ WHAT IT COVERS                       │
├────┼──────────────────────────┼─────┼──────────────────────────────────────┤
│  1 │ Welcome / Onboard        │  30 │ 10 flows × 3 tone variants          │
│    │                          │     │ (warm / clinical / playful)          │
├────┼──────────────────────────┼─────┼──────────────────────────────────────┤
│  2 │ Abandonment              │  30 │ Cart/checkout/browse/site ×          │
│    │                          │     │ urgency levels (soft/medium/hard)    │
├────┼──────────────────────────┼─────┼──────────────────────────────────────┤
│  3 │ Transactional            │  20 │ Order confirm/shipping/OFD/          │
│    │                          │     │ delivered/exchange/refund            │
├────┼──────────────────────────┼─────┼──────────────────────────────────────┤
│  4 │ Post-Purchase Education  │  25 │ Day 0/3/7/14/21/30/60 guides        │
│    │                          │     │ + how-to + tips                      │
├────┼──────────────────────────┼─────┼──────────────────────────────────────┤
│  5 │ Upsell / Cross-sell      │  25 │ Direct/extended/replenish/           │
│    │                          │     │ bundle/accessory/subscription        │
├────┼──────────────────────────┼─────┼──────────────────────────────────────┤
│  6 │ Retention / Loyalty      │  20 │ VIP/rewards/milestone/birthday/      │
│    │                          │     │ anniversary/points                   │
├────┼──────────────────────────┼─────┼──────────────────────────────────────┤
│  7 │ Promotional              │  35 │ Flash sale/seasonal/launch/          │
│    │                          │     │ pre-order/back-in-stock/             │
│    │                          │     │ limited edition/clearance            │
├────┼──────────────────────────┼─────┼──────────────────────────────────────┤
│  8 │ Winback / Re-engage      │  25 │ Miss you/new stuff/last try/         │
│    │                          │     │ at-risk/sunset/final                 │
├────┼──────────────────────────┼─────┼──────────────────────────────────────┤
│  9 │ Social Proof / UGC       │  20 │ Review request/UGC showcase/         │
│    │                          │     │ referral/testimonial/story           │
├────┼──────────────────────────┼─────┼──────────────────────────────────────┤
│ 10 │ Informational            │  25 │ Newsletter/tips/education/           │
│    │                          │     │ blog/content/announcement            │
├────┼──────────────────────────┼─────┼──────────────────────────────────────┤
│ 11 │ Special Occasion         │  20 │ Birthday/holiday/seasonal/           │
│    │                          │     │ gratitude/milestone                  │
├────┼──────────────────────────┼─────┼──────────────────────────────────────┤
│ 12 │ Survey / Feedback        │  10 │ NPS/review/product feedback/         │
│    │                          │     │ preference/quiz                      │
├────┼──────────────────────────┼─────┼──────────────────────────────────────┤
│ 13 │ Transactional Adjacent   │  15 │ Referral/loyalty points/             │
│    │                          │     │ account/update/payment               │
├────┴──────────────────────────┼─────┼──────────────────────────────────────┤
│ TOTAL                          │ 300 │                                      │
└────────────────────────────────┴─────┴──────────────────────────────────────┘
```

---

## 10. SECTION LIBRARY — 120 BASE PATTERNS

### 10.1 The system:
```
  120 base section patterns
  × 6 color themes (hero/letter/mint/lavender/yellow/dark)
  × 3 intensity levels (light/medium/bold)
  × 3 rotations (straight/slight-left/slight-right)
  = 6,480 possible section variants

  We use 2,100 across 300 templates = ZERO visual repetition
```

### 10.2 Section categories (10 categories, 120 patterns total):

```
┌─────┬──────────────────┬───────┬──────────────────────────────────────────┐
│ CAT │ NAME             │ COUNT │ PATTERN TYPES                            │
├─────┼──────────────────┼───────┼──────────────────────────────────────────┤
│  1  │ HERO             │   10  │ Gradient headline, full-width image,     │
│     │                  │       │ split layout, emotional quote open,      │
│     │                  │       │ number stat hero, sticker row, dark      │
│     │                  │       │ hero, minimal, video placeholder,        │
│     │                  │       │ countdown timer                         │
├─────┼──────────────────┼───────┼──────────────────────────────────────────┤
│  2  │ LETTER/PERSONAL  │    8  │ Paragraph stack, handwritten opener,     │
│     │                  │       │ letter with pull-quote, letter with      │
│     │                  │       │ image break, manifesto line, PS teaser,  │
│     │                  │       │ greeting card, voice note placeholder    │
├─────┼──────────────────┼───────┼──────────────────────────────────────────┤
│  3  │ STORY/NARRATIVE  │   10  │ Chapter cards, timeline, before/after,   │
│     │                  │       │ deep quote, story carousel, diary entry, │
│     │                  │       │ photo essay, dialogue format,            │
│     │                  │       │ transformation journey, origin story    │
├─────┼──────────────────┼───────┼──────────────────────────────────────────┤
│  4  │ PRODUCT          │   12  │ Full showcase, side-by-side, layer       │
│     │                  │       │ breakdown, cross-section, feature grid,  │
│     │                  │       │ size/color preview, comparison table,    │
│     │                  │       │ lifestyle collage, flat-lay grid,        │
│     │                  │       │ zoom detail, unboxing sequence,          │
│     │                  │       │ product family row                      │
├─────┼──────────────────┼───────┼──────────────────────────────────────────┤
│  5  │ SOCIAL PROOF     │   10  │ Yellow quote card, expert quote, stat    │
│     │                  │       │ row, review screenshot, trust badges,    │
│     │                  │       │ before/after testimonial, counter-       │
│     │                  │       │ testimonial, stacked mini-reviews,       │
│     │                  │       │ UGC photo grid, influencer mention       │
├─────┼──────────────────┼───────┼──────────────────────────────────────────┤
│  6  │ EDUCATIONAL      │   10  │ Definition block, step cards, checklist, │
│     │                  │       │ myth vs fact, infographic, FAQ blocks,   │
│     │                  │       │ did-you-know callout, mechanism diagram, │
│     │                  │       │ tip cards, how-it-works flow             │
├─────┼──────────────────┼───────┼──────────────────────────────────────────┤
│  7  │ COMPARISON       │    8  │ 3-column cards, sticker reasons, method  │
│     │                  │       │ cards, feature table, spectrum bar,      │
│     │                  │       │ what-you-tried vs what-works, side-by-   │
│     │                  │       │ side scorecard, vs badge                 │
├─────┼──────────────────┼───────┼──────────────────────────────────────────┤
│  8  │ GUARANTEE/TRUST  │    8  │ 60-day seal, guarantee point cards,      │
│     │                  │       │ covered checklist, dashed quote box,     │
│     │                  │       │ promise badge strip, what's covered /    │
│     │                  │       │ what's NOT, refund story, trust icon row │
├─────┼──────────────────┼───────┼──────────────────────────────────────────┤
│  9  │ CTA              │   12  │ Dark block + button, soft text link,     │
│     │                  │       │ urgency code, gentle invitation,         │
│     │                  │       │ product CTA, social CTA, next-email      │
│     │                  │       │ teaser, dual CTA, floating CTA,          │
│     │                  │       │ sticky CTA, countdown CTA, exit CTA      │
├─────┼──────────────────┼───────┼──────────────────────────────────────────┤
│ 10  │ UTILITY          │   12  │ Gradient band, divider bar, out-line,    │
│     │                  │       │ footer, signoff card, preheader bar,     │
│     │                  │       │ spacer, section header, navigation bar,  │
│     │                  │       │ social icons strip, legal text,          │
│     │                  │       │ preference center link                   │
├─────┴──────────────────┼───────┴──────────────────────────────────────────┤
│ TOTAL                  │  120  │                                          │
└────────────────────────┴───────┴──────────────────────────────────────────┘
```

### 10.3 Section pattern specification:

Each base pattern is a React component with these props:

```javascript
{
  bg:       string,    // Background color hex
  accent:   string,    // Accent color hex
  ink:      string,    // Dark text/border hex
  soft:     string,    // Body text hex
  muted:    string,    // Secondary text hex
  gradient: string,    // CSS gradient string
  rotation: number,    // -1.5 to +1.5 degrees
  intensity: "light" | "medium" | "bold",
  content:  object,    // Section-specific content data
}
```

---

## 11. THEME SYSTEM — COLOR AND INTENSITY VARIATIONS

### 11.1 Six color themes:

```
┌─────┬─────────────┬────────────┬────────────┬──────────────────────────┐
│ #   │ THEME       │ BG RANGE   │ ACCENT     │ MOOD                     │
├─────┼─────────────┼────────────┼────────────┼──────────────────────────┤
│  1  │ Warm/Trust  │ #FFFBF0    │ #2BAEB4    │ Safe, welcoming, calm    │
│     │             │ #FFF6E2    │ #5DD07A    │                          │
├─────┼─────────────┼────────────┼────────────┼──────────────────────────┤
│  2  │ Fresh/Mint  │ #EAF6F2    │ #1E8A8F    │ Clean, scientific, new   │
│     │             │ #D4F0E4    │ #3BB35E    │                          │
├─────┼─────────────┼────────────┼────────────┼──────────────────────────┤
│  3  │ Soft/Lavender│ #F0EDF8   │ #8B6FC0    │ Gentle, nurturing        │
│     │             │ #EEE8F6    │ #C8B5E8    │                          │
├─────┼─────────────┼────────────┼────────────┼──────────────────────────┤
│  4  │ Bold/Dark   │ #1F2D2F    │ #D8F57C    │ Premium, urgent, CTA     │
│     │             │ #1F2A2C    │ #FFD866    │                          │
├─────┼─────────────┼────────────┼────────────┼──────────────────────────┤
│  5  │ Warm/Yellow │ #FFD866    │ #1F2D2F    │ Cheerful, social, quote  │
│     │             │ #FFF2D8    │ #E8A23D    │                          │
├─────┼─────────────┼────────────┼────────────┼──────────────────────────┤
│  6  │ Neutral/    │ #FFFFFF    │ #2BAEB4    │ Clean, product-focused   │
│     │ White       │ #FAF7F0    │ #4A6568    │                          │
└─────┴─────────────┴────────────┴────────────┴──────────────────────────┘
```

### 11.2 Three intensity levels:

```
┌──────────┬──────────────────────────────────────────────────────────┐
│ LEVEL    │ WHAT CHANGES                                             │
├──────────┼──────────────────────────────────────────────────────────┤
│ Light    │ Subtle borders (1px), soft shadows (2px), muted accents, │
│          │ thin fonts, minimal rotation, white backgrounds          │
├──────────┼──────────────────────────────────────────────────────────┤
│ Medium   │ Standard borders (2px), hard shadows (3px), full accent, │
│          │ standard fonts, slight rotation, colored backgrounds     │
├──────────┼──────────────────────────────────────────────────────────┤
│ Bold     │ Thick borders (3px), strong shadows (6px), saturated     │
│          │ accent, heavy fonts, visible rotation, dark backgrounds  │
└──────────┴──────────────────────────────────────────────────────────┘
```

---

## 12. BUILD PIPELINE

```
STEP 1  Section Library (120 base patterns)
        Each pattern = React component with props
        Props: bg, accent, rotation, intensity, content
        ↓
STEP 2  Theme System (color + intensity variations)
        6 themes × 3 intensity = 18 visual treatments
        Applied to each section pattern
        ↓
STEP 3  300 Email Templates
        Each = 7 sections from the library
        Each = unique recipe (no two identical)
        ↓
STEP 4  Single HTML + Figma Canvas
        All 300 on one canvas
        Grouped by category (13 sections)
        Pan/zoom/focus like Giuliano's design-canvas.jsx
        ↓
STEP 5  Export-Ready for Any Client
        Swap tokens → new brand
        Swap copy → new product
        Ship
```

### 12.1 Token system for reusability:

```javascript
// Swap these 6 tokens = new brand
window.TOKENS = {
  primary:    "#2BAEB4",   // Brand primary color
  secondary:  "#5DD07A",   // Brand secondary color
  dark:       "#1F2D2F",   // Dark text/bg
  bodyText:   "#4A6568",   // Body text
  muted:      "#8A9B9D",   // Secondary text
  accent:     "#FFD866",   // Accent highlight
};

// Swap these 3 fonts = new typography
window.FONTS = {
  body:    "'Questrial', system-ui, sans-serif",
  display: "'Fraunces', Georgia, serif",
  hand:    "'Caveat', cursive",
};

// All 300 templates read from TOKENS + FONTS
// Change tokens = instant rebrand
```

---

## 13. KEY DESIGN ISSUES TO FIX (BrightKidCo-specific)

```
┌─────────────────┬────────────────────────┬────────────────────────────────────┐
│ ISSUE           │ WRONG (old designs)    │ RIGHT (Giuliano's system)          │
├─────────────────┼────────────────────────┼────────────────────────────────────┤
│ Accent color    │ Generic teal           │ Use B.teal token (#2BAEB4)         │
│ Gradient        │ Teal → green           │ 135deg #2BAEB4 → #5DD07A          │
│ Font            │ Fraunces headings      │ Questrial body + Fraunces display  │
│ Sender          │ "Lena Bauer, Founder"  │ "Lena from BrightKidCo" (FROM)     │
│ Borders         │ Missing/inconsistent   │ 2px solid #1F2D2F EVERYWHERE       │
│ Box shadows     │ Soft/blur shadows      │ Hard: 3px 3px 0 #1F2D2F           │
│ Artifacts       │ Generic stat rows      │ Giuliano's contraptions (Sec 6)    │
│ Yellow          │ Generic yellow         │ #FFD866 specifically               │
│ CTA button      │ Inconsistent           │ #D8F57C on #1F2D2F, 999px radius  │
│ Email width     │ Varied                 │ 420px fixed (MW constant)          │
│ Stickers        │ None                   │ Tilted, colored, ink-bordered      │
│ Bands           │ None                   │ Gradient transitions everywhere    │
│ Signoff         │ Generic or missing     │ Lena's card (avatar+Caveat sig)    │
│ Product cards   │ Generic cards          │ Full/Medium/Soft showcase variants │
│ Illustrations   │ None                   │ 10 SVG illustrations available     │
└─────────────────┴────────────────────────┴────────────────────────────────────┘
```

---

## 14. FILE LOCATIONS QUICK REFERENCE

```
/root/projects/brightkidco/
├── docs/
│   └── EMAIL-DESIGN-BRIEF.md                    ← THIS FILE
├── demands/
│   └── GIULIANO-DEMANDS.md                      ← Brand rules (2,010 lines)
├── raw/
│   ├── Welcome Flows - 10 Emails _standalone_.html  ← SOURCE OF TRUTH (2.3MB)
│   ├── BKCO - EMAIL MARKETING_extracted/
│   │   ├── welcome-flow/                        ← Main 6+4 email source
│   │   │   ├── app.jsx                          ← Canvas + sections
│   │   │   ├── design-canvas.jsx                ← Figma UI (622 lines)
│   │   │   ├── primitives.jsx                   ← 14 shared primitives
│   │   │   ├── content.js                       ← Flow 1 data (E2-E6)
│   │   │   ├── content-flow2.js                 ← Flow 2 data (E1-E4)
│   │   │   ├── emails-2-3.jsx                   ← E2+E3 compositions
│   │   │   ├── emails-4-5.jsx                   ← E4+E5 compositions
│   │   │   ├── email-6.jsx                      ← E6 composition
│   │   │   ├── flow2-emails.jsx                 ← F2 all 4 emails
│   │   │   └── product-showcase.jsx             ← 3 showcase variants
│   │   └── autistic-welcome/                    ← E1 + 10 UX variants
│   │       ├── V10-final.jsx                    ← Final E1 (279 lines)
│   │       ├── email-1.jsx                      ← Earlier E1 (446 lines)
│   │       └── variants/
│   │           ├── content.js                   ← E1 content data
│   │           ├── tokens.js                    ← BRAND + FONT definitions
│   │           ├── illustrations.jsx            ← 10 SVG illustrations
│   │           └── variants-*.jsx, new-v*.jsx   ← 20 UX explorations
│   └── BKCO - EMAIL MARKETING-2_extracted/      ← Backup/duplicate
├── outputs/
│   ├── copy/                                    ← 124 email copy files
│   ├── wireframes/                              ← Wireframe specs
│   ├── jsx/                                     ← JSX production output
│   └── html/                                    ← HTML production output
└── STATUS.md                                    ← Project status
```

---

## 15. DECISION LOG

| Date | Decision |
|------|----------|
| May 31 | Old designs rejected — wrong branding |
| May 31 | Use Giuliano's actual design system from source files |
| May 31 | Flow 1 primary, pull artifacts from both flows |
| May 31 | Font: Questrial body + Fraunces display (follow Giuliano's design) |
| May 31 | Signoff: "The BrightKidCo team" (E1), "Lena Bauer" (E2-E6), "Lena" (F2) |
| May 31 | SVG illustrations available for replacing placeholder frames |
| May 31 | Copy files at outputs/copy/ (124 files, 22 folders) |
| May 31 | **Scope expanded: 300 templates, universal e-commerce library** |
| May 31 | **120 base section patterns × color/intensity variations** |
| May 31 | **Token system for instant rebranding (6 tokens + 3 fonts)** |
| May 31 | **13 email categories covering all e-commerce flows** |
| May 31 | **Single HTML + Figma canvas, grouped by category** |

---

*End of brief. Verified against source files May 31, 2026.*
*Scope: 300 universal email templates, 120 base sections, 2,100 section instances*
*Source: 3,249 lines JSX + 62 lines E1 content + 29 tokens + 311 illustrations*
*Copy: 124 files across 22 flow folders (BrightKidCo reference client)*

---

*End of brief. Verified against source files May 31, 2026.*
*Total source code: 3,249 lines JSX + 62 lines E1 content + 29 lines tokens + 311 lines illustrations*
*Total copy: 124 files across 22 flow folders*
