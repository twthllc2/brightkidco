# Flow 10 — Browse Abandonment

**Email Count:** 5 emails
**Brand Constants:** GF (single variant, no level segmentation)
**Primary Offer:** 3+3 Bundle ($79.99) — BESTSELLER

## Purpose

Re-engage visitors who browsed the site and viewed product pages but did not add to cart. This flow is the lightest-touch recovery — it educates rather than sells, building interest in the mechanism before asking for a purchase. Five emails allow a gradual arc from awareness to consideration to conversion.

## Trigger Logic

**Trigger event:** Klaviyo "Viewed Product" metric fires (2+ product page views in a session) and no "Added to Cart" or "Ordered" metric within 1 hour.

**Klaviyo setup:**
- Trigger: "Viewed Product" metric (consider using a threshold of 2+ page views in 1 hour)
- Condition: No "Added to Cart" in the last 60 minutes
- Condition: No "Ordered" in the last 60 minutes
- Filter: `$email` is not empty

## Exit Conditions

- Subscriber places an order → exits immediately
- Subscriber clicks unsubscribe
- Flow completes all 5 emails
- Subscriber enters Welcome Flow (triggered by separate signup) → browse abandonment is paused

## Segment Filters

- **All site visitors who viewed product pages** but did not add to cart
- If `avatar_level` is known (e.g., from a prior level detection flow), tonality is adjusted via conditional split
- Exclude: Users currently in Welcome Flow (flow-01) or Cart Abandonment (flow-02)

## Timing Between Emails

| Email | Timing | Theme |
|-------|--------|-------|
| E1 — Browse 1h | 1 hour after browsing | "Curious about the Body-Signal Learning Layer?" — mechanism intro |
| E2 — Browse 24h | 24 hours after browsing | "How pull-ups make potty training harder" — educational reframe |
| E3 — Browse 72h | 72 hours after browsing | "100K parents switched — here's why" — social proof with statistics |
| E4 — Browse Day 7 | 7 days after browsing | "Try it for 60 days. By your judgment." — guarantee emphasis + testimonial |
| E5 — Browse Day 14 | 14 days after browsing | "Last touch — bookmarked for when you're ready" — gentle close with link to shop |

## Klaviyo Setup Instructions

1. **Create flow:** Klaviyo → Flows → Create Flow → "Browse Abandonment" — Metric Trigger
2. **Set trigger metric:** "Viewed Product" with 2+ views threshold (use Klaviyo's rate-limiter or custom event)
3. **Add wait filter:** 1-hour window for "Added to Cart" or "Ordered" before E1 sends
4. **Add timing:** Use the timing from the table above between emails
5. **Add product dynamic block:** Show recently viewed products via `{{ event.extra.ItemsViewed }}`
6. **Add social proof bar:** 16,511 reviews · 4.9 ★ · 60-Day Guarantee
7. **Conditional split (optional):** Branch by `avatar_level` for tonality
8. **Tags applied:** `browse_abandonment_engaged` on E2 click; `browse_abandonment_converted` on purchase
9. **Sender:** "Lena from BrightKidCo" <support@brightkidco.com>
10. **UTM convention:** `?utm_source=email&utm_medium=browse&utm_campaign=browse-abandonment`

## A/B Test Recommendations

- **Test 1 — Sequence length:** 5 emails vs. 3 emails (condensed) — measure conversion rate vs. unsubscribe rate
- **Test 2 — Educational vs. promotional ratio:** 80/20 education vs. 60/40 promotion — measure click-through and conversion
- **Test 3 — E1 subject line:** "Not all potty training is created equal" (curiosity) vs. "You were checking us out?" (direct) — measure open rate
- **Test 4 — Guarantee position:** Guarantee in E3 vs. E4 vs. E5 — determine optimal timing for risk reversal
- **Test 5 — Social proof type:** Testimonial-based vs. statistic-based (16,511 reviews) — measure click-to-shop

## Conversion Benchmarks

- Expected open rate: 35–48% (early emails), 25–35% (later emails)
- Expected click rate: 5–12%
- Expected conversion rate: 2–6%
- Unsubscribe rate target: < 1% (total across 5 emails)
