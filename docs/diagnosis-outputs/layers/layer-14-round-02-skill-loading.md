# Layer 14 Round 2: Frequency & Wording — Skill Loading

## Skills Loaded

| # | Skill Name | Source | Relevance |
|---|---|---|---|
| 1 | strategy-campaign-calendar | email-marketing/strategy-analytics | HIGH — Annual calendar, frequency tiers, campaign cadence |
| 2 | email-collection-list-growth | email-marketing/deliverability-technical | HIGH — List growth frequency, churn math, monthly ritual |
| 3 | strategy-customer-journey | email-marketing/strategy-analytics | HIGH — Lifecycle touchpoint frequency, VIP cadence |
| 4 | segmentation-list-health | email-marketing/strategy-analytics | HIGH — List health metrics, churn rate, engagement velocity |
| 5 | analytics-performance-benchmarks-reporting | email-marketing/strategy-analytics | MEDIUM — Performance benchmarks, flow vs campaign RPR |
| 6 | segmentation-strategy-framework | email-marketing/strategy-analytics | MEDIUM — Segment definitions, refresh cadence |
| 7 | campaign-flash-sale | email-marketing/campaigns | MEDIUM — Send timing guidance, subject line patterns |
| 8 | deliverability-audit-monitoring | email-marketing/deliverability-technical | LOW-MEDIUM — Deliverability benchmarks, complaint thresholds |
| 9 | strategy | strategy | LOW — General strategic frameworks, no email-specific frequency data |

**Total skills loaded: 9**
**Note:** The `email` and `email-marketing` umbrella skills do NOT exist as standalone skills. All email marketing knowledge is distributed across sub-skills under `email-marketing/` (campaigns, flows, strategy-analytics, deliverability-technical).

---

## 1. Frequency Frameworks

### 1.1 Campaign Frequency by Segment (from strategy-campaign-calendar)

| Segment | Definition | Max Emails/Week | Campaign Type Mix |
|---|---|---|---|
| VIPs | Top 10% by CLTV, 3+ orders, $500+ LTV | 3-5 | Exclusive drops, early access, VIP-only offers, brand storytelling |
| Engaged 30-60 days | Opened/clicked in last 30-60 days | 2-3 | Standard promotional + educational mix |
| Engaged 90+ days | Opened/clicked in last 90 days | 1-2 | Re-engagement focused with strong CTAs |
| New subscribers | Subscribed in last 30 days, no purchase yet | 2-3 | Welcome flow + educational content |
| Recent buyers | Purchased in last 30 days | 2-3 | Post-purchase flow + cross-sell/upsell |
| Lapsed | Last open/click 90-180 days ago | 1 max | Winback offers, "we miss you" messaging |
| Unengaged | No open/click in 180+ days | Sunset only | Final re-engagement → sunset flow → suppress |

**Key Frequency Rules:**
1. Never send to unengaged subscribers at standard volume — route through sunset flow first
2. VIPs get maximum frequency but every send must feel earned — never automate a standard blast to VIPs
3. Lapsed subscribers receive reduced frequency — 1 email per week max
4. Recent buyers skip promotional sends during post-purchase window (7-14 days)
5. New subscribers in welcome flow receive flow emails plus reduced campaign load — don't double-saturate

### 1.2 Quarterly Cadence Calendar (from strategy-campaign-calendar)

| Quarter | Months | Weekly Email Cadence | Focus |
|---|---|---|---|
| Q1 | January | 2-3/week | List recovery from holiday fatigue |
| Q1 | February | 3-4/week (Valentine's ramp) | Gift guides, bundles |
| Q1 | March | 3-4/week | Spring prep, inventory clearance |
| Q2 | April | 3-4/week | Spring newness, seasonal transitions |
| Q2 | May | 3-5/week (Mother's Day peak) | Gift guides |
| Q2 | June | 3-4/week | Mid-year audit, refresh flows |
| Q3 | July | 3-4/week | Refer-a-friend push, list growth |
| Q3 | August | 3-4/week | List cleaning, domain warming prep |
| Q3 | September | 3-4/week | BFCM planning, data gathering |
| Q4 | October | 4-5/week | Aggressive sunsetting, warm cold segments |
| Q4 | November BFCM | 1-2 emails/day | Maximum volume, real-time monitoring |
| Q4 | December Post-BFCM | 3-4/week | Ease back immediately after Cyber Monday |

### 1.3 Flow Email Frequency (from strategy-customer-journey)

| Flow | Number of Emails | Timing | Cadence |
|---|---|---|---|
| Welcome Flow | 4-8 emails | Over 7-14 days | 1 email every 1-2 days |
| Browse Abandonment | 2-3 emails | Over 3-5 days | 1 email per 1-2 days |
| Abandoned Checkout | 3 emails | Over 24-72 hours | Hours apart (escalating urgency) |
| Post-Purchase | 3-5 emails | Over 7-14 days | 1 email every 2-3 days |
| Review Request | 1-2 emails | 7-14 days after delivery | 1 email, possible follow-up |
| Cross-Sell/Upsell | 1 email | 10-14 days after delivery | Single send |
| Replenishment | 1-2 emails | Based on product consumption cycle | Timed to product lifecycle |
| Winback (engagement) | 3-4 emails | Over 2-3 weeks | 1 email per 5-7 days |
| Winback (purchase) | 3-4 emails | Over 2-3 weeks | 1 email per 5-7 days |
| Sunset | 2-3 emails | Over 2-4 weeks | 1 email per 7-10 days |

### 1.4 VIP Communication Cadence (from strategy-customer-journey)

| Send Type | Frequency | Personalization Level |
|---|---|---|
| Exclusive product drops | 1x/week | 1:1 (based on purchase history) |
| VIP-only offers | 1x/2 weeks | Segment-based (by category affinity) |
| Brand storytelling | 1x/month | Personalized intro referencing history |
| Birthday/anniversary | Date-based | 1:1 personalized |
| Surprise & delight | Ad-hoc | 1:1 |

---

## 2. Cadence Templates

### 2.1 Monthly Planning Ritual (from strategy-campaign-calendar)

Execute last week of each month (60-minute block):

1. **Review Last Month (15 min):** Pull total email revenue, send volume, avg open/click/unsub rates, list growth, list size. Compare MoM and YoY.
2. **Identify Top Performers (10 min):** Sort by revenue. Note top 3 campaigns — what made them work. Review flow performance (welcome conversion, cart recovery, post-purchase repeat rate, winback reactivation).
3. **Plan Next Month (25 min):** Add fixed dates (holidays, launches, sales). For each: teaser (3-5 days before), launch (day of), reminder (1-2 days before end), post-event recap. Fill remaining slots with educational/value content to maintain 3-4/week cadence.
4. **Align with Inventory (10 min):** Review stock levels. Push overstock as bundles. Schedule new arrivals. Avoid promoting out-of-stock items.

### 2.2 Monthly List Growth Ritual (from email-collection-list-growth)

Execute first week of every month:

1. Review pop-up conversion rates (target: 2.5% min, 5%+ target, 8.75%+ elite)
2. Review checkout opt-in rates (verify pre-selected checkbox still active)
3. Review total monthly new subscribers (net growth = new - unsubs - bounces)
4. Compare acquisition rate to churn rate (must exceed churn)
5. Set growth targets for next month
6. Plan A/B tests for pop-up optimization

### 2.3 Monthly List Health Ritual (from segmentation-list-health)

Execute on 1st of every month:

1. Calculate growth metrics (new subs, total list, growth rate)
2. Calculate churn metrics (unsubs, hard bounces, spam complaints, unengaged 180+)
3. Calculate net growth (new - unsubs - bounces - spam - suppressions)
4. Check engagement velocity (30-day open/click rate trend)
5. Calculate revenue per subscriber (target: >$0.50/month)
6. Run data quality checks (duplicates, invalid emails, incomplete profiles, stale data)
7. Review suppression lists
8. Generate summary and action items

### 2.4 Reporting Cadence (from analytics-performance-benchmarks-reporting)

| Report | Frequency | Content |
|---|---|---|
| Weekly Scorecard | Every Monday | Revenue (flows + campaigns), top flows, top campaigns, list health, KPI check, action items |
| Monthly Review | First week of month | MoM comparison, flow multiplier, A/B test results, segment performance, deliverability deep-dive |
| Quarterly Business Review | Every 3 months | QoQ revenue growth, flow multiplier trend, program maturity assessment, deliverability health, priorities |

---

## 3. Timing Best Practices

### 3.1 Best Send Days (from campaign-flash-sale)

| Day | Performance | Notes |
|---|---|---|
| Tuesday | High | Best day for B2C engagement |
| Wednesday | High | Second-best day; mid-week urgency |
| Monday | Moderate | Good for B2B; lower B2C engagement |
| Thursday | Moderate | Competing with many promotional emails |
| Friday | Low | Weekend distraction |
| Saturday | Lowest | Lowest open rates |
| Sunday | Moderate | Evening browsing recovery |

### 3.2 Best Send Windows (from campaign-flash-sale)

- **Morning (8-10 AM):** Most consistent open rates. Best for first email check.
- **Lunch (12-1 PM):** Mobile opens spike during lunch breaks. Good for B2C.
- **Evening (7-9 PM):** Higher conversion rates, slightly lower opens.

### 3.3 Flash Sale Timing (from campaign-flash-sale)

- **24-hour sales:** Send at 10 AM subscriber timezone
- **48-hour sales:** First email at 10 AM Day 1. Reminder at 6 PM Day 2 (last 4 hours)
- **Weekend sales:** Open Friday at 4-5 PM

### 3.4 Smart Send Time

Enable Klaviyo Smart Send Time when segment has 500+ profiles with tracked opens. Optimizes per-subscriber delivery windows.

---

## 4. Content Philosophy & Wording Frameworks

### 4.1 Education vs Promotion Balance (from strategy-campaign-calendar)

**Target: 50/50 split across calendar**

| Email Type | % of Sends | Description |
|---|---|---|
| Promotional | 50% | Discount offers, product launches, sales, bundles, clearance |
| Educational | 30% | How-to guides, product education, tips, industry insights |
| Engagement | 15% | Surveys, quizzes, polls, UGC showcases, social proof |
| Brand storytelling | 5% | Founder stories, brand mission, behind-the-scenes |

### 4.2 Content Quality Standards (from strategy-campaign-calendar)

1. Every email must provide value — "Would the recipient be glad they opened this?"
2. One topic per email — micro-topics beat information overload
3. Write like a human — no corporate jargon, conversational tone with personality
4. Respect the reader's time — get to the point, use scannable formatting
5. Always include a CTA — even educational emails need a next step

### 4.3 Subject Line Patterns (from campaign-flash-sale)

| Type | Subject Line | Preview Text | Best For |
|---|---|---|---|
| Urgency | "Flash Sale Starts NOW!" | "24 hours only — up to 40% off" | Brands that rarely discount |
| Curiosity | "We're doing something different" | "A flash sale you won't want to miss" | Engaged, loyal subscribers |
| Social Proof | "Join 5,000+ shoppers saving today" | "Flash sale ends tonight at midnight" | Broad segments needing trust |
| Benefit-Led | "Save 30% on everything" | "Your cart is waiting — with a discount" | Cart abandoners and past buyers |
| Exclusive | "Your VIP Flash Sale is here" | "Members get first access — 24h only" | VIP/loyalty segments |
| Scarcity | "12 hours left. Don't miss out." | "Flash sale ends at midnight." | Time-sensitive offers |

**Subject Line Testing:** For segments >10K subscribers, A/B test top 2-3 variants. Send 15% to each, run 1-4 hours, send winner to remaining 70%.

### 4.4 VIP Tone Guidelines (from strategy-customer-journey)

- Personalized subject lines referencing past purchases or tenure
- Warm, conversational tone (not corporate)
- Acknowledge loyalty status explicitly
- Language of exclusivity ("you're one of our most valued customers")
- No "we miss you" or generic promotional copy
- Feel like a personal note from a friend, not a marketing blast

---

## 5. List Growth Frequency Considerations

### 5.1 The Growth Math (from email-collection-list-growth)

- A brand gaining 2,000 subscribers/month with 10K list outperforms a brand with 20K list gaining 250/month
- Growth rate — not absolute list size — is the true indicator of channel health
- Target acquisition rate: double your churn rate as minimum
- 3.5x increase in pop-up conversion (2.5% → 8.75%) = 3.5x increase in welcome flow revenue

### 5.2 List Churn Management (from email-collection-list-growth)

- If churn is 5%/month on 10K list = lose 500/month
- To grow, acquisition must exceed 500/month
- Churn components: unsubscribes, hard bounces, soft bounces, inactivity

### 5.3 Offer Performance by Type (from email-collection-list-growth)

| Offer Type | Expected Conversion | Best Use |
|---|---|---|
| Signup (no offer) | ~1% | Brand loyalists, content-first brands |
| Coupon (discount) | ~5% | Immediate revenue, broadest application |
| Giveaway | ~10% | Rapid list growth, launch hype |

---

## 6. Performance Benchmarks for Frequency Decisions

### 6.1 Flow vs Campaign Performance (from analytics-performance-benchmarks-reporting)

- Flows generate 41% of total email revenue from 5.3% of sends (Klaviyo 2026)
- Flow click rate: 5.58% vs Campaign click rate: 1.69% (3.3x gap)
- Flow placed order rate: 13x higher than campaigns
- Top 10% flow programs generate $7.79/recipient; median flow RPR: $1.58; median campaign RPR: $0.06 (28x gap)
- 48% of flow-driven revenue comes from NEW buyers

### 6.2 Flow Multiplier Diagnostic (from analytics-performance-benchmarks-reporting)

| Flow Multiplier | What It Means |
|---|---|
| Under 5x | Flows severely underpowered |
| 5x-10x | Below median — clear opportunity |
| 10x-20x | Median range — reasonable program |
| 20x-30x | Above median — strong program |
| 30x+ | Top tier |

### 6.3 Revenue Attribution Benchmarks (from analytics-performance-benchmarks-reporting)

| Level | Email Revenue % |
|---|---|
| Broken/Neglected | <10% |
| Average | 15-20% |
| Good (2026) | 25-30% |
| Top Tier | 35-45% |

### 6.4 Campaign Performance Benchmarks (from analytics-performance-benchmarks-reporting)

| Metric | Poor | Average | Good | Excellent |
|---|---|---|---|---|
| Open Rate | <20% | 30-38% | 38-50% | >50% |
| Click Rate | <0.5% | 1.29% | 2-4% | >5% |
| RPR | <$0.03 | $0.06-$0.15 | $0.15-$0.50 | >$0.50 |
| Unsub Rate | >0.5% | 0.10-0.20% | <0.10% | <0.05% |

---

## 7. Segment Refresh Cadence (from segmentation-strategy-framework)

| Segment Type | Refresh Frequency | Reason |
|---|---|---|
| Engagement (30/60/90/180) | Daily (auto) | Engagement changes daily |
| Value (VIP, High AOV) | Daily (auto) | Purchase data updates continuously |
| Behavioral (Viewed, Cart) | Real-time (trigger-based) | Intent signals must be fresh |
| Demographic | Monthly | Rarely changes |
| Purchase History (Lapsed) | Daily (auto) | Purchase activity shifts daily |
| Unengaged (180+) | Daily (auto) | Must be current for suppression |

---

## 8. Retention vs Acquisition Email Allocation (from strategy-customer-journey)

| Email Category | % of Send Volume | % of Revenue | Primary Goal |
|---|---|---|---|
| Welcome Flow | 15-20% | 20-30% | First purchase (acquisition) |
| Post-Purchase | 10-15% | 15-25% | Repeat purchase (retention) |
| Abandoned Cart | 10-15% | 10-20% | Revenue recovery |
| Promotional Campaigns | 25-30% | 20-30% | Short-term revenue |
| Educational Campaigns | 15-20% | 5-10% | Engagement (retention) |
| Winback/Sunset | 5-10% | 5-10% | Reactivation (retention) |
| Referral/VIP | 5-10% | 5-10% | Advocacy/retention |

### Retention Investment Ratio by Maturity

| Program Maturity | Acquisition $$ | Retention $$ |
|---|---|---|
| Startup (0-12 mo) | 60% | 40% |
| Growth (1-3 yrs) | 40% | 60% |
| Mature (3+ yrs) | 20% | 80% |

---

## 9. Deliverability Constraints on Frequency

### 9.1 Key Thresholds (from deliverability-audit-monitoring)

- Spam complaint rate: <0.01% ideal, >0.03% = investigation, >0.30% = sending suspended
- Bounce rate: <1% target, >2% = pause sends and audit
- Unsubscribe rate: <0.5% per campaign
- Unengaged 180+ days: <20% of total list
- Gmail/Yahoo enforce 0.10% complaint threshold in real-time (2026)

### 9.2 Impact of Over-Sending

- Sending to unengaged subscribers → low engagement → ESPs infer email is not relevant
- Result: emails land in promotions tab → spam → blocked
- 100K list with 40% unengaged = 40,000 negative signals per send
- Solution: better list management, not better content

---

## 10. Missing Skills & Gaps

The following skills would add value but do not exist or were not found under this profile:

1. **No standalone `email` skill** — The umbrella "email" skill referenced in the task inputs does not exist. All email knowledge is in email-marketing sub-skills.
2. **No A/B testing framework skill** — The analytics-abtesting-iteration-protocol skill exists but was not loaded. It would provide testing cadence and iteration frameworks.
3. **No SMS frequency guidance** — SMS benchmarks exist in analytics-performance-benchmarks-reporting but no dedicated SMS cadence/frequency skill.
4. **No copywriting body copy frameworks loaded** — copywriting-body-copy-frameworks and copywriting-subject-line-engineering exist but were not loaded (wording-focused, could complement frequency).
5. **No flow-specific skills loaded** — Individual flow skills (flow-welcome, flow-abandoned-cart, flow-post-purchase, etc.) exist with per-flow frequency details but were not loaded in this round.
6. **No BFCM mega strategy loaded** — campaign-bfcm-holiday-mega exists with detailed Q4 frequency escalation but was not loaded.

---

## 11. Contradictions & Notes

### No Major Contradictions Found Between Skills

The skills are internally consistent on frequency guidance. Minor notes:

1. **Open rate reliability:** analytics-performance-benchmarks-reporting warns that Apple MPP inflates open rates 10-20%. The segmentation-strategy-framework uses "Opened OR Clicked" for engagement segments, which may include MPP-inflated opens. Recommendation: use clicks as primary engagement signal for frequency decisions.

2. **Frequency ceiling varies by brand:** The campaign calendar suggests 3-5/week for VIPs, but the customer journey suggests VIP emails should feel "1:1" and "curated." These aren't contradictory but require judgment — high frequency with high personalization.

3. **Welcome flow overlap risk:** strategy-customer-journey notes "New subscribers in welcome flow receive flow emails plus reduced campaign load" — the exact reduction isn't specified. Risk of double-saturating new subscribers during their highest-converting window.
