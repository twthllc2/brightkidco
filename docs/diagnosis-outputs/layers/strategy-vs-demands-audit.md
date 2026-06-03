# Strategy Files vs. Giuliano-Demands.md — Gap Audit

**Generated:** 2026-05-26
**Purpose:** Identify every gap between the 4 strategy framework files and the 37-section success benchmark (Giuliano-Demands.md). Gaps tell us what must be rewritten before producing HTML emails.

---

## 1. FULL EMAIL STRATEGY (1-full-email-strategy.md + 1-full-email-strategy-framework.md)

**Demands sections audited:** 1-3 (segmentation/flows), 6 (Welcome Flow), 7 (levers), 12 (footer), 15 (Klaviyo), 17 (phasing), 24 (content mix), 26 (deliverability), 28 (dependencies), 31 (Phase 1 scope), 32 (deliverability detailed), 34 (L3 partner), 35 (psychological), 37 (per-phase rules)

### CRITICAL GAPS

| # | Gap | Demands Say | Strategy Says | Impact |
|---|-----|-------------|---------------|--------|
| 1 | **FAQ/Objection Library segmentation** | **Cross-level** (Section 3: listed in cross-level flows, note "Segmentation: Cross-level") | **4 level variants** (Sections 3.2, 5.1 list it as level-segmented) | **HIGH** — Wrong segmentation means 4× unnecessary copy + potentially wrong tonality for a cross-level flow |
| 2 | **PP-Extended Education phase assignment** | **Phase 3** (Section 17: "Phase 3 — Nice-to-Have") | **Phase 2** (Flow 14, Section 3.2: "High-Value Months 3-4") | **HIGH** — Resources allocated to wrong phase; may not have level tags accumulated by Phase 2 |
| 3 | **Winback Path A phase assignment** | **Phase 2** (Section 17: Phase 2 includes Winback Path A) | **Phase 3** (Flow 23, Section 3.3) | **HIGH** — Winback Path A fires at Day 90 which could be Month 3-4, belongs in Phase 2 to capture earlier |
| 4 | **FAQ/Objection Library phase assignment** | **Phase 3** (Section 17: Phase 3 includes FAQ/Objection, months 5-6) | **Phase 2** (Flow 17, Section 3.2) | **HIGH** — Premature deployment; need accumulated non-purchaser data first |
| 5 | **Flow count mismatch** | **25 flows** (Section 17: 9+8+8) | **27 flows** (extras: VIP/Loyalty + Site Abandonment) | **MEDIUM** — Extra flows not in demands; need Giuliano sign-off |
| 6 | **PP-Support At-Risk phase assignment** | **Phase 3** (Section 3: Flow 16 in Phase 3 cross-level list) | **Phase 2** (Flow 15, Section 3.2) | **MEDIUM** — At-Risk should trigger after level detection, which is Phase 3 |
| 7 | **Winback timing discrepancy** | Winback Path A fires at **90 days** no engagement (Section 3) | Winback Path A fires at **60 days** (`inactive_60_days` tag) | **MEDIUM** — 30-day difference changes who enters the flow |

### MINOR GAPS

| # | Gap | Detail |
|---|------|--------|
| 8 | **Welcome Flow buy journey table** (Demands Section 6) | Demands define specific tipping points per mail (E2: "'Holy shit, that explains it'", E3: "60-day guarantee + permission not to buy", E4: "'You didn't fail' reframe"). The strategy covers these themes but doesn't explicitly map the **buyer journey states** per email as a reference table. |
| 9 | **Footer standard** (Demands Section 12) | Demands specify exact footer layout with tagline, plain text links, social icons, reviews microcopy, exact URLs, and note about Facebook. Strategy framework mentions `support@send.brightkidco.com` but has NO footer specification section. |
| 10 | **Content mix %** (Demands Section 24) | Demands: ~30% sales, ~50% educational, ~20% brand. Strategy doesn't define these ratios anywhere as explicit standards. |
| 11 | **Frequency rules** (Demands Section 24) | Demands define segment-based frequency tiers (VIPs 3-5/week, engaged 1-2/week, etc.). Strategy only mentions domain warming volume constraints, not per-segment frequency limits. |
| 12 | **90/10 rule** (Demands Section 24) | "Only 10% of any email should be promotional." Strategy mentions education-to-promotion ratio in passing but not as an enforceable rule. |
| 13 | **Sensitive area mapping** (Demands Section 32) | Demands map 4 sensitive content areas to deliverability impacts (self-blame → spam complaints, partner conflict → spam reports, etc.). Strategy has no such deliverability×psychology mapping. |
| 14 | **Metrics thresholds** (Demands Section 32) | Demands define precise metrics: bounce rate <0.5%, spam complaint <0.01%, with warning/critical/emergency levels. Strategy mentions warming but no threshold tables. |
| 15 | **Quarterly frequency ramps** (Demands Section 24) | Q4 BFCM ramp rules (1-2 emails/day, 1-hour post-send checks) not present in strategy. |
| 16 | **Flow cadence templates** (Demands Section 24) | Specific cadence patterns (Winback: 3-4 emails over 2-3 weeks, Re-engagement: D0/D3/D7) not documented. |
| 17 | **Bot detection segments** (Demands Section 32) | 2 segments defined: Known Fake Domains (20+ domains) and Non-Engaged Sleepers. Strategy mentions bot detection but doesn't specify the domain list or suppression logic. |
| 18 | **Klaviyo technical** (Demands Section 15) | DNS auth records (SPF/DKIM/DMARC), API scopes, specific Klaviyo variables `{{ event.order_number }}`, from-address differentiation (orders@ vs hello@). Strategy framework doesn't cover these implementation details. |
| 19 | **From address differentiation** (Demands Section 15) | Transactional from `orders@send.brightkidco.com`, Marketing from `hello@send.brightkidco.com`. Strategy only uses `support@send.brightkidco.com` for everything. |
| 20 | **L3 partner dynamics** (Demands Section 34) | Partner shame cycle, partner-as-solo-decision-maker, "You don't need anyone's permission to try this" language. Not covered in strategy. |
| 21 | **Psychological constraints** (Demands Section 35) | Social Pressure Mom "cannot be sold to directly" — community > commerce framing. Social Pressure Mom lever sequence (L4→L1→L5→L3). Not covered. |
| 22 | **Per-phase forbidden approaches** (Demands Section 37) | Phase 1: No hard sell. Phase 2: No blame. Phase 3: No over-promise. Phase 4: No cheerleading. Plus Phase 1 image rules (no non-verbal kid images in L1 mails). Not covered. |
| 23 | **L3 mandatory elements** (Demands Section 34) | Dignity in every sentence, "Mini-wins count" framing, acknowledge resignation reality, permission-not-to-buy in EVERY mail. Strategy covers some but doesn't list as mandatory elements. |
| 24 | **L3 offer restrictions** (Demands Section 34) | NEVER math reframe, NEVER urgency, don't prominently mention shipping, NEVER name carrier, NEVER "Easy"/"Quick"/"Fix"/"Cure"/"Simple". Partially covered but not as a consolidated ruleset. |
| 25 | **Pull-ups visual rule** (Demands Section 34) | "Pull-ups shown as signal-blocking tool, not as enemy. Pull-ups may be child's ONLY dignity-preserving option, especially for L3/Medicaid." Not covered. |
| 26 | **L3-specific urgency rules** (Demands Section 20) | ZERO urgency. ZERO countdowns. ZERO "offer expiring." When you're ready. Not explicitly stated in strategy for L3. |

### DESIGN MISMATCH

- **No design mismatch** — The strategy files and prototypes reference DOC1's green palette (#039902) and Questrial font, which matches the demands (Section 13). The standalone template's teal (#2BAEB4) / Fraunces palette is NOT used. This is CORRECT.
- **Border-radius mismatch:** HTML prototypes use `border-radius: 8px`, demands Section 13 specify `border-radius 12-16px`. Minor visual gap.
- **Card background:** Strategy prototypes use `#FFFFFF` (white) for email card backgrounds, demands specify `#FBF7EB` (Cream Card). Minor.

---

## 2. COPY STRATEGY (2-full-email-copy-strategy.md + 2-full-email-copy-strategy-framework.md)

**Demands sections audited:** 4 (calibration rules), 5 (emotional phases), 7 (levers), 8 (brand voice/Lena), 9 (forbidden phrases), 10 (do's), 16 (tonality per stage), 18 (GF cross-level), 19 (level tone profiles), 21 (level-specific forbidden), 22 (anti-fabrication), 23 (format requirements), 25 (extended voice rules), 29 (do not), 30 (L2 formula), 33 (voice×visual), 34 (L3 partner rules), 36 (source/quote rules)

### CRITICAL GAPS

| # | Gap | Demands Say | Strategy Says | Impact |
|---|-----|-------------|---------------|--------|
| 1 | **FAQ/Objection Library segmentation** (same as EMAIL strategy) | **Cross-level** (Section 3) | Copy strategy has **6 emails × 4 level variants** (Framework §4.8, Main §3.8) | **HIGH** — Wrong segmentation drives wrong copy approach |
| 2 | **Anti-fabrication rules** (Section 22) | 12 sub-sections: RS-only quote sourcing, 9 prohibited/ permitted actions, Flag-Don't-Fabricate protocol, statistics sourcing rules, testimonial source lock, verbatim language bank integrity, RS integration quota per mail (30-50% verbatim/30-50% Lena/10-20% mechanism), 28-item allowed claims list, unverified claims watch list, source hierarchy, 6-step escalation, 6 sensitive areas | **NOT ADDRESSED** — Copy strategy cites DOC sources in footnotes but has zero sections on anti-fabrication, no quote sourcing rules, no RS integration quota, no claims list | **CRITICAL** — Copy produced without these guardrails will contain fabricated quotes, unverified claims, and violate Giuliano's trust standards |
| 3 | **Forbidden phrases** (Section 9) | Complete 4-tier catalog: Absolute Never (17 phrases), AI-ism Banned List (20+ terms), Trigger Words (10 terms), Word Choice replacements (11 swaps), Structural Don'ts (12 rules) | Tonality constant table shows a few forbidden patterns per level but **NO comprehensive forbidden phrases catalog** exists in the copy strategy | **HIGH** — Copywriters have no reference for what NOT to write; risk of rejected copy |
| 4 | **RS integration quota** (Section 22) | 30-50% verbatim, 30-50% Lena, 10-20% mechanism. Minimum 2-4 verbatim quotes per mail. | **NOT PRESENT** — No quota or minimum quote requirement | **HIGH** — Copy won't have required research authenticity |
| 5 | **Level-specific forbidden phrases** (Section 21) | L1-specific: 12 forbidden patterns. L2-specific: 2+ forbidden. L3-specific: 19 forbidden patterns. GF-specific: 6 forbidden. Plus approach-level forbidden. | Copy strategy framework mentions forbidden patterns per level in tonality table but **does NOT enumerate the full lists** | **HIGH** — Context-specific violations will occur (e.g., L1 getting L3 stories in copy) |
| 6 | **Statistical sourcing rules** (Section 22) | 49% SPARK → cite source, Kelly Mahler → cite correctly, 16,511 reviews → cite on-site, self-reported data MUST be qualified. | Copy strategy references proof points but **does NOT have sourcing qualification rules** | **HIGH** — Risk of presenting self-reported data as clinical research |
| 7 | **Source/quote hierarchy** (Section 36) | DOC1 → DOC2/3/4/5 → RS PDFs → Kommentare PDFs. Kommentare are NOT primary research. | **NOT ADDRESSED** | **HIGH** — Risk of treating Kommentare as clinical data |

### MINOR GAPS

| # | Gap | Detail |
|---|------|--------|
| 8 | **6 cross-level calibration rules** (Section 4) | Demands define R1-R6 with examples. Copy strategy framework mentions level-agnostic language but does NOT list the 6 rules as a dedicated reference. R4 (Verbal/Non-Verbal Inclusivity) is missing explicit treatment. |
| 9 | **4 emotional phases** (Section 5) | Demands: Phase 1 Slow Realization, Phase 2 First Attempt, Phase 3 Method Cycling, Phase 4 Resignation Fork. Per-level phase dominance described. Copy strategy mentions emotional arc per flow but no single reference to the 4-phase system. |
| 10 | **5 big conversion levers — order rule** (Section 7) | Demands: "Order is NON-NEGOTIABLE. If you bring #3 before #1, you lose the avatar." Copy strategy mentions all 5 levers but does NOT state the order rule explicitly in the executive framework. |
| 11 | **Sub-levers per level** (Section 7) | Demands: L1-A through L1-E (5 sub-levers), L2-A through L2-E (5), L3-A through L3-D (4), GF-A through GF-D (4). Copy strategy doesn't define sub-levers — only the main 5. |
| 12 | **Lever sequences per phase** (Section 7) | Demands define sequence for each phase (Phase 1: L5→L4→L1→L3, Phase 2: L1→L4→L3→L5, etc.). Not present in copy strategy. |
| 13 | **6 strongest lever pairs** (Section 7) | L1+L2, L1+L5, L3+L4, L2+L3, L4+L5, L1+L4. Not present. |
| 14 | **Lena sign-off variants** (Section 8) | Demands define Short, Medium, Long variants with exact text. Copy strategy uses Lena voice but doesn't codify the 3 variants as choices. |
| 15 | **Level 2 mail formula** (Section 30) — partial coverage | Demands: 6 mandatory elements + 6 BCBA Never Rules + 6 additional L2-only forbidden phrases + BCBA Fact-Sheet strategy. Copy strategy framework mentions the 6 elements but NOT the BCBA-specific rules or fact-sheet strategy. |
| 16 | **Tonality per stage×level** (Section 16) | Demands define Hope/Realism ratios for 6 stages × 4 levels (24 cells), plus adjustment rules for when to shift hope vs realism. Copy strategy has level constants but NOT the stage×level matrix. |
| 17 | **Per-stage forbidden patterns** (Section 16) | 6 stages each with specific forbidden patterns (Pre-Purchase: hard-sell/urgency. Conversion: fake scarcity. etc.). Not listed explicitly. |
| 18 | **GF cross-level language rules** (Section 18) | Demands: 5 sub-groups with specific language sensitivity + cross-level language rules + sub-group routing + migration strategy with click-based/reply-based/purchase-based anchors. Copy strategy mentions GF but doesn't detail sub-group-specific language. |
| 19 | **Level tone profiles** (Section 19) | Demands provide ~10 bullet points per level covering psychological state, master driver, symptom clusters, forbidden patterns, subject line patterns. Copy strategy tonality tables only cover 9 dimensions briefly. |
| 20 | **Extended voice rules V16-V24** (Section 25) | Demands: V16 (GF Sub-Group B), V17 (Partner Dynamics), V18 (Medicaid/Financial), V19 (BCBA/OT), V20 (Regression), V21 (Adult Diaper), V22 (UK/AU Localization), V23 (Image Alt-Text), V24 (SMS Voice). Copy strategy doesn't reference these. |
| 21 | **"Do Not" list** (Section 29) | 28 "Don't" items spanning copy, design, deliverability, segmentation, and behavior. Not present as a consolidated list. |
| 22 | **Voice×Visual alignment** (Section 33) | Demands: V11-V15 each have a visual reinforcement rule. Also "Most Dangerous Word" per level. Not present. |
| 23 | **L3 partner rules** (Section 34) | Partner shame cycle, L3 partner solo decision-maker rule, "You don't need anyone's permission to try this." Not covered. |
| 24 | **Source/quote rules** (Section 36) | Kommentare classification, Maureen Bennie sourcing, Kelly Mahler sourcing, pre-mail checklist, cross-level mandatory flow list, Three-Family Testimonial Pattern for GF. Not covered. |
| 25 | **Structural do's** (Section 10) | 11 "Do" items. Copy strategy implicitly follows some (symptom-first, permission-not-to-buy) but doesn't list them explicitly. |
| 26 | **Subject line character limits** (Section 23) | Max 60 chars, recommended 40-50, mobile preview max 40. Preheader max 130 chars, recommended 80-100. Copy strategy doesn't define character limits. |
| 27 | **Sign-off closing words** (Section 23) | Emails 1-2: "Talk soon,", 3-5: "With understanding,", 6+: "With care,". Not specified in copy strategy. |
| 28 | **Forbidden subject line patterns** (Section 23) | No exclamation-mark heavy, no ALL CAPS, no clickbait, no outcome promises, no marketing language, no urgency countdown for L3. Not listed. |
| 29 | **Preheader formulas** (Section 23) | 5 types defined (expand, social proof, permission, mechanism, emotional). Copy strategy provides options per email but doesn't define the framework. |

### DESIGN MISMATCH

- **No design mismatch** — Copy strategy doesn't reference visual design, so no conflict.

---

## 3. SEGMENTATION STRATEGY (3-segmentation-strategy.md + 3-segmentation-strategy-framework.md)

**Demands sections audited:** 1 (4-level system), 2 (level-variant flows), 3 (cross-level flows), 14 (pop-up), 15 (Klaviyo), 18 (GF sub-groups + migration), 31 (Phase 1 scope rules)

### CRITICAL GAPS

| # | Gap | Demands Say | Strategy Says | Impact |
|---|-----|-------------|---------------|--------|
| 1 | **FAQ/Objection Library segmentation** | **Cross-level** (Section 3) | Segmentation strategy has it as **4 level variants** in routing table (Flow 24) | **HIGH** — Same misclassification |
| 2 | **PP-Extended Education is Phase 3** | **Phase 3** (Section 17) | Segmentation strategy lists it as Phase 3 (Flow 20) — **Partially correct**, but the main flow numbering clashes | **MEDIUM** — Phase alignment inconsistency with other strategy docs |
| 3 | **Phase 1 segment count** | Demands Section 31: **Welcome Flow is the ONLY level-specific flow in Phase 1.** "Extended Education, Winback A/B wait until Phase 2-3." | Segmentation strategy Phase 1 flows include Welcome (Flow 01) as the only level-segmented flow. **No explicit statement** that FAQ/Objection should wait. | **MEDIUM** — Implicitly correct but missing the explicit scope boundary statement |
| 4 | **FAQ/Objection phase conflict** | Phase 3 (Section 17) | Listed as Phase 2 (Flow 17 in strategy routing table) | **HIGH** — Same phase conflict as email strategy |

### MINOR GAPS

| # | Gap | Detail |
|---|------|--------|
| 5 | **Pop-up frequency capping** (Demands Section 14) | Max 1× per 7 days per visitor. Segmentation strategy says "Once per 7 days" and "14-30 days after dismissal" — inconsistent with demands' 7 days. |
| 6 | **Pop-up headline wording** | Demands Section 14: headline is single-line. Segmentation Section 2 uses multi-step quiz format with different question flow. Minimal gap — both lead to same 4 tags. |
| 7 | **Klaviyo profile properties** (Demands Section 15) | Demands list: `first_name`, `last_name`, `email`, `avatar_level`, `child_age`, `signup_source`, `welcome_flow_completed`, `last_purchase_pack_size`, `vip_customer`, plus Phase 2+ `purchase_reason`, `label_sensitive`, `rfm_*`. Segmentation strategy lists 8 properties missing `last_name`, `purchase_reason`, `label_sensitive`. |
| 8 | **Klaviyo tags** (Demands Section 15) | Demands: 4 avatar + 6 behavioral + 5 purchase = 15 tags. Segmentation strategy has same 15 tags. **Match.** |
| 9 | **Flow exit conditions** (Demands Section 15) | Every flow must have: Made purchase, Unsubscribed, Already in higher-priority flow. Segmentation strategy doesn't define exit conditions per flow. |
| 10 | **Cross-flow suppression rules** (Demands Section 15) | Cart Abandonment suppresses Welcome during active cart (except E1-E2), PP-Level Detection takes priority over Day 14 mails, Winback pauses nurture, Sunset suppresses all. Not explicitly defined in segmentation. |
| 11 | **GF sub-group routing** (Demands Section 18) | Specific language rules per sub-group (A: education-first, B: symptom language only, C: science prominent, D: symptom hooks, E: direct). Segmentation strategy covers this well in Section 4 but could be more explicit about the copy rules per sub-group. |
| 12 | **Migration confidence threshold** (Demands Section 18) | "Never assign level tag below 70% confidence." Segmentation strategy mentions this in 2 places. **Covered.** |
| 13 | **Welcome Flow as only Phase 1 level-specific flow** (Demands Section 31) | "Welcome Flow is the ONLY level-specific flow in Phase 1 — Extended Education, Winback A/B wait until Phase 2-3." Segmentation strategy has Welcome+PP-Level Detection in Phase 1, Extended Education/FAQ/Winback in P2-P3. **Implicitly correct** but missing explicit Phase 1 scope boundary statement. |

### DESIGN MISMATCH

- **No design mismatch** — Segmentation strategy doesn't reference visual design.

---

## 4. POPUP STRATEGY (4-popup-strategy.md + 4-popup-strategy-framework.md)

**Demands sections audited:** 14 (pop-up setup), 31 (pop-up config rules), 15 (Klaviyo tags)

### CRITICAL GAPS

| # | Gap | Demands Say | Strategy Says | Impact |
|---|-----|-------------|---------------|--------|
| 1 | **Multi-step complexity** | Demands Section 14: **1-step pop-up** with email + question. Code displayed directly. | 4-popup-strategy: **Multi-step quiz** (5 steps: age, verbal, challenge, diagnosis, email). 4-popup-strategy-framework: "Multi-step symptom-based selection (4 buttons)" — largely matches demands. | **MEDIUM** — The main 4-popup-strategy.md proposes a more complex quiz than the demands' simple 1-step 4-button approach. The framework file matches demands better. |
| 2 | **Klaviyo tag naming** | Demands Section 15: `avatar_level1`, `avatar_level2`, `avatar_level3`, `avatar_general` | 4-popup-strategy uses SAME tags. **Match.** | None |
| 3 | **Step 2 code display** | Demands Section 14: "Code is displayed DIRECTLY in pop-up — customer buys immediately without checking inbox." | Both popup files confirm direct display (WELCOME10 shown on screen). **Match.** | None |

### MINOR GAPS

| # | Gap | Detail |
|---|------|--------|
| 4 | **Headline wording** | Demands: "Get 10% off + a potty training plan built for kids like yours." Popup strategy adds multi-step quiz framing (5-step questionnaire). The framework file uses the exact demanded headline. The main popup strategy (S04-C) uses different wording: "Get your personalized recommendations + 10% off your first order" for the quiz. |
| 5 | **Button label wording** | Demands' 4 buttons match exactly in the popup framework (S04-A). But the main popup strategy (S04-C) proposes a different approach (5-step quiz), so button wording is embedded in quiz answers rather than 4 visible buttons. |
| 6 | **Pop-up trigger timing** | Demands Section 14: 8-15 seconds OR exit-intent. Popup framework: 8-15s desktop, 15-30s mobile. Popup main: 10s desktop, 15s mobile. **Close but not exact match.** |
| 7 | **Mobile optimization** | Demands: "Mobile-optimized: full-screen on mobile" + "Mobile-first design (60%+ traffic)" + "Body min 16px mobile" + "CTAs min 48px height". Popup strategy covers all 4. **Covered.** |
| 8 | **Frequency** | Demands: "Max 1× per 7 days per visitor." Popup main: "Max 1x per 7 days per visitor." Popup framework: "Max showings 1× per 7 days / Suppress after dismissal 14-30 days." **Partially consistent** — the framework adds 14-30 days suppression which is stricter. |
| 9 | **WELCOME10 code** | Demands Section 11: Auto-apply URL `brightkidco.com/discount/10%25OFF-WELCOME`. Popup strategy confirms this. **Match.** |
| 10 | **Additional popups not in demands** | Popup strategy adds 4 extra popup types not specified in demands (Sensory Diet Guide, Cost Calculator, Teaser Tab, Embedded Footer). These are additive — not conflicts — but go beyond scope of demands Section 14. |

### DESIGN MISMATCH

- **No design mismatch** — Popup strategy references DOC1 green palette (#039902) and Questrial font, matching demands. No teal/Fraunces references.

---

## 5. CROSS-CUTTING ISSUES (All Strategy Files)

### Phase Mapping Conflicts

| Flow | Demands Phase | Strategy 1 Phase | Strategy 3 Phase | Conflict |
|------|:-------------:|:----------------:|:----------------:|----------|
| PP-Extended Education | Phase 3 | Phase 2 | Phase 3 | S1 vs Demands |
| Winback Path A | Phase 2 | Phase 3 | Phase 2 | S1 vs Demands |
| FAQ/Objection Library | Phase 3 (cross-level) | Phase 2 (4 variants) | Phase 3 (4 variants) | S1 vs Demands/S3 |
| PP-Support At-Risk | Phase 3 | Phase 2 | Phase 3 | S1 vs Demands/S3 |

### Flow Numbering Differences

Demands use different flow numbers than the strategy files (e.g., demands PP-Level Detection = Flow 12, strategy = Flow 09). This causes confusion when cross-referencing — both documents need renumbering to match.

### Demands Section 17 Phase 1 count discrepancy

Demands acknowledges a discrepancy: "This document Section 17: Phase 1 = 9 flows. Diagnosis layer-35: Phase 1 = 14 flows (4 level-specific Welcome + 8 cross-level + 2 conditional)." This internal discrepancy in the demands needs resolution — the strategies follow the 9-flow model.

### Missing: GF Three-Family Testimonial Pattern

Demands Section 36: "General Fallback mails must use the Three-Family Pattern: one testimonial from each level (L1/L2/L3) for cross-level coverage." This is **not mentioned** in any strategy file.

### Missing: BCBA Fact-Sheet Strategy

Demands Section 30: "The highest-leverage conversion tool for L2 is a one-page BCBA fact sheet." Not mentioned in copy strategy or email strategy.

### Missing: L3 Internal Flow Numbering

Demands Section 34 also references "V21: Adult Diaper Acknowledgment" for L3-specific urgency rules. Not present in any strategy.

---

## 6. KEY FINDINGS SUMMARY

### Must-Fix Before HTML Emails (Critical Items)

1. **✅ FAQ/Objection Library: change from 4 level variants to cross-level** — Affects copy strategy, email strategy, and segmentation strategy. High effort but essential.
2. **✅ Add anti-fabrication section to copy strategy** — Without this, HTML emails risk fabricated quotes and unverified claims.
3. **✅ Add forbidden phrases catalog to copy strategy** — Comprehensive 4-tier list from demands.
4. **✅ Add RS integration quota to copy strategy** — 30-50% verbatim, 30-50% Lena, 10-20% mechanism.
5. **✅ Add level-specific forbidden phrases to copy strategy** — L1 (12), L2 (2+), L3 (19), GF (6) forbidden items.
6. **✅ Resolve phase assignments** — PP-Extended Edu → Phase 3, Winback Path A → Phase 2, FAQ → Phase 3, Support At-Risk → Phase 3. Ensure consistency across all 4 strategy files.
7. **✅ Add statistical sourcing rules** — All claims must be qualified with source.
8. **✅ Add GF Three-Family Testimonial Pattern** to copy strategy.
9. **✅ Flow numbering alignment** — Ensure all strategy files use same flow numbers as demands.

### Important But Less Urgent

10. L2 mail formula: add BCBA Never Rules, additional forbidden phrases, and fact-sheet strategy.
11. Add 6 cross-level calibration rules (R1-R6) as a dedicated reference section.
12. Add 4 emotional phases with per-level dominance mapping.
13. Add conversion lever order rule and lever sequences per phase.
14. Add stage×level Hope/Realism matrix (24 cells).
15. Add extended voice rules V16-V24.
16. Add "Do Not" list (28 items) as reference.
17. Add voice×visual alignment rules.
18. Add L3 partner rules and psychological constraints.
19. Add footer specification with exact URLs and branding.
20. Add content mix % standards and frequency rules per segment.

### Already Correct (No Action Needed)

- Pop-up tags: `avatar_level1/2/3/general` — all correct.
- WELCOME10 code + auto-apply URL — all correct.
- Brand voice (Lena) — well covered.
- 4-level segmentation system — well covered.
- Welcome Flow 8-emails structure — correct.
- 5 conversion levers — covered in principle (needs order rule).
- Color palette (green #039902, Questrial) — correct in templates.
- GF sub-group identification (5 sub-groups) — well covered in segmentation strategy.
- Migration paths (4 paths) — well covered.
- Phase 1 scope: Welcome as only level-specific flow — implicitly correct.
