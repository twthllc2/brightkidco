# BrightKidCo — General Fallback (GF) Email Sequence

> **Reference document for Stage 1 subagents.** The complete map of every email a GF-tagged subscriber (`avatar_general`) receives across all 22 flows of the BrightKidCo lifecycle. GF is the **largest segment** at ~50% of real subscriber volume, the most **heterogeneous** (five operationally distinct sub-mothers under one tag), and the only level that owns a **migration touchpoint** — the PP-Level Detection mail at Day 14. This document is the single source of truth for what GF sees, in what order, with what triggers, and what happens after migration.
>
> Sources: `_notes/journey-gf-01-avatar.md` §1–10; `_notes/locked-profile.json` (filtered by `level=gf`); `_notes/strategy-macro.json` flows 1–22; `demands/GIULIANO-DEMANDS.md` §1, §1.2, §8.5, §8.6, §13, §14 V16, §15.7.

---

## 1. EXECUTIVE SUMMARY

**GF receives more emails than any other level** because it is the union of (a) a dedicated level-specific Welcome variant, (b) every cross-level flow, and (c) the **GF-only PP-Level Detection flow** that no other level receives. Other levels get Welcome L1/L2/L3 + cross-level + level-specific PP-Extended Education. GF additionally gets the migration infrastructure.

**The total GF-received email count** across one full customer lifecycle (Welcome through Sunset), assuming no migration and full engagement, is approximately **45 emails** (8 Welcome + 1 PP-Level Detection + ~36 cross-level + ~20 PP-Extended Education + ~6 FAQ + ~12 Winback eligible + 2 Sunset). This is by design — GF must cover five sub-mothers in one tag, and must give each one a path forward without breaking trust with any of the other four.

**The single biggest conversion lever in the GF system** is **PP-Level Detection at Day 14**, with an expected 40–50% migration rate. No other mail in the entire BrightKidCo system moves a comparable percentage of subscribers from "browsing" to "buyer" via self-identification.

**The single most important constraint** is **V16 — symptom language only**. Every GF email must pass V16 or it loses Group B (Diagnosis-Rejecters, ~15% of GF) permanently. R1–R6 then enforce the rest of the cross-level calibration: 3–5 recognition anchors per mail, age 3–10+, both verbal modes, flexible timelines, low-bar success metrics.

**What GF receives AFTER migration depends on when migration happens:**
- **Pre-purchase migration** (via Button 4 re-selection, story link click, or pop-up re-engagement) → customer immediately exits Welcome GF and enters the appropriate Welcome L1/L2/L3 mid-sequence. Welcome GF suppression rule applies.
- **Day 14 migration via PP-Level Detection** → customer continues post-purchase flow with new level tag. PP-Extended Education switches from GF themes to L1/L2/L3 themes at D22+. PP-Level Detection SUPPRESSES Welcome E6 and PP-Education D0-21 E3 (both fire at D14) per S01 §5.2 priority rule.
- **D22+ migration via PP-Extended Education story links** → customer switches to level-specific extended education for the remaining of the 20-email sequence.
- **D90+ migration via PP-Support At-Risk** → no rush. Customer continues on GF extended education through lifecycle end.
- **No migration (Groups B and C permanent residents)** → customer completes full GF lifecycle, including GF-specific Winback themes and GF FAQ blocks.

The remainder of this document maps each flow in detail.

---

## 2. GF WELCOME FLOW (Flow 01, GF variant — 8 emails)

The GF Welcome variant is the only level-specific Welcome variant where **all 8 emails use the universal R1–R6 calibration**. There is no per-email table in S02 §4.1 for GF — the macro explicitly states "GF email content must be derived from R1-R6 + L1/L2/L3 base tables, with all level labels stripped." What follows is the derivation.

**Sign-off progression (brand-wide, applies to GF):** E1–E2 "Talk soon," → E3–E5 "With understanding," → E6+ "With care,"

**WELCOME10 code:** Used in E1 across all 4 variants. Expires at E7 per L1/L2 cadence.

**Common to all 8 GF Welcome emails:**
- Subject lines max 60 chars (recommended 40–50). Preheaders max 130 chars (recommended 80–100).
- Body min 16px mobile. CTA min 48px height. Questrial weight 400 only.
- Brand Green #039902 button, balanced saturation (80–100% for A and E, reduced for C and D).
- NO "autism," "ASD," "Level 1/2/3," "toddler," "adult diapers," "non-verbal."
- Both verbal and non-verbal examples always.
- Age language: "kids 3 to 10+."

### E1 — Welcome + Code + Lena Intro (Day 0, immediate)

- **Copy strategy:** Welcome + WELCOME10 code. Lena intro: mom of two sons. Mirror: "Whether your child is verbal or not — saying 'wet' or showing you with a gesture — something's not clicking." Validation only at this stage.
- **Primary lever:** L4 (Lena peer trust).
- **Section structure:** observation → validation.
- **GF-specific calibration:** No diagnosis assumption. Lena intro uses "my two sons" without specifying levels. Three-Family Pattern may appear as a forward-reference: "Other parents in different situations — you'll meet some of them this week."
- **Sub-group reach:** A lands lightly — hope at 65/35, welcome is right tone. B accepts because no autism language. C tolerates — Lena voice is universal. D feels seen — clicked past the pop-up, gets gentle welcome. E re-engages — discount present, no quiz.
- **Sign-off:** "Talk soon," — Lena.
- **Migration anchor:** Subtle — E1 itself does not migrate, but the framing must NOT close the door on later level identification. "You'll hear from me this week" sets up E2–E4.

### E2 — Mechanism Reveal, "Holy Shit" Moment (Day 1)

- **Copy strategy:** Mechanism explain: "Your child talks about the potty but doesn't produce. Or he doesn't seem to notice when he's wet. Whether he sits for 20 minutes and nothing happens, or he pees the second his pull-up comes off — the reason is the same. It's not behavioral. It's signal-timing." Introduce interoception gently. Name 2–3 failed methods (Oh Crap, sticker charts, naked weekends) without level-pinning.
- **Primary lever:** L1 (Sensory Gap) + L5 (49% normalization).
- **Section structure:** observation → validation → mechanism.
- **GF-specific calibration:** This is the **tipping point email** for GF. R2 mandates 3–5 recognition anchors covering all three level paths WITHOUT naming them. Example anchors: "sits 20 minutes, nothing happens" (L1-style), "pees immediately when pull-up comes off" (L2-style), "doesn't react to wet diaper at all" (L3-style). Mom finds 1–2 that match HER child.
- **Sub-group reach:** A's curiosity satisfied; mechanism lands. B's defensive filter passes because symptom language only. C is mechanism-ready — interoception research is exactly what she's reading. D's level experience resonates because the anchors cover her level. E is engaged if she got this far.
- **Sign-off:** "Talk soon," — Lena.
- **Migration anchor #1 (E2–E4 migration anchors):** First of three. Embedded as a soft story link: "If your child is 5, verbal, and 'gets it but doesn't get it' — read Sarah's story." Symptom-described, no level label. Click-through updates tag IF and only if click reaches 70%+ confidence threshold (Giuliano §1.1).

### E3 — Guarantee + Permission Not to Buy (Day 3)

- **Copy strategy:** Decision time. 60-day guarantee prominent. "You don't have to hope — just try. 60 days. By your judgment." Permission-not-to-buy explicit. Pre-K urgency FORBIDDEN in GF (L1-only allowance).
- **Primary lever:** L3 (Guarantee) + L4 (Lena).
- **Section structure:** observation → mechanism → permission.
- **GF-specific calibration:** No Pre-K countdown. No "before kindergarten." Universal age language only. "Some kids 2 weeks. Others 8. Both normal." (R5.)
- **Sub-group reach:** A still hopeful. B defensive — guarantee + permission lands hard. C mechanism-curious — guarantee frames the trial. D realism-anchored — permission to delay or skip is exactly what she needs. E engaged only if recovery framing lands.
- **Sign-off:** "With understanding," — Lena.

### E4 — Failure Acknowledgment, "You Didn't Fail" (Day 7)

- **Copy strategy:** "You didn't fail. You solved the wrong problem — the frame was behavioral, the issue is signal-timing." Deep failure acknowledgment. Validate that all prior methods assumed a signal that wasn't there.
- **Primary lever:** L1 (Deep mechanism) + L5 (normalize).
- **Section structure:** observation → validation → mechanism.
- **GF-specific calibration:** The brand signature line "You haven't failed potty training. You solved the wrong problem." lands for GF Sub-Group B ONLY if softened to "the method didn't fail. The frame did." Maternal-blame version is forbidden in GF copy without Lena voice (per V16).
- **Sub-group reach:** A relieved — first absolution. B angry-but-listening — softened version passes her filter. C validating — mechanism alignment. D cathartic — exact words she needed to hear but no one said. E skeptical — absolution earns trust.
- **Sign-off:** "With understanding," — Lena.
- **Migration anchor #2:** Second of three. Story link rotated to a different symptom profile from E2 (e.g., "If your child is 7, has the words, but never seems to connect them to the action — read Lisa's story."). Symptom-described.

### E5 — Deep Mechanism (Day 10)

- **Copy strategy:** Interoception deep dive. Mahler quote acceptable (not required). SPARK 49% statistic — **NEVER used in GF copy** because it names autism explicitly. Instead use "almost 1 in 2 kids with nervous system differences aren't trained by age 5." Mechanism-oriented without diagnostic labels.
- **Primary lever:** L1 (Mechanism) — written for the mechanism-curious sub-groups (A, C, D).
- **Section structure:** mechanism.
- **GF-specific calibration:** "Nervous system differences" is the umbrella term. Mahler acceptable. Sensory integration literature acceptable. NEVER cite autism-specific research by name in GF — Mahler and Ayres are the safe canon.
- **Sub-group reach:** A eats this up. C is in her element. D uses this to decide whether to migrate. B tolerates — research is mechanism, not label. E is over her head and probably dropped off.
- **Sign-off:** "With understanding," — Lena.
- **Migration anchor #3:** Third and final migration anchor of the Welcome sequence. Different symptom profile again. After E5, if no migration has occurred via anchor clicks, PP-Level Detection at D14 is the next opportunity.

### E6 — Social Proof (Day 14)

- **Copy strategy:** Testimonials — universal cross-level stories. The Three-Family Pattern (one L1-style, one L2-style, one L3-style story, all symptom-described). No level labels. "Almost trained" loop closure stories.
- **Primary lever:** L4 (Peer Trust).
- **Section structure:** validation → permission.
- **GF-specific calibration:** Story blocks describe SYMPTOMS not levels. "A mom whose 5-year-old sits for 20 minutes and nothing happens." "A mom whose 7-year-old pees the moment the diaper comes off." "A mom whose 9-year-old didn't react to wet for years." Sub-group D reads the L3-style story and decides to migrate at Day 14.
- **Sub-group reach:** A sees herself. B sees the language is safe. C engages with peer mechanism. D sees her level. E re-engages if peer voice lands.
- **Sign-off:** "With care," — Lena.
- **CRITICAL CONFLICT NOTE:** PP-Level Detection ALSO fires at Day 14. Per S01 §5.2 and locked-profile flow_meta note, **PP-Level Detection takes priority over Welcome E6** for GF purchasers. For GF non-purchasers (Welcome-only path), E6 still fires normally. Suppression logic: if `purchased=true` AND `level=gf`, suppress Welcome E6, deliver PP-Level Detection.

### E7 — Last Call, WELCOME10 Expires (Day 17)

- **Copy strategy:** WELCOME10 code expires. "This is your last chance to try with the code + guarantee." Permission not to buy present.
- **Primary lever:** L3 (Guarantee) + L5.
- **Section structure:** permission.
- **GF-specific calibration:** No urgency beyond the code expiry. No Pre-K deadline. "If today isn't the day, that's a real answer." — directly ported from Checkout Abandonment E1.
- **Sub-group reach:** A motivated by code expiry. B skeptical — code expiry is rational, not emotional. C mechanism-curious — code expiry is irrelevant to her. D ambivalent. E either re-engages now or drops.
- **Sign-off:** "With care," — Lena.

### E8 — Gentle Close, Door Open (Day 21)

- **Copy strategy:** Gentle close. Door stays open. Migration anchors still surface (story links for level identification). Lena farewell.
- **Primary lever:** L4 (Lena).
- **Section structure:** permission.
- **GF-specific calibration:** Migration anchors here are FINAL Welcome-stage opportunities. If no migration by E8, the customer's next opportunity is PP-Level Detection at Day 14 *post-purchase* (different timeline — for buyers). For non-buyers, PP-Support At-Risk and FAQ/Objection Library are next.
- **Expected opens:** 20–30%. Keep warm. No hard close.
- **Sign-off:** "With care," — Lena.

---

## 3. CROSS-LEVEL FLOWS GF RECEIVES (Flows 02–22, excluding PP-Level Detection)

GF receives every cross-level flow because the segment is heterogeneous. The cross-level copy must pass V16 (symptom language only) and R1–R6 (recognition anchors, age range, verbal/non-verbal, timeline flexibility, low-bar metrics). The flows below are listed in lifecycle order from first customer touch to sunset.

### Flow 02 — Cart Abandonment (3 emails)

- **Trigger:** Item added to cart, no purchase within window. Suppresses Welcome GF E3+ during active cart (per S01 §3.1 Flow 07).
- **E1 (1h):** Mechanism reminder, 3–5 recognition anchors, Lena voice: "I saw these were on your mind..." Cart contents drive upsell strategy (e.g., 1-pair cart → 3+3 bundle upgrade dynamic content). No discount.
- **E2 (24h):** Social proof + product value. Three-Family Pattern testimonial (symptom-described, no level labels). "Most parents who buy 1 pair come back for 3+3 within a week."
- **E3 (72h):** 60-day guarantee + permission not to buy. Optional 10% off (test without discount first per macro).
- **GF calibration:** R1–R6 mandatory throughout. GF's heterogeneity means the Three-Family Pattern is essential — every sub-group must find herself. Speed > segmentation.

### Flow 03 — Checkout Abandonment (2 emails)

- **Trigger:** Customer reached checkout, did not complete.
- **E1 (1h):** Friendly reminder + answer last doubts. Show exact cart contents with pricing. Permission-based. "If today isn't right, that's a real answer."
- **E2 (24h):** Final nudge + 60-day guarantee. "Try it for 60 days. By your judgment." Free shipping reminder.
- **GF calibration:** No additional discount (highest-intent abandoners). Cross-level only — no segmentation. The 60-day guarantee is the strongest lever for B (defensive) and D (realism-anchored).

### Flow 04 — Browse Abandonment (3 emails)

- **Trigger:** Viewed product pages, no cart created.
- **E1 (24h):** Mechanism education hook. "You were looking at something that helps kids who can't feel when they need to go." Educational, not promotional.
- **E2 (3 days):** Deep mechanism + product education. "Here's why the 3-layer system works differently." One Three-Family testimonial.
- **E3 (7 days):** 60-day guarantee + gentle close. "60 days for your child's nervous system to start connecting."
- **GF calibration:** E1–E2 NO direct offer. E3 first offer. Mechanism-led rather than promo-led because Group E (cart/browse without opt-in, ~10% of GF) is here. R1–R6 mandatory.
- **Note on cadence inconsistency:** S01 §3.1 says 2h/24h/72h. S02 §4.4 says 24h/3d/7d. S02 cadence adopted per locked-profile reconciliation.

### Flow 05 — Order Confirmation (1 email)

- **Trigger:** Immediate post-purchase.
- **Copy:** Tone 50/50 hope/realism (neutral transactional). Order summary, shipping timeline, 60-day guarantee reminder. Lena sign-off: "You've got this. We've got your back. — Lena."
- **GF calibration:** Google 2024 rule: must be predominantly transactional. NO promotional content. ONE accessory cross-sell (wash bag) — soft. This is the customer's first post-purchase brand impression.

### Flow 06 — Shipping & Out for Delivery (2 emails)

- **E1 (fulfillment):** Tracking info, delivery estimate, teaser for what happens on arrival. Lena: "Can't wait for you to try them. — Lena." Excitement building, prep tips for receiving.
- **E2 (morning of delivery):** "Today's the day!" Prep guidance: wash first, no fabric softener, let child unbox. Manage expectations: "First few wears are about introducing the sensation, not results."
- **GF calibration:** These emails fire for every level the same way. R1–R6 less critical here (logistical), but age range and verbal/non-verbal language still applies.

### Flow 07 — Arrived & Welcome (1 email)

- **Trigger:** Delivery confirmed or estimated delivery date.
- **Copy:** "They're here!" First-wear protocol. Mechanism education: "The wetness signal works by letting your child FEEL when they're wet." What-to-expect timeline: Week 1 awareness, Week 2–4 recognition, Week 4–8 active response. Link to PP-Education resources.
- **GF calibration:** Gentle upsell if 1-pair buyer (1→3+3, 3+3→5+5 per S01 §3.1). S01 flags this as "massive upsell opportunity." For GF, the upsell window is doubly important because Group A (Diagnostic Entrants) often buys the smallest pack while deciding.

### Flow 08 — PP-Direct Upsell (2 emails)

- **Trigger:** Post-purchase, 1-pair buyers only.
- **E1 (Day 1 post-purchase):** "Most parents who buy 1 pair come back for 3+3 within a week. Here's why." Bundle comparison table. Math reframe OK for GF (L1–L2 only; L3 is forbidden math reframe, but at this stage we don't know if she'll be L3). Tone: helper, not seller.
- **E2 (Day 3 post-purchase):** "Your 1 pair is on its way. Here's how the 3+3 bundle complements it." 10% off add-on (test without first).
- **GF calibration:** NEVER "You didn't buy enough." Frame as rotation need. R1–R6 throughout.
- **Note on cadence inconsistency:** S01 §3.1 Flow 13 says D0/D5. S02 §4.8 says D1/D3. S02 cadence adopted.

### Flow 09 — PP-Level Detection — SEE SECTION 4 BELOW

This is the dedicated GF-only flow. Not cross-level. Not level-specific. Only `avatar_general` subscribers receive it.

### Flow 10 — PP-Mary S. Story (1 email)

- **Trigger:** Day 3 post-purchase.
- **Copy:** Founder story — Mary S. appears ONCE. "I started BrightKidCo because my own child couldn't feel the signal..." Signed as Mary S., NOT Lena. No offer. Pure brand building.
- **GF calibration:** Cross-level R1–R6. The Mary S. founder story lands for GF because she is the ultimate "didn't know what label to use" parent — she is the brand's GF archetype.
- **Phase inconsistency note:** S01 §3.1 places this in Phase 1 (Flow 15). S02 §4.10 implies Phase 2. S02 placement adopted per locked-profile reconciliation.

### Flow 11 — PP-Education D0-21 (4 emails)

- **Trigger:** Day 0–21 post-purchase. Cross-level R1–R6 throughout. Level-aware content blocks if tag is known (for migrated Group D, after Day 14).
- **E1 (Day 0):** "Your first wear." Put on like regular underwear. No expectations. Just observe. Manage expectations from minute one.
- **E2 (Day 7):** "What to look for." Micro-signs: pause, touch, look down, shorter dry periods. Educate on observation cues.
- **E3 (Day 14):** "Week two reality." Progress isn't linear. Regression is normal. Don't stop. "Some kids react on day 3. Others day 30. Both normal."
- **E4 (Day 21):** "Celebrate the small wins." "He looked at the wet spot!" Soft upsell if 1-pair buyer.
- **GF calibration:** NO outcome promises. 1–2 parent quotes per email. Coaching + encouragement tone. R1–R6 throughout. The 49% SPARK stat may NOT be used in GF (autism-named). Universal normalization only.
- **CRITICAL CONFLICT NOTE:** PP-Education E3 fires at Day 14 — same day as PP-Level Detection. For GF purchasers, **PP-Level Detection takes priority** (per S01 §5.2). PP-Education E3 is suppressed for non-migrated GF and replaced with the migration mail. After migration, PP-Education E3 may resume in level-aware form if timing permits.

### Flow 12 — PP-Extended Upsell (3 emails)

- **Trigger:** Day 28+ post-purchase.
- **Type:** Level-aware (cross-level body with per-level framing).
- **E1 (Day 28):** Bundle upgrade. For GF non-migrated, "Cross-level" framing: "Whether your child is just starting to notice, or has been at this for years — the right amount of pairs depends on laundry cycles and consistency."
- **E2 (Day 35):** Accessory cross-sell. Wash Bag, Magic Targets. Cross-level R1–R6.
- **E3 (Day 42):** Final upsell. Guarantee reinforcement, door open.
- **GF calibration:** Tone varies by GF sub-group likelihood but copy must NOT level-label. For migrated GF (now L1/L2/L3), full per-level framing applies.

### Flow 13 — PP-Mid Check-In (3 emails)

- **Trigger:** Day 30+ post-purchase.
- **E1 (Day 30):** Three-Family Testimonial (Sarah/Lisa/Maria-stories — symptom-described for GF, full per-level for migrated). Reply-to-Lena invitation. Celebrate any progress, normalize absence of progress.
- **E2 (Day 45):** "How's it going?" Reply-to-this-email for support. High-trust invitation.
- **E3 (Day 60):** "At the 60-day mark." Guarantee reminder (earliest use window).
- **GF calibration:** Supportive peer tone. "Reply to this email" is a high-trust invitation that lands especially well with Group D (recently migrated, realism-anchored, needs human voice). For non-migrated GF, the Three-Family Pattern uses symptom descriptions only.
- **Note on cadence inconsistency:** S01 §3.2 Flow 18 says D30-60. S02 §4.13 says D45/D60/D75. S02 cadence adopted.

### Flow 14 — PP-Extended Education (20 emails, GF = 5 themes)

- **Trigger:** Day 22+ post-purchase, level tag known OR customer still `avatar_general`.
- **GF themes (5):** Cross-level R1-R6 deep education — Whether...If...Or... pattern; Three-Family Pattern; Mixed scenarios; Migration reinforcement; plus one buffer theme.
- **Per-email timing:** Not specified in S02 §4.14. Inferred cadence: every 7–14 days from D22 through ~D150. Sub-group D migration here at D30–45 is the second migration wave (after PP-Level Detection).
- **For migrated GF:** Customer exits GF themes and enters L1/L2/L3 themes for the remainder of the 20-email sequence. Brand-side suppression logic switches at migration moment.
- **For permanent GF (B, C):** Customer completes all 5 GF themes. Mechanism deep, no labels, no migration pressure. Welcome home.

### Flow 15 — PP-Support At-Risk (4 emails)

- **Trigger:** 3–21 days no opens post-purchase.
- **E1 (3 days no open):** "I noticed you haven't opened recent emails. Just checking in." Concerned peer, NOT corporate.
- **E2 (7 days no open):** "Here's how to get the most out of your pairs." Support offering.
- **E3 (14 days no open):** "Your child's nervous system is learning even when it doesn't show." Normalization.
- **E4 (21 days no open):** "Your 60-day guarantee is still active." Risk reversal reminder.
- **GF calibration:** R1–R6. NO upsells. NO "We miss you." NEVER guilt-tripping. If level tag is known (migrated Group D), tone adjusts per level. For non-migrated GF, gentle recovery.
- **Migration hook in E3:** Soft story link may surface here for non-migrated GF — late migration opportunity for Group D that did not respond to PP-Level Detection.

### Flow 16 — Replenishment A/B/C (7 emails)

- **Trigger:** Post-purchase D14+ depending on initial bundle size.
- **A (1-pair buyer, 3 emails):** A1 D14 wash cycles reminder. A2 D30 consistency matters. A3 D60 guarantee threshold.
- **B (3+3 buyer, 2 emails):** B1 D75 "Time to rotate." B2 D90 bundle upgrade to 5+5.
- **C (5+5 buyer, 2 emails):** C1 D150 "Long haul support." C2 D180 accessory refresh.
- **GF calibration:** Tone: practical reminder, not sales. "Training underwear works best when you rotate pairs." L3 rule (never push 5+5) does NOT apply to GF at this stage because we don't know level. For migrated GF who became L3, suppression logic switches.
- **Note on cadence:** S02 gives explicit D14/D30/D60, D75/D90, D150/D180. Adopted.

### Flow 17 — Review Request (2 emails)

- **Trigger:** Day 30+ post-purchase.
- **E1 (Day 30):** "Has BrightKidCo made a difference? Share your experience." Direct review link + 1–2 leading questions.
- **E2 (Day 60):** Follow-up if no review. "Your experience helps other parents decide." Altruism framing.
- **GF calibration:** "Other parents need to hear what worked (and didn't) for your child." Peer request tone, not transactional. For migrated GF, level-aware review prompt.
- **Note on cadence:** S01 §3.2 says D21-30. S02 §4.17 says D30/D60. S02 adopted.

### Flow 18 — Winback Path A (12 emails, GF = 3 themes)

- **Trigger:** 90 days no engagement (post-purchaser).
- **Suppression priority:** Winback pauses ALL nurture flows while active. Overrides Welcome, PP-Education, Replenishment.
- **GF themes (3):** Cross-level R1-R6; Symptom-first; Migration anchor.
- **For migrated GF:** Exits GF themes, enters L1/L2/L3 themes.
- **For permanent GF:** Completes the 3 GF themes — final re-engagement opportunity before Sunset.

### Flow 19 — Winback Path B (12 emails, GF = 3 themes)

- **Trigger:** 60 days no purchase (never-bought).
- **Lower conversion than Path A.** Non-buyers need stronger mechanism proof.
- **GF themes (3):** Same structure as Path A. FAQ path after winback completion.

### Flow 20 — FAQ/Objection Library (6 emails)

- **Trigger:** Phase 3 trigger — Welcome end + no purchase.
- **Type:** Level-specific blocks (cross-level body with per-level content blocks). For non-migrated GF, the GF block is used. For migrated GF, the appropriate L1/L2/L3 block.
- **E1 — D1 Tried Everything:** 4-step reframe (Name → Validate → Reframe → Absolve). Defeated → Absolved. Sources: Nicholson 2019.
- **E2 — D4 Too Old/Severe:** Hopeless → Empowered (late-trainer stories). Sources: Faulkner 2017.
- **E3 — B4 GI/Withholding:** Scared → Supported. Medical reframe. Sources: McElhanon 2014.
- **E4 — C3 Worth $30–50?:** Defensive → Valued. NOTE: L3 NEVER math reframe — applies to L1–L2 only. For GF (non-migrated), math reframe acceptable.
- **E5 — B2 BCBA Compatibility:** Conflicted → Confident. For GF non-migrated, BCBA language may NOT appear (R1 + V16). Block becomes generic "professional recommendations" framing.
- **E6 — D3 Hope-Crash Fear:** Protected → Safe to try. Sources: Hample 2020.
- **GF calibration:** Each email uses 4-step reframe. Per-level content blocks with cross-level body. GF-specific block softens BCBA framing, removes all level labels, retains mechanism specificity.

### Flow 21 — Referral Flow (3 emails)

- **Trigger:** Post-purchase D30+, satisfaction indicator.
- **E1:** "Know another parent who's struggling? Share BrightKidCo." Incentive: discount on next purchase. Three-Family Pattern for social proof (symptom-described for GF).
- **E2:** Referral ask reinforcement. Lena voice: "When something works for our kids, we tell each other."
- **E3:** Final reminder + dual-sided incentive.
- **GF calibration:** Phase 3 trigger. Community framing. For migrated GF, level-specific testimonials in social proof block.

### Flow 22 — Sunset (2 emails)

- **Trigger:** 120 days inactive (post-Winback completion) per S02. **NOTE:** S01 §3.3 Flow 27 specifies stricter trigger: 120 days no open AND no click AND no purchase AND received 20+ emails. **S01 trigger is more precise and is the operating rule** per locked-profile status. S02 simplified trigger adopted for plan-level mapping but operations should use S01 conditions.
- **E1:** Re-permission check. "Do you still want to hear from us?" One-click preference update. Respectful exit, NEVER guilt.
- **E2:** Final farewell. No response = suppressed for 6–12 months.
- **GF calibration:** HIGHEST PRIORITY — suppresses ALL other flows unconditionally. After sunset, tag `unengaged = True`, add to Master Suppression List.
- **For migrated GF:** Same flow, but tone can be more level-specific in the farewell.

---

## 4. PP-LEVEL DETECTION — THE DAY 14 MIGRATION TOUCHPOINT (Flow 09)

This section maps the PP-Level Detection moment in detail because it is the **single biggest conversion lever** in the GF system.

### 4.1 What It Is

PP-Level Detection is the only **GF-only** flow in the entire BrightKidCo system. It is a single email, fires once, at Day 14 post-purchase, ONLY for customers who still carry `avatar_general`. Other levels do not receive it. Its job is to convert the customer's GF tag into an L1/L2/L3 tag via self-selection — without forcing the choice.

### 4.2 What Triggers It

- **Customer has `level = avatar_general` (GF tag still set)**
- **Customer has `purchased = true`**
- **Day 14 post-purchase has been reached**
- **No prior migration event has fired (no re-selection, no qualifying story link click)**

If the customer already migrated via Welcome-stage story link click (E2, E4, or E5 of Welcome GF), they are no longer GF and PP-Level Detection is suppressed. If they migrated via pop-up re-engagement (rare), same suppression.

### 4.3 What It Asks

PP-Level Detection does NOT ask "What level is your child?" That question fails (per avatar profile §7). Instead, it asks: **"Do you recognize your child's experience in one of these stories?"**

The email presents 3–4 story links, each describing a symptom profile WITHOUT naming the level. The copy framing per strategy-macro.json flow 9:

> "I've noticed parents in different situations have different experiences. You might recognize yourself in one of these stories…"

The four story links are symptom-based, matching the four buttons the customer originally saw in the pop-up:

| Button | Symptom Description (pop-up language, reused verbatim) | Maps To |
|--------|---------------------------------------------------|---------|
| 1 | "He talks about the potty but doesn't produce. Sits for 20 minutes. Nothing happens." | L1 (Sarah) |
| 2 | "She pees the second her pull-up comes off. Or holds it for hours and then has an accident." | L2 (Lisa) |
| 3 | "He doesn't seem to notice when he's wet. Or reacts late." | L3 (Maria) |
| 4 | "I'm still figuring out what's going on." | GF (re-confirm) |

**CRITICAL:** Buttons 1–3 do NOT say "Level 1/2/3." They use the SAME symptom-based language as the pop-up. This is V16-compliant and R1-compliant. The customer self-selects by recognizing her child's experience, not by claiming a label.

### 4.4 What Happens After the Click

When the customer clicks a story link (Buttons 1–3):

1. **70%-confidence floor rule applies (Giuliano §1.1).** The click itself is one signal; the system must have ≥70% confidence the customer is moving from GF to a specific level. A single click on a single story is enough signal — the customer just re-selected a button that maps to a level with the same symptom language she already saw in the pop-up.
2. **Tag updates:** `level` changes from `avatar_general` to `l1`, `l2`, or `l3`.
3. **Welcome suppression:** If the customer was still receiving Welcome E6+ (Day 14 = Welcome E6 timing), E6 is suppressed for her per priority rule. Welcome GF sequence is terminated. She does NOT receive E7 or E8 of Welcome GF.
4. **PP-Education D0-21 E3 suppression:** PP-Education E3 also fires at Day 14 ("Week two reality"). PP-Level Detection takes priority per S01 §5.2. The migrated customer instead receives PP-Level Detection. PP-Education continues at E4 (Day 21) but with the new level-aware content block.
5. **Future flows re-route:** PP-Extended Education (Flow 14) switches from GF themes to L1/L2/L3 themes. Replenishment (Flow 16) loses GF-tone and may gain level-aware cadence. Winback (Flow 18/19) uses level-specific themes. FAQ (Flow 20) uses level-specific blocks. Migration anchor link clicks in PP-Education E2/E3 are now suppressed (she already migrated).
6. **The migration is permanent for Group D.** Once she re-selects, she does NOT receive further GF mail. The brand's relationship with her is now through her level's lens.

When the customer clicks Button 4 ("Still figuring out what's going on"):
1. **Tag remains `avatar_general`.** No migration.
2. **Future migration opportunities:** PP-Extended Education story links (Flow 14, ~D30–60), PP-Support At-Risk E3 soft story link (~D30+), and FAQ/Objection Library narrative prompts remain available.
3. **GF mail continues.** She remains a permanent GF resident unless she later re-engages.

When the customer does NOT click any button:
1. **Tag remains `avatar_general`.**
2. **Single touchpoint fired.** PP-Level Detection is a one-shot. It does NOT re-send at D21, D30, or D60. Migration becomes fully dependent on organic story link clicks in later flows.
3. **Migration potential still exists** but at lower rates (estimated 5–10% organic migration post-PP-Level Detection vs 40–50% at the touchpoint itself).

### 4.5 Expected Performance

Per strategy-macro.json and S01 §5.2:
- **Migration rate at PP-Level Detection:** 40–50% of Group D (Overwhelmed Non-Selectors, ~25% of GF overall).
- **Computed:** 50% of total audience × 25% Group D × 45% midpoint migration = **5.6% of total audience migrates at Day 14**.
- **Combined with other migration waves (Welcome anchors, story links, organic re-engagement):** Target 65–75% migration over lifecycle, bulk by Day 30.
- **What the other 25–35% of GF customers look like:** Group B (Diagnosis-Rejecters, ~15%) and Group C (Sensory-Difference, ~25%) are permanent GF residents. They will never migrate.

### 4.6 Why This Is The Biggest Lever

No other mail in the BrightKidCo system:
- Reaches a customer who has already purchased (transaction-confirmed intent).
- Asks for self-identification in the customer's own language (symptom-based).
- Has a measured 40–50% conversion expectation at a single touchpoint.
- Determines the customer's entire downstream mail stream (level-aware vs cross-level GF).
- Combines high emotional permission (Day 14 = trust established) with low perceived risk (story clicks, not "take a quiz" or "claim a label").

### 4.7 Copy Specifics

- **Subject line:** Symptom-framed, no level label. Examples (per R1–R6):
  - "Some kids it clicks right away. Others it takes longer. Where's yours?"
  - "Three parents wrote in this month. Does any of this sound like your house?"
  - "Quick question — 14 days in, how's it going?"
- **Preheader:** Mechanism-light. "If one of these sounds like your child's experience, I'd love to send you more stories like it."
- **Body:** Lena voice SHORT variant (not the longer Welcome E2 voice). Validating tone. 3–4 story link blocks, each ~2 sentences of symptom description + "Read [Name]'s story →" CTA.
- **No offer.** Pure detection.
- **Lena sign-off:** "Talk soon," or "With understanding," — short.
- **CTA aggression:** Lowest of any GF mail. Story links styled as text-link or low-emphasis button. This mail does not sell. It listens.

### 4.8 Suppression Priority Rule (CRITICAL)

When Day 14 arrives for a GF purchaser, the suppression priority is:

1. **PP-Level Detection (Flow 09)** — HIGHEST. Suppresses everything else.
2. **Welcome GF E6 (Flow 01)** — SUPPRESSED for purchasers (Welcome E6 is post-purchase-content-light).
3. **PP-Education D0-21 E3 (Flow 11)** — SUPPRESSED. PP-Education resumes at E4 (Day 21) with level-aware content block IF migrated.

After Day 14, the customer's tag is either `avatar_general` (no click) or `l1`/`l2`/`l3` (clicked). All subsequent flows use the post-migration tag for routing.

---

## 5. POST-MIGRATION — WHAT HAPPENS AFTER THE TAG CHANGES

This is the question the task asks explicitly. The answer has three branches depending on **when** migration happens.

### 5.1 Pre-Purchase Migration (Welcome Stage, E2/E4/E5 Story Link Click)

If the customer clicks a Welcome GF migration anchor (story link in E2, E4, or E5) BEFORE purchasing:

- **Tag updates** from `avatar_general` to `l1`/`l2`/`l3` immediately on click.
- **Welcome sequence re-routes** mid-flight. Customer drops out of Welcome GF and joins the appropriate Welcome L1/L2/L3 sequence at the next pending position.
- **Example:** Customer clicks L1 story link in Welcome GF E2 (Day 1). She is now L1. She will receive Welcome L1 E3 (Day 3) next, then E4 (Day 7), then E5 (Day 10), etc. She does NOT receive Welcome GF E3, E4, E5, E6, E7, or E8.
- **Cross-level flows:** Already triggered flows (Cart Abandonment, Browse Abandonment) continue to completion in their original cross-level form. Future cross-level flows use the new level tag for any level-aware content blocks.
- **PP-Level Detection at Day 14:** SUPPRESSED. Customer is no longer GF.
- **PP-Extended Education, Winback, FAQ:** Use level-specific themes/blocks from D22+ onward.

### 5.2 Day 14 Migration via PP-Level Detection (Primary Migration Wave)

Detailed in Section 4. Tag updates at click. Welcome GF already terminated (E6 suppressed). PP-Education D0-21 E3 also suppressed; resumes at E4 (Day 21) with level-aware content. From D22+ onward, all flows are level-routed.

### 5.3 D22+ Migration via PP-Extended Education Story Links (Secondary Migration Wave)

Customers who did NOT migrate at Welcome or Day 14 still have migration opportunities in:

- **PP-Extended Education E2–E4 (Flow 14, ~D30–60):** Story links symptom-based, same as PP-Level Detection.
- **PP-Support At-Risk E3 (Flow 15, ~D30+):** Soft story link in the value-reminder email.
- **FAQ/Objection Library narrative prompts (Flow 20):** When her objection is matched to an L1/L2/L3 story.
- **Organic story recommendations in any flow:** Whenever the brand surfaces "Other parents in your situation…" copy, she may click.

When migration happens via any of these:

- **Tag updates.** Future flows re-route.
- **PP-Extended Education switches themes** for any remaining emails in the 20-email sequence (she may be on theme 3 of 5 GF, and now joins theme 3 of 5 L1/L2/L3).
- **Replenishment, Winback, FAQ** all switch to level-aware.
- **No retroactive mail re-send.** She does NOT receive Welcome L1/L2/L3 retroactively. Her Welcome GF sequence is what it was.

### 5.4 No Migration — Groups B and C Permanent Residents

For Diagnosis-Rejecters (Group B, ~15% of GF) and Sensory-Difference (Group C, ~25% of GF):

- **Tag remains `avatar_general` for life.**
- **All 5 GF PP-Extended Education themes delivered** (no L1/L2/L3 re-route ever).
- **GF-specific Winback themes used** (Flow 18 and 19).
- **GF FAQ blocks used** (Flow 20).
- **Brand relationship maintained via cross-level flows + GF-specific blocks** for the full lifecycle through Sunset.

This is by design. Groups B and C cannot be migrated. The brand serves them best by remaining GF with them.

### 5.5 Cumulative Migration Math

- **Welcome GF stage (E2/E4/E5):** ~5–10% migration (Group A Diagnostic Entrants who recognize themselves as a level mid-Welcome).
- **PP-Level Detection (Day 14):** 40–50% migration of Group D × 25% Group D share × 50% GF share = **5.6% of total audience**.
- **PP-Extended Education (D22+):** ~5–10% of remaining non-migrated GF.
- **PP-Support At-Risk / Organic (D30–90):** ~5% of remaining.
- **Total migration target:** 65–75% of GF customers over lifecycle, bulk by Day 30. The remaining 25–35% are permanent GF residents (Groups B and C).

### 5.6 What Migrated Customers DO NOT Receive

- Welcome GF E3 onward (once migrated at Welcome stage).
- Welcome GF E6/E7/E8 (once migrated at Day 14).
- PP-Level Detection (Flow 09) at Day 14 (once migrated).
- GF-specific PP-Extended Education themes (once migrated at any wave).
- GF-specific Winback themes (Flow 18 and 19).
- GF-specific FAQ blocks (Flow 20).

### 5.7 What Migrated Customers DO Receive

- Appropriate level's Welcome sequence (L1, L2, or L3).
- All cross-level flows (Cart, Checkout, Browse, Order Confirmation, Shipping, Arrived, PP-Direct Upsell, Mary S. Story, PP-Education D0-21 with level-aware blocks, PP-Extended Upsell with level-aware framing, PP-Mid Check-In with level-aware blocks, PP-Support At-Risk with level-aware tone, Replenishment, Review Request, Referral, Sunset).
- Level-specific PP-Extended Education themes (5 per level).
- Level-specific Winback themes (3 per level).
- Level-specific FAQ blocks (per-level content snippets within cross-level body).

---

## 6. COMPLETE GF EMAIL TIMELINE — POST-PURCHASE PATH

The timeline below traces a GF customer through her full post-purchase journey, marking every flow she receives, the day each fires, what the email does, and the migration moment if/when it occurs.

| Day | Flow | Email | Purpose | Migration? |
|-----|------|-------|---------|------------|
| 0 | Order Confirmation | e1 | Order summary, guarantee reminder | — |
| 0 | Shipping & OFD | e1 | Tracking info, prep tips | — |
| 1 | PP-Direct Upsell | e1 | 1-pair → 3+3 bundle nudge | — |
| 1 | PP-Education D0-21 | e1 | "Your first wear" | — |
| 3 | PP-Direct Upsell | e2 | 10% off bundle add-on | — |
| 3 | PP-Mary S. Story | e1 | Founder story, no offer | — |
| 3 | Arrived & Welcome | e1 (if delivered) | First-wear protocol | — |
| ~3-5 | Shipping & OFD | e2 | "Today's the day!" | — |
| 7 | PP-Education D0-21 | e2 | "What to look for" | — |
| 14 | **PP-Level Detection** | **e1** | **Migration moment — 4 story links** | **40–50% migrate here** |
| 21 | PP-Education D0-21 | e4 | "Celebrate small wins" | — |
| 22+ | PP-Extended Education | starts | 5 GF themes OR 5 level themes if migrated | 5–10% migrate via story links |
| 28 | PP-Extended Upsell | e1 | Bundle upgrade | — |
| 30 | PP-Mid Check-In | e1 | Three-Family Testimonial + reply-to-Lena | — |
| 30 | Review Request | e1 | First review ask | — |
| 30 | Replenishment A | a2 | Consistency matters (1-pair buyer) | — |
| 35 | PP-Extended Upsell | e2 | Accessory cross-sell | — |
| 42 | PP-Extended Upsell | e3 | Final upsell, door open | — |
| 45 | PP-Mid Check-In | e2 | "How's it going?" reply invitation | — |
| 60 | PP-Mid Check-In | e3 | 60-day mark, guarantee | — |
| 60 | Review Request | e2 | Review follow-up | — |
| 60 | Replenishment A | a3 | Guarantee threshold | — |
| 75 | Replenishment B | b1 | "Time to rotate" (3+3 buyer) | — |
| 75 | PP-Mid Check-In | e3 (alt cadence) | Looking ahead, replenishment preview | — |
| 90 | Replenishment B | b2 | Bundle upgrade 5+5 | — |
| 90+ | Winback Path A | starts | 3 GF themes OR 3 level themes | — |
| 120+ | Sunset | e1 | Re-permission check | — |
| 124+ | Sunset | e2 | Final farewell | — |
| 150 | Replenishment C | c1 | Long haul support (5+5 buyer) | — |
| 180 | Replenishment C | c2 | Accessory refresh | — |

**Total post-purchase emails (no migration, full engagement):** ~36 cross-level + 5 GF PP-Extended Education + 3 GF Winback themes + 2 Sunset = ~46 emails across ~6 months.

**Plus pre-purchase emails if customer started in Welcome GF (8 emails) + Cart/Checkout/Browse Abandonment as triggered:** ~50–55 total emails in a full lifecycle.

---

## 7. THE 5 GF SUB-GROUPS — JOURNEY VARIATIONS

### 7.1 Group A — Diagnostic Entrants (~25% of GF)

- **Welcome GF:** Engages fully. E1 welcome lands. E2 mechanism is the tipping point. E4 failure acknowledgment is cathartic. Migration anchor in E2 may fire if she recognizes herself in L1 or L2 symptom profile mid-Welcome (~10% migrate here).
- **Post-purchase:** PP-Level Detection at Day 14 is her second migration opportunity. If she received a diagnosis between purchase and D14, she likely clicks. If still pre-diagnostic, she remains GF.
- **D22+ migration:** Likely once diagnostic workup confirms ASD level. PP-Extended Education story link is the trigger.
- **Net journey:** Migrates to L1 or L2 within ~30 days post-purchase.

### 7.2 Group B — Diagnosis-Rejecters (~15% of GF)

- **Welcome GF:** V16 is the litmus test. If copy passes, she stays. If copy fails, she spams.
- **Migration:** NEVER. Tag remains `avatar_general` for life.
- **Post-purchase:** PP-Level Detection at Day 14 — she does NOT click Buttons 1–3 (they imply the diagnosis she rejected). She may click Button 4 ("Still figuring out") or no button.
- **Full GF lifecycle:** Completes all 5 GF PP-Extended Education themes. Receives GF-specific Winback. Receives GF FAQ blocks.
- **Net journey:** Permanent GF resident. The brand's job is to serve her without ever labeling her child.

### 7.3 Group C — Sensory-Difference (~25% of GF)

- **Welcome GF:** Mechanism-deep content (Mahler, interoception) lands. She may not need the symptom recognition anchors because her child has SPD/ADHD, not ASD — but the R1–R6 anchors still cover her experience (sensory differences in body-signal).
- **Migration:** NEVER. Tag remains `avatar_general` for life.
- **Post-purchase:** PP-Level Detection at Day 14 — Buttons 1–3 imply ASD framing she does not accept. She clicks Button 4 or no button.
- **Full GF lifecycle:** GF mechanism-deep themes are perfect for her. Mahler, Ayres, sensory integration literature references are appropriate.
- **Net journey:** Permanent GF resident. The brand's job is to give her the mechanism (interoception) without the label (autism).

### 7.4 Group D — Overwhelmed Non-Selectors (~25% of GF) — THE GOLDMINE

- **Welcome GF:** Clicks past pop-up. Receives all 8 GF Welcome emails. The Three-Family Pattern in E6 is the trigger — she sees her level's symptom profile.
- **Post-purchase:** PP-Level Detection at Day 14 — **40–50% click Buttons 1–3 and migrate.** This is the single largest conversion lever in the GF system.
- **Post-migration:** Joins L1/L2/L3 PP-Extended Education, Winback, FAQ. Her pre-purchase GF Welcome is what it was — no retroactive L1/L2/L3 Welcome.
- **Net journey:** If she migrates at Day 14, she is functionally indistinguishable from an L1/L2/L3 customer from D22+ onward, except her Welcome was GF.

### 7.5 Group E — Cart/Browse without Opt-In (~10% of GF)

- **Welcome GF:** Did not opt in via pop-up. May receive Welcome via cookie-capture or browse abandonment → cart → checkout → purchase path. By the time she purchases, she is in Welcome GF (D0).
- **Post-purchase:** PP-Level Detection at Day 14 — she has revealed almost nothing about her child. Clicks Button 4 most often, or no button. Remains GF.
- **Migration:** Slow and behavior-driven. Will migrate IF she opens, clicks, and engages with story recommendations over time. Organic only.
- **Net journey:** Highest churn risk in PP-Education (low engagement baseline). PP-Support At-Risk and Winback are critical for retention. May migrate late (~D60+) or remain GF permanently.

---

## 8. SUPPRESSION RULES SUMMARY

GF-specific suppression rules (consolidated):

1. **PP-Level Detection (D14) SUPPRESSES** Welcome GF E6 and PP-Education D0-21 E3 (both fire at Day 14).
2. **Cart Abandonment SUPPRESSES** Welcome GF E3+ during active cart (per S01 §3.1 Flow 07).
3. **Winback (Path A or B) SUPPRESSES** ALL nurture flows while active (overrides Welcome, PP-Education, Replenishment).
4. **Sunset SUPPRESSES** ALL flows unconditionally. After sunset, `unengaged = True`, Master Suppression List.
5. **Migration SUPPRESSES** all GF-specific mail going forward (Welcome GF E3+ if migrating at Welcome, PP-Level Detection if migrating at Day 14, GF PP-Extended Education themes, GF Winback themes, GF FAQ blocks).
6. **Level-aware content blocks SWITCH** in PP-Education D0-21 E4+, PP-Extended Education, PP-Extended Upsell, PP-Mid Check-In, Replenishment, Review Request, Referral once tag is known.

---

## 9. GF-SPECIFIC FORBIDDEN PHRASES (Recap from Avatar Profile §8)

Mandatory across every GF email — violation destroys trust with at least one sub-group:

- "For Level 1/2/3 kids…"
- "Diagnosed autism only"
- "Verbal kids will…"
- "Your toddler will…"
- "He needs to want it" / "motivation is the issue"
- "When she's potty trained…"
- "Age 2.5–3.5"
- "Severe autism"
- "Non-verbal kids need…"
- "Adult diapers" / "Forever in pull-ups"
- "It's never too late!" / "Don't give up!"
- Brand signature line "You haven't failed potty training. You solved the wrong problem." in copy WITHOUT Lena voice (must be softened to "the method didn't fail. The frame did." for GF Sub-Group B compatibility).

**Most dangerous word for GF: "Simple."** Hits all five sub-groups.

**Forbidden subject line patterns:** No level labels. No diagnosis assumptions. No age pins narrower than 3–10+. No L1/L2/L3 NO-GOs ("Last chance," "Miracle solution," "Time is running out"). No L2 NO-GOs ("Easy," "Quick training tips"). No L3 NO-GOs (urgency, promise, cheerleader, comparison).

---

## 10. V16 + R1–R6 COMPLIANCE CHECK (Final Reference)

Before sending any GF email, confirm:

- **V16:** Could Group B read this without encountering "autism," "ASD," or "Level 1/2/3"? If no, rewrite.
- **R1:** Symptom over label. ❌ "Level 2" → ✅ "If your child pees the moment the pull-up comes off…"
- **R2:** 3–5 recognition anchors per mail. L1 / L2 / L3 symptom profiles represented without naming them.
- **R3:** Age ranges over fixed ages. "Kids 3 to 10+" — never pin to a single age.
- **R4:** Verbal / non-verbal inclusivity. Both modes always.
- **R5:** Timeline flexibility. "Some kids 2 weeks. Others 8. Both normal."
- **R6:** Low-bar success metrics. "Looked at the wet spot," "pulled at pants," "walked toward bathroom."

If all 7 checks pass, the mail is GF-ready. If any fail, fix before send.

---

## 11. QUICK-REFERENCE TOTAL EMAIL COUNT FOR GF

| Flow | Emails | Type |
|------|--------|------|
| 01 Welcome GF | 8 | Level-specific (GF variant) |
| 02 Cart Abandonment | 3 | Cross-level |
| 03 Checkout Abandonment | 2 | Cross-level |
| 04 Browse Abandonment | 3 | Cross-level |
| 05 Order Confirmation | 1 | Cross-level |
| 06 Shipping & OFD | 2 | Cross-level |
| 07 Arrived & Welcome | 1 | Cross-level |
| 08 PP-Direct Upsell | 2 | Cross-level |
| 09 PP-Level Detection | 1 | GF-ONLY |
| 10 PP-Mary S. Story | 1 | Cross-level |
| 11 PP-Education D0-21 | 4 | Cross-level |
| 12 PP-Extended Upsell | 3 | Level-aware |
| 13 PP-Mid Check-In | 3 | Cross-level |
| 14 PP-Extended Education | 5 (GF themes) | Level-specific (GF variant) |
| 15 PP-Support At-Risk | 4 | Cross-level |
| 16 Replenishment | 7 (A+B+C) | Cross-level |
| 17 Review Request | 2 | Cross-level |
| 18 Winback Path A | 3 (GF themes) | Level-specific (GF variant) |
| 19 Winback Path B | 3 (GF themes) | Level-specific (GF variant) |
| 20 FAQ/Objection Library | 6 | Level-specific blocks |
| 21 Referral Flow | 3 | Cross-level |
| 22 Sunset | 2 | Cross-level |
| **TOTAL (full lifecycle)** | **~68** | — |

The 68 figure includes both pre-purchase Welcome GF (8) and post-purchase flows (~60). Some flows are mutually exclusive (e.g., a customer who receives Cart Abandonment does NOT receive Checkout Abandonment for the same session). Realistic maximum per-customer receipt is **~50–55 emails** across the full lifecycle, assuming one cart abandonment, one checkout abandonment, no browse abandonment, full Welcome, full PP path, and full Winback if applicable.

---

## 12. CROSS-REFERENCES

- **Avatar profile:** `_notes/journey-gf-01-avatar.md` §1–10 (sub-groups, trust threshold, hope/realism, decision speed, V16, R1–R6, forbidden phrases, visual calibration, the One Thing).
- **Strategy macro:** `_notes/strategy-macro.json` flows 1–22 (per-flow structure, themes, timing, copy strategy).
- **Locked profile:** `_notes/locked-profile.json` (Stage 0 reconciliation, anomalies, status).
- **Brand marketing direction:** `outputs/strategy/giuliano/g3-brand-marketing-direction.md` §2.2, §2.6, §15.5–15.7.
- **Giuliano Demands:** `demands/GIULIANO-DEMANDS.md` §1, §1.2 (GF sub-groups), §8.5 (forbidden phrases), §8.6 (most dangerous word), §13 (journey stages), §14 V16 (symptom language only), §15.7 (visual calibration).
- **Customer avatar synthesis:** `outputs/synthesis/01-customer-avatar.md` §3.5.

---

*End of GF Email Sequence Reference. This document is the source of truth for what GF-tagged subscribers receive, in what order, with what triggers, and what happens after migration. All Stage 1 subagents briefing copy, flow architecture, or QA on cross-level flows, PP-Level Detection, the Welcome GF variant, or migration logic should reference this file.*