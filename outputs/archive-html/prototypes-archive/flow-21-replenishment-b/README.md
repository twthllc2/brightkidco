# Flow 21 — Replenishment Path B

**Email Count:** 2 emails
**Brand Constants:** GF (single variant, no level segmentation)
**Primary Offer:** 1 Pair ($34.99) or 3+3 Bundle ($79.99)

## Purpose

Replenishment flow for customers who bought a single pair ($34.99) approximately 60–90 days post-purchase. Path B targets single-pair buyers with a lower initial commitment but demonstrated product familiarity. The tone is gently encouraging — "You've seen what it can do, now consider expanding."

## Trigger Logic

**Trigger event:** Time delay — 60 days after "Ordered" metric, AND the order value < $79.99 (single pair buyer).

**Klaviyo setup:**
- Trigger: Time-based (60 days after "Ordered" metric)
- Condition: `$value < 79.99` (single pair buyer)
- Condition: `post_purchase_active` tag is set
- Filter: No recent replenishment purchase (< 7 days ago)
- Filter: No active flow-20 (Replenishment A)

## Exit Conditions

- Customer places an order → exits
- Customer clicks unsubscribe
- Flow completes both emails
- After 120 days with no purchase → tagged `inactive_120_days`

## Segment Filters

- **Single-pair buyers at 60 days post-purchase** (order value $34.99–$79.99)
- If `avatar_level` is known, tonality adjusted (L3: no math pressure, L1: practical math OK)

## Timing Between Emails

| Email | Timing | Theme |
|-------|--------|-------|
| E1 — Replenishment B1 | Day 60 | "2 months in — how's one pair working for you?" — experience check + bundle intro |
| E2 — Replenishment B2 | Day 67 | "Most parents wish they'd bought more — here's why" — social proof + bundle upsell |

## Klaviyo Setup Instructions

1. **Create flow:** Klaviyo → Flows → Create Flow → "Replenishment B" — Time-based Trigger
2. **Set trigger:** Time delay of 60 days after "Ordered" metric
3. **Add condition:** `$value < 79.99` (single pair buyer)
4. **Add timing:** E1 at T+60 days, E2 at T+67 days
5. **Add experience-based copy:** "You've had one pair for 2 months — here's what other single-pair buyers experienced"
6. **Add bundle comparison table:** 1 Pair vs. 3+3 vs. 5+5
7. **Add testimonial from bundle converters:** "I wish I'd bought the 3+3 from day one"
8. **Add guarantee block:** 60-Day Calm Progress Guarantee
9. **Apply tags:** `replen_b_1`, `replen_b_2`; `replenishment_completed` on purchase
10. **Sender:** "Lena from BrightKidCo" <support@brightkidco.com>
11. **UTM convention:** `?utm_source=email&utm_medium=replenishment&utm_campaign=replenishment-b`

## A/B Test Recommendations

- **Test 1 — Upgrade framing:** "You deserve more pairs" (self-care) vs. "Your child needs consistency" (child-focused) — measure conversion
- **Test 2 — Timing offset:** Day 60 vs. Day 45 — single-pair wear-and-tear may demand earlier replenishment
- **Test 3 — Social proof type:** Bundle converter testimonial vs. statistic ("78% of single-pair buyers upgrade by 3 months") — measure click rate
- **Test 4 — Offer:** Direct 3+3 Bundle CTA vs. comparison page CTA — measure click-to-cart rate

## Conversion Benchmarks

- Expected open rate: 38–50%
- Expected click rate: 8–16%
- Expected conversion rate (bundle upgrade): 8–15%
- Expected conversion rate (repeat single pair): 3–7%
- Unsubscribe rate target: < 0.6%
