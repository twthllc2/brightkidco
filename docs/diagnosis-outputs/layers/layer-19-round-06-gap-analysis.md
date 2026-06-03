# LAYER 19 ROUND 06 — Migration Strategy Gap Analysis

**Date:** May 25, 2026
**Status:** COMPLETE
**Inputs:** layer-19-migration-strategy.md (synthesis), layer-19-round-04-cross-reference.md
**Purpose:** Identify gaps, contradictions, missing knowledge, and edge cases in the Migration Strategy layer

---

## EXECUTIVE SUMMARY

The Migration Strategy synthesis (Layer 19 R5) provides a comprehensive framework — 4 paths, tag logic, fallback chains, and flow routing. However, there are **12 significant gaps** that must be resolved before implementation. Three are critical (block implementation), four are high-priority (affect system reliability), and five are medium (affect optimization). The most critical gap: **pre-purchase non-buyers have no migration path** — the Day 14 mail only fires for purchasers, leaving ~40-50% of General Fallback subscribers permanently stranded.

---

## GAP ANALYSIS BY MIGRATION PATH

### PATH 1: Click-Based Migration

| Gap ID | Gap Description | Severity | Impact |
|--------|----------------|----------|--------|
| GAP-01 | **Single-click trigger policy undefined** — should one click on a Level 2 story link immediately tag the subscriber, or require 2+ clicks across different emails? The synthesis mentions 10-15% false positive rate but doesn't define the threshold. | HIGH | False positives = wrong-level content = trust destroyed (60-80% conversion loss) |
| GAP-02 | **No de-duplication logic across anchors** — if an email contains both a Level 1 story link AND a Level 2 story link and the subscriber clicks both (curiosity clicks), which tag wins? Priority rules say "click-based > purchase-based" but don't resolve intra-path conflicts. | MEDIUM | Ambiguous tag assignment |
| GAP-03 | **Migration anchor click vs. primary CTA click** — the synthesis says anchors are "organically placed" as story recommendations. But what if the subscriber clicks the primary CTA (buy button) AND a migration anchor in the same email? Does the anchor click still trigger migration, or is it ignored because the primary intent was purchase? | MEDIUM | Unexpected tag changes during purchase flow |
| GAP-04 | **"Level-crossing" clickers** — what if a subscriber clicks Level 1 anchor in Email 4 and Level 3 anchor in Email 6? The one-way migration rule says they can't be downgraded, but can they be UPGRADED to a different level? The synthesis doesn't address level-to-level re-assignment. | HIGH | Permanent wrong-level lock-in |

**Recommendations for Path 1:**
1. Require minimum 2 clicks on the same level's anchor across different emails before triggering migration (reduces false positives from 10-15% to ~3-5%)
2. Define "last-click-wins" for intra-email conflicts, with a 24-hour dedup window
3. Ignore migration anchor clicks when a primary CTA (purchase) click occurs in the same email
4. Allow level re-assignment if the subscriber clicks a DIFFERENT level's anchor 2+ times (overrides previous tag)

---

### PATH 2: Reply-Based Migration

| Gap ID | Gap Description | Severity | Impact |
|--------|----------------|----------|--------|
| GAP-05 | **NLP/keyword analysis implementation undefined** — the synthesis mentions Option B (semi-automated) as Phase 2+ but provides zero technical specification. What keywords trigger what? What's the confidence threshold? What service processes the replies? | HIGH | Reply-based migration stays manual forever without spec |
| GAP-06 | **Ambiguous reply handling** — what happens when a reply contains indicators from MULTIPLE levels? E.g., "My son is 6 and verbal but has sensory issues and we've been working with an OT for years." This is Level 1 + Level 2 language. No conflict resolution defined. | MEDIUM | Ambiguous tag assignment from high-signal data |
| GAP-07 | **Reply processing SLA undefined** — the synthesis says "Lena reads replies" but doesn't define turnaround time. If replies pile up for 2 weeks, the subscriber may have already received 3-4 GF emails with wrong-level content. | MEDIUM | Delayed migration = missed conversion window |

**Recommendations for Path 2:**
1. Phase 1: create a keyword decision matrix (Level 1: "verbal", "almost trained", "pre-K", "Oh Crap"; Level 2: "BCBA", "ABA", "OT", "sensory", "withholding"; Level 3: "non-verbal", "AAC", "specialty diapers", "Medicaid")
2. For ambiguous replies: use age as tiebreaker (3-5 = L1, 5-7 = L2, 7+ = L3). If age is ambiguous, stay GF.
3. Define 48-hour processing SLA. If reply isn't processed in 48 hours, no tag change (conservative).

---

### PATH 3: Day 14 Level-Detection Mail

| Gap ID | Gap Description | Severity | Impact |
|--------|----------------|----------|--------|
| GAP-08 | **No handling for non-purchasers** — the Day 14 mail triggers on "Order Placed + 14 days." Non-buyers who entered via General Fallback have ZERO migration paths except click-based anchors in Welcome Flow emails. This is ~40-50% of the GF audience. The synthesis acknowledges this in Section 10 ("Key Decisions Needed") but doesn't resolve it. | CRITICAL | 40-50% of GF subscribers have no dedicated migration mechanism |
| GAP-09 | **Button 4 ("I'm still figuring it out") has no defined behavior** — the flow spec says "No change" on Button 4 click, but doesn't specify: does Button 4 reset any previously applied tags? Does it count as engagement (exiting the subscriber from sunset tracking)? Does it trigger any follow-up? | HIGH | Inconsistent behavior for explicitly undecided subscribers |
| GAP-10 | **Day 21 reminder undefined for already-migrated subscribers** — what if a subscriber migrates via Path 1 (click-based) between Day 0-13, then the Day 14 mail fires because the flow filter checks `avatar_level = "general"` at trigger time? If the tag was updated after the flow started but before the email sent, does the email still go out? | MEDIUM | Migrated subscribers receiving redundant migration prompts |

**Recommendations for Path 3:**
1. CRITICAL: Add a "Day 14 Non-Buyer Level-Detection" mail triggered by signup date (not purchase). Same 4-button format, different copy: "You've been here for 2 weeks — which of these sounds like your kid?"
2. Button 4: treat as "explicit opt-in to General." Set a profile property `migration_deferred = true`. Don't re-prompt for 90 days. Count as engagement (exits sunset tracking).
3. Add a flow filter check at send time (not just trigger time): `IF avatar_level != "general" THEN skip email`. Klaviyo supports this via conditional splits.

---

### PATH 4: Purchase-Based Hints

| Gap ID | Gap Description | Severity | Impact |
|--------|----------------|----------|--------|
| GAP-11 | **Confidence threshold calculation undefined** — the synthesis says "70%+ confidence required" but doesn't define HOW confidence is calculated. Is it based on size alone? Size + bundle? Size + bundle + previous click behavior? What formula produces a 70% confidence score? | HIGH | Unimplementable without a scoring formula |
| GAP-12 | **No override when Path 3 contradicts Path 4** — the cross-reference file says "Path 3's explicit self-selection overrides Path 4's inference when they conflict" but the synthesis's tag priority rules (Section 4.2) say "Day 14 Level-Detection click overrides all other signals." These are consistent, but neither specifies the MECHANICS of the override. Does the old tag get removed? Is there an audit trail? | MEDIUM | Tag conflicts with no resolution mechanism |

**Recommendations for Path 4:**
1. Define confidence scoring: `confidence = (size_score * 0.4) + (bundle_score * 0.3) + (click_history_score * 0.3)`. Size: XL/XXL = 0.9 for L3, 2T-3T = 0.8 for L1. Bundle: 1-pair = 0.6 for L3, 5+5 = 0.5 for L2.
2. When Path 3 overrides Path 4: remove old tag, add new tag, log both events in Klaviyo profile notes. Keep the old tag as `previous_avatar_level` property for audit trail.

---

## MISSING TAG/AUTOMATION DEFINITIONS

### Tags Referenced but Not Defined

| Tag | Referenced In | Definition Needed |
|-----|--------------|-------------------|
| `level3_hint` | Section 4.1 (purchase-based) | Is this a permanent tag or temporary? When does it expire? Does it influence email content before Path 3 confirms? |
| `skeptical_buyer` | Section 4.1 (purchase-based) | Does this tag affect email content? How? Does it trigger a specific flow? |
| `committed_buyer` | Section 4.1 (purchase-based) | Same as above. Also: is this tag mutually exclusive with `skeptical_buyer`? |
| `migration_deferred` | Not referenced (recommended above) | Needed for Button 4 explicit opt-out behavior |
| `previous_avatar_level` | Not referenced (recommended above) | Needed for Path 3→Path 4 override audit trail |

### Automation Rules Referenced but Not Specified

| Rule | Source | Specification Needed |
|------|--------|---------------------|
| Click-based migration flow trigger | Section 6.2 | Exact Klaviyo flow configuration: trigger type, filter conditions, action sequence |
| Reply-to-tag update workflow | Section 6.2 | Step-by-step manual process: who reviews, how fast, what template |
| Purchase hint → tag update | Section 6.2 | Klaviyo conditional split logic for size/bundle → tag |
| Post-migration flow re-entry | Section 6.3 | Does the subscriber restart the Welcome Flow from E1, or resume from where they are? |
| Mid-flow tag update behavior | Section 9.1 | What happens to the subscriber's position in the current flow when their tag changes? |

---

## EDGE CASES IDENTIFIED

### Edge Case 1: Pop-Up Skipped (Sub-Group E)
- **Scenario:** Subscriber enters via cart/browse capture (cookie-based), never saw the pop-up
- **Current behavior:** Gets `avatar_general` tag, receives GF content
- **Migration paths available:** Only Path 1 (click) and Path 3 (Day 14, if purchases). Path 2 (reply) technically available but unlikely without pop-up context.
- **Gap:** No mechanism to send this subscriber a post-signup "which level?" prompt equivalent to the pop-up
- **Recommendation:** Add a "Welcome to BrightKidCo" email (Day 1 or Day 3) for cookie-captured subscribers with the same 4-button selection format as the pop-up

### Edge Case 2: Cookie-Only Tracking
- **Scenario:** Subscriber's email is captured via Klaviyo web tracking (Viewed Product → Started Checkout → email capture via Shopify checkout) without pop-up interaction
- **Gap:** No pop-up tag = no level indicator. The subscriber is GF by default. The only pre-purchase migration path is click-based anchors in Welcome Flow emails, which require the subscriber to self-identify through story interest
- **Recommendation:** Use browse behavior (which product pages they viewed) as a weak pre-purchase signal. If they viewed Level 2-specific content, seed Level 2 anchors more prominently

### Edge Case 3: Multiple Level Indicators in Single Reply
- **Scenario:** Mom replies: "My son is 5, verbal, but has sensory issues and we've been working with an OT. He's been in ABA for 2 years."
- **Indicators:** Level 1 (verbal, age 5) + Level 2 (OT, ABA, sensory)
- **Gap:** No conflict resolution for mixed-signal replies
- **Recommendation:** Use age as primary tiebreaker, behavioral keywords as secondary. 5 years old + ABA/OT = Level 2 (the ABA/OT keywords are stronger signals than "verbal")

### Edge Case 4: Subscriber Clicks Migration Anchor but Doesn't Purchase
- **Scenario:** Subscriber clicks Level 2 story link in Welcome Flow E5, gets tagged `avatar_level2`, but never purchases
- **Gap:** The subscriber now receives Level 2 content (Welcome Flow L2 variant) but has no purchase context. The Level 2 Welcome Flow assumes a certain level of familiarity with ABA/OT that a non-buyer may not have
- **Recommendation:** Add a "Level 2 Introduction" variant for non-buyer migrants that explains the level framework before diving into level-specific content

### Edge Case 5: Path 4 Fires Before Path 1/2 Can Act
- **Scenario:** Subscriber purchases on Day 2 (very early). Path 4 fires immediately with XL size hint → tagged `avatar_level3`. But the subscriber hasn't received Welcome Flow E4-E8 yet (those contain migration anchors). On Day 14, Path 3 fires and the subscriber clicks Level 1.
- **Gap:** The subscriber spent 12 days receiving Level 3 content (wrong level) before Path 3 corrected it
- **Recommendation:** Path 4 should NOT tag immediately on purchase. Instead, store the hint as `level3_hint` tag only, and wait for Path 3 confirmation. If Path 3 doesn't fire (subscriber doesn't click), THEN apply the Path 4 tag at Day 28.

### Edge Case 6: Subscriber Migrates Mid-Flow
- **Scenario:** Subscriber is in Welcome Flow E6 (GF variant). Clicks a Level 2 migration anchor. Gets tagged `avatar_level2`. They are still in the middle of the GF Welcome Flow.
- **Gap:** Does the subscriber exit the GF Welcome Flow and enter the L2 Welcome Flow? Or finish the GF flow first? If they restart, they get E1-E3 again (duplicate content). If they don't restart, they miss L2-specific E1-E3.
- **Recommendation:**
  - If `welcome_completed = false`: exit GF Welcome Flow, enter L2 Welcome Flow at E4 (skip E1-E3 to avoid duplicate intro content)
  - If `welcome_completed = true`: enter L2-specific FAQ/Objection Library (next flow in sequence)

### Edge Case 7: Multiple Purchases with Different Sizes
- **Scenario:** Subscriber buys 2T-3T (hint: Level 1) on first order, then XL (hint: Level 3) on second order (for a different child or size-up)
- **Gap:** Path 4 uses `last_purchase_size` — the second order overwrites the first. But if the subscriber has two children at different levels, the tag is wrong for one
- **Recommendation:** BrightKidCo is single-child-focused per subscriber profile. This is an edge case to document but not solve. The Day 14 mail (Path 3) resolves this through self-selection.

### Edge Case 8: Re-Engaged Subscriber After Sunset
- **Scenario:** Subscriber was GF, entered Sunset Flow at Day 120, clicked "I want to stay" in Sunset E1, re-engaged
- **Gap:** The subscriber re-enters the active segment but is still `avatar_general`. Are they eligible for migration again? Which paths are available?
- **Recommendation:** Yes — re-engaged subscribers re-enter all available migration paths. They should receive migration anchors in the next 2-3 GF emails. If they've already purchased, they're eligible for Path 3 re-send (another Day 14 mail, 14 days after re-engagement).

---

## CONTRADICTIONS BETWEEN SOURCES

### Contradiction 1: Migration Rate Estimates

| Source | Claim |
|--------|-------|
| Synthesis Section 5.3 (Cumulative Migration) | "~45-60% of original GF migrated" over lifecycle |
| Cross-Reference Section 5 (Master Fallback) | "~25-35% stay GF permanently" (= 65-75% migrate) |
| Synthesis Section 2.4 (Path 4 Expected) | "40-50% migration from General to specific level" from Day 14 alone |

**Analysis:** The cumulative migration estimate (45-60%) and the "stay GF permanently" estimate (25-35%) are contradictory. If Day 14 alone migrates 40-50% of purchasers, and purchasers are ~50% of GF, that's 20-25% of GF from Path 3 alone. Adding Path 1 (15-30%) and Path 2 (1-3%) should yield 36-58% total — which aligns with the 45-60% figure, not 65-75%.

**Resolution:** The cross-reference's 65-75% figure appears to include ALL lifecycle migration (including winback re-engagement). The synthesis's 45-60% excludes winback migration. Both are plausible depending on the time horizon. **Recommendation:** standardize on a 12-month lifecycle view and reconcile both estimates.

### Contradiction 2: Sub-Group B Treatment

| Source | Claim |
|--------|-------|
| Cross-Reference Section 4 (Sub-Group Matrix) | "Diagnosis-Rejecters: <15% success. BEST PATH: NONE — stay GF" |
| Synthesis Section 4.3 (One-Way Rule) | "The only exception is if the subscriber explicitly requests it (e.g., clicks 'I'm still figuring it out' in the Day 14 mail)" |

**Analysis:** Sub-Group B should NEVER be pushed to migration. But the Day 14 mail goes to ALL GF purchasers, including Sub-Group B. If a Sub-Group B mom clicks Button 4 ("I'm still figuring it out"), that's fine. But if she clicks Button 2 (Level 2) because she's exploring, she gets tagged — violating the "never push" rule.

**Resolution:** The "never push" rule means don't design specific migration campaigns targeting Sub-Group B. It does NOT mean block self-selection. If a Sub-Group B subscriber voluntarily clicks a level button, that's their choice. **Recommendation:** clarify that Sub-Group B gets no PUSH migration (no targeted campaigns) but retains SELF-SELECT migration (click-based and Day 14).

### Contradiction 3: Sunset Window for Level 3

| Source | Claim |
|--------|-------|
| Synthesis Section 3.1 (Sunset) | "Level 3 moms have longer engagement cycles (45+ days between opens is normal)" and "120-day window is appropriate" |
| Synthesis Section 10 (Key Decisions) | "Should Level 3 tagged subscribers get a 180-day window?" |

**Analysis:** The synthesis simultaneously says 120 days is appropriate AND asks whether 180 days is needed. This is an unresolved decision, not a contradiction per se, but it creates ambiguity in the implementation spec.

**Resolution:** Start with 120 days for all levels. Monitor Level 3 engagement patterns for 90 days post-launch. If Level 3 unsubscribe rate exceeds 5% in the sunset flow, extend to 180 days.

### Contradiction 4: Flow Entry After Migration

| Source | Claim |
|--------|-------|
| Cross-Reference Section 3 (Flow Routing) | After migration, subscriber enters "Level-specific Welcome Flow (if `welcome_completed = false`) OR PP-Extended Education (if purchased)" |
| Synthesis Section 5.1 (Flow Mapping) | After migration, subscriber enters level-specific flows based on lifecycle stage |

**Analysis:** The cross-reference implies that `welcome_completed` is the gate for Welcome Flow re-entry. The synthesis implies lifecycle stage (pre-purchase vs post-purchase) is the gate. These can conflict: a subscriber who purchased but never completed the Welcome Flow should enter which flow?

**Resolution:** `welcome_completed` takes priority. If false, enter level-specific Welcome Flow regardless of purchase status. If true, enter PP-Extended Education (if purchased) or FAQ/Objection Library (if not purchased).

---

## BENCHMARK AND SUCCESS METRIC REQUIREMENTS

### Migration System KPIs

| KPI | Target | Measurement Frequency | Data Source |
|-----|--------|----------------------|-------------|
| Overall GF → Specific migration rate | 45-60% within 12 months | Monthly | Klaviyo segment tracking |
| Day 14 Level-Detection open rate | 65-75% | Per send | Klaviyo flow analytics |
| Day 14 Level-Detection click rate (any button) | 35-50% | Per send | Klaviyo flow analytics |
| Day 14 button distribution | L1: 30%, L2: 40%, L3: 15%, Stay GF: 15% | Monthly | Klaviyo click tracking |
| Click-based anchor click rate | 5-12% per email | Per send | Klaviyo link tracking |
| Cumulative click-based migration | 15-30% over Welcome Flow | Monthly | Tag change tracking |
| Reply-based migration | 1-3% of GF | Monthly | Manual tracking / tag changes |
| False positive rate (wrong-level tag) | <5% | Quarterly | Survey / disengagement analysis |
| Post-migration conversion uplift | +30-50% vs. GF baseline | Monthly | Klaviyo revenue attribution |
| Sunset flow re-engagement rate | 10-20% | Per sunset cycle | Klaviyo flow analytics |

### Path-Specific Benchmarks

| Path | Metric | Benchmark | Alert Threshold |
|------|--------|-----------|-----------------|
| Path 1 | Anchor click rate | 5-12% | <3% = anchors not resonating |
| Path 1 | Migration per email | 2-5% of GF | <1% = anchors ineffective |
| Path 2 | Reply rate | 2-5% | <1% = reply CTAs weak |
| Path 2 | Processing turnaround | <48 hours | >72 hours = backlog issue |
| Path 3 | Open rate | 65-75% | <50% = subject line problem |
| Path 3 | Click rate | 35-50% | <20% = copy/format problem |
| Path 3 | Migration rate | 40-50% of openers | <25% = buttons unclear |
| Path 4 | Hint accuracy | 40-60% | <30% = size/bundle correlation weak |
| Path 4 | Confidence threshold hit rate | 20-30% of hints | <10% = threshold too strict |

### A/B Test Roadmap

| Test | Hypothesis | Metric | Priority |
|------|-----------|--------|----------|
| Day 14 subject line variants | "Quick question about your kid" vs. "Which sounds like [name]?" | Open rate | HIGH |
| Migration anchor placement | Top of email vs. bottom of email vs. inline | Click rate | MEDIUM |
| Button 4 copy | "I'm still figuring it out" vs. "Not sure yet — keep it general" | Click distribution | MEDIUM |
| Migration anchor count | 3 anchors vs. 4 anchors per email | Migration rate + unsubscribe rate | LOW |
| Day 21 reminder value | Send reminder vs. no reminder | Net migration uplift | HIGH |

---

## PRIORITIZED RESOLUTION RECOMMENDATIONS

### CRITICAL — Must Resolve Before Implementation

| Priority | Gap | Recommendation | Effort |
|----------|-----|----------------|--------|
| 1 | GAP-08: No pre-purchase migration for non-buyers | Add "Day 14 Non-Buyer Level-Detection" mail triggered by signup date. Same 4-button format, different copy. | 1 day (copy + flow setup) |
| 2 | GAP-01: Single-click trigger policy | Require 2+ clicks on same level anchor across different emails. Implement as Klaviyo flow with click counter. | 2 days (flow logic + testing) |
| 3 | GAP-11: Confidence threshold undefined | Define scoring formula: `size_score * 0.4 + bundle_score * 0.3 + click_score * 0.3`. Document weights. | 1 day (formula + documentation) |

### HIGH — Resolve Within First 30 Days

| Priority | Gap | Recommendation | Effort |
|----------|-----|----------------|--------|
| 4 | GAP-04: Level-to-level re-assignment | Allow re-tagging if subscriber clicks different level's anchor 2+ times. Log previous tag. | 1 day (flow update) |
| 5 | GAP-05: Reply NLP implementation | Phase 1: keyword decision matrix. Phase 2: webhook → NLP service. Phase 3: fully automated. | 3 days Phase 1, 2 weeks Phase 2 |
| 6 | GAP-09: Button 4 behavior | Set `migration_deferred = true`. Don't re-prompt for 90 days. Count as engagement. | 0.5 days (flow update) |
| 7 | GAP-10: Day 14 mail for already-migrated | Add send-time filter: `IF avatar_level != "general" THEN skip`. | 0.5 days (flow filter) |

### MEDIUM — Resolve Before Optimization Phase

| Priority | Gap | Recommendation | Effort |
|----------|-----|----------------|--------|
| 8 | GAP-02: Intra-email click conflict | "Last-click-wins" with 24-hour dedup window. | 0.5 days |
| 9 | GAP-03: Anchor vs. CTA click | Ignore anchor click when primary CTA click occurs in same email. | 0.5 days |
| 10 | GAP-06: Ambiguous reply handling | Age as tiebreaker, behavioral keywords as secondary. | 0.5 days (documentation) |
| 11 | GAP-07: Reply processing SLA | 48-hour SLA. If not processed, no tag change. | 0.5 days (process documentation) |
| 12 | GAP-12: Path 3→4 override mechanics | Remove old tag, add new tag, log both in profile notes. Keep `previous_avatar_level`. | 0.5 days |

---

## SUMMARY

The Migration Strategy is architecturally sound — 4 independent, parallel-safe paths with zero-harm fallbacks. But implementation requires resolving 12 gaps, 3 of which are critical:

1. **Non-buyers have no migration path** — the biggest gap. 40-50% of GF subscribers are stranded without a dedicated level-detection mechanism.
2. **Single-click trigger policy** — the false positive risk from curiosity clicks is unaddressed.
3. **Confidence threshold formula** — Path 4 is unimplementable without a scoring model.

With these 3 resolved, the migration system can be implemented in phases:
- Phase 1 (Week 1-2): Path 3 (Day 14 mail) + Path 4 (purchase hints) — highest impact
- Phase 2 (Week 3-4): Path 1 (click-based anchors) — passive, ongoing
- Phase 3 (Month 2+): Path 2 (reply-based) — manual process, scales later

Expected outcome after full implementation: 45-60% of General Fallback subscribers migrate to level-specific tracks within 12 months, with post-migration conversion uplift of 30-50%.
