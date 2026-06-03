# Layer 19 Round 2: Migration Strategy — Skill Loading

> Skills loaded: 5 | Frameworks extracted: 5 | Cross-referenced with Layer 19 General Fallback migration

---

## Skill 1: Segmentation Strategy Framework

**Source:** `email-marketing/strategy-analytics/segmentation-strategy-framework/SKILL.md`

### Five-Layer Segmentation Model

The core framework defines five layers, each with explicit segment definitions and interaction rules:

**Layer 1 — Engagement (The Backbone)**
- Engaged 30 Days: opened OR clicked in last 30 days
- Engaged 60 Days: opened OR clicked in last 60 days
- Engaged 90 Days: opened OR clicked in last 90 days
- Engaged 180 Days: opened OR clicked in last 180 days
- Unengaged 180+ Days: 0 opens AND 0 clicks in last 180 days

Engagement uses OR logic (open OR click), not AND. Using AND would exclude legitimate readers who don't click.

**Layer 2 — Value**
- VIP (Top 10% by Revenue)
- High AOV ($150+ average, brand-adjusted)
- Frequent Buyers (3+ orders)
- One-Time Buyers (1+ order, 0 orders in last 90 days)
- At-Risk (opened in 90 days but 0 clicks — declining engagement)

**Layer 3 — Behavioral**
- Viewed Product/Category (7-day window, no purchase since)
- Added to Cart (24h window, no purchase since)
- Reached Checkout (24h window, no purchase since)
- Purchased Specific Product
- Browsed Collection (7-day window, no purchase in 7 days)

**Layer 4 — Demographic**
- Location (country, state, city)
- Gender (only if collected — never guess)
- Age Range (only if collected)

**Layer 5 — Purchase History**
- First-Time Buyers (first purchase within 30 days)
- Repeat Buyers (2+ orders)
- Lapsed Customers (no purchase in 90 days, brand-adjusted)
- Subscription Customers

### Segment Overlap Rules (Critical for Migration)

| Overlap | Treatment |
|---------|-----------|
| VIP + Frequent Buyer | Highest priority. Never aggressive discounts. |
| At-Risk + High CLV | VIP winback flow — NOT standard sunset. |
| Unengaged + One-Time Buyer | Sunset flow at standard timeline. No extended windows. |
| Frequent Buyer + Engaged 30 Days | Qualifies for broadcast campaigns. |

### Suppression Logic

Excluded from ALL campaigns and standard flows:
- Unsubscribed, hard bounced, spam complainers (Klaviyo-native)
- Unengaged 180+ Days segment (unless in sunset flow)
- Profiles tagged `is_bot = True` or `unengaged = True`

### Segment Size Health Targets

| Segment | Healthy | Warning | Critical |
|---------|---------|---------|----------|
| Engaged 30 Days | 20-35% | < 15% | < 10% |
| Engaged 90 Days | 40-55% | < 30% | < 20% |
| Unengaged 180+ Days | < 20% | 20-30% | > 30% |

### Migration-Relevant Framework

The overlap rules are the migration engine. A subscriber migrating from "General Fallback" into a defined segment means they've crossed a behavioral threshold. The five-layer model defines WHERE they can migrate TO. The overlap rules define what happens when they qualify for multiple segments simultaneously.

---

## Skill 2: Sunset Flow

**Source:** `email-marketing/flows/flow-sunset/SKILL.md`

### Sunset Flow Architecture

The sunset flow is list hygiene — not revenue. It has 2 emails and a suppression endpoint.

**Trigger:** Subscriber added to "Unengaged (Sunset Candidates)" segment
**Flow Filter:** Has not been in flow in last 180 days (prevents re-entry too quickly)

### Sunset Triggers and Timing

**Non-Engagement Window Selection:**
| Sending Frequency | Window |
|-------------------|--------|
| High volume (5+/week) | 60-90 days |
| Standard (2-4/week) | 90 days (default) |
| Low volume (1-2/week) | 120-180 days |

**Unengaged Segment Definition:**
- "Opened Email" = 0 times in last [X] days
- "Clicked Email" = 0 times in last [X] days
- "Placed Order" = 0 times in last [X] days
- Exclude: already suppressed or unsubscribed

### Flow Sequence

```
Trigger: Added to Unengaged Segment
  → Email 1: "We Miss You" (immediate)
    → Wait: 7 days
    → Conditional Split: Opened or clicked in last 7 days?
      → YES: End flow (re-engaged)
      → NO: Continue to Email 2
  → Email 2: "Final Farewell"
    → Suppression (native or tag-based)
```

### Email 1 — "We Miss You"
- Tone: Friendly, transparent, not promotional
- Subject lines: "Haven't heard from you lately", "Should we take a break?", "We miss you"
- CTAs: "I want to stay" (preference center) + "Unsubscribe" (equally prominent)
- NO aggressive offers — this is list hygiene, not conversion

### Email 2 — "Final Farewell"
- Tone: Direct but friendly
- Subject lines: "Last call — staying or going?", "We're cleaning up our list"
- Key message: "If you don't click, we'll unsubscribe you"
- CTA: "Stay on the List" button

### Suppression Rules

**When to suppress vs. sunset:**
| Scenario | Action |
|----------|--------|
| Unsubscribes | Suppress immediately (legal) |
| Hard bounces | Suppress immediately (invalid) |
| Spam complaints | Suppress immediately (reputation) |
| No engagement 90 days | Enter winback flow |
| No engagement 120-180 days | Enter sunset flow |
| Completes sunset without re-engaging | Suppress permanently |

### Migration-Relevant Framework

The sunset flow is the FINAL destination for any subscriber who cannot be migrated to an active segment. The decision tree is:
1. 90 days no engagement → winback attempt
2. 120-180 days no engagement → sunset flow (2 emails)
3. No re-engagement after sunset → suppress permanently

For General Fallback subscribers, the sunset flow defines the "exit door" — if migration strategies fail, sunset is the cleanup mechanism that protects deliverability.

---

## Skill 3: Winback Flow

**Source:** `email-marketing/flows/flow-winback/SKILL.md`

### Winback Flow Architecture

3-email sequence targeting past customers who haven't purchased within their typical buying cycle. 5x more cost-effective than acquisition.

**Trigger:** "Placed Order" event
**Initial Delay:** Based on buying cycle
- Non-replenishable: 60-120 days
- Replenishable: 45-60 days

**Flow Filter:** "Placed Order" = 0 times since starting flow (only non-repeaters enter)

### Flow Sequence

```
Trigger: Placed Order
  → Wait: 60-120 days (non-replenishable) or 45-60 days (replenishable)
  → Filter: Placed Order = 0 since starting flow
  → Email 1: "It's Been Awhile"
    → Wait: 10 days
    → Split: Purchased since Email 1?
      → YES: End flow
      → NO: Continue
  → Email 2: Discount Follow-Up
    → Wait: 1 day
    → Split: Purchased since Email 1?
      → YES: End flow
      → NO: Continue
  → Email 3: Text-Based Closer
```

### Email Strategy

**Email 1 — "It's Been Awhile"**
- Warm, personal acknowledgment
- Brand updates since last visit
- Product recommendations
- Discount code introduction (15% off WELCOMEBACK15)
- CTA: "Come See What's New"

**Email 2 — Discount Follow-Up**
- Discount emphasis with expiration
- Trending products featured
- Social proof (testimonials/reviews)
- CTA: "Shop Your Discount"

**Email 3 — Text-Based Closer**
- Plain text format (no heavy design)
- From: Founder's name or specific person
- Personal, direct tone
- Urgency: discount expiring
- CTA: Text link (not button) — "Claim Your Discount"

### Decision Points

| Decision | Check | Action |
|----------|-------|--------|
| Buying cycle timing | Replenishable vs. non-replenishable | 45-60 days vs. 60-120 days |
| Discount or gift | Margin available? | Discount code vs. free shipping/GWP |
| From name | Identifiable founder? | Founder name vs. "The [Brand] Team" |
| Discount expiration | Time-bound offer? | 3-5 days after Email 3 vs. "retiring soon" framing |

### Performance Targets

| Metric | Target |
|--------|--------|
| Email 1 Open Rate | > 25% |
| Email 2 Open Rate | > 20% |
| Email 3 Open Rate | > 15% |
| Conversion Rate (repeat purchase) | > 3% within 30 days |
| Unsubscribe Rate (all 3 emails) | < 0.5% |

### Migration-Relevant Framework

The winback flow is the FIRST migration attempt for lapsed customers. It operates BEFORE the sunset flow in the subscriber lifecycle. For General Fallback subscribers:
- Those who were previously customers → winback flow first
- Those who never purchased → skip winback, go to sunset if unengaged

The 3-email escalating structure (personal → discount → urgency) maps directly to migration strategy: gentle re-engagement first, stronger incentives second, final chance third.

---

## Skill 4: List Health & Data Quality

**Source:** `email-marketing/strategy-analytics/segmentation-list-health/SKILL.md`

### Core Health Metrics

**1. List Growth Rate**
```
Growth Rate = New Subscribers / Total List Size × 100
```
| Rate | Status |
|------|--------|
| > 5%/month | Excellent |
| 2-5%/month | Good |
| 1-2%/month | Fair |
| < 1%/month | Weak |
| Negative | Critical |

**2. List Churn Rate**
Components: Unsubscribes + Hard Bounces + Spam Complaints + Inactivity

Benchmarks per campaign:
- Unsubscribes: < 0.2% (warning > 0.5%)
- Hard bounces: < 0.5% (critical > 2%)
- Spam complaints: < 0.01% (critical > 0.03%)
- Inactivity (180+ days): < 15% of list (critical > 25%)

```
Monthly Churn Rate = (Unsubscribes + Hard Bounces) / Total List Size × 100
```

**3. Net Growth Formula**
```
Net Growth = New Subscribers - (Unsubscribes + Bounces + Spam + Suppressed)
Net Growth Rate = Net Growth / Starting List Size × 100
```
| Rate | Status |
|------|--------|
| > 3%/month | Excellent |
| 1-3%/month | Good |
| 0-1%/month | Fair |
| Negative | Critical |

**4. Engagement Velocity**
```
Velocity = (Current Period Rate - Previous Period Rate) / Previous Period Rate × 100
```

| Pattern | Meaning | Action |
|---------|---------|--------|
| Open up, click up | Healthy | Continue |
| Open up, click down | MPP inflation or subject mismatch | Audit subject lines |
| Open down, click up | More targeted sends | Good — reduce to unengaged |
| Both down | List fatigue | Reduce frequency, re-engage |
| All segments declining | Sender reputation issue | Deliverability audit |

**5. Revenue Per Subscriber**
```
Revenue Per Subscriber = Email Revenue (30 days) / Total List Size
```
| Rate | Status |
|------|--------|
| > $1.00/month | Excellent |
| $0.50-$1.00 | Good |
| $0.20-$0.50 | Fair |
| < $0.20 | Weak |

### Data Quality Checks

| Check | Benchmark | Fix |
|-------|-----------|-----|
| Duplicate emails | 0 duplicates | Merge profiles in Klaviyo |
| Invalid emails (hard bounces) | < 1% of list | Enable real-time verification |
| Incomplete profiles (missing name) | < 10% | Add required fields to signup forms |
| Stale data (12+ months, zero engagement) | < 5% | Re-engagement campaign then suppress |

### Suppression Management Decision Tree

| Scenario | Action |
|----------|--------|
| Profile unsubscribes | Suppress immediately |
| Profile hard bounces | Suppress immediately |
| Profile marks as spam | Suppress immediately |
| No engagement 90 days | Enter winback flow |
| No engagement 120-180 days | Enter sunset flow |
| Completes sunset without re-engaging | Suppress permanently |
| Bot behavior detected | Suppress immediately |

### Monthly Ritual (8 Steps)

1. Calculate growth metrics (15 min)
2. Calculate churn metrics (15 min)
3. Calculate net growth (5 min)
4. Check engagement velocity (10 min)
5. Calculate revenue per subscriber (5 min)
6. Run data quality checks (15 min)
7. Review suppression lists (5 min)
8. Generate summary and action items (10 min)

### Migration-Relevant Framework

Engagement velocity is the LEADING indicator for migration readiness. A subscriber whose engagement velocity is declining is a migration candidate — they're drifting from their current segment toward a lower-engagement tier. The data quality checks identify subscribers with incomplete profiles (missing first name, location) who may be in General Fallback BECAUSE of data gaps, not behavioral signals. Fixing data quality can unlock migration by enabling proper segmentation.

---

## Skill 5: RFM Analysis & Predictive Data

**Source:** `email-marketing/strategy-analytics/segmentation-rfm-predictive/SKILL.md`

### RFM Scoring Methodology

Three dimensions, each scored 1-5:
- **Recency (R):** How recently they purchased (quintile-based)
- **Frequency (F):** How often they purchase (quintile-based)
- **Monetary (M):** How much they spend (quintile-based)

125 possible combinations (5×5×5), grouped into 11 personas.

### 11 RFM Personas

| Persona | Pattern | % of Customers | Strategy |
|---------|---------|----------------|----------|
| Champions | R=5, F=5, M=5 | 2-5% | Reward. Early access, VIP perks, referrals. Don't over-market. |
| Loyal Customers | R=4-5, F=4-5, M=3-5 | 8-15% | Upsell, cross-sell. Ask for reviews and referrals. |
| Potential Loyalists | R=4-5, F=2-3, M=3-5 | 10-15% | Convert to regular buyers. Loyalty program. |
| New Customers | R=5, F=1, M=1-5 | 10-20% | Onboard and educate. Build relationship before second purchase. |
| Promising | R=3-4, F=1, M=1-5 | 10-15% | Nurture with educational content. Don't discount too early. |
| Need Attention | R=3, F=3, M=3 | 5-10% | Re-engage with limited-time offers. |
| About to Sleep | R=2-3, F=2-3, M=2-3 | 5-10% | Winback campaigns with small discounts. |
| At Risk | R=2, F=3-5, M=3-5 | 5-10% | High-value losing engagement. Personalized outreach. |
| Cannot Lose Them | R=1-2, F=5, M=5 | 1-3% | Highest priority winback. Every channel. Exclusive offers. |
| Hibernating | R=1-2, F=2-3, M=2-3 | 5-10% | Automated winback. One final offer before sunset. |
| Lost | R=1, F=1, M=1 | 10-20% | Suppress or sunset. Only re-engage if they opt in again. |

### Campaign Targeting Priority

1. Champions — highest response, lowest discount sensitivity
2. Loyal Customers — reliable responders, upsell candidates
3. Need Attention — moderate value, need strategic push
4. At Risk / Cannot Lose Them — urgent, high-value, time-sensitive
5. Potential Loyalists / Promising / New — building for future
6. About to Sleep / Hibernating — one-shot winback before sunset
7. Lost — excluded from all campaigns

### Klaviyo Predictive Analytics

**Predicted CLV:**
| CLV Range | Use Case |
|-----------|----------|
| Top 10% | VIP perks, early access, account management |
| Mid 50-80% | Upsell campaigns, loyalty enrollment |
| Bottom 50% | Automated flows only, no paid spend |
| New profiles | Nurture sequences, educational content |

**Churn Risk Score (1-5, 5 = highest risk):**
| Score | Action |
|-------|--------|
| 1-2 | Normal sends. Monitor. |
| 3 | Reduce frequency. Re-engagement content. |
| 4 | Winback sequence. Incentive. Personalize. |
| 5 | Immediate intervention. Strong offer. Multi-channel. |

**Next Purchase Date Prediction:**
| Prediction | Action |
|------------|--------|
| Within 7 days | Send product recommendation now |
| Within 30 days | Prepare campaign queue, show new arrivals |
| 30+ days | Hold — don't push |
| No predicted date | Trigger winback |

### High-Value Predictive Segments

**High CLV + Low Engagement = Winback Priority**
- Target: Top 30% CLV AND 0 engagement in 90 days
- Action: Personalized winback with strong offer, founder's name, exclusive discount

**High Churn Risk + Recent Purchase = Retention Push**
- Target: Churn risk 4+ AND purchased in last 30 days
- Action: Post-purchase onboarding, loyalty enrollment, cross-sell

**Low CLV + High Frequency = Surprising Potential**
- Target: Bottom 40% CLV AND 3+ orders
- Action: Upsell to higher-AOV products, bundle with premium version

### Zero-Party Data Collection

Channels: Quiz results, preference centers, surveys, post-purchase feedback.

| Data Type | Personalization Application |
|-----------|---------------------------|
| Quiz preference | Product recommendations matching their type |
| Frequency preference | Throttle send frequency |
| Category interest | Only send launches in preferred categories |
| Goal | Content tailored to specific goal |
| NPS score | Promoters: referral. Passives: nurture. Detractors: outreach. |
| Budget range | Products within stated budget tier |

### Migration-Relevant Framework

RFM is the PREDICTION ENGINE for migration readiness. A General Fallback subscriber who shows R=3-4, F=1, M=1-5 maps to the "Promising" persona — they need nurturing, not suppression. The churn risk score predicts WHO is about to migrate downward. The next purchase date prediction tells you WHEN to intervene.

Zero-party data is the UNLOCK for subscribers stuck in General Fallback due to missing behavioral signals. A quiz response or preference center submission provides the data needed to move them into a behavioral or demographic segment.

---

## Cross-Reference: Applying Frameworks to Layer 19 Migration

### The Migration Decision Tree for General Fallback Subscribers

```
General Fallback Subscriber
  │
  ├─ Has purchase history?
  │   ├─ YES → Check RFM persona
  │   │   ├─ Champions/Loyal → VIP treatment (never sunset)
  │   │   ├─ At Risk / Cannot Lose Them → Winback flow (priority)
  │   │   ├─ About to Sleep / Hibernating → Winback flow (standard)
  │   │   └─ Lost → Sunset flow → Suppress
  │   │
  │   └─ NO → Check engagement signals
  │       ├─ Opened/clicked in 30 days → Engaged 30 Days segment
  │       ├─ Opened/clicked in 90 days → Engaged 90 Days segment
  │       ├─ Viewed product/cart/checkout → Behavioral segment
  │       ├─ No engagement 90 days → Winback attempt
  │       ├─ No engagement 120-180 days → Sunset flow
  │       └─ No engagement 180+ days → Suppress
  │
  ├─ Has zero-party data (quiz, preferences)?
  │   ├─ YES → Migrate to behavioral/demographic segment
  │   └─ NO → Collect via preference center or quiz
  │
  └─ Data quality issue?
      ├─ Missing first name → "Complete your profile" campaign
      ├─ Invalid email → Suppress
      └─ Duplicate → Merge profiles
```

### Key Migration Principles

1. **Engagement is the primary migration signal.** An open or click moves a subscriber from General Fallback to an engaged segment automatically (Klaviyo refreshes segments daily).

2. **Value signals prevent wrong migration.** A VIP who stops engaging should enter the VIP winback flow, NOT the standard sunset. The overlap rules protect high-value subscribers from being treated as disposable.

3. **Behavioral signals are the fastest migration path.** A product view, cart add, or checkout reach immediately qualifies a subscriber for a behavioral segment — the highest-converting segment type.

4. **Zero-party data is the unlock for data-poor subscribers.** Subscribers stuck in General Fallback because of missing data can be migrated by collecting quiz results, preferences, or survey responses.

5. **List health metrics predict migration volume.** Decleng engagement velocity signals an incoming wave of migration candidates. Rising churn rate means more subscribers heading toward sunset.

6. **The sunset flow is the safety net.** If all migration attempts fail, the 2-email sunset flow + suppression protects deliverability for the rest of the list. It's the exit door, not a punishment.

---

## Summary of Extracted Frameworks

| Skill | Core Framework | Migration Application |
|-------|---------------|----------------------|
| Segmentation Strategy | 5-layer model (engagement, value, behavioral, demographic, purchase history) + overlap rules | Defines WHERE subscribers can migrate TO |
| Sunset Flow | 2-email sequence + suppression endpoint | Defines the EXIT path for unengaged subscribers |
| Winback Flow | 3-email escalating sequence (personal → discount → urgency) | Defines the RE-ENGAGEMENT path before sunset |
| List Health | 5 core metrics + data quality checks + monthly ritual | Measures migration VELOCITY and identifies data gaps |
| RFM Predictive | 11 personas + predictive CLV/churn/next-purchase + zero-party data | PREDICTS who is ready to migrate and WHERE |

---

*Generated: Layer 19 Round 2 — Skill Loading*
*Skills loaded: 5/5*
*Frameworks extracted: Segmentation (5-layer), Sunset (2-email + suppression), Winback (3-email escalating), List Health (5 metrics + 4 quality checks), RFM (11 personas + 3 predictive scores)*
