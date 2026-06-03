# Layer 32 — Existing Email Prototype Patterns: Client File Exhaustion

**Source files analyzed:** 18 files across `BKCO - EMAIL MARKETING_extracted/` and `BKCO - EMAIL MARKETING-2_extracted/`  
**Date:** 2026-05-25  
**Status:** Both directories contain IDENTICAL files (byte-for-byte diff confirms all 9 file pairs match)

---

## 1. Design Token Reference

### Core Brand Colors (from `tokens.js` — `window.BRAND`)

| Token | Hex | Usage |
|-------|-----|-------|
| `teal` | `#2BAEB4` | Primary brand, links, accent icons, gradient start |
| `tealDeep` | `#1E8A8F` | Eyebrow labels, deep accent, section headers |
| `green` | `#5DD07A` | Gradient end, positive indicators, checkmarks |
| `greenDeep` | `#3BB35E` | Deep green variant |
| `ink` | `#1F2D2F` | Primary text, borders, box-shadows, CTA backgrounds |
| `soft` | `#4A6568` | Secondary body text, descriptions |
| `muted` | `#8A9B9D` | Tertiary text, fine print, timestamps |
| `cream` | `#FBF7F1` | Light background |
| `paper` | `#FFFFFF` | Card backgrounds, white sections |
| `gradient` | `linear-gradient(135deg, #2BAEB4 0%, #5DD07A 100%)` | Brand gradient for text, bars, accents |
| `gradientText` | (CSS object) | Applied to accent words in headlines — teal→green clipped text |

### Typography (from `tokens.js` — `window.FONT`)

| Token | Value | Usage |
|-------|-------|-------|
| `main` | `'Questrial', system-ui, sans-serif` | Body copy, UI text, all primary typography |
| `display` | `'Fraunces', Georgia, serif` | Serif accent, pull-quote marks, guarantee seals |

### Additional Fonts (loaded in HTML)

- **Caveat** (400/500/700) — Handwritten signature for Lena's sign-off
- **Google Fonts preconnect** — `fonts.googleapis.com` + `fonts.gstatic.com`

### Background Colors Per Section (recurring palette across emails)

| Background | Hex | Typical Section |
|------------|-----|-----------------|
| Hero / Light cream | `#FFFBF0` | Hero area, intro sections |
| Warm cream | `#FAF7F0` | Method cards, subtle backgrounds |
| Warm yellow | `#FFF6E2` | Letter openings, story sections, reframe blocks |
| Soft teal/green | `#EAF6F2` | Definition blocks, guarantee sections, pull-quotes |
| Lavender | `#F0EDF8` | Expert quotes, product layer sections |
| Paper | `#FFFFFF` | Cards, testimonials, clean sections |
| Deep ink | `#1F2D2F` (B.ink) | CTA sections, signoff, footer |
| Product cream | `#F5F1EA` | Product showcase backgrounds |

### Accent Colors (per-component)

| Accent | Hex | Usage |
|--------|-----|-------|
| Sticker yellow | `#FFD866` | Part badges, parent story quote backgrounds |
| Soft coral | `#FFB5A0` | Negative comparison cards, method accents |
| Warm amber | `#E8A23D` | Method accents, layer accents, amber indicators |
| CTA green | `#D8F57C` | CTA button fill (on dark ink background) |
| Red indicator | `#D97757` | Negative "not covered" items, error states |

### Spacing & Sizing Constants

| Constant | Value | Usage |
|----------|-------|-------|
| `MW` (max width) | `420px` | Email shell width |
| Hero image height | `220–320px` | Varies by email (220 for info, 260 for product, 320 for story) |
| Card border radius | `16–24px` | Cards: 16–18px, product cards: 24px |
| Box shadow | `3px 3px 0` to `6px 6px 0` | Ink-colored drop shadows — signature "sticker" effect |
| Border | `2px solid #1F2D2F` | All card borders, consistent ink weight |
| Section padding | `28px 22px` | Standard section padding |
| Band height | `40–50px` | Gradient transition bands between sections |

### Hi-Fi Variant (different token set in `emails/hifi.jsx`)

The hi-fi prototype uses an **older/different** color palette:

| Token | Hi-Fi Value | Main Flow Value | Delta |
|-------|-------------|-----------------|-------|
| teal | `#14A0B4` | `#2BAEB4` | Slightly darker, less saturated |
| green | `#64C864` | `#5DD07A` | Warmer green |
| ink | `#1f2d2e` | `#1F2D2F` | Near-identical |
| cream | `#fdf9f3` | `#FBF7F1` | Near-identical |
| Font | Nunito | Questrial | Different geometric sans |

The hi-fi also uses `WELCOME10` as the discount code (not `BRIGHT10`), `Mel` as the founder name (not `Lena Bauer`), and a more traditional marketing voice.

---

## 2. Welcome Flow — Email-by-Email Breakdown (Flow 1: 6 emails)

### Architecture

- **Audience:** Organic signups (blog, SEO, referral)
- **Sender:** Lena Bauer, Founder, BrightKidCo, Mom of two
- **Voice:** Peer-to-peer mother — not clinical, not marketing
- **Principles:** No "just", no urgency, no speed claims, no generic testimonials
- **Timing:** Spread over +8 days

### Email 1 — Welcome (from `autistic-welcome/V10-final.jsx`, content from `variants/content.js`)

- **Timing:** Immediate
- **Theme:** Welcome + first email in the series
- **Source:** Loaded from `../autistic-welcome/V10-final.jsx` (not in the input file list — external dependency)

### Email 2 — The Mechanism: Body-Signal Explained (`emails-2-3.jsx`)

- **Timing:** +24 hours
- **Theme:** Education — no product pitch
- **Subject:** "The body-signal your child might not feel yet"
- **Preheader:** "The word nobody explained to you yet."
- **Hero badge:** "✿ Part two of six"
- **Headline:** "Why rewards / couldn't fix this."
- **Sections:**
  1. Hero image (diagram placeholder, 220px)
  2. Title block with part badge
  3. Letter opening ("Hi again.")
  4. Definition block — "Interoception" with gradient accent text
  5. Detail image (child noticing body, 180px)
  6. Reframe — 4 sticker-style reason cards (colored, rotated, with ink border + drop-shadow)
  7. Comparison — 3 cards (Pull-ups ✕ / Regular ✕ / Body-Signal ✓) with tinted header stripes
  8. OT expert quote (white card, purple-tinted background `#F0EDF8`)
  9. Soft product placement (`ProductShowcaseSoft`)
  10. Dark CTA section
  11. Signoff + OutLine + Footer
- **Background sequence:** `#FFFBF0` → `#FFF6E2` → `#EAF6F2` → `#FFF6E2` → `#FFFBF0` → `#F0EDF8` → ink

### Email 3 — Why Everything Failed Before (`emails-2-3.jsx`)

- **Timing:** +2 days
- **Theme:** Absolution — method walkthrough, no villains
- **Subject:** "Timers. Rewards. Naked days. Here's why none of it worked."
- **Preheader:** "It wasn't the method. It was the map."
- **Hero badge:** "✿ Part three of six"
- **Headline:** "It wasn't the method. / It was the map."
- **Sections:**
  1. Hero image (old map metaphor, 220px)
  2. Title block
  3. Letter opening ("Let's go back.")
  4. Methods — 4 cards (Timer / Rewards / Naked Training / Pull-ups), each with:
     - Numbered circle accent (teal, amber, green, coral)
     - Image placeholder per method
     - "The promise" vs "What actually happens" contrast
  5. Reframe — "None of this is your fault" (gradient accent text)
  6. Parent quote (yellow `#FFD866` card, slightly rotated -0.3deg)
  7. Soft product placement
  8. Dark CTA section
- **Background sequence:** `#FFF6E2` → `#FFFBF0` → `#FAF7F0` → `#EAF6F2` → `#FFF6E2` → ink

### Email 4 — How the Product Works: Soft Reveal (`emails-4-5.jsx`)

- **Timing:** +4 days
- **Theme:** First product email, no discount
- **Subject:** "This is where we show you the pants."
- **Preheader:** "The 3-layer thing, without the jargon."
- **Hero badge:** "✿ Part four of six"
- **Headline:** "What's actually / inside."
- **Sections:**
  1. Hero — product reveal image (260px, taller for product)
  2. Title block
  3. Letter opening ("Okay — here it is.")
  4. Product intro — name + mission statement centered
  5. Cross-section diagram (260px)
  6. 3 layers explained — each as a card with:
     - Accent-colored circle number
     - Image placeholder (macro detail)
     - Name, "what" (material), "does" (function)
  7. "What it feels like on your child" — checkmark list with teal dividers
  8. "What it means for you" — checkmark list
  9. Sensory-specific testimonial (yellow card, rotated -0.4deg)
  10. Objections — Q&A pairs with teal top borders
  11. Product lifestyle row (2-up fabric/body images)
  12. Full product showcase (`ProductShowcaseFull`) with price €34
  13. Dark CTA section
- **Background sequence:** `#FFFBF0` → `#FFF6E2` → `#F0EDF8` → `#FFFBF0` → `#EAF6F2` → `#FFF6E2` → `#FFFFFF` → `#F5F1EA` → ink

### Email 5 — Parent-to-Parent Deep Proof: Sarah's Story (`emails-4-5.jsx`)

- **Timing:** +6 days
- **Theme:** One narrative, no testimonial grid
- **Subject:** "Sarah's son wore nothing but pull-ups for 4 years."
- **Preheader:** "One real story — no marketing."
- **Hero badge:** "✿ Part five of six"
- **Headline:** "Sarah's son wore pull-ups / for four years." + subhead "Here's what changed."
- **Sections:**
  1. Full-width hero portrait (320px — tallest in the flow, portrait ratio ~4:5)
  2. Title block with subhead
  3. Letter opening ("Meet Sarah.")
  4. 4 chapters — each as a card with:
     - Chapter image placeholder (150px)
     - Eyebrow "Chapter N · label"
     - Italic title (direct quote)
     - Body text
  5. Pull-quote (centered, 48px quote mark, 22px italic text, gradient bar separator)
  6. "Why we chose this story" explanation
  7. Inline product reference (`ProductShowcaseMedium`) with "The method Sarah used" framing
  8. Dark CTA — "Try the pants Sarah used"
- **Background sequence:** `#FAF7F0` → `#FFFBF0` → `#FFF6E2` → `#EAF6F2` → `#FFFBF0` → ink

### Email 6 — The Invitation: 60-Day Calm Progress Guarantee (`email-6.jsx`)

- **Timing:** +8 days
- **Theme:** Risk-reversal as hero, no urgency
- **Subject:** "A small invitation (no pressure)."
- **Preheader:** "When you're ready. No pressure."
- **Hero badge:** "✿ Part six of six"
- **Headline:** "When you're / ready."
- **Sections:**
  1. Hero — gentle invitation image (240px)
  2. Title block
  3. Letter opening ("Here we are.")
  4. Guarantee hero — centered H2 with gradient "Calm Progress" accent
  5. **60-Day Seal/Badge** — circular SVG seal (200px):
     - Rotating ring text via SVG textPath: "· Calm Progress · No Questions · Real Returns · Sixty Full Days ·"
     - Inner: "Protected by" + "60" (56px gradient) + "Calm Days" + "Full refund · No forms"
  6. 3 guarantee points — horizontal cards with colored left-side ✓ check column (teal, green, amber)
  7. "What's covered" — checkmark list with gradient circle icons
  8. Returns policy quote (dashed teal border box)
  9. Full product showcase — "Start with one pair" at €34
  10. Closing letter (warm cream background)
  11. Dark CTA — "Start with one pair"
- **Background sequence:** `#FFFBF0` → `#FFF6E2` → `#EAF6F2` → `#FFFBF0` → `#F0EDF8` → `#FFF6E2` → ink

---

## 3. Flow 2 — Email-by-Email Breakdown (Discount Welcome: 4 emails)

### Architecture

- **Audience:** Signed up via discount popup
- **Code:** `BRIGHT10` — valid 7 days, 10% off first order
- **Sender:** Lena (same persona)
- **Timing:** Spread over ~7 days
- **New primitives:** `CodeBlock`, `ReminderBar`

### Email 1 — Code Delivery (`flow2-emails.jsx` → `F2Email1`)

- **Timing:** Immediate
- **Subject options:** "Your code is here: BRIGHT10" / "As promised — BRIGHT10 inside" / "Your 10% code (and a small note)"
- **Preheader:** "Your 10% code is here — no rush, valid for 7 days."
- **Hero badge:** "Welcome · 01 of 04"
- **Headline:** "Your code, / as promised."
- **Sections:**
  1. Title block (no hero image — code is the hero)
  2. Letter greeting ("Lena here 👋")
  3. **CodeBlock** — big centered code display:
     - Rounded card (22px radius), ink border, 4px drop-shadow
     - Gradient top bar (6px)
     - Label + code in dashed border mono-style (34px, Courier New)
     - "Tap to copy · Auto-applied at checkout" hint
  4. Full product showcase with discounted price (€30.60 = €34 minus BRIGHT10)
  5. Differentiation paragraph
  6. Trustpilot inline badge (4.9 stars, 2,400+ reviews)
  7. "What comes next" — 3 timeline items with teal pill badges ("In 36 hours", "In 4 days", "In a week")
  8. Dark CTA — "Shop with BRIGHT10"

### Email 2 — Mechanism (`flow2-emails.jsx` → `F2Email2`)

- **Timing:** +36 hours
- **Subject options:** "Before you use your code — one thing" / "The part most potty training advice skips" / "Why rewards couldn't fix what you're seeing"
- **Preheader:** "Interoception — the signal most methods miss. Plain words, no jargon."
- **Hero badge:** "Welcome · 02 of 04"
- **Headline:** "Before you use / BRIGHT10."
- **Sections:**
  1. Title block
  2. Letter opening
  3. Definition block — "Interoception" in white card with ink border + drop-shadow
  4. 3-card comparison (color-coded: red/amber/green circles with ✓/✕)
  5. OT quote (Dr. Amara Osei, Pediatric OT, London)
  6. Medium product showcase
  7. **ReminderBar** — "Your code is still here / BRIGHT10 · 5 days left" with timer icon
  8. Dark CTA with secondary link

### Email 3 — Parent Story: Sarah + Marcus (`flow2-emails.jsx` → `F2Email3`)

- **Timing:** +3 days
- **Subject options:** "One story, from one parent" / "After three years of trying everything" / "A mother whose situation might feel familiar"
- **Preheader:** "Tried timers, rewards, OT referrals. What finally changed for her 5-year-old."
- **Hero badge:** "Welcome · 03 of 04"
- **Headline:** "One story. / One parent." + subhead "This might feel familiar."
- **Sections:**
  1. Hero portrait (260px)
  2. Title block
  3. Letter opening ("Lena here again.")
  4. 4 chapters with timeline headers (Year 1 / Year 2 / Year 3 · low point / What changed)
  5. Pull-quote (Fraunces display font, 56px quote mark)
  6. Promise badges row (Trustpilot 4.9 / 60-day guarantee / Parent-to-parent real)
  7. **Full product showcase** — high conversion, "The pants Sarah used" framing, code pre-applied
  8. ReminderBar — "Your code is still waiting / BRIGHT10 · 2 days left"
  9. Dark CTA

### Email 4 — Guarantee Closer (`flow2-emails.jsx` → `F2Email4`)

- **Timing:** +2 days (code expiring)
- **Subject options:** "Protected for 60 days — even if your code expires today" / "Your code expires tomorrow — here's what matters more" / "When you're ready — the 60-day promise is the real reason"
- **Preheader:** "No questions, no fine print. What's covered when you're afraid of being disappointed again."
- **Hero badge:** "Welcome · 04 of 04"
- **Headline:** "Protected, / even if you wait."
- **Sections:**
  1. Title block
  2. Letter opening ("Lena — final note.")
  3. Guarantee hero with **SVG seal** (160px):
     - Double circle (solid + dashed)
     - Rotating text: "CALM PROGRESS · NO QUESTIONS · REAL RETURNS ·"
     - Center: "60" in Fraunces display + "days"
  4. Covered vs Not Covered — two cards:
     - Covered (green pill): child not ready, doesn't fit routine, slow progress, changed mind
     - Not a thing (coral pill): restocking fees, "final sale", prove you tried
  5. **Counter-testimonial** — Priya K. returned at week 8, refund in 3 days, no questions. Framing: "We share returns like this because the guarantee isn't marketing. It's the point."
  6. Full product showcase — "Start protected" with code reminder
  7. **Dual CTA** — primary green button + secondary transparent button ("Remind me later")
  8. Dashed code final reminder box

---

## 4. Component Hierarchy

### Shared Primitives (from `primitives.jsx`)

```
EmailShell (MW=420px, preheader, bg)
├── Preheader (hidden text, #F6F2EA bg)
├── Header (logo, centered)
├── [Hero image] — FramedImage → ImgFrame (dashed teal frame, corner SVGs)
├── TitleBlock
│   ├── PartBadge (yellow sticker, rotated -1.5deg, ink border)
│   └── H1 (40px, -0.8 letter-spacing, gradient accent word)
├── Band (gradient transition, 40px default)
├── Letter (paragraph stack, warm bg)
│   ├── First line (17px, ink, semibold)
│   └── Body paragraphs (15px, soft, 1.7 line-height)
├── [Content sections — varies per email]
│   ├── Eyebrow (10.5px, uppercase, 2px letter-spacing, tealDeep)
│   ├── H2 (28px default, -0.4 letter-spacing)
│   ├── Cards (ink border, 3px drop-shadow, 16-18px radius)
│   ├── Lists (checkmarks, dividers)
│   └── Quotes (yellow bg, rotated, 36px quote mark)
├── ProductShowcase[Full|Medium|Soft]
├── Band → CTAClose
│   ├── Intro text (14px, muted)
│   ├── CTA button (green #D8F57C on ink, 999px radius, 15.5px bold)
│   └── Fine print (11.5px, muted)
├── Signoff (dark card)
│   ├── Gradient top bar (4px)
│   ├── Avatar (58px circle, gradient ring)
│   ├── "A note from" / Lena Bauer / Founder role
│   ├── Dashed divider
│   ├── "With you," + Caveat handwritten "Lena" (42px, #D8F57C)
│   ├── SVG flourish
│   └── P.S. line
├── OutLine (italic unsubscribe-adjacent)
└── Footer
    ├── Tagline (Fraunces italic, 20px)
    ├── Nav links (3)
    ├── Social icons (SVG: Instagram, Facebook, TikTok)
    ├── Unsubscribe + address
    └── Gradient bar (60px wide, 3px tall)
```

### Product Showcase Variants (from `product-showcase.jsx`)

| Variant | Used In | Height | Features |
|---------|---------|--------|----------|
| `ProductShowcaseFull` | E4, E6, F2E1, F2E3, F2E4 | Hero 300px | Price, feature pills, 2-up sub-grid, CTA, guarantee badge |
| `ProductShowcaseMedium` | E5, F2E2 | — | Eyebrow, title, price, CTA (compact) |
| `ProductShowcaseSoft` | E2, E3 | — | Eyebrow, one-line description, text-only CTA |

### Flow 2 New Primitives

| Primitive | Purpose | Visual |
|-----------|---------|--------|
| `CodeBlock` | Discount code display | Rounded card, gradient top bar, dashed mono code (34px Courier), "tap to copy" hint |
| `ReminderBar` | Code expiry reminder strip | Timer icon, label + code in mono, horizontal strip with ink top/bottom borders |

---

## 5. Copy Patterns

### Subject Line Patterns

| Pattern | Examples |
|---------|---------|
| Curiosity gap | "The body-signal your child might not feel yet" |
| Method negation | "Timers. Rewards. Naked days. Here's why none of it worked." |
| Soft reveal | "This is where we show you the pants." |
| Story hook | "Sarah's son wore nothing but pull-ups for 4 years." |
| Permission-based | "A small invitation (no pressure)." |
| Code delivery | "Your code is here: BRIGHT10" |
| Pre-code education | "Before you use your code — one thing" |
| Guarantee lead | "Protected for 60 days — even if your code expires today" |

**Flow 2 provides 3 subject line variants per email** for A/B testing.

### Preheader Patterns

- Curiosity: "The word nobody explained to you yet."
- Reframe: "It wasn't the method. It was the map."
- Soft: "The 3-layer thing, without the jargon."
- Permission: "When you're ready. No pressure."
- Code: "Your 10% code is here — no rush, valid for 7 days."

### Letter Opening Patterns

- Email 1: "Hi again." / "Lena here 👋"
- Email 2: "Yesterday we said..." / "Hi again — Lena."
- Email 3: "Your OT probably meant well..."
- Email 4: "Four emails in and we still haven't shown you the product."
- Email 5: "Meet Sarah." / "Lena here again."
- Email 6: "Here we are." / "Lena — final note."

### CTA Button Text

| Email | Primary CTA | Secondary (Flow 2) |
|-------|-------------|---------------------|
| E2 | "See the pants" | — |
| E3 | "See the pants" | — |
| E4 | "See the pants" | — |
| E5 | "Try the pants Sarah used" | — |
| E6 | "Start with one pair" | — |
| F2E1 | "Shop with BRIGHT10" | "See how it works" |
| F2E2 | "See the pants" | "Read the full method" |
| F2E3 | "Start with what worked for Sarah" | "Not ready yet — that's okay" |
| F2E4 | "Start protected" | "Remind me later" |

### CTA Fine Print Patterns

- "No rush. No pressure. We'll be here when you have a quiet moment."
- "Read it when you have space. There's no rush."
- "Still reading, still deciding. That's exactly right."
- "When you're ready. Not before."
- "60-day guarantee · No questions · Real returns"
- "7 days · No questions · 60-day guarantee"

### Lena Sign-Off

```
With you,
[Lena in Caveat handwritten font, 42px, #D8F57C]

P.S. If you ever want to reply and tell me about your child — I read every one. Really.
```

### Voice Rules (from `content.js` header)

- Peer-to-peer mother (not clinical, not marketing)
- No "just"
- No urgency
- No speed claims
- No generic testimonials

---

## 6. Flow Structure Comparison

### Welcome Flow (Flow 1) — 6 emails over 8 days

| # | Theme | Timing | Product? | Purpose |
|---|-------|--------|----------|---------|
| 1 | Welcome | Immediate | No | Onboard, set tone |
| 2 | The Mechanism | +24h | Soft nod | Educate on interoception |
| 3 | Absolution | +2d | Soft nod | Walk through failed methods |
| 4 | The Product | +4d | Full reveal | Show the 3-layer design |
| 5 | One Story | +6d | Medium | Sarah's narrative proof |
| 6 | The Invitation | +8d | Full + guarantee | 60-day guarantee closer |

### Discount Welcome Flow (Flow 2) — 4 emails over 7 days

| # | Theme | Timing | Product? | Purpose |
|---|-------|--------|----------|---------|
| 1 | Code Delivery | Immediate | Full | Deliver BRIGHT10, show product |
| 2 | Mechanism | +36h | Medium | Educate on interoception |
| 3 | Parent Story | +3d | Full | Sarah + Marcus narrative |
| 4 | Guarantee Closer | +5d | Full + guarantee | 60-day seal, covered/not covered |

### Structural Differences Between Flows

| Aspect | Flow 1 | Flow 2 |
|--------|--------|--------|
| Length | 6 emails | 4 emails |
| Code | None (first-order 10% mentioned in E6) | BRIGHT10, 7-day expiry |
| Education depth | 2 emails (E2 mechanism, E3 methods) | 1 email (E2 combined) |
| Story | Sarah's story in E5 (4 chapters) | Sarah + Marcus in E3 (4 chapters, different details) |
| Urgency | Zero | Gentle code countdown |
| Guarantee | Introduced in E6 | Introduced in E4, with covered/not covered |
| CTA style | Single primary | Primary + secondary (dual CTA) |
| Unique components | — | CodeBlock, ReminderBar, Trustpilot badge, promise badges, counter-testimonial |

---

## 7. Wireframe Variants (from `wireframes.jsx`)

The wireframe file contains **9 low-fidelity wireframe variants** (3 per email, for the first 3 emails):

### Email 1 Variants

| Variant | Subject | Approach |
|---------|---------|----------|
| A | "Welcome! Here's 10% off →" | Classic: hero + code box + CTA + free guide upsell |
| B | "Hey {first_name}, welcome to BrightKidCo 👋" | Text-first, minimal, inline code, founder signature |
| C | "10% off + a little secret about potty training" | Story-driven hook, 3-tip list, code at bottom |

### Email 2 Variants

| Variant | Subject | Approach |
|---------|---------|----------|
| A | "Potty training is hard. Here's why." | Myth vs truth cards, "our approach" box |
| B | "The messy truth about potty training (from a mom of 3)" | Founder story, pull quote, product reveal |
| C | "Quick Q: where are you in potty training?" | Interactive — 4 tappable stages, segmentation |

### Email 3 Variants

| Variant | Subject | Approach |
|---------|---------|----------|
| A | "⏰ Your 10% off expires tomorrow" | Urgency banner, review cards, stats bar |
| B | "What other parents are saying..." | UGC grid, social proof, code reminder |
| C | "Last chance — we made you a bundle" | Bundle offer, itemized list, price comparison |

**Key observation:** The wireframes use `WELCOME10` as the code and `Mel` as the founder name — different from the final flow which uses `BRIGHT10` and `Lena Bauer`. The wireframes also include urgency patterns ("expires tomorrow", "⏰ Expires in 24h") that were deliberately removed from the final flows.

### Wireframe Design Tokens (separate from main flow)

| Token | Value | Note |
|-------|-------|------|
| ink | `#2a2a2a` | Slightly lighter than main flow's `#1F2D2F` |
| accent | `#c49a5a` | Muted gold — not in main flow |
| teal | `#14A0B4` | Same as hi-fi, different from main flow |
| Font hand | Caveat / Patrick Hand | Wireframe-specific |
| Font mono | JetBrains Mono | Wireframe-specific |
| Shell width | 380px | Narrower than main flow's 420px |

---

## 8. Variant Comparison: EMAIL MARKETING vs EMAIL MARKETING-2

**Result: ALL 9 FILES ARE BYTE-FOR-BYTE IDENTICAL.**

```
Welcome Flows - 10 Emails.html: IDENTICAL
content.js:                      IDENTICAL
content-flow2.js:                IDENTICAL
emails-2-3.jsx:                  IDENTICAL
emails-4-5.jsx:                  IDENTICAL
email-6.jsx:                     IDENTICAL
flow2-emails.jsx:                IDENTICAL
hifi.jsx:                        IDENTICAL
wireframes.jsx:                  IDENTICAL
```

The `-2` directory appears to be a backup or duplicate copy with no design changes.

---

## 9. Missing, Incomplete, and Experimental Patterns

### Missing Files (referenced but not in input list)

| File | Referenced By | Status |
|------|--------------|--------|
| `tokens.js` | HTML `<script src="../autistic-welcome/variants/tokens.js">` | EXISTS in `autistic-welcome/variants/` — not in input list but read separately |
| `V10-final.jsx` (Email 1) | HTML `<script src="../autistic-welcome/V10-final.jsx">` | EXISTS — Email 1 implementation is external to the welcome-flow directory |
| `app.jsx` | HTML `<script src="app.jsx">` | EXISTS — React app mount, screen switching |
| `design-canvas.jsx` | HTML `<script src="design-canvas.jsx">` | EXISTS — Figma-like canvas wrapper, not email content |

### Incomplete Patterns

1. **No actual images** — Every image is a placeholder (`ImgFrame` with dashed teal border and descriptive label). No real photography, no product shots, no lifestyle images exist in code.

2. **No responsive/email-client CSS** — The prototypes are React-rendered in a browser canvas, not actual HTML emails. No `<table>` layout, no inline CSS for email clients, no Outlook/Gmail compatibility.

3. **No dark mode variants** — Single light-mode design only.

4. **No mobile-specific breakpoints** — `MW=420px` is fixed width. No media queries.

5. **Wireframes are exploratory only** — 9 wireframe variants exist for emails 1-3 but were not carried forward into the final flow. They use different tokens, different founder name, and include urgency patterns that were intentionally excluded.

6. **Hi-fi prototype is legacy** — Uses older color palette (`#14A0B4` vs `#2BAEB4`), different font (Nunito vs Questrial), different code (`WELCOME10` vs `BRIGHT10`), different founder name (`Mel` vs `Lena`). Represents an earlier design iteration.

### Experimental Patterns (in wireframes)

1. **Interactive segmentation** (Email 2, Variant C) — "Where are you in the journey?" with 4 tappable stages. Not carried forward.

2. **Bundle offer** (Email 3, Variant C) — 3 undies + guide + stickers + free shipping at $49 (was $68). Not carried forward.

3. **Urgency patterns** — "⏰ Expires in 24h", "expires tonight at midnight". Deliberately removed from final flows per voice rules ("no urgency").

4. **Free guide upsell** (Email 1, Variant A + hi-fi) — "The BrightKidCo Potty Training Playbook" / "Potty training in 3 days guide". Present in hi-fi but not in final flow.

### Design Decisions Worth Noting

1. **Sticker aesthetic** — Cards use `2px solid ink` borders + `3px 3px 0 ink` drop-shadows. This creates a consistent "sticker" or "cutout" feel across all components.

2. **Rotated elements** — Part badges rotate -1.5deg, quote cards rotate -0.3 to -0.4deg. Adds handmade warmth.

3. **Gradient text** — The accent word in headlines uses `gradientText` (teal→green clipped to text). Used sparingly for emphasis.

4. **Band transitions** — Every section change uses a 40-50px gradient band blending the previous and next background colors. No hard color breaks.

5. **Quote styling** — Consistent: yellow `#FFD866` background, ink border, drop-shadow, large `"` mark (36px), italic body, bold attribution.

6. **No urgency, ever** — The final flows contain zero countdown timers, zero "limited stock", zero "expires soon" messaging. Even the discount flow (Flow 2) handles code expiry as gentle reminders, not pressure.

7. **Product pricing** — Starter pair: €34. With BRIGHT10: €30.60. Free shipping over €50.

8. **60-Day Calm Progress Guarantee** — The core trust mechanism. Covers: child refusing, no progress, regression, any reason. No questions, no forms, no proof required. Includes a counter-testimonial (return story) to demonstrate the guarantee is real.

---

## 10. Complete File Inventory

### Version 1 (`BKCO - EMAIL MARKETING_extracted/`)

| File | Size | Content |
|------|------|---------|
| `welcome-flow/Welcome Flows - 10 Emails.html` | 2,545 chars | React canvas host, loads all JSX |
| `welcome-flow/content.js` | 17,196 chars | Flow 1 copy: emails 2-6 + shared signoff/footer |
| `welcome-flow/content-flow2.js` | 9,495 chars | Flow 2 copy: emails 1-4 |
| `welcome-flow/emails-2-3.jsx` | 12,045 chars | Email 2 + Email 3 JSX components |
| `welcome-flow/emails-4-5.jsx` | 12,051 chars | Email 4 + Email 5 JSX components |
| `welcome-flow/email-6.jsx` | 7,532 chars | Email 6 JSX component |
| `welcome-flow/flow2-emails.jsx` | 25,471 chars | Flow 2 all 4 emails + CodeBlock + ReminderBar |
| `emails/hifi.jsx` | 8,255 chars | Legacy hi-fi Email 1 (different tokens) |
| `emails/wireframes.jsx` | 17,537 chars | 9 wireframe variants (emails 1-3) |

### Shared Files (not in input list, read separately)

| File | Size | Content |
|------|------|---------|
| `welcome-flow/primitives.jsx` | 12,734 chars | Shared components: ImgFrame, Band, Header, TitleBlock, Letter, Eyebrow, H2, CTAClose, Signoff, OutLine, Footer, EmailShell |
| `welcome-flow/product-showcase.jsx` | 10,948 chars | ProductShowcaseFull, ProductShowcaseMedium, ProductShowcaseSoft |
| `welcome-flow/design-canvas.jsx` | 29,843 chars | Figma-like canvas wrapper (not email content) |
| `welcome-flow/app.jsx` | 2,062 chars | React app mount |
| `autistic-welcome/variants/tokens.js` | ~700 chars | BRAND + FONT token definitions |

### Version 2 (`BKCO - EMAIL MARKETING-2_extracted/`)

All 9 files are byte-for-byte identical to Version 1.
