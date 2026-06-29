# FLOW BEHAVIOR — CONVERSION GATES, DEAD-ENDS, CROSS-FLOW CONTINUITY (LEVEL 2: LISA)

> **Reference document for Stage 1 subagents.** Same structure as the L1 flow behavior map, calibrated to L2. Every email Lisa can possibly receive is mapped against (1) how the L2 conversion gates apply — mechanism specificity, BCBA acknowledgment, 60-day guarantee, permission-not-to-buy — and the additional L2 non-negotiables (3+ failed methods, 8–12 week timeline); (2) what happens if she ignores; (3) cross-flow continuity against the other 45+ L2 email positions. Grounded in `journey-l2-01-avatar.md`, `journey-l2-02-sequence.md`, `journey-l2-03-emotional-trust.md`, and `GIULIANO-DEMANDS.md` §2.5, §17, §18, §23. Internal version: 2026-06-28.

---

## 0. HOW TO USE THIS DOCUMENT

L1 flow behavior was an inventory of where she drops. L2 flow behavior is an inventory of where she **stays, leans in, or walks** — and why. The six L2 conversion gates do not change across the sequence; what changes is **which gate dominates which email** and **what the dead-end consequence is** if she ignores. Cross-flow continuity is the third dimension: no L2 email lives alone. Every send either reinforces the L2 unlock sentence, the L2 trust meter (38 → 76), or both.

### 0.1 The six L2 conversion gates (Demand §23 — non-negotiable)

| # | Gate | What it tests | Demand anchor |
|---|------|---------------|---------------|
| **G1** | Symptom recognition (3+ failed methods) | Have you read what I've actually tried? | §23, element 1 |
| **G2** | Mechanism specificity (interoception) | Do you have a *why*, not just a *what*? | §23, element 2 |
| **G3** | BCBA/OT acknowledgment (complement) | Do you respect my professional team? | §23, element 3; §8.5 |
| **G4** | Realistic timelines (8–12 weeks, some longer) | Are you going to lie to me? | §23, element 4; §8.6 (no "Quick") |
| **G5** | 60-day guarantee (risk removal) | Can I leave if you're wrong? | §23, element 5 |
| **G6** | Permission-not-to-buy (no pressure) | Are you asking me to commit, or to choose? | §23, element 6 |

Any one missing in any email with a CTA: **DO NOT SEND** (Demand §23). Welcome E1 and E5 are partial-exemption (intro/observation; mechanism-only). Transactional flows (Order, Shipping, Arrived) are exempted from the full formula.

### 0.2 What this document is not

It is not a copy doc. It does not re-paste subject lines or CTAs; those are in `journey-l2-02-sequence.md`. It is not a trust-meter recap; that lives in `journey-l2-03-emotional-trust.md`. It **is** the engineering spec for what each email is *for* in the system, what happens to Lisa's journey if she ignores it, and how each email talks to the rest of the sequence.

### 0.3 Cross-flow continuity rules (Demand §2.5)

- **Cart Abandonment** suppresses Welcome E3+ during active cart (E1–E2 already delivered stay delivered).
- **Winback (A or B)** pauses ALL nurture flows while active — Welcome, PP-Education, Replenishment.
- **Sunset** suppresses ALL flows unconditionally; tag `unengaged = True`, Master Suppression List.
- **PP-Level Detection** is GF-only (L2 is already level-tagged, never receives this flow).
- **Max 1 flow email per subscriber per day** — no double-saturate.
- **Winback A (post-buyer 90d)** and **Winback B (never-bought 60d)** are mutually exclusive — purchase event decides.
- **PP-Support At-Risk** fires only on 3–7 day no-open post-purchase, conditional.

### 0.4 Deliverability envelope (Demand §17)

Every email below must also pass the deliverability layer (L2 is the LEAST forgiving segment — high-open segment, but high-spam-complaint risk if forbidden phrases slip in):
- From-address: "Lena from BrightKidCo" `<support@send.brightkidco.com>` through Week 6, then `hello@`/`orders@` may be added.
- Max 1 promo link, no countdown timers, no affiliate links, no hard-sell language.
- Reply prompt in EVERY email (replies are the #1 deliverability signal — L2 is the most likely segment to reply because peer-voice lands).
- 60:40 text:image ratio; mint/cream/white L2 palette; muted green CTA, 48px min height, NOT full-width.
- Spam complaint threshold <0.01% (warning) / 0.03% (critical). One "Easy potty training in 3 days" email at L2 can spike this; the gate is the gate.

### 0.5 Phase 1 scope rules (Demand §18) that govern L2 sequence behavior

- Tag-based routing only — no behavioral scoring in Phase 1.
- L2 gets L2-specific copy in Welcome Flow; cross-level flows use level-aware content blocks but the L2-specific test is the 6-element pre-flight.
- Emotional dimensions (deadline/social/overwhelmed) do NOT govern in Phase 1 — the level tag does.
- PP-Level Detection is GF-only — L2 is already tagged at signup via pop-up button 2.

---

## 1. PHASE 1 — PRE-PURCHASE (SIGNUP → DAY ~21)

Lisa enters at **trust = 38/100**, **hope/realism = 40/60**, in **defensive-evaluation mode**. The Welcome Flow's job is the **conversion shift** to scientific-evaluator by E8, moving trust to ~48. Browse/Cart/Checkout Abandonment fires on behavioral triggers, not calendar. Every Phase 1 email must land at least one of the six gates; the densest is Welcome E2 (all six in one read), the lightest is E1 (intro, no full formula required).

### 1.1 WELCOME E1 — Day 0 (immediate)

**CONVERSION GATES.** E1 is partial-exemption. It carries G6 (permission-not-to-buy) implicitly in the subject line ("when you're ready," "no rush, the code will be here") and G1 (symptom recognition) lightly via the mirror line ("You've tried BCBA, OT, social stories, sticker charts, every potty book, every consultant… and nothing's clicking"). It does NOT yet carry G2 (mechanism), G3 (BCBA acknowledgment), G4 (timeline), or G5 (guarantee). Pre-flight exempt per Demand §23, but the voice and BCBA-respect must be unmistakably L2 — Lena's MEDIUM sign-off (mother of two autistic sons, one 6, one trained at almost 8) is the L2 peer signal that gates the rest of the sequence.

**DEAD-END if ignored.** No purchase within the day; Welcome E2 still fires per cadence. E1 is the immune-system test — if Lisa's first read is "another marketing email," she will not open E2, and she will not open the cart abandonment emails if she browses later. E1 is the lowest-stakes but highest-leverage filter of the L2 sequence: it determines whether she remains in the funnel at all. Trust delta if opened: +1 (38 → 39). If she deletes E1 unread, no delta; E2 still fires but her delete-key reflex is now stronger.

**CROSS-FLOW CONTINUITY.** E1 sets the Lena MEDIUM sign-off that runs through E2 (still "Talk soon," per §11.7). E1's "WELCOME10 code" is the same discount that the pop-up showed in step 2 — so E1 does not introduce a new offer; it confirms a known one. E1's "Mom of two autistic sons" framing pre-loads Lena-as-peer for Welcome E8 (LONG sign-off, deepest permission) and for the Mary S. Story in Phase 2. E1's observation (not pitch) is the structural opposite of the L1 Welcome E1 (cheerleader with Pre-K deadline) — the L2/L1 divergence is visible from the first send.

### 1.2 WELCOME E2 — Day 1 — **CRITICAL EMAIL**

**CONVERSION GATES.** All six, in one read — the densest trust-conversion moment in the L2 sequence. G1: 3+ failed methods named (sticker charts, Oh Crap, every-30-min timers, "feel the wet" underwear, naked weekends, social stories). G2: interoception explained ("the interoceptive system senses internal body states. For autistic children, this signal often arrives late, weak, or not at all"). G3: BCBA unlock sentence ("Your BCBA has been doing the hard work for years. Body-signal learning is the missing layer their protocol can't address"). G4: timeline ("8–12 weeks for most kids. Some longer"). G5: 60-day guarantee surfaced. G6: permission ("If this isn't the day, that's okay"). Pre-flight unchecked = DO NOT SEND.

**DEAD-END if ignored.** Trust holds at 38; she does not enter scientific-evaluator mode. The conversion shift fails. She will not buy from a brand she has not yet read carefully. The Cart/Checkout/Browse abandonment flows (if she later browses) will have no mechanism context to reinforce; the L2 unlock sentence will not have fired, and any later email that depends on it (Welcome E4, E7; PP-Mary S. Story; FAQ E5) will land on unprepared ground. E2 is the most expensive email to miss — every downstream email is calibrated to her having internalized the mechanism reframe. If E2 fails, the entire Phase 1 conversion rate collapses.

**CROSS-FLOW CONTINUITY.** E2's Mahler citation ("interoception researcher," NOT "our partner") is the same citation that runs through Welcome E5 (science deep-dive), PP-Extended Education L2-1 (Mahler 8 senses), and FAQ E2 (late-trainer reframe). The Wiggins 2022 / SPARK 49% stat in its mint-bordered callout box is reused in Welcome E5, PP-Education D0-21 E3, and the FAQ library. E2's L2 unlock sentence (full form) re-airs in Welcome E4 (paired with the prompt-dependency loop) and in FAQ E5 (purest form) and PP-Ext Edu L2-2 (practical extension). E2's mechanism click is what enables Welcome E6's testimonials to land — the testimonials only matter if the reader has the "oh, that's why" frame already.


### 1.9 BROWSE E1 — 24h after browse

**CONVERSION GATES.** Mechanism-dominant (G2). G1: 3 recognition anchors — "trained at school not at home," "knows the concept but can't translate," "BCBA protocol that's working but not transferring home." G2: dominant — "You were looking at something that helps kids who can't feel when they need to go." G3: implied (BCBA protocol referenced). G4: implied. G5: not surfaced. G6: "Read how body-signal learning works" is the soft CTA. Pre-flight: lighter, mechanism-dominant.

**DEAD-END if ignored.** She viewed a product page but did not add to cart. This is a learning moment, not a sales moment. If E1 is missed, the brand has no second chance to capture the browse intent for 7 days (until Browse E3), and she may have already left the consideration window. Browse E1's job is to redirect from product to science, not to chase. Trust delta: +1 (48 → 49) if opened; 0 if missed (cart still abandoned, no penalty).

**CROSS-FLOW CONTINUITY.** Browse E1's three recognition anchors overlap with Welcome E2's symptom inventory (3+ failed methods) but at the browse level, not the welcome level. Browse E1 is the **first email in the abandonment flow** — it does not require the welcome flow to have been opened. If Lisa browsed but never signed up (e.g., pop-up not yet shown), Browse E1 still fires (if the email capture was completed via the pop-up). Browse E1's mechanism-deep CTA points to the science page that Welcome E5 (mechanism deep-dive) and PP-Ext Edu L2-1 also reference. The Browse flow does not suppress Welcome (only Cart does per Demand §2.5).

### 1.10 BROWSE E2 — 3 days

**CONVERSION GATES.** G1 (testimonial), G2 (mechanism) dominant. G1: one L2 testimonial (Three-Family Pattern inclusion if room). G2: "Here's why the 3-layer system works differently"; 49% Wiggins stat in callout box. G3: "Your BCBA's protocol addresses the behavior layer; this addresses the sensory layer." G4: implied (E2-level timeline). G5: implicit. G6: "Read the engineering behind the layers" — soft, no commercial pressure. Pre-flight lighter.

**DEAD-END if ignored.** Second browse touchpoint. If Browse E1 mechanism-dominant was missed, E2 doubles down on mechanism + product education. If both E1 and E2 missed, Browse E3 (guarantee) is the last attempt; if E3 also missed, the browse abandoner drops to Winback B at 60d. Trust delta: +1 (49 → 50) if opened.

**CROSS-FLOW CONTINUITY.** Browse E2's "3-layer system" framing is the same engineering specification referenced in Welcome E2 (interoception layer) and Welcome E7 (wetness-sensing layer operational detail). Browse E2's L2 testimonial is the same BCBA-context testimonial pattern that runs through Welcome E6 and PP-Mid Check-In E1. The Three-Family Pattern (Sarah/Lisa/Maria) is the L2 testimonial template, and it appears in Browse E2 (if room), Welcome E6, PP-Mid Check-In E1, and PP-Ext Edu L2-1. Cross-level awareness: Browse E2 is cross-level with L2 framing — the body of the email works for any level, but the stat boxes and BCBA language are L2-calibrated.

### 1.11 BROWSE E3 — 7 days

**CONVERSION GATES.** G5 (guarantee) and G6 (permission) dominant. G1: implied. G2: implied (mechanism carries from E1/E2). G3: implied. G4: "60 days for your child's nervous system to start connecting the dots" — a softer timeline. G5: dominant — "60 days. By your judgment." G6: dominant — "If today isn't the day, that's a real answer." Pre-flight: lighter (this is a door-stays-open moment at the browse level).

**DEAD-END if ignored.** End of Browse Abandonment. If missed, the browse abandoner drops to Winback B at 60d. Browse E3 is the **last pre-purchase touchpoint** for a browsed-but-not-purchased L2; it must not push purchase, only confirm the door is open. Trust delta: +1 (50 → 51) if opened; if missed, the next contact is Winback B L2-1 at Day 60.

**CROSS-FLOW CONTINUITY.** Browse E3's 60-day language is the same "60 days. By your judgment" from Welcome E3, Cart E3, Checkout E2, FAQ E6, and Winback B L2-3. The browse-3 → cart-3 → checkout-2 → winback-B L2-3 chain is the **never-bought L2 thread** running in parallel to the welcome-bought thread. Browse E3's "if today isn't the day, that's a real answer" is the L2 permission frame at the browse level — it does not commit, but it does not close.

### 1.12 CART E1 — 1 hour after cart-add

**CONVERSION GATES.** G1 (recognition) and G2 (mechanism reminder) dominant. G1: R2 anchors — "school success that doesn't transfer home," "the 45-minute sit," "the wet spot he looked at." G2: "You added the 3+3 bundle. Here's why L2 families buy it — it's the rotation that lets the body-signal layer build consistently." G3: implied. G4: implied. G5: not surfaced (E1 is recognition, not guarantee). G6: "Return to your cart when you're ready" — soft return, not aggressive. Pre-flight: lighter.

**DEAD-END if ignored.** Cart abandoner is highest-intent pre-purchase. If Cart E1 is missed, Cart E2 (24h, social proof) still fires, but the mechanism memory is not refreshed; the L2 unlock sentence is not re-stated. **Suppression rule: Cart Abandonment SUPPRESSES Welcome E3+ during active cart** (per Demand §2.5). E1 and E2 (if already sent) remain delivered. This is the only suppression that pauses Welcome Flow mid-stream. Trust delta: +1 (51 → 52) if opened; if missed, Cart E2 still fires.

**CROSS-FLOW CONTINUITY.** Cart E1's R2 anchors are the same 3-anchor pattern used in Welcome E2 and Browse E1 — recognition anchors are the L2 fingerprint vocabulary. Cart E1's "rotation that lets the body-signal layer build consistently" frames the 3+3 bundle as a **mechanism-necessary purchase**, not an upsell — this framing is reused in PP-Direct Upsell E1 and PP-Ext Upsell E1. Cart E1's Lena voice ("I saw these were on your mind…") is the L2 peer-voice variant — it does not celebrate the cart-add, it acknowledges the hesitation.

### 1.13 CART E2 — 24h

**CONVERSION GATES.** G1 (social proof), G3 (BCBA compatibility), G6 (permission). G1: Three-Family Pattern testimonial (L2 slot names the BCBA). G2: implied. G3: implicit via BCBA-named testimonial. G4: implied. G5: implicit. G6: "Most parents who start with 1 pair add the 3+3 within a week" — the L2-specific rotation rationale. Pre-flight: lighter (social proof + product value).

**DEAD-END if ignored.** If missed, Cart E3 (72h, guarantee + permission) is the last cart touchpoint. Cart E2 is the social proof moment; missing it means the bundle upgrade pitch lands without peer validation. Trust delta: +1 (52 → 53) if opened.

**CROSS-FLOW CONTINUITY.** Cart E2's Three-Family Pattern is the same template used in Welcome E6, PP-Mid Check-In E1, and PP-Ext Edu L2-1. The "1-pair → 3+3 upgrade" framing is the same one used in PP-Direct Upsell E1 (Day 1 post-purchase) and PP-Ext Upsell E1 (Day 28). The math reframe ("most parents who start with 1 pair add the 3+3 within a week") is **allowed for L2** (per Demand §8.5: gentle for L2; **forbidden for L3**). Cart E2 is the L2 line where math reframe lives; L3's PP-Direct Upsell uses different language.

### 1.14 CART E3 — 72h

**CONVERSION GATES.** G5 (guarantee) and G6 (permission) dominant. G1: implied. G2: implied. G3: implied. G4: "60 days. By your judgment." G5: dominant — "60 days. By your judgment." G6: dominant — "No rush. If this isn't the day, that's okay. Whatever you choose — thanks for reading this far." Pre-flight: lighter (this is the door-stays-open moment at the cart level). Optional 10% off (A/B test without first per `strategy-macro.json`).

**DEAD-END if ignored.** Last cart email. If missed, cart expires; subscriber drops to Winback B L2-1 at Day 60. Cart E3 is the **decision-point email** for the cart abandoner. Trust delta: +1 if converts (53 → 54); 0 if not (holds at 53). The "L2 paradox in full effect for cart abandoners" — permission to leave is the conversion lever.

**CROSS-FLOW CONTINUITY.** Cart E3's 60-day + permission language is identical to Welcome E3 and Browse E3 — these three emails form the **risk-reversal triad** for the L2 pre-purchase sequence. Cart E3's "whatever you choose" is the L2 LONG sign-off variant in lighter form; the full LONG sign-off ("If this isn't the day, that's okay. The product will be here next month. So will I") is reserved for Welcome E8, Winback A L2-3, Winback B L2-3, and Sunset E2 — the four **door-closing moments** in the L2 sequence.

### 1.15 CHECKOUT E1 — 1 hour

**CONVERSION GATES.** G5 (guarantee) and G6 (permission) dominant. G1: implied (her cart contents imply her situation). G2: implied. G3: implied. G4: implied. G5: 60-day guarantee surfaced. G6: "If today isn't right, that's a real answer." Pre-flight: lighter.

**DEAD-END if ignored.** Highest-intent abandoner. If Checkout E1 is missed, Checkout E2 (24h) still fires, but the permission frame is delayed. Trust delta: +1 if converts; 0 if not (holds at 53).

**CROSS-FLOW CONTINUITY.** Checkout E1 is the **last-chance permission email** for the highest-intent pre-purchase abandoner. It does NOT add a discount (per `strategy-macro.json`). Its Lena voice and the cart contents visibility (pricing shown explicitly) are the trust-builders. Checkout E1 → Checkout E2 → Winback B (if no conversion) is the **checkout abandoner path**; Checkout E1 is the softest of the three.

### 1.16 CHECKOUT E2 — 24h

**CONVERSION GATES.** G5 (guarantee) and G6 (permission) dominant. G1: implied. G2: implied. G3: implied. G4: implied. G5: "Try it for 60 days. By your judgment." G6: "You decide." Free shipping reminder (operational support, not sales pressure). Pre-flight: lighter.

**DEAD-END if ignored.** Last checkout touchpoint. If missed, subscriber drops to Winback B L2-1 at Day 60. Trust delta: 0 or +1 (holds at 53–54). If she converts from E2, the sequence jumps to Phase 2 (Order Confirmation E1).

**CROSS-FLOW CONTINUITY.** Checkout E2's "Try it for 60 days. By your judgment" is the same 60-day language as Welcome E3, Cart E3, Browse E3, FAQ E6, and Winback B L2-3. Checkout E2's CTA "Read the guarantee" connects to the FAQ library (Flow 20) and the guarantee-specific FAQ E6 (hope-crash fear). The 60-day + permission thread is the **backbone of L2 risk reversal** and it ties Welcome E3 → Cart E3 → Checkout E2 → FAQ E6 → Winback B L2-3 together.

### 1.17 PHASE 1 trust-continuity summary

| Email | Trust before | Trust after | Mode | Cross-flow bridge |
|---|---|---|---|---|
| WELCOME E1 | 38 | 39 | Defensive | Lena MEDIUM sign-off loads E2–E8 |
| WELCOME E2 | 39 | 41 (+2) | → Scientific | Mechanism click enables E4–E7 |
| WELCOME E3 | 41 | 42 | Scientific | 60-day language runs through all phase 4 |
| WELCOME E4 | 42 | 44 (+2) | → Emotional lock | BCBA unlock sentence + paradox |
| WELCOME E5 | 44 | 45 | Mechanism deep | Mahler citation → PP-Ext Edu L2-1 |
| WELCOME E6 | 45 | 46 | Community | Testimonials → PP-Mid Check-In E1 |
| WELCOME E7 | 46 | 47 | Operational | Prompt-dependency → PP-Ext Edu L2-4 |
| WELCOME E8 | 47 | 48 | Decision | LONG sign-off → Winback A L2-3 / Sunset E2 |
| BROWSE E1–E3 | 48 | 49–51 | Scientific | Redirects to science page |
| CART E1–E3 | 51 | 52–54 | Cart-intent | Suppresses Welcome E3+ |
| CHECKOUT E1–E2 | 53 | 54 | Highest-intent | No discount; permission only |

**Phase 1 ending trust: 54/100** (purchaser) or **53/100** (lingerer who drops to Winback B at Day 60). The conversion rate is ~35–45% by day 21 — the L2 conversion rate is *lower* than L1's because L2's trust threshold is higher and her reading-time is longer. The 6-element pre-flight is the structural defense against negative deltas; no Phase 1 email produces a negative trust delta if the gates are honored.

---

## 2. PHASE 2 — TRANSACTIONAL AND PP EARLY (PURCHASE TO DAY ~21 POST)

Lisa has converted. The shift from defensive-evaluation to scientific-evaluator is now consolidated; hope/realism moves from 35/65 (conversion) to 40/60 (transactional/PP early). Brand's job: **validation without over-promising.** Phase 2 emails are structurally lighter on the 6-element formula (transactional flows are exempt; PP-Education is the workhorse) but never fully exempt — the L2 unlock sentence and BCBA-respect language run through all PP-Education emails as a thread.

### 2.1 ORDER CONFIRMATION E1 — immediate post-purchase

**CONVERSION GATES.** Reduced formula permitted (transactional). G5 (guarantee) and G6 (permission) present; G1–G4 not required. Order summary, 60-day guarantee reminder, Lena's "You've got this. We've got your back. — Lena." Google 2024 rule: predominantly transactional. NO promotional content beyond the wash bag mention. Phase 2 allows reduced formula in transactional flows.

**DEAD-END if ignored.** Unlikely to be ignored (transactional email, high open rate). If ignored, she has lost the post-purchase reinforcement at the most fragile moment. The 60-day guarantee recap is the **post-purchase confidence anchor** — without it, the fragile high-hope state (avatar §6) does not get structurally reinforced. Trust delta: +1 (54 → 55). If ignored: trust holds; Phase 2 still proceeds.

**CROSS-FLOW CONTINUITY.** Order E1's Lena voice ("You've got this. We've got your back") is the post-purchase version of the Welcome E1 MEDIUM sign-off — peer-voice, not founder-voice. Order E1's wash bag mention is the only cross-sell permitted (Google 2024 rule) and sets up the PP-Direct Upsell E1/E2. Order E1 does NOT mention PP-Education, PP-Extended Education, or the FAQ library — it is purely transactional. The Lena voice carries through Shipping E1, Shipping E2, Arrived E1, PP-Mary S. Story, PP-Education D0-21, PP-Mid Check-In, and PP-Extended Education — Lena is the **post-purchase continuity thread**.

### 2.2 SHIPPING E1 — on fulfillment

**CONVERSION GATES.** Reduced formula (transactional). Lena's "Can't wait for you to try them. — Lena." Tracking info, delivery estimate, teaser for arrival. No commercial CTA.

**DEAD-END if ignored.** Tracking confirmation is rarely ignored (high-open email). If missed, she has no operational anchor for when the package arrives; the Out for Delivery email (E2) is the next touchpoint. Trust delta: +1 (55 → 56).

**CROSS-FLOW CONTINUITY.** Shipping E1 → Shipping E2 (Out for Delivery) → Arrived E1 → PP-Education D0-21 E1 is the **operational chain** that takes her from order to first-wear. Shipping E1 is the first step; the entire chain is engineered to manage expectations. Shipping E1's "Can't wait for you to try them" is Lena-as-Lena; same voice as Mary S. Story E1 (founder-as-peer).

### 2.3 SHIPPING E2 — Out for Delivery — **CRITICAL**

**CONVERSION GATES.** Reduced formula (transactional), but **expectation management is the lever** (per Demand §11.6 and §7.2 Lena voice Step 3). G5 (guarantee) implicit; G6 (permission) implicit; G2 (mechanism) referenced briefly in the prep guidance. The L2 patience frame: "First few wears are about introducing the sensation, not results. He's learning a new language his nervous system hasn't heard before. Give it time." This is the **most important expectation-management moment in the entire sequence** (per emotional-trust map).

**DEAD-END if ignored.** The expectation-management email. If missed, Lisa has no anchor for the first wear and may interpret "no immediate result" as "this doesn't work" — Week 1 drop-off risk spikes. If missed, PP-Education D0-21 E1 (Day 0 post) and PP-Education D0-21 E2 (Day 7) carry the expectation load, but they are post-purchase, not pre-arrival — the **arrival day is the highest-anxiety moment**. Trust delta: +1 (56 → 57). If missed: trust holds at 56; Week 1 expectations uncalibrated → higher chance of Week 2 disappointment.

**CROSS-FLOW CONTINUITY.** Shipping E2's "He's learning a new language his nervous system hasn't heard before" is the **first L2 patience frame** in the sequence. This frame is reused in PP-Education D0-21 E1 ("Watch for nothing. Watch for everything. Don't log yet"), D0-21 E3 ("Some kids respond by day 3. Others by day 30. Most by day 60. A few need 90. All normal"), PP-Mid Check-In E2 (60-day mark decision window), and PP-Ext Edu L2-1 (Mahler 8 senses). The patience frame is the **expectation-management thread** that runs from Shipping E2 through PP-Ext Edu L2-5 (D130).

### 2.4 ARRIVED E1 — delivery confirmed

**CONVERSION GATES.** Full 6-element formula (per `journey-l2-02-sequence.md` exemption note — all elements present). G1: "he notices wet." G2: "The wetness-sensing layer works by letting your child FEEL when they're wet — not absorb it silently like a pull-up. The nervous system registers the signal, slowly, repeatedly, until it generalizes." G3: "your BCBA's protocol stays in place; this is the missing layer." G4: what-to-expect timeline in mint-bordered callout box: "Week 1: awareness. Week 2–4: recognition. Week 4–8: active response." G5: implicit. G6: "no rush." All six present.

**DEAD-END if ignored.** Maximum hope + maximum anxiety moment. If missed, first-wear protocol is uncalibrated; the wash-first guidance (no fabric softener) and the "let child unbox" sensory guidance are lost. Trust delta: +1 (57 → 58). If missed: PP-Education D0-21 E1 still carries the wash guide and the first-wear protocol, but the visual ceremony of the arrival moment is gone.

**CROSS-FLOW CONTINUITY.** Arrived E1's "let child unbox" sensory guidance is the same sensory-respect principle that runs through PP-Ext Edu L2-3 (Sensory Bathroom Setup: foot stool, lighting, white noise, picture schedules, weighted lap pad, no-flush rule). Arrived E1's "Week 1: awareness / Week 2–4: recognition / Week 4–8: active response" timeline is the **first concrete curve** in the L2 sequence; PP-Education D0-21 E3 ("Some kids respond by day 3. Others by day 30. Most by day 60. A few need 90") is the **second**; PP-Mid Check-In E1 is the **third** (Day 45 peer-anchored). The three timelines together form the L2 patience arc. Arrived E1's gentle upsell (1-pair → 3+3) sets up PP-Direct Upsell E1/E2 (Day 1 / Day 3 post).

### 2.5 PP-DIRECT UPSELL E1 — Day 1 post-purchase

**CONVERSION GATES.** Reduced formula (cross-level, level-aware framing). G3 (BCBA-complement) framing for L2; G1, G2, G4, G5, G6 not required. L2 framing: "Your BCBA's protocol continues. The 3+3 bundle or 5+5 lets the body-signal layer stay consistent without rotation gaps." Math reframe OK for L2 (FORBIDDEN for L3 per Demand §8.5). Helper tone, not seller tone.

**DEAD-END if ignored.** This is the bundle upgrade prompt for 1-pair buyers. If ignored, PP-Direct Upsell E2 (Day 3) still fires, but the helper-tone pivot is delayed. Trust delta: 0 (no delta, no harm). The PP-Direct Upsell flow is intentionally soft for L2 — pressure here collapses the trust meter.

**CROSS-FLOW CONTINUITY.** PP-Direct Upsell E1/E2 → PP-Ext Upsell E1/E2/E3 → Replenishment A1/A2/A3 → Replenishment B1/B2 → Replenishment C1/C2 is the **bundle upgrade chain** for L2. The chain is calibrated: gentle helper tone in early emails (D1, D3), BCBA-complement tone at D28, rotation/rationale tone at D30, guarantee tone at D42, replenishment prompts at D60, D75, D90, D150, D180. PP-Direct Upsell E1 is the **entry point** of this chain. Cross-level: this flow is single-copy with level-aware framing; L3 gets a separate frame (never pushes 5+5; never math reframe).

### 2.6 PP-DIRECT UPSELL E2 — Day 3 post-purchase

**CONVERSION GATES.** Reduced formula. Helper tone. 10% off add-on (test without first per `strategy-macro.json`). G5 (guarantee) implicit; G6 (permission) implicit. BCBA-complement framing continued from E1.

**DEAD-END if ignored.** Last PP-Direct Upsell email. If missed, the bundle upgrade prompt has had its three touches (1 pair bought → Day 1 prompt → Day 3 prompt with 10% off). If no conversion, the chain moves to PP-Ext Upsell at Day 28. Trust delta: 0 or +1 depending on conversion.

**CROSS-FLOW CONTINUITY.** PP-Direct Upsell E2 introduces the founder reference (Mary S.) for the **PP-Mary S. Story E1 (Day 3 post)** — the E2's "your 1 pair is on its way" sets up the founder-as-peer moment that follows. PP-Mary S. Story E1 (Day 3) is the **founder disclosure moment**; E2 (Day 3) and PP-Mary S. Story (Day 3) are sequenced intentionally so the bundle context loads before the founder story.

### 2.7 PP-MARY S. STORY E1 — Day 3 post-purchase

**CONVERSION GATES.** Full formula (per emotional-trust map, all six via founder story arc). G1: Mary S.'s child "couldn't feel the signal" — symptom recognition via founder disclosure. G2: "the missing piece wasn't behavioral. It was neurological. It was the body-signal layer." G3: "we worked with our BCBA, not against her." G4: "it took us 9 months." G5: implicit. G6: "if you're not ready, that's okay." No offer in this email — pure brand building. **Phase placement disputed** (I09: S01 says Phase 1, S02 implies Phase 2). Recommended placement: Day 3 post-purchase.

**DEAD-END if ignored.** Founder-as-peer moment. If missed, the brand remains a logo with Lena's voice; Mary S. stays abstract. PP-Ext Edu L2-2 (BCBA Integration Tips) and PP-Ext Edu L2-4 (Prompt-to-Awareness Shift) reference Mary S.'s story as the founder origin, but if the founder story is missed, those references land on unprepared ground. Trust delta: +1 (58 → 59). If missed: trust holds at 58; founder reference is weaker in Phase 4.

**CROSS-FLOW CONTINUITY.** Mary S. Story E1's "it took us 9 months" is the **founder-disclosure version of the timeline** — it's the longest arc in the L2 sequence (vs 8–12 weeks for most kids), and it pre-loads Winback A L2-1 ("I had two of these kids") and PP-Ext Edu L2-5 (long-term progress tracking). Mary S. Story E1 is the **only email in the entire sequence signed as Mary S., not Lena** (per Demand §7.4). Mary S. (founder) and Lena (customer support / mom) are **never mixed**. Mary S. Story E1's BCBA-respect line is the founder-disclosure version of the L2 unlock sentence; FAQ E5 (BCBA compatibility) is the cleanest articulation.

### 2.8 PP-EDUCATION D0-21 E1 — Day 0 post-purchase

**CONVERSION GATES.** Reduced formula (L2 framing implicit). G1: "Watch for nothing. Watch for everything." G2: implied (body-signal layer). G3: "your BCBA's protocol continues; the body-signal layer is added alongside." G4: implicit (L2 patience frame). G5: implicit. G6: "Don't log yet" — the deepest L2 permission signal. All six present lightly.

**DEAD-END if ignored.** First-wear protocol. If missed, the "don't log yet" permission anchor is gone, and Lisa's data-driven instinct (BCBA has taught her to log everything) may push her to over-log and misinterpret early data. Trust delta: +1 (59 → 60). If missed: PP-Education D0-21 E2 (Day 7) still gives the observation guide, but the "don't log yet" frame is delayed by a week.

**CROSS-FLOW CONTINUITY.** PP-Education D0-21 E1's "Don't log yet" permission is the **post-purchase version of permission-not-to-buy** — it is the brand's first ask (a request, not a demand) and Lisa's first test of whether the brand trusts her to make her own decisions. This is structurally the same ask as the L2 unlock sentence (which is itself a permission to bring body-signal learning to the BCBA's protocol). PP-Education D0-21 E1 → E2 (Day 7) → E3 (Day 14) → E4 (Day 21) is the **PP-Education workhorse chain** that carries the L2 patience arc through the first 21 days post-purchase.

### 2.9 PP-EDUCATION D0-21 E2 — Day 7 post-purchase

**CONVERSION GATES.** Reduced formula. G1: micro-signs (pause, touch, look down, shorter dry periods). G2: "you're looking for subtle shifts his nervous system makes when the body-signal starts to register." G3: implied. G4: implicit. G5: implicit. G6: "These ARE progress — even if no voiding happens in the toilet yet." All six present lightly. L2 framing: scientific observation, not celebration.

**DEAD-END if ignored.** Observation guide. If missed, the micro-signs vocabulary is not established; Lisa is more likely to interpret Week 1 as "nothing happened" and consider abandoning. Trust delta: +1 (60 → 61). If missed: PP-Education D0-21 E3 (Day 14) still delivers the "week 2 reality" frame, but the observation vocabulary is delayed.

**CROSS-FLOW CONTINUITY.** PP-Education D0-21 E2's micro-signs ("the wet spot he looked at. The pause mid-play. The hand that goes to the underwear") is the **L2 micro-moment vocabulary** that recurs in PP-Ext Edu L2-5 (Long-Term Progress Tracking: 3-metric dashboard — dry periods, micro-moments, successful voids). E2 is the first email to teach this vocabulary; E5 in PP-Ext Edu is the dashboard that operationalizes it.

### 2.10 PP-EDUCATION D0-21 E3 — Day 14 post — **CRITICAL**

**CONVERSION GATES.** Reduced formula with **G4 (timeline) and G5 (49% normalization stat) dominant**. G1: regression is normal. G2: implied (the curve's mechanism). G3: "your BCBA has seen this curve before — trust the protocol AND the new layer." G4: dominant — "Some kids respond by day 3. Others by day 30. Most by day 60. A few need 90. All normal." 49% Wiggins stat in mint-bordered callout box. G5: implicit. G6: "Don't stop." All six present.

**DEAD-END if ignored.** **Critical for retention** — common drop-off point at week 2. If missed, Lisa has no normalization anchor for the "is this working?" anxiety spike. She may interpret the absence of major progress as failure. Trust delta: +1 (61 → 62). If missed: PP-Education D0-21 E4 (Day 21) still gives the "celebrate the small wins" frame, but the regression normalization is delayed by a week — the highest-risk moment in the L2 post-purchase journey.

**CROSS-FLOW CONTINUITY.** PP-Education D0-21 E3's curve is the **second concrete timeline** in the L2 sequence (after Arrived E1's Week 1/2-4/4-8 framework, before PP-Mid Check-In E1's D45 peer-anchored stories). The 49% Wiggins stat in its mint-bordered callout box is the same L2 visual signature used in Welcome E2, E5, Browse E2, and the FAQ library. E3 is structurally the **Week 2 reality check**; the L2 reader needs it because she has been promised "8–12 weeks" and is now in week 2, expecting more than micro-signs.

### 2.11 PP-EDUCATION D0-21 E4 — Day 21 post

**CONVERSION GATES.** Reduced formula. G1: "He looked at the wet spot!" G2: implied. G3: implied (BCBA protocol continues). G4: implied. G5: implicit. G6: "Share a small win" / "Log your observations." All six present lightly. L2 framing: permission to celebrate, no cheerleading.

**DEAD-END if ignored.** End of PP-Education D0-21. If missed, the first win is not anchored; she may treat the micro-sign as "still not trained" rather than as the first recognition. Trust delta: +1 (62 → 63). If missed: PP-Mid Check-In E1 (Day 45) still gives the calibration check-in, but the first micro-win anchor is delayed.

**CROSS-FLOW CONTINUITY.** PP-Education D0-21 E4's "He looked at the wet spot!" is the **first L2 mini-win** — the first explicit celebration moment in the sequence. This is the L2 version of "the L1 'potty trained in a week!' testimonial" that is forbidden (Demand §8.5). The L2 mini-win is micro, not macro. PP-Education D0-21 E1–E4 → PP-Mid Check-In E1–E3 → PP-Ext Edu L2-1–L2-5 → Winback A or B is the **complete post-purchase chain** for the converted L2.

### 2.12 PHASE 2 trust-continuity summary

| Email | Trust before | Trust after | Mode | Cross-flow bridge |
|---|---|---|---|---|
| ORDER E1 | 54 | 55 | Fragile high-hope | 60-day recap → Phase 4 |
| SHIPPING E1 | 55 | 56 | Anticipatory | Lena voice thread |
| SHIPPING E2 | 56 | 57 | Anticipatory | L2 patience frame begins |
| ARRIVED E1 | 57 | 58 | Max hope+anxiety | First concrete timeline |
| PP-DIRECT UPSELL E1 | 58 | 58 | Bundle | 1-pair → 3+3 chain begins |
| PP-DIRECT UPSELL E2 | 58 | 58–59 | Bundle | 10% off; Mary S. intro |
| PP-MARY S. STORY E1 | 58 | 59 | Founder-as-peer | Founder disclosure; "9 months" timeline |
| PP-EDU D0-21 E1 | 59 | 60 | First-wear | "Don't log yet" permission |
| PP-EDU D0-21 E2 | 60 | 61 | Observation | Micro-signs vocabulary |
| PP-EDU D0-21 E3 | 61 | 62 | Reality check | Week 2 normalization |
| PP-EDU D0-21 E4 | 62 | 63 | Micro-win | First celebration anchor |

**Phase 2 ending trust: 63/100.** Higher than L1 at the same point because L2 has read more science, more BCBA-respect language, more mechanism depth. **More durable** — L2 readers at 63/100 are likely to remain engaged through PP Mid and Replenishment, and they carry the L2 unlock sentence as a structural defense against Phase 4 doubt.

---

## 3. PHASE 3 — PP MID AND REPLENISHMENT (DAY ~22 TO DAY ~90 POST)

Lisa is now in PP Mid. Hope/realism holds at 35/65 — she's a steady investor, not an enthusiast. Her job is observation; the brand's job is patience + replenishment logistics + zero over-promising. PP-Support At-Risk fires conditionally if she stops opening; if she keeps engaging, she gets the Mid Check-In, Replenishment A/B, Review Request, and PP-Extended Upsell. The 6-element formula is reduced but never abandoned; the L2 unlock sentence and 60-day guarantee are present wherever a commercial CTA appears.

### 3.1 PP-MID CHECK-IN E1 — Day 45 post

**CONVERSION GATES.** Full formula via the Three-Family Testimonial arc. G1: each family's symptom pattern (L2 slot: BCBA context, sensory context, slow progress, "we're still in the recognition phase"). G2: the body-signal layer referenced in each family's words. G3: every testimonial names the BCBA as collaborator. G4: regression cycles named (every family is at a different point on the curve). G5: implicit. G6: "Reply to this email with how it's going" — the **highest-trust invitation in the brand.**

**DEAD-END if ignored.** Day 45 is the calibration midpoint. If missed, Lisa has no peer-anchored normalization at the moment when most L2 readers are beginning to wonder "is this really working for us?" — the curve is wide (some kids respond by day 3, others by day 90), and D45 is when she most needs to see other families at her same stage. Trust delta: +1 (63 → 64). If missed: PP-Mid Check-In E2 (D60) still fires, but the peer-anchored normalization is delayed by 2 weeks.

**CROSS-FLOW CONTINUITY.** PP-Mid Check-In E1's Three-Family Pattern (Sarah / Lisa-as-customer / Maria) is the **same template** used in Welcome E6 (post-mechanism testimonials), Cart E2 (L2 slot names the BCBA), and PP-Ext Edu L2-1 (long-term peer stories). The **"Lisa" slot here is a customer named Lisa** — distinct from Lisa-as-avatar — and her testimonial is L2-shaped (BCBA context, sensory context, slow progress) per the deliberate level-slot mapping. PP-Mid Check-In E1 → E2 (D60) → E3 (D75) is the **60-day decision window** in the L2 sequence. E1 (D45) anchors; E2 (D60) decides; E3 (D75) reminds.

### 3.2 PP-MID CHECK-IN E2 — Day 60 post

**CONVERSION GATES.** G5 (guarantee threshold) and G6 (permission) dominant. G1: implied. G2: implied. G3: implied. G4: implied. G5: "60 days is the guarantee threshold; you have full information now, and your next decision is yours." G6: "Reply to Lena" — the highest-trust reply invitation. **Post-purchase permission-not-to-buy**: she has full information, full 60 days of data, and the brand respects whatever she decides. All six present lightly.

**DEAD-END if ignored.** D60 is the **decision window.** If missed, she has no permission frame for the 60-day guarantee decision. She may interpret "no reply" as "no concern," but if the guarantee email is the only one she opens, she may use the guarantee without the permission frame softening it (which damages the relationship even if the refund is clean). Trust delta: +1 (64 → 65).

**CROSS-FLOW CONTINUITY.** PP-Mid Check-In E2 is the **post-purchase mirror of Welcome E3** (the pre-purchase 60-day + permission email). E3 was "60 days. By your judgment" *before* purchase; E2 is the same phrase *after* 60 days of use. The structural symmetry is intentional — Lisa's evaluation authority is transferred pre-purchase and acknowledged post-purchase. E2's "Reply to Lena" is the same Lena-as-peer invitation that runs through Welcome E1, E8, and the PP-Support At-Risk flow.

### 3.3 PP-MID CHECK-IN E3 — Day 75 post

**CONVERSION GATES.** G5 (guarantee) and G6 (permission) dominant. G1: implied. G2: implied. G3: implied. G4: "or stay with us longer; some L2 families see the shift at week 12." G5: dominant — "60 days have passed. If the body-signal layer hasn't shifted, you can use the guarantee. No interrogation. No restocking fees." G6: dominant — "or stay with us longer; some L2 families see the shift at week 12." All six present lightly.

**DEAD-END if ignored.** D75 is the **last touchpoint of the 60-day decision window** and the **entry point to the 5+5 / Replenishment C path** (long-haul). If missed, the guarantee window is closing without reinforcement; she may use it cleanly (good) or stay without the brand's permission (acceptable) — both are tracked, but neither is named. Trust delta: +1 if she stays (65 → 66); 0 if guarantee used.

**CROSS-FLOW CONTINUITY.** PP-Mid Check-In E3's "some L2 families see the shift at week 12" is the **long-arc timeline extension** that pairs with Mary S. Story E1 ("it took us 9 months") and PP-Ext Edu L2-5 (long-term progress tracking). The three together form the **L2 long-arc patience frame**: 8–12 weeks for most, 9 months for Mary S., some longer than 90 days for the curve's tail. E3's "no interrogation" language is the same as the L2 unlock sentence's permission-not-to-buy frame; the guarantee is structurally an extension of the permission signal, not a separate offer.

### 3.4 PP-EXTENDED UPSELL E1 — Day 28 post

**CONVERSION GATES.** G3 (BCBA complement) dominant. G1: implied. G2: implied. G3: dominant — "Your BCBA's protocol continues. The 3+3 bundle or 5+5 lets the body-signal layer stay consistent without rotation gaps." "We complement the protocol." G4: implied. G5: implicit. G6: implicit. Math reframe OK for L2 (FORBIDDEN for L3). L2-specific level respect: bundle is framed as rotation, not upsell.

**DEAD-END if ignored.** D28 is when 1-pair buyers are most likely to feel the rotation gap (one pair in the wash, one in use, one waiting). If missed, the rotation rationale is delayed; she may buy more pairs on her own (organic) or stay at 1-pair (limiting consistency). Trust delta: 0 (no delta, no harm).

**CROSS-FLOW CONTINUITY.** PP-Ext Upsell E1 is the **D28 version of the bundle upgrade**; PP-Direct Upsell E1 was the D1 version. The two together are the **bundle chain for 1-pair buyers**; the chain is intentionally slow (D1, D3, D28, D35, D42) so that pressure never builds. PP-Ext Upsell E1's BCBA-complement language is the same as PP-Direct Upsell E1's and the **BCBA fact sheet** referenced in PP-Ext Edu L2-2 — the same BCBA-respect frame runs through the entire bundle chain. **L3 rule:** never push 5+5; for L3, 1-pair → 3+3 at most, organic only.

### 3.5 PP-EXTENDED UPSELL E2 — Day 35 post

**CONVERSION GATES.** Reduced formula. Lena voice. Practical add-ons (Wash Bag, Magic Targets). Helper tone. G5 (guarantee) implicit; G6 (permission) implicit. L2 framing: practical add-ons that support the protocol.

**DEAD-END if ignored.** Accessory cross-sell. If missed, the accessory thread is dormant until PP-Ext Upsell E3 (D42). Trust delta: 0 (no delta, no harm).

**CROSS-FLOW CONTINUITY.** PP-Ext Upsell E2 is the **accessory entry** in the bundle chain. The Wash Bag and Magic Targets accessories also surface in Replenishment C2 (D180, "tools that keep the rotation consistent"). The accessory thread is intentionally light — accessories are **helpers**, not hero offers.

### 3.6 PP-EXTENDED UPSELL E3 — Day 42 post

**CONVERSION GATES.** G5 (guarantee) and G6 (permission) dominant. G5: "Whatever you decide about more pairs, the 60-day guarantee stands." G6: dominant — "Last touch from us on this — leave the relationship intact." G3: implied (BCBA protocol continues). All six present lightly.

**DEAD-END if ignored.** Last bundle touchpoint. If missed, the post-purchase permission-not-to-buy moment is gone; she may interpret "no more emails" as "they gave up on me" rather than "they trust me to decide." Trust delta: +1 (66 → 67). If missed: trust holds; the Replenishment A1 (D14) is already past for most 1-pair buyers; the chain moves to D60 Replenishment A3.

**CROSS-FLOW CONTINUITY.** PP-Ext Upsell E3 is the **structural close of the post-purchase commercial sequence**; from here, the only commercial messages are Replenishment A1-A3 (1-pair), B1-B2 (3+3), C1-C2 (5+5) and Review Request E1-E2. E3's "leave the relationship intact" is the L2 LONG sign-off frame in commercial context; the same permission-not-to-buy frame is in Welcome E8, Winback A L2-3, Winback B L2-3, and Sunset E2.

### 3.7 REPLENISHMENT A1 — Day 14 (1-pair buyer)

**CONVERSION GATES.** Reduced formula (cross-level with L2 framing). G2 (mechanism) light. G6 (permission) implicit. Wash cycle guidance: "Pairs need a few wash cycles to hit peak wetness-signal performance. No fabric softener — it coats the sensing layer."

**DEAD-END if ignored.** 1-pair buyer's first replenishment touchpoint. If missed, the wash-cycle guidance is delayed; the body-signal layer may underperform in Week 2-3 because the pair hasn't been pre-washed correctly. Trust delta: +1 (held; 67 → 67).

**CROSS-FLOW CONTINUITY.** Replenishment A1's wash guidance is the **operational echo** of Arrived E1's wash-first protocol. The two together ensure the body-signal layer reaches peak performance within 2 weeks of first wear. A1 → A2 (D30) → A3 (D60) is the **1-pair buyer replenishment chain**; B1 (D75) → B2 (D90) is the 3+3 chain; C1 (D150) → C2 (D180) is the 5+5 long-haul chain. The chains are **mutually exclusive** (1-pair → A; 3+3 → B; 5+5 → C) and parallel to the Review Request E1-E2 cadence.

### 3.8 REPLENISHMENT A2 — Day 30 (1-pair buyer)

**CONVERSION GATES.** G2 (mechanism) and G3 (BCBA complement) light. "The body-signal layer builds with consistent wear. Rotation gaps slow the learning. If a pair is in the wash, the others carry the work." L2 framing: practical rotation, not urgency.

**DEAD-END if ignored.** Rotation rationale. If missed, the bundle upgrade is delayed; she may stay at 1-pair longer, with rotation gaps slowing the body-signal learning. Trust delta: 0 or +1.

**CROSS-FLOW CONTINUITY.** Replenishment A2's rotation logic is the **bridge to the 3+3 bundle** (Replenishment A3 → B1). The 1-pair → 3+3 → 5+5 progression is the L2 long-arc bundle ladder; the math reframe ("most parents who start with 1 pair add the 3+3 within a week") is allowed for L2 throughout.

### 3.9 REPLENISHMENT A3 — Day 60 (1-pair buyer)

**CONVERSION GATES.** G5 (guarantee) and G6 (permission) dominant. G5: "Day 60 is your guarantee checkpoint. If the body-signal layer hasn't shifted, full refund. No interrogation." G6: "if you're ready for more pairs, we're here." Soft replenish prompt. All six present lightly.

**DEAD-END if ignored.** Day 60 is the **guarantee checkpoint** for the 1-pair buyer. If missed, the guarantee threshold passes without reinforcement; the 1-pair buyer may use the guarantee cleanly (good) or upgrade without permission (acceptable). Trust delta: +1 (67 → 68).

**CROSS-FLOW CONTINUITY.** Replenishment A3 is the **D60 replenishment mirror of PP-Mid Check-In E2** (also D60). The two are sequenced in the same week but address different needs: PP-Mid Check-In E2 is the **Lena-reply** decision window; Replenishment A3 is the **bundle upgrade** decision window. Both are 60-day anchors; both use the 60-day language; both have permission-not-to-buy. They are the **dual D60 touchpoints** for the L2 1-pair buyer.

### 3.10 REPLENISHMENT B1 — Day 75 (3+3 buyer)

**CONVERSION GATES.** Reduced formula. L2 framing: "the protocol continues; rotation keeps the body-signal layer consistent." 5+5 nudge. Helper tone. G3 (BCBA) light; G5 (guarantee) implicit.

**DEAD-END if ignored.** 3+3 buyer's first 5+5 nudge. If missed, the upgrade is delayed; she may stay at 3+3 longer. Trust delta: 0.

**CROSS-FLOW CONTINUITY.** Replenishment B1 → B2 is the **3+3 → 5+5 chain**; B1 (D75) introduces, B2 (D90) closes. The chain runs **parallel to** the 1-pair → 3+3 chain (A1-A3) and **before** the 5+5 long-haul chain (C1-C2). All three chains are mutually exclusive by sub-flow.

### 3.11 REPLENISHMENT B2 — Day 90 (3+3 buyer)

**CONVERSION GATES.** Reduced formula. Helper tone. Practical bundle upgrade to 5+5. G5 implicit; G6 implicit. Math reframe OK for L2.

**DEAD-END if ignored.** Last 3+3 chain email. If missed, the upgrade to 5+5 is delayed; she may stay at 3+3. Trust delta: 0 or +1.

**CROSS-FLOW CONTINUITY.** B2 is the **D90 close of the 3+3 chain.** D90 is also the **trigger day for Winback A** (90 days no engagement post-purchase) — so the D90 moment is structurally bifurcated: engaged 3+3 buyers get B2; disengaged 3+3 buyers get Winback A L2-1. Demand §2.5: Winback pauses all nurture flows while active. B2 and Winback A L2-1 are mutually exclusive based on engagement.

### 3.12 REPLENISHMENT C1 — Day 150 (5+5 buyer)

**CONVERSION GATES.** Reduced formula. L2 framing: "Your BCBA's protocol + the body-signal layer = the long-road toolkit." Long-haul loyalty acknowledgment. G3 (BCBA) light; G6 (permission) implicit.

**DEAD-END if ignored.** Long-haul loyalty touchpoint. If missed, the 5+5 buyer has no acknowledgment of the long-arc commitment. Trust delta: +1 (68 → 69).

**CROSS-FLOW CONTINUITY.** C1 is the **5+5 long-haul entry.** D150 is past the D90 Winback A trigger; if a 5+5 buyer is still engaged at D150, she has cleared the L2 retention hurdle and entered the **brand-advocate arc**. C1 → C2 (D180) is the 5+5 chain; PP-Ext Edu L2-1 through L2-5 is the **education companion** to the 5+5 chain.

### 3.13 REPLENISHMENT C2 — Day 180 (5+5 buyer)

**CONVERSION GATES.** Reduced formula. Accessory cross-sell (Wash Bag, Magic Targets). L2 framing: "tools that keep the rotation consistent." G6 (permission) implicit.

**DEAD-END if ignored.** Accessory refresh. If missed, the accessory thread is dormant. Trust delta: 0.

**CROSS-FLOW CONTINUITY.** C2 is the **5+5 chain close** and the **last replenishment email** in the L2 sequence. After C2, the only remaining flows are Winback A (if engagement drops), the FAQ/Objection Library (level-specific blocks), Referral, and Sunset.

### 3.14 REVIEW REQUEST E1 — Day 30

**CONVERSION GATES.** Reduced formula. G4 (peer-trust) dominant. L2 framing: "your review helps other L2 families decide." Altruism framing, not transaction. G6 implicit (peer request, not obligation).

**DEAD-END if ignored.** D30 is the **first peer-recommender opportunity.** If missed, the L2 reader has not yet been invited to share her experience with the community. Trust delta: +1 (69 → 70). If missed: trust holds; Review Request E2 (D60) still fires.

**CROSS-FLOW CONTINUITY.** Review Request E1 → E2 is the **peer-recommender chain**; E1 is the first ask, E2 is the follow-up. E2's "if you're not ready to write yet, that's fine" is the L2 permission-not-to-buy frame in the review context. Reviews feed back into Welcome E6 (testimonials), PP-Mid Check-In E1 (Three-Family Pattern), and the FAQ library — the **review loop closes** by feeding Phase 1 social proof.

### 3.15 REVIEW REQUEST E2 — Day 60

**CONVERSION GATES.** Reduced formula. Altruism framing dominant. L2 permission: "if you're not ready to write yet, that's fine." G4 (peer trust) dominant; G6 (permission) dominant.

**DEAD-END if ignored.** Last review request. If missed, the L2 reader passes through Phase 3 without contributing to social proof. Trust delta: +1 if writes (70 → 71); 0 if not (holds at 70).

**CROSS-FLOW CONTINUITY.** E2 is the **D60 mirror of PP-Mid Check-In E2** and **Replenishment A3** — three D60 emails running in parallel for the engaged L2 reader. The triple D60 (decision window + replenishment + review) is the **L2 60-day convergence**: all three uses of the 60-day threshold land in the same week. E2's "if you're not ready" permission is the L2 sign-off thread in the review context.

### 3.16 PP-SUPPORT AT-RISK E1 — 3 days no open

**CONVERSION GATES.** Reduced formula (no commercial). Lena voice only. "I noticed you haven't opened recent emails. Just checking in." No mechanism, no guarantee, no CTA. G6 implicit in the concern-only framing. **No upsells. NEVER "We miss you" or guilt-tripping.**

**DEAD-END if ignored.** Silent disengagement. If missed, she has dropped from the post-purchase cadence; the brand has no recovery path for 4 more days. Trust delta: +1 if re-engages; 0 if not.

**CROSS-FLOW CONTINUITY.** PP-Support At-Risk E1 → E2 (D7 no open) → E3 (D14 no open) → E4 (D21 no open) is the **silent-disengagement recovery chain.** It is **conditional on no-opens** (per Demand §2.5 / S02 §4.15) and pauses regular PP-Education cadence if open-rate drops. The chain's job is to surface the silent subscriber, not to chase her. E1's "just checking in" is Lena-as-peer, not Lena-as-corporate.

### 3.17 PP-SUPPORT AT-RISK E2 — 7 days no open

**CONVERSION GATES.** Reduced formula. Support offering, not promotion. "Here's how to get the most out of your pairs." Brief mechanism reminder + wash/rotation tips. G2 (mechanism) light; G6 implicit.

**DEAD-END if ignored.** Second no-open touchpoint. If missed, the silent subscriber is 14 days from the D14 email. Trust delta: 0 or +1.

**CROSS-FLOW CONTINUITY.** E2's wash/rotation tips are the **silent-disengagement version** of Replenishment A1/A2 (the engaged wash/rotation guidance). E2 is intentionally lower-stakes — no bundle prompt, no commercial ask, just operational support.

### 3.18 PP-SUPPORT AT-RISK E3 — 14 days no open

**CONVERSION GATES.** G5 (normalization) dominant. "Your child's nervous system is learning even when it doesn't show." L2 framing: scientific patience, no cheerleading. G4 implicit.

**DEAD-END if ignored.** Third no-open touchpoint. If missed, the silent subscriber is 21 days from the D21 email — past the threshold for the guarantee window opening. Trust delta: 0 or +1.

**CROSS-FLOW CONTINUITY.** E3's "learning even when it doesn't show" is the **L2 patience frame** in the silent-disengagement context. The same frame is in PP-Education D0-21 E3, PP-Mid Check-In E1, and Winback A L2-1. E3 is structurally the **last patience-frame email** before the guarantee reminder at E4.

### 3.19 PP-SUPPORT AT-RISK E4 — 21 days no open

**CONVERSION GATES.** G5 (guarantee) and G6 (permission) dominant. "Your 60-day guarantee is still active." "60 days. By your judgment. If you need to use it, no interrogation." All six present lightly.

**DEAD-END if ignored.** Last PP-Support At-Risk email. If missed, the silent subscriber has had 4 chances to re-engage; she has either already exited the chain (to Winback) or is now permanently silent. Trust delta: +1 if guarantee used cleanly; 0 if not.

**CROSS-FLOW CONTINUITY.** E4 is the **PP-Support At-Risk mirror of PP-Mid Check-In E3** (also D75, also guarantee + permission). The two are structurally parallel: one is the engaged D75 guarantee reminder; the other is the silent D75 guarantee reminder. E4's "no interrogation" is the same permission-not-to-buy language as the L2 unlock sentence and the LONG sign-off. After E4, the subscriber either re-engages, drops to Winback (A if post-purchase, B if never-bought), or moves toward Sunset.

### 3.20 PHASE 3 trust-continuity summary

| Email | Trust before | Trust after | Mode | Cross-flow bridge |
|---|---|---|---|---|
| PP-MID CHECKIN E1 | 63 | 64 | Calibration | Three-Family Pattern template |
| PP-MID CHECKIN E2 | 64 | 65 | Decision | D60 mirror of Welcome E3 |
| PP-MID CHECKIN E3 | 65 | 66 | Loyalty | 60-day guarantee reinforcement |
| PP-EXT UPSELL E1 | 66 | 66 | Rotation | BCBA-complement bundle chain |
| PP-EXT UPSELL E2 | 66 | 66 | Rotation | Accessory cross-sell |
| PP-EXT UPSELL E3 | 66 | 67 | Final upsell | "Leave the relationship intact" |
| REPLENISHMENT A1 | 67 | 67 | Practical | Wash guide = Arrived E1 echo |
| REPLENISHMENT A2 | 67 | 67 | Practical | Rotation rationale |
| REPLENISHMENT A3 | 67 | 68 | Guarantee | D60 replenishment mirror |
| REPLENISHMENT B1 | 68 | 68 | Bundle | 3+3 → 5+5 nudge |
| REPLENISHMENT B2 | 68 | 68–69 | Bundle | D90 close |
| REPLENISHMENT C1 | 68 | 69 | Long-haul | "Long-road toolkit" |
| REPLENISHMENT C2 | 69 | 69 | Long-haul | Accessory refresh |
| REVIEW E1 | 69 | 70 | Peer recommender | "Helps other L2 families" |
| REVIEW E2 | 70 | 70–71 | Peer recommender | Altruism + permission |
| PP-SUPPORT E1 | 70 | 70–71 | Silent | "Just checking in" |
| PP-SUPPORT E2 | 70 | 70–71 | Silent | Wash/rotation tips |
| PP-SUPPORT E3 | 70 | 70–71 | Silent | Patience frame |
| PP-SUPPORT E4 | 70 | 70–71 | Silent | Guarantee + permission |

**Phase 3 ending trust: ~71/100.** Trust is structurally reinforced — ~20+ emails read, multiple mechanism explanations, multiple BCBA-respect frames. The L2 reader in Phase 3 is in **cautious-retention** or **brand-advocate (low intensity)** mode. The 3-Layer Trust Architecture (intellectual + emotional + relational) is fully established; the L2 unlock sentence is a structural defense that holds even when the guarantee window closes.

---

## 4. PHASE 4 — LONG-TAIL (DAY 90+ POST, OR NEVER-BOUGHT POST-WINBACK)

Voice stays clinical-warm. L2 unlock sentence remains the gravitational center. The L2 reader is either a retained customer receiving PP-Extended Education and Review/Replenishment cycles, or a never-bought L2 receiving Winback B and the FAQ/Objection Library. The 6-element formula is enforced wherever a CTA appears; permission-not-to-buy is the dominant gate in the long-tail.

### 4.1 PP-EXTENDED EDUCATION L2-1 (Interoception Science) — ~Day 30

**CONVERSION GATES.** Mechanism-dominant (G2). G1: implied. G2: dominant — Mahler 8 interoceptive senses explained for parents. Stat callout box around the Mahler citation. G3: "your BCBA will recognize this framework." G4: implied (8–12 weeks). G5: implicit. G6: implicit. No product CTA — pure education.

**DEAD-END if ignored.** Long-term retention. If missed, the deep-science companion to Welcome E5 is gone; the L2 reader remains a Welcome-flow graduate without the Mahler framework that the FAQ library and Winback science emails reference. Trust delta: +1 (71 → 72).

**CROSS-FLOW CONTINUITY.** PP-Ext Edu L2-1 is the **deepest mechanism email** in the L2 sequence — the post-purchase Mahler framework. It pairs with Welcome E5 (Mahler introduction), FAQ E2 (Mahler in late-trainer context), and Winback A L2-2 (Mahler update). The four Mahler touchpoints form the **L2 Mahler thread** that runs through Phase 1, Phase 3 mid-check-ins, Phase 4, and the FAQ library.

### 4.2 PP-EXTENDED EDUCATION L2-2 (BCBA Integration Tips) — ~Day 50 — **CRITICAL**

**CONVERSION GATES.** G3 (BCBA complement) dominant. G1: implied. G2: implied (body-signal layer). G3: dominant — "How to bring body-signal learning into your BCBA's protocol." Practical: language to use, timing of the protocol revision, what to expect from the BCBA's response. G4: implied. G5: implicit. G6: implicit. **The bi-weekly BCBA fact sheet** (the highest-leverage L2 conversion tool, per Demand §23) gets its deepest airing here for retained customers.

**DEAD-END if ignored.** **Deepest post-purchase BCBA-respect moment in the entire sequence.** If missed, the L2 reader has no operational guide for bringing the body-signal layer to her BCBA. The fact sheet is the structural defense against the L2 reader's deepest fear (overriding her BCBA); missing this email means the BCBA-conversation path is unanchored. Trust delta: +1 (72 → 73). If missed: FAQ E5 (BCBA compatibility) becomes the BCBA-conversation anchor instead, but in a less contextually-prepared frame.

**CROSS-FLOW CONTINUITY.** PP-Ext Edu L2-2 is the **fact-sheet deep dive** — it pairs with FAQ E5 (the L2 unlock sentence in purest form) and the Mary S. Story E1 founder-BCBA line. The three together form the **L2 BCBA-conversation triad**: founder disclosure (Mary S. Story) → operational integration (PP-Ext Edu L2-2) → purest articulation (FAQ E5). The triad is the structural backbone of the L2 conversion engine for post-purchase retention.

### 4.3 PP-EXTENDED EDUCATION L2-3 (Sensory Bathroom Setup) — ~Day 70

**CONVERSION GATES.** G2 (mechanism) and G3 (BCBA complement) light. G1: implied. G2: "the bathroom is a sensory minefield — these are the OT-tested setups that reduce the load." G3: implied (OT-tested). G4: implied. G5: implicit. G6: implicit. Sensory-friendly bathroom configuration: foot stool, lighting, white noise, picture schedules, weighted lap pad, no-flush rule.

**DEAD-END if ignored.** Sensory environment support. If missed, the L2 reader has no environmental framework for the body-signal layer; she may default to a "regular" bathroom setup that the sensory profile actively resists. Trust delta: +1 (73 → 74).

**CROSS-FLOW CONTINUITY.** PP-Ext Edu L2-3 is the **sensory environment email** — it pairs with Arrived E1's "let child unbox" sensory guidance and the OT/SLP partnership language in FAQ E3 (GI/withholding). The sensory thread runs through Phase 2 (Arrived E1), Phase 4 (PP-Ext Edu L2-3), and the FAQ library. The L2 reader who has internalized the sensory thread has the **environmental** piece of the body-signal layer; the one who hasn't may not see the layer generalize.

### 4.4 PP-EXTENDED EDUCATION L2-4 (Prompt-to-Awareness Shift) — ~Day 100

**CONVERSION GATES.** G2 (mechanism) and G3 (BCBA complement) dominant. G1: implied. G2: dominant — the 5-phase prompt fading: full prompt → visual cue only → verbal cue every other visit → cue only when child initiates movement toward bathroom → no cue. G3: dominant — "This is the BCBA's domain — share the phasing with them. They can integrate it into the existing protocol." G4: implied. G5: implicit. G6: implicit.

**DEAD-END if ignored.** Operational prompt-fading protocol. If missed, the L2 reader has no roadmap for transitioning from prompt-dependence to internal-cue toileting. The protocol-fading step is the **bridge between "compliance" and "internalization"** — without it, the body-signal layer's gains may not generalize beyond the home. Trust delta: +1 (74 → 75).

**CROSS-FLOW CONTINUITY.** PP-Ext Edu L2-4 is the **operational answer to Welcome E7's prompt-dependency loop** (the conceptual diagnosis). E7 names the loop; L2-4 names the exit. The two together are the **L2 prompt-dependency thread**: Welcome E4 (paradox) → Welcome E7 (loop) → PP-Ext Edu L2-4 (fading). Three emails, one mechanism, three stages (recognition → diagnosis → exit).

### 4.5 PP-EXTENDED EDUCATION L2-5 (Long-Term Progress Tracking) — ~Day 130

**CONVERSION GATES.** G2 (mechanism) and G3 (BCBA complement) light. G1: implied. G2: 3-metric dashboard (dry periods, micro-moments, successful voids). G3: "your BCBA is already data-driven — this is the layer they can't measure, made measurable." G4: implied. G5: implicit. G6: "or don't log at all. Trust the protocol. Trust the layer." Permission-not-to-data-log is the deepest L2 permission signal at this stage.

**DEAD-END if ignored.** Data dashboard. If missed, the L2 reader has no framework for measuring the body-signal layer's gains; she may either over-log (data-driven reflex) or under-log (no shared vocabulary). The dashboard is the **measurement complement** to the mechanism. Trust delta: +1 (75 → 76).

**CROSS-FLOW CONTINUITY.** PP-Ext Edu L2-5 is the **final L2 email** in the post-purchase education chain. The 3-metric dashboard is the **operational echo** of the micro-moment vocabulary introduced in PP-Education D0-21 E2 (Day 7). E2 introduces; L2-5 operationalizes. The two together complete the L2 micro-moment thread. L2-5's "or don't log at all" permission is the **same permission-not-to-buy frame** in measurement context — the brand trusts her to make her own decisions about data.

### 4.6 WINBACK A L2-1 ("It's been a while") — Day 90 post-purchase

**CONVERSION GATES.** G3 (BCBA respect) and G6 (permission) dominant. G1: implied (L2 context). G2: implied. G3: "your BCBA's protocol continues; we're here when you need the body-signal layer again." G4: implied. G5: implicit. G6: dominant — "No judgment — life with an L2 kid is full. I had two of these kids; some weeks I couldn't open email either." No upsell. No urgency. **NEVER "We miss you."**

**DEAD-END if ignored.** Post-purchase silence at D90. If missed, the silent post-purchase L2 reader has not been given a re-engagement path. Winback A pauses all nurture flows (per Demand §2.5); if Winback A L2-1 is missed, the rest of Winback A still fires but the entry is gone. Trust delta: +1 if re-engages; 0 if not.

**CROSS-FLOW CONTINUITY.** Winback A L2-1 is the **post-purchase re-engagement entry**; it is mutually exclusive with Winback B (never-bought). It pairs with PP-Mid Check-In E3 (D75, post-engaged) and Replenishment B2 (D90, engaged 3+3). D90 is the **bifurcation day** in the L2 sequence: engaged → B2; disengaged post-purchase → Winback A L2-1; never-bought → Winback B L2-1. L2-1's "I had two of these kids" is the **Lena-as-peer signal** that has been the trust anchor since Welcome E1.

### 4.7 WINBACK A L2-2 (New science insight) — Day 105

**CONVERSION GATES.** G2 (mechanism) and G4 (49% stat) dominant. G1: implied. G2: dominant — new study or framework since Lisa last engaged. Mahler update, SPARK data release, Nicholson 2019 deep-cite. Stat callout box. G3: implied. G4: implied. G5: implicit. G6: implied. L2 framing: scientific-evaluator re-engagement.

**DEAD-END if ignored.** Scientific re-engagement. If missed, the L2 reader has no fresh evidence to reactivate her scientific-evaluator mode. Trust delta: +1 if re-engages.

**CROSS-FLOW CONTINUITY.** Winback A L2-2 is the **science update** in the long-tail — it pairs with Welcome E5 (initial science deep-dive), PP-Ext Edu L2-1 (Mahler framework), and Winback B L2-2 (the never-bought version, harder-hitting on the science). The L2 science thread runs through Phase 1, Phase 4, and the FAQ library.

### 4.8 WINBACK A L2-3 (Guarantee) — Day 120

**CONVERSION GATES.** G5 (guarantee) and G6 (permission) dominant. G5: "Your 60-day guarantee has long passed, but the door is still open." G6: dominant — L2 LONG sign-off: "If this isn't the day, that's okay. The product will be here next month. So will I." Re-permission: pairs available, Lena available, no interrogation. G3: implied (BCBA protocol continues). G4: implied.

**DEAD-END if ignored.** Final post-purchase re-engagement. If missed, the L2 reader has not been given the door-stays-open moment at D120; she moves to Sunset E1 at D120+. Trust delta: +1 if re-engages; 0 if moves to Sunset.

**CROSS-FLOW CONTINUITY.** Winback A L2-3 is the **post-purchase door-closing moment** — one of the **four door-closing moments** in the L2 sequence (Welcome E8, Winback A L2-3, Winback B L2-3, Sunset E2). All four use the LONG sign-off in its deepest form. L2-3 is also the **last Lena-as-Lena moment** for the post-purchase re-engagement; after this, the next contact is Sunset E1 (re-permission check).

### 4.9 WINBACK B L2-1 ("It's been a while") — Day 60 (never-bought)

**CONVERSION GATES.** G2 (mechanism) and G4 (Lena) dominant. G1: implied. G2: dominant — mechanism refresh, no pressure. G3: implied. G4: "the body-signal layer is still the missing piece your BCBA's protocol can't address." G5: implicit. G6: implicit. **Never-bought skepticism is harder than post-purchase disengagement.**

**DEAD-END if ignored.** Never-bought silence at D60. If missed, the L2 reader has not been given a re-engagement path; she drops further into silence. Trust delta: +1 if re-engages.

**CROSS-FLOW CONTINUITY.** Winback B L2-1 is the **never-bought re-engagement entry**; mutually exclusive with Winback A. It is structurally similar to Browse E1 / Cart E1 (mechanism-dominant) but with the post-welcome context. L2-1's L2 unlock sentence ("the body-signal layer is still the missing piece") is the **post-welcome version** of the E2/E4 unlock sentence; the same content, refreshed for the never-bought segment.

### 4.10 WINBACK B L2-2 (New science insight) — Day 80 (never-bought)

**CONVERSION GATES.** G2 (mechanism) and G4 (49% stat) dominant. Same as Winback A L2-2 but **harder-hitting on the science** — never-bought needs more proof. Cite Mahler, Wiggins, SPARK. Stat callout box. G5 (guarantee) implicit; G6 (permission) present.

**DEAD-END if ignored.** Scientific re-engagement for never-bought. If missed, the L2 reader has no fresh evidence; she moves to Winback B L2-3 (D100). Trust delta: +1 if engages.

**CROSS-FLOW CONTINUITY.** Winback B L2-2 is the **never-bought science harder-hitter** — it pairs with Winback A L2-2 (the post-purchase version). The two are structurally parallel but with the never-bought version doubling down on mechanism proof. The 49% Wiggins stat in its mint-bordered callout box is the same L2 visual signature used in Welcome E2, E5, PP-Education D0-21 E3, and the FAQ library.

### 4.11 WINBACK B L2-3 (Guarantee + permission) — Day 100 (never-bought)

**CONVERSION GATES.** G5 (guarantee) and G6 (permission) dominant. G5: "60 days. By your judgment. If it doesn't shift the body-signal layer, full refund." G6: dominant — "Or — if this isn't the day — that's the real answer." L2 LONG sign-off. All six present lightly.

**DEAD-END if ignored.** Final never-bought re-engagement. If missed, the L2 reader has had three chances (D60, D80, D100); she has either already moved to Sunset or will move now. Trust delta: +1 if converts; 0 if not.

**CROSS-FLOW CONTINUITY.** Winback B L2-3 is the **fourth door-closing moment** in the L2 sequence. After this, the next contact is Sunset E1 (re-permission check). L2-3's "if it doesn't shift the body-signal layer, full refund" is the same 60-day language as Welcome E3, Cart E3, Browse E3, Checkout E2, FAQ E6, and the PP-Mid Check-In guarantee emails. The **60-day + permission thread** is the most-repeated language in the L2 sequence.

### 4.12 REFERRAL E1/E2/E3 — Post-purchase D30+

**CONVERSION GATES.** Reduced formula (cross-level). G4 (peer trust) dominant. L2 framing: "if you know another L2 family — one with the BCBA context, the sensory profile, the long road — send them this." Incentive: discount on next purchase. G6: "or don't share; the relationship stays the same."

**DEAD-END if ignored.** Referral ask. If missed, the L2 reader has not been invited to become a peer-recommender in the L2 community. The L2 referral is structurally the **altruism frame** — the discount is secondary to the community-building ask. Trust delta: +1 if shares; 0 if not.

**CROSS-FLOW CONTINUITY.** Referral E1 → E2 → E3 is the **peer-recommender chain** that follows the Review Request chain. The L2 reader who has written a review (D30/D60) and remains engaged at D30+ becomes a referral candidate. E1 introduces; E2 reinforces; E3 is the final ask with a "no thanks" option. The L2 framing explicitly names the BCBA context, sensory profile, and long road — the **L2-specific referral qualification** is what makes the ask resonate with the L2 reader's lived experience.

### 4.13 FAQ E1 — "Tried Everything" (D1)

**CONVERSION GATES.** Full 6-element formula. G1: dominant — "40+ methods. None addressed the body-signal layer." G2: implied. G3: "your BCBA's protocol was the closest — it just couldn't reach the sensory piece." G4: implied. G5: implicit. G6: implicit. 4-step reframe: Name → Validate → Reframe → Absolve. Defeated → Absolved. Cite SPARK 49%.

**DEAD-END if ignored.** Objection-handling for the most common L2 objection. If missed, the L2 reader's "I've tried everything" objection is unaddressed; she may move to Winback B or Sunset without ever having the wrong-problem reframe applied to her specific objection. Trust delta: +1.

**CROSS-FLOW CONTINUITY.** FAQ E1 is the **"tried everything" reframe** in the FAQ library — it pairs with Welcome E2 (the first "tried everything" acknowledgment via 3+ failed methods named) and Welcome E4 (the absolution via the L2 unlock sentence). E1 is the FAQ's purest articulation of the L2 wrong-problem reframe; Welcome E2 and E4 are the welcome-flow articulations.

### 4.14 FAQ E2 — "Too Old/Severe" (D4)

**CONVERSION GATES.** Full formula. G1: implied. G2: implied. G3: "your BCBA has seen late-trainers; the protocol is the same." G4: implied. G5: implicit. G6: implicit. Late-trainer stories. "Trained at 8, 9, 11 — the curve is wider than you think." Mahler citation. Hopeless → Empowered.

**DEAD-END if ignored.** Objection-handling for the age/severe objection. If missed, the L2 reader's age anxiety is unaddressed; she may interpret her child's 5-7 age as past the "window." Trust delta: +1.

**CROSS-FLOW CONTINUITY.** FAQ E2 is the **late-trainer reframe** — it pairs with Welcome E4 (the wrong-problem reframe), Mary S. Story E1 ("it took us 9 months"), and PP-Mid Check-In E3 ("some L2 families see the shift at week 12"). The four together form the **L2 long-arc patience frame**: 8–12 weeks for most, 9 months for Mary S., 12+ weeks for some, 8-11 years old for late-trainers.

### 4.15 FAQ E3 — "GI/Withholding" (B4)

**CONVERSION GATES.** Full formula. G1: GI symptoms. G2: dominant — "GI issues + body-signal gap = the proximal reason pottying stalled. The body-signal layer helps the nervous system register what the GI tract is already saying." G3: implied. G4: implied. G5: implicit. G6: implicit. Scared → Supported. Cite McElhanon et al. 2014.

**DEAD-END if ignored.** GI/withholding objection. The GI cluster is a **comorbidity fingerprint** of L2 (avatar §1); if missed, the L2 reader has no medical reframe for the proximal cause of her child's pottying stall. Trust delta: +1.

**CROSS-FLOW CONTINUITY.** FAQ E3 is the **GI reframe** — it pairs with the avatar §1 "Double A cluster" (SPD + GI), the Wiggins 2022 / SPARK citation thread, and PP-Ext Edu L2-3 (sensory bathroom setup, which addresses GI-adjacent sensory issues). The GI thread is structurally tied to the L2 comorbidity fingerprint and is the **medical anchor** in the FAQ library.

### 4.16 FAQ E4 — "Worth $30–50?" (C3)

**CONVERSION GATES.** G3 (math reframe) and G5 (guarantee) dominant. G3: "Less than two specialist copays. 60 days. By your judgment." G5: implicit. **Math reframe applies to L1-L2 ONLY; L3 NEVER math reframe** (per Demand §8.5 and §24). G6: implicit. Defensive → Valued.

**DEAD-END if ignored.** Cost objection. If missed, the L2 reader's financial objection is unaddressed; she may interpret $79.99 as another $80 mistake. Trust delta: +1.

**CROSS-FLOW CONTINUITY.** FAQ E4 is the **math reframe** — it pairs with Cart E2 (math reframe in the cart context) and PP-Direct Upsell E1 (math reframe in the bundle context). The math reframe is **allowed for L2 throughout** but **forbidden for L3** (per the L3-dignity rule). The math thread is the **commercial-acceptance thread** for L2 — it gives the L2 reader permission to evaluate the cost honestly.

### 4.17 FAQ E5 — "BCBA Compatibility" (B2) — **CRITICAL**

**CONVERSION GATES.** G3 (BCBA respect) dominant. **L2 unlock sentence in its purest form**: "Your BCBA has been doing the hard work for years. Body-signal learning is the missing layer their protocol can't address." Bi-weekly BCBA fact sheet referenced. G5: implicit. G6: implicit. Conflicted → Confident.

**DEAD-END if ignored.** The **highest-leverage L2 conversion asset.** If missed, the L2 reader has no operational guide for the BCBA conversation. She has the L2 unlock sentence from Welcome E2 and E4, but FAQ E5 is the **purely-articulated version** with the fact sheet. The fact sheet is the ammunition to bring to the next BCBA session; without FAQ E5, the ammunition is unanchored. Trust delta: **+2** (highest delta in the FAQ library).

**CROSS-FLOW CONTINUITY.** FAQ E5 is the **BCBA-respect purest articulation** — it pairs with Welcome E2 (first L2 unlock sentence), Welcome E4 (full L2 unlock sentence + paradox), Mary S. Story E1 (founder BCBA line), PP-Ext Edu L2-2 (BCBA Integration Tips), and Winback A L2-1 (post-purchase BCBA context). The six touchpoints form the **L2 BCBA-respect hexad**: founder → welcome → emotional → operational → practical → re-engagement. The hexad is the **structural backbone** of the L2 BCBA-respect engine.

### 4.18 FAQ E6 — "Hope-Crash Fear" (D3)

**CONVERSION GATES.** G5 (guarantee) and G4 (Lena) dominant. G5: "60 days. By your judgment. If the body-signal layer doesn't shift, full refund." G6: dominant — "The exit is the point. That's why it works." Cite Hample 2020. Protected → Safe to try.

**DEAD-END if ignored.** Hope-crash fear objection. If missed, the L2 reader's self-protection (after 40+ disappointments) is unaddressed; she may decline the offer not because of mechanism doubt but because of hope-crash fear. Trust delta: +1.

**CROSS-FLOW CONTINUITY.** FAQ E6 is the **hope-crash reframe** — it pairs with Welcome E3 (pre-purchase 60-day + permission), Cart E3 (cart 60-day + permission), Checkout E2 (checkout 60-day + permission), PP-Mid Check-In E2 (post-purchase 60-day decision window), PP-Mid Check-In E3 (60-day guarantee reinforcement), and the four Winback/Sunset door-closing moments. The **60-day + permission thread** is the most-repeated language in the L2 sequence; FAQ E6 is its purest articulation in the hope-crash context.

### 4.19 SUNSET E1 — Day 120 inactive (post-Winback)

**CONVERSION GATES.** G6 (re-permission) dominant. G3 (BCBA) implied. G4: implied. G5: implicit. G6: dominant — "Do you still want to hear from us? One-click preference update. No guilt; the door stays open." Lena voice. No commercial CTA.

**DEAD-END if ignored.** Silent post-Winback. If missed, the L2 reader has not been given a re-permission check; she moves to Sunset E2 (final farewell) without the re-engagement opportunity. Trust delta: 0 or +1.

**CROSS-FLOW CONTINUITY.** Sunset E1 is the **re-permission check** — the last chance before permanent suppression. It is structurally parallel to Winback A L2-1 ("It's been a while") and Winback B L2-1, but with a **one-click preference update** instead of a re-engagement CTA. The re-permission check is the **operational anchor** of the Sunset flow (per Demand §17.11).

### 4.20 SUNSET E2 — 4–7 days after E1

**CONVERSION GATES.** G6 (LONG sign-off) dominant. L2 LONG sign-off: "If this isn't the day, that's okay. The product will be here next month. So will I." Gentle farewell. "No response = suppressed for 6–12 months." G5 implicit; G3 implied.

**DEAD-END if ignored.** Permanent suppression. If missed, the L2 reader is added to the Master Suppression List and tagged `unengaged = True`. **The fourth door-closing moment** in the L2 sequence. The brand's relationship with this specific L2 reader is now paused for 6–12 months; she may re-enter the funnel only via the pop-up if she returns to brightkidco.com and re-signs up. Trust delta: 0. **HIGHEST PRIORITY** — Sunset suppresses ALL flows unconditionally (per Demand §2.5).

**CROSS-FLOW CONTINUITY.** Sunset E2 is the **structural end** of the L2 sequence. It is the only email in the system that **permanently terminates** a subscriber's relationship with the brand. The same LONG sign-off appears in Welcome E8, Winback A L2-3, and Winback B L2-3 — the four door-closing moments are **all** the same voice, the same permission, the same Lena-as-Lena. After E2, the only re-entry path is the pop-up on brightkidco.com — and when she returns, the L2 tag will be re-applied via Button 2, and the L2 sequence will re-fire from Welcome E1. **The L2 trust meter resets to 38/100 on re-entry.** The 3-Layer Trust Architecture (intellectual + emotional + relational) starts over.

### 4.21 PHASE 4 trust-continuity summary

| Email | Trust before | Trust after | Mode | Cross-flow bridge |
|---|---|---|---|---|
| PP-EXT-EDU L2-1 | 71 | 72 | Deepening | Mahler framework |
| PP-EXT-EDU L2-2 | 72 | 73 | BCBA collab | Fact sheet deep dive |
| PP-EXT-EDU L2-3 | 73 | 74 | Environmental | Sensory bathroom setup |
| PP-EXT-EDU L2-4 | 74 | 75 | Prompt-fading | Welcome E7 operational exit |
| PP-EXT-EDU L2-5 | 75 | 76 | Data reflection | 3-metric dashboard |
| WINBACK A L2-1 | 71 | 71–72 | Silent | "I had two of these kids" |
| WINBACK A L2-2 | 72 | 72 | Science | New study |
| WINBACK A L2-3 | 72 | 72–73 | Door open | LONG sign-off |
| WINBACK B L2-1 | 53 | 53–54 | Never-bought | Mechanism refresh |
| WINBACK B L2-2 | 53 | 54 | Never-bought science | Harder-hitting |
| WINBACK B L2-3 | 54 | 54 | Door open | LONG sign-off |
| REFERRAL E1/E2/E3 | 70–71 | 70–71 | Sharing | L2-specific referral |
| FAQ E1 | varies | +1 | Objection | "Tried everything" reframe |
| FAQ E2 | varies | +1 | Objection | Late-trainer reframe |
| FAQ E3 | varies | +1 | Objection | GI/withholding reframe |
| FAQ E4 | varies | +1 | Objection | Math reframe (L2 only) |
| FAQ E5 | varies | **+2** | Objection | **L2 unlock pure** |
| FAQ E6 | varies | +1 | Objection | Hope-crash reframe |
| SUNSET E1 | 70 | 70 | Re-permission | One-click update |
| SUNSET E2 | 70 | 70 | Final farewell | LONG sign-off; suppression |

**Phase 4 ending trust: ~76/100** (retained customer ceiling) or **~54/100** (never-bought ceiling) or **70/100** (Sunset exit). Trust is structurally reinforced for retained customers via the 5 L2-themed PP-Extended Education emails; never-bought L2 caps at ~54 because the body-signal layer's gains were never observed by the brand. The 3-Layer Trust Architecture reaches its **full structural form** at PP-Ext Edu L2-5; the L2 unlock sentence is a gravitational anchor through every Phase 4 email.

---

## 5. L2-SPECIFIC FLOW BEHAVIOR — SYNTHESIS

This section consolidates the per-email analysis into the L2-specific patterns: dominant gate per email, dead-end taxonomy, and the cross-flow continuity map.

### 5.1 Dominant gate per email (L2 cheat-sheet)

| Email | G1 symptom | G2 mechanism | G3 BCBA | G4 timeline | G5 guarantee | G6 permission |
|---|---|---|---|---|---|---|
| WELCOME E1 | mirror | — | MEDIUM sign-off | — | — | implicit (code) |
| WELCOME E2 | **3+ methods** | **interoception** | **L2 unlock** | **8–12 wk** | **60-day** | **explicit** |
| WELCOME E3 | implied | implied | implied | — | **dominant** | **dominant** |
| WELCOME E4 | paradox | loop | **dominant** | — | — | "sit with it" |
| WELCOME E5 | implied | **dominant** | implied | "builds slowly" | implicit | "read twice" |
| WELCOME E6 | **testimonials** | implicit | "I showed my BCBA" | "week 6 regression" | implicit | "if not yours, okay" |
| WELCOME E7 | loop | **dominant** | **dominant** | "8–12 weeks to break" | implicit | implicit |
| WELCOME E8 | recap | recap | recap | recap | recap | **LONG sign-off** |
| BROWSE E1 | 3 anchors | **dominant** | implied | implied | — | soft |
| BROWSE E2 | testimonial | **3-layer** | complement | implied | implicit | soft |
| BROWSE E3 | implied | implied | implied | soft | "60 days" | **dominant** |
| CART E1 | **R2 anchors** | rotation | implied | implied | — | "when ready" |
| CART E2 | Three-Family | implied | **BCBA-named** | implied | implicit | 1→3+3 helper |
| CART E3 | implied | implied | implied | "60 days" | **dominant** | **dominant** |
| CHECKOUT E1 | implied | implied | implied | implied | implicit | **dominant** |
| CHECKOUT E2 | implied | implied | implied | implied | **dominant** | "you decide" |
| ORDER E1 | — | — | — | — | recap | implicit |
| SHIPPING E1 | — | — | — | — | — | — |
| SHIPPING E2 | — | L2 patience frame | — | — | — | "give it time" |
| ARRIVED E1 | "notices wet" | wetness layer | BCBA stays | Week 1/2-4/4-8 | implicit | "no rush" |
| PP-DIRECT UPSELL E1 | — | — | **dominant** | — | — | helper |
| PP-DIRECT UPSELL E2 | — | — | BCBA-complement | — | implicit | 10% off |
| PP-MARY S. STORY E1 | founder | neurological | "not against her" | "9 months" | implicit | "not ready, okay" |
| PP-EDU D0-21 E1 | "watch for nothing" | implied | "alongside" | — | — | **"don't log yet"** |
| PP-EDU D0-21 E2 | micro-signs | "shifts his NS" | implied | — | — | "these ARE progress" |
| PP-EDU D0-21 E3 | regression | implied | "BCBA has seen" | **dominant curve** | implicit | "don't stop" |
| PP-EDU D0-21 E4 | "wet spot!" | implied | implied | — | — | "share a win" |
| PP-MID CHECKIN E1 | **Three-Family** | each family | each family | regression | implicit | "reply" |
| PP-MID CHECKIN E2 | implied | implied | implied | implied | **dominant** | **dominant** |
| PP-MID CHECKIN E3 | implied | implied | implied | "week 12" | **dominant** | **dominant** |
| PP-EXT UPSELL E1 | — | — | **dominant** | — | — | rotation helper |
| PP-EXT UPSELL E2 | — | — | — | — | — | helper |
| PP-EXT UPSELL E3 | — | — | implied | — | **"stands"** | **"leave relationship intact"** |
| REPLENISH A1 | — | wash guide | — | — | — | — |
| REPLENISH A2 | — | **rotation** | complement | — | — | helper |
| REPLENISH A3 | — | — | — | — | **dominant** | "ready for more, we're here" |
| REPLENISH B1 | — | — | complement | — | — | rotation |
| REPLENISH B2 | — | — | — | — | — | helper |
| REPLENISH C1 | — | — | "long-road toolkit" | — | — | — |
| REPLENISH C2 | — | — | — | — | — | accessory helper |
| REVIEW E1 | — | — | — | — | — | altruism |
| REVIEW E2 | — | — | — | — | — | "not ready, that's fine" |
| PP-SUPPORT E1 | — | — | — | — | — | "just checking in" |
| PP-SUPPORT E2 | — | wash | — | — | — | support |
| PP-SUPPORT E3 | — | **NS learning** | — | — | — | patience |
| PP-SUPPORT E4 | — | — | — | — | **dominant** | **dominant** |
| PP-EXT-EDU L2-1 | — | **Mahler 8** | "BCBA will recognize" | — | — | — |
| PP-EXT-EDU L2-2 | — | implied | **dominant (fact sheet)** | — | — | — |
| PP-EXT-EDU L2-3 | — | sensory minefield | OT-tested | — | — | — |
| PP-EXT-EDU L2-4 | — | **5-phase fading** | **"BCBA's domain"** | — | — | — |
| PP-EXT-EDU L2-5 | — | 3-metric | "data-driven" | — | — | **"or don't log"** |
| WINBACK A L2-1 | implied | implied | **dominant** | implied | implicit | **"no judgment"** |
| WINBACK A L2-2 | — | **new study** | — | — | — | — |
| WINBACK A L2-3 | — | — | implied | — | "long passed" | **LONG sign-off** |
| WINBACK B L2-1 | — | **dominant** | **dominant (L2 unlock)** | — | — | — |
| WINBACK B L2-2 | — | **harder science** | — | — | — | permission |
| WINBACK B L2-3 | — | — | — | — | **dominant** | **LONG sign-off** |
| REFERRAL E1/E2/E3 | — | — | L2-shaped ask | — | — | "or don't share" |
| FAQ E1 | **"40+ methods"** | implied | "closest" | — | — | — |
| FAQ E2 | — | implied | "BCBA has seen" | "trained at 8, 9, 11" | — | — |
| FAQ E3 | GI | **dominant** | implied | — | — | — |
| FAQ E4 | — | — | — | — | — | "by your judgment" |
| FAQ E5 | — | implied | **L2 unlock pure** | — | — | — |
| FAQ E6 | — | — | — | — | **dominant** | **"exit is the point"** |
| SUNSET E1 | — | — | — | — | — | **re-permission** |
| SUNSET E2 | — | — | — | — | — | **LONG sign-off; suppression** |

**Reading the matrix:** **bold = dominant gate** for that email. Welcome E2 is the only email where all six are simultaneously dominant — that is the conversion shift. Welcome E4 is the only email where G3 dominates AND the recognition moment fires — that is the emotional lock. FAQ E5 is the only post-Welcome email where G3 dominates alone — that is the highest-leverage post-purchase asset.

### 5.2 Dead-end taxonomy

The L2 sequence has **four dead-end types** that map to specific emails:

| Dead-end type | Trigger emails | What it costs |
|---|---|---|
| **Silent immunity** (delete-key reflex never released) | WELCOME E1 missed; BROWSE/CART/CHECKOUT E1 missed | Welcome E2 may still fire but trust is brittle; conversion rate drops ~50% |
| **Mid-funnel stall** (mechanism click doesn't fire) | WELCOME E2 missed; WELCOME E5 missed | She doesn't enter scientific-evaluator mode; L2 unlock sentence has no foundation; conversion collapses to ~5–10% |
| **Emotional lock failure** (recognition moment without absolution) | WELCOME E4 missed | Hope/realism stays at 40/60; she may buy from a competitor's mechanism-only pitch (i.e., the L1 email she deletes); trust ceiling capped at ~60/100 |
| **Post-purchase crash** (expectation spike uncalibrated) | SHIPPING E2 missed; PP-EDU D0-21 E1/E3 missed | Week 1–2 drop-off; Lisa interprets micro-signs as failure; guarantee risk spikes at D45–60 |

**The most expensive dead-end** is the mid-funnel stall. If WELCOME E2 is missed, the **6-element formula never lands**, and the entire L2 conversion engine has no foundation. Every other L2 email is calibrated to E2 having landed. This is why E2 is flagged as **CRITICAL** in the sequence spec.

**The most common dead-end** is the post-purchase crash. Lisa's data-driven instinct pushes her to over-log in Week 1; without SHIPPING E2's patience frame and PP-EDU D0-21 E3's curve normalization, she may interpret "no immediate voiding" as failure. This is why the **PP-Education workhorse** (D0/D7/D14/D21) is structurally protected.

**The least recoverable dead-end** is the emotional lock failure. If E4's absolution doesn't land, Lisa continues to carry the "I failed" frame; she may buy the product, but the L2 unlock sentence is unanchored, and her BCBA conversation is at risk. She becomes a buyer without a translator — the highest-risk retained-customer state.

### 5.3 Cross-flow continuity map — the L2 thread lines

Eleven threads run through the L2 sequence, each connecting multiple emails across phases:

| Thread | Emails | Function |
|---|---|---|
| **L2 unlock sentence** | E2, E4, FAQ E5, PP-Ext Edu L2-2, Mary S. Story, Winback A L2-1, Winback B L2-1 | The gravitational center; the L2 conversion engine |
| **60-day + permission** | E3, E8, Cart E3, Browse E3, Checkout E2, FAQ E6, PP-Mid Check-In E2/E3, Replenishment A3, PP-Support E4, Winback A L2-3, Winback B L2-3, Sunset E2 | Risk reversal; the L2 paradox in action |
| **49% Wiggins / SPARK** | E2, E5, Browse E2, PP-Edu D0-21 E3, FAQ E1, Winback A L2-2, Winback B L2-2 | Normalization; the L2 visual signature |
| **Mahler / interoception** | E2, E5, PP-Ext Edu L2-1, FAQ E2, Winback A L2-2, Winback B L2-2 | Mechanism depth; the L2 trust contract |
| **Lena MEDIUM sign-off** | E1, E2, E3, E4, E5, E6, E7, E8 (progression to LONG) | Peer-voice thread; the L2 trust anchor |
| **Lena LONG sign-off** | E8, Winback A L2-3, Winback B L2-3, Sunset E2 | The four door-closing moments; the deepest permission |
| **L2 patience frame** | SHIPPING E2, PP-Edu D0-21 E1/E3, PP-Mid Check-In E1, PP-Support E3, FAQ E2 | Expectation management; the L2 timeline patience |
| **Mary S. founder disclosure** | PP-Mary S. Story E1, PP-Ext Edu L2-2, PP-Ext Edu L2-4, FAQ E5 (implicit) | Founder-as-peer; the L2 trust exceptional moment |
| **Micro-moments vocabulary** | PP-Edu D0-21 E2, PP-Ext Edu L2-5 | The L2 observational language; data-driven moms get vocabulary |
| **BCBA-complement** | E2, E4, PP-Direct Upsell E1/E2, PP-Ext Upsell E1, PP-Ext Edu L2-2/L2-4, Mary S. Story, FAQ E5, Winback A L2-1, Winback B L2-1 | The L2 BCBA-respect engine; the L2 conversion path |
| **60-day-decision-window D60 cluster** | PP-Mid Check-In E2, Replenishment A3, Review E2 (all D60) | Triple D60 touchpoints; the L2 60-day convergence |

These eleven threads are the **structural backbone** of the L2 sequence. Every email in the L2 sequence is part of at least one thread; the strongest emails (Welcome E2, Welcome E4, FAQ E5) are part of four or more threads. The threads are the **continuity contract** — if any thread is broken (e.g., the Mahler citation is wrong, or the 60-day language is missing), the L2 reader experiences the email as marketing contamination, and trust drops.

### 5.4 Suppression & priority interactions (Demand §2.5)

The L2 flow behavior is governed by the priority chain. The practical implications:

- **Cart Abandonment active** → Welcome E3+ suppressed. Lisa is high-intent; the cart sequence has priority. Welcome E1/E2 already delivered remain delivered. She may convert from Cart E3 (72h) without ever seeing Welcome E3-E8.
- **Winback active** → ALL nurture flows paused. Lisa has been silent for 60+ days (B) or 90+ days (A); the winback sequence is the only way back in. Welcome/PP-Education/Replenishment are paused. The L2 trust meter does not advance during Winback.
- **Sunset active** → ALL flows suppressed unconditionally. Lisa is past D120 inactive; the re-permission check is the only contact. After Sunset E2, the relationship is paused for 6–12 months.
- **PP-Support At-Risk active** → regular PP-Education cadence pauses if open-rate drops. Lisa is silent; the support chain has priority.
- **PP-Level Detection** is GF-only and does NOT fire for L2. L2 is already tagged at signup via pop-up Button 2.

The L2 reader in Phase 1 who signs up but does not buy experiences the **Welcome → Winback B path**. The L2 reader in Phase 4 who engages past PP-Ext Edu L2-5 experiences the **long-haul advocate path**. The L2 reader in PP-Support At-Risk experiences the **silent recovery path**. The L2 reader in Sunset experiences the **permanent re-permission path**. **The four paths are the L2 journey arcs**, and the suppression/priority rules determine which arc each L2 reader enters.

### 5.5 L2-specific forbidden phrase risk per email

The forbidden-phrase audit is per-emaily, not per-flow. The highest-risk emails are those with the most temptation to over-promise:

| Email | Highest-risk forbidden phrase | Why the temptation is high |
|---|---|---|
| ARRIVED E1 | "Easy" / "Quick" | Maximum hope moment; team may want to over-deliver |
| PP-DIRECT UPSELL E1/E2 | "Bundle deal" / "Limited time" | Bundle math can become salesy |
| PP-EDU D0-21 E3 | "Don't give up!" / "You can do this!" | Week 2 reality is hard; cheerleading reflex |
| PP-EXT UPSELL E1/E2/E3 | "Last chance" / "Don't miss" | Bundle upgrade is naturally pressured |
| REPLENISHMENT A3 | "Now or never" | D60 is naturally pressured |
| WINBACK A L2-1 | "We miss you" | Re-engagement reflex |
| WINBACK B L2-3 | "Final offer" | Door-closing reflex |
| FAQ E1 | "You're not behind" | Risk: sounds like L1 cheerleading |
| FAQ E4 | "Only $X!" | Cost-pressure reflex |
| SUNSET E1 | "We'll be sad to see you go" | Guilt-tripping reflex |

**The single most dangerous L2 email** is any email that contains a forbidden phrase in the **mid-Welcome window** (E2–E6), because the L2 reader is in mid-conversion-evaluation and any trust-destroying phrase collapses the funnel. The emotional-trust map's trust deltas (–2 for forbidden phrase) are calibrated to this risk.

### 5.6 The 5 email pairs that move trust +2 (and why)

Per the emotional-trust map, five email positions in the L2 sequence are eligible for the +2 trust delta — the highest single-send movement. Each is a specific gate-conjunction:

| Email | Gate conjunction that earns +2 | Why both must fire |
|---|---|---|
| **WELCOME E2** | Recognition moment (3+ symptom matches) AND mechanism click ("oh, that's why") | The conversion shift — defensive-evaluation → scientific-evaluator. E2 is the densest trust-conversion moment in the entire L2 sequence. |
| **WELCOME E4** | Absolution ("you didn't fail. your BCBA didn't fail") AND wrong-problem reframe (school success is prompt-dependent) | The emotional lock. E4 is the emotional counterpart to E2's intellectual work. |
| **FAQ E5** | L2 unlock sentence in pure form AND BCBA fact sheet referenced | The highest-leverage post-purchase asset. Pure BCBA-respect + operational ammunition. |
| **PP-MARY S. STORY E1** | Founder disclosure (L2-like son, 9-month arc) AND BCBA-respect line ("we worked with our BCBA, not against her") | The founder-as-peer moment. Mary S. and Lena are never mixed; this is the only Mary S. email. |
| **WELCOME E6** | Three L2-shaped testimonials (real methods, real BCBA, real regression) AND no L1 splice | The community anchor. L2 needs L2 contexts; splicing in L1 testimonials collapses trust. |

The five +2 emails are the **highest-leverage moments in the L2 sequence.** Each is structurally distinct (recognition + mechanism, absolution + reframe, unlock + fact sheet, founder + BCBA, community + L2-context). The 6-element pre-flight is calibrated to keep these at +2 and to prevent the +3 risk (over-explanation collapses to marketing perception per the emotional-trust map §6.3).

### 5.7 The 4 door-closing moments and the LONG sign-off

| Position | Day | LONG sign-off | What it closes |
|---|---|---|---|
| **Welcome E8** | Day 21 | "If this isn't the day, that's okay. The product will be here next month. So will I." | Welcome Flow — pre-purchase |
| **Winback A L2-3** | Day 120 post-purchase | Same | Winback A — post-purchase re-engagement |
| **Winback B L2-3** | Day 100 (never-bought) | Same | Winback B — never-bought re-engagement |
| **Sunset E2** | Day 120+ inactive | Same | Sunset — permanent re-permission check |

All four use the same LONG sign-off — **Lena-as-Lena, the deepest permission sentence in the brand.** The repetition is structural: the L2 reader who reaches any of these moments has been through the full trust meter arc, and the LONG sign-off is the **one sentence that holds across all four**. Welcome E8 is permission pre-purchase; Winback A/B is permission after disengagement; Sunset is permission after permanent disengagement. The four together are the **L2 trust closure architecture**.

### 5.8 The 5 critical emails (highest single-send cost if missed)

| # | Email | Cost of missing |
|---|---|---|
| 1 | **WELCOME E2** | Conversion shift fails. E2 is the foundation; without it, the L2 unlock sentence has no basis. |
| 2 | **WELCOME E4** | Emotional lock fails. Absolution never lands; she remains a buyer without a translator. |
| 3 | **SHIPPING E2** | Expectation-management frame uncalibrated. Week 1 drop-off risk spikes. |
| 4 | **PP-EDU D0-21 E3** | Week 2 reality check missed. Common drop-off point; regression normalization unanchored. |
| 5 | **FAQ E5** | BCBA-conversation path unanchored. L2 unlock sentence in pure form never lands in the FAQ library. |

These five are the **structural pillars** of the L2 sequence. Each is a single point of failure: missing it cascades into downstream emails being weaker, less contextually-prepared, and less effective. The pre-flight 6-element check (per Demand §23) is the operational defense; the emotional-trust map's risk flags (§6.1–6.3) are the analytical defense.

### 5.9 What the L2 reader experiences if the entire sequence is honored

If every email lands with the 6-element pre-flight enforced, if every forbidden phrase is caught, if every BCBA-respect frame is preserved, if every permission-not-to-buy is explicit or implicit, the L2 reader experiences the following:

- **Day 0:** A welcome that survives her 30-second filter.
- **Day 1:** The mechanism click. "Oh, that's why."
- **Day 3:** The 60-day language. "By your judgment."
- **Day 7:** The absolution. "I didn't fail. My BCBA didn't fail."
- **Day 10:** The science. "Mahler, Wiggins, SPARK."
- **Day 14:** The community. "These are families like mine."
- **Day 17:** The operational detail. "The prompt-dependency loop, named."
- **Day 21:** The door-stays-open. "If this isn't the day."
- **Day 1–7 post:** The first-wear protocol. "Don't log yet."
- **Day 7–14 post:** The observation guide. "These ARE progress."
- **Day 14–21 post:** The week 2 reality. "Some kids respond by day 3. Others by day 30."
- **Day 21 post:** The first micro-win. "He looked at the wet spot!"
- **Day 45 post:** The peer anchor. "Three families, day 45."
- **Day 60 post:** The decision window. "60 days. By your judgment. Your next decision is yours."
- **Day 75 post:** The guarantee reinforcement. "Or stay with us longer; some L2 families see the shift at week 12."
- **Day 30–180 post:** The bundle ladder, the review ask, the silent recovery chain (if needed), the long-haul advocate path.
- **Day 30, 50, 70, 100, 130 post:** The Mahler deep-dive, the BCBA fact sheet, the sensory bathroom, the prompt-fading, the data dashboard.
- **Day 60–120 inactive (or never-bought):** The Winback, the FAQ library, the Sunset, the LONG sign-off.

This is the L2 experience **as engineered**. Every email is part of at least one thread; the strongest are part of four or more. The 3-Layer Trust Architecture (intellectual + emotional + relational) reaches its full structural form at PP-Ext Edu L2-5. The L2 trust meter ends at ~76/100 for retained customers — the **highest trust ceiling of any level**.

### 5.10 The single most important cross-flow insight

The L2 sequence is **not a sequence of emails**. It is **a sequence of trust-contracts**. Each email is a small contract between the brand and the L2 reader: *I will explain something you haven't heard; I will respect your BCBA; I will not promise magic; I will let you leave.* The 6-element pre-flight is the contract template; the L2 unlock sentence is the contract's gravitational center; the forbidden-phrase audit is the contract's negative space. The L2 reader is not buying a product — she is **renewing or terminating the contract** with each email open or close.

When the contract is honored, the L2 reader moves from defensive-evaluation to scientific-evaluator to cautious-investor to cautious-retention to brand-advocate — and the trust meter advances from 38 to 76. When the contract is broken (forbidden phrase, BCBA criticism, fake urgency), the meter drops 2-4 points in a single send, and the **conversion shift** (the single most important transition in the sequence) may not survive.

**The L2 conversion engine is the contract.** Every email is a renewal. Every ignored email is a contract that is held but not signed. Every dead-end is a contract that the L2 reader chose to walk away from. The flow behavior is the **state machine** of that contract — the engineering spec for how each renewal or termination changes the L2 reader's trust state, and what the next email must do to keep her in the system.

---

## 6. CROSS-REFERENCES & DEPENDENCIES

- **Avatar:** `journey-l2-01-avatar.md` §1–§11 (especially §3 hope/realism, §4 trust threshold, §6 hope/realism across stages, §10 the one thing)
- **Sequence:** `journey-l2-02-sequence.md` §1–§12 (especially §7 6-element formula, §11 L2 unlock sentence appearances, §9 sign-off progression)
- **Emotional Trust:** `journey-l2-03-emotional-trust.md` §0–§9 (especially §0.1 trust axiom, §5 consolidated trust meter, §6 risk flags, §7 emotional signature)
- **Demands:** `GIULIANO-DEMANDS.md` §2.5 (cross-flow suppression), §17 (deliverability), §18 (Phase 1 scope), §23 (L2 6-element formula), §24 (per-phase forbidden), §8.5 (L2 forbidden phrases), §8.6 (L2 most dangerous word "Quick")
- **Inconsistencies flagged:** I05 (PP-Mid Check-In timing), I07 (Review Request timing), I08 (Sunset trigger), I09 (Mary S. Story phase), I12 (PP-Ext Edu timings inferred), I13 (PP-Ext Edu phase), I14 (Winback A phase)
- **Copy references:** `outputs/copy/welcome/welcome-01-e[1-8]-l2.md`, `outputs/copy/winback-a/winback-a-19-e3-l2.md`, `outputs/copy/faq/faq-20-e5-l2.md` (the L2 unlock sentence in purest form)

---

> **End.** The L2 flow behavior is engineered around **gates, dead-ends, and continuity.** The six gates (Demand §23) do not change across the sequence; what changes is which gate dominates which email. The dead-end taxonomy maps to four risk types — silent immunity, mid-funnel stall, emotional lock failure, post-purchase crash — and the cost of each is calibrated to the trust meter. The eleven cross-flow threads (L2 unlock, 60-day + permission, 49% Wiggins, Mahler, Lena MEDIUM/LONG, L2 patience, Mary S. founder, micro-moments, BCBA-complement, D60 cluster) are the **structural continuity contract** that runs through every email. **Marketing polish triggers her skepticism; mechanism specificity converts her. Permission-not-to-buy is the lever that paradoxically accelerates conversion. The L2 trust ceiling is 76/100 — the highest of any level — and once earned, L2 trust is the most durable.** *Your BCBA has been doing the hard work. Body-signal learning is the missing layer.*

