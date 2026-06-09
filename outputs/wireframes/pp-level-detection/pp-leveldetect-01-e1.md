# Wireframe: PP-Level Detection — E1 (Flow 14) | Cross-Level (pp-leveldetect-01-e1)

## 1. Metadata

| Field | Value |
|-------|-------|
| **Flow** | PP Level Detection (Flow 14) |
| **Position** | E1 — Day 14 |
| **Level** | Cross-Level (L1/L2/L3/GF) |
| **Copy File** | /root/projects/brightkidco/outputs/copy/pp-level-detection/pp-leveldetect-01-e1.md |
| **Strategy Map Entry** | flows.pp-level-detection.emails.e2 |
| **Flow Signature** | Gentle-diagnostic, recognition-first, no CTA button |
| **Level Calibration** | No level-specific targeting. Single visual direction. Dashed "Not sure" variant. Cards ARE the interaction. |
| **Component Categories Used** | HERO, TEXT/LETTER, TESTIMONIAL, MECHANISM, PRODUCT, CTA, GUARANTEE, DECORATIVE |
| **Total Estimated Height** | ~2600px (7 sections, medium copy density) |

---

## 2. Strategy Box

**Big Idea:** One tap tells us everything. The central insight: parents don't want to fill out forms. They want to feel seen. The level detection email turns segmentation into recognition — each button is a mirror, not a survey. When a parent taps the card that describes their child, they feel understood before any follow-up email arrives.

**Emotional Arc Position:** Post-purchase discovery moment (Day 14). Two weeks in. The subscriber has had time to observe. Now we ask a gentle question that makes them feel seen. This email is the transition from "general welcome" to "personalized support."

**Component Selection Rationale:**
- HERO-5 (Mirror Moment) — "Which one sounds like your child?" as a mirror, not a question
- LETTER-02 (Handwritten Opener) — personal, handwritten warmth for helper text
- SP-01 (Yellow Quote Block) — recognition language, not conversion proof
- EDU-6 (FAQ Blocks) — "Two weeks in" context as gentle education
- ProductShowcaseSoft — no hard product imagery, product referenced in body
- FLOW-12 (Level Detection) — the four clickable buttons ARE the interaction, NO CTA button
- TRUST-5 (Promise Badges Strip) — subtle trust signals
- UTIL-05 (Signoff Card) — Lena sign-off, short variant

**Differentiation Note:** NO CTA button. The task specifies: "NO CTA button — the buttons ARE the interaction." This is a segmentation email, not a conversion email. Each button links to a level-specific landing page or Klaviyo tag update. The dashed "Not sure yet" variant prevents abandonment from parents who can't categorize yet.

---

## 3. Creative Box

**Color Palette:**
- Primary: #2BAEB4 (B.teal) — Card borders, links, accent highlights
- Secondary: #1F2D2F (B.ink) — Primary text, card shadows, dark sections
- Accent: #5DD07A (B.green) — Level 1 card, success indicators
- Background: #FAF9F7 — Full email canvas, warm cream
- Text: #4A6568 (B.soft) — Secondary text, body paragraphs
- Level 1: #5DD07A (B.green) — Verbal & aware card
- Level 2: #2BAEB4 (B.teal) — Sometimes aware card
- Level 3: #FFB5A0 (pink) — Rarely aware card
- Level 4: #FFD866 (yellow) — Not sure yet card (dashed variant)
- Level 4 bg: #EAF6F2 (mint) — Dashed variant background
- Level 4 border: #2BAEB4 (dashed) — Dashed border on mint

**Typography:**
- Heading: Fraunces, 28px mobile / 34px desktop, 700 weight, gradient text (teal→green on "your child")
- Body: Questrial, 16px mobile / 18px desktop, 400 weight, line-height 1.5
- Level title: Fraunces, 17px, 700 weight
- Level description: Questrial, 13px, 400 weight
- Helper text: Questrial, 14px, 400 weight, muted gray
- Badge: Questrial, 10.5px, 700 weight, uppercase

**Border Radius:** Cards: 16px, Buttons: 999px (pill), Images: 16px, Small: 8px
**Shadow:** Card: 3px 3px 0 #1F2D2F (ink block shadow), Secondary: 1.5px 1.5px 0 #1F2D2F
**Spacing:** Section gap: 20px, H-padding: 22px, Card padding: 22px, Element gap: 14px

---

## 4. Layout ASCII

```
┌──────────────────────────────────────┐  420px
│  [EMAILSHELL] bg: #FBF7F1            │
│                                       │
│  ┌─────────────────────────────────┐ │
│  │  HEADER: Logo + "Lena from      │ │  bg: #FFFFFF
│  │  BrightKidCo" centered          │ │  h: 58px
│  └─────────────────────────────────┘ │
│                                       │
│  ┌─────────────────────────────────┐ │
│  │  HERO-5: MIRROR MOMENT          │ │  bg: #FBF7F1
│  │  Badge: "Quick question"        │ │  h: ~100px
│  │  H1: "Which one sounds like     │ │
│  │  your child?"                   │ │  Fraunces 34px
│  │  Sub: "Two weeks in. Help us    │ │  gradient text
│  │  send you the right content."   │ │
│  └─────────────────────────────────┘ │
│                                       │
│  ┌─────────────────────────────────┐ │
│  │  FLOW-12: LEVEL DETECTION       │ │  bg: #FBF7F1
│  │  (4 clickable buttons +         │ │  h: ~560px
│  │   1 dashed variant)             │ │
│  │                                │ │
│  │  ┌───────────────────────────┐  │ │  bg: #FFFFFF
│  │  │ 💬 VERBAL & AWARE         │  │ │  border: 2px solid #1F2D2F
│  │  │ #5DD07A green circle      │  │ │  shadow: 3px 3px 0 #1F2D2F
│  │  │ "Can tell you when they   │  │ │  icon: 💬
│  │  │  need to go, but signals  │  │ │
│  │  │  arrive late"             │  │ │
│  │  └───────────────────────────┘  │ │
│  │                                │ │
│  │  ┌───────────────────────────┐  │ │  bg: #FFFFFF
│  │  │ 🤔 SOMETIMES AWARE        │  │ │  border: 2px solid #1F2D2F
│  │  │ #2BAEB4 teal circle       │  │ │  shadow: 3px 3px 0 #1F2D2F
│  │  │ "Inconsistent signals,    │  │ │  icon: 🤔
│  │  │  mixed communication,     │  │ │
│  │  │  pauses sometimes"        │  │ │
│  │  └───────────────────────────┘  │ │
│  │                                │ │
│  │  ┌───────────────────────────┐  │ │  bg: #FFFFFF
│  │  │ 🫧 RARELY AWARE           │  │ │  border: 2px solid #1F2D2F
│  │  │ #FFB5A0 pink circle       │  │ │  shadow: 3px 3px 0 #1F2D2F
│  │  │ "Doesn't react to wet,    │  │ │  icon: 🫧
│  │  │  no signal, needs full-   │  │ │
│  │  │  body sensation"          │  │ │
│  │  └───────────────────────────┘  │ │
│  │                                │ │
│  │  ┌─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─┐  │ │  bg: #EAF6F2 (mint)
│  │  │ ❓ NOT SURE YET           │  │ │  border: 2px dashed #2BAEB4
│  │  │ #FFD866 yellow circle     │  │ │  NO ink shadow (dashed variant)
│  │  │ "Still figuring it out,    │  │ │  icon: ❓
│  │  │  and that's completely     │  │ │
│  │  │  fine"                     │  │ │
│  │  └─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─┘  │ │
│  │                                │ │
│  │  Helper: "Pick the one that    │ │  #8A9B9D, 14px, centered
│  │  sounds most like your child.  │ │
│  │  We'll tailor what you see     │ │
│  │  next."                        │ │
│  └─────────────────────────────────┘ │
│                                       │
│  ┌─────────────────────────────────┐ │
│  │  GUARANTEE (embedded)           │ │  bg: #FBF7F1
│  │  "Whatever you tell us, the     │ │  h: ~80px
│  │  60-day guarantee still stands."│ │
│  └─────────────────────────────────┘ │
│                                       │
│  ┌─────────────────────────────────┐ │
│  │  TRUST-5: PROMISE BADGES STRIP  │ │  bg: #FFFFFF
│  │  [Shield] [Star] [Heart]       │ │  h: ~70px
│  │  "16,511 reviews · 4.9 ★      │ │
│  │   100,000+ parents trust BKC"  │ │
│  └─────────────────────────────────┘ │
│                                       │
│  ┌─────────────────────────────────┐ │
│  │  UTIL-05: LENA SIGNOFF CARD    │ │  bg: #1F2D2F
│  │  "Thanks for being here.        │ │  h: ~180px
│  │   If you have a question,       │ │
│  │   hit reply. You'll get me,     │ │
│  │   not a template, not a bot.    │ │
│  │   I read everything."           │ │
│  │  "Lena ——"                     │ │
│  │  "Customer Support ·            │ │
│  │   Mom of two autistic sons"     │ │
│  └─────────────────────────────────┘ │
│                                       │
│  ┌─────────────────────────────────┐ │
│  │  FOOTER                        │ │  bg: #FFFFFF
│  │  BrightKidCo · Address         │ │  h: ~140px
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

### Section 2: Hero — Mirror Moment
- **Component:** HERO-5 — Mirror Moment
- **Exact copy (verbatim from copy file):**
  - Badge: "Quick question"
  - H1: "Which one sounds like your child?"
  - Sub: "Two weeks in. Help us send you the right content."
- **Image:** /root/projects/brightkidco/raw/product-photos/lifestyle/toddler-potty-ladder-yellow-woodland.png (alt: "Toddler on potty with ladder, woodland yellow theme, warm natural light")
- **Dimensions:** 420×220px, 16px border radius, ink border 2px solid #1F2D2F
- **Background:** #FBF7F1
- **Padding:** 34px top, 22px sides
- **Typography:** Badge: 10.5px, 700, letter-spacing 2px, uppercase, #2BAEB4, bg: #EAF6F2, padding: 4px 10px, border-radius: 999px. H1: Fraunces 28px mobile / 34px desktop, 700, gradient text (teal #2BAEB4 → green #5DD07A on "your child"). Sub: 16px, 400, line-height 1.5, #4A6568.
- **Rendering Notes:** Image with ink border frame and 3px 3px 0 #1F2D2F shadow. Badge positioned above headline. Gradient text on "your child" uses CSS background-clip trick with fallback to solid #2BAEB4 for Outlook.

### Section 3: Flow-12 Level Detection (4 Clickable Buttons)
- **Component:** FLOW-12 — Level Detection
- **Exact copy (verbatim from copy file):**
  - **Level 1: Verbal & Aware 💬**
    - Icon: 💬 (speech bubble)
    - Color: Green #5DD07A
    - Title: "Verbal & aware"
    - Description: "Can tell you when they need to go, but signals arrive late"
  - **Level 2: Sometimes Aware 🤔**
    - Icon: 🤔 (thinking face)
    - Color: Teal #2BAEB4
    - Title: "Sometimes aware"
    - Description: "Inconsistent signals, mixed communication, pauses sometimes"
  - **Level 3: Rarely Aware 🫧**
    - Icon: 🫧 (bubbles)
    - Color: Pink #FFB5A0
    - Title: "Rarely aware"
    - Description: "Doesn't react to wet, no signal, needs full-body sensation"
  - **Level 4: Not Sure Yet ❓**
    - Icon: ❓ (question mark)
    - Color: Yellow #FFD866 (dashed border variant)
    - Title: "Not sure yet"
    - Description: "Still figuring it out, and that's completely fine"
    - Style: Dashed border on mint background (distinct from solid-border cards)
  - Helper: "Pick the one that sounds most like your child. We'll tailor what you see next."
- **Image:** None
- **Background:** #FBF7F1
- **Padding:** 22px sides, 20px top
- **Typography:** Level title: Fraunces 17px, 700, #1F2D2F. Level description: Questrial 13px, 400, #4A6568. Helper: Questrial 14px, 400, #8A9B9D, centered.
- **Rendering Notes — Custom Contraption:**
  - Four cards stacked vertically with 12px gap
  - Each solid card: #FFFFFF background, rounded corners (16px), ink border (2px solid #1F2D2F), ink shadow (3px 3px 0 #1F2D2F)
  - Each card contains:
    - Color circle (48px diameter) with emoji icon centered
    - Title in Fraunces 17px bold
    - Description in Questrial 13px regular
  - Color circles:
    - Level 1: #5DD07A (green) filled circle
    - Level 2: #2BAEB4 (teal) filled circle
    - Level 3: #FFB5A0 (pink) filled circle
    - Level 4: #FFD866 (yellow) filled circle
  - Card 4 (dashed variant):
    - Background: #EAF6F2 (mint)
    - Border: 2px dashed #2BAEB4 (NO ink shadow)
    - Visually distinct from solid-border cards
    - Signals "this is also welcome"
  - NO CTA button — the buttons ARE the interaction
  - Each card links to a Klaviyo flow trigger or landing page that updates the subscriber's tag (L1/L2/L3/GF)
  - Animation: Cards fade in sequentially (50ms delay between each) via CSS opacity transition. Fallback: all cards visible static.

### Section 4: Guarantee (Embedded)
- **Component:** TRUST-1 — 60-Day Seal (text variant)
- **Exact copy (verbatim from copy file):**
  - "Whatever you tell us, the 60-day guarantee still stands. You decide if this approach is working for your family."
- **Image:** None
- **Background:** #FBF7F1
- **Padding:** 20px sides, 24px top
- **Typography:** 15px, 400, line-height 1.6, #4A6568. "60-day guarantee" in bold, #2BAEB4.
- **Rendering Notes:** Clean, minimal. Text-only. Serves as the safety net below the detection cards. No guarantee seal image — text keeps it personal.

### Section 5: Trust Badges Strip
- **Component:** TRUST-5 — Promise Badges Strip
- **Exact copy (verbatim from copy file):**
  - "16,511 reviews · 4.9 ★ — 100,000+ parents trust BrightKidCo"
- **Image:** None (text + icons)
- **Background:** #FFFFFF
- **Padding:** 16px all sides
- **Typography:** 13px, 400, #8A9B9D, centered
- **Rendering Notes:** Three inline icons (shield, star, heart) in 16×16px, stroke #8A9B9D. Trust statement centered below icons. Subtle social proof without being heavy.

### Section 6: Lena Sign-Off (SHORT)
- **Component:** UTIL-05 — Signoff Card
- **Exact copy (verbatim from copy file):**
  - "Thanks for being here. If you have a question, hit reply. You'll get me, not a template, not a bot. I read everything."
  - Sign-off: "Lena —,"
  - Role: "Customer Support · Mom of two autistic sons"
- **Image:** None
- **Background:** #1F2D2F
- **Padding:** 0 sides, 36px bottom
- **Typography:** Body: 13px, 400, line-height 1.65, color #B8CACD, italic. Signature: 42px Caveat cursive, #D8F57C. Role: 12px, #8A9B9D.
- **Rendering Notes:** Dark card (#1F2A2C) with 22px border-radius, 1.5px border #2F3D40. Handwritten "Lena" in Caveat font. 1px emerald (#5DD07A) underline on Lena's name. Avatar ring gradient #FFD866 to #2BAEB4. SHORT variant per brand voice §9.

### Section 7: Footer
- **Component:** UTIL-04 — Footer
- **Exact copy (verbatim from copy file):**
  - BrightKidCo · support@brightkidco.com
  - "16,511 reviews · 4.9 ★ — 100,000+ parents trust BrightKidCo"
  - [Unsubscribe] | [Manage preferences]
- **Background:** #FFFFFF
- **Padding:** 30px all sides
- **Typography:** Tagline: 20px, italic, 500, #1F2D2F. Links: 14px, 500, #1F2D2F. Legal: 11.5px, #8A9B9D, line-height 1.65
- **Rendering Notes:** Social icons (Instagram, Facebook, TikTok) in 22×22px, stroke #1F2D2F. Gradient accent bar at bottom: 60×3px, #2BAEB4 to #5DD07A.

---

## 6. Component Details

### HERO-5 — Mirror Moment
- **Component ID:** HERO-5 (L4091)
- **Props:** badge text, headline text, subtext, hero image
- **Variants:** Default (no animation — mirror stillness)
- **Custom overrides:** Gradient text on "your child" (teal→green). "Quick question" badge as pill-shaped eyebrow. Ink border frame on hero image. Background #FBF7F1 (B.cream).

### LETTER-02 — Handwritten Opener
- **Component ID:** LETTER-02 (L7823)
- **Props:** background color, paragraph array
- **Variants:** Default
- **Custom overrides:** Helper text below detection cards. "Pick the one that sounds most like your child" in Questrial 14px, #8A9B9D, centered. Not used for body copy in this email — the detection cards are the main content.

### SP-01 — Yellow Quote Block
- **Component ID:** SP-01 (L4803)
- **Props:** quote text, attribution, accent color
- **Variants:** Default
- **Custom overrides:** Not used as standalone section — recognition language is embedded in the detection cards themselves. The cards ARE social proof via recognition.

### EDU-6 — FAQ Blocks
- **Component ID:** EDU-6 (L5554)
- **Props:** title, body text, accent color
- **Variants:** Default
- **Custom overrides:** "Two weeks in" context as gentle education. Mechanism explanation referenced in body copy but not as standalone FAQ section. The email is intentionally lighter on mechanism than detection-10 — this email is about recognition, not education.

### ProductShowcaseSoft
- **Component ID:** ProductShowcaseSoft (from product-showcase.jsx)
- **Props:** eyebrow, title, sub
- **Variants:** Soft (no hard product imagery)
- **Custom overrides:** Not used as standalone product section — product is referenced in body copy only. This email's purpose is segmentation via recognition, not product conversion.

### FLOW-12 — Level Detection
- **Component ID:** FLOW-12 (custom detection component)
- **Props:** card array (4 cards with icon, color, title, description)
- **Variants:** Four-button variant with emoji icons and dashed "Not sure" variant
- **Custom overrides:**
  - Cards use symptom-based language ONLY — no "Level 1," "Level 2," etc.
  - Each card contains: emoji icon (💬/🤔/🫧/❓), color circle (48px), title (Fraunces 17px bold), description (Questrial 13px)
  - Color circles: #5DD07A (green), #2BAEB4 (teal), #FFB5A0 (pink), #FFD866 (yellow)
  - Card borders: 2px solid #1F2D2F (ink) with 3px 3px 0 #1F2D2F shadow
  - Card 4 (dashed variant): #EAF6F2 mint background, 2px dashed #2BAEB4 border, NO ink shadow
  - NO CTA button — the buttons ARE the interaction
  - Each button links to a Klaviyo flow trigger or landing page that updates the subscriber's tag (L1/L2/L3/GF)
  - Sequential fade-in animation (50ms delay per card) via CSS opacity transition

### TRUST-5 — Promise Badges Strip
- **Component ID:** TRUST-5 (L6417)
- **Props:** icon array, text
- **Variants:** Default
- **Custom overrides:** Three icons (shield, star, heart) in 16×16px. Trust statement "16,511 reviews · 4.9 ★ — 100,000+ parents" centered below.

### UTIL-05 — Signoff Card
- **Component ID:** UTIL-05 (L9012)
- **Props:** signoff text, body text, role text
- **Variants:** SHORT variant (per brand voice §9)
- **Custom overrides:** SHORT sign-off. "Thanks for being here" opener. Reply prompt included. 1px emerald (#5DD07A) underline on Lena's name. No P.S. in this variant — clean, short, personal.

---

## 7. Image Briefs

### Image 1: Hero Lifestyle
- **Path:** /root/projects/brightkidco/raw/product-photos/lifestyle/toddler-potty-ladder-yellow-woodland.png
- **Alt text:** "Toddler on potty with ladder, woodland yellow theme, warm natural light"
- **Recommended dimensions:** 420×220px (hero), 420×180px (fallback)
- **Cropping/Focal:** Center crop on child. Warm yellow/woodland tones match the warm cream (#FBF7F1) background.
- **Fallback color:** #FBF7F1

### Image 2: Product Flat Lay
- **Path:** /root/projects/brightkidco/raw/product-photos/flat-lay/training-pant-bunny-hearts-pink.jpg
- **Alt text:** "BrightKidCo Body-Signal Learning Pants in bunny hearts pink, flat lay product photo"
- **Recommended dimensions:** 200×110px (if used in guarantee section)
- **Cropping/Focal:** Full product visible. Clean background.
- **Fallback color:** #FBF7F1
- **Usage note:** Optional. This email is recognition-first, not product-first. Image may be used as a small inline illustration in the guarantee section. Not required for the email's core purpose.

---

## 8. Rendering Notes

- **Email client considerations:** All CSS inline. No @font-face (Gmail strips). Fraunces and Questrial via Google Fonts with system stack fallback (Georgia, serif for Fraunces; Helvetica Neue, Arial, sans-serif for Questrial). Caveat for Lena's signature via Google Fonts with fallback to cursive. Outlook: VML background for hero area. Dark mode: respects prefers-color-scheme, #FBF7F1 → #1A1A1A, #1F2D2F → #FFFFFF, #D8F57C → #5DD07A, #EAF6F2 → #0A2A22.
- **Mobile responsive:** Single column below 480px. Cards become full-width with increased touch targets (min 48px height per button area). Padding reduces from 40px to 24px. Headline drops to 24px. Body text stays at minimum 16px for readability. Emoji icons increase to 56px diameter on mobile for easier tap targeting.
- **Accessibility:** All images have descriptive alt text. Color contrast ratios: #1F2D2F on #FBF7F1 = 12.8:1 ✓, #4A6568 on #FBF7F1 = 5.6:1 ✓, #B8CACD on #1F2D2F = 6.1:1 ✓. Link text descriptive (no "click here"). ARIA labels on interactive card elements. Each card has role="button" and aria-label describing the symptom text (e.g., "Select: Talks about the potty but won't actually do it").
- **Special instructions:** Cross-level email — serves ALL levels simultaneously (L1/L2/L3/GF). No level-specific imagery or language. The four buttons use recognition language, not labels — "Verbal & aware" not "Level 1." The dashed "Not sure yet" variant (Card 4) uses mint (#EAF6F2) background and dashed #2BAEB4 border to signal "this is also welcome" — preventing abandonment from parents who can't categorize yet. NO CTA button anywhere in the email — the detection cards ARE the interaction. Each card click triggers a Klaviyo flow update. The hero image (toddler on potty with ladder) is warm and non-clinical — matches the kitchen-table conversation tone. Gradient text on "your child" uses CSS background-clip with #2BAEB4→#5DD07A, with solid #2BAEB4 fallback for Outlook.
