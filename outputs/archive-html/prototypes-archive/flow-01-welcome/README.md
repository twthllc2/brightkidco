# Flow 01 — Welcome Flow

**Email Count:** 8 emails
**Brand Constants:** GF/Cross-level variant at root; L1/L2/L3 variants stored in subdirectories
**Primary Offer:** 3+3 Bundle ($79.99) — BESTSELLER

## Purpose

Onboard new subscribers with a gentle, educational 8-letter sequence that introduces the Body-Signal Learning Layer™ mechanism, builds trust through Lena's peer-to-peer voice, and converts warm leads into first-time buyers. The flow is the top-of-funnel workhorse — it sets the tone for the entire BrightKidCo brand experience.

## Trigger Logic

**Trigger event:** Subscriber signs up via Klaviyo form popup or enters through a lead magnet or SMS/email capture. A profile property `signup_source` is recorded. The flow is started immediately upon list subscription.

**Klaviyo setup:**
- List trigger: "BrightKidCo Subscribers" list
- Condition: Profile property `welcome_completed` is NOT set
- Filter: `$email` is not empty

## Exit Conditions

- Subscriber places an order (any product) → marked `welcome_completed` → exits flow, enters Post-Purchase flows
- Subscriber clicks unsubscribe
- Flow completes all 8 emails (auto-exit)
- WELCOME10 code expires after 7 days from trigger (profile property `welcome10_expires`)

## Segment Filters

- **Root (GF):** All new subscribers without avatar level assigned. Uses the "Whether...Or...If..." pattern and universal tonality.
- **L1 subdir:** `avatar_level == "level1"` — Sarah segment (younger child, verbal, Pre-K urgency, 70/30 hope/realism)
- **L2 subdir:** `avatar_level == "level2"` — Lisa segment (mixed verbal, sensory differences, method-cycling, 40/60 hope/realism)
- **L3 subdir:** `avatar_level == "level3"` — Maria segment (non-verbal/high support, 5+ yrs failed, 20/80 hope/realism, dignity-first)

## Timing Between Emails

| Email | Timing | Theme |
|-------|--------|-------|
| E1 — Welcome | Immediately (T+0) | Welcome + WELCOME10 code intro |
| E2 — Mechanism | T+1 day | "It's not the method — it's a sensory gap" |
| E3 — Last Code Day | T+3 days | "Code expires soon — gentle urgency" |
| E4 — You Didn't Fail | T+5 days | Reframe past attempts, validation |
| E5 — Slow Acceptance | T+7 days | Realistic timeline messaging |
| E6 — Social Proof | T+10 days | Parent stories & testimonials |
| E7 — Final Push | T+13 days | Combine guarantee + social proof |
| E8 — Last Touch | T+16 days | "Bookmark us for when you're ready" |

Exit after E8 — subscriber is tagged `welcome_completed`.

If no purchase after welcome flow → tagged `welcome_completed_no_purchase` for winback targeting.

## Klaviyo Setup Instructions

1. **Create flow:** Klaviyo → Flows → Create Flow → "Welcome Flow" — List Trigger
2. **Set trigger list:** "BrightKidCo Subscribers"
3. **Add condition check:** Profile property `welcome_completed` is empty
4. **Add timing splits:** Use the timing from the table above between each email
5. **Add segment split (after E1):** Branch by `avatar_level` (level1 / level2 / level3 / general) to appropriate variant
6. **Tags applied during flow:**
   - After E1: Tag `welcome_completed`
   - After E8 (no purchase): Tag `welcome_completed_no_purchase`
   - On purchase anytime: Tag `post_purchase_active`
7. **Profile properties:** Set `welcome10_expires` = trigger date + 7 days; set `welcome_completed = true` on exit
8. **Sender:** "Lena from BrightKidCo" <support@brightkidco.com>
9. **UTM convention:** `?utm_source=email&utm_medium=welcome&utm_campaign=welcome-flow`

## A/B Test Recommendations

- **Test 1 — Subject line tone:** Educational (e.g., "How the body-signal gap works") vs. Benefit-driven ("Why 100K parents switched from pull-ups") — measure open rate
- **Test 2 — CTA position in E2:** Early CTA (after mechanism explanation) vs. Late CTA (after testimonial) — measure click rate
- **Test 3 — Timing compression:** 8 emails over 14 days vs. 16 days — measure conversion rate, unsubscribe rate
- **Test 4 — WELCOME10 prominence:** Full code display box vs. text-link with code mention — measure click-to-purchase rate
- **Test 5 — Send day:** Tuesday vs. Thursday send for E1 — measure open rate by day

## Conversion Benchmarks

- Expected open rate: 45–55%
- Expected click rate: 8–15%
- Expected conversion rate: 3–8% first-time purchase
- Unsubscribe rate target: < 0.5% per email
