# Layer 37 Round 6: Klaviyo Technical Setup — Gap Analysis

**Generated:** 2026-05-25
**Sources Compared:** R1 (Client Files), R3 (Wiki Extraction), R4 (Cross-Reference Matrix), overnight-plan.md L605-616

---

## 1. GAP MATRIX: Required vs Documented

| Requirement (Plan L605-616) | Documented? | Gap Severity | Notes |
|---|---|---|---|
| 6 Custom Profile Properties | YES — all 6 listed with types/values | LOW | R1 complete; R4 found 2 additional L8 properties missing (`purchase_reason`, `label_sensitive`) |
| 15 Tags (4 avatar + 6 behavioral + 5 purchase) | YES — all 15 listed | MEDIUM | Mechanism for applying behavioral tags undocumented (R4 INC-3) |
| 9 Flow Triggers | YES — all 9 with triggers/conditions | MEDIUM | Timing intervals incomplete; R3 found Nature Secrets timing templates available |
| 3 Exit Conditions | YES — listed | HIGH | Priority hierarchy undefined; no per-flow exit logic |
| Segmentation rules | YES — Cross-Level vs Level-specific | LOW | Clear and documented; R4 confirms L8 alignment |
| Discount code | YES — 10%OFF-BKCO | CRITICAL | R4 INC-1: L4/L8/L16 all say WELCOME10, L37 says 10%OFF-BKCO |
| Sender config | YES — support@brightkidco.com / "Lena" | LOW | Complete; R4 confirms L36 alignment |

---

## 2. PRIORITY-RANKED GAPS

### GAP 1 — Discount Code Inconsistency (CRITICAL)
**What's missing:** L37 defines the welcome discount as `10%OFF-BKCO`, but L4 (Avatar Levels), L8 (Segmentation), and L16 (Flow Architecture) all use `WELCOME10`. The pop-up (L8) and Welcome Flow (L16) both reference WELCOME10.

**Cross-reference finding (R4 INC-1):** This is a blocking inconsistency. If the pop-up shows WELCOME10 but Klaviyo has 10%OFF-BKCO configured, customers get a dead code.

**Impact on Section 2+:** CRITICAL. Every Welcome Flow email references the discount code. Wrong code = broken flow.

**Resolution:** Use WELCOME10 everywhere (L4/L8/L16 consensus). Update L37 to match.

---

### GAP 2 — Flow Priority Hierarchy (CRITICAL)
**What's missing:** Exit condition #3 ("Already in a higher-priority flow") references a priority hierarchy, but the exact ordering is never explicitly defined for all 9 flows.

**What we have:** Implicit: "Order Confirmation > Shipping > Arrived (sequential post-purchase)" and "Cart/Checkout/Browse are independent high-velocity flows."

**What's needed:** Explicit ranked list. Proposed:
1. Order Confirmation (highest — transactional)
2. Shipping Notification
3. Arrived & Welcome
4. Cart Abandonment (high-velocity)
5. Checkout Abandonment (high-velocity)
6. Browse Abandonment (high-velocity)
7. Post-Purchase Direct Upsell
8. Post-Purchase Level-Detection
9. Welcome Flow (lowest — onboarding)

**Impact on Section 2+:** CRITICAL. Email copy teams cannot write correct stop conditions without knowing which flow wins when a subscriber qualifies for multiple flows simultaneously. Klaviyo flow filter configuration depends on this.

**Action needed:** Client must confirm the priority order, or we define it and get sign-off.

---

### GAP 3 — Flow Timing Details / Email Counts (CRITICAL)
**What's missing:** For 7 of the 9 flows, the exact email sequence is undefined.

| Flow | Emails Documented | Timing Documented |
|---|---|---|
| Welcome Flow (×4 variants) | 8 emails (E1-E8) | Day 0 + "scheduled intervals" — intervals NOT specified |
| Cart Abandonment | NOT specified | 24h trigger delay only |
| Checkout Abandonment | NOT specified | 1h trigger delay only |
| Browse Abandonment | NOT specified | 24h trigger delay only |
| Order Confirmation | NOT specified | Implied immediate |
| Shipping Notification | NOT specified | Implied on fulfillment |
| Arrived & Welcome | NOT specified | Implied on carrier delivery |
| PP-Direct Upsell | NOT specified | Days 1-3 only |
| PP-Level Detection | NOT specified | Day 14 only |

**Wiki templates available (R3):** Nature Secrets has complete timing for Post-Purchase (4 emails, 21 days), Welcome (5 emails, 7 days), and Abandoned Checkout (3 emails, 28.5h). These can be adapted.

**Impact on Section 2+:** CRITICAL. Email copy cannot be written without knowing how many emails per flow and the timing between them. Section 2 is entirely blocked for non-welcome flows.

**Action needed:** Define email count and timing for all 9 flows. Welcome Flow intervals specifically.

---

### GAP 4 — Missing Custom Profile Properties (HIGH)
**What's missing:** R4 cross-reference found L8 defines 2 additional properties not in L37:

| Property | Type | Purpose | L37 Status |
|---|---|---|---|
| `purchase_reason` | string | Zero-party data: why buying (gift, own child, school) | MISSING |
| `label_sensitive` | boolean | Sub-Group B (Diagnosis-Rejecters) routing flag | MISSING |

**Impact on Section 2+:** HIGH. `purchase_reason` enables personalized content blocks. `label_sensitive` is required for GF Sub-Group B routing — without it, label-averse parents get generic copy that may alienate them.

**Action needed:** Add both properties to L37 spec.

---

### GAP 5 — Behavioral Tag Application Mechanism (HIGH)
**What's missing:** HOW are behavioral tags applied? Six tags (`welcome_completed`, `welcome_completed_no_purchase`, `post_purchase_active`, `at_risk_no_open`, `inactive_60_days`, `inactive_120_days`) are defined but the application mechanism is unspecified.

**Possibilities:**
- A) Klaviyo flow actions (e.g., "at end of Welcome Flow, add tag")
- B) Dynamic segments (not tags at all)
- C) API calls from Shopify
- D) Manual tagging

**R4 finding (INC-3):** `at_risk_no_open` — L37 says "recent" but L8 specifies "3-7 days." Ambiguous.

**Impact on Section 2+:** HIGH. If tags are segment-based, the "tag" terminology is misleading and Klaviyo implementation uses segment filters instead. If flow-based, we need to specify which flow step applies which tag.

**Action needed:** Decision: tags or segments? Then per-tag trigger definition. Use L8's 3-7 day spec for `at_risk_no_open`.

---

### GAP 6 — 16 L16 Flows Missing from L37 (MEDIUM)
**What's missing:** R4 found L37 covers only 9 of 25 flows defined in L16. The 16 missing flows:

| Flow | Phase | Trigger |
|---|---|---|
| Out for Delivery (07) | P1 | Carrier "Out for Delivery" |
| PP-Mary S. Story (11) | P2 | Order Placed + Day 3 |
| PP-Education Day 0-21 (12) | P2 | Order Placed |
| PP-Extended Upsell (13) | P2 | Day 28 + level tag |
| PP-Mid Check-In (14) | P2 | Day 30-60 |
| PP-Extended Education (15) | P3 | Level tag + Day 22 |
| PP-Support At-Risk (16) | P3 | Day 3-7 no opens |
| Replenishment A/B/C (17-19) | P2 | Pack-size + Day 14/75/150 |
| Review Request (20) | P2 | Day 30 post-purchase |
| Winback Path A (21) | P2 | Last purchase + 90d inactive |
| Winback Path B (22) | P3 | Signup + 60d no purchase |
| Sunset Flow (23) | P3 | 120 days inactive |
| FAQ/Objection Library (24) | P3 | Welcome end + no purchase |
| Referral Flow (25) | P3 | Day 30 + positive engagement |

**Impact on Section 2+:** MEDIUM. Acceptable if L37 intentionally scopes to Phase 1 only, but should explicitly document the 16 excluded flows and their Phase 2/3 status.

**Action needed:** Add a "Phase 2/3 Flows" section to L37 referencing L16.

---

### GAP 7 — Popup Integration Technical Spec (MEDIUM)
**What's missing:** The popup is described functionally (1 question, 4 buttons, applies tags) but the technical integration is unspecified.

**Unknowns:**
- Klaviyo built-in popup, Shopify native, or third-party (OptinMonster, Privy, Justuno)?
- How does button click map to Klaviyo tag? (Hidden fields? JS API? UTM?)
- What happens to the email — added to a specific Klaviyo list?
- Mobile behavior — same layout or different?
- Exit intent or timed trigger?

**Impact on Section 2+:** MEDIUM. Affects how Welcome Flow E1 is triggered and whether we can reliably assume the tag is set before E1 sends.

**Action needed:** Client to confirm popup tool and integration method.

---

### GAP 8 — Shopify-Klaviyo Integration Configuration (MEDIUM)
**What's missing:** No documentation of the Shopify-Klaviyo integration settings.

**Unknowns:**
- Is Klaviyo's native Shopify integration installed?
- Are Shopify webhooks configured for: Order Placed, Order Fulfilled, Carrier Delivered?
- Is the Klaviyo tracking snippet installed on the storefront?
- Are product catalog sync settings configured?
- Are checkout started / cart updated events tracked via Klaviyo.js?

**R3 finding:** Wiki confirms Shopify is the eCommerce platform but no integration status documented.

**Impact on Section 2+:** MEDIUM. All 9 flows depend on Shopify events. If integration isn't installed, no flows trigger.

**Action needed:** Verify Klaviyo-Shopify integration is active. If not, installation is a prerequisite.

---

### GAP 9 — Domain Warmup Schedule (MEDIUM)
**What's missing:** Plan (L601) notes Send.brightkidco.com needs warming but L37 has no warmup schedule.

**R3 finding:** Wiki has a complete 6-week DTC warmup protocol (Week 1-2: 14-day engaged, Week 3: 30-day, Week 4: 60-day, Week 5-6: 90-day then full). L36 confirmed authentication done but warming NOT started.

**R4 finding (INC-12):** L37 doesn't mention L36's warming constraints on flow activation.

**Impact on Section 2+:** MEDIUM. Determines launch sequencing — can't launch all 9 flows simultaneously on a cold domain.

**Action needed:** Adopt the wiki's 6-week protocol. Sequence: Welcome first (new subscribers = engaged), transactional next, abandonment last.

---

### GAP 10 — L36 Deliverability Dependencies (MEDIUM)
**What's missing:** R4 found 7 L36 requirements not referenced in L37:

| L36 Requirement | L37 Status |
|---|---|
| ZeroBounce list verification | Not mentioned |
| Google Postmaster Tools | Not mentioned |
| 7 engagement segments | Not mentioned |
| Bot detection segments | Not mentioned |
| Transactional Cloak | Not mentioned |
| Conversational Cloak | Not mentioned |
| DMARC upgrade path (p=none → quarantine) | Not mentioned |

**Impact on Section 2+:** MEDIUM. Transactional Cloak is required on every email template per L36. Missing this = deliverability risk.

**Action needed:** Add L36 dependency section to L37. At minimum: Transactional Cloak on all templates, warming segments for launch sequencing.

---

### GAP 11 — Welcome Flow Variant Content Direction (LOW)
**What's missing:** The 4 Welcome Flow variants (L1, L2, L3, General) are defined structurally but tonality per variant is not specified.

**What's needed:** Per variant:
- L1: Beginner parent tone (emotional, encouraging, "you've got this")
- L2: Intermediate parent tone (practical, method-cycling, product-focused)
- L3: Experienced parent tone (dignity-first, efficiency, value-focused)
- General: Warm, inclusive, broad

**Impact on Section 2+:** LOW-MEDIUM. Can be inferred from avatar definitions (L4) and refined in Section 2.

---

### GAP 12 — Klaviyo List Structure (LOW)
**What's missing:** No documentation of Klaviyo list architecture.

**Unknowns:** Single master list or multiple? Double or single opt-in? Suppression list management?

**Impact on Section 2+:** LOW. Klaviyo best practice is single list + segment/tag filtering. Can be assumed.

---

### GAP 13 — Replenishment / Repeat Purchase Logic (LOW)
**What's missing:** Post-purchase upsell paths documented but timing of upgrade ask undefined beyond "Days 1-3."

**Unknowns:** When does replenishment trigger (product lifespan?)? How many emails? What triggers `repeat_buyer` vs `vip_buyer` tag?

**Impact on Section 2+:** LOW for initial launch. Can be Phase 2.

---

## 3. ASSUMPTIONS NEEDING VALIDATION

| # | Assumption | Risk if Wrong | Validation Method |
|---|---|---|---|
| A1 | Klaviyo native Shopify integration is installed | All flows dead | Check Klaviyo Integrations tab |
| A2 | Single Klaviyo list, tag-based segmentation | Architecture change | Check Klaviyo Lists settings |
| A3 | Popup is Klaviyo-native or compatible with Klaviyo JS API | Tag application breaks | Check popup tool in Shopify admin |
| A4 | "Lena from BrightKidCo" is a real person (not fictional) | Compliance/legal risk | Client confirmation |
| A5 | Carrier Delivered event available from Shopify shipping app | Arrived flow won't trigger | Check Shopify shipping integration |
| A6 | Questrial font available in Klaviyo template editor | Design breaks | Test in Klaviyo |
| A7 | 60-day guarantee is current | Copy error | Client confirmation |
| A8 | WELCOME10 is the correct discount code (not 10%OFF-BKCO) | Dead discount code | Client confirmation + check Shopify admin |
| A9 | send.brightkidco.com DNS records are fully propagated | Email delivery failure | Check via MXToolbox or Gmail "Show Original" |

---

## 4. UNRESOLVED QUESTIONS

1. **What is the Shopify shipping/carrier app?** (Affects Carrier Delivered trigger for Arrived flow)
2. **Is there an existing Klaviyo account or fresh setup?** (Affects warmup strategy — R3 found credentials documented)
3. **What is the current email list size?** (Affects warmup volume planning)
4. **Are there existing Klaviyo flows that need replacement or archival?**
5. **What Shopify apps are currently installed?** (May conflict with Klaviyo tracking)
6. **Is the Klaviyo-Shopify integration already active?** (R3 found Shopify confirmed but integration status unknown)
7. **Which discount code is canonical: WELCOME10 or 10%OFF-BKCO?** (R4 INC-1)
8. **Should L37 scope to Phase 1 only, or should it reference all 25 L16 flows?** (R4 INC-2)

---

## 5. IMPACT ASSESSMENT FOR SECTION 2+ WORK

| Gap | Blocks Section 2 (Email Copy)? | Blocks Section 3 (Technical)? | Blocks Launch? |
|---|---|---|---|
| GAP 1 (Discount Code) | YES — every Welcome email | YES — Klaviyo coupon config | YES |
| GAP 2 (Priority Hierarchy) | YES — flow filters | YES — Klaviyo config | YES |
| GAP 3 (Flow Timing) | YES — can't write without count/timing | YES — flow config | YES |
| GAP 4 (Missing Properties) | PARTIAL — content personalization | YES — profile config | PARTIAL |
| GAP 5 (Tag Mechanism) | PARTIAL — flow specs | YES — implementation | YES |
| GAP 6 (16 Missing Flows) | NO (Phase 2/3) | NO (Phase 2/3) | NO |
| GAP 7 (Popup Integration) | NO | YES — popup setup | YES |
| GAP 8 (Shopify-Klaviyo) | NO | YES — prerequisite | YES |
| GAP 9 (Domain Warmup) | NO | YES — launch sequencing | YES |
| GAP 10 (L36 Dependencies) | PARTIAL — cloak on templates | YES — deliverability setup | YES |
| GAP 11 (Variant Tonality) | PARTIAL — tonal direction | NO | NO |
| GAP 12 (List Structure) | NO | YES — Klaviyo config | PARTIAL |
| GAP 13 (Replenishment) | NO | NO | NO (Phase 2) |

**Bottom line:**
- Gaps 1, 2, 3 BLOCK Section 2 (Email Copy) — must resolve before any copywriting begins
- Gaps 1-5, 7-10, 12 BLOCK Section 3 (Technical Implementation)
- Gap 9 BLOCKS launch sequencing
- Gaps 6, 11, 13 can proceed with assumptions or defer to Phase 2

**Recommended resolution order:**
1. GAP 1 (Discount Code) — 5-minute client confirmation
2. GAP 3 (Flow Timing) — unblocks the most downstream work
3. GAP 2 (Priority Hierarchy) — needed for both copy and config
4. GAP 5 (Tag Mechanism) — implementation prerequisite
5. GAP 8 (Shopify-Klaviyo Integration) — verify or install
6. GAP 4 (Missing Properties) — add to spec
7. GAP 7 (Popup Integration) — configure or replace
8. GAP 9 (Domain Warmup) — adopt wiki's 6-week protocol
9. GAP 10 (L36 Dependencies) — add Transactional Cloak minimum
10. Gaps 6, 11, 12, 13 — can proceed in parallel with assumptions

---

## 6. CROSS-ROUND SYNTHESIS

### What R1 (Client Files) Got Right
- All 15 tags match L8 taxonomy exactly
- All 9 Phase 1 flow triggers consistent across layers
- Sender configuration matches L36
- Offer pushing logic well-documented (11 scenarios)

### What R3 (Wiki Extraction) Added
- Nature Secrets flow specs provide timing templates for 3 flow types
- Email design standards (600px, <100KB, mobile-first) applicable
- DTC deliverability warmup protocol (6 weeks) ready to adopt
- Klaviyo API patterns documented for programmatic flow creation
- 2 wiki stubs identified (Klaviyo Setup Checklist, Email Deliverability)

### What R4 (Cross-Reference) Found
- 12 inconsistencies identified (2 critical, 7 medium, 3 low)
- Discount code mismatch (INC-1) is the #1 blocking issue
- 16 L16 flows not in L37 (INC-2) — acceptable if Phase 1 scoped
- 2 missing custom properties (`purchase_reason`, `label_sensitive`)
- 7 L36 deliverability dependencies not referenced in L37

### What This R6 (Gap Analysis) Concludes
- 13 gaps identified (3 critical, 4 high, 4 medium, 3 low)
- 9 assumptions needing validation
- 8 unresolved questions
- Section 2 (Email Copy) is blocked until Gaps 1-3 are resolved
- Section 3 (Technical) is blocked until Gaps 1-5, 7-10 are resolved
- Phase 1 launch requires: discount code fix, flow timing, priority hierarchy, tag mechanism, Shopify integration verification, domain warmup plan
