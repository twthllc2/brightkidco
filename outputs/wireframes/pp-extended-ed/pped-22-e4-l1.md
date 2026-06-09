# Wireframe: PP-Extended Education — E4 (Day 43) | L1 (Sarah)

## 1. Metadata

| Field | Value |
|-------|-------|
| **Flow** | PP-Extended Education (Flow 22) |
| **Position** | E4 — Day 43 Post-Purchase |
| **Level** | Level 1 — Sarah (Verbal, 3-5 yrs, Hope-Intact) |
| **Copy File** | `/root/projects/brightkidco/outputs/copy/pp-extended-ed/pped-22-e4-l1.md` |
| **Strategy Map Entry** | `flows.pp-extended-ed.emails["e4-l1"]` |
| **Flow Signature** | extended-education · pre-k-urgency · hope-forward · confidence-building |
| **Level Calibration** | L1 — Hope 70/30, Urgency High, Science Low-Medium, CTA Force Medium, Warmer colors, Medium weight typography, 2-3 images, 20px border-radius |
| **Component Categories Used** | HERO, TEXT/LETTER, TESTIMONIAL, MECHANISM, PRODUCT, CTA, GUARANTEE, DECORATIVE |
| **Total Estimated Height** | ~2,800px (mobile 420px width) |

## 2. Strategy Box

**Big Idea:** "The step between 'almost trained' and 'mostly trained'" — the transition from prompted toileting to independent initiation starts with one shift: fading your prompts so the child's internal signal can take over. The email names the parent's daily reality and offers a concrete protocol for the next 6 weeks.

**Emotional Arc Position:** E4 of 5 in the PP-Extended Education flow (D43). This email bridges "small wins" (E3 covered body-signal tracking) to "Pre-K readiness" (E5 covers school readiness & teacher comms). L1 emotional arc: cautious hope → small wins → growing confidence → Pre-K readiness. E4 lives at "growing confidence."

**Component Selection Rationale:**
- HERO-17 (Social Proof Hero): Leads with peer-mom story framing — L1 parents trust other parents' experiences most. The "You've been prompting for 6 weeks" hook mirrors L1 lived experience.
- LETTER-03 (Letter + Pull-Quote): Warm letter format with pull-quote for the validation moment. L1 responds to personal, warm, direct communication.
- SP-13 (Review of the Week): Peer-mom testimonial of successful prompt-fading — Tier 3 proof, highest L1 conversion proof.
- EDU-9 (Tip Cards): 3-phase weaning protocol (weeks 1-2, 3-4, 5-6) — concrete, actionable, milestone-based. L1 parents are action-oriented.
- ProductShowcaseMedium: 3+3 Bundle ($79.99) as primary offer.
- CTA-5 (Product CTA): "Continue the journey" — connected to Pre-K timeline.
- TRUST-1 (60-Day Seal): Compact guarantee badge.
- DESDEEP-6 (The Color Block): Warm color block transitions between sections.

**Differentiation Note:** E4 L1 is visually differentiated by:
1. HERO-17 Social Proof Hero — peer-story-led, not mechanism-led
2. Warmer color palette (amber/coral accents) vs. GF's neutral-warm
3. EDU-9 Tip Cards for the 3-phase protocol (L1's action-oriented preference)
4. Pre-K urgency framing woven throughout, not as separate section

## 3. Creative Box

**Color Palette:**
- Primary: `#2BAEB4` B.teal — CTAs, links, accent elements
- Secondary: `#5DD07A` B.green — Success indicators, checkmark icons
- Accent: `#FBF7F1` Warm cream — Main email background
- Text: `#1F2D2F` B.ink — Primary text, headings, borders
- Supporting backgrounds:
  - `#FFF5EE` Warm peach — Hero section (warmer for L1)
  - `#F5F0EB` Warm linen — Testimonial section
  - `#EDF7ED` Pale green — CTA section
- Supporting text: `#4A6568` B.stone — Subheadings, body secondary
- Muted text: `#8A9B9D` B.muted — Footer, secondary info
- CTA button fill: `#2BAEB4` B.teal — Primary CTA background
- CTA text: `#FFFFFF` white — On dark backgrounds
- Dividers: `#E5DDD3` Light warm gray — Section rules
- Blockquote border: `#2BAEB4` B.teal — Left border accent
- Warm accent: `#D4A76A` Amber — L1 warmth, Pre-K urgency undertone

**Typography:**
- Heading: Questrial, 28px mobile / 36px desktop, Bold (700), line-height 1.15, letter-spacing -0.4px, color `#1F2D2F`
- Body: Questrial, 16px mobile / 17px desktop, Regular (400), line-height 1.6, color `#1F2D2F`
- Accent: Fraunces (serif), 16px italic, Regular (400), line-height 1.5, color `#4A6568` — for pull-quotes and emphasis
- Eyebrow: Questrial, 10.5px, Bold (700), letter-spacing 1.5px, text-transform uppercase, color `#2BAEB4`
- CTA button: Questrial, 16px, Bold (700), letter-spacing 0.3px, color `#FFFFFF`
- Footer: Questrial, 11px, Regular (400), color `#8A9B9D`

**Border Radius:** Cards: 20px, Buttons: 6px, Images: 0px (FramedImage uses ink-border style), Small (badges): 999px pill

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
│ │  HERO-17: Social Proof Hero                      │ │
│ │  bg: #FFF5EE (warm peach)                       │ │
│ │                                                  │ │
│ │  Eyebrow: [6-WEEK CHECK-IN]                      │ │
│ │  H1: "You've been prompting for 6 weeks.        │ │
│ │       Here's when to step back."                │ │
│ │  Sub: "The transition from 'almost trained' to  │ │
│ │       'mostly trained' starts with one shift."  │ │
│ │                                                  │ │
│ │  ┌─ ImgFrame ──────────────────────────────────┐ │ │
│ │  │  Hero lifestyle image                       │ │ │
│ │  │  training-pant-watermelon-pink.jpg          │ │ │
│ │  │  600×400px (2×: 1200×800)                   │ │ │
│ │  └─────────────────────────────────────────────┘ │ │
│ └──────────────────────────────────────────────────┘ │
│                                                      │
│ ═══ Color Block Divider (amber gradient) ═══════════ │
│                                                      │
│ ┌──────────────────────────────────────────────────┐ │
│ │  LETTER-03: Letter + Pull-Quote                  │ │
│ │  bg: #FBF7F1                                     │ │
│ │                                                  │ │
│ │  H2: "Some days he goes. Some days he doesn't.  │ │
│ │       And every day you wonder the same thing:   │ │
│ │       when does this stop being my job?"        │ │
│ │                                                  │ │
│ │  Body: "That's the right question, and asking   │ │
│ │  it means you're ready for the next phase."     │ │
│ │                                                  │ │
│ │  ┌─ Pull-Quote ─────────────────────────────┐   │ │
│ │  │ "If your child is showing any awareness  │   │ │
│ │  │  at all, a pause mid-play, a glance down │   │ │
│ │  │  at his pants, a step toward the         │   │ │
│ │  │  bathroom, even if he doesn't make it in │   │ │
│ │  │  time, the signal is forming."           │   │ │
│ │  │  left-border: 3px #2BAEB4, bg: #F5F0EB  │   │ │
│ │  └──────────────────────────────────────────┘   │ │
│ │                                                  │ │
│ │  H3: "Why prompting can hold progress back"     │ │
│ │                                                  │ │
│ │  Body: "When you say 'Do you need to go?' every │ │
│ │  hour, his brain learns to wait for the question.│ │
│ │  The external cue becomes the trigger, not the  │ │
│ │  internal sensation."                           │ │
│ └──────────────────────────────────────────────────┘ │
│                                                      │
│ ═══ Color Block Divider (teal gradient) ════════════ │
│                                                      │
│ ┌──────────────────────────────────────────────────┐ │
│ │  EDU-9: Tip Cards — 3-Phase Weaning Protocol    │ │
│ │  bg: #FBF7F1                                     │ │
│ │                                                  │ │
│ │  H2: "How to reduce prompting, a gradual        │ │
│ │       approach"                                  │ │
│ │                                                  │ │
│ │  ┌─ Tip Card 1 (Week 1-2) ────────────────┐    │ │
│ │  │  Week 1-2: Lengthen the intervals.       │    │ │
│ │  │  bg: #FFF5EE | border-radius: 20px       │    │ │
│ │  │                                          │    │ │
│ │  │  "If you're prompting every hour, stretch│    │ │
│ │  │  to every 90 minutes. The goal isn't to │    │ │
│ │  │  catch every accident, it's to give his │    │ │
│ │  │  brain a window where the only signal   │    │ │
│ │  │  is the internal one."                  │    │ │
│ │  └──────────────────────────────────────────┘    │ │
│ │                                                  │ │
│ │  ┌─ Tip Card 2 (Week 3-4) ────────────────┐    │ │
│ │  │  Week 3-4: Watch for early signs of     │    │ │
│ │  │  self-starting.                          │    │ │
│ │  │  bg: #FFF5EE | border-radius: 20px       │    │ │
│ │  │                                          │    │ │
│ │  │  "Pausing during play. Touching his      │    │ │
│ │  │  pants. Fidgeting. Shifting positions.   │    │ │
│ │  │  These mean the internal signal arrived, │    │ │
│ │  │  he just hasn't connected it to the      │    │ │
│ │  │  potty walk yet."                        │    │ │
│ │  └──────────────────────────────────────────┘    │ │
│ │                                                  │ │
│ │  ┌─ Tip Card 3 (Week 5-6) ────────────────┐    │ │
│ │  │  Week 5-6: Switch from prompting to     │    │ │
│ │  │  observing.                              │    │ │
│ │  │  bg: #FFF5EE | border-radius: 20px       │    │ │
│ │  │                                          │    │ │
│ │  │  "By now, most L1 kids who have been    │    │ │
│ │  │  consistent with the body-signal        │    │ │
│ │  │  underwear are showing some form of     │    │ │
│ │  │  awareness 3-5 times per day."          │    │ │
│ │  └──────────────────────────────────────────┘    │ │
│ └──────────────────────────────────────────────────┘ │
│                                                      │
│ ┌──────────────────────────────────────────────────┐ │
│ │  SP-13: Review of the Week — Peer Testimonial   │ │
│ │  bg: #F5F0EB (warm linen)                       │ │
│ │                                                  │ │
│ │  ┌─ Testimonial Card ──────────────────────┐    │ │
│ │  │                                          │    │ │
│ │  │  "I was still prompting every 45 minutes.│    │ │
│ │  │  I was terrified that if I stopped, he'd │    │ │
│ │  │  never go on his own. But when I finally │    │ │
│ │  │  stretched the intervals, it was like    │    │ │
│ │  │  he'd been waiting for me to get out of  │    │ │
│ │  │  the way. He started going on his own.   │    │ │
│ │  │  Not every time at first. But those      │    │ │
│ │  │  'sometimes' turned into 'most times'    │    │ │
│ │  │  within a couple of weeks. The prompting │    │ │
│ │  │  was holding us both back."              │    │ │
│ │  │                                          │    │ │
│ │  │  — Real parent, BrightKidCo community    │    │ │
│ │  │  badge: VERBAL · 3-5 YRS · PROMPT-FADING│    │ │
│ │  │  border-left: 3px #5DD07A               │    │ │
│ │  └──────────────────────────────────────────┘    │ │
│ └──────────────────────────────────────────────────┘ │
│                                                      │
│ ═══ Color Block Divider (green gradient) ═══════════ │
│                                                      │
│ ┌──────────────────────────────────────────────────┐ │
│ │  LETTER-03: Pre-K Timeline Context               │ │
│ │  bg: #FBF7F1                                     │ │
│ │                                                  │ │
│ │  H2: "Where this fits in the Pre-K timeline"    │ │
│ │                                                  │ │
│ │  Body: "You've been at this for about six weeks. │ │
│ │  The school year is approaching. You're moving   │ │
│ │  from 'almost trained' to 'mostly trained', and  │ │
│ │  this gradual prompt-fading is the step that     │ │
│ │  gets you there."                                │ │
│ │                                                  │ │
│ │  "The kids who arrive at Pre-K with the most     │ │
│ │  independence aren't the ones who were prompted  │ │
│ │  most aggressively. They're the ones whose       │ │
│ │  parents trusted the signal enough to step back  │ │
│ │  at the right moment."                           │ │
│ └──────────────────────────────────────────────────┘ │
│                                                      │
│ ┌──────────────────────────────────────────────────┐ │
│ │  ProductShowcaseMedium                           │ │
│ │  bg: #FBF7F1                                     │ │
│ │                                                  │ │
│ │  ┌─ ImgFrame ──────────────────────────────────┐ │ │
│ │  │  book-potty-training-guide.png              │ │ │
│ │  │  400×300px                                  │ │ │
│ │  └─────────────────────────────────────────────┘ │ │
│ │                                                  │ │
│ │  Product: 3+3 Bundle — $79.99                    │ │
│ └──────────────────────────────────────────────────┘ │
│                                                      │
│ ┌──────────────────────────────────────────────────┐ │
│ │  CTA-5: Product CTA                              │ │
│ │  bg: #EDF7ED (pale green)                       │ │
│ │                                                  │ │
│ │  ┌─ Button ─────────────────────────────────┐    │ │
│ │  │  [Continue the Journey]                   │    │ │
│ │  │  bg: #2BAEB4, text: #FFFFFF              │    │ │
│ │  │  border-radius: 6px                       │    │ │
│ │  │  font: Questrial 16px Bold                │    │ │
│ │  └──────────────────────────────────────────┘    │ │
│ └──────────────────────────────────────────────────┘ │
│                                                      │
│ ┌──────────────────────────────────────────────────┐ │
│ │  TRUST-1: 60-Day Seal                            │ │
│ │  bg: #FBF7F1                                     │ │
│ │                                                  │ │
│ │  "60-Day Guarantee — your judgment, no questions"│ │
│ └──────────────────────────────────────────────────┘ │
│                                                      │
│ ── Divider: 1px #E5DDD3 ─────────────────────────── │
│                                                      │
│ ┌──────────────────────────────────────────────────┐ │
│ │  Lena Sign-Off (Medium — Phase 3 Variant)       │ │
│ │  bg: #FBF7F1                                     │ │
│ │                                                  │ │
│ │  "With understanding,"                           │ │
│ │  Lena ——                                         │ │
│ │  Customer Support · Mom of two autistic sons     │ │
│ │                                                  │ │
│ │  P.S. If you're not seeing any awareness yet,    │ │
│ │  that's okay too. Some L1 kids need 8-10 weeks   │ │
│ │  before the first consistent signal. If that's   │ │
│ │  where you are, keep the prompting steady and    │ │
│ │  check back in next week. Every child's timeline │ │
│ │  is different, and yours isn't behind. [link]    │ │
│ │                                                  │ │
│ │  P.S. The 60-day guarantee means you've been     │ │
│ │  trying this risk-free. If you're past 60 days   │ │
│ │  and seeing progress, the 3+3 Bundle holds up,   │ │
│ │  most parents get 6+ months of daily wear before │ │
│ │  needing to reorder. [link]                      │ │
│ └──────────────────────────────────────────────────┘ │
│                                                      │
│ ┌──────────────────────────────────────────────────┐ │
│ │  UTIL-04: Footer                                 │ │
│ │  bg: #FBF7F1                                     │ │
│ │                                                  │ │
│ │  [Unsubscribe] | [Manage Preferences]            │ │
│ │  BrightKidCo LLC                                 │ │
│ │  1234 Innovation Drive, Suite 200                │ │
│ │  San Francisco, CA 94107                         │ │
│ └──────────────────────────────────────────────────┘ │
└──────────────────────────────────────────────────────┘
```

## 5. Technique Specs

### Section: Header
- Component: UTIL-02 — Logo Bar
- Width: 100%
- Height: auto
- Background: `#FBF7F1`
- Padding: 20px 22px
- Border: none
- Border-radius: 0
- Box-shadow: none
- Font-family: Questrial
- Font-size: 14px
- Font-weight: 400
- Line-height: 1.2
- Letter-spacing: 1px
- Color: `#8A9B9D`
- Text-align: center
- Text-transform: uppercase
- Display: block

### Section: HERO-17 — Social Proof Hero
- Component: HERO-17 (Social Proof Hero)
- Width: 100%
- Height: auto (min 320px)
- Background: `#FFF5EE` (warm peach)
- Padding: 40px 22px 30px
- Border: none
- Border-radius: 0
- Box-shadow: none
- Eyebrow:
  - Font-family: Questrial
  - Font-size: 10.5px
  - Font-weight: 700
  - Letter-spacing: 1.5px
  - Text-transform: uppercase
  - Color: `#2BAEB4`
  - Margin-bottom: 12px
- H1:
  - Font-family: Questrial
  - Font-size: 28px
  - Font-weight: 700
  - Line-height: 1.15
  - Letter-spacing: -0.4px
  - Color: `#1F2D2F`
  - Margin-bottom: 16px
- Sub:
  - Font-family: Fraunces (serif)
  - Font-style: italic
  - Font-size: 16px
  - Font-weight: 400
  - Line-height: 1.5
  - Color: `#4A6568`
  - Margin-bottom: 24px
- Image:
  - Source: `/root/projects/brightkidco/raw/product-photos/training-pant-watermelon-pink.jpg`
  - Display: 100% width, auto height
  - Border-radius: 0
  - Border: 2px solid `#1F2D2F`
  - Box-shadow: 6px 6px 0 `#1F2D2F`

### Section: LETTER-03 — Letter + Pull-Quote
- Component: LETTER-03 (Letter + Pull-Quote)
- Width: 100%
- Height: auto
- Background: `#FBF7F1`
- Padding: 30px 22px
- Border: none
- Border-radius: 0
- Box-shadow: none
- H2:
  - Font-family: Questrial
  - Font-size: 22px
  - Font-weight: 700
  - Line-height: 1.2
  - Color: `#1F2D2F`
  - Margin-bottom: 16px
- Body:
  - Font-family: Questrial
  - Font-size: 16px
  - Font-weight: 400
  - Line-height: 1.6
  - Color: `#1F2D2F`
  - Margin-bottom: 16px
- Pull-Quote:
  - Background: `#F5F0EB`
  - Border-left: 3px solid `#2BAEB4`
  - Padding: 20px
  - Border-radius: 0
  - Font-family: Fraunces (serif)
  - Font-style: italic
  - Font-size: 16px
  - Line-height: 1.5
  - Color: `#4A6568`
- H3:
  - Font-family: Questrial
  - Font-size: 18px
  - Font-weight: 700
  - Line-height: 1.3
  - Color: `#1F2D2F`
  - Margin-top: 24px
  - Margin-bottom: 12px

### Section: EDU-9 — Tip Cards (3-Phase Weaning)
- Component: EDU-9 (Tip Cards)
- Width: 100%
- Height: auto
- Background: `#FBF7F1`
- Padding: 30px 22px
- Border: none
- Border-radius: 0
- Box-shadow: none
- H2:
  - Font-family: Questrial
  - Font-size: 22px
  - Font-weight: 700
  - Line-height: 1.2
  - Color: `#1F2D2F`
  - Margin-bottom: 20px
- Tip Card:
  - Background: `#FFF5EE`
  - Border: 1px solid `#E5DDD3`
  - Border-radius: 20px
  - Padding: 20px
  - Margin-bottom: 14px
  - Box-shadow: none
- Tip Heading:
  - Font-family: Questrial
  - Font-size: 16px
  - Font-weight: 700
  - Color: `#1F2D2F`
  - Margin-bottom: 8px
- Tip Body:
  - Font-family: Questrial
  - Font-size: 15px
  - Font-weight: 400
  - Line-height: 1.5
  - Color: `#4A6568`

### Section: SP-13 — Review of the Week
- Component: SP-13 (Review of the Week)
- Width: 100%
- Height: auto
- Background: `#F5F0EB` (warm linen)
- Padding: 40px 22px
- Border: none
- Border-radius: 0
- Box-shadow: none
- Quote:
  - Font-family: Fraunces (serif)
  - Font-style: italic
  - Font-size: 17px
  - Line-height: 1.6
  - Color: `#1F2D2F`
  - Border-left: 3px solid `#5DD07A`
  - Padding-left: 20px
  - Margin-bottom: 16px
- Attribution:
  - Font-family: Questrial
  - Font-size: 12px
  - Font-weight: 400
  - Color: `#8A9B9D`
  - Letter-spacing: 0.3px
- Badge:
  - Font-family: Questrial
  - Font-size: 10px
  - Font-weight: 700
  - Letter-spacing: 1px
  - Text-transform: uppercase
  - Color: `#2BAEB4`
  - Background: `#E8F6F4`
  - Padding: 4px 10px
  - Border-radius: 999px
  - Display: inline-block
  - Margin-top: 8px

### Section: LETTER-03 — Pre-K Timeline
- Component: LETTER-03 (Letter + Pull-Quote)
- Width: 100%
- Height: auto
- Background: `#FBF7F1`
- Padding: 30px 22px
- Border: none
- Border-radius: 0
- Box-shadow: none
- H2:
  - Font-family: Questrial
  - Font-size: 22px
  - Font-weight: 700
  - Line-height: 1.2
  - Color: `#1F2D2F`
  - Margin-bottom: 16px
- Body:
  - Font-family: Questrial
  - Font-size: 16px
  - Font-weight: 400
  - Line-height: 1.6
  - Color: `#1F2D2F`

### Section: ProductShowcaseMedium
- Component: ProductShowcaseMedium
- Width: 100%
- Height: auto
- Background: `#FBF7F1`
- Padding: 30px 22px
- Border: none
- Border-radius: 0
- Box-shadow: none
- Image:
  - Source: `/root/projects/brightkidco/raw/product-photos/book-potty-training-guide.png`
  - Display: 100% width, auto height
  - Border-radius: 0
  - Border: 2px solid `#1F2D2F`
  - Box-shadow: 6px 6px 0 `#1F2D2F`
- Product Name:
  - Font-family: Questrial
  - Font-size: 18px
  - Font-weight: 700
  - Color: `#1F2D2F`
  - Margin-top: 16px
- Price:
  - Font-family: Questrial
  - Font-size: 16px
  - Font-weight: 400
  - Color: `#4A6568`

### Section: CTA-5 — Product CTA
- Component: CTA-5 (Product CTA)
- Width: 100%
- Height: auto
- Background: `#EDF7ED` (pale green)
- Padding: 30px 22px
- Border: none
- Border-radius: 0
- Box-shadow: none
- Button:
  - Background: `#2BAEB4`
  - Color: `#FFFFFF`
  - Font-family: Questrial
  - Font-size: 16px
  - Font-weight: 700
  - Letter-spacing: 0.3px
  - Padding: 16px 36px
  - Border: none
  - Border-radius: 6px
  - Display: block
  - Width: 100%
  - Text-align: center

### Section: TRUST-1 — 60-Day Seal
- Component: TRUST-1 (60-Day Seal)
- Width: 100%
- Height: auto
- Background: `#FBF7F1`
- Padding: 20px 22px
- Border: none
- Border-radius: 0
- Box-shadow: none
- Text:
  - Font-family: Questrial
  - Font-size: 13px
  - Font-weight: 500
  - Line-height: 1.4
  - Color: `#4A6568`
  - Text-align: center

### Section: Lena Sign-Off
- Component: LETTER-01 (Paragraph Stack)
- Width: 100%
- Height: auto
- Background: `#FBF7F1`
- Padding: 30px 22px
- Border: none
- Border-radius: 0
- Box-shadow: none
- Sign-off Text:
  - Font-family: Questrial
  - Font-size: 15px
  - Font-weight: 400
  - Line-height: 1.6
  - Color: `#4A6568`
- Name:
  - Font-family: Questrial
  - Font-size: 16px
  - Font-weight: 700
  - Color: `#1F2D2F`
  - Margin-top: 12px
- P.S.:
  - Font-family: Fraunces (serif)
  - Font-style: italic
  - Font-size: 14px
  - Line-height: 1.5
  - Color: `#4A6568`
  - Margin-top: 16px

### Section: UTIL-04 — Footer
- Component: UTIL-04 (Footer)
- Width: 100%
- Height: auto
- Background: `#FBF7F1`
- Padding: 20px 22px
- Border-top: 1px solid `#E5DDD3`
- Border-radius: 0
- Box-shadow: none
- Text:
  - Font-family: Questrial
  - Font-size: 11px
  - Font-weight: 400
  - Line-height: 1.5
  - Color: `#8A9B9D`
  - Text-align: center

## 6. Copy Blocks

### Block: Preheader
The transition from "almost trained" to "mostly trained" starts with one shift.

### Block: Subject Line
You've been prompting for 6 weeks. Here's when to step back.

### Block: Hero Title Part 1
You've been prompting for 6 weeks.

### Block: Hero Title Part 2 (Accent)
Here's when to step back.

### Block: Letter Opening
You're still prompting him every hour. Maybe every 90 minutes. You've got the timer on your phone, and when it goes off, you say it again: "Hey, let's try the potty."

Some days he goes. Some days he doesn't. And every day you wonder the same thing: when does this stop being my job?

That's the right question, and asking it means you're ready for the next phase.

### Block: Pull-Quote
If your child is showing any awareness at all, a pause mid-play, a glance down at his pants, a step toward the bathroom, even if he doesn't make it in time, the signal is forming. It's not consistent yet. But it's there. And that changes what he needs from you.

### Block: Mechanism
**Why prompting can hold progress back**

When you say "Do you need to go?" every hour, his brain learns to wait for the question. The external cue becomes the trigger, not the internal sensation. He goes because you asked, not because he felt something.

That's how brains work. For the last six weeks, the most consistent signal has been your voice. The goal now is to fade that signal so his internal one can take over.

### Block: 3-Phase Weaning Protocol
**How to reduce prompting, a gradual approach**

This isn't about quitting cold turkey. It's about creating space for his interoception pathway to operate on its own. The signal is building. It just needs room to connect to action without you as the middleman.

*Week 1-2: Lengthen the intervals.*

If you're prompting every hour, stretch to every 90 minutes. If every 90, stretch to two hours. The goal isn't to catch every accident, it's to give his brain a window where the only signal is the internal one. You'll see more accidents at first. That's normal. That's the signal working without the backup.

*Week 3-4: Watch for early signs of self-starting.*

These are the small, straightforward-to-miss behaviors that come before a child says "I need to go." Pausing during play. Touching his pants. Fidgeting. Shifting positions. These mean the internal signal arrived, he just hasn't connected it to the potty walk yet. When you see one, don't prompt. Just observe.

*Week 5-6: Switch from prompting to observing.*

By now, most L1 kids who have been consistent with the body-signal underwear are showing some form of awareness 3-5 times per day. At this point, you can shift from "Do you need to go?" to a quiet presence. Have the potty available. Notice when he pauses. If he looks confused, that's good, confused means he felt something and isn't sure what to do next.

### Block: Testimonial
"I was still prompting every 45 minutes. I was terrified that if I stopped, he'd never go on his own. But when I finally stretched the intervals, it was like he'd been waiting for me to get out of the way. He started going on his own. Not every time at first. But those 'sometimes' turned into 'most times' within a couple of weeks. The prompting was holding us both back."

— Real parent, BrightKidCo community

### Block: Pre-K Timeline
**Where this fits in the Pre-K timeline**

You've been at this for about six weeks. The school year is approaching. You're moving from "almost trained" to "mostly trained", and this gradual prompt-fading is the step that gets you there. The kids who arrive at Pre-K with the most independence aren't the ones who were prompted most aggressively. They're the ones whose parents trusted the signal enough to step back at the right moment.

You're already using the body-signal underwear. The mechanism is working. Now it's about giving your child the space to show you what he's learned.

### Block: Product Introduction
3+3 Bundle — $79.99

### Block: CTA Button Text
Continue the Journey

### Block: Guarantee
60-Day Guarantee — your judgment, no questions

### Block: Signoff
With understanding,

Lena ——
Customer Support · Mom of two autistic sons

P.S. If you're not seeing any awareness yet, that's okay too. Some L1 kids need 8-10 weeks before the first consistent signal. If that's where you are, keep the prompting steady and check back in next week. Every child's timeline is different, and yours isn't behind.

P.S. The 60-day guarantee means you've been trying this risk-free. If you're past 60 days and seeing progress, the 3+3 Bundle holds up, most parents get 6+ months of daily wear before needing to reorder.

### Block: Footer
[Unsubscribe]({{unsubscribe_url}}) | [Manage Preferences]({{preferences_url}})

BrightKidCo LLC
1234 Innovation Drive, Suite 200
San Francisco, CA 94107
United States

## 7. Image Briefs

### Image: Hero Lifestyle
- Source: `/root/projects/brightkidco/raw/product-photos/training-pant-watermelon-pink.jpg`
- Display: 100% width × auto height (max 600×400px)
- Border-radius: 0px
- Border: 2px solid `#1F2D2F`
- Box-shadow: 6px 6px 0 `#1F2D2F`
- Context: Hero section — product lifestyle image showing the body-signal underwear in use
- Overlay: None
- Alt text: "BrightKidCo Body-Signal Learning underwear — watermelon pink pattern"

### Image: Product Showcase
- Source: `/root/projects/brightkidco/raw/product-photos/book-potty-training-guide.png`
- Display: 100% width × auto height (max 400×300px)
- Border-radius: 0px
- Border: 2px solid `#1F2D2F`
- Box-shadow: 6px 6px 0 `#1F2D2F`
- Context: Product section — potty training guide book
- Overlay: None
- Alt text: "BrightKidCo potty training guide book"

## 8. Render Notes

### Dark Mode
- Background inversions: `#FBF7F1` → `#1A1A1A`, `#FFF5EE` → `#2A1A1A`, `#F5F0EB` → `#2A2520`, `#EDF7ED` → `#1A2A1A`
- Text color inversions: `#1F2D2F` → `#E0E0E0`, `#4A6568` → `#A0B0B0`, `#8A9B9D` → `#707070`
- Border adjustments: `#E5DDD3` → `#3A3A3A`
- Image handling: Images remain unchanged; border and shadow stay visible

### Responsive
- Breakpoint: 320px (minimum supported)
- Behavior at 320px: Body text 15px, padding 16px, images 100% width, tip cards stack vertically
- Behavior at 420px: Default rendering (mobile-first)
- Behavior at 600px+: Max-width 600px centered, body text 17px, padding 30px

### Email Client Compatibility
- Outlook: MSO conditional comments for background colors; border-radius fallback to 0
- Gmail: CSS-in-head only; no external stylesheets
- Apple Mail: Supports border-radius and box-shadow natively
- Mobile clients: Full-width CTA button, 44px minimum tap target

### Special Instructions
- All 8 mandatory sections present and in correct order
- L1-specific: Warmer color palette, 20px border-radius, Pre-K urgency framing
- "Almost trained" language used as L1 signature phrase
- Two P.S. lines — first catches parents not yet seeing progress, second normalizes reorder
- Verbatim copy from pped-22-e4-l1.md preserved exactly
- Word count target: ~480 words (within L1 spec 300-500w)
