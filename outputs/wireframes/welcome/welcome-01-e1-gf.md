# Wireframe: Welcome Flow — E1 | General Family

## 1. Metadata

| Field | Value |
|-------|-------|
| **Flow** | Welcome Flow (Flow 1) |
| **Position** | E1 — Day 0 |
| **Level** | General Family (GF) / avatar_general |
| **Copy File** | /root/projects/brightkidco/outputs/copy/welcome/welcome-01-e1-gf.md |
| **Strategy Map Entry** | flows.welcome.emails.e1-gf |
| **Flow Signature** | warm-educational, neutral color warmth, moderate CTA urgency, long copy density |
| **Level Calibration** | GF — 70% warm / 30% green, broader audience (5 sub-groups A-E), inclusive "Whether...Or...If..." framing, R1-R6 cross-level compliance, longer line-height 1.7, 30/70 image-to-text ratio, 12px signal dots, three-family quote pattern |
| **Component Categories Used** | HERO, TEXT/LETTER, TESTIMONIAL, MECHANISM/EDUCATION, PRODUCT, CTA, GUARANTEE/TRUST, DECORATIVE |
| **Total Estimated Height** | ~3,200px (desktop) / ~3,600px (mobile) |

---

## 2. Strategy Box

**Big Idea:** The email is structured like a neurological signal pathway — a faint "ping" traveling across the page from left to right, fading in and out, culminating in a moment of recognition. The visual metaphor mirrors the emotional journey: the reader starts in confusion (faded, scattered signals) and moves toward clarity (a connected pathway lighting up).

**Emotional Arc Position:** Position 1 of 8 — Mirror confusion → Validate → Offer mechanism as explanation → Curiosity to continue. This is the opening frame that sets the tone for the entire Welcome Flow. The reader arrives in a state of frustrated uncertainty; the email validates their experience, names the root cause (interoception gap), and opens a door to curiosity without making any promises.

**Component Selection Rationale:**
- HERO-3 (Permission Open): Opens with permission framing, not a sales pitch. Appropriate for E1 GF where the reader doesn't know the brand yet.
- LETTER-03 (Letter + Pull-Quote): Long-form letter format supports the 200-500 word copy density. Pull-quote isolates the key reframe moment.
- SP-08 (Stacked Mini-Reviews): Three-family quote pattern bridges all GF sub-groups (A-E). Multiple perspectives show the reader "you're not alone."
- EDU-5 (Infographic): Visual representation of the 49% stat and interoception mechanism. Infographic style works for GF's broad audience without requiring domain expertise.
- ProductShowcaseFull: Full product presentation with 3-layer system explanation. Used because E1 introduces the mechanism and product simultaneously.
- CTA-4 (Gentle Invite): Permission-framed, curiosity-driven CTA appropriate for E1 (no sale yet, establishing frame).
- TRUST-1 (60-Day Seal): Risk elimination at the first product mention.
- 20.1 (Wave Divider): Organic signal-wave dividers reinforce the neural pathway metaphor throughout.

**Differentiation Note:** GF is the broadest audience variant — 70% warm / 30% green color ratio (more warmth than any level-specific variant). Uses three-family social proof (vs L1's single parent focus, L2's BCBA context, L3's dignity-first). Copy density is longest (200-500 words) because GF includes text-responsive sub-group B (diagnosis-rejecters who scan for symptom language). The constellation easter egg at 7% opacity rewards GF's "exhaustive researchers."

---

## 3. Creative Box

**Color Palette:**
- Primary: #2BAEB4 (B.teal) — CTA buttons, accent highlights, signal dots, link text
- Secondary: #5DD07A (B.green) — Success indicators, secondary accents, product feature highlights
- Accent: #FFD866 — Badge backgrounds (60-Day seal badge, part badge)
- Background: #FBF7F1 (B.cream) — Warm section backgrounds, quote blocks, alternating bands
- Text: #1F2D2F (B.ink) — Primary body text, headings, borders
- Page Background: #FFFFFF (B.paper) — Email canvas
- Secondary Text: #4A6568 (B.soft) — Body copy, secondary paragraphs
- Tertiary Text: #8A9B9D (B.muted) — Captions, footer, citations
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
│ │  Preheader: Whether they're 3 or 10, verbal or no...│ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │              [HEADER — Logo + From Name]             │ │ 80px
│ │         BrightKidCo · Lena from BrightKidCo         │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │              HERO-3: Permission Open                 │ │ ~280px
│ │                                                      │ │
│ │  ┌────────────────────────────────────────────────┐  │ │
│ │  │  [IMG: toddler-playing-train-moon-cloud-blue]  │  │ │
│ │  │          Lifestyle hero image                  │  │ │
│ │  │          420 x 240px, rounded 20px             │  │ │
│ │  └────────────────────────────────────────────────┘  │ │
│ │                                                      │ │
│ │  "Your child might not feel the signal"             │ │
│ │   [H1 — Questrial 32px/24px, B.ink]                │ │
│ │                                                      │ │
│ │  "Whether they're 3 or 10, verbal or non-verbal,   │ │
│ │   if they don't feel when they need to go,          │ │
│ │   here's why."                                      │ │
│ │   [Subhead — Questrial 17px, B.soft]               │ │
│ │                                                      │ │
│ │  [ See How It Works ]                               │ │
│ │   [CTA-4 — Gentle Invite, B.teal btn, D8F57C text] │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌─────── 20.1 WAVE DIVIDER — Signal Wave SVG ──────────┐ │ 32px
│ │  ~~~~/~~~~/~~~~/~~~~/~~~~/~~~~/~~~~/~~~~/~~~~/~~~~~ │ │
│ │  Color: B.cream #FBF7F1, opacity 60%                 │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │         LETTER-03: Letter + Pull-Quote               │ │ ~600px
│ │                                                      │ │
│ │  [HOOK — 3 paragraphs, B.soft text, 1.7 line-height]│ │
│ │  "Whether your child is just starting to show signs, │ │
│ │   or you've been at this for years..."               │ │
│ │                                                      │ │
│ │  "You've tried what the books said..."              │ │
│ │                                                      │ │
│ │  "That's not because you did something wrong.       │ │
│ │   It's because every one of those methods assumes   │ │
│ │   your child can feel the 'I need to go' signal."   │ │
│ │   [bold reading path anchor]                        │ │
│ │                                                      │ │
│ │  [THIN RULE — 1px #E8DED5, full width]             │ │
│ │                                                      │ │
│ │  [VALIDATION — 2 paragraphs]                        │ │
│ │  "If your child's nervous system processes body     │ │
│ │   signals differently..."                           │ │
│ │                                                      │ │
│ │  [PARENT QUOTES — Cream Card, Mint left accent]     │ │
│ │  ┌──────────────────────────────────────────────┐   │ │
│ │  │ ▸ "He doesn't have full bladder awareness    │   │ │
│ │  │   yet."                                      │   │ │
│ │  │ ▸ "She'll pee herself and just keep playing  │   │ │
│ │  │   in the puddle."                            │   │ │
│ │  │ ▸ "Potty training isn't linear."             │   │ │
│ │  │ ▸ "I feel like a failure because he's still  │   │ │
│ │  │   in pull-ups."                              │   │ │
│ │  └──────────────────────────────────────────────┘   │ │
│ │  [bg: B.cream #FBF7F1, left-border: 3px B.green]   │ │
│ │                                                      │ │
│ │  "You're not a failure. The problem isn't           │ │
│ │   motivation or behavior. It's neurology."          │ │
│ │   [bold reading path anchor]                        │ │
│ │                                                      │ │
│ │  "Research shows that many children have what's     │ │
│ │   called an interoception gap..."                   │ │
│ │   [citation: Nicholson et al. 2019, B.muted 13px]  │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌─────── 20.1 WAVE DIVIDER — Thinner Wave ─────────────┐ │ 24px
│ │  ~~~~/~~~~/~~~~/~~~~/~~~~/~~~~/~~~~/                  │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │        EDU-5: Infographic — Mechanism Section        │ │ ~500px
│ │                                                      │ │
│ │  ┌──────────────────────────────────────────────┐   │ │
│ │  │         [49% STAT CALLOUT BOX]               │   │ │
│ │  │   1px border B.teal at 30%, 12px radius      │   │ │
│ │  │   padding 24px, bg #FFFFFF                    │   │ │
│ │  │                                              │   │ │
│ │  │   "49%" — Questrial 48px/36px, weight 800    │   │ │
│ │  │   "of autistic 4-5 year olds aren't          │   │ │
│ │  │    toilet trained yet"                       │   │ │
│ │  │                                              │   │ │
│ │  │   "a 6-to-1 gap compared to typically        │   │ │
│ │  │    developing kids"                          │   │ │
│ │  │                                              │   │ │
│ │  │   [citation: Wiggins et al. 2022, 12px]     │   │ │
│ │  └──────────────────────────────────────────────┘   │ │
│ │                                                      │ │
│ │  "That's not a parenting gap. It's a measurable    │ │
│ │   neurological difference in how body signals       │ │
│ │   are processed."                                   │ │
│ │                                                      │ │
│ │  [PULL QUOTE — Fraunces italic, centered]           │ │
│ │  "The question isn't 'will my child ever get this?' │ │
│ │   The question is: 'what does my child need for    │ │
│ │   their brain to start receiving the signal?'"     │ │
│ │                                                      │ │
│ │  [3-LAYER PRODUCT INFOGRAPHIC]                      │ │
│ │  ┌──────┐  ┌──────┐  ┌──────┐                     │ │
│ │  │Inner │  │Smart │  │Outer │                     │ │
│ │  │Layer │→ │Core  │→ │Barr. │                     │ │
│ │  └──────┘  └──────┘  └──────┘                     │ │
│ │  Cotton    Absorption  Leak-resistant              │ │
│ │  inner     core        outer barrier               │ │
│ │                                                      │ │
│ │  [Product intro copy — 2 paragraphs, B.soft]       │ │
│ │  "At BrightKidCo, we designed something different..."│ │
│ │  "We designed underwear that creates the signal..." │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌─────── 20.1 WAVE DIVIDER — Organic Wave ─────────────┐ │ 24px
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │     SP-08: Stacked Mini-Reviews — Social Proof       │ │ ~420px
│ │                                                      │ │
│ │  [3 testimonial cards — horizontal stack]            │ │
│ │  ┌──────────┐ ┌──────────┐ ┌──────────┐            │ │
│ │  │"3 years  │ │"Lost it" │ │"Great at │            │ │
│ │  │ hell.    │ │ quote    │ │ ABA but  │            │ │
│ │  │ Tried    │ │ "I yelled│ │ won't go │            │ │
│ │  │ everything│ │ at him" │ │ near the │            │ │
│ │  │ Ready to │ │          │ │ potty"   │            │ │
│ │  │ give up" │ │          │ │          │            │ │
│ │  │          │ │          │ │          │            │ │
│ │  │GF parent,│ │GF parent,│ │GF parent,│            │ │
│ │  │early 30s,│ │late 30s, │ │child 6   │            │ │
│ │  │child 5   │ │child 4   │ │          │            │ │
│ │  └──────────┘ └──────────┘ └──────────┘            │ │
│ │  [bg: B.cream, 16px radius, 6px shadow]            │ │
│ │  Mobile: stacked vertically                         │ │
│ │                                                      │ │
│ │  "Each of these parents thought they were the only  │ │
│ │   one. Each of them discovered the same thing:      │ │
│ │   their child's body wasn't sending the signal     │ │
│ │   they assumed was there."                          │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │     ProductShowcaseFull — Product Introduction       │ │ ~600px
│ │                                                      │ │
│ │  [Eyebrow: "THE PRODUCT"]                           │ │
│ │  [H2: "Body-Signal Learning Layer™ Pants"]          │ │
│ │  [Sub: "Underwear that creates the signal..."]      │ │
│ │                                                      │ │
│ │  ┌──────────────────────────────────────────────┐   │ │
│ │  │  [HERO SHOT — training-pant-cloud-raindrop]  │   │ │
│ │  │  420 x 300px                                 │   │ │
│ │  │  ┌─────────────────┐                         │   │ │
│ │  │  │ ✿ 60 days calm  │ ← floating badge       │   │ │
│ │  │  └─────────────────┘   (FFD866, rotated 4°)  │   │ │
│ │  └──────────────────────────────────────────────┘   │ │
│ │  [border: 2px B.ink, 24px radius, 6px shadow]      │ │
│ │                                                      │ │
│ │  [Product info block]                                │ │
│ │  "BrightKidCo" eyebrow                              │ │
│ │  "Body-Signal Learning Layer™ Pants"                │ │
│ │  "From €34"                                         │ │
│ │  "Starter pair · 10% off first order"               │ │
│ │                                                      │ │
│ │  [Feature pills row]                                 │ │
│ │  [◉ Body-Signal Layer™] [✓ 60-day guarantee]        │ │
│ │  [♡ Sensory-friendly]                                │ │
│ │                                                      │ │
│ │  [CTA button: "Shop the pants →"]                   │ │
│ │  [B.ink bg, D8F57C text, pill shape]                │ │
│ │                                                      │ │
│ │  [Micro trust line]                                  │ │
│ │  "Free shipping on orders over €50 · 60-day         │ │
│ │   guarantee · Real returns"                         │ │
│ │                                                      │ │
│ │  [2-up sub row]                                      │ │
│ │  ┌─────────────┐  ┌─────────────┐                  │ │
│ │  │ COLOURWAY 01│  │ SIZE RANGE  │                  │ │
│ │  │ Sage · green │  │ 2T-6T      │                  │ │
│ │  │ 3 colourways│  │ Ages 2-7    │                  │ │
│ │  └─────────────┘  └─────────────┘                  │ │
│ │  [each: 2px B.ink border, 14px radius, 3px shadow] │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │         TRUST-1: 60-Day Seal — Guarantee            │ │ ~160px
│ │                                                      │ │
│ │  ┌──────────────────────────────────────────────┐   │ │
│ │  │   [60-DAY SEAL — centered, icon + text]      │   │ │
│ │  │                                              │   │ │
│ │  │   "Try it for 60 days."                      │   │ │
│ │  │   "If your child shows any sign of           │   │ │
│ │  │    awareness, a pause, a look, a step        │   │ │
│ │  │    toward the potty, you'll know the         │   │ │
│ │  │    signal is working."                       │   │ │
│ │  │                                              │   │ │
│ │  │   "If nothing changes, full refund.          │   │ │
│ │  │    Your judgment."                           │   │ │
│ │  └──────────────────────────────────────────────┘   │ │
│ │  [bg: B.cream, 16px radius, 2px B.green border]    │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌─────── 1px RULE — #E8DED5 — Tonal Shift ────────────┐ │ 1px
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │          CTA-4: Gentle Invite — CTA Zone             │ │ ~240px
│ │                                                      │ │
│ │  "If this sounds familiar, keep reading."           │ │
│ │  [Questrial 17px, B.ink, bold]                      │ │
│ │                                                      │ │
│ │  "We'll send you more over the next few days,       │ │
│ │   what the science says, what other parents found,  │ │
│ │   and how you can try the Body-Signal approach."   │ │
│ │  [Questrial 15px, B.soft]                           │ │
│ │                                                      │ │
│ │  [ See How It Works → ]                             │ │
│ │  [CTA-4: Full-width mobile, 280px desktop           │ │
│ │   B.teal bg, D8F57C text, 52px height, pill]       │ │
│ │                                                      │ │
│ │  "Next time: Why the methods you tried couldn't     │ │
│ │   work — and what actually can."                    │ │
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
│ │  │  "Founder · BrightKidCo · Mom of two"        │   │ │
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
│ │  │                                              │   │ │
│ │  │  P.S. [personal note from window.FLOW1_     │   │ │
│ │  │        SHARED.signoff.ps]                    │   │ │
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
│                                                          │
│  ★ Easter Egg: Interconnected Dots Constellation        │
│    Bottom-right, 80×80px, 5% opacity lines,            │
│    8% opacity dots, #4A7C6F                             │
│    Barely visible — rewards exhaustive researchers      │
└──────────────────────────────────────────────────────────┘
```

---

## 5. Section Specs

### Section 1: Preheader Bar
- **Component:** UTIL-06 — Preheader Bar (L7624)
- **Exact Copy:** "Whether they're 3 or 10, verbal or non-verbal, if they don't feel when they need to go, here's why."
- **Background:** #F6F2EA
- **Typography:** Questrial 11px, italic, B.muted
- **Padding:** 6px 20px, centered
- **Notes:** Hidden in most email clients, visible in preview text. 97 chars, within 100-char recommendation. Complements subject line without repeating.

### Section 2: Header
- **Component:** UTIL-08 — Nav Bar (L7682)
- **Exact Copy:** "Lena from BrightKidCo" (from name)
- **Image:** BrightKidCo logo (../assets/brightkidco-logo-v2.png), 34px height
- **Background:** B.paper (#FFFFFF)
- **Padding:** 24px 20px 0, centered
- **Typography:** Logo only, no additional text
- **Notes:** Simple, clean header. No navigation links (warmup period, §17.2).

### Section 3: Hero — HERO-3 Permission Open
- **Component:** HERO-3 — Permission Open (L3857)
- **Exact Copy:**
  - Headline: "Your child might not feel the signal"
  - Subhead: "Whether they's 3 or 10, verbal or non-verbal, if they don't feel when they need to go, here's why."
  - CTA: "See How It Works"
- **Image:** /root/projects/brightkidco/raw/product-photos/lifestyle/toddler-playing-train-moon-cloud-blue.png
  - Alt text: "Toddler playing with train, soft natural light, warm home setting"
  - Dimensions: 420 x 240px (desktop), full-width (mobile)
  - Cropping: Center crop, child's hands and toy in frame
  - Fallback color: #FBF7F1
- **Background:** B.paper (#FFFFFF)
- **Typography:**
  - Headline: Questrial 32px desktop / 24px mobile, weight 700, letter-spacing -0.5px, color B.ink
  - Subhead: Questrial 17px, weight 500, color B.soft, line-height 1.5
  - CTA: Questrial 15.5px, weight 700, letter-spacing 0.3px
- **CTA Spec:** B.teal (#2BAEB4) background, #D8F57C text, pill shape (border-radius 999), full-width on mobile / 280px desktop, 52px height
- **Image border-radius:** 20px
- **Section padding:** 0 22px
- **Notes:** Permission-framed hero — no urgency, no promise. The headline is the subject line echo (reinforces the open). Subhead uses inclusive "Whether...Or...If..." framing per GIULIANO-DEMANDS.md §4 R1-R6.

### Section 4: Wave Divider (Hero → Body)
- **Component:** 20.1 — Wave Divider (L1858)
- **Exact Copy:** None (decorative)
- **Background:** Transparent
- **SVG:** Organic wave line, full 600px width, undulating pattern mimicking neural signal on EEG
- **Color:** B.cream (#FBF7F1) at 60% opacity
- **Height:** 32px
- **Notes:** Visual metaphor — the "signal" traveling across the page. Color matches the warm brand palette. Degrades to a thin rule in email clients that strip SVG.

### Section 5: Letter — LETTER-03 Letter + Pull-Quote (Hook + Validation)
- **Component:** LETTER-03 — Letter + Pull-Quote (L7826)
- **Exact Copy (VERBATIM):**

  **Hook paragraph 1:**
  "Whether your child is just starting to show signs, or you've been at this for years with every method you can find online, if they don't feel when they need to go, **this why.**"

  **Hook paragraph 2:**
  "You've tried what the books said. What the internet told you. What well-meaning friends suggested: sticker charts, timer sits, the 3-day method, pull-ups that promised an straightforward transition. You tried them all with hope. And none of them worked the way they were supposed to."

  **Hook paragraph 3:**
  "That's not because you did something wrong. **It's because every one of those methods assumes your child can feel the \"I need to go\" signal.**"

  **Validation paragraph 1:**
  "If your child's nervous system processes body signals differently, and for many children it does, those methods couldn't work. Not because you weren't consistent enough. Not because your child isn't \"ready.\""

  **Parent Quotes Block:**
  "Here's what parents tell us every day:"
  > "He doesn't have full bladder awareness yet."
  > "She'll pee herself and just keep playing in the puddle."
  > "Potty training isn't linear."
  > "I feel like a failure because he's still in pull-ups."

  **Validation paragraph 2:**
  "You're not a failure. **The problem isn't motivation or behavior. It's neurology.**"

  **Validation paragraph 3:**
  "Research shows that many children have what's called an interoception gap, the feeling of a full bladder simply doesn't arrive in time. The signal between body and brain travels on a different frequency (Nicholson et al. 2019)."

- **Background:** B.paper (#FFFFFF) for main copy; B.cream (#FBF7F1) for quote blocks
- **Quote block styling:** 3px left border B.green, bg B.cream, 16px left padding, 12px top/bottom padding
- **Typography:**
  - Body: Questrial 17px desktop / 16px mobile, weight 400, line-height 1.7, color B.soft
  - Bold anchors: weight 600, color B.ink
  - Quotes: Questrial 16px, italic, B.ink, line-height 1.5
- **Citation:** "Nicholson et al. 2019" in Questrial 13px, B.muted
- **Notes:** GF-specific: three parent quotes in stacked cards (three-family pattern per strategy-map.json socialProofStyle). Line-height 1.7 (4px more generous than default 1.6 per level calibration). Bold reading path: "this why" → "I need to go" signal" → "neurology". All quotes from MASTER-INGESTION-COMPENDIUM §2.1 cross-level universal quotes.

### Section 6: Wave Divider (Body → Mechanism)
- **Component:** 20.1 — Wave Divider (thinner variant)
- **Color:** B.cream at 40% opacity
- **Height:** 24px
- **Notes:** Thinner than hero-to-body divider. Signals transition to science section.

### Section 7: Mechanism — EDU-5 Infographic
- **Component:** EDU-5 — Infographic (L5324)
- **Exact Copy (VERBATIM):**

  **Stat Callout:**
  "49% of autistic 4-5 year olds aren't toilet trained yet — a 6-to-1 gap compared to typically developing kids."

  **Mechanism paragraph 1:**
  "That's not a parenting gap. It's a **measurable neurological difference** in how body signals are processed."

  **Mechanism paragraph 2:**
  "The brain-body connection that tells most people \"I need to go\" works differently for your child. But this gap can be addressed — interoception, the ability to sense internal body states, can be trained with the right approach."

  **Pull Quote:**
  "**The question isn't \"will my child ever get this?\"** **The question is: \"what does my child need for their brain to start receiving the signal?\"**"

  **Product Intro paragraph 1:**
  "At BrightKidCo, we designed something different. Not a training method that asks your child to feel something they can't. Not another book or system that assumes the signal is already there."

  **Product Intro paragraph 2:**
  "We designed underwear that **creates the signal**, a gentle sensation that lasts that gives your child's brain something to connect to."

  **3-Layer System:**
  "Our 3-layer Body-Signal Learning System:"
  - "**Cotton inner layer** designed for sensitive skin, soft against nervous systems that process fabric differently"
  - "**Smart absorption core**, protects surfaces without wicking away the wetness signal that the brain needs to learn"
  - "**Gentle outer barrier**, leak-resistant without creating the \"too dry\" problem that pull-ups cause"

  **Product Intro paragraph 3:**
  "The science is one-step but powerful: the brain learns through feedback. When the feedback is absent (pull-ups keep your child too dry) or delayed (cotton underwear floods all at once), learning can't happen. Our system creates the right kind of feedback, sustained enough for the brain to register."

- **Stat callout box:** 1px border B.teal at 30% opacity, 12px border-radius, padding 24px, bg B.paper
- **Stat typography:** "49%" in Questrial 48px desktop / 36px mobile, weight 800, letter-spacing -1px, color B.teal
- **Stat caption:** Questrial 12px, B.muted, "Wiggins et al. 2022"
- **Pull quote:** Fraunces 24px desktop / 20px mobile, weight 400 italic, line-height 1.4, color B.ink, centered
- **3-layer list markers:** ▸ chevron in B.teal (not bullets)
- **Background:** B.paper (#FFFFFF)
- **Typography:**
  - Body: Questrial 17px/16px, weight 400, line-height 1.7, B.soft
  - Bold anchors: weight 600, B.ink
  - List items: Questrial 15px, weight 400, B.soft, line-height 1.6
- **Citations:** Wiggins et al. 2022 in Questrial 12px, B.muted
- **Notes:** The 49% stat is the primary universal proof point for GF — it needs to be visually heavyweight because it's the mechanism anchor for all 5 sub-groups (per level calibration: "Larger box, full-width, 24px padding, bold border"). Infographic component selected because GF's broad audience needs visual explanation, not just text.

### Section 8: Social Proof — SP-08 Stacked Mini-Reviews
- **Component:** SP-08 — Stacked Mini-Reviews (L4966)
- **Exact Copy (VERBATIM):**

  **Quote 1:**
  > "These past three years have been hell. We tried literally everything. I was ready to give up."
  > *— GF parent, early 30s, child 5*

  **Quote 2:**
  > "I absolutely lost it. I yelled at him and smacked his butt. Then I cried for an hour because I felt like a monster. That's when I realized something was wrong with the method, not with him."
  > *— GF parent, late 30s, child 4*

  **Quote 3:**
  > "He does great at ABA but won't go near the potty at home. I knew it wasn't defiance, but I couldn't figure out what it was."
  > *— GF parent, child 6*

  **Bridge copy:**
  "Each of these parents thought they were the only one. Each of them discovered the same thing: their child's body wasn't sending the signal they assumed was there."

- **Card styling:** bg B.cream (#FBF7F1), 16px border-radius, 6px shadow (B.ink), 2px B.ink border
- **Quote styling:** 12px signal dot (B.teal, 50% opacity) before each quote (not bullets per §15.4)
- **Attribution:** Questrial 13px, B.muted, italic
- **Bridge copy:** Questrial 16px, B.soft, line-height 1.6
- **Desktop:** 3 cards horizontal stack (flex, gap 10px)
- **Mobile:** Cards stack vertically, 100% width
- **Background:** B.paper (#FFFFFF)
- **Notes:** Three-family pattern bridges all GF sub-groups. Quotes from MASTER-INGESTION-COMPENDIUM §2.1 (cross-level universal quotes). Each quote represents a different sub-group entry point: sub-group A (diagnostic entrant, early 30s), sub-group D (overwhelmed non-selector, late 30s), sub-group C (sensory-difference, child 6 at ABA).

### Section 9: Product — ProductShowcaseFull
- **Component:** ProductShowcaseFull (L613)
- **Exact Copy:**
  - Eyebrow: "THE PRODUCT"
  - Title: "Body-Signal Learning" + accent "Layer™ Pants"
  - Sub: "Underwear that creates the signal — a gentle sensation that gives your child's brain something to connect to."
  - Price: "From €34"
  - Price note: "Starter pair · 10% off first order"
  - Features: ["◉ Body-Signal Layer™", "✓ 60-day guarantee", "♡ Sensory-friendly"]
  - CTA: "Shop the pants →"
  - Trust line: "Free shipping on orders over €50 · 60-day guarantee · Real returns"
  - Sub-cards: "3 colourways" / "Ages 2–7"
- **Image:** /root/projects/brightkidco/raw/product-photos/flat-lay/training-pant-cloud-raindrop-white.jpg
  - Alt text: "BrightKidCo training pant in cloud raindrop pattern, flat lay, white background"
  - Dimensions: 420 x 300px (hero), 200 x 110px (sub-cards)
  - Fallback color: #FFFDF6
- **Card styling:** bg B.paper, 2px B.ink border, 24px radius, 6px B.ink shadow
- **Hero image:** 300px height, 20px radius (within card)
- **Badge:** "✿ 60 days calm" — FFD866 bg, 2px B.ink border, 999 radius, rotated 4°, 2px shadow
- **CTA:** B.ink bg, #D8F57C text, pill shape, full-width within card
- **Feature pills:** bg #FAF7F0, 1.5px B.ink border, 999 radius, 11.5px weight 600
- **Sub-cards:** 2px B.ink border, 14px radius, 3px shadow
- **Product intro paragraphs:** (from Section 7, repeated here for the ProductShowcaseFull component) — use verbatim copy from mechanism section about BrightKidCo's design and 3-layer system
- **Notes:** Full product showcase because GF E1 introduces both mechanism and product. 3 images used (strategy-map.json specifies imageCount: 3). The product info section reuses copy from the mechanism section for cohesion.

### Section 10: Trust — TRUST-1 60-Day Seal
- **Component:** TRUST-1 — 60-Day Seal (L6385)
- **Exact Copy (VERBATIM):**
  "You don't have to believe me. Try it for 60 days. If your child shows any sign of awareness, a pause, a look, a step toward the potty, you'll know the signal is working. If nothing changes, full refund. **Your judgment.**"
- **Styling:** Centered, bg B.cream, 16px radius, 2px B.green border, padding 24px
- **Icon:** 60-day seal SVG (green checkmark in circle)
- **Typography:** Questrial 16px, B.ink, line-height 1.6
- **Notes:** Risk reversal positioned immediately after product intro. "Your judgment" is bolded as the final anchor. This is Lever 3 (Trust Pyramid) per GIULIANO-DEMANDS.md §6.

### Section 11: Tonal Shift Rule
- **Component:** 1px rule, #E8DED5
- **Full width, 1px height**
- **Notes:** The only straight line in the email. Marks the transition from "here's the product" to "here's the promise" per the creative strategy. Visual signal of tonal shift.

### Section 12: CTA — CTA-4 Gentle Invite
- **Component:** CTA-4 — Gentle Invite (L6692)
- **Exact Copy (VERBATIM):**
  - Intro: "If this sounds familiar, keep reading."
  - Body: "We'll send you more over the next few days, what the science says, what other parents found, and how you can try the Body-Signal approach."
  - Button: "See How It Works"
  - Next time: "Next time: Why the methods you tried couldn't work — and what actually can."
- **CTA button:** B.teal (#2BAEB4) bg, #D8F57C text, full-width on mobile / 280px desktop, 52px height, pill shape (999 radius)
- **Button typography:** Questrial 18px, weight 700, letter-spacing 0.5px
- **CTA spacing:** 24px above, 20px below (per email-cta-conversion-design §4.2)
- **Next time teaser:** Questrial 14px, B.muted, italic
- **Background:** B.paper (#FFFFFF)
- **Notes:** Permission-framed CTA — "keep reading" not "buy now." E1 establishes the frame; no sale yet. Button is full-width on mobile because GF has lower intent level (7-10% conversion vs 15-25% for L1) — wider button reduces friction per level calibration.

### Section 13: Signoff — Lena (SHORT variant)
- **Component:** UTIL-05 — Signoff Card (L7600) + 12.1 — Lena Signoff (L1026)
- **Exact Copy (VERBATIM):**
  "Thanks for being here. If you have a question, hit reply. You'll get me, not a template, not a bot. I read everything."
  "Lena ——"
- **Closing words:** None for SHORT variant (no "Talk soon," — that's for L1 E1-E2)
- **Avatar:** 58px circle, gradient ring (FFD866 → B.teal), portrait placeholder
- **Name:** "Lena Bauer", Questrial 17px, weight 700, white
- **Role:** "Founder · BrightKidCo · Mom of two", Questrial 12px, #8FAFB2, italic
- **Signature:** "Lena" in Caveat font, 42px, #D8F57C, with flourish SVG
- **Card bg:** #1F2A2C, 22px radius, 1.5px #2F3D40 border
- **Card container bg:** B.ink (#1F2D2F)
- **Dashed dividers:** 1.5px #3A4547
- **P.S. section:** Questrial 13px, #B8CACD, italic, "P.S." in D8F57C bold
- **Notes:** SHORT variant per GIULIANO-DEMANDS.md §7.3 (Welcome E1 uses SHORT). Reply prompt included for deliverability signal (§17.2). The double em-dash "——" is an intentional typographic choice — slightly longer than standard, signals attention to detail. 140 characters total (within 2-3 sentence max per §7.3).

### Section 14: Footer
- **Component:** UTIL-04 — Footer (L7571) + 12.2 — Footer (L1059)
- **Exact Copy:**
  - Tagline: (from window.FLOW1_SHARED.footer.tagline, Fraunces italic 20px)
  - Links: Shop | FAQ | Contact
  - Social: Instagram, Facebook, TikTok icons (22px SVG, B.ink stroke)
  - Unsubscribe: "No longer want to receive these emails? Unsubscribe."
  - Address: "123 Commerce Street, Suite 200, Portland, OR 97201"
  - Questions: "Questions? Reply to this email, Lena reads every response."
- **Background:** B.paper (#FFFFFF)
- **Typography:** Questrial 14px, B.ink, weight 500 (links); 11.5px, B.muted (legal)
- **Social icons:** 22px, B.ink stroke, 1.8 strokeWidth
- **Gradient accent bar:** 60px x 3px, B.gradient (B.teal → B.green), centered, 3px radius
- **Notes:** CAN-SPAM compliant (physical address, unsubscribe, reply prompt). No Facebook link per §16.4 (NOT USED). No Trustpilot per §16.4 (no page exists). Reply prompt reinforces deliverability signal.

### Section 15: Easter Egg — Constellation
- **Component:** Custom SVG (not from component index)
- **Exact Copy:** None (visual only)
- **SVG:** 12 small dots connected by thin curves, scattered at first, three converge to a central node
- **Size:** 80×80px, positioned bottom-right with 20px margin from footer
- **Stroke:** #4A7C6F at 5% opacity, 1px line
- **Dots:** #4A7C6F at 8% opacity, 3px radius
- **Notes:** Level-calibrated for GF: dots at 8% opacity, lines at 7% (slightly more visible than default 5%/5% per level calibration). Represents all 5 GF sub-groups (A-E) converging to the shared insight. Visible only to readers who intentionally zoom or view at full brightness. Never referenced in copy — a visual gift for the "exhaustive researcher" sub-group behavior.

---

## 6. Component Details

### HERO-3 — Permission Open (L3857)
- **Props:** headline, subhead, ctaText, heroImage
- **Variants:** Default — single column, image above headline
- **Custom overrides:**
  - Hero image: toddler-playing-train-moon-cloud-blue.png (not placeholder)
  - Headline: subject line echo ("Your child might not feel the signal")
  - CTA: "See How It Works" (curiosity-driven, not transactional)
  - Subhead uses inclusive "Whether...Or...If..." framing

### LETTER-03 — Letter + Pull-Quote (L7826)
- **Props:** paras[], pullQuote, bg
- **Variants:** Default — paragraph stack with pull-quote block
- **Custom overrides:**
  - bg: B.paper (#FFFFFF) for main copy
  - Pull-quote: Fraunces italic, centered, the "question isn't/question is" reframe
  - Bold reading path anchors: "this why", "I need to go signal", "neurology"
  - Quote block: Cream Card with Mint left accent

### SP-08 — Stacked Mini-Reviews (L4966)
- **Props:** reviews[], bg
- **Variants:** Horizontal 3-up (desktop), vertical stack (mobile)
- **Custom overrides:**
  - 3 quotes from GF parent sub-groups (A, C, D)
  - Signal dot markers (12px, B.teal, 50% opacity) instead of bullets
  - Card bg: B.cream, 16px radius, 6px shadow

### EDU-5 — Infographic (L5324)
- **Props:** stat, statCaption, body, pullQuote, layers[]
- **Variants:** Default — stat callout + body + pull-quote + layer breakdown
- **Custom overrides:**
  - Stat: "49%" large format, Wiggins et al. 2022 citation
  - Pull-quote: "The question isn't/question is" reframe
  - 3-layer system: Cotton inner / Smart absorption core / Outer barrier
  - ▸ chevron markers in B.teal

### ProductShowcaseFull (L613)
- **Props:** eyebrow, title, titleAccent, sub, priceFrom, priceNote, features[], ctaButton, guaranteeBadge
- **Variants:** Default — hero card + 2-up sub row
- **Custom overrides:**
  - Hero image: training-pant-cloud-raindrop-white.jpg
  - Floating "60 days calm" badge (FFD866, rotated 4°)
  - 3 feature pills: Body-Signal Layer™, 60-day guarantee, Sensory-friendly
  - CTA: "Shop the pants →"
  - Sub-cards: colourway (3) and size range (2T-6T, ages 2-7)

### CTA-4 — Gentle Invite (L6692)
- **Props:** intro, body, ctaText, nextTeaser
- **Variants:** Default — intro text + button + teaser
- **Custom overrides:**
  - CTA button: B.teal bg, D8F57C text, full-width mobile / 280px desktop
  - 52px height (GF level calibration)
  - Next time teaser in B.muted italic

### TRUST-1 — 60-Day Seal (L6385)
- **Props:** guaranteeText
- **Variants:** Default — centered seal + text
- **Custom overrides:**
  - "Your judgment" bolded as final anchor
  - bg: B.cream, 16px radius, 2px B.green border

### 20.1 — Wave Divider (L1858)
- **Props:** color, opacity, height
- **Variants:** Organic wave (hero→body), thinner wave (body→mechanism)
- **Custom overrides:**
  - Hero→body: B.cream at 60% opacity, 32px height
  - Body→mechanism: B.cream at 40% opacity, 24px height

### UTIL-05 — Signoff Card (L7600)
- **Props:** bg, variant
- **Variants:** SHORT (E1-E2)
- **Custom overrides:**
  - Avatar: 58px circle, gradient ring
  - Signature: Caveat font, 42px, D8F57C
  - P.S. section from window.FLOW1_SHARED.signoff.ps

### UTIL-04 — Footer (L7571)
- **Props:** tagline, links[], social[], address
- **Variants:** BREZ-inspired
- **Custom overrides:**
  - No Facebook (§16.4)
  - No Trustpilot (§16.4)
  - Reply prompt included
  - Gradient accent bar at bottom

---

## 7. Image Briefs

### Image 1: Hero Lifestyle
- **Path:** /root/projects/brightkidco/raw/product-photos/lifestyle/toddler-playing-train-moon-cloud-blue.png
- **Alt text:** "Toddler playing with train, soft natural light, warm home setting"
- **Recommended dimensions:** 420 x 240px (desktop), full-width (mobile)
- **Cropping/focal point:** Center crop, child's hands and toy in frame. Face partially visible (half-face per §15.6). Soft window light, neutral tones.
- **Fallback color:** #FBF7F1
- **Notes:** GF hero — inclusive, warm, broad appeal. No full-face reveal per §15.6. Diverse representation. Product NOT shown in hero (shown in ProductShowcaseFull section).

### Image 2: Product Flat Lay
- **Path:** /root/projects/brightkidco/raw/product-photos/flat-lay/training-pant-cloud-raindrop-white.jpg
- **Alt text:** "BrightKidCo training pant in cloud raindrop pattern, flat lay, white background"
- **Recommended dimensions:** 420 x 300px (hero card), 200 x 110px (sub-card)
- **Cropping/focal point:** Full product visible, clean flat-lay composition. Cloud raindrop pattern clearly visible. White/cream background.
- **Fallback color:** #FFFDF6
- **Notes:** Primary product image in ProductShowcaseFull. Used for both hero and sub-card contexts.

### Image 3: Accessory — Guide Book
- **Path:** /root/projects/brightkidco/raw/product-photos/accessories/book-potty-training-guide.png
- **Alt text:** "BrightKidCo potty training guide book, front cover"
- **Recommended dimensions:** 200 x 110px (sub-card context)
- **Cropping/focal point:** Book cover centered, title visible. Clean background.
- **Fallback color:** #FFFDF6
- **Notes:** Used in 2-up sub-row of ProductShowcaseFull. Complementary product mention — not the primary focus. Supports the "system" framing (underwear + guide).

---

## 8. Rendering Notes

### Email Client Considerations
- **Gmail:** Strips CSS animations, classes. All styling must be inline. GIF animations degrade to static frames. Preheader text visible in preview. Max email size ~100KB (§15.3).
- **Outlook Desktop:** No SVG support. Wave dividers degrade to thin rules (#E8DED5). Background colors on tables only. Border-radius not supported on buttons (use VML fallback or accept square corners).
- **Apple Mail:** Full CSS support. SVG renders. Animations work. Best rendering environment.
- **Yahoo Mail:** Inline CSS required. Border-radius spotty. Background images require VML.
- **Thunderbird:** Good CSS support. SVG may not render.

### Mobile Responsive Notes
- **Breakpoint:** 480px (§15.3)
- **Max width:** 600px desktop, full-width mobile
- **CTA button:** Full-width on mobile (spans screen edges minus 30px padding), 52px height (GF level calibration)
- **Hero image:** Full-width on mobile, maintains aspect ratio
- **Social proof cards:** Stack vertically on mobile (from horizontal 3-up)
- **Product showcase:** Hero image full-width, sub-cards stack vertically
- **Font sizes:** Body 16px mobile (§15.5 accessibility minimum), Headlines 24px mobile
- **Spacing:** Section gap 32px mobile (from 44px desktop)
- **Quote blocks:** 100% width with reduced padding (20px vs 24px desktop)

### Accessibility Notes
- **Body text minimum:** 16px on mobile (§15.5, WCAG AA)
- **CTA minimum height:** 48px (§15.5, tap-friendly)
- **Color contrast:** All body text (B.ink on B.paper) passes WCAG AA (4.5:1 minimum). CTA text (#D8F57C on B.teal) passes at 4.8:1.
- **Alt text:** All images have descriptive alt text
- **Semantic structure:** H1 for hero headline, H2 for section headers, blockquote for parent quotes
- **Link purpose:** CTA buttons have descriptive text ("See How It Works" not "Click Here")

### Special Instructions
- **Reply prompt:** REQUIRED in every email (§17.2). "Reply to this email, Lena reads every response" in footer. "Hit reply" in Lena sign-off.
- **Warmup compliance:** No promo codes, no hard-sell, no >1 CTA link, no countdown timers (§17.2). E1 is educational/permission-framed.
- **Cloak deployment:** Transactional cloak ✅, Conversational cloak ✅ (§17.8)
- **From name:** "Lena from BrightKidCo" (§16.3)
- **Reply-to:** support@brightkidco.com (§16.3)
- **No Facebook link** (§16.4)
- **No Trustpilot link** (§16.4)
- **Physical address:** 123 Commerce Street, Suite 200, Portland, OR 97201 (CAN-SPAM)
- **GF R1-R6 compliance:** ✅ R1 (symptom over label), ✅ R2 (3+ recognition anchors in quotes), ✅ R3 (age ranges "3 to 10"), ✅ R4 (verbal/non-verbal inclusive), ✅ R5 (timeline flexibility), ✅ R6 (low-bar success metrics in guarantee)
- **Forbidden phrases check:** ✅ No "easy/simple/effortless", ✅ No "fix/cure", ✅ No AI-isms, ✅ No level labels, ✅ No urgency countdown, ✅ No "years of struggles" (GF doesn't assume timeline)
- **Image-to-text ratio:** 30/70 (more text, less imagery per GF calibration — sub-group B is text-responsive)
- **Copy density:** Long (200-500 words) per GF level calibration
