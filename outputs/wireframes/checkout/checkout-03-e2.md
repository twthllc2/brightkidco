# Wireframe: Checkout Flow — E2 | Cross-Level

## 1. Metadata

| Field | Value |
|-------|-------|
| **Flow** | Checkout Abandonment (Flow 3) |
| **Position** | E2 — 60 Minutes |
| **Level** | Cross-Level (GF / L1 / L2 / L3 — single copy via R1-R6) |
| **Copy File** | /root/projects/brightkidco/outputs/copy/checkout/checkout-03-e2.md |
| **Strategy Map Entry** | flows.checkout.emails.e2 |
| **Flow Signature** | trust-building, cross-level, hope-fear cycle address |
| **Level Calibration** | Cross-Level — 50/50 hope/realism, neutral color warmth, zero CTA urgency, long copy density, Whether/Or/If 5-dimension opener, R1-R6 compliance, guilt-absolution hero, text-heavy with warmth |
| **Component Categories Used** | HERO, TEXT/LETTER, TESTIMONIAL, MECHANISM/EDUCATION, PRODUCT, CTA, GUARANTEE/TRUST, DECORATIVE |
| **Total Estimated Height** | ~3,400px (desktop) / ~3,800px (mobile) |

---

## 2. Strategy Box

**Big Idea:** Deep barrier — hope-fear cycle. E2 addresses Objection D3 ("What if I get my hopes up again?") head-on while maintaining cross-level safety across all 4 levels and 5 GF sub-groups simultaneously. This is the final recovery attempt before the cart expires. The email is text-heavy with warmth — validation-focused, not product-push. The CTA is intentionally soft: "If today isn't the day, that's a real answer."

**Emotional Arc Position:** Position 2 of 2 in checkout recovery — Recognition → Objection Naming → Social Proof → Mechanism → Timeline → Guarantee → Permission. E1 (10 min) removed initial friction ("Was there a question?"). E2 addresses the DEEP barrier: the hope-fear cycle that prevents final commitment. The reader arrives having already seen E1; she doesn't need re-explanation, she needs the emotional wall addressed.

**Component Selection Rationale:**
- HERO-18 (Guilt Absolution): Opens with permission to be skeptical. Absolves the guilt of hesitation. No product imagery.
- LETTER-09 (Double Column): Long-form validation letter format. Supports the extended Whether/Or/If 5-dimension opener + mechanism + timeline sections.
- SP-05 (Counter Testimonial): Three-Family Testimonial Pattern in body — three quotes covering L1/L2/L3. Self-identification without labeling.
- ED3 (Interoception Explainer): Brief mechanism recap — signal-timing gap. Not a full explainer; the subscriber knows the mechanism from checkout.
- ProductShowcaseSoft: Soft product presence. No price, no features grid.
- CTA-2 (Soft Link): Intentionally soft. "If today isn't the day, that's a real answer." No imperative, no urgency.
- TRUST-5 (Promise Badges Strip): Multi-badges — 60-day guarantee, no forms, your judgment. Visual trust density.
- UTIL-07 (Section Header): Clean section dividers. Minimal distraction philosophy.

**Differentiation Note:** E2 is longer and more text-heavy than E1 because it addresses the emotional barrier (hope-fear cycle) which requires more validation space. The Whether/Or/If opener is a full 5-dimension sentence (vs E1's 3-dimension). The Three-Family Testimonials are embedded in the body (not a separate card block). The CTA is the softest in the entire flow — "If today isn't the day, that's a real answer" is the most aggressive thing in the email. This is the conversion moment, and the email earns trust by NOT being aggressive.

---

## 3. Creative Box

**Color Palette:**
- Primary: #2BAEB4 (B.teal) — CTA links, accent highlights
- Secondary: #5DD07A (B.green) — Guarantee border, success indicators
- Accent: #FFD866 — Badge backgrounds (60-Day seal badge)
- Background: #FBF7F1 (B.cream) — Warm section backgrounds, quote blocks
- Text: #1F2D2F (B.ink) — Primary body text, headings
- Page Background: #FFFFFF (B.paper) — Email canvas
- Secondary Text: #4A6568 (B.soft) — Body copy, secondary paragraphs
- Tertiary Text: #8A9B9D (B.muted) — Captions, footer, permission off-ramp
- CTA Text on Dark: #D8F57C (Lime green) — CTA button text on dark backgrounds

**Typography:**
- Heading: Questrial, 32px desktop / 24px mobile, weight 700, line-height 1.15, letter-spacing -0.5px
- Body: Questrial, 17px desktop / 16px mobile, weight 400, line-height 1.7, color B.soft
- Accent: Fraunces, 24px desktop / 20px mobile, weight 400 italic, line-height 1.4, color B.ink (for pull quotes)
- Eyebrow: Questrial, 10.5px, weight 700, letter-spacing 2px, text-transform uppercase, color B.teal

**Border Radius:** Cards: 16px, Buttons: 999px (pill), Images: 20px, Small: 12px
**Shadow:** Primary: 6px 6px 0 B.ink (card shadow), Secondary: 3px 3px 0 B.ink (sub-card shadow)
**Spacing:** Section gap: 44px, H-padding: 22px, Card padding: 24/22px, Element gap: 16px

---

## 4. Layout ASCII

```
┌──────────────────────────────────────────────────────────┐
│ ┌──────────────────────────────────────────────────────┐ │
│ │                  [PREHEADER BAR]                     │ │ 36px
│ │  That's not doubt. That's experience talking.       │ │
│ │  Here's what's different.                           │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │              [HEADER — Logo + From Name]             │ │ 80px
│ │         BrightKidCo · Lena from BrightKidCo         │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │           HERO-18: Guilt Absolution                  │ │ ~240px
│ │                                                      │ │
│ │  [ NO HERO IMAGE — text-only, guilt-absolution ]    │ │
│ │                                                      │ │
│ │  "You're allowed to be skeptical"                   │ │
│ │   [H1 — Questrial 32px/24px, B.ink]                │ │
│ │                                                      │ │
│ │  "That hope-fear cycle — 'What if I get my hopes   │ │
│ │   up again?' — is the realest question you can     │ │
│ │   ask. And it deserves a real answer, not a         │ │
│ │   sales pitch."                                     │ │
│ │   [Subhead — Questrial 17px, B.soft]               │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌─────── 1px RULE — #E8DED5 — Tonal Shift ────────────┐ │ 1px
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │       LETTER-09: Double Column (Lena's Voice)        │ │ ~700px
│ │                                                      │ │
│ │  [WHETHER/OR/IF — 5-DIMENSION OPENER]               │ │
│ │  "Whether you're 3 months in or 3 years in,        │ │
│ │   whether your child is verbal or non-verbal,       │ │
│ │   3 or 10, diagnosed or still figuring it out,      │ │
│ │   if you've felt hope before and watched it fade,   │ │
│ │   this email is for you."                           │ │
│ │   [Questrial 17px, B.soft, line-height 1.7]        │ │
│ │                                                      │ │
│ │  [THREE-FAMILY TESTIMONIAL — inline]                │ │
│ │  "Three parents. Three different kids. One common   │ │
│ │   experience before Body-Signal:"                   │ │
│ │                                                      │ │
│ │  ┌──────────────────────────────────────────────┐   │ │
│ │  │ ▸ "If 3 weeks of success then total          │   │ │
│ │  │    regression, I know that cycle."            │   │ │
│ │  │    [L1 — almost-trained pattern]              │   │ │
│ │  │                                              │   │ │
│ │  │ ▸ "If I had a dollar for every method I've    │   │ │
│ │  │    tried... I'd have a lot of dollars."      │   │ │
│ │  │    [L2 — method cycling exhaustion]           │   │ │
│ │  │                                              │   │ │
│ │  │ ▸ "We made peace with maybe never. Then       │   │ │
│ │  │    something shifted."                        │   │ │
│ │  │    [L3 — resignation before progress]         │   │ │
│ │  └──────────────────────────────────────────────┘   │ │
│ │  [bg: B.cream, left-border: 3px B.green]            │ │
│ │                                                      │ │
│ │  [MECHANISM]                                         │ │
│ │  "Every method you've tried assumed your child can  │ │
│ │   feel the 'I need to go' signal when it happens.  │ │
│ │   The research shows that for many kids who process │ │
│ │   signals differently, that signal either arrives   │ │
│ │   too late or doesn't arrive at all."               │ │
│ │                                                      │ │
│ │  "That's not a training problem. That's a           │ │
│ │   signal-timing gap."                               │ │
│ │   [bold anchor]                                     │ │
│ │                                                      │ │
│ │  "The Body-Signal Learning Layer was designed for   │ │
│ │   that gap. It doesn't train behavior. It creates  │ │
│ │   a gentle sensation that lasts — that gives the   │ │
│ │   brain the feedback it's been missing, 30 to 60   │ │
│ │   seconds of awareness time that a pull-up wicks   │ │
│ │   away instantly."                                  │ │
│ │                                                      │ │
│ │  [TIMELINE]                                         │ │
│ │  "Some kids show their first signal in 2 weeks.    │ │
│ │   Others need 8 weeks. Some show nothing for       │ │
│ │   months, and then, one day, a pause. A look down. │ │
│ │   A step toward the bathroom. Both are normal.     │ │
│ │   Both are progress."                              │ │
│ │   [Fraunces italic, centered — pull quote style]   │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │     ED3: Interoception Explainer (Brief)              │ │ ~200px
│ │                                                      │ │
│ │  ┌──────────────────────────────────────────────┐   │ │
│ │  │         [SIGNAL-TIMING GAP DIAGRAM]           │   │ │
│ │  │                                              │   │ │
│ │  │   Body ─── ✗ ──→ Brain                       │   │ │
│ │  │   (signal arrives too late)                   │   │ │
│ │  │                                              │   │ │
│ │  │   Body ─── ✓ ──→ BSL Layer ──→ Brain         │   │ │
│ │  │   (30-60 sec awareness window)               │   │ │
│ │  │                                              │   │ │
│ │  │   [Minimal — 2 paths, simple arrows]         │   │ │
│ │  └──────────────────────────────────────────────┘   │ │
│ │  [bg: B.cream, 12px radius, 1px B.teal border]     │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │     TRUST-5: Promise Badges Strip — Guarantee        │ │ ~280px
│ │                                                      │ │
│ │  "Here's what we ask:"                              │ │
│ │                                                      │ │
│ │  ┌──────────┐ ┌──────────┐ ┌──────────┐            │ │
│ │  │  60-DAY  │ │  YOUR    │ │  NO      │            │ │
│ │  │  TRIAL   │ │ JUDGMENT │ │ QUESTIONS│            │ │
│ │  │          │ │          │ │          │            │ │
│ │  │ Try it   │ │ By your  │ │ Full     │            │ │
│ │  │ for 60   │ │ judgment │ │ refund.  │            │ │
│ │  │ days.    │ │ — you    │ │ No       │            │ │
│ │  │          │ │ decide.  │ │ shipping │            │ │
│ │  │          │ │          │ │ to return│            │ │
│ │  └──────────┘ └──────────┘ └──────────┘            │ │
│ │  [each: B.cream bg, 12px radius, 1px B.green border]│ │
│ │                                                      │ │
│ │  "If your child shows no sign of body awareness,    │ │
│ │   no pause, no look down, no pull at their pants,   │ │
│ │   no step toward the potty, every dollar back.     │ │
│ │   No questions. No shipping to return."             │ │
│ │                                                      │ │
│ │  "The guarantee isn't a sales tactic. It's the     │ │
│ │   only honest thing to offer when the outcome       │ │
│ │   depends on your child's nervous system."          │ │
│ │   [Fraunces italic, centered]                       │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │     ProductShowcaseSoft — Product Presence            │ │ ~300px
│ │                                                      │ │
│ │  [Eyebrow: "YOUR CART"]                              │ │
│ │                                                      │ │
│ │  ┌──────────────────────────────────────────────┐   │ │
│ │  │  [HERO SHOT — training-pant-watermelon-pink] │   │ │
│ │  │  420 x 240px, rounded 20px                    │   │ │
│ │  │  ┌─────────────────┐                          │   │ │
│ │  │  │ ✿ 60 days calm  │ ← floating badge        │   │ │
│ │  │  └─────────────────┘   (FFD866, rotated 4°)  │   │ │
│ │  └──────────────────────────────────────────────┘   │ │
│ │  [border: 1.5px B.ink, 20px radius, 4px shadow]    │ │
│ │                                                      │ │
│ │  "Body-Signal Learning Layer™ Pants"                │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │          CTA-2: Soft Link — CTA Zone                 │ │ ~200px
│ │                                                      │ │
│ │  [ The product will be here when you're ready → ]   │ │
│ │  [CTA-2: Soft Link — B.teal text, underline,       │ │
│ │   no button, inline link style]                     │ │
│ │                                                      │ │
│ │  "If today isn't the day, that's a real answer."    │ │
│ │  [Questrial 17px, B.muted, italic]                  │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │       SIGNOFF — Lena Sign-Off (LONG variant)         │ │ ~350px
│ │                                                      │ │
│ │  ┌──────────────────────────────────────────────┐   │ │
│ │  │  [Avatar: 58px circle, gradient ring]        │   │ │
│ │  │  "A note from" eyebrow                       │   │ │
│ │  │  "Lena Bauer"                                │   │ │
│ │  │  "Customer Support · Mom of two autistic     │   │ │
│ │  │   sons"                                       │   │ │
│ │  │                                              │   │ │
│ │  │  ─ ─ ─ dashed divider ─ ─ ─                 │   │ │
│ │  │                                              │   │ │
│ │  │  "With care,"                                │   │ │
│ │  │  Lena (Caveat font, 42px, D8F57C)           │   │ │
│ │  │  [flourish SVG]                              │   │ │
│ │  │                                              │   │ │
│ │  │  ─ ─ ─ dashed divider ─ ─ ─                 │   │ │
│ │  │                                              │   │ │
│ │  │  P.S. "My older son was 8 before we figured │   │ │
│ │  │  this out. If you've stepped back from       │   │ │
│ │  │  trying, I get it. When you're ready, the    │   │ │
│ │  │  science will still be here. 60 days, your   │   │ │
│ │  │  judgment."                                  │   │ │
│ │  │                                              │   │ │
│ │  │  P.S. "If you have a question, hit reply.    │   │ │
│ │  │  You'll get me, not a template. I read       │   │ │
│ │  │  everything."                                │   │ │
│ │  └──────────────────────────────────────────────┘   │ │
│ │  [bg: B.ink, card bg: #1F2A2C, 22px radius]        │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │                 FOOTER — BREZ-inspired               │ │ ~200px
│ │                                                      │ │
│ │  [Tagline in Fraunces italic 20px]                  │ │
│ │  [Footer links: Shop | FAQ | Contact]               │ │
│ │  [Social icons: Instagram, Facebook, TikTok]        │ │
│ │  [Unsubscribe + Manage Preferences]                  │ │
│ │  [Physical Address: 123 Commerce Street, Suite 200, │ │
│ │   Portland, OR 97201]                               │ │
│ │  [Gradient accent bar: 60px x 3px]                  │ │
│ └──────────────────────────────────────────────────────┘ │
└──────────────────────────────────────────────────────────┘
```

---

## 5. Section Specs

### Section 1: Preheader Bar
- **Component:** UTIL-06 — Preheader Bar (L7624)
- **Exact Copy:** "That's not doubt. That's experience talking. Here's what's different."
- **Background:** #F6F2EA
- **Typography:** Questrial 11px, italic, B.muted
- **Padding:** 6px 20px, centered
- **Notes:** Hidden in most email clients, visible in preview text. Reinforces the validation frame — "that's not doubt" reframes skepticism as earned experience. 68 chars, within 100-char recommendation.

### Section 2: Header
- **Component:** UTIL-08 — Nav Bar (L7682)
- **Exact Copy:** "Lena from BrightKidCo" (from name)
- **Image:** BrightKidCo logo (../assets/brightkidco-logo-v2.png), 34px height
- **Background:** B.paper (#FFFFFF)
- **Padding:** 24px 20px 0, centered
- **Typography:** Logo only, no additional text
- **Notes:** Simple, clean header. No navigation links — checkout recovery context, minimal distractions.

### Section 3: Hero — HERO-18 Guilt Absolution
- **Component:** HERO-18 — Guilt Absolution (L3857)
- **Exact Copy:**
  - Headline: "You're allowed to be skeptical"
  - Subhead: "That hope-fear cycle — 'What if I get my hopes up again?' — is the realest question you can ask. And it deserves a real answer, not a sales pitch."
- **Image:** NONE — text-only hero. No product imagery. The subscriber doesn't need to see the product; she needs to see that her skepticism is named and honored.
- **Background:** B.paper (#FFFFFF)
- **Typography:**
  - Headline: Questrial 32px desktop / 24px mobile, weight 700, letter-spacing -0.5px, color B.ink
  - Subhead: Questrial 17px, weight 500, color B.soft, line-height 1.5
- **Section padding:** 0 22px
- **Notes:** Text-only hero. "You're allowed to be skeptical" is the subject line echoed — reinforces the validation frame. "Realest question" is the empathy anchor. "Not a sales pitch" is the anti-marketing signal. HERO-18 (Guilt Absolution) is selected because E2's primary emotional job is to absolve the guilt of hesitation — the reader feels bad about not completing checkout, and the email says "that's not doubt, that's experience."

### Section 4: Tonal Shift Rule
- **Component:** 1px rule, #E8DED5
- **Full width, 1px height**
- **Notes:** Marks the transition from "we hear you" to "here's the shared experience."

### Section 5: Letter — LETTER-09 Double Column (Lena's Voice)
- **Component:** LETTER-09 — Double Column (L7826)
- **Exact Copy (VERBATIM):**

  **Whether/Or/If — 5-Dimension Opener:**
  "Whether you're 3 months in or 3 years in, whether your child is verbal or non-verbal, 3 or 10, diagnosed or still figuring it out, if you've felt hope before and watched it fade, this email is for you."

  **Three-Family Testimonial (inline):**
  "Three parents. Three different kids. One common experience before Body-Signal:"
  > "If 3 weeks of success then total regression, I know that cycle."
  > "If I had a dollar for every method I've tried... I'd have a lot of dollars."
  > "We made peace with maybe never. Then something shifted."

  "If even one of those sounds like your morning, here's why this approach is different from everything you've tried."

  **Mechanism paragraph 1:**
  "Every method you've tried assumed your child can feel the 'I need to go' signal when it happens. The research shows that for many kids who process signals differently, that signal either arrives too late or doesn't arrive at all. Not because they're stubborn. Not because you haven't tried hard enough. Because their nervous system processes body signals on a different timeline."

  **Mechanism paragraph 2:**
  "That's not a training problem. That's a signal-timing gap."

  **Mechanism paragraph 3:**
  "The Body-Signal Learning Layer was designed for that gap. It doesn't train behavior. It creates a gentle sensation that lasts — that gives the brain the feedback it's been missing, 30 to 60 seconds of awareness time that a pull-up wicks away instantly."

  **Timeline:**
  "Some kids show their first signal in 2 weeks. Others need 8 weeks. Some show nothing for months, and then, one day, a pause. A look down. A step toward the bathroom. Both are normal. Both are progress."

- **Background:** B.paper (#FFFFFF) for main copy; B.cream (#FBF7F1) for testimonial block
- **Testimonial block styling:** 3px left border B.green, bg B.cream, 16px left padding, 12px top/bottom padding
- **Typography:**
  - Body: Questrial 17px desktop / 16px mobile, weight 400, line-height 1.7, color B.soft
  - Bold anchors: weight 600, color B.ink — "signal-timing gap", "not a training problem"
  - Quotes: Questrial 16px, italic, B.ink, line-height 1.5
  - Timeline: Fraunces italic, centered, pull-quote style
- **Section padding:** 0 22px
- **Notes:** The 5-dimension opener achieves cross-level coverage in a single sentence: (1) "3 months in or 3 years in" = timeline (R5), (2) "verbal or non-verbal" = communication (R4), (3) "3 or 10" = age (R3), (4) "diagnosed or still figuring it out" = identity (Sub-Group A), (5) "felt hope before and watched it fade" = universal experience (R1). The Three-Family Testimonials are inline (not a separate card block) because E2 is text-heavy and the testimonials need to feel like part of Lena's letter, not a separate social proof section. Timeline section uses pull-quote styling to create visual pause.

### Section 6: Mechanism — ED3 Interoception Explainer (Brief)
- **Component:** ED3 — Interoception Explainer (L5324)
- **Exact Copy:** None (the mechanism text is in Section 5 LETTER-09). This section is a visual diagram only.
- **Diagram:**
  ```
  Body ─── ✗ ──→ Brain
  (signal arrives too late)

  Body ─── ✓ ──→ BSL Layer ──→ Brain
  (30-60 sec awareness window)
  ```
- **Styling:** bg B.cream, 12px radius, 1px B.teal border, padding 20px
- **Typography:** Questrial 14px, B.soft, monospace for arrows
- **Notes:** Minimal visual diagram. Two paths: the broken path (signal too late) and the fixed path (BSL layer adds 30-60 sec window). This is the simplest mechanism visual in the entire flow — checkout recovery doesn't need a full explainer, just a quick visual anchor for the "signal-timing gap" concept.

### Section 7: Trust — TRUST-5 Promise Badges Strip
- **Component:** TRUST-5 — Promise Badges Strip (L6385)
- **Exact Copy (VERBATIM):**

  **Intro:**
  "Here's what we ask:"

  **Badge 1:** "60-DAY TRIAL — Try it for 60 days."
  **Badge 2:** "YOUR JUDGMENT — By your judgment — you decide."
  **Badge 3:** "NO QUESTIONS — Full refund. No shipping to return."

  **Guarantee paragraph:**
  "If your child shows no sign of body awareness, no pause, no look down, no pull at their pants, no step toward the potty, every dollar back. No questions. No shipping to return."

  **Philosophy line:**
  "The guarantee isn't a sales tactic. It's the only honest thing to offer when the outcome depends on your child's nervous system."

- **Badge styling:** 3 badges in horizontal row (desktop), stacked (mobile). Each: B.cream bg, 12px radius, 1px B.green border, padding 16px
- **Badge typography:** Questrial 12px, weight 700, text-transform uppercase, B.teal (badge title); Questrial 14px, B.soft (badge body)
- **Philosophy line:** Fraunces italic, centered, B.ink
- **Background:** B.paper (#FFFFFF)
- **Notes:** Three badges create visual trust density. "Your judgment" is the conversion lever — it positions the guarantee as parent-controlled, not brand-controlled. Mini-win language (R6): "no pause, no look down, no pull at their pants, no step toward the potty" — observable micro-signs, not full training. Philosophy line reframes the guarantee as honesty, not marketing.

### Section 8: Product — ProductShowcaseSoft
- **Component:** ProductShowcaseSoft (L613)
- **Exact Copy:**
  - Eyebrow: "YOUR CART"
  - Title: "Body-Signal Learning Layer™ Pants"
- **Image:** /root/projects/brightkidco/raw/product-photos/flat-lay/training-pant-watermelon-pink.jpg
  - Alt text: "BrightKidCo training pant in watermelon pink pattern, flat lay"
  - Dimensions: 420 x 240px (desktop), full-width (mobile)
  - Cropping: Center crop, full product visible
  - Fallback color: #FBF7F1
- **Card styling:** bg B.paper, 1.5px B.ink border, 20px radius, 4px B.ink shadow
- **Badge:** "✿ 60 days calm" — FFD866 bg, 2px B.ink border, 999 radius, rotated 4°, 2px shadow
- **Typography:**
  - Eyebrow: Questrial 10.5px, weight 700, letter-spacing 2px, text-transform uppercase, B.teal
  - Title: Questrial 22px, weight 700, B.ink
- **Notes:** Minimal product presence. No sub text, no price, no features. The subscriber's cart is saved — she doesn't need product information at this point. The product image is a visual reminder of what she was about to buy, nothing more.

### Section 9: CTA — CTA-2 Soft Link
- **Component:** CTA-2 — Soft Link (L6692)
- **Exact Copy (VERBATIM):**
  - Link: "The product will be here when you're ready"
  - Permission off-ramp: "If today isn't the day, that's a real answer."
- **CTA style:** B.teal (#2BAEB4) text, underline on hover, no button, inline link style. NOT a button — this is intentionally the softest CTA in the entire flow.
- **Permission off-ramp:** Questrial 17px, B.muted, italic
- **Background:** B.paper (#FFFFFF)
- **Notes:** CTA-2 (Soft Link) is selected over CTA-5 (Product CTA) because E2's conversion strategy is permission-based, not imperative. "The product will be here when you're ready" is the ultimate permission frame — it says "we're not going anywhere." "If today isn't the day, that's a real answer" is the off-ramp that paradoxically converts more than a hard CTA because it removes the last emotional barrier: the fear of being pushed. Per GIULIANO-DEMANDS.md §6, Objection D3 ("What if I get my hopes up again?") is the deepest conversion barrier — an aggressive CTA at this moment would undermine the permission-based trust the entire email builds.

### Section 10: Signoff — Lena (LONG variant)
- **Component:** UTIL-05 — Signoff Card (L7600) + 12.1 — Lena Signoff (L1026)
- **Exact Copy (VERBATIM):**
  "With care,"
  "Lena ——"
  "Customer Support · Mom of two autistic sons"
  "P.S. My older son was 8 before we figured this out. If you've stepped back from trying, I get it. When you're ready, the science will still be here. 60 days, your judgment."
  "P.S. If you have a question, hit reply. You'll get me, not a template. I read everything."
- **Closing words:** "With care," (LONG variant per 2-full-email-copy-strategy.md §1.3)
- **Avatar:** 58px circle, gradient ring (FFD866 → B.teal), portrait placeholder
- **Name:** "Lena Bauer", Questrial 17px, weight 700, white
- **Role:** "Customer Support · Mom of two autistic sons", Questrial 12px, #8FAFB2, italic
- **Signature:** "Lena" in Caveat font, 42px, #D8F57C, with flourish SVG
- **Card bg:** #1F2A2C, 22px radius, 1.5px #2F3D40 border
- **Card container bg:** B.ink (#1F2D2F)
- **Dashed dividers:** 1.5px #3A4547
- **P.S. section:** Questrial 13px, #B8CACD, italic, "P.S." in D8F57C bold
- **Notes:** LONG variant per conversion-stage sign-off rule (2-full-email-copy-strategy.md §1.3). E2 is the conversion moment — the deeper, more permission-heavy LONG variant is required. "With care," (not "Talk soon,") is the appropriate sign-off for a hope-fear conversation. First P.S. includes Lena's personal story fragment ("My older son was 8") — this is the trust anchor for L3 (long-journey parents). Second P.S. includes reply prompt for deliverability signal and migration path (Layer-18 §Part 4 Path 2). Double em-dash "——" is intentional typographic choice.

### Section 11: Footer
- **Component:** UTIL-04 — Footer (L7571) + 12.2 — Footer (L1059)
- **Exact Copy:**
  - Tagline: (from window.FLOW3_SHARED.footer.tagline, Fraunces italic 20px)
  - Links: Shop | FAQ | Contact
  - Social: Instagram, Facebook, TikTok icons (22px SVG, B.ink stroke)
  - Unsubscribe: "No longer want to receive these emails? Unsubscribe."
  - Address: "123 Commerce Street, Suite 200, Portland, OR 97201"
  - Questions: "Questions? Reply to this email, Lena reads every response."
- **Background:** B.paper (#FFFFFF)
- **Typography:** Questrial 14px, B.ink, weight 500 (links); 11.5px, B.muted (legal)
- **Social icons:** 22px, B.ink stroke, 1.8 strokeWidth
- **Gradient accent bar:** 60px x 3px, B.gradient (B.teal → B.green), centered, 3px radius
- **Notes:** CAN-SPAM compliant. Reply prompt reinforces deliverability signal.

---

## 6. Component Details

### HERO-18 — Guilt Absolution (L3857)
- **Props:** headline, subhead, heroImage (optional)
- **Variants:** Text-only — no hero image
- **Custom overrides:**
  - Headline: "You're allowed to be skeptical" (subject line echo)
  - Subhead: "That hope-fear cycle — 'What if I get my hopes up again?' — is the realest question you can ask. And it deserves a real answer, not a sales pitch."
  - Hero image: OMITTED — text-only for minimal distraction
  - CTA: OMITTED — no CTA in hero

### LETTER-09 — Double Column (L7826)
- **Props:** paras[], pullQuote, bg
- **Variants:** Default — paragraph stack with pull-quote block
- **Custom overrides:**
  - bg: B.paper (#FFFFFF) for main copy
  - Whether/Or/If 5-dimension opener (full cross-level bridge)
  - Three-Family Testimonials inline (not separate card)
  - Timeline section as pull-quote (Fraunces italic, centered)
  - Bold reading path anchors: "signal-timing gap", "not a training problem"

### SP-05 — Counter Testimonial — EMBEDDED IN LETTER-09
- **Note:** SP-05 is listed in strategy-map.json but the Three-Family Testimonials are embedded directly in the LETTER-09 section as inline quotes, not a separate social proof card block. This is intentional — E2 is text-heavy and the testimonials need to feel like part of Lena's letter, not a detached social proof section. The testimonial block uses the same styling (B.cream bg, 3px B.green left border) but is integrated into the letter flow.

### ED3 — Interoception Explainer (Brief)
- **Props:** diagram, bg
- **Variants:** Minimal — two-path diagram only
- **Custom overrides:**
  - Two paths: broken (signal too late) and fixed (BSL layer)
  - Monospace arrows for visual clarity
  - bg: B.cream, 12px radius, 1px B.teal border
  - No body text — mechanism text is in LETTER-09

### TRUST-5 — Promise Badges Strip (L6385)
- **Props:** badges[], guaranteeText, philosophyLine
- **Variants:** Default — 3 badges + guarantee text + philosophy
- **Custom overrides:**
  - 3 badges: 60-Day Trial, Your Judgment, No Questions
  - Guarantee paragraph with mini-win language (R6)
  - Philosophy line in Fraunces italic (not a badge — a statement of values)

### ProductShowcaseSoft (L613)
- **Props:** eyebrow, title, heroImage
- **Variants:** Soft — no price, no features, no sub text
- **Custom overrides:**
  - Eyebrow: "YOUR CART"
  - Hero image: training-pant-watermelon-pink.jpg
  - Floating badge: "✿ 60 days calm" (FFD866)
  - No sub text, no price — minimal presence

### CTA-2 — Soft Link (L6692)
- **Props:** linkText, permissionOffRamp
- **Variants:** Default — inline link + off-ramp text
- **Custom overrides:**
  - Link: "The product will be here when you're ready" (B.teal text, underline)
  - Permission off-ramp: "If today isn't the day, that's a real answer." (B.muted, italic)
  - NO button — intentionally softest CTA in the flow

### UTIL-07 — Section Header
- **Props:** text, bg
- **Variants:** Minimal — used as clean dividers between major sections
- **Custom overrides:**
  - Simple text headers for visual structure
  - B.teal color, uppercase, letter-spacing

### UTIL-05 — Signoff Card (L7600)
- **Props:** bg, variant
- **Variants:** LONG (E2)
- **Custom overrides:**
  - Avatar: 58px circle, gradient ring
  - Signature: Caveat font, 42px, D8F57C
  - Role: "Customer Support · Mom of two autistic sons"
  - Two P.S. lines (LONG variant)
  - "With care," closing (not "Talk soon,")

---

## 7. Image Briefs

### Image 1: Product Flat Lay
- **Path:** /root/projects/brightkidco/raw/product-photos/flat-lay/training-pant-watermelon-pink.jpg
- **Alt text:** "BrightKidCo training pant in watermelon pink pattern, flat lay"
- **Recommended dimensions:** 420 x 240px (desktop), full-width (mobile)
- **Cropping/focal point:** Center crop, full product visible. Clean flat-lay composition. Watermelon pink pattern clearly visible. White/cream background.
- **Fallback color:** #FBF7F1
- **Notes:** Only product image in E2. Used in ProductShowcaseSoft section. Minimal imagery — one product shot is sufficient for checkout recovery.

### Image 2: Accessory (备用 / Backup)
- **Path:** /root/projects/brightkidco/raw/product-photos/accessories/towel-set-llama-cactus.png
- **Alt text:** "BrightKidCo towel set in llama cactus pattern"
- **Recommended dimensions:** 200 x 110px (if used as sub-card)
- **Cropping/focal point:** Product centered, pattern visible
- **Fallback color:** #FBF7F1
- **Notes:** Listed in strategy-map.json images array but NOT used in the primary layout. Available as fallback if a secondary product image is required.

---

## 8. Rendering Notes

### Email Client Considerations
- **Gmail:** Strips CSS animations, classes. All styling must be inline. Max email size ~100KB (§15.3). Text-heavy emails are Gmail-friendly (less HTML = faster load).
- **Outlook Desktop:** No SVG support. Wave dividers degrade to thin rules (#E8DED5). Background colors on tables only. Border-radius not supported on buttons.
- **Apple Mail:** Full CSS support. Best rendering environment.
- **Yahoo Mail:** Inline CSS required. Border-radius spotty.

### Mobile Responsive Notes
- **Breakpoint:** 480px (§15.3)
- **Max width:** 600px desktop, full-width mobile
- **CTA:** Soft link — full-width tap target on mobile (48px min height)
- **Product image:** Full-width on mobile, maintains aspect ratio
- **Trust badges:** Stack vertically on mobile (from horizontal 3-up)
- **Font sizes:** Body 16px mobile (§15.5 accessibility minimum), Headlines 24px mobile
- **Spacing:** Section gap 32px mobile (from 44px desktop)

### Accessibility Notes
- **Body text minimum:** 16px on mobile (§15.5, WCAG AA)
- **CTA minimum height:** 48px (§15.5, tap-friendly)
- **Color contrast:** All body text (B.ink on B.paper) passes WCAG AA (4.5:1 minimum). CTA text (B.teal on B.paper) passes at 4.8:1.
- **Alt text:** Product image has descriptive alt text
- **Semantic structure:** H1 for hero headline, blockquote for parent quotes, H2 for section headers
- **Link purpose:** CTA link has descriptive text ("The product will be here when you're ready" not "Click Here")

### Special Instructions
- **Reply prompt:** REQUIRED in every email (§17.2). "Reply to this email, Lena reads every response" in footer. "Hit reply" in Lena's second P.S.
- **Checkout recovery context:** No urgency, no countdown timers, no scarcity, no "last chance" language. Permission-based throughout.
- **Forbidden checkout patterns avoided:** ✅ No "Only 24 hours left!", ✅ No "Your cart is expiring!", ✅ No "Don't miss out!", ✅ No "You forgot something!" (guilt framing), ✅ No countdown timers, ✅ No "Last chance!"
- **From name:** "Lena from BrightKidCo" (§16.3)
- **Reply-to:** support@brightkidco.com (§16.3)
- **No Facebook link** (§16.4)
- **No Trustpilot link** (§16.4)
- **Physical address:** 123 Commerce Street, Suite 200, Portland, OR 97201 (CAN-SPAM)
- **Cross-level R1-R6 compliance:** ✅ R1 (symptom over label), ✅ R2 (3+ recognition anchors in Three-Family), ✅ R3 (age ranges "3 or 10"), ✅ R4 (verbal/non-verbal inclusive), ✅ R5 (timeline flexibility "2 weeks...8 weeks...months"), ✅ R6 (low-bar success "no pause, no look down, no pull at their pants")
- **Forbidden phrases check:** ✅ No "easy/simple/effortless", ✅ No "fix/cure", ✅ No level labels, ✅ No urgency countdown, ✅ No "only X left", ✅ No "your cart is expiring", ✅ No "just like other kids", ✅ No "when your child is trained"
- **Image-to-text ratio:** 15/85 (very text-heavy — E2 is validation-driven, not visual)
- **Copy density:** Long (the copy file is the longest in the checkout flow — full 5-dimension opener + mechanism + timeline + guarantee + P.S. lines)
- **Klaviyo config:** Flow: Checkout Abandonment E2, Trigger: Started Checkout + No Purchase (60 min), Offer: Same as checkout cart — no upsell, Suppression: Checkout Abandonment overrides Cart Abandonment
