# Layer 33 — Email Format Requirements: DEFINITIVE SPECIFICATION

**Type:** Final Synthesis (R5)
**Generated:** 2026-05-25
**Sources:** L9 (Voice — Lena), L29 (Visual Calibration), DOC1 (Master Foundation), DOC6 (Usage Guide), Overnight Plan (L33 section, lines 569-577, 1001-1005)
**Note:** L33 R1-R4 output files were not produced. All format requirements were extracted from cross-layer references in L9, L29, DOC1, DOC6, and the overnight plan specification, consolidated in this synthesis.

---

## EXECUTIVE SUMMARY

This document defines the **ONE standard format** every BrightKidCo email deliverable must follow. It is the template for every email handed off to the client. Every downstream email creation task references this specification.

The format covers 9 mandatory sections: Mail Naming, Avatar Tagging, Send Timing, Subject Lines, Preheaders, Mail Body Structure, Lena Sign-Off, Mobile-First Notes, and Klaviyo Implementation Notes.

**Key principles:**
- Every email is delivered as a structured document, not raw copy
- Subject lines and preheaders always come in 3 A/B-test-ready options
- The mail body follows a fixed section hierarchy derived from the Voice Formula (L9)
- Lena sign-off is mandatory and strictly formatted
- Klaviyo implementation notes are included so the email can be deployed without guesswork

---

## TABLE OF CONTENTS

1. [Mail Naming Convention](#1-mail-naming)
2. [Avatar Tagging Requirement](#2-avatar-tagging)
3. [Send Timing Field](#3-send-timing)
4. [Subject Line Format](#4-subject-lines)
5. [Preheader Format](#5-preheaders)
6. [Mail Body Section Structure](#6-mail-body)
7. [Lena Sign-Off Guidelines](#7-lena-signoff)
8. [Mobile-First Notes](#8-mobile-first)
9. [Klaviyo Implementation Notes](#9-klaviyo)
10. [Reusable Email Deliverable Template](#10-template)
11. [Cross-Reference Map](#11-cross-reference)

---

<a name="1-mail-naming"></a>
## 1. MAIL NAMING CONVENTION

### 1.1 Format

```
Mail: [Flow Name] - [Mail Position]
```

### 1.2 Examples

| Mail Name | Flow | Position |
|-----------|------|----------|
| `Mail: Welcome L1 - Mail 1` | Welcome Level 1 | First email in flow |
| `Mail: Welcome L2 - Mail 4` | Welcome Level 2 | Fourth email in flow |
| `Mail: Welcome L3 - Mail 6` | Welcome Level 3 | Sixth email in flow |
| `Mail: Abandoned Cart - Mail 2` | Abandoned Cart | Second email in flow |
| `Mail: Browse Abandonment - Mail 1` | Browse Abandonment | First email in flow |
| `Mail: Post-Purchase - Mail 3` | Post-Purchase | Third email in flow |
| `Mail: Discount Welcome - Mail 1` | Discount Welcome (Flow 2) | First email in flow |
| `Mail: Winback - Mail 5` | Winback | Fifth email in flow |

### 1.3 Rules

- Flow Name matches the exact flow name from the ecosystem architecture (DOC1 §17)
- Mail Position is sequential within the flow (Mail 1, Mail 2, Mail 3...)
- Use an em-dash separator with spaces: ` - ` (not `–` or `-`)
- No abbreviations — write the full flow name
- For flows with level variants, append the level: `Welcome L1`, `Welcome L2`, `Welcome L3`
- Cross-level flows (Cart, Checkout, Browse, Winback) do NOT have level suffixes

**Source:** Overnight Plan §L33 (line 573)

---

<a name="2-avatar-tagging"></a>
## 2. AVATAR TAGGING REQUIREMENT

### 2.1 Format

```
Avatar: [Level]
```

### 2.2 Valid Tags

| Tag | Meaning | Audience Share |
|-----|---------|---------------|
| `Avatar: Level 1` | Sarah — Verbal, 3-5 yrs, hope-intact | ~35% |
| `Avatar: Level 2` | Lisa — Mixed, 5-7 yrs, method-cycling | ~40% |
| `Avatar: Level 3` | Maria — Non-verbal, 6-10+ yrs, resigned | ~25% |
| `Avatar: General` | Cross-level, no clear level | ~50% real volume |

### 2.3 Rules

- Every email MUST have an avatar tag
- Use `General` for cross-level flows (Cart, Checkout, Browse, Winback) and for emails designed to work across all levels
- The avatar tag determines which voice calibration (L9 §9), visual calibration (L29), and forbidden phrases (L9 §5) apply
- Never mix level-specific language in a `General` tag email
- The tag drives Klaviyo segment targeting (DOC1 §19)

**Source:** DOC1 §1 (Avatar Definition), DOC6 §1 (Avatar Segmentation), Overnight Plan §L33

---

<a name="3-send-timing"></a>
## 3. SEND TIMING FIELD

### 3.1 Format

```
Send Timing: [Day X / Hour Y]
```

### 3.2 Examples

| Timing | Meaning |
|--------|---------|
| `Send Timing: Day 0 / Hour 0` | Immediately on trigger (signup, cart abandonment) |
| `Send Timing: Day 1 / Hour 10` | 1 day after trigger, at 10:00 AM recipient local time |
| `Send Timing: Day 3 / Hour 14` | 3 days after trigger, at 2:00 PM recipient local time |
| `Send Timing: Day 7 / Hour 9` | 7 days after trigger, at 9:00 AM recipient local time |
| `Send Timing: Day 14 / Hour 10` | 14 days after trigger, at 10:00 AM |

### 3.3 Rules

- Day 0 = same day as trigger event
- Hours are in recipient's local timezone (Klaviyo handles timezone optimization)
- Standard send windows: 9:00-10:00 AM and 1:00-2:00 PM (avoid early morning, late evening)
- For Level 3 emails: no urgency in timing — spacing is generous (7-14 day gaps)
- For Level 1 emails: tighter spacing is OK (1-3 day gaps) due to Pre-K urgency
- Timing is a recommendation — Klaviyo's Smart Sending may adjust

**Source:** DOC1 §17 (Flow Overview), Overnight Plan §L33

---

<a name="4-subject-lines"></a>
## 4. SUBJECT LINE FORMAT

### 4.1 Format

```
SUBJECT LINES (A/B Test Ready):
A: [Subject Line Option A]
B: [Subject Line Option B]
C: [Subject Line Option C]
```

### 4.2 Character Limits

| Element | Max Length | Recommended |
|---------|-----------|-------------|
| Subject Line | 60 characters | 40-50 characters |
| Mobile Preview | 40 characters | 30-35 characters |

### 4.3 Rules

- Always provide exactly 3 options
- Options should test different angles (curiosity vs. direct vs. emotional)
- Never use ALL CAPS in subject lines (except for approved acronyms like BCBA, OT)
- Never use clickbait or misleading subjects
- Subject lines must match the email's actual content (anti-spam compliance)
- Use the mom's verbatim language (DOC1 §7) when possible
- For Level-specific emails, calibrate subject tone to the level:
  - **Level 1:** Hope-forward, Pre-K-aware ("He talks about the potty but won't use it")
  - **Level 2:** Science-respectful, validation ("The reason sticker charts can't work")
  - **Level 3:** Gentle, dignity-first ("One family's story — no pressure")
  - **General:** Symptom-first, no labels ("If your child doesn't feel when they need to go...")

### 4.4 Subject Line Formulas

| Formula | Example | Best For |
|---------|---------|----------|
| **Observation hook** | "He gets it but doesn't get it" | Phase 2, L1 |
| **Validation hook** | "It wasn't you. It wasn't your child." | Phase 2, L2 |
| **Mechanism tease** | "The reason potty training didn't work" | Phase 3, L2 |
| **Permission frame** | "If you've stepped back from trying..." | Phase 4, L3 |
| **Question hook** | "Why does he say he doesn't need to go?" | Phase 1, General |
| **Social proof** | "16,511 parents. Here's what they learned." | General |

### 4.5 Forbidden Subject Line Patterns

- ❌ Exclamation-mark heavy: "Potty training FINALLY works!!!"
- ❌ ALL CAPS words: "EASY potty training solution"
- ❌ Urgency countdown for Level 3: "Only 24 hours left!"
- ❌ Outcome promises: "Your child WILL be trained"
- ❌ Marketing language: "Amazing breakthrough!"
- ❌ Clickbait: "You won't believe what happened"

**Source:** DOC1 §7 (Verbatim Language), L9 §5 (Forbidden Phrases), Overnight Plan §L33

---

<a name="5-preheaders"></a>
## 5. PREHEADER FORMAT

### 5.1 Format

```
PREHEADERS (A/B Test Ready):
A: [Preheader Option A]
B: [Preheader Option B]
C: [Preheader Option C]
```

### 5.2 Character Limits

| Element | Max Length | Recommended |
|---------|-----------|-------------|
| Preheader Text | 130 characters | 80-100 characters |
| Mobile Preview | 90 characters | 60-80 characters |

### 5.3 Rules

- Always provide exactly 3 options
- Preheaders should complement (not repeat) the subject line
- The preheader is the second line of defense for open rate — treat it as seriously as the subject
- Use the preheader to expand on the subject's hook or add a secondary angle
- Never repeat the subject line verbatim in the preheader
- Preheader must be consistent with email body content

### 5.4 Preheader Formulas

| Formula | Example | Best For |
|---------|---------|----------|
| **Expand on subject** | Subject: "He gets it but doesn't get it" → Pre: "Here's why that's not defiance — it's neurology." | Phase 2 |
| **Add social proof** | Subject: "The reason potty training didn't work" → Pre: "16,511 parents discovered the same thing." | Phase 3 |
| **Permission frame** | Subject: "If you've stepped back..." → Pre: "That's OK. The science will still be here." | Phase 4 |
| **Mechanism hint** | Subject: "Why does he say he doesn't need to go?" → Pre: "It's not stubbornness. His body processes signals differently." | Phase 1 |
| **Emotional validation** | Subject: "It wasn't you." → Pre: "And it wasn't your child. It was the method." | Phase 2 |

**Source:** Overnight Plan §L33

---

<a name="6-mail-body"></a>
## 6. MAIL BODY SECTION STRUCTURE

### 6.1 The Standard Section Hierarchy

Every email body follows this section structure. Not all sections appear in every email — the flow position and phase determine which are included.

```
SECTION 1: [HOOK / OBSERVATION]
SECTION 2: [VALIDATION]
SECTION 3: [MECHANISM / EDUCATION]
SECTION 4: [TESTIMONIAL / SOCIAL PROOF]
SECTION 5: [PRODUCT / OFFER]
SECTION 6: [GUARANTEE / RISK REMOVAL]
SECTION 7: [CTA (Call to Action)]
SECTION 8: [LENA SIGN-OFF]
```

### 6.2 Section Details

#### SECTION 1: Hook / Observation

**Purpose:** Open with what the mom is experiencing. Name her reality.

**Rules:**
- Use verbatim language from the mom's world (DOC1 §7, RS PDFs)
- Never start with the product — start with her
- For Phase 1: gentle observation ("Many parents notice...")
- For Phase 2: validation hook ("Sticker chart didn't work, did it?")
- For Phase 3: science hook ("You've tried everything. We're not going to tell you this is magic.")
- For Phase 4: dignity hook ("If you've stepped back from trying — I get it.")

**Length:** 2-4 sentences

**Voice Rule:** V1 (Peer-to-peer), V7 (Validate before solving)

---

#### SECTION 2: Validation

**Purpose:** Absolve guilt. It wasn't her. It wasn't her child. It was the method.

**Rules:**
- Name the failed method specifically (Oh Crap, sticker charts, naked method, timers)
- Reframe the failure as neurological, not behavioral
- Never imply she could have done more
- For Level 1: light validation (1-3 methods)
- For Level 2: deep validation (3-5+ methods, name BCBA specifically)
- For Level 3: maximum validation (years of ABA, consultants, specialists)

**Length:** 2-5 sentences

**Voice Rule:** V7 (Always validate failed attempts before proposing mechanism)

**Approved Phrases:**
- "It wasn't you. It wasn't your child. It was the method."
- "That's not defiance. That's a signal-timing gap."
- "His nervous system processes signals differently."

---

#### SECTION 3: Mechanism / Education

**Purpose:** Explain WHY neurologically. Give her the science.

**Rules:**
- Mechanism specificity over brand promises (V11)
- Use interoception science (Kelly Mahler, SPARK)
- Frame as "his nervous system works differently" — never as "the product fixes"
- For Phase 1: gentle education — "here's why"
- For Phase 2: validation + mechanism — "it wasn't you, here's why"
- For Phase 3: science-first with citations (Kelly Mahler, SPARK, BCBA)
- For Phase 4: gentle, no energy push

**Length:** 3-8 sentences (varies by phase)

**Voice Rule:** V11 (Mechanism specificity), V13 (Science-first), V10 (Autism is identity)

**Approved Phrases:**
- "His nervous system processes the signal — just too late."
- "Interoception is the ability to feel internal body signals. Some kids process those signals differently."
- "49% of autistic 4-5 year olds aren't trained." (SPARK study — cite as authority)

---

#### SECTION 4: Testimonial / Social Proof

**Purpose:** Show her she's not alone. Other parents walked this path.

**Rules:**
- Use real parent stories from RS PDFs and Parent Stories page
- Include specific details (age, method tried, timeline)
- For Level 1: short-medium testimonials (3-8 sentences), "almost trained" stories
- For Level 2: long testimonials (10-15 sentences), BCBA-respectful, messy details
- For Level 3: long + messy testimonials (12-18 sentences), late-trainer stories (Maureen Bennie's son, 9.5 years)
- For General: medium testimonials (variable), three-family format (migration anchors)

**Length:** 3-18 sentences (varies by level)

**Voice Rule:** V1 (Peer-to-peer — the testimonial IS the peer voice)

**Trust Mechanic Pyramid (ranked by power):**
1. Peer-mom testimonial (specific, relatable)
2. OT/Therapist co-sign (clinical validation)
3. Before/after with micro-wins (credible expectation)
4. Number of reviews (16,511 · 4.9★)
5. Kelly Mahler citation (authority)

---

#### SECTION 5: Product / Offer

**Purpose:** Introduce the product as a body-signal learning tool, not a cure.

**Rules:**
- Frame as "adds the body-signal layer" — never as "fixes potty training"
- Present offers with pricing:

| Offer | Price | Badge | Save Tag |
|-------|-------|-------|----------|
| 1 Pair | $34.99 | — | — |
| 3+3 FREE | $79.99 | BESTSELLER | Save 40% TODAY |
| 5+5 FREE | $119.99 | BEST VALUE | Save 60% TODAY |

- Pricing display: `$34.99` (not `34.99$`), `$79.99` (not `$79,99`)
- Bundle notation: "3 + 3 FREE" with spaces around +
- "FREE" always in caps when used as offer modifier
- For Level 1: default 3+3 bundle, Pre-K urgency OK
- For Level 2: default 3+3 bundle, no urgency framing
- For Level 3: default 1 pair (trial framing), very low price prominence, Medicaid sensitivity
- For General: default 3+3 bundle, balanced presentation

**Length:** 2-4 sentences + pricing table

**Source:** DOC6 §5 (Brand Constants), L29 §1.7

---

#### SECTION 6: Guarantee / Risk Removal

**Purpose:** Remove the financial risk. Permission to try.

**Rules:**
- Always "60-Day Money Back" — NEVER 30 (V8)
- Frame as permission, not as a sales tactic
- For Level 1: "60 days. Pre-K in [X] months. You have time."
- For Level 2: "Try it for 60 days. By your judgment."
- For Level 3: "No pressure. If something shifts, it shifts. If not, you've done right."
- For General: "60 days to try it. By your judgment."

**Length:** 1-3 sentences

**Voice Rule:** V8 (60-day guarantee, never 30), V12 (Permission-not-to-buy creates trust)

**Approved Phrases:**
- "Try it for 60 days. By your judgment."
- "60-Day Money Back. Whether or not, you've been doing the right thing."

---

#### SECTION 7: CTA (Call to Action)

**Purpose:** Give her a clear, low-pressure next step.

**Rules:**
- CTA calibration varies by level:

| Level | Aggressiveness | Copy Style | Button |
|-------|---------------|------------|--------|
| Level 1 | Medium | Soft — "Learn more about how body signals work" | Full-width mobile, pill-shaped, Brand-Green |
| Level 2 | Low | Medium — "See the science behind the body-signal learning layer" | Full-width mobile, pill-shaped, muted green/mint |
| Level 3 | Very Low | Super gentle — "Read one family's story" or "Bookmark for when you're ready" | Text links OK, muted cream/gray if button |
| General | Medium-Low | Universal — "If your child doesn't feel when they need to go..." | Full-width mobile, pill-shaped, balanced green |

- Minimum CTA button height: 48px
- CTA links to: All Products page (`brightkidco.com/collections/all-products`) or Primary PDP
- For Level 3: text links preferred over buttons; if buttons exist, muted styling
- Urgency elements:
  - Level 1: ALLOWED — countdown, "before school" framing OK
  - Level 2: NONE — event-driven only
  - Level 3: ZERO — triggers deep distrust
  - General: Low-Medium

**Voice Rule:** V12 (Permission-not-to-buy)

**Source:** L29 §2.5, §3.5, §4.5, §5.5

---

### 6.3 Section Variation by Flow Type

| Flow Type | Sections Included | Notes |
|-----------|-------------------|-------|
| **Welcome (Mail 1-2)** | Hook → Validation → Mechanism → CTA | No product/offer in first emails |
| **Welcome (Mail 3-4)** | Hook → Validation → Mechanism → Testimonial → Product → CTA | Build trust before selling |
| **Welcome (Mail 5-6)** | Hook → Validation → Mechanism → Testimonial → Product → Guarantee → CTA | Full structure |
| **Abandoned Cart** | Hook → Validation → Product → Guarantee → CTA | Shorter, conversion-focused |
| **Abandoned Checkout** | Hook → Validation → Product → Guarantee → CTA | Similar to cart, slightly longer |
| **Browse Abandonment** | Hook → Mechanism → Product → CTA | Light touch |
| **Post-Purchase** | Hook → Validation → Mechanism → Testimonial → CTA | No offer — she already bought |
| **Winback** | Hook → Validation → Mechanism → Testimonial → Product → Guarantee → CTA | Full structure, Phase 4 voice |
| **Discount Welcome (Flow 2)** | Code delivery → Mechanism → Story → Guarantee closer | 4 emails, discount-focused |

**Source:** DOC1 §17 (Flow Overview), DOC6 §3 (Which Doc for which Mail)

---

<a name="7-lena-signoff"></a>
## 7. LENA SIGN-OFF GUIDELINES

### 7.1 Format

```
[Closing Word],
Lena
Customer Support · Mom of two autistic sons

P.S. [P.S. line 1]
P.S. [P.S. line 2 — optional]
```

### 7.2 Rules (V2)

- Every email MUST end with a Lena sign-off — no exceptions
- Sign-off body: maximum 2-3 sentences
- P.S.: maximum 2 lines
- Profile subtitle is ALWAYS: "Customer Support · Mom of two autistic sons"
- Mary S. appears ONLY in dedicated Phase 2 Founder Story mails — never in other emails

### 7.3 Sign-Off Variants by Flow Position

| Position | Closing Word | Energy | Example |
|----------|-------------|--------|---------|
| Emails 1-2 in flow | "Talk soon," | Warm, gentle | "Talk soon, Lena" |
| Emails 3-5 in flow | "With understanding," | Empathetic | "With understanding, Lena" |
| Emails 6+ in flow | "With care," | Gentle, deep | "With care, Lena" |
| Winback / Phase 4 | "With care," | Dignity-first | "With care, Lena" |

### 7.4 Phase-Specific Sign-Off Energy

| Phase | Energy | Key Tone |
|-------|--------|----------|
| Phase 1 | Warm, gentle | "I've been there" |
| Phase 2 | Empathetic | "I know this feeling" |
| Phase 3 | Science-respectful | "Here's what I learned" |
| Phase 4 | Dignity-first | "Whether or not, you've done right" |

### 7.5 P.S. Variations

**Early flow (Mail 1-2):**
- "P.S. If you want to see how the body-signal approach works, [link]. No pressure."
- "P.S. I've been where you are. Take your time."
- "P.S. 60 days to try it. By your judgment. [link]"

**Mid flow (Mail 3-5):**
- "P.S. Both my sons went through this. I know what it feels like to try everything. [link]"
- "P.S. Your BCBA built the foundation. This adds the body-signal layer. [link]"
- "P.S. 49% of autistic 4-5 year olds aren't trained. You're not behind. [link]"

**Late flow / Winback (Mail 6+):**
- "P.S. My older son was 8 before we figured this out. If you've stepped back from trying — I get it. When you're ready, the science will still be here. 60 days, your judgment. [link]"
- "P.S. Maureen Bennie's son was 9.5. Late is not never. Whether or not you try this approach — you've been doing the right thing for your child. [link]"

### 7.6 SMS Sign-Off (V24)

No full Lena sign-off possible in 160 characters. Use:
```
Hey [Name], [symptom hook]. [CTA link]. -Lena
```

**Source:** L9 §8 (Sign-Off Variants), DOC6 §2 (Lena Sign-Off Rules)

---

<a name="8-mobile-first"></a>
## 8. MOBILE-FIRST NOTES

### 8.1 Purpose

This section describes layout and length considerations for mobile rendering. 60%+ of BrightKidCo email traffic is mobile.

### 8.2 Required Notes Per Email

Every email deliverable must include a Mobile-First Notes section covering:

| Note Type | What to Specify |
|-----------|-----------------|
| **Layout** | Single-column, 600px max width |
| **Body Font** | 16px mobile minimum (accessibility) |
| **Headlines** | 20-24px mobile |
| **CTA Buttons** | Full-width mobile, min 48px height, pill-shaped |
| **Image Handling** | Alt-text required, match voice tone (V23) |
| **Section Length** | How many scroll-lengths on mobile |
| **Testimonial Block** | Card format with subtle shadow, border-radius 12-16px |

### 8.3 Level-Specific Mobile Notes

| Level | Section Length | Whitespace | Scroll Estimate |
|-------|---------------|------------|-----------------|
| Level 1 | Short, scannable | More whitespace | 3-4 scrolls |
| Level 2 | Medium, detailed | Standard | 5-7 scrolls |
| Level 3 | Long, slow-reader | LOTS (sensory-friendly) | 7-10 scrolls |
| General | Variable | Standard | 4-6 scrolls |

### 8.4 Universal Mobile Rules

- Font: Arial, Helvetica, sans-serif (Questrial fails in Gmail/Outlook)
- Weight: 400 only — NEVER bold for body text
- Line-height: 1.5 minimum
- Separators: "—" dash for list items, not bullets
- Cards: subtle shadows, border-radius 12-16px
- Section spacing: 48-64px
- Images: real parents and real kids in real homes, soft natural lighting

**Source:** L29 §1.2-1.3 (Typography, Layout), DOC6 §5 (Font & Colors)

---

<a name="9-klaviyo"></a>
## 9. KLAVIYO IMPLEMENTATION NOTES

### 9.1 Purpose

This section provides deployment-ready instructions so the email can be set up in Klaviyo without ambiguity.

### 9.2 Required Notes Per Email

| Field | What to Specify |
|-------|-----------------|
| **Trigger** | What event starts this email (signup, cart abandon, browse, purchase) |
| **Trigger Delay** | Time delay from trigger (matches Send Timing) |
| **Exit Conditions** | What stops this email from sending (purchase, unsubscribe, segment change) |
| **Segment Filters** | Which Klaviyo segment receives this email (avatar_level1, avatar_level2, avatar_level3, avatar_general) |
| **Smart Sending** | Whether Smart Sending is enabled (recommended: yes for all) |
| **UTM Tags** | Campaign tracking parameters |
| **Discount Code** | If applicable: WELCOME10, auto-apply link |

### 9.3 Segment Mapping

| Klaviyo Tag | Avatar | Trigger Source |
|-------------|--------|---------------|
| `avatar_level1` | Level 1 (Sarah) | Pop-up: verbal, 3-5 yrs |
| `avatar_level2` | Level 2 (Lisa) | Pop-up: mixed, 5-7 yrs |
| `avatar_level3` | Level 3 (Maria) | Pop-up: non-verbal, 6-10+ yrs |
| `avatar_general` | General Fallback | Pop-up: "Still figuring out" |

### 9.4 Flow Trigger Events

| Flow | Trigger Event | Exit Condition |
|------|--------------|----------------|
| Welcome L1 | Pop-up signup + avatar_level1 tag | Purchase or 30 days |
| Welcome L2 | Pop-up signup + avatar_level2 tag | Purchase or 30 days |
| Welcome L3 | Pop-up signup + avatar_level3 tag | Purchase or 30 days |
| Discount Welcome | Pop-up signup + WELCOME10 code | Purchase or 14 days |
| Abandoned Cart | Cart abandon (no checkout start) | Purchase or 7 days |
| Abandoned Checkout | Checkout start (no purchase) | Purchase or 7 days |
| Browse Abandonment | Browse (no cart) | Cart add or 3 days |
| Post-Purchase | First purchase | Next purchase or 30 days |
| Winback | No purchase in 30+ days | Purchase or 60 days |

### 9.5 Sender Identity (All Emails)

- From Email: support@brightkidco.com
- From Name: "Lena from BrightKidCo"
- Reply-To: support@brightkidco.com
- Sending Subdomain: send.brightkidco.com

### 9.6 Footer (Universal — Identical Across All Levels)

```
[BrightKidCo Logo]
Built for the brain that learns differently.
[Links — all plain text, no bold]
Shop · Parent Stories · Contact us · FAQ
[Social Icons]
Instagram · TikTok
[Reviews microcopy]
16,511 reviews · 4.9 ★ — 100,000+ parents trust BrightKidCo
[Business Address]
BrightKidCo · [Address]
[Klaviyo Tags]
{% unsubscribe %} · Manage preferences
```

**Footer Link URLs (locked):**
- Shop: https://www.brightkidco.com/collections/all-products
- Parent Stories: https://www.brightkidco.com/pages/real-parent-stories
- Contact: https://www.brightkidco.com/pages/contact
- FAQ: https://www.brightkidco.com/pages/faq
- Instagram: https://www.instagram.com/brightkidco_official/
- TikTok: https://www.tiktok.com/@brightkidco.com

**Footer Rules:**
- NO Trustpilot link (no page exists)
- NO Facebook link (not used by brand)
- Reviews microcopy only as text, not clickable

**Source:** DOC1 §20 (Email Footer Standard), L29 §1.5

---

<a name="10-template"></a>
## 10. REUSABLE EMAIL DELIVERABLE TEMPLATE

Use this template for every email deliverable. Copy it and fill in each section.

```
═══════════════════════════════════════════════════════════
MAIL: [Flow Name] - [Mail Position]
═══════════════════════════════════════════════════════════

AVATAR: [Level 1 / Level 2 / Level 3 / General]
SEND TIMING: [Day X / Hour Y]

───────────────────────────────────────────────────────────
SUBJECT LINES (A/B Test Ready):
───────────────────────────────────────────────────────────
A: [Subject Line Option A — max 60 chars]
B: [Subject Line Option B — max 60 chars]
C: [Subject Line Option C — max 60 chars]

───────────────────────────────────────────────────────────
PREHEADERS (A/B Test Ready):
───────────────────────────────────────────────────────────
A: [Preheader Option A — max 130 chars]
B: [Preheader Option B — max 130 chars]
C: [Preheader Option C — max 130 chars]

═══════════════════════════════════════════════════════════
MAIL BODY
═══════════════════════════════════════════════════════════

──────────────
SECTION 1: HOOK / OBSERVATION
──────────────
[2-4 sentences. Open with what the mom is experiencing.
Use verbatim language from her world. Never start with
the product.]

──────────────
SECTION 2: VALIDATION
──────────────
[2-5 sentences. Absolve guilt. Name the failed method
specifically. Reframe as neurological, not behavioral.]

──────────────
SECTION 3: MECHANISM / EDUCATION
──────────────
[3-8 sentences. Explain WHY neurologically. Use
interoception science. Frame as "his nervous system
works differently" — never as "the product fixes."]

──────────────
SECTION 4: TESTIMONIAL / SOCIAL PROOF
──────────────
[3-18 sentences depending on level. Real parent story
with specific details. Level-appropriate length and
depth.]

──────────────
SECTION 5: PRODUCT / OFFER
──────────────
[2-4 sentences + pricing. Frame as "adds the body-signal
layer." Present appropriate offer for the level.]

[PRODUCT IMAGE]

[PRICING TABLE]
| Offer | Price | Badge |
| 1 Pair | $34.99 | — |
| 3+3 FREE | $79.99 | BESTSELLER |
| 5+5 FREE | $119.99 | BEST VALUE |

──────────────
SECTION 6: GUARANTEE / RISK REMOVAL
──────────────
[1-3 sentences. "60-Day Money Back." Permission framing,
not sales tactic.]

──────────────
SECTION 7: CTA
──────────────
[Button or text link. Level-appropriate aggressiveness.
Full-width mobile, min 48px height.]

[CTA BUTTON: "CTA copy here"]

──────────────
SECTION 8: LENA SIGN-OFF
──────────────
[Closing Word],
Lena
Customer Support · Mom of two autistic sons

P.S. [P.S. line — max 2 lines]

═══════════════════════════════════════════════════════════
MOBILE-FIRST NOTES
═══════════════════════════════════════════════════════════

- Layout: Single-column, 600px max width
- Body: 16px mobile, Arial/Helvetica, weight 400
- Headlines: 20-24px mobile
- CTA: Full-width mobile, 48px height, pill-shaped
- Section spacing: 48-64px
- Estimated scroll: [X] scrolls on mobile
- [Level-specific notes]

═══════════════════════════════════════════════════════════
KLAVIYO IMPLEMENTATION NOTES
═══════════════════════════════════════════════════════════

- Trigger: [Event that starts this email]
- Trigger Delay: [Time from trigger]
- Exit Conditions: [What stops this email]
- Segment: [avatar_level1 / avatar_level2 / avatar_level3 / avatar_general]
- Smart Sending: [Enabled / Disabled]
- Discount Code: [If applicable: WELCOME10]
- UTM Tags: [utm_source=klaviyo&utm_medium=email&utm_campaign=flow_name]
- Sender: Lena from BrightKidCo <support@brightkidco.com>

[FOOTER — universal, identical across all levels]
```

---

<a name="11-cross-reference"></a>
## 11. CROSS-REFERENCE MAP

### 11.1 Source Layers for Each Format Element

| Format Element | Primary Source | Secondary Sources |
|----------------|---------------|-------------------|
| Mail Naming | Overnight Plan §L33 | DOC1 §17 |
| Avatar Tagging | DOC1 §1, DOC6 §1 | L4 (Avatar Levels) |
| Send Timing | Overnight Plan §L33 | DOC1 §17 |
| Subject Lines | Overnight Plan §L33 | DOC1 §7, L9 §5 |
| Preheaders | Overnight Plan §L33 | — |
| Mail Body Structure | L9 §2 (Voice Formula) | L3 (Emotional Phases), L29 (Visual) |
| Lena Sign-Off | L9 §8 (Sign-Off Variants) | DOC6 §2, DOC1 §13 |
| Mobile-First Notes | L29 §1.2-1.3 | DOC6 §5 |
| Klaviyo Implementation | DOC1 §19, DOC6 §7 | Overnight Plan §L33 |

### 11.2 Voice Rules Applied to Format

| Voice Rule | Where It Appears in Format |
|------------|---------------------------|
| V1 (Peer-to-peer) | Mail Body — Hook, Testimonial |
| V2 (Lena sign-off) | Section 8 — Lena Sign-Off |
| V3 (Profile subtitle) | Section 8 — "Customer Support · Mom of two autistic sons" |
| V5 (Forbidden phrases) | Subject Lines, Mail Body |
| V7 (Validate before solving) | Section 2 — Validation |
| V8 (60-day guarantee) | Section 6 — Guarantee |
| V9 (Pull-ups framing) | Section 3 — Mechanism |
| V10 (Autism = identity) | Section 3 — Mechanism |
| V11 (Mechanism specificity) | Section 3 — Mechanism |
| V12 (Permission) | Section 6 — Guarantee, Section 7 — CTA |
| V13 (Science-first) | Section 3 — Mechanism |
| V14 (Realistic timelines) | Section 3 — Mechanism |
| V15 (Lena sign-off trust) | Section 8 — Lena Sign-Off |
| V23 (Image alt-text) | Section 4 — Testimonial images |
| V24 (SMS sign-off) | Section 8 — SMS variant |

### 11.3 Visual Calibration Applied to Format

| Visual Element | Source | Where in Format |
|----------------|--------|-----------------|
| Color palette (universal) | L29 §1.1 | Mobile-First Notes |
| Typography (universal) | L29 §1.2 | Mobile-First Notes |
| Layout patterns (universal) | L29 §1.3 | Mobile-First Notes |
| Level-specific color weighting | L29 §2-5 | Section 5 (Product), Section 7 (CTA) |
| Level-specific CTA calibration | L29 §2.5, §3.5, §4.5, §5.5 | Section 7 — CTA |
| Level-specific testimonial format | L29 §2.4, §3.4, §4.4 | Section 4 — Testimonial |
| Forbidden visual patterns | L29 §2.10, §3.10, §4.10 | Throughout |
| Image rules (universal) | L29 §1.4 | Section 4, Mobile-First Notes |
| Offer presentation | L29 §1.7 | Section 5 — Product/Offer |
| Footer (universal) | L29 §1.5 | Klaviyo Implementation Notes |
| Sender identity (universal) | L29 §1.6 | Klaviyo Implementation Notes |

### 11.4 Downstream Consumers

This format specification is consumed by all downstream email creation tasks:

| Consumer | How They Use This |
|----------|-------------------|
| Welcome Flow builders | Use template for each Welcome mail |
| Abandoned Cart/Checkout builders | Use template (shorter variant) |
| Browse Abandonment builders | Use template (lightest variant) |
| Post-Purchase builders | Use template (no offer section) |
| Winback builders | Use template (full structure, Phase 4 voice) |
| Discount Welcome builders | Use template (4-email structure) |
| HTML email generators | Use Mobile-First Notes + Visual Calibration |
| Klaviyo deployers | Use Klaviyo Implementation Notes |

---

## GLOSSARY

| Term | Definition |
|------|-----------|
| **Avatar** | The customer segment this email targets (Level 1, 2, 3, or General) |
| **Flow** | A Klaviyo automated email sequence triggered by a specific event |
| **Mail Position** | The sequential number of this email within its flow |
| **Phase** | The emotional phase of the customer (1: Slow Realization, 2: First Attempt, 3: Method Cycling, 4: Resignation Fork) |
| **Voice Formula** | OBSERVATION → VALIDATION → MECHANISM → PERMISSION (L9 §2.1) |
| **Lena** | The email sender persona — Customer Support, Mom of two autistic sons |
| **Mary S.** | The founder — appears ONLY in dedicated Phase 2 Founder Story mails |
| **Interoception** | The ability to feel internal body signals — the core mechanism of BrightKidCo's product |
| **Kelly Mahler** | Authority figure for interoception science — citation strengthens L2/L3 credibility |
| **SPARK** | Research study: 49% of autistic 4-5 year olds aren't toilet-trained |
