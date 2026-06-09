# Wireframe: PP-At-Risk — E1 | Cross-Level

## 1. Metadata

| Field | Value |
|-------|-------|
| **Flow** | PP-Support At-Risk (Flow 23) |
| **Position** | E1 — Day 0 (3-7 days no opens) |
| **Level** | Cross-Level — All levels (L1, L2, L3, GF) via R1-R6 |
| **Copy File** | /root/projects/brightkidco/outputs/copy/pp-at-risk/atrisk-23-e1.md |
| **Strategy Map Entry** | flows.pp-at-risk.emails.e1 |
| **Flow Signature** | at-risk-intervention |
| **Level Calibration** | Cross-Level — empathy-forward, no urgency, permission framing, SPARK 49% stat |
| **Component Categories Used** | HERO (none), TEXT/LETTER, TESTIMONIAL, MECHANISM/EDUCATION, PRODUCT, CTA, GUARANTEE/TRUST, DECORATIVE (none) |
| **Total Estimated Height** | ~1,800px (desktop) / ~2,000px (mobile) |

---

## 2. Strategy Box

**Big Idea:** "The Pause Is Part of the Process." This email doesn't ask the parent to do anything. It doesn't sell. It doesn't re-engage with a discount. The core creative idea is that disengagement is not failure, it's a natural rhythm. A quiet check-in from a friend who's been there, holding space for the parent to return when they're ready. Text-only, no hero image. The absence of visual clutter IS the design — it signals "this is a real person writing, not a campaign."

**Emotional Arc Position:** E1 is the softest touch in the At-Risk sequence. The arc: Recognition → Validation → Understanding → Permission → Quiet Door-Open. No purchase CTA, no product push, no urgency. The CTA is a reply request — conversation, not conversion.

**Component Selection Rationale:**
- HERO: None — text-only personal letter. The subject line + preview text + greeting IS the hero. Intentional absence of visual ask.
- LETTER-02 (Handwritten Opener): Multi-paragraph body with Lena's voice — hook, validation, mechanism, CTA, sign-off. Single-column, no dividers.
- SP-05 (Before/After Testimonial): The dad quote ("We put them in a drawer for three weeks...") serves as the testimonial anchor. No visual testimonial card — just verbatim text in italic.
- EDU-1 (Definition Block): SPARK 49% stat and interoception mechanism — gentle education, not overwhelming. Embedded naturally in the body copy.
- ProductShowcaseSoft: The 60-day guarantee mention in P.S. Only product reference. No price, no purchase link.
- CTA-2 (Soft Link): "Reply to this email" — text-link CTA, not a button. No retail action. Conversation opener.
- TRUST-1 (60-Day Seal): Referenced in P.S. — "60 days, your judgment. No rush."
- Decorative: None — minimalism is the decoration. 1 footer divider line only.

**Differentiation Note:** This is the most minimal email in the entire BrightKidCo library. Zero imagery, zero buttons, zero urgency. It reads as a personal message. The text-only approach is deliberate: at-risk subscribers who haven't opened in 3-7 days need the lowest possible cognitive load. Any image is a reason not to render the email. A text-only email feels like a personal note rather than a broadcast.

---

## 3. Creative Box

**Color Palette:**
- Background: #FAF9F7 (warm off-white — reduces clinical feel)
- Content Background: Transparent (floats on page BG, no card needed)
- Headline/Body Text: #3A3A3A (warm dark gray — softer than pure black)
- CTA Text Link: #7A9A7A (muted sage — low-urgency green, "safe to click")
- Divider: #D4C9B8 (warm cream beige — subtle separation)
- Lena Signature: #3A3A3A (same as body — no brand/person distinction)
- Footer Text: #8A8A8A (muted, low visual weight)
- B.teal #2BAEB4 — eyebrow accents only (if any)
- B.green #5DD07A — not used (no green signals in this minimal email)
- B.ink #1F2D2F — not used (body text is warmer #3A3A3A)

**Typography:**
- Body/Hook: Questrial / Arial, Helvetica, sans-serif, 17px mobile / 18px desktop, weight 400, line-height 1.6
- Validation: Same stack, 17px/18px, weight 400, line-height 1.6
- CTA Line: Same stack, 17px/18px, weight 400, line-height 1.6
- Lena Signature: Same stack, 15px/16px, weight 400, line-height 1.4
- Footer: Arial, Helvetica, sans-serif, 11px/12px, weight 400, line-height 1.3
- SPARK stat ("49% of autistic 4-5 year olds..."): Italic for subtle emphasis

**Design Notes:**
- NO bold weight used anywhere (brand rule: "NEVER bold for body text")
- No headline size — the hook IS the headline, rendered at body size. Personal check-in doesn't shout.
- Questrial is brand font; Arial/Helvetica/sans-serif is email-safe fallback

**Border Radius:** None — no cards, no buttons, no containers
**Shadow:** None
**Spacing:** Section gap: 32px vertical between blocks; Left/right padding: 24px mobile / 40px desktop; Max width: 560px (within 600px safe zone)

---

## 4. Layout ASCII

```
┌──────────────────────────────────────────────────────────┐
│                                                          │
│  [NO HEADER — no logo, no from-name banner]              │
│  The email begins directly with Lena's greeting.         │
│                                                          │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  ┌──────────────────────────────────────────────────┐   │
│  │            HOOK (centered)                        │   │ ~120px
│  │                                                  │   │
│  │  "Haven't heard from you in a bit. So I          │   │
│  │   thought I'd check in — how's it going?"        │   │
│  │  [Questrial 17px, #3A3A3A, 400 weight, 1.6 lh]  │   │
│  │                                                  │   │
│  └──────────────────────────────────────────────────┘   │
│                                                          │
│  ┌──────────────────────────────────────────────────┐   │
│  │            VALIDATION (centered)                   │   │ ~200px
│  │                                                  │   │
│  │  "If the underwear is sitting in a drawer,       │   │
│  │   that's okay. Some kids need a break.           │   │
│  │   Some moms need a break. That's real.           │   │
│  │   I took breaks too. My older son was 8          │   │
│  │   before we figured this out..."                 │   │
│  │  [Questrial 17px, #3A3A3A, 400 weight, 1.6 lh]  │   │
│  │                                                  │   │
│  └──────────────────────────────────────────────────┘   │
│                                                          │
│  ┌──────────────────────────────────────────────────┐   │
│  │            MECHANISM (centered)                   │   │ ~280px
│  │                                                  │   │
│  │  "Body-signal learning doesn't work on a         │   │
│  │   timeline. Some kids process interoception      │   │
│  │   at a different pace..."                        │   │
│  │                                                  │   │
│  │  "49% of autistic 4-5 year olds aren't trained.  │   │
│  │   You're not behind. You're not doing it         │   │
│  │   wrong."                                        │   │
│  │  [Italic emphasis on SPARK stat]                 │   │
│  │                                                  │   │
│  │  "One dad told me: 'We put them in a drawer      │   │
│  │   for three weeks. When we pulled them out,      │   │
│  │   something had shifted...'"                     │   │
│  │  [Questrial 17px, #3A3A3A, 400 weight, 1.6 lh]  │   │
│  │                                                  │   │
│  └──────────────────────────────────────────────────┘   │
│                                                          │
│  ┌──────────────────────────────────────────────────┐   │
│  │            CTA (centered)                         │   │ ~120px
│  │                                                  │   │
│  │  "If you want to tell me what's happening,       │   │
│  │   whether things are going well, whether you     │   │
│  │   hit a wall, whether you just needed a          │   │
│  │   breather, reply to this email.                 │   │
│  │   I read every response."                        │   │
│  │                                                  │   │
│  │  "No judgment. Just curious."                    │   │
│  │  [Questrial 17px, #7A9A7A text link, no button] │   │
│  │                                                  │   │
│  └──────────────────────────────────────────────────┘   │
│                                                          │
│  ┌──────────────────────────────────────────────────┐   │
│  │            LENA SIGN-OFF                          │   │ ~100px
│  │                                                  │   │
│  │  "Talk soon,"                                    │   │
│  │  "Lena ——"                                      │   │
│  │  "Customer Support · Mom of two autistic sons"   │   │
│  │  [Questrial 15px, #3A3A3A, 400 weight]           │   │
│  │                                                  │   │
│  │  "P.S. When you're ready to try again, the       │   │
│  │   science will be here. 60 days, your judgment.  │   │
│  │   No rush."                                      │   │
│  │  [14px, #8A8A8A, italic]                         │   │
│  │                                                  │   │
│  └──────────────────────────────────────────────────┘   │
│                                                          │
│  ────────── #D4C9B8, 1px divider ─────────────────────  │
│                                                          │
│  ┌──────────────────────────────────────────────────┐   │
│  │            FOOTER                                 │   │ ~80px
│  │                                                  │   │
│  │  "You're receiving this email because you        │   │
│  │   purchased from BrightKidCo and agreed to       │   │
│  │   receive post-purchase support from Lena."      │   │
│  │  "Unsubscribe · BrightKidCo · 1234 Parent Lane   │   │
│  │   Austin, TX 78701"                              │   │
│  │  [Arial 11px, #8A8A8A]                           │   │
│  │                                                  │   │
│  └──────────────────────────────────────────────────┘   │
│                                                          │
└──────────────────────────────────────────────────────────┘

Total decorative elements: 1 (the footer divider).
Minimalism IS the decoration.
```

---

## 5. Copy Blocks (Verbatim)

### Hook
"Haven't heard from you in a bit. So I thought I'd check in, how's it going?"

### Validation
"If the underwear is sitting in a drawer, that's okay. Some kids need a break. Some moms need a break. That's real. I took breaks too. My older son was 8 before we figured this out, and there were months when the underwear just sat there."

### Mechanism
"Body-signal learning doesn't work on a timeline. Some kids process interoception at a different pace, and that pace isn't a reflection of you or your child. 49% of autistic 4-5 year olds aren't trained. You're not behind. You're not doing it wrong. The nervous system takes the time it takes.

When the underwear goes back on, whether that's tomorrow, next week, or next month, the body-signal learning starts wherever your child is. Not on a Pre-K deadline. Not on anyone else's timeline.

One dad told me: 'We put them in a drawer for three weeks. When we pulled them out, something had shifted. He didn't say anything. But he paused before he peed. That pause was new.'"

### CTA
"If you want to tell me what's happening, whether things are going well, whether you hit a wall, whether you just needed a breather, reply to this email. I read every response.

No judgment. Just curious."

### Sign-Off
"Talk soon,
Lena ——
Customer Support · Mom of two autistic sons

P.S. When you're ready to try again, the science will be here. 60 days, your judgment. No rush."

### Footer
"You're receiving this email because you purchased from BrightKidCo and agreed to receive post-purchase support from Lena. If you'd prefer not to hear from us, unsubscribe here. BrightKidCo, 1234 Parent Lane, Austin, TX 78701, United States."

---

## 6. Component Briefs

### Component 1: Text-Only Letter Body (LETTER-02)
- **Purpose:** Deliver Lena's voice as a personal check-in, not a marketing email
- **Style:** Single-column, centered text, no dividers, no cards
- **Typography:** Questrial 17px/18px, weight 400, line-height 1.6, color #3A3A3A
- **Spacing:** 32px vertical between sections (Hook → Validation → Mechanism → CTA → Sign-off)
- **Width:** 560px max, centered, 24px mobile / 40px desktop padding
- **Key Detail:** No bold anywhere. No headline size. The hook IS the headline at body size.

### Component 2: SPARK Stat Callout (Embedded in Mechanism)
- **Purpose:** Normalize the experience with peer-reviewed data
- **Style:** Italic text within body copy, no visual callout box
- **Content:** "49% of autistic 4-5 year olds aren't trained"
- **Source:** SPARK study, 11-brand-voice-reference.md §9.4

### Component 3: Dad Quote (Inline Testimonial)
- **Purpose:** Peer validation through real parent voice
- **Style:** Italic, 15px, no card or border
- **Content:** "We put them in a drawer for three weeks. When we pulled them out, something had shifted..."
- **Attribution:** "One dad told me" — not attributed by name

### Component 4: Reply CTA (Soft Link)
- **Purpose:** Open a conversation, not drive a purchase
- **Style:** Text link, #7A9A7A (muted sage), centered, no button
- **Content:** "reply to this email. I read every response."
- **Key Detail:** The CTA reads as natural conversation, not a marketing action

### Component 5: Lena Sign-Off
- **Purpose:** Establish personal connection and trust
- **Style:** "Talk soon," + "Lena ——" + profile line
- **Typography:** 15px, Questrial, 400 weight
- **P.S.:** 14px, italic, #8A8A8A — the guarantee reminder

### Component 6: Footer Divider
- **Purpose:** Separate personal note from legal footer
- **Style:** 1px line, #D4C9B8 (warm cream beige), full-width
- **Only decorative element in the entire email**

---

## 7. Motion / Animation

**None.** This email has no animated elements.

**Rationale:**
1. Rendering risk — Gmail app, Outlook, and Yahoo strip or break animations
2. Tone mismatch — movement reads as urgency/excitement; this email's creative strategy is stillness, pause, reflection
3. The email is text-only; animation would undermine the "personal letter" aesthetic

---

## 8. Easter Egg / Hidden Detail

**The "How's it going?" echo.** The email opens with "how's it going?" and returns to this in the CTA ("tell me what's happening"). The reader who doesn't open but preview-texts gets: "No pressure. Just wanted to see how things are going with the underwear." This frames the entire email as a two-way conversation even before opening.

**Cross-level calibration note:** There is no level-specific easter egg. The email is deliberately universal. L1 readers see relief from pressure. L2 readers see validation from a peer who gets method fatigue. L3 readers see dignity. GF readers see a human check-in.

---

## 9. Source Citations

| Element | Source | Detail |
|---------|--------|--------|
| Subject line | S2 §1.20 | "Haven't heard from you — checking in" |
| Hook | S2 §1.20 | "Haven't heard from you. How's it going?" — verbatim |
| Content core | S2 §1.20 | "If the underwear is sitting in a drawer — that's okay..." — expanded |
| CTA | S2 §1.20 | "Reply and tell me what's happening" — verbatim |
| Tone | 11-brand-voice-reference.md §12 | PP-At-Risk Support = Empathetic Lena, 30/70 Hope/Realism |
| "My older son was 8" | Layer 9 (Voice Lena) §1.3 + §9.5 | Lena's background fragments |
| "49% stat" | 11-brand-voice-reference.md §9.4 + 03-science-library.md | SPARK study citation |
| Sign-off: "Talk soon," | 11-brand-voice-reference.md §9.2 | E1 (early flow) warm sign-off |
| P.S. variant | 11-brand-voice-reference.md §9.3 | "60 days, your judgment. No rush." |
| No hero image | consolidated-design-skills-trimmed.md §3.2 | Cross-level constraint |
| Text-link CTA | 11-brand-voice-reference.md §15.3 §7 | Conversation, not conversion |
| No bold anywhere | 11-brand-voice-reference.md §14.3 | "NEVER bold for body text" |
| Off-white background | 11-brand-voice-reference.md §14.1 | Standard BrightKidCo email BG |
| 600px max width | consolidated-design-skills-trimmed.md §1 | Standard rendering width |
| 16px+ body text | consolidated-design-skills-trimmed.md §5.2 | Mobile accessibility minimum |
