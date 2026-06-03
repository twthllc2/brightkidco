# 09 — BRIGHTKIDCO DELIVERABILITY PLAN

> **Technical Infrastructure for Ensuring BrightKidCo Emails Land in the Inbox**
> Domain Setup · 6-Week Warming Schedule · List Hygiene · Spam Avoidance · Content Signature · Klaviyo Configuration · Monitoring Dashboard
> Generated: May 28, 2026 | Classification: Internal — BrightKidCo Email Program

---

## TABLE OF CONTENTS

1. [Executive Summary](#1-executive-summary)
2. [Current Infrastructure Assessment](#2-current-infrastructure-assessment)
3. [Domain Authentication Verification](#3-domain-authentication-verification)
4. [6-Week Domain Warming Schedule](#4-6-week-domain-warming-schedule)
5. [List Hygiene & Data Quality Rules](#5-list-hygiene--data-quality-rules)
6. [Spam Avoidance Content & Technical Rules](#6-spam-avoidance-content--technical-rules)
7. [Content Signature Optimization](#7-content-signature-optimization)
8. [Sending Frequency Recommendations](#8-sending-frequency-recommendations)
9. [Klaviyo Technical Setup Instructions](#9-klaviyo-technical-setup-instructions)
10. [Monitoring Dashboard & Alerts](#10-monitoring-dashboard--alerts)
11. [Post-Warmup Operations](#11-post-warmup-operations)
12. [Emergency & Recovery Protocols](#12-emergency--recovery-protocols)

---

## 1. EXECUTIVE SUMMARY

BrightKidCo's email deliverability infrastructure is **authenticated but unwarmed**. DNS authentication (SPF, DKIM, DMARC, custom tracking subdomain) is fully configured on the sending domain `send.brightkidco.com`. The Klaviyo account is live. However, the domain has **zero sender reputation** — it is a Tier 2 (New/Rewarming) domain that requires a mandatory 6-week warming protocol before any promotional sends.

**Current State Assessment:**

| Element | Status | Notes |
|---------|--------|-------|
| Sending Domain | ✅ Configured | `send.brightkidco.com` via Klaviyo Dedicated Sender |
| SPF Record | ✅ Configured | `v=spf1 include:_spf-us.ionos.com include:klaviyo.com ~all` |
| DKIM | ⚠️ Unverified | Klaviyo-managed — needs independent verification |
| DMARC | ✅ Configured | `p=none` — monitoring mode, correct for warming |
| Custom Tracking | ✅ Configured | `click.brightkidco.com` → `dct.klaviyodns.com` |
| Google Postmaster Tools | ❌ Not Verified | **P0 BLOCKER** — must set up before first send |
| List Verification | ❌ Not Done | Must run ZeroBounce before any sending |
| Warming Segments | ❌ Not Built | 7+ segments required before warming starts |
| Sender Reputation | ⚫ ZERO | New domain — no sending history |
| Campaigns Sent | 0 | Nothing has been sent from this domain |
| Shopify Integration | ⚠️ Unknown | Must verify event sync status |

**The Critical Path to First Send:**

```
[1] DNS Audit ──→ [2] GPT Verify ──→ [3] List Hygiene ──→ [4] Segments
      │                │                    │                    │
      ▼                ▼                    ▼                    ▼
[5] Seed List ──→ [6] Content ──→ [7] Cloak ──→ [8] Shopify
      │                │                    │                    │
      ▼                ▼                    ▼                    ▼
                         ╔══════════════════╗
                         ║   FIRST SEND     ║
                         ║   (Day 4-5)      ║
                         ╚══════════════════╝
```

**Timeline Overview:**

| Phase | Duration | Key Activity | Volume Cap |
|-------|----------|-------------|------------|
| Pre-Send | 3-4 days | DNS audit, GPT, ZeroBounce, segments, content | 0 |
| Weeks 1-2 | 14 days | Intensive Care — Vanguard Launch | 50-100/day |
| Weeks 3-4 | 14 days | Gradual Expansion | 250-500/day |
| Weeks 5-6 | 14 days | Full Deployment | 1000-2000+/day |
| Post-Warmup | Ongoing | Permanent Cadence | 90-Day Engaged |

**Revenue at Risk:** At the projected subscriber base, each 10-percentage-point deliverability swing represents significant per-campaign revenue. Getting warming wrong on Day 1 costs months of remediation and substantial annual revenue loss.

---

## 2. CURRENT INFRASTRUCTURE ASSESSMENT

### 2.1 Sending Domain Configuration

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                      DOMAIN AUTHENTICATION OVERVIEW                          ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║                    ┌─────────────────────────────────┐                       ║
║                    │     brightkidco.com (ROOT)       │                       ║
║                    │    Registrar: Ionos              │                       ║
║                    └──────────┬──────────────────────┘                       ║
║                               │                                              ║
║              ┌────────────────┼────────────────────┐                         ║
║              ▼                ▼                     ▼                         ║
║  ┌───────────────────┐ ┌──────────────┐ ┌─────────────────────┐              ║
║  │ SENDING SUBDOMAIN │ │ TRACKING     │ │ FROM ADDRESS        │              ║
║  │ send.brightkidco  │ │ click.bright │ │ support@brightkidco │              ║
║  │ .com              │ │ kidco.com    │ │ .com                │              ║
║  │                   │ │              │ │                     │              ║
║  │ SPF ✅ DKIM ⚠️  │ │ CNAME ✅     │ │ From: Lena from    │              ║
║  │ DMARC ✅ MX ❓   │ │              │ │ BrightKidCo         │              ║
║  └───────────────────┘ └──────────────┘ └─────────────────────┘              ║
║                                                                              ║
║  LEGEND:  ✅ Verified  ⚠️ Needs Check  ❓ Unknown  ❌ Missing                ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

### 2.2 DNS Record Inventory

| Record Type | Host | Value | Status |
|-------------|------|-------|--------|
| **SPF (TXT)** | `@` | `v=spf1 include:_spf-us.ionos.com include:klaviyo.com ~all` | ✅ Configured |
| **DMARC (TXT)** | `_dmarc` | `v=DMARC1; p=none; rua=mailto:support@brightkidco.com` | ✅ Configured |
| **DKIM (CNAME)** | `klaviyo1._domainkey.send` | (Klaviyo-provided target) | ⚠️ Unverified |
| **DKIM (CNAME)** | `klaviyo2._domainkey.send` | (Klaviyo-provided target) | ⚠️ Unverified |
| **Tracking (CNAME)** | `click` | `dct.klaviyodns.com` | ✅ Configured |
| **MX** | `send.brightkidco.com` | (unknown) | ❓ Not Checked |
| **BIMI (TXT)** | `default._bimi` | N/A | ❌ Deferred |

### 2.3 Klaviyo Account Status

| Detail | Value |
|--------|-------|
| Platform | Klaviyo (Dedicated Sender) |
| Login Email | support@brightkidco.com |
| Admin User | ayoub@tenzamarketing.com (added 5/19/26) |
| Sending Subdomain | send.brightkidco.com |
| From Address | support@brightkidco.com |
| From Name | "Lena from BrightKidCo" |
| Reply-To | support@brightkidco.com |
| Custom Tracking | click.brightkidco.com |
| DNS Provider | Ionos |
| Shopify Integration | ⚠️ Requires verification |

### 2.4 Infrastructure Timeline

| Date | Event |
|------|-------|
| 5/19/26 | Klaviyo credentials shared, DNS configured via Google Meet |
| 5/19/26 | Ayoub added as Klaviyo user (ayoub@tenzamarketing.com) |
| 5/20/26 | Sending subdomain confirmed: send.brightkidco.com |
| 5/20/26 | Giuliano working on flows, Ayoub handling execution |
| TBD | **First send date — requires all Phase 0 blockers resolved** |

---

## 3. DOMAIN AUTHENTICATION VERIFICATION

### 3.1 SPF (Sender Policy Framework)

**Current Record:**
```
v=spf1 include:_spf-us.ionos.com include:klaviyo.com ~all
```

**Verification Commands to Run:**
```bash
dig TXT brightkidco.com +short
dig TXT send.brightkidco.com +short
```

**Assessment:**
- ✅ Ionos + Klaviyo authorized as legitimate sending sources
- ✅ `~all` (soft fail) is correct for warming phase — switch to `-all` (hard fail) post-warmup
- ✅ Currently 2/10 DNS lookups used — safe headroom
- ⚠️ Must verify that `_spf-us.ionos.com` resolves correctly (verify discrepancy vs `spf.ionos.com`)
- ⚠️ Adding Gorgias, Recharge, Yotpo, Judge.me will consume additional lookups

**SPF Lookup Budget Tracker:**

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                           SPF LOOKUP BUDGET TRACKER                          ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  10 ─── MAXIMUM ─── MAXIMUM ─── MAXIMUM ─── MAXIMUM ─── MAXIMUM ─── MAXIMUM ║
║   9                                                                          ║
║   8                                                                          ║
║   7                                                                          ║
║   6                                                                          ║
║   5                                                                          ║
║   4                                                                          ║
║   3                                                                          ║
║   2  ████  CURRENT SPF USAGE                                                 ║
║   1  ████  Ionos (_spf-us.ionos.com) = 1 lookup                              ║
║   0  ████  Klaviyo (klaviyo.com) = 1 lookup                                  ║
║              ───────────                                                      ║
║              TOTAL = 2/10     SAFE — 8 lookups remaining                     ║
║                                                                              ║
║  WARNING: Each new service = +1 lookup.                                     ║
║  At 9/10, flatten SPF by converting includes to explicit IP ranges.          ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

**SPF Hardening Roadmap:**

| Phase | Record Change | When | Rationale |
|-------|-------------|------|-----------|
| Current | `~all` (soft fail) | Now through Week 6 | Allows legitimate mail from unverified sources during setup |
| Week 6+ | `-all` (hard fail) | After full sending audit | All legitimate sources identified and authenticated |
| Ongoing | Monitor lookup count | Every monthly audit | Stay under 10-lookup limit; flatten if approaching |

### 3.2 DKIM (DomainKeys Identified Mail)

**Current Status:** Klaviyo-managed — auto-configured during Dedicated Sender setup but not independently verified.

**Verification Commands to Run:**
```bash
dig CNAME klaviyo1._domainkey.send.brightkidco.com +short
dig CNAME klaviyo2._domainkey.send.brightkidco.com +short
```

**What to Verify:**
- [ ] Klaviyo1 record exists and points to the correct target
- [ ] Klaviyo2 record exists and points to the correct target
- [ ] Both CNAME records resolve without errors
- [ ] Klaviyo Settings > Domains > Authentication shows "Verified" green checkmark
- [ ] DKIM key strength is 2048-bit (check Klaviyo settings)

**Troubleshooting:**
- If dig returns nothing → records were not added to DNS → add them from Klaviyo Domains settings
- If dig returns wrong target → re-copy CNAME targets from Klaviyo > Settings > Domains
- If Klaviyo shows "Not Verified" → DNS propagation may take up to 48 hours

### 3.3 DMARC (Domain-based Message Authentication, Reporting & Conformance)

**Current Record:**
```
v=DMARC1; p=none; rua=mailto:support@brightkidco.com
```

**Verification Command:**
```bash
dig TXT _dmarc.brightkidco.com +short
```

**Assessment:**
- ✅ `p=none` is correct for warming phase — monitoring mode only
- ✅ Reports go to support@brightkidco.com (monitored inbox)
- ❌ No DMARC report analysis platform configured (easyDMARC or dmarcian)
- ⚠️ Must verify reports are flowing and being received

**DMARC Phased Rollout Plan:**

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                          DMARC PHASED ROLLOUT PLAN                           ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  PHASE 1: p=none (Monitoring)                                                ║
║  ┌─────────────────────────────────────────────────────────────────────────┐ ║
║  │ Duration: Now through Week 6                                            │ ║
║  │ Policy: Do nothing — just watch                                          │ ║
║  │ Action: Connect to easyDMARC or dmarcian for report analysis             │ ║
║  │ Condition: Must verify 100% legitimate sources pass authentication       │ ║
║  └─────────────────────────────────────────────────────────────────────────┘ ║
║                              │                                               ║
║                              ▼                                               ║
║  PHASE 2: p=quarantine (Soft Enforcement)                                    ║
║  ┌─────────────────────────────────────────────────────────────────────────┐ ║
║  │ Duration: Week 6 through Week 10+                                       │ ║
║  │ Policy: Quarantine suspicious mail (send to spam)                        │ ║
║  │ Prerequisite: 7+ days of 100% legitimate source pass rate                │ ║
║  │ Action: Update TXT record to p=quarantine                                │ ║
║  └─────────────────────────────────────────────────────────────────────────┘ ║
║                              │                                               ║
║                              ▼                                               ║
║  PHASE 3: p=reject (Strict Enforcement)                                      ║
║  ┌─────────────────────────────────────────────────────────────────────────┐ ║
║  │ Duration: Week 10+ onward                                               │ ║
║  │ Policy: Reject all non-authenticated mail                                │ ║
║  │ Prerequisite: 30+ days stable at p=quarantine with no issues             │ ║
║  │ Action: Update TXT record to p=reject; consider BIMI implementation      │ ║
║  └─────────────────────────────────────────────────────────────────────────┘ ║
║                                                                              ║
║  CRITICAL RULE: Never skip phases. Never escalate without 7-14 days of      ║
║  DMARC report verification that ALL legitimate sending sources pass.        ║
║  Common sources to audit before escalation:                                  ║
║  - Klaviyo (email marketing)                                                 ║
║  - Gorgias / Zendesk (customer support)                                      ║
║  - Recharge / Loop (subscriptions)                                           ║
║  - Yotpo / Judge.me (review platforms)                                       ║
║  - Google Workspace / Ionos (internal email)                                 ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

### 3.4 Custom Tracking Subdomain

**Current Record:**
```
click.brightkidco.com → CNAME → dct.klaviyodns.com
```

**Verification Command:**
```bash
dig CNAME click.brightkidco.com +short
```

**Status:** ✅ Verified active — no action needed.

### 3.5 MX Record Check

**Verification Command:**
```bash
dig MX send.brightkidco.com +short
```

**What to Expect:**
- Some mailbox providers require MX records on sending subdomains for trust validation
- If missing, add MX record pointing to Ionos mail servers
- Not critical but recommended for highest deliverability standards

### 3.6 Blacklist Check

**Tool:** MXToolbox (https://mxtoolbox.com/domain/send.brightkidco.com)

**What to Check:**
- [ ] Spamhaus Block List (SBL, XBL, CSS, ZEN, DBL)
- [ ] Barracuda Reputation Block List
- [ ] SURBL (Spam URI Realtime Blocklists)
- [ ] URIBL
- [ ] Invaluement
- [ ] Composite Blocking List (CBL)

**Risk Profile:** LOW — new domain with no sending history is unlikely to be blacklisted. But verification is mandatory before first send.

### 3.7 Google Postmaster Tools Setup

**URL:** https://gmail.com/postmaster/

**Setup Steps:**
1. Navigate to https://gmail.com/postmaster/
2. Click "Start Now" — requires a Google Account
3. Add domain: `send.brightkidco.com`
4. Create DNS TXT record for domain verification (Google provides the value)
5. Add to Ionos DNS: `TXT` record at `google._domainkey.send.brightkidco.com`
6. Wait for DNS propagation (5-30 minutes typically)
7. Click "Verify" in Postmaster Tools
8. Wait 24-48 hours for data to populate

**Why This Is P0 Critical:**
- GPT is the ONLY way to see Gmail's reputation score for the domain
- Gmail represents 65%+ of BrightKidCo's audience (US-heavy demographic)
- Without GPT, warming metrics are unreliable — open rates can be inflated by Apple MPP
- GPT provides: IP reputation, domain reputation, authentication pass rate, spam rate, feedback loop

### 3.8 rDNS / PTR Record

**Status:** Managed by Klaviyo's shared IP pool — NOT directly configurable by BrightKidCo.

**Verification:** Contact Klaviyo support to confirm PTR records are configured on their sending IPs.

**Relevance:** Important for German ISPs (Deutsche Telekom, GMX, WEB.de) — less critical for US-dominated audience (65% US). Monitor during warming and escalate if German open rates are low.

### 3.9 BIMI (Brand Indicators for Message Identification)

**Status:** ❌ Not Configured — deferred to post-warmup

**Prerequisites:**
- DMARC at `p=quarantine` or `p=reject` (not `p=none`)
- VMC (Verified Mark Certificate) — costs money, takes 1-2 weeks to issue
- SVG Tiny P/S logo file hosted on HTTPS

**Timeline:** Revisit after Week 6 when DMARC is escalated to `p=quarantine`. Not critical for launch.

---

## 4. 6-WEEK DOMAIN WARMING SCHEDULE

### 4.1 Tier Classification

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                    DOMAIN WARMING TIER CLASSIFICATION                        ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  TIER 1 — HEALTHY DOMAIN                                                    ║
║  ┌─────────────────────────────────────────────────────────────────────────┐ ║
║  │ GPT: "High" | Open Rate >40% | Active sending history                   │ ║
║  │ Starting Segment: 90-Day Engaged                                        │ ║
║  │ Warming Duration: None (maintain, don't warm)                           │ ║
║  └─────────────────────────────────────────────────────────────────────────┘ ║
║                                                                              ║
║  TIER 2 — NEW / REWARMING DOMAIN ← BRIGHTKIDCO IS HERE                      ║
║  ┌─────────────────────────────────────────────────────────────────────────┐ ║
║  │ GPT: None (not yet verified) | Zero sending history                     │ ║
║  │ Starting Segment: Tier 2 Initial Warm-Up (clicked in 30d OR added 15d) │ ║
║  │ Warming Duration: 6 weeks minimum                                       │ ║
║  │ Volume Start: 50-100 subscribers/day                                    │ ║
║  └─────────────────────────────────────────────────────────────────────────┘ ║
║                                                                              ║
║  TIER 3 — ACTIVE RECOVERY                                                   ║
║  ┌─────────────────────────────────────────────────────────────────────────┐ ║
║  │ GPT: "Low" / "Bad" | High complaint rate | Spam folder placement        │ ║
║  │ Starting Segment: 14-Day Engaged (Intensive Care)                       │ ║
║  │ Warming Duration: 6 weeks minimum (recovery protocol)                   │ ║
║  │ Volume Start: 14-Day Engaged only, value-only content                   │ ║
║  └─────────────────────────────────────────────────────────────────────────┘ ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

### 4.2 Pre-Warming Checklist (Week 0)

| # | Task | Status | Owner | Effort |
|---|------|--------|-------|--------|
| 1 | Verify Google Postmaster Tools for send.brightkidco.com | ❌ NOT DONE | Ayoub | 15 min |
| 2 | Run subscriber list through ZeroBounce for verification | ❌ NOT DONE | Ops | 1-2 hrs |
| 3 | Run blacklist check on send.brightkidco.com (MXToolbox) | ❌ NOT DONE | Ops | 15 min |
| 4 | Verify DKIM is "Verified" in Klaviyo Settings > Domains | ⚠️ UNKNOWN | Ops | 5 min |
| 5 | Verify MX record for send.brightkidco.com | ⚠️ UNKNOWN | Ops | 5 min |
| 6 | Build 8 warming segments in Klaviyo | ❌ NOT DONE | Ops | 2-3 hrs |
| 7 | Build 2 bot detection segments | ❌ NOT DONE | Ops | 30 min |
| 8 | Build VIP Clickers emergency segment | ❌ NOT DONE | Ops | 15 min |
| 9 | Implement Universal Transactional Cloak saved block | ❌ NOT DONE | Ops | 1-2 hrs |
| 10 | Prepare 6+ warming content emails (educational, non-promotional) | ❌ NOT DONE | Content | 4-6 hrs |
| 11 | Pause all flows except Welcome, Browse Abandonment, Cart/Checkout, Post-Purchase | ❌ NOT DONE | Ayoub | 15 min |
| 12 | Verify Shopify-Klaviyo integration | ⚠️ UNKNOWN | Ayoub | 30 min |
| 13 | Compile seed list (50-100 known customers) | ❌ NOT DONE | Giuliano | 1 hr |
| 14 | Create Klaviyo monitoring dashboard | ❌ NOT DONE | Ops | 1 hr |
| 15 | Set up easyDMARC or dmarcian for DMARC reports | ❌ NOT DONE | Ops | 30 min |

### 4.3 Warming Segments — Build Before First Send

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                    WARMING SEGMENT ARCHITECTURE                               ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  ENGAGEMENT SEGMENTS (7 required):                                           ║
║                                                                              ║
║  ┌─────────────────────────────────────────────────────────────────────────┐ ║
║  │ [WARMING] Tier 2 — Initial Warm-Up                                      │ ║
║  │   Clicked in 30 days OR Added in 15 days | Can receive email            │ ║
║  │   → WEEKS 1-2 TARGET SEGMENT                                            │ ║
║  └─────────────────────────────────────────────────────────────────────────┘ ║
║  ┌─────────────────────────────────────────────────────────────────────────┐ ║
║  │ [WARMING] 14-Day Engaged — Vanguard                                     │ ║
║  │   Opened OR Clicked in last 14 days | Can receive email                 │ ║
║  │   → BACKUP / ROLLBACK SEGMENT                                           │ ║
║  └─────────────────────────────────────────────────────────────────────────┘ ║
║  ┌─────────────────────────────────────────────────────────────────────────┐ ║
║  │ [WARMING] 30-Day Engaged                                               │ ║
║  │   Opened OR Clicked in last 30 days | Can receive email                 │ ║
║  │   → WEEKS 3-4 TARGET SEGMENT                                             ║
║  └─────────────────────────────────────────────────────────────────────────┘ ║
║  ┌─────────────────────────────────────────────────────────────────────────┐ ║
║  │ [WARMING] 60-Day Engaged                                               │ ║
║  │   Opened OR Clicked in last 60 days | Can receive email                 │ ║
║  │   → WEEK 5 TARGET SEGMENT                                               ║
║  └─────────────────────────────────────────────────────────────────────────┘ ║
║  ┌─────────────────────────────────────────────────────────────────────────┐ ║
║  │ [WARMING] 90-Day Engaged (PERMANENT TARGET)                             │ ║
║  │   Opened OR Clicked in last 90 days | Can receive email                 │ ║
║  │   → WEEK 6+ PERMANENT TARGET SEGMENT                                     ║
║  └─────────────────────────────────────────────────────────────────────────┘ ║
║                                                                              ║
║  ADVANCED SEGMENTS (3 required):                                             ║
║                                                                              ║
║  ┌─────────────────────────────────────────────────────────────────────────┐ ║
║  │ [ADVANCED] VIP Clickers (90 Day)                                        │ ║
║  │   Clicked in 90 days | Can receive email                                │ ║
║  │   → EMERGENCY / CODE RED USE ONLY                                        ║
║  └─────────────────────────────────────────────────────────────────────────┘ ║
║  ┌─────────────────────────────────────────────────────────────────────────┐ ║
║  │ [ADVANCED] At-Risk Engagers (90 Day)                                    │ ║
║  │   Opened in 90 days | Clicked 0 times in 90 days                       │ ║
║  │   → MONITORING — EXCLUDE FROM WARMING                                    ║
║  └─────────────────────────────────────────────────────────────────────────┘ ║
║  ┌─────────────────────────────────────────────────────────────────────────┐ ║
║  │ [ADVANCED] Ghost Profiles                                               │ ║
║  │   Apple Privacy Open = TRUE | Clicked 0 in 120 days | Ordered 0 in 120d│ ║
║  │   → SUPPRESSION — DO NOT SEND TO                                         ║
║  └─────────────────────────────────────────────────────────────────────────┘ ║
║                                                                              ║
║  BOT DETECTION SEGMENTS (2 required):                                       ║
║                                                                              ║
║  ┌─────────────────────────────────────────────────────────────────────────┐ ║
║  │ [BOT] Known Fake Domains                                                │ ║
║  │   Email domain IN (mailinator, guerrillamail, 10minutemail, etc.)       │ ║
║  │   → EXCLUDE FROM ALL SENDS                                              ║
║  └─────────────────────────────────────────────────────────────────────────┘ ║
║  ┌─────────────────────────────────────────────────────────────────────────┐ ║
║  │ [BOT] Non-Engaged Sleepers                                              │ ║
║  │   Received 10+ emails | Opened 0 times | Clicked 0 times               │ ║
║  │   → EXCLUDE FROM ALL SENDS (potential spam trap)                        ║
║  └─────────────────────────────────────────────────────────────────────────┘ ║
║                                                                              ║
║  MASTER SUPPRESSION LIST (applied to ALL sends):                            ║
║    [SUPPRESSED] Master Suppression List                                     ║
║      Unengaged = True OR Unsubscribed = True OR Hard Bounce = True         ║
║      → APPLY TO EVERY CAMPAIGN AND FLOW FILTER                               ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

**No Engagement Data Fallback:**
Since this is a new domain with zero sending history, there may be no historical engagement data in Klaviyo. If the Tier 2 Initial Warm-Up segment is empty:

1. **Use purchase-based equivalents:**
   - 30-Day Purchasers → acts as 14-Day Engaged equivalent
   - 90-Day Purchasers → acts as 90-Day Engaged equivalent

2. **If no purchases exist either:**
   - Compile a seed list of 50-100 known customers from:
     - Shopify customer records
     - Customer support interactions
     - Social media followers who have interacted
     - Former buyers from other sales channels
   - Manually import as a static list segment

### 4.4 WEEK-BY-WEEK WARMING SCHEDULE

---

#### WEEK 1 — Vanguard Launch (Days 1-7)

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                     WEEK 1: VANGUARD LAUNCH                                  ║
║                     Days 1-7 — Build Initial Reputation                      ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  TARGET SEGMENT: Tier 2 Initial Warm-Up                                      ║
║  DAILY VOLUME CAP: 50-100 subscribers/day MAX                                ║
║  CAMPAIGNS PER WEEK: 3 (Mon, Wed, Fri)                                       ║
║                                                                              ║
║  ┌───────┬───────────────┬─────────────────────────────────────────────────┐ ║
║  │ DAY   │ CAMPAIGN      │ CONTENT TYPE                                    │ ║
║  ├───────┼───────────────┼─────────────────────────────────────────────────┤ ║
║  │ Mon   │ Campaign #1   │ Educational: "The Body Signal Gap"               │ ║
║  │ Wed   │ Campaign #2   │ Community: Parent Story Spotlight                │ ║
║  │ Fri   │ Campaign #3   │ Educational: "Why Methods Fail — The 3 Reasons" │ ║
║  └───────┴───────────────┴─────────────────────────────────────────────────┘ ║
║                                                                              ║
║  ════════════════════ CONTENT RULES ════════════════════                     ║
║                                                                              ║
║  ✅ ALLOWED:                                                                ║
║  ┌─────────────────────────────────────────────────────────────────────────┐ ║
║  │ • Educational content about interoception & body signals                │ ║
║  │ • Parent community stories and testimonials                             │ ║
║  │ • Founder/team introduction (Lena's story)                              │ ║
║  │ • Best-seller highlights (NO pricing)                                   │ ║
║  │ • Plain-text or lightly formatted preferred                             │ ║
║  │ • Reply prompts: "Just reply to this email and let me know..."          │ ║
║  └─────────────────────────────────────────────────────────────────────────┘ ║
║                                                                              ║
║  ❌ FORBIDDEN:                                                              ║
║  ┌─────────────────────────────────────────────────────────────────────────┐ ║
║  │ ✗ Discount codes or coupon offers                                       │ ║
║  │ ✗ Pricing information in CTA or body                                    │ ║
║  │ ✗ "Buy Now," "Limited Time," urgency tactics                            │ ║
║  │ ✗ Countdown timers or scarcity banners                                  │ ║
║  │ ✗ Hard-sell language or aggressive CTAs                                │ ║
║  │ ✗ Discount codes (WELCOME10, 10%OFF-BKCO)                              │ ║
║  └─────────────────────────────────────────────────────────────────────────┘ ║
║                                                                              ║
║  ════════════════════ MONITORING TARGETS ════════════════════                ║
║                                                                              ║
║  Metric           Target         Red Flag        Action on Red Flag          ║
║  ──────────────── ───────────── ──────────────  ──────────────────────────── ║
║  Open Rate        >50%          <45%            Review subject lines,       ║
║                                                  reduce to 2 campaigns/week ║
║  Bounce Rate      <0.5%         >1%             HALT — full list audit      ║
║  Spam Complaints  <0.03%        >0.05%          HALT — content review       ║
║  GPT Reputation   N/A (no data) "Low/Bad"       Code Red protocol           ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

---

#### WEEK 2 — Intensive Care Steady (Days 8-14)

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                     WEEK 2: INTENSIVE CARE STEADY                            ║
║                     Days 8-14 — Maintain & Monitor                           ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  TARGET SEGMENT: Tier 2 Initial Warm-Up (same as Week 1)                     ║
║  DAILY VOLUME CAP: 100-250 subscribers/day (gradual increase)                ║
║  CAMPAIGNS PER WEEK: 3 (Tue, Thu, Sat)                                       ║
║                                                                              ║
║  ┌───────┬───────────────┬─────────────────────────────────────────────────┐ ║
║  │ DAY   │ CAMPAIGN      │ CONTENT TYPE                                    │ ║
║  ├───────┼───────────────┼─────────────────────────────────────────────────┤ ║
║  │ Tue   │ Campaign #4   │ Educational: "How Interoception Works"           │ ║
║  │ Thu   │ Campaign #5   │ Social Proof: 16,511 Reviews Deep Dive           │ ║
║  │ Sat   │ Campaign #6   │ Community: Parent Q&A / FAQ Content              │ ║
║  └───────┴───────────────┴─────────────────────────────────────────────────┘ ║
║                                                                              ║
║  ════════════════════ CONTENT RULES ════════════════════                     ║
║                                                                              ║
║  ✅ SAME AS WEEK 1 — value-only, educational, no promotions                 ║
║  ✅ Begin collecting reply engagement data for persona calibration           ║
║                                                                              ║
║  ════════════════════ DECISION POINT ════════════════════                    ║
║  At end of Week 2, evaluate:                                                 ║
║  • Open rate consistently >50%? → Proceed to Week 3                         ║
║  • Open rate <45%? → STAY in Week 2 for another week                         ║
║  • Bounce rate >1%? → HALT — do not proceed                                  ║
║  • Spam complaints >0.05%? → HALT — content audit                            ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

---

#### WEEK 3 — First Expansion (Days 15-21)

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                     WEEK 3: FIRST EXPANSION                                   ║
║                     Days 15-21 — Expand to 30-Day Engaged Segment            ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  TARGET SEGMENT: [WARMING] 30-Day Engaged                                    ║
║  DAILY VOLUME CAP: 250-500 subscribers/day                                   ║
║  CAMPAIGNS PER WEEK: 3 (Tue, Thu, Sat with varying send times)               ║
║                                                                              ║
║  ┌───────┬───────────────┬─────────────────────────────────────────────────┐ ║
║  │ DAY   │ CAMPAIGN      │ CONTENT TYPE                                    │ ║
║  ├───────┼───────────────┼─────────────────────────────────────────────────┤ ║
║  │ Tue   │ Campaign #7   │ Educational: "3-Layer System — How It Works"     │ ║
║  │ Thu   │ Campaign #8   │ Product Spotlight: "The Science of the Wetness   │ ║
║  │       │               │   Learning Layer"                                │ ║
║  │ Sat   │ Campaign #9   │ Parent Story: Real Results from Level 2 Parents  │ ║
║  └───────┴───────────────┴─────────────────────────────────────────────────┘ ║
║                                                                              ║
║  ════════════════════ CONTENT RULES ════════════════════                     ║
║                                                                              ║
║  ✅ ALLOWED:                                                                ║
║  ┌─────────────────────────────────────────────────────────────────────────┐ ║
║  │ • All Week 1-2 content types                                            │ ║
║  │ • Mild promotional content (20% off context allowed)                    │ ║
║  │ • Product feature explanations (non-purchase CTAs)                      │ ║
║  │ • Customer testimonial emails with mild CTA                             │ ║
║  └─────────────────────────────────────────────────────────────────────────┘ ║
║                                                                              ║
║  ❌ STILL FORBIDDEN:                                                        ║
║  ┌─────────────────────────────────────────────────────────────────────────┐ ║
║  │ ✗ Heavy discount campaigns or flash sales                               │ ║
║  │ ✗ Aggressive CTA language                                               │ ║
║  │ ✗ "Limited Time Offer" or countdown timers                               │ ║
║  │ ✗ Sending to full list or unengaged segments                            │ ║
║  └─────────────────────────────────────────────────────────────────────────┘ ║
║                                                                              ║
║  ════════════════════ CHECKPOINT ════════════════════                        ║
║  • Activate Browse Abandonment flow (monitor 48-72h before next flow)       ║
║  • Open rate >45% on 30-Day segment                                         ║
║  • If open rate drops below 45% → revert to 14-Day segment, wait 1 week     ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

---

#### WEEK 4 — Second Expansion (Days 22-28)

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                     WEEK 4: SECOND EXPANSION                                  ║
║                     Days 22-28 — Deepen Engagement & Add Flows               ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  TARGET SEGMENT: [WARMING] 30-Day Engaged (continued)                        ║
║  DAILY VOLUME CAP: 500-1000 subscribers/day                                  ║
║  CAMPAIGNS PER WEEK: 3-4 (mix of educational and soft promotion)             ║
║                                                                              ║
║  ┌───────┬───────────────┬─────────────────────────────────────────────────┐ ║
║  │ DAY   │ CAMPAIGN      │ CONTENT TYPE                                    │ ║
║  ├───────┼───────────────┼─────────────────────────────────────────────────┤ ║
║  │ Mon   │ Campaign #10  │ Educational: "Why Pull-Ups Keep Kids Too Dry"    │ ║
║  │ Wed   │ Campaign #11  │ Mild Promo: "What 100,000+ Parents Know"         │ ║
║  │ Fri   │ Campaign #12  │ Educational: "BCBA-Compatible Approaches"        │ ║
║  │ Sun   │ Campaign #13  │ Community: Parent Tips & Tricks Roundup          │ ║
║  └───────┴───────────────┴─────────────────────────────────────────────────┘ ║
║                                                                              ║
║  ════════════════════ CONTENT RULES ════════════════════                     ║
║                                                                              ║
║  ✅ ALLOWED:                                                                ║
║  ┌─────────────────────────────────────────────────────────────────────────┐ ║
║  │ • 60%+ value-first content, 40% mild promotional max                    │ ║
║  │ • Product comparison content (BKC vs Pull-Ups / Pampers)                │ ║
║  │ • "Learn more" CTAs allowed (still no "Buy Now")                       │ ║
║  │ • Social proof with soft CTAs                                           │ ║
║  └─────────────────────────────────────────────────────────────────────────┘ ║
║                                                                              ║
║  ════════════════════ FLOW MANAGEMENT ════════════════════                   ║
║  • Welcome Flow: Already active (touched new signups since Week 1)          ║
║  • Browse Abandonment: Activated in Week 3, continue monitoring             ║
║  • Cart/Checkout Abandonment: DO NOT ACTIVATE YET (wait until Week 5)       ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

---

#### WEEK 5 — Deep Expansion (Days 29-35)

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                     WEEK 5: DEEP EXPANSION                                    ║
║                     Days 29-35 — 60-Day Engaged + High-Value Flows           ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  TARGET SEGMENT: [WARMING] 60-Day Engaged                                    ║
║  DAILY VOLUME CAP: 1000-2000 subscribers/day                                 ║
║  CAMPAIGNS PER WEEK: 4                                                       ║
║                                                                              ║
║  ┌───────┬───────────────┬─────────────────────────────────────────────────┐ ║
║  │ DAY   │ CAMPAIGN      │ CONTENT TYPE                                    │ ║
║  ├───────┼───────────────┼─────────────────────────────────────────────────┤ ║
║  │ Mon   │ Campaign #14  │ Product: Bundle Value Breakdown (3+3 vs 5+5)    │ ║
║  │ Wed   │ Campaign #15  │ Educational: "The 6-Week Body Signal Journey"   │ ║
║  │ Fri   │ Campaign #16  │ Mild Promo: "Summer Training Prep Starts Now"   │ ║
║  │ Sun   │ Campaign #17  │ Community: Real Parent Video Testimonials       │ ║
║  └───────┴───────────────┴─────────────────────────────────────────────────┘ ║
║                                                                              ║
║  ════════════════════ CONTENT RULES ════════════════════                     ║
║                                                                              ║
║  ✅ ALLOWED: NOW INCLUDING                                                   ║
║  ┌─────────────────────────────────────────────────────────────────────────┐ ║
║  │ • Product pricing and bundle comparisons allowed                         │ ║
║  │ • "Shop Now" CTAs with direct purchase links                            │ ║
║  │ • 60-Day Guarantee prominence (mild)                                   │ ║
║  │ • Discount codes: WELCOME10 and 10%OFF-BKCO allowed                      │ ║
║  │ • Post-Purchase Direct Upsell flow: ACTIVATE (monitor 48h)              │ ║
║  │ • PP-Level Detection flow: ACTIVATE (monitor 48h)                      │ ║
║  └─────────────────────────────────────────────────────────────────────────┘ ║
║                                                                              ║
║  ════════════════════ FLOW ACTIVATION ════════════════════                   ║
║  NEW THIS WEEK:                                                              ║
║  • Cart Abandonment flow → Activate (48-72h monitor)                         ║
║  • Checkout Abandonment flow → Activate (48-72h monitor)                     ║
║  • PP-Direct Upsell flow → Activate (48-72h monitor)                         ║
║  • PP-Level Detection flow → Activate (48-72h monitor)                       ║
║                                                                              ║
║  FLOW ACTIVATION ORDER (strict):                                             ║
║    Cart Abandon → 48h monitor → Checkout Abandon → 48h monitor               ║
║    → PP-Upsell → 48h monitor → PP-Level Detection                            ║
║    DO NOT activate all at once. Monitor each before next.                    ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

---

#### WEEK 6 — Full Deployment (Days 36-42)

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                     WEEK 6: FULL DEPLOYMENT                                   ║
║                     Days 36-42 — 90-Day Engaged + DMARC Escalation           ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  TARGET SEGMENT: [WARMING] 90-Day Engaged (PERMANENT)                        ║
║  DAILY VOLUME CAP: 2000+ subscribers/day (test ceiling)                      ║
║  CAMPAIGNS PER WEEK: 4                                                       ║
║                                                                              ║
║  ┌───────┬───────────────┬─────────────────────────────────────────────────┐ ║
║  │ DAY   │ CAMPAIGN      │ CONTENT TYPE                                    │ ║
║  ├───────┼───────────────┼─────────────────────────────────────────────────┤ ║
║  │ Mon   │ Campaign #18  │ Full Promo: "Back-to-School Sensory Toolkit"    │ ║
║  │ Wed   │ Campaign #19  │ Educational + Promo: "3 Signs Your Child Is     │ ║
║  │       │               │   Ready for the Body Signal Approach"           │ ║
║  │ Fri   │ Campaign #20  │ Promo: Bundle Spotlight + Limited Offer         │ ║
║  │ Sun   │ Campaign #21  │ Community: "Share Your Story" Feature            │ ║
║  └───────┴───────────────┴─────────────────────────────────────────────────┘ ║
║                                                                              ║
║  ════════════════════ END-OF-WARMUP ACTIONS ════════════════════             ║
║                                                                              ║
║  1. UPGRADE DMARC:                                                           ║
║     → Change TXT record from p=none to p=quarantine                          ║
║     → Verify with dig TXT _dmarc.brightkidco.com +short                      ║
║     → Monitor DMARC reports for 7+ days after change                         ║
║                                                                              ║
║  2. ACTIVATE REMAINING FLOWS:                                                ║
║     → All 9 Phase 1 flows now active                                         ║
║     → Start Phase 2 flow planning (PP-Education, Replenishment, Winback)     ║
║                                                                              ║
║  3. BUILD SUNSET PROTOCOL:                                                    ║
║     → Trigger: 120 days unengaged + 20+ emails + no purchases               ║
║     → Re-engagement email → 7-day wait → suppress to Master List             ║
║                                                                              ║
║  4. ESTABLISH MONTHLY AUDIT:                                                  ║
║     → First Monday of each month, 45-60 minutes                              ║
║     → 5-phase: GPT check, bounce/spam review, segment audit,                 ║
║       content review, DMARC report analysis                                  ║
║                                                                              ║
║  5. CONSIDER SENDER PERSONA SPLIT:                                            ║
║     → Brand Announcer (info@) for campaigns, cross-sell                      ║
║     → Helpful Agent (help@) for abandonments, support, nurture               ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

### 4.5 6-Week Warming At a Glance

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                     6-WEEK WARMING TIMELINE — FULL VIEW                       ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  WEEK  │ SEGMENT         │ DAILY VOL  │ CAMPAIGNS │ FLOWS ACTIVE           ║
║  ──────┼─────────────────┼────────────┼───────────┼─────────────────────── ║
║  W1    │ Tier 2 Init     │  50-100    │  3 (M/W/F)│ Welcome, Transactional ║
║  W2    │ Tier 2 Init     │ 100-250    │  3 (T/T/S)│ Welcome, Transactional ║
║  W3    │ 30-Day Engaged  │ 250-500    │  3        │ + Browse Abandonment   ║
║  W4    │ 30-Day Engaged  │ 500-1000   │  3-4      │ (monitor Browse)       ║
║  W5    │ 60-Day Engaged  │1000-2000   │  4        │ + Cart, Checkout,      ║
║        │                 │            │           │   PP-Upsell, PP-Level  ║
║  W6    │ 90-Day Engaged  │2000+       │  4        │ ALL 9 Phase 1 Flows    ║
║                                                                              ║
║  ──────────────────────────────────────────────────────────────────────      ║
║                                                                              ║
║  VOLUME GROWTH VISUALIZATION:                                                ║
║                                                                              ║
║  2000+ ┤                                                    ┌───┐            ║
║        │                                                    │ W6│            ║
║  1500  ┤                                                    │   │            ║
║        │                                         ┌───┐      │   │            ║
║  1000  ┤                                         │ W5│      │   │            ║
║        │                               ┌───┐     │   │      │   │            ║
║   500  ┤                               │ W4│     │   │      │   │            ║
║        │                    ┌───┐      │   │     │   │      │   │            ║
║   250  ┤                    │ W3│      │   │     │   │      │   │            ║
║        │          ┌───┐     │   │      │   │     │   │      │   │            ║
║   100  ┤          │ W2│     │   │      │   │     │   │      │   │            ║
║        │ ┌───┐    │   │     │   │      │   │     │   │      │   │            ║
║    50  ┤ │ W1│    │   │     │   │      │   │     │   │      │   │            ║
║        │ │   │    │   │     │   │      │   │     │   │      │   │            ║
║        └─┴───┴────┴───┴─────┴───┴──────┴───┴─────┴───┴──────┴───┴──         ║
║           W1     W2      W3       W4       W5       W6                       ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

### 4.6 Daily Monitoring Metrics During Warming

| Metric | Week 1-2 Target | Week 3-4 Target | Week 5-6 Target | Red Flag | Action on Red Flag |
|--------|-----------------|-----------------|-----------------|----------|-------------------|
| Open Rate | >50% | >45% | >40% | Drops 5% in 48h | Pause, review content/segment |
| Click Rate | >5% | >4% | >3% | <2% | Increase CTA clarity |
| Bounce Rate | <0.5% | <0.5% | <0.5% | >1% | HALT — full list audit |
| Spam Complaints | <0.03% | <0.03% | <0.05% | >0.05% | HALT — content review |
| GPT Domain Rep | N/A (populating) | Medium | Medium-High | "Low" or "Bad" | Code Red protocol |
| Unsubscribe Rate | <0.2% | <0.2% | <0.3% | >0.5% | Reduce frequency |

### 4.7 Flow Re-Activation Order

```
FLOW RE-ACTIVATION ORDER (strict sequencing):

    WEEK 1         Transactional Flows (always on, no warming needed)
    │                • Order Confirmation (pure transactional — NO promo)
    │                • Shipping Notification (pure transactional — NO promo)
    │                • Arrived & Welcome (pure transactional — NO promo)
    ▼
    WEEK 1         Welcome Flow (4 variants × 8 emails — level-specific)
    │               → Only active flow generating non-transactional volume
    ▼
    WEEK 3         Browse Abandonment (3 emails — cross-level)
    │               → 48-72 hour monitoring period
    ▼
    WEEK 5         Cart Abandonment (3 emails — cross-level)
    │               → Activate 48h after Browse proves stable
    ▼
    WEEK 5         Checkout Abandonment (2-3 emails — cross-level)
    │               → Activate 48h after Cart proves stable
    ▼
    WEEK 5         PP-Direct Upsell (2 emails — cross-level)
    │               → Activate 48h after Checkout proves stable
    ▼
    WEEK 5         PP-Level Detection (1 email — GF only)
    │               → Activate 48h after PP-Upsell proves stable
    ▼
    WEEK 6+        Phase 2 flows (PP-Education, Replenishment, Winback)
                    → Only after ALL Phase 1 flows are stable at full volume

    RULE: Never activate more than 1 flow per 48-hour window.
    RULE: If ANY flow shows >0.05% spam rate → pause that flow.
    RULE: If GPT drops to "Low" → pause ALL non-transactional flows.
```

---

## 5. LIST HYGIENE & DATA QUALITY RULES

### 5.1 Bounce Handling

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                       BOUNCE RATE THRESHOLD MATRIX                           ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  BOUNCE RANGE       CLASSIFICATION      ACTION REQUIRED                      ║
║  ─────────────────────────────────────────────────────────────────────────   ║
║                                                                              ║
║  0.0% - 0.3%        ★ EXCELLENT        Monitor monthly                       ║
║                     (Green Zone)                                             ║
║                                                                              ║
║  ┌──────────────────────────────────────────────────────────────────────┐    ║
║  │  █████████████████████████████████████████████████████████████████      │    ║
║  │  0.0%                                          0.3%                    │    ║
║  └──────────────────────────────────────────────────────────────────────┘    ║
║                                                                              ║
║  0.3% - 0.5%        ● GOOD              Investigate — check source quality  ║
║                     (Yellow Zone)       Review recent acquisition channels  ║
║                                                                              ║
║  ┌──────────────────────────────────────────────────────────────────────┐    ║
║  │         ████████████████████████████████████████████████████           │    ║
║  │  0.3%                                    0.5%                         │    ║
║  └──────────────────────────────────────────────────────────────────────┘    ║
║                                                                              ║
║  0.5% - 0.99%       ⚠ WARNING           Immediate investigation             ║
║                     (Orange Zone)       Check signup source quality          ║
║                                         Review form integration             ║
║                                                                              ║
║  ┌──────────────────────────────────────────────────────────────────────┐    ║
║  │                    ████████████████████████                             │    ║
║  │  0.5%                         0.99%                                    │    ║
║  └──────────────────────────────────────────────────────────────────────┘    ║
║                                                                              ║
║  1.0% - 1.99%       🔴 CRITICAL         HALT all promotional sends          ║
║                     (Red Zone)          Full list audit required             ║
║                                         Export → ZeroBounce → re-verify     ║
║                                         Fix signup verification             ║
║                                                                              ║
║  ┌──────────────────────────────────────────────────────────────────────┐    ║
║  │                               ████████████████████████████             │    ║
║  │  1.0%                                       1.99%                     │    ║
║  └──────────────────────────────────────────────────────────────────────┘    ║
║                                                                              ║
║  2.0%+              🚨 EMERGENCY         Full send pause                    ║
║                     (Black Zone)         Complete list hygiene overhaul     ║
║                                         Session with email verification     ║
║                                         provider for full audit            ║
║                                                                              ║
║  ┌──────────────────────────────────────────────────────────────────────┐    ║
║  │                                          ███████████████████████████   │    ║
║  │  2.0%                                                     MAX          │    ║
║  └──────────────────────────────────────────────────────────────────────┘    ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

**Bounce Handling Procedures:**

1. **Hard Bounces** (invalid/non-existent address):
   - Klaviyo auto-suppresses after 1 hard bounce — verify suppression list is active
   - Track trend: more than 0.3% hard bounce rate = signup quality issue
   - Investigate source: pop-up, checkout integration, or manual import

2. **Soft Bounces** (temporary delivery failure):
   - Klaviyo retries automatically for up to 72 hours
   - Monitor soft bounce rate — >1% consistently = possible reputation issue
   - If pattern is ISP-specific (e.g., all from Gmail), check GPT for that domain

3. **Bounce Source Attribution:**
   - Check signup form for bot submissions
   - Review recent import lists for data quality
   - Verify real-time email verification API is active at signup

### 5.2 Suppression Rules

| # | Rule | Condition | Action |
|---|------|-----------|--------|
| 1 | Hard Bounce | Any single hard bounce | Auto-suppress by Klaviyo |
| 2 | Spam Complaint | Any single spam complaint | Auto-suppress by Klaviyo (1-click) |
| 3 | Unsubscribe | Manual unsubscribe or list-unsubscribe header | Auto-suppress |
| 4 | Purchased Lists | Any subscriber from purchased/rented list | Immediate suppression — no exceptions |
| 5 | Unverified Giveaway | Sourced from giveaway/contest without verification | Suppress if bounce >3% or spam >0.05% |
| 6 | Non-Engaged Sleeper | Received 10+ emails, zero opens, zero clicks | Suppress as bot/sleeper profile |
| 7 | Ghost Profile | Apple MPP open = TRUE, clicked 0 in 120 days | Export for manual review |
| 8 | 120-Day Unengaged | No opens/clicks in 120 days, no purchases | Run through automated sunset flow |

### 5.3 Sunset Protocol

**Trigger Conditions (all three must be met):**
- No email opens in 120 days
- No email clicks in 120 days
- No purchases ever (or no purchase in 365 days)

**Sunset Flow Sequence:**

```
SUNSET FLOW PROCEDURE:

    DAY 0: Sunset Trigger
    ├── Person is in [SUPPRESSED] 120-Day Unengaged segment
    ├── Received 20+ emails since signup
    └── No purchases in tracking window

    DAY 0: Re-engagement Email #1
    ├── Subject: "Should we stay in touch?"
    ├── Content: "Haven't seen you around. If BrightKidCo still
    │   matters to you, click here and we'll keep you on the list."
    ├── CTA: "Keep me subscribed" button
    └── Wait 7 days

    DAY 7: Evaluate
    ├── OPENED? → Remove from sunset sequence
    ├── CLICKED? → Remove from sunset sequence
    └── NO RESPONSE? → Proceed to suppression

    DAY 7: Tag and Suppress
    ├── Apply tag: unengaged = True
    ├── Add to Master Suppression List segment
    └── Remove from all active marketing lists

    ONGOING: Master Suppression
    ├── Segment: [SUPPRESSED] unengaged is True
    ├── Applied as EXCLUDE filter to ALL:
    │   • Campaign sends "Don't send to"
    │   • Flow entry filters
    │   • Segment membership conditions
    └── Monthly review of segment size
```

### 5.4 Bot Detection

**Known Fake Domains (20+ disposable email domains):**
```
mailinator.com
guerrillamail.com
10minutemail.com
temp-mail.org
throwaway.email
yopmail.com
sharklasers.com
trashmail.com
mailnator.com
mailcatch.com
getnada.com
emailondeck.com
tempmail.com
tempr.email
fakeinbox.com
mailnesia.com
spambox.us
sneakemail.com
jetable.com
spamgourmet.com
```

**Non-Engaged Sleeper Detection:**
- Segment: Received 10+ emails AND Opened 0 times AND Clicked 0 times
- These are potential spam traps or bot signups
- Add to Master Suppression List before any broad send

### 5.5 Monthly Hygiene Checklist

Execute on the first Monday of each month (45-60 minutes):

| # | Task | Tool/Action | Target | Red Flag |
|---|------|-----------|--------|----------|
| 1 | Review bounce rate trend | Klaviyo Analytics > Bounce Rate | <0.5% | >1% = escalate |
| 2 | Review spam complaint rate | Klaviyo Analytics + GPT | <0.03% | >0.05% = escalate |
| 3 | Verify Sunset Flow is live | Klaviyo Flows > Sunset | Active | Not active = fix immediately |
| 4 | Review 120-Day Unengaged segment size | Klaviyo Segments | Growing normally | Explosion = signup quality issue |
| 5 | Export Ghost Profiles for review | Klaviyo Segments > Ghost | Manual check | Excessive = Apple MPP inflation |
| 6 | Check GPT domain reputation | gmail.com/postmaster | "Medium" or "High" | "Low" or "Bad" = Code Red |
| 7 | Verify ZeroBounce/Kickbox credits | Verification service account | Credits available | Empty = top up immediately |
| 8 | Review lead source quality | Segment by signup_source | Top sources healthy | Any source >3% bounce = pause |
| 9 | Audit disposable domain blocklist | Check for new domains to add | Updated list | No update in 3+ months |
| 10 | Verify suppression + bot exclusions | Random campaign "Don't send to" | All filters active | Missing = fix immediately |

### 5.6 Real-Time Email Verification at Signup

**Requirement:** Integrate ZeroBounce (or Kickbox, NeverBounce) API at the signup form level to verify emails in real-time before they enter the Klaviyo list.

**Integration Points:**
1. **Pop-up form** — verify email before assigning avatar_level tag
2. **Checkout integration** — verify email during Shopify checkout
3. **Manual imports** — run through ZeroBounce before any import

**Setup Steps:**
1. Create ZeroBounce account (https://www.zerobounce.net/)
2. Get API key
3. Integrate with Klaviyo form via Zapier or direct API
4. Set rejection threshold: emails scoring <85% validity are blocked
5. Test with known valid and invalid emails

---

## 6. SPAM AVOIDANCE CONTENT & TECHNICAL RULES

### 6.1 Forbidden Content Elements

**Phrases That Trigger Spam Filters (Absolute Ban):**

| Category | Forbidden | Why | Replace With |
|----------|-----------|-----|-------------|
| Overpromise | "Guaranteed results" | FTC violation, spam filter trigger | "Many families see progress" |
| Overpromise | "Works every time" | Impossible claim | "Works for many children" |
| Overpromise | "Quick results" / "Fast" | Spam filter, brand violation | "Takes time — and that's OK" |
| Overpromise | "Easy" / "Simple" / "Effortless" | Brand voice violation | "Manageable with the right approach" |
| Medical Claim | "Cure" / "Solve" / "Fix" | Regulatory risk | "Address" / "Support" / "Help" |
| Medical Claim | "Treats autism" | CRITICAL — never claim | "Supports sensory needs" |
| Pressure | "Limited time only" | Spam filter trigger | "This week only" (infrequent) |
| Pressure | "Act now" / "Don't wait" | Spam filter trigger | "Whenever you're ready" |
| Financial | "FREE" in ALL CAPS | Spam filter trigger | "Free" in lowercase, sparingly |
| Typography | Excessive punctuation (!!!) | Spam filter trigger | One exclamation mark max |
| Typography | ALL CAPS subject lines | Spam filter trigger | Title case only |
| Urgency | Countdown timers in email | Spam filter (JS-based) | Text-based urgency only |
| Pricing | Dollar amounts in subject line | Spam filter trigger | Never put $ in subject line |

**BrightKidCo-Specific Forbidden Phrases (From Brand Docs):**

| Forbidden Phrase | Why | Deliverability Impact |
|-----------------|-----|----------------------|
| "Train your kid in 3 days" | Overpromise on emotional audience | High spam complaint risk |
| "Your child will be normal" | Damaging to autism community | High spam complaint risk |
| "Get him trained!" | Blames parent, aggressive | High spam complaint risk |
| "Don't give up!" | Triggers parent guilt | Medium spam complaint risk |
| "I built this company" (Lena voice) | Brand voice violation | Indirect — hurts engagement |

### 6.2 Technical Spam Avoidance Rules

**Text-to-Image Ratio:**

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                      TEXT-TO-IMAGE RATIO ENFORCEMENT                          ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║                    ❌ POOR (Image-Heavy → Spam Filter)                       ║
║                                                                              ║
║  ┌──────────────────────────────────────────────────────────────────┐       ║
║  │ ████████████████████████████████████████████████████████████████████     ║
║  │ 80% Images          10% Text          10% White Space            │       ║
║  │ ──── 20% TEXT RATIO — BELOW MINIMUM ────                        │       ║
║  └──────────────────────────────────────────────────────────────────┘       ║
║                                                                              ║
║                    ✅ GOOD (Klaviyo + Gmail Friendly)                        ║
║                                                                              ║
║  ┌──────────────────────────────────────────────────────────────────┐       ║
║  │ ███████████████████████████████████████████████████████████████   │       ║
║  │ 50% Text            30% Images          20% White Space          │       ║
║  │ ──── 50% TEXT RATIO — MEETS MINIMUM ────                        │       ║
║  └──────────────────────────────────────────────────────────────────┘       ║
║                                                                              ║
║  RULE: Minimum 40% text, maximum 50% images.                                ║
║  RULE: No single image >500KB. Total email <102KB HTML.                     ║
║  RULE: Every image MUST have: alt text, display:block, width/height set.    ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

**HTML Technical Requirements:**

| Rule | Specification | Why |
|------|--------------|-----|
| Max HTML size | <102KB | Gmail clips emails >102KB |
| Layout | Table-based | Outlook uses Word renderer — divs break |
| Max width | 600px | Universal email client support |
| Inline CSS | ALL styles inline | Gmail strips `<style>` tags |
| CTA buttons | Table-cell method (not `<a>` padding) | Outlook breaks padding-based CTAs |
| Images | `display:block` + `width` + `height` + `alt` | Spam filter + accessibility |
| Dark mode | Background: `#1a1a1a`, Text: `#f5f5f5` | Pure black/white triggers spam in some clients |
| Font minimum | 16px body, 14px minimum | Mobile readability + engagement |
| Tap targets | Minimum 44×44px | Mobile UX — Apple HIG |
| Unsubscribe | `{% unsubscribe %}` tag in every footer | CAN-SPAM compliance |
| Physical address | Company address in footer | CAN-SPAM compliance |
| List-Unsubscribe | Header must be present | Gmail/Yahoo requirement (Feb 2024) |

**Transactional vs Promotional Separation:**

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                    TRANSACTIONAL VS PROMOTIONAL EMAIL RULES                   ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  TRANSACTIONAL EMAILS (CAN-SPAM Exempt):                                     ║
║  ┌─────────────────────────────────────────────────────────────────────────┐ ║
║  │ • Order Confirmation                                                    │ ║
║  │ • Shipping Notification                                                 │ ║
║  │ • Arrived & Welcome                                                     │ ║
║  │                                                                         │ ║
║  │  RULE: Pure transactional content ONLY                                   │ ║
║  │  RULE: NO promotional content — no cross-sells, no discounts, no ads    │ ║
║  │  RULE: NO marketing banners, NO "you might also like" sections          │ ║
║  │  RULE: NO unsubscribe link required (but include one anyway — best      │ ║
║  │        practice)                                                        │ ║
║  └─────────────────────────────────────────────────────────────────────────┘ ║
║                                                                              ║
║  PROMOTIONAL EMAILS (Subject to CAN-SPAM):                                   ║
║  ┌─────────────────────────────────────────────────────────────────────────┐ ║
║  │ • Welcome Flow emails                                                    │ ║
║  │ • Cart / Checkout / Browse Abandonment                                   │ ║
║  │ • Post-Purchase Upsell                                                  │ ║
║  │ • Campaigns                                                              │ ║
║  │ • Level-Detection                                                        │ ║
║  │                                                                         │ ║
║  │  RULE: MUST include unsubscribe link                                     │ ║
║  │  RULE: MUST include physical address                                     │ ║
║  │  RULE: MUST have clear from name and subject line                        │ ║
║  └─────────────────────────────────────────────────────────────────────────┘ ║
║                                                                              ║
║  BRIGHTKIDCO SPECIFIC: The PP-Direct Upsell flow triggers on Order Placed   ║
║  but IS promotional. It must NOT be set as a transactional trigger.         ║
║  Use a separate trigger/delay rather than piggybacking on Order Placed.     ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

### 6.3 Sending Pattern Rules

| Rule | Detail |
|------|--------|
| Never send to "All Subscribers" | Always filter by engagement segment |
| Engagement-based sends only | 90-Day Engaged minimum for general campaigns |
| Weekend sends for brand content | Lower conversion, higher awareness |
| Best send days | Tuesday, Thursday (parent audience) |
| Best send times | 10 AM recipient timezone (parent morning window) |
| Second window | 8-10 PM (parent evening window — bedtime done) |
| Volume ramp | Never increase by more than 2x in a single send |
| Flow check before campaign | Ensure no flow is sending to same segment same day |
| A/B test subject lines | Every campaign — 30% test, 70% winner |
| Monitor reply-to inbox | Replies = positive engagement signal for mailbox providers |

### 6.4 Warm-Up vs Post-Warmup Content Rules

| Content Type | Weeks 1-2 | Weeks 3-4 | Weeks 5-6 | Post-Warmup |
|-------------|-----------|-----------|-----------|-------------|
| Educational | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes |
| Community Story | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes |
| Product Spotlight | ❌ No | ✅ Mild | ✅ Yes | ✅ Yes |
| Pricing Mention | ❌ No | ❌ No | ✅ Yes | ✅ Yes |
| Discount Codes | ❌ No | ❌ No | ✅ Yes (WELCOME10) | ✅ Yes |
| "Buy Now" CTA | ❌ No | ❌ No | ✅ Yes | ✅ Yes |
| Urgency/Scarcity | ❌ No | ❌ No | ❌ No (wait post-W6) | ✅ Sparingly |
| Flash Sales | ❌ No | ❌ No | ❌ No | ✅ Sparingly |
| Affiliate Links | ❌ No | ❌ No | ❌ No | ❌ Not planned |
| Hard-Sell Language | ❌ No | ❌ No | ❌ No | ❌ Never (brand voice) |

---

## 7. CONTENT SIGNATURE OPTIMIZATION

### 7.1 Two-Part Cloaking System

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                      CONTENT SIGNATURE CLOAKING SYSTEM                        ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  ┌─────────────────────────────────────────────────────────────────────────┐ ║
║  │  UNIVERSAL TRANSACTIONAL CLOAK                                           │ ║
║  │  ────────────────────────────────────────                                │ ║
║  │  WHAT: 300-400 word hidden text block in EVERY email                    │ ║
║  │  HOW: `display:none` div disguised as "Privacy/Security" notice        │ ║
║  │  WHY: Improves text-to-image ratio, saturates with high-priority       │ ║
║  │        keywords (communication, development, parenting support)         │ ║
║  │  PLACEMENT: Last element before footer in email template                │ ║
║  │  DEPLOYMENT: In ALL emails — campaign and flow                          │ ║
║  └─────────────────────────────────────────────────────────────────────────┘ ║
║                                                                              ║
║  ┌─────────────────────────────────────────────────────────────────────────┐ ║
║  │  SITUATIONAL CONVERSATIONAL CLOAK                                        │ ║
║  │  ────────────────────────────────────────                                │ ║
║  │  WHAT: ~300 word hidden block mimicking personal 1-to-1 email           │ ║
║  │  HOW: `display:none` div with conversational text styled like email     │ ║
║  │        body — uses first-person, friendly tone                          │ ║
║  │  WHY: Tricks Gmail's algorithmic classification into treating the       │ ║
║  │        email as personal correspondence (→ Primary tab)                 │ ║
║  │  DEPLOYMENT: Welcome Email #1 only, Abandonment Email #1 only (all     │ ║
║  │              types), Winback flows                                      │ ║
║  └─────────────────────────────────────────────────────────────────────────┘ ║
║                                                                              ║
║  ┌─────────────────────────────────────────────────────────────────────────┐ ║
║  │  GREY HAT CODE SNIPPET (Ayoub's Technique)                             │ ║
║  │  ────────────────────────────────────────                                │ ║
║  │  WHAT: Hidden code snippet that tricks Gmail/Outlook algorithms        │ ║
║  │  STATUS: Tested — works for Primary tab placement                      │ ║
║  │  RISK: Detection could get domain blacklisted from Gmail               │ ║
║  │  MONITOR: GPT will show warnings before blacklist                      │ ║
║  │  DEFERRED: Do NOT deploy during warming.                                 │ ║
║  │  Post-warmup consideration only — monitor GPT daily if deployed.        │ ║
║  └─────────────────────────────────────────────────────────────────────────┘ ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

### 7.2 Klaviyo Implementation of Transactional Cloak

**Step 1: Create Saved Block**

1. Navigate to Klaviyo > Content > Saved Blocks
2. Create new block → Custom HTML
3. Insert the cloak HTML (see below)
4. Name: `[CLOAK] Universal Transactional Cloak`
5. Save

**Cloak HTML Template:**
```html
<!-- Transactional Security Notice (hidden for display, visible to algorithms) -->
<div style="display:none !important; visibility:hidden; opacity:0; height:0; width:0; overflow:hidden; font-size:0; line-height:0; mso-hide:all;">
  <p>This email contains important information about your BrightKidCo order and account. Our team is available at support@brightkidco.com for any questions about your purchase, shipping status, product use, or return inquiries.</p>
  <p>BrightKidCo creates sensory-friendly potty training underwear designed specifically for children with autism, ADHD, SPD, and other neurodevelopmental differences. Our Body-Signal Learning Layer™ helps children develop interoceptive awareness — the ability to recognize and respond to internal body signals. This developmental approach to potty training focuses on sensory processing, body awareness, and communication rather than external rewards or pressure-based methods.</p>
  <p>For parents navigating autism potty training challenges, we provide educational resources, community support, and products designed with input from occupational therapists and BCBAs. Topics include interoception training, demand avoidance strategies, sensory defensiveness around toileting, and building body signal awareness in neurodivergent children.</p>
  <p>Our customer support team responds within 24 hours. Contact us at support@brightkidco.com or visit www.brightkidco.com/pages/contact. Review our shipping policy, return policy, and FAQ for additional information about your order experience.</p>
  <p>BrightKidCo — Built for the brain that learns differently.</p>
</div>
```

**Step 2: Apply to All Templates**

1. Open each email template in Klaviyo
2. Drag the saved block `[CLOAK] Universal Transactional Cloak` as the last element before the footer
3. Save template
4. Send test email → verify cloak is invisible in rendered email

**Step 3: Conversational Cloak Variants**

Create 4 separate saved blocks for situational deployment:

| Block Name | Deployed On | Tone |
|-----------|-------------|------|
| `[CLOAK] Conversational — Welcome #1` | Welcome Email #1 (all 4 level variants) | Warm welcome, personal story |
| `[CLOAK] Conversational — Cart #1` | Cart Abandonment Email #1 | "Hey, just checking in..." |
| `[CLOAK] Conversational — Checkout #1` | Checkout Abandonment Email #1 | "Noticed you started checkout..." |
| `[CLOAK] Conversational — Browse #1` | Browse Abandonment Email #1 | "Saw you were looking at..." |

### 7.3 Sender Persona Protocol

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                         SENDER PERSONA PROTOCOL                               ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  PHASE 1 (Weeks 1-6): Single Persona                                         ║
║  ┌─────────────────────────────────────────────────────────────────────────┐ ║
║  │ From: "Lena from BrightKidCo" <support@brightkidco.com>                 │ ║
║  │ Reply-To: support@brightkidco.com                                        │ ║
║  │ Rationale: Changing from address during warming resets reputation.       │ ║
║  │ Single sender is mandatory for first 6 weeks.                            │ ║
║  └─────────────────────────────────────────────────────────────────────────┘ ║
║                                                                              ║
║  PHASE 2 (Week 7+): Dual Persona (Post-Warmup Optimization)                  ║
║  ┌─────────────────────────────────────────────────────────────────────────┐ ║
║  │ BRAND ANNOUNCER                                                          │ ║
║  │ ────────────────                                                         │ ║
║  │ From: "Lena from BrightKidCo" <info@send.brightkidco.com>                │ ║
║  │ Used for: Campaigns, Welcome Flow, Cross-Sell, Review Requests           │ ║
║  │ Tone: Brand voice, promotional when needed, community-oriented           │ ║
║  └─────────────────────────────────────────────────────────────────────────┘ ║
║  ┌─────────────────────────────────────────────────────────────────────────┐ ║
║  │ HELPFUL AGENT                                                            │ ║
║  │ ────────────────                                                         │ ║
║  │ From: "Lena at BrightKidCo" <help@send.brightkidco.com>                  │ ║
║  │ Used for: Abandonment flows, Post-Purchase, Replenishment, Support       │ ║
║  │ Tone: Personal, conversational, direct, supportive                       │ ║
║  └─────────────────────────────────────────────────────────────────────────┘ ║
║                                                                              ║
║  RULE: Personality consistency — "Lena from BrightKidCo" is ALWAYS the      ║
║  person behind the email. The persona split is WHO she's being (brand       ║
║  voice vs helpful voice), not a different character.                        ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

### 7.4 Subject Line Optimization Rules

| Rule | Specification | Why |
|------|--------------|-----|
| Length | 6-10 words, max 40 characters (mobile) | Truncation on mobile = lower opens |
| Personalization | {{ first_name }} near start | 26% higher open rates |
| Emoji | Use sparingly — first position | 56% higher open rates with relevant emojis |
| Question Format | For engagement emails | 10% higher open rates |
| Numbers | In content/educational subject lines | 36% higher open rates |
| Parent Language | "toddler", "little one", "bedtime" | Audience resonance |
| ALL CAPS | NEVER | Spam filter trigger |
| $ | NEVER in subject line | Spam filter trigger |
| "Free" | NEVER in subject line | Spam filter trigger |
| Exclamation | Max 1 per subject line | Spam filter trigger |
| Preheader | Always — 85 chars, complements subject | Second most visible text on mobile |

**BKC Subject Line Framework:**
```
Subject: [Emoji] [Personalization] [Hook/Benefit] — [Context]
Preheader: [Elaboration / Different angle] [85 chars max]

Examples:
✨ {{ first_name }}, the body signal your child can't feel (yet)
🧒 3 signs your child is ready — and 1 that means "wait"
Anna, why traditional potty training fails for sensory kids
```

### 7.5 Preheader Text Rules

| Rule | Specification |
|------|--------------|
| Length | 85 characters maximum (before truncation on mobile) |
| Relation to Subject | Complement — DO NOT repeat the subject line |
| Content | Add a value proposition, different angle, or curiosity gap |
| Spam Avoidance | No pricing, no ALL CAPS, no excessive punctuation |
| Mobile Priority | Preheader is the SECOND thing parents see after subject |

**Preheader Formulas for BKC:**
- If subject is problem-focused → preheader is solution-hint
- If subject is educational → preheader is "you'll learn why"
- If subject is community → preheader is "read one parent's story"
- If subject is promotional → preheader is the guarantee/safety net

---

## 8. SENDING FREQUENCY RECOMMENDATIONS

### 8.1 Campaign Cadence (Post-Warmup)

| Scenario | Recommended Frequency | Max | Rationale |
|----------|---------------------|-----|-----------|
| Educational/Value Content | 2-3 campaigns/week | 4/week | Parents prefer quality over quantity |
| Promotional Period | 3-4 campaigns/week | 5/week | Holiday/event-driven increases OK |
| Launch Week | 4 campaigns/week | 5/week | New product/collection launch |
| Low Season | 1-2 campaigns/week | 3/week | Maintain engagement without burnout |
| Recovery Mode | 3 campaigns/week | 3/week | Maximum during 6-week recovery protocol |

**Combined Traffic Limit (Campaigns + Flows):**
- Never exceed 5 emails per recipient per week
- Target: 3-4 total emails per recipient per week
- Automated flows count toward this limit

### 8.2 Flow Frequency by Type

| Flow Type | Emails | Typical Duration | Per-Recipient Frequency |
|-----------|--------|-----------------|------------------------|
| Welcome (4 variants) | 8 per variant | 21 days | ~2.7/week (dense, then done) |
| Cart Abandonment | 3 | 72 hours | 3 emails in 3 days (then exits) |
| Checkout Abandonment | 2-3 | 24 hours | 2-3 emails in 1 day (then exits) |
| Browse Abandonment | 3 | 72 hours | 3 emails in 3 days (then exits) |
| PP-Direct Upsell | 2 | 3 days | 2 emails post-purchase (then exits) |
| PP-Level Detection | 1 | Day 14 only | Single email (GF only) |
| Transactional (3 flows) | 1 each | 3-10 days | 3 emails total (then exits) |

**Post-Warmup Flow Activation Sequence:**

| Flow | Week Activated | Monitoring Period | Volume Impact |
|------|---------------|-------------------|---------------|
| Welcome | Week 1 | Continuous (auto) | Low (new signups only) |
| Browse Abandonment | Week 3 | 48-72 hours | Low-Medium |
| Cart Abandonment | Week 5 | 48-72 hours | Medium |
| Checkout Abandonment | Week 5 | 48-72 hours | Medium |
| PP-Direct Upsell | Week 5 | 48-72 hours | Low |
| PP-Level Detection | Week 5 | 48-72 hours | Low |
| PP-Education | Week 7+ | 72 hours per flow | Medium |
| Replenishment | Week 7+ | 72 hours per flow | Low |
| Winback A | Week 9+ | 72 hours | Low |
| Winback B | Week 9+ | 72 hours | Low |
| FAQ/Objection | Week 11+ | 72 hours | Medium |
| Referral | Week 11+ | 72 hours | Low |
| Sunset | Week 6+ | Continuous (auto) | Very Low |

### 8.3 Send Time Optimization

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                   OPTIMAL SEND TIMES — BRIGHTKIDCO AUDIENCE                   ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  PRIMARY WINDOW: Tuesday, Thursday @ 10 AM recipient timezone               ║
║                                                                              ║
║  Why: Parents check email in two windows:                                    ║
║  ┌─────────────────────────────────────────────────────────────────────────┐ ║
║  │ 6-8 AM: Before kids wake up — brief scan, quick decisions              │ ║
║  │        → Best for abandoned cart, order confirmations                   │ ║
║  │ 8-10 PM: After kids are in bed — deeper reading                         │ ║
║  │        → Best for educational content, community stories                │ ║
║  └─────────────────────────────────────────────────────────────────────────┘ ║
║                                                                              ║
║  SECONDARY WINDOW: Saturday 9 AM — Lifestyle/Brand Content                   ║
║                                                                              ║
║  AVOID:                                                                      ║
║  ┌─────────────────────────────────────────────────────────────────────────┐ ║
║  │ Monday mornings   — Inbox overload (weekend backlog + weekly deals)     │ ║
║  │ Friday afternoons — Weekend prep mode — low engagement                  │ ║
║  │ 5-7 PM daily      — Dinner prep chaos — worst engagement window        │ ║
║  │ 12-2 PM daily     — School pickup / lunch — fragmented attention       │ ║
║  └─────────────────────────────────────────────────────────────────────────┘ ║
║                                                                              ║
║  ABANDONED CART TIMING:                                                      ║
║  ┌─────────────────────────────────────────────────────────────────────────┐ ║
║  │ Email 1: Within 1 hour of abandonment (20% higher recovery)             │ ║
║  │ Email 2: 24 hours later — target morning window                        │ ║
║  │ Email 3: 72 hours later — target evening window                         │ ║
║  └─────────────────────────────────────────────────────────────────────────┘ ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

### 8.4 Frequency by Avatar Level

| Level | Campaign Tolerance | Best Content Mix | Send Time Preference |
|-------|-------------------|-----------------|---------------------|
| Level 1 (Sarah) | 3-4/week | Educational + Urgency (Pre-K) | Morning (urgency-sensitive) |
| Level 2 (Lisa) | 2-3/week | Educational + Science-heavy | Evening (deeper reading) |
| Level 3 (Maria) | 1-2/week | Dignity-first + Community | Evening (emotional capacity) |
| General Fallback | 2-3/week | Cross-level (symptom language) | Mixed |

---

## 9. KLAVIYO TECHNICAL SETUP INSTRUCTIONS

### 9.1 Pre-Flight Checks

Before any Klaviyo configuration begins:

- [ ] Klaviyo account is active (support@brightkidco.com)
- [ ] Ayoub has admin access (ayoub@tenzamarketing.com)
- [ ] Dedicated Sender is configured: send.brightkidco.com
- [ ] Shopify integration is active and syncing events
- [ ] Klaviyo web tracking snippet is installed on Shopify theme
- [ ] DNS authentication shows green checkmarks in Klaviyo Settings > Domains

### 9.2 Custom Profile Properties Setup

Navigate to: Klaviyo > Settings > Custom Properties

Create these 6 custom profile properties:

| Property | Type | Description | Default |
|----------|------|-------------|---------|
| `avatar_level` | String | Subscriber's avatar level | `general` |
| `child_age` | String (optional) | Child's age if shared | Empty |
| `signup_source` | String | Acquisition channel | (value at signup) |
| `welcome_flow_completed` | Boolean | Has completed welcome | `false` |
| `last_purchase_pack_size` | String | Size of last purchase | Empty |
| `vip_customer` | Boolean | High LTV customer | `false` |

**Property Usage in Segmentation:**
- `avatar_level` → Primary routing key — determines Welcome Flow variant
- `child_age` → Age-based content calibration (future dynamic blocks)
- `signup_source` → Acquisition channel tracking
- `welcome_flow_completed` → Gates post-welcome flows
- `last_purchase_pack_size` → Routes to correct Replenishment path
- `vip_customer` → Phase 2+ VIP targeting

### 9.3 Tag Taxonomy Setup

Create exactly 15 tags in Klaviyo:

**Avatar Level Tags (4) — Set by popup:**
| Tag | Set By | Notes |
|-----|--------|-------|
| `avatar_level1` | Pop-up button 1 | ~35% audience |
| `avatar_level2` | Pop-up button 2 | ~40% audience (largest) |
| `avatar_level3` | Pop-up button 3 | ~25% audience |
| `avatar_general` | Pop-up button 4 | ~50% real volume (fallback) |

**Behavioral Tags (6) — Set by automation:**
| Tag | Trigger | Exit |
|-----|---------|------|
| `welcome_completed` | Welcome Flow finishes | Permanent |
| `welcome_completed_no_purchase` | Welcome ends without purchase | Purchase OR 60d inactivity |
| `post_purchase_active` | Purchase + engaged post-purchase | Engagement degrades |
| `at_risk_no_open` | No opens in 3-7 days | Opens detected |
| `inactive_60_days` | No opens/clicks for 60 days | Engagement detected |
| `inactive_120_days` | No opens/clicks for 120 days | Suppression trigger |

**Purchase Tags (5) — Set by purchase:**
| Tag | Trigger | Upsell Path |
|-----|---------|-------------|
| `buyer_1pair` | Purchased 1 Pair ($34.99) | Upgrade to 3+3 |
| `buyer_3plus3` | Purchased 3+3 Bundle ($79.99) | Upgrade to 5+5 |
| `buyer_5plus5` | Purchased 5+5 Bundle ($119.99) | Accessory Cross-Sell |
| `repeat_buyer` | Multiple purchases | Higher tier offers |
| `vip_buyer` | 3+ orders | VIP treatment |

### 9.4 Warming Segment Creation

Create these segments in Klaviyo > Segments:

**Engagement Segments (7):**

| Segment Name | Logic |
|-------------|-------|
| `[WARMING] Tier 2 — Initial Warm-Up` | Clicked Email at least once in last 30 days OR Was Added in last 15 days AND Can Receive Email = True |
| `[WARMING] 14-Day Engaged — Vanguard` | (Opened Email at least once in last 14 days OR Clicked Email at least once in last 14 days) AND Can Receive Email = True |
| `[WARMING] 30-Day Engaged` | (Opened Email at least once in last 30 days OR Clicked Email at least once in last 30 days) AND Can Receive Email = True |
| `[WARMING] 60-Day Engaged` | (Opened Email at least once in last 60 days OR Clicked Email at least once in last 60 days) AND Can Receive Email = True |
| `[WARMING] 90-Day Engaged` | (Opened Email at least once in last 90 days OR Clicked Email at least once in last 90 days) AND Can Receive Email = True |
| `[ADVANCED] VIP Clickers (90 Day)` | Clicked Email at least once in last 90 days AND Can Receive Email = True |
| `[ADVANCED] At-Risk Engagers (90 Day)` | Opened Email at least once in last 90 days AND Clicked Email 0 times in last 90 days |

**Advanced Segments (3):**

| Segment Name | Logic |
|-------------|-------|
| `[ADVANCED] Ghost Profiles` | Apple Privacy Open = True AND Clicked Email 0 times in last 120 days AND Placed Order 0 times in last 120 days |
| `[BOT] Known Fake Domains` | Email domain IN (mailinator.com, guerrillamail.com, 10minutemail.com, temp-mail.org, throwaway.email, yopmail.com, sharklasers.com, trashmail.com, mailnator.com, mailcatch.com, getnada.com, emailondeck.com, tempmail.com, tempr.email, fakeinbox.com, mailnesia.com, spambox.us, sneakemail.com, jetable.com, spamgourmet.com) |
| `[BOT] Non-Engaged Sleepers` | Received Email at least 10 times AND Opened Email 0 times all time AND Clicked Email 0 times all time |

**Master Suppression List:**

| Segment Name | Logic |
|-------------|-------|
| `[SUPPRESSED] Master Suppression List` | (Opened Email 0 times in last 120 days AND Clicked Email 0 times in last 120 days AND Placed Order 0 times in last 120 days) OR Unsubscribed = True OR Marked as Spam at least once OR Hard Bounce = True |

### 9.5 Flow Activation Order in Klaviyo

**Phase 1 Flows (9) — Activation Order by Warming Week:**

| Order | Flow Name | Week to Activate | Trigger | Notes |
|-------|-----------|-----------------|---------|-------|
| 1 | Order Confirmation | Week 1 (always on) | Order Placed | Pure transactional |
| 2 | Shipping Notification | Week 1 (always on) | Order Fulfilled | Pure transactional |
| 3 | Arrived & Welcome | Week 1 (always on) | Carrier Delivered | Pure transactional |
| 4 | Welcome Flow L1 | Week 1 | Form Submit + avatar_level1 | 8 emails |
| 5 | Welcome Flow L2 | Week 1 | Form Submit + avatar_level2 | 8 emails |
| 6 | Welcome Flow L3 | Week 1 | Form Submit + avatar_level3 | 8 emails |
| 7 | Welcome Flow GF | Week 1 | Form Submit + avatar_general | 8 emails |
| 8 | Browse Abandonment | Week 3 | Viewed Product + No Cart 24h | 3 emails |
| 9 | Cart Abandonment | Week 5 | Added to Cart + No Purchase 24h | 3 emails |
| 10 | Checkout Abandonment | Week 5 | Started Checkout + No Purchase 1h | 2-3 emails |
| 11 | PP-Direct Upsell | Week 5 | Order Placed (Day 1-3) | 2 emails |
| 12 | PP-Level Detection | Week 5 | Order Placed (Day 14, GF only) | 1 email |

### 9.6 Shopify-Klaviyo Integration Steps

1. **Connect Shopify:**
   - Klaviyo > Integrations > Shopify
   - Install Klaviyo-Shopify app
   - Authorize data sharing

2. **Verify Event Sync:**
   - Check that events are flowing: Placed Order, Fulfilled Order, Delivered Order
   - Verify product catalog is synced
   - Check that Viewed Product / Added to Cart / Started Checkout events populate

3. **Disable Duplicate Emails:**
   - Shopify > Settings > Notifications
   - Disable Shopify's default Order Confirmation email
   - Disable Shopify's default Shipping Confirmation email
   - Disable Shopify's default Arrived email
   - (Klaviyo will handle all transactional emails)

4. **Install Web Tracking:**
   - Verify Klaviyo JavaScript snippet is in Shopify theme.liquid
   - It should track: Viewed Product, Added to Cart, Started Checkout
   - Test by browsing the store and checking Klaviyo > Analytics > Live Events

### 9.7 Transactional Cloak Saved Block Setup

1. Klaviyo > Content > Saved Blocks > Create Block > Custom HTML
2. Paste the Transactional Cloak HTML
3. Name: `[CLOAK] Universal Transactional Cloak`
4. Save
5. Open each email template
6. Drag block into position as last element before footer
7. Save each template
8. Send test → verify cloak is invisible

### 9.8 Monitoring Dashboard Setup

Create a Klaviyo dashboard with these widgets:

| Widget Type | Metric | Purpose |
|-------------|--------|---------|
| Number | Open Rate (7d) | Overall engagement |
| Number | Click Rate (7d) | Overall engagement |
| Number | Bounce Rate (7d) | List quality |
| Number | Spam Complaint Rate (7d) | Content quality |
| Number | Unsubscribe Rate (7d) | Frequency check |
| Time Series | Open/Click/Bounce trend (30d) | Trend direction |
| Bar | Campaign Performance by Segment | Segment health |
| Number | GPT Domain Reputation (manual entry) | Gmail reputation |
| List | Active Flow Performance | Flow-by-flow health |

---

## 10. MONITORING DASHBOARD & ALERTS

### 10.1 Deliverability Monitoring Dashboard

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                  DELIVERABILITY MONITORING DASHBOARD                          ║
║                  Daily Check — 10 Minutes Max                                ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  ┌─────────────────────────────────────────────────────────────────────────┐ ║
║  │  DATE: _________  WEEK OF WARMING: ____  CHECKED BY: ________          │ ║
║  └─────────────────────────────────────────────────────────────────────────┘ ║
║                                                                              ║
║  ════════════ CORE METRICS (Last 7 Days) ════════════                       ║
║                                                                              ║
║  ┌──────────────┬────────────┬──────────┬───────────────────┐               ║
║  │ METRIC       │ CURRENT     │ TARGET   │ STATUS             │               ║
║  ├──────────────┼────────────┼──────────┼───────────────────┤               ║
║  │ Open Rate    │ [___]%     │ >[___]%  │ 🟢 🟡 🔴          │               ║
║  │ Click Rate   │ [___]%     │ >[___]%  │ 🟢 🟡 🔴          │               ║
║  │ Bounce Rate  │ [___]%     │ <0.5%    │ 🟢 🟡 🔴          │               ║
║  │ Spam Rate    │ [___]%     │ <0.03%   │ 🟢 🟡 🔴          │               ║
║  │ Unsub Rate   │ [___]%     │ <0.2%    │ 🟢 🟡 🔴          │               ║
║  │ List Size    │ [___]      │ —        │ —                  │               ║
║  └──────────────┴────────────┴──────────┴───────────────────┘               ║
║                                                                              ║
║  ════════════ GOOGLE POSTMASTER TOOLS ════════════                           ║
║                                                                              ║
║  ┌─────────────────────────────────────────────────────────────────────────┐ ║
║  │ Domain Reputation:   [High / Medium / Low / Bad / No Data]              │ ║
║  │ IP Reputation:       [High / Medium / Low / Bad / No Data]              │ ║
║  │ Auth Pass Rate:      [___]%                                              │ ║
║  │ Spam Rate:           [___]%                                              │ ║
║  │ Feedback Loop:       [___] complaints                                   │ ║
║  └─────────────────────────────────────────────────────────────────────────┘ ║
║                                                                              ║
║  ════════════ THIS WEEK'S CAMPAIGNS ════════════                            ║
║                                                                              ║
║  ┌──────┬──────────┬────────┬──────┬───────┬────────┬──────────┐           ║
║  │ #    │ Campaign │ Sent   │ Opens│ Clicks│ Spam   │ Segment  │           ║
║  ├──────┼──────────┼────────┼──────┼───────┼────────┼──────────┤           ║
║  │ 1    │ [name]   │ [___]  │ [___]│ [___] │ [___]  │ [___]    │           ║
║  │ 2    │ [name]   │ [___]  │ [___]│ [___] │ [___]  │ [___]    │           ║
║  │ 3    │ [name]   │ [___]  │ [___]│ [___] │ [___]  │ [___]    │           ║
║  └──────┴──────────┴────────┴──────┴───────┴────────┴──────────┘           ║
║                                                                              ║
║  ════════════ FLOW HEALTH ════════════                                       ║
║                                                                              ║
║  ┌──────────────┬────────┬────────┬────────┬────────┬──────────┐           ║
║  │ Flow         │ Active │ Sent(7d)│ Open %│ Click %│ Issues?   │           ║
║  ├──────────────┼────────┼────────┼────────┼────────┼──────────┤           ║
║  │ Welcome      │ 🟢     │ [___]  │ [___]  │ [___]  │ ___       │           ║
║  │ Browse Aband │ 🟢/🔴  │ [___]  │ [___]  │ [___]  │ ___       │           ║
║  │ Cart Aband   │ 🟢/🔴  │ [___]  │ [___]  │ [___]  │ ___       │           ║
║  │ Checkout Ab  │ 🟢/🔴  │ [___]  │ [___]  │ [___]  │ ___       │           ║
║  │ PP-Upsell    │ 🟢/🔴  │ [___]  │ [___]  │ [___]  │ ___       │           ║
║  │ PP-Level     │ 🟢/🔴  │ [___]  │ [___]  │ [___]  │ ___       │           ║
║  └──────────────┴────────┴────────┴────────┴────────┴──────────┘           ║
║                                                                              ║
║  ════════════ ALERTS & OBSERVATIONS ════════════                             ║
║                                                                              ║
║  ┌─────────────────────────────────────────────────────────────────────────┐ ║
║  │ 1. [___]                                                                 │ ║
║  │ 2. [___]                                                                 │ ║
║  │ 3. [___]                                                                 │ ║
║  └─────────────────────────────────────────────────────────────────────────┘ ║
║                                                                              ║
║  ════════════ ACTION ITEMS ════════════                                      ║
║                                                                              ║
║  ┌─────────────────────────────────────────────────────────────────────────┐ ║
║  │ ☐ [___]                                                                  │ ║
║  │ ☐ [___]                                                                  │ ║
║  │ ☐ [___]                                                                  │ ║
║  └─────────────────────────────────────────────────────────────────────────┘ ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

### 10.2 Alert Thresholds

| Condition | Alert Type | Notification | Response |
|-----------|-----------|-------------|----------|
| Bounce rate >1% | 🔴 CRITICAL | Immediate (SMS + Email) | HALT all sends, full list audit |
| Spam complaints >0.05% | 🔴 CRITICAL | Immediate (SMS + Email) | HALT all sends, content review |
| GPT "Low" reputation | 🔴 CRITICAL | Immediate (SMS + Email) | Code Red protocol |
| GPT "Bad" reputation | 🚨 EMERGENCY | Immediate (Phone) | Full send pause + recovery |
| Open rate drop >5% in 48h | 🟡 WARNING | Daily digest | Reduce volume, check segment |
| Bounce rate 0.5-0.99% | 🟡 WARNING | Daily digest | Investigate source quality |
| Unsubscribe rate >0.5% | 🟡 WARNING | Daily digest | Reduce frequency |
| Segment size anomaly | 🟡 WARNING | Daily digest | Check acquisition sources |
| ZeroBounce credits low | 🟡 WARNING | Weekly email | Top up credits |
| Flow not sending 48h | 🟡 WARNING | Weekly email | Check trigger/filters |

### 10.3 Monitoring Cadence

| Frequency | Tasks | Duration |
|-----------|-------|----------|
| Daily (Weeks 1-2) | Check dashboard metrics, GPT reputation, campaign performance | 10 min |
| Daily (Weeks 3-6) | Quick dashboard check, GPT review | 5 min |
| Weekly (Ongoing) | Full metrics review, flow health, segment size audit | 15 min |
| Monthly | Full hygiene checklist (10 items), DMARC report analysis | 45-60 min |
| Quarterly | BIMI consideration, persona strategy review, full deliverability audit | 2-3 hours |

---

## 11. POST-WARMUP OPERATIONS

### 11.1 Permanent Sending Cadence

Once the 6-week warming protocol is complete and DMARC has been escalated to `p=quarantine`:

| Parameter | Value |
|-----------|-------|
| Primary Sends | 90-Day Engaged segment, 3-4 campaigns/week |
| Broad Reach | 1 campaign/month to expanded list |
| Never Send To | "All Subscribers" or unengaged segments |
| Flow Management | All Phase 1 flows at full capacity |
| Phase 2 Flows | Activate one per week with 72h monitoring |
| DMARC Level | p=quarantine (escalate to p=reject at Week 10+) |

### 11.2 Monthly Deliverability Audit (First Monday)

| Phase | Focus | Tasks | Duration |
|-------|-------|-------|----------|
| 1 — Metrics | Review KPIs | Check open/click/bounce/spam trends vs benchmarks | 10 min |
| 2 — GPT | Reputation Check | Domain + IP reputation, auth pass rate, spam rate | 5 min |
| 3 — Authentication | DMARC Reports | Check easyDMARC/dmarcian for unauthorized sources | 10 min |
| 4 — List Hygiene | Segment Audit | Review 120-Day Unengaged, Ghost Profiles, bounce sources | 15 min |
| 5 — Planning | Next Month | Content plan, frequency check, segment adjustments | 10 min |

### 11.3 Key Performance Benchmarks (Post-Warmup)

| Metric | Target | Excellent | Red Flag |
|--------|--------|----------|----------|
| Open Rate | >35% | >40% | <25% |
| Click Rate | >3% | >4.5% | <2% |
| Bounce Rate | <0.5% | <0.3% | >1% |
| Spam Complaints | <0.05% | <0.03% | >0.1% |
| Unsubscribe Rate | <0.3% | <0.2% | >0.5% |
| GPT Domain Rep | Medium-High | High | Low |
| GPT Auth Pass Rate | >95% | >99% | <90% |
| Welcome Flow OR | >50% | >60% | <40% |
| Cart Abandon CR | >3% | >5% | <2% |
| Revenue per Email | $0.10+ | $0.15+ | <$0.05 |

### 11.4 Phase 2 Flow Activation (Post-Warmup)

After warming is complete, begin activating Phase 2 flows:

| Flow | Week | Emails | Level-Specific? | Monitoring |
|------|------|--------|-----------------|------------|
| PP-Extended Education | W7+ | 5 × 4 = 20 | ✅ 4 variants | 72h |
| PP-Mid Check-In | W7+ | 3 | ❌ Cross-level | 72h |
| Replenishment A (1 Pair) | W8+ | 3 | ❌ By purchase | 72h |
| Replenishment B (3+3) | W8+ | 2 | ❌ By purchase | 72h |
| Replenishment C (5+5) | W8+ | 2 | ❌ By purchase | 72h |
| Review Request | W9+ | 2 | ❌ Cross-level | 72h |
| Winback Path A | W9+ | 3 × 4 = 12 | ✅ 4 variants | 72h |
| Winback Path B | W10+ | 3 × 4 = 12 | ✅ 4 variants | 72h |

---

## 12. EMERGENCY & RECOVERY PROTOCOLS

### 12.1 Code Red Protocol

**Trigger:** GPT domain reputation drops to "Low" or "Bad"

```
┌─────────────────────────────────────────────────────────────────────────┐
│                      CODE RED — IMMEDIATE ACTIONS                        │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  Immediate (within 1 hour):                                             │
│  ┌─────────────────────────────────────────────────────────────────────┐│
│  │ 1. PAUSE ALL promotional campaigns and flows                        ││
│  │ 2. Leave ONLY transactional emails running                          ││
│  │ 3. Notify Ayoub + Giuliano                                          ││
│  └─────────────────────────────────────────────────────────────────────┘│
│                                                                         │
│  Day 1:                                                                 │
│  ┌─────────────────────────────────────────────────────────────────────┐│
│  │ 1. Enable Double Opt-In on all signup forms                         ││
│  │ 2. Gate Welcome Flow — first email must be opened before subsequent ││
│  │ 3. Add "Check your spam folder" CTA to welcome landing page          ││
│  │ 4. Send ONLY to VIP Clickers segment (highest engagement)           ││
│  │ 5. Reduce to 2 campaigns/week max, value-only content               ││
│  └─────────────────────────────────────────────────────────────────────┘│
│                                                                         │
│  Days 2-7: Intensive Care                                               │
│  ┌─────────────────────────────────────────────────────────────────────┐│
│  │ 1. Send to 14-Day Engaged segment only                              ││
│  │ 2. 3 campaigns/week, educational content ONLY                       ││
│  │ 3. Monitor GPT daily — wait for reputation to recover to "Medium"   ││
│  │ 4. Check DMARC reports for unauthorized sending sources             ││
│  │ 5. Remove any cloaks/grey hat techniques if deployed                ││
│  └─────────────────────────────────────────────────────────────────────┘│
│                                                                         │
│  If no improvement after 7 days:                                        │
│  ┌─────────────────────────────────────────────────────────────────────┐│
│  │ 1. 48-72 hour complete send pause                                   ││
│  │ 2. Full list audit (ZeroBounce + manual review)                     ││
│  │ 3. Full content review — check all recent sends for triggers        ││
│  │ 4. Review signup sources for bot/sleeper contamination              ││
│  │ 5. Consider new sending domain as last resort                       ││
│  └─────────────────────────────────────────────────────────────────────┘│
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

### 12.2 Spam Folder Remediation

**Signs of spam folder placement:**
- Open rate drops below 25% suddenly
- Click rate drops below 1%
- GPT domain reputation shows "Low" or "Bad"
- Support emails about "not receiving emails" increase

**6-Week Recovery Protocol:**

| Week | Segment | Volume | Content |
|------|---------|--------|---------|
| W1-2 | 14-Day Engaged only | 50-100/day | Value-only, educational |
| W3-4 | 30-Day Engaged | 250-500/day | 60%+ value-first |
| W5-6 | 60-Day → 90-Day Engaged | 1000+/day | Gradual re-introduction |

**Forbidden during recovery:**
- Discount codes
- "Buy Now" CTAs
- Countdown timers
- Urgency/scarcity tactics
- Affiliate/paid links
- Heavy imagery (maintain 60:40 text ratio)

### 12.3 Common Emergency Scenarios

| Scenario | Cause | Detection | Immediate Action |
|----------|-------|-----------|-----------------|
| Sudden open rate crash | Spam folder placement | GPT "Low", Klaviyo OR <25% | Code Red protocol |
| Bounce rate spike >2% | Contaminated list segment | Klaviyo bounce alert | HALT, full list verify |
| Spam complaint surge | Content mismatch or frequency | Klaviyo spam rate >0.1% | HALT, content audit |
| DKIM authentication failure | DNS record changed/expired | GPT auth rate <90% | Fix DNS records immediately |
| DMARC policy too aggressive | Escalated to p=reject too early | Legit email bouncing | Drop to p=quarantine |
| Grey hat technique detected | Google algorithm update | GPT warning | Remove from all templates |
| Shopify duplication | Both Klaviyo + Shopify sending | Duplicate order emails | Disable Shopify notifications |
| ZeroBounce integration fail | API key expired | New signups unverified | Fix integration, verify new signups |

### 12.4 Seed List Maintenance

Keep a seed list of 50-100 known, testable email addresses for:

- **Pre-send testing** — Preview how email renders across ESPs
- **Inbox placement testing** — Use GlockApps or similar for periodic checks
- **GPT baseline** — Ensure known good addresses are always in sends

**Seed List Composition:**
| Category | Count | Examples |
|----------|-------|----------|
| Internal Team | 5-10 | Ayoub, Giuliano, content team |
| Test Accounts | 5-10 | Gmail, Outlook, Yahoo, Apple, Proton |
| Known Customers | 20-30 | High-engagement, consented |
| Different Domains | 10-15 | Various ESPs (Gmail, Hotmail, iCloud, etc.) |
| Mobile Clients | 5-10 | iPhone Mail, Gmail App, Outlook App |

**Monthly Seed Check:**
- Send a campaign to seed list
- Manually check inbox placement for each seed address
- Verify rendering across email clients
- Document any deliverability issues

---

## APPENDIX A: Quick Reference Cards

### DNS Verification Commands

```bash
# SPF
dig TXT brightkidco.com +short

# DMARC
dig TXT _dmarc.brightkidco.com +short

# DKIM Records
dig CNAME klaviyo1._domainkey.send.brightkidco.com +short
dig CNAME klaviyo2._domainkey.send.brightkidco.com +short

# Custom Tracking
dig CNAME click.brightkidco.com +short

# MX Record
dig MX send.brightkidco.com +short

# Blacklist Check
# Visit: https://mxtoolbox.com/domain/send.brightkidco.com
```

### Warming Benchmarks by Week

| Week | Open Rate Target | Bounce Max | Spam Max | Volume Cap |
|------|-----------------|-----------|---------|------------|
| 1 | >50% | <0.5% | <0.03% | 50-100/day |
| 2 | >50% | <0.5% | <0.03% | 100-250/day |
| 3 | >45% | <0.5% | <0.03% | 250-500/day |
| 4 | >45% | <0.5% | <0.03% | 500-1000/day |
| 5 | >40% | <0.5% | <0.05% | 1000-2000/day |
| 6 | >40% | <0.5% | <0.05% | 2000+/day |

### Content Allowed Matrix

| Content Type | W1-2 | W3-4 | W5-6 | Post |
|-------------|------|------|------|------|
| Educational | ✅ | ✅ | ✅ | ✅ |
| Community/Stories | ✅ | ✅ | ✅ | ✅ |
| Product Features | ❌ | ✅ Mild | ✅ | ✅ |
| Pricing | ❌ | ❌ | ✅ | ✅ |
| Discount Codes | ❌ | ❌ | ✅ WELCOME10 | ✅ |
| "Buy Now" CTAs | ❌ | ❌ | ✅ | ✅ |
| Urgency/Scarcity | ❌ | ❌ | ❌ | ✅ Sparse |

### Contact

**Document Owner:** Ops Team
**Klaviyo Admin:** Ayoub (ayoub@tenzamarketing.com)
**Brand Owner:** Giuliano
**DNS Provider:** Ionos (support@brightkidco.com inbox)
**Email Verification:** ZeroBounce (recommended — setup pending)

---

> **End of Deliverability Plan**
> 
> This document is the complete technical infrastructure plan for BrightKidCo email deliverability.
> All 20 pre-warming gaps identified in Layer 36 are addressed with specific remediation steps.
> Critical path to first send: DNS → GPT → ZeroBounce → Segments → Content → Go.
> Estimated time to first send: 3-4 days.
> Total warming duration: 6 weeks.
> Post-warmup: Permanent 90-Day Engaged cadence with monthly audits.
