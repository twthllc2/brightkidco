# L8 R2: Segmentation Mechanics Skill Loading
## BrightKidCo — Segmentation Strategy, List Health & RFM Frameworks

---

## 1. LOADED SKILLS

| # | Skill | Source | Status |
|---|-------|--------|--------|
| 1 | `segmentation-strategy-framework` | email-marketing/strategy-analytics | Loaded ✅ |
| 2 | `segmentation-list-health` | email-marketing/strategy-analytics | Loaded ✅ |
| 3 | `segmentation-rfm-predictive` | email-marketing/strategy-analytics | Loaded ✅ |

---

## 2. SEGMENTATION STRATEGY FRAMEWORK — Key Frameworks

### 2.1 Five-Layer Segmentation Architecture

| Layer | Name | Purpose | BrightKidCo Application |
|-------|------|---------|-------------------------|
| Layer 1 | **Engagement-Based** | Controls who receives campaigns, who is excluded, who enters recovery/sunset | Foundation for all BKCo sends; must be built first |
| Layer 2 | **Value-Based** | Groups by revenue contribution; protects VIPs from discount fatigue | Identifies high-LTV parents, one-time buyers for winback |
| Layer 3 | **Behavioral** | Captures real-time intent signals (views, cart, checkout) | Highest-converting for product interest signals |
| Layer 4 | **Demographic** | Location-specific, language, seasonal targeting | USA (65%), UK (15%), AUS/NZ (15%), Canada (5%) |
| Layer 5 | **Purchase History** | Lifecycle stage determination (first-time, repeat, lapsed) | Critical for BKCo's phased customer journey |

### 2.2 Engagement Segment Definitions (Layer 1)

| Segment | Definition | BKCo Notes |
|---------|-----------|------------|
| Engaged 30 Days | Opened OR Clicked at least 1 time in last 30 days | Core active audience — highest relevance |
| Engaged 60 Days | Same, 60-day window | Expanded reach |
| Engaged 90 Days | Same, 90-day window | Standard campaign default |
| Engaged 180 Days | Same, 180-day window | Broad reach for seasonal/brand awareness |
| Unengaged 180+ Days | Opened 0 times AND Clicked 0 times in last 180 days | Excluded from all standard campaigns; enters sunset |

**Heuristic:** OR logic (not AND) between opens and clicks — captures both active readers and action-takers.

### 2.3 Engagement Segment Size Targets

| Segment | Healthy Range | Warning | Critical | BKCo Implication |
|---------|--------------|---------|----------|------------------|
| Engaged 30 Days | 20-35% of list | < 15% | < 10% | Post-popup signup, expect distortion — many Phase 2-3 subscribers may need re-engagement before showing as "engaged" |
| Engaged 90 Days | 40-55% | < 30% | < 20% | Better measure for BKCo's skeptical audience |
| Unengaged 180+ Days | < 20% | 20-30% | > 30% | **Critical for BKCo** — if Phase 4 (resigned) subscribers accumulate, this will swell |

### 2.4 Value-Based Segments (Layer 2)

| Segment | Definition | BKCo Application |
|---------|-----------|------------------|
| VIP (Top 10% Revenue) | Top 10% by total spent | Parents who bought bundles (5+5 FREE at $119.99) |
| High AOV (>$150) | Average order value > $150 | Bundle buyers; bestseller 3+3 FREE at $79.99 |
| Frequent Buyers (3+ Orders) | At least 3 orders | Repeat buyers of refills/sibling pairs |
| One-Time Buyers | At least 1 order, 0 in last 90 days | Biggest winback opportunity |
| At-Risk (Declining Engagement) | Opened in 90 days but 0 clicks | Previously engaged BKCo subscribers losing interest |

### 2.5 Behavioral Segments (Layer 3)

| Segment | Definition | BKCo Application |
|---------|-----------|------------------|
| Viewed Product/Category | Viewed in last 7 days, 0 purchases since | Parents browsing product pages |
| Added to Cart (No Purchase) | Cart add in last 1-3 days, no purchase | Cart abandonment — recovering stalled buyers |
| Reached Checkout | Checkout in last 1 day, no purchase | Highest intent — checkout abandonment |
| Purchased Specific Product | Purchased specific SKU ever | Cross-sell for sibling pairs, refills |
| Browsed Collection | Viewed collection in last 7 days | Category-level interest |

### 2.6 Demographic Segments (Layer 4)

| Segment | BKCo Data | Notes |
|---------|-----------|-------|
| Country | USA (65%), UK (15%), AUS/NZ (15%), Canada (5%) | All groups >5% threshold — all should have segments |
| Income | Upper-mid 30%, Middle 45%, Lower 25% | Medicaid sensitivity for ~25% audience |
| Child Level | Level 1 (35%), Level 2 (40%), Level 3 (25%) | **Key BKCo-specific segment** — drives avatar tonality |
| Emotional Phase | Phase 1 (rare), Phase 2-3 (majority), Phase 4 | **Key BKCo-specific segment** — drives mail tonality |

**Critical BKCo Addition:** The standard 4-layer demographic model does NOT include autism level or emotional phase. BrightKidCo MUST create custom demographic segments for Level 1/2/3/GF and Phase 1-4 to drive tonality calibration.

### 2.7 Purchase History Segments (Layer 5)

| Segment | Definition | BKCo Application |
|---------|-----------|------------------|
| First-Time Buyers | First purchase within last 30 days | Post-purchase onboarding, second-purchase conversion |
| Repeat Buyers | 2+ orders ever | Loyalty reinforcement, referral invites |
| Lapsed Customers | At least 1 order, 0 in last 90 days | Winback campaigns |
| Subscription Customers | Active subscription | Refill/replenishment customers |

### 2.8 Segment Overlap Rules

| Overlap | BKCo Rule |
|---------|-----------|
| VIP + Frequent Buyer = **Highest Priority** | Bundle buyers who keep coming back — treat with exclusive access, minimum discount frequency |
| At-Risk + High CLV = **Winback Priority** | Former bundle buyers who stopped engaging — VIP winback flow |
| Unengaged + One-Time Buyer = **Suppression Candidate** | One-time buyers gone silent — standard sunset |
| Frequent Buyer + Engaged 30 Days = **Broadcast Qualifier** | Only Engaged 30+ get broadcast campaigns |

### 2.9 Suppression Logic (Applied to All Campaigns)

- Unsubscribed profiles
- Hard bounced profiles
- Spam complainers
- Unengaged 180+ Days (unless in sunset flow)
- Profiles tagged `is_bot = True`
- Profiles tagged `unengaged = True`

### 2.10 Segment Refresh Cadence

| Segment Type | Refresh | Reason for BKCo |
|-------------|---------|-----------------|
| Engagement | Daily | Engagement changes daily |
| Value | Daily | Purchase data updates continuously |
| Behavioral | Real-time | Intent signals must be fresh |
| Demographic | Monthly | Level/Phase assignment is stable |
| Purchase History | Daily | Purchase activity shifts segments |
| Unengaged 180+ Days | Daily | Must be accurate for suppression |

### 2.11 Phase Applicability

| Framework Component | Phase 1 (Immediate) | Phase 2+ (Future) |
|--------------------|--------------------|--------------------|
| Engagement segments (30/60/90/180) | ✅ Build immediately | — |
| Value segments (VIP/Frequent/One-Time) | ✅ Build immediately | — |
| Behavioral segments | ⚠️ Cart Abandon only | ✅ Full behavioral suite |
| Demographic segments (Country) | ✅ Build immediately | ✅ Add Level + Phase segments |
| Purchase history segments | ✅ Build immediately | — |
| Segment overlap rules | — | ✅ Phase 2 optimization |
| Suppression logic | ✅ Build immediately | — |
| Automated refresh cadence | ✅ Configure immediately | — |

---

## 3. LIST HEALTH MONITORING — Key Frameworks

### 3.1 List Growth Rate

**Formula:** `(New Subscribers in Period) / (Total List Size at Start of Period) × 100`

| Rate | Status | BKCo Benchmarks |
|------|--------|-----------------|
| > 5% per month | Excellent | Post-popup launch — expect initial spike |
| 2-5% per month | Good | Standard organic growth |
| 1-2% per month | Fair | Needs new acquisition channels |
| 0-1% per month | Weak | Near-stagnant |
| Negative | Critical | List shrinking |

### 3.2 List Churn Rate Components

| Component | Benchmark | Warning | Critical |
|-----------|-----------|---------|----------|
| Unsubscribe Rate | < 0.2% per campaign | > 0.5% | — |
| Hard Bounce Rate | < 0.5% per campaign | > 1% | > 2% |
| Spam Complaint Rate | < 0.01% per campaign | 0.01-0.03% | > 0.03% |
| Inactivity (Unengaged 180+) | < 15% of list | 15-25% | > 25% |

**BKCo Note:** Spam complaint rate is especially critical — BKCo's audience is skeptical of marketing language. Authentic Lena voice directly protects this metric.

### 3.3 Net Growth Formula

```
Net Growth = New Subscribers - (Unsubscribes + Hard Bounces + Spam Complaints + Suppressed Profiles)
Net Growth Rate = Net Growth / Starting List Size × 100
```

| Net Growth Rate | Status |
|----------------|--------|
| > 3% per month | Excellent |
| 1-3% per month | Good |
| 0-1% per month | Fair |
| Negative | Critical |

### 3.4 Engagement Velocity

**Method:** Rolling 30-day comparison of open rate and click rate.

| Pattern | Meaning | BKCo Action |
|---------|---------|-------------|
| Open rate ↑, Click rate ↑ | Healthy list | Continue current strategy |
| Open rate ↑, Click rate ↓ | Apple MPP inflation or subject/content mismatch | Audit subject lines; check MPP |
| Open rate ↓, Click rate ↑ | More targeted sends hitting right audience | Good — reduce sends to unengaged |
| Both rates ↓ | List fatigue or poor segmentation | Reduce frequency, verify segments |
| All segments declining simultaneously | Sender reputation issue | Full deliverability audit |

### 3.5 Revenue Per Subscriber

**Formula:** `Total Email-Attributed Revenue (30 days) / Total List Size`

| Monthly Rev/Sub | Status | BKCo Context |
|----------------|--------|--------------|
| > $1.00 | Excellent | Premium product, strong conversion |
| $0.50 - $1.00 | Good | Healthy program |
| $0.20 - $0.50 | Fair | Room for optimization |
| < $0.20 | Weak | Review segmentation, content, deliverability |

**BKCo Product Economics:** $34.99/pair, $79.99 (3+3 FREE bestseller), $119.99 (5+5 FREE). At $79.99 AOV, a 1.5% conversion rate on a 100K list would generate ~$120K per campaign. Healthy Rev/Sub would be achievable at moderate conversion rates.

### 3.6 Data Quality Checks

| Check | Benchmark | BKCo Priority |
|-------|-----------|---------------|
| Duplicate Emails | 0 duplicates in active profiles | ⚠️ Medium — verify pop-up doesn't create duplicates |
| Invalid Emails (Hard Bounces) | < 1% of total list in hard bounce suppression | ✅ High — enable verification at signup |
| Incomplete Profiles (Missing Name) | < 10% missing first name | ✅ High — name is critical for Lena voice personalization |
| Stale Data (12+ months, no engagement) | < 5% of list | ⚠️ Medium — less relevant initially for new BKCo list |

### 3.7 Suppression vs Sunset Decision Matrix

| Scenario | Action | BKCo Application |
|----------|--------|------------------|
| Profile unsubscribes | **Suppress immediately** | Legal requirement |
| Profile hard bounces | **Suppress immediately** | Invalid address |
| Profile marks as spam | **Suppress immediately** | Reputation risk |
| Not engaged in 90 days | **Enter winback flow** | Recovery window open |
| Not engaged in 120-180 days | **Enter sunset flow** | Final recovery attempt |
| Completes sunset without re-engaging | **Suppress permanently** | List cleanup |
| Bot behavior detected | **Suppress immediately** | Not a real person |

### 3.8 Monthly Health Ritual

| Step | Task | Time | BKCo Automation |
|------|------|------|-----------------|
| 1 | Calculate growth metrics | 15 min | Manual monthly |
| 2 | Calculate churn metrics | 15 min | Manual monthly |
| 3 | Calculate net growth | 5 min | Manual monthly |
| 4 | Check engagement velocity | 10 min | Manual monthly |
| 5 | Calculate revenue per subscriber | 5 min | Manual monthly |
| 6 | Run data quality checks | 15 min | Manual monthly |
| 7 | Review suppression lists | 5 min | Quick check |
| 8 | Generate summary and action items | 10 min | Document results |

### 3.9 Phase Applicability

| List Health Component | Phase 1 (Immediate) | Phase 2+ (Future) |
|----------------------|--------------------|--------------------|
| Growth rate tracking | ✅ Implement | — |
| Churn rate tracking | ✅ Implement | — |
| Net growth formula | ✅ Implement | — |
| Engagement velocity | ✅ Implement | — |
| Revenue per subscriber | — | ✅ Add when >3 months data |
| Data quality checks | ✅ Basic (name/bounce checks) | ✅ Full suite |
| Suppression management | ✅ Build immediately | — |
| Monthly health ritual | — | ✅ Add at month 2 |
| Weekly dashboard | — | ✅ Phase 2 |
| Quarterly dashboard with RFM | — | ✅ Phase 2 |

---

## 4. RFM PREDICTIVE MODELING — Key Frameworks

### 4.1 RFM Scoring Methodology

**Dimensions:**
- **Recency (R):** How recently did they purchase? 1 (longest ago) to 5 (most recent)
- **Frequency (F):** How often do they purchase? 1 (fewest orders) to 5 (most orders)
- **Monetary (M):** How much do they spend? 1 (lowest spend) to 5 (highest spend)

**Method:** Export customer data → Sort each dimension into quintiles → Combine into 3-digit code (e.g., 5-4-3).

### 4.2 11 RFM Personas

| Persona | RFM Pattern | % of Customers | BKCo Strategy |
|---------|-------------|----------------|---------------|
| **Champions** | R=5, F=5, M=5 | 2-5% | Bundle buyers who reorder. Reward with early access, VIP perks. Minimal discounting. |
| **Loyal Customers** | R=4-5, F=4-5, M=3-5 | 8-15% | Repeat buyers. Upsell bigger bundles, cross-sell refills. Ask for reviews. |
| **Potential Loyalists** | R=4-5, F=2-3, M=3-5 | 10-15% | 1-2 order customers showing potential. Convert to regular buyers. |
| **New Customers** | R=5, F=1, M=1-5 | 10-20% | First-time buyers. Onboard, educate, build relationship before second purchase push. |
| **Promising** | R=3-4, F=1, M=1-5 | 10-15% | Bought once, moderate recency. Nurture, create brand affinity. Don't discount too early. |
| **Need Attention** | R=3, F=3, M=3 | 5-10% | Mid-value, mid-recency. Re-engage with limited-time offers. |
| **About to Sleep** | R=2-3, F=2-3, M=2-3 | 5-10% | Declining engagement. Small discounts, reminder campaigns. |
| **At Risk** | R=2, F=3-5, M=3-5 | 5-10% | **High-value parents losing engagement.** Personalized winback. |
| **Cannot Lose Them** | R=1-2, F=5, M=5 | 1-3% | **Highest priority.** Former bundle whales. Multi-channel outreach. |
| **Hibernating** | R=1-2, F=2-3, M=2-3 | 5-10% | Automated winback series. One final offer before sunset. |
| **Lost** | R=1, F=1, M=1 | 10-20% | Suppress or sunset. Do not send campaigns. |

### 4.3 Persona Priority for Campaign Targeting

| Priority | Personas | BKCo Reasoning |
|----------|----------|---------------|
| 1 | Champions | Highest response, lowest discount sensitivity |
| 2 | Loyal Customers | Reliable responders, good upsell candidates |
| 3 | Need Attention | Moderate value, need strategic push |
| 4 | At Risk / Cannot Lose Them | Urgent, high-value, time-sensitive |
| 5 | Potential Loyalists / Promising / New Customers | Building for future |
| 6 | About to Sleep / Hibernating | One-shot winback before sunset |
| 7 | Lost | Excluded from all campaigns |

### 4.4 Klaviyo Predictive Analytics

| Metric | What It Measures | BKCo Application |
|--------|-----------------|------------------|
| **Predicted CLV** | Lifetime revenue estimate based on purchase + engagement data | Top 10% CLV → VIP treatment; Bottom 50% → automated flows only |
| **Churn Risk Score** | 1-5 scale (5 = highest risk) of declining engagement | Score 4+ → immediate winback; Score 5 → strong offer, multi-channel |
| **Next Purchase Date** | Predicted timing of next purchase | Within 7 days → send recommendation; 30+ days → hold; no prediction → winback |

**Prerequisite:** Klaviyo requires minimum 500 customers with 12+ months of data for predictive models. BKCo may need rule-based segmentation initially.

### 4.5 High-Value Segment Combinations

| Combination | Definition | BKCo Campaign |
|-------------|-----------|---------------|
| **High CLV + Low Engagement** | Top 30% Predicted CLV, 0 opens/clicks in 90 days | VIP winback with strong offer |
| **High Churn Risk + Recent Purchase** | Churn Risk 4+, purchased in last 30 days | Heavy onboarding, education, loyalty enrollment |
| **Low CLV + High Frequency** | Bottom 40% CLV, 3+ orders | Upsell to higher-AOV bundles |

### 4.6 Zero-Party Data Collection

| Collection Channel | BKCo Application | Phase |
|-------------------|-----------------|-------|
| **Product Quiz** | "Which BrightKidCo product fits your child?" — capture child level, age, sensory profile | Phase 2 |
| **Preference Center** | Email frequency (daily/weekly/monthly), product interest (Level 1/2/3 content) | Phase 2 |
| **Post-Purchase Survey** | "What brought you to BrightKidCo?" — store as custom property | Phase 2+ |
| **NPS / Feedback** | Satisfaction score → promoters get referral ask, detractors get outreach | Phase 2+ |

### 4.7 Phase Applicability

| RFM Component | Phase 1 (Immediate) | Phase 2+ (Future) |
|--------------|--------------------|--------------------|
| Customer data export for RFM | — | ✅ Phase 2 (after minimum 90-180 days data) |
| RFM quintile scoring | — | ✅ Phase 2 |
| 11-persona mapping | — | ✅ Phase 2 |
| Persona priority targeting | — | ✅ Phase 2 |
| Predicted CLV segments | — | ✅ Phase 2 (requires 500+ customers, 12mo data) |
| Churn Risk segments | — | ✅ Phase 2 |
| Next Purchase Date segments | — | ✅ Phase 2 |
| High CLV + Low Engagement winback | — | ✅ Phase 2 |
| Zero-party data collection | — | ✅ Quiz design in Phase 2 |
| Preference center | — | ✅ Phase 2+ |

---

## 5. CROSS-SKILL INTEGRATION NOTES

### 5.1 Dependency Chain

```
segmentation-strategy-framework
  └── Foundational segments (engagement, value)
      └── segmentation-list-health
          └── Measures segment health, churn, growth
              └── segmentation-rfm-predictive
                  └── Deepens value with RFM personas + predictive analytics
```

### 5.2 Shared Metrics Across Skills

| Metric | Strategy Framework | List Health | RFM Predictive |
|--------|-------------------|-------------|----------------|
| Engaged 30/60/90/180 targets | ✅ Segment size targets | ✅ Engagement velocity tracking | ✅ Churn Risk uses engagement data |
| VIP / High-Value definitions | ✅ Value segments | ✅ Revenue per subscriber | ✅ RFM Champions + Loyal personas |
| Unengaged tracking | ✅ Suppression logic | ✅ Inactivity churn rate | ✅ Hibernating / Lost personas |
| Purchase patterns | ✅ Purchase history segments | ✅ Net growth calculation | ✅ RFM Frequency + Monetary scores |
| List size benchmarks | ✅ Segment % of list | ✅ Growth rate, net growth | — |

### 5.3 BrightKidCo-Specific Custom Segments Needed

These are NOT in the standard frameworks — unique to BKCo:

1. **Child Autism Level Segment** (Level 1 / Level 2 / Level 3 / General Fallback)
   - Drives avatar tonality calibration (L1: 70% hope, L2: 40%, L3: 20%, GF: 50/50)
   - Captured via pop-up signup self-selection
   
2. **Emotional Phase Segment** (Phase 1 / Phase 2 / Phase 3 / Phase 4)
   - Drives mail tonality and offer framing
   - Inferred from engagement behavior + time since signup
   - Phase 1: gentle education; Phase 2: validation; Phase 3: science-first; Phase 4: respectful

3. **Lena-Only vs Founder-Story Segment**
   - Regular mails use Lena voice (peer-to-peer, mom of 2 autistic sons)
   - Mary S. (founder) only appears in dedicated Founder Story mail (Phase 2)

4. **Bundle Size Segment**
   - Single pair buyers vs 3+3 FREE vs 5+5 FREE buyers
   - Different upsell/cross-sell paths per bundle type

5. **60-Day Money Back Window Trackers**
   - Time since purchase < 60 days vs > 60 days
   - Drives post-purchase content (guarantee window messaging)

---

## 6. PHASE APPLICABILITY SUMMARY

| Skill Area | Phase 1 (Immediate — Weeks 1-4) | Phase 2+ (Future — Months 2-6) |
|------------|----------------------------------|--------------------------------|
| **Strategy Framework** | Engagement segments (5 windows), basic value segments (VIP/Frequent/One-Time), country demographics, purchase history, suppression logic, cart abandon behavioral | Full behavioral suite, Level + Phase custom segments, overlap rules, full refresh cadence |
| **List Health** | Growth rate, churn rate, net growth, basic data quality (name, bounces), suppression management | Revenue per subscriber, full data quality suite, monthly health ritual, weekly dashboard, engagement velocity trends |
| **RFM Predictive** | Not yet — minimum 90-180 days customer data needed | RFM scoring, 11-persona mapping, predicted CLV, churn risk segments, zero-party data collection, persona-priority targeting |

---

## 7. VERIFICATION CHECKLIST

- [x] Skill 1 loaded: segmentation-strategy-framework
- [x] Skill 2 loaded: segmentation-list-health
- [x] Skill 3 loaded: segmentation-rfm-predictive
- [x] Frameworks extracted with definitions, benchmarks, and Klaviyo builder guidance
- [x] Each framework mapped to BrightKidCo context
- [x] Phase applicability (Phase 1 vs Phase 2+) documented per component
- [x] Cross-skill integration noted
- [x] BrightKidCo-specific custom segments identified
- [x] File size > 2KB ✅
