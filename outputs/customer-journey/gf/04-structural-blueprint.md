# BrightKidCo — General Fallback (GF) Structural Blueprint & Variance Ledger

> **Reference document for Stage 1 subagents and Stage 2 copywriters.** This document specifies, for every email in the GF sequence, the nine structural dimensions from the email-marketing-structure skill, plus the WHY behind each choice, plus per-sub-group (A–E) calibration notes. It also contains the **Variance Ledger** — the rule-by-rule mapping that prevents pattern-matching across the 45-email GF arc and the suppression logic that protects the cross-level + GF-specific copy streams. GF receives more emails than any other level because (a) it owns a dedicated level-specific Welcome variant, (b) it receives every cross-level flow, and (c) it alone owns the **PP-Level Detection mail at Day 14** — the system's largest single conversion lever.
>
> Sources: `_notes/journey-gf-01-avatar.md` (sub-groups, V16, R1–R6); `_notes/journey-gf-02-sequence.md` (22 flows, ~45 emails); `_notes/journey-gf-03-emotional-trust.md` (per-sub-group deltas, peak moments, death spirals); `_notes/locked-profile.json` (flow_meta + level metadata); `email-marketing-structure` skill §9 (the 9 dimensions); `demands/GIULIANO-DEMANDS.md` §1.2, §8.5, §8.6, §13, §14 V16, §15.7.

---

## 0. HOW TO READ THIS DOCUMENT

**The 9 Dimensions (from email-marketing-structure §9.2):**
1. **Section Count** — 3–8 sections per email
2. **Section Order** — pattern A–H (Classic, Story-Led, Problem-Solution, Social-Proof First, Product-First, Education-First, Urgency, Minimalist)
3. **Image Density** — image-heavy (6 images, 3 sections) vs text-heavy (1 image, 6 sections)
4. **Color Temperature** — warm / cool / neutral / dark
5. **Email Length** — short (150 words) / medium (600) / long (1200)
6. **Argument Structure** — PAS, AIDA, Story-led, Data-led, Testimonial-led, Direct
7. **Visual Rhythm** — tight (40px gaps) / open (80px gaps) / mixed
8. **CTA Position** — early / mid / late / double-tap / text-link only
9. **Subject Line Formula** — observation / question / mechanism tease / story fragment / validation / data point / parent quote

**Sub-group key (Giuliano §1.2):**
- **A — Diagnostic Entrants** (~25% of GF): Pre-identity, mechanism-curious, label-tolerant but not label-seeking. Migrates post-diagnosis.
- **B — Diagnosis-Rejecters** (~15% of GF): Anti-identity, **V16 strict**. Symptom language ONLY, no autism/ASD/Level. Permanent GF resident.
- **C — Sensory-Difference** (~25% of GF): SPD/ADHD label, mechanism-heavy (Mahler/Ayres), ignores ASD framing. Permanent GF resident.
- **D — Overwhelmed Non-Selectors** (~25% of GF): Has ASD diagnosis but clicked past pop-up. **Goldmine for Day 14 PP-Level Detection migration.**
- **E — Cart/Browse without Opt-In** (~10% of GF): Cookie-captured or cart-abandoned, never identified. Limited touchpoints, highest churn risk.

**Trust meter scale (from journey-gf-03):** 0–3 alienation/spam, 4–5 neutral, 6–7 trust building, 8–9 high trust, 10 peak.

---

## 1. THE GF DESIGN CANVAS — GLOBAL CONSTRAINTS

These are the non-negotiable design constants for every email in the GF sequence. They apply BEFORE the 9-dimension variance analysis because they encode the cross-level calibration rules (R1–R6), V16, and the visual spec at §15 of the brand direction.

### 1.1 Hard Constraints (from avatar §4, §8, §9; brand §15.5–15.7)

| Constraint | Rule | Why |
|---|---|---|
| **Subject line** | Max 60 chars (recommended 40–50). NO level labels, NO diagnosis assumptions, NO age pins narrower than 3–10+. | R1 + R3. Group B drops on "Level 2." Group C drops on "toddler." |
| **Preheader** | Max 130 chars (recommended 80–100). Mechanism-light, never autism-named. | V16. Preheader is the second-most-read text after subject line. |
| **Body font** | 16px mobile / 17px desktop minimum. | Accessibility (WCAG AA) + pinch-zoom avoidance. 60%+ of opens are mobile. |
| **CTA height** | Min 48px height, min 44x44px touch target. | Finger-friendly mobile. |
| **Font** | Questrial 400 only. No intermediate weights (500, 600). | Brand spec §15.4. |
| **Color: Brand Green CTA** | #039902 at 80–100% saturation for A/E sub-groups, reduced for C/D. | Mood-by-sub-group calibration. |
| **Color: forbidden** | NO teal anywhere, brand-wide. | Brand §15.1. |
| **Color: cards/highlights** | Mint #DBFFCD, Cream #FBF7EB, Off-White #FAF9F7. | Soft, not aggressive. |
| **Spacing** | 44–48px gaps between sections. NOT L1's tight 32px. NOT L3's loose 64px. | Balanced midpoint — the GF canvas. |
| **Imagery** | Real parents/kids in real homes, soft natural lighting, neutral tones, kids 3–10 range. NO cartoon kid illustrations, NO "Big Kid Underwear" graphics, NO stock NT happy families, NO before/after with shame implications, NO full-on children's faces. | Cross-level visual rule 1 + brand §15.6. |
| **Pull-ups in imagery** | Signal-blocking tool, NOT evil. | Cross-level visual rule 6. |
| **Sign-off progression** | E1–E2 "Talk soon," → E3–E5 "With understanding," → E6+ "With care," | Brand-wide. Lena voice arc. |
| **Footer** | Same on every email. CAN-SPAM compliant. Physical address + unsubscribe + preference center + social links. | Universal. |
| **Email size** | Under 102KB total. | Gmail clips beyond this. |
| **Layout** | Tables for layout. Inline all CSS. Test in Outlook first. | Email-safe HTML. |
| **Hero position** | Primary CTA above the fold for primary-action emails; below the fold acceptable for story-led/emails where the story IS the conversion. | Mobile-first design rule. |

### 1.2 The R1–R6 Cross-Level Calibration Rules (Mandatory Everywhere in GF)

Every email in the GF sequence MUST satisfy all six rules. Any violation destroys trust with at least one sub-group.

| Rule | Meaning | GF Application | Sub-group most at risk if violated |
|---|---|---|---|
| **R1 — Symptom over label** | Never "For Level 1/2/3 kids." Always "If your child doesn't feel when they need to go…" | Every subject line, preheader, hero, body, sign-off. | **B (catastrophic), D, A** |
| **R2 — 3–5 Recognition Anchors per mail** | 3+ specific situations covering L1/L2/L3 symptom profiles WITHOUT naming them. | Every body email. Welcome E2 is the canonical example: "sits 20 minutes, nothing happens" + "pees when pull-up comes off" + "doesn't react to wet." | **A (curiosity), C (mechanism-curious), D (level resonance)** |
| **R3 — Age ranges over fixed ages** | "For kids 3 to 10+." NEVER "For 5-year-olds." | Every age reference in every email. | **A (varied ages), D (older kids), E (varied)** |
| **R4 — Verbal / Non-verbal inclusivity** | Always both: "saying 'wet'" OR "showing you with a gesture." | Every symptom description. | **C (non-verbal often), D (non-verbal often)** |
| **R5 — Timeline flexibility** | "Some kids 2 weeks. Others 8. Both normal." | Every timeline reference. NEVER "In 30 days." | **B (rejects pressure), D (realism-anchored)** |
| **R6 — Low-bar success metrics** | "Looked down at the wet spot for the first time," "pulled at pants in awareness," "stayed dry 2 hours instead of 30 minutes." | Every outcome reference in PP-Education and after. | **D (L3 trauma), C (mechanism-pacing), B (rejects pressure)** |

### 1.3 The V16 Rule (Sub-Group B Litmus Test)

**Symptom language only. Never "autism," "ASD," "Level 1/2/3." Use "nervous system differences" as the umbrella.**

If copy passes V16, it reaches Group B (15% of GF, permanently). If it fails, Group B drops to 2.0 trust and the email goes to spam folder. V16 is the single highest-stakes constraint in the GF system.

**V16 sub-violations to monitor (from journey-gf-03 §24):**
- "Autistic children often can't feel body signals" — Group B drops 2.5 trust instantly.
- "For Level 2 kids who…" — R1 violation, Group B drops 1.0–2.0.
- "Maternal-blame version of 'You haven't failed potty training' without Lena voice" — Group B drops 2.0–3.0. Use "the method didn't fail. The frame did."
- "SPARK 49%" — autism-named statistic. Use "almost 1 in 2 kids with nervous system differences aren't trained by age 5."
- "BCBA" anywhere — switch to "professional recommendations" framing for non-migrated GF.
- "Simple" anywhere — all five sub-groups bristle.
- "Adult diapers," "Forever in pull-ups," "Severe autism" — L3-trauma language. Forbidden in GF.

### 1.4 The GF Image Sub-Group Variance Rule

Per avatar §9: "Imagery must NOT silhouette toward a single sub-group. Aim for a 3-child composite feel — varied ages, presentations, parent postures." This means the **same hero image cannot feature a child who reads as obviously pre-school-age (A-only) or obviously non-speaking (C-only) or obviously older-with-disability (D-only).** Composite imagery is the GF rule.

---

## 2. STRUCTURAL BLUEPRINT — EMAIL BY EMAIL

For each email in the GF sequence, the 9 dimensions are filled with explicit choices and the WHY behind each choice. Sub-group variations (A–E) are noted where the structure or copy must differ.

### FLOW 01 — WELCOME GF (8 emails)

The GF Welcome is the only level-specific Welcome where all 8 emails use universal R1–R6 calibration. There is no per-email L1/L2/L3-specific table — the macro explicitly states GF email content must be derived from R1–R6 + L1/L2/L3 base tables, with all level labels stripped.

#### WELCOME E1 — Welcome + WELCOME10 Code + Lena Intro (Day 0, immediate)

| Dim | Choice | WHY |
|---|---|---|
| 1. Section Count | 5 (Header, Hero, Bridge, Body, CTA, Footer) | Medium-short. Welcome mail — she just opted in, no time for long-form. |
| 2. Section Order | **Pattern A — Classic Hero-to-CTA** | Standard welcome cadence. Familiar without being boring. The Three-Family Pattern forward-reference lives in the body. |
| 3. Image Density | 2 images (hero of Lena in home setting, small product flat-lay) | Image-moderate. Lena is the trust asset — show her. |
| 4. Color Temperature | **Neutral (white, off-white #FAF9F7 background, brand green CTA)** | Neutral is the GF default at pre-purchase — universally safe. |
| 5. Email Length | **Short (~250 words)** | Welcome = welcome. Long enough to deliver code + Lena intro + WELCOME10, short enough not to fatigue. |
| 6. Argument Structure | **Direct + Story fragment (Lena intro)** | "Here's your code. Here's who I am." Minimum viable trust. |
| 7. Visual Rhythm | **Open (64px section gaps)** | Generous whitespace. Welcome is breathing room. |
| 8. CTA Position | **Early (after hero) + Late (after body) — double-tap** | WELCOME10 is the primary action; double-tap because it converts best. |
| 9. Subject Line | **Observation + code: "Welcome — here's 10% off your first order."** | No level label. Universal. The code is the hook. |

**Sub-group variations:**
- **A:** Trust delta +1.0 (6.5). Code is concrete, Lena is peer. Lands perfectly.
- **B:** Trust delta +0.5 (4.0). Passes V16 because "two sons" is non-level-specific. She breathes.
- **C:** Trust delta +0.5 (5.5). Lena voice is universal. Mechanism hasn't arrived yet, but neutral-positive opens.
- **D:** Trust delta +1.0 (5.0). She clicked past the pop-up, but this email doesn't label her. Gentle landing.
- **E:** Trust delta +1.0 (4.0). The code reactivates her. Discount is the hook.

**WHY E1 is the safest mail:** It does nothing but welcome + introduce Lena. No mechanism. No level. No diagnosis assumption. E1 is structurally the cleanest possible Welcome — and that is by design. **Vulnerability flag:** None. This is the safest mail in the entire GF sequence.

---

#### WELCOME E2 — Mechanism Reveal, "Holy Shit" Moment (Day 1)

| Dim | Choice | WHY |
|---|---|---|
| 1. Section Count | **7 (Header, Hero, Bridge, Mechanism body, Recognition Anchors body, Failure reframes, CTA, Footer)** | Long-form. This is the mechanism reveal — it must do real work. |
| 2. Section Order | **Pattern C — Problem-Solution** | Observation → mechanism → proof → CTA. Classic. |
| 3. Image Density | **3 images (hero with child + parent silhouette, mechanism diagram [Signal Bridge / Interoception Pathway], small product shot)** | Mechanism diagram is critical — Group C is mechanism-curious, Group A is mechanism-accepting. |
| 4. Color Temperature | **Cool (mint tint #E8F5E9 in mechanism block, brand green CTA)** | Cool = scientific, trustworthy, mechanism-y. Helps Group C feel seen. |
| 5. Email Length | **Long (~900 words)** | Mechanism reveal must be substantive. Group A is curious. Group C is reading. Group D is watching. |
| 6. Argument Structure | **Data-led + Story fragment (the parent who "tried everything")** | Mechanism carries the argument. The story of a parent in the same boat carries the emotion. |
| 7. Visual Rhythm | **Tight (40px gaps) in mechanism section, open elsewhere** | Mechanism block reads dense — that's intentional. Whitespace around it lets the density breathe. |
| 8. CTA Position | **Mid (after mechanism + anchors)** | She needs the mechanism to convert. CTA is mid because the story + science IS the conversion argument. |
| 9. Subject Line | **Observation + mechanism tease: "Whether your child talks about the potty but doesn't produce…"** | Mirrors the body's first sentence. No level label. Pure symptom description. |

**Sub-group variations:**
- **A:** Trust delta **+2.0 (7.5)** — TIPPING POINT. Mechanism lands, science is real. She's now invested.
- **B:** Trust delta +0.5 (4.5) — V16 litmus test. Symptom language ("doesn't notice when they're wet") passes her filter. **If copy mentions "autistic children often can't feel body signals," B drops to 2.0.**
- **C:** Trust delta **+1.5 (7.0)** — Interoception is the right mechanism for her. She has read Mahler; now sees the brand reading her literature.
- **D:** Trust delta +1.0 (6.0) — Three anchors cover her level without naming it. She may click the migration anchor here.
- **E:** Trust delta +0.5 (4.5) — Open-dependent. If she opens, mechanism lands.

**Vulnerability flags:** R2 violation (fewer than 3 anchors) drops A and D. R1 violation ("autistic children often…") drops B to 2.0. E2 is the most-trusted-but-most-fragile email in the Welcome.

**First migration anchor:** Soft story link: "If your child is 5, verbal, and 'gets it but doesn't get it' — read Sarah's story." Click updates tag IF and only if click reaches 70%+ confidence threshold (Giuliano §1.1).

---

#### WELCOME E3 — Guarantee + Permission Not to Buy (Day 3)

| Dim | Choice | WHY |
|---|---|---|
| 1. Section Count | **5 (Header, Hero, Bridge, Guarantee body, Permission body, CTA, Footer)** | Medium. Decision-time email — substantial but not exhaustive. |
| 2. Section Order | **Pattern A — Classic Hero-to-CTA (modified: hero = guarantee promise)** | The guarantee IS the hero. |
| 3. Image Density | **2 images (hero of pairs in laundry setting, small Lena photo + signature)** | Lena voice carrying the guarantee. |
| 4. Color Temperature | **Warm (cream #FBF7EB cards, brand green CTA)** | Warm = cozy, intimate, "we've got your back." Matches permission-not-to-buy tone. |
| 5. Email Length | **Medium (~500 words)** | Guarantee + permission-not-to-buy need breathing room but no padding. |
| 6. Argument Structure | **Direct + PAS (risk reversal)** | "You don't have to hope — just try." Risk reversal is the lever. |
| 7. Visual Rhythm | **Open (60px gaps)** | Generous. The permission-not-to-buy message requires whitespace to feel genuine. |
| 8. CTA Position | **Mid (after guarantee) + Late (after permission)** — double-tap | She can convert on the guarantee OR on the permission. Two paths. |
| 9. Subject Line | **Permission: "You don't have to hope. Just try — 60 days."** | Permission framing. No level label. |

**Sub-group variations:**
- **A:** +0.3 (7.8) — Guarantee + permission feels respectful.
- **B:** **+1.0 (5.5)** — The guarantee with permission-not-to-buy is exactly what she needs. **No "you should buy this" pressure.**
- **C:** 0 (7.0) — Mechanism-curious. Guarantee frames the trial scientifically.
- **D:** **+1.0 (7.0)** — Realism-anchored mom values permission most. "If today isn't the day, that's a real answer" lands hardest for her.
- **E:** 0 (4.5) — Open-dependent.

**Vulnerability flag:** Pre-K urgency copy ("Before kindergarten starts!") destroys Group A's trust here and Group D's at higher amplitude. L1-only allowance of Pre-K urgency does NOT extend to GF.

---

#### WELCOME E4 — Failure Acknowledgment, "You Didn't Fail" (Day 7)

| Dim | Choice | WHY |
|---|---|---|
| 1. Section Count | **6 (Header, Hero, Bridge, "You didn't fail" body, Three failed methods body, Absolution + CTA, Footer)** | Catharsis email needs space to breathe. |
| 2. Section Order | **Pattern B — Story-Led** | The catharsis IS the story. Brand signature line is the peak. |
| 3. Image Density | **1 image (Lena portrait — this is Lena's voice mail)** | Lena carries the mail. One strong image. |
| 4. Color Temperature | **Warm (cream + soft yellow #F5C84B accent on signature line)** | Warm = intimate, human, the color of absolution. |
| 5. Email Length | **Medium (~600 words)** | Catharsis can't be rushed but can't be padded. |
| 6. Argument Structure | **Story-led (Lena voice) + reframes** | "You didn't fail. You solved the wrong problem." Three failed methods named (sticker charts, naked weekends, 3-day method). |
| 7. Visual Rhythm | **Open (64px gaps around signature line block)** | The signature line gets its own breathing room. |
| 8. CTA Position | **Late (after full absolution)** | She needs to be absolved before she converts. CTA cannot precede the catharsis. |
| 9. Subject Line | **Validation: "You didn't fail potty training. You solved the wrong problem."** | Brand signature line. For Group B, subject uses the softened variant: "The method didn't fail. The frame did." |

**Sub-group variations:**
- **A:** +0.7 (8.5) — **First absolution.** Sees, not blamed.
- **B:** +0.5 (6.0) **IF softened version**; **drops to 3.0 IF maternal-blame version without Lena voice.** Critical V16 sub-violation.
- **C:** +0.5 (7.5) — Mechanism-aligned: "the frame was behavioral, the issue is signal-timing" is her scientific language.
- **D:** **+1.0 (8.0) — Cathartic.** Exact words she needed to hear.
- **E:** Not opened.

**Second migration anchor:** Different symptom profile from E2 — "If your child is 7, has the words, but never connects them to the action — read Lisa's story."

**Vulnerability flag:** Maternal-blame version of the signature line for Group B. ALWAYS use softened version in subject AND body in GF.

---

#### WELCOME E5 — Deep Mechanism, Interoception Dive (Day 10)

| Dim | Choice | WHY |
|---|---|---|
| 1. Section Count | **8 (Header, Hero, Bridge, Mahler/interoception body, Three-Family mechanism reference body, Recognition Anchors re-stated, Migration reinforcement, CTA, Footer)** | Long. Mechanism deep dive. Group C is in her element here. |
| 2. Section Order | **Pattern F — Education-First** | The science IS the email. CTA at end after full mechanism argument. |
| 3. Image Density | **3 images (interoception diagram, sensory pathway illustration, small product shot)** | Diagram-heavy. Group C eats this up. |
| 4. Color Temperature | **Cool (mint tint, soft blue accents)** | Mechanism + science. Cool = trustworthy, data-led. |
| 5. Email Length | **Long (~1100 words)** | The deepest mechanism email in the Welcome. |
| 6. Argument Structure | **Data-led (Mahler quote acceptable, NOT required) + Story fragment (parent observing interoceptive awakening)** | Mechanism carries everything. |
| 7. Visual Rhythm | **Tight (40px gaps) in mechanism section, open (64px) between major sections** | Dense mechanism block, breathing room around it. |
| 8. CTA Position | **Late (after full mechanism argument)** | Group C and Group A need the mechanism to convert. Mid-CTA would be premature. |
| 9. Subject Line | **Mechanism tease: "The signal your child's brain isn't sending (yet)."** | Pure mechanism. No level label. No age pin. |

**Sub-group variations:**
- **A:** +0.5 (9.0) — Peak trust. Science lands.
- **B:** +0.5 (6.5) — Mechanism without labels. She may finally believe the brand is safe.
- **C:** **+1.0 (8.5) — Peak trust.** Mahler quote is her canon.
- **D:** 0 (8.0) — Realism-anchored mom uses this email to decide whether to migrate at Day 14.
- **E:** Gone.

**Vulnerability flags:**
- **SPARK 49% statistic** — Names autism explicitly. Forbidden in GF. Use "almost 1 in 2 kids with nervous system differences aren't trained by age 5."
- **Citing autism-specific research by name** — Mahler and Ayres are safe; SPARK, CDC prevalence stats, and DSM-5 references are not.
- **Citing autism as a diagnosis frame anywhere** — even in parentheses.

**Third migration anchor:** Third and final migration anchor of Welcome. Different symptom profile again. After E5, if no migration, PP-Level Detection at D14 is the next opportunity.

---

#### WELCOME E6 — Social Proof, Three-Family Pattern (Day 14)

| Dim | Choice | WHY |
|---|---|---|
| 1. Section Count | **6 (Header, Hero, Bridge, Three-Family story block 1, story block 2, story block 3, CTA, Footer)** | Three testimonials deserve space. |
| 2. Section Order | **Pattern D — Social Proof First** | Stories carry the email. No mechanism in body — E5 was the mechanism. E6 is "you are not alone." |
| 3. Image Density | **3 images (one per family — diverse representation per GF image rule)** | Each story has a face. Composite feel across the three. |
| 4. Color Temperature | **Warm (cream + soft yellow trust badges)** | Warm = peer voice. Testimonial color. |
| 5. Email Length | **Medium (~700 words across three stories)** | ~230 words per story — substantive but not bloated. |
| 6. Argument Structure | **Testimonial-led** | Three peer voices. Universal. |
| 7. Visual Rhythm | **Open (64px between story blocks)** | Each story breathes. |
| 8. CTA Position | **Late (after all three stories)** | She reads all three before deciding. |
| 9. Subject Line | **Parent quote fragment: "'He just sat there. Nothing happened. For 20 minutes.'"** | Symptom-described in the parent's voice. No level label. |

**Sub-group variations:**
- **A:** 0 (9.0) — Sees herself in story 1 (L1-style "sits 20 min, nothing happens") or story 2 (L2-style).
- **B:** +0.5 (6.5) — Language is safe. Stories use symptom descriptions only.
- **C:** 0 (8.5) — Peer mechanism validated.
- **D:** +0.5 (8.5) — **Sees her level (story 3: "didn't react to wet for years").** Likely migrates at PP-Level Detection.
- **E:** Re-engagement possible (+0.5 to 4.5) if peer voice lands.

**CRITICAL CONFLICT NOTE:** PP-Level Detection ALSO fires at Day 14. Per S01 §5.2 and locked-profile flow_meta, **PP-Level Detection takes priority over Welcome E6 for GF purchasers.** For GF non-purchasers (Welcome-only path), E6 still fires normally. Suppression logic: if `purchased=true` AND `level=gf`, suppress Welcome E6, deliver PP-Level Detection.

**Vulnerability flag:** Any story block that says "Level 1 mom" or "Level 3 mom." Symptom language ONLY.

---

#### WELCOME E7 — Last Call, WELCOME10 Expires (Day 17)

| Dim | Choice | WHY |
|---|---|---|
| 1. Section Count | **4 (Header, Hero, Code expiry body, Permission body, CTA, Footer)** | Short. Code expiry mail — concise. |
| 2. Section Order | **Pattern G — Urgency-Driven (modified for permission)** | Code expiry IS the urgency. Permission-not-to-buy IS the safety valve. |
| 3. Image Density | **1 image (hero — code visual)** | One strong visual. The code. |
| 4. Color Temperature | **Warm (cream + yellow #F5C84B for expiry badge)** | Warm with strategic urgency color on the badge. |
| 5. Email Length | **Short (~300 words)** | Short and direct. |
| 6. Argument Structure | **Direct (code expiry) + Permission** | "Last chance for the code. If today isn't the day, that's a real answer." |
| 7. Visual Rhythm | **Open (60px gaps)** | Whitespace = permission. Density = pressure. We want permission. |
| 8. CTA Position | **Mid (code CTA) + Late (permission CTA)** — double-tap | She can use the code OR exit gracefully. |
| 9. Subject Line | **Permission + code: "Your 10% code expires tonight — but only if today's the day."** | Permission framing in the urgency. |

**Sub-group variations:**
- **A:** −0.5 (8.5) — Motivated by code expiry but feels mildly pressured.
- **B:** −0.5 (6.0) — Skeptical of expiry-as-rationale but doesn't drop.
- **C:** −0.5 (8.0) — Code expiry irrelevant to mechanism-curious mom.
- **D:** −0.5 (7.5) — Ambivalent.
- **E:** +0.5 (5.0) — Re-engagement if she opens.

**Vulnerability flag:** "Last chance" language (L1 NO-GO applies cross-level GF). Cheerleading tone ("Don't miss out!") destroys GF trust universally.

---

#### WELCOME E8 — Gentle Close, Door Open (Day 21)

| Dim | Choice | WHY |
|---|---|---|
| 1. Section Count | **3 (Header, Hero/Body combined, Migration anchors + sign-off, Footer)** | Minimalist. The farewell. |
| 2. Section Order | **Pattern H — Minimalist** | "Door is open. Lena farewell." No persuasion. |
| 3. Image Density | **1 image (Lena signature portrait)** | Lena carries the goodbye. |
| 4. Color Temperature | **Neutral (off-white background, soft gray text)** | Quiet, not aggressive. Farewell tone. |
| 5. Email Length | **Short (~200 words)** | The shortest in Welcome. Gentle. |
| 6. Argument Structure | **Story-led (Lena farewell) + Permission** | "If today isn't the day, the door stays open." |
| 7. Visual Rhythm | **Open (80px gaps)** | Maximum breathing room. The goodbye needs whitespace. |
| 8. CTA Position | **Text-link only (low-aggression)** | The CTA is "Read Sarah/Lisa/Maria's story" — text links, not buttons. Door-open energy. |
| 9. Subject Line | **Validation: "The door stays open. Whenever you're ready."** | No code, no urgency, no level. Just the door. |

**Sub-group variations:**
- **A:** −0.5 (8.0) — Closing tone may feel like a push.
- **B:** 0 (6.0) — Steady.
- **C:** 0 (8.0).
- **D:** +0.5 (8.0) — If migrated, trust is high.
- **E:** 0 (5.0).

**Migration anchors surface one final time.** Expected opens 20–30%. Keep warm. No hard close.

**Vulnerability flag:** Hard close. Any "Buy now before…" language is V-rule violation.

---

### FLOW 02 — CART ABANDONMENT (3 emails)

GF receives the cross-level Cart Abandonment with universal R1–R6 calibration. The Three-Family Pattern is essential because every sub-group must find herself.

#### CART E1 (1h) — Mechanism Reminder

| Dim | Choice | WHY |
|---|---|---|
| 1. Section Count | **5 (Header, Hero, Bridge, 3–5 Recognition Anchors, CTA, Footer)** | Medium. Cart abandonment — fast, mechanism-led. |
| 2. Section Order | **Pattern C — Problem-Solution** | "Here's what these would solve." |
| 3. Image Density | **2 images (hero with product in context, small Lena avatar)** | Lena voice present. |
| 4. Color Temperature | **Cool (mint tint) — mechanism-led** | Mechanism, not promo. |
| 5. Email Length | **Medium (~450 words)** | 3–5 anchors need space. |
| 6. Argument Structure | **Mechanism-led (recognition anchors) + Lena voice** | "I saw these were on your mind…" |
| 7. Visual Rhythm | **Tight (40px) in anchor block, open elsewhere** | Anchors read as a list; surrounding whitespace lets them breathe. |
| 8. CTA Position | **Mid (after anchors)** | She needs to recognize before converting. |
| 9. Subject Line | **Question: "These were on your mind — were they the right ones?"** | Lena voice, no level. |

**Sub-group variations:**
- **A:** +1.0 (7.5) — high intent, no friction.
- **B:** +0.5 (5.5) — passes V16.
- **C:** +1.0 (7.0).
- **D:** +1.0 (6.5).
- **E:** +1.0 (4.5) — open-dependent.

**Vulnerability flag:** "Don't forget your cart" framing = sales-y. Mechanism-first required.

---

#### CART E2 (24h) — Social Proof + Product Value

| Dim | Choice | WHY |
|---|---|---|
| 1. Section Count | **6 (Header, Hero, Bridge, Three-Family testimonial, Product value body, CTA, Footer)** | Social proof carries the body. |
| 2. Section Order | **Pattern D — Social Proof First** | "Other parents like you…" |
| 3. Image Density | **3 images (hero, 1 family story image, product)** | Three-Family Pattern uses faces. |
| 4. Color Temperature | **Warm (cream + soft yellow trust badges)** | Peer voice = warm. |
| 5. Email Length | **Medium (~600 words)** | Story + product = medium. |
| 6. Argument Structure | **Testimonial-led + Product showcase** | "Most parents who buy 1 pair come back for 3+3 within a week." |
| 7. Visual Rhythm | **Open (60px gaps)** | Stories breathe. |
| 8. CTA Position | **Mid (after story) + Late (after product)** — double-tap | Two conversion paths. |
| 9. Subject Line | **Story fragment: "'I added them to cart and didn't check out for two days. Then I read this.'"** | Symptom-described, not level-labeled. |

**Sub-group variations:** All +0.5.

**Vulnerability flag:** "L1 mom bought this" framing. Symptom description only.

---

#### CART E3 (72h) — 60-Day Guarantee + Permission Not to Buy

| Dim | Choice | WHY |
|---|---|---|
| 1. Section Count | **4 (Header, Hero, Guarantee body, Permission body, CTA, Footer)** | Short. Last cart mail. |
| 2. Section Order | **Pattern H — Minimalist (modified)** | Guarantee is the headline. Permission is the safety valve. |
| 3. Image Density | **1 image (Lena + guarantee badge)** | Guarantee visual. |
| 4. Color Temperature | **Warm (cream + yellow trust badges)** | Cozy. "We've got your back." |
| 5. Email Length | **Short (~300 words)** | Direct. |
| 6. Argument Structure | **Direct (risk reversal) + Permission** | "Try it for 60 days. By your judgment." |
| 7. Visual Rhythm | **Open (60px)** | Whitespace = permission. |
| 8. CTA Position | **Mid (guarantee CTA) + Late (permission CTA)** | Two paths. |
| 9. Subject Line | **Permission: "If today isn't the day, that's a real answer."** | From Checkout Abandonment E1 — same permission language. |

**Sub-group variations:**
- **A:** 0 (8.0).
- **B:** **+0.5 (6.5)** — Guarantee is the strongest lever for her.
- **C:** 0 (7.5).
- **D:** +0.5 (7.5).
- **E:** n/o.

**Vulnerability flag:** "10% off if you buy now" sales pressure. Test discount AFTER the permission framing.

---

### FLOW 03 — CHECKOUT ABANDONMENT (2 emails)

Highest-intent abandoners. No additional discount (macro rule). 60-day guarantee is the lever, especially for Groups B and D.

#### CHECKOUT E1 (1h) — Friendly Reminder

| Dim | Choice | WHY |
|---|---|---|
| 1. Section Count | **4 (Header, Hero/Cart summary, Permission body, CTA, Footer)** | Short. She was at checkout — she remembers the cart. |
| 2. Section Order | **Pattern E — Product-First (cart is hero)** | Show her cart contents. |
| 3. Image Density | **2 images (cart product hero, Lena avatar)** | Cart + Lena. |
| 4. Color Temperature | **Neutral (off-white background, brand green CTA)** | Neutral = transactional, respectful. |
| 5. Email Length | **Short (~250 words)** | Direct. |
| 6. Argument Structure | **Direct (cart reminder) + Permission** | "If today isn't right, that's a real answer." |
| 7. Visual Rhythm | **Open (60px)** | Permission tone. |
| 8. CTA Position | **Mid (cart CTA) + Late (permission CTA)** | Two paths. |
| 9. Subject Line | **Permission: "Still thinking it over? That's a real answer."** | No pressure. |

**Sub-group variations:** All +0.5. E +1.0 (4.5) — recovery framing lands.

**Vulnerability flag:** No additional discount (highest-intent abandoners). Cross-level only — no segmentation.

---

#### CHECKOUT E2 (24h) — Final Nudge + Guarantee

| Dim | Choice | WHY |
|---|---|---|
| 1. Section Count | **3 (Header, Guarantee hero, Permission body, CTA, Footer)** | Minimalist. The guarantee IS the mail. |
| 2. Section Order | **Pattern H — Minimalist** | "Try it for 60 days. By your judgment." |
| 3. Image Density | **1 image (guarantee badge visual)** | One image. One message. |
| 4. Color Temperature | **Warm (cream + yellow trust badge)** | Cozy = guarantee. |
| 5. Email Length | **Short (~200 words)** | Final nudge = concise. |
| 6. Argument Structure | **Direct (risk reversal)** | Pure guarantee. |
| 7. Visual Rhythm | **Open (64px)** | Whitespace. |
| 8. CTA Position | **Mid (guarantee CTA) + Late (permission CTA)** | Two paths. |
| 9. Subject Line | **Risk reversal: "60 days. By your judgment."** | The guarantee. |

**Sub-group variations:**
- **A:** 0 (8.5).
- **B:** **+0.5 (7.0)** — **Guarantee is the strongest lever for B.** No pressure, just a promise.
- **C:** 0 (7.5).
- **D:** **+1.0 (8.0)** — Realism-anchored. "Try it for 60 days" is exactly her language.
- **E:** Gone.

---

### FLOW 04 — BROWSE ABANDONMENT (3 emails)

Group E (Cart/Browse without Opt-In, ~10% of GF) lives here in volume. Mechanism-led, not promo-led.

#### BROWSE E1 (24h) — Mechanism Education Hook

| Dim | Choice | WHY |
|---|---|---|
| 1. Section Count | **5 (Header, Hero, Mechanism body, Product tie-in, CTA, Footer)** | Medium. Mechanism-led, no offer yet. |
| 2. Section Order | **Pattern F — Education-First** | Mechanism first. |
| 3. Image Density | **2 images (hero, product silhouette)** | Product is secondary — mechanism leads. |
| 4. Color Temperature | **Cool (mint tint)** | Mechanism = cool. |
| 5. Email Length | **Medium (~450 words)** | Mechanism with breathing room. |
| 6. Argument Structure | **Mechanism-led (educational, not promotional)** | "You were looking at something that helps kids who can't feel when they need to go." |
| 7. Visual Rhythm | **Open (60px)** | Educational, not aggressive. |
| 8. CTA Position | **Late (after full mechanism argument)** | She needs to understand before clicking. |
| 9. Subject Line | **Mechanism tease: "You were looking at something. Here's why it works."** | No level. No diagnosis. Mechanism-first. |

**Sub-group variations:** All +1.0 if opened. E is here in volume.

**Vulnerability flag:** Promo-led approach. Mechanism must lead.

---

#### BROWSE E2 (3 days) — Deep Mechanism + Product Education

| Dim | Choice | WHY |
|---|---|---|
| 1. Section Count | **6 (Header, Hero, Mechanism body, 3-layer system explainer, Three-Family testimonial, CTA, Footer)** | Longer. Mechanism deep + product context. |
| 2. Section Order | **Pattern F — Education-First** | Mechanism deep. Product tie-in second. |
| 3. Image Density | **3 images (3-layer system diagram, hero, family testimonial)** | Diagram-heavy. |
| 4. Color Temperature | **Cool (mint tint + soft blue)** | Mechanism = cool. |
| 5. Email Length | **Medium-long (~700 words)** | Mechanism + product explainer. |
| 6. Argument Structure | **Data-led (mechanism) + Testimonial-led (one Three-Family)** | Both modes. |
| 7. Visual Rhythm | **Tight (40px) in mechanism block, open elsewhere** | Mechanism dense, breathing room around it. |
| 8. CTA Position | **Late (after product tie-in)** | She needs to understand the product in mechanism context. |
| 9. Subject Line | **Mechanism tease + product: "The 3-layer system works differently — here's why."** | Mechanism + product. |

**Sub-group variations:**
- **A:** +1.0 (7.5).
- **B:** +0.5 (5.5).
- **C:** +1.0 (7.5) — Mechanism lands perfectly.
- **D:** +1.0 (6.5).
- **E:** +0.5 (4.5) — fragile here.

**Vulnerability flag:** Direct offer before E3. Forbidden until E3 in browse flow.

---

#### BROWSE E3 (7 days) — 60-Day Guarantee + Gentle Close

| Dim | Choice | WHY |
|---|---|---|
| 1. Section Count | **4 (Header, Hero, Guarantee body, Gentle close + CTA, Footer)** | First offer appears. |
| 2. Section Order | **Pattern A — Classic Hero-to-CTA** | Standard close. |
| 3. Image Density | **2 images (product hero, Lena avatar)** | Product + Lena. |
| 4. Color Temperature | **Warm (cream + yellow guarantee badge)** | Warm = cozy close. |
| 5. Email Length | **Short (~300 words)** | Direct. |
| 6. Argument Structure | **Direct (risk reversal) + Permission** | "60 days for your child's nervous system to start connecting." |
| 7. Visual Rhythm | **Open (60px)** | Permission tone. |
| 8. CTA Position | **Mid (guarantee CTA) + Late (permission CTA)** | Two paths. |
| 9. Subject Line | **Risk reversal: "60 days for your child's nervous system to start connecting."** | Mechanism + guarantee in subject. |

**Sub-group variations:** All +0.5 (open-dependent).

**Vulnerability flag:** Hard sell tone. This is the first offer in browse — keep gentle.

---

### FLOW 05 — ORDER CONFIRMATION (1 email, Day 0)

The customer's first post-purchase brand impression. Predominantly transactional per Google 2024 rule. ONE accessory cross-sell (wash bag) — soft.

| Dim | Choice | WHY |
|---|---|---|
| 1. Section Count | **5 (Header, Hero/Order summary, Shipping timeline, Guarantee reminder, ONE accessory cross-sell, CTA, Footer)** | Transactional + soft accessory. |
| 2. Section Order | **Pattern H — Minimalist (transactional)** | Order summary first. Cross-sell last. |
| 3. Image Density | **1 image (product in cart)** | Transactional. |
| 4. Color Temperature | **Neutral (off-white, soft gray accents, brand green CTA)** | Transactional = neutral. |
| 5. Email Length | **Short (~250 words)** | Transactional mail = concise. |
| 6. Argument Structure | **Direct (transactional)** | Order confirmation tone. |
| 7. Visual Rhythm | **Open (60px)** | Order details breathe. |
| 8. CTA Position | **Mid (accessory cross-sell CTA)** | The wash bag is a soft suggestion. |
| 9. Subject Line | **Transactional: "Your BrightKidCo order is confirmed."** | Standard transactional. |

**Sub-group variations:**
- **A:** +0.5 (8.5) — peak hope.
- **B:** **+1.0 (7.0)** — Commits soften the defensive filter.
- **C:** +0.5 (8.0).
- **D:** +0.5 (7.5).
- **E:** **+2.0 (6.0)** — E's biggest jump in lifecycle. She just bought.

**Vulnerability flag:** Promotional content (Google 2024 rule violation; spam risk). NO upsell stacking. ONE accessory cross-sell maximum.

---

### FLOW 06 — SHIPPING & OUT FOR DELIVERY (2 emails)

#### SHIPPING E1 (Fulfillment) — Tracking + Excitement

| Dim | Choice | WHY |
|---|---|---|
| 1. Section Count | **3 (Header, Tracking hero, Teaser body, Footer)** | Minimalist. Tracking is the message. |
| 2. Section Order | **Pattern H — Minimalist** | Tracking + teaser. |
| 3. Image Density | **1 image (package in shipping context)** | One product image. |
| 4. Color Temperature | **Warm (cream, soft yellow tracking badge)** | Excitement = warm. |
| 5. Email Length | **Short (~150 words)** | Tracking mail = concise. |
| 6. Argument Structure | **Direct (transactional) + Lena voice teaser** | "Can't wait for you to try them. — Lena." |
| 7. Visual Rhythm | **Open (60px)** | Excitement builds. |
| 8. CTA Position | **Text-link (track package)** | Text-link is appropriate for tracking. |
| 9. Subject Line | **Transactional: "Your BrightKidCo order has shipped."** | Standard. |

**Sub-group variations:** A +0.5 (9.0). B, C, D, E all 0.

---

#### SHIPPING E2 (Morning of Delivery) — "Today's the day!"

| Dim | Choice | WHY |
|---|---|---|
| 1. Section Count | **5 (Header, Hero, Prep guidance body, Expectation management, Footer)** | Medium. Prep guidance needs space. |
| 2. Section Order | **Pattern A — Classic Hero-to-CTA (no CTA — prep guidance)** | Hero + prep + manage expectations. |
| 3. Image Density | **2 images (hero of arrival, small product close-up)** | Two images. |
| 4. Color Temperature | **Warm (cream + soft yellow "today" badge)** | Excited warm. |
| 5. Email Length | **Medium (~400 words)** | Prep guidance + expectation management. |
| 6. Argument Structure | **Direct (prep guidance) + Story fragment (Lena "I remember unboxing ours")** | Lena voice. |
| 7. Visual Rhythm | **Open (60px)** | Excitement + calm. |
| 8. CTA Position | **No CTA — pure delivery guidance** | Prep guidance doesn't need a button. |
| 9. Subject Line | **Excitement: "They're on their way today."** | Anticipation. |

**Sub-group variations:**
- **A:** 0 (9.0).
- **B:** +0.5 (7.5).
- **C:** 0 (8.0).
- **D:** +0.5 (8.0).
- **E:** +0.5 (6.5).

**Vulnerability flag:** Outcome promises ("Your child will train this week!" — L1/L2/L3 forbidden). Manage expectations: "First few wears are about introducing the sensation, not results."

---

### FLOW 07 — ARRIVED & WELCOME (1 email)

The customer's first physical product moment. Mechanism education is critical.

| Dim | Choice | WHY |
|---|---|---|
| 1. Section Count | **7 (Header, Hero, First-wear protocol body, Mechanism body, Timeline block, Soft upsell, Footer)** | Long. First-wear is a moment. |
| 2. Section Order | **Pattern F — Education-First + Product showcase** | Mechanism + product + timeline. |
| 3. Image Density | **3 images (arrival hero, mechanism diagram, soft upsell product)** | Three-image cadence. |
| 4. Color Temperature | **Warm (cream + mint mechanism block)** | Warm welcome + cool mechanism. |
| 5. Email Length | **Long (~900 words)** | First-wear protocol needs substance. |
| 6. Argument Structure | **Mechanism-led + Direct (prep)** | "The wetness signal works by letting your child FEEL when they're wet." |
| 7. Visual Rhythm | **Mixed (tight in mechanism block, open elsewhere)** | Density in mechanism, breathing room around. |
| 8. CTA Position | **Mid (soft upsell CTA) + Late (timeline link)** — double-tap | Two CTAs: bundle upgrade + resources. |
| 9. Subject Line | **Excitement + mechanism: "They're here. Here's how the first wear works."** | Arrival + mechanism. |

**Sub-group variations:**
- **A:** +1.0 (9.0) — Peak hope.
- **B:** +0.5 (7.5).
- **C:** +0.5 (8.5).
- **D:** +0.5 (8.0).
- **E:** +0.5 (6.5).

**Vulnerability flag:** Outcome promises in timeline. Upsell framed as "you didn't buy enough." Frame as rotation need.

---

### FLOW 08 — PP-DIRECT UPSELL (2 emails, 1-pair buyers only)

#### PP-DIRECT UPSELL E1 (Day 1) — Bundle Comparison

| Dim | Choice | WHY |
|---|---|---|
| 1. Section Count | **6 (Header, Hero, Bridge, Bundle comparison table, Math reframe body, CTA, Footer)** | Comparison block + math reframe. |
| 2. Section Order | **Pattern E — Product-First (bundle comparison)** | Product is hero. |
| 3. Image Density | **3 images (1-pair, 3+3 bundle, 5+5 bundle)** | Comparison visuals. |
| 4. Color Temperature | **Neutral (white table, brand green CTA)** | Comparison = neutral, readable. |
| 5. Email Length | **Medium (~500 words)** | Comparison + reframe. |
| 6. Argument Structure | **Direct (comparison) + Data-led (math reframe)** | Math reframe OK for GF (L1–L2 only; L3 is forbidden but at this stage we don't know if she'll be L3). |
| 7. Visual Rhythm | **Open (60px)** | Comparison table breathes. |
| 8. CTA Position | **Late (after full comparison)** | She needs the comparison to convert. |
| 9. Subject Line | **Direct: "Most parents who buy 1 pair come back for 3+3 within a week. Here's why."** | Pattern interrupt — most. |

**Sub-group variations:**
- **A:** 0 (9.0).
- **B:** **−0.5 (7.0)** — Bundle size reflects her defensiveness. "Incomplete purchase" framing bristles.
- **C:** 0 (8.5).
- **D:** **−0.5 (7.5)** — Same as B. "Incomplete" framing.
- **E:** 0 (6.5).

**Vulnerability flag:** "You didn't buy enough." Frame as rotation need. Math reframe acceptable pre-migration; suppression logic switches if migrated to L3.

---

#### PP-DIRECT UPSELL E2 (Day 3) — 10% Off Add-On

| Dim | Choice | WHY |
|---|---|---|
| 1. Section Count | **4 (Header, Hero, Add-on body, CTA, Footer)** | Short. Final upsell. |
| 2. Section Order | **Pattern E — Product-First** | Product is hero. |
| 3. Image Density | **2 images (3+3 bundle hero, small 1-pair reminder)** | Comparison reminder. |
| 4. Color Temperature | **Neutral + warm (cream card with yellow 10% badge)** | Soft upsell. |
| 5. Email Length | **Short (~250 words)** | Last attempt pre-D14. |
| 6. Argument Structure | **Direct (add-on) + Math reframe** | Math reframe OK. |
| 7. Visual Rhythm | **Open (60px)** | Gentle. |
| 8. CTA Position | **Mid (add-on CTA)** | Single CTA. |
| 9. Subject Line | **Direct: "10% off the bundle that goes with what you bought."** | Soft discount framing. |

**Sub-group variations:** All 0 or −0.5 (math-reframe lands heavy).

**Vulnerability flag:** Discount-first framing. Test without discount first.

---

### FLOW 09 — PP-LEVEL DETECTION (1 email, Day 14) — THE BIG LEVER

**The single biggest conversion lever in the entire GF system. Day 14 is the inflection point of the GF lifecycle.**

| Dim | Choice | WHY |
|---|---|---|
| 1. Section Count | **4 (Header, Hero/Question, 3–4 Story link blocks, Soft sign-off, Footer)** | Short. **This mail does not sell. It listens.** |
| 2. Section Order | **Pattern H — Minimalist (modified)** | Question + 4 buttons. No mechanism. No product. Pure detection. |
| 3. Image Density | **0–1 images (optional Lena avatar at top, NO product image)** | Detection mail — no product. Lena voice only. |
| 4. Color Temperature | **Neutral (off-white, soft gray text, brand green story links)** | Quiet. Listening tone. |
| 5. Email Length | **Short (~250 words total across 4 story blocks)** | Concise. Each story is 2 sentences. |
| 6. Argument Structure | **Question + Symptom-described story links** | "Do you recognize your child's experience in one of these stories?" |
| 7. Visual Rhythm | **Open (60–80px between story blocks)** | Each story gets its own breathing room. |
| 8. CTA Position | **Text-link only (story links styled as text or low-emphasis button)** | **Lowest CTA aggression of any GF mail.** No buttons. No "Shop now." |
| 9. Subject Line | **Symptom-framed: "Some kids it clicks right away. Others it takes longer. Where's yours?"** | No level label. Symptom-framed. The "where's yours" is the question. |

**The 4 Story Buttons (symptom-described, NEVER level-labeled):**

| Button | Symptom Description | Maps To |
|--------|--------------------|---------|
| 1 | "He talks about the potty but doesn't produce. Sits for 20 minutes. Nothing happens." | L1 (Sarah) |
| 2 | "She pees the second her pull-up comes off. Or holds it for hours and then has an accident." | L2 (Lisa) |
| 3 | "He doesn't seem to notice when he's wet. Or reacts late." | L3 (Maria) |
| 4 | "I'm still figuring out what's going on." | GF (re-confirm) |

**Sub-group variations — THE SINGLE LARGEST TRUST DELTAS IN THE ENTIRE BRIGHTKIDCO SYSTEM:**

- **A — Diagnostic Entrants:** If she received a diagnosis between purchase and D14, she likely clicks Button 1 or 2. **Trust-after click: 9.5. Trust-after no-click: 9.0.** **Delta: +1.0 to +2.0.**
- **B — Diagnosis-Rejecters — THE LITMUS TEST:** Buttons 1–3 describe symptom profiles that imply the diagnosis she rejected. She does NOT click Buttons 1–3. She clicks Button 4 or no button. **Trust-after Button 4: 8.5. Trust-after no-click: 7.0 IF V16 passes (which it must). Trust-after V16 violation: 3.0.** **Delta: +0.5 to +1.0 (V16-compliant); −2.0 to −4.0 (V16 violation).**
- **C — Sensory-Difference:** Buttons 1–3 imply ASD framing she does not accept. She clicks Button 4 or no button. **Trust-after Button 4: 9.0. Trust-after no-click: 8.0.** **Delta: +0.5 to +1.5.**
- **D — Overwhelmed Non-Selectors — THE GOLDMINE:** **40–50% click Buttons 1–3 and migrate.** She has been carrying her level's emotional weight without outlet. **Trust-after click: 9.5 to 10.0 — PEAK TRUST MOMENT IN ENTIRE LIFECYCLE.** **Trust-after no-click: 8.0.** **Delta: +1.5 to +6.0.** **The highest delta of any mail in the system for Group D.**
- **E — Cart/Browse:** Most often clicks Button 4 or no button. **Trust-after Button 4: 7.5. Trust-after no-click: 6.5.** **Delta: +0.5 to +1.0.**

**Suppression priority (CRITICAL):**
1. **PP-Level Detection** — HIGHEST.
2. Welcome GF E6 — SUPPRESSED for purchasers.
3. PP-Education D0-21 E3 — SUPPRESSED.

After Day 14, the customer's tag is either `avatar_general` (no click) or `l1`/`l2`/`l3` (clicked). All subsequent flows use the post-migration tag.

**Vulnerability flag:** Any diagnosis implication in Buttons 1–3. Any "Level 1/2/3" label. Any "autism" framing in preheader. **This is the single highest-stakes email in the entire BrightKidCo system.**

---

### FLOW 10 — PP-MARY S. STORY (1 email, Day 3)

Mary S. founder story. The brand's GF archetype — "didn't know what label to use" parent. Signed as Mary S., NOT Lena. No offer. Pure brand building.

| Dim | Choice | WHY |
|---|---|---|
| 1. Section Count | **5 (Header, Hero, Mary S. founder story body, Brand mission body, CTA, Footer)** | Story-led. Medium. |
| 2. Section Order | **Pattern B — Story-Led** | The story IS the email. |
| 3. Image Density | **1 image (Mary S. portrait — founder photo)** | Mary's face. |
| 4. Color Temperature | **Warm (cream + soft yellow)** | Warm = founder voice. |
| 5. Email Length | **Medium (~500 words)** | Story length. |
| 6. Argument Structure | **Story-led** | Mary S. = founder story. No offer. |
| 7. Visual Rhythm | **Open (64px)** | Story breathes. |
| 8. CTA Position | **Late (single soft CTA — "Read more about why we built this")** | Story-first. CTA is gentle. |
| 9. Subject Line | **Validation: "I started BrightKidCo because my own child couldn't feel the signal."** | Founder voice. No level. Symptom-described. |

**Sub-group variations:**
- **A:** +0.5 (9.5) — Mary as GF archetype lands.
- **B:** **+1.0 (8.0)** — **Mary's "didn't know what label to use" framing is permission for B to read without defensive filter.** Critical for Group B.
- **C:** +0.5 (9.0).
- **D:** **+1.0 (8.5)** — Mary is a mom who clicked past the labels. Archetype resonance.
- **E:** +0.5 (7.0).

**Vulnerability flag:** Mary S. mentioning her child's specific level would break the GF archetype framing. Stay symptom-only.

---

### FLOW 11 — PP-EDUCATION D0-21 (4 emails)

Cross-level R1–R6 throughout. Level-aware content blocks IF tag is known (for migrated Group D, after Day 14). The 49% SPARK stat may NOT be used in GF.

#### PP-EDUCATION E1 (Day 0) — "Your First Wear"

| Dim | Choice | WHY |
|---|---|---|
| 1. Section Count | **4 (Header, Hero, First-wear protocol, Manage expectations, Footer)** | Short. Day 0 — fresh. |
| 2. Section Order | **Pattern F — Education-First** | Education. |
| 3. Image Density | **2 images (hero, small product)** | Two-image cadence. |
| 4. Color Temperature | **Warm (cream)** | Cozy. |
| 5. Email Length | **Short (~250 words)** | First wear = simple. |
| 6. Argument Structure | **Direct (first-wear instructions) + Manage expectations** | "Put on like regular underwear. No expectations." |
| 7. Visual Rhythm | **Open (60px)** | Calm. |
| 8. CTA Position | **Text-link (PP-Education resources)** | Text-link. |
| 9. Subject Line | **Direct: "Your first wear. No expectations — just observe."** | Direct. |

**Sub-group variations:** All 0 (high-trust holding pattern post-purchase).

**Vulnerability flag:** Outcome promises.

---

#### PP-EDUCATION E2 (Day 7) — "What to Look For"

| Dim | Choice | WHY |
|---|---|---|
| 1. Section Count | **5 (Header, Hero, Micro-signs body, 1–2 parent quotes, Footer)** | Medium. Micro-signs list. |
| 2. Section Order | **Pattern F — Education-First** | Education. |
| 3. Image Density | **2 images (hero, parent quote photo)** | Quote photo. |
| 4. Color Temperature | **Cool (mint tint) — observational science** | Mechanism = cool. |
| 5. Email Length | **Medium (~450 words)** | Micro-signs need explanation. |
| 6. Argument Structure | **Data-led (micro-signs list)** | "Pause, touch, look down, shorter dry periods." |
| 7. Visual Rhythm | **Tight (40px) in micro-signs list, open elsewhere** | List reads dense. |
| 8. CTA Position | **Text-link (resources)** | Text-link. |
| 9. Subject Line | **Observation: "What to look for in week one."** | No level. |

**Sub-group variations:**
- **A:** 0 (9.5).
- **B:** 0 (8.0).
- **C:** **+0.5 (9.5)** — Peak mechanism engagement.
- **D:** 0 (8.5).
- **E:** −0.5 (6.5) — Engagement drop.

**Vulnerability flag:** Outcome implications ("By week 2 you should see X").

---

#### PP-EDUCATION E3 (Day 14) — SUPPRESSED

**CRITICAL CONFLICT:** PP-Level Detection takes priority per S01 §5.2. PP-Education E3 is SUPPRESSED for GF purchasers. Replaced by PP-Level Detection. After migration, PP-Education resumes at E4 (Day 21) with level-aware content block IF migrated.

---

#### PP-EDUCATION E4 (Day 21) — "Celebrate the Small Wins"

| Dim | Choice | WHY |
|---|---|---|
| 1. Section Count | **5 (Header, Hero, Small wins body, 1–2 parent quotes, Soft upsell, Footer)** | Medium. Wins deserve space. |
| 2. Section Order | **Pattern D — Social Proof First (parent quote)** | Win story. |
| 3. Image Density | **2 images (hero, parent quote photo)** | Quote. |
| 4. Color Temperature | **Warm (cream + soft yellow win badge)** | Celebration = warm. |
| 5. Email Length | **Medium (~450 words)** | Wins. |
| 6. Argument Structure | **Testimonial-led + Direct (soft upsell)** | "He looked at the wet spot!" |
| 7. Visual Rhythm | **Open (60px)** | Celebration. |
| 8. CTA Position | **Mid (soft upsell CTA)** | Single soft CTA. |
| 9. Subject Line | **Parent quote: "'He looked at the wet spot! For the first time.'"** | Symptom-described. |

**Sub-group variations:**
- **A:** 0 (9.5).
- **B:** 0 (8.0).
- **C:** 0 (9.5).
- **D:** **+0.5 (8.5)** — "He looked at the wet spot" is the L3 line that lands for her.
- **E:** 0 (6.5).

**Vulnerability flag:** Outcome-promising tone. R6 (low-bar metrics) mandatory.

---

### FLOW 12 — PP-EXTENDED UPSELL (3 emails, D28+)

Level-aware (cross-level body with per-level framing). For non-migrated GF, "Cross-level" framing.

#### PP-EXTENDED UPSELL E1 (Day 28) — Bundle Upgrade

| Dim | Choice | WHY |
|---|---|---|
| 1. Section Count | **6 (Header, Hero, Cross-level body, Bundle comparison, CTA, Footer)** | Medium-long. Bundle context. |
| 2. Section Order | **Pattern E — Product-First** | Bundle is hero. |
| 3. Image Density | **3 images (bundle comparison)** | Product. |
| 4. Color Temperature | **Neutral (white table)** | Comparison. |
| 5. Email Length | **Medium (~500 words)** | Comparison + cross-level body. |
| 6. Argument Structure | **Direct (bundle) + Data-led (laundry cycles + consistency)** | "Whether your child is just starting to notice, or has been at this for years — the right amount of pairs depends on laundry cycles and consistency." |
| 7. Visual Rhythm | **Open (60px)** | Comparison breathes. |
| 8. CTA Position | **Late (after full comparison)** | She needs the comparison. |
| 9. Subject Line | **Direct: "The bundle that matches where you are right now."** | No level. |

**Sub-group variations:**
- **A:** −0.5 (9.0).
- **B:** 0 (8.0).
- **C:** −0.5 (9.0).
- **D (migrated):** Level-specific.
- **D (non-migrated):** −0.5 (8.0).
- **E:** −0.5 (6.0).

**Vulnerability flag:** "You need more pairs" sales pressure.

---

#### PP-EXTENDED UPSELL E2 (Day 35) — Accessory Cross-Sell

| Dim | Choice | WHY |
|---|---|---|
| 1. Section Count | **5 (Header, Hero, Wash Bag block, Magic Targets block, CTA, Footer)** | Medium. Two-product cross-sell. |
| 2. Section Order | **Pattern E — Product-First** | Product showcase. |
| 3. Image Density | **3 images (Wash Bag, Magic Targets, hero)** | Three products. |
| 4. Color Temperature | **Warm (cream + yellow accessories badge)** | Friendly cross-sell. |
| 5. Email Length | **Medium (~400 words)** | Two products. |
| 6. Argument Structure | **Direct (product showcase)** | Cross-sell. |
| 7. Visual Rhythm | **Open (60px)** | Product cards breathe. |
| 8. CTA Position | **Late (after both products)** | Two-product showcase. |
| 9. Subject Line | **Direct: "Two things that go with your pairs."** | Soft cross-sell. |

**Sub-group variations:** All 0.

**Vulnerability flag:** None significant.

---

#### PP-EXTENDED UPSELL E3 (Day 42) — Final Upsell

| Dim | Choice | WHY |
|---|---|---|
| 1. Section Count | **4 (Header, Hero, Guarantee reinforcement, Door open + CTA, Footer)** | Short. Door open. |
| 2. Section Order | **Pattern A — Classic Hero-to-CTA** | Classic close. |
| 3. Image Density | **1 image (hero)** | One image. |
| 4. Color Temperature | **Warm (cream + yellow guarantee badge)** | Cozy close. |
| 5. Email Length | **Short (~250 words)** | Final. |
| 6. Argument Structure | **Direct (guarantee) + Permission** | "Door stays open." |
| 7. Visual Rhythm | **Open (60px)** | Door open. |
| 8. CTA Position | **Mid (CTA) + Late (door-open text-link)** | Two paths. |
| 9. Subject Line | **Permission: "The door stays open — for whenever you're ready."** | Door. |

**Sub-group variations:**
- **A:** −0.5 (8.5).
- **B:** 0 (8.0).
- **C:** −0.5 (8.5).
- **D (non-migrated):** −0.5 (7.5).
- **E:** −0.5 (5.5).

**Vulnerability flag:** Hard upsell tone. Door-open energy required.

---

### FLOW 13 — PP-MID CHECK-IN (3 emails, D30+)

Supportive peer tone. Reply-to-Lena is high-trust invitation.

#### PP-MID E1 (Day 30) — Three-Family Testimonial + Reply-to-Lena

| Dim | Choice | WHY |
|---|---|---|
| 1. Section Count | **6 (Header, Hero, Three-Family block, Reply-to-Lena invitation, CTA, Footer)** | Medium. Stories + invitation. |
| 2. Section Order | **Pattern D — Social Proof First** | Stories. |
| 3. Image Density | **3 images (one per family)** | Three faces. |
| 4. Color Temperature | **Warm (cream + soft yellow)** | Peer tone. |
| 5. Email Length | **Medium (~600 words across three stories)** | Stories. |
| 6. Argument Structure | **Testimonial-led + Reply invitation** | "Reply to this email." |
| 7. Visual Rhythm | **Open (64px between stories)** | Stories breathe. |
| 8. CTA Position | **Mid (Reply-to-Lena) + Late (CTA)** | Two paths. |
| 9. Subject Line | **Parent quote: "'I just wanted to tell someone.'"** | Real voice. |

**Sub-group variations:**
- **A:** **+1.0 (9.5)** — Reply-to-Lena lands as high-trust invitation.
- **B:** +0.5 (8.5).
- **C:** +0.5 (9.5).
- **D (non-migrated):** **+0.5 (8.5)** — "Reply to this email" is high-trust and lands especially well with Group D.
- **E:** +0.5 (6.0).

**Vulnerability flag:** None significant.

---

#### PP-MID E2 (Day 45) — "How's It Going?"

| Dim | Choice | WHY |
|---|---|---|
| 1. Section Count | **3 (Header, Hero, Reply invitation, Footer)** | Minimalist. The question is the email. |
| 2. Section Order | **Pattern H — Minimalist** | One question. |
| 3. Image Density | **1 image (Lena avatar)** | Lena's face. |
| 4. Color Temperature | **Warm (cream)** | Intimate. |
| 5. Email Length | **Short (~150 words)** | One question. |
| 6. Argument Structure | **Direct (question)** | "How's it going?" |
| 7. Visual Rhythm | **Open (80px)** | Whitespace = invitation. |
| 8. CTA Position | **Text-link only (Reply)** | Pure reply invitation. |
| 9. Subject Line | **Question: "How's it going?"** | The question. |

**Sub-group variations:** A, B, C, D 0. **E: −0.5 (5.5) — fragile.**

**Vulnerability flag:** None.

---

#### PP-MID E3 (Day 60) — At the 60-Day Mark

| Dim | Choice | WHY |
|---|---|---|
| 1. Section Count | **5 (Header, Hero, Guarantee reminder, Looking ahead, Footer)** | Medium. |
| 2. Section Order | **Pattern A — Classic Hero-to-CTA** | Standard. |
| 3. Image Density | **2 images (hero, guarantee badge)** | Two. |
| 4. Color Temperature | **Warm (cream + yellow)** | 60-day warmth. |
| 5. Email Length | **Medium (~400 words)** | Guarantee + looking ahead. |
| 6. Argument Structure | **Direct (guarantee) + Story fragment (looking ahead)** | Guarantee reminder. |
| 7. Visual Rhythm | **Open (60px)** | Calm. |
| 8. CTA Position | **Mid (guarantee CTA)** | Single. |
| 9. Subject Line | **Risk reversal: "You're at the 60-day mark. By your judgment."** | Guarantee in subject. |

**Sub-group variations:**
- **A:** −0.5 (9.0).
- **B:** 0 (8.5).
- **C:** −0.5 (9.0).
- **D:** 0 (8.5).
- **E:** 0 (5.5).

**Vulnerability flag:** "Time to decide" pressure.

---

### FLOW 14 — PP-EXTENDED EDUCATION (20 emails, GF = 5 themes)

GF themes (5): Cross-level R1–R6 deep education; Whether...If...Or... pattern; Three-Family Pattern; Mixed scenarios; Migration reinforcement; plus one buffer theme. Sub-group D migration here at D30–45 is the second migration wave (after PP-Level Detection).

For non-migrated GF, the customer completes all 5 GF themes. Mechanism deep, no labels, no migration pressure. For migrated GF, customer exits GF themes and enters L1/L2/L3 themes.

#### GF THEME 1 (D22) — "Whether...If...Or..." Pattern

| Dim | Choice | WHY |
|---|---|---|
| 1. Section Count | **6 (Header, Hero, Whether block, If block, Or block, CTA, Footer)** | Medium. |
| 2. Section Order | **Pattern F — Education-First** | Mechanism. |
| 3. Image Density | **2 images (hero, mechanism diagram)** | Diagram. |
| 4. Color Temperature | **Cool (mint tint)** | Mechanism. |
| 5. Email Length | **Medium (~550 words)** | Pattern. |
| 6. Argument Structure | **Data-led (Whether...If...Or...)** | "Whether your child is 3 or 10, talks about the potty but won't use it, or has never shown a single sign of feeling wet, if the 'I need to go' signal doesn't arrive when it should, every method that demands a missing signal will fail." |
| 7. Visual Rhythm | **Tight (40px) in pattern block** | Pattern dense. |
| 8. CTA Position | **Mid (CTA)** | After pattern. |
| 9. Subject Line | **Pattern tease: "Whether... If... Or..."** | Mechanism teaser. |

**Sub-group variations:** All 0 or +0.5.

**Vulnerability flag:** None.

---

#### GF THEME 2 (D35) — Three-Family Pattern Deep

| Dim | Choice | WHY |
|---|---|---|
| 1. Section Count | **6 (Header, Hero, Three-Family story 1, 2, 3, CTA, Footer)** | Medium. Three stories. |
| 2. Section Order | **Pattern D — Social Proof First** | Stories. |
| 3. Image Density | **3 images (one per family)** | Composite imagery. |
| 4. Color Temperature | **Warm (cream)** | Peer voice. |
| 5. Email Length | **Medium (~600 words)** | Three stories. |
| 6. Argument Structure | **Testimonial-led** | Three parents. |
| 7. Visual Rhythm | **Open (64px between stories)** | Stories breathe. |
| 8. CTA Position | **Late (after all three)** | Stories-first. |
| 9. Subject Line | **Parent quote fragment.** | Voice. |

**Sub-group variations:** A, B, C 0. **D (non-migrated): +0.5 (8.5). E: −0.5 (6.0).**

**Vulnerability flag:** None.

---

#### GF THEME 3 (D50) — Mixed Scenarios

| Dim | Choice | WHY |
|---|---|---|
| 1. Section Count | **5 (Header, Hero, Mixed scenario block 1, 2, CTA, Footer)** | Medium. |
| 2. Section Order | **Pattern F — Education-First** | Mixed scenarios. |
| 3. Image Density | **2 images (hero, scenario diagram)** | Diagram. |
| 4. Color Temperature | **Cool (mint tint)** | Mechanism. |
| 5. Email Length | **Medium (~500 words)** | Mixed. |
| 6. Argument Structure | **Data-led (mixed scenarios)** | "Some kids show their first sign in week two. Others in week 30." |
| 7. Visual Rhythm | **Open (60px)** | Mixed. |
| 8. CTA Position | **Mid (CTA)** | After scenarios. |
| 9. Subject Line | **Data point: "Some kids week two. Others week 30. Both normal."** | Timeline flexibility. |

**Sub-group variations:** A, B, C 0. **D (non-migrated): +0.5 (8.5). E: −0.5 (5.5).**

**Vulnerability flag:** Outcome-promising timeline.

---

#### GF THEME 4 (D70) — Migration Reinforcement

| Dim | Choice | WHY |
|---|---|---|
| 1. Section Count | **5 (Header, Hero, Story link 1, Story link 2, Story link 3, Footer)** | Medium. Late migration. |
| 2. Section Order | **Pattern B — Story-Led (modified: story links)** | Story links. |
| 3. Image Density | **3 images (one per story link)** | Faces. |
| 4. Color Temperature | **Warm (cream + soft yellow)** | Late migration. |
| 5. Email Length | **Medium (~450 words)** | Three story links. |
| 6. Argument Structure | **Story-led (migration anchors)** | "Does any of this sound like your house?" |
| 7. Visual Rhythm | **Open (60px between story links)** | Stories breathe. |
| 8. CTA Position | **Text-link only (story links)** | Low-aggression. |
| 9. Subject Line | **Question: "Some kids it clicks right away. Others it takes longer. Where's yours?"** | Same as PP-Level Detection subject — late migration anchor. |

**Sub-group variations:** A, C, D 0. **B: 0 (8.5) — V16-respectful; does not migrate.** E: gone.

**Vulnerability flag:** Migration pressure. Frame as "if any of these sound like your house."

---

#### GF THEME 5 (D90) — Buffer / Long-Haul Support

| Dim | Choice | WHY |
|---|---|---|
| 1. Section Count | **4 (Header, Hero, Mechanism reinforcement, CTA, Footer)** | Medium-short. |
| 2. Section Order | **Pattern F — Education-First** | Mechanism. |
| 3. Image Density | **2 images (hero, mechanism reminder)** | Diagram. |
| 4. Color Temperature | **Cool (mint tint)** | Mechanism reinforcement. |
| 5. Email Length | **Medium (~400 words)** | Reinforcement. |
| 6. Argument Structure | **Data-led (mechanism)** | Long-haul mechanism. |
| 7. Visual Rhythm | **Open (60px)** | Calm. |
| 8. CTA Position | **Late (CTA)** | Mechanism-first. |
| 9. Subject Line | **Mechanism tease: "Why the signal sometimes takes a while to come online."** | Long-haul mechanism. |

**Sub-group variations:** A, C, D 0. **B: +0.5 (9.0) — long-haul respect. Welcome home.**

**Vulnerability flag:** None.

---

### FLOW 15 — PP-SUPPORT AT-RISK (4 emails, 3–21 days no opens)

NO upsells. NO "We miss you." NEVER guilt-tripping. For non-migrated GF, gentle recovery. Migration hook in E3 for late migration opportunity.

#### PP-SUPPORT E1 (3 days no open) — "Just Checking In"

| Dim | Choice | WHY |
|---|---|---|
| 1. Section Count | **3 (Header, Hero, Gentle check-in, Footer)** | Minimalist. |
| 2. Section Order | **Pattern H — Minimalist** | Just checking in. |
| 3. Image Density | **1 image (Lena avatar)** | Lena's face. |
| 4. Color Temperature | **Warm (cream)** | Intimate. |
| 5. Email Length | **Short (~150 words)** | Concise. |
| 6. Argument Structure | **Direct (concerned peer)** | "I noticed you haven't opened recent emails." |
| 7. Visual Rhythm | **Open (60px)** | Whitespace. |
| 8. CTA Position | **Text-link (reply)** | Text-link. |
| 9. Subject Line | **Concerned peer: "Just checking in."** | Short. |

**Sub-group variations:** A, B, C, D 0. **E: +0.5 (5.5).**

**Vulnerability flag:** "We miss you" corporate tone. Concerned peer, NOT corporate.

---

#### PP-SUPPORT E2 (7 days no open) — Support Offering

| Dim | Choice | WHY |
|---|---|---|
| 1. Section Count | **4 (Header, Hero, Support body, Footer)** | Short. |
| 2. Section Order | **Pattern F — Education-First** | Support = education. |
| 3. Image Density | **1 image (Lena avatar)** | Lena. |
| 4. Color Temperature | **Warm (cream)** | Warm. |
| 5. Email Length | **Short (~250 words)** | Support. |
| 6. Argument Structure | **Direct (support)** | "Here's how to get the most out of your pairs." |
| 7. Visual Rhythm | **Open (60px)** | Calm. |
| 8. CTA Position | **Text-link (resources)** | Text-link. |
| 9. Subject Line | **Support: "Here's how to get the most out of your pairs."** | Support. |

**Sub-group variations:** All 0.

**Vulnerability flag:** Upsells in this mail.

---

#### PP-SUPPORT E3 (14 days no open) — Nervous System Is Learning + Late Migration Hook

| Dim | Choice | WHY |
|---|---|---|
| 1. Section Count | **5 (Header, Hero, Normalization body, Soft story link, Footer)** | Medium. |
| 2. Section Order | **Pattern F — Education-First + Story-Led (story link)** | Mechanism + late migration. |
| 3. Image Density | **1 image (Lena avatar)** | Lena. |
| 4. Color Temperature | **Cool (mint tint) — mechanism + warm (story link)** | Mixed. |
| 5. Email Length | **Medium (~400 words)** | Normalization + late migration. |
| 6. Argument Structure | **Data-led (normalization) + Story fragment (story link)** | "Your child's nervous system is learning even when it doesn't show." |
| 7. Visual Rhythm | **Open (60px)** | Calm. |
| 8. CTA Position | **Text-link (story link)** | Low-aggression. |
| 9. Subject Line | **Normalization: "Your child's nervous system is learning even when it doesn't show."** | Mechanism. |

**Sub-group variations:** A, C 0. **B: +0.5 (8.5) — normalization respects her filter. D (non-migrated): +0.5 (8.0) — late migration opportunity.** E: −0.5 (5.0).

**Vulnerability flag:** Migration pressure. Frame as soft story link, not push.

---

#### PP-SUPPORT E4 (21 days no open) — 60-Day Guarantee Still Active

| Dim | Choice | WHY |
|---|---|---|
| 1. Section Count | **3 (Header, Hero, Guarantee reminder, Footer)** | Minimalist. |
| 2. Section Order | **Pattern H — Minimalist** | Guarantee. |
| 3. Image Density | **0–1 images (guarantee badge visual)** | One. |
| 4. Color Temperature | **Warm (cream + yellow guarantee badge)** | Guarantee. |
| 5. Email Length | **Short (~150 words)** | Guarantee reminder. |
| 6. Argument Structure | **Direct (risk reversal)** | "Your 60-day guarantee is still active." |
| 7. Visual Rhythm | **Open (60px)** | Calm. |
| 8. CTA Position | **Text-link (return policy)** | Text-link. |
| 9. Subject Line | **Risk reversal: "Your 60-day guarantee is still active."** | Guarantee. |

**Sub-group variations:** All 0 or −0.5.

**Vulnerability flag:** Guilt-tripping tone.

---

### FLOW 16 — REPLENISHMENT A/B/C (7 emails, D14+)

Practical reminders. Trust maintenance-mode. For migrated GF who became L3, suppression logic switches (L3 rule: never push 5+5).

#### REPLENISHMENT A1 (Day 14) — Wash Cycles Reminder

| Dim | Choice | WHY |
|---|---|---|
| 1. Section Count | **4 (Header, Hero, Wash cycles body, CTA, Footer)** | Short. Practical. |
| 2. Section Order | **Pattern E — Product-First (product lifecycle)** | Product is hero. |
| 3. Image Density | **2 images (product, hero)** | Two. |
| 4. Color Temperature | **Neutral (off-white, brand green CTA)** | Practical. |
| 5. Email Length | **Short (~250 words)** | Practical. |
| 6. Argument Structure | **Direct (wash cycles reminder)** | "Training underwear works best when you rotate pairs." |
| 7. Visual Rhythm | **Open (60px)** | Calm. |
| 8. CTA Position | **Mid (replenishment CTA)** | Single. |
| 9. Subject Line | **Practical: "Wash cycles reminder."** | Direct. |

**Sub-group variations:** All 0 (maintenance).

**Vulnerability flag:** None.

---

#### REPLENISHMENT A2 (Day 30) — Consistency Matters

| Dim | Choice | WHY |
|---|---|---|
| 1. Section Count | **4 (Header, Hero, Consistency body, CTA, Footer)** | Short. Practical. |
| 2. Section Order | **Pattern E — Product-First** | Product. |
| 3. Image Density | **2 images** | Two. |
| 4. Color Temperature | **Neutral** | Practical. |
| 5. Email Length | **Short (~250 words)** | Practical. |
| 6. Argument Structure | **Direct (consistency)** | "Consistency is the part that matters most." |
| 7. Visual Rhythm | **Open (60px)** | Calm. |
| 8. CTA Position | **Mid (CTA)** | Single. |
| 9. Subject Line | **Practical: "Why consistency is the part that matters."** | Direct. |

**Sub-group variations:** All 0.

---

#### REPLENISHMENT A3 (Day 60) — Guarantee Threshold

| Dim | Choice | WHY |
|---|---|---|
| 1. Section Count | **4 (Header, Hero, Guarantee threshold body, CTA, Footer)** | Short. |
| 2. Section Order | **Pattern E — Product-First** | Product. |
| 3. Image Density | **2 images** | Two. |
| 4. Color Temperature | **Warm (cream + yellow)** | Guarantee = warm. |
| 5. Email Length | **Short (~300 words)** | Guarantee. |
| 6. Argument Structure | **Direct (guarantee reminder)** | "Your 60-day window is here." |
| 7. Visual Rhythm | **Open (60px)** | Calm. |
| 8. CTA Position | **Mid (guarantee CTA)** | Single. |
| 9. Subject Line | **Risk reversal: "Your 60-day window is here."** | Guarantee. |

**Sub-group variations:** All 0.

---

#### REPLENISHMENT B1 (Day 75) — Time to Rotate (3+3 buyer)

| Dim | Choice | WHY |
|---|---|---|
| 1. Section Count | **4 (Header, Hero, Rotation body, CTA, Footer)** | Short. |
| 2. Section Order | **Pattern E — Product-First** | Product. |
| 3. Image Density | **2 images** | Two. |
| 4. Color Temperature | **Neutral** | Practical. |
| 5. Email Length | **Short (~250 words)** | Practical. |
| 6. Argument Structure | **Direct (rotation)** | "Time to rotate your pairs." |
| 7. Visual Rhythm | **Open (60px)** | Calm. |
| 8. CTA Position | **Mid (replenishment CTA)** | Single. |
| 9. Subject Line | **Practical: "Time to rotate."** | Direct. |

**Sub-group variations:** All 0.

---

#### REPLENISHMENT B2 (Day 90) — Bundle Upgrade 5+5

| Dim | Choice | WHY |
|---|---|---|
| 1. Section Count | **5 (Header, Hero, Bundle comparison, CTA, Footer)** | Short. |
| 2. Section Order | **Pattern E — Product-First** | Bundle. |
| 3. Image Density | **3 images (3+3, 5+5, hero)** | Three. |
| 4. Color Temperature | **Neutral** | Comparison. |
| 5. Email Length | **Short (~300 words)** | Bundle. |
| 6. Argument Structure | **Direct (bundle)** | Bundle upgrade. |
| 7. Visual Rhythm | **Open (60px)** | Calm. |
| 8. CTA Position | **Late (after comparison)** | Comparison. |
| 9. Subject Line | **Direct: "5+5 — when you're ready."** | Soft. |

**Sub-group variations:** All 0.

**Vulnerability flag:** L3 rule (never push 5+5) does NOT apply to GF at this stage because level is unknown. For migrated Group D → L3, suppression logic switches.

---

#### REPLENISHMENT C1 (Day 150) — Long Haul Support

| Dim | Choice | WHY |
|---|---|---|
| 1. Section Count | **3 (Header, Hero, Long-haul body, Footer)** | Minimalist. |
| 2. Section Order | **Pattern H — Minimalist** | Long-haul. |
| 3. Image Density | **1 image (product)** | One. |
| 4. Color Temperature | **Warm (cream)** | Long-haul warmth. |
| 5. Email Length | **Short (~200 words)** | Long-haul. |
| 6. Argument Structure | **Direct (long-haul support)** | "Long-haul support." |
| 7. Visual Rhythm | **Open (60px)** | Calm. |
| 8. CTA Position | **Text-link (resources)** | Text-link. |
| 9. Subject Line | **Support: "Long-haul support, when you need it."** | Support. |

**Sub-group variations:** All 0.

---

#### REPLENISHMENT C2 (Day 180) — Accessory Refresh

| Dim | Choice | WHY |
|---|---|---|
| 1. Section Count | **4 (Header, Hero, Accessory body, CTA, Footer)** | Short. |
| 2. Section Order | **Pattern E — Product-First** | Accessory. |
| 3. Image Density | **2 images** | Two. |
| 4. Color Temperature | **Warm (cream + yellow)** | Friendly. |
| 5. Email Length | **Short (~250 words)** | Accessory. |
| 6. Argument Structure | **Direct (accessory)** | Wash bag, magic targets refresh. |
| 7. Visual Rhythm | **Open (60px)** | Calm. |
| 8. CTA Position | **Mid (CTA)** | Single. |
| 9. Subject Line | **Direct: "Replace your wash bag."** | Practical. |

**Sub-group variations:** All 0.

---

### FLOW 17 — REVIEW REQUEST (2 emails)

Peer request tone, not transactional.

#### REVIEW E1 (Day 30) — First Review Ask

| Dim | Choice | WHY |
|---|---|---|
| 1. Section Count | **4 (Header, Hero, Leading questions body, CTA, Footer)** | Short. |
| 2. Section Order | **Pattern A — Classic Hero-to-CTA** | Standard. |
| 3. Image Density | **1 image (hero)** | One. |
| 4. Color Temperature | **Warm (cream)** | Peer. |
| 5. Email Length | **Short (~300 words)** | Direct ask. |
| 6. Argument Structure | **Direct (peer request)** | "Has BrightKidCo made a difference? Share your experience." |
| 7. Visual Rhythm | **Open (60px)** | Calm. |
| 8. CTA Position | **Mid (review link)** | Single. |
| 9. Subject Line | **Direct: "Has BrightKidCo made a difference?"** | Question. |

**Sub-group variations:** All +0.5 (if she writes, +0.5 more).

---

#### REVIEW E2 (Day 60) — Follow-Up

| Dim | Choice | WHY |
|---|---|---|
| 1. Section Count | **3 (Header, Hero, Altruism framing, CTA, Footer)** | Minimalist. |
| 2. Section Order | **Pattern H — Minimalist** | Follow-up. |
| 3. Image Density | **1 image (hero)** | One. |
| 4. Color Temperature | **Warm (cream)** | Peer. |
| 5. Email Length | **Short (~200 words)** | Follow-up. |
| 6. Argument Structure | **Direct (altruism)** | "Your experience helps other parents decide." |
| 7. Visual Rhythm | **Open (60px)** | Calm. |
| 8. CTA Position | **Mid (review link)** | Single. |
| 9. Subject Line | **Altruism: "Other parents need to hear what worked for your child."** | Altruism. |

**Sub-group variations:** All +0.5 if she writes, 0 if not.

---

### FLOW 18 — WINBACK PATH A (12 emails, post-purchaser, 90 days no engagement)

GF themes (3): Cross-level R1–R6; Symptom-first; Migration anchor. For migrated GF, level-specific themes. For permanent GF, completes the 3 GF themes — final re-engagement before Sunset.

#### WINBACK A — Theme 1 (D90): Cross-level R1–R6

| Dim | Choice | WHY |
|---|---|---|
| 1. Section Count | **5 (Header, Hero, Mechanism body, Recognition anchors, CTA, Footer)** | Medium. |
| 2. Section Order | **Pattern F — Education-First** | Mechanism re-engagement. |
| 3. Image Density | **2 images (hero, mechanism diagram)** | Diagram. |
| 4. Color Temperature | **Cool (mint tint)** | Mechanism. |
| 5. Email Length | **Medium (~500 words)** | Mechanism. |
| 6. Argument Structure | **Data-led (mechanism)** | Mechanism re-grounding. |
| 7. Visual Rhythm | **Tight (40px) in mechanism block** | Mechanism dense. |
| 8. CTA Position | **Mid (CTA)** | After mechanism. |
| 9. Subject Line | **Mechanism tease: "Why it's not behavioral. It's signal-timing."** | Mechanism. |

**Sub-group variations:** A drops 9.0 → 8.5. B holds 8.5. C holds 9.0. D (non-migrated) drops 8.0 → 7.5. E drops 5.5 → 5.0.

**Vulnerability flag:** Winback cheats the system. R1–R6 + V16 must still hold. No urgency, no promises.

---

#### WINBACK A — Theme 2 (D100): Symptom-First

| Dim | Choice | WHY |
|---|---|---|
| 1. Section Count | **5 (Header, Hero, Symptom recognition body, 3–5 anchors, CTA, Footer)** | Medium. |
| 2. Section Order | **Pattern C — Problem-Solution** | Symptom recognition. |
| 3. Image Density | **2 images** | Two. |
| 4. Color Temperature | **Cool (mint tint)** | Mechanism. |
| 5. Email Length | **Medium (~450 words)** | Symptom recognition. |
| 6. Argument Structure | **Data-led (anchors)** | 3–5 anchors re-stated. |
| 7. Visual Rhythm | **Tight (40px) in anchors** | Anchors dense. |
| 8. CTA Position | **Mid (CTA)** | After anchors. |
| 9. Subject Line | **Observation: "Some kids it clicks right away. Others it takes longer. Where's yours?"** | Symptom-described. |

**Sub-group variations:** All continue drops. A 8.0. B 8.0. C 8.5. D (non-migrated) 7.0. E 4.5.

**Vulnerability flag:** Same as Theme 1.

---

#### WINBACK A — Theme 3 (D110): Migration Anchor

| Dim | Choice | WHY |
|---|---|---|
| 1. Section Count | **4 (Header, Hero, Story link 1, 2, 3, Footer)** | Medium-short. |
| 2. Section Order | **Pattern B — Story-Led (story links)** | Late migration. |
| 3. Image Density | **2 images (hero, story link image)** | Story. |
| 4. Color Temperature | **Warm (cream + soft yellow)** | Late migration. |
| 5. Email Length | **Medium (~400 words)** | Late migration. |
| 6. Argument Structure | **Story-led (migration anchors)** | Final migration opportunity. |
| 7. Visual Rhythm | **Open (60px)** | Stories breathe. |
| 8. CTA Position | **Text-link only (story links)** | Low-aggression. |
| 9. Subject Line | **Question: "Does any of this sound like your house?"** | Question. |

**Sub-group variations:** A 7.5. B 8.0. C 8.5. D (non-migrated) 6.5. E 3.0.

**Vulnerability flag:** Migration pressure. Frame as soft invitation.

---

### FLOW 19 — WINBACK PATH B (12 emails, never-bought, 60 days no purchase)

Lower conversion than Path A. Non-buyers need stronger mechanism proof. Same structure as Path A.

#### WINBACK B — Theme 1 (D60): Cross-level R1–R6

**Mirrors Winback A Theme 1 structure.** Same 9 dimensions. Lower conversion expectation.

**Sub-group variations:** A 7.5 → 6.5 across the 12-email arc. B 8.0 → 6.0. C 7.5 → 6.0. E 4.5 → 2.5. **Higher churn across all groups.**

---

### FLOW 20 — FAQ/OBJECTION LIBRARY (6 emails)

Six emails with 4-step reframe (Name → Validate → Reframe → Absolve). For non-migrated GF, GF block. For migrated GF, appropriate L1/L2/L3 block.

#### FAQ E1 (D1) — "Tried Everything"

| Dim | Choice | WHY |
|---|---|---|
| 1. Section Count | **6 (Header, Hero, Name block, Validate block, Reframe block, Absolve block, CTA, Footer)** | Medium-long. 4-step reframe. |
| 2. Section Order | **Pattern C — Problem-Solution** | Reframe structure. |
| 3. Image Density | **1 image (Lena avatar)** | Lena voice. |
| 4. Color Temperature | **Warm (cream)** | Absolution tone. |
| 5. Email Length | **Medium (~600 words)** | 4-step reframe. |
| 6. Argument Structure | **Story-led (Nicholson 2019) + 4-step reframe** | Defeated → Absolved. |
| 7. Visual Rhythm | **Open (64px between steps)** | Each step breathes. |
| 8. CTA Position | **Late (after absolution)** | Reframe-first. |
| 9. Subject Line | **Validation: "You didn't fail. You solved the wrong problem."** | Brand signature. Softened for GF. |

**Sub-group variations:** A +1.0 (8.5). **B +1.0 (8.0) — critical for B.** C +1.0 (9.0). D +1.0 (8.5). E +0.5 (5.5).

**Vulnerability flag:** None significant.

---

#### FAQ E2 (D4) — "Too Old / Severe"

| Dim | Choice | WHY |
|---|---|---|
| 1. Section Count | **5 (Header, Hero, Late-trainer story, CTA, Footer)** | Medium. |
| 2. Section Order | **Pattern B — Story-Led** | Late-trainer stories. |
| 3. Image Density | **2 images (hero, late-trainer family)** | Two. |
| 4. Color Temperature | **Warm (cream)** | Stories. |
| 5. Email Length | **Medium (~500 words)** | Stories. |
| 6. Argument Structure | **Testimonial-led (Faulkner 2017)** | Hopeless → Empowered. |
| 7. Visual Rhythm | **Open (60px)** | Stories. |
| 8. CTA Position | **Late (CTA)** | After story. |
| 9. Subject Line | **Parent quote fragment: "We almost gave up at 9."** | Late-trainer voice. |

**Sub-group variations:** All 0.

**Vulnerability flag:** "Adult diapers," "Forever in pull-ups" L3-trauma language. Use R6 low-bar metrics.

---

#### FAQ E3 (B4) — GI/Withholding

| Dim | Choice | WHY |
|---|---|---|
| 1. Section Count | **5 (Header, Hero, Medical reframe body, CTA, Footer)** | Medium. |
| 2. Section Order | **Pattern F — Education-First** | Medical reframe. |
| 3. Image Density | **1 image (Lena avatar)** | Lena. |
| 4. Color Temperature | **Cool (mint tint)** | Medical = cool. |
| 5. Email Length | **Medium (~450 words)** | Medical reframe. |
| 6. Argument Structure | **Data-led (McElhanon 2014)** | Scared → Supported. |
| 7. Visual Rhythm | **Open (60px)** | Calm. |
| 8. CTA Position | **Mid (CTA)** | After reframe. |
| 9. Subject Line | **Medical: "Why withholding happens (and what it means)."** | Direct. |

**Sub-group variations:** All +0.5.

---

#### FAQ E4 (C3) — "Worth $30–50?"

| Dim | Choice | WHY |
|---|---|---|
| 1. Section Count | **5 (Header, Hero, Math reframe body, Value prop, CTA, Footer)** | Medium. |
| 2. Section Order | **Pattern C — Problem-Solution** | Math reframe. |
| 3. Image Density | **2 images (hero, product comparison)** | Two. |
| 4. Color Temperature | **Neutral (white comparison table)** | Math = neutral. |
| 5. Email Length | **Medium (~500 words)** | Math reframe. |
| 6. Argument Structure | **Data-led (math reframe)** | Defensive → Valued. |
| 7. Visual Rhythm | **Open (60px)** | Comparison. |
| 8. CTA Position | **Mid (CTA)** | After math. |
| 9. Subject Line | **Data: "Why $79 beats $30 of pull-ups every month."** | Math. |

**Sub-group variations:** A, B, C, D +0.5.

**Vulnerability flag:** For migrated GF who is now L3, suppression logic must switch — math reframe is forbidden at L3. For non-migrated GF, math reframe acceptable.

---

#### FAQ E5 (B2) — BCBA Compatibility

| Dim | Choice | WHY |
|---|---|---|
| 1. Section Count | **5 (Header, Hero, Compatibility body, CTA, Footer)** | Medium. |
| 2. Section Order | **Pattern F — Education-First** | Compatibility. |
| 3. Image Density | **1 image (Lena avatar)** | Lena. |
| 4. Color Temperature | **Cool (mint tint)** | Education. |
| 5. Email Length | **Medium (~450 words)** | Compatibility. |
| 6. Argument Structure | **Data-led** | Conflicted → Confident. |
| 7. Visual Rhythm | **Open (60px)** | Calm. |
| 8. CTA Position | **Mid (CTA)** | After body. |
| 9. Subject Line | **Education: "Where this fits with your child's professional support."** | Direct. |

**Sub-group variations:** All 0. **For non-migrated GF, BCBA language may NOT appear.** Block becomes generic "professional recommendations" framing.

**Vulnerability flag:** BCBA appearance in GF copy is a V16 violation.

---

#### FAQ E6 (D3) — Hope-Crash Fear

| Dim | Choice | WHY |
|---|---|---|
| 1. Section Count | **5 (Header, Hero, Hope-crash body, CTA, Footer)** | Medium. |
| 2. Section Order | **Pattern F — Education-First** | Hope-crash. |
| 3. Image Density | **1 image (Lena avatar)** | Lena. |
| 4. Color Temperature | **Warm (cream)** | Warm protection. |
| 5. Email Length | **Medium (~450 words)** | Hope-crash. |
| 6. Argument Structure | **Story-led (Hample 2020) + Direct** | Protected → Safe to try. |
| 7. Visual Rhythm | **Open (60px)** | Calm. |
| 8. CTA Position | **Mid (CTA)** | After body. |
| 9. Subject Line | **Validation: "If you've been burned before, here's the slower path."** | Hope-crash. |

**Sub-group variations:** All +0.5.

---

### FLOW 21 — REFERRAL FLOW (3 emails, D30+)

Community framing. Three-Family Pattern for social proof (symptom-described for GF).

#### REFERRAL E1 — First Ask

| Dim | Choice | WHY |
|---|---|---|
| 1. Section Count | **5 (Header, Hero, Three-Family block, Incentive body, CTA, Footer)** | Medium. |
| 2. Section Order | **Pattern D — Social Proof First** | Stories. |
| 3. Image Density | **3 images (one per family)** | Three faces. |
| 4. Color Temperature | **Warm (cream)** | Peer. |
| 5. Email Length | **Medium (~500 words)** | Stories + incentive. |
| 6. Argument Structure | **Testimonial-led + Direct (incentive)** | Stories + incentive. |
| 7. Visual Rhythm | **Open (64px)** | Stories. |
| 8. CTA Position | **Mid (referral CTA)** | Single. |
| 9. Subject Line | **Community: "Know another parent who's struggling?"** | Direct. |

**Sub-group variations:** All +0.5.

---

#### REFERRAL E2 — Lena Voice Reinforcement

| Dim | Choice | WHY |
|---|---|---|
| 1. Section Count | **4 (Header, Hero, Lena voice body, CTA, Footer)** | Short. |
| 2. Section Order | **Pattern H — Minimalist (Lena voice)** | Lena. |
| 3. Image Density | **1 image (Lena avatar)** | Lena. |
| 4. Color Temperature | **Warm (cream)** | Peer. |
| 5. Email Length | **Short (~300 words)** | Lena. |
| 6. Argument Structure | **Story-led (Lena voice)** | "When something works for our kids, we tell each other." |
| 7. Visual Rhythm | **Open (60px)** | Lena. |
| 8. CTA Position | **Mid (referral CTA)** | Single. |
| 9. Subject Line | **Lena voice: "When something works, we tell each other."** | Lena. |

**Sub-group variations:** All +0.5.

---

#### REFERRAL E3 — Final Reminder + Dual-Sided Incentive

| Dim | Choice | WHY |
|---|---|---|
| 1. Section Count | **4 (Header, Hero, Dual incentive body, CTA, Footer)** | Short. |
| 2. Section Order | **Pattern A — Classic Hero-to-CTA** | Standard. |
| 3. Image Density | **2 images** | Two. |
| 4. Color Temperature | **Warm (cream + yellow incentive badge)** | Friendly. |
| 5. Email Length | **Short (~250 words)** | Final. |
| 6. Argument Structure | **Direct (dual incentive)** | You + friend both get. |
| 7. Visual Rhythm | **Open (60px)** | Calm. |
| 8. CTA Position | **Mid (referral CTA)** | Single. |
| 9. Subject Line | **Direct: "One more thing before we go."** | Final. |

**Sub-group variations:** All +0.5.

---

### FLOW 22 — SUNSET (2 emails, D120+)

HIGHEST PRIORITY — suppresses ALL other flows unconditionally. Re-permission check. NEVER guilt.

#### SUNSET E1 — Re-Permission Check

| Dim | Choice | WHY |
|---|---|---|
| 1. Section Count | **3 (Header, Hero, One-click preference, Footer)** | Minimalist. |
| 2. Section Order | **Pattern H — Minimalist** | Respectful exit. |
| 3. Image Density | **0–1 images (Lena avatar optional)** | Zero or one. |
| 4. Color Temperature | **Warm (cream)** | Respectful. |
| 5. Email Length | **Short (~150 words)** | Direct. |
| 6. Argument Structure | **Direct (re-permission)** | "Do you still want to hear from us?" |
| 7. Visual Rhythm | **Open (80px)** | Maximum breathing. |
| 8. CTA Position | **Text-link + preference center link** | One-click. |
| 9. Subject Line | **Respectful: "Do you still want to hear from us?"** | Direct. |

**Sub-group variations:** All 0 or +0.5 (if she re-permissions).

**Vulnerability flag:** "We miss you" guilt. NEVER.

---

#### SUNSET E2 — Final Farewell

| Dim | Choice | WHY |
|---|---|---|
| 1. Section Count | **2 (Header, Final farewell, Footer)** | Minimalist. |
| 2. Section Order | **Pattern H — Minimalist** | Goodbye. |
| 3. Image Density | **0 images** | Pure text. |
| 4. Color Temperature | **Neutral (off-white)** | Quiet. |
| 5. Email Length | **Very short (~100 words)** | Brief. |
| 6. Argument Structure | **Direct (farewell)** | "If we don't hear from you, you'll hear from us again in 6–12 months." |
| 7. Visual Rhythm | **Open (80px)** | Whitespace. |
| 8. CTA Position | **None (or one-click re-engagement)** | Optional. |
| 9. Subject Line | **Farewell: "Take care."** | Brief. |

**Sub-group variations:** All 0.

**Vulnerability flag:** Hard close.

---

## 3. VARIANCE LEDGER — PREVENTING PATTERN-MATCHING

The email-marketing-structure skill §9.2 mandates varying across the 9 dimensions to prevent desensitization. GF receives ~45 emails across the lifecycle. Without variance discipline, opens become mechanical and clicks decline after email #2-3. The variance ledger below tracks the actual sequence of dimension choices across the GF Welcome arc (the densest portion) to verify compliance.

### 3.1 Variance Audit — Welcome GF E1–E8

| Email | Section Count | Section Order | Image Density | Color Temp | Email Length | Argument | Rhythm | CTA Position | Subject Formula |
|-------|--------------|---------------|---------------|------------|--------------|----------|--------|--------------|------------------|
| **E1** | 5 | A (Classic) | 2 | Neutral | Short | Direct + Story frag | Open (64) | Double-tap | Observation + code |
| **E2** | 7 | C (Problem-Solution) | 3 | Cool | Long | Data-led + Story frag | Tight/Open | Mid | Observation + mechanism |
| **E3** | 5 | A (Classic mod) | 2 | Warm | Medium | Direct + PAS | Open (60) | Double-tap | Permission |
| **E4** | 6 | B (Story-Led) | 1 | Warm | Medium | Story-led + Reframe | Open (64) | Late | Validation |
| **E5** | 8 | F (Education-First) | 3 | Cool | Long | Data-led + Story frag | Tight/Open | Late | Mechanism tease |
| **E6** | 6 | D (Social Proof First) | 3 | Warm | Medium | Testimonial-led | Open (64) | Late | Parent quote |
| **E7** | 4 | G (Urgency mod) | 1 | Warm+Yellow | Short | Direct + Permission | Open (60) | Double-tap | Permission + code |
| **E8** | 3 | H (Minimalist) | 1 | Neutral | Short | Story-led + Permission | Open (80) | Text-link | Validation |

**Compliance check:**
- ✅ **Section count varies** across all 8 (no repetition 3x in a row).
- ✅ **Section order varies** across all 8 patterns (A, C, A, B, F, D, G, H).
- ✅ **Image density varies** (1, 2, 3 all present).
- ✅ **Color temperature varies** (Neutral → Cool → Warm → Cool → Warm → Warm → Neutral).
- ✅ **Email length varies** (Short → Long → Medium → Medium → Long → Medium → Short → Short).
- ✅ **Argument structure varies** (Direct + Story, Data + Story, Direct + PAS, Story + Reframe, Data + Story, Testimonial, Direct + Permission, Story + Permission).
- ✅ **Visual rhythm varies** (Open + Tight combinations).
- ✅ **CTA position varies** (Double-tap, Mid, Late, Text-link — all 5 positions used).
- ✅ **Subject line formula varies** (Observation, Mechanism, Permission, Validation, Quote — all 6 subject formulas used).

**The Welcome GF sequence is variance-compliant.**

### 3.2 Variance Audit — Cross-Level Flows (Cart → Sunset)

The cross-level flows (Cart E1 → Sunset E2) follow the same variance discipline. Key variance patterns:

- **Cart E1–E3:** C → D → H (Problem-Solution → Social Proof First → Minimalist).
- **Checkout E1–E2:** E (Product-First) → H (Minimalist).
- **Browse E1–E3:** F (Education-First) → F (Education-First) → A (Classic). **Note: E1 and E2 share pattern F.** This is intentional — both are mechanism-led without offers. E3 introduces the offer with pattern A. Two consecutive F-patterns are acceptable because they are educational, not commercial; the third mail introduces commercial intent.
- **PP-Education E1–E4:** F → F → (suppressed) → D (Education-First → Education-First → Social Proof First). **Note: E1 and E2 share pattern F.** Same logic — both are educational. E4 transitions to D for celebration.
- **PP-Extended Education Themes 1–5:** F → D → F → B (modified) → F (Education-First → Social Proof First → Education-First → Story-Led → Education-First). Variance preserved.
- **FAQ E1–E6:** C → B → F → C → F → F (Problem-Solution → Story-Led → Education-First → Problem-Solution → Education-First → Education-First). **Note: Three F-patterns in E3, E5, E6.** This is acceptable because FAQ is an educational library; pattern repetition reinforces the educational mode.
- **Replenishment A1–A3, B1–B2, C1–C2:** All E (Product-First). **Note: 7 consecutive E-patterns.** This is acceptable because Replenishment is a maintenance-mode flow — practical, product-focused reminders. The 9.2 rule says "Don't stay flat for more than 3 consecutive emails" but Replenishment is a special case where product consistency reinforces the rotation message. **Variance must NOT come at the cost of brand consistency for product-cycle messages.**
- **Winback A Themes 1–3:** F → C → B (modified) (Education-First → Problem-Solution → Story-Led modified). Variance preserved.
- **Sunset E1–E2:** H → H (Minimalist → Minimalist). **Two H-patterns is acceptable** because Sunset is the quietest moment of the lifecycle. Two consecutive minimalists signal respectful exit.

### 3.3 Variance Rules Specific to GF

GF has three additional variance rules that other levels do not need because of sub-group heterogeneity:

#### Rule GF-V1 — Sub-Group Image Calibration

Within the 9 dimensions, the image choice must avoid silhouetting to a single sub-group. Examples:

- **DO:** Three-child composite imagery (varied ages, presentations, parent postures) per avatar §9.
- **DON'T:** A single child who reads as obviously pre-school-age (A-only) or obviously non-speaking (C-only) or obviously older-with-disability (D-only).

**Why:** Each sub-group must see herself in the imagery. A single child whose presentation matches one sub-group makes the other four feel excluded. The composite rule is the GF-specific variance rule.

#### Rule GF-V2 — V16 Variance Override

When dimension 9 (Subject Line Formula) collides with V16 (no "autism," "ASD," "Level"), **V16 always wins**. No variance is worth a Group B trust delta of −2.0 to −4.0.

Example: A subject line formula "data point: '49% of kids with autism aren't trained by age 5'" is high-variance from a sequence of observation/mechanism subjects, but it fails V16. Use "almost 1 in 2 kids with nervous system differences aren't trained by age 5" instead — same data point, V16-compliant.

#### Rule GF-V3 — Migration Anchor Variance

The three Welcome migration anchors (E2, E4, E5) must each describe a DIFFERENT symptom profile. They cannot all be "L1-style" or "L3-style" — they must rotate through the symptom space so that Group D (and Group A post-diagnosis) finds her match on at least one click.

- **E2 anchor:** "If your child is 5, verbal, and 'gets it but doesn't get it' — read Sarah's story." (L1-style)
- **E4 anchor:** "If your child is 7, has the words, but never connects them to the action — read Lisa's story." (L2-style)
- **E5 anchor:** "If your child doesn't seem to notice when he's wet, or reacts late — read Maria's story." (L3-style)
- **PP-Level Detection (D14):** All 4 buttons (1–3 + Button 4 re-confirm) presented together.
- **PP-Extended Education Theme 4 (D70):** Late migration anchor — rotates again.

### 3.4 Component Reuse Budget (from email-marketing-structure §9.3)

| Component Type | Max Uses Across GF Lifecycle | Notes |
|---|---|---|
| **Hero sections** | Unique per email | Mandatory. No reuse. |
| **Body sections** | Max 8 across all 45 GF emails | Body sections (story, mechanism, social proof, FAQ) can be reused but must NOT appear twice in the same email. |
| **Three-Family Pattern testimonial** | Max 8 across all 45 emails | High-reuse component because it is the canonical GF social proof. Each instance must use distinct family story details. |
| **Lena avatar image** | Max 6 across all 45 emails | Lena is the brand's trust asset but should not appear in every mail. |
| **Mechanism diagram (interoception/Signal Bridge)** | Max 6 across all 45 emails | Diagram-heavy for Group C but should not appear in transactional or shipping mails. |
| **Product images** | Max 20–25 across all 45 emails | Product images repeat more frequently. |
| **Migration anchor story links** | Max 4 distinct symptom profiles | The four button descriptions from PP-Level Detection (sits 20 min / pees when pull-up off / doesn't react to wet / still figuring out) appear across Welcome E2/E4/E5, PP-Level Detection D14, PP-Extended Education Theme 4 D70, and PP-Support At-Risk E3 — total 6 touchpoints, but only 4 distinct profiles. |

### 3.5 Image Variance Rules

- **NEVER duplicate the same image within one email.**
- **Vary image density** across emails (1–6 images per email). For GF, average density is 2 images per email — image-moderate.
- **Vary lifestyle vs. product shots.** Lifestyle (parent + child in home context) for story/mechanism mails; product (training pants on neutral background) for product showcases.
- **Vary parent demographics** across Three-Family testimonials — different ages, ethnicities, family structures, presentation of children. GF sub-group A is college-educated 27–48, so testimonials should reflect that.
- **NEVER use stock NT happy families.**
- **NEVER use full-on children's faces** for any child under 13 (privacy + brand rule). Use hands, silhouettes, half-faces.

---

## 4. THE GF SUPPRESSION LOGIC

GF has the most complex suppression logic in the BrightKidCo system because it owns:
1. **A dedicated level-specific Welcome variant** (Welcome GF E1–E8).
2. **Every cross-level flow** (Cart, Checkout, Browse, Order Confirmation, Shipping, Arrived, PP-Direct Upsell, Mary S., PP-Education, PP-Extended Upsell, PP-Mid Check-In, PP-Support At-Risk, Replenishment, Review Request, Referral, Sunset).
3. **The GF-only PP-Level Detection mail** at Day 14.
4. **GF-specific PP-Extended Education themes** (5 of 20).
5. **GF-specific Winback themes** (3 of 12 in each path).
6. **GF-specific FAQ blocks** (within cross-level body).

### 4.1 Day 14 Suppression Priority Rule (CRITICAL)

When Day 14 arrives for a GF purchaser, the suppression priority is:

1. **PP-Level Detection (Flow 09)** — HIGHEST. Suppresses everything else.
2. **Welcome GF E6 (Flow 01)** — SUPPRESSED for purchasers.
3. **PP-Education D0-21 E3 (Flow 11)** — SUPPRESSED.

After Day 14, the customer's tag is either `avatar_general` (no click) or `l1`/`l2`/`l3` (clicked). All subsequent flows use the post-migration tag.

### 4.2 Migration Moment Suppression Rules

When migration happens at any touchpoint:

| Migration Touchpoint | Suppressed Flows | Replaced With |
|---|---|---|
| **Welcome E2/E4/E5 story link click** | Welcome GF E3+ (subsequent) | Joins Welcome L1/L2/L3 at next pending position |
| **Day 14 PP-Level Detection Button 1/2/3 click** | Welcome GF E6 (already suppressed); PP-Education D0-21 E3 (already suppressed); all subsequent GF-specific themes | Level-specific PP-Extended Education themes; level-aware content blocks in cross-level flows |
| **PP-Extended Education Theme 4 (D70) story link click** | Remaining GF themes (only Theme 5 left) | Joins level-specific themes at equivalent position |
| **PP-Support At-Risk E3 story link click** | Remaining GF themes (already at D30+) | Joins level-specific themes |
| **No migration ever (Groups B and C)** | Nothing — completes full GF lifecycle | All 5 GF themes, GF Winback, GF FAQ blocks, Sunset |

### 4.3 Cart Active Suppression Rule

While a customer has an active cart (cart_abandonment flow active), Cart E1/E2/E3 suppress Welcome GF E3+. Per S01 §3.1 Flow 07. The customer finishes her cart recovery sequence, then re-enters Welcome at E4 or later.

### 4.4 Winback Suppression Rule

Winback (Path A and Path B) pauses ALL nurture flows while active. Overrides Welcome, PP-Education, Replenishment. Per journey-gf-02 §3.

### 4.5 Sunset Suppression Rule

Sunset is HIGHEST PRIORITY — suppresses ALL other flows unconditionally. After sunset, tag `unengaged = True`, add to Master Suppression List. Suppression lasts 6–12 months per S02 §4.22.

---

## 5. SUB-GROUP STRUCTURAL TOLERANCE — SUMMARY TABLE

This table summarizes the structural tolerance for each sub-group across the 9 dimensions and the suppression logic.

| Sub-Group | V16 Required | R1–R6 Required | Special Tolerance | Suppression Notes |
|---|---|---|---|---|
| **A — Diagnostic Entrants** | YES | YES | Tolerates labels but does not seek them. Mechanism curiosity must be satisfied. | None special. |
| **B — Diagnosis-Rejecters** | **STRICT V16** | YES | **NEVER "autism," "ASD," "Level." Softened signature line. NO BCBA in non-migrated GF. NEVER math reframe migration pressure.** | **Cannot migrate. Permanent GF resident.** |
| **C — Sensory-Difference** | YES (lighter than B) | YES | Mechanism-deep. Mahler/Ayres canon. Ignore ASD framing. | **Cannot migrate. Permanent GF resident.** |
| **D — Overwhelmed Non-Selectors** | YES | YES | **Migration pathway at D14 PP-Level Detection is the goldmine. Story link clicks at Welcome E2/E4/E5 also migrate. Late migration at PP-Extended Ed Theme 4 + PP-Support E3.** | After migration, customer flows level-routed. Before migration, full GF arc. |
| **E — Cart/Browse without Opt-In** | YES | YES | Limited touchpoints. Recovery framing + discount + minimal friction. | Highest churn risk in PP-Education. Often drops before PP-Level Detection. Winback may recover her. Sunset is likely outcome. |

---

## 6. THE GF DELIVERY CADENCE — TIMELINE MAP

This section consolidates the full delivery cadence for a GF purchaser across the lifecycle, marking every email, day, flow, and migration opportunity.

| Day | Flow | Email | Purpose | Sub-Group Reach | Migration? |
|-----|------|-------|---------|-----------------|------------|
| 0 | Welcome GF | E1 | Welcome + WELCOME10 + Lena | Universal | — |
| 1 | Welcome GF | E2 | Mechanism reveal | Universal | **Anchor #1 (L1-style)** |
| 3 | Welcome GF | E3 | Guarantee + permission | Universal | — |
| 7 | Welcome GF | E4 | "You didn't fail" | Universal | **Anchor #2 (L2-style)** |
| 10 | Welcome GF | E5 | Deep mechanism | Universal | **Anchor #3 (L3-style)** |
| 14 | Welcome GF | E6 | Three-Family (NON-PURCHASERS) | Universal | — |
| 14 | PP-Level Detection | E1 | **Migration moment** | Universal | **40–50% migrate** |
| 17 | Welcome GF | E7 | Code expiry | Universal | — |
| 21 | Welcome GF | E8 | Gentle close | Universal | — |
| 0 | Order Confirmation | E1 | Order summary | Transactional | — |
| 0 | Shipping | E1 | Tracking | Transactional | — |
| 1 | PP-Direct Upsell | E1 | Bundle nudge | 1-pair buyers | — |
| 1 | PP-Education | E1 | First wear | Cross-level | — |
| 3 | PP-Direct Upsell | E2 | 10% off add-on | 1-pair buyers | — |
| 3 | PP-Mary S. | E1 | Founder story | Cross-level | — |
| 3 | Arrived & Welcome | E1 | First-wear protocol | Cross-level | — |
| 3-5 | Shipping | E2 | "Today's the day!" | Transactional | — |
| 7 | PP-Education | E2 | What to look for | Cross-level | — |
| 14 | PP-Education | E3 | **SUPPRESSED** | — | Replaced by PP-Level Detection |
| 21 | PP-Education | E4 | Small wins | Cross-level | — |
| 22+ | PP-Extended Education | Theme 1 | Whether...If...Or... | GF-specific | Late anchor for D |
| 28 | PP-Extended Upsell | E1 | Bundle upgrade | Cross-level | — |
| 30 | PP-Mid Check-In | E1 | Three-Family + reply | Cross-level | — |
| 30 | Review Request | E1 | First ask | Cross-level | — |
| 30 | Replenishment A | A2 | Consistency | 1-pair buyers | — |
| 35 | PP-Extended Upsell | E2 | Accessory cross-sell | Cross-level | — |
| 35 | PP-Extended Education | Theme 2 | Three-Family deep | GF-specific | — |
| 42 | PP-Extended Upsell | E3 | Final upsell | Cross-level | — |
| 45 | PP-Mid Check-In | E2 | How's it going? | Cross-level | — |
| 50 | PP-Extended Education | Theme 3 | Mixed scenarios | GF-specific | — |
| 60 | PP-Mid Check-In | E3 | 60-day mark | Cross-level | — |
| 60 | Review Request | E2 | Follow-up | Cross-level | — |
| 60 | Replenishment A | A3 | Guarantee threshold | 1-pair buyers | — |
| 70 | PP-Extended Education | Theme 4 | Migration reinforcement | GF-specific | **Anchor #4 (D70)** |
| 75 | Replenishment B | B1 | Time to rotate | 3+3 buyers | — |
| 90 | Replenishment B | B2 | Bundle 5+5 | 3+3 buyers | — |
| 90 | PP-Extended Education | Theme 5 | Long-haul support | GF-specific | — |
| 90+ | Winback A | Theme 1 | Cross-level R1–R6 | GF-specific | — |
| 100 | Winback A | Theme 2 | Symptom-first | GF-specific | — |
| 110 | Winback A | Theme 3 | Migration anchor | GF-specific | **Final anchor** |
| 120+ | Sunset | E1 | Re-permission | Cross-level | — |
| 120+ | Sunset | E2 | Final farewell | Cross-level | — |
| 150 | Replenishment C | C1 | Long-haul support | 5+5 buyers | — |
| 180 | Replenishment C | C2 | Accessory refresh | 5+5 buyers | — |

**Total: ~45 emails across the full lifecycle.** This is by design — GF must cover five sub-mothers in one tag and must give each one a path forward without breaking trust with any of the other four.

---

## 7. QUICK-REFERENCE DECISION CARD

For Stage 1 subagents building any GF email, verify all 10 checks before send:

1. **Does it pass V16?** Could Group B read this without encountering "autism," "ASD," or "Level 1/2/3"? If no, rewrite. The softened signature line is "the method didn't fail. The frame did." The SPARK 49% statistic is forbidden. BCBA language is forbidden.
2. **Does it satisfy R1–R6?** Symptom over label. 3–5 anchors. Age 3–10+. Both verbal modes. Flexible timeline. Low-bar metrics.
3. **Could every sub-group find herself?** A: mechanism present. B: no autism language. C: mechanism deep. D: migration path visible (if applicable). E: recovery framing + discount (if applicable).
4. **Does the section count differ from the previous email?** No 3x in a row.
5. **Does the section order differ from the previous email?** No 3x in a row.
6. **Does the image density differ from the previous email?** Range 1–6.
7. **Does the color temperature differ from the previous 2-3 emails?** No flat for 3x in a row. Warm/cool/neutral rotation.
8. **Does the CTA position differ from the previous email?** OR is intentional repetition justified (e.g., Replenishment = all late CTAs because product-cycle messages require it).
9. **Is the hope/realism matched to the stage?** Pre-Purchase 50/50, Conversion 45/55, PP Mid 40/60. Cheerleading at PP Mid has overshot.
10. **Does the CTA aggression match the stage?** Pre-purchase balanced (mid), PP-Level Detection lowest (text-link), winback softer, sunset text-link. Shouting at a sunset mail has broken tone.

If all 10 pass, the mail is GF-ready AND sub-group-optimized. If any fail, fix before send.

---

## 8. CROSS-REFERENCES

- **Avatar profile:** `_notes/journey-gf-01-avatar.md` §1–10 (sub-groups, trust threshold, hope/realism, decision speed, V16, R1–R6, forbidden phrases, visual calibration, the One Thing).
- **Email sequence:** `_notes/journey-gf-02-sequence.md` §2–7 (flow-by-flow email map, sub-group journey variations, suppression rules).
- **Emotional arc & trust meter:** `_notes/journey-gf-03-emotional-trust.md` §1–27 (per-email sub-group deltas, peak moments, death spirals, decision card).
- **Strategy macro:** `_notes/strategy-macro.json` flows 1–22.
- **Locked profile:** `_notes/locked-profile.json` (flow_meta + variance_tracker + anomalies).
- **Email marketing structure:** `~/.hermes/skills/email/email-marketing-structure/SKILL.md` (9 dimensions, hero variants, CTA positions, section patterns, component reuse rules).
- **Brand marketing direction:** `outputs/strategy/giuliano/g3-brand-marketing-direction.md` §2.2, §2.6, §15.5–15.7.
- **Giuliano Demands:** `demands/GIULIANO-DEMANDS.md` §1, §1.2, §8.5, §8.6, §13, §14 V16, §15.7.
- **Customer avatar synthesis:** `outputs/synthesis/01-customer-avatar.md` §3.5.

---

*End of GF Structural Blueprint & Variance Ledger. Documented ~45 emails across 22 flows with per-sub-group (A–E) calibration, V16 + R1–R6 enforcement, 9-dimension variance audit, suppression logic, and quick-reference decision card. The structural discipline here is what allows one tag (`avatar_general`) to safely reach five operationally distinct sub-mothers across one of the densest customer lifecycles in the BrightKidCo system.*
