# BrightKidCo — Segmentation Blueprint

> **How the avatar system works end-to-end: Every avatar, every routing condition, every edge case. From pop-up to post-purchase.**
> Generated: May 28, 2026
> Primary Source Hierarchy: GIULIANO-DEMANDS.md → Synthesis Docs → MASTER Compendiums

---

## TABLE OF CONTENTS

1. [Avatar Definitions — All 4 Levels](#1-avatar-definitions--all-4-levels)
2. [Segmentation Logic End-to-End](#2-segmentation-logic-end-to-end)
3. [Identification Methods](#3-identification-methods)
4. [Unknown Subscriber Path](#4-unknown-subscriber-path)
5. [Post-Purchase Re-Segmentation](#5-post-purchase-re-segmentation)
6. [Cross-Level Flows & Calibration Rules](#6-cross-level-flows--calibration-rules)
7. [Edge Cases & Exception Handling](#7-edge-cases--exception-handling)

---

## 1. AVATAR DEFINITIONS — ALL 4 LEVELS

BrightKidCo segments its audience into exactly **4 avatar levels** — no more, no fewer. Each level represents a distinct parent profile defined by their child's support needs, emotional state, decision speed, and preferred communication style. (Source: GIULIANO-DEMANDS.md §1)

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                    THE FOUR AVATAR LEVELS AT A GLANCE                         ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  LEVEL 1 — SARAH          LEVEL 2 — LISA           LEVEL 3 — MARIA          ║
║  ┌────────────────────┐   ┌────────────────────┐   ┌────────────────────┐   ║
║  │ ~35% of audience   │   │ ~40% 🏆 LARGEST    │   │ ~25% of audience   │   ║
║  │ Verbal, 3-5 yrs    │   │ Mixed, 5-7 yrs      │   │ Non-verbal, 6-10+ │   ║
║  │ Mild ASD            │   │ Moderate ASD       │   │ High support       │   ║
║  │ Hope: 70/30         │   │ Hope: 40/60        │   │ Hope: 20/80        │   ║
║  │ Decision: 2-7 days  │   │ Decision: 7-21 days│   │ Decision: 14-30d   │   ║
║  │ Tag: avatar_level1  │   │ Tag: avatar_level2 │   │ Tag: avatar_level3 │   ║
║  │ Pre-K driven        │   │ BCBA context       │   │ Dignity-first      │   ║
║  │ Urgency OK          │   │ Low urgency        │   │ ZERO urgency       │   ║
║  │ Conversion: 15-25%  │   │ Conversion: 8-15%  │   │ Conversion: 4-7%   │   ║
║  └────────────────────┘   └────────────────────┘   └────────────────────┘   ║
║                                                                              ║
║                ┌────────────────────────────────────────┐                    ║
║                │  GENERAL FALLBACK (~50% real volume)    │                    ║
║                │  Undeclared level, enters via pop-up   │                    ║
║                │  button 4 or checkout/referral          │                    ║
║                │  5 sub-groups with distinct paths      │                    ║
║                │  Symptom language ONLY in all copy     │                    ║
║                │  Tag: avatar_general                   │                    ║
║                └────────────────────────────────────────┘                    ║
║                                                                              ║
║  RULE: Exactly 4 levels. No emotional dimension tags in Phase 1.            ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```
(Source: GIULIANO-DEMANDS.md §1; 01-customer-avatar.md §3; MASTER-DIAGNOSIS-COMPENDIUM.md §1.3)

---

### 1.1 Level 1 — Sarah (~35% of Known Audience)

**Klaviyo Tag:** `avatar_level1`
**Pop-Up Button Text:** "Talks about potty but won't actually do it"
**Signature Pain Statement:** "He gets it, but he doesn't get it." (Source: MASTER-INGESTION-COMPENDIUM.md §2.2)

#### Demographic Markers

| Attribute | Value | Source |
|-----------|-------|--------|
| Parent Age | 28-40 | 01-customer-avatar.md §3.2 |
| Child Age | 3-5 years | GIULIANO-DEMANDS.md §1 |
| Child Verbal Ability | Verbal, conversational | MASTER-DIAGNOSIS-COMPENDIUM.md §1.3 |
| Support Needs | Low — mainstream Pre-K or Kindergarten | 01-customer-avatar.md §3.2 |
| Employment | 70% working | MASTER-DIAGNOSIS-COMPENDIUM.md §1.1 |
| Income | Middle to upper-middle | 01-customer-avatar.md §3.2 |
| Medicaid Usage | ~10-15% | GIULIANO-DEMANDS.md §1 |
| Phase Concentration | Phase 2 — First Real Attempt (50%) | MASTER-DIAGNOSIS-COMPENDIUM.md §1.3 |

#### Psychographic Markers

| Dimension | Value | Source |
|-----------|-------|--------|
| Hope/Realism Ratio | 70/30 — Hope-intact | GIULIANO-DEMANDS.md §1 |
| Decision Speed | 2-7 days (FASTEST) | GIULIANO-DEMANDS.md §1 |
| Conversion Rate | 15-25% (BEST) | 01-customer-avatar.md §3.2 |
| Urgency Allowed | YES — Pre-K deadline driven | MASTER-DIAGNOSIS-COMPENDIUM.md §1.3 |
| Most Dangerous Word | "Easy" | GIULIANO-DEMANDS.md §8.6 |
| Primary Emotional Driver | Deadline Pressure (PRIMARY), Social Pressure (PRIMARY) | MASTER-DIAGNOSIS-COMPENDIUM.md §1.4 |
| Core Pain Categories | Timing problems, inconsistent performance, verbal refusal, potty interest without action | MASTER-INGESTION-COMPENDIUM.md §2.2 |
| Top Objection | Pre-K deadline panic | 15-level-messaging-matrix.md §2.8 |

#### Behavioral Markers

- Searches: "potty training 3 year old not interested" → "why doesn't my child feel wet" → BKC
- Has tried 1-3 methods (Oh Crap, sticker charts, timer sits) — NOT "everything"
- Concerned about Pre-K readiness deadline
- Experiences "almost trained" cycles — a week of success followed by regression
- Engages with social comparison — worries about other kids her child's age
- Decision process: 2-7 days, fast and enthusiastic once mechanism clicks
(Source: MASTER-INGESTION-COMPENDIUM.md §2.2; 21-customer-journey-map.md §4)

#### Forbidden Language (Level 1)

| Phrase | Reason | Source |
|--------|--------|--------|
| "Easy" / "Simple" | She believes it should be easy | GIULIANO-DEMANDS.md §8.6 |
| "Severe autism" | Her child is "mild" — she disengages | GIULIANO-DEMANDS.md §8.5 |
| "Non-verbal kids need..." | Her child is verbal — doesn't relate | GIULIANO-DEMANDS.md §8.5 |
| "ADHD, Speech Delay" | Overstates her child's challenges | MASTER-INGESTION-COMPENDIUM.md §6.3 |
| "Adult diapers" | Trauma-sensitivity — child is 3-5 | GIULIANO-DEMANDS.md §8.5 |
| "Forever in pull-ups" | Creates fear, not motivation | GIULIANO-DEMANDS.md §8.5 |
| "BCBA protocol" | Often has no BCBA — irrelevant | 15-level-messaging-matrix.md §2.9 |
| "Years of failed attempts" | She has 1-3 attempts, not years | 15-level-messaging-matrix.md §2.9 |

---

### 1.2 Level 2 — Lisa (~40% — LARGEST Segment)

**Klaviyo Tag:** `avatar_level2`
**Pop-Up Button Text:** "Sensory issues, tried many methods"
**Signature Pain Statement:** "I've tried everything from the BCBA's protocol to OT sensory work to social stories. We're stuck." (Source: MASTER-INGESTION-COMPENDIUM.md §2.3)

#### Demographic Markers

| Attribute | Value | Source |
|-----------|-------|--------|
| Parent Age | 30-42 | 01-customer-avatar.md §3.3 |
| Child Age | 5-7 years | GIULIANO-DEMANDS.md §1 |
| Child Verbal Ability | Mixed verbal — some language, limited for bodily needs | MASTER-DIAGNOSIS-COMPENDIUM.md §1.3 |
| Support Needs | Moderate — has IEP, BCBA, often in special ed classroom | 01-customer-avatar.md §3.3 |
| Employment | 45% working / 45% SAHM | MASTER-DIAGNOSIS-COMPENDIUM.md §1.1 |
| Medicaid Usage | ~25% | GIULIANO-DEMANDS.md §1 |
| Therapy Hours | ABA 20h/wk + OT + SLP typical | 15-level-messaging-matrix.md §3.1 |
| Phase Concentration | Phase 3 — Method Cycling (~55%) | MASTER-DIAGNOSIS-COMPENDIUM.md §1.3 |

#### Psychographic Markers

| Dimension | Value | Source |
|-----------|-------|--------|
| Hope/Realism Ratio | 40/60 — Cracked hope | GIULIANO-DEMANDS.md §1 |
| Decision Speed | 7-21 days | GIULIANO-DEMANDS.md §1 |
| Conversion Rate | 8-15% | 01-customer-avatar.md §3.3 |
| Urgency Allowed | Very little — event-driven only | MASTER-DIAGNOSIS-COMPENDIUM.md §1.3 |
| Most Dangerous Word | "Quick" | GIULIANO-DEMANDS.md §8.6 |
| Primary Emotional Driver | Overwhelm (PRIMARY) | MASTER-DIAGNOSIS-COMPENDIUM.md §1.4 |
| BCBA Loyalty | HIGH — highest-trust authority figure | 01-customer-avatar.md §3.3 |
| Top Objection | "I've tried everything. Why would this be different?" | GIULIANO-DEMANDS.md §1 |
| Sunk Cost | $50k+ on therapy programs | GIULIANO-DEMANDS.md §23 |

#### Behavioral Markers

- Searches: "autism potty training 5 year old not interested" → "tried everything potty training" → "interoception potty training"
- Has tried 40+ methods — method cycling trauma
- Trusts BCBA/OT professionals above all other sources
- Shows contextual success/failure: trained at school (prompt-dependent), hopeless at home
- Experiences withholding & physical consequences — 4+ days without bowel movements
- Bathroom is sensory minefield (flushing sound, bright lights)
- Decision process: 7-21 days, deep research, mechanism scrutiny
(Source: MASTER-INGESTION-COMPENDIUM.md §2.3; 21-customer-journey-map.md §4)

#### The 6-Element L2 Mail Formula

Every Level 2 email MUST contain ALL 6 elements or conversion breaks:

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                 THE 6-ELEMENT FORMULA — LEVEL 2 EMAILS                        ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  ① REAL Symptom Recognition — Names 3+ specific failed methods              ║
║  ② Mechanism Specificity — Interoception explanation, not vague promises    ║
║  ③ BCBA/OT Acknowledgment — Respects 4-6 year therapy relationship          ║
║  ④ Realistic Timelines — "8-12 weeks, some longer"                          ║
║  ⑤ 60-Day Guarantee — "Try it for 60 days. By your judgment."               ║
║  ⑥ Permission-Not-to-Buy — "If this isn't the day, that's okay."             ║
║                                                                              ║
║  VIOLATION: Missing ① → bounce. Missing ② → no trust. Missing ③ → insult.  ║
║  Missing ④ → skeptic triggers. Missing ⑤ → no safety. Missing ⑥ → pressure.║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```
(Source: GIULIANO-DEMANDS.md §23; 01-customer-avatar.md §3.3; MASTER-DIAGNOSIS-COMPENDIUM.md §6.1)

#### Forbidden Language (Level 2)

| Phrase | Reason | Source |
|--------|--------|--------|
| "Quick" | She's been trying for years | GIULIANO-DEMANDS.md §8.6 |
| "Easy" | Trigger skepticism | GIULIANO-DEMANDS.md §8.5 |
| "Pre-K is coming" | Too Level 1 — school adapted via IEP | GIULIANO-DEMANDS.md §8.5 |
| "Just like other kids" | She's accepted difference | GIULIANO-DEMANDS.md §8.5 |
| "We can train in X weeks" | Immediate skepticism | GIULIANO-DEMANDS.md §8.5 |
| Aggressive BCBA criticism | 4-6 year relationship | GIULIANO-DEMANDS.md §23 |
| "Don't give up!" | Patronizing — she hasn't given up | 15-level-messaging-matrix.md §3.9 |

---

### 1.3 Level 3 — Maria (~25% of Known Audience)

**Klaviyo Tag:** `avatar_level3`
**Pop-Up Button Text:** "Non-verbal or high support needs"
**Signature Pain Statement:** "He's never shown a single sign of feeling wet or dirty." (Source: MASTER-INGESTION-COMPENDIUM.md §2.4)

#### Demographic Markers

| Attribute | Value | Source |
|-----------|-------|--------|
| Parent Age | 32-48 | 01-customer-avatar.md §3.4 |
| Child Age | 6-10+ years | GIULIANO-DEMANDS.md §1 |
| Child Verbal Ability | Non-verbal or minimally verbal (<30 words) | MASTER-DIAGNOSIS-COMPENDIUM.md §1.3 |
| Support Needs | High — 70% special needs school, 95% IEP | 01-customer-avatar.md §3.4 |
| Employment | 30% working / 60% SAHM | MASTER-DIAGNOSIS-COMPENDIUM.md §1.1 |
| Medicaid Usage | ~40% | GIULIANO-DEMANDS.md §25 |
| SPD Prevalence | ~98% | MASTER-DIAGNOSIS-COMPENDIUM.md §1.3 |
| Phase Concentration | Phase 4 — Resignation (~55%) | MASTER-DIAGNOSIS-COMPENDIUM.md §1.3 |

#### Psychographic Markers

| Dimension | Value | Source |
|-----------|-------|--------|
| Hope/Realism Ratio | 20/80 — Deep realism, fragile hope | GIULIANO-DEMANDS.md §1 |
| Decision Speed | 14-30+ days | GIULIANO-DEMANDS.md §1 |
| Conversion Rate | 4-7% (but HIGHEST LTV after purchase) | 01-customer-avatar.md §3.4 |
| Urgency Allowed | NEVER — ZERO urgency | MASTER-DIAGNOSIS-COMPENDIUM.md §1.3 |
| Most Dangerous Word | "Fix" / "Cure" | GIULIANO-DEMANDS.md §8.6 |
| Primary Emotional Driver | Overwhelm (PRIMARY) | MASTER-DIAGNOSIS-COMPENDIUM.md §1.4 |
| Top Objection | "What if I get my hopes up again?" | GIULIANO-DEMANDS.md §1 |
| Adult Diaper Transition | Deepest emotional trigger | MASTER-DIAGNOSIS-COMPENDIUM.md §1.3 |

#### The Adult Diaper Transition Chain

```
Status Quo (pull-ups)
       │
       ▼
Inaction Cost (continued expense, growing child)
       │
       ▼
Escalation (bigger sizes → size 7 → adult diapers)
       │
       ▼
Identity Crisis ("my child will be in diapers forever")
       │
       ▼
Search Progression:
  "age 4 pull-ups"
    → "age 6 still in diapers"
    → "age 8 severe autism pull-ups"
    → "adult diapers age 9" ← IDENTITY COLLAPSE
```
(Source: MASTER-DIAGNOSIS-COMPENDIUM.md §6.6; 01-customer-avatar.md §3.4)

#### Behavioral Markers

- Searches: "8 year old still in diapers autism" → "adult diapers for autistic child" → "BrightKidCo review"
- Has been on this journey 6+ years — longest of all levels
- 4x under-sampled in source comments — ALL L3 insights treated with extra care
- Dignity-first ethos: "Whatever progress means for your family is enough"
- Deeply wounded by years of failed hopes — immune to standard sales tactics
- Buys 1 Pair ($34.99) as lowest-risk entry — never the bundle outright
- Adult diaper transition = identity crisis, not logistics problem
(Source: MASTER-INGESTION-COMPENDIUM.md §2.4; 21-customer-journey-map.md §4)

#### L3 Offer Rules (Non-Negotiable)

- NEVER math reframe ("less than a coffee a day")
- NEVER urgency
- 1 Pair ($34.99) is primary L3 offer — Medicaid sensitivity
- Never prominently mention shipping
- Never name shipping carrier
(Source: GIULIANO-DEMANDS.md §25; MASTER-DIAGNOSIS-COMPENDIUM.md §4.5)

#### Forbidden Language (Level 3)

| Phrase | Reason | Source |
|--------|--------|--------|
| "Fix" / "Cure" | Autism is identity, not disease | GIULIANO-DEMANDS.md §8.6 |
| "Don't give up!" | Patronizing | GIULIANO-DEMANDS.md §8.5 |
| "Your child WILL train" | Promise she's heard broken 40x | GIULIANO-DEMANDS.md §8.5 |
| "Independence!" without anchor | L3 reality is interdependence | GIULIANO-DEMANDS.md §8.5 |
| "Save him from diapers" | Grief as sales tool | GIULIANO-DEMANDS.md §25 |
| "Free her from pull-ups" | Assumes that's a universal goal | MASTER-INGESTION-COMPENDIUM.md §6.3 |
| Grief as sales tool | Absolutely forbidden | GIULIANO-DEMANDS.md §25 |
| Exclamation marks | All marketing language rejected | GIULIANO-DEMANDS.md §8.4 |

---

### 1.4 General Fallback (GF) — ~50% of Real Volume

**Klaviyo Tag:** `avatar_general`
**Pop-Up Button Text:** "Still figuring out what's going on"
**Rule:** NF levels in button text. Symptom-based language ONLY. (Source: GIULIANO-DEMANDS.md §1.1)

GF is NOT a single audience — it contains **5 distinct sub-groups** that require different communication strategies.

#### GF Sub-Group Definitions

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                    GENERAL FALLBACK — 5 SUB-GROUPS                            ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  GROUP A: DIAGNOSTIC ENTRANTS (~25% of GF)                                   ║
║  ┌──────────────────────────────────────────────────────────────────────┐   ║
║  │  Pre-identity, education-first. Child not yet diagnosed. They're     │   ║
║  │  here because something is WRONG — they just don't have a label.     │   ║
║  │  Strategy: Educate first, migrate post-diagnosis.                    │   ║
║  │  Migration potential: HIGH                                           │   ║
║  └──────────────────────────────────────────────────────────────────────┘   ║
║                                                                              ║
║  GROUP B: DIAGNOSIS-REJECTERS (~15% of GF)                                  ║
║  ┌──────────────────────────────────────────────────────────────────────┐   ║
║  │  Anti-identity. They know about the diagnosis but reject it.         │   ║
║  │  Symptom language ONLY. Never "autism", "ASD", "Level". Use         │   ║
║  │  "nervous system differences" as umbrella.                           │   ║
║  │  Strategy: Convert IN GF. NEVER try to migrate.                      │   ║
║  │  Migration potential: LOW / FORBIDDEN                                │   ║
║  └──────────────────────────────────────────────────────────────────────┘   ║
║                                                                              ║
║  GROUP C: SENSORY-DIFFERENCE (~25% of GF)                                   ║
║  ┌──────────────────────────────────────────────────────────────────────┐   ║
║  │  SPD/ADHD profile, no ASD diagnosis. Science-driven, mechanism-      │   ║
║  │  oriented. They respond to interoception content without autism      │   ║
║  │  framing.                                                             │   ║
║  │  Strategy: Convert IN GF. Mechanism-oriented, no ASD language.       │   ║
║  │  Migration potential: LOW                                            │   ║
║  └──────────────────────────────────────────────────────────────────────┘   ║
║                                                                              ║
║  GROUP D: OVERWHELMED NON-SELECTORS (~25% of GF)                           ║
║  ┌──────────────────────────────────────────────────────────────────────┐   ║
║  │  Their child HAS ASD but they clicked the pop-up away without        │   ║
║  │  selecting a button. They were overwhelmed by the choices.           │   ║
║  │  Strategy: Goldmine — highest migration potential (40-50%).          │   ║
║  │  Migration potential: HIGHEST                                        │   ║
║  └──────────────────────────────────────────────────────────────────────┘   ║
║                                                                              ║
║  GROUP E: CART/BROWSE WITHOUT OPT-IN (~10% of GF)                          ║
║  ┌──────────────────────────────────────────────────────────────────────┐   ║
║  │  Signed up via checkout opt-in or referral. No pop-up interaction.   │   ║
║  │  Unknown profile — may match any level.                              │   ║
║  │  Strategy: Recovery framing. Direct path to GF Welcome.              │   ║
║  │  Migration: PP-Level Detection at Day 14 post-purchase.              │   ║
║  └──────────────────────────────────────────────────────────────────────┘   ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```
(Source: GIULIANO-DEMANDS.md §1.2; MASTER-DIAGNOSIS-COMPENDIUM.md §1.3)

#### GF Segmentation Rules

| Rule | Detail | Source |
|------|--------|--------|
| Symptom language ONLY | Never "autism", "ASD", "Level 1/2/3" in body copy | GIULIANO-DEMANDS.md §1.1 |
| Group B: NEVER migrate | Convert IN GF. Symptoms-only forever. | GIULIANO-DEMANDS.md §1.2 (V16) |
| Group D: Highest priority | 40-50% migration potential — design for conversion | MASTER-DIAGNOSIS-COMPENDIUM.md §1.3 |
| Uncertainty default | When in doubt, route to GF | GIULIANO-DEMANDS.md §12.5 |
| Cross-level flows use GF | GF language always — the "Whether...Or...If..." bridge | GIULIANO-DEMANDS.md §18.1 (R3) |

#### GF Demographic Overview

| Attribute | Value | Source |
|-----------|-------|--------|
| Child Age | All ages (variable) | 01-customer-avatar.md §3.5 |
| Verbal Ability | Variable — unrecognized | 01-customer-avatar.md §3.5 |
| Support Needs | Unknown | 01-customer-avatar.md §3.5 |
| Hope/Realism Ratio | 50/50 | GIULIANO-DEMANDS.md §1 |
| Decision Speed | Variable | GIULIANO-DEMANDS.md §1 |
| Conversion Rate | 7-10% | 01-customer-avatar.md §3.5 |

---

## 2. SEGMENTATION LOGIC END-TO-END

The segmentation engine operates as a 6-stage pipeline: **Popup → Tag → List → Segment → Flow → Re-Segment**.

### 2.1 The Complete Pipeline

```
╔══════════════════════════════════════════════════════════════════════════════╗
║              SEGMENTATION PIPELINE — POPUP TO RE-SEGMENT                      ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  ┌────────────────────────────────────────────────────────────────────┐      ║
║  │  STAGE 1: POPUP                                                      │      ║
║  │                                                                       │      ║
║  │  ┌──────────────────────────────────────────────────────────────┐    │      ║
║  │  │  Visitor arrives                                              │    │      ║
║  │  │                                                               │    │      ║
║  │  │  10-15 sec or exit-intent → popup appears                     │    │      ║
║  │  │                                                               │    │      ║
║  │  │  4 symptom-based buttons (NO level labels):                  │    │      ║
║  │  │  ┌─────────────────────────────────────────────────────────┐ │    │      ║
║  │  │  │ [Talks about potty but won't actually do it]            │ │    │      ║
║  │  │  │ [Sensory issues, tried many methods]                    │ │    │      ║
║  │  │  │ [Non-verbal or high support needs]                      │ │    │      ║
║  │  │  │ [Still figuring out what's going on]                    │ │    │      ║
║  │  │  └─────────────────────────────────────────────────────────┘ │    │      ║
║  │  └──────────────────────────────────────────────────────────────┘    │      ║
║  └────────────────────────────────┬───────────────────────────────────┘      ║
║                                   │                                           ║
║                                   ▼                                           ║
║  ┌────────────────────────────────────────────────────────────────────┐      ║
║  │  STAGE 2: TAG ASSIGNMENT                                            │      ║
║  │                                                                       │      ║
║  │  Button 1 ──→ avatar_level1 tag applied to profile                   │      ║
║  │  Button 2 ──→ avatar_level2 tag applied to profile                   │      ║
║  │  Button 3 ──→ avatar_level3 tag applied to profile                   │      ║
║  │  Button 4 ──→ avatar_general tag applied to profile                  │      ║
║  │  No popup   ──→ No tag → default avatar_general                      │      ║
║  │                                                                       │      ║
║  │  ✓ Secondary: signup_source property set (popup/checkout/referral)   │      ║
║  │  ✓ Optional: child_age property collected                            │      ║
║  └────────────────────────────────┬───────────────────────────────────┘      ║
║                                   │                                           ║
║                                   ▼                                           ║
║  ┌────────────────────────────────────────────────────────────────────┐      ║
║  │  STAGE 3: LIST ASSIGNMENT                                           │      ║
║  │                                                                       │      ║
║  │  ALL subscribers go to ONE Master Subscriber List                   │      ║
║  │  NO separate lists per level — segmentation via TAGS only           │      ║
║  │  Suppression via Master Suppression Segment                          │      ║
║  │                                                                       │      ║
║  │  ┌────────────────────────────────────────────────────────────┐     │      ║
║  │  │  MASTER SUBSCRIBER LIST                                       │     │      ║
║  │  │  ┌──────────────────────────────────────────────────────┐    │     │      ║
║  │  │  │  Proiles tagged: avatar_level1                        │    │     │      ║
║  │  │  │                  avatar_level2                        │    │     │      ║
║  │  │  │                  avatar_level3                        │    │     │      ║
║  │  │  │                  avatar_general                       │    │     │      ║
║  │  │  └──────────────────────────────────────────────────────┘    │     │      ║
║  │  │                                                               │     │      ║
║  │  │  → Segmentation via tags + segments, NOT separate lists      │     │      ║
║  │  │  → Suppression via standard unsubscribe/bounce tracking      │     │      ║
║  │  └────────────────────────────────────────────────────────────┘     │      ║
║  └────────────────────────────────┬───────────────────────────────────┘      ║
║                                   │                                           ║
║                                   ▼                                           ║
║  ┌────────────────────────────────────────────────────────────────────┐      ║
║  │  STAGE 4: SEGMENT ROUTING                                           │      ║
║  │                                                                       │      ║
║  │  Flow entry segments:                                                 │      ║
║  │                                                                       │      ║
║  │  ┌──────────────┬──────────────────┬─────────────────────────────┐  │      ║
║  │  │ FLOW          │ ENTRY CONDITION  │ TAG / PROPERTY MATCH       │  │      ║
║  │  ├──────────────┼──────────────────┼─────────────────────────────┤  │      ║
║  │  │ Welcome L1   │ has tag          │ avatar_level1               │  │      ║
║  │  │ Welcome L2   │ has tag          │ avatar_level2               │  │      ║
║  │  │ Welcome L3   │ has tag          │ avatar_level3               │  │      ║
║  │  │ Welcome GF   │ has tag          │ avatar_general              │  │      ║
║  │  │ Welcome GF   │ default          │ no avatar_level tag present │  │      ║
║  │  └──────────────┴──────────────────┴─────────────────────────────┘  │      ║
║  └────────────────────────────────┬───────────────────────────────────┘      ║
║                                   │                                           ║
║                                   ▼                                           ║
║  ┌────────────────────────────────────────────────────────────────────┐      ║
║  │  STAGE 5: FLOW EXECUTION                                            │      ║
║  │                                                                       │      ║
║  │  Each subscriber enters their level-specific Welcome Flow:           │      ║
║  │  8 emails × 21 days                                                  │      ║
║  │                                                                       │      ║
║  │  ┌─────────────────┬───────────────────────────────────────┐        │      ║
║  │  │  Welcome L1     │ 70/30 hope, Pre-K urgency, mechanism  │        │      ║
║  │  │  Welcome L2     │ 40/60 hope, deep mech, 6 elements     │        │      ║
║  │  │  Welcome L3     │ 20/80 hope, dignity-first, zero urg.  │        │      ║
║  │  │  Welcome GF     │ 50/50 hope, cross-level R1-R6         │        │      ║
║  │  └─────────────────┴───────────────────────────────────────┘        │      ║
║  └────────────────────────────────┬───────────────────────────────────┘      ║
║                                   │                                           ║
║                                   ▼                                           ║
║  ┌────────────────────────────────────────────────────────────────────┐      ║
║  │  STAGE 6: RE-SEGMENTATION                                           │      ║
║  │                                                                       │      ║
║  │  Post-purchase re-segmentation triggers:                              │      ║
║  │  ┌──────────────────────────────────────────────────────────────┐   │      ║
║  │  │  • PP-Level Detection (Day 14 post-purchase, GF only)        │   │      ║
║  │  │  • Purchase signal inference (bundle size → level hint)      │   │      ║
║  │  │  • Behavioral re-tagging (engagement → behavioral tags)      │   │      ║
║  │  │  • WINBACK A triggers: 90d inactive (buyers)                │   │      ║
║  │  │  • WINBACK B triggers: 60d inactive (non-buyers)            │   │      ║
║  │  │  • SUNSET triggers: 120d unengaged                          │   │      ║
║  │  └──────────────────────────────────────────────────────────────┘   │      ║
║  │                                                                       │      ║
║  │  SUPPRESSION CHAIN CONTROLS FLOW OVERRIDE:                          │      ║
║  │  Sunset > Winback > PP-Level Detection > Cart > All Other            │      ║
║  └────────────────────────────────────────────────────────────────────┘      ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```
(Source: GIULIANO-DEMANDS.md §1.1, §2.5, §10, §18; 12-klaviyo-implementation-guide.md §4, §6, §7)

### 2.2 Full Subscriber Journey Decision Tree

```
                          SUBSCRIBER ENTRY
                               │
                    ┌──────────┴──────────┐
                    │                     │
              ┌─────┴─────┐        ┌──────┴──────┐
              │ POPUP SELF-ID        │ CHECKOUT /     │
              │ (80%+ of volume)     │ REFERRAL        │
              └─────┬─────┘        │ (~20% of vol)    │
                    │               └──────┬──────┘
         ┌──────────┼──────────┐           │
         │          │          │           │
         ▼          ▼          ▼           ▼
   ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌──────────────┐
   │ L1 Tag  │ │ L2 Tag  │ │ L3 Tag  │ │ No Tag       │
   └────┬────┘ └────┬────┘ └────┬────┘ │ (avatar_gen)  │
        │           │           │       └──────┬───────┘
        ▼           ▼           ▼              ▼
   ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌──────────────┐
   │ WELCOME  │ │ WELCOME  │ │ WELCOME  │ │ WELCOME GF   │
   │ L1 (8)   │ │ L2 (8)   │ │ L3 (8)   │ │ (8 emails)   │
   └────┬────┘ └────┬────┘ └────┬────┘ └──────┬───────┘
        │           │           │              │
        └───────────┼───────────┼──────────────┘
                    │           │
                    ▼           ▼
           ┌───────────────┐   ┌───────────────────┐
           │ PURCHASED     │   │ NO PURCHASE        │
           └───────┬───────┘   └─────────┬─────────┘
                   │                     │
                   ▼                     ▼
     ┌─────────────────────┐   ┌─────────────────────┐
     │ ORDER CONFIRM (1)   │   │ CART/CHECKOUT/BROWSE │
     │ SHIPPING (1)        │   │ ABANDONMENT RECOVERY │
     │ OUT DELIVERY (1)    │   │ 3+2+3 emails         │
     │ ARRIVED & WELC (1)  │   └──────────┬──────────┘
     └──────────┬──────────┘              │
                │                         ▼
                ▼                  ┌───────────────┐
     ┌────────────────────┐        │ WELCOME       │
     │ PP-DIRECT UPSELL   │        │ COMPLETED     │
     │ PP-MARY S. STORY   │        │ NO PURCHASE   │
     │ PP-EDUCATION D0-21 │        └───────┬───────┘
     └──────────┬─────────┘                │
                │                          ▼
                ▼                   ┌──────────────────┐
     ┌────────────────────┐        │ 60d INACTIVE     │
     │ PP-LEVEL DETECTION │        │ → WINBACK B      │
     │ D14 — GF ONLY      │        │ (3×4=12)         │
     │ → 4 re-select      │        └──────────────────┘
     │   buttons          │
     └──────────┬─────────┘
                │
     ┌──────────┴──────────┐
     │                     │
     ▼                     ▼
┌────────────┐    ┌──────────────────┐
│ LEVEL TAG  │    │ NO LEVEL TAG     │
│ ASSIGNED    │    │ REMAINS GF       │
│ → Lvl flows │    │ → Cross-level PP  │
└────────────┘    └──────────────────┘

        POST-PURCHASE CONTINUED:
        ┌──────────────────────────────────┐
        │ PP-EDUCATION D0-21 (4)           │
        │ PP-EXTENDED UPSELL (3)           │
        │ PP-MID CHECK-IN (3)              │
        │ PP-EXTENDED EDUCATION (5×4=20)★  │
        │ REPLENISH A/B/C (7)              │
        │ REVIEW REQUEST (2)               │
        └──────────────┬───────────────────┘
                       │
            ┌──────────┴──────────┐
            ▼                     ▼
    ┌──────────────┐     ┌──────────────┐
    │ 90d INACTIVE  │     │ ENGAGED      │
    │ → WINBACK A   │     │ → CONTINUE   │
    │ (3×4=12)★    │     │   NURTURE    │
    └──────┬───────┘     └──────────────┘
           │
           ▼
    ┌──────────────┐
    │ 120d UNENG.  │
    │ → SUNSET (2) │
    │ → SUPPRESSED │
    └──────────────┘

    LEGEND: ★ = Level-specific (4× copy)
            All other flows: Cross-level (1 copy + R1-R6)
```
(Source: GIULIANO-DEMANDS.md §2.1-2.5; 07-email-sequence-framework.md §2-3; 12-klaviyo-implementation-guide.md §8)

### 2.3 Tag Taxonomy — 15 Tags Across 3 Categories

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                      COMPLETE TAG TAXONOMY (15 TAGS)                          ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  AVATAR TAGS (4)          BEHAVIORAL TAGS (6)         PURCHASE TAGS (5)     ║
║  ┌──────────────────────┐ ┌──────────────────────┐  ┌──────────────────────┐ ║
║  │ avatar_level1        │ │ welcome_completed    │  │ buyer_1pair          │ ║
║  │ avatar_level2        │ │ welcome_completed_   │  │ buyer_3plus3         │ ║
║  │ avatar_level3        │ │   no_purchase        │  │ buyer_5plus5         │ ║
║  │ avatar_general       │ │ post_purchase_active │  │ repeat_buyer         │ ║
║  └──────────────────────┘ │ at_risk_no_open      │  │ vip_buyer            │ ║
║                           │ inactive_60_days     │  └──────────────────────┘ ║
║                           │ inactive_120_days    │                           ║
║                           └──────────────────────┘                           ║
║                                                                              ║
║  TAG INTERACTION MATRIX:                                                     ║
║  ───────────────────────                                                      ║
║  avatar_levelX + welcome_completed   → Level-specific PP flows              ║
║  avatar_general + welcome_completed  → Cross-level PP flows                 ║
║  avatar_levelX + inactive_60_days    → Winback A (still level-specific)     ║
║  avatar_general + inactive_60_days   → Winback A (cross-level GF content)   ║
║  buyer_[X] + avatar_levelX          → Avatar = content; Transaction = timing║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```
(Source: 12-klaviyo-implementation-guide.md §6; GIULIANO-DEMANDS.md §16.2)

#### Avatar Tag Routing Matrix

| Tag | Welcome Flow | Recovery Flows | PP Education | PP-Ext Ed | Winback | FAQ Lib |
|-----|:-----------:|:--------------:|:------------:|:---------:|:-------:|:-------:|
| `avatar_level1` | L1 variant (8) | Cross-level | Cross-level | L1 variant | L1 variant | Cross-level |
| `avatar_level2` | L2 variant (8) | Cross-level | Cross-level | L2 variant | L2 variant | Cross-level |
| `avatar_level3` | L3 variant (8) | Cross-level | Cross-level | L3 variant | L3 variant | Cross-level |
| `avatar_general` | GF variant (8) | Cross-level | Cross-level | Cross-level (pre-migration) | Cross-level | Cross-level |
| No tag | GF default (8) | Cross-level | Cross-level | Cross-level | Cross-level | Cross-level |

(Source: 12-klaviyo-implementation-guide.md §6.2; GIULIANO-DEMANDS.md §2.2)

### 2.4 Custom Profile Properties

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                  KLAVIYO CUSTOM PROFILE PROPERTIES                             ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  PROPERTY            │ TYPE     │ VALUES                        │ PURPOSE    ║
║ ─────────────────────┼──────────┼───────────────────────────────┼────────────║
║  avatar_level         │ string   │ "level1" / "level2" /        │ PRIMARY    ║
║                       │          │ "level3" / "general"         │ routing    ║
║ ─────────────────────┼──────────┼───────────────────────────────┼────────────║
║  child_age            │ string   │ Free text, e.g. "5", "3.5"  │ Content    ║
║                       │          │                               │ calib.    ║
║ ─────────────────────┼──────────┼───────────────────────────────┼────────────║
║  signup_source        │ string   │ "popup"/"checkout"/          │ Channel   ║
║                       │          │ "referral"/"other"          │ attrib.   ║
║ ─────────────────────┼──────────┼───────────────────────────────┼────────────║
║  welcome_flow_        │ boolean  │ true / false (default false) │ Gate      ║
║  completed            │          │                               │           ║
║ ─────────────────────┼──────────┼───────────────────────────────┼────────────║
║  last_purchase_pack_  │ string   │ "1pair" / "3+3" / "5+5"    │ Replenish  ║
║  size                 │          │                               │ timing    ║
║ ─────────────────────┼──────────┼───────────────────────────────┼────────────║
║  vip_customer         │ boolean  │ true / false (3+ orders)     │ VIP route │
║ ─────────────────────┼──────────┼───────────────────────────────┼────────────║
║  label_sensitive      │ boolean  │ true / false (Phase 2+)      │ Sub-group  |
║  (Phase 2+)          │          │                               │ B detect  │
║ ─────────────────────┼──────────┼───────────────────────────────┼────────────║
║  purchase_reason      │ string   │ Free text (Phase 2+)         │ Zero-party │
║  (Phase 2+)          │          │                               │ data       │
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```
(Source: 12-klaviyo-implementation-guide.md §5; GIULIANO-DEMANDS.md §16.1)

### 2.5 Flow Suppression & Priority Chain

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                      FLOW PRIORITY & SUPPRESSION CHAIN                        ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║         HIGHEST ──→  SUNSET FLOW                                             ║
║         PRIORITY     │                                                       ║
║                      │ Suppresses ALL other flows unconditionally            ║
║                      │ Tag: unengaged = True → Master Suppression List       ║
║                      ▼                                                       ║
║                    WINBACK (Path A or B)                                     ║
║                      │                                                       ║
║                      │ Pauses ALL nurture flows while active                 ║
║                      │ Overrides Welcome, PP-Education, Replenishment        ║
║                      ▼                                                       ║
║                    PP-LEVEL DETECTION (Day 14)                               ║
║                      │                                                       ║
║                      │ Takes priority over ALL other Day 14 content          ║
║                      │ (Welcome E6, PP-Education, Replenishment timing)      ║
║                      ▼                                                       ║
║                    CART ABANDONMENT                                           ║
║                      │                                                       ║
║                      │ Suppresses Welcome FLOW E3+ during active cart        ║
║                      │ ⚠ Exception: Welcome E1-E2 remain delivered          ║
║                      ▼                                                       ║
║                    ALL OTHER FLOWS                                           ║
║                      │                                                       ║
║                      │ Normal operation — no cross-suppression               ║
║          ───────────┘                                                        ║
║                                                                              ║
║         RULES:                                                               ║
║         • Cart Abandonment does NOT suppress Welcome E1-E2 if already sent   ║
║         • PP-Level Detection fires ONCE at Day 14 for GF subscribers         ║
║         • Winback pauses nurture but allows transactional emails             ║
║         • Sunset = permanent exit — subscriber cannot re-enter any flow      ║
║         • Never double-saturate: max 1 flow email per subscriber per day     ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```
(Source: GIULIANO-DEMANDS.md §2.5; 1-full-email-strategy.md §3.3)

### 2.6 Welcome Flow — The Segmentation Gateway

The Welcome Flow is the **only** flow in Phase 1 that is level-specific (4 variants). All other Phase 1 flows (cart, checkout, browse, transactional) are cross-level.

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                 WELCOME FLOW — SEGMENTATION GATEWAY                          ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  4 SEPARATE KLAVIYO FLOWS — DO NOT USE CONDITIONAL SPLITS                   ║
║                                                                              ║
║  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐    ║
║  │  WELCOME L1  │  │  WELCOME L2  │  │  WELCOME L3  │  │  WELCOME GF  │    ║
║  │  8 emails    │  │  8 emails    │  │  8 emails    │  │  8 emails    │    ║
║  │  avatar_lvl1 │  │  avatar_lvl2 │  │  avatar_lvl3 │  │  avatar_gen  │    ║
║  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘    ║
║         │                 │                 │                 │             ║
║         ▼                 ▼                 ▼                 ▼             ║
║  ┌───────────────────────────────────────────────────────────────────────┐  ║
║  │  E1 Hook → E2 Validation → E3 Mechanism → E4 Social Proof            │  ║
║  │  → E5 Objections → E6 Tech Deep → E7 Close → E8 Next Step            │  ║
║  └───────────────────────────────────────────────────────────────────────┘  ║
║                                                                              ║
║  VITAL RULES:                                                                ║
║  ┌──────────────────────────────────────────────────────────────────────┐   ║
║  │  • 8 EMAILS PER LEVEL (NOT 10 — confirmed by Giuliano)               │   ║
║  │  • Each level gets OWN copy — 32 total (8×4)                         │   ║
║  │  • GF contains migration anchors in E2-E4 for level identification    │   ║
║  │  • L1: Normal cadence, Pre-K urgency in later emails                │   ║
║  │  • L2: Slightly slower, more mechanism depth                          │   ║
║  │  • L3: SLOWEST cadence (E1→E2 gap 2 days), ZERO urgency             │   ║
║  │  • GF: Balanced, cross-level, R1-R6 applied throughout              │   ║
║  └──────────────────────────────────────────────────────────────────────┘   ║
║                                                                              ║
║  TRIGGER: Pop-up signup with level tag (or default GF)                       ║
║  EXIT: Made a purchase | Unsubscribed | Entered higher-priority flow       ║
║  TIMING: D0 → D1 → D3 → D7 → D10 → D14 → D17 → D21                        ║
║  OFFER: WELCOME10 (10% off, 7-day validity). L3: 1 Pair offer               ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```
(Source: GIULIANO-DEMANDS.md §3; 1-full-email-strategy.md §4.1; 07-email-sequence-framework.md §6)

---

## 3. IDENTIFICATION METHODS

Three distinct methods identify and tag subscribers with their avatar level: **Self-Identification**, **Behavioral Signals**, and **Post-Purchase Re-Segmentation**.

### 3.1 Self-Identification via Pop-Up (Primary — ~80% of Volume)

The pop-up is the **single most important segmentation tool** in the system. It uses **symptom-based buttons** — NOT level labels — to let parents accurately self-identify.

**Rule:** "Parents don't self-identify as 'Level 2' — they identify with symptoms." (Source: GIULIANO-DEMANDS.md §10)

```
╔══════════════════════════════════════════════════════════════════════════════╗
║              B UT TON → TAG → AVATAR LEVEL MAPPING                            ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  BUTTON TEXT                               │ KLAVIYO TAG     │ LEVEL        ║
║  ──────────────────────────────────────────┼─────────────────┼────────────── ║
║  "Talks about potty but won't actually     │ avatar_level1   │ Level 1      ║
║   do it"                                   │                 │ Sarah        ║
║  ──────────────────────────────────────────┼─────────────────┼────────────── ║
║  "Sensory issues, tried many methods"      │ avatar_level2   │ Level 2      ║
║                                           │                 │ Lisa         ║
║  ──────────────────────────────────────────┼─────────────────┼────────────── ║
║  "Non-verbal or high support needs"        │ avatar_level3   │ Level 3      ║
║                                           │                 │ Maria        ║
║  ──────────────────────────────────────────┼─────────────────┼────────────── ║
║  "Still figuring out what's going on"      │ avatar_general  │ General      ║
║                                           │                 │ Fallback     ║
║                                                                              ║
║  CRITICAL: NO level labels in button text. Symptom-based language ONLY.     ║
║  NEVER show "Level 1", "Level 2", etc. to the subscriber.                    ║
║  NEVER assign level tag below 70% confidence — stay GF if uncertain.        ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```
(Source: GIULIANO-DEMANDS.md §10; 12-klaviyo-implementation-guide.md §7)

**Pop-Up Technical Specs:**

| Spec | Detail | Source |
|------|--------|--------|
| Trigger | 10-15 seconds OR exit-intent | GIULIANO-DEMANDS.md §10 |
| Display | 1-step popup (email + name + 1-question self-selection) | GIULIANO-DEMANDS.md §10 |
| Mobile | Full-screen variant | GIULIANO-DEMANDS.md §10 |
| Frequency | Max 1× per 7 days per visitor (30-day suppress after dismiss) | GIULIANO-DEMANDS.md §10 |
| Tool | Klaviyo Forms (preferred) or external | 12-klaviyo-implementation-guide.md §7 |
| Code | WELCOME10 displayed directly (buys without checking inbox) | GIULIANO-DEMANDS.md §10 |

**Self-ID Accuracy Rules:**

| Condition | Action | Source |
|-----------|--------|--------|
| Level confidence <70% | Assign `avatar_general` instead | GIULIANO-DEMANDS.md §1.1 |
| No pop-up interaction | Default to `avatar_general` | GIULIANO-DEMANDS.md §10 |
| Checkout sign-up | No level tag → GF Welcome | 12-klaviyo-implementation-guide.md §3.3 |
| Referral sign-up | No level tag → GF Welcome | 07-email-sequence-framework.md §3 |

### 3.2 Behavioral Signal Identification

Behavioral signals are used to **move subscribers between segments** and trigger re-engagement flows. They do NOT replace the avatar level tag — they layer on top.

**Behavioral Tags and Their Segmentation Impact:**

```
╔══════════════════════════════════════════════════════════════════════════════╗
║              BEHAVIORAL SIGNALS — TAG EFFECT ON SEGMENTATION                  ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  SIGNAL                     │ TAG APPLIED         │ SEGMENTATION EFFECT      ║
║  ───────────────────────────┼─────────────────────┼───────────────────────── ║
║  Completed Welcome Flow     │ welcome_completed   │ Unlocks PP-Extended      ║
║                             │                     │ Education (Day 22+)      ║
║  ───────────────────────────┼─────────────────────┼───────────────────────── ║
║  Welcome Flow + No Purchase │ welcome_completed_  │ Routes to FAQ/Objection  ║
║                             │ no_purchase         │ Enables Winback B        ║
║  ───────────────────────────┼─────────────────────┼───────────────────────── ║
║  Positive engagement        │ post_purchase_active│ Unlocks Referral (D30)   ║
║  ───────────────────────────┼─────────────────────┼───────────────────────── ║
║  3-7 days no opens          │ at_risk_no_open     │ Routes to PP-Support    ║
║                             │                     │ At-Risk flow             ║
║  ───────────────────────────┼─────────────────────┼───────────────────────── ║
║  60 days no engagement      │ inactive_60_days    │ Routes to Winback A/B   ║
║                             │                     │ (based on purchase status)║
║  ───────────────────────────┼─────────────────────┼───────────────────────── ║
║  120 days no engagement     │ inactive_120_days   │ Routes to Sunset Flow    ║
║                             │                     │ → Suppression            ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```
(Source: 12-klaviyo-implementation-guide.md §6.3; GIULIANO-DEMANDS.md §16.2)

**Purchase Signal — Bundle Size as Level Indicator:**

```
╔══════════════════════════════════════════════════════════════════════════════╗
║           PURCHASE BUNDLE SIZE → INFERRED LEVEL HINT                          ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  PURCHASED BUNDLE     │ INFERRED HINT         │ CONFIDENCE                   ║
║  ─────────────────────┼───────────────────────┼───────────────────────────── ║
║  1 Pair ($34.99)      │ L3-like (Medicaid     │ MEDIUM-HIGH — paired with    ║
║                       │ sensitivity, lower    │ GF tag, signals possible L3 ║
║                       │ price entry point)    │                               ║
║  ─────────────────────┼───────────────────────┼───────────────────────────── ║
║  3+3 Bundle ($79.99)  │ L1 or L2 (urgency to  │ MEDIUM — bestseller          ║
║                       │ solve, invest in      │ purchased by all levels      ║
║                       │ best value)           │                               ║
║  ─────────────────────┼───────────────────────┼───────────────────────────── ║
║  5+5 Bundle ($119.99) │ L1 (highest hope,     │ LOW — small sample size      ║
║                       │ max confidence)       │                               ║
║                                                                              ║
║  RULE: These are hints, not assignments. NEVER auto-assign level tag based   ║
║  on bundle size alone. Use to calibrate PP-Level Detection questioning.      ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```
(Source: GIULIANO-DEMANDS.md §18.4; 01-customer-avatar.md §3)

### 3.3 Post-Purchase Re-Segmentation

Post-purchase re-segmentation is the **second opportunity** to assign a specific level tag to GF subscribers. It occurs at Day 14 post-purchase via the **PP-Level Detection** email.

```
╔══════════════════════════════════════════════════════════════════════════════╗
║              PP-LEVEL DETECTION — DAY 14 POST-PURCHASE                        ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  WHO: GF subscribers who have made a purchase                               ║
║  WHEN: Day 14 post-purchase                                                 ║
║  PRIORITY: Overrides ALL other Day 14 content (Welcome E6, etc.)            ║
║  FORMAT: 1 email with 4 re-selection buttons (same symptom language)        ║
║                                                                              ║
║  ┌──────────────────────────────────────────────────────────────────────┐   ║
║  │  EMAIL FRAMEWORK:                                                      │   ║
║  │  "Now that you've had [product] for a week — which of these            │   ║
║  │   sounds most like your experience?"                                   │   ║
║  │                                                                         │   ║
║  │  ┌─────────────────────────────────────────────────────────────────┐   │   ║
║  │  │  R1: "He's starting to notice — but still misses sometimes"      │   │   ║
║  │  │         → tag: avatar_level1                                     │   │   ║
║  │  ├─────────────────────────────────────────────────────────────────┤   │   ║
║  │  │  R2: "He feels it when wet but doesn't initiate yet"             │   │   ║
║  │  │         → tag: avatar_level2                                     │   │   ║
║  │  ├─────────────────────────────────────────────────────────────────┤   │   ║
║  │  │  R3: "He reacts to the wetness but doesn't seem to connect it"   │   │   ║
║  │  │         → tag: avatar_level3                                     │   │   ║
║  │  ├─────────────────────────────────────────────────────────────────┤   │   ║
║  │  │  R4: "Still figuring out where we are with this"                 │   │   ║
║  │  │         → tag: avatar_general (stays GF)                         │   │   ║
║  │  └─────────────────────────────────────────────────────────────────┘   │   ║
║  └──────────────────────────────────────────────────────────────────────┘   ║
║                                                                              ║
║  RULES:                                                                      ║
║  • NEVER assign below 70% confidence                                        ║
║  • If no selection: stay GF                                                  ║
║  • If selection but unsure: mail again at Day 30                             ║
║  • Passive signals: bundle size → age hint → level hint                      ║
║  • Target migration: 65-75% of GF to level-specific within 90 days          ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```
(Source: GIULIANO-DEMANDS.md §18.4; 1-full-email-strategy.md §4.1, Flow 10)

---

## 4. UNKNOWN SUBSCRIBER PATH

### 4.1 Who Is an Unknown Subscriber?

An "unknown subscriber" is anyone in the database without a valid `avatar_level` tag. This includes:

- Visitors who clicked the pop-up's "Still figuring it out" button → `avatar_general`
- Visitors who signed up via checkout opt-in → `avatar_general` (default)
- Referral sign-ups without pop-up interaction → `avatar_general` (default)
- Imported lists (legacy) without segmentation → `avatar_general` (default)
- Dismissed pop-up but subscribed via secondary form → `avatar_general` (default)

### 4.2 The Unknown Subscriber Pipeline

```
╔══════════════════════════════════════════════════════════════════════════════╗
║              UNKNOWN SUBSCRIBER PIPELINE — GF PATH                             ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  ┌─────────────────────────────────────────────────────────────────────┐    ║
║  │  ENTRY POINT                                                          │    ║
║  │                                                                       │    ║
║  │  ┌──────────────────────────────────────────────────────────────┐    │    ║
║  │  │  Visitor arrives without selecting a level                      │    │    ║
║  │  │  → Tagged avatar_general                                      │    │    ║
║  │  │  → Enters WELCOME GF (cross-level, 8 emails, R1-R6 applied)   │    │    ║
║  │  └──────────────────────────────────────────────────────────────┘    │    ║
║  └─────────────────────────────┬───────────────────────────────────────┘    ║
║                                │                                            ║
║                                ▼                                            ║
║  ┌─────────────────────────────────────────────────────────────────────┐    ║
║  │  WELCOME GF CONTENT RULES                                             │    ║
║  │                                                                       │    ║
║  │  All GF content uses CROSS-LEVEL language:                            │    ║
║  │  ┌──────────────────────────────────────────────────────────────┐    │    ║
║  │  │  • Symptom-first, experience-first — never level labels       │    │    ║
║  │  │  • "Whether...Or...If..." bridge pattern                      │    │    ║
║  │  │  • 3-5 Recognition Anchors per mail (one per level tier)      │    │    ║
║  │  │  • Age range: "3 to 10+" not fixed ages                      │    │    ║
║  │  │  • Verbal AND non-verbal inclusivity in every email           │    │    ║
║  │  │  • Timeline flexibility: "Some kids 2 weeks. Others 8."       │    │    ║
║  │  │  • Low-bar success metrics: "Look at the wet spot"            │    │    ║
║  │  └──────────────────────────────────────────────────────────────┘    │    ║
║  └─────────────────────────────┬───────────────────────────────────────┘    ║
║                                │                                            ║
║                                ▼                                            ║
║  ┌─────────────────────────────────────────────────────────────────────┐    ║
║  │  THREE-FAMILY TESTIMONIAL PATTERN (GF ONLY)                           │    ║
║  │                                                                       │    ║
║  │  ┌──────────────────────────────────────────────────────────────┐    │    ║
║  │  │  • GF mails MUST use one testimonial from each level          │    │    ║
║  │  │    (L1/L2/L3) in designated emails:                          │    │    ║
║  │  │    Welcome E3, Cart Recovery E2, FAQ, Browse Abandonment E2  │    │    ║
║  │  │  • Three distinct profiles, all anonymous                     │    │    ║
║  │  │  • Each story is TRUE and cited from RS PDFs                  │    │    ║
║  │  │  • No level labels in testimonial headers                     │    │    ║
║  │  └──────────────────────────────────────────────────────────────┘    │    ║
║  └─────────────────────────────┬───────────────────────────────────────┘    ║
║                                │                                            ║
║                                ▼                                            ║
║  ┌─────────────────────────────────────────────────────────────────────┐    ║
║  │  MIGRATION ANCHORS (EMBEDDED IN WELCOME GF E2-E4)                     │    ║
║  │                                                                       │    ║
║  │  Goal: Move GF subscribers to level-specific path                     │    ║
║  │  Migration target: 65-75% of GF to level-specific within 90 days     │    ║
║  │                                                                       │    ║
║  │  Anchors are soft identification questions embedded in email copy:   │    ║
║  │  ┌──────────────────────────────────────────────────────────────┐    │    ║
║  │  │  "Does your child tell you after they've gone? Or not at all?" │    │    ║
║  │  │  "Have you tried sticker charts? Timed sits? Or neither?"     │    │    ║
║  │  └──────────────────────────────────────────────────────────────┘    │    ║
║  │                                                                       │    ║
║  │  Clicks on migration anchors → re-tagging event → may trigger        │    ║
║  │  level-specific adjustment                                           │    ║
║  └─────────────────────────────┬───────────────────────────────────────┘    ║
║                                │                                            ║
║                                ▼                                            ║
║  ┌─────────────────────────────────────────────────────────────────────┐    ║
║  │  POST-PURCHASE SECONDARY IDENTIFICATION                               │    ║
║  │                                                                       │    ║
║  │  ┌──────────────────────────────────────────────────────────────┐    │    ║
║  │  │  • PP-Level Detection (Day 14 post-purchase, 1 email)          │    │    ║
║  │  │    → 4 re-selection buttons                                    │    │    ║
║  │  │    → if selected → tag reassigned                              │    │    ║
║  │  │    → if not selected → stays GF                                │    │    ║
║  │  │                                                               │    │    ║
║  │  │  • Bundle size inference (hint only, never auto-assign)        │    │    ║
║  │  │  • Purchase reasons (Phase 2+ via survey)                     │    │    ║
║  │  └──────────────────────────────────────────────────────────────┘    │    ║
║  └─────────────────────────────────────────────────────────────────────┘    ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```
(Source: GIULIANO-DEMANDS.md §1.2, §6, §18.4, §22; 07-email-sequence-framework.md §10)

### 4.3 GF Sub-Group Routing Logic

```
╔══════════════════════════════════════════════════════════════════════════════╗
║              GF SUB-GROUP ROUTING — HOW EACH GROUP IS HANDLED                 ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  GROUP A — Diagnostic Entrants (~25% of GF)                                  ║
║  ┌──────────────────────────────────────────────────────────────────────┐   ║
║  │  PATH: → GF Welcome → Education-first content                       │   ║
║  │  → Migration anchor click → level tag assignment                    │   ║
║  │  → Level-specific flows activated                                   │   ║
║  │  MIGRATION POTENTIAL: HIGH                                           │   ║
║  └──────────────────────────────────────────────────────────────────────┘   ║
║                                                                              ║
║  GROUP B — Diagnosis-Rejecters (~15% of GF)                                 ║
║  ┌──────────────────────────────────────────────────────────────────────┐   ║
║  │  PATH: → GF Welcome → Convert IN GF ONLY                            │   ║
║  │  → NEVER offer migration anchors → NEVER mention "autism/ASD"       │   ║
║  │  → Use "nervous system differences" always                          │   ║
║  │  → All cross-level flows (R1-R6)                                    │   ║
║  │  MIGRATION POTENTIAL: LOW / FORBIDDEN                                │   ║
║  └──────────────────────────────────────────────────────────────────────┘   ║
║                                                                              ║
║  GROUP C — Sensory-Difference (~25% of GF)                                  ║
║  ┌──────────────────────────────────────────────────────────────────────┐   ║
║  │  PATH: → GF Welcome → Mechanism-oriented content                     │   ║
║  │  → No ASD language → interoception + sensory framing                 │   ║
║  │  → Convert IN GF                                                     │   ║
║  │  MIGRATION POTENTIAL: LOW                                             │   ║
║  └──────────────────────────────────────────────────────────────────────┘   ║
║                                                                              ║
║  GROUP D — Overwhelmed Non-Selectors (~25% of GF)                          ║
║  ┌──────────────────────────────────────────────────────────────────────┐   ║
║  │  PATH: → GF Welcome → Migration anchors embedded                     │   ║
║  │  → High-touch identification prompts                                 │   ║
║  │  → PP-Level Detection at Day 14                                      │   ║
║  │  → If no engagement: repeat at Day 30                                │   ║
║  │  MIGRATION POTENTIAL: HIGHEST (40-50%)                                │   ║
║  └──────────────────────────────────────────────────────────────────────┘   ║
║                                                                              ║
║  GROUP E — Cart/Browse Without Opt-In (~10% of GF)                         ║
║  ┌──────────────────────────────────────────────────────────────────────┐   ║
║  │  PATH: → Recovery flows (cart/checkout/browse)                       │   ║
║  │  → GF Welcome if no purchase                                         │   ║
║  │  → PP-Level Detection if purchase made                               │   ║
║  │  MIGRATION POTENTIAL: VARIABLE                                        │   ║
║  └──────────────────────────────────────────────────────────────────────┘   ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```
(Source: GIULIANO-DEMANDS.md §1.2; MASTER-DIAGNOSIS-COMPENDIUM.md §1.3)

---

## 5. POST-PURCHASE RE-SEGMENTATION

After first purchase, the segmentation system is refined using three mechanisms: **PP-Level Detection** (active re-selection), **bundle size inference** (passive hint), and **purchase reason analysis** (Phase 2+).

### 5.1 PP-Level Detection — The Primary Mechanism

This is the single most important re-segmentation tool. It targets GF subscribers at Day 14 post-purchase with a 4-option re-selection email.

```
╔══════════════════════════════════════════════════════════════════════════════╗
║              POST-PURCHASE RE-SEGMENTATION DECISION TREE                      ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║                      ┌─────────────────────────────┐                         ║
║                      │  SUBSCRIBER PURCHASES         │                        ║
║                      │  (Any level tag)              │                        ║
║                      └─────────────┬───────────────┘                         ║
║                                    │                                         ║
║                      ┌─────────────┴──────────────┐                          ║
║                      │                            │                          ║
║                      ▼                            ▼                          ║
║           ┌────────────────────┐       ┌────────────────────┐                 ║
║           │ HAS LEVEL TAG      │       │ GF (no level tag)  │                 ║
║           │ → PP flows run     │       │ → Active tracking  │                 ║
║           │   with level copy  │       └─────────┬──────────┘                 ║
║           └────────────────────┘                 │                            ║
║                                                  │                            ║
║                                                  ▼                            ║
║                               ┌────────────────────────────────┐             ║
║                               │ DAY 14: PP-LEVEL DETECTION      │             ║
║                               │ 1 email with 4 re-selection    │             ║
║                               │ buttons (symptom language)     │             ║
║                               └──────────────┬─────────────────┘             ║
║                                              │                                ║
║                              ┌───────────────┴────────────────┐              ║
║                              │                                │              ║
║                              ▼                                ▼              ║
║                   ┌────────────────────┐            ┌──────────────────┐      ║
║                   │ SUBSCRIBER CLICKS  │            │ NO CLICK          │      ║
║                   │ A RE-SELECTION     │            │                    │      ║
║                   └─────────┬──────────┘            └────────┬─────────┘      ║
║                             │                                │                ║
║                             ▼                                ▼                ║
║              ┌────────────────────────────┐    ┌──────────────────────────┐   ║
║              │ NEW TAG APPLIED:           │    │ STAYS GF                 │   ║
║              │ avatar_level1/2/3          │    │ • Continues cross-level  │   ║
║              │ → Enters level-specific    │    │ • Monitor for Day 30     │   ║
║              │   post-purchase flows      │    │ • Second attempt at D30  │   ║
║              └────────────────────────────┘    │ • Final fallback = GF    │   ║
║                                   │            └──────────────────────────┘   ║
║                                   ▼                                           ║
║              ┌────────────────────────────────────────────┐                  ║
║              │  ON TAG CHANGE:                              │                ║
║              │  • Existing GF Welcome continues? NO — exit │                 ║
║              │  • New level-specific Welcome variant? NO  │                  ║
║              │  • All future flows use new level tag       │                 ║
║              │  • PP-Extended Education activates          │                 ║
║              │    (Phase 3, Day 22+)                       │                 ║
║              │  • Winback activation uses new level tag    │                 ║
║              └────────────────────────────────────────────┘                  ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```
(Source: GIULIANO-DEMANDS.md §18.4; 1-full-email-strategy.md §4.1 (Flow 10))

### 5.2 Post-Purchase Level-Specific Flow Activation

Once a subscriber has a confirmed level tag (either via pop-up or PP-Level Detection), these post-purchase flows activate with level-specific content:

| Flow | Phase | Level-Specific? | Content | Source |
|------|:-----:|:---------------:|---------|--------|
| PP-Direct Upsell (2) | P1 | Cross-level | Upgrade 1-pair to 3+3 | GIULIANO-DEMANDS.md §2.2 |
| PP-Mary S. Story (1) | P2 | Cross-level | Founder story | GIULIANO-DEMANDS.md §7.4 |
| PP-Education D0-21 (4) | P2 | Cross-level | Product usage | GIULIANO-DEMANDS.md §2.2 |
| PP-Extended Upsell (3) | P2 | Level-aware | Upgrade per level sensitivity | GIULIANO-DEMANDS.md §2.2 |
| PP-Mid Check-In (3) | P2 | Cross-level | Progress support | GIULIANO-DEMANDS.md §2.2 |
| **PP-Extended Education (20)** | **P3** | **Level-specific** | **5×4=20 ★** | GIULIANO-DEMANDS.md §2.2 |
| Replenish A/B/C (7) | P2 | Cross-level | Reorder timing | GIULIANO-DEMANDS.md §2.2 |
| Review Request (2) | P2 | Cross-level | Social proof | GIULIANO-DEMANDS.md §2.2 |
| Winback A (12) | P2 | **Level-specific** | **3×4=12 ★** | GIULIANO-DEMANDS.md §2.2 |
| Winback B (12) | P3 | **Level-specific** | **3×4=12 ★** | GIULIANO-DEMANDS.md §2.2 |
| At-Risk (4) | P3 | Cross-level | Re-engage | GIULIANO-DEMANDS.md §2.2 |

(Source: GIULIANO-DEMANDS.md §2.2; 07-email-sequence-framework.md §2.5)

### 5.3 Re-Segmentation Timeline

```
╔══════════════════════════════════════════════════════════════════════════════╗
║              FULL RE-SEGMENTATION TIMELINE — DAY 0 TO SUPPRESSION             ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  DAY 0      │ Pop-up self-ID → Level tag assigned (or GF default)           ║
║             │ Subscription to Master List                                    ║
║             │ avatar_level property set                                      ║
║ ────────────┼─────────────────────────────────────────────────────────────── ║
║  DAY 0-21   │ Welcome Flow executes (level-specific variant)                ║
║             │ GF Welcome embeds migration anchors in E2-E4                   ║
║ ────────────┼─────────────────────────────────────────────────────────────── ║
║  DAY 14     │ PP-LEVEL DETECTION (GF only, post-purchase)                   ║
║             │ 4 re-selection buttons → tag reassignment or stay GF          ║
║             │ Overrides ALL other Day 14 content                             ║
║ ────────────┼─────────────────────────────────────────────────────────────── ║
║  DAY 30     │ Second PP-Level Detection attempt (if D14 no response)        ║
║             │ Final opportunity for early migration                          ║
║ ────────────┼─────────────────────────────────────────────────────────────── ║
║  DAY 22+    │ PP-Extended Education activates (Phase 3) if level tag known  ║
║             │ 20 emails (5×4) — level-specific deep education               ║
║ ────────────┼─────────────────────────────────────────────────────────────── ║
║  DAY 60     │ Inactive non-buyers → Winback B (3×4=12, level-specific)     ║
║             │ Behavioral tag: inactive_60_days                               ║
║ ────────────┼─────────────────────────────────────────────────────────────── ║
║  DAY 90     │ Inactive buyers → Winback A (3×4=12, level-specific)          ║
║             │ Behavioral tag: inactive_60_days (90d from last purchase)      ║
║ ────────────┼─────────────────────────────────────────────────────────────── ║
║  DAY 120    │ Unengaged (no open/click/order in 120d, 20+ emails sent)     ║
║             │ → Sunset Flow (2 emails)                                       ║
║             │ → Tag: unengaged = True                                        ║
║             │ → Master Suppression List — all future sends suppressed        ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```
(Source: GIULIANO-DEMANDS.md §2.5, §17.11, §18.4; 07-email-sequence-framework.md §3.3)

---

## 6. CROSS-LEVEL FLOWS & CALIBRATION RULES

### 6.1 The 6 Cross-Level Calibration Rules (R1-R6)

Cross-level flows serve all 4 levels with a single copy. The 6 calibration rules are the **guardrails** that make one copy work for ALL levels simultaneously.

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                  6 CROSS-LEVEL CALIBRATION RULES (R1-R6)                      ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  R1 ── SYMPTOM OVER LABEL                                                   ║
║         "Never name the level. Name the experience."                         ║
║         ❌ "Level 2" or "Level 3."                                          ║
║         ✅ "If your child doesn't feel when they need to go..."             ║
║                                                                              ║
║  R2 ── 3-5 RECOGNITION ANCHORS PER MAIL                                     ║
║         Every mail must have a block with 3+ specific situations:            ║
║         L1 anchor: "Sits 20 minutes, nothing happens"                       ║
║         L2 anchor: "Pees immediately when pull-up comes off"                ║
║         L3 anchor: "Doesn't react to wet diaper at all"                     ║
║         → Mom reads the list, finds 1-2 that match HER child                ║
║                                                                              ║
║  R3 ── AGE RANGES OVER FIXED AGES                                           ║
║         ❌ "For 5-year-olds..."                                              ║
║         ✅ "For kids 3 to 10+..."                                           ║
║                                                                              ║
║  R4 ── VERBAL / NON-VERBAL INCLUSIVITY                                      ║
║         Always cover both modes of communication:                           ║
║         Verbal: "saying 'wet'"                                              ║
║         Non-verbal: "showing you with a gesture"                            ║
║                                                                              ║
║  R5 ── TIMELINE FLEXIBILITY                                                 ║
║         ❌ "In 30 days your child will..."                                   ║
║         ✅ "Some kids 2 weeks. Others 8. Both normal."                      ║
║                                                                              ║
║  R6 ── LOW-BAR SUCCESS METRICS                                              ║
║         "Look at the wet spot for the first time"                           ║
║         "Pull at their pants in awareness"                                   ║
║         "Walk toward the bathroom (even after)"                              ║
║         "Stay dry 2 hours instead of 30 minutes"                            ║
║                                                                              ║
║  VIOLATION COST: Any cross-level email missing one of these 6 destroys      ║
║  trust with that segment. R1 violation is worst — mom feels labeled.        ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```
(Source: GIULIANO-DEMANDS.md §4; 1-full-email-strategy.md §6)

### 6.2 Cross-Level vs Level-Specific: Decision Rules

The central question: **When does a single GF-level email serve all subscribers, and when must 4 variants be created?**

```
╔══════════════════════════════════════════════════════════════════════════════╗
║           CROSS-LEVEL vs LEVEL-SPECIFIC — DECISION MATRIX                      ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  SEND AS CROSS-LEVEL (1 copy + R1-R6) WHEN:                                 ║
║  ┌──────────────────────────────────────────────────────────────────────┐   ║
║  │  • SPEED > segmentation (recovery flows need fast send)               │   ║
║  │  • Content is universal (transactional, replenishment, exit)          │   ║
║  │  • Data insufficient to justify 4 variants (Phase 1, low volume)     │   ║
║  │  • Content focuses on mechanism explanation, not emotional depth      │   ║
║  │  • Cross-level language ("Whether...Or...If...") adequately covers   │   ║
║  │    all audience segments                                              │   ║
║  │  • Subscriber is GF (no level tag available for targeting)            │   ║
║  └──────────────────────────────────────────────────────────────────────┘   ║
║                                                                              ║
║  SEND AS LEVEL-SPECIFIC (4× copies) WHEN:                                  ║
║  ┌──────────────────────────────────────────────────────────────────────┐   ║
║  │  • Content is emotional — must match hope/realism ratio per level     │   ║
║  │  • Urgency calibration varies by level (L1 can handle, L3 cannot)    │   ║
║  │  • Offer framing changes per level (L3: 1 Pair, L1: 3+3 bundle)     │   ║
║  │  • Audience volume per level supports 4 variants statistically       │   ║
║  │  • Forbidden phrases differ per level (L1: "severe", L2: "quick")    │   ║
║  │  • Content is the primary relationship-builder (Welcome, PP-Ext Ed)  │   ║
║  │  • Winback or re-engagement where tonality mismatch is fatal         │   ║
║  └──────────────────────────────────────────────────────────────────────┘   ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```
(Source: GIULIANO-DEMANDS.md §4, §18.1; 15-level-messaging-matrix.md §9)

### 6.3 Complete Flow Segmentation Map

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                     COMPLETE FLOW SEGMENTATION MAP                            ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  PHASE 1 — LAUNCH:                                                          ║
║  ┌──────────────────────────────────────────────────────────────────────┐   ║
║  │  FLOW                    │ SEG TYPE    │ VARIANTS     │ TOTAL EMAILS│   ║
║  │  ────────────────────────┼─────────────┼──────────────┼─────────────│   ║
║  │  01 Welcome Flow          │ LEVEL-SPEC  │ 4×           │ 32          │   ║
║  │  02 Cart Abandonment      │ CROSS-LEVEL │ 1 copy + R1-6│ 3           │   ║
║  │  03 Checkout Abandonment  │ CROSS-LEVEL │ 1 copy + R1-6│ 2           │   ║
║  │  04 Browse Abandonment    │ CROSS-LEVEL │ 1 copy + R1-6│ 3           │   ║
║  │  05 Order Confirmation    │ CROSS-LEVEL │ 1 copy       │ 1           │   ║
║  │  06 Shipping Notification │ CROSS-LEVEL │ 1 copy       │ 1           │   ║
║  │  07 Out for Delivery      │ CROSS-LEVEL │ 1 copy       │ 1           │   ║
║  │  08 Arrived & Welcome     │ CROSS-LEVEL │ 1 copy       │ 1           │   ║
║  │  09 PP-Direct Upsell      │ CROSS-LEVEL │ 1 copy       │ 2           │   ║
║  │  10 PP-Level Detection    │ CROSS-LEVEL │ 1 copy       │ 1           │   ║
║  └──────────────────────────────────────────────────────────────────────┘   ║
║                                                                              ║
║  PHASE 2 — HIGH-VALUE:                                                      ║
║  ┌──────────────────────────────────────────────────────────────────────┐   ║
║  │  11 PP-Mary S. Story      │ CROSS-LEVEL │ 1 copy       │ 1           │   ║
║  │  12 PP-Education D0-21    │ CROSS-LEVEL │ 1 copy       │ 4           │   ║
║  │  13 PP-Extended Upsell    │ CROSS-LEVEL │ 1 copy       │ 3           │   ║
║  │  14 PP-Mid Check-In       │ CROSS-LEVEL │ 1 copy       │ 3           │   ║
║  │  15 Replenish A           │ CROSS-LEVEL │ 1 copy       │ 3           │   ║
║  │  16 Replenish B           │ CROSS-LEVEL │ 1 copy       │ 2           │   ║
║  │  17 Replenish C           │ CROSS-LEVEL │ 1 copy       │ 2           │   ║
║  │  18 Review Request        │ CROSS-LEVEL │ 1 copy       │ 2           │   ║
║  │  19 Winback A (buyer)     │ LEVEL-SPEC  │ 4×           │ 12          │   ║
║  └──────────────────────────────────────────────────────────────────────┘   ║
║                                                                              ║
║  PHASE 3 — NICE-TO-HAVE:                                                    ║
║  ┌──────────────────────────────────────────────────────────────────────┐   ║
║  │  20 PP-Extended Education │ LEVEL-SPEC  │ 4×           │ 20          │   ║
║  │  21 PP-Support At-Risk    │ CROSS-LEVEL │ 1 copy       │ 4           │   ║
║  │  22 Winback B (never buy) │ LEVEL-SPEC  │ 4×           │ 12          │   ║
║  │  23 Sunset                │ CROSS-LEVEL │ 1 copy       │ 2           │   ║
║  │  24 FAQ/Objection Lib     │ CROSS-LEVEL │ 1 copy + R1-6│ 6           │   ║
║  │  25 Referral              │ CROSS-LEVEL │ 1 copy       │ 3           │   ║
║  └──────────────────────────────────────────────────────────────────────┘   ║
║                                                                              ║
║  TOTALS:                                                                     ║
║  LEVEL-SPECIFIC: 77 emails (Welcome 32 + PP-Ext Ed 20 + Winback A 12        ║
║                   + Winback B 12 + PP-Level Detection 1)                     ║
║  CROSS-LEVEL: ~37 emails                                                      ║
║  GRAND TOTAL: ~114 unique emails                                              ║
║                                                                              ║
║  NOTE: FAQ/Objection Library = CROSS-LEVEL (confirmed by Giuliano demands). ║
║  PP-Extended Education = PHASE 3. Winback A = PHASE 2.                      ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```
(Source: GIULIANO-DEMANDS.md §2.2, §20; 07-email-sequence-framework.md §2.5)

### 6.4 When L1 Gets L2 Content (and Vice Versa) — Override Rules

Cross-level content delivery occurs in three distinct scenarios:

**Scenario A: Cross-Level Flows (Deliberate — By Design)**

Every subscriber receives the same cross-level content for cart/checkout/browse abandonment, transactional emails, PP-Education, and other cross-level flows regardless of their level tag. This is INTENTIONAL — speed and operational efficiency outweigh personalization for these touchpoints.

**Scenario B: Migration Transition (Temporary — During Tag Change)**

When a GF subscriber migrates to a level-specific tag (via PP-Level Detection or migration anchor click):
- All future cross-level flows: unaffected (still cross-level)
- All future level-specific flows: use new tag from moment of assignment
- Pre-existing in-flight flows: do NOT retroactively change
- Welcome Flow: if still in progress at migration, exit GF variant — do not enter level variant (one Welcome per subscriber)

**Scenario C: Default GF Language (Safety Net — When Uncertain)**

Uncertain audience → General Fallback (DOC5). Uncertain phase → Phase 2-3. Uncertain tone → realism over hope. Uncertain CTA → permission-not-to-buy. (Source: GIULIANO-DEMANDS.md §12.5)

### 6.5 Hope/Realism Ratio by Stage × Level (24-Cell Matrix)

```
╔══════════════════════════════════════════════════════════════════════════════╗
║         HOPE/REALISM RATIO — 24-CELL STAGE × LEVEL MATRIX                     ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  STAGE           │  L1        L2        L3        GF                        ║
║  ────────────────┼──────────────────────────────────────────                 ║
║  Pre-Purchase    │  70/30 →  40/60 ←→  20/80 ↓↓  50/50 ←→                 ║
║                  │  Hope     Mixed     Heavy      Balanced                   ║
║                  │           Realism   Realism    Realism                    ║
║  ────────────────┼──────────────────────────────────────────                 ║
║  Conversion      │  60/40 ↓  35/65 ←→  15/85 ↓↓↓ 45/55 ←→                 ║
║                  │  Still    Skeptical Crushing   Soft                       ║
║                  │  Hope                Realism   Push                       ║
║  ────────────────┼──────────────────────────────────────────                 ║
║  Transactional   │  65/35 ↑  40/60 ←→  20/80 ↓↓  50/50 ←→                 ║
║                  │  Warm     Warm      Gentle     Warm                       ║
║                  │  Hope     Real      Dignity    Balance                    ║
║  ────────────────┼──────────────────────────────────────────                 ║
║  PP Early        │  65/35 ↑  40/60 ←→  20/80 ↓↓  50/50 ←→                 ║
║                  │  Reassur- Validate  Gentle     Mixed                     ║
║                  │  ance                Dignity                              ║
║  ────────────────┼──────────────────────────────────────────                 ║
║  PP Mid          │  55/45 ↓  35/65 ←→  15/85 ↓↓↓ 40/60 ←→                 ║
║                  │  Patient   Sensitive Resignat-  Balanced                  ║
║                  │            ion                                            ║
║  ────────────────┼──────────────────────────────────────────                 ║
║  Lifecycle       │  50/50 ↓↓ 35/65 ←→  15/85 ↓↓↓ 40/60 ←→                 ║
║                  │  Low Hope  Fixed     Minimal    Balanced                  ║
║                  │                       Hope                                ║
║                                                                              ║
║  ↑ = More hope   ↓ = More realism   ←→ = Balanced                           ║
║                                                                 ║
║  ADJUSTMENT RULES:                                                           ║
║  SHIFT MORE HOPE WHEN: Early journey, Transactional emails, After a win     ║
║  SHIFT MORE REALISM WHEN: Late journey, Cart final, Skeptical L2-3, PP Mid  ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```
(Source: GIULIANO-DEMANDS.md §13.2; 15-level-messaging-matrix.md §1)

---

## 7. EDGE CASES & EXCEPTION HANDLING

### 7.1 Multi-Child Families

```
╔══════════════════════════════════════════════════════════════════════════════╗
║              EDGE CASE 1 — MULTI-CHILD FAMILIES                               ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  SCENARIO: A parent has two or more autistic children, possibly at           ║
║            different avatar levels. Which avatar level do we use?            ║
║                                                                              ║
║  EXAMPLE: "I have 3 children. One is Level 2, the other is highly           ║
║            sensitive NT, and the youngest is Level 1."                       ║
║                                                                              ║
║  RULES:                                                                      ║
║  ┌──────────────────────────────────────────────────────────────────────┐   ║
║  │  RULE 1: Always assign to the HIGHEST support-needs child.           │   ║
║  │          L3 > L2 > L1 priority. This ensures the most                │   ║
║  │          vulnerable child gets adequate tone.                         │   ║
║  │                                                                        │   ║
║  │  RULE 2: Cross-level content always covers the widest range           │   ║
║  │          (R1-R6 guarantees age and verbal inclusivity).               │   ║
║  │                                                                        │   ║
║  │  RULE 3: If the parent buys for the LOWER-needs child first,          │   ║
║  │          the level tag should reflect the child they're buying for     │   ║
║  │          (inferred from bundle size and product choice).              │   ║
║  │                                                                        │   ║
║  │  RULE 4: Never ask "which child" in the pop-up. Self-selection        │   ║
║  │          naturally reflects the most pressing concern.                │   ║
║  └──────────────────────────────────────────────────────────────────────┘   ║
║                                                                              ║
║  PRACTICAL APPLICATION:                                                      ║
║  │                                                                         ║
║  ├─ Parent selects level based on highest-need child at pop-up            ║
║  ├─ Cross-level emails (R1-R6) cover all levels naturally                ║
║  ├─ Level-specific emails may not perfectly match every child —           ║
║  │   but the highest-needs child drives tonality safety                  ║
║  └─ Post-purchase content references "your child's unique situation"      ║
║     to allow parent to self-apply to their specific child                  ║
║                                                                              ║
║  CONTENT TIP FROM GIULIANO: Use "your child" NOT "your children"            ║
║  in body copy. The parent personalizes to whichever child is most           ║
║  relevant. If multi-child context is needed: "whichever child this          ║
║  speaks to most."                                                           ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```
(Source: GIULIANO-DEMANDS.md §19 (Do's/Don'ts); MASTER-INGESTION-COMPENDIUM.md §1.1)

### 7.2 Non-Parent Subscribers

```
╔══════════════════════════════════════════════════════════════════════════════╗
║              EDGE CASE 2 — NON-PARENT SUBSCRIBERS                             ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  WHO: Grandparents, aunts, uncles, babysitters, therapists, BCBAs,          ║
║       educators who subscribe to BrightKidCo for a child in their care.      ║
║                                                                              ║
║  POP-UP BEHAVIOR: Non-parents typically select button 4 ("Still             ║
║  figuring out what's going on") → avatar_general.                           ║
║                                                                              ║
║  RULES:                                                                      ║
║  ┌──────────────────────────────────────────────────────────────────────┐   ║
║  │  RULE 1: Non-parents follow the standard GF path with no changes.    │   ║
║  │          The avatar system does NOT differentiate subscriber role.    │   ║
║  │                                                                        │   ║
║  │  RULE 2: Copy always addresses "you" as caregiver. Never use          │   ║
║  │          "mom" in body copy — use "parent" or "you."                 │   ║
║  │          (Per GIULIANO-DEMANDS.md §19 — structural do's)             │   ║
║  │                                                                        │   ║
║  │  RULE 3: Purchase_reason property (Phase 2+) captures whether         │   ║
║  │          subscriber is a parent, grandparent, gift-buyer, etc.        │   ║
║  │          This can inform future cross-level content calibration.      │   ║
║  │                                                                        │   ║
║  │  RULE 4: BCBAs/OTs who subscribe may have L2 children in their        │   ║
║  │          caseload. They are a HIGH-value secondary audience —          │   ║
║  │          BCBA fact-sheet strategy targets them specifically.           │   ║
║  └──────────────────────────────────────────────────────────────────────┘   ║
║                                                                              ║
║  IMPACT ON SEGMENTATION: Minimal. Non-parents are a small percentage        ║
║  of total subscribers and do not warrant a separate tag or flow.            ║
║  They are naturally handled by the GF fallback path.                        ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```
(Source: GIULIANO-DEMANDS.md §19; 01-customer-avatar.md §2; 12-klaviyo-implementation-guide.md §5)

### 7.3 International Variants

```
╔══════════════════════════════════════════════════════════════════════════════╗
║              EDGE CASE 3 — INTERNATIONAL SUBSCRIBERS                          ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  AUDIENCE BREAKDOWN: USA 65%, UK 15%, AU/NZ 15%, CA 5%                     ║
║                                                                              ║
║  RULES:                                                                      ║
║  ┌──────────────────────────────────────────────────────────────────────┐   ║
║  │  RULE 1 (V22): UK/AU localization is REQUIRED per segment            │   ║
║  │  UK: "nappies" not "diapers". AU/NZ: same.                          │   ║
║  │  (Source: GIULIANO-DEMANDS.md §14 — V22)                           │   ║
║  │                                                                        │   ║
║  │  RULE 2: Avatar level segmentation is dimension-agnostic. The        │   ║
║  │          same 4 levels apply globally. No regional avatar variants.  │   ║
║  │                                                                        │   ║
║  │  RULE 3: Klaviyo geographic segments (country property) determine     │   ║
║  │          which version of content to send. This affects ONLY          │   ║
║  │          vocabulary (nappies vs diapers), NOT tonality or level.     │   ║
║  │                                                                        │   ║
║  │  RULE 4: International variants are NOT created in Phase 1.           │   ║
║  │          Phase 1 ships in US English only. Internationalization       │   ║
║  │          begins in Phase 2 when UK/AU/NZ/CA volume is sufficient.    │   ║
║  │                                                                        │   ║
║  │  RULE 5: Emoji/idiom sensitivity — avoid culture-specific             │   ║
║  │          references (US school systems, holidays, etc.) in            │   ║
║  │          cross-level content.                                         │   ║
║  └──────────────────────────────────────────────────────────────────────┘   ║
║                                                                              ║
║  SEGMENTATION IMPLEMENTATION:                                                ║
║  │                                                                         ║
║  ├─ Klaviyo geographic segment: `$country` = "GB"                          ║
║  ├─ Flow condition: If country = UK, use UK vocabulary variant            ║
║  ├─ Fallback: All non-US countries default to US English in Phase 1       ║
║  └─ No separate flows for international — condition branches only          ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```
(Source: GIULIANO-DEMANDS.md §14 (V22); MASTER-DIAGNOSIS-COMPENDIUM.md §1.1; MASTER-RESEARCH-COMPENDIUM.md §1)

### 7.4 Unengaged / Disengaged Subscribers

```
╔══════════════════════════════════════════════════════════════════════════════╗
║              EDGE CASE 4 — UNENGAGED / DISENGAGED SUBSCRIBERS                 ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  ENGAGEMENT DECAY PIPELINE:                                                  ║
║                                                                              ║
║  ┌────────────────┐    ┌──────────────────┐    ┌──────────────────┐        ║
║  │ ENGAGED        │───→│ AT-RISK          │───→│ INACTIVE         │───→... ║
║  │ Active opens   │    │ 3-7 days no open │    │ 60d no engagement│        ║
║  │ and clicks    │    │                  │    │                  │        ║
║  └────────────────┘    └──────────────────┘    └────────┬─────────┘        ║
║                                                         │                    ║
║                                                         ▼                    ║
║                                              ┌──────────────────────┐       ║
║                                              │ SUNSET CANDIDATE     │       ║
║                                              │ 120d no engagement   │       ║
║                                              │ 20+ emails sent      │       ║
║                                              └──────────┬───────────┘       ║
║                                                         │                    ║
║                                                         ▼                    ║
║                                              ┌──────────────────────┐       ║
║                                              │ SUNSET FLOW (2 mail) │       ║
║                                              │ → Re-engagement ask  │       ║
║                                              │ → 4-7 day window     │       ║
║                                              │ → No open?           │       ║
║                                              │ → Tag: unengaged=T   │       ║
║                                              │ → Master Suppression │       ║
║                                              └──────────────────────┘       ║
║                                                                              ║
║  RULES:                                                                      ║
║  ┌──────────────────────────────────────────────────────────────────────┐   ║
║  │  RULE 1: Never send to unengaged at standard volume. Route through  │   ║
║  │          Sunset Flow only.                                           │   ║
║  │          (Source: GIULIANO-DEMANDS.md §12.3)                         │   ║
║  │                                                                        │   ║
║  │  RULE 2: Unengaged status overrides avatar level. If a subscriber    │   ║
║  │          is tagged `unengaged = True`, ALL avatar level tags are      │   ║
║  │          ignored. Only the Sunset Flow may contact this subscriber.   │   ║
║  │                                                                        │   ║
║  │  RULE 3: Unengaged subscribers are excluded from ALL flows and        │   ║
║  │          campaigns for 6-12 months. Re-entry only via fresh           │   ║
║  │          signup (new profile).                                        │   ║
║  │                                                                        │   ║
║  │  RULE 4: At-Risk flow (PP-Support At-Risk) triggers at 3-7 days       │   ║
║  │          of no opens and overrides PP-Education content.              │   ║
║  │                                                                        │   ║
║  │  RULE 5: Winback A (90d inactive buyers) overrides Welcome,          │   ║
║  │          PP-Education, and Replenishment but allows transactional.    │   ║
║  └──────────────────────────────────────────────────────────────────────┘   ║
║                                                                              ║
║  SUNSET PROTOCOL — PRECISE SEGMENT DEFINITION:                              ║
║  Trigger: Opened 0 times in 120 days AND Clicked 0 times in 120 days       ║
║  AND Placed Order 0 times in 120 days AND Received Email 20+ times          ║
║                                                                              ║
║  Process:                                                                    ║
║  1. Re-engagement email (cross-level, R1-R6)                                ║
║  2. 4-7 day delay                                                            ║
║  3. Tag `unengaged = True`                                                  ║
║  4. Add to Master Suppression List — applied to ALL campaign filters        ║
║     and ALL flow audience filters                                            ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```
(Source: GIULIANO-DEMANDS.md §12.3, §17.11; 12-klaviyo-implementation-guide.md §8; 07-email-sequence-framework.md §11)

### 7.5 Comprehensive Edge Case Matrix

```
╔══════════════════════════════════════════════════════════════════════════════════════════════════╗
║                            COMPREHENSIVE EDGE CASE MATRIX                                          ║
╠══════════════════════════════════════════════════════════════════════════════════════════════════╣
║                                                                                                    ║
║  EDGE CASE              │ RULE SUMMARY                  │ SEGMENT IMPACT       │ SOURCE           ║
║  ───────────────────────┼──────────────────────────────┼──────────────────────┼──────────────────║
║  Multi-child family     │ Assign to HIGHEST support    │ Tag stays highest    │ GIULIANO §19     ║
║                         │ need child (L3 > L2 > L1)    │ needs child tier     │                  ║
║  ───────────────────────┼──────────────────────────────┼──────────────────────┼──────────────────║
║  Non-parent subscriber  │ Follow GF path, caregiver    │ GF only — no special │ GIULIANO §19     ║
║                         │ language (not "mom")        │ tag needed           │                  ║
║  ───────────────────────┼──────────────────────────────┼──────────────────────┼──────────────────║
║  International          │ Phase 1: US only            │ Geographic segment    │ GIULIANO §14 V22 │
║                         │ Phase 2+: UK vocabulary      │ condition branch     │ MASTER-DIAG §1.1 │
║                         │ ("nappies" vs "diapers")    │ — not separate flow │                  ║
║  ───────────────────────┼──────────────────────────────┼──────────────────────┼──────────────────║
║  Unengaged subscriber   │ Route to Sunset only         │ Overrides ALL        │ GIULIANO §17.11  │
║                         │ 120d rules                   │ avatar tags          │                  ║
║  ───────────────────────┼──────────────────────────────┼──────────────────────┼──────────────────║
║  Group B (Diagnosis-    │ NEVER migrate to level       │ Stay GF permanently  │ GIULIANO §1.2    │
║  Rejecter)              │ Symptom language only        │ No level-specific    │ V16              │
║  ───────────────────────┼──────────────────────────────┼──────────────────────┼──────────────────║
║  GF no-purchase after   │ Routes to FAQ/Objection Lib  │ Behavioral tag:      │ GIULIANO §2.2    │
║  Welcome completion     │ (Phase 3) + Winback B (60d) │ welcome_completed_   │                  │
║                         │                              │ no_purchase          │                  ║
║  ───────────────────────┼──────────────────────────────┼──────────────────────┼──────────────────║
║  Cart during Welcome    │ Cart suppresses Welcome E3+  │ Temp suspension of   │ GIULIANO §2.5    │
║                         │ E1-E2 remain delivered       │ Welcome flow         │                  ║
║  ───────────────────────┼──────────────────────────────┼──────────────────────┼──────────────────║
║  Winback re-engagement  │ Winback overrides Welcome    │ Winback retains      │ GIULIANO §2.5    │
║                         │ if subscriber re-enters      │ priority             │                  ║
║  ───────────────────────┼──────────────────────────────┼──────────────────────┼──────────────────║
║  L3 Medicaid /          │ 1 Pair $34.99 primary offer  │ L3 offer rules       │ GIULIANO §25     │
║  Financial sensitivity  │ No math reframes             │ override default     │                  ║
║  ───────────────────────┼──────────────────────────────┼──────────────────────┼──────────────────║
║  Sunse + new signup    │ New signup creates NEW       │ Previous suppression │ GIULIANO §17.11  │
║                         │ profile — not re-entry       │ does not apply      │                  ║
║  ───────────────────────┼──────────────────────────────┼──────────────────────┼──────────────────║
║  GF → level migration   │ 65-75% migration target      │ Level tag reassigned │ GIULIANO §18.4   │
║  (post-purchase)        │ within 90 days               │ All flows switch     │                  ║
║                         │                              │ to new level         │                  ║
║  ───────────────────────┼──────────────────────────────┼──────────────────────┼──────────────────║
║  Emotional dimensions   │ Inform copy — never govern   │ No separate tag/flow │ GIULIANO §18.1   │
║  (Deadline/Social/      │ Phase 1: level-only          │ in Phase 1           │ R5               │
║  Overwhelmed)           │ Phase 2+: copy calibration   │                      │                  ║
║                                                                                                    ║
╚══════════════════════════════════════════════════════════════════════════════════════════════════╝
```
(Source: GIULIANO-DEMANDS.md §1.2, §2.5, §14, §17.11, §18.1, §18.4, §25; MASTER-DIAGNOSIS-COMPENDIUM.md §1.1)

### 7.6 Bot Detection & Suppression

```
╔══════════════════════════════════════════════════════════════════════════════╗
║              BOT DETECTION & SUPPRESSION SEGMENTS                             ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  SEGMENT 1: KNOWN FAKE DOMAINS                                              ║
║  ┌──────────────────────────────────────────────────────────────────────┐   ║
║  │  Contains 20+ disposable email domains (mailinator.com,             │   ║
║  │  guerrillamail.com, 10minutemail.net, etc.)                         │   ║
║  │  Action: Tag `is_bot = True` — Exclude from ALL sends              │   ║
║  └──────────────────────────────────────────────────────────────────────┘   ║
║                                                                              ║
║  SEGMENT 2: NON-ENGAGED SLEEPERS                                            ║
║  ┌──────────────────────────────────────────────────────────────────────┐   ║
║  │  Received 10+ emails, 0 opens, 0 clicks                              │   ║
║  │  Action: Tag `is_bot = True` — Exclude from ALL sends              │   ║
║  └──────────────────────────────────────────────────────────────────────┘   ║
║                                                                              ║
║  EFFECT ON SEGMENTATION:                                                    ║
║  Bot-suppressed profiles are EXCLUDED from all flow entry segments.        ║
║  They retain their avatar_level tag but never receive emails.               ║
║  No special avatar level needed — this is a deliverability layer           ║
║  above the segmentation system.                                             ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```
(Source: GIULIANO-DEMANDS.md §17.4; 12-klaviyo-implementation-guide.md §14)

### 7.7 GF Sub-Group B — Special Handling (V16)

```
╔══════════════════════════════════════════════════════════════════════════════╗
║              GF SUB-GROUP B — V16 DIAGNOSIS-REJECTER HANDLING                 ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  IDENTIFICATION (Phase 2+ only):                                            ║
║  ┌──────────────────────────────────────────────────────────────────────┐   ║
║  │  • `label_sensitive` profile property set to true                     │   ║
║  │  • Set via dedicated pop-up variant or reply detection                │   ║
║  │  • Not identified in Phase 1 — all GF is treated uniformly           │   ║
║  └──────────────────────────────────────────────────────────────────────┘   ║
║                                                                              ║
║  CONTENT RULES (MANDATORY):                                                 ║
║  ┌──────────────────────────────────────────────────────────────────────┐   ║
║  │  • NEVER use: "autism", "ASD", "Level 1/2/3"                         │   ║
║  │  • ALWAYS use: "nervous system differences" as umbrella              │   ║
║  │  • NEVER offer migration to level-specific content                    │   ║
║  │  • Convert IN GF — accept her where she is                           │   ║
║  │  • Symptom language only, always: "if your child doesn't feel..."    │   ║
║  └──────────────────────────────────────────────────────────────────────┘   ║
║                                                                              ║
║  SEGMENTATION IMPACT:                                                        ║
║  Group B subscribers are identified only in Phase 2+. Until then, they      ║
║  follow the standard GF Welcome path with R1-R6 cross-level language.       ║
║  The GF Welcome inherently uses symptom-based language, so V16 compliance  ║
║  is naturally achieved for ALL GF subscribers in Phase 1.                   ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```
(Source: GIULIANO-DEMANDS.md §1.2, §14 (V16); 12-klaviyo-implementation-guide.md §5.1)

---

## APPENDIX: SOURCE INDEX

Every decision in this document is sourced from the BrightKidCo project materials. The three-level source hierarchy is:

| Source Level | Documents | Purpose |
|-------------|-----------|---------|
| **Primary** | GIULIANO-DEMANDS.md | Binding success criteria. Ultimate authority. |
| **Secondary** | 1-full-email-strategy.md, 01-customer-avatar.md, 07-email-sequence-framework.md, 12-klaviyo-implementation-guide.md, 15-level-messaging-matrix.md, 21-customer-journey-map.md | Strategy and implementation guidance. |
| **Tertiary** | MASTER-DIAGNOSIS-COMPENDIUM.md, MASTER-INGESTION-COMPENDIUM.md, MASTER-RESEARCH-COMPENDIUM.md | Research, customer voice, competitive data. |

### Quick Reference: Section-by-Section Source Map

| Section | Primary Source | Key Subsources |
|---------|---------------|----------------|
| 1.1 L1 Sarah | GIULIANO-DEMANDS.md §1 | 01-customer-avatar.md §3.2; MASTER-DIAGNOSIS-COMPENDIUM.md §1.3; MASTER-INGESTION-COMPENDIUM.md §2.2 |
| 1.2 L2 Lisa | GIULIANO-DEMANDS.md §1, §23 | 01-customer-avatar.md §3.3; MASTER-DIAGNOSIS-COMPENDIUM.md §6.1; 15-level-messaging-matrix.md §3 |
| 1.3 L3 Maria | GIULIANO-DEMANDS.md §1, §25 | 01-customer-avatar.md §3.4; MASTER-DIAGNOSIS-COMPENDIUM.md §6.6; MASTER-INGESTION-COMPENDIUM.md §2.4 |
| 1.4 General Fallback | GIULIANO-DEMANDS.md §1.1-1.2 | MASTER-DIAGNOSIS-COMPENDIUM.md §1.3; 01-customer-avatar.md §3.5 |
| 2. Pipeline | GIULIANO-DEMANDS.md §2.1-2.5, §10, §18 | 12-klaviyo-implementation-guide.md §4-8; 07-email-sequence-framework.md §2-3 |
| 2.3 Tag Taxonomy | GIULIANO-DEMANDS.md §16.2 | 12-klaviyo-implementation-guide.md §6 |
| 2.4 Profile Properties | GIULIANO-DEMANDS.md §16.1 | 12-klaviyo-implementation-guide.md §5 |
| 2.5 Suppression Chain | GIULIANO-DEMANDS.md §2.5 | 1-full-email-strategy.md §3.3 |
| 2.6 Welcome Gateway | GIULIANO-DEMANDS.md §3 | 1-full-email-strategy.md §4.1; 07-email-sequence-framework.md §6 |
| 3.1 Self-Identification | GIULIANO-DEMANDS.md §10 | 12-klaviyo-implementation-guide.md §7; 21-customer-journey-map.md §4 |
| 3.2 Behavioral Signals | GIULIANO-DEMANDS.md §16.2 | 12-klaviyo-implementation-guide.md §6.3 |
| 3.3 PP Re-Segmentation | GIULIANO-DEMANDS.md §18.4 | 1-full-email-strategy.md §4.1 (Flow 10) |
| 4. Unknown Path | GIULIANO-DEMANDS.md §1.2, §4, §22 | 07-email-sequence-framework.md §10; 15-level-messaging-matrix.md §9 |
| 5. Post-Purchase Re-Seg | GIULIANO-DEMANDS.md §18.4, §2.2 | 07-email-sequence-framework.md §2.5 |
| 6. Cross-Level Flows | GIULIANO-DEMANDS.md §4, §13.2, §18.1 | 15-level-messaging-matrix.md §9; 1-full-email-strategy.md §6 |
| 7.1 Multi-Child | GIULIANO-DEMANDS.md §19 | MASTER-INGESTION-COMPENDIUM.md §1.1 |
| 7.2 Non-Parent | GIULIANO-DEMANDS.md §19 | 01-customer-avatar.md §2; 12-klaviyo-implementation-guide.md §5 |
| 7.3 International | GIULIANO-DEMANDS.md §14 (V22) | MASTER-DIAGNOSIS-COMPENDIUM.md §1.1; MASTER-RESEARCH-COMPENDIUM.md §1 |
| 7.4 Unengaged | GIULIANO-DEMANDS.md §12.3, §17.11 | 12-klaviyo-implementation-guide.md §8; 07-email-sequence-framework.md §11 |
| 7.5 Edge Case Matrix | GIULIANO-DEMANDS.md (various) | Multiple per row |
| 7.6 Bot Detection | GIULIANO-DEMANDS.md §17.4 | 12-klaviyo-implementation-guide.md §14 |
| 7.7 Sub-Group B (V16) | GIULIANO-DEMANDS.md §1.2, §14 | 12-klaviyo-implementation-guide.md §5.1 |

---

> **End of Segmentation Blueprint**
>
> This document is the authoritative reference for all avatar-level routing decisions in the BrightKidCo email ecosystem. Every engineer, copywriter, and reviewer must use this document to understand segmentation routing before writing or implementing any flow.
>
> When in doubt: **Uncertain audience → General Fallback**. **Uncertain tone → realism over hope**.
> **Uncertain CTA → permission-not-to-buy.** (Source: GIULIANO-DEMANDS.md §12.5)
