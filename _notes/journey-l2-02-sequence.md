# EMAIL SEQUENCE — LEVEL 2 (LISA)

> **Reference document for Stage 1 subagents.** The complete chronological L2 email sequence — every email Lisa receives from signup through sunset, with day timing, copy strategy, 6-element formula check, BCBA-respect compliance, forbidden-phrase audit, and CTA style per email. Grounded in `journey-l2-01-avatar.md` (Lisa profile), `strategy-macro.json` (22 flows / 130 positions filtered to L2), and the locked `locked-profile.json`. Internal version: 2026-06-28.

---

## 0. HOW TO USE THIS DOCUMENT

This is the **single source of truth** for the L2 email sequence. It does not contain finished copy; it contains the **engineering spec** for every email — what it must do, what it must avoid, what the L2 mom needs at that exact moment of her journey. Stage 2 copy agents use this to draft; Stage 3 designers use the visual rules; Stage 4 QA agents use the forbidden-phrase and 6-element checklists.

**Three non-negotiable contracts** govern every email Lisa receives:

1. **The 6-Element L2 Formula** (Demand §23): every email with a CTA must contain (1) symptom recognition naming 3+ failed methods, (2) mechanism specificity (interoception explained, not vague), (3) BCBA/OT acknowledgment framed as complement, (4) realistic timelines ("8–12 weeks, some longer"), (5) 60-day guarantee surfaced, (6) permission-not-to-buy. **Unchecked = DO NOT SEND.**
2. **BCBA never rules**: always complement, never replacement. ❌ "ABA doesn't work for potty training" → ✅ "Your BCBA has been doing the hard work for years." ❌ "Your BCBA missed this" → ✅ "ABA + Body-Signal = both pieces."
3. **Forbidden phrase audit**: Easy, Simple, Quick, Guaranteed, Miracle, Cure, Fix, Solve, "Just trust the process," "Don't give up!," "Your child should…," "Have you tried [obvious]?," "Just be more consistent," NT-comparison language, aggressive BCBA criticism, fake urgency, countdown timers. All forbidden brand-wide; "Quick" is Lisa's most dangerous word (Demand §8.6).

**L2 calibration snapshot** (per `strategy-macro.json`):
- **Science density:** HIGH
- **Empathy:** HIGH
- **CTA aggression:** LOW
- **Urgency allowed:** Low (countdown timers NEVER)
- **Energy:** Clinical warmth
- **Dangerous word:** Quick
- **Hope/realism ratio:** 40/60 (entering) → 35/65 (conversion) → 40/60 (transactional) → 40/60 (PP early) → 35/65 (PP mid) → 35/65 (lifecycle)
- **Primary offer:** 3+3 bundle ($79.99) — realistic L2 entry
- **Sign-off progression:** E1–E2 "Talk soon," → E3–E5 "With understanding," → E6+ "With care,"

The **L2 unlock sentence** is the brand's deepest conversion lever and the backbone of every L2 email: *"Your BCBA has been doing the hard work for years. Body-signal learning is the missing layer their protocol can't address."* Every L2 sentence is in service of this one.

---

## 1. CHRONOLOGICAL OVERVIEW

The L2 journey divides into **four temporal phases**:

- **Phase 1 — Pre-Purchase (signup → day ~21)**: 9 flows fire. Welcome Flow (8 emails) carries the conversion shift from defensive-evaluation to scientific-evaluator. Browse/Cart/Checkout Abandonment fires on behavioral triggers. PP-Level Detection (gf-only) does NOT fire for L2 (they're already level-tagged). Suppression rule: Cart Abandonment suppresses Welcome E3+ during active cart.
- **Phase 2 — Transactional & PP Early (purchase → day ~21 post)**: 8 flows fire. Order Confirmation, Shipping & Out for Delivery, Arrived & Welcome, PP-Direct Upsell, PP-Mary S. Story, PP-Education D0-21. PP-Level Detection still inactive (tagged). Mary S. Story placement disputed (I09).
- **Phase 3 — PP Mid & Replenishment (day ~22 → day ~90 post)**: 6 flows fire. PP-Mid Check-In (3 emails), Replenishment A/B (5 emails total in sub-flows), Review Request (2 emails), PP-Extended Upsell (3 emails), PP-Support At-Risk (conditional on no-opens).
- **Phase 4 — Long-Tail (day 90+ post)**: 5 flows fire. PP-Extended Education (5 L2-themed emails), Winback Path A (3 L2-themed emails, 90d no engagement), Winback Path B (3 L2-themed emails, 60d no purchase — never-bought subset), Referral Flow (3 emails), FAQ/Objection Library (6 emails, Phase 3 trigger), Sunset (2 emails, 120d inactive).

**Total L2 emails from signup through sunset: ~46 distinct email positions** (welcome 8 + abandonment 8 max + transactional 4 + PP-edu 4 + PP-upsell 2 + PP-support 4 conditional + replenishment 2–5 by sub-flow + review 2 + PP-extended-edu 5 + winback 3 + winback-B 3 + referral 3 + faq 6 + sunset 2 = 53 nominal positions, ~46 de-duplicated by suppression rules). Note: browse/cart/checkout abandonment only fire on behavioral triggers; not every L2 receives all of them. Winback A and Winback B are mutually exclusive (purchaser vs never-bought). PP-Support At-Risk only fires on no-open triggers. Sunset terminates all flows.

**Suppression hierarchy** (per `strategy-macro.json` cross-cutting notes): Cart Abandonment suppresses Welcome E3+ during active cart; Winback (Path A or B) pauses ALL nurture flows while active; Sunset suppresses ALL other flows unconditionally.

---

## 2. PHASE 1 — PRE-PURCHASE (SIGNUP → DAY ~21)

This is the conversion phase. Lisa enters in **defensive-evaluation mode** — not waiting to be persuaded; waiting to be allowed to trust. Her internal monologue: *"If they say 'miracle,' I'm out. If they say 'works in 3 days,' I'm out. If they don't mention his nervous system, I'm out. If they badmouth my BCBA, I'm out."* The phase must produce the **conversion shift** — from skeptic to scientific-evaluator — via the recognition moment (3+ symptom matches) coinciding with the mechanism click ("oh, that's why"). When both fire, hope/realism shifts from 40/60 to ~55/45, and the email sequence has done its job.

### 2.1 WELCOME FLOW — FLOW 1 (8 emails, level-specific)

The Welcome Flow is the heart of L2 conversion. **Every email must contain all 6 elements of the L2 formula** per Demand §23, except E1 and E5 which are pure observation/validation and pure mechanism respectively (still recognizable as L2 by voice, BCBA-respect language, and clinical-warmth energy). Missing any one element in emails E2/E3/E4/E6/E7/E8 breaks conversion. **Pre-flight checklist enforced before send.**

#### WELCOME-01-E1-L2 — Day 0 (immediate)
- **Subject line options** (no exclamation marks, no urgency words, no "Quick"/"Easy"):
  - "Welcome — and a thank you for reading this far"
  - "Your WELCOME10 code is here"
  - "From Lena — and what brought me to this work"
- **Primary lever:** L4 (Lena Peer Trust)
- **Objections addressed:** D2 (self-blame), C1 (unknown brand)
- **Copy strategy:** Welcome + WELCOME10 code. Mirror: "You've tried BCBA, OT, social stories, sticker charts, every potty book, every consultant… and nothing's clicking." Lena introduction — mom of two sons (one trained at almost 8, the L2-like path). Sign-off: "Talk soon,"
- **6-element check:** Partial (E1 is intro/observation; does not require all 6 yet, but voice and BCBA-respect must be unmistakably L2).
- **Forbidden-phrase audit:** No "Welcome!" exclamation cascade, no "Quick results," no "Easy." Lena intro is observational, not evangelical.
- **CTA style:** Muted green button, 48px min height, NOT full-width. Wording: "Read the science when you're ready" (NOT "BUY NOW"). Permission-not-to-buy implicit — "no rush, the code will be here."
- **Visual:** Mint (#DBFFCD) + white, no countdown timer, soft shadows on cards, 12–16px border-radius. Lena signature is the MEDIUM variant: name + "Mom of two autistic sons (one 6, one trained at almost 8)."
- **L2-specific micro-detail:** Lena's sons reference grounds the peer-trust without evangelizing. The "trained at almost 8" disclosure is the L2 unlock: it tells Lisa Lena knows the long road, not the Pre-K short arc.

#### WELCOME-01-E2-L2 — Day 1 (next day)
- **Subject line options:**
  - "Why nothing has worked yet"
  - "The layer nobody talks about"
  - "Body signals, and what's missing"
- **Primary lever:** L1 (Sensory Gap) + L2 (Pull-Ups Harm) + L5 (49% Stat)
- **Objections addressed:** D1 (tried everything), B2 (BCBA trust)
- **Copy strategy:** THE CRITICAL L2 EMAIL. **6-Element Formula MANDATORY in full.** Name 3+ failed methods by name (sticker charts, Oh Crap, every-30-min timers, "feel the wet" underwear, naked weekends, social stories). Explain why each failed (assumed a signal the nervous system couldn't generate). Introduce interoception specifically — "the interoceptive system senses internal body states. For autistic children, this signal often arrives late, weak, or not at all." Mahler cited as "interoception researcher," NOT "our partner." Wiggins 2022 SPARK stat framed in mint-bordered callout box: *"49% of autistic 4–5 year olds are not toilet trained. Source: SPARK study, Wiggins et al. 2022."* BCBA sentence: *"Your BCBA has been doing the hard work for years. Body-signal learning is the missing layer their protocol can't address."* Realistic timeline: "8–12 weeks for most kids. Some longer." 60-day guarantee surfaced. Permission-not-to-buy: "If this isn't the day, that's okay."
- **6-element check:** FULL — (1) symptom recognition: 3+ methods named; (2) mechanism: interoception explained; (3) BCBA: complement framing; (4) timeline: 8–12 weeks; (5) guarantee: 60-day; (6) permission: explicit. **DO NOT SEND WITHOUT ALL 6.**
- **Forbidden-phrase audit:** Zero tolerance. No "Quick." No "Easy." No "Just trust the process." No BCBA criticism. No "Your child should…"
- **CTA style:** Muted green, soft-action wording: "See the science" / "Read the full story" / "Try it for 60 days" — never "BUY NOW."
- **Visual:** Mint-bordered callout box around the 49% stat and the Mahler citation. Photography: real kid 5–7 in real sensory context. Sign-off: "Talk soon," (Lena).

#### WELCOME-01-E3-L2 — Day 3
- **Subject line options:**
  - "60 days. By your judgment."
  - "After everything you've tried, skepticism is smart"
  - "The guarantee, and why it's there"
- **Primary lever:** L3 (Guarantee) — strong
- **Objections addressed:** D3 (hope-crash fear), C3 (worth $?)
- **Copy strategy:** 60-day guarantee made prominent. "After everything you've tried, skepticism is smart. 60 days. By your judgment. If nothing shifts in his body's signal, full refund — no return shipping, no restocking fees, no interrogation." Permission-not-to-buy is STRONG here — Lisa needs to feel she's deciding, not being chased. Mirror her skepticism: "You've been promised results before. By people who didn't ask about his nervous system, his sensory profile, his BCBA protocol." Reframe the guarantee as the brand's accountability, not a sales tool.
- **6-element check:** All 6 present; mechanism is implied (body-signal layer) rather than fully explained — that's E2's job. This email's job is **risk reversal**.
- **Forbidden-phrase audit:** No "risk-free" (insurance jargon, Lisa rejects). No "you deserve" (guilt framing). No countdown. No "limited time."
- **CTA style:** Single soft button: "Try it for 60 days" — explicitly surface the guarantee in the button label.
- **Visual:** Cream card background with mint-bordered 60-day frame. Lena MEDIUM sign-off: "With understanding,"
- **L2-specific micro-detail:** "By your judgment" is the L2 phrase — it transfers evaluation authority to Lisa. L1 gets "decide before Pre-K"; L3 gets "when you're ready." L2 gets the rational voice: *you* assess, *you* decide.

#### WELCOME-01-E4-L2 — Day 7
- **Subject line options:**
  - "You didn't fail. Your BCBA didn't fail."
  - "The missing piece, named"
  - "What school gets right (and home doesn't)"
- **Primary lever:** L1 (Sensory Gap) + L2-A (BCBA complement)
- **Objections addressed:** B2 (BCBA trust), regression fear
- **Copy strategy:** Deep reframe — *"You didn't fail. Your BCBA didn't fail. The approach missed the body-signal piece."* Name the prompt-dependency cycle explicitly: *"Went 4/4 today!" at school, no initiation at home — the school success is prompt-dependent; without the prompt, nothing fires.* This is the "trained at school, not at home" paradox (avatar §1, §2.3). Frame ABA + Body-Signal = both pieces. The L2 unlock sentence gets its full airing here: BCBA built the behavior piece, this adds the sensory layer. Mary S. story anchor allowed in L2 (per avatar §6, "Mary S. story at the right moment, Phase 2" — used sparingly in Welcome E4 if context is right, otherwise held for PP).
- **6-element check:** All 6. Symptom recognition via the school/home paradox. Mechanism click via prompt-dependency. BCBA-respect sentence. Timeline ("the body-signal layer builds slowly"). Guarantee (briefly). Permission ("you can take this to your BCBA next session, or sit with it for a few days").
- **Forbidden-phrase audit:** No "your BCBA should have…" — only the missing-layer frame.
- **CTA style:** Two soft paths: "Show your BCBA" / "Read the body-signal science."
- **Visual:** Photo micro-moment: "Mom's hand on his shoulder during a sensory moment" (avatar §9, L2 image language). Lena sign-off: "With understanding,"

#### WELCOME-01-E5-L2 — Day 10
- **Subject line options:**
  - "The science, in detail"
  - "Mahler, Wiggins, SPARK — and what they tell us"
  - "Interoception, defined"
- **Primary lever:** L1 (Science depth) + L5 (49% Stat)
- **Objections addressed:** D4 (age anxiety) — softened
- **Copy strategy:** Science deep-dive. Mahler cited as "interoception researcher" (NOT "our partner") — *"Kelly Mahler, an interoception researcher whose work many BCBAs reference, describes 8 interoceptive senses, including the one for bladder and bowel."* Wiggins 2022 / SPARK (49%) in mint-bordered callout box. Nicholson 2019 and Iqbal 2022 citations. SPARK forum mention — Lisa recognizes her own research habitat. NO product pitch in this email; pure mechanism education. She's a scientific evaluator now; feed her data.
- **6-element check:** Mechanism-dominant (this is the mechanism email). Symptom recognition is implied (her presence in the body). BCBA-respect: "your BCBA's protocol was never designed to address this — that's not its job." Timeline: "the body-signal layer builds slowly, like language, like motor skills." Guarantee: implicit. Permission: "read this twice if you need to."
- **Forbidden-phrase audit:** No AI-isms. No "leverage," no "transform," no "revolutionary." Citations are real; naming them properly is the trust signal.
- **CTA style:** Read-only path: "Read the original study" / "Bookmark this email." No commercial CTA.
- **Visual:** Stat callout boxes (the L2 visual signature) around every citation. Cream + mint. Lena sign-off: "With understanding,"

#### WELCOME-01-E6-L2 — Day 14
- **Subject line options:**
  - "What other L2 families have seen"
  - "Stories from the BCBA context"
  - "Real progress, real timelines"
- **Primary lever:** L4 (Peer Trust)
- **Objections addressed:** D1 (residual), regression fear
- **Copy strategy:** L2-specific testimonials. **Length matters: 10–15 sentences each.** Real regression cycles, real BCBA context, real sensory language. No "potty trained in a week!" — that's L1's voice and it destroys L2 credibility. Three testimonials if room, each ~150 words: (1) the mom whose kid was prompt-dependent at school for 18 months; (2) the mom whose BCBA integrated body-signal learning into the protocol after seeing the fact sheet; (3) the mom whose kid regressed at week 6 and recovered by week 10. Messy success stories work best. Every testimonial includes "I showed my BCBA" / "we adjusted the protocol" / "it wasn't linear." Avoid perfectly tidy arcs.
- **6-element check:** All 6 via the testimonial arc. Symptom recognition (the family "looks like us"). Mechanism click (the body-signal layer explained in their words). BCBA-respect (every testimonial names the BCBA as collaborator). Timeline (regression cycles named). Guarantee (implicit). Permission (Lena's framing: "If their stories don't match yours, that's okay").
- **Forbidden-phrase audit:** Testimonials must not contain "amazing," "incredible," "life-changing," "best decision I ever made." All forbidden brand-wide; for L2 they read as marketing contamination.
- **CTA style:** Soft: "Read another story" / "Share with your BCBA."
- **Visual:** Photography (NOT illustration) of real kids in real sensory contexts. Lena sign-off: "With care," (E6+ transition).

#### WELCOME-01-E7-L2 — Day 17
- **Subject line options:**
  - "The prompt-dependency loop, named"
  - "Why the bathroom routine fires at school but not at home"
  - "What 'compliance' actually is"
- **Primary lever:** L2-D (Beyond prompt-dependence)
- **Objections addressed:** B2 (BCBA protocol depth)
- **Copy strategy:** Deeper mechanism — prompt-dependency loop explained at length. *"Your child has been trained to comply. We help them feel."* The body-signal layer is the shift from external-cue toileting to internal-cue toileting. Cite the cycle: prompt → compliance → voiding → no internal association → no generalization → prompt needed again. Break the cycle by giving the body a signal it can register (the wetness-sensing layer), repeated enough times that the interoceptive signal gains strength. This is the L2 unlock mechanism in detail — the email that says "this is why your BCBA's protocol couldn't crack it, and this is what cracks it." Clinical warmth — the warmth of a thoughtful specialist, not a peer-mom.
- **6-element check:** All 6. Mechanism is the focus. Symptom: the loop. BCBA: "your BCBA built the behavior side; the prompt-dependency is a feature of behavior-only training, not a failure of your BCBA." Timeline: 8–12 weeks to break the loop, longer to generalize. Guarantee. Permission.
- **Forbidden-phrase audit:** No "easy fix," no "breakthrough."
- **CTA style:** Single soft: "Read the body-signal research." Or: "Show your BCBA the cycle."
- **Visual:** Mint-bordered explainer box for the prompt-dependency loop. Lena sign-off: "With care,"

#### WELCOME-01-E8-L2 — Day 21
- **Subject line options:**
  - "The door stays open"
  - "From Lena — a thank you, whatever you decide"
  - "Wherever you go from here"
- **Primary lever:** L4 (Lena Peer Trust)
- **Objections addressed:** None (farewell)
- **Copy strategy:** Gentle close. Door open. FAQ path link (cross-flow to Flow 20 if she lingers past D21 without purchase). Lena farewell with sons reference — *"I had two L2-like sons. One trained at almost 8. The path is long, but it bends."* Permission: *"If this isn't the day, that's okay. The product will be here next month. So will I."* This is the L2 LONG sign-off variant — the deepest permission sentence in the brand. Do NOT add a discount. Do NOT add urgency. The door-stays-open frame IS the conversion lever for L2 at this stage; pressure would collapse it.
- **6-element check:** All 6 (final recap). Symptom recognition implicit. Mechanism recap (one paragraph). BCBA-respect. Timeline. Guarantee. Permission (the LONG sign-off IS the permission).
- **Forbidden-phrase audit:** No "last chance," no "expires," no "final offer."
- **CTA style:** Soft text link: "Reply to this email" (high-trust invitation) / "Visit the FAQ" / "Read the science library." No buttons competing for attention.
- **Visual:** Cream + soft earth, minimal. Lena LONG sign-off: "With care, Lena."
- **Decision point:** Day 21. If purchase → transition to Phase 2. If no purchase → linger in PP-Education or drop to FAQ/Objection Library (Phase 3) or Winback Path B (60d no purchase).

### 2.2 BROWSE ABANDONMENT — FLOW 4 (3 emails, cross-level with L2 framing)

Triggered when L2 views product pages but does not add to cart. Timing per `strategy-macro.json` §4.4: 24h / 3d / 7d. **Cross-level body with L2-specific framing in stat boxes and BCBA language.**

#### BROWSE-04-E1 — 24 hours after browse
- **Primary lever:** L1 (Mechanism education hook)
- **Copy strategy:** Mechanism education hook. *"You were looking at something that helps kids who can't feel when they need to go."* No CTA on product; redirect to the science. L2 framing: include the sensory-gap language; do not include Pre-K urgency (that's L1's). Cite Mahler lightly. 3 recognition anchors (avatar §6, cross-level R2): "trained at school not at home," "knows the concept but can't translate," "BCBA protocol that's working but not transferring home."
- **6-element check:** Mechanism-dominant (this email's job). Other elements present lightly.
- **CTA:** "Read how body-signal learning works."

#### BROWSE-04-E2 — 3 days
- **Primary lever:** L1 + L4 (Peer Trust)
- **Copy strategy:** Deep mechanism + product education. *"Here's why the 3-layer system works differently."* One L2 testimonial (Three-Family Pattern inclusion if space permits). Stat callout box on the 49% Wiggins number. L2 framing: "Your BCBA's protocol addresses the behavior layer; this addresses the sensory layer." No commercial pressure.
- **CTA:** "Read the engineering behind the layers."

#### BROWSE-04-E3 — 7 days
- **Primary lever:** L3 (Guarantee)
- **Copy strategy:** 60-day guarantee + gentle close. *"60 days for your child's nervous system to start connecting the dots."* Door stays open. L2-specific permission: "If today isn't the day, that's a real answer."
- **CTA:** "Try it for 60 days, by your judgment."

### 2.3 CART ABANDONMENT — FLOW 2 (3 emails, cross-level with L2 framing)

Triggered when L2 adds to cart but does not check out. **Suppression rule: Cart Abandonment SUPPRESSES Welcome E3+ during active cart** (per `strategy-macro.json` cross_cutting_notes). Timing: 1h / 24h / 72h.

#### CART-02-E1 — 1 hour after cart-add
- **Primary lever:** L1 (Sensory Gap)
- **Copy strategy:** Mechanism reminder. *"You added the 3+3 bundle. Here's why L2 families buy it — it's the rotation that lets the body-signal layer build consistently."* Lena voice: "I saw these were on your mind…" Recognition triggers R2 (3–5 anchors). L2-specific anchors: "school success that doesn't transfer home," "the 45-minute sit," "the wet spot he looked at."
- **6-element check:** Symptom recognition + mechanism. Other elements brief.
- **CTA:** "Return to your cart when you're ready." (Soft return, not aggressive.)

#### CART-02-E2 — 24 hours
- **Primary lever:** L4 (Peer Trust) + L2 (Pull-Ups)
- **Copy strategy:** Social proof + product value. Three-Family Pattern (one testimonial per level path; the L2 testimonial names the BCBA). Dynamic content: if cart is 1-pair, position 3+3 as the rotation L2 families use. *"Most parents who start with 1 pair add the 3+3 within a week — the body-signal layer builds with consistent wear, and rotation matters."*
- **CTA:** "See the 3+3 bundle" / "Read L2 family stories."

#### CART-02-E3 — 72 hours
- **Primary lever:** L3 (Guarantee) + L4 (Lena)
- **Copy strategy:** 60-day guarantee + permission. *"No rush. If this isn't the day, that's okay. Whatever you choose — thanks for reading this far."* Risk reversal as trust building. L2 framing: "60 days. By your judgment."
- **CTA:** "Try it for 60 days." (No additional discount unless A/B test approves; E3 optional 10% off — test without first.)

### 2.4 CHECKOUT ABANDONMENT — FLOW 3 (2 emails, cross-level)

Triggered when L2 reaches checkout but does not complete purchase. Timing: 1h / 24h. Highest-intent abandoners; **NO additional discount.**

#### CHECKOUT-03-E1 — 1 hour
- **Primary lever:** L3 (Guarantee)
- **Copy strategy:** Friendly reminder + answer last doubts. *"If today isn't right, that's a real answer."* Show exact cart contents with pricing. Permission-based. Don't chase.
- **6-element check:** Symptom recognition (her cart contents imply her situation). Guarantee surface. Permission.
- **CTA:** "Return to checkout when you're ready."

#### CHECKOUT-03-E2 — 24 hours
- **Primary lever:** L3 (Guarantee) + L1 (Mechanism)
- **Copy strategy:** Final nudge + 60-day guarantee. *"Try it for 60 days. By your judgment."* Decision-respect tone. *"You decide."* Free shipping reminder.
- **CTA:** "Complete your order" / "Read the guarantee."

---

## 3. PHASE 2 — TRANSACTIONAL & PP EARLY (PURCHASE → DAY ~21 POST-PURCHASE)

Lisa has converted. The shift from defensive-evaluation is now consolidated into **scientific-evaluator mode**. Hope/realism moves from 35/65 to 40/60 — she's cautiously investing in the experiment. The brand's job in this phase is **validation without over-promising**. PP-Education is the workhorse; PP-Mary S. Story deepens trust; transactional flows manage the operational layer without breaking voice.

### 3.1 ORDER CONFIRMATION — FLOW 5 (1 email, cross-level)

#### ORDER-05-E1 — immediate post-purchase
- **Primary lever:** L4 (Lena) + L3 (Guarantee)
- **Copy strategy:** Tone 40/60 hope/realism (neutral transactional). Order summary, shipping timeline, 60-day guarantee reminder (post-purchase confidence). Lena sign-off: *"You've got this. We've got your back. — Lena."* Cross-sell 1 accessory (wash bag) — not pushy, framed as "if you'd like one to keep pairs in rotation." **Google 2024 rule: predominantly transactional. NO promotional content beyond the wash bag mention.**
- **6-element check:** Symptom recognition absent (transactional). Mechanism absent (transactional). BCBA-respect absent (transactional). Guarantee present. Timeline present. Permission implicit ("if you'd like"). Phase 2 allows reduced formula in transactional flows.
- **CTA:** "Track your order."

### 3.2 SHIPPING & OUT FOR DELIVERY — FLOW 6 (2 emails, cross-level)

#### SHIPPING-06-E1 — on fulfillment
- **Primary lever:** L4 (Lena)
- **Copy strategy:** Tracking info, delivery estimate, teaser for arrival. Lena: *"Can't wait for you to try them. — Lena."* Prep tips teaser for the next email.
- **CTA:** "Track your package."

#### SHIPPING-06-E2 — morning of delivery (Out for Delivery)
- **Primary lever:** L4 (Lena)
- **Copy strategy:** *"Today's the day!"* Prep guidance: wash first (no fabric softener — it blocks the wetness-signal layer), let child unbox (the sensory involvement matters), no expectations for first wear. Manage expectations explicitly: *"First few wears are about introducing the sensation, not results. He's learning a new language his nervous system hasn't heard before. Give it time."* This is the L2 patience frame — never "you'll see results today," always "the body is starting to learn."
- **CTA:** "Prep your first-wear routine."

### 3.3 ARRIVED & WELCOME — FLOW 7 (1 email, cross-level)

#### ARRIVED-07-E1 — delivery confirmed
- **Primary lever:** L1 (Mechanism)
- **Copy strategy:** *"They're here!"* First-wear protocol. Education: *"The wetness-signal layer works by letting your child FEEL when they're wet — not absorb it silently like a pull-up. The nervous system registers the signal, slowly, repeatedly, until it generalizes."* What-to-expect timeline (in callout box for L2 visual signature): *"Week 1: awareness (he notices the wet, may not act). Week 2–4: recognition (shorter dry periods, looks down at the wet spot, may pause). Week 4–8: active response (may go to bathroom, may tell you, may not)."* Link to PP-Education resources. Gentle upsell if 1-pair buyer (1→3+3, 3+3→5+5 per S01 §3.1).
- **6-element check:** Mechanism-dominant (this email's job). Symptom: "he notices wet." Timeline explicit. Guarantee: implicit. Permission: "no rush." BCBA-respect: "your BCBA's protocol stays in place; this is the missing layer." All elements present.
- **CTA:** "Read the first-4-week protocol."

### 3.4 PP-DIRECT UPSELL — FLOW 8 (2 emails, cross-level, level-aware framing)

Targets 1-pair buyers only. Tone: helper, not seller. NEVER "You didn't buy enough."

#### PP-DIRECT-UPSELL-E1 — Day 1 post-purchase
- **Primary lever:** L4 (Peer Trust) + L2 (Pull-Ups)
- **Copy strategy:** *"Most parents who start with 1 pair add the 3+3 within a week. Here's why."* Bundle comparison table. Math reframe OK for L2 (FORBIDDEN for L3; per `strategy-macro.json`).
- **CTA:** "See the 3+3 bundle."

#### PP-DIRECT-UPSELL-E2 — Day 3 post-purchase
- **Primary lever:** L4 (Peer Trust)
- **Copy strategy:** *"Your 1 pair is on its way. Here's how the 3+3 bundle complements it."* 10% off add-on (test without first per `strategy-macro.json`).
- **CTA:** "Add the 3+3 bundle."

### 3.5 PP-MARY S. STORY — FLOW 10 (1 email, cross-level)

**Phase placement disputed** (I09: S01 says Phase 1, S02 implies Phase 2). Recommended placement: Day 3 post-purchase (between Arrived E1 and PP-Education E1). Mary S. (founder) appears ONCE. Signed as Mary S., not Lena.

#### PP-MARY-S-STORY-E1 — Day 3 post-purchase
- **Primary lever:** L4 (Mary S. peer trust, founder)
- **Copy strategy:** Founder story. *"I started BrightKidCo because my own child couldn't feel the signal — and after two years of trying everything, I realized the missing piece wasn't behavioral. It was neurological. It was the body-signal layer."* Cross-level calibration (R1-R6). No offer in this email — pure brand building. Preceding email (PP-Upsell E2) introduces Mary; this email delivers her story.
- **6-element check:** Symptom recognition (her child's story). Mechanism (body-signal layer). BCBA-respect: "we worked with our BCBA, not against her." Timeline: "it took us 9 months." Guarantee: implicit. Permission: "if you're not ready, that's okay."
- **CTA:** "Read about the body-signal layer" (no commercial CTA).
- **Visual:** Mary S. photograph (real founder, real context). No brand characters in this email. Mint + cream.

### 3.6 PP-EDUCATION D0-21 — FLOW 11 (4 emails, cross-level with L2 framing)

The workhorse post-purchase flow. Level-aware content blocks (level tag is now set). Coaching + encouragement tone. NO outcome promises.

#### PP-EDUCATION-D0-21-E1 — Day 0 post-purchase
- **Primary lever:** L4 (Lena)
- **Copy strategy:** Theme: "Your first wear." Put on like regular underwear. No expectations. Just observe. Manage expectations from minute one: *"The first wear is about introducing a sensation, not collecting data. Watch for nothing. Watch for everything. Don't log yet."* L2 framing: "your BCBA's protocol continues; the body-signal layer is added alongside."
- **CTA:** "Read the first-wear protocol."

#### PP-EDUCATION-D0-21-E2 — Day 7 post-purchase
- **Primary lever:** L1 (Mechanism)
- **Copy strategy:** Theme: "What to look for." Micro-signs: pause, touch, look down, shorter dry periods. L2 framing: scientific observation, not celebration. *"You're looking for subtle shifts his nervous system makes when the body-signal starts to register. The wet spot he looks at. The pause mid-play. The hand that goes to the underwear. These ARE progress — even if no voiding happens in the toilet yet."*
- **CTA:** "Read the observation guide."

#### PP-EDUCATION-D0-21-E3 — Day 14 post-purchase
- **Primary lever:** L5 (49% Stat / normalization)
- **Copy strategy:** Theme: "Week two reality." Progress isn't linear. Regression is normal. Don't stop. *"Some kids respond by day 3. Others by day 30. Most by day 60. A few need 90. All normal."* Stat callout box for the 49% Wiggins figure. L2 framing: "your BCBA has seen this curve before — trust the protocol AND the new layer."
- **CTA:** "Read the regression-is-normal explainer."

#### PP-EDUCATION-D0-21-E4 — Day 21 post-purchase
- **Primary lever:** L4 (Peer Trust)
- **Copy strategy:** Theme: "Celebrate the small wins." *"He looked at the wet spot!"* — share wins, encourage logging. Soft upsell if 1-pair buyer (link to PP-Direct Upsell or to Replenishment sub-flow A).
- **CTA:** "Share a small win" / "Log your observations."

---

## 4. PHASE 3 — PP MID & REPLENISHMENT (DAY ~22 → DAY ~90 POST-PURCHASE)

Lisa is now in PP Mid. Hope/realism holds at 35/65 — she's a steady investor, not an enthusiast. Her job is observation; the brand's job is patience + replenishment logistics + zero over-promising. PP-Support At-Risk fires conditionally if she stops opening; if she keeps engaging, she gets the Mid Check-In, Replenishment A/B, Review Request, and PP-Extended Upsell.

### 4.1 PP-MID CHECK-IN — FLOW 13 (3 emails, cross-level)

Timing per `strategy-macro.json` §4.13: D45/D60/D75. **Note inconsistency I05:** S01 says D30-60; S02 specifies D45/D60/D75. Resolved using S02 explicit cadence.

#### PP-MID-CHECKIN-E1 — Day 45 post-purchase
- **Primary lever:** L4 (Lena Peer Trust) + L1 (Mechanism)
- **Copy strategy:** Three-Family Testimonial (Sarah/Lisa/Maria stories — the **Lisa story here is Lisa-as-customer, not Lisa-as-avatar**; this is a customer named Lisa with an L2-shaped journey). 3 different moms share their child's story at day 45. Common thread: each is somewhere different on the curve. Permission not to buy more pairs yet. L2 framing for the Lisa-customer slot: BCBA context, sensory context, slow progress, "we're still in the recognition phase." Section structure: sarah_story → lisa_story → maria_story → common_thread → lena_reply.
- **6-element check:** All 6 via the testimonial arc.
- **CTA:** "Reply to this email with how it's going." (High-trust invitation.)

#### PP-MID-CHECKIN-E2 — Day 60 post-purchase
- **Primary lever:** L4 (Lena Peer Trust)
- **Copy strategy:** Theme: "How's it going?" Reply-to-this-email for support. Celebrate any progress — including no progress. L2 framing: "60 days is the guarantee threshold; you have full information now, and your next decision is yours."
- **CTA:** "Reply to Lena."

#### PP-MID-CHECKIN-E3 — Day 75 post-purchase
- **Primary lever:** L3 (Guarantee)
- **Copy strategy:** Theme: "At the 60-day mark" (sent at D75 as a follow-up). Guarantee reminder (earliest use window has closed or is closing). Risk-reversal reminder: *"60 days have passed. If the body-signal layer hasn't shifted, you can use the guarantee. No interrogation. No restocking fees."* L2 permission: "or stay with us longer; some L2 families see the shift at week 12."
- **CTA:** "Read the guarantee details" / "Reply if you'd like to use the guarantee."

### 4.2 PP-EXTENDED UPSELL — FLOW 12 (3 emails, level-aware)

Level-differentiated copy. L2 frame is "BCBA complement." Timing per `strategy-macro.json`: D28/D35/D42. Resolved cadence: bundle upgrade → accessory cross-sell → final upsell with guarantee.

#### PP-EXT-UPSELL-E1 — Day 28 post-purchase
- **Primary lever:** L2-A (BCBA complement framing for L2)
- **Copy strategy:** Bundle upgrade. L2-specific framing: "Your BCBA's protocol continues. The 3+3 bundle or 5+5 lets the body-signal layer stay consistent without rotation gaps." L2 respect-level language: "we complement the protocol." Math reframe OK for L2 (FORBIDDEN for L3). **L3 rule**: never push 5+5; for L3, 1-pair → 3+3 at most, organic only.
- **CTA:** "See the bundle options."

#### PP-EXT-UPSELL-E2 — Day 35 post-purchase
- **Primary lever:** L4 (Lena)
- **Copy strategy:** Accessory cross-sell (Wash Bag, Magic Targets). Cross-level R1-R6. L2 framing: practical add-ons that support the protocol. Helper tone, not seller tone.
- **CTA:** "Add a wash bag" / "See the magic targets."

#### PP-EXT-UPSELL-E3 — Day 42 post-purchase
- **Primary lever:** L3 (Guarantee)
- **Copy strategy:** Final upsell. Guarantee reinforcement. Door open. *"Whatever you decide about more pairs, the 60-day guarantee stands. Last touch from us on this — leave the relationship intact."*
- **CTA:** "Reply if you'd like more pairs" / "Visit the FAQ."

### 4.3 REPLENISHMENT A/B — FLOW 16 (5 emails across sub-flows, cross-level)

Tone: Practical reminder, not sales. *"Training underwear works best when you rotate pairs."* Sub-flow determined by original purchase: 1-pair → A (3 emails); 3+3 → B (2 emails); 5+5 → C (2 emails — long-haul loyalty). L2 framing throughout: BCBA-context, sensory-language, no "your kid will regress" panic.

#### Sub-Flow A (1-pair buyer)

##### REPLENISHMENT-A-1 — Day 14 post-purchase
- **Primary lever:** L4 (Lena)
- **Copy strategy:** Wash cycles reminder. *"Pairs need a few wash cycles to hit peak wetness-signal performance. No fabric softener — it coats the sensing layer. You've got this."*
- **CTA:** "Read the wash guide."

##### REPLENISHMENT-A-2 — Day 30 post-purchase
- **Primary lever:** L1 (Mechanism)
- **Copy strategy:** Consistency matters. *"The body-signal layer builds with consistent wear. Rotation gaps slow the learning. If a pair is in the wash, the others carry the work."*
- **CTA:** "See the rotation guide."

##### REPLENISHMENT-A-3 — Day 60 post-purchase
- **Primary lever:** L3 (Guarantee)
- **Copy strategy:** Guarantee threshold. Reinforce risk reversal: *"Day 60 is your guarantee checkpoint. If the body-signal layer hasn't shifted, full refund. No interrogation."* Soft replenish prompt: "if you're ready for more pairs, we're here."
- **CTA:** "Read the guarantee" / "Order more pairs."

#### Sub-Flow B (3+3 buyer)

##### REPLENISHMENT-B-1 — Day 75 post-purchase
- **Primary lever:** L4 (Lena)
- **Copy strategy:** *"Time to rotate."* Bundle upgrade nudge to 5+5. L2 framing: "the protocol continues; rotation keeps the body-signal layer consistent."
- **CTA:** "See the 5+5 bundle."

##### REPLENISHMENT-B-2 — Day 90 post-purchase
- **Primary lever:** L4 (Lena)
- **Copy strategy:** Bundle upgrade to 5+5. Practical helper tone.
- **CTA:** "Order the 5+5 bundle."

#### Sub-Flow C (5+5 buyer) — long-haul

##### REPLENISHMENT-C-1 — Day 150 post-purchase
- **Primary lever:** L4 (Lena)
- **Copy strategy:** *"Long haul support."* Loyalty acknowledgment. L2 framing: "your BCBA's protocol + the body-signal layer = the long-road toolkit."
- **CTA:** "Reply to Lena."

##### REPLENISHMENT-C-2 — Day 180 post-purchase
- **Primary lever:** L4 (Lena)
- **Copy strategy:** Accessory refresh (Wash Bag, Magic Targets cross-sell). L2 framing: "tools that keep the rotation consistent."
- **CTA:** "See accessories."

### 4.4 REVIEW REQUEST — FLOW 17 (2 emails, cross-level)

Timing per `strategy-macro.json` §4.17: D30/D60. **Note inconsistency I07:** S01 says D21-30; S02 specifies D30/D60. Resolved using S02.

#### REVIEW-REQUEST-E1 — Day 30 post-purchase
- **Primary lever:** L4 (Lena)
- **Copy strategy:** *"Has BrightKidCo made a difference? Share your experience."* Direct review link + 1–2 leading questions. Peer request, not transaction. L2 framing: "your review helps other L2 families decide."
- **CTA:** "Share your experience."

#### REVIEW-REQUEST-E2 — Day 60 post-purchase
- **Primary lever:** L4 (Lena)
- **Copy strategy:** Follow-up if no review. *"Your experience helps other parents decide."* Altruism framing. L2 permission: "if you're not ready to write yet, that's fine."
- **CTA:** "Share your experience."

### 4.5 PP-SUPPORT AT-RISK — FLOW 15 (4 emails, conditional on no-opens)

Trigger: 3-7 days no opens post-purchase. Adjusts tone if level tag known (L2: clinical warmth; L3: extra gentle). **No upsells.** **NEVER "We miss you" or guilt-tripping.**

#### PP-SUPPORT-AT-RISK-E1 — 3 days no open
- **Primary lever:** L4 (Lena)
- **Copy strategy:** *"I noticed you haven't opened recent emails. Just checking in."* Concerned peer, NOT corporate. L2 framing: short, plain, no mechanism lecture — she's not opening because she's busy, not because she's rejecting.
- **CTA:** "Reply if you'd like support."

#### PP-SUPPORT-AT-RISK-E2 — 7 days no open
- **Primary lever:** L1 (Mechanism)
- **Copy strategy:** *"Here's how to get the most out of your pairs."* Support offering, not promotion. L2 framing: brief mechanism reminder + wash/rotation tips.
- **CTA:** "Read the rotation guide."

#### PP-SUPPORT-AT-RISK-E3 — 14 days no open
- **Primary lever:** L5 (Normalization)
- **Copy strategy:** *"Your child's nervous system is learning even when it doesn't show."* Value reminder. L2 framing: scientific patience, no cheerleading.
- **CTA:** "Read why the timeline varies."

#### PP-SUPPORT-AT-RISK-E4 — 21 days no open
- **Primary lever:** L3 (Guarantee)
- **Copy strategy:** *"Your 60-day guarantee is still active."* Guarantee + door open. L2 framing: "60 days. By your judgment. If you need to use it, no interrogation."
- **CTA:** "Read the guarantee" / "Reply to Lena."

---

## 5. PHASE 4 — LONG-TAIL (DAY 90+ POST-PURCHASE, OR NEVER-BOUGHT POST-WINBACK)

This is the **scientific evaluator's long arc**. Lisa is either a retained customer receiving PP-Extended Education and Review/Replenishment cycles, or a never-bought L2 receiving Winback B and the FAQ/Objection Library. Either way, the voice stays clinical-warm; the L2 unlock sentence remains the gravitational center; the 6-element formula remains enforced wherever a CTA appears.

### 5.1 PP-EXTENDED EDUCATION — FLOW 14 (5 L2-themed emails, level-specific)

S02 §4.14 lists themes only — no per-email table. **L2 themes** (per `strategy-macro.json`):
1. Interoception science
2. BCBA integration tips
3. Sensory bathroom setup
4. Prompt-to-awareness shift
5. Long-term progress tracking

Trigger: D22+ with level tag + have bought (per S01 §3.3). **Phase placement disputed** (I13: S01 Phase 3; S01 Appendix C6 flags the conflict). Resolved: Phase 4 in the L2 sequence. Per-email timings inferred (S02 leaves them unspecified): D30 / D50 / D70 / D100 / D130.

#### PP-EXT-EDU-L2-1 (Interoception Science) — ~Day 30
- **Primary lever:** L1 (Mechanism) + L4 (Lena)
- **Copy strategy:** Mahler 8 interoceptive senses explained for parents. Stat callout box around the Mahler citation. L2 framing: "your BCBA will recognize this framework." No product CTA — pure education.
- **CTA:** "Read the interoception primer."

#### PP-EXT-EDU-L2-2 (BCBA Integration Tips) — ~Day 50
- **Primary lever:** L2-A (BCBA complement)
- **Copy strategy:** *"How to bring body-signal learning into your BCBA's protocol."* Practical: language to use, timing of the protocol revision, what to expect from the BCBA's response. The bi-weekly BCBA fact sheet (Demand §23, the highest-leverage L2 conversion tool) gets its deepest airing here for retained customers.
- **CTA:** "Download the BCBA fact sheet."

#### PP-EXT-EDU-L2-3 (Sensory Bathroom Setup) — ~Day 70
- **Primary lever:** L1 (Mechanism) + L4 (Lena)
- **Copy strategy:** Sensory-friendly bathroom configuration. Foot stool, lighting, white noise, picture schedules, weighted lap pad option, no-flush rule. L2 framing: "the bathroom is a sensory minefield — these are the OT-tested setups that reduce the load."
- **CTA:** "Read the sensory bathroom guide."

#### PP-EXT-EDU-L2-4 (Prompt-to-Awareness Shift) — ~Day 100
- **Primary lever:** L2-D (Beyond prompt-dependence)
- **Copy strategy:** How to fade prompts gradually. Phase 1: full prompt. Phase 2: visual cue only. Phase 3: verbal cue every other visit. Phase 4: cue only when child initiates movement toward bathroom. Phase 5: no cue. *"This is the BCBA's domain — share the phasing with them. They can integrate it into the existing protocol."*
- **CTA:** "Read the prompt-fading protocol."

#### PP-EXT-EDU-L2-5 (Long-Term Progress Tracking) — ~Day 130
- **Primary lever:** L4 (Lena Peer Trust) + L1 (Mechanism)
- **Copy strategy:** How to log without obsessing. The 3-metric dashboard: dry periods, micro-moments, successful voids. L2 framing: "your BCBA is already data-driven — this is the layer they can't measure, made measurable." Permission: "or don't log at all. Trust the protocol. Trust the layer."
- **CTA:** "Download the tracking template."

### 5.2 WINBACK PATH A — FLOW 18 (3 L2-themed emails, level-specific)

Trigger: 90 days no engagement (post-purchaser). Highest L3 conversion cell; mechanism reminder critical for L2. **Suppression priority:** Winback pauses ALL nurture flows while active; overrides Welcome, PP-Education, Replenishment.

**L2 themes** (per `strategy-macro.json`):
1. "It's been a while"
2. New science insight
3. Guarantee

**Phase placement disputed** (I14: S01 Phase 2 vs Phase 3). Resolved: Phase 4 in the L2 sequence.

#### WINBACK-A-L2-1 ("It's been a while") — Day 90
- **Primary lever:** L4 (Lena) + L3 (Guarantee)
- **Copy strategy:** *"It's been a while. No judgment — life with an L2 kid is full."* Gentle re-engagement. Lena voice: "I had two of these kids; some weeks I couldn't open email either." No upsell. No urgency. **NEVER "We miss you."** L2 framing: "your BCBA's protocol continues; we're here when you need the body-signal layer again."
- **CTA:** "Reply to Lena" / "Read a recent story."

#### WINBACK-A-L2-2 (New science insight) — Day 105
- **Primary lever:** L1 (Science) + L5 (49%)
- **Copy strategy:** New study or framework that has emerged since Lisa last engaged. Mahler update, SPARK data release, Nicholson 2019 deep-cite. *"A recent interoception study reinforces what we built the body-signal layer to do — here's what it adds to the picture."* Stat callout box. L2 framing: scientific-evaluator re-engagement.
- **CTA:** "Read the new study."

#### WINBACK-A-L2-3 (Guarantee) — Day 120
- **Primary lever:** L3 (Guarantee) + L4 (Lena)
- **Copy strategy:** *"Your 60-day guarantee has long passed, but the door is still open."* Re-permission: pairs available, Lena available, no interrogation. L2 LONG sign-off: *"If this isn't the day, that's okay. The product will be here next month. So will I."*
- **CTA:** "Visit the store" / "Reply to Lena."

### 5.3 WINBACK PATH B — FLOW 19 (3 L2-themed emails, level-specific)

Trigger: 60 days no purchase (never-bought). Lower conversion than Path A. Non-buyers need stronger mechanism proof. FAQ path after winback completion. Same L2 themes as Path A but calibrated for never-bought skepticism.

#### WINBACK-B-L2-1 ("It's been a while") — Day 60
- **Primary lever:** L1 (Mechanism) + L4 (Lena)
- **Copy strategy:** *"It's been a while. I wanted to send one more thing before I stop."* Mechanism refresh, no pressure. L2 framing: "the body-signal layer is still the missing piece your BCBA's protocol can't address."
- **CTA:** "Read the body-signal layer explainer."

#### WINBACK-B-L2-2 (New science insight) — Day 80
- **Primary lever:** L1 (Science) + L5 (49%)
- **Copy strategy:** Same as Winback A L2-2 but harder-hitting on the science — never-bought needs more proof. Cite Mahler, Wiggins, SPARK. Stat callout box. Permission-not-to-buy still present.
- **CTA:** "Read the new study" / "Reply with questions."

#### WINBACK-B-L2-3 (Guarantee + permission) — Day 100
- **Primary lever:** L3 (Guarantee) + L4 (Lena)
- **Copy strategy:** *"60 days. By your judgment. If it doesn't shift the body-signal layer, full refund. Or — if this isn't the day — that's the real answer."* Permission-not-to-buy is the lever here. L2 LONG sign-off.
- **CTA:** "Try it for 60 days" / "Reply to Lena."

### 5.4 REFERRAL FLOW — FLOW 21 (3 emails, cross-level)

Trigger: Post-purchase D30+ with satisfaction indicator. Three-Family Pattern for social proof.

#### REFERRAL-E1 — Post-purchase D30+
- **Primary lever:** L4 (Lena)
- **Copy strategy:** *"Know another parent who's struggling? Share BrightKidCo."* Incentive: discount on next purchase. L2 framing: "if you know another L2 family — one with the BCBA context, the sensory profile, the long road — send them this."
- **CTA:** "Share your referral link."

#### REFERRAL-E2 — Post-purchase D30+
- **Primary lever:** L4 (Lena)
- **Copy strategy:** Referral ask reinforcement. Lena voice: *"When something works for our kids, we tell each other."* Community framing.
- **CTA:** "Share again."

#### REFERRAL-E3 — Post-purchase D30+
- **Primary lever:** L4 (Lena)
- **Copy strategy:** Final reminder + dual-sided incentive (referrer + referred both get a discount). Soft close. L2 framing: "or don't share; the relationship stays the same."
- **CTA:** "Share your link" / "No thanks."

### 5.5 FAQ/OBJECTION LIBRARY — FLOW 20 (6 emails, level-specific blocks)

Phase 3 trigger: Welcome end + no purchase, OR deployed mid-journey when an objection surfaces. Per the strategy: cross-level body with **per-level content blocks**. Each email uses the 4-step reframe (Name → Validate → Reframe → Absolve).

**The 6 FAQ emails** (per `strategy-macro.json` §4.20):

#### FAQ-E1 — Primary objection: "Tried Everything" (D1)
- **Primary lever:** L1 + L5
- **Key source study:** Nicholson et al. 2019; PP-A01
- **Key emotional tactic:** Defeated → Absolved.
- **L2 block:** "40+ methods. None addressed the body-signal layer." Cite SPARK 49%. Name BCBA acknowledgment: "your BCBA's protocol was the closest — it just couldn't reach the sensory piece."

#### FAQ-E2 — Primary objection: "Too Old/Severe" (D4)
- **Primary lever:** L3-A (Late Train)
- **Key source study:** Faulkner et al. 2017; PP-B04
- **Key emotional tactic:** Hopeless → Empowered (late-trainer stories).
- **L2 block:** "Trained at 8, 9, 11 — the curve is wider than you think." Mahler citation. BCBA: "your BCBA has seen late-trainers; the protocol is the same."

#### FAQ-E3 — Primary objection: "GI/Withholding" (B4)
- **Primary lever:** L1 + Medical reframe
- **Key source study:** McElhanon et al. 2014; PP-B08
- **Key emotional tactic:** Scared → Supported.
- **L2 block:** "GI issues + body-signal gap = the proximal reason pottying stalled." Medical reframe: the body-signal layer helps the nervous system register what the GI tract is already saying.

#### FAQ-E4 — Primary objection: "Worth $30–50?" (C3)
- **Primary lever:** L3 + Math reframe
- **Key source study:** PP-F10; cost comparison
- **Key emotional tactic:** Defensive → Valued.
- **L2-specific note:** Math reframe applies to L1-L2 ONLY; **L3 NEVER math reframe.**
- **L2 block:** "Less than two specialist copays. 60 days. By your judgment."

#### FAQ-E5 — Primary objection: "BCBA Compatibility" (B2)
- **Primary lever:** L2-A (Complement)
- **Key source study:** PP-E01-E03
- **Key emotional tactic:** Conflicted → Confident.
- **L2 block (the heart of this FAQ):** "Your BCBA has been doing the hard work for years. Body-signal learning is the missing layer their protocol can't address." This FAQ email IS the L2 unlock sentence in its purest form. Bi-weekly BCBA fact sheet referenced.

#### FAQ-E6 — Primary objection: "Hope-Crash Fear" (D3)
- **Primary lever:** L3 + L4
- **Key source study:** PP-A05 (Hample 2020)
- **Key emotional tactic:** Protected → Safe to try.
- **L2 block:** "60 days. By your judgment. If the body-signal layer doesn't shift, full refund. The exit is the point. That's why it works."

### 5.6 SUNSET — FLOW 22 (2 emails, cross-level)

Trigger: 120 days no open AND no click AND no purchase AND received 20+ emails (per S01 §3.3 Flow 27). **Note inconsistency I08:** S02 says "120d inactive (post-Winback completion)"; S01 specifies multi-condition trigger. Resolved using S01's stricter multi-condition trigger. **HIGHEST PRIORITY** — suppresses ALL other flows unconditionally. After sunset: tag `unengaged = True`, add to Master Suppression List.

#### SUNSET-E1 — Day 120 inactive (post-Winback)
- **Primary lever:** L4 (Lena)
- **Copy strategy:** Re-permission check. *"Do you still want to hear from us?"* One-click preference update. L2 framing: "no guilt; the door stays open."
- **CTA:** "Update your preferences."

#### SUNSET-E2 — 4–7 days after E1
- **Primary lever:** L4 (Lena)
- **Copy strategy:** Final farewell. No response = suppressed for 6–12 months. L2 LONG sign-off.
- **CTA:** "Reply if you'd like to stay."

---

## 6. SUPPRESSION & TRIGGER RULES (consolidated)

| Rule | Source | Effect |
|---|---|---|
| Cart Abandonment suppresses Welcome E3+ during active cart | S01 §3.1 Flow 07 | Welcome pauses; Cart runs |
| Winback (A or B) pauses ALL nurture flows while active | S02 cross-cutting notes | Welcome, PP-Education, Replenishment pause |
| Sunset suppresses ALL other flows unconditionally | S01 §3.3 Flow 27 | Highest priority |
| PP-Support At-Risk only fires on 3-7 days no opens post-purchase | S02 §4.15 | Conditional; pauses regular PP-Education cadence if open-rate drops |
| L3 rule: NEVER push 5+5 | S02 §4.12 | L3: 1-pair → 3+3 at most, organic only |
| L3 NEVER math reframe | S02 §4.20 E4 + L2 avatar §4.1 | Forbidden for L3; allowed (gentle) for L2 |
| Replenishment C sub-flow fires for 5+5 buyers only | S02 §4.16 | Long-haul loyalty path |
| PP-Level Detection is gf-only | S02 §4.9 | Does NOT fire for tagged L2 |

---

## 7. THE 6-ELEMENT FORMULA — QUICK-REFERENCE CHECKLIST

Per Demand §23, **every L2 email with a CTA must contain all 6 elements**. Pre-flight checklist:

- [ ] **(1) Symptom recognition** — 3+ failed methods named, OR explicit recognition moment matching avatar §1
- [ ] **(2) Mechanism specificity** — interoception explained (not vague); Mahler cited as "researcher" not "partner"
- [ ] **(3) BCBA/OT acknowledgment** — complement framing; "your BCBA has been doing the hard work for years" or equivalent
- [ ] **(4) Realistic timelines** — "8–12 weeks for most kids. Some longer." (NO "Quick." NO "30 days.")
- [ ] **(5) 60-day guarantee** — surfaced with any CTA
- [ ] **(6) Permission-not-to-buy** — explicit or implicit LONG sign-off; NEVER pressure

**Unchecked = DO NOT SEND.** Applies to Welcome E2/E3/E4/E6/E7/E8, Cart E1/E2/E3, Browse E1/E2/E3, Checkout E1/E2, PP-Direct Upsell E1/E2, PP-Education D0-21 E1–E4 (lighter), PP-Mid Check-In E1/E2/E3, PP-Ext Upsell E1/E2/E3, Replenishment A1/A2/A3/B1/B2/C1/C2, Review Request E1/E2, PP-Support At-Risk E1–E4 (partial), Winback A/B L2-1/2/3, FAQ E1–E6, Referral E1/E2/E3, Sunset E1/E2.

**Exempt:** Transactional flows (Order, Shipping, Arrived) — these are operational and don't carry the formula. Welcome E1 and E5 are exempted from full formula; E1 is intro/observation; E5 is mechanism-only deep-dive.

---

## 8. FORBIDDEN-PHRASE AUDIT — L2 QUICK-REFERENCE

| Phrase | Status | Reason |
|---|---|---|
| "Easy," "Simple" | Universal forbidden | Insults effort |
| **"Quick"** | **L2 MOST DANGEROUS** (Demand §8.6) | Years of trying |
| "Guaranteed" | Brand-wide forbidden | Use "60-day money back" |
| "Miracle," "Cure," "Fix," "Solve" | Brand-wide forbidden | Autism is identity, not disease |
| "Just trust the process" | Forbidden | Patronizing |
| "Don't give up!" | Forbidden | Cheerleading from untrusted brand |
| "Your child should…" | Forbidden | Heard from mother, pediatrician, in-laws |
| "Have you tried [obvious]?" | Forbidden | Same |
| "Just be more consistent" | Forbidden | Same |
| NT comparison ("just like other kids") | Forbidden | L2 has accepted difference |
| Aggressive BCBA criticism (any form) | UNFORGIVABLE | BCBA is highest-trust authority |
| Countdown timers | Forbidden for L2 | Never (Demand §15.7) |
| Fake urgency / "limited time" | Forbidden | L2 immune response |
| AI-isms ("revolutionary," "transformative," "leverage," "empower") | Forbidden | Marketing dialect she filters as noise |
| L1 testimonials spliced in | Forbidden | L2 needs L2 contexts |
| "Pre-K is coming!" / direct Pre-K urgency | Forbidden for L2 | School adapted via IEP |
| "Don't worry" / "We understand" (empty) | Forbidden | Empty empathy reads patronizing |
| "Independence!" (without realism anchor) | Conditional 🔴 | Must pair with "at his pace" |
| "The next size is adult diapers" | Forbidden for L2 | L3-only trigger |
| "Risk-free" | Forbidden | Insurance jargon; use "60-day money back" |

---

## 9. SIGN-OFF PROGRESSION (per `strategy-macro.json` cross_cutting_notes)

| Position | Sign-off | Variant |
|---|---|---|
| Welcome E1–E2 | "Talk soon," | SHORT |
| Welcome E3–E5 | "With understanding," | MEDIUM |
| Welcome E6+ | "With care," | LONG |
| Winback (A or B) E3 / Sunset E2 / Welcome E8 | "With care, Lena" + LONG permission sentence | DEEPEST |

The progression mirrors the journey: SHORT for first contact (professional peer); MEDIUM once trust begins (recognition moment); LONG for retention and farewell (Lena-as-trusted-peer); DEEPEST at the door-closing moments (Lena-as-Lena).

---

## 10. CTA STYLE — L2 QUICK-REFERENCE

- **Color:** Muted green (desaturated #039902 hue)
- **Height:** 48px min
- **Width:** NOT full-width (vs L1 which is full-width)
- **Shadow:** Soft, subtle
- **Border-radius:** 12–16px
- **Wording:** Soft-action. Examples: "See the science," "Read the full story," "Try it for 60 days," "Show your BCBA," "Reply to Lena." **NEVER "BUY NOW."**
- **Countdown timers:** NEVER (Demand §15.7)
- **Generous whitespace** around the CTA — no clutter
- **Spacing:** 44px section gaps (vs L1 48–64px, L3 56–72px)

The L2 CTA is the visual equivalent of permission-not-to-buy.

---

## 11. THE L2 UNLOCK SENTENCE — APPEARANCES

The single most important sentence in the L2 brand voice, deployed at high-leverage moments:

> *"Your BCBA has been doing the hard work for years. Body-signal learning is the missing layer their protocol can't address."*

**Mandatory appearances:**
- Welcome E2 (mechanism deep dive) — first articulation
- Welcome E4 (deep reframe) — full airing, paired with the prompt-dependency loop
- FAQ E5 (BCBA Compatibility objection) — purest form
- PP-Ext Edu L2-2 (BCBA Integration Tips) — practical extension
- PP-Mary S. Story E1 — Mary S. framing: "we worked with our BCBA, not against her"

**Implicit appearances** (echoed in BCBA-respect language):
- Every PP-Education email (D0-21)
- Every Replenishment email
- Every Winback email (Path A and B)

If the L2 reader walks away remembering one sentence, this is the one.

---

## 12. CROSS-REFERENCES & DEPENDENCIES

- **Avatar:** `journey-l2-01-avatar.md` §1–§11
- **Strategy macro:** `strategy-macro.json` flows 1–22, L2 variants where applicable
- **Locked profile:** `locked-profile.json` (filter `level=l2`)
- **Synthesis:** §3.3 (school/home paradox), §5–§9, §11–§14
- **Demand:** §1, §3, §5–§9, §13–§15, §23–§24
- **G3:** §2.6 (visual calibration)
- **Inconsistencies flagged:** I02 (Welcome cadence S02 vs S01), I05 (Mid Check-In timing), I07 (Review Request timing), I08 (Sunset trigger), I09 (Mary S. Story phase), I12 (PP-Ext Edu timings inferred), I13 (PP-Ext Edu phase), I14 (Winback A phase)

---

> **End.** The L2 sequence is engineered around one shift: from **defensive-evaluation mode** (40/60) to **scientific-evaluator mode** (55/45). Every email either moves that shift forward or protects it from collapsing. Marketing polish triggers her skepticism; mechanism specificity converts her. When in doubt, return to the L2 unlock sentence, the 6-element formula, and the forbidden-phrase list. *Your BCBA has been doing the hard work. Body-signal learning is the missing layer.*