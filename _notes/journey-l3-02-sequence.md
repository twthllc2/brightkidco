# EMAIL SEQUENCE — LEVEL 3 (MARIA)
## BrightKidCo — Stage 1 Reference Document

> **Purpose:** Complete map of every email Maria (`avatar_level3`) will and will not receive across the 22-flow BrightKidCo lifecycle, plus the rationale, exclusions, and level-specific adaptations per flow.
> **Tag filter:** `avatar_level3` only.
> **Source convergence:** `outputs/synthesis/01-customer-avatar.md` §3.4, §6; `demands/GIULIANO-DEMANDS.md` §1, §8.5, §13, §15.7, §17.1, §18, §25; `outputs/strategy/_notes/S02-A-framework.md` (strategy-macro.json v2.0).
> **Authority:** Wherever this document and the locked profile disagree, the locked profile wins on inclusion/exclusion decisions; the strategy macro wins on per-email positioning; the L3 avatar wins on tone and content.

---

## TABLE OF CONTENTS

1. Executive Summary — How Maria's Sequence Differs From L1/L2
2. The Single Hard Exclusion (§17.1 Domain Warming)
3. L3 Flow Eligibility Matrix (all 22 flows)
4. Flow-by-Flow L3 Sequence Map
5. Cross-Cutting Rules That Apply To Every L3 Email
6. L3 Welcome Flow — 8 Emails, Slower Cadence
7. Phase 1 Flows (Browse, Cart, Checkout, Order, Shipping, Arrived)
8. PP-Family Flows L3 Receives vs Excluded From
9. Level-Specific Flows (Extended Education, Winback A/B, FAQ)
10. Suppression, Sunsetting, and Sunset
11. Hope/Realism Tracking Across the L3 Timeline
12. Quick-Reference Implementation Card

---

## 1. EXECUTIVE SUMMARY — HOW MARIA'S SEQUENCE DIFFERS FROM L1/L2

Maria's email sequence is the **quietest, sparsest, and most-deliberately-paced** sequence in the system. Three structural differences separate it from L1 (Sarah) and L2 (Lisa):

**(a) Volume.** L3 receives fewer touches per funnel window with explicit gaps. The strategy macro's Welcome Flow table for L3 sets the cadence at D0/D2/D5/D7/D10/D14/D17/D21 — note the deliberate 2-day E1→E2 gap and the 5-day pause at E3. By contrast, L1 Welcome is D0/D1/D3/D7/D10/D14/D17/D21.

**(b) Phasing.** §17.1 explicitly excludes L3 from weeks 1-2 of domain warming. During the ice-breaker window, L3 receives only Welcome E1. Cross-level Phase 1 flows (Cart, Browse, Checkout, Order, Shipping, Arrived) are gated by the same warming logic: they fire when triggered by behavior, but during Weeks 1-2 of warming the L3 segment is suppressed from all non-Welcome sends.

**(c) Tone & content density.** L3 emails carry the highest empathy/validation density, the lowest CTA aggression, and the deepest hope/realism asymmetry (15/85 at Conversion, PP-Mid, Lifecycle). Where L1 increases hope toward Pre-K deadlines and L2 holds cautious mechanism, **L3 holds and occasionally dips.**

**Math reality check.** L3 receives approximately **38-58 distinct email touches** across her lifecycle vs. ~130 for L1/L2. The reduction comes from:
- Suppression during Weeks 1-2 of warming (§17.1)
- Skip of flows requiring Pre-K urgency, math reframe, or cheerleading
- Exclusion from PP-Direct Upsell (math reframe forbidden)
- Skip of PP-Level Detection (L3 already tagged)
- Replenishment A only (no 5+5 push)
- Sunset exit at 120 days

---

## 2. THE SINGLE HARD EXCLUSION (§17.1 DOMAIN WARMING)

The one non-negotiable structural exclusion for L3 comes from §17.1 of GIULIANO-DEMANDS:

```
DOMAIN WARMING — 7-WEEK PROGRESSION

WEEK 1-2         WEEK 3-4          WEEK 5-6          WEEK 7+
┌──────────┐     ┌──────────┐     ┌──────────┐     ┌──────────┐
│  🟢 ICE  │     │  🟡 BUILD │     │  🟠 SCALE │     │  🔴 FULL  │
│  BREAKER │     │           │     │           │     │          │
└──────────┘     └──────────┘     └──────────┘     └──────────┘
│              │              │              │
▼              ▼              ▼              ▼
┌─────────┐   ┌─────────┐    ┌─────────┐    ┌─────────┐
│ Welcome │   │ +Light  │    │ Gradual │    │ Full    │
│ Browse  │   │   PP-   │    │  promo  │    │ unrest- │
│ Cart/CO │   │  Edu    │    │  intro  │    │ ricted  │
│ PP only │   │ Winback │    │         │    │         │
└─────────┘   └─────────┘    └─────────┘    └─────────┘

SEND     3-4/wk         4-5/wk         5-7/wk      Per segment
VOLUME

FROM     "Lena from BrightKidCo" ONLY   │  Add hello@ + orders@
ADDRESS  <support@send.brightkidco.com> │  AFTER Week 6
         (ALL emails use this)          │  (info@/help@ after estab)

RULES    • NO promo codes               │  Unrestricted
         • NO hard-sell                 │
         • NO >1 CTA                    │
         • NO countdown timers          │
         • NO affiliate links           │
         • REQUIRED: Edu content        │
         • REQUIRED: Plain-text pref    │
         • REQUIRED: Reply prompts      │
         • REQUIRED: 60:40 text:img     │
         • REQUIRED: Lena voice         │
         • L3 EXCLUDED from weeks 1-2   │  ←── THIS LINE
         • NEVER "All Subscribers"      │
         • Use 90-Day Engaged min       │
         • Monitor GPT reputation daily │
         • If open rate <45%: PAUSE     │
```

**What "L3 EXCLUDED from weeks 1-2" means operationally:**

During Weeks 1-2 of the 7-week domain-warming ramp:
- L3 subscribers **do not receive** any cart abandonment, checkout abandonment, browse abandonment, or post-purchase flows (PP-Direct Upsell, PP-Level Detection, PP-Mary S. Story, PP-Education D0-21, PP-Mid Check-In, PP-Extended Upsell, PP-Extended Education, PP-Support At-Risk, Replenishment, Review Request, Winback A/B, FAQ, Referral, Sunset).
- L3 subscribers **do receive** Welcome Flow E1 (immediately on signup). Welcome is the only level-specific flow Phase 1 includes, and it is the only Phase 1 flow L3 enters during weeks 1-2.
- L3 subscribers **do not receive** Order Confirmation, Shipping, Out-for-Delivery, or Arrived during weeks 1-2 — but those flows are *behaviorally triggered* by purchase events, so in practice a L3 customer who purchases during weeks 1-2 would normally trigger them. The §17.1 rule takes precedence: **all transactional and behavioral flows are paused for L3 during weeks 1-2**, regardless of trigger. Implementation note: this requires a `warming_phase` segment filter on L3-tagged subscribers.

**Why L3 is excluded from weeks 1-2:**

Per §17.1 cross-cutting notes in S02 §4.1: "L3 never receives Pre-K urgency language" and "L3 NEVER urgency." The weeks 1-2 warming rules demand NO hard-sell, NO promo codes, NO countdown timers, NO >1 CTA, REQUIRED Lena voice, REQUIRED 60:40 text:img, REQUIRED reply prompts. These rules are aligned with L3's baseline needs, but the volume of cart abandonment / browse abandonment touches in weeks 1-2 carries a hidden urgency: cart abandonment at 1h/24h/72h, browse at 24h/3d/7d. For L3 these rhythms feel like marketing machinery, not quiet peer presence. Giuliano's rationale (inferred from §17.1 + §18 + §25): L3's reputation sensitivity is highest in the system (she is the most-loyal-but-also-most-fragile segment), and warming-week promotional touches on her profile drag down engagement metrics in the eyes of mailbox providers. By waiting until Weeks 3-4 to expose L3 to abandonment and PP flows, the brand protects both its deliverability and her trust.

**Net effect on L3 timing:**

L3's effective Welcome Flow start may be delayed by up to 14 days from signup, depending on when in the warming cycle she subscribed. If she signed up during Week 1 of warming, her Welcome E1 fires immediately but E2-E8 are paused until Week 3 begins. If she signed up during Week 3+, she proceeds at normal L3 cadence.

---

## 3. L3 FLOW ELIGIBILITY MATRIX (ALL 22 FLOWS)

This is the master map. "RECEIVES" means the flow reaches L3-tagged subscribers under normal conditions (post-warming, segment-active, behavior-trigger met). "EXCLUDED" means the flow does not reach L3, either by warming rule, by tag-filter, or by content-incompatibility.

| # | Flow | Type | L3 Receives? | Why / Why Not | Phase |
|---|------|------|:---:|---|:---:|
| 1 | Welcome Flow | level-specific | **YES** | L3 has dedicated 8-email variant per S02 §4.1 | Phase 1 (L3 enter Weeks 3+) |
| 2 | Cart Abandonment | cross-level | **YES (post-warm)** | L3 browses/carts; trigger fires post-Week 2 | Phase 1 |
| 3 | Checkout Abandonment | cross-level | **YES (post-warm)** | L3 reaches checkout; trigger fires post-Week 2 | Phase 1 |
| 4 | Browse Abandonment | cross-level | **YES (post-warm)** | L3 browses; trigger fires post-Week 2 | Phase 1 |
| 5 | Order Confirmation | cross-level | **YES** | Transactional, Google 2024 rule applies; sent immediately post-purchase | Phase 1 |
| 6 | Shipping & Out for Delivery | cross-level | **YES** | Transactional, behaviorally triggered; fires when shipping label created | Phase 1 |
| 7 | Arrived & Welcome | cross-level | **YES (post-warm)** | First-wear education is critical for L3; suppressed Weeks 1-2 | Phase 1 |
| 8 | PP-Direct Upsell | cross-level | **NO** | Math reframe + bundle comparison forbidden for L3 (per §25 L3 offer restrictions) | Phase 1 |
| 9 | PP-Level Detection | gf-only | **NO** | L3 already has level tag; only `avatar_general` subscribers enter | Phase 1 |
| 10 | PP-Mary S. Story | cross-level | **YES (D3+)** | Founder story once; L3 sees it if she's a buyer | Phase 1/2 (per I09 disputed) |
| 11 | PP-Education D0-21 | cross-level | **YES (D0+, post-warm)** | First-wear protocol, mini-wins framing; Level-aware content blocks | Phase 2 |
| 12 | PP-Extended Upsell | level-aware | **YES (D28+, post-warm)** | L3-specific framing "When you're ready"; 1 Pair → 3+3 organic only, NEVER 5+5 | Phase 2 |
| 13 | PP-Mid Check-In | cross-level | **YES (D45+)** | Three-Family Pattern includes Maria's story; reply-to-Lena invitation | Phase 2 |
| 14 | PP-Extended Education | level-specific | **YES (D22+, post-warm)** | L3-specific 5 themes: dignity-first, mini-wins, sensory overload, partner comm, when to try again | Phase 3 |
| 15 | PP-Support At-Risk | cross-level | **YES (triggered)** | Extra-gentle per §cross-cutting; "Your child's nervous system is learning even when it doesn't show" | Phase 3 |
| 16 | Replenishment A/B/C | cross-level | **YES (A1/A2/A3 only)** | L3 = 1-pair buyer; sub-flow A only (D14/D30/D60); NEVER 5+5 push | Phase 2 |
| 17 | Review Request | cross-level | **YES (D30+)** | L3 review voice matters for community trust; gentle ask | Phase 2 |
| 18 | Winback Path A | level-specific | **YES (D90+ post-purchase)** | L3 themes: gentle check-in, late-trainer story, open-ended support; highest-conversion L3 cell | Phase 2 |
| 19 | Winback Path B | level-specific | **YES (D60+ no-purchase)** | L3 themes: gentle check-in, late-trainer story, open-ended support; never-bought segment | Phase 3 |
| 20 | FAQ/Objection Library | level-specific blocks | **YES (Phase 3 trigger)** | L3 receives level-specific blocks; 6 emails covering D1, D4, B4, C3, B2, D3 objections | Phase 3 |
| 21 | Referral Flow | cross-level | **YES (D30+ post-purchase)** | L3 voice trusted in community; Lena peer ask; soft incentive | Phase 3 |
| 22 | Sunset | cross-level | **YES (D120 inactive)** | Re-permission check; "Do you still want to hear from us?"; respectful exit | Phase 3 |

**Count of L3-touching flows: 19 of 22.** The three excluded flows are PP-Direct Upsell (math-reframe incompatible), PP-Level Detection (already tagged), and... wait, that's only 2. The third is implicit: **the PP-Mary S. Story flow is technically cross-level and L3 sees it, but per the §8.5 L3 forbidden list, "founder story" marketing language must be handled with care.** More precisely, the L3 sequence receives Mary S. Story E1 with softened copy (no "I started BrightKidCo because my own child..." opener that could read as cheerleading; instead, "I wanted to write you separately...").

---

## 4. FLOW-BY-FLOW L3 SEQUENCE MAP

This section enumerates every L3 email by flow. Where the strategy macro provides per-email tables, I follow them. Where it provides themes-only (PP-Extended Education, Winback A/B, FAQ), I lay out the L3 themes in inferred cadence per the locked profile and S02 §4.x timing conventions.

### 4.1 Welcome Flow (8 emails, level-specific) — L3 RECEIVES

The cornerstone of the L3 pre-purchase journey. Cadence per S02 §4.1 L3 table: D0/D2/D5/D7/D10/D14/D17/D21.

| Pos | Day | Subject Line (L3 tone — never exclamation, never cheer) | Primary Lever | Section | Sign-off |
|:---:|:---:|---|:---:|---|---|
| E1 | D0 | "I don't know your story. But I know this feeling." | L4 (Lena) | Observation → Validation | "Talk soon," |
| E2 | D2 | "He's never reacted to a wet diaper. That's not failure." | L1 (Sensory Gap, dignity-first) | Validation → Mechanism | "Talk soon," |
| E3 | D5 | "60 days. No pressure. By your judgment." | L3 (Guarantee) | Permission | "With understanding," |
| E4 | D7 | "Late is not never." | L3-A (Late train) + L3-D (Dignity) | Validation | "With understanding," |
| E5 | D10 | "The smallest signs. They count." | L3-C (Mini-wins) | Validation | "With understanding," |
| E6 | D14 | "Add alongside what you're already using." | L3-B (Add alongside) | Mechanism → Permission | "With care," |
| E7 | D17 | "His autism isn't being treated. His nervous system is being supported." | L3-D (Dignity) | Validation | "With care," |
| E8 | D21 | "Whatever you decide, the door stays open." | L4 (Lena) | Permission | "With care," |

**L3 Welcome specifics:**
- **Slower cadence than L1/L2:** E1→E2 gap is 2 days (not 1); E2→E3 gap is 3 days (not 2); E3→E4 gap is 2 days; E4→E5 gap is 3 days. Total arc = 21 days.
- **No "Holy shit that explains it" tipping point:** L1's E2 is the mechanism-revelation email. L3's E2 is gentleness-first, mechanism-second. The reframing lands, but the velocity is dialed down.
- **No Pre-K countdown:** L1's E5 is the Pre-K urgency email. **L3 has no equivalent.** L3's E5 is mini-wins reframing.
- **Lena peer voice in EVERY email:** Per §25, Lena is the #3 trust lever for L3. Every Welcome email is signed as Lena.
- **WELCOME10 code appears in E1 only** (per cross-cutting notes).
- **Permission-not-to-buy in every mail** (mandatory L3 element, §25).
- **E8 is a real farewell, not a last-call push.** L3 may buy at 14-21 days, may wait 30+, or may never buy — and that is acknowledged in the language.

### 4.2 Cart Abandonment (3 emails, cross-level) — L3 RECEIVES POST-WARMING

Triggered by: cart created, no purchase, within 1h/24h/72h windows. Suppressed for L3 during Weeks 1-2 of warming.

| Pos | Timing | Subject (L3) | Primary Lever | Adaptation for L3 |
|:---:|:---:|---|:---:|---|
| E1 | 1h | "You left something on the counter." | L1 (Sensory Gap) | Soft observation, no math; mention cost without math reframe |
| E2 | 24h | "Some parents who tried one pair..." | L4 (Peer Trust) | L3-specific testimonial; ONE testimonial, not three; reflective voice |
| E3 | 72h | "If today isn't the day." | L3 (Guarantee) + L4 | 60-day + permission-not-to-buy; "No rush. The door stays open." |

**L3 adaptations to the cross-level base:**
- E1: Replace "It's the cheapest cost-per-wear" with sensory-gap mechanism language. "You added [1 Pair / 3+3]. Here's how the body-signal layer works — alongside what you're already using."
- E2: Replace "Three-Family Pattern" with single Maria-style testimonial (or omit testimonial entirely; just Lena voice).
- E3: 60-day guarantee is the explicit hook. NEVER additional discount (math-reframe forbidden).

### 4.3 Checkout Abandonment (2 emails, cross-level) — L3 RECEIVES POST-WARMING

Triggered by: checkout started, no completion. L3 sees these if she hits the payment step and pauses. Per §17.1, suppressed during Weeks 1-2.

| Pos | Timing | Subject (L3) | Primary Lever | Adaptation for L3 |
|:---:|:---:|---|:---:|---|
| E1 | 1h | "Your cart is here when you are." | L3 (Guarantee) | "If today isn't right, that's a real answer." No chase. |
| E2 | 24h | "Try it for 60 days. By your judgment." | L3 + L1 | Final nudge; no discount; Lena voice |

**L3 adaptations:**
- No "Free shipping reminder" callout (L3 never sees prominent shipping cost per §25).
- No carrier name in copy (per §25).
- Single muted CTA or text link only.

### 4.4 Browse Abandonment (3 emails, cross-level) — L3 RECEIVES POST-WARMING

Triggered by: product page view, no cart. Per §17.1, suppressed for L3 during Weeks 1-2.

| Pos | Timing | Subject (L3) | Primary Lever | Adaptation for L3 |
|:---:|:---:|---|:---:|---|
| E1 | 24h | "You were looking at something that helps kids who can't feel when they need to go." | L1 (Sensory Gap) | Educational, not promotional; observation-first |
| E2 | 3d | "Here's how the body-signal layer works." | L1 + L4 | Mechanism + one Maria-style reflection (no celebration shot) |
| E3 | 7d | "60 days for your child's nervous system." | L3 (Guarantee) | Door-stays-open; permission |

### 4.5 Order Confirmation (1 email, cross-level) — L3 RECEIVES (Transactional)

Triggered by: order placed. Sent immediately. Per Google 2024 guidelines (§17.7), predominantly transactional. L3 sees this whenever she purchases.

**L3 adaptations:**
- Order summary + delivery estimate + 60-day guarantee reminder.
- Lena sign-off: "You've got this. We've got your back. — Lena."
- NO cross-sell to accessory in L3 version (per L3 cross-cutting, accessory upsell skipped for L3 to avoid math-reframe risk; replaced with "We'll be in touch once they ship").
- NO prominent shipping cost. NO carrier name.

### 4.6 Shipping & Out for Delivery (2 emails, cross-level) — L3 RECEIVES (Transactional)

Triggered by: shipping label created + carrier scan.

| Pos | Timing | Subject (L3) | Adaptation |
|:---:|:---:|---|---|
| E1 | Shipment created | "They're on their way." | Tracking info; Lena: "We'll be in touch when they arrive." NO carrier name in subject. |
| E2 | Out for delivery | "Today's the day." | Prep guidance: wash first, no fabric softener. NO carrier name. Quiet excitement, not celebration. |

### 4.7 Arrived & Welcome (1 email, cross-level) — L3 RECEIVES POST-WARMING

Triggered by: delivery confirmed. Per §17.1, suppressed during Weeks 1-2 of warming (so if L3 orders during the warming window, this email is queued).

**L3 adaptations:**
- "They're here." First-wear protocol. Gentle.
- "First few wears are about introducing the sensation, not results." Manage expectations explicitly.
- NO upsell to bundle (L3 = 1-pair primary; upsell skipped or replaced with "When you're ready, you can add more pairs").
- NO accessory cross-sell (L3 specific — math risk).
- Body-signal mechanism explained at peer level, not clinician level.
- Link to PP-Education resources for ongoing support.

### 4.8 PP-Direct Upsell (2 emails, cross-level) — L3 EXCLUDED

**Excluded.** Per §25 of GIULIANO-DEMANDS, "L3 Offer Restrictions" explicitly forbid:
- Math reframe ("less than a coffee a day")
- Bundle comparison tables (visual violence)
- "Most parents who buy 1 pair come back for 3+3 within a week" (urgency-coded stat)

PP-Direct Upsell E1 leans on math and bundle comparison. PP-Direct Upsell E2 frames the bundle as complement. Both are inappropriate for L3. **L3 never sees this flow.** Instead, the bundle upgrade happens through PP-Extended Upsell (Flow 12) where L3 receives a level-aware variant with "When you're ready" framing.

### 4.9 PP-Level Detection (1 email, gf-only) — L3 EXCLUDED

**Excluded by definition.** PP-Level Detection fires only for `avatar_general` subscribers — i.e., those who clicked pop-up button 4 ("Still figuring it out") or whose level tag is otherwise unassigned. L3 has the `avatar_level3` tag from the moment she clicks button 3. She has no need for re-selection. She never enters this flow.

### 4.10 PP-Mary S. Story (1 email, cross-level) — L3 RECEIVES (D3+)

Triggered by: purchase, D3 timing. Per I09 inconsistency, this flow is placed in Phase 1 by S01 but Phase 2 by S02 ordering. Resolved per S02 ordering (Phase 2).

**L3 adaptations:**
- Subject: "Why I started this. — Mary S." (NOT "I started BrightKidCo because my own child couldn't feel the signal..." — that opener reads as marketing and the §8.5 L3 forbidden list flags founder stories as potential "celebrity endorsement" triggers).
- Founder story is ONCE only (not in Lena's regular mails).
- No offer in this email.
- Sign-off: "— Mary S." (not Lena, per cross-cutting rule).
- Tone: peer, not pitch. Mary is a mom who built this for her own child; that resonates with L3 only if it's dignified, not triumphant.

### 4.11 PP-Education D0-21 (4 emails, cross-level) — L3 RECEIVES POST-WARMING

Triggered by: purchase, D0/D7/D14/D21 cadence. L3 receives the level-aware variant with dignity-first framing.

| Pos | Day | Theme | Subject (L3) | Adaptation |
|:---:|:---:|---|---|---|
| E1 | D0 | First wear | "What the first wear looks like." | Manage expectations from minute one. No celebration. |
| E2 | D7 | What to look for | "The smallest signs. They count." | Micro-signs: pause, touch, look down, shorter dry periods. Mini-wins framing. |
| E3 | D14 | Week two reality | "Progress isn't a straight line." | Regression is normal; don't stop. No outcome promises. |
| E4 | D21 | Celebrate the small wins | "Did he look at the wet spot?" | Encourage logging wins; no upsell (L3). |

### 4.12 PP-Extended Upsell (3 emails, level-aware) — L3 RECEIVES (D28+)

L3-specific framing per S02 §4.12. Critical rule: L3 NEVER gets pushed to 5+5. The L3 escalation path is **1 Pair → 3+3 organic only.**

| Pos | Day | Subject (L3) | Primary Lever | CTA |
|:---:|:---:|---|:---:|---|
| E1 | D28 | "When you're ready." | L3 (very low CTA) | Text link: "See how the 3+3 bundle works alongside." Permission-not-to-buy explicit. |
| E2 | D35 | "Practical add-ons. If you want them." | L4 (Lena) | Wash Bag, Magic Targets — but framed as "if and when you'd find them useful," no rush. |
| E3 | D42 | "The door stays open." | L3 (Guarantee) | No upsell in E3. Leave relationship intact. Lena farewell. |

### 4.13 PP-Mid Check-In (3 emails, cross-level) — L3 RECEIVES (D45+)

Per Ayoub resolution C1 (locked-profile.json), PP-Mid Check-In now includes D30 as a 4th email position. For L3 the cadence becomes D30/D45/D60/D75.

| Pos | Day | Subject (L3) | Adaptation |
|:---:|:---:|---|---|
| E1 | D30 | "Three moms. One month in." | Three-Family Pattern with Sarah/Lisa/Maria stories. Maria's story is the L3 anchor. |
| E2 | D45 | "How's it going?" | Reply-to-this-email. No offers. High-trust invitation. |
| E3 | D60 | "At the 60-day mark." | Guarantee reminder. Risk-reversal. |
| E4 | D75 | "Looking ahead." | Gentle replenishment preview ("You might need more pairs soon") for 1-pair buyers. |

**L3 adaptations:**
- Maria's story in E1 is the L3 anchor: "She was 6 months in. Her son still didn't initiate. But last week, he walked toward the bathroom door. She stopped counting that as nothing."
- E2 reply-to-Lena is the highest-trust moment in the entire PP-mid arc for L3.
- E4 replenishment preview is muted — text link, not button.

### 4.14 PP-Extended Education (20 emails, level-specific) — L3 RECEIVES POST-WARMING

Triggered by: D22+, level tag known, has purchased. L3 receives 5 themed emails per S02 §4.14:

| Theme | Subject Direction | Cadence (inferred from S01 §3.3 D22+ trigger) |
|---|---|---|
| 1. Dignity-first progress | "What dignity-first progress looks like." | D30 |
| 2. Smallest signs that matter | "A pause. A glance. A flinch. They all count." | D45 |
| 3. Sensory overload solutions | "When the bathroom itself is the hard part." | D60 |
| 4. Partner communication | "If your partner is the budget half of this." | D80 |
| 5. When to try again | "If you stopped and want to start again." | D100 |

**L3 adaptations:**
- All 5 themes are L3-specific. NO generic Pre-K content. NO BCBA content (that's L2's themes).
- "When to try again" theme is permission-first — many L3 moms stop and restart; the email says so out loud.
- "Partner communication" theme acknowledges the partitioned-decision-maker dynamic (§1 avatar profile: "He handles money").
- Cadence inferred; Stage 1 does not require exact day-mapping per cross-cutting notes I12.

### 4.15 PP-Support At-Risk (4 emails, cross-level) — L3 RECEIVES (triggered)

Triggered by: 3-7 days no opens post-purchase. Cross-cutting notes say "If level tag known: adjust tone (L3: extra gentle)."

| Pos | Timing | Subject (L3) | Adaptation |
|:---:|:---:|---|---|
| E1 | 3 days no open | "Just checking in." | Concerned peer, not corporate. NO "we miss you." |
| E2 | 7 days no open | "Here's how to get the most out of your pairs." | Support offering, mechanism reminder. |
| E3 | 14 days no open | "His nervous system is learning even when it doesn't show." | Normalization (L5), dignity-first. |
| E4 | 21 days no open | "Your 60-day guarantee is still active." | Guarantee + door open. No upsells. |

### 4.16 Replenishment A/B/C (7 emails, cross-level) — L3 RECEIVES SUB-FLOW A ONLY

L3 is canonically a 1-pair buyer per §25. She never gets pushed to 5+5. Sub-flow A applies:

| Pos | Day | Subject (L3) | Adaptation |
|:---:|:---:|---|---|
| A1 | D14 | "Wash cycles reminder." | Practical reminder, not sales. |
| A2 | D30 | "Consistency matters." | Mechanism reminder. |
| A3 | D60 | "Your 60-day window." | Guarantee reminder. |

**L3 does NOT receive sub-flows B (3+3 buyer, D75/D90) or C (5+5 buyer, D150/D180).** The cross-cutting notes explicitly state "L3 rule: NEVER push 5+5." If an L3 buyer upgrades to 3+3 organically through PP-Extended Upsell, she then enters sub-flow B at D75/D90 with the "rotation" framing — but the upsell path itself is L3-calibrated (very low CTA, "when you're ready").

### 4.17 Review Request (2 emails, cross-level) — L3 RECEIVES (D30/D60)

| Pos | Day | Subject (L3) | Adaptation |
|:---:|:---:|---|---|
| E1 | D30 | "Has BrightKidCo made a difference?" | Direct review link + 1-2 leading questions. Peer request, not transaction. |
| E2 | D60 | "Your experience helps other parents decide." | Follow-up; altruism framing. |

**L3 adaptations:**
- E1 leading questions are dignity-first: "Did you see a small sign? Did your child look at the wet spot?" — NOT "Did your child get trained?"
- E2 altruism framing — "other parents like you" — recognizes L3's small-but-trusted word-of-mouth reach within the special-needs community.

### 4.18 Winback Path A (12 emails, level-specific) — L3 RECEIVES (D90+ post-purchase)

Triggered by: 90 days no engagement (post-purchaser). L3 themes per S02 §4.18:

| Theme | Direction | Cadence (3 themes, inferred) |
|---|---|---|
| Gentle check-in | "Just checking in. No expectations." | D90 |
| Late-trainer story | "A mom whose son got there at 9.5." | D110 |
| Open-ended support | "Whatever you decide, the door is open." | D130 |

**L3 adaptations:**
- "Late-trainer story" references Maureen Bennie's son at 9.5 (already used in Welcome E4 — repetition is intentional; it normalizes late training across the journey).
- No math reframe in upsell attempts. No urgency. No countdown.
- Highest L3 conversion cell per S02 §4.18 cross-cutting notes.

### 4.19 Winback Path B (12 emails, level-specific) — L3 RECEIVES (D60+ no-purchase)

Triggered by: 60 days no purchase (never-bought subscriber). L3 themes same as Path A (3 themes per level). The never-bought L3 is rarer (L3 has the highest LTV in the system per §1) but the flow exists for those who browse/cart and never convert.

| Theme | Direction | Cadence |
|---|---|---|
| Gentle check-in | Same as Path A | D60 |
| Late-trainer story | Same as Path A | D80 |
| Open-ended support | FAQ path after winback | D100 |

### 4.20 FAQ/Objection Library (6 emails, level-specific blocks) — L3 RECEIVES (Phase 3 trigger)

Triggered by: Welcome end + no purchase. 6 emails, each addressing a primary objection. L3 receives level-specific content blocks per S02 §4.20.

| Pos | Objection | Subject (L3) | Primary Lever |
|:---:|---|---|:---:|
| E1 | D1 — Tried everything | "Tried everything. We hear you." | L1 + L5 |
| E2 | D4 — Too old/severe | "There's no age where it's too late." | L3-A (Late train) |
| E3 | B4 — GI/withholding | "When the body itself makes it hard." | L1 + Medical |
| E4 | C3 — Worth $30-50? | "If you're wondering whether it's worth it." | L3 + (NO math reframe) |
| E5 | B2 — BCBA compatibility | "Your BCBA. Your team. We're not replacing anyone." | L2-A (Complement) |
| E6 | D3 — Hope-crash fear | "If you're afraid of hoping again." | L3 + L4 |

**L3-specific blocks override cross-level body for E1-E6.** Critical L3 detail: E4 addresses "Worth $?" objection WITHOUT math reframe — instead, the L3 block frames it as "Only you can decide if it's worth it. 60 days. By your judgment." The cross-level body may contain math reframe; the L3 block strips it.

### 4.21 Referral Flow (3 emails, cross-level) — L3 RECEIVES (D30+ post-purchase)

| Pos | Timing | Subject (L3) | Adaptation |
|:---:|:---:|---|---|
| E1 | D30+ | "Know another parent in this?" | Incentive: discount on next purchase. But framed as "If you know someone who'd find this useful..." not "Share and earn!" |
| E2 | D30+ | "When something works, we tell each other." | Lena voice; community framing. |
| E3 | D30+ | "Last reminder. Soft one." | Dual-sided incentive; soft close. |

**L3 adaptations:**
- L3 word-of-mouth is small but intensely trusted in the special-needs community. Per §1, her network includes BCBA, OT, SLP, Medicaid Waiver coordinator, special-ed teacher — and the parent Facebook groups where L3 moms find each other.
- Lena voice "When something works for our kids, we tell each other" is L3-calibrated.
- Incentive is "discount on your next pair" not "earn $20" — keeps it small, mutual.

### 4.22 Sunset (2 emails, cross-level) — L3 RECEIVES (D120 inactive)

Triggered by: 120 days inactive (opened 0, clicked 0, placed order 0, received 20+). Per S01 §3.3, the precise definition requires ALL conditions.

| Pos | Timing | Subject (L3) | Adaptation |
|:---:|:---:|---|---|
| E1 | D120 inactive | "Do you still want to hear from us?" | Re-permission check. One-click preference update. Respectful exit, never guilt. |
| E2 | 4-7 days after E1 | "If you'd rather we didn't." | Final farewell. No response = suppressed for 6-12 months. |

**L3 adaptations:**
- "We miss you" is forbidden even in sunset. "Just checking we're not bothering you" is the L3 tone.
- After sunset, tag `unengaged = True`, add to Master Suppression List.
- Highest priority — suppresses ALL other flows unconditionally.

---

## 5. CROSS-CUTTING RULES THAT APPLY TO EVERY L3 EMAIL

These rules are non-negotiable per §8.5 (L3 row = 🔴 ABSOLUTE NEVER), §25 (L3 mandatory elements), §15.7 (CTA calibration), §13 (hope/realism matrix), and the L3 avatar doc.

### 5.1 The 6 Mandatory L3 Elements (per §25) — every L3 email must contain:

1. **Dignity in every sentence.** Each word passes: "Would this land as dignity on a mom who's been at this for 9 years?"
2. **"Mini-wins count" framing.** Success is signal, not training.
3. **Acknowledge the resignation reality.** She is not in crisis; she is in steady-state survival.
4. **Permission-not-to-buy in EVERY mail.** Not just conversion mail. **Every. Mail.**
5. **Lena peer voice** — "Both my sons went through this." Lena has been through L3 territory (ages 6 and 8).
6. **60-Day Guarantee framing** — "Try it for 60 days. By your judgment."

### 5.2 L3 Hope/Realism Ratio Per Stage (per §13)

| Stage | Ratio | Direction |
|---|---|---|
| Pre-Purchase | 20/80 | Heavy realism |
| Conversion | **15/85** | Crushing realism (most-skewed cell) |
| Transactional | 20/80 | Gentle dignity |
| PP Early (D0-21) | 20/80 | Gentle dignity |
| PP Mid (D14-60) | **15/85** | Resignation |
| Lifecycle | **15/85** | Minimal hope |

**The trajectory does not rise. It holds and occasionally dips.** Opposite of L1 (hope rises toward Pre-K) and stronger than L2 (cautious, mechanism-anchored).

### 5.3 L3 Visual Rules (per §15.7 + avatar §9)

- **CTA:** Text link or muted button. NEVER full-width green button.
- **Spacing:** 56px gaps (widest in system).
- **Color:** Cream + soft earth tones. ZERO Brand-Yellow. ZERO neon.
- **Imagery:** Kids 6-10+, reflective, soft, dignified. No celebration shots. No before/after.
- **No exclamation marks** in subject lines or CTAs. No emoji in subject lines as decoration.
- **No math reframe callouts, urgency banners, or prominent shipping cost.**

### 5.4 L3 Sign-Off Progression (per S02 §1)

- E1-E2: "Talk soon,"
- E3-E5: "With understanding,"
- E6+: "With care,"

### 5.5 L3 Offer Restrictions (per §25)

- Primary offer: **1 Pair ($34.99)** — never the 3+3 Bundle as the headline.
- Upgrade path: 1 Pair → 3+3 (organic, in PP-Extended Upsell). NEVER pushed to 5+5.
- NEVER math reframe. NEVER prominent shipping cost. NEVER name specific shipping carrier.

### 5.6 L3 Absolute Forbidden Phrases (per §8.5 + avatar §8)

Any of these in any L3 email destroys trust:

- "Don't give up!" and all variants ("Keep going!", "Stay strong!", "You've got this!")
- "Your child can still do this!" / "Your child can do this!"
- "It's never too late!" (alone, without interoception mechanism)
- "Re-energize your training!" / "Save him from years of diapers" / "Free her from pull-ups"
- "Help him grow up" / "Make this the year" / "Reduce meltdowns"
- "Get out of diapers!" / "Be diaper-free!"
- "Independence!" without realism anchor / "Self-sufficient" without context
- "Don't let your child miss out" / "Time is precious — start now"
- "He deserves better" / Adult diaper language as sales pressure / Grief as sales tool
- Any cheerleading tone, exclamation marks stacked, caps for emphasis
- Any "Fix" or "Cure" (autism = identity, not disease)
- Math reframe ("less than a coffee a day")
- Urgency of any kind (countdown timers, "last chance," "today only")
- "Easy," "Quick," "Simple," "Effortless," "Miracle," "Breakthrough," "Revolutionary," "Game-changer," "Life-changing"
- "Just like other kids" / "Suffering from autism" / "High-functioning" / "Low-functioning"
- "Wait until they're ready" / "Just try harder" / "Be more consistent"
- "Your child should..." / "Most children at this age..." / "Have you tried [obvious method]"
- "Don't worry" / "We understand" (empty) / "Your child will be normal"

---

## 6. L3 WELCOME FLOW — 8 EMAILS, SLOWER CADENCE

The Welcome Flow is the centerpiece of the L3 pre-purchase journey. Cadence per S02 §4.1 L3 table: D0/D2/D5/D7/D10/D14/D17/D21.

| Pos | Day | Subject (L3) | Lever | Section | Sign-off |
|:---:|:---:|---|:---:|---|---|
| E1 | D0 | "I don't know your story. But I know this feeling." | L4 (Lena) | Observation → Validation | "Talk soon," |
| E2 | D2 | "He's never reacted to a wet diaper. That's not failure." | L1 (Sensory Gap) | Validation → Mechanism | "Talk soon," |
| E3 | D5 | "60 days. No pressure. By your judgment." | L3 (Guarantee) | Permission | "With understanding," |
| E4 | D7 | "Late is not never." | L3-A + L3-D | Validation | "With understanding," |
| E5 | D10 | "The smallest signs. They count." | L3-C (Mini-wins) | Validation | "With understanding," |
| E6 | D14 | "Add alongside what you're already using." | L3-B (Add alongside) | Mechanism → Permission | "With care," |
| E7 | D17 | "His autism isn't being treated. His nervous system is being supported." | L3-D (Dignity) | Validation | "With care," |
| E8 | D21 | "Whatever you decide, the door stays open." | L4 (Lena) | Permission | "With care," |

**L3 Welcome specifics:**
- **Slower cadence than L1/L2:** E1→E2 gap is 2 days (not 1); E2→E3 gap is 3 days; total arc = 21 days.
- **No "Holy shit that explains it" tipping point** (L1's E2); L3's E2 is gentleness-first.
- **No Pre-K countdown** (L1's E5); L3's E5 is mini-wins reframing.
- **Lena peer voice in EVERY email** (per §25, Lena is the #3 trust lever for L3).
- **WELCOME10 code appears in E1 only.**
- **Permission-not-to-buy in every mail** (mandatory L3 element, §25).
- **E8 is a real farewell, not a last-call push.** L3 may buy at 14-21 days, wait 30+, or never buy — all acknowledged.

### Per-email notes (compact)

- **E1 (D0):** Mirror: "You've stopped counting the years. That's not giving up — that's protecting yourself." Subject: Lena intro. WELCOME10 included. No CTA.
- **E2 (D2):** "That's not failure — that's neurology." Text link only (no green button). Text-dominant visual.
- **E3 (D5):** "60 days is enough time to know whether his nervous system is starting to connect." 1 Pair CTA only.
- **E4 (D7):** Maureen Bennie's son at 9.5. "Whatever progress means for your family is enough." Emotional core.
- **E5 (D10):** "A pause. A touch. Looking down. Those ARE progress." Redefine success.
- **E6 (D14):** "Specialty diapers stay primary. This is a sensory add-on." Medicaid respect.
- **E7 (D17):** "We're not treating a problem. We're giving his nervous system another way to know." No "fix"/"cure"/"treat."
- **E8 (D21):** "Some L3 moms wait weeks. Some wait months. Some never come back. All of those are real answers." Lena farewell.

**Welcome flow exit:**
- If L3 buys → Order Confirmation → Shipping → Arrived → PP-Education D0-21.
- If L3 does NOT buy → FAQ/Objection Library (Flow 20) at Phase 3 trigger + Winback Path B (Flow 19) at D60.

---

## 7. PHASE 1 FLOWS — BROWSE, CART, CHECKOUT, ORDER, SHIPPING, ARRIVED

The Phase 1 (Months 1-2) flows are 9 cross-level flows + Welcome. For L3, all are gated by §17.1 (Weeks 1-2 exclusion). After Week 2, L3 receives them per behavior-trigger conditions:

| Flow | L3 Trigger | L3 Receives? |
|---|---|---|
| Welcome | Signup with `avatar_level3` tag | YES (E1 immediate; E2-E8 per cadence post-Week 2) |
| Browse Abandonment | Viewed product page, no cart | YES (post-Week 2) |
| Cart Abandonment | Added to cart, no purchase | YES (post-Week 2) |
| Checkout Abandonment | Started checkout, no completion | YES (post-Week 2) |
| Order Confirmation | Order placed | YES (always — transactional) |
| Shipping / OFD | Shipping label / carrier scan | YES (always — transactional) |
| Arrived & Welcome | Delivery confirmed | YES (post-Week 2) |
| PP-Direct Upsell | 1-pair buyer | **NO** (math reframe forbidden) |
| PP-Level Detection | GF subscriber, no level tag | **NO** (already tagged) |
| Mary S. Story | Buyer, D3 | YES (post-Week 2) |

**Note on transactional flows:** Order Confirmation, Shipping, and Out for Delivery are transactional per §17.7. They are exempted from the §17.1 weeks 1-2 warming exclusion because they are Google 2024-mandated transactional emails. The §17.7 rule takes precedence.

---

## 8. PP-FAMILY FLOWS L3 RECEIVES vs EXCLUDED FROM

The Post-Purchase family is where most L3 lifetime value is generated (highest LTV in system per §1 avatar). L3 receives most PP flows with material adaptations.

### 8.1 Flows L3 Receives in the PP Family

| Flow | Adaptation Notes |
|---|---|
| Order Confirmation | Transactional; Lena sign-off; no cross-sell |
| Shipping / OFD | Transactional; no carrier name |
| Arrived & Welcome | First-wear protocol; manage expectations; no upsell |
| Mary S. Story | Founder story once; dignified framing |
| PP-Education D0-21 | Mini-wins framing throughout |
| PP-Extended Upsell | 1 Pair → 3+3 organic only; never 5+5 |
| PP-Mid Check-In (D30/D45/D60/D75) | Three-Family with Maria's story anchor; reply-to-Lena |
| PP-Extended Education | 5 L3-specific themes (D22+) |
| PP-Support At-Risk | Extra-gentle per cross-cutting |
| Replenishment A | L3 = 1-pair buyer; sub-flow A only (D14/D30/D60) |
| Review Request (D30/D60) | Dignity-first leading questions |
| Winback A (D90+) | Highest L3 conversion cell |
| Winback B (D60+) | Same themes as A; never-bought segment |
| FAQ/Objection Library | Level-specific blocks (6 emails) |
| Referral Flow | Lena peer ask; mutual framing |
| Sunset (D120 inactive) | Re-permission; respectful exit |

### 8.2 Flows L3 Does NOT Receive in the PP Family

| Flow | Why Excluded |
|---|---|
| PP-Direct Upsell | Math reframe + bundle comparison forbidden (§25) |
| PP-Level Detection | L3 already tagged; flow is GF-only |
| Replenishment B (3+3 buyer) | L3 only gets A unless she organically upgrades |
| Replenishment C (5+5 buyer) | NEVER pushed to 5+5 |

**Key insight:** Of the 17 PP-family flows, L3 receives 14 and is excluded from 3. The exclusion pattern is anchored in §25 L3 offer restrictions and §17.1 warming logic.

---

## 9. LEVEL-SPECIFIC FLOWS — EXTENDED EDUCATION, WINBACK A/B, FAQ

### 9.1 PP-Extended Education (Flow 14) — L3 receives 5 themed emails

L3-specific themes per S02 §4.14 (cadence inferred from S01 §3.3 D22+ trigger + theme pacing):
- D30: Dignity-first progress
- D45: Smallest signs that matter
- D60: Sensory overload solutions
- D80: Partner communication
- D100: When to try again

These are the deepest-value L3 emails — they address her specific lived experience rather than selling. "Partner communication" acknowledges the partitioned-decision-maker dynamic (he handles money). "When to try again" gives permission to re-engage after stopping.

### 9.2 Winback A/B (Flows 18, 19) — L3 receives 3 themed emails each

Both Path A (D90+ post-purchase) and Path B (D60+ never-bought) use the same 3 L3 themes:
- Gentle check-in
- Late-trainer story (Maureen B. callback, intentional repetition)
- Open-ended support

**L3 Winback is the highest-conversion cell in the entire Winback system** per S02 §4.18. Reason: L3 moms who bought and disengaged often return at developmental window shifts (new BCBA observation, regression, school transition). The late-trainer story gives permission to re-engage without re-litigating the original decision.

### 9.3 FAQ/Objection Library (Flow 20) — L3 receives 6 emails

L3's primary objections (4-step reframe: Name → Validate → Reframe → Absolve):

| Pos | Objection | Subject (L3) | Lever |
|:---:|---|---|:---:|
| E1 | D1 — Tried everything | "Tried everything. We hear you." | L1 + L5 |
| E2 | D4 — Too old/severe | "There's no age where it's too late." | L3-A |
| E3 | B4 — GI/withholding | "When the body itself makes it hard." | L1 + Medical |
| E4 | C3 — Worth $30-50? | "If you're wondering whether it's worth it." | L3 (NO math reframe) |
| E5 | B2 — BCBA compatibility | "Your BCBA. Your team. We're not replacing anyone." | L2-A |
| E6 | D3 — Hope-crash fear | "If you're afraid of hoping again." | L3 + L4 |

**Critical L3 detail:** E4 addresses "Worth $?" WITHOUT math reframe — instead, the L3 block frames it as "Only you can decide if it's worth it. 60 days. By your judgment." Cross-level body may contain math reframe; the L3 block strips it.

---

## 10. SUPPRESSION, SUNSETTING, AND CROSS-FLOW PRIORITY

### 10.1 Suppression Rules Specific to L3

- **Winback (A or B) pauses ALL nurture flows** while active — overrides Welcome, PP-Education, Replenishment. Critical for L3 because Winback is also her highest-conversion cell.
- **Cart Abandonment suppresses Welcome Flow E3+** during active cart (per S02 §4.2 cross-cutting) — for L3, Welcome E3 (D5) may be delayed if she has an active cart during weeks 3-4.
- **Sunset is HIGHEST PRIORITY** — suppresses ALL other flows unconditionally. After D120 inactive, L3 enters Sunset; she receives no other flow until she re-permissions.
- **Welcome E1 only** is sent during Weeks 1-2 of warming (L3 exclusion).

### 10.2 L3 Sunset Specifics

Trigger: 120 days inactive (opened 0, clicked 0, ordered 0, received 20+). Re-permission tone: "Do you still want to hear from us?" — never "We miss you." L3 moms who exit via Sunset are not failures; many return at a developmental window shift. Master Suppression List keeps them on file for 6-12 months.

### 10.3 Cross-Flow Priority Hierarchy (L3)

1. Sunset (highest priority, unconditional)
2. Winback A/B (pauses nurture)
3. Cart Abandonment (pauses Welcome E3+)
4. Checkout Abandonment (pauses Cart E1+)
5. Browse Abandonment (no suppression)
6. PP-Mid Check-In (no suppression)
7. PP-Extended Education (no suppression)
8. Replenishment (no suppression)
9. Review Request (no suppression)
10. Referral Flow (no suppression)
11. PP-Support At-Risk (no suppression)
12. Order Confirmation / Shipping / OFD (transactional, no suppression)
13. Arrived & Welcome (post-purchase, no suppression)
14. Mary S. Story (one-time, no suppression)
15. Welcome Flow (lowest priority for L3 — she has weeks to decide)

---

## 11. HOPE/REALISM TRACKING ACROSS THE L3 TIMELINE

Per §13, L3's hope/realism ratio is the most-skewed in the system. Tracking the trajectory:

| Stage | Hope/Realism | Direction |
|---|---|---|
| Welcome E1 (D0) | 20/80 | Heavy realism |
| Welcome E2 (D2) | 20/80 | Heavy realism (mechanism lands gently) |
| Welcome E3 (D5) | 20/80 | Heavy realism (guarantee as shield) |
| Welcome E4 (D7) | 18/82 | Slight dip (Late is not never — confronts her reality) |
| Welcome E5 (D10) | 22/78 | Tiny rise (mini-wins reframes success) |
| Welcome E6 (D14) | 20/80 | Holds (add-alongside respects her system) |
| Welcome E7 (D17) | 18/82 | Slight dip (dignity deep confronts the cost) |
| Welcome E8 (D21) | 20/80 | Returns to baseline (door stays open) |
| Cart/Checkout/Browse | 20/80 | Heavy realism |
| Order Confirmation | 20/80 | Gentle dignity |
| Arrived & Welcome | 22/78 | Tiny rise (first wear = hope-adjacent) |
| PP-Education D0/D7 | 22/78 → 20/80 | Tiny rise then hold |
| PP-Education D14/D21 | 18/82 → 22/78 | Dip (regression) then rise (mini-wins) |
| PP-Mid Check-In D30/D45 | 20/80 | Holds (three-family pattern normalizes) |
| PP-Mid Check-In D60 | **15/85** | Crushing realism (guarantee window closes) |
| PP-Extended Education (D22-D100) | **15/85** | Resignation throughout |
| PP-Extended Upsell (D28-D42) | 18/82 | Slight rise (when-you're-ready framing) |
| Replenishment A (D14-D60) | **15/85** | Resignation |
| Review Request (D30-D60) | 20/80 | Holds |
| Winback A/B (D60-90+) | **15/85** | Minimal hope |
| FAQ (D21+ no-purchase) | **15/85** | Crushing realism (objections confronted) |
| Referral (D30+) | 18/82 | Slight rise (community framing) |
| Sunset (D120+) | 15/85 | Final exit |

**Trajectory summary:** L3 hope/realism starts at 20/80, dips to 15/85 around PP-Mid and lifecycle stages, occasionally rises to 22/78 at mini-wins framing moments, but never rises above 25/75 in any single email. The trajectory is flat-to-downward across her entire lifecycle. This is the correct shape: L3's realism is not a problem to solve; it is the texture of her life.

---

## 12. QUICK-REFERENCE IMPLEMENTATION CARD

```
L3 EMAIL SEQUENCE — IMPLEMENTATION CARD

TAG                 avatar_level3
WELCOME             8 emails, D0/D2/D5/D7/D10/D14/D17/D21
                    (slower cadence than L1/L2; 2-day E1→E2 gap)
WELCOME EXCLUDED    Weeks 1-2 of warming (per §17.1)
                    E1 fires immediately; E2-E8 paused until Week 3+

CROSS-LEVEL PHASE 1 FLOWS (L3)
  ✓ Browse Abandonment (post-Week 2)
  ✓ Cart Abandonment (post-Week 2)
  ✓ Checkout Abandonment (post-Week 2)
  ✓ Order Confirmation (always — transactional)
  ✓ Shipping / OFD (always — transactional)
  ✓ Arrived & Welcome (post-Week 2)
  ✓ Mary S. Story (D3 post-purchase)
  ✗ PP-Direct Upsell (math reframe forbidden)
  ✗ PP-Level Detection (L3 already tagged)

PP-FAMILY (L3)
  ✓ PP-Education D0-21 (4 emails)
  ✓ PP-Extended Upsell (level-aware, 1 Pair → 3+3 organic only)
  ✓ PP-Mid Check-In (4 emails at D30/D45/D60/D75)
  ✓ PP-Extended Education (5 L3-specific themes)
  ✓ PP-Support At-Risk (extra-gentle)
  ✓ Replenishment A only (1-pair buyer; D14/D30/D60)
  ✓ Review Request (D30/D60)
  ✓ Winback A (D90+ post-purchase)
  ✓ Winback B (D60+ never-bought)
  ✓ FAQ/Objection Library (Phase 3, 6 emails)
  ✓ Referral Flow (D30+ post-purchase)
  ✓ Sunset (D120 inactive)

PRIMARY OFFER       1 Pair ($34.99) — never 3+3 as headline
UPGRADE PATH        1 Pair → 3+3 organic only
NEVER PUSHED        5+5 bundle

HOPE/REALISM        20/80 → 15/85 (Conversion) → 15/85 (PP Mid) → 15/85 (Lifecycle)
                    Trajectory: flat-to-downward. Never rises above 22/78.

TONE                Quiet warmth+reality. Lena peer voice in EVERY mail.
CTA                 Text link or muted button. NEVER full-width green.
COLOR               Cream + earth tones. ZERO yellow. ZERO neon.
SPACING             56px gaps. Widest in system.
IMAGERY             Kids 6-10+, reflective, dignified. No celebration.
URGENCY             NEVER. ANY FORM.
MATH REFRAME        NEVER. EVEN IN FAQ E4.
SHIPPING COST       Never prominent. Never carrier name.

TOP 5 L3 TRIGGERS (in order)
  1. Adult Diaper Transition ("Next size is adult diapers")
  2. 60-Day Guarantee
  3. Lena Peer Voice
  4. Caregiver Health ("I got physically sick")
  5. "Small Signs" of Hope (mini-wins)

TOP OBJECTION       "What if I get my hopes up again?"
MOST DANGEROUS      "Fix" / "Cure" (autism = identity, not disease)

THE ONE THING       "Whatever progress means for your family is enough."
THE ONE DANGER      Any urgency. Any cheerleading. Any "Don't give up!"
                    Any math reframe. Any adult diaper sales pressure.

THE 6 MANDATORY ELEMENTS (EVERY L3 MAIL)
  1. Dignity in every sentence
  2. "Mini-wins count" framing
  3. Acknowledge resignation reality
  4. Permission-not-to-buy in EVERY mail
  5. Lena peer voice
  6. 60-Day Guarantee framing

FORBIDDEN WORDS (L3 ABSOLUTE NEVER)
  "Easy," "Quick," "Simple," "Effortless," "Miracle," "Breakthrough,"
  "Revolutionary," "Game-changer," "Life-changing," "Fix," "Cure,"
  "Don't give up," "Save him from years of diapers," "Free her from
  pull-ups," "Independence!" alone, "Don't let your child miss out,"
  "Time is precious — start now," "He deserves better," adult diaper
  sales language, grief as sales tool, any urgency, math reframe.

ESTIMATED L3 TOUCHES
  Pre-purchase Welcome: 8
  Phase 1 cross-level (avg): 4-6 (Cart + Browse + Checkout combined)
  Transactional (Order, Ship, OFD): 3
  Arrived & Welcome: 1
  PP-Education D0-21: 4
  PP-Extended Upsell: 3
  PP-Mid Check-In: 4
  PP-Extended Education: 5
  PP-Support At-Risk (if triggered): 0-4
  Replenishment A: 3
  Review Request: 1-2
  Winback A or B: 0-3
  FAQ/Objection Library (Phase 3): 0-6
  Referral Flow: 1-3
  Sunset: 0-2

  Total L3 lifetime touches: ~38-58 (vs. ~130 for L1/L2)

L3 EXCLUSION RATIONALE
  §17.1: L3 EXCLUDED from weeks 1-2 of domain warming
  §18.1 Rule 4: Welcome is the only level-specific flow in Phase 1
  §25: Math reframe, urgency, prominent shipping cost all forbidden
  §8.5: L3 row = 🔴 ABSOLUTE NEVER for ~30 phrases

NON-NEGOTIABLE      Trust is earned, not assumed. Once earned, Maria
                    is the most loyal customer in the system.
```

---

*End of Level 3 (Maria) Email Sequence — Stage 1 Reference Document*
*Every L3 subagent MUST treat this document as the operating manual for flow inclusion/exclusion, cadence, tone, and visual decisions.*
*Source convergence: `outputs/synthesis/01-customer-avatar.md` §3.4, §6, §7.3, §8.1; `demands/GIULIANO-DEMANDS.md` §1, §8.5, §13, §15.7, §17.1, §18, §25, §26; `outputs/strategy/_notes/S02-A-framework.md` (strategy-macro.json v2.0); `_notes/locked-profile.json`.*