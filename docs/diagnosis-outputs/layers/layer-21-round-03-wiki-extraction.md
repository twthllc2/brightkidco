# Layer 21 Round 3: General Fallback Sub-Groups — Wiki Extraction

## Overview

This document extracts all relevant wiki knowledge for enriching sub-group understanding within the General Fallback segment. The wiki contains extensive frameworks for audience segmentation, micro-segments, multi-audience email strategies, and customer persona development. These frameworks are cross-referenced against Giuliano's 5 sub-groups to identify enrichment opportunities and additional sub-group types.

---

## Framework 1: RFM Analysis & Predictive Data (11-Persona Matrix)

**Source:** `/root/wiki/tenza-marketing/_hub-email-marketing/__enqueued__/SOP-segmentation-rfm-predictive.md`

### RFM Scoring Methodology

RFM scores every customer on three dimensions:
- **Recency (R):** How recently did they purchase? Recent buyers are more responsive and more likely to purchase again.
- **Frequency (F):** How often do they purchase? Frequent buyers are more loyal and have higher lifetime value.
- **Monetary (M):** How much do they spend? High spenders contribute more revenue per transaction.

Each dimension is scored 1 (lowest) to 5 (highest), creating a 3-digit RFM score (e.g., 5-4-3 = purchased recently, frequently, with medium spend). There are 125 possible combinations (5x5x5), grouped into 11 actionable personas.

### The 11 RFM Personas

| Persona | RFM Score Pattern | % of Customers | Strategy |
|---|---|---|---|
| **Champions** | R=5, F=5, M=5 | 2-5% | Reward them. Early access, VIP perks, referral incentives. Don't over-market — maintain connection. |
| **Loyal Customers** | R=4-5, F=4-5, M=3-5 | 8-15% | Upsell higher-value products, cross-sell complementary items. Ask for reviews and referrals. |
| **Potential Loyalists** | R=4-5, F=2-3, M=3-5 | 10-15% | Convert to regular buyers. Recommend related products, offer membership/loyalty program. |
| **New Customers** | R=5, F=1, M=1-5 | 10-20% | Onboard and educate. Build relationship before pushing second purchase. |
| **Promising** | R=3-4, F=1, M=1-5 | 10-15% | Nurture with educational content. Create brand affinity. Don't discount too early. |
| **Need Attention** | R=3, F=3, M=3 | 5-10% | Re-engage with limited-time offers. Remind them of your value. |
| **About to Sleep** | R=2-3, F=2-3, M=2-3 | 5-10% | Winback campaigns with small discounts. Remind them what they're missing. |
| **At Risk** | R=2, F=3-5, M=3-5 | 5-10% | High-value customers losing engagement. Personalized outreach, phone call if B2B. |
| **Cannot Lose Them** | R=1-2, F=5, M=5 | 1-3% | Highest priority winback. Contact through every channel. Exclusive offers, account manager reach-out. |
| **Hibernating** | R=1-2, F=2-3, M=2-3 | 5-10% | Automated winback series. One final offer before moving to sunset. |
| **Lost** | R=1, F=1, M=1 | 10-20% | Do not send campaigns. Suppress or sunset. Only re-engage if they opt in again. |

### Persona Priority for Campaign Targeting

1. **Champions** — highest response rate, lowest discount sensitivity
2. **Loyal Customers** — reliable responders, good upsell candidates
3. **Need Attention** — moderate value, need the most strategic push
4. **At Risk / Cannot Lose Them** — urgent, high-value, time-sensitive
5. **Potential Loyalists / Promising / New Customers** — building for the future
6. **About to Sleep / Hibernating** — one-shot winback before sunset
7. **Lost** — excluded from all campaigns

### Predictive Analytics Integration

- **Predicted CLV:** Top 10% = VIP perks; Mid 50-80% = upsell campaigns; Bottom 50% = automated flows only
- **Churn Risk Score (1-5):** Score 4+ = immediate winback intervention with strong offer
- **Next Purchase Date:** Within 7 days = send immediately; Within 30 days = prepare campaign queue; 30+ days = hold

### Key Targeting Combinations

- **High CLV + Low Engagement = Winback Priority:** Top 30% by CLV AND 0 engagements in 90 days → personalized winback with strong offer
- **High Churn Risk + Recent Purchase = Retention Push:** Churn risk 4+ AND purchased in last 30 days → post-purchase onboarding + loyalty enrollment
- **Low CLV + High Frequency = Surprising Potential:** Bottom 40% CLV AND 3+ orders → upsell to higher-AOV products

---

## Framework 2: Adam Kitchen's Segmentation Strategy (Broad vs. Hyper-Segmentation)

**Source:** `/root/wiki/tenza-marketing/email-marketing/__enqueued__/8-segmentation_strategy_-_creating.md`

### Core Principle: Go Broad for Niche Brands

> "Most of what you've been told about segmentation is either a lie or a wasted effort."

**Key Insight:** Customer behavior changes over time. A customer who wanted to build muscle last winter may now want to get shredded before summer. Hyper-segmentation based on first purchase excludes them from relevant future campaigns.

**Recommendation for niche eCommerce brands (yoga, dental care, bodybuilding):**
- Keep the majority of campaign strategy focused on **broad targeting**
- Maximize impressions/reach, TOTAL conversions, and minimize resource allocation
- Use basic engagement tiers: **30, 60, 90, and 180-day engaged segments**
- Blend site activity and email responsiveness

### The Math: Why Broad Wins

| Strategy | Audience | Click Rate | Visitors/Send | Monthly Sends | Monthly Visits |
|---|---|---|---|---|---|
| Hyper-segmented | 10k | 5% | 500 | 10 | 5,000 |
| Broad | 50k | 2% | 1,000 | 10 | 10,000 |

**Result:** Broad targeting = 100% uplift in visits, plus increased brand impressions.

### Exceptions to Broad Targeting

Factors that influence segmentation strategy:
- Diversity of product catalogue (large retailer vs. niche offering)
- Seasonality of product catalogue and buying behaviour
- Purchase latency between SKUs or category

---

## Framework 3: Apple iOS Segmentation (MPP Users)

**Source:** `/root/wiki/tenza-marketing/email-marketing/__enqueued__/8-segmentation_strategy_.md`

### Three-Step MPP Segmentation Strategy

1. **Identify MPP Users** — Create segment using Klaviyo's MPP detection
2. **Identify Unengaged MPP Users** — Use clicks as engagement fallback (30/60/90-day windows)
3. **Create New Segmentation Strategy** — Use clicks to determine engagement for MPP users

### Engagement Metrics for MPP Users (Fallback)

- Clicked email within X period of time
- Active on site in the last X amount of days
- Purchased product in the last X amount of days

**Key Principle:** Clicks are the most important engagement signal for MPP users since web tracking may also be disabled.

---

## Framework 4: Predictive Analytics — Expected Date of Next Order (EDNO)

**Source:** `/root/wiki/tenza-marketing/email-marketing/__enqueued__/written-by-andrew-langhorn.md`

### How EDNO Works

Klaviyo's predictive model analyzes:
- **Purchase history:** What they bought, when, how much
- **Website behaviour:** Pages visited, time on page, cart activity
- **Email engagement:** Opens, clicks, purchases from emails

### Business Applications

1. **E-commerce:** Predict next purchase → send reminder before expected date → offer irresistible deal
2. **Subscription services:** Predict renewal date → send targeted renewal reminders → reduce churn
3. **Service-based:** Predict next service need → send timely reminders → increase retention
4. **Event-based:** Predict next event attendance → send personalized event promotions

### Key Caveat

> Don't count down to the expected date — repeat customers will get the same sequence leading to unsubscribes. EDNO should complement, not replace, product-specific replenishment flows.

---

## Framework 5: 7 Core Segments Framework

**Source:** `/root/wiki/tenza-marketing/_hub-client-acquisition/__enqueued__/7-core-segments-framework.md`

### The 7 Foundational Segments

| Segment | Definition | Strategy |
|---|---|---|
| **1. X-Day Engaged** | 14, 30, 60, 90-day engaged (use behavioral signals post-iOS 15) | Start with 30-day, expand to 60/90 once open rates confirm >40% |
| **2. VIP (Top Tier)** | Top-tier by spend or order count (3+ orders for <$100K/mo) | Early product releases, exclusive discounts, surprise gifts, personalized outreach |
| **3. New Subscriber** | Non-purchaser who just joined | Trust-building content — social proof, testimonials, risk reversals before promotions |
| **4. Lapsed** | No purchase in 90+ days | Win-back sequences with escalating incentives |
| **5. Win-Back Candidates** | Previously purchased, dark 120+ days | Stronger incentives and more urgent copy than standard lapsed |
| **6. Promo Responders** | Convert exclusively during sale periods | Target during BFCM and seasonal events only |
| **7. Channel Preference** | Self-selected preferred channel and frequency | Improve deliverability by respecting preferences |

### Key Principle

> Without these seven foundations, email programs default to blast-and-pray — the single biggest drag on deliverability and revenue per send.

---

## Framework 6: Newsletter Segmentation Strategy (6 Layers)

**Source:** `/root/wiki/tenza-marketing/_hub-client-acquisition/__enqueued__/09-newsletter-segmentation-strategy.md`

### Segmentation Layers (Broadest to Most Specific)

1. **Engagement Tier** — Active (30d), Warm (60d), Cold (90d+), Dormant (90d+ no opens). Foundational layer.
2. **Interest/Topic** — Based on welcome survey, click behavior, content consumption. Don't send "social media" to "email marketing" subscribers.
3. **Purchase History** — Product A vs B, one-time vs repeat, high-ticket vs low-ticket. Determines offer relevance.
4. **Content Format Preference** — Video-first, text-first, podcast, infographic. 20%+ engagement boost.
5. **Lifecycle Stage** — Lead, trial user, active customer, at-risk, churned. Different emails for different stages.
6. **Demographic/Firmographic** — Industry, role, company size, location. Critical for B2B.

### Automation Rules

- New subscriber → auto-tagged + nurture sequence
- Clicks topic tag → auto-added to interest segment
- No opens 30 days → downgrade to Lapsed
- Purchase → move to Customer segment + post-purchase sequence

### Segmentation Hygiene

> Review and purge segments quarterly. Segments with fewer than 50 subscribers should be merged. Over-segmentation creates operational complexity without proportional gains. The goal is meaningful personalization, not a thousand micro-segments.

---

## Framework 7: Visitor Type Segmentation (Pop-Up Strategy)

**Source:** `/root/wiki/tenza-marketing/_hub-operations/__enqueued__/tenza-_pop_ups--61-segmenting-by-visitor-type.md`

### 5 Visitor Segments

| Visitor Type | Definition | Pop-Up Strategy |
|---|---|---|
| **New Visitor** | Not an existing Klaviyo profile | Full-screen takeover, time delay 4-12s, primary acquisition incentive, multi-step (email → SMS) |
| **Returning Non-Purchaser** | Recognized profile, NOT on list, zero orders | Different incentive than new visitor, context-aware copy ("Still Thinking It Over?"), "double tap" strategy |
| **Existing Subscriber** | On main subscriber list | Slide-in/fly-out for SMS opt-in or zero-party data collection (birthday, preferences) |
| **VIP** | Member of VIP segment (5+ lifetime orders) | Exclusive offer, value-add (free gift, early access, hidden VIP collection) |
| **Lapsed Customer** | Previous customer, 90+ days since last order | "Welcome Back" offer, more compelling than standard (15% vs 10%), warm personal invitation |

### Key Principle

> The most significant limitation of a single, generic pop-up is that it treats every visitor identically. The message we present to a first-time visitor should be fundamentally different from the one we show to a loyal, returning customer.

---

## Framework 8: Audience Awareness Levels (Eugene Schwartz / Great Leads)

**Source:** `/root/wiki/marketing-copy/copywriting/__enqueued__/great-leads--to-make-this-work-youll-need-finesse.md`

### The Awareness Spectrum

From "Great Leads" (a compilation of Eugene Schwartz's awareness framework):

1. **Most Aware** — Customer knows who you are and what you sell. Ready to buy. Direct offer works.
2. **Product Aware** — Knows your product but not convinced it's right for them. Need differentiation.
3. **Solution Aware** — Knows solutions exist but not yours. Need positioning.
4. **Problem Aware** — Senses they have a problem but doesn't know solutions exist. Need problem agitation.
5. **Most Unaware** — No knowledge of problem or solution. Need story-based entry (Proclamation Lead, Story Lead).

### Application to Sub-Groups

> "Winning the attention of your most 'unaware' customers can be especially difficult, as they have no reason to trust or even listen to your message. Come on too strong with a pitch or product mention, and you could chase them away. On the other hand, once you've won their attention and moved past that initial resistance, their lack of awareness can make them more receptive to an offer which is, to them, unique in a very real way."

---

## Framework 9: Modular Matrix — Audience-Aware Copy Selection

**Source:** `/root/wiki/marketing-copy/copywriting/__enqueued__/intro-category-format-bridge-type-core-path-cta-style-status.md`

### Intro Categories (Based on Audience Awareness)

| Category | Psychological Trigger | When to Use |
|---|---|---|
| ⚠️ **Pain Activation** | "That's exactly my problem." | Problem-aware audiences |
| 🔍 **Curiosity** | "That's not how I thought about this." | Saturated markets, "we've tried everything" audiences |
| ✨ **Desire Creation** | "I want that outcome / version of me." | Solution-aware audiences |
| 🚫 **Alternative Disruption** | "What I'm doing now isn't good enough." | Switching behavior required |
| 🎯 **Direct Intent Capture** | "This is for me, right now." | Most-aware audiences |

### Combination Math

25 Intro shells × 6 Bridge types × 2 Core pathways × 6 CTAs = **1,800 unique script combinations**

---

## Framework 10: Zero-Party Data Collection for Sub-Group Enrichment

**Source:** `/root/wiki/tenza-marketing/_hub-email-marketing/__enqueued__/SOP-segmentation-rfm-predictive.md`

### Collection Channels

1. **Quiz Results** — Skin type, style preference, fitness goals, budget range, product concerns
2. **Preference Centers** — Email frequency, product categories of interest, communication channels
3. **Survey Responses** — NPS scores, satisfaction, future purchase intent
4. **Post-Purchase Feedback** — One-question preference quizzes

### Personalization Applications

| Data Type | Application |
|---|---|
| Quiz preference (e.g., skincare type) | Product recommendations show only matching products |
| Frequency preference | Limit sends to weekly for "weekly" preference subscribers |
| Category interest | Only send launches in preferred categories |
| Goal (e.g., weight loss, muscle gain) | Content tailored to specific goal |
| NPS score | Promoters: ask for review/referral. Passives: nurturing. Detractors: account management |
| Budget range | Show products within stated budget tier |

---

## Cross-Reference: Wiki Frameworks vs. Giuliano's 5 Sub-Groups

### Mapping Wiki Frameworks to Sub-Group Types

Giuliano's system defines 5 sub-groups within General Fallback. The wiki provides multiple overlapping frameworks that can enrich each sub-group:

| Wiki Framework | Sub-Group Application |
|---|---|
| **RFM 11-Persona Matrix** | Maps directly to behavioral sub-groups: Champions, Loyal, At Risk, etc. |
| **7 Core Segments** | Defines lifecycle-based sub-groups: New, VIP, Lapsed, Win-Back, Promo |
| **Newsletter 6-Layers** | Adds interest/topic and format preference dimensions to sub-group definition |
| **Visitor Type Segmentation** | Defines on-site behavior sub-groups: New, Returning, Subscriber, VIP, Lapsed |
| **Awareness Levels** | Adds awareness-based sub-groups: Unaware, Problem-Aware, Solution-Aware, Product-Aware, Most-Aware |
| **Zero-Party Data** | Adds self-declared preference sub-groups: goals, budget, category interest |

### Additional Sub-Group Types the Wiki Suggests

Based on wiki analysis, the following sub-group types should be considered beyond Giuliano's 5:

1. **Awareness-Based Sub-Groups** (Schwartz framework)
   - Most Unaware → Problem Aware → Solution Aware → Product Aware → Most Aware
   - Each requires fundamentally different messaging, offers, and CTAs

2. **Format-Preference Sub-Groups**
   - Video-first, text-first, podcast, infographic consumers
   - 20%+ engagement boost when format preference is respected

3. **Purchase-Pattern Sub-Groups** (RFM)
   - Single-purchase browsers vs. repeat buyers vs. high-frequency VIPs
   - Each has different lifetime value trajectories

4. **Channel-Preference Sub-Groups**
   - Email-only, SMS-only, multi-channel
   - Respecting channel preference improves deliverability

5. **Interest/Topic Sub-Groups**
   - Based on click behavior and content consumption patterns
   - Prevents sending irrelevant content to wrong interest segments

6. **Engagement-Recency Sub-Groups**
   - Active (30d), Warm (60d), Cold (90d+), Dormant (180d+)
   - Foundational layer that should underpin all other segmentation

---

## Recommendations for Enriching Sub-Group Content Strategy

### 1. Layer Multiple Frameworks
Don't rely on a single segmentation model. The most effective approach combines:
- **RFM** for behavioral scoring
- **Engagement tiers** for send strategy
- **Awareness levels** for messaging tone
- **Zero-party data** for personalization depth

### 2. Respect Behavioral Change
> "Customer behaviour changes over time. People's goals and interests are not static — they have overlapping reasons they buy from you."

Sub-groups should be dynamic, not static. A customer who was "Problem Aware" last month may be "Solution Aware" this month.

### 3. Avoid Over-Segmentation
> "Segments with fewer than 50 subscribers should be merged or re-evaluated. Over-segmentation creates operational complexity without proportional gains."

Focus on segments large enough to generate meaningful data and revenue.

### 4. Use Awareness to Select Entry Points
The Modular Matrix provides 1,800+ script combinations. Each sub-group's awareness level determines which intro type, bridge, core, and CTA should be used.

### 5. Prioritize by RFM Persona
Campaign targeting should follow RFM priority: Champions first, Loyal second, Need Attention third, At Risk fourth. Lost customers should be suppressed entirely.

### 6. Collect Zero-Party Data Progressively
Use return visits to gather more information (SMS opt-in, birthday, preferences). This enriches sub-group definitions over time without requiring aggressive data collection upfront.

---

## Wiki Files Referenced

1. `/root/wiki/tenza-marketing/_hub-email-marketing/__enqueued__/SOP-segmentation-rfm-predictive.md` — RFM Analysis & Predictive Data
2. `/root/wiki/tenza-marketing/email-marketing/__enqueued__/8-segmentation_strategy_-_creating.md` — Adam Kitchen's Segmentation Strategy
3. `/root/wiki/tenza-marketing/email-marketing/__enqueued__/8-segmentation_strategy_.md` — Apple iOS MPP Segmentation
4. `/root/wiki/tenza-marketing/email-marketing/__enqueued__/written-by-andrew-langhorn.md` — Predictive Analytics (EDNO)
5. `/root/wiki/tenza-marketing/_hub-client-acquisition/__enqueued__/7-core-segments-framework.md` — 7 Core Segments Framework
6. `/root/wiki/tenza-marketing/_hub-client-acquisition/__enqueued__/09-newsletter-segmentation-strategy.md` — Newsletter Segmentation Strategy
7. `/root/wiki/tenza-marketing/_hub-operations/__enqueued__/tenza-_pop_ups--61-segmenting-by-visitor-type.md` — Visitor Type Segmentation
8. `/root/wiki/marketing-copy/copywriting/__enqueued__/great-leads--to-make-this-work-youll-need-finesse.md` — Awareness Levels (Schwartz)
9. `/root/wiki/marketing-copy/copywriting/__enqueued__/intro-category-format-bridge-type-core-path-cta-style-status.md` — Modular Matrix
10. `/root/wiki/tenza-marketing/ecom/__enqueued__/dtc-segmentation-strategy-template.md` — DTC Segmentation Template
