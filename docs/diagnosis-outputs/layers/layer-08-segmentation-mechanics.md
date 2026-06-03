# Layer 8 — Segmentation Mechanics: Definitive Synthesis

**BrightKidCo Email Ecosystem — Diagnosis Layer 8 R5**
**Generated:** 2026-05-24
**Consolidates:** R1 (Client Files), R2 (Skill Loading), R4 (Cross-Reference)
**External Research:** Referenced from Layer 4 R3 (Avatar External Research) and Layer 7 (Conversion Probabilities)
**Cross-Reference Targets:** Layer 4 (Avatar Levels), Layer 7 (Conversion Probabilities), Layer 16 (Flow Architecture)

---

## TABLE OF CONTENTS

1. [Executive Summary](#1-executive-summary)
2. [Pop-Up Specification](#2-pop-up-specification)
3. [Klaviyo Profile Properties](#3-klaviyo-profile-properties)
4. [Complete Tag Taxonomy](#4-complete-tag-taxonomy)
5. [Flow Routing Table — 25 Flows](#5-flow-routing-table--25-flows)
6. [Segment Definitions](#6-segment-definitions)
7. [General Fallback Sub-Group Routing Matrix](#7-general-fallback-sub-group-routing-matrix)
8. [Segment Migration Strategy](#8-segment-migration-strategy)
9. [Implementation Checklist](#9-implementation-checklist)
10. [Cross-Reference Map](#10-cross-reference-map)
11. [List Health Recommendations](#11-list-health-recommendations)
12. [External Benchmarks & Best Practices](#12-external-benchmarks--best-practices)
13. [Gap Analysis & Recommended Optimizations](#13-gap-analysis--recommended-optimizations)

---

<a name="1-executive-summary"></a>
## 1. EXECUTIVE SUMMARY

The BrightKidCo segmentation system routes each subscriber into the correct email experience based on their **avatar level** (Level 1/2/3 or General Fallback), **behavioral state** (engaged, at-risk, inactive), and **purchase history** (first-time, repeat, lapsed). The system is powered by a **pop-up self-selection widget** that captures the avatar level at signup, **15 Klaviyo tags** that track state transitions, and **25 Klaviyo flows** that deliver level-specific or cross-level content.

### Core Architecture

```
Pop-up Signup (Self-ID)
  → Avatar tag applied (avatar_level1/2/3 or avatar_general)
  → Welcome Flow variant (4 level variants)
  → Post-welcome tracking (welcome_completed tag)
  → Behavioral tags (at_risk, inactive_60, inactive_120)
  → Purchase tags (buyer_1pair/3plus3/5plus5)
  → Migration tags (GF → level-specific via click/reply/Day-14 mail)
  → Sunset/Suppression (120d inactive)
```

### Audience Distribution

| Segment | % of Assigned | % of Total Real Volume | Notes |
|---------|:------------:|:----------------------:|-------|
| Level 1 | ~35% | ~17.5% | Verbal, 3-5 yrs, Pre-K driven |
| Level 2 | ~40% (LARGEST) | ~20% | Mixed verbal, 5-7 yrs, sensory+BCBA |
| Level 3 | ~25% | ~12.5% | Non-verbal, 6-10+ yrs, dignity-first |
| General Fallback | N/A | ~50% | Includes all non-pop-up entries |
| **Total** | **100%** | **100%** | |

### Key Routing Principle

- **Before level tag known** (GF/no tag) → Cross-Level (DOC5)
- **After level tag known** → Level-specific (DOC2/3/4) for educational/winback/FAQ flows
- **High-velocity flows** (Cart/Checkout/Browse) → Cross-Level even if tag known (speed > segmentation)
- **Post-Purchase Day 0-21** → Cross-Level (DOC5) — education-first
- **Post-Purchase Day 22+** → Level-specific if tag known

---

<a name="2-pop-up-specification"></a>
## 2. POP-UP SPECIFICATION

### Technical Specs

| Element | Detail |
|---------|--------|
| Trigger | 8-15 seconds after arrival OR exit-intent |
| Display | 1-step pop-up with email + question |
| Mobile | Full-screen on mobile, mobile-optimized |
| Frequency | Max 1x per 7 days per visitor |
| Implementation | Klaviyo Forms or external tool (Privy, Justuno) |

### Step 1 Content — Self-Selection

| Element | Text |
|---------|------|
| Headline | "Get 10% off + a potty training plan built for kids like yours." |
| Subheadline | "What describes your child best?" |
| Email Field | [enter your email] — required field |
| First Name Field | [enter your first name] — required field |
| CTA Button | [Get My 10% Code] |
| Privacy Note | "We respect your inbox. Unsubscribe anytime." |

### 4 Selection Buttons → Tags

| Button Label | Klaviyo Tag | Profile Doc | Hidden Level |
|-------------|:-----------:|:-----------:|:------------:|
| "Talks about potty but won't actually do it" | `avatar_level1` | DOC2 (Level 1) | Pre-K urgency, verbal |
| "Sensory issues, tried many methods" | `avatar_level2` | DOC3 (Level 2) | Sensory-dominant, method-cycling |
| "Non-verbal or high support needs" | `avatar_level3` | DOC4 (Level 3) | Dignity-first, long timeline |
| "Still figuring out what's going on" | `avatar_general` | DOC5 (General Fallback) | Unknown — migrate later |

### Step 2 Content — Offer Delivery (Immediately After Submit)

| Element | Text |
|---------|------|
| Headline | "Your code is ready." |
| Code Display | WELCOME10 (prominent, large font) |
| Note | "Auto-applies at checkout. Valid 7 days." |
| CTA Button | [Shop Now] |
| Close Option | "or keep browsing" |

**Critical implementation detail:** Code is displayed DIRECTLY in the pop-up, not sent via email confirmation. Customer can buy immediately without checking inbox.

### Klaviyo Form Integration

- Pop-up via Klaviyo Forms or external tool
- Email + tag written to Klaviyo profile on submit
- Tag triggers Welcome Flow (level-specific variant)
- First name collected for personalization
- Consent tracked (GDPR-compliant checkbox recommended for UK/EU)

---

<a name="3-klaviyo-profile-properties"></a>
## 3. KLAVIYO PROFILE PROPERTIES

### Standard Properties (Klaviyo Built-In)

| Property | Type | Notes |
|----------|------|-------|
| `first_name` | string | Required at signup |
| `last_name` | string | Optional |
| `email` | string | Primary identifier |
| `created_at` | datetime | Auto-set by Klaviyo |
| `consent` | boolean (GDPR) | GDPR checkbox |

### Custom Properties

| Property | Type | Values | Purpose |
|----------|------|--------|---------|
| `avatar_level` | string | `"level1"` / `"level2"` / `"level3"` / `"general"` | Primary segmentation — maps to DOC 2/3/4/5 |
| `child_age` | string | Optional, free text | For age-based content calibration |
| `signup_source` | string | `"popup"` / `"checkout"` / `"referral"` / `"other"` | Track acquisition channel |
| `welcome_flow_completed` | boolean | `true` / `false` | Binary gate — unlocks post-welcome flows |
| `last_purchase_pack_size` | string | `"1pair"` / `"3+3"` / `"5+5"` | Replenishment timing and upsell targeting |
| `vip_customer` | boolean | `true` / `false` | High LTV flag (3+ orders) |
| `purchase_reason` | string | Free text | Zero-party data — "What brought you here?" |
| `label_sensitive` | boolean | `true` / `false` | Internal flag — never use ASD language with these subscribers |
| `rfm_recency` | integer | 1-5 | Phase 2+: RFM score |
| `rfm_frequency` | integer | 1-5 | Phase 2+: RFM score |
| `rfm_monetary` | integer | 1-5 | Phase 2+: RFM score |
| `rfm_persona` | string | e.g., "Champion", "At Risk" | Phase 2+: RFM persona label |

### Predictive Properties (Phase 2+ — Klaviyo Predictive Analytics)

| Property | Purpose | Requirement |
|----------|---------|:-----------:|
| Predicted CLV | Identify high-value subscribers | 500+ customers, 12+ months data |
| Churn Risk Score (1-5) | Proactive retention targeting | 500+ customers, 12+ months data |
| Next Purchase Date | Replenishment timing optimization | 500+ customers, 12+ months data |

---

<a name="4-complete-tag-taxonomy"></a>
## 4. COMPLETE TAG TAXONOMY

**Total: 15 tags** organized into 3 categories.

### 4.1 Avatar Level Tags (4 tags — from pop-up self-selection)

| Tag | Trigger | Primary Flow | Exit Condition |
|-----|---------|:------------:|----------------|
| `avatar_level1` | Pop-up button 1 | Welcome Flow L1 (DOC2) | `welcome_completed = true` |
| `avatar_level2` | Pop-up button 2 | Welcome Flow L2 (DOC3) | `welcome_completed = true` |
| `avatar_level3` | Pop-up button 3 | Welcome Flow L3 (DOC4) | `welcome_completed = true` |
| `avatar_general` | Pop-up button 4 | Welcome Flow GF (DOC5) | `welcome_completed = true` |

**Routing rules for avatar tags:**
- Welcome Flow: Level-specific variant (DOC2/3/4/5)
- Cart/Checkout/Browse Abandonment: Cross-Level always (DOC5)
- PP-Education Day 0-21: Cross-Level (DOC5)
- PP-Extended Education Day 22+: Level-specific if tag known
- PP-Extended Upsell Day 28: Level-aware content
- Winback Path A/B: Level-specific variants
- FAQ/Objection Library: Level-specific variants
- Replenishment A/B/C: Cross-Level (timing-based)

### 4.2 Behavioral Tags (6 tags — engagement tracking)

| Tag | Trigger | When Applied | Flow Impact | Exit Condition |
|-----|---------|:------------:|-------------|----------------|
| `welcome_completed` | Finished Welcome Flow | After Welcome Flow completes | Excludes from Welcome Flow. Unlocks PP-Extended Education trigger. | Set to `true`, permanent |
| `welcome_completed_no_purchase` | Finished Welcome, didn't buy | After Welcome Flow (no purchase) | Routes to FAQ/Objection Library (Phase 3). Enables Winback Path B. | Purchase OR 60d inactivity |
| `post_purchase_active` | Engaged post-purchase | Behavioral trigger (opens + clicks) | Positive signal. Unlocks Referral Flow eligibility at Day 30. | Engagement degrades |
| `at_risk_no_open` | 3-7 days no opens | Engagement tracking | Routes to PP-Support At-Risk (Phase 3). | Open detected OR 60d escalation |
| `inactive_60_days` | 60 days of inactivity | No engagement | Routes to Winback Path A (if had purchase) OR Winback Path B (if no purchase). | Engagement detected |
| `inactive_120_days` | 120 days of inactivity | No engagement after Winback | Routes to Sunset Flow. Final 2 mails then suppression. | Suppression from active list |

### 4.3 Transaction Tags (5 tags — purchase-based)

| Tag | Trigger | Flow Impact | Upsell Path |
|-----|---------|-------------|-------------|
| `buyer_1pair` | Purchased 1 Pair | Replenishment A at Day 14. PP-Direct Upsell at Day 1-3. | Upgrade to 3+3 bundle |
| `buyer_3plus3` | Purchased 3+3 Bundle | Replenishment B at Day 75. PP-Extended Upsell at Day 28. | Upgrade to 5+5 bundle |
| `buyer_5plus5` | Purchased 5+5 Bundle | Replenishment C at Day 150. VIP consideration. | Referral flow |
| `repeat_buyer` | Multiple purchases | Cross-level loyalty content. Excluded from Winback A. | VIP track preparation |
| `vip_buyer` | 3+ orders | Routes to VIP Flow (if exists). Highest-tier content. | Referral / Loyalty rewards |

### 4.4 Tag Interaction Matrix

When multiple tags coexist on a profile, the following conflict resolution applies:

| Primary Tag | Secondary Tag | Routing Behavior | Priority Rule |
|:-----------:|:-------------:|------------------|:-------------:|
| `avatar_level1/2/3` | `welcome_completed` | Level-specific flows activated; welcome flow skipped | Tag takes priority for content; `welcome_completed` is a binary gate |
| `avatar_general` | `welcome_completed` | Cross-Level flows activated; welcome flow skipped | General content until migration |
| `avatar_level1/2/3` | `inactive_60_days` | Winback Path A, still level-specific | Engagement tag routes to winback; avatar tag determines content variant |
| `avatar_general` | `inactive_60_days` | Winback Path A, cross-level | No level content possible; use universal hooks |
| `avatar_level1/2/3` | `at_risk_no_open` | PP-Support At-Risk (cross-level) | At-risk behavior overrides level-specific routing for this flow only |
| `avatar_general` | `post_purchase_active` | Cross-level content, Day 30 Referral check | Positive engagement → referral eligibility |
| `buyer_X` | `avatar_level1/2/3` | Level-specific replenishment post-purchase flows | Avatar tag determines content; transaction tag determines timing/product |

---

<a name="5-flow-routing-table--25-flows"></a>
## 5. FLOW ROUTING TABLE — 25 Flows

### 5.1 Welcome Flow — Level-Segmented (4 Variants)

| Tag | Flow Variant | Profile Doc | Condition | Conversion Range |
|-----|:------------:|:-----------:|-----------|:----------------:|
| `avatar_level1` | Welcome Flow L1 | DOC2 + DOC1 | Tag + `welcome_completed = false` | 15-25% |
| `avatar_level2` | Welcome Flow L2 | DOC3 + DOC1 | Tag + `welcome_completed = false` | 8-15% |
| `avatar_level3` | Welcome Flow L3 | DOC4 + DOC1 | Tag + `welcome_completed = false` | 4-8% |
| `avatar_general` | Welcome Flow GF | DOC5 + DOC1 | Tag + `welcome_completed = false` | 5-10% |

### 5.2 Complete 25-Flow Routing Table

| # | Flow Name | Phase | Trigger | Audience Filter | Segmentation | Exit Condition | Conv. Range |
|:-:|-----------|:-----:|---------|-----------------|:------------:|----------------|:-----------:|
| 01 | Welcome Flow | P1 | Form Submit (pop-up) | avatar_level tag | 4 level variants | `welcome_completed = true` | 4-25% |
| 02 | Cart Abandonment | P1 | Cart Abandoned (Klaviyo) | No purchase 24h | Cross-level | Purchase within 24h | 5-15% |
| 03 | Checkout Abandonment | P1 | Started Checkout (Klaviyo) | No purchase 1h | Cross-level | Purchase within 1h | 5-20% |
| 04 | Browse Abandonment | P2 | Viewed Product, no Cart | No cart 24h | Cross-level | Cart created within 24h | 3-10% |
| 05 | Order Confirmation | P1 | Order Placed (Shopify) | All | Cross-level | N/A (transactional) | N/A |
| 06 | Shipping Notification | P1 | Order Fulfilled | All | Cross-level | N/A (transactional) | N/A |
| 07 | Out for Delivery | P1 | Carrier update | All (optional) | Cross-level | N/A (transactional) | N/A |
| 08 | Arrived & Welcome | P1 | Carrier Delivered | All | Cross-level | N/A (transactional) | N/A |
| 09 | PP-Direct Upsell | P1 | Order Placed (Day 1-3) | All | Cross-level | Purchase | 2-5% |
| 10 | PP-Mary-S-Story | P2 | Order Placed (Day 3) | All | Cross-level | N/A (brand building) | 2-4% |
| 11 | PP-Education Day 0-21 | P2 | Order Placed | All | Cross-level (DOC5) | After 21 days | 2-5% |
| 12 | PP-Level Detection | P1 | Day 14 + no level tag | GF only | Cross-level | Tag set OR 14d no click | 8-12% |
| 13 | PP-Extended Education | P3 | Level tag activated (Day 22) | Level tag known | 4 level variants | Purchase | 3-10% |
| 14 | PP-Extended Upsell | P2 | Level tag (Day 28) | Level tag known | Level-aware content | Purchase | 5-10% |
| 15 | PP-Mid Check-In | P2 | Day 30-60 | All | Cross-level | N/A (engagement) | 3-5% |
| 16 | PP-Support At-Risk | P3 | Day 3-7 no opens | `at_risk_no_open` | Cross-level | Open detected | 2-4% |
| 17 | Replenishment A | P2 | 1-pair order (Day 14) | `buyer_1pair` | Cross-level | Purchase | 5-10% |
| 18 | Replenishment B | P2 | 3+3 order (Day 75) | `buyer_3plus3` | Cross-level | Purchase | 4-8% |
| 19 | Replenishment C | P2 | 5+5 order (Day 150) | `buyer_5plus5` | Cross-level | Purchase | 3-6% |
| 20 | Review Request | P2 | Day 30 post-purchase | All | Cross-level | Review submitted | 1-3% |
| 21 | Winback Path A | P2 | Last purchase + 90d no engagement | Purchase history | 4 level variants | Engagement detected | 2-5% |
| 22 | Winback Path B | P3 | Signup + 60d no purchase | No purchase | 4 level variants | Purchase | 2-4% |
| 23 | Sunset Flow | P3 | 120 days inactive | `inactive_120` | Cross-level | Final mail → suppression | <1% |
| 24 | FAQ/Objection Library | P3 | Welcome done + no purchase | `welcome_completed_no_purchase` | Level-specific | Purchase | 4-8% (L2 best) |
| 25 | Referral Flow | P3 | Day 30 + positive engagement | `post_purchase_active` | Cross-level | Referral submitted | 2-4% |

### 5.3 Conversion Probability by Flow × Segment

| Flow | L1 (Best Cell) | L2 (Volume Cell) | L3 (Long Game) | GF (Mixed) |
|:----:|:--------------:|:----------------:|:--------------:|:----------:|
| Welcome Flow | **15-25%** | 8-15% | 4-8% | 5-10% |
| Cart Recovery | **10-15%** | 5-10% | 3-5% | 5-10% |
| Checkout Abandon | **10-20%** | 5-10% | 3-5% | 5-10% |
| Browse Abandon | 5-8% | 3-5% | — | 3-5% |
| FAQ Mail | — | **4-8%** | 2-4% | 2-3% |
| PP-Extended Education | 5-10% | 4-8% | 3-5% | 3-6% |
| Winback A E1 | 2-3% | 2-4% | **3-5%** | 2-3% |
| Winback A E2 | 2-3% | 2-4% | 2-4% | 2-3% |

### 5.4 Revenue Priority Ranking

| Rank | Segment Combination | Conversion | Audience Weight | Revenue Impact |
|:----:|-------------------|:----------:|:--------------:|:--------------:|
| 1 | **L1 x Phase 2** — Welcome E2 (Deadline Pressure) | 15-25% | ~17.5% | ★★★ HIGHEST |
| 2 | **L2 x Phase 3** — Welcome + FAQ (Volume) | 8-15% | ~22% | ★★★ HIGH |
| 3 | **L1 x Phase 3** — Welcome + Cart Recovery | 10-18% | ~10.5% | ★★★ HIGH |
| 4 | **GF x C** (Sensory-Difference) — Welcome + Browse | 8-15% | ~10% | ★★ HIGH |
| 5 | **L2 x Phase 2** — Welcome (earlier, less skeptical) | 10-15% | ~10% | ★★ HIGH |
| 6 | **L1-2 x Phase 2** (Social Pressure) — Welcome E2-E3 | 10-15% | ~28% combined | ★★ HIGH |
| 7 | **L3 x Phase 4B** (Last Push) — Winback | 6-10% | ~8% | ★ Medium |
| 8 | **GF x D** (Non-Selectors) — Migration → Level flows | 5-10% | ~10% | ★ Medium |
| 9 | **L2 x Phase 4** — Winback | 6-10% | ~6% | ★ Medium |
| 10 | **L3 x Phase 3** — Welcome (still cycling) | 5-10% | ~8% | ★ Medium |

---

<a name="6-segment-definitions"></a>
## 6. SEGMENT DEFINITIONS

### 6.1 Standard Klaviyo Segments

#### Engagement-Based Segments

| Segment | Filter Condition | Purpose |
|---------|-----------------|---------|
| Engaged 90 Days | Opened email OR clicked in last 90 days | Default campaign audience (Phase 1) |
| Engaged 30 Days | Opened email OR clicked in last 30 days | VIP-level triggered sends (Phase 2+) |
| Unengaged 180+ Days | 0 opens AND 0 clicks in 180 days | Suppression — exclude from ALL campaigns |
| At-Risk (90d) | Engaged 90 days but 0 clicks in 90 days | Losing interest — targeted re-engagement |

#### Value-Based Segments

| Segment | Filter Condition | Purpose |
|---------|-----------------|---------|
| VIP (Top 10%) | Total spend in top 10% | Phase 2+: Early access, referral, loyalty |
| High AOV | Total spend > $150 | Upsell targeting |
| One-Time Buyers | 1 purchase, no purchase in 90 days | Targeted winback |
| Frequent Buyers | 3+ orders | Referral invitations |

#### Behavioral Segments

| Segment | Filter Condition | Purpose |
|---------|-----------------|---------|
| Added to Cart (24h, No Purchase) | Cart Abandoned event, no purchase 24h | Cart recovery flow |
| Reached Checkout (24h, No Purchase) | Started Checkout event, no purchase 1h | Checkout recovery flow |
| Viewed Product (7d, No Purchase) | Viewed Product event, no purchase 7d | Browse abandonment flow |

#### Demographic Segments

| Segment | Filter Condition | Purpose |
|---------|-----------------|---------|
| US Subscribers | Country = US (~65%) | Country-specific content |
| UK Subscribers | Country = UK (~15%) | UK pricing, terminology |
| AU/NZ Subscribers | Country = AU or NZ (~15%) | Regional seasonal triggers |
| Canada Subscribers | Country = CA (~5%) | Canadian-specific content |

#### Purchase History Segments

| Segment | Filter Condition | Purpose |
|---------|-----------------|---------|
| First-Time Buyers (30d) | 1 purchase within 30 days | Onboarding/education emails |
| Lapsed Customers (90d) | 1 purchase, no repeat in 90 days | Winback flow |
| Repeat Buyers (2+ orders) | 2+ purchases | Loyalty reinforcement (Phase 2+) |
| 1-Pair Buyers | Product purchased = 1 Pair | Replenishment A |
| 3+3 Buyers | Product purchased = 3+3 Bundle | Replenishment B |
| 5+5 Buyers | Product purchased = 5+5 Bundle | Replenishment C |

### 6.2 Flow-Specific Segments (for Flow Triggering)

| Segment | Filter Condition | Triggers |
|---------|-----------------|:--------:|
| Welcome Flow L1 | tag contains `avatar_level1` + `welcome_completed = false` | Flow 01 |
| Welcome Flow L2 | tag contains `avatar_level2` + `welcome_completed = false` | Flow 01 |
| Welcome Flow L3 | tag contains `avatar_level3` + `welcome_completed = false` | Flow 01 |
| Welcome Flow GF | tag contains `avatar_general` + `welcome_completed = false` | Flow 01 |
| Cart Abandonment | Cart Abandoned event + No purchase 24h | Flow 02 |
| Checkout Abandonment | Started Checkout event + No purchase 1h | Flow 03 |
| Browse Abandonment | Viewed Product event + No cart 24h | Flow 04 |
| PP-Level Detection | Order Placed + Day 14 + `avatar_level` = "general" | Flow 12 |
| PP-Extended Education | Level tag activated + Day 22 | Flow 13 |
| PP-Support At-Risk | tag `at_risk_no_open` + Day 3-7 post-purchase | Flow 16 |
| Sunset Flow | tag `inactive_120_days` | Flow 23 |
| FAQ/Objection Library | tag `welcome_completed_no_purchase` | Flow 24 |

### 6.3 Master Suppression Segment (Apply to ALL Campaigns)

| Suppression Criteria | Condition |
|---------------------|-----------|
| Unsubscribed | Klaviyo unsubscribe flag |
| Hard Bounced | Klaviyo bounce tracking |
| Spam Complainers | Klaviyo complaint tracking |
| Unengaged 180+ Days | 0 opens AND 0 clicks in 180 days |
| Role Accounts | `@temp`, `@disposable`, catch-all addresses |
| Sunset In Progress | Currently in Sunset Flow (Flow 23) |

---

<a name="7-general-fallback-sub-group-routing-matrix"></a>
## 7. GENERAL FALLBACK SUB-GROUP ROUTING MATRIX

### 7.1 GF Sub-Group Definitions

The General Fallback segment (~50% of real volume) breaks into 5 sub-groups with distinct routing needs:

| Sub-Group | % of GF | % of Total | Hidden Level | Detection Method | Migration Success |
|:---------:|:-------:|:----------:|:------------:|:----------------:|:----------------:|
| A — Diagnostic Entrants | ~25% | ~10% | Likely L1 | Click migration → L1 story | 15-25% click / 40-50% PP |
| B — Diagnosis-Rejecters | ~15% | ~6% | L1 or L2 | May NEVER migrate; label-sensitive | <10% click / 15-25% PP |
| C — Sensory-Difference | ~25% | ~10% | SPD or L2-like | Click migration → L2 story | 20-35% click / 40-55% PP |
| D — Overwhelmed Non-Selectors | ~25% | ~10% | Actual L1/L2/L3 | PP-Level Detection (Day 14) | 10-15% click / 40-50% PP |
| E — Cart/Browse Without Opt-In | ~10% | ~14% | Any level | Purchase hints (size, bundle) | <5% click / 20-30% PP |

### 7.2 Sub-Group x Flow x Language Sensitivity

| Sub-Group | Recommended Welcome Path | Best Conv. Flow | Language Sensitivity | CTA Style |
|:---------:|:------------------------:|:---------------:|:-------------------:|:---------:|
| A — Diagnostic Entrants | GF Welcome → Click migration → L1 | Welcome E2-E3 | NO diagnosis language | Gentle education |
| B — Diagnosis-Rejecters | GF Welcome indefinitely | Browse Abandon, FAQ | **NO ASD language ever** | Permission-based |
| C — Sensory-Difference | GF Welcome → Click migration → L2 | Welcome E2, FAQ | Science OK; NO ASD required | Medium mechanism |
| D — Overwhelmed Non-Selectors | GF Welcome → PP-Level Detection | PP-Level (Day 14), Cart | Validation heavy | Low-medium |
| E — Cart/Browse | Direct: Symptom + Mechanism + Guarantee | Cart, Browse | Universal | Medium |

### 7.3 GF Optimal Routing Sequences

```
A (Diagnostic Entrants):
  Pop-up → GF Welcome (DOC5) → Day 3: Click migration anchors → Click L1 story → L1 flow
  OR → Day 14 PP-Level Detection → L1 tag → L1 flows

B (Diagnosis-Rejecters):
  Pop-up → GF Welcome (DOC5) → Stay GF forever → Cross-level flows only
  Exception: Day 14 PP-Level Detection → May still reject → Stay GF

C (Sensory-Difference):
  Pop-up → GF Welcome (DOC5) → Day 1: Mechanism hook → Click L2 story → L2 flow
  OR → Day 14 PP-Level Detection → L2 tag → L2 flows

D (Overwhelmed):
  Pop-up → GF Welcome (DOC5) → Day 7: Validation + symptom hooks → Soft migration attempt
  OR → Day 14 PP-Level Detection → L1/2/3 tag → Level flows

E (Cart/Browse):
  No-pop-up entry → Cross-level (DOC5) → Purchase → PP-Level Detection Day 14 → Level flows
```

### 7.4 GF-to-Level Migration Funnel

```
At pop-up:  100% of GF subscribers
                │
                ▼
Click migration anchors (Welcome E2-E4):
  ~15-25% click a level story → tag applied → level-specific flows
  ~75-85% stay in GF
                │
                ▼
PP-Level Detection Mail (Day 14):
  40-50% of purchasers re-select → tag applied → level-specific flows
                │
                ▼
Purchase hints (ongoing):
  10-20% of remaining → probabilistic level assignment
                │
                ▼
Remaining ~25-35% stay in GF permanently (including Group B)
```

---

<a name="8-segment-migration-strategy"></a>
## 8. SEGMENT MIGRATION STRATEGY

### 8.1 The 4 Migration Paths

| Path | Method | Expected Migration Rate | Conversion Uplift | Time to Effect | Risk |
|:----:|:------:|:----------------------:|:-----------------:|:--------------:|:----:|
| 1 | **Click-Based** — Story link in GF mail | 15-25% of GF | **+30-50%** | Immediate on tag | Low — self-selection |
| 2 | **Reply-Based** — NLP analysis of reply | 5-15% of GF | **+20-40%** | Manual review | Medium — false positives |
| 3 | **PP-Level Detection Mail (Day 14)** — STRONGEST | **40-50%** of GF purchasers | **+30-50%** | Day 14+ | Low — explicit choice |
| 4 | **Purchase Hints** — Size/bundle inference | 10-20% of GF purchasers | **+15-25%** | Day of purchase | Medium — may guess wrong |

### 8.2 Path 1: Click-Based Migration (Every GF Mail)

In every GF mail, embed 3-4 migration anchors (story links):

| Anchor | Target Tag | Link Text |
|--------|:----------:|-----------|
| Level 1 story | `avatar_level1` | "If you have a verbal child under 5 who 'almost trained' multiple times, here's Sarah's story →" |
| Level 2 story | `avatar_level2` | "If your kid has sensory issues around the bathroom and you've worked with a BCBA, here's Lisa's path →" |
| Level 3 story | `avatar_level3` | "If your child is 7+ and non-verbal, here's Maria's journey →" |
| Cross-level (stay GF) | (no change) | "If you're not sure yet — here's the general framework →" |

**Implementation:** Klaviyo tag applied on UTM click tracking.

### 8.3 Path 2: Reply-Based Migration

Reply encouragement embedded in Lena voice. Reply content analyzed for level indicators:

| Level | Indicators |
|:-----:|-----------|
| Level 1 | "Pre-K is coming", "3/4/5 years old", "Oh Crap didn't work", "Almost trained" |
| Level 2 | "BCBA/ABA/OT", "5/6/7 years old", "Sensory issues", "Prompt-dependent", "Withholding" |
| Level 3 | "Non-verbal/AAC", "8/9/10 years old", "Never been trained", "Specialty diapers", "Medicaid" |

### 8.4 Path 3: Purchase-Based Hints

| Signal | Indicator | Inferred Level |
|--------|-----------|:--------------:|
| Underwear Size 2T-3T | Likely 3-4 years | Level 1 |
| Underwear Size 4T-5T | 4-5 years mix | L1+L2 |
| Underwear Size XL/XXL | 7+ years | Level 3 |
| Bundle: 1 Pair | Tentative, new | Level 1-2 |
| Bundle: 3+3 | Committed | Level 2 |
| Bundle: 5+5 | High-investment | Level 2-3 |

**Rule:** Never assign tag below 70% confidence. Stay GF if uncertain.

### 8.5 Path 4: PP-Level Detection Mail (Day 14) — STRONGEST

- **When:** Day 14 after purchase
- **Audience:** Subscribers still in GF (no level tag) 14 days after purchase
- **Subject:** "Quick question about your kid"
- **Content:** 4 buttons replicating pop-up selection:
  - Button 1 → `avatar_level1`
  - Button 2 → `avatar_level2`
  - Button 3 → `avatar_level3`
  - Button 4 → `avatar_general` (stays GF)
- **Expected performance:** 65-75% open rate, 35-50% click rate, ~40-50% migration rate
- **After 7 days no click:** Gentle reminder (optional)
- **After 14 days no click:** Stays GF permanently

### 8.6 Migration Rules

1. **General Fallback is NOT an end state** — it's a TEMPORARY state until self-identification
2. **If unclear which level:** use GF, then migrate through click/reply/purchase hints
3. **Never guess a level** — use probability thresholds; stay GF if uncertain (<70% confidence)
4. **Sub-group B (Diagnosis-Rejecters):** NEVER push migration — use ultra-gentle language only
5. **After migration:** Conversion rate jumps significantly — see uplift table below

### 8.7 Migration Impact on Conversion

| Hidden Level is: | GF Conversion | After Migration | Uplift |
|:----------------:|:-------------:|:---------------:|:------:|
| Level 1 | 5-10% | 15-25% | **+100-150%** |
| Level 2 | 5-10% | 8-15% | **+60-80%** |
| Level 3 | 5-10% | 4-8% | **+30-60%** |

---

<a name="9-implementation-checklist"></a>
## 9. IMPLEMENTATION CHECKLIST

### Phase 1: Pre-Launch (Week 1)

#### Pop-Up Setup
- [ ] Create pop-up form in Klaviyo (or external tool)
- [ ] Set trigger: 8-15 seconds OR exit-intent
- [ ] Configure Step 1 headline, subheadline, email field, first name field
- [ ] Create 4 selection buttons with exact copy from spec
- [ ] Configure Step 2 code display (WELCOME10)
- [ ] Set mobile full-screen variant
- [ ] Set frequency cap: max 1x per 7 days per visitor
- [ ] Tag mapping: wire each button to its avatar tag
- [ ] Test full flow: signup → tag applied → profile created

#### Klaviyo Properties & Tags
- [ ] Create custom profile properties:
  - [ ] `avatar_level` (string, values: level1/level2/level3/general)
  - [ ] `child_age` (string, optional)
  - [ ] `signup_source` (string, values: popup/checkout/referral/other)
  - [ ] `welcome_flow_completed` (boolean, default: false)
  - [ ] `last_purchase_pack_size` (string, values: 1pair/3+3/5+5)
  - [ ] `vip_customer` (boolean, default: false)
- [ ] Create all 15 tags in Klaviyo:
  - [ ] 4 avatar level tags
  - [ ] 6 behavioral tags
  - [ ] 5 transaction tags

#### Flow Setup (Phase 1 — Priority Flows)
- [ ] Create Welcome Flow with 4 level variants
- [ ] Create Cart Abandonment Flow
- [ ] Create Checkout Abandonment Flow
- [ ] Create Order Confirmation Flow (transactional)
- [ ] Create Shipping Notification Flow (transactional)
- [ ] Create Arrived & Welcome Flow (transactional)
- [ ] Create PP-Direct Upsell (Day 1-3)
- [ ] Create PP-Level Detection (Day 14)
- [ ] Create PP-Education Day 0-21
- [ ] Create FAQ/Objection Library Flow
- [ ] Set exit conditions on all flows

#### Segment Setup
- [ ] Create Engaged 90 Days segment (default campaign audience)
- [ ] Create Unengaged 180+ Days segment (master suppression)
- [ ] Create Master Suppression segment (unsub + bounced + spam + unengaged 180d)
- [ ] Create Welcome Flow trigger segments (4 variants)
- [ ] Create Cart/Checkout/Browse abandonment segments
- [ ] Create First-Time Buyers (30d) segment
- [ ] Create Lapsed Customers (90d) segment
- [ ] Create country segments (US/UK/AU-NZ/Canada)

#### Data Quality
- [ ] Enable Klaviyo IP-based location detection (fallback)
- [ ] Set up real-time email verification (reduce bounces)
- [ ] Configure GDPR consent tracking (checkbox on pop-up)

### Phase 1: Week 2

#### Additional Flows
- [ ] Create Browse Abandonment Flow
- [ ] Create PP-Mary-S-Story (Day 3)
- [ ] Create PP-Mid Check-In (Day 30-60)
- [ ] Create PP-Extended Upsell (Day 28)
- [ ] Create Review Request (Day 30)
- [ ] Create PP-Support At-Risk Flow
- [ ] Create Replenishment A (1-pair, Day 14)
- [ ] Create Replenishment B (3+3, Day 75)

#### List Health
- [ ] Set up weekly quick-check dashboard (6 metrics)
- [ ] Create Engagement Velocity tracking (30-day rolling open/click rates)
- [ ] Configure Revenue Per Subscriber tracking
- [ ] Set up data quality monitoring (missing names, stale profiles)

#### Migration Infrastructure
- [ ] Embed migration anchors in all GF mail templates
- [ ] Set up UTM tracking for story link clicks
- [ ] Configure reply tracking for NLP-based migration
- [ ] Create PP-Level Detection mail template (Day 14)
- [ ] Set up purchase hint inference rules

### Phase 2 (Month 2-3)

#### Extended Flows
- [ ] Create PP-Extended Education (Day 22) — 4 level variants
- [ ] Create Winback Path A (90d no engagement) — 4 level variants
- [ ] Create Winback Path B (60d no purchase) — 4 level variants
- [ ] Create Referral Flow
- [ ] Create Sunset Flow (120d inactive)

#### Advanced Segmentation
- [ ] Add post-welcome bridge sequence for L2/L3
- [ ] Add level-aware cart recovery variants
- [ ] Create VIP segment (top 10% by revenue)
- [ ] Set up zero-party data collection (post-purchase survey)
- [ ] Implement monthly list health ritual

#### Replenishment Optimization
- [ ] Create Replenishment C (5+5, Day 150)
- [ ] Add level-sensitive replenishment timing
  - [ ] L1: Standard timing
  - [ ] L2: Standard timing
  - [ ] L3: Delay 7-14 days

### Phase 3 (Month 6+)

#### Advanced Analytics
- [ ] Implement quarterly RFM scoring (500+ customers required)
- [ ] Set up RFM custom properties in Klaviyo
- [ ] Map 11 RFM personas to content strategy
- [ ] Enable Klaviyo Predictive Analytics (12+ months data)
- [ ] Implement predicted CLV-based content targeting
- [ ] Implement churn risk-based proactive retention flows

#### Optimization
- [ ] Add level-specific Sunset Flow variants (L1/L3 variants)
- [ ] Create VIP Flow for repeat/vip buyers
- [ ] Implement time-decayed level tags for winback
- [ ] Create Sub-Group B label-sensitive track
- [ ] Add segment size benchmark review (30-day cadence)

---

<a name="10-cross-reference-map"></a>
## 10. CROSS-REFERENCE MAP

### 10.1 Layer 4 (Avatar Levels) x Layer 8 (Segmentation Mechanics)

| Layer 4 Concept | Layer 8 Implementation |
|----------------|----------------------|
| Level 1 — Sarah (Verbal, Hope-Intact) | Tag `avatar_level1` → DOC2 content in all level-specific flows |
| Level 2 — Lisa (Mixed Verbal, Method-Cycling) | Tag `avatar_level2` → DOC3 content — most tags exist for L2 flows |
| Level 3 — Maria (Non-Verbal, Dignity-First) | Tag `avatar_level3` → DOC4 content — slowest decision speed |
| General Fallback (Cross-Level) | Tag `avatar_general` → DOC5 content + migration paths |
| 4 Emotional Phases | Decision speed mapping → flow timing (P2 = fast welcome, P3 = extended nurture) |
| 5 Conversion Levers | Flow-specific CTA strength recommendations per segment |
| 10 Failed Methods | FAQ/Objection Library content mapped to DOC 2/3/4/5 |
| Tonality Calibration | Level-segmented flows ensure correct tonality per segment |
| Forbidden Phrases | Sub-Group B label-sensitive track avoids ASD language |

### 10.2 Layer 7 (Conversion Probabilities) x Layer 8 (Segmentation Mechanics)

| Layer 7 Concept | Layer 8 Implementation |
|----------------|----------------------|
| L1 x P2 = 15-25% (Best Cell) | Welcome Flow L1 — fastest CTA, Pre-K urgency, Day 2-3 conversion attempt |
| L2 x P3 = 8-15% (Volume Cell) | Welcome Flow L2 — science-first, extended nurture, Day 7-14 conversion |
| L3 x P4 = 4-8% (Long Game) | Welcome Flow L3 — dignity-first, permission-based, Day 14-21 conversion |
| GF = variable 5-10% | Welcome Flow GF — universal hooks, migration opportunities embedded |
| Tier 1: Cash Cow | Optimize L1 routing — fastest flows, highest CTA aggressiveness |
| Tier 2: Volume Engine | Optimize L2 routing — FAQ/Objection Library is highest-leverage L2 flow |
| Tier 3: High-LTV Niche | L3 routing focuses on trust, NOT conversion speed |
| Cart Recovery (10-20%) | Cross-level implementation — potential level-aware optimization |
| FAQ Mail (4-8% L2 best) | Level-specific routing confirmed — L2 x FAQ is highest-performer |

### 10.3 Layer 16 (Flow Architecture) x Layer 8 (Segmentation Mechanics)

| Layer 16 Concept | Layer 8 Implementation |
|-----------------|----------------------|
| 25-flow system | Complete routing table with trigger, audience, segmentation, exit |
| Welcome Flow (4 variants) | Level-specific routing based on avatar tag |
| PP-Education 0-21 (cross-level) | DOC5 always — education-first while level uncertain |
| PP-Extended Education (4 variants) | Level-specific routing with extended content |
| PP-Level Detection | Cross-level bridge from GF → Level-specific |
| Winback A/B (4 variants each) | Level-specific routing for re-engagement |
| Sunset/Suppression | Cross-level with optional level-specific variants |
| Cart/Checkout/Browse (cross-level) | Speed-priority — even if tag known, use DOC5 |

### 10.4 Decision Speed Map

| Segment | Decision Speed | Urgency | Best CTA Timing | Best CTA Type |
|---------|:-------------:|:-------:|:---------------:|:-------------:|
| L1 x P2 | 2-7 days | HIGH (Pre-K) | Day 2-3 of Welcome | "Shop Now" with Pre-K framing |
| L2 x P3 | 7-21 days | LOW (event-triggered) | Day 7-14 of Welcome | "Learn More" / "See How It Works" |
| L3 x P4 | 14-30+ days | ZERO | Day 14-21 of Welcome | "Read Their Story" / permission |
| GF (all) | 5-14 days | Low-Medium | Day 5-7 of Welcome | Universal "Find Out More" |

### 10.5 Conversion Lever Effectiveness by Segment

| Lever | L1 | L2 | L3 | GF |
|:-----:|:--:|:--:|:--:|:--:|
| L1 — Mechanism | ★★★★ High | **★★★★★ Very High** | ★★★ High | ★★★★ High |
| L2 — Pull-ups make worse | ★★★★ High | ★★★★ High | ★★ Medium (CAUTION) | ★★★ Medium |
| L3 — 60-Day Guarantee | **★★★★★ Very High** | **★★★★★ Very High** | **★★★★★ Very High** | ★★★★ High |
| L4 — Lena's two sons | ★★★★ High | **★★★★★ Very High** | **★★★★★ Very High** | ★★★★ High |
| L5 — 49% SPARK Stat | ★★★ Medium | **★★★★★ Very High** | ★★★ Medium-High | ★★★★ High |

---

<a name="11-list-health-recommendations"></a>
## 11. LIST HEALTH RECOMMENDATIONS

### 11.1 Weekly Quick-Check Metrics (Phase 1)

| Metric | Target | Warning | Critical |
|--------|:-----:|:-------:|:--------:|
| Last campaign open rate | > 30% | < 25% | < 20% |
| Last campaign click rate | > 3% | < 2% | < 1% |
| Bounce rate | < 0.5% | 0.5-1% | > 1% |
| Spam complaint rate | < 0.01% | 0.01-0.05% | > 0.05% |
| Unengaged 180+ Days | < 20% of list | 20-30% | > 30% |
| Sunset flow active? | YES | — | NO |
| Monthly net growth | > 1% | 0-1% | Negative |

### 11.2 Growth Targets

| Metric | Target | Notes |
|--------|:-----:|-------|
| Monthly list growth | > 2% | Pop-up is primary acquisition channel |
| Net growth | > 1% | Sustainable growth outpacing churn |
| Churn per campaign | < 0.2% unsubscribe rate | Sensitive audience = lower tolerance |
| Spam complaint | < 0.01% | Tone-deaf campaign could spike complaints |

### 11.3 Data Quality

| Metric | Target | Implementation |
|--------|:-----:|----------------|
| Missing first names | < 10% | Required field on pop-up |
| Missing location | < 30% | IP-based location fallback in Klaviyo |
| Stale data (12mo zero activity) | < 5% | Sunset flow handles automatic cleanup |
| Duplicate profiles | < 1% | Klaviyo dedup enabled |

### 11.4 Suppression Rules

| Who to Suppress | When | Method |
|-----------------|:----:|--------|
| Unsubscribed | Immediately | Klaviyo unsubscribe mechanism |
| Hard bounces | Immediately | Klaviyo bounce tracking |
| Spam complainers | Immediately | Klaviyo complaint tracking |
| Unengaged 180+ days | After 180 days of inactivity | Segment suppression |
| Bot/role accounts | On detection | Role domain list + domain scoring |
| Sunset complete | After 2 final mails | Flow 23 → permanent suppression |

### 11.5 Engagement Windows (BrightKidCo-Specific)

BrightKidCo's audience has a unique engagement pattern: parents in "research mode" may open emails for weeks but never click. Standard e-commerce engagement windows may misclassify them.

| Signal | Window | Notes |
|--------|:-----:|-------|
| Open-based engaged | 90 days | Default — accounts for MPP inflation |
| Click-based engaged | 90 days | More reliable signal for this audience |
| Research Mode (open but no click) | Up to 6 months | NOT churn — still engaged in research |
| True inactive (no open, no click) | 60 days → mark at-risk | Begin at-risk flow |
| True inactive (no open, no click) | 120 days → sunset | Final 2 mails then suppress |

### 11.6 Deliverability Setup

| Component | Detail |
|-----------|--------|
| Sending domain | send.brightkidco.com |
| From Name | "Lena from BrightKidCo" |
| From Email | support@brightkidco.com |
| Reply-To | support@brightkidco.com |
| Domain Auth | DKIM + SPF + DMARC |
| Footer | Reusable Klaviyo block with unsubscribe |
| MPP mitigation | Track click rate as primary engagement signal |

---

<a name="12-external-benchmarks--best-practices"></a>
## 12. EXTERNAL BENCHMARKS & BEST PRACTICES

### 12.1 Segmentation Benchmarks

| Metric | E-commerce Average | BrightKidCo Target | Notes |
|--------|:-----------------:|:------------------:|-------|
| Engaged 30 Days | 20-35% | 20-30% | Lower due to research-mode behavior |
| Engaged 90 Days | 40-55% | 35-45% | Adjusted for longer buying cycle |
| Unengaged 180+ Days | < 20% | < 25% | Longer research = more apparent inactivity |
| Pop-up conversion rate | 2-5% | 2-4% | Sensitive audience, higher skepticism |
| Segment overlap | 15-30% | 10-20% | Level tags are mutually exclusive |

### 12.2 External Research Validation

From Layer 4 R3 (External Research) — 11 of 12 criteria verified:

| Finding | Source | Status |
|---------|--------|--------|
| 49% of autistic 4-5 yr olds not toilet trained | SPARK/Wiggins 2022 | VERIFIED |
| Interoception affects toileting | Kelly Mahler; ERIC | VERIFIED |
| Vast majority CAN be trained | Elizabeth Cross, PhD | VERIFIED |
| Parent guilt is common | TikTok; Reddit; grief literature | VERIFIED |
| "Tried everything" is trauma response | Forum analysis; ABA literature | VERIFIED |
| Standard methods fail for sensory reasons | Kelly Mahler; OT literature | VERIFIED |
| Resignation phase exists | Reddit; Cross protocol | VERIFIED |
| Pull-ups actively prevent learning | ERIC; OT literature | VERIFIED |
| Body-Signal Learning Layer mechanism | Interoception science | VERIFIED |
| 4 emotional phases model | Proprietary (Giuliano) | STRONGLY SUPPORTED by adjacent literature |
| Linear progression assumption | Kubler-Ross grief cycle is recursive | NOT FULLY VERIFIED — add non-linearity documentation |

### 12.3 Best Practices Applied

| Practice | Application in BrightKidCo |
|---------|---------------------------|
| Symptom-first segmentation | Never use level labels in mail copy — describe symptoms |
| Zero-party data as gold standard | Pop-up self-selection IS zero-party data |
| OR logic for engagement (not AND) | "Opened OR clicked" — excludes legitimate openers with AND |
| Suppression backbone | Master suppression segment applied to ALL campaigns |
| Segments as building blocks | 5-layer framework enables multi-dimensional targeting |
| Preference-based frequency control | Phase 2+: preference center for emotionally sensitive audience |
| Click-based engagement > open-based | Apple MPP mitigation — track clicks as primary signal |

### 12.4 Recommended Refinements from External Validation

| Finding | Segmentation Impact |
|---------|-------------------|
| Phase model may be recursive | Add behavior tracking for regression triggers (new school year, size change, sibling comparison) |
| Age ranges are approximate | Use self-reported attempt count + child age as dual determinants |
| Phase 1 skepticism may be higher | Autism parents may arrive already skeptical from prior failed interventions |
| GF ~50% can mask hidden level distribution | Migration infrastructure (Paths 1-4) is critical to surface hidden levels |
| Interoception mechanism is verified | Lead with mechanism explanation in Welcome E2 — highest conversion mail position |

---

<a name="13-gap-analysis--recommended-optimizations"></a>
## 13. GAP ANALYSIS & RECOMMENDED OPTIMIZATIONS

### 13.1 Tag Coverage Analysis

| Tag Category | Count | All Mapped to Flow? | All Mapped to Exit? | All Mapped to Conv. Prob.? |
|:------------:|:-----:|:-------------------:|:-------------------:|:--------------------------:|
| Avatar Level Tags | 4 | ✅ All 4 | ✅ Yes | ✅ Yes |
| Behavioral Tags | 6 | ✅ All 6 | ✅ Yes | ❌ No — 3 tags missing |
| Transaction Tags | 5 | ✅ All 5 | ⚠️ Partial — 2 missing | ❌ No — none mapped |

### 13.2 Routing Conflicts

| ID | Conflict | Severity | Resolution |
|:--:|:---------|:--------:|-----------|
| C1 | **Cart Abandonment x Level-Specific Content** | 🟡 Medium | Cart recovery could be level-aware while keeping trigger cross-level. L1 urgency variant vs L2 science variant vs L3 dignity variant. Expected lift: +20-30% L1, +10-15% L2. |
| C2 | **Decision Period x Flow Timeline Mismatch** | 🟡 Medium | L2 (7-21d) and L3 (14-30+d) exceed Welcome Flow length. Add post-welcome bridge sequence. Expected lift: +10-20% L2/L3. |
| C3 | **GF Sub-Group B x Content Relevance** | 🟡 Medium | Create label-sensitive content track within GF for diagnosis-rejecters. |
| C4 | **Winback x Level Tag Staleness** | 🟢 Low | Add time-decay to avatar tags. Re-assess at 6 months. |

### 13.3 Routing Gaps

| ID | Gap | Severity | Resolution |
|:--:|:-----|:--------:|-----------|
| G1 | **No Level Fallback for ~50% of subscribers** | 🔴 CRITICAL | Implement 4-path migration strategy (R1-R4 documented). Behavioral level inference priority. |
| G2 | **No Post-Welcome Bridge for L2/L3** | 🟡 HIGH | Create 2-email "Still Thinking" bridge between Welcome Flow end and Winback trigger. |
| G3 | **No Behavioral Scoring for Level Inference** | 🟡 HIGH | Implement probabilistic level scoring from click behavior, replies, purchase hints. Only assign at >70% confidence. |
| G4 | **No VIP/High-Value Segment Flow** | 🟡 Medium | Create dedicated VIP flow for repeat/vip buyers. |
| G5 | **No Cross-Level Error Mail Content** | 🟢 Low | Create error/default mail variant for corrupted tags. |
| G6 | **No Sunset Flow Level Adaptation** | 🟢 Low | Add dignity-specific variant for L3, Pre-K variant for L1. |

### 13.4 Missing Conversion Probabilities (Need Assignment)

| Tag/Condition | Estimated Conversion | Flow |
|:------------:|:-------------------:|:----:|
| `post_purchase_active` | 2-5% | Referral flow |
| `welcome_completed_no_purchase` | 3-6% | FAQ mail |
| `inactive_60_days` | 2-4% | Winback A/B |
| `buyer_5plus5` (exit condition) | 3-6% | Replenishment C |
| `vip_buyer` (exit condition) | 2-4% | VIP flow |

### 13.5 Recommended Optimizations

#### Critical Fixes (Pre-Launch)

**R1 — Create Level-Aware Cart Recovery Variants (Resolves C1)**
- Add 3 level-aware cart recovery templates alongside cross-level default
- L1 variant: Pre-K deadline urgency
- L2 variant: Mechanism reminder
- L3 variant: Dignity-first
- Expected lift: +20-30% L1 cart recovery, +10-15% L2

**R2 — Add Post-Welcome Bridge Sequence for L2/L3 (Resolves G2)**
- Create 2-email "Still Thinking" bridge between Welcome Flow end and Winback
- L2 bridge: Science FAQ + extended education (Day 21-28)
- L3 bridge: Late-trainer story + permission-based follow-up (Day 21-35)
- GF bridge: Universal symptom hooks + migration opportunity
- Expected lift: +10-20% conversion from L2/L3

**R3 — Define Behavioral Scoring for GF Level Inference (Resolves G1, G3)**
- Implement probabilistic scoring from click behavior, reply content, purchase hints
- Threshold: Only assign tag at >70% confidence; otherwise stay GF
- Expected lift: +30-50% on migrated GF conversion

#### Short-Term Optimizations (Launch + 30 Days)

**R4 — Document Missing Conversion Probabilities**
- Assign conversion estimates for behavioral tags (see 13.4)
- Measure and refine from real data

**R5 — Level-Specific Sunset Flow Variants (Resolves G6)**
- L3 variant: "We honor your journey" language
- L1 variant: "If things change, we're here" language
- Keep cross-level default for L2 and GF

**R6 — Replenishment Timing Optimization by Level**
- L1: Standard timing
- L2: Standard timing
- L3: Delay 7-14 days (allow longer decision period)

#### Medium-Term Optimizations (Phase 2)

**R7 — VIP Flow for Repeat/VIP Buyers (Resolves G4)**
- Exclusive content, higher-value cross-sells, level-aware VIP language
- Trigger: 3+ orders OR `repeat_buyer` + `vip_buyer` tags

**R8 — Time-Decayed Level Tags for Winback (Resolves C4)**
- Add timestamp to avatar tag assignment
- If tag age > 6 months on winback trigger: send level re-assessment
- If no response: default to cross-level winback

**R9 — Sub-Group B Label-Sensitive Track**
- Create separate content track within GF for diagnosis-rejecters
- Keyword detection: if mom says "my kid is just my kid" → apply `label_sensitive` property
- Route to non-diagnosis-language flow variants

---

## QUICK-REFERENCE: ROUTING DECISION TREE

```
Subscriber enters system
        │
        ▼
Has avatar_level tag?
        │
    ┌───┴───┐
    YES      NO (→ GF / no tag)
    │        │
    ▼        ▼
Is flow type              Is flow type
high-velocity?             high-velocity?
(Cart/Checkout/            (Cart/Checkout/
Browse/Order Conf.)        Browse/Order Conf.)
    │              │            │              │
  YES → DOC5     NO →          YES → DOC5     NO →
(CROSS-LEVEL)   Level doc    (CROSS-LEVEL)   DOC5
                (DOC2/3/4                  (GF — migrate
                 depending                   opportunities
                 on tag)                     embedded)
```

## QUICK-REFERENCE: TAG → FLOW ASSIGNMENT

| Tag | Primary Flow | Secondary Flow | Tertiary Flow |
|-----|:------------:|:--------------:|:-------------:|
| `avatar_level1` | Welcome Flow L1 | PP-Ext. Edu L1 | Winback A L1 |
| `avatar_level2` | Welcome Flow L2 | FAQ Mail L2 | Winback A L2 |
| `avatar_level3` | Welcome Flow L3 | PP-Ext. Edu L3 | Winback A L3 |
| `avatar_general` | Welcome Flow GF | PP-Level Detection | Winback A GF |
| `welcome_completed` | PP-Education 0-21 | FAQ Objection | — |
| `welcome_completed_no_purchase` | FAQ Objection Library | Winback Path B | — |
| `post_purchase_active` | PP-Extended Education | Referral Flow | — |
| `at_risk_no_open` | PP-Support At-Risk | → inactive_60 | — |
| `inactive_60_days` | Winback Path A/B | → inactive_120 | — |
| `inactive_120_days` | Sunset Flow | Suppression | — |
| `buyer_1pair` | Replenishment A | PP-Direct Upsell | PP-Ext. Upsell |
| `buyer_3plus3` | Replenishment B | PP-Ext. Upsell | VIP consideration |
| `buyer_5plus5` | Replenishment C | VIP | Referral Flow |
| `repeat_buyer` | Cross-level loyalty | VIP prep | — |
| `vip_buyer` | VIP Flow (TBD) | Referral Flow | — |

---

## QUICK-REFERENCE: SEGMENTATION PRICING

| Product | Price | Notes |
|---------|:-----:|-------|
| 1 Pair | $34.99 | Entry point |
| 3+3 FREE (BESTSELLER) | $79.99 | Suggested first purchase |
| 5+5 FREE | $119.99 | High-investment commitment |
| Discount Code | WELCOME10 | 10% off, auto-apply |
| Guarantee | 60-Day Money Back | Never 30 days |
| Reviews | 16,511 reviews · 4.9★ | Social proof |
| Customers | 100,000+ parents | Social proof volume |

---

*End of Layer 8 — Segmentation Mechanics Definitive Synthesis*
*Sources: Layer 8 R1 (Client Files Extraction), Layer 8 R2 (Segmentation Skills), Layer 8 R4 (Cross-Reference with L4/L7/L16), Layer 4 R3 (External Research), Layer 7 R6 (Conversion Probabilities Synthesis), DOC1-MASTER-FOUNDATION*
*Generated: 2026-05-24*
