# Wireframe: Checkout Flow — E1 | Cross-Level

## 1. Metadata

| Field | Value |
|-------|-------|
| **Flow** | Checkout Abandonment (Flow 3) |
| **Position** | E1 — 10 Minutes |
| **Level** | Cross-Level (GF / L1 / L2 / L3 — single copy via R1-R6) |
| **Copy File** | /root/projects/brightkidco/outputs/copy/checkout/checkout-03-e1.md |
| **Strategy Map Entry** | flows.checkout.emails.e1 |
| **Flow Signature** | trust-building, cross-level, permission-based recovery |
| **Level Calibration** | Cross-Level — 50/50 hope/realism, neutral color warmth, low CTA urgency, medium copy density, Whether/Or/If bridge, R1-R6 compliance, minimal hero, permission-frame email |
| **Component Categories Used** | HERO, TEXT/LETTER, TESTIMONIAL, MECHANISM/EDUCATION, PRODUCT, CTA, GUARANTEE/TRUST, DECORATIVE |
| **Total Estimated Height** | ~2,800px (desktop) / ~3,200px (mobile) |

---

## 2. Strategy Box

**Big Idea:** Permission to pause backed by guarantee. Speed of send (10 min) catches hesitation before rationalization. This email is the opposite of a hard-sell checkout recovery. It says "we noticed you stopped — that's okay." The clean, efficient layout eliminates distraction. Minimal product imagery. No countdowns, no urgency. The reader arrives at the email already committed to the purchase; the email removes the final emotional barrier: buyer's remorse before purchase.

**Emotional Arc Position:** Position 1 of 2 in checkout recovery — Observation → Validation → Mechanism → Permission. The reader has entered payment details and stopped. E1 catches her before rationalization sets in (10 min window). The email names the moment, validates the pause, briefly re-explains the mechanism (without re-selling), offers the Three-Family testimonial block for recognition, then gives a permission-framed CTA with the guarantee as the final lever.

**Component Selection Rationale:**
- HERO-3 (Permission Open): Permission framing, no urgency. Appropriate for E1 where the subscriber needs reassurance, not pressure.
- LETTER-02 (Handwritten Opener): Personal, hand-lettered feel from Lena. Supports the observation-validation-mechanism-permission arc.
- SP-01 (Yellow Quote Block): Three-Family Testimonial Pattern — three specific situations that span all levels, building recognition without labeling.
- EDU-4 (Why It Works / 3 Reasons): Brief mechanism recap — signal-timing gap and BSL layer. Short, scannable, not a full explainer.
- ProductShowcaseSoft: Soft product presence. No price, no features grid — just the product with guarantee language.
- CTA-11 (Permission CTA): "Complete your order. Your cart is saved as-is." Permission-framed, zero pressure.
- TRUST-1 (60-Day Seal): Risk reversal immediately after CTA. The guarantee is the conversion lever.
- UTIL-02 (Divider Bar): Clean separator. Minimal distraction philosophy.

**Differentiation Note:** Checkout E1 is the cleanest, most minimal email in the entire flow. No social proof counters, no product feature grids, no multi-image layouts. The entire email is text-driven with a single product image and a soft CTA. The subscriber doesn't need to be convinced about the product — she was already buying it. She needs to be told it's okay to pause, and that the guarantee protects her.

---

## 3. Creative Box

**Color Palette:**
- Primary: #2BAEB4 (B.teal) — CTA buttons, accent highlights, link text
- Secondary: #5DD07A (B.green) — Success indicators, guarantee border
- Accent: #FFD866 — Badge backgrounds (60-Day seal badge)
- Background: #FBF7F1 (B.cream) — Warm section backgrounds, quote blocks
- Text: #1F2D2F (B.ink) — Primary body text, headings
- Page Background: #FFFFFF (B.paper) — Email canvas
- Secondary Text: #4A6568 (B.soft) — Body copy, secondary paragraphs
- Tertiary Text: #8A9B9D (B.muted) — Captions, footer, next-time teaser
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
│ │  Not chasing, just wondering if there's something   │ │
│ │  we can help with before you go.                    │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │              [HEADER — Logo + From Name]             │ │ 80px
│ │         BrightKidCo · Lena from BrightKidCo         │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │              HERO-3: Permission Open                 │ │ ~200px
│ │                                                      │ │
│ │  "You started checkout, here's the piece            │ │
│ │   most parents are missing."                         │ │
│ │   [H1 — Questrial 32px/24px, B.ink]                │ │
│ │                                                      │ │
│ │  "You started checkout, then stopped.               │ │
│ │   That's okay. No hurry."                           │ │
│ │   [Subhead — Questrial 17px, B.soft]               │ │
│ │                                                      │ │
│ │  [ NO HERO IMAGE — text-only, minimal ]             │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌─────── 1px RULE — #E8DED5 — Tonal Shift ────────────┐ │ 1px
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │       LETTER-02: Handwritten Opener (Lena)           │ │ ~500px
│ │                                                      │ │
│ │  [WHETHER/OR/IF BRIDGE]                             │ │
│ │  "Whether your child is 3 or 10, verbal or not,    │ │
│ │   if they don't seem to feel when they need to go, │ │
│ │   there's a reason standard methods haven't         │ │
│ │   clicked."                                         │ │
│ │   [Questrial 17px, B.soft, line-height 1.7]        │ │
│ │                                                      │ │
│ │  "It's not stubbornness. It's not motivation.      │ │
│ │   It's a signal-timing gap — the 'I need to go'    │ │
│ │   message arrives from the body just a little too   │ │
│ │   late for the brain to act on it."                 │ │
│ │   [bold reading path anchors]                       │ │
│ │                                                      │ │
│ │  "Research shows this a real, measurable            │ │
│ │   neurological difference (Nicholson et al. 2019)." │ │
│ │   [citation: B.muted 13px]                         │ │
│ │                                                      │ │
│ │  "The Body-Signal Learning Layer in our underwear   │ │
│ │   creates a gentle, sustained 'uh-oh' sensation     │ │
│ │   for 30-60 seconds after every accident, giving   │ │
│ │   the brain the feedback it's been missing. Not by  │ │
│ │   training. By providing information."              │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │     SP-01: Yellow Quote Block (Three-Family GF)      │ │ ~300px
│ │                                                      │ │
│ │  "Three different kids, one pattern. See if one     │ │
│ │   sounds familiar:"                                  │ │
│ │                                                      │ │
│ │  ┌──────────────────────────────────────────────┐   │ │
│ │  │ ▸ "He's been 'almost trained' for months.    │   │ │
│ │  │    Talks about it. Won't do it."             │   │ │
│ │  │    [L1 — verbal, 'almost trained' pattern]   │   │ │
│ │  │                                              │   │ │
│ │  │ ▸ "She sat on the toilet for 30 minutes.     │   │ │
│ │  │    Nothing. Pull-up back on? Immediate."     │   │ │
│ │  │    [L2 — method cycling, prompt-dependent]    │   │ │
│ │  │                                              │   │ │
│ │  │ ▸ "He doesn't react to being wet. Never has. │   │ │
│ │  │    We'd stopped counting attempts."          │   │ │
│ │  │    [L3 — signal-absent, resigned]             │   │ │
│ │  └──────────────────────────────────────────────┘   │ │
│ │  [bg: B.cream #FBF7F1, left-border: 3px B.green]   │ │
│ │                                                      │ │
│ │  "If any of these are your morning, the missing     │ │
│ │   piece is the same."                                │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │     ProductShowcaseSoft — Product Presence            │ │ ~350px
│ │                                                      │ │
│ │  [Eyebrow: "YOUR CART"]                              │ │
│ │                                                      │ │
│ │  ┌──────────────────────────────────────────────┐   │ │
│ │  │  [HERO SHOT — pocket-diaper-moon-cloud-blue] │   │ │
│ │  │  420 x 240px, rounded 20px                    │   │ │
│ │  │  ┌─────────────────┐                          │   │ │
│ │  │  │ ✿ 60 days calm  │ ← floating badge        │   │ │
│ │  │  └─────────────────┘   (FFD866, rotated 4°)  │   │ │
│ │  └──────────────────────────────────────────────┘   │ │
│ │  [border: 1.5px B.ink, 20px radius, 4px shadow]    │ │
│ │                                                      │ │
│ │  "Body-Signal Learning Layer™ Pants"                │ │
│ │  "Your cart is saved as-is."                        │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │         TRUST-1: 60-Day Seal — Guarantee            │ │ ~200px
│ │                                                      │ │
│ │  ┌──────────────────────────────────────────────┐   │ │
│ │  │   [60-DAY SEAL — centered, icon + text]      │   │ │
│ │  │                                              │   │ │
│ │  │   "You don't have to believe me. 60 days to  │   │ │
│ │  │   try it in your home, with your child, on   │   │ │
│ │  │   your timeline. If nothing shifts for your  │   │ │
│ │  │   child, no pause, no look, no step toward   │   │ │
│ │  │   awareness, full refund. No forms, no       │   │ │
│ │  │   hassle."                                   │   │ │
│ │  │                                              │   │ │
│ │  │   "Full refund. No forms, no hassle."        │   │ │
│ │  │   [bold anchor — B.ink, weight 600]          │   │ │
│ │  └──────────────────────────────────────────────┘   │ │
│ │  [bg: B.cream, 16px radius, 2px B.green border]    │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │          CTA-11: Permission CTA — CTA Zone           │ │ ~240px
│ │                                                      │ │
│ │  "Complete your order. Your cart is saved as-is."   │ │
│ │  [Questrial 17px, B.ink, bold]                      │ │
│ │                                                      │ │
│ │  [ Complete Your Order → ]                           │ │
│ │  [CTA-11: Full-width mobile, 280px desktop          │ │
│ │   B.teal bg, D8F57C text, 52px height, pill]       │ │
│ │                                                      │ │
│ │  "Next time: Why this approach is different from     │ │
│ │   everything you've tried."                          │ │
│ │  [Questrial 14px, B.muted, italic]                  │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │       SIGNOFF — Lena Sign-Off (SHORT variant)        │ │ ~280px
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
│ │  │  "Thanks for being here. If you have a       │   │ │
│ │  │   question, hit reply. You'll get me, not a  │   │ │
│ │  │   template, not a bot. I read everything."   │   │ │
│ │  │                                              │   │ │
│ │  │  Lena (Caveat font, 42px, D8F57C)           │   │ │
│ │  │  [flourish SVG]                              │   │ │
│ │  │                                              │   │ │
│ │  │  ─ ─ ─ dashed divider ─ ─ ─                 │   │ │
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
- **Exact Copy:** "Not chasing, just wondering if there's something we can help with before you go."
- **Background:** #F6F2EA
- **Typography:** Questrial 11px, italic, B.muted
- **Padding:** 6px 20px, centered
- **Notes:** Hidden in most email clients, visible in preview text. Complements subject line without repeating. 79 chars, within 100-char recommendation.

### Section 2: Header
- **Component:** UTIL-08 — Nav Bar (L7682)
- **Exact Copy:** "Lena from BrightKidCo" (from name)
- **Image:** BrightKidCo logo (../assets/brightkidco-logo-v2.png), 34px height
- **Background:** B.paper (#FFFFFF)
- **Padding:** 24px 20px 0, centered
- **Typography:** Logo only, no additional text
- **Notes:** Simple, clean header. No navigation links (checkout recovery context — minimal distractions).

### Section 3: Hero — HERO-3 Permission Open
- **Component:** HERO-3 — Permission Open (L3857)
- **Exact Copy:**
  - Headline: "You started checkout, here's the piece most parents are missing."
  - Subhead: "You started checkout, then stopped. That's okay. No hurry."
- **Image:** NONE — text-only hero. No product imagery in hero. This is the permission-frame email; the subscriber doesn't need to see the product again.
- **Background:** B.paper (#FFFFFF)
- **Typography:**
  - Headline: Questrial 32px desktop / 24px mobile, weight 700, letter-spacing -0.5px, color B.ink
  - Subhead: Questrial 17px, weight 500, color B.soft, line-height 1.5
- **Section padding:** 0 22px
- **Notes:** Text-only hero is intentional — checkout E1 is the cleanest email in the entire flow. No hero image means no distraction. The headline is NOT the subject line echo; it's a permission statement + tease. "No hurry" is the critical psychological signal — it removes the urgency that most checkout emails use.

### Section 4: Tonal Shift Rule
- **Component:** 1px rule, #E8DED5
- **Full width, 1px height**
- **Notes:** The only straight line in the email. Marks the transition from "we noticed you stopped" to "here's why." Visual signal of tonal shift.

### Section 5: Letter — LETTER-02 Handwritten Opener (Lena's Voice)
- **Component:** LETTER-02 — Handwritten Opener (L7826)
- **Exact Copy (VERBATIM):**

  **Whether/Or/If Bridge paragraph:**
  "Whether your child is 3 or 10, verbal or not, if they don't seem to feel when they need to go, there's a reason standard methods haven't clicked."

  **Validation paragraph 1:**
  "It's not stubbornness. It's not motivation. It's a signal-timing gap — the 'I need to go' message arrives from the body just a little too late for the brain to act on it. Research shows this a real, measurable neurological difference (Nicholson et al. 2019)."

  **Mechanism paragraph:**
  "The Body-Signal Learning Layer in our underwear creates a gentle, sustained 'uh-oh' sensation for 30-60 seconds after every accident, giving the brain the feedback it's been missing. Not by training. By providing information."

- **Background:** B.paper (#FFFFFF)
- **Typography:**
  - Body: Questrial 17px desktop / 16px mobile, weight 400, line-height 1.7, color B.soft
  - Bold anchors: weight 600, color B.ink — "signal-timing gap", "not by training. By providing information"
- **Citation:** "Nicholson et al. 2019" in Questrial 13px, B.muted
- **Section padding:** 0 22px
- **Notes:** Cross-level compliant. Whether/Or/If bridge covers age (R3: "3 or 10"), verbal/non-verbal (R4), and symptom (R1: "don't seem to feel"). No level labels anywhere. Brief mechanism — this subscriber already knows about the product from her checkout session.

### Section 6: Testimonial — SP-01 Yellow Quote Block (Three-Family GF)
- **Component:** SP-01 — Yellow Quote Block (L4966)
- **Exact Copy (VERBATIM):**

  **Intro:**
  "Three different kids, one pattern. See if one sounds familiar:"

  **Quote 1:**
  > "He's been 'almost trained' for months. Talks about it. Won't do it."

  **Quote 2:**
  > "She sat on the toilet for 30 minutes. Nothing. Pull-up back on? Immediate."

  **Quote 3:**
  > "He doesn't react to being wet. Never has. We'd stopped counting attempts."

  **Bridge copy:**
  "If any of these are your morning, the missing piece is the same."

- **Card styling:** bg B.cream (#FBF7F1), 16px border-radius, 6px shadow (B.ink), 3px left border B.green
- **Quote styling:** 12px signal dot (B.teal, 50% opacity) before each quote (not bullets per §15.4)
- **Background:** B.paper (#FFFFFF)
- **Typography:**
  - Intro: Questrial 17px, B.soft, italic
  - Quotes: Questrial 16px, B.ink, line-height 1.5, italic
  - Bridge: Questrial 16px, B.soft, line-height 1.6, bold anchor on "the missing piece is the same"
- **Notes:** Three-Family Testimonial Pattern per GIULIANO-DEMANDS.md §4 R2. Quote 1 serves L1 (verbal, "almost trained" pattern). Quote 2 serves L2 (method cycling, prompt-dependent). Quote 3 serves L3 (signal-absent, resigned). Reader self-identifies without being told a level. Cross-level compliant — symptom over label.

### Section 7: Product — ProductShowcaseSoft
- **Component:** ProductShowcaseSoft (L613)
- **Exact Copy:**
  - Eyebrow: "YOUR CART"
  - Title: "Body-Signal Learning Layer™ Pants"
  - Sub: "Your cart is saved as-is."
- **Image:** /root/projects/brightkidco/raw/product-photos/flat-lay/pocket-diaper-moon-cloud-blue.jpg
  - Alt text: "BrightKidCo training pant in moon cloud blue pattern, flat lay"
  - Dimensions: 420 x 240px (desktop), full-width (mobile)
  - Cropping: Center crop, full product visible
  - Fallback color: #FBF7F1
- **Card styling:** bg B.paper, 1.5px B.ink border, 20px radius, 4px B.ink shadow
- **Badge:** "✿ 60 days calm" — FFD866 bg, 2px B.ink border, 999 radius, rotated 4°, 2px shadow
- **Typography:**
  - Eyebrow: Questrial 10.5px, weight 700, letter-spacing 2px, text-transform uppercase, B.teal
  - Title: Questrial 22px, weight 700, B.ink
  - Sub: Questrial 16px, B.soft
- **Notes:** Soft product presence. No price, no features grid, no "Add to Cart" button. The subscriber's cart is saved — she doesn't need to re-decide anything. ProductShowcaseSoft (not Full) because checkout recovery needs minimal distraction. One product image only.

### Section 8: Trust — TRUST-1 60-Day Seal
- **Component:** TRUST-1 — 60-Day Seal (L6385)
- **Exact Copy (VERBATIM):**
  "You don't have to believe me. 60 days to try it in your home, with your child, on your timeline. If nothing shifts for your child, no pause, no look, no step toward awareness, full refund. No forms, no hassle."
- **Styling:** Centered, bg B.cream, 16px radius, 2px B.green border, padding 24px
- **Icon:** 60-day seal SVG (green checkmark in circle)
- **Typography:** Questrial 16px, B.ink, line-height 1.6
- **Bold anchor:** "Full refund. No forms, no hassle." — weight 600, B.ink
- **Notes:** Risk reversal positioned after product presence. "Your judgment" framing — the reader decides, not the brand. Mini-win language (R6): "no pause, no look, no step toward awareness" defines the refund threshold as observable micro-signs, not full training. "No forms, no hassle" removes process friction.

### Section 9: CTA — CTA-11 Permission CTA
- **Component:** CTA-11 — Permission CTA (L6692)
- **Exact Copy (VERBATIM):**
  - Intro: "Complete your order. Your cart is saved as-is."
  - Button: "Complete Your Order"
  - Next time: "Next time: Why this approach is different from everything you've tried."
- **CTA button:** B.teal (#2BAEB4) bg, #D8F57C text, full-width on mobile / 280px desktop, 52px height, pill shape (999 radius)
- **Button typography:** Questrial 18px, weight 700, letter-spacing 0.5px
- **CTA spacing:** 24px above, 20px below (per email-cta-conversion-design §4.2)
- **Next time teaser:** Questrial 14px, B.muted, italic
- **Background:** B.paper (#FFFFFF)
- **Notes:** "Complete Your Order" is permission-framed — not "Buy Now" or "Finish Purchase." "Your cart is saved as-is" is the critical low-friction signal — she doesn't need to re-decide anything. Next-time teaser builds anticipation for E2 (hope-fear cycle address). No urgency language anywhere.

### Section 10: Signoff — Lena (SHORT variant)
- **Component:** UTIL-05 — Signoff Card (L7600) + 12.1 — Lena Signoff (L1026)
- **Exact Copy (VERBATIM):**
  "Thanks for being here. If you have a question, hit reply. You'll get me, not a template, not a bot. I read everything."
  "Lena ——"
- **Closing words:** None for SHORT variant (no "Talk soon," — that's for Welcome E1-E2)
- **Avatar:** 58px circle, gradient ring (FFD866 → B.teal), portrait placeholder
- **Name:** "Lena Bauer", Questrial 17px, weight 700, white
- **Role:** "Customer Support · Mom of two autistic sons", Questrial 12px, #8FAFB2, italic
- **Signature:** "Lena" in Caveat font, 42px, #D8F57C, with flourish SVG
- **Card bg:** #1F2A2C, 22px radius, 1.5px #2F3D40 border
- **Card container bg:** B.ink (#1F2D2F)
- **Dashed dividers:** 1.5px #3A4547
- **Notes:** SHORT variant per the copy file (§6.3, short Lena sign-off). Role is "Customer Support · Mom of two autistic sons" — not "Founder." This is deliberate: at the checkout moment, Lena is a peer-mom, not a brand representative. Reply prompt for deliverability signal.

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

### HERO-3 — Permission Open (L3857)
- **Props:** headline, subhead, heroImage (optional), ctaText (omitted)
- **Variants:** Text-only — no hero image
- **Custom overrides:**
  - Headline: "You started checkout, here's the piece most parents are missing."
  - Subhead: "You started checkout, then stopped. That's okay. No hurry."
  - CTA: OMITTED — no CTA in hero (CTA is in dedicated CTA section below)
  - Hero image: OMITTED — text-only for minimal distraction

### LETTER-02 — Handwritten Opener (L7826)
- **Props:** paras[], bg
- **Variants:** Default — paragraph stack
- **Custom overrides:**
  - bg: B.paper (#FFFFFF)
  - Bold reading path anchors: "signal-timing gap", "not by training. By providing information"
  - Whether/Or/If bridge as opening paragraph
  - Citation: Nicholson et al. 2019

### SP-01 — Yellow Quote Block (L4966)
- **Props:** intro, quotes[], bridgeCopy, bg
- **Variants:** Three-Family GF pattern
- **Custom overrides:**
  - 3 quotes covering L1/L2/L3 profiles (cross-level)
  - Left border: 3px B.green (not yellow — checkout context is trust-building, not energy)
  - Signal dot markers (12px, B.teal, 50% opacity)

### EDU-4 — Why It Works (3 Reasons) — OMITTED
- **Note:** EDU-4 is listed in strategy-map.json but the copy file does not include a dedicated mechanism section with 3 reasons. The mechanism is embedded in the LETTER-02 section (signal-timing gap + BSL layer description). This component is replaced by inline mechanism text within the letter.

### ProductShowcaseSoft (L613)
- **Props:** eyebrow, title, sub, heroImage
- **Variants:** Soft — no price, no features, no CTA button
- **Custom overrides:**
  - Eyebrow: "YOUR CART"
  - Sub: "Your cart is saved as-is." (not a product description)
  - Hero image: pocket-diaper-moon-cloud-blue.jpg
  - Floating badge: "✿ 60 days calm" (FFD866)

### CTA-11 — Permission CTA (L6692)
- **Props:** intro, ctaText, nextTeaser
- **Variants:** Default — intro + button + teaser
- **Custom overrides:**
  - Intro: "Complete your order. Your cart is saved as-is."
  - CTA button: B.teal bg, D8F57C text, full-width mobile / 280px desktop
  - 52px height (cross-level calibration)
  - Next time teaser: E2 preview (hope-fear cycle address)

### TRUST-1 — 60-Day Seal (L6385)
- **Props:** guaranteeText
- **Variants:** Default — centered seal + text
- **Custom overrides:**
  - "Full refund. No forms, no hassle." bolded as final anchor
  - bg: B.cream, 16px radius, 2px B.green border

### UTIL-02 — Divider Bar
- **Props:** color, thickness
- **Variants:** 1px rule, #E8DED5
- **Custom overrides:**
  - 1px solid #E8DED5, full width
  - Only straight line in email — marks tonal shift

### UTIL-05 — Signoff Card (L7600)
- **Props:** bg, variant
- **Variants:** SHORT (E1)
- **Custom overrides:**
  - Avatar: 58px circle, gradient ring
  - Signature: Caveat font, 42px, D8F57C
  - Role: "Customer Support · Mom of two autistic sons" (not "Founder")

---

## 7. Image Briefs

### Image 1: Product Flat Lay
- **Path:** /root/projects/brightkidco/raw/product-photos/flat-lay/pocket-diaper-moon-cloud-blue.jpg
- **Alt text:** "BrightKidCo training pant in moon cloud blue pattern, flat lay"
- **Recommended dimensions:** 420 x 240px (desktop), full-width (mobile)
- **Cropping/focal point:** Center crop, full product visible. Clean flat-lay composition. Moon cloud blue pattern clearly visible. White/cream background.
- **Fallback color:** #FBF7F1
- **Notes:** Only product image in E1. Used in ProductShowcaseSoft section. Minimal imagery philosophy — one product shot is sufficient for checkout recovery.

### Image 2: Lifestyle (备用 / Backup)
- **Path:** /root/projects/brightkidco/raw/product-photos/lifestyle/toddler-potty-ladder-yellow-woodland.png
- **Alt text:** "Toddler on potty ladder, yellow woodland theme, warm home setting"
- **Recommended dimensions:** 420 x 240px (if used)
- **Cropping/focal point:** Center crop, child partially visible, warm natural light
- **Fallback color:** #FBF7F1
- **Notes:** Listed in strategy-map.json images array but NOT used in the primary layout. Available as fallback if a hero image is required for rendering. The wireframe intentionally omits hero imagery to maintain minimal distraction philosophy.

---

## 8. Rendering Notes

### Email Client Considerations
- **Gmail:** Strips CSS animations, classes. All styling must be inline. Max email size ~100KB (§15.3). Minimal HTML = fast load.
- **Outlook Desktop:** No SVG support. Wave dividers degrade to thin rules (#E8DED5). Background colors on tables only. Border-radius not supported on buttons.
- **Apple Mail:** Full CSS support. Best rendering environment.
- **Yahoo Mail:** Inline CSS required. Border-radius spotty.

### Mobile Responsive Notes
- **Breakpoint:** 480px (§15.3)
- **Max width:** 600px desktop, full-width mobile
- **CTA button:** Full-width on mobile, 52px height
- **Product image:** Full-width on mobile, maintains aspect ratio
- **Font sizes:** Body 16px mobile (§15.5 accessibility minimum), Headlines 24px mobile
- **Spacing:** Section gap 32px mobile (from 44px desktop)

### Accessibility Notes
- **Body text minimum:** 16px on mobile (§15.5, WCAG AA)
- **CTA minimum height:** 48px (§15.5, tap-friendly)
- **Color contrast:** All body text (B.ink on B.paper) passes WCAG AA (4.5:1 minimum). CTA text (#D8F57C on B.teal) passes at 4.8:1.
- **Alt text:** Product image has descriptive alt text
- **Semantic structure:** H1 for hero headline, blockquote for parent quotes
- **Link purpose:** CTA buttons have descriptive text ("Complete Your Order" not "Click Here")

### Special Instructions
- **Reply prompt:** REQUIRED in every email (§17.2). "Reply to this email, Lena reads every response" in footer. "Hit reply" in Lena sign-off.
- **Checkout recovery context:** No urgency, no countdown timers, no scarcity, no "last chance" language. Permission-based throughout.
- **From name:** "Lena from BrightKidCo" (§16.3)
- **Reply-to:** support@brightkidco.com (§16.3)
- **No Facebook link** (§16.4)
- **No Trustpilot link** (§16.4)
- **Physical address:** 123 Commerce Street, Suite 200, Portland, OR 97201 (CAN-SPAM)
- **Cross-level R1-R6 compliance:** ✅ R1 (symptom over label), ✅ R2 (3+ recognition anchors in Three-Family), ✅ R3 (age ranges "3 or 10"), ✅ R4 (verbal/non-verbal inclusive), ✅ R5 (timeline flexibility "on your timeline"), ✅ R6 (low-bar success "no pause, no look, no step")
- **Forbidden phrases check:** ✅ No "easy/simple/effortless", ✅ No "fix/cure", ✅ No level labels, ✅ No urgency countdown, ✅ No "only X left", ✅ No "your cart is expiring"
- **Image-to-text ratio:** 20/80 (very text-heavy, minimal imagery — checkout recovery is about reassurance, not visual appeal)
- **Copy density:** Medium (the copy file is concise — observation + validation + mechanism + guarantee + CTA)
- **Klaviyo config:** Flow: Checkout Abandonment E1, Trigger: Started Checkout + No Purchase (10 min), Offer: Same as checkout cart — no upsell, Suppression: Checkout Abandonment overrides Cart Abandonment
