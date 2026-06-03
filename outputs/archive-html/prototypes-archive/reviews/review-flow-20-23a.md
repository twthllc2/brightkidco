# Flow Review: Replenishment A/B/C (20/21/22) + Winback A (23)

**Reviewer:** ops11  
**Date:** 2026-05-26  
**Source Documents:** 1-full-email-strategy.md, 2-full-email-copy-strategy.md, flow-replenishment skill, flow-winback skill

---

## 1. Replenishment Path A (Flow 20) — 3 Emails

**Trigger:** `buyer_1pair` tag + Day 14  
**Goal:** 1-pair buyers → reorder (upgrade to 3+3 Bundle, $79.99)  
**Timing:** 7-day window (D14, D18, D21)

### Email Structure

| # | Day | Angle | Status |
|:-:|:---:|-------|:------:|
| E1 | 14 | "You might be running low" — introduce 3+3 upgrade | Defined |
| E2 | 18 | Value comparison — cost per pair: 3+3 vs 1-pair | Defined (minimal detail) |
| E3 | 21 | Final + 60-day guarantee applies to upgrade | Defined (minimal detail) |

### Review

**Strengths:**
- Timing at Day 14 is logical — 2 weeks of daily wear justifies the "running low" trigger
- Upsell path is clear: 1-pair → 3+3 Bundle ($79.99) with value angle on E2
- Reassurance on E3 (guarantee) addresses commitment anxiety for the upsell

**Issues:**
- E2 and E3 lack defined messaging angles in source material — copy strategy says "Value Comparison" and "Final + Guarantee" but no actual copy lines
- Only 7-day window (D14-D21) — if the subscriber doesn't convert in those 7 days, they exit the flow permanently with no re-entry mechanism
- No exclusion filter documented for "already upgraded" — a subscriber who buys 3+3 via another path could still get these emails
- No subject line variants documented

**Recommendations:**
1. Add specific subject line options for all 3 emails
2. Define full messaging copy for E2 (cost-per-pair comparison) and E3 (guarantee angle)
3. Add a conditional split: if subscriber has already upgraded to 3+3, end flow
4. Consider a re-entry window (e.g., re-enter if still `buyer_1pair` after 90 days)

---

## 2. Replenishment Path B (Flow 21) — 2 Emails

**Trigger:** `buyer_3plus3` tag + Day 75  
**Goal:** 3+3 buyers → reorder (upgrade to 5+5 Bundle, $119.99)  
**Timing:** 5-day window (D75, D80)

### Email Structure

| # | Day | Angle | Status |
|:-:|:---:|-------|:------:|
| E1 | 75 | "10+ weeks in. You might need more coverage." — introduce 5+5 upgrade | Defined |
| E2 | 80 | Final push | Defined (minimal detail) |

### Review

**Strengths:**
- Timing at Day 75 (~2.5 months) is realistic for a 3+3 rotation — 6 pairs worn weekly would begin showing wear by this point
- Continues the upgrade ladder logic: 1-pair → 3+3 → 5+5

**Issues:**
- E2 has no defined angle beyond "Final push" — no copy, no offer, no subject lines
- Only 2 emails feels light for the $40 price jump ($79.99 → $119.99). This is a significant upsell with no middle email for value breakdown
- No discount or incentive to reorder at this stage — subscribers who haven't already upgraded lack a compelling reason at Day 75
- 5+5 Bundle at $119.99 is a significant ask with only 2 emails and no discount layer

**Recommendations:**
1. Add a value breakdown email between E1 and E2: "You're using 6 pairs for weekly rotation — adding 4 more gives you 10 choices without doing laundry more often"
2. Define E2 copy with urgency angle: limited-time pricing or exclusive access
3. Consider extending to 3 emails given the price point of the upsell ($40 jump)
4. Add subject line variants

---

## 3. Replenishment Path C (Flow 22) — 2 Emails

**Trigger:** `buyer_5plus5` tag + Day 150  
**Goal:** 5+5 buyers → accessories cross-sell (Wash Bag $12.99, Mattress Protector $24.99)  
**Timing:** 5-day window (D150, D155)

### Email Structure

| # | Day | Angle | Status |
|:-:|:---:|-------|:------:|
| E1 | 150 | "5 months in. The underwear is holding up. How about the accessories?" | Defined |
| E2 | 155 | Final | Defined (minimal detail) |

### Review

**Strengths:**
- 150-day delay makes sense — 5+5 buyers have 10 pairs, so rotation is deep and wear is minimal
- The "underwear is holding up" angle is smart: it validates the product quality before upselling

**Issues:**
- This is a cross-sell ($12.99-$24.99), not a replenishment — calling it "Replenishment Path C" is misleading. It's accessory upsell to a fully-stocked buyer
- $12.99-$24.99 accessories feel like a low-urgency offer for a subscriber on Day 150 — the why-now is weak
- No bundling: Wash Bag + Mattress Protector together at a small discount would increase AOV
- E2 has no defined angle or copy

**Recommendations:**
1. Rename to "Accessories Cross-Sell (Flow 22)" — more honest than "Replenishment C"
2. Bundle the accessories: "Wash Bag + Mattress Protector for $32.99 (save $5)"
3. Add a care/maintenance angle: "Your 10 pairs have lasted 5 months. Here's how to keep them going another 5."
4. Consider adding a 3rd email at Day 180 for straight replacement (buy new 5+5 set)
5. Define E2 copy

---

## 4. Winback Path A (Flow 23) — 3 Emails × 4 Level Variants

**Trigger:** `inactive_60_days` + ever purchased  
**Goal:** Re-engage post-buyer inactive subscribers  
**Timing:** 3-week sequence (D0, D7, D14)  
**Variants:** Level 1, Level 2, Level 3, General Fallback (GF)

### Email Structure

| # | Day | L1 | L2 | L3 | GF | Status |
|:-:|:---:|:--:|:--:|:--:|:--:|:------:|
| E1 | 0 | Pre-K anchor re-engage | Respectful mechanism reminder | Spacious, patient — late-trainer story | Curious + soft — "It's been a while. No pressure." | All defined |
| E2 | 7 | "No pressure — if kid still in pull-ups" | Zero urgency, science refresh | "Late is not never" — Maureen Bennie story | Inclusive reframe | Defined |
| E3 | 14 | Gentle nudge → sunset or reorder | Permission → sunset | Quiet → sunset | Soft close → sunset | Defined |

### Review: General Fallback (GF) Variant

**GF E1 — Day 0: "It's been a while. No pressure."**
- **Strength:** The tone is right — light, curious, non-judgmental. For GF subscribers (no level detected), this is the safest opening. It doesn't assume their kid's age or training stage.
- **Weakness:** "No pressure" is passive. A GF subscriber by definition has no level data — we don't know why they disengaged. A slightly more specific re-engagement hook would help (e.g., "It's been a while — did you find what you were looking for?").
- **Recommendation:** Add 1-2 curiosity-driven variations to A/B test. The GF bucket is the largest unknown segment — copy should try to learn about them, not just soft-close.

**GF E2 — Day 7: Inclusive reframe**
- **Strength:** Inclusive reframe works well for GF — doesn't assume Level, doesn't use Level-specific language. It can touch on the universal experience of potty training difficulty.
- **Weakness:** "Inclusive reframe" is too vague in the source. What is the reframe? The strategy doc says the angle but no actual copy.
- **Recommendation:** Define the reframe. E.g., "Whether you're still figuring it out, taking a break, or somewhere in between — we're here when you need us."

**GF E3 — Day 14: Soft close → sunset**
- **Strength:** Correct lifecycle positioning. If the subscriber doesn't engage after 3 emails over 3 weeks, they move to sunset. No hard sell, no guilt.
- **Weakness:** Same as E2 — "soft close" needs concrete copy. What does "soft close" look like for GF?
- **Recommendation:** Write the actual close. E.g., "We've loved being part of your journey. If you'd like to stay, just click below. If not — we understand completely."

### Overall Winback A Review

**Issues:**
1. **GF variant lacks depth.** The Level 1/2/3 variants have specific, researched messaging. GF is left as vague directional descriptions ("curious + soft", "inclusive reframe", "soft close") with no actual copy execution. GF will be the largest segment initially (most subscribers won't have level tags early on) — it needs the most attention, not the least.
2. **No subject line variants** documented for any of the 12 emails.
3. **No discount offer.** The standard winback flow (per flow-winback skill) includes a discount in E2. This winback has no discount at all — relying purely on emotional re-engagement. Without a discount or offer, conversion expectations should be set low (sub-3%).
4. **No conditional split documented** — "Has subscriber re-engaged/purchased?" If yes, exit to active flows. If no, continue.
5. **No re-entry logic.** After the winback sequence, the subscriber goes to sunset at 120 days. But if they re-engage at Day 90, do they re-enter? Current doc says no.

**Recommendations:**
1. **Flesh out GF copy fully.** The General Fallback is the backbone — every subscriber without a level tag lands here. Give it real copy, not directional descriptions.
2. **Add subject line variants** for all 3 emails × 4 variants (12 subject line sets minimum).
3. **Consider adding a light discount to E2** — even 10% off with code COMEBACK10 would lift conversion measurably. Current flow has zero conversion incentive.
4. **Add conditional purchase split** before E2 and E3: "Has subscriber purchased since entering this flow?" If yes → route to active post-purchase flow, exit winback.
5. **Define engagement gate** for re-entry into active flows: what action constitutes "re-engaged"? Click? Open? Purchase? This is undefined.

---

## 5. Cross-Flow Issues (20-23)

### 5.1 Missing Subject Lines
None of the 4 flows have documented subject line variants. Subject lines are critical for re-engagement flows (winback) and replenishment flows (timing-sensitive). **This is the biggest gap across all 4 flows.**

### 5.2 No A/B Testing Plan
No flow has an A/B testing protocol for:
- Subject lines
- Send timing
- Offer vs. no-offer (winback)
- Email count (replenishment B: 2 vs. 3 emails)

### 5.3 Conditional Split Gaps
- Flow 20-22: No documented check for "already upgraded" — subscriber who bought via another flow still receives replenishment emails
- Flow 23: No purchase split between emails — subscriber who re-engages at E1 still receives E2 and E3

### 5.4 GF Dependency
The General Fallback variant in Winback A needs to be the most robust, not the least. It serves all subscribers without level detection — potentially 40-60% of the winback audience in early months. Currently it has the weakest copy definition.

### 5.5 Re-entry Windows
- Replenishment A (Flow 20): No re-entry documented. 1-pair buyer at Day 14 gets 3 emails. If they don't convert, they never get reminded again.
- Replenishment B/C: Same — one-shot sequences with no re-entry.
- Winback A: Goes to sunset after 14 days. If subscriber comes back at Day 90, there's no documented re-entry to winback or an active flow.

### 5.6 Analytics & Tracking
No flow has documented:
- Expected open rates
- Expected click rates
- Expected conversion rates
- Success criteria for continuing / iterating / deprecating

---

## 6. Summary Assessment

| Flow | Emails | Readiness | Top Priority Fix |
|:----:|:------:|:---------:|------------------|
| Flow 20 (Replenish A) | 3 | 50% | Missing copy for E2/E3; no subject lines |
| Flow 21 (Replenish B) | 2 | 40% | Too light for $40 upsell; missing E2 copy |
| Flow 22 (Replenish C) | 2 | 40% | Mislabeled (it's cross-sell); missing E2 |
| Flow 23 Winback A GF | 3 × 4 | 35% | GF copy is too vague; no subject lines; no discount |

**Overall:** The strategy frameworks are solid — correct triggers, correct timing, correct lifecycle positioning. The gaps are in execution: copy detail, subject lines, conditional splits, and re-entry logic. The Winback A GF variant in particular needs full copy execution before it can be prototyped effectively.

**Next actionable step:** Write full copy for GF Winback A variant (E1/E2/E3), then define subject line sets for all 12 Winback A emails, then finish Replenishment A/B/C copy gaps.
