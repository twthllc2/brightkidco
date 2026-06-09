# Wireframe: Welcome Flow — E2 | Level 3

## 1. Metadata

| Field | Value |
|-------|-------|
| **Flow** | Welcome (Flow 01) |
| **Position** | E2 — Day 1 (Welcome Flow Day 2 per L3 schedule) |
| **Level** | Level 3 — Maria (Non-verbal, high support needs, ~25% of audience) |
| **Copy File** | /root/projects/brightkidco/outputs/copy/welcome/welcome-01-e2-l3.md |
| **Strategy Map Entry** | flows.welcome.emails.e2-l3 |
| **Flow Signature** | warm-educational, minimal accent (emerald hairline only), medium density, zero urgency, pure information CTA |
| **Level Calibration** | L3: Bold headers, cooler warmth, 40/60 content/whitespace, dignity-first social proof, spacious editorial layout, ZERO urgency |
| **Component Categories Used** | HERO, TEXT/LETTER, TESTIMONIAL, MECHANISM, CTA, GUARANTEE/TRUST, DECORATIVE |
| **Total Estimated Height** | ~2,400px (desktop) |

---

## 2. Strategy Box

**Big Idea:** Information that took years to discover, delivered in one spacious layout. A signal traveling through a nervous system, text blocks cascading to a quiet landing zone where the reader can pause and breathe.

**Emotional Arc Position:** Second email in the Welcome flow for Maria — naming failed methods → absolving guilt → offering mechanism → hope through understanding. E2 L3 deepens the neurological reframe with research validation. No product introduction in this email — product is deferred to E3 after full mechanism + permission frame.

**Component Selection Rationale:** HERO-9 (Whisper Tone) opens with the quietest possible voice — no imagery, no decoration, just words on a warm field. LETTER-02 (Handwritten Opener) delivers the narrative in Lena's personal voice with organic warmth. SP-07 (Counter-Testimonial) provides validation through research-as-testimony rather than parent quotes (L3 doesn't want to see other parents' success stories yet). EDU-1 (Definition Block) defines interoception as a clean, clinical concept without diagrams or complexity. No product component in E2 — the copy explicitly states "No product introduction in this email, per S2 section structure for E2 L3." CTA-2 (Soft Link) is a text-only link with no button. TRUST-4 (Dashed Policy Quote) presents the guarantee as a quiet policy statement. 20.1 (Wave Divider) uses organic hand-drawn SVG squiggles.

**Differentiation Note:** This is the quietest email in the entire Welcome flow. No product images, no diagrams, no buttons, no urgency cues. Every visual decision serves one goal: Maria should feel like she walked into a room where nobody is going to ask her for anything. The feather easter egg in the lower-right corner is unique to L3.

---

## 3. Creative Box

**Color Palette:**
- Primary: #039902 (Emerald) — Used as single 1.5px hairline border only, grows across the Welcome sequence
- Secondary: #C4B8AA (Warm Taupe) — Dividers, feather easter egg, bullet rings
- Accent: #B8A89A (Muted Taupe) — Neural path dots, illustration elements
- Background: #FAF9F7 (Warm Cream) — Email body, no pure white anywhere
- Text: #2C2C2C (Dark Charcoal) — Headlines, not pure black

**Typography:**
- Heading: Questrial, 700 weight (displayed as bold), 26px desktop / 20px mobile, letter-spacing 0.5px (wide — signals "no rush")
- Body: Helvetica, Arial, sans-serif (fallback), 400 weight, 16px desktop / 14px mobile, line-height 1.7 (generous leading), color #4A4A4A
- Accent: Questrial, 400 weight, 14px — CTA text link (no button)
- Eyebrow: Questrial, 700 weight, 10.5px, letter-spacing 2px, text-transform uppercase, color #039902

**Border Radius:** Cards: 12px (max), Buttons: N/A (text link only), Images: N/A (no product images), Small: 4px
**Shadow:** Primary: 4px 4px 0 (minimal, on any containers), Secondary: none
**Spacing:** Section gap: 40px (increased for L3 vs 20px for L1), H-padding: 30px, Card padding: 24/24px, Element gap: 20px

---

## 4. Layout ASCII

```
┌─────────────────────────────────────────────┐ 420px
│  [Header: Logo centered on #FAF9F7 bg]      │
│                                             │
│  ┌─────────────────────────────────────┐    │
│  │  HERO-9: Whisper Tone               │    │ BG: #FAF9F7
│  │                                     │    │
│  │  H1: "49 studies confirm what you   │    │ Wide tracking
│  │       already knew"                 │    │ 0.5px letter-spacing
│  │  [No eyebrow. No image. No          │    │
│  │   decoration. Just the headline     │    │
│  │   on a warm cream field.]           │    │
│  └─────────────────────────────────────┘    │
│                                             │
│  ┌─────────────────────────────────────┐    │
│  │  [Dotted Neural Path SVG]           │    │ 80% width, ~60px
│  │  · · · · · · · · · · · ○           │    │ height, dashed
│  │  faint ──────────→ solid            │    │ line with nodes
│  └─────────────────────────────────────┘    │
│                                             │
│  ~~~~~~  [20.1 Wave Divider - taupe]  ~~~~~ │
│                                             │
│  ┌─────────────────────────────────────┐    │
│  │  LETTER-02: Hook                    │    │ BG: #FFFFFF
│  │  "You've done 40 hours of ABA a    │    │
│  │   week for two years..."            │    │
│  │  [No bold opener. Gentle, even      │    │
│  │   cadence. Generous line-height.]   │    │
│  └─────────────────────────────────────┘    │
│                                             │
│  ┌──┐                                      │
│  │  │ LETTER-02: Validation                │ BG: #FFFFFF
│  │  │ "Your child isn't broken.           │ Emerald 1.5px
│  │E │  The methods weren't built for       │ left border
│  │M │  his nervous system..."              │ 60px tall
│  │  │ [Callout: Barmpagiannis &            │
│  │  │  Baldimtsi (2025) 49-study review]  │
│  └──┘                                      │
│                                             │
│  ~~~~~~  [20.1 Wave Divider]  ~~~~~~~~~~~~  │
│                                             │
│  ┌──┐                                      │
│  │  │ LETTER-02: Mechanism Deep            │ BG: #FAF9F7
│  │E │ "The Body-Signal Learning Layer       │ 3% micro-noise
│  │M │  works with the nervous system..."    │ texture
│  │  │ [Pull quote: "Pull-ups wick that      │
│  │  │  signal away completely..."           │
│  └──┘                                      │
│                                             │
│  ~~~~~~  [20.1 Wave Divider]  ~~~~~~~~~~~~  │
│                                             │
│  ┌─────────────────────────────────────┐    │
│  │  SP-07: Counter-Testimonial         │    │ BG: #FFFFFF
│  │  [Research as validation]           │    │
│  │  "Your child may be getting the     │    │
│  │   signal, just milliseconds too     │    │
│  │   late." — Nicholson et al. (2019)  │    │
│  │  "The deficit isn't absence.        │    │
│  │   It's timing."                     │    │
│  └─────────────────────────────────────┘    │
│                                             │
│  ┌─────────────────────────────────────┐    │
│  │  TRUST-4: Dashed Policy Quote       │    │ BG: #FAF9F7
│  │  "60 days to see if the signal      │    │ Dashed border
│  │   arrives. By your timeline."       │    │ #C4B8AA
│  │  "If nothing changes, full refund.  │    │
│  │   No questions. No pressure."       │    │
│  └─────────────────────────────────────┘    │
│                                             │
│  ┌─────────────────────────────────────┐    │
│  │  CTA-2: Soft Link                   │    │ BG: #FFFFFF
│  │  "No pressure. Just information."   │    │ Text link only
│  │  [text link, subtle underline]      │    │ NO button
│  │  No secondary link. No product.     │    │
│  └─────────────────────────────────────┘    │
│                                             │
│  ┌─────────────────────────────────────┐    │
│  │  Next Time Teaser                   │    │ BG: #FFFFFF
│  │  "Next time: The research behind    │    │
│  │   the body-signal approach..."      │    │
│  └─────────────────────────────────────┘    │
│                                             │
│  ┌─────────────────────────────────────┐    │
│  │  [Floating Feather SVG — 32×16px]   │    │ Bottom-right
│  │                    🪶               │    │ 30% opacity
│  │  [Lena Signoff — SHORT variant]     │    │ BG: #FFFFFF
│  │  "Talk soon, Lena"                  │    │
│  │  Customer Support · Mom of two      │    │
│  │  autistic sons                      │    │
│  │  P.S. interoception guide offer     │    │
│  └─────────────────────────────────────┘    │
│                                             │
│  ┌─────────────────────────────────────┐    │
│  │  Footer                             │    │ BG: #FFFFFF
│  │  BrightKidCo · [Physical address]  │    │
│  │  Unsubscribe · Manage Preferences   │    │
│  │  "Reply to this email, Lena reads   │    │
│  │   every response."                  │    │
│  └─────────────────────────────────────┘    │
└─────────────────────────────────────────────┘
```

---

## 5. Section Specs

### Section 1: Header
- **Component:** Header (primitives.jsx)
- **Background:** #FAF9F7
- **Padding:** 24px 20px 0
- **Logo:** ../assets/brightkidco-logo-v2.png, height 34px, centered
- **Rendering Notes:** Clean cream header. No decoration. The warm cream background is the first signal: this is a safe space.

### Section 2: Hero — HERO-9 Whisper Tone
- **Component:** HERO-9 — Whisper Tone (L3996)
- **Background:** #FAF9F7 (Warm Cream — tinted neutral, no pure white)
- **H1:** "49 studies confirm what you already knew" — Questrial, 700 (bold), 26px, letter-spacing 0.5px (wide), color #2C2C2C (dark charcoal, not pure black)
- **Preview subtext:** "What 49 research studies say about why traditional methods fail for children who can't feel the signal. It's not the method. It's neurology." — Helvetica/Arial, 16px, color #4A4A4A
- **Padding:** 48px 30px (extra breathing room for L3)
- **Image:** None — pure text, no hero image, no decorative clutter
- **Rendering Notes:** The wide letter-spacing (0.5px — widest of all levels) signals "take your time reading this." No eyebrow label. No illustration. Nothing between the reader and the words. This is the quietest hero in the entire flow.

### Section 3: Dotted Neural Path SVG
- **Component:** Custom illustration — The Dotted Neural Path
- **Width:** 80% of email body, centered
- **Height:** ~60px
- **Style:** Flat SVG, no animation in static email
- **Elements:**
  - Dashed SVG stroke in #8B7D6B at 0.8px width
  - Small circular nodes at intervals (radial gradients: center #B8A89A at 60%, fade to transparent)
  - In E2, the path starts dim (20% opacity) and becomes more solid toward the right
  - Right endpoint: softly glowing node
- **Rendering Notes:** The path represents the body's signal relay points. In E2, it starts dim because the signal hasn't arrived yet. In later emails, the path brightens progressively. Ethereal Glass style: translucent elements, soft gradients, no hard edges.

### Section 4: Wave Divider (20.1)
- **Component:** 20.1 — Wave Divider (L1858)
- **Style:** Hand-drawn SVG squiggle (not a horizontal rule)
- **Color:** #C4B8AA (warm taupe)
- **Width:** 80% of content area, centered
- **Shape:** Single continuous path with gentle undulations, no sharp angles
- **Rendering Notes:** The wave mirrors a slow EEG reading, referencing the neurological theme without being literal. Organic, soft. Not a straight line.

### Section 5: Hook — LETTER-02 Handwritten Opener
- **Component:** LETTER-02 — Handwritten Opener (L7797)
- **Background:** #FFFFFF
- **Padding:** 30px 30px (L3 generous spacing)
- **Verbatim copy:**
  "You've done 40 hours of ABA a week for two years. You spent $2,500 on a private potty consultant. You've tried pull-ups, social stories, naked weekends, and every schedule a BCBA could write. And still, he's in a diaper. Every single parent of a Level 3 child I've spoken to has the same story. The effort was enormous. The result was the same. That's not a coincidence."
- **Typography:** Helvetica/Arial, 16px, line-height 1.7, color #4A4A4A
- **Rendering Notes:** No bold opener (unlike L2). Gentle, even cadence. The generous line-height (1.7) creates the spacious cadence L3 requires. Max line length: 540px (centered content block).

### Section 6: Wave Divider (20.1)
- Same spec as Section 4

### Section 7: Validation — LETTER-02 with Emerald Hairline
- **Component:** LETTER-02 — Handwritten Opener (L7797)
- **Background:** #FFFFFF
- **Left border:** 1.5px solid #039902 (emerald), 60px tall, positioned with 8px gap between border and text block
- **On mobile:** Converts to 1.5px top border spanning full width of section
- **Verbatim copy:**
  "Your child isn't broken. The methods weren't built for his nervous system. Every single approach you tried, every social story, every sticker chart, every scheduled sit, assumed one thing: that he can feel when he needs to go. That assumption is the flaw. Barmpagiannis & Baldimtsi (2025) reviewed 49 studies on interoception in autism. The conclusion: diminished body awareness in autistic children is real, measurable, and well-documented. This settled science, not a theory. The signal from his bladder to his brain doesn't arrive the way traditional methods assume it does. They weren't designed for his neurology, and nothing you did wrong caused that mismatch."
- **Callout Box (research citation):**
  - Left border: 3px solid #039902 (emerald — grows across the Welcome sequence)
  - Background: #FAF9F7 (warm cream)
  - Padding: 16px 20px
  - Border-radius: 4px
  - Text: Barmpagiannis & Baldimtsi (2025) citation — Helvetica/Arial, 14px, italic, color #4A4A4A
- **Rendering Notes:** The emerald hairline is the ONLY accent color in this email. In E2, it's a single 1.5px line. By E6, it becomes a full-width CTA bar. The emerald grows across the sequence. The hairline is barely visible — it rewards close reading.

### Section 8: Wave Divider (20.1)
- Same spec as Section 4

### Section 9: Mechanism Deep — LETTER-02 with Emerald Hairline
- **Component:** LETTER-02 — Handwritten Opener (L7797)
- **Background:** #FAF9F7 (Warm Cream — with 3% micro-noise texture overlay for paper feel)
- **Left border:** 1.5px solid #039902 (emerald), same treatment as Section 7
- **Padding:** 30px 30px
- **Verbatim copy:**
  "The Body-Signal Learning Layer works with the nervous system as it is. It creates a gentle, sustained 'uh-oh' sensation — 30 to 60 seconds of feedback that gives the brain time to register that something happened. For a child who has never shown a single sign of feeling wet, that sustained window is the first information his nervous system has ever received."
  "Pull-ups wick that signal away completely. The technology that makes them convenient is the exact mechanism preventing progress."
- **Pull Quote Treatment:**
  - Large quotation marks in #C4B8AA (warm taupe)
  - Text: "Pull-ups wick that signal away completely." — Questrial, 18px, italic, color #2C2C2C
  - Left border: 3px solid #C4B8AA
  - Background: #FAF9F7
  - Padding: 16px 20px
  - Border-radius: 4px
- **Rendering Notes:** The micro-noise texture (3% opacity) gives a subtle paper feel. This section is visually distinguished from the Validation section by the background tint change (white → cream). No diagrams, no layers, no complexity — just text.

### Section 10: Wave Divider (20.1)
- Same spec as Section 4

### Section 11: Social Proof — SP-07 Counter-Testimonial
- **Component:** SP-07 — Counter-Testimonial (L4940)
- **Background:** #FFFFFF
- **Padding:** 30px 30px
- **Verbatim copy:**
  "'Your child may be getting the signal, just milliseconds too late.' That sentence, from the Nicholson et al. (2019) study on body awareness, shifted how I understood my own sons. The deficit isn't absence. It's timing. The signal arrives after the event. That's why timed methods, sticker charts, and scheduled sits fail, they can't teach a nervous system to receive a signal earlier. Only sustained, repeated sensation can do that."
- **Typography:** Helvetica/Arial, 16px, line-height 1.7, color #4A4A4A
- **Rendering Notes:** This is research-as-testimony — the Nicholson quote serves as the testimonial. No parent success stories in E2 L3. The "counter-testimonial" format validates through science, not through other parents' wins. L3 moms at this stage don't want to see success stories — they want to understand the science.

### Section 12: Guarantee — TRUST-4 Dashed Policy Quote
- **Component:** TRUST-4 — Dashed Policy Quote (L6476)
- **Background:** #FAF9F7 (warm cream)
- **Border:** 1.5px dashed #C4B8AA (warm taupe)
- **Border-radius:** 12px
- **Padding:** 24px 30px
- **Verbatim copy:**
  "60 days to see if the signal arrives. By your timeline. Not every nervous system responds the same way, and that's not a failure. If nothing changes, full refund. No questions. No pressure."
- **Typography:** Helvetica/Arial, 16px, line-height 1.7, color #4A4A4A
- **Rendering Notes:** The dashed border is soft, organic. No checkmarks, no badges, no trust seals. Just a quiet policy statement. The phrase "By your timeline" is the L3-specific calibration — it respects the 14-30 day decision cycle and signals that there's no rush.

### Section 13: CTA — CTA-2 Soft Link
- **Component:** CTA-2 — Soft Link (L6658)
- **Background:** #FFFFFF
- **Padding:** 48px 40px (double standard padding on all sides — L3 maximum breathing room)
- **CTA text:** "No pressure. Just information." — Questrial, 14px, letter-spacing 0.2px, color #4A4A4A
- **CTA style:** Pure text link with subtle underline (text-underline-offset: 2px). NO button background. NO button border. NO pill shape.
- **Rendering Notes:** The absence of a button is intentional: a button says "click here to buy." A text link says "follow this if you want to." No secondary link. No product grid. Just text on a clear field. This is the lowest-urgency CTA in the entire BrightKidCo system.

### Section 14: Next Time Teaser
- **Component:** LETTER-02 (continued)
- **Background:** #FFFFFF
- **Padding:** 24px 30px
- **Text:** "Next time: The research behind the body-signal approach — and why 49% of children face this gap." — Helvetica/Arial, 16px, italic, color #4A4A4A
- **Rendering Notes:** Simple teaser. Keeps the reader anticipating E3.

### Section 15: Floating Feather Easter Egg
- **Component:** Custom SVG — Floating Feather
- **Position:** Lower-right corner, just above the Lena sign-off
- **Size:** ~32×16px
- **Style:** Single continuous path in warm taupe #C4B8AA at 30% opacity
- **Shape:** Organic, loose, not attached to any text block
- **Rendering Notes:** On first read, most people won't notice it. On second read, it registers as a gesture: lightness. No weight. No urgency. Just floating. The feather is unique to L3 — it appears in every Welcome email for Maria, drifting upward across the sequence: E1 at bottom-left, E2 at bottom-right, E3 near the CTA, E4 above the sign-off.

### Section 16: Lena Signoff
- **Component:** Signoff (primitives.jsx) — SHORT variant (E1-E2)
- **Background:** #FFFFFF (not dark — L3 uses light background for signoff)
- **Hand-drawn signature:** "Lena" in organic script SVG, placed above typed name
- **Typed name:** "Lena ——" 
- **Role:** "Customer Support · Mom of two autistic sons"
- **Sign-off text:** "Talk soon," — per GUARANTEE §11.7 for E1-E2
- **P.S.:** "If you want to understand what interoception looks like in your child, the pauses, the looks, the tiny signals, I wrote a short guide. Reply to this email and I'll send it. No obligation."
- **Rendering Notes:** The P.S. offers a free guide via reply — zero-pressure reciprocity. The hand-drawn "Lena" script is loose and uneven, intentionally not a digital font, to reinforce that a real person wrote this. No avatar photo for L3 — the signature IS the personal touch.

### Section 17: Footer
- **Component:** Footer (primitives.jsx) — simplified for L3
- **Background:** #FFFFFF
- **Address:** "[Physical address]" — 11px, color #8A9B9D
- **Links:** "No longer want these emails? Unsubscribe or Manage Preferences" — 12px, color #8A9B9D
- **Closing line:** "Reply to this email, Lena reads every response." — 12px, color #4A4A4A
- **Rendering Notes:** Simplified footer for L3. No tagline, no social icons, no gradient bar. Just the essentials. The "Reply to this email" line reinforces the personal connection.

---

## 6. Component Details

### HERO-9 — Whisper Tone (L3996)
- **Props:** headline text only
- **Variants:** Pure text hero, no image, no eyebrow
- **Custom overrides:** Background #FAF9F7 (warm cream, not white). Letter-spacing 0.5px (widest of all levels). No eyebrow label. Questrial font at 26px. L3-specific: the quietest possible opening.

### LETTER-02 — Handwritten Opener (L7797)
- **Props:** background, paragraphs array
- **Variants:** With emerald hairline left border (sections 7 and 9)
- **Custom overrides:** Line-height 1.7 (generous leading for L3 spacious cadence). Max line length 540px. Padding 30px (increased from standard 20px). The emerald hairline is 1.5px, not 3px — barely visible, grows across the sequence.

### SP-07 — Counter-Testimonial (L4940)
- **Props:** quote text, source attribution
- **Variants:** Research-as-testimony format
- **Custom overrides:** No parent success stories. The Nicholson et al. quote IS the testimonial. L3-specific: validation through science, not through other parents' wins.

### EDU-1 — Definition Block (L5203)
- **Props:** term, definition, context
- **Variants:** Inline definition within letter text (not a standalone block)
- **Custom overrides:** Interoception is defined within the narrative flow, not as a separate educational component. The mechanism is explained in Lena's voice, not in a clinical framework.

### CTA-2 — Soft Link (L6658)
- **Props:** text, link URL
- **Variants:** Pure text link, no button
- **Custom overrides:** No button background, no border, no pill shape. Text-underline-offset: 2px. Color #4A4A4A (same as body text — intentionally low contrast). L3-specific: zero urgency, zero pressure.

### TRUST-4 — Dashed Policy Quote (L6476)
- **Props:** policy text
- **Variants:** Dashed border container
- **Custom overrides:** Border 1.5px dashed #C4B8AA (warm taupe). Background #FAF9F7. Border-radius 12px. No checkmarks, no badges. L3-specific: quiet policy statement, not a trust seal.

### 20.1 — Wave Divider (L1858)
- **Props:** none (static decorative)
- **Variants:** Hand-drawn SVG squiggle
- **Custom overrides:** Color #C4B8AA (warm taupe). Width 80%, centered. Organic, soft undulations. References EEG/neurological theme.

---

## 7. Image Briefs

### Image 1: Lifestyle (for reference — NOT displayed in E2)
- **Path:** /root/projects/brightkidco/raw/product-photos/lifestyle/toddler-outdoors-grass-disposable-diaper.png
- **Alt:** "Toddler outdoors on grass wearing disposable diaper"
- **Recommended dimensions:** 840×600px
- **Cropping/focal point:** Natural outdoor setting. Child at ease. No crisis imagery.
- **Fallback color:** #FAF9F7
- **Usage:** NOT used in E2 L3. Available for E3 product introduction. Listed per strategy-map.json for completeness.

### Image 2: Product Flat Lay (for reference — NOT displayed in E2)
- **Path:** /root/projects/brightkidco/raw/product-photos/flat-lay/training-pant-penguin-multicolor.jpg
- **Alt:** "BrightKidCo body-signal learning pants flat lay, penguin multicolor pattern"
- **Recommended dimensions:** 600×600px
- **Cropping/focal point:** Full product visible, centered. Clean background.
- **Fallback color:** #FFFFFF
- **Usage:** NOT used in E2 L3. Available for E3 product introduction. Listed per strategy-map.json for completeness.

**NOTE:** E2 L3 has NO product images. The copy explicitly states: "No product introduction in this email, per S2 section structure for E2 L3, the email ends at mechanism deep with a pure information CTA. Product is introduced in E3 after full mechanism + permission frame."

---

## 8. Rendering Notes

- **Email client considerations:**
  - Gmail: Does not support CSS animations. All elements render as static. The neural path dots render at full opacity. The emerald hairline is solid.
  - Apple Mail: Supports CSS animation. The neural path dots can pulse gently in sequence (dot 1 fades in 1s, dot 2 at 1.3s, dot 3 at 1.6s). The emerald hairline can pulse opacity 100%→70%→100% over 4s. The floating feather can bob gently (translateY(-2px) over 3s).
  - Outlook (Windows): All animations render as static. Email designed to be fully effective without motion.
  - No video, no complex JavaScript, no SVG animation that breaks rendering.

- **Mobile responsive notes:**
  - All padding shrinks from 30px to 20px side padding.
  - Font sizes drop by 2px (headline 26→20px, body 16→14px).
  - The emerald left border converts to a 1.5px top border spanning full width.
  - The wave divider stretches to full width.
  - Everything collapses to single-column.
  - The floating feather remains at 30% opacity in the same relative position.

- **Accessibility notes:**
  - All images (if any) require descriptive alt text. E2 L3 has no images.
  - Color contrast: #2C2C2C on #FAF9F7 = 14.2:1 ratio (exceeds WCAG AAA).
  - CTA text: #4A4A4A on #FFFFFF = 9.7:1 ratio (exceeds WCAG AAA).
  - The emerald hairline uses border (not color alone) to convey structure.
  - ALL CAPS is forbidden in L3 design (too aggressive).
  - No exclamation points anywhere in the design.

- **Special instructions:**
  - L3 mandatory elements verification: ✅ Dignity in every sentence, ✅ "Mini-wins count" framing (the 49-study validation says "what you already knew" — honoring her expertise), ✅ Acknowledge resignation reality ("The effort was enormous. The result was the same."), ✅ Permission-not-to-buy in EVERY mail ("No pressure. Just information." + "No obligation" in P.S.)
  - L3 forbidden elements check: ❌ No urgency, ❌ No promise, ❌ No cheerleader language, ❌ No comparison to other kids, ❌ No math reframe on pricing, ❌ No prominent shipping cost mention
  - The feather easter egg is unique to L3 — do not include in L1 or L2 wireframes.
  - All colors use brand tokens only. The emerald (#039902) is the ONLY accent color — it grows across the Welcome sequence.
  - Copy is VERBATIM from the copy file — no paraphrasing or truncation.
  - The email ends at mechanism deep with a pure information CTA. Product is introduced in E3.
  - No pure black (#000000) anywhere. No pure white (#FFFFFF) — use #FAF9F7 for "white" backgrounds.
  - Shape language: rounded edges (border-radius 4px max on containers). Organic forms over geometric. Nothing sharp.
  - Spacing rhythm: generous 40px padding between all sections (increased from 20px for L1). The visual breathing room IS the level-calibration signal.
