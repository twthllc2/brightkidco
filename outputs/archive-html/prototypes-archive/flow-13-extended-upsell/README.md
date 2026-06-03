# Flow 13 — PP-Extended Upsell

**Email Count:** 3 emails
**Brand Constants:** GF (single variant, with level-based tonality splits optional)
**Primary Offer:** Bundle upgrades (1 Pair → 3+3 Bundle → 5+5 Bundle) and accessories

## Purpose

A second-wave upsell sequence for existing customers who bought a single pair and didn't convert during the initial upsell (flow-08). This flow runs at Day 14–30 post-purchase, after the customer has had time to use the product. The tone leverages their real-world experience and addresses the "I should have bought more" realization.

## Trigger Logic

**Trigger event:** Time delay — 14 days after "Ordered" metric, AND customer has NOT purchased a bundle upgrade (current order value < $79.99).

**Klaviyo setup:**
- Trigger: Time-based (14 days after "Ordered" metric)
- Condition: `$value < 79.99` (still on single pair)
- Condition: `post_purchase_active` tag is set
- Filter: No upsell click in the last 7 days

## Exit Conditions

- Customer purchases bundle upgrade or accessory → exits
- Customer clicks unsubscribe
- Flow completes all 3 emails
- 30 days after flow completion → enter extended education (flow-15)

## Segment Filters

- **Single-pair buyers at Day 14+** post-purchase
- If `avatar_level` is known, tonality-adjusted copy via conditional split:
  - L1: Practical — "More pairs = less laundry = less stress"
  - L2: Careful — "Give yourself the gift of not washing every night"
  - L3: Dignity-first — "Whenever you're ready, the 3+3 is here"
  - GF: Balanced — "The most common upgrade is the 3+3 Bundle"

## Timing Between Emails

| Email | Timing | Theme |
|-------|--------|-------|
| E1 — Upsell Extended 1 | Day 14 | "Now that you've felt it — imagine having more" — experience-based upsell |
| E2 — Upsell Extended 2 | Day 21 | "What 100K parents do next" — social proof + bundle comparison |
| E3 — Upsell Extended 3 | Day 28 | "60-Day Guarantee reminder — upgrade risk-free" — final offer with guarantee emphasis |

## Klaviyo Setup Instructions

1. **Create flow:** Klaviyo → Flows → Create Flow → "PP-Extended Upsell" — Time-based Trigger
2. **Set trigger:** Time delay of 14 days after "Ordered" metric
3. **Add condition:** `$value < 79.99` (single pair buyers only)
4. **Add timing:** E1 at T+14 days, E2 at T+21 days, E3 at T+28 days (from trigger)
5. **Add product comparison table:** 1 Pair ($34.99), 3+3 Bundle ($79.99), 5+5 Bundle ($119.99)
6. **Add experience-led copy:** "You've been using the Learning Layer for 2 weeks now..." (relatable)
7. **Add conditional split:** Branch by `avatar_level` for adapted pricing tonality
8. **Add guarantee block on all emails:** 60-Day Calm Progress Guarantee
9. **Add social proof:** Bundle buyer testimonials — "Wish I'd bought the 3+3 from day one"
10. **Sender:** "Lena from BrightKidCo" <support@brightkidco.com>
11. **UTM convention:** `?utm_source=email&utm_medium=upsell&utm_campaign=pp-extended-upsell`

## A/B Test Recommendations

- **Test 1 — Experience-led vs. value-led:** "Now that you've tried it" (experience) vs. "Here's the math" (value) — measure conversion rate
- **Test 2 — Timing offset:** Day 14/21/28 vs. Day 10/17/24 — find optimal purchase window
- **Test 3 — Bundle vs. accessory first:** Lead with 3+3 Bundle vs. lead with Wash Bag + Mattress Protector — measure AOV
- **Test 4 — Testimonial specificity:** L1 testimonial for L1 segment vs. universal testimonial — measure segment-specific conversion

## Conversion Benchmarks

- Expected open rate: 38–50%
- Expected click rate: 8–16%
- Expected conversion rate (bundle upgrade): 5–12%
- Expected conversion rate (accessory): 3–6%
- Unsubscribe rate target: < 0.7%
