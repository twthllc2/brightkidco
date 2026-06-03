## Group 5: Strategy & Analytics (13 skills)

Source: `/root/.hermes/skills/email-marketing/strategy-analytics/`

Extracted: 13 skills covering A/B testing, analytics, diagnostics, copywriting frameworks, segmentation, campaign calendar, client reviews, and customer journey.

---

## 1. analytics-abtesting-iteration-protocol

**Domain:** A/B Testing & Iteration Protocol

### A/B Testing & Iteration Protocol — Email Marketing

**Purpose:** Apply the scientific method to every email stimulus — campaigns, flows, subject lines, body copy, send times, segments, and flow variants. Stop changing things emotionally. Start changing things with data.

**Scope:** Email marketing service delivery only. Campaign emails, automated flows, subject lines, preview text, body copy, send-time optimization, segmentation variants, and flow architecture variants.

---

## 1.0 THE PRINCIPLE

You are not running an email program. You are running a series of controlled experiments with your subscriber list as the test population.

Every email you send has variables. Variables produce traits — open rates, click rates, conversion rates, revenue per recipient. Traits determine fitness (whether the email achieves its objective). Your job is to find the variable combinations that produce fitness, then scale them.

This is evolution. The emails that survive are the ones that get results in your specific audience. Industry averages are a starting point, not a target. Your audience's behavior is the only truth.

---

## 2.0 THE GOLDEN RULE

**If your primary KPI is in range, do NOT change anything.**

The Polar Metric is the one metric that matters most for the specific email or flow being tested:

| Email Type | Primary KPI (Polar) | If in KPI | If Below KPI |
|---|---|---|---|
| Campaign — subject line test | Open rate (30–50%) | Do not touch the subject line | Test subject line variables |
| Campaign — body copy test | Click rate (2%+) | Do not touch the body | Test body copy variables |
| Campaign — send-time test | Open rate + Click rate | Keep the send window | Test adjacent window |
| Flow — welcome series | RPR ($2.50–$4.00) | Keep the flow | Test welcome offer timing |
| Flow — abandoned checkout | Recovery rate (8–12%) | Keep the sequence | Test discount depth or timing |
| Flow — post-purchase | LTV / repeat order rate | Keep the flow | Test cross-sell placement |

**Non-linear warning:** Changing one variable can destroy metrics elsewhere in the chain that seem unrelated. Systems are not linear. A better subject line can increase opens from the wrong subscriber segment, lowering conversion rate. A stronger discount in the abandoned cart email might train subscribers to wait for discounts before purchasing. Understand system dynamics before touching variables.

---

## 3.0 THE KPI TABLE — EMAIL MARKETING EDITION

Every metric has a KPI target. If the metric is below target, the table tells you what to test and where the root cause most likely lives.

| Metric | KPI Target | If Below KPI | Stimulus to Test |
|---|---|---|---|
| Email delivery rate | 98%+ | Deliverability problem, not copy | DNS config, domain warmup, list hygiene, sender reputation |
| Inbox placement rate | 90%+ | Authentication or reputation issue | SPF/DKIM/DMARC, blacklist check, send to engaged segments only |
| Campaign open rate | 30–50% | Subject line failing or audience cold | Subject line variables (curiosity, personalization, emoji, length) |
| Campaign click rate | 1.29%+ (avg); 2%+ (good) | Body copy or CTA not compelling | Body copy framing, offer strength, CTA clarity, preview text |
| Campaign conversion rate | 0.05%+ (avg); 0.10%+ (good) | Offer, landing page, or audience mismatch | Offer type, discount depth, landing page, audience segment |
| Campaign RPR | $0.06+ (avg); $0.15+ (good) | Multiple causes — work backward | Click rate → Conversion rate → AOV funnel analysis |
| Campaign unsubscribe rate | <0.20% per send | Frequency too high or content wrong | Reduce send frequency, shift content mix, segment better |
| Flow open rate (Email 1) | 40–55% (welcome); 35–45% (cart) | Subject line or sender name trust | Subject line variables, from name, preview text |
| Flow click rate | 3–5%+ (varies by flow type) | Body copy or offer not triggering action | Body copy, CTA placement, offer framing, AI product recs |
| Flow RPR | $1.58 industry median | Flow architecture or offer failing | Number of emails in flow, offer depth, segmentation, AI recs |
| Flow multiplier | 16x industry median | Flows underpowered vs campaigns | Fill missing flows, increase email count per flow, segment |
| Abandoned checkout recovery | 8–12% total series recovery | Discount timing, email count, CTA | Discount in Email 1 vs Email 3, number of reminders, CTA design |
| Spam complaint rate | <0.10% (Gmail threshold) | List quality or sending to cold segments | Engage segments, re-engagement flow, sunset unengaged |
| Bounce rate | <2% | List hygiene | Verify emails, remove invalid, use double opt-in |

---

## 4.0 HOW TO RUN A TEST

### 4.1 Step 1 — Define the Stimulus and Its Key Variables

Ask: "What are the 2–4 key variables of this email that move the needle the most?"

**For campaign subject lines:**
- Variable 1: Curiosity gap vs. direct benefit
- Variable 2: Emoji presence (yes/no, which emoji)
- Variable 3: Length (short 4 words vs. long 8+ words)
- Variable 4: Personalization (name in subject line vs. not)

Source: Campaign Strategy Master Section 6.0 — these are the A/B tests to run constantly.

**For campaign body copy:**
- Variable 1: The opening hook (first sentence — question vs. statement vs. story)
- Variable 2: The offer framing (discount vs. free shipping vs. value-add)
- Variable 3: Social proof placement (top vs. middle vs. bottom)
- Variable 4: The CTA (button text, color, placement above vs. below fold)

**For campaign send time:**
- Variable 1: Day of week (Tuesday vs. Thursday vs. Saturday)
- Variable 2: Time of day (morning 8am vs. afternoon 2pm vs. evening 7pm)
- Variable 3: Timezone personalization (send in subscriber timezone vs. fixed)

**For flow variant testing:**
- Variable 1: Number of emails in the sequence (3-email vs. 5-email welcome)
- Variable 2: Offer delivery timing (discount in Email 1 vs. Email 3)
- Variable 3: Segment targeting (all subscribers vs. non-purchasers only)
- Variable 4: AI personalization (standard content vs. AI product recommendations)

**For abandoned checkout flow:**
- Variable 1: Discount present in Email 1 vs. only in Email 3
- Variable 2: Discount depth (10% vs. 15% vs. 20%)
- Variable 3: Urgency framing (static vs. timer-based)
- Variable 4: Email count (3-email series vs. 4-email series)

---

### 4.2 Step 2 — Define the Metrics and KPIs

Before you run the test, write down:
- Primary metric (the metric directly tied to this stimulus)
- Secondary metric (the downstream metric the primary contributes to)
- KPI for both

**Example: Testing campaign subject lines (A/B test in Klaviyo):**
- Primary: Open rate (target 35%+)
- Secondary: Click rate (target 2%+) — do not optimize primary at the expense of secondary
- Tertiary (longer-term): Unsubscribe rate (should not increase above 0.20%)
- Decision rule: If open rate wins by 10%+ relative AND click rate does not drop more than 10%, declare a winner. Otherwise, keep testing.

**Example: Testing abandoned cart discount depth:**
- Primary: Recovery rate (target 8–12%)
- Secondary: Revenue per recovered cart (target no discount erosion — if 20% discount recovers more carts at lower AOV, net revenue may be lower than 10% discount)
- Tertiary: Long-term repeat purchase rate (discount-trained buyers may not return at full price)

---

### 4.3 Step 3 — Set the Sample Size

Do NOT judge results until you have reached the minimum sample size.

| Stimulus | Minimum Sample Per Variant | Notes |
|---|---|---|
| Campaign subject line (A/B test) | 500 sends per variant | Use Klaviyo's built-in A/B testing with winner auto-send |
| Campaign body copy | 1,000 sends per variant | Higher sample needed because click rates are lower than open rates |
| Campaign send time | 1,000 sends per time slot per variant | Do not test more than 2 time slots simultaneously |
| Campaign segment targeting | 1,000 recipients per segment | Ensure segments are mutually exclusive |
| Flow — welcome email variant | 500 new subscribers per variant | Slower to collect data — be patient (2–4 weeks per flow branch) |
| Flow — abandoned cart variant | 500 abandoners per variant | Seasonality affects this sample size |
| Flow — discount depth | 500 abandoners per discount level | Test max 2 discount levels simultaneously |
| Full flow architecture redesign | 1,000 new entrants per variant | Major structural changes require more data |

**If you change anything before hitting sample size, your data is worthless.** Testing small batches and declaring winners early is the single most common mistake in email marketing. It produces false positives, leads to the wrong conclusion, and wastes months of revenue opportunity.

---

### 4.4 Step 4 — Establish Constants

During the test, identify everything that could influence results that is NOT the variable being tested. These are your constants — do NOT change them during the test.

**Constants in a campaign subject line test:**
- Send day and time (same for all variants)
- Audience segment (same)
- Body copy and CTA (identical)
- Preview text (identical)
- From name and email (identical)
- Subject line is the ONLY variable

**Constants in a campaign body copy test:**
- Subject line (identical)
- Send time (identical)
- Audience (identical)
- CTA destination (identical URL)
- Body copy framing is the ONLY variable

**Constants in a flow variant test:**
- Trigger event (same — e.g., cart abandoned for same duration)
- Recipient list (same segment)
- Time delay between emails (same)
- From name and email (same)
- Only the variable being tested changes

**The most common mistake:** changing the body copy AND the subject line at the same time. Now you don't know which change caused the result. Or testing a new send time with a new audience segment at the same time.

**Rule: One variable at a time. One test at a time.** If you must test multiple variables, use a multivariate or factorial design — and only after you have significant experience with sequential A/B testing.

---

### 4.5 Step 5 — Run the Test and Log Daily

Every day during the test, log:
- Number of emails sent per variant
- Open rate per variant (after 24-hour settling period)
- Click rate per variant (allow 48 hours for click latency)
- Conversion rate per variant (allow 72+ hours for purchase latency)
- Revenue per variant (if tracking is live)
- Unsubscribes per variant
- Bounces and spam complaints per variant
- Any anomalies (holiday, site outage, competitor launch, email client issues)

Track in the Weekly Email Scorecard. Add a column per variant being tested. If you are not tracking variants in a structured format, you are guessing.

**Do nothing while the test is running.** Resist every impulse to tweak. Do not check metrics 3 hours after send when the day is not done. Log data after the settling period, not during the initial spike.

**Klaviyo A/B testing protocol:**
1. Create campaign with multiple variants
2. Set test size to 50% of total audience (split evenly across variants)
3. Set winning metric (open rate, click rate, or conversion)
4. Set winning time window (4 hours minimum — 24 hours recommended for click-based decisions)
5. Enable send winning variant to remaining audience
6. Log the winner and the margin of victory

---

### 4.6 Step 6 — Observe Results After Minimum Sample

Once sample size is reached and the latency period has passed:

1. Calculate the metric for each variant
2. Compare each variant's metric to the KPI
3. Calculate relative improvement: (variant - control) / control
4. Make exactly ONE decision:

**Scenario A — Primary metric above KPI, all downstream metrics stable or improving:**
Keep the winning variant. Set it as the new control. Stop testing this variable. Scale it.

**Scenario B — Primary metric above KPI, but a downstream metric worsened:**
The variable trade-off is not worth it. Go back to control. Look for a variable that improves primary without damaging downstream metrics.

**Scenario C — Primary and secondary metrics both below KPI:**
The fundamental approach is wrong. Go back to strategy. Test a completely different variable, not a variation of the same one.

**Scenario D — Primary metric above KPI, secondary neutral, but sample was large enough:**
The win is real. Keep it. Document the result. Run the same test 2–4 weeks later on a different segment to validate replicability.

---

## 5.0 THE DARWINIAN RULE

Once a stimulus hits KPI and stays there:

1. Treat it as "DNA" — the genotype that has fitness for your specific audience
2. Stop testing it
3. Use it as the baseline to create new variants only when it falls out of KPI
4. Scale volume — more sends with a proven genotype = more output

**Examples of email DNA:**
- A subject line formula that consistently delivers 40%+ open rate across 5+ campaigns
- A welcome flow structure that delivers $3.00+ RPR consistently
- An abandoned cart sequence with 10%+ recovery rate
- A body copy framework that converts at 0.15%+ RPR for non-discount campaigns

**When to challenge your DNA:**
- The metric drops below KPI for two consecutive measurement periods
- A fundamental change happens (new product line, new market, new platform rules)
- The competitive landscape shifts (everyone starts using your formula — stimulus hypoesthesia)

---

## 6.0 STIMULUS HYPOESTHESIA — WHEN EVERYTHING STOPS WORKING

Stimulus hypoesthesia: your audience goes numb to your email patterns with enough repeated exposure.

**Signs this is happening:**
- Open rate drops below 25% across all variants (accounting for Apple MPP inflation)
- Click rate drops below 1% across all campaign types despite consistent volume
- Flow RPR drops by 20%+ quarter-over-quarter
- Unsubscribe rate rises above 0.30% on standard campaigns
- You hear "I feel like I get too many emails like this" in customer feedback or surveys

**Response:**
1. Pause the current pattern for 30 days. Shift to a different content type from the 29 Non-Discount Campaign Frameworks.
2. Contrarian approach: do the OPPOSITE of what's currently saturating the market.
3. Test a completely new angle — not just different words, a different concept.
4. If curiosity subject lines stopped working, shift to direct benefit or personalization for 4–6 weeks.
5. If discount emails are being ignored, shift to educational or brand content for 2–4 weeks, then reintroduce offers.

**What NOT to do during hypoesthesia:**
- Do NOT add more send frequency — it accelerates the numbness
- Do NOT increase discount depth — it trains the audience to be discount-dependent
- Do NOT change everything at once — you won't know what fixed it
- Do NOT compare to industry averages as a sanity check — your audience is unique

---

## 7.0 EMAIL MARKETING TESTING ROADMAP

### Phase 1 — First 30 Days (Foundation Tests)

**Test 1: Campaign subject line formula**
- Control: Direct benefit ("Your 15% off code inside")
- Variant: Curiosity gap ("The one email you should actually open today")
- Metric: Open rate
- Sample: 500 per variant
- Decision point: Day 14

**Test 2: Send day of week**
- Control: Tuesday send
- Variant A: Thursday send
- Variant B: Saturday send (if applicable)
- Metric: Open rate + Click rate
- Sample: 3 campaigns per day across 3 weeks (1,000 sends per day)
- Decision point: Day 28

**Test 3: Welcome flow email count**
- Control: 3-email welcome series
- Variant: 5-email welcome series (add two educational/value emails)
- Metric: RPR per subscriber at 30 days
- Sample: 500 new subscribers per variant
- Decision point: Day 60 (need 30 days of post-flow data)

### Phase 2 — Days 30–90 (Optimization Tests)

**Test 4: Abandoned cart discount timing**
- Control: 10% off in Email 3 only
- Variant A: 10% off in Email 1
- Variant B: 15% off in Email 3 only
- Metric: Recovery rate + Revenue per recovered cart
- Sample: 500 abandoners per variant
- Decision point: Day 60

**Test 5: Post-purchase cross-sell placement**
- Control: Cross-sell in Email 2 of post-purchase series
- Variant A: Cross-sell in Email 1
- Variant B: Cross-sell in Email 3 with social proof
- Metric: Click rate on cross-sell + conversion rate
- Sample: 500 purchasers per variant
- Decision point: Day 75

**Test 6: Campaign body copy — offer framing**
- Control: Discount percentage ("20% off your next order")
- Variant A: Dollar-value framing ("Save $15 on orders over $75")
- Variant B: Value-add framing ("Free shipping + free gift on orders over $50")
- Metric: Conversion rate + RPR
- Sample: 1,000 sends per variant (3 campaigns)
- Decision point: Day 90

### Phase 3 — Days 90+ (Advanced Tests)

**Test 7: AI product recommendations in flows**
- Control: Standard flow content (curated products)
- Variant: Klaviyo AI product recommendations enabled
- Metric: Click rate + RPR
- Sample: 1,000 flow entrants per variant
- Decision point: Day 120

**Test 8: Segment-based send optimization**
- Control: Send same content to full engaged list
- Variant A: Segment by buyer type (new vs. repeat) and customize offer
- Variant B: Segment by product category interest and customize content
- Metric: Conversion rate + RPR + Unsubscribe rate
- Sample: 3 campaigns with 1,000 per segment
- Decision point: Day 120

**Test 9: Preview text optimization**
- Control: Standard preview text (repeats subject line or is blank)
- Variant: Preview text that extends the subject line (creates a two-line hook)
- Metric: Open rate
- Sample: 500 per variant across 3+ campaigns
- Decision point: Day 60 (runs in parallel with other tests)

---

## 8.0 TRACKING AND DOCUMENTATION

Every test must be documented. Documentation is not optional — it is the only way to build a knowledge base that compounds over time.

**Test documentation template:**
- Test ID: [TEST-YYYY-MM-DD-NNN]
- Date started: [Date]
- Date completed: [Date]
- Stimulus type: [Campaign subject line / Campaign body / Flow variant / Send time / Segment]
- Variable tested: [Description of exactly what changed]
- Control value: [Exact value of control]
- Variant value(s): [Exact value(s) of variant(s)]
- Primary metric: [Metric name with KPI]
- Secondary metric: [Metric name with KPI]
- Sample size achieved per variant: [Number]
- Results table: [Control vs. Variant metrics]
- Winner: [Control / Variant A / Variant B / Inconclusive]
- Decision: [Keep / Scale / Kill / Retest with different variable]
- Lessons learned: [1–3 sentences]
- Applied to: [List of campaigns or flows this was rolled out to]

**Storage:** All test documentation lives in the client's wiki folder under a `/tests/` subdirectory. Reference tests in the Weekly Email Scorecard and Monthly Review.

---

## 9.0 WHAT NOT TO DO — EMAIL MARKETING EDITION

- Do NOT change subject lines because you are bored with them. The audience sees far fewer emails from you than you send.
- Do NOT change body copy because you saw a "winning" example in a newsletter. Your audience is not their audience.
- Do NOT compare your campaign results to "industry averages" before hitting minimum sample size. Small samples amplify variance and look worse or better than reality.
- Do NOT change two variables at the same time. If you change subject line AND body copy AND send time, you will never know which change drove the result.
- Do NOT judge a test on Day 1 when you need Day 3 data for clicks and Day 7 data for conversions. Email has latency — account for it.
- Do NOT run a test if deliverability is not verified first. Emails landing in spam produce garbage data. Run a seed test or inbox placement check before starting any significant test.
- Do NOT optimize for open rate alone. Higher opens from the wrong audience segment = lower conversions. Click rate and conversion rate are the real signals.
- Do not let Apple MPP inflated open rates lull you into believing your subject lines are working. Use click rate as the tiebreaker when open rates look abnormally high.
- Do NOT kill a control based on one test result. Run the test twice with different audiences to validate replicability before making a permanent change.
- Do NOT set and forget winning tests. Re-test your DNA every 6–12 months as your list grows and audience composition shifts.

---

## 10.0 DECISION TREE

```
Is the metric below KPI?
├── YES → Is sample size reached?
│   ├── NO → Keep running. Do not judge.
│   └── YES → Is deliverability verified?
│       ├── NO → Fix deliverability first. Retest.
│       └── YES → Use KPI Table to identify stimulus to test.
│           └── Run test with One Variable at a Time.
│               ├── Result: Metric hits KPI → Keep variant. Make it DNA.
│               └── Result: Metric stays below KPI →
│                   ├── Was the test run for full sample? N → Retest
│                   └── Y → Different variable needed. Go back to Step 1.
└── NO → Do not touch it. Scale it. Move to next bottleneck.
```

---

## 2. analytics-performance-benchmarks-reporting

**Domain:** Analytics Performance Benchmarks & Reporting

### Performance Benchmarks & Reporting — Email Marketing

**Purpose:** A complete benchmark reference for email marketing service delivery. Every KPI, every calculation, every comparison point — sourced from Klaviyo 2026 data and verified portfolio numbers.

**Scope:** Email marketing only. Flow and campaign benchmarking, revenue attribution, deliverability, SMS upsell data, competitor pricing, and report templates for client delivery.

---

## 1.0 THE CORE STAT — FLOW CONCENTRATION (Lead With This)

**Flows generate 41% of total email revenue from just 5.3% of sends.**

This is the single most important stat in email marketing right now. It comes from Klaviyo's 2026 official benchmark dataset of 183,000+ accounts. It is not an estimate. It is not self-reported. It is platform-wide data.

**Why this matters:**
- Most brands send 95%+ of their volume as campaigns (broadcast, one-time sends)
- Those campaigns generate only 59% of revenue
- Flows — the 5.3% of sends that are automated — generate 41% of revenue
- The ROI leverage is obvious: optimize the 5% that does 41% of the work

**Top 10% flow programs generate $7.79 per recipient.**
**Industry median flow RPR: $1.58. Industry median campaign RPR: $0.06. (28x gap.)**

For a $1M brand (Klaviyo attribution ~27% of revenue = $270K email revenue):
- If flows generate 41% of that = $110,700/year from flows
- If flows are broken and generating only 10% of email revenue = $27,000/year from flows
- Gap = $83,700/year = $6,975/month
- At $2,000 setup + $800/month management: their ROI at conservative estimates is 69x in year 1

---

## 2.0 FLOW PERFORMANCE BENCHMARKS

March 2026 updated numbers from Klaviyo 2026 official data (183,000+ accounts) and BS&Co portfolio (14 brands, 7.97M emails).

### 2.1 Per-Flow Type Benchmarks

| Flow Type | Average Open Rate | Top Quartile | Average Conversion | Flow RPR | Notes |
|---|---|---|---|---|---|
| Welcome Series (Email 1) | 40–55% | 60–70% | 3–8% purchase rate | $2.50–$4.00 | Highest-performing email in the entire account |
| Welcome Series (Email 2) | 20–35% | 40–50% | 1–3% additional | — | Steep drop-off from Email 1 |
| Abandoned Checkout (Email 1) | 35–45% | 50–60% | 5–8% recovery | $3.00–$6.00 | Highest intent trigger in the account |
| Abandoned Checkout (Series) | — | — | 8–12% total recovery | — | 3-email series vs 1-email — always build a series |
| Browse Abandonment | 20–30% | 35–50% | 1–3% conversion | $0.80–$2.00 | Often missing entirely — easy win |
| Post-Purchase (Email 1) | 45–55% | 60–70% | Low direct conv, high LTV | $1.00–$3.00 | Highest open rate window in customer journey |
| Win-Back (Email 1) | 10–20% | 25–35% | 2–5% re-activation | $0.50–$1.50 | For unengaged subscribers — 90+ days |
| Sunset/Suppression | 5–10% | N/A | List hygiene | — | Not a revenue flow — a list health mechanism |

### 2.2 AI Recommendations Impact on Flow Performance

Klaviyo 2026 official data:
- Average click rate with AI product recommendations: **3.75%** (vs 1.69% without)
- Top performer click rate with AI recs: **8.79%**
- Estimated flow RPR improvement: 20–40%

**When to recommend AI recommendations:**
- Any brand with 10,000+ subscribers and 100+ SKUs
- Brands with enough purchase history for the AI to find patterns (minimum 30 days of consistent order data)
- Brands already running flows but not segmenting or personalizing content

---

## 3.0 CAMPAIGN PERFORMANCE BENCHMARKS

Klaviyo 2026 official — 183,000+ customers.

| Metric | Poor | Average | Good | Excellent |
|---|---|---|---|---|
| Open Rate | <20% | 30–38% | 38–50% | >50% |
| Click Rate | <0.5% | 1.29% avg | 2–4% | >5% |
| Placed Order Rate | <0.03% | 0.05–0.10% | 0.10–0.25% | >0.25% |
| RPR (Revenue Per Recipient) | <$0.03 | $0.06–$0.15 | $0.15–$0.50 | >$0.50 |
| Unsubscribe Rate per Send | >0.5% | 0.10–0.20% | <0.10% | <0.05% |
| Spam Complaint Rate | >0.10% | 0.02–0.05% | <0.02% | <0.01% |

**Critical note on open rates and Apple MPP:** Apple Mail Privacy Protection inflates open rates by 10–20% for brands with significant Apple Mail users. Do not use open rate alone to judge campaign performance. Use click rate and RPR as primary benchmarks. When open rates look abnormally high (50%+) and click rates are below 1%, the opens are likely MPP-inflated.

**Campaign vs. flow comparison baseline:**
- Campaign click rate: 1.69% (Klaviyo average)
- Flow click rate: 5.58% (Klaviyo average) — flows click at 3.3x the rate of campaigns
- Flow placed order rate: 13x higher than campaigns
- This is the foundation of every audit finding

---

## 4.0 THE FLOW MULTIPLIER

**Definition:** Flow Multiplier = Flow RPR divided by Campaign RPR.

This is the single best diagnostic metric for whether a brand's flows are carrying their weight.

### 4.1 Flow Multiplier Benchmarks

| Flow Multiplier | What It Means | Typical Profile |
|---|---|---|
| Under 5x | Flows severely underpowered or campaigns very strong | Missing flows, 1-email sequences, no segmentation |
| 5x–10x | Below median — clear opportunity | Basic flows live but not optimized |
| 10x–20x | Median range — reasonable program | Complete flow suite, some optimization |
| 20x–30x | Above median — strong program | Mature flows + segmentation |
| 30x+ | Top tier | Full automation suite + AI recs + advanced segmentation |
| 91.8x | Portfolio maximum (BS&Co March 2026) | Large campaign audience + highly optimized flows |

**Portfolio median: 16.4x** (BS&Co, March 2026, 14 ecom brands).

### 4.2 How to Calculate Flow Multiplier

Step-by-step for any prospect or client:

1. Log into Klaviyo Analytics > Revenue
2. Filter by Flows. Note total revenue and total recipients.
3. Calculate Flow RPR = Flow Revenue / Flow Recipients
4. Same for Campaigns: Campaign Revenue / Campaign Recipients
5. Flow Multiplier = Flow RPR / Campaign RPR

**Estimated multiplier (no Klaviyo access):**
- 1–2 email welcome + 1 cart email + no post-purchase → likely 2–5x
- Missing welcome + missing post-purchase → likely 1–3x
- No flows at all → multiplier of 0 (all revenue from campaigns or none from email)

### 4.3 How to Use Flow Multiplier in Audits and Sales

A prospect with a flow multiplier of 3x who sees the industry median is 16x has an obvious, objective problem. You don't have to sell them on the idea that email could be better — the math shows them.

**Audit finding template:** "Your flow multiplier is [X]. The industry median is 16x. Brands with comparable traffic and average order values typically generate 3–5x more flow revenue with a complete, optimized flow architecture. This represents [$Y] in opportunity per year."

---

## 5.0 FLOWS VS. CAMPAIGNS — THE FULL COMPARISON

From BS&Co March 2026 portfolio data: 7.97M emails, 14 ecom brands.

| Metric | Campaigns | Flows | Difference |
|---|---|---|---|
| Revenue | $438,743 | $467,963 | Flows won by 7% |
| Recipients | 7,669,729 | 296,138 | Flows used 26x fewer recipients |
| RPR | $0.06 | $1.58 | **28x gap** |
| Click Rate | 0.54% | 3.15% | 6x gap |
| Conversion Rate | 0.03% | 0.68% | **25x gap** |
| Revenue split | 48.4% | 51.6% | Flows now ahead |

**Three-month trend:** Flow RPR gap vs. campaigns has widened every month — from 18x in January, to 22x in February, to 28x in March. This trend is accelerating.

**New buyer stat:** 48% of flow-driven email revenue comes from NEW buyers. Campaigns only convert 16% from new buyers. Flows are the primary new-customer conversion tool in email.

---

## 6.0 REVENUE ATTRIBUTION BENCHMARKS

Email revenue as a percentage of total store revenue — the standard diagnostic for email program health.

| Level | Email Revenue % | What It Means |
|---|---|---|
| Broken / Neglected | <10% | Flows missing or inactive, deliverability issues, no segmentation |
| Average | 15–20% | Basic flows live, campaigns occasional, no optimization |
| Good (Industry Avg 2026) | 25–30% | Complete flow suite, segmented campaigns, consistent send cadence |
| Top Tier | 35–45% | AI features enabled, full flow architecture, weekly campaigns to engaged segments |

**Industry average for well-managed brands (2026): 27%** (Klaviyo 2026 Official + BS&Co March 2026 portfolio average: 28%).

Use this to set client expectations. A brand at 12% email revenue attribution is not getting top-tier results — you can show them the benchmark and the gap. A brand at 30% is already performing above average — the work is optimization, not overhaul.

---

## 7.0 DELIVERABILITY BENCHMARKS

Deliverability is a primary revenue constraint in 2026. 16.9% of all marketing emails never reach the inbox. Fixing deliverability is often the highest-ROI work you can do for a client.

| Metric | Target | Action if Below |
|---|---|---|
| Delivery Rate | >98% | Check list hygiene, verify emails, remove hard bounces |
| Inbox Placement Rate | >90% | Fix SPF/DKIM/DMARC, check blacklists, warm domain |
| Spam Rate | <0.10% (Gmail threshold) | Suppress complainers immediately — above 0.30% = sending suspended |
| Bounce Rate | <2% | Clean list, remove invalid emails, use double opt-in |
| Domain Reputation (Google Postmaster) | Good or High | Below "Medium" = pause and investigate |

**Critical 2026 update:** Gmail and Yahoo enforce 0.10% complaint rate threshold in real-time. Above that: inbox placement drops immediately. Above 0.30%: sending suspended. Send only to engaged segments (opened in last 90 days) for broadcast campaigns.

**Deliverability quick checklist for audits:**
1. Check SPF, DKIM, and DMARC DNS records
2. Check Google Postmaster Tools for domain reputation
3. Check Microsoft SNDS for Outlook/Office365 reputation
4. Verify no CNAME tracking is being used (post-Google crackdown)
5. Check that unsubscribe link is in every send
6. Review engagement segment definitions — are they sending to cold subscribers?
7. Check complaint rate in Klaviyo analytics
8. Run a seed test or inbox placement tool check

---

## 8.0 SMS BENCHMARKS (For Upsell and Discovery)

Use these reference points when evaluating whether a brand should add SMS to their email program.

| Metric | SMS | Email | Gap |
|---|---|---|---|
| Open Rate | 95–98% | 30–45% | 2–3x |
| Click Rate | 19–36% | 1.29–5.58% | 5–10x |
| Cart Recovery vs. Email | 2–3x better | Baseline | — |

**Revenue impact:** Brands using email + SMS generate 20–30% more revenue per recipient than email-only brands (Klaviyo 2026).

**When to bring up SMS:**
- On discovery calls: "Are you doing SMS? Because if not, you're leaving 20–30% additional revenue per recipient uncaptured."
- In QBRs when email is already optimized: "Email is at ceiling. SMS is the next lever."
- For brands with high AOV ($75+) and mobile traffic >60% — SMS typically converts best in these conditions.

---

## 9.0 COMPETITOR PRICING REFERENCE (For Pitch and Positioning)

| Service | Market Rate | Tenza Price |
|---|---|---|
| Full-service Klaviyo agency monthly retainer | $3,000–$12,000/month | $800/month |
| Klaviyo setup (project, no management) | $1,500–$5,000 | $2,000 |
| Klaviyo freelance hourly rate | $75–$200/hour | — |

**The positioning argument:** "You're getting the same system at 4–15x less cost, with a money-back guarantee that established agencies don't offer. The reason my price is lower is that I use AI to operate at 3x the speed of a traditional agency and I have zero overhead."

Use this in QBRs when a client questions value, in sales calls during the objection-handling phase, and in proposals alongside the ROI calculation.

---

## 10.0 THE NUMBERS LIBRARY

Quick-reference stats with sources for use in sales calls, audits, proposals, and reports.

| Stat | Source |
|---|---|
| "$36–42 ROI for every $1 spent on email marketing" | Hustler Marketing, 2026 |
| "Flows generate 41% of total email revenue from 5.3% of sends" | Klaviyo 2026 Official |
| "Flow click rate is 3x higher than campaigns" | Klaviyo 2026 — 5.58% vs 1.69% |
| "48% of flow-driven revenue comes from new buyers" | Klaviyo 2026 Official |
| "Industry median flow multiplier is 16x" | BS&Co March 2026, 14 brands |
| "Top 10% flow programs generate $7.79 per recipient" | Klaviyo 2026 Official |
| "SMS open rates run 95–98% vs 30–45% for email" | Klaviyo SMS Benchmarks 2026 |
| "Brands using email + SMS generate 20–30% more revenue per recipient" | Klaviyo 2026 |
| "Email + SMS marketing generates 20–40% of total ecommerce revenue for well-managed brands" | Hustler Marketing, 2026 |
| "Full-service Klaviyo agencies charge $3,000–$12,000/month" | Fiverr, Flowium, industry 2026 |
| "AI product recommendations in Klaviyo flows: avg click rate 3.75%, top performers 8.79%" | Klaviyo 2026 Official |
| "Automated CTR: 5.4% vs manual campaign CTR: 1.5%" | Klaviyo 2026 |
| "Automated conversion rate: 12% vs manual: 3%" | Klaviyo 2026 |
| "16.9% of all marketing emails never reach the inbox" | Verified.Email, 2026 |
| "Average ecom email ROI: $36–$72 per $1 spent" | Hustler Marketing, 2026 |

---

## 11.0 KPI REFERENCE TABLE

Standard KPI ranges for every major email metric. Use this as the quick-reference for weekly reporting and audit diagnostics.

| Metric | Critical (Fix Now) | Below KPI | At KPI | Above KPI |
|---|---|---|---|---|
| Open Rate (Campaign) | <20% | 20–30% | 30–38% (avg) | >38% |
| Open Rate (Flow Email 1) | <30% | 30–40% | 40–55% | >55% |
| Click Rate (Campaign) | <0.5% | 0.5–1.29% | 1.29–2% | >2% |
| Click Rate (Flow) | <2% | 2–3% | 3–5% | >5% |
| Conversion Rate (Campaign) | <0.03% | 0.03–0.05% | 0.05–0.10% | >0.10% |
| Conversion Rate (Flow) | <0.3% | 0.3–0.5% | 0.5–1.0% | >1.0% |
| RPR (Campaign) | <$0.03 | $0.03–$0.06 | $0.06–$0.15 | >$0.15 |
| RPR (Flow) | <$0.50 | $0.50–$1.58 | $1.58–$4.00 | >$4.00 |
| Unsubscribe Rate | >0.5% | 0.20–0.50% | 0.10–0.20% | <0.10% |
| Spam Complaint Rate | >0.10% | 0.05–0.10% | 0.02–0.05% | <0.02% |
| Delivery Rate | <95% | 95–98% | 98–99% | >99% |
| Inbox Placement | <85% | 85–90% | 90–95% | >95% |
| Bounce Rate | >3% | 2–3% | <2% | <1% |
| Abandoned Cart Recovery | <5% | 5–8% | 8–12% | >12% |
| Welcome Series RPR | <$1.50 | $1.50–$2.50 | $2.50–$4.00 | >$4.00 |

---

## 12.0 REPORTING CADENCE

### 12.1 Weekly Email Scorecard

Delivered every Monday, covering the prior week. Format: single-page dashboard (Google Sheets or Notion).

**What to track weekly:**
- Total email revenue (flows + campaigns)
- Revenue by flow type (top 3 flows by revenue)
- Revenue from campaigns (top 2 campaigns by revenue)
- Campaign send count and metrics (open, click, conversion, unsub, spam)
- Flow metrics (open rate per flow, click rate, conversion rate)
- RPR by flow type
- New subscribers acquired
- Unsubscribe count
- Spam complaint count
- Deliverability rate
- Notable wins or findings (write as bullet points)

**Weekly report template structure:**
1. **Summary line** — One sentence: "Email generated $X this week. Flows delivered $Y (Z% of total)."
2. **Flow performance table** — Flow name, sent, opens, clicks, conversions, revenue, RPR
3. **Campaign performance table** — Campaign name, sent, opens, clicks, conversions, revenue, RPR
4. **List health row** — New subs, unsubs, spam, net growth
5. **KPI check** — Traffic light (green/yellow/red) for each major metric against benchmark
6. **Action items** — What to test next, what to fix, what to scale

### 12.2 Monthly Review

Delivered on the first week of each month. Deeper analysis.

**What to cover in monthly reviews:**
- Month-over-month comparison (revenue, RPR, list growth, deliverability)
- Flow multiplier calculation and trend
- Year-over-year comparison (if available)
- A/B test results from the past month
- Segment performance (new buyers vs. repeat buyers vs. non-purchasers)
- Campaign frequency and content mix analysis
- Deliverability deep-dive (inbox placement, domain reputation, complaint rate)
- Three-month trend lines for key metrics
- Top 3 opportunities identified
- Action plan for next month

### 12.3 Quarterly Business Review (QBR)

Strategic-level. Focus on trajectory, not week-to-week noise.

**QBR content:**
- Quarter-over-quarter revenue growth from email
- Flow multiplier trend (has it improved?)
- Program maturity level assessment (broken → average → good → top tier)
- Deliverability health score
- List quality score (growth rate, engagement rate, churn rate)
- Major wins and case studies
- Priorities for next quarter
- Budget and resource recommendations

---

## 13.0 HOW TO USE BENCHMARKS

### 13.1 In Sales Calls

**Opening the value conversation:**
"Let me ask you a quick question. Do you know your email revenue attribution — what percentage of total store revenue comes from email?"

**If they don't know:** That's the first finding. Every well-managed brand tracks this.

**If they say 15–20%:** "That's around average. For a brand doing $2M, that's $300K–$400K from email. With a complete flow architecture and optimized campaigns, most brands get to 27%+. That's $540K — a $140K–$240K gap."

**If they say under 10%:** "That tells me your flows may be missing or underperforming. Most brands generate 41% of email revenue from just 5% of their sends — those are the automated flows. If I can show you which flows are leaking revenue, would that be worth a conversation?"

**Using the flow multiplier in discovery:**
"Do you know your flow multiplier? It's your flow revenue per recipient divided by campaign revenue per recipient. The industry median is 16x. If you're below that, you're leaving money on the table."

### 13.2 In Audits

Every audit report should reference these benchmarks directly:

- Current metrics (actual numbers from the client's Klaviyo)
- Benchmark comparison (industry average, good, excellent)
- Gap analysis (in dollars — how much revenue is being left on the table)
- Prioritized fixes (highest ROI first: missing flows, flow architecture, segmentation, deliverability)

**Audit finding template:**
"Your [Flow Name] has a [Metric] of [Client Value]. The benchmark for this metric is [Benchmark Range]. Your program is in the [Poor / Below KPI / At KPI / Above KPI] range. If we bring this to [Target], the projected revenue impact is [$X]."

### 13.3 In Client Reports

- Include benchmark comparisons in every weekly and monthly report
- Use traffic-light indicators (green = at or above KPI, yellow = below KPI, red = critical)
- Show trend lines (not just current state — direction matters more)
- Quantify the gap in dollars, not percentages. "$6,975/month" lands harder than "28x gap"

---

## 14.0 APPLE MPP — WHAT IT MEANS FOR REPORTING

**What it is:** Apple Mail Privacy Protection (MPP) automatically loads remote content (including tracking pixels) when emails arrive in Apple Mail, regardless of whether the user opened the email.

**The impact on data:**
- Open rates are inflated by 10–20% for brands with significant Apple Mail users
- Opens from Apple Mail users are no longer reliable engagement signals
- Open rates alone cannot be trusted for any brand with >20% Apple Mail user share

**How to handle it:**
1. Always report open rates alongside click rates. Click-through requires real action — it cannot be faked by MPP.
2. When reporting campaign performance, note MPP inflation as a caveat.
3. Do not use Apple Mail opens as engagement signals for segmentation. Use clicks and site visits instead.
4. For brands with 50%+ Apple Mail user share, de-prioritize open rate optimization and focus on click and conversion rates.

**Reporting caveat text:** "Open rates shown include Apple MPP inflation. Industry estimates place MPP inflation at 10–20% for typical ecommerce audiences. Click rate, conversion rate, and RPR are more reliable performance metrics."

---

## 15.0 TRENDS AND STRATEGIC GAPS

From the March 2026 Ecom Email Trends Report: 5 universal Klaviyo gaps found in nearly 100 account audits.

1. **Extended ID not enabled** — Found in 2/3 of audits. Expands identifiable traffic for segmentation.
2. **Attribution windows misconfigured** — Default windows no longer reflect multi-device shopping.
3. **Mobile sign-up friction** — Forms built in desktop view that are clunky on mobile.
4. **Missing high-intent flows** — Price-drop + low-inventory missing in ~50% of accounts.
5. **BIMI not configured** — Brand logo doesn't appear in inbox. Trust and open rate signal.

**Diagnostic action:** Check all 5 on every new client audit. Add them as standard finding entries.

**Trend to watch:** AI personalization. 64% of marketers now use AI in email. AI-personalized campaigns show 41% revenue increase. CTR of 13.44% for AI campaigns vs. 3% for standard. AI adoption projected to hit 97% by 2030. Benchmark flow performance with AI recommendations will continue to pull away from non-AI programs.

---

## 3. analytics-program-diagnostics-optimization

**Domain:** Analytics Program Diagnostics & Optimization

### Email Program Diagnostics & Optimization — Email Marketing

**Purpose:** A systematic framework for diagnosing and optimizing an email marketing program. Covers flow diagnostics, campaign diagnostics, iteration protocols, cohort analysis, revenue attribution, and decision trees for every common performance gap.

**Scope:** Email marketing service delivery only. Diagnostics for existing client programs. Does not cover sales, cold email, or prospecting.

---

## 1.0 THE DIAGNOSTIC FRAMEWORK

Diagnose in this order. Always. The flow layer is highest ROI, then campaigns, then infrastructure.

```
Level 1: Flow Diagnostics    → Highest ROI (41% of revenue from 5% of sends)
Level 2: Campaign Diagnostics → Medium ROI (frequency, content mix, segmentation)
Level 3: Infrastructure       → Foundation (deliverability, list health, tracking)
```

Do NOT jump to campaign optimization if flows are broken. Do NOT jump to content strategy if deliverability is broken. Fix the foundation first, then the highest-leverage layer.

---

## 2.0 LEVEL 1 — FLOW DIAGNOSTICS

### 2.1 Flow Inventory Check

Start with a complete inventory of existing flows. Many brands have flows they forgot existed, or don't have flows they think they have.

**Checklist:**
- [ ] Welcome series (3–5 emails)
- [ ] Abandoned checkout (3+ emails, not a single email)
- [ ] Browse abandonment (active or inactive?)
- [ ] Post-purchase series (2+ emails)
- [ ] Win-back series (for 90+ day inactive)
- [ ] Sunset/suppression flow (for clean list hygiene)
- [ ] Price-drop alert (high-intent — missing in ~50% of accounts)
- [ ] Low-inventory alert (high-intent — often missing)
- [ ] Replenishment/restock (if applicable to product type)
- [ ] Birthday/anniversary email (if applicable)
- [ ] Cross-sell/upsell flow (post-purchase, timed)

**Finding template:** "Missing [Flow Name] — this flow typically generates [$X RPR] for similar brands. Estimated monthly opportunity: [$Y]."

### 2.2 Flow Performance Diagnostic

For each active flow, compare metrics against benchmarks from SOP-analytics-performance-benchmarks-reporting.md.

| Diagnostic Question | Look At | If Below Benchmark |
|---|---|---|
| Is the welcome flow capturing new subscribers? | Welcome RPR: target $2.50–$4.00 | Email count too low, no offer in first email, no segmentation (subscribers vs buyers) |
| Is abandoned cart recovering carts? | Recovery rate: target 8–12% | Discount too small, discount offered too late, too few emails in series, no urgency |
| Is browse abandonment working? | RPR: target $0.80–$2.00 | Often missing entirely. Check if trigger is active and recently viewed product is shown |
| Is post-purchase converting to repeat? | Repeat purchase rate from flow | Cross-sell weak or missing, timing wrong, no loyalty/rewards mention |
| Is win-back reactivating anyone? | Win-back open rate: 10–20% | Segment too aggressive (including recently active subscribers), no compelling offer |
| Is the flow multiplier above 16x? | Flow RPR / Campaign RPR | Fill missing flows, increase email count, add segmentation and AI recs |

### 2.3 Flow Architecture Gaps — The 5 Universal Klaviyo Gaps

From Klaviyo's audit of nearly 100 accounts (Feb 2026). Check every client for these:

1. **Extended ID not enabled** — Found in 2/3 of audits. Expands identifiable traffic for segmentation.
2. **Attribution windows misconfigured** — Default windows no longer reflect multi-device shopping. Check and update.
3. **Mobile sign-up friction** — Forms built in desktop view that are clunky on mobile. Check form on mobile device.
4. **Missing high-intent flows** — Price-drop + low-inventory missing in ~50% of accounts.
5. **BIMI not configured** — Brand logo doesn't appear in inbox. Trust and open rate signal.

**Diagnostic action:** These 5 points should be standard findings in every audit. They cost nothing to fix and compound over time.

### 2.4 Flow Diagnostic Decision Tree

```
Is the flow multiplier below 10x?
├── YES → Start here.
│   ├── Are there missing high-intent flows? (welcome, cart, post-purchase)
│   │   ├── YES → Build missing flows first. Highest ROI.
│   │   └── NO → Optimize existing flows.
│   │       ├── Is welcome RPR below $2.50?
│   │       │   ├── YES → Add offer in Email 1. Split subscribers vs buyers.
│   │       │   └── NO → Move to next flow.
│   │       ├── Is cart recovery below 8%?
│   │       │   ├── YES → Add discount. Increase email count. Add urgency.
│   │       │   └── NO → Move to next flow.
│   │       ├── Is post-purchase repeat rate below benchmark?
│   │       │   ├── YES → Add cross-sell. Add loyalty mention.
│   │       │   └── NO → Move to browse abandonment.
│   │       └── Is browse abandonment active?
│   │           ├── NO → Enable it. Easy win at $0.80–$2.00 RPR.
│   │           └── YES → Optimize product recommendations.
│   └── No flows at all → Build 5-core flow suite (welcome, cart, browse, post-purchase, win-back).
└── NO → Move to Level 2 (Campaign Diagnostics).
```

---

## 3.0 LEVEL 2 — CAMPAIGN DIAGNOSTICS

### 3.1 Send Frequency Diagnostic

From Campaign Strategy Master Guide: recommended 3–4 campaigns per week.

| Frequency | Likely Outcome | Diagnostic Signal |
|---|---|---|
| 1x/week | Customers forget the brand; engagement drops; revenue suffers | Low repeat purchase rate, low RPR |
| 2x/week | Borderline — some results but suboptimal | Inconsistent revenue per campaign |
| 3–4x/week | Optimal: high revenue, low unsubscribes | Stable or growing RPR, unsubscribe rate <0.20% |
| 5–7x/week | Fatigue; unsubscribes rise; diluted messaging | Unsubscribe rate >0.30%, click rate declining |

**How to diagnose:** Count the number of campaigns sent in the last 30 days. Divide by 4.33 (weeks per month). Compare to the frequency table.

**Frequency correction protocol:**
- If sending too little (<2x/week): Add 1 campaign per week. Monitor unsubscribe rate. Repeat until at 3–4x/week or unsubscribe rate rises above 0.20%.
- If sending too much (>5x/week): Reduce by 1 campaign per week. Monitor RPR per campaign (should increase as each campaign gets more attention). Continue until unsubscribe rate stabilizes below 0.20% and RPR per send stops increasing.

### 3.2 Content Mix Diagnostic

From Campaign Strategy Master Guide: the 3-Type Framework.

| Content Type | % of Total | Purpose |
|---|---|---|
| Sales / Promotional | ~30% | Drive revenue |
| Educational / Value | ~50% | Build trust and authority |
| Brand / Personality | ~20% | Create emotional connection |

**How to diagnose:** Categorize the last 20 campaigns into the 3 types. Calculate the actual mix vs. the ideal mix.

**Common findings:**
- **Too much promotional (>40%):** Trains audience to only buy on discount. Unsubscribe rates climb. Non-sale campaigns underperform because the audience is trained to wait for a deal.
- **Too much educational (>70%):** Revenue per campaign is lower than it could be. You're building trust but not converting it. Add promotional campaigns.
- **Too much brand (<10% educational, <10% brand):** No differentiation. Every email feels like a sales email. Add educational and brand content to build long-term value.

**Correction protocol:** Shift the mix toward the target over 4 weeks. Move 1–2 campaigns per week into the under-represented category. Monitor unsubscribe rate and revenue per campaign.

### 3.3 The One Email, One Topic Rule

**Diagnostic question:** Does each campaign focus on one specific point or takeaway?

Customers view an email for 3–5 seconds. If an email tries to say three different things, it says nothing. Scan recent campaigns:
- Count distinct topics per email
- If an email has more than one topic, flag it
- Reminder: "What is the ONE single thing I want this customer to know after looking at this email?"

### 3.4 Segmentation Health Diagnostic

From Campaign Strategy Master Guide: Standard campaign send hierarchy.

| Segment | When to Use | Signal of Health |
|---|---|---|
| 30-Day Engaged | Always — control variant | Click rate 2%+ |
| 60-Day Engaged | Main send audience | Click rate 1.5%+ |
| 90-Day Engaged | Wider reach | Click rate 1%+ |
| VIP Segment | Exclusive previews and rewards | Highest RPR in the account |
| Non-Purchaser Segment | Conversion-focused | Conversion rate above campaign average |
| Full List | BFCM only | Unsubscribe rate >0.30% — use sparingly |

**Diagnostic:** Look at the last 10 campaigns. Are they being sent to "All Subscribers" or to segmented audiences? Brands that send to "All Subscribers" for every campaign typically have:
- Higher unsubscribe rates (0.30%+)
- Lower RPR (<$0.06)
- Worse deliverability (sending to cold subscribers triggers spam complaints)

**Always exclude from every send:**
- Hard bounces
- Unsubscribes
- Spam complainers
- Anyone who has not opened in 120+ days (unless running a re-engagement campaign)

### 3.5 Campaign Performance Diagnostic

For each campaign type, compare against benchmarks.

| Campaign Type | Metric to Check | Below Benchmark → Check This |
|---|---|---|
| Promotional | Conversion rate (<0.05%) | Offer strength, discount depth, CTA clarity, landing page alignment |
| Promotional | RPR (<$0.06) | AOV, product selection, audience segment quality |
| Educational | Click rate (<1%) | Topic relevance to audience, CTA placement, value perception |
| Educational | Open rate (<25%) | Subject line fail (too salesy for educational content) |
| Brand/Story | Open rate (<30%) | Subject line fail (not compelling enough) |
| Brand/Story | Unsubscribe rate (>0.20%) | Brand story may not resonate — check segment targeting |
| Holiday/Event | Revenue vs. benchmark | Timing (sent too early or too late), offer not relevant enough |

---

## 4.0 LEVEL 3 — INFRASTRUCTURE DIAGNOSTICS

### 4.1 Deliverability Health Check

Deliverability is the foundation. If emails don't reach the inbox, nothing else matters.

**Check in this order:**
1. **Delivery rate** — target 98%+. Below that: list quality problem.
2. **Inbox placement** — target 90%+. Run a seed test. Below that: reputation problem.
3. **Spam complaint rate** — target <0.10%. Above that: cold segment risk or poor list hygiene.
4. **Bounce rate** — target <2%. Above that: invalid emails, old list, no verification.
5. **Domain reputation** — Check Google Postmaster Tools. Below "Good": investigate immediately.
6. **Authentication** — SPF, DKIM, DMARC all configured? DMARC at p=quarantine or p=reject?
7. **CNAME tracking** — Post-Google crackdown: must use dedicated sending domain, not CNAME.

**Deliverability decision tree:**
```
Is the delivery rate below 98%?
├── YES → Is bounce rate above 2%?
│   ├── YES → List needs cleaning. Remove hard bounces. Use double opt-in.
│   └── NO → Is inbox placement below 90%?
│       ├── YES → Check SPF/DKIM/DMARC. Check blacklists. Check Google Postmaster.
│       └── NO → Check spam complaint rate.
│           ├── >0.10% → Send only to engaged segments (opened in last 90 days).
│           ├── >0.30% → Pause sending. Fix list hygiene. Warm domain.
│           └── <0.10% → Check individual provider inbox placement.
└── NO → Move to Level 1 (Flow Diagnostics).
```

### 4.2 List Health Diagnostic

| Metric | Healthy | Warning | Critical |
|---|---|---|---|
| List growth rate (monthly) | +3–5% | 0–3% | Negative |
| Engagement rate (opened in 90 days) | 40%+ | 25–40% | <25% |
| Unsubscribe rate per campaign | <0.10% | 0.10–0.20% | >0.20% |
| Spam complaint rate | <0.02% | 0.02–0.05% | >0.05% |
| Email change rate (churn) | <1% monthly | 1–2% monthly | >2% monthly |

**List health correction protocol:**
- **Stagnant growth (<3%):** Audit sign-up forms, add pop-ups, add post-purchase subscribe CTA, check form placement on mobile.
- **Low engagement (<25%):** Run a re-engagement sequence, then sunset non-openers. Sending to cold lists destroys deliverability.
- **High unsubscribe rate (>0.20%):** Reduce frequency, shift content mix, segment better.
- **Spam complaints (>0.05%):** Immediately suppress recent complainers. Review segments being sent to.

---

## 5.0 ITERATION PROTOCOL — WHAT TO TEST IN WHAT ORDER

Based on the A/B Testing & Iteration Protocol SOP (analytics-abtesting-iteration-protocol.md). The order matters — test the highest-impact variable first.

### Phase 1 — Foundation (Weeks 1–4)

| Priority | What to Test | Why This First |
|---|---|---|
| 1 | Abandoned cart discount depth | Highest intent trigger. 1–2 tests can 2x recovery rate. |
| 2 | Welcome series email count | New subscribers enter every day. Fastest sample accumulation. |
| 3 | Campaign subject line formula | Fastest A/B test. Klaviyo handles it natively. 500 per variant. |
| 4 | Send day of week | Run in background. No content changes needed. |

### Phase 2 — Optimization (Weeks 5–12)

| Priority | What to Test | Why |
|---|---|---|
| 5 | Welcome series offer timing (Email 1 vs Email 3) | RPR impact is direct and measurable. |
| 6 | Post-purchase cross-sell placement | Repeat purchase rate is a key LTV driver. |
| 7 | Campaign body copy framing | Higher sample needed (1,000 per variant). Save for after subject line is optimized. |
| 8 | Browse abandonment enable + optimization | Often completely missing. Easy win. |

### Phase 3 — Advanced (Weeks 12+)

| Priority | What to Test | Why |
|---|---|---|
| 9 | AI product recommendations in flows | 20–40% RPR improvement when done right. |
| 10 | Segment-based send optimization | Customize content by buyer type, product interest. |
| 11 | Win-back offer structure | Long-tail opportunity — reactivates churned subscribers. |
| 12 | Preview text vs. no preview text | Small sample, fast result. Pairs with subject line testing. |

**Rule:** Do not start Phase 2 until Phase 1 tests have reached minimum sample. Do not start Phase 3 until Phase 2 tests are complete. Each phase builds on the data from the previous phase.

---

## 6.0 REPORTING CADENCE

### 6.1 Weekly Email Scorecard

Delivered every Monday for the prior week.

**What to include:**
1. **Summary line:** "Email generated $X this week. Flows: $Y (Z% of total). Campaigns: $A."
2. **Flow performance table:** Flow name → sent → opens → clicks → conversions → revenue → RPR
3. **Campaign performance table:** Campaign name → sent → opens → clicks → conversions → revenue → RPR
4. **List health row:** New subscribers, unsubscribes, spam complaints, net growth
5. **KPI traffic lights:**
   - Green (at or above KPI) — do nothing
   - Yellow (below KPI but within 20% of target) — monitor
   - Red (below KPI by more than 20%) — action required
6. **Action items:** Top 2–3 things to test or fix this week

### 6.2 Monthly Review

Delivered first week of each month.

**Monthly diagnostic questions:**
1. Did total email revenue increase or decrease month-over-month? By how much?
2. Is flow RPR trending up, down, or flat?
3. Is the flow multiplier above 16x? If not, what's the bottleneck?
4. Are campaign RPR and conversion rates stable or improving?
5. Is list health improving (growth rate, engagement rate, unsubscribe rate)?
6. What A/B tests concluded? What did we learn?
7. What are the top 3 opportunities for next month?

**Monthly deliverable:** A written report with the above analysis + comparison to prior month + prioritized action plan.

### 6.3 Client KPI Dashboard — What to Track

Permanent metrics that should be visible at all times:

| Metric | Why It Matters | Update Frequency |
|---|---|---|
| Total email revenue (monthly) | Top-line program health | Monthly |
| Email revenue attribution (% of total store revenue) | Competitive benchmark | Monthly |
| Flow RPR | Per-flow efficiency | Weekly |
| Campaign RPR | Per-campaign efficiency | Weekly |
| Flow multiplier | Flow vs campaign health | Monthly |
| List size and growth rate | Pipeline health | Weekly |
| Open rate (campaigns, flows) | Content engagement | Weekly |
| Click rate (campaigns, flows) | Action engagement | Weekly |
| Conversion rate (campaigns, flows) | Revenue efficiency | Weekly |
| Unsubscribe rate | Content satisfaction | Weekly |
| Spam complaint rate | Deliverability risk | Weekly |
| Delivery rate | Infrastructure health | Monthly |

---

## 7.0 COHORT ANALYSIS BASICS

### 7.1 New Buyer vs. Repeat Buyer Behavior

One of the most important diagnostic splits in email marketing. New buyers and repeat buyers behave differently in email. If you are sending them the same content, you are leaving money on the table.

| Behavior | New Buyers | Repeat Buyers |
|---|---|---|
| Open rate | Higher (45–60%) | Lower (30–45%) |
| Click rate | Higher (3–6%) | Lower (2–4%) |
| Conversion on subsequent email | Lower (need more trust) | Higher (already trust the brand) |
| Discount sensitivity | Higher | Lower |
| Preferred content | Education, confirmation, guidance | New products, loyalty, community |
| Best flow | Post-purchase (with onboarding) | VIP/rewards, cross-sell |

**How to diagnose in Klaviyo:**
1. Create a segment for "First Purchase within 30 days" (new buyers)
2. Create a segment for "2+ purchases, last purchase within 90 days" (repeat buyers)
3. Compare metrics across campaigns and flows
4. If you see new buyers not converting to second purchase within 60 days, the post-purchase flow needs work
5. If repeat buyers have declining open rates, you are boring them with same-content emails

### 7.2 Simple Cohort Tracking

Track these cohorts monthly:

| Cohort | Definition | What to Watch |
|---|---|---|
| This Month's New Subscribers | All new email sign-ups | Welcome flow RPR. 30-day conversion rate. |
| Last Month's New Subscribers | Signed up last month | Repeat rate within 60 days of first purchase. |
| This Month's First-Time Buyers | First purchase this month | Post-purchase flow engagement. Time to second purchase. |
| This Month's Reactivated | Purchased after 120+ days inactive | Win-back effectiveness. Retention rate after re-purchase. |

**Cohort diagnostic:**
- If new subscribers are not converting within 30 days: the welcome flow offer or content is wrong.
- If first-time buyers are not making a second purchase within 60 days: the post-purchase flow is not building enough connection or the cross-sell is wrong.
- If reactivated buyers immediately go inactive again: the win-back brought them back but the post-reactivation content did not hold them.

### 7.3 Revenue Attribution Check

Monthly: verify that Klaviyo's tracking is accurate.

**Check:**
1. Pull total revenue from Klaviyo Analytics (last 30 days)
2. Pull total store revenue from Shopify/ecommerce platform (same period)
3. Calculate: Klaviyo revenue / Total store revenue = Email attribution %
4. Compare to benchmark (27% for well-managed brands)

**If attribution is suspiciously low:**
- Check that Klaviyo tracking code is on all pages (product, cart, checkout, thank you)
- Check that checkout page fires the tracking code (Klarna, PayPal, Shop Pay may block it)
- Check that UTM parameters are not being stripped somewhere in the flow
- Check attribution window settings (recommended: 30-day click, 7-day open)
- Verify Extended ID is enabled

**If attribution is suspiciously high (>50%):**
- Check for double-counting (multiple Klaviyo scripts firing)
- Check that email-only promotions are not inflating attribution
- Cross-reference with Google Analytics ecommerce data

---

## 8.0 DECISION TREES

### 8.1 Program-Level Decision Tree

```
Start: What is the email revenue attribution?
├── <15% → Is deliverability healthy?
│   ├── NO → Fix deliverability first. Check SPF/DKIM/DMARC. Clean list. Warm domain.
│   └── YES → Are flows generating 30%+ of email revenue?
│       ├── NO → Diagnose flows (Level 1). Build missing flows. Optimize existing.
│       └── YES → Program is working but needs scaling. Move to campaign optimization.
├── 15–25% → Diagnose flows first.
│   ├── Flow multiplier below 10x? → Build/optimize flows.
│   └── Flow multiplier above 10x? → Move to campaigns.
├── 25–35% → Campaign optimization phase.
│   ├── Frequency below 3x/week? → Add campaigns.
│   ├── Content mix off? → Shift toward 50/30/20 split.
│   └── Segmentation weak? → Start segmenting sends.
└── 35%+ → Advanced optimization.
    ├── AI recs enabled? → Enable + test.
    ├── All 5 technical gaps closed? → Check Extended ID, attribution, BIMI, forms, flows.
    └── SMS active? → Add SMS as next channel.
```

### 8.2 Flow-Level Decision Tree

```
Flow RPR below benchmark?
├── Welcome series below $2.50?
│   ├── Is there an offer in Email 1? → NO → Add offer. Big impact.
│   ├── Are subscribers and buyers getting the same flow? → YES → Split into two paths.
│   └── Email count < 3? → Add 2 more emails (educational + cross-sell).
├── Abandoned cart recovery below 8%?
│   ├── Is there a discount? → NO → Add 10–15% discount.
│   ├── Is discount in Email 1 or only Email 3? → Test moving to Email 1.
│   ├── Email count < 3? → Add reminder emails.
│   └── Any urgency framing? → NO → Add time-limited language.
├── Browse abandonment not active?
│   └── Enable it. Test with 3-email sequence showing recently viewed products.
├── Post-purchase RPR below $1.00?
│   ├── Cross-sell present? → NO → Add cross-sell in Email 2 or 3.
│   ├── Loyalty/rewards mentioned? → NO → Add loyalty framing.
│   └── Only 1 email? → Expand to 3-email series.
└── Win-back below $0.50?
    ├── Offer compelling? → Test a deeper discount or exclusive access.
    └── Segment correct? → Ensure only 120+ day inactive are included.
```

### 8.3 Campaign-Level Decision Tree

```
Campaign RPR below $0.06?
├── Is open rate below 30%?
│   ├── Subject line issue → Test curiosity vs benefit, emoji vs no emoji, length.
│   └── Audience issue → Check if sending to cold/engaged mix. Segment better.
├── Open rate above 30% but click rate below 1.29%?
│   ├── Body copy issue → Test offer framing, CTA placement, social proof.
│   ├── Apple MPP inflation? → Check if open rate is abnormally high vs click rate.
│   └── Landing page issue → Check that CTA destination matches the offer.
├── Open rate OK, click rate OK, conversion rate below 0.05%?
│   ├── Offer mismatch → The email promised one thing, landing page delivers another.
│   ├── Discount insufficient → Consider deeper discount or better value framing.
│   └── Audience mismatch → The segment is not the right audience for this offer.
├── Conversion rate OK but RPR below $0.06?
│   ├── AOV too low for this segment → Target higher-AOV segment.
│   └── Product selection is low-price → Bundle or upsell to increase AOV.
└── Unsubscribe rate above 0.30%?
    ├── Frequency too high → Reduce 1 campaign/week. Monitor.
    ├── Content too promotional → Shift mix toward educational/brand.
    └── Wrong segment → Exclude cold subscribers from this campaign type.
```

---

## 9.0 STANDARD DIAGNOSTIC WORKFLOW

Every new client engagement follows this workflow in the first 30 days.

### Week 1 — Intake and Data Collection

**Collect:**
- Klaviyo read-only access (Analytics, Campaigns, Flows, Lists/Segments)
- Shopify/ecommerce platform read-only access
- Google Postmaster Tools access (if available)
- Previous 90 days of email performance data (minimum)
- Current flow architecture screenshots or flow maps
- Last 10 campaigns with subject lines, send time, audience, and results

### Week 2 — Diagnostic Audit

**Deliverable:** Audit report with:
1. Program maturity level (broken / average / good / top tier)
2. Flow audit (inventory + per-flow RPR vs benchmark)
3. Campaign audit (frequency, content mix, segmentation, per-campaign RPR)
4. Deliverability health check
5. List health metrics
6. Revenue attribution check
7. 5 universal Klaviyo gap check
8. Gap quantification (in dollars: monthly and annual opportunity)
9. Top 3 priority fixes with estimated ROI

### Week 3 — Action Plan

**Deliverable:** Prioritized 90-day optimization plan
1. Weeks 1–4: Foundation tests and fixes
2. Weeks 5–8: Optimization tests
3. Weeks 9–12: Advanced tests
4. Reporting cadence established (weekly scorecard + monthly review)

### Week 4 — First Weekly Report

Standard weekly scorecard begins. Baseline metrics established. First A/B tests running.

---

## 10.0 DIAGNOSTIC TOOLS AND DATA SOURCES

**Source: Email Marketing Benchmarks Reference v2 (April 2026)** — All benchmark comparisons reference this document. Do not use generic "industry average" numbers without checking against our v2 reference.

**Source: A/B Testing & Iteration Protocol** — All test protocols, sample sizes, and decision rules reference this document.

**Source: Campaign Strategy Master Guide** — All frequency, content mix, and segmentation guidance references this document.

**Source: Ecom Email Trends Report (March 2026)** — Strategic gaps (5 universal Klaviyo gaps), AI personalization trends, and deliverability updates reference this document.

**Data sources for diagnostics:**
- Klaviyo Analytics (primary)
- Google Postmaster Tools (deliverability)
- Microsoft SNDS (Outlook/Office365 deliverability)
- Shopify Analytics (revenue attribution cross-check)
- Seed/inbox placement tools (inbox rate verification)
- Manual spreadsheet tracking (test documentation, weekly scorecards)

---

## 4. copywriting-body-copy-frameworks

**Domain:** Copywriting Body Copy Frameworks

### SOP: Body Copy Frameworks & CTA Optimization

> The body copy is where opens convert to clicks. This SOP covers the proven frameworks for structuring email body copy, optimizing calls-to-action, and formatting for readability across every e-commerce email type.

---

## 1. PAS — Problem-Agitate-Solve

The PAS framework is the most reliable copywriting framework for e-commerce [Copyblogger — PAS Framework]. It works because it mirrors how buying decisions are made: recognition of a problem → emotional connection to the pain → desire for the solution.

**Structure:**
1. **Problem** — Identify the customer's pain point or unmet need
2. **Agitate** — Make the problem feel worse (the cost of not solving it)
3. **Solve** — Present your product as the natural solution

**When to use:**
- Product-focused emails where the product solves a clear problem
- Abandoned cart/checkout (problem: "you wanted this but didn't get it")
- Replenishment reminders (problem: "you're running out")
- Pain-point-driven campaigns (skincare issues, organization struggles, sizing frustrations)

**Example — Skincare Email:**

**Problem:** "Dry winter air is starting to catch up with your skin. That tight feeling after washing? That's your moisture barrier saying it needs help."

**Agitate:** "Without the right hydration, dry patches turn into flaking, fine lines look deeper, and makeup doesn't sit the way it should. By spring, you'll be playing catch-up instead of glowing."

**Solve:** "Our Hyaluronic Night Cream locks in moisture while you sleep. One jar. 8 hours of deep hydration. Wake up to skin that feels like you've had 10 hours of sleep."

---

## 2. AIDA — Attention-Interest-Desire-Action

AIDA is the classic marketing funnel adapted for email [Advertising Age — AIDA Model]. It walks the reader through a logical progression from awareness to action.

**Structure:**
1. **Attention** — A strong opening that stops the scroll (bold claim, statistic, question, or story hook)
2. **Interest** — Build engagement by explaining the relevance or context
3. **Desire** — Make them want it through benefits, features, and social proof
4. **Action** — Clear, specific CTA

**When to use:**
- Product launches
- Bestseller campaigns
- Blog/newsletter content with a commercial angle
- Any email where the reader needs to be warmed up to the offer

**Example — Product Launch Email:**

**Attention:** "We spent 18 months developing this. So did our competitors. The difference? We actually asked customers what they wanted."

**Interest:** "87% of you told us you wanted an option that's lighter, faster-absorbing, and fragrance-free. So we went back to the lab."

**Desire:** "Introducing [Product Name]: our lightweight gel moisturizer that absorbs in 10 seconds flat. No greasy residue. No scent. Just 24-hour hydration in a bottle that lasts twice as long as our cream version."

**Action:** "Try it first: Get 15% off your first purchase with code NEWGEL15."

---

## 3. Before-After-Bridge (BAB)

BAB is a persuasion framework that shows transformation [DigitalMarketer — BAB Framework]. It's particularly effective for aspirational products and lifestyle brands.

**Structure:**
1. **Before** — Describe the world before the product (the problem state)
2. **After** — Describe the world after the product (the ideal state)
3. **Bridge** — Show how the product gets them from Before to After

**When to use:**
- Lifestyle/aspirational brands (fashion, fitness, home decor)
- Product education sequences
- Testimonial-driven emails (customer's before/after)
- Transformation narratives (skincare, hair care, weight loss, organization)

**Example — Fitness Brand:**

**Before:** "You wake up, grab your phone, and the first thing you see is a reminder that you haven't worked out in a week. Your gym bag is gathering dust in the corner. Signing up feels like a commitment you can't keep."

**After:** "Imagine waking up excited to move. 20 minutes, no equipment, done before your coffee's ready. Your body feels stronger, your mind clearer, and that guilt? It's gone."

**Bridge:** "That's what [App Name] was built for. 20-minute workouts designed for real people with real schedules. No gym. No gear. Just results. Start with a 7-day free trial."

---

## 4. Storytelling Arc — Hook → Conflict → Resolution → CTA

Storytelling is the most emotionally engaging framework. Humans are wired for narrative — a well-told story can outperform any formulaic sales copy.

**Structure:**
1. **Hook** — The opening line that makes them want to keep reading
2. **Conflict** — The tension or challenge (relatable or dramatic)
3. **Resolution** — How the brand or product resolved the conflict
4. **CTA** — Clear next step

**When to use:**
- Founder stories
- Customer success stories / case studies
- Product origin stories (how it's made, behind the scenes)
- Brand-building emails (welcome flow, loyalty milestones)
- UGC campaigns where customers share their stories

**Example — Founder Story:**

**Hook:** "I quit my corporate job with $500 in savings and a prototype that didn't work."

**Conflict:** "For 8 months, I tested formulas in my kitchen. My husband thought I'd lost my mind. Every batch was either too watery, too sticky, or just... wrong. I almost gave up three times."

**Resolution:** "Then on batch #47, it clicked. A texture that was lightweight but hydrating. The scent — subtle, natural, perfect. My friends tried it. Then their friends. Within 6 months, we'd sold 10,000 units — all word of mouth."

**CTA:** "That original formula is still our bestseller. Try the product that started it all."

---

## 5. The "So What?" Test

Every sentence in your email must earn its place. The "So What?" test is a ruthless editing tool.

**How it works:**
After writing each sentence, ask: "So what?" If the sentence doesn't move the reader closer to the desired action (or pass a value test), cut it.

**Value tests for each sentence:**
- Does this inform the reader?
- Does this build desire?
- Does this overcome an objection?
- Does this create urgency?
- Does this establish credibility?

**Common offenders to cut:**
- Generic brand fluff ("We pride ourselves on quality")
- Redundant descriptions ("Our products are made with great ingredients")
- Over-explaining obvious features
- Empty transitional phrases ("As we mentioned earlier...")
- Industry jargon readers don't care about

**Example rewrite:**

**Before:** "At [Brand], we've been committed to providing our customers with the highest quality products since 2018, when our founder started the company with a simple mission to create products that people would love and trust."

**After (applying "So What?"):** "We launched in 2018 with one goal: make products you'd actually trust."

---

## 6. CTA Copy Formulas

The call-to-action is the point where copy becomes conversion. It's the single most important line in your email.

### 6.1 The CTA Formula

The most effective CTAs follow this structure:

**Action Verb + Benefit + (Optional: Urgency/Context)**

**Examples:**
- "Shop the Sale — 30% Off Ends Tonight"
- "Get Your Free Sample"
- "Claim Your Discount Before It Expires"
- "Browse Bestsellers"
- "Start Your Free Trial"
- "See What's New"
- "Join 10,000+ Happy Customers"

### 6.2 CTA Variations by Purpose

| Purpose | Primary CTA | Secondary CTA |
|---------|-------------|---------------|
| Sales | "Shop Now" / "Get [X]% Off" | "Browse the Collection" |
| Launch | "Shop the New Collection" | "Learn More" |
| Content | "Read the Full Article" | "Watch the Video" |
| Social proof | "See Why Everyone Loves It" | "Read Reviews" |
| Lead gen | "Get Your Free Guide" | "Sign Up" |
| Abandoned cart | "Complete Your Order" | "Continue Shopping" |
| Winback | "Come Back — [X]% Off" | "See What's New" |
| Review request | "Write a Review" | "Share Your Photos" |
| Referral | "Refer a Friend" | "Share Your Link" |
| Event/webinar | "Save My Spot" | "Add to Calendar" |

### 6.3 CTA Best Practices

- **One primary CTA per email.** More than one dilutes focus. If you need secondary CTAs, make them visually subordinate.
- **Use action-oriented language.** "Get," "Shop," "Claim," "Start," "Try" — not "Learn More" when "Shop Now" works.
- **Be specific.** "Get 20% Off Your First Order" beats "Get a Discount."
- **Create a benefit stack in the CTA.** "Shop Now — Free Shipping on Orders Over $50" gives two reasons to click.
- **Match CTA intensity to email goal.** Soft CTAs ("Learn More") for nurture, hard CTAs ("Buy Now") for direct response.
- **Keep CTA copy under 30 characters.** Buttons have limited real estate, especially on mobile.
- **Use first-person CTAs for personalization.** "Claim My Discount" can outperform "Claim Your Discount" in A/B tests.

---

## 7. Button Copy vs Text Link Copy

### 7.1 Button Copy

**Best for:** Primary CTAs, high-importance clicks, mobile-first design

**Guidelines:**
- 15-25 characters max (exceptions for short phrases like "Shop Now")
- Button should be minimum 44x44px on mobile (Apple HIG)
- High contrast button color against email background
- White text on brand-colored button is the safest combo
- Rounded corners preferred (modern, tappable look)
- Action verb + benefit: "Shop Sale — 20% Off"

**Common button copy examples:**
- "Shop Now"
- "Get [X]% Off"
- "Claim Your Discount"
- "Complete Order"
- "Browse Bestsellers"
- "Start Free Trial"
- "See the Collection"
- "Join the Waitlist"

### 7.2 Text Link Copy

**Best for:** Secondary CTAs, transactional emails, when buttons feel too aggressive

**Guidelines:**
- Underlined or color-differentiated from body text
- Placed at the natural reading endpoint of a paragraph
- Usually paired with a button — text link offers a "less committal" click path
- Shorter is better: 2-5 words typically

**Common text link copy examples:**
- "Learn more →"
- "Shop now"
- "See details"
- "Read the story"
- "Check order status"
- "Manage preferences"
- "Unsubscribe" (required footer link)

### 7.3 When to Use Which

| Scenario | Button | Text Link |
|----------|--------|-----------|
| Primary CTA in promotional email | ✅ | ❌ |
| Secondary/navigation link | ❌ | ✅ |
| Transactional email (receipt, shipping) | ❌ | ✅ |
| Mobile-heavy segment | ✅ | ⚠️ (harder to tap) |
| Content email with soft CTA | ⚠️ | ✅ |
| One-click purchase email | ✅ | ❌ |

---

## 8. Micro-Copy: Header, Footer, and PS Lines

Micro-copy is the small text around your main body copy. It's often ignored but can significantly impact engagement.

### 8.1 Header Micro-Copy

- **From Name:** Use a person's name (founder/Sarah from [Brand]) for higher open rates. Test branded vs personal.
- **Preheader/Preview Text:** Already covered in Subject Line Engineering SOP — always custom, never auto-populated.
- **Date/Time reference:** "Monday morning" or "Mid-week treat" adds context.

### 8.2 Footer Micro-Copy

- **Physical address:** Required by CAN-SPAM law in the US
- **Unsubscribe link:** Must be prominent, working, and one-click
- **Manage preferences:** Give subscribers options (frequency, categories) instead of forcing unsubscribe
- **Social proof in footer:** "Join 50,000+ subscribers" builds credibility
- **Reply to this email:** Encourages conversation, increases deliverability (engagement signal)

**Footer micro-copy template:**
```
[Physical address]
No longer want these emails? [Unsubscribe] or [Manage Preferences]

Questions? Reply to this email — we read every response.
```

### 8.3 PS Lines

PS lines are the second most-read part of an email (after the subject line). Use them strategically.

**Effective PS uses:**
- **Reinforce urgency:** "PS: Sale ends tonight at midnight"
- **Add a bonus:** "PS: Spend $50 and get free shipping"
- **Social proof:** "PS: Over 1,000 customers gave this 5 stars"
- **Overcome objection:** "PS: Free returns within 30 days"
- **Recap the offer:** "PS: Your discount code [CODE] expires in 24 hours"

**PS formatting:**
- Keep it below the main body, above the footer
- One PS only (two looks cluttered)
- Make it shorter than the main body
- Bold the PS label for scannability

---

## 9. Email Length Rules: Short vs Long-Form

### 9.1 Short-Form Email

**Best for:**
- Flash sales and promotions
- Abandoned cart/checkout
- Shipping confirmations
- Transactional emails
- Mobile-first audiences
- High-frequency sends (2+ per week)

**Structure:**
- 1-3 short paragraphs
- 50-150 words total
- One main message
- Single clear CTA
- No storytelling or narrative

**Example:**
```
Subject: 24 hours only — 30% off everything

Sale ends tonight at midnight.

Use code FLASH30 at checkout. Shop the full collection below.

[CTA Button: Shop Now — 30% Off]
```

### 9.2 Long-Form Email

**Best for:**
- Welcome flow (brand story email)
- Founder storytelling
- Product education/launch deep-dives
- Blog/newsletter content
- Brand-building emails
- High-ticket products requiring justification

**Structure:**
- 3-6 paragraphs
- 200-500+ words
- Narrative arc (hook → story → offer → CTA)
- Multiple sections with headers
- Scannable formatting (bullets, bold, spacing)

**Example structure:**
```
[Hook paragraph — 2-3 sentences]

[Story/narrative — 3-5 sentences]

[Product introduction — 2-3 sentences]

[Benefits with bullet points]

[Social proof — testimonial or statistic]

[CTA paragraph with offer]

PS: [Urgency or bonus]
```

### 9.3 How to Choose

| Factor | Short-Form | Long-Form |
|--------|-----------|-----------|
| Price point | < $50 | $50+ |
| Send frequency | 4+ per month | 1-2 per month |
| Audience engagement | Low attention span | High brand affinity |
| Product complexity | Simple/convenience | Complex/educational |
| Email goal | Direct response | Brand building |
| Segment | Cold/inactive | Warm/VIP |

---

## 10. Scannability

E-commerce subscribers don't read emails — they scan them. Your email must communicate its value in 3-5 seconds of scanning.

### 10.1 Scanning Best Practices

- **Short paragraphs:** 1-3 sentences max. Never 5+ sentence blocks.
- **Bullet points:** Use for lists of benefits, features, or reasons
- **Bold key phrases:** Bold the most important 2-3 words per section — this creates a "bold-only reading path"
- **White space:** Generous spacing between sections. Cramped emails don't get read.
- **Headers:** Use section headers (H2, H3) for long emails — they create scanning waypoints
- **One idea per paragraph:** Don't mix messages in the same paragraph
- **Mobile preview:** Always check mobile — line breaks that look fine on desktop may look overwhelming on phone

### 10.2 The "Bold Reading Path" Technique

Write the email, then bold the key phrases. Then read only the bold text. If the bold-only version doesn't tell the story, your bold choices are wrong.

**Example — the bold reading path should read like:**
> *Winter is here → Your skin is suffering → Our Night Cream solves it → 20% off today → Shop now*

### 10.3 Mobile Formatting Rules

- Minimum font size: 14px body text (16px preferred)
- Line height: 1.5x minimum
- Buttons: Minimum 44x44px tap target
- Single column layout only (multi-column breaks on mobile)
- F-shaped reading pattern: Key info in top-left quadrant

---

## 11. Tone Calibration

The right tone depends on the email type, segment, and brand personality. Here's how to calibrate.

### 11.1 Tone Spectrum

| Tone | Best For | Example Sentence |
|------|----------|-----------------|
| **Promotional** | Flash sales, discounts, urgency sends | "Get 30% off — but hurry, it ends tonight." |
| **Educational** | Blog/newsletter, product education, how-to content | "Here's why hyaluronic acid is different from other moisturizers." |
| **Personal** | Welcome flow, founder stories, relationship building | "I started this brand in my kitchen. Here's the real story." |
| **Urgent** | Abandoned cart, flash sale last call, shipping deadlines | "Your cart expires in 2 hours. Don't lose your picks." |
| **Celebratory** | Milestones, loyalty, VIP anniversaries | "Happy 1-year anniversary with us! Here's a gift." |
| **Empathetic** | Winback, sorry we missed you, service issues | "It's been quiet between us. We'd love to fix that." |

### 11.2 Segment-Based Tone Adjustments

| Segment | Tone Shift | Example |
|---------|-----------|---------|
| VIP/Best customers | Exclusive, warm, personalized | "As one of our top customers, we wanted to give you first access." |
| New subscribers | Welcoming, educational, value-first | "Here's how to get the most out of your first order." |
| Lapsed/winback | Empathetic, re-engagement offer centered | "We miss you. Here's 20% off to come back." |
| Cold/prospect | Low-pressure, educational, social proof heavy | "See why thousands of people love [Product]." |
| Abandoned cart | Reminder + urgency, personal | "Your cart is waiting, [First Name]." |

### 11.3 Brand Voice Consistency

- Create a "do say / don't say" list for your brand
- Calibrate vocabulary: high-end brands use different words than DTC brands
- Check for tone drift across emails in the same campaign
- One person should review all copy for voice consistency before sending
- Document tone decisions in the brand voice guide

---

## Verification

After writing body copy for any email:

- [ ] Body copy follows a documented framework (PAS, AIDA, BAB, or Storytelling)
- [ ] Every sentence passes the "So What?" test
- [ ] CTA uses Action Verb + Benefit formula
- [ ] One primary CTA per email (maximum)
- [ ] CTA button is minimum 44x44px
- [ ] CTA copy is under 25 characters for buttons
- [ ] Email is scannable: short paragraphs, bullets, bold reading path
- [ ] Mobile preview checked — no text overflow or broken layout
- [ ] Length is appropriate for email type (short vs long-form rationale)
- [ ] Tone is calibrated to segment and email purpose
- [ ] Micro-copy is complete: from name, preview text, PS, footer
- [ ] PS line reinforces the offer (urgency, bonus, or social proof)
- [ ] "Reply to this email" invite included for engagement

---

## 5. copywriting-brand-voice-storytelling

**Domain:** Copywriting Brand Voice & Storytelling

### SOP: Brand Voice, Storytelling & Content Philosophy

> A consistent brand voice is what makes subscribers feel like they're hearing from a person, not a corporation. This SOP covers how to define, document, and deploy brand voice across every email touchpoint, with frameworks for storytelling and content strategy that builds long-term customer relationships.

---

## 1. Brand Voice Definition

Brand voice is the consistent personality and emotional tone your brand communicates across every channel [Tenza brand voice methodology]. It's not what you say — it's how you say it.

### 1.1 Voice vs Tone

| Concept | Definition | Example |
|---------|-----------|---------|
| **Voice** | The consistent personality of your brand — never changes | Nike is always motivational, bold, and action-oriented |
| **Tone** | The emotional expression of your voice in a specific context — changes with the situation | Nike's tone is celebratory for a launch, empathetic for a community post, urgent for a flash sale |

### 1.2 Building a Voice Matrix

Define your brand voice across four axes:

| Axis | Description | Examples |
|------|-------------|---------|
| **Formal vs Casual** | Sentence structure, vocabulary level | Glossier: casual, conversational / Tiffany: polished, refined |
| **Serious vs Playful** | Tone of humor and levity | Dollar Shave Club: playful, irreverent / Rolex: serious, aspirational |
| **Respectful vs Irreverent** | How you challenge conventions | Liquid Death: irreverent, anti-establishment / Patagonia: respectful, earnest |
| **Practical vs Aspirational** | Benefit framing | The Home Depot: practical, how-to / Tesla: aspirational, visionary |

**Exercise:** Plot your brand on each axis as a 1-5 scale. This creates a voice fingerprint.

### 1.3 Vocabulary and Language

**Core vocabulary:** The 10-20 words your brand uses frequently and consistently.

**Example — DTC skincare brand:**
- Always: "glow," "ritual," "bare," "fresh," "essential"
- Sometimes: "radiant," "dewy," "clean," "minimal"
- Never: "anti-aging," "perfect," "flawless," "miracle"

**Taboo words:** Words the brand NEVER uses. Examples by brand type:
- Luxury: "cheap," "bargain," "sale" (use "investment," "exclusive," "curated")
- DTC: "synergy," "leverage," "solution" (use "works," "helps," "makes")
- Wellness: "fix," "cure," "treat" (medical claims cause compliance issues)
- Eco-friendly: "throwaway," "disposable," "waste" (contradicts values)

### 1.4 Voice Documentation Template

```
BRAND VOICE CHEAT SHEET — [Brand Name]

Our voice in one sentence: [One-sentence description]

Personality (if the brand were a person): [Description]

Voice axes:
- Formal [1-2-3-4-5] Casual
- Serious [1-2-3-4-5] Playful
- Respectful [1-2-3-4-5] Irreverent
- Practical [1-2-3-4-5] Aspirational

Core vocabulary:
- Always use: [5-10 words]
- Use sparingly: [5-10 words]
- Never use: [5-10 words]

Do say: [list of phrases and approaches]
Don't say: [list of phrases and approaches]

Writing rules:
- Sentence case or Title Case in subject lines?
- Emojis: yes/no, and which ones?
- Contractions: yes or no?
- Punctuation: Oxford comma? Single space after period? Exclamation marks?

Example rewrites for common scenarios:
Product description: [Before/After]
Welcome email: [Before/After]
Abandoned cart: [Before/After]
Complaint response: [Before/After]
```

---

## 2. Founder Story Integration

The founder story is the most powerful narrative asset a brand has [Tenza brand voice methodology]. It answers: "Why does this brand exist, and why should I care?"

### 2.1 The Founder Story Arc

Every founder story follows a predictable but powerful structure:

1. **The Before** — What was the founder doing before starting the brand? What problem did they encounter?
2. **The Breaking Point** — What made them decide to actually start the company?
3. **The Struggle** — The honest, vulnerable part. What went wrong? What almost killed the idea?
4. **The Breakthrough** — What worked? The moment things clicked.
5. **The Mission** — How does the founder's vision translate to the customer's benefit today?

### 2.2 Founder Story Rules

- **Be honest.** Customers can smell manufactured origin stories. If the brand started in a garage, say that. If it started with a $500K VC round, say that.
- **Make the founder relatable, not heroic.** The "average person who did something extraordinary" is more compelling than the "born entrepreneur."
- **Connect the founder's struggle to the customer's need.** The founder experienced the same problem the customer has — that's why the product exists.
- **Update the story.** A founder story written in year 1 and never updated feels stale by year 5. Add new chapters: milestones, lessons learned, how the brand evolved.
- **Include one specific, memorable detail.** "I mixed 47 batches in my kitchen" is better than "I spent months perfecting the formula."

### 2.3 Where to Use the Founder Story

| Touchpoint | How to Use |
|-----------|-----------|
| Welcome Flow Email 2 | Full founder story — 3-5 paragraphs with photo |
| About page | Extended version with more detail |
| Product launch | Founder's note on why this product matters |
| Holiday campaign | "A letter from our founder" |
| Social media | Behind-the-scenes snippets and quotes |
| Email signature | Founder name + one-liner about the mission |

---

## 3. Customer Stories and Testimonials as Narrative

Customer stories are more persuasive than brand claims because they're perceived as unbiased.

### 3.1 Types of Customer Content

| Type | Depth | Best Used In |
|------|-------|-------------|
| Star rating + one-liner | 1 sentence | Product pages, order confirmation |
| Short testimonial | 2-4 sentences | Campaign emails, social proof sections |
| Full customer story | 3-5 paragraphs | Blog, newsletter feature, welcome flow |
| UGC photo + quote | Image + 1-2 sentences | Social galleries, review request follow-ups |
| Video testimonial | 30-90 seconds | Landing pages, launch emails |

### 3.2 The Customer Story Framework

Structure customer stories using the same narrative principles:

1. **Situation:** Where was the customer before finding the brand?
2. **Problem:** What specific challenge were they facing?
3. **Discovery:** How did they find the brand/product?
4. **Experience:** What was their experience using the product?
5. **Result:** What changed? How is their life better?
6. **Quote:** Their own words about why they love it

### 3.3 Testimonial Collection SOP

- **Ask at the right time:** 7-14 days after delivery — enough time to form an opinion, not so long that the excitement has faded
- **Make it easy:** Provide a template: "What problem were you trying to solve?" "How did [Product] help?" "What would you tell someone considering [Product]?"
- **Incentivize:** Discount on next purchase, loyalty points, or a chance to be featured
- **Get permission:** Always ask for permission to use in marketing. Document consent.
- **Rotate fresh testimonials:** Replace old testimonials (6+ months) with newer ones for freshness

---

## 4. Product Origin Stories

Product origin stories answer: "Where does this come from, who makes it, and why is it special?"

### 4.1 Product Story Elements

- **Raw materials:** Where do ingredients/materials come from? Why did you choose them?
- **Production process:** How is it made? What makes your process different?
- **The people:** Who makes it? (Artisans, factory workers, local communities)
- **Quality standards:** What tests, certifications, or standards does it meet?
- **The "why":** What customer problem does this specific product solve?

### 4.2 Product Story Formats

**The "How It's Made" Email:**
- Behind-the-scenes photos or video
- Step-by-step breakdown of production
- Spotlight on the people involved
- Price justification (if higher than competitors)

**The "Why We Created This" Email:**
- Customer feedback that inspired the product
- Gaps in the market the brand identified
- The R&D journey (failures, iterations, breakthroughs)
- Launch story

### 4.3 When Product Stories Work Best

- High-ticket items ($100+) that require purchase justification
- Consumable goods (coffee, skincare, food) where quality of ingredients matters
- Artisanal/crafted products where the process is part of the value
- Sustainable/ethical brands where transparency is a competitive advantage
- Subscription products where ongoing engagement is critical

---

## 5. Education vs Promotion Balance — The 80/20 Rule

### 5.1 What the 80/20 Rule Means

For every 10 emails a subscriber receives from your brand [Tenza brand voice methodology]:
- **8 should provide value** — education, entertainment, inspiration, community
- **2 should directly promote** — sales, launches, offers

This is not a hard mathematical rule but a philosophical balance. A brand that sends 80% promotional emails will see:
- Rising unsubscribe rates
- Declining open rates
- Higher spam complaints
- Lower long-term LTV

### 5.2 Types of Value-Driven Content

| Category | Examples | Email Type |
|----------|---------|-----------|
| Educational | How-to guides, tips, tutorials, FAQs | Blog newsletter, onboarding |
| Inspirational | Customer stories, lifestyle content, mood boards | Brand storytelling, seasonal |
| Entertaining | Quizzes, interactive content, humor | Engagement campaigns |
| Community | User showcases, events, social proof | UGC campaigns, reviews |
| Exclusive | Behind-the-scenes, early access, member-only content | VIP flows, loyalty |

### 5.3 The Value-First Approach

When writing any promotional email, ask:
- What value am I providing before I ask for the sale?
- Can I lead with education and follow with promotion?
- Would I want to receive this email if I weren't a brand employee?

**Structure for a value-first promotional email:**
1. Hook with value (tip, insight, story)
2. Build relevance (why this matters to them)
3. Transition to offer (how the product delivers on the value)
4. CTA

**Example:**
> "Did you know most people overwash their hair? Washing every day strips natural oils, leading to more oil production — a vicious cycle. [Educational value]
> 
> Our sulfate-free shampoo is designed for 2-3 washes per week. It cleans without stripping, so your hair finds its natural balance. [Product as solution]
> 
> Get 20% off your first bottle. [Offer]
> 
> Shop Now [CTA]"

---

## 6. Content Pillars

Content pillars are the 3-5 core topics your brand "owns" in the customer's mind [Tenza brand voice methodology]. Every piece of content should fall within one of these pillars.

### 6.1 Defining Content Pillars

**Exercise:** Brainstorm 3-5 topics that are:
1. Relevant to your customer's needs and interests
2. Connected to your product
3. Broad enough to generate ongoing content
4. Distinct enough that they don't overlap

**Example — Skincare Brand:**
| Pillar | Topics | Content Types |
|--------|--------|--------------|
| Ingredient Education | What ingredients do, how to read labels, myths vs facts | Blog posts, email deep-dives, glossary |
| Routines & Rituals | Morning/night routines, travel routines, seasonal switches | How-to emails, checklists, videos |
| Behind the Formulation | How products are developed, sourcing stories, lab updates | Founder letters, product origin stories |
| Real Results | Customer transformations, before/after, testimonials | UGC campaigns, review features |
| Skin Health Science | Dermatologist insights, skin types, environmental factors | Expert interviews, educational series |

### 6.2 Content Pillar Rules

- Every email campaign should map to at least one content pillar
- Rotate pillars across sends to maintain variety
- Measure engagement per pillar — double down on what works
- If a pillar runs dry, evolve or replace it
- Content pillars should evolve with the brand (review quarterly)

### 6.3 Pillar-Based Content Calendar

```
Month: [Month]
Focus Pillar: [Primary pillar]
Secondary Pillar: [Secondary pillar]

Week 1: Email on primary pillar topic → social media teaser
Week 2: Email on secondary pillar → blog post → social media
Week 3: Promotional email (product tied to primary pillar)
Week 4: UGC/review email tied to primary pillar → wrap-up blog post
```

---

## 7. Seasonal Content Calendar Integration

### 7.1 Why Seasonal Matters

Seasonal content aligns your brand with the customer's lived experience. It makes your emails feel timely and relevant rather than random.

### 7.2 The Annual Content Calendar Framework

| Season | Months | Themes | Email Opportunities |
|--------|--------|--------|-------------------|
| Winter | Jan-Feb | New Year reset, wellness, organization | Goal-setting, product care, winter routines |
| Spring | Mar-May | Renewal, cleaning, outdoor | Spring refresh, cleaning guides, new colors |
| Summer | Jun-Aug | Travel, heat management, outdoor | Summer routines, travel minis, SPF education |
| Fall | Sep-Nov | Back-to-school, nesting, holiday prep | Routine resets, gift guides, pre-BFCM teasers |

### 7.3 Holiday Integration Without the Holiday

Non-holiday brands can still participate:
- **"Gift-giving season"** instead of "Christmas"
- **"New year, new habits"** instead of "New Year's resolution"
- **"Spring refresh"** instead of "Easter"
- **"Summer essentials"** instead of "Fourth of July"

### 7.4 Content Calendar Template

```
MONTH: [Month]
THEME: [Monthly theme]
CONTENT PILLAR FOCUS: [Primary pillar]

CAMPAIGNS:
- [Date]: [Campaign name] — [Email type] — [Segment]
- [Date]: [Campaign name] — [Email type] — [Segment]

FLOW UPDATES:
- [Flow name]: [What changes this month]

CONTENT PRODUCTION:
- [Content piece]: [Owner] — [Deadline]

MEASUREMENT:
- [KPI to track this month]
```

---

## 8. Objection Handling Within Copy

Objections are the silent reasons customers don't buy. Great copy addresses objections before they're raised.

### 8.1 Common E-Commerce Objections

| Objection | How to Handle | Example Copy |
|-----------|--------------|-------------|
| Price too high | Break down cost-per-use, compare to alternatives, emphasize value | "That's $0.50 per day for better skin" |
| Timing not right | Create urgency, emphasize opportunity cost of delay | "Every day you wait is a day without [benefit]" |
| Better options exist | Differentiation, unique features, social proof | "Unlike mass-produced options, ours is handcrafted in small batches" |
| Trust (will it work?) | Guarantees, testimonials, certifications | "Backed by a 60-day money-back guarantee" |
| Trust (is this legit?) | Trust signals: secure checkout, reviews, press mentions | "As seen in Vogue. Security guaranteed." |
| Commitment fear | Reduce risk: free trials, samples, easy returns | "Try it for 30 days. Not happy? Full refund." |
| Need to check with spouse | Give them a way to share the decision | "Save this email and show your partner" |

### 8.2 Objection Placement in Copy

- **Price objections:** Handle before the CTA, or in the PS line
- **Trust objections:** Handle early in the email (establish credibility)
- **Timing objections:** Handle in the urgency section
- **Quality objections:** Handle in the body with social proof and details

### 8.3 The Objection-CTA Sandwich

```
[Benefit / Hook]
[Price / value justification or guarantee]
[CTA]
[PS: re-state guarantee, urgency, or social proof]
```

---

## 9. Adapting Voice for Different Segments

Your brand voice stays consistent, but the tone adapts based on who you're talking to.

### 9.1 Segment-Specific Tone Adjustments

| Segment | Voice Adjustment | Do | Don't |
|---------|-----------------|----|-------|
| **VIP / High LTV** | More exclusive, warmer, more personalized | "As one of our most valued customers...", "You're invited to..." | Generic mass-market language |
| **New Subscribers** | More educational, value-first, lower pressure | "Here's how to get started...", "Welcome to the family!" | Hard sell before relationship built |
| **Lapsed / Winback** | More empathetic, offer-centered, humble | "We miss you", "Come back — we saved your spot" | Guilt-tripping or aggressive urgency |
| **Abandoned Cart** | Reminder + gentle urgency, personal | "Your cart is waiting, [First Name]", "Did you forget something?" | Accusatory tone ("You left this") |
| **Post-Purchase** | Gratitude + support, upselling is secondary | "Thank you for your order", "Here's how to care for your [product]" | Aggressive cross-sell in confirmation |
| **Cold / Unengaged** | Low-pressure, high-value, re-engagement focused | "Is this still relevant?", "Update your preferences" | More of the same that caused unengagement |

### 9.2 The Relationship Ladder

Map voice evolution as the customer relationship deepens:

```
NEW SUBSCRIBER: Formal, educational, value-first
       ↓
FIRST PURCHASE: Warm, supportive, grateful
       ↓
REPEAT BUYER: Familiar, personalized, conversational
       ↓
VIP: Exclusive, intimate, family-like
       ↓
ADVOCATE: Celebratory, community-focused, partnership
```

### 9.3 Dynamic Content for Voice Adaptation

Use Klaviyo conditional logic to swap copy blocks based on segment:

- **Subject line:** Different formulas for VIP vs cold (curiosity for warm, benefit for cold)
- **Greeting:** "[First Name]" for engaged, "Friend" for unengaged
- **Offer depth:** Higher discounts for lapsed, exclusivity for VIP
- **Body copy length:** Shorter for mobile-heavy/younger segments, longer for high-consideration

---

## 10. The "Reply to This Email" Strategy

Encouraging replies is one of the highest-leverage engagement tactics in email marketing.

### 10.1 Why Replies Matter

- **Deliverability boost:** Replies are the strongest positive engagement signal for mailbox providers (Gmail, Outlook, Apple Mail). A brand that gets replies looks like a wanted sender.
- **Relationship building:** A reply starts a conversation. Conversations build loyalty.
- **Customer insights:** Replies give you unfiltered feedback on your product, copy, and offers.
- **Content generation:** Customer replies can become testimonials, FAQs, or social proof.

### 10.2 How to Get More Replies

| Strategy | Example | Best Email Type |
|---------|---------|-----------------|
| Ask a question | "Reply to this email and tell us: what's your biggest skincare struggle?" | Welcome flow, newsletter |
| Offer help | "If you have any questions about sizing, just reply — we're here to help." | Product launch, post-purchase |
| Request feedback | "We'd love to hear your honest opinion on our new formula. Just hit reply." | Post-purchase, UGC |
| Make it personal | "Sarah here — I personally read every reply." | Founder emails, welcome flow |
| Create a contest | "Reply with a photo of your [product] setup for a chance to be featured." | Community campaigns |
| Send from a person | Use founder or team member name in from address, not "brand@company.com" | Brand storytelling |

### 10.3 Reply Handling SOP

- **Set expectations:** "I personally read every reply" (only if true)
- **Response time:** Within 24 hours maximum (sooner is better)
- **Auto-reply travel:** Set up an auto-reply if you'll be away
- **Scale:** If replies exceed manageable volume, segment the "reply to this email" ask to VIP/high-engagement segments only
- **Classification:** Tag replies as: Compliment, Question, Complaint, Suggestion, Spam
- **Escalation:** Complaints and complex questions route to customer service — not email marketing
- **Opportunity capture:** Product suggestions and testimonials get logged in CRM for future use

### 10.4 Footer Invitation Template

```
Reply to this email — [Founder Name] reads every response.

Not sure if [Product] is right for you? Reply and we'll help you decide.
```

---

## Verification

After writing any brand-voice-defining content or deploying a voice-calibrated campaign:

- [ ] Brand voice cheat sheet is documented and accessible
- [ ] Voice axes and taboo words are defined
- [ ] Tone is calibrated to the specific segment (not one-size-fits-all)
- [ ] Founder story or customer story (if used) follows narrative arc structure
- [ ] Educational content: 80/20 value-to-promotion balance is maintained
- [ ] Content pillars are identified and the email maps to at least one
- [ ] Objections are addressed before the CTA
- [ ] Voice is consistent across all emails in the same campaign
- [ ] "Reply to this email" invitation is included (if appropriate)
- [ ] Seasonal relevance is considered (even if not a seasonal send)
- [ ] Voice adaptation rules are documented for all segments

---

## 6. copywriting-sms-companion

**Domain:** Copywriting SMS Companion

### SOP: SMS Companion Copy & Short-Form Content

> SMS is the highest-engagement channel in e-commerce marketing, with open rates of 90%+ and average response times under 3 minutes. But it's also the most intrusive — each message lands as a notification on the customer's personal device. This SOP covers when and how to use SMS, how to write effective SMS copy within strict character limits, and how to coordinate SMS with email campaigns.

---

## 1. When to Use SMS vs Email

SMS is not "email in a smaller format." It serves a different purpose and should be reserved for messages that warrant the interruption.

### 1.1 SMS-Only Scenarios

| Scenario | Why SMS | Example |
|----------|---------|---------|
| Flash sales (short window) | SMS is read within 3 minutes average | "⚡ 4-hour flash sale ends tonight. 40% off everything. Code FLASH40." |
| Shipping/delivery updates | Time-sensitive operational info | "Your order has shipped! Tracking: [link]" |
| Abandoned cart escalation | Email 1-3 didn't convert, SMS as last resort | "Hey, your cart is saved but items are selling fast. Complete your order: [link]" |
| VIP exclusive launches | Make VIPs feel special with SMS-first access | "You're first to know: new drop goes live in 1 hour. Shop early: [link]" |
| Restock alerts | Limited inventory, first-come-first-served | "[Product] is back in stock. Won't last long. Shop now: [link]" |
| Appointment/event reminders | Must-not-miss timing | "Reminder: your appointment with [Brand] is tomorrow at 2pm. See you there!" |
| Urgent account notifications | Security, password reset, payment issues | "We noticed unusual activity on your account. Verify now: [link]" |

### 1.2 Email-Only Scenarios

| Scenario | Why Not SMS | Example |
|----------|-------------|---------|
| Brand storytelling | Too long for SMS format | Welcome flow email 2 — founder story |
| Educational content | Needs formatting (headers, bullets) | Blog/newsletter deep-dive |
| Newsletter | Regular cadence, not urgent | Weekly roundup email |
| Post-purchase nurture | Multi-message sequence, no urgency | "How to care for your [product]" |
| Product catalog browsing | Visual content required | Bestseller campaign with product grid |
| Transactional receipts | Information-heavy | Order confirmation with itemized list |

### 1.3 Coordinated SMS + Email

The most effective approach is often SMS + email together, with SMS acting as the urgency multiplier.

| Campaign | Email Timing | SMS Timing | SMS Role |
|----------|-------------|------------|----------|
| Flash sale | Send at start of sale window | 30 min before sale ends | "Last call — ends in 30 min" |
| Product launch | Launch day morning | 1 hour before launch | "Dropping in 1 hour — get ready" |
| Abandoned cart | Email 1 (1hr), Email 2 (24hr) | SMS at 48hr if no purchase | "Final reminder — your cart is waiting" |
| BFCM | Multi-email week | Morning of BFCM | "Doors open NOW. Shop early: [link]" |
| Back in stock | Email at restock | 30 min after email if no click | "Just restocked and going fast — [link]" |

---

## 2. SMS Character Limits and Truncation Rules

### 2.1 Standard SMS Character Limits

| Segment | Character Limit | Behavior |
|---------|----------------|----------|
| Standard GSM-7 | 160 characters | Full message in one segment |
| Extended GSM-7 | 153 characters per segment | Split into 2+ segments at 153 each |
| Unicode (UCS-2) | 70 characters per segment | Split at 67 characters — triggered by emojis, special characters, non-Latin scripts |

**Critical rule:** Messages over 1 segment show as "(1/2)" or "(2/2)" on most phones, which looks unprofessional. Always keep SMS under 160 characters / 1 segment.

### 2.2 Characters That Trigger Unicode (Multi-Segment) Mode

The following characters force the message into Unicode encoding, reducing per-segment limit from 160 to 70 characters:

- Emojis (😀 🎉 🔥 🚨 ⚡ but ✅ and ❌ also trigger it)
- Curly quotes (" ") — use straight quotes (" ") instead
- Smart apostrophes (') — use straight apostrophes (')
- En dash (–) - use regular hyphen (-)
- Em dash (—) - use regular hyphen or double hyphen (--) instead
- Special characters: ® © ™ €
- Accented characters not in GSM-7: é, ñ, ü, etc.

**SMS character counting:**
- Always count using an SMS-specific character counter (not a general word processor)
- Klaviyo has a built-in SMS character counter
- Online tools: https://www.twilio.com/sms-charcounter or https://charactercounter.com/sms

### 2.3 The 160-Character Formula

The most effective SMS copy fits into this structure:

```
[Hook/Context] + [Value/Offer] + [CTA/URL] = ~150-160 chars
```

**Breakdown:**
- **Hook (15-30 chars):** Greeting, urgency signal, or context
- **Value/Offer (60-80 chars):** The core message — what and why
- **CTA/URL (30-50 chars):** The action — shortened link or explicit instruction

**Example:**
```
Hey [first_name]! ⚡ Our flash sale ends tonight.
→ 15 chars (greeting + urgency)
40% off everything with FLASH40.
→ 35 chars (offer)
Shop now: [shortened URL]
→ ~20 chars (CTA)
Total: ~70 characters — well within limit
```

---

## 3. SMS Copy Formulas

### 3.1 The 5 SMS Copy Templates

**Template 1: The Flash Sale**
```
⚡ [OFFER] ends [TIMEFRAME]. Code [CODE] at checkout.
Shop now: [URL]
```

**Template 2: The Abandoned Cart**
```
Hey [name]! Your [PRODUCT] is still waiting.
Complete your order before it sells out: [URL]
```

**Template 3: The Launch Alert**
```
🚨 Just dropped: [PRODUCT NAME].
[QUICK BENEFIT — 10 words max].
Shop now: [URL]
```

**Template 4: The Back-in-Stock**
```
[PRODUCT] is back! Last time it sold out in [TIME].
Don't wait: [URL]
```

**Template 5: The VIP Exclusive**
```
[Name], you're invited: [EXCLUSIVE OFFER].
Early access ends [TIMEFRAME].
[URL]
```

### 3.2 SMS Copy Best Practices

- **Lead with value, not the brand.** Open with the offer or urgency, not "Welcome to [Brand]..."
- **One message, one goal.** A single SMS should have exactly one CTA. No secondary offers.
- **Write for the lock screen.** The first ~40 characters appear in the notification preview. Make them count.
- **Use [First Name] sparingly.** Every SMS doesn't need personalization — reserve it for abandoned cart and VIP sends.
- **Avoid "please" and formal language.** SMS is conversational. "Shop now" not "We kindly invite you to browse our collection."
- **No exclamation mark overload.** One per message maximum. Two looks desperate.
- **Emojis are powerful but costly.** Each emoji takes 18-20 chars in GSM-7 (more if Unicode is triggered). Use them strategically.

### 3.3 SMS Copy — Do/Don't

| Do | Don't |
|----|-------|
| Start with the offer or urgency | Start with "Hi, welcome to our brand" |
| Use short words (1-2 syllables) | Use long words or industry jargon |
| Use contractions (can't, won't, don't) | Use formal language ("We are pleased to inform...") |
| Put the link at the end | Bury the link in the middle of text |
| Include opt-out instructions (Reply STOP) | Forget legal compliance |
| Test on both iOS and Android | Assume SMS renders the same on all devices |

---

## 4. Link Shortening and Tracking in SMS

### 4.1 Why Link Shortening is Critical in SMS

- SMS has 160 characters — every saved character matters
- Long URLs make messages look messy and untrustworthy
- Klaviyo auto-shortens links in SMS — ensure this is enabled
- Custom shortened domains (yourbrand.co/xyz) build trust better than generic shorteners

### 4.2 UTM Parameters for SMS

Track SMS performance separately from email using distinguishable UTM parameters:

```
URL?utm_source=sms&utm_medium=text&utm_campaign=campaign-name&utm_content=variant
```

**Best practice:** Set up standard UTM conventions for SMS in your tracking template so every link is automatically tagged.

### 4.3 Link Placement

- **Always at the end** of the SMS — the final position has the highest click rate
- **Never middle-of-text** — SMS readers scan to the end for the action
- **One link per SMS** — multiple links create choice paralysis and reduce click rate
- **Link preview:** Klaviyo SMS generates a preview card — ensure OG tags on the destination page are set correctly

---

## 5. Compliance: Opt-In, Opt-Out, TCPA, Quiet Hours

SMS compliance is not optional. TCPA violations can result in fines of $500-$1,500 per message.

### 5.1 Opt-In Requirements

- **Explicit written consent required.** A phone number alone is not consent. The subscriber must actively agree to receive SMS from your brand.
- **Record consent.** Log the opt-in timestamp, source (web form, checkout, keyword), IP address, and the exact language they agreed to.
- **Double opt-in recommended.** Send a confirmation SMS: "Reply YES to confirm SMS from [Brand]. Msg & data rates may apply."
- **No pre-checked boxes.** The TCPA requires affirmative consent — pre-checked opt-in boxes violate the law.

**Opt-in methods:**
- Web/banner signup form with SMS checkbox
- Checkout flow with SMS opt-in toggle
- SMS keyword campaigns (Text JOIN to 55555)
- Post-purchase email opt-in (Email 2 in Repeat Purchase flow)
- In-store tablet/kiosk signup

### 5.2 Opt-Out Requirements

- **"Reply STOP" must work.** Process opt-outs immediately. Klaviyo handles this automatically.
- **Confirm opt-out.** Send one final message: "You've been unsubscribed from [Brand] SMS. Reply START to rejoin."
- **Process universal.** No matter which keyword the subscriber uses (STOP, UNSUBSCRIBE, CANCEL, END, QUIT), the opt-out must work.
- **Maintain suppression list.** Never send to a number that has opted out — even from a different campaign.

### 5.3 Quiet Hours

- **Standard quiet hours:** 9:00 PM - 8:00 AM (recipient's local timezone)
- **Klaviyo quiet hours:** Configure in Settings > SMS > Quiet Hours
- **Transactional exceptions:** Shipping updates and password resets can bypass quiet hours
- **Promotional SMS:** Never send during quiet hours — TCPA doesn't mandate specific quiet hours but industry best practice avoids them

### 5.4 TCPA Compliance Checklist

- [ ] Written opt-in consent documented for every phone number
- [ ] Opt-in confirmation SMS sent with brand name and frequency disclosure
- [ ] "Reply STOP to opt out" in every promotional SMS
- [ ] Opt-out processing confirmed (test it)
- [ ] Quiet hours configured (9 PM - 8 AM local)
- [ ] Frequency capped (max 5-10 SMS per month per subscriber)
- [ ] Terms and Privacy linked on opt-in page
- [ ] SMS program description clear (what they'll receive, how often)
- [ ] Msg & data rates may apply disclosure included
- [ ] Opt-in records stored (timestamp, source, IP)

---

## 6. SMS + Email Coordination

SMS and email should work as a coordinated system, not competing channels.

### 6.1 The Multi-Channel Hierarchy

```
1. Email (primary channel) — Education, storytelling, offers, catalog
2. SMS (urgency multiplier) — Time-sensitive follow-ups, cart rescue, flash sales
3. Push (optional) — App users only, real-time updates
```

### 6.2 Coordination Rules

- **SMS never sends before email in the same campaign.** Email is the primary touchpoint. SMS is the escalation.
- **Wait for email to earn its chance.** Let at least one email send before deploying SMS.
- **Different copy, same core message.** SMS should not copy-paste the email subject line. Rewrite for the format.
- **Complement not cannibalize.** SMS should drive action that email started, not compete with it.
- **Track channel attribution.** Use separate UTM parameters to measure SMS-attributed revenue vs email-attributed.

### 6.3 Abandoned Cart — Channel Coordination Example

| Step | Channel | Timing | Message |
|------|---------|--------|---------|
| 1 | Email | 1 hour after abandon | Standard cart recovery — full email with product images |
| 2 | Email | 24 hours after abandon | Urgency-focused — "Still thinking it over?" |
| 3 | Email | 72 hours after abandon | Discount offer — "We saved your cart + 10% off" |
| 4 | SMS | 96 hours after abandon | Short, urgent — "Hey! Your cart is saved but going fast. Complete your order: [URL] Reply STOP to opt out" |

---

## 7. MMS vs SMS: When Images Make Sense

### 7.1 SMS vs MMS

| Factor | SMS (Text Only) | MMS (With Image) |
|--------|----------------|------------------|
| Cost | Lower | Higher (per-message) |
| Character limit | 160 | Unlimited (but keep short) |
| Engagement | 90%+ open rate | Higher CTR (2-3x) |
| Technical | Universal support | Requires data/WiFi for image |
| Rendering | Consistent across all phones | Varies — some phones show as thumbnail |
| Best for | Urgency, flash sales, transactional | Visual products, fashion, food, launches |

### 7.2 When to Use MMS

- **Fashion/apparel:** "New arrivals" with product image
- **Food/beverage:** Tempting hero shot
- **Home decor:** Room setting with product
- **Limited drops:** Visual scarcity ("Only 5 left — see them here")
- **UGC campaigns:** Customer photo with product

### 7.3 When to Stick with SMS

- **Flash sales:** Speed trumps visuals
- **Cart abandonment:** They already know what they selected
- **Shipping updates:** No image needed
- **VIP text-only campaigns:** Higher frequency, lower cost
- **Segments with data/WiFi concerns:** Avoid MMS for audiences with limited connectivity

---

## 8. SMS Timing: Best Send Windows by Timezone

### 8.1 Optimal Send Times (Promotional SMS)

| Day | Best Time | Rationale |
|-----|-----------|-----------|
| Monday | 11:00 AM - 1:00 PM | After morning rush, pre-lunch scroll |
| Tuesday | 10:00 AM - 12:00 PM | Mid-week engagement high |
| Wednesday | 11:00 AM - 2:00 PM | Hump day — break time engagement |
| Thursday | 12:00 PM - 3:00 PM | Pre-weekend planning |
| Friday | 10:00 AM - 12:00 PM | Weekend planning (avoid after 3 PM — disengaged) |
| Saturday | 9:00 AM - 11:00 AM | Weekend morning browsing |
| Sunday | 10:00 AM - 12:00 PM | Sunday scrollers (avoid evenings) |

### 8.2 SMS Timing Rules

- **Avoid before 9 AM local time** — morning notifications feel intrusive
- **Avoid after 8 PM local time** — evening notifications feel personal
- **Weekends are fine but keep them short** — weekend SMS should be quick hits, not multi-message
- **Holiday exceptions:** BFCM, Christmas Eve, and shipping deadlines are different rules — SMS is expected
- **Use Klaviyo Smart Send Time** for automated flows (sends at each recipient's optimal time based on past engagement)

### 8.3 Timezone Handling

- Collect timezone data at signup (via browser detect or profile field)
- Use SMS quiet hours in Klaviyo to respect local timezone
- For national brands, schedule sends for peak hours across EST, CST, MST, PST
- Avoid "half the country gets it at 5 AM" scheduling errors

---

## 9. SMS Performance Benchmarks

### 9.1 Industry Benchmarks (e-Commerce SMS)

| Metric | Good | Great | Excellent |
|--------|------|-------|-----------|
| Open/read rate | 80%+ | 90%+ | 95%+ |
| Click-through rate (CTR) | 3-5% | 5-10% | 10-15%+ |
| Conversion rate | 1-3% | 3-5% | 5-8%+ |
| Opt-out rate | < 1% | < 0.5% | < 0.25% |
| Revenue per SMS (RPS) | $0.10-0.30 | $0.30-0.60 | $0.60-1.00+ |
| Attributed revenue / send | Varies by list size | 3-5x cost | 10x+ cost |

### 9.2 What Impacts SMS Performance

| Factor | Impact | Optimization |
|--------|--------|-------------|
| Send frequency | Higher frequency = higher opt-out rate | 4-8 SMS per month is the sweet spot |
| Time of day | Afternoon sends outperform morning | 12 PM - 3 PM local is optimal |
| Personalization | [First Name] = 10-20% higher CTR | Use but don't overuse |
| Emojis | +5-10% CTR when used appropriately | Test emoji vs no-emoji |
| Link placement | End of message = highest CTR | Always put link last |
| Urgency | Time-limited offers = 2-3x CTR | Use "ends tonight", "only X left" |
| Day of week | Tuesday-Thursday > Monday/Friday | Schedule mid-week for promotional sends |

### 9.3 Benchmark Tracking Template

Track SMS performance in a monthly dashboard:

| Campaign | Sent | Delivered | CTR | Conversion | Revenue | Opt-Outs | RPS |
|----------|------|-----------|-----|------------|---------|----------|-----|
| [Date] | [N] | [N] | [%] | [%] | [$] | [N] | [$] |
| Total | [N] | [N] | [%] | [%] | [$] | [N] | [$] |

---

## 10. SMS List Growth

### 10.1 SMS Opt-In Channels

| Channel | Typical Opt-In Rate | Cost | Quality |
|---------|---------------------|------|---------|
| Checkout SMS toggle | 15-30% | Free | High (buyers are warm) |
| Post-purchase email CTA | 5-10% | Free | High (existing customers) |
| Pop-up/banner signup | 2-5% | Free | Medium (general traffic) |
| Keyword campaign (Text JOIN) | 1-3% | Medium (promotion cost) | Medium |
| Landing page dedicated signup | 10-20% | Medium (ad cost) | Medium |
| In-store tablet/kiosk | 20-40% | High (hardware) | Very high (in-person) |
| SMS-only discount offer | 5-15% | Cost of discount | High (incentivized) |

### 10.2 Best Practices for SMS List Growth

- **Make opt-in obvious.** Don't hide the SMS checkbox. Make it a clear, visible toggle.
- **Set expectations upfront.** Tell subscribers what they'll receive and how often. "Get text alerts for flash sales, VIP early access, and shipping updates (2-5 texts/month)."
- **Offer a compelling incentive.** First-time SMS subscribers need a reason to give their phone number. "Get 15% off your next order when you sign up for texts."
- **Use multi-channel promotion.** Promote SMS in welcome emails, on social media, at checkout, and on your website.
- **Segment new SMS subs.** Create a dedicated SMS welcome flow that delivers on the promise immediately.
- **Prune inactive subscribers.** Remove SMS subscribers who haven't engaged in 60 days — they increase costs and don't convert.

### 10.3 SMS Welcome Flow

1. **Immediate:** Confirmation — "You're in! Here's 15% off: [CODE]. Reply STOP to opt out."
2. **Day 1:** First offer — "Hey! Check out our bestsellers: [LINK]"
3. **Day 7:** Education — "Pro tip: [quick tip about the product]"
4. **Day 14:** Second offer — "Flash sale alert: 24 hours only. Shop: [LINK]"

---

## Verification

After building any SMS campaign or SMS component:

- [ ] SMS copy fits within 160 characters (1 segment)
- [ ] No Unicode characters that would split into multi-segment mode
- [ ] Single CTA per SMS (one link, one instruction)
- [ ] Link is shortened and tracked with UTM parameters
- [ ] "Reply STOP to opt out" included
- [ ] Quiet hours respected (9 PM - 8 AM local)
- [ ] SMS is coordinated with email — different copy, complementary timing
- [ ] Opt-in consent documented for the target segment
- [ ] MMS/SMS decision made correctly (image adds value vs unnecessary cost)
- [ ] Send time optimized for target segment's timezone
- [ ] Performance benchmarks documented for tracking
- [ ] Welcome flow in place for new SMS subscribers
- [ ] Frequency cap within 4-8 SMS per month
- [ ] UTM parameters distinguish SMS from email attribution

---

## 7. copywriting-subject-line-engineering

**Domain:** Copywriting Subject Line Engineering

### SOP: Subject Line Engineering & Preview Text

> The subject line is the gatekeeper of your email's entire ROI. No one reads body copy they never open. This SOP covers the science and craft of writing subject lines and preview text that earn opens across every e-commerce email type.

---

## 1. Why Subject Lines Matter

The subject line is the single most impactful sentence in any email marketing program. It determines whether your email is opened, ignored, or reported as spam. In e-commerce, where subscribers receive 50-100+ promotional emails per week during peak seasons, the subject line is the difference between a sale and obscurity.

**Key statistics:**
- 47% of email recipients open an email based on the subject line alone [OptinMonster — Email Subject Line Statistics (2024)]
- 69% of email recipients report an email as spam based solely on the subject line [Statista — Email Spam Report Statistics (2024)]
- Mobile devices account for 60-70% of email opens — subject lines truncate at ~30-40 characters on mobile
- A 1% improvement in open rate can translate to significant revenue lift at scale

**The open is not the goal — the click is.** But you cannot get a click without an open. Subject line engineering focuses on earning the open while maintaining trust and deliverability.

---

## 2. The 7 Subject Line Formulas

### 2.1 Curiosity Gap

Creates an information void the reader must close. Works best for content-heavy emails, storytelling, and educational content.

**Structure:** Statement that implies missing information + incomplete reveal

**Examples:**
- "You won't believe what just happened..."
- "The one product our CEO couldn't stop talking about"
- "We tried something new — and it worked"
- "The email we almost didn't send"
- "What happened after 10,000 orders"
- "This isn't the email we planned to send"
- "Here's what our customers said when we asked"
- "Why we're doing things differently this year"

**When to use:** Blog/newsletter sends, product launches with a story, brand storytelling emails, post-purchase follow-ups
**When to avoid:** Flash sales, shipping deadline reminders, cart abandonment (clarity trumps curiosity in urgency scenarios)

### 2.2 Direct Benefit

States the value proposition clearly. The reader knows exactly what they get when they open.

**Structure:** Clear value + implied or explicit offer

**Examples:**
- "Get 30% off your next order"
- "Free shipping on everything — today only"
- "Your exclusive 20% off code inside"
- "Save up to $50 on your favorite products"
- "Earn double points on every purchase"
- "Unlock free samples with any order"
- "Members get early access — starting now"
- "Your birthday gift is waiting for you"

**When to use:** Sales campaigns, discount offers, free shipping, loyalty rewards, VIP offers
**When to avoid:** Newsletter/brand storytelling where the value isn't transactional

### 2.3 Urgency/Scarcity

Creates FOMO (Fear Of Missing Out) by implying limited availability or time.

**Structure:** Limited attribute (time/quantity) + consequence of delay

**Examples:**
- "Only 3 left in stock"
- "Sale ends tonight at midnight"
- "Last chance for free shipping"
- "Just in: restocked, going fast"
- "Prices go up tomorrow"
- "Only 50 available — first come, first served"
- "Your cart is about to expire"
- "Flash sale: 4 hours only"

**When to use:** Flash sales, limited drops, cart abandonment, shipping deadlines, restock alerts
**When to avoid:** Every send — urgency fatigue is real. Reserve for genuine time-sensitive offers.

**Urgency vs. Scarcity:**

| Type | Definition | Example |
|------|-----------|---------|
| Urgency | Time-limited offer | "Sale ends at midnight" |
| Scarcity | Quantity-limited availability | "Only 5 left in stock" |
| Hybrid | Time + quantity | "Last 10 units — sale ends tonight" |

### 2.4 Personalization

Uses subscriber data to make the subject line feel individually crafted.

**Structure:** [Data point] + [relevant message]

**Examples:**
- "Ayoub, your cart is waiting"
- "Sarah, we picked these just for you"
- "Austin, your order has shipped"
- "Here's your personalized recommendation, Ayoub"
- "We noticed you liked [Product Category], Ayoub"
- "Your rewards points are about to expire"
- "Mike, we saved your favorites"
- "A gift for you [First Name]"

**When to use:** Abandoned cart/checkout, browse abandonment, personalized product recommendations, order confirmations/shipping, loyalty points, birthday emails
**When to avoid:** Over-use — personalization loses power when every email has [First Name]. Reserve for emails where the personalization is genuinely relevant.

### 2.5 Question

Engages the reader by prompting a mental response. Questions work because humans are wired to answer them.

**Structure:** Open-ended or direct question + implied relevance

**Examples:**
- "Still thinking it over?"
- "Ready for your next adventure?"
- "What if you could save 20% without trying?"
- "Need a gift idea?"
- "Forgetting something?"
- "Where does your coffee come from?"
- "What's your skincare routine missing?"
- "Are you getting the most out of your membership?"

**When to use:** Browse abandonment, re-engagement/winback, educational content, blog newsletters, post-purchase upsells
**When to avoid:** Use with care for cold audiences where the question might feel presumptuous

### 2.6 How-To

Positions the email as valuable education. Works especially well for content-driven emails and product education.

**Structure:** "How to" + [desired outcome] + [timeframe/context]

**Examples:**
- "How to double your email revenue"
- "How to style our new collection"
- "How [Product] solved [Problem] — and can for you"
- "How to care for your leather goods"
- "3 ways to wear the same dress"
- "How to get the perfect fit every time"
- "How to save $100 on your next order"
- "How we source our ingredients (and why it matters)"

**When to use:** Blog/newsletter, product education, UGC/customer stories, onboarding sequences
**When to avoid:** Pure transactional emails (receipts, shipping confirmations) where the reader needs clarity, not education

### 2.7 Social Proof

Leverages the behavior of others to drive action. Works on the principle that people follow the crowd.

**Structure:** [Number] of [people] + [action] + [timeframe/relevance]

**Examples:**
- "10,000 people bought this last week"
- "Join 50,000+ happy customers"
- "Rated 4.8 stars by our community"
- "See why everyone is switching to [Brand]"
- "As seen in Vogue, Forbes, and GQ"
- "Over 1 million orders shipped"
- "The best-selling product of the year"
- "What 500 customers said about our new formula"

**When to use:** Bestseller campaigns, testimonial-based emails, review request emails, product launches with strong reviews
**When to avoid:** If your brand is new and doesn't have meaningful social proof numbers yet

---

## 3. Preview Text Optimization

Preview text (also called preheader text) appears right after the subject line in most email clients. It functions as the "second subject line" and is often overlooked.

### 3.1 Why Preview Text Matters

- 24% of email opens are influenced by preview text [Litmus Email Analytics]
- Apple Mail, Gmail, and Outlook all display preview text prominently
- On mobile, preview text often gets more visual space than the subject line
- A blank or auto-generated preview text ("View this email in your browser") is a wasted opportunity

### 3.2 Preview Text Best Practices

**Length optimization:**
- Desktop displays ~90-140 characters of preview text
- Mobile displays ~30-50 characters before truncation
- Lead with the most critical information in the first 40 characters

**Content strategies:**

| Strategy | Description | Example |
|----------|-------------|---------|
| Complement | Expand on subject line without repeating it | SL: "Your cart is waiting" / PT: "Complete your order — 10% off ends soon" |
| Urgency add | Add time/quantity pressure | SL: "New arrivals just dropped" / PT: "Exclusive early access ends in 24 hours" |
| Benefit reinforce | Restate the value | SL: "Members get early access" / PT: "Shop before everyone else — 30% off" |
| Curiosity tease | Hint at content inside | SL: "We did something new" / PT: "Our biggest product launch of the year is here" |
| Social proof | Add credibility | SL: "Best sellers are back" / PT: "See why 10,000 customers gave these 5 stars" |

**Technical implementation in Klaviyo:**
- Set custom preview text in each email's header settings
- Do not leave it blank (ESP auto-pulls first line of body copy)
- Include a space character fallback for the preview text block to prevent body text from appearing

### 3.3 Preview Text Common Mistakes

- **Repeating the subject line** — Wastes valuable real estate
- **Auto-populated text** — "View this in your browser" or "Email not displaying correctly?" says nothing about your offer
- **Cutting off mid-sentence** — When truncated, incomplete sentences look unprofessional
- **Spammy language** — Preview text is scanned by spam filters too
- **No preview text at all** — Biggest missed opportunity in email marketing

---

## 4. Emoji Strategy

Emojis in subject lines can boost open rates by 2-5% on average when used appropriately, but they can also hurt deliverability and brand perception when misused.

### 4.1 When to Use Emojis

- **Flash sales and urgency:** 🚨 ⏰ 🔥 💥 — Signal time-sensitivity effectively
- **Celebratory campaigns:** 🎉 🎊 🎁 🥳 — Launches, milestones, holidays
- **Product categories:** 👗 Shoes / 💄 Beauty / 🏋️ Fitness — Visual shorthand
- **Seasonal/Holiday:** 🎃 Christmas 🎄 New Year 🎆 Valentine's Day ❤️
- **Cart/checkout:** 🛒 🛍️ — Visual reminder of abandoned items

### 4.2 When to Avoid Emojis

- **B2B or luxury brands** where emojis undermine sophistication
- **Transactional emails** (receipts, shipping confirmations) — clarity over personality
- **High-sensitivity sends** (complaint response, account security) — adds unprofessional tone
- **Overuse** — More than 2 emojis per subject line decreases open rates

### 4.3 Platform-Specific Behavior

| Platform | Emoji Rendering | Notes |
|-----------|----------------|-------|
| iOS Mail | Full-color native | Emojis render beautifully |
| Gmail Web | Limited set | Newer emojis may show as blank squares |
| Gmail Mobile | Good support | Test before sending to mobile-heavy segments |
| Outlook Desktop | Black & white | Emojis convert to monochrome — test rendering |
| Samsung Mail | Mixed | Some emojis render differently on Samsung devices |

### 4.4 Emoji Best Practices

- Use a leading space before and after the emoji for readability
- Test on all major clients before sending to large segments
- Never use emojis as replacements for letters in words (looks spammy)
- Match emoji tone to brand voice (🎉 for celebratory brands, 🔥 for edgy brands)
- Use emojis in preview text too — but less is more
- Avoid skin-tone modifier emojis (subject line rendering is inconsistent)

---

## 5. Length Optimization

Subject line length directly impacts open rates through truncation, especially on mobile.

### 5.1 Character Limits by Client

| Client | Visible Characters | Truncation Behavior |
|--------|-------------------|---------------------|
| iPhone (portrait) | ~30-35 characters | Truncated with "..." |
| iPhone (landscape) | ~50-60 characters | Truncated with "..." |
| Gmail Mobile | ~40-45 characters | Truncated with "..." |
| Gmail Desktop | ~60-70 characters | Cross-fade truncation |
| Outlook Desktop | ~50-55 characters | Cropped at pixel width |
| Apple Mail Desktop | ~65-75 characters | Wraps to second line |

### 5.2 Optimal Subject Line Length

**The sweet spot: 30-50 characters (including spaces)**

- Under 30 characters: High readability but limited space for messaging
- 30-50 characters: Optimal for mobile and desktop
- 50-70 characters: Fine for desktop-heavy segments, risky for mobile-heavy
- 70+ characters: Almost always truncated on mobile — lead with key information in the first 40 characters

### 5.3 Length Rules

**The inverted pyramid rule:** Put the most compelling information in the first 30 characters. Assume the rest will be truncated on mobile.

- Lead with the hook — discount, benefit, or curiosity
- Put personalization ([First Name]) early in high-personalization sends
- Keep prepositions and filler words to a minimum
- If long subject lines test better for your audience, keep the key message in the first 40 characters regardless

---

## 6. A/B Testing Subject Lines

Testing is the only way to know what works for your specific audience.

### 6.1 Minimum Sample Size

| Segment Size | Test Percentage | Minimum Per Variant |
|-------------|----------------|-------------------|
| < 5,000 | 50% test / 50% holdout | 500 per variant minimum |
| 5,000 - 50,000 | 20-30% test | 1,500 per variant |
| 50,000 - 500,000 | 10-15% test | 5,000 per variant |
| 500,000+ | 5-10% test | 10,000 per variant |

### 6.2 Test Duration

- Let A/B tests run for at least 4-6 hours after both variants have been deployed
- Do not declare a winner before at least 100 opens per variant
- For sends under 10,000, let the test run to full completion (unlikely to reach statistical significance)
- Klaviyo auto-selects a winner after 4-6 hours by default — this is generally sufficient

### 6.3 What to Test

| Element | What to Vary | Example |
|---------|-------------|---------|
| Formula | Different formula types | Curiosity vs. Direct Benefit |
| Personalization | With/without [First Name] | "Your cart" vs. "Ayoub, your cart" |
| Emoji | Emoji vs. no emoji | "🔥 Flash sale" vs. "Flash sale" |
| Urgency level | Soft vs. hard urgency | "Last chance" vs. "Ends tonight" |
| Length | Short vs. long | "20% off" vs. "Your exclusive 20% off is waiting" |
| Case | Title case vs. sentence case | "New Arrivals Are Here" vs. "New arrivals are here" |
| Promise type | Benefit vs. curiosity | "50% off sale" vs. "You won't believe these prices" |

### 6.4 Test Documentation

Record every A/B test in a shared tracking sheet or CRM with:

- Date sent
- Segment tested
- Variant A subject line
- Variant B subject line
- Winning variant
- Open rate difference
- Winner declared (statistically significant Y/N)
- Notes on unexpected behavior

---

## 7. Spam Trigger Words to Avoid

Subject lines containing spam trigger words can land emails in the promotions tab or spam folder.

### 7.1 High-Risk Words and Phrases

**ALL CAPS words that trigger filters:**
- FREE
- ACT NOW
- LIMITED TIME
- BUY NOW
- DON'T DELETE
- EXCLUSIVE OFFER
- GUARANTEE
- THIS IS NOT SPAM
- CLICK HERE
- ORDER NOW

**Punctuation patterns:**
- Multiple exclamation marks (!!!)
- Multiple question marks (???)
- Excessive dollar signs ($$$)
- Redundant capitalization

### 7.2 Safe Alternatives

| Risky Phrase | Safer Alternative |
|-------------|-------------------|
| FREE | "On us" / "Complimentary" / "No charge" |
| BUY NOW | "Shop the collection" / "Browse bestsellers" |
| LIMITED TIME | "While supplies last" / "Don't miss out" |
| ACT NOW | "Join in" / "Check it out" |
| CLICK HERE | "Explore" / "See the collection" / "Learn more" |
| GUARANTEED | "Backed by our promise" / "Protected" |

### 7.3 Best Practices to Avoid Spam Filters

- Use sentence case (not ALL CAPS) in subject lines
- Keep exclamation marks to one maximum per subject line
- Avoid special characters that trigger filters: $, %, ®, ©, ™
- Test subject lines through a spam-check tool (Mail-Tester, GlockApps) before large sends
- Segment regularly to maintain high engagement rates (spam complaints from disengaged subscribers hurt deliverability more than any single word)

---

## 8. Subject Line Swipe File — 50+ Proven Examples by Category

### 8.1 Welcome/Onboarding
- "Welcome to [Brand]!"
- "Your exclusive discount is waiting"
- "Nice to meet you, [First Name]"
- "Here's a little something for you"
- "Thanks for joining us!"
- "You're in! Here's what's next"
- "Let's get started, [First Name]"
- "The beginning of something beautiful"

### 8.2 Abandoned Cart/Checkout
- "Did you forget something?"
- "[First Name], your cart is waiting"
- "Still thinking it over?"
- "Don't let your favorites get away"
- "We saved your cart for you"
- "Last chance to complete your order"
- "Your items are selling fast"
- "A little nudge about your cart"

### 8.3 Flash Sales & Promotions
- "⚡ Flash sale — 30% off everything"
- "Just dropped: our biggest sale of the year"
- "Last day for 25% off"
- "Private sale: your link inside"
- "Today only: free shipping"
- "🚨 Alert: prices just dropped"
- "Members get early access — starting now"
- "Final hours: don't miss 40% off"

### 8.4 Product Launches
- "Meet the new [Product Name]"
- "Introducing our most-requested product"
- "It's finally here"
- "You asked, we created"
- "The wait is over"
- "New drop: available now"
- "Something new just landed"
- "Behind the scenes of our latest launch"

### 8.5 Bestsellers/Social Proof
- "Everyone's buying this right now"
- "Our best-selling product just got better"
- "Rated 5 stars by our customers"
- "Why 10,000+ people chose [Brand]"
- "The bestseller you need to try"
- "Join our happy customer family"
- "Top-rated: see the reviews"
- "As seen in [Press/Pub]"

### 8.6 Holiday/Seasonal
- "Happy holidays from [Brand]!"
- "Your holiday gift guide is live"
- "Last day for Christmas delivery"
- "🎁 The perfect gift is inside"
- "New Year, new you — 20% off"
- "Valentine's Day: shop gifts they'll love"
- "Summer sale starts now"
- "Back to school essentials"

### 8.7 Shipping/Milestone
- "Your order is on its way! 🚚"
- "It's shipped!"
- "Your order has arrived"
- "We sent you something"
- "Thank you for your order"
- "Your [Brand] journey begins here"

### 8.8 Winback/Re-Engagement
- "We miss you, [First Name]"
- "It's been a while..."
- "Come back — your discount is waiting"
- "We have something special for you"
- "Is this goodbye?"
- "We thought you forgot about us"
- "Last chance to reconnect"
- "You're not seeing our best emails"

### 8.9 VIP/Loyalty
- "You're invited: early access"
- "Exclusive: just for VIPs"
- "Thank you for your loyalty"
- "VIPs get first dibs"
- "Your rewards are ready"
- "Double points — just for you"
- "Private sale: VIP access only"
- "🎟️ Your VIP code inside"

### 8.10 Review/UGC
- "How was your [Product]?"
- "We'd love your feedback"
- "Share your [Brand] story"
- "Tell us what you think"
- "You could be featured"
- "Send us your photos"
- "Your review helps others"
- "Rate your purchase"

---

## 9. Seasonal/Holiday Subject Line Templates

### 9.1 Black Friday/Cyber Monday
- "[X]% off — our lowest prices of the year"
- "BFCM starts NOW"
- "Black Friday doors open at [TIME]"
- "VIP early access: BFCM starts early"
- "24 hours only: our Black Friday deal"
- "Cyber Monday: deals you can't miss"
- "Final hours: BFCM ends at midnight"
- "Everything you need to know about BFCM"

### 9.2 Christmas/Holiday
- "Our gift to you: [X]% off"
- "Shipping deadlines are approaching"
- "The holiday gift guide is here"
- "Still shopping? We've got you"
- "Last minute gifts (we'll ship fast)"
- "Merry Christmas from [Brand]"
- "How to: stress-free holiday shopping"
- "🎁 It's not too late for gifts"

### 9.3 Valentine's Day
- "Perfect gifts for your Valentine"
- "Treat yourself this Valentine's Day"
- "💘 Love is in the air"
- "Gifts they'll actually love"
- "Last call for Valentine's delivery"
- "Self-love: you deserve it"
- "Romance starts here"
- "Valentine's Day essentials"

### 9.4 Back to School
- "Back to school: [X]% off everything"
- "Get ready for the school year"
- "Back to school essentials"
- "Your back-to-school checklist"
- "Grades don't matter. Style does."
- "School supplies, upgraded"
- "Fresh start, fresh look"
- "Class dismissed — shop now"

### 9.5 Summer
- "Summer sale starts now ☀️"
- "Your summer essentials kit"
- "Beat the heat with [X]% off"
- "Summer travel must-haves"
- "The summer collection is here"
- "Sun's out, deals out"
- "Vacation mode: ON"
- "Last call for summer savings"

---

## Verification

After drafting subject lines and preview text for any campaign:

- [ ] Subject line follows one of the 7 formulas
- [ ] Subject line is under 50 characters (mobile-safe)
- [ ] Key message is in the first 30 characters
- [ ] Preview text is custom-written (not auto-populated)
- [ ] Preview text adds information (doesn't repeat subject line)
- [ ] No spam trigger words in ALL CAPS
- [ ] Emojis (if used) are tested on Gmail + Outlook + iOS
- [ ] A/B test variants are defined (minimum 2)
- [ ] Variants test different formulas, not just different words
- [ ] Subject line passed spam-check test
- [ ] Mobile preview confirmed no truncation of key message
- [ ] Segment-appropriate: urgency for flash sales, curiosity for content, benefit for offers

---

## 8. segmentation-list-health

**Domain:** Segmentation: List Health

### SOP: List Health & Data Quality

## Purpose

Your email list is a living asset. It grows, decays, and requires constant attention. Without systematic health monitoring, every list trends toward decay — subscribers churn, engagement drops, and sender reputation erodes. This SOP defines the quantitative metrics that measure list health, the data quality checks that maintain list integrity, and the monthly ritual that keeps everything on track.

This SOP is the third layer of the segmentation framework. The first ([[SOP-segmentation-strategy-framework]]) defines what segments to build. The second ([[SOP-segmentation-rfm-predictive]]) defines how to score and target customers. This one defines how to measure whether the list itself is healthy.

**Note:** For the comprehensive deliverability-side hygiene process (bounce rate, spam complaints, verification API integration, bot detection, disposable domain blocking), see [[SOP-deliverability-list-hygiene]]. This SOP focuses on the quantitative health metrics and the monthly operational ritual.

---

## Section 1: List Growth Rate

### How to Calculate

List growth rate measures how fast your email list is expanding from new subscribers.

**Formula:**
```
List Growth Rate = (New Subscribers in Period) / (Total List Size at Start of Period) × 100
```

**Example:**
- Start of month: 50,000 subscribers
- New subscribers this month: 2,500
- Growth rate = 2,500 / 50,000 × 100 = 5% monthly growth

**In Klaviyo:**
1. Navigate to Analytics → Email → Subscribers
2. Set timeframe to "Last 30 days"
3. View the "New Subscribers" metric (first value)
4. View the "Total Subscribers" metric (second value)
5. Calculate: `New Subscribers / Total Subscribers × 100`

### Benchmarks

| Growth Rate | Status | Interpretation |
|---|---|---|
| > 5% per month | Excellent | Aggressive list building, high-quality sources |
| 2-5% per month | Good | Healthy organic growth |
| 1-2% per month | Fair | Growing slowly — consider new acquisition channels |
| 0-1% per month | Weak | Net stagnant — list may be shrinking after churn |
| Negative | Critical | Not replacing churned subscribers |

### What to Do If Growth Is Too Low

1. **Audit acquisition channels:** Review signup form placement, pop-up timing, offer strength
2. **Add a new channel:** Launch a quiz, contest, referral program, or lead magnet
3. **Optimize existing forms:** A/B test pop-up timing, headline, offer, number of fields
4. **Check signup flow:** Ensure confirmation emails are sending and landing in inbox (not spam)

---

## Section 2: List Churn Rate

List churn is the rate at which subscribers leave your list. Churn includes unsubscribes, hard bounces, spam complaints, and inactivity (subscribers who stop engaging).

### Components of Churn

**A. Unsubscribes**
The most visible form of churn. A subscriber explicitly opts out.

**Benchmark:** < 0.2% per campaign (industry average: 0.1-0.5%)
**Warning:** > 0.5% per campaign — review content, frequency, or segment relevance

**In Klaviyo:**
Campaign report → Unsubscribe Rate. For flows, check Flow Analytics → Unsubscribe Rate per email.

**B. Hard Bounces**
Email addresses that no longer exist or were invalid at signup. These are automatically suppressed by Klaviyo.

**Benchmark:** < 0.5% per campaign
**Warning:** > 1% — review list acquisition sources
**Critical:** > 2% — pause sends, full audit required

**In Klaviyo:**
Campaign report → Bounce Rate. Deliverability dashboard → Bounce Rate trend.

**C. Spam Complaints**
Subscribers marking email as spam. The most damaging form of churn because it directly impacts sender reputation.

**Benchmark:** < 0.01% per campaign
**Warning:** 0.01-0.03%
**Critical:** > 0.03% — immediate investigation required, possible segment mismatch or content issue

**In Klaviyo:**
Campaign report → Spam Complaint Rate. Google Postmaster Tools → Spam Rate dashboard.

**D. Inactivity Churn**
Subscribers who stop engaging (opening or clicking) but remain on the list. They are not technically unsubscribed but are functionally dead weight.

**Benchmark:** < 15% of list unengaged for 180+ days
**Warning:** 15-25% 
**Critical:** > 25%

**In Klaviyo:**
Segment "Unengaged 180 Days" → count as percentage of total list.

### Churn Rate Calculation

Since inactivity churn is not a single clickable metric, use this simplified calculation:

**Formula:**
```
Active Churn Rate = (Unsubscribes + Hard Bounces + Spam Complaints) / Total Emails Sent × 100
```

**Total Churn Rate (including inactivity):**
```
Total Churn Rate = (Active Churn + Inactivity Churn) / Total List Size
```
Where Inactivity Churn is the number of subscribers who moved from "Engaged" to "Unengaged" in the period.

For practical monthly tracking, use:
```
Monthly Churn Rate = (Unsubscribes this month + Verified Hard Bounces this month) / Total List Size at Start of Month × 100
```

### Benchmarks

| Churn Rate | Status |
|---|---|
| < 1% per month | Excellent |
| 1-2% per month | Good |
| 2-3% per month | Fair |
| > 3% per month | Warning — investigate causes |

---

## Section 3: Net Growth Formula

Net growth accounts for both new subscribers and churn. This is the true measure of list health — a list can add 5,000 new subscribers per month but still shrink if it's losing 6,000 to churn.

### Formula

```
Net Growth = New Subscribers - (Unsubscribes + Hard Bounces + Spam Complaints + Suppressed Profiles)
```

**Net Growth Rate:**
```
Net Growth Rate = Net Growth / Total List Size at Start of Period × 100
```

### Example

| Metric | Value |
|---|---|
| List size (start of month) | 50,000 |
| New subscribers | 2,500 |
| Unsubscribes | 400 |
| Hard bounces | 150 |
| Spam complaints | 25 |
| Suppressed (sunset) | 500 |
| **Net Growth** | **1,425** (2,500 - 1,075) |
| **Net Growth Rate** | **2.85%** |

### Benchmarks

| Net Growth Rate | Status | Implication |
|---|---|---|
| > 3% per month | Excellent | List is growing faster than it's decaying |
| 1-3% per month | Good | Healthy, sustainable growth |
| 0-1% per month | Fair | Barely replacing churn |
| Negative | Critical | List is shrinking — must increase acquisition or reduce churn |

### In Klaviyo

Klaviyo does not display net growth directly. Calculate it manually:

1. Analytics → Email → Subscribers → timeframe "Last 30 days" → note "New Subscribers"
2. Analytics → Email → Unsubscribes → timeframe "Last 30 days" → note "Unsubscribes"
3. Deliverability dashboard → timeframe "Last 30 days" → note "Bounce Rate" and calculate bounces
4. Subtract: New Subscribers - (Unsubscribes + Bounces)

---

## Section 4: Engagement Velocity

Engagement velocity measures whether engagement rates are trending up or down over time. Direction is more important than absolute rate — a 25% open rate that has been climbing for 3 months is healthier than a 35% rate that has been falling for 3 months.

### How to Calculate

**Method: Rolling 30-Day Comparison**

1. Record the trailing 30-day open rate and click rate
2. Compare to the previous 30-day period
3. Calculate the percentage change

**Formula:**
```
Engagement Velocity = (Current Period Rate - Previous Period Rate) / Previous Period Rate × 100
```

**Example:**
- Previous 30 days: open rate = 32%
- Current 30 days: open rate = 35%
- Velocity = (35 - 32) / 32 × 100 = +9.4% (positive velocity)

**In Klaviyo:**
1. Analytics → Email → Engagement
2. Set timeframe to "Last 30 days" → record open rate and click rate
3. Set timeframe to "Previous 30 days" → record open rate and click rate
4. Calculate velocity for both

### Engagement Velocity by Segment

Track velocity separately for each core engagement segment:

| Segment | Healthy Velocity |
|---|---|
| Engaged 30 Days | Stable or increasing |
| Engaged 90 Days | Stable or increasing |
| Engaged 180 Days | Stable |
| Engaged 30 Days as % of total list | Stable or increasing — indicates list is actively engaged, not just growing |

### What Engagement Velocity Tells You

| Pattern | What It Means | Action |
|---|---|---|
| Open rate up, click rate up | Healthy list — quality subscribers | Continue current strategy |
| Open rate up, click rate down | Apple MPP inflation or subject line mismatch | Audit subject lines vs. content; check MPP percentage |
| Open rate down, click rate up | More targeted sends hitting the right audience | Good — consider reducing sends to unengaged segments |
| Both rates down | List fatigue or poor segmentation | Reduce frequency, re-engage unengaged segments, verify segment definitions |
| All segments declining simultaneously | Sender reputation issue | Initiate deliverability audit (see [[SOP-deliverability-audit-monitoring]]) |

---

## Section 5: List-to-Revenue Ratio

Revenue per subscriber measures the monetary value of the list as a business asset.

### Formula

```
Revenue Per Subscriber (Monthly) = Total Email-Attributed Revenue (30 days) / Total List Size
```

**Alternative (per campaign):**
```
Revenue Per Email Sent = Total Revenue from Campaign / Total Emails Sent
```

**Annual Revenue Per Subscriber:**
```
Annual Revenue Per Subscriber = Total Email-Attributed Revenue (12 months) / Average Monthly List Size
```

### Benchmarks

| Revenue Per Subscriber (Monthly) | Status | Notes |
|---|---|---|
| > $1.00 | Excellent | Strong program, likely premium brand or high conversion rate |
| $0.50 - $1.00 | Good | Healthy program |
| $0.20 - $0.50 | Fair | Room for optimization |
| < $0.20 | Weak | Review segmentation, content, offers, deliverability |

**Note:** Benchmarks vary significantly by industry, AOV, and email program maturity. Compare against your brand's historical performance, not industry averages.

### In Klaviyo

1. Navigate to Analytics → Revenue → Email → "Revenue Attributed to Email"
2. Set timeframe to "Last 30 days"
3. Divide by current total list size

### What to Do If Revenue Per Subscriber Is Low

1. **Check deliverability:** Low inbox placement = low reach = low revenue (see [[SOP-deliverability-audit-monitoring]])
2. **Check segmentation:** Are you sending to unengaged subscribers? That drags down per-subscriber revenue
3. **Check conversion rate:** Are email clicks converting to purchases?
4. **Check offer strength:** Compare conversion rates by offer type
5. **Check flow performance:** Flows typically generate 40-60% of email revenue — underperforming flows are the largest hidden revenue leak

---

## Section 6: Data Quality Checks

Data quality determines whether your segments, personalization, and analytics are trustworthy. Garbage in, garbage out.

### Check 1: Duplicate Emails

**Problem:** Same email address appears multiple times in the list. This inflates list size, skews engagement metrics, and can cause double-sends.

**In Klaviyo:**
Klaviyo does not allow true duplicates by default — it updates existing profiles. However, duplicate profiles can exist if the same person has multiple Klaviyo profiles (different email variations, misspellings).

**Detection:**
1. Export full list: Klaviyo → Lists → [Your List] → Actions → Export
2. Open in Excel → Sort by email → Check for duplicates using Conditional Formatting → Highlight Cell Rules → Duplicate Values

**Fix:**
- Merge duplicate profiles manually in Klaviyo (Profiles → search for email → Merge)
- Prevent future duplicates by ensuring all signup forms use the same email validation

**Benchmark:** 0 duplicates in active profiles

### Check 2: Invalid Emails (Hard Bounces)

**Problem:** Email addresses that do not exist. They accumulate from typos, abandoned domains, and bot signups.

**Detection:**
Klaviyo tracks hard bounces automatically. Profiles with multiple hard bounces are suppressed.

**Review:**
1. Klaviyo → Lists → Suppressed → Bounced
2. Review suppression count → if > 2% of total list, run verification on recent signups

**Benchmark:** < 1% of total list in hard bounce suppression

**Fix:**
- Enable real-time email verification at signup (ZeroBounce, NeverBounce, Kickbox integration)
- Segment by `$source` to identify which acquisition channel produces the most bounces
- Suppress or pause high-bounce channels

### Check 3: Incomplete Profiles (Missing Names, Locations)

**Problem:** Profiles missing key personalization fields ($first_name, location, custom properties). This degrades personalization quality and limits segmentation.

**Detection:**
1. Klaviyo → Segments → Create Segment
2. Condition: "$first_name" → "is not set"
3. Count the segment size

**Benchmark:** < 10% of list missing first name; < 30% missing location

**Fix:**
- Add first name field to all signup forms (make it required, not optional)
- Run a "complete your profile" campaign offering an incentive for filling in missing data
- For location data, enable Klaviyo's IP-based location detection

### Check 4: Stale Data (No Update in 12+ Months)

**Problem:** Profiles that have been on the list for 12+ months with zero engagement. These are likely abandoned inboxes or dead profiles.

**Detection:**
1. Klaviyo → Segments → Create Segment
2. Condition: "Was Added" earlier than "12 months ago"
3. Condition with AND: "Opened Email" = 0 times in the last 12 months
4. Condition with AND: "Clicked Email" = 0 times in the last 12 months
5. Condition with AND: "Placed Order" = 0 times in the last 12 months

**Benchmark:** < 5% of list is stale (12+ months, zero engagement)

**Fix:**
- Run a one-time re-engagement campaign to stale profiles
- Suppress all profiles that do not respond
- If > 10% of list is stale, initiate a full list cleanup using [[SOP-deliverability-list-hygiene]]

---

## Section 7: Suppression List Management

### Who to Suppress

The following profiles must be suppressed from all campaign and flow sends:

| Suppression Type | Source | Impact if Not Suppressed |
|---|---|---|
| Unsubscribed | Klaviyo-native (user clicks unsubscribe) | Legal violation (CAN-SPAM, GDPR), spam complaints |
| Hard Bounced | Klaviyo-native (email invalid) | Damages sender reputation, increases bounce rate |
| Spam Complaint | Klaviyo-native (user marks as spam) | Severely damages sender reputation, ESP may blacklist |
| Unengaged 180+ Days | Klaviyo segment (no open/click in 180+ days) | Drags down engagement metrics, reputation decay |
| Suppressed by Sunset Flow | Sunset flow tag (`unengaged = True`) | Continued sends damage reputation |
| Bot Profiles | Bot detection flows (`is_bot = True`) | Skews analytics, never convert, waste sends |
| Role Accounts | Manual segment (admin@, info@, sales@) | Low engagement, high complaint risk |

### When to Suppress vs. When to Sunset

The key distinction: suppression is immediate and permanent; sunset is a process with a recovery opportunity.

| Scenario | Action | Why |
|---|---|---|
| Profile unsubscribes | **Suppress immediately** | Legal obligation |
| Profile hard bounces | **Suppress immediately** | Invalid address — no recovery possible |
| Profile marks as spam | **Suppress immediately** | Reputation risk — re-sending to a spam complainer is dangerous |
| Profile has not engaged in 90 days | **Enter winback flow** | Still within recovery window — a good offer may re-engage them |
| Profile has not engaged in 120-180 days | **Enter sunset flow** | Final recovery attempt before suppression |
| Profile completes sunset flow without re-engaging | **Suppress permanently** | Two attempts made — time to clean the list |
| Profile shows bot behavior | **Suppress immediately** | Not a real person — no recovery possible |

### How Suppression Affects Deliverability

Suppression is not just a list-cleaning exercise — it directly impacts inbox placement.

**Mechanism:**
Email service providers (Google, Microsoft, Yahoo) monitor how your recipients react. When you send to unengaged subscribers:
- They do not open → low engagement rate → ESPs infer your email is not relevant
- They delete without reading → ESPs infer your email is unwanted
- They mark as spam → ESPs infer your email is spam

**Result:** Your emails start landing in the promotions tab, then spam, then are blocked entirely.

**The Math:**
- List of 100,000 with 40% unengaged = 40,000 negative signals per send
- Even if 60,000 are highly engaged and opening, the 40,000 unengaged drag the aggregate engagement rate below ESP thresholds
- The solution is not better content — it is better list management

**Rule of Thumb:**
- Every campaign should exclude: unsubscribed + bounced + spam complained + 180+ days unengaged + bot-tagged profiles
- For deliverability-challenged domains, send only to 30-Day Engaged segment until reputation recovers

---

## Section 8: Monthly List Health Ritual

Execute this ritual on the 1st of every month. Document results in the brand's deliverability dashboard or audit document.

### Step 1: Calculate Growth Metrics (15 min)

- [ ] Pull new subscribers for last 30 days (Klaviyo Analytics → Email → Subscribers)
- [ ] Pull total list size
- [ ] Calculate monthly growth rate
- [ ] Compare to benchmark and previous month
- [ ] **Record:** Growth rate, total new subscribers, trend (up/down/flat)

### Step 2: Calculate Churn Metrics (15 min)

- [ ] Pull unsubscribes for last 30 days
- [ ] Pull hard bounces for last 30 days (Deliverability dashboard)
- [ ] Pull spam complaints for last 30 days
- [ ] Pull unengaged 180+ day segment count
- [ ] Calculate active churn rate and total churn rate (including inactivity)
- [ ] **Record:** Churn rate, components, trend

### Step 3: Calculate Net Growth (5 min)

- [ ] Net Growth = New Subscribers - (Unsubscribes + Bounces + Spam Complaints + Sunset Suppressions)
- [ ] Net Growth Rate = Net Growth / Starting List Size × 100
- [ ] **Record:** Net growth count, net growth rate, trend

### Step 4: Check Engagement Velocity (10 min)

- [ ] Pull trailing 30-day open rate
- [ ] Pull previous period open rate
- [ ] Calculate velocity % change
- [ ] Repeat for click rate
- [ ] Repeat for each core engagement segment
- [ ] **Record:** Open rate velocity, click rate velocity, segment-level velocities

### Step 5: Calculate Revenue Per Subscriber (5 min)

- [ ] Pull email-attributed revenue for last 30 days
- [ ] Divide by total list size
- [ ] **Record:** Revenue per subscriber, trend

### Step 6: Run Data Quality Checks (15 min)

- [ ] Check for duplicate emails (export + Excel)
- [ ] Check hard bounce suppression count
- [ ] Check incomplete profiles count (missing first name)
- [ ] Check stale data count (12+ months, no engagement, no purchase)
- [ ] **Record:** Duplicate count, invalid email %, incomplete profile %, stale profile %

### Step 7: Review Suppression Lists (5 min)

- [ ] Verify suppression lists are current and active
- [ ] Check sunset flow has processed profiles in last 30 days
- [ ] Check bot detection flows are running
- [ ] Verify all campaign "Don't send to" lists include master suppression segment
- [ ] **Record:** Suppression list sizes, sunset flow activity

### Step 8: Generate Summary and Action Items (10 min)

- [ ] Compare all metrics against benchmarks
- [ ] Note any metric in Warning or Critical territory
- [ ] Create action items for any underperforming metric
- [ ] Assign owner and deadline for each action item
- [ ] **Record:** Summary, action items, owner, deadline

---

## Section 9: List Health Dashboard

### Weekly Dashboard (Quick Check — 10 min)

Track these metrics every Monday:

| Metric | Target | Check |
|---|---|---|
| Last campaign open rate | > 30% | [ ] |
| Last campaign click rate | > 3% | [ ] |
| Last campaign bounce rate | < 0.5% | [ ] |
| Last campaign spam complaint rate | < 0.01% | [ ] |
| Unengaged 180+ segment % | < 20% of total list | [ ] |
| Sunset flow status | Active (processed profiles this week) | [ ] |

### Monthly Dashboard (Full Check — 1-2 hours)

| Category | Metric | Target | Current | Status |
|---|---|---|---|---|
| **Growth** | Monthly Growth Rate | > 2% | [ ] | [ ] |
| **Growth** | New Subscribers | > Last month | [ ] | [ ] |
| **Churn** | Active Churn Rate | < 2% | [ ] | [ ] |
| **Churn** | Unsubscribe Rate (avg) | < 0.2% per campaign | [ ] | [ ] |
| **Net Growth** | Net Growth Rate | > 1% | [ ] | [ ] |
| **Engagement** | Open Rate (30d trailing) | > 35% | [ ] | [ ] |
| **Engagement** | Click Rate (30d trailing) | > 3% | [ ] | [ ] |
| **Engagement** | Engaged 30d as % of list | > 25% | [ ] | [ ] |
| **Revenue** | Revenue per Subscriber (monthly) | > $0.50 | [ ] | [ ] |
| **Data Quality** | Incomplete Profiles (% missing name) | < 10% | [ ] | [ ] |
| **Data Quality** | Stale Profiles (12mo inactive) | < 5% | [ ] | [ ] |
| **Suppression** | Master Suppression active | Yes | [ ] | [ ] |
| **Suppression** | Sunset flow processed this month | Yes | [ ] | [ ] |

### Quarterly Dashboard (Deep Dive — 3-4 hours)

Includes everything in the monthly dashboard plus:

| Category | Metric | Target |
|---|---|---|
| **Acquisition** | New subscribers by source | Each source has quality above threshold |
| **Acquisition** | Cost per new subscriber (CPS) | Decreasing or stable |
| **RFM** | Persona distribution | Champions > 2%, Lost < 20% |
| **Predictive** | High CLV + Low Engagement | < 5% of active customers |
| **Predictive** | High Churn Risk + Recent Purchase | < 10% of new customers |
| **Zero-Party** | Profiles with zero-party data | > 20% of total list |
| **Data Quality** | Full profile completeness score | > 80% |

---

## Completion Checklist

- [ ] List growth rate calculated and benchmarked
- [ ] List churn rate calculated with all components
- [ ] Net growth rate calculated
- [ ] Engagement velocity measured (open rate and click rate trend)
- [ ] Revenue per subscriber calculated
- [ ] Data quality checks complete (duplicates, invalid emails, incomplete profiles, stale data)
- [ ] Suppression lists reviewed and verified active
- [ ] Monthly ritual executed and documented
- [ ] Weekly and monthly dashboard up to date
- [ ] Action items created for any metrics in Warning or Critical territory

## Error Recovery

| Error | Symptom | Root Cause | Fix |
|---|---|---|---|
| Net growth negative for 3+ months | List shrinking despite active acquisition | Churn exceeds new subscriber rate | Audit churn sources. Increase acquisition by 2x. Reduce sends to unengaged segments to lower inactivity churn. |
| Revenue per subscriber dropping | Per-subscriber revenue declining month-over-month | New subscribers converting at lower rate or engagement dropping | Check new subscriber conversion rate. Verify engagement metrics for recent cohorts. Review flow performance. |
| Incomplete profiles > 20% | Most profiles missing first name or location | Signup forms not collecting data, or historical data gaps | Add required fields to signup forms. Run a "complete your profile" campaign. Suppress profiles with no name and no purchase history. |
| Stale profiles > 10% of list | 12+ month inactive profiles accumulating | No sunset flow active, or sunset flow not aggressive enough | Activate or strengthen sunset flow. Reduce sunset window to 90 days. Purge 12+ month inactive profiles immediately. |
| Growth rate positive but net growth negative | Adding many subscribers but losing more | Low-quality acquisition channels (contest entries, poorly targeted ads) | Audit $source data. Pause high-churn channels. Implement double opt-in on low-quality sources. |

## Maintenance

- **Weekly dashboard:** Every Monday — 10-minute quick check (6 metrics)
- **Monthly ritual:** 1st of each month — full metrics calculation and review
- **Quarterly deep dive:** Every 3 months — comprehensive dashboard with RFM, predictive, zero-party analysis
- **Data quality cleanup:** Monthly — run all 4 data quality checks and fix issues
- **Suppression audit:** Monthly — verify suppression lists active, sunset flow processing
- **Benchmark refresh:** Every 6 months — update benchmark targets based on program maturity

## Version History

| Version | Date | Changes |
|---|---|---|
| 1.0.0 | 2026-05-04 | Initial creation — list health metrics (growth rate, churn rate, net growth, engagement velocity, revenue per subscriber), data quality checks (duplicates, invalid emails, incomplete profiles, stale data), suppression management, monthly ritual, and health dashboard |

## See Also

- [[SOP-segmentation-strategy-framework]] — Core segmentation framework
- [[SOP-segmentation-rfm-predictive]] — RFM analysis and predictive data
- [[SOP-flow-sunset]] — Sunset flow for unengaged subscribers
- [[SOP-deliverability-list-hygiene]] — Comprehensive list hygiene (bounces, spam, verification, bot detection)
- [[SOP-deliverability-audit-monitoring]] — Deliverability audit and monitoring

---

## 9. segmentation-rfm-predictive

**Domain:** Segmentation: RFM & Predictive

### SOP: RFM Analysis & Predictive Data

## Purpose

RFM (Recency, Frequency, Monetary) analysis transforms raw purchase data into actionable customer personas. Combined with Klaviyo's predictive analytics — predicted CLV, churn risk score, and next purchase date — this data layer enables precise targeting that maximizes revenue per profile.

Without RFM, every customer is treated as a single dimension (total spent or order count). With RFM, a high-spend customer who hasn't purchased in 18 months receives different treatment than a high-spend customer who bought last week. The difference in messaging, offers, and timing can multiply response rates by 3-5x.

---

## RFM Explained

RFM scores every customer on three dimensions:

- **Recency (R):** How recently did they purchase? Recent buyers are more responsive and more likely to purchase again.
- **Frequency (F):** How often do they purchase? Frequent buyers are more loyal and have higher lifetime value.
- **Monetary (M):** How much do they spend? High spenders contribute more revenue per transaction.

Each dimension is scored 1 (lowest) to 5 (highest), creating a 3-digit RFM score (e.g., 5-4-3 = purchased recently, frequently, with medium spend). There are 125 possible combinations (5x5x5), grouped into 11 actionable personas.

---

## RFM Scoring Methodology

### Step 1: Export Customer Data from Klaviyo

1. Navigate to Klaviyo → Segments → Create Segment → Customers who have "Placed Order" at least 1 time over all time
2. Save the segment and export it: Actions → Export
3. Open the CSV in Excel or Google Sheets

The export should contain at minimum:
- Email address (unique identifier)
- Last order date (for Recency)
- Total orders count (for Frequency)
- Total revenue summed (for Monetary)

### Step 2: Rank Each Dimension (1-5 Scale)

**Recency Scoring:**
- Sort customers by most recent order date (descending = most recent first)
- Divide into 5 equal quintiles
- Top 20% (most recent) = R score of 5
- Second 20% = R score of 4
- Middle 20% = R score of 3
- Fourth 20% = R score of 2
- Bottom 20% (least recent) = R score of 1

**Frequency Scoring:**
- Sort customers by total order count (descending = most orders first)
- Top 20% (most frequent buyers) = F score of 5
- Continue for all quintiles
- Note: Customers with 1 order will naturally fall into the bottom 1-2 quintiles

**Monetary Scoring:**
- Sort customers by total revenue (descending = highest spend first)
- Top 20% (highest spenders) = M score of 5
- Continue for all quintiles

### Step 3: Combine Scores

For each customer, combine R, F, and M scores into a 3-digit code (e.g., R=5, F=4, M=5 = "545").

---

## RFM Matrix: Persona Mapping

The 125 possible RFM combinations are grouped into 11 personas. Each persona has a defined response strategy.

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

When planning campaigns, prioritize personas in this order:

1. **Champions** — highest response rate, lowest discount sensitivity
2. **Loyal Customers** — reliable responders, good upsell candidates
3. **Need Attention** — moderate value, need the most strategic push
4. **At Risk / Cannot Lose Them** — urgent, high-value, time-sensitive
5. **Potential Loyalists / Promising / New Customers** — building for the future
6. **About to Sleep / Hibernating** — one-shot winback before sunset
7. **Lost** — excluded from all campaigns

---

## How to Calculate RFM in Klaviyo

### Method A: Custom Properties + Flows (Automated)

Best for ongoing RFM scoring without manual CSV exports.

**Step 1: Create custom properties for each dimension**

Klaviyo allows custom profile properties. Create three properties:
- `rfm_recency` (Number — 1-5)
- `rfm_frequency` (Number — 1-5)
- `rfm_monetary` (Number — 1-5)
- `rfm_persona` (Text — e.g., "Champions", "At Risk")

**Step 2: Build automated score-update flows**

Create three flows triggered "After 30 days since last Placed Order" or "Added to Segment":

1. **RFM — Update Recency Score:** Run monthly. Calculate days since last purchase. Assign R score via conditional splits.
2. **RFM — Update Frequency Score:** Run when "Placed Order" metric fires. Update F score based on new order count.
3. **RFM — Update Monetary Score:** Run when "Placed Order" metric fires. Update M score based on new total revenue.

**Step 3: Build the persona mapping flow**

In Klaviyo, create conditional splits that check all three RFM properties and tag the profile with the matching persona. This flow runs after any RFM score update.

### Method B: CSV Export + Excel (Manual)

Best for initial setup and quarterly analysis.

1. Export customer data from Klaviyo (see Step 1 above)
2. Create RFM quintile columns in Excel
3. Use PERCENTRANK or NTILE formulas to assign 1-5 scores
4. Concatenate scores into 3-digit code
5. Map codes to personas using the table above
6. Import personas back into Klaviyo as profile properties:
   - Klaviyo → Segments → Lists → Import
   - Include `email`, `rfm_recency`, `rfm_frequency`, `rfm_monetary`, `rfm_persona` columns
   - Map to existing profiles (match by email)

---

## Predictive Analytics in Klaviyo

Klaviyo's built-in predictive analytics scores every profile on three key metrics using machine learning models trained on your account's data.

### Predicted CLV (Customer Lifetime Value)

Klaviyo estimates the total revenue a customer will generate over their lifetime. This model considers:
- Purchase history (recency, frequency, monetary)
- Engagement data (opens, clicks)
- Time since first purchase
- Product category preferences

**How to Access:**
Klaviyo → Segments or Profiles → View any profile → "Predictive Analytics" section

**Using Predicted CLV for Targeting:**

| CLV Range | Use Case |
|---|---|
| Top 10% CLV | VIP perks, early access, account management |
| Mid 50-80% CLV | Upsell campaigns, loyalty program enrollment |
| Bottom 50% CLV | Automated flows only, no paid campaign spend |
| New profiles (no CLV yet) | Nurture sequences, educational content |

### Churn Risk Score

Klaviyo assigns a churn risk score (1-5 scale, where 5 = highest churn risk) based on declining engagement and purchase patterns.

**How to Access:**
Klaviyo → Segments → Create Segment → Condition: "Churn Risk" → "Is greater than" → [score]

**Using Churn Risk for Targeting:**

| Churn Risk Score | Action |
|---|---|
| 1-2 (Low risk) | Normal sends. Monitor. |
| 3 (Medium risk) | Reduce frequency. Send re-engagement content. |
| 4 (High risk) | Winback sequence. Offer incentive. Personalize subject line. |
| 5 (Critical risk) | Immediate intervention. Strong offer. Multi-channel outreach if available. |

### Next Purchase Date Prediction

Klaviyo predicts when a customer is most likely to make their next purchase, based on their individual purchase patterns.

**How to Access:**
Klaviyo → Segments → Create Segment → Condition: "Predicted Next Purchase Date" → "Is in the next" → "[X days]"

**Using Next Purchase Date for Targeting:**

| Prediction | Timing | Action |
|---|---|---|
| Next purchase within 7 days | Send immediately | Product recommendation aligned with predicted category |
| Next purchase within 30 days | Prepare campaign queue | Send reminder, show new arrivals in preferred category |
| Next purchase 30+ days out | Hold until closer | Do not push — risk of accelerating churn |
| No predicted date | Trigger winback | Customer may be dormant — send re-engagement campaign |

---

## Using Predictive Data for Targeting

### High CLV + Low Engagement = Winback Priority

**Target:** Profiles in top 30% by Predicted CLV AND Engaged 0 times in the last 90 days
**Why:** These are high-value customers who have gone silent. Their future revenue is at risk.
**Action:** Send personalized winback campaign with a strong offer. Reference their past purchase history. Use the founder's name as the sender. Offer an exclusive "come back" discount tiered higher than standard winback.
**Segment definition in Klaviyo:**
- Condition 1: Predicted CLV "Is greater than" [top 30% threshold for your brand]
- Condition 2: "Opened Email" = 0 times in the last 90 days

### High Churn Risk + Recent Purchase = Retention Push

**Target:** Profiles with churn risk 4+ AND "Placed Order" at least 1 time in the last 30 days
**Why:** They just bought but are showing signs they may not return. The post-purchase window is the best time to build retention habits.
**Action:** Post-purchase sequence with heavy onboarding and education. Include loyalty program enrollment. Cross-sell a related product to build habit. Add to SMS flow if available.
**Segment definition in Klaviyo:**
- Condition 1: Churn Risk "Is greater than or equal to" 4
- Condition 2: "Placed Order" at least 1 time in the last 30 days

### Low CLV + High Frequency = Surprising Potential

**Target:** Profiles in bottom 40% by Predicted CLV AND Frequent Buyers (3+ orders)
**Why:** These customers purchase often but spend little each time. They may be buying sale items exclusively or small accessories.
**Action:** Upsell to higher-AOV products in the same category. Bundle frequently-purchased items with premium version. Offer volume discount to increase basket size.
**Segment definition in Klaviyo:**
- Condition 1: Predicted CLV "Is less than" [bottom 40% threshold]
- Condition 2: "Placed Order" at least 3 times over all time

---

## Zero-Party Data Collection

Zero-party data is information a customer intentionally and proactively shares with a brand. It is the most valuable data type because it reveals explicit intent and preference, rather than inferred behavior.

### Collection Channels

**Quiz Results (Skin Type, Preferences, Goals)**
- Build a product recommendation quiz on the brand's site
- Capture: skin/hair type, style preference, fitness goals, budget range, product concerns
- Store results in Klaviyo as custom properties (e.g., `quiz_skin_type`, `quiz_goal`, `quiz_budget`)
- Use these properties for ultra-targeted product recommendations

**Preference Centers**
- Klaviyo-native preference center or custom-built
- Capture: email frequency preference (daily, weekly, monthly), product categories of interest, communication channels (email, SMS, push)
- Store as custom properties
- Use preferences to throttle send frequency and topic-target campaigns

**Survey Responses**
- Post-purchase surveys, NPS surveys, product feedback
- Capture: satisfaction score, product improvement requests, future purchase intent
- Store NPS score as profile property
- Use low NPS + high CLV for account management outreach

**Post-Purchase Feedback**
- Order follow-up emails with a one-question preference quiz
- "What brought you to [brand] today?" → store as custom property
- "What would you like to see more of?" → store as custom property
- Use responses to personalize next campaign content

### How to Use Zero-Party Data for Personalization

| Data Type | Personalization Application |
|---|---|
| Quiz preference (e.g., skincare type) | Product recommendations in emails show only products matching their type |
| Frequency preference | Limit sends to weekly for "weekly" preference subscribers; full cadence for "daily" |
| Category interest | Only send product launches in their preferred categories |
| Goal (e.g., weight loss, muscle gain) | Content tailored to their specific goal — articles, recipes, products |
| NPS score | Promoters (9-10): ask for review/referral. Passives (7-8): send nurturing content. Detractors (0-6): account management outreach |
| Budget range | Show products within their stated budget tier |

### Klaviyo Implementation: Zero-Party Data as Custom Properties

1. Navigate to Klaviyo → Settings → Custom Properties → ensure properties exist for each data point
2. Create properties matching your data collection fields (e.g., `quiz_skin_type`, `freq_preference`, `category_interest`)
3. For quiz data: integrate quiz tool (Octane AI, Typeform, Interact) with Klaviyo via API or Zapier
4. For preference center: use Klaviyo's built-in preference center or custom form connected via API
5. For surveys: map survey response fields to Klaviyo properties via integration
6. Verify: view a test profile in Klaviyo → check that custom properties populate with correct values

### Zero-Party Data Segment Examples

**Segment: Oily Skin Type**
- Condition: `quiz_skin_type` = "oily"
- Campaign: Product recommendations for oil-control moisturizers, mattifying primers

**Segment: Weekly Frequency Preference**
- Condition: `freq_preference` = "weekly"
- Campaign: Weekly digest only — exclude from flash sale and daily promotional sends

**Segment: Promoters (NPS 9-10)**
- Condition: `nps_score` greater than 8
- Campaign: Referral invitation, review request, testimonial collection

---

## Completion Checklist

- [ ] RFM scores calculated for entire customer base (manual export or automated properties)
- [ ] All 11 RFM personas mapped to customer profiles
- [ ] Persona priorities documented for campaign targeting
- [ ] Predictive analytics reviewed: Predicted CLV, Churn Risk, Next Purchase Date
- [ ] High CLV + Low Engagement winback segment created
- [ ] High Churn Risk + Recent Purchase retention segment created
- [ ] Low CLV + High Frequency upsell segment created
- [ ] Zero-party data collection channels live (quiz, preference center, survey, post-purchase)
- [ ] Zero-party data stored as Klaviyo custom properties
- [ ] Zero-party data segments created for top 3 preference categories

## Error Recovery

| Error | Symptom | Root Cause | Fix |
|---|---|---|---|
| RFM scores skewed toward 1 or 5 | All customers have R=1 or R=5 with no middle range | Quintile calculation uses wrong percentile formula | Check PERCENTRANK formula — ensure it divides into 5 equal groups, not fixed ranges. Verify no null values are included. |
| Predictive analytics shows no data | Klaviyo shows "Not enough data" for profiles | Insufficient purchase or engagement history for model training | Klaviyo requires minimum 500 customers with 12+ months of data for predictive models. Use rule-based segmentation (manual RFM) for smaller lists. |
| Zero-party data not populating in Klaviyo | Custom properties show empty for new profiles | Integration between collection tool and Klaviyo is broken | Check API key validity in integration. Test with a single form submission. Verify property names match exactly (case-sensitive). |
| Churn risk score inconsistent | Same customer shows different churn risk each week | Model retraining cycle | Klaviyo retrains models periodically. Fluctuations are normal. Use 30-day rolling average if stability needed. |
| Persona mapping creates wrong segments | New customer scored as "Champions" | R=5 (recent purchase) + F=1 (first purchase) + M=1-5 = "New Customers" persona applied incorrectly | Ensure persona mapping accounts for F=1 profiles separately. First-time buyers should never map to Champions regardless of M score. |

## Maintenance

- **RFM refresh:** Quarterly — recalculate scores and update persona mappings
- **Predictive analytics review:** Monthly — check CLV distribution, churn risk trends, next purchase date accuracy
- **Zero-party data audit:** Monthly — verify custom properties are populating correctly, check for stale or incomplete data
- **Persona response audit:** Quarterly — compare campaign response rates by persona; adjust targeting if lower-value personas outperform higher-value ones
- **New collection channel setup:** As needed — when launching new quiz, survey, or preference tool, follow zero-party data implementation checklist

## Version History

| Version | Date | Changes |
|---|---|---|
| 1.0.0 | 2026-05-04 | Initial creation — RFM analysis (recency, frequency, monetary), 11-persona matrix, Klaviyo predictive analytics (CLV, churn risk, next purchase date), zero-party data collection and personalization |

## See Also

- [[SOP-segmentation-strategy-framework]] — Core segmentation framework
- [[SOP-segmentation-list-health]] — List health and data quality monitoring
- [[SOP-flow-vip]] — VIP flow using RFM Champions persona
- [[SOP-flow-winback]] — Winback targeting for At Risk and Cannot Lose Them personas

---

## 10. segmentation-strategy-framework

**Domain:** Segmentation: Strategy Framework

### SOP: Segmentation Strategy & Framework

## Purpose

Segmentation is the single highest-leverage action in email marketing. A well-segmented list consistently doubles revenue per send compared to a broadcast approach. Every email that reaches a subscriber who does not want it damages sender reputation, drains list health, and wastes budget. Every email that reaches the right subscriber at the right moment builds revenue and loyalty.

This SOP defines the five-layer segmentation framework used across every Tenza-managed brand: engagement, value, behavioral, demographic, and purchase history. Every segment type has a clear definition, a step-by-step Klaviyo builder guide, and a documented interaction logic with other segments.

## Why Segmentation Matters

Relevance drives revenue. A subscriber who receives emails aligned with their behavior and preferences converts at 3-5x the rate of a subscriber receiving generic broadcasts. The mechanism is simple:

- **Engagement-based segmentation** prevents sender reputation damage by excluding unengaged contacts
- **Value-based segmentation** protects the highest-LTV customers from discount fatigue and ensures VIPs feel recognized
- **Behavioral segmentation** captures intent at the moment of peak interest — product views, cart adds, category exploration
- **Demographic segmentation** enables location-specific offers, language targeting, and seasonally relevant content
- **Purchase history segmentation** determines what lifecycle messages each customer needs

Without segmentation, every campaign is a spray-and-pray. With it, every send is targeted.

---

## Layer 1: Engagement-Based Segments (The Backbone)

Engagement segments are the foundation of every email program. They control who receives campaigns, who is excluded, and who enters recovery or sunset flows. These segments must be created first — they are referenced by every other segment and campaign.

### Segment Definitions

| Segment Name | Klaviyo Definition | Purpose |
|---|---|---|
| Engaged 30 Days | "Opened Email" at least 1 time in the last 30 days OR "Clicked Email" at least 1 time in the last 30 days | Core campaign audience — your most active subscribers |
| Engaged 60 Days | "Opened Email" at least 1 time in the last 60 days OR "Clicked Email" at least 1 time in the last 60 days | Expanded campaign audience — captures slower-cycling subscribers |
| Engaged 90 Days | "Opened Email" at least 1 time in the last 90 days OR "Clicked Email" at least 1 time in the last 90 days | Standard campaign default — balances reach with relevance |
| Engaged 180 Days | "Opened Email" at least 1 time in the last 180 days OR "Clicked Email" at least 1 time in the last 180 days | Broad reach — used for brand awareness, seasonal campaigns |
| Unengaged (180+ Days) | "Opened Email" 0 times in the last 180 days AND "Clicked Email" 0 times in the last 180 days | Excluded from all standard campaigns; enters sunset flow |

### How "Engaged" Is Defined

A subscriber is considered "engaged" if they have **opened at least one email OR clicked at least one email** within the specified time window. The OR logic is intentional — it captures both active readers (openers) and action-takers (clickers). Using AND would exclude subscribers who open but do not click, which removes a large portion of legitimate engaged subscribers.

### Klaviyo Segment Builder: Engaged 90 Days (Example)

1. Navigate to Klaviyo → Segments → Create Segment
2. Segment name: `[Brand Name] — Engaged 90 Days`
3. Condition 1: "Opened Email" → "at least" → "1 time" → "in the last" → "90 days"
4. Add condition with OR: "Clicked Email" → "at least" → "1 time" → "in the last" → "90 days"
5. Ensure the connector between conditions is set to **OR** (not AND)
6. Review the preview — verify the segment populates with expected count
7. Save

Repeat for 30, 60, 180 day windows. The 180+ day unengaged segment uses AND with "0 times" for both opens and clicks.

### Segment Size Targets (As % of Total List)

| Segment | Healthy Range | Warning | Critical |
|---|---|---|---|
| Engaged 30 Days | 20-35% | < 15% | < 10% |
| Engaged 90 Days | 40-55% | < 30% | < 20% |
| Unengaged 180+ Days | < 20% | 20-30% | > 30% |

If unengaged exceeds 30% of the total list, initiate list hygiene (see [[SOP-segmentation-list-health]]).

---

## Layer 2: Value-Based Segments

Value segments group subscribers by their contribution to revenue. These segments protect your most valuable customers from being treated like one-time buyers and prevent discount fatigue among your highest-LTV audience.

### Segment Definitions

**VIP (Top 10% by Revenue)**
- Definition: "Placed Order" revenue sum is in the top 10% of all customers over all time
- Alternative (if percentile conditions aren't available): "Total Spent" > $X where X is the threshold that captures the top 10%
- Purpose: Exclusive perks, early access, VIP-only campaigns, loyalty rewards
- Treatment: Highest-quality content, most generous perks, minimum discount frequency

**High AOV ($150+ Average)**
- Definition: "Average Order Value" > $150 over all time (adjust $ amount per brand)
- Purpose: Upsell campaigns, premium product recommendations, cross-sell to complementary high-ticket items
- Treatment: Quality-over-quantity messaging, limited discounting, premium positioning

**Frequent Buyers (3+ Orders)**
- Definition: "Placed Order" at least 3 times over all time
- Purpose: Loyalty recognition, replenishment reminders, referral incentives
- Treatment: Celebrate their loyalty, offer referral rewards, reduce frequency to prevent fatigue

**One-Time Buyers**
- Definition: "Placed Order" at least 1 time over all time AND "Placed Order" 0 times in the last 90 days
- Purpose: Winback targeting, second-purchase conversion, cross-sell of complementary products
- Treatment: Moderate discounts (10-15%), product discovery, cross-sell from their purchase category

**At-Risk (Declining Engagement)**
- Definition: "Opened Email" at least 1 time in the last 90 days AND "Clicked Email" 0 times in the last 90 days
- This segment is both an engagement and value indicator — declining engagement from previously active subscribers
- Purpose: Re-engagement before they slip into unengaged territory
- Treatment: Reduced frequency, curiosity-gap subject lines, preference center CTA

### Klaviyo Segment Builder: Frequent Buyers

1. Navigate to Klaviyo → Segments → Create Segment
2. Segment name: `[Brand Name] — Frequent Buyers (3+ Orders)`
3. Condition: "Placed Order" → "at least" → "3 times" → "over all time"
4. Review preview
5. Save

### Segment Size Targets

| Segment | Healthy Range |
|---|---|
| VIP (Top 10%) | 8-12% of total list |
| High AOV (>$150) | 5-15% (varies by brand price point) |
| Frequent Buyers (3+) | 10-20% |
| One-Time Buyers | 15-30% |
| At-Risk | 5-15% |

---

## Layer 3: Behavioral Segments

Behavioral segments capture real-time intent signals. These are the highest-converting segments because they reach subscribers at the moment their interest is proven.

### Segment Definitions

**Viewed Specific Product/Category**
- Definition: "Viewed Product" at least 1 time in the last 7 days AND "Placed Order" 0 times since last "Viewed Product"
- For category: "Viewed Category" at least 1 time in the last 7 days
- Purpose: Product-specific follow-up, category exploration campaigns, complementary product recommendations
- Treatment: Show the exact product viewed, related items, social proof (review count, ratings)

**Added to Cart but Didn't Purchase**
- Definition: "Added to Cart" at least 1 time in the last 1 day AND "Placed Order" 0 times since last "Added to Cart"
- Time window varies by brand velocity: 24 hours for impulse purchase brands, 3-7 days for high-consideration
- Purpose: Cart recovery — the highest-converting behavioral trigger
- Treatment: Product reminder, urgency signal (low stock, limited time), friction reduction (free shipping)

**Reached Checkout**
- Definition: "Reached Checkout" at least 1 time in the last 1 day AND "Placed Order" 0 times since last "Reached Checkout"
- Purpose: Checkout abandonment recovery — higher intent than cart add
- Treatment: Direct abandon-checkout email, payment issue resolution, exit-intent discount

**Purchased Specific Product**
- Definition: "Placed Order" at least 1 time over all time with specific product SKU or category
- Purpose: Post-purchase cross-sell, replenishment reminders, review requests, upsell to accessories
- Treatment: Timing depends on product — immediate for cross-sell, delayed for replenishment

**Browsed Specific Collection**
- Definition: "Viewed Collection" at least 1 time in the last 7 days AND "Placed Order" 0 times in the last 7 days
- Purpose: Collection-level campaigns, new arrivals in browsed category, sale alerts for browsed collection
- Treatment: Curated collection showcase, new arrivals highlight, category-exclusive offer

### Klaviyo Segment Builder: Viewed Product (Last 7 Days)

1. Navigate to Klaviyo → Segments → Create Segment
2. Segment name: `[Brand Name] — Viewed Product (Last 7 Days)`
3. Condition 1: "Viewed Product" → "at least" → "1 time" → "in the last" → "7 days"
4. Add condition with AND: "Placed Order" → "0 times" → "since last" → "Viewed Product"
5. Review preview
6. Save

### Segment Size Targets

| Segment | Healthy Range |
|---|---|
| Viewed Product (7d) | 3-10% of total list |
| Added to Cart (24h) | 1-5% |
| Reached Checkout (24h) | 0.5-2% |
| Purchased Product | Varies by product catalog size |

---

## Layer 4: Demographic Segments

Demographic segments enable location-specific and persona-specific targeting. Only create segments for demographics that the brand actually collects.

### Segment Definitions

**Location (Country, State, City)**
- Klaviyo property: "Location" → "Country" (or State, City)
- Purpose: Localized offers, shipping announcements, regional product availability, weather-triggered campaigns
- Treatment: Country-specific pricing, local holiday campaigns, regional product drops

**Gender (If Collected)**
- Klaviyo property: "Gender" or custom property
- Purpose: Gender-specific product recommendations, segmented by collection
- Treatment: Only use if the brand has gender-specific product lines — never guess gender

**Age Range (If Collected)**
- Klaviyo property: "Birthday" or custom "Age Range" property
- Purpose: Age-relevant product recommendations, generational messaging
- Treatment: Birthday flows, life-stage campaigns (back to school, new home)

### Klaviyo Segment Builder: Location (Country)

1. Navigate to Klaviyo → Segments → Create Segment
2. Segment name: `[Brand Name] — Country: [Country Name]`
3. Condition: "Location" → "Country" → "equals" → "[Country Name]"
4. Save

### Segment Size Targets

Demographic segments should only be built for groups representing at least 5% of the total list. Smaller segments do not have enough data for statistically meaningful campaign performance.

---

## Layer 5: Purchase History Segments

Purchase history segments determine what lifecycle stage each customer is in and what messaging they need.

### Segment Definitions

**First-Time Buyers**
- Definition: "Placed Order" at least 1 time over all time AND "Placed Order" 0 times before "30 days ago"
- These are customers who made their first purchase within the last 30 days
- Purpose: Onboarding, product education, second-purchase conversion
- Treatment: Educational content, usage tips, complementary product recommendations

**Repeat Buyers**
- Definition: "Placed Order" at least 2 times over all time
- Purpose: Loyalty reinforcement, cross-sell, upsell, referral invitations
- Treatment: Celebrate loyalty, offer referral rewards, introduce VIP program

**Lapsed Customers (No Purchase in X Days)**
- Definition: "Placed Order" at least 1 time over all time AND "Placed Order" 0 times in the last 90 days
- Adjust the time window based on purchase cycle: 60 days for fast-moving goods, 120 days for durable goods, 180 days for luxury items
- Purpose: Winback campaigns, re-engagement, recovery offers
- Treatment: Escalating incentive structure — gentle reminder → small discount → last-chance offer

**Subscription Customers**
- Definition: Custom property "subscription_status" = "active" OR "Placed Order" with subscription product SKU
- Purpose: Subscription management, renewal reminders, plan upgrades, replenishment
- Treatment: Account management focus, not promotional — they are already committed

### Klaviyo Segment Builder: Lapsed Customers (90 Days)

1. Navigate to Klaviyo → Segments → Create Segment
2. Segment name: `[Brand Name] — Lapsed Customers (90 Days)`
3. Condition 1: "Placed Order" → "at least" → "1 time" → "over all time"
4. Add condition with AND: "Placed Order" → "0 times" → "in the last" → "90 days"
5. Review preview
6. Save

### Segment Size Targets

| Segment | Healthy Range |
|---|---|
| First-Time Buyers (30d) | 5-15% of list |
| Repeat Buyers | 15-30% |
| Lapsed (90d) | 10-20% |
| Subscription Customers | Varies by brand model |

---

## Segment Overlap Rules

Segments are not mutually exclusive. A subscriber can be in multiple segments simultaneously. The overlap rules define how they interact:

**VIP + Frequent Buyer = Highest Priority Segment**
- VIPs who are also frequent buyers get the highest-value treatment: top-tier perks, first access, minimum frequency
- Never send aggressive discount campaigns to subscribers in this overlap — it erodes brand equity

**At-Risk + High CLV = Winback Priority**
- A subscriber who was previously high-value but is now declining engagement is the most important winback target
- This overlap should trigger a VIP winback flow, not a standard sunset flow

**Unengaged + One-Time Buyer = Suppression Candidate**
- One-time buyers who have not engaged in 180+ days should enter the sunset flow at the standard timeline
- They do not get extended windows because their purchase history does not indicate ongoing value

**Frequent Buyer + Engaged 30 Days = Broadcast Qualifier**
- Only subscribers who are "Engaged 30 Days" should receive standard broadcast campaigns
- All other engaged subscribers receive targeted campaigns only

### Suppression Logic

The following subscribers are **excluded** from all campaigns and standard flows:

- Unsubscribed profiles (Klaviyo-native suppression)
- Hard bounced profiles (Klaviyo-native suppression)
- Spam complainers (Klaviyo-native suppression)
- Profiles in "Unengaged 180+ Days" segment (unless in sunset flow)
- Profiles tagged `is_bot = True`
- Profiles tagged `unengaged = True`

Suppression is applied at the campaign level by excluding these segments from the "Don't send to" field. For flows, suppression is applied via flow filters.

---

## Klaviyo Segment Builder: Step-by-Step for Each Segment Type

### Engagement Segment (Example: Engaged 90 Days)

1. Klaviyo → Segments → Create Segment
2. Name: `[Brand Name] — Engaged 90 Days`
3. Add condition: "Opened Email" at least 1 time in the last 90 days
4. Click "Add condition with OR"
5. Add condition: "Clicked Email" at least 1 time in the last 90 days
6. Review → Save

### Value Segment (Example: VIP Customers)

1. Klaviyo → Segments → Create Segment
2. Name: `[Brand Name] — VIP Customers (Top 10%)`
3. Add condition: "Total Spent" greater than $X (determine X by analyzing top 10% threshold)
4. Optional add with AND: "Placed Order" at least 2 times over all time (for stricter VIP)
5. Review → Save

### Behavioral Segment (Example: Added to Cart)

1. Klaviyo → Segments → Create Segment
2. Name: `[Brand Name] — Added to Cart (24h, No Purchase)`
3. Add condition: "Added to Cart" at least 1 time in the last 1 day
4. Add condition with AND: "Placed Order" 0 times since last "Added to Cart"
5. Review → Save

### Demographic Segment (Example: Country)

1. Klaviyo → Segments → Create Segment
2. Name: `[Brand Name] — Country: United States`
3. Add condition: "Location" → "Country" = "United States"
4. Review → Save

### Purchase History Segment (Example: Repeat Buyers)

1. Klaviyo → Segments → Create Segment
2. Name: `[Brand Name] — Repeat Buyers (2+)`
3. Add condition: "Placed Order" at least 2 times over all time
4. Review → Save

---

## Segment Refresh Cadence

| Segment Type | Refresh Frequency | Why |
|---|---|---|
| Engagement (30/60/90/180) | Daily (automatic in Klaviyo) | Engagement changes daily — a subscriber who opens today was unengaged yesterday |
| Value (VIP, High AOV, Frequent Buyers) | Daily (automatic) | Purchase data updates continuously |
| Behavioral (Viewed, Cart, Checkout) | Real-time (trigger-based) | These are intent signals — must be fresh to be relevant |
| Demographic | Monthly | Demographic data rarely changes — monthly is sufficient |
| Purchase History (Lapsed, First-Time) | Daily (automatic) | Purchase activity shifts these segments daily |
| Unengaged (180+ Days) | Daily (automatic) | Must be up-to-date for suppression accuracy |

**Klaviyo technical note:** Segments refresh automatically when a profile's conditions change (e.g., a profile opens an email and is added to "Engaged 30 Days" on the next segment evaluation). No manual refresh is needed for standard Klaviyo segments. However, for large lists (>100K), schedule segments to refresh during off-peak hours (e.g., 2 AM local time) to avoid performance impact during campaign sends.

---

## Completion Checklist

- [ ] All 5 core engagement segments created (30, 60, 90, 180, Unengaged 180+)
- [ ] All value segments created (VIP, High AOV, Frequent Buyers, One-Time, At-Risk)
- [ ] All behavioral segments created (Viewed Product, Cart Abandon, Checkout, Purchased, Browsed Collection)
- [ ] Demographic segments created for groups exceeding 5% of list
- [ ] Purchase history segments created (First-Time, Repeat, Lapsed, Subscription)
- [ ] Segment overlap rules documented
- [ ] Suppression logic applied to all campaigns and flows
- [ ] Segment refresh cadence configured
- [ ] All segments verified — preview confirmed populated

## Error Recovery

| Error | Symptom | Root Cause | Fix |
|---|---|---|---|
| Segment returns 0 profiles | Preview shows empty despite list having subscribers | Segment logic has contradictory conditions (AND instead of OR, wrong metric name) | Review condition logic. Check metric names match Klaviyo defaults. Test with simplified conditions first. |
| Segment too large | > 60% of list in "Engaged 90 Days" | Time window too long or list has Apple MPP inflation | Use "Clicked Email" as secondary engagement signal. Add MPP detection segment. |
| Segment overlaps cause double-sends | Customer receives same email from two campaigns | Campaign targeting same segment overlap | Build a master suppression segment. Use "Don't send to" field. Apply flow filters. |
| Behavioral segment stale | Subscriber sees cart email for item purchased 2 days ago | "Since last" condition not configured | Use "since last [metric]" in behavioral segments, not "in the last [time]". |
| Demographic segment empty | Country segment shows 0 despite international subscribers | Location data not collected at signup | Add location capture to signup forms. Enable Klaviyo's IP-based location detection. |

## Maintenance

- **Segment audit:** Every 30 days — verify segment sizes relative to benchmarks
- **Overlap review:** Every 90 days — review overlap rules for new segment interactions
- **New segment creation:** As needed — create new behavioral segments when launching new products or categories
- **Deprecated segment cleanup:** Monthly — archive segments no longer in use (over 60 days without campaign reference)
- **Benchmark refresh:** Every 6 months — update segment size targets based on program growth

## Version History

| Version | Date | Changes |
|---|---|---|
| 1.0.0 | 2026-05-04 | Initial creation — five-layer segmentation framework (engagement, value, behavioral, demographic, purchase history) with Klaviyo builder guides, overlap rules, and refresh cadence |

## See Also

- [[SOP-segmentation-rfm-predictive]] — RFM analysis and predictive data layer
- [[SOP-segmentation-list-health]] — List health and data quality monitoring
- [[SOP-flow-sunset]] — Sunset flow for unengaged subscribers
- [[SOP-deliverability-audit-monitoring]] — Deliverability audit including engagement segment health

---

## 11. strategy-campaign-calendar

**Domain:** Strategy: Campaign Calendar

## 1. The Strategic Role of Email in E-Commerce Revenue

Email marketing is the highest-ROI channel in e-commerce, typically contributing 20-40% of total revenue on a near-zero marginal cost basis. Unlike paid channels, email is an owned asset — every subscriber you capture is an audience you can reach without paying per impression.

### Key Strategic Truths

- **Email compounds over time.** Every subscriber added today generates revenue for years, not weeks. A mature email program's value grows exponentially as the list accumulates.
- **Email amplifies paid channels.** Customers acquired through paid channels become email subscribers, reducing their effective cost per acquisition over their lifetime.
- **Email is the retention engine.** Paid channels drive top-of-funnel. Email drives repeat purchases, loyalty, and LTV — the profit center of any e-commerce business.
- **Email is the most personal scalable channel.** One-to-one personalization at scale is only possible through email segmentation and automation.

### Revenue Contribution Benchmarks

| Program Maturity | Email % of Total Revenue | Attribution Model |
|---|---|---|
| Launch (0-6 months) | 5-15% | Direct + Assisted |
| Growth (6-18 months) | 15-25% | Direct + Assisted + Multi-touch |
| Mature (18+ months) | 25-40% | Full-funnel attribution |
| Best-in-class | 35-45% | Full-funnel with offline attribution |

---

## 2. Annual Email Calendar Structure

The annual calendar follows the natural e-commerce cycle with quarterly themes that align with consumer behavior, holidays, and inventory cycles.

### Q1 (January — March): Reset & Rebuild

**Theme:** Post-holiday lull recovery, list re-engagement, foundation building

| Month | Key Dates | Focus | Campaign Types |
|---|---|---|---|
| January | New Year (Jan 1) | Re-engagement, winbacks, VIP appreciation | Winback flow, post-holiday thank you, new year educational, replenishment pushes |
| February | Valentine's Day (Feb 14), Galentine's Day (Feb 13) | Gift guides, bundles, limited editions | Valentine's gift guide, bundle campaigns, last-chance shipping, Galentine's self-care |
| March | St. Patrick's Day (Mar 17), Spring Equinox (Mar 20) | Spring prep, inventory clearance | Spring collection teasers, clearance/sample sale, educational content, spring refresh |

**Q1 Strategy Notes:**
- January: 2-3 emails/week max. List needs recovery from holiday fatigue.
- February: Ramp to 3-4/week around Valentine's. Push gift guides and bundles.
- March: Begin building toward Q2. Clear winter inventory. Tease spring products.

### Q2 (April — June): Growth & Engagement

**Theme:** Seasonal gifting, mid-year review, list growth

| Month | Key Dates | Focus | Campaign Types |
|---|---|---|---|
| April | Easter (date varies), Earth Day (Apr 22) | Spring campaigns, seasonal refresh | Easter promotions, spring collection launch, Earth Day/giving-back campaigns |
| May | Mother's Day (2nd Sun), Memorial Day (last Mon) | Gift giving, seasonal sales | Mother's Day gift guide, shipping deadline, Memorial Day sale |
| June | Father's Day (3rd Sun), Summer Solstice | Father's Day, summer prep, mid-year audit | Father's Day gift guide, summer collection teaser, mid-year review/refresh flows |

**Q2 Strategy Notes:**
- April: 3-4/week. Focus on spring newness and seasonal transitions.
- May: 3-5/week around Mother's Day. Gift guides perform well.
- June: Mid-year deliverability audit. Refresh all automated flows.

### Q3 (July — September): Preparation & Pre-Season

**Theme:** Back-to-school, list preparation, BFCM groundwork

| Month | Key Dates | Focus | Campaign Types |
|---|---|---|---|
| July | Independence Day (Jul 4), Summer | Summer clearance, loyalty programs | 4th of July sale, summer clearance, refer-a-friend push |
| August | Back to School (Aug-Sep) | BTS campaigns, list cleaning | Back-to-school promotions, list hygiene/sunsetting, domain warming prep |
| September | Labor Day (1st Mon), Fall Equinox | BFCM prep begins, fall transition | Labor Day sale, fall collection, BFCM planning emails, data gathering surveys |

**Q3 Strategy Notes:**
- July: 3-4/week. Push refer-a-friend for list growth before Q4.
- August: Clean and sunset unengaged subscribers. Begin domain warming if needed.
- September: BFCM planning starts. Run surveys/quizzes for data gathering.

### Q4 (October — December): BFCM & Holiday — Highest Revenue Period

**Theme:** Maximum revenue capture, holiday gifting, seasonal urgency

| Month | Key Dates | Focus | Campaign Types |
|---|---|---|---|
| October | Halloween (Oct 31), BFCM prep | Pre-BFCM fortification, reputation ramp | Halloween campaigns, BFCM teasers, reputation building, list re-engagement |
| November | Black Friday, Cyber Monday | BFCM week — maximum volume | BFCM campaign series (1-2 emails/day), real-time monitoring |
| December | Christmas (Dec 25), New Year's Eve | Holiday gift guide, last-chance, post-holiday | Gift guide, shipping deadline, gift card, shop-early, thank you from founder |

**Q4 Strategy Notes:**
- October: Ramp cadence to 4-5/week. Aggressive sunsetting. Warm up cold segments.
- November BFCM Week: 1-2 emails/day. Real-time monitoring with 1-hour post-send checks.
- December Post-BFCM: Ease back to 3-4/week immediately after Cyber Monday.

---

## 3. Monthly Planning Ritual

The monthly planning ritual ensures the calendar stays aligned with business goals, inventory, and performance data.

### When: Last week of each month (60-minute recurring block)

### Step 1: Review Last Month's Performance (15 min)

1. Open your email analytics dashboard (Klaviyo, Shopify, etc.)
2. Pull the following metrics for the prior month:
   - Total email-attributed revenue
   - Total send volume (campaigns + flows)
   - Average open rate
   - Average click rate
   - Unsubscribe rate
   - List growth (new subscribers minus unsubscribes)
   - Overall list size
3. Compare against previous month and year-over-year
4. Document any anomalies (spikes, drops, deliverability issues)

### Step 2: Identify Top-Performing Campaigns & Flows (10 min)

1. Sort campaigns by revenue generated
2. Note the top 3 campaigns — what made them work? (Subject line, offer, timing, creative)
3. Review flow performance:
   - Welcome flow: conversion rate, time-to-first-purchase
   - Abandoned cart: recovery rate
   - Post-purchase: repeat purchase rate
   - Winback: reactivation rate
4. Identify bottom 3 performers — what failed? Why?

### Step 3: Plan Next Month's Campaigns (25 min)

1. Open the upcoming month's calendar in your planning tool
2. Add all fixed dates (holidays, product launches, sales events, shipping deadlines)
3. For each promotional date, add:
   - Teaser email (3-5 days before)
   - Launch/go-live email (day of)
   - Reminder/last-chance email (1-2 days before end)
   - Post-event recap (if applicable)
4. Fill remaining slots with educational/value emails to maintain 3-4/week cadence
5. Assign each campaign a primary goal:
   - Revenue (promotional)
   - Engagement (educational, quiz, survey)
   - List growth (refer-a-friend, giveaway)
   - Retention (post-purchase, winback)
6. Write one-line briefs for each campaign slot

### Step 4: Align with Inventory & Product Launches (10 min)

1. Review inventory levels with operations/product team
2. Identify overstock items — push as bundles or clearance
3. Identify new arrivals — schedule product launch campaigns
4. Check stock levels for bestsellers — avoid promoting out-of-stock items
5. Document any supply chain issues that affect campaign timing

### Output: A complete monthly calendar with:
- Every send date assigned
- Campaign type and goal for each slot
- One-line brief for copy/creative team
- Revenue target for the month

---

## 4. Campaign Frequency by Segment

Not all subscribers should receive the same volume of emails. Segment-based frequency maximizes revenue while minimizing unsubscribes.

### Frequency Tiers

| Segment | Definition | Max Emails/Week | Campaign Type Mix |
|---|---|---|---|
| VIPs | Top 10% by CLTV, 3+ orders, $500+ LTV | 3-5 | Exclusive drops, early access, VIP-only offers, brand storytelling |
| Engaged 30-60 days | Opened or clicked at least 1 email in last 30-60 days | 2-3 | Standard promotional + educational mix |
| Engaged 90+ days | Opened or clicked at least 1 email in last 90 days | 1-2 | Re-engagement focused with strong CTAs |
| New subscribers | Subscribed in last 30 days, no purchase yet | 2-3 | Welcome flow + educational content |
| Recent buyers | Purchased in last 30 days | 2-3 | Post-purchase flow + cross-sell/upsell |
| Lapsed | Last open/click 90-180 days ago | 1 maximum | Winback offers, "we miss you" messaging |
| Unengaged | No open/click in 180+ days | Sunset only | Final re-engagement → sunset flow → suppress |

### Frequency Management Rules

1. **Never send to unengaged subscribers at standard volume.** Route them through the sunset flow first.
2. **VIPs get maximum frequency but every send must feel earned.** Never automate a standard blast to VIPs — curate their sends.
3. **Lapsed subscribers receive reduced frequency.** One email per week max with heavy discount or compelling reason to return.
4. **Recent buyers skip promotional sends during their post-purchase window (7-14 days).** They're already in the post-purchase flow.
5. **New subscribers in welcome flow receive the flow emails plus a reduced campaign load.** Don't double-saturate them.

---

## 5. Offer Strategy

The right offer at the right time to the right segment is the difference between a campaign that generates $5K and one that generates $50K.

### What to Promote When

| Calendar Period | Primary Offers | Secondary Offers |
|---|---|---|
| Q1 (Jan-Mar) | New Year sale, clearance, replenishment | Bundle deals, "New Year, New You" educational |
| Q2 (Apr-Jun) | Gift guides, seasonal collections | Flash sales, referral incentives |
| Q3 (Jul-Sep) | Back-to-school bundles, clearance | Early bird BFCM, loyalty program enrollment |
| Q4 (Oct-Dec) | BFCM discounts, holiday gift guides | Shipping threshold, gift cards, post-holiday clearance |
| Product launches | Launch discount, pre-order | Early access for VIPs |
| Evergreen | Bestsellers, bundles | Free shipping threshold, quizzes/guides |

### Discount Depth by Segment

| Segment | Typical Discount | When to Offer |
|---|---|---|
| VIPs | 20-40% off or exclusive products | Early access, VIP-only sales, birthday/anniversary |
| Existing customers | 15-25% off | Cross-sell, replenishment, post-purchase upsell |
| New subscribers | 10-20% off | Welcome flow (first purchase incentive) |
| Lapsed customers | 20-30% off | Winback flow, "come back" campaigns |
| Abandoned cart | 10-15% off | Cart recovery (email 2 or 3, not first) |
| BFCM/holiday | 30-50% off sitewide | Seasonal mega-sale events |

### Exclusivity Strategy

- **VIPs get first access** — 24-48 hour exclusive window before public launch
- **VIP-only products** — limited editions, exclusive colorways, member-only collections
- **Early access emails** — separate send 24 hours before public campaign
- **Invite-only events** — virtual stylist sessions, founder Q&As for top tier
- **Surprise & delight** — unannounced gifts, handwritten notes, anniversary bonuses

### Offer Principles

1. **Don't always discount.** Educational content sells without discounting. Position the product as the solution.
2. **Tier your offers.** VIPs get deeper discounts than new subscribers. Reward loyalty.
3. **Free shipping often outperforms % off.** Test free shipping vs. 15% off.
4. **Scarcity works.** Limited time, limited stock, limited quantities.
5. **Exclusivity beats discount.** "Members-only" access can outperform "50% off."

---

## 6. Revenue Forecasting

Revenue forecasting makes email a predictable revenue channel rather than a "send and hope" activity.

### The Core Formula

```
Email Revenue Target = Total Revenue Goal × Email Attribution %
```

**Example:**
- Total revenue goal: $5,000,000
- Email attribution % (mature program): 30%
- Email revenue target: $1,500,000

### Per-Campaign Revenue Estimates

1. Establish your baseline metrics:
   - Average open rate: ___%
   - Average click rate: ___%
   - Average conversion rate from click: ___%
   - Average order value: $___
2. For each campaign, estimate:
   - Segment size (number of recipients)
   - Expected open rate (segment baseline)
   - Expected click rate (segment baseline)
   - Expected conversion rate (campaign type baseline)
   - Projected revenue = (segment size) × (open rate) × (click rate) × (conversion rate) × (AOV)

**Example Campaign Estimate:**
- Segment: 50,000 engaged subscribers
- Open rate: 35%
- Click rate: 3%
- Conversion rate: 5%
- AOV: $75
- Projected revenue: 50,000 × 0.35 × 0.03 × 0.05 × $75 = **$1,968.75**

### Flow Revenue as Baseline, Campaign Revenue as Variable

| Component | Revenue Predictability | % of Total Email Revenue |
|---|---|---|
| Automated flows (welcome, cart, post-purchase, winback) | High (consistent month-over-month) | 40-60% |
| Campaigns (promotional, seasonal, educational) | Variable (depends on offers, season, list size) | 40-60% |

**Forecasting Approach:**
1. Calculate flow revenue baseline from last 3 months' average
2. Estimate campaign revenue from planned campaigns using the per-campaign formula
3. Total = flow baseline + campaign estimates
4. Track actual vs. forecast monthly and adjust

### Monthly Tracking Template

| Month | Flow Revenue | Campaign Revenue | Total Email Revenue | Forecast | Variance |
|---|---|---|---|---|---|
| January | | | | | |
| February | | | | | |
| ... | | | | | |

---

## 7. Content Philosophy Integration

The content philosophy defines the balance between education and promotion, ensuring subscribers receive value in every send.

### Education vs Promotion Balance

**Target: 50/50 split across the calendar**

| Email Type | % of Sends | Description |
|---|---|---|
| Promotional | 50% | Discount offers, product launches, sales, bundles, clearance |
| Educational | 30% | How-to guides, product education, tips, industry insights |
| Engagement | 15% | Surveys, quizzes, polls, UGC showcases, social proof |
| Brand storytelling | 5% | Founder stories, brand mission, behind-the-scenes |

### Thematic Months

| Month | Theme | Education Focus | Promotion Focus |
|---|---|---|---|
| January | Education & Reset | New year tips, goal setting, product care | Clearance, replenishment |
| February | Love & Connection | Gift guides, self-care content | Valentine's, Galentine's offers |
| March | Spring Refresh | Spring trends, organization tips | Spring collection, clearance |
| April | Growth & Renewal | Educational series, how-tos | Easter, Earth Day campaigns |
| May | Gratitude & Giving | Customer stories, community | Mother's Day, Memorial Day |
| June | Mid-Year Check | Usage tips, product deep-dives | Father's Day, summer prep |
| July | Independence & Fun | Lifestyle content, summer guides | 4th of July, clearance |
| August | Preparation | BTS guides, organization tips | BTS promotions, list growth |
| September | Foundation | Educational cornerstone content | Labor Day, fall transition |
| October | Pre-Season | Gift guide previews, brand stories | Halloween, BFCM teasers |
| November | Maximum Promotion | (Minimized — focus on offers) | BFCM mega-campaigns |
| December | Holiday & Thanks | Gift guides, customer appreciation | Holiday campaigns, year-end |

### Brand Storytelling Calendar

- **Monthly:** One brand story or founder message per month
- **Quarterly:** One deep-dive customer success story or case study
- **Seasonal:** Behind-the-scenes of product creation (new season)
- **Milestone:** Anniversary, subscriber count achievement, impact report

### Content Quality Standards

1. **Every email must provide value.** Ask: "Would the recipient be glad they opened this?"
2. **One topic per email.** Micro-topics beat information overload. Focus on one takeaway.
3. **Write like a human.** No corporate jargon. Conversational tone with personality.
4. **Respect the reader's time.** Get to the point. Use scannable formatting.
5. **Always include a CTA.** Even educational emails need a next step (read, shop, learn).

---

## Pre-Flight Checklist

- [ ] Annual calendar created with quarterly themes and key dates
- [ ] Monthly plan template established
- [ ] Segment frequency tiers defined in ESP
- [ ] Offer strategy documented by segment and season
- [ ] Revenue forecast model built with baseline + variable components
- [ ] Content philosophy and 50/50 split confirmed
- [ ] Monthly planning ritual scheduled as recurring calendar event
- [ ] Team roles assigned (calendar owner, copywriter, designer)

## Verification

- [ ] Open rates and unsubscribe rates are in acceptable ranges (OR > 25%, UR < 0.5%)
- [ ] Segment-based frequency is enforced in ESP (no over-sending to lapsed)
- [ ] Revenue tracking is set up to attribute email revenue
- [ ] Monthly review process is documented and scheduled
- [ ] Calendar is accessible to all team members

## Related SOPs

- [[SOP-strategy-customer-journey]] — Customer journey and lifecycle planning
- [[SOP-strategy-client-reviews]] — Client strategy and business reviews
- [[SOP-campaign-bfcm-holiday-mega]] — BFCM/Holiday campaign execution
- [[SOP-email-audit-execution]] — Full email audit methodology

---

## 12. strategy-client-reviews

**Domain:** Strategy: Client Reviews

## 1. Quarterly Business Review (QBR) Structure

The QBR is the most important recurring client touchpoint. It's where you demonstrate value, align on strategy, and set direction for the next quarter.

### Timing: Every 90 days, scheduled 2 weeks in advance

### QBR Agenda (60 minutes)

#### Part 1: Performance Summary (15 min)

Present the last quarter's email performance with a single-page dashboard:

| Metric | This Quarter | Previous Quarter | Change | Target | Status |
|---|---|---|---|---|---|
| Email-attributed revenue | $___ | $___ | +/- ___% | $___ | 🟢/🟡/🔴 |
| Total send volume | ___ | ___ | +/- ___% | — | — |
| Open rate | ___% | ___% | +/- ___% | >25% | 🟢/🟡/🔴 |
| Click rate | ___% | ___% | +/- ___% | >2% | 🟢/🟡/🔴 |
| Unsubscribe rate | ___% | ___% | +/- ___% | <0.5% | 🟢/🟡/🔴 |
| List growth | +___ net | +___ net | +/- ___% | Target: ___ | 🟢/🟡/🔴 |
| List size (end of quarter) | ___ | ___ | +/- ___% | — | — |

**Visuals:** Trend lines (quarter-over-quarter, year-over-year), bar charts for revenue by campaign type.

#### Part 2: What Worked / What Didn't (15 min)

**What Worked (Top 3 campaigns/flows):**
1. Campaign/Flow #1: $___ revenue, ___% ROI. Why it worked (offer, timing, segment).
2. Campaign/Flow #2: $___ revenue, ___% ROI. Key learning.
3. Campaign/Flow #3: $___ revenue, ___% ROI. Replicable insight.

**What Didn't Work (Bottom 3):**
1. Campaign/Flow #1: $___ revenue. Root cause analysis.
2. Campaign/Flow #2: $___ revenue. What we'd change.
3. Campaign/Flow #3: $___ revenue. Lessons learned.

**Key Wins to Highlight:**
- Revenue records broken
- List growth milestones
- New flow launches that performed well
- Deliverability improvements (inbox placement improvement)
- Client-specific wins (e.g., product launch success, seasonal campaign performance)

**Key Issues to Address Transparently:**
- Performance dips and their causes (seasonal, deliverability, market factors)
- Missed targets and corrective actions
- Any operational or communication breakdowns

#### Part 3: Strategic Recommendations (15 min)

Present 3-5 strategic recommendations for the next quarter:

| Priority | Recommendation | Expected Impact | Resources Needed | Success Metric |
|---|---|---|---|---|
| P1 | [e.g., Launch winback flow] | $10-15K incremental revenue | 4 hours setup, copy | 5-10% reactivation rate |
| P2 | [e.g., BFCM calendar prep] | $50-100K seasonal revenue | 2 weeks planning | Calendar finalized |
| P3 | [e.g., Segment optimization] | 10-20% higher engagement | 2 hours segment review | Open rate improvement |
| P4 | [e.g., New offer strategy] | 5-15% AOV increase | 1 hour creative brief | AOV lift |
| P5 | [e.g., Q4 list growth push] | 15-25% list growth | Run refer-a-friend campaign | Net new subscribers |

For each recommendation, include:
- What it is (one-sentence description)
- Why now (data/context that makes this timely)
- Expected ROI (revenue or metric improvement)
- Effort estimate (hours, dependencies, timeline)

#### Part 4: Next Quarter's Plan (15 min)

Walk through the proposed calendar for the next quarter:

1. **Month 1 campaigns** (list key campaigns, dates, and offers)
2. **Month 2 campaigns** (list key campaigns, dates, and offers)
3. **Month 3 campaigns** (list key campaigns, dates, and offers)
4. **Key milestones** (product launches, seasonal events, deliverability audits)
5. **Revenue forecast** by month (flow baseline + campaign estimates)
6. **Mutual commitments**:
   - What we will deliver (campaigns, reports, strategic work)
   - What client needs to provide (product info, approvals, inventory data)

### QBR Preparation Checklist

- [ ] Pull all performance data (revenue, opens, clicks, list, deliverability)
- [ ] Create one-page dashboard with metrics vs. targets
- [ ] Analyze top 3 and bottom 3 campaigns/flows
- [ ] Prepare competitive analysis findings (if applicable)
- [ ] Draft 3-5 strategic recommendations with ROI estimates
- [ ] Build proposed calendar for next quarter
- [ ] Prepare revenue forecast for next quarter
- [ ] Send agenda to client 3 business days before QBR

---

## 2. Monthly Reporting Ritual

Monthly reports keep clients informed between QBRs and provide early warning on performance trends.

### Timing: First 5 business days of each month

### Monthly Report Format

**Header: Month & Year — Client Name — Email Performance Report**

#### Section 1: Executive Summary (1 paragraph)
- Total email revenue this month vs. last month vs. same month last year
- Top achievement this month
- Key concern (if any) and action plan

#### Section 2: Key Metrics Dashboard

| Metric | This Month | Last Month | Change | YTD Total |
|---|---|---|---|---|
| Email Revenue | $___ | $___ | $___ +/- | $___ |
| Campaign Revenue | $___ | $___ | $___ +/- | $___ |
| Flow Revenue | $___ | $___ | $___ +/- | $___ |
| Emails Sent | ___ | ___ | ___ +/- | ___ |
| Open Rate | ___% | ___% | +/- ___% | ___% avg |
| Click Rate | ___% | ___% | +/- ___% | ___% avg |
| Unsubscribe Rate | ___% | ___% | +/- ___% | ___% avg |
| List Growth (net) | +___ | +___ | +/- ___ | +___ YTD |
| List Size (EOM) | ___ | ___ | +/- ___ | ___ |

#### Section 3: Campaign Highlights

| Campaign | Date | Segment | Subject Line | Opens | Clicks | Revenue | ROI |
|---|---|---|---|---|---|---|---|
| [Name] | [Date] | [Segment] | [Subject] | ___% | ___% | $___ | ___x |
| ... | | | | | | | |

**Top 3 campaigns by revenue + bottom 1 with brief explanation.**

#### Section 4: Flow Performance Review

| Flow Name | Recipients | Revenue | Conversion Rate | Notes |
|---|---|---|---|---|
| Welcome Flow | ___ | $___ | ___% | Healthy / Needs refresh |
| Abandoned Cart | ___ | $___ | ___% recovery | Optimize timing? |
| Post-Purchase | ___ | $___ | ___% repeat | Add cross-sell? |
| Winback | ___ | $___ | ___% reactivation | Increase offer? |
| Browse Abandonment | ___ | $___ | ___% conversion | Needs content update |

#### Section 5: List Health Snapshot

- Total subscribers: ___
- Active (opened in 90 days): ___ (%)
- At-risk (no open in 90-180 days): ___ (%)
- Unengaged (no open in 180+ days): ___ (%)
- Net new subscribers this month: ___
- Unsubscribes this month: ___
- Bounces this month: ___

**Health Score:** 🟢 Green (>60% active) / 🟡 Yellow (40-60% active) / 🔴 Red (<40% active)

#### Section 6: Next Month Preview

- Upcoming campaigns planned
- Key dates and holidays
- Any scheduled changes (flows, segments, templates)
- Revenue forecast for next month

### Monthly Report Distribution

1. Compile report using template
2. Senior team review (internal) — 15 min
3. Client send — email with PDF or link to live dashboard
4. Schedule 15-min call if metrics are significantly off-track

---

## 3. Competitive Email Analysis

Competitive intelligence helps position your email program against the market and identify gaps and opportunities.

### Building a Swipe File

| Field | Description |
|---|---|
| Brand name | Competitor brand |
| Email subject line | Exact subject line from inbox |
| Preheader text | Exact preheader text |
| Sender name | From name used |
| Send date/time | When it arrived |
| Campaign type | Promotional, educational, transactional |
| Key offer | Discount %, free shipping, exclusivity |
| Design approach | Text-heavy, image-heavy, minimal |
| CTA | Primary call to action |
| Personalization | Name, product rec, segment-specific? |
| Unique angle | What stood out |
| Weaknesses | What could be improved |

### What to Analyze

**Frequency:**
- How many emails per week does each competitor send?
- Are they consistent or bursty?
- How does their frequency change by season?

**Subject Lines:**
- Common patterns (questions, urgency, curiosity, personalization)
- Average length (target: 40-60 characters)
- Emoji usage (how many, which ones)
- Uppercase/punctuation style

**Offers:**
- Typical discount depth (%, free shipping, BOGO)
- Offer frequency (how often do they discount?)
- Exclusivity tactics (early access, VIP-only)

**Design:**
- Image-to-text ratio
- Mobile responsiveness
- Brand identity consistency
- Layout patterns (single column, product grid, story format)

**Content Mix:**
- Promotional vs. educational ratio
- User-generated content usage
- Storytelling vs. direct selling

### Gap Analysis

| Category | What Competitors Do | What We Do | Gap | Opportunity |
|---|---|---|---|---|
| Frequency | 4x/week | 3x/week | Lower frequency | Test increasing to match |
| Subject lines | Personalization + emojis | Generic subjects | Weak subjects | Implement personalization + emoji A/B test |
| Offers | 20% off + free shipping | 15% off only | Weak offer | Add free shipping threshold offer |
| Content | 60/40 promo/education | 80/20 promo/education | Too promotional | Add educational series |
| Flows | Welcome + cart + post-purchase + winback | Welcome + cart only | Missing flows | Build post-purchase + winback |
| VIP program | Exclusive early access | No VIP program | Major gap | Propose VIP program |

### Competitive Analysis Cadence

- **Monthly:** Quick scan of 3 main competitors (subject lines, frequency, offers)
- **Quarterly:** Deep-dive analysis of 5 competitors (full audit)
- **Ad-hoc:** When a competitor launches a notable campaign

### Swipe File Tool

Use a shared spreadsheet or tool (Notion, Airtable, Trello) with:
- A column for each competitor
- Screenshots of every email received
- Tags for campaign type, offer type, tone
- Weekly review with the team

---

## 4. Client Communication Standards

Consistent, professional communication is the foundation of client retention.

### Weekly Update Format

**Sent every Friday by 5 PM local time.**

**Format: Bulleted email (200-300 words max)**

Subject: [Client Name] — Email Update — Week of [Date]

```
Hi [Client Name],

Here's what we did this week:

Sent campaigns:
- [Campaign 1] — [date] — $[revenue]
- [Campaign 2] — [date] — $[revenue]

Testing/optimization:
- [A/B test or flow update]

Upcoming next week:
- [Campaign 1] — [date] — [brief description]
- [Campaign 2] — [date] — [brief description]

Quick wins to highlight:
- [Metric improvement or milestone]

Items needing your input:
- [Approval needed, product info, etc.]

— [Your Name]
```

### Monthly Report Format

**Sent by the 5th business day of each month.**

- Structured report using the template from Section 2
- Include: metrics dashboard, campaign highlights, flow review, list health
- One-page summary at the top for executives
- Attached as PDF or shared as live dashboard link

### QBR Presentation Structure

**Sent 3 days before the meeting + presented live.**

1. Title slide — Client name + quarter + prepared by
2. Executive summary (1 slide)
3. Performance dashboard (1 slide)
4. What worked / what didn't (2-3 slides)
5. Strategic recommendations (1-2 slides)
6. Proposed plan for next quarter (1-2 slides)
7. Revenue forecast (1 slide)
8. Open items / discussion (1 slide)

### Communication Cadence

| Type | Frequency | Format | Length | Audience |
|---|---|---|---|---|
| Quick check-in | Weekly | Email or Slack | 2-3 sentences | Client point of contact |
| Weekly update | Weekly | Bulleted email | 200-300 words | Client + internal team |
| Monthly report | Monthly | PDF or dashboard | 5-7 pages | Client stakeholders |
| QBR | Quarterly | Presentation + deck | 10-12 slides | Client execs + team |
| Ad-hoc | As needed | Email or call | Varies | Relevant stakeholders |

### Crisis Communication Protocol

When performance dips significantly:

1. **Acknowledge immediately** (same day) — brief note: "We're seeing [issue], looking into it"
2. **Initial analysis** (within 24 hours) — root cause + action plan
3. **Fix implemented** (within 48-72 hours) — communication of fix
4. **Follow-up** (7 days later) — did the fix work?
5. **Prevention plan** (next weekly) — how we prevent recurrence

---

## 5. Upsell and Expansion Within Existing Clients

Expanding existing client relationships is more profitable and predictable than acquiring new ones.

### Identifying Expansion Opportunities

| Signal | Potential Upsell | Timing |
|---|---|---|
| Client mentions SMS interest | SMS marketing service | During QBR or monthly call |
| Client asks about pop-ups | Popup optimization service | Immediate |
| Low email revenue % | Advanced segmentation strategy | After proving email ROI |
| Client needs deeper reporting | Analytics dashboard setup | Quarterly review |
| Client wants better targeting | Advanced segmentation | After 3+ months of data |
| Client has multiple brands | Multi-brand management | Onboarding phase |
| Client mentions A/B testing | Testing methodology service | After 6+ months |

### Presenting New Services

**Never pitch cold.** Always tie the upsell to a demonstrated need or recognized gap.

**Framing Template:**
```
"We've noticed [data point/trend]. One way to address this would be
[service recommendation]. Based on similar implementations with other
clients, we'd expect [ROI estimate]. Would you like us to put together
a proposal?"
```

**Services to Offer:**

| Service | Description | Value Proposition | Typical Investment |
|---|---|---|---|
| SMS Marketing | Strategy, setup, campaign execution | 10-25% incremental revenue | $$ |
| Pop-up Optimization | Design, timing, A/B test | 15-50% more list signups | $ |
| Advanced Segmentation | RFM, predictive, behavioral | 20-40% higher engagement | $$ |
| Dedicated Copywriting | Custom email copy creation | Higher click rates | $$ |
| SMS + Email Integration | Cross-channel campaigns | Higher total revenue | $$$ |
| Deliverability Consulting | Audit + fix deliverability | Protect email ROI | $$ |
| Creative Direction | Brand refresh for emails | Better brand perception | $$$ |
| Full-Funnel Attribution | Analytics + reporting setup | Better ROI measurement | $$$ |

### ROI Documentation for Upsell Conversations

Build a case study from existing work:

1. **Before/after metrics** from a similar client implementation
2. **Time to value** — how quickly did results appear?
3. **ROI calculation** — clear numbers, no fluff
4. **Risk reduction** — low-risk pilot or trial
5. **Integration effort** — what's required from their team

### Expansion Conversation Cadence

| Touchpoint | Opportunity |
|---|---|
| Month 1-3 | Focus on core email results. No upsell. |
| QBR 1 | Mention 1-2 services that would complement results seen. |
| Month 6 | Propose one new service as a pilot. |
| QBR 2 | Present results from pilot + propose next expansion. |
| Annually | Full service audit + expansion roadmap. |

---

## 6. Client Retention Strategy

Retaining a client is 5-10x cheaper than acquiring a new one. Proactive retention is everyone's job.

### Proactive Communication

**Don't wait for the client to ask.** Be the first to share:
- Early warnings about performance trends (good and bad)
- Industry news and benchmarks relevant to their business
- New features or capabilities (theirs or ours)
- Ideas for improvement before they're requested

### Setting Clear Expectations

**From Day 1:**

1. **Service scope** — Document exactly what's included and what's not
2. **Response times** — Expected turnaround for approvals, feedback, revisions
3. **Deliverables** — Specific outputs per month (X campaigns, Y reports, Z QBRs)
4. **Metrics of success** — Agreed-upon KPIs and targets
5. **Escalation path** — Who handles what if there's an issue
6. **Offboarding** — Notice period, data return, transition support

### Delivering Consistent Results

| Factor | What It Means | How to Ensure |
|---|---|---|
| Reliability | Campaigns always go out on time | Set internal deadlines 2 days before client deadline |
| Quality | Every send is error-free and on-brand | Implement QA checklist for every campaign |
| Improvement | Month-over-month metric improvement | Track all metrics and optimize continuously |
| Transparency | Honest reporting of wins AND losses | No sugar-coating. Address issues directly. |
| Proactivity | Ideas before the client asks | Weekly team brainstorms on improvement ideas |

### Handling Performance Dips

**When metrics are down:**

1. **Acknowledge immediately.** Don't wait for the client to notice.
2. **Show you know.** "We've seen [metric] drop by [X]% this month. Here's our analysis..."
3. **Provide context.** Seasonal factors? Industry-wide decline? Specific issue?
4. **Present a plan.** 3 specific actions we're taking to recover.
5. **Set expectations.** "We expect to see improvement by [date]."
6. **Over-communicate.** Weekly updates until metrics stabilize.

### Client Health Scoring

| Signal | Green (Healthy) | Yellow (At Risk) | Red (Churning) |
|---|---|---|---|
| QBR attendance | Attends, engaged | Attends, passive | Misses or cancels |
| Weekly communication | Responsive within 24h | Responds within 48h | Takes 3+ days |
| Performance trend | Improving or stable | Flat or slight decline | Declining |
| Client satisfaction (survey) | 8+ out of 10 | 5-7 out of 10 | Below 5 |
| Upsell receptiveness | Open to discussion | Neutral | Rejects all suggestions |
| Contract status | 6+ months remaining | 3-6 months remaining | <3 months remaining |

**Action by status:**
- 🟢 **Green:** Maintain. Regular check-ins, quarterly deep dive.
- 🟡 **Yellow:** Increase communication frequency. Solve the root issue. Escalate to senior team.
- 🔴 **Red:** Executive intervention. Root cause meeting. Consider offboarding gracefully.

### Offboarding Best Practices

If a client chooses to leave:
1. **Exit interview** — Understand why (honest, non-defensive)
2. **Data handover** — Clean export of all assets, templates, flows
3. **Transition plan** — 30-day support for handoff to their team or new agency
4. **Keep the door open** — "We'd welcome you back if things change"
5. **Learn internally** — Document what went wrong, share with team

---

## Pre-Flight Checklist

- [ ] QBR deck template created with performance dashboard
- [ ] Monthly reporting template created with all metric sections
- [ ] Weekly update format documented and shared with team
- [ ] Competitive swipe file started (identify 5 competitors)
- [ ] Gap analysis spreadsheet set up
- [ ] Expansion service menu documented
- [ ] Client communication cadence defined
- [ ] Client health score criteria established
- [ ] Crisis communication protocol documented

## Verification

- [ ] QBR completed on schedule (quarterly)
- [ ] Monthly report sent within first 5 business days
- [ ] Weekly update sent every Friday
- [ ] Competitive scan done monthly
- [ ] At least one expansion opportunity discussed per quarter
- [ ] Client health score tracked monthly
- [ ] All at-risk clients have action plans

## Related SOPs

- [[SOP-strategy-campaign-calendar]] — Annual strategy and campaign calendar
- [[SOP-strategy-customer-journey]] — Customer journey and lifecycle planning
- [[SOP-email-audit-execution]] — Full email audit methodology
- [[SOP-deliverability-audit-monitoring]] — Deliverability audit and monitoring

---

## 13. strategy-customer-journey

**Domain:** Strategy: Customer Journey

## 1. The Full Customer Journey Map

The customer journey spans six distinct stages. Each stage requires a different email approach, frequency, and content type.

### Journey Arc

```
Anonymous Visitor → Email Subscriber → First Purchase → Repeat Buyer → VIP → Advocate
```

### Stage-by-Stage Breakdown

#### Stage 1: Anonymous Visitor
| Attribute | Detail |
|---|---|
| Customer state | First encounter with the brand. No data captured yet. |
| Email opportunity | None — no subscriber data. Focus on capture mechanisms. |
| Capture methods | Popup forms, exit-intent, landing page, lead magnets, social links |
| Key metric | Signup conversion rate (target: 2-5% of visitors) |

#### Stage 2: Email Subscriber (Pre-Purchase)
| Attribute | Detail |
|---|---|
| Customer state | Opted in. Learning about the brand. Evaluating products. |
| Email touchpoints | Welcome flow, browse abandonment, educational content |
| Goal | Convert to first purchase within 7-30 days |
| Key metric | Welcome flow conversion rate (target: 5-15%) |

#### Stage 3: First Purchase (Post-Purchase)
| Attribute | Detail |
|---|---|
| Customer state | Made first purchase. Needs validation and education. |
| Email touchpoints | Post-purchase flow, review request, cross-sell/upsell |
| Goal | Reduce buyer's remorse, collect review, drive second purchase |
| Key metric | Repeat purchase rate within 60 days (target: 15-25%) |

#### Stage 4: Repeat Buyer
| Attribute | Detail |
|---|---|
| Customer state | Has purchased 2+ times. Familiar with brand. |
| Email touchpoints | Replenishment, cross-sell, VIP program invite, loyalty enrollment |
| Goal | Increase purchase frequency, move toward VIP status |
| Key metric | Purchase frequency (orders per 90 days) |

#### Stage 5: VIP
| Attribute | Detail |
|---|---|
| Customer state | Top 10% by CLTV. Drives 40-60% of revenue. |
| Email touchpoints | Early access, exclusive offers, loyalty rewards, surprise & delight |
| Goal | Retain at all costs, increase share of wallet, convert to advocate |
| Key metric | VIP retention rate (12-month), share of wallet |

#### Stage 6: Advocate
| Attribute | Detail |
|---|---|
| Customer state | Brand loyalist. Referring others. Leaving reviews. |
| Email touchpoints | Referral program, UGC campaigns, community invites, review incentives |
| Goal | Amplify word-of-mouth, reduce CAC through referrals |
| Key metric | Referral conversion rate, UGC submissions per month |

### Stage Transition Tracking

| Transition | Timeframe Expectation | Email's Role |
|---|---|---|
| Anonymous → Subscriber | Immediate (upon form submission) | Popup optimization, lead magnet |
| Subscriber → First Purchase | 7-30 days | Welcome flow + browse abandonment |
| First Purchase → Repeat | 30-90 days | Post-purchase flow + cross-sell |
| Repeat → VIP | 3-12 months | Loyalty program + VIP enrollment |
| VIP → Advocate | 6+ months | Exclusive access + referral program |

---

## 2. Email Touchpoints at Each Stage

### Pre-Purchase Stage

| Touchpoint | Trigger | Emails | Goal |
|---|---|---|---|
| Welcome Flow | New subscriber | 4-8 emails over 7-14 days | Convert to first purchase, introduce brand |
| Browse Abandonment | Viewed product, no add-to-cart | 2-3 emails over 3-5 days | Drive product consideration |
| Educational Newsletter | Scheduled (weekly) | 1 email/week | Build brand affinity, provide value |
| Lead Magnet Delivery | Downloaded content | 1 email + 1-2 follow-ups | Nurture interest, move toward purchase |
| Abandoned Checkout | Added to cart, didn't purchase | 3 emails over 24-72 hours | Recover lost sale |

**Pre-Purchase Best Practices:**
- Welcome flow is the highest-converting email sequence. Optimize relentlessly.
- Browse abandonment works best when the email includes the specific product viewed plus complementary items.
- Educational content should position the brand as helpful, not salesy.

### First Purchase Stage

| Touchpoint | Trigger | Emails | Goal |
|---|---|---|---|
| Order Confirmation | Order placed | 1 email | Confirm details, set expectations |
| Shipping Updates | Order ships | 1-2 emails | Build anticipation, reduce support tickets |
| Product Care/Usage | 5-7 days after delivery | 1 email | Educate on product use, reduce returns |
| Review Request | 7-14 days after delivery | 1-2 emails | Collect social proof |
| Cross-Sell/Upsell | 10-14 days after delivery | 1 email | Drive second purchase |

**First Purchase Best Practices:**
- The post-purchase window is 7-14 days. Don't send promotional emails during this period.
- Thank-you-from-founder emails have the highest engagement rates in the post-purchase flow.
- Review requests should come when the customer has had enough time to form an opinion.

### Repeat Purchase Stage

| Touchpoint | Trigger | Emails | Goal |
|---|---|---|---|
| Replenishment Reminder | Based on product consumption cycle | 1-2 emails | Drive replenishment before product runs out |
| Cross-Sell | Purchase of specific product | 1 email | Increase AOV with related items |
| Category Deep-Dive | Engagement with category | 1 email | Expand purchase categories |
| Loyalty Milestone | Reached order count or spend threshold | 1 email | Recognize and reward loyalty |
| VIP Invitation | Met VIP criteria | 1-2 emails | Graduation to exclusive tier |

**Repeat Purchase Best Practices:**
- Replenishment flows are the highest-revenue-per-email automated flows for consumable products.
- Cross-sell should be genuinely helpful — "customers who bought X also bought Y" — not random upsells.
- Every repeat purchase is an opportunity to invite to the VIP program.

### VIP Stage

| Touchpoint | Trigger | Emails | Goal |
|---|---|---|---|
| Early Access | New product drops | 24-hour advance notice send | Make VIPs feel exclusive |
| VIP-Only Offers | Monthly/quarterly | 1 exclusive offer/week | Reward loyalty with deeper discounts |
| Birthday/Anniversary | Date-based | 1 email | Personal touch with gift |
| Surprise & Delight | Unannounced | Ad-hoc | Create memorable experiences |
| Founder Updates | Quarterly | 1 email | Deepen brand connection |

**VIP Best Practices:**
- VIP emails should feel 1:1. Use dynamic content (name, tenure, past purchases, browse behavior).
- Never send VIPs a standard promotional blast. Every VIP email should be curated.
- Surprise & delight (unannounced gifts, handwritten notes) builds more loyalty than any automated flow.

### At-Risk Stage

| Touchpoint | Trigger | Emails | Goal |
|---|---|---|---|
| Engagement Winback | 60-90 days no open/click | 3-4 emails over 2-3 weeks | Re-engage before disengagement deepens |
| Purchase Winback | 90-180 days no purchase | 3-4 emails over 2-3 weeks | Drive repeat purchase |
| Personal Outreach | High-value customer at-risk | 1 personal email/call | Save highest-value relationships |

**At-Risk Best Practices:**
- The winback flow should escalate in urgency: reminder → offer → "last chance" → final email.
- Discount depth should increase with each email in the sequence.
- After the winback flow fails, route to sunset flow.

### Lapsed Stage

| Touchpoint | Trigger | Emails | Goal |
|---|---|---|---|
| Sunset Flow | 180+ days no engagement | 2-3 emails over 2-4 weeks | Final re-engagement attempt |
| Suppression | After sunset flow completes | 0 (removed from list) | Protect deliverability |

**Lapsed Best Practices:**
- Sunset flows protect deliverability by removing disengaged subscribers.
- One final "we'll miss you" email with a strong offer is the last attempt.
- After suppression, only re-engage if the subscriber re-opts in.

---

## 3. Journey Acceleration Tactics

### How to Speed Up Time-to-First-Purchase

| Tactic | Expected Impact | Implementation |
|---|---|---|
| Offer-first welcome flow | 10-20% faster conversion | Lead with discount offer in welcome email 1 |
| Social proof in pre-purchase | 5-15% faster conversion | Add reviews and testimonials to browse abandonment emails |
| Urgency in abandoned cart | 10-25% recovery increase | Add time-limited offers to cart recovery emails |
| Mobile-optimized welcome | 15-30% improvement | Ensure all welcome emails are mobile-responsive |
| Personalization from day 1 | 10-20% improvement | Use preference center at signup to personalize early emails |

### How to Increase Repeat Purchase Rate

| Tactic | Expected Impact | Implementation |
|---|---|---|
| Post-purchase cross-sell | 10-20% repeat rate increase | Send relevant recommendations 7-14 days after purchase |
| Replenishment automation | 20-40% repeat rate for consumables | Set up replenishment triggers based on product lifecycle |
| Loyalty program enrollment | 15-30% higher frequency | Invite to loyalty program after first purchase |
| VIP aspiration | 10-15% increase | Show customers their progress toward VIP status |
| Winback timing optimization | 5-10% recovery improvement | Trigger winbacks at 60 days (not 90) for higher engagement |

### How to Move Customers Up the Value Ladder

| Step | Customer Status | Email Strategy | Target State |
|---|---|---|---|
| 1 | Subscriber → One-time buyer | Value-driven welcome + optimized cart | $50-100 AOV |
| 2 | One-time buyer → Repeat buyer | Post-purchase education + cross-sell | $75-150 AOV |
| 3 | Repeat buyer → VIP | Loyalty recognition + VIP enrollment | $500+ LTV |
| 4 | VIP → Advocate | Exclusive perks + referral program | $1,000+ LTV + referrals |

### Acceleration Metrics to Track

| Metric | Current | Target | Timeframe |
|---|---|---|---|
| Time-to-first-purchase | ___ days | 14 days | Next 3 months |
| First-to-second purchase rate | ___% | 25% | Next 3 months |
| VIP conversion rate | ___% | 15% of buyers | Next 6 months |
| Repeat purchase rate (90 days) | ___% | 30% | Next 6 months |

---

## 4. VIP Segment Strategy

The VIP segment is the highest-value audience in any email program. These customers typically represent 10% of buyers but drive 40-60% of revenue.

### VIP Qualification Criteria

Use a multi-factor qualification model:

| Criterion | Standard | Aggressive | Conservative |
|---|---|---|---|
| CLTV rank | Top 10% | Top 15% | Top 5% |
| Minimum orders | 3+ in last 6 months | 2+ in last 6 months | 5+ in last 12 months |
| Engagement rate | 60%+ open rate in 90 days | 50%+ open rate | 70%+ open rate |
| AOV vs. brand average | 1.5x+ | 1.25x+ | 2.0x+ |
| Lifetime spend | $500+ | $250+ | $1,000+ |

### VIP Benefits

| Benefit | Cost to Brand | Impact on Loyalty | Frequency |
|---|---|---|---|
| Early access to new drops | Low (inventory already allocated) | Very High | Every launch |
| Exclusive VIP-only products | Medium (limited production) | Very High | Quarterly |
| Free shipping on all orders | Medium (shipping cost) | High | Always |
| Birthday gifts | Low (one-time per year) | High | Annually |
| Double loyalty/reward points | Low (points are deferred value) | High | Promotional windows |
| Invite-only events (virtual) | Low (staff time) | Very High | Quarterly |
| Surprise gifts | Medium (product + shipping) | Very High | Ad-hoc (1-2x/year) |
| Dedicated support line | Medium (staffing) | High | Always |

### VIP Communication Cadence

| Send Type | Frequency | Personalization Level | Content Focus |
|---|---|---|---|
| Exclusive product drops | 1x/week | 1:1 (product recs based on purchase history) | New arrivals, limited editions |
| VIP-only offers | 1x/2 weeks | Segment-based (by category affinity) | Discounts, bundles |
| Brand storytelling | 1x/month | Personalized intro referencing customer history | Founder updates, behind-the-scenes |
| Birthday/anniversary | Date-based | 1:1 personalized | Gift + personal message |
| Surprise & delight | Ad-hoc | 1:1 | Unannounced perks |

### VIP Tone

VIP emails should feel like a personal note from a friend, not a marketing blast. Use:
- Personalized subject lines referencing past purchases or tenure
- Warm, conversational tone (not corporate)
- Acknowledgment of their loyalty status explicitly
- Language of exclusivity ("you're one of our most valued customers")
- No "we miss you" or generic promotional copy

### VIP Retention Metrics

| Metric | Target | Review Frequency |
|---|---|---|
| VIP 12-month retention rate | 90%+ | Monthly |
| VIP email revenue per recipient | 3-5x non-VIP | Monthly |
| VIP reactivation rate (60-day dormant) | 30%+ | Quarterly |
| VIP share of wallet increase | 10%+ YoY | Annually |

---

## 5. Retention vs Acquisition Focus

### The Economics of Retention

| Factor | Acquisition | Retention |
|---|---|---|
| Cost | High ($30-$150 CAC) | Low (email costs pennies) |
| Conversion rate | 1-3% (cold traffic) | 10-40% (existing customers) |
| AOV | Lower (first-time buyers) | Higher (repeat customers) |
| Profit margin | Negative usually | Positive |
| Time horizon | Short (impulse purchase) | Long (lifetime value) |

### Email's Role in Retention

Email is the primary retention channel because:

1. **Direct access** — No algorithm, no ad fatigue, no paid retargeting required
2. **Automation** — Flows run on autopilot, generating revenue 24/7
3. **Personalization at scale** — Segment-based messaging for every lifecycle stage
4. **Measurable ROI** — Direct attribution of email-driven purchases
5. **Compounding value** — Each retained customer generates more revenue over time

### Retention vs Acquisition Email Allocation

| Email Category | % of Send Volume | % of Revenue Contribution | Primary Goal |
|---|---|---|---|
| Welcome Flow | 15-20% | 20-30% | First purchase conversion (acquisition ROI) |
| Post-Purchase | 10-15% | 15-25% | Repeat purchase (retention) |
| Abandoned Cart | 10-15% | 10-20% | Revenue recovery (both) |
| Promotional Campaigns | 25-30% | 20-30% | Short-term revenue (both) |
| Educational Campaigns | 15-20% | 5-10% | Engagement (retention) |
| Winback/Sunset | 5-10% | 5-10% | Reactivation (retention) |
| Referral/VIP | 5-10% | 5-10% | Advocacy/retention |

### Lifecycle Marketing Metrics

| Metric | Formula | Benchmark | What It Tells You |
|---|---|---|---|
| Subscriber-to-customer rate | Purchasers ÷ subscribers | 5-15% | Welcome flow effectiveness |
| Repeat purchase rate | 2+ purchasers ÷ 1+ purchasers | 20-40% | Post-purchase flow effectiveness |
| Average order value | Revenue ÷ orders | Brand-specific | Upsell/cross-sell success |
| Customer lifetime value | Avg order × frequency × lifespan | 3-5x AOV | Overall program health |
| Churn rate | Lost customers ÷ total customers | <5% monthly | Retention effectiveness |
| Reactivation rate | Reactivated ÷ lapsed | 5-15% | Winback flow effectiveness |
| Net Promoter Score | Promoters - Detractors | 30+ | Advocacy readiness |

### Retention Investment Ratio

| Program Maturity | Acquisition Email $$ | Retention Email $$ |
|---|---|---|
| Startup (0-12 mo) | 60% | 40% |
| Growth (1-3 yrs) | 40% | 60% |
| Mature (3+ yrs) | 20% | 80% |

**Rule of thumb:** As the program matures, shift budget from acquisition to retention. A 5% increase in retention produces 25-95% more profit (Bain & Co).

---

## Pre-Flight Checklist

- [ ] Full customer journey map documented with email touchpoints at each stage
- [ ] Welcome flow optimized for speed-to-first-purchase
- [ ] Post-purchase flow active with cross-sell/upsell
- [ ] Abandoned cart flow with time-sensitive recovery offers
- [ ] Winback flow configured for at-risk subscribers
- [ ] Sunset flow set up for unengaged subscribers (180+ days)
- [ ] VIP segment defined with qualification criteria
- [ ] VIP benefits and communication cadence documented
- [ ] Lifecycle metrics tracking dashboard built
- [ ] Retention vs acquisition allocation documented

## Verification

- [ ] All automated flows triggered correctly and sending
- [ ] Welcome flow conversion rate tracked and optimized
- [ ] Repeat purchase rate meets target (15-25% within 60 days)
- [ ] VIP segment properly defined and receiving exclusive content
- [ ] Winback flow active and reactivation rate tracked
- [ ] Sunset flow running — unengaged subscribers suppressed
- [ ] Lifecycle metrics dashboard updated monthly

## Related SOPs

- [[SOP-strategy-campaign-calendar]] — Annual strategy and campaign calendar
- [[SOP-strategy-client-reviews]] — Client strategy and business reviews
- [[SOP-flow-welcome]] — Welcome flow execution
- [[SOP-flow-post-purchase-new]] — New customer post-purchase flow
- [[SOP-flow-winback]] — Winback flow execution
- [[SOP-flow-vip]] — VIP customer flow

---
