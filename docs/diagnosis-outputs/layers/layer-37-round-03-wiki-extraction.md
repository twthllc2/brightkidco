# Layer 37 Round 3: Klaviyo Technical Setup — Wiki Extraction

**Date:** 2026-05-25
**Source:** /root/wiki/ (11 wiki notes across 4 areas)
**Purpose:** Extract all Klaviyo/email automation/technical setup notes from the wiki

---

## Summary

The wiki contains substantial Klaviyo technical setup knowledge across deliverability SOPs, email flow architecture, authentication protocols, and domain warming procedures. While most wiki content is generic agency SOPs (not BrightKidCo-specific), several notes contain directly applicable technical patterns. The wiki also stores the BrightKidCo project overview with Klaviyo credentials and infrastructure details.

**Key finding:** The wiki has 4 complete deliverability SOPs (authentication setup, domain warming, audit monitoring, SPF troubleshooting) that supplement the client files with implementation-grade technical detail. These SOPs are Tenza agency standards that apply to any Klaviyo client, including BrightKidCo.

---

## Source 1: BrightKidCo Project Overview

**File:** `/root/wiki/about-me/brightkidco-project-overview.md`
**Size:** 50 lines, 1,438 bytes
**Relevance:** HIGH — contains project-specific Klaviyo credentials and infrastructure

### Extracted Technical Details

- **Sending subdomain:** send.brightkidco.com
- **Klaviyo login:** support@brightkidco.com / Gbl28.08.00*
- **Email platform:** Klaviyo email marketing
- **Client:** Giuliano — German, based in Bangkok
- **Brand:** BrightKidCo — training underwear for autistic children (Body-Signal Learning Layer™)
- **Infrastructure:** 145 source files, 46 text extractions (5.6MB) in docs/extracted/
- **Agent profiles:** ops (8645) and researcher (8650)

### Cross-Reference with Client Files

The client files (DOC6-USAGE-GUIDE, Claude-Project-Instructions) confirm Klaviyo as the email platform. The wiki stores the credentials and subdomain that the client files reference. No conflict found — wiki matches client file specifications.

---

## Source 2: Deliverability Authentication Setup SOP

**File:** `/root/wiki/tenza-marketing/_hub-email-marketing/__enqueued__/SOP-deliverability-authentication-setup.md`
**Size:** 371 lines, 22,648 bytes
**Relevance:** HIGH — complete 18-step authentication procedure

### Extracted Technical Details

#### DNS Authentication Requirements

| Record | Type | Value | Purpose |
|--------|------|-------|---------|
| SPF TXT | TXT | `v=spf1 include:spf.klaviyo.com ~all` | Authorize Klaviyo to send |
| DKIM CNAME 1 | CNAME | `klaviyo1._domainkey.subdomain` → Klaviyo target | Email signing key 1 |
| DKIM CNAME 2 | CNAME | `klaviyo2._domainkey.subdomain` → Klaviyo target | Email signing key 2 |
| DMARC TXT | TXT | `v=DMARC1; p=none; rua=mailto:...; ruf=mailto:...; fo=1; pct=100` | Policy + reporting |

#### DMARC Phased Rollout (3 phases)

1. **Phase 1 (Day 1):** `p=none` — monitoring mode, collect data
2. **Phase 2 (Day 7-14):** Audit all sending sources, remediate failures
3. **Phase 3 (30+ days):** Upgrade to `p=quarantine` after 7 consecutive clean days
4. **Phase 4 (60+ days):** Consider `p=reject` after 30+ days at quarantine

#### Sender Persona Configuration

The SOP defines two sender personas:
- **Brand Announcer:** `info@subdomain` — welcome series, newsletters, campaigns
- **Helpful Agent:** `help@subdomain` — abandonment flows, post-purchase flows

**BrightKidCo relevance:** The consolidated L37 spec uses `hello@send.brightkidco.com` for marketing and `orders@send.brightkidco.com` for transactional. The wiki SOP suggests a more granular split (info vs help) that could improve abandonment flow deliverability.

#### Additional Infrastructure Steps

- **rDNS/PTR record:** Required for dedicated IPs — `dig -x <IP>` should return sending subdomain
- **MX record:** Sending subdomain needs MX to receive replies
- **Google Postmaster Tools:** TXT verification required for reputation monitoring
- **BIMI:** Optional — requires DMARC at enforcement level + VMC certificate

#### SPF 10-Lookup Limit

Critical rule: SPF records are limited to 10 DNS lookups. Every `include:` counts as one. If approaching limit, use SPF flattening (convert includes to explicit IP ranges).

#### Error Recovery Table

| Error | Root Cause | Fix |
|-------|-----------|-----|
| SPF PermError | >10 DNS lookups | Consolidate includes, use SPF flattening |
| Multiple SPF Records | >1 TXT record starting with `v=spf1` | Delete all except one, consolidate |
| DKIM Fails After Migration | Old ESP's DKIM still in DNS | Remove old CNAME, verify only Klaviyo's exist |
| DMARC Reports Empty | `rua` address not receiving | Verify DMARC syntax with MXToolbox |

### Cross-Reference with Client Files

Client files confirm `send.brightkidco.com` as the sending subdomain and specify SPF/DKIM/DMARC as "configured" in L37's consolidated spec. The wiki SOP provides the exact implementation steps that the client files lack — this is the operational detail needed for execution.

---

## Source 3: Domain & IP Warming SOP

**File:** `/root/wiki/tenza-marketing/_hub-email-marketing/__enqueued__/SOP-deliverability-domain-warming.md`
**Size:** 394 lines, 22,643 bytes
**Relevance:** HIGH — 6-week warming protocol directly impacts L37 flow activation

### Extracted Technical Details

#### Account Tier Classification

| Tier | Definition | Starting Segment |
|------|-----------|-----------------|
| Tier 1: Healthy | GPT "High" reputation, open rates >40% | Engaged 90 Days |
| Tier 2: New/Rewarming | New domain or 30+ days inactive | Tier 2 — Initial Warm-Up |
| Tier 3: Active Recovery | GPT "Low"/"Bad" reputation or opens <30% | Tier 3 — Intensive Care |

**BrightKidCo relevance:** send.brightkidco.com is a NEW sending domain → Tier 2. Must follow Tier 2 warming protocol.

#### Foundational Segments (Must Build in Klaviyo)

| Segment | Definition |
|---------|-----------|
| `[WARMING] 14-Day Engaged — Vanguard` | Opened OR Clicked email in last 14 days |
| `[WARMING] 30-Day Engaged` | Opened OR Clicked email in last 30 days |
| `[WARMING] 60-Day Engaged` | Opened OR Clicked email in last 60 days |
| `[WARMING] 90-Day Engaged` | Opened OR Clicked email in last 90 days |
| `[WARMING] Tier 2 — Initial Warm-Up` | Clicked in 30 days OR added in last 15 days |
| `[ADVANCED] VIP Clickers (90 Day)` | Clicked email in last 90 days |
| `[ADVANCED] At-Risk Engagers (90 Day)` | Opened but 0 clicks in 90 days |
| `[ADVANCED] Ghost Profiles` | Apple MPP opens only, 0 clicks/orders in 120 days |

#### 6-Week Warming Schedule

| Week | Segment | Volume | Content Rules |
|------|---------|--------|---------------|
| 1-2 | Vanguard/Tier 2 (50-100/day) | 3 campaigns/week | NO aggressive sales, educational/value only |
| 3-4 | 30-Day Engaged | 3 campaigns/week | 60%+ value content, mild promo OK |
| 5-6 | 60-Day → 90-Day Engaged | 3 campaigns/week | Gradual expansion, full content OK |

#### Daily Monitoring Metrics

| Metric | Healthy | Red Flag |
|--------|---------|----------|
| Open Rate | >50% | <45% |
| Bounce Rate | <0.5% | >1% |
| Spam Complaint Rate | <0.03% | >0.05% |
| GPT Reputation | Medium to High | Low or Bad |

#### Sunset Protocol (Post-Warmup)

Trigger segment: 120 days no opens/clicks/orders, received 20+ emails. Flow sends re-engagement email, waits 4-7 days, then tags for suppression.

### Cross-Reference with Client Files

The consolidated L37 spec references L36 warming constraints but does not detail the segment definitions or monitoring thresholds. This wiki SOP provides the implementation-level detail: exact segment names, daily volume limits, content rules per phase. The warming phases map directly to L37's Phase 1 flow activation schedule (Section 6.1 of consolidated spec).

---

## Source 4: SPF Record Setup & Troubleshooting

**File:** `/root/wiki/tenza-marketing/_hub-email-marketing/__enqueued__/spf-record.md`
**Size:** 107 lines, 4,778 bytes
**Relevance:** MEDIUM — SPF troubleshooting patterns

### Extracted Technical Details

#### SPF DMARC Alignment Issue

When using Klaviyo's default sending domain, SPF passes for the envelope domain (bounce.klaviyomail.com) but FAILS for the from-domain (brand.com). DMARC requires alignment — the envelope-from must match the from-domain.

**Fix:** Set up a dedicated sending domain/subdomain (e.g., send.brand.com). When envelope-from and from-domain share the root domain, DMARC relaxed alignment considers it a match.

**BrightKidCo relevance:** send.brightkidco.com is already specified as the dedicated sending subdomain. This means SPF alignment should work correctly — the envelope-from will use send.brightkidco.com, and the from-domain (hello@send.brightkidco.com) shares the root.

#### Common SPF Failures

1. `-all` (hard fail) policy without all legitimate services included
2. Third-party tools (Gorgias, Recharge, Yotpo) sending without being in SPF
3. 10-lookup limit exceeded — later includes silently ignored
4. Multiple SPF records found — DNS returns both, causing failure

---

## Source 5: Deliverability Audit & Monitoring SOP

**File:** `/root/wiki/tenza-marketing/_hub-email-marketing/__enqueued__/SOP-deliverability-audit-monitoring.md`
**Size:** 367 lines, 24,030 bytes
**Relevance:** MEDIUM — ongoing monitoring framework

### Extracted Technical Details

#### 5-Phase Audit Process (45-60 minutes)

1. **Phase 1 — Preliminary Health Check** (5 min): Blacklist scan (MXToolbox) + authentication record review (SPF/DKIM/DMARC)
2. **Phase 2 — Google Postmaster Tools Review**: IP/domain reputation, spam rate, authentication pass rate, delivery errors
3. **Phase 3 — Klaviyo Health Check**: Campaign trends, list health, deliverability-by-domain visual audit, Klaviyo Deliverability Score
4. **Phase 4 — GlockApps Inbox Placement Test**: Seed-based placement rate, Primary vs Promotions breakdown
5. **Phase 5 — Decision & Escalation**: Score-based routing (Pass/Watch/Escalate)

#### Key Benchmarks

| Metric | Benchmark | Critical Threshold |
|--------|-----------|-------------------|
| Open Rate | >45% | <35% = problem |
| Click Rate | >1% | — |
| Bounce Rate | <1% | >1% = halt sending |
| Spam Complaint Rate | <0.01% | >0.03% = major red flag |
| Unsubscribe Rate | <0.5% | — |
| Klaviyo Deliverability Score | 70+ Excellent | <65 = 6-Week Recovery |
| Inbox Placement Rate | 90%+ | <80% = escalate |

#### Decision Routing

| Trigger | Outcome |
|---------|---------|
| Any blacklist listing | Escalate → 6-Week Recovery Protocol |
| GPT Low/Bad reputation | Escalate → Stop sending to unengaged |
| Klaviyo Score <65 | Escalate → Full Recovery Protocol |
| All green, score ≥70, placement ≥90% | Pass → Schedule next monthly audit |

### Cross-Reference with Client Files

The client files do not specify a monitoring cadence. This wiki SOP establishes the standard: first Monday of every month, 45-60 minute block. Should be added to the BrightKidCo implementation checklist.

---

## Source 6: Email Agency Mastery Plan

**File:** `/root/wiki/about-me/goals/__enqueued__/__enqueued__/email_agency_mastery_plan.md`
**Size:** 376 lines, 36,533 bytes
**Relevance:** MEDIUM — Klaviyo module structure and flow stack reference

### Extracted Technical Details

#### Complete Flow Stack (Standard for All Clients)

1. Welcome Series (non-buyers) — highest revenue-generating flow
2. Site Abandonment → Browse Abandonment → Cart Abandonment → Checkout Abandonment (4-flow sequence)
3. Post-Purchase (standard + review request) — LTV multiplier
4. Cross-sell / Upsell — critical for repeat purchase
5. Replenishment Reminder — gold for consumable products
6. Customer Winback — re-engagement weapon
7. Sunset / Unengaged — protects deliverability, keeps list clean

#### Key Deliverability Metrics to Track

- Email-attributed revenue % of total store revenue
- Flow revenue vs. campaign revenue split
- Welcome series conversion rate (subscriber to first purchase)
- Abandoned checkout recovery rate
- List growth rate (subscribers added per month)
- Deliverability: inbox rate, open rate, spam rate, bounce rate
- Revenue per recipient (RPR) — premium metric

#### Deliverability Recovery Protocol Reference

The wiki references a "6-Week Deliverability Recovery Protocol" as a formal course module (Module 2). This protocol is the same one referenced in the domain warming SOP but originates from the Klaviyo certification course.

---

## Source 7: Abandoned Cart Flow Rebuild Plans (NatureSecrets)

**File:** `/root/wiki/skills-tools/ai-tools/__enqueued__/clients-rebuild-flows-client-Abandon-cart-rebuild-plan-md-rebuild flows-client-Abandon cart rebuild plan.md`
**Size:** 500 lines, 27,028 bytes
**Relevance:** MEDIUM — flow architecture patterns for BrightKidCo adaptation

### Extracted Patterns

#### 3-Email Abandoned Cart Structure

| Email | Timing | Strategy | Angle |
|-------|--------|----------|-------|
| Cart #1 | 1-2h after abandon | "Simple Question" / "Saved for You" | Low pressure, helpful |
| Cart #2 | 24h | "Community Welcome" / Social Proof | Trust building |
| Cart #3 | 48-72h | "Welcome Gift" (10% discount) | Incentive to convert |

#### Key Technical Patterns

- **Button link format:** `{{ organization.url }}cart` (for cart recovery)
- **Primary Tab strategy:** 80% text-based to maintain "transactional" Gmail classification
- **Senior-friendly UI:** Dashed boxes around product recaps, large fonts, secondary CTAs
- **Exit condition:** Made a purchase → exit flow immediately

#### Discount Sequencing

- Cart Email 1: NO discount (pure reminder)
- Cart Email 2: NO discount (social proof only)
- Cart Email 3: 10% discount code as "welcome gift"

**BrightKidCo relevance:** The same 3-email cart structure applies. The discount sequencing (save discount for last email) is a best practice. BrightKidCo's WELCOME10 code should follow this pattern.

---

## Source 8: Abandoned Checkout Flow Rebuild Plans (NatureSecrets)

**File:** `/root/wiki/skills-tools/ai-tools/__enqueued__/clients-rebuild-flows-client-abandon-checkout-rebuild-plan-m-rebuild flows-client-abandon checkout rebuild plan.md`
**Size:** 615 lines, 34,728 bytes
**Relevance:** MEDIUM — checkout-specific flow patterns

### Extracted Patterns

#### 4-Email Abandoned Checkout Structure

| Email | Timing | Strategy | Angle |
|-------|--------|----------|-------|
| Checkout #1 | 30min-1h | "Technical Check-in" / Service recovery | Supportive, not sales |
| Checkout #2 | 24h | "Second Opinion" / Founder check-in | Relationship building |
| Checkout #3 | 48h | "Discount Expiration" (10% off) | Urgency + incentive |
| Checkout #4 | 72h-6d | "Door Knob" / Final personal check-in | Low pressure exit |

#### Key Technical Patterns

- **Button link format:** `{{ event.extra.checkout_url }}` (direct checkout resume)
- **Anti-tracking language:** Never say "I saw you got distracted" — use "I noticed your order wasn't completed"
- **Discount auto-apply URL:** `https://brand.com/checkout?cart_token={{cart_token}}&discount=CODE`
- **90-Day Guarantee:** Primary trust element for hesitant buyers
- **Color psychology:** Forest Green (#1B4332) for buttons — health/safety/Go signals for older demographics

#### Technical Data for Klaviyo

| Field | Value |
|-------|-------|
| Subject Line (Checkout #1) | "Regarding your NatureSecrets order..." |
| Button Link | `{{ event.extra.checkout_url }}` |
| Reply prompt | "Reply directly to this email" — justifies Primary Tab |

**BrightKidCo relevance:** The checkout flow structure (4 emails, service-recovery angle first) applies directly. The `{{ event.extra.checkout_url }}` variable is standard Klaviyo for checkout abandonment.

---

## Source 9: Diagnosis — Emergency $500/$2,000 (Cold Email Infrastructure)

**File:** `/root/wiki/about-me/goals/__enqueued__/__enqueued__/diagnosis-emergency-500-2000.md`
**Size:** 235 lines, 12,086 bytes
**Relevance:** LOW — cold email infrastructure, not DTC Klaviyo setup

### Extracted Details (Reference Only)

The wiki stores cold email infrastructure details that are NOT directly relevant to BrightKidCo's Klaviyo setup:
- 5 cold email domains (hqtenzamarketing.xyz, etc.) with 15 inboxes
- docker-mailserver on 62.84.186.120
- All domains have SPF, DKIM, DMARC configured
- 3 months warmup history on ManyReach
- 4,000 Apollo leads (Shopify brands)

**Note:** This is TENZA agency infrastructure for client acquisition, NOT BrightKidCo infrastructure. Included only for completeness — excluded from cross-reference.

---

## Source 10: Master Extraction Plan

**File:** `/root/wiki/about-me/goals/__enqueued__/__enqueued__/master-extraction-plan.md`
**Size:** 226 lines, 8,264 bytes
**Relevance:** LOW — strategic planning reference

### Extracted Context

The master extraction plan identifies "Email Marketing Strategy & Technical" as Wave 4J (17 files, 40-50 notes, MEDIUM priority). It also notes that Klaviyo flow builder SOP should become a Hermes skill post-extraction. This confirms the wiki is a source of Klaviyo implementation knowledge that has not yet been fully extracted into notes.

---

## Source 11: BrightKidCo Memory Drops

**File:** `/root/wiki/skills-tools/memory-drops/brightkidco-project-rootprojectsbrightkidco-email-mar--20260523-112608.md`
**Size:** 15 lines, 696 bytes
**Relevance:** LOW — project metadata

### Extracted Details

- BrightKidCo project: /root/projects/brightkidco/
- Email marketing system for Giuliano's brand
- 3,460-line execution plan at overnight-plan.md
- Orchestrator script at /root/projects/brightkidco/orchestrator.py

**File:** `/root/wiki/skills-tools/memory-drops/brightkidco-is-a-dtc-ecommerce-brand-for-wiki-ingestion-ex--20260523-173000.md`
**Size:** 15 lines, 505 bytes

### Ingestion Rule

For BrightKidCo wiki ingestion, EXCLUDE: cold email, client acquisition, sales, operations. These are not relevant for DTC ecommerce email marketing.

---

## Wiki vs Client Files Comparison

| Topic | Wiki Coverage | Client File Coverage | Gap? |
|-------|--------------|---------------------|------|
| Klaviyo credentials | Project overview (login, subdomain) | DOC6, Claude-Project-Instructions | No — consistent |
| SPF/DKIM/DMARC setup | Full 18-step SOP | L37 spec says "configured" | SOP provides implementation detail |
| Domain warming | Full 6-week protocol with segments | L36 reference in L37 spec | Wiki has exact segment definitions |
| Authentication monitoring | 5-phase audit SOP (monthly) | Not specified | Wiki adds monitoring cadence |
| Flow architecture | NatureSecrets rebuild patterns | DOC6 segmentation + flow rules | Wiki provides email-level patterns |
| Sender persona config | Brand Announcer + Helpful Agent split | hello@ / orders@ split | Slight difference — wiki suggests info@/help@ |
| BIMI implementation | Full procedure | Not mentioned | Wiki adds optional enhancement |
| GlockApps testing | Full procedure | Not mentioned | Wiki adds seed-list placement testing |
| Google Postmaster Tools | Full setup + monitoring | Not mentioned | Wiki adds GPT as standard requirement |
| Sunset/Suppression | 120-day threshold, auto-tagging | L8 behavioral tags (inactive_120_days) | Consistent — wiki adds flow steps |
| Discount sequencing | Cart: no discount → no discount → 10% off | WELCOME10 across all | Wiki pattern is more sophisticated |

---

## Key Wiki Findings for BrightKidCo Implementation

1. **Authentication SOP is implementation-ready** — 18 steps cover SPF, DKIM, DMARC, BIMI, rDNS, MX, Google Postmaster Tools. The consolidated L37 spec says "configured" but the wiki SOP provides the exact how-to.

2. **Domain warming is Tier 2 (New Domain)** — BrightKidCo's send.brightkidco.com is new. Must follow the 6-week warming protocol starting with 50-100 sends/day to 14-Day Engaged segment.

3. **7 warming segments must be built** in Klaviyo before any campaigns send. These are not in the L37 spec — they come from the wiki warming SOP.

4. **Monthly audit cadence** — The wiki establishes a 45-60 minute deliverability audit on the first Monday of every month using MXToolbox + GPT + Klaviyo + GlockApps. Not in client files.

5. **Sender persona split** — Wiki suggests Brand Announcer (info@) + Helpful Agent (help@). Client files use hello@ (marketing) + orders@ (transactional). Minor difference — wiki's split is more granular for deliverability isolation.

6. **Cart/Checkout email patterns** — NatureSecrets rebuild plans provide battle-tested email structures: 3-email cart sequence, 4-email checkout sequence, with specific Klaviyo variables (`{{ organization.url }}cart`, `{{ event.extra.checkout_url }}`).

7. **Discount discipline** — Wiki pattern: no discount in early abandonment emails, reserve 10% code for final email only. Client files use WELCOME10 across all flows. Wiki pattern is more strategic.

8. **BIMI is optional** — Wiki notes BIMI requires DMARC at enforcement level + VMC certificate (trademark required). Not critical for launch but worth noting for Phase 2+.

---

*Extraction complete: 11 wiki notes read, 4 areas covered (project overview, deliverability SOPs, flow architecture, agency plans)*
*Notes with direct technical content: 6 (SOPs × 3, flow rebuilds × 2, project overview × 1)*
*Total wiki content processed: ~180KB across 11 files*
