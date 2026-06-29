# BrightKidCo — General Fallback (GF) Master Journey Document

> **The single source of truth for the General Fallback segment.** This master document consolidates five section docs into one comprehensive reference covering avatar, sequence, emotional arc, structural blueprint, and flow behavior. GF is the largest segment in the BrightKidCo universe (~50% of real subscriber volume), the most heterogeneous (five operationally distinct sub-mothers under one tag), and the only level that owns a migration touchpoint (PP-Level Detection at Day 14).
>
> **Audience:** Stage 1 subagents building copy, flow architecture, design, QA, or paid-media decisions; Stage 2 copywriters; lifecycle architects building operational logic.
>
> **Source documents consolidated:**
> - `journey-gf-01-avatar.md` (sub-groups, V16, R1–R6, hope/realism, decision speed, forbidden phrases)
> - `journey-gf-02-sequence.md` (22 flows, ~45 emails, PP-Level Detection, suppression rules)
> - `journey-gf-03-emotional-trust.md` (per-sub-group trust deltas, peak moments, death spirals)
> - `journey-gf-04-structural-blueprint.md` (9 structural dimensions, variance ledger)
> - `journey-gf-05-flow-behavior.md` (conversion gates, dead-ends, cross-flow collisions, migration mechanics)
>
> **Cross-reference sources:** `demands/GIULIANO-DEMANDS.md` §1, §1.2, §2.5, §8.5, §8.6, §13, §14 V16, §15.7, §17, §18.4; `outputs/synthesis/01-customer-avatar.md` §3.5; `outputs/strategy/giuliano/g3-brand-marketing-direction.md` §2.2, §2.6, §15.5–15.7; `_notes/strategy-macro.json` flows 1–22; `_notes/locked-profile.json`.

---

## TABLE OF CONTENTS

- **PART I — ORIENTATION**
  - [1. Executive Summary](#1-executive-summary)
  - [2. Quick-Reference Decision Card](#2-quick-reference-decision-card)
  - [3. The 5 GF Sub-Groups at a Glance](#3-the-5-gf-sub-groups-at-a-glance)

- **PART II — AVATAR & IDENTITY (Section 1)**
  - [4. Who She Is](#4-who-she-is)
  - [5. What She's Tried](#5-what-shes-tried)
  - [6. Where She Is Emotionally at Program Entry](#6-where-she-is-emotionally-at-program-entry)
  - [7. Her Trust Threshold — V16 + R1–R6](#7-her-trust-threshold--v16--r1r6)
  - [8. Her Decision Speed & Conversion Targets](#8-her-decision-speed--conversion-targets)
  - [9. Her Hope/Realism Across Journey Stages](#9-her-hoperealism-across-journey-stages)
  - [10. What She Needs From Us](#10-what-she-needs-from-us)
  - [11. What She Cannot Hear — Forbidden Phrases](#11-what-she-cannot-hear--forbidden-phrases)
  - [12. Visual Calibration Rules](#12-visual-calibration-rules)
  - [13. The One Thing](#13-the-one-thing)

- **PART III — EMAIL SEQUENCE & FLOW MAP (Section 2)**
  - [14. Sequence Overview & Email Count](#14-sequence-overview--email-count)
  - [15. Welcome GF (Flow 01, 8 emails)](#15-welcome-gf-flow-01-8-emails)
  - [16. Pre-Purchase Cross-Level Flows (Cart, Checkout, Browse)](#16-pre-purchase-cross-level-flows-cart-checkout-browse)
  - [17. Transactional & Arrival Flows (Flows 05–07)](#17-transactional--arrival-flows-flows-0507)
  - [18. PP-Direct Upsell & PP-Mary S. (Flows 08, 10)](#18-pp-direct-upsell--pp-mary-s-flows-08-10)
  - [19. PP-Education D0-21 (Flow 11)](#19-pp-education-d0-21-flow-11)
  - [20. PP-Level Detection (Flow 09) — THE BIG LEVER](#20-pp-level-detection-flow-09--the-big-lever)
  - [21. PP-Extended Upsell, Mid Check-In, Extended Education (Flows 12–14)](#21-pp-extended-upsell-mid-check-in-extended-education-flows-1214)
  - [22. PP-Support At-Risk, Replenishment, Review (Flows 15–17)](#22-pp-support-at-risk-replenishment-review-flows-1517)
  - [23. Winback Paths A & B (Flows 18–19)](#23-winback-paths-a--b-flows-1819)
  - [24. FAQ/Objection Library, Referral, Sunset (Flows 20–22)](#24-faqobjection-library-referral-sunset-flows-2022)
  - [25. Post-Migration Behavior — What Happens After the Tag Changes](#25-post-migration-behavior--what-happens-after-the-tag-changes)
  - [26. Suppression Rules Summary](#26-suppression-rules-summary)

- **PART IV — EMOTIONAL ARC & TRUST METER (Section 3)**
  - [27. Trust Meter Baselines & Scale](#27-trust-meter-baselines--scale)
  - [28. Per-Email Trust Deltas (Summary)](#28-per-email-trust-deltas-summary)
  - [29. Five Superimposed Emotional Curves](#29-five-superimposed-emotional-curves)
  - [30. Consolidated Trust Meter — Key Inflection Points](#30-consolidated-trust-meter--key-inflection-points)
  - [31. The 5 Emotional Death Spirals to Avoid](#31-the-5-emotional-death-spirals-to-avoid)
  - [32. The 5 Emotional Peak Moments to Protect](#32-the-5-emotional-peak-moments-to-protect)

- **PART V — STRUCTURAL BLUEPRINT & VARIANCE LEDGER (Section 4)**
  - [33. The 9 Structural Dimensions](#33-the-9-structural-dimensions)
  - [34. The GF Design Canvas — Global Constraints](#34-the-gf-design-canvas--global-constraints)
  - [35. Email-by-Email Structural Map (Highlights)](#35-email-by-email-structural-map-highlights)
  - [36. Variance Ledger — Preventing Pattern-Matching](#36-variance-ledger--preventing-pattern-matching)
  - [37. Component Reuse Budget](#37-component-reuse-budget)

- **PART VI — FLOW BEHAVIOR & OPERATIONAL LOGIC (Section 5)**
  - [38. The Four Questions Per Email](#38-the-four-questions-per-email)
  - [39. Cross-Flow Collision — The Day 14 Inflection](#39-cross-flow-collision--the-day-14-inflection)
  - [40. Sub-Group Migration Summary](#40-sub-group-migration-summary)
  - [41. Operational Death Spirals & Peak Moments](#41-operational-death-spirals--peak-moments)

- **PART VII — REFERENCE**
  - [42. Cross-References to Source Documents](#42-cross-references-to-source-documents)
  - [43. Master Index](#43-master-index)

---

# PART I — ORIENTATION

## 1. Executive Summary

**GF receives more emails than any other level** because it is the union of (a) a dedicated level-specific Welcome variant, (b) every cross-level flow, and (c) the GF-only PP-Level Detection flow that no other level receives. Other levels get Welcome L1/L2/L3 + cross-level + level-specific PP-Extended Education. GF additionally gets the migration infrastructure.

**The total GF-received email count** across one full customer lifecycle (Welcome through Sunset), assuming no migration and full engagement, is approximately **68 emails** at theoretical maximum, with a **realistic per-customer receipt of ~50–55 emails** across the full lifecycle (some flows are mutually exclusive — a customer who receives Cart Abandonment does NOT receive Checkout Abandonment for the same session).

**The single biggest conversion lever in the GF system** is **PP-Level Detection at Day 14**, with an expected 40–50% migration rate for Group D (Overwhelmed Non-Selectors). No other mail in the entire BrightKidCo system moves a comparable percentage of subscribers from "browsing" to "buyer" via self-identification. Computed: 50% of total audience × 25% Group D share × 45% midpoint migration = **5.6% of total audience migrates at Day 14**.

**The single most important constraint** is **V16 — symptom language only**. Every GF email must pass V16 or it loses Group B (Diagnosis-Rejecters, ~15% of GF) permanently. A V16 violation in Welcome E2 drops Group B trust from 4.5 to 2.0 — that's the difference between an engaged reader and a spam-folder casualty. R1–R6 then enforce the rest of the cross-level calibration: 3–5 recognition anchors per mail, age 3–10+, both verbal modes, flexible timelines, low-bar success metrics.

**The 5 GF Sub-Groups:**
- **A — Diagnostic Entrants (~25%):** Pre-identity, mechanism-curious, label-tolerant but not label-seeking. Migrates post-diagnosis. Migration potential: HIGH.
- **B — Diagnosis-Rejecters (~15%):** Anti-identity. V16 is the litmus test. Permanent GF resident. Migration potential: ZERO.
- **C — Sensory-Difference (~25%):** SPD/ADHD label, mechanism-heavy (Mahler/Ayres canon). Ignores ASD framing. Permanent GF resident. Migration potential: ZERO.
- **D — Overwhelmed Non-Selectors (~25%):** Has ASD diagnosis but clicked past the pop-up. **THE GOLDMINE.** Migration potential: HIGHEST (40–50% at Day 14).
- **E — Cart/Browse without Opt-In (~10%):** Cookie-captured or cart-abandoned, never identified. Limited touchpoints, highest churn risk. Migration potential: LOW (5–10% organic).

**Migration target: 65–75% of GF customers over lifecycle, bulk by Day 30.** The remaining 25–35% are permanent GF residents (Groups B and C).

**The most dangerous word for GF: "Simple."** Hits all five sub-groups. The most dangerous sentence: *"For Level 2 kids with autism who struggle with potty training…"* — alienates Groups A, B, C, D, and E simultaneously.

**Key architectural features unique to GF:**
1. **Welcome GF is the only level-specific Welcome with universal R1–R6 calibration** — no per-email L1/L2/L3-specific table; macro states GF email content must be derived from R1–R6 + L1/L2/L3 base tables with all level labels stripped.
2. **PP-Level Detection (Day 14) takes priority over ALL other Day 14 content** — Welcome E6, PP-Education D0-21 E3, and Replenishment A1 are all suppressed for GF purchasers.
3. **GF receives the only migration touchpoint in the system** — three Welcome-stage anchors (E2/E4/E5) + PP-Level Detection + PP-Extended Education Theme 4 + PP-Support At-Risk E3 + Winback Theme 3 = 6 migration touchpoints using 4 distinct symptom profiles.
4. **The Day 14 collision** — three to four emails can fire simultaneously at Day 14; PP-Level Detection wins the suppression chain.

---

## 2. Quick-Reference Decision Card

When in doubt about any GF email — copy, structure, flow architecture, operational logic — ask these questions in order. If any fail, fix before send.

### For Copy Decisions (from Avatar §10 + Emotional Trust §26)

1. **Does it pass V16?** Could Group B (Diagnosis-Rejecters) read this without encountering "autism," "ASD," or "Level 1/2/3"? If no, rewrite.
2. **Does it satisfy R1–R6?** Symptom over label (R1), 3–5 anchors (R2), age 3–10+ (R3), both verbal modes (R4), flexible timeline (R5), low-bar metrics (R6).
3. **Does the hope/realism match the stage?** Pre-Purchase 50/50, Conversion 45/55, PP Mid 40/60. Cheerleading at PP Mid has overshot.
4. **Does the CTA aggression match the stage?** Pre-purchase balanced, PP-Level Detection lowest (text-link), winback softer, sunset text-link.
5. **Could every sub-group find herself?** A: mechanism present. B: no autism language. C: mechanism deep. D: migration path visible. E: recovery framing.

### For Structural Decisions (from Structural Blueprint §7)

6. **Does the section count differ from the previous email?** No 3x in a row.
7. **Does the section order differ from the previous email?** No 3x in a row.
8. **Does the image density differ?** Range 1–6, GF average 2.
9. **Does the color temperature rotate?** Warm/cool/neutral — no flat for 3x.
10. **Is the brand signature line softened for Group B?** Use "the method didn't fail. The frame did." not the maternal-blame version.

### For Operational Decisions (from Flow Behavior §10)

11. **What is the conversion gate for THIS sub-group?** A tolerates "buy now." B needs guarantee + permission. C needs mechanism. D needs realism. E needs discount.
12. **What happens if she ignores this?** Cross-level fires regardless. Post-purchase At-Risk fires at 3–21 days no open. Sunset at D120+.
13. **What else is firing same day?** Welcome E6 + PP-Ed E3 + Replenishment A1 collide at D14 — PP-Level Detection wins. PP-Mid E1 + Replenishment A2 + Review E1 collide at D30 — three distinct framings.
14. **Is this a migration touchpoint?** Welcome E2/E4/E5 anchors + PP-Level Detection D14 + PP-Extended Ed story links + PP-Support At-Risk E3 + FAQ E6 + Winback Theme 3 = migration moments. Everywhere else, no migration.

**If all 14 pass, the mail is GF-ready AND sub-group-optimized AND operationally clean.**

---

## 3. The 5 GF Sub-Groups at a Glance

| Sub-Group | % of GF | Entry Trust | Hope/Realism | Migration Potential | Permanent? | Highest Trigger |
|-----------|---------|-------------|--------------|---------------------|------------|-----------------|
| **A — Diagnostic Entrants** | ~25% | 5.5 | 65/35 | HIGH (30%+) | No | 49% SPARK stat (paraphrased) |
| **B — Diagnosis-Rejecters** | ~15% | 3.5 | 50/50 defensive | ZERO | **YES** | Lena's peer voice |
| **C — Sensory-Difference** | ~25% | 5.0 | 55/45 | ZERO | **YES** | Mechanism specificity (interoception) |
| **D — Overwhelmed Non-Selectors** | ~25% | 4.0 | 45/55 | HIGHEST (40–50%) | No | Universal pain/exhaustion |
| **E — Cart/Browse without Opt-In** | ~10% | 3.0 | 50/50 low-engagement | LOW (5–10% organic) | No | Discount + recovery framing |

**The blend masks enormous internal variance.** Trust metrics, emotional deltas, conversion behavior, and migration mechanics are all sub-group-differentiated. The same mail produces +2.0 trust delta for Group A and −2.5 for Group B if V16 is violated.

---

# PART II — AVATAR & IDENTITY (Section 1)

## 4. Who She Is

The General Fallback mom is **95%+ female, age 27–48, college-educated (~60%)**, distributed USA (65%) / UK (15%) / AU-NZ (15%) / Canada (5%). In raw demographic shape she is indistinguishable from Sarah, Lisa, or Maria — the difference is that **she has not disclosed her child's level**. The pop-up assigned her tag `avatar_general` because she clicked Button 4 — *"Still figuring out what's going on"* — or because she was cookie-captured without taking the quiz, or because she was assigned to GF under the **70%-confidence floor** rule (Giuliano §1.1).

Her demographics are deliberately **mixed** because the segment is a holding pattern. She is the Diagnostic Entrants mom (something wrong, no label), the Diagnosis-Rejecter (rejected the diagnosis she was offered), the Sensory-Difference mom (SPD/ADHD, never wanted the autism conversation), the Overwhelmed Non-Selector (has the ASD diagnosis but closed the pop-up to avoid labeling her child), or the Cart/Browser (cookie-captured without identifying).

GF is ~**50% of real subscriber volume**, ~7–10% blended conversion, **50/50 hope/realism** at entry (the average masks enormous internal variance), and **variable decision speed** because her cognitive load is not yet anchored by a level identity. She has not had the catharsis of being told *"your child is not the problem, his nervous system is."* That revelation is still ahead.

### The 5 GF Sub-Groups in Depth

Per Giuliano Demands §1.2, the GF segment contains five operationally distinct sub-mothers. They are NOT interchangeable — the same copy cannot reach all five without violating at least one V-rule.

**Group A — Diagnostic Entrants (~25% of GF).** Pre-identity, education-first. Her child is not yet diagnosed. Something is **wrong** — her child isn't potty training the way other kids did — and she has no clinical label to organize her fear. She may suspect autism, ADHD, SPD, or "something sensory." Reading, joining Facebook groups, asking her pediatrician. **Strategy: educate first, migrate post-diagnosis.** Migration potential: **HIGH** — many will become L1 or L2 within weeks as a diagnostic workup confirms what they suspected. Address with mechanism-first content; let the science lead, the label follows.

**Group B — Diagnosis-Rejecters (~15% of GF).** Anti-identity. She has been offered a diagnosis (autism, ASD, "on the spectrum") and has **rejected it** — sometimes vocally. She will not tolerate the word autism in her inbox. The brand POV *"autism is identity, not disease"* lands beautifully for some sub-groups, but **for B it is a hostile act**. **Strategy: convert IN GF. Never migrate. V16 governs** — symptom language ONLY, "nervous system differences" as umbrella, never "autism," "ASD," or "Level 1/2/3." Permanent GF resident.

**Group C — Sensory-Difference (~25% of GF).** Her child has SPD, ADHD, or another non-ASD label. Science-driven, mechanism-oriented, responds to interoception research without ever needing the ASD framing. Reads Mahler, follows sensory-integration OTs, has done weighted blankets, brushing protocols, vestibular work. **Strategy: convert IN GF, never migrate.** She will never carry an L1/L2/L3 tag because her child does not.

**Group D — Overwhelmed Non-Selectors (~25% of GF).** The goldmine. Her child **has** an ASD diagnosis, but when the pop-up asked her to choose a button, she clicked past it — labeling felt like giving up, the timer ran out, or the buttons felt clinical. She would qualify as L1/L2/L3 if she re-selected. **Strategy: gentle migration via organic story recommendations and PP-Level Detection at Day 14.** Migration potential: **HIGHEST (40–50%)** — the highest of any GF sub-group.

**Group E — Cart/Browse without Opt-In (~10% of GF).** Never opted in to a level. She added something to cart or browsed enough to set a cookie, but never answered the question. Profile is **unknown** — the brand knows almost nothing except that she came close to buying. **Strategy: recovery framing, direct, transactional.** She will eventually reveal herself through behavior (open, click, purchase) or a future quiz interaction.

---

## 5. What She's Tried

GF is heterogeneous on prior attempts because the segment is heterogeneous on diagnosis.

**Sub-Group A (Diagnostic Entrants, ~25%).** Almost nothing — only standard NT-parent solutions: sticker charts, treat rewards, scheduled sits, naked weekends, "Oh Crap"-style books. These failed because her child's nervous system was never the issue they were designed for. **No method-cycling trauma yet** — she is just at the start of the journey. The closest the GF segment has to a "virgin" audience.

**Sub-Group B (Diagnosis-Rejecters, ~15%).** She has tried the methods and read the books — sticker charts, the 3-day method, rewards, scheduled sitting, possibly some sensory tools — but she has **rejected the diagnosis that would explain why they failed**. She has not tried anything autism-specific because she does not believe autism is the frame. Method-cycling *without the language to describe why* the cycle fails. Her pain is the most invisible in the segment.

**Sub-Group C (Sensory-Difference, ~25%).** She has tried **SPD/ADHD interventions** — weighted blankets, brushing protocols, sensory diets, vestibular work, OT-led sensory integration, possibly medication. NOT anything ASD-specific. Deep-read in the sensory-processing literature; the most mechanism-ready of any sub-group; she just needs the right mechanism (interoception, not sensory integration).

**Sub-Group D (Overwhelmed Non-Selectors, ~25%).** Same as her level would suggest — she has lived the L1 / L2 / L3 experience: BCBA protocol (if L2), adult diaper cry (if L3), Pre-K deadline (if L1). The only difference is she clicked past the pop-up. **Her prior attempts map to whatever her eventual level tag will be** — which Day 14 PP-Level Detection will discover.

**Sub-Group E (Cart/Browse, ~10%).** Never opted in, so we don't know what she has tried. Recovery case: she shopped but didn't buy, which means *something in the funnel didn't land*. Lean on Lena's voice and the 49% normalization stat (paraphrased) to re-engage.

---

## 6. Where She Is Emotionally at Program Entry

GF's emotional entry point is **mixed** because the segment is five sub-mothers in a single tag. The blended 50/50 hope/realism masks real sub-group variance.

- **Group A** enters at **~65/35 hope-heavy** — start of journey, still believes a solution exists.
- **Group B** enters at **~50/50 but defensive** — at war with anyone who would label her child, including the brand; only reading because symptom language slips past her guard.
- **Group C** enters at **~55/45 hope-leaning mechanism-curious** — has read Mahler, knows something neurological is going on, hasn't connected it to potty training.
- **Group D** enters at **~45/55 realism-leaning** — the L1/L2/L3 mom who clicked past the buttons, with her level's emotional weight but no outlet.
- **Group E** enters at **~50/50 with low engagement** — didn't opt in, emotional investment in the brand is the lowest of any sub-group.

**Many GF moms are still figuring things out** — they don't know what their child is, what level to claim, or whether potty training is even the right frame. Hold space for that uncertainty without rushing past it.

**Migration target: 65–75% to level-specific over time.** Achievable because Groups A and D (50% of GF combined) have **structural reasons to migrate**: A will get a diagnosis, D will re-engage with a level button. Groups B and C (40% of GF combined) are **permanent GF residents** — they will never migrate.

---

## 7. Her Trust Threshold — V16 + R1–R6

GF's trust threshold is the most fragile in the system because the segment contains the widest range of sensitivities. What destroys trust:

- **Level labels** in copy. "For Level 2 kids who…" — she did not choose a level; she does not want to be told she has one. *"Parents don't self-identify as 'Level 2' — they identify with symptoms."*
- **ASD assumptions when she is diagnosis-rejecting.** "Autistic children often can't feel body signals" is **destroying** to Group B. Spam-folder, no return.
- **Leveling language inside an "inclusive" wrapper.** "Whether your child is verbal or non-verbal, Level 1 or Level 3…" sounds inclusive but the word "Level" itself breaks trust for Groups B and C.
- **Diagnosis certainty she has not yet earned.** Telling Group A what her child has before she's ready is presumptuous.
- **Ignoring her non-ASD label.** Group C has done deep sensory-integration work; autism-specific copy with SPD waved away loses her.
- **Asking her to migrate before she's ready.** Group D will migrate — but only via *organic story-based* triggers (PP-Level Detection at Day 14), not pop-up nag screens.

### The V16 Rule (Sub-Group B is the litmus test)

**V16 — GF Sub-Group B Symptom Language ONLY:** Symptom language only. Never "autism", "ASD", "Level 1/2/3". Use "nervous system differences" as the umbrella.

The single most important V-rule in the GF system. If copy passes V16, it will reach Group B. If it fails, you lose 15% of GF permanently — and you set the trust ceiling for the entire cross-level flow.

### The 6 Cross-Level Calibration Rules (R1–R6)

Mandatory in every cross-level flow:

- **R1 — Symptom over label.** Never name the level. Name the experience. ❌ "Level 2" or "Level 3." ✅ "If your child doesn't feel when they need to go…"
- **R2 — 3–5 Recognition Anchors per mail.** 3+ specific situations: L1 "sits 20 minutes, nothing happens," L2 "pees immediately when pull-up comes off," L3 "doesn't react to wet diaper at all." Mom finds 1–2 that match HER child.
- **R3 — Age ranges over fixed ages.** ❌ "For 5-year-olds…" ✅ "For kids 3 to 10+…" — never pin GF to a single age.
- **R4 — Verbal / Non-verbal inclusivity.** Always both: verbal "saying 'wet,'" non-verbal "showing you with a gesture."
- **R5 — Timeline flexibility.** ❌ "In 30 days your child will…" ✅ "Some kids 2 weeks. Others 8. Both normal."
- **R6 — Low-bar success metrics.** "Look at the wet spot for the first time," "pull at their pants in awareness," "walk toward the bathroom (even after)," "stay dry 2 hours instead of 30 minutes."

**Violation cost: any cross-level email missing one of these 6 destroys trust with that segment. R1 violation is worst — mom feels labeled.**

---

## 8. Her Decision Speed & Conversion Targets

GF decision speed is **variable** — the average of five sub-mothers moving at different paces.

- Group A: 7–14 days, reading and waiting for clinical confirmation.
- Group B: 14–21 days, suspicious; symptoms must land hard to override her anti-identity filter.
- Group C: 7–14 days, mechanism-ready and moves fast once the science lands.
- Group D: variable, tracking her eventual level; Day 14 PP-Level Detection is the unlock.
- Group E: 1–3 days if recovery framing lands, otherwise up to 7.

**Blended decision window: 7–21 days.** Sub-group D's Day 14 PP-Level Detection is often the inflection point — converts from "browsing" to "buyer" by letting her *self-select* her level without re-presenting the pop-up.

**Conversion target: 7–10% blended.** Below L1 (15–25%), roughly tied with L2 (8–15%), reflecting heterogeneity. The conversion math: *50% of GF × 7–10% = 3.5–5% of total audience*. PP-Level Detection is the single biggest lever — it converts Group D (25% of GF) at 40–50%, which alone moves the blended rate meaningfully.

---

## 9. Her Hope/Realism Across Journey Stages

GF's emotional journey is **not a single curve** — it is the superposition of five curves.

| Stage | GF Hope/Realism | What she feels | Sub-group variance |
|-------|----------------|----------------|--------------------|
| Pre-Purchase | **50/50** | Hopeful but guarded — symptom language lands, level language doesn't | A: 65/35, B: 50/50 defensive, C: 55/45, D: 45/55, E: 50/50 low-engagement |
| Conversion | **45/55** | Soft push needed; no commitment yet | 40/60 for B and D |
| Transactional | **50/50** | Warm balance — she just bought, give her space | Universal |
| PP Early (D0–14) | **50/50** | Watching for first signal | A: hopeful, D: realistic |
| PP Mid (D14–60) | **40/60** | Balanced realism — validation not cheerleading | PP-Level Detection fires here for D |
| Lifecycle / Winback | **40/60** | Low hope, balanced — respect her time | D migrated by here; residual is B, C, E |

### Migration Moments — When a GF Customer Becomes L1/L2/L3

Migration happens at **specific touchpoints**, not continuously:

1. **PP-Level Detection (Day 14) — primary touchpoint.** Single mail, 4 re-selection buttons (same symptom-based language as the pop-up, NEVER level-labeled). Fires ONCE at Day 14 for GF purchasers still carrying `avatar_general`. **Expected migration: 40–50% of Group D.** Largest single conversion lever in the GF system.
2. **Organic story-based re-engagement.** Story recommendation surfaces (e.g., "If your child is 5, verbal, and 'gets it but doesn't get it' — read Sarah's story"). She clicks, self-identifies, tag updates.
3. **Phase 2 PP-Extended Education.** At D22+, level-specific (5 × 4 = 20). Migration here if not by Day 14 — but most are already done.
4. **Phase 3 PP-Support At-Risk.** For Group D that has not migrated by D90 — gentle re-engagement without forcing a level choice.

**Migration target: 65–75% of GF over lifecycle, bulk by Day 30.** Groups B and C are permanent.

---

## 10. What She Needs From Us

The cross-level GF mom needs six things, each traceable to a calibration rule:

1. **Symptom-first language (R1).** Recognized by experience, not by a label.
2. **Inclusive age ranges 3–10+ (R3).** A 4-year-old may be developmentally 2 in body-signal terms; a 9-year-old may be age-typical except for the interoception gap.
3. **Both verbal and non-verbal covered (R4).** "Saying 'wet'" OR "showing you with a gesture."
4. **Timeline flexibility (R5).** "Some kids 2 weeks. Others 8. Both normal."
5. **Low-bar success metrics (R6).** Mini-wins: looked down at the wet spot, pulled at pants in awareness, walked toward the bathroom even after.
6. **The migration pathway (when ready).** For Groups A and D, the path from GF to level-specific must be **visible, gentle, and re-selectable**. Day 14 PP-Level Detection is primary; story-based organic recommendations are secondary. **NEVER** force migration via pop-up nag screens or repeated quizzes.

She also needs the brand not to require her to know things she doesn't know. Don't ask "what level is your child?" — ask "what does your child do that surprises you?" Symptom questions get answers; level questions get silence.

---

## 11. What She Cannot Hear — Forbidden Phrases

GF-specific forbidden phrases, per Giuliano Demands §8.5 and the V16 rule. Absolute never — any of them destroys trust with at least one sub-group.

**GF-Forbidden Phrases (canonical list):**
- "For Level 1/2/3 kids…"
- "Diagnosed autism only"
- "Verbal kids will…"
- "Your toddler will…"
- Strictly behavioral language — "He needs to want it," "motivation is the issue"
- "When she's potty trained…"
- "Age 2.5–3.5"
- "Severe autism"
- "Non-verbal kids need…"
- "Adult diapers" (sales pressure), "Forever in pull-ups"
- "It's never too late!" / "Don't give up!"
- Brand signature line "You haven't failed potty training. You solved the wrong problem." in copy WITHOUT Lena voice (must be softened to "the method didn't fail. The frame did." for GF Sub-Group B compatibility)

**Most Dangerous Word for GF: "Simple."** Every sub-group has a reason to bristle: A has barely started, B is at war with easy answers, C has tried every sensory integration approach and none were simple, D has been through the BCBA protocol (the opposite of simple), E walked away from the cart (the brand already felt too complex). "Simple" hits all of them.

**Forbidden Subject Line Patterns (cross-level GF):** All L1/L2/L3 NO-GOs apply (no "Last chance," "Miracle solution," "Time is running out," "Easy," "Quick training tips," urgency/promise/cheerleader/comparison). GF-specific: NO level labels, NO "For [level] kids" framing, NO diagnosis assumptions, NO age pins narrower than 3–10+.

---

## 12. Visual Calibration Rules

GF sits at the **balanced midpoint** of the visual spectrum — not L1's bright forward energy, not L2's muted science boxes, not L3's earth-tone dignity. She is the universal canvas.

**CTA Style:** **Medium-low aggression, balanced.** Border-radius 12–16px. Min 48px height. Brand green (#039902) at reduced saturation if skews toward C or D, full saturation if A or E.

**Spacing:** **Balanced, 44–48px gaps.** Not L1's tight 32px (urgency), not L3's loose 64px (dignity). 44px is the GF default. Section spacing 48–64px. Generous whitespace — never cramped.

**Color Energy:** **Balanced mid-saturation.** Brand Green #039902 at 80–100% saturation for primary CTA. Mint #DBFFCD for highlight boxes. Cream #FBF7EB for card backgrounds. Soft Gray #9AA8A7 for subtle text. Off-White #FAF9F7 as email background. Yellow #F5C84B sparingly (badges, trust signals). **NEVER teal** (forbidden brand-wide per §15.1).

**Imagery Style:** **Cross-level, universal.**
- **DO:** Real parents/kids in real homes; soft natural lighting; neutral tones; diverse representation; kids 3–10 range; hands, silhouettes, half-faces; product in context.
- **DON'T:** Stock NT happy families; bright cartoon colors; cleaning chaos as drama; full-on children's faces; "Before/After" with shame implications; pull-ups as evil.
- **Critical GF rule:** Imagery must NOT silhouette toward a single sub-group. Aim for a 3-child composite feel — varied ages, presentations, parent postures.

**The 6 cross-level visual rules are mandatory for ALL GF design:**
1. NO cartoon kid illustrations.
2. NO infantilized "Big Kid Underwear" graphics.
3. Mobile-first design (60%+ traffic).
4. Body min 16px mobile (accessibility).
5. CTAs min 48px height (tap-friendly).
6. Pull-ups shown as signal-blocking tool, NOT as evil.

---

## 13. The One Thing

### The Single Most Important Thing GF Moms Need to Hear

> **"Whatever your child's diagnosis is — or isn't — the reason potty training isn't working is the same. It's not behavioral. It's signal-timing. And there is a third option between pull-ups and regular underwear that works with your child's nervous system, not against it."**

This sentence does five things at once. It is **V16-compliant** (no "autism," "ASD," or "Level 1/2/3"). It is **universally true** — the body-signal-translation problem applies to every sub-group regardless of label. It is **permission-granting** ("or isn't" gives Group B space to not have a label). It is **mechanism-first** ("It's not behavioral. It's signal-timing" lands the Tier 1 lever). And it is **product-positioning** ("third option" anchors the BKC value prop without naming it).

Every Welcome E1, every cart recovery, every PP-Day-14 migration mail should pivot through this idea — the GF equivalent of L1's "He gets it but doesn't get it" and L3's "He looked down at the wet spot for the first time in 9 years."

### The Single Most Dangerous Thing We Could Send Her

> **"For Level 2 kids with autism who struggle with potty training…"**

This sentence — or any variation with level labels and an autism assumption — does five things at once, all catastrophic. It **alienates Group B permanently** (presumes the diagnosis she rejected — spam folder). It **alienates Group C permanently** (her child has SPD or ADHD, not autism). It **erases Group A's pre-diagnostic space** (she was figuring things out and now she's been told what to figure out). It **demoralizes Group D** (she clicked past the pop-up to avoid being labeled; this confirms her fear). And it **loses Group E before she ever opted in** (a label-heavy subject line makes a casual browser feel she has walked into the wrong store).

Any cross-level email that begins with a level label and a diagnosis assumption commits all five harms at once. R1–R6 exist specifically to prevent this sentence — and its cousins — from ever being written.

---

# PART III — EMAIL SEQUENCE & FLOW MAP (Section 2)

## 14. Sequence Overview & Email Count

GF receives the full lifecycle of email communications. The complete inventory across 22 flows:

| Flow | Emails | Type |
|------|--------|------|
| 01 Welcome GF | 8 | Level-specific (GF variant) |
| 02 Cart Abandonment | 3 | Cross-level |
| 03 Checkout Abandonment | 2 | Cross-level |
| 04 Browse Abandonment | 3 | Cross-level |
| 05 Order Confirmation | 1 | Cross-level |
| 06 Shipping & OFD | 2 | Cross-level |
| 07 Arrived & Welcome | 1 | Cross-level |
| 08 PP-Direct Upsell | 2 | Cross-level |
| 09 PP-Level Detection | 1 | **GF-ONLY** |
| 10 PP-Mary S. Story | 1 | Cross-level |
| 11 PP-Education D0-21 | 4 | Cross-level |
| 12 PP-Extended Upsell | 3 | Level-aware |
| 13 PP-Mid Check-In | 3 | Cross-level |
| 14 PP-Extended Education | 5 (GF themes) | Level-specific (GF variant) |
| 15 PP-Support At-Risk | 4 | Cross-level |
| 16 Replenishment | 7 (A+B+C) | Cross-level |
| 17 Review Request | 2 | Cross-level |
| 18 Winback Path A | 3 (GF themes) | Level-specific (GF variant) |
| 19 Winback Path B | 3 (GF themes) | Level-specific (GF variant) |
| 20 FAQ/Objection Library | 6 | Level-specific blocks |
| 21 Referral Flow | 3 | Cross-level |
| 22 Sunset | 2 | Cross-level |
| **TOTAL (full lifecycle)** | **~68** | — |

The 68 figure includes both pre-purchase Welcome GF (8) and post-purchase flows (~60). Some flows are mutually exclusive (e.g., a customer who receives Cart Abandonment does NOT receive Checkout Abandonment for the same session). **Realistic maximum per-customer receipt is ~50–55 emails** across the full lifecycle.

### Post-Purchase Email Timeline (No Migration, Full Engagement)

| Day | Flow | Email | Purpose | Migration? |
|-----|------|-------|---------|------------|
| 0 | Order Confirmation | e1 | Order summary, guarantee reminder | — |
| 0 | Shipping & OFD | e1 | Tracking info, prep tips | — |
| 1 | PP-Direct Upsell | e1 | 1-pair → 3+3 bundle nudge | — |
| 1 | PP-Education D0-21 | e1 | "Your first wear" | — |
| 3 | PP-Direct Upsell | e2 | 10% off bundle add-on | — |
| 3 | PP-Mary S. Story | e1 | Founder story, no offer | — |
| 3 | Arrived & Welcome | e1 (if delivered) | First-wear protocol | — |
| ~3-5 | Shipping & OFD | e2 | "Today's the day!" | — |
| 7 | PP-Education D0-21 | e2 | "What to look for" | — |
| **14** | **PP-Level Detection** | **e1** | **Migration moment — 4 story links** | **40–50% migrate here** |
| 21 | PP-Education D0-21 | e4 | "Celebrate small wins" | — |
| 22+ | PP-Extended Education | starts | 5 GF themes OR 5 level themes if migrated | 5–10% migrate via story links |
| 28 | PP-Extended Upsell | e1 | Bundle upgrade | — |
| 30 | PP-Mid Check-In | e1 | Three-Family Testimonial + reply-to-Lena | — |
| 30 | Review Request | e1 | First review ask | — |
| 30 | Replenishment A | a2 | Consistency matters (1-pair buyer) | — |
| 35 | PP-Extended Upsell | e2 | Accessory cross-sell | — |
| 42 | PP-Extended Upsell | e3 | Final upsell, door open | — |
| 45 | PP-Mid Check-In | e2 | "How's it going?" reply invitation | — |
| 60 | PP-Mid Check-In | e3 | 60-day mark, guarantee | — |
| 60 | Review Request | e2 | Review follow-up | — |
| 60 | Replenishment A | a3 | Guarantee threshold | — |
| 75 | Replenishment B | b1 | "Time to rotate" (3+3 buyer) | — |
| 90 | Replenishment B | b2 | Bundle upgrade 5+5 | — |
| 90+ | Winback Path A | starts | 3 GF themes OR 3 level themes | — |
| 120+ | Sunset | e1 | Re-permission check | — |
| 124+ | Sunset | e2 | Final farewell | — |
| 150 | Replenishment C | c1 | Long haul support (5+5 buyer) | — |
| 180 | Replenishment C | c2 | Accessory refresh | — |

**Total post-purchase emails (no migration, full engagement):** ~36 cross-level + 5 GF PP-Extended Education + 3 GF Winback themes + 2 Sunset = ~46 emails across ~6 months.

---

## 15. Welcome GF (Flow 01, 8 emails)

The GF Welcome variant is the only level-specific Welcome variant where **all 8 emails use the universal R1–R6 calibration**. The macro states "GF email content must be derived from R1-R6 + L1/L2/L3 base tables, with all level labels stripped."

**Sign-off progression (brand-wide):** E1–E2 "Talk soon," → E3–E5 "With understanding," → E6+ "With care,"

**WELCOME10 code:** Used in E1 across all 4 variants. Expires at E7 per L1/L2 cadence.

**Common to all 8 GF Welcome emails:**
- Subject lines max 60 chars (recommended 40–50). Preheaders max 130 chars (recommended 80–100).
- Body min 16px mobile. CTA min 48px height. Questrial weight 400 only.
- Brand Green #039902 button, balanced saturation.
- NO "autism," "ASD," "Level 1/2/3," "toddler," "adult diapers," "non-verbal."
- Both verbal and non-verbal examples always.
- Age language: "kids 3 to 10+."

### E1 — Welcome + Code + Lena Intro (Day 0)
Welcome + WELCOME10 code. Lena intro: mom of two sons. Mirror: "Whether your child is verbal or not — saying 'wet' or showing you with a gesture — something's not clicking." Validation only at this stage. **Primary lever:** L4 (Lena peer trust). Sub-group reach: A lands lightly (hope at 65/35), B accepts (no autism language), C tolerates (Lena voice universal), D feels seen (gentle welcome), E re-engages (discount present). **Sign-off:** "Talk soon," — Lena.

### E2 — Mechanism Reveal, "Holy Shit" Moment (Day 1)
Mechanism explain: "Your child talks about the potty but doesn't produce... It's not behavioral. It's signal-timing." Introduce interoception gently. Name 2–3 failed methods without level-pinning. **Primary lever:** L1 (Sensory Gap) + L5 (49% normalization paraphrased). This is the **tipping point email** for GF. R2 mandates 3–5 recognition anchors covering all three level paths WITHOUT naming them. **First migration anchor:** "If your child is 5, verbal, and 'gets it but doesn't get it' — read Sarah's story."

### E3 — Guarantee + Permission Not to Buy (Day 3)
Decision time. 60-day guarantee prominent. "You don't have to hope — just try. 60 days. By your judgment." Permission-not-to-buy explicit. Pre-K urgency FORBIDDEN in GF (L1-only allowance). **Primary lever:** L3 (Guarantee) + L4 (Lena). **Sign-off:** "With understanding," — Lena.

### E4 — Failure Acknowledgment, "You Didn't Fail" (Day 7)
"You didn't fail. You solved the wrong problem — the frame was behavioral, the issue is signal-timing." Deep failure acknowledgment. For GF Sub-Group B, soften to "the method didn't fail. The frame did." Maternal-blame version is forbidden in GF copy without Lena voice. **Primary lever:** L1 (Deep mechanism) + L5. **Second migration anchor:** Different symptom profile from E2 (e.g., "If your child is 7, has the words, but never connects them to the action — read Lisa's story").

### E5 — Deep Mechanism (Day 10)
Interoception deep dive. Mahler quote acceptable (not required). SPARK 49% statistic — **NEVER used in GF copy** because it names autism explicitly. Instead use "almost 1 in 2 kids with nervous system differences aren't trained by age 5." **Primary lever:** L1 (Mechanism). **Third migration anchor:** Different symptom profile again. After E5, if no migration via anchor clicks, PP-Level Detection at D14 is the next opportunity.

### E6 — Social Proof (Day 14)
Testimonials — universal cross-level stories. The Three-Family Pattern (one L1-style, one L2-style, one L3-style story, all symptom-described). No level labels. **Primary lever:** L4 (Peer Trust). **CRITICAL CONFLICT:** PP-Level Detection ALSO fires at Day 14. Per S01 §5.2, **PP-Level Detection takes priority over Welcome E6** for GF purchasers. Suppression logic: if `purchased=true` AND `level=gf`, suppress Welcome E6, deliver PP-Level Detection.

### E7 — Last Call, WELCOME10 Expires (Day 17)
"This is your last chance to try with the code + guarantee." Permission not to buy present. No Pre-K deadline, no urgency beyond code expiry. "If today isn't the day, that's a real answer." **Primary lever:** L3 (Guarantee) + L5.

### E8 — Gentle Close, Door Open (Day 21)
Gentle close. Door stays open. Migration anchors still surface. Lena farewell. Expected opens 20–30%. No hard close. CTA = text-link. **Primary lever:** L4 (Lena).

---

## 16. Pre-Purchase Cross-Level Flows (Cart, Checkout, Browse)

### Flow 02 — Cart Abandonment (3 emails)

- **Trigger:** Item added to cart, no purchase within window. Suppresses Welcome GF E3+ during active cart.
- **E1 (1h):** Mechanism reminder, 3–5 recognition anchors, Lena voice. Cart contents drive upsell strategy. No discount.
- **E2 (24h):** Social proof + product value. Three-Family Pattern testimonial (symptom-described, no level labels). "Most parents who buy 1 pair come back for 3+3 within a week."
- **E3 (72h):** 60-day guarantee + permission not to buy. Optional 10% off (test without discount first).
- **GF calibration:** R1–R6 mandatory throughout. Three-Family Pattern is essential — every sub-group must find herself.

### Flow 03 — Checkout Abandonment (2 emails)

- **Trigger:** Customer reached checkout, did not complete.
- **E1 (1h):** Friendly reminder + answer last doubts. Show exact cart contents with pricing. Permission-based.
- **E2 (24h):** Final nudge + 60-day guarantee. Free shipping reminder.
- **GF calibration:** No additional discount (highest-intent abandoners). Cross-level only. The 60-day guarantee is the strongest lever for B (defensive) and D (realism-anchored).

### Flow 04 — Browse Abandonment (3 emails)

- **Trigger:** Viewed product pages, no cart created.
- **E1 (24h):** Mechanism education hook. "You were looking at something that helps kids who can't feel when they need to go." Educational, not promotional.
- **E2 (3 days):** Deep mechanism + product education. "Here's why the 3-layer system works differently." One Three-Family testimonial.
- **E3 (7 days):** 60-day guarantee + gentle close. "60 days for your child's nervous system to start connecting."
- **GF calibration:** E1–E2 NO direct offer. E3 first offer. Mechanism-led because Group E is here in volume.

---

## 17. Transactional & Arrival Flows (Flows 05–07)

### Flow 05 — Order Confirmation (1 email)
Immediate post-purchase. Order summary, shipping timeline, 60-day guarantee reminder. Lena sign-off: "You've got this. We've got your back. — Lena." **Google 2024 rule:** must be predominantly transactional. ONE accessory cross-sell (wash bag) — soft. **Sub-group trust peaks:** E gets +2.0 (biggest jump in lifecycle).

### Flow 06 — Shipping & Out for Delivery (2 emails)
- **E1 (fulfillment):** Tracking info, delivery estimate. Lena: "Can't wait for you to try them."
- **E2 (morning of delivery):** "Today's the day!" Prep guidance: wash first, no fabric softener, let child unbox. Manage expectations: "First few wears are about introducing the sensation, not results."

### Flow 07 — Arrived & Welcome (1 email)
First-wear protocol. Mechanism education: "The wetness signal works by letting your child FEEL when they're wet." What-to-expect timeline: Week 1 awareness, Week 2–4 recognition, Week 4–8 active response. Gentle upsell if 1-pair buyer. Group A reaches peak hope (+1.0).

---

## 18. PP-Direct Upsell & PP-Mary S. (Flows 08, 10)

### Flow 08 — PP-Direct Upsell (2 emails, 1-pair buyers)
- **E1 (Day 1):** "Most parents who buy 1 pair come back for 3+3 within a week. Here's why." Bundle comparison table. Math reframe OK for GF.
- **E2 (Day 3):** "Your 1 pair is on its way. Here's how the 3+3 bundle complements it." 10% off add-on.
- **GF calibration:** NEVER "You didn't buy enough." Frame as rotation need. Groups B and D bristle at "incomplete purchase" framing (−0.5).

### Flow 10 — PP-Mary S. Story (1 email, Day 3)
Founder story — Mary S. appears ONCE. "I started BrightKidCo because my own child couldn't feel the signal..." Signed as Mary S., NOT Lena. No offer. Pure brand building. **Mary S. is the brand's GF archetype** — "didn't know what label to use" parent. **Group B trust peak: +1.0** — Mary's framing is permission for B to read without defensive filter. **Group D trust peak: +1.0** — Mary is a mom who clicked past the labels.

---

## 19. PP-Education D0-21 (Flow 11)

Cross-level R1–R6 throughout. Level-aware content blocks IF tag is known (for migrated Group D, after Day 14).

- **E1 (Day 0):** "Your first wear." Put on like regular underwear. No expectations. Just observe.
- **E2 (Day 7):** "What to look for." Micro-signs: pause, touch, look down, shorter dry periods.
- **E3 (Day 14):** "Week two reality." **SUPPRESSED for GF purchasers** — replaced by PP-Level Detection. After migration, resumes at E4 (Day 21) with level-aware content block.
- **E4 (Day 21):** "Celebrate the small wins." "He looked at the wet spot!" Soft upsell if 1-pair buyer.
- **GF calibration:** NO outcome promises. The 49% SPARK stat may NOT be used in GF (autism-named). Universal normalization only.

---

## 20. PP-Level Detection (Flow 09) — THE BIG LEVER

This is the **single most important mail in the entire GF lifecycle**. Day 14 trust is at peak (transaction-confirmed intent, mechanism understood, guarantee absorbed).

### What It Is
The only **GF-only** flow in the entire BrightKidCo system. Single email, fires once, at Day 14 post-purchase, ONLY for customers who still carry `avatar_general`. Its job is to convert the customer's GF tag into an L1/L2/L3 tag via self-selection — without forcing the choice.

### What It Asks
PP-Level Detection does NOT ask "What level is your child?" Instead, it asks: **"Do you recognize your child's experience in one of these stories?"** The email presents 4 story links, each describing a symptom profile WITHOUT naming the level.

**The 4 Story Buttons (symptom-described, NEVER level-labeled):**

| Button | Symptom Description | Maps To |
|--------|--------------------|---------|
| 1 | "He talks about the potty but doesn't produce. Sits for 20 minutes. Nothing happens." | L1 (Sarah) |
| 2 | "She pees the second her pull-up comes off. Or holds it for hours and then has an accident." | L2 (Lisa) |
| 3 | "He doesn't seem to notice when he's wet. Or reacts late." | L3 (Maria) |
| 4 | "I'm still figuring out what's going on." | GF (re-confirm) |

**CRITICAL:** Buttons 1–3 do NOT say "Level 1/2/3." They use the SAME symptom-based language as the pop-up.

### What Happens After the Click

**Click Buttons 1–3:**
1. **70%-confidence floor rule applies.** Tag updates from `avatar_general` to `l1`/`l2`/`l3`.
2. **Welcome GF E6 already suppressed** (Day 14 collision).
3. **PP-Education D0-21 E3 also suppressed.**
4. **Future flows re-route:** PP-Extended Education switches from GF themes to L1/L2/L3 themes.
5. The migration is permanent for Group D.

**Click Button 4:** Tag remains `avatar_general`. GF mail continues. Future migration opportunities remain.

**No click:** Tag remains `avatar_general`. Single touchpoint fired. Migration becomes dependent on organic story link clicks. Estimated 5–10% organic migration post-PP-Level Detection vs 40–50% at the touchpoint itself.

### Expected Performance
- **Migration rate at PP-Level Detection:** 40–50% of Group D × 25% Group D share × 50% GF share = **5.6% of total audience migrates at Day 14**.
- **Combined with other migration waves:** Target 65–75% migration over lifecycle, bulk by Day 30.

### Copy Specifics
- **Subject line:** Symptom-framed, no level label. Examples: "Some kids it clicks right away. Others it takes longer. Where's yours?" / "Three parents wrote in this month. Does any of this sound like your house?"
- **Body:** Lena voice SHORT variant. 3–4 story link blocks, each ~2 sentences of symptom description.
- **No offer.** Pure detection.
- **CTA aggression:** Lowest of any GF mail. Story links styled as text-link or low-emphasis button.

### Suppression Priority Rule (CRITICAL)
When Day 14 arrives for a GF purchaser:
1. **PP-Level Detection (Flow 09)** — HIGHEST. Suppresses everything else.
2. **Welcome GF E6 (Flow 01)** — SUPPRESSED for purchasers.
3. **PP-Education D0-21 E3 (Flow 11)** — SUPPRESSED.

After Day 14, the customer's tag is either `avatar_general` (no click) or `l1`/`l2`/`l3` (clicked).

---

## 21. PP-Extended Upsell, Mid Check-In, Extended Education (Flows 12–14)

### Flow 12 — PP-Extended Upsell (3 emails, D28+)
Level-aware (cross-level body with per-level framing). For non-migrated GF, cross-level framing: "Whether your child is just starting to notice, or has been at this for years — the right amount of pairs depends on laundry cycles and consistency."
- E1 (Day 28): Bundle upgrade.
- E2 (Day 35): Accessory cross-sell (Wash Bag, Magic Targets).
- E3 (Day 42): Final upsell. Guarantee reinforcement, door open.

### Flow 13 — PP-Mid Check-In (3 emails, D30+)
- E1 (Day 30): Three-Family Testimonial + Reply-to-Lena invitation. **Universal trust peak (+0.5 to +1.0).**
- E2 (Day 45): "How's it going?" Reply-to-this-email for support.
- E3 (Day 60): "At the 60-day mark." Guarantee reminder.

### Flow 14 — PP-Extended Education (20 emails, GF = 5 themes)
GF themes (5):
1. **Theme 1 (D22):** "Whether...If...Or..." Pattern — "Whether your child is 3 or 10, talks about the potty but won't use it, or has never shown a single sign of feeling wet, if the 'I need to go' signal doesn't arrive when it should, every method that demands a missing signal will fail."
2. **Theme 2 (D35):** Three-Family Pattern Deep.
3. **Theme 3 (D50):** Mixed Scenarios — "Some kids show their first sign in week two. Others in week 30."
4. **Theme 4 (D70):** Migration Reinforcement — Late migration opportunity for non-migrated GF.
5. **Theme 5 (D90):** Buffer / Long-Haul Support — Mechanism reinforcement without labels.

For migrated GF: Customer exits GF themes and enters L1/L2/L3 themes. For permanent GF (B, C): Completes all 5 GF themes. Welcome home.

---

## 22. PP-Support At-Risk, Replenishment, Review (Flows 15–17)

### Flow 15 — PP-Support At-Risk (4 emails, 3–21 days no opens)
NO upsells. NO "We miss you." NEVER guilt-tripping.
- E1 (3 days): "Just checking in."
- E2 (7 days): "Here's how to get the most out of your pairs."
- E3 (14 days): "Your child's nervous system is learning even when it doesn't show." **Soft story link — late migration opportunity for Group D.**
- E4 (21 days): "Your 60-day guarantee is still active."

### Flow 16 — Replenishment A/B/C (7 emails, D14+)
Practical reminders. Trust maintenance-mode.
- A (1-pair buyer, 3 emails): A1 D14 wash cycles, A2 D30 consistency, A3 D60 guarantee threshold.
- B (3+3 buyer, 2 emails): B1 D75 "Time to rotate," B2 D90 bundle upgrade to 5+5.
- C (5+5 buyer, 2 emails): C1 D150 "Long haul support," C2 D180 accessory refresh.

### Flow 17 — Review Request (2 emails, D30+)
- E1 (Day 30): "Has BrightKidCo made a difference? Share your experience."
- E2 (Day 60): "Your experience helps other parents decide."

---

## 23. Winback Paths A & B (Flows 18–19)

### Flow 18 — Winback Path A (12 emails, post-purchaser, 90 days no engagement)
GF themes (3): Cross-level R1-R6; Symptom-first; Migration anchor (last organic migration opportunity). Winback pauses ALL nurture flows while active.

### Flow 19 — Winback Path B (12 emails, never-bought, 60 days no purchase)
Lower conversion than Path A. Non-buyers need stronger mechanism proof. Same structure.

---

## 24. FAQ/Objection Library, Referral, Sunset (Flows 20–22)

### Flow 20 — FAQ/Objection Library (6 emails)
Six emails with 4-step reframe (Name → Validate → Reframe → Absolve). For non-migrated GF, GF block used.
- E1 (D1) — "Tried Everything": Defeated → Absolved. Sources: Nicholson 2019.
- E2 (D4) — "Too Old/Severe": Hopeless → Empowered. Sources: Faulkner 2017.
- E3 (B4) — GI/Withholding: Scared → Supported. Sources: McElhanon 2014.
- E4 (C3) — "Worth $30–50?": Math reframe acceptable for non-migrated GF (L3 NEVER math reframe).
- E5 (B2) — BCBA Compatibility: For non-migrated GF, BCBA language may NOT appear (R1 + V16). Block becomes generic "professional recommendations" framing.
- E6 (D3) — Hope-Crash Fear: Protected → Safe to try. Sources: Hample 2020.

### Flow 21 — Referral Flow (3 emails, D30+)
"Know another parent who's struggling? Share BrightKidCo." Incentive: discount on next purchase. Three-Family Pattern for social proof.

### Flow 22 — Sunset (2 emails, D120+)
**Trigger:** 0 opens AND 0 clicks AND 0 orders AND ≥20 emails received. **HIGHEST PRIORITY** — suppresses ALL other flows.
- E1: Re-permission check. "Do you still want to hear from us?" Respectful exit, NEVER guilt.
- E2: Final farewell. No response = suppressed for 6–12 months.

---

## 25. Post-Migration Behavior — What Happens After the Tag Changes

### 25.1 Pre-Purchase Migration (Welcome Stage)
If customer clicks Welcome GF migration anchor (E2/E4/E5) BEFORE purchasing:
- Tag updates to `l1`/`l2`/`l3` immediately.
- Welcome sequence re-routes mid-flight. Customer drops out of Welcome GF, joins Welcome L1/L2/L3 at next pending position.
- Cross-level flows continue to completion. Future flows use new level tag.
- PP-Level Detection at Day 14: SUPPRESSED.

### 25.2 Day 14 Migration via PP-Level Detection (Primary Migration Wave)
Tag updates at click. Welcome GF already terminated (E6 suppressed). PP-Education D0-21 E3 also suppressed; resumes at E4 (Day 21) with level-aware content. From D22+ onward, all flows are level-routed.

### 25.3 D22+ Migration via PP-Extended Education Story Links (Secondary Wave)
Customers who didn't migrate at Welcome or Day 14 still have migration opportunities in PP-Extended Education E2–E4 (~D30–60), PP-Support At-Risk E3 (~D30+), FAQ narrative prompts. No retroactive mail re-send — she does NOT receive Welcome L1/L2/L3 retroactively.

### 25.4 No Migration — Groups B and C Permanent Residents
For Diagnosis-Rejecters (~15% of GF) and Sensory-Difference (~25% of GF):
- **Tag remains `avatar_general` for life.**
- All 5 GF PP-Extended Education themes delivered.
- GF-specific Winback themes used. GF FAQ blocks used.
- Brand relationship maintained via cross-level flows + GF-specific blocks for full lifecycle through Sunset.

### 25.5 Cumulative Migration Math
- Welcome GF stage (E2/E4/E5): ~5–10% migration
- PP-Level Detection (Day 14): **5.6% of total audience**
- PP-Extended Education (D22+): ~5–10% of remaining non-migrated GF
- PP-Support At-Risk / Organic (D30–90): ~5% of remaining
- **Total migration target: 65–75% of GF over lifecycle, bulk by Day 30.**

---

## 26. Suppression Rules Summary

GF-specific suppression rules (consolidated):

1. **PP-Level Detection (D14) SUPPRESSES** Welcome GF E6 and PP-Education D0-21 E3.
2. **Cart Abandonment SUPPRESSES** Welcome GF E3+ during active cart.
3. **Winback (Path A or B) SUPPRESSES** ALL nurture flows while active.
4. **Sunset SUPPRESSES** ALL flows unconditionally. After sunset, `unengaged = True`.
5. **Migration SUPPRESSES** all GF-specific mail going forward.
6. **Level-aware content blocks SWITCH** in PP-Education D0-21 E4+, PP-Extended Education, PP-Extended Upsell, PP-Mid Check-In, Replenishment, Review Request, Referral once tag is known.

---

# PART IV — EMOTIONAL ARC & TRUST METER (Section 3)

## 27. Trust Meter Baselines & Scale

**Trust meter scale:** 0–10. 0–3 = alienation/spam folder. 4–5 = neutral. 6–7 = trust building. 8–9 = high trust. 10 = peak trust (rare).

**Trust meter baselines at program entry:**

| Sub-Group | Baseline | Why |
|---|---|---|
| A — Diagnostic Entrants (~25%) | 5.5 | Hope-heavy but unanchored |
| B — Diagnosis-Rejecters (~15%) | 3.5 | Defensive. Trust must be earned by never labeling |
| C — Sensory-Difference (~25%) | 5.0 | Neutral-positive. Reads mechanism-rich copy |
| D — Overwhelmed Non-Selectors (~25%) | 4.0 | Resigned but watching. Trust is conditional |
| E — Cart/Browse (~10%) | 3.0 | Lowest baseline. Never opted in |

A welcome mail that lands Group A at +1.5 trust may move Group B by +0.3 or −1.5 depending on whether copy passes V16.

---

## 28. Per-Email Trust Deltas (Summary)

### Welcome GF (Flow 01)

| Email | A Delta | B Delta | C Delta | D Delta | E Delta | Vulnerability |
|-------|---------|---------|---------|---------|---------|---------------|
| E1 (D0) | +1.0 | +0.5 | +0.5 | +1.0 | +1.0 | None — safest mail |
| E2 (D1) | **+2.0** | +0.5 (V16-dep) | +1.5 | +1.0 | +0.5 | R2 violation, R1 violation |
| E3 (D3) | +0.3 | +1.0 | 0 | +1.0 | 0 | Pre-K urgency |
| E4 (D7) | +0.7 | +0.5 (V16-cond) | +0.5 | +1.0 | n/o | Maternal-blame version |
| E5 (D10) | +0.5 | +0.5 | **+1.0** | 0 | gone | SPARK 49%, autism-specific research |
| E6 (D14) | 0 | +0.5 | 0 | +0.5 | +0.5 | Level labels in story blocks |
| E7 (D17) | −0.5 | −0.5 | −0.5 | −0.5 | +0.5 | "Last chance," cheerleading |
| E8 (D21) | −0.5 | 0 | 0 | +0.5 | 0 | Hard close |

### Cart Abandonment
- Cart E1 (1h): All +1.0 (open-dependent). E +1.0.
- Cart E2 (24h): All +0.5.
- Cart E3 (72h): All 0; B +0.5, D +0.5.

### Checkout Abandonment
- Checkout E1 (1h): All +0.5. E +1.0.
- Checkout E2 (24h): B +0.5, D +1.0. Others 0.

### Order Confirmation & Shipping
- Order Confirmation: A +0.5, B +1.0, C +0.5, D +0.5, E **+2.0** (biggest jump).
- Shipping E1: A +0.5, others 0.
- Shipping E2: B +0.5, D +0.5, E +0.5.

### PP-Level Detection (D14) — THE BIG LEVER

| Sub-Group | Trust-After Click | Trust-After No-Click | Delta |
|-----------|-------------------|----------------------|-------|
| A | 9.5 | 9.0 | +1.0 to +2.0 |
| B (LITMUS) | 8.5 (Button 4) | 7.0 (V16) / 3.0 (V16 fail) | +0.5 to +1.0 / −2.0 to −4.0 |
| C | 9.0 (Button 4) | 8.0 | +0.5 to +1.5 |
| **D (GOLDMINE)** | **9.5–10.0** | 8.0 | **+1.5 to +6.0** |
| E | 7.5 (Button 4) | 6.5 | +0.5 to +1.0 |

### PP-Mid Check-In (D30+)
- E1 (D30): A +1.0, B +0.5, C +0.5, D +0.5, E +0.5.
- E2 (D45): All 0 except E −0.5.
- E3 (D60): A −0.5, C −0.5. Others 0.

### PP-Extended Education Themes (D22+)
- All themes hold trust at 8.5–9.5 for A, B, C. D (non-migrated) gets +0.5 at Themes 2–4. E drops to gone by Theme 3.

---

## 29. Five Superimposed Emotional Curves

### Group A — Diagnostic Entrants — "The Climber"
Steady rise from 5.5 to 9.5 (post-Welcome E2 mechanism reveal). Holds at 8.5–9.5 through E3–E6. D14 PP-Level Detection may cause migration (curve jumps to 10 then stabilizes at level baseline). PP-Extended Education maintains high trust. **Migration potential: HIGH** (~30% over lifecycle, bulk by Day 30).

### Group B — Diagnosis-Rejecters — "The Defender"
Defensive entry at 3.5. Climbs slowly through Welcome E1–E5 if V16 holds. **Dips to 2.0–3.0 instantly if any E1–E5 mail violates V16.** PP-Mary S. founder story (Day 3) is her first major trust peak (+1.0). D14 PP-Level Detection is the second-largest trust moment — she clicks Button 4 or no button but respects being asked. Long-haul PP-Extended Education (D22+) builds trust to 9.0+ because no migration pressure and no labels. **Migration potential: ZERO.** Permanent GF resident.

### Group C — Sensory-Difference — "The Mechanism Reader"
Neutral-positive entry at 5.0. Rises sharply through Welcome E2 (interoception introduction) to 7.0–8.0. Welcome E5 (Mahler quote) is her peak — 8.5 to 9.0. Holds at 8.5–9.5 through post-purchase. PP-Extended Education mechanism-deep themes are her "welcome home." **Migration potential: ZERO.** Permanent GF resident.

### Group D — Overwhelmed Non-Selectors — "THE GOLDMINE"
Resigned-but-watching entry at 4.0. Steady climb through Welcome E1–E6 (her level's symptom profile in E6 is the trigger). D14 PP-Level Detection is the **peak moment** — 9.5 to 10.0 if she migrates, 8.0 if she doesn't. Post-migration, she is functionally indistinguishable from a level-native customer. **Migration potential: HIGHEST (40–50% at Day 14).**

### Group E — Cart/Browse without Opt-In — "The Ghost"
Lowest engagement entry at 3.0. Order Confirmation (D0) is her first major trust peak because she just bought — 6.0. Cart/Checkout/Browse Abandonment emails hold her at 4.5–5.5. PP-Education and PP-Extended Education are fragile — she drops to 4.0–5.0 by D30. PP-Support At-Risk is her last re-engagement window. Winback may or may not recover her. Sunset is likely outcome. **Migration potential: LOW (5–10% organic).**

---

## 30. Consolidated Trust Meter — Key Inflection Points

| Lifecycle Moment | Group A | Group B | Group C | Group D | Group E |
|------------------|---------|---------|---------|---------|---------|
| Entry baseline | 5.5 | 3.5 | 5.0 | 4.0 | 3.0 |
| Welcome E1 (D0) | 6.5 | 4.0 | 5.5 | 5.0 | 4.0 |
| Welcome E2 (D1) | 7.5 | 4.5 | 7.0 | 6.0 | 4.5 |
| Welcome E4 (D7) | 8.5 | 6.0 | 7.5 | 8.0 | n/o |
| Welcome E5 (D10) | 9.0 | 6.5 | 8.5 | 8.0 | n/o |
| Order Confirmation | 8.5 | 7.0 | 8.0 | 7.5 | 6.0 |
| PP-Mary S. (D3) | 9.5 | 8.0 | 9.0 | 8.5 | 7.0 |
| **D14 PP-Level Detection** | **9.0–9.5** | **7.0–8.5** | **8.0–9.0** | **8.0–10.0** | **6.5–7.5** |
| PP-Mid Check-In E1 (D30) | 9.5 | 8.5 | 9.5 | 8.5 | 6.0 |
| PP-Extended Ed (D22+) | 9.5 | 9.0 | 9.5 | level | drops |
| Sunset (D120+) | 8.5 | 8.5 | 9.0 | 8.0 | 5.5 |

**Read this table left-to-right by row** — each row is the trust meter snapshot at that moment across all five sub-groups. **Read top-to-bottom by column** — each column is one sub-group's trust journey.

---

## 31. The 5 Emotional Death Spirals to Avoid

Patterns that produce the steepest negative deltas:

1. **V16 violation in Welcome E2 / E4** — Group B drops from 4.5 to 2.0 instantly. "Autistic children often can't feel body signals" is canonical. **Delta: −2.5.**
2. **R1 violation anywhere** — Group B drops 1.0–2.0 per occurrence. "For Level 2 kids who…" is canonical. **Delta: −1.0 to −2.0 per occurrence.**
3. **Maternal-blame version of "You haven't failed potty training" without Lena voice** — Group B drops 2.0–3.0. V16-compliant alternative: "the method didn't fail. The frame did." **Delta: −2.0 to −3.0.**
4. **"Simple" anywhere in body copy** — All five sub-groups bristle. **Delta: −0.5 to −1.5 across all groups.**
5. **Outcome promises in PP-Education / Replenishment** — Group D's realism anchor breaks; Group B drops because outcome-promise implies the diagnosis frame. **Delta: −1.0 to −2.0.**

---

## 32. The 5 Emotional Peak Moments to Protect

Patterns that produce trust peaks. Defend these:

1. **Welcome E2 mechanism reveal** — Group A's tipping point (+2.0). Group C's mechanism-curious moment (+1.5). Defend with R2 (3–5 anchors) and V16.
2. **Welcome E4 / PP-Mary S. founder story** — Group B's first trust peak (+1.0). Defend with V16 + softened "the method didn't fail. The frame did."
3. **Welcome E5 Mahler quote / mechanism deep** — Group C's peak (+1.0). Defend with V16 (no SPARK 49%, no autism-specific research).
4. **D14 PP-Level Detection** — Group D's peak (+6.0 if migrated). **Defend at all costs.** V16 + R1–R6 non-negotiable.
5. **PP-Mid Check-In E1 reply-to-Lena invitation** — Universal trust peak (+0.5 to +1.0). Defend by NOT automating replies — Lena's voice must be real.

---

# PART V — STRUCTURAL BLUEPRINT & VARIANCE LEDGER (Section 4)

## 33. The 9 Structural Dimensions

Per the email-marketing-structure skill §9.2:

1. **Section Count** — 3–8 sections per email
2. **Section Order** — pattern A–H (Classic, Story-Led, Problem-Solution, Social-Proof First, Product-First, Education-First, Urgency, Minimalist)
3. **Image Density** — image-heavy (6 images, 3 sections) vs text-heavy (1 image, 6 sections)
4. **Color Temperature** — warm / cool / neutral / dark
5. **Email Length** — short (150 words) / medium (600) / long (1200)
6. **Argument Structure** — PAS, AIDA, Story-led, Data-led, Testimonial-led, Direct
7. **Visual Rhythm** — tight (40px gaps) / open (80px gaps) / mixed
8. **CTA Position** — early / mid / late / double-tap / text-link only
9. **Subject Line Formula** — observation / question / mechanism tease / story fragment / validation / data point / parent quote

---

## 34. The GF Design Canvas — Global Constraints

### Hard Constraints

| Constraint | Rule | Why |
|---|---|---|
| Subject line | Max 60 chars (recommended 40–50) | R1 + R3 |
| Preheader | Max 130 chars (recommended 80–100). Never autism-named. | V16 |
| Body font | 16px mobile / 17px desktop minimum | Accessibility |
| CTA height | Min 48px height | Finger-friendly mobile |
| Font | Questrial 400 only | Brand spec §15.4 |
| Color: Brand Green CTA | #039902 at 80–100% saturation for A/E, reduced for C/D | Mood-by-sub-group |
| Color: forbidden | NO teal anywhere | Brand §15.1 |
| Spacing | 44–48px gaps between sections | Balanced midpoint |
| Imagery | Real parents/kids, no cartoon, no stock NT families | Cross-level visual rule 1 |
| Sign-off progression | E1–E2 "Talk soon," → E3–E5 "With understanding," → E6+ "With care," | Brand-wide |
| Email size | Under 102KB total | Gmail clips beyond this |

### R1–R6 Cross-Level Calibration Rules

Mandatory in every GF email. Violation destroys trust with at least one sub-group.

### V16 Rule
Symptom language only. Never "autism," "ASD," "Level 1/2/3." Use "nervous system differences" as the umbrella.

### GF Image Sub-Group Variance Rule
Imagery must NOT silhouette toward a single sub-group. Aim for a 3-child composite feel.

---

## 35. Email-by-Email Structural Map (Highlights)

### Welcome GF E1–E8 (Variance Audit)

| Email | Section Count | Section Order | Image Density | Color Temp | Email Length | Argument | Rhythm | CTA Position | Subject Formula |
|-------|--------------|---------------|---------------|------------|--------------|----------|--------|--------------|------------------|
| E1 | 5 | A (Classic) | 2 | Neutral | Short | Direct + Story frag | Open (64) | Double-tap | Observation + code |
| E2 | 7 | C (Problem-Solution) | 3 | Cool | Long | Data-led + Story frag | Tight/Open | Mid | Observation + mechanism |
| E3 | 5 | A (Classic mod) | 2 | Warm | Medium | Direct + PAS | Open (60) | Double-tap | Permission |
| E4 | 6 | B (Story-Led) | 1 | Warm | Medium | Story-led + Reframe | Open (64) | Late | Validation |
| E5 | 8 | F (Education-First) | 3 | Cool | Long | Data-led + Story frag | Tight/Open | Late | Mechanism tease |
| E6 | 6 | D (Social Proof First) | 3 | Warm | Medium | Testimonial-led | Open (64) | Late | Parent quote |
| E7 | 4 | G (Urgency mod) | 1 | Warm+Yellow | Short | Direct + Permission | Open (60) | Double-tap | Permission + code |
| E8 | 3 | H (Minimalist) | 1 | Neutral | Short | Story-led + Permission | Open (80) | Text-link | Validation |

**Compliance check:** Section count, section order, image density, color temperature, email length, argument structure, visual rhythm, CTA position, and subject line formula ALL vary across the 8 emails. The Welcome GF sequence is variance-compliant.

### PP-Level Detection (Flow 09) Structure

| Dim | Choice | WHY |
|---|---|---|
| 1. Section Count | 4 | Short. This mail does not sell. It listens. |
| 2. Section Order | H (Minimalist modified) | Question + 4 buttons. Pure detection. |
| 3. Image Density | 0–1 images | Detection mail — no product. Lena voice only. |
| 4. Color Temperature | Neutral | Quiet. Listening tone. |
| 5. Email Length | Short (~250 words) | Concise. Each story is 2 sentences. |
| 6. Argument Structure | Question + Symptom-described story links | "Do you recognize your child's experience in one of these stories?" |
| 7. Visual Rhythm | Open (60–80px between story blocks) | Each story gets its own breathing room. |
| 8. CTA Position | Text-link only | Lowest CTA aggression of any GF mail. |
| 9. Subject Line | Symptom-framed | No level label. Symptom-framed. |

---

## 36. Variance Ledger — Preventing Pattern-Matching

GF receives ~45 emails across the lifecycle. Without variance discipline, opens become mechanical and clicks decline after email #2-3. The variance ledger tracks the actual sequence of dimension choices across the GF Welcome arc and cross-level flows to verify compliance.

### Variance Audit — Cross-Level Flows

- **Cart E1–E3:** C → D → H (Problem-Solution → Social Proof First → Minimalist)
- **Checkout E1–E2:** E (Product-First) → H (Minimalist)
- **Browse E1–E3:** F → F → A (Education-First × 2, then Classic for offer). Acceptable.
- **PP-Education E1–E4:** F → F → (suppressed) → D
- **PP-Extended Education Themes 1–5:** F → D → F → B (modified) → F
- **FAQ E1–E6:** C → B → F → C → F → F
- **Replenishment A1–A3, B1–B2, C1–C2:** All E (Product-First). Acceptable because Replenishment is maintenance-mode.
- **Winback A Themes 1–3:** F → C → B (modified)
- **Sunset E1–E2:** H → H. Acceptable — Sunset is the quietest moment.

### Rules Specific to GF

#### Rule GF-V1 — Sub-Group Image Calibration
Within the 9 dimensions, the image choice must avoid silhouetting to a single sub-group. Three-child composite imagery (varied ages, presentations, parent postures).

#### Rule GF-V2 — V16 Variance Override
When dimension 9 (Subject Line Formula) collides with V16, **V16 always wins**. Example: A subject line formula "data point: '49% of kids with autism aren't trained by age 5'" is high-variance but fails V16. Use "almost 1 in 2 kids with nervous system differences aren't trained by age 5" instead.

#### Rule GF-V3 — Migration Anchor Variance
The three Welcome migration anchors (E2, E4, E5) must each describe a DIFFERENT symptom profile. They cannot all be "L1-style" — they must rotate through the symptom space so that Group D finds her match.
- E2 anchor: L1-style ("sits 20 minutes, nothing happens")
- E4 anchor: L2-style ("pees the second her pull-up comes off")
- E5 anchor: L3-style ("doesn't seem to notice when he's wet")
- PP-Level Detection (D14): All 4 buttons presented together.
- PP-Extended Education Theme 4 (D70): Late migration anchor — rotates again.

---

## 37. Component Reuse Budget

| Component Type | Max Uses Across GF Lifecycle | Notes |
|---|---|---|
| Hero sections | Unique per email | Mandatory. No reuse. |
| Body sections | Max 8 across all 45 GF emails | Can be reused but not twice in same email. |
| Three-Family Pattern testimonial | Max 8 across all 45 emails | High-reuse; distinct family story details each time. |
| Lena avatar image | Max 6 across all 45 emails | Brand trust asset but should not appear every mail. |
| Mechanism diagram | Max 6 across all 45 emails | Diagram-heavy for Group C. |
| Product images | Max 20–25 across all 45 emails | Product images repeat more frequently. |
| Migration anchor story links | Max 4 distinct symptom profiles | Six touchpoints, four distinct profiles. |

### Image Variance Rules
- NEVER duplicate the same image within one email.
- Vary image density across emails (1–6 images per email). GF average: 2 images.
- Vary lifestyle vs. product shots.
- Vary parent demographics across Three-Family testimonials.
- NEVER use stock NT happy families.
- NEVER use full-on children's faces for any child under 13.

---

# PART VI — FLOW BEHAVIOR & OPERATIONAL LOGIC (Section 5)

## 38. The Four Questions Per Email

For every email a GF-tagged subscriber is scheduled to receive, this document answers four operational questions:

### 1. CONVERSION GATE — What kind of ask is allowed?
GF's gate is **sub-group-differentiated**. The gate is the *brightest line each email can approach without tripping at least one sub-group's BS detector*.

- Group A tolerates "buy now" because she is hope-heavy (65/35) and label-tolerant.
- Group B does not tolerate any "buy now" that mentions what she's buying *for*.
- Group C tolerates mechanism-dense sales copy but no ASD framing.
- Group D is realism-anchored and needs permission-not-to-buy.
- Group E tolerates discount-first framing because she never committed.

### 2. DEAD-END — What happens if she ignores this?
GF dead-ends are sub-group-differentiated. A Group B non-click is a *permanent GF resident* decision. A Group D non-click at PP-Level Detection is a *missed goldmine moment*. A Group E non-click is the *most likely Sunset outcome*.

### 3. CROSS-FLOW CONTINUITY — What else did she just get, and how must this email feel *distinct* from it?
GF's inbox is uniquely dense because she receives a level-specific Welcome variant *plus* every cross-level flow *plus* the GF-only PP-Level Detection.

### 4. MIGRATION MECHANICS — When does a GF email become an L1/L2/L3 email?
This is the **GF-unique fourth question**. The mechanics depend on the migration wave:
- Welcome-stage story link click (E2/E4/E5)
- Day 14 PP-Level Detection
- PP-Extended Education story link (D22+)
- PP-Support At-Risk E3 soft link (D30+)
- Organic re-engagement

Once migration fires, *every subsequent email re-routes*. **Groups B and C never migrate** — they are permanent GF residents.

---

## 39. Cross-Flow Collision — The Day 14 Inflection

Day 14 is the **most dangerous day in the GF lifecycle** because three to four emails can fire simultaneously:

| Email | Tag Condition | Fires? | Priority |
|-------|---------------|--------|----------|
| **PP-Level Detection** | `purchased=true AND level=gf` | YES | HIGHEST |
| Welcome GF E6 | Welcome GF active, no purchase | YES (non-purchasers only) | Suppressed for purchasers |
| PP-Education D0-21 E3 | `purchased=true` | YES (unless suppressed by PP-Level Detection) | Suppressed for non-migrated GF |
| Replenishment A1 | 1-pair buyer | YES | Suppressed for GF purchasers per §2.5 |

**Operations rule:** For a GF purchaser at Day 14, **only PP-Level Detection fires.** All other Day 14 emails are suppressed. This is non-negotiable per §2.5 + §18.4.

For a GF non-purchaser at Day 14, **only Welcome GF E6 fires.** PP-Level Detection does NOT fire (no purchase).

**The dual-track logic** is what makes GF's D14 the system's largest single conversion lever — it converts at 40–50% migration rate while respecting all sub-group sensitivities (V16 holds for B, mechanism holds for C, re-selection is voluntary for D).

---

## 40. Sub-Group Migration Summary

| Sub-Group | % of GF | Migration Potential | Where She Migrates | What She Stops Receiving After Migration |
|-----------|---------|---------------------|--------------------|------------------------------------------|
| **A — Diagnostic Entrants** | ~25% | HIGH (30%+ over lifecycle) | Welcome E2/E4/E5 anchor → PP-Level Detection D14 → PP-Extended Education D22+ | Welcome GF E3+ or E6/E7/E8 or GF PP-Extended Ed themes |
| **B — Diagnosis-Rejecters** | ~15% | ZERO | Never migrates. Clicks Button 4 or no click. | Nothing — stays GF for life |
| **C — Sensory-Difference** | ~25% | ZERO | Never migrates. Clicks Button 4 or no click. | Nothing — stays GF for life |
| **D — Overwhelmed Non-Selectors** | ~25% | HIGHEST (40–50% at D14) | PP-Level Detection D14 (40–50%) → PP-Extended Ed (5–10%) → PP-Support At-Risk E3 (rare) | Welcome GF E6/E7/E8 + PP-Level Detection + GF PP-Extended Ed themes + GF Winback themes + GF FAQ blocks |
| **E — Cart/Browse** | ~10% | LOW (5–10% organic) | Late organic migration via FAQ narrative prompts, Winback story links | Nothing — most stay GF and Sunset |

**Total migration target: 65–75% of GF over lifecycle, bulk by Day 30. The remaining 25–35% are permanent GF residents (Groups B and C).**

---

## 41. Operational Death Spirals & Peak Moments

### The 5 Death Spirals to Avoid

1. **V16 violation in Welcome E2 / E4** — Group B drops from 4.5 to 2.0 instantly. **Delta: −2.5.**
2. **R1 violation anywhere** — Group B drops 1.0–2.0 per occurrence. **Delta: −1.0 to −2.0 per occurrence.**
3. **Maternal-blame version of "You haven't failed potty training" without Lena voice** — Group B drops 2.0–3.0. **Delta: −2.0 to −3.0.**
4. **"Simple" anywhere in body copy** — All five sub-groups bristle. **Delta: −0.5 to −1.5 across all groups.**
5. **Outcome promises in PP-Education / Replenishment** — **Delta: −1.0 to −2.0.**

### The 5 Peak Moments to Protect

1. **Welcome E2 mechanism reveal** — Group A's tipping point (+2.0). Group C's mechanism-curious moment (+1.5).
2. **Welcome E4 / PP-Mary S. founder story** — Group B's first trust peak (+1.0).
3. **Welcome E5 Mahler quote / mechanism deep** — Group C's peak (+1.0).
4. **D14 PP-Level Detection** — Group D's peak (+6.0 if migrated). **Defend at all costs.**
5. **PP-Mid Check-In E1 reply-to-Lena invitation** — Universal trust peak (+0.5 to +1.0).

---

# PART VII — REFERENCE

## 42. Cross-References to Source Documents

### Section Documents (consolidated into this master)

- **Avatar profile:** `journey-gf-01-avatar.md` §1–10 (sub-groups, trust threshold, hope/realism, decision speed, V16, R1–R6, forbidden phrases, visual calibration, the One Thing)
- **Email sequence:** `journey-gf-02-sequence.md` §2–7 (flow-by-flow email map, sub-group journey variations, suppression rules, migration mechanics, post-migration behavior)
- **Emotional arc & trust meter:** `journey-gf-03-emotional-trust.md` §1–27 (per-email sub-group deltas, peak moments, death spirals, consolidated trust meter)
- **Structural blueprint & variance ledger:** `journey-gf-04-structural-blueprint.md` (9 structural dimensions, variance audit, suppression logic)
- **Flow behavior:** `journey-gf-05-flow-behavior.md` (conversion gates, dead-ends, cross-flow collisions, migration mechanics, operational flags)

### External Sources

- **Strategy macro:** `_notes/strategy-macro.json` flows 1–22 (per-flow structure, themes, timing, copy strategy)
- **Locked profile:** `_notes/locked-profile.json` (Stage 0 reconciliation, anomalies, status, flow_meta + variance_tracker)
- **Brand marketing direction:** `outputs/strategy/giuliano/g3-brand-marketing-direction.md` §2.2, §2.6, §15.5–15.7
- **Giuliano Demands:** `demands/GIULIANO-DEMANDS.md` §1, §1.2 (GF sub-groups), §2.5 (cross-flow suppression), §8.5 (forbidden phrases), §8.6 (most dangerous word "Simple"), §13 (journey stages), §14 V16 (symptom language only), §15.7 (visual calibration), §17 (deliverability + warming + Sunset), §18.4 (PP-Level Detection mechanics)
- **Customer avatar synthesis:** `outputs/synthesis/01-customer-avatar.md` §3.5
- **Email marketing structure skill:** `~/.hermes/skills/email/email-marketing-structure/SKILL.md` (9 dimensions, hero variants, CTA positions, section patterns, component reuse rules)

### Related Level Documents (for comparison)

- `journey-l1-01-avatar.md` through `journey-l1-05-flow-behavior.md` (L1/Sarah segment)
- `journey-l2-01-avatar.md` through `journey-l2-05-flow-behavior.md` (L2/Lisa segment)
- `journey-l3-01-avatar.md` through `journey-l3-05-flow-behavior.md` (L3/Maria segment)

---

## 43. Master Index

**A**
- A — Diagnostic Entrants sub-group: §3, §4, §5, §6, §28, §29, §40
- AIDA argument structure: §33
- Arrived & Welcome (Flow 07): §17

**B**
- B — Diagnosis-Rejecters sub-group: §3, §4, §5, §6, §28, §29, §40
- BCBA compatibility (FAQ E5): §24
- Brand Green #039902: §12, §34
- Browse Abandonment (Flow 04): §16

**C**
- C — Sensory-Difference sub-group: §3, §4, §5, §6, §28, §29, §40
- Cart Abandonment (Flow 02): §16
- Checkout Abandonment (Flow 03): §16
- 70%-confidence floor rule: §4, §9, §20, §25
- Color temperature: §12, §34, §35
- Conversion gate: §38
- Cross-flow continuity: §38
- Cross-flow collision (Day 14): §39

**D**
- D — Overwhelmed Non-Selectors sub-group: §3, §4, §5, §6, §28, §29, §40
- Day 14 inflection: §20, §39
- Dead-end: §38
- Decision speed: §8
- Death spirals: §31, §41

**E**
- E — Cart/Browse without Opt-In sub-group: §3, §4, §5, §6, §28, §29, §40
- Email length: §33, §35
- Email count: §14
- Executive summary: §1
- External sources: §42

**F**
- FAQ/Objection Library (Flow 20): §24
- Flows 01–22 inventory: §14
- Forbidden phrases: §11
- Four questions per email: §38

**G**
- GF Design Canvas: §34
- GF sub-groups at a glance: §3
- GF-Forbidden Phrases: §11
- GF Image Sub-Group Variance Rule: §34

**H**
- Hope/realism: §6, §9

**I**
- Image density: §33, §35
- Image variance rules: §37
- Index: §43
- Interoception: §5, §8, §15, §21

**L**
- Lena voice: §15, §20, §22
- Lifetime journey stages: §9

**M**
- Mahler quote: §15, §21
- Mary S. Story (Flow 10): §18
- Mechanism deep dive (Welcome E5): §15
- Migration anchors: §9, §15, §20, §25, §36
- Migration mechanics: §25, §38, §40
- Migration moments: §9, §20, §25

**N**
- Narrative quotes: §13

**O**
- One-click preference update: §24
- One Thing: §13
- Operational death spirals: §41
- Operational peak moments: §41
- Order Confirmation (Flow 05): §17
- Outlook testing: §34

**P**
- PAS argument structure: §33
- Peak moments: §32, §41
- Permanent GF residents: §3, §25, §40
- PP-Direct Upsell (Flow 08): §18
- PP-Education D0-21 (Flow 11): §19
- PP-Extended Education (Flow 14): §21
- PP-Extended Upsell (Flow 12): §21
- PP-Level Detection (Flow 09): §20
- PP-Mary S. Story (Flow 10): §18
- PP-Mid Check-In (Flow 13): §21
- PP-Support At-Risk (Flow 15): §22

**Q**
- Quick-Reference Decision Card: §2

**R**
- R1–R6 Calibration Rules: §7, §34
- Replenishment (Flow 16): §22
- Review Request (Flow 17): §22
- R1 violation: §31

**S**
- Section count: §33, §35
- Section order: §33, §35
- Shipping & OFD (Flow 06): §17
- "Simple" forbidden word: §11
- Sign-off progression: §15
- SPARK 49% statistic: §15, §31
- Subject line formula: §33, §35
- Sunset (Flow 22): §24
- Suppression rules: §26

**T**
- Three-Family Pattern: §15, §17, §21
- Trust meter: §27, §30
- Trust threshold: §7

**V**
- V16 Rule: §7, §11, §34
- Variance audit: §35, §36
- Variance Ledger: §36
- Velocity: §8
- Visual calibration: §12
- Visual rhythm: §33, §35

**W**
- Welcome GF (Flow 01): §15
- Winback Path A (Flow 18): §23
- Winback Path B (Flow 19): §23

---

*End of GF Master Journey Document. This master consolidates five section documents (~45,000 words total of source material) into one comprehensive reference covering avatar identity, email sequence, emotional arc, structural blueprint, and flow behavior. GF is the largest segment in the BrightKidCo universe, the most heterogeneous, and the only level that owns a migration touchpoint. The structural discipline documented here — V16, R1–R6, the 9-dimension variance ledger, sub-group-differentiated conversion gates, the Day 14 cross-flow collision handling, and the 65–75% migration target — is what allows one tag (`avatar_general`) to safely reach five operationally distinct sub-mothers across one of the densest customer lifecycles in the system.*

*All Stage 1 subagents, Stage 2 copywriters, and lifecycle architects should reference this master as the single source of truth for GF-tagged subscriber handling.*