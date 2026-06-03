# S01-A: Full Email Strategy — Framework Document

> **Strategy framework for the BrightKidCo Full Email Strategy master plan.**
> Defines every flow, maps connections between flows, identifies edge cases, prioritizes implementation.
> Generated: May 28, 2026 | Phase 1: Read & Framework
> Sources: All 10 synthesis docs, Diagnosis Layers 14-19, Ingestion compendium, Research compendium, Giuliano Demands

---

## TABLE OF CONTENTS

1. [Executive Framework Summary](#1-executive-framework-summary)
2. [Audience Architecture — 4 Levels + GF Sub-Groups](#2-audience-architecture)
3. [Complete Flow Map — 25 Flows Across 3 Phases](#3-complete-flow-map)
4. [Flow Connections & Subscriber Lifecycle](#4-flow-connections--subscriber-lifecycle)
5. [Entry & Exit Points](#5-entry--exit-points)
6. [Migration Paths — GF to Level-Specific](#6-migration-paths)
7. [Edge Case Catalog](#7-edge-case-catalog)
8. [Implementation Priority Order — 3-Phase Rollout](#8-implementation-priority-order)
9. [Decision-by-Decision Source Reference](#9-decision-by-decision-source-reference)

---

## 1. EXECUTIVE FRAMEWORK SUMMARY

BrightKidCo operates in the sensory/autism specialist segment of the potty training market — a fragmented, fast-emerging niche where **no competitor combines reusable training underwear + wetness learning signal + autism/sensory focus with an educational email nurture system.** (Source: 02-competitor-landscape.md, Section 1)

The core insight that changes everything:
> Every mom is solving the **wrong problem**. She thinks it's behavioral (child being difficult). It's neurological (child can't feel body signals). (Source: 01-customer-avatar.md, Section 1; MASTER-DIAGNOSIS-COMPENDIUM.md, Section 1.8)

**The Email Ecosystem at a Glance:**
- 25 flows, ~110+ unique emails deployed across 3 phases over 6 months
- 4 avatar levels (L1-Sarah/L2-Lisa/L3-Maria/GF-General Fallback)
- Phase 1 (Months 1-2): Launch — 11-14 flows, ~43-47 emails (discrepancy: Demands say 9 cross-level + 1 level-specific; Diagnosis layer-35 says 14)
- Phase 2 (Months 3-4): High-Value — 8 flows, ~34-40 emails
- Phase 3 (Months 5-6): Nice-to-Have — 6-8 flows, ~27-33 emails
- Source: 07-email-sequence-framework.md, Section 1; GIULIANO-DEMANDS.md, Section 2.1

**Core Positioning Foundation (Trust Pyramid — never reverse order):**
1. **Tier 1: Mechanism Specificity** — BSL™ Body-Signal Learning Layer restores interoception feedback
2. **Tier 2: Peer-to-Peer (Lena Voice)** — "Both my sons went through this"
3. **Tier 3: Prior Failure Acknowledgment** — "You solved the wrong problem"
4. **Tier 4: Realistic Timelines** — "Weeks, not days"
5. **Tier 5: 60-Day Guarantee** — "Try it. By your judgment."
Source: 04-mechanism-positioning.md, Section 3.3; MASTER-DIAGNOSIS-COMPENDIUM.md, Section 3.6

**The 5 Conversion Levers:**
L1: Sensory Gap | L2: Pull-Ups Harm | L3: 60-Day Guarantee | L4: Lena Peer Trust | L5: 49% SPARK Stat
Source: MASTER-DIAGNOSIS-COMPENDIUM.md, Section 4.1

**Key Metric: Warm domain required.** Sending domain `send.brightkidco.com` has zero reputation — requires mandatory 6-week warming protocol before any promotional sends. (Source: 09-deliverability-plan.md, Section 1)

---

## 2. AUDIENCE ARCHITECTURE

### 2.1 The Four Avatar Levels

| Level | Name | % | Child Profile | Hope/Real | Decision Period | Conversion | Tag |
|-------|------|---|--------------|-----------|----------------|------------|-----|
| **L1** | Sarah | ~35% | Verbal, 3-5 yrs, low support | 70/30 | 2-7 days | 15-25% (highest) | `avatar_level1` |
| **L2** | Lisa | ~40% 🏆 | Mixed verbal, 5-7 yrs, moderate | 40/60 | 7-21 days | 8-15% | `avatar_level2` |
| **L3** | Maria | ~25% | Non-verbal, 6-10+, high support | 20/80 | 14-30+ days | 4-7% (highest LTV) | `avatar_level3` |
| **GF** | General | ~50% overlap | Cross-level / uncertain | 50/50 | Variable | 7-10% | `avatar_general` |

Source: 01-customer-avatar.md, Section 1; GIULIANO-DEMANDS.md, Section 1

### 2.2 GF 5 Sub-Groups (Critical Hidden Segments)

| Group | % of GF | Identity | Migration Potential | Strategy |
|-------|---------|----------|-------------------|----------|
| **A: Diagnostic Entrants** | ~25% | Pre-identity, education-first | HIGH (post-diagnosis) | Educate first, migrate post-diagnosis |
| **B: Diagnosis-Rejecters** | ~15% | Anti-identity, symptom language ONLY | LOW | Convert IN GF. NEVER use "autism","ASD","Level" |
| **C: Sensory-Difference** | ~25% | SPD/ADHD, no ASD, science-driven | LOW | Convert IN GF. Mechanism-oriented, no ASD lang |
| **D: Overwhelmed Non-Selectors** | ~25% | Has ASD but clicked away | HIGHEST (40-50%) | Goldmine — migrate aggressively |
| **E: Cart/Browse Without Opt-In** | ~10% | Unknown profile | Variable | Recovery framing |

Source: MASTER-DIAGNOSIS-COMPENDIUM.md, Section 5.6; GIULIANO-DEMANDS.md, Section 1.2

### 2.3 Comorbidity Clusters Dictating Messaging

| Cluster | Conditions | Dominant Level |
|---------|-----------|----------------|
| Triple | SPD + GI + Sleep | L3 — fundamentally different copy needed |
| Double A | SPD + GI + ADHD | L2 dominant |
| Mild | None/minimal | L1 dominant |

Source: MASTER-DIAGNOSIS-COMPENDIUM.md, Section 1.1

### 2.4 Emotional Dimensions (Phase 2+)

| Dimension | Frequency | Primary Levels | Core Desire |
|-----------|-----------|----------------|-------------|
| Overwhelmed | 29.8% | L2, L3, GF | "I want the mess to stop" |
| Deadline Pressure | 25.2% | L1, GF | "He needs to be trained by September" |
| Social Pressure | 10.2%* | L1, GF | "I don't want to be the only mom" |

**Critical Rule:** Emotional dimensions inform copy selection but MUST NOT get separate tags or flows in Phase 1. Level-only segmentation for Phase 1. (Source: MASTER-DIAGNOSIS-COMPENDIUM.md, Section 1.4; GIULIANO-DEMANDS.md, Section 18.1)

---

## 3. COMPLETE FLOW MAP

### 3.1 Phase 1 — Launch (Months 1-2)

**Discrepancy Note:** Demands Section 17 defines Phase 1 as 9 flows. Diagnosis Layer 35 defines 14 flows. Source difference: 07-email-sequence-framework.md (Section 1) also shows 14 flows. This framework uses the 10+4 structure from the Sequence Framework (07) as the detailed reference, noting the discrepancy. Resolution required with Giuliano.

#### Flows 01-04: Welcome Flow (Level-Specific — 8×4 = 32 Emails)

The WELCOME FLOW is the single most important flow — the frame-setter for all subsequent communication. It is the ONLY level-specific flow in Phase 1.

**Welcome Flow Structure (8 emails, 21 days):**

| Email | Day | Primary Lever | Expected Open | Purpose |
|-------|-----|---------------|:-------------:|---------|
| E1 | 0 (immediate) | Validation + Mechanism | 60-70% | Core reframe: "It's not behavior. It's signal-timing." |
| E2 | 1 | Failed Methods + Reframe | 50-60% | Name what she tried, explain why each couldn't work |
| E3 | 3 | 60-Day Guarantee + CTA | 45-55% | First buy opportunity with risk removal |
| E4 | 5 | Education + Social Proof | 40-50% | Mechanism deep dive + parent testimonial |
| E5 | 7 | Urgency(L1)/Science(L2)/Dignity(L3) | 35-45% | Level-differentiated content |
| E6 | 10 | Testimonial + Permission | 30-40% | Real story + permission-not-to-buy |
| E7 | 14 | Last Call(L1)/Mechanism Deep(L2/3) | 25-35% | Final push or deeper education |
| E8 | 21 | Winback Prep / Migration Offer | 20-30% | If no purchase → Winback B prep. If GF → Migration |

Source: 07-email-sequence-framework.md, Section 6; GIULIANO-DEMANDS.md, Section 3

**Cadence Variants per Level:**
- L1: Normal cadence, Pre-K urgency in E5+
- L2: Slightly slower, more mechanism depth
- L3: SLOWEST (E1→E2 gap 2 days). ZERO urgency in any email
- GF: Balanced, cross-level language, migration anchors embedded

**Sign-Off Progression:**
- E1-E2: "Talk soon,"
- E3-E5: "With understanding,"
- E6+ and winback: "With care,"
Source: GIULIANO-DEMANDS.md, Section 11.7

#### Flow 05: Site Abandonment (Cross-Level — 1 Email)
- Trigger: Bounced from site before viewing products
- Content: Gentle re-engagement, mechanism teaser, no hard sell
- Source: 07-email-sequence-framework.md, Section 6

#### Flow 06: Browse Abandonment (Cross-Level — 3 Emails)
- Trigger: Viewed product pages, no cart created
- Timing: 2h / 24h / 72h
- Content: Symptom hook → Mechanism reminder → CTA
- Source: 07-email-sequence-framework.md, Section 6

#### Flow 07: Abandoned Cart (Cross-Level — 3 Emails)
- Trigger: Added to cart, no checkout
- Timing: 1h / 24h / 72h
- Content: E1: Validation + Mechanism reminder, E2: Testimonial + Guarantee, E3: "Last chance" + Permission
- **Suppression:** Cart Abandonment SUPPRESSES Welcome Flow E3+ during active cart. Exception: E1-E2 already sent remain delivered.
- Source: 07-email-sequence-framework.md, Section 6; GIULIANO-DEMANDS.md, Section 2.5

#### Flow 08: Abandoned Checkout (Cross-Level — 2 Emails)
- Trigger: Started checkout, didn't complete
- Timing: 1h / 24h
- Content: Minimal friction removal, guarantee emphasis, shipping clarity
- Source: 07-email-sequence-framework.md, Section 6

#### Flow 09: Order Confirmation (Cross-Level — 1 Email)
- Trigger: Purchase completed
- Content: Transactional — order details, "What to expect," + subtle cross-sell block
- **Google 2024 rule:** Must be predominantly transactional. NO promotional content.
- Source: 07-email-sequence-framework.md, Section 6; GIULIANO-DEMANDS.md, Section 17.7

#### Flow 10: Shipping Notification (Cross-Level — 1 Email)
- Trigger: Order shipped
- Content: Tracking info, excitement building, prep tips for receiving

#### Flow 11: Out for Delivery (Cross-Level — 1 Email)
- Trigger: Out for delivery
- Content: "Today's the day!" + quick-start anticipation

#### Flow 12: Arrived & Welcome (Cross-Level — 1 Email)
- Trigger: Delivery confirmed (or estimated delivery date)
- Content: "Your BKC arrived!" + setup instructions + **massive upsell opportunity** (1→3+3, 3+3→5+5)
- Source: 07-email-sequence-framework.md, Section 6

#### Flow 13: PP-Direct Upsell (Cross-Level — 2 Emails)
- Trigger: D0 and D5 after purchase
- Content: 
  - E1: Wash Bag + Mattress Protector recommendation
  - E2: Bundle upsell (1 pair → 3+3, 3+3 → 5+5) with savings math
- Source: 07-email-sequence-framework.md, Section 6; GIULIANO-DEMANDS.md, Section 2.2

#### Flow 14: PP-Level Detection (Cross-Level — 1 Email, GF only)
- Trigger: Day 14 after purchase + current tag = `avatar_general`
- Critical: Takes priority over ALL other Day 14 content (Welcome E6, PP-Education)
- 4 re-selection buttons with same symptom-based language as pop-up
- NEVER assign below 70% confidence
- **This is the highest-converting migration touchpoint (40-50% migration rate)**
- Source: MASTER-DIAGNOSIS-COMPENDIUM.md, Section 5.5; GIULIANO-DEMANDS.md, Section 18.4

#### Flow 15: BP-Mary S. Story (Cross-Level — 1 Email)
- **Placement discrepancy:** Phase 1 per some docs, Phase 2 per DOC1.
- Founder story — Mary S.'s personal journey with her own autistic child
- Mary S. appears ONLY in this dedicated mail (not in Lena's regular mails)
- Source: GIULIANO-DEMANDS.md, Section 7.4

### 3.2 Phase 2 — High-Value (Months 3-4)

#### Flow 16: PP-Education D0-21 (Cross-Level — 4 Emails)
- Trigger: Post-purchase, D0/D7/D14/D21
- Content: Educational progression — mechanism reinforcement, tracking progress, troubleshooting
- Source: 07-email-sequence-framework.md, Section 7

#### Flow 17: PP-Extended Upsell (Cross-Level — 3 Emails)
- Trigger: After PP-Education, for 1-pair buyers
- Content: Bundle upsell with detailed ROI comparison vs Pull-Ups
- Source: 07-email-sequence-framework.md, Section 7

#### Flow 18: PP-Mid Check-In (Cross-Level — 3 Emails)
- Trigger: Post-purchase D30-60
- Content: "How's it going?" — check-in, mini-wins celebration, troubleshooting
- Source: 07-email-sequence-framework.md, Section 7

#### Flow 19: Replenishment A/B/C (Cross-Level — 7 Emails)
- Trigger: Based on purchase count/recency
  - **A:** 1-pair buyer (3 emails) — encourage reorder
  - **B:** 3+3 buyer (2 emails) — encourage reorder
  - **C:** 5+5 buyer (2 emails) — loyalty/repeat
- Content: Usage-based timing ("It's been X weeks — your BKC might need a backup pair")
- Source: 07-email-sequence-framework.md, Section 7; GIULIANO-DEMANDS.md, Section 2.2

#### Flow 20: Review Request (Cross-Level — 2 Emails)
- Trigger: Post-purchase D21-30
- Content: Request for site review with photo
- Source: 07-email-sequence-framework.md, Section 7

#### Flow 21: Winback Path A (Level-Specific — 3×4 = 12 Emails)
- Trigger: Last purchase + 90 days no engagement
- Content: Level-specific re-engagement with new science/offers
- **Phase 2 per Demands — not Phase 3.** (Discrepancy noted.)
- Source: GIULIANO-DEMANDS.md, Section 2.2; MASTER-DIAGNOSIS-COMPENDIUM.md, Section 5.4

### 3.3 Phase 3 — Nice-to-Have (Months 5-6)

#### Flow 22: PP-Extended Education (Level-Specific — 5×4 = 20 Emails)
- Trigger: D22+ with level tag + have bought
- Content: Deep educational content — interoception exercises, sensory strategies, progress tracking
- Source: 07-email-sequence-framework.md, Section 8; GIULIANO-DEMANDS.md, Section 2.2

#### Flow 23: PP-Support At-Risk (Cross-Level — 4 Emails)
- Trigger: Post-purchase, open rate declining
- Content: Troubleshooting, community connection, 1:1 support offer
- Source: 07-email-sequence-framework.md, Section 8

#### Flow 24: Winback Path B (Level-Specific — 3×4 = 12 Emails)
- Trigger: Signup + 60 days, no purchase
- Content: Level-specific re-engagement, new mechanism hooks
- Source: GIULIANO-DEMANDS.md, Section 2.2

#### Flow 25: FAQ/Objection Library (Cross-Level — 6 Emails)
- **Critical:** Must be cross-level, NOT 4 variants. Current strategy docs say 4 variants — this is wrong per Demands.
- Content: Common objections addressed in sequence
- Source: GIULIANO-DEMANDS.md, Section 20 Gap #1; MASTER-DIAGNOSIS-COMPENDIUM.md, Section 8.2

#### Flow 26: Referral Flow (Cross-Level — 3 Emails)
- Trigger: Post-purchase + satisfaction indicator
- Content: Referral ask with dual-sided incentive
- Source: 07-email-sequence-framework.md, Section 8

#### Flow 27: Sunset Flow (Cross-Level — 2 Emails)
- Trigger: 120 days no open AND no click AND no purchase AND received 20+ emails
- Content: E1: Re-engagement email, E2 (4-7d after): Final farewell
- After sunset: Tag `unengaged = True`, add to Master Suppression List
- **Highest priority** — suppresses ALL other flows unconditionally
- Source: GIULIANO-DEMANDS.md, Section 17.11

---

## 4. FLOW CONNECTIONS & SUBSCRIBER LIFECYCLE

### 4.1 Recovery Funnel Hierarchy (by Intent Level)

```
LOWEST INTENT ──► Site Abandonment (bounced, no product viewed)
                     │
                     ▼
                  Browse Abandonment (viewed product, no cart)
                     │
                     ▼
                  Abandoned Cart (added to cart)
                     │
                     ▼
                  Abandoned Checkout (started checkout)
                     │
                     ▼
HIGHEST INTENT ──► Purchase Completed → PP Flows
```

Source: 07-email-sequence-framework.md, Section 2.2

### 4.2 Cross-Flow Suppression Priority Chain

```
  HIGHEST ──► SUNSET FLOW
    PRIORITY   │ Suppresses ALL other flows unconditionally
               │ Tag: unengaged = True → Master Suppression List
               ▼
            WINBACK (Path A or B)
               │ Pauses ALL nurture flows while active
               │ Overrides Welcome, PP-Education, Replenishment
               ▼
            PP-LEVEL DETECTION (Day 14)
               │ Takes priority over ALL other Day 14 content
               │ (Welcome E6, PP-Education, Replenishment)
               ▼
            CART ABANDONMENT
               │ Suppresses Welcome FLOW during active cart
               │ Exception: If Welcome E1-E2 already sent, they remain
               │ E3+ suppressed until cart recovered or expires
               ▼
            ALL OTHER FLOWS
               │ Normal operation — one flow at a time per subscriber
  LOWEST ────┘
```

Source: GIULIANO-DEMANDS.md, Section 2.5

### 4.3 Never Double-Saturate Rule

Max 1 flow email per subscriber per day. Welcome flow subs skip campaign blasts.

### 4.4 Entry Points

There are exactly **5 entry points** into the ecosystem:

| Entry Point | % Volume | Tag Assigned | Immediate Flow |
|-------------|:--------:|-------------|----------------|
| 1. Pop-up Self-ID (Klaviyo form) | ~80% | `avatar_level1/2/3/general` | Welcome Flow (level-matched) |
| 2. Checkout Signup | ~15% | `avatar_general` (default) | Welcome GF + migration path |
| 3. Referral/Direct | ~3% | `avatar_general` (default) | Welcome GF |
| 4. Cart/Browse without Opt-In | ~2% | None initially | Recovery flows only |
| 5. Purchase without prior signup | <1% | `avatar_general` (assumed) | PP Flows + level detection |

Source: 07-email-sequence-framework.md, Section 2.1

### 4.5 Exit Points

| Exit Point | Condition | Transition |
|-----------|-----------|------------|
| Purchase | Made first purchase | Welcome → PP Flows (except PP-Level Detection remains) |
| Unsubscribe | Unsubscribed from any email | ALL flows — immediate removal |
| Sunset | 120d no engagement | Master Suppression List — permanent |
| Level Detection | GF subscriber self-identifies | `avatar_general` → `avatar_level1/2/3` |
| Cart Recovery | Recovered cart | Returns to Welcome Flow position |
| Winback Success | Re-engaged (opened/clicked) | Returns to normal nurture |
| Winback Failure | No engagement × 2 | Sunset flow |

---

## 5. MIGRATION PATHS

### 5.1 GF to Level-Specific — The 4 Migration Paths

```
                      ENTERS AS GENERAL FALLBACK
                      ┌─────────────────────┐
                      │   avatar_general     │
                      │   ~50% of audience   │
                      └──────────┬──────────┘
                                 │
          ┌──────────────────────┼──────────────────────┐
          ▼                      ▼                      ▼
  ┌───────────────┐    ┌──────────────────┐    ┌─────────────────┐
  │ PATH 1        │    │ PATH 2           │    │ PATH 3          │
  │ Click-Based   │    │ Reply-Based      │    │ Purchase-Based  │
  │               │    │                  │    │                 │
  │ "Does this    │    │ "Reply with     │    │ Purchase event  │
  │  sound like   │    │  child's age     │    │ triggers PP     │
  │  your child?" │    │  and what you've │    │ flows with level│
  │  → Click tag  │    │  tried" → manual │    │ detection       │
  └───────┬───────┘    └────────┬─────────┘    └────────┬────────┘
          │                     │                        │
          └──────────┬──────────┴────────────┬───────────┘
                     ▼                       ▼
            ┌──────────────────┐   ┌─────────────────────┐
            │ PATH 4 (BEST)   │   │ STAY GF             │
            │ PP-Level Detect │   │ 25-35% never migrate│
            │ Day 14 PP email │   │ Valid outcome       │
            │                 │   │ Groups B & C        │
            │ 65-75% open     │   │ Convert IN general  │
            │ 35-50% click    │   │                     │
            │ 40-50% migrate  │   │                     │
            └───────┬─────────┘   └─────────────────────┘
                    │
   MIGRATED (65-75%) ────────────────────► Level-specific flows
```

Source: MASTER-DIAGNOSIS-COMPENDIUM.md, Section 5.5

### 5.2 Migration Rules

- Migration anchors must be **organic story recommendations**, NOT "Click here if you're Level X"
- **Trigger:** Mom must think "That's my kid!"
- NEVER assign level tag below 70% confidence
- Strongest tool: PP-Level Detection Mail (Day 14) — 65-75% open, 35-50% click, 40-50% migration
- **Zero-harm design:** Every path's fallback is "stay GF." No penalty for not migrating.
- Groups B and C are essentially PERMANENT GF residents. Convert IN the general segment.
- Source: MASTER-DIAGNOSIS-COMPENDIUM.md, Section 5.5; GIULIANO-DEMANDS.md, Section 1.2

### 5.3 Passive Purchase Hints for Level Detection

The PP-Level Detection mail can also infer level via purchase behavior:
- Size purchased → age hint → level hint
- Bundle size → experience expectation hint
- Source: GIULIANO-DEMANDS.md, Section 18.4

---

## 6. EDGE CASE CATALOG

### 6.1 Unknown Avatar (No Self-Identification)

**Risk:** ~50% of subscribers enter GF. Up to 35% of these never migrate.
**Strategy:** GF flow must be self-contained — convert IN the general segment, not rely on migration for revenue.
**Cross-Level Calibration Rules (R1-R6) exist precisely for this purpose.** Every cross-level email must satisfy ALL 6.
Source: 01-customer-avatar.md, Section 3.5; GIULIANO-DEMANDS.md, Section 4

### 6.2 Multi-Child Household

**Risk:** Parent buys for one child but has a second unsolved case. Or has both L1 and L3 children.
**Strategy Options (Phase 2+):**
- Tag system should support `child_count` and `child_levels` properties
- PP-Extended Education can include multi-child tips
- Replenishment flow can prompt for sibling sizes
- **Phase 1 limitation:** Multi-child support is Phase 2+. Phase 1 assumes single-child default.
- Source: GIULIANO-DEMANDS.md, Section 1.1 (no explicit multi-child rules); Inferred from audience overlap patterns

### 6.3 Non-Parent Caregivers (Grandparents, Relatives, Foster Parents)

**Risk:** Language like "Mom" or "Mama" alienates ~5% of audience.
**Strategy:**
- Lena's voice in sign-off says "mom" but body copy should use "parent" / "caregiver" / "you"
- Pop-up language is gender-neutral: "What describes **your child** best?"
- Testimonials can include grandparent stories (source: MASTER-RESEARCH-COMPENDIUM mentions multi-generational audience)

### 6.4 International Subscribers (UK, AU/NZ, CA)

**Risk:** Language differences (nappies vs diapers), geographic-specific references, time zones.
**Geography split:** USA 65%, UK 15%, AU/NZ 15%, CA 5%
Source: 01-customer-avatar.md, Section 2

**Implementation:**
- Klaviyo segments by country
- V22 Rule: UK = "nappies" not "diapers". AU/NZ: same.
- Shipping information localized per region
- Timing: International sends adjusted for time zones (not same-hour blast)
- Source: GIULIANO-DEMANDS.md, Section 14 (V22)

### 6.5 Single-Parent Households

**Risk:** Partner-language assumes two-parent household. ~15% of audience are single moms.
**Strategy:**
- V17 Rule: "Never suggest she convince her partner." "This is your decision."
- L3 Rule: "You don't need anyone's permission to try this."
- Financial framing should work for single-income as well as dual-income
- Source: MASTER-DIAGNOSIS-COMPENDIUM.md, Section 6.4; GIULIANO-DEMANDS.md, Section 14

### 6.6 Subscriber in Wrong Level / Level Mismatch

**Risk:** Mom selects L1 in pop-up but describes L2 child. Or child progresses and needs different content.
**Strategy:**
- PP-Level Detection (Day 14) is a re-selection opportunity
- Passive hints: bundle size, child age, open behavior
- **Never assign below 70% confidence — stay GF if uncertain**
- No penalty for "re-doing" the level selection

### 6.7 Purchase Without Signup (Guest Checkout)

**Risk:** ~15% enter via checkout without level tag. Missing all Welcome Flow education.
**Strategy:**
- Default to `avatar_general` tag
- PP-Level Detection at Day 14 is critical
- PP-Education and PP-Extended Education must compensate for missed Welcome Flow

### 6.8 Seasonal Enrollment Windows (Pre-K Pressure)

**Risk:** L1 urgency is time-bound — Pre-K starts September or January. Emails outside this window lose edge.
**Strategy:**
- L1 urgency levers deployed only during enrollment windows (May-Sept, Dec-Jan)
- Off-season L1 emails use mechanism + social proof instead of deadline
- Calendar-aware content scheduling in Klaviyo
- Source: 01-customer-avatar.md, Section 3.2; GIULIANO-DEMANDS.md, Section 6.3

### 6.9 Adult Diaper Transition (Critical Emotional Trigger)

**Risk:** The deepest emotional trigger in the entire ecosystem. Fear-based selling destroys trust.
**Strategy (V21 Rule):**
- Never use as fear-based selling. "The size on the box doesn't define what's possible."
- Trauma-sensitive, never as sales pressure
- L3-specific: Activated by search patterns (age 4→6→8→adult diapers search progression)
- Acknowledged ONLY with deep empathy and dignity
- Source: MASTER-DIAGNOSIS-COMPENDIUM.md, Section 6.6; GIULIANO-DEMANDS.md, Section 14

### 6.10 BCBA Disapproval Barrier

**Risk:** BCBA is the highest-trust authority figure (above pediatricians). If BCBA says no, purchase stops.
**Strategy:**
- BCBA Fact-Sheet: One-pager on interoception + how BSL complements ABA — give mom ammo to get BCBA approval
- Position as complement, never competitor. "Your BCBA has been doing the hard work for years."
- Never say: "ABA doesn't work," "Your BCBA missed this," "BCBA protocols are flawed"
- Source: MASTER-DIAGNOSIS-COMPENDIUM.md, Section 6.2; GIULIANO-DEMANDS.md, Section 23

### 6.11 Medicaid/Financial Sensitivity

**Risk:** L3 has ~40% Medicaid usage. $79.99/119.99 is significant commitment.
**Strategy:**
- L3: NEVER math reframe ("less than a coffee"). 1 Pair ($34.99) is primary offer.
- L1-L2: Math reframe allowed ($0.83-1.33/pull-up vs $12-13/pair BKC bundle)
- Never prominently mention shipping; never name carrier for L3
- Source: MASTER-DIAGNOSIS-COMPENDIUM.md, Section 4.5, 6.5; GIULIANO-DEMANDS.md, Section 14 (V18), Section 25

### 6.12 Partner Conflict as Block

**Risk:** Partner conflict is a shame multiplier. "My partner is FURIOUS at me."
**Strategy:**
- V17: Never suggest she convince her partner
- Empower solo decision-making: "This is your decision."
- L3: "You don't need anyone's permission to try this."
- Source: MASTER-DIAGNOSIS-COMPENDIUM.md, Section 6.4

### 6.13 Regression After Progress

**Risk:** Child shows progress for 2-3 weeks then regresses. Mom feels devastated, blames product.
**Strategy (V20 Rule):**
- "This isn't starting over. His nervous system is recalibrating."
- Normalize regression as learning phase, not failure
- PP-Mid Check-In flow is designed for exactly this scenario
- Source: GIULIANO-DEMANDS.md, Section 14 (V20)

### 6.14 Diagnosis Rejection (GF Group B)

**Risk:** ~15% of GF actively reject autism diagnosis. Using ASD language triggers unsubscribe.
**Strategy:**
- **Symptom language ONLY.** Never "autism," "ASD," "Level 1/2/3"
- Use "nervous system differences" as umbrella term
- Convert IN the general segment — never try to migrate to level-specific
- Cross-level calibration R1-R6 fully cover this: Symptom Over Label, Diagnostic-Status Neutral
- Source: 01-customer-avatar.md, Section 3.5; GIULIANO-DEMANDS.md, Section 1.2

### 6.15 Multiple Subscriber Profiles in Same Household

**Risk:** Two parents (or parent + grandparent) of the same child both subscribe. Receiving repetitive content.
**Strategy (Phase 2+):**
- Klaviyo identify merging on email address prevents this
- Consider household-level frequency capping if separate emails detected

---

## 7. CONTENT & OFFER ARCHITECTURE

### 7.1 Content Mix — The 3 Buckets

| Bucket | % | Examples |
|--------|:-:|---------|
| Educational / Value | ~50% | Mechanism explanation, science, parent tips |
| Sales / Promo | ~30% | Offers, CTAs, guarantee emphasis |
| Brand / Personality | ~20% | Lena story, community, real parent stories |

**90/10 Rule:** Mechanism is ALWAYS the hero. Only 10% of ANY email should be promotional.
Source: GIULIANO-DEMANDS.md, Section 12.1

### 7.2 Offer Structure — 3 Pricing Tiers

| Offer | Price | Revenue Split | Primary Use Case | L3 Rule |
|-------|-------|:-------------:|-----------------|---------|
| 1 Pair | $34.99 | ~20% | L3 entry, budget-sensitive | PRIMARY L3 offer |
| 3+3 Bundle | $79.99 | ~65% 🏆 | Default for 10/16 Level×Phase cells | NOT for L3 (too expensive) |
| 5+5 Bundle | $119.99 | ~15% | Max value, repeat buyers | NOT for L3 |

**L3 offer rules:** NEVER math reframe, NEVER urgency, 1 Pair ($34.99) primary, never prominently mention shipping cost, never name carrier.
Source: MASTER-DIAGNOSIS-COMPENDIUM.md, Section 4.5; 06-offer-research.md, Section 3

### 7.3 Conversion Probability Heatmap — Level × Phase (16 Cells)

| Level | P1 (Slow Realization) | P2 (First Attempt) 🏆 | P3 (Method Cycling) | P4 (Resignation) |
|-------|:---------------------:|:---------------------:|:-------------------:|:----------------:|
| **L1 (35%)** | <5% | **15-25%** 🏆★#1 | 10-18% | 5-10% |
| **L2 (40%)** 🏆 | 2-5% | 10-15% | **8-15%** ★#2 | 6-10% |
| **L3 (25%)** | <1% | 4-8% | 4-8% | 4-7% |
| **GF (~50%)** | 3-5% | **8-12%** ★#3 | 8-12% ★#3 | 5-8% |

**#1 cell:** L1 × P2 (15-25% conversion, 17.5% of audience = 2.6-4.4% weighted revenue impact)
**#2 cell:** L2 × P3 (8-15%, 22% of audience)
**#3 cell:** GF × P2/P3 (8-12%, 25% of audience)

**Blended by level:** L1: 10-15%, L2: 7-12%, L3: 4-7%, GF: 7-10%
Source: MASTER-DIAGNOSIS-COMPENDIUM.md, Section 4.2

### 7.4 6 Strongest Lever Pairs (Use in Combination)

L1+L2, L1+L5, L3+L4, L2+L3, L4+L5, L1+L4
Source: MASTER-DIAGNOSIS-COMPENDIUM.md, Section 4.1

### 7.5 Objection-to-Lever Master Mapping

| Objection | Primary Lever | Secondary Lever |
|-----------|:------------:|:---------------:|
| D1: "I've tried everything" | L1 (Mechanism) | L3 (Guarantee) |
| D2: "Maybe I'm the problem" | L1 (Absolution) | L5 (Normalization) |
| D3: "What if I get my hopes up?" | L3 (Guarantee) | L4 (Lena) |
| D4: "He's too old/severe" | L1 (Mechanism) | L4 (Lena story) |
| C1: "Never heard of brand" | L4 (Lena) | L2 (Pull-ups harm) |
| C2: "Need to see it works" | L4 (Testimonials) | L5 (Stat) |
| C3: "Is it worth $30-50?" | L3 (Guarantee) | L1 (Mechanism) |
| B1: "Tried underwear, no help" | L1 (BSL specific) | L2 (vs pull-ups) |
| B2: "My BCBA has a protocol" | L1 (Complement) | L4 (Lena) |
| B3: "Kid will rip them off" | L1 (Sensory design) | L4 (Gradual tips) |
| B4: "GI issues / withholding" | L1 (Urine first scope) | L2 (Different mechanism) |

Source: GIULIANO-DEMANDS.md, Section 6

---

## 8. DOMAIN WARMING & DELIVERABILITY ARCHITECTURE

### 8.1 Infrastructure Status

| Element | Status | Action Required |
|---------|--------|----------------|
| SPF | ✅ Configured | `include:_spf-us.ionos.com include:klaviyo.com ~all` |
| DKIM | ⚠️ Unverified | Needs independent verification |
| DMARC | ✅ p=none | Correct for warming |
| Custom Tracking | ✅ `click.brightkidco.com` | Working |
| Google Postmaster Tools | ❌ Not Verified | **P0 Blocker** — set up before first send |
| ZeroBounce | ❌ Not Done | Must run before any sending |
| Sender Reputation | ⚫ ZERO | New domain, no history |

Source: 09-deliverability-plan.md, Section 2

### 8.2 6-Week Warming Schedule

| Weeks | Allowed Content | Forbidden | Volume | Rate |
|-------|----------------|-----------|:------:|:----:|
| 1-2 | Welcome, Browse, Cart/Checkout, PP only | Promo, L3, >1 CTA, countdown | 50-100/day | 3-4/week |
| 3-4 | Add PP-Education (light), Winback | Heavy promo, affiliate links | 250-500/day | 4-5/week |
| 5-6 | Gradual promo introduction | Full campaign blasts | 1000+/day | 5-7/week |
| 7+ | Full unrestricted cadence | — | Per segment | Per segment |

**Always:** 60:40 text:image, reply prompts in EVERY email, Lena voice, plain-text preferred
**Never during warming:** "All Subscribers", discount codes, hard-sell CTAs, countdown timers
Source: 09-deliverability-plan.md, Section 4; GIULIANO-DEMANDS.md, Section 17.1

### 8.3 Metrics Thresholds

| Metric | Target | Warning | Critical | Emergency |
|--------|:-----:|:-------:|:--------:|:---------:|
| Bounce Rate | <0.5% | 0.5-1.0% | >1.0% | — |
| Spam Complaint | <0.01% | 0.01-0.03% | >0.03% | >0.05% |
| Open Rate | 45%+ | 35-45% | <35% | — |

Source: 09-deliverability-plan.md, Section 4; MASTER-DIAGNOSIS-COMPENDIUM.md, Section 7.1

### 8.4 Code Red Protocol

If >0.03% spam or Google reputation = "Bad":
1. Enable double opt-in temporarily
2. Gate Welcome E2-E8 behind E1 open
3. Add "Check spam folder" on signup
4. PAUSE all sends except VIP Clickers (2 weeks)
5. If needed, 48-72h complete pause
6. Resume to 90-Day Engaged minimum only
Source: GIULIANO-DEMANDS.md, Section 17.6

---

## 9. DECISION-BY-DECISION SOURCE REFERENCE

| Decision | Source Document | Section | 
|----------|----------------|---------|
| 4-Avatar segmentation system | 01-customer-avatar.md | Sections 3-4 |
| L1 15-25% conversion (highest), L2 8-15%, L3 4-7% | MASTER-DIAGNOSIS-COMPENDIUM.md | Section 4.2 |
| GF 5 sub-groups (A-E) | MASTER-DIAGNOSIS-COMPENDIUM.md | Section 5.6 |
| Comorbidity clusters dictate messaging | MASTER-DIAGNOSIS-COMPENDIUM.md | Section 1.1 |
| "It's not behavior. It's signal-timing." reframe | 04-mechanism-positioning.md | Section 3 |
| 3-Layer BSL™ mechanism (cotton inner → absorbent core → TPU outer) | 04-mechanism-positioning.md | Section 4 |
| Trust Pyramid — 5 tiers never reversed | MASTER-DIAGNOSIS-COMPENDIUM.md | Section 3.6 |
| 5 Conversion Levers (L1-L5) + sub-levers | MASTER-DIAGNOSIS-COMPENDIUM.md | Section 4.1 |
| 6 Cross-Level Calibration Rules (R1-R6) | GIULIANO-DEMANDS.md | Section 4 |
| 6-Element Mandatory Formula for L2 emails | GIULIANO-DEMANDS.md | Section 23 |
| L2 Paradox (hyper-skeptical + hyper-motivated) | MASTER-DIAGNOSIS-COMPENDIUM.md | Section 6.1 |
| L3 dignity-first rules | 01-customer-avatar.md | Section 3.4 |
| Adult diaper transition trigger | MASTER-DIAGNOSIS-COMPENDIUM.md | Section 6.6 |
| BCBA as gatekeeper to 65% of audience | MASTER-DIAGNOSIS-COMPENDIUM.md | Section 6.2 |
| Lena Voice — 4-Step Formula (Observation→Validation→Mechanism→Permission) | 08-email-copy-brief.md | Section 1 |
| Lena Identity: Customer Support, Mom of 2 autistic sons | 08-email-copy-brief.md | Section 1.1 |
| Forbidden phrases catalog (brand-wide + level-specific) | GIULIANO-DEMANDS.md | Section 8 |
| Anti-fabrication rules (RS-only quotes, 30-50% verbatim quota) | GIULIANO-DEMANDS.md | Section 9 |
| Pop-up: 4 symptom-based buttons, 1-step | GIULIANO-DEMANDS.md | Section 10 |
| Welcome Flow: 8 emails, 21 days, 4 variants | GIULIANO-DEMANDS.md | Section 3 |
| 25-flow system, 3-phase deployment | 07-email-sequence-framework.md | Section 2 |
| Cross-flow suppression priority chain | GIULIANO-DEMANDS.md | Section 2.5 |
| Never double-saturate rule | GIULIANO-DEMANDS.md | Section 2.5 |
| GF→Level migration 4 paths (PP-Level Detection best) | MASTER-DIAGNOSIS-COMPENDIUM.md | Section 5.5 |
| Phase 1 scope rules (5 non-negotiables) | GIULIANO-DEMANDS.md | Section 18 |
| 3-level offer structure ($34.99 / $79.99 / $119.99) | 06-offer-research.md | Section 3 |
| Math reframe: Pull-Ups $547-1,095/yr vs BKC $79.99 one-time | 06-offer-research.md | Section 1 |
| 60-day guarantee (P0 conflict: website says 30-day) | MASTER-DIAGNOSIS-COMPENDIUM.md | Section 7.3 |
| Content mix: ~50% educational / ~30% sales / ~20% brand | GIULIANO-DEMANDS.md | Section 12 |
| Segment frequency tiers (VIP 3-5/wk → Sunset 1/wk max) | GIULIANO-DEMANDS.md | Section 12.3 |
| Subject line types (6 formulas) | GIULIANO-DEMANDS.md | Section 11.3 |
| CTA calibration per level (L1: medium → L3: very low) | GIULIANO-DEMANDS.md | Section 15.7 |
| 6-week domain warming schedule | 09-deliverability-plan.md | Section 4 |
| Code Red protocol | GIULIANO-DEMANDS.md | Section 17.6 |
| 49% SPARK stat as headline statistic | 03-science-library.md | PP-B01 |
| 17 symptom clusters (L2-E regression cycles dominant) | MASTER-DIAGNOSIS-COMPENDIUM.md | Section 1.5 |
| Color palette + typography + design specs | GIULIANO-DEMANDS.md | Section 15 |
| Klaviyo 15-tag system + profile properties | GIULIANO-DEMANDS.md | Section 16 |
| Emotional dimensions inform (NOT govern) in Phase 1 | GIULIANO-DEMANDS.md | Section 18.1 |
| 9 critical strategy vs demands gaps | GIULIANO-DEMANDS.md | Section 20 |
| Subject line forbidden patterns per level | GIULIANO-DEMANDS.md | Section 11.4 |
| Sign-off variants (Short/Medium/Long) + position rules | GIULIANO-DEMANDS.md | Section 7.3 |
| Traffic channels: Reddit (highest organic), FB Groups, IG, TikTok, YouTube | 10-traffic-channel-map.md | Section 10 |
| 56 communities across 8 channel types | 10-traffic-channel-map.md | Section 1 |

---

## APPENDIX A: KNOWN CONTRADICTIONS REQUIRING RESOLUTION

| # | Contradiction | Sources | Impact |
|---|--------------|---------|:------:|
| C1 | 30-day guarantee (website) vs 60-day (all docs) | Site vs MASTER-DIAGNOSIS | **P0** |
| C2 | WELCOME10 vs 10%OFF-BKCO discount code | L37 vs 06-offer-research | **P1** |
| C3 | 9 flows (Demands) vs 14 flows (L35/07-seq-framework) Phase 1 | Giuliano vs Strategy | **P0** |
| C4 | FAQ/Objection: cross-level (Demands) vs 4 variants (Strategy) | Demands vs Strategy | **P0** |
| C5 | Pop-up: 1-step vs multi-step quiz | Demands vs Strategy | MEDIUM |
| C6 | PP-Extended Edu: Phase 3 vs Phase 2 | Demands vs Strategy | **HIGH** |
| C7 | Winback Path A: Phase 2 vs Phase 3 | Demands vs Strategy | **HIGH** |
| C8 | Mary S. Story: Phase 1 vs Phase 2 | Various docs | MEDIUM |
| C9 | GF test overall % (~50%) vs L1+L2+L3 sum (100%) | Various | NOTES |

Source: MASTER-DIAGNOSIS-COMPENDIUM.md, Section 8.2; GIULIANO-DEMANDS.md, Section 20

## APPENDIX B: IMMEDIATE BLOCKERS (Must Fix Before Email Goes Live)

1. Resolve 30 vs 60-day guarantee conflict (Giuliano clarification)
2. Resolve discount code conflict
3. Resolve Phase 1 flow count (9 vs 14)
4. ZeroBounce list verification
5. Build 7 engagement segments for domain warming
6. Implement 4-button pop-up
7. Build 4 Welcome Flow variants
8. Add anti-fabrication section to copy strategy
9. Add forbidden phrases catalog to copy strategy
10. Fix FAQ/Objection Library segmentation to cross-level

## APPENDIX C: KEY STATISTICS FOR EMAIL COPY

| Stat | Source | Confidence |
|------|--------|:----------:|
| 49% of autistic 4-5 yr olds NOT toilet trained | Wiggins et al. 2022 (CDC, N=743) | HIGH |
| 8% of typical 4-5 yr olds not trained | Same study | HIGH |
| 6.1x gap ASD vs typical | Derived | HIGH |
| 59% can't signal urination needs | Iqbal 2022 (N=63) | MEDIUM |
| 71% can't signal defecation needs | Iqbal 2022 | MEDIUM |
| 19% can recognize thirst | Iqbal 2022 | MEDIUM |
| >90% atypical sensory processing | Leekam et al. 2007 | HIGH |
| 4x more likely GI problems | McElhanon et al. 2014 | HIGH |
| Interoception CAN be trained (8-week pilot) | Hample, Mahler & Amspacher 2020 | MEDIUM |
| 49 studies confirm interoception differences | Barmpagiannis & Baldimtsi 2025 | HIGH |
| 92% clearer body awareness in 2 wks (BKC internal) | Internal survey, N=5,679 | LOW |
| 100,000+ satisfied parents | Sales volume | LOW |
| 16,511 reviews · 4.9★ | On-site | OK |

Source: 03-science-library.md, Sections 2-13; 04-mechanism-positioning.md, Section 2.4

---

*End of S01-A Framework Document. All decisions sourced to original documents. Ready for Phase 2 write.*
