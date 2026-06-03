# Layer 32: The Existing Email Prototype Patterns

**Extraction Date:** May 25, 2026
**Source Files:** 28 unique files across BKCO - EMAIL MARKETING-2 (primary) and BKCO - EMAIL MARKETING (reference)
**Scope:** All HTML email files, JSX components, JS content files, design tokens, and variant explorations

---

## 1. FILE INVENTORY

### BKCO - EMAIL MARKETING-2 (Latest Version)

**HTML Entry Points (6 files):**
- `autistic-welcome/V10 Final.html` — Story Book variant, standalone render
- `autistic-welcome/Welcome Flow - Autistic Parent.html` — Email 1 hi-fi with design canvas
- `autistic-welcome/variants/10 New UX Variants.html` — 10 new image-rich variants (mobile 420px)
- `autistic-welcome/variants/10 UX Variants.html` — 10 original UX variants with brief
- `welcome-flow/Welcome Flows - 10 Emails (standalone).html` — Bundled 10-email flow
- `welcome-flow/Welcome Flows - 10 Emails.html` — 10-email flow with design canvas

**JSX Components (19 files):**
- `autistic-welcome/email-1.jsx` — Email 1 full hi-fi (446 lines)
- `autistic-welcome/V10-final.jsx` — V10 Story Book variant (279 lines)
- `autistic-welcome/design-canvas.jsx` — Design canvas framework (622 lines)
- `autistic-welcome/variants/tokens.js` — Brand tokens + font system
- `autistic-welcome/variants/content.js` — Email 1 content data
- `autistic-welcome/variants/illustrations.jsx` — SVG illustration components
- `autistic-welcome/variants/new-v1-4.jsx` — New UX variants 1-4
- `autistic-welcome/variants/new-v5-7.jsx` — New UX variants 5-7
- `autistic-welcome/variants/new-v8-10.jsx` — New UX variants 8-10
- `autistic-welcome/variants/variants-1-3.jsx` — Original variants 1-3
- `autistic-welcome/variants/variants-4-6.jsx` — Original variants 4-6
- `autistic-welcome/variants/variants-7-10.jsx` — Original variants 7-10
- `welcome-flow/content.js` — Flow 1 content (Emails 2-6, 321 lines)
- `welcome-flow/content-flow2.js` — Flow 2 content (4 emails, 230 lines)
- `welcome-flow/primitives.jsx` — Shared UI primitives (275 lines)
- `welcome-flow/emails-2-3.jsx` — Email 2 + 3 components (302 lines)
- `welcome-flow/emails-4-5.jsx` — Email 4 + 5 components (296 lines)
- `welcome-flow/email-6.jsx` — Email 6 component (182 lines)
- `welcome-flow/flow2-emails.jsx` — Flow 2 all 4 emails (695 lines)
- `welcome-flow/app.jsx` — App entry point
- `welcome-flow/product-showcase.jsx` — Product showcase component

### Differences Between Versions
- `V10-final.jsx`: Only change is logo path — v1 hardcodes, v2 uses `window.__resources` fallback
- `primitives.jsx`: Minor refinements between versions
- `-2` adds standalone HTML bundler not present in original
- Content files (content.js, content-flow2.js) are identical between versions

---

## 2. ARCHITECTURE PATTERNS

### 2.1 Tech Stack
- **Framework:** React 18.3.1 (loaded via CDN, development build)
- **Transpiler:** Babel Standalone 7.29.0 (in-browser JSX compilation)
- **Fonts:** Google Fonts (Questrial, Fraunces, Caveat, Inter)
- **No build step:** All files are standalone HTML + JSX, no bundler, no npm

### 2.2 Component Architecture
```
HTML Entry Point
  └── Loads: tokens.js, content.js, primitives.jsx, email.jsx
  └── Renders: React root → DesignCanvas or EmailShell
      └── EmailShell (wrapper: preheader + content)
          └── Header → TitleBlock → Letter → [Content Sections] → CTAClose → Signoff → Footer
```

### 2.3 Design Canvas System
The prototypes use a custom `DesignCanvas` system for presenting multiple variants:
- `DesignCanvas` — top-level container with title/subtitle
- `DCSection` — groups related artboards
- `DCArtboard` — individual variant preview with label, width, height, background
- Enables side-by-side comparison of 10+ variants

### 2.4 Data-Driven Content
All email copy is separated from components into `content.js` / `content-flow2.js`:
- `window.FLOW1` = 6 emails (Welcome Flow for Autistic Parent)
- `window.FLOW2` = 4 emails (Discount Welcome Flow)
- `window.FLOW1_SHARED` = shared signoff, footer, out-line
- Components reference content via `const c = window.FLOW1.e2;`

---

## 3. DESIGN TOKENS

### 3.1 Brand Colors
```javascript
window.BRAND = {
  teal: "#2BAEB4",           // Primary brand color
  tealDeep: "#1E8A8F",       // Darker teal for labels
  green: "#5DD07A",          // Secondary brand color
  greenDeep: "#3BB35E",      // Darker green
  ink: "#1F2D2F",            // Near-black text
  soft: "#4A6568",           // Secondary text
  muted: "#8A9B9D",          // Tertiary/placeholder text
  cream: "#FBF7F1",          // Light background
  paper: "#FFFFFF",          // White background
  gradient: "linear-gradient(135deg, #2BAEB4 0%, #5DD07A 100%)",  // Brand gradient
};
```

### 3.2 Font System
```javascript
window.FONT = {
  main: "'Questrial', system-ui, sans-serif",      // Body text
  display: "'Fraunces', Georgia, serif",            // Serif accent headlines
};
```
Additional: `'Caveat', cursive` for handwritten elements (signatures, scrapbook variants)
Additional: `'Inter', system-ui, sans-serif` used in some variants as body font

### 3.3 Design DNA References
From the brief: "Wonderbly pastel + Begin Health color-accent + BREZ soft premium"
- Rounded, warm, kid-brand-adjacent without being cartoon
- Editorial quality — feels like a premium children's brand, not a discount DTC

---

## 4. FLOW 1: WELCOME FLOW — AUTOGRAPHIC PARENT (6 Emails)

### Email 1: "You Haven't Done Anything Wrong"
- **Subject:** "You haven't done anything wrong."
- **Preheader:** "You are not failing. This is a different path."
- **Timing:** Immediate (on subscribe)
- **Goal:** Reduce shame. Introduce the reframe. No pushing.
- **Structure:**
  - Preheader (muted, centered)
  - Logo header
  - Hero section (lilac gradient, floating decorative circles, "A letter · 1 of 4" badge)
  - H1: "You haven't done anything wrong." (Fraunces serif, 40px)
  - Subtext listing methods tried: "The charts. The timers. The rewards. The naked days. The ABA protocols. The waiting."
  - Body: Letter-style paragraphs (Inter font, soft color)
  - Creed block: 3 lines in serif italic — "You are not failing. Your child isn't broken. You just need a different path."
  - Insight block (mint bg): "It was never about motivation." — explains interoception gap
  - "A different path" section: 3 numbered steps with colored card backgrounds
    1. Body, not behaviour (green tint)
    2. Sensory-friendly by design (amber tint)
    3. Progress without meltdowns (teal tint)
  - Parent quote (serif italic, bordered): "After three years of trying everything..."
  - Soft CTA: "See how the method works →" (gradient pill button, teal→green)
  - Sign-off: "With you, The BrightKidCo team"
  - P.S.: "If you ever want to reply and tell us about your child — we read every message. Really."
  - Footer: "BrightKidCo · A different path to dry days"

### Email 2: "The Body-Signal Your Child Might Not Feel Yet"
- **Subject:** "The body-signal your child might not feel yet"
- **Preheader:** "The word nobody explained to you yet."
- **Timing:** +24 hours
- **Theme:** The Mechanism — interoception explained
- **Structure:**
  - Hero: diagram-style image placeholder
  - Title: "Why rewards / couldn't fix this."
  - Letter opening (warm bg)
  - Definition block (mint bg): "Interoception." — 5 paragraphs explaining the concept
  - Reframe: "You can't reward a signal that isn't reaching the brain yet."
    - 4 sticker-style reasons (tilted, colored cards with ink borders)
  - Comparison card: Pull-ups (neg) vs Regular underwear (neg) vs Body-Signal Layer (pos)
  - OT expert quote (white card with ink border + shadow)
  - Soft product placement
  - CTA: "See the pants" (dark ink bg, lime-green button)
  - Sign-off + footer

### Email 3: "Timers. Rewards. Naked Days. Here's Why None of It Worked."
- **Subject:** "Timers. Rewards. Naked days. Here's why none of it worked."
- **Preheader:** "It wasn't the method. It was the map."
- **Timing:** +2 days
- **Theme:** Absolution — method walkthrough
- **Structure:**
  - Hero: metaphor image (old map/book)
  - Title: "It wasn't the method. / It was the map."
  - Letter: "Your OT probably meant well..."
  - 4 method cards (each with image placeholder, promise, reality):
    1. The Timer Method
    2. Rewards & Charts
    3. Naked Training
    4. Pull-ups
  - Reframe: "None of this is your fault."
  - Parent story quote (yellow sticker card, tilted)
  - Soft product placement
  - CTA + sign-off + footer

### Email 4: "This Is Where We Show You the Pants"
- **Subject:** "This is where we show you the pants."
- **Preheader:** "The 3-layer thing, without the jargon."
- **Timing:** +4 days
- **Theme:** The Product — soft reveal
- **Structure:**
  - Hero: product reveal image
  - Title: "What's actually / inside."
  - Letter: "Four emails in and we still haven't shown you the product."
  - Product intro: "Three layers. One purpose."
  - Cross-section diagram placeholder
  - 3 layer cards (each with macro image, name, what, does):
    1. Top layer — Sensation pass-through
    2. Middle layer — The Learning Layer
    3. Bottom layer — Calm containment
  - "What it feels like on your child" (checkmark list)
  - "What it means for you" (checkmark list)
  - Sensory-specific testimonial (yellow sticker)
  - 3 objection Q&As
  - Full product showcase with price
  - CTA: "See the pants" + sign-off + footer

### Email 5: "Sarah's Son Wore Nothing But Pull-Ups for 4 Years"
- **Subject:** "Sarah's son wore nothing but pull-ups for 4 years."
- **Preheader:** "One real story — no marketing."
- **Timing:** +6 days
- **Theme:** One Story — deep narrative proof
- **Structure:**
  - Hero: full-width portrait (Sarah + son)
  - Title: "Sarah's son wore pull-ups / for four years."
  - Intro: "Meet Sarah."
  - 4 chapters (each with image, label, title, body):
    1. The starting point: "I cried in the bathroom more than once."
    2. The low point: "The night I sat on the bathroom floor."
    3. The first two weeks: "It didn't click immediately. That was okay."
    4. Where we are now: "Better. Calmer. Still progressing."
  - Pull-quote (centered, large serif): "He has a relationship with his body now."
  - "Why we chose this story" explanation
  - Inline product card: "The method Sarah used"
  - CTA: "Try the pants Sarah used" + sign-off + footer

### Email 6: "A Small Invitation (No Pressure)"
- **Subject:** "A small invitation (no pressure)."
- **Preheader:** "When you're ready. No pressure."
- **Timing:** +8 days
- **Theme:** The Invitation — 60-Day Calm Progress Guarantee
- **Structure:**
  - Title: "When you're / ready."
  - Letter: "We've sent you five emails. You've read them when you had space."
  - Guarantee: "The 60-Day Calm Progress Guarantee."
    - 60 full days (not 30)
    - Full refund, no questions
    - Regressions are part of the process
  - "What's covered" list (4 scenarios)
  - "What's NOT covered" (no hidden fees, no final sale, no prove-you-tried)
  - Starter pair: "Start with one pair." — 10% off first order
  - Closing: "Whenever you're ready — today, next month, next year — the guarantee is here."
  - CTA: "Start with one pair" + sign-off + footer

---

## 5. FLOW 2: DISCOUNT WELCOME FLOW (4 Emails)

### Email 1: Code Delivery
- **Subject options:** "Your code is here: BRIGHT10" / "As promised — BRIGHT10 inside" / "Your 10% code (and a small note)"
- **Timing:** Immediate
- **Code:** BRIGHT10 (valid 7 days)
- **Structure:** Hero badge "Welcome · 01 of 04" → code delivery → quick differentiation paragraph → "What comes next" roadmap (36h, 4 days, 1 week) → CTA "Shop with BRIGHT10"

### Email 2: Mechanism
- **Subject options:** "Before you use your code — one thing" / "The part most potty training advice skips" / "Why rewards couldn't fix what you're seeing"
- **Timing:** +36 hours
- **Structure:** "Before you use BRIGHT10" → interoception definition → 3 comparison cards (Pull-ups/Regular/Body-Signal) → OT quote → code reminder → CTA

### Email 3: Parent Story
- **Subject options:** "One story, from one parent" / "After three years of trying everything" / "A mother whose situation might feel familiar"
- **Timing:** +3 days
- **Structure:** Sarah + Marcus story (4 chapters: timer phase, reward chart, low point, what changed) → pull-quote → promise badges → code reminder → CTA "Start with what worked for Sarah"

### Email 4: Guarantee Closer
- **Subject options:** "Protected for 60 days — even if your code expires today" / "Your code expires tomorrow — here's what matters more" / "When you're ready — the 60-day promise is the real reason"
- **Timing:** +2 days (code expiring)
- **Structure:** "Protected, even if you wait" → 60-Day Calm-Progress Guarantee™ → covered/not covered lists → counter-testimonial (return story — Priya K.) → code expiry reminder → reassure guarantee applies without code → CTA "Start protected"

---

## 6. DESIGN PATTERNS

### 6.1 Section Backgrounds
Every email uses alternating background colors to create visual rhythm:
- Hero: `#FFFBF0` (warm white) or `#FFF6E2` (warm cream)
- Letter: `#FFF6E2` (warm cream)
- Content sections: `#EAF6F2` (mint), `#F0EDF8` (lilac), `#FAF7F0` (neutral)
- CTA: `#1F2D2F` (dark ink)
- Transitions: gradient bands between sections (`GradientBand` component)

### 6.2 Card Pattern
Cards are the primary content container:
- White background
- 2px solid ink border (`#1F2D2F`)
- `boxShadow: 3px 3px 0 #1F2D2F` (hard shadow, no blur)
- Border radius: 16-18px
- Tinted header stripe (colored top bar with title)
- Content area with `#FFFDF6` background

### 6.3 Sticker Pattern
Used for emphasis, quotes, and badges:
- Solid background (yellow `#FFD866`, teal, green, coral `#FFB5A0`)
- 2px solid ink border
- Hard shadow: `3px 3px 0 #1F2D2F`
- Slight rotation: `rotate(-0.3deg)` to `rotate(-1.5deg)`
- Border radius: 14-20px
- Font weight: 700

### 6.4 Typography Scale
- Preheader: 11px, uppercase, letter-spacing 0.3-2px, muted color
- Eyebrow labels: 10.5-12px, uppercase, letter-spacing 1.5-2px, brand color, weight 700
- H1: 40px, weight 700, letter-spacing -0.8, line-height 1.0-1.12
- H2: 24-30px, weight 700, letter-spacing -0.4
- Body: 14.5-16px, line-height 1.55-1.7, soft color
- Quote: 16-22px, italic, serif font
- Fine print: 11.5-12.5px, muted color

### 6.5 CTA Pattern
- Dark ink background section
- Intro text in muted light color
- Pill button: `borderRadius: 999`, lime-green `#D8F57C` background, ink text
- Font: 15-15.5px, weight 700
- Arrow suffix: `→`
- Fine print below in muted color

### 6.6 Gradient Text
Used for accent words in headlines:
```javascript
background: "linear-gradient(135deg, #2BAEB4 0%, #5DD07A 100%)",
WebkitBackgroundClip: "text",
WebkitTextFillColor: "transparent",
```

### 6.7 Image Placeholder Pattern
All prototypes use dashed-border image frames with descriptions:
- White background, 2px dashed teal border
- Corner marks (SVG L-shapes)
- Centered label (uppercase, teal) + sublabel (muted)
- Describes what the final image should be: subject, mood, ratio

---

## 7. COPY PATTERNS

### 7.1 Voice & Tone
- **Register:** Peer-to-peer mother, not clinical, not marketing
- **Forbidden words:** "just", urgency language, speed claims, generic testimonials
- **Sentence structure:** Short, direct, conversational. Many one-sentence paragraphs.
- **Emotional arc:** Shame reduction → understanding → hope → gentle action
- **Sign-off:** "Lena Bauer, Founder · BrightKidCo · Mom of two"

### 7.2 Letter Opening Pattern
Every email starts with a personal greeting:
- E1: "Hi, and welcome."
- E2: "Hi again."
- E3: "Let's go back."
- E4: "Okay — here it is."
- E5: "Meet Sarah."
- E6: "We've sent you five emails."

### 7.3 Subject Line Pattern
- No caps lock
- No emoji
- Lowercase, conversational
- Specific (names methods, names the child)
- A/B test ready (3 options per email in Flow 2)

### 7.4 CTA Language
- Always gentle: "See the pants", "See how the method works"
- Never pushy: "No rush. No pressure."
- Permission-giving: "When you're ready. Not before."
- Flow 2 uses urgency sparingly: "2 days left" but paired with "But the guarantee applies no matter when you buy."

### 7.5 Testimonial Pattern
- Always attributed: "Parent of 5-year-old · ASD, sensory processing sensitivity"
- Never generic: specific child age, specific diagnosis
- Honest framing: "She's our most common one" (not "best case")
- Return stories included: "Priya K. · returned at week 8" — builds trust

### 7.6 Reframe Pattern
Every email reframes the problem:
- E1: "It was never about motivation."
- E2: "You can't reward a signal that isn't reaching the brain yet."
- E3: "None of this is your fault."
- E4: "It's structurally the opposite of a pull-up."
- E5: "He has a relationship with his body now."
- E6: "The guarantee is the real reason."

---

## 8. UX VARIANT EXPLORATIONS

### 8.1 Original 10 Variants (same copy, different UX)
1. **V1 · Storybook** — Illustrative, paper feel, yellow accents, kid-brand warmth
2. **V2 · Editorial Magazine** — Serif drop-cap, newspaper dek, premium editorial
3. **V3 · Playful Cards** — Polaroids, stickers, slight rotations, expressive
4. **V4 · Soft Minimal** — White canvas, gradient headlines, generous whitespace
5. **V5 · Warm Beige** — Neutral beige, italic serif accents, adult calm
6. **V6 · Playful Duotone** — Bold color blocks, Surreal-inspired, alternating backgrounds
7. **V7 · Conversational Chat** — iMessage-style bubbles, conversational pace
8. **V8 · Scrapbook / Journal** — Handwritten Caveat font, tape, tilted cards, intimate
9. **V9 · Clinical Premium** — BREZ-like, soft medical, trust-building, modular
10. **V10 · Bold Monochrome** — Dark mode, huge type, gradient accents, statement-like

### 8.2 New 10 Variants (image-rich, mobile 420px)
Categorized into 4 families:

**Playful / Sticker-forward:**
- V1 · Sticker Studio
- V4 · Scrapbook Journal
- V10 · Story Book

**Bold / High-impact:**
- V3 · Duotone Blocks
- V6 · Dark Playful
- V9 · Poster Bold

**Mix / Editorial:**
- V2 · Magazine Mod
- V7 · Editorial Mix

**Premium / Hi-end:**
- V5 · Hero Stack
- V8 · Soft Premium

---

## 9. TECHNICAL OBSERVATIONS

### 9.1 React Architecture
- Components are pure functions (no hooks, no state)
- All data flows from `window.FLOW1` / `window.FLOW2` globals
- Shared primitives extracted into `primitives.jsx`
- Design canvas system enables rapid variant comparison

### 9.2 Responsive Approach
- Fixed widths: 420px (mobile), 520-640px (desktop)
- No media queries — designed for single viewport
- Mobile-first: 420px is the primary design target

### 9.3 Image Strategy
- All images are placeholders with detailed descriptions
- Descriptions specify: subject, mood, lighting, composition, aspect ratio
- Ready for photographer/designer handoff
- SVG placeholders show corner marks + camera icon

### 9.4 Email Client Compatibility Concerns
- Uses React + Babel in-browser (NOT email-client compatible)
- These are DESIGN PROTOTYPES, not production HTML emails
- Production would need table-based HTML, inline CSS
- Current prototypes inform the design decisions, not the code

---

## 10. WHAT WORKS

1. **Emotional sequencing:** Shame reduction → understanding → hope → action. Each email earns the right to the next.
2. **Mechanism-first approach:** Explains WHY before showing WHAT. Builds conviction before asking for purchase.
3. **Permission-giving language:** "No rush." "When you're ready." "Read it when you have a quiet moment." Reduces pressure.
4. **Specific testimonials:** Named children, specific diagnoses, specific timelines. Feels real.
5. **Return stories included:** "Priya K. · returned at week 8." Makes the guarantee credible.
6. **Visual rhythm:** Alternating backgrounds, gradient transitions, sticker accents create visual interest without chaos.
7. **Consistent sign-off:** Lena's personal sign-off with handwritten signature creates human connection.
8. **Objection handling:** Built into Email 4 naturally, not as a separate sales page.

---

## 11. WHAT DOESN'T WORK / GAPS

1. **No production-ready HTML:** All prototypes are React/JSX. Need table-based HTML for Klaviyo.
2. **Placeholder images only:** No actual photography or illustration assets.
3. **No dark mode consideration:** Single light-mode design only.
4. **No accessibility annotations:** No alt text strategy, no ARIA labels, no contrast ratio verification.
5. **Currency inconsistency:** Some emails use € (European), plan specifies $ (US market at 65%).
6. **No mobile-specific testing:** Fixed widths don't account for real email client rendering.
7. **Limited A/B test framework:** Flow 2 has 3 subject options per email, Flow 1 has 1 per email.
8. **No preheader optimization:** Preheaders are hardcoded, not dynamically personalized.

---

## 12. CROSS-REFERENCE MAP

| Layer | Connection |
|-------|-----------|
| Layer 3 (Emotional Phases) | Flow 1 targets Phase 2-3 moms. Tone shifts from hope (E1-E2) to realism (E3-E4) to gentle action (E5-E6). |
| Layer 4 (Avatar Levels) | Current prototypes are General Fallback style. Level-specific variants not yet built. |
| Layer 9 (Lena's Voice) | Sign-off pattern established. "Lena Bauer, Founder · Mom of two." Letter-like register throughout. |
| Layer 29 (Visual Calibration) | Design DNA: "Wonderbly pastel + Begin Health color-accent + BREZ soft premium." |
| Layer 33 (Format Requirements) | Subject lines, preheaders, section structure all documented. Ready for format spec extraction. |
| Layer 38 (Brand Constants) | Colors, fonts, URLs, pricing need verification against live site. |

---

*End of Layer 32 — Existing Email Prototype Patterns extraction.*
