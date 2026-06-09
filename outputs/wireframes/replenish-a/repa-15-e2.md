# Wireframe: Replenish A — E2 | Cross-Level (L1/L2/L3/GF)

## 1. Metadata

| Field | Value |
|-------|-------|
| **Flow** | Replenish A (Flow 15) |
| **Position** | E2 — Day 21 post-purchase |
| **Level** | Cross-Level — L1 (Sarah), L2 (Lisa), L3 (Maria), General Fallback |
| **Copy File** | /root/projects/brightkidco/outputs/copy/replenish-a/repa-15-e2.md |
| **Strategy Map Entry** | flows.replenish-a.emails.e2 |
| **Flow Signature** | replenishment-reminder, respectful re-engagement, practical |
| **Level Calibration** | Cross-level, Question hook subject, Short sign-off variant, Dual CTA |
| **Component Categories Used** | HERO, TEXT/LETTER, TESTIMONIAL, MECHANISM, PRODUCT, CTA, GUARANTEE, DECORATIVE |
| **Total Estimated Height** | ~3,400px (desktop) / ~3,700px (mobile) |

---

## 2. Strategy Box

**Big Idea:** "Daily consistency is what builds the signal pathway, and one pair can't deliver daily consistency." The core insight: Most 1-pair parents hit week 3 and discover the bottleneck isn't their child, it's the laundry cycle. The body-signal mechanism needs daily repetition. A single pair in rotation means the child wears it, it gets washed, and by the time it's dry the "wear window" has passed. The 3+3 Bundle isn't a luxury upsell, it's the practical solution to the consistency problem. This reframe makes purchasing more pairs feel like problem-solving, not upselling.

**Contraption (Design Mechanism):** "How many pairs does your child need?" 3-step visual slider — a simple static comparison:
- Step 1: "1 pair currently" → shows the wash-dry-wait bottleneck
- Step 2: "3 pairs (minimum)" → shows 3-day rotation with one laundry day
- Step 3: "6 pairs (recommended)" → shows daily wear, full week rotation, no laundry dependency

Each step shows a small visual of how many hours/day the child wears the underwear. Respectfully low-tech, no animation that could trigger sensory discomfort. A static before/after comparison works as fallback.

**Emotional Arc Position:** Position 2 of 3 in Replenish A flow — The practical gap. Shifts from E1's emotional validation to E2's practical reasoning. The parent has had 3 weeks to observe. Now the email names the bottleneck they've likely discovered: the laundry cycle breaks consistency. The 3+3 Bundle is positioned as the solution to a problem they're already experiencing, not a new desire.

**Component Selection Rationale:**
- HERO-9 (Whisper Tone): Quieter, more spacious than E1's Mirror Moment. Signals a shift from observation to practical conversation.
- LETTER-01 (Paragraph Stack): Clean, direct copy delivery. No decorative interruptions — the practical argument needs clarity.
- SP-08 (Stacked Mini-Reviews): Three short parent quotes in card format. Each 1-2 sentences, authentic voice.
- EDU-10 (How It Works): Mechanism explanation — why rotation matters, why daily wear is the variable.
- ProductShowcaseMedium: 3+3 Bundle with pricing and per-pair breakdown.
- CTA-8 (Dual CTA): Primary bundle CTA + secondary single-pair re-order. Respects all levels.
- TRUST-1 (60-Day Seal): Standard guarantee placement.
- DESDEEP-14 (Handwritten Touch): Subtle decorative element — handwritten-style accent that reinforces Lena's personal voice.

---

## 3. Creative Box

**Color Palette:**
- Primary: #2BAEB4 (B.teal) — CTA button fill, accent highlights, link text
- Secondary: #5DD07A (B.green) — Success indicators, secondary accents, trust badge border
- Background: #FBF7F1 (B.cream) — Overall email background
- Text: #1F2D2F (B.ink) — Primary body text, headings, borders
- Page Background: #FFFFFF (B.paper) — Email canvas
- Secondary Text: #4A6568 (B.soft) — Body copy, secondary paragraphs
- Tertiary Text: #8A9B9D (B.muted) — Captions, footer, citations
- CTA Text on Dark: #FFFFFF — CTA button text
- Cream Card: #FBF7F1 — Testimonial card backgrounds, Practical Gap band
- Divider: #E8E2DA — Section dividers, borders

**Typography:**
- Heading: Questrial, 28px desktop / 22px mobile, weight 700, line-height 1.15, letter-spacing -0.02em
- Body: Questrial, 17px desktop / 16px mobile, weight 400, line-height 1.6, color B.soft
- Accent: Fraunces, 20px desktop / 18px mobile, weight 400 italic, line-height 1.4, color B.ink (for testimonial quotes)
- Eyebrow: Questrial, 10.5px, weight 700, letter-spacing 2px, text-transform uppercase, color B.teal
- CTA button: Questrial, 18px, weight 700, white #FFFFFF
- Testimonial attribution: Questrial, 11px, weight 700, small caps, letter-spacing 0.05em, B.muted

**Border Radius:** Cards: 16px, Buttons: 999px (pill for primary CTA), Images: 16px, Small: 12px
**Shadow:** Primary: 4px 4px 0 B.ink (card shadow)
**Spacing:** Section gap: 44px, H-padding: 30px desktop / 20px mobile, Card padding: 24/22px, Element gap: 16px, CTA spacing: 24px above, 20px below

---

## 4. Layout ASCII

```
┌──────────────────────────────────────────────────────────┐
│ ┌──────────────────────────────────────────────────────┐ │
│ │                  [PREHEADER BAR]                     │ │ 36px
│ │  Whether you're seeing first signals or still       │ │
│ │  waiting, one pair might not be enough for          │ │
│ │  daily wear.                                        │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │              [HEADER — Logo + From Name]             │ │ 80px
│ │         BrightKidCo · Lena from BrightKidCo         │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │        HERO-9: Whisper Tone                          │ │ ~300px
│ │                                                      │ │
│ │  [Eyebrow: "WEEK 3"]                                │ │
│ │  [Questrial 10.5px, B.teal, uppercase, 2px spacing] │ │
│ │                                                      │ │
│ │  ┌────────────────────────────────────────────────┐  │ │
│ │  │  [IMG: toddler-potty-ladder-yellow-woodland]   │  │ │
│ │  │          Lifestyle hero image                  │  │ │
│ │  │          420 x 220px, rounded 16px             │  │ │
│ │  │          Black border + drop-shadow ink block  │  │ │
│ │  └────────────────────────────────────────────────┘  │ │
│ │                                                      │ │
│ │  "More pairs for the rotation?"                     │ │
│ │   [H1 — Questrial 28px/22px, B.ink, -0.02em]       │ │
│ │                                                      │ │
│ │  "Whether you're seeing first signals or still      │ │
│ │   waiting, one pair might not be enough for daily   │ │
│ │   wear."                                             │ │
│ │   [Subhead — Questrial 17px, B.soft, 1.5 line-h]   │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌─────── DESDEEP-14: HANDWRITTEN TOUCH ────────────────┐ │ 8px
│ │  [Subtle handwritten-style accent line]              │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │       LETTER-01: Paragraph Stack — Observation       │ │ ~400px
│ │                                                      │ │
│ │  [OBSERVATION — 1 paragraph]                         │ │
│ │                                                      │ │
│ │  "It's been about 3 weeks since the first pair      │ │
│ │   arrived. In that time, maybe you've noticed some  │ │
│ │   of these:"                                         │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │       LETTER-01: Recognition Anchors                 │ │ ~400px
│ │                                                      │ │
│ │  ┌──────────────────────────────────────────────┐   │ │
│ │  │  [RECOGNITION ANCHORS — Cream Card #FBF7F1]  │   │ │
│ │  │  bg: #FBF7F1, 16px radius                    │   │ │
│ │  │  padding: 24px                                │   │ │
│ │  │                                              │   │ │
│ │  │  • Your child wears the underwear, then      │   │ │
│ │  │    you're doing laundry and waiting for it   │   │ │
│ │  │    to dry before the next wear.              │   │ │
│ │  │                                              │   │ │
│ │  │  • The "uh-oh" sensation is starting to do   │   │ │
│ │  │    its work, a pause here, a look down       │   │ │
│ │  │    there, but consistency is still spotty.   │   │ │
│ │  │                                              │   │ │
│ │  │  • You're still using pull-ups for backup    │   │ │
│ │  │    half the time because the one pair is in  │   │ │
│ │  │    the wash.                                  │   │ │
│ │  │                                              │   │ │
│ │  │  • Your child hasn't shown a change yet, and │   │ │
│ │  │    you're wondering if daily wear is even    │   │ │
│ │  │    happening often enough.                    │   │ │
│ │  │                                              │   │ │
│ │  │  [Questrial 17px/16px, B.soft, 1.6 line-h]   │   │ │
│ │  └──────────────────────────────────────────────┘   │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │       LETTER-01: Validation + Mechanism              │ │ ~450px
│ │                                                      │ │
│ │  "Any of those sound familiar? They're all normal,  │ │
│ │   and they all point to the same thing."            │ │
│ │                                                      │ │
│ │  "The Body-Signal Learning Layer needs repetition to │ │
│ │   build the neural pathway. For a nervous system    │ │
│ │   that processes signals differently, the feedback   │ │
│ │   loop doesn't wire after a few wears a week. It    │ │
│ │   wires through consistent, daily exposure, the     │ │
│ │   sensation arriving, the brain registering, the    │ │
│ │   connection building."                             │ │
│ │   [bold reading path: "consistent, daily exposure"] │ │
│ │                                                      │ │
│ │  "Some kids show their first awareness, a pause, a  │ │
│ │   pull at the pants, a look at the wet spot, or a   │ │
│ │   step toward the bathroom, within the first couple │ │
│ │   of weeks. Others need 4, 6, even 8 weeks. Both   │ │
│ │   are normal. The variable isn't your child. It's   │ │
│ │   how often the signal arrives."                    │ │
│ │   [bold reading path: "The variable isn't your      │ │
│ │    child. It's how often the signal arrives."]      │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌─────── 1px RULE — #E8E2DA ──────────────────────────┐ │ 1px
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │       LETTER-01: The Practical Gap                   │ │ ~400px
│ │                                                      │ │
│ │  [Eyebrow: "THE PRACTICAL GAP"]                      │ │
│ │  [Questrial 10.5px, B.teal, uppercase]              │ │
│ │                                                      │ │
│ │  "Here's what most 1-pair parents discover around   │ │
│ │   week 3: one pair isn't enough for daily rotation." │ │
│ │                                                      │ │
│ │  "Wash, dry, wait. By the time the pair is ready,   │ │
│ │   the moment has passed. Your child needs the       │ │
│ │   underwear ON, consistently, every day, for the    │ │
│ │   nervous system to recognize the signal. A few     │ │
│ │   wears a week stretches the timeline. Daily wear   │ │
│ │   shortens it."                                     │ │
│ │   [bold reading path: "Daily wear shortens it"]     │ │
│ │                                                      │ │
│ │  "Six pairs, the 3+3 Bundle, means:"                │ │
│ │                                                      │ │
│ │  • A clean pair every single day                    │ │
│ │  • No laundry-dependency on the learning process    │ │
│ │  • Enough rotation to wear during the most          │ │
│ │    signal-rich hours                                │ │
│ │  • Consistency that the nervous system can actually  │ │
│ │    build on                                         │ │
│ │                                                      │ │
│ │  [4 bullet items, Questrial 17px, B.soft]           │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌─────── 1px RULE — #E8E2DA ──────────────────────────┐ │ 1px
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │       SP-08: Stacked Mini-Reviews — Three-Family     │ │ ~500px
│ │                                                      │ │
│ │  ┌──────────────────────────────────────────────┐   │ │
│ │  │  [CARD 1 — Cream Card #FBF7F1]               │   │ │
│ │  │  bg: #FBF7F1, left-border: 3px B.teal        │   │ │
│ │  │  16px radius, padding 20px                    │   │ │
│ │  │                                              │   │ │
│ │  │  "He's pausing. Just for a second. But he's  │   │ │
│ │  │   pausing before he pees. That never happened│   │ │
│ │  │   before. I need more pairs so he can wear   │   │ │
│ │  │   them all day."                              │   │ │
│ │  │  [Fraunces 17px, italic, B.ink]              │   │ │
│ │  │                                              │   │ │
│ │  │  Sarah, L1 parent, 3 weeks into Body-Signal  │   │ │
│ │  │  [Questrial 11px, B.muted, small caps]       │   │ │
│ │  └──────────────────────────────────────────────┘   │ │
│ │                                                      │ │
│ │  ┌──────────────────────────────────────────────┐   │ │
│ │  │  [CARD 2 — Cream Card #FBF7F1]               │   │ │
│ │  │  bg: #FBF7F1, left-border: 3px B.green       │   │ │
│ │  │                                              │   │ │
│ │  │  "At first I thought nothing was happening.  │   │ │
│ │  │   Then week 4, he looked down. Just looked.  │   │ │
│ │  │   But he'd never done that in 7 years. I     │   │ │
│ │  │   need more pairs so we don't lose           │   │ │
│ │  │   momentum."                                 │   │ │
│ │  │                                              │   │ │
│ │  │  Lisa, L2 parent, 4 weeks in                 │   │ │
│ │  └──────────────────────────────────────────────┘   │ │
│ │                                                      │ │
│ │  ┌──────────────────────────────────────────────┐   │ │
│ │  │  [CARD 3 — Cream Card #FBF7F1]               │   │ │
│ │  │  bg: #FBF7F1, left-border: 3px B.muted       │   │ │
│ │  │                                              │   │ │
│ │  │  "He's tolerating the underwear. That's      │   │ │
│ │  │   already more than I expected. I'm not      │   │ │
│ │  │   rushing. But I want enough pairs so he can │   │ │
│ │  │   wear them every single day without me      │   │ │
│ │  │   doing laundry at midnight."                │   │ │
│ │  │                                              │   │ │
│ │  │  Maria, L3 parent, 3 weeks in                │   │ │
│ │  └──────────────────────────────────────────────┘   │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │       LETTER-01: Whether/Or/If Bridge                │ │ ~200px
│ │                                                      │ │
│ │  "Whether your child is 3 or 10, verbal or not,     │ │
│ │   already showing signals or still in the           │ │
│ │   get-used-to-it phase, if your single pair is in   │ │
│ │   the wash more than it's on your child, the        │ │
│ │   learning breaks."                                  │ │
│ │                                                      │ │
│ │  "The nervous system doesn't take weekends off. It   │ │
│ │   learns through repetition. And repetition needs   │ │
│ │   rotation."                                         │ │
│ │   [bold reading path: "repetition needs rotation"]  │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌─────── 1px RULE — #E8E2DA ──────────────────────────┐ │ 1px
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │       ProductShowcaseMedium — Bundle Offer           │ │ ~280px
│ │                                                      │ │
│ │  ┌──────────────────────────────────────────────┐   │ │
│ │  │  ┌─────────────┐  ┌────────────────────────┐│   │ │
│ │  │  │             │  │ "THE 3+3 BUNDLE"       ││   │ │
│ │  │  │  [PRODUCT   │  │  [Eyebrow 10px, B.teal]││   │ │
│ │  │  │   IMAGE]    │  │                        ││   │ │
│ │  │  │  140 x 220  │  │ "6 pairs, enough for   ││   │ │
│ │  │  │  training-  │  │  daily wear"           ││   │ │
│ │  │  │  pant-fox-  │  │  [H3 17px, B.ink]      ││   │ │
│ │  │  │  red-white  │  │                        ││   │ │
│ │  │  │  .jpg       │  │ "$79.99"               ││   │ │
│ │  │  │             │  │  [20px price]           ││   │ │
│ │  │  │  border-    │  │                        ││   │ │
│ │  │  │  right:     │  │ "vs. $34.99 × 2 =      ││   │ │
│ │  │  │  2px B.ink  │  │  $69.98 for 2 singles" ││   │ │
│ │  │  │             │  │  [13px, B.muted]       ││   │ │
│ │  │  └─────────────┘  │                        ││   │ │
│ │  │                   │ "Free shipping"        ││   │ │
│ │  │                   │  [B.green, 13px]       ││   │ │
│ │  │                   │                        ││   │ │
│ │  │                   │ "3+3 or 3+3 mix"       ││   │ │
│ │  │                   │  [13px, B.muted]       ││   │ │
│ │  │                   └────────────────────────┘│   │ │
│ │  └──────────────────────────────────────────────┘   │ │
│ │  [border: 2px B.ink, 16px radius, 4px shadow]       │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │       CTA-8: Dual CTA — CTA Zone                     │ │ ~320px
│ │                                                      │ │
│ │  "Whether you're ready for a full rotation or just   │ │
│ │   want one more pair to get through laundry day,    │ │
│ │   here's the link. 60-day guarantee applies to the  │ │
│ │   bundle too. If it doesn't work for your child,    │ │
│ │   full refund."                                      │ │
│ │                                                      │ │
│ │  [ Add the 3+3 Bundle to your order → ]             │ │
│ │  [Full-width, B.teal #2BAEB4 bg, white text         │ │
│ │   52px height, pill shape]                           │ │
│ │                                                      │ │
│ │  "That's $13.33 per pair with the bundle — less     │ │
│ │   than half the single-pair price."                  │ │
│ │   [Questrial 13px, B.muted, italic]                  │ │
│ │                                                      │ │
│ │  [ Re-order 1 more pair → ]                         │ │
│ │  [Outlined, B.teal border, B.teal text               │ │
│ │   48px height, pill shape]                           │ │
│ │                                                      │ │
│ │  "If today isn't the day, that's okay. The underwear │ │
│ │   will be here when you're ready."                   │ │
│ │   [Questrial 16px, B.soft, italic]                   │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌─────── 1px RULE — #E8E2DA ──────────────────────────┐ │ 1px
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │       TRUST-1: 60-Day Seal — Guarantee              │ │ ~140px
│ │                                                      │ │
│ │  ┌──────────────────────────────────────────────┐   │ │
│ │  │   [60-DAY SEAL — centered, icon + text]      │   │ │
│ │  │                                              │   │ │
│ │  │   "Try it for 60 days. Your judgment."       │   │ │
│ │  │   [Questrial 16px, B.ink]                    │   │ │
│ │  └──────────────────────────────────────────────┘   │ │
│ │  [bg: B.cream, 16px radius, 2px B.green border]    │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │       SIGNOFF — Lena Sign-Off (SHORT variant)        │ │ ~300px
│ │                                                      │ │
│ │  ┌──────────────────────────────────────────────┐   │ │
│ │  │  "Talk soon,"                                │   │ │
│ │  │  [Questrial 16px, B.ink]                     │   │ │
│ │  │                                              │   │ │
│ │  │  Lena —,                                     │   │ │
│ │  │  (Caveat font, 42px, B.teal)                 │   │ │
│ │  │  [flourish SVG]                              │   │ │
│ │  │                                              │   │ │
│ │  │  Customer Support · Mom of two autistic sons │   │ │
│ │  │  [Questrial 12px, B.muted]                   │   │ │
│ │  │                                              │   │ │
│ │  │  ─ ─ ─ dashed divider ─ ─ ─                 │   │ │
│ │  │                                              │   │ │
│ │  │  P.S. Both my sons went through weeks of     │   │ │
│ │  │  one-pair-laundry before I realized: daily   │   │ │
│ │  │  wear changes everything. 6 pairs gave us    │   │ │
│ │  │  the consistency we needed. 60 days to try   │   │ │
│ │  │  it.                                         │   │ │
│ │  │                                              │   │ │
│ │  │  P.S. If nothing's changed yet, that's not   │   │ │
│ │  │  failure. The pathway takes time.            │   │ │
│ │  └──────────────────────────────────────────────┘   │ │
│ │  [bg: B.ink, card bg: #1F2A2C, 22px radius]        │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │                 FOOTER                               │ │ ~180px
│ │                                                      │ │
│ │  BrightKidCo, Built for the brain that learns       │ │
│ │  differently.                                        │ │
│ │  [Questrial 11.5px, B.muted]                         │ │
│ │                                                      │ │
│ │  Unsubscribe | Update Preferences                    │ │
│ │  Orders ship within 1-2 business days. 60-day       │ │
│ │  money-back guarantee.                               │ │
│ │  © BrightKidCo. All rights reserved.                │ │
│ │  [Questrial 11px, B.muted]                           │ │
│ │                                                      │ │
│ │  [Gradient accent bar: 60px x 3px]                   │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│  ★ Easter Egg: ASCII-style progress bar at bottom of    │
│    offer block:                                         │
│    Daily wear: ▓▓▓▓▓▓▓▓▓▓▓▓                            │
│    One-pair cycle ▓▓▓░░░░▓▓▓░░░                        │
│    3+3 rotation ▓▓▓▓▓▓▓▓▓▓▓▓                          │
│    Rewards close readers with visual "aha."             │
└──────────────────────────────────────────────────────────┘
```

---

## 5. Section Specs

### Section 1: Preheader Bar
- **Component:** UTIL-06 — Preheader Bar
- **Exact Copy:** "Whether you're seeing first signals or still waiting, one pair might not be enough for daily wear."
- **Background:** #F6F2EA
- **Typography:** Questrial 11px, italic, B.muted
- **Padding:** 6px 20px, centered
- **Notes:** 97 chars. Complements subject line ("More pairs for the rotation?") without repeating. Sets practical, no-pressure tone.

### Section 2: Header
- **Component:** UTIL-08 — Nav Bar
- **Exact Copy:** "Lena from BrightKidCo" (from name)
- **Image:** BrightKidCo logo, 34px height
- **Background:** B.paper (#FFFFFF)
- **Padding:** 24px 20px 0, centered
- **Notes:** Simple, clean header. Consistent with E1.

### Section 3: Hero — HERO-9 Whisper Tone
- **Component:** HERO-9 — Whisper Tone
- **Exact Copy:**
  - Eyebrow: "WEEK 3"
  - Headline: "More pairs for the rotation?"
  - Subhead: "Whether you're seeing first signals or still waiting, one pair might not be enough for daily wear."
- **Image:** /root/projects/brightkidco/raw/product-photos/lifestyle/toddler-potty-ladder-yellow-woodland.png
  - Alt text: "Child at home in BrightKidCo underwear, natural light, warm tones"
  - Dimensions: 420 x 220px (desktop), full-width (mobile)
  - Cropping: Center crop, child in natural setting, warm yellow/woodland tones
  - Fallback color: #FBF7F1
- **FramedImage wrapper:** 2px B.ink border, 16px radius, 4px B.ink shadow
- **Background:** B.paper (#FFFFFF)
- **Typography:**
  - Headline: Questrial 28px desktop / 22px mobile, weight 700, letter-spacing -0.02em, color B.ink
  - Subhead: Questrial 17px, weight 500, color B.soft, line-height 1.5
  - Eyebrow: Questrial 10.5px, weight 700, letter-spacing 2px, uppercase, B.teal
- **Notes:** Whisper Tone hero — quieter, more spacious than E1's Mirror Moment. Signals a shift from observation to practical conversation. The question headline ("More pairs for the rotation?") invites reflection without pressure.

### Section 4: Handwritten Touch Band
- **Component:** DESDEEP-14 — The Handwritten Touch
- **Exact Copy:** None (decorative)
- **Height:** 8px
- **Notes:** Subtle handwritten-style accent line. Reinforces Lena's personal voice. Transitions from hero to body copy.

### Section 5: Letter — LETTER-01 Paragraph Stack (Observation + Anchors)
- **Component:** LETTER-01 — Paragraph Stack
- **Exact Copy (VERBATIM):**

  **Observation:**
  "It's been about 3 weeks since the first pair arrived. In that time, maybe you've noticed some of these:"

  **Recognition Anchors (4 anchors):**
  - "Your child wears the underwear, then you're doing laundry and waiting for it to dry before the next wear."
  - "The 'uh-oh' sensation is starting to do its work, a pause here, a look down there, but consistency is still spotty."
  - "You're still using pull-ups for backup half the time because the one pair is in the wash."
  - "Your child hasn't shown a change yet, and you're wondering if daily wear is even happening often enough."

- **Anchors card styling:** bg #FBF7F1 (B.cream), 16px radius, padding 24px
- **Typography:**
  - Observation: Questrial 17px, B.ink, line-height 1.6
  - Anchor bullets: Questrial 17px/16px, weight 400, line-height 1.6, B.soft
- **Notes:** R2 compliance: 4 recognition anchors (minimum 3 required). The laundry bottleneck is the first anchor — it's the practical problem E2 will solve. R4: Verbal and non-verbal implied across anchors. R5: "Still waiting" in anchor #4 covers the no-change-yet scenario.

### Section 6: Letter — Validation + Mechanism
- **Component:** LETTER-01 — Paragraph Stack (continuation)
- **Exact Copy (VERBATIM):**

  "Any of those sound familiar? They're all normal, and they all point to the same thing."

  "The Body-Signal Learning Layer needs repetition to build the neural pathway. For a nervous system that processes signals differently, the feedback loop doesn't wire after a few wears a week. It wires through consistent, daily exposure, the sensation arriving, the brain registering, the connection building."

  "Some kids show their first awareness, a pause, a pull at the pants, a look at the wet spot, or a step toward the bathroom, within the first couple of weeks. Others need 4, 6, even 8 weeks. Both are normal. The variable isn't your child. It's how often the signal arrives."

- **Background:** B.paper (#FFFFFF)
- **Typography:**
  - Body: Questrial 17px/16px, weight 400, line-height 1.6, B.soft
  - Bold reading path: weight 600, B.ink — "consistent, daily exposure" → "The variable isn't your child. It's how often the signal arrives."
- **Notes:** The mechanism explanation bridges from recognition anchors to the practical gap. R5: Timeline flexibility ("2 weeks to 8 weeks"). R4: Verbal/non-verbal covered ("pause, pull at pants, look at wet spot, step toward bathroom").

### Section 7: Tonal Shift Rule
- **Component:** 1px rule, #E8E2DA
- **Full width, 1px height**

### Section 8: Letter — The Practical Gap
- **Component:** LETTER-01 — Paragraph Stack (continuation)
- **Exact Copy (VERBATIM):**

  **Eyebrow:** "THE PRACTICAL GAP"

  "Here's what most 1-pair parents discover around week 3: one pair isn't enough for daily rotation."

  "Wash, dry, wait. By the time the pair is ready, the moment has passed. Your child needs the underwear ON, consistently, every day, for the nervous system to recognize the signal. A few wears a week stretches the timeline. Daily wear shortens it."

  "Six pairs, the 3+3 Bundle, means:"

  - "A clean pair every single day"
  - "No laundry-dependency on the learning process"
  - "Enough rotation to wear during the most signal-rich hours"
  - "Consistency that the nervous system can actually build on"

- **Background:** B.paper (#FFFFFF)
- **Typography:**
  - Body: Questrial 17px/16px, weight 400, line-height 1.6, B.soft
  - Bold reading path: weight 600, B.ink — "Daily wear shortens it"
  - Eyebrow: Questrial 10.5px, B.teal, uppercase
  - Bullets: Questrial 17px, B.soft
- **Notes:** The practical gap section is E2's core argument. It reframes the 3+3 Bundle as a solution to a problem the parent is already experiencing (laundry bottleneck). R5: No fixed timeline promises. The "Wash, dry, wait" rhythm is visceral and relatable.

### Section 8: Tonal Shift Rule
- **Component:** 1px rule, #E8E2DA
- **Full width, 1px height**

### Section 9: Testimonials — SP-08 Stacked Mini-Reviews (Three-Family Pattern)
- **Component:** SP-08 — Stacked Mini-Reviews
- **Exact Copy (VERBATIM):**

  **Card 1 (L1 pattern):**
  > "He's pausing. Just for a second. But he's pausing before he pees. That never happened before. I need more pairs so he can wear them all day."
  Sarah, L1 parent, 3 weeks into Body-Signal

  **Card 2 (L2 pattern):**
  > "At first I thought nothing was happening. Then week 4, he looked down. Just looked. But he'd never done that in 7 years. I need more pairs so we don't lose momentum."
  Lisa, L2 parent, 4 weeks in

  **Card 3 (L3 pattern):**
  > "He's tolerating the underwear. That's already more than I expected. I'm not rushing. But I want enough pairs so he can wear them every single day without me doing laundry at midnight."
  Maria, L3 parent, 3 weeks in

- **Card styling:** bg #FBF7F1, left-border 3px (Card 1: B.teal, Card 2: B.green, Card 3: B.muted), 16px radius, padding 20px
- **Quote typography:** Fraunces 17px, italic, B.ink, line-height 1.5
- **Attribution typography:** Questrial 11px, B.muted, small caps, letter-spacing 0.05em
- **Notes:** Three-Family Pattern — each quote is 1-2 sentences, authentic voice. Each parent names the same need (more pairs) from their own perspective. The L3 quote ("doing laundry at midnight") is the most relatable — it grounds the practical argument in real life.

### Section 10: Letter — Whether/Or/If Bridge
- **Component:** LETTER-01 — Paragraph Stack (continuation)
- **Exact Copy (VERBATIM):**

  "Whether your child is 3 or 10, verbal or not, already showing signals or still in the get-used-to-it phase, if your single pair is in the wash more than it's on your child, the learning breaks."

  "The nervous system doesn't take weekends off. It learns through repetition. And repetition needs rotation."

- **Typography:**
  - Body: Questrial 17px/16px, italic, B.ink, line-height 1.6
  - Bold reading path: weight 600, B.ink — "repetition needs rotation"
- **Notes:** "Whether...Or...If..." inclusive framing per Layer-18-Cross-Level-Calibration.md §Part 3. Covers all levels without naming any. The bridge connects the practical gap to the offer.

### Section 11: Tonal Shift Rule
- **Component:** 1px rule, #E8E2DA
- **Full width, 1px height**

### Section 12: Product — ProductShowcaseMedium (3+3 Bundle)
- **Component:** ProductShowcaseMedium
- **Exact Copy:**
  - Eyebrow: "THE 3+3 BUNDLE"
  - Title: "6 pairs, enough for daily wear"
  - Price: "$79.99"
  - Comparison: "vs. $34.99 × 2 = $69.98 for 2 singles"
  - Shipping: "Free shipping"
  - Size note: "3+3 or 3+3 mix" (option for 3 of one size + 3 of next size up)
- **Image:** /root/projects/brightkidco/raw/product-photos/flat-lay/training-pant-fox-red-white.jpg
  - Alt text: "BrightKidCo training pant in fox pattern, red and white, flat lay"
  - Dimensions: 140 x 220px (left column), full-width on mobile
  - Cropping: Full product visible, clean flat-lay composition
  - Fallback color: #FBF7F1
- **Card styling:** bg B.paper, 2px B.ink border, 16px radius, 4px B.ink shadow
- **Two-column layout:** Image left (140px, border-right 2px B.ink), content right
- **Notes:** The comparison pricing ($79.99 for 6 vs. $69.98 for 2 singles) makes the bundle the obvious value choice. The size-mix note ("3+3 or 3+3 mix") addresses parents whose child is between sizes.

### Section 13: CTA — CTA-8 Dual CTA
- **Component:** CTA-8 — Dual CTA
- **Exact Copy (VERBATIM):**
  - Body: "Whether you're ready for a full rotation or just want one more pair to get through laundry day, here's the link. 60-day guarantee applies to the bundle too. If it doesn't work for your child, full refund."
  - Primary button: "Add the 3+3 Bundle to your order"
  - Price note: "That's $13.33 per pair with the bundle — less than half the single-pair price."
  - Secondary button: "Re-order 1 more pair"
  - Permission note: "If today isn't the day, that's okay. The underwear will be here when you're ready."
- **Primary CTA button:** Full-width on mobile / 280px desktop, B.teal (#2BAEB4) bg, white #FFFFFF text, 52px height, pill shape (999 radius), weight 700
- **Secondary CTA button:** Full-width on mobile / 280px desktop, B.teal outline, B.teal text, 48px height, pill shape
- **Button typography:** Questrial 18px, weight 700, letter-spacing 0.5px
- **CTA spacing:** 24px above, 20px below
- **Permission note:** Questrial 16px, B.soft, italic
- **Price note:** Questrial 13px, B.muted, italic
- **Background:** B.paper (#FFFFFF)
- **Notes:** Dual CTA respects all levels. L3 can choose the soft secondary option without feeling pressured. L1 and L2 who are ready can take the primary CTA. GF sees both and self-selects. The secondary CTA ("Re-order 1 more pair") is a lower-commitment path that keeps the parent in the ecosystem.

### Section 14: Tonal Shift Rule
- **Component:** 1px rule, #E8E2DA
- **Full width, 1px height**

### Section 15: Trust — TRUST-1 60-Day Seal
- **Component:** TRUST-1 — 60-Day Seal
- **Exact Copy:**
  "Try it for 60 days. Your judgment."
- **Styling:** Centered, bg B.cream, 16px radius, 2px B.green border, padding 24px
- **Icon:** 60-day seal SVG (green checkmark in circle)
- **Typography:** Questrial 16px, B.ink, line-height 1.6
- **Notes:** Standard guarantee placement. Echoes E1's guarantee framing for continuity.

### Section 16: Signoff — Lena (SHORT variant)
- **Component:** UTIL-05 — Signoff Card
- **Exact Copy (VERBATIM):**
  "Talk soon,"
  "Lena —,"
  "Customer Support · Mom of two autistic sons"
  "P.S. Both my sons went through weeks of one-pair-laundry before I realized: daily wear changes everything. 6 pairs gave us the consistency we needed. 60 days to try it."
  "P.S. If nothing's changed yet, that's not failure. The pathway takes time."
- **Closing words:** "Talk soon," per GIULIANO-DEMANDS.md §11.7
- **Avatar:** 58px circle, gradient ring (B.teal → B.green), portrait placeholder
- **Name:** "Lena", Caveat font, 42px, B.teal, with flourish SVG
- **Role:** "Customer Support · Mom of two autistic sons", Questrial 12px, B.muted
- **Card bg:** #1F2A2C, 22px radius, 1.5px #2F3D40 border
- **Card container bg:** B.ink (#1F2D2F)
- **Dashed dividers:** 1.5px #3A4547
- **P.S. section:** Questrial 13px, #B8CACD, italic, "P.S." in B.teal bold
- **Notes:** SHORT variant. Two P.S. lines — personal experience ("both my sons went through one-pair-laundry") + reassurance ("that's not failure"). The personal P.S. directly supports the practical gap argument.

### Section 17: Footer
- **Component:** UTIL-04 — Footer
- **Exact Copy:**
  - Brand: "BrightKidCo, Built for the brain that learns differently."
  - Links: "Unsubscribe | Update Preferences"
  - Legal: "Orders ship within 1-2 business days. 60-day money-back guarantee."
  - Copyright: "© BrightKidCo. All rights reserved."
- **Background:** B.paper (#FFFFFF)
- **Typography:** Questrial 11.5px, B.muted
- **Gradient accent bar:** 60px x 3px, B.gradient (B.teal → B.green), centered, 3px radius
- **Notes:** CAN-SPAM compliant. "Update Preferences" link added for E2 (not in E1 — increases engagement options as relationship deepens).

### Section 18: Easter Egg — ASCII Progress Bar
- **Component:** Custom text element (not from component index)
- **Exact Copy:**
  ```
  Daily wear: ▓▓▓▓▓▓▓▓▓▓▓▓
  One-pair cycle ▓▓▓░░░░▓▓▓░░░
  3+3 rotation ▓▓▓▓▓▓▓▓▓▓▓▓
  ```
- **Styling:** Monospace font, 11px, B.muted. Only loads on devices with prefers-reduced-motion: no-preference.
- **Notes:** A simple ASCII-style progress bar showing signal exposure hours. The 3+3 bar is solid. The one-pair bar is intermittent. This rewards close readers with a visual "aha" moment without requiring images or animation. Respects sensory accessibility.

---

## 6. Component Details

### HERO-9 — Whisper Tone
- **Props:** eyebrow, headline, subhead, heroImage
- **Variants:** Default — eyebrow + framed image + headline + subhead
- **Custom overrides:**
  - Eyebrow: "WEEK 3" (temporal marker)
  - Hero image: toddler-potty-ladder-yellow-woodland.png
  - Headline: question format ("More pairs for the rotation?")
  - No CTA in hero (placed after practical gap section)

### LETTER-01 — Paragraph Stack
- **Props:** paras[], bg, quoteBlocks[]
- **Variants:** Default — paragraph stack with recognition anchors and practical gap
- **Custom overrides:**
  - bg: B.paper (#FFFFFF)
  - Recognition anchors in Cream Card (#FBF7F1)
  - Practical Gap section with eyebrow and 4-bullet list
  - Bold reading path: "consistent, daily exposure" → "Daily wear shortens it" → "repetition needs rotation"

### SP-08 — Stacked Mini-Reviews
- **Props:** cards[]
- **Variants:** Three-Family Pattern — 3 stacked cards
- **Custom overrides:**
  - Card 1: B.teal left-border, L1 pattern
  - Card 2: B.green left-border, L2 pattern
  - Card 3: B.muted left-border, L3 pattern
  - Each 1-2 sentences, authentic voice

### EDU-10 — How It Works
- **Props:** mechanism paragraphs
- **Variants:** Default — inline mechanism explanation
- **Custom overrides:**
  - Embedded within the Validation + Mechanism section
  - No separate callout box (cleaner flow for practical argument)

### ProductShowcaseMedium
- **Props:** eyebrow, title, priceFrom, comparison, shipping, sizeNote
- **Variants:** Default — side-by-side image + content card
- **Custom overrides:**
  - Comparison pricing visible ($79.99 vs. $69.98 for 2 singles)
  - Size-mix flexibility note
  - Card border-radius: 16px

### CTA-8 — Dual CTA
- **Props:** body, primaryCta, priceNote, secondaryCta, permissionNote
- **Variants:** Default — body + primary button + price note + secondary button + permission
- **Custom overrides:**
  - Primary: B.teal bg, white text, 52px height
  - Secondary: B.teal outline, B.teal text, 48px height
  - Permission note: "If today isn't the day, that's okay"

### TRUST-1 — 60-Day Seal
- **Props:** guaranteeText
- **Variants:** Default — centered seal + text
- **Custom overrides:** Same as E1

### DESDEEP-14 — Handwritten Touch
- **Props:** height
- **Variants:** Subtle decorative accent
- **Custom overrides:** Height: 8px

### UTIL-05 — Signoff Card
- **Props:** variant, closingWords
- **Variants:** SHORT (Replenish E2)
- **Custom overrides:**
  - Closing words: "Talk soon,"
  - Two P.S. lines (personal experience + reassurance)

### UTIL-04 — Footer
- **Props:** tagline, links, legal
- **Variants:** Standard with Update Preferences
- **Custom overrides:** "Update Preferences" link added for E2

---

## 7. Image Briefs

### Image 1: Hero Lifestyle
- **Path:** /root/projects/brightkidco/raw/product-photos/lifestyle/toddler-potty-ladder-yellow-woodland.png
- **Alt text:** "Child at home in BrightKidCo underwear, natural light, warm tones"
- **Recommended dimensions:** 420 x 220px (desktop), full-width (mobile)
- **Cropping/focal point:** Center crop, child in natural setting, warm yellow/woodland tones. Privacy-first framing.
- **Fallback color:** #FBF7F1
- **Notes:** Warm, natural setting. Cross-level appropriate. FramedImage wrapper provides B.ink border + drop-shadow.

### Image 2: Product Flat Lay
- **Path:** /root/projects/brightkidco/raw/product-photos/flat-lay/training-pant-fox-red-white.jpg
- **Alt text:** "BrightKidCo training pant in fox pattern, red and white, flat lay"
- **Recommended dimensions:** 140 x 220px (left column in ProductShowcaseMedium), full-width on mobile
- **Cropping/focal point:** Full product visible, clean flat-lay composition. Fox pattern clearly visible.
- **Fallback color:** #FBF7F1
- **Notes:** Fox pattern is gender-neutral and age-neutral. Used in ProductShowcaseMedium side-by-side layout.

---

## 8. Rendering Notes

### Email Client Considerations
- **Gmail:** Strips CSS animations, classes. All styling must be inline. Preheader text visible in preview. Max email size ~100KB.
- **Outlook Desktop:** No SVG support. Border-radius not supported on buttons (accept square corners or use VML). FramedImage border/shadow renders as solid.
- **Apple Mail:** Full CSS support. Best rendering environment.
- **Yahoo Mail:** Inline CSS required. Border-radius spotty on buttons.
- **Thunderbird:** Good CSS support.

### Mobile Responsive Notes
- **Breakpoint:** 480px
- **Max width:** 600px desktop, full-width mobile
- **CTA buttons:** Full-width on mobile (spans screen edges minus 30px padding), 52px primary / 48px secondary
- **Hero image:** Full-width on mobile, maintains aspect ratio
- **Product showcase:** Side-by-side stacks to single column
- **Testimonial cards:** Stack naturally, full-width
- **Dual CTA:** Buttons stack vertically, full-width
- **Font sizes:** Body 16px mobile, Headlines 22px mobile
- **Spacing:** Section gap 36px mobile (from 44px desktop)

### Accessibility Notes
- **Body text minimum:** 16px on mobile (WCAG AA)
- **CTA minimum height:** 48px (tap-friendly)
- **Color contrast:** All body text passes WCAG AA. CTA text (white on #2BAEB4) passes at 4.6:1.
- **Alt text:** All images have descriptive alt text
- **Semantic structure:** H1 for hero headline, H2 for section headers, blockquote for testimonial quotes
- **Link purpose:** CTA buttons have descriptive text
- **prefers-reduced-motion:** ASCII progress bar only loads when reduced motion is not preferred

### Special Instructions
- **Reply prompt:** REQUIRED (§17.2). Reply-to: support@brightkidco.com
- **From name:** "Lena from BrightKidCo" (§16.3)
- **Cloak deployment:** Transactional cloak ✅, Conversational cloak ✅ (§17.8)
- **No Facebook link** (§16.4)
- **No Trustpilot link** (§16.4)
- **Cross-level forbidden language check:**
  - ✅ No "Level 1/2/3" or "L1/L2/L3" labels
  - ✅ No diagnosis as prerequisite
  - ✅ No verbal-only signal language
  - ✅ No fixed age hooks ("3 or 10" is a range, not a fixed hook)
  - ✅ No school-specific urgency
  - ✅ No aggressive math reframes
  - ✅ No "just like other kids"
  - ✅ No "We miss you" / guilt
  - ✅ No discount-driven re-engagement
  - ✅ No hard-sell upsell
- **Image-to-text ratio:** 30/70 (text-dominant — practical argument needs copy space)
- **Copy density:** Medium-long (cross-level, practical reasoning)
- **Dual CTA design:** Primary is solid fill (B.teal), secondary is outline (B.teal border). Clear visual hierarchy. Both are pill-shaped.
