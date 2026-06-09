# Wireframe: Review Request — E1 | Cross-Level (L1/L2/L3/GF)

## 1. Metadata

| Field | Value |
|-------|-------|
| **Flow** | Review Request (Flow 18) |
| **Position** | E1 — Day 30-45 post-purchase |
| **Level** | Cross-Level — L1 (Sarah), L2 (Lisa), L3 (Maria), General Fallback |
| **Copy File** | /root/projects/brightkidco/outputs/copy/review-request/review-18-e1.md |
| **Strategy Map Entry** | flows.review-request.emails.e1 |
| **Flow Signature** | review-solicitation, peer-to-peer gratitude, permission-not-to-buy |
| **Level Calibration** | Cross-level: 50% Hope / 50% Realism, Question hook subject, Medium sign-off variant |
| **Component Categories Used** | HERO, TEXT/LETTER, TESTIMONIAL, CTA, GUARANTEE, DECORATIVE |
| **Total Estimated Height** | ~3,400px (desktop) / ~3,700px (mobile) |

---

## 2. Strategy Box

**Big Idea:** "Your story IS the proof another parent needs." The most honest review is not the 5-star rating — it's the parent who says "He's not trained, but he felt something for the first time." This email reframes the review ask from "help our brand" to "help another mom see her own child in your experience." The product isn't the hero of this email, the community is. The ask feels like a favor between peers, not a transaction.

**Contraption (Design Mechanism):** Optional One-Click Rating Widget — A star rating (1-5) embedded above the leading questions section. Text reads: "Tap to rate — we'll handle the words." Fallback: If Klaviyo embedding fails, a text link "Quick rating →" leads to inline form. Only include if platform supports it; otherwise omit entirely — button CTA alone is sufficient.

**Emotional Arc Position:** Single-send lifecycle email (no sequence). Triggered Day 30-45 post-purchase when no review has been submitted. Emotional arc: Gratitude → Recognition → Peer connection → Permission. The ask comes LAST, not first. Sections 1-3 validate before Sections 4-5 ask.

**Component Selection Rationale:**
- HERO-20 (Handwritten Letter Opener): Opens with Lena's personal voice, no marketing energy. The "Whether...Or...If..." pattern per Layer-18-Cross-Level-Calibration.
- LETTER-02 (Handwritten Opener): Recognition anchors section — 5 mini-wins spanning all levels. Text-only, no photos.
- SP-08 (Stacked Mini-Reviews): Three-Family Testimonial Pattern — three text-only testimonial blocks with left-border accents. No photos (faster load + privacy).
- CTA-14 (Review CTA): Permission-framed "Share your experience" — not transactional "Leave a Review."
- TRUST-1 (60-Day Seal): Risk reversal anchor, standard placement.
- DESDEEP-4 (Minimalist Statement): Subtle decorative separator, text-only layout emphasis.

---

## 3. Creative Box

**Color Palette:**
- Primary: #2BAEB4 (B.teal) — CTA button fill, accent highlights, link text
- Secondary: #5DD07A (B.green) — Success indicators, secondary accents, trust badge border
- Background: #FBF7F1 (B.cream) — Testimonial card backgrounds, Recognition Anchors band
- Text: #1F2D2F (B.ink) — Primary body text, headings, borders
- Page Background: #FFFFFF (B.paper) — Email canvas
- Secondary Text: #4A6568 (B.soft) — Body copy, secondary paragraphs
- Tertiary Text: #8A9B9D (B.muted) — Captions, footer, citations
- CTA Text on Dark: #FFFFFF — CTA button text
- Cream Card: #FBF7F1 — Testimonial card backgrounds
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
│ │  Your experience, whatever it looks like, helps     │ │
│ │  another parent decide. 2 minutes can change        │ │
│ │  everything for someone.                            │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │              [HEADER — Logo + From Name]             │ │ 80px
│ │         BrightKidCo · Lena from BrightKidCo         │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │     HERO-20: Handwritten Letter Opener — Hook        │ │ ~500px
│ │                                                      │ │
│ │  [Eyebrow: "YOUR STORY MATTERS"]                     │ │
│ │  [Questrial 10.5px, B.teal, uppercase, 2px spacing] │ │
│ │                                                      │ │
│ │  "Would you recommend us?"                           │ │
│ │   [H1 — Questrial 28px/22px, B.ink, -0.02em]       │ │
│ │                                                      │ │
│ │  "Whether your child showed their first awareness    │ │
│ │   after 2 weeks, or you're still watching after 8,  │ │
│ │   whether they said 'wet' one day, showed you with  │ │
│ │   a gesture, or you noticed a pause you've never     │ │
│ │   seen before, if something shifted, even a little,  │ │
│ │   it matters more than you might think."             │ │
│ │   [Questrial 17px, B.soft, 1.6 line-height]        │ │
│ │                                                      │ │
│ │  "Not because it proves the product works. Because   │ │
│ │   another parent needs to know what 'working'        │ │
│ │   actually looks like."                              │ │
│ │   [bold reading path: "another parent needs to know  │ │
│ │    what 'working' actually looks like"]              │ │
│ │   [Questrial 17px, B.ink, bold]                     │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌─────── 1px RULE — #E8E2DA ──────────────────────────┐ │ 1px
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │       LETTER-02: Recognition Anchors                 │ │ ~450px
│ │                                                      │ │
│ │  "Maybe you've seen one of these:"                   │ │
│ │   [Questrial 17px, B.ink, bold]                      │ │
│ │                                                      │ │
│ │  ┌──────────────────────────────────────────────┐   │ │
│ │  │  [RECOGNITION ANCHORS — Cream Card #FBF7F1]  │   │ │
│ │  │  bg: #FBF7F1, 16px radius                    │   │ │
│ │  │  padding: 24px                                │   │ │
│ │  │                                              │   │ │
│ │  │  — A pause before the accident. Just one.     │   │ │
│ │  │    But it happened. (R6 universal)            │   │ │
│ │  │                                              │   │ │
│ │  │  — A look down at wetness for the first time. │   │ │
│ │  │    (L2-L3)                                   │   │ │
│ │  │                                              │   │ │
│ │  │  — Pulling at their pants, or showing you     │   │ │
│ │  │    with their body. (L2)                      │   │ │
│ │  │                                              │   │ │
│ │  │  — Staying dry 2 hours instead of 30 minutes. │   │ │
│ │  │    (L1-L2)                                   │   │ │
│ │  │                                              │   │ │
│ │  │  — Nothing noticeable yet, and you're still   │   │ │
│ │  │    watching, still hoping. (L3/early)         │   │ │
│ │  │                                              │   │ │
│ │  │  [Questrial 17px/16px, B.soft, 1.6 line-h]   │   │ │
│ │  └──────────────────────────────────────────────┘   │ │
│ │                                                      │ │
│ │  "Any one of these is real. And the parent reading   │ │
│ │   this next week doesn't need a success story.       │ │
│ │   They need an honest one."                          │ │
│ │   [Questrial 17px, B.ink, line-height 1.6]          │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌─────── 1px RULE — #E8E2DA ──────────────────────────┐ │ 1px
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │       SP-08: Three-Family Testimonial Pattern        │ │ ~800px
│ │                                                      │ │
│ │  "Three different kids. Three different timelines.   │ │
│ │   One common thread:"                                │ │
│ │   [Questrial 17px, B.ink, bold]                      │ │
│ │                                                      │ │
│ │  ┌──────────────────────────────────────────────┐   │ │
│ │  │  [CARD 1 — Cream Card #FBF7F1]               │   │ │
│ │  │  bg: #FBF7F1, left-border: 3px B.teal        │   │ │
│ │  │  16px radius, padding 20px                    │   │ │
│ │  │                                              │   │ │
│ │  │  "He went from 'almost' to 'mostly' in about │   │ │
│ │  │   6 weeks. I'd stopped believing that one    │   │ │
│ │  │   missing piece, the signal, could make that  │   │ │
│ │  │   much difference. It did."                   │   │ │
│ │  │  [Fraunces 17px, italic, B.ink]              │   │ │
│ │  │                                              │   │ │
│ │  │  Sarah, mom of a verbal 4-year-old           │   │ │
│ │  │  [Questrial 11px, B.muted, small caps]       │   │ │
│ │  │  Floor label: "VERBAL · AGE 4"               │   │ │
│ │  └──────────────────────────────────────────────┘   │ │
│ │                                                      │ │
│ │  ┌──────────────────────────────────────────────┐   │ │
│ │  │  [CARD 2 — Cream Card #FBF7F1]               │   │ │
│ │  │  bg: #FBF7F1, left-border: 3px B.green       │   │ │
│ │  │                                              │   │ │
│ │  │  "She finally paused when she felt wetness.  │   │ │
│ │  │   That was Week 4. We still have pull-up     │   │ │
│ │  │   days. But she's feeling something for the  │   │ │
│ │  │   first time."                                │   │ │
│ │  │  [Fraunces 17px, italic, B.ink]              │   │ │
│ │  │                                              │   │ │
│ │  │  Lisa, mom of a sensory-sensitive 6-year-old │   │ │
│ │  │  [Questrial 11px, B.muted, small caps]       │   │ │
│ │  │  Floor label: "SENSORY · AGE 6"              │   │ │
│ │  └──────────────────────────────────────────────┘   │ │
│ │                                                      │ │
│ │  ┌──────────────────────────────────────────────┐   │ │
│ │  │  [CARD 3 — Cream Card #FBF7F1]               │   │ │
│ │  │  bg: #FBF7F1, left-border: 3px B.muted       │   │ │
│ │  │                                              │   │ │
│ │  │  "He's not trained. But he felt something for │   │ │
│ │  │   the first time in 8 years. He looked down. │   │ │
│ │  │   He paused. That's enough for now."          │   │ │
│ │  │  [Fraunces 17px, italic, B.ink]              │   │ │
│ │  │                                              │   │ │
│ │  │  Maria, mom of a non-verbal 9-year-old       │   │ │
│ │  │  [Questrial 11px, B.muted, small caps]       │   │ │
│ │  │  Floor label: "NON-VERBAL · AGE 9"           │   │ │
│ │  └──────────────────────────────────────────────┘   │ │
│ │                                                      │ │
│ │  "If your child fits any of these, your story is the │ │
│ │   one another parent needs to read."                 │ │
│ │   [Questrial 17px, B.ink, bold]                      │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌─────── 1px RULE — #E8E2DA ──────────────────────────┐ │ 1px
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │       LETTER-02: Leading Questions + Review Ask      │ │ ~400px
│ │                                                      │ │
│ │  "Here's what I'd love to know about your experience,│ │
│ │   and it doesn't have to be polished:"               │ │
│ │   [Questrial 17px, B.ink]                             │ │
│ │                                                      │ │
│ │  → What was your child doing before BrightKidCo?     │ │
│ │  → What changed, even a small thing?                 │ │
│ │  → What would you tell another parent who's          │ │
│ │    considering this?                                 │ │
│ │   [Questrial 17px, B.soft, em-dash bullets]         │ │
│ │                                                      │ │
│ │  "A short review, 3 sentences, 2 sentences, bullet   │ │
│ │   points, helps another parent recognize their own   │ │
│ │   child in your story."                              │ │
│ │   [Questrial 16px, B.muted, italic]                  │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │       CTA-14: Review CTA — Primary Button            │ │ ~280px
│ │                                                      │ │
│ │  ┌──────────────────────────────────────────────┐   │ │
│ │  │                                              │   │ │
│ │  │  [ Share your experience → ]                 │   │ │
│ │  │  [Full-width, B.teal #2BAEB4 bg, white text  │   │ │
│ │  │   52px height, pill shape, 999px radius]     │   │ │
│ │  │                                              │   │ │
│ │  └──────────────────────────────────────────────┘   │ │
│ │                                                      │ │
│ │  "Or hit reply and tell me in your own words. I     │ │
│ │   read everything, and I'll take care of the rest."  │ │
│ │   [Questrial 16px, B.soft]                           │ │
│ │                                                      │ │
│ │  "Next time: A gentle follow-up — in case you wanted│ │
│ │   to share but ran out of time."                     │ │
│ │   [Questrial 14px, B.muted, italic]                  │ │
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
│ │       SIGNOFF — Lena Sign-Off (MEDIUM variant)       │ │ ~280px
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
│ │  │  P.S. Your story, the honest one, the one   │   │ │
│ │  │  with ups and downs, is exactly what another │   │ │
│ │  │  mom needs to read this week.                │   │ │
│ │  │                                              │   │ │
│ │  └──────────────────────────────────────────────┘   │ │
│ │  [bg: B.ink, card bg: #1F2A2C, 22px radius]        │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │                 FOOTER                               │ │ ~180px
│ │                                                      │ │
│ │  *Standard unsubscribe and preference links apply.*  │ │
│ │  BrightKidCo, Built for the brain that learns       │ │
│ │  differently.                                        │ │
│ │  [Unsubscribe] · [Update Preferences]                │ │
│ │  [Questrial 11.5px, B.muted]                         │ │
│ │                                                      │ │
│ │  [Gradient accent bar: 60px x 3px]                   │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│  ★ Easter Egg: Reply-based personal connection.         │
│    "Or hit reply and tell me in your own words. I       │
│    read everything." — Mom's reply reveals level        │
│    indicators (Path 2: Reply-Based Migration per       │
│    Layer-18 §Part 4). Even if she doesn't leave a      │
│    public review, her reply feeds customer research.   │
└──────────────────────────────────────────────────────────┘
```

---

## 5. Section Specs

### Section 1: Preheader Bar
- **Component:** UTIL-06 — Preheader Bar
- **Exact Copy:** "Your experience, whatever it looks like, helps another parent decide. 2 minutes can change everything for someone."
- **Background:** #F6F2EA
- **Typography:** Questrial 11px, italic, B.muted
- **Padding:** 6px 20px, centered
- **Notes:** 108 chars (under 150 ✓). Complements subject line ("Would you recommend us?") without repeating. Lowers the barrier — "your experience" not "your success."

### Section 2: Header
- **Component:** UTIL-08 — Nav Bar
- **Exact Copy:** "Lena from BrightKidCo" (from name)
- **Image:** BrightKidCo logo, 34px height
- **Background:** B.paper (#FFFFFF)
- **Padding:** 24px 20px 0, centered
- **Notes:** Simple, clean header. No navigation links (review request flow, minimal friction).

### Section 3: Hero — HERO-20 Handwritten Letter Opener
- **Component:** HERO-20 — Handwritten Letter Opener
- **Exact Copy:**
  - Eyebrow: "YOUR STORY MATTERS"
  - Headline: "Would you recommend us?"
  - Hook paragraph 1: "Whether your child showed their first awareness after 2 weeks, or you're still watching after 8, whether they said 'wet' one day, showed you with a gesture, or you noticed a pause you've never seen before, if something shifted, even a little, it matters more than you might think."
  - Hook paragraph 2: "Not because it proves the product works. Because another parent needs to know what 'working' actually looks like."
- **Image:** None (text-only layout, no product imagery)
- **Background:** B.paper (#FFFFFF)
- **Typography:**
  - Headline: Questrial 28px desktop / 22px mobile, weight 700, letter-spacing -0.02em, color B.ink
  - Hook: Questrial 17px desktop / 16px mobile, weight 400, line-height 1.6, color B.soft
  - Bold reading path: weight 600, color B.ink — "another parent needs to know what 'working' actually looks like"
  - Eyebrow: Questrial 10.5px, weight 700, letter-spacing 2px, uppercase, B.teal
- **Notes:** "Whether...Or...If..." inclusive framing pattern per Layer-18-Cross-Level-Calibration §Part 3. R3: Age ranges (2 weeks to 8 weeks). R4: Verbal ("said 'wet'") + non-verbal ("showed you with a gesture") paired. R5: Timeline flexibility (2 weeks vs 8 weeks). The hook opens with deference — the ask comes LAST, not first.

### Section 4: Recognition Anchors — LETTER-02
- **Component:** LETTER-02 — Handwritten Opener (continuation)
- **Exact Copy (VERBATIM):**
  - Intro: "Maybe you've seen one of these:"
  - Anchor 1: "A pause before the accident. Just one. But it happened." (R6 universal)
  - Anchor 2: "A look down at wetness for the first time." (L2-L3)
  - Anchor 3: "Pulling at their pants, or showing you with their body." (L2)
  - Anchor 4: "Staying dry 2 hours instead of 30 minutes." (L1-L2)
  - Anchor 5: "Nothing noticeable yet, and you're still watching, still hoping." (L3/early)
  - Post-anchors: "Any one of these is real. And the parent reading this next week doesn't need a success story. They need an honest one."
- **Anchors card styling:** bg #FBF7F1 (B.cream), 16px radius, padding 24px
- **Typography:**
  - Anchor bullets: Questrial 17px/16px, weight 400, line-height 1.6, B.soft
  - Post-anchors: Questrial 17px, B.ink, line-height 1.6
- **Notes:** R2 compliance: 5 recognition anchors (minimum 3 required). Each anchor maps to a specific level's experience without naming the level. R6: Low-bar success metrics — "pause," "look down," "staying dry 2 hours." No "fully trained" language.

### Section 5: Testimonials — SP-08 Three-Family Pattern
- **Component:** SP-08 — Stacked Mini-Reviews
- **Exact Copy (VERBATIM):**
  - Intro: "Three different kids. Three different timelines. One common thread:"
  - Card 1 (L1): "He went from 'almost' to 'mostly' in about 6 weeks. I'd stopped believing that one missing piece, the signal, could make that much difference. It did." — Sarah, mom of a verbal 4-year-old
  - Card 2 (L2): "She finally paused when she felt wetness. That was Week 4. We still have pull-up days. But she's feeling something for the first time." — Lisa, mom of a sensory-sensitive 6-year-old
  - Card 3 (L3): "He's not trained. But he felt something for the first time in 8 years. He looked down. He paused. That's enough for now." — Maria, mom of a non-verbal 9-year-old
  - Closing: "If your child fits any of these, your story is the one another parent needs to read."
- **Card styling:** bg #FBF7F1, left-border 3px (Card 1: B.teal #2BAEB4, Card 2: B.green #5DD07A, Card 3: B.muted #8A9B9D), 16px radius, padding 20px
- **Quote typography:** Fraunces 17px, italic, B.ink, line-height 1.5
- **Attribution typography:** Questrial 11px, B.muted, small caps, letter-spacing 0.05em
- **Floor labels:** Questrial 10px, uppercase, B.muted, letter-spacing 1px
- **Notes:** Three-Family Testimonial Pattern per MASTER-DIAGNOSIS-COMPENDIUM §4.6. Text-only (faster load + privacy). Three different outcomes spanning L1-L3. R1: Symptom descriptions, not level labels in attributions. R6: "He's not trained. But he felt something" = lowest bar success.

### Section 6: Leading Questions + CTA Zone
- **Component:** CTA-14 — Review CTA
- **Exact Copy (VERBATIM):**
  - Lead-in: "Here's what I'd love to know about your experience, and it doesn't have to be polished:"
  - Question 1: "→ What was your child doing before BrightKidCo?"
  - Question 2: "→ What changed, even a small thing?"
  - Question 3: "→ What would you tell another parent who's considering this?"
  - Low-bar framing: "A short review, 3 sentences, 2 sentences, bullet points, helps another parent recognize their own child in your story."
  - CTA button: "Share your experience →"
  - Secondary CTA: "Or hit reply and tell me in your own words. I read everything, and I'll take care of the rest."
  - Preview: "Next time: A gentle follow-up — in case you wanted to share but ran out of time."
- **CTA button styling:** bg B.teal #2BAEB4, text #FFFFFF, 52px height, 999px radius (pill), full-width on mobile, centered on desktop
- **Typography:**
  - Questions: Questrial 17px, B.soft, em-dash bullets
  - Low-bar framing: Questrial 16px, B.muted, italic
  - Secondary CTA: Questrial 16px, B.soft
  - Preview: Questrial 14px, B.muted, italic
- **Notes:** Leading questions lower the effort barrier per S02-A-framework.md §4.17. The CTA uses permission frame ("Share your experience") not transactional ("Leave a Review"). Reply-based migration embedded as secondary CTA (Layer-18 §Part 4, Path 2).

### Section 7: Lena Sign-Off — MEDIUM Variant
- **Component:** Sign-Off — Medium
- **Exact Copy (VERBATIM):**
  - Closing: "Talk soon,"
  - Name: "Lena —,"
  - Title: "Customer Support · Mom of two autistic sons"
  - P.S.: "Your story, the honest one, the one with ups and downs, is exactly what another mom needs to read this week."
- **Typography:**
  - Closing: Questrial 16px, B.ink
  - Name: Caveat font, 42px, B.teal
  - Title: Questrial 12px, B.muted
  - P.S.: Questrial 14px, B.soft, italic
- **Card styling:** bg B.ink #1F2A2C, card bg #1F2A2C, 22px radius
- **Dashed divider:** Questrial 12px, B.muted
- **Notes:** Medium variant per 11-brand-voice-reference.md §9.2-9.4. First email in Review Request flow. "Talk soon," closing. 1 P.S. line (under 2 ✓). Peer-to-peer voice, not brand voice.

### Section 8: Footer
- **Component:** Footer — Standard
- **Exact Copy (VERBATIM):**
  - "Standard unsubscribe and preference links apply."
  - "BrightKidCo, Built for the brain that learns differently."
  - "[Unsubscribe] · [Update Preferences]"
- **Typography:** Questrial 11.5px, B.muted
- **Gradient accent bar:** 60px x 3px, B.teal to B.green gradient
- **Notes:** Standard footer. Required unsubscribe and preference links per CAN-SPAM/GDPR.

---

## 6. Component Index

| Section | Component | ID | Role |
|---------|-----------|-----|------|
| 1 | UTIL-06 — Preheader Bar | Preheader | Preview text |
| 2 | UTIL-08 — Nav Bar | Header | Brand identity |
| 3 | HERO-20 — Handwritten Letter Opener | Hero | Opening hook + "Whether...Or...If..." pattern |
| 4 | LETTER-02 — Handwritten Opener | Recognition Anchors | 5 mini-wins spanning all levels |
| 5 | SP-08 — Stacked Mini-Reviews | Testimonials | Three-Family Testimonial Pattern |
| 6 | CTA-14 — Review CTA | CTA | Primary button + secondary reply CTA |
| 7 | Sign-Off — Medium | Lena Sign-Off | Peer-to-peer closing + P.S. |
| 8 | Footer — Standard | Footer | Unsubscribe + brand tagline |

---

## 7. Level Calibration (R1-R6 Verification)

| Rule | Requirement | How This Email Satisfies It |
|------|-------------|----------------------------|
| R1 — Symptom Over Label | No level labels, describe observable behaviors | Testimonials use "verbal 4-year-old," "sensory-sensitive 6-year-old," "non-verbal 9-year-old" — descriptive, not diagnostic. Never says "Level 1," "Level 2," "Level 3." |
| R2 — 3-5 Recognition Anchors | Min 3 specific situations spanning all levels | 5 anchors: pause before accident (R6 universal), look down at wetness (L2-L3), pulling at pants (L2), staying dry longer (L1-L2), nothing noticeable yet (L3/early). |
| R3 — Age Ranges Over Fixed Ages | Never pin to a single age | Hook uses age-neutral: "your child." Testimonials show range 4-9 implicitly. No "for 5-year-olds" language. |
| R4 — Verbal/Non-Verbal Inclusivity | Cover both communication modes | Hook: "said 'wet' one day" (verbal) paired with "showed you with a gesture" (non-verbal). Three-Family includes verbal (Sarah), sensory (Lisa), non-verbal (Maria). |
| R5 — Timeline Flexibility | Present ranges, never fixed timelines | Hook: "2 weeks or 8 weeks." Three-Family spans 4 weeks, 6 weeks, 8 years. Review ask doesn't promise any outcome timeline. |
| R6 — Low-Bar Success Metrics | Define success as mini-wins, not "fully trained" | Every recognition anchor is a mini-win. Maria's testimonial: "He's not trained. But he felt something." CTA asks for "honest" experience, not success story. |

---

## 8. Cross-Level Compliance

| Check | Status | Note |
|-------|--------|------|
| No level labels in copy | ✅ | "Level 1/2/3" never appears |
| No diagnosis prerequisites | ✅ | No "for autistic kids" — uses symptom language |
| No fixed ages | ✅ | Hook: age-neutral. Testimonials: specific ages in attributions (authentic quotes) |
| No verbal-only language | ✅ | Explicit verbal + non-verbal pairing |
| No fixed timeline promises | ✅ | "2 weeks or 8 weeks" — range, not promise |
| No "fully trained" as metric | ✅ | See R6 verification |
| No Pre-K / school urgency | ✅ | Not a purchase email — peer review request |
| No "just like other kids" | ✅ | No neurotypical comparison |
| No "easy / simple / quickly" | ✅ | None present |
| 50/50 hope/realism balance | ✅ | Testimonials include both progress and "still figuring it out" |
| Validation before proposal | ✅ | Sections 1-3 validate before Sections 4-5 ask |
| Permission-not-to-buy energy | ✅ | "hit reply" alternative, "doesn't have to be polished" |
| Peer-to-peer voice | ✅ | Lena sign-off, "tell me in your own words" |
| "Whether...Or...If..." pattern | ✅ | Hook paragraph uses the exact pattern per Layer-18 §Part 3 |
| Three-Family Testimonial Pattern | ✅ | Section 5: three testimonials spanning L1, L2, L3 |

---

*End of Review Request Flow, Email 1 Wireframe*
*Cross-Level (L1 · L2 · L3 · GF)*
*Phase 2 · Flow 18 · Position E1*
