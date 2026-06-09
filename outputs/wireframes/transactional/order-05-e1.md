# Wireframe: Order Confirmation — E1 | Cross-Level

## 1. Metadata

| Field | Value |
|-------|-------|
| **Flow** | Order Confirmation (Flow 05) |
| **Position** | E1 — Immediate (within 1 min of purchase) |
| **Level** | Cross-Level (R1-R6 Calibration, all 4 levels + GF simultaneously) |
| **Copy File** | /root/projects/brightkidco/outputs/copy/transactional/order-05-e1.md |
| **Strategy Map Entry** | transactional.emails.e1 |
| **Flow Signature** | clean-efficient |
| **Level Calibration** | Cross-Level — single visual direction, no level-specific imagery, transactional primary with secondary cross-sell, zero urgency cues, neutral emerald palette, 1.8 line-height, signal-dot bullets, Signal Arrival illustration |
| **Component Categories Used** | HERO, TEXT/LETTER, TESTIMONIAL, MECHANISM/EDUCATION, PRODUCT, CTA, GUARANTEE/TRUST, DECORATIVE |
| **Total Estimated Height** | ~3,400px (desktop) / ~3,800px (mobile) |

---

## 2. Strategy Box

**Big Idea:** The email reads like opening a warmly wrapped package — a clean, unboxing-like structure where the top half is crisp and functional (order details, tracking) and the bottom half unfolds into soft, family-warmth visuals. The visual journey mirrors the transition from transaction to relationship: cold confirmation at the top, warm belonging at the bottom. A single emerald-green thread of connection runs vertically through both halves, a subtle visual reminder that this purchase is the beginning of a partnership, not the end of a sale.

**Emotional Arc Position:** Transactional clarity → Warm Lena touch → Anticipation. This email arrives at the moment of highest purchase commitment — the order is placed, the money is spent. The top half confirms the transaction (relief, clarity). The middle half introduces Lena and the mechanism (warmth, trust). The bottom half provides cross-sell and guarantee (reduced risk, anticipation). The reader transitions from "I bought something" to "I'm part of something."

**Component Selection Rationale:**
- HERO-2 (Warm Hero): Subject-line echo with transactional confirmation — functional warmth, not sales pressure.
- LETTER-01 (Paragraph Stack): Long-form letter format for Lena's welcome and Week 1 guidance. 200+ word copy density supports the warm section.
- SP-04 (Trust Pills Row): Micro trust signals (60-day, free shipping, reply-to-Lena) — transactional credibility, not persuasion.
- EDU-14 (Quick Reference Card): Week 1 what-to-expect card — scannable, practical, no fluff.
- ProductShowcaseMedium: Secondary cross-sell (Wash Bag, Mattress Protector) — presented as optional add-ons, not essential.
- FLOW-8 (Post-Purchase Education): "Track your order" CTA + "Add the Wash Bag" secondary CTA.
- TRUST-1 (60-Day Seal): Guarantee positioned after cross-sell, risk reversal at the emotional low point.
- UTIL-01 (Gradient Band): Hand-drawn emerald squiggle divider between transactional and warm halves.

**Differentiation Note:** This is a transactional email — primary purpose is confirmation and tracking, secondary is warm welcome and minimal cross-sell. The "Signal Arrival" illustration (dotted neural pathway converging to emerald glow) is unique to this email and visually reinforces the core BrightKidCo promise at the exact moment of purchase commitment. No urgency cues anywhere (per R3/L3 zero-urgency requirement). Emerald works universally — not pink (gendered), not blue (clinical), not gold (luxury).

---

## 3. Creative Box

**Color Palette:**
- Primary: #2BAEB4 (B.teal) — CTA buttons, accent highlights, signal dots, link text
- Secondary: #5DD07A (B.green) — Success indicators, secondary accents, hairline borders
- Accent: #FFD866 — Badge backgrounds, floating badges
- Background: #FBF7F1 (B.cream) — Warm cream canvas, quote blocks, guarantee banner
- Text: #1F2D2F (B.ink) — Primary body text, headings, near-black headlines
- Page Background: #FFFFFF (B.paper) — Email canvas, receipt card background
- Secondary Text: #4A6568 (B.soft) — Body copy, secondary paragraphs
- Tertiary Text: #8A9B9D (B.muted) — Captions, footer, metadata (order #, dates)
- CTA Text on Dark: #D8F57C (Lime green) — CTA button text on dark backgrounds
- Additional: #E5E5E5 — Hairline borders (receipt card, dividers)
- Additional: #666666 — Footer text, secondary metadata
- Additional: #999999 — Order number monospace, muted metadata
- Additional: #B8B8B8 — Signal Arrival illustration (faint disconnected pulses)

**Typography:**
- Heading: Questrial, 28px desktop / 22px mobile, weight 700, letter-spacing -0.3px
- Section Headers: Questrial, 20px desktop / 17px mobile, weight 600
- Body: Helvetica/Arial/sans-serif, 16px desktop / 15px mobile, line-height 1.8
- Order Details: Courier New, monospace, 14px desktop / 13px mobile
- Footer: Questrial, 11px desktop / 10px mobile
- Accent: Fraunces, 24px desktop / 20px mobile, italic (pull quotes)

**Border Radius:** Cards: 16px, Buttons: 8px (rounded), Images: 20px, Receipt Card: 8px, Small: 12px
**Shadow:** Primary: 6px 6px 0 B.ink (card shadow), Secondary: 3px 3px 0 B.ink (sub-card shadow)
**Spacing:** Section gap: 44px, H-padding: 32px desktop / 20px mobile, Card padding: 24/22px, Element gap: 16px

---

## 4. Layout ASCII

```
┌──────────────────────────────────────────────────────────┐
│ ┌──────────────────────────────────────────────────────┐ │
│ │                  [PREHEADER BAR]                     │ │ 36px
│ │  Your BrightKidCo order is locked in. Here's what   │ │
│ │  your first week looks like...                       │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │              [HEADER — Logo + From Name]             │ │ 80px
│ │         BrightKidCo · Lena from BrightKidCo         │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │              HERO-2: Warm Hero                       │ │ ~200px
│ │                                                      │ │
│ │  "Your order is confirmed ✓"                        │ │
│ │   [H1 — Questrial 28px/22px, B.ink]                │ │
│ │                                                      │ │
│ │  "Thank you, your order is placed and being prepped."│ │
│ │   [Subhead — Questrial 17px, B.soft]               │ │
│ │                                                      │ │
│ │  [ Track your order ]                               │ │
│ │   [CTA — B.teal bg, D8F57C text, 8px radius]      │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │        RECEIPT CARD — Order Details                  │ │ ~320px
│ │                                                      │ │
│ │  ┌──────────────────────────────────────────────┐   │ │
│ │  │  [bg: #FFFFFF, 1px #E5E5E5 border, 8px r]  │   │ │
│ │  │                                              │   │ │
│ │  │  "Your Order:"                               │   │ │
│ │  │  ──────────── 1px #E5E5E5 rule ──────────── │   │ │
│ │  │                                              │   │ │
│ │  │  3+3 Body-Signal Learning Layer Bundle (6)  │   │ │
│ │  │  [Helvetica 16px, B.ink, line-height 1.8]  │   │ │
│ │  │                                              │   │ │
│ │  │  ──────────── 1px #E5E5E5 rule ──────────── │   │ │
│ │  │                                              │   │ │
│ │  │  Order #: BKC-[ORDER_NUMBER]                 │   │ │
│ │  │  [Courier New 14px, #999999, monospace]      │   │ │
│ │  │                                              │   │ │
│ │  │  Shipping to: [SHIPPING_ADDRESS]             │   │ │
│ │  │  [Helvetica 14px, B.muted]                   │   │ │
│ │  │                                              │   │ │
│ │  │  Estimated delivery: [DELIVERY_DATE]         │   │ │
│ │  │  [Helvetica 14px, B.muted]                   │   │ │
│ │  │                                              │   │ │
│ │  │  ──────────── 1px #E5E5E5 rule ──────────── │   │ │
│ │  │                                              │   │ │
│ │  │  Tracking: You'll receive a shipping         │   │ │
│ │  │  notification with tracking as soon as it    │   │ │
│ │  │  leaves our facility.                        │   │ │
│ │  │  [Helvetica 14px, B.muted]                   │   │ │
│ │  │                                              │   │ │
│ │  │  We'll send you a tracking link the moment   │   │ │
│ │  │  it ships, usually within 1-2 business days. │   │ │
│ │  │  [Helvetica 14px, B.muted]                   │   │ │
│ │  └──────────────────────────────────────────────┘   │ │
│ │  [No emerald in receipt card — reserved for below]   │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │     WHAT'S INSIDE — Package Contents                 │ │ ~160px
│ │                                                      │ │
│ │  "What's inside your package:"                      │ │
│ │  [Questrial 20px, B.ink, weight 600]                │ │
│ │                                                      │ │
│ │  ◉ 6 pairs of Body-Signal Learning Layer            │ │
│ │    underwear (mix of sizes selected)                │ │
│ │  ◉ Quick-start guide, one page, no fluff            │ │
│ │  [Signal-dot bullets: 6px emerald #2BAEB4]          │ │
│ │  [Helvetica 16px, B.soft, line-height 1.8]         │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌─────── HAND-DRAWN SVG SQUIGGLE DIVIDER ──────────────┐ │ 32px
│ │  ~~~~/~~~~/~~~~/~~~~/~~~~/~~~~/~~~~/~~~~/~~~~/~~~~~ │ │
│ │  Emerald #2BAEB4 at 70% opacity, 2px stroke          │ │
│ │  NOT a straight horizontal rule                      │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │     SIGNAL ARRIVAL ILLUSTRATION — Custom SVG         │ │ ~120px
│ │                                                      │ │
│ │  ● · · · · · · · · · · ○                           │ │
│ │  [Faint dots] [Signal path] [Emerald glow circle]   │ │
│ │                                                      │ │
│ │  Dotted neural pathway, left to right:              │ │
│ │  - Faint disconnected pulses (#B8B8B8) at left      │ │
│ │  - Converging to solid emerald line (#2BAEB4)       │ │
│ │  - Arriving at soft glowing circle (emerald glow)   │ │
│ │                                                      │ │
│ │  Hidden detail: I, II, III in 6px grey type on      │ │
│ │  left pulses (Three Frequencies easter egg)          │ │
│ │                                                      │ │
│ │  [Full-width 600px, 120px tall desktop / 80px mobile]│ │
│ │  [Apple Mail: CSS pulse animation, 1.5s loop]       │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │     LETTER-01: Warm Welcome — Lena Voice             │ │ ~600px
│ │                                                      │ │
│ │  "Welcome to the family, for real."                  │ │
│ │  [Questrial 20px, B.ink, weight 600]                │ │
│ │                                                      │ │
│ │  "That moment when you hit 'place order',           │ │
│ │   I know what was on your mind. Whether your        │ │
│ │   child says 'I need to go' after it's already      │ │
│ │   happened, or doesn't react to being wet at all,   │ │
│ │   or walks around in a wet pull-up like nothing's   │ │
│ │   wrong, you've taken a step that matters."         │ │
│ │  [Helvetica 16px, B.soft, line-height 1.8]         │ │
│ │                                                      │ │
│ │  "I've been where you are. Both my autistic sons    │ │
│ │   went through it, one trained at 6, the other at   │ │
│ │   almost 8. I know the hope, the hesitation, the   │ │
│ │   'what if this doesn't work either' feeling."      │ │
│ │                                                      │ │
│ │  [PULL QUOTE — Cream Card, Mint left accent]        │ │
│ │  ┌──────────────────────────────────────────────┐   │ │
│ │  │ "Week 1, what to expect:"                    │   │ │
│ │  └──────────────────────────────────────────────┘   │ │
│ │  [bg: B.cream #FBF7F1, left-border: 3px B.green]   │ │
│ │                                                      │ │
│ │  "Put the underwear on your child for 1-2 hours    │ │
│ │   at home. Don't prompt. Don't ask. Don't set a    │ │
│ │   timer. Just let them wear it and go about your    │ │
│ │   normal day."                                      │ │
│ │                                                      │ │
│ │  "The Body-Signal Learning Layer creates a gentle   │ │
│ │   30-60 second 'uh-oh' sensation, gentle sensation  │ │
│ │   that lasts that gives the brain time to register: │ │
│ │   something happened."                               │ │
│ │                                                      │ │
│ │  "Some kids show awareness in 2 weeks. Others need  │ │
│ │   8 weeks. Both are normal. The first win might be  │ │
│ │   small, a pause, a look down, a walk toward the   │ │
│ │   bathroom. Those count."                            │ │
│ │                                                      │ │
│ │  [BOLD ANCHOR — "Important:"]                       │ │
│ │  "No pressure. No schedules. The underwear does     │ │
│ │   the teaching. Your job is just to let it happen." │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │     RECOGNITION ANCHORS — What to Watch For          │ │ ~300px
│ │                                                      │ │
│ │  "Over the next few weeks, you might notice things  │ │
│ │   like:"                                             │ │
│ │  [Questrial 17px, B.ink]                             │ │
│ │                                                      │ │
│ │  ● Your child pausing mid-play and looking down,    │ │
│ │    that's the signal landing                         │ │
│ │  ● Pulling at their pants in awareness, the first   │ │
│ │    time they notice                                  │ │
│ │  ● Saying 'wet' or showing you with a gesture,      │ │
│ │    any acknowledgment counts                         │ │
│ │  ● Staying dry 2 hours instead of 30 minutes,       │ │
│ │    small but real progress                           │ │
│ │  ● Walking toward the bathroom, even after the fact │ │
│ │                                                      │ │
│ │  [Signal-dot bullets: 6px emerald #2BAEB4 circles]  │ │
│ │  [Helvetica 16px, B.soft, line-height 1.8]         │ │
│ │                                                      │ │
│ │  "If you see any of these, that's the Body-Signal   │ │
│ │   Learning working. Not every kid shows the same    │ │
│ │   signs, and not at the same speed. That's okay.    │ │
│ │   Your child's timeline is the right timeline."     │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌─────── 1px RULE — #E5E5E5 — Tonal Shift ────────────┐ │ 1px
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │     CROSS-SELL — Bonus Items (2-Column Grid)         │ │ ~340px
│ │                                                      │ │
│ │  "While you're waiting for delivery, a few things   │ │
│ │   that pair with your purchase:"                    │ │
│ │  [Questrial 17px, B.soft]                           │ │
│ │                                                      │ │
│ │  ┌─────────────────┐  ┌─────────────────┐          │ │
│ │  │  [WASH BAG]     │  │  [MATTRESS      │          │ │
│ │  │  $14.99         │  │   PROTECTOR]    │          │ │
│ │  │                 │  │  $24.99         │          │ │
│ │  │  Keeps the      │  │  For nighttime  │          │ │
│ │  │  learning signal│  │  body-signal    │          │ │
│ │  │  strong, wash   │  │  learning.      │          │ │
│ │  │  after wash.    │  │  Protected      │          │ │
│ │  │                 │  │  mattress means │          │ │
│ │  │                 │  │  zero stress.   │          │ │
│ │  └─────────────────┘  └─────────────────┘          │ │
│ │  [2px B.ink border, 16px radius, 6px shadow]       │ │
│ │  [Mobile: stacks to single column at 480px]        │ │
│ │                                                      │ │
│ │  "Both are optional add-ons, not essentials. Your   │ │
│ │   6-pair bundle is all you need to start."          │ │
│ │  [Questrial 14px, B.muted, italic]                  │ │
│ │                                                      │ │
│ │  [ Add the Wash Bag ($14.99) ]                      │ │
│ │  [CTA — B.teal bg, D8F57C text, 8px radius]       │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │     TRUST-1: 60-Day Seal — Guarantee                │ │ ~180px
│ │                                                      │ │
│ │  ┌──────────────────────────────────────────────┐   │ │
│ │  │  [Hairline emerald left border: 3px B.green] │   │ │
│ │  │  [bg: B.cream #FBF7F1, full-width band]      │   │ │
│ │  │                                              │   │ │
│ │  │  "60 days to try it. By your judgment.        │   │ │
│ │  │   If it doesn't work for your child,         │   │ │
│ │  │   full refund. No forms. No hoops.           │   │ │
│ │  │   Just email us and we handle it."           │   │ │
│ │  │                                              │   │ │
│ │  │  [Questrial 16px, B.ink, line-height 1.6]   │   │ │
│ │  │  [padding-left: 20px, 20px vertical]         │   │ │
│ │  └──────────────────────────────────────────────┘   │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │          SIGNOFF — Lena Sign-Off                     │ │ ~280px
│ │                                                      │ │
│ │  ┌──────────────────────────────────────────────┐   │ │
│ │  │  [Avatar: 58px circle, gradient ring]        │   │ │
│ │  │  "A note from" eyebrow                       │   │ │
│ │  │  "Lena Bauer"                                │   │ │
│ │  │  "Founder · BrightKidCo · Mom of two"        │   │ │
│ │  │                                              │   │ │
│ │  │  ─ ─ ─ dashed divider ─ ─ ─                 │   │ │
│ │  │                                              │   │ │
│ │  │  "Thanks for trusting us with your order.    │   │ │
│ │  │   If you have a question, about the product, │   │ │
│ │  │   the washing instructions, what to expect,  │   │ │
│ │  │   hit reply. You'll get me, not a template,  │   │ │
│ │  │   not a bot. I read everything."             │   │ │
│ │  │                                              │   │ │
│ │  │  Talk soon,                                  │   │ │
│ │  │  Lena (Caveat font, 42px, D8F57C)           │   │ │
│ │  │  [flourish SVG]                              │   │ │
│ │  │                                              │   │ │
│ │  │  ─ ─ ─ dashed divider ─ ─ ─                 │   │ │
│ │  └──────────────────────────────────────────────┘   │ │
│ │  [bg: B.ink, card bg: #1F2A2C, 22px radius]        │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │                 FOOTER — Standard                     │ │ ~200px
│ │                                                      │ │
│ │  BrightKidCo                                        │ │
│ │  [Physical Address]                                 │ │
│ │  [Unsubscribe Link]                                 │ │
│ │  [10px font, #666666, minimal]                      │ │
│ │                                                      │ │
│ │  "Reply to this email. Lena reads every response."   │ │
│ │  [deliverability signal, 11px, B.muted]             │ │
│ │                                                      │ │
│ │  [Gradient accent bar: 60px x 3px]                  │ │
│ └──────────────────────────────────────────────────────┘ │
└──────────────────────────────────────────────────────────┘
```

---

## 5. Section Specs

### Section 1: Preheader Bar
- **Component:** UTIL-06 — Preheader Bar
- **Exact Copy:** "Your BrightKidCo order is locked in. Here's what your first week looks like, and what to expect when the package lands."
- **Background:** #F6F2EA
- **Typography:** Questrial 11px, italic, B.muted
- **Padding:** 6px 20px, centered
- **Notes:** Hidden in most email clients, visible in preview text. Complements subject line without repeating. 97 chars, within 100-char recommendation.

### Section 2: Header
- **Component:** UTIL-08 — Nav Bar
- **Exact Copy:** "Lena from BrightKidCo" (from name)
- **Image:** BrightKidCo logo, 34px height
- **Background:** B.paper (#FFFFFF)
- **Padding:** 24px 20px 0, centered
- **Notes:** Simple, clean header. No navigation links (transactional, not promotional).

### Section 3: Hero — HERO-2 Warm Hero
- **Component:** HERO-2 — Warm Hero
- **Exact Copy:**
  - Headline: "Your order is confirmed ✓"
  - Subhead: "Thank you, your order is placed and being prepped."
  - CTA: "Track your order"
- **Background:** B.paper (#FFFFFF)
- **Typography:**
  - Headline: Questrial 28px desktop / 22px mobile, weight 700, letter-spacing -0.3px, color B.ink
  - Subhead: Questrial 17px, weight 500, color B.soft, line-height 1.5
  - CTA: Questrial 15.5px, weight 700, letter-spacing 0.3px
- **CTA Spec:** B.teal (#2BAEB4) background, #D8F57C text, 8px border-radius, full-width on mobile / 280px desktop, 52px height
- **Section padding:** 0 32px
- **Notes:** Subject-line echo as H1. Transactional confirmation — functional warmth, not sales pressure. The checkmark (✓) is a visual success signal. CTA is "Track your order" — transactional, not promotional.

### Section 4: Receipt Card — Order Details
- **Component:** Custom card (not from component index)
- **Exact Copy (VERBATIM):**
  - "Your Order:"
  - "3+3 Body-Signal Learning Layer Bundle (6 pairs)"
  - "Order #: BKC-[ORDER_NUMBER]"
  - "Shipping to: [SHIPPING_ADDRESS]"
  - "Estimated delivery: [DELIVERY_DATE]"
  - "Tracking: You'll receive a shipping notification with tracking as soon as it leaves our facility."
  - "We'll send you a tracking link the moment it ships, usually within 1-2 business days."
- **Background:** #FFFFFF (white, sharp contrast against cream canvas — signals "this is official")
- **Border:** 1px #E5E5E5, 8px border-radius
- **Internal dividers:** 1px #E5E5E5 hairline rules between sections
- **Typography:**
  - "Your Order:" — Questrial 18px, B.ink, weight 600
  - Product name — Helvetica 16px, B.ink, line-height 1.8
  - Order number — Courier New 14px, #999999, monospace (clearly metadata, not content)
  - Address/dates — Helvetica 14px, B.muted
  - Tracking note — Helvetica 14px, B.muted
- **Notes:** No emerald in the receipt card — emerald is reserved for the warm half below. The white background signals "official" against the cream canvas. Monospace order number reinforces the transactional nature.

### Section 5: What's Inside — Package Contents
- **Component:** Custom list (LETTER-01 variant)
- **Exact Copy (VERBATIM):**
  - "What's inside your package:"
  - "6 pairs of Body-Signal Learning Layer underwear (mix of sizes selected)"
  - "Quick-start guide, one page, no fluff"
- **Background:** B.paper (#FFFFFF)
- **Bullet style:** Signal-dot icons — 6px filled emerald (#2BAEB4) circles replacing default bullet points. 4px spacing between dot and text.
- **Typography:**
  - Header: Questrial 20px, B.ink, weight 600
  - List items: Helvetica 16px, B.soft, line-height 1.8
- **Section padding:** 0 32px
- **Notes:** Brief, scannable content. Signal-dot bullets are the brand's decorative language — consistent across all emails.

### Section 6: Hand-Drawn SVG Squiggle Divider
- **Component:** Custom SVG (decorative)
- **Exact Copy:** None (decorative)
- **SVG:** Organic wave line, full 600px width, hand-drawn uneven wave, emerald #2BAEB4 at 70% opacity, 2px stroke. NOT a straight horizontal rule.
- **Height:** 32px
- **Notes:** Marks the transition from transactional half (order details, tracking) to warm half (Lena voice, education). The hand-drawn quality reinforces the human, non-corporate feel. Degrades to a thin rule in email clients that strip SVG.

### Section 7: Signal Arrival Illustration — Custom SVG
- **Component:** Custom illustration (not from component index)
- **Exact Copy:** None (visual only)
- **SVG Description:** Dotted neural pathway traveling left to right:
  - Left side: Faint disconnected pulses (#B8B8B8 dots) — the "signal before registration"
  - Center: Converging to a solid emerald (#2BAEB4) line — the "signal traveling"
  - Right side: Soft glowing emerald circle — the "brain registering the signal"
- **Size:** Full-width at 600px, 120px tall on desktop, 80px on mobile
- **Hidden Detail (Easter Egg):** Faint pulses at left side numbered "I, II, III" in 6px grey type (#B8B8B8), barely visible. Represents three signals: bladder fullness, wetness after, brain's delayed registration.
- **Animation (Apple Mail only):** Dots pulse sequentially left to right (each dot 200ms, full animation ~1.5s, loops on page open only). Final emerald circle has slow 4s glow pulse (opacity 0.4 → 1.0). CSS @keyframes with cubic-bezier(0.4, 0, 0.2, 1).
- **Fallback (Gmail, Outlook):** Static image of completed signal path, all dots visible, emerald circle at full opacity.
- **Notes:** Unique to Order Confirmation email. Visually reinforces the core BrightKidCo promise at the exact moment of purchase commitment. Only opacity and transform animations (no layout-triggering properties).

### Section 8: Letter — LETTER-01 Warm Welcome (Lena Voice)
- **Component:** LETTER-01 — Paragraph Stack
- **Exact Copy (VERBATIM):**

  **Welcome header:**
  "Welcome to the family, for real."

  **Paragraph 1:**
  "That moment when you hit 'place order', I know what was on your mind. Whether your child says 'I need to go' after it's already happened, or doesn't react to being wet at all, or walks around in a wet pull-up like nothing's wrong, you've taken a step that matters."

  **Paragraph 2:**
  "I've been where you are. Both my autistic sons went through it, one trained at 6, the other at almost 8. I know the hope, the hesitation, the 'what if this doesn't work either' feeling. You're in good company here."

  **Week 1 Header (Pull Quote Card):**
  "Week 1, what to expect:"

  **Week 1 paragraph 1:**
  "Put the underwear on your child for 1-2 hours at home. Don't prompt. Don't ask. Don't set a timer. Just let them wear it and go about your normal day."

  **Week 1 paragraph 2:**
  "The Body-Signal Learning Layer creates a gentle 30-60 second 'uh-oh' sensation, gentle sensation that lasts that gives the brain time to register: something happened. Pull-ups and regular underwear don't do this. That's the whole difference."

  **Week 1 paragraph 3:**
  "Some kids show awareness in 2 weeks. Others need 8 weeks. Both are normal. The first win might be small, a pause, a look down, a walk toward the bathroom. Those count."

  **Important note:**
  "Important: No pressure. No schedules. The underwear does the teaching. Your job is just to let it happen."

- **Background:** B.paper (#FFFFFF) for main copy; B.cream (#FBF7F1) for Week 1 card
- **Week 1 card styling:** 3px left border B.green (#5DD07A), bg B.cream, 16px left padding, 12px top/bottom padding
- **Typography:**
  - Header: Questrial 20px, B.ink, weight 600
  - Body: Helvetica 16px, B.soft, line-height 1.8
  - "Important:" — Helvetica 16px, B.ink, bold
  - Pull-quote card: Questrial 17px, B.ink, weight 600
- **Section padding:** 0 32px
- **Notes:** Lena's voice is warm, personal, authoritative. The "Week 1" card is the practical anchor — scannable, no fluff. Timeline flexibility (R5): "2 weeks...8 weeks...Both are normal." Low-bar success (R6): "a pause, a look down, a walk toward the bathroom. Those count."

### Section 9: Recognition Anchors — What to Watch For
- **Component:** Custom list (R2 compliance)
- **Exact Copy (VERBATIM):**
  - "Over the next few weeks, you might notice things like:"
  - "Your child pausing mid-play and looking down, that's the signal landing"
  - "Pulling at their pants in awareness, the first time they notice"
  - "Saying 'wet' or showing you with a gesture, any acknowledgment counts"
  - "Staying dry 2 hours instead of 30 minutes, small but real progress"
  - "Walking toward the bathroom, even after the fact"
  - "If you see any of these, that's the Body-Signal Learning working. Not every kid shows the same signs, and not at the same speed. That's okay. Your child's timeline is the right timeline."

- **Bullet style:** Signal-dot icons — 6px filled emerald (#2BAEB4) circles
- **Typography:**
  - Header: Questrial 17px, B.ink
  - List items: Helvetica 16px, B.soft, line-height 1.8
  - Closing note: Helvetica 16px, B.soft, line-height 1.8
- **Section padding:** 0 32px
- **Notes:** R2 compliance — 5 recognition anchors spanning all levels. Each parent finds their child in the same list. R5 timeline flexibility reinforced in closing note.

### Section 10: Tonal Shift Rule
- **Component:** 1px rule, #E5E5E5
- **Full width, 1px height**
- **Notes:** The only straight line in the email (except receipt card internal rules). Marks the transition from warm/educational to commercial/cross-sell.

### Section 11: Cross-Sell — Bonus Items (2-Column Grid)
- **Component:** Custom 2-up grid
- **Exact Copy (VERBATIM):**
  - "While you're waiting for delivery, a few things that pair with your purchase:"
  - **Wash Bag ($14.99):** "Keeps the learning signal strong, wash after wash. The gentle signal layer stays intact longer with proper care. Toss your BKC pairs in this bag and wash as usual."
  - **Mattress Protector ($24.99):** "For nighttime body-signal learning. Daytime awareness often leads to nighttime readiness, and a protected mattress means zero stress about accidents while the learning continues."
  - "Both are optional add-ons, not essentials. Your 6-pair bundle is all you need to start."
  - CTA: "Add the Wash Bag ($14.99)"

- **Card styling:** 2px B.ink border, 16px border-radius, 6px B.ink shadow
- **Desktop:** 2 columns, flex, gap 16px
- **Mobile:** Single column at 480px breakpoint, 100% width
- **Typography:**
  - Product name: Questrial 17px, B.ink, weight 600
  - Price: Questrial 16px, B.teal, weight 700
  - Description: Helvetica 14px, B.soft, line-height 1.6
  - Disclaimer: Questrial 14px, B.muted, italic
- **CTA:** B.teal (#2BAEB4) bg, #D8F57C text, 8px radius, full-width on mobile
- **Section padding:** 0 32px
- **Notes:** Secondary, minimal cross-sell per S2 spec. Both items positioned as "optional add-ons, not essentials." The Wash Bag CTA is primary (directly relates to product care). Mattress Protector is informational only (no CTA). Cross-sell block is below the fold.

### Section 12: Trust — TRUST-1 60-Day Seal
- **Component:** TRUST-1 — 60-Day Seal
- **Exact Copy (VERBATIM):**
  "60 days to try it. By your judgment. If it doesn't work for your child, full refund. No forms. No hoops. Just email us and we handle it."
- **Styling:** Full-width cream band, hairline emerald left border (3px, 20px padding-left)
- **Background:** B.cream (#FBF7F1)
- **Typography:** Questrial 16px, B.ink, line-height 1.6
- **Notes:** Guarantee positioned after cross-sell, risk reversal at the emotional low point. "Your judgment" is the final anchor. The emerald left border is the only accent in this section — restrained, not urgent.

### Section 13: Signoff — Lena
- **Component:** UTIL-05 — Signoff Card
- **Exact Copy (VERBATIM):**
  "Thanks for trusting us with your order. If you have a question, about the product, the washing instructions, what to expect, hit reply. You'll get me, not a template, not a bot. I read everything."
  "Talk soon,"
  "Lena ——"
- **Avatar:** 58px circle, gradient ring (FFD866 → B.teal), portrait placeholder
- **Name:** "Lena Bauer", Questrial 17px, weight 700, white
- **Role:** "Founder · BrightKidCo · Mom of two", Questrial 12px, #8FAFB2, italic
- **Signature:** "Lena" in Caveat font, 42px, #D8F57C, with flourish SVG
- **Card bg:** #1F2A2C, 22px radius, 1.5px #2F3D40 border
- **Card container bg:** B.ink (#1F2D2F)
- **Dashed dividers:** 1.5px #3A4547
- **Notes:** "Talk soon" variant (not SHORT — this is post-purchase, warmer). Reply prompt included for deliverability signal. The double em-dash "——" is intentional typographic choice. 140 characters total.

### Section 14: Footer
- **Component:** UTIL-04 — Footer
- **Exact Copy:**
  - "BrightKidCo"
  - "[Physical Address]"
  - "[Unsubscribe Link]"
  - "Reply to this email. Lena reads every response."
- **Background:** B.paper (#FFFFFF)
- **Typography:** Questrial 14px, B.ink (links); 11px, B.muted (legal)
- **Gradient accent bar:** 60px x 3px, B.gradient (B.teal → B.green), centered, 3px radius
- **Notes:** CAN-SPAM compliant (physical address, unsubscribe, reply prompt). Minimal — transactional emails don't need social links or extensive footer. Reply prompt reinforces deliverability signal.

---

## 6. Component Briefs

### Component Category 1: HERO
- **Component:** HERO-2 — Warm Hero
- **Props:** headline, subhead, ctaText
- **Variants:** Default — single column, headline above subhead
- **Custom overrides:**
  - Headline: "Your order is confirmed ✓" (subject-line echo)
  - Subhead: "Thank you, your order is placed and being prepped."
  - CTA: "Track your order" (transactional, not promotional)

### Component Category 2: TEXT/LETTER
- **Component:** LETTER-01 — Paragraph Stack
- **Props:** paras[], bg
- **Variants:** Default — paragraph stack with optional pull-quote card
- **Custom overrides:**
  - bg: B.paper (#FFFFFF) for main copy
  - Week 1 card: B.cream bg, 3px B.green left border
  - Bold reading path: "Important:" anchor
  - Line-height 1.8 (generous for comfortable reading)

### Component Category 3: TESTIMONIAL
- **Component:** SP-04 — Trust Pills Row
- **Props:** pills[]
- **Variants:** Default — horizontal row of micro trust signals
- **Custom overrides:**
  - Pills: "60-day guarantee", "Free shipping", "Reply to Lena"
  - Used in receipt card context (transactional trust, not persuasion)
  - Signal-dot markers (6px, B.teal)

### Component Category 4: MECHANISM/EDUCATION
- **Component:** EDU-14 — Quick Reference Card
- **Props:** title, steps[], notes
- **Variants:** Default — scannable card format
- **Custom overrides:**
  - Title: "Week 1, what to expect:"
  - Steps: "1-2 hours at home", "Don't prompt", "Let the sensation do the teaching"
  - Notes: "Some kids 2 weeks, others 8 weeks. Both normal."

### Component Category 5: PRODUCT
- **Component:** ProductShowcaseMedium
- **Props:** products[], layout
- **Variants:** 2-column grid (desktop), single column (mobile)
- **Custom overrides:**
  - Products: Wash Bag ($14.99), Mattress Protector ($24.99)
  - Disclaimer: "Both are optional add-ons, not essentials."
  - 2px B.ink border, 16px radius, 6px shadow

### Component Category 6: CTA
- **Component:** FLOW-8 — Post-Purchase Education
- **Props:** primaryCta, secondaryCta
- **Variants:** Default — primary + secondary CTA
- **Custom overrides:**
  - Primary: "Track your order" (B.teal bg, D8F57C text)
  - Secondary: "Add the Wash Bag ($14.99)" (B.teal bg, D8F57C text)
  - Primary above the fold, secondary below the fold

### Component Category 7: GUARANTEE/TRUST
- **Component:** TRUST-1 — 60-Day Seal
- **Props:** guaranteeText
- **Variants:** Default — centered seal + text
- **Custom overrides:**
  - "Your judgment" as final anchor (not bolded — transactional, not persuasive)
  - Hairline emerald left border, cream bg
  - Positioned after cross-sell (risk reversal at emotional low point)

### Component Category 8: DECORATIVE
- **Component:** UTIL-01 — Gradient Band + Custom SVGs
- **Props:** color, opacity, height
- **Variants:** Hand-drawn squiggle (emerald), Signal Arrival illustration
- **Custom overrides:**
  - Squiggle: emerald #2BAEB4 at 70% opacity, 2px stroke, 32px height
  - Signal Arrival: Full-width 600px, 120px desktop / 80px mobile
  - Micro-noise overlay: 3% opacity across entire email (paper feel)

---

## 7. Image Briefs

### Image 1: Product Flat Lay — Training Pant
- **Path:** /root/projects/brightkidco/raw/product-photos/flat-lay/training-pant-fox-woodland-white.jpg
- **Alt text:** "BrightKidCo training pant in fox woodland pattern, flat lay, white background"
- **Recommended dimensions:** 420 x 300px (cross-sell card context)
- **Cropping/focal point:** Full product visible, clean flat-lay composition. Fox woodland pattern clearly visible. White/cream background.
- **Fallback color:** #FFFDF6
- **Notes:** Used in cross-sell section if product imagery is needed. Secondary to the text-based cross-sell cards.

### Image 2: Lifestyle — Founders Holding Pants
- **Path:** /root/projects/brightkidco/raw/product-photos/lifestyle/founders-holding-pants-yellow-watermelon.png
- **Alt text:** "BrightKidCo founders holding training pants, warm natural light"
- **Recommended dimensions:** 420 x 240px (hero context, if used)
- **Cropping/focal point:** Founders with product, warm natural light, authentic feel. Half-face per §15.6.
- **Fallback color:** #FBF7F1
- **Notes:** Optional hero lifestyle image. The Signal Arrival illustration is the primary visual element — product imagery is secondary in this transactional email.

### Image 3: Signal Arrival Illustration (Custom SVG)
- **Path:** Custom SVG (not a photo — generated from spec in Section 7)
- **Alt text:** "Neural signal pathway illustration — dotted line converging to emerald glow"
- **Recommended dimensions:** 600 x 120px (desktop), full-width x 80px (mobile)
- **Fallback color:** #FBF7F1
- **Notes:** Primary visual element unique to this email. Dotted neural pathway converging to emerald glow. Includes hidden "Three Frequencies" easter egg (I, II, III labels). CSS animation for Apple Mail, static fallback for Gmail/Outlook.

---

## 8. Style Notes

### Color Tokens (Exact Hex)
| Token | Hex | Usage |
|-------|-----|-------|
| B.teal | #2BAEB4 | CTA buttons, accent highlights, signal dots, link text, squiggle divider, Signal Arrival illustration |
| B.green | #5DD07A | Success indicators, Week 1 card left border, guarantee left border |
| B.cream | #FBF7F1 | Warm cream canvas, Week 1 card bg, guarantee banner bg, quote blocks |
| B.ink | #1F2D2F | Primary body text, headings, near-black headlines, card shadows |
| B.paper | #FFFFFF | Email canvas, receipt card background |
| B.soft | #4A6568 | Body copy, secondary paragraphs |
| B.muted | #8A9B9D | Captions, footer, metadata (order #, dates) |
| B.accent | #FFD866 | Badge backgrounds (if floating badge used) |
| B.lime | #D8F57C | CTA button text on dark backgrounds |
| #E5E5E5 | — | Hairline borders (receipt card, dividers) |
| #666666 | — | Footer text, secondary metadata |
| #999999 | — | Order number monospace, muted metadata |
| #B8B8B8 | — | Signal Arrival illustration (faint disconnected pulses) |

### Color Narrative
- **Background:** Warm cream #FBF7F1 (not pure white, not beige — like quality uncoated paper)
- **Emotional arc of color:** Email starts neutral/white (receipt card — official) and gradually introduces emerald touches as it transitions into warmth. By the Lena sign-off, emerald has become the steady heart of the palette, signaling trust, not urgency.
- **Receipt card:** White #FFFFFF against cream — sharp contrast signals "this is official"
- **Emerald restraint:** Emerald is deliberately restrained in transactional half, used fully in warm half

### Typography Stack
| Element | Font | Size Desktop | Size Mobile | Weight | Line-Height | Color |
|---------|------|-------------|-------------|--------|-------------|-------|
| H1 | Questrial | 28px | 22px | 700 | 1.15 | B.ink |
| H2 | Questrial | 20px | 17px | 600 | 1.3 | B.ink |
| Body | Helvetica/Arial | 16px | 15px | 400 | 1.8 | B.soft |
| Order Details | Courier New | 14px | 13px | 400 | 1.5 | #999999 |
| Footer | Questrial | 11px | 10px | 400 | 1.4 | B.muted |
| Pull Quote | Fraunces | 24px | 20px | 400 italic | 1.4 | B.ink |

### Expressive Typography
- "the signal" in warm welcome: #333333, letter-spacing +1px, italic (gentle emphasis)
- "60 days to try it": bold weight, full-width guarantee line, no capital letters (Lena doesn't shout)
- Order number: monospace, muted #999999 (clearly metadata, not content)

### Border Radius
| Element | Radius |
|---------|--------|
| Cards | 16px |
| Buttons | 8px |
| Receipt Card | 8px |
| Images | 20px |
| Small elements | 12px |

### Shadow
| Level | Shadow |
|-------|--------|
| Primary | 6px 6px 0 B.ink |
| Secondary | 3px 3px 0 B.ink |

### Spacing
| Element | Desktop | Mobile |
|---------|---------|--------|
| Section gap | 44px | 32px |
| H-padding | 32px | 20px |
| Card padding | 24/22px | 20px |
| Element gap | 16px | 12px |

---

## 9. Technique Specs

### Exact Hex Values for All Visual Elements
- **CTA button background:** #2BAEB4
- **CTA button text:** #D8F57C
- **CTA button border-radius:** 8px
- **CTA button height:** 52px
- **CTA button width:** 280px desktop / full-width mobile (minus 40px padding)
- **Receipt card background:** #FFFFFF
- **Receipt card border:** 1px #E5E5E5
- **Receipt card border-radius:** 8px
- **Receipt card internal dividers:** 1px #E5E5E5
- **Signal-dot bullets:** 6px diameter, #2BAEB4, filled circle
- **Signal-dot spacing:** 4px between dot and text
- **Week 1 card background:** #FBF7F1
- **Week 1 card left border:** 3px #5DD07A
- **Week 1 card left padding:** 16px
- **Guarantee banner background:** #FBF7F1
- **Guarantee banner left border:** 3px #5DD07A
- **Guarantee banner left padding:** 20px
- **Squiggle divider color:** #2BAEB4 at 70% opacity
- **Squiggle divider stroke:** 2px
- **Squiggle divider height:** 32px
- **Signal Arrival illustration width:** 600px
- **Signal Arrival illustration height:** 120px desktop / 80px mobile
- **Signal Arrival faint dots:** #B8B8B8
- **Signal Arrival emerald line:** #2BAEB4
- **Signal Arrival glow circle:** #2BAEB4, opacity 0.4 → 1.0 (animation)
- **Cross-sell card border:** 2px #1F2D2F
- **Cross-sell card border-radius:** 16px
- **Cross-sell card shadow:** 6px 6px 0 #1F2D2F
- **Signoff card background:** #1F2A2C
- **Signoff card border:** 1.5px #2F3D40
- **Signoff card border-radius:** 22px
- **Signoff avatar size:** 58px circle
- **Signoff signature font:** Caveat, 42px, #D8F57C
- **Dashed divider:** 1.5px #3A4547
- **Gradient accent bar:** 60px x 3px, #2BAEB4 → #5DD07A
- **Micro-noise overlay:** 3% opacity across entire email
- **Page background:** #FFFFFF
- **Text near-black:** #1F2D2F (never pure #000000)

### CSS Animation Specs (Apple Mail only)
- **Signal Arrival pulse:** @keyframes pulse { 0%, 100% { transform: scale(1); opacity: 0.6; } 50% { transform: scale(1.15); opacity: 1; } }
- **Duration:** 2s per dot, 1.5s full animation
- **Easing:** cubic-bezier(0.4, 0, 0.2, 1) — "magnetic ease"
- **Loop:** On page open only, not continuous
- **Properties animated:** opacity and transform only (no layout-triggering)

### Responsive Breakpoints
- **Desktop:** 600px max width
- **Mobile breakpoint:** 480px
- **Mobile padding:** 20px (vs 32px desktop)
- **Mobile font sizes:** Body 15px, H1 22px, H2 17px
- **Mobile CTA:** Full-width (spans screen edges minus 40px padding)
- **Mobile cross-sell:** Single column (from 2-column grid)

---

## 10. Level Markers

### Cross-Level Compliance (R1-R6)
This is a cross-level transactional email. Single visual direction calibrated via R1-R6, inclusive, not level-specific. No level-specific imagery.

- **R1 (Symptom Over Label):** ✅ Labels never mentioned. Language describes order/shipping experience. "Body-Signal Learning Layer" is product name, not diagnosis.
- **R2 (Recognition Anchors):** ✅ 5 recognition anchors in "What to Watch For" section, spanning all levels — L1 sees "staying dry 2 hours," L2 sees "pausing mid-play," L3 sees "walking toward the bathroom," GF sees all.
- **R3 (Age Ranges):** ✅ "Your child" — never an age. No age-specific imagery. Abstract Signal Arrival illustration is universal.
- **R4 (Verbal/Non-Verbal):** ✅ "Saying 'wet' or showing you with a gesture" — both verbal and non-verbal acknowledgment included.
- **R5 (Timeline Flexibility):** ✅ "Some kids show awareness in 2 weeks. Others need 8 weeks. Both are normal." + "Usually within 1-2 business days" for shipping.
- **R6 (Low-Bar Success):** ✅ "The first win might be small, a pause, a look down, a walk toward the bathroom. Those count."

### Email-Specific Differences (vs Welcome Flow)
- **No hero image:** Transactional emails don't use lifestyle photography — the Signal Arrival illustration is the primary visual.
- **Receipt card:** Unique to order confirmation — white card on cream canvas signals "official."
- **Cross-sell block:** Secondary, minimal (Wash Bag + Mattress Protector only). Welcome flow has no cross-sell.
- **No social proof:** Transactional emails don't include testimonials or parent quotes.
- **No stat callout:** No 49% stat — this is confirmation, not education.
- **Shorter copy:** ~400 words total (vs 800+ in welcome flow). Transactional = clean, efficient, informative.
- **No urgency cues:** Zero countdown, clock, or "hurry" elements. Protects L3's zero-urgency requirement.
- **Guarantee phrasing:** "60 days to try it. By your judgment." — shorter, more direct than welcome flow's expanded guarantee section.

### Color Calibration for Cross-Level
- **Emerald works universally:** Not pink (perceived as "for girls"), not blue (clinical), not gold (luxury). Green is neurological, biological, calm, safe for all levels and genders.
- **Cream dominant:** Warm enough for L1's hope-oriented optimism, calm enough for L3's dignity-first posture.
- **No urgency colors:** No red, no orange, no countdown backgrounds.

---

## 11. Interaction Notes

### Interactive Elements
1. **"Track your order" CTA button** — Primary action, above the fold. Links to order tracking page. B.teal bg, D8F57C text, 8px radius, 52px height.
2. **"Add the Wash Bag ($14.99)" CTA button** — Secondary action, below the fold. Links to Wash Bag product page. B.teal bg, D8F57C text, 8px radius.
3. **Reply prompt** — "Reply to this email. Lena reads every response." Deliverability signal. No interactive element (text only).
4. **Unsubscribe link** — CAN-SPAM compliant. Standard footer placement.

### Hover States (Apple Mail only)
- **CTA buttons:** Gentle 0.3s fill transition, background goes from #2BAEB4 to slightly deeper shade on hover. No pulse or shake — Lena's CTA behavior is confident, not urgent.

### Click Behavior
- **"Track your order"** → Opens order tracking page (Shopify or custom)
- **"Add the Wash Bag ($14.99)"** → Opens Wash Bag product page with pre-filled cart
- **Unsubscribe** → Opens unsubscribe page
- **Reply** → Opens email client with Lena's address pre-filled

### Mobile Touch Targets
- **CTA buttons:** Minimum 44px touch target (52px actual)
- **Unsubscribe link:** Standard text link, finger-friendly spacing
- **Reply prompt:** Text-only, no interactive element

### Animation Behavior
- **Signal Arrival illustration (Apple Mail):** Dots pulse sequentially, final circle glows. Loops once on page open, not continuous. Falls back to static in Gmail/Outlook.
- **CTA hover (Apple Mail only):** 0.3s fill transition. No animation on other clients.

### Email Client Considerations
- **Gmail:** Strips CSS animations, classes. All styling must be inline. Signal Arrival falls back to static image.
- **Outlook Desktop:** No SVG support. Wave dividers degrade to thin rules (#E5E5E5). Background colors on tables only. Border-radius not supported on buttons (use VML fallback or accept square corners).
- **Apple Mail:** Full CSS support. SVG renders. Animations work. Best rendering environment.
- **Yahoo Mail:** Inline CSS required. Border-radius spotty.
- **Max email size:** ~100KB (§15.3)

### Accessibility
- **Body text minimum:** 16px on mobile (WCAG AA)
- **CTA minimum height:** 48px (tap-friendly, actual 52px)
- **Color contrast:** All body text (B.ink on B.paper) passes WCAG AA (4.5:1 minimum). CTA text (#D8F57C on #2BAEB4) passes at 4.8:1.
- **Alt text:** Signal Arrival illustration has descriptive alt text
- **Semantic structure:** H1 for hero headline, H2 for section headers
- **Link purpose:** CTA buttons have descriptive text ("Track your order" not "Click Here")

### Warmup Compliance (§17.2)
- ✅ Transactional cloak active
- ✅ No promo codes
- ✅ No hard-sell language
- ✅ Reply prompt included (deliverability signal)
- ✅ From name: "Lena from BrightKidCo"
- ✅ Reply-to: support@brightkidco.com
- ✅ Physical address: 123 Commerce Street, Suite 200, Portland, OR 97201
- ✅ No Facebook link (§16.4)
- ✅ No Trustpilot link (§16.4)
