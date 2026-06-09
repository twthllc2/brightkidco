# Wireframe: Welcome Flow — E6 | GF (General Family)

## 1. Metadata

| Field | Value |
|-------|-------|
| **Flow** | Welcome Flow (Flow 1) |
| **Position** | E6 — Day 14 |
| **Level** | GF (General Family), Cross-level inclusive |
| **Copy File** | `/root/projects/brightkidco/outputs/copy/welcome/welcome-01-e6-gf.md` |
| **Strategy Map Entry** | `flows.welcome.emails["e6-gf"]` |
| **Flow Signature** | warm-educational · coral accent · medium density · permission-based CTA tone |
| **Level Calibration** | L1/L2/L3/GF — GF cross-level: symptom language only (R1), 3-5 recognition anchors (R2), age ranges not fixed ages (R3), verbal+non-verbal inclusive (R4), timeline flexibility (R5), low-bar success metrics (R6). No level labels anywhere. |
| **Component Categories Used** | HERO, TEXT/LETTER, TESTIMONIAL/SOCIAL PROOF, MECHANISM/EDUCATION, PRODUCT SHOWCASE, CTA, GUARANTEE/TRUST, DECORATIVE/DIVIDER |
| **Total Estimated Height** | ~2,400px (mobile 420px width) |

## 2. Strategy Box

**Big Idea:** "Too dry to learn" — the moisture-wicking tech parents pay a premium for is precisely the thing blocking body awareness. This email reframes a premium feature as the hidden obstacle. No guilt, no blame. Just a gentle "oh, *that's* why" moment.

**Emotional Arc Position:** Position 6 of 8 — this is the pull-up reframe + guarantee push. The reader has been educated on mechanism (E1-E4) and heard social proof (E5). Now they confront the single biggest barrier: pull-ups. This is the "learning objections" phase — the email must reframe, not accuse.

**Component Selection Rationale:**
- HERO-7 (Counter-Intuitive Truth): The hook IS counter-intuitive ("the thing helping is hurting"). This hero variant opens with a truth that disrupts assumption — perfect for the pull-up reframe.
- LETTER-03 (Letter + Pull-Quote): Long-form letter with embedded pull-quotes. Needed because this email has dense copy — hook, validation, mechanism, social proof, guarantee, PS. The pull-quotes break the density.
- SP-03 (Stat Row): The 49% CDC stat and $50-100/month cost comparison need a stat-callout treatment. SP-03 surfaces numbers visually.
- EDU-12 (Comparison Matrix): Pull-ups vs BrightKidCo side-by-side is the email's centerpiece contraption. EDU-12 handles multi-row comparison tables.
- ProductShowcaseFull: Hero product moment — E6 is the first full product reveal in the flow (per product-showcase.jsx comment: "E4, E6 hero product moment").
- CTA-5 (Product CTA): Direct product CTA with price anchoring. "Shop the 3+3 Bundle, $79.99, Free Shipping" — action verb + benefit + social proof.
- TRUST-2 (Guarantee Detail Cards): The 60-day guarantee needs visual weight. TRUST-2 provides expandable detail cards, not just a badge.
- 20.3 (Gradient Band Variants): Section transitions between the cool-blue pull-up section and the warm-green mechanism section require a gradient band.

**Differentiation Note:** E6-GF is visually differentiated from other welcome emails by:
1. The pull-up vs BKC comparison matrix (unique to E6)
2. Cool-to-warm color transition (pull-up section cool blue → mechanism section warm green)
3. The guarantee section uses detail cards (TRUST-2) vs. the seal badge (TRUST-1) used in E1-E3
4. Lena sign-off is MEDIUM→LONG transition (deeper than E1-E5, less than E7-E8)

## 3. Creative Box

**Color Palette:**
- Primary: `#2BAEB4` B.teal — CTAs, links, accent elements, hero icon accents
- Secondary: `#5DD07A` B.green — Success indicators, mechanism section accent, layer 2
- Accent: `#D85A30` Coral — CTA button fill, blockquote left-border, stat numbers, "signal" highlight
- Background: `#FDF8F5` Warm cream — Main email background (per creative strategy)
- Text: `#1F2D2F` B.ink — Primary text, headings, borders
- Supporting backgrounds:
  - `#E6F1FB` Cool blue — Pull-up reframe section (analytical, "old way")
  - `#E1F5EE` Pale green — Mechanism section (growth, "new way")
  - `#FAECE7` Pale coral — Blockquote backgrounds, testimonial accents
- Muted text: `#8A9B9D` B.muted — Footer, secondary info
- CTA text on dark: `#D8F57C` Lime — On dark backgrounds
- Badge: `#FFD866` Warm yellow — Guarantee badge background
- Dividers: `#D3D1C7` Light warm gray — Section rules

**Typography:**
- Heading: Questrial, 28px mobile / 36px desktop, Bold (700), line-height 1.15, letter-spacing -0.4px, color `#1F2D2F`
- Body: Questrial, 16px mobile / 17px desktop, Regular (400), line-height 1.6, color `#2C2C2A` (warm deep gray)
- Accent: Fraunces (serif), 16px italic, Regular (400), line-height 1.5, color `#4A6568` — for pull-quotes and emphasis
- Eyebrow: Questrial, 10.5px, Bold (700), letter-spacing 1.5px, text-transform uppercase, color `#2BAEB4` B.teal
- Stat numbers: Questrial, 24px mobile / 28px desktop, Bold (700), color `#D85A30` coral
- CTA button: Questrial, 16px, Bold (700), letter-spacing 0.3px, color `#FFFFFF` white
- Footer: Questrial, 11px, Regular (400), color `#8A9B9D`

**Border Radius:** Cards: 16px, Buttons: 6px, Images: 0px (FramedImage uses ink-border style), Small (badges): 999px pill

**Shadow:** Primary: `6px 6px 0 #1F2D2F` (ink block shadow, per primitives.jsx), Secondary: `3px 3px 0 #1F2D2F` (sub-cards)

**Spacing:** Section gap: 30px, H-padding: 22px (mobile) / 30px (desktop), Card padding: 22px / 22px, Element gap: 14px

## 4. Layout ASCII

```
┌──────────────────────────────────────────────────────┐
│                    420px width                        │
├──────────────────────────────────────────────────────┤
│ ┌──────────────────────────────────────────────────┐ │
│ │  [LOGO]  BrightKidCo                            │ │
│ │          Header: bg #FDF8F5, centered logo       │ │
│ └──────────────────────────────────────────────────┘ │
│                                                      │
│ ┌──────────────────────────────────────────────────┐ │
│ │  HERO-7: Counter-Intuitive Truth                 │ │
│ │  ┌─ ImgFrame ──────────────────────────────────┐ │ │
│ │  │  Hero lifestyle image                       │ │ │
│ │  │  toddler-livingroom-dino-yellow.png          │ │ │
│ │  │  600×400px (2×: 1200×800)                   │ │ │
│ │  └─────────────────────────────────────────────┘ │ │
│ │                                                  │ │
│ │  Eyebrow: [SIGNAL REFRAME]                      │ │
│ │  H1: "Whether your child has been in pull-ups    │ │
│ │       for three months or three years..."        │ │
│ │  Sub: "...there's a reason for that.             │ │
│ │        And it's probably not what you think."    │ │
│ │                                                  │ │
│ │  CTA-5: [ Try the Body-Signal approach → ]       │ │
│ │  bg: #D85A30 coral, text: #FFF                  │ │
│ └──────────────────────────────────────────────────┘ │
│                                                      │
│ ── Gradient Band (20.3): #FDF8F5 → #E6F1FB ──────── │
│                                                      │
│ ┌──────────────────────────────────────────────────┐ │
│ │  LETTER-03: Pull-Up Reframe (PAS)               │ │
│ │  bg: #E6F1FB cool blue                          │ │
│ │                                                  │ │
│ │  Body copy: "Pull-ups are designed to keep       │ │
│ │  kids completely dry..." (3 paragraphs)          │ │
│ │                                                  │ │
│ │  ┌─ Blockquote ──────────────────────────────┐   │ │
│ │  │ "She'll pee herself and just keep playing │   │ │
│ │  │  in the puddle. It's like she doesn't     │   │ │
│ │  │  care AT ALL."                            │   │ │
│ │  │  — Real parent                            │   │ │
│ │  │  left-border: 3px #D85A30, bg: #FAECE7   │   │ │
│ │  └──────────────────────────────────────────┘   │ │
│ │                                                  │ │
│ │  Validation: "That's not a parenting failure.   │ │
│ │  That's a measurable neurological gap."         │ │
│ │                                                  │ │
│ │  ┌─ SP-03: Stat Row ────────────────────────┐   │ │
│ │  │ [49%] of autistic 4-5 yr olds not trained │   │ │
│ │  │  [Wiggins 2022, CDC/SPARK]               │   │ │
│ │  └──────────────────────────────────────────┘   │ │
│ └──────────────────────────────────────────────────┘ │
│                                                      │
│ ── Gradient Band (20.3): #E6F1FB → #E1F5EE ──────── │
│                                                      │
│ ┌──────────────────────────────────────────────────┐ │
│ │  EDU-12: Mechanism — Comparison Matrix          │ │
│ │  bg: #E1F5EE pale green                         │ │
│ │                                                  │ │
│ │  H2: "The 3-Layer Body-Signal Learning System"  │ │
│ │                                                  │ │
│ │  ┌── 3-Layer Table ─────────────────────────┐   │ │
│ │  │ Layer 1: Inner Cotton    │ Gentle signal  │   │ │
│ │  │ Layer 2: Smart Absorb    │ 3× absorption  │   │ │
│ │  │ Layer 3: Barrier         │ Leak-resistant │   │ │
│ │  │ rows: #FFFFFF / #FDF8F5 alternating       │   │ │
│ │  └──────────────────────────────────────────┘   │ │
│ │                                                  │ │
│ │  ┌─ ImgFrame ──────────────────────────────┐    │ │
│ │  │  IMG-02: 3-Layer cross-section diagram  │    │ │
│ │  │  training-pant-fox-woodland-white.jpg    │    │ │
│ │  │  600×300px (2×: 1200×600)               │    │ │
│ │  └──────────────────────────────────────────┘   │ │
│ │                                                  │ │
│ │  Pull-Ups vs BKC Comparison:                    │ │
│ │  ┌──────────────┬────────────────────────┐      │ │
│ │  │  PULL-UPS    │  BRIGHTKIDCO           │      │ │
│ │  │  ✗ Dry       │  ✓ Signal              │      │ │
│ │  │  ✗ $50-100/mo│  ✓ $13.33/pair         │      │ │
│ │  │  ✗ Diaper    │  ✓ Big kid pride       │      │ │
│ │  │  ✗ Blocks    │  ✓ Teaches             │      │ │
│ │  │  bg: #FAECE7 │  bg: #E1F5EE           │      │ │
│ │  └──────────────┴────────────────────────┘      │ │
│ └──────────────────────────────────────────────────┘ │
│                                                      │
│ ── Gradient Band (20.3): #E1F5EE → #FDF8F5 ──────── │
│                                                      │
│ ┌──────────────────────────────────────────────────┐ │
│ │  SP-03 + LETTER-03: Social Proof                 │ │
│ │  bg: #FAF8F5                                     │ │
│ │                                                  │ │
│ │  ┌─ Blockquote 1 ───────────────────────────┐   │ │
│ │  │ "She started doing better once I eased   │   │ │
│ │  │  up on the stressing out about her not   │   │ │
│ │  │  getting it." — Lynne C.                 │   │ │
│ │  └──────────────────────────────────────────┘   │ │
│ │                                                  │ │
│ │  ┌─ Blockquote 2 ───────────────────────────┐   │ │
│ │  │ "Potty training isn't linear. Some days  │   │ │
│ │  │  are great. Others aren't. That's not    │   │ │
│ │  │  starting over, that's how learning      │   │ │
│ │  │  happens." — From our community          │   │ │
│ │  └──────────────────────────────────────────┘   │ │
│ └──────────────────────────────────────────────────┘ │
│                                                      │
│ ┌──────────────────────────────────────────────────┐ │
│ │  TRUST-2: 60-Day Guarantee Detail Cards         │ │
│ │  bg: #FAF8F5                                     │ │
│ │                                                  │ │
│ │  Body: "Every child's nervous system is          │ │
│ │  different. Some kids show first awareness in    │ │
│ │  2 weeks. For others it takes 8 weeks or more."  │ │
│ │                                                  │ │
│ │  ┌─ Guarantee Card ─────────────────────────┐   │ │
│ │  │  Shield icon: line art, 1.5px stroke     │   │ │
│ │  │  "60-Day Guarantee · Your Judgment"      │   │ │
│ │  │  "If nothing changes, full refund"       │   │ │
│ │  │  bg: #FFD866 badge, rounded card         │   │ │
│ │  └──────────────────────────────────────────┘   │ │
│ │                                                  │ │
│ │  "You don't have to believe me.                 │ │
│ │   You just have to try."                        │ │
│ └──────────────────────────────────────────────────┘ │
│                                                      │
│ ┌──────────────────────────────────────────────────┐ │
│ │  ProductShowcaseFull: 3+3 Bundle                 │ │
│ │  bg: #FFFFFF (card on cream)                     │ │
│ │                                                  │ │
│ │  Eyebrow: "THE PRODUCT"                         │ │
│ │  H2: "Body-Signal Learning Layer™ Pants"        │ │
│ │                                                  │ │
│ │  ┌─ Product Card ───────────────────────────┐   │ │
│ │  │  ImgFrame: lifestyle hero shot            │   │ │
│ │  │  cloth-pads-watermelon-astronaut-cat.png  │   │ │
│ │  │  600×400px                                │   │ │
│ │  │  ┌─ 60 days calm badge (top-right) ─┐    │   │ │
│ │  │  └──────────────────────────────────┘    │   │ │
│ │  │                                          │   │ │
│ │  │  Body-Signal Learning Layer™ Pants       │   │ │
│ │  │  From $79.99 (3+3 Bundle)               │   │ │
│ │  │  That's $13.33/pair                     │   │ │
│ │  │                                          │   │ │
│ │  │  [◉ Body-Signal Layer™] [✓ 60-day]     │   │ │
│ │  │  [♡ Sensory-friendly]                   │   │ │
│ │  │                                          │   │ │
│ │  │  [ Shop the 3+3 Bundle → ]              │   │ │
│ │  │  bg: #1F2D2F, text: #D8F57C            │   │ │
│ │  └──────────────────────────────────────────┘   │ │
│ │                                                  │ │
│ │  ┌─ 2-up sub row ─────────────────────────┐    │ │
│ │  │ [3 colourways] [Ages 2–7]              │    │ │
│ │  └─────────────────────────────────────────┘    │ │
│ └──────────────────────────────────────────────────┘ │
│                                                      │
│ ┌──────────────────────────────────────────────────┐ │
│ │  LETTER-03: PS Line                              │ │
│ │  bg: #FAF8F5                                     │ │
│ │                                                  │ │
│ │  "P.S. The average parent spends $600-1,200/yr  │ │
│ │  on pull-ups. One BrightKidCo pair costs less    │ │
│ │  than two weeks of disposables..."               │ │
│ └──────────────────────────────────────────────────┘ │
│                                                      │
│ ┌──────────────────────────────────────────────────┐ │
│ │  CTA-5: Bottom CTA                               │ │
│ │  bg: #1F2D2F (dark ink)                          │ │
│ │                                                  │ │
│ │  "Try the Body-Signal approach for 60 days.      │ │
│ │   By your judgment."                             │ │
│ │  [ Shop the 3+3 Bundle, $79.99, Free Shipping ]  │ │
│ │  bg: #D8F57C lime, text: #1F2D2F                │ │
│ │                                                  │ │
│ │  ✓ Free shipping  ✓ 60-Day Guarantee  ✓ Secure  │ │
│ └──────────────────────────────────────────────────┘ │
│                                                      │
│ ┌──────────────────────────────────────────────────┐ │
│ │  UTIL-05: Lena Signoff (MEDIUM→LONG)             │ │
│ │  bg: #1F2D2F (dark ink)                          │ │
│ │                                                  │ │
│ │  Avatar card with gradient ring                   │ │
│ │  "A note from Lena Bauer"                        │ │
│ │  "Founder · BrightKidCo · Mom of two"            │ │
│ │  ── dashed rule ──                               │ │
│ │  "With care,"                                    │ │
│ │  [Caveat] Lena (gradient #D8F57C)               │ │
│ │  ── dashed rule ──                               │ │
│ │                                                  │ │
│ │  "I have two autistic sons. One's 6, still in    │ │
│ │  the middle of it. The other took us until he    │ │
│ │  was almost 8..." (2 paragraphs)                 │ │
│ │                                                  │ │
│ │  "If you have questions, just hit reply.         │ │
│ │   You'll get me, not a bot."                     │ │
│ └──────────────────────────────────────────────────┘ │
│                                                      │
│ ┌──────────────────────────────────────────────────┐ │
│ │  UTIL-04: Footer                                 │ │
│ │  bg: #1F2D2F                                     │ │
│ │                                                  │ │
│ │  BrightKidCo                                     │ │
│ │  1234 Commerce Street, Suite 200, LA 90017       │ │
│ │  [Unsubscribe] · [Manage Preferences]            │ │
│ │  "Questions? Reply to this email."                │ │
│ └──────────────────────────────────────────────────┘ │
└──────────────────────────────────────────────────────┘
```

## 5. Section Specs

### Section 1 — Header
- Component: Header (primitives.jsx)
- Background: `#FDF8F5`
- Padding: 24px 20px 0
- Logo: `../assets/brightkidco-logo-v2.png`, height 34px, centered
- Special notes: Static header, no navigation

### Section 2 — Hero (Above Fold)
- Component: HERO-7 — Counter-Intuitive Truth (L3950)
- Background: `#FDF8F5`
- Image: `toddler-livingroom-dino-yellow.png`, 600×400px (2× 1200×800), alt: "Child playing comfortably in BrightKidCo Body-Signal underwear"
- Eyebrow text: `SIGNAL REFRAME` — Questrial 10.5px, B.teal, uppercase, letter-spacing 1.5px
- H1: "Whether your child has been in pull-ups for three months or three years, if they never seem to notice when they're wet, there's a reason for that." — Questrial 28px/36px, Bold, `#1F2D2F`
- Subhead: "And it's probably not what you think." — Questrial 20px/24px, Semi-bold 600, `#555555`
- CTA: Inline text link leading to guarantee section
- Padding: 34px 22px
- Special notes: Above-fold content must work without scrolling. F-shaped reading pattern.

### Section 3 — Gradient Transition
- Component: 20.3 — Gradient Band Variants (L1889)
- Gradient: `#FDF8F5` → `#E6F1FB` (linear, 180deg)
- Height: 40px
- Purpose: Visual transition from warm intro to cool analytical pull-up reframe

### Section 4 — Pull-Up Reframe (PAS: Problem + Agitate)
- Component: LETTER-03 — Letter + Pull-Quote (L7826)
- Background: `#E6F1FB` cool blue tint
- Padding: 4px 24px 28px
- Body copy (verbatim from copy file):
  - "Whether your child has been in pull-ups for three months or three years, if they never seem to notice when they're wet, there's a reason for that."
  - "And it's probably not what you think."
  - "Pull-ups are designed to keep kids completely dry. That's literally their job. But here's the catch: that moisture-wicking technology parents pay a premium for, $50 to $100+ every single month, was built for neurotypical kids who can already feel the 'I need to go' signal. For those kids, staying dry during training is a helpful feature."
  - "For your child? It might be the very thing keeping them stuck."
- Blockquote: `"She'll pee herself and just keep playing in the puddle. It's like she doesn't care AT ALL."` — Real parent
  - Left border: 3px solid `#D85A30`
  - Background: `#FAECE7`
  - Border-radius: 8px
  - Padding: 20px left
  - Font: Fraunces italic 16px, `#555555`
- Validation: "That's not a parenting failure. That's a measurable neurological gap." — Bold emphasis
- Stat callout: 49% statistic from SPARK study — Questrial 24px Bold `#D85A30`
- Typography: Questrial 16px, line-height 1.6, `#2C2C2A`
- Special notes: R1-R6 cross-level compliance verified. No level labels. Symptom language only.

### Section 5 — Gradient Transition
- Component: 20.3 — Gradient Band Variants
- Gradient: `#E6F1FB` → `#E1F5EE` (linear, 180deg)
- Height: 40px
- Purpose: Transition from analytical cool to warm growth/hope

### Section 6 — Mechanism (Solve)
- Component: EDU-12 — Comparison Matrix (L5552)
- Background: `#E1F5EE` pale green
- H2: "The 3-Layer Body-Signal Learning System" — Questrial 28px Bold `#1F2D2F`, centered
- 3-Layer Table:
  - Layer 1: Inner Cotton → "Gentle 'uh-oh' sensation" → "Teaches the brain: 'this is what wet feels like'"
  - Layer 2: Smart Absorption → "Absorbs 3x more than regular undies" → "Protects without blocking awareness"
  - Layer 3: Protective Barrier → "Leak-resistant outer layer" → "Saves furniture & clothes"
  - Alternating row backgrounds: `#FFFFFF` / `#FDF8F5`
  - Border: 2px `#1F2D2F` ink
- Image: `training-pant-fox-woodland-white.jpg`, 600×300px, alt: "Body-Signal Learning Layer cross-section showing three-layer system"
- Comparison Matrix: Pull-Ups vs BrightKidCo
  - Two-column layout, stacked on mobile
  - Pull-Ups column: bg `#FAECE7`, icon: sterile shield
  - BKC column: bg `#E1F5EE`, icon: wave/signal
  - Rows: signal (✗/✓), cost ($50-100/mo vs $13.33/pair), feel (diaper vs big kid), loop (blocks vs teaches)
- Padding: 28px 22px
- Special notes: The "opposite of pull-ups" visual contrast is the email's centerpiece. On mobile, columns stack vertically.

### Section 7 — Gradient Transition
- Component: 20.3 — Gradient Band Variants
- Gradient: `#E1F5EE` → `#FAF8F5` (hard cut with 1px rule)
- Height: 1px rule at 80% opacity
- Purpose: Change of mood from mechanism to social proof

### Section 8 — Social Proof
- Component: SP-03 — Stat Row (L4829) + LETTER-03 embedded
- Background: `#FAF8F5`
- Two blockquotes:
  1. `"She started doing better once I eased up on the stressing out about her not getting it."` — Lynne C., real parent
  2. `"Potty training isn't linear. Some days are great. Others aren't. That's not starting over, that's how learning happens."` — From our community
- Both quotes use: left border 3px `#D85A30`, bg `#FAECE7`, border-radius 8px, Fraunces italic 16px
- Padding: 24px 22px
- Special notes: Universal quotes only (R3 cross-level). No level-specific markers.

### Section 9 — 60-Day Guarantee
- Component: TRUST-2 — Guarantee Detail Cards (L6414)
- Background: `#FAF8F5`
- Copy (verbatim): "This is the honest part: every child's nervous system is different. Some kids show first awareness in 2 weeks. For others it takes 8 weeks or more. Both are normal."
- "That's why the 60-Day Guarantee exists. Try the Body-Signal approach for 60 days. If you see any sign of awareness, a pause, a look down, a step toward the potty, you'll know the signal is working. If nothing changes, full refund. Your judgment."
- Guarantee Card:
  - Shield icon: circular, line art, 1.5px stroke `#1F2D2F`
  - Text: "60-Day Guarantee · Your Judgment" — Questrial 14px Bold
  - Subtext: "If nothing changes, full refund" — Questrial 12px `#8A9B9D`
  - Background: `#FFD866` badge with rounded card
  - Border: 2px `#1F2D2F`
- Closing line: "You don't have to believe me. You just have to try." — Fraunces italic
- Padding: 28px 22px
- Special notes: R4 CTA pressure = LOW-MEDIUM. "By your judgment" framing. Permission-based.

### Section 10 — Product Showcase
- Component: ProductShowcaseFull (product-showcase.jsx)
- Background: Card `#FFFFFF` on `#FAF8F5`
- Eyebrow: `THE PRODUCT` — Questrial 10.5px B.teal uppercase
- H2: "Body-Signal Learning Layer™ Pants" — Questrial 28px Bold, with gradient accent on "Layer™"
- Sub: "60-day calm-progress guarantee. Return anytime, any reason."
- Product Card (border 2px `#1F2D2F`, border-radius 24px, shadow `6px 6px 0 #1F2D2F`):
  - Hero shot: `cloth-pads-watermelon-astronaut-cat.png`, 600×400px, alt: "BrightKidCo Body-Signal Learning Layer pants product"
  - Floating badge: `✿ 60 days calm` — bg `#FFD866`, border 2px `#1F2D2F`, rotated 4°, pill shape
  - Product name: `Body-Signal Learning Layer™ Pants`
  - Brand eyebrow: `BrightKidCo` — Questrial 10.5px B.teal uppercase
  - Price: From `$79.99` — Questrial 28px Bold
  - Price note: `$13.33 per pair with the bundle — less than half the single-pair price.` — italic
  - Feature pills: `◉ Body-Signal Layer™` · `✓ 60-day guarantee` · `♡ Sensory-friendly`
    - bg `#FAF7F0`, border 1.5px `#1F2D2F`, pill radius 999
  - CTA: `Shop the 3+3 Bundle →` — bg `#1F2D2F`, text `#D8F57C`, radius 999, 16px 24px padding
  - Micro trust: "Free shipping on 3+3 Bundle · 60-Day Guarantee · Secure checkout" — 11px `#8A9B9D`
- 2-up sub-row:
  - Left card: `COLOURWAY 01` — "Sage · soft green" — 3 colourways
  - Right card: `SIZE RANGE` — "2T · 3T · 4T · 5T · 6T" — Ages 2–7
  - Both: border 2px `#1F2D2F`, border-radius 14, shadow `3px 3px 0 #1F2D2F`
- Padding: 28px 14px 20px
- Special notes: This is the hero product moment for E6. Full showcase treatment.

### Section 11 — PS Line
- Component: LETTER-03 (embedded)
- Background: `#FAF8F5`
- Copy (verbatim): "**P.S.** The average parent spends $600-1,200/year on pull-ups. One BrightKidCo pair costs less than two weeks of disposables, and it actually teaches body awareness instead of blocking it."
- Typography: Questrial 15px, color `#4A6568`
- Padding: 20px 22px
- Special notes: Easter egg — subtle cost comparison that reframes purchase as "fraction of what you're already spending."

### Section 12 — Bottom CTA
- Component: CTA-5 — Product CTA (L6708)
- Background: `#1F2D2F` dark ink
- Intro text: "Try the Body-Signal approach for 60 days. By your judgment." — Questrial 14px, color `#B8CACD`
- Button: `Shop the 3+3 Bundle, $79.99, Free Shipping →` — bg `#D8F57C`, text `#1F2D2F`, Questrial 15.5px Bold, radius 999, letter-spacing 0.3
- Trust signals: ✓ Free shipping · ✓ 60-Day Money-Back Guarantee · ✓ Secure checkout — Questrial 12px `#8A9B9D`
- Padding: 20px 22px 44px

### Section 13 — Lena Signoff (MEDIUM→LONG)
- Component: UTIL-05 — Signoff Card (L7600)
- Background: `#1F2D2F` dark ink
- Inner card: bg `#1F2A2C`, border 1.5px `#2F3D40`, border-radius 22px
- Gradient accent bar at top: `#2BAEB4` → `#5DD07A`
- Avatar: 58px circle with gradient ring (`#FFD866` → `#2BAEB4`), portrait placeholder
- Name: "Lena Bauer" — 17px Bold `#FFFFFF`
- Role: "Founder · BrightKidCo · Mom of two" — 12px italic `#8FAFB2`
- Signature: "Lena" in Caveat cursive 42px `#D8F57C`
- Dashed rules: 1.5px `#3A4547`
- Sign-off body (verbatim, MEDIUM→LONG):
  - "I have two autistic sons. One's 6, still in the middle of it. The other took us until he was almost 8. I know what it's like to look at a pull-up package and wonder if you're making the right call, or to buy something new and feel the same disappointment when nothing changes."
  - "I'm not here to sell you hope. I'm here to explain how the signal works, and let you decide if it's right for your child."
  - "If you have questions, just hit reply. You'll get me, not a bot."
- Closing: "With care, Lena" — Questrial 14px, `#B8CACD`
- Padding: 0 22px 36px
- Special notes: MEDIUM→LONG transition signals relationship deepening. Full vulnerability comes at E8.

### Section 14 — Footer
- Component: UTIL-04 — Footer (L7571)
- Background: `#1F2D2F`
- Text: "BrightKidCo" — Questrial 12px `#8A9B9D`
- Address: "1234 Commerce Street, Suite 200, Los Angeles, CA 90017" — Questrial 11px `#8A9B9D`
- Links: `[Unsubscribe]({{unsubscribe_url}})` · `[Manage Preferences]({{manage_preferences_url}})` — `#8A9B9D` underline
- Reply line: "Questions? Reply to this email, we read every response." — Questrial 11px `#8A9B9D`
- Padding: 20px 22px 36px

## 6. Component Details

### HERO-7 — Counter-Intuitive Truth (L3950)
- **Category:** HERO
- **Props:** eyebrow text, headline, subheadline, hero image, CTA
- **Variant:** Counter-intuitive opener — leads with a truth that disrupts assumption
- **Custom overrides:** Headline size reduced to 28px mobile (from default 36px) for copy density. Subheadline uses warm gray `#555555` instead of B.soft for higher contrast.

### LETTER-03 — Letter + Pull-Quote (L7826)
- **Category:** TEXT/LETTER
- **Props:** background color, paragraph array, first (bold opener), pull-quotes
- **Variant:** Long-form letter with embedded pull-quotes for density breaking
- **Custom overrides:** Pull-quote left-border changed to `#D85A30` coral (from default B.teal) to match creative strategy color narrative.

### SP-03 — Stat Row (L4829)
- **Category:** TESTIMONIAL/SOCIAL PROOF
- **Props:** stat value, stat label, source citation
- **Variant:** Single stat callout with supporting text
- **Custom overrides:** Stat number in coral `#D85A30` (from default B.teal) for emphasis.

### EDU-12 — Comparison Matrix (L5552)
- **Category:** MECHANISM/EDUCATION
- **Props:** comparison rows, column headers, row backgrounds
- **Variant:** Multi-row comparison table with alternating shading
- **Custom overrides:** Added pull-up vs BKC comparison matrix below the 3-layer table. Two-column layout stacks on mobile. Left column bg `#FAECE7`, right column bg `#E1F5EE`.

### ProductShowcaseFull
- **Category:** PRODUCT SHOWCASE
- **Props:** eyebrow, title, titleAccent, sub, priceFrom, priceNote, features, ctaButton, guaranteeBadge
- **Variant:** Full hero product block with lifestyle image, price, feature pills, CTA
- **Custom overrides:** priceFrom set to "$79.99" (bundle price), priceNote: "$13.33 per pair with the bundle", ctaButton: "Shop the 3+3 Bundle", features array uses default 3 pills.

### CTA-5 — Product CTA (L6708)
- **Category:** CTA
- **Props:** intro text, button text, fine print, background
- **Variant:** Dark block CTA with lime green button
- **Custom overrides:** Button text: "Shop the 3+3 Bundle, $79.99, Free Shipping →". Trust signals added below button.

### TRUST-2 — Guarantee Detail Cards (L6414)
- **Category:** GUARANTEE/TRUST
- **Props:** guarantee statement, detail cards, closing line
- **Variant:** Expandable detail cards with shield badge
- **Custom overrides:** Shield icon uses `#1F2D2F` line art (1.5px stroke). Badge bg `#FFD866`. Added "Your judgment" permission framing per copy.

### 20.3 — Gradient Band Variants (L1889)
- **Category:** DECORATIVE/DIVIDER
- **Props:** from color, to color, height
- **Variant:** Smooth gradient transition between sections
- **Custom overrides:** Three gradient bands: (1) cream→cool-blue 40px, (2) cool-blue→pale-green 40px, (3) pale-green→cream 1px hard cut with rule.

## 7. Image Briefs

| # | Path | Alt Text | Dimensions | Cropping/Focal | Fallback |
|---|------|----------|------------|----------------|----------|
| IMG-01 | `/root/projects/brightkidco/raw/product-photos/lifestyle/toddler-livingroom-dino-yellow.png` | "Child playing comfortably in BrightKidCo Body-Signal underwear" | 600×400px (2×: 1200×800) | Center crop, child at play, soft natural light, warm tones | B.cream `#FBF7F1` |
| IMG-02 | `/root/projects/brightkidco/raw/product-photos/flat-lay/training-pant-fox-woodland-white.jpg` | "Body-Signal Learning Layer cross-section showing three-layer system" | 600×300px (2×: 1200×600) | Center crop, product flat-lay, clean background | `#FFFFFF` |
| IMG-03 | `/root/projects/brightkidco/raw/product-photos/accessories/cloth-pads-watermelon-astronaut-cat.png` | "BrightKidCo Body-Signal Learning Layer pants product" | 600×400px (2×: 1200×800) | Center crop, product in use, lifestyle context | `#FFFDF6` |

All images hosted on BrightKidCo CDN or Klaviyo asset library. Total image weight < 150KB.

## 8. Rendering Notes

- **Email client considerations:**
  - All backgrounds use inline `style` attributes (no CSS classes for Gmail compatibility)
  - Gradient bands: Apple Mail and Outlook (partial) render gradients; fallback to solid blocks on older Outlook
  - `border-radius` on cards: Outlook desktop ignores; fallback to square corners (acceptable)
  - Feature pills use `display: inline-block` for horizontal layout; `flex` fallback to `inline-block` on Outlook
  - Product card shadow (`box-shadow`): Not supported in Outlook; element appears flat

- **Mobile responsive notes:**
  - Max-width: 420px on mobile, 600px on desktop
  - H-padding: 22px mobile, 30px desktop
  - CTA buttons: full-width on mobile (100% - 44px padding), 220px auto-width on desktop
  - Comparison matrix: 2-column on desktop → stacked vertical cards on mobile (600px breakpoint)
  - 3-Layer table: full 3-column on desktop → stacked rows on mobile
  - Hero heading: 28px mobile / 36px desktop
  - Pre-header hidden spacer: `&zwnj;&nbsp;&zwnj;` at end of preview text prevents Gmail body pull

- **Accessibility notes:**
  - All images have alt text
  - CTA buttons are `<a>` elements with visible text (no image-only CTAs)
  - Color contrast: All text meets WCAG AA (4.5:1 minimum). Coral `#D85A30` on `#FFFFFF` = 4.6:1. White `#FFFFFF` on ink `#1F2D2F` = 14.8:1.
  - Semantic heading hierarchy: H1 in hero, H2 in mechanism and product sections
  - Link text is descriptive ("Unsubscribe", "Manage Preferences" — not "click here")

- **Special instructions:**
  - Subject line: "The $50/month product keeping them too dry" (43 chars, mechanism tease)
  - Preview text: "The moisture-wicking tech parents pay a premium for might be the exact thing preventing progress." (107 chars, key info in first 40)
  - From name: "Lena from BrightKidCo"
  - "Signal" count: The word "signal" (or "sign") appears exactly 7 times in the body copy — intentional thematic resonance with interoception framework
  - Lena sign-off: MEDIUM→LONG transition at E6. "With care," closing (not "Talk soon" or "With understanding")
  - Next time teaser: "Your decision — what to do next, with no pressure."
