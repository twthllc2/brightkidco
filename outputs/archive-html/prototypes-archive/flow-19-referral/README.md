# Flow 19 — Referral Flow

**Email Count:** 3 emails
**Brand Constants:** GF (single variant, no level segmentation)
**Primary Offer:** Referral program — refer-a-friend

## Purpose

Encourage existing customers to refer friends and family to BrightKidCo. This flow taps into the authentic parent community — parents who've seen results naturally tell other parents. The flow provides a simple referral mechanism (share link, code, or social share) and reinforces the brand's community-driven growth model.

## Trigger Logic

**Trigger event:** Time delay — 45 days after "Ordered" metric (after customer has meaningful product experience), OR triggered by specific event: customer clicks "Share with a friend" link in any email.

**Klaviyo setup:**
- Trigger Options:
  - Option A: Time-based (45 days after "Ordered" metric)
  - Option B: Custom event "Referral Link Clicked"
  - Option C: Conditional branch from flow-14 (Mid Check-In E3) for satisfied customers
- Condition: `total_orders >= 1`
- Filter: Not already referred (check `referral_sent` tag)

## Exit Conditions

- Customer submits a referral (referral link clicked / friend email submitted) → tag `referral_completed`
- Customer clicks unsubscribe
- Flow completes all 3 emails

## Segment Filters

- **All post-purchase customers at Day 45+**
- Exclude: Customers with `referral_sent` tag already applied
- Optional split: High-LTV customers (`lifetime_value > 200`) get VIP referral messaging

## Timing Between Emails

| Email | Timing | Theme |
|-------|--------|-------|
| E1 — Referral 1 | Day 45 | "Know another parent who's struggling?" — referral ask with social proof |
| E2 — Referral 2 | Day 52 | "Your friend gets 10% off too" — mutual benefit framing |
| E3 — Referral 3 | Day 59 | "Help us reach more families" — community impact framing + final ask |

## Klaviyo Setup Instructions

1. **Create flow:** Klaviyo → Flows → Create Flow → "Referral Flow" — Time-based Trigger or Event-based
2. **Set trigger:** Time delay of 45 days after "Ordered" metric
3. **Add condition:** `referral_sent` does NOT exist
4. **Add timing:** E1 at T+45 days, E2 at T+52 days, E3 at T+59 days
5. **Integrate referral platform:** Use Klaviyo + referral app (Yotpo Referrals, ReferralCandy, or custom)
6. **Add dynamic referral link:** `{{ referral_link }}` in each email
7. **Add social proof framing:** "Parents trust recommendations from other parents"
8. **Add testimonial from referrer (optional):** "Here's why [Name] shared us with her sister"
9. **Apply tags:** `referral_1_sent` through `referral_3_sent` sequentially; `referral_completed` on successful referral
10. **Note on incentives:** No discount stacking — ensure referral reward is a separate code, not WELCOME10
11. **Sender:** "Lena from BrightKidCo" <support@brightkidco.com>
12. **UTM convention:** `?utm_source=email&utm_medium=referral&utm_campaign=referral`

## A/B Test Recommendations

- **Test 1 — Ask framing:** "Share with a friend" vs. "Your friend needs this too" (empathy-driven) — measure referral rate
- **Test 2 — Incentive structure:** Referrer gets $10 off vs. Referrer gets 10% off vs. Both get 10% off — measure referral completion
- **Test 3 — Referral channel:** Email share link vs. social media share vs. unique referral code — measure share rate
- **Test 4 — Timing optimization:** Day 45 vs. Day 30 vs. Day 60 — find maximum referral likelihood window
- **Test 5 — High-LTV strategy:** Special messaging for VIP customers (lifetime_value > $200) vs. standard — measure referral quality

## Conversion Benchmarks

- Expected open rate: 35–48%
- Expected click rate: 8–15%
- Expected referral completion rate: 3–8%
- Expected referred friend conversion rate: 10–25% (warm leads convert at higher rate)
- Unsubscribe rate target: < 0.5%
