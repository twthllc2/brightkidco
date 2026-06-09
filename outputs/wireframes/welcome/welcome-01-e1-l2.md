# Wireframe: Welcome Flow — E1 | Level 2 — Lisa

## 1. Metadata

| Field | Value |
|-------|-------|
| **Flow** | Welcome Flow (Flow 1) |
| **Position** | E1 — Day 0 |
| **Level** | L2 — Lisa (Moderate ASD, 5-7 yrs, BCBA context, ~40% audience) |
| **Copy File** | /root/projects/brightkidco/outputs/copy/welcome/welcome-01-e1-l2.md |
| **Strategy Map Entry** | flows.welcome.emails.e1-l2 |
| **Flow Signature** | Warm-educational, Terra Cotta + Slate emphasis, medium-dense, low-pressure CTA |
| **Level Calibration** | Semi-bold typography weight, neutral color warmth, low CTA urgency, long copy density, BCBA-context social proof, 16px border-radius, 8px shadow |
| **Component Categories Used** | HERO, TEXT/LETTER, TESTIMONIAL, MECHANISM, PRODUCT, CTA, GUARANTEE, DECORATIVE |
| **Total Estimated Height** | ~3200px |

## 2. Strategy Box

**Big Idea:** Every method failed because it assumed the child can feel the body signal — this email proves it's neurology, not effort.
**Emotional Arc Position:** Mirror confusion → Validate → Offer mechanism as explanation → Curiosity to continue. This is the first touchpoint — the moment Lisa realizes someone understands the depth of her frustration and names the real problem.
**Component Selection Rationale:** HERO-16 (Mechanism Tease) opens with scientific curiosity rather than emotional hook — Lisa's skepticism demands mechanism-first. LETTER-03 (Letter + Pull-Quote) provides the long-form validation she needs to read. SP-02 (Expert Endorsement) reinforces the neuroscience with peer quotes. EDU-8 (Mechanism Diagram) makes the signal pathway visual. ProductShowcaseMedium gives a restrained product nod without hard sell. CTA-3 (Curiosity Code) is low-pressure. TRUST-1 (60-Day Seal) removes risk.
**Differentiation Note:** L2 is the only level with a Science Call-Out Box (named citations visible), an abstract signal-path SVG illustration, and a "mismatched frequency" Easter egg. L1 uses warmer, more playful visuals. L3 strips everything to bare minimum with maximum whitespace.

## 3. Creative Box

**Color Palette:**
- Primary: #C44536 (Terra Cotta) — Signal path, key copy highlights, CTA button
- Secondary: #E8D5C4 (Warm Clay) — Section backgrounds (Science Call-out, Guarantee)
- Accent: #2C5F5A (Deep Teal) — Guarantee badge border, secondary CTA links
- Background: #FDF8F4 (Warm White) — Email background
- Text: #3D405B (Deep Slate) — Primary body text

**Typography:**
- Heading: Inter, 26px (22px mobile), 700, line-height 1.3, letter-spacing -0.5px, color #C44536
- Body: Georgia, 17px (16px mobile), 400, line-height 1.6, color #3D405B
- Accent: Georgia, 13px, 400 italic, line-height 1.4, color #6B6B7B (science citations)
- Eyebrow: Inter, 14px, 700, letter-spacing 1.2px, text-transform UPPERCASE, color #3D405B

**Border Radius:** Cards: 16px, Buttons: 6px, Images: 0px (framed), Small: 8px
**Shadow:** Primary: 6px 6px 0 #3D405B (cards), Secondary: 3px 3px 0 #3D405B (sub-cards)
**Spacing:** Section gap: 32px, H-padding: 22px, Card padding: 22/22px, Element gap: 14px

## 4. Layout ASCII

```
┌─────────────────────────────────────────────┐
│ [LOGO BAR] BrightKidCo                      │  ← Band 1: Logo anchor
├─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─┤
│ ┌──────────────┐ ┌──────────────────────┐    │
│ │  SIGNAL PATH │ │  HOOK HEADLINE       │    │  ← Band 2: Split hero
│ │  SVG         │ │  (2-3 lines)         │    │  Left: brain/bladder
│ │  120×120px   │ │  Inter 26px Bold     │    │  Right: headline copy
│ │  [Terra Cotta]│ │  Terra Cotta         │    │
│ └──────────────┘ └──────────────────────┘    │
├─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─┤
│ ┌────────────────────────────────────────┐   │
│ │  "It's not that you didn't try..."    │   │  ← Band 3: Validation
│ │  Validation section — full-width       │   │  High whitespace
│ │  Georgia 17px body, generous leading   │   │  Deep Slate text
│ └────────────────────────────────────────┘   │
├─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─┤
│ ┌────────────────────────────────────────┐   │
│ │  ║ SCIENCE CALL-OUT BOX               │   │  ← Band 4: Science breakout
│ │  ║ Nicholson 2019 · Barmpagiannis     │   │  2px left border Terra Cotta
│ │  ║ INTEROCEPTION IS MEASURABLE         │   │  Warm Clay bg at 30%
│ │  ║ Citations visible in italic         │   │
│ └────────────────────────────────────────┘   │
├─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─┤
│  ┌──────────┐  ┌──────────────────────────┐ │  ← Band 5: Social Proof
│  │ PARENT   │  │  Quote 1: "He            │ │  SP-02 Expert Endorsement
│  │ QUOTE    │  │  communicates fine..."    │ │  Blockquote styling
│  │ BLOCK 1  │  │  Quote 2: "We tried..."  │ │  Terra Cotta left border
│  └──────────┘  └──────────────────────────┘ │
├─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─┤
│ ┌────────────────────────────────────────┐   │
│ │  PRODUCT TEASER (Medium)              │   │  ← Band 6: Product intro
│ │  ┌─────────┐ ┌────────────────────┐   │   │  Two-column: image + info
│ │  │ PRODUCT │ │ BSL Layer™         │   │   │  Restrained, teaser only
│ │  │  IMAGE  │ │ €34 starter pair   │   │   │
│ │  └─────────┘ └────────────────────┘   │   │
│ └────────────────────────────────────────┘   │
├─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─┤
│  ┌──────────────────────────────────────┐    │  ← Band 7: Timeline
│  │  TIMELINE: 2-4 weeks → 8-12 weeks   │    │  Realistic expectations
│  │  Georgia body, no bold emphasis       │    │
│  └──────────────────────────────────────┘    │
├─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─┤
│ ┌────────────────────────────────────────┐   │
│ │  GUARANTEE BADGE                      │   │  ← Band 8: Trust
│ │  60-Day · Your Judgment               │   │  Deep Teal border
│ └────────────────────────────────────────┘   │
├─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─┤
│ ┌────────────────────────────────────────┐   │
│ │  [PRIMARY CTA BUTTON]                 │   │  ← Band 9: Action
│ │  "Try Our 60-Day Approach"            │   │  Terra Cotta fill
│ │  Inter 16px Bold, white text           │   │  Centered
│ └────────────────────────────────────────┘   │
│     Secondary: "Or browse our sizing guide"  │  Text link below
├─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─┤
│ ┌────────────────────────────────────────┐   │
│ │  PERMISSION-NOT-TO-BUY                │   │  ← Band 10: Permission
│ │  "This email might not be for you..." │   │
│ └────────────────────────────────────────┘   │
├─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─┤
│  ≈/≈ Signal clarity: building...             │  ← Easter egg
│  Georgia 12px italic, #6B6B7B, right-aligned │
├─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─┤
│  [LENA SIGN-OFF] + [FOOTER]                  │  ← Band 11: Close
│  "Thanks for being here..."                  │
└─────────────────────────────────────────────┘
```

## 5. Section Specs

### Section 1 — Logo Bar (HERO-16 header)
- **Component:** Header (from primitives.jsx)
- **Copy:** Logo bar with BrightKidCo logo centered
- **Image:** /root/projects/brightkidco/raw/product-photos/lifestyle/toddler-backpack-moon-cloud-blue.png (hero position)
- **Alt text:** "Toddler with moon and cloud pattern backpack, wearing BrightKidCo training pants"
- **Dimensions:** Logo: 34px height; full-width header bar
- **Background:** #FDF8F4 (Warm White)
- **Padding:** 24px 20px 0
- **Typography:** N/A (logo image)
- **Notes:** Clean, minimal brand anchor. No tagline.

### Section 2 — Split Hero (HERO-16 — Mechanism Tease)
- **Component:** HERO-16 — Mechanism Tease (L4164)
- **Copy (verbatim from copy file):**
  - Headline: "Why every method failed, neurology, not effort"
  - Eyebrow: "Welcome"
- **Left column:** Signal Bridge SVG illustration (120×120px viewBox, scales to 160px max on desktop)
  - Format: Inline SVG
  - Colors: #C44536 (Terra Cotta) signal path on transparent
  - Line weights: 2.5px stroke, rounded caps
  - Animation: stroke-dashoffset 3s ease-in-out infinite alternate
  - Alt text: "Illustration showing the brain and bladder connected by a signal pathway, representing interoception"
- **Right column:** Headline text
- **Background:** #FDF8F4
- **Padding:** 34px 22px 0
- **Typography:** Inter 26px (22px mobile), 700, line-height 1.3, letter-spacing -0.5px, color #C44536
- **Notes:** Split-column on desktop, stacked on mobile (SVG above headline). No urgency cues.

### Section 3 — Validation Block (LETTER-03 — Letter + Pull-Quote)
- **Component:** LETTER-03 — Letter + Pull-Quote (L7826)
- **Eyebrow:** "The problem isn't effort"
- **Copy (verbatim):**
  - "You've tried the BCBA protocol, OT sensory work, social stories, sticker charts, timer sits, the special seat, the potty watch, the reward system with the preferred toy. You've read the books. You've read the blogs. You've asked in the Facebook groups. You've asked the BCBA. You've asked the pediatrician."
  - "Nothing changed."
  - "I know that sentence lands heavy. I want you to sit with it for a second, not because nothing changed, but because of what that actually means."
  - "It's not that you didn't try hard enough."
  - "I need you to hear that clearly, because I know what's running through your head right now. You're thinking: *If I had just been more consistent. If I had started earlier. If I had found the right method.*"
  - "That's the story every parent in your position tells themselves. And every single time, it's wrong."
  - "The real problem isn't your effort. It's not his compliance. It's not your consistency or your patience or your timing."
  - "It's that every method you tried, every single one, assumed your child can **feel** when they need to go. That's what I need you to understand."
- **Background:** #FDF8F4
- **Padding:** 4px 24px 28px
- **Typography:** Georgia 17px, 400, line-height 1.6, color #3D405B. Bold emphasis on **feel** inline.
- **Notes:** Full-width band. Generous leading for deep reading. No side elements.

### Section 4 — Science Call-Out (EDU-8 — Mechanism Diagram)
- **Component:** EDU-8 — Mechanism Diagram (L5414)
- **Copy (verbatim):**
  - "The 'I need to go' signal is a body signal — a neurological message from bladder to brain. For many autistic children, that message doesn't arrive in time, or at all."
  - "Research confirms this is **neurology, not training**. A landmark 49-study review confirmed body signal differences are a well-established feature of autism. Your child's brain and bladder are sending messages on different frequencies. Every method you tried assumed the signal was there. It wasn't. You weren't failing — you were working with the wrong map."
- **Citations:** Nicholson et al. 2019, Barmpagiannis & Baldimtsi 2025
- **Background:** #E8D5C4 (Warm Clay) at 30% opacity
- **Border:** 2px left border in #C44536 (Terra Cotta)
- **Padding:** 12px top/right/bottom, 40px left border
- **Typography:** Georgia 17px body, Georgia 13px italic for citation labels (#6B6B7B)
- **Notes:** Visual breakout section. Named citations visible — critical for L2's science-visual language.

### Section 5 — Social Proof (SP-02 — Expert Endorsement)
- **Component:** SP-02 — Expert Endorsement (L4805)
- **Copy (verbatim):**
  - "Here's what one L2 parent told us after finding this explanation:"
  - Quote 1: "He communicates fine about everything ELSE but cannot tell me he needs to pee. If I could just get him the signal, I know the rest would follow."
  - "That's not a parenting failure. That's a parent who has been fighting the wrong war with the right tools."
  - Quote 2: "We tried on and off for probably three years. Nothing worked until we understood it was a body signal problem, not a behavior problem."
  - "These aren't isolated stories. They're the pattern every L2 family experiences. The common thread is not the child's willingness, it's the missing signal."
- **Background:** #FDF8F4
- **Border:** 2px left border #C44536 on blockquotes
- **Padding:** 10px left padding on quotes
- **Typography:** Georgia 17px body, Georgia 13px italic for attribution (#6B6B7B)
- **Notes:** Block quote styling. BCBA-context quotes — method cycling, therapy integration.

### Section 6 — Product Intro (ProductShowcaseMedium)
- **Component:** ProductShowcaseMedium (L641)
- **Eyebrow:** "The body-signal approach"
- **Title:** "Body-Signal Learning Layer™"
- **Price:** €34 (starter pair)
- **CTA Button:** "See the pants →"
- **Copy (verbatim from product intro):**
  - "BrightKidCo exists because every method started from the wrong assumption: that your child can feel the body signal. We designed a system that starts from what's actually true."
  - "The body-signal underwear, a three-layer training underwear system, doesn't teach your child to sit on a potty. It teaches their **brain to feel the signal.**"
- **Image:** /root/projects/brightkidco/raw/product-photos/flat-lay/pocket-diaper-moon-cloud-blue.jpg
  - Alt: "BrightKidCo body-signal training pants in moon cloud blue, flat lay"
  - Dimensions: 140px wide side panel
- **Background:** #FFFFFF (card)
- **Border:** 2px solid #3D405B
- **Border Radius:** 20px
- **Shadow:** 4px 4px 0 #3D405B
- **Notes:** Two-column layout: image left (140px), content right. Restrained — teaser only, no product photography hero.

### Section 7 — Realistic Timeline
- **Component:** LETTER-03 continuation (inline text block)
- **Copy (verbatim):**
  - "**What this looks like in real life:**"
  - "For Level 2 children, where sensory processing differences are more pronounced and the interoception gap is wider, parents typically see the first signs of body awareness within 2-4 weeks of consistent use. That might be a pause. A look down. A single step toward the bathroom after an accident. That's not training. That's the brain receiving a signal it never got before."
  - "Full awareness development usually takes 8-12 weeks. Some children take longer. That's not failure, that's the range of normal for children whose nervous systems process signals differently."
  - "We're not selling overnight success. We're selling a signal your child's brain can actually receive."
- **Background:** #FDF8F4
- **Padding:** 22px 22px
- **Typography:** Georgia 17px body
- **Notes:** Inline text, no special card treatment. Honest timeline, no urgency.

### Section 8 — Guarantee (TRUST-1 — 60-Day Seal)
- **Component:** TRUST-1 — 60-Day Seal (L6385)
- **Copy (verbatim):**
  - "Try it for 60 days. By your judgment."
  - "Not by some arbitrary timeline. Not by a checklist. Your judgment about whether this approach fits your child, that's the only metric that matters."
  - "If it doesn't work for your family, full refund. No forms. No hoops. No 'did you try hard enough?' guilt. You decide."
- **Background:** #E8D5C4 (Warm Clay) at 30% opacity
- **Border:** 2px full border in #2C5F5A (Deep Teal)
- **Border Radius:** 8px
- **Padding:** 20px
- **Typography:** Inter 18px, 700, color #2C5F5A (headline); Georgia 17px body
- **Notes:** Trust anchor. Active removal of risk. "Your judgment" framing.

### Section 9 — CTA (CTA-3 — Curiosity Code)
- **Component:** CTA-3 — Curiosity Code (L6675)
- **Primary CTA Button:**
  - Text: "Try Our 60-Day Approach, Start with the 3+3 Bundle →"
  - Background: #C44536 (Terra Cotta)
  - Text color: #FFFFFF
  - Inter 16px, 700, letter-spacing 0.3px
  - Padding: 14px 36px vertical/horizontal
  - Border-radius: 6px
- **Secondary text link:** "Or browse our sizing guide to see if BKC fits your child"
  - Color: #2C5F5A (Deep Teal)
  - Border-bottom: 1.5px solid #2C5F5A
- **Fine print:** "That's $13.33 per pair with the bundle — less than half the single-pair price."
- **Background:** #FFFFFF (clean white sub-background)
- **Notes:** Centered. Low-pressure. No urgency cues. No pulsing.

### Section 10 — Permission-Not-to-Buy
- **Component:** LETTER-03 continuation
- **Copy (verbatim):**
  - "This email might not be for you right now. Maybe you're not ready to try something new. Maybe you need to sit with this information for a few days. Maybe thisn't where your child is yet."
  - "That's okay."
  - "This approach isn't going anywhere. It's not a limited-time offer. It's a different way of understanding what your child is experiencing, and that understanding doesn't expire."
  - "If today isn't the day, save this email. Come back when you're ready."
- **Next time teaser:** "Next time: Why the methods you tried couldn't work — and what actually can."
- **Background:** #FDF8F4
- **Typography:** Georgia 17px body, italic for next-time teaser
- **Notes:** Explicit permission paragraph. L2 requires this more than L1.

### Section 11 — Easter Egg
- **Copy:** ≈/≈ Signal clarity: building...
- **Typography:** Georgia 12px italic, color #6B6B7B, text-align right
- **Spacing:** 8px top margin from preceding content
- **Notes:** Positioned just above Lena sign-off. Rewards close readers. Reinforces signal metaphor non-preachily.

### Section 12 — Lena Sign-Off
- **Component:** Signoff (from primitives.jsx)
- **Copy (verbatim):**
  - "Thanks for being here. If you have a question, hit reply. You'll get me, not a template, not a bot. I read everything."
  - "Lena ——"
- **From:** Lena from BrightKidCo
- **Background:** #1F2D2F (B.ink)
- **Notes:** SHORT variant (E1). Warm, personal close.

### Section 13 — Footer
- **Component:** Footer (from primitives.jsx)
- **Copy (verbatim):**
  - "BrightKidCo LLC"
  - "1234 Commerce Street, Suite 200"
  - "Portland, OR 97201"
  - "United States"
  - "No longer want these emails? Unsubscribe or Manage Preferences"
  - "Questions about your order? Reply to this email, we respond within 24 hours."
  - "BrightKidCo does not provide medical advice. Our products are designed to support body signal awareness and are not a substitute for professional medical care, therapy, or behavioral intervention. Always consult your child's healthcare provider, BCBA, or occupational therapist for personalized guidance."
- **Background:** #FFFFFF
- **Typography:** Georgia 12px, 400, line-height 1.5, color #6B6B7B
- **Notes:** CAN-SPAM compliant. Unsubscribe + physical address + reply invitation.

## 6. Component Details

### HERO-16 — Mechanism Tease (L4164)
- **Props:** Split-column layout, headline text left, SVG illustration right
- **Variant:** Mechanism Tease — opens with scientific curiosity
- **Custom overrides:** SVG is the "Signal Bridge" illustration (brain/bladder pathway), not product imagery. Animation: stroke-dashoffset pulse. Colors: #C44536 signal path.

### LETTER-03 — Letter + Pull-Quote (L7826)
- **Props:** Full-width text block, generous leading, eyebrow header
- **Variant:** Long-form validation narrative
- **Custom overrides:** Eyebrow set to "The problem isn't effort" in Inter 14px uppercase. Body text uses Georgia serif (not system font). Bold inline emphasis on key mechanism phrases.

### SP-02 — Expert Endorsement (L4805)
- **Props:** Blockquote styling with left border
- **Variant:** BCBA-context parent quotes
- **Custom overrides:** 2px left border in #C44536 (Terra Cotta), italic body, 10px left padding. Attribution below in #6B6B7B at italic 13px. Two quotes stacked vertically.

### EDU-8 — Mechanism Diagram (L5414)
- **Props:** Science call-out box with citations
- **Variant:** Interoception explainer
- **Custom overrides:** 2px left border #C44536, Warm Clay background at 30% opacity. Named citations: Nicholson et al. 2019, Barmpagiannis & Baldimtsi 2025.

### ProductShowcaseMedium (L641)
- **Props:** Two-column card (image left, content right)
- **Variant:** Teaser product mention
- **Custom overrides:** Eyebrow "The body-signal approach". Price €34. CTA "See the pants →". Image from flat-lay product photo. Card: 2px solid #3D405B border, 20px radius, 4px shadow.

### CTA-3 — Curiosity Code (L6675)
- **Props:** Centered CTA with secondary text link
- **Variant:** Low-pressure, no urgency
- **Custom overrides:** Primary button Terra Cotta fill (#C44536), white text, Inter 16px 700. Secondary link in Deep Teal (#2C5F5A) with underline. Fine print about bundle pricing.

### TRUST-1 — 60-Day Seal (L6385)
- **Props:** Full-width trust badge
- **Variant:** Judgment-based guarantee
- **Custom overrides:** 2px full border in Deep Teal (#2C5F5A), 8px radius, 20px padding. Headline "Try it for 60 days. By your judgment." in Inter 18px 700 #2C5F5A.

### 20.2 — Dot Pattern Divider (L1876)
- **Props:** Decorative dot pattern
- **Variant:** Section separator
- **Custom overrides:** Color #F2EDE6 (Light Sand), full-width, 32px vertical spacing.

## 7. Image Briefs

### Image 1 — Hero Signal Bridge SVG
- **Path:** Inline SVG (no external file)
- **Alt text:** "Illustration showing the brain and bladder connected by a signal pathway, representing interoception, the body's ability to sense internal signals"
- **Recommended dimensions:** 120×120px viewBox, scales to fill left column (max 160px on desktop)
- **Cropping/focal point:** Center-aligned, transparent background
- **Fallback color:** #FDF8F4 (Warm White)
- **Notes:** This is a custom illustration, not a product photo. Used instead of product imagery because E1 is a teaser.

### Image 2 — Product Flat Lay
- **Path:** /root/projects/brightkidco/raw/product-photos/flat-lay/pocket-diaper-moon-cloud-blue.jpg
- **Alt text:** "BrightKidCo body-signal training pants in moon cloud blue, flat lay"
- **Recommended dimensions:** 140×220px (side panel in Medium showcase)
- **Cropping/focal point:** Center crop, product fully visible
- **Fallback color:** #FFFFFF
- **Notes:** Used in ProductShowcaseMedium side panel.

### Image 3 — Lifestyle Photo
- **Path:** /root/projects/brightkidco/raw/product-photos/lifestyle/toddler-backpack-moon-cloud-blue.png
- **Alt text:** "Toddler with moon and cloud pattern backpack, wearing BrightKidCo training pants"
- **Recommended dimensions:** Full-width hero (420px wide)
- **Cropping/focal point:** Child-centered, natural pose
- **Fallback color:** #FDF8F4
- **Notes:** Available for hero or secondary use. Not used as hero in this wireframe (Signal Bridge SVG takes hero position).

### Image 4 — Accessories
- **Path:** /root/projects/brightkidco/raw/product-photos/accessories/towel-set-llama-cactus.png
- **Alt text:** "BrightKidCo towel set with llama and cactus design"
- **Recommended dimensions:** 200×200px
- **Cropping/focal point:** Product centered
- **Fallback color:** #FFFFFF
- **Notes:** Available for secondary use or future emails. Not used in E1.

## 8. Rendering Notes

- **Email client considerations:** The Signal Bridge SVG uses stroke-dashoffset CSS animation which renders in Apple Mail and iOS Mail. Gmail and Outlook show static fallback. The illustration remains clear without animation.
- **Mobile responsive:** All split-column bands collapse to single-column stack below 600px. The Signal SVG moves above the headline text. ProductShowcaseMedium collapses to stacked layout. Headline scales from 26px to 22px. Body text scales from 17px to 16px.
- **Accessibility:** All images require alt text. SVG has descriptive alt text for screen readers. Blockquotes are semantically marked. Color contrast: #3D405B on #FDF8F4 = 7.2:1 ratio (passes WCAG AAA). #C44536 on #FDF8F4 = 4.8:1 (passes WCAG AA for large text).
- **Special instructions:** No gradients (L2 skepticism triggers on polish). Flat color blocks only. No pulsing CTA, no countdown timers, no spinning elements. All animations degrade gracefully — email works 100% without any motion. The "≈/≈ Signal clarity: building..." Easter egg is positioned just above the Lena sign-off at 12px italic right-aligned.
