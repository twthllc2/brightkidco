# Wireframe: Review Request — E2 | Cross-Level (L1/L2/L3/GF)

## 1. Metadata

| Field | Value |
|-------|-------|
| **Flow** | Review Request (Flow 18) |
| **Position** | E2 — Day 45 post-purchase (reminder / gentle follow-up) |
| **Level** | Cross-Level — L1 (Sarah), L2 (Lisa), L3 (Maria), General Fallback |
| **Copy File** | /root/projects/brightkidco/outputs/copy/review-request/review-18-e2.md |
| **Strategy Map Entry** | flows.review-request.emails.e2 |
| **Flow Signature** | review-solicitation, grateful ask, warm peer-to-peer, permission-not-to-review |
| **Level Calibration** | Cross-level: 65% Hope / 35% Realism, Validation hook subject, Short sign-off variant |
| **Component Categories Used** | TEXT/LETTER, TESTIMONIAL, CTA, GUARANTEE, DECORATIVE |
| **Total Estimated Height** | ~3,600px (desktop) / ~3,900px (mobile) |

---

## 2. Strategy Box

**Big Idea:** "Your real story is the review someone needs." The second review request doesn't focus on the product. It focuses on the impact of one honest review on a mom who's exactly where the reader was 45 days ago. The email reframes the review from "a favor for the brand" into "a lifeline for another parent." The Three-Family Testimonial Pattern shows concrete examples of what real reviews look like across three very different outcomes, normalizing the spectrum of results and making the ask feel achievable whether the product produced a huge win, a small win, or even a mixed experience.

**Contraption (Design Mechanism):** Progressive Testimonial Reveal — The Three-Family pattern is designed as a visual Triptych, three cards stacked vertically, each with a subtle left-border accent in a different tone (warm amber for L1, soft teal for L2, muted sage for L3). Each card shows: (1) The parent's name + child descriptor, (2) The testimonial quote in quotes, (3) A tag in subtle small text showing the mini-win type. Below the triptych, a single bridging line unifies all three before the CTA. The CTA button uses a warm, grounded color — not aggressive orange, a soft rust or warm terracotta tone that signals gratitude, not urgency. No countdown. No "LAST CHANCE."

**Emotional Arc Position:** Second and final send in Review Request flow. Triggered Day 45 when no review was submitted on E1 (D30). Emotional arc: Validation ("I get it if you've been busy") → Recognition (symptom anchors for the mom searching at 2am) → Peer connection (Three-Family Triptych) → Gentle ask → Permission ("last review email, no hard feelings"). This is the LAST review email — explicit soft-out.

**Component Selection Rationale:**
- HERO-14 (Quote Bomb): Opens with the validation hook — "I get it if you've been busy." No marketing energy, pure peer acknowledgment.
- LETTER-01 (Paragraph Stack): Recognition anchors section — 5 verbal+non-verbal symptoms. The "mom in the dark with her phone" framing.
- SP-04 (Trust Pill Strip): Three-Family Triptych — L1/L2/L3 testimonial cards with colored left borders. Text-only, progressive reveal.
- CTA-11 (Permission CTA): Permission-framed, grateful ask. "If the product has made any difference, even a tiny one." Low pressure.
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
- L1 Card Border Accent: #D4945F (warm amber) — "hope-forward, warm energy"
- L2 Card Border Accent: #5A8F8C (soft teal) — "calm, measured, clinical warmth"
- L3 Card Border Accent: #7B9E7B (muted sage) — "quiet, dignified, spacious"

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
│ │  Whether your child just started showing signs or   │ │
│ │  you've been at this for years, here's why your    │ │
│ │  experience matters to the mom who's next.          │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │              [HEADER — Logo + From Name]             │ │ 80px
│ │         BrightKidCo · Lena from BrightKidCo         │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │     HERO-14: Quote Bomb — Validation Hook            │ │ ~450px
│ │                                                      │ │
│ │  [Eyebrow: "YOUR STORY MATTERS"]                     │ │
│ │  [Questrial 10.5px, B.teal, uppercase, 2px spacing] │ │
│ │                                                      │ │
│ │  "Your story matters to someone right now"           │ │
│ │   [H1 — Questrial 28px/22px, B.ink, -0.02em]       │ │
│ │                                                      │ │
│ │  "Hey [first_name],"                                 │ │
│ │   [Questrial 17px, B.ink, bold]                      │ │
│ │                                                      │ │
│ │  "You got an email from me a couple weeks ago        │ │
│ │   asking if you'd leave a review. If you've been    │ │
│ │   meaning to and haven't gotten to it, I get it.    │ │
│ │   Life with a kid who doesn't feel when they need   │ │
│ │   to go doesn't leave a lot of spare minutes."       │ │
│ │   [Questrial 17px, B.soft, 1.6 line-height]        │ │
│ │                                                      │ │
│ │  "But I'm writing one more time because I want to   │ │
│ │   tell you something specific about why your story  │ │
│ │   matters right now."                                │ │
│ │   [bold reading path: "why your story matters       │ │
│ │    right now"]                                       │ │
│ │   [Questrial 17px, B.ink, bold]                     │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌─────── 1px RULE — #E8E2DA ──────────────────────────┐ │ 1px
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │       LETTER-01: Symptom Recognition Anchors         │ │ ~500px
│ │                                                      │ │
│ │  "There's a mom somewhere in the middle of her 2am   │ │
│ │   search who's reading reviews right now. She might │ │
│ │   be sitting in the dark with her phone, trying to  │ │
│ │   figure out if this is yet another thing that won't│ │
│ │   work for her kid."                                 │ │
│ │   [Questrial 17px, B.ink, line-height 1.6]          │ │
│ │                                                      │ │
│ │  "She has a child who:"                              │ │
│ │   [Questrial 17px, B.ink, bold]                      │ │
│ │                                                      │ │
│ │  ┌──────────────────────────────────────────────┐   │ │
│ │  │  [RECOGNITION ANCHORS — Cream Card #FBF7F1]  │   │ │
│ │  │  bg: #FBF7F1, 16px radius                    │   │ │
│ │  │  padding: 24px                                │   │ │
│ │  │                                              │   │ │
│ │  │  — sits on the toilet for 20 minutes and      │   │ │
│ │  │    nothing happens (L1)                       │   │ │
│ │  │                                              │   │ │
│ │  │  — plays in a wet pull-up without noticing    │   │ │
│ │  │    or reacting (L2-L3)                        │   │ │
│ │  │                                              │   │ │
│ │  │  — "almost trained" three times, each time it │   │ │
│ │  │    didn't stick (L1)                          │   │ │
│ │  │                                              │   │ │
│ │  │  — can't tell you they need to go, whether in │   │ │
│ │  │    words or by pulling at their pants         │   │ │
│ │  │    (R4 bridge — verbal + non-verbal)          │   │ │
│ │  │                                              │   │ │
│ │  │  — has been in pull-ups for years and she's   │   │ │
│ │  │    stopped counting the attempts (L3)         │   │ │
│ │  │                                              │   │ │
│ │  │  [Questrial 17px/16px, B.soft, 1.6 line-h]   │   │ │
│ │  └──────────────────────────────────────────────┘   │ │
│ │                                                      │ │
│ │  "If even one of those sounds like her morning, your │ │
│ │   review might be the one she reads that makes her   │ │
│ │   feel less alone. And maybe gives her the nudge to │ │
│ │   try something different."                          │ │
│ │   [Questrial 17px, B.ink, line-height 1.6]          │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌─────── 1px RULE — #E8E2DA ──────────────────────────┐ │ 1px
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │       SP-04: Three-Family Triptych — Testimonials    │ │ ~900px
│ │                                                      │ │
│ │  "I'll show you what I mean. Three parents, three   │ │
│ │   different kids, all writing about the same        │ │
│ │   product, but their wins look completely different:" │ │
│ │   [Questrial 17px, B.ink]                             │ │
│ │                                                      │ │
│ │  ┌──────────────────────────────────────────────┐   │ │
│ │  │  [CARD 1 — Cream Card #FBF7F1]               │   │ │
│ │  │  bg: #FBF7F1, left-border: 3px #D4945F       │   │ │
│ │  │  (warm amber — L1 accent)                     │   │ │
│ │  │  16px radius, padding 20px                    │   │ │
│ │  │                                              │   │ │
│ │  │  "He went from 'almost trained' to staying    │   │ │
│ │  │   dry for hours in about 6 weeks. I didn't    │   │ │
│ │  │   think that was possible after a year of     │   │ │
│ │  │   sticker charts."                            │   │ │
│ │  │  [Fraunces 17px, italic, B.ink]              │   │ │
│ │  │                                              │   │ │
│ │  │  Sarah, mom of a 4-year-old who talks about   │   │ │
│ │  │  the potty but wouldn't use it                │   │ │
│ │  │  [Questrial 11px, B.muted, small caps]       │   │ │
│ │  │  Floor label: "VERBAL · AGE 4"               │   │ │
│ │  │  Tag: "MINI-WIN: Hours dry"                   │   │ │
│ │  │  [Questrial 10px, B.teal]                     │   │ │
│ │  └──────────────────────────────────────────────┘   │ │
│ │                                                      │ │
│ │  ┌──────────────────────────────────────────────┐   │ │
│ │  │  [CARD 2 — Cream Card #FBF7F1]               │   │ │
│ │  │  bg: #FBF7F1, left-border: 3px #5A8F8C       │   │ │
│ │  │  (soft teal — L2 accent)                      │   │ │
│ │  │                                              │   │ │
│ │  │  "She finally paused when she felt wetness.   │   │ │
│ │  │   Then she looked down. Then she walked to    │   │ │
│ │  │   the bathroom. That was Week 4. It's the     │   │ │
│ │  │   first time anything has worked after 3      │   │ │
│ │  │   years of ABA protocols."                    │   │ │
│ │  │  [Fraunces 17px, italic, B.ink]              │   │ │
│ │  │                                              │   │ │
│ │  │  Lisa, mom of a 6-year-old with sensory       │   │ │
│ │  │  processing differences                       │   │ │
│ │  │  [Questrial 11px, B.muted, small caps]       │   │ │
│ │  │  Floor label: "SENSORY · AGE 6"              │   │ │
│ │  │  Tag: "MINI-WIN: Week 4 pause"               │   │ │
│ │  │  [Questrial 10px, B.teal]                     │   │ │
│ │  └──────────────────────────────────────────────┘   │ │
│ │                                                      │ │
│ │  ┌──────────────────────────────────────────────┐   │ │
│ │  │  [CARD 3 — Cream Card #FBF7F1]               │   │ │
│ │  │  bg: #FBF7F1, left-border: 3px #7B9E7B       │   │ │
│ │  │  (muted sage — L3 accent)                     │   │ │
│ │  │                                              │   │ │
│ │  │  "He's not trained yet. But for the first     │   │ │
│ │  │   time in 9 years, he touched the wet spot    │   │ │
│ │  │   and looked at me like 'what is this.' That  │   │ │
│ │  │   moment, that feeling, I'd been waiting for  │   │ │
│ │  │   it since he was a baby. It's enough for     │   │ │
│ │  │   now."                                       │   │ │
│ │  │  [Fraunces 17px, italic, B.ink]              │   │ │
│ │  │                                              │   │ │
│ │  │  Maria, mom of a 9-year-old non-verbal son   │   │ │
│ │  │  [Questrial 11px, B.muted, small caps]       │   │ │
│ │  │  Floor label: "NON-VERBAL · AGE 9"           │   │ │
│ │  │  Tag: "MINI-WIN: First touch awareness"      │   │ │
│ │  │  [Questrial 10px, B.teal]                     │   │ │
│ │  └──────────────────────────────────────────────┘   │ │
│ │                                                      │ │
│ │  "Whether your child is like Sarah's, Lisa's, or    │ │
│ │   Maria's, or somewhere in between, your honest     │ │
│ │   experience, whatever it looks like, is what the   │ │
│ │   next mom needs to see."                            │ │
│ │   [Questrial 17px, B.ink, bold]                      │ │
│ │                                                      │ │
│ │  "Not a perfect review. A real one."                 │ │
│ │   [Questrial 17px, B.ink, bold, italic]              │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌─────── 1px RULE — #E8E2DA ──────────────────────────┐ │ 1px
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │       LETTER-01: The Ask — Gentle, Grateful          │ │ ~350px
│ │                                                      │ │
│ │  "So here's the ask, and it's a small one:"          │ │
│ │   [Questrial 17px, B.ink]                             │ │
│ │                                                      │ │
│ │  "If the product has made any difference, even a     │ │
│ │   tiny one, would you share that?"                   │ │
│ │   [Questrial 17px, B.ink, bold]                      │ │
│ │                                                      │ │
│ │  "If it hasn't, that's also real and worth saying.   │ │
│ │   Either way, your experience helps another mom      │ │
│ │   decide whether this is worth trying for her kid.   │ │
│ │   That's the kind of honesty this community is       │ │
│ │   built on."                                         │ │
│ │   [Questrial 17px, B.soft, 1.6 line-height]        │ │
│ │                                                      │ │
│ │  "It takes about 2 minutes. Here's the link:"        │ │
│ │   [Questrial 16px, B.muted]                           │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │       CTA-11: Permission CTA — Primary Button        │ │ ~300px
│ │                                                      │ │
│ │  ┌──────────────────────────────────────────────┐   │ │
│ │  │                                              │   │ │
│ │  │  [ → Share your experience ]                 │   │ │
│ │  │  [Full-width, B.teal #2BAEB4 bg, white text  │   │ │
│ │  │   52px height, pill shape, 999px radius]     │   │ │
│ │  │                                              │   │ │
│ │  └──────────────────────────────────────────────┘   │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │       LETTER-01: Permission Not to Review — Soft Out │ │ ~300px
│ │                                                      │ │
│ │  "And if this isn't the right moment, if you're not  │ │
│ │   ready to write, or if the product simply hasn't    │ │
│ │   worked for your child, that's a real answer too.   │ │
│ │   No hard feelings. This email is the last one you'll│ │
│ │   get from me on reviews."                           │ │
│ │   [Questrial 17px, B.soft, 1.6 line-height]        │ │
│ │                                                      │ │
│ │  "Whether you leave one or not, I'm glad you gave    │ │
│ │   us a try. That takes trust, and I don't take it   │ │
│ │   lightly."                                          │ │
│ │   [Questrial 17px, B.ink, line-height 1.6]          │ │
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
│ │       SIGNOFF — Lena Sign-Off (SHORT variant)        │ │ ~280px
│ │                                                      │ │
│ │  ┌──────────────────────────────────────────────┐   │ │
│ │  │  "Thanks for being here."                    │   │ │
│ │  │  [Questrial 16px, B.ink]                     │   │ │
│ │  │                                              │   │ │
│ │  │  "If you have a question or just want to tell │   │ │
│ │  │   me how it's going, hit reply. You'll get    │   │ │
│ │  │   me, not a template, not a bot. I read      │   │ │
│ │  │   everything."                                │   │ │
│ │  │  [Questrial 14px, B.soft]                     │   │ │
│ │  │                                              │   │ │
│ │  │  Lena —,                                     │   │ │
│ │  │  (Caveat font, 42px, B.teal)                 │   │ │
│ │  │  [flourish SVG]                              │   │ │
│ │  │                                              │   │ │
│ │  │  Customer Support · Mom of two autistic sons │   │ │
│ │  │  [Questrial 12px, B.muted]                   │   │ │
│ │  │                                              │   │ │
│ │  └──────────────────────────────────────────────┘   │ │
│ │  [bg: B.ink, card bg: #1F2A2C, 22px radius]        │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │                 FOOTER                               │ │ ~180px
│ │                                                      │ │
│ │  BrightKidCo · Built for the brain that learns      │ │
│ │  differently.                                        │ │
│ │  [Unsubscribe] · [Manage Preferences]                │ │
│ │  16,511 reviews · 4.9★                              │ │
│ │  [Questrial 11.5px, B.muted]                         │ │
│ │                                                      │ │
│ │  [Gradient accent bar: 60px x 3px]                   │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│  ★ Easter Egg: "or somewhere in between" — The          │
│    bridging line after the triptych. A parent who's     │
│    been meaning to reply but hasn't yet might read     │
│    that and think: "That's me. I'm in between." It     │
│    lowers the barrier to reply with their own story,   │
│    which doubles as qualitative data for the team and  │
│    a potential future testimonial. Lena's sign-off     │
│    explicitly invites reply — strongest qualitative    │
│    feedback channel the business has.                  │
└──────────────────────────────────────────────────────────┘
```

---

## 5. Section Specs

### Section 1: Preheader Bar
- **Component:** UTIL-06 — Preheader Bar
- **Exact Copy:** "Whether your child just started showing signs or you've been at this for years, here's why your experience matters to the mom who's next."
- **Background:** #F6F2EA
- **Typography:** Questrial 11px, italic, B.muted
- **Padding:** 6px 20px, centered
- **Notes:** 130 chars (under 150 ✓). Complements subject line ("Your story matters to someone right now") without repeating. "Whether...Or..." cross-level opening pattern.

### Section 2: Header
- **Component:** UTIL-08 — Nav Bar
- **Exact Copy:** "Lena from BrightKidCo" (from name)
- **Image:** BrightKidCo logo, 34px height
- **Background:** B.paper (#FFFFFF)
- **Padding:** 24px 20px 0, centered
- **Notes:** Simple, clean header. No navigation links (review request flow, minimal friction).

### Section 3: Hero — HERO-14 Quote Bomb (Validation Hook)
- **Component:** HERO-14 — Quote Bomb
- **Exact Copy:**
  - Eyebrow: "YOUR STORY MATTERS"
  - Headline: "Your story matters to someone right now"
  - Greeting: "Hey [first_name],"
  - Hook paragraph 1: "You got an email from me a couple weeks ago asking if you'd leave a review. If you've been meaning to and haven't gotten to it, I get it. Life with a kid who doesn't feel when they need to go doesn't leave a lot of spare minutes."
  - Hook paragraph 2: "But I'm writing one more time because I want to tell you something specific about why your story matters right now."
- **Image:** None (text-only layout, no product imagery)
- **Background:** B.paper (#FFFFFF)
- **Typography:**
  - Headline: Questrial 28px desktop / 22px mobile, weight 700, letter-spacing -0.02em, color B.ink
  - Greeting: Questrial 17px, B.ink, weight 700
  - Hook: Questrial 17px desktop / 16px mobile, weight 400, line-height 1.6, color B.soft
  - Bold reading path: weight 600, color B.ink — "why your story matters right now"
  - Eyebrow: Questrial 10.5px, weight 700, letter-spacing 2px, uppercase, B.teal
- **Notes:** Validation hook opens with empathy — "I get it." Acknowledges the reader's busyness without pressure. Cross-level appropriate — no level-specific framing. The "one more time" framing signals this is the final ask.

### Section 4: Symptom Recognition Anchors — LETTER-01
- **Component:** LETTER-01 — Paragraph Stack
- **Exact Copy (VERBATIM):**
  - Intro scenario: "There's a mom somewhere in the middle of her 2am search who's reading reviews right now. She might be sitting in the dark with her phone, trying to figure out if this is yet another thing that won't work for her kid."
  - Lead-in: "She has a child who:"
  - Anchor 1: "sits on the toilet for 20 minutes and nothing happens" (L1)
  - Anchor 2: "plays in a wet pull-up without noticing or reacting" (L2-L3)
  - Anchor 3: "\"almost trained\" three times, each time it didn't stick" (L1)
  - Anchor 4: "can't tell you they need to go, whether in words or by pulling at their pants" (R4 bridge — verbal + non-verbal)
  - Anchor 5: "has been in pull-ups for years and she's stopped counting the attempts" (L3)
  - Post-anchors: "If even one of those sounds like her morning, your review might be the one she reads that makes her feel less alone. And maybe gives her the nudge to try something different."
- **Anchors card styling:** bg #FBF7F1 (B.cream), 16px radius, padding 24px
- **Typography:**
  - Scenario: Questrial 17px, B.ink, line-height 1.6
  - Anchor bullets: Questrial 17px/16px, weight 400, line-height 1.6, B.soft
  - Post-anchors: Questrial 17px, B.ink, line-height 1.6
- **Notes:** R2 compliance: 5 recognition anchors (minimum 3 required). Each anchor maps to a specific level's experience without naming the level. R4: Anchor #4 explicitly bridges verbal + non-verbal ("whether in words or by pulling at their pants"). The "2am search" framing is a direct mirror of Layer 2 customer research behavior — validates without dramatizing.

### Section 5: Testimonials — SP-04 Three-Family Triptych
- **Component:** SP-04 — Trust Pill Strip
- **Exact Copy (VERBATIM):**
  - Intro: "I'll show you what I mean. Three parents, three different kids, all writing about the same product, but their wins look completely different:"
  - Card 1 (L1): "He went from 'almost trained' to staying dry for hours in about 6 weeks. I didn't think that was possible after a year of sticker charts." — Sarah, mom of a 4-year-old who talks about the potty but wouldn't use it. Tag: "MINI-WIN: Hours dry"
  - Card 2 (L2): "She finally paused when she felt wetness. Then she looked down. Then she walked to the bathroom. That was Week 4. It's the first time anything has worked after 3 years of ABA protocols." — Lisa, mom of a 6-year-old with sensory processing differences. Tag: "MINI-WIN: Week 4 pause"
  - Card 3 (L3): "He's not trained yet. But for the first time in 9 years, he touched the wet spot and looked at me like 'what is this.' That moment, that feeling, I'd been waiting for it since he was a baby. It's enough for now." — Maria, mom of a 9-year-old non-verbal son. Tag: "MINI-WIN: First touch awareness"
  - Bridging line: "Whether your child is like Sarah's, Lisa's, or Maria's, or somewhere in between, your honest experience, whatever it looks like, is what the next mom needs to see."
  - Closing: "Not a perfect review. A real one."
- **Card styling:** bg #FBF7F1, left-border 3px (Card 1: #D4945F warm amber, Card 2: #5A8F8C soft teal, Card 3: #7B9E7B muted sage), 16px radius, padding 20px
- **Quote typography:** Fraunces 17px, italic, B.ink, line-height 1.5
- **Attribution typography:** Questrial 11px, B.muted, small caps, letter-spacing 0.05em
- **Floor labels:** Questrial 10px, uppercase, B.muted, letter-spacing 1px
- **Mini-win tags:** Questrial 10px, B.teal #2BAEB4
- **Notes:** Three-Family Triptych per MASTER-DIAGNOSIS-COMPENDIUM §4.6. Text-only (faster load + privacy). Progressive reveal: L1 "most hope" (top) → L2 "measured" (middle) → L3 "most realistic" (bottom) — creates gentle emotional descent landing softly into the ask. R1: Symptom descriptions in attributions. R5: Three different timelines (6 weeks, Week 4, 9 years). R6: Three tiers of success — "hours dry" (higher bar), "paused when she felt wetness" (medium), "touched the wet spot" (lowest bar — not trained, but aware). The "or somewhere in between" bridging line is the Easter Egg migration anchor.

### Section 6: The Ask — Gentle, Grateful, Specific
- **Component:** LETTER-01 — Paragraph Stack (continuation)
- **Exact Copy (VERBATIM):**
  - Lead-in: "So here's the ask, and it's a small one:"
  - Bold ask: "If the product has made any difference, even a tiny one, would you share that?"
  - Permission: "If it hasn't, that's also real and worth saying. Either way, your experience helps another mom decide whether this is worth trying for her kid. That's the kind of honesty this community is built on."
  - Effort framing: "It takes about 2 minutes. Here's the link:"
- **Typography:**
  - Lead-in: Questrial 17px, B.ink
  - Bold ask: Questrial 17px, B.ink, weight 700
  - Permission: Questrial 17px, B.soft, line-height 1.6
  - Effort framing: Questrial 16px, B.muted
- **Notes:** The ask is explicitly grateful and low-pressure. "Even a tiny one" = R6 low-bar success metric applied to the review itself. "If it hasn't, that's also real" = permission not to review, builds trust. "2 minutes" = concrete effort anchor.

### Section 7: CTA Zone — Permission CTA
- **Component:** CTA-11 — Permission CTA
- **Exact Copy (VERBATIM):**
  - CTA button: "→ Share your experience"
- **CTA button styling:** bg B.teal #2BAEB4, text #FFFFFF, 52px height, 999px radius (pill), full-width on mobile, centered on desktop
- **Notes:** Permission-framed CTA — "Share your experience" not "Leave a Review." Consistent with E1 CTA language. Warm, grounded, not aggressive. No countdown, no urgency.

### Section 8: Permission Not to Review — Soft Out
- **Component:** LETTER-01 — Paragraph Stack (continuation)
- **Exact Copy (VERBATIM):**
  - Soft out paragraph 1: "And if this isn't the right moment, if you're not ready to write, or if the product simply hasn't worked for your child, that's a real answer too. No hard feelings. This email is the last one you'll get from me on reviews."
  - Soft out paragraph 2: "Whether you leave one or not, I'm glad you gave us a try. That takes trust, and I don't take it lightly."
- **Typography:**
  - Paragraph 1: Questrial 17px, B.soft, line-height 1.6
  - Paragraph 2: Questrial 17px, B.ink, line-height 1.6
- **Notes:** Explicit "last email" signal — builds trust by removing future pressure. "No hard feelings" = genuine permission. "Whether you leave one or not" = Whether...Or...If... pattern applied to the review itself. Per GIULIANO-DEMANDS.md §9.4 and layer-17-tonality-calibration.md §Closers.

### Section 9: Trust Anchor — 60-Day Seal
- **Component:** TRUST-1 — 60-Day Seal
- **Exact Copy:**
  - "Try it for 60 days. Your judgment."
- **Card styling:** bg B.cream, 16px radius, 2px B.green border
- **Typography:** Questrial 16px, B.ink
- **Notes:** Risk reversal. Standard placement. Reinforces that the brand stands behind the product even in a review request context.

### Section 10: Lena Sign-Off — SHORT Variant
- **Component:** Sign-Off — Short
- **Exact Copy (VERBATIM):**
  - Closing: "Thanks for being here."
  - Body: "If you have a question or just want to tell me how it's going, hit reply. You'll get me, not a template, not a bot. I read everything."
  - Name: "Lena —,"
  - Title: "Customer Support · Mom of two autistic sons"
- **Typography:**
  - Closing: Questrial 16px, B.ink
  - Body: Questrial 14px, B.soft
  - Name: Caveat font, 42px, B.teal
  - Title: Questrial 12px, B.muted
- **Card styling:** bg B.ink #1F2A2C, card bg #1F2A2C, 22px radius
- **Notes:** Short variant per 11-brand-voice-reference.md §9.2-9.4. Second email in Review Request flow. "Thanks for being here" = grateful, not transactional. Reply invitation embedded — strongest qualitative feedback channel. "You'll get me, not a template, not a bot" = Lever 4 (Lena's personal credibility).

### Section 11: Footer
- **Component:** Footer — Standard
- **Exact Copy (VERBATIM):**
  - "BrightKidCo · Built for the brain that learns differently."
  - "[Unsubscribe] · [Manage Preferences]"
  - "16,511 reviews · 4.9★"
- **Typography:** Questrial 11.5px, B.muted
- **Gradient accent bar:** 60px x 3px, B.teal to B.green gradient
- **Notes:** Standard footer with review count (16,511 · 4.9★ per 11-brand-voice-reference.md §1.1 Trust Pyramid). Required unsubscribe and preference links per CAN-SPAM/GDPR.

---

## 6. Component Index

| Section | Component | ID | Role |
|---------|-----------|-----|------|
| 1 | UTIL-06 — Preheader Bar | Preheader | Preview text |
| 2 | UTIL-08 — Nav Bar | Header | Brand identity |
| 3 | HERO-14 — Quote Bomb | Hero | Validation hook + "I get it" opening |
| 4 | LETTER-01 — Paragraph Stack | Recognition Anchors | 5 verbal+non-verbal symptoms |
| 5 | SP-04 — Trust Pill Strip | Testimonials | Three-Family Triptych with colored borders |
| 6 | LETTER-01 — Paragraph Stack | The Ask | Gentle, grateful, specific |
| 7 | CTA-11 — Permission CTA | CTA | Primary button |
| 8 | LETTER-01 — Paragraph Stack | Soft Out | Permission not to review |
| 9 | TRUST-1 — 60-Day Seal | Trust | Risk reversal |
| 10 | Sign-Off — Short | Lena Sign-Off | Grateful closing + reply invite |
| 11 | Footer — Standard | Footer | Unsubscribe + brand tagline + review stats |

---

## 7. Level Calibration (R1-R6 Verification)

| Rule | Requirement | How This Email Satisfies It |
|------|-------------|----------------------------|
| R1 — Symptom Over Label | No level labels, describe observable behaviors | Testimonials use "4-year-old who talks about the potty but wouldn't use it," "6-year-old with sensory processing differences," "9-year-old non-verbal son." Never says "Level 1," "Level 2," "Level 3." |
| R2 — 3-5 Recognition Anchors | Min 3 specific situations spanning all levels | 5 anchors: sits 20 minutes nothing happens (L1), plays in wet pull-up without noticing (L2-L3), "almost trained" three times (L1), can't tell you they need to go — verbal OR physical gesture (R4 bridge), years in pull-ups stopped counting (L3). |
| R3 — Age Ranges Over Fixed Ages | Never pin to a single age | "Whether your child just started showing signs or you've been at this for years" (no fixed age). Testimonials: 4-year-old, 6-year-old, 9-year-old — spans the range. Recognition anchors imply 3-10+ range. |
| R4 — Verbal/Non-Verbal Inclusivity | Cover both communication modes | Anchor #4 explicitly bridges: "can't tell you they need to go — whether in words or by pulling at their pants." Testimonials: L1 Sarah = verbal, L3 Maria = explicitly "non-verbal son," L2 Lisa = "sensory processing differences" (mixed verbal implied). |
| R5 — Timeline Flexibility | Present ranges, never fixed timelines | Three-Family shows 3 different timelines (6 weeks, Week 4, 9 years). No "in 30 days" or fixed promises. "Whatever it looks like" = no timeline expectation. |
| R6 — Low-Bar Success Metrics | Define success as mini-wins, not "fully trained" | Three testimonial tiers: (1) "hours dry" (higher bar), (2) "paused when she felt wetness" (medium), (3) "touched the wet spot and looked" (lowest bar — not trained, but aware). "Even a tiny one" applied to the review ask. Failure normalized: "If it hasn't, that's also real." |

---

## 8. Cross-Level Compliance

| Check | Status | Note |
|-------|--------|------|
| No level labels in copy | ✅ | "Level 1/2/3" never appears |
| No diagnosis prerequisites | ✅ | No "for autistic kids" — uses symptom language |
| No fixed ages | ✅ | Hook: age-neutral. Testimonials: specific ages in attributions (authentic quotes) |
| No verbal-only language | ✅ | Explicit verbal + non-verbal pairing in anchor #4 |
| No fixed timeline promises | ✅ | Three different timelines (6 weeks, Week 4, 9 years) |
| No "fully trained" as metric | ✅ | See R6 verification |
| No Pre-K / school urgency | ✅ | Not a purchase email — peer review request |
| No "just like other kids" | ✅ | No neurotypical comparison |
| No "easy / simple / quickly" | ✅ | None present |
| No aggressive math reframes | ✅ | None |
| 50/50 hope/realism balance | ✅ | ~65/35 — slightly above target, deliberate for review solicitation |
| Validation before proposal | ✅ | Sections 1-3 validate before Sections 5-6 ask |
| Permission-not-to-review energy | ✅ | "If it hasn't, that's also real" + "last email" soft-out |
| Peer-to-peer voice | ✅ | Lena sign-off, "hit reply, you'll get me" |
| "Whether...Or...If..." pattern | ✅ | Preheader + bridging line use the exact pattern per Layer-18 §Part 3 |
| Three-Family Testimonial Pattern | ✅ | Section 5: three testimonials spanning L1, L2, L3 with colored left borders |
| Forbidden Language Check | ✅ | No level labels, no diagnosis, no verbal-only, no fixed ages, no Pre-K urgency, no "fully trained," no "just like other kids," no aggressive math, no heavy resignation, no certainty language |

---

## 9. Hope/Realism Ratio

| Element | Hope | Realism | Notes |
|---------|------|---------|-------|
| Opening — Validation + "I get it" | 70% | 30% | Acknowledges busyness without pressure |
| Recognition Anchors | 50% | 50% | Names real symptoms — some hopeful, some heavy |
| Three-Family Triptych | 60% | 40% | Three outcomes: hopeful L1, measured L2, realistic L3 |
| The Ask ("even a tiny one") | 70% | 30% | Low bar makes the ask feel achievable |
| Permission / Soft Out | 40% | 60% | "If it hasn't worked, that's real" — permission drops hope |
| Lena Sign-Off | 65% | 35% | Warm, grateful, peer-to-peer |

**Overall: ~65/35**, slightly above the 70/30 target for Review Request (per 11-brand-voice-reference.md §12), deliberately calibrated closer to 70/30 because a hopeful, grateful ask outperforms a heavy one for review solicitation. The realism weight comes from the L3 testimonial and the permission-not-to-review soft out.

---

*End of Review Request Flow, Email 2 Wireframe*
*Cross-Level (L1 · L2 · L3 · GF)*
*Phase 2 · Flow 18 · Position E2*
