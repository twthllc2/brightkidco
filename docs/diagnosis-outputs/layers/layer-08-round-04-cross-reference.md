# Layer 8, Round 4: Segmentation Mechanics Cross-Reference
## BrightKidCo Email Ecosystem — Cross-Reference: L8 × L4 × L7 × L16
**Generated:** 2026-05-25
**Cross-references:** Layer 8 (Segmentation Mechanics) × Layer 4 (Avatar Levels) × Layer 7 (Conversion Probabilities) × Layer 16 (Flow Architecture)

---

## TABLE OF CONTENTS

1. [Master Routing Table](#1-master-routing-table)
2. [Pop-Up Choice to Tag to Level Mapping](#2-pop-up-choice-to-tag-to-level-mapping)
3. [Level-to-Segment Mapping (L4 × L8)](#3-level-to-segment-mapping-l4--l8)
4. [Tag-to-Flow Mapping (L8 × L16)](#4-tag-to-flow-mapping-l8--l16)
5. [Level-to-Conversion Probability Mapping (L4 × L7)](#5-level-to-conversion-probability-mapping-l4--l7)
6. [Segment Routing Decision Tree](#6-segment-routing-decision-tree)
7. [Behavioral Tag Routing Rules (L8 × L16)](#7-behavioral-tag-routing-rules-l8--l16)
8. [Purchase Tag Routing Rules (L8 × L16)](#8-purchase-tag-routing-rules-l8--l16)
9. [Exit Conditions Per Flow Variant](#9-exit-conditions-per-flow-variant)
10. [Gap Analysis: Routing Conflicts and Missing Links](#10-gap-analysis-routing-conflicts-and-missing-links)
11. [Recommended Routing Optimizations](#11-recommended-routing-optimizations)
12. [Full Tag Taxonomy with Routing Completeness](#12-full-tag-taxonomy-with-routing-completeness)

---

<a name="1-master-routing-table"></a>
## 1. MASTER ROUTING TABLE

The definitive routing table: every pop-up choice maps through tag → avatar level → flow variant → conversion probability → exit conditions.

### Primary Pop-Up Routing (Level-Specific)

| Pop-up Option | Klaviyo Tag | Avatar Level | Welcome Flow Variant | Conversion Prob. Range | Exit Conditions |
|---|---|---|---|---|---|
| "Talks about potty but won't actually do it" | `avatar_level1` | L1 — Verbal, Hope-Intact (~35%) | DOC 2 + DOC 1 (8 mails, 21 days) | 3-25% (varies by phase) | Purchase, unsub, flow completion, welcome_completed tag |
| "Sensory issues, tried many methods" | `avatar_level2` | L2 — Mixed, Method-Cycling (~40%) | DOC 3 + DOC 1 (8 mails, 21 days) | 2-15% (varies by phase) | Purchase, unsub, flow completion, welcome_completed tag |
| "Non-verbal or high support needs" | `avatar_level3` | L3 — Non-Verbal, Resigned (~25%) | DOC 4 + DOC 1 (8 mails, 21 days) | <1-10% (varies by phase) | Purchase, unsub, flow completion, welcome_completed tag |
| "Still figuring out what's going on" | `avatar_general` | GF — General Fallback (~50% real vol.) | DOC 5 + DOC 1 (8 mails, 21 days) | 2-12% (varies by phase) | Purchase, unsub, flow completion, welcome_completed tag; migration to level at PP-Day 14 |

### Post-Purchase Day 14 Re-Selection Routing

| Day 14 Button | Klaviyo Tag Assigned | Avatar Level | Post-Day 14 Flow Variant |
|---|---|---|---|
| "Verbal, almost trained but inconsistent" (GF→L1) | `avatar_level1` property updated | L1 — Verbal, Hope-Intact | PP-Extended Education L1 variant (DOC 2) |
| "Sensory issues, tried many methods" (GF→L2) | `avatar_level2` property updated | L2 — Mixed, Method-Cycling | PP-Extended Education L2 variant (DOC 3) |
| "Non-verbal or high support needs" (GF→L3) | `avatar_level3` property updated | L3 — Non-Verbal, Resigned | PP-Extended Education L3 variant (DOC 4) |
| No click / "I'm still figuring it out" | Stays `avatar_general` | GF — General Fallback | Stays DOC 5 for all future flows |

### Fallback/Non-Pop-Up Routing

| Entry Path | Tag Assigned | Flow Route | Conversion Prob. |
|---|---|---|---|
| Cart/Checkout/Browse without pop-up opt-in | No level tag | Cross-Level (DOC 5) — Cart/Checkout/Browse Flow | 2-8% |
| Post-purchase before Day 14 (all buyers) | `buyer_*` tags + existing level or GF | Cross-Level (DOC 5) — Post-Purchase Day 0-14 | Variable |
| Post-purchase Day 14+ with level detected | Level-specific tags | Level-specific education (DOC 2/3/4) | Level-dependent |

---

<a name="2-pop-up-choice-to-tag-to-level-mapping"></a>
## 2. POP-UP CHOICE TO TAG TO LEVEL MAPPING (L8 × L4)

### Direct Mapping (from DOC1 Section 16)

| Pop-up Button # | Button Text (Symptom-First) | Klaviyo Tag | Descriptor | Child Profile | Audience Share |
|---|---|---|---|---|---|
| 1 | "Talks about potty but won't actually do it" | `avatar_level1` | Talks about it, understands concept, can't initiate | Verbal, 3-5y, 1-3 failed attempts, Pre-K pressure | ~35% |
| 2 | "Sensory issues, tried many methods" | `avatar_level2` | Sensory barriers, years of therapy, high skepticism | Mixed verbal, 5-7y, 3-5+ attempts, BCBA context | ~40% (LARGEST) |
| 3 | "Non-verbal or high support needs" | `avatar_level3` | Never trained, profound sensory, resigned dignity focus | Non-verbal/minimal, 6-10+y, 5+yr attempts | ~25% |
| 4 | "Still figuring out what's going on" | `avatar_general` | Cross-level ambiguous — diagnosis pending, SPD, overwhelmed, label-rejecting | Mixed, 2-10+y, variable | ~50% real volume |

### Sub-Group to Hidden Level Mapping (GF Sub-Groups × Likely True Level)

| GF Sub-Group | % of GF | % of Total | Likely Hidden Level | Detection Method |
|---|---|---|---|---|
| A — Diagnostic Entrants | ~25% | ~10% | Likely L1 (verbal, early stage) | Click-based migration to L1 story |
| B — Diagnosis-Rejecters | ~15% | ~6% | L1 or L2 (may never be known) | May NEVER migrate |
| C — Sensory-Difference Parents (SPD/ADHD no ASD) | ~25% | ~10% | L2-like (sensory-dominant, mechanism-literate) | Click-based migration to L2 story |
| D — Overwhelmed Non-Selectors | ~25% | ~10% | Actual L1/L2/L3 (has ASD child, didn't select) | PP-Day 14 re-selection (~40-50% migration) |
| E — Cart/Browse Without Opt-In | ~10% | ~14% | Any level | Purchase-based hints (underwear size, bundle size) |

---

<a name="3-level-to-segment-mapping-l4--l8"></a>
## 3. LEVEL-TO-SEGMENT MAPPING (L4 × L8)

### Level 1 — Verbal, Hope-Intact (avatar_level1)

| Dimension | Value | Source |
|---|---|---|
| Klaviyo tag | `avatar_level1` | DOC1 §16 |
| avatar_level property | `"level1"` | DOC1 §19 |
| % Audience | ~35% | DOC6 §7 |
| Hope level | 70% Hope / 30% Realism | L4 §1 |
| Decision period | 2-7 days (fastest) | L4 §1 |
| Conversion range | 15-25% (Phase 2 peak) | L7 §2 |
| Urgency calibration | HIGH (Pre-K driven) | L4 §3.10 |
| Dominant phase | Phase 2 — First Attempt (~50%) | L4 §3.5 |
| Child age | 3-5 years | L4 §3 |
| Primary doc | DOC 2 + DOC 1 | DOC6 §7 |
| Symptom signature | "Gets it but doesn't get it" (Motor Planning cluster) | L4 §3.6 |
| Strongest lever | L3 — 60-Day Guarantee (Very High) | L4 §3.13 |
| Forbidden | Heavy realism, non-verbal references, 5+yr failure language | L4 §3.11 |

### Level 2 — Mixed, Method-Cycling (avatar_level2)

| Dimension | Value | Source |
|---|---|---|
| Klaviyo tag | `avatar_level2` | DOC1 §16 |
| avatar_level property | `"level2"` | DOC1 §19 |
| % Audience | ~40% (LARGEST) | DOC6 §7 |
| Hope level | 40% Hope / 60% Realism | L4 §1 |
| Decision period | 7-21 days (slow) | L4 §1 |
| Conversion range | 8-15% (Phase 3 peak) | L7 §2 |
| Urgency calibration | LOW baseline, MODERATE-HIGH spike on trigger | L7 §7 |
| Dominant phase | Phase 3 — Method Cycling (~55%) | L4 §4.6 |
| Child age | 5-7 years | L4 §4 |
| Primary doc | DOC 3 + DOC 1 | DOC6 §7 |
| Symptom signature | Prompt-dependency, witholding, sensory defensiveness | L4 §4.7 |
| Strongest lever | L1 (Very High) + L3, L4, L5 (Very High) | L4 §4.15 |
| Forbidden | Pre-K urgency, "easy/quick", BCBA criticism, fixed timeline promises | L4 §4.12 |

### Level 3 — Non-Verbal, Resigned, Dignity-Seeking (avatar_level3)

| Dimension | Value | Source |
|---|---|---|
| Klaviyo tag | `avatar_level3` | DOC1 §16 |
| avatar_level property | `"level3"` | DOC1 §19 |
| % Audience | ~25% | DOC6 §7 |
| Hope level | 20% Hope / 80% Realism | L4 §1 |
| Decision period | 14-30+ days (slowest) | L4 §1 |
| Conversion range | 4-8% (Phase 4 dominant) | L7 §2 |
| Urgency calibration | ZERO — never pressure | L7 §7 |
| Dominant phase | Phase 4 — Resignation Fork (~55%) | L4 §5.6 |
| Child age | 6-10+ years | L4 §5 |
| Primary doc | DOC 4 + DOC 1 | DOC6 §7 |
| Symptom signature | Complete signal absence, sensory overload bathroom, size progression fear | L4 §5.7 |
| Strongest lever | L4 — Lena's voice (Very High), L3 — Guarantee (Very High) | L4 §5.14 |
| Forbidden | Urgency, "don't give up!", "easy/quick", Pre-K hooks, hope-based cheerleading | L4 §5.12 |

### General Fallback — Cross-Level (avatar_general)

| Dimension | Value | Source |
|---|---|---|
| Klaviyo tag | `avatar_general` | DOC1 §16 |
| avatar_level property | `"general"` | DOC1 §19 |
| % Audience | ~50% real volume | DOC6 §7 |
| Hope level | 50/50 Hope/Realism | L4 §1 |
| Decision period | 5-14 days | L4 §1 |
| Conversion range | 2-15% (by sub-group) | L7 §2 |
| Urgency calibration | LOW-MEDIUM | L7 §7 |
| Dominant phase | Mixed (all 4 phases represented across 5 sub-groups) | L4 §6 |
| Primary doc | DOC 5 + DOC 1 | DOC6 §7 |
| Key strategy | Migration via click, reply, PP-Day 14 re-selection | L4 §6.1 |
| Strongest lever | Universal symptom hooks + "Whether...Or...If..." language | L4 §6.4 |
| Forbidden | Level labels, fixed age, diagnosis-as-prerequisite, verbal-exclusive language | L4 §6.2 |

---

<a name="4-tag-to-flow-mapping-l8--l16"></a>
## 4. TAG-TO-FLOW MAPPING (L8 × L16)

### Level-Segmented Flows (4 Variants: L1 / L2 / L3 / GF)

| Flow | L1 Variant | L2 Variant | L3 Variant | GF Variant | Trigger Conditions |
|---|---|---|---|---|---|
| **01. Welcome Flow** (8 mails, 21d) | DOC 2 + DOC 1 | DOC 3 + DOC 1 | DOC 4 + DOC 1 | DOC 5 + DOC 1 | Form submit + level tag; welcome_completed=false |
| **13. PP-Extended Education** (5 mails, Day 22+) | DOC 2 variant | DOC 3 variant | DOC 4 variant | DOC 5 variant | Level tag known + Day 22 |
| **21. Winback Path A** (3 mails, 90d no eng.) | L1 variant | L2 variant | L3 variant | GF variant | Last purchase + 90d no engagement |
| **22. Winback Path B** (3 mails, 60d no purchase) | L1 variant | L2 variant | L3 variant | GF variant | Signup + 60d no purchase |

### Tag → Flow Trigger Routing Rules

| Tag | Triggers Flow... | Audience Filter | Excluded From |
|---|---|---|---|
| `avatar_level1` | Welcome Flow L1, PP-Extended Education L1, Winback A L1, Winback B L1 | welcome_completed=false for Welcome | — |
| `avatar_level2` | Welcome Flow L2, PP-Extended Education L2, Winback A L2, Winback B L2 | welcome_completed=false for Welcome | — |
| `avatar_level3` | Welcome Flow L3, PP-Extended Education L3, Winback A L3, Winback B L3 | welcome_completed=false for Welcome | — |
| `avatar_general` | Welcome Flow GF, PP-Extended Education GF, Winback A GF, Winback B GF | welcome_completed=false for Welcome | Level-specific triggers |
| `welcome_completed` | Blocks Welcome re-trigger | welcome_completed=true | Welcome Flow |
| `welcome_completed_no_purchase` | FAQ/Objection Library trigger | welcome_completed=true + no purchase | — |
| `post_purchase_active` | PP-Support At-Risk prevention | post_purchase_active=true | PP-Support At-Risk |
| `at_risk_no_open` | PP-Support At-Risk flow | Day 3-7 no opens | — |
| `inactive_60_days` | Sunset prep, Winback Path A trigger candidate | 60 days no engagement | — |
| `inactive_120_days` | Sunset flow trigger | 120 days inactive | — |
| `buyer_1pair` | Replenishment Path A (Day 14+), PP-Education (Day 0-21) | 1-pair order | — |
| `buyer_3plus3` | Replenishment Path B (Day 75+), PP-Education (Day 0-21) | 3+3 order | — |
| `buyer_5plus5` | Replenishment Path C (Day 150+), PP-Education (Day 0-21) | 5+5 order | — |
| `repeat_buyer` | VIP tracking, cross-sell targeting | >1 purchase | — |
| `vip_buyer` | VIP-specific offers, referral flow prioritization | 3+ orders | — |

### Cross-Level Flows (No Tag Filter — All Subscribers)

| Flow | Trigger | Segmentation Rule | Mail Count |
|---|---|---|---|
| **02. Cart Abandonment** | Cart Abandoned + no purchase 24h | Cross-level even if tag known (speed > segmentation) | 3 |
| **03. Checkout Abandonment** | Started Checkout + no purchase 1h | Cross-level even if tag known | 2 |
| **04. Browse Abandonment** | Viewed Product + no cart 24h | Cross-level even if tag known | 3 |
| **05. Order Confirmation** | Order Placed (Shopify → Klaviyo) | All buyers, cross-level | 1 |
| **06. Shipping Notification** | Order Fulfilled | All buyers, cross-level | 1 |
| **07. Out for Delivery** | Carrier "Out for Delivery" | All buyers, cross-level (optional) | 1 |
| **08. Arrived & Welcome** | Carrier "Delivered" | All buyers, cross-level | 1 |
| **09. PP-Direct Upsell** | Order Placed + Day 1-3 | All buyers, cross-level | 2 |
| **10. PP-Mary S. Story** | Order Placed + Day 3 | All buyers, cross-level | 1 |
| **11. PP-Education Day 0-21** | Order Placed + rolling days | All buyers, cross-level | 4 |
| **12. PP-Level Detection** | Order Placed + Day 14 + no level tag | GF only (avatar_level=unknown) | 1 |
| **14. PP-Extended Upsell** | Day 28 + level tag | Level-aware (uses level for content) | 3 |
| **15. PP-Mid Check-In** | Day 30-60 | All buyers, cross-level | 3 |
| **16. PP-Support At-Risk** | Day 3-7 no opens | All buyers, cross-level | 4 |
| **17. Replenishment Path A** | 1-pair order + Day 14 | Buyer-specific, cross-level content | 3 |
| **18. Replenishment Path B** | 3+3 order + Day 75 | Buyer-specific, cross-level content | 2 |
| **19. Replenishment Path C** | 5+5 order + Day 150 | Buyer-specific, cross-level content | 2 |
| **20. Review Request** | Day 30 post-purchase | All buyers, cross-level | 2 |
| **23. Sunset** | 120 days inactive | All, cross-level | 2 |
| **24. FAQ/Objection Library** | Welcome end + no purchase | Cross-level (but can use level if known) | 6 |
| **25. Referral Flow** | Day 30 + positive engagement | All engaged buyers, cross-level | 3 |

### Tag → Flow Architecture Summary

| Tag | Primary Flow | Secondary Flow(s) | Route Rule |
|---|---|---|---|
| `avatar_level1` | Welcome L1 (DOC 2) | PP-Extended Education L1, Winback A/B L1, level-aware upsell | Level-specific once assigned |
| `avatar_level2` | Welcome L2 (DOC 3) | PP-Extended Education L2, Winback A/B L2, level-aware upsell | Level-specific once assigned |
| `avatar_level3` | Welcome L3 (DOC 4) | PP-Extended Education L3, Winback A/B L3, level-aware upsell | Level-specific once assigned |
| `avatar_general` | Welcome GF (DOC 5) | PP-Day 14 re-selection → can migrate to L1/L2/L3 | Cross-level until migration |
| `welcome_completed` | Blocks welcome re-entry | FAQ/Objection (if no purchase), or flow exit | Gate keeper |
| `buyer_1pair` | PP-Education 0-21 | Replenishment A (Day 14), Checkout recovery | Order-based |
| `buyer_3plus3` | PP-Education 0-21 | Replenishment B (Day 75), Upsell | Order-based |
| `buyer_5plus5` | PP-Education 0-21 | Replenishment C (Day 150), Referral | Order-based |
| `at_risk_no_open` | PP-Support At-Risk | → `inactive_60_days` → `inactive_120_days` → Sunset | Engagement cascade |
| `inactive_60_days` | Winback A (if past buyer) or Winback B (if never bought) | → `inactive_120_days` → Sunset | Re-engagement cascade |
| `inactive_120_days` | Sunset (2 mails) | Exit ecosystem | Terminal tag |

---

<a name="5-level-to-conversion-probability-mapping-l4--l7"></a>
## 5. LEVEL-TO-CONVERSION PROBABILITY MAPPING (L4 × L7)

### Conversion Probability by Level × Phase

| Level | Phase 1 | Phase 2 | Phase 3 | Phase 4 | Weighted Avg. |
|---|---|---|---|---|---|
| L1 — avatar_level1 | 3-5% | **15-25%** ★★★ | 10-18% ★★ | 5-8% | ~12-18% |
| L2 — avatar_level2 | ~2% | 10-15% ★★ | **8-15%** ★★ | 6-10% ★ | ~7-12% |
| L3 — avatar_level3 | <1% | 3-5% | 5-10% ★ | **4-8%** ★ | ~4-7% |
| GF — avatar_general | 2-4% | 8-12% | 6-12% | 3-6% | ~5-9% |

### Conversion Probability by Tag (Weighted)

| Klaviyo Tag | Min Conv. | Max Conv. | Best Case | Dominant Phase | Revenue Rank |
|---|---|---|---|---|---|
| `avatar_level1` | 3% | 25% | L1×P2 (15-25%) | Phase 2 (~50%) | #1 — Cash Cow |
| `avatar_level2` | 2% | 15% | L2×P3 (8-15%) | Phase 3 (~55%) | #2 — Volume Engine |
| `avatar_level3` | <1% | 10% | L3×P4 (4-8%) | Phase 4 (~55%) | #5 — High-LTV Niche |
| `avatar_general` | 2% | 15% | GF sub-group C (8-15%) | Mixed | #3 — Variable |

### Conversion Lever Application by Tag (L4 × L7)

| Lever | L1 (avatar_level1) | L2 (avatar_level2) | L3 (avatar_level3) | GF (avatar_general) |
|---|---|---|---|---|
| L1 — "It's not the method" | Medium-High | **Very High** | **High** | Medium-High |
| L2 — "Pull-ups make this worse" | Medium | **High** | Medium (CAUTION) | Medium |
| L3 — "60-Day Guarantee" | **Very High** | **Very High** | **Very High** | **Very High** |
| L4 — "Lena's two autistic sons" | **High** | **Very High** | **Very High** | **High** |
| L5 — "49% SPARK Stat" | Medium | **Very High** | Medium-High | Medium |

### Urgency × Conversion Rate by Tag

| Tag | Urgency Level | Urgency Source | Effect on Conv. | Can Use Deadline? |
|---|---|---|---|---|
| `avatar_level1` | HIGH (Phase 2), LOW (Phase 3) | Pre-K deadline, school transition | +5-10% when urgency matches phase | Yes (L1×P2 only) |
| `avatar_level2` | LOW base, MODERATE spike | Withholding crisis, school change | +3-5% on triggered events | Conditional |
| `avatar_level3` | ZERO ever | Size progression fear (silent) | Never push urgency — kills conversion | NEVER |
| `avatar_general` | LOW-MEDIUM | Varies by sub-group | +2-4% for C (science-urgency) | Weak |

---

<a name="6-segment-routing-decision-tree"></a>
## 6. SEGMENT ROUTING DECISION TREE

```
VISITOR lands on site
│
├─ POP-UP SHOWN (8-15s or exit-intent)
│  │
│  ├─ Button 1 clicked ──→ `avatar_level1` tag ──→ Welcome Flow L1 (DOC 2)
│  │                                              8 mails, 21 days
│  │                                              Conversion: 15-25% (P2 peak)
│  │                                              ↓
│  │                                              Purchase? ──Yes──→ PP-Day 0-14 (DOC 5)
│  │                                              │                  → Day 14: Level detection
│  │                                              │                  → Day 22+: PP-Extended Ed L1
│  │                                              No
│  │                                              └──→ FAQ/Objection Library
│  │
│  ├─ Button 2 clicked ──→ `avatar_level2` tag ──→ Welcome Flow L2 (DOC 3)
│  │                                              8 mails, 21 days
│  │                                              Conversion: 8-15% (P3 peak)
│  │                                              ↓
│  │                                              Purchase? ──Yes──→ PP-Day 0-14 (DOC 5)
│  │                                              │                  → Day 14: Level detection
│  │                                              │                  → Day 22+: PP-Extended Ed L2
│  │                                              No
│  │                                              └──→ FAQ/Objection Library
│  │
│  ├─ Button 3 clicked ──→ `avatar_level3` tag ──→ Welcome Flow L3 (DOC 4)
│  │                                              8 mails, 21 days
│  │                                              Conversion: 4-8% (P4 peak)
│  │                                              ↓
│  │                                              Purchase? ──Yes──→ PP-Day 0-14 (DOC 5)
│  │                                              │                  → Day 14: Level detection
│  │                                              │                  → Day 22+: PP-Extended Ed L3
│  │                                              No
│  │                                              └──→ FAQ/Objection Library
│  │
│  └─ Button 4 clicked ──→ `avatar_general` tag ──→ Welcome Flow GF (DOC 5)
│                                                  8 mails, 21 days
│                                                  Conversion: 2-12% (varies)
│                                                  ↓
│                                                  Purchase? ──Yes──→ PP-Day 0-14 (DOC 5)
│                                                  │                  → Day 14: PP-Level Detection
│                                                  │                  ├─ Click L1 → avatar_level1 → migrate to L1 flows
│                                                  │                  ├─ Click L2 → avatar_level2 → migrate to L2 flows
│                                                  │                  ├─ Click L3 → avatar_level3 → migrate to L3 flows
│                                                  │                  └─ No click → stays avatar_general → DOC 5
│                                                  │
│                                                  No
│                                                  └──→ Winback Path B (60d no purchase)
│
├─ POP-UP IGNORED, Cart action
│  └─ No level tag ──→ Cart/Checkout/Browse (DOC 5)
│                      Conversion: 2-8%
│                      └── Purchase? → PP-Day 0-14 → Level detection at Day 14
│
└─ POST-PURCHASE (all paths converge)
   │
   ├─ DAY 0-13: Cross-Level Onboarding (DOC 5)
   │  ├─ Order Confirmation (Day 0)
   │  ├─ Shipping Notification (Day 1-2)
   │  ├─ Arrived & Welcome (Day 2-7)
   │  ├─ PP-Direct Upsell (Day 1-3)
   │  ├─ PP-Mary S. Story (Day 3)
   │  └─ PP-Education Day 0-21 (rolling)
   │
   ├─ DAY 14: PP-Level Detection (if avatar_general/unknown)
   │  └─ Re-selection button → level tag migration
   │
   ├─ DAY 22+: PP-Extended Education (level-specific if known)
   │
   ├─ DAY 28+: PP-Extended Upsell
   │
   ├─ DAY 30-60: PP-Mid Check-In
   │
   ├─ DAY 90+: Winback Path A (if past buyer, inactive)
   │  L1/L2/L3/GF variant based on known tag
   │
   ├─ DAY 120 INACTIVE: Sunset (2 mails → exit)
   │
   └─ ONGOING: Behavioral tag cascade
      at_risk_no_open → inactive_60_days → inactive_120_days → Sunset
```

---

<a name="7-behavioral-tag-routing-rules-l8--l16"></a>
## 7. BEHAVIORAL TAG ROUTING RULES (L8 × L16)

### Welcome Flow Lifecycle Tags

| Tag | Applied When | Routing Effect | Exit Action |
|---|---|---|---|
| `welcome_completed` | After all 8 Welcome mails sent (or purchase during Welcome) | Blocks Welcome re-trigger. Routes to: if no purchase → FAQ/Objection; if purchase → PP flows | `welcome_completed=true` is an exit gate, not an entry |
| `welcome_completed_no_purchase` | Welcome completed + no purchase made | Triggers FAQ/Objection Library (6 mails) | Purchase or all 6 mails sent |

### Engagement Cascade Tags (Risk Ladder)

| Tag | Applied When | Routing | Next Step |
|---|---|---|---|
| `post_purchase_active` | Buyer engaging with PP mails (opens + clicks) | Keeps in active PP flows. Blocks PP-Support At-Risk. | Continue nurture; if `post_purchase_active` persists → referral flow eligibility |
| `at_risk_no_open` | No opens for 3-7 consecutive days | Triggers PP-Support At-Risk flow (4 mails) | If re-engages → remove tag, continue normal flow. If no engagement → `inactive_60_days` |
| `inactive_60_days` | 60 days without email engagement | Routes to Winback Path A (if past buyer) or Winback Path B (if never bought) | If re-engages → remove tag, return to active nurture. If no engagement → `inactive_120_days` |
| `inactive_120_days` | 120 days without engagement | Triggers Sunset flow (2 mails) | Final re-engagement attempt. If no response → exit ecosystem |

### Critical Behavioral Routing Gaps

| Gap | Detail | Severity |
|---|---|---|
| **No `welcome_completed` for GF specifically** | GF subscribers who complete Welcome GF but remain unleveled have no specialized post-welcome path beyond FAQ/Objection | 🟡 HIGH |
| **No time-based tag removal** | Tags like `at_risk_no_open` may accumulate; there's no mechanism to remove them after re-engagement | 🟡 HIGH |
| **No phase detection tags** | The 4 emotional phases (P1-P4) are not encoded as tags; level tags alone don't capture phase-specific conversion optimal timing | 🔴 CRITICAL |

---

<a name="8-purchase-tag-routing-rules-l8--l16"></a>
## 8. PURCHASE TAG ROUTING RULES (L8 × L16)

| Purchase Tag | Trigger | Flow Route | Conversion Intent |
|---|---|---|---|
| `buyer_1pair` | Order placed — 1 pair ($34.99) | PP-Education Day 0-21 → Replenishment Path A (Day 14) → Cross-Sell for 3+3 | Upgrade to 3+3 bundle |
| `buyer_3plus3` | Order placed — 3+3 bundle ($79.99) | PP-Education Day 0-21 → Replenishment Path B (Day 75) → Referral Flow (Day 30+) | Re-order at 75 days |
| `buyer_5plus5` | Order placed — 5+5 bundle ($119.99) | PP-Education Day 0-21 → Replenishment Path C (Day 150) → VIP treatment | Loyalty, referral |
| `repeat_buyer` | 2+ purchases | Cross-sell targeting, VIP tagging consideration | Increase LTV |
| `vip_buyer` | 3+ orders | Priority referral flow, exclusive offers | High-LTV retention |

### Purchase Tag × Level Intersection

| Purchase Size | L1 Buyer % (est.) | L2 Buyer % (est.) | L3 Buyer % (est.) | GF Buyer % (est.) | Best Flow for This Combo |
|---|---|---|---|---|---|
| 1 Pair ($34.99) | ~35% | ~30% | ~15% | ~20% | Replenishment A + Cross-sell to 3+3 |
| 3+3 ($79.99) | ~40% | ~35% | ~10% | ~15% | Replenishment B + Level-specific upsell |
| 5+5 ($119.99) | ~25% | ~40% | ~15% | ~20% | Replenishment C + Referral + VIP |
| Repeat buyer | ~30% | ~35% | ~20% | ~15% | Level-specific winback protection |

---

<a name="9-exit-conditions-per-flow-variant"></a>
## 9. EXIT CONDITIONS PER FLOW VARIANT

### Universal Exit Conditions (All Flows)

1. **Made a purchase** (for conversion flows) — exit immediately, route to post-purchase
2. **Unsubscribed** — exit all flows
3. **Already in higher-priority flow** — overlap protection
4. **Tag condition changes** — e.g., `welcome_completed=true` prevents re-entry

### Flow-Specific Exit Conditions (with Level Variant Details)

| Flow | L1 Variant Exit | L2 Variant Exit | L3 Variant Exit | GF Variant Exit |
|---|---|---|---|---|
| **Welcome** (8 mails, 21d) | Purchase, all 8 sent, `welcome_completed` set | Same — but decision period (7-21d) may still be active when flow ends | Same — decision period (14-30d) exceeds flow length → ⚠️ CONVERSION LOSS | Same; also: migration at PP-Day 14 may change tag mid-post-purchase |
| **Cart Abandonment** (3, ~72h) | Purchase, cart recovery, all 3 sent | Same | Same | Same |
| **PP-Level Detection** (1, Day 14) | Button click → level tag set; no click → stays GF | Same | Same | Same — if no click after 14d timeout |
| **PP-Extended Education** (5, Day 22+) | Re-purchase, 5 mails sent | Same | Same | Same |
| **Winback A** (3, 90d+) | Re-purchase, all 3 sent | Same | Same | Same |
| **Winback B** (3, 60d+) | Purchase, all 3 sent | Same | Same | Same |
| **Sunset** (2, 120d+) | Engagement, 2 mails sent | Same — ⚠️ L3 may need longer sunset timeline | Same — ⚠️ L3 may need longer sunset timeline | Same |
| **Replenishment A** (3, Day 14+) | Re-order, all 3 sent | Same | Same | Same |

### Decision Period × Flow Timeline Conflicts

| Level | Decision Period | Welcome Flow Length | Gap | Impact |
|---|---|---|---|---|
| L1 | 2-7 days | 21 days (8 mails) | None — conversion window fits within flow | ✅ No gap |
| L2 | 7-21 days | 21 days (8 mails) | Edge — conversion window barely fits | 🟡 Tight — conversion may happen in last mails |
| L3 | 14-30+ days | 21 days (8 mails) | **SIGNIFICANT** — 14-30d decision exceeds 21d flow | 🔴 WARNING — L3 subscribers may decide AFTER Welcome Flow ends |
| GF | 5-14 days | 21 days (8 mails) | None for most sub-groups | ✅ Mostly OK |

**Mitigation:** Extend Welcome Flow for L2/L3 detected segments, or add dedicated post-welcome nurture sequences (post-welcome bridge).

---

<a name="10-gap-analysis-routing-conflicts-and-missing-links"></a>
## 10. GAP ANALYSIS: ROUTING CONFLICTS AND MISSING LINKS

### 🔴 Critical Gaps

| # | Gap | L8 Element | Missing Link | Impact |
|---|---|---|---|---|
| G1 | **Phase detection absent from segmentation** | Tags capture Level (L1/L2/L3/GF) but NOT Phase (P1/P2/P3/P4) | No `emotion_phase` property or tag | A Level 1 subscriber in Phase 1 (3-5% conv.) gets same Welcome Flow as Level 1 in Phase 2 (15-25% conv.) — suboptimal for both |
| G2 | **No behavioral phase inference system** | Engagement signals exist (opens, clicks, at-risk) but are NOT mapped to phase detection | No link between click patterns and phase-specific content | Cannot dynamically adjust urgency or lever sequence mid-flow |
| G3 | **L3 decision period > Welcome Flow duration** | Welcome Flow fixed at 21 days | L3 decision period is 14-30+ days, exceeding flow length | L3 subscribers who decide AFTER Welcome Flow ends have no conversion path until Winback |
| G4 | **50% of volume unleveled** | `avatar_general` has no level tag | No fallback detection system for ~50% of real volume | Half of subscribers default to cross-level — suboptimal by definition |

### 🟡 High Gaps

| # | Gap | Detail | Impact |
|---|---|---|---|
| G5 | **No behavioral tag → winback timing alignment** | `at_risk_no_open` → 3-7 days may be too aggressive for L3 long decision cycles | L3 subscribers tagged at-risk while still deciding → early winback push can damage trust |
| G6 | **GF sub-groups have no distinct routing** | All 5 GF sub-groups get identical DOC 5 treatment | Sub-group C (SPD, 8-15% conv.) and sub-group B (Diagnosis-Rejecters, 2-5% conv.) get same emails |
| G7 | **Purchase tag × level tag not cross-referenced** | `buyer_1pair` exists but no `buyer_1pair × avatar_level2` segment | Cross-sell to 3+3 may use wrong urgency level for L2 buyer |
| G8 | **No `welcome_completed` GF-to-level migration trigger** | After Welcome GF completes, no tag distinguishes GF-by-default from GF-by-temporary-state | GF subscribers who would have clicked L2, etc. have no second chance until PP-Day 14 |

### 🟢 Medium Gaps

| # | Gap | Detail | Impact |
|---|---|---|---|
| G9 | **Click-based migration tags not specified** | "Click on L1 story → tag set" is mentioned but the specific tag is never named | No clear Klaviyo mechanism for migration tracking |
| G10 | **Reply-based migration: no automated tagging** | Reply analysis is manual — no automation path documented | Scalability bottleneck for large lists |
| G11 | **No tag for "migrated from GF"** | Once GF migrates to L1, original GF origin is lost | Cannot analyze GF→L1 conversion efficacy |
| G12 | **No cross-flow suppression rules documented** | What happens when subscriber qualifies for Welcome + Cart Abandonment simultaneously? | Potential overlap/duplicate mails |

### 🔴 Critical: Routing Conflicts

| Conflict | Flows Involved | Scenario | Resolution |
|---|---|---|---|
| C1 | Welcome Flow (level-specific) vs Cart Abandonment (cross-level) | Subscriber receives Welcome L2 at Day 3, adds item to cart, then abandons | Rule: high-velocity flow (Cart) takes priority over Welcome during active cart. Welcome pauses? Or both send? Currently: "Cross-Level even if tag known (speed > segmentation)" — but no pause mechanism documented. |
| C2 | PP-Education 0-21 vs PP-Level Detection (Day 14) | Both fire at Day 14 post-purchase for GF subscribers | Both are cross-level DOC 5 — should sequence: Level Detection takes precedence, then Education resumes |
| C3 | PP-Extended Education vs Winback | Subscriber with level tag goes inactive (90d) just as PP-Extended Education (Day 22+) is mid-flow | Winback should pause/supersede Extended Education; no rule documented |
| C4 | Replenishment A (Day 14+) vs PP-Level Detection (Day 14) | 1-pair buyer (buyer_1pair) who is also GF → both fire at Day 14 | Critical conflict — subscriber gets 2 mails same day. Replenishment should defer to Level Detection |
| C5 | Welcome Flow E6-E8 vs FAQ/Objection | Welcome at E6-E8 + no purchase → FAQ/Objection triggers immediately after Welcome ends | Clean handoff — this is correct. But FAQ/Objection is cross-level for GF and level-specific for detected levels; no mid-flow tag transition documented |

---

<a name="11-recommended-routing-optimizations"></a>
## 11. RECOMMENDED ROUTING OPTIMIZATIONS

### P0 — Must Fix (Pre-Launch)

**R1: Add `emotion_phase` property to Klaviyo profiles.**
- New custom property: `emotion_phase` (string: `"phase1"` / `"phase2"` / `"phase3"` / `"phase4"` / `"unknown"`)
- Detection via: child age hint (from purchase size), engagement cluster analysis, or optional 2nd pop-up question
- Allows Welcome Flow variant optimization per phase within each level

**R2: Create phase-inferred routing rules.**
```
Level + Phase         → Lever Sequence           → Welcome E3-E5 Timing
L1 × P2 (Cash Cow)    → L1 → L4 → L3 → L5       → E3 (Day 3) — fastest
L2 × P3 (Vol. Engine) → L1 → L5 → L2 → L3 → L4  → E4-E5 (Day 7-10) — slowest
L3 × P4 (Dignity)     → L4 → L1 → L3             → E6+ (Day 14+) — never push
L1 × P1 (Early)       → L5 → L4 → L1 → L3        → No CTA before E4
```

**R3: Extend Welcome Flow for L2/L3 segments.**
- L2: Welcome Flow extends to 10 mails over 28 days (matches 7-21 day decision period)
- L3: Welcome Flow extends to 12 mails over 35 days (matches 14-30+ day decision period)
- GF: Standard 8-mail Welcome Flow with phase-optional extension

**R4: Fix routing conflict C4 (Replenishment vs Level Detection at Day 14).**
- Rule: PP-Level Detection (Day 14) takes absolute priority over Replenishment for GF subscribers
- Replenishment A should delay by 24h if subscriber is also GF at Day 14
- Once level is detected, Replenishment continues with the correct level tag

### P1 — Should Fix (Launch + 30 Days)

**R5: Create 5 behavioral micro-segments with distinct routing.**
- Add engagement-score property (numeric, 0-100)
- Route high-engagement subscribers to faster conversion sequences
- Route no-engagement L3 subscribers to dignity-preserving slower cadence (not Winback)

**R6: Document explicit cross-flow suppression rules.**
| Primary Flow | Suppresses | Exceptions |
|---|---|---|
| Cart Abandonment | Welcome Flow during active cart lifetime | If Welcome E1-E2 already sent, continue Welcome, add Cart as parallel |
| PP-Level Detection | All other Day 14 mails (Replenishment, Education) | Level Detection fires first; others delay 24h |
| Winback | All nurture flows | Winback is re-engagement — pause Extended Education |
| Sunset | ALL flows | Terminal — only Sunset mails send |

**R7: Create GF sub-group routing with engagement-based branching.**
```
Welcome GF (DOC 5) — 8 mails, 21 days
│
├─ Clicks: symptom-cluster links (age-specific, verbal-specific, sensory-specific)
│  └─→ Inferred sub-group → click-based migration tag
│     ├─ Sub-group A clicks → `migrating_level1` (future avatar_level1 after 2nd confirm)
│     ├─ Sub-group C clicks → `migrating_level2` (science content resonates)
│     └─ Sub-group B/D/E clicks → stays `avatar_general`
│
└─ No clicks → stays `avatar_general` → PP-Day 14 detection
```

### P2 — Consider (Phase 2+)

**R8: Add purchase tag × level tag intersection segments.**
- Create `buyer_1pair_level1`, `buyer_1pair_level2`, etc. as computed segments
- Use for targeted cross-sell with appropriate urgency calibration

**R9: Create re-engagement tags for behavioral cascade.**
- `reengaged_after_risk` — removed from at_risk cascade
- `reengaged_after_winback` — returned from winback
- Use these for accelerated conversion sequences (momentum-based)

**R10: Build routing conflict detection as a recurring maintenance task.**
- Weekly audit: verify no subscriber can receive 2+ mails with conflicting tonality (e.g., L1 urgency + L2 science) within 24h
- Rule: any subscriber receiving 2+ mails in same day gets priority-ordered delivery

---

<a name="12-full-tag-taxonomy-with-routing-completeness"></a>
## 12. FULL TAG TAXONOMY WITH ROUTING COMPLETENESS

| Tag | Category | Level Mapping | Flow Route | Conv. Prob. Assigned | Exit Conditions Defined | Completeness |
|---|---|---|---|---|---|---|
| `avatar_level1` | Pop-up | L1 — Verbal | Welcome L1, PP-Ext. Ed L1, Winback L1, upsell level-aware | ✅ Yes (15-25% P2 peak) | ✅ Yes | ✅ Complete |
| `avatar_level2` | Pop-up | L2 — Mixed | Welcome L2, PP-Ext. Ed L2, Winback L2, upsell level-aware | ✅ Yes (8-15% P3 peak) | ✅ Yes | ✅ Complete |
| `avatar_level3` | Pop-up | L3 — Non-Verbal | Welcome L3, PP-Ext. Ed L3, Winback L3, upsell level-aware | ✅ Yes (4-8% P4 peak) | ✅ Yes | ✅ Complete |
| `avatar_general` | Pop-up | GF — Cross | Welcome GF, PP-Day 14, PP-Ext. Ed GF, Winback GF | ✅ Yes (2-12% variable) | ✅ Yes | ✅ Complete |
| `welcome_completed` | Behavioral | All | Blocks Welcome re-entry | ⬜ N/A | ✅ Yes | ✅ Complete |
| `welcome_completed_no_purchase` | Behavioral | All | FAQ/Objection Library trigger | ⬜ N/A | ✅ Yes | ✅ Complete |
| `post_purchase_active` | Behavioral | All | Blocks at-risk tagging | ⬜ N/A | ✅ Yes | ✅ Complete |
| `at_risk_no_open` | Behavioral | All → P-Support At-Risk | PP-Support At-Risk → inactive_60d | ⬜ N/A | ⬜ Partial — no time-based removal rule | 🟡 Needs rule |
| `inactive_60_days` | Behavioral | All → Winback | Winback A/B | ⬜ N/A | ✅ Yes | ✅ Complete |
| `inactive_120_days` | Behavioral | All → Sunset | Sunset → exit | ⬜ N/A | ✅ Yes | ✅ Complete |
| `buyer_1pair` | Purchase | All → Replenishment A | PP-Education 0-21 → Replenishment A | ✅ Yes (cross-sell 3+3) | ✅ Yes | ✅ Complete |
| `buyer_3plus3` | Purchase | All → Replenishment B | PP-Education 0-21 → Replenishment B | ✅ Yes (re-order at 75d) | ✅ Yes | ✅ Complete |
| `buyer_5plus5` | Purchase | All → Replenishment C | PP-Education 0-21 → Replenishment C | ✅ Yes (re-order at 150d) | ✅ Yes | ✅ Complete |
| `repeat_buyer` | Purchase | All → VIP tracking | Cross-sell, VIP eligibility | ⬜ N/A | ⬜ N/A | 🟡 Needs rules |
| `vip_buyer` | Purchase | All → VIP offers | Referral prioritization | ⬜ N/A | ⬜ N/A | 🟡 Needs rules |

### Tags Missing from Routing (Incomplete)

| Element | Current Status | Missing Routing Rule |
|---|---|---|
| `child_age` property | Collected but no routing use | Could determine phase (P1/P2/P3/P4) and adjust lever sequence automatically |
| `emotion_phase` property | **DOES NOT EXIST** | Critical — see R1 recommendation |
| GF migration target tags | **DO NOT EXIST** | No tag for "migrated from GF to L1" — can't measure migration efficacy |
| Click-based migration tags | Undefined | DOC1 says "Klaviyo adds tag" on click, but no tag name specified |
| Re-engagement tags | **DO NOT EXIST** | No tag for "returned from winback" — lost opportunity for momentum conversion |

---

## SUMMARY: ROUTING COMPLETENESS SCORE

| Category | Total Routes | Fully Mapped | Partial | Missing | Completeness |
|---|---|---|---|---|---|
| Pop-up tags → Level → Flow | 4 | 4 | 0 | 0 | 100% |
| Behavioral tags → Flow | 6 | 4 | 1 (`at_risk_no_open`) | 1 (`welcome_completed_no_purchase` partial) | ~75% |
| Purchase tags → Flow | 5 | 3 | 2 (`repeat_buyer`, `vip_buyer`) | 0 | ~70% |
| GF sub-groups → Flow | 5 | 0 | 2 (A, C partial) | 3 (B, D, E need dedicated routing) | ~20% |
| Phase × Level routing | 16 cells | 0 | 0 | 16 | **0%** |
| Tag cross-references | ~20 intersections | 10 | 6 | 4 | ~55% |
| **Overall** | — | — | — | — | **~55%** |

**Key Takeaway:** The 4 avatar level tags have complete routing. Behavioral tags are 75% mapped. Phase × Level routing has ZERO coverage — the biggest gap across the entire cross-reference. Addressing phase detection (R1) alone would improve completeness from ~55% to ~75%.

---

*End of Layer 8 Round 4 — Segmentation Mechanics Cross-Reference*
*Generated: 2026-05-25*
*Cross-References: L4 (Avatar Levels), L7 (Conversion Probabilities), L8 (Segmentation Mechanics), L16 (Flow Architecture)*
*Sources: Layer 8 Round 1 (Client File Extraction), Layer 4 Avatar Levels Synthesis, Layer 7 Conversion Probabilities Synthesis, DOC1-MASTER-FOUNDATION §16-19, DOC6-USAGE-GUIDE §7*
