# Existing Email HTML Audit — BrightKidCo

> Source: `/root/projects/brightkidco/docs/bightkidco.com/`
> Generated: 2026-05-25
> Total HTML files found: 24 (across 5 directories)

---

## 1. Complete File Inventory

### Directory Structure

```
bightkidco.com/
├── Welcome Flows - 10 Emails _standalone_.html              [2.3MB — bundled JS app]
├── Welcome Flows - 10 Emails _standalone_ (copy 1).html     [2.3MB — IDENTICAL copy]
├── BKCO - EMAIL MARKETING/
│   ├── autistic-welcome/
│   │   ├── V10 Final.html                                   [1.8KB — React canvas]
│   │   ├── Welcome Flow - Autistic Parent.html              [5KB — React canvas]
│   │   ├── email-1.jsx                                      [13KB — Email 1 component]
│   │   ├── design-canvas.jsx                                [shared design canvas]
│   │   ├── V10-final.jsx                                    [V10 final component]
│   │   └── variants/
│   │       ├── 10 New UX Variants.html                      [3.4KB — React canvas]
│   │       ├── 10 UX Variants.html                          [6.4KB — React canvas]
│   │       ├── content.js                                   [3KB — Email 1 copy data]
│   │       ├── tokens.js                                    [875B — brand tokens]
│   │       ├── illustrations.jsx
│   │       ├── new-v1-4.jsx, new-v5-7.jsx, new-v8-10.jsx
│   │       ├── variants-1-3.jsx, variants-4-6.jsx, variants-7-10.jsx
│   │       └── variants.jsx
│   ├── welcome-flow/
│   │   ├── Welcome Flows - 10 Emails.html                   [2.5KB — React canvas]
│   │   ├── app.jsx                                          [main flow app]
│   │   ├── content.js                                       [18KB — Flow 1 content E2-6]
│   │   ├── content-flow2.js                                 [10KB — Flow 2 content]
│   │   ├── emails-2-3.jsx                                   [12KB — E2, E3 components]
│   │   ├── emails-4-5.jsx                                   [12KB — E4, E5 components]
│   │   ├── email-6.jsx                                      [7.5KB — E6 component]
│   │   ├── flow2-emails.jsx                                 [27KB — Flow 2 E1-4 components]
│   │   ├── primitives.jsx                                   [shared UI primitives]
│   │   ├── product-showcase.jsx
│   │   └── design-canvas.jsx
│   ├── assets/
│   │   ├── brightkidco-logo.png
│   │   ├── brightkidco-logo-v2.png
│   │   └── brightkidco-logo-new.png
│   ├── emails/
│   │   ├── wireframes.jsx
│   │   └── hifi.jsx
│   ├── references/           [6 reference images — Wonderbly, PLAE, Lou Malnatis, etc.]
│   ├── research/             [10 PDFs + 10 extracted .txt files — avatar research]
│   ├── uploads/              [PDFs, PNGs — uploaded research docs + design references]
│   ├── scraps/               [1 napkin sketch]
│   └── design-canvas.jsx
├── BKCO - EMAIL MARKETING-2/           [IDENTICAL to BKCO - EMAIL MARKETING]
├── BKCO - EMAIL MARKETING-2_extracted/ [IDENTICAL to BKCO - EMAIL MARKETING-2]
├── BKCO - EMAIL MARKETING_extracted/   [subset of BKCO - EMAIL MARKETING]
├── *.pdf                               [~40 PDF files — avatar research, profiles, etc.]
├── *.jpeg                              [1 WhatsApp image]
└── *.md                                [1 meeting notes file]
```

### Non-HTML Files Summary

| Type | Count | Description |
|------|-------|-------------|
| PDF | ~40+ | Avatar profiles, research docs, language banks, product data |
| PNG/JPEG | ~15+ | Design references, logos, screenshots, uploaded images |
| JSX | ~20+ | React components for email designs |
| JS | ~8 | Content data files, brand tokens |
| ZIP | 2 | Archive copies of BKCO - EMAIL MARKETING folders |
| MD | 1 | Meeting notes (Gemini-generated) |
| Napkin | 1 | Sketch file |

---

## 2. HTML Email Files — Detailed Analysis

### DUPLICATION NOTE

The 24 HTML files break down to **8 unique files**, each replicated across directories:
- `BKCO - EMAIL MARKETING/` — original
- `BKCO - EMAIL MARKETING-2/` — identical copy
- `BKCO - EMAIL MARKETING-2_extracted/` — identical extracted copy
- `BKCO - EMAIL MARKETING_extracted/` — identical extracted copy (subset)
- Root level `.html` files — standalone bundled copies

All copies verified identical via `diff`.

---

### FILE 1: Welcome Flows — 10 Emails (Standalone Bundled)

**Paths:**
- `/root/projects/brightkidco/docs/bightkidco.com/Welcome Flows - 10 Emails _standalone_.html`
- `/root/projects/brightkidco/docs/bightkidco.com/Welcome Flows - 10 Emails _standalone_ (copy 1).html`
- `BKCO - EMAIL MARKETING-2/welcome-flow/Welcome Flows - 10 Emails (standalone).html`
- `BKCO - EMAIL MARKETING-2_extracted/welcome-flow/Welcome Flows - 10 Emails (standalone).html`

**Format:** Self-contained bundled JS app (2.3MB). All React components, fonts, and assets are base64-encoded inside a `<script type="__bundler/manifest">` tag. Renders in browser — not traditional email HTML.

**Title:** `Welcome Flows · BrightKidCo`

**Flow:** Both Flow 1 (6 emails) + Flow 2 (4 emails) = 10 total emails

**Structure:** React SPA with DesignCanvas layout system. Displays all 10 emails as scrollable artboards.

**Fonts:** Questrial (main), Fraunces (display), Caveat (handwritten)

**Background:** `#EEE8DC` (warm cream)

---

### FILE 2: Welcome Flows — 10 Emails (React Canvas)

**Paths:**
- `BKCO - EMAIL MARKETING/welcome-flow/Welcome Flows - 10 Emails.html`
- `BKCO - EMAIL MARKETING-2/welcome-flow/Welcome Flows - 10 Emails.html`
- `BKCO - EMAIL MARKETING-2_extracted/welcome-flow/Welcome Flows - 10 Emails.html`
- `BKCO - EMAIL MARKETING_extracted/welcome-flow/Welcome Flows - 10 Emails.html`

**Format:** Development React canvas (2.5KB). Loads external JSX/JS files via script tags. Requires a local dev server to render.

**Title:** `Welcome Flows · BrightKidCo`

**Content References:**
- `tokens.js` — brand tokens
- `content.js` — Flow 1 Email 2-6 copy
- `content-flow2.js` — Flow 2 Email 1-4 copy
- `../autistic-welcome/variants/content.js` — Email 1 copy
- `primitives.jsx` — shared UI primitives
- `V10-final.jsx` — Email 1 (Flow 1) component
- `emails-2-3.jsx`, `emails-4-5.jsx`, `email-6.jsx` — Flow 1 E2-6
- `flow2-emails.jsx` — Flow 2 E1-4
- `app.jsx` — main app layout

**App Structure (from app.jsx):**

Flow 1 — Welcome Flow — Autistic Parent:
| Email | Label | Timing |
|-------|-------|--------|
| E1 | Permission & Reassurance | Immediate |
| E2 | The Mechanism | +24h |
| E3 | Why Everything Failed | +2 days |
| E4 | How the Product Works | +4 days |
| E5 | Sarah's Story | +6 days |
| E6 | The Invitation | +8 days |

Flow 2 — Discount Welcome — BRIGHT10:
| Email | Label | Timing |
|-------|-------|--------|
| E1 | Code Delivery | Immediate |
| E2 | Mechanism | +36h |
| E3 | Parent Story | +3 days |
| E4 | Guarantee Closer | +2 days |

---

### FILE 3: Welcome Flow — Autistic Parent (Hi-Fi)

**Paths:**
- `BKCO - EMAIL MARKETING/autistic-welcome/Welcome Flow - Autistic Parent.html`
- `BKCO - EMAIL MARKETING-2/autistic-welcome/Welcome Flow - Autistic Parent.html`
- `BKCO - EMAIL MARKETING-2_extracted/autistic-welcome/Welcome Flow - Autistic Parent.html`
- `BKCO - EMAIL MARKETING_extracted/autistic-welcome/Welcome Flow - Autistic Parent.html`

**Format:** React canvas (5KB). Single-email hi-fi design for Email 1.

**Title:** `Welcome Flow · Autistic Parent · BrightKidCo`

**Subtitle:** `Email 1 of 4 — hi-fi`

**Fonts:** Fraunces (headlines), Inter (body)

**Avatar:** Autistic Parent

**Design Brief (from the canvas):**
- **Goal:** Reduce shame. Introduce the reframe. No pushing.
- **Covers:** You're not failing · Many families need a different path · Sensory-friendly support
- **Tone:** Letter-like. Serif headlines (Fraunces). No emoji. CTA is a door, not a push.
- **Design DNA:** Wonderbly pastel + Begin Health color-accent + BREZ soft premium. Rounded, warm, kid-brand-adjacent without being cartoon.
- **Flow:** E2 · Mechanism explained → E3 · Parent stories → E4 · Soft product intro

---

### FILE 4: V10 Final — Story Book

**Paths:**
- `BKCO - EMAIL MARKETING/autistic-welcome/V10 Final.html`
- `BKCO - EMAIL MARKETING-2/autistic-welcome/V10 Final.html`
- `BKCO - EMAIL MARKETING-2_extracted/autistic-welcome/V10 Final.html`
- `BKCO - EMAIL MARKETING_extracted/autistic-welcome/V10 Final.html`

**Format:** React canvas (1.8KB). Renders the V10 Story Book variant of Email 1.

**Title:** `V10 Final · Story Book · BrightKidCo`

**Fonts:** Questrial, Fraunces

**Component:** `<V10_Final />` — loaded from `V10-final.jsx`

---

### FILE 5: 10 New UX Variants — Email 1

**Paths:**
- `BKCO - EMAIL MARKETING/autistic-welcome/variants/10 New UX Variants.html`
- `BKCO - EMAIL MARKETING-2/autistic-welcome/variants/10 New UX Variants.html`
- `BKCO - EMAIL MARKETING-2_extracted/autistic-welcome/variants/10 New UX Variants.html`
- `BKCO - EMAIL MARKETING_extracted/autistic-welcome/variants/10 New UX Variants.html`

**Format:** React canvas (3.4KB). Displays 10 new UX design variants for Email 1.

**Title:** `10 New UX Variants · Email 1 · BrightKidCo`

**Fonts:** Questrial, Fraunces, Caveat

**10 Variants (grouped by style):**

| Group | Variant | Style |
|-------|---------|-------|
| Playful / Sticker-forward | V1 · Sticker Studio | Image-rich sticker style |
| | V4 · Scrapbook Journal | Scrapbook aesthetic |
| | V10 · Story Book | Narrative illustration |
| Bold / High-impact | V3 · Duotone Blocks | Bold color blocking |
| | V6 · Dark Playful | Dark background, playful |
| | V9 · Poster Bold | Poster-like statement |
| Mix / Editorial | V2 · Magazine Mod | Magazine editorial |
| | V7 · Editorial Mix | Mixed editorial approach |
| Premium / Hi-end | V5 · Hero Stack | Premium hero layout |
| | V8 · Soft Premium | Soft premium feel |

**Subtitle:** `Autistic Parent · image-rich · mobile 420px`

---

### FILE 6: 10 UX Variants — Email 1 (Original Set)

**Paths:**
- `BKCO - EMAIL MARKETING/autistic-welcome/variants/10 UX Variants.html`
- `BKCO - EMAIL MARKETING-2/autistic-welcome/variants/10 UX Variants.html`
- `BKCO - EMAIL MARKETING-2_extracted/autistic-welcome/variants/10 UX Variants.html`
- `BKCO - EMAIL MARKETING_extracted/autistic-welcome/variants/10 UX Variants.html`

**Format:** React canvas (6.4KB). Displays the original 10 UX variants with a brief/instructions section.

**Title:** `Email 1 · 10 UX Variants · BrightKidCo`

**Fonts:** Questrial, Fraunces, Caveat

**Brief Section (inline):**
- Main font: Questrial (geometric, rounded, matches logo)
- Display accent: Fraunces (used in 4 variants)
- Handwritten accent: Caveat (V8 only)
- Brand gradient: teal → green (logo colors)
- Viewport: 420px (mobile-optimized)
- Klaviyo export: Step 2 — once you pick variants

**10 Original Variants:**

| ID | Name | Description |
|----|------|-------------|
| V1 | Storybook | Illustrative, paper feel, yellow accents, kid-brand warmth |
| V2 | Editorial Magazine | Serif drop-cap, newspaper dek, premium editorial |
| V3 | Playful Cards | Polaroids, stickers, slight rotations, expressive |
| V4 | Soft Minimal | White canvas, gradient headlines, generous whitespace |
| V5 | Warm Beige | Neutral beige, italic serif accents, adult calm |
| V6 | Playful Duotone | Bold color blocks, Surreal-inspired, alternating backgrounds |
| V7 | Conversational Chat | iMessage-style bubbles, conversational pace |
| V8 | Scrapbook / Journal | Handwritten Caveat font, tape, tilted cards, intimate |
| V9 | Clinical Premium | BREZ-like, soft medical, trust-building, modular |
| V10 | Bold Monochrome | Dark mode, huge type, gradient accents, statement-like |

**Subtitle:** `Autistic Parent · Welcome Flow · Mobile 420px`

---

## 3. Flow Organization

### Flow 1: Welcome Flow — Autistic Parent (6 emails)

**Audience:** Autistic parent avatar — signed up via organic/non-discount channel
**Sender:** "Lena Bauer" / The BrightKidCo team
**Tone:** Calm, slow, validating — no urgency, no caps, no shouty CTAs
**Voice:** Peer-to-peer mother (not clinical, not marketing)
**Principles:** No "just", no urgency, no speed claims, no generic testimonials

| Email | Subject Line | Timing | Theme | Key CTA |
|-------|-------------|--------|-------|---------|
| E1 | (implied from hero: "You haven't done anything wrong") | Immediate | Permission & Reassurance | "See how the method works →" |
| E2 | "The body-signal your child might not feel yet" | +24h | The Mechanism (Interoception) | "See the pants" |
| E3 | "Timers. Rewards. Naked days. Here's why none of it worked." | +2 days | Absolution (Why Methods Failed) | "See the pants" |
| E4 | "This is where we show you the pants." | +4 days | The Product (Soft Reveal) | "See the pants" |
| E5 | "Sarah's son wore nothing but pull-ups for 4 years." | +6 days | One Story (Parent Proof) | "Try the pants Sarah used" |
| E6 | "A small invitation (no pressure)." | +8 days | The Invitation (60-Day Guarantee) | "Start with one pair" |

**Shared Elements:**
- Sign-off: "With you, Lena Bauer"
- PS: "P.S. If you ever want to reply and tell me about your child — I read every one. Really."
- Footer: "Calm progress, one day at a time."
- Footer links: Our Method · Shop the Pants · Parent Stories
- Address: BrightKidCo Ltd · Berlin, Germany · hello@brightkidco.com
- Unsubscribe + Manage preferences links
- Pause/resume: "You can pause this series anytime. Come back when you're ready."

### Flow 2: Discount Welcome — BRIGHT10 (4 emails)

**Audience:** Signed up via discount popup (code BRIGHT10, valid 7 days)
**Sender:** "Lena" / "Lena here"
**Role:** Founder, BrightKidCo

| Email | Subject Line (3 options each) | Timing | Theme | Key CTA |
|-------|------------------------------|--------|-------|---------|
| E1 | "Your code is here: BRIGHT10" / "As promised — BRIGHT10 inside" / "Your 10% code (and a small note)" | Immediate | Code Delivery | "Shop with BRIGHT10" |
| E2 | "Before you use your code — one thing" / "The part most potty training advice skips" / "Why rewards couldn't fix what you're seeing" | +36h | Mechanism | "See the pants" |
| E3 | "One story, from one parent" / "After three years of trying everything" / "A mother whose situation might feel familiar" | +3 days | Parent Story | "Start with what worked for Sarah" |
| E4 | "Protected for 60 days — even if your code expires today" / "Your code expires tomorrow — here's what matters more" / "When you're ready — the 60-day promise is the real reason" | +2 days | Guarantee Closer | "Start protected" |

**Unique Elements:**
- Code block: BRIGHT10 (dashed border, monospace, "Tap to copy · Auto-applied at checkout")
- Reminder bars: "BRIGHT10 · 5 days left" → "2 days left" → "Last day"
- Trustpilot: 4.9 rating, 2,400+ reviews
- Counter-testimonial: Priya K. return story (to show guarantee is real)
- "What comes next" roadmap in E1

---

## 4. Sender Details

| Detail | Flow 1 | Flow 2 |
|--------|--------|--------|
| Sender Name | Lena Bauer | Lena |
| Role | (implied team) | Founder, BrightKidCo |
| Greeting | "Hi, and welcome." | "Lena here 👋" |
| Sign-off | "With you, Lena Bauer" | "With you, Lena" |
| PS | "I read every one. Really." | Similar |
| From Address | Not specified in HTML | Not specified in HTML |

**Note:** From addresses are not embedded in the HTML files — they would be configured in Klaviyo/email platform.

---

## 5. Design Elements Summary

### Brand Tokens (from tokens.js)

| Token | Value | Usage |
|-------|-------|-------|
| `teal` | `#2BAEB4` | Primary brand color |
| `tealDeep` | `#1E8A8F` | Darker teal for text |
| `green` | `#5DD07A` | Secondary brand color |
| `greenDeep` | `#3BB35E` | Darker green |
| `ink` | `#1F2D2F` | Primary text color |
| `soft` | `#4A6568` | Secondary text color |
| `muted` | `#8A9B9D` | Tertiary/muted text |
| `cream` | `#FBF7F1` | Background cream |
| `paper` | `#FFFFFF` | White background |
| `gradient` | `linear-gradient(135deg, #2BAEB4, #5DD07A)` | Brand gradient (teal → green) |

### Typography

| Role | Font | Source |
|------|------|--------|
| Main body | Questrial | Google Fonts (geometric sans, rounded-adjacent — matches logo) |
| Display/headlines | Fraunces | Google Fonts (serif, italic variants used) |
| Handwritten accent | Caveat | Google Fonts (V8 Scrapbook variant only) |
| Body (hi-fi E1) | Inter | Google Fonts (system-ui fallback) |

### Layout Patterns

- **Mobile viewport:** 420px (all variants optimized for mobile)
- **Email width:** 600px (standard email width for Email 1 component)
- **Border radius:** 18-28px (rounded, warm, kid-brand-adjacent)
- **Box shadow:** `3px 3px 0 ${ink}` or `4px 4px 0 ${ink}` (thick, playful offset shadows)
- **Border:** `2px solid ${ink}` (bold outlines, sticker-like)
- **Background sections:** Alternating pastel bands (cream, mint, lilac, warm yellow)
- **Color band transitions:** `<Band>` component for smooth gradient transitions between sections

### Design DNA References

- **Wonderbly** — pastel warmth, kid-brand storytelling
- **Begin Health** — color-accent approach
- **BREZ** — soft premium, trust-building
- **Surreal** — bold duotone (V6 variant)
- **PLAE** — product detail depth (referenced in uploads)

### UI Components (from JSX)

| Component | Purpose |
|-----------|---------|
| `EmailShell` | Email wrapper with preheader |
| `Header` | Logo + background |
| `TitleBlock` | Hero badge + 2-line headline |
| `Letter` | Letter-style body paragraphs |
| `Eyebrow` | Small uppercase section label |
| `H2` | Section headline |
| `Band` | Gradient transition between sections |
| `FramedImage` / `ImgFrame` | Image placeholder with label |
| `CTAClose` | CTA section with button + fine print |
| `Signoff` | Sign-off block |
| `OutLine` | "Out" / unsubscribe line |
| `Footer` | Footer with links + address |
| `CodeBlock` | Discount code display (Flow 2) |
| `ReminderBar` | Code expiry reminder (Flow 2) |
| `ProductShowcaseSoft` | Soft product mention |
| `ProductShowcaseMedium` | Mid-tier product card |
| `ProductShowcaseFull` | Full product card with price + CTA |
| `DesignCanvas` / `DCSection` / `DCArtboard` | Layout system for variant canvases |

---

## 6. Variant Comparison Notes

### Email 1 UX Variants (20 total across 2 sets)

**Set 1 (Original 10 UX Variants):** Same copy, different UX approaches. From "verspielt" (playful) to minimal.

| Category | Variants | Key Trait |
|----------|----------|-----------|
| Verspielt / Expressiv | V1 Storybook, V2 Editorial, V3 Playful Cards | Warm, illustrative, expressive |
| Mix | V4 Soft Minimal, V5 Warm Beige, V6 Duotone, V7 Chat | Conversational, bold, warm |
| Minimal / Premium | V8 Scrapbook, V9 Clinical, V10 Bold Monochrome | High-end, statement, intimate |

**Set 2 (10 New UX Variants):** Image-rich redesigns with illustrations.

| Category | Variants | Key Trait |
|----------|----------|-----------|
| Playful / Sticker-forward | V1 Sticker Studio, V4 Scrapbook Journal, V10 Story Book | Image-rich, narrative |
| Bold / High-impact | V3 Duotone Blocks, V6 Dark Playful, V9 Poster Bold | Dark mode, bold, statement |
| Mix / Editorial | V2 Magazine Mod, V7 Editorial Mix | Editorial, magazine feel |
| Premium / Hi-end | V5 Hero Stack, V8 Soft Premium | Premium, minimal |

### Flow 1 vs Flow 2 Differences

| Aspect | Flow 1 (Autistic Parent) | Flow 2 (Discount Welcome) |
|--------|--------------------------|---------------------------|
| Trigger | Organic sign-up | Discount popup sign-up |
| Email count | 6 | 4 |
| Discount code | None | BRIGHT10 (10%, 7 days) |
| Urgency | Zero — "No rush. No pressure." | Gentle — code countdown reminder |
| Tone | Slow, letter-like, validating | Slightly warmer, founder-voice |
| Product intro | E4 (soft reveal) | E1 (immediate with code) |
| Guarantee | E6 (60-Day Calm Progress) | E4 (60-Day, code expiry angle) |
| Pricing | €34 starter pair, 10% first-order | €30.60 (after BRIGHT10) |
| Trustpilot | Not featured | 4.9, 2,400+ reviews |
| Return story | Not featured | Priya K. return story (E4) |

---

## 7. Key Content Themes (Across All Emails)

### Core Mechanism: Interoception
- The body-signal that tells your child they need to pee
- Develops differently in neurodivergent children
- Traditional methods assume the signal is already there
- BrightKidCo's Body-Signal Learning Layer™ keeps the signal loop intact

### Unique Mechanism: Body-Signal Learning Layer™ (3 layers)
1. **Top layer** — Sensation pass-through (soft, tag-free, lets sensation reach the body)
2. **Middle layer** — The Learning Layer (thin feedback layer the child can feel)
3. **Bottom layer** — Calm containment (holds small accidents without leaking chaos)

### Positioning: "Structurally the opposite of a pull-up"
- Pull-ups absorb → silence the signal → child learns nothing
- Regular underwear → signal + chaos → overwhelming
- BrightKidCo → signal + containment → learning loop intact

### Guarantee: 60-Day Calm Progress Guarantee
- Full refund for any reason
- No questions, no forms, no proof of progress
- Covers: child refusing, no visible progress, regression, changed mind
- Reassurance: "Regressions are part of the process"

---

## 8. Audit Summary

| Metric | Value |
|--------|-------|
| Total HTML files | 24 |
| Unique HTML files | 6 (canvas) + 2 (standalone bundled) = 8 |
| Duplicate ratio | 3:1 (each file exists in 3-4 directories) |
| Flows identified | 2 (Welcome + Discount Welcome) |
| Total emails across flows | 10 (6 + 4) |
| UX variants for Email 1 | 20 (10 original + 10 new) |
| Traditional email HTML (table-based) | 0 — all are React/JSX render previews |
| Klaviyo-ready email HTML | 0 — none exported yet (all are design canvases) |
| Subject lines extracted | 18 (6 Flow 1 + 12 Flow 2 with A/B options) |
| CTA buttons extracted | 10 unique CTA texts |
| Sender identities | 2 (Lena Bauer for Flow 1, Lena for Flow 2) |

### Important Note

**None of these HTML files are traditional email HTML.** They are all React component previews rendered in a browser canvas. The actual Klaviyo-ready table-based HTML has not yet been generated — the canvases reference this as "Step 2 — once you pick variants." The email designs exist as JSX components that would need to be converted to inline-CSS table-based HTML for email client compatibility.
