# Flow 08 — PP-Direct Upsell

**Email Count:** 2 emails
**Brand Constants:** GF (single variant, no level segmentation)
**Primary Offer:** Accessories (Wash Bag $9.99, Mattress Protector $19.99) and bundle upgrades

## Purpose

Post-purchase upsell flow targeting customers who bought a single pair ($34.99) to convert them to the 3+3 Bundle ($79.99) or 5+5 Bundle ($119.99), or add accessories. Sent shortly after the initial order confirmation, while the customer is still in "high conviction" mode.

## Trigger Logic

**Trigger event:** Klaviyo "Ordered" metric fires, AND the order value is less than $79.99 (i.e., customer bought 1 pair only, not a bundle).

**Klaviyo setup:**
- Trigger: "Ordered" metric
- Condition: `$value < 79.99` AND `$value >= 34.99`
- Filter: `post_purchase_active` tag is set
- Filter: No previous upsell flow sent in the last 60 days

## Exit Conditions

- Customer purchases a bundle upgrade or accessory → exits and enters Order Confirmation flow
- Customer clicks unsubscribe
- Flow completes all 2 emails
- 30 days pass with no purchase → exit

## Segment Filters

- **Single-pair buyers** (order value $34.99–$79.99)
- If avatar level is known, tonality adjusted: L1 (practical math reframe OK), L2 (careful, science-first), L3 (NO math reframe — dignity-first)

## Timing Between Emails

| Email | Timing | Theme |
|-------|--------|-------|
| E1 — Upsell 1 | 2 days after order | "More pairs = less laundry" — value proposition of bundle upgrade + accessories |
| E2 — Upsell 2 | 5 days after order | "The 3+3 is our most popular choice" — social proof + bundle comparison + guarantee |

## Klaviyo Setup Instructions

1. **Create flow:** Klaviyo → Flows → Create Flow → "PP-Direct Upsell" — Metric Trigger
2. **Set trigger metric:** "Ordered" with `$value < 79.99` AND `$value >= 34.99`
3. **Add condition:** `post_purchase_active` tag exists
4. **Add timing:** E1 at T+2 days, E2 at T+5 days (from trigger)
5. **Add product display cards:** Dynamic product blocks showing bundle options and accessories
6. **Add pricing comparison table:** 1 Pair vs. 3+3 Bundle vs. 5+5 Bundle with per-pair pricing
7. **Add guarantee block:** 60-Day Calm Progress Guarantee on all purchases
8. **Conditional split (optional):** Branch by `avatar_level` for tonality-appropriate copy
9. **Sender:** "Lena from BrightKidCo" <support@brightkidco.com>
10. **UTM convention:** `?utm_source=email&utm_medium=upsell&utm_campaign=pp-direct-upsell`

## A/B Test Recommendations

- **Test 1 — Bundle positioning:** "Upgrade to 3+3 and save $XXX vs. buying singles" (math reframe) vs. "More pairs means less laundry and more consistent training" (convenience) — measure conversion
- **Test 2 — Accessory vs. bundle focus:** Primary CTA to Wash Bag ($9.99) vs. primary CTA to 3+3 Bundle upgrade ($79.99) — measure AOV
- **Test 3 — Social proof integration:** Include customer testimonial about bundle purchase vs. no testimonial — measure click-through
- **Test 4 — E1 timing:** Day 2 vs. Day 4 after order — measure conversion rate vs. perceived pushiness

## Conversion Benchmarks

- Expected open rate: 40–52%
- Expected click rate: 8–15%
- Expected conversion rate (bundle upgrade): 5–10%
- Expected conversion rate (accessory): 3–7%
- Unsubscribe rate target: < 0.6%
