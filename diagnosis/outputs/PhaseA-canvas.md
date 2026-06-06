# Phase A.1: HTML Canvas Analysis

> Source: `/root/projects/email-ops/email-design/canvas.html`
> Size: 12,955 lines, 411KB
> Type: React application rendering welcome flows as interactive email previews

## What This File Is

A complete React application that renders the BKC welcome email flows. It contains:
- The ENTIRE brand design system (colors, fonts, gradients, spacing)
- ALL content for 6 welcome emails (E1-E6) plus Flow 2 emails
- 10 SVG illustration components
- Layout components (Header, TitleBlock, Letter, Footer, etc.)
- 3 product showcase variants (Full, Medium, Soft)
- Email variant system (3 variants per email for A/B testing)
- Wireframe components for low-fidelity previews

This is the SINGLE SOURCE OF TRUTH for the BKC email design system.

---

## Brand Design System

### Color Tokens (window.BRAND)

| Token | Hex | Usage |
|-------|-----|-------|
| teal | #2BAEB4 | Primary accent, gradient start |
| tealDeep | #1E8A8F | Darker teal variant |
| green | #5DD07A | Secondary accent, gradient end |
| greenDeep | #3BB35E | Darker green variant |
| ink | #1F2D2F | Primary text color |
| soft | #4A6568 | Secondary text, subheads |
| muted | #8A9B9D | Tertiary text, preheaders |
| cream | #FBF7F1 | Warm background |
| paper | #FFFFFF | White background |

### Gradient System

| Name | Value |
|------|-------|
| gradient | `linear-gradient(135deg, #2BAEB4 0%, #5DD07A 100%)` |
| gradientText | Background-clip text effect (teal-to-green) |

### Font System (window.FONT)

| Token | Font Stack | Usage |
|-------|-----------|-------|
| sans/main | Questrial, system-ui, sans-serif | Body text, UI |
| serif/display | Fraunces, Georgia, serif | Headlines, display |
| hand | Caveat, cursive | Handwritten accents |

### Typography Scale

| Element | Size | Weight | Notes |
|---------|------|--------|-------|
| H1 (title) | 40px | 700 | letterSpacing: -0.8 |
| Subhead | 17px | 500 | color: soft |
| Body | 14px | 400 | lineHeight: 1.55 |
| Eyebrow | — | — | Uppercase, small |
| Preheader | 11px | — | Italic, muted |
| Part badge | 10.5px | 700 | Uppercase, letterSpacing: 1.5 |

### Spacing System

| Element | Padding |
|---------|---------|
| Email shell | Width: MW (max-width) |
| Header | 24px top, 20px sides |
| Title block | 34px top, 22px sides |
| Letter section | Variable (warm bg) |
| Product showcase | 28px top, 14px sides |
| Preheader bar | 6px vertical, 20px sides |

### Component Tokens

| Element | Value |
|---------|-------|
| Part badge background | #FFD866 (yellow) |
| Part badge border | 2px solid ink |
| Part badge border-radius | 999 (pill) |
| Part badge rotation | -1.5deg |
| Logo height | 34px |

---

## Component Architecture

### Illustrations (10 SVG components)

| Component | Subject |
|-----------|---------|
| Illu_GentleMorning | Morning routine scene |
| Illu_Letter | Letter/envelope motif |
| Illu_QuietRoom | Quiet room environment |
| Illu_Hands | Hands (care/holding) |
| Illu_ProductPants | Product illustration |
| Illu_Airplane | Airplane (journey metaphor) |
| Illu_Signal | Signal/body signal concept |
| Illu_Sensory | Sensory elements |
| Illu_CalmSun | Calm/sun motif |
| Illu_QuoteBadge | Quote decoration |

### Layout Components

| Component | Purpose |
|-----------|---------|
| EmailShell | Outer container with preheader bar |
| Header | Logo placement (centered, 34px) |
| Band | Colored section divider |
| TitleBlock | H1 with badge + gradient accent |
| Letter | Paragraph stack on warm background |
| Eyebrow | Small uppercase label |
| H2 | Section heading |
| CTAClose | Call-to-action button block |
| Signoff | Letter signoff ("With you, Lena Bauer") |
| OutLine | Outline/stroke decoration |
| Footer | Brand footer |

### Product Showcase (3 variants)

| Variant | Used In | Description |
|---------|---------|-------------|
| ProductShowcaseFull | E4, E6 | Hero product moment: lifestyle hero + price + 3 feature pills + sub-grid + CTA |
| ProductShowcaseMedium | E5 | Sarah's story, inline product reference |
| ProductShowcaseSoft | E2, E3 | End-of-email gentle nod, no hard sell |

### Wireframe Components

| Component | Purpose |
|-----------|---------|
| WireframeShell | Low-fidelity email container |
| WBox | Wireframe box |
| WLine | Wireframe text line |
| WImg | Wireframe image placeholder |
| WBtn | Wireframe button |
| WText | Wireframe text block |
| WHand | Handwritten annotation |
| WMono | Monospace text |
| WNote | Note/annotation |

### Email Variants

- Email1_VariantA/B/C (E1 — 3 variants)
- Email2_VariantA/B/C (E2 — 3 variants)
- Email3_VariantA/B/C (E3 — 3 variants)
- F2Email1, F2Email2, F2Email3 (Flow 2)

---

## Welcome Flow Architecture (6 Emails)

### Email 1: "You haven't done anything wrong"
- **Timing:** Immediate
- **Theme:** Empathy, no product
- **Content:** Letter opening, creed ("You are not failing"), reframe (interoception intro), 3-step path, testimonial, CTA
- **CTA:** "See how the method works"
- **Tone:** Pure empathy, zero selling

### Email 2: "The Mechanism" — Body-Signal Explained
- **Timing:** +24 hours
- **Theme:** Education
- **Content:** Interoception definition, why nothing worked, compare (pull-ups vs regular vs BKC), expert quote
- **CTA:** "See the pants"
- **Tone:** Educational, peer-to-peer

### Email 3: "Why Everything Failed Before"
- **Timing:** +2 days
- **Theme:** Absolution
- **Content:** 4 standard methods walkthrough (timer, rewards, naked, pull-ups), reframe, parent story
- **CTA:** "See the pants"
- **Tone:** Validation, no blame

### Email 4: "The Product" — Soft Reveal
- **Timing:** +4 days
- **Theme:** Product reveal
- **Content:** 3-layer system explanation, feel/for-you points, testimonial, objections handling
- **CTA:** "See the pants"
- **Tone:** Reveal, not pitch

### Email 5: "Sarah's Story" — Parent-to-Parent Proof
- **Timing:** +6 days
- **Theme:** One narrative
- **Content:** 4-chapter story (starting point, low point, first two weeks, where we are now), pullquote
- **CTA:** "Try the pants Sarah used"
- **Tone:** Real story, no marketing

### Email 6: "The Invitation" — 60-Day Guarantee
- **Timing:** +8 days
- **Theme:** The invitation
- **Content:** 60-day calm progress guarantee, what's covered, starter pair offer
- **CTA:** "Start with one pair"
- **Tone:** Invitation, no urgency, no countdown

---

## Content Architecture Pattern

Each email follows this structure:

```
1. Preheader bar (muted, italic)
2. Header (logo, centered)
3. Part badge (yellow pill, rotated)
4. Title block (H1 with gradient accent)
5. Letter opening (warm bg, personal tone)
6. Content sections (varies per email):
   - Reframe / Education
   - Steps / Methods
   - Comparison cards
   - Testimonial / Story
   - Objections handling
7. Product showcase (if applicable)
8. CTA section
9. Signoff ("With you, Lena Bauer")
10. Footer
```

---

## Key Findings

1. **This is the DEFINITIVE brand source** — all colors, fonts, spacing, components defined here
2. **6-email welcome flow** with clear narrative arc: empathy → education → validation → product → proof → invitation
3. **"No urgency" principle** — explicitly stated in code comments, no countdown timers, no scarcity
4. **Voice:** "peer-to-peer mother" — signoff is "Lena Bauer" (real person), not "The BrightKidCo team"
5. **3 product showcase levels** — context-dependent (hero for E4/E6, inline for E5, gentle for E2/E3)
6. **10 custom SVG illustrations** — hand-crafted for BKC, not stock
7. **Variant system** — 3 variants per email for A/B testing
8. **Price point:** €34 starter pair, 10% off first order
9. **Guarantee:** 60-day calm progress guarantee (not 30-day — explicitly reasoned)
10. **Content is in JavaScript objects** — structured data, not hardcoded HTML
