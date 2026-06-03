# Layer 19 Round 4: Migration Strategy — Cross-Reference Map

**BrightKidCo Email Ecosystem — Migration Cross-Reference**
**Generated:** 2026-05-25
**Cross-References:** Layer 8 (Segmentation Mechanics), Layer 16 (Flow Architecture), Layer 21 (Sub-Groups — not yet generated)
**Parent Layer:** Layer 19 (Migration Strategy)

---

## TABLE OF CONTENTS

1. [Executive Summary](#1-executive-summary)
2. [The 4 Migration Paths — Overview](#2-the-4-migration-paths--overview)
3. [Migration Path → Segment Mapping](#3-migration-path--segment-mapping)
4. [Migration Path → Flow Mapping](#4-migration-path--flow-mapping)
5. [Migration Path → Sub-Group Mapping](#5-migration-path--sub-group-mapping)
6. [Fallback Behavior Per Path](#6-fallback-behavior-per-path)
7. [Dependency Analysis](#7-dependency-analysis)
8. [Decision Tree: Migration Path Selection](#8-decision-tree-migration-path-selection)
9. [Cross-Reference Summary Matrix](#9-cross-reference-summary-matrix)

---

## 1. EXECUTIVE SUMMARY

Migration is the bridge between General Fallback (GF) — ~50% of real subscriber volume — and the level-specific flows that deliver 60-150% conversion uplift. Four distinct migration paths exist, each with different trigger mechanisms, success rates, and segment/fallback implications. This document maps each path to its target segment, destination flow, sub-group applicability, and failure behavior.

**Key finding:** Path 3 (PP-Level Detection Mail at Day 14) is the strongest migration channel at 40-50% migration rate among purchasers, but it only applies to subscribers who have already bought. For non-purchasers, Path 1 (Click-Based) is the primary migration channel at 15-25% rate.

---

## 2. THE 4 MIGRATION PATHS — OVERVIEW

| Path | Method | Migration Rate | Conversion Uplift | Time to Effect | Source Layer |
|:----:|:------:|:--------------:|:-----------------:|:--------------:|:------------:|
| 1 | **Click-Based** — Story link in GF mail | 15-25% of GF | +30-50% | Immediate on tag | L8 §8.2 |
| 2 | **Reply-Based** — NLP analysis of reply | 5-15% of GF | +20-40% | Manual review delay | L8 §8.3 |
| 3 | **PP-Level Detection Mail (Day 14)** | 40-50% of GF purchasers | +30-50% | Day 14+ | L8 §8.5 |
| 4 | **Purchase Hints** — Size/bundle inference | 10-20% of GF purchasers | +15-25% | Day of purchase | L8 §8.4 |

---

## 3. MIGRATION PATH → SEGMENT MAPPING

### 3.1 Target Segment Per Path

Each migration path moves a subscriber FROM `avatar_general` TO a specific level tag. The target segment depends on the migration signal.

| Path | Signal Source | Possible Target Segments | Confidence Threshold |
|:----:|:-------------:|:------------------------:|:--------------------:|
| 1 — Click | Which story link clicked in GF mail | `avatar_level1`, `avatar_level2`, `avatar_level3` | Self-selection (100%) |
| 2 — Reply | NLP keywords in subscriber reply | `avatar_level1`, `avatar_level2`, `avatar_level3` | Medium — false positive risk |
| 3 — PP-Level Detection | Button click in Day 14 post-purchase mail | `avatar_level1`, `avatar_level2`, `avatar_level3` | Self-selection (100%) |
| 4 — Purchase Hints | Size/bundle data from order | `avatar_level1`, `avatar_level2`, `avatar_level3` | Probabilistic — 70% min |

### 3.2 Detailed Segment Assignment Rules

**Path 1 — Click-Based:**

| Anchor Clicked | Tag Applied | Target Segment | Rationale |
|---------------|:-----------:|:--------------:|-----------|
| "Sarah's story" (verbal, under 5, almost trained) | `avatar_level1` | Level 1 — Verbal, Pre-K urgency | Parent self-identifies with verbal child profile |
| "Lisa's path" (sensory, BCBA, 5-7 yrs) | `avatar_level2` | Level 2 — Sensory-dominant | Parent recognizes sensory/BCBA context |
| "Maria's journey" (non-verbal, 7+, dignity-first) | `avatar_level3` | Level 3 — Non-verbal, high support | Parent identifies with non-verbal profile |
| "General framework" | (no change) | Stays GF | Subscriber not ready to self-identify |

**Path 2 — Reply-Based:**

| Keyword/Phrase Detected | Inferred Level | Tag Applied | Confidence |
|------------------------|:--------------:|:-----------:|:----------:|
| "Pre-K is coming", "3/4/5 years old", "Oh Crap didn't work", "Almost trained" | Level 1 | `avatar_level1` | Medium-High |
| "BCBA/ABA/OT", "5/6/7 years old", "Sensory issues", "Prompt-dependent", "Withholding" | Level 2 | `avatar_level2` | Medium-High |
| "Non-verbal/AAC", "8/9/10 years old", "Never been trained", "Specialty diapers", "Medicaid" | Level 3 | `avatar_level3` | Medium-High |
| No clear indicators | Unknown | No change (stays GF) | — |

**Path 3 — PP-Level Detection:**

| Button Selected | Tag Applied | Target Segment | Expected Distribution |
|----------------|:-----------:|:--------------:|:---------------------:|
| "Talks about potty but won't actually do it" | `avatar_level1` | Level 1 | ~35% of selectors |
| "Sensory issues, tried many methods" | `avatar_level2` | Level 2 | ~40% of selectors |
| "Non-verbal or high support needs" | `avatar_level3` | Level 3 | ~25% of selectors |
| "Still figuring out what's going on" | `avatar_general` | Stays GF | ~25-35% of recipients |

**Path 4 — Purchase Hints:**

| Purchase Signal | Inferred Level | Tag Applied | Confidence |
|----------------|:--------------:|:-----------:|:----------:|
| Underwear Size 2T-3T | Likely Level 1 (3-4 yrs) | `avatar_level1` | ~75% |
| Underwear Size 4T-5T | Level 1 or 2 (4-5 yrs) | `avatar_level1` or `avatar_level2` | ~60% — below threshold, stays GF |
| Underwear Size XL/XXL | Likely Level 3 (7+ yrs) | `avatar_level3` | ~80% |
| Bundle: 1 Pair | Level 1-2 (tentative) | No assignment | Below 70% — stays GF |
| Bundle: 3+3 | Level 2 (committed) | `avatar_level2` | ~70% |
| Bundle: 5+5 | Level 2-3 (high investment) | `avatar_level2` or `avatar_level3` | ~65% — borderline |

**Rule:** Never assign tag below 70% confidence. Stay GF if uncertain.

---

## 4. MIGRATION PATH → FLOW MAPPING

### 4.1 Post-Migration Flow Routing

After a subscriber migrates from GF to a level, they enter level-specific flows. The exact flow depends on their lifecycle stage at migration time.

| Migration Path | Subscriber State at Migration | Immediate Flow Entry | Next Flow in Sequence |
|:--------------:|:----------------------------:|:--------------------:|:---------------------:|
| 1 — Click (during Welcome) | In Welcome Flow, no purchase | Remaining Welcome Flow (level variant) | FAQ/Objection Library (level variant) |
| 1 — Click (post-Welcome) | Completed Welcome, no purchase | FAQ/Objection Library (level variant) | Winback Path B (level variant) |
| 1 — Click (post-purchase) | Has purchased | PP-Extended Education (level variant) | Winback Path A (level variant) |
| 2 — Reply (any stage) | Varies | Flows for detected level from current lifecycle point | Per level-specific sequence |
| 3 — PP-Level Detection | Day 14 post-purchase | PP-Extended Education (level variant, Day 22) | Winback Path A (level variant) |
| 4 — Purchase Hints | Day of purchase | PP-Education Day 0-21 (cross-level, already running) | PP-Extended Education (level variant, Day 22) |

### 4.2 Level-Segmented vs Cross-Level Flow Assignment

**5 flows have 4 level variants each** (affected by migration):

| Flow | Trigger | Level Variants Available | Migration Impact |
|------|---------|:------------------------:|:----------------:|
| Welcome Flow | Pop-up signup | L1, L2, L3, General | Mid-flow migration switches variant |
| PP-Extended Education | Day 22 post-purchase | L1, L2, L3, General | Migration before Day 22 determines variant |
| FAQ/Objection Library | Welcome end + no purchase | L1, L2, L3, General | Migration determines objection priority |
| Winback Path A | 90d inactive (post-buyer) | L1, L2, L3, General | Migration determines winback tone |
| Winback Path B | 60d no purchase (subscriber) | L1, L2, L3, General | Migration determines winback content |

**20 flows are cross-level (DOC 5)** — unaffected by migration:

Cart, Checkout, Browse, Order Confirmation, Shipping, Out for Delivery, Arrived & Welcome, PP-Direct Upsell, PP-Level Detection, PP-Mary S. Story, PP-Education Day 0-21, PP-Extended Upsell, PP-Mid Check-In, PP-Support At-Risk, Replenishment A/B/C, Review Request, Sunset, Referral

### 4.3 Flow Transition on Migration

```
BEFORE MIGRATION (GF subscriber):
  Welcome Flow (General variant) → FAQ/Objection Library (General) → Winback Path B (General)

AFTER MIGRATION (e.g., to Level 2):
  Welcome Flow (L2 variant, from current position) → FAQ/Objection Library (L2) → Winback Path B (L2)
  + All future level-specific flows use L2 content
  + Cross-level flows unchanged (Cart, Checkout, etc.)
```

**Klaviyo Implementation:** On tag change from `avatar_general` to `avatar_level1/2/3`:
1. Remove subscriber from General-variant flow filters
2. Add to level-specific flow filters
3. If currently mid-flow, use Klaviyo's "Smart Sending" to avoid duplicate sends
4. Tag change triggers re-evaluation of all active flow entry conditions

---

## 5. MIGRATION PATH → SUB-GROUP MAPPING

### 5.1 GF Sub-Groups (from Layer 8 §7)

| Sub-Group | % of GF | % of Total | Hidden Level | Primary Migration Path | Success Rate |
|:---------:|:-------:|:----------:|:------------:|:---------------------:|:------------:|
| A — Diagnostic Entrants | ~25% | ~10% | Likely L1 | Path 1 (Click → L1 story) | 15-25% click / 40-50% PP |
| B — Diagnosis-Rejecters | ~15% | ~6% | L1 or L2 | Path 3 only (PP-Level Detection) | <10% click / 15-25% PP |
| C — Sensory-Difference | ~25% | ~10% | SPD or L2-like | Path 1 (Click → L2 story) | 20-35% click / 40-55% PP |
| D — Overwhelmed Non-Selectors | ~25% | ~10% | Actual L1/L2/L3 | Path 3 (PP-Level Detection) | 10-15% click / 40-50% PP |
| E — Cart/Browse Without Opt-In | ~10% | ~14% | Any level | Path 4 (Purchase Hints) | <5% click / 20-30% PP |

### 5.2 Sub-Group × Migration Path Compatibility Matrix

| Sub-Group | Path 1 (Click) | Path 2 (Reply) | Path 3 (PP-Level) | Path 4 (Purchase Hints) | Best Path |
|:---------:|:--------------:|:--------------:|:-----------------:|:-----------------------:|:---------:|
| A — Diagnostic Entrants | ★★★ PRIMARY | ★★ Secondary | ★★ If purchased | ★ If purchased | **Path 1** |
| B — Diagnosis-Rejecters | ★ AVOID (pushy) | ★ AVOID (invasive) | ★★ Only gentle option | ★ If purchased | **Path 3 (gentle)** |
| C — Sensory-Difference | ★★★ PRIMARY | ★★ Secondary | ★★ If purchased | ★ If purchased | **Path 1** |
| D — Overwhelmed | ★★ Possible | ★ Low signal | ★★★ PRIMARY | ★ If purchased | **Path 3** |
| E — Cart/Browse | ★ No GF mail | ★★ If reply | ★★ If purchased | ★★★ PRIMARY | **Path 4** |

**Legend:** ★★★ = Primary path, ★★ = Secondary/possible, ★ = Limited/conditional, AVOID = Do not use for this sub-group

### 5.3 Sub-Group Routing Sequences (Post-Migration)

```
A (Diagnostic Entrants) — After migrating to L1:
  → Welcome Flow L1 (E4-E8) → FAQ L1 → Winback Path B L1
  → PP-Extended Education L1 (if purchased)

B (Diagnosis-Rejecters) — If they NEVER migrate:
  → Stay GF forever → Cross-level flows only
  → Exception: PP-Level Detection Day 14 → May still reject → Stay GF
  → IMPORTANT: Never force migration. B sub-group has <10% click migration rate.

C (Sensory-Difference) — After migrating to L2:
  → Welcome Flow L2 (E4-E8) → FAQ L2 → Winback Path B L2
  → PP-Extended Education L2 (if purchased)

D (Overwhelmed) — After migrating via PP-Level Detection:
  → PP-Extended Education (detected level) → Winback Path A (detected level)
  → Flows shift from validation-heavy to level-specific education

E (Cart/Browse) — After purchase hint assigns level:
  → PP-Extended Education (inferred level) → Winback Path A (inferred level)
  → If confidence < 70%, stay GF → Cross-level flows
```

---

## 6. FALLBACK BEHAVIOR PER PATH

### 6.1 What Happens When Migration Fails

| Path | Failure Mode | Fallback Behavior | Recovery Path |
|:----:|:-------------|:------------------|:--------------|
| 1 — Click | Subscriber never clicks any story link | Stays in GF → cross-level flows continue | Path 3 (PP-Level Detection if they purchase) or Path 2 (if they reply) |
| 2 — Reply | Reply has no clear level indicators | Stays in GF → no tag change | Path 1 (click anchors in next mail) or Path 3 |
| 2 — Reply | NLP false positive — wrong level assigned | Tag applied incorrectly → level content mismatch | Manual review catches ~85% of false positives; remaining 15% may show reduced engagement |
| 3 — PP-Level | Subscriber doesn't open Day 14 mail | Stays in GF → cross-level flows continue | Gentle reminder after 7 days; if still no response after 14 days, stays GF permanently |
| 3 — PP-Level | Subscriber opens but doesn't click any button | Stays in GF → cross-level flows continue | No further push — subscriber has explicitly declined to identify |
| 4 — Purchase Hints | Size/bundle data inconclusive (<70% confidence) | Stays in GF → no tag applied | Path 3 (PP-Level Detection at Day 14) |
| 4 — Purchase Hints | Wrong level inferred (post-assignment correction needed) | Tag manually corrected; subscriber temporarily in wrong flows | Monitor engagement drop; manual tag adjustment |

### 6.2 Cumulative Migration Funnel (Failure Cascade)

```
100% of GF subscribers at signup
    │
    ├── Path 1 (Click-Based): ~15-25% migrate
    │   └── 75-85% remain in GF
    │
    ├── Path 2 (Reply-Based): ~5-15% of remaining migrate
    │   └── Adds incremental 2-5% to migrated total
    │
    ├── Path 3 (PP-Level Detection, purchasers only):
    │   └── 40-50% of GF purchasers migrate
    │       └── Only applies to ~20-30% of GF who purchase
    │
    ├── Path 4 (Purchase Hints, purchasers only):
    │   └── 10-20% of GF purchasers migrate
    │       └── Only applies where size/bundle data is clear
    │
    └── REMAINING: ~25-35% stay in GF permanently
        ├── Includes all Sub-Group B (Diagnosis-Rejecters)
        ├── Includes GF-by-choice subscribers
        └── Served by cross-level (DOC 5) flows indefinitely
```

### 6.3 GF-to-Level Conversion Impact (Post-Migration)

| Hidden Level | GF Conversion Rate | Post-Migration Conversion | Uplift |
|:------------:|:------------------:|:-------------------------:|:------:|
| Level 1 | 5-10% | 15-25% | **+100-150%** |
| Level 2 | 5-10% | 8-15% | **+60-80%** |
| Level 3 | 5-10% | 4-8% | **+30-60%** |

---

## 7. DEPENDENCY ANALYSIS

### 7.1 Can All 4 Paths Run in Parallel?

**YES — all 4 migration paths can and should run simultaneously.** They operate on different triggers and different subscriber subsets:

| Path | Trigger Type | Subscriber Subset | Timing | Can Run with Others? |
|:----:|:------------:|:-----------------:|:------:|:--------------------:|
| 1 — Click | Link click in any GF mail | All GF subscribers | Ongoing (every mail) | ✅ Yes |
| 2 — Reply | Reply to any GF mail | All GF subscribers | Ongoing (any reply) | ✅ Yes |
| 3 — PP-Level Detection | Day 14 post-purchase mail | GF purchasers only | Day 14+ | ✅ Yes |
| 4 — Purchase Hints | Purchase data analysis | GF purchasers only | Day of purchase | ✅ Yes |

### 7.2 Path Dependencies and Ordering

```
Path 1 (Click) ←─── No dependencies. Runs on every GF mail.
Path 2 (Reply) ←─── No dependencies. Runs on every reply.
Path 3 (PP-Level Detection) ←─── Depends on: subscriber being in GF + having purchased
Path 4 (Purchase Hints) ←─── Depends on: subscriber being in GF + purchase with clear size/bundle data

Path 1 and Path 2 are INDEPENDENT of Path 3 and Path 4.
Path 3 and Path 4 operate on the SAME subscriber subset (GF purchasers) but different signals.
```

### 7.3 Priority Order When Multiple Paths Apply

If a subscriber is eligible for multiple migration paths simultaneously, apply in this priority order:

| Priority | Path | Rationale |
|:--------:|:----:|-----------|
| 1 (highest) | Path 3 — PP-Level Detection | Explicit self-selection, highest confidence, 40-50% success |
| 2 | Path 1 — Click-Based | Self-selection via story click, immediate effect |
| 3 | Path 2 — Reply-Based | NLP-inferred, requires manual review |
| 4 (lowest) | Path 4 — Purchase Hints | Probabilistic inference, lowest confidence |

**Conflict Resolution:** If Path 4 assigns a tag and then Path 3 gets a different answer from the same subscriber, Path 3 wins (explicit > inferred). The tag is overwritten.

### 7.4 Migration Path × Lifecycle Stage Dependencies

| Lifecycle Stage | Paths Available | Paths Blocked | Rationale |
|:--------------:|:---------------:|:-------------:|-----------|
| GF Welcome (Days 0-21) | Path 1, Path 2 | Path 3, Path 4 | No purchase yet |
| GF Post-Welcome (Days 22+) | Path 1, Path 2 | Path 3, Path 4 | No purchase yet |
| GF Purchaser (Days 0-13) | Path 1, Path 2, Path 4 | Path 3 | Day 14 mail not sent yet |
| GF Purchaser (Days 14+) | All 4 paths | None | All paths available |
| GF Migrated (any level) | None | All 4 | Already migrated — paths no longer apply |

---

## 8. DECISION TREE: MIGRATION PATH SELECTION

### 8.1 Primary Decision Tree

```
START: Subscriber in General Fallback (avatar_general)
  │
  ├─► Did they reply to a GF mail?
  │   ├─ YES → Path 2 (Reply-Based)
  │   │         └─ NLP analysis → Level indicators found?
  │   │             ├─ YES → Apply tag, enter level flows
  │   │             └─ NO → Stay GF, continue
  │   └─ NO → Continue ↓
  │
  ├─► Did they click a story link in a GF mail?
  │   ├─ YES → Path 1 (Click-Based)
  │   │         └─ Which story?
  │   │             ├─ Sarah (L1) → avatar_level1
  │   │             ├─ Lisa (L2) → avatar_level2
  │   │             ├─ Maria (L3) → avatar_level3
  │   │             └─ General → Stay GF
  │   └─ NO → Continue ↓
  │
  ├─► Have they purchased?
  │   ├─ YES → Is it Day 14+ post-purchase?
  │   │         ├─ YES → Path 3 (PP-Level Detection)
  │   │         │         └─ Did they click a button?
  │   │         │             ├─ YES → Apply selected tag
  │   │         │             └─ NO → Check Path 4 ↓
  │   │         └─ NO → Check Path 4 ↓
  │   │
  │   │         Path 4 (Purchase Hints)
  │   │         └─ Size/bundle data clear (≥70% confidence)?
  │   │             ├─ YES → Apply inferred tag
  │   │             └─ NO → Stay GF
  │   └─ NO → Continue ↓
  │
  └─► No migration signal available
      └─ Stay in GF → Cross-level (DOC 5) flows
         └─ Re-evaluate on next GF mail (Path 1) or reply (Path 2)
```

### 8.2 Sub-Group-Aware Decision Tree

```
START: GF subscriber identified by sub-group
  │
  ├─► Sub-Group A (Diagnostic Entrants)?
  │   └─ Primary: Path 1 (Click → L1 story)
  │      Secondary: Path 3 (PP-Level Detection if purchased)
  │      AVOID: Aggressive push — gentle education only
  │
  ├─► Sub-Group B (Diagnosis-Rejecters)?
  │   └─ Primary: Path 3 ONLY (PP-Level Detection, gentle)
  │      NEVER: Path 1 with ASD language, Path 2 with NLP
  │      Accept: May stay GF forever — this is OK
  │
  ├─► Sub-Group C (Sensory-Difference)?
  │   └─ Primary: Path 1 (Click → L2 story)
  │      Secondary: Path 3 (PP-Level Detection if purchased)
  │      Language: Science OK, no ASD labels required
  │
  ├─► Sub-Group D (Overwhelmed Non-Selectors)?
  │   └─ Primary: Path 3 (PP-Level Detection at Day 14)
  │      Secondary: Path 1 (if they click during Welcome)
  │      Tone: Validation-heavy, low pressure
  │
  └─► Sub-Group E (Cart/Browse Without Opt-In)?
      └─ Primary: Path 4 (Purchase Hints)
         Secondary: Path 3 (PP-Level Detection if purchased)
         Note: No GF Welcome mails — they entered via cart/browse
```

---

## 9. CROSS-REFERENCE SUMMARY MATRIX

### 9.1 Complete Migration Cross-Reference

| Dimension | Path 1 (Click) | Path 2 (Reply) | Path 3 (PP-Level) | Path 4 (Purchase Hints) |
|-----------|:--------------:|:--------------:|:-----------------:|:-----------------------:|
| **Source Layer** | L8 §8.2 | L8 §8.3 | L8 §8.5 | L8 §8.4 |
| **Target Segment** | L1/L2/L3 (self-selected) | L1/L2/L3 (NLP-inferred) | L1/L2/L3 (self-selected) | L1/L2/L3 (probabilistic) |
| **Confidence** | 100% (self-selection) | Medium (NLP risk) | 100% (self-selection) | 70-80% (inference) |
| **Trigger** | Story link click in GF mail | Reply to GF mail | Day 14 post-purchase mail | Purchase data |
| **Applies to Sub-Groups** | A, C, D | A, C, D | All 5 | E (primary), others if purchased |
| **Avoid for Sub-Group** | B (pushy) | B (invasive) | None | None |
| **Post-Migration Flows** | Level-specific Welcome/FAQ/Winback | Level-specific from current point | PP-Extended Education L-variant | PP-Extended Education L-variant |
| **Cross-Level Flows Unaffected** | Cart, Checkout, Browse, etc. | Cart, Checkout, Browse, etc. | Cart, Checkout, Browse, etc. | Cart, Checkout, Browse, etc. |
| **Fallback on Failure** | Stays GF → Path 3 | Stays GF → Path 1 | Stays GF permanently | Stays GF → Path 3 |
| **Can Run Parallel** | ✅ | ✅ | ✅ | ✅ |
| **Priority (if multiple)** | 2nd | 3rd | 1st | 4th |

### 9.2 Layer Connection Map

```
LAYER 8 (Segmentation)
  ├─ Pop-up → avatar_general tag (GF entry point)
  ├─ 5 GF Sub-Groups → Migration path compatibility
  ├─ 15 Klaviyo tags → Migration changes avatar_general → avatar_level1/2/3
  └─ Segment definitions → Post-migration segment membership

LAYER 16 (Flow Architecture)
  ├─ 5 level-segmented flows → Migration determines which variant
  ├─ 20 cross-level flows → Unaffected by migration
  ├─ Welcome Flow (4 variants) → Mid-flow migration switches variant
  ├─ PP-Level Detection (Flow) → Triggers Path 3 migration
  └─ Winback A/B → Level variants selected by migration status

LAYER 21 (Sub-Groups) [NOT YET GENERATED]
  ├─ Expected: Detailed sub-group behavioral profiles
  ├─ Expected: Sub-group-specific content recommendations
  └─ Expected: Sub-group migration probability models

LAYER 19 (Migration Strategy — THIS LAYER)
  └─ Bridges L8 (who migrates) ↔ L16 (where they go) ↔ L21 (sub-group behavior)
```

---

*End of Layer 19 R4: Migration Strategy — Cross-Reference*
