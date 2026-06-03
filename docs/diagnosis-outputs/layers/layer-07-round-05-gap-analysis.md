# Layer 7 Round 5 — Conversion Probabilities Gap Analysis

**Generated:** 2026-05-24
**Inputs analyzed:**
- L7 R1 — Client File Extraction (layer-07-round-01-client-files.md, 319 lines)
- L7 R2 — Skill Loading (layer-07-round-02-skill-loading.md, 472 lines)
- L7 R3 — External Research: **FILE DOES NOT EXIST** — this is itself a critical data gap
- L7 R4 — Cross-Reference (layer-07-round-04-cross-reference.md, 892 lines, synthesized by ops8)
- DOC1-MASTER-FOUNDATION.txt (1792 lines)

---

## 1. EXECUTIVE SUMMARY

This gap analysis examines all 16 Level × Phase combinations for conversion probability data quality, completeness, and internal consistency. The data chain from DOC1 through R1, R2, and R4 was inspected for gaps, contradictions, and unquantified assumptions.

### Critical Findings

| # | Finding | Severity |
|---|---------|----------|
| 1 | **No external research (R3) exists** — zero benchmark data to validate conversion rate claims | CRITICAL |
| 2 | **All conversion probabilities are inferred, not measured** — derived from Layer 3 Kommentare samples and Layer 4 expert synthesis, never from actual Klaviyo purchase data | CRITICAL |
| 3 | **5 of 16 Level × Phase combinations have no reliable data at all** (L2×P1, L3×P1, L3×P2, L1×P4, L3×P3 partial) | HIGH |
| 4 | **Phase detection is absent from segmentation** — Level is captured (4 tags) but Phase has zero detection | HIGH |
| 5 | **General Fallback sub-group distribution is pure estimation** — no data supports the 5 sub-group breakdown | HIGH |
| 6 | **Decision period estimates exceed Welcome Flow length for L2/L3** — suggests conversion is being left on the table | HIGH |
| 7 | **Conversion barrier intensities are described but never quantified per segment** | MEDIUM |
| 8 | **Urgency rules contradict across sources** especially for Level 2 | MEDIUM |

---

## 2. GAP TABLE PER LEVEL × PHASE COMBINATION

### 2.1 Level 1 (Verbal, 3-5yr, ~35% of audience)

| Cell | Conv. Range | Data Quality | Gap | Severity |
|:----|:-----------:|:------------|:----|:--------:|
| **L1×P1** (5.25%) | 3-5% | Medium | Range is broad (2% spread). No Klaviyo data to validate. Decision period (2-7 days) unverified. | MEDIUM |
| **L1×P2** (17.5%) ★★★ | 15-25% | Medium | **WIDEST range in ecosystem (10% spread)** — 15-25% is nearly unusable for forecasting. Derived from DOC1's "BIGGEST conversion lever" claim, not actual data. No per-email conversion data. | HIGH |
| **L1×P3** (10.5%) ★★ | 10-18% | Medium-Low | 8% range. L1×P3 is partially theoretical — only 30% of Level 1 subs reach Phase 3. No data on what % of L1 subscribers progress P2→P3 vs convert before. | MEDIUM |
| **L1×P4** (1.75%) | 5-8% | Low | **Tiny audience (1.75%) makes data inherently unreliable.** Estimated range may be meaningless — too few subscribers to generate statistically significant conversion data without months of accumulation. | HIGH |

### 2.2 Level 2 (Mixed, 5-7yr, ~40% of audience)

| Cell | Conv. Range | Data Quality | Gap | Severity |
|:----|:-----------:|:------------|:----|:--------:|
| **L2×P1** (2.0%) | ~2% | **None** | R4 explicitly flags this as "very rare" and "negligible." The ~2% estimate has NO supporting data — it's a placeholder. | HIGH |
| **L2×P2** (10.0%) ★★ | 10-15% | Medium-Low | Reasonable range but no data on conversion path (direct vs cart vs checkout). Phase transition rates from P2→P3 unknown. | MEDIUM |
| **L2×P3** (22.0%) ★★★ | 8-15% | Low-Medium | **LARGEST single cell (22%) and weakest data.** R4 says "HARDEST sell" but 8-15% range is similar to easier sells. No data on why conversion should be as high as 15% given "hyper-skepticism" dominant. | HIGH |
| **L2×P4** (6.0%) ★ | 6-10% | Low | Small audience. Two sub-versions (A: Resigned, B: Last Push) have DIFFERENT conversion probabilities but lumped into one range. No data on A/B split. | HIGH |

### 2.3 Level 3 (Non-verbal, 6-10+yr, ~25% of audience)

| Cell | Conv. Range | Data Quality | Gap | Severity |
|:----|:-----------:|:------------|:----|:--------:|
| **L3×P1** (0.5%) | <1% | **None** | R4 calls this "theoretical" and "essentially does not exist." No email strategy needed, but the data gap means we don't actually know this for sure. | MEDIUM |
| **L3×P2** (2.5%) | 3-5% | Low | Small cell. Deep shock conversion path unclear. No data on what conversion lever actually drives purchases here. | HIGH |
| **L3×P3** (8.25%) ★ | 5-10% | Low-Medium | **Significant audience (8.25%) with weak data.** R4 says Phase 3 dataset has unreliably small Kommentare samples (100 and 87 comments). The 5-10% range may be off by 100%+. | HIGH |
| **L3×P4** (13.75%) ★ | 4-8% | Medium-Low | Dominant L3 cell (55% of Level 3). R4's range is consistent with L3 aggregate. But data on Version A vs B split is missing — conversion for "Given Up" (A) is almost certainly <4% while "Last Push" (B) >8%. The lumped range hides the real story. | HIGH |

### 2.4 General Fallback (Cross-level, ~50% of real volume)

| Sub-group | Conv. Range | Data Quality | Gap | Severity |
|:----------|:-----------:|:------------|:----|:--------:|
| **GF-A** Diagnostic Entrants (~10%) | 5-10% | Low | Sub-group distribution estimate has NO supporting data. Migration rate to level-specific flows unknown. | HIGH |
| **GF-B** Diagnosis-Rejecters (~6%) | 2-5% | Low | May never migrate or convert. No data on size or behavior of label-avoidant audience. | HIGH |
| **GF-C** Sensory-Difference (~10%) | 8-15% | Low | **Highest GF conversion potential but LOWEST data quality.** If this sub-group is actually larger than estimated, the overall GF conversion rate could be significantly higher. | HIGH |
| **GF-D** Overwhelmed Non-Selectors (~10%) | 6-12% | Low | PP-Day 14 migration assumed at 40-50% but no data supports this. What % of GF purchasers re-select vs abandon? | HIGH |
| **GF-E** Cart/Browse Without Opt-In (~14%) | 2-8% | Low | This sub-group never opted in — conversion logic is entirely generic. No data on product page conversion vs cart recovery. | HIGH |

---

## 3. DATA QUALITY ASSESSMENT

### 3.1 Data Origin Chain

```
DOC1 Master Foundation (1792 lines)
  ↓
R1 —— Client File Extraction (extracts DOC1, DOC6, etc.)
  ↓
R2 —— Skill Loading (CRO frameworks mapped to BrightKidCo)
  ↓
R3 —— External Research [MISSING — no file exists]
  ↓
R4 —— Cross-Reference (synthesized Layer 3 + Layer 4 data)
  ↓
R5 —— THIS DOCUMENT (gap analysis)
```

### 3.2 Reliability by Source

| Source | Type | Reliability | Notes |
|:-------|:-----|:-----------:|:------|
| DOC1 | Primary client doc | HIGH | 1792 lines, comprehensive psychological foundation |
| DOC6 | Usage guide | MEDIUM | Provides hope % and offer timing data |
| R1 (Client Files) | Extraction of primary docs | MEDIUM | Well-structured extraction with source references |
| R2 (Skill Loading) | CRO framework application | MEDIUM | Frameworks are solid, but applied estimates, not data |
| R3 (External Research) | **MISSING** | **NONE** | **No external benchmarks exist** |
| R4 (Cross-Reference) | Synthesis of L3+L4 | LOW-MEDIUM | R4 explicitly acknowledges R1+R3 didn't exist when written |
| L3 (Emotional Phases) | Prior layer diagnosis | MEDIUM-LOW | Conversion rates built on small Kommentare samples (100/87) |
| L4 (Avatar Levels) | Prior layer diagnosis | MEDIUM | Phase-averaged rates, not cell-specific |

### 3.3 What We Actually Know vs What Is Estimated

**Actually known (from DOC1/R1):**
- Hope/realism % per level (70/30, 40/60, 20/80)
- 5 conversion levers with psychological effects
- 10 objections with intensity ratings
- Trust pyramid order (non-negotiable)
- Offer structure and pricing
- Audience income distribution (~25% Medicaid)
- 4 emotional phases with behavioral descriptions

**Estimated / Inferred (not validated):**
- ALL conversion probability percentages per Level × Phase
- General Fallback sub-group distribution (5 groups, 0 data points)
- Decision period lengths (2-7 days, 7-21 days, 14-30 days)
- Phase detection rules and prevalence
- GF→Level migration rates (40-50% assumed)
- Lever sequence effectiveness order
- Urgency vs baseline conversion lift

---

## 4. CONTRADICTION LOG

### 4.1 Internal Contradictions Between Sources

| # | Contradiction | Source A | Source B | Impact | Severity |
|:-:|:-------------|:---------|:---------|:-------|:--------:|
| C1 | **Level 2 urgency** | R1: "Urgency works ONLY for Level 1. For Level 2-3, urgency is poison" | R4: L2×P3 urgency can "spike HIGH on trigger events (withholding crisis)" | Contradictory guidance could lead to wrong email tone for 22% of audience | HIGH |
| C2 | **L2×P3 conversion rate vs skepticism** | DOC1/R1: Level 2 has "VERY HIGH skepticism" and only 40% hope | R4: L2×P3 conversion = 8-15% (only slightly below L1×P2's 15-25%) | Skepticism and conversion rate should correlate but don't — suggests rates are wrong or skepticism doesn't drive conversion | MEDIUM |
| C3 | **Audience % accounting** | DOC1: L1=35%, L2=40%, L3=25% = 100% of "assigned" | R4: GF = ~50% of real volume, creating 150% total | L1/L2/L3 percentages likely represent distribution of the ~50% who self-select, not total audience — needs clearer documentation | MEDIUM |
| C4 | **Phase 4 hope level** | DOC1: Phase 4 hope is "HIDDEN" | R1: Level 3 has 20% hope baseline | These are different constructs (phase hope vs level hope) but both feed into conversion probability in an undefined way | MEDIUM |
| C5 | **L3×P4 conversion** | DOC1: L3×P4 shown as low conversion (deep resignation) | R4: L3×P4 listed as "HIGH-LTV Niche" (#5 revenue rank at 0.6-1.1%) | Naming it "High-LTV" implies high per-customer value but the conversion probability is the lowest in the revenue-ranked list. The LTV assumption is untested. | MEDIUM |

### 4.2 Internal Contradictions Within R4 Itself

| # | Contradiction | Finding A | Finding B | Impact | Severity |
|:-:|:-------------|:---------|:---------|:-------|:--------:|
| C6 | **L2×P3 decision period** | R4 §2: L2 decision period = 7-21 days | R4 §3.7: L2×P3 "decision period 7-21 days" yet Welcome Flow length is 14-21 days | If decision period = 7-21, some L2×P3 subs convert at email 8 (day 21) which is the LAST email — no room for post-CTA follow-up | HIGH |
| C7 | **L3×P4 data quality vs L3×P3** | R4 §9: L3×P4 = 13.75% of total with 4-8% conversion, called "High-LTV Niche" | R4 §9: L3×P3 = 8.25% with 5-10% conversion, labeled "Medium — Phase 3 dataset bias" | L3×P4 has LARGER audience but similar data quality and gets LESS skepticism about its numbers | MEDIUM |

---

## 5. CONVERSION BARRIERS MENTIONED BUT NOT QUANTIFIED

| # | Barrier | Mentioned In | Quantification Gap | Impact on Email Strategy | Severity |
|:-:|:--------|:------------|:-------------------|:------------------------|:--------:|
| B1 | **BCBA influence on conversion** | DOC1, R1, R2, R4 | BCBA co-sign mentioned as trust booster but: What % of Level 2/3 parents rely on BCBA? What percentage conversion lift does BCBA referral provide? | Cannot prioritize BCBA co-sign investment without knowing ROI | MEDIUM |
| B2 | **60-day guarantee conversion lift** | DOC1 (Lever 3), R1, R2, R4 | Universal lever, but lift % unknown. Is guarantee responsible for 20% of conversions or 80%? | Affects whether guarantee should be hero or footnote in email strategy | HIGH |
| B3 | **Discount sensitivity by Level** | R1, R2, R4 | "Level 1 + General Fallback" recommended for math reframes. Level 3 = 40% Medicaid. But no price elasticity data per segment. | Without elasticity data, discount depth strategy is guesswork | HIGH |
| B4 | **Email-to-checkout drop-off** | R2 (CRO) | CRO KPIs provide targets (checkout completion >60%) but no actual drop-off rates by segment | Each % of drop-off that goes unfixed costs real revenue | MEDIUM |
| B5 | **Welcome-to-cart transition rate** | Implicit throughout | What % of subscribers go: subscribe → product page → cart → buy vs subscribe → buy directly? Path choice affects which flows matter most | Welcome flow investment vs cart flow investment decisions need this | HIGH |
| B6 | **Unsubscribe / spam complaint rates by segment** | R2 | Mentioned as "check secondary metrics" but no baseline data per Level × Phase | Different segments may have very different tolerance for email frequency | MEDIUM |
| B7 | **Lena voice conversion lift** | DOC1 (Lever 4 — "200%+ trust increase"), R1, R2, R4 | The 200% figure is stated but has no source or methodology. Actual lift on open rate, click rate, and conversion rate unknown. | Affects how prominently Lena voice features vs mechanism specificity | HIGH |

---

## 6. CONVERSION LOGIC — UNSTATED OR UNCLEAR

| # | Area | What's Unclear | Why It Matters | Severity |
|:-:|:-----|:---------------|:---------------|:--------:|
| U1 | **Phase detection in segmentation** | Current popup captures Level (4 choices) but NOT Phase (4 phases). A Level 1 sub in Phase 2 vs Phase 3 needs dramatically different treatment. No behavioral phase detection exists. | **HALF of each segment gets wrong treatment** — likely suppressing conversion | CRITICAL |
| U2 | **Welcome Flow → Cart Flow handoff** | If a subscriber doesn't convert in Welcome, when does Cart flow trigger? What's the overlap logic? | May be double-sending or missing recovery window for non-converters | HIGH |
| U3 | **Level migration logic** | If a GF subscriber is detected as L2 at Day 14 PP, do existing Welcome emails get retrofitted? Does a migration trigger a new flow? | Without migration flow, a GF subscriber who reveals as L2 continues getting GF copy — potentially wrong tonality | HIGH |
| U4 | **Multi-child household conversion** | 15% of audience are single parents. Many have >1 child. Do conversion rates differ for multi-child families? Is the product purchased per child? | Offer strategy (3+3 bundle) assumes one child. Multi-child conversion may need different sizing | MEDIUM |
| U5 | **Order-confirmation upsell logic** | The PP-Direct Upsell (Wash Bag + Mattress Protector) is mentioned but conversion probability unknown. R2 says "73% of parents add these" — source of this stat is unclear. | Upsell strategy depends on actual attach rates | MEDIUM |
| U6 | **Refund / return rate by segment** | No data on refund probability. R4 mentions L1 has "High (hope-crash)" refund risk but no numbers. | High refund rates could wipe out conversion gains in certain segments | HIGH |
| U7 | **Time-of-year seasonality** | Pre-K deadlines are September. What % of annual conversions happen Aug-Oct vs rest of year? | Affects campaign calendar, budget allocation, and expected conversion timing | MEDIUM |

---

## 7. PRIORITY-RANKED RECOMMENDATIONS

### P1 — Critical (Blocking email strategy decisions)

| # | Recommendation | Addresses Gap | Effort | Expected Improvement |
|:-:|:--------------|:-------------|:-------|:-------------------|
| P1.1 | **Run external research (fulfill missing R3)** — benchmark BrightKidCo conversion rate ranges against comparable DTC e-commerce + autism product benchmarks. Even adjacent categories (sensory products, OT tools) provide calibration. | Missing R3 entirely | 1-2 days | Converts all contradiction analysis from internal-only to evidence-based |
| P1.2 | **Implement Phase detection in segmentation** — add behavioral phase detection via email engagement signals, time-since-opt-in patterns, and/or a 2nd pop-up question. Most impactful improvement possible. | U1, G3 from R4 | 2-3 days | Likely 15-30% conversion improvement per segment by sending right-tonality emails |
| P1.3 | **Pull actual Klaviyo conversion data** — stop using inferred conversion rates. Run a 30-day query of: conversion rate by tag (Level), by email position, by flow, by discount usage. Compare inferred rates to actual. | All conversion % estimates | 2 days | Replaces ALL estimated probabilities with real data |

### P2 — High (Directly affecting email content and prioritization)

| # | Recommendation | Addresses Gap | Effort | Expected Improvement |
|:-:|:--------------|:-------------|:-------|:-------------------|
| P2.1 | **Validate General Fallback sub-group distribution** — run a Klaviyo survey or segment analysis to understand actual GF audience composition. Are there truly 5 sub-groups or are we over-fitting? | GF data gaps (all GF rows) | 3-5 days | Enables GF-specific email strategy vs generic cross-level |
| P2.2 | **Resolve the Level 2 urgency contradiction** — test L2×P3 baseline (low urgency) vs event-triggered (high urgency) in cart recovery. Determine which urgency level actually converts L2×P3. | C1 (urgency contradiction) | 14-day A/B test | Clarifies email tone for 22% of audience |
| P2.3 | **Map Welcome Flow decision periods to actual conversion timing** — find the median day-of-purchase from subscribe for each Level. If L2×P3 actually converts at Day 21+, the Welcome Flow needs extension or an automated mid-flow cart trigger. | C6 (decision period vs flow length) | 2 days | Prevents conversion loss at flow end |
| P2.4 | **Quantify 60-day guarantee lift** — A/B test a version without prominent guarantee (control) vs with guarantee (variant) on product pages. Measure add-to-cart rate and conversion. | B2 (guarantee lift unknown) | 14-21 day A/B test | Informs guarantee prominence across all emails |
| P2.5 | **Measure discount elasticity per Level** — test 10% vs 15% vs 20% discount across Level 1, 2, 3 audiences in cart recovery. Determine where discount depth improves conversion vs trains discount dependency. | B3 (discount sensitivity) | 30-day multi-variant test | Optimizes discount budget allocation |

### P3 — Medium (Improves accuracy, less urgent)

| # | Recommendation | Addresses Gap | Effort | Expected Improvement |
|:-:|:--------------|:-------------|:-------|:-------------------|
| P3.1 | Decompose L3×P4 into Version A (Resigned) vs Version B (Last Push) conversion estimates via survey or behavioral data | L3×P4 A/B split unknown | 1-2 weeks | More accurate targeting of L3's largest cell |
| P3.2 | Measure Lena voice impact — A/B test emails with Lena sign-off vs generic brand sign-off on open rate and click-through | B7 (Lena lift unknown) | 14-day test | Quantifies value of DOC1's "200% trust increase" claim |
| P3.3 | Build Welcome→Cart handoff logic — prevent double-sending and ensure non-converters get cart flow within 24h of last Welcome email | U2 (flow handoff) | 1-2 days | Ensures no conversion window gap |
| P3.4 | Document refund rate by Level — run a 90-day refund query segmented by Level tag | U6 (refund rates) | 1 day | Identifies if certain segments have unsustainable refund rates |

### P4 — Low (Nice-to-have, marginal impact)

| # | Recommendation | Addresses Gap | Effort | Expected Improvement |
|:-:|:--------------|:-------------|:-------|:-------------------|
| P4.1 | Model multi-child household conversion path | U4 | Research | Niche audience segment optimization |
| P4.2 | Build seasonality calendar for conversion expectations | U7 | 1 day | Resource planning aid |
| P4.3 | Document all 16 cell conversion rate ranges with reliability scores | All cell gaps | 1 day | Reference tool for email strategists |

---

## 8. CONVERSION DATA CHAIN — WHAT'S SOLID VS WHAT'S WEAK

### Solid Data (Client-Verified, from DOC1/R1)

```
Hope/Realism % per Level                         ✓  DOC1 L746-765, DOC6 L174-181
5 Conversion Levers                               ✓  DOC1 L754-840
10 Objections with Intensity Ratings              ✓  DOC1 L600-748
Trust Pyramid Order                               ✓  DOC1 L556-598
4 Emotional Phases with Descriptions              ✓  DOC1 L228-385
Verbatim Language Bank                            ✓  DOC1 L396-500
Offer Structure & Pricing                         ✓  DOC6 L569-597
Audience Income Distribution                      ✓  DOC1 L190-209
Geographic Distribution                           ✓  DOC1 L95-100
Comorbidities                                     ✓  DOC1 L114-121
```

### Weak Data (Inferred, Not Client-Verified)

```
Conversion % per Level × Phase                   ✗  No Klaviyo data — all inferred from L3 Kommentare
GF Sub-group % Distribution                       ✗  Expert estimate only — 0 primary data points
Decision Period in Days                           ✗  Estimated — no actual purchase timing data
Lever Sequence Effectiveness Order                ✗  Deduced from DOC1 structure — never tested
Phase Detection Logic                             ✗  Does not exist in current implementation
GF → Level Migration Rate                         ✗  "40-50%" is an assumption
Conversion Barrier Impact % per Segment           ✗  Intensities exist but % affected unknown
Discount Elasticity by Level                      ✗  No price sensitivity testing done
BCBA Co-sign Conversion Lift                      ✗  Mentioned as booster — lift unknown
60-Day Guarantee Conversion Lift                  ✗  Universal lever — lift unknown
```

---

## 9. DATA INTEGRITY CHECK — MISSING PIECES

### 9.1 The R3 Gap (External Research — File Does Not Exist)

The most significant finding: **L7 R3 does not exist.** The file path `/root/projects/brightkidco/outputs/diagnosis/layer-07-round-03-external-research.md` resolves to nothing. File search confirmed zero results.

**Impact:**
- No external benchmarks to validate or calibrate conversion rates
- Contradiction analysis (Mission #3 requirement) cannot compare client claims to industry data
- All 16 cell conversion probabilities float without external anchor
- The "49% of 4-5 year olds not trained" SPARK stat is the ONLY external data point — everything else is internal

**Recommended action:** Fulfill R3 as a prerequisite before any Layer 7 conversion rate claims are used in email builds.

### 9.2 Secondary Gaps (Referenced but Don't Exist Independently)

| Missing Item | Referenced In | Impact | 
|:------------|:-------------|:-------|
| Layer 8 (Segmentation Mechanics) | R4 §6 (reconstructed from DOC1/DOC6) | Segmentation routing is inferred, not primary |
| Layer 3 §3.3 detailed methodology | R4 data source | Conversion probability methodology not verifiable |
| Kommentare sample sizes and collection methodology | R4 §9.2 (G4) | Small sample bias cannot be assessed directly |

---

## 10. RECOMMENDED NEXT STEPS (ORDERED)

1. **STOP using inferred conversion rates for budget decisions** — the 15-25% range for L1×P2 has a 10-point spread and no validation
2. **Run R3 (external research)** — the single highest-impact data investment. 1-2 days of competitive benchmark research validates or refutes the entire conversion probability framework
3. **Pull Klaviyo actuals** — 2 days to replace inferred rates with real data. This is a query, not research
4. **Implement phase detection** — the largest structural gap. 2-3 days to add behavioral phase detection to existing pop-up
5. **A/B test the 60-day guarantee impact** — simplest high-impact experiment. Ready to run immediately

---

*End of Layer 7 Round 5 — Conversion Probabilities Gap Analysis*
*Generated: 2026-05-24*
*Note: R3 (external research) file was confirmed missing. All conversion probability numbers in the ecosystem remain inferred rather than measured until Klaviyo actuals or external benchmarks are introduced.*
