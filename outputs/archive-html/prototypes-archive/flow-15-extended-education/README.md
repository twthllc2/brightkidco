# Flow 15 — Post-Purchase Extended Education (5 Emails × 4 Level Variants)

## Purpose
Deliver level-specific educational content to post-purchase subscribers from Day 22+, once the PP-Level Detection has determined their avatar level. This is the deepest educational sequence — 5 emails per level variant (L1/L2/L3/GF) with tonality, science density, and empathy calibrated to each level's needs.

## Trigger Logic
- **Entry:** `post_purchase_active` tag + at-risk condition cleared + determines level via PP-Level Detection (Flow 09)
- **Delay:** Starts Day 22 post-purchase (after PP-Mid Check-In is not required; runs parallel to Flow 14)
- **Tag applied on entry:** `flow_pp_extended_education`

## Exit Conditions
- Subscriber unsubscribes or marks as spam
- Purchases a replenishment → routes to Replenishment Flow
- 60+ days no opens → `at_risk_no_open` tag → routes to PP-Support At-Risk (Flow 16)

## Segment Filters
- **Level variants:** L1, L2, L3, General Fallback — 4 separate flow branches based on `avatar_level` property
- **Condition:** Must have `welcome_completed` tag and have made at least 1 purchase
- **Excludes:** Subscribers without a level tag (stay in cross-level content)

## Timing Between Emails
| Email | Day | Topic | Goal |
|-------|-----|-------|------|
| E1 | Day 22 | Deeper mechanism — interoception training | Build understanding of how awareness develops |
| E2 | Day 28 | Pull-ups vs. BSL — sensory comparison | Reinforce why BSL works differently |
| E3 | Day 34 | Social proof — level-matched testimonials | Show parents at same level achieving wins |
| E4 | Day 40 | Objection handling — level-specific | Address the top blocker for each level |
| E5 | Day 46 | Guarantee reinforcement + community | Strengthen decision with 60-day guarantee |

## Klaviyo Setup Instructions
1. Create 4 flow branches (split by `avatar_level` property):
   - Branch A: `avatar_level1` → L1 copy
   - Branch B: `avatar_level2` → L2 copy
   - Branch C: `avatar_level3` → L3 copy
   - Branch D: no level tag / `avatar_general` → GF copy
2. Set trigger: Profile property `avatar_level` updated (not empty) AND `post_purchase_active` tag exists
3. Add delay: 22 days after property update
4. Tag: `flow_pp_extended_education` on entry
5. Add conditional exit: If `at_risk_no_open` → exit flow → route to Flow 16
6. Sender: "Lena from BrightKidCo" <support@brightkidco.com>
7. Smart sending: Respect timezone

## A/B Test Recommendations
- **Subject line:** L1: Pre-K anchor vs. symptom hook; L2: Science citation vs. parent story; L3: Dignity-first vs. mini-win framing
- **Timing:** Day 22 vs. Day 28 start (does earlier education improve retention?)
- **CTA:** "Read more" vs. "See the science" for L2; "No pressure — whenever" vs. "Keep reading" for L3
- **Email count:** 5 vs. 4 emails (test if E5 drives meaningful re-engagement)
- **Testimonial placement:** Inline vs. dedicated block

## Conversion Benchmarks
- Open rate: 45–55% (target)
- Click rate: 8–15%
- Unsubscribe rate: < 0.5%
- Secondary purchase: 10–18% within 30 days of sequence
