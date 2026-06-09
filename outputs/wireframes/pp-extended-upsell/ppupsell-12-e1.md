# Wireframe: PP-Extended Upsell — E1 (Day 28) | Cross-Level

## 1. Metadata

| Field | Value |
|-------|-------|
| **Flow** | PP-Extended Upsell (Flow 12) |
| **Position** | E1 — Day 28 Post-Purchase |
| **Level** | Cross-Level (L1/L2/L3/GF — single copy, R1-R6 calibrated) |
| **Copy File** | `/root/projects/brightkidco/outputs/copy/pp-extended-upsell/ppupsell-12-e1.md` |
| **Strategy Map Entry** | `flows.pp-extended-upsell.emails["e1"]` |
| **Flow Signature** | value-demonstration · bundle upgrade · mechanism-first · permission-based CTA |
| **Level Calibration** | Cross-level: symptom language only (R1), 3-5 recognition anchors (R2), age ranges not fixed ages (R3), verbal+non-verbal inclusive (R4), timeline flexibility (R5), low-bar success metrics (R6). L3 guard: 1pr to 3+3 max NEVER 5+5. |
| **Component Categories Used** | HERO, TEXT/LETTER, TESTIMONIAL/SOCIAL PROOF, MECHANISM/EDUCATION, PRODUCT SHOWCASE, CTA, GUARANTEE/TRUST, DECORATIVE/DIVIDER |
| **Total Estimated Height** | ~2,800px (mobile 420px width) |

## 2. Strategy Box

**Big Idea:** "Consistency beats intensity" — after one month, the signal has started working for some kids. The problem isn't whether it works; it's whether you have enough pairs to keep the signal firing without washing gaps. This email reframes "more product" as "more signal exposure," not "buy more stuff."

**Emotional Arc Position:** Position 1 of 3 in the Extended Upsell flow. This is the first post-purchase upsell, arriving at Day 28 when families have had one full month of signal exposure. The reader is curious about what they've observed, not yet frustrated or ready to quit.

**Component Selection Rationale:**
- HERO-16 (Mechanism Tease): The hook is a mechanism insight ("why one pair is never enough"). This hero variant teases the science behind the upsell — that washing breaks interrupt the signal pathway. Perfect for E1's "consistency beats intensity" message.
- LETTER-01 (Paragraph Stack): Long-form letter body needed — hook, validation, three-family testimonial, mechanism, offer, guarantee, Lena sign-off. Dense copy requires paragraph stack treatment.
- SP-08 (Stacked Mini-Reviews): Three-family testimonial pattern (Sarah L1, Lisa L2, Maria L3) requires stacked review cards, each with distinct parent voice and mini-win description.
- EDU-10 (How It Works): Rotation mechanism — how wash cycles break the signal pathway. Simple 3-step explanation: wear → signal fires → brain learns. More pairs = more firing, fewer gaps.
- ProductShowcaseFull: Bundle upgrade moment — 3+3 and 5+5 bundles with pricing, free shipping callout. Full product showcase for the conversion point.
- CTA-5 (Product CTA): "Explore the bundle that fits your family" — permission-based, educational, not "Buy Now."
- TRUST-1 (60-Day Seal): Compact guarantee badge before the CTA. "Every additional pair covered by the same 60-Day Guarantee."
- UTIL-01 (Gradient Band): Section transitions between mechanism explanation and product showcase.

**Differentiation Note:** E1 is visually differentiated from the education flow by:
1. Mechanism-tease hero (HERO-16) vs. education heroes
2. Three-family testimonial block as social proof centerpiece
3. Bundle comparison layout (3+3 vs 5+5) with L3 guard text
4. Lena sign-off MEDIUM variant — deeper than education emails, not as deep as E3

## 3. Creative Box

**Color Palette:**
- Primary: `#2BAEB4` B.teal — CTAs, links, accent elements, hero eyebrow
- Secondary: `#5DD07A` B.green — Success indicators, mechanism section accent
- Accent: `#FBF7F1` Warm cream — Main email background, card backgrounds
- Text: `#1F2D2F` B.ink — Primary text, headings, borders
- Supporting backgrounds:
  - `#E8F6F4` Pale teal — Mechanism section background
  - `#F5F0EB` Warm linen — Testimonial section background
  - `#EDF7ED` Pale green — Offer section background
- Supporting text: `#4A6568` B.stone — Subheadings, body secondary
- Muted text: `#8A9B9D` B.muted — Footer, secondary info
- CTA button fill: `#2BAEB4` B.teal — Primary CTA background
- CTA text: `#FFFFFF` white — On dark backgrounds
- Dividers: `#D3D1C7` Light warm gray — Section rules
- Blockquote border: `#2BAEB4` B.teal — Left border accent

**Typography:**
- Heading: Questrial, 28px mobile / 36px desktop, Bold (700), line-height 1.15, letter-spacing -0.4px, color `#1F2D2F`
- Body: Questrial, 16px mobile / 17px desktop, Regular (400), line-height 1.6, color `#1F2D2F`
- Accent: Fraunces (serif), 16px italic, Regular (400), line-height 1.5, color `#4A6568` — for pull-quotes and emphasis
- Eyebrow: Questrial, 10.5px, Bold (700), letter-spacing 1.5px, text-transform uppercase, color `#2BAEB4`
- CTA button: Questrial, 16px, Bold (700), letter-spacing 0.3px, color `#FFFFFF`
- Footer: Questrial, 11px, Regular (400), color `#8A9B9D`

**Border Radius:** Cards: 16px, Buttons: 6px, Images: 0px (FramedImage uses ink-border style), Small (badges): 999px pill

**Shadow:** Primary: `6px 6px 0 #1F2D2F` (ink block shadow), Secondary: `3px 3px 0 #1F2D2F` (sub-cards)

**Spacing:** Section gap: 30px, H-padding: 22px (mobile) / 30px (desktop), Card padding: 22px, Element gap: 14px

## 4. Layout ASCII

```
┌──────────────────────────────────────────────────────┐
│                    420px width                        │
├──────────────────────────────────────────────────────┤
│ ┌──────────────────────────────────────────────────┐ │
│ │  [LOGO]  BrightKidCo                            │ │
│ │          Header: bg #FBF7F1, centered logo       │ │
│ └──────────────────────────────────────────────────┘ │
│                                                      │
│ ┌──────────────────────────────────────────────────┐ │
│ │  HERO-16: Mechanism Tease                        │ │
│ │  bg: #FBF7F1                                     │ │
│ │                                                  │ │
│ │  Eyebrow: [BODY-SIGNAL LEARNING]                 │ │
│ │  H1: "If you bought 1 pair, here's why          │ │
│ │       you need 6"                                │ │
│ │  Sub: "Whether you started with one pair or a   │ │
│ │       full rotation, here's what the first       │ │
│ │       month teaches most families."              │ │
│ │                                                  │ │
│ │  ┌─ ImgFrame ──────────────────────────────────┐ │ │
│ │  │  Hero lifestyle image                       │ │ │
│ │  │  toddler-outdoors-grass-disposable-diaper   │ │ │
│ │  │  600×400px (2×: 1200×800)                   │ │ │
│ │  └─────────────────────────────────────────────┘ │ │
│ └──────────────────────────────────────────────────┘ │
│                                                      │
│ ── Divider: 1px #D3D1C7 ─────────────────────────── │
│                                                      │
│ ┌──────────────────────────────────────────────────┐ │
│ │  LETTER-01: Hook + Validation (Paragraph Stack) │ │
│ │  bg: #FBF7F1                                     │ │
│ │                                                  │ │
│ │  H2: "Whether your child has been wearing one    │ │
│ │       pair or a full set for the last month..."  │ │
│ │                                                  │ │
│ │  Body: "Some kids start showing awareness in     │ │
│ │  the first two weeks. Others take eight. Some    │ │
│ │  show it with words, 'wet,' 'uh-oh,' 'I need    │ │
│ │  to go.' Others show it with their body..."      │ │
│ │                                                  │ │
│ │  Validation: "The first month with Body-Signal   │ │
│ │  underwear is not about results. It's about      │ │
│ │  input. Giving the brain information it's been   │ │
│ │  missing, over and over..."                      │ │
│ │                                                  │ │
│ │  ┌─ Blockquote ──────────────────────────────┐   │ │
│ │  │ "The win to watch for isn't 'trained.'     │   │ │
│ │  │  It's 'noticed.' A pause before an         │   │ │
│ │  │  accident. A touch at the waistband..."    │   │ │
│ │  │  left-border: 3px #2BAEB4, bg: #F5F0EB    │   │ │
│ │  └──────────────────────────────────────────┘   │ │
│ └──────────────────────────────────────────────────┘ │
│                                                      │
│ ── Divider: 1px #D3D1C7 ─────────────────────────── │
│                                                      │
│ ┌──────────────────────────────────────────────────┐ │
│ │  SP-08: Three-Family Testimonial Pattern        │ │
│ │  bg: #F5F0EB warm linen                          │ │
│ │                                                  │ │
│ │  H2: "Three parents, three different kids,       │ │
│ │       one common discovery:"                     │ │
│ │                                                  │ │
│ │  ┌─ Testimonial Card 1 ────────────────────┐    │ │
│ │  │  "He's been 'almost trained' for a year. │    │ │
│ │  │   After 3 weeks in the underwear, he     │    │ │
│ │  │   paused mid-play and looked down."       │    │ │
│ │  │  — Sarah, son 4, verbal                  │    │ │
│ │  │  badge: VERBAL · 4 YRS · WEEK 3          │    │ │
│ │  │  border-left: 3px #5DD07A                │    │ │
│ │  └──────────────────────────────────────────┘    │ │
│ │                                                  │ │
│ │  ┌─ Testimonial Card 2 ────────────────────┐    │ │
│ │  │  "We had 4 weeks of nothing. I almost     │    │ │
│ │  │   gave up. Then week 5, he walked to the  │    │ │
│ │  │   bathroom on his own."                    │    │ │
│ │  │  — Lisa, son 6, years of methods          │    │ │
│ │  │  badge: METHOD-TESTED · 6 YRS · WEEK 5    │    │ │
│ │  │  border-left: 3px #2BAEB4                 │    │ │
│ │  └──────────────────────────────────────────┘    │ │
│ │                                                  │ │
│ │  ┌─ Testimonial Card 3 ────────────────────┐    │ │
│ │  │  "Nothing visible for 6 weeks. Day 43,   │    │ │
│ │  │   I saw him touch his waistband. That     │    │ │
│ │  │   was everything."                         │    │ │
│ │  │  — Maria, son 8, higher support needs     │    │ │
│ │  │  badge: 8 YRS · DAY 43 FIRST SIGNAL       │    │ │
│ │  │  border-left: 3px #8A9B9D                 │    │ │
│ │  └──────────────────────────────────────────┘    │ │
│ │                                                  │ │
│ │  Bridge: "If any of these sound familiar,        │ │
│ │  whether your child is 3 or 10, verbal or        │ │
│ │  non-verbal, just starting or years in..."       │ │
│ └──────────────────────────────────────────────────┘ │
│                                                      │
│ ── Divider: 1px #D3D1C7 ─────────────────────────── │
│                                                      │
│ ┌──────────────────────────────────────────────────┐ │
│ │  EDU-10: How It Works — Rotation Mechanism      │ │
│ │  bg: #E8F6F4 pale teal                           │ │
│ │                                                  │ │
│ │  H2: "Here's why rotation matters"               │ │
│ │                                                  │ │
│ │  Body: "Consistency beats intensity. The         │ │
│ │  Body-Signal Learning Layer works by creating a  │ │
│ │  sustained 30-60 second sensation after every     │ │
│ │  accident. But if you only have one pair, you're │ │
│ │  washing and re-wearing. Every wash cycle is a   │ │
│ │  day without the signal."                        │ │
│ │                                                  │ │
│ │  ┌─ Rotation Diagram ───────────────────────┐   │ │
│ │  │                                           │   │ │
│ │  │  1 PAIR:    [Worn] → [Wash] → [Worn]    │   │ │
│ │  │             ════════ ✗ GAP ══════════    │   │ │
│ │  │             Signal breaks every wash      │   │ │
│ │  │                                           │   │ │
│ │  │  6 PAIRS:   [W] [W] [W] [W] [W] [W]     │   │ │
│ │  │             ══════════════════════════    │   │ │
│ │  │             Signal every day, no gaps     │   │ │
│ │  │                                           │   │ │
│ │  │  bg: #FFFFFF, border: 1px #D3D1C7        │   │ │
│ │  └──────────────────────────────────────────┘   │ │
│ │                                                  │ │
│ │  3 bullets:                                      │ │
│ │  • Your child gets the signal every single time  │ │
│ │  • You're not doing laundry every night          │ │
│ │  • The brain gets consistent, uninterrupted      │ │
│ │    feedback                                      │ │
│ └──────────────────────────────────────────────────┘ │
│                                                      │
│ ── Gradient Band: #E8F6F4 → #EDF7ED ─────────────── │
│                                                      │
│ ┌──────────────────────────────────────────────────┐ │
│ │  ProductShowcaseFull: Bundle Upgrade             │ │
│ │  bg: #EDF7ED pale green                          │ │
│ │                                                  │ │
│ │  H2: "The bundle that fits your family"          │ │
│ │                                                  │ │
│ │  ┌─ Product Card: 3+3 Bundle ───────────────┐   │ │
│ │  │  ┌─ ImgFrame ──────────────────────────┐  │   │ │
│ │  │  │  training-pant-watermelon-pink.jpg   │  │   │ │
│ │  │  │  300×300px                          │  │   │ │
│ │  │  └─────────────────────────────────────┘  │   │ │
│ │  │  H3: "3+3 Bundle — 6 Pairs"              │   │ │
│ │  │  Price: $79.99 ($13.33/pair)             │   │ │
│ │  │  Tag: "FREE SHIPPING · 60-DAY GUARANTEE" │   │ │
│ │  │  Copy: "6 pairs in rotation. A full week │   │ │
│ │  │  of signal without gaps."                │   │ │
│ │  │  bg: #FFFFFF, shadow: 6px 6px 0 #1F2D2F │   │ │
│ │  └──────────────────────────────────────────┘   │ │
│ │                                                  │ │
│ │  ┌─ Product Card: 5+5 Bundle ───────────────┐   │ │
│ │  │  H3: "5+5 Bundle — 10 Pairs"              │   │ │
│ │  │  Price: $119.99                           │   │ │
│ │  │  Tag: "MAXIMUM ROTATION"                   │   │ │
│ │  │  Copy: "10 pairs. Maximum rotation.       │   │ │
│ │  │  Maximum signal density."                 │   │ │
│ │  │  bg: #FFFFFF, shadow: 6px 6px 0 #1F2D2F │   │ │
│ │  └──────────────────────────────────────────┘   │ │
│ │                                                  │ │
│ │  ┌─ L3 Guard ──────────────────────────────┐    │ │
│ │  │  "For families with higher support needs  │    │ │
│ │  │   (children 6+, non-verbal, or years into │    │ │
│ │  │   the journey): 1 pair to 3+3 at most.    │    │ │
│ │  │   No rush. No push to 5+5."               │    │ │
│ │  │  bg: #FBF7F1, border-left: 3px #8A9B9D  │    │ │
│ │  └──────────────────────────────────────────┘    │ │
│ └──────────────────────────────────────────────────┘ │
│                                                      │
│ ── Divider: 1px #D3D1C7 ─────────────────────────── │
│                                                      │
│ ┌──────────────────────────────────────────────────┐ │
│ │  TRUST-1: 60-Day Guarantee Seal                  │ │
│ │  bg: #FBF7F1                                     │ │
│ │                                                  │ │
│ │  ┌─ Guarantee Badge ────────────────────────┐   │ │
│ │  │  [60-DAY GUARANTEE SEAL]                  │   │ │
│ │  │  "Every additional pair is covered by the │   │ │
│ │  │   same 60-Day Guarantee. If your child    │   │ │
│ │  │   shows no increase in body awareness     │   │ │
│ │  │   after 60 days of consistent use, full   │   │ │
│ │  │   refund. No questions. Your judgment."   │   │ │
│ │  │  bg: #FFFFFF, border-radius: 999px pill   │   │ │
│ │  └──────────────────────────────────────────┘   │ │
│ └──────────────────────────────────────────────────┘ │
│                                                      │
│ ┌──────────────────────────────────────────────────┐ │
│ │  CTA-5: Product CTA                              │ │
│ │  bg: #FBF7F1                                     │ │
│ │                                                  │ │
│ │  [  Explore the bundle that fits your family → ] │ │
│ │  bg: #2BAEB4, text: #FFFFFF, border-radius: 6px │ │
│ │                                                  │ │
│ │  Micro-copy: "That's $13.33 per pair with the   │ │
│ │  bundle — less than half the single-pair price." │ │
│ │                                                  │ │
│ │  Secondary CTA (text link):                      │ │
│ │  "See how other parents built their rotation"    │ │
│ │  color: #2BAEB4, underline                       │ │
│ │                                                  │ │
│ │  Next time: "What parents discover after week 4" │ │
│ └──────────────────────────────────────────────────┘ │
│                                                      │
│ ── Divider: 1px #D3D1C7 ─────────────────────────── │
│                                                      │
│ ┌──────────────────────────────────────────────────┐ │
│ │  UTIL-01: Lena Sign-Off (MEDIUM)                │ │
│ │  bg: #FBF7F1                                     │ │
│ │                                                  │ │
│ │  Body: "I have two autistic sons. One trained at │ │
│ │  6, the other at almost 8. With my older son, I  │ │
│ │  had one pair for the first two months. I didn't │ │
│ │  realize how much the washing breaks were        │ │
│ │  interrupting the signal until I got more pairs. │ │
│ │  If you're on the fence, try one upgrade. 60     │ │
│ │  days to see if it changes anything. If it       │ │
│ │  doesn't, full refund. No pressure either way."  │ │
│ │                                                  │ │
│ │  Sign-off: "With understanding, Lena"            │ │
│ │  Style: Fraunces italic, color #4A6568          │ │
│ └──────────────────────────────────────────────────┘ │
│                                                      │
│ ┌──────────────────────────────────────────────────┐ │
│ │  FOOTER                                          │ │
│ │  bg: #FBF7F1                                     │ │
│ │                                                  │ │
│ │  BrightKidCo | [Unsubscribe] | [Manage Prefs]   │ │
│ │  Questrial 11px, color #8A9B9D                   │ │
│ └──────────────────────────────────────────────────┘ │
└──────────────────────────────────────────────────────┘
```

## 5. Copy Blocks (Verbatim)

| Block | Source Section | Verbatim Copy |
|-------|---------------|---------------|
| **Subject Line** | Primary | "If you bought 1 pair, here's why you need 6" |
| **Subject Line** | Alt 1 | "You've been using them for a month, what's next?" |
| **Subject Line** | Alt 2 | "Why one pair is never enough" |
| **Preheader** | Primary | "Whether you started with one pair or a full rotation, here's what the first month teaches most families." |
| **Hook** | Body | "Whether your child has been wearing one pair or a full set for the last month, you've probably noticed something by now." |
| **Validation** | Body | "The first month with Body-Signal underwear is not about results. It's about input. Giving the brain information it's been missing, over and over, accident after accident, until one day something registers." |
| **Pull-Quote** | Body | "The win to watch for isn't 'trained.' It's 'noticed.' A pause before an accident. A touch at the waistband. Two hours dry instead of thirty minutes. A look at the wet spot. One initiated walk toward the bathroom, even after the fact." |
| **Testimonial 1** | Body | "He's been 'almost trained' for a year. After 3 weeks in the underwear, he paused mid-play and looked down. First time he ever noticed." — Sarah, son 4 |
| **Testimonial 2** | Body | "We had 4 weeks of nothing. I almost gave up. Then week 5, he walked to the bathroom on his own. Once. In 4 years, that never happened." — Lisa, son 6 |
| **Testimonial 3** | Body | "Nothing visible for 6 weeks. Day 43, I saw him touch his waistband. That was everything." — Maria, son 8 |
| **Mechanism** | Body | "Consistency beats intensity. The Body-Signal Learning Layer works by creating a sustained 30-60 second sensation after every accident, the same way training wheels work by creating a consistent feedback loop. But here's the catch: if you only have one pair, you're washing and re-wearing. And every wash cycle is a day without the signal." |
| **Offer** | 1-Pair | "If you started with one pair, the 3+3 Bundle gives you 6 pairs in rotation. That's a full week of signal without gaps. Free shipping. 60-day guarantee. $79.99." |
| **Offer** | 3+3 | "If you started with the 3+3, the 5+5 Bundle gives you 10 pairs. Maximum rotation. Maximum signal density. Free shipping. $119.99." |
| **Offer** | 5+5 | "If you already have enough pairs, keep doing what you're doing. The next email in this series is about deepening the body-signal connection. No pressure. When you're ready for more pairs, they're here." |
| **L3 Guard** | Body | "For families with higher support needs (children 6+, non-verbal, or years into the journey): 1 pair to 3+3 at most. Your child's nervous system is working on its own timeline. Adding 2-3 more pairs for rotation is enough. No rush. No push to 5+5." |
| **Guarantee** | Body | "Every additional pair is covered by the same 60-Day Guarantee. If your child shows no increase in body awareness after 60 days of consistent use, full refund. No questions. Your judgment." |
| **CTA** | Primary | "Explore the bundle that fits your family" |
| **CTA** | Micro-copy | "That's $13.33 per pair with the bundle — less than half the single-pair price." |
| **CTA** | Secondary | "See how other parents built their rotation" |
| **Lena Sign-Off** | MEDIUM | "I have two autistic sons. One trained at 6, the other at almost 8. With my older son, I had one pair for the first two months. I didn't realize how much the washing breaks were interrupting the signal until I got more pairs. If you're on the fence, try one upgrade. 60 days to see if it changes anything. If it doesn't, full refund. No pressure either way. With understanding, Lena" |

## 6. Component Briefs

| Component | Category | Variant | Purpose | Key Specs |
|-----------|----------|---------|---------|-----------|
| **HERO-16** | HERO | Mechanism Tease | Tease the "why rotation matters" science before the offer. Hook with observation, not product. | bg: #FBF7F1, eyebrow: "BODY-SIGNAL LEARNING", H1: subject line variant, sub: preheader variant, img-frame: lifestyle photo 600×400px |
| **LETTER-01** | TEXT/LETTER | Paragraph Stack | Long-form body copy — hook, validation, pull-quote, mechanism bridge. | bg: #FBF7F1, padding: 22px, body: Questrial 16px/1.6, blockquote: left-border 3px #2BAEB4 |
| **SP-08** | TESTIMONIAL | Stacked Mini-Reviews | Three-family testimonial pattern. Each card has distinct parent voice, child profile badge, and mini-win description. | bg: #F5F0EB, card bg: #FFFFFF, card shadow: 3px 3px 0 #1F2D2F, left-border per level: #5DD07A (verbal) / #2BAEB4 (method-tested) / #8A9B9D (higher needs) |
| **EDU-10** | MECHANISM | How It Works | Rotation mechanism diagram — 1 pair vs 6 pairs signal exposure comparison. | bg: #E8F6F4, diagram bg: #FFFFFF, border: 1px #D3D1C7, 3-step explanation with visual rotation model |
| **ProductShowcaseFull** | PRODUCT | Bundle Upgrade | 3+3 and 5+5 bundle cards with pricing, free shipping, guarantee callout. L3 guard card below. | bg: #EDF7ED, card bg: #FFFFFF, shadow: 6px 6px 0 #1F2D2F, img: 300×300px per product |
| **CTA-5** | CTA | Product CTA | Primary conversion button with micro-copy and secondary text link. | bg: #2BAEB4, text: #FFFFFF, border-radius: 6px, micro-copy: #4A6568 14px, secondary: text link #2BAEB4 |
| **TRUST-1** | GUARANTEE | 60-Day Seal | Compact guarantee badge — one paragraph, pill-shaped badge icon. | bg: #FBF7F1, badge: border-radius 999px, bg: #FFFFFF, border: 1px #2BAEB4 |
| **UTIL-01** | DECORATIVE | Gradient Band | Section transitions — mechanism to product, product to guarantee. | Gradient: #E8F6F4 → #EDF7ED, height: 8px, full-width |

## 7. Image Briefs

| Slot | Image Path | Dimensions | Purpose | Treatment |
|------|-----------|------------|---------|-----------|
| **Hero lifestyle** | `/root/projects/brightkidco/raw/product-photos/lifestyle/toddler-outdoors-grass-disposable-diaper.png` | 600×400px (2×: 1200×800) | Lifestyle context — child outdoors, relatable parent moment | FramedImage: ink-border style, 0px border-radius, shadow: 6px 6px 0 #1F2D2F |
| **Product card** | `/root/projects/brightkidco/raw/product-photos/flat-lay/training-pant-watermelon-pink.jpg` | 300×300px (2×: 600×600) | 3+3 bundle product flat-lay | FramedImage: ink-border style, bg: #FFFFFF, centered |
| **Mechanism diagram** | (Generated SVG or annotated diagram) | 300×150px | Rotation comparison: 1 pair wash gap vs 6 pairs no gap | Custom illustration, #2BAEB4 / #5DD07A accents, #1F2D2F text |

## 8. Style Notes

| Token | Hex | Usage |
|-------|-----|-------|
| **B.teal** | `#2BAEB4` | Primary CTA fill, links, eyebrow text, blockquote left-border, guarantee badge border |
| **B.green** | `#5DD07A` | Testimonial card 1 left-border (verbal/wins), mechanism accent, success indicators |
| **B.ink** | `#1F2D2F` | Primary text, headings, card shadows, product card shadow |
| **B.stone** | `#4A6568` | Subheadings, body secondary text, micro-copy, Fraunces accent text |
| **Warm cream** | `#FBF7F1` | Main email background, hero bg, letter bg, footer bg, guarantee section bg |
| **White** | `#FFFFFF` | Card backgrounds, CTA text, diagram bg, product card bg |
| **B.muted** | `#8A9B9D` | Footer text, L3 testimonial left-border, secondary info, divider color |
| **Pale teal** | `#E8F6F4` | Mechanism section background |
| **Warm linen** | `#F5F0EB` | Testimonial section background |
| **Pale green** | `#EDF7ED` | Product showcase section background |
| **Light warm gray** | `#D3D1C7` | Section divider rules |

## 9. Technique Specs

| Technique | Specification |
|-----------|--------------|
| **Card shadow** | `6px 6px 0 #1F2D2F` — ink block shadow on product cards |
| **Sub-card shadow** | `3px 3px 0 #1F2D2F` — on testimonial cards |
| **Card border-radius** | 16px on all cards |
| **Button border-radius** | 6px on CTA button |
| **Badge border-radius** | 999px (pill) on guarantee badge |
| **Blockquote left-border** | 3px solid `#2BAEB4` B.teal |
| **Testimonial card left-borders** | Card 1: 3px `#5DD07A`, Card 2: 3px `#2BAEB4`, Card 3: 3px `#8A9B9D` |
| **Section divider** | 1px `#D3D1C7` horizontal rule, full width |
| **Gradient band** | `#E8F6F4` → `#EDF7ED`, 8px height, full width |
| **Image framing** | Ink-border style: no border-radius, 6px shadow, `#1F2D2F` border |
| **CTA button** | bg `#2BAEB4`, text `#FFFFFF`, padding 16px 24px, border-radius 6px, Questrial 16px Bold |
| **Typography heading** | Questrial 28px/36px, Bold 700, line-height 1.15, letter-spacing -0.4px, `#1F2D2F` |
| **Typography body** | Questrial 16px/17px, Regular 400, line-height 1.6, `#1F2D2F` |
| **Typography accent** | Fraunces 16px italic, Regular 400, line-height 1.5, `#4A6568` |
| **Typography eyebrow** | Questrial 10.5px, Bold 700, letter-spacing 1.5px, uppercase, `#2BAEB4` |
| **Section padding** | 22px horizontal (mobile) / 30px (desktop), 30px vertical gap between sections |
| **Mobile width** | 420px fixed |

## 10. Level Markers

| Level | E1-Specific Differences |
|-------|------------------------|
| **L1 (Sarah)** | Pre-K window frame if applicable. 1pr→3+3 or 3+3→5+5. Hero copy may reference "whether you started with 1 pair." CTA aggression: Medium-Low. |
| **L2 (Lisa)** | BCBA-complement angle implicit via mechanism depth. Permission-first. CTA aggression: Low. |
| **L3 (Maria)** | 1pr→3+3 maximum. NEVER 5+5. L3 Guard card visible: "For families with higher support needs..." CTA aggression: Very Low, text link "when you're ready." |
| **GF** | Cross-level offer language with migration anchors. "Whether your child is 3 or 10, verbal or non-verbal..." opening frame. CTA aggression: Medium-Low. |

## 11. Interaction Notes

| Element | Interaction | Notes |
|---------|------------|-------|
| **Primary CTA** | Button click → product bundle page | Full-width button, tap target ≥44px height |
| **Secondary CTA** | Text link click → social proof / resource page | Underline on hover, `#2BAEB4` color |
| **Testimonial cards** | Static, no interaction | Visual distinction via left-border color coding |
| **Product cards** | Static, no interaction (future: clickable) | Placeholder for future Klaviyo conditional content |
| **Rotation diagram** | Static illustration | SVG or annotated diagram, no animation |
| **"Next time" teaser** | Static text | Sets expectation for E2 (Day 35) |
| **Reply invitation** | Implicit via Lena sign-off | "Reply with questions, I read everything" — not a button, but encouraged |
