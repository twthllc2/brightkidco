     1|# S07-I4-P2: Flow Triggers — Post-Purchase + Lifecycle
     2|## BrightKidCo Email Program — Klaviyo Trigger Definitions for Post-Purchase and Lifecycle Flows
     3|
     4|**Generated:** 2026-05-26
     5|**Part:** 2 of Flow Triggers (Post-Purchase + Lifecycle)
     6|**Source Documents:**
     7|- Patched Full Email Strategy: `/docs/patched/1-full-email-strategy.md` (Sections 2-4, 6, 8-9)
     8|- Giuliano-Demands.md Section 15 (Klaviyo Implementation) + Sections 2-3 (Flow Lists) + Section 17 (Phase Rollout)
     9|- DOC-07: Email Sequence Framework (27-flow architecture, trigger definitions)
    10|- Layer-16: Flow Architecture (Sequential + Concurrent Flow Design)
    11|- Layer-19: Migration Strategy (4 migration paths, PP-Level Detection)
    12|
    13|---
    14|
    15|## Flow Architecture Overview
    16|
    17|### Post-Purchase Trunk (Sequential Chain)
    18|
    19|The post-purchase trunk flows 08-14 fire sequentially from the Purchase event, with specific day-based delays. They form a linear education+upsell cadence during the critical first 60 days post-purchase.
    20|
    21|```
    22|Purchase Event (Order Placed)
    23|  │
    24|  ├─ F08: PP-Direct Upsell          (Day 1-3, 2 emails)     ← Phase 1
    25|  ├─ F09: PP-Level Detection         (Day 14, 1 email)       ← Phase 1 [GF-only]
    26|  ├─ F10/F11: PP-Mary S. Story       (Day 3-5, 1 email)      ← Phase 2
    27|  ├─ F11/F12: PP-Education D0-21     (Day 0-21, 4 emails)    ← Phase 2
    28|  │     │
    29|  │     ├─ F12/F13: PP-Extended Upsell   (Day 28+, 3 emails) ← Phase 2 [level-aware]
    30|  │     ├─ F13/F14: PP-Mid Check-In      (Day 30-60, 3 emails) ← Phase 2
    31|  │     ├─ F14/F15: PP-Extended Education (Day 22+, 5 emails × 4) ← Phase 3
    32|  │     └─ F15/F16: PP-Support At-Risk   (Triggered, 4 emails) ← Phase 3
    33|  │
    34|  └─ Concurrent Behavioral Triggers (fire independently):
    35|      ├─ F10: Browse Abandonment
    36|      ├─ F02: Cart Abandonment
    37|      └─ F03: Checkout Abandonment
    38|```
    39|
    40|### Lifecycle Flows (Engagement-Driven)
    41|
    42|Lifecycle flows trigger based on engagement decay, purchase history, and time since last interaction. They run in parallel with or after the post-purchase trunk.
    43|
    44|```
    45|Post-Purchase Active (Days 0-60+)
    46|  │
    47|  ├─ F18/F20: Review Request         (Day 30, 2 emails)     ← Phase 2
    48|  ├─ F19/F25: Referral Flow          (Day 30-45, 3 emails)  ← Phase 3
    49|  │
    50|  ├─ F20/F17: Replenishment A        (Day 14 + buyer_1pair, 3 emails)  ← Phase 2
    51|  ├─ F21/F18: Replenishment B        (Day 75 + buyer_3plus3, 2 emails) ← Phase 3
    52|  ├─ F22/F19: Replenishment C        (Day 150 + buyer_5plus5, 2 emails) ← Phase 3
    53|  │
    54|  ├─ F23/F21: Winback Path A         (inactive_60/90d + purchased, 3 × 4 levels) ← Phase 2
    55|  ├─ F24/F22: Winback Path B         (inactive_60/90d + no purchase, 3 × 4 levels) ← Phase 3
    56|  │
    57|  ├─ F17/F24: FAQ/Objection Library  (Welcome completed + no purchase, 6 emails) ← Phase 3
    58|  ├─ F27/F23: Sunset Flow            (inactive_120d, 2 emails)   ← Phase 3
    59|  │
    60|  └─ F26/F27: VIP/Loyalty            (vip_buyer tag, 2 emails)   ← Phase 3
    61|```
    62|
    63|### Flow Hierarchy: Winback vs Replenishment vs Nurture
    64|
    65|```
    66|Engagement Level ─┬─ HIGH (opens + clicks regularly)
    67|                  │    └─ Nurture Flows (PP-Education, PP-Mid Check-In, Extended Education)
    68|                  │
    69|                  ├─ MEDIUM (post-purchase window active, some opens)
    70|                  │    ├─ Replenishment A/B/C (pack-size based timing)
    71|                  │    ├─ Review Request
    72|                  │    └─ Referral Flow
    73|                  │
    74|                  ├─ LOW (3-7 days no opens)
    75|                  │    └─ PP-Support At-Risk (re-engagement attempt)
    76|                  │
    77|                  ├─ CRITICAL (60-90 days no engagement)
    78|                  │    └─ Winback Path A/B (final re-engagement)
    79|                  │
    80|                  └─ LOST (120+ days no engagement)
    81|                       └─ Sunset Flow (final 2 emails → suppress)
    82|```
    83|
    84|---
    85|
    86|## 1. PP-Direct Upsell (Flow 08 / Demands #09)
    87|**Phase 1 | Cross-Level | 2 Emails**
    88|
    89|### Trigger Definition
    90|| Parameter | Value | Source |
    91||-----------|-------|--------|
    92|| **Trigger Event** | `Order Placed` (Shopify → Klaviyo) | DOC-07 §Flow 08 |
    93|| **Timing** | E1: Day 1 post-purchase, E2: Day 3 post-purchase | Patched Strategy §4.5 |
    94|| **Audience** | All first-time purchasers (cross-level) | Patched Strategy §3.1 |
    95|| **Segmentation** | Cross-level — no level variant needed | Patched Strategy §5.1 |
    96|| **Phase** | 1 (Launch-Ready) | Patched Strategy §8.1 |
    97|
    98|### Klaviyo Flow Entry Conditions
    99|```
   100|[Trigger: Metric "Ordered" occurred at least 1 time within 7 days]
   101|[AND Metric "Ordered" count equals 1]  (first-time buyer guard, Phase 1)
   102|[AND Subscribed = true]
   103|[AND Profile Property "Suppressed" ≠ true]
   104|```
   105|
   106|### Email Timing
   107|| Email | Delay | Days Post-Purchase |
   108||-------|-------|-------------------|
   109|| E1 | 1 day after Order Placed | Day 1 |
   110|| E2 | 3 days after Order Placed | Day 3 |
   111|
   112|### Exit Conditions
   113|| Condition | Action |
   114||-----------|--------|
   115|| Subscriber purchases upsell item | Exit flow (purchase event fires Replenishment routing) |
   116|| Unsubscribes | Klaviyo auto-exit |
   117|| Subscriber reaches Day 14 without interaction | Flow completes; route to PP-Level Detection (if GF) |
   118|| Profile `Suppressed = true` | Immediate exit |
   119|
   120|### Suppression Rules
   121|- Do NOT send during Weeks 1-2 of domain warming (per Demands §32 — only Welcome, Cart, Browse, and basic Post-Purchase allowed)
   122|- Suppress if profile is in Welcome Flow and has not yet reached Day 1
   123|- Suppress if `at_risk_no_open` tag present (subscriber is disengaged)
   124|- Suppress if `inactive_60_days` or `inactive_120_days` tag present
   125|
   126|---
   127|
   128|## 2. PP-Level Detection (Flow 09 / Demands #12)
   129|**Phase 1 | GF-Only | 1 Email + Optional Day 21 Reminder**
   130|
   131|### Trigger Definition
   132|| Parameter | Value | Source |
   133||-----------|-------|--------|
   134|| **Trigger Event** | `Order Placed` + Day 14 + `avatar_general` tag | DOC-07 §Flow 09 |
   135|| **Timing** | Day 14 post-purchase | Layer-19 §2.3 |
   136|| **Audience** | GF-tagged purchasers only (avatar_general property) | Patched Strategy §4.6 |
   137|| **Segmentation** | Single email, GF-only | Patched Strategy §4.6 |
   138|| **Phase** | 1 (Launch-Ready) | Patched Strategy §8.1 |
   139|| **Expected Open** | 65-75% | Layer-19 §2.3 |
   140|| **Expected Migration** | 40-50% of GF purchasers | Layer-19 §2.3 |
   141|
   142|### Klaviyo Flow Entry Conditions
   143|```
   144|[Trigger: Metric "Ordered" occurred at least 1 time within 30 days]
   145|[AND Profile Property "avatar_level" equals "general"]
   146|[AND Metric "Ordered" last occurred ≥ 14 days ago]
   147|[AND Subscribed = true]
   148|[AND Profile Property "Suppressed" ≠ true]
   149|```
   150|
   151|### Email Timing
   152|| Email | Delay | Days Post-Purchase |
   153||-------|-------|-------------------|
   154|| E1 | 14 days after Order Placed | Day 14 |
   155|| E2 (Optional) | 7 days after E1 | Day 21 (only if no button clicked) |
   156|
   157|### Exit Conditions
   158|| Condition | Action |
   159||-----------|--------|
   160|| Subscriber clicks any level-detection button | Apply level tag (`avatar_level1/2/3`), remove `avatar_general`, exit flow |
   161|| Subscriber clicks Button 4 ("Still figuring it out") | Stays `avatar_general` permanently — flow exits |
   162|| No response by Day 21 after reminder | Stay `avatar_general` permanently — flow exits |
   163|| Unsubscribes | Klaviyo auto-exit |
   164|
   165|### Suppression Rules
   166|- **This flow takes priority OVER all other Day 14 mails** (Demands §15, line 571)
   167|- If subscriber has `avatar_level1/2/3` tag already → DO NOT enter this flow
   168|- Suppress for 7 days if subscriber is in PP-Education D0-21 (flow delay resolves conflict)
   169|- Suppress if `inactive_60_days` or `inactive_120_days` tag present
   170|- Do NOT send to L3 audience during Weeks 1-2 warming (Demands §26)
   171|
   172|### 4-Button Mapping
   173|| Button Text | Internal Tag | Segment |
   174||-------------|-------------|---------|
   175|| "Verbal, almost trained but inconsistent" | `avatar_level1` | Level 1 |
   176|| "Sensory issues, tried many methods" | `avatar_level2` | Level 2 |
   177|| "Non-verbal or high support needs" | `avatar_level3` | Level 3 |
   178|| "Still figuring it out" | stays `avatar_general` | General Fallback |
   179|
   180|---
   181|
   182|## 3. PP-Mary S. Story (Flow 10 / Demands #10)
   183|**Phase 2 | Cross-Level | 1 Email**
   184|
   185|### Trigger Definition
   186|| Parameter | Value | Source |
   187||-----------|-------|--------|
   188|| **Trigger Event** | `Order Placed` + Day 3-5 | DOC-07 §Flow 10 |
   189|| **Timing** | Day 3-5 post-purchase | Patched Strategy §4.7 |
   190|| **Audience** | All purchasers (cross-level) | Patched Strategy §4.7 |
   191|| **Segmentation** | Cross-level — single mail, never mixed with Lena | Patched Strategy §5.1 |
   192|| **Phase** | 2 (High-Value) | Patched Strategy §8.2 |
   193|
   194|### Klaviyo Flow Entry Conditions
   195|```
   196|[AND Profile Property "Ordered" has occurred at least 1 time]
   197|[AND Metric "Ordered" last occurred between 3 and 5 days ago]
   198|[AND Subscribed = true]
   199|[AND Profile Property "Suppressed" ≠ true]
   200|```
   201|
   202|### Email Timing
   203|| Email | Delay | Days Post-Purchase |
   204||-------|-------|-------------------|
   205|| E1 | 3-5 days after Order Placed | Day 3-5 |
   206|
   207|### Exit Conditions
   208|| Condition | Action |
   209||-----------|--------|
   210|| Single email — sends once and exits | Flow auto-completes after send |
   211|| Unsubscribes | Klaviyo auto-exit |
   212|
   213|### Suppression Rules
   214|- NEVER send to subscribers who have already received this email
   215|- Suppress if `at_risk_no_open` tag present
   216|- Suppress if `inactive_60_days` or `inactive_120_days` tag present
   217|
   218|---
   219|
   220|## 4. PP-Education Day 0-21 (Flow 11 / Demands #11)
   221|**Phase 2 | Cross-Level | 4 Emails × 21 Days**
   222|
   223|### Trigger Definition
   224|| Parameter | Value | Source |
   225||-----------|-------|--------|
   226|| **Trigger Event** | `Order Placed` | DOC-07 §Flow 11 |
   227|| **Timing** | Day 0, 7, 14, 21 post-purchase | Patched Strategy §4.8 |
   228|| **Audience** | All purchasers (cross-level) | Patched Strategy §4.8 |
   229|| **Segmentation** | Cross-level — universal education (DOC 5 content) | Patched Strategy §5.1 |
   230|| **Phase** | 2 (High-Value) | Patched Strategy §8.2 |
   231|
   232|### Klaviyo Flow Entry Conditions
   233|```
   234|[Trigger: Metric "Ordered" occurred at least 1 time within 30 days]
   235|[AND Subscribed = true]
   236|[AND Profile Property "Suppressed" ≠ true]
   237|[AND Profile Tag "welcome_completed" is not set]
   238|    OR Profile Tag "post_purchase_active" is set]
   239|```
   240|
   241|### Email Timing
   242|| Email | Delay | Days Post-Purchase |
   243||-------|-------|-------------------|
   244|| E1 | 0 days (immediate) | Day 0 |
   245|| E2 | 7 days after Order Placed | Day 7 |
   246|| E3 | 14 days after Order Placed | Day 14 |
   247|| E4 | 21 days after Order Placed | Day 21 |
   248|
   249|### Exit Conditions
   250|| Condition | Action |
   251||-----------|--------|
   252|| Subscriber reaches Day 21 | Flow completes; route to PP-Extended Upsell (Day 28) or PP-Mid Check-In (Day 30) |
   253|| Subscriber unsubscribes | Klaviyo auto-exit |
   254|| Profile `Suppressed = true` | Immediate exit |
   255|| Subscriber reaches Day 14 and is GF | **PP-Level Detection takes priority** (Day 14 mail is the detection mail) |
   256|
   257|### Suppression Rules
   258|- PP-Level Detection (Day 14) takes priority over Education E3 (Day 14) — the Day 14 email sends as detection for GF subscribers, Education E3 for level-tagged subscribers
   259|- Suppress if `at_risk_no_open` tag present (subscriber not opening post-purchase)
   260|- Suppress if `inactive_60_days` or `inactive_120_days` tag present
   261|- Content is cross-level (DOC 5 calibration rules: R1-R6) — applies to all level tags uniformly
   262|
   263|---
   264|
   265|## 5. PP-Extended Upsell (Flow 12 / Demands #14)
   266|**Phase 2 | Level-Aware | 3 Emails × Days 28-45**
   267|
   268|### Trigger Definition
   269|| Parameter | Value | Source |
   270||-----------|-------|--------|
   271|| **Trigger Event** | `Order Placed` + Day 28 | DOC-07 §Flow 12 |
   272|| **Timing** | Days 28, 32, 36 post-purchase | Patched Strategy §4.9 |
   273|| **Audience** | All purchasers (level-aware tonality) | Patched Strategy §4.9 |
   274|| **Segmentation** | Level-aware (single copy, tonality varies by level tag) | Patched Strategy §5.1 |
   275|| **Phase** | 2 (High-Value) | Patched Strategy §8.2 |
   276|
   277|### Klaviyo Flow Entry Conditions
   278|```
   279|[Trigger: Metric "Ordered" occurred at least 1 time within 60 days]
   280|[AND Metric "Ordered" last occurred ≥ 28 days ago]
   281|[AND Subscribed = true]
   282|[AND Profile Property "Suppressed" ≠ true]
   283|[AND Profile Tag "welcome_completed" has value]
   284|```
   285|
   286|### Email Timing
   287|| Email | Delay | Days Post-Purchase |
   288||-------|-------|-------------------|
   289|| E1 | 28 days after Order Placed | Day 28 |
   290|| E2 | 32 days after Order Placed | Day 32 |
   291|| E3 | 36 days after Order Placed | Day 36 |
   292|
   293|### Level-Aware Offer Rules
   294|| Level | Primary Offer | Secondary Offer | Never Offer | Tonality |
   295||-------|:-------------:|:---------------:|:-----------:|----------|
   296|| Level 1 | 1-pair→3+3 Bundle ($79.99) | 3+3→5+5 ($119.99) | — | Urgency OK, math reframe OK |
   297|| Level 2 | 1-pair→3+3 Bundle ($79.99) | 3+3→5+5 ($119.99) | — | Science-first, careful math |
   298|| Level 3 | 1-pair only ($34.99) | — | 5+5 Bundle | No urgency, NEVER math reframe |
   299|| GF | 1-pair→3+3 Bundle ($79.99) | — | — | Balanced, symptom-first |
   300|
   301|### Exit Conditions
   302|| Condition | Action |
   303||-----------|--------|
   304|| Subscriber purchases upsell | Exit flow; apply buyer tag (`buyer_3plus3` or `buyer_5plus5`) |
   305|| Unsubscribes | Klaviyo auto-exit |
   306|| Profile `Suppressed = true` | Immediate exit |
   307|
   308|### Suppression Rules
   309|- Do NOT enter if subscriber has already purchased the upsell target bundle
   310|- Suppress if `at_risk_no_open` tag present
   311|- Suppress if `inactive_60_days` or `inactive_120_days` tag present
   312|- L3: NEVER use math reframes, urgency, or push 5+5
   313|
   314|---
   315|
   316|## 6. PP-Mid Check-In (Flow 13 / Demands #15)
   317|**Phase 2 | Cross-Level | 3 Emails × Days 30-60**
   318|
   319|### Trigger Definition
   320|| Parameter | Value | Source |
   321||-----------|-------|--------|
   322|| **Trigger Event** | `Order Placed` + Day 30 | DOC-07 §Flow 13 |
   323|| **Timing** | Days 30, 45, 60 post-purchase | Patched Strategy §4.10 |
   324|| **Audience** | All purchasers (cross-level) | Patched Strategy §4.10 |
   325|| **Segmentation** | Cross-level — tone varies by level tag (single copy) | Patched Strategy §5.1 |
   326|| **Phase** | 2 (High-Value) | Patched Strategy §8.2 |
   327|| **Tonality** | Coach + patience (Layer-17 §Stage 5) | Patched Strategy §4.10 |
   328|
   329|### Klaviyo Flow Entry Conditions
   330|```
   331|[Trigger: Metric "Ordered" occurred at least 1 time within 90 days]
   332|[AND Metric "Ordered" last occurred ≥ 30 days ago]
   333|[AND Subscribed = true]
   334|[AND Profile Property "Suppressed" ≠ true]
   335|[AND Profile Tag "welcome_completed" has value]
   336|```
   337|
   338|### Email Timing
   339|| Email | Delay | Days Post-Purchase |
   340||-------|-------|-------------------|
   341|| E1 | 30 days after Order Placed | Day 30 |
   342|| E2 | 45 days after Order Placed | Day 45 |
   343|| E3 | 60 days after Order Placed | Day 60 |
   344|
   345|### Exit Conditions
   346|| Condition | Action |
   347||-----------|--------|
   348|| Subscriber reaches Day 60 | Flow completes |
   349|| Subscriber unsubscribes | Klaviyo auto-exit |
   350|| Profile `Suppressed = true` | Immediate exit |
   351|| Subscriber makes a repeat purchase | Exit flow; route to Replenishment A/B |
   352|
   353|### Suppression Rules
   354|- Suppress if `at_risk_no_open` tag present
   355|- Suppress if `inactive_60_days` or `inactive_120_days` tag present
   356|- If subscriber enters Winback Path A/B, pause Mid Check-In (Winback takes priority)
   357|- Do NOT send if subscriber has already entered Replenishment flow
   358|
   359|---
   360|
   361|## 7. PP-Extended Education (Flow 14 / Demands #13)
   362|**Phase 3 | Level-Segmented (×4) | 5 Emails × 4 Levels = 20 Emails**
   363|
   364|### Trigger Definition
   365|| Parameter | Value | Source |
   366||-----------|-------|--------|
   367|| **Trigger Event** | Level tag active + Day 22+ post-purchase | Demands §2 line 38 |
   368|| **Timing** | Days 22, 30, 38, 48, 60 post-purchase | Patched Strategy §4.11 |
   369|| **Audience** | Purchasers with level tag (L1/L2/L3/GF) | Patched Strategy §4.11 |
   370|| **Segmentation** | 4 level variants (L1, L2, L3, GF) — 20 unique emails | Demands §2 |
   371|| **Phase** | 3 (Nice-to-Have, Months 5-6) — moved from Phase 2 per Demands §2, §17 | Patched Strategy §3.3 |
   372|
   373|### Klaviyo Flow Entry Conditions
   374|```
   375|[Trigger: Metric "Ordered" occurred at least 1 time within 90 days]
   376|[AND Metric "Ordered" last occurred ≥ 22 days ago]
   377|[AND Profile Tag "welcome_completed" has value]
   378|[AND Profile Property "avatar_level" has one of: level1, level2, level3, general]
   379|[AND Subscribed = true]
   380|[AND Profile Property "Suppressed" ≠ true]
   381|```
   382|
   383|### Email Timing Per Level
   384|| Email | Day | L1 Focus | L2 Focus | L3 Focus | GF Focus |
   385||-------|:---:|:--------:|:--------:|:--------:|:--------:|
   386|| E1 | 22 | Pre-K timeline check | Sensory recalibration | Dignity-first check-in | Universal mini-wins |
   387|| E2 | 30 | "2-6 weeks for signals" | "4-8 weeks, BCBA-complementary" | "8-12+ weeks, no pressure" | "2-12 weeks, all normal" |
   388|| E3 | 38 | Pre-K countdown | Withholding as sensory | "Tolerated — that's a win" | Symptom-focused |
   389|| E4 | 48 | Verbal progress | AAC + body awareness | Medical adjunctive | Mixed signal examples |
   390|| E5 | 60 | Summer window | Regression prevention | Late-trainer stories | "Any awareness moment" |
   391|
   392|### Exit Conditions
   393|| Condition | Action |
   394||-----------|--------|
   395|| Subscriber reaches Day 60 | Flow completes; route to Review Request (Day 30+ window continues) |
   396|| Unsubscribes | Klaviyo auto-exit |
   397|| Profile `Suppressed = true` | Immediate exit |
   398|
   399|### Suppression Rules
   400|- Suppress if `at_risk_no_open` tag present
   401|- Suppress if `inactive_60_days` or `inactive_120_days` tag present
   402|- This is a Phase 3 flow — do NOT activate until Months 5-6 (after Welcome flow data and Phase 1-2 flows are live)
   403|- Requires level tag from migration (Welcome click, PP-Level Detection, or purchase hint) — GF variant for un-migrated purchasers
   404|
   405|---
   406|
   407|## 8. PP-Support At-Risk (Flow 15 / Demands #16)
   408|**Phase 3 | Cross-Level | 4 Emails × 7 Days**
   409|
   410|### Trigger Definition
   411|| Parameter | Value | Source |
   412||-----------|-------|--------|
   413|| **Trigger Event** | `at_risk_no_open` tag applied (3-7 days no opens post-purchase) | DOC-07 §Flow 15 |
   414|| **Timing** | Days 0, 2, 4, 7 after tag applied | Patched Strategy §4.12 |
   415|| **Audience** | Post-purchase subscribers with 3-7 days no opens | Patched Strategy §4.12 |
   416|| **Segmentation** | Cross-level — re-engagement is universal | Patched Strategy §5.1 |
   417|| **Phase** | 3 (Nice-to-Have, Months 5-6) | Patched Strategy §8.3 |
   418|
   419|### Klaviyo Tag Trigger Conditions
   420|```
   421|[Tag Applied: "at_risk_no_open"]
   422|This tag fires when:
   423|  [AND Metric "Ordered" occurred at least 1 time within 30 days]
   424|  [AND Metric "Opened Email" has NOT occurred within 3 days (minimum)]
   425|  [AND Metric "Opened Email" has NOT occurred within 7 days (upper bound)]
   426|  [AND Metric "Clicked Email" has NOT occurred within 7 days]
   427|  [AND Subscribed = true]
   428|  [AND Profile Property "Suppressed" ≠ true]
   429|```
   430|
   431|### Email Timing
   432|| Email | Delay After Tag | Total Days |
   433||-------|----------------|:----------:|
   434|| E1 | 0 (immediate on tag) | Day 0 |
   435|| E2 | 2 days after E1 | Day 2 |
   436|| E3 | 4 days after E1 | Day 4 |
   437|| E4 | 7 days after E1 | Day 7 |
   438|
   439|### Exit Conditions
   440|| Condition | Action |
   441||-----------|--------|
   442|| Subscriber opens any email | Remove `at_risk_no_open` tag; exit flow |
   443|| Subscriber clicks any email | Remove `at_risk_no_open` tag; exit flow |
   444|| Subscriber makes purchase | Remove tag; route to relevant post-purchase flow |
   445|| 7 days elapsed (no re-engagement) | Flow completes; keep tag active for Winback routing |
   446|| Unsubscribes | Klaviyo auto-exit |
   447|
   448|### Suppression Rules
   449|- This flow only fires if subscriber is post-purchase and NOT engaged
   450|- Do NOT enter if subscriber already has `inactive_60_days` tag (move directly to Winback)
   451|- Suppress if `inactive_120_days` tag present
   452|- If subscriber re-engages during flow → exit immediately (don't send remaining emails)
   453|
   454|---
   455|
   456|## 9. FAQ/Objection Library (Flow 17 / Demands #24)
   457|**Phase 3 | Cross-Level | 6 Emails × 30 Days**
   458|
   459|### Trigger Definition
   460|| Parameter | Value | Source |
   461||-----------|-------|--------|
   462|| **Trigger Event** | Welcome completed + no purchase | DOC-07 §Flow 24 |
   463|| **Timing** | Days 0, 3, 7, 14, 21, 28 after Welcome completion | Patched Strategy §4.13 |
   464|| **Audience** | Subscribers who completed Welcome but did NOT purchase | Patched Strategy §4.13 |
   465|| **Segmentation** | Cross-level (per Demands §3 line 96 — NOT level-segmented) | Demands §3 |
   466|| **Phase** | 3 (Nice-to-Have, Months 5-6) | Patched Strategy §8.3 |
   467|
   468|### Klaviyo Flow Entry Conditions
   469|```
   470|[Trigger: Profile Tag "welcome_completed_no_purchase" applied]
   471|[AND Metric "Ordered" has occurred 0 times ever]
   472|[AND Subscribed = true]
   473|[AND Profile Property "Suppressed" ≠ true]
   474|[AND Profile Tag "inactive_120_days" is NOT set]
   475|```
   476|
   477|### Email Timing
   478|| Email | Delay | Day of Series | Objection Series |
   479||-------|-------|:-------------:|:----------------:|
   480|| E1 | 0 (on tag) | D0 | D1 (self-blame / tried everything / too old) + D2 |
   481|| E2 | 3 days after E1 | D3 | D3 (hope-risk) + C3 (financial) |
   482|| E3 | 7 days after E1 | D7 | B1 (tried underwear) + B3 (sensory refusal) |
   483|| E4 | 14 days after E1 | D14 | C1 (brand unknown) + C2 (kids like mine) |
   484|| E5 | 21 days after E1 | D21 | B2 (BCBA complement) + B4 (GI issues) |
   485|| E6 | 28 days after E1 | D28 | Summary + closing — "If you ever want to revisit" |
   486|
   487|### Cross-Level Calibration (All 6 Emails)
   488|Per Demands §4, every FAQ email must apply R1-R6:
   489|- R1: Symptom description over level label
   490|- R2: 3-5 recognition anchors per mail spanning L1, L2, L3
   491|- R3: Age ranges instead of fixed ages
   492|- R4: Verbal + non-verbal inclusivity
   493|- R5: Timeline flexibility
   494|- R6: Low-bar success metrics
   495|
   496|### Exit Conditions
   497|| Condition | Action |
   498||-----------|--------|
   499|| Subscriber makes a purchase any time | Exit flow immediately; route to Post-Purchase Day 0-21 |
   500|| Subscriber reaches Day 60 (after Welcome completion) | Flow completes; `inactive_60_days` tag applied → routes to Winback Path B |
   501|
---

# Part 2: Post-Purchase + Lifecycle Flow Triggers

**Part 2 covers:** All post-purchase flows (PP-Direct Upsell, PP-Level Detection, PP-Mary S. Story, PP-Education D0-21, PP-Extended Upsell, PP-Mid Check-In, PP-Extended Education, PP-Support At-Risk) + Lifecycle flows (Replenishment A/B/C, Winback A/B, Review Request, Referral Flow, FAQ/Objection Library, Sunset Flow).

**System-wide standards from Part 1 (profile properties, tags, exit conditions, suppression rules, from address config) apply to all flows below.**

---

## Flow Numbering Cross-Reference

This section uses both the **Strategy numbering** (F##) and **Demands numbering** (section 3 mapping) for each flow. See the patched email strategy section 11.4 for full cross-reference.

---

## 9. PP-DIRECT UPSELL (F08 / Demands #09)

**Phase:** 1 (Launch-Ready, Months 1-2)
**Priority:** P0 (post-purchase upsell -- Day 1-3 window = best conversion window)
**Segmentation:** Cross-level (single copy)

### Trigger Definition

| Element | Specification | Source |
|---------|---------------|--------|
| **Trigger Event** | Placed Order -- fires after transactional chain (F04-F07) completes | [DOC-07 section Flow 08] |
| **Klaviyo Metric** | `Order Placed` | [DOC-07 section Flow 08] [Layer-16 section Flow 09] |
| **Trigger Condition** | Order placed, transactional chain flows complete (immediate), PP-Direct Upsell fires at Day 1 delay | [DOC-07 section Flow 08] |
| **Flow Position** | Sequential -- fires AFTER Arrived and Welcome (F07). Part of the post-purchase sequential trunk. | [Layer-16 section Flow 08-14] |

### Audience Filter

| Condition | Rule | Source |
|-----------|------|--------|
| **Primary Signal** | All purchasers -- `Order Placed` event | [DOC-07 section Flow 08] |
| **Segmentation** | Cross-level -- single copy, warm upsell tone | [Layer-16 section Flow 09] |
| **Exclusion** | Already purchased accessory (Wash Bag / Mattress Protector) in same order -- skip that accessory's upsell | [DOC-06 section 4.5] |

### Timing and Cadence

**2 emails over 3 days:**

| Email | Day | Upsell | Angle | CTA | Source |
|:-----:|:---:|:------:|-------|:---:|--------|
| E1 | 1 | Wash Bag ($12.99) | "The #1 accessory parents add with their first order" -- keeps underwear organized | "Add Wash Bag" | [DOC-07 section Flow 08] [DOC-06 section 4.5] |
| E2 | 3 | Mattress Protector ($24.99) | "Nighttime learning without midnight sheet changes" | "Protect the mattress" | [DOC-07 section Flow 08] |

### Exit Conditions

| Condition | Action | Transition | Source |
|-----------|--------|------------|--------|
| **Purchase (accessory)** | Exit Flow 08 | Continues to Flow 09 (PP-Level Detection) at Day 14 | [DOC-07 section Flow 08] |
| **Flow completes** | -- | Continues to Flow 09 (PP-Level Detection) at Day 14 | [Layer-16 section Flow 08-14] |
| **Unsubscribed** | Klaviyo unsubscribe | Suppressed | [Demands section 15] |

### Suppression Rules

| Rule | Scope | Source |
|------|-------|--------|
| **If accessory already in order** | Skip that specific upsell email (check line items in Order Placed event) | [DOC-06 section 4.5] |
| **Master Suppression List** | Hard bounces, unsubscribes, spam complaints | [DOC-09 section 5.6] |
| **Bot / Ghost Profiles** | `is_bot = True`, Ghost Profiles (120d) | [DOC-09 section 5.6-5.7] |

---

## 10. PP-LEVEL DETECTION (F09 / Demands #12)

**Phase:** 1 (Launch-Ready, Months 1-2)
**Priority:** P1 (critical for migration -- only fires Day 14 after first purchase)
**Segmentation:** GF-only (only fires for General Fallback purchasers)

### Trigger Definition

| Element | Specification | Source |
|---------|---------------|--------|
| **Trigger Event** | Day 14 post-purchase + `avatar_level` property = `general` | [DOC-07 section Flow 09] |
| **Klaviyo Metric** | Trigger: `Order Placed` + filter: `avatar_level == "general"` + delay: 14 days | [DOC-07 section Flow 09] [Layer-19 section 2.3] |
| **Trigger Condition** | Purchased 14 days ago AND still has `avatar_general` tag (no migration via Path 1/2/4 yet) | [Layer-19 section 2.3] |
| **Priority Override** | **Takes priority over ALL other Day 14 mails** -- if subscriber is in PP-Education (F12) Day 14 mail AND this fires, this flow wins | [Demands section 15] |

### Audience Filter

| Condition | Rule | Source |
|-----------|------|--------|
| **Primary Signal** | `Order Placed` + 14 days + `avatar_general` tag still present | [DOC-07 section Flow 09] |
| **Segmentation** | GF-only -- 4-button symptom-based level selector | [Layer-19 section 2.3] |
| **Exclusion 1** | Already has `avatar_level1/2/3` tag (migrated via Path 1/2/4) | [Layer-19 section 2] |
| **Exclusion 2** | Already received PP-Level Detection within 30 days | [DOC-07 section Flow 09] |

### Timing and Cadence

**1 email + 1 optional reminder:**

| Email | Day | Content | Expected Metrics | Source |
|:-----:|:---:|---------|:----------------:|--------|
| E1 | 14 | 4-button symptom-based level selection (NEVER level labels in copy). Subject: "Quick question about your kid" | Open 65-75%, Click 35-50%, Migration 40-50% | [DOC-07 section Flow 09] [Layer-19 section 2.3] |
| E2 (opt.) | 21 | Gentle reminder if no response. If still no response, stays GF permanently | -- | [Layer-19 section 2.3] |

**Button to Tag Mapping (symptom-based language, NEVER level labels):**

| Button Text | Tag Applied | Property Updated |
|-------------|:-----------:|:----------------:|
| "[ Talks about potty but won't actually do it ]" | `avatar_level1` | `avatar_level = "level1"` |
| "[ Sensory issues, tried many methods ]" | `avatar_level2` | `avatar_level = "level2"` |
| "[ Non-verbal or high support needs ]" | `avatar_level3` | `avatar_level = "level3"` |
| "[ Still figuring out what's going on ]" | stays `avatar_general` | stays `avatar_level = "general"` |

### Exit Conditions

| Condition | Action | Transition | Source |
|-----------|--------|------------|--------|
| **Button clicked (level selected)** | Update profile property + tag | Routes to level-specific PP-Education (F12/F15) | [Layer-19 section 2.3] |
| **No response to E1 + E2** | -- | Stays GF permanently | [Layer-19 section 2.3] |
| **Unsubscribed** | Klaviyo unsubscribe | Suppressed | [Demands section 15] |

### Suppression Rules

| Rule | Scope | Source |
|------|-------|--------|
| **PP-Level Detection priority** | Takes priority over ALL other Day 14 mails (PP-Education E3, etc.) | [Demands section 15] |
| **Path 3 overrides Path 4** | Self-selection via button click always overrides purchase-based hint inference | [Layer-19 section 2.3] |
| **Master Suppression List** | Hard bounces, unsubscribes, spam complaints | [DOC-09 section 5.6] |

---

## 11. PP-MARY S. STORY (F11 / Demands #10)

**Phase:** 2 (High-Value, Months 3-4)
**Priority:** P1 (background flow -- Lena is primary voice)
**Segmentation:** Cross-level (single copy)

### Trigger Definition

| Element | Specification | Source |
|---------|---------------|--------|
| **Trigger Event** | Placed Order + Day 3-5 | [DOC-07 section Flow 10] |
| **Klaviyo Metric** | `Order Placed` + delay 3-5 days (randomized) | [DOC-07 section Flow 10] |
| **Trigger Condition** | Purchase completed, delay randomized 3-5 days, sends single founder story mail | [DOC-07 section Flow 10] |
| **Note** | Mary S. appears ONLY in this dedicated mail -- NEVER mixed with Lena | [context-notes section B2] |

### Audience Filter

| Condition | Rule | Source |
|-----------|------|--------|
| **Primary Signal** | All purchasers -- cross-level | [DOC-07 section Flow 10] |
| **Segmentation** | Cross-level -- single copy, founder story tone | [DOC-11 section 2.1] |
| **From Address** | `hello@send.brightkidco.com` (marketing from) | [Demands section 26] |

### Timing and Cadence

| Email | Timing | Content | Source |
|:-----:|:------:|---------|--------|
| E1 | Day 3-5 | Mary S.'s journey as BKC founder -- her child's story, why she built BKC. Builds trust through founder authenticity without disrupting Lena's peer voice. | [DOC-07 section Flow 10] [DOC-11 section 2.1] |

### Exit Conditions

| Condition | Action | Source |
|-----------|--------|--------|
| **Email sent** | Terminal single email -- no further trigger from this flow | [DOC-07 section Flow 10] |
| **Unsubscribed** | Suppressed | [Demands section 15] |

### Suppression Rules

| Rule | Scope | Source |
|------|-------|--------|
| **Mary S. Lena separation** | NEVER include Lena content in this mail -- dedicated founder mail only | [context-notes section B2] |
| **Master Suppression List** | Hard bounces, unsubscribes, spam complaints | [DOC-09 section 5.6] |

---

## 12. PP-EDUCATION DAY 0-21 (F12 / Demands #11)

**Phase:** 2 (High-Value, Months 3-4)
**Priority:** P1 (highest post-purchase engagement window -- reduces refund rate)
**Segmentation:** Cross-level (single copy with calibration rules R1-R6)

### Trigger Definition

| Element | Specification | Source |
|---------|---------------|--------|
| **Trigger Event** | Order Placed -- fires 4 education emails over 21 days | [DOC-07 section Flow 11] |
| **Klaviyo Metric** | `Order Placed` | [DOC-07 section Flow 11] [Layer-16 section Flow 11] |
| **Trigger Condition** | Purchase completed, education flow fires E1 same day (E1 is educational, not promotional) | [DOC-07 section Flow 11] |
| **Flow Position** | Sequential -- fires after PP-Level Detection (F09) / early post-purchase | [Layer-16 section Flow 08-14] |

### Audience Filter

| Condition | Rule | Source |
|-----------|------|--------|
| **Primary Signal** | All purchasers -- cross-level educational content | [DOC-07 section Flow 11] |
| **Segmentation** | Cross-level -- uses R1-R6 calibration rules for level-inclusive content | [DOC-07 section Flow 11] |

### Timing and Cadence

**4 emails over 21 days:**

| Email | Day | Topic | Success Metric Referenced | Source |
|:-----:|:---:|-------|:-------------------------:|--------|
| E1 | 0 | Expectation setting + sensory prep | "Tolerated wearing it" (L3 win) | [DOC-07 section Flow 11] [DOC-15 section 4.4] |
| E2 | 7 | "Week 1 plateau is real -- hold the line" | "Paused before accident once" | [DOC-07 section Flow 11] [Layer-17 section Stage 5] |
| E3 | 14 | Mini-wins celebration + what to watch for | "Looked at wet spot" (all levels) | [DOC-07 section Flow 11] [DOC-08 section 3.6] |
| E4 | 21 | Troubleshooting + reassurance + regression normalization | "Stayed dry 2 hours instead of 30 minutes" | [DOC-07 section Flow 11] [Layer-18 section Rule 6] |

### Exit Conditions

| Condition | Action | Transition | Source |
|-----------|--------|------------|--------|
| **Flow completes (4 emails sent)** | -- | Continues to F13 (PP-Extended Upsell) at Day 28, F14 (PP-Mid Check-In) at Day 30 | [Layer-16 section Flow 08-14] |
| **`at_risk_no_open` tag applied** | Exit education flow | Routes to F16 (PP-Support At-Risk) | [DOC-12 section 5.1] |
| **Unsubscribed** | Klaviyo unsubscribe | Suppressed | [Demands section 15] |

### Suppression Rules

| Rule | Scope | Source |
|------|-------|--------|
| **PP-Level Detection priority (Day 14)** | If GF subscriber triggers Level Detection on Day 14, PP-Level Detection mail takes priority over PP-Education E3 (Day 14) | [Demands section 15] |
| **At-Risk override** | If subscriber disengages (no opens for 3-7 days), tag `at_risk_no_open` fires and overrides remaining education mails | [DOC-12 section 5.1] |
| **Master Suppression List** | Hard bounces, unsubscribes, spam complaints | [DOC-09 section 5.6] |

---

## 13. PP-EXTENDED UPSELL (F13 / Demands #14)

**Phase:** 2 (High-Value, Months 3-4)
**Priority:** P2 (increases AOV -- revenue lift, not foundational)
**Segmentation:** Level-aware (single flow, content adapts per `avatar_level` property)

### Trigger Definition

| Element | Specification | Source |
|---------|---------------|--------|
| **Trigger Event** | Order Placed + Day 28 | [DOC-07 section Flow 12] |
| **Klaviyo Metric** | `Order Placed` + delay 28 days + check `last_purchase_pack_size` property | [DOC-07 section Flow 12] [Layer-16 section Flow 12] |
| **Trigger Condition** | 28 days since last purchase AND subscriber has not already purchased upgrade | [DOC-07 section Flow 12] |

### Audience Filter

| Condition | Rule | Source |
|-----------|------|--------|
| **Primary Signal** | All purchasers at Day 28+ | [DOC-07 section Flow 12] |
| **Segmentation** | Level-aware -- content adapts per `avatar_level` property via Klaviyo conditional blocks | [DOC-07 section Flow 12] |
| **Offer path depends on** | `last_purchase_pack_size`: 1-pair to 3+3, 3+3 to 5+5, 5+5 to accessories | [DOC-06 section 4.5] |

### Timing and Cadence

**3 emails over 8 days:**

| Email | Day | Strategy | Level Rules | Source |
|:-----:|:---:|----------|-------------|--------|
| E1 | 28 | Level-aware offer intro: 1-pair to 3+3 / 3+3 to 5+5 | L1: urgency OK. L2: science-first framing. L3: 1-pair only, NEVER push 5+5 | [DOC-07 section Flow 12] [DOC-06 section 4.5] |
| E2 | 32 | Escalation -- value math + testimonials | L1: math reframe OK. L3: NEVER math reframe | [DOC-07 section Flow 12] [DOC-15 section 8] |
| E3 | 36 | Final -- guarantee + permission-not-to-buy | All levels: 60-day guarantee, "your call" | [DOC-07 section Flow 12] |

### Exit Conditions

| Condition | Action | Transition | Source |
|-----------|--------|------------|--------|
| **Purchase (upgrade)** | Exit upsell flow | Routes to Replenishment path for new pack size | [Layer-19 section 5] |
| **Flow completes (no purchase)** | -- | Continues to F14 (PP-Mid Check-In) at Day 30+ | [Layer-16 section Flow 12] |
| **`inactive_60_days` tag** | Exit upsell flow | Routes to Winback A (F23) | [DOC-12 section 5.1] |
| **Unsubscribed** | Klaviyo unsubscribe | Suppressed | [Demands section 15] |

### Suppression Rules

| Rule | Scope | Source |
|------|-------|--------|
| **Winback pause** | Winback pauses this flow if subscriber becomes inactive | [Demands section 15] |
| **Recent purchase override** | If subscriber already purchased upgrade, exit immediately | [DOC-07 section Flow 12] |
| **Master Suppression List** | Hard bounces, unsubscribes, spam complaints | [DOC-09 section 5.6] |

---

## 14. PP-MID CHECK-IN (F14 / Demands #15)

**Phase:** 2 (High-Value, Months 3-4)
**Priority:** P1 (celebrates progress, normalizes plateau -- directly reduces refund + builds LTV)
**Segmentation:** Cross-level (single copy with calibration rules R1-R6)

### Trigger Definition

| Element | Specification | Source |
|---------|---------------|--------|
| **Trigger Event** | Order Placed + Day 30 | [DOC-07 section Flow 13] |
| **Klaviyo Metric** | `Order Placed` + delay 30 days | [DOC-07 section Flow 13] [Layer-16 section Flow 13] |
| **Trigger Condition** | 30 days since purchase AND still `post_purchase_active` (opening/clicking emails) | [DOC-07 section Flow 13] |

### Audience Filter

| Condition | Rule | Source |
|-----------|------|--------|
| **Primary Signal** | Purchasers with `post_purchase_active` tag at Day 30 | [DOC-07 section Flow 13] |
| **Segmentation** | Cross-level -- content adapted per level via conditional tone sections | [DOC-07 section Flow 13] |
| **Exclusion** | `at_risk_no_open` tag present (disengaged -- routes to At-Risk instead) | [DOC-12 section 5.1] |

### Timing and Cadence

**3 emails over 30 days:**

| Email | Day | Tone per Level | Core Message | Source |
|:-----:|:---:|:--------------:|--------------|--------|
| E1 | 30 | L1: Coach+mini-wins, L2: Coach+troubleshooting, L3: Coach+acceptance, GF: Coach+patience | "How's it going? 30 days in -- here's what's normal" | [DOC-07 section Flow 13] [Layer-17 section Stage 5] |
| E2 | 45 | Troubleshooting -- regression is recalibration | "Regression isn't failure -- it's sensory recalibration" | [DOC-07 section Flow 13] [DOC-14 section S2] |
| E3 | 60 | Milestone reflection + next steps | "60 days. Here's what to look for next" | [DOC-07 section Flow 13] |

### Exit Conditions

| Condition | Action | Transition | Source |
|-----------|--------|------------|--------|
| **Flow completes (E3 sent)** | -- | Continues to F15 (PP-Extended Education) for level-tagged subscribers, or F18 (Review Request) at Day 30+ | [Layer-16 section Flow 13] |
| **`at_risk_no_open` tag during flow** | Exit Mid Check-In | Routes to F16 (PP-Support At-Risk) | [DOC-12 section 5.1] |
| **`inactive_60_days` tag** | Exit | Routes to Winback A (F23) | [DOC-12 section 5.1] |
| **Unsubscribed** | Klaviyo unsubscribe | Suppressed | [Demands section 15] |

### Suppression Rules

| Rule | Scope | Source |
|------|-------|--------|
| **At-Risk override** | If subscriber becomes `at_risk_no_open` during this flow, exit and route to F16 | [DOC-12 section 5.1] |
| **Winback pause** | Winback pauses this flow | [Demands section 15] |
| **Master Suppression List** | Hard bounces, unsubscribes, spam complaints | [DOC-09 section 5.6] |

---

## 15. PP-EXTENDED EDUCATION (F15 / Demands #13)

**Phase:** 3 (Nice-to-Have, Months 5-6) -- moved from Phase 2 per Demands sections 2 and 17
**Priority:** P2 (high value but requires Phase 1 accumulation of tagged subscribers)
**Segmentation:** 4 level variants (5 emails x 4 levels = 20 unique emails)

### Trigger Definition

| Element | Specification | Source |
|---------|---------------|--------|
| **Trigger Event** | PP-Education D0-21 (F12) complete + level tag active (NOT `avatar_general`) | [DOC-07 section Flow 14] |
| **Klaviyo Metric** | Profile property check: `welcome_completed = true` AND `avatar_level != "general"` + delay Day 22+ post-purchase | [DOC-07 section Flow 14] [Layer-16 section Flow 14] |
| **Trigger Condition** | Completed PP-Education D0-21 (F12) AND has explicit level tag (`avatar_level1/2/3`) | [DOC-07 section Flow 14] |
| **GF Fallback** | For `avatar_general` subscribers: cross-level version of Extended Education (R1-R6 calibration) | [DOC-07 section Flow 14] |

### Audience Filter

| Condition | Rule | Source |
|-----------|------|--------|
| **Primary Signal** | Purchasers with level tag who completed PP-Education D0-21 | [DOC-07 section Flow 14] |
| **Segmentation** | 4 level variants (L1/L2/L3/GF) -- unique copy per level via Klaviyo conditional blocks or separate flows | [DOC-07 section Flow 14] [DOC-15 section 4] |
| **Exclusion** | Did not complete PP-Education D0-21 (F12) -- must receive foundational education first | [DOC-07 section Flow 14] |

### Timing and Cadence

**5 emails per level over 38 days:**

| Email | Day | L1 Focus | L2 Focus | L3 Focus | GF Focus | Source |
|:-----:|:---:|:---------:|:---------:|:---------:|:--------:|--------|
| E1 | 22 | Pre-K timeline check | Sensory recalibration | Dignity-first check-in | Universal mini-wins | [DOC-07 section Flow 14] [DOC-15 section 4] |
| E2 | 30 | "2-6 weeks for signals" | "4-8 weeks, BCBA-complementary" | "8-12+ weeks, no pressure" | "2-12 weeks, all normal" | [DOC-07 section Flow 14] [DOC-08 section 3.6] |
| E3 | 38 | Pre-K countdown | Withholding as sensory | "Tolerated -- that's a win" | Symptom-focused | [DOC-07 section Flow 14] |
| E4 | 48 | Verbal progress | AAC + body awareness | Medical adjunctive | Mixed signal examples | [DOC-07 section Flow 14] |
| E5 | 60 | Summer window | Regression prevention | Late-trainer stories | "Any awareness moment" | [DOC-07 section Flow 14] |

### Exit Conditions

| Condition | Action | Transition | Source |
|-----------|--------|------------|--------|
| **Flow completes (E5 sent)** | -- | Continues to Review Request (F18) / Referral (F19) / inactivity cascade | [Layer-16 section Flow 14] |
| **`at_risk_no_open` tag** | Exit | Routes to F16 (PP-Support At-Risk) | [DOC-12 section 5.1] |
| **`inactive_60_days` tag** | Exit | Routes to Winback A (F23) | [DOC-12 section 5.1] |
| **Unsubscribed** | Klaviyo unsubscribe | Suppressed | [Demands section 15] |

### Suppression Rules

| Rule | Scope | Source |
|------|-------|--------|
| **Must complete F12 first** | PP-Extended Education cannot fire until PP-Education D0-21 completes | [DOC-07 section Flow 14] |
| **Winback pause** | Winback pauses this flow | [Demands section 15] |
| **Phase 3 deployment** | Only deploy after sufficient level-tagged subscriber pool accumulated | [Demands section 17] |
| **Master Suppression List** | Hard bounces, unsubscribes, spam complaints | [DOC-09 section 5.6] |

---

## 16. PP-SUPPORT AT-RISK (F16 / Demands #16)

**Phase:** 3 (Nice-to-Have, Months 5-6) -- moved from Phase 2 per Demands section 17
**Priority:** P2 (reduces churn -- important but reactive, only triggers if engagement drops)
**Segmentation:** Cross-level (single copy with calibration rules R1-R6)

### Trigger Definition

| Element | Specification | Source |
|---------|---------------|--------|
| **Trigger Event** | Tag applied: `at_risk_no_open` | [DOC-07 section Flow 15] |
| **Klaviyo Metric** | Custom segment: subscriber in post-purchase flows with 0 opens in 3-7 days (use click + open for MPP-affected users) | [DOC-07 section Flow 15] [DOC-12 section 5.1] |
| **Trigger Condition** | Subscriber has purchased, is in a post-purchase flow, and has not opened any email for 3-7 days | [DOC-07 section Flow 15] |
| **Note** | Use click + open (not open alone) for MPP-affected users per Demands section 15 (Apple Mail Privacy Protection) | [Demands section 15] |

### Audience Filter

| Condition | Rule | Source |
|-----------|------|--------|
| **Primary Signal** | Tagged `at_risk_no_open` AND has purchased (post-purchase subscribers only) | [DOC-07 section Flow 15] |
| **Segmentation** | Cross-level -- uses R1-R6 calibration rules | [DOC-07 section Flow 15] |
| **Exclusion** | Did NOT purchase (non-purchasers route to FAQ/Objection, not At-Risk) | [DOC-07 section Flow 15] |

### Timing and Cadence

**4 emails over 7 days:**

| Email | Day | Strategy | Source |
|:-----:|:---:|----------|--------|
| E1 | 0 (on tag) | "It's been quiet" -- gentle re-engagement with new story | [DOC-07 section Flow 15] [DOC-12 section 5.1] |
| E2 | 2 | Value reminder -- summarize mechanism in 1 paragraph | [DOC-07 section Flow 15] |
| E3 | 4 | Social proof -- "Other parents who felt this way found..." | [DOC-07 section Flow 15] [DOC-13 section Phase 1] |
| E4 | 7 | Final -- "Last check-in before we pull back" | [DOC-07 section Flow 15] |

### Exit Conditions

| Condition | Action | Transition | Source |
|-----------|--------|------------|--------|
| **Re-engaged (opens E1 or clicks)** | Exit At-Risk flow | Return to standard post-purchase nurture path. Remove `at_risk_no_open` tag. | [DOC-07 section Flow 15] |
| **No response after E4** | Tag `inactive_60_days` | Routes to Winback A (F23) -- post-buyer inactivity | [DOC-12 section 5.1] |
| **Unsubscribed** | Klaviyo unsubscribe | Suppressed | [Demands section 15] |

### Suppression Rules

| Rule | Scope | Source |
|------|-------|--------|
| **Post-purchase only** | `at_risk_no_open` tag must only fire for post-purchase subscribers, not for non-purchasers | [DOC-07 section Flow 15] |
| **Re-engagement pause** | If subscriber opens E1, pause remaining mails and return to standard nurture | [DOC-07 section Flow 15] |
| **Winback transition** | If no response, tag `inactive_60_days` and route to Winback A | [DOC-12 section 5.1] |
| **Master Suppression List** | Hard bounces, unsubscribes, spam complaints | [DOC-09 section 5.6] |

---

## 17. REPLENISHMENT A (F20 / Demands #17) -- 1-Pair Buyer

**Phase:** 2 (High-Value, Months 3-4)
**Priority:** P2 (repeat purchase driver -- needs buyer data)
**Segmentation:** Cross-level (single copy with calibration rules R1-R6)

### Trigger Definition

| Element | Specification | Source |
|---------|---------------|--------|
| **Trigger Event** | Tag applied: `buyer_1pair` + Day 14 | [DOC-07 section Flow 15] |
| **Klaviyo Metric** | `Order Placed` where `last_purchase_pack_size = "1pair"` + delay 14 days | [DOC-07 section Flow 15] [Layer-16 section Replenishment-A] |
| **Trigger Condition** | 14 days since 1-pair purchase AND not already re-ordered | [DOC-07 section Flow 15] |

### Audience Filter

| Condition | Rule | Source |
|-----------|------|--------|
| **Primary Signal** | Tagged `buyer_1pair` AND 14 days since tag applied | [DOC-07 section Flow 15] |
| **Segmentation** | Cross-level -- pack-size driven, not level-driven | [DOC-07 section Flow 15] |

### Timing and Cadence

**3 emails over 7 days:**

| Email | Day | Upsell Target | Source |
|:-----:|:---:|:-------------:|--------|
| E1 | 14 | 1 to 3+3 Bundle ($79.99) -- "Time to upgrade?" | [DOC-07 section Flow 15] [DOC-06 section 6] |
| E2 | 18 | Value math + testimonials for 3+3 | [DOC-07 section Flow 15] |
| E3 | 21 | Final -- 60-day guarantee + permission-not-to-buy | [DOC-07 section Flow 15] |

### Exit Conditions

| Condition | Action | Transition | Source |
|-----------|--------|------------|--------|
| **Purchase (upgrade to 3+3)** | Exit Replenishment A | Tag `buyer_3plus3` to Replenishment B at Day 75 | [Layer-19 section 5] |
| **Flow completes (no purchase)** | -- | Next replenishment attempt not until Path B at Day 75 if pack size upgraded independently | [DOC-07 section Flow 15] |
| **`inactive_60_days` tag** | Exit | Routes to Winback A (F23) | [DOC-12 section 5.1] |
| **Unsubscribed** | Klaviyo unsubscribe | Suppressed | [Demands section 15] |

### Suppression Rules

| Rule | Scope | Source |
|------|-------|--------|
| **If already re-ordered 3+3** | Skip Replenishment A entirely -- subscriber already upgraded | [DOC-07 section Flow 15] |
| **Winback pause** | Winback pauses this flow | [Demands section 15] |
| **Master Suppression List** | Hard bounces, unsubscribes, spam complaints | [DOC-09 section 5.6] |

---

## 18. REPLENISHMENT B (F21 / Demands #18) -- 3+3 Buyer

**Phase:** 3 (Nice-to-Have, Months 5-6)
**Priority:** P2 (low volume -- only 3+3 buyers who hit Day 75)
**Segmentation:** Cross-level (single copy with calibration rules R1-R6)

### Trigger Definition

| Element | Specification | Source |
|---------|---------------|--------|
| **Trigger Event** | Tag applied: `buyer_3plus3` + Day 75 | [DOC-07 section Flow 16] |
| **Klaviyo Metric** | `Order Placed` where `last_purchase_pack_size = "3+3"` + delay 75 days | [DOC-07 section Flow 16] [Layer-16 section Replenishment-B] |
| **Trigger Condition** | 75 days since 3+3 purchase AND not already upgraded to 5+5 | [DOC-07 section Flow 16] |

### Audience Filter

| Condition | Rule | Source |
|-----------|------|--------|
| **Primary Signal** | Tagged `buyer_3plus3` AND 75 days since purchase | [DOC-07 section Flow 16] |
| **Segmentation** | Cross-level -- pack-size driven, not level-driven | [DOC-07 section Flow 16] |

### Timing and Cadence

**2 emails over 5 days:**

| Email | Day | Upsell Target | Source |
|:-----:|:---:|:-------------:|--------|
| E1 | 75 | 3+3 to 5+5 Bundle ($119.99) | [DOC-07 section Flow 16] [DOC-06 section 6] |
| E2 | 80 | Final -- value math + 60-day guarantee | [DOC-07 section Flow 16] |

### Exit Conditions

| Condition | Action | Transition | Source |
|-----------|--------|------------|--------|
| **Purchase (upgrade to 5+5)** | Exit Replenishment B | Tag `buyer_5plus5` to Replenishment C at Day 150 | [Layer-19 section 5] |
| **Flow completes (no purchase)** | -- | -- | [DOC-07 section Flow 16] |
| **`inactive_60_days` tag** | Exit | Routes to Winback A (F23) | [DOC-12 section 5.1] |
| **Unsubscribed** | Klaviyo unsubscribe | Suppressed | [Demands section 15] |

### Suppression Rules

| Rule | Scope | Source |
|------|-------|--------|
| **If already 5+5** | Skip -- subscriber already at top tier | [DOC-07 section Flow 16] |
| **Winback pause** | Winback pauses this flow | [Demands section 15] |
| **Master Suppression List** | Hard bounces, unsubscribes, spam complaints | [DOC-09 section 5.6] |

---

## 19. REPLENISHMENT C (F22 / Demands #19) -- 5+5 Buyer

**Phase:** 3 (Nice-to-Have, Months 5-6)
**Priority:** P2 (very low volume -- only 5+5 buyers)
**Segmentation:** Cross-level (single copy with calibration rules R1-R6)

### Trigger Definition

| Element | Specification | Source |
|---------|---------------|--------|
| **Trigger Event** | Tag applied: `buyer_5plus5` + Day 150 | [DOC-07 section Flow 17] |
| **Klaviyo Metric** | `Order Placed` where `last_purchase_pack_size = "5+5"` + delay 150 days | [DOC-07 section Flow 17] [Layer-16 section Replenishment-C] |
| **Trigger Condition** | 150 days since 5+5 purchase AND not already purchased accessories | [DOC-07 section Flow 17] |

### Audience Filter

| Condition | Rule | Source |
|-----------|------|--------|
| **Primary Signal** | Tagged `buyer_5plus5` AND 150 days since purchase | [DOC-07 section Flow 17] |
| **Segmentation** | Cross-level -- accessory upsell, not bundle upgrade | [DOC-07 section Flow 17] |

### Timing and Cadence

**2 emails over 5 days:**

| Email | Day | Upsell Target | Source |
|:-----:|:---:|:-------------:|--------|
| E1 | 150 | Accessories (Wash Bag $12.99, Mattress Protector $24.99) | [DOC-07 section Flow 17] [DOC-06 section 6] |
| E2 | 155 | Final -- benefit-focused close | [DOC-07 section Flow 17] |

### Exit Conditions

| Condition | Action | Transition | Source |
|-----------|--------|------------|--------|
| **Purchase (accessory)** | Exit Replenishment C | -- | [Layer-19 section 5] |
| **Flow completes (no purchase)** | -- | -- | [DOC-07 section Flow 17] |
| **`inactive_60_days` tag** | Exit | Routes to Winback A (F23) | [DOC-12 section 5.1] |
| **Unsubscribed** | Klaviyo unsubscribe | Suppressed | [Demands section 15] |

### Suppression Rules

| Rule | Scope | Source |
|------|-------|--------|
| **If already purchased accessories** | Skip | [DOC-07 section Flow 17] |
| **Winback pause** | Winback pauses this flow | [Demands section 15] |
| **Master Suppression List** | Hard bounces, unsubscribes, spam complaints | [DOC-09 section 5.6] |

---

## 20. REVIEW REQUEST (F18 / Demands #20)

**Phase:** 2 (High-Value, Months 3-4)
**Priority:** P1 (social proof is highest-converting content -- needed for ongoing acquisition)
**Segmentation:** Cross-level (single copy with calibration rules R1-R6)

### Trigger Definition

| Element | Specification | Source |
|---------|---------------|--------|
| **Trigger Event** | Order Placed + Day 30 + `post_purchase_active` tag present | [DOC-07 section Flow 18] |
| **Klaviyo Metric** | `Order Placed` + delay 30 days + filter: subscriber has `post_purchase_active` tag | [DOC-07 section Flow 18] [DOC-13 section 3.2] |
| **Trigger Condition** | 30 days since purchase AND subscriber is engaged (opening/clicking post-purchase emails) | [DOC-07 section Flow 18] |

### Audience Filter

| Condition | Rule | Source |
|-----------|------|--------|
| **Primary Signal** | Purchasers with `post_purchase_active` tag at Day 30+ | [DOC-07 section Flow 18] |
| **Segmentation** | Cross-level -- single copy | [DOC-07 section Flow 18] |
| **Exclusion** | `at_risk_no_open` tagged -- disengaged, skip review request | [DOC-07 section Flow 18] |

### Timing and Cadence

**2 emails over 5 days:**

| Email | Day | Content | Source |
|:-----:|:---:|---------|--------|
| E1 | 30 | "2-minute favor" -- short review helps other parents find us | [DOC-07 section Flow 18] [DOC-13 section 3.2] |
| E2 | 35 | Follow-up -- specific question about child's progress (generates UGC for testimonials) | [DOC-07 section Flow 18] |

### Exit Conditions

| Condition | Action | Source |
|-----------|--------|--------|
| **Review submitted** | Exit -- track via Klaviyo custom event or manual tag | [DOC-07 section Flow 18] |
| **Flow completes (2 emails sent)** | -- | [DOC-07 section Flow 18] |
| **`inactive_60_days` tag** | Exit | [DOC-12 section 5.1] |
| **Unsubscribed** | Suppressed | [Demands section 15] |

### Suppression Rules

| Rule | Scope | Source |
|------|-------|--------|
| **Engaged subscribers only** | Only fire for `post_purchase_active` subscribers -- skip at-risk and disengaged | [DOC-07 section Flow 18] |
| **No repeat requests** | If subscriber already submitted review (custom property flag), skip | [DOC-07 section Flow 18] |
| **Master Suppression List** | Hard bounces, unsubscribes, spam complaints | [DOC-09 section 5.6] |

---

## 21. REFERRAL FLOW (F19 / Demands #25)

**Phase:** 3 (Nice-to-Have, Months 5-6)
**Priority:** P2 (growth driver -- needs existing customer base of min 500 purchases)
**Segmentation:** Cross-level (single copy with calibration rules R1-R6)

### Trigger Definition

| Element | Specification | Source |
|---------|---------------|--------|
| **Trigger Event** | Order Placed + Day 30 + `post_purchase_active` tag | [DOC-07 section Flow 25] |
| **Klaviyo Metric** | `Order Placed` + delay 30 days + filter: `post_purchase_active` tag present | [DOC-07 section Flow 25] [DOC-06 section Offers] |
| **Trigger Condition** | 30 days since purchase AND subscriber is engaged (opens/clicks post-purchase emails) | [DOC-07 section Flow 25] |

### Audience Filter

| Condition | Rule | Source |
|-----------|------|--------|
| **Primary Signal** | Purchasers with `post_purchase_active` tag at Day 30+ | [DOC-07 section Flow 25] |
| **Segmentation** | Cross-level -- single copy | [DOC-07 section Flow 25] |
| **Exclusion** | `at_risk_no_open` tag -- skip if disengaged | [DOC-07 section Flow 25] |

### Timing and Cadence

**3 emails over 15 days:**

| Email | Timing | Content | Referral Reward | Source |
|:-----:|:------:|---------|:---------------:|--------|
| E1 | Day 30 | "Know another parent going through this?" -- share the mechanism | $10 credit each | [DOC-07 section Flow 25] [DOC-06 section Offers] |
| E2 | Day 37 | "Real impact" -- stats on referrals + social proof | $10 credit each | [DOC-07 section Flow 25] |
| E3 | Day 45 | Final -- "Last chance to share" with double-sided incentive | $10 each for both | [DOC-07 section Flow 25] |

### Exit Conditions

| Condition | Action | Source |
|-----------|--------|--------|
| **Referral link clicked AND friend purchased** | Exit -- referral credited | [DOC-07 section Flow 25] |
| **Flow completes (3 emails sent)** | -- | [DOC-07 section Flow 25] |
| **`inactive_60_days` tag** | Exit | [DOC-12 section 5.1] |
| **Unsubscribed** | Suppressed | [Demands section 15] |

### Suppression Rules

| Rule | Scope | Source |
|------|-------|--------|
| **Engaged subscribers only** | Only fire for active purchasers | [DOC-07 section Flow 25] |
| **Already referred** | If subscriber already used referral link, adapt copy or skip | [DOC-07 section Flow 25] |
| **Winback pause** | Winback pauses this flow | [Demands section 15] |
| **Master Suppression List** | Hard bounces, unsubscribes, spam complaints | [DOC-09 section 5.6] |

---

## 22. FAQ/OBJECTION LIBRARY (F17 / Demands #24)

**Phase:** 3 (Nice-to-Have, Months 5-6) -- moved from Phase 2 per Demands sections 3 and 17
**Priority:** P1 (answers 3 Tier 1 objections blocking conversion -- highest value for non-purchasers)
**Segmentation:** Cross-level (per Demands section 3 line 96 -- NOT 4 level variants)

### Trigger Definition

| Element | Specification | Source |
|---------|---------------|--------|
| **Trigger Event** | Tag applied: `welcome_completed_no_purchase` | [DOC-07 section Flow 24] |
| **Klaviyo Metric** | Profile tag: `welcome_completed_no_purchase` applied by Welcome Flow exit when subscriber finishes E8 without purchasing | [DOC-07 section Flow 24] [DOC-12 section 5] |
| **Trigger Condition** | Subscriber completed all 8 Welcome Flow emails, did not purchase, tagged `welcome_completed_no_purchase` | [DOC-07 section Flow 24] |

### Audience Filter

| Condition | Rule | Source |
|-----------|------|--------|
| **Primary Signal** | Tagged `welcome_completed_no_purchase` (completed Welcome, did not buy) | [DOC-07 section Flow 24] |
| **Segmentation** | Cross-level -- all 6 emails use R1-R6 calibration rules. NO level variants. | [Demands section 3 line 96] |

### Timing and Cadence

**6 emails over 28 days:**

| Email | Timing | Objection Series | D-Series | C-Series | B-Series | Source |
|:-----:|:------:|:----------------:|:--------:|:--------:|:--------:|--------|
| E1 | D0 | D1 (tried everything) + D2 (self-blame) | Yes | -- | -- | [DOC-07 section Flow 24] [DOC-14 section 4] |
| E2 | D3 | D3 (hope-risk) + C3 (financial) | Yes | Yes | -- | [DOC-07 section Flow 24] |
| E3 | D7 | B1 (tried underwear) + B3 (sensory refusal) | -- | -- | Yes | [DOC-07 section Flow 24] [DOC-04 section 2] |
| E4 | D14 | C1 (brand unknown) + C2 (kids like mine) | -- | Yes | -- | [DOC-07 section Flow 24] |
| E5 | D21 | B2 (BCBA complement) + B4 (GI issues) | -- | -- | Yes | [DOC-07 section Flow 24] [DOC-14 sections B2][B4] |
| E6 | D28 | Summary + closing -- "If you ever want to revisit" | All | All | All | [DOC-07 section Flow 24] |

### Cross-Level Calibration Requirement

As a cross-level flow, every FAQ email must satisfy R1-R6 (Demands section 4):
- **R1:** Symptom description over level label (never "Level 2 parents")
- **R2:** 3-5 recognition anchors per mail spanning L1, L2, L3 situations
- **R3:** Age ranges instead of fixed ages ("kids 3 to 10+" not "for 5-year-olds")
- **R4:** Verbal + non-verbal inclusivity in every email
- **R5:** Timeline flexibility ("Some kids 2 weeks, others 8 weeks -- both normal")
- **R6:** Low-bar success metrics ("Looked at the wet spot" not "fully trained")

### Exit Conditions

| Condition | Action | Transition | Source |
|-----------|--------|------------|--------|
| **Purchase during FAQ** | Exit FAQ | Routes to Flow 04 (Order Confirmation) to post-purchase trunk | [DOC-07 section Flow 24] |
| **Flow completes (E6 sent, no purchase)** | Tag `welcome_completed_no_purchase` remains | Routes to inactivity cascade: 60d to Winback B (F24) | [Layer-19 section 5] |
| **`inactive_60_days` tag** | Exit FAQ | Routes to Winback B (F24) -- never-bought path | [DOC-12 section 5.1] |
| **Unsubscribed** | Klaviyo unsubscribe | Suppressed | [Demands section 15] |

### Suppression Rules

| Rule | Scope | Source |
|------|-------|--------|
| **Purchase exit** | If subscriber purchases during FAQ, exit immediately and route to Order Confirmation chain | [DOC-07 section Flow 24] |
| **Winback B transition** | If FAQ completes without purchase + 60 days no engagement, Winback B | [Layer-19 section 5] |
| **Master Suppression List** | Hard bounces, unsubscribes, spam complaints | [DOC-09 section 5.6] |

---

## 23. WINBACK PATH A (F23 / Demands #21) -- Post-Buyer

**Phase:** 2 (High-Value, Months 3-4) -- moved from Phase 3 per Demands sections 2 and 17
**Priority:** P2 (re-engages lapsed buyers -- only fires after 90d inactivity)
**Segmentation:** 4 level variants (3 emails x 4 levels = 12 unique emails)

### Trigger Definition

| Element | Specification | Source |
|---------|---------------|--------|
| **Trigger Event** | Tag applied: `inactive_60_days` + ever purchased = true | [DOC-07 section Flow 19] |
| **Klaviyo Metric** | Profile tag `inactive_60_days` applied by behavioral segment + filter: `last_purchase_pack_size` property exists (ever purchased) | [DOC-07 section Flow 19] [Layer-16 section Winback-A] |
| **Trigger Condition** | 60 days no engagement + has purchased before + ADDITIONAL 30-day delay so Winback A actually fires at 90 days post-last-engagement per Demands section 2 | [Demands section 2 line 39] |

**Timing correction per Demands section 2 line 39:** Winback A trigger = "Last purchase + 90 days no engagement" (not 60 days as originally listed in strategy). Implementation: `inactive_60_days` tag fires at 60 days, additional 30-day delay in flow, Winback A entry at Day 90.

### Audience Filter

| Condition | Rule | Source |
|-----------|------|--------|
| **Primary Signal** | Tagged `inactive_60_days` + `last_purchase_pack_size` is set (ever purchased) | [DOC-07 section Flow 19] |
| **Segmentation** | 4 level variants (L1/L2/L3/GF) -- unique copy per level | [DOC-07 section Flow 19] [Demands section 2] |
| **Exclusion** | Never purchased, routes to Winback B (F24) instead | [DOC-07 section Flow 19] |

### Timing and Cadence

**3 emails over 14 days:**

| Email | Timing | L1 Angle | L2 Angle | L3 Angle | GF Angle | Source |
|:-----:|:------:|:---------:|:---------:|:---------:|:--------:|--------|
| E1 | Day 0 (90d) | Pre-K anchor re-engage | Respectful mechanism reminder | Spacious, patient -- late-trainer story | Curious + soft | [Layer-17 section 7] [DOC-07 section Flow 19] |
| E2 | Day 7 | "No pressure -- if kid still in pull-ups" | Zero urgency, science refresh | "Late is not never" | Inclusive reframe | [Layer-17 section 7] |
| E3 | Day 14 | Gentle nudge to sunset or reorder | Permission to sunset | Quiet to sunset | Soft close to sunset | [Layer-17 section 7] |

### Exit Conditions

| Condition | Action | Transition | Source |
|-----------|--------|------------|--------|
| **Re-engaged (purchase)** | Exit Winback A | Remove `inactive_60_days` tag. Restore standard flows. Route to post-purchase trunk. | [DOC-07 section Flow 19] |
| **No response after E3** | Tag `inactive_120_days` | Routes to F27 (Sunset Flow) | [DOC-12 section 5.1] |
| **Unsubscribed** | Klaviyo unsubscribe | Suppressed | [Demands section 15] |

### Suppression Rules

| Rule | Scope | Source |
|------|-------|--------|
| **Winback pauses ALL nurture flows** | While Winback A is active, ALL other nurture flows (PP-Education, Extended Upsell, Mid Check-In, etc.) are paused | [Demands section 15] |
| **Sunset override** | If subscriber receives `inactive_120_days` during Winback, Sunset suppresses all | [Demands section 15] |
| **Master Suppression List** | Hard bounces, unsubscribes, spam complaints | [DOC-09 section 5.6] |

---

## 24. WINBACK PATH B (F24 / Demands #22) -- Never-Bought

**Phase:** 3 (Nice-to-Have, Months 5-6)
**Priority:** P2 (re-engages never-bought subscribers -- low conversion 3-5% but zero marginal cost)
**Segmentation:** 4 level variants (3 emails x 4 levels = 12 unique emails)

### Trigger Definition

| Element | Specification | Source |
|---------|---------------|--------|
| **Trigger Event** | Tag applied: `inactive_60_days` + ever purchased = false | [DOC-07 section Flow 22] |
| **Klaviyo Metric** | Profile tag `inactive_60_days` applied by behavioral segment + filter: `last_purchase_pack_size` property does NOT exist (never purchased) | [DOC-07 section Flow 22] [Layer-16 section Winback-B] |
| **Trigger Condition** | 60 days since last engagement + never made a purchase + FAQ/Objection Library completed or skipped | [DOC-07 section Flow 22] |

### Audience Filter

| Condition | Rule | Source |
|-----------|------|--------|
| **Primary Signal** | Tagged `inactive_60_days` + no `last_purchase_pack_size` property (never purchased) | [DOC-07 section Flow 22] |
| **Segmentation** | 4 level variants (L1/L2/L3/GF) -- unique copy per level | [DOC-07 section Flow 22] [Demands section 2] |
| **Exclusion** | Has purchased, routes to Winback A (F23) instead | [DOC-07 section Flow 22] |

### Timing and Cadence

**3 emails over 14 days:**

| Email | Timing | Content Progression | Source |
|:-----:|:------:|:-------------------:|--------|
| E1 | Day 0 (60d) | Brand reminder + mechanism summary | [DOC-07 section Flow 22] |
| E2 | Day 7 | Offer + discount (light) | [DOC-07 section Flow 22] |
| E3 | Day 14 | "Last chance" -- final permissive outreach to sunset | [DOC-07 section Flow 22] |

### Exit Conditions

| Condition | Action | Transition | Source |
|-----------|--------|------------|--------|
| **Purchase (first order)** | Exit Winback B | Remove `inactive_60_days` tag. Route to Order Confirmation to post-purchase trunk. | [DOC-07 section Flow 22] |
| **No response after E3** | Tag `inactive_120_days` | Routes to F27 (Sunset Flow) | [DOC-12 section 5.1] |
| **Unsubscribed** | Klaviyo unsubscribe | Suppressed | [Demands section 15] |

### Suppression Rules

| Rule | Scope | Source |
|------|-------|--------|
| **Winback pauses ALL nurture flows** | While Winback B is active, ALL other nurture flows paused | [Demands section 15] |
| **Sunset override** | `inactive_120_days` suppresses all to Sunset | [Demands section 15] |
| **Master Suppression List** | Hard bounces, unsubscribes, spam complaints | [DOC-09 section 5.6] |

---

## 25. SUNSET FLOW (F27 / Demands #23)

**Phase:** 3 (Nice-to-Have, Months 5-6)
**Priority:** P3 (important for list health but passive -- triggered by 120d inactivity)
**Segmentation:** Cross-level (single copy)

### Trigger Definition

| Element | Specification | Source |
|---------|---------------|--------|
| **Trigger Event** | Tag applied: `inactive_120_days` | [DOC-07 section Flow 23] |
| **Klaviyo Metric** | Profile tag `inactive_120_days` -- applied by behavioral segment monitoring 120 days of zero opens AND zero clicks | [DOC-07 section Flow 23] [Layer-16 section Sunset] |
| **Trigger Condition** | 120 days since last engagement (zero opens AND zero clicks) + not already in Master Suppression List | [DOC-07 section Flow 23] |

### Audience Filter

| Condition | Rule | Source |
|-----------|------|--------|
| **Primary Signal** | Tagged `inactive_120_days` | [DOC-07 section Flow 23] |
| **Segmentation** | Cross-level -- single copy, one final re-engagement attempt | [DOC-07 section Flow 23] |
| **Exclusion** | Already in Master Suppression List | [DOC-09 section 5.5] |

### Timing and Cadence

**2 emails over 7 days:**

| Email | Timing | Content | Source |
|:-----:|:------:|---------|--------|
| E1 | Day 0 (120d) | "I'm going to stop emailing after this. If you want to stay, just click below." | [DOC-07 section Flow 23] [Layer-16 section Sunset] |
| E2 | Day 7 | Final warning -- "Last email unless you say otherwise" | [DOC-07 section Flow 23] |

### Exit Conditions

| Condition | Action | Transition | Source |
|-----------|--------|------------|--------|
| **Clicked re-engagement link** | Exit Sunset flow | Reset inactivity timer. Remove `inactive_120_days` tag. Restore to standard nurture path. | [DOC-07 section Flow 23] |
| **No click after E2** | Tag `unengaged = True` | **Add to Master Suppression List** -- permanently suppressed from ALL future sends | [DOC-09 section 5.5] |
| **Unsubscribed** | Klaviyo unsubscribe | Suppressed | [Demands section 15] |

### Suppression Rules

| Rule | Scope | Source |
|------|-------|--------|
| **Sunset suppresses ALL other flows** | While Sunset is active, ALL other flows are suppressed for this subscriber | [Demands section 15] |
| **Master Suppression List entry** | No click after E2, profile permanently suppressed | [DOC-09 section 5.5] |
| **Bot / Ghost Profiles** | `is_bot = True`, Ghost Profiles should already be excluded before reaching Sunset | [DOC-09 section 5.6-5.7] |
| **No re-entry** | Once suppressed, subscriber can only re-join via new opt-in (pop-up, manual) | [DOC-09 section 5.5] |

---

## Part 3: Lifecycle Cascade Summary

### Inactivity Escalation Chain

```
Post-Purchase Active     
    |
    +-- 3-7 days no opens -> Tag: at_risk_no_open -> F16: PP-Support At-Risk
    |       |
    |       +-- Re-engages? -> Return to standard nurture
    |       +-- No response -> Tag: inactive_60_days
    |
    +-- 60 days no engagement -> Tag: inactive_60_days
    |       |
    |       +-- Has purchased? -> F23: Winback Path A (fires at 90d)
    |       +-- Never purchased? -> F24: Winback Path B (fires at 60d)
    |               |
    |               +-- Re-engages? -> Remove tag, restore flows
    |               +-- No response -> Tag: inactive_120_days
    |
    +-- 120 days no engagement -> Tag: inactive_120_days -> F27: Sunset Flow
            |
            +-- Click? -> Reset, restore to nurture
            +-- No click -> Master Suppression List (permanent)
```

### Post-Purchase Trunk Flow Sequencing

```
Order Placed (metric)
    |
    +-- F04: Order Confirmation (immediate)
    +-- F05: Shipping Notification (on fulfill)
    +-- F06: Out for Delivery (carrier event -- optional)
    +-- F07: Arrived and Welcome (on delivered)
    |
    +-- F08: PP-Direct Upsell (Day 1-3) [Phase 1]
    +-- F09: PP-Level Detection (Day 14, GF only) [Phase 1]
    +-- F11: PP-Mary S. Story (Day 3-5, parallel) [Phase 2]
    +-- F12: PP-Education D0-21 (Day 0-21) [Phase 2]
    +-- F13: PP-Extended Upsell (Day 28-36) [Phase 2]
    +-- F14: PP-Mid Check-In (Day 30-60) [Phase 2]
    +-- F15: PP-Extended Education (Day 22-60) [Phase 3]
```

### Phase-Based Deployment Table

| Phase | Flows Included | Deployment Window | Prerequisites |
|-------|---------------|-------------------|---------------|
| **Phase 1** (M1-2) | F04-F09 (transactional chain + Direct Upsell + Level Detection) | Weeks 3-8 | Domain warming Weeks 1-2 complete. Welcome Flow (F01) live. Popup configured. DNS authenticated. |
| **Phase 2** (M3-4) | F11-F14, F20, F23, F18 (Mary S., Education D0-21, Extended Upsell, Mid Check-In, Replenish A, Winback A, Review) | Weeks 9-16 | Level Detection data accumulated (min 500 tagged subs). Buyer tags populated. Warming complete (Week 6+). |
| **Phase 3** (M5-6) | F15-F16, F21-F22, F24, F17, F19, F27 (Extended Edu, At-Risk, Replenish B/C, Winback B, FAQ, Referral, Sunset) | Weeks 17-24 | 500+ purchases for Referral. Level-tagged subscriber pool sufficient. |

### Warmup Send Constraints

| Period | Allowed Flows | Content Rules |
|--------|---------------|---------------|
| Weeks 1-2 | Welcome, Browse, Cart, Checkout only | Educational ONLY -- NO sales, NO pricing, NO discounts. L3 excluded. |
| Weeks 3-4 | + Basic Post-Purchase (F04-F08) | Gentle promotional begin. Welcome + Cart can include code. |
| Weeks 5-6 | + Level Detection (F09) | Full flow deployment begins. Monitor GPT reputation daily. |
| Phase 2 | All Phase 1 + Phase 2 | Full promotional within 90/10 education-to-promotion rule. |
| Phase 3 | All 27 flows | Full deployment. Regular deliverability monitoring. |

---

## Part 4: Success Criteria Checklist

- [x] 15 post-purchase + lifecycle flows documented with complete trigger definitions
- [x] Exit conditions for each flow (purchase, re-engagement, inactivity cascade, unsubscribe)
- [x] Suppression rules per flow (priority overrides, cross-flow pauses, phase constraints)
- [x] Exact Klaviyo trigger metric names (Order Placed, custom events, tag-based routing)
- [x] Audience filters per flow (tags, segments, profile properties)
- [x] Timing/cadence in days for every email within each flow
- [x] Segmentation specification (cross-level vs level variants per Demands sections 2-3)
- [x] Phase-based deployment schedule (Phase 1/2/3 with prerequisites)
- [x] Flow hierarchy: sequential trunk + concurrent behavioral + parallel replenishment
- [x] Lifecycle cascade: at-risk to inactive to winback to sunset to suppression
- [x] Warmup constraints per phase
- [x] All 15 required flows covered: PP-Direct Upsell, PP-Level Detection, PP-Mary S. Story, PP-Education D0-21, PP-Extended Upsell, PP-Mid Check-In, PP-Extended Education, PP-Support At-Risk, Replenishment A/B/C, Winback A/B, Review Request, Referral Flow, FAQ/Objection Library, Sunset Flow

---

*This document (Part 2) completes the Klaviyo Flow Trigger Architecture. Part 1 covers pre-purchase flows (Welcome, Cart, Checkout, Browse) and transactional chain (Order Confirmation, Shipping, Out for Delivery, Arrived and Welcome). Combined total: 23 flows documented across both parts.*

