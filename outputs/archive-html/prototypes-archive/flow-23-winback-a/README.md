# Flow 23 — Winback Path A

**Email Count:** 3 emails (4 level variants: L1, L2, L3, GF)
**Brand Constants:** Level-segmented — separate variants for L1/L2/L3/GF
**Primary Offer:** 3+3 Bundle ($79.99) — BESTSELLER; 1 Pair ($34.99) for L3

## Purpose

Re-engage customers who have been inactive for 60+ days and have not made a second purchase. This is the first of two winback paths — Path A targets customers tagged `inactive_60_days` with level-specific re-engagement copy. It uses a soft-sell approach: "We've missed you — here's what's new / here's a reminder of why you originally found us."

## Trigger Logic

**Trigger event:** Tag `inactive_60_days` applied (from flow-16 At-Risk or flow-20/21/22 replenishment flow completion without purchase). Alternatively, 60 days after the "last email open" date with no activity.

**Klaviyo setup:**
- Trigger: Tag `inactive_60_days` applied
- OR: Time-based (60 days since last email open AND `inactive_60_days` tag applied)
- Condition: `post_purchase_active` OR `welcome_completed` tag set
- Filter: No "Ordered" metric in last 60 days

## Exit Conditions

- Customer places an order → exits, enters Order Confirmation
- Customer clicks unsubscribe → exits permanently (may be moved to Sunset)
- Flow completes all 3 emails → tagged for Path B (flow-24) or Sunset (flow-27)

## Segment Filters

- **Level-segmented variants by `avatar_level`:**
  - **L1 subdir:** `avatar_level == "level1"` — Re-engage with Pre-K context refreshed, new science content
  - **L2 subdir:** `avatar_level == "level2"` — Re-engage with sensory deep-dive, new testimonials
  - **L3 subdir:** `avatar_level == "level3"` — Re-engage with dignity-first, no pressure, new late-trainer stories
  - **GF (root):** `avatar_level == "general"` or empty — Universal winback messaging
- Exclude: Customers who have already received this flow in the last 90 days

## Timing Between Emails

| Email | Timing | Theme |
|-------|--------|-------|
| E1 — Winback A1 | T+0 (on trigger) | "We missed you — here's what's changed" — new content, new stories, friendly check-in |
| E2 — Winback A2 | T+3 days | "A reminder of why you found us" — mechanism refresher + social proof |
| E3 — Winback A3 | T+7 days | "60-Day Guarantee — still here if you want to try again" — final gentle offer |

After E3 with no engagement → tagged `inactive_120_days` → enters flow-24 (Winback Path B) or flow-27 (Sunset).

## Klaviyo Setup Instructions

1. **Create flow:** Klaviyo → Flows → Create Flow → "Winback A" — Tag Trigger (inactive_60_days)
2. **Set trigger:** Tag `inactive_60_days` applied
3. **Add branch split:** Immediately split by `avatar_level` into L1/L2/L3/GF paths
4. **Each variant path:** 3 emails with level-specific re-engagement copy
5. **Add timing:** E1 immediately, E2 at T+3 days, E3 at T+7 days
6. **Add "what's new" section:** New testimonials, new educational content (if available), community updates
7. **Add mechanism refresher:** Brief re-introduction of the Body-Signal Learning Layer™ concept
8. **Add guarantee block on all emails:** 60-Day Calm Progress Guarantee
9. **Tag management:**
   - On any open/click: Remove `inactive_60_days` tag, apply `re_engaged` tag
   - On no engagement after flow: Apply `inactive_120_days` tag
10. **Sender:** "Lena from BrightKidCo" <support@brightkidco.com>
11. **UTM convention:** `?utm_source=email&utm_medium=winback&utm_campaign=winback-a`

## A/B Test Recommendations

- **Test 1 — "What's new" vs. "Remember us":** Fresh content angle vs. nostalgia/memory angle — measure re-engagement rate
- **Test 2 — Offer vs. no offer:** Offer WELCOME10 again (second use) vs. no discount — measure conversion rate vs. brand perception
- **Test 3 — Timing compression:** 3 emails over 7 days vs. 3 emails over 14 days — measure re-engagement vs. unsubscribe rate
- **Test 4 — Level-specific messaging effectiveness:** Compare re-engagement rates by level variant — identify which level responds best to which tone
- **Test 5 — Subject line personalization:** Include child's age or previous purchase in subject line vs. generic — measure open rate

## Conversion Benchmarks

- Expected open rate: 25–38%
- Expected click rate: 5–12%
- Expected re-engagement rate (open/click): 8–18%
- Expected conversion rate: 3–8%
- Unsubscribe rate target: < 2% (inactive audience — naturally higher churn)
