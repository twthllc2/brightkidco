# Flow 09 — PP-Level Detection

**Email Count:** 1 email
**Brand Constants:** GF (single variant, but collects level data for downstream segmentation)
**Primary Offer:** None — this is a data-collection / segmentation email

## Purpose

Collect the customer's avatar level data via a simple two-button click survey in Klaviyo. This single email presents the parent with two options: "I'm still figuring it out — keep it general" (GF) or a prompt to self-identify their child's profile, which populates the `avatar_level` profile property. This unlocks level-specific copy in all downstream flows.

## Trigger Logic

**Trigger event:** 3 days after the "Arrived" email (flow-07), OR immediately after "Order Confirmation" if the avatar level has not yet been set.

**Klaviyo setup:**
- Trigger: Time delay after flow-07 completion
- Condition: `avatar_level` profile property is empty OR equals "general"
- Filter: `post_purchase_active` tag is set

## Exit Conditions

- Profile property `avatar_level` is set to "level1", "level2", or "level3"
- Customer clicks unsubscribe
- 14 days pass with no response → profile stays "general" (GF)
- One-time send — single email only

## Segment Filters

- **Post-purchase customers without an avatar level assigned**
- Excludes: Customers who already have `avatar_level` set to level1/level2/level3
- Profile properties to set on response: `avatar_level`

## Timing Between Emails

| Email | Timing | Theme |
|-------|--------|-------|
| E1 — Level Detection | T+3 days after Arrived (flow-07) | "Help me help you — what does your child's journey look like?" — two-button segmentation survey |

Single email — no follow-up. After response, the `avatar_level` property is updated and subscriber re-routes to level-appropriate content.

## Klaviyo Setup Instructions

1. **Create flow:** Klaviyo → Flows → Create Flow → "PP-Level Detection" — Time-based Trigger (after flow-07)
2. **Set trigger delay:** 3 days after flow-07 "Arrived" email
3. **Add condition check:** `avatar_level` is empty or equals "general"
4. **Add email with survey mechanism:**
   - Option A: Use Klaviyo "Button" CTAs — each button sets a profile property via webhook or custom event
   - Option B: Use Klaviyo Forms integration within email (if available)
   - Option C: Link to an external landing page that captures the level and updates via API
5. **Set up profile property updates:**
   - Button 1 → `avatar_level = "level1"`
   - Button 2 → `avatar_level = "level2"`
   - Button 3 → `avatar_level = "level3"`
   - Button 4 (fallback) → keep `avatar_level = "general"`
6. **Apply tag:** `level_detected` on response
7. **Sender:** "Lena from BrightKidCo" <support@brightkidco.com>
8. **UTM convention:** `?utm_source=email&utm_medium=segmentation&utm_campaign=level-detection`

## A/B Test Recommendations

- **Test 1 — Survey design:** Two-button ("Seems familiar" / "New to this") vs. multi-description approach ("My child is 3-5 / 5-7 / 7+") — measure completion rate
- **Test 2 — Incentive for completion:** "Complete this and get a free guide" vs. no incentive — response rate
- **Test 3 — Email timing:** Day 3 after arrival vs. Day 7 — measure response rate by timing
- **Test 4 — Lena's framing:** "Help me help you" (personal) vs. "Customize your experience" (functional) — measure click rate

## Conversion Benchmarks

- Expected open rate: 35–50%
- Expected click rate (survey): 15–30%
- Expected profile property update rate: 10–25%
- Unsubscribe rate target: < 0.4%
