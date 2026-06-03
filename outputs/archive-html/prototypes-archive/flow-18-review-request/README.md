# Flow 18 — Review Request

**Email Count:** 2 emails
**Brand Constants:** GF (single variant, no level segmentation)
**Primary Offer:** None — review solicitation (social proof generation)

## Purpose

Collect authentic customer reviews from post-purchase customers at the 60–90 day mark, when they have meaningful experience with the product. Reviews feed the social proof ecosystem (16,511 reviews · 4.9 ★) and provide valuable UGC for other flows. No incentives offered (no discount stacking).

## Trigger Logic

**Trigger event:** Time delay — 60 days after "Ordered" metric (aligned with guarantee window closing), OR 7 days after flow-15 (Extended Education) completes.

**Klaviyo setup:**
- Trigger: Time-based (60 days after "Ordered" metric)
- Condition: `post_purchase_active` tag is set
- Condition: No prior review submitted (`review_submitted` tag is not set)
- Filter: `total_orders >= 1`

## Exit Conditions

- Customer submits a review → `review_submitted` tag applied → exits
- Customer clicks unsubscribe
- Flow completes both emails with no review submission

## Segment Filters

- **All post-purchase customers at Day 60+** — no level segmentation
- Exclude: Customers who have already submitted a review (check `review_submitted` tag)
- Exclude: Customers who have requested a refund

## Timing Between Emails

| Email | Timing | Theme |
|-------|--------|-------|
| E1 — Review Request 1 | Day 60 (or after flow-15) | "How has your journey been?" — gentle review request + link to review platform |
| E2 — Review Request 2 | Day 67 (if no review) | "Your story helps another parent decide" — social proof framing + second request |

## Klaviyo Setup Instructions

1. **Create flow:** Klaviyo → Flows → Create Flow → "Review Request" — Time-based Trigger
2. **Set trigger:** Time delay of 60 days after "Ordered" metric (or 7 days after flow-15 completion)
3. **Add condition:** `review_submitted` tag does NOT exist
4. **Add timing:** E1 at T+60 days, E2 at T+67 days (from trigger)
5. **Add review link:** Direct link to review platform (Shopify product reviews / Yotpo / Judge.me / Stamped.io)
6. **Add Lena's framing:** "Reviews from real parents like you help other families find us"
7. **Add social proof context:** "Join 16,511 parents who've shared their story"
8. **Add guarantee mention:** "Whether you're loving it or it's still a work in progress — your honest experience matters"
9. **Apply tag on review:** Set `review_submitted = true` profile property + `review_submitted` tag
10. **Sender:** "Lena from BrightKidCo" <support@brightkidco.com>
11. **UTM convention:** `?utm_source=email&utm_medium=review&utm_campaign=review-request`

## A/B Test Recommendations

- **Test 1 — Review platform integration:** Direct link to review form vs. email reply-to collect review text — measure completion rate
- **Test 2 — Incentive vs. no incentive:** No incentive (policy) vs. "Your review helps other parents" (altruistic framing) — measure review rate
- **Test 3 — Request timing:** Day 60 (guarantee close) vs. Day 45 (higher engagement) — measure review submission rate
- **Test 4 — E2 subject line:** "Second request: Your story matters" vs. "One more nudge" — measure open and submission rate
- **Test 5 — Testimonial length guidance:** "Share 2-3 sentences" vs. "Tell us your full story" — measure review quality and volume

## Conversion Benchmarks

- Expected open rate: 35–50%
- Expected click rate (review link): 10–20%
- Expected review submission rate: 5–15%
- Expected average review rating: 4.0–4.9 ★ (self-selecting — happy customers more likely to review)
- Unsubscribe rate target: < 0.4%
