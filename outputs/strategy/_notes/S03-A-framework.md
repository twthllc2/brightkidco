# S03-A: Segmentation Strategy Framework — BrightKidCo Avatar System

> **Complete end-to-end segmentation framework: how the avatar system works from pop-up through post-purchase.**
> Covers all 4 avatar levels, GF 5 sub-groups, 15-tag taxonomy, routing logic, migration paths, and every edge case.
> Generated: May 28, 2026 | Phase 1 Framework | See Also: 01-customer-avatar.md, 07-email-sequence-framework.md

---

## TABLE OF CONTENTS

1. [Avatar Level Definitions](#1-avatar-level-definitions)
2. [General Fallback — 5 Sub-Groups](#2-general-fallback--5-sub-groups)
3. [Tag Taxonomy — 15 Tags, 3 Categories](#3-tag-taxonomy--15-tags-3-categories)
4. [Decision Tree: Popup → Tag → Segment → Flow → Post-Purchase](#4-decision-tree-popup--tag--segment--flow--post-purchase)
5. [Migration Strategy: GF → Level-Specific](#5-migration-strategy-gf--level-specific)
6. [Flow Routing Rules by Segment](#6-flow-routing-rules-by-segment)
7. [Cross-Level Calibration Rules (R1-R6)](#7-cross-level-calibration-rules-r1-r6)
8. [Edge Case Handling](#8-edge-case-handling)
9. [Post-Purchase Re-Segmentation Rules](#9-post-purchase-re-segmentation-rules)
10. [Source Reference Index](#10-source-reference-index)

---

## 1. AVATAR LEVEL DEFINITIONS

### 1.1 Level Comparison Overview

| Dimension | Level 1 (Sarah) | Level 2 (Lisa) | Level 3 (Maria) | General Fallback |
|-----------|:--------------:|:--------------:|:--------------:|:----------------:|
| **Audience %** | ~35% | ~40% ★ largest | ~25% | ~50% (overlaps) |
| **Child Age** | 3-5 years | 5-7 years | 6-10+ years | Variable |
| **Verbal Ability** | Verbal | Mixed verbal | Non-verbal / minimal | Unknown |
| **Support Needs** | Low | Moderate | High | Unknown |
| **Hope/Realism** | 70/30 | 40/60 | 20/80 | 50/50 |
| **Decision Period** | 2-7 days | 7-21 days | 14-30+ days | Variable |
| **Conversion** | 15-25% ★ best | 8-15% | 4-7% (highest LTV) | 7-10% |
| **Urgency Allowed** | YES (Pre-K) | Very little | NEVER | Medium |
| **Primary Emotion** | Deadline Pressure | Overwhelm | Overwhelm / Dignity | Social Pressure / Overwhelm |
| **Dominant Phase** | P2 (First Try) | P3 (Method Cycling) | P4 (Resignation) | P2/P3 |
| **Dangerous Word** | "Easy" | "Quick" | "Fix" / "Cure" | "Simple" |
| **Top Objection** | Pre-K deadline panic | "Tried everything" | "Get hopes up again?" | "Nothing works" |
| **Primary Offer** | 3+3 Bundle ($79.99) | 3+3 Bundle ($79.99) | 1 Pair ($34.99) | Cross-level 3+3 |
| **Medicaid Usage** | 10-15% | ~25% | ~40% | Variable |

**Sources:** 01-customer-avatar.md Sections 3.2-3.5; MASTER-DIAGNOSIS-COMPENDIUM.md Section 1.3

---

### 1.2 Level 1 — Sarah (~35% of Known Audience)

**Pop-up button text:** "He says 'I need to go' AFTER it happens"
**Tag applied:** `avatar_level1`
**Core pain phrase:** "He gets it, but he doesn't get it." (Source: MASTER-INGESTION-COMPENDIUM.md Section 2.2)

**Demographics:**
- Child: 3-5 years, verbal, low support needs, mainstream Pre-K/Kindergarten
- Mom: 28-40 years, ~70% working, middle to upper-middle income
- Geography: USA 60%, UK 20%, AU/NZ 15%, Canada 5%
- College-educated: ~70%

**Emotional State (Peak):** Panic/Fear (90%) — Pre-K deadline driven
**Secondary Emotion:** Guilt/Shame (80%) — social comparison
**Skepticism Level:** ~30% — still open to solutions

**Conversion Levers:**
1. Pre-K deadline urgency (strongest — "I have 6 weeks or he can't go to Pre-K")
2. "You didn't fail — you solved the wrong problem"
3. Social proof from other L1 parents
4. 60-Day Guarantee

**Tonality Calibration:**
- Science density: Medium-Low
- Empathy intensity: Medium
- CTA aggressiveness: Medium
- Sign-off style: "Talk soon,"
- Hope vs Realism: 70% Hope / 30% Realism
- Visual palette: Bright green, Pre-K imagery, forward energy

**Forbidden Language for L1:**
- "Your child is severely affected"
- "Non-verbal kids need..."
- "BCBA protocol"
- "Adult diapers"
- "Forever in pull-ups"
(Source: MASTER-INGESTION-COMPENDIUM.md Section 6.3)

**Offer Rules:**
- Primary: 3+3 Bundle ($79.99) — BESTSELLER
- Math reframes: ✅ Allowed
- Urgency framing: ✅ OK (limited time, Pre-K countdown)
- 60-Day Guarantee: ✅ Standard

**Sources:** 01-customer-avatar.md Section 3.2; doc-system-notes.md Section "Level 1"; MASTER-DIAGNOSIS-COMPENDIUM.md Sections 4.2, 4.5

---

### 1.3 Level 2 — Lisa (~40% — Largest Segment)

**Pop-up button text:** "We've tried everything. He still can't feel it."
**Tag applied:** `avatar_level2`
**Core pain phrase:** "I've tried everything from the BCBA's protocol to OT sensory work to social stories. We're stuck." (Source: MASTER-INGESTION-COMPENDIUM.md Section 2.3)

**Demographics:**
- Child: 5-7 years, mixed verbal, moderate support, IEP, BCBA
- Mom: 30-42 years, ~45% working / ~45% SAHM
- Income: Middle dominant, lower-middle ~30%, Medicaid ~25%
- SPD prevalence: ~95%

**Emotional State (Peak):** Exhaustion (95%), Skepticism (90% — highest of any segment)
**Secondary Emotion:** Frustration (90%) — 40+ methods failed
**Skepticism Level:** ~90% — burned by everything

**The Level 2 Paradox:**
- Hyper-skeptical (40+ methods failed) + Hyper-motivated (still believes solution exists)
- Marketing polish = triggers skepticism
- Mechanism specificity = converts to scientific evaluation
(Source: MASTER-DIAGNOSIS-COMPENDIUM.md Section 6.1)

**The 6-Element Formula — ALL REQUIRED for every L2 email:**
1. **Real Symptom Recognition** — naming 3+ specific failed methods
2. **Mechanism Specificity** — interoception science, not vague promises
3. **BCBA/OT Acknowledge** — "Complement, never competitor"
4. **Realistic Timelines** — "8-12 weeks, some longer"
5. **60-Day Guarantee** — risk removal
6. **Permission-Not-To-Buy** — "This might not be right for you"

**⚠ Missing any ONE = conversion breaks.**
(Source: MASTER-DIAGNOSIS-COMPENDIUM.md Section 6.1)

**Conversion Levers:**
1. Mechanism specificity (interoception science)
2. BCBA complement positioning
3. "Trained at school, not at home" paradox recognition
4. Realistic timelines + guarantee
5. Permission-not-to-buy reduces resistance

**Tonality Calibration:**
- Science density: HIGH
- Empathy intensity: HIGH
- CTA aggressiveness: LOW
- Sign-off style: "With understanding,"
- Hope vs Realism: 40% Hope / 60% Realism
- Visual palette: Muted greens, science callout boxes, sensory-friendly layouts

**Forbidden Language for L2:**
- "Easy" / "Quick" in any form
- Direct Pre-K urgency
- "Just like other kids"
- Aggressive BCBA criticism
- "Don't give up!"
- "Magic" / "Miracle"
(Source: MASTER-INGESTION-COMPENDIUM.md Section 6.3)

**Offer Rules:**
- Primary: 3+3 Bundle ($79.99)
- Math reframes: ⚠️ Carefully — "Add alongside" language mandatory
- Urgency framing: ❌ No — low-moderate at most
- 60-Day Guarantee: ✅ Critical — non-negotiable
- BCBA gatekeeper: ~65% of audience — one-page BCBA fact-sheet needed

**Sources:** 01-customer-avatar.md Section 3.3; doc-system-notes.md Section "Level 2"; MASTER-DIAGNOSIS-COMPENDIUM.md Sections 6.1-6.2

---

### 1.4 Level 3 — Maria (~25%)

**Pop-up button text:** "He's non-verbal or has high support needs"
**Tag applied:** `avatar_level3`
**Core pain phrase:** "He's never shown a single sign of feeling wet or dirty." (Source: MASTER-INGESTION-COMPENDIUM.md Section 2.4)

**⚠ CRITICAL:** Most emotionally sensitive audience. Dignity-First is non-negotiable.

**Demographics:**
- Child: 6-10+ years, non-verbal/minimal (<30 words), high support needs
- Mom: 35-48 years, ~30% working / ~60% SAHM/full-time caregiver
- Lower-middle income dominant, Medicaid ~40%
- Special needs school: ~70%, IEP with diaper support: ~95%
- SPD prevalence: ~98%

**Emotional State (Peak):** Isolation (85%) — "No one understands"
**Secondary Emotion:** Exhaustion (75%) — years of caregiving
**Hope Level:** 20% — "I've made peace with maybe never"

**The Adult Diaper Transition (Deepest Emotional Trigger):**
- Status Quo (pull-ups) → Inaction Cost → Escalation → Identity Crisis ("my child will be in diapers forever")
- Search progression: "age 4 pull-ups" → "age 6 still in diapers" → "age 8 severe autism pull-ups" → "adult diapers age 9" = IDENTITY COLLAPSE
- ⚠ Must NOT be used as fear-based selling — only acknowledged with deep empathy and dignity.
(Source: MASTER-DIAGNOSIS-COMPENDIUM.md Section 6.6)

**Conversion Levers:**
1. Dignity-first framing — "Whatever progress means for your family is enough"
2. Peer trust (Lena voice) — not marketing
3. 60-Day Guarantee — no-risk trial
4. "Late is not never" — Maureen Bennie's son trained at 9.5
5. Small-signs celebration — micro-progress validation

**Tonality Calibration:**
- Science density: Medium-High
- Empathy intensity: VERY HIGH
- CTA aggressiveness: VERY LOW (Viagra CTA)
- Sign-off style: "With care,"
- Hope vs Realism: 20% Hope / 80% Realism
- Visual palette: Earth tones, soft CTAs, NEVER countdown timers
- Cadence: E1→E2 gap 2 days instead of 1

**Forbidden Language for L3:**
- "Your child WILL train"
- "Don't give up!"
- "It's never too late!"
- "Save him from diapers" / "Free her from pull-ups"
- "Fix" / "Cure" / "Solve"
- "Independence!" without realism anchor
- Grief as sales tool
- Any math reframe
- Any urgency
(Source: MASTER-INGESTION-COMPENDIUM.md Section 6.3)

**Offer Rules:**
- Primary: 1 Pair ($34.99) ONLY — Medicaid-sensitive
- 3+3 Bundle: 🟡 Post-trust only, never push
- 5+5 Bundle: ❌ NEVER
- Math reframes: 🚫 NEVER — "$34.99 is already significant"
- Urgency: 🚫 NEVER — ZERO urgency
- Cheerleading: 🚫 NEVER
- Shipping: Never prominently mention carrier
- 60-Day Guarantee: ✅ Dignity framing — "Your judgment"

**LTV Note:** Lowest conversion rate (4-7%) but HIGHEST LTV after purchase. (Source: 01-customer-avatar.md Section 3.4)

**Sources:** 01-customer-avatar.md Section 3.4; doc-system-notes.md Section "Level 3"; MASTER-DIAGNOSIS-COMPENDIUM.md Sections 4.5, 6.6

---

### 1.5 General Fallback (GF) — Cross-Level Audience

**Pop-up button text:** "Just looking for help with my little one"
**Tag applied:** `avatar_general`
**Core pain phrase:** "These past three years have been hell." (Source: MASTER-INGESTION-COMPENDIUM.md Section 2.1)

**Key Characteristics:**
- Child age: All ages (variable)
- Hope/Realism: 50/50
- Decision Period: Variable
- Conversion: 7-10%
- Primary Emotional Dimensions: Social Pressure (PRIMARY), Overwhelm (PRIMARY)

**GF Strategy Overview:**
- All cross-level flows use GF language — the "Whether...Or...If..." pattern bridges all levels
- Three-Family Pattern mandatory (one testimonial per level)
- Symptom-first language (NEVER level labels, NEVER fixed age)
- Contains 5 distinct sub-groups (see Section 2)

**Sources:** 01-customer-avatar.md Section 3.5; MASTER-DIAGNOSIS-COMPENDIUM.md Sections 5.5-5.6; context-notes.md Section "General Fallback"

---

## 2. GENERAL FALLBACK — 5 SUB-GROUPS

| Group | % of GF | Identity | Migration Potential | Strategy |
|-------|:-------:|----------|:-------------------:|----------|
| **A: Diagnostic Entrants** | ~25% | Pre-identity, pre-diagnosis. Child not yet formally diagnosed but clearly struggling. | HIGH (post-diagnosis) | Educate first, migrate post-diagnosis. Welcome E2-E4 anchors + PP-Level Detection. |
| **B: Diagnosis-Rejecters** | ~15% | Anti-identity. Know about diagnosis but reject ASD label. Symptom language ONLY. | LOW 💀 | **Permanent GF.** Convert IN general flows. NEVER use "autism", "ASD", "Level". Use "nervous system differences" as umbrella. |
| **C: Sensory-Difference** | ~25% | Non-ASD. SPD/ADHD without autism diagnosis. Science-driven, mechanism-oriented. | LOW 💀 | **Permanent GF.** Convert IN general flows. Respond to interoception science without ASD framing. Hidden high-value segment. |
| **D: Overwhelmed Non-Selectors** | ~25% | Has ASD diagnosis but clicked past pop-up. Goldmine. | HIGHEST (40-50%) 🌟 | Gentle migration via organic story recommendations (E2-E4 anchors + PP-Level Detection). |
| **E: Cart/Browse Without Opt-In** | ~10% | Unknown profile. Entered via cookie capture from cart/browse. No intentional signup. | VARIABLE | Recovery framing, direct. Minimal educational content. |

**Critical Rule:** Groups B and C are PERMANENT GF residents. NEVER try to migrate them to level-specific flows. Convert them inside the general Fallback flows. (Source: MASTER-DIAGNOSIS-COMPENDIUM.md Section 5.6)

**GF Sub-Group B Language Rule (V16):** Use symptom language only. Never "autism", "ASD", "Level 1/2/3". Use "nervous system differences" as umbrella. (Source: GIULIANO-DEMANDS.md Section 1.2)

---

## 3. TAG TAXONOMY — 15 TAGS, 3 CATEGORIES

### 3.1 Avatar Level Tags (4 Tags)

| Tag | Trigger | Applied On | Segment Size | Primary Flow |
|-----|---------|:----------:|:------------:|-------------|
| `avatar_level1` | Pop-up button 1: "He says 'I need to go' AFTER it happens" | Signup | ~35% | Welcome L1 |
| `avatar_level2` | Pop-up button 2: "We've tried everything. He still can't feel it." | Signup | ~40% ★ LARGEST | Welcome L2 |
| `avatar_level3` | Pop-up button 3: "He's non-verbal or has high support needs" | Signup | ~25% | Welcome L3 |
| `avatar_general` | Pop-up button 4: "Just looking for help with my little one" | Signup | ~50% real volume | Welcome GF |

(Source: MASTER-DIAGNOSIS-COMPENDIUM.md Section 5.3; 07-email-sequence-framework.md Section 12.2)

### 3.2 Behavioral Tags (6 Tags)

| Tag | Trigger | When Applied | Flow Impact | Exit |
|-----|---------|:------------:|-------------|:----:|
| `welcome_completed` | Welcome Flow exit | After Welcome completes | Excludes from Welcome. Unlocks PP-Extended Ed. | Permanent |
| `welcome_completed_no_purchase` | Welcome exit, no purchase | After Welcome | Routes to FAQ/Objection Library. Enables Winback B. | Purchase or 60d inactivity |
| `post_purchase_active` | Positive engagement signals | Behavioral check | Unlocks Referral Flow at Day 30 | Engagement degrades |
| `at_risk_no_open` | 3-7 days no opens | Engagement check | Routes to PP-Support At-Risk | Open detected or 60d |
| `inactive_60_days` | 60 days no engagement | Engagement check | Routes to Winback A (buyer) or Winback B (non-buyer) | Engagement detected |
| `inactive_120_days` | 120 days no engagement | Engagement check | Routes to Sunset Flow | Suppression |

(Source: 07-email-sequence-framework.md Section 12.3; MASTER-DIAGNOSIS-COMPENDIUM.md Section 5.3)

### 3.3 Purchase Tags (5 Tags)

| Tag | Trigger | Replenishment Flow | Upsell Path |
|-----|---------|:------------------:|:-----------:|
| `buyer_1pair` | Purchased 1 Pair ($34.99) | Replenish A (Day 14) + PP-Direct Upsell (Day 1-3) | → 3+3 Bundle |
| `buyer_3plus3` | Purchased 3+3 Bundle ($79.99) | Replenish B (Day 75) + PP-Ext Upsell (Day 28) | → 5+5 Bundle |
| `buyer_5plus5` | Purchased 5+5 Bundle ($119.99) | Replenish C (Day 150) | → Accessory Cross-Sell |
| `repeat_buyer` | Multiple purchases | — | VIP track |
| `vip_buyer` | 3+ orders | — | VIP tier treatment |

(Source: 07-email-sequence-framework.md Section 12.4; MASTER-DIAGNOSIS-COMPENDIUM.md Section 5.3)

### 3.4 Tag Interaction Matrix

| Primary Tag | Secondary Tag | Routing Behavior |
|-------------|--------------|-----------------|
| `avatar_level1/2/3` | `welcome_completed` | Level-specific flows activated. Welcome flow skipped. |
| `avatar_general` | `welcome_completed` | Cross-level flows activated. General content until migration. |
| `avatar_level1/2/3` | `inactive_60_days` | Winback Path A — still level-specific |
| `avatar_general` | `inactive_60_days` | Winback Path A — cross-level |
| `avatar_level1/2/3` | `at_risk_no_open` | PP-Support At-Risk (cross-level). At-risk overrides level-specific. |
| `buyer_[X]` | `avatar_level1/2/3` | Avatar = content tonality; Transaction tag = timing |

(Source: 07-email-sequence-framework.md Section 12.5)

---

## 4. DECISION TREE: POPUP → TAG → SEGMENT → FLOW → POST-PURCHASE

### 4.1 Complete Entry-to-Exit Decision Tree

```
                                  ENTRY POINTS
                                      │
            ┌─────────────────────────┼─────────────────────┐
            │                         │                     │
            ▼                         ▼                     ▼
     ┌──────────────┐        ┌──────────────┐       ┌──────────────┐
     │ Pop-up Self- │        │ Checkout     │       │ Referral/    │
     │ ID (80%+)   │        │ Signup(~15%) │       │ Direct (~5%) │
     └───────┬──────┘        └──────┬───────┘       └──────┬───────┘
             │                      │                      │
             ▼                      ▼                      ▼
       ┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐
       │ 4 Symptom Buttons │  │ No Tag Applied   │  │ No Tag Applied   │
       │                  │  │ avatar_general   │  │ avatar_general   │
       │ Button 1 → L1    │  └────────┬─────────┘  └────────┬─────────┘
       │ Button 2 → L2    │           │                      │
       │ Button 3 → L3    │           └──────────┬───────────┘
       │ Button 4 → GF    │                      │
       └────────┬─────────┘                      ▼
                │                    ┌──────────────────────┐
                └───────────────────►│  TAG APPLIED          │
                                    │  avatar_level1/2/3/   │
                                    │  general              │
                                    └───────────┬───────────┘
                                                │
                    ┌───────────────────────────┴───────────────────┐
                    │                                               │
                    ▼                                               ▼
          ┌──────────────────┐                            ┌──────────────────┐
          │ Level Tag Present│                            │ avatar_general   │
          │ → Welcome L1/L2/ │                            │ → Welcome GF     │
          │   L3 Variant     │                            │   (Cross-level)  │
          └────────┬─────────┘                            └────────┬─────────┘
                   │                                               │
                   ▼                                               ▼
          ┌──────────────────────────────────────────────────────┐
          │              WELCOME FLOW (21 days, 8 emails)        │
          │  Level-specific variant if tag known                 │
          │  Cross-level (R1-R6) if GF                           │
          │  Migration anchors embedded in E2, E4, E6 (GF only) │
          └────────────────────────┬─────────────────────────────┘
                                   │
                    ┌──────────────┴──────────────┐
                    │                             │
                    ▼                             ▼
          ┌──────────────────┐          ┌──────────────────┐
          │ PURCHASED        │          │ NO PURCHASE      │
          │                  │          │                  │
          │ → Order Confirm  │          │ → Cart/Checkout/ │
          │ → Shipping       │          │   Browse Recovery│
          │ → Out for Deliv  │          │ → FAQ/Objection  │
          │ → Arrived        │          │ → Winback B      │
          │                  │          │ → Sunset         │
          └────────┬─────────┘          └──────────────────┘
                   │
     ┌─────────────┴─────────────────────────────────────────┐
     │              POST-PURCHASE FLOW CLUSTER                 │
     │                                                        │
     │  • PP-Direct Upsell (Day 1-3) — 1-pair buyers          │
     │  • PP-Level Detection (Day 14) — GF buyers only        │
     │  • PP-Mary S. Story (Day 3) — brand building           │
     │  • PP-Education D0-21 (4 emails) — cross-level         │
     │  • PP-Extended Upsell (Day 28-42) — level-aware        │
     │  • PP-Mid Check-In (Day 45-75) — cross-level           │
     │  • PP-Extended Ed (Day 22-49) — level-specific         │
     │  • PP-Support At-Risk (engagement trigger) — cross-lvl │
     │  • Replenish A/B/C (Day 14-150) — purchase-tag based   │
     │  • Review Request (Day 30-45) — cross-level            │
     │  • Referral (Day 30-90) — cross-level                  │
     └────────────────────────┬───────────────────────────────┘
                              │
                    ┌─────────┴─────────┐
                    │                   │
                    ▼                   ▼
          ┌──────────────────┐  ┌──────────────────┐
          │ ENGAGED          │  │ INACTIVE          │
          │ → Maintain flows │  │                   │
          │ → Continue       │  │ 90d → Winback A   │
          │   nurture        │  │      (L1/L2/L3/GF)│
          │                  │  │ 60d → Winback B   │
          │                  │  │      (never-bought)│
          │                  │  │120d → Sunset (2)  │
          │                  │  │      → Suppression │
          └──────────────────┘  └──────────────────┘
```

(Source: 07-email-sequence-framework.md Sections 2.1, 3.1; MASTER-DIAGNOSIS-COMPENDIUM.md Section 5.4)

### 4.2 Routing Rules Summary

| Condition | Action | Source |
|-----------|--------|--------|
| Pop-up self-ID → level tag present | Level-specific Welcome variant | L8 Sec 5.2 |
| Checkout/referral/direct → no tag | avatar_general → Welcome GF | L8 Sec 5.3 |
| Cart/Checkout/Browse events during Welcome | Recovery flows take priority. Welcome pauses at E3+ | L16 SR-01, SR-02 |
| Purchase during Welcome | Exit Welcome → Order Confirm → PP cluster | L16 SR-03 |
| Welcome completes without purchase | → Recovery flows → FAQ/Objection (Phase 3) | L16 Connection Rules |
| Recovery succeeds | Exit recovery → Order Confirm → PP cluster | L16 Connection Rules |
| Recovery fails | Return to Welcome remainder (GF) | L16 Connection Rules |
| 3-7 days no opens post-purchase | → PP-Support At-Risk (cross-level) | L16 SR-04 |
| 60 days no engagement | → Winback A (buyer, level-specific) or Winback B (non-buyer) | L16 SR-05 |
| 120 days no re-engagement after Winback | → Sunset Flow → Suppression | L16 SR-06, SR-07 |
| Any flow + unsubscribes | Immediate exit ALL flows. Klaviyo auto-suppresses. | L16 SR-08 |
| GF purchaser → PP-Level Detection | Day 14 → Organic migration → Apply level tag | L16 Flow 10 |

(Source: 07-email-sequence-framework.md Sections 3.1, 9.2; MASTER-DIAGNOSIS-COMPENDIUM.md Section 5.4)

---

## 5. MIGRATION STRATEGY: GF → LEVEL-SPECIFIC

### 5.1 Migration Overview

**Goal:** 65-75% of GF Groups A+D migrate to level-specific; 25-35% stay GF permanently (valid outcome for Groups B+C).

### 5.2 Four Migration Paths

| Path | Mechanism | Expected Migration | Best For | Source |
|------|-----------|:-----------------:|----------|--------|
| **1. Click-Based** | Organic story links in GF Welcome emails (E2, E4, E6). "Does this sound like your child?" → click applies level tag | 5-10% per touchpoint, cumulative 15-25% | Groups A, D | L8 Sec 5.5 |
| **2. Reply-Based** | "Reply with your child's age and what you've tried" → manual tagging by support | <5% | All groups | L8 Sec 5.5 |
| **3. Purchase-Based** | Underwear size → age hint; Bundle size → experience hint | Indirect | A, D (purchasers) | L8 Sec 5.5 |
| **4. PP-Level Detection** ★ Best | Day 14 post-purchase email with 3-4 story links. Highest conversion. | **40-50%** of GF purchasers | A, D (purchasers) | L8 Sec 5.5 |

### 5.3 Migration Touchpoint Map

| Touchpoint | Timing | Mechanism | Expected Migration | Applies To |
|------------|--------|-----------|:-----------------:|------------|
| Pop-up self-ID | Entry | 4-button selection | ~50% of entrants (initial self-ID) | ALL |
| Welcome E2 anchor | Day 1 | Story link click | 5-10% of remaining GF | Groups A, D |
| Welcome E4 anchor | Day 7 | Story link click | 5-10% of remaining GF | Groups A, D |
| Welcome E6 anchor | Day 14 | Testimonial click | 3-7% of remaining GF | Groups A, D |
| PP-Level Detection | Day 14 post-purchase | Story link click | 40-50% of GF purchasers | Groups A, D (purchasers) |
| Support reply | Any | Manual tag by support | <5% | All groups |
| **Cumulative** | | | **~65-75% of Groups A+D** | |
| **Permanent GF** | | | **~25-35%** (Groups B+C+non-migrated) | |

(Source: 07-email-sequence-framework.md Section 10.2; MASTER-DIAGNOSIS-COMPENDIUM.md Section 5.5)

### 5.4 Migration Tag Flow

```
GF Subscriber (avatar_general)
        │
        ├── Group B or C → Stay GF permanently
        │     └── Convert IN general flows only (R1-R6, Three-Family Pattern)
        │
        └── Group A or D → Migration touchpoints
              │
              ├── Click story link → Apply level tag
              │     └── Route to level-specific flows immediately
              │
              └── No click → Remain GF in Welcome
                    └── Purchase → PP-Level Detection at D14 post-purchase
                          │
                          ├── Click → Apply level tag → Level-specific PP flows
                          └── No click → Permanent GF (valid outcome)
```

(Source: 07-email-sequence-framework.md Section 10.4; MASTER-DIAGNOSIS-COMPENDIUM.md Section 5.5)

### 5.5 Migration Anchor Rules

1. **Must be organic story recommendations** — NEVER "Click here if you're Level X"
2. Mom must think "That's my kid!" for migration to work
3. **3-4 anchors per mail** targeting L1, L2, L3 scenarios
4. **Earliest migration touchpoint:** Welcome E2 (Day 1) — never before trust is established
5. **No forced migration** — if subscriber doesn't click, they stay GF permanently

(Source: MASTER-DIAGNOSIS-COMPENDIUM.md Section 5.5)

---

## 6. FLOW ROUTING RULES BY SEGMENT

### 6.1 Which Flows Are Level-Specific vs Cross-Level

| Cross-Level (R1-R6 Mandatory) | Level-Specific (4× Copy Variants) |
|---------------------------|-------------------------------|
| Cart Abandonment (3) | Welcome Flow L1/L2/L3/GF (8 each = 32) |
| Checkout Abandonment (2) | PP-Extended Education L1/L2/L3/GF (5 each = 20) |
| Browse Abandonment (3) | Winback Path A L1/L2/L3/GF (3 each = 12) |
| Order Confirmation (1) | Winback Path B L1/L2/L3/GF (3 each = 12) |
| Shipping Notification (1) | PP-Level Detection (GF only, 1) |
| Out for Delivery (1) | **Total: 77 level-specific emails** |
| Arrived & Welcome (1) | |
| PP-Direct Upsell (2) | **Level-Aware (dynamic content):** |
| PP-Mary S. Story (1) | PP-Extended Upsell (3) |
| PP-Education Day 0-21 (4) | PP-Mid Check-In (3) |
| PP-Support At-Risk (4) | |
| Replenishment A/B/C (7) | **Level-Specific Blocks:** |
| Review Request (2) | FAQ/Objection Library (6) |
| Sunset (2) | |
| Referral (3) | |
| **Total: 37 cross-level emails** | |

(Source: 07-email-sequence-framework.md Sections 4.5, 5.1; GIULIANO-DEMANDS.md Section 2.2)

### 6.2 Flow-to-Segment Routing Matrix

| Flow | Segmentation | L1 Route | L2 Route | L3 Route | GF Route |
|------|:-----------:|:--------:|:--------:|:--------:|:--------:|
| Welcome | Level-specific | Welcome L1 | Welcome L2 | Welcome L3 | Welcome GF |
| Cart Abandon | Cross-level | R1-R6 | R1-R6 | R1-R6 | R1-R6 |
| Checkout Abandon | Cross-level | R1-R6 | R1-R6 | R1-R6 | R1-R6 |
| Browse Abandon | Cross-level | R1-R6 | R1-R6 | R1-R6 | R1-R6 |
| Order Confirm | Cross-level | Neutral | Neutral | Neutral | Neutral |
| PP-Direct Upsell | Cross-level | R1-R6 | R1-R6 | N/A | R1-R6 |
| PP-Level Detect | GF only | N/A | N/A | N/A | Migration anchors |
| PP-Education D0-21 | Level-aware | L1 tone | L2 tone | L3 tone | GF tone |
| PP-Ext Ed D22+ | Level-specific | L1 deep ed | L2 deep ed | L3 deep ed | GF deep ed |
| PP-Ext Upsell | Level-aware | Urgency OK | Science framed | Dignity only | Cross-level |
| PP-Mid Check-In | Level-aware | L1 tone | L2 tone | L3 tone | GF tone |
| At-Risk | Cross-level | R1-R6 | R1-R6 | R1-R6 (gentle) | R1-R6 |
| Replenish A/B/C | Purchase-tag | buyer_1pair | buyer_3plus3 | buyer_5plus5 | buyer_1pair/3/5 |
| Winback A (post) | Level-specific | L1 winback | L2 winback | L3 winback | GF winback |
| Winback B (never) | Level-specific | L1 winback | L2 winback | L3 winback | GF winback |
| Sunset | Cross-level | R1-R6 | R1-R6 | R1-R6 | R1-R6 |
| FAQ/Objection | Level-blocks | L1 blocks | L2 blocks | L3 blocks | GF blocks |
| Referral | Cross-level | R1-R6 | R1-R6 | R1-R6 | R1-R6 |

(Source: 07-email-sequence-framework.md Sections 4.5, 5.1, 12.2)

### 6.3 Flow Priority Chain

When a subscriber qualifies for multiple flows simultaneously:

```
PRIORITY 1 (HIGHEST): OPT-OUT FLOWS
├── Unsubscribe (permanent, legal)
├── Sunset (suppression imminent)
├── PP-Support At-Risk (engagement critical)
└── Winback A/B (last reactivation attempt)

PRIORITY 2: RECOVERY & TRANSACTIONAL
├── Abandoned Cart
├── Abandoned Checkout
├── Browse Abandonment
├── Order Confirmation → Shipping → Out for Delivery

PRIORITY 3: EDUCATION & UPSELL
├── PP-Direct Upsell
├── PP-Education D0-21
├── PP-Mid Check-In
├── PP-Extended Education
└── PP-Extended Upsell

PRIORITY 4: LIFECYCLE & RETENTION
├── Review Request
├── Referral Flow
├── Replenishment A/B/C
└── FAQ/Objection Library

PRIORITY 5 (LOWEST): ACQUISITION
├── Welcome Flow (paused during higher-priority flows)
├── Cart Abandonment (moves to Priority 2 when active)
└── Browse Abandonment (moves to Priority 2 when active)
```

(Source: 07-email-sequence-framework.md Section 9.1; GIULIANO-DEMANDS.md Section 2.5)

---

## 7. CROSS-LEVEL CALIBRATION RULES (R1-R6)

Every cross-level email MUST satisfy ALL 6 rules:

| Rule | Description | Bad Example | Good Example | Source |
|:----:|-------------|-------------|--------------|--------|
| **R1** | Symptom over label — Never use level labels | "Level 2 kids need..." | "If your child doesn't feel when they need to go..." | GIULIANO-DEMANDS.md Section 4 |
| **R2** | 3-5 Recognition anchors per mail — Each level finds itself | Single story | L1 anchor: "Sits 20 minutes, nothing happens" + L2 anchor: "Pees immediately when pull-up comes off" + L3 anchor: "Doesn't react to wet diaper at all" | GIULIANO-DEMANDS.md Section 4 |
| **R3** | Age ranges over fixed ages — Don't exclude by age | "For 5-year-olds..." | "For kids 3 to 10+..." | GIULIANO-DEMANDS.md Section 4 |
| **R4** | Verbal / Non-verbal inclusivity — Cover both | "When your child says 'wet'..." | "When your child says 'wet' — or shows you with a gesture" | GIULIANO-DEMANDS.md Section 4 |
| **R5** | Timeline flexibility — No fixed promises | "In 30 days your child will..." | "Some kids 2 weeks. Others 8. Both normal." | GIULIANO-DEMANDS.md Section 4 |
| **R6** | Low-bar success metrics — Celebrate micro-progress | "Your child will be potty trained" | "Look at the wet spot for the first time. Pull at their pants. Walk toward the bathroom." | GIULIANO-DEMANDS.md Section 4 |

**⚠ Violation Cost:** Missing any rule destroys trust with that segment. R1 violation is WORST — mom feels labeled and disengages. (Source: GIULIANO-DEMANDS.md Section 4)

---

## 8. EDGE CASE HANDLING

### 8.1 Non-Standard Entry Paths

| Entry Path | Default Tag | Flow Routing | Migration Strategy | Source |
|------------|:-----------:|--------------|-------------------|--------|
| Checkout signup (pre-selected opt-in) | `avatar_general` | Welcome GF | PP-Level Detection at D14 post-purchase | L16 Flow 01 |
| Referral link click | `avatar_general` | Welcome GF | PP-Level Detection at D14 post-purchase | L16 Flow 01 |
| Manual add by support | Variable | Based on tag | Handled by support team | L16 Flow 01 |
| SMS opt-in (future) | `avatar_general` | Welcome GF | PP-Level Detection at D14 post-purchase | L16 Flow 01 |
| Facebook/IG lead form | `avatar_general` | Welcome GF | PP-Level Detection at D14 post-purchase | L16 Flow 01 |
| Gift purchase (buyer ≠ wearer) | `avatar_general` | Welcome GF | PP-Level Detection only if gift-buyer signs up | L16 Flow 01 |
| Second child (existing customer) | Existing level | Welcome variant OR skip if converted | Direct to level-specific PP flows | L16 Flow 01 |

(Source: 07-email-sequence-framework.md Section 11.1)

### 8.2 Level Tag Edge Cases

| Scenario | Handling | Source |
|----------|----------|--------|
| Subscriber has multiple children at different levels | Treat as highest-needs child. Content references "if your child..." (not age-specific). | L11 Sec 11.2 |
| Tag conflict: two level tags applied | Default to highest level (L3 > L2 > L1 > GF). Flag for support review. | L11 Sec 11.2 |
| Subscriber's child changes levels (e.g., L2→L3) | Manual tag update by support. No automated re-leveling. | L11 Sec 11.2 |
| Tag applied but subscriber doesn't match | GF sub-groups address this — cross-level content still covers | L11 Sec 11.2 |
| Subscriber identifies at pop-up but clearly wrong level | Support can re-tag manually based on conversation | L11 Sec 11.2 |

(Source: 07-email-sequence-framework.md Section 11.2)

### 8.3 Offer Edge Cases

| Scenario | Handling | Source |
|----------|----------|--------|
| Customer wants only 1 pair but sees 3+3 offer | 1 Pair offered as alternate. Never force bundle upsell. | L11 Sec 11.3 |
| Customer on Medicaid | L3 pricing ($34.99) applies. No math reframes. Single-pair option highlighted. | L11 Sec 11.3 |
| International customer (UK/AU) | Currency display varies. Copy: Use local terms (nappies, loo). | L11 Sec 11.3 |
| Gift purchase (buyer ≠ child's parent) | No level-specific content. Buyer gets transactional + basic education. | L11 Sec 11.3 |
| Guarantee claim | Processed via support@brightkidco.com. No questions asked. | L11 Sec 11.3 |

(Source: 07-email-sequence-framework.md Section 11.3)

### 8.4 Timing Edge Cases

| Scenario | Handling | Source |
|----------|----------|--------|
| Subscriber purchases immediately after signup | Welcome E1 still sends (confirmation + code). Purchase does not suppress Welcome. | L11 Sec 11.4 |
| Subscriber purchases but returns item | Continue PP flows. If full refund, move to Winback B after 60 days no reopen. | L11 Sec 11.4 |
| Multiple purchases in same flow window | Reset flow timers on latest purchase. Avoid duplicate content. | L11 Sec 11.4 |
| Subscriber re-enters through new signup | Check for existing profile. If already in flow completed, do not repeat for 90 days. | L11 Sec 11.4 |

(Source: 07-email-sequence-framework.md Section 11.4)

### 8.5 Content Edge Cases

| Scenario | Handling | Source |
|----------|----------|--------|
| Subscriber has no name (only email) | Use "Hey there," (no name = less personal, OK for GF). | L11 Sec 11.5 |
| Subscriber opted in with male parent name | Lena voice still works. Content assumes primary caregiver. Don't gender-assume in body. | L11 Sec 11.5 |
| Image doesn't load | Alt text must carry the meaning (V23). | L11 Sec 11.5 |
| Email forwarded to partner | No tracking. Content must be self-contained. Include BrightKidCo context in every email. | L11 Sec 11.5 |

(Source: 07-email-sequence-framework.md Section 11.5)

### 8.6 The Three-Family Pattern

For cross-level emails (R1-R6), always use exactly one testimonial per level:

> **L1 Anchor:** "Our son could talk about potty all day but wouldn't actually go. Three weeks with BrightKidCo and he started pausing..."
> **L2 Anchor:** "After 3 years of ABA protocols, he never felt the signal. Six weeks in, he looked down at the wet spot. First time."
> **L3 Anchor:** "Nine years. Not one sign of feeling wet. After 2 months with BrightKidCo, he walked to the bathroom after an accident."

**Rule:** All three together in cross-level mail. Each reader finds herself in one of these stories. (Source: MASTER-DIAGNOSIS-COMPENDIUM.md Section 4.6)

---

## 9. POST-PURCHASE RE-SEGMENTATION RULES

### 9.1 Purchase → Tag → Replenishment Mapping

| Purchase | Tag Applied | Replenishment Flow | Timing | Upsell Path | Source |
|----------|:-----------:|:------------------:|:------:|:-----------:|--------|
| 1 Pair ($34.99) | `buyer_1pair` | Replenish A (3 emails) | Day 14, 30, 60 | → 3+3 Bundle | L16 Flow 17 |
| 3+3 Bundle ($79.99) | `buyer_3plus3` | Replenish B (2 emails) | Day 75, 100 | → 5+5 Bundle | L16 Flow 18 |
| 5+5 Bundle ($119.99) | `buyer_5plus5` | Replenish C (2 emails) | Day 150, 180 | → Accessories | L16 Flow 19 |
| Multiple purchases | `repeat_buyer` | VIP consideration | Ongoing | VIP track | L16 Sec 12.4 |
| 3+ orders | `vip_buyer` | VIP treatment | Ongoing | Highest-tier content | L16 Sec 12.4 |

(Source: 07-email-sequence-framework.md Sections 12.4, 17-19)

### 9.2 Engagement → Behavioral Tag Flow

```
Purchase → post_purchase_active (positive engagement signals)
                            │
                     ┌──────┴──────────┐
                     │                 │
                     ▼                 ▼
               ┌──────────────┐  ┌──────────────────┐
               │ ENGAGED      │  │ 3-7d NO OPENS    │
               │ → Continue   │  │ → at_risk_no_open│
               │   nurturing  │  │ → At-Risk Flow   │
               └──────────────┘  └────────┬─────────┘
                                          │
                               ┌──────────┴──────────┐
                               │                     │
                               ▼                     ▼
                         ┌────────────┐      ┌────────────┐
                         │ RE-ENGAGED │      │ STILL NO   │
                         │ → Return to│      │ → inactive │
                         │   PP flows │      │   _60_days │
                         └────────────┘      └──────┬─────┘
                                                    │
                                        ┌───────────┴───────────┐
                                        │                       │
                                        ▼                       ▼
                                  ┌────────────┐        ┌────────────┐
                                  │ BUYER      │        │ NON-BUYER  │
                                  │ → Winback A│        │ → Winback B│
                                  │   (level-  │        │   (level-  │
                                  │   specific)│        │   specific)│
                                  └──────┬─────┘        └──────┬─────┘
                                         │                     │
                                         └──────────┬──────────┘
                                                    ▼
                                          ┌──────────────────┐
                                          │ inactive_120_days │
                                          │ → Sunset Flow    │
                                          │ → Suppression    │
                                          └──────────────────┘
```

(Source: 07-email-sequence-framework.md Sections 9.2, 12.3)

### 9.3 Post-Purchase Suppression Logic

Profiles are excluded from ALL campaigns and standard flows when:

| Condition | Mechanism | Source |
|-----------|-----------|--------|
| Unsubscribed | Klaviyo-native | L36 |
| Hard bounced (3+ times) | Klaviyo-native suppression | L36 |
| Spam complaint | Klaviyo-native suppression | L36 |
| `inactive_120_days` tag applied | After Sunset Flow completes → `suppressed = true` tag | L16 Flow 23 |
| `is_bot` tag applied | Bot detection flow | L36 |
| Role accounts (admin@, info@, sales@) | Manual suppression segment | L36 |

---

## 10. SOURCE REFERENCE INDEX

Every decision in this framework is sourced from the following documents:

| Source | Abbreviation | Key Sections |
|--------|:-----------:|--------------|
| 01-customer-avatar.md | CA01 | 3.1-3.5 (4 avatar levels), 4 (demographics), 5 (emotional state), 7 (purchase journeys) |
| 07-email-sequence-framework.md | ESF07 | 4 (segmentation matrix), 5 (flow-level matrix), 9 (suppression), 10 (migration), 11 (edge cases), 12 (tag taxonomy), 13 (offers) |
| MASTER-DIAGNOSIS-COMPENDIUM.md | DC | Section 5 (Segmentation & Flows — Layers 8, 21, 35), Section 6 (Deep Dives), Section 7 (Technical Setup) |
| MASTER-INGESTION-COMPENDIUM.md | IC | doc-system-notes.md (Lena voice, all 4 levels, conversion levers, forbidden phrases, brand constants); context-notes.md (segmentation logic, migration paths, offer rules) |
| GIULIANO-DEMANDS.md | GD | Sections 1-4 (avatar selection, tag rules, cross-level calibration R1-R6, migration strategy, flow architecture) |
| SOP: segmentation-strategy-framework | SF | 5-layer framework: engagement, value, behavioral, demographic, purchase history |
| SOP: segmentation-list-health | LH | List growth, churn, net growth, engagement velocity, data quality, suppression management |
| SOP: segmentation-rfm-predictive | RFM | RFM scoring (R1-5, F1-5, M1-5), 11 personas, predictive CLV/churn/next purchase, zero-party data |

### Layer Reference (Diagnosis Compendium)

| Layer | Topic | Section in DC |
|:-----:|-------|:------------:|
| **Layer 8** | Segmentation Mechanics — Tag taxonomy, flow routing, routing rules, decision tree | DC Section 5.1-5.5 |
| **Layer 21** | 5 Sub-Groups in General Fallback — A/B/C/D/E breakdown, migration potential, treatment rules | DC Section 5.6 |
| **Layer 35** | Avatar Scope Constraint — Phase 1 rules (5 non-negotiables), flow count (14 vs 9 P0 conflict) | DC Section 5.1, 5.4, 7.4 |

---

*End of S03-A Framework Document — Phase 1 Complete. Ready for Phase 2: Final Segmentation Strategy Document.*
