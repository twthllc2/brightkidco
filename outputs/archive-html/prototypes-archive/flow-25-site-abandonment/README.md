# Flow 25 — Site Abandonment

**Email Count:** 1 email
**Brand Constants:** GF (single variant, no level segmentation)
**Primary Offer:** 3+3 Bundle ($79.99) — BESTSELLER

## Purpose

Re-engage visitors who browsed the main site (homepage, about, FAQ pages) but never navigated to a product page. This is the lightest-touch flow — one email that serves as a brand awareness nudge, introducing the mechanism and the 60-Day Guarantee. It's the top-of-funnel recovery for general interest visitors.

## Trigger Logic

**Trigger event:** Klaviyo "Viewed Page" metric fires for non-product pages (homepage, /pages/about, /pages/faq, /pages/parent-stories) AND no "Viewed Product" metric in the same session, AND no "Added to Cart" or "Ordered" metric within 30 minutes.

**Klaviyo setup:**
- Trigger: "Viewed Page" metric (specific page URL filters — not product pages)
- Condition: No "Viewed Product" metric in the same browser session
- Condition: No "Added to Cart" or "Ordered" in the last 30 minutes
- Filter: `$email` is not empty (captured via Klaviyo form popup)

## Exit Conditions

- Visitor places an order → exits
- Visitor clicks unsubscribe
- Single email — exits after send
- Visitor browses product pages → may enter Browse Abandonment (flow-10) instead

## Segment Filters

- **General site visitors who viewed non-product pages** — no level segmentation
- Exclude: Current customers (post_purchase_active tag)
- Exclude: Visitors already in Welcome Flow (flow-01)

## Timing Between Emails

| Email | Timing | Theme |
|-------|--------|-------|
| E1 — Site Abandonment | 30 minutes after non-product page view | "Curious about BrightKidCo?" — brand intro + mechanism teaser + 60-Day Guarantee |

Single email — no follow-up. If no response → no further flow (too low-intent to warrant multi-email sequence).

## Klaviyo Setup Instructions

1. **Create flow:** Klaviyo → Flows → Create Flow → "Site Abandonment" — Metric Trigger
2. **Set trigger metric:** "Viewed Page" with URL condition (NOT containing "/products/" or "/collections/")
3. **Add wait filter:** 30-minute window for "Viewed Product", "Added to Cart", or "Ordered"
4. **Send single email only** — no follow-up sequence
5. **Add brand introduction:** "You found BrightKidCo — here's what makes us different"
6. **Add mechanism summary:** 2-3 sentence intro to Body-Signal Learning Layer™ concept
7. **Add 60-Day Guarantee:** "Try it for 60 days. By your judgment."
8. **Add social proof:** 16,511 reviews · 4.9 ★
9. **Apply tags (optional):** `site_abandoned` for analytics tracking
10. **Sender:** "Lena from BrightKidCo" <support@brightkidco.com>
11. **UTM convention:** `?utm_source=email&utm_medium=site&utm_campaign=site-abandonment`

## A/B Test Recommendations

- **Test 1 — Email vs. no email:** Test whether sending any email at all improves conversion for low-intent visitors vs. leaving them alone — measure downstream conversion over 30 days
- **Test 2 — Educational vs. promotional:** "How the Body-Signal Learning Layer works" (educational) vs. "See our best-selling bundle" (promotional) — measure click rate
- **Test 3 — CTA:** "Learn how it works" vs. "Browse our bundles" vs. "Meet Lena" — measure click-through and downstream conversion
- **Test 4 — Send delay:** 30 minutes vs. 2 hours vs. 24 hours — find optimal balance between relevance and non-intrusiveness

## Conversion Benchmarks

- Expected open rate: 30–45%
- Expected click rate: 5–12%
- Expected conversion rate: 1–4%
- Unsubscribe rate target: < 0.5%
