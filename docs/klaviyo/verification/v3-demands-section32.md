# V3 — Cross-Verify vs Demands Section 32: Delivery & Sending Rules

**Date:** 2026-05-26
**Inspector:** ops13
**Scope:** Verification Task 3 of 5 — Delivery & Sending Rules (Section 32)
**Target docs:** `/root/projects/brightkido-email/docs/klaviyo/*.md` — existing docs re-read line by line
**Source:** Giuliano-Demands.md Section 32 (lines 1242–1335)

## Available Klaviyo Docs (4 total, as of inspection)

| # | File | Description | Status |
|---|------|-------------|--------|
| 01 | `01-template-variables.md` | Klaviyo template variable reference, profile properties, level-level conditionals, flow suppression & exit rules | ✅ EXISTS (986 lines) |
| 03 | `03-segment-configuration.md` | Level-based and behavioral segments, popup routing, suppression rules, tag lifecycle, sunset flow routing | ✅ EXISTS (678 lines) |
| 04 | `04-flow-triggers.md` | Flow trigger definitions — pre-purchase & transactional, exit conditions, suppression, priority hierarchy | ✅ EXISTS (533 lines) |
| 05 | `05-dns-authentication.md` | DNS setup (SPF/DKIM/DMARC), from-addresses, Postmaster Tools, deliverability monitoring, hygiene checklist | ✅ EXISTS (435 lines) |

## Missing Klaviyo Docs (as named in verif task brief)

| Expected Doc | Actual Status | Gap Severity |
|-------------|---------------|-------------|
| `06-warming.md` or similar | ❌ NOT CREATED | **CRITICAL** — warming content rules + sending pattern rules have no Klaviyo-specific implementation doc |
| `07-cloak.md` or similar | ❌ NOT CREATED | **CRITICAL** — cloak deployment matrix has no Klaviyo-specific implementation doc |
| `08-monitoring.md` or similar | ❌ NOT CREATED | **HIGH** — metrics thresholds, Code Red monitoring, monthly hygiene procedures not in a dedicated doc |
| `02-*` (account-setup, etc.) | ❌ NOT CREATED | Low — out of Section 32 scope |

---

## 1. Demands Inventory — Section 32 Demands

All 26 demands extracted from Section 32 (lines 1242–1335), grouped by category.

### Group A — Domain Warming Content Rules (Weeks 1-2) — lines 1244–1259

| ID | Demand | Lines |
|----|--------|-------|
| D32-A01 | FORBIDDEN during warming: discount codes, percentage-off offers, dollar-amount savings | 1247 |
| D32-A02 | FORBIDDEN: hard-sell language ("Buy Now", "Shop Today", "Limited Time", "Don't Miss Out") | 1248 |
| D32-A03 | FORBIDDEN: more than one promotional link or CTA | 1249 |
| D32-A04 | FORBIDDEN: aggressive countdown timers, urgency banners, stock-level alerts | 1250 |
| D32-A05 | FORBIDDEN: third-party sponsored content or affiliate links | 1251 |
| D32-A06 | REQUIRED: educational content, best-seller highlights, community-focused content | 1254 |
| D32-A07 | REQUIRED: plain-text or lightly formatted preferred | 1255 |
| D32-A08 | REQUIRED: reply prompts encouraged | 1256 |
| D32-A09 | REQUIRED: minimum 60:40 text-to-image ratio | 1257 |
| D32-A10 | REQUIRED: Lena's peer-to-peer voice | 1258 |

### Group B — Warming Sending Pattern Rules — lines 1260–1269

| ID | Demand | Lines |
|----|--------|-------|
| D32-B01 | NEVER send to "All Subscribers" or unengaged segments | 1261 |
| D32-B02 | Always use engagement-based segments (90-Day Engaged minimum for general sends) | 1262 |
| D32-B03 | 3-4 campaigns per week maximum during warming | 1263 |
| D32-B04 | Monitor GPT reputation daily | 1264 |
| D32-B05 | If open rate drops below 45%: pause and narrow segment | 1265 |
| D32-B06 | Reply prompts in EVERY email — replies are #1 deliverability signal | 1266 |
| D32-B07 | Phase 1: Use ONLY "Lena from BrightKidCo" <support@send.brightkidco.com> for ALL emails during warming | 1267 |
| D32-B08 | Adding new from-addresses during warming splits reputation signals | 1268 |
| D32-B09 | Introduce info@ and help@ personas AFTER domain reputation established (post-Week 6) | 1269 |

### Group C — Bot Detection & Suppression — lines 1271–1275

| ID | Demand | Lines |
|----|--------|-------|
| D32-C01 | Segment 1 — Known Fake Domains: blocklist of 20+ disposable email domains | 1272 |
| D32-C02 | Segment 2 — Non-Engaged Sleepers: received 10+ emails, opened 0, clicked 0 | 1273 |
| D32-C03 | Tag with `is_bot = True` via flows | 1274 |
| D32-C04 | Exclude from ALL sends via flow filters (`is_bot is not set`) | 1275 |

### Group D — Code Red Protocol (Spam Crisis) — lines 1277–1283

| ID | Demand | Lines |
|----|--------|-------|
| D32-D01 | Enable temporary Double Opt-In for all new subscribers | 1279 |
| D32-D02 | Modified Two-Step Welcome Flow — gate behind open of Email #1 | 1280 |
| D32-D03 | "Check your spam folder" messaging on sign-up confirmation pages | 1281 |
| D32-D04 | Send ONLY to VIP Clickers segment for first 2 weeks | 1282 |
| D32-D05 | Consider 48-72 hour sending pause for reputation reset | 1283 |

### Group E — Transactional Email Rules — lines 1285–1290

| ID | Demand | Lines |
|----|--------|-------|
| D32-E01 | Must be predominantly transactional per Google 2024 guidelines | 1286 |
| D32-E02 | NO promotional content (cross-sells, upsells, marketing banners) — voids CAN-SPAM transactional exemption | 1287 |
| D32-E03 | Hidden plain-text fallback div mandatory for deliverability | 1288 |
| D32-E04 | Table-based layout, inline CSS, 600px max width | 1289 |
| D32-E05 | Shopify integration must disable default transactional emails to avoid duplicate sends | 1290 |

### Group F — Deployment Matrix — Cloak Assignment Per Flow — lines 1292–1302

| ID | Demand | Lines |
|----|--------|-------|
| D32-F01 | Welcome E1: Transactional Cloak = YES, Conversational Cloak = YES | 1295 |
| D32-F02 | Welcome E2-8: Transactional Cloak = YES, Conversational Cloak = NO | 1296 |
| D32-F03 | Abandoned Checkout E1: YES/YES | 1297 |
| D32-F04 | Abandoned Cart E1: YES/YES | 1298 |
| D32-F05 | Browse Abandonment E1: YES/YES | 1299 |
| D32-F06 | All Campaigns: YES/NO | 1300 |
| D32-F07 | Customer Winback (all): YES/YES | 1301 |
| D32-F08 | Post-Purchase (all): YES/NO | 1302 |

### Group G — Monthly Hygiene Checklist — lines 1304–1309

| ID | Demand | Lines |
|----|--------|-------|
| D32-G01 | Review bounce rate trend (target <0.5%) | 1305 |
| D32-G02 | Review spam complaint rate (target <0.03%) | 1306 |
| D32-G03 | Verify Sunset Flow is live and processing | 1307 |
| D32-G04 | Review 120-Day Unengaged segment size | 1308 |
| D32-G05 | Export Ghost Profiles for manual suppression | 1309 |

### Group H — Metrics Thresholds — lines 1311–1316

| ID | Demand | Lines |
|----|--------|-------|
| D32-H01 | Bounce Rate Target <0.5%, Warning 0.5-1.0%, Critical >1.0% | 1314 |
| D32-H02 | Spam Complaint Target <0.01%, Warning 0.01-0.03%, Critical >0.03%, Emergency >0.05% | 1315 |

### Group I — Sensitive Content → Deliverability Impact — lines 1317–1324

| ID | Demand | Lines |
|----|--------|-------|
| D32-I01 | Self-Blame → Spam complaints from distressed parents | 1320 |
| D32-I02 | Partner Conflict → Partner-blaming = spam complaints | 1321 |
| D32-I03 | Comparison Wound → Comparison = unsubscribe + spam report | 1322 |
| D32-I04 | Pediatrician Frustration → Medical criticism = abuse reports | 1323 |

### Group J — Sunset Protocol — lines 1325–1334

| ID | Demand | Lines |
|----|--------|-------|
| D32-J01 | Trigger: 0 opens in 120 days AND 0 clicks in 120 days AND 0 orders in 120 days AND received email at least 20 times | 1326 |
| D32-J02 | Step 1: Re-engagement email | 1329 |
| D32-J03 | Step 2: 4-7 day delay | 1330 |
| D32-J04 | Step 3: Tag `unengaged = True` | 1331 |
| D32-J05 | Step 4: Add to Master Suppression List | 1332 |
| D32-J06 | Master Suppression List applied to ALL campaign "Don't send to" filters and ALL flow audience filters | 1333 |

---

## 2. Verification Table: Demands vs Actual Klaviyo Docs

Legend: ✅ = Fully covered in actual doc text, ⚠️ = Partially covered (some aspects present, some missing), ❌ = Not covered, N/A = Out of scope for existing docs

### 2.1 Doc 01 — Template Variables (`01-template-variables.md`)

| Demand ID | Demand | Coverage | Evidence / Notes |
|-----------|--------|----------|------------------|
| D32-E01 | Transactional must be predominantly transactional | ❌ | Section 12 distinguishes transactional vs marketing templates but does not state the "predominantly transactional" rule per Google 2024 |
| D32-E02 | NO promotional content in transactional | ❌ | Section 12 covers template differences but does not state CAN-SPAM prohibition on promotional content |
| D32-E04 | Table-based layout, inline CSS, 600px max width | ❌ | Not covered in template variables doc (belongs in template design, not variables) |
| D32-E05 | Shopify disable default transactional emails | ❌ | Not covered in this doc. Shopify integration instructions are missing entirely |
| All other | Remaining Section 32 demands | N/A | Doc 01 is a template variable reference — Section 32 delivery rules are out of scope |

### 2.2 Doc 03 — Segment Configuration (`03-segment-configuration.md`)

| Demand ID | Demand | Coverage | Evidence / Notes |
|-----------|--------|----------|------------------|
| D32-B01 | NEVER send to "All Subscribers" or unengaged | ⚠️ | Section 7.4 (List Health Suppression) defines suppression for unengaged but doesn't state the "never send to All Subscribers" prohibition explicitly. Section 10 Implementation Checklist has `unengaged` segment but no explicit blocking rule |
| D32-C01 | Known Fake Domains blocklist | ❌ | Section 7.4 mentions "Bot/role accounts — On detection — Role domain blocklist — Manual static segment" but provides NO list of 20+ disposable domains, NO specific segment definition for bot detection |
| D32-C02 | Non-Engaged Sleepers (10+ received, 0 opened, 0 clicked) | ❌ | Not defined as a segment anywhere in this doc. The `unengaged` segment (120d no engagement) is different from the Non-Engaged Sleepers definition |
| D32-C03 | Tag `is_bot = True` via flows | ❌ | No `is_bot` tag or property referenced in the segment config |
| D32-C04 | Exclude via `is_bot is not set` | ❌ | Not mentioned in any flow filter or suppression rule |
| D32-G01 | Review bounce rate target <0.5% | ❌ | Not in this doc (belongs in monitoring doc) |
| D32-G03 | Verify Sunset Flow is live | ⚠️ | Section 9.2 (Post-Purchase Engagement Cascade) references "Sunset Flow (Flow 23, 2 emails)" and Section 9.1 has `inactive_120_days` tag. But the exact trigger definition (D32-J01 — 4 conditions) and the re-engagement email + delay process (D32-J02, D32-J03) are not stated |
| D32-G04 | Review 120-Day Unengaged segment size | ⚠️ | Section 10 lists `unengaged` segment in Implementation Checklist but doesn't define the precise trigger conditions |
| D32-G05 | Export Ghost Profiles for manual suppression | ❌ | Not mentioned in this doc |
| D32-J01 | Sunset trigger: 0 opens + 0 clicks + 0 orders + 20+ emails received | ⚠️ | Section 9.1 has `inactive_120_days` tag but the 4-condition trigger (opens=0, clicks=0, orders=0 AND 20+ emails received) is NOT explicitly stated. The segment definitions lack the "received at least 20 emails" condition |
| D32-J02 | Re-engagement email (Step 1 of Sunset) | ❌ | Not defined in this doc. Segment 9.2 references "Sunset Flow (Flow 23, 2 emails)" but the first email as re-engagement is not labeled |
| D32-J03 | 4-7 day delay (Step 2) | ❌ | Not defined. The timing between re-engagement email and `unengaged = True` tag is missing |
| D32-J04 | Tag `unengaged = True` (Step 3) | ⚠️ | Section 9.2 has "Suppressed = true → Master Suppression" but uses `Suppressed` not `unengaged`. The demands say `unengaged = True`. Mismatch |
| D32-J05 | Add to Master Suppression List (Step 4) | ⚠️ | Section 10 Implementation Checklist has Master Suppression segment. But the integration with Sunset flow completion is not procedurally documented |
| D32-J06 | Master Suppression List on ALL campaign filters + flow audience filters | ⚠️ | Section 10: "Apply Master Suppression as exclusion filter on every campaign" and "Apply Master Suppression as flow-level suppression on every flow" — this is stated as checklist items but not as a permanent operational rule |

### 2.3 Doc 04 — Flow Triggers (`04-flow-triggers.md`)

| Demand ID | Demand | Coverage | Evidence / Notes |
|-----------|--------|----------|------------------|
| D32-E01 | Transactional must be predominantly transactional | ❌ | Not mentioned. Section 5 (From Address Differentiation) assigns transactional from addresses but does not state the content limitations |
| D32-E02 | NO promotional content in transactional | ❌ | Not mentioned. Flow trigger definitions for transactional flows (Order Confirmation, Shipping, etc.) don't specify content restrictions |
| D32-F01 | Welcome E1: Transactional Cloak YES, Conversational YES | ❌ | Cloak matrix not mentioned anywhere in this doc. Welcome Flow trigger config (Section 6.1) defines audience, timing, exit conditions but NO cloak rules |
| D32-F02 | Welcome E2-8: YES/NO | ❌ | Same as above |
| D32-F03 | Abandoned Checkout E1: YES/YES | ❌ | Not covered |
| D32-F04 | Abandoned Cart E1: YES/YES | ❌ | Not covered |
| D32-F05 | Browse Abandonment E1: YES/YES | ❌ | Not covered |
| D32-F06 | All Campaigns: YES/NO | ❌ | Not covered |
| D32-F07 | Customer Winback (all): YES/YES | ❌ | Not covered (Winback flows not in this Part 1 doc) |
| D32-F08 | Post-Purchase (all): YES/NO | ❌ | Not covered (PP flows not in this Part 1 doc) |

### 2.4 Doc 05 — DNS & Domain Authentication (`05-dns-authentication.md`)

| Demand ID | Demand | Coverage | Evidence / Notes |
|-----------|--------|----------|------------------|
| D32-A01 | FORBIDDEN during warming: discount codes | ⚠️ | Section 4 (Sending Rules table) says "DO NOT USE — splits reputation" for hello@ during warming but does NOT enumerate the warming forbidden/required content rules. Content rules are only in the header paragraph line 189 which references Demands §32 |
| D32-A06 | REQUIRED: educational content during warming | ⚠️ | Section 4 references Demands §32 line 1267 as "Critical rule" for from-addresses but does not expand the full content rules |
| D32-A09 | Minimum 60:40 text-to-image ratio | ❌ | Not mentioned anywhere in this doc |
| D32-A10 | Lena's peer-to-peer voice required during warming | ❌ | Not mentioned in warming context |
| D32-B04 | Monitor GPT reputation daily | ✅ | Section 7 (Google Postmaster Tools Setup) — "Daily" listed in Ongoing Monitoring table (line 322) |
| D32-B07 | Phase 1: Only "Lena from BrightKidCo" <support@send.brightkidco.com> | ✅ | Section 4 (Sending Rules table, line 183-188): "During Domain Warming (Weeks 1-2): ALL emails use this address". This is explicitly stated |
| D32-B08 | Adding new from-addresses splits reputation | ⚠️ | Line 189: "Adding new from-addresses during warming splits reputation signals" — stated as one sentence but not elaborated as a prohibition with consequences |
| D32-B09 | Introduce info@ and help@ after Week 6 | ❌ | Post-Warming column in Section 4 says "Marketing sends only" for hello@ but does not mention info@ or help@ personas. These are not defined in the from-address table |
| D32-C01 | Known Fake Domains blocklist | ❌ | Not in this doc (belongs in 06-Warming) |
| D32-C02 | Non-Engaged Sleepers segment | ❌ | Not in this doc |
| D32-D01 | Code Red: Double Opt-In | ❌ | Section 7's Reputation Response Protocol (line 370-374) says "Activate Code Red Protocol" for Bad reputation but does NOT contain the actual 5-step Code Red Protocol steps. It only references Demands §32 |
| D32-D02 | Code Red: Modified Two-Step Welcome | ❌ | Same — not spelled out, only referenced |
| D32-D03 | Code Red: "Check your spam folder" messaging | ❌ | Same |
| D32-D04 | Code Red: Send ONLY to VIP Clickers | ❌ | Same |
| D32-D05 | Code Red: 48-72 hour sending pause | ❌ | Same |
| D32-E01 | Transactional must be predominantly transactional | ❌ | Not mentioned in this doc |
| D32-E03 | Hidden plain-text fallback div mandatory | ❌ | Not mentioned |
| D32-E05 | Shopify disable default transactional emails | ❌ | Not mentioned |
| D32-G01 | Review bounce rate <0.5% | ✅ | Section 8 — Monthly Hygiene Checklist line 391: explicitly listed |
| D32-G02 | Review spam complaint rate <0.03% | ✅ | Line 392: explicitly listed |
| D32-G03 | Verify Sunset Flow is live | ✅ | Line 393: explicitly listed |
| D32-G04 | Review 120-Day Unengaged segment size | ✅ | Line 394: explicitly listed |
| D32-G05 | Export Ghost Profiles | ✅ | Line 395: explicitly listed |
| D32-H01 | Bounce Rate: Target <0.5%, Warning 0.5-1.0%, Critical >1.0% | ✅ | Section 8 (lines 399-402): Metrics Thresholds table has full bounce rate thresholds |
| D32-H02 | Spam Complaint: Target <0.01%, Warning 0.01-0.03%, Critical >0.03%, Emergency >0.05% | ⚠️ | Section 8 (lines 399-402) has the thresholds BUT **missing the "Emergency" tier (>0.05%)** — the table has only Target/Warning/Critical, not Emergency. The Demands §32 has 4 tiers, the doc has only 3 |
| D32-I01 | Self-Blame → Spam complaints | ❌ | Not mentioned in this doc |
| D32-I02 | Partner Conflict → Spam complaints | ❌ | Not mentioned |
| D32-I03 | Comparison Wound → Unsubscribe + spam report | ❌ | Not mentioned |
| D32-I04 | Pediatrician Frustration → Abuse reports | ❌ | Not mentioned |

---

## 3. Summary: Coverage by Demand Group

| Group | Demands Count | ✅ Full | ⚠️ Partial | ❌ None | Compliance % |
|-------|:------------:|:------:|:----------:|:------:|:------------:|
| A — Warming Content Rules | 10 | 0 | 2 | 8 | 10% |
| B — Warming Sending Patterns | 9 | 1 | 2 | 6 | 22% |
| C — Bot Detection & Suppression | 4 | 0 | 0 | 4 | 0% |
| D — Code Red Protocol | 5 | 0 | 0 | 5 | 0% |
| E — Transactional Email Rules | 5 | 0 | 0 | 5 | 0% |
| F — Cloak Deployment Matrix | 8 | 0 | 0 | 8 | 0% |
| G — Monthly Hygiene Checklist | 5 | 5 | 0 | 0 | 100% |
| H — Metrics Thresholds | 2 | 1 | 1 | 0 | 75% |
| I — Sensitive Content Impact | 4 | 0 | 0 | 4 | 0% |
| J — Sunset Protocol | 6 | 0 | 4 | 2 | 33% |
| **TOTAL** | **58** | **7** | **9** | **42** | **21%** |

**Overall: 7 of 58 demands fully covered (12%). 42 of 58 demands not covered at all (72%).**

### Coverage by Klaviyo Doc

| Doc | In-Scope Demands | ✅ Full | ⚠️ Partial | ❌ None |
|-----|:----------------:|:------:|:----------:|:------:|
| 01 — Template Variables | 2 | 0 | 0 | 2 |
| 03 — Segment Configuration | 15 | 0 | 8 | 7 |
| 04 — Flow Triggers | 10 | 0 | 0 | 10 |
| 05 — DNS Authentication | 30 | 7 | 4 | 19 |

---

## 4. Gap Analysis with Fix Instructions

### CRITICAL GAPS (require new Klaviyo docs)

#### Gap-1: No Warming Strategy Doc (06-Warming missing)
**Covers:** D32-A01–A10 (Warming Content Rules), D32-B01–B06 (Warming Sending Patterns)
**Severity:** CRITICAL — domain warming is a hard prerequisite for send reputation

**Fix:** Create `/root/projects/brightkido-email/docs/klaviyo/06-warming-schedule.md` containing:
1. **Weeks 1-2 Content Rules table**: FORBIDDEN list (discount codes, hard-sell, >1 CTA, countdown timers, affiliate links) and REQUIRED list (educational, plain-text preferred, reply prompts, 60:40 text-to-image, Lena's voice)
2. **Weeks 1-2 Sending Rules**: Never "All Subscribers" or unengaged; use 90-Day Engaged minimum; 3-4 campaigns/week max
3. **Volume ramp schedule**: Exact daily/weekly targets (from patched strategy §10.2)
4. **From-address rule**: Phase 1 = ONLY support@send.brightkidco.com (info@/help@ after Week 6)
5. **Open rate <45% pause rule**: Procedure for pausing and narrowing segment
6. **Reply prompt requirement**: In EVERY email as #1 deliverability signal
7. **L3 exclusion rule**: Level 3 excluded from weeks 1-2 warming
8. **Daily GPT monitoring**: Procedure for checking Google Postmaster Tools daily
9. **Scope of flows allowed during warming**: Welcome, Browse, Cart/Checkout, basic PP only

#### Gap-2: No Bot Detection Doc (part of missing 06-Warming or standalone)
**Covers:** D32-C01–C04 (Bot Detection & Suppression)
**Severity:** CRITICAL — without this, deliverability is at constant risk from fake signups

**Fix:** Add Bot Detection section to the 06-Warming doc (or create standalone doc) containing:
1. **Known Fake Domains list**: Minimum 20 disposable domains (mailinator.com, 10minutemail.com, guerrillamail.com, etc.) as a blocklist
2. **Segment definition for Known Fake Domains**: Exact Klaviyo segment filter syntax
3. **Segment definition for Non-Engaged Sleepers**: "Received >= 10 emails AND opened = 0 AND clicked = 0"
4. **Flow setup**: `is_bot = True` tag application flow with exact trigger conditions
5. **Exclusion filter**: `is_bot is not set` on ALL flow audience filters and campaign "Don't send to" filters
6. **Google reCAPTCHA v3** recommendation for signup forms

#### Gap-3: No Cloak Deployment Doc (07-Cloak missing)
**Covers:** D32-F01–F08 (Cloak Assignment Per Flow)
**Severity:** CRITICAL — transactional & conversational cloak required from Day 1 per Demands

**Fix:** Create `/root/projects/brightkido-email/docs/klaviyo/07-cloak-deployment.md` containing:
1. **Definition of Transactional Cloak**: What it is, how to configure in Klaviyo (hidden plain-text fallback div)
2. **Definition of Conversational Cloak**: What it is, when to use
3. **Deployment Matrix table** (exact copy from patched strategy §10.4.2):
   - Welcome E1: YES/YES
   - Welcome E2-8: YES/NO
   - Abandoned Checkout E1: YES/YES
   - Abandoned Cart E1: YES/YES
   - Browse Abandonment E1: YES/YES
   - All Campaigns: YES/NO
   - Customer Winback (all): YES/YES
   - Post-Purchase (all): YES/NO
4. **Klaviyo implementation**: Step-by-step instructions for adding transactional cloak to every template
5. **Cross-reference**: Update 04-flow-triggers.md to reference the cloak matrix per flow

#### Gap-4: No Monitoring & Procedures Doc (08-Monitoring missing)
**Covers:** D32-D01–D05 (Code Red Protocol), D32-I01–I04 (Sensitive Content Impact), parts of G and H
**Severity:** HIGH — Code Red has no Klaviyo implementation instructions

**Fix:** Create `/root/projects/brightkido-email/docs/klaviyo/08-deliverability-monitoring.md` containing:
1. **Code Red Protocol** — full 5-step procedure (double opt-in, two-step welcome, spam folder messaging, VIP-only sending, sending pause) with exact Klaviyo configuration steps for each
2. **Metrics Thresholds Dashboard**: Full 4-tier table including "Emergency" (>0.05% spam complaint)
3. **Monthly Hygiene Checklist** (already in 05-dns-authentication.md — cross-reference it)
4. **Sensitive Content → Deliverability Impact Mapping** (copy from Demands §32 lines 1317-1324)
5. **Daily / Weekly / Monthly monitoring cadence** table
6. **Rollback trigger procedures** with exact Segment narrowing instructions

### HIGH-SEVERITY FIXES (patch existing docs)

#### Fix-5: 05-dns-authentication.md — Add missing "Emergency" tier to Metrics Thresholds
**File:** `/root/projects/brightkido-email/docs/klaviyo/05-dns-authentication.md`
**Lines:** 397-403

**Current table (3 tiers):**
```
| Metric | Target | Warning | Critical |
|--------|--------|---------|----------|
| Bounce Rate | <0.5% | 0.5-1.0% | >1.0% |
| Spam Complaint Rate | <0.01% | 0.01-0.03% | >0.03% |
```

**Fix:** Add "Emergency" column — Spam Complaint Emergency >0.05%. Full table from Demands §32:
```
| Metric | Target | Warning | Critical | Emergency |
|--------|--------|---------|----------|-----------|
| Bounce Rate | <0.5% | 0.5-1.0% | >1.0% | — |
| Spam Complaint | <0.01% | 0.01-0.03% | >0.03% | >0.05% |
```

#### Fix-6: 05-dns-authentication.md — Add Code Red Protocol reference with steps
**File:** `/root/projects/brightkido-email/docs/klaviyo/05-dns-authentication.md`
**Section:** §7 (Google Postmaster Tools Setup)
**Lines around:** 370-374

**Current:** "Bad → Activate Code Red Protocol (see demands Section 32, line 1277-1283)" — reference-only, no instructions

**Fix:** Expand with a subsection containing the full 5-step Code Red Protocol (D32-D01 through D32-D05) so the doc is self-contained and actionable without referencing external docs.

#### Fix-7: 03-segment-configuration.md — Add precise Sunset Protocol
**File:** `/root/projects/brightkido-email/docs/klaviyo/03-segment-configuration.md`
**Sections affected:** §7 (Suppression Rules), §9 (Tag Lifecycle), §10 (Implementation Checklist)

**Fix:** Add explicit Sunset Protocol section:
1. Precise trigger definition: "Opened 0 times in 120 days AND Clicked 0 times in 120 days AND Placed Order 0 times in 120 days AND Received Email at least 20 times"
2. Flow steps: Re-engagement email → 4-7 day delay → Tag `unengaged = True` → Add to Master Suppression List
3. Use `unengaged` (not `Suppressed`) for consistency with demands
4. Add Master Suppression List enforcement rule: "Applied to ALL campaign 'Don't send to' filters AND ALL flow audience filters"

#### Fix-8: 03-segment-configuration.md — Add bot detection segments
**File:** `/root/projects/brightkido-email/docs/klaviyo/03-segment-configuration.md`
**Section:** Add new section after §8 or integrate into §7.4

**Fix:** Add two new segment definitions:
1. `Segment: "Bot — Known Fake Domains" — Condition: email domain is one of [20+ disposable domains list]`
2. `Segment: "Bot — Non-Engaged Sleepers" — Condition: received >=10 emails AND opened = 0 AND clicked = 0`
3. Add `is_bot` property to profile properties list
4. Add exclusion filter rule: `is_bot is not set` on all flow filters

#### Fix-9: 04-flow-triggers.md — Add cloak references per flow
**File:** `/root/projects/brightkido-email/docs/klaviyo/04-flow-triggers.md`
**Sections affected:** Each flow definition (§6.1–7.4)

**Fix:** For each flow definition, add a "Cloak Configuration" row referencing the cloak deployment matrix:
- Welcome E1: "Cloak: Transactional YES + Conversational YES (see 07-cloak-deployment.md)"
- Welcome E2-8: "Cloak: Transactional YES, Conversational NO"
- Etc.

#### Fix-10: 04-flow-triggers.md — Add transactional content restrictions
**File:** `/root/projects/brightkido-email/docs/klaviyo/04-flow-triggers.md`
**Section:** §7 (Transactional Flows)

**Fix:** Add a header note to Section 7 stating: "All transactional emails must be predominantly transactional per Google 2024 guidelines. NO promotional content (cross-sells, upsells, marketing banners). Hidden plain-text fallback div required. See 07-cloak-deployment.md and demands Section 32 lines 1285-1290."

#### Fix-11: 01-template-variables.md — Add transactional template rules
**File:** `/root/projects/brightkido-email/docs/klaviyo/01-template-variables.md`
**Section:** §12 (Transactional vs Marketing Variable Differences)

**Fix:** Add deliverability compliance notes to the transactional template section: CAN-SPAM transactional exemption rules, hidden plain-text fallback requirement, no promotional content rule.

### MEDIUM-SEVERITY GAPS

#### Fix-12: Sensitive Content → Deliverability Impact not documented
**Covers:** D32-I01–I04
**Location:** Should be in guardrails/06-pre-mail-checklist.md OR new 08-monitoring doc

The mapping is currently only in patched strategy §10.4.4. It needs to be embedded in the pre-mail checklist so every email writer is aware that specific sensitive content areas directly cause spam complaints.

#### Fix-13: 05-dns-authentication.md — Add info@ and help@ persona rollout
**File:** `/root/projects/brightkido-email/docs/klaviyo/05-dns-authentication.md`
**Section:** §4 (From Addresses & Sending Purposes)

Currently names 3 from addresses (support@, orders@, hello@). The demands say info@ and help@ should be introduced post-Week 6. These are missing from the from-address table.

#### Fix-14: No Google reCAPTCHA integration documented
**Severity:** MEDIUM — reCAPTCHA v3 on all signup forms is referenced in patched strategy but no Klaviyo-specific setup guide exists. Add to 06-warming doc or account setup doc.

---

## 5. Priority Action Plan

| Priority | Action | Depends On | Effort |
|----------|--------|------------|--------|
| 🔴 P0 | Create `06-warming-bot-detection.md` — warming content rules, sending patterns, bot detection segments | None | 3-4h |
| 🔴 P0 | Create `07-cloak-deployment.md` — cloak matrix + transactional email rules | None | 2-3h |
| 🔴 P0 | Create `08-deliverability-monitoring.md` — Code Red, metrics thresholds, hygiene, sensitive content impact | 07-cloak (cross-ref) | 3-4h |
| 🟡 P1 | Patch `05-dns-authentication.md` — add Emergency tier, Code Red steps, info@/help@ personas | 08-monitoring (Code Red text) | 1h |
| 🟡 P1 | Patch `03-segment-configuration.md` — add bot detection segments, precise Sunset Protocol | 06-warming (bot seg defs) | 2h |
| 🟡 P1 | Patch `04-flow-triggers.md` — add cloak references per flow, transactional restrictions | 07-cloak | 1-2h |
| 🟢 P2 | Patch `01-template-variables.md` — add transactional template deliverability notes | 07-cloak | 0.5h |
| 🟢 P2 | Patch `06-pre-mail-checklist.md` — add sensitive content → deliverability impact mapping | 08-monitoring | 0.5h |

---

## 6. Key Findings Summary

1. **Only 12% demand coverage (7/58 demands).** The Klaviyo docs that exist (01, 03, 04, 05) were not written against Section 32 — they cover template variables, segmentation, flow triggers, and DNS setup respectively. The delivery rules require 3 additional dedicated docs.

2. **Existing patched strategy fills the gap.** The patched `1-full-email-strategy.md` §10 (Deliverability & Warming Protocol Integration) covers the vast majority of Section 32 demands comprehensively. The gap is that this content has NOT been translated into Klaviyo-specific implementation docs.

3. **Three critical new docs needed**: Warming + Bot Detection (06), Cloak Deployment (07), and Monitoring/Code Red (08). These are the named docs in the task brief that don't exist yet.

4. **05-dns-authentication.md is the strongest existing doc** but has 4 gaps: missing Emergency threshold tier, Code Red steps referenced instead of spelled out, info@/help@ personas missing, and `from-address` warning rules not elaborated.

5. **03-segment-configuration.md needs patching** for precise Sunset Protocol (4-condition trigger definition, re-engagement email, 4-7 day delay), bot detection segment definitions, and `is_bot` suppression rules.

6. **The sensitive content → deliverability impact** (D32-I01–I04) is entirely undocumented in the guardrails/Klaviyo docs. This should be built into the pre-mail checklist as a deliverability-aware guardrail.
