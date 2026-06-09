# Wireframe: Welcome Flow — E4 | Level 2

## 1. Metadata

| Field | Value |
|-------|-------|
| **Flow** | Welcome Flow (Flow 1) |
| **Position** | E4 — Day 7 |
| **Level** | Level 2, Lisa (Moderate ASD, Mixed verbal/non-verbal, 5-7 yrs, Sensory dominant) |
| **Copy File** | /root/projects/brightkidco/outputs/copy/welcome/welcome-01-e4-l2.md |
| **Strategy Map Entry** | flows.welcome.emails.e4-l2 |
| **Flow Signature** | Warm-educational, clinical-honest, science-visual dominant, low urgency CTA |
| **Level Calibration** | Semi-bold weight, neutral color warmth, 16px border radius, 8px shadow, #FAFAF8 background, 9 sections, 3 images |
| **Component Categories Used** | HERO, TEXT/LETTER, TESTIMONIAL, MECHANISM, PRODUCT, CTA, GUARANTEE, DECORATIVE |
| **Total Estimated Height** | ~3200px (9 sections, long copy density) |

---

## 2. Strategy Box

**Big Idea:** The signal was there all along — your child's nervous system just couldn't receive it. The interoception gap is neurological, not behavioral. BCBA built the foundation; this adds the sensory layer.

**Emotional Arc Position:** 4 of 8 — Cautious hope → Realistic acceptance → Proof through testimonials → Incremental hope. This is the social-proof email that validates the journey with real L2 parent stories and sets realistic 4-8 week expectations.

**Component Selection Rationale:**
- HERO-13 (Scientific Hook) — opens with clinical framing, matches L2's research-heavy mindset
- LETTER-03 (Letter + Pull-Quote) — supports long-form body with embedded pull quotes for scanners
- SP-02 (Expert Endorsement) — positions BCBA/OT context as complementary, not replaced
- EDU-12 (Comparison Matrix) — structured evidence comparison, clinical-digestible
- ProductShowcaseFull — hero product moment with full feature breakdown for the L2 evaluator
- CTA-5 (Product CTA) — direct product action, low urgency
- TRUST-2 (Guarantee Detail Cards) — explicit guarantee terms for the skeptic
- 20.2 (Dot Pattern Divider) — subtle structural separation

**Differentiation Note:** Most science-heavy email in the flow. Dual-track layout (body copy + marginalia sidebar) positions BrightKidCo as peer AND authority. Signal diagram GIF reinforces the neurological reframe visually.

---

## 3. Creative Box

**Color Palette:**
- Primary: #2BAEB4 (B.teal) — CTAs, links, accent highlights
- Secondary: #1F2D2F (B.ink) — Primary text, borders, CTA button background
- Accent: #5DD07A (B.green) — Success indicators, signal-diagram positive states
- Background: #FAFAF8 — Full email canvas, warm neutral clinical
- Text: #4A6568 (B.soft) — Secondary text, body paragraphs

**Typography:**
- Heading: Questrial, 24px mobile / 32px desktop, 700 weight, line-height 1.15, letter-spacing -0.5px
- Body: Questrial, 16px mobile / 18px desktop, 400 weight, line-height 1.5, color #4A6568
- Accent: Questrial, 20px, 600 weight, line-height 1.3, color #2BAEB4
- Eyebrow: Questrial, 10.5px, 700 weight, letter-spacing 2px, text-transform uppercase, color #2BAEB4

**Border Radius:** Cards: 16px, Buttons: 999px (pill), Images: 16px, Small: 8px
**Shadow:** Primary: 8px 8px 0 #1F2D2F (ink block shadow), Secondary: 4px 4px 0 #1F2D2F
**Spacing:** Section gap: 24px, H-padding: 22px, Card padding: 22/22px, Element gap: 14px

---

## 4. Layout ASCII

```
┌──────────────────────────────────────┐  420px
│  [EMAILSHELL] bg: #FAFAF8            │
│                                       │
│  ┌─────────────────────────────────┐ │
│  │  HEADER: Logo + "Lena at        │ │  bg: #FFFFFF
│  │  BrightKidCo" centered          │ │  h: 58px
│  └─────────────────────────────────┘ │
│                                       │
│  ┌─────────────────────────────────┐ │
│  │  HERO-13: SCIENTIFIC HOOK       │ │  bg: #FAFAF8
│  │  Eyebrow: "WELCOME FLOW · DAY 7"│ │  h: ~120px
│  │  H1: Social proof headline      │ │
│  │  (What real L2 parents say...)  │ │
│  └─────────────────────────────────┘ │
│                                       │
│  ┌─────────────────────────────────┐ │
│  │  20.2: DOT PATTERN DIVIDER     │ │  h: 24px
│  └─────────────────────────────────┘ │
│                                       │
│  ┌─────────────────────────────────┐ │
│  │  LETTER-03: LETTER + PULL-QUOTE│ │  bg: #FAFAF8
│  │  ┌───────┐  ┌────────────────┐  │ │  h: ~600px
│  │  │ BODY  │  │ MARGINALIA     │  │ │
│  │  │ COPY  │  │ SIDEBAR        │  │ │
│  │  │ Hook  │  │ Signal Diagram │  │ │
│  │  │ Valid.│  │ [INTEROCEPTION │  │ │
│  │  │ Mech. │  │  GAP VISUAL]   │  │ │
│  │  │       │  │ Progress Chart │  │ │
│  │  └───────┘  └────────────────┘  │ │
│  └─────────────────────────────────┘ │
│                                       │
│  ┌─────────────────────────────────┐ │
│  │  SP-02: EXPERT ENDORSEMENT     │ │  bg: #EDF1F5
│  │  "He initiated. Once. After     │ │  h: ~200px
│  │  4 years." — Pull quote card    │ │
│  │  BCBA protocol quote block      │ │
│  └─────────────────────────────────┘ │
│                                       │
│  ┌─────────────────────────────────┐ │
│  │  EDU-12: COMPARISON MATRIX      │ │  bg: #FAFAF8
│  │  Interoception gap data table   │ │  h: ~280px
│  │  19% thirst stat, 59% urine     │ │
│  │  8-week intervention results    │ │
│  └─────────────────────────────────┘ │
│                                       │
│  ┌─────────────────────────────────┐ │
│  │  PRODUCT SHOWCASE FULL          │ │  bg: #FFFFFF
│  │  ┌───────────────────────────┐  │ │  h: ~520px
│  │  │  Hero product image       │  │ │
│  │  │  (toddler + train)        │  │ │
│  │  ├───────────────────────────┤  │ │
│  │  │  Product info block       │  │ │
│  │  │  3-Layer System breakdown │  │ │
│  │  │  Feature pills            │  │ │
│  │  │  CTA: Explore 3+3 Bundle │  │ │
│  │  ├───────────────────────────┤  │ │
│  │  │  2-up: Colorway + Size    │  │ │
│  │  └───────────────────────────┘  │ │
│  └─────────────────────────────────┘ │
│                                       │
│  ┌─────────────────────────────────┐ │
│  │  TRUST-2: GUARANTEE DETAIL     │ │  bg: #FAFAF8
│  │  60-Day Guarantee cards        │ │  h: ~160px
│  │  4-8 week timeline note        │ │
│  └─────────────────────────────────┘ │
│                                       │
│  ┌─────────────────────────────────┐ │
│  │  CTA-5: PRODUCT CTA            │ │  bg: #1F2D2F
│  │  "Your BCBA built the          │ │  h: ~180px
│  │  behavioral foundation..."     │ │
│  │  [Explore the 3+3 Bundle]      │ │
│  │  $79.99 · $13.33/pair          │ │
│  └─────────────────────────────────┘ │
│                                       │
│  ┌─────────────────────────────────┐ │
│  │  LENA SIGN-OFF (MEDIUM)        │ │  bg: #1F2D2F
│  │  Avatar + handwritten sig      │ │  h: ~200px
│  │  "I have two autistic sons..." │ │
│  └─────────────────────────────────┘ │
│                                       │
│  ┌─────────────────────────────────┐ │
│  │  FOOTER                        │ │  bg: #FFFFFF
│  │  BrightKidCo · Address         │ │  h: ~160px
│  │  Unsubscribe · Social icons    │ │
│  └─────────────────────────────────┘ │
│                                       │
└──────────────────────────────────────┘
```

---

## 5. Section Specs

### Section 1: Header
- **Component:** UTIL-08 — Nav Bar
- **Exact copy:** Logo image "BrightKidCo" centered
- **Image:** /root/projects/brightkidco/raw/assets/brightkidco-logo-v2.png (alt: "BrightKidCo")
- **Dimensions:** Height 34px, centered
- **Background:** #FFFFFF
- **Padding:** 24px top, 20px sides, 0 bottom
- **Typography:** N/A (image)
- **Rendering Notes:** Logo must be retina-ready (2x). Center-aligned.

### Section 2: Hero — Scientific Hook
- **Component:** HERO-13 — Scientific Hook
- **Exact copy:**
  - Eyebrow: "WELCOME FLOW · DAY 7"
  - H1: "What real L2 parents say after 4-8 weeks"
- **Image:** /root/projects/brightkidco/raw/product-photos/lifestyle/toddler-playing-train-moon-cloud-blue.png (alt: "Toddler playing with train in blue moon cloud room")
- **Dimensions:** 420×240px, 16px border radius
- **Background:** #FAFAF8
- **Padding:** 34px top, 22px sides
- **Typography:** Eyebrow: 10.5px, 700, letter-spacing 2px, uppercase, #2BAEB4. H1: 24px/32px, 700, letter-spacing -0.5px, #1F2D2F
- **Rendering Notes:** Image with dashed teal border frame. Clinical tone — no playful elements.

### Section 3: Dot Pattern Divider
- **Component:** 20.2 — Dot Pattern Divider
- **Exact copy:** None (decorative)
- **Background:** #FAFAF8
- **Dimensions:** 420×24px, centered dot pattern in #D6DCE5
- **Rendering Notes:** Subtle structural separation. Dots spaced 8px apart.

### Section 4: Letter + Pull-Quote (Body Copy)
- **Component:** LETTER-03 — Letter + Pull-Quote
- **Exact copy (verbatim from copy file):**
  - **Hook:** "We had 3 weeks of success then total regression." I hear this from L2 parents constantly. The words change but the feeling is the same, you thought you were finally getting somewhere, and now it's gone. You've done the BCBA protocol, OT sensory work, social stories, sticker charts, timer sits from 9 AM to 6 PM. You've read the books. You've done the "no pullup day", and it ended with 11 hours of holding followed by a flood across the kitchen floor. You sit him on the toilet every 45 minutes and he squirms, waits, stands up, then pees the second the pullup comes back on. That isn't starting over.
  - **Validation:** Regression isn't failure. It's not starting over. The neural pathways you built over those 3 weeks are still there. His nervous system is recalibrating. Here's what's happening neurologically: the interoception signal, the "I need to go" feeling, arrived a few times, his brain started learning the connection, and then his system needed time to integrate. This the natural rhythm of body-signal learning for a neurologically complex child. Every L2 parent I've spoken to has experienced this cycle: two steps forward, one step back, pause, repeat. Your BCBA hasn't failed. The OT hasn't failed. You haven't failed. Every protocol you've run addressed behavior and compliance. Your child learned to wait for the prompt: "time to go." He's prompt-dependent because the prompts worked. He follows the external signal. What was missing is the internal signal.
  - **Mechanism:** Here's what the research actually says about this gap. For autistic children, interoception — the sense that tells us when we're hungry, thirsty, or need the bathroom — works differently. The signal from bladder to brain arrives too late or doesn't register at all. It's not a training problem. It's a neurology problem. The data backs this up: only **19%** of autistic children can recognize when they're thirsty. If thirst doesn't register consistently, how can we expect bladder fullness to? Critically, this is a **childhood phenomenon** — adults with ASD show compensation. Early body-signal intervention creates neural pathways that last. A structured 8-week interoception intervention produces measurable improvement. The body-signal learning approach creates those conditions naturally.
- **Image:** None (text-only section)
- **Background:** #FAFAF8
- **Padding:** 4px sides, 28px bottom
- **Typography:** Body: 15px, 400, line-height 1.7, color #4A6568. First paragraph bold: 17px, 600, color #1F2D2F
- **Rendering Notes:** Marginalia sidebar (30% width) shows signal diagram visual and progress chart. Sidebar bg: #EDF1F5, 8px padding, 14px text.

### Section 5: Expert Endorsement (Social Proof)
- **Component:** SP-02 — Expert Endorsement
- **Exact copy (verbatim):**
  - **Pull Quote:** "He initiated. Once. After 4 years." That's from a real L2 parent in our community. Four years of scheduled sits, sticker charts, ABA protocols, reward systems, social stories, OT sensory work. Forty-plus methods. Thousands of dollars in therapy. And then, after 5 weeks in Body-Signal Learning underwear: A pause. A look down. A step toward the bathroom. After.
  - **Quote 2:** "He can go to the bathroom with on-the-dot prompting every hour but he does not care if he goes on himself." The awareness isn't there because pulling up a child and placing them on a toilet doesn't teach the body to recognize the internal signal.
  - **Quote 3:** "BCBA protocol got us to 'sit on the toilet without melting down.' That's it. No actual training." Behavioral protocols address the fear, the resistance, the routine. They build the foundation for compliance and tolerance. What they don't address is the body awareness piece.
- **Background:** #EDF1F5 (cool evidence zone)
- **Padding:** 24px all sides
- **Typography:** Pull quote: 20px, 600, italic, color #2BAEB4, left border 3px solid #4CAF7C, 16px left padding. Body: 15px, 400, line-height 1.6, color #4A6568
- **Rendering Notes:** Left accent border on pull quotes (#4CAF7C signal green). Quote attribution in 12px, #8A9B9D.

### Section 6: Comparison Matrix (Mechanism)
- **Component:** EDU-12 — Comparison Matrix
- **Exact copy (verbatim from copy file):**
  - 19% of autistic children can recognize when they're thirsty
  - 59% can't signal urine
  - 8-week interoception intervention produces measurable improvement
  - Adults with ASD show compensation — this is a childhood phenomenon
- **Background:** #FAFAF8
- **Padding:** 24px all sides
- **Typography:** Stats in 28px bold, color #4CAF7C (signal green). Labels: 14px, 400, #4A6568
- **Rendering Notes:** Stats in full-width band with #EDF1F5 bg, 8px padding top/bottom. Bold scanable evidence blocks. Data from Nicholson et al. 2019, Iqbal 2022.

### Section 7: Product Showcase Full
- **Component:** ProductShowcaseFull
- **Exact copy (verbatim):**
  - Eyebrow: "The product"
  - Title: "Body-Signal Learning" / Accent: "Layer™ Pants"
  - Sub: "This where the body-signal underwear fits. It doesn't replace the work your BCBA has done. It adds the sensory component that was missing."
  - Features: Layer 1 (Cotton Body-Signal Layer, 30-60 sec gentle sensation), Layer 2 (Smart Absorption Core, 3x protection), Layer 3 (Protective Outer Barrier, leak-resistant)
  - CTA: "Explore the 3+3 Bundle →"
  - Fine: "Free shipping on orders over $79 · 60-day guarantee · Real returns"
- **Image:** /root/projects/brightkidco/raw/product-photos/lifestyle/toddler-playing-train-moon-cloud-blue.png (hero shot, alt: "Toddler wearing BrightKidCo Body-Signal Learning Pants, natural pose, soft window light")
- **Dimensions:** Hero 420×300px, 2-up sub-row 200×110px each
- **Background:** #FFFFFF
- **Padding:** 28px top, 14px sides, 20px bottom
- **Typography:** Eyebrow: 10.5px, 700, letter-spacing 1.5px, uppercase, #2BAEB4. H3: 19px, 700, #1F2D2F. Price: 28px, 700, #1F2D2F. Feature pills: 11.5px, 600, #1F2D2F
- **Rendering Notes:** Main card: white bg, 2px solid #1F2D2F border, 24px border-radius, 8px 8px 0 #1F2D2F shadow. Floating guarantee badge: #FFD866 bg, rotated 4deg. Feature pills: #FAF7F0 bg, 1.5px border, 999px radius.

### Section 8: Guarantee Detail Cards
- **Component:** TRUST-2 — Guarantee Detail Cards
- **Exact copy (verbatim):**
  - "Realistic expectations for L2: 4-8 weeks for the first consistent signals. Some kids take longer. Both are normal."
  - "The 60-Day Guarantee covers the full learning window. Try the Body-Signal approach for 60 days. If your child shows any sign of awareness, a pause, a look, a step toward the bathroom, a tug at the waistband, you'll know the signal is working. If nothing changes, full refund. By your judgment."
- **Background:** #FAFAF8
- **Padding:** 24px all sides
- **Typography:** 15px, 400, line-height 1.6, color #4A6568. "60 days" in bold, #D4953A (amber accent)
- **Rendering Notes:** Dashed border #D4953A around guarantee block, 16px internal padding. Visualizes "safety net" — dashed line implies provisional/temporary.

### Section 9: CTA — Product CTA
- **Component:** CTA-5 — Product CTA
- **Exact copy (verbatim):**
  - Intro: "Your BCBA built the behavioral foundation. This adds the sensory layer."
  - Button: "Explore the 3+3 Bundle, $79.99 →"
  - Fine: "That's $13.33 per pair with the bundle — less than half the single-pair price."
  - Next time teaser: "Next time: Real stories from parents who've been exactly where you are."
- **Background:** #1F2D2F (dark ink)
- **Padding:** 20px sides, 44px bottom
- **Typography:** Intro: 14px, 400, line-height 1.6, color #B8CACD. Button: 15.5px, 700, color #1F2D2F on #D8F57C bg. Fine: 11.5px, color #8A9B9D
- **Rendering Notes:** Button: full-width pill on mobile, 260px centered on desktop. Deep navy #1F2D2F bg with lime green #D8F57C text. 56px height (above 44px minimum tap target). 12px border-radius.

### Section 10: Lena Sign-Off (MEDIUM)
- **Component:** UTIL-05 — Signoff Card
- **Exact copy (verbatim):**
  - "I have two autistic sons. One's 6, still in the middle of it. The other took us until he was almost 8. If your kid is anywhere on this curve, stuck in the regression cycle, showing first awareness then losing it, having breakthroughs in clinic but not at home, that's normal here."
  - "If you have a question, hit reply. You'll get me, not a bot, not a template. I read everything."
  - Sign-off: "Lena ——"
- **Background:** #1F2D2F
- **Padding:** 0 sides, 36px bottom
- **Typography:** Body: 13px, 400, line-height 1.65, color #B8CACD, italic. Signature: 42px Caveat cursive, #D8F57C
- **Rendering Notes:** Dark card (#1F2A2C) with 22px border-radius, 1.5px border #2F3D40. Avatar ring gradient #FFD866 to #2BAEB4. Handwritten "Lena" in Caveat font. P.S. in lime green #D8F57C.

### Section 11: Footer
- **Component:** UTIL-04 — Footer
- **Exact copy (verbatim):**
  - BrightKidCo
  - [Physical Address, 123 Commerce St, Suite 200, Nashville, TN 37201]
  - "No longer want these emails? Unsubscribe or Manage Preferences."
  - "Questions? Reply to this email, Lena reads every response."
- **Background:** #FFFFFF
- **Padding:** 30px all sides
- **Typography:** Tagline: 20px, italic, 500, #1F2D2F. Links: 14px, 500, #1F2D2F. Legal: 11.5px, #8A9B9D, line-height 1.65
- **Rendering Notes:** Social icons (Instagram, Facebook, TikTok) in 22×22px, stroke #1F2D2F. Gradient accent bar at bottom: 60×3px, #2BAEB4 to #5DD07A.

---

## 6. Component Details

### HERO-13 — Scientific Hook
- **Component ID:** HERO-13 (L4089)
- **Props:** eyebrow text, headline text, hero image
- **Variants:** Default (no animation on L2 — clinical stillness)
- **Custom overrides:** Clinical tone, no gradient text on headline. Semi-bold weight per L2 calibration.

### LETTER-03 — Letter + Pull-Quote
- **Component ID:** LETTER-03 (L7826)
- **Props:** background color, paragraph array, pull-quote text
- **Variants:** Default with sidebar variant
- **Custom overrides:** Marginalia sidebar (30% width) with signal diagram and progress chart. #EDF1F5 sidebar bg. 14px sidebar text.

### SP-02 — Expert Endorsement
- **Component ID:** SP-02 (L4805)
- **Props:** quote text, attribution, accent color
- **Variants:** Green accent variant (#4CAF7C left border)
- **Custom overrides:** Multi-quote layout (3 quotes stacked). Left accent border 3px solid #4CAF7C.

### EDU-12 — Comparison Matrix
- **Component ID:** EDU-12 (L5552)
- **Props:** data rows, column headers
- **Variants:** Stat-highlight variant
- **Custom overrides:** Stats in #4CAF7C signal green, 28px bold. #EDF1F5 band backgrounds for scanability.

### ProductShowcaseFull
- **Component ID:** ProductShowcaseFull (from product-showcase.jsx)
- **Props:** eyebrow, title, titleAccent, sub, priceFrom, priceNote, features, ctaButton, guaranteeBadge
- **Variants:** Default
- **Custom overrides:** Price from "$79.99" (bundle), not "€34". 3-layer system breakdown as feature pills. Floating guarantee badge #FFD866.

### CTA-5 — Product CTA
- **Component ID:** CTA-5 (L6708)
- **Props:** intro text, button text, fine print
- **Variants:** Dark background variant
- **Custom overrides:** Button bg #1F2D2F, text #D8F57C. Full-width pill, 56px height. "Explore" language (not "Buy Now").

### TRUST-2 — Guarantee Detail Cards
- **Component ID:** TRUST-2 (L6414)
- **Props:** guarantee text, timeline note
- **Variants:** Dashed border variant
- **Custom overrides:** 2px dashed #D4953A border. 16px internal padding. Amber accent for "60 days" highlight.

### 20.2 — Dot Pattern Divider
- **Component ID:** 20.2 (L1876)
- **Props:** None (decorative)
- **Variants:** Default
- **Custom overrides:** None. Dots in #D6DCE5, 8px spacing.

---

## 7. Image Briefs

### Image 1: Hero Lifestyle
- **Path:** /root/projects/brightkidco/raw/product-photos/lifestyle/toddler-playing-train-moon-cloud-blue.png
- **Alt text:** "Toddler playing with train in blue moon cloud room, wearing BrightKidCo Body-Signal Learning Pants"
- **Recommended dimensions:** 420×300px (hero), 420×240px (fallback)
- **Cropping/Focal:** Center crop on child. Soft window light. Blue/white tones match L2 palette.
- **Fallback color:** #EDF1F5

### Image 2: Product Flat Lay
- **Path:** /root/projects/brightkidco/raw/product-photos/flat-lay/training-pant-cloud-raindrop-white.jpg
- **Alt text:** "BrightKidCo Body-Signal Learning Pants in cloud raindrop white, flat lay product photo"
- **Recommended dimensions:** 200×110px (2-up sub-row)
- **Cropping/Focal:** Full product visible. Clean white background.
- **Fallback color:** #FAFAF8

### Image 3: Accessory
- **Path:** /root/projects/brightkidco/raw/product-photos/accessories/book-potty-training-guide.png
- **Alt text:** "BrightKidCo potty training guide book, accessory included with bundle"
- **Recommended dimensions:** 200×110px (2-up sub-row)
- **Cropping/Focal:** Book cover fully visible.
- **Fallback color:** #FAFAF8

---

## 8. Rendering Notes

- **Email client considerations:** All CSS inline. No @font-face (Gmail strips). Questrial via system stack fallback. Outlook: VML background for hero. Dark mode: respects prefers-color-scheme, #FAFAF8 → #1A1A1A, #1F2D2F → #FFFFFF.
- **Mobile responsive:** Single column below 480px. Sidebar collapses to inline callout block with colored left border. H1: 24px mobile. Body: 16px mobile minimum. CTA: full-width pill on mobile. Padding halves but never below 16px.
- **Accessibility:** All images have descriptive alt text. Color contrast ratios: #1F2D2F on #FAFAF8 = 13.2:1 ✓, #4A6568 on #FAFAF8 = 5.8:1 ✓. Link text descriptive (no "click here"). ARIA labels on interactive elements.
- **Special instructions:** Signal diagram GIF (if animated): 3-second loop, under 500KB, first frame doubles as static PNG fallback. L2-specific: 3-second GIF cycles (deliberate, patience-coded), slower than L1's 2-second urgency cycles. Progress chart in sidebar is static image with detailed alt text for screen readers.
