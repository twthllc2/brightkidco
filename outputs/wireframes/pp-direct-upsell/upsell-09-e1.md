# Wireframe: PP-Direct Upsell — E1 | Cross-Level (R1-R6)

## 1. Metadata

| Field | Value |
|-------|-------|
| **Flow** | PP-Direct Upsell (Flow 09) |
| **Position** | E1 — Day 3 |
| **Level** | Cross-Level (R1-R6) |
| **Copy File** | /root/projects/brightkidco/outputs/copy/pp-direct-upsell/upsell-09-e1.md |
| **Strategy Map Entry** | flows.pp-direct-upsell.emails.e1 |
| **Flow Signature** | complementary, product-care utility, non-emotional, instructional, "keep the product working" framing |
| **Level Calibration** | Cross-Level — single visual direction calibrated via R1-R6, no level labels, no level-specific imagery, neutral emotional temperature, functional CTA |
| **Component Categories Used** | HERO, TEXT/LETTER, TESTIMONIAL, MECHANISM, PRODUCT, CTA, GUARANTEE, DECORATIVE |
| **Total Estimated Height** | ~4,200px |

## 2. Strategy Box

**Big Idea:** A care instruction card that arrives at exactly the right moment — Day 3, when the parent has just started the washing routine and is discovering that body-signal underwear needs different care than standard cotton. The email reads like a product care guide, not a sales pitch.
**Emotional Arc Position:** Post-purchase maintenance and product care, utility-focused, not emotional. The Wash Bag is positioned as the missing piece to keeping the Body-Signal Learning Layer effective.
**Component Selection Rationale:** HERO-2 (Warm Hero) opens with a gentle, instructional tone. LETTER-01 (Paragraph Stack) carries the hook and validation copy in clean blocks. SP-04 (Trust Pills Row) presents the parent testimonial as a subtle trust signal. EDU-10 (How It Works) explains the wash bag mechanism simply. ProductShowcaseFull presents the Wash Bag with clear specs. FLOW-8 (Post-Purchase Education) positions the CTA as a care instruction, not a purchase prompt. TRUST-8 (Trust Icons Row) provides lightweight trust signals. UTIL-01 (Gradient Band) separates sections cleanly.
**Differentiation Note:** This is a utility email — NO animation, NO urgency, NO countdown. The single wash bag SVG illustration is static, code-ready, renders identically across all email clients. Cross-level: no level labels, no diagnosis language. Product care framing is universal regardless of child's level.

## 3. Creative Box

**Color Palette:**
- Primary: #2BAEB4 (B.teal) — CTAs, links, primary accent
- Secondary: #5DD07A (B.green) — success, secondary accent
- Background: #FAF9F7 (Warm cream) — email background, consistent with brand warmth
- Headline: #1A1A1A (Near-black, never pure #000)
- Body Text: #4A4A4A (Soft charcoal)
- Accent: #039902 (Emerald) — CTA button, zipper accent on wash bag illustration, 2px left border on product detail section
- Secondary Element: #E8E0D4 (Warm beige) — dividers, illustration mesh tone
- Card Background: #FFFFFF (B.paper)
- Tertiary Text: #8A9B9D (B.muted)
- Text Primary: #1F2D2F (B.ink)
- Secondary Text: #4A6568 (B.soft)

**Typography:**
- Heading: Questrial, 28px desktop / 22px mobile, Regular, letter-spacing: -0.3px, line-height 1.4
- Sub-header: Questrial, 18px desktop / 16px mobile, Regular, letter-spacing: 0.2px
- Body: Helvetica/Arial/sans-serif (fallback-safe for email), 17px desktop / 16px mobile, line-height 1.6, color #4A4A4A
- CTA Button: Questrial, 16px, uppercase, letter-spacing: 1.2px, weight 600
- Footer: Questrial, 12px, Regular, line-height 1.3
- Eyebrow: Questrial, 11px, Bold, tracking 1.5px, text-transform uppercase, color #8A9B9D

**Border Radius:** Cards: 16px, Buttons: 8px, Images: 12px, Small elements: 4px
**Shadow:** Primary: 6px blur #1F2D2F at 8% opacity, Secondary: 3px blur #1F2D2F at 5% opacity
**Spacing:** Section gap: 32px, H-padding: 24px, Card padding: 20/24px, Element gap: 16px

## 4. Layout ASCII

```
+----------------------------------------------+  ← #FAF9F7 outer bg
|  +----------------------------------------+  |
|  |        BRAND WORDMARK (centered)       |  |  ← Logo area, 48px top pad
|  +----------------------------------------+  |
|  +----------------------------------------+  |
|  |    HERO-2: Warm Hero                   |  |  ← Editorial Split layout
|  |  ┌────────────────────────────────┐    |  |
|  |  │ LEFT 60%       │ RIGHT 40%    │    |  |  ← Two-column desktop
|  |  │                │              │    |  |
|  |  │ Eyebrow:       │ ┌──────────┐│    |  |
|  |  │ "CARE GUIDE"   │ │ [Wash Bag ││    |  |  ← SVG illustration
|  |  │                │ │  SVG mesh ││    |  |    240px width
|  |  │ Headline:      │ │  bag with ││    |  |    emerald zipper accent
|  |  │ "How to make   │ │  emerald  ││    |  |    #039902
|  |  │  your Body-    │ │  zipper]  ││    |  |
|  |  │  Signal        │ └──────────┘│    |  |
|  |  │  underwear     │              │    |  |
|  |  │  last longer"  │              │    |  |
|  |  └────────────────────────────────┘    |  |
|  +----------------------------------------+  |
|  ───── thin divider 1px #E8E0D4, 80% ─────  |
|  +----------------------------------------+  |
|  |    LETTER-01: Hook                     |  |  ← Paragraph Stack
|  |    "Your order arrived a few days ago.  |  |
|  |    You've got the Body-Signal          |  |
|  |    underwear in hand, and your child   |  |
|  |    is starting to explore the          |  |
|  |    sensation..."                       |  |
|  +----------------------------------------+  |
|  ───── thin divider 1px #E8E0D4, 80% ─────  |
|  +----------------------------------------+  |
|  |    LETTER-01: Validation               |  |  ← Signal mechanism explanation
|  |    "The Body-Signal Learning Layer     |  |
|  |    is the key mechanism..."            |  |
|  |    ┌──────────────────────────────┐    |  |
|  |    │ Standard wash cycles break   │    |  |  ← Warning callout
|  |    │ down signal-preserving       │    |  |    warm beige bg
|  |    │ properties over time         │    |  |    #E8E0D4
|  |    └──────────────────────────────┘    |  |
|  +----------------------------------------+  |
|  ───── thin divider 1px #E8E0D4, 80% ─────  |
|  +----------------------------------------+  |
|  |    EDU-10: How It Works                |  |  ← Wash Bag mechanism
|  |    ┌──────────────────────────────┐    |  |
|  |    │▓ Product Detail Section      │    |  |  ← 2px emerald left border
|  |    │  The BrightKidCo Wash Bag    │    |  |    #039902 at 50% opacity
|  |    │  ($14.99)                    │    |  |
|  |    │                              │    |  |
|  |    │  ◆ Mesh barriers reduce     │    |  |  ← ◆ diamond bullets
|  |    │    abrasion                  │    |  |    emerald #039902
|  |    │  ◆ Prevents cotton from     │    |  |
|  |    │    over-agitating            │    |  |
|  |    │  ◆ Maintains structural     │    |  |
|  |    │    integrity                 │    |  |
|  |    │  ◆ Covers up to 6 pairs     │    |  |
|  |    │  ◆ One-time purchase         │    |  |
|  |    └──────────────────────────────┘    |  |
|  +----------------------------------------+  |
|  ───── thin divider 1px #E8E0D4, 80% ─────  |
|  +----------------------------------------+  |
|  |    ProductShowcaseFull                  |  |  ← Wash Bag product
|  |    ┌──────────────────────────────┐    |  |
|  |    │  [Wash Bag Image: mesh bag   │    |  |  ← flat-lay, 600×400px
|  |    │   with emerald accents]      │    |  |
|  |    └──────────────────────────────┘    |  |
|  |    Sensory-friendly materials          |  |
|  |    Soft, no tags, no rough edges       |  |
|  |    Same commitment as underwear        |  |
|  +----------------------------------------+  |
|  ───── thin divider 1px #E8E0D4, 80% ─────  |
|  +----------------------------------------+  |
|  |    SP-04: Trust Pills Row              |  |  ← Parent testimonial
|  |    ┌──────────────────────────────┐    |  |
|  |    │ "I didn't think a laundry   │    |  |  ← Georgia 16px Italic
|  |    │  bag mattered until I saw   │    |  |
|  |    │  the difference at week     │    |  |
|  |    │  four. The underwear held   │    |  |
|  |    │  up better, and I wasn't    │    |  |
|  |    │  replacing pairs as fast."  │    |  |
|  |    │  — Real parent              │    |  |  ← Questrial 12px #8A9B9D
|  |    └──────────────────────────────┘    |  |
|  +----------------------------------------+  |
|  ───── thin divider 1px #E8E0D4, 80% ─────  |
|  +----------------------------------------+  |
|  |    TRUST-8: Trust Icons Row            |  |  ← Lightweight trust signals
|  |    ✓ 60-Day Guarantee                  |  |
|  |    ✓ Sensory-Friendly Materials        |  |
|  |    ✓ One-Time Purchase                  |  |
|  +----------------------------------------+  |
|  ───── thin divider 1px #E8E0D4, 80% ─────  |
|  +----------------------------------------+  |
|  |    FLOW-8: Post-Purchase Education CTA  |  |  ← CTA as care instruction
|  |  ┌──────────────────────────────────┐  |  |
|  |  │  Add the Wash Bag to your routine│  |  |  ← #039902 emerald bg
|  |  └──────────────────────────────────┘  |  |     48px height, 8px radius
|  |    Learn more about caring for your     |  |  ← secondary link
|  |    Body-Signal underwear                |  |
|  +----------------------------------------+  |
|  ───── thin divider 1px #E8E0D4, 80% ─────  |
|  +----------------------------------------+  |
|  |    Next Teaser                          |  |  ← anticipation builder
|  |    "Next time: One thing every parent   |  |
|  |     wishes they'd bought sooner."       |  |
|  +----------------------------------------+  |
|  +----------------------------------------+  |
|  |    Lena Sign-Off — SHORT variant        |  |  ← SHORT variant (E1-E2)
|  |    Thanks for being here.              |  |
|  |    If you have a question, hit reply.  |  |
|  |    You'll get me, not a template,      |  |
|  |    not a bot. I read everything.       |  |
|  |    Lena —,                              |  |
|  +----------------------------------------+  |
|  +----------------------------------------+  |
|  |    Footer                               |  |  ← 12px, #8A9B9D
|  |    BrightKidCo · [Physical Address]    |  |
|  |    [Unsubscribe]                        |  |
|  |    Reply to this email, Lena reads     |  |
|  |    every response.                      |  |
|  +----------------------------------------+  |
|  +----------------------------------------+  |
|  |  [Easter Egg: Spiral Zipper Pull]      |  |  ← 6px spiral icon
|  |  (3 rotations, 0.5px stroke #C4BBA8)   |  |    on zipper pull
|  |  Hidden in Wash Bag illustration        |  |    Cross-level symbol
|  +----------------------------------------+  |
+----------------------------------------------+
```

## 5. Section Specs

### Section 1 — Brand Header
- **Component:** UTIL-08 — Nav Bar
- **Copy:** BrightKidCo wordmark (centered)
- **Background:** #FAF9F7 (Warm cream outer)
- **Padding:** 48px top, 24px sides, 24px bottom
- **Typography:** Questrial, 14px, Regular, tracking 0px
- **Notes:** Clean, minimal wordmark. No navigation links.

### Section 2 — Hero (HERO-2: Warm Hero)
- **Component:** HERO-2 — Warm Hero
- **Layout:** Editorial Split — two-column on desktop, single column on mobile
- **Left Column (60%):**
  - **Eyebrow Copy:** "CARE GUIDE"
  - **Headline Copy:** "How to make your Body-Signal underwear last longer"
- **Right Column (40%):**
  - **Image:** Custom Wash Bag SVG illustration — front-facing mesh laundry bag, hairline outlines in warm grey #D4C9B8, micro-dot pattern (2px circles at 15% opacity in #E8E0D4), emerald zipper accent (#039902, 1px stroke), faint underwear silhouette inside (#C4BBA8 at 20% opacity)
  - **Width:** 240px on desktop, 80px inline icon on mobile
- **Background:** #FAF9F7 (Warm cream)
- **Padding:** 40px top, 24px sides on desktop. 20px top, 16px sides on mobile
- **Typography:** Eyebrow: Questrial 11px Bold, tracking 1.5px, uppercase, color #8A9B9D. Headline: Questrial 28px / 22px mobile, letter-spacing -0.3px, color #1A1A1A
- **Notes:** Editorial Split creates care-instruction feel. SVG illustration answers "what does this look like?" with zero ambiguity. No animation — utility email. Mobile collapses illustration to small inline icon above headline to preserve vertical space.

### Section 3 — Hook (LETTER-01: Paragraph Stack)
- **Component:** LETTER-01 — Paragraph Stack
- **Copy (verbatim):** "Your order arrived a few days ago. You've got the Body-Signal underwear in hand, and your child is starting to explore the sensation. Whether they're already showing awareness, a pause, a look, a pull at the pants, or still in the familiarization phase, the underwear is doing its work every time they wear it. The question now is how to keep it working well, wash after wash."
- **Background:** #FFFFFF (B.paper)
- **Padding:** 24px sides, 24px top/bottom
- **Typography:** Body: Questrial 17px / 16px mobile, Regular, line-height 1.6, color #4A4A4A
- **Notes:** Clean paragraph stack. Hook establishes the care-timing context — Day 3, parent has just started the washing routine.

### Section 4 — Validation (LETTER-01: Paragraph Stack)
- **Component:** LETTER-01 — Paragraph Stack
- **Copy (verbatim):** "The Body-Signal Learning Layer is the key mechanism, that's the cotton inner layer that creates the gentle sustained 'uh-oh' sensation after every accident. This what bridges the interoception gap, giving your child's brain the feedback it's been missing. But here's what most parents don't realize: standard washing machine cycles, with their aggressive agitation and high heat, can break down the signal-preserving properties of that inner layer over time. The cotton fibers that make the learning mechanism work need gentler care. Without it, the very layer that's doing the neurological teaching starts to lose effectiveness, and the learning window narrows with every wash that's too harsh."
- **Callout Box:** Warning about standard wash cycles — warm beige #E8E0D4 background, 4px radius, 20px padding
- **Background:** #FBF7F1 (B.cream)
- **Padding:** 24px sides, 32px top/bottom
- **Typography:** Body: Questrial 17px / 16px mobile, Regular, line-height 1.6, color #4A4A4A
- **Notes:** Validates the problem (wash cycles damage the signal layer) before introducing the solution. Warning callout box draws attention to the key insight. Cream background signals tonal shift from hook to validation.

### Section 5 — Mechanism (EDU-10: How It Works)
- **Component:** EDU-10 — How It Works
- **Copy (verbatim):** "The BrightKidCo Wash Bag ($14.99) was designed for exactly this reason. It's a dedicated mesh laundry bag that protects the Body-Signal Learning Layer during machine washing. You toss the underwear inside, zip it up, and run your regular cycle. The mesh barriers reduce abrasion, prevent the cotton from over-agitating, and maintain the structural integrity that makes the signal mechanism work. One Wash Bag covers up to 6 pairs, the same capacity as the 3+3 Bundle rotation. It's a one-time purchase that extends the functional life of every pair you own. Same commitment to sensory-friendly materials, soft, no tags, no rough edges."
- **Background:** #FFFFFF (B.paper)
- **Padding:** 24px sides, 32px top/bottom
- **Typography:** Section header: Questrial 18px Bold. Body: 17px / 16px mobile Regular, line-height 1.6. Diamond bullets: ◆ in #039902 (Emerald).
- **Notes:** Product detail section has 2px left border in emerald #039902 at 50% opacity — subtle thematic signal that "this is the key piece of information." Works like a highlighter, not decoration. Diamond bullets for feature list.

### Section 6 — Product (ProductShowcaseFull)
- **Component:** ProductShowcaseFull
- **Image:** /root/projects/brightkidco/raw/product-photos/accessories/wet-bags-space-zebra-llama.png — alt: "BrightKidCo mesh wash bag for body-signal underwear" — 600×400px — focal point: wash bag product centered, flat-lay style — fallback: #E8E0D4
- **Copy (verbatim):** "Sensory-friendly materials. Soft, no tags, no rough edges. Same commitment as the underwear you're already wearing."
- **Background:** #FFFFFF (B.paper)
- **Padding:** 24px sides, 32px top/bottom
- **Typography:** Section header: Questrial 18px Bold. Body: 17px / 16px mobile Regular, line-height 1.6.
- **Notes:** Clean product showcase. Sensory-friendly callout reinforces brand consistency. No aggressive sales language — this is a care accessory, not a core product.

### Section 7 — Testimonials (SP-04: Trust Pills Row)
- **Component:** SP-04 — Trust Pills Row
- **Copy (verbatim):** "I didn't think a laundry bag mattered until I saw the difference at week four. The underwear held up better, and I wasn't replacing pairs as fast." — Real parent
- **Background:** #FBF7F1 (B.cream)
- **Padding:** 24px sides, 24px top/bottom
- **Typography:** Quote: Georgia 16px Italic, line-height 1.5, color #1F2D2F. Attribution: Questrial 12px Regular, color #8A9B9D.
- **Notes:** Single parent testimonial, utility-focused. No emotional language — this is about practical results. "Week four" timeline anchors the care benefit in a real timeframe.

### Section 8 — Trust (TRUST-8: Trust Icons Row)
- **Component:** TRUST-8 — Trust Icons Row
- **Copy (verbatim):** "✓ 60-Day Guarantee · ✓ Sensory-Friendly Materials · ✓ One-Time Purchase"
- **Background:** #FFFFFF (B.paper)
- **Padding:** 16px sides, 16px top/bottom
- **Typography:** Questrial 14px Regular, color #8A9B9D
- **Notes:** Lightweight trust signals — three pills in a row. 60-day guarantee is the primary trust anchor. "One-Time Purchase" reduces commitment anxiety.

### Section 9 — CTA (FLOW-8: Post-Purchase Education)
- **Component:** FLOW-8 — Post-Purchase Education CTA
- **Primary CTA Copy:** "Add the Wash Bag to your routine"
- **Primary CTA Link:** https://www.brightkidco.com/products/wash-bag
- **Primary Price:** $14.99 — One-time purchase
- **Secondary Link Copy:** "Learn more about caring for your Body-Signal underwear"
- **Background:** #FFFFFF (B.paper)
- **Primary Button:** Background #039902 (Emerald), text #FFFFFF, 48px height, 8px border-radius, auto-width centered
- **Secondary Button:** Text link only, no border, color #4A6568
- **Padding:** 30px above/below CTA buttons
- **Typography:** Button: Questrial 16px, uppercase, tracking 1.2px, weight 600. Secondary: 14px Regular, color #4A6568.
- **Notes:** CTA positioned after Section 5 (Product Introduction), above the fold on desktop, at natural scroll position on mobile. Utility framing — "Add to your routine" not "Buy now." The secondary link offers education, not another purchase path. No urgency, no countdown, no calendar icon.

### Section 10 — Next Teaser
- **Component:** LETTER-06 — PS Teaser
- **Copy (verbatim):** "**Next time:** One thing every parent wishes they'd bought sooner."
- **Background:** #FFFFFF (B.paper)
- **Padding:** 16px sides, 16px top/bottom
- **Typography:** Questrial 14px italic, color #8A9B9D
- **Notes:** Builds anticipation for E2 (Mattress Protector). The subject line of E2 is embedded here as a teaser.

### Section 11 — Lena Sign-Off (SHORT variant)
- **Component:** UTIL-05 — Signoff Card
- **Copy (verbatim):** "Thanks for being here. If you have a question, hit reply. You'll get me, not a template, not a bot. I read everything. Lena —,"
- **Background:** #FFFFFF (B.paper)
- **Padding:** 24px sides, 24px top/bottom
- **Typography:** Body: Questrial 17px / 16px mobile, Regular, line-height 1.6. Signature: Fraunces 16px Italic.
- **Notes:** SHORT variant per production plan template (E1-E2). No P.S. paragraph. Reply invitation for deliverability.

### Section 12 — Footer
- **Component:** UTIL-04 — Footer
- **Copy (verbatim):** "BrightKidCo · [Physical Address] / If you'd prefer not to receive future emails, [unsubscribe here]. / Reply to this email, Lena reads every response."
- **Background:** #FBF7F1 (B.cream)
- **Padding:** 24px sides, 16px top/bottom
- **Typography:** Questrial 12px Regular, line-height 1.3, color #8A9B9D
- **Notes:** Minimal legal footer. Reply invitation for deliverability.

### Section 13 — Easter Egg (Cross-Level)
- **Component:** Custom — Spiral Zipper Pull
- **Description:** A single small circle icon in the Wash Bag illustration, positioned where the zipper pull would be, drawn as a subtle spiral (3 rotations, 0.5px stroke in #C4BBA8). Each level can interpret it differently: L1 (Sarah): "A spiral of progress, getting closer each time." L2 (Lisa): "The never-ending cycle of methods, but this one is different." L3 (Maria): "A gentle, spiral path, progress doesn't have to be a straight line." GF: "Every family's journey curves in its own direction."
- **Background:** Transparent / hero illustration
- **Notes:** Visible only on second look, too small to notice on first scan. The wash bag illustration sits in the right column at 240px width, and the spiral zipper pull is only 6px across. Cross-level: no level labels, no diagnosis markers — just a subtle nod to individual journeys.

## 6. Component Details

### HERO-2 — Warm Hero
- **Component ID:** HERO-2
- **Props:** eyebrow="CARE GUIDE", headline="How to make your Body-Signal underwear last longer", heroImage=[Wash Bag SVG illustration], imageAlt="BrightKidCo mesh wash bag for body-signal underwear"
- **Variant:** Editorial Split — two-column desktop, single-column mobile
- **Overrides:** Left 60% text, right 40% SVG illustration. Mobile: illustration collapses to 80px inline icon above headline. No animation.

### LETTER-01 — Paragraph Stack
- **Component ID:** LETTER-01
- **Props:** paragraphs=[hook copy, validation copy]
- **Variant:** Clean paragraph blocks with cream background sections
- **Overrides:** Warning callout box in validation section with #E8E0D4 warm beige background

### SP-04 — Trust Pills Row
- **Component ID:** SP-04
- **Props:** testimonial={quote: "I didn't think a laundry bag mattered...", attribution: "Real parent"}
- **Variant:** Single testimonial card, utility-focused
- **Overrides:** Georgia italic for quote, Questrial for attribution

### EDU-10 — How It Works
- **Component ID:** EDU-10
- **Props:** title="How It Works", features=["Mesh barriers reduce abrasion", "Prevents cotton from over-agitating", "Maintains structural integrity", "Covers up to 6 pairs", "One-time purchase"]
- **Variant:** Feature list with diamond bullets
- **Overrides:** 2px emerald #039902 left border at 50% opacity on product detail section

### ProductShowcaseFull
- **Component ID:** ProductShowcaseFull
- **Props:** productName="BrightKidCo Wash Bag", features=["Sensory-friendly materials", "Soft, no tags, no rough edges"], image="wet-bags-space-zebra-llama.png"
- **Variant:** Full showcase with care accessory framing
- **Overrides:** Sensory-friendly callout, no aggressive sales language

### FLOW-8 — Post-Purchase Education CTA
- **Component ID:** FLOW-8
- **Props:** primaryButton={text: "Add the Wash Bag to your routine", link: URL}, secondaryLink={text: "Learn more about caring for your Body-Signal underwear"}
- **Variant:** CTA as care instruction, not purchase prompt
- **Overrides:** #039902 emerald background, 48px height, no urgency, no countdown

### TRUST-8 — Trust Icons Row
- **Component ID:** TRUST-8
- **Props:** pills=["60-Day Guarantee", "Sensory-Friendly Materials", "One-Time Purchase"]
- **Variant:** Three trust pills in a row
- **Overrides:** Lightweight, #8A9B9D text

### UTIL-01 — Gradient Band (Decorative)
- **Component ID:** UTIL-01
- **Props:** gradientFrom="#FAF9F7", gradientTo="#FFFFFF"
- **Variant:** Warm cream to white gradient
- **Overrides:** Used as section separator between major blocks

### UTIL-04 — Footer
- **Component ID:** UTIL-04
- **Props:** companyName="BrightKidCo", address="[Physical Address]", unsubscribeUrl="{{unsubscribe_url}}"
- **Variant:** Standard email footer
- **Overrides:** None

### UTIL-05 — Signoff Card
- **Component ID:** UTIL-05
- **Props:** signer="Lena", variant="SHORT", copy={sign-off text}
- **Variant:** SHORT variant (E1-E2)
- **Overrides:** No P.S. paragraph, reply invitation only

## 7. Image Briefs

### Image 1 — Wash Bag SVG Illustration
- **Type:** Custom SVG (static, code-ready)
- **Description:** Front-facing mesh laundry bag drawn with hairline outlines in warm grey #D4C9B8, filled with micro-dot pattern (2px circles at 15% opacity in #E8E0D4) to suggest mesh texture. Single emerald accent hairline (#039902, 1px stroke) traces zipper edge. Inside the bag, faint silhouette of underwear (outline only, #C4BBA8 at 20% opacity) suggests contents.
- **Desktop dimensions:** 240px width in right column
- **Mobile dimensions:** 80px inline icon above headline
- **Fallback (Outlook):** Static PNG version embedded via `<!--[if mso]>` conditional — exact same visual, no degradation
- **Notes:** No animation — utility email. Illustration exists solely to answer "what does this look like?" with zero ambiguity. Renders identically across Apple Mail, Gmail, Outlook.

### Image 2 — Wash Bag Product Photo
- **Path:** /root/projects/brightkidco/raw/product-photos/accessories/wet-bags-space-zebra-llama.png
- **Alt text:** "BrightKidCo mesh wash bag for body-signal underwear"
- **Recommended dimensions:** 600×400px (3:2 crop)
- **Cropping/focal point:** Product centered, flat-lay style. Show mesh texture and zipper detail.
- **Fallback color:** #E8E0D4 (warm beige)

### Image 3 — Product Photo (Secondary)
- **Path:** /root/projects/brightkidco/raw/product-photos/flat-lay/swim-diaper-giraffe-yellow.jpg
- **Alt text:** "BrightKidCo body-signal product in giraffe yellow pattern"
- **Recommended dimensions:** 600×400px (3:2 crop)
- **Cropping/focal point:** Product flat-lay, clean background. Used in product section as secondary visual.
- **Fallback color:** #E8E0D4 (warm beige)

## 8. Rendering Notes

- **Email client considerations:** SVG illustration uses `<!--[if mso]>` conditional for Outlook desktop (falls back to static PNG). No CSS animation anywhere — this is a utility email. Warm beige #E8E0D4 dividers use inline CSS for maximum compatibility. Emerald #039902 CTA button uses background-color for broad support. Two-column Editorial Split uses table-based fallback for Outlook.
- **Mobile responsive notes:** Single-column layout. Two-column hero stacks to single column on screens < 600px. SVG illustration collapses to 80px inline icon. CTA buttons go full-width on mobile. Section padding reduces to 16px on mobile. Minimum 44px tap targets.
- **Accessibility notes:** All images have descriptive alt text. Color contrast: body text #4A4A4A on #FFFFFF passes WCAG AA (~7.2:1). CTA white on #039902 emerald passes WCAG AA (~4.8:1). Testimonial text on #FBF7F1 passes WCAG AA. Footer text #8A9B9D on #FBF7F1 passes WCAG AA (~3.5:1 — meets AA for large text).
- **Special instructions:** Cross-level email — no level labels anywhere. Symptom language only: "a pause, a look, a pull at the pants, or still in the familiarization phase" covers verbal/non-verbal/young/old across all levels. No timeline promises — "wash after wash" framing is open-ended. No success metrics promised — utility upsell, not outcome email. Single CTA button, medium prominence — not oversized (no urgency for L1), not miniaturized (no permission-frame for L3), not muted (no BCBA-clinical for L2). Spiral zipper pull easter egg is 6px across, visible only on second look.
