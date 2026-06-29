# Email Sequence — Level 1: Sarah
## BrightKidCo Customer Journey Reference

> **Audience:** Stage 1 subagents building Level 1 (Sarah) emails. This document maps every email Sarah can receive across her full 6-month lifecycle, in chronological order from signup (Hour 0) through Winback and Sunset.
> **Purpose:** Single source of truth on *when* Sarah hears from us, *why* she hears from us, *what we want her to do*, and *where this email sits in her larger journey*. Use this when writing copy for a specific email — it tells you what came before and what's coming next.
> **Inputs:** `journey-l1-01-avatar.md` (Sarah profile), `locked-profile.json` (125 email profiles, filtered to level=l1 plus cross-level emails she receives), `strategy-macro.json` (22 flows).
> **Companion documents:** `journey-l1-01-avatar.md` (who Sarah is), `journey-l1-03-system.md` (wireframe shapes and section structures), `journey-l1-04-rules.md` (forbidden phrases and Lena voice), `journey-l1-05-checklist.md` (per-email build checklist).

---

## 1. INTRODUCTION — SARAH'S OVERALL JOURNEY

Sarah is the **fastest-deciding, highest-converting, deadline-driven** customer across all four levels. She signs up with a 70/30 hope/realism ratio (her highest across the matrix), driven by a calendar anchor — the Pre-K enrollment letter that says "Children must be toilet trained to attend." Her window from signup to purchase is **2–7 days**, not the 14–30 days L2/L3 need. This means the welcome flow (D0/D1/D3/D7/D10/D14/D17/D21) covers her entire decision arc, and Post-Purchase begins within the first week.

Sarah's journey breaks into **five distinct phases**, each with its own cadence, tone, and primary lever:

1. **Phase 1 — Pre-Purchase (Hour 0 to Day 21).** Welcome flow + Browse/Cart/Checkout Abandonment. Goal: convert her from "mildly skeptical signup" to "customer with order in cart." Primary lever: L1 Sensory Gap + L4 Lena Peer Voice. Tone: hopeful, bright, mechanism-led, peer-voiced.

2. **Phase 2 — Purchase Event (Hour 0 of post-purchase).** Order Confirmation → Shipping → Out for Delivery → Arrived & Welcome. Goal: build anticipation and confidence. Primary lever: L4 Lena. Tone: excited, practical, no pressure.

3. **Phase 3 — Post-Purchase (Day 0 to Day 60).** PP-Direct Upsell → PP-Education D0-21 → PP-Mary S. Story → PP-Extended Upsell → PP-Mid Check-In → PP-Extended Education → PP-Support At-Risk → Replenishment A → Review Request. Goal: drive adoption, set realistic expectations, capture second purchase. Primary lever: L4 Lena + L3 60-Day Guarantee. Tone: coaching, supportive, peer-grounded.

4. **Phase 4 — Extended Lifecycle (Day 60 to Day 180).** Replenishment B/C + PP-Extended Education continuation. Goal: capture replenishment revenue at the rotation point. Primary lever: L4 Lena. Tone: practical helper, not seller.

5. **Phase 5 — Winback & Sunset (Day 90+ no engagement).** Winback Path A/B → Sunset E1/E2. Goal: re-engage if calendar returns her (Pre-K season), then respect opt-out. Primary lever: L4 Lena + L3 Guarantee. Tone: bright, light, "we miss you without saying it."

Sarah's hope trajectory across the full 6-month lifecycle: **70/30 at signup → 75/25 by Welcome E2 (mechanism click) → 70/30 across Welcome E3-E7 (decision window) → 65/35 in PP-Early → 55/45 in PP-Mid → 50/50 at lifecycle end.** When in doubt, the goal of every email is to **restore her hope by one notch**, not by ten.

The cardinal rule across all phases: **never name the level, never say "easy," never imply she should have figured this out sooner.** The mechanism reframe — "It's not behavior. It's signal-timing." — is the heartbeat of every L1 email.

---

## 2. CHRONOLOGICAL TIMELINE — FULL 6-MONTH VIEW

This is the master timeline. Every email Sarah can receive, ordered by hour-of-life (Hour 0 = signup; Day 0 of post-purchase = purchase event). Email IDs link to locked-profile.json entries. Times shown assume the email is triggered; conditional flows (cart, checkout, browse, at-risk, winback) only fire if the relevant event occurs.

### Phase 1 — Pre-Purchase (Hour 0 to Day 21)

| Trigger Window | Email ID | Flow | Position | Lever | Goal |
|---|---|---|---|---|---|
| **Hour 0** | `welcome-01-e1-l1` | Welcome | E1 | L4 Lena | Convert signup → first reading |
| **Hour 1** | `cart-02-e1` (if cart) | Cart Abandonment | E1 | L1 Mechanism | Recover abandoned cart |
| **Hour 1** | `checkout-03-e1` (if checkout started) | Checkout Abandonment | E1 | L3 Guarantee | Recover checkout abandonment |
| **Day 1** | `welcome-01-e2-l1` | Welcome | E2 | L1 + L5 | Tipping point: mechanism lands |
| **Day 1** | `browse-04-e1` (if browsed no cart) | Browse Abandonment | E1 | L1 Mechanism | Educational hook |
| **Day 2** | `cart-02-e2` (if cart still abandoned) | Cart Abandonment | E2 | L4 + L2 | Social proof + bundle upsell |
| **Day 2** | `checkout-03-e2` (if checkout still abandoned) | Checkout Abandonment | E2 | L3 + L1 | Final nudge + free shipping |
| **Day 3** | `welcome-01-e3-l1` | Welcome | E3 | L3 Guarantee | First hard CTA |
| **Day 3** | `cart-02-e3` (if cart still abandoned) | Cart Abandonment | E3 | L3 + L4 | 60-day guarantee + permission not to buy |
| **Day 4** | `browse-04-e2` (if browse still no cart) | Browse Abandonment | E2 | L1 + L4 | Deep mechanism + 3-layer education |
| **Day 7** | `welcome-01-e4-l1` | Welcome | E4 | L1 + L5 | Failure acknowledgment: "You solved the wrong problem" |
| **Day 8** | `browse-04-e3` (if browse still no cart) | Browse Abandonment | E3 | L3 Guarantee | 60-day guarantee + door open |
| **Day 10** | `welcome-01-e5-l1` | Welcome | E5 | L1-A Pre-K | Pre-K countdown + 8-week plan |
| **Day 14** | `welcome-01-e6-l1` | Welcome | E6 | L4 Peer Trust | L1-specific testimonials |
| **Day 17** | `welcome-01-e7-l1` | Welcome | E7 | L3 + L5 | Last call: WELCOME10 expires |
| **Day 21** | `welcome-01-e8-l1` | Welcome | E8 | L4 Lena | Gentle close + Lena farewell |

### Phase 2 — Purchase Event (Immediate, ~Day 0 Post-Purchase)

| Trigger Window | Email ID | Flow | Position | Lever | Goal |
|---|---|---|---|---|---|
| **Purchase** | `order-05-e1` | Order Confirmation | E1 | L4 + L3 | Confirm order + 60-day guarantee reminder |
| **Fulfillment** | `shipping-06` or `ofd-07-e1` | Shipping/Out for Delivery | E1 | L4 Lena | Tracking + excitement building |
| **Morning of delivery** | `ofd-07-e1` (or e2 of merged flow) | Out for Delivery | E2 | L4 Lena | "Today's the day!" prep guidance |
| **Delivery confirmed** | `arrived-08` | Arrived & Welcome | E1 | L1 Mechanism | First-wear protocol + 8-week timeline |

### Phase 3 — Post-Purchase (Day 0 to Day 60)

| Trigger Window | Email ID | Flow | Position | Lever | Goal |
|---|---|---|---|---|---|
| **Day 0 PP** | `pped-11-d0` | PP-Education D0-21 | E1 | L4 Lena | "Your first wear" — manage expectations |
| **Day 1 PP** | `upsell-09-e1` | PP-Direct Upsell | E1 | L4 + L2 | 1-pair → 3+3 bundle nudge |
| **Day 3 PP** | `mary-14-e1` | PP-Mary S. Story | E1 | L4 Founder | Mary S. founder story (one-time) |
| **Day 3 PP** | `upsell-09-e2` | PP-Direct Upsell | E2 | L4 Peer Trust | 10% off add-on (test without first) |
| **Day 7 PP** | `pped-11-d7` | PP-Education D0-21 | E2 | L1 Mechanism | "What to look for" — micro-signs |
| **Day 14 PP** | `pped-11-d14` | PP-Education D0-21 | E3 | L5 Normalization | Week-two reality: regression is normal |
| **Day 14 PP** | `repa-15-e1` | Replenishment A | A1 | L4 Lena | Wash cycles reminder (1-pair buyer) |
| **Day 21 PP** | `pped-11-d21` | PP-Education D0-21 | E4 | L4 Peer Trust | "Celebrate the small wins" — soft upsell |
| **Day 22+** | `pped-22-e1-l1` | PP-Extended Education | E1 | L1-A Pre-K | Pre-K timeline real talk |
| **Day 25+** | `pped-22-e2-l1` | PP-Extended Education | E2 | L1-A | When other parents ask |
| **Day 28 PP** | `ppupsell-12-e1` | PP-Extended Upsell | E1 | L1 Pre-K | Complete kit urgency |
| **Day 30 PP** | `mid-13-d30` | PP-Mid Check-In | E1-D30 | L4 + L1 | Three-Family Testimonial + Lena reply |
| **Day 30 PP** | `review-18-e1` | Review Request | E1 | L4 Lena | Direct review link |
| **Day 30 PP** | `repa-15-e2` | Replenishment A | A2 | L1 Mechanism | Consistency matters |
| **Day 30+** | `pped-22-e3-l1` | PP-Extended Education | E3 | L1-A | Accidents happen |
| **Day 35 PP** | `ppupsell-12-e2` | PP-Extended Upsell | E2 | L4 Lena | Accessory cross-sell (Wash Bag, Magic Targets) |
| **Day 42 PP** | `ppupsell-12-e3` | PP-Extended Upsell | E3 | L3 Guarantee | Final upsell + door open |
| **Day 45 PP** | `mid-13-d45` | PP-Mid Check-In | E2 | L4 Lena | "How's it going?" reply invitation |
| **Day 45+** | `pped-22-e4-l1` | PP-Extended Education | E4 | L1-A | Building consistency |
| **Day 60 PP** | `mid-13-d60` | PP-Mid Check-In | E3 | L3 Guarantee | 60-day mark guarantee reminder |
| **Day 60 PP** | `review-18-e2` | Review Request | E2 | L4 Lena | Follow-up if no review |
| **Day 60 PP** | `repa-15-e3` | Replenishment A | A3 | L3 Guarantee | Guarantee threshold |

### Conditional — At-Risk Support (Triggered by no opens)

| Trigger Window | Email ID | Flow | Position | Lever | Goal |
|---|---|---|---|---|---|
| **3 days no open** | `atrisk-23-e1` | PP-Support At-Risk | E1 | L4 Lena | "Just checking in" |
| **7 days no open** | `atrisk-23-e2` | PP-Support At-Risk | E2 | L1 Mechanism | "How to get the most out of your pairs" |
| **14 days no open** | `atrisk-23-e3` | PP-Support At-Risk | E3 | L5 Normalization | "His nervous system is learning even when it doesn't show" |
| **21 days no open** | `atrisk-23-e4` | PP-Support At-Risk | E4 | L3 Guarantee | Guarantee still active |

### Phase 4 — Extended Lifecycle (Day 60 to Day 180)

| Trigger Window | Email ID | Flow | Position | Lever | Goal |
|---|---|---|---|---|---|
| **Day 75 PP** | `repb-16-e1` | Replenishment B | B1 | L4 Lena | "Time to rotate" — bundle upgrade nudge to 5+5 |
| **Day 75+** | `pped-22-e5-l1` | PP-Extended Education | E5 | L1-A | Graduation prep |
| **Day 90 PP** | `repb-16-e2` | Replenishment B | B2 | L4 Lena | Bundle upgrade to 5+5 |
| **Day 150 PP** | `repc-17-e1` | Replenishment C | C1 | L4 Lena | "Long haul support" — loyalty acknowledgment |
| **Day 180 PP** | `repc-17-e2` | Replenishment C | C2 | L4 Lena | Accessory refresh (Wash Bag, Magic Targets) |

### Phase 5 — Winback & Sunset (Day 90+ No Engagement, Post-Purchaser)

| Trigger Window | Email ID | Flow | Position | Lever | Goal |
|---|---|---|---|---|---|
| **Day 90+ no engagement** | `winback-a-19-e1-l1` | Winback Path A | E1 | L1-A Pre-K | Pre-K season reminder |
| **Day 90+ no engagement** | `winback-a-19-e2-l1` | Winback Path A | E2 | L1 Mechanism | Mechanism refresher |
| **Day 90+ no engagement** | `winback-a-19-e3-l1` | Winback Path A | E3 | L3 Guarantee | Guarantee + permission |
| **Day 90+ no engagement** | `winback-b-24-e1-l1` | Winback Path B | E1 | L4 Lena | (alt path, post-Winback A) |
| **Day 90+ no engagement** | `winback-b-24-e2-l1` | Winback Path B | E2 | L4 Lena | (alt path) |
| **Day 90+ no engagement** | `winback-b-24-e3-l1` | Winback Path B | E3 | L4 Lena | (alt path, final) |
| **Continued no engagement** | `sunset-25-e1` | Sunset | E1 | L4 Lena | Re-permission check |
| **Continued no engagement** | `sunset-25-e2` | Sunset | E2 | L4 Lena | Final farewell |

**Total L1-touching emails:** 51 emails Sarah can receive across her full lifecycle. Not all fire for every customer — many are conditional.

---

## 3. PER-FLOW SECTIONS — DETAILED BREAKDOWNS

### 3.1 WELCOME FLOW (Flow #1) — 8 Emails over 21 Days

The Welcome Flow is Sarah's **decision arc**. It carries her from "mildly skeptical signup" to either "customer with order placed" or "Lena farewell, door open." The cadence (D0/D1/D3/D7/D10/D14/D17/D21) is engineered for her 2-7 day decision window — long enough for her to think, ask her partner, Google reviews; short enough that she doesn't drift away before Pre-K pressure compounds.

**Critical Welcome Flow rules:**
- Cart Abandonment SUPPRESSES Welcome E3+ during active cart (per `strategy-macro.json` cross_cutting_notes). If Sarah adds to cart at Hour 1, Welcome E3-E8 are paused until cart resolves.
- The 49% SPARK stat appears in 70%+ of L1 welcome emails. It is the normalization pillar — *"You are not behind."*
- Lena's voice (not Mary S.) appears in every email. Mary S. is reserved for Phase 2 (Day 3 PP).
- WELCOME10 code is used in E1 across all variants; expires around E7.

#### Welcome E1 — `welcome-01-e1-l1` (D0, immediate)

**Trigger:** Email signup (popup form, lead magnet, footer form). Fires within 60 seconds of submission.

**Goal:** Open the email. Read past the first paragraph. Convert "mildly skeptical" to "okay, keep going." Lena introduction.

**Cross-Flow Context:** This is Sarah's first email from us ever. She came in via a popup that promised "10% off + potty training plan built for kids like yours." She's guarding against marketing. E1's job is to survive her BS detector long enough for E2's mechanism to land. By the end of E1, she should know: Lena is a real mom (not a brand), Lena's two sons went through this, and the WELCOME10 code is hers.

**Key Details:** 990 words, Shape A, 5 sections (Hook, Validation, Mechanism, CTA, "Let's explore what's really happening with his body"). Sign-off: "Talk soon," (E1-E2 progression). Primary lever: L4 Lena Peer Trust.

**Section Notes:** Hook opens with the L1 mirror (*"He talks about the potty but doesn't produce"*). Validation: 10-20 failed methods acknowledged by name. Mechanism: gentle intro of signal-timing (no deep science yet — this is E1). CTA: WELCOME10 code, permission-toned.

#### Welcome E2 — `welcome-01-e2-l1` (D1, next day)

**Trigger:** Day 1 after signup. Fires regardless of cart activity at this point.

**Goal:** The "holy shit, that explains it" moment. Mechanism goes deep. Read all of it. Click the "learn more" link.

**Cross-Flow Context:** If Sarah abandoned a cart at Hour 1, Cart Abandonment E1 is already in her inbox from yesterday. Welcome E2 arrives alongside Cart E2 (24h after cart abandonment). Both will land in her inbox today — Welcome E2 reads, Cart E2 recovers. If she has NOT touched the cart, Welcome E2 stands alone and is the most important email in her entire pre-purchase journey. This is the **tipping point email**.

**Key Details:** 1,085 words, Shape A, 16 sections (Hook, Validation ×2, Mechanism, Social Proof, Hook, CTA ×3, Placement Strategy, Primary Strategy Sources, Compendium Sources, Synthesis Sources, Ingestion Files, Research Files, Skills Loaded). Wait — the section count of 16 includes source-attribution blocks; the reader-facing body is Hook → Validation → Mechanism → Social Proof → CTA. Sign-off: "Talk soon," (still E1-E2 progression). Primary lever: L1 Sensory Gap + L5 49% Stat.

**Section Notes:** Mechanism lands hard here. Interoception explained. "He gets it but doesn't get it — that's a signal-timing gap." Names 2-3 failed methods (Oh Crap, sticker charts, timed sits) and explains *why each one assumed a signal the child couldn't feel.* Introduces 49% SPARK stat with proper citation. The third option (between pull-ups and underwear) is named.

#### Welcome E3 — `welcome-01-e3-l1` (D3)

**Trigger:** Day 3 after signup. SUPPRESSED if cart is still active (per Flow 07 suppression rule).

**Goal:** First hard CTA. Decision time. Read, decide, click through to PDP, or convert to cart.

**Cross-Flow Context:** This is Sarah's first "spend money" prompt. If she abandoned a cart at Hour 1 and Cart E1/E2/E3 have already fired without recovery, this email re-attempts the conversion. If she has never touched the cart, this is her introduction to the 3+3 bundle ($79.99 — her dominant offer per avatar profile). Welcome E3 lands when she may have asked her partner, "What do you think?" — the math reframe ("less than two months of pull-ups") is calibrated for that conversation.

**Key Details:** 751 words, Shape A, 8 sections (Hook, Validation, Mechanism, Validation, Hook, CTA, CTA, Pricing box for 3+3 Bestseller). Sign-off: "With understanding," (E3-E5 progression begins). Primary lever: L3 60-Day Guarantee.

**Section Notes:** Pre-K urgency allowed (L1 only). "60 days before Pre-K = enough time." Permission-not-to-buy is strong. Pricing box features 3+3 bundle at $79.99 with rotation rationale. CTA text: "See if this works for him" (NOT "BUY NOW"). Sign-off shifts from "Talk soon," to "With understanding," — this signals a tonal shift from "we're getting to know each other" to "we understand what you're going through."

#### Welcome E4 — `welcome-01-e4-l1` (D7)

**Trigger:** Day 7 after signup. SUPPRESSED if cart still active.

**Goal:** Failure acknowledgment. The absolution moment. Read all of it. The mechanism reframe — "You didn't fail. You solved the wrong problem" — lands here.

**Cross-Flow Context:** Sarah has had a week to think. She may have asked her partner, Googled "BrightKidCo reviews," read the FAQ. Welcome E4 arrives when her internal BS detector is at maximum scrutiny — she has spent 6 days cross-checking. The email must pass that scrutiny. The failure acknowledgment is the unlock: it dissolves the self-blame that has been running in the background since E1.

**Key Details:** 1,029 words, Shape A, 11 sections (Hook, Validation, Mechanism, Social Proof, CTA, "L1 pricing: 3+3 Bundle, $79.99", CTA, "60 days. Your judgment.", CTA, "See if the 3+3 Bundle closes the gap before Pre-K", Sign-off). Sign-off: "With understanding," (still E3-E5). Primary lever: L1 Deep Mechanism + L5 Normalization.

**Section Notes:** "You didn't fail. You solved the wrong problem" is the headline. Validates that every method she tried assumed a signal the child could feel. Mechanism goes deep on the prompt-dependency loop ("He's prompt-trained, not signal-trained"). Power-struggle objection addressed. 49% stat reappears.

#### Welcome E5 — `welcome-01-e5-l1` (D10)

**Trigger:** Day 10 after signup.

**Goal:** Pre-K countdown (if seasonal — July/August). Realistic timeline. Read, calculate, decide. "Most L1 families see first signals in 4-8 weeks."

**Cross-Flow Context:** Sarah's calendar anxiety is now compounding. If Pre-K starts in 4 weeks, every email from here forward is read against that clock. Welcome E5 is the **only L1 email where urgency is explicitly calendared**. It must be done with care — Pre-K urgency at L1 is allowed but must be factual, not manufactured. "60 days to Pre-K = enough time to see first signals" is the math; the math must add up.

**Key Details:** 1,186 words, Shape G, 11 sections (Hook, Validation, REFRAME, Validation, Hook, "Layer 1: Signal Creation (Soft Cotton Inner)", "Layer 2: Smart Absorption (Protection Without Blocking)", "Layer 3: Leak Barrier (Confidence)", CTA, "60 days to try. By your judgment.", CTA). Sign-off: "With understanding," (still E3-E5). Primary lever: L1-A Pre-K Readiness.

**Section Notes:** Shape G is the longest shape — this email does double duty: Pre-K timeline + product education (3-layer system). The 3 layers are explained as: Layer 1 soft cotton inner (signal creation), Layer 2 smart absorption (protection without blocking signal), Layer 3 leak barrier (confidence). For Sarah, this is the "show me what's different" moment.

#### Welcome E6 — `welcome-01-e6-l1` (D14)

**Trigger:** Day 14 after signup.

**Goal:** Social proof. L1-specific testimonials. "Almost trained" loop closure stories. Read, identify with another mom, click through.

**Cross-Flow Context:** Day 14 is a critical decision day. Sarah has either bought, is about to buy, or has decided not to. Welcome E6 is the social-proof email — it must show her other L1 moms succeeding at the Pre-K deadline. The "almost trained then regression" story is the L1-anchor — Sarah sees herself in the parent's voice. Three-Family Pattern applies only if Sarah is GF-tagged; for L1-tagged, this is purely L1 voices.

**Key Details:** 1,103 words, Shape G, 6 sections (Hook, Validation, SOCIAL PROOF, Hook, CTA, CTA). Sign-off: "With care," (E6+ progression begins). Primary lever: L4 Peer Trust.

**Section Notes:** Sign-off shifts again: from "With understanding," to "With care," — this signals "we're past the decision arc, we're in it together now." Long sign-off variant. Testimonials are L1-specific (verbal 3-5 year olds, Pre-K deadline scenarios, "perfect week then regression" pattern). Three-Family Pattern only if GF-tagged (not for L1-tagged Sarahs).

#### Welcome E7 — `welcome-01-e7-l1` (D17)

**Trigger:** Day 17 after signup.

**Goal:** Last call. WELCOME10 code expires. Permission-not-to-buy present. "This is your last chance to try with the code + guarantee."

**Cross-Flow Context:** Sarah's decision window is closing. Welcome E7 is the **hardest ask in the welcome series** — code + guarantee + the "last 10%" frame. The subject is the last 10% that won't close with more practice. By D17, Sarah has either bought, is about to, or is in deep hesitation. This email must convert the 30% who need more time without pressuring them.

**Key Details:** 990 words, Shape G, 14 sections (Hook, "He's been 'almost trained' for months.", Validation, "This where almost every parent gets stuck, and it's...", Mechanism, "Why the last 10% won't close with more practice or...", Validation, "Real families who closed their last 10%", Hook, CTA, "60 days. Your judgment.", CTA, Sign-off, "Lena ——"). Sign-off: "With care," (E6+). Primary lever: L3 Guarantee + L5 Normalization.

**Section Notes:** Medium push — NOT a "Last chance!" countdown. The frame is "the last 10%" — the gap between 90% trained and fully trained that doesn't close with prompting. This is the closing argument of the welcome series.

#### Welcome E8 — `welcome-01-e8-l1` (D21)

**Trigger:** Day 21 after signup.

**Goal:** Gentle close. Door stays open. Lena farewell. 20-30% open rate expected.

**Cross-Flow Context:** Welcome E8 is the **series finale**. By D21, ~50-65% of L1 signups who will ever convert have already purchased. E8 is for the remaining 35-50% — the ones who need more time, the ones whose calendar is further out, the ones who bookmarked us and forgot. The job is to keep the door open without pressure. Lena farewell grounds the peer-trust. Migration anchors (L2/L3 story links) appear ONLY if Sarah is GF-tagged; for L1-tagged, the door stays open with a soft "read more when you're ready" framing.

**Key Details:** 995 words, Shape G, 10 sections (Hook, Hook, Validation, RECAP SECTION, SOCIAL PROOF SECTION, Hook, CTA, CALL-TO-ACTION SECTION, CTA, PS LINE). Sign-off: "With care," (E6+). Primary lever: L4 Lena Peer Trust.

**Section Notes:** Recap of the 8-email journey. One last social proof block. Lena's farewell is the emotional close. PS line: a final permission note (*"If today isn't the day, that's okay"*). No urgency, no manufactured deadline. The door stays open — Sarah may return in 30 days, 90 days, or next Pre-K season.

---

### 3.2 CART ABANDONMENT (Flow #2) — 3 Emails

Cart Abandonment fires when Sarah adds the 3+3 bundle (or 1-pair starter) to cart but does NOT complete checkout. The flow is **cross-level** but the strategy-macro notes show lever optimization per level. For Sarah, the 3+3 bundle at $79.99 is the dominant cart; the 1-pair at $34.99 is her trust-builder entry. If she abandons the 1-pair, Cart E2's "Most parents who buy 1 pair come back for 3+3 within a week" is the upsell hook.

**Critical Cart Abandonment rule:** Cart Abandonment SUPPRESSES Welcome E3+ during active cart. If Sarah adds to cart at Hour 1 and abandons, Welcome E3-E8 are paused until the cart resolves (purchase, or 72 hours past abandonment with no recovery).

#### Cart E1 — `cart-02-e1` (1 hour after abandonment)

**Trigger:** Sarah adds product to cart and does NOT check out within 1 hour.

**Goal:** Remind her of the cart. Re-anchor the mechanism. Read, click back to cart.

**Cross-Flow Context:** Cart E1 fires 1 hour after cart abandonment — by Hour 1 of her signup day if she abandoned the cart immediately, or up to 3 days later if she added the cart mid-welcome-series. If she is in Welcome E1's first day, Cart E1 fires alongside Welcome E1. If she is in Welcome E2's day, Cart E1 fires alongside that. The mechanism reminder does NOT repeat what Welcome E2 said — it briefly re-anchors ("You added the 3+3 bundle — here's why parents buy it").

**Key Details:** 766 words, Shape A, 7 sections (Hook, Validation, Mechanism, Validation, Hook, CTA, CTA). Sign-off: SHORT variant. Primary lever: L1 Sensory Gap.

**Section Notes:** Lena voice in the final CTA section: "I saw these were on your mind..." Recognition triggers R2: 3-5 anchors. No discount in E1 — discount is reserved for Cart E3 (and even then optional). Speed over segmentation: do not wait for more data, send the email.

#### Cart E2 — `cart-02-e2` (24 hours after abandonment)

**Trigger:** 24 hours after cart still abandoned (no purchase, no recovery via Cart E1 click).

**Goal:** Social proof + product value. Read, click through, return to cart. 1-pair → 3+3 dynamic upsell.

**Cross-Flow Context:** Cart E2 is the social proof email of the abandonment series. Three-Family Pattern: one testimonial per level path (Sarah/Lisa/Maria — Sarah's voice resonates with her; Lisa and Maria provide cross-level proof the product works for varying support needs). If Sarah abandoned a 1-pair cart, Cart E2 dynamically upsells to 3+3 with the "Most parents who buy 1 pair come back for 3+3 within a week" line.

**Key Details:** Cross-level R1-R6 mandatory. Primary lever: L4 Peer Trust + L2 Pull-Ups Harm.

**Section Notes:** If Sarah has read Welcome E2 by now (the mechanism is already in her head), Cart E2 can be shorter on mechanism and longer on proof. If Welcome E2 has NOT landed yet (she abandoned before D1), Cart E2 carries slightly more mechanism weight.

#### Cart E3 — `cart-02-e3` (72 hours after abandonment)

**Trigger:** 72 hours after cart still abandoned.

**Goal:** 60-day guarantee + permission not to buy. "No rush. If this isn't the day, that's okay." Last attempt to recover the cart.

**Cross-Flow Context:** Cart E3 is the final cart-recovery email. After 72 hours, the cart is considered expired; if Sarah does not purchase here, she will not purchase from this cart. The tone is permission-based: we are giving her the door, not chasing her. The 60-day guarantee is the risk-reversal. If she does not buy after this email, Cart Abandonment ends and Welcome flow resumes (E3+ if she is still in Welcome's window, or the welcome series resumes from where it was paused).

**Key Details:** Primary lever: L3 60-Day Guarantee + L4 Lena. Sign-off closes with Lena's voice: "Whatever you choose — thanks for reading this far."

**Section Notes:** Optional 10% discount — strategy-macro notes say "test without first." If A/B testing shows discount increases recovery, add it; if it cannibalizes full-price purchases, leave it out. For Sarah, the math reframe and guarantee are usually sufficient — discount may feel like desperation.

---

### 3.3 CHECKOUT ABANDONMENT (Flow #3) — 2 Emails

Checkout Abandonment fires when Sarah enters the checkout flow (adds billing/shipping) but does NOT complete the order. Highest-intent abandoners — she was 1 click away. The tone is decision-respect, not chasing.

#### Checkout E1 — `checkout-03-e1` (1 hour after checkout abandonment)

**Trigger:** Sarah enters checkout (fills shipping/payment form) but does NOT complete within 1 hour.

**Goal:** Friendly reminder. "If today isn't right, that's a real answer." Show exact cart contents with pricing. Read, return to checkout.

**Cross-Flow Context:** Checkout E1 is the FIRST decision-respect email — no chasing. If Sarah is in Welcome E3-E8, this fires alongside those emails; the suppression rule for Welcome only applies to Cart Abandonment, NOT Checkout Abandonment (she made it further). The email shows her cart contents with pricing transparency — no surprise at shipping cost (L1 rule: always show shipping clearly).

**Key Details:** Primary lever: L3 Guarantee. Cross-level only — no L1/L2/L3 segmentation in Checkout Abandonment body.

**Section Notes:** "Whatever you choose, thanks for reading this far" energy. Permission-based. Friendly, not corporate.

#### Checkout E2 — `checkout-03-e2` (24 hours after checkout abandonment)

**Trigger:** 24 hours after checkout still abandoned.

**Goal:** Final nudge. 60-day guarantee. Free shipping reminder. "You decide."

**Cross-Flow Context:** Checkout E2 is the LAST checkout email. After 24 hours, checkout is considered expired; Sarah will not return to this checkout session. The tone is decision-respect with the guarantee as the final risk-reversal. Free shipping reminder addresses L1-specific objection (financial hesitation — $79.99 is real money, but shipping transparency helps).

**Key Details:** Primary lever: L3 Guarantee + L1 Mechanism. Cross-level only.

**Section Notes:** NO additional discount — checkout abandoners are highest-intent; discounting would feel desperate and would erode the full-price anchor. "Try it for 60 days. By your judgment."

---

### 3.4 BROWSE ABANDONMENT (Flow #4) — 3 Emails

Browse Abandonment fires when Sarah views a product page (e.g., the ASD PDP) but does NOT add to cart. Lower intent than Cart Abandonment — she was looking, not buying. The tone is educational, not promotional. E1-E2 carry NO direct offer; E3 is the first offer presentation.

#### Browse E1 — `browse-04-e1` (24 hours after browse)

**Trigger:** Sarah viewed a product page (or any PDP) and did NOT add to cart within 24 hours.

**Goal:** Mechanism education hook. Read. Click through to learn more (NOT to buy yet).

**Cross-Flow Context:** Browse E1 fires alongside whatever Welcome email is scheduled for D1 (if Sarah browsed during signup day, Browse E1 lands the next day alongside Welcome E2). The educational hook does NOT compete with Welcome E2 — it complements: Welcome E2 is mechanism-deep, Browse E1 is mechanism-light.

**Key Details:** 634 words, Shape F, 5 sections. Primary lever: L1 Sensory Gap.

**Section Notes:** "You were looking at something that helps kids who can't feel when they need to go." Educational, not promotional. R1-R6 calibration (3-5 anchors, symptom over label, age ranges, etc.).

#### Browse E2 — `browse-04-e2` (3 days after browse)

**Trigger:** 3 days after browse still no cart.

**Goal:** Deep mechanism + product education. "Here's why the 3-layer system works differently." Read, understand the product.

**Cross-Flow Context:** Browse E2 carries the 3-layer product education that Welcome E5 also carries (but only if she is far enough in the welcome series). If Sarah is still in Welcome E1-E2, Browse E2 leads her into the 3-layer system earlier than Welcome E5 would. This is OK — the 3-layer explanation is consistent across emails.

**Key Details:** 869 words, Shape E, 9 sections including Migration Anchors (GF Sub-Groups A-E). Primary lever: L1 + L4.

**Section Notes:** Science-informed, mechanism-led. One testimonial (Three-Family Pattern). GF version includes migration anchors; L1-tagged Sarah sees L1-only content.

#### Browse E3 — `browse-04-e3` (7 days after browse)

**Trigger:** 7 days after browse still no cart.

**Goal:** 60-day guarantee + gentle close. First offer presentation. "60 days for your child's nervous system to start connecting."

**Cross-Flow Context:** Browse E3 is the first time a Browse-Abandonment email carries a direct offer. By 7 days, if Sarah has not added to cart, the educational approach has run its course; the guarantee is the final lever to convert a browser into a buyer.

**Key Details:** 941 words, Shape A, 7 sections. Primary lever: L3 Guarantee.

**Section Notes:** Gentle close. Door stays open. Lena's voice anchors the sign-off.

---

### 3.5 ORDER CONFIRMATION (Flow #5) — 1 Email

#### Order Confirmation — `order-05-e1` (immediate post-purchase)

**Trigger:** Sarah completes checkout. Fires immediately upon order confirmation.

**Goal:** Confirm order. Shipping timeline. 60-day guarantee reminder. Cross-sell 1 accessory (wash bag) — not pushy. Lena sign-off.

**Cross-Flow Context:** This is Sarah's first post-purchase email. The tone shifts from "we're trying to win you" (welcome/cart) to "we're supporting you" (post-purchase). Hope/realism is 50/50 (neutral transactional). Google's 2024 rule requires Order Confirmation to be predominantly transactional — promotional content is limited (the wash bag cross-sell is the exception, not the rule).

**Key Details:** Primary lever: L4 Lena + L3 Guarantee. Sign-off: "You've got this. We've got your back. — Lena."

**Section Notes:** Order summary (specific to what she bought), shipping estimate, 60-day guarantee reminder (post-purchase confidence), ONE accessory cross-sell (wash bag), Lena sign-off.

---

### 3.6 SHIPPING & OUT FOR DELIVERY (Flow #6) — 2 Emails

#### Shipping E1 — `shipping-06` or `ofd-07-e1` (on fulfillment)

**Trigger:** Order fulfilled (shipping label created, package handed to carrier).

**Goal:** Tracking info. Delivery estimate. Teaser for arrival. Lena excitement: "Can't wait for you to try them. — Lena."

**Cross-Flow Context:** This is the bridge between Order Confirmation and arrival. Sarah is now in anticipation mode. The email's job is to build excitement and provide practical info (tracking number, expected delivery window).

**Key Details:** Primary lever: L4 Lena. Sign-off: excitement-building.

**Section Notes:** Prep tips for receiving (wash before first use, no fabric softener — these arrive again in Arrived & Welcome but the seed is planted here).

#### Out for Delivery E2 — `ofd-07-e1` (morning of delivery)

**Trigger:** Package scanned as out for delivery (typically morning of expected delivery day).

**Goal:** "Today's the day!" Prep guidance: wash first, no fabric softener, let child unbox. Manage expectations: "First few wears are about introducing the sensation, not results."

**Cross-Flow Context:** This is Sarah's last pre-arrival touchpoint. The expectation management is critical — if she expects "trained in 3 days," she will be disappointed; if she expects "introducing the sensation," she is set up for the actual journey.

**Key Details:** Primary lever: L4 Lena.

**Section Notes:** Quick-start anticipation. Lena voice. Practical prep list. The "first few wears are about introducing the sensation, not results" line is the key expectation-setter.

---

### 3.7 ARRIVED & WELCOME (Flow #7) — 1 Email

#### Arrived & Welcome — `arrived-08` (delivery confirmed)

**Trigger:** Package delivered (or estimated delivery date if tracking is not granular).

**Goal:** "They're here!" First-wear protocol. Education: "The wetness signal works by letting your child FEEL when they're wet." What-to-expect timeline: Week 1 awareness, Week 2-4 recognition, Week 4-8 active response. Link to PP-Education resources. Gentle upsell if 1-pair buyer (1→3+3, 3+3→5+5 per S01 §3.1).

**Cross-Flow Context:** This is Sarah's first true post-purchase engagement email. From here forward, the cadence shifts to PP-Education (D0, D7, D14, D21), PP-Upsell (D1, D3), Mary S. Story (D3), and onward. The 8-week timeline set here is the promise — every subsequent PP email must reinforce it.

**Key Details:** Primary lever: L1 Mechanism. Tone: excited but grounded.

**Section Notes:** First-wear protocol is practical (no expectations, just observe). The 8-week timeline is the realistic anchor. Gentle upsell if 1-pair buyer (Sarah's dominant cart is 3+3, so this may not apply to her, but if she bought the 1-pair starter at $34.99, this is the rotation-pitch email).

---

### 3.8 PP-DIRECT UPSELL (Flow #8) — 2 Emails

Target: 1-pair buyers only. Sarah's dominant cart is the 3+3 bundle, so this flow typically does NOT fire for her. If she bought the 1-pair ($34.99) as her starter, this fires.

#### PP-Upsell E1 — `upsell-09-e1` (Day 1 post-purchase)

**Trigger:** Day 1 PP for 1-pair buyers.

**Goal:** "Most parents who buy 1 pair come back for 3+3 within a week. Here's why." Bundle comparison table.

**Cross-Flow Context:** Fires alongside PP-Education D0 (which already fired at order confirmation for 1-pair buyers; for 3+3 buyers, PP-Education D0 fires but PP-Upsell does NOT). The bundle comparison is the math reframe ($79.99 ÷ 6 pairs = ~$13.33/pair vs. $34.99 ÷ 1 pair).

**Key Details:** Primary lever: L4 Peer Trust + L2 Pull-Ups Harm. Math reframe OK (L1 allows it; L3 never gets it).

**Section Notes:** Helper tone, not seller. NEVER "You didn't buy enough." Frame as rotation need.

#### PP-Upsell E2 — `upsell-09-e2` (Day 3 post-purchase)

**Trigger:** Day 3 PP for 1-pair buyers.

**Goal:** "Your 1 pair is on its way. Here's how the 3+3 bundle complements it." 10% off add-on (test without first).

**Cross-Flow Context:** Fires alongside Mary S. Story (Day 3 PP). Mary S. carries brand-building; PP-Upsell E2 carries the offer. Note: inconsistency between S01 (D0/D5) and S02 (D1/D3) timing — using S02.

**Key Details:** Primary lever: L4 Peer Trust.

**Section Notes:** 10% off is optional — test without discount first. Frame as helper, not pusher.

---

### 3.9 PP-LEVEL DETECTION (Flow #9) — 1 Email

**Note:** This flow is gf-only — it does NOT fire for L1-tagged Sarahs. Included here for completeness because if Sarah was tagged as GF (general fallback) at signup and her behavior in post-purchase self-identifies her as L1, this email gives her the path to migrate. Since Sarah is level-tagged at signup (she was identified via the symptom-based quiz), this flow is bypassed.

If the L1 detection is uncertain at signup and she remains GF-tagged, PP-Level Detection E1 fires at Day 14 PP with 3-4 story links targeting L1/L2/L3 scenarios. Click-through migrates her to the level-specific track.

---

### 3.10 PP-MARY S. STORY (Flow #10) — 1 Email

#### Mary S. Story — `mary-14-e1` (Day 3 post-purchase)

**Trigger:** Day 3 PP. Cross-level.

**Goal:** Founder story — Mary S. (founder) appears ONCE in the entire customer journey. "I started BrightKidCo because my own child couldn't feel the signal..." Signed as Mary S., not Lena.

**Cross-Flow Context:** Fires alongside PP-Upsell E2 (for 1-pair buyers). This is the ONLY email signed by Mary S. — Lena is the voice for everything else. The founder story is a brand-building moment, NOT an offer. Preceding email (PP-Upsell E2) introduces Mary for 1-pair buyers; for 3+3 buyers (Sarah's dominant path), this email stands alone as the founder moment.

**Key Details:** Primary lever: L4 Lena/Mary Founder Peer Trust. Cross-level R1-R6 calibration. No offer.

**Section Notes:** Mary's story mirrors Lena's — both are moms of kids who couldn't feel the signal. The story is mechanism-anchored, not inspirational. Mary signs off, not Lena.

---

### 3.11 PP-EDUCATION D0-21 (Flow #11) — 4 Emails

The core post-purchase education series. Cross-level with level-aware content blocks. For Sarah (L1), the content leans into Pre-K timeline, micro-signs observation, and realistic 8-week arc.

#### PP-Ed E1 — `pped-11-d0` (Day 0 post-purchase)

**Trigger:** Day 0 PP. Fires alongside Order Confirmation.

**Goal:** "Your first wear." Put on like regular underwear. No expectations. Just observe.

**Cross-Flow Context:** This fires immediately at purchase (or alongside Order Confirmation). The expectation management is the priority: Sarah has just spent $79.99; she needs to know the first day is NOT a test.

**Key Details:** Primary lever: L4 Lena. Tone: managing expectations from minute one.

**Section Notes:** Lena voice. "No results expected today." Observation cues framed gently.

#### PP-Ed E2 — `pped-11-d7` (Day 7 post-purchase)

**Trigger:** Day 7 PP.

**Goal:** "What to look for." Micro-signs: pause, touch, look down, shorter dry periods.

**Cross-Flow Context:** Fires one week after first wear. Sarah has been observing for 7 days and may or may not have seen anything. The email's job is to give her observation vocabulary — what to look for, what counts as progress.

**Key Details:** Primary lever: L1 Mechanism.

**Section Notes:** Education on observation cues. R6 low-bar success metrics: "He paused for 2 seconds before peeing" IS progress. 1-2 parent quotes per email (per cross_cutting_notes).

#### PP-Ed E3 — `pped-11-d14` (Day 14 post-purchase)

**Trigger:** Day 14 PP.

**Goal:** "Week two reality." Progress isn't linear. Regression is normal. Don't stop.

**Cross-Flow Context:** Day 14 is the first regression-risk moment. Sarah has seen some micro-signs; then they vanished; she panics. The email must reframe regression as recalibration, not failure. The 49% stat anchors normalization.

**Key Details:** Primary lever: L5 Normalization.

**Section Notes:** "Some kids react on day 3. Others day 30. Both normal." V20 anchor: "This isn't starting over. His nervous system is recalibrating."

#### PP-Ed E4 — `pped-11-d21` (Day 21 post-purchase)

**Trigger:** Day 21 PP.

**Goal:** "Celebrate the small wins." "He looked at the wet spot!" Share wins, encourage logging. Soft upsell if 1-pair buyer.

**Cross-Flow Context:** Day 21 is the "do I keep going?" moment. Sarah needs to see wins documented by other parents. Soft upsell: if she bought 1-pair, this is the rotation-pitch (but she bought 3+3, so it's a gentle accessory suggestion).

**Key Details:** 602 words, Shape D, 6 sections (Validation, Mechanism, LOW-BAR WINS R6, EXIT OPTIONS / WHAT'S NEXT (Extended Upsell Setup), Sign-off). Primary lever: L4 Peer Trust.

**Section Notes:** Win-logging encouragement. R6 low-bar wins explicitly. Soft upsell block.

---

### 3.12 PP-EXTENDED UPSELL (Flow #12) — 3 Emails

Level-aware flow. For Sarah (L1), the framing is "Complete kit" urgency — the dominant CTA aggression for L1. Body is cross-level with L1-specific framing.

#### PP-Ext Upsell E1 — `ppupsell-12-e1` (Day 28 post-purchase)

**Trigger:** Day 28 PP.

**Goal:** Bundle upgrade. For L1: "Complete kit" urgency (3+3 → 5+5).

**Cross-Flow Context:** Day 28 is the first "month complete" moment. Sarah has been using the 3+3 bundle for a month. If she is seeing rotation wear (laundry cycles, accidents on specific pairs), she may need more. The pitch is "complete kit" — practical helper framing, not sales.

**Key Details:** Primary lever: Varies by level (L1: Pre-K urgency; L2: BCBA complement; L3: very low CTA). L3 never gets 5+5 push.

**Section Notes:** Respect per-level CTA aggression rules. L1 allows medium push; L3 never gets the push.

#### PP-Ext Upsell E2 — `ppupsell-12-e2` (Day 35 post-purchase)

**Trigger:** Day 35 PP.

**Goal:** Accessory cross-sell. Wash Bag, Magic Targets. Cross-level R1-R6.

**Cross-Flow Context:** Day 35 is the accessory moment. The Wash Bag is a practical add-on (laundry organization); Magic Targets is a Pre-K readiness tool (potty training visual aid). For Sarah, Magic Targets ties directly to Pre-K prep.

**Key Details:** Primary lever: L4 Lena. Phase 5 in locked-profile (flagged as outlier; follows strategy-macro day 35).

**Section Notes:** Practical add-ons, not bundles. Lena voice.

#### PP-Ext Upsell E3 — `ppupsell-12-e3` (Day 42 post-purchase)

**Trigger:** Day 42 PP.

**Goal:** Final upsell. Guarantee reinforcement, door open.

**Cross-Flow Context:** Day 42 is the LAST upsell touchpoint in the extended series. After this, Sarah moves into PP-Mid Check-In (D45, D60, D75). The guarantee is the risk-reversal.

**Key Details:** Primary lever: L3 Guarantee.

**Section Notes:** Last touch — leave relationship intact. If Sarah buys nothing more, the door stays open.

---

### 3.13 PP-MID CHECK-IN (Flow #13) — 3 Emails

Supportive peer tone. "Reply to this email" — high-trust invitation. Cross-level with Three-Family Testimonial pattern in E1.

#### PP-Mid E1 — `mid-13-d30` (Day 30 post-purchase)

**Trigger:** Day 30 PP. Three-Family Testimonial (Sarah/Lisa/Maria stories) + reply-to-Lena invitation.

**Goal:** Celebrate any progress, normalize absence of progress. Permission not to buy more pairs yet.

**Cross-Flow Context:** Day 30 fires alongside Replenishment A2 (`repa-15-e2` "Consistency matters") and Review Request E1 (`review-18-e1`). Three high-value emails at Day 30 — send order matters: Mid Check-In E1 first (peer voice), then Replenishment A2 (practical), then Review Request (transactional ask).

**Key Details:** Primary lever: L4 Lena Peer Trust + L1 Mechanism. Section structure: sarah_story, lisa_story, maria_story, common_thread, lena_reply.

**Section Notes:** 3 different moms share their child's story at 30 days. Common thread: each is somewhere different on the curve. Permission not to buy more pairs yet — this is the "no upsell" email.

**Note on inconsistency:** Strategy-macro declares `mid-13-d30` as position "e1-d30" (the first of two e1s in the flow — Ayoub decision C1 resolved this). Day 30 is now formally the 4th email position in this flow.

#### PP-Mid E2 — `mid-13-d45` (Day 45 post-purchase)

**Trigger:** Day 45 PP.

**Goal:** "How's it going?" Reply-to-this-email for support. Celebrate any progress.

**Cross-Flow Context:** Day 45 is the second check-in. Sarah may have emailed back to D30; Lena replies personally (or via automation). This email is a high-trust invitation to continue the dialogue.

**Key Details:** Primary lever: L4 Lena Peer Trust. No offers.

**Section Notes:** Reply-to-this email framing. Lena voice. Permission-toned.

#### PP-Mid E3 — `mid-13-d60` (Day 60 post-purchase)

**Trigger:** Day 60 PP.

**Goal:** "At the 60-day mark." Guarantee reminder (earliest use window).

**Cross-Flow Context:** Day 60 is the GUARANTEE WINDOW. Sarah is now eligible to invoke the 60-day guarantee if the product is not working. The email's job is to remind her of the guarantee (transparency), celebrate progress, and offer the refund path WITHOUT pressure to take it.

**Key Details:** Primary lever: L3 Guarantee.

**Section Notes:** Risk-reversal reminder. "60 days. By your judgment." Door stays open whether or not she refunds.

---

### 3.14 PP-EXTENDED EDUCATION (Flow #14) — 5 L1 Emails (Themes Only)

S02 §4.14 lists themes only — no per-email day timings. 5 themes per level × 4 levels = 20 emails. For Sarah (L1), the 5 themes are:

1. **Pre-K timeline real talk** — `pped-22-e1-l1` (Day 22+)
2. **When other parents ask** — `pped-22-e2-l1` (Day 25+)
3. **Accidents happen** — `pped-22-e3-l1` (Day 30+)
4. **Building consistency** — `pped-22-e4-l1` (Day 45+)
5. **Graduation prep** — `pped-22-e5-l1` (Day 75+)

These are the long-tail education emails that span D22 through D90+ of post-purchase. They are sent on a relaxed cadence (not weekly — perhaps every 2-3 weeks) and serve the L1-specific journey: Pre-K readiness, social context, regression handling, habit formation, and graduation.

#### PP-Ext-Ed E1 — `pped-22-e1-l1` (Day 22+)

**Trigger:** D22+ with L1 tag + has bought.

**Goal:** Pre-K timeline real talk. Realistic expectations for the 8-week Pre-K arc.

**Cross-Flow Context:** Fires shortly after PP-Ed E4 (Day 21). The educational journey continues. For Sarah, the calendar math is critical: if Pre-K is in 6 weeks, the email must give her a realistic week-by-week plan.

**Key Details:** 872 words, Shape A, 7 sections (Hook, Validation, Mechanism, Validation, Hook, CTA, CTA). Sign-off: SHORT variant.

**Section Notes:** Pre-K readiness is the L1-specific theme. Calendar math. 8-week plan.

#### PP-Ext-Ed E2 — `pped-22-e2-l1` (Day 25+)

**Trigger:** D25+ with L1 tag.

**Goal:** When other parents ask. Handling the social context — playdate moms, in-laws, preschool teachers asking "Is he trained yet?"

**Cross-Flow Context:** Sarah is now using the product in the real world. Other parents are noticing (or not). The email gives her scripts for the awkward conversations.

**Key Details:** 758 words, Shape B, 9 sections (Body, "What 'progress' actually looks like at week 4", "Why documentation matters", ...). Sign-off: SHORT variant.

**Section Notes:** Social context scripts. Lena voice. Mechanism-anchored responses to "Why is he still in pull-ups?"

#### PP-Ext-Ed E3 — `pped-22-e3-l1` (Day 30+)

**Trigger:** D30+ with L1 tag.

**Goal:** Accidents happen. Regression handling. "This isn't starting over."

**Cross-Flow Context:** Sarah has been using the product for a month. She has seen micro-signs. Now she's had a bad week. The email reframes the regression without dismissing her frustration.

**Key Details:** 581 words, Shape A, 6 sections. Sign-off: MEDIUM variant.

**Section Notes:** V20 anchor: "This isn't starting over. His nervous system is recalibrating." 49% stat reappears.

#### PP-Ext-Ed E4 — `pped-22-e4-l1` (Day 45+)

**Trigger:** D45+ with L1 tag.

**Goal:** Building consistency. Habit formation beyond the first month.

**Cross-Flow Context:** Sarah is past the initial excitement. The product is part of the routine now. The email reinforces habit and addresses the "is this just a phase?" question.

**Key Details:** 747 words, Shape A, 5 sections. Sign-off: MEDIUM variant.

**Section Notes:** Consistency framing. Lena voice. No urgency.

#### PP-Ext-Ed E5 — `pped-22-e5-l1` (Day 75+)

**Trigger:** D75+ with L1 tag.

**Goal:** Graduation prep. The transition from "in training" to "trained." When to remove the safety net.

**Cross-Flow Context:** Sarah is approaching or past the 8-week timeline. The email gives her a graduation protocol — how to know when her child is ready, how to phase out the training underwear, how to handle setbacks.

**Key Details:** 608 words, Shape A, 5 sections. Sign-off: MEDIUM variant.

**Section Notes:** Graduation is the L1 milestone. Lena voice. No pressure to rush the graduation.

---

### 3.15 PP-SUPPORT AT-RISK (Flow #15) — 4 Emails

Triggered by 3-7-14-21 days no opens POST-PURCHASE. The flow is for Sarah who has gone quiet — she bought but has stopped opening emails. The tone is "concerned peer," not corporate.

**Critical rules:**
- NEVER "We miss you" or guilt-tripping.
- If L3-tagged: extra gentle (not applicable to Sarah).
- No upsells.

#### PP-AtRisk E1 — `atrisk-23-e1` (3 days no open)

**Trigger:** 3 days since last email open post-purchase.

**Goal:** "I noticed you haven't opened recent emails. Just checking in." Lena voice. Concerned peer.

**Cross-Flow Context:** Fires 3 days after Sarah's last open. If she is in PP-Ed D0-D7, this means she hasn't opened D0 OR D7 — concerning. The email does NOT ask "what's wrong" — it asks "how's it going."

**Key Details:** Primary lever: L4 Lena.

**Section Notes:** Concerned peer tone. No diagnostic language. No product pitch.

#### PP-AtRisk E2 — `atrisk-23-e2` (7 days no open)

**Trigger:** 7 days no open.

**Goal:** "Here's how to get the most out of your pairs." Support offering. Practical tips.

**Cross-Flow Context:** By 7 days, Sarah has likely disengaged. The email offers value without asking for engagement. Wash protocols, observation cues, common pitfalls.

**Key Details:** Primary lever: L1 Mechanism.

**Section Notes:** Support offering. Practical. Mechanism-light.

#### PP-AtRisk E3 — `atrisk-23-e3` (14 days no open)

**Trigger:** 14 days no open.

**Goal:** "Your child's nervous system is learning even when it doesn't show." Normalization.

**Cross-Flow Context:** 14 days is the "did she give up?" moment. The email's job is to tell her the work continues even when she can't see it. Interoception is invisible work.

**Key Details:** Primary lever: L5 Normalization.

**Section Notes:** Value reminder. Lena voice. Mechanism-deep.

#### PP-AtRisk E4 — `atrisk-23-e4` (21 days no open)

**Trigger:** 21 days no open.

**Goal:** "Your 60-day guarantee is still active." Risk-reversal reminder.

**Cross-Flow Context:** 21 days means Sarah is approaching the 60-day guarantee window. The email's job is to remind her the door is open — for refund or for re-engagement.

**Key Details:** Primary lever: L3 Guarantee.

**Section Notes:** Guarantee + door open. Final at-risk touchpoint.

---

### 3.16 REPLENISHMENT A/B/C (Flow #16) — 7 Emails (3 Sub-Flows)

Three sub-flows by buyer type:
- **A (1-pair buyers):** D14, D30, D60
- **B (3+3 buyers like Sarah's dominant path):** D75, D90
- **C (5+5 buyers):** D150, D180

**For Sarah (3+3 buyer):** Replenishment A does NOT apply (she bought 3+3, not 1-pair). Replenishment B fires at D75/D90. Replenishment C fires only if she upgrades to 5+5.

**Note on macro_intent anomalies:** repa-15-e1/e2/e3 and repb-16-e1/e2 and repc-17-e1/e2 all have empty macro_intent fields (per locked-profile.json anomalies). Day timings come from strategy-macro.json sub_flows section.

#### Replenishment A (1-pair buyers — not Sarah's typical path)

- **A1 — `repa-15-e1` (Day 14 PP):** Wash cycles reminder. Practical, not sales.
- **A2 — `repa-15-e2` (Day 30 PP):** Consistency matters. Practical reminder.
- **A3 — `repa-15-e3` (Day 60 PP):** Guarantee threshold. Reinforce risk reversal.

#### Replenishment B (3+3 buyers — Sarah's typical path)

- **B1 — `repb-16-e1` (Day 75 PP):** "Time to rotate." Bundle upgrade nudge to 5+5.
- **B2 — `repb-16-e2` (Day 90 PP):** Bundle upgrade to 5+5.

**Trigger for Sarah:** Day 75-90 post-purchase. Her 3+3 bundle has been rotated for 2.5-3 months. Laundry wear and tear, potential loss, or just a need for more pairs as her child becomes more active.

**Goal of B1:** Frame the 5+5 upgrade as a practical helper, not a seller. "Most families who start with 3+3 rotate into 5+5 within 3 months." Lena voice. Primary lever: L4 Lena.

**Goal of B2:** Second nudge for the 5+5 upgrade. Helper tone. Primary lever: L4 Lena.

#### Replenishment C (5+5 buyers — Sarah's path if she upgrades)

- **C1 — `repc-17-e1` (Day 150 PP):** "Long haul support." Loyalty acknowledgment.
- **C2 — `repc-17-e2` (Day 180 PP):** Accessory refresh (Wash Bag, Magic Targets cross-sell).

**For Sarah:** Only fires if she upgraded to 5+5 by D75-D90. Day 150-180 is the half-year mark. Loyalty email (no ask), then accessory cross-sell.

---

### 3.17 REVIEW REQUEST (Flow #17) — 2 Emails

#### Review Request E1 — `review-18-e1` (Day 30 post-purchase)

**Trigger:** Day 30 PP. Cross-level.

**Goal:** "Has BrightKidCo made a difference? Share your experience." Direct review link + 1-2 leading questions.

**Cross-Flow Context:** Fires at Day 30 alongside PP-Mid Check-In E1 and Replenishment A2. Send order: Mid Check-In (peer voice) → Replenishment (practical) → Review Request (transactional ask).

**Key Details:** Primary lever: L4 Lena. Tone: peer request, not transaction.

**Section Notes:** "Other parents need to hear what worked (and didn't) for your child." 1-2 leading questions. Direct review link.

#### Review Request E2 — `review-18-e2` (Day 60 post-purchase)

**Trigger:** Day 60 PP. Follow-up if no review submitted.

**Goal:** "Your experience helps other parents decide." Altruism framing.

**Cross-Flow Context:** Fires at Day 60 alongside PP-Mid Check-In E3 (60-day guarantee reminder). Send order: Review Request (transactional ask) AFTER the guarantee email — the guarantee must be the priority message on Day 60.

**Key Details:** Primary lever: L4 Lena.

**Section Notes:** "Other parents need to hear..." altruism framing. Second and final review ask.

---

### 3.18 WINBACK PATH A (Flow #18) — 3 L1 Emails

Trigger: 90 days no engagement (post-purchaser). L1-specific themes: Pre-K season reminder, mechanism refresher, guarantee + permission.

**For Sarah:** This flow fires only if she purchased AND then went 90 days without opening emails. Less common than Winback B (which is for non-purchasers), but possible — she bought, life got busy, she forgot to use the product or stopped opening emails.

#### Winback A E1 — `winback-a-19-e1-l1` (Day 90+ no engagement)

**Trigger:** 90 days post-purchase with no recent opens.

**Goal:** Pre-K season reminder. "It's that time of year again." If Pre-K season is approaching, this is the calendar re-anchor.

**Cross-Flow Context:** Fires only if Sarah is still in our system but disengaged. The Pre-K calendar is the L1-specific re-entry lever. If it's July and Pre-K starts in September, the calendar math re-opens the decision.

**Key Details:** 899 words, Shape G, 10 sections. Sign-off: SHORT variant.

**Section Notes:** L1-A Pre-K lever. Calendar math. Lena voice. No hard ask.

#### Winback A E2 — `winback-a-19-e2-l1` (Day 90+ continued no engagement)

**Trigger:** Continuation of Winback A sequence.

**Goal:** Mechanism refresher. Re-anchor why the product works for kids who can't feel the signal.

**Cross-Flow Context:** E2 is the educational re-engagement — give Sarah a reason to remember *why* she bought this.

**Key Details:** 490 words, Shape C, 5 sections. Sign-off: LONG variant.

**Section Notes:** Mechanism-led. 49% stat. Lena voice.

#### Winback A E3 — `winback-a-19-e3-l1` (Day 90+ continued no engagement)

**Trigger:** Final Winback A email.

**Goal:** Guarantee + permission. "Your 60-day guarantee is still active." Permission not to come back if she's moved on.

**Cross-Flow Context:** E3 closes Winback A. If Sarah does not re-engage, she moves to Winback B (alt path) or Sunset.

**Key Details:** 1,422 words, Shape A, 11 sections. Sign-off: LONG variant.

**Section Notes:** Guarantee reminder. Door open. Lena voice. Permission not to return.

---

### 3.19 WINBACK PATH B (Flow #19) — 3 L1 Emails

Alternative winback path. Fires for non-purchasers or as continuation of Winback A. **Note:** winback-b-24-e1-l1/e2-l1/e3-l1 have empty macro_intent fields (per locked-profile.json anomalies). Themes must be inferred from flow structure and L1 calibration.

#### Winback B E1 — `winback-b-24-e1-l1` (Day 90+ no engagement)

**Trigger:** 90 days no engagement (non-purchaser or continuation from Winback A).

**Goal:** Re-introduction. Lena voice. Mechanism reminder.

**Cross-Flow Context:** If Winback A did not convert, Winback B is the alt-path re-engagement. For Sarah as a non-purchaser (Welcome flow ended without a buy), this is her re-entry point 90 days later — possibly next Pre-K season.

**Key Details:** 631 words, Shape A, 5 sections. Sign-off: SHORT variant.

**Section Notes:** Lena voice. Mechanism-light. No hard ask.

#### Winback B E2 — `winback-b-24-e2-l1` (Day 90+ continued)

**Trigger:** Continuation.

**Goal:** Deeper mechanism. Testimonial.

**Key Details:** 672 words, Shape C, 6 sections. Sign-off: LONG variant.

#### Winback B E3 — `winback-b-24-e3-l1` (Day 90+ continued)

**Trigger:** Final Winback B email.

**Goal:** Guarantee + final farewell.

**Cross-Flow Context:** If Winback B E3 does not convert, Sarah moves to Sunset.

**Key Details:** 1,192 words, Shape C, 11 sections. Sign-off: LONG variant.

---

### 3.20 SUNSET (Flow #22) — 2 Emails

#### Sunset E1 — `sunset-25-e1`

**Trigger:** Continued no engagement after Winback A/B.

**Goal:** Re-permission check. "Do you still want to hear from us?" One-click preference update.

**Cross-Flow Context:** This is the LAST engagement attempt before suppression. The tone is respect: "If you'd rather not hear from us, that's okay. One click and we'll stop."

**Key Details:** Phase 3. Primary lever: L4 Lena.

**Section Notes:** One-click preference update. No hard ask. Lena voice.

#### Sunset E2 — `sunset-25-e2`

**Trigger:** Continued no engagement after Sunset E1.

**Goal:** Final farewell. No response = suppressed for 6-12 months.

**Cross-Flow Context:** If Sarah does not respond to Sunset E1, Sunset E2 is sent as the final goodbye. If she does not respond to E2, she is suppressed from all marketing email for 6-12 months. She may re-enter via popup or transaction event.

**Key Details:** Phase 1. Primary lever: L4 Lena.

**Section Notes:** Final farewell. Door stays open for re-entry. Lena voice. No guilt, no chase.

---

## 4. CLOSING NOTES — EDGE CASES & SUPPRESSION RULES

### 4.1 Flow Suppression Hierarchy

Not all emails fire for every customer. The suppression hierarchy is:

1. **Cart Abandonment SUPPRESSES Welcome E3+** during active cart. If Sarah adds to cart at Hour 1, Welcome E3-E8 are paused until cart resolves (purchase, or 72 hours past abandonment with no recovery).
2. **Checkout Abandonment does NOT suppress Welcome.** Sarah made it further than cart — she is highest-intent.
3. **Browse Abandonment does NOT suppress Welcome or Cart.** It runs in parallel.
4. **Order Confirmation fires at purchase regardless** of where she is in Welcome/Cart/Checkout.
5. **PP-Education D0 fires at purchase** alongside Order Confirmation. Same trigger.
6. **PP-Upsell fires for 1-pair buyers only.** If Sarah bought 3+3 (her dominant path), PP-Upsell does NOT fire.
7. **Replenishment A/B/C fires based on buyer type.** A=1-pair, B=3+3, C=5+5.
8. **Winback A/B fires 90 days post-purchase with no engagement.** Sarah must have bought AND gone quiet.
9. **Sunset fires after Winback A/B without re-engagement.**

### 4.2 Cross-Level Email Behavior for L1-Tagged Sarah

For cross-level emails (Cart, Checkout, Browse, Order, Shipping, Arrived, PP-Ed, PP-Upsell, PP-Mid Check-In, PP-At-Risk, Replenishment, Review, Sunset), the body is cross-level R1-R6 calibrated with **level-aware content blocks** (per `strategy-macro.json`). This means:

- **Mechanism blocks** lean toward L1 Sensory Gap (not L2 BCBA-respect, not L3 dignity-first).
- **Testimonials** include at least one L1 voice (verbal 3-5 year old, Pre-K scenario).
- **49% SPARK stat** appears in 70%+ of L1-tagged Sarah's emails.
- **Pre-K urgency** is allowed (L1 only across all levels).
- **Hope/realism ratios** follow L1 trajectory (70/30 pre-purchase → 65/35 PP-early → 55/45 PP-mid → 50/50 lifecycle).
- **Sign-off progression:** E1-E2 "Talk soon," → E3-E5 "With understanding," → E6+ "With care,"

### 4.3 Migration Path (GF to L1)

If Sarah is GF-tagged at signup (uncertain L1 detection), the PP-Level Detection email at Day 14 (`pp_level_detection-e1`) gives her 3-4 story links targeting L1/L2/L3 scenarios. Click-through on an L1-flavored story migrates her to the L1 track. 40-50% click migration rate expected (per `strategy-macro.json` PP-Level Detection cross_cutting_notes). Once migrated, all subsequent emails follow the L1 sequence.

### 4.4 Calendar Sensitivity — Pre-K Season

Pre-K urgency is allowed at L1 only. The calendar window is March (acceptance letter arrives) through September 1 (school starts). For Sarah who signs up in July-August (peak L1 signup time), every email in the welcome and PP-Early phases carries Pre-K urgency. For Sarah who signs up in November (off-season), Pre-K urgency is muted or replaced with general realistic timelines.

### 4.5 Geographic Sensitivity — UK/AU "Nappies"

For Sarah in UK/AU (15% + 15% = 30% of L1 population), copy must use "nappies" instead of "diapers" (per `journey-l1-01-avatar.md` Demographics). All other L1 calibration rules apply identically.

### 4.6 Partner Conflict Edge Case

Sarah's L1 partner dynamic is "disagreement" (not L2 sabotage, not L3 abandonment). NEVER imply she needs her partner's permission. The L1 voice rules: *"This is your decision."* If a welcome email mentions a partner, the framing is permissive ("if your partner has questions, here's the FAQ") not requiring.

### 4.7 Self-Blame Edge Case

Sarah's self-blame level is 80% peak. Every L1 email must avoid echo-triggers: "Just try harder," "Be more consistent," "Your child will be normal." The failure acknowledgment in Welcome E4 ("You didn't fail. You solved the wrong problem.") is the primary defense against self-blame spirals.

### 4.8 Forbidden Phrase Edge Cases (L1-Specific)

Beyond brand-wide forbidden phrases (Easy, Simple, Quick, Guaranteed, Miracle, Cure, Fix, Solve), the L1-specific forbidden list includes: "Severe autism," "Non-verbal kids need...," "Years of attempts," "BCBA protocol," "Adult diapers," "Forever in pull-ups," "Wait until he's ready," "Just like other kids," "Level 1/2/3 labels." Even ONE forbidden phrase in any email can take Sarah out of the funnel permanently.

### 4.9 Visual Edge Cases (L1-Specific)

Sarah does NOT recognize herself in: non-verbal kid imagery, BCBA imagery, sensory-meltdown imagery, "Big Kid Underwear" infantilized graphics, NT happy family stock photos, crying children / frustrated parent faces, pull-ups as villain imagery. She DOES recognize herself in: verbal 3-5 year olds, Pre-K imagery (backpacks, school buses), active moments (running toward something), product in real-home context, diverse real kids, soft natural lighting.

### 4.10 Subject Line Edge Cases (L1-Specific Forbidden)

"Last chance," "Miracle solution," "Severe autism," "Years of struggles," "Time is running out," "Save your kid" — all forbidden. Pre-K timing OK ("Six weeks until Pre-K starts"). Subject lines should be 40-50 chars, mirror/mechanism/observation hooks, no exclamation.

### 4.11 When to Break the Rules

The only time to break an L1 rule is when Sarah's individual behavior signals a different need:
- **If Sarah clicked "I need to talk to a BCBA" or searched for BCBA content:** she may be L2-migrating; PP-Level Detection E1 gives her the path.
- **If Sarah has a Medicaid-tagged profile and the 1-pair is too expensive:** she may be L3-migrating; the math reframe is forbidden at L3, so the path forward is the 1-pair starter offer.
- **If Sarah signs up in November (off-Season):** mute Pre-K urgency, lean on general timelines.
- **If Sarah is in UK/AU:** swap "diapers" → "nappies" everywhere.

### 4.12 The Single Most Important Takeaway

Every email in Sarah's journey — from Welcome E1 to Sunset E2 — must orbit the same sentence:

> **"It's not behavior. It's signal-timing. And there's a third option between pull-ups and underwear that lets him feel what his body is trying to tell him."**

Not literally repeat it. Be derivable from it. The hook is the mechanism. The CTA is the third option. The proof is Lena's voice. The timeline is realistic. The guarantee is 60 days. If a draft email does not contain at least one of: mechanism specificity, Lena voice, 49% SPARK stat, realistic timeline, or 60-day guarantee — it is not an L1 email. Rewrite it.

---

## 5. APPENDIX — EMAIL COUNT SUMMARY

| Phase | Flow | L1 Emails | Total Possible Emails |
|---|---|---|---|
| Phase 1 | Welcome | 8 | 8 |
| Phase 1 | Cart Abandonment | (cross-level, fires if cart) | 3 |
| Phase 1 | Checkout Abandonment | (cross-level, fires if checkout) | 2 |
| Phase 1 | Browse Abandonment | (cross-level, fires if browse) | 3 |
| Phase 2 | Order Confirmation | (cross-level) | 1 |
| Phase 2 | Shipping & Out for Delivery | (cross-level) | 2 |
| Phase 2 | Arrived & Welcome | (cross-level) | 1 |
| Phase 3 | PP-Direct Upsell | (1-pair buyers only) | 2 |
| Phase 3 | PP-Mary S. Story | (cross-level) | 1 |
| Phase 3 | PP-Education D0-21 | (cross-level) | 4 |
| Phase 3 | PP-Extended Upsell | (level-aware) | 3 |
| Phase 3 | PP-Mid Check-In | (cross-level) | 3 |
| Phase 3 | PP-Extended Education | 5 | 5 |
| Phase 3 | PP-Support At-Risk | (conditional: 3-7-14-21 days no open) | 4 |
| Phase 4 | Replenishment A | (1-pair buyers only) | 3 |
| Phase 4 | Replenishment B | (3+3 buyers — Sarah's path) | 2 |
| Phase 4 | Replenishment C | (5+5 buyers — upgrade path) | 2 |
| Phase 3 | Review Request | (cross-level) | 2 |
| Phase 5 | Winback Path A | 3 | 3 |
| Phase 5 | Winback Path B | 3 | 3 |
| Phase 5 | Sunset | (cross-level) | 2 |
| **TOTAL L1-SPECIFIC EMAILS** | | **21** | |
| **TOTAL EMAILS SARAH CAN RECEIVE** | | | **~60 emails** |

Not all fire for every customer. The realistic email count for a fully-engaged Sarah (3+3 buyer, Pre-K season signup, complete journey) is approximately **35-45 emails** across 6 months: 8 Welcome + 3 PP-Ed + 5 PP-Ext-Ed + 3 PP-Mid + 2 Review + 1 Mary S. + 5 Lifecycle (Shipping/Arrived/Order/Mid/Replenishment B) + 2 Winback A/B + 2 Sunset, with conditional Cart/Checkout/Browse/AtRisk emails adding 0-15 more depending on behavior.

---

*End of Level 1 (Sarah) Email Sequence Document — BrightKidCo Customer Journey Reference*
*Generated: 2026-06-28*
*Sources: `journey-l1-01-avatar.md`, `locked-profile.json`, `strategy-macro.json`*
*Companion documents: `journey-l1-03-system.md` (shapes), `journey-l1-04-rules.md` (forbidden), `journey-l1-05-checklist.md` (build)*