# Flow 26 — VIP/Loyalty Flow

**Email Count:** 2 emails
**Brand Constants:** GF (single variant, no level segmentation)
**Primary Offer:** 5+5 Bundle ($119.99) — highest AOV; exclusive access/preview

## Purpose

Recognize and reward BrightKidCo's highest-value customers — those with `total_orders >= 3` and/or `lifetime_value >= $250`. This flow provides exclusive content, early access to new products or bundles, and a deeper relationship with Lena. It cultivates brand advocates who drive referrals, reviews, and community growth.

## Trigger Logic

**Trigger event:** Profile property `vip_buyer` tag is applied, OR customer crosses threshold (`total_orders >= 3` AND `lifetime_value >= 250`), OR 7 days after a 3rd+ purchase.

**Klaviyo setup:**
- Trigger Options:
  - Option A: Tag `vip_buyer` applied via automation
  - Option B: Time-based (7 days after 3rd+ purchase)
  - Option C: Manual trigger for special events (new product launch, anniversary)
- Condition: `total_orders >= 3` OR `lifetime_value >= 250`
- Filter: Not currently in unsubscribe/refund flow

## Exit Conditions

- Customer clicks unsubscribe → exits permanently
- Flow completes both emails → customer remains in VIP segment for future VIP-only campaigns
- Customer's LTV drops below threshold (unlikely but possible via refund) → remove VIP tag

## Segment Filters

- **VIP customers only:** `vip_buyer` tag set, `total_orders >= 3`, `lifetime_value >= 250`
- Sub-segment: VVIP (`lifetime_value >= 500`) — may receive additional personalized content
- If `avatar_level` is known, tonality-adjusted:
  - L1: "You've been on this journey from the start — thank you"
  - L2: "Your commitment to finding what works is inspiring"
  - L3: "You trusted us with your child's journey — that means everything"
  - GF: "You're part of the BrightKidCo family"

## Timing Between Emails

| Email | Timing | Theme |
|-------|--------|-------|
| E1 — VIP Welcome | T+0 (on VIP status) | "You're one of our VIP families" — exclusive welcome, thank you from Lena, badge/reward reveal |
| E2 — VIP Benefits | T+7 days | "Here's what VIP means for you" — exclusive previews, early access, community perks, referral bonus increase |

After E2: VIP customers remain in a static segment for exclusive monthly campaigns and early product access. No further automated flow — VIPs receive manual/seasonal campaigns.

## Klaviyo Setup Instructions

1. **Create flow:** Klaviyo → Flows → Create Flow → "VIP/Loyalty" — Tag/Time-based Trigger
2. **Set trigger options:** Tag `vip_buyer` OR time-based after 3rd+ purchase
3. **Add conditions:** `total_orders >= 3` OR `lifetime_value >= 250`
4. **Add timing:** E1 immediately, E2 at T+7 days
5. **Add exclusive content:** Behind-the-scenes from Lena, early access to new products, VIP-only discount (non-stackable)
6. **Add community invitation:** Link to private VIP community (Facebook group, email list, or Discord)
7. **Add referral bonus mention (E2):** Enhanced referral reward for VIP members
8. **Add new product previews:** First look at upcoming bundles, accessories, or content
9. **Apply tag on entry:** `vip_status_active` — never removed unless customer unsubscribes
10. **Set up VIP segment:** Create static segment for VIP monthly campaigns
11. **Sender:** "Lena from BrightKidCo" <support@brightkidco.com>
12. **UTM convention:** `?utm_source=email&utm_medium=vip&utm_campaign=vip-loyalty`

## A/B Test Recommendations

- **Test 1 — VIP reward type:** Exclusive discount code vs. early product access vs. free gift with next purchase — measure VIP satisfaction and future LTV
- **Test 2 — Community invitation:** Private Facebook group vs. exclusive email newsletter — measure engagement rate
- **Test 3 — Personalized video from Lena:** Video thumbnail vs. text-only — measure VIP engagement and emotional connection
- **Test 4 — VIP threshold:** LTV $250 vs. $200 vs. $150 for VIP status — measure incremental LTV gain vs. cost of benefits

## Conversion Benchmarks

- Expected open rate: 55–70% (highest of any flow — VIP engagement)
- Expected click rate: 15–25%
- Expected VIP referral rate: 5–12%
- Expected VIP repurchase rate (6 months): 40–60%
- Expected average VIP LTV: $350–$600
- Unsubscribe rate target: < 0.1% (lowest of any flow)
