# DNS & Domain Authentication Setup

**Item:** Section 7, Item 5 — Klaviyo Infrastructure & Template Setup
**Source:** Giuliano-Demands.md Sections 15 (Klaviyo Implementation), 26 (Deliverability Prerequisites), 32 (Delivery & Sending Rules)
**Sending Domain:** `send.brightkidco.com`
**Platform:** Klaviyo
**Last updated:** 2026-05-26

---

## Overview

Before any email can be sent from the `send.brightkidco.com` domain, it must be authenticated with three DNS record types: SPF, DKIM, and DMARC. Without these records, email providers (Gmail, Outlook, Yahoo, etc.) will either reject messages outright or route them to spam folders. This document provides the exact DNS values, setup steps, and verification procedures.

**Why a subdomain?** BrightKidCo's primary domain is `brightkidco.com`. Klaviyo recommends using a dedicated sending subdomain (`send.brightkidco.com`) to protect the primary domain's reputation. If the sending subdomain ever builds a poor reputation (spam complaints, high bounce rates), the primary domain remains unaffected.

---

## 1. SPF Record (Sender Policy Framework)

SPF tells receiving mail servers which IP addresses are authorized to send email on behalf of `send.brightkidco.com`. Klaviyo provides a dedicated SPF include.

### Record

| Field | Value |
|-------|-------|
| **Type** | TXT |
| **Host/Name** | `send.brightkidco.com` |
| **Value** | `v=spf1 include:spf.klaviyo.com ~all` |
| **TTL** | 3600 (1 hour) or as recommended by DNS provider |

### Explanation

- `v=spf1` — SPF version identifier
- `include:spf.klaviyo.com` — Authorizes all IP ranges used by Klaviyo's sending infrastructure
- `~all` — Softfail. Tells receiving servers to mark emails that fail SPF as suspicious (not reject). Start with `~all`; move to `-all` (hardfail) only after all legitimate sending paths are confirmed.

### Where to Add

In your DNS provider (Cloudflare, Route53, Namecheap, GoDaddy, etc.):
1. Navigate to DNS settings for `brightkidco.com`
2. Add a TXT record with host `send` (or `send.brightkidco.com` depending on provider)
3. Enter the value: `v=spf1 include:spf.klaviyo.com ~all`
4. Save and wait for propagation (typically 5-30 minutes, up to 48 hours)

### Common Pitfalls

- **Multiple SPF records:** A domain MUST have only one SPF record. Multiple SPF records cause SPF FAIL (permanent error). If an existing SPF record exists on `brightkidco.com`, leave it — the subdomain `send.brightkidco.com` gets its own record.
- **Include limit:** SPF has a 10-include lookup limit. Klaviyo's include counts as 1 lookup including its nested lookups.
- **`-all` too early:** Do NOT use `-all` (hardfail) until you're certain no other service sends as `send.brightkidco.com`. Start with `~all`.

---

## 2. DKIM Records (DomainKeys Identified Mail)

DKIM adds a cryptographic digital signature to every outgoing email. Receiving servers verify the signature against the public key published in DNS. Klaviyo generates two DKIM records per sending domain.

### Obtaining DKIM Records from Klaviyo

1. In Klaviyo, go to **Settings → Domains → Add Domain**
2. Enter `send.brightkidco.com`
3. Klaviyo generates two DKIM records — each is a CNAME that points to a Klaviyo-managed value

### Records

| Field | Record 1 | Record 2 |
|-------|----------|----------|
| **Type** | CNAME | CNAME |
| **Host/Name** | `klav1._domainkey.send.brightkidco.com` | `klav2._domainkey.send.brightkidco.com` |
| **Target/Value** | `klav1.dkim.klaviyo.com` | `klav2.dkim.klaviyo.com` |
| **TTL** | 3600 (1 hour) | 3600 (1 hour) |

**Note:** The exact hostnames (klav1, klav2) and targets are provided by Klaviyo when you register the domain in their UI. The values above are the standard Klaviyo DKIM CNAME targets. If Klaviyo provides different selector names, use their values.

### Where to Add

1. Navigate to DNS settings for `brightkidco.com`
2. Add two CNAME records:
   - Host: `klav1._domainkey.send` → Target: `klav1.dkim.klaviyo.com`
   - Host: `klav2._domainkey.send` → Target: `klav2.dkim.klaviyo.com`
3. Save and wait for propagation

### Why Two Records

Klaviyo uses dual-DKIM (two signatures per email) for higher deliverability. Both signatures must resolve. One provides primary signing, the other provides redundancy. If one key rotates, the other continues working.

### DKIM Key Rotation

Klaviyo rotates DKIM keys periodically. When rotation happens:
- A new CNAME record is generated (e.g., `klav3._domainkey.send.brightkidco.com`)
- The old record can be removed after 14 days
- Klaviyo sends a notification when rotation is pending

---

## 3. DMARC Policy (Domain-based Message Authentication, Reporting & Conformance)

DMARC tells receiving servers what to do when an email fails both SPF AND DKIM. It also provides reporting so you can monitor who is sending email as your domain.

### DMARC Progression Strategy

Start with monitoring only (`p=none`), then gradually tighten as you validate legitimate sending sources.

#### Phase 1 — Monitor (Weeks 1-4)

| Field | Value |
|-------|-------|
| **Type** | TXT |
| **Host/Name** | `_dmarc.send.brightkidco.com` |
| **Value** | `v=DMARC1; p=none; rua=mailto:dmarc-reports@brightkidco.com; ruf=mailto:dmarc-forensics@brightkidco.com; pct=100; fo=1` |
| **TTL** | 3600 (1 hour) |

**Effect:** No emails are blocked. Reports are sent to the reporting addresses. Use this phase to:
- Verify all legitimate sending sources pass SPF and DKIM
- Check for unauthorized senders
- Build baseline deliverability data

#### Phase 2 — Quarantine (Weeks 5-8)

| Field | Value |
|-------|-------|
| **Type** | TXT |
| **Host/Name** | `_dmarc.send.brightkidco.com` |
| **Value** | `v=DMARC1; p=quarantine; rua=mailto:dmarc-reports@brightkidco.com; ruf=mailto:dmarc-forensics@brightkidco.com; pct=25; fo=1` |
| **TTL** | 3600 (1 hour) |

**Effect:** 25% of failing emails are sent to spam (quarantine). Increase `pct` gradually:
- Week 5-6: `pct=25`
- Week 7-8: `pct=50`
- Week 9-10: `pct=75`
- Week 11+: `pct=100`

**Trigger to stay at current pct:** If after 7 days at a given pct, spam complaint rate exceeds 0.03% or bounce rate exceeds 1.0%, hold at current level and investigate.

#### Phase 3 — Reject (Week 12+, subject to monitoring)

| Field | Value |
|-------|-------|
| **Type** | TXT |
| **Host/Name** | `_dmarc.send.brightkidco.com` |
| **Value** | `v=DMARC1; p=reject; rua=mailto:dmarc-reports@brightkidco.com; ruf=mailto:dmarc-forensics@brightkidco.com; pct=100; fo=1` |
| **TTL** | 3600 (1 hour) |

**Effect:** Emails failing SPF AND DKIM are rejected outright. Only reach this phase after:
- Confirming all legitimate senders pass authentication
- Running at p=quarantine pct=100 for at least 2 weeks with <0.01% spam complaints
- No reports of legitimate email being quarantined

### DMARC Tag Reference

| Tag | Purpose | Our Value |
|-----|---------|-----------|
| `v` | DMARC version | `DMARC1` |
| `p` | Policy | `none` → `quarantine` → `reject` |
| `rua` | Aggregate report URI (XML reports) | `mailto:dmarc-reports@brightkidco.com` |
| `ruf` | Forensic report URI (per-failure) | `mailto:dmarc-forensics@brightkidco.com` |
| `pct` | Percentage of emails subject to policy | Start 100, reduce for gradual rollout |
| `fo` | Forensic reporting options | `1` (generate report on any auth failure) |
| `aspf` | Strict SPF alignment (optional) | Not used initially; add `aspf=s` later |
| `adkim` | Strict DKIM alignment (optional) | Not used initially; add `adkim=s` later |

### DMARC Reporting Addresses

- **Aggregate reports (rua):** `dmarc-reports@brightkidco.com` — Daily XML reports from Google, Yahoo, Microsoft, etc. showing authentication results and email volume. Use a DMARC analyzer tool (e.g., Postmark, Dmarcian, URIports) to parse these.
- **Forensic reports (ruf):** `dmarc-forensics@brightkidco.com` — Per-failure reports (high volume on large domains, use with caution).

Both reporting addresses must exist and accept email. Create them as aliases in the primary domain's email system or set up dedicated DMARC analysis inboxes.

---

## 4. From Addresses & Sending Purposes

Three distinct from-addresses on the `send.brightkidco.com` subdomain, each serving a specific purpose per demands Section 15 (line 581-583) and Section 26 (line 1114-1117):

| From Name | From Address | Purpose | Category | Reply-To |
|-----------|-------------|---------|----------|----------|
| Lena from BrightKidCo | `support@send.brightkidco.com` | Customer support, Lena sign-off, primary sender | Marketing/Transactional mixed | `support@brightkidco.com` |
| BrightKidCo Orders | `orders@send.brightkidco.com` | Order confirmation, shipping, receipts | Transactional only | `support@brightkidco.com` |
| BrightKidCo | `hello@send.brightkidco.com` | Marketing campaigns, newsletters, promotions | Marketing | `support@brightkidco.com` |

### Sending Rules

| Address | During Domain Warming (Weeks 1-2) | Post-Warming (Week 3+) |
|---------|----------------------------------|----------------------|
| `support@send.brightkidco.com` | ALL emails use this address | Marketing emails migrate to `hello@` |
| `orders@send.brightkidco.com` | Transactional only (Day 1) | Transactional always |
| `hello@send.brightkidco.com` | DO NOT USE — splits reputation | Marketing sends only |

**Critical rule (per demands Section 32, line 1267-1269):** During weeks 1-2 domain warming, use `"Lena from BrightKidCo" <support@send.brightkidco.com>` as the primary sending address for ALL marketing and welcome emails. `orders@send.brightkidco.com` is also active from Day 1 for transactional emails only (order confirmations, shipping notifications, receipts). `hello@send.brightkidco.com` must NOT be used during warming — adding new from-addresses during warming splits reputation signals. Introduce `hello@` persona AFTER domain reputation is established (post-week 6).

### Reply-To Configuration

All from-addresses must reply to `support@brightkidco.com` (the primary domain, not the sending subdomain). This ensures:
- Customer replies go to a monitored inbox
- Reply-to domain is the brand's primary domain (consistent with brand trust)
- Reply prompts and human responses drive the #1 deliverability signal

### From Address Setup in Klaviyo

1. **Settings → Domains → Sending Addresses**
2. Add each from address
3. Klaviyo sends a verification email to each address — confirm via the link
4. Set default from address to `support@send.brightkidco.com` during warming
5. After warming, assign per-flow from addresses in flow settings

---

## 5. Step-by-Step DNS Setup Instructions

### Prerequisites

- Access to DNS provider for `brightkidco.com`
- Klaviyo account with admin access
- Monitoring inbox for DMARC reports (e.g., `dmarc-reports@brightkidco.com`)
- Google Postmaster Tools account (for domain reputation monitoring)

### Step 1 — Register Sending Domain in Klaviyo

1. Log into **Klaviyo → Settings → Domains → Add Domain**
2. Enter: `send.brightkidco.com`
3. Klaviyo provides the exact DKIM CNAME values — record them
4. Leave the Klaviyo page open — you'll return to verify

### Step 2 — Add DNS Records

In your DNS provider's control panel, add these records:

1. **SPF TXT record:**
   - Type: TXT
   - Name: `send`
   - Value: `v=spf1 include:spf.klaviyo.com ~all`
   - TTL: 3600

2. **DKIM CNAME records:**
   - Type: CNAME
   - Name: `klav1._domainkey.send`
   - Target: `klav1.dkim.klaviyo.com`
   - TTL: 3600
   - Type: CNAME
   - Name: `klav2._domainkey.send`
   - Target: `klav2.dkim.klaviyo.com`
   - TTL: 3600

3. **DMARC TXT record:**
   - Type: TXT
   - Name: `_dmarc.send`
   - Value: `v=DMARC1; p=none; rua=mailto:dmarc-reports@brightkidco.com; ruf=mailto:dmarc-forensics@brightkidco.com; pct=100; fo=1`
   - TTL: 3600

### Step 3 — Verify DNS Propagation

Wait 5-30 minutes for DNS propagation, then verify:

```bash
# SPF check
dig TXT send.brightkidco.com

# DKIM checks
dig CNAME klav1._domainkey.send.brightkidco.com
dig CNAME klav2._domainkey.send.brightkidco.com

# DMARC check
dig TXT _dmarc.send.brightkidco.com
```

### Step 4 — Verify in Klaviyo

1. In Klaviyo, click **Verify** on the domain registration page
2. Klaviyo checks all three record types
3. All show green/passed → domain is authenticated
4. If any record fails, check the exact hostname syntax — this is the most common issue

### Step 5 — Add From Addresses

1. **Settings → Domains → Sending Addresses → Add Email**
2. Add `support@send.brightkidco.com` → verify via confirmation email
3. Add `orders@send.brightkidco.com` → verify via confirmation email
4. Add `hello@send.brightkidco.com` → verify via confirmation email
5. Set default from: `support@send.brightkidco.com`

### Step 6 — Configure Reply-To

1. In each Klaviyo sending address, set **Reply-To Email** to `support@brightkidco.com`
2. In each flow, ensure the Reply-To header is set per flow configuration

### Step 7 — Set Up DMARC Reporting Inbox

1. Create inboxes (or aliases) for `dmarc-reports@brightkidco.com` and `dmarc-forensics@brightkidco.com`
2. Optionally sign up for a DMARC analyzer (URIports, Dmarcian, Postmark) and configure it to read the aggregate report inbox
3. Check reports weekly during phase 1 (p=none) to identify all legitimate senders

---

## 6. Verification & Testing Steps

### Pre-Send Verification

Before sending any real emails:

1. **SPF check:** Use [kitterman.com/spf/validate](https://www.kitterman.com/spf/validate.html) or `dig TXT send.brightkidco.com` — confirm `include:spf.klaviyo.com` is present and the SPF record passes validation.

2. **DKIM check:** Use a DKIM validator (e.g., [dkimvalidator.com](https://www.dkimvalidator.com/)) — send a test email from Klaviyo to the validator's address and confirm DKIM signature passes.

3. **DMARC check:** Use [dmarcian.com/dmarc-inspector](https://dmarcian.com/dmarc-inspector/) — confirm the DMARC record parses correctly and `p=none` is in effect.

4. **Full auth check:** Use [mail-tester.com](https://www.mail-tester.com/) (free 3 tests/day):
   - Send a Klaviyo test email to the mail-tester address
   - Score target: 10/10
   - Minimum 9/10 before any send

5. **Google Postmaster Tools:**
   - Add `send.brightkidco.com` to Google Postmaster Tools
   - Confirm domain is verified
   - Check for any authentication warnings

### Ongoing Monitoring

| Check | Frequency | Tool |
|-------|-----------|------|
| SPF/DKIM/DMARC status | Weekly | Klaviyo domain settings |
| DMARC aggregate reports | Weekly | DMARC analyzer |
| Google Postmaster reputation | Daily | Google Postmaster Tools |
| Mail-tester score | Before each campaign | mail-tester.com |
| Spam complaint rate | After each send | Klaviyo analytics |

### Troubleshooting Common DNS Issues

| Symptom | Likely Cause | Fix |
|---------|-------------|-----|
| SPF fails — "permerror" | Multiple SPF records | Remove duplicate SPF records; ensure only one exists |
| DKIM fails — "no key" | CNAME not propagated or hostname wrong | Verify `klav1._domainkey.send.brightkidco.com` CNAME resolves; check Klaviyo for exact selector names |
| DMARC fails — "unknown" | DMARC record not published | Check `_dmarc.send.brightkidco.com` TXT record exists |
| SPF passes but email goes to spam | SPF softfail (`~all`) — no other auth | Check DKIM and DMARC separately |
| DKIM passes but SPF fails | Sender IP not in Klaviyo's SPF include | Verify `include:spf.klaviyo.com` is spelled correctly (klaviyo, not klavyio) |
| DMARC reports not arriving | Reporting inbox rejects reports | Check that `dmarc-reports@brightkidco.com` accepts email; some servers filter DMARC reports |
| Klaviyo shows domain unverified | DNS records not fully propagated | Wait 24-48 hours for full propagation; check with `dig` rather than browser-based tools |

### Verification Email

Send a test email from Klaviyo to a Gmail address, then:

1. Open the email in Gmail
2. Click the **three dots → Show original**
3. Check:
   - `SPF: PASS`
   - `DKIM: PASS`
   - `DMARC: PASS`
4. If any shows FAIL, investigate using the troubleshooting table above

---

## 7. Google Postmaster Tools Setup

Per demands Section 26 (line 1106), Google Postmaster Tools must be configured for deliverability monitoring.

1. Go to [postmaster.google.com](https://postmaster.google.com)
2. Sign in with a Google account that has `@brightkidco.com` — Google verifies domain ownership via:
   - DNS TXT record (recommended — add a verification TXT record to `brightkidco.com`)
   - Or HTML file upload
3. Add `send.brightkidco.com` as a domain
4. Verify domain ownership via the DNS method (adds a TXT record with a Google-provided value — remove after verification)
5. Postmaster Tools now reports:
   - **Reputation:** IP reputation (bad/neutral/good/high)
   - **Spam rate:** User-reported spam rate
   - **Authentication:** SPF/DKIM/DMARC pass rates
   - **Feedback loop:** Gmail spam complaint rate

### Reputation Response Protocol

| Reputation | Action |
|------------|--------|
| High/Good | Normal sending |
| Neutral | Monitor; review authentication pass rates |
| Bad | Activate Code Red Protocol (see demands Section 32, line 1277-1283) |

---

## 8. Deliverability Monitoring Setup

Per demands Section 26 (line 1105-1112):

### ZeroBounce List Verification

- Run all new subscriber lists through ZeroBounce before first send
- Frequency: Weekly for all new subscribers; monthly for full list
- Remove invalid, abuse, and spam-trap addresses from all segments
- Target bounce rate: <0.5%

### Monthly Hygiene Checklist (from demands Section 32, line 1304-1309)

1. Review bounce rate trend (target <0.5%)
2. Review spam complaint rate (target <0.01%; warning threshold <0.03%)
3. Verify Sunset Flow is live and processing
4. Review 120-Day Unengaged segment size
5. Export Ghost Profiles for manual suppression

### Metrics Thresholds (from demands Section 32, line 1311-1315)

| Metric | Target | Warning | Critical |
|--------|--------|---------|----------|
| Bounce Rate | <0.5% | 0.5-1.0% | >1.0% |
| Spam Complaint Rate | <0.01% | 0.01-0.03% | >0.03% |

---

## Appendix A: Summary of All DNS Records

| Record Type | Name/Host | Value/Target | Purpose |
|-------------|-----------|-------------|---------|
| TXT | `send.brightkidco.com` | `v=spf1 include:spf.klaviyo.com ~all` | SPF — authorize Klaviyo sending IPs |
| CNAME | `klav1._domainkey.send.brightkidco.com` | `klav1.dkim.klaviyo.com` | DKIM — signing key 1 |
| CNAME | `klav2._domainkey.send.brightkidco.com` | `klav2.dkim.klaviyo.com` | DKIM — signing key 2 |
| TXT | `_dmarc.send.brightkidco.com` | `v=DMARC1; p=none; rua=mailto:dmarc-reports@brightkidco.com; ...` | DMARC — policy (start with none) |

## Appendix B: DMARC Progression Timeline

| Phase | Duration | DMARC Policy | Action |
|-------|----------|-------------|--------|
| Monitor | Weeks 1-4 | `p=none; pct=100` | Review reports, verify all senders |
| Quarantine (25%) | Weeks 5-6 | `p=quarantine; pct=25` | Gradual enforcement |
| Quarantine (50%) | Weeks 7-8 | `p=quarantine; pct=50` | Increase enforcement |
| Quarantine (75%) | Weeks 9-10 | `p=quarantine; pct=75` | Increase enforcement |
| Quarantine (100%) | Week 11 | `p=quarantine; pct=100` | Full quarantine |
| Reject | Week 12+ | `p=reject; pct=100` | Full enforcement (after validation) |

Move to next phase only after 7+ days at current phase with spam complaints <0.01% and bounce rate <0.5%.

## Appendix C: From Address Summary

| From Name | Address | Used For | Active During Warming |
|-----------|---------|----------|----------------------|
| Lena from BrightKidCo | `support@send.brightkidco.com` | ALL emails initially; later support & welcome | YES (sole address) |
| BrightKidCo Orders | `orders@send.brightkidco.com` | Order confirmations, shipping, receipts | YES (Day 1 transactional) |
| BrightKidCo | `hello@send.brightkidco.com` | Campaigns, newsletters, promotions | NO (post-week 6 only) |
| Reply-To | `support@brightkidco.com` | All replies (primary domain) | YES |
