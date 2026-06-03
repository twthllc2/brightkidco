# V2 — Cross-Verify vs Demands Section 26: Deliverability Prerequisites

**Date:** 2026-05-26
**Inspector:** ops12
**Scope:** Verification Task 2 of 5 — Deliverability Prerequisites (Sections 26, 32, Klaviyo Technical §15)
**Target docs:** 05-dns-authentication.md, 06-warming-bot-detection.md, 08-deliverability-monitoring.md
**Source:** Giuliano-Demands.md Sections 15 (Klaviyo Technical), 26 (Deliverability Prerequisites), 32 (Deliverability & Sending Rules)

**Status:** All 3 target Klaviyo docs are **NOT YET CREATED** — `/root/projects/brightkido-email/docs/klaviyo/` is empty. This verification assesses whether the planned specs (from `v1-fix-and-build-plan.md`) fully cover the demands. The actual doc content cannot be verified until created.

---

## 1. Demands Inventory

### 1.1 Section 26 — Deliverability Prerequisites

| ID | Demand | Source Lines | Type |
|----|--------|-------------|------|
| D26-01 | Weeks 1-2 warming: only Welcome, Browse, Cart/Checkout, Post-Purchase — NO promotional | 1101 | Domain Warming |
| D26-02 | Transactional cloak required from Day 1 | 1102 | Cloaking |
| D26-03 | L3 excluded from weeks 1-2 warming | 1103 | Domain Warming |
| D26-04 | ZeroBounce list verification | 1106 | Monitoring |
| D26-05 | Google Postmaster Tools setup | 1107 | Monitoring |
| D26-06 | 7 engagement segments | 1108 | Monitoring / Segmentation |
| D26-07 | Bot detection segments | 1109 | Bot Detection |
| D26-08 | Transactional cloak on every email | 1110 | Cloaking |
| D26-09 | Conversational cloak for specific emails | 1111 | Cloaking |
| D26-10 | Transactional Cloak: must be added to every email template | 1112 | Cloaking |
| D26-11 | From: Transactional = `orders@send.brightkidco.com` | 1115 | DNS / From Address |
| D26-12 | From: Marketing = `hello@send.brightkidco.com` | 1116 | DNS / From Address |
| D26-13 | Reply-to: Always `support@brightkidco.com` | 1117 | DNS / From Address |

### 1.2 Section 32 — Deliverability & Sending Rules

| ID | Demand | Source Lines | Type |
|----|--------|-------------|------|
| D32-01 | FORBIDDEN during warming: discount codes, hard-sell language, >1 promo link, countdown timers, affiliate links | 1246-1251 | Warming Content |
| D32-02 | REQUIRED during warming: educational content, plain-text preferred, reply prompts, 60:40 text-to-image ratio, Lena's voice | 1253-1258 | Warming Content |
| D32-03 | NEVER send to "All Subscribers" or unengaged segments | 1261 | Sending Pattern |
| D32-04 | Always use engagement-based segments (90-Day Engaged minimum) | 1262 | Sending Pattern |
| D32-05 | 3-4 campaigns/week maximum during warming | 1263 | Sending Pattern |
| D32-06 | Monitor GPT reputation daily | 1264 | Monitoring |
| D32-07 | If open rate drops below 45%: pause and narrow segment | 1265 | Monitoring |
| D32-08 | Reply prompts in EVERY email — replies are #1 deliverability signal | 1266 | Sending Pattern |
| D32-09 | Phase 1: Use ONLY "Lena from BrightKidCo" <support@send.brightkidco.com> for ALL emails during warming | 1267 | Warming Content |
| D32-10 | Introduce info@ and help@ personas AFTER domain reputation established (post-Week 6) | 1269 | Warming Content |
| D32-11 | Known Fake Domains blocklist (20+ disposable email domains) | 1272 | Bot Detection |
| D32-12 | Non-Engaged Sleepers: received 10+ emails, opened 0, clicked 0 | 1273 | Bot Detection |
| D32-13 | Tag with `is_bot = True` via flows | 1274 | Bot Detection |
| D32-14 | Exclude from ALL sends via flow filters (`is_bot is not set`) | 1275 | Bot Detection |
| D32-15 | Code Red Protocol: Double Opt-In, Two-Step Welcome, spam folder messaging, VIP-only sending, 48-72h pause | 1278-1283 | Code Red |

### 1.3 Section 15 — Klaviyo Technical (Diagnosis layer-37)

| ID | Demand | Source Lines | Type |
|----|--------|-------------|------|
| D15-01 | SPF: `v=spf1 include:spf.klaviyo.com ~all` | 576 | DNS |
| D15-02 | DKIM: 2 CNAME records | 576 | DNS |
| D15-03 | DMARC: start `p=none` → `p=quarantine` → `p=reject` | 576 | DNS |
| D15-04 | API Scopes: flows, campaigns, templates, lists, metrics (read/write) | 577 | Klaviyo Config |
| D15-05 | Klaviyo variables: `{{ first_name }}`, `{{ event.order_number }}`, `{{ unsubscribe }}`, `{{ manage_preferences }}`, `{{ organization.url }}cart` | 578 | Templates |
| D15-06 | Shopify "Added to Cart" metric requires manual snippet in theme.liquid | 579 | Klaviyo Config |
| D15-07 | Transactional from: `orders@send.brightkidco.com` | 582 | From Address |
| D15-08 | Marketing from: `hello@send.brightkidco.com` | 583 | From Address |

---

## 2. Verification Table: Demands vs Klaviyo Docs

Legend: ✅ = Fully covered in plan spec, ⚠️ = Partially covered or unclear, ❌ = Not mentioned in plan, N/A = Out of scope for this doc

### 2.1 Doc 05 — DNS & Domain Authentication (Item 5)

**Planned output:** `/root/projects/brightkido-email/docs/klaviyo/05-dns-authentication.md`
**Assigned to:** ops7 (Wave 7.5)
**Status:** ❌ NOT CREATED

| Demand ID | Demand | Coverage | Notes |
|-----------|--------|----------|-------|
| D15-01 | SPF record | ✅ | Plan §7 Item 5: `v=spf1 include:spf.klaviyo.com ~all` |
| D15-02 | DKIM CNAME records | ✅ | Plan §7 Item 5: "2 CNAME records from Klaviyo" |
| D15-03 | DMARC policy progression | ✅ | Plan §7 Item 5: `p=none` → `p=quarantine` → `p=reject` |
| D26-11 | Transactional from `orders@send.brightkidco.com` | ✅ | Plan §7 Item 5: includes all 3 from addresses |
| D26-12 | Marketing from `hello@send.brightkidco.com` | ✅ | Plan §7 Item 5: included |
| D26-13 | Reply-to always `support@brightkidco.com` | ⚠️ | Plan mentions from addresses but does not explicitly call out reply-to configuration. Implied but should be explicit. |
| D15-07 | Transactional from address | ✅ | Covered in Item 5 from-address list |
| D15-08 | Marketing from address | ✅ | Covered in Item 5 from-address list |
| D32-09 | Phase 1: Only "Lena from BrightKidCo" <support@send.brightkidco.com> | ❌ | Not mentioned in Item 5. This is a warming-phase from-address rule, belongs in 05 or 06. |
| D32-10 | Introduce info@/help@ personas after Week 6 | ❌ | Not mentioned in Item 5. Phased persona rollout is a DNS/from-address concern. |

**Gaps: 2 uncovered demands (D32-09, D32-10), 1 partially covered (D26-13)**

### 2.2 Doc 06 — Warming Schedule & Bot Detection (Item 6)

**Planned output:** `/root/projects/brightkido-email/docs/klaviyo/06-warming-bot-detection.md`
**Assigned to:** ops8 (Wave 7.5)
**Status:** ❌ NOT CREATED

| Demand ID | Demand | Coverage | Notes |
|-----------|--------|----------|-------|
| D26-01 | Weeks 1-2: only Welcome/Browse/Cart/PP, NO promo | ✅ | Plan §7 Item 6: explicit match |
| D26-02 | Transactional cloak from Day 1 | ⚠️ | Mentioned in Item 6 context but more fully belongs in Item 7 |
| D26-03 | L3 excluded from weeks 1-2 warming | ✅ | Plan §7 Item 6: "L3 excluded" |
| D26-07 | Bot detection segments | ✅ | Plan §7 Item 6: Known Fake Domains + Non-Engaged Sleepers |
| D32-01 | FORBIDDEN content during warming | ✅ | Plan §7 Item 6 references content rules |
| D32-02 | REQUIRED content during warming | ⚠️ | Plan mentions educational content but is light on 60:40 text-to-image ratio and Lena's voice requirement |
| D32-03 | NEVER send to "All Subscribers" | ⚠️ | Plan §7 Item 6: "Always use engagement-based segments" implies this but doesn't state the prohibition explicitly |
| D32-04 | 90-Day Engaged minimum | ✅ | Plan §7 Item 6: "90-Day Engaged minimum for general sends" |
| D32-05 | 3-4 campaigns/week max | ✅ | Plan §7 Item 6: explicit |
| D32-06 | Monitor GPT reputation daily | ✅ | Plan §7 Item 6: explicit |
| D32-07 | If open rate <45%: pause | ❌ | Not mentioned in Item 6 plan spec |
| D32-08 | Reply prompts in EVERY email | ❌ | Not mentioned in Item 6 plan spec |
| D32-09 | Phase 1: Only Lena from send domain | ❌ | Belongs in Item 5 or 6 |
| D32-10 | info@/help@ after Week 6 | ❌ | Belongs in Item 5 or 6 |
| D32-11 | Known Fake Domains blocklist | ✅ | Plan §7 Item 6: explicit |
| D32-12 | Non-Engaged Sleepers segment | ✅ | Plan §7 Item 6: "10+ received, 0 opened, 0 clicked" |
| D32-13 | Tag with `is_bot = True` | ✅ | Plan §7 Item 6: explicit |
| D32-14 | Exclude via `is_bot is not set` | ⚠️ | Plan implies suppression but doesn't document the exact filter condition |
| D32-15 | Code Red Protocol | ✅ | Plan §7 Item 6: full 5-step protocol listed |

**Gaps: 4 uncovered demands (D32-07, D32-08, D32-09, D32-10), 4 partially covered (D26-02, D32-02, D32-03, D32-14)**

### 2.3 Doc 08 — Deliverability Monitoring Dashboard (Item 8)

**Planned output:** `/root/projects/brightkido-email/docs/klaviyo/08-deliverability-monitoring.md`
**Assigned to:** ops10 (Wave 7.5)
**Status:** ❌ NOT CREATED

| Demand ID | Demand | Coverage | Notes |
|-----------|--------|----------|-------|
| D26-04 | ZeroBounce list verification | ✅ | Plan §7 Item 8: "ZeroBounce list verification schedule (weekly)" |
| D26-05 | Google Postmaster Tools setup | ✅ | Plan §7 Item 8: explicit setup guide |
| D26-06 | 7 engagement segments | ⚠️ | Plan §7 Item 8 does not enumerate the 7 segments. This belongs in Item 3 (Segment Configuration). |
| D26-07 | Bot detection segments | ⚠️ | Plan §7 Item 8 mentions monitoring but bot detection segment creation is in Item 6 |
| D26-08 | Transactional cloak on every email | ❌ | Plan §7 Item 8 doesn't mention this; belongs in Item 7 |
| D26-09 | Conversational cloak for specific emails | ❌ | Plan §7 Item 8 doesn't mention this; belongs in Item 7 |
| D32-06 | Monitor GPT reputation daily | ⚠️ | Plan §7 Item 8 mentions Postmaster Tools but doesn't explicitly mention daily GPT reputation monitoring as a recurring task |
| D32-07 | If open rate <45%: pause | ❌ | Not mentioned in Item 8 plan spec |
| D32-15 | Code Red Protocol execution | ⚠️ | Plan §7 Item 8 defines the protocol triggers but doesn't define threshold metrics (bounce <0.5%, spam <0.01%, etc.) which are in Item 8 plan spec |

**Gaps: 3 uncovered demands (D26-08, D26-09, D32-07), 4 partially covered (D26-06, D26-07, D32-06, D32-15)**

---

## 3. Cross-Doc Dependencies & Boundary Issues

| Issue | Demands Involved | Affected Docs | Recommendation |
|-------|-----------------|---------------|---------------|
| Cloak rules split across 3 docs | D26-02, D26-08, D26-09, D26-10 | 05, 06, 07, 08 | Item 7 (Cloak Matrix) should be the single source of truth for all cloak rules. Docs 05, 06, 08 should reference Item 7 by cross-link. |
| Warming from-address rules in wrong doc | D32-09, D32-10 | 05, 06 | These warming-phase rules must be added to Doc 06 (Warming Schedule). They are timing-dependent, not DNS configuration. |
| 7 engagement segments undefined | D26-06 | 08, 03 | The 7 engagement segments (VIP Clickers, Engaged, Lapsed, Reactivated, New, Sleepers, Bots) need a single definition source. Add to Doc 03 (Segment Configuration). |
| Threshold monitoring incomplete | D32-07, D32-06 | 08, 06 | Doc 08 needs explicit threshold table: open rate <45% → pause, bounce <0.5%, spam <0.01%, GPT reputation monitoring frequency. |
| Reply-to recorded in demands but not in plan | D26-13 | 05 | Add explicit reply-to configuration instructions to Doc 05. All 3 from addresses have the same reply-to. |

---

## 4. Overall Gap Summary

### 4.1 Coverage by Doc

| Doc | Total Demands | ✅ Full | ⚠️ Partial | ❌ Missing | Score |
|-----|-------------|---------|-----------|-----------|-------|
| 05 — DNS & Auth | 10 | 7 | 1 | 2 | 70% |
| 06 — Warming & Bot | 20 | 11 | 4 | 4 | 55% |
| 08 — Monitoring | 10 | 3 | 4 | 3 | 30% |

### 4.2 Critical Gaps (Must Fix)

1. **D26-13 (Reply-to configuration):** Not explicitly documented in any planned doc. Every email must have reply-to = `support@brightkidco.com`. This is critical for deliverability (reply prompting) and should be in Doc 05.

2. **D32-07 (Open rate drop threshold):** "If open rate drops below 45%: pause and narrow segment" — not documented in any planned doc. Needs to be in Doc 06 (Warming) and Doc 08 (Monitoring).

3. **D32-08 (Reply prompts in EVERY email):** "Reply prompts in EVERY email — replies are #1 deliverability signal" — not in any planned doc. Should be in Doc 06.

4. **D32-09, D32-10 (Phased from-address rollout):** Warming-only from-address rules (Lena only, then introduce personas after Week 6) not documented in any planned doc. Needs to be in Doc 05 and Doc 06.

### 4.3 Doc Readiness Status

| Doc | Plan Spec Exists | Coverage Score | Critical Blocks | Ready to Create? |
|-----|-----------------|---------------|----------------|-----------------|
| 05 — DNS & Auth | ✅ Detailed | 70% | 3 gaps | ✅ Plan is sufficient to begin. Fix reply-to + from-address rules during creation. |
| 06 — Warming & Bot | ✅ Detailed | 55% | 4 gaps | ✅ Plan is sufficient to begin. Add threshold, reply prompts, and from-address rules during creation. |
| 08 — Monitoring | ✅ Outlined | 30% | 3 gaps | ⚠️ Plan needs Expansion. Add thresholds, cloak references, and engagement segment definitions before creation. |

---

## 5. Recommendations for Wave 7.5 Executors

### To ops7 (Item 5 — DNS & Auth)
- Add explicit reply-to configuration: all from addresses forward to `support@brightkidco.com`
- Add note about warming-phase from-address limitation (refer to Item 6 as authority)
- Add phased persona rollout note with cross-reference to Item 6
- Include DNS verification commands/tools for SPF, DKIM, DMARC

### To ops8 (Item 6 — Warming & Bot Detection)
- Add D32-07: "If open rate drops below 45%: pause all sends, narrow to 90-Day Engaged segment, reassess after 48h"
- Add D32-08: "Reply prompts in EVERY warming email — template must include a question or invitation to reply"
- Add D32-09: "Phase 1 (Weeks 1-6): Use ONLY 'Lena from BrightKidCo' <support@send.brightkidco.com>"
- Add D32-10: "Post-Week 6: Gradually introduce hello@send.brightkidco.com for marketing, orders@send.brightkidco.com for transactional"
- Clarify the `is_bot` suppression filter condition: `is_bot is not set`

### To ops10 (Item 8 — Deliverability Monitoring)
- Add explicit thresholds table:
  - Open rate <45% → Warning → pause segment
  - Bounce rate >0.5% → Warning → validate list
  - Spam complaint >0.01% → Critical → Code Red Protocol
  - GPT "Bad" → Critical → Code Red Protocol
- Cross-reference Item 7 for cloak rules (don't duplicate)
- Cross-reference Item 6 for warming rules (don't duplicate)
- Define the 7 engagement segments by referencing Item 3
- Add weekly/monthly monitoring cadence with responsible role

### General
- All 3 docs should include a "Related Demands" cross-reference table at the top
- Use consistent terminology: "Domain Warming" (not just "Warming"), "Deliverability Monitoring" (not just "Monitoring")
- After docs are created, re-run this verification to validate actual content

---

## 6. Verification Methodology

| Aspect | Detail |
|--------|--------|
| **Method** | Full enumeration of demands from Sections 15, 26, 32 → manual mapping to planned doc specs from v1-fix-and-build-plan.md §7 Items 5, 6, 8 |
| **Limitation** | Target docs do not exist yet. Verification is against plan specs, not actual files. |
| **Sampling bias** | None — all demands enumerated (no sampling) |
| **Re-verification required** | Yes — after ops7, ops8, ops10 complete their items |

---

*End of V2 verification. File size: ~7.5 KB. Created by ops12 for Wave 7 Verification Task 2 of 5.*
