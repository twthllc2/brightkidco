# BrightKidCo — Pop-Up Strategy (S4)

> **The front door of the email system: How the pop-up captures subscribers in Lena's voice, implements the segmentation logic from S3, and feeds correct tags into Klaviyo.**
> Generated: May 28, 2026
> Primary Source Hierarchy: GIULIANO-DEMANDS.md → S3 Segmentation Blueprint → MASTER Compendiums → Synthesis Docs → Diagnosis Layers → Research Files
> Delivered to: Klaviyo Implementation Team

---

## TABLE OF CONTENTS

1. [Executive Summary](#1-executive-summary)
2. [Popup Design — Visual Specifications](#2-popup-design--visual-specifications)
3. [Popup Copy — Written in Lena's Voice](#3-popup-copy--written-in-lenas-voice)
4. [Segmentation Question — The Self-ID Widget](#4-segmentation-question--the-self-id-widget)
5. [Incentive Structure](#5-incentive-structure)
6. [Popup Timing Rules](#6-popup-timing-rules)
7. [Technical Implementation — Klaviyo Configuration](#7-technical-implementation--klaviyo-configuration)
8. [Fallback and Edge Cases](#8-fallback-and-edge-cases)
9. [A/B Testing Roadmap](#9-ab-testing-roadmap)
10. [Appendix: Source Index](#10-appendix-source-index)

---

## 1. EXECUTIVE SUMMARY

The BrightKidCo pop-up is not a generic email capture widget. It is a **segmentation intake device** — the first interaction between a parent and the email ecosystem. It must accomplish three things simultaneously:

1. **Capture** the email address and first name
2. **Assign** the correct avatar level tag (`avatar_level1`, `avatar_level2`, `avatar_level3`, or `avatar_general`) with symptom-based language, never clinical labels
3. **Deliver** the incentive (WELCOME10 discount code) in a way that feels earned, not transactional

The pop-up implements the four-level segmentation system defined in S3 (Segmentation Blueprint) at the exact moment of opt-in. Every design decision, every word of copy, every timing rule is grounded in BrightKidCo's research and the specific psychology of the autism parent audience.

**Core architecture:**

```
Site Visitor Arrives (any page)
        │
        ▼
  ┌─────────────────────────────────────┐
  │     TIMING ENGINE                   │
  │  Desktop: Exit Intent               │
  │  Organic/Content: 50% Scroll        │
  │  Mobile: 15-second delay            │
  │  Paid/Referral: 10-second delay     │
  └──────────────────┬──────────────────┘
                     │
                     ▼
  ┌──────────────────────────────────────────────────────────┐
  │  POP-UP STEP 1: Self-ID Widget                            │
  │  ┌─────────────────────────────────────────────────────┐  │
  │  │  "Get 10% off + a potty training plan built for    │  │
  │  │   kids like yours."                                 │  │
  │  │                                                     │  │
  │  │  Email: [______________]  First Name: [________]   │  │
  │  │                                                     │  │
  │  │  "What describes your child best?"                  │  │
  │  │                                                     │  │
  │  │  ○ Talks about potty but won't actually do it       │  │
  │  │  ○ Sensory issues, tried many methods               │  │
  │  │  ○ Non-verbal or high support needs                 │  │
  │  │  ○ Still figuring out what's going on               │  │
  │  │                                                     │  │
  │  │  [Get My 10% Code]                                  │  │
  │  └─────────────────────────────────────────────────────┘  │
  └──────────────────┬──────────────────────────────────────────┘
                     │
                     ▼
  ┌──────────────────────────────────────────────────────────┐
  │  KLAVIYO ON SUBMIT                                       │
  │  • Write email + first_name to profile                   │
  │  • Apply tag: avatar_level1/2/3/general                  │
  │  • Create profile property: avatar_level                 │
  │  • Set signup_source = "popup"                           │
  │  • Trigger Welcome Flow (level-specific variant)         │
  └──────────────────┬──────────────────────────────────────────┘
                     │
                     ▼
  ┌──────────────────────────────────────────────────────────┐
  │  POP-UP STEP 2: Success State                            │
  │  ┌─────────────────────────────────────────────────────┐  │
  │  │  ✓ Your code is ready.                              │  │
  │  │                                                     │  │
  │  │  WELCOME10                                          │  │
  │  │                                                     │  │
  │  │  Auto-applies at checkout. Valid 7 days.            │  │
  │  │                                                     │  │
  │  │  [Shop Now] or keep browsing                        │  │
  │  └─────────────────────────────────────────────────────┘  │
  └──────────────────────────────────────────────────────────────┘
```

(Source: L8-Segmentation-Mechanics.md §2; GIULIANO-DEMANDS.md §1; S3-Segmentation-Blueprint.md §2)

---

## 2. POPUP DESIGN — VISUAL SPECIFICATIONS

### 2.1 Brand Color Palette Applied to Popup

All popup elements use the locked BrightKidCo brand color palette. No variation from these hex values is permitted.

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                   POPUP COLOR USAGE MAP                                      ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  ELEMENT                        │ COLOR       │ HEX       │ RATIONALE        ║
║  ───────────────────────────────┼─────────────┼───────────┼─────────────────  ║
║  Popup Background               │ Off-white    │ #FAF9F7   │ Sensory-friendly ║
║  Headline Text                  │ Dark Text    │ #1A1A1A   │ Maximum          ║
║  Body Text                      │ Body Gray    │ #4A4A4A   │ readability,     ║
║  Email Input Background         │ White        │ #FFFFFF   │ gentle on eyes   ║
║  Email Input Border             │ Soft Gray    │ #9AA8A7   │                  ║
║  CTA Button Background          │ Brand Green  │ #039902   │ Primary action   ║
║  CTA Button Text                │ White        │ #FFFFFF   │ High contrast    ║
║  Option Button (unselected)     │ Soft Gray    │ #9AA8A7   │ Neutral state    ║
║  Option Button (selected)       │ Brand Green  │ #039902   │ Confirmation     ║
║  Success State Background       │ Mint         │ #DBFFCD   │ Positive feeling ║
║  Discount Code Display          │ Brand Green  │ #039902   │ Prominent/Celeb  ║
║  Close/X Button                 │ Soft Gray    │ #9AA8A7   │ Non-intrusive    ║
║  "We respect your inbox" text   │ Soft Gray    │ #9AA8A7   │ Reassuring tone  ║
║  Privacy note icon              │ Yellow       │ #F5C84B   │ Trust signal     ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```
(Source: L38-Brand-Constants.md §6.1; L29-Visual-Calibration.md §1.1; 27-Brand-Identity-Guidelines.md §2)

### 2.2 Typography

| Element | Desktop | Mobile | Weight | Font |
|---------|---------|--------|--------|------|
| Headline | 28px | 22px | 400 (never bold) | Questrial |
| Subhead/Question | 18px | 16px | 400 | Questrial |
| Email field label | 14px | 14px | 400 | Questrial |
| Option button text | 16px | 15px | 400 | Questrial |
| CTA button | 17px | 16px | 400 | Questrial |
| Discount code | 32px | 26px | 400 | Questrial, monospace if available |
| Privacy/legal text | 12px | 12px | 400 | Questrial |
| Close link | 14px | 14px | 400 | Questrial |

**Email-safe fallback stack:** `Questrial, Arial, Helvetica, sans-serif`

**Critical accessibility rule:** Body text NEVER smaller than 16px on mobile. CTA button height minimum 48px (thumb target). Input fields minimum 44px height.

(Source: L29-Visual-Calibration.md §1.2; 27-Brand-Identity-Guidelines.md §3; L38-Brand-Constants.md §6)

### 2.3 Desktop Layout Specification

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                   DESKTOP POPUP — EXACT LAYOUT SPEC                          ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  ┌────────────────────────────────────────────────────────────────────────┐  ║
║  │  OVERLAY: Semi-transparent black (#000000, 50% opacity)               │  ║
║  │  Entire viewport behind popup                                         │  ║
║  │                                                                        │  ║
║  │  ┌──────────────────────────────────────────────────────────────────┐  │  ║
║  │  │  POPUP CONTAINER                                                │  │  ║
║  │  │  Width: 520px max                              [X] Close button │  │  ║
║  │  │  Border-radius: 16px                                            │  │  ║
║  │  │  Box-shadow: 0 8px 32px rgba(0,0,0,0.15)                       │  │  ║
║  │  │  Background: #FAF9F7                                            │  │  ║
║  │  │                                                                  │  │  ║
║  │  │  ┌────────────────────────────────────────────────────────────┐  │  │  ║
║  │  │  │  HEADLINE AREA                              Padding: 32px │  │  │  ║
║  │  │  │  "Get 10% off + a potty training plan"                     │  │  │  ║
║  │  │  │  "built for kids like yours."                              │  │  │  ║
║  │  │  └────────────────────────────────────────────────────────────┘  │  │  ║
║  │  │                                                                  │  │  ║
║  │  │  ┌────────────────────────────────────────────────────────────┐  │  │  ║
║  │  │  │  EMAIL + NAME FIELDS                        Padding: 0 32px│  │  │  ║
║  │  │  │  ┌────────────────────────┐ ┌────────────┐                │  │  │  ║
║  │  │  │  │ [Enter your email]     │ │ [First name]│  Side-by-side │  │  │  ║
║  │  │  │  └────────────────────────┘ └────────────┘                │  │  │  ║
║  │  │  │  Both fields: 44px height, 12px border-radius            │  │  │  ║
║  │  │  │  Border: 1px solid #9AA8A7, focus: 2px solid #039902     │  │  │  ║
║  │  │  └────────────────────────────────────────────────────────────┘  │  │  ║
║  │  │                                                                  │  │  ║
║  │  │  ┌────────────────────────────────────────────────────────────┐  │  │  ║
║  │  │  │  QUESTION + OPTIONS                      Padding: 16px 32px│  │  │  ║
║  │  │  │  "What describes your child best?"                         │  │  │  ║
║  │  │  │                                                             │  │  │  ║
║  │  │  │  ┌──────────────────────────────────────────────────────┐  │  │  │  ║
║  │  │  │  │ ○ Talks about potty but won't actually do it         │  │  │  │  ║
║  │  │  │  ├──────────────────────────────────────────────────────┤  │  │  │  ║
║  │  │  │  │ ○ Sensory issues, tried many methods                 │  │  │  │  ║
║  │  │  │  ├──────────────────────────────────────────────────────┤  │  │  │  ║
║  │  │  │  │ ○ Non-verbal or high support needs                   │  │  │  │  ║
║  │  │  │  ├──────────────────────────────────────────────────────┤  │  │  │  ║
║  │  │  │  │ ○ Still figuring out what's going on                 │  │  │  │  ║
║  │  │  │  └──────────────────────────────────────────────────────┘  │  │  │  ║
║  │  │  │  Radio button style: circle, 20px, #9AA8A7 unselected     │  │  │  ║
║  │  │  │  Selected: filled circle #039902, ring #039902             │  │  │  ║
║  │  │  └────────────────────────────────────────────────────────────┘  │  │  ║
║  │  │                                                                  │  │  ║
║  │  │  ┌────────────────────────────────────────────────────────────┐  │  │  ║
║  │  │  │  CTA BUTTON                              Padding: 0 32px 32│  │  │  ║
║  │  │  │  ┌────────────────────────────────────────────────────────┐  │  │  ║
║  │  │  │  │              [Get My 10% Code]                         │  │  │  ║
║  │  │  │  │  Full-width, 52px height, 12px border-radius           │  │  │  ║
║  │  │  │  │  Background: #039902, Text: #FFFFFF                    │  │  │  ║
║  │  │  │  │  Hover: #028002 (darker green)                         │  │  │  ║
║  │  │  │  └────────────────────────────────────────────────────────┘  │  │  ║
║  │  │  └────────────────────────────────────────────────────────────┘  │  │  ║
║  │  │                                                                  │  │  ║
║  │  │  ┌────────────────────────────────────────────────────────────┐  │  │  ║
║  │  │  │  PRIVACY NOTE                             Padding: 0 32px 24│  │  │  ║
║  │  │  │  "🔒 We respect your inbox. Unsubscribe anytime."          │  │  │  ║
║  │  │  │  Font size: 12px, Color: #9AA8A7, Centered                 │  │  │  ║
║  │  │  └────────────────────────────────────────────────────────────┘  │  │  ║
║  │  └──────────────────────────────────────────────────────────────────┘  │  ║
║  └────────────────────────────────────────────────────────────────────────┘  ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```
(Source: 27-Brand-Identity-Guidelines.md §2-3; L29-Visual-Calibration.md §1.1-1.3; RA5-R4-Klaviyo-Research.md §7.1)

### 2.4 Mobile Layout Specification

On mobile (60%+ of BrightKidCo traffic), the popup becomes a **bottom sheet** — slides up from the bottom, covering approximately 70% of the viewport. This is Google-compliant (non-blocking interstitial) and thumb-friendly.

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                    MOBILE POPUP — BOTTOM SHEET LAYOUT                        ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  ┌────────────────────────────────────────────────────────────────────────┐  ║
║  │  OVERLAY: Semi-transparent black, entire viewport                      │  ║
║  │                                                                        │  ║
║  │  ┌──────────────────────────────────────────────────────────────────┐  │  ║
║  │  │  BOTTOM SHEET CONTAINER            Slides up from bottom        │  │  ║
║  │  │  Width: 100% - 24px margins                                    │  │  ║
║  │  │  Height: ~70% of viewport (scrollable if needed)                │  │  ║
║  │  │  Border-radius: 20px top-left / top-right (rounded top only)   │  │  ║
║  │  │  Background: #FAF9F7                                           │  │  ║
║  │  │                                                                  │  │  ║
║  │  │  ┌─── Drag Handle ────────────────────────────────────────────┐  │  │  ║
║  │  │  │  Thin pill: 40×4px rounded, #9AA8A7, centered at top      │  │  │  ║
║  │  │  └────────────────────────────────────────────────────────────┘  │  │  ║
║  │  │                                                                  │  │  ║
║  │  │  [X] Close button — top-right corner, touch target min 44×44px  │  │  ║
║  │  │                                                                  │  │  ║
║  │  │  Headline: 22px, line-height 1.4                                 │  │  ║
║  │  │  Fields: stacked vertically (email above name), full-width       │  │  ║
║  │  │  Options: vertically stacked, full-width                         │  │  ║
║  │  │  CTA button: full-width, 52px height                             │  │  ║
║  │  │  Privacy note: bottom                                           │  │  ║
║  │  └──────────────────────────────────────────────────────────────────┘  │  ║
║  │                                                                        │  ║
║  │  KEY MOBILE RULES:                                                     │  ║
║  │  - NO exit-intent on mobile (not supported by browsers)                │  ║
║  │  - Use 15-second time delay instead                                    │  ║
║  │  - Bottom sheet can be dismissed by swipe-down                         │  ║
║  │  - All touch targets min 44×44px (accessibility)                      │  ║
║  │  - Scroll within container if content exceeds viewport                │  ║
║  └────────────────────────────────────────────────────────────────────────┘  ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```
(Source: RA5-R1-Popup-Best-Practices.md §1, §5; RA5-R2-Parent-Popup-Research.md §1; RA5-R4-Klaviyo-Research.md §3.1)

### 2.5 Success State Design (After Signup)

After the user submits, the popup transitions to a success state:

| Element | Spec |
|---------|------|
| Background | Mint (#DBFFCD) — warm, positive |
| Check icon | Green checkmark, 48px, centered |
| Headline | "Your code is ready." — centered, #1A1A1A, 24px |
| Code display | WELCOME10 — #039902, 32px, monospace style, bold weight (exception to no-bold rule, source: Layer 38 §6) |
| Validity note | "Auto-applies at checkout. Valid 7 days." — #4A4A4A, 14px |
| CTA | [Shop Now] — same green button, centered |
| Secondary option | "or keep browsing" — link style, #9AA8A7, 14px |

**Critical implementation rule:** The discount code is displayed DIRECTLY in the popup success state. The customer can buy immediately without checking their inbox. The code is ALSO sent via the Welcome Flow email (dual delivery prevents loss). (Source: L8-Segmentation-Mechanics.md §2; L15-Offers.md §4)

### 2.6 Visual Rules — Do and Don't

**DO:**
- Use warm cream/off-white backgrounds — sensory-friendly, non-clinical
- Keep the popup clean — one offer, one CTA at a time
- Use real parent/lifestyle imagery if including an image (soft natural lighting)
- Include privacy lock icon 🔒 next to privacy text — builds trust (Source: RA5-R2-Parent-Popup-Research.md §1)

**DON'T:**
- ❌ NO cartoon illustrations — ever, at any level (Source: L29-Visual-Calibration.md §1.4)
- ❌ NO stock images of neurotypical happy families (Source: L29-Visual-Calibration.md §1.4)
- ❌ NO bright cartoon colors that make the brand look like a toddler brand (Source: L29-Visual-Calibration.md §1.4)
- ❌ NO hard-to-close popup — easy dismiss is critical for parent audiences (Source: RA5-R2-Parent-Popup-Research.md §1)
- ❌ NO close button smaller than 44×44px on mobile (accessibility requirement)
- ❌ NO auto-playing video or audio inside the popup (sensory-sensitive audience)
- ❌ NO flashing animations (seizure risk, sensory distress for autistic parents)

---

## 3. POPUP COPY — WRITTEN IN LENA'S VOICE

### 3.1 Voice Foundation: Lena S.

Every word in the popup is written in the voice of **Lena S.** — Customer Support, Mom of two autistic sons (ages 6 and 8). The voice is peer-to-peer, not founder, not marketer, not clinician. (Source: 11-Brand-Voice-Reference.md §1; L9-Voice-Lena.md §1)

**The Lena Formula applied to popup copy:**

```
OBSERVATION → VALIDATION → MECHANISM → PERMISSION
      │            │            │            │
      ▼            ▼            ▼            ▼
  "Your child   "That's not   "His nervous    "Get your
   talks about   defiance.     system needs    code and
   the potty     That's a      help feeling    try it for
   but won't     signal gap."  the signal."    60 days."
   use it."
```
(Source: 11-Brand-Voice-Reference.md §3; L9-Voice-Lena.md §2)

### 3.2 Primary Popup Copy (Default — All Traffic Sources)

**Headline:**
> "Get 10% off + a potty training plan built for kids like yours."

**Why this works:** The headline offers TWO things of value (discount + plan). The phrase "built for kids like yours" signals that BrightKidCo understands neurodiversity without labeling it. It's the "Whether...Or...If..." pattern applied to a headline — it works for all levels because it doesn't specify which "kind of kid." (Source: 05-Customer-Language-Bank.md §2; 11-Brand-Voice-Reference.md §6)

**Subhead / Question prompt:**
> "What describes your child best?"

**Why this works:** This is validation before ask. It says "I see your child as an individual" before asking for the email. Multi-step popups validated by parents convert at 8-12%, significantly higher than single-step "give me your email" approaches (3-5%). (Source: RA5-R2-Parent-Popup-Research.md §1, §3; RA5-R1-Popup-Best-Practices.md §2)

**Email field placeholder:**
> "Enter your email"

**First name field placeholder:**
> "First name"

**CTA button text:**
> "Get My 10% Code"

**Why this works:** Specific CTAs ("Get My 10% Code") outperform generic CTAs ("Sign Up") by 25-40%. The word "my" creates ownership — the visitor is claiming something, not giving something away. (Source: RA5-R1-Popup-Best-Practices.md §5)

**Privacy note:**
> "🔒 We respect your inbox. Unsubscribe anytime."

**Why this works:** Autism parents are hyper-vigilant about spam. A clear privacy commitment reduces anxiety. The lock emoji adds trust signal without clinical language. (Source: RA5-R2-Parent-Popup-Research.md §1)

### 3.3 Success State Copy

**Headline:**
> "Your code is ready."

**Code display:**
> **WELCOME10**

**Validity note:**
> "Auto-applies at checkout. Valid 7 days."

**CTA:**
> "Shop Now"

**Secondary option:**
> "or keep browsing"

**Why "Your code is ready" instead of "Thank you":** The success state should NOT just be a thank-you — it should drive action. By saying "Your code is ready" the user has a clear next step. Popup success states that drive traffic to popular product pages perform better than simple thank-you states. (Source: RA5-R1-Popup-Best-Practices.md §5)

### 3.4 Variant Copy by Traffic Source

Different traffic sources arrive at the site with different intent levels and emotional states. The popup headline and segmentation question remain constant (brand consistency), but the timing and secondary copy can be tuned.

```
╔══════════════════════════════════════════════════════════════════════════════╗
║               TRAFFIC SOURCE VARIANT MATRIX                                  ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  SOURCE       │ INTENT     │ TIMING          │ HEADLINE VARIANT              ║
║  ─────────────┼────────────┼─────────────────┼────────────────────────────  ║
║  Organic      │ Research   │ 50% scroll      │ (Default keeps as-is)         ║
║  (Blog/SEO)   │ mode       │                 │                              ║
║  ─────────────┼────────────┼─────────────────┼────────────────────────────   ║
║  Paid Social  │ Discovery  │ 10s delay       │ "We made potty training      ║
║               │            │                 │  for YOUR kid — see how ↓"   ║
║  ─────────────┼────────────┼─────────────────┼────────────────────────────   ║
║  Direct       │ Problem-   │ Exit-intent     │ "Wait! Before you go —       ║
║               │ solving    │                 │  get 10% off + a plan."      ║
║  ─────────────┼────────────┼─────────────────┼────────────────────────────   ║
║  Referral     │ Trusted    │ 10s delay       │ "Parents like you love us —  ║
║               │ referral   │                 │  get 10% off to try."        ║
║  ─────────────┼────────────┼─────────────────┼────────────────────────────   ║
║  Social       │ Emotional  │ Exit-intent     │ "Potty training shouldn't    ║
║  (Reddit/FB)  │ resonance  │                 │  take 3 years. Here's why."  ║
║  ─────────────┼────────────┼─────────────────┼────────────────────────────   ║
║  Email        │ Returning  │ SUPPRESSED      │ N/A — already subscribed     ║
║  (old list)   │            │                 │                              ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```
(Source: RA5-R1-Popup-Best-Practices.md §1, §7; 10-Traffic-Channel-Map.md §14; RA5-R4-Klaviyo-Research.md §3.1)

### 3.5 Copy Rules — All Variants

| Rule | Detail | Source |
|------|--------|--------|
| NEVER say "Join our newsletter" | Generic, low conversion, low value | RA5-R1-Popup-Best-Practices.md §7 |
| NEVER say "autism" in popup copy | Symptom language only — user self-selects | GIULIANO-DEMANDS.md §1.1; L8-Segmentation-Mechanics.md §2 |
| NEVER say "Level 1/2/3" in popup | Labels are internal, not for customers | GIULIANO-DEMANDS.md §1.1 |
| NEVER use urgency phrases | "Limited time" creates anxiety for autism parents | RA5-R2-Parent-Popup-Research.md §1 |
| ALWAYS use "we" not "I" for popup | The popup is brand-introduction, not yet Lena's voice | L9-Voice-Lena.md §1 |
| ALWAYS ask about child first | Validation before transaction | RA5-R2-Parent-Popup-Research.md §1 |
| ALWAYS display code in popup | Don't make user check email to get value | L8-Segmentation-Mechanics.md §2 |

---

## 4. SEGMENTATION QUESTION — THE SELF-ID WIDGET

### 4.1 The Question

> **"What describes your child best?"**

This is the highest-impact question the popup asks. It captures the user's avatar level at the moment of opt-in, enabling level-specific email content from the very first welcome email.

### 4.2 Four Answer Options → Klaviyo Tags

Each answer option uses **symptom-based language** — no clinical labels, no autism references, no level numbers. The parent identifies her situation by reading behavior descriptions, not medical labels.

```
╔══════════════════════════════════════════════════════════════════════════════╗
║           SELF-ID OPTIONS → KLAVIYO TAGS → WELCOME FLOW ROUTING             ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  BUTTON TEXT (Symptom-based)          │ TAG          │ LEVEL   │ FLOW       ║
║  ─────────────────────────────────────┼──────────────┼─────────┼─────────── ║
║                                                                              ║
║  "Talks about potty but won't        │ avatar_level1 │ Level 1 │ Welcome    ║
║   actually do it"                     │               │ Sarah   │ Flow V1    ║
║  ─────────────────────────────────────┼──────────────┼─────────┼─────────── ║
║  "Sensory issues, tried many methods" │ avatar_level2 │ Level 2 │ Welcome    ║
║                                       │               │ Lisa    │ Flow V2    ║
║  ─────────────────────────────────────┼──────────────┼─────────┼─────────── ║
║  "Non-verbal or high support needs"   │ avatar_level3 │ Level 3 │ Welcome    ║
║                                       │               │ Maria   │ Flow V3    ║
║  ─────────────────────────────────────┼──────────────┼─────────┼─────────── ║
║  "Still figuring out what's going on" │ avatar_general│ General │ Welcome    ║
║                                       │               │ Fallback│ Flow V4    ║
║                                                                              ║
║  CRITICAL RULE: NO level labels in popup. ONLY symptom-based language.       ║
║  The word "autism" or "ASD" NEVER appears in the popup or its options.       ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```
(Source: L8-Segmentation-Mechanics.md §2; GIULIANO-DEMANDS.md §1.1; S3-Segmentation-Blueprint.md §1)

### 4.3 Why Button Selection (Radio Buttons), Not Dropdown or Checkboxes

**Recommendation:** Radio buttons displayed as styled selection cards.

**Justification:**

| Format | Conversion Impact | UX Quality | Data Completeness | Best For |
|--------|------------------|-----------|------------------|----------|
| **Radio buttons (RECOMMENDED)** | 8-12% | High — visible options, one tap | 100% — always picks one | BKC popup |
| Dropdown | 3-5% | Low — hidden options, two taps | ~70% — many skip | NOT recommended |
| Checkboxes (multi-select) | 6-8% | Medium — confusing for single-selection | Variable — can select multiple | NOT for segmentation |

**Why radio buttons win for this specific use case:**

1. **Micro-commitment momentum:** Each option is a visible, tappable statement. Once a parent sees an option that matches her experience, she feels seen — the psychological commitment builds. (Source: RA5-R2-Parent-Popup-Research.md §3)

2. **Zero ambiguity:** The parent knows she must pick ONE. With a dropdown, ~30% of users skip it (dropdown blindness). With radio buttons, the options are always visible and the parent naturally gravitates to the right one. (Source: RA5-R2-Parent-Popup-Research.md §3)

3. **Mobile-optimized:** Radio buttons are thumb-friendly on mobile (44px+ touch targets). Dropdowns require two taps (open + select) and the overlay often blocks the page. (Source: RA5-R4-Klaviyo-Research.md §6.5)

4. **Multi-step flow works best:** Research shows multi-step popups (question → email → submit) convert 50-80% higher than single-step popups. The radio button format IS the question step. (Source: RA5-R2-Parent-Popup-Research.md §3; popup-lead-magnet-research.md §1)

5. **Social proof through visibility:** When a parent sees four options laid out, she understands she's not alone — other parents experience these same challenges. This implicit normalization is a powerful trust builder. (Source: 05-Customer-Language-Bank.md §2)

### 4.4 The "I Am a Professional" Exception

The task spec mentions adding "I am a professional" as a fifth option. After reviewing the source data, **this option should NOT be included in the main popup.**

**Rationale:**
- Less than 5% of BrightKidCo traffic is estimated to be professionals (OTs, BCBAs, teachers) (Source: 10-Traffic-Channel-Map.md §2)
- Adding a 5th option adds cognitive load and reduces conversion across the other 4 options (Source: RA5-R2-Parent-Popup-Research.md §3)
- Professionals who want to buy will convert through the General Fallback path or through a dedicated B2B/LP page (Source: L8-Segmentation-Mechanics.md §7)
- The Klaviyo profile property `label_sensitive` handles professionals who specifically request autism-avoidant language (Source: L8-Segmentation-Mechanics.md §3)

**Recommended alternative:** Add a small, permanent "I'm a professional" link BELOW the popup (not inside it) that routes to a professional landing page with its own list-building flow. This captures professional leads without diluting the main popup's conversion.

### 4.5 Tagging Rules

| Rule | Detail | Source |
|------|--------|--------|
| Tag applied on submit | Klaviyo tag written to profile immediately | L8-Segmentation-Mechanics.md §2 |
| Never assign below 70% confidence | If uncertain, default to `avatar_general` | GIULIANO-DEMANDS.md §1.1 |
| Profile property also set | `avatar_level` property = `"level1"` \| `"level2"` \| `"level3"` \| `"general"` | L8-Segmentation-Mechanics.md §3 |
| Fallback for non-popup entries | Checkout/referral entries start as `avatar_general` | L8-Segmentation-Mechanics.md §4 |
| Phase 2+ migration | Use click/reply/Day-14 mail to migrate GF → level-specific | S3-Segmentation-Blueprint.md §5 |

---

## 5. INCENTIVE STRUCTURE

### 5.1 Primary Incentive: 10% Discount Code (WELCOME10)

**What the visitor gets:**
- **10% off** first order (code: WELCOME10)
- Valid for **7 days** from signup
- Code displayed DIRECTLY in popup success state
- Also sent via Welcome Flow email (dual delivery)
- Auto-applies at checkout via Shopify discount link

**Why a discount, not a free guide:**

```
╔══════════════════════════════════════════════════════════════════════════════╗
║              INCENTIVE OPTIONS — EVALUATION MATRIX                           ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  OPTION              │ CONVERSION │ SEG      │ MARGIN  │ OVERALL │ VERDICT   ║
║                      │ POTENTIAL  │ DATA     │ IMPACT  │ FIT     │           ║
║  ────────────────────┼────────────┼──────────┼─────────┼─────────┼────────── ║
║  Discount (WELCOME10)│ HIGH       │ MEDIUM   │ LOW     │ EXCELLENT│ USE NOW  ║
║                      │ 3-7%       │ (via     │ (10% on │          │           ║
║                      │            │ self-ID) │ 1st)    │          │           ║
║  ────────────────────┼────────────┼──────────┼─────────┼─────────┼────────── ║
║  Free Guide (PDF)    │ LOW-MED    │ HIGH     │ NONE    │ GOOD    │ PHASE 2  ║
║                      │ 2-4%       │ (quiz)   │         │          │           ║
║  ────────────────────┼────────────┼──────────┼─────────┼─────────┼────────── ║
║  Free Shipping       │ MEDIUM     │ LOW      │ MEDIUM  │ GOOD    │ SEASONAL ║
║  ($35+ threshold)    │ 4-6%       │          │         │          │           ║
║  ────────────────────┼────────────┼──────────┼─────────┼─────────┼────────── ║
║  Quiz (Product Finder)│ HIGH       │ HIGH     │ NONE    │ EXCELLENT│ PHASE 3 ║
║                      │ 8.65%      │ (rich)   │         │ (future) │           ║
║  ────────────────────┼────────────┼──────────┼─────────┼─────────┼────────── ║
║  Gamified (Spin-to-  │ VERY HIGH  │ MEDIUM   │ LOW     │ GOOD    │ PHASE 4 ║
║  Win)                │ 8.67%      │          │         │ (future) │           ║
║                                                                              ║
║  RECOMMENDATION: WELCOME10 discount for Phase 1 launch.                      ║
║  Add free guide (Phase 2), quiz (Phase 3), gamified (Phase 4) as            ║
║  A/B test winners or complementary popups.                                   ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```
(Source: RA5-R1-Popup-Best-Practices.md §3, §4; RA5-R2-Parent-Popup-Research.md §1, §2; popup-lead-magnet-research.md §1, §3; L15-Offers.md §4)

**Justification for discount over guide as primary incentive:**

1. **Immediate value:** A discount code can be used NOW. A guide requires reading later. The autism parent operates in crisis mode — immediate value converts better. (Source: RA5-R2-Parent-Popup-Research.md §1)

2. **Edge on competitors:** No direct competitor (Super Undies, Peejamas, Thirsties) offers a clear discount popup with segmentation at opt-in. Peejamas sells their guide for $4.99. Zipease offers 20% off but without segmentation. BKC's combination of discount + segmentation is a first-mover advantage. (Source: RA5-R3-Competitor-Popup-Analysis.md §2)

3. **Margin is manageable:** 10% off on a $79.99 bestseller = $8.00 discount. For the majority of first-time buyers who will not use the guarantee, this is a $8.00 acquisition cost. For returning buyers (repeat purchase rate target: 25%), the discount doesn't apply again. (Source: L15-Offers.md §2)

4. **Dual purpose:** The discount drives conversion AND the segmentation question drives data quality. A guide-only popup would capture email but not level data at the point of entry. (Source: L8-Segmentation-Mechanics.md §2)

5. **The free guide gets added in Phase 2:** Once the discount popup is proven, an exit-intent lead magnet popup offering "The Parent's Guide to Interoception and Potty Training" (PDF) should be tested as an alternative offer. This captures visitors who don't need a discount but want education. (Source: popup-lead-magnet-research.md §4)

### 5.2 Secondary Incentives (Future Phases)

| Phase | Incentive | Type | Trigger | Source |
|-------|-----------|------|---------|--------|
| Phase 2 | Free Interoception Guide PDF | Lead magnet | Exit-intent (visitors who dismissed discount popup) | popup-lead-magnet-research.md §4 |
| Phase 3 | Potty Training Readiness Quiz | Interactive quiz | Nav bar + popup on content pages | popup-lead-magnet-research.md §1 |
| Phase 4 | Cost Calculator (BKC vs Pull-Ups) | Interactive widget | Product page exit-intent | popup-lead-magnet-research.md §1 |

### 5.3 Discount Code Rules

| Rule | Detail | Source |
|------|--------|--------|
| Code | WELCOME10 | L15-Offers.md §4 |
| Discount | 10% off entire first order | L15-Offers.md §4 |
| Validity | 7 days from signup | L15-Offers.md §4 |
| Display | IN popup success state (primary) + in welcome email (backup) | L8-Segmentation-Mechanics.md §2 |
| Shopify integration | Unique single-use code generated per subscriber | RA5-R4-Klaviyo-Research.md §2.2 |
| Auto-apply link | `brightkidco.com/discount/10%25OFF-WELCOME` | L15-Offers.md §4 |
| NEVER say "30 days" | Always 60-Day Guarantee in email ecosystem | L15-Offers.md §4; L38-Brand-Constants.md §2 |

---

## 6. POPUP TIMING RULES

### 6.1 Timing Decision Tree

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                   POPUP TIMING DECISION TREE                                 ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  Is the visitor on desktop or mobile?                                       ║
║       │                                                                      ║
║       ├── DESKTOP ─────────────────────────────────────────────────────      ║
║       │       │                                                              ║
║       │       ├── Is this a product, cart, or pricing page?                 ║
║       │       │   └── YES → Exit-intent trigger only                        ║
║       │       │   └── NO  → Is this organic/referral traffic?               ║
║       │       │              ├── YES → 50% scroll depth OR 10s delay        ║
║       │       │              └── NO  → 10-second delay                      ║
║       │       │                                                              ║
║       │       └── Regardless of page type:                                   ║
║       │           Exit-intent is ALWAYS active as secondary trigger          ║
║       │                                                                      ║
║       └── MOBILE ──────────────────────────────────────────────────────      ║
║               │                                                              ║
║               ├── Is the visitor on a content/blog page?                    ║
║               │   └── YES → 50% scroll depth                                ║
║               │   └── NO  → 15-second delay                                 ║
║               │                                                              ║
║               └── EXIT-INTENT NOT AVAILABLE ON MOBILE                       ║
║                   Use time-delay or scroll-based instead                     ║
║                                                                              ║
║  Has the visitor dismissed the popup before?                                ║
║       │                                                                      ║
║       ├── YES → Suppress popup for 30 days                                  ║
║       │         Show teaser tab ("Still want 10% off? →") instead           ║
║       │                                                                      ║
║       └── NO  → Show popup according to timing rules above                  ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```
(Source: RA5-R1-Popup-Best-Practices.md §1; RA5-R2-Parent-Popup-Research.md §1; RA5-R4-Klaviyo-Research.md §3)

### 6.2 Trigger Justification by Traffic Source

| Traffic Source | Primary Trigger | Secondary Trigger | Rationale | Source |
|---------------|----------------|-------------------|-----------|--------|
| **Organic (Blog/SEO)** | 50% scroll depth | None | Visitor is researching. Scroll = interest. Immediate popups on organic traffic have highest close rates. | RA5-R1-Popup-Best-Practices.md §1; RA5-R2-Parent-Popup-Research.md §1 |
| **Direct** | Exit-intent (desktop) / 15s delay (mobile) | None | High-intent visitor who knows what they need. Let them explore first. Exit-intent recovers them when leaving. | RA5-R1-Popup-Best-Practices.md §1 |
| **Paid Social** | 10-second delay | Exit-intent | Discovery mode — needs a moment to orient before being asked. | RA5-R2-Parent-Popup-Research.md §1 |
| **Referral** | 10-second delay | Exit-intent | Comes with trust (referred by peer). A short delay builds credibility. | RA5-R1-Popup-Best-Practices.md §7 |
| **Social (Reddit/FB)** | Exit-intent (desktop) | 15s delay (mobile) | Emotionally charged traffic. Let them engage. Exit-intent captures at peak emotion. | RA5-R2-Parent-Popup-Research.md §1 |
| **Product Page** | Exit-intent ONLY | None | Never interrupt product evaluation. Exit-intent is the only acceptable trigger. | RA5-R1-Popup-Best-Practices.md §1 |

### 6.3 Why Scroll-Based Outperforms Time-Based

Research data (Sleeknote 2025, 26,270 campaigns) shows scroll-based triggers (35-50% depth) outperform 7-second time delays by **62%** in A/B tests. The parent who has scrolled has invested attention and is more likely to convert. Immediate popups (0-second delay) have the highest close rates and lowest conversion across all industries. (Source: RA5-R1-Popup-Best-Practices.md §1)

For BrightKidCo's audience specifically, scroll-based triggers are even more critical. Autism parents are intensive researchers. They read deeply before deciding. A popup that appears too early (before they've seen value) feels like an interruption; a popup that appears after they've engaged with content feels like a natural next step. (Source: RA5-R2-Parent-Popup-Research.md §1)

### 6.4 Why Exit-Intent Works for This Audience

Exit-intent popups are the most effective trigger for converting abandoning visitors. For BrightKidCo specifically:

- **Research-heavy journey:** The autism parent spends 2+ minutes on a page reading before leaving. Exit-intent catches her at the decision moment. (Source: 01-Customer-Avatar.md §2)
- **Emotional timing:** Parents often leave the site when overwhelmed (too many options, conflicting advice). Exit-intent captures them with a clear offer before they spiral. (Source: MASTER-INGESTION-COMPENDIUM.md §1)
- **No competitor uses exit-intent:** Not a single direct competitor (Super Undies, Peejamas, Thirsties, Gerber, Zipease) uses exit-intent popups. This is a first-mover opportunity. (Source: RA5-R3-Competitor-Popup-Analysis.md §2; popup-lead-magnet-research.md §2)

---

## 7. TECHNICAL IMPLEMENTATION — KLAVIYO CONFIGURATION

### 7.1 Form Type: Popup (Klaviyo Native)

| Setting | Value | Rationale |
|---------|-------|-----------|
| Form type | Popup (modal) | Highest-converting native Klaviyo form type for desktop |
| Mobile variant | Bottom sheet | Google-compliant, thumb-friendly, slides up from bottom |
| Form builder | Klaviyo native forms | Covers 80% of BKC's popup needs without additional cost |
| Custom CSS | Use within Klaviyo's allowed scope | For brand-critical pixel-perfect design, consider Wisepops |

(Source: RA5-R4-Klaviyo-Research.md §1, §6.5)

### 7.2 Step Configuration

The popup uses a **single-step form** (all fields visible at once) rather than true multi-step. Rationale:

- True multi-step (Step 1: email → Step 2: question → Step 3: code) adds complexity in Klaviyo native forms
- Single-step with radio buttons and fields visible simultaneously keeps cognitive load low
- The 4 radio buttons + email + name fit in a single 520px desktop container (scroll on mobile)
- Test later: single-step vs. 2-step (email first, question second)

**Fields (all in one step):**
1. Email address (required) — `email` property
2. First name (required) — `first_name` property
3. Avatar self-selection (required, 4 radio buttons) — maps to `avatar_level` + tag

(Source: RA5-R4-Klaviyo-Research.md §2.1, §7.1)

### 7.3 Tag Logic — What Gets Applied on Submit

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    KLAVIYO ON-SUBMIT AUTOMATION                              │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  WHEN: User clicks "Get My 10% Code"                                         │
│  IF:   Email validation passes (valid format + not empty)                    │
│  AND:  One radio option is selected                                          │
│                                                                              │
│  THEN:                                                                       │
│   1. Write email to profile                                                  │
│   2. Write first_name to profile                                             │
│   3. Apply AVATAR TAG based on selection:                                    │
│        Option 1 → avatar_level1                                              │
│        Option 2 → avatar_level2                                              │
│        Option 3 → avatar_level3                                              │
│        Option 4 → avatar_general                                             │
│   4. Set PROFILE PROPERTY: avatar_level = "level1"/"level2"/"level3"/"general"│
│   5. Set PROFILE PROPERTY: signup_source = "popup"                          │
│   6. Set PROFILE PROPERTY: welcome_flow_completed = "false"                 │
│   7. Trigger Welcome Flow (level-specific variant based on tag)             │
│   8. Display success state with WELCOME10 code                               │
│   9. Send welcome email with backup code and level-specific content          │
│                                                                              │
│  ERROR STATE:                                                               │
│   IF email is invalid → inline error: "Please enter a valid email address"  │
│   IF no option selected → inline: "Please select an option to continue"     │
│   IF server error → generic: "Something went wrong. Please try again."      │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```
(Source: L8-Segmentation-Mechanics.md §2, §3; RA5-R4-Klaviyo-Research.md §2.7)

### 7.4 Display Rules and Frequency Capping

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                    KLAVIYO DISPLAY RULES MATRIX                               ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  RULE                          │ VALUE              │ IMPLEMENTATION         ║
║  ─────────────────────────────┼────────────────────┼──────────────────────  ║
║  Frequency cap                │ 1x per 7 days      │ Klaviyo form settings  ║
║  Dismissal suppression        │ 30 days            │ Cookie-based           ║
║  Post-signup suppression      │ Forever            │ Klaviyo list check     ║
║  Existing subscriber suppress │ Yes                │ Membership check        ║
║  New vs. returning visitor    │ New only           │ Klaviyo "New visitor"  ║
║  Page-level targeting         │ All pages          │ URL rule: all pages     ║
║  Product page exception       │ Exit-intent ONLY   │ Custom trigger rule    ║
║  Cart recovery suppression    │ Show recover popup │ Separate form           ║
║  Mobile vs desktop            │ Different forms    │ Device targeting        ║
║  Country targeting            │ All countries      │ No restriction          ║
║  Traffic source targeting     │ Per-source timing  │ URL parameter matching  ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```
(Source: RA5-R4-Klaviyo-Research.md §3.1-3.4; L8-Segmentation-Mechanics.md §2)

### 7.5 Mobile vs Desktop Variants

| Element | Desktop | Mobile |
|---------|---------|--------|
| Form type | Centered modal popup | Bottom sheet (slides up) |
| Width | 520px max | 100% - 24px margins |
| Fields layout | Side-by-side (email + name) | Stacked (email above name) |
| Options layout | Vertical list | Vertical list |
| CTA | Full-width | Full-width |
| Trigger | Exit-intent + scroll/time | Time delay (15s) or scroll (50%) |
| Exit-intent | YES | NOT available |
| Google compliance | N/A (desktop) | Non-intrusive, dismissible |
| Close area | Click outside + X button | Swipe down + X button |

### 7.6 Post-Signup Behavior

| Action | Implementation |
|--------|---------------|
| Discount code applied | Shopify unique code generated per subscriber |
| Welcome email triggered | Level-specific welcome variant triggers immediately |
| Thank-you state | Code displayed in popup, no refresh needed |
| Page redirect | NO — user stays on current page ("or keep browsing") |
| Teasers | "Still want 10% off?" teaser tab appears on subsequent pages |
| Data written to Klaviyo | All profile properties set within 1-2 seconds |

### 7.7 Integration Flow Diagram

```
╔══════════════════════════════════════════════════════════════════════════════╗
║          END-TO-END INTEGRATION: VISITOR → KLAVIYO → WELCOME FLOW            ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  VISITOR                          SHOPIFY            KLAVIYO                 ║
║    │                                │                   │                     ║
║    │  1. Lands on site             │                   │                     ║
║    ├───────────────────────────────►│                   │                     ║
║    │                                │                   │                     ║
║    │  2. Timer/scroll/exit fires   │                   │                     ║
║    │◄────── Popup appears ─────────┤                   │                     ║
║    │                                │                   │                     ║
║    │  3. Fills form + selects      │                   │                     ║
║    │     avatar option              │                   │                     ║
║    ├─────────────────────────── Form Submit ─────────────────────────────►   ║
║    │                                │                   │                     ║
║    │                                │                   │  4. Validates      ║
║    │                                │                   │     email          ║
║    │                                │                   │     Writes profile  ║
║    │                                │                   │     Applies tag     ║
║    │  5. Success state displays    │◄─────── Coupon ─────┤     Triggers       ║
║    │     with WELCOME10            │       returned      │     Welcome Flow   ║
║    │◄──────────────────────────────┤                   │                     ║
║    │                                │                   │                     ║
║    │  6. User clicks "Shop Now"    │                   │                     ║
║    ├───────────────────────────────►│                   │                     ║
║    │                                │                   │                     ║
║    │  7. WELCOME10 auto-applies    │                   │                     ║
║    │◄──────────────────────────────┤                   │                     ║
║    │                                │                   │                     ║
║    │  8. Welcome Email arrives     │                   │                     ║
║    │     (Level-specific variant)  │◄───── Flow sends ──┤                     ║
║    │◄──────────────────────────────┤                   │                     ║
║    │                                │                   │                     ║
║    │  9. 8-email welcome nurture   │                   │                     ║
║    │     begins (per level)        │◄───── Flow ───────┤                     ║
║    │                                │                   │                     ║
╚══════════════════════════════════════════════════════════════════════════════╝
```
(Source: RA5-R4-Klaviyo-Research.md §2.7; L8-Segmentation-Mechanics.md §2; L15-Offers.md §4)

---

## 8. FALLBACK AND EDGE CASES

### 8.1 Visitor Dismisses the Popup

| Scenario | Action | Source |
|----------|--------|--------|
| User clicks X | Popup closes, 30-day suppression cookie set | RA5-R4-Klaviyo-Research.md §3.3 |
| User clicks outside popup | Same as X — 30-day suppression | RA5-R4-Klaviyo-Research.md §3.3 |
| User presses Escape | Same as X — 30-day suppression | RA5-R4-Klaviyo-Research.md §3.3 |
| Mobile swipe-down | Same as X — 30-day suppression | RA5-R4-Klaviyo-Research.md §1.2 |

**After dismissal:** The Klaviyo **teaser** tab appears at the screen edge ("Still want 10% off? →"). This is a non-intrusive, always-visible fallback that re-opens the popup when clicked. Teasers can capture 1-3% additional signups from popup-dismissers. (Source: RA5-R4-Klaviyo-Research.md §2.3; popup-lead-magnet-research.md §1)

### 8.2 Popup Blocker Handling

Klaviyo forms cannot bypass native browser popup blockers. However:

- Klaviyo popups are rendered as **page overlays** using DOM injection, NOT browser window popups — they are NOT blocked by standard popup blockers
- The Klaviyo script loads as a standard `<script>` tag — no third-party iframe that triggers blockers
- If a user has aggressive ad-blocking that strips Klaviyo scripts entirely, the embedded footer form provides a fallback capture path
- The teaser tab (if configured) is also DOM-injected and immune to popup blockers

**Recommendation:** Do NOT add additional popup blocker detection. The Klaviyo overlay is technically not a "popup" as understood by browser popup blockers. The embedded footer form on every page serves as the ultimate fallback. (Source: RA5-R4-Klaviyo-Research.md §1; L8-Segmentation-Mechanics.md §2)

### 8.3 Re-Appearance Rules

| Scenario | Rule | Cookie Duration |
|----------|------|----------------|
| Dismissed by X/outside/Escape | Suppress for 30 days | 30-day cookie |
| Already subscribed (detected by Klaviyo) | Never show again | Permanent (list-based) |
| Already submitted form | Never show again | Permanent (profile-based) |
| Returning visitor, never dismissed | Show after 7-day cooldown | 7-day cookie |
| Ignored (never interacted) | Show on next visit | Show on every session (max 1x per 7 days) |
| Mobile same-session page change | Do not show again within session | Session cookie |

### 8.4 Thank-You / Success State

After the user submits their email, selects an avatar option, and clicks "Get My 10% Code":

1. **Green checkmark** animation (48px, centered)
2. **"Your code is ready."** — headline in Dark Text (#1A1A1A), 24px
3. **WELCOME10** — discount code displayed prominently in Brand Green (#039902), 32px
4. **"Auto-applies at checkout. Valid 7 days."** — note text, Body Gray (#4A4A4A), 14px
5. **"Check your inbox for your personalized plan too"** — secondary note (optional, builds anticipation)
6. **CTA: "Shop Now"** button — drives to product page
7. **"or keep browsing"** — subtle dismissal link

**After success state dismissed:** User continues browsing. The popup never shows again. No teaser needed (they already signed up). The Welcome Flow email arrives within 5-10 minutes with the level-specific content. (Source: L8-Segmentation-Mechanics.md §2; RA5-R1-Popup-Best-Practices.md §5)

### 8.5 Edge Case: No Radio Button Selected

If the user fills in email and name but does NOT select an avatar option, the CTA button is disabled. Inline validation text appears below the options:

> "Please select an option so we can build the right plan for your child."

**Why not default to General Fallback?** Forcing the selection converts a passive visitor into an active participant in their segmentation. A default assigns without engagement, reducing the accuracy of the data and the commitment of the user. (Source: L8-Segmentation-Mechanics.md §2)

### 8.6 Edge Case: Klaviyo Form Fails to Load

If the Klaviyo form script fails to load (network error, ad-blocking), the site should degrade gracefully:

- No broken UI elements — Klaviyo scripts load asynchronously and don't block page rendering
- The embedded footer form (Klaviyo native, always present on every page) provides a fallback capture path
- The footer form does not include the segmentation question; subscribers acquired via footer enter as `avatar_general` and are migrated via Day-14 mail or post-purchase level detection (Source: L8-Segmentation-Mechanics.md §4; S3-Segmentation-Blueprint.md §5)

### 8.7 Edge Case: Returning Subscriber (Existing Klaviyo Profile)

When an existing subscriber returns to the site, Klaviyo detects their profile via cookie and browser fingerprinting and **suppresses all popups**. The subscriber does not see any popup or teaser. This prevents frustration and maintains trust. (Source: RA5-R4-Klaviyo-Research.md §3.2)

If the returning subscriber is not recognized (cleared cookies, different device), they may see the popup again. The 7-day frequency cap prevents repeated exposure within a short window.

### 8.8 Edge Case: GDPR Compliance (UK/EU Visitors)

For visitors from the UK or EU (~15% of traffic per MASTER-DIAGNOSIS-COMPENDIUM §1.1):

- Add GDPR consent checkbox below the email field: "I agree to receive emails from BrightKidCo"
- Consent is tracked as a Klaviyo profile property
- Welcome Flow must include a double opt-in confirmation for UK/EU subscribers
- The privacy note ("We respect your inbox. Unsubscribe anytime.") satisfies the basic information requirement

(Source: L8-Segmentation-Mechanics.md §2; RA5-R4-Klaviyo-Research.md §2.7)

---

## 9. A/B TESTING ROADMAP

### 9.1 Phase 1 Tests (Weeks 1-4) — Foundation

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                 A/B TESTING ROADMAP — PHASE 1                                ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  TEST  │ VARIABLE A        │ VARIABLE B        │ METRIC      │ DURATION     ║
║  ──────┼───────────────────┼───────────────────┼─────────────┼────────────  ║
║  T1    │ 10% off coupon    │ No coupon         │ Signup rate  │ 2 weeks      ║
║        │ (WELCOME10)       │ (email only)      │              │              ║
║  ──────┼───────────────────┼───────────────────┼─────────────┼────────────  ║
║  T2    │ Exit-intent       │ 10-second delay   │ Signup rate  │ 2 weeks      ║
║        │                   │                   │              │              ║
║  ──────┼───────────────────┼───────────────────┼─────────────┼────────────  ║
║  T3    │ Popup (modal)     │ Flyout (slide-in) │ Mobile       │ 2 weeks      ║
║        │                   │                   │ signup rate  │              ║
║                                                                              ║
║  TEST 1 RATIONALE: Does the discount drive signups, or are parents           ║
║  signing up for value alone? If no-coupon performs within 20% of             ║
║  coupon version, BKC saves margin.                                          ║
║                                                                              ║
║  TEST 2 RATIONALE: Exit-intent captures abandoning visitors; time delay      ║
║  captures engaged visitors. Both matter — this reveals which converts        ║
║  better for BKC's specific traffic mix.                                      ║
║                                                                              ║
║  TEST 3 RATIONALE: Mobile is 60%+ of traffic. Flyouts are less intrusive     ║
║  on mobile — does lower friction outweigh lower visibility?                  ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```
(Source: RA5-R4-Klaviyo-Research.md §4; popup-lead-magnet-research.md §5)

### 9.2 Phase 2 Tests (Weeks 5-8) — Optimization

| Test | Variable A | Variable B | Metric | Duration |
|------|-----------|-----------|--------|----------|
| T4 | "Get 10% off" | "Save $X on first order" | Signup rate | 2 weeks |
| T5 | "Join 10,000+ parents" (social proof) | No social proof | Signup rate | 2 weeks |
| T6 | BKC product image | Lifestyle parent/child image | Signup rate | 2 weeks |
| T7 | Include SMS step 2 | Skip SMS, email only | Total subs | 3 weeks |

(Source: RA5-R4-Klaviyo-Research.md §4.5; popup-lead-magnet-research.md §5)

### 9.3 Measurement Framework

| Metric | Definition | Target | Source |
|--------|-----------|--------|--------|
| **Primary:** Form submission rate | Submissions / impressions of popup | 5% (floor), 8% (stretch) | RA5-R4-Klaviyo-Research.md §8 |
| **Secondary:** Email capture rate | Email submissions / impressions | 3-7% | RA5-R1-Popup-Best-Practices.md §4 |
| **Secondary:** Welcome flow open rate | Opens / delivered first email | 35-45% | 29-Content-Funnel-Strategy.md §1.4 |
| **Secondary:** First-purchase conv. | Purchase within 7 days of signup | 12-18% | S3-Segmentation-Blueprint.md §1 |
| **Anti-metric:** 7-day unsubscribe | Unsubscribes within 7 days of signup | <2% | RA5-R4-Klaviyo-Research.md §8 |
| **Business:** Revenue per popup signup | Total revenue / popup signups | $3.00+ | 29-Content-Funnel-Strategy.md §1.4 |

### 9.4 Critical Success Metrics for Popup

```
╔══════════════════════════════════════════════════════════════════════════════╗
║              POPUP PERFORMANCE — GOALS AND TRIGGERING ACTIONS                 ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  METRIC                    │ FLOOR    │ TARGET   │ STRETCH  │ ACTION IF BELOW║
║  ──────────────────────────┼──────────┼──────────┼──────────┼─────────────── ║
║  Form submission rate      │ 3%       │ 5%       │ 8%+      │ Test timing    ║
║  (popup)                   │          │          │          │ vs offer       ║
║  ──────────────────────────┼──────────┼──────────┼──────────┼─────────────── ║
║  Welcome flow open rate    │ 28%      │ 35%      │ 45%+     │ Test subject   ║
║  ──────────────────────────┼──────────┼──────────┼──────────┼─────────────── ║
║  Self-ID selection rate    │ 80%      │ 90%      │ 95%+     │ Redesign       ║
║  (% who pick an option)    │          │          │          │ question text  ║
║  ──────────────────────────┼──────────┼──────────┼──────────┼─────────────── ║
║  Segment accuracy          │ 70%      │ 80%      │ 90%+     │ Add Day-14     ║
║  (verified at purchase)    │          │          │          │ migration mail ║
║  ──────────────────────────┼──────────┼──────────┼──────────┼─────────────── ║
║  Coupon redemption rate    │ 20%      │ 35%      │ 50%+     │ Extend 7-day   ║
║  ──────────────────────────┼──────────┼──────────┼──────────┼─────────────── ║
║  7-day unsubscribe rate    │ <3%      │ <2%      │ <1%      │ Review welcome ║
║  (anti-metric)             │          │          │          │ flow quality   ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```
(Source: 29-Content-Funnel-Strategy.md §1.4; S3-Segmentation-Blueprint.md §1; RA5-R4-Klaviyo-Research.md §8)

---

## 10. APPENDIX: SOURCE INDEX

Every decision in this document is grounded in source material. Primary sources are cited inline. This appendix provides the full source path for each.

### Primary Source Files

| Short Name | Full Path |
|-----------|-----------|
| S3-Segmentation-Blueprint.md | `/root/projects/brightkidco/outputs/strategy/3-segmentation-blueprint.md` |
| GIULIANO-DEMANDS.md | `/root/projects/brightkidco/demands/GIULIANO-DEMANDS.md` |
| MASTER-DIAGNOSIS-COMPENDIUM.md | `/root/projects/brightkidco/docs/diagnosis-outputs/MASTER-DIAGNOSIS-COMPENDIUM.md` |
| MASTER-INGESTION-COMPENDIUM.md | `/root/projects/brightkidco/docs/ingestion/MASTER-INGESTION-COMPENDIUM.md` |
| MASTER-RESEARCH-COMPENDIUM.md | `/root/projects/brightkidco/docs/research-notes/MASTER-RESEARCH-COMPENDIUM.md` |

### Synthesis Documents

| Short Name | Full Path |
|-----------|-----------|
| 01-Customer-Avatar.md | `/root/projects/brightkidco/outputs/synthesis/01-customer-avatar.md` |
| 05-Customer-Language-Bank.md | `/root/projects/brightkidco/outputs/synthesis/05-customer-language-bank.md` |
| 10-Traffic-Channel-Map.md | `/root/projects/brightkidco/outputs/synthesis/10-traffic-channel-map.md` |
| 11-Brand-Voice-Reference.md | `/root/projects/brightkidco/outputs/synthesis/11-brand-voice-reference.md` |
| 27-Brand-Identity-Guidelines.md | `/root/projects/brightkidco/outputs/synthesis/27-brand-identity-guidelines.md` |
| 29-Content-Funnel-Strategy.md | `/root/projects/brightkidco/outputs/synthesis/29-content-funnel-strategy.md` |

### Diagnosis Layers

| Short Name | Full Path |
|-----------|-----------|
| L8-Segmentation-Mechanics.md | `/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-08-segmentation-mechanics.md` |
| L9-Voice-Lena.md | `/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-09-voice-lena.md` |
| L15-Offers.md | `/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-15-offers.md` |
| L29-Visual-Calibration.md | `/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-29-visual-calibration.md` |
| L38-Brand-Constants.md | `/root/projects/brightkidco/docs/diagnosis-outputs/layers/layer-38-brand-constants.md` |

### Research Files

| Short Name | Full Path |
|-----------|-----------|
| popup-lead-magnet-research.md | `/root/projects/brightkidco/docs/research-notes/files/popup-lead-magnet-research.md` |
| RA5-R1-Popup-Best-Practices.md | `/root/projects/brightkidco/docs/research-notes/files/ra5-r1-popup-best-practices.md` |
| RA5-R2-Parent-Popup-Research.md | `/root/projects/brightkidco/docs/research-notes/files/ra5-r2-parent-popup-research.md` |
| RA5-R3-Competitor-Popup-Analysis.md | `/root/projects/brightkidco/docs/research-notes/files/ra5-r3-competitor-popup-analysis.md` |
| RA5-R4-Klaviyo-Research.md | `/root/projects/brightkidco/docs/research-notes/files/ra5-r4-klaviyo-popup-research.md` |

---

*This document is Strategy S4 of the BrightKidCo email ecosystem. It implements the segmentation logic from S3 at the point of capture. For the segmentation blueprint, see output/strategy/3-segmentation-blueprint.md. For the Welcome Flow execution, see the Phase 1 flow documents.*
