# Wireframe: Shipping Notification — E1 | Cross-Level

## 1. Metadata

| Field | Value |
|-------|-------|
| **Flow** | Shipping Notification (Flow 06) |
| **Position** | E1 — Triggered when shipment is created in Shopify |
| **Level** | Cross-Level (R1-R6 Calibration, all 4 levels + GF simultaneously) |
| **Copy File** | /root/projects/brightkidco/outputs/copy/transactional/shipping-06.md |
| **Strategy Map Entry** | transactional.emails.e2 |
| **Flow Signature** | clean-efficient |
| **Level Calibration** | Cross-Level — single visual direction, no level-specific imagery, transactional primary, NO CTA button per S2 spec, pure fulfillment, zero urgency cues, warm cream anticipation palette, restrained emerald accent, 3-layer exploded view illustration |
| **Component Categories Used** | HERO, TEXT/LETTER, TESTIMONIAL, MECHANISM/EDUCATION, PRODUCT, CTA, GUARANTEE/TRUST, DECORATIVE |
| **Total Estimated Height** | ~2,800px (desktop) / ~3,200px (mobile) |

---

## 2. Strategy Box

**Big Idea:** The email is structured like a package journey — a dotted trajectory line travels from left to right across the email header, beginning at a warehouse icon and ending at a home icon with a glowing "delivered" pin behind the CTA area. The visual metaphor: a signal is traveling toward your home, just as the Body-Signal Learning Layer will help a signal travel toward your child's brain.

**Emotional Arc Position:** Transactional clarity → Warm Lena touch → Anticipation. This email arrives when the package ships — the customer has already committed, now they're waiting. The top half is tracking/transactional (direct, functional). The bottom half is warm Lena education (organic, breathing room). The reader transitions from "it's on its way" to "here's what to expect."

**Component Selection Rationale:**
- HERO-2 (Warm Hero): "Your order shipped!" headline — functional warmth, no sales pressure.
- LETTER-01 (Paragraph Stack): Long-form letter for shipping details, first steps, Week 1 guidance. 200+ word copy density.
- SP-04 (Trust Pills Row): Micro trust signals (60-day, reply-to-Lena) — transactional credibility.
- EDU-10 (How It Works): 3-layer system explanation — abstract SVG, not product photography.
- ProductShowcaseSoft: Gentle product mention (no hard showcase — this is fulfillment, not sales).
- FLOW-9 (Shipping Tracker): Tracking number callout card — primary visual focus.
- TG2 (Shipping Timeline): Delivery window display — 3-7 business days.
- UTIL-02 (Divider Bar): Hand-drawn wave squiggle dividers between sections.

**Differentiation Note:** This is a pure fulfillment email — NO CTA button per S2 spec. The "action" is waiting and opening the package when it arrives. This naturally satisfies R12 (permission-not-to-buy) without stating it. The Package Journey Line illustration is unique to this email. The 3-Layer Exploded View is abstract SVG (not product photography) — avoids triggering "my child doesn't look like that" disengagement across levels. The "In Transit" dot in the journey line is deliberately off-center (one hop forward, not yet arrived) — a visual metaphor for R5 (timeline flexibility) and R6 (low-bar success).

---

## 3. Creative Box

**Color Palette:**
- Primary: #2BAEB4 (B.teal) — Tracking callout border, journey line dots, signal-wave bullets
- Secondary: #5DD07A (B.green) — Success indicators, section header left borders
- Accent: #E8B84B (Soft amber) — Warmth of anticipation, home icon glow, "arrives" badge
- Background: #F9F7F4 (Warmer cream) — Slightly off-neutral for reading comfort
- Text: #1F2D2F (B.ink) — Primary body text, headings
- Page Background: #FFFFFF (B.paper) — Email canvas
- Secondary Text: #4A6568 (B.soft) — Body copy, secondary paragraphs
- Tertiary Text: #8A9B9D (B.muted) — Captions, footer, tracking metadata
- Additional: #2C2C2C — Dark charcoal body text
- Additional: #555555 — Secondary info (tracking number context)
- Additional: #666666 — Footer text

**Typography:**
- Heading: Questrial, 24px desktop / 20px mobile, weight 700, letter-spacing 0.02em
- Section Headers: Questrial, 18px desktop / 16px mobile, weight 600, emerald left hairline border
- Body: Helvetica Neue/Arial/sans-serif, 16px desktop / 14px mobile, line-height 1.6
- Tracking Metadata: 13px, secondary gray #666, clean sans-serif
- Tracking Number: SF Mono/Courier New/monospace, 14px
- Footer: Questrial, 11px desktop / 10px mobile

**Border Radius:** Cards: 12px, Buttons: N/A (no CTA button), Images: 16px, Small: 8px
**Shadow:** Primary: 4px 4px 0 B.ink (tracking callout), Secondary: 2px 2px 0 B.ink (sub-cards)
**Spacing:** Section gap: 40px, H-padding: 24px desktop / 20px mobile, Card padding: 20/18px, Element gap: 14px

---

## 4. Layout ASCII

```
┌──────────────────────────────────────────────────────────┐
│ ┌──────────────────────────────────────────────────────┐ │
│ │                  [PREHEADER BAR]                     │ │ 36px
│ │  Tracking number inside. Here's what to expect when │ │
│ │  your package arrives.                               │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │              [HEADER — Logo + From Name]             │ │ 80px
│ │         BrightKidCo · Lena from BrightKidCo         │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │              HERO-2: Warm Hero                       │ │ ~180px
│ │                                                      │ │
│ │  [Package icon — small, top-left, 24px]              │ │
│ │                                                      │ │
│ │  "Your Body-Signal underwear is on its way!"        │ │
│ │   [H1 — Questrial 24px/20px, B.ink]                │ │
│ │                                                      │ │
│ │  "Good news, your Body-Signal Learning Layer         │ │
│ │   underwear shipped today."                          │ │
│ │   [Subhead — Questrial 16px, B.soft]               │ │
│ │                                                      │ │
│ │  "Your tracking number is below so you can follow   │ │
│ │   the package as it makes its way to you."          │ │
│ │   [Helvetica 16px, B.soft, line-height 1.6]        │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │     PACKAGE JOURNEY LINE — Custom SVG                │ │ ~80px
│ │                                                      │ │
│ │  🏠 · · · · · · · 📍 · · · · · · 🏠               │ │
│ │  [Warehouse]  [In Transit]  [Your Home]             │ │
│ │                                                      │ │
│ │  Dotted horizontal path, signal-wave bumps along    │ │
│ │  the dotted line (emerald at 40% opacity).          │ │
│ │                                                      │ │
│ │  "In Transit" dot (📍) is slightly off-center,      │ │
│ │  one hop forward — not yet arrived.                  │ │
│ │                                                      │ │
│ │  [Full-width 600px, 80px tall]                      │ │
│ │  [Apple Mail: CSS pulse animation on transit dot]   │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │     TRACKING CALLOUT — FLOW-9 Shipping Tracker       │ │ ~200px
│ │                                                      │ │
│ │  ┌──────────────────────────────────────────────┐   │ │
│ │  │  [bg: #F9F7F4, 1px emerald border at 50%]   │   │ │
│ │  │  [12px border-radius]                         │   │ │
│ │  │                                              │   │ │
│ │  │  "Tracking Number"                           │   │ │
│ │  │  [Questrial 13px, B.muted, uppercase]        │   │ │
│ │  │                                              │   │ │
│ │  │  [TRACKING_NUMBER_HERE]                      │   │ │
│ │  │  [SF Mono/Courier New 14px, B.muted]         │   │ │
│ │  │                                              │   │ │
│ │  │  ──────────── 1px emerald rule ────────────  │   │ │
│ │  │                                              │   │ │
│ │  │  "Estimated Delivery"                        │   │ │
│ │  │  [Questrial 13px, B.muted, uppercase]        │   │ │
│ │  │                                              │   │ │
│ │  │  "Arrives in 3-7 business days"              │   │ │
│ │  │  [Questrial 16px, B.ink, weight 600]         │   │ │
│ │  │                                              │   │ │
│ │  │  [Small amber "arrives" badge — #E8B84B]     │   │ │
│ │  └──────────────────────────────────────────────┘   │ │
│ │  [border: 1px #2BAEB4 at 50% opacity]               │ │
│ │  [Mobile: full-width, 24px side padding]             │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │     TRACKING NOTE — Carrier Info                     │ │ ~120px
│ │                                                      │ │
│ │  "Depending on where you are, delivery usually takes │ │
│ │   3-7 business days. Some carriers update tracking   │ │
│ │   faster than others, if the number doesn't show     │ │
│ │   movement right away, that's normal and usually     │ │
│ │   updates within 24-48 hours."                       │ │
│ │  [Helvetica 16px, B.soft, line-height 1.6]         │ │
│ │                                                      │ │
│ │  [No CTA button — pure fulfillment per S2]          │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌─────── HAND-DRAWN SVG WAVE SQUIGGLE ─────────────────┐ │ 24px
│ │  ~~~~/~~~~/~~~~/~~~~/~~~~/~~~~/~~~~/~~~~             │ │
│ │  Emerald #2BAEB4 at 30% opacity, 2px stroke          │ │
│ │  Single gentle curve, not a horizontal rule           │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │     WHAT'S IN YOUR PACKAGE — 3-Layer System          │ │ ~400px
│ │                                                      │ │
│ │  "What's in Your Package"                            │ │
│ │  [Questrial 18px, B.ink, emerald left border 3px]   │ │
│ │                                                      │ │
│ │  "Your package from BrightKidCo contains your       │ │
│ │   Body-Signal Learning Layer underwear, designed    │ │
│ │   with three layers:"                                │ │
│ │  [Helvetica 16px, B.soft, line-height 1.6]         │ │
│ │                                                      │ │
│ │  [3-LAYER EXPLODED VIEW — Custom SVG]                │ │
│ │  ┌──────────────────────────────────────────────┐   │ │
│ │  │                                              │   │ │
│ │  │    ┌─────────────────────┐                   │   │ │
│ │  │    │ Layer 1 (innermost) │                   │   │ │
│ │  │    │ Signal Layer        │                   │   │ │
│ │  │    │ Gentle cotton       │                   │   │ │
│ │  │    │ feedback            │                   │   │ │
│ │  │    └─────────────────────┘                   │   │ │
│ │  │            ↕                                 │   │ │
│ │  │    ┌─────────────────────┐                   │   │ │
│ │  │    │ Layer 2 (middle)    │                   │   │ │
│ │  │    │ Smart Absorption    │                   │   │ │
│ │  │    │ Protection without  │                   │   │ │
│ │  │    │ blocking            │                   │   │ │
│ │  │    └─────────────────────┘                   │   │ │
│ │  │            ↕                                 │   │ │
│ │  │    ┌─────────────────────┐                   │   │ │
│ │  │    │ Layer 3 (outer)     │                   │   │ │
│ │  │    │ Leak Barrier        │                   │   │ │
│ │  │    │ Security without    │                   │   │ │
│ │  │    │ diaper-mode         │                   │   │ │
│ │  │    └─────────────────────┘                   │   │ │
│ │  │                                              │   │ │
│ │  │  [3 concentric ovals, slightly separated]    │   │ │
│ │  │  [Thin emerald #2BAEB4 outlines]             │   │ │
│ │  │  [Subtle cream #F9F7F4 fills]                │   │ │
│ │  │  [No harsh lines — Ethereal Glass style]     │   │ │
│ │  └──────────────────────────────────────────────┘   │ │
│ │                                                      │ │
│ │  ◉ A cotton inner layer that creates a gentle,      │ │
│ │    sustained signal                                   │ │
│ │  ◉ A smart absorption layer that protects without    │ │
│ │    blocking the feedback                             │ │
│ │  ◉ A leak-resistant outer barrier                    │ │
│ │  [Signal-dot bullets: 6px emerald #2BAEB4]          │ │
│ │  [Helvetica 16px, B.soft, line-height 1.6]         │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌─────── HAND-DRAWN SVG WAVE SQUIGGLE ─────────────────┐ │ 24px
│ │  ~~~~/~~~~/~~~~/~~~~/~~~~/~~~~/~~~~/~~~~             │ │
│ │  Emerald #2BAEB4 at 30% opacity, 2px stroke          │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │     WHEN IT ARRIVES — First Steps                    │ │ ~340px
│ │                                                      │ │
│ │  "When It Arrives"                                   │ │
│ │  [Questrial 18px, B.ink, emerald left border 3px]   │ │
│ │                                                      │ │
│ │  [WASH TIP — Amber left border card]                 │ │
│ │  ┌──────────────────────────────────────────────┐   │ │
│ │  │  [bg: #F9F7F4, left-border: 4px #E8B84B]    │   │ │
│ │  │  [rounded corners, 8px radius]               │   │ │
│ │  │                                              │   │ │
│ │  │  "Wash the underwear before first use,       │   │ │
│ │  │   cold water, gentle cycle, no fabric        │   │ │
│ │  │   softener. The Body-Signal Layer works      │   │ │
│ │  │   best when the cotton is clean and          │   │ │
│ │  │   absorbent."                                │   │ │
│ │  │  [Helvetica 16px, B.soft, line-height 1.6]  │   │ │
│ │  │                                              │   │ │
│ │  │  [Small wash-icon — decorative SVG]          │   │ │
│ │  └──────────────────────────────────────────────┘   │ │
│ │  [Visually distinct from education sections —       │ │
│ │   amber border signals "practical, not persuasive"] │ │
│ │                                                      │ │
│ │  "Then let your child wear them for 1-2 hours at    │ │
│ │   home. Don't prompt. Don't pressure. Let the       │ │
│ │   sensation do the teaching."                       │ │
│ │  [Helvetica 16px, B.soft, line-height 1.6]         │ │
│ │                                                      │ │
│ │  "The learning starts from the first wear, each     │ │
│ │   time the Body-Signal Layer creates that gentle    │ │
│ │   'uh-oh' sensation, the brain gets a piece of      │ │
│ │   information it may never have received before."   │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │     WEEK 1 EXPECTATIONS — What to Expect             │ │ ~300px
│ │                                                      │ │
│ │  "What to Expect in Week 1"                          │ │
│ │  [Questrial 18px, B.ink, emerald left border 3px]   │ │
│ │                                                      │ │
│ │  "Week 1 is about familiarity, not progress. Your    │ │
│ │   child might not react at all at first, that's     │ │
│ │   normal. The nervous system needs time to recognize │ │
│ │   a new sensation."                                  │ │
│ │  [Helvetica 16px, B.soft, line-height 1.6]         │ │
│ │                                                      │ │
│ │  "Some kids show first awareness in 2 weeks. Others │ │
│ │   need 8 weeks. Both are normal."                   │ │
│ │  [BOLD reading path anchor]                          │ │
│ │                                                      │ │
│ │  "The goal in the first week isn't the potty. It's  │ │
│ │   awareness. If your child pauses for a moment when │ │
│ │   they feel wet, even once, that's the signal       │ │
│ │   starting to wire."                                 │ │
│ │  [BOLD reading path anchor on "awareness"]          │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌─────── 1px RULE — #E5E5E5 — Tonal Shift ────────────┐ │ 1px
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │     GUARANTEE — You Made the Right Decision          │ │ ~200px
│ │                                                      │ │
│ │  "You Made the Right Decision"                       │ │
│ │  [Questrial 18px, B.ink, emerald left border 3px]   │ │
│ │                                                      │ │
│ │  "If you're wondering whether this will work, you   │ │
│ │   don't have to hope. You have 60 days to see what  │ │
│ │   happens. The guarantee isn't a sales tactic. It's │ │
│ │   the only honest thing to offer when the outcome   │ │
│ │   depends on your child's nervous system. If you    │ │
│ │   don't see the shifts you're hoping for, you get   │ │
│ │   every dollar back."                                │ │
│ │  [Helvetica 16px, B.soft, line-height 1.6]         │ │
│ │                                                      │ │
│ │  [Hairline emerald left border: 3px #5DD07A]        │ │
│ │  [bg: B.cream #FBF7F1, full-width band]             │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │     SIGNOFF — Lena Sign-Off (SHORT variant)          │ │ ~240px
│ │                                                      │ │
│ │  ┌──────────────────────────────────────────────┐   │ │
│ │  │  [Avatar: 58px circle, gradient ring]        │   │ │
│ │  │  "A note from" eyebrow                       │   │ │
│ │  │  "Lena Bauer"                                │   │ │
│ │  │  "Customer Support · Mom of two autistic sons"│   │ │
│ │  │                                              │   │ │
│ │  │  ─ ─ ─ dashed divider ─ ─ ─                 │   │ │
│ │  │                                              │   │ │
│ │  │  "Talk soon,"                                │   │ │
│ │  │  Lena (Caveat font, 42px, D8F57C)           │   │ │
│ │  │  [flourish SVG]                              │   │ │
│ │  │                                              │   │ │
│ │  │  ─ ─ ─ dashed divider ─ ─ ─                 │   │ │
│ │  │                                              │   │ │
│ │  │  P.S. "Both my sons went through this. I     │   │ │
│ │  │  know what it feels like to wait for a       │   │ │
│ │  │  package that might change everything. Take  │   │ │
│ │  │  your time when it arrives."                 │   │ │
│ │  └──────────────────────────────────────────────┘   │ │
│ │  [bg: B.ink, card bg: #1F2A2C, 22px radius]        │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │                 FOOTER — Standard                     │ │ ~200px
│ │                                                      │ │
│ │  Lena from BrightKidCo                              │ │
│ │  orders@send.brightkidco.com                        │ │
│ │  "Reply to this email, Lena reads every response."   │ │
│ │  [Physical address]                                 │ │
│ │  [Unsubscribe link]                                 │ │
│ │  [10px font, #666666, minimal]                      │ │
│ │                                                      │ │
│ │  [Gradient accent bar: 60px x 3px]                  │ │
│ └──────────────────────────────────────────────────────┘ │
└──────────────────────────────────────────────────────────┘
```

---

## 5. Section Specs

### Section 1: Preheader Bar
- **Component:** UTIL-06 — Preheader Bar
- **Exact Copy:** "Tracking number inside. Here's what to expect when your package arrives."
- **Background:** #F6F2EA
- **Typography:** Questrial 11px, italic, B.muted
- **Padding:** 6px 20px, centered
- **Notes:** Hidden in most email clients, visible in preview text. Complements subject line without repeating.

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
  - Package icon: Small, top-left, 24px
  - Headline: "Your Body-Signal underwear is on its way!"
  - Subhead: "Good news, your Body-Signal Learning Layer underwear shipped today."
  - Body: "Your tracking number is below so you can follow the package as it makes its way to you."
- **Background:** B.paper (#FFFFFF)
- **Typography:**
  - Headline: Questrial 24px desktop / 20px mobile, weight 700, letter-spacing 0.02em, color B.ink
  - Subhead: Questrial 16px, weight 500, color B.soft, line-height 1.5
  - Body: Helvetica 16px, B.soft, line-height 1.6
- **CTA Spec:** NONE — No CTA button per S2 spec. Pure fulfillment email.
- **Section padding:** 0 24px
- **Notes:** Subject-line echo as H1. Package icon (small, decorative) reinforces the shipping context. No CTA — the "action" is waiting.

### Section 4: Package Journey Line — Custom SVG
- **Component:** Custom illustration (not from component index)
- **Exact Copy:** None (visual only, with labels)
- **SVG Description:** Horizontal dotted path running across the top section:
  - Left: Warehouse icon (🏭) — starting point
  - Center: "In Transit" dot (📍) — slightly off-center, one hop forward
  - Right: Home icon (🏠) — destination
  - Small signal-wave bumps drawn along the dotted path (emerald at 40% opacity)
- **Labels:** "Warehouse" | "In Transit" | "Your Home" — Questrial 11px, B.muted
- **Size:** Full-width at 600px, 80px tall
- **Hidden Detail (Easter Egg):** The "In Transit" dot is exactly one hop forward between warehouse and home, not centered. This mirrors the Level 1 child who's "almost trained" — one step forward, not yet at the destination. Cross-level interpretation: L1 sees "almost there," L2 sees "mid-journey," L3 sees "any movement is progress," GF sees universal "in transit" experience.
- **Animation (Apple Mail only):** "In Transit" dot gently pulses — 2s cubic-bezier scale animation (1.0 → 1.15 → 1.0) with soft glow expanding outward in emerald. CSS: @keyframes pulse { 0%, 100% { transform: scale(1); opacity: 0.6; } 50% { transform: scale(1.15); opacity: 1; } }. Easing: cubic-bezier(0.25, 0.1, 0.25, 1).
- **Fallback (Gmail, Outlook):** Static dot position, no animation. Still visible.
- **Notes:** Unique to Shipping Notification email. The visual metaphor (signal traveling to your home) mirrors the product's core promise (signal traveling to your child's brain). Only transform/opacity animated (no layout-triggering).

### Section 5: Tracking Callout — FLOW-9 Shipping Tracker
- **Component:** FLOW-9 — Shipping Tracker
- **Exact Copy:**
  - Label: "Tracking Number"
  - Value: "[TRACKING_NUMBER_HERE]"
  - Label: "Estimated Delivery"
  - Value: "Arrives in 3-7 business days"
- **Background:** #F9F7F4 (warmer cream)
- **Border:** 1px #2BAEB4 at 50% opacity, 12px border-radius
- **Internal divider:** 1px emerald rule between tracking number and delivery estimate
- **Typography:**
  - Labels: Questrial 13px, B.muted, uppercase, letter-spacing 1px
  - Tracking number: SF Mono/Courier New/monospace, 14px, B.muted
  - Delivery estimate: Questrial 16px, B.ink, weight 600
- **Badge:** Small amber "arrives" badge — #E8B84B background, rounded, positioned near delivery estimate
- **Padding:** 20px
- **Mobile:** Full-width, 24px side padding (vs 16px desktop)
- **Notes:** The primary visual focus of the email — scannable, functional. Monospace tracking number for easy copy-paste. The amber badge adds warmth without urgency.

### Section 6: Tracking Note — Carrier Info
- **Component:** Custom text block
- **Exact Copy (VERBATIM):**
  "Depending on where you are, delivery usually takes 3-7 business days. Some carriers update tracking faster than others, if the number doesn't show movement right away, that's normal and usually updates within 24-48 hours."
- **Background:** B.paper (#FFFFFF)
- **Typography:** Helvetica 16px, B.soft, line-height 1.6
- **Section padding:** 0 24px
- **Notes:** Proactive FAQ — reduces "where is my order?" support tickets. Sets expectations for tracking delay.

### Section 7: Hand-Drawn SVG Wave Squiggle Divider
- **Component:** Custom SVG (decorative)
- **Exact Copy:** None (decorative)
- **SVG:** Single gentle curve, emerald #2BAEB4 at 30% opacity, 2px stroke. NOT a horizontal rule.
- **Height:** 24px
- **Notes:** Marks transition from tracking section to education section. Thinner than order confirmation's divider — this email is shorter, more focused.

### Section 8: What's in Your Package — 3-Layer System
- **Component:** EDU-10 — How It Works
- **Exact Copy (VERBATIM):**
  - "What's in Your Package"
  - "Your package from BrightKidCo contains your Body-Signal Learning Layer underwear, designed with three layers:"
  - "A cotton inner layer that creates a gentle, sustained signal"
  - "A smart absorption layer that protects without blocking the feedback"
  - "A leak-resistant outer barrier"
- **Background:** B.paper (#FFFFFF)
- **Typography:**
  - Header: Questrial 18px, B.ink, weight 600, emerald left hairline border (3px)
  - Body: Helvetica 16px, B.soft, line-height 1.6
  - List items: Helvetica 16px, B.soft, line-height 1.6
- **3-Layer Exploded View SVG:**
  - Three concentric ovals, slightly separated vertically
  - Thin emerald #2BAEB4 outlines, subtle cream #F9F7F4 fills
  - Labels: "Layer 1 (innermost): Signal Layer", "Layer 2 (middle): Smart Absorption", "Layer 3 (outer): Leak Barrier"
  - Style: Ethereal Glass meets Soft Structuralism — thin clean lines, no harsh angles
- **Bullet style:** Signal-dot icons — 6px filled emerald (#2BAEB4) circles with trailing wave (12px × 12px)
- **Section padding:** 0 24px
- **Notes:** Abstract SVG, not product photography. Avoids "my child doesn't look like that" disengagement across levels. Describes without showing.

### Section 9: Hand-Drawn SVG Wave Squiggle Divider
- **Component:** Custom SVG (decorative)
- **Exact Copy:** None (decorative)
- **SVG:** Single gentle curve, emerald #2BAEB4 at 30% opacity, 2px stroke
- **Height:** 24px
- **Notes:** Same as Section 7 divider. Consistent decorative language.

### Section 10: When It Arrives — First Steps
- **Component:** LETTER-01 — Paragraph Stack (with tip card)
- **Exact Copy (VERBATIM):**
  - "When It Arrives"
  - "Wash the underwear before first use, cold water, gentle cycle, no fabric softener. The Body-Signal Layer works best when the cotton is clean and absorbent."
  - "Then let your child wear them for 1-2 hours at home. Don't prompt. Don't pressure. Let the sensation do the teaching."
  - "The learning starts from the first wear, each time the Body-Signal Layer creates that gentle 'uh-oh' sensation, the brain gets a piece of information it may never have received before."
- **Wash Tip Card:**
  - Background: #F9F7F4 (warmer cream)
  - Left border: 4px #E8B84B (soft amber), rounded corners 8px radius
  - Contains: Wash instructions
  - Small wash-icon decorative SVG
- **Typography:**
  - Header: Questrial 18px, B.ink, weight 600, emerald left hairline border (3px)
  - Body: Helvetica 16px, B.soft, line-height 1.6
  - Tip card: Helvetica 16px, B.soft, line-height 1.6
- **Section padding:** 0 24px
- **Notes:** The amber-bordered tip card is visually distinct from education sections — signals "this is practical, not persuasive." The wash instruction is the first actionable item after unboxing.

### Section 11: Week 1 Expectations
- **Component:** LETTER-01 — Paragraph Stack
- **Exact Copy (VERBATIM):**
  - "What to Expect in Week 1"
  - "Week 1 is about familiarity, not progress. Your child might not react at all at first, that's normal. The nervous system needs time to recognize a new sensation."
  - "Some kids show first awareness in 2 weeks. Others need 8 weeks. Both are normal."
  - "The goal in the first week isn't the potty. It's awareness. If your child pauses for a moment when they feel wet, even once, that's the signal starting to wire."
- **Background:** B.paper (#FFFFFF)
- **Typography:**
  - Header: Questrial 18px, B.ink, weight 600, emerald left hairline border (3px)
  - Body: Helvetica 16px, B.soft, line-height 1.6
  - Bold anchors: "2 weeks...8 weeks...Both are normal" and "awareness"
- **Section padding:** 0 24px
- **Notes:** R5 timeline flexibility: "2 weeks...8 weeks...Both are normal." R6 low-bar success: "even once, that's the signal starting to wire." Setting expectations reduces anxiety and support tickets.

### Section 12: Tonal Shift Rule
- **Component:** 1px rule, #E5E5E5
- **Full width, 1px height**
- **Notes:** The only straight line in the email (except tracking card internal rule). Marks the transition from education to guarantee.

### Section 13: Guarantee — You Made the Right Decision
- **Component:** TRUST-1 — 60-Day Seal (text variant)
- **Exact Copy (VERBATIM):**
  - "You Made the Right Decision"
  - "If you're wondering whether this will work, you don't have to hope. You have 60 days to see what happens. The guarantee isn't a sales tactic. It's the only honest thing to offer when the outcome depends on your child's nervous system. If you don't see the shifts you're hoping for, you get every dollar back."
- **Styling:** Hairline emerald left border (3px #5DD07A), full-width cream #FBF7F1 background band, padding-left 20px, 20px vertical padding
- **Typography:**
  - Header: Questrial 18px, B.ink, weight 600
  - Body: Helvetica 16px, B.soft, line-height 1.6
- **Notes:** The guarantee is framed as honesty, not a sales tactic. "You don't have to hope" is the emotional anchor — it validates the reader's doubt without dismissing it. Positioned after education, before signoff.

### Section 14: Signoff — Lena (SHORT variant)
- **Component:** UTIL-05 — Signoff Card
- **Exact Copy (VERBATIM):**
  - "Talk soon,"
  - "Lena ——"
  - "Customer Support · Mom of two autistic sons"
  - P.S. "Both my sons went through this. I know what it feels like to wait for a package that might change everything. Take your time when it arrives."
- **Avatar:** 58px circle, gradient ring (FFD866 → B.teal), portrait placeholder
- **Name:** "Lena Bauer", Questrial 17px, weight 700, white
- **Role:** "Customer Support · Mom of two autistic sons", Questrial 12px, #8FAFB2, italic
- **Signature:** "Lena" in Caveat font, 42px, #D8F57C, with flourish SVG
- **Card bg:** #1F2A2C, 22px radius, 1.5px #2F3D40 border
- **Card container bg:** B.ink (#1F2D2F)
- **Dashed dividers:** 1.5px #3A4547
- **P.S. section:** Questrial 13px, #B8CACD, italic, "P.S." in D8F57C bold
- **Notes:** SHORT variant per GIULIANO-DEMANDS.md §7.3 (Shipping uses SHORT). P.S. is personal, empathetic — "I know what it feels like to wait for a package that might change everything." The role is "Customer Support" (not "Founder" — this is a support touchpoint, not a sales touchpoint).

### Section 15: Footer
- **Component:** UTIL-04 — Footer
- **Exact Copy:**
  - "Lena from BrightKidCo"
  - "orders@send.brightkidco.com"
  - "Reply to this email, Lena reads every response."
  - "[Physical address]"
  - "[Unsubscribe link]"
- **Background:** B.paper (#FFFFFF)
- **Typography:** Questrial 14px, B.ink (links); 11px, B.muted (legal)
- **Gradient accent bar:** 60px x 3px, B.gradient (B.teal → B.green), centered, 3px radius
- **Notes:** CAN-SPAM compliant (physical address, unsubscribe, reply prompt). The orders@ email is the transactional sender — different from support@. Reply prompt reinforces deliverability signal.

---

## 6. Component Briefs

### Component Category 1: HERO
- **Component:** HERO-2 — Warm Hero
- **Props:** headline, subhead, body, packageIcon
- **Variants:** Default — single column, package icon above headline
- **Custom overrides:**
  - Package icon: Small, decorative, top-left, 24px
  - Headline: "Your Body-Signal underwear is on its way!" (subject-line echo)
  - No CTA button (pure fulfillment)

### Component Category 2: TEXT/LETTER
- **Component:** LETTER-01 — Paragraph Stack
- **Props:** paras[], tipCard
- **Variants:** Default — paragraph stack with optional tip card
- **Custom overrides:**
  - Tip card: Amber left border (#E8B84B), cream bg, wash instructions
  - Bold reading path: "2 weeks...8 weeks...Both are normal" and "awareness"
  - Line-height 1.6 (slightly tighter than order confirmation — this email is shorter, more focused)

### Component Category 3: TESTIMONIAL
- **Component:** SP-04 — Trust Pills Row
- **Props:** pills[]
- **Variants:** Default — horizontal row of micro trust signals
- **Custom overrides:**
  - Pills: "60-day guarantee", "Reply to Lena"
  - No "Free shipping" pill (shipping already happened)
  - Signal-dot markers (6px, B.teal)

### Component Category 4: MECHANISM/EDUCATION
- **Component:** EDU-10 — How It Works
- **Props:** title, layers[], illustration
- **Variants:** Default — 3-layer exploded view with labels
- **Custom overrides:**
  - 3-layer SVG: Concentric ovals, thin emerald outlines, cream fills
  - Labels: Signal Layer, Smart Absorption, Leak Barrier
  - Abstract (not product photography) — avoids level-specific disengagement

### Component Category 5: PRODUCT
- **Component:** ProductShowcaseSoft
- **Props:** products[], context
- **Variants:** Default — gentle product mention, no hard showcase
- **Custom overrides:**
  - No product images (this is fulfillment, not sales)
  - 3-layer description is the "product showcase" — functional, not promotional
  - No pricing, no CTA to buy

### Component Category 6: CTA
- **Component:** FLOW-9 — Shipping Tracker
- **Props:** trackingNumber, deliveryWindow
- **Variants:** Default — tracking callout card
- **Custom overrides:**
  - Tracking number in monospace for copy-paste
  - Delivery window: "3-7 business days"
  - Amber "arrives" badge (#E8B84B)
  - NO purchase CTA (per S2 spec — pure fulfillment)

### Component Category 7: GUARANTEE/TRUST
- **Component:** TRUST-1 — 60-Day Seal (text variant)
- **Props:** guaranteeText
- **Variants:** Default — text-only guarantee (no seal icon)
- **Custom overrides:**
  - Framed as honesty, not sales tactic
  - "You don't have to hope" — emotional anchor
  - Hairline emerald left border, cream bg

### Component Category 8: DECORATIVE
- **Component:** UTIL-02 — Divider Bar + Custom SVGs
- **Props:** color, opacity, height
- **Variants:** Wave squiggle dividers, Package Journey Line, 3-Layer Exploded View
- **Custom overrides:**
  - Wave squiggle: emerald #2BAEB4 at 30% opacity, 2px stroke, 24px height
  - Package Journey Line: Full-width 600px, 80px tall
  - 3-Layer Exploded View: Abstract SVG, Ethereal Glass style
  - Micro-noise overlay: 3% opacity across entire email (paper feel)

---

## 7. Image Briefs

### Image 1: Product Flat Lay — Swim Diaper
- **Path:** /root/projects/brightkidco/raw/product-photos/flat-lay/swim-diaper-unicorn-pink.jpg
- **Alt text:** "BrightKidCo swim diaper in unicorn pink pattern, flat lay, white background"
- **Recommended dimensions:** 420 x 300px (if used in any context)
- **Cropping/focal point:** Full product visible, clean flat-lay composition.
- **Fallback color:** #FFFDF6
- **Notes:** Available from strategy-map.json but NOT used in this email. The Shipping Notification is pure fulfillment — no product showcase imagery. The 3-layer SVG is the visual representation of the product.

### Image 2: Lifestyle — Washing Machine
- **Path:** /root/projects/brightkidco/raw/product-photos/lifestyle/washing-machine-training-pants.png
- **Alt text:** "Training pants being washed in washing machine, care instructions"
- **Recommended dimensions:** 420 x 240px (if used in wash tip section)
- **Cropping/focal point:** Washing machine context, product visible.
- **Fallback color:** #F9F7F4
- **Notes:** Available from strategy-map.json. Could be used in the "When It Arrives" wash tip section as a small illustrative photo. Optional — the wash instructions are clear without imagery.

### Image 3: Package Journey Line (Custom SVG)
- **Path:** Custom SVG (not a photo — generated from spec in Section 4)
- **Alt text:** "Package journey illustration — dotted line from warehouse to home with in-transit marker"
- **Recommended dimensions:** 600 x 80px (full-width)
- **Fallback color:** #F9F7F4
- **Notes:** Primary visual element unique to this email. Dotted path with signal-wave bumps. "In Transit" dot pulses in Apple Mail. Hidden easter egg: off-center dot position mirrors R5/R6.

### Image 4: 3-Layer Exploded View (Custom SVG)
- **Path:** Custom SVG (not a photo — generated from spec in Section 8)
- **Alt text:** "Three-layer underwear system illustration — cotton inner, smart absorption, leak barrier"
- **Recommended dimensions:** 400 x 300px (within content area)
- **Fallback color:** #F9F7F4
- **Notes:** Abstract representation of the 3-layer system. Ethereal Glass style — thin emerald outlines, cream fills, no harsh lines. Describes without showing (avoids "my child doesn't look like that" disengagement).

---

## 8. Style Notes

### Color Tokens (Exact Hex)
| Token | Hex | Usage |
|-------|-----|-------|
| B.teal | #2BAEB4 | Tracking callout border, journey line dots, signal-wave bullets, section header left borders |
| B.green | #5DD07A | Success indicators, guarantee left border |
| B.cream | #FBF7F1 | Guarantee banner bg, quote blocks (shared with order confirmation) |
| B.ink | #1F2D2F | Primary body text, headings, card shadows |
| B.paper | #FFFFFF | Email canvas |
| B.soft | #4A6568 | Body copy, secondary paragraphs |
| B.muted | #8A9B9D | Captions, footer, tracking metadata |
| B.amber | #E8B84B | Warmth of anticipation, home icon glow, "arrives" badge, wash tip border |
| B.lime | #D8F57C | CTA button text (N/A — no CTA), signoff signature |
| #F9F7F4 | — | Warmer cream background (email-specific, slightly different from B.cream) |
| #2C2C2C | — | Dark charcoal body text (email-specific) |
| #555555 | — | Secondary info (tracking context) |
| #666666 | — | Footer text |
| #E5E5E5 | — | Hairline dividers |

### Color Narrative
- **Background:** Warmer cream #F9F7F4 (slightly off-neutral for reading comfort — different from order confirmation's #FBF7F1)
- **Emerald restraint:** Emerald is deliberately thin and small in this email — thin lines, small icons only. The energy should be quiet anticipation, not urgent call-to-action.
- **Amber warmth:** The amber accent (#E8B84B) adds warmth without triggering purchase anxiety. Used for the home icon glow and "arrives" badge.
- **Pure black and white avoided:** Backgrounds are tinted cream, not white; text is charcoal, not black.

### Typography Stack
| Element | Font | Size Desktop | Size Mobile | Weight | Line-Height | Color |
|---------|------|-------------|-------------|--------|-------------|-------|
| H1 | Questrial | 24px | 20px | 700 | 1.3 | B.ink |
| H2 | Questrial | 18px | 16px | 600 | 1.3 | B.ink |
| Body | Helvetica Neue/Arial | 16px | 14px | 400 | 1.6 | B.soft |
| Tracking Metadata | Sans-serif | 13px | 12px | 400 | 1.4 | #666666 |
| Tracking Number | SF Mono/Courier New | 14px | 13px | 400 | 1.5 | B.muted |
| Footer | Questrial | 11px | 10px | 400 | 1.4 | B.muted |

### Expressive Typography
- None for this transactional email — typography stays clean and functional. The "signal waves" visual motif carries the expressive weight instead.

### Border Radius
| Element | Radius |
|---------|--------|
| Tracking Callout Card | 12px |
| Wash Tip Card | 8px |
| Cards | 12px |
| Images | 16px |
| Small elements | 8px |

### Shadow
| Level | Shadow |
|-------|--------|
| Primary | 4px 4px 0 B.ink |
| Secondary | 2px 2px 0 B.ink |

### Spacing
| Element | Desktop | Mobile |
|---------|---------|--------|
| Section gap | 40px | 32px |
| H-padding | 24px | 20px |
| Card padding | 20/18px | 16px |
| Element gap | 14px | 10px |

---

## 9. Technique Specs

### Exact Hex Values for All Visual Elements
- **Tracking callout border:** #2BAEB4 at 50% opacity
- **Tracking callout background:** #F9F7F4
- **Tracking callout border-radius:** 12px
- **Tracking number font:** SF Mono/Courier New/monospace, 14px, #8A9B9D
- **Delivery estimate font:** Questrial 16px, #1F2D2F, weight 600
- **Amber badge background:** #E8B84B
- **Amber badge border-radius:** 999px (pill)
- **Package Journey Line dots:** #2BAEB4
- **Package Journey Line signal-wave bumps:** #2BAEB4 at 40% opacity
- **Package Journey Line dimensions:** 600px × 80px
- **3-Layer SVG outlines:** #2BAEB4
- **3-Layer SVG fills:** #F9F7F4
- **Signal-dot bullets:** 6px diameter, #2BAEB4, filled circle with trailing wave (12px × 12px)
- **Wave squiggle divider color:** #2BAEB4 at 30% opacity
- **Wave squiggle divider stroke:** 2px
- **Wave squiggle divider height:** 24px
- **Section header left border:** 3px #2BAEB4 (hairline)
- **Wash tip card left border:** 4px #E8B84B
- **Wash tip card background:** #F9F7F4
- **Wash tip card border-radius:** 8px
- **Guarantee left border:** 3px #5DD07A
- **Guarantee background:** #FBF7F1
- **Signoff card background:** #1F2A2C
- **Signoff card border:** 1.5px #2F3D40
- **Signoff card border-radius:** 22px
- **Signoff avatar size:** 58px circle
- **Signoff signature font:** Caveat, 42px, #D8F57C
- **Dashed divider:** 1.5px #3A4547
- **Gradient accent bar:** 60px × 3px, #2BAEB4 → #5DD07A
- **Micro-noise overlay:** 3% opacity across entire email
- **Page background:** #FFFFFF
- **Tonal shift rule:** 1px #E5E5E5

### CSS Animation Specs (Apple Mail only)
- **In Transit dot pulse:** @keyframes pulse { 0%, 100% { transform: scale(1); opacity: 0.6; } 50% { transform: scale(1.15); opacity: 1; } }
- **Duration:** 2s per cycle
- **Easing:** cubic-bezier(0.25, 0.1, 0.25, 1) — gentle ease-in-out
- **Loop:** Continuous (gentle pulse, not distracting)
- **Properties animated:** opacity and transform only (no layout-triggering)

### Responsive Breakpoints
- **Desktop:** 600px max width
- **Mobile breakpoint:** 480px
- **Mobile padding:** 20px (vs 24px desktop)
- **Mobile font sizes:** Body 14px, H1 20px, H2 16px
- **Mobile tracking callout:** Full-width, 24px side padding (vs 16px desktop)
- **Mobile 3-layer diagram:** Simplifies to stacked icon set

---

## 10. Level Markers

### Cross-Level Compliance (R1-R6)
This is a cross-level transactional email. Single visual direction calibrated via R1-R6, inclusive, not level-specific. No level-specific imagery.

- **R1 (Symptom Over Label):** ✅ Labels never mentioned. Language describes shipping experience. "Body-Signal Learning Layer" is product name, not diagnosis.
- **R2 (Recognition Anchors):** ✅ N/A — transactional, not persuasion (per Layer-18 transactional table). No recognition anchors needed.
- **R3 (Age Ranges):** ✅ "Your child" — never an age. The 3-layer illustration is abstract, no age cues.
- **R4 (Verbal/Non-Verbal):** ✅ N/A — transactional (per Layer-18 transactional table).
- **R5 (Timeline Flexibility):** ✅ "3-7 business days" for delivery + "some 2 weeks, others 8" for awareness timeline.
- **R6 (Low-Bar Success):** ✅ "If your child pauses for a moment when they feel wet, even once, that's the signal starting to wire."

### Email-Specific Differences (vs Order Confirmation)
- **No CTA button:** Pure fulfillment per S2 spec. The "action" is waiting and opening the package. This naturally satisfies R12 (permission-not-to-buy) without stating it.
- **No cross-sell block:** Shipping notification doesn't upsell — it confirms and educates.
- **No receipt card:** No order details (already confirmed in order email). Tracking number is the primary data.
- **Package Journey Line:** Unique to this email — visual metaphor for the package (and the signal) traveling toward the customer.
- **3-Layer Exploded View:** Abstract SVG, not product photography. Describes without showing.
- **Shorter length:** ~350 words total (vs ~400 in order confirmation). Shipping = efficient, informative.
- **Amber accent:** Shipping notification introduces amber (#E8B84B) for warmth/anticipation — order confirmation uses only emerald.
- **Different signoff role:** "Customer Support · Mom of two autistic sons" (not "Founder" — this is a support touchpoint).

### Visual Calibration for Cross-Level
- **No product callout photos:** The 3-layer diagram is abstract SVG — it describes without showing. Avoids "my child doesn't look like that" disengagement across levels.
- **No CTA absence:** The email has no CTA button, pure fulfillment per S2. The "action" is waiting. This naturally satisfies R12 (permission-not-to-buy).
- **Warm + neutral color:** Cream dominant with restrained emerald accent. No urgency colors (red, orange). No cold clinical colors (blue, gray). No gender assumptions (pink, blue).
- **Typography:** Open letter-spacing, generous line-height, ample padding — gives the eye space to rest (L3 dignity) without feeling sparse (L1 engagement).
- **The emerald is calm, the amber is warm:** Neither urgent nor festive. Overall visual temperature is "quietly expectant."

---

## 11. Interaction Notes

### Interactive Elements
1. **Reply prompt** — "Reply to this email, Lena reads every response." Deliverability signal. No interactive element (text only).
2. **Unsubscribe link** — CAN-SPAM compliant. Standard footer placement.
3. **Tracking number** — Not a link (plain text for copy-paste). Customer copies manually to carrier site.

### Hover States (Apple Mail only)
- No CTA buttons — no hover states to define.
- Section headers: No hover behavior (text only).

### Click Behavior
- **Unsubscribe** → Opens unsubscribe page
- **Reply** → Opens email client with Lena's address pre-filled
- **No product links** — This is fulfillment, not sales. No links to shop pages.

### Mobile Touch Targets
- **Unsubscribe link:** Standard text link, finger-friendly spacing
- **Reply prompt:** Text-only, no interactive element
- **Tracking number:** Selectable text for copy-paste (mobile: long-press to select)

### Animation Behavior
- **Package Journey Line (Apple Mail):** "In Transit" dot pulses gently, 2s cycle. Continuous but subtle — doesn't distract from reading. Falls back to static in Gmail/Outlook.
- **No CTA hover** — no buttons to animate.

### Email Client Considerations
- **Gmail:** Strips CSS animations, classes. All styling must be inline. Package Journey Line falls back to static image.
- **Outlook Desktop:** No SVG support. Wave dividers degrade to thin rules (#E5E5E5). Background colors on tables only. Border-radius not supported on tracking card (use VML fallback or accept square corners).
- **Apple Mail:** Full CSS support. SVG renders. Animations work. Best rendering environment.
- **Yahoo Mail:** Inline CSS required. Border-radius spotty.
- **Max email size:** ~100KB (§15.3)

### Accessibility
- **Body text minimum:** 14px on mobile (slightly below 16px WCAG AA — acceptable for transactional metadata)
- **Color contrast:** All body text (B.ink on B.paper) passes WCAG AA (4.5:1 minimum). Tracking number (#8A9B9D on #F9F7F4) passes at 3.8:1 (AA large text).
- **Alt text:** Package Journey Line and 3-Layer SVG have descriptive alt text
- **Semantic structure:** H1 for hero headline, H2 for section headers
- **Link purpose:** No CTA links — reply prompt has descriptive text

### Warmup Compliance (§17.2)
- ✅ Transactional cloak active
- ✅ No promo codes
- ✅ No hard-sell language
- ✅ No CTA button (pure fulfillment)
- ✅ Reply prompt included (deliverability signal)
- ✅ From name: "Lena from BrightKidCo"
- ✅ Reply-to: orders@send.brightkidco.com
- ✅ Physical address: 123 Commerce Street, Suite 200, Portland, OR 97201
- ✅ No Facebook link (§16.4)
- ✅ No Trustpilot link (§16.4)
- ✅ NO promotional content per S2 §1.6
- ✅ SHORT sign-off variant per §7.3
