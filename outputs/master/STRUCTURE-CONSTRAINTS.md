---
title: "BKC Email Structure Constraints — Locked Per Level"
type: structure-constraint-doc
created: "2026-07-06"
purpose: "Single reference document for structural decisions across all 125 emails. Locked per-level constraints are derived from GIULIANO-DEMANDS.md + the 4 level customer-journey masters (l1/l2/l3/gf). Use this to constrain per-email structural choices."
source_files:
  - /root/projects/brightkidco/demands/GIULIANO-DEMANDS.md
  - /root/projects/brightkidco/outputs/customer-journey/l1/MASTER.md
  - /root/projects/brightkidco/outputs/customer-journey/l2/MASTER.md
  - /root/projects/brightkidco/outputs/customer-journey/l3/MASTER.md
  - /root/projects/brightkidco/outputs/customer-journey/gf/MASTER.md
  - /root/projects/brightkidco/outputs/customer-journey/cross-level-sync.md
---

# BKC Email Structure Constraints

This is the **single source of truth** for which structural decisions are LOCKED per customer level, and which are FREE to vary. Every per-email structural choice references this document before being made.

The 8 structural variables from the `email-marketing-structure` skill (each can be free or locked per level):

| # | Variable | Free Range |
|---|---|---|
| 1 | Section count | 3-8 |
| 2 | Section order (pattern A-H) | A, B, C, D, E, F, G, H |
| 3 | Image density | 1-6 |
| 4 | Color temperature | warm / cool / neutral |
| 5 | Email length (words) | 150-1,200 |
| 6 | Argument structure | PAS / AIDA / Story / Data / Testimonial / Direct |
| 7 | Visual rhythm (gap size) | tight (32-40px) / open (56-80px) |
| 8 | CTA position | early / mid / late / double-tap / text-link |

GF cross-level rules R1-R6 add extra cross-level constraints:
- R1 — symptom over label (no "Level 1/2/3", no "autism", no "ASD" in GF/cross-level)
- R2 — 3-5 recognition anchors per mail
- R3 — age ranges not fixed ages ("3 to 10+" not "for 5-year-olds")
- R4 — verbal / non-verbal both modes covered
- R5 — timeline flexibility ("some kids 2 weeks, others 8")
- R6 — low-bar success metrics (mini-wins, not "fully trained")

---

## L1 (Sarah) — Locked Constraints

**Source:** `customer-journey/l1/MASTER.md` §2 Quick Ref, §5 Hope Trajectory, §6 Trust Threshold, §19 L1 Hard Rules
**Verbatim quote:** *"Verbal 3–5 year old, low support needs, mainstream Pre-K. 6–18 months of trying, 10–20 failed methods, $79.99 3+3 dominant cart. Hope/realism 70/30. BS detector medium-high. Calendar driver: Pre-K enrollment deadline."*

### Locked dimensions

| Dim | L1 Lock | Why |
|---|---|---|
| Pattern | A-H allowed (including G/Urgency) | L1 is the only level that can use Pattern G (Pre-K calendar urgency is allowed) |
| CTA style | **Full-width green button, 48px+ height** | Permitted by L1 MASTER §2 + §19 |
| Color | Warm + Cool + Neutral + **occasional Brand-Yellow #F5C84B** (stat callouts and stars ONLY) | L1 MASTER §2 + §15.1 |
| Spacing | **32px gaps (tightest in system)** | L1 MASTER §2 visual cheat sheet |
| Image density | **Up to 6** | L1 MASTER §9.3 + avatar §5.5 (verbal 3-5, active forward motion) |
| Argument | All 6 incl Direct/Urgency | L1 hope-ratio 70/30 allows Direct/Urgency |
| Length | **100-1,200 words** (L1 emails are LONGEST, ~990 words per the existing copy) | L1 reads carefully — Pre-K deadline motivates deep reading |
| Subject line | Observation, question, urgency, mechanism tease (Calendar anchor OK: "Six weeks until Pre-K starts") | L1 MASTER §11.4 |

### Free-to-vary dimensions (within the locks above)

- Section count (3-8)
- Section order, except G only at Pre-K calendar anchor moments (Welcome E7 "Last Call")
- Color temperature rotation: alternate warm/cool across adjacent emails
- Email length within 100-1,200
- Argument rotation across PAS / Story / Data / Testimonial (Direct/Urgency only at closing moments)
- CTA position (early / mid / late / double-tap; double-tap recommended for long emails)
- Visual rhythm within the 32px tight band

### Forbidden in L1

- **"Last chance" / "Time is running out" / "Don't miss out"** (except as closing argument tied to actual calendar expiry, e.g., WELCOME10 code expiration)
- **"Severe" / "Non-verbal kids"** (BCBA respect — L1 mom is verbal-and-aware)
- **"BCBA protocol"** as primary diagnosis frame (L1 mom has no BCBA, only a pediatrician)
- **"Just like other kids" / "Just try harder"**
- **Anti-OT/sensory narrative** (L1 child is low-support, sensory hasn't been named)

---

## L2 (Lisa) — Locked Constraints

**Source:** `customer-journey/l2/MASTER.md` §6 Trust Threshold, §7 6-Element Formula, §9 L2-specific forbidden patterns
**Verbatim quote:** *"40/60 hope/realism, 2-6 years trying 30+ methods, 95% female, college-educated 60-65%. Verified BCBA relationship — 2-6 years. 6-Element L2 Formula mandatory. 'Quick' is her most dangerous word. BCBA criticism is unforgivable."*

### Locked dimensions

| Dim | L2 Lock | Why |
|---|---|---|
| Pattern | B, C, D, F, H; **G banned** | L2 MASTER §19 — L1-style Pre-K urgency banned in L2; explicit "School adapted via IEP" framing instead |
| CTA style | **Muted green or text link** (NOT full-width) | L2 MASTER §11 + §21 visual calibration |
| Color | **Cool dominant (mint) + warm (cream) for story** | L2 MASTER §21 — mint is the mechanism color for L2 |
| Spacing | **44px gaps** | L2 MASTER §2 visual cheat sheet |
| Image density | **2-4** | L2 MASTER §10 — sensory context visible in imagery |
| Argument | **Mechanism-first, story-led, data-led; NEVER direct** | L2 trust in science HIGH, marketing LOW |
| Length | **350-900 words** | L2 reads carefully, but shorter than L1 because of cognitive exhaustion |
| Subject line | Observation, question, mechanism, peer quote, BCBA-respect | L2 MASTER §11.4 |
| Subject line | **"Quick" is the most dangerous word** — never use | L2 MASTER §19 |
| Subject line | **No BCBA criticism** in any form | L2 MASTER §19 — unforgivable |

### Free-to-vary dimensions

- Section count (5-7)
- Section order within B/C/D/F/H
- Color temperature rotation: mint/cream alternation
- Length within 350-900
- Argument rotation across Mechanism / Story / Data (Direct is banned)
- CTA position — late or double-tap, never early
- Visual rhythm in the 44px band

### Mandatory in L2 (every mail)

**The 6-Element L2 Formula (per §23 Demand):**
1. Symptom recognition — 3+ failed methods named
2. Mechanism specificity — interoception explained with Mahler cited as "interoception researcher" (not "our partner")
3. BCBA/OT acknowledgment — complement framing ("Your BCBA has been doing the hard work for years. Body-signal learning is the missing layer their protocol can't address.")
4. Realistic timelines — "8–12 weeks for most kids. Some longer." Never "Quick." Never "30 days."
5. 60-day guarantee
6. Permission-not-to-buy — explicit or implicit LONG sign-off; NEVER pressure

### Forbidden in L2

- "Quick" (most dangerous)
- "Easy" / "Simple" / "Effortless"
- BCBA criticism in any form
- "Just like other kids" / NT comparison
- "Just trust the process" / "Don't give up!"
- Marketing AI-isms ("Revolutionary," "Transformative," "Leverage," "Empower")
- L1 story splicing (L2 needs BCBA / sensory / OT contexts)
- Heavy math reframe

---

## L3 (Maria) — Locked Constraints

**Source:** `customer-journey/l3/MASTER.md` §2 Quick Ref, §16 Cardinal Sins
**Verbatim quote:** *"20/80 hope/realism (NEVER rises above 25/75). Decision speed 14-30+ days. Conversion 4-7%. Primary offer 1 Pair $34.99. NEVER 5+5. Zero urgency ANY FORM. Math reframe NEVER even in FAQ E4. Lena peer voice every mail except Mary S. Story. 'Whatever progress means for your family is enough.' HPattern 55%, B 23%, F 18%, C 6%, D 2%. G NEVER."*

### Locked dimensions

| Dim | L3 Lock | Why |
|---|---|---|
| Pattern | **H dominant (~55%), B (~23%), F (~18%), C (~6%), D (~2%); G NEVER** | L3 MASTER §2 Quick Ref — Pattern distribution is locked at this split |
| CTA style | **Text link or muted small button. NEVER full-width green #039902** | L3 MASTER §2 + §14.2 — muted gray or muted brown; auto-width, no shadow; soft border-radius 8-12px |
| Color | **Cream #FBF7EB + Off-White #FAF9F7 + earth tones ONLY** | L3 MASTER §2 + §14 — zero Brand-Yellow #F5C84B, zero neon, zero high-saturation |
| Spacing | **56px gaps (widest in system)** | L3 MASTER §2 — most breathing room of any level |
| Image density | **0-2 (reflective/dignity alt-text mandatory)** | L3 MASTER §2 — minimum images of any level |
| Argument | **Story-led, data-led sparingly, mechanism-at-peer-level; NEVER direct/urgency** | L3 MASTER §2 — L3 realism is the texture of her life, do not re-inflate |
| Length | **100-700 words (skewed short)** | L3 MASTER §2 — L3 emails are SHORTEST, often ~200 words |
| Subject line | Validation or data ONLY; no observation hooks implying "you're doing it wrong"; no exclamation | L3 MASTER §2 + §16 |
| Subject line | **NEVER exclamation mark** | L3 §14.6 + §16 Cardinal Sin #6 |

### Free-to-vary dimensions (constrained)

Because so many dimensions are LOCKED for L3, variance is squeezed into the unlocked ones:
- **Section count** (3-6, default 3, rotate within band)
- **Email length within 100-700** (rotate short/medium within band)
- **Subject line type** (rotate among ~10 approved: "Late is not never", "When you're ready", "Whatever progress means", etc.)
- **Color WITHIN warm/neutral** (Off-White #FAF9F7 vs Cream #FBF7EB vs earth tones)
- **Argument structure** within the Story/Data/Mechanism-at-peer-level range
- **Visual rhythm** within the 56px band (could be 52 or 56 or 60; not 32)

### The 6 Mandatory L3 Elements (per §25 Demand) — required in EVERY L3 mail

1. **Dignity in every sentence.** "Would this land as dignity on a mom who has been at this for 9 years?"
2. **"Mini-wins count" framing.** Success is signal, not training.
3. **Acknowledge the resignation reality.** Phase 4 — Resignation. Steady-state survival.
4. **Permission-not-to-buy in EVERY mail.** Not just conversion mail. Every. Mail.
5. **Lena peer voice.** "Mom of two autistic sons. One trained at 6. The other almost 8."
6. **60-Day Guarantee framing.** "Try it for 60 days. By your judgment."

### Forbidden in L3

- **"Quick" / "Easy" / "Simple"**
- **"Severe" / "Non-verbal" as identifier** — "non-verbal as the L3 term destroys trust"
- **"Fix" / "Cure"** — autism is identity, not disease
- **"Don't give up!" / "Save him from years of diapers" / "Reduce meltdowns" / "Independence!" alone**
- **Math reframe in any form** — Medicaid-disrespectful
- **"Last chance" / "Limited time" / "Don't miss out" / "Pre-K starts soon"**
- **Countdown timers**
- **Brand-Yellow #F5C84B** in any shape
- **Full-width green #039902 button**
- **Adult diaper sales pressure** in any form
- **Bright color / neon**
- **Exclamation in subject lines**
- **"Level 1/2/3" labels in subject or body**
- **Pre-K calendar urgency**
- **"non-verbal" used as identifier** (allowed in R4 paired inclusion like "verbal or non-verbal", forbidden as standalone identifier)
- **5+5 bundle** as offer (L3 only ever gets 1 Pair, organic 3+3 upgrade)
- **"You tried everything" / "Years of failed attempts"** (L1-banned language leaking into L3)

---

## GF (General Fallback) — Locked Constraints

**Source:** `customer-journey/gf/MASTER.md` §7 Trust Threshold, §15 Welcome GF, §34 Design Canvas
**Verbatim quote:** *"Symptom language ONLY (V16). Never 'autism', 'ASD', 'Level 1/2/3'. R1-R6 mandatory: 3-5 recognition anchors, age ranges 3 to 10+, both verbal modes, flexible timelines, low-bar success metrics. Primary entry symptom: 'still figuring it out'. 5 sub-groups A-E. Migration target: 65-75% via Day 14 PP-Level Detection."*

### Locked dimensions

| Dim | GF Lock | Why |
|---|---|---|
| Pattern | B, D, F, H (cross-level anchors) | GF MASTER §34 — Story + Data + Education + Minimalist. Cross-level needs flexible patterns |
| CTA style | Medium green (variable by sub-group: full for A/E, reduced for C/D) | GF MASTER §12 + §34 |
| Color | All 3 temperature zones OK; warm dominant + cool acceptable | GF MASTER §34 |
| Spacing | **44px gaps** | GF MASTER §34 |
| Image density | **1-6 (range, average 2)** | GF MASTER §10 + §34 |
| Argument | Story + Data (cross-level) | GF MASTER §15 |
| Length | Medium (~500-800 words typical) | GF MASTER |
| Subject line | Symptom-framed, no level label. Examples: "Some kids it clicks right away. Others it takes longer. Where's yours?" / "Three parents wrote in this month. Does any of this sound like your house?" | GF MASTER §20 |

### Free-to-vary dimensions (within locks)

- Section count 3-8
- Color temperature rotation across warm/cool/neutral
- Image density 1-6
- Pattern rotation within B/D/F/H

### Mandatory in GF — The V16 Rule + R1-R6

**V16 — symptom language ONLY.** Symptom language only. Never "autism", "ASD", "Level 1/2/3". Use "nervous system differences" as the umbrella. V16 is the litmus test — if copy passes V16, it reaches Group B (Diagnosis-Rejecters); if it fails, you lose 15% of GF permanently.

**R1-R6 (all 6 mandatory in every cross-level flow):**
- R1 — Symptom over label
- R2 — 3-5 recognition anchors per mail
- R3 — Age ranges "3 to 10+" not fixed ages
- R4 — Verbal / Non-verbal both modes covered
- R5 — Timeline flexibility "Some kids 2 weeks. Others 8. Both normal."
- R6 — Low-bar success metrics (mini-wins)

### Forbidden in GF

- **"autism" / "ASD" / "Level 1/2/3" anywhere in body** (V16 violation)
- **Pre-K calendar urgency** in subject or body
- **"Simple"** (most dangerous word for GF — hits all 5 sub-groups)
- **"For Level X kids who…"** (level labels inside "inclusive" wrappers)
- **Diagnosis assumptions** when sub-group is Diagnosis-Rejecting
- **Asking her to migrate before she's ready**

---

## Cross-Level Rules (apply to ALL levels)

These are universal — every email, every level:

1. **Vertical stack only** — never side-by-side hero
2. **Hero image aspect ratio: 9:16 or 1:1** — never landscape
3. **Header static, same on every email** — logo only, never changes
4. **Footer static, same on every email** — physical address + unsubscribe
5. **Color temperature alternates across adjacent emails** — no flat for 3+ in a row
6. **Sign-off progression** by email position within a flow:
   - **E1-E2:** "Talk soon," (SHORT variant)
   - **E3-E5:** "With understanding," (MEDIUM variant)
   - **E6+:** "With care," (LONG variant)
7. **Image placeholders are written descriptions**, not filenames
8. **Cross-level R1-R6 always satisfied** (L1/L2/L3 specifics add more)
9. **5-second test passes** — what is it about? what does it want me to do? is there urgency?
10. **Above-the-fold: headline + image + CTA** (mobile-first, 400px visible)
11. **48px+ CTA button height** (when CTA is a button — L3 exemptions)
12. **16px minimum body text** (mobile readable)
13. **Email under 102KB total** (Gmail clips above 102KB)
14. **No external JavaScript, no flexbox/grid, only tables + inline CSS** (Outlook compatibility)

---

## Variance Rule (between adjacent emails in same flow+level)

From the `email-marketing-structure` skill §9 and the cross-level-sync report:

**Adjacent emails in same flow + same level must differ on at least 5 of the 8 structural variables.**

Since this document locks the bands each variable can occupy per level, the variance happens WITHIN each band's free-to-vary range.

For L3 specifically: since 6+ dimensions are locked at fixed values, the unlocked dimensions must absorb all variance. This is why L3's free-to-vary dimensions (section count, length, subject line type, color-within-warm/neutral, argument structure, visual rhythm) carry more variance each.

### Variance failure pattern (anti-pattern)

An adjacent pair that differs on fewer than 5 of 8 dimensions will be perceived as "same email" by the reader within 1-2 emails, leading to drop in engagement and trust violation.

---

## Summary Matrix

| Dim | L1 | L2 | L3 | GF |
|---|---|---|---|---|
| **Patterns allowed** | All A-H incl G | B,C,D,F,H; G banned | H(55%), B(23%), F(18%), C(6%), D(2%); G banned | B,D,F,H |
| **CTA style** | Full-width green | Muted green or text link | Text link or muted small; never full-width green | Medium green |
| **Color** | Warm+Cool+Neutral+Yellow stat | Cool dominant, warm for story | Warm/neutral ONLY, zero yellow | All OK, warm dominant |
| **Spacing** | 32px | 44px | 56px | 44px |
| **Images** | Up to 6 | 2-4 | 0-2 | 1-6 (avg 2) |
| **Argument** | All incl Direct/Urgency | Mechanism + Story + Data | Story + Data + Mechanism-peer level (no Direct) | Story + Data |
| **Length** | 100-1,200 | 350-900 | 100-700 (skewed short) | ~500-800 |
| **Subject line** | Observation, Question, Urgency (L1-allowed), Mechanism | Observation, Question, Mechanism, Peer quote, BCBA-respect | Validation/data only; no exclamation | Symptom-framed, no level label |

---

## Operational Use

When building (or verifying) any email's structural specification:

1. **Open this document first.**
2. **Determine the email's level** (L1/L2/L3/GF/cross-level).
3. **For each of the 8 structural variables**, look up the LOCKED value for that level.
4. **Apply the locked values as the band's range.** Variables can vary WITHIN that band but cannot step outside it.
5. **For the variance check:** confirm the structural spec differs from the prior email in the same flow+level on at least 5 of the 8 variables WITHIN the locked bands.
6. **Apply the universal cross-level rules** (R1-R6, sign-off progression, vertical stack, etc.) regardless of level.

For Level 3 specifically: when designing the structural spec for an L3 email, the constraints are tighter than any other level — most variables are locked or partially locked. Variance must be squeezed into the small number of remaining unlocked dimensions. This is by design — Maria's trust is too fragile to risk variance that could mislead her.

For GF cross-level: V16 is the first check. If copy passes V16, the structural spec can range across all per-level variants because the level tag isn't yet known. Once a GF subscriber migrates, their structural spec locks to their destination level.

---

## Source Authority Hierarchy (per cross-level-sync.md)

When this document disagrees with any other source:

1. **GIULIANO-DEMANDS.md** (brand requirements) — highest authority. Always wins.
2. **Per-level customer-journey master** (l1/l2/l3/gf) — second. Where level docs conflict with each other, see cross-level-sync.md for resolution.
3. **Cross-level-sync.md** (consistency audit) — third. Where level docs disagree, sync report specifies which side wins.
4. **Structure skill defaults** (8 patterns, 8 dimensions, etc.) — only where the level docs don't specify.

When this document needs updating:
- After any GIULIANO-DEMANDS update
- After any per-level journey master revision
- After each cross-level sync audit

This document is the single artifact every per-email structural decision references. It does not get reapplied through subagents without verifying this doc is current first.

---

## What's next

This is Step 1 of the 5-step plan. After you confirm this is right:

- **Step 2:** Build per-flow structural arcs (22 documents, one per flow) that specify the structural intent of each email in the flow within the locks above
- **Step 3:** Build per-email `## Email Structure` sections inside each of 125 copy files
- **Step 4:** Verify variance ledger across all 22 flows
- **Step 5:** Fix any variance gaps

Approve Step 1 and I'll start Step 2.
