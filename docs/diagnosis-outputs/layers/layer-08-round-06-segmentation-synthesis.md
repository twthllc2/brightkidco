# Layer 8 — Segmentation Mechanics: Final Synthesis (R6)
## BrightKidCo Email Ecosystem — Definitive Segmentation Reference
**Generated:** 2026-05-25
**Synthesis Type:** Final — consolidating Rounds 1–5 with cross-layer integration
**Cross-references:** Layer 4 (Avatar Levels), Layer 7 (Conversion Probabilities)
**Sources:** R1 (Client Files), R2 (Skill Loading), R3 (External Research), R4 (Cross-Reference), R5 (Main Diagnosis), Layer 4 Synthesis, Layer 7 Synthesis, Onboarding-todos.txt

---

## TABLE OF CONTENTS

1. [Executive Summary](#1-executive-summary)
2. [Pop-Up Mechanism — Complete Documentation](#2-pop-up-mechanism)
3. [Complete Klaviyo Tag Catalog](#3-complete-klaviyo-tag-catalog)
4. [Complete Profile Properties Schema](#4-complete-profile-properties-schema)
5. [Flow Routing Decision Tree Per Avatar Level](#5-flow-routing-decision-tree)
6. [Segment Definitions & Audience Distribution](#6-segment-definitions)
7. [General Fallback Sub-Group Routing](#7-general-fallback-sub-group-routing)
8. [Segment Migration Strategy](#8-segment-migration-strategy)
9. [Cross-Reference Map: Layer 4 × Layer 8](#9-cross-reference-map-l4)
10. [Cross-Reference Map: Layer 7 × Layer 8](#10-cross-reference-map-l7)
11. [External Validation Summary](#11-external-validation-summary)
12. [Gap Analysis](#12-gap-analysis)
13. [Recommendations](#13-recommendations)
14. [Implementation Checklist](#14-implementation-checklist)
15. [List Health & Deliverability](#15-list-health)
16. [Quick-Reference Tables](#16-quick-reference)

---

<a name="1-executive-summary"></a>
## 1. EXECUTIVE SUMMARY

BrightKidCo's segmentation system routes each subscriber into the correct email experience based on three dimensions: **avatar level** (Level 1/2/3 or General Fallback), **behavioral state** (engaged, at-risk, inactive), and **purchase history** (first-time, repeat, lapsed). The system is powered by a **4-button pop-up self-selection widget**, **15 Klaviyo tags**, **11 custom profile properties**, and **25 Klaviyo flows**.

### Core Architecture

```
Pop-up Signup (Self-ID)
  → Avatar tag applied (avatar_level1/2/3 or avatar_general)
  → Welcome Flow variant (4 level variants, 8 mails each, 21 days)
  → Post-welcome tracking (welcome_completed tag)
  → Behavioral tags (at_risk, inactive_60, inactive_120)
  → Purchase tags (buyer_1pair/3plus3/5plus5, repeat, vip)
  → Migration tags (GF → level-specific via click/reply/Day-14 mail)
  → Sunset/Suppression (120d inactive)
```

### Audience Distribution

| Segment | % of Assigned | % of Total Real Volume | Dominant Phase | Hope Level | Conversion Range |
|---------|:------------:|:----------------------:|:--------------:|:----------:|:----------------:|
| Level 1 | ~35% | ~17.5% | Phase 2 (~50%) | 70% hope | 15-25% (P2 peak) |
| Level 2 | ~40% (LARGEST) | ~20% | Phase 3 (~55%) | 40% hope | 8-15% (P3 peak) |
| Level 3 | ~25% | ~12.5% | Phase 4 (~55%) | 20% hope | 4-8% (P4 peak) |
| General Fallback | N/A | ~50% | Mixed | 50/50 | 2-15% (by sub-group) |
| **Total** | **100%** | **100%** | | | |

### Key Routing Principles

- **Before level tag known** (GF/no tag) → Cross-Level (DOC5)
- **After level tag known** → Level-specific (DOC2/3/4) for educational/winback/FAQ flows
- **High-velocity flows** (Cart/Checkout/Browse) → Cross-Level even if tag known (speed > segmentation)
- **Post-Purchase Day 0-21** → Cross-Level (DOC5) — education-first
- **Post-Purchase Day 22+** → Level-specific if tag known
- **Decision period mismatch**: L3 (14-30+ days) exceeds 21-day Welcome Flow — post-welcome bridge needed

### Revenue Priority (Weighted by Audience × Conversion)

| Rank | Cell | Audience % | Conv. Rate | Weighted Impact |
|:----:|:-----|:----------:|:----------:|:---------------:|
| #1 | **L1 × Phase 2** | 17.5% | 15-25% | 2.6-4.4% |
| #2 | **L2 × Phase 3** | 22.0% | 8-15% | 1.8-3.3% |
| #3 | **GF × P2/P3** | 25.0% | 8-12% | 2.0-3.0% |
| #4 | L1 × Phase 3 | 10.5% | 10-18% | 1.1-1.9% |
| #5 | L2 × Phase 2 | 10.0% | 10-15% | 1.0-1.5% |

---

<a name="2-pop-up-mechanism"></a>
## 2. POP-UP MECHANISM — COMPLETE DOCUMENTATION

**Source:** DOC1 §16 (lines 1015-1068), DOC6 §7 (lines 772-773), R3 external validation

### 2.1 Technical Specifications

| Attribute | Value | External Validation |
|-----------|-------|:-------------------:|
| Trigger | 8-15 seconds on site OR exit-intent | ⚠️ Exit-intent outperforms timed (3.76% vs 2.6-3.2%) |
| Display | 1-step pop-up with email + question | ✅ Multi-step +30-50% vs single-step |
| Mobile | Full-screen on mobile | ✅ Mobile-first required (80%+ abandonment) |
| Frequency cap | Max 1x per 7 days per visitor | ✅ 7-14 day caps standard |
| Tool | Klaviyo Forms or external (Privy, Justuno) | ✅ |

### 2.2 Step 1 Content — Self-Selection

| Element | Text | Notes |
|---------|------|-------|
| **Headline** | "Get 10% off + a potty training plan built for kids like yours." | Dual-value (discount + personalized plan) — +20-30% vs discount-only |
| **Subheadline** | "What describes your child best?" | Identity-first question — validated by autism community research |
| **Button 1** | "Talks about potty but won't actually do it" → Tag: `avatar_level1` | L1 — Verbal, 3-5y, Pre-K urgency |
| **Button 2** | "Sensory issues, tried many methods" → Tag: `avatar_level2` | L2 — Mixed verbal, 5-7y, BCBA context |
| **Button 3** | "Non-verbal or high support needs" → Tag: `avatar_level3` | L3 — Non-verbal, 6-10+ y, dignity-first |
| **Button 4** | "Still figuring out what's going on" → Tag: `avatar_general` | GF — ~50% real volume |
| **Email Field** | [enter your email] | Required |
| **First Name** | [enter your first name] | Required for Lena voice personalization |
| **CTA Button** | [Get My 10% Code] | |
| **Privacy Note** | "We respect your inbox. Unsubscribe anytime." | GDPR compliance |

### 2.3 Step 2 Content — Offer Delivery (Immediately After Submit)

| Element | Text |
|---------|------|
| **Headline** | "Your code is ready." |
| **Code Display** | WELCOME10 (prominent, large font) |
| **Note** | "Auto-applies at checkout. Valid 7 days." |
| **CTA Button** | [Shop Now] |
| **Close Option** | "or keep browsing" |

**Critical:** Code is displayed DIRECTLY (not via email). Customer can buy immediately. External validation: on-screen code display is +15-25% conversion vs email delivery.

### 2.4 Klaviyo Implementation

- Email + tag written to Klaviyo on form submit
- Tag triggers Welcome Flow (level-specific variant)
- Klaviyo JavaScript snippet on all pages for web tracking
- First name collected for personalization
- Consent tracked (GDPR-compliant checkbox recommended for UK/EU)

### 2.5 External Recommendations for Pop-Up Optimization

| Recommendation | Priority | Expected Impact |
|---|---|---|
| Use exit-intent as primary trigger, 15-20 sec timed as secondary | HIGH | +20-30% popup conversion |
| Reorder buttons: L1 first, L2 second, L3 third, General last | HIGH | -10-15% general fallback rate |
| Add progressive disclosure on mobile (buttons first, email after) | HIGH | +15-25% mobile conversion |
| Auto-apply WELCOME10 via Shopify URL parameter | MEDIUM | +30-40% first-purchase conversion |
| A/B test button copy for "Still figuring out" to reduce selection | MEDIUM | -5-10% general fallback rate |
| Test 2-step pop-up (buttons first, email in step 2) | MEDIUM | +20-40% step 1 completion |

---

<a name="3-complete-klaviyo-tag-catalog"></a>
## 3. COMPLETE KLAVIYO TAG CATALOG

**Total: 15 tags** organized into 3 categories.

### 3.1 Avatar Level Tags (4 tags — from pop-up self-selection)

| Tag | Trigger | Primary Flow | Welcome Variant | Conversion Range | Exit Condition |
|-----|---------|:------------:|:---------------:|:----------------:|----------------|
| `avatar_level1` | Pop-up button 1 | Welcome Flow L1 | DOC2 + DOC1 (8 mails, 21d) | 15-25% (P2 peak) | `welcome_completed = true` |
| `avatar_level2` | Pop-up button 2 | Welcome Flow L2 | DOC3 + DOC1 (8 mails, 21d) | 8-15% (P3 peak) | `welcome_completed = true` |
| `avatar_level3` | Pop-up button 3 | Welcome Flow L3 | DOC4 + DOC1 (8 mails, 21d) | 4-8% (P4 peak) | `welcome_completed = true` |
| `avatar_general` | Pop-up button 4 | Welcome Flow GF | DOC5 + DOC1 (8 mails, 21d) | 2-15% (varies) | `welcome_completed = true` |

**Routing rules for avatar tags:**
- Welcome Flow: Level-specific variant (DOC2/3/4/5)
- Cart/Checkout/Browse Abandonment: Cross-Level always (DOC5)
- PP-Education Day 0-21: Cross-Level (DOC5)
- PP-Extended Education Day 22+: Level-specific if tag known
- PP-Extended Upsell Day 28: Level-aware content
- Winback Path A/B: Level-specific variants
- FAQ/Objection Library: Level-specific variants
- Replenishment A/B/C: Cross-Level (timing-based)

### 3.2 Behavioral Tags (6 tags — engagement tracking)

| Tag | Trigger | When Applied | Flow Impact | Exit Condition |
|-----|---------|:------------:|-------------|----------------|
| `welcome_completed` | Finished Welcome Flow | After all 8 mails sent OR purchase during Welcome | Blocks Welcome re-entry. Unlocks PP-Extended Education trigger. | Set to `true`, permanent |
| `welcome_completed_no_purchase` | Welcome done + no purchase | After Welcome Flow (no purchase) | Routes to FAQ/Objection Library (Phase 3). Enables Winback Path B. | Purchase OR 60d inactivity |
| `post_purchase_active` | Engaged post-purchase | Behavioral trigger (opens + clicks) | Positive signal. Unlocks Referral Flow eligibility at Day 30. | Engagement degrades |
| `at_risk_no_open` | 3-7 days no opens | Engagement tracking | Routes to PP-Support At-Risk (Phase 3). | Open detected OR 60d escalation |
| `inactive_60_days` | 60 days of inactivity | No engagement | Routes to Winback Path A (past buyer) OR Winback Path B (no purchase). | Engagement detected |
| `inactive_120_days` | 120 days of inactivity | No engagement after Winback | Routes to Sunset Flow. Final 2 mails then suppression. | Suppression from active list |

**Engagement Cascade (Risk Ladder):**
```
post_purchase_active (positive)
     │ engagement degrades
     ▼
at_risk_no_open (3-7d no opens)
     │ no re-engagement
     ▼
inactive_60_days (60d no engagement)
     │ no re-engagement
     ▼
inactive_120_days (120d no engagement)
     │ no response to sunset
     ▼
Suppression (exit ecosystem)
```

### 3.3 Transaction Tags (5 tags — purchase-based)

| Tag | Trigger | Flow Impact | Upsell Path |
|-----|---------|-------------|-------------|
| `buyer_1pair` | Purchased 1 Pair ($34.99) | Replenishment A at Day 14. PP-Direct Upsell at Day 1-3. | Upgrade to 3+3 bundle |
| `buyer_3plus3` | Purchased 3+3 Bundle ($79.99) | Replenishment B at Day 75. PP-Extended Upsell at Day 28. | Upgrade to 5+5 bundle |
| `buyer_5plus5` | Purchased 5+5 Bundle ($119.99) | Replenishment C at Day 150. VIP consideration. | Referral flow |
| `repeat_buyer` | 2+ purchases | Cross-level loyalty content. Excluded from Winback A. | VIP track preparation |
| `vip_buyer` | 3+ orders | Routes to VIP Flow (if exists). Highest-tier content. | Referral / Loyalty rewards |

### 3.4 Tag Interaction Matrix

| Primary Tag | Secondary Tag | Routing Behavior | Priority Rule |
|:-----------:|:-------------:|------------------|:-------------:|
| `avatar_level1/2/3` | `welcome_completed` | Level-specific flows activated; welcome flow skipped | Tag takes priority for content; `welcome_completed` is binary gate |
| `avatar_general` | `welcome_completed` | Cross-Level flows activated; welcome flow skipped | General content until migration |
| `avatar_level1/2/3` | `inactive_60_days` | Winback Path A, still level-specific | Engagement tag routes to winback; avatar tag determines content variant |
| `avatar_general` | `inactive_60_days` | Winback Path A, cross-level | No level content possible; use universal hooks |
| `avatar_level1/2/3` | `at_risk_no_open` | PP-Support At-Risk (cross-level) | At-risk behavior overrides level-specific routing for this flow only |
| `buyer_X` | `avatar_level1/2/3` | Level-specific replenishment + post-purchase flows | Avatar tag determines content; transaction tag determines timing/product |

### 3.5 Tag → Flow Trigger Routing Table

| Tag | Triggers Flow(s) | Audience Filter | Excluded From |
|---|---|---|---|
| `avatar_level1` | Welcome L1, PP-Ext. Education L1, Winback A/B L1 | `welcome_completed=false` for Welcome | — |
| `avatar_level2` | Welcome L2, PP-Ext. Education L2, Winback A/B L2 | `welcome_completed=false` for Welcome | — |
| `avatar_level3` | Welcome L3, PP-Ext. Education L3, Winback A/B L3 | `welcome_completed=false` for Welcome | — |
| `avatar_general` | Welcome GF, PP-Day 14, PP-Ext. Education GF, Winback A/B GF | `welcome_completed=false` for Welcome | Level-specific triggers |
| `welcome_completed` | Blocks Welcome re-trigger | `welcome_completed=true` | Welcome Flow |
| `welcome_completed_no_purchase` | FAQ/Objection Library trigger | `welcome_completed=true` + no purchase | — |
| `post_purchase_active` | PP-Support At-Risk prevention | `post_purchase_active=true` | PP-Support At-Risk |
| `at_risk_no_open` | PP-Support At-Risk flow | Day 3-7 no opens | — |
| `inactive_60_days` | Winback Path A/B | 60 days no engagement | — |
| `inactive_120_days` | Sunset flow | 120 days inactive | — |
| `buyer_1pair` | Replenishment A (Day 14+), PP-Education | 1-pair order | — |
| `buyer_3plus3` | Replenishment B (Day 75+), PP-Education | 3+3 order | — |
| `buyer_5plus5` | Replenishment C (Day 150+), PP-Education | 5+5 order | — |
| `repeat_buyer` | VIP tracking, cross-sell | >1 purchase | — |
| `vip_buyer` | VIP offers, referral prioritization | 3+ orders | — |

---

<a name="4-complete-profile-properties-schema"></a>
## 4. COMPLETE PROFILE PROPERTIES SCHEMA

### 4.1 Standard Properties (Klaviyo Built-In)

| Property | Type | Notes |
|----------|------|-------|
| `first_name` | string | Required at signup — critical for Lena voice |
| `last_name` | string | Optional |
| `email` | string | Primary identifier |
| `created_at` | datetime | Auto-set by Klaviyo |
| `consent` | boolean | GDPR checkbox |

### 4.2 Custom Properties

| Property | Type | Values | Purpose | Phase |
|----------|------|--------|---------|:-----:|
| `avatar_level` | string | `"level1"` / `"level2"` / `"level3"` / `"general"` | Primary segmentation — maps to DOC 2/3/4/5 | P1 |
| `child_age` | string | Optional, free text | Age-based content calibration | P1 |
| `signup_source` | string | `"popup"` / `"checkout"` / `"referral"` / `"other"` | Track acquisition channel | P1 |
| `welcome_flow_completed` | boolean | `true` / `false` | Binary gate — unlocks post-welcome flows | P1 |
| `last_purchase_pack_size` | string | `"1pair"` / `"3+3"` / `"5+5"` | Replenishment timing and upsell targeting | P1 |
| `vip_customer` | boolean | `true` / `false` | High LTV flag (3+ orders) | P1 |
| `purchase_reason` | string | Free text | Zero-party data — "What brought you here?" | P2 |
| `label_sensitive` | boolean | `true` / `false` | Internal flag — never use ASD language | P2 |
| `rfm_recency` | integer | 1-5 | Phase 2+: RFM score | P2 |
| `rfm_frequency` | integer | 1-5 | Phase 2+: RFM score | P2 |
| `rfm_monetary` | integer | 1-5 | Phase 2+: RFM score | P2 |

### 4.3 Predictive Properties (Phase 2+ — Requires 500+ customers, 12+ months data)

| Property | Purpose |
|----------|---------|
| Predicted CLV | Identify high-value subscribers |
| Churn Risk Score (1-5) | Proactive retention targeting |
| Next Purchase Date | Replenishment timing optimization |

---

<a name="5-flow-routing-decision-tree"></a>
## 5. FLOW ROUTING DECISION TREE PER AVATAR LEVEL

### 5.1 Complete 25-Flow Routing Table

| # | Flow Name | Phase | Trigger | Audience Filter | Segmentation | Conv. Range |
|:-:|-----------|:-----:|---------|-----------------|:------------:|:-----------:|
| 01 | Welcome Flow | P1 | Form Submit (pop-up) | avatar_level tag | **4 level variants** | 4-25% |
| 02 | Cart Abandonment | P1 | Cart Abandoned | No purchase 24h | Cross-level | 5-15% |
| 03 | Checkout Abandonment | P1 | Started Checkout | No purchase 1h | Cross-level | 5-20% |
| 04 | Browse Abandonment | P2 | Viewed Product | No cart 24h | Cross-level | 3-10% |
| 05 | Order Confirmation | P1 | Order Placed | All | Cross-level | N/A |
| 06 | Shipping Notification | P1 | Order Fulfilled | All | Cross-level | N/A |
| 07 | Out for Delivery | P1 | Carrier update | All (optional) | Cross-level | N/A |
| 08 | Arrived & Welcome | P1 | Carrier Delivered | All | Cross-level | N/A |
| 09 | PP-Direct Upsell | P1 | Order Placed + Day 1-3 | All | Cross-level | 2-5% |
| 10 | PP-Mary S. Story | P2 | Order Placed + Day 3 | All | Cross-level | 2-4% |
| 11 | PP-Education Day 0-21 | P2 | Order Placed | All | Cross-level (DOC5) | 2-5% |
| 12 | PP-Level Detection | P1 | Day 14 + no level tag | GF only | Cross-level | 8-12% |
| 13 | PP-Extended Education | P3 | Level tag + Day 22 | Level tag known | **4 level variants** | 3-10% |
| 14 | PP-Extended Upsell | P2 | Day 28 + level tag | Level tag known | Level-aware | 5-10% |
| 15 | PP-Mid Check-In | P2 | Day 30-60 | All | Cross-level | 3-5% |
| 16 | PP-Support At-Risk | P3 | Day 3-7 no opens | `at_risk_no_open` | Cross-level | 2-4% |
| 17 | Replenishment A | P2 | 1-pair order + Day 14 | `buyer_1pair` | Cross-level | 5-10% |
| 18 | Replenishment B | P2 | 3+3 order + Day 75 | `buyer_3plus3` | Cross-level | 4-8% |
| 19 | Replenishment C | P2 | 5+5 order + Day 150 | `buyer_5plus5` | Cross-level | 3-6% |
| 20 | Review Request | P2 | Day 30 post-purchase | All | Cross-level | 1-3% |
| 21 | Winback Path A | P2 | Last purchase + 90d no eng. | Purchase history | **4 level variants** | 2-5% |
| 22 | Winback Path B | P3 | Signup + 60d no purchase | No purchase | **4 level variants** | 2-4% |
| 23 | Sunset Flow | P3 | 120 days inactive | `inactive_120` | Cross-level | <1% |
| 24 | FAQ/Objection Library | P3 | Welcome done + no purchase | `welcome_completed_no_purchase` | Level-specific | 4-8% |
| 25 | Referral Flow | P3 | Day 30 + positive engagement | `post_purchase_active` | Cross-level | 2-4% |

### 5.2 Level-Segmented Flows (4 Variants Each)

| Flow | L1 Variant | L2 Variant | L3 Variant | GF Variant |
|---|---|---|---|---|
| **01. Welcome Flow** (8 mails, 21d) | DOC2 — Pre-K urgency, 70% hope | DOC3 — Science-first, 40% hope | DOC4 — Dignity-first, 20% hope | DOC5 — Universal hooks, 50/50 |
| **13. PP-Extended Education** (Day 22+) | L1 mechanism deep-dive | L2 BCBA-respectful science | L3 late-trainer stories | GF migration hooks |
| **21. Winback Path A** (90d no eng.) | L1 gentle return | L2 science re-engagement | L3 dignity-preserving | GF universal |
| **22. Winback Path B** (60d no purchase) | L1 Pre-K reminder | L2 mechanism reframe | L3 permission-based | GF symptom hooks |

### 5.3 Decision Period × Flow Timeline Conflicts

| Level | Decision Period | Welcome Flow Length | Gap | Impact |
|---|---|---|---|---|
| L1 | 2-7 days | 21 days (8 mails) | None | ✅ Conversion window fits |
| L2 | 7-21 days | 21 days (8 mails) | Edge | 🟡 Conversion may happen in last mails |
| L3 | 14-30+ days | 21 days (8 mails) | **SIGNIFICANT** | 🔴 L3 may decide AFTER Welcome ends |
| GF | 5-14 days | 21 days (8 mails) | None | ✅ Mostly OK |

**Mitigation:** Extend Welcome Flow for L2/L3, or add dedicated post-welcome bridge sequences.

### 5.4 Segment Routing Decision Tree

```
VISITOR lands on site
│
├─ POP-UP SHOWN (8-15s or exit-intent)
│  │
│  ├─ Button 1 → avatar_level1 → Welcome Flow L1 (DOC2)
│  │              8 mails, 21 days, Conv: 15-25% (P2 peak)
│  │              ├─ Purchase? → PP-Day 0-14 (DOC5) → Day 22+ PP-Ext Ed L1
│  │              └─ No purchase → FAQ/Objection Library
│  │
│  ├─ Button 2 → avatar_level2 → Welcome Flow L2 (DOC3)
│  │              8 mails, 21 days, Conv: 8-15% (P3 peak)
│  │              ├─ Purchase? → PP-Day 0-14 → Day 22+ PP-Ext Ed L2
│  │              └─ No purchase → FAQ/Objection Library
│  │
│  ├─ Button 3 → avatar_level3 → Welcome Flow L3 (DOC4)
│  │              8 mails, 21 days, Conv: 4-8% (P4 peak)
│  │              ├─ Purchase? → PP-Day 0-14 → Day 22+ PP-Ext Ed L3
│  │              └─ No purchase → FAQ/Objection Library
│  │
│  └─ Button 4 → avatar_general → Welcome Flow GF (DOC5)
│                 8 mails, 21 days, Conv: 2-15% (varies)
│                 ├─ Purchase? → PP-Day 14 Level Detection
│                 │   ├─ Click L1 → migrate to L1 flows
│                 │   ├─ Click L2 → migrate to L2 flows
│                 │   ├─ Click L3 → migrate to L3 flows
│                 │   └─ No click → stays GF
│                 └─ No purchase → Winback Path B (60d)
│
├─ POP-UP IGNORED, Cart action
│  └─ No level tag → Cart/Checkout/Browse (DOC5)
│                     Conv: 2-8% → Purchase → PP-Day 14 Level Detection
│
└─ POST-PURCHASE (all paths converge)
   ├─ DAY 0-13: Cross-Level Onboarding (DOC5)
   ├─ DAY 14: PP-Level Detection (if GF/unknown)
   ├─ DAY 22+: PP-Extended Education (level-specific if known)
   ├─ DAY 28+: PP-Extended Upsell
   ├─ DAY 30-60: PP-Mid Check-In
   ├─ DAY 90+: Winback Path A (past buyer, inactive)
   ├─ DAY 120: Sunset (2 mails → exit)
   └─ ONGOING: at_risk → inactive_60 → inactive_120 → Sunset
```

---

<a name="6-segment-definitions"></a>
## 6. SEGMENT DEFINITIONS & AUDIENCE DISTRIBUTION

### 6.1 Avatar Level Segments

| Segment | Tag | Pop-up Button | Audience Share | Child Profile | Hope Level | Dominant Phase |
|---------|-----|---------------|:--------------:|---------------|:----------:|:--------------:|
| Level 1 | `avatar_level1` | "Talks about potty but won't actually do it" | ~35% | Verbal, 3-5 yrs, 1-3 failed attempts | 70% | Phase 2 (~50%) |
| Level 2 | `avatar_level2` | "Sensory issues, tried many methods" | ~40% (LARGEST) | Mixed verbal, 5-7 yrs, 3-5+ attempts | 40% | Phase 3 (~55%) |
| Level 3 | `avatar_level3` | "Non-verbal or high support needs" | ~25% | Non-verbal, 6-10+ yrs, 5+ yr attempts | 20% | Phase 4 (~55%) |
| General | `avatar_general` | "Still figuring out what's going on" | ~50% real volume | Mixed, 2-10+ yrs, variable | 50/50 | Mixed |

### 6.2 General Fallback Sub-Segments (5 Groups)

| Sub-Group | Share of GF | Share of Total | Description | Likely Hidden Level | Migration Method |
|-----------|:-----------:|:--------------:|-------------|:-------------------:|------------------|
| A — Diagnostic Entrants | ~25% | ~10% | No formal ASD diagnosis yet | Likely L1 | Click migration → L1 story |
| B — Diagnosis-Rejecters | ~15% | ~6% | Has diagnosis but rejects labels | L1 or L2 (may never migrate) | Label-sensitive track |
| C — Sensory-Difference | ~25% | ~10% | SPD/ADHD, no ASD, interoception issues | L2-like | Click migration → L2 story |
| D — Overwhelmed Non-Selectors | ~25% | ~10% | Has ASD child, didn't select out of overwhelm | Actual L1/L2/L3 | PP-Day 14 re-selection |
| E — Cart/Browse Without Opt-In | ~10% | ~14% | Captured via Klaviyo cookie, no level tag | Any level | Purchase hints |

### 6.3 Standard Klaviyo Segments

#### Engagement-Based

| Segment | Filter Condition | Purpose |
|---------|-----------------|---------|
| Engaged 30 Days | Opened OR Clicked in last 30 days | Core active audience |
| Engaged 90 Days | Opened OR Clicked in last 90 days | Default campaign audience (Phase 1) |
| Unengaged 180+ Days | 0 opens AND 0 clicks in 180 days | Suppression — exclude from ALL campaigns |

#### Value-Based

| Segment | Filter Condition | Purpose |
|---------|-----------------|---------|
| VIP (Top 10%) | Total spend in top 10% | Phase 2+: Early access, referral |
| High AOV | Total spend > $150 | Upsell targeting |
| One-Time Buyers | 1 purchase, no purchase in 90 days | Targeted winback |
| Frequent Buyers | 3+ orders | Referral invitations |

#### Purchase History

| Segment | Filter Condition | Purpose |
|---------|-----------------|---------|
| First-Time Buyers (30d) | 1 purchase within 30 days | Onboarding/education |
| Lapsed Customers (90d) | 1 purchase, no repeat in 90 days | Winback flow |
| Repeat Buyers (2+ orders) | 2+ purchases | Loyalty reinforcement |

### 6.4 Master Suppression Segment (Apply to ALL Campaigns)

| Suppression Criteria | Condition |
|---------------------|-----------|
| Unsubscribed | Klaviyo unsubscribe flag |
| Hard Bounced | Klaviyo bounce tracking |
| Spam Complainers | Klaviyo complaint tracking |
| Unengaged 180+ Days | 0 opens AND 0 clicks in 180 days |
| Role Accounts | `@temp`, `@disposable`, catch-all addresses |
| Sunset In Progress | Currently in Sunset Flow |

---

<a name="7-general-fallback-sub-group-routing"></a>
## 7. GENERAL FALLBACK SUB-GROUP ROUTING

### 7.1 Sub-Group × Flow × Language Sensitivity

| Sub-Group | Recommended Path | Best Conv. Flow | Language Sensitivity | CTA Style |
|:---------:|:----------------:|:---------------:|:-------------------:|:---------:|
| A — Diagnostic Entrants | GF Welcome → Click migration → L1 | Welcome E2-E3 | NO diagnosis language | Gentle education |
| B — Diagnosis-Rejecters | GF Welcome indefinitely | Browse Abandon, FAQ | **NO ASD language ever** | Permission-based |
| C — Sensory-Difference | GF Welcome → Click migration → L2 | Welcome E2, FAQ | Science OK; NO ASD required | Medium mechanism |
| D — Overwhelmed | GF Welcome → PP-Level Detection | PP-Level (Day 14), Cart | Validation heavy | Low-medium |
| E — Cart/Browse | Direct: Symptom + Mechanism + Guarantee | Cart, Browse | Universal | Medium |

### 7.2 GF-to-Level Migration Funnel

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

### 7.3 Migration Impact on Conversion

| Hidden Level is: | GF Conversion | After Migration | Uplift |
|:----------------:|:-------------:|:---------------:|:------:|
| Level 1 | 5-10% | 15-25% | **+100-150%** |
| Level 2 | 5-10% | 8-15% | **+60-80%** |
| Level 3 | 5-10% | 4-8% | **+30-60%** |

---

<a name="8-segment-migration-strategy"></a>
## 8. SEGMENT MIGRATION STRATEGY

### 8.1 The 4 Migration Paths

| Path | Method | Expected Rate | Conversion Uplift | Risk |
|:----:|:------:|:------------:|:-----------------:|:----:|
| 1 | **Click-Based** — Story link in GF mail | 15-25% of GF | +30-50% | Low |
| 2 | **Reply-Based** — NLP analysis of reply | 5-15% of GF | +20-40% | Medium |
| 3 | **PP-Level Detection Mail (Day 14)** — STRONGEST | **40-50%** of GF purchasers | +30-50% | Low |
| 4 | **Purchase Hints** — Size/bundle inference | 10-20% of GF purchasers | +15-25% | Medium |

### 8.2 Click-Based Migration Anchors (Every GF Mail)

| Anchor | Target Tag | Link Text |
|--------|:----------:|-----------|
| Level 1 story | `avatar_level1` | "If you have a verbal child under 5 who 'almost trained' multiple times, here's Sarah's story →" |
| Level 2 story | `avatar_level2` | "If your kid has sensory issues around the bathroom and you've worked with a BCBA, here's Lisa's path →" |
| Level 3 story | `avatar_level3` | "If your child is 7+ and non-verbal, here's Maria's journey →" |
| Cross-level (stay GF) | (no change) | "If you're not sure yet — here's the general framework →" |

### 8.3 Reply-Based Migration Keywords

| Level | Indicators in Reply |
|:-----:|-----------|
| Level 1 | "Pre-K is coming", "3/4/5 years old", "Oh Crap didn't work", "Almost trained" |
| Level 2 | "BCBA/ABA/OT", "5/6/7 years old", "Sensory issues", "Prompt-dependent", "Withholding" |
| Level 3 | "Non-verbal/AAC", "8/9/10 years old", "Never been trained", "Specialty diapers", "Medicaid" |

### 8.4 Purchase-Based Hints

| Signal | Indicator | Inferred Level |
|--------|-----------|:--------------:|
| Size 2T-3T | Likely 3-4 years | Level 1 |
| Size 4T-5T | 4-5 years mix | L1+L2 |
| Size XL/XXL | 7+ years | Level 3 |
| 1 Pair buyer | Tentative, new | Level 1-2 |
| 3+3 Bundle buyer | Committed | Level 2 |
| 5+5 Bundle buyer | High-investment | Level 2-3 |

**Rule:** Never assign tag below 70% confidence. Stay GF if uncertain.

### 8.5 PP-Level Detection Mail (Day 14) — Strongest Path

- **When:** Day 14 after purchase
- **Audience:** Subscribers still in GF (no level tag) 14 days after purchase
- **Subject:** "Quick question about your kid"
- **Content:** 4 buttons mirroring pop-up selection:
  - Button 1 → `avatar_level1`: "Verbal, 'almost trained' but inconsistent"
  - Button 2 → `avatar_level2`: "Sensory issues, tried many methods"
  - Button 3 → `avatar_level3`: "Non-verbal or high support needs"
  - Button 4 → `avatar_general` (stays): "I'm still figuring it out"
- **Expected:** 65-75% open rate, 35-50% click rate, ~40-50% migration rate
- **After 7 days no click:** Gentle reminder (optional)
- **After 14 days no click:** Stays GF permanently

---

<a name="9-cross-reference-map-l4"></a>
## 9. CROSS-REFERENCE MAP: LAYER 4 × LAYER 8

### 9.1 Level 1 — Verbal, Hope-Intact (Sarah) → Segmentation Implementation

| Layer 4 Dimension | Layer 8 Implementation |
|---|---|
| Klaviyo tag: `avatar_level1` | Welcome Flow L1 (DOC2), PP-Ext. Education L1, Winback L1 |
| avatar_level property: `"level1"` | Triggers level-specific flows across all 25 flows |
| Audience: ~35% (~17.5% real) | Pop-up button 1 self-selection |
| Hope: 70% / 30% Realism | Welcome tonality: hope-heavy, Pre-K urgency OK |
| Decision period: 2-7 days | Fastest CTA timing — Day 2-3 of Welcome |
| Conversion: 15-25% (P2 peak) | ★★★ HIGHEST — primary revenue driver |
| Strongest lever: L3 (60-Day Guarantee) | Guarantee prominently featured in E3 |
| Forbidden: Heavy realism, non-verbal refs, 5+yr failure | Content filter in DOC2 |
| Symptom signature: "Gets it but doesn't get it" | Pop-up button text + Welcome E1 hook |

### 9.2 Level 2 — Mixed, Method-Cycling (Lisa) → Segmentation Implementation

| Layer 4 Dimension | Layer 8 Implementation |
|---|---|
| Klaviyo tag: `avatar_level2` | Welcome Flow L2 (DOC3), PP-Ext. Education L2, Winback L2 |
| avatar_level property: `"level2"` | Level-specific flows |
| Audience: ~40% (LARGEST, ~20% real) | Pop-up button 2 self-selection |
| Hope: 40% / 60% Realism | Welcome tonality: science-first, BCBA-respectful |
| Decision period: 7-21 days | Slower CTA — Day 7-14 of Welcome |
| Conversion: 8-15% (P3 peak) | ★★★ Volume engine |
| Strongest lever: L1 + L5 (49% SPARK) | Mechanism + science citations in E2-E3 |
| Forbidden: Easy/quick, Pre-K urgency, BCBA criticism | Content filter in DOC3 |
| Symptom: Prompt-dependency, withholding | Pop-up button text + Welcome E1 hook |

### 9.3 Level 3 — Non-Verbal, Resigned (Maria) → Segmentation Implementation

| Layer 4 Dimension | Layer 8 Implementation |
|---|---|
| Klaviyo tag: `avatar_level3` | Welcome Flow L3 (DOC4), PP-Ext. Education L3, Winback L3 |
| avatar_level property: `"level3"` | Level-specific flows |
| Audience: ~25% (~12.5% real) | Pop-up button 3 self-selection |
| Hope: 20% / 80% Realism | Welcome tonality: dignity-first, permission-based |
| Decision period: 14-30+ days | Slowest CTA — Day 14-21, never push |
| Conversion: 4-8% (P4 peak) | ★★ Highest LTV, slowest conversion |
| Strongest lever: L4 (Lena's voice) + L3 (Guarantee) | Peer stories + no-pressure guarantee |
| Forbidden: Urgency, "don't give up!", easy/quick, Pre-K | Content filter in DOC4 |
| Symptom: Complete signal absence, bathroom sensory overload | Pop-up button text + Welcome E1 hook |
| **CRITICAL GAP:** Decision period (14-30d) > Welcome length (21d) | Post-welcome bridge REQUIRED |

### 9.4 General Fallback → Segmentation Implementation

| Layer 4 Dimension | Layer 8 Implementation |
|---|---|
| Klaviyo tag: `avatar_general` | Welcome Flow GF (DOC5), PP-Day 14, PP-Ext. Education GF |
| avatar_level property: `"general"` | Cross-level until migration |
| Audience: ~50% real volume | Pop-up button 4 or no pop-up opt-in |
| Hope: 50/50 | Universal hooks, migration opportunities |
| Decision period: 5-14 days | Medium CTA timing |
| Conversion: 2-15% (by sub-group) | Variable — migration is key |
| Key strategy: 4 migration paths | Click/reply/purchase/Day-14 mail |
| Forbidden: Level labels, fixed age, diagnosis-as-prerequisite | Content filter in DOC5 |

### 9.5 Conversion Lever Effectiveness by Level

| Lever | L1 | L2 | L3 | GF |
|:-----:|:--:|:--:|:--:|:--:|
| L1 — "It's not the method" | ★★★★ High | **★★★★★ Very High** | ★★★ High | ★★★★ High |
| L2 — "Pull-ups make this worse" | ★★★★ High | ★★★★ High | ★★ Medium (CAUTION) | ★★★ Medium |
| L3 — "60-Day Guarantee" | **★★★★★ Very High** | **★★★★★ Very High** | **★★★★★ Very High** | ★★★★ High |
| L4 — "Lena's two autistic sons" | ★★★★ High | **★★★★★ Very High** | **★★★★★ Very High** | ★★★★ High |
| L5 — "49% SPARK Stat" | ★★★ Medium | **★★★★★ Very High** | ★★★ Medium-High | ★★★★ High |

---

<a name="10-cross-reference-map-l7"></a>
## 10. CROSS-REFERENCE MAP: LAYER 7 × LAYER 8

### 10.1 Conversion Probability by Level × Phase (from L7)

| Level | Phase 1 | Phase 2 | Phase 3 | Phase 4 | Weighted Avg. |
|---|:---:|:---:|:---:|:---:|:---:|
| L1 — avatar_level1 | 3-5% | **15-25%** ★★★ | 10-18% ★★ | 5-8% | ~12-18% |
| L2 — avatar_level2 | ~2% | 10-15% ★★ | **8-15%** ★★ | 6-10% ★ | ~7-12% |
| L3 — avatar_level3 | <1% | 3-5% | 5-10% ★ | **4-8%** ★★ | ~4-7% |
| GF — avatar_general | 2-4% | 8-12% ★★ | 8-12% ★★ | 5-8% | ~5-9% |

### 10.2 Segmentation Implementation of Conversion Levers

| Layer 7 Finding | Layer 8 Segmentation Implementation |
|---|---|
| L1 × P2 = 15-25% (Best Cell) | Welcome Flow L1 — fastest CTA (E2-E3), Pre-K urgency, 3+3 bundle |
| L2 × P3 = 8-15% (Volume Cell) | Welcome Flow L2 — science-first, extended nurture (E2-E5), 3+3 or 5+5 |
| L3 × P4 = 4-8% (Long Game) | Welcome Flow L3 — dignity-first, permission-based (E3-E8), 1 Pair |
| GF = variable 5-10% | Welcome Flow GF — universal hooks, migration opportunities |
| Cart Recovery (10-20%) | Cross-level — potential level-aware optimization |
| FAQ Mail (4-8% L2 best) | Level-specific routing confirmed — L2 × FAQ is highest-performer |
| Decision speed varies by level | CTA timing adjusted: L1 Day 2-3, L2 Day 7-14, L3 Day 14-21, GF Day 5-7 |

### 10.3 Urgency Calibration by Tag (from L7)

| Tag | Urgency Level | Urgency Source | Can Use Deadline? |
|---|---|---|---|
| `avatar_level1` | HIGH (Phase 2), LOW (Phase 3) | Pre-K deadline, school transition | Yes (L1 × P2 only) |
| `avatar_level2` | LOW base, MODERATE spike | Withholding crisis, school change | Conditional |
| `avatar_level3` | ZERO ever | Size progression fear (silent) | NEVER |
| `avatar_general` | LOW-MEDIUM | Varies by sub-group | Weak |

### 10.4 Offer Framing by Tag × Phase (from L7)

| Tag | P1 Offer | P2 Offer | P3 Offer | P4 Offer |
|---|---|---|---|---|
| `avatar_level1` | 3+3, soft CTA | **3+3, Pre-K hook** | 3+3, science-first | 1 Pair, permission |
| `avatar_level2` | None (not ready) | 3+3, try-and-judge | **3+3 or 5+5, science-first** | 1 Pair, late-trainer |
| `avatar_level3` | None | 1 Pair, "just trying" | 1 Pair or 3+3, dignity-first | **1 Pair, permission** |
| `avatar_general` | 3+3, soft CTA | **3+3, migration hooks** | 3+3, mechanism | 1 Pair, permission |

---

<a name="11-external-validation-summary"></a>
## 11. EXTERNAL VALIDATION SUMMARY

**Source:** R3 (External Research) — 13 sources, Klaviyo 2026 benchmarks

| Design Element | External Verdict | Confidence |
|---|---|---|
| 4-button pop-up segmentation | ✅ VALIDATED — zero-party data is top trend | High |
| 8-15 second timed trigger | ⚠️ CONCERN — exit-intent outperforms timed | High |
| Code displayed on-screen | ✅ VALIDATED — +15-25% vs email delivery | Medium |
| Tag-based flow routing | ✅ VALIDATED — recommended Klaviyo architecture | High |
| Cross-level abandonment | ✅ VALIDATED — speed > segmentation for recovery | High |
| 10% discount offer | ✅ VALIDATED — competitive for email capture | High |
| 7-day code expiry | ✅ VALIDATED — creates urgency without pressure | Medium |
| Level-Detection mail Day 14 | ✅ VALIDATED — zero-party re-engagement best practice | Medium |
| 50% general fallback rate | ⚠️ CONCERN — too high for sustained personalization | High |
| Peer-parent voice (Lena) | ✅ VALIDATED — 40-60% higher engagement than expert voice | High |
| 8-email welcome series | ✅ VALIDATED — 5-8 emails is optimal range | Medium |

### Key External Benchmarks

| Metric | Benchmark | Source |
|---|---|---|
| Average popup conversion | 3.09% | Sumo (1.2B popups) |
| Exit-intent popup avg | 3.76% | Privy |
| Welcome flow open rate | 50-60% (top 10%: 70-85%) | Klaviyo 2026 |
| Welcome flow click rate | 8-12% (top 10%: 15-25%) | Klaviyo 2026 |
| Flows generate 41% revenue from 5.3% of sends | 18x higher RPR | Klaviyo 2026 |
| Zero-party data segment lift | +30-45% open, +25-40% click | Omnisend, Klaviyo |
| Cart abandonment rate | 77.13% global avg | Barilliance |
| Recovery email open rate | 49.0% | Barilliance 2022 |

---

<a name="12-gap-analysis"></a>
## 12. GAP ANALYSIS

### 🔴 Critical Gaps

| # | Gap | Detail | Impact |
|---|---|---|---|
| G1 | **No phase detection in segmentation** | Tags capture Level (L1/L2/L3/GF) but NOT Phase (P1/P2/P3/P4). No `emotion_phase` property exists. | L1×P1 (3-5%) gets same Welcome as L1×P2 (15-25%) — suboptimal |
| G2 | **L3 decision period > Welcome Flow length** | Welcome is 21 days; L3 decides in 14-30+ days | L3 subscribers may decide AFTER Welcome ends — no conversion path until Winback |
| G3 | **50% of volume unleveled** | `avatar_general` has no level tag | Half of subscribers get cross-level content — suboptimal by definition |
| G4 | **No behavioral phase inference** | Engagement signals exist but aren't mapped to phase detection | Cannot dynamically adjust urgency or lever sequence mid-flow |

### 🟡 High Gaps

| # | Gap | Detail | Impact |
|---|---|---|---|
| G5 | **No at_risk tag removal rule** | `at_risk_no_open` may accumulate; no mechanism to remove after re-engagement | L3 subscribers tagged at-risk while still deciding |
| G6 | **GF sub-groups have no distinct routing** | All 5 GF sub-groups get identical DOC5 treatment | Sub-group C (8-15% conv.) and Sub-group B (2-5%) get same emails |
| G7 | **Purchase tag × level tag not cross-referenced** | `buyer_1pair` exists but no `buyer_1pair × avatar_level2` segment | Cross-sell may use wrong urgency for L2 buyer |
| G8 | **No post-welcome bridge for L2/L3** | Welcome ends at Day 21, but L2/L3 need more time | Gap between Welcome end and Winback trigger |

### 🟢 Medium Gaps

| # | Gap | Detail | Impact |
|---|---|---|---|
| G9 | **Click-based migration tags not specified** | "Click on L1 story → tag set" mentioned but specific tag never named | No clear Klaviyo mechanism for migration tracking |
| G10 | **Reply-based migration: no automated tagging** | Reply analysis is manual | Scalability bottleneck |
| G11 | **No tag for "migrated from GF"** | Original GF origin lost after migration | Cannot analyze GF→L1 conversion efficacy |
| G12 | **No cross-flow suppression rules** | What happens when Welcome + Cart Abandonment fire simultaneously? | Potential duplicate mails |

### Routing Completeness Score

| Category | Fully Mapped | Partial | Missing | Completeness |
|---|:---:|:---:|:---:|:---:|
| Pop-up tags → Level → Flow | 4 | 0 | 0 | 100% |
| Behavioral tags → Flow | 4 | 1 | 1 | ~75% |
| Purchase tags → Flow | 3 | 2 | 0 | ~70% |
| GF sub-groups → Flow | 0 | 2 | 3 | ~20% |
| Phase × Level routing | 0 | 0 | 16 | **0%** |
| **Overall** | | | | **~55%** |

**Key insight:** Addressing phase detection (G1) alone would improve completeness from ~55% to ~75%.

---

<a name="13-recommendations"></a>
## 13. RECOMMENDATIONS

### P0 — Must Fix (Pre-Launch)

**R1: Add `emotion_phase` property to Klaviyo profiles.**
- New custom property: `emotion_phase` (string: `"phase1"` / `"phase2"` / `"phase3"` / `"phase4"` / `"unknown"`)
- Detection via: child age hint, engagement cluster analysis, or optional 2nd pop-up question
- Allows Welcome Flow variant optimization per phase within each level

**R2: Extend Welcome Flow for L2/L3 segments.**
- L2: Welcome Flow extends to 10 mails over 28 days (matches 7-21 day decision period)
- L3: Welcome Flow extends to 12 mails over 35 days (matches 14-30+ day decision period)
- GF: Standard 8-mail Welcome Flow with phase-optional extension

**R3: Fix routing conflict (Replenishment vs Level Detection at Day 14).**
- Rule: PP-Level Detection (Day 14) takes absolute priority over Replenishment for GF subscribers
- Replenishment A should delay 24h if subscriber is also GF at Day 14

**R4: Define click-based migration tags.**
- Create: `migrated_to_level1`, `migrated_to_level2`, `migrated_to_level3`
- Applied via UTM click tracking on story links in GF mails
- Enables migration efficacy measurement

### P1 — Should Fix (Launch + 30 Days)

**R5: Document explicit cross-flow suppression rules.**

| Primary Flow | Suppresses | Exceptions |
|---|---|---|
| Cart Abandonment | Welcome during active cart | If Welcome E1-E2 already sent, continue both |
| PP-Level Detection | All other Day 14 mails | Level Detection fires first; others delay 24h |
| Winback | All nurture flows | Pause Extended Education |
| Sunset | ALL flows | Terminal — only Sunset mails send |

**R6: Create behavioral engagement-score property.**
- Numeric 0-100 score
- Route high-engagement to faster conversion sequences
- Route no-engagement L3 to dignity-preserving slower cadence

**R7: Add level-specific subject lines to abandonment emails.**
- Keep body cross-level (speed > segmentation)
- Add level-specific subject lines if tag known (+10-15% open rate lift)

### P2 — Consider (Phase 2+)

**R8: Add purchase tag × level tag intersection segments.**
- Create `buyer_1pair_level1`, `buyer_1pair_level2`, etc. as computed segments
- Targeted cross-sell with appropriate urgency calibration

**R9: Create re-engagement tags for behavioral cascade.**
- `reengaged_after_risk` — removed from at-risk cascade
- `reengaged_after_winback` — returned from winback
- Use for accelerated conversion sequences (momentum-based)

**R10: Build Sub-Group B label-sensitive track.**
- Create separate content track within GF for diagnosis-rejecters
- Keyword detection: "my kid is just my kid" → apply `label_sensitive` property
- Route to non-diagnosis-language flow variants

**R11: Auto-apply WELCOME10 via Shopify URL parameter.**
- Removes last friction point in conversion path
- +30-40% first-purchase conversion vs manual code entry

---

<a name="14-implementation-checklist"></a>
## 14. IMPLEMENTATION CHECKLIST

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
- [ ] Create all custom profile properties (see Section 4)
- [ ] Create all 15 tags (4 avatar + 6 behavioral + 5 transaction)

#### Flow Setup (Phase 1 — Priority Flows)
- [ ] Create Welcome Flow with 4 level variants (8 mails each)
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
- [ ] Create Engaged 90 Days segment
- [ ] Create Unengaged 180+ Days segment
- [ ] Create Master Suppression segment
- [ ] Create Welcome Flow trigger segments (4 variants)
- [ ] Create Cart/Checkout/Browse abandonment segments
- [ ] Create First-Time Buyers (30d) segment
- [ ] Create Lapsed Customers (90d) segment
- [ ] Create country segments (US/UK/AU-NZ/Canada)

### Phase 1: Week 2

- [ ] Create Browse Abandonment Flow
- [ ] Create PP-Mary-S-Story (Day 3)
- [ ] Create PP-Mid Check-In (Day 30-60)
- [ ] Create PP-Extended Upsell (Day 28)
- [ ] Create Review Request (Day 30)
- [ ] Create PP-Support At-Risk Flow
- [ ] Create Replenishment A/B
- [ ] Embed migration anchors in all GF mail templates
- [ ] Set up UTM tracking for story link clicks
- [ ] Create PP-Level Detection mail template

### Phase 2 (Month 2-3)

- [ ] Create PP-Extended Education (Day 22) — 4 level variants
- [ ] Create Winback Path A/B — 4 level variants each
- [ ] Create Referral Flow
- [ ] Create Sunset Flow (120d inactive)
- [ ] Add post-welcome bridge sequence for L2/L3
- [ ] Create VIP segment (top 10% by revenue)
- [ ] Create Replenishment C (5+5, Day 150)

### Phase 3 (Month 6+)

- [ ] Implement quarterly RFM scoring (500+ customers required)
- [ ] Enable Klaviyo Predictive Analytics (12+ months data)
- [ ] Implement predicted CLV-based content targeting
- [ ] Add level-specific Sunset Flow variants
- [ ] Create VIP Flow for repeat/vip buyers

---

<a name="15-list-health"></a>
## 15. LIST HEALTH & DELIVERABILITY

### 15.1 Weekly Quick-Check Metrics

| Metric | Target | Warning | Critical |
|--------|:-----:|:-------:|:--------:|
| Last campaign open rate | > 30% | < 25% | < 20% |
| Last campaign click rate | > 3% | < 2% | < 1% |
| Bounce rate | < 0.5% | 0.5-1% | > 1% |
| Spam complaint rate | < 0.01% | 0.01-0.05% | > 0.05% |
| Unengaged 180+ Days | < 20% | 20-30% | > 30% |
| Monthly net growth | > 1% | 0-1% | Negative |

### 15.2 Deliverability Setup

| Component | Detail |
|-----------|--------|
| Sending domain | send.brightkidco.com |
| From Name | "Lena from BrightKidCo" |
| From Email | support@brightkidco.com |
| Reply-To | support@brightkidco.com |
| Domain Auth | DKIM + SPF + DMARC |
| Footer | Reusable Klaviyo block with unsubscribe |
| MPP mitigation | Track click rate as primary engagement signal |

### 15.3 Engagement Windows (BrightKidCo-Specific)

| Signal | Window | Notes |
|--------|:-----:|-------|
| Open-based engaged | 90 days | Default — accounts for MPP inflation |
| Click-based engaged | 90 days | More reliable signal for this audience |
| Research Mode (open, no click) | Up to 6 months | NOT churn — still researching |
| True inactive | 60d → at-risk | Begin at-risk flow |
| True inactive | 120d → sunset | Final 2 mails then suppress |

### 15.4 Suppression Rules

| Who to Suppress | When | Method |
|-----------------|:----:|--------|
| Unsubscribed | Immediately | Klaviyo unsubscribe |
| Hard bounces | Immediately | Klaviyo bounce tracking |
| Spam complainers | Immediately | Klaviyo complaint tracking |
| Unengaged 180+ days | After 180 days | Segment suppression |
| Bot/role accounts | On detection | Role domain list |
| Sunset complete | After 2 final mails | Flow 23 → permanent suppression |

---

<a name="16-quick-reference"></a>
## 16. QUICK-REFERENCE TABLES

### 16.1 Brand Constants

| Constant | Value |
|----------|-------|
| Pricing | 1 Pair $34.99 · 3+3 FREE $79.99 (BESTSELLER) · 5+5 FREE $119.99 |
| Guarantee | 60-Day Money Back (NEVER 30) |
| Reviews | 16,511 reviews · 4.9★ · 100,000+ parents |
| From Name | "Lena from BrightKidCo" · support@brightkidco.com |
| Discount Code | WELCOME10 · Auto-apply: brightkidco.com/discount/10%25OFF-WELCOME |
| Colors | Brand-Green #039902 · Mint #DBFFCD · Cream #FBF7EB · Yellow #F5C84B · Gray #9AA8A7 |
| Font | Questrial weight 400 only |
| Key Stat | 49% of autistic 4-5 year olds not toilet-trained (SPARK study) |
| NO Trustpilot | No page exists — never link |

### 16.2 Tag → Flow Quick-Reference

| Tag | Primary Flow | Secondary Flow | Tertiary Flow |
|-----|:------------:|:--------------:|:-------------:|
| `avatar_level1` | Welcome L1 | PP-Ext. Edu L1 | Winback A L1 |
| `avatar_level2` | Welcome L2 | FAQ Mail L2 | Winback A L2 |
| `avatar_level3` | Welcome L3 | PP-Ext. Edu L3 | Winback A L3 |
| `avatar_general` | Welcome GF | PP-Level Detection | Winback A GF |
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

### 16.3 Decision Speed by Segment

| Segment | Decision Speed | Urgency | Best CTA Timing | Best CTA Type |
|---------|:-------------:|:-------:|:---------------:|:-------------:|
| L1 × P2 | 2-7 days | HIGH (Pre-K) | Day 2-3 of Welcome | "Shop Now" with Pre-K framing |
| L2 × P3 | 7-21 days | LOW (event-triggered) | Day 7-14 of Welcome | "Learn More" / "See How It Works" |
| L3 × P4 | 14-30+ days | ZERO | Day 14-21 of Welcome | "Read Their Story" / permission |
| GF (all) | 5-14 days | Low-Medium | Day 5-7 of Welcome | Universal "Find Out More" |

### 16.4 Conversion Probability by Flow × Segment

| Flow | L1 (Best Cell) | L2 (Volume Cell) | L3 (Long Game) | GF (Mixed) |
|:----:|:--------------:|:----------------:|:--------------:|:----------:|
| Welcome Flow | **15-25%** | 8-15% | 4-8% | 5-10% |
| Cart Recovery | **10-15%** | 5-10% | 3-5% | 5-10% |
| Checkout Abandon | **10-20%** | 5-10% | 3-5% | 5-10% |
| FAQ Mail | — | **4-8%** | 2-4% | 2-3% |
| PP-Extended Education | 5-10% | 4-8% | 3-5% | 3-6% |
| Winback A | 2-3% | 2-4% | **3-5%** | 2-3% |

---

## SOURCE REFERENCE INDEX

| Data Point | Source File | Section |
|------------|-------------|---------|
| Pop-up spec (headline, buttons, tags) | DOC1-MASTER-FOUNDATION.txt | §16 (lines 1015-1068) |
| Flow overview (25 flows) | DOC1-MASTER-FOUNDATION.txt | §17 (lines 1071-1214) |
| Klaviyo profile properties | DOC1-MASTER-FOUNDATION.txt | §19 (lines 1287-1301) |
| Klaviyo tags (avatar, behavior, purchase) | DOC1-MASTER-FOUNDATION.txt | §19 (lines 1302-1321) |
| Segment logic / flow routing | DOC1-MASTER-FOUNDATION.txt | §19 (lines 1322-1354) |
| Exit conditions | DOC1-MASTER-FOUNDATION.txt | §19 (lines 1349-1354) |
| Audience distribution | DOC1-MASTER-FOUNDATION.txt | §1 (lines 78-89) |
| Sending infrastructure | DOC1-MASTER-FOUNDATION.txt | (lines 1269-1286) |
| Segmentation strategy | DOC6-USAGE-GUIDE.txt | §7 (lines 714-901) |
| Level 1/2/3/GF definitions | DOC2/DOC3/DOC4/DOC5 | Full files |
| Avatar Levels synthesis | Layer 4 Synthesis | Full file |
| Conversion Probabilities | Layer 7 Synthesis | Full file |
| External research validation | L8 R3 | 13 sources |
| Cross-reference analysis | L8 R4 | 12 sections |
| RFM framework | segmentation-rfm-predictive | Klaviyo skill |
| List health framework | segmentation-list-health | Klaviyo skill |
| Onboarding workflow | Onboarding-todos.txt | 4 steps |

---

*End of Layer 8 Round 6 — Segmentation Mechanics Final Synthesis*
*Generated: 2026-05-25*
*Cross-References: Layer 4 (Avatar Levels), Layer 7 (Conversion Probabilities), Layer 8 R1-R5*
*All 8 input files referenced and integrated.*
