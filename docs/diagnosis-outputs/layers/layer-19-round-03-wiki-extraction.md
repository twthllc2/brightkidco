# L19 R3: Migration Strategy — Wiki Extraction

**BrightKidCo Email Ecosystem — Wiki Knowledge for Subscriber Migration**
**Extracted from:** /root/wiki/tenza-marketing/, /root/wiki/marketing-copy/, /root/wiki/reference/
**Generated:** 2026-05-25

---

## TABLE OF CONTENTS

1. [Lifecycle Stage Segmentation Framework](#1-lifecycle-stage-segmentation-framework)
2. [The 7 Core Segments Framework](#2-the-7-core-segments-framework)
3. [Five-Layer Segmentation Model (SOP)](#3-five-layer-segmentation-model-sop)
4. [Engagement Tier Segmentation Strategy](#4-engagement-tier-segmentation-strategy)
5. [DTC Segmentation Strategy Template](#5-dtc-segmentation-strategy-template)
6. [RFM Segmentation & Customer Personas](#6-rfm-segmentation--customer-personas)
7. [Winback Flow Structures](#7-winback-flow-structures)
8. [Sunset Flow Best Practices](#8-sunset-flow-best-practices)
9. [VIP Flow & Loyalty Migration](#9-vip-flow--loyalty-migration)
10. [Post-Purchase Flow & Migration Triggers](#10-post-purchase-flow--migration-triggers)
11. [Welcome Flow Mastery — Migration Entry Point](#11-welcome-flow-mastery--migration-entry-point)
12. [Tag Management Frameworks](#12-tag-management-frameworks)
13. [Migration Rate Benchmarks](#13-migration-rate-benchmarks)
14. [Cross-Reference: Giuliano's 4 Migration Paths × Wiki Knowledge](#14-cross-reference-giulianos-4-migration-paths--wiki-knowledge)

---

## 1. LIFECYCLE STAGE SEGMENTATION FRAMEWORK

**Source:** `/root/wiki/tenza-marketing/_hub-email-marketing/__enqueued__/03-lifecycle-stage.md`

### Overview

Lifecycle stage segmentation divides the audience based on where they are in the customer journey. Each stage has a distinct relationship with the brand and requires fundamentally different messaging. The lifecycle model ensures new subscribers receive onboarding content, repeat buyers receive loyalty communications, and lapsed customers receive re-engagement sequences.

### The Five Primary Lifecycle Stages

| Stage | Definition | Messaging Strategy | Goal |
|-------|-----------|-------------------|------|
| **Prospects** | No purchase yet. Signed up via popup, contest, or lead magnet. | Welcome series, brand storytelling, social proof, educational content, first-purchase offer. NO aggressive promos. | Convert to first purchase |
| **New Customers** | Exactly one purchase. Most critical transition point. | Post-purchase follow-up, product usage tips, cross-sell recommendations, second-purchase incentive. 3-5 emails in first 10 days. | Convert one-time to repeat buyer |
| **Repeat Customers** | Two or more purchases. Demonstrated product-market fit. | Loyalty program, VIP-tier benefits, product category exploration, early access, referral invitations. 2-3x/week campaigns. | Deepen relationship, increase AOV |
| **At-Risk Customers** | Purchased before but no engagement in 60-120 days. | Re-engagement sequences with 15-25% off, new product announcements, "we changed" emails, feedback surveys. Max 1x/week. | Recover engagement |
| **Lapsed Customers** | No purchase or engagement in 120+ days. | 3-email sunset sequence: "We miss you" → "Last chance 20-30% off" → "Final goodbye." Then SUPPRESS. | List hygiene |

### Key Implementation Notes

- Create lifecycle stages as **dynamic Klaviyo segments** (not static lists)
- Customers move between stages as behavior changes
- A lapsed customer who re-purchases should automatically move back to "Repeat Customer"
- Map specific flows to each lifecycle stage:
  - Prospects → Welcome Flow
  - New Customers → Post-Purchase Flow + Second-Purchase Flow
  - Repeat Customers → Loyalty/VIP Flow
  - At-Risk → Winback Flow
  - Lapsed → Sunset Flow
- **Flows should be mutually exclusive** — a customer in one stage should not receive flows designed for another

### Migration Relevance

This framework directly maps to BrightKidCo's migration system:
- **Prospects** = General Fallback subscribers (no level tag yet)
- **New Customers** = First purchase, Path 3/4 migration triggers active
- **Repeat Customers** = Migrated to level-specific track
- **At-Risk** = `at_risk_no_open` tag → Winback flow
- **Lapsed** = `inactive_120_days` tag → Sunset flow

---

## 2. THE 7 CORE SEGMENTS FRAMEWORK

**Source:** `/root/wiki/tenza-marketing/_hub-business-strategy/__enqueued__/tenza-seven-core-segments-framework.md`

Every eCommerce email program needs seven foundational segments. These are dynamic — they update automatically as subscribers meet or drop off conditions.

### The Seven Segments

| # | Segment | Definition | Purpose |
|---|---------|-----------|---------|
| 1 | **X-Day Engaged** (14/30/60/90-day) | Behavioral signals: site visits, product views, cart adds, checkouts, orders (NOT just opens/clicks post-iOS 15) | Backbone of send strategy |
| 2 | **VIP** | 3+ orders (for <$100K/mo brands) or higher thresholds for larger accounts | Early releases, exclusive discounts, surprise gifts, personalized outreach |
| 3 | **New Subscriber** (non-purchaser) | Signed up but never bought | Trust-building content: social proof, testimonials, risk reversals |
| 4 | **Lapsed** | No purchase in 90+ days | Win-back sequences, re-engagement offers |
| 5 | **Win-back Candidates** | Previously purchased, dark for 120+ days | Stronger incentives, more urgent copy |
| 6 | **Promo Responders** | Convert exclusively during sale periods | Target during BFCM and seasonal events only |
| 7 | **Channel Preference** | Self-selected preferred channel and frequency | Improve deliverability |

### Send Strategy Rules

- Start campaigns with 30-day engaged segment
- Expand to 60/90-day once open rates confirm above 40%
- Reserve full-list blasts for major events (BFCM)
- Without these seven foundations, email programs default to "blast-and-pray" — the single biggest drag on deliverability and revenue per send

### Migration Relevance for BrightKidCo

| Core Segment | BrightKidCo Application |
|-------------|------------------------|
| X-Day Engaged | Determines which GF subscribers are still reachable for migration attempts |
| VIP | `vip_buyer` tag (3+ orders) → highest migration priority, level-specific VIP flows |
| New Subscriber | GF subscribers in Welcome Flow → migration anchors in every mail |
| Lapsed | GF subscribers who never migrated + never purchased → sunset candidate |
| Win-back | Migrated subscribers who went dark → level-specific winback |
| Promo Responders | GF subscribers who only buy during sales → may never migrate |
| Channel Preference | SMS vs email preference affects migration touchpoints |

---

## 3. FIVE-LAYER SEGMENTATION MODEL (SOP)

**Source:** `/root/wiki/tenza-marketing/_hub-operations/__enqueued__/sop-segmentation-strategy-framework.md`

### The Five Layers

| Layer | Type | Migration Relevance |
|-------|------|---------------------|
| 1 | **Engagement-Based** (30/60/90/180 day) | Primary migration axis — engagement decay triggers sunset |
| 2 | **Value-Based** (VIP, High AOV, Frequent, One-Time, At-Risk) | Determines migration priority and recovery investment |
| 3 | **Behavioral** (Viewed, Cart, Checkout, Purchased, Browsed) | Real-time intent signals indicating migration direction |
| 4 | **Demographic** (Location, Gender, Age) | Contextual — affects messaging, not migration logic |
| 5 | **Purchase History** (First-Time, Repeat, Lapsed, Subscription) | Lifecycle stage determines which migration path applies |

### Layer 1: Engagement-Based Segments (The Backbone)

| Segment | Klaviyo Definition | Purpose |
|---------|-------------------|---------|
| Engaged 30 Days | Opened OR Clicked email at least 1x in last 30 days | Core campaign audience |
| Engaged 60 Days | Opened OR Clicked email at least 1x in last 60 days | Expanded audience |
| Engaged 90 Days | Opened OR Clicked email at least 1x in last 90 days | Standard default |
| Engaged 180 Days | Opened OR Clicked email at least 1x in last 180 days | Broad reach |
| Unengaged 180+ Days | Opened 0x AND Clicked 0x in last 180 days | Excluded; enters sunset |

**Critical:** "Engaged" uses OR logic (open OR click), not AND. Using AND would exclude legitimate engaged subscribers.

#### Segment Size Health Targets

| Segment | Healthy | Warning | Critical |
|---------|---------|---------|----------|
| Engaged 30 Days | 20-35% | < 15% | < 10% |
| Engaged 90 Days | 40-55% | < 30% | < 20% |
| Unengaged 180+ Days | < 20% | 20-30% | > 30% |

If unengaged exceeds 30%, initiate list hygiene immediately.

### Layer 2: Value-Based Segments

| Segment | Criteria | Treatment |
|---------|----------|-----------|
| VIP (Top 10%) | Total Spent in top 10% | Highest-quality content, minimum discounts |
| High AOV ($150+) | Average Order Value > $150 | Premium positioning, limited discounting |
| Frequent Buyers (3+) | Placed Order 3+ times | Loyalty recognition, referral incentives |
| One-Time Buyers | Exactly 1 order | Onboarding, second-purchase conversion |
| At-Risk High CLV | Previously high-value, declining engagement | VIP winback (NOT standard sunset) |

### Layer 3: Behavioral Segments

| Segment | Trigger | Use Case |
|---------|---------|----------|
| Viewed Product | Viewed Product at least 1x in last 7 days | Browse abandonment, product recommendations |
| Added to Cart | Added to Cart at least 1x in last 1 day, no purchase | Cart abandonment flow |
| Started Checkout | Started Checkout at least 1x in last 1 day, no purchase | Checkout abandonment flow |
| Purchased | Placed Order at least 1x in last 30 days | Post-purchase flows |
| Browsed Collection | Viewed specific collection page | Category-specific campaigns |

### Segment Overlap Rules

| Overlap | Treatment |
|---------|-----------|
| VIP + Frequent Buyer | Highest priority — top-tier perks, NO aggressive discounts |
| At-Risk + High CLV | VIP winback flow (not standard sunset) |
| Unengaged + One-Time Buyer | Standard sunset timeline |
| Frequent Buyer + Engaged 30 Days | Qualifies for broadcast campaigns |

### Suppression Logic

Excluded from ALL campaigns:
- Unsubscribed (Klaviyo-native)
- Hard bounced (Klaviyo-native)
- Spam complainers (Klaviyo-native)
- Unengaged 180+ Days (unless in sunset flow)
- Tagged `is_bot = True`
- Tagged `unengaged = True`

---

## 4. ENGAGEMENT TIER SEGMENTATION STRATEGY

**Source:** `/root/wiki/tenza-marketing/email-marketing/__enqueued__/8-segmentation_strategy_-_creating.md` (Adam Kitchen)

### Key Insight: Go Broad, Not Narrow

Most marketers over-segment. The goal is to maximize TOTAL conversions, not click rate.

**Example:**
- Option A: 10k segment, 5% click rate = 500 visits/send × 10 = 5,000/month
- Option B: 50k broad, 2% click rate = 1,000 visits/send × 10 = 10,000/month

Broad targeting wins on total traffic, conversions, and brand impressions.

### Recommended Engagement Tiers

Use 30, 60, 90, and 180-day engaged segments blending site activity and email responsiveness:

| Tier | Definition | Send Strategy |
|------|-----------|---------------|
| 30-day engaged | Opened/clicked in last 30 days | Full frequency, all campaigns |
| 60-day engaged | Opened/clicked in last 60 days | Regular sends, most campaigns |
| 90-day engaged | Opened/clicked in last 90 days | Reduced frequency |
| 180-day engaged | Opened/clicked in last 180 days | Occasional sends |

### Apple MPP Consideration

Post-iOS 15, opens are unreliable. Use behavioral signals (site visits, cart adds, purchases) alongside email engagement for segmentation.

### Migration Relevance

Adam Kitchen's core argument applies directly to BrightKidCo:
- Don't over-segment GF subscribers into micro-buckets
- Use broad engagement tiers to determine WHO gets migration attempts
- Focus on total conversions, not click rates on individual migration mails

---

## 5. DTC SEGMENTATION STRATEGY TEMPLATE

**Source:** `/root/wiki/tenza-marketing/business-strategy/__enqueued__/reference-DTC-Segmentation-Strategy-Template-md-DTC Segmentation Strategy Template.md`

### Template Structure for Each Segment

1. **Klaviyo Logic & Technical Definition** — Exact AND/OR rules
2. **Audience Strategy & Use Cases** — Campaign type match, exclusions, hacks
3. **Predictive Analytics** — RFM/MVC, CLV, AOV targeting
4. **Messaging & Personalization** — Copy tone, dynamic content, zero-party data
5. **List Hygiene & Deliverability** — Risk level, hygiene protocol
6. **Pitfalls to Avoid** — Specific mistakes from sources

### Key Rules

- Extract EXACT parameters, timeframes, and logic conditions from sources
- Use verbatim examples where available
- Format segment definitions exactly how they'd be built in Klaviyo
- No hallucinations — only source-backed targeting rules

### Migration Application

For BrightKidCo's migration system, each migration path should follow this template:
- Path 1 (Click-Based): Define exact UTM triggers, button click conditions
- Path 2 (Reply-Based): Define NLP confidence thresholds, behavioral signals
- Path 3 (PP-Level Detection): Define Day 14 mail conditions, button click logic
- Path 4 (Purchase Hints): Define size/bundle → level inference rules

---

## 6. RFM SEGMENTATION & CUSTOMER PERSONAS

**Source:** `/root/wiki/tenza-marketing/_hub-ecom/__enqueued__/04-transcript-customer-segmentation-answering-the-why-drivers.md`

### RFM Framework

**Recency, Frequency, Monetary** — the three dimensions of customer value.

| RFM Score | Label | Treatment |
|-----------|-------|-----------|
| 5-5-5 | VIP | Special gifts, early access, retain at all costs |
| 4-5-4 | Loyal | Upsell, cross-sell, referrals |
| 3-3-3 | Potential | Nurture, recommend products |
| 1-1-1 | At Risk | Re-engage or sunset |

### Customer Drivers Map Framework

"They use our product, to [SOLVE WHAT PROBLEM]?"
- Who would love to solve that problem?
- How else could they solve it?
- Why should they pick YOUR product?

### Self-Serve Segmentation

Allow subscribers to "raise their hands" and segment themselves:
- Pop-up with 4 buttons (BrightKidCo's exact mechanism)
- Quiz/survey at signup
- Preference center updates
- Click behavior on level-specific content

### Migration Relevance

The Customer Drivers Map maps directly to BrightKidCo's 4 avatar levels:
- **Level 1:** "My child talks about potty but won't do it" → comfort/training focus
- **Level 2:** "Sensory issues, tried many methods" → science/mechanism focus
- **Level 3:** "Non-verbal or high support needs" → patience/understanding focus
- **General:** "Still figuring out" → education/awareness focus

Self-serve segmentation IS Path 1 (Click-Based Migration).

---

## 7. WINBACK FLOW STRUCTURES

### Winback Flow A: Post-Buyer Inactive (Course Winback)

**Source:** `/root/wiki/tenza-marketing/email-marketing/__enqueued__/course-winback-flow-_-gamma.md`

**Purpose:** Encourage another purchase from past customers. Keep it simple — 99% of retention comes from campaigns, not flows.

**3-Email Sequence:**

| Email | Purpose | Content | Subject Lines |
|-------|---------|---------|--------------|
| #1 "It's Been Awhile" | Customer experience, feel missed | Brand updates, product recs | "It's been awhile…", "We miss you!", "Time for a restock?" |
| #2 "Discount Open" | Automated custom discount | 15% off, trending products | "X% OFF just for you", "Limited Discount Inside" |
| #3 "Text-Based Closer" | Personal touch from founder | Plain text, last chance discount | "Just checking in.", "Last chance for X% OFF!" |

**Key Insight:** Text-based emails from the founder perform exceptionally well for the final touchpoint.

### Winback Flow B: Technical Flow Example

**Source:** `/root/wiki/reference/__enqueued__/customer_winback_flow_example.md`

```
WHEN THEY ENTER THE FLOW
Wait 90 Days
Update Property: WinbackFlow = Inactive
Email 1: Value Proposition reminder
Wait 1 Day
Email 2: Re-introduce best-sellers
Wait 5 Days
  └─ Placed More than 1 Order Over all time?
     YES → Email 3: 48 hour offer → Wait 1 day → Email 4: Message from CEO
     NO  → Email 3: 48 hour offer → Wait 1 day → Email 4: Message from CEO
Update Property: WinbackFlow = Inactive
DURATION: 97 Days
```

### Winback Performance Targets

| Metric | Target |
|--------|--------|
| Email 1 Open Rate | > 25% |
| Email 2 Open Rate | > 20% |
| Email 3 Open Rate | > 15% |
| Conversion Rate | > 3% within 30 days |
| Unsubscribe Rate | < 0.5% |

---

## 8. SUNSET FLOW BEST PRICES

### Sunset Flow Architecture

**Source:** `/root/wiki/tenza-marketing/business-strategy/__enqueued__/when-they-enter-the-flow-5.md`

```
WHEN THEY ENTER THE FLOW
Email 1: Update preferences CTA
Wait 3 Days
Email 2: Is this goodbye?
Wait 5 Days
Update profile property: Create Suppress = True (Boolean)
DURATION: 8 Days
```

### Sunset Flow Strategy

**Source:** SOP Segmentation Framework + Lifecycle Stage

**Trigger:** 120 days inactive (configurable: 90-365 based on sending frequency)
**Purpose:** List hygiene — NOT revenue
**Segmentation:** Cross-level (works regardless of migration status)

**Standard 2-Email Cadence:**

| Step | Timing | Action |
|------|--------|--------|
| Day 0 | Email 1 | "We Miss You" — offer frequency/topic changes, preference center, "Stay" + "Unsubscribe" CTAs |
| Day 7 | Conditional Split | Opened OR Clicked in last 7 days? → YES: End flow (re-engaged!) / NO: Continue |
| Day 7 | Email 2 | "Final Farewell" — "click to stay or we'll unsubscribe you" |
| Day 8 | Action | Update profile property: `Suppress = True` |

**Post-Flow Handling:**
- Add to suppression list (not permanent delete)
- Suppress for 6-12 months (may re-engage via other channels)
- If subscriber makes new purchase or re-engages → remove suppression
- Run sunset flow quarterly

### When to Sunset vs. Winback

| Condition | Action | Rationale |
|-----------|--------|-----------|
| 90-180 days no purchase | Winback | Focused on reactivation, sends offers |
| 180+ days no engagement | Sunset | Focused on list hygiene, removes unengaged |
| At-Risk + High CLV | VIP Winback (NOT sunset) | Previously high-value deserves extra investment |

### Suppression Decision Tree

| Scenario | Action | Why |
|----------|--------|-----|
| Unsubscribes | Suppress immediately | Legal obligation |
| Hard bounces | Suppress immediately | Invalid — no recovery |
| Spam complaints | Suppress immediately | Reputation risk |
| 90 days no engagement | Enter winback flow | Recovery window open |
| 120-180 days no engagement | Enter sunset flow | Final recovery attempt |
| Sunset completed, no re-engagement | Suppress permanently | Two attempts made |
| Bot behavior | Suppress immediately | Not a real person |

---

## 9. VIP FLOW & LOYALTY MIGRATION

**Source:** `/root/wiki/marketing-copy/copywriting/__enqueued__/vip-flow.md`

### VIP Email Sequence

| Email | Subject | Timing | Content |
|-------|---------|--------|---------|
| #1 | "You've earned VIP status!" | After qualifying | Welcome to VIP, 20% off code (VIP20), exclusive perks |
| #2 | "Don't forget — you still have 20% off!" | 7-14 days after #1 | Reminder, trending products, VIP perks link |

### VIP Segment Criteria (from SOP)

| Tier | Criteria | Treatment |
|------|----------|-----------|
| VIP | 3+ orders OR >$500 lifetime spend | Early access, higher discounts, exclusive previews |
| Standard | 1-2 orders | Standard nurture, moderate offers |
| First Purchase | Exactly 1 order in last 90 days | Onboarding, cross-sell |

### Migration Relevance

VIP is the END STATE of successful migration:
- GF subscriber → migrates to level-specific → makes repeat purchases → becomes VIP
- VIP treatment must be level-specific (L1 VIP gets different content than L3 VIP)
- VIP winback is the highest-priority recovery flow

---

## 10. POST-PURCHASE FLOW & MIGRATION TRIGGERS

**Source:** `/root/wiki/marketing-copy/copywriting/__enqueued__/post-purchase-flow-2.md`

### New Customer Post-Purchase Sequence

| Email | Subject | Timing | Purpose |
|-------|---------|--------|---------|
| #1 | Order confirmation | Immediate | Confirmation, shipping info |
| #2 | "The gift that keeps on giving!" | 3-5 days after purchase | Social community (Instagram/Facebook/TikTok) |
| #3 | "[Brand] hacks you NEED" | After delivery expected | Product tips & education |
| #4 | "What do you think?" | 7-14 days after delivery | Review request |

### Repeat Customer Sequence

| Email | Subject | Timing | Purpose |
|-------|---------|--------|---------|
| #1 | "Wow, thank you again!" | 1 day after purchase | Loyalty thank you, bonus points |
| #2 | "The gift that keeps on giving!" | 7-10 days after delivery | SMS conversion + review request |

### Fulfilled Order Flow (Technical)

**Source:** `/root/wiki/reference/__enqueued__/fulfilled_order_flow_example.md`

```
WHEN THEY ENTER THE FLOW
Update Property: FulfilledOrderFlow = Active
Wait 12 Hours
Email 1: Eliminate Buyers Remorse
Wait 5 Days
Email 2: Tutorial guide on product
Wait 7 Days
Email 3: Migrate to social media
Wait 7 Days
Email 4: Content Nurturing
Wait 7 Days
Email 5: Time sensitive Offer
Update Property: FulfilledOrderFlow = Inactive
DURATION: 27 Days
```

### Migration Relevance

Post-purchase is the STRONGEST migration window:
- **Path 3 (PP-Level Detection)** fires at Day 14 — the fulfilled order flow creates the engagement needed
- **Path 4 (Purchase Hints)** fires at Day 0 — size/bundle data provides immediate inference
- Post-purchase emails build the trust needed for self-selection at Day 14

---

## 11. WELCOME FLOW MASTERY — MIGRATION ENTRY POINT

**Source:** `/root/wiki/tenza-marketing/email-marketing/__enqueued__/welcome-flow-mastery-_-gamma.md` (Max Sturtevant, Well Copy — $20M+ email revenue)

### The Trust Threshold

People need to see you multiple times before buying. The welcome flow's job is to overcome these objections:
- Who is this brand?
- Are they real?
- Are they going to scam me?
- Does their product work?
- Is their product any good?
- Is this product worth the price?

### Email ROI

- Paid ads: $1 in → $2 back (average)
- Email: $1 in → $44 back (average)

### Welcome Flow Structure (8 Emails, 7-14 Days)

| Email | Day | Purpose | Content Focus |
|-------|-----|---------|--------------|
| #1 | 0 | Welcome + deliver offer | Discount code, brand intro |
| #2 | 1 | Brand story | Founder story, mission, values |
| #3 | 2 | Education | Product benefits, how it works |
| #4 | 3 | Social proof | Reviews, testimonials, UGC |
| #5 | 5 | Product deep-dive | Best-sellers, use cases |
| #6 | 7 | Objection handling | FAQ, guarantees, risk reversal |
| #7 | 10 | Urgency | Limited time, scarcity |
| #8 | 14 | Final push | Last chance, strong CTA |

### Key Design Principles

- **Short, bite-sized emails** over spread-out timeframes (not dense 2-3 email blasts)
- Each email addresses ONE objection
- Modern customers have fried attention spans
- The welcome flow has two outcomes:
  - **Outcome A:** Convert curious visitors who would have left
  - **Outcome B:** Prime future customers for purchase down the line

### Migration Relevance

The welcome flow is the PRIMARY migration vehicle for GF subscribers:
- Every GF welcome email should contain migration anchors (level-specific story links)
- Path 1 (Click-Based) fires when subscribers click level-specific content
- The 14-day welcome flow timeline aligns with Path 3 (Day 14 PP-Level Detection)
- Non-buyers from welcome flow enter FAQ/Objection Library → continued migration opportunities

---

## 12. TAG MANAGEMENT FRAMEWORKS

### Primary Avatar Tags (BrightKidCo-Specific)

| Tag | Source | Audience |
|-----|--------|----------|
| `avatar_level1` | Pop-up button click or migration path | Verbal, 3-5 years, ~35% |
| `avatar_level2` | Pop-up button click or migration path | Mixed verbal, 5-7 years, ~40% |
| `avatar_level3` | Pop-up button click or migration path | Non-verbal, 6-10+ years, ~25% |
| `avatar_general` | Pop-up "Still figuring out" or no selection | Cross-level, ~50% of real volume |

### Behavioral Tags (from DOC 1)

**From Behavior:**
- `welcome_completed` — finished Welcome Flow
- `welcome_completed_no_purchase` — finished Welcome Flow, no purchase
- `post_purchase_active` — purchased and engaged
- `at_risk_no_open` — Day 3-7 no opens
- `inactive_60_days` — triggers Winback Path B
- `inactive_120_days` — triggers Sunset Flow

**From Purchase:**
- `buyer_1pair` — skeptical, "just trying it"
- `buyer_3plus3` — moderate confidence
- `buyer_5plus5` — high investment readiness
- `repeat_buyer` — 2+ orders
- `vip_buyer` — 3+ orders

### Engagement Properties (Wiki-Derived)

| Property | Type | Purpose |
|----------|------|---------|
| `engagement_tier` | dynamic | 7/14/30/60/90-day segment membership |
| `last_email_click` | timestamp | Most recent click |
| `last_email_open` | timestamp | Unreliable for MPP users |
| `last_site_activity` | timestamp | Most recent website visit |
| `last_purchase` | timestamp | Most recent order |

### Migration-Specific Properties

| Property | Type | Purpose |
|----------|------|---------|
| `Suppressed` | Boolean | Set by sunset flow on Day 8 |
| `migrated_from` | string | Source segment before migration |
| `migration_trigger` | string | What caused migration (click, purchase, preference, sunset) |

### Predictive Properties (Klaviyo)

| Property | Purpose |
|----------|---------|
| `predicted_clv` | Predicted customer lifetime value |
| `predicted_propensity` | Likelihood to purchase in next 60 days |
| `churn_risk` | 1-5 scale, 5 = highest |
| `expected_date_of_next_order` | EDNO prediction |

### Tag Application Rules

1. At Signup: Pop-up button click applies avatar tag
2. At Purchase: Purchase data applies buyer tags
3. At Day 14: Level-Detection Mail click can change `avatar_general` to specific level
4. Flow Routing: Tag determines Welcome Flow variant
5. Cross-Level Override: Cart/Checkout use Cross-Level even if tag known
6. Confidence Threshold: Paths 2 and 4 require 70%+; Paths 1 and 3 are explicit choice

### Tag Removal Rules

- **One-way migration only** — once level tag applied, never returns to GF
- Level tags can be upgraded (general → level1/2/3) via migration
- Buyer tags accumulate (buyer_1pair → repeat_buyer → vip_buyer)
- Behavioral tags update based on engagement state
- Level tag is permanent — if wrong, stays wrong (corrected by behavior, not tag change)

---

## 13. MIGRATION RATE BENCHMARKS

### Industry Benchmarks (from Wiki Sources)

| Metric | Benchmark | Source |
|--------|-----------|--------|
| Email revenue attribution | 25-35% of total revenue | Tenza Master Playbook |
| Current Shopify DTC average | 8-12% of revenue from email | Tenza Master Playbook |
| Cart recovery rate | 8-15% (benchmark) vs 2-5% (typical) | Tenza Master Playbook |
| Flow open rates | 15-25% (typical) | Tenza Master Playbook |
| Welcome flow conversion | Up to 50% of subscribers | Welcome Flow Mastery |
| Email ROI | $44 back per $1 spent | Welcome Flow Mastery |
| Paid ads ROI | $2 back per $1 spent | Welcome Flow Mastery |
| Segmented vs unsegmented | 3-5x conversion rate | SOP Segmentation |
| Re-engagement open rates | 20-25% (healthy) | Lifecycle Stage |
| Sunset flow suppression | 60-80% of entered subscribers | Sunset Flow |

### BrightKidCo Migration-Specific Benchmarks

| Migration Path | Expected Rate | Conversion Uplift | Time to Effect |
|---------------|---------------|-------------------|----------------|
| Path 1 (Click-Based) | 15-25% of GF | +30-50% | Immediate |
| Path 2 (Reply-Based) | 5-15% of GF | +20-40% | Manual review |
| Path 3 (PP-Level Detection) | 40-50% of GF purchasers | +30-50% | Day 14+ |
| Path 4 (Purchase Hints) | 10-20% of GF purchasers | +15-25% | Day of purchase |

### Lifecycle Migration Rate

- **Expected:** 65-75% of GF subscribers will eventually migrate to a level-specific track
- **Remaining:** 25-35% stay in GF as permanent, valid audience
- **Zero-harm design:** Every migration path's fallback is "stay GF"

### Engagement Segment Health Targets

| Segment | Healthy | Warning | Critical |
|---------|---------|---------|----------|
| Engaged 30 Days | 20-35% of list | < 15% | < 10% |
| Engaged 90 Days | 40-55% of list | < 30% | < 20% |
| Unengaged 180+ Days | < 20% of list | 20-30% | > 30% |
| First-Time Buyers (30d) | 5-15% of list | — | — |
| Repeat Buyers | 15-30% of list | — | — |
| Lapsed (90d) | 10-20% of list | — | — |

---

## 14. CROSS-REFERENCE: GIULIANO'S 4 MIGRATION PATHS × WIKI KNOWLEDGE

### Path 1: Click-Based (Pop-Up Self-Selection) × Wiki

| Wiki Concept | Application to Path 1 |
|-------------|----------------------|
| **Self-Serve Segmentation** (Customer Segmentation Transcript) | Pop-up with 4 buttons IS the self-serve segmentation mechanism. Subscribers "raise their hands" by clicking. |
| **Engagement Tiers** (Adam Kitchen) | Only show migration pop-ups to engaged visitors (30-day active). Don't waste migration attempts on cold traffic. |
| **Welcome Flow Mastery** (Max Sturtevant) | Migration anchors in every GF welcome email. 8 emails × multiple story links = multiple migration chances. |
| **Behavioral Segmentation** (SOP) | Click on level-specific story link = behavioral signal → tag applied |
| **7 Core Segments** | Path 1 targets the "New Subscriber" segment — trust-building content before migration ask |

### Path 2: Reply-Based (Behavioral Signals) × Wiki

| Wiki Concept | Application to Path 2 |
|-------------|----------------------|
| **Customer Drivers Map** (Segmentation Transcript) | Reply content analyzed against the 4 "why" dimensions to infer level |
| **Engagement Decay** (Lifecycle Stage) | Declining engagement across Welcome Flow emails = signal for migration direction |
| **NLP Confidence Threshold** | Wiki supports 70%+ confidence before tag application (conservative approach) |
| **Zero-Party Data** (DTC Template) | Replies ARE zero-party data — the most reliable migration signal |

### Path 3: PP-Level Detection (Day 14) × Wiki

| Wiki Concept | Application to Path 3 |
|-------------|----------------------|
| **Post-Purchase Flow** (Fulfilled Order Flow) | Day 14 aligns with the 27-day fulfilled order flow — subscriber has used product for ~1 week |
| **Lifecycle Stage Transition** | "New Customer" → "Repeat Customer" transition point. Day 14 is the optimal moment for self-selection. |
| **RFM Recency** | Day 14 = high recency score = highest likelihood of engagement with migration mail |
| **Winback Flow Timing** | If Day 14 fails, Day 21 gentle reminder follows winback timing patterns |
| **Self-Serve Segmentation** | Same 4-button mechanism as pop-up — subscriber already familiar with the format |

### Path 4: Purchase-Based (Purchase Hints) × Wiki

| Wiki Concept | Application to Path 4 |
|-------------|----------------------|
| **Purchase History Segmentation** (SOP Layer 5) | Size/bundle data IS purchase history segmentation applied to migration |
| **RFM Monetary** | Higher spend (5+5 bundle) = higher monetary score = likely higher engagement = faster migration |
| **Behavioral Segmentation** (SOP Layer 3) | Purchase event is the strongest behavioral signal — triggers immediate tag inference |
| **Predictive Analytics** (Klaviyo) | `predicted_propensity` and `expected_date_of_next_order` inform confidence threshold |
| **VIP Segment Logic** | Bundle size → investment readiness → VIP potential → migration priority |

### Cross-Cutting Wiki Principles Applied to All 4 Paths

| Principle | Source | Application |
|-----------|--------|-------------|
| **Segmentation removes wrong people from wrong messages** | SOP Segmentation | Migration ensures level-specific content reaches the right subscribers |
| **Dynamic segments, not static lists** | Lifecycle Stage | Migration tags update automatically as behavior changes |
| **Go broad on campaigns, specific on flows** | Adam Kitchen | Cross-level campaigns for GF; level-specific flows for migrated |
| **Revenue per send doubles with segmentation** | SOP Segmentation | Migrated subscribers convert 3-5x higher than generic GF |
| **One-way migration only** | Tag Architecture | Once migrated, subscriber never returns to GF — level tag is permanent |
| **Zero-harm fallback** | Migration Strategy | Every failed migration = stay GF = continue receiving cross-level content |

---

## WIKI FILES REFERENCED

1. `/root/wiki/tenza-marketing/_hub-email-marketing/__enqueued__/03-lifecycle-stage.md` — Lifecycle stage segmentation
2. `/root/wiki/tenza-marketing/_hub-business-strategy/__enqueued__/tenza-seven-core-segments-framework.md` — 7 core segments
3. `/root/wiki/tenza-marketing/_hub-operations/__enqueued__/sop-segmentation-strategy-framework.md` — 5-layer segmentation SOP
4. `/root/wiki/tenza-marketing/email-marketing/__enqueued__/8-segmentation_strategy_-_creating.md` — Engagement tier strategy (Adam Kitchen)
5. `/root/wiki/tenza-marketing/business-strategy/__enqueued__/reference-DTC-Segmentation-Strategy-Template-md-DTC Segmentation Strategy Template.md` — DTC template
6. `/root/wiki/tenza-marketing/_hub-ecom/__enqueued__/04-transcript-customer-segmentation-answering-the-why-drivers.md` — RFM & customer personas
7. `/root/wiki/tenza-marketing/email-marketing/__enqueued__/course-winback-flow-_-gamma.md` — Winback flow structure
8. `/root/wiki/marketing-copy/copywriting/__enqueued__/winback-customer-winback-flow.md` — Winback email templates
9. `/root/wiki/tenza-marketing/business-strategy/__enqueued__/when-they-enter-the-flow-5.md` — Sunset flow architecture
10. `/root/wiki/marketing-copy/copywriting/__enqueued__/vip-flow.md` — VIP flow structure
11. `/root/wiki/marketing-copy/copywriting/__enqueued__/post-purchase-flow-2.md` — Post-purchase flow
12. `/root/wiki/reference/__enqueued__/fulfilled_order_flow_example.md` — Fulfilled order flow
13. `/root/wiki/tenza-marketing/email-marketing/__enqueued__/welcome-flow-mastery-_-gamma.md` — Welcome flow mastery
14. `/root/wiki/marketing-copy/copywriting/__enqueued__/popup-and-signup-form-strategy.md` — Pop-up strategy
15. `/root/wiki/reference/__enqueued__/customer_winback_flow_example.md` — Winback flow technical
16. `/root/wiki/reference/__enqueued__/welcome_flow_example.md` — Welcome flow technical
17. `/root/wiki/tenza-marketing/ecom/__enqueued__/master-playbook.md` — Tenza master playbook
18. `/root/wiki/tenza-marketing/_hub-business-strategy/__enqueued__/segmentation-data-strategy-framework.md` — Segmentation data strategy
19. `/root/wiki/marketing-copy/copywriting/__enqueued__/replenishment-email-flow.md` — Replenishment flow
20. `/root/wiki/marketing-copy/copywriting/__enqueued__/cross-sell-email-flow.md` — Cross-sell flow
21. `/root/wiki/marketing-copy/copywriting/__enqueued__/abandoned-checkout-flow.md` — Abandoned checkout flow
22. `/root/wiki/about-me/brightkidco-project-overview.md` — BrightKidCo project overview
