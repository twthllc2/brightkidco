# Deliverability Monitoring Dashboard

**BrightKidCo — Klaviyo Infrastructure**

**Source:** Giuliano-Demands.md Section 26 (Deliverability Prerequisites) + Section 32 (Deliverability & Sending Rules)

**Last updated:** 2026-05-26

---

## Table of Contents

1. [Metrics Thresholds & Alert Levels](#1-metrics-thresholds--alert-levels)
2. [Escalation & Recovery Procedures](#2-escalation--recovery-procedures)
3. [ZeroBounce List Verification Schedule](#3-zerobounce-list-verification-schedule)
4. [Google Postmaster Tools Setup Guide](#4-google-postmaster-tools-setup-guide)
5. [Monthly Hygiene Checklist](#5-monthly-hygiene-checklist)
6. [Sunset Protocol (120-Day Unengaged)](#6-sunset-protocol-120-day-unengaged)
7. [Bot Detection & Suppression](#7-bot-detection--suppression)
8. [Klaviyo Implementation: Suppression Lists](#8-klaviyo-implementation-suppression-lists)
9. [Sensitive Content → Deliverability Impact](#9-sensitive-content--deliverability-impact)

---

## 1. Metrics Thresholds & Alert Levels

The following thresholds are sourced from **Giuliano-Demands.md Section 32** and define the monitoring dashboard alert levels.

### Bounce Rate

| Level | Threshold | Action |
|-------|-----------|--------|
| ✅ Healthy | < 0.5% | Normal operations — no action required |
| ⚠️ Warning | 0.5% – 1.0% | Investigate source; review recent sends for list quality issues |
| 🚨 Critical | > 1.0% | Immediate pause of all sends; audit list sources; run ZeroBounce verification on all recently-added segments |
| 🔴 Emergency | — | Bounce rate does not have a separate Emergency level (use spam complaint Emergency trigger) |

### Spam Complaint Rate

| Level | Threshold | Action |
|-------|-----------|--------|
| ✅ Healthy | < 0.01% | Normal operations |
| ⚠️ Warning | 0.01% – 0.03% | Review recent email content; check engagement by segment; verify unsubscribe flow is working |
| 🚨 Critical | > 0.03% | Pause promotional sends; audit content for triggering language; verify re-engagement flow; review segment targeting |
| 🔴 Emergency | > 0.05% | **Full send pause.** Immediate review of all content, list sources, and sending infrastructure. Engage leadership. Execute Code Red Protocol (see §2.3). |

> **Authoritative Source:** Giuliano-Demands.md Section 32 — Metrics Thresholds table (lines 1312-1315).

---

## 2. Escalation & Recovery Procedures

### 2.1 Warning Level Recovery (Bounce 0.5-1.0% / Spam 0.01-0.03%)

**Trigger:** Automated dashboard alert when metric enters Warning range.

**Actions:**
1. Review last 7 days of sends — check for any list source issues or segment targeting errors
2. Verify ZeroBounce verification ran in the last 7 days
3. Check Google Postmaster Tools for reputation trend direction
4. Review unsubscribe rate in parallel — if elevated, check content quality
5. No send pause needed, but adjust next campaign segment to most-engaged only
6. Log incident in monitoring tracker with findings

**Escalation:** If Warning persists > 7 days without improvement → escalate to Critical response.

### 2.2 Critical Level Recovery (Bounce > 1.0% / Spam > 0.03%)

**Trigger:** Metric crosses Critical threshold.

**Actions:**
1. **Immediate** — Pause all promotional and campaign sends
2. Keep transactional emails running (orders, shipping confirmations) — they carry reputation separately
3. Run emergency ZeroBounce verification on entire list
4. Audit last 14 days of sends:
   - Content review: flag any forbidden phrases, aggressive CTAs, or sensitive content triggers
   - Segment review: verify segments are correctly targeted
   - Source review: check any new list imports or pop-up changes
5. Review Google Postmaster Tools reputation score
6. Send only to VIP Clickers segment (most engaged top 10-15%)
7. Enable Double Opt-In for all new subscribers if not already active
8. Notify team lead — documented decision to resume sends requires approval

**Recovery:**
- Return to Warning after 7 days of metrics below Critical threshold
- Gradual reintroduction: send only to engagement segment (90-Day Engaged minimum), monitor for 48h between sends
- Full resume only after 14 consecutive days below Critical

### 2.3 Emergency Level — Code Red Protocol (Spam > 0.05%)

**Trigger:** Spam complaint rate exceeds 0.05% OR Google Postmaster Tools reputation is "Bad."

From **Giuliano-Demands.md Section 32**, the Code Red Protocol:

1. **Enable Double Opt-In** for all new subscribers
2. **Modified Two-Step Welcome Flow** — gate all welcome emails behind open of Email #1
3. **"Check your spam folder" messaging** on sign-up confirmation pages
4. **Send ONLY to VIP Clickers segment** for first 2 weeks of recovery
5. **Consider 48-72 hour complete sending pause** for reputation reset
6. **Full investigation** — review every mail sent in last 30 days for compliance
7. **Engage leadership** — document root cause and recovery plan

**Recovery criteria:**
- Spam complaint rate < 0.01% for 14 consecutive days
- Google Postmaster Tools reputation returns to "Neutral" or "Good"
- Only then: gradually reintroduce full sends starting with transactional → transactional+educational → full promotional

---

## 3. ZeroBounce List Verification Schedule

### Weekly Verification (Routine)

**When:** Every Monday, before first campaign send of the week.

**Process:**
1. Export full subscriber list from Klaviyo (Audience → Lists → Export)
2. Upload CSV to ZeroBounce dashboard
3. Run email validation (standard batch verification)
4. Download cleaned list + suppression file
5. Import suppression file into Klaviyo as a suppressed list
6. Document results in monitoring log

**What to verify:**
- Entire active subscriber list (all segments except suppressed)
- Any new list imports added in the last 7 days
- Pop-up sign-ups from the last 7 days

**Target:** < 2% invalid/abusive/risky before any campaign send.

### Emergency Verification (Unscheduled)

**Trigger:** Bounce rate reaches Warning (0.5-1.0%) or higher.

**Process:**
1. Run verification immediately (no waiting for Monday)
2. Focus verification on segments that received mail in the last 14 days
3. Remove ALL invalid, abusive, risky, and catch-all emails
4. Re-run verification on the cleaned list to confirm
5. Document source of bounces (new import? stale segment? bot activity?)

### ZeroBounce Suppression Import in Klaviyo

After each verification run:

1. In ZeroBounce, download the "Suppression List" CSV (all bad emails)
2. In Klaviyo: **Audience → Lists → Create List** → Name: `ZeroBounce Suppression YYYY-MM-DD`
3. Import the CSV into this list
4. Add this list as a suppression to ALL flow filters:
   - In each flow trigger: **"Who is this flow for?"** → add condition: **"Email is NOT in list 'ZeroBounce Suppression YYYY-MM-DD'"**
   - For campaign sends: add same condition at send time

> **Best Practice:** Maintain a persistent "ZeroBounce Suppressed" segment that accumulates all historically invalid emails, updated weekly. Use this as a permanent exclusion on all sends.

---

## 4. Google Postmaster Tools Setup Guide

### 4.1 Initial Setup

1. **Go to:** [https://postmaster.google.com/](https://postmaster.google.com/)
2. Sign in with the BrightKidCo Gmail account (or any Google Account authorized by the business owner)
3. Click **"Add Domain"** and enter: `send.brightkidco.com`
4. Create a **DNS TXT record** for domain verification:

```
Record: google-site-verification=<unique-verification-code>
Type:   TXT
TTL:    3600
```

5. Add this TXT record to the `send.brightkidco.com` DNS zone (via domain registrar or DNS host)
6. Back in Postmaster Tools, click **"Verify"**
7. Wait for DNS propagation (5-30 minutes, up to 24h)
8. Repeat for the root domain `brightkidco.com` if sending from multiple subdomains

### 4.2 Metrics to Monitor Daily

| Metric | Healthy | Warning | Action |
|--------|---------|---------|--------|
| **Reputation** | Good / Neutral | Low / Bad | Escalate per alert level |
| **Spam Rate** | < 0.1% | 0.1-0.3% | Review content, verify segmentation |
| **Delivery Errors** | < 1% | 1-5% | Check DNS, DKIM, authentication |
| **Feedback Loop** | — | Elevated complaints | Check spam complaint tracking in Klaviyo |

### 4.3 Daily Monitoring Cadence

1. **Daily (first send of the day):** Check Google Postmaster Tools dashboard
   - Domain reputation (send.brightkidco.com)
   - IP reputation
   - Spam rate trend (7-day and 30-day)
   - Delivery errors
2. **Log** any reputation changes in the deliverability log
3. If reputation drops to "Low" or "Bad" → initiate Code Red Protocol (§2.3)

### 4.4 Enabling Feedback Loop (FBL)

Google Postmaster Tools provides FBL data automatically once sending volume reaches sufficient levels. No additional setup is needed beyond domain verification.

> **Note:** Google Postmaster Tools data is sampled (not 100% of traffic) and typically shows data after 200+ messages per day to Gmail addresses.

---

## 5. Monthly Hygiene Checklist

From **Giuliano-Demands.md Section 32** (lines 1304-1309) — expanded with additional items.

### Monthly Tasks (First Monday of Each Month)

1. **Review bounce rate trend** (target < 0.5%)
   - Open Klaviyo → Analytics → Bounce Rate by Month
   - Compare current vs. last 3 months
   - If trend is increasing, investigate source segments

2. **Review spam complaint rate** (target < 0.03% monthly, < 0.01% healthy)
   - Open Klaviyo → Analytics → Complaint Rate by Month
   - Flag any segment or flow with elevated complaints
   - Cross-reference with Google Postmaster Tools spam rate

3. **Verify Sunset Flow is live and processing**
   - Confirm the Sunset flow is active in Klaviyo
   - Review last 30 days: how many profiles entered, how many were suppressed
   - Check `unengaged = True` tag counts are increasing appropriately

4. **Review 120-Day Unengaged segment size**
   - Run segment: `Opened 0 times in 120 days AND Clicked 0 times in 120 days AND Placed Order 0 times in 120 days`
   - If segment is shrinking → Sunset flow is working
   - If segment is growing → investigate engagement triggers

5. **Export Ghost Profiles for manual suppression**
   - Ghost profiles: profiles created via list import with no engagement activity ever
   - Export: Klaviyo → Segment → "Never opened AND Never clicked AND Created > 90 days ago"
   - Review and manually suppress profiles with no legitimate activity

6. **Review ZeroBounce verification history**
   - Confirm weekly verifications ran consistently (4+ verifications in the last month)
   - Review invalid/abusive rate trends
   - Update permanent suppression list with any new bad domains

7. **Check sending domain authentication**
   - Verify SPF, DKIM, DMARC records are still valid (no expired CNAMEs)
   - Run an email authentication check (e.g., MXToolbox, mail-tester.com)
   - Confirm no unauthorized sending sources

8. **Audit segment health**
   - Review all active segments for size and engagement rate
   - Any segment with < 20% open rate over 30 days → review targeting
   - Consider sunsetting stale segments

9. **Verify transactional cloak is applied**
   - Spot-check 3-5 email templates for hidden plain-text fallback div
   - Verify table-based layout, inline CSS, 600px max on transactional templates

10. **Review GPT (Google Postmaster Tools) reputation weekly report**
    - Download weekly trend data
    - Compare against previous 4 weeks
    - Document any anomalies

---

## 6. Sunset Protocol (120-Day Unengaged)

From **Giuliano-Demands.md Section 32** (lines 1325-1333).

### Sunset Trigger Definition

A profile enters the Sunset flow when ALL of the following conditions are met:

```
Opened 0 times in 120 days
AND Clicked 0 times in 120 days
AND Placed Order 0 times in 120 days
AND Received Email at least 20 times
```

### Sunset Flow Process

```
Profile meets trigger conditions
              |
              v
    1. Send Re-engagement Email
              |
              v
    2. Wait 4-7 days
              |
              v
    3. Tag profile `unengaged = True`
              |
              v
    4. Add to Master Suppression List
              |
              v
    5. Exclude from ALL future sends
```

### Details

**Step 1 — Re-engagement Email**
- Send a single re-engagement email with a clear subject line (e.g., "Still want to hear from us?")
- Include a prominent "Stay Subscribed" CTA
- Include a link to update preferences
- Keep copy warm, inviting, low-pressure
- If the recipient opens AND clicks: exit Sunset flow, reset 120-day counter, return to normal sends

**Step 2 — 4-7 Day Delay**
- Wait 4-7 days after re-engagement email for any engagement
- If engagement occurs: exit, reset counter, return to normal sends
- If no engagement: proceed to suppression

**Step 3 — Tag `unengaged = True`**
- Apply the tag `unengaged` with value `True` to the profile in Klaviyo
- This tag is used in all flow/campaign exclusions

**Step 4 — Master Suppression List**
- Add the profile to the **Master Suppression List** segment
- This is a permanent exclusion — profiles on this list never receive marketing emails

**Step 5 — Exclude from All Sends**
- The Master Suppression List must be applied to:
  - ALL campaign "Don't send to" filters
  - ALL flow audience filters (in the "Who is this flow for?" section)
  - At the account level via Klaviyo account settings → Suppressed email domains and addresses

### Klaviyo Implementation

**Segment Definition:**
```
Metric: Placed Order | Zero times over | Last 120 days
AND Metric: Opened | Zero times over | Last 120 days
AND Metric: Clicked | Zero times over | Last 120 days  
AND Metric: Received Email | At least 20 times | Over all time
AND Tag: unengaged | is not set | OR is False
AND Not in List: Master Suppression List
```

**Flow Setup:**
- Trigger: **Segment** → enters "120-Day Unengaged" segment
- Flow:
  - Email 1: Re-engagement email
  - Wait 5 days (midpoint of 4-7 day window)
  - Condition: if `Opened Email` OR `Clicked Email` → exit (reset counter)
  - Otherwise: Tag `unengaged = True` → Add to Master Suppression List
- Exit condition: Made a purchase → also resets counter, removes from flow

**Master Suppression List:**
- Create a **Klaviyo List** named "Master Suppression List"
- This list is permanently excluded from ALL sends
- Do NOT remove profiles from this list automatically
- Only manual removal by admin on explicit request
- Apply at account level: **Settings → Email → Suppressed email addresses** → import CSV weekly

---

## 7. Bot Detection & Suppression

From **Giuliano-Demands.md Section 32** (lines 1271-1276).

### Bot Segments

**Segment 1 — Known Fake Domains**
Blocklist of 20+ disposable email domains. Examples:
- `mailinator.com`, `guerrillamail.com`, `10minutemail.com`
- `trashmail.com`, `temp-mail.org`, `throwaway.email`
- `yopmail.com`, `sharklasers.com`, `mailnator.com`

**Segment 2 — Non-Engaged Sleepers**
```
Received Email at least 10 times over all time
AND Opened Email 0 times over all time
AND Clicked Email 0 times over all time
AND Placed Order 0 times over all time
```

### Bot Suppression Flow

1. When a profile matches either bot segment → tag `is_bot = True`
2. Add to permanent suppression list
3. Exclude from ALL sends via flow filters:

```
In every flow "Who is this flow for?":
  Tag "is_bot" | is not set
```

### Klaviyo Automation for Bot Detection

**Flow: Bot Detection**
- Trigger: Profile enters "Known Fake Domains" segment OR "Non-Engaged Sleepers" segment
- Action: Tag `is_bot = True`
- Action: Add to Master Suppression List
- Note: No email is sent — this is a silent internal flow

---

## 8. Klaviyo Implementation: Suppression Lists

### Suppression Architecture

BrightKidCo uses a tiered suppression system:

```
Tier 1: Account-Level Suppression (Klaviyo Settings)
  ├── Hard bounces (automatic — Klaviyo manages)
  ├── Spam complaints (automatic — FBL)
  └── Manual upload of ZeroBounce invalid addresses

Tier 2: Master Suppression List (Klaviyo List)
  ├── Sunset profiles (unengaged = True)
  ├── Bot profiles (is_bot = True)
  ├── Ghost profiles (never engaged)
  └── Manual suppressions (unsubscribe requests, data erasure)

Tier 3: Flow-Level Suppression (Per-Flow Filters)
  ├── is_bot is not set
  ├── unengaged is not set
  ├── Not in Master Suppression List
  └── Cross-flow suppression rules (see 07-cloak-transactional-rules.md)
```

### Implementation Steps

#### Account-Level Suppression

1. **Klaviyo → Settings → Email → Suppressed email addresses**
2. Add manually: any known bad addresses from ZeroBounce
3. Toggle: "Automatically suppress people who complain about spam" → ON (default)
4. Toggle: "Automatically suppress hard bounces" → ON (default)

#### Master Suppression List

1. **Klaviyo → Audience → Lists → Create List** → Name: "Master Suppression List"
2. Add profiles via:
   - Sunset Flow (automated, see §6)
   - Bot Detection Flow (automated, see §7)
   - Weekly ZeroBounce import (manual, see §3)
   - Manual additions for GDPR/CCPA requests
3. Apply to all flows:
   - In each flow's **"Who is this flow for?"** section:
   - Add condition: **Email is NOT in list "Master Suppression List"**
4. Apply to all campaigns:
   - Before each send, verify "Master Suppression List" is in the exclusion filter

#### Flow-Level Suppression Filters

Apply these conditions in EVERY flow's trigger filter:

```
Tag "is_bot" | is not set
AND Tag "unengaged" | is not set (or equals False)
AND Email is NOT in list "Master Suppression List"
AND Email is NOT in list "ZeroBounce Suppressed"
```

### Weekly Suppression Maintenance

1. **Monday:** Run ZeroBounce verification → update ZeroBounce suppression list
2. **Monday:** Export Ghost Profiles → review → add to Master Suppression List
3. **Daily:** Check Klaviyo suppression report for any new auto-suppressions
4. **Monthly:** Full hygiene checklist (§5)

---

## 9. Sensitive Content → Deliverability Impact

From **Giuliano-Demands.md Section 32** (lines 1317-1323), the following sensitive content areas directly affect deliverability:

| Sensitive Area | Rule | Deliverability Impact |
|---------------|------|----------------------|
| Self-Blame | Never hint she's doing something wrong | Spam complaints from distressed parents |
| Partner Conflict | Don't sound like she has to convince her partner | Partner-blaming = spam complaints |
| Comparison Wound | Never position NT kids as standard | Comparison = unsubscribe + spam report |
| Pediatrician Frustration | Gently acknowledge, never attack | Medical criticism = abuse reports |

### Monitoring for Sensitive Content Violations

1. **Flagged content review:** When spam complaints rise, review recent sends for any language that may trigger the above sensitive areas
2. **Segment-specific complaint tracking:** Monitor complaint rates per level segment — L2 and L3 profiles are more sensitive to self-blame and comparison language
3. **Pre-send content scan:** Before deploying new campaign sends, scan for phrasing that could trigger any of the four sensitive areas above

---

## Appendix A: Monitoring Log Template

Create a deliverability monitoring log at `/root/projects/brightkido-email/operations/deliverability-log.md`. Template:

```markdown
# Deliverability Monitoring Log

## Week of YYYY-MM-DD

### Daily Metrics
| Date | Bounce Rate | Spam Complaint Rate | GPT Reputation | Status |
|------|-------------|---------------------|----------------|--------|
| Mon  | %           | %                   | Good/Neutral   | ✅     |
| Tue  | %           | %                   | —              | —      |
| ...  |             |                     |                |        |

### Weekly Actions
- [ ] ZeroBounce verification run (YYYY-MM-DD)
- [ ] GPT reputation checked
- [ ] Bounce rate < 0.5%
- [ ] Spam complaint < 0.03%
- [ ] Sunset flow active

### Incidents
| Date | Type | Severity | Action Taken | Resolution |
|------|------|----------|-------------|------------|
|      |      |          |             |            |
```

## Appendix B: Dashboard Setup (Monitoring View)

In Klaviyo, create a deliverability monitoring dashboard:

1. **Analytics → Dashboards → Create Dashboard** → Name: "Deliverability Monitoring"
2. Add widgets:
   - **Bounce Rate** (line chart, 30-day trend, target line at 0.5%)
   - **Spam Complaint Rate** (line chart, 30-day trend, warning line at 0.01%, critical at 0.03%)
   - **Open Rate** (line chart, 30-day trend, warning line at 45%)
   - **Unsubscribe Rate** (line chart, 30-day trend)
   - **Audience Growth** (cumulative, monthly)
   - **Master Suppression List Size** (cumulative, monthly — should grow as Sunset runs)

---

*End of document — 08-deliverability-monitoring.md*
