# Flow 12 — PP-Education Day 0-21

**Email Count:** 4 emails
**Brand Constants:** GF (single variant, no level segmentation at this stage — level detection happens later)
**Primary Offer:** None (pure education) — subtle product references only

## Purpose

Deliver a structured 3-week (Day 0–21) post-purchase education sequence that teaches parents how the Body-Signal Learning Layer™ works, what to expect week by week, and how to support their child's interoceptive development. This is the core value-add that reduces returns and builds long-term brand loyalty. Education/promotion ratio: 95/5.

## Trigger Logic

**Trigger event:** Time delay after flow-07 (Arrived) email sends. If flow-07 is not implemented, trigger 4 days after "Ordered" metric.

**Klaviyo setup:**
- Trigger: Time delay after flow-07 completion (or 4 days after "Ordered")
- Condition: `post_purchase_active` tag is set
- Filter: No other education flow currently active for this subscriber

## Exit Conditions

- Subscriber requests to unsubscribe
- Subscriber requests support/customization (manual exit)
- Subscriber purchases a non-BrightKidCo product (if trackable)
- Flow completes all 4 emails (exits naturally after Day 21)

## Segment Filters

- **All post-purchase customers** — no level segmentation
- If `avatar_level` is known (from flow-09, which runs concurrently), the education content can be tonality-adapted via conditional split
- Profile properties used: `first_name`, `avatar_level`, `child_age` (if available), `total_orders`

## Timing Between Emails

| Email | Timing | Theme |
|-------|--------|-------|
| E1 — Week 1 | Day 0 (immediately after Arrived) | "Week 1: The signal has arrived — now what?" — first week expectations, no pressure |
| E2 — Week 2 | Day 7 | "Week 2: Small signs you might miss" — awareness milestones, sensory development |
| E3 — Week 3 | Day 14 | "Week 3: Building the connection" — interoception tips, wearing schedule refinement |
| E4 — Week 4 | Day 21 | "Week 4: Progress check — wherever you are is right" — milestone review + check-in teaser |

After E4, subscriber transitions into flow-14 (Mid Check-In) at Day 30.

## Klaviyo Setup Instructions

1. **Create flow:** Klaviyo → Flows → Create Flow → "PP-Education Day 0-21" — Time-based Trigger
2. **Set trigger:** 4 days after "Ordered" metric (or immediately after flow-07)
3. **Add timing:** E1 at T+0, E2 at T+7 days, E3 at T+14 days, E4 at T+21 days
4. **Add education-first content:** 95/5 education/promotion ratio — mechanism explanations, interoception science, parent tips
5. **Add conditional split (optional):** Branch by `avatar_level` for adapted tonality
6. **Add social proof subtly:** Brief parent quotes woven into educational content
7. **Add guarantee reminder (E4 only):** "Remember — 60 days to try it, by your judgment"
8. **Apply tags:** `education_w1_complete` through `education_w4_complete` sequentially
9. **Trigger next flow:** After E4, schedule flow-14 (Mid Check-In) at Day 30
10. **Sender:** "Lena from BrightKidCo" <support@brightkidco.com>
11. **UTM convention:** `?utm_source=email&utm_medium=education&utm_campaign=pp-education-d0-21`

## A/B Test Recommendations

- **Test 1 — Weekly vs. bi-weekly cadence:** 4 emails over 21 days vs. 4 emails over 28 days — measure engagement rate
- **Test 2 — Milestone check-in format:** Narrative story (Lena) vs. bullet-point checklist — measure click-through to resources
- **Test 3 — Educational depth:** Deep science (interoception deep dive) vs. practical tips (wearing schedule, laundering) — measure completion rate
- **Test 4 — CTA type:** "Read more about interoception" (educational CTA) vs. "Share your week 1 experience" (engagement CTA) — measure reply rate and community engagement

## Conversion Benchmarks

- Expected open rate: 50–65% (high — post-purchase engaged audience)
- Expected click rate: 8–18%
- Expected education completion rate: 60–75%
- Unsubscribe rate target: < 0.2% (education content — very low churn)
- Expected reduction in support tickets: 15–25%
