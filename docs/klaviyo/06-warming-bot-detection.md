# S7-I6: Domain Warming Schedule & Bot Detection

**Item 6 of Section 7 — Klaviyo Infrastructure & Template Setup**
**Date:** 2026-05-26
**Purpose:** Define the 6-week domain warming schedule, bot detection and suppression rules, and Code Red protocol for spam crises. New sending domains start with zero reputation — sending too fast triggers spam filtering. This document ensures BrightKidCo's sending domain builds reputation safely.

**Sources:**
- Demands §26 (Deliverability Prerequisites — warming constraints, setup requirements)
- Demands §32 (Delivery & Sending Rules — warming content rules, sending patterns, bot detection, code red, metrics, sunset)

---

## Table of Contents

1. [Domain Warming Overview](#1-domain-warming-overview)
2. [6-Week Warming Schedule](#2-6-week-warming-schedule)
3. [Weeks 1-2: Foundation Phase](#3-weeks-1-2-foundation-phase)
4. [Weeks 3-4: Expansion Phase](#4-weeks-3-4-expansion-phase)
5. [Weeks 5-6: Full Deployment Phase](#5-weeks-5-6-full-deployment-phase)
6. [L3 Exclusion Rationale](#6-l3-exclusion-rationale)
7. [Bot Detection & Suppression](#7-bot-detection--suppression)
8. [Code Red Protocol (Spam Crisis)](#8-code-red-protocol-spam-crisis)
9. [From Address Strategy During Warming](#9-from-address-strategy-during-warming)
10. [Monitoring & Metrics Thresholds](#10-monitoring--metrics-thresholds)
11. [Monthly Hygiene Checklist](#11-monthly-hygiene-checklist)
12. [Sunset Protocol](#12-sunset-protocol)

---

## 1. Domain Warming Overview

### Why Warming Is Required

New sending domains have zero reputation with mailbox providers (Gmail, Outlook, Yahoo, etc.). ISPs use reputation scoring to determine whether an email lands in the inbox or spam folder. Sending at full volume from a cold domain guarantees spam placement.

### Sending Domain

| Field | Value |
|-------|-------|
| **Primary sending domain** | `send.brightkidco.com` |
| **Authentication** | SPF, DKIM, DMARC configured (see S7-I5: DNS-Authentication) |
| **Warming duration** | 6 weeks minimum |
| **Daily volume start** | ~50-100 emails/day in Week 1 |
| **Daily volume end** | Full flow volume (thousands/day) by Week 6 |
| **Transactional cloak** | Required from Day 1 on every email (Demands §26) |

### Guiding Principles

1. **Slow ramp, steady growth** — double volume approximately every 3-4 days
2. **Engagement-first** — send only to the most engaged subscribers; let open/click rates dictate pace
3. **No promotional content in weeks 1-2** — educational and relationship-building only
4. **Monitor daily** — check Google Postmaster Tools, Klaviyo engagement metrics, bounce/complaint rates
5. **Narrow before pause** — if metrics dip, tighten the segment before stopping entirely

*Source: Demands §26 Domain Warming Constraints; Demands §32 Warming Sending Pattern Rules*

---

## 2. 6-Week Warming Schedule

| Phase | Weeks | Flows Active | Volume Range | Content Type | Promotional? | L3? |
|-------|-------|--------------|-------------|-------------|:-----------:|:---:|
| **Foundation** | 1-2 | Welcome, Browse, Cart, Checkout | ~50-500/day | Educational, best-seller highlights, community | ❌ NO | ❌ EXCLUDED |
| **Expansion** | 3-4 | + Transactional, Post-Purchase, gentle promotional | ~500-2,000/day | Add transactional, post-purchase nurture, light promotions | ✅ Gentle begin | ❌ EXCLUDED |
| **Full Deployment** | 5-6 | All flows + campaign sends | ~2,000+/day | Full flow deployment, campaign emails | ✅ Full | ✅ INCLUDED |

---

## 3. Weeks 1-2: Foundation Phase

### Duration
**Day 1 through Day 14**

### Active Flows
| Flow | Type | Notes |
|------|------|-------|
| Welcome Flow E1-E8 | Transactional cloak | Educational content, Lena's voice, reply prompts |
| Browse Abandonment | Transactional cloak | Gentle reminder + value content |
| Cart Abandonment | Transactional cloak | Cart recovery with educational framing |
| Checkout Abandonment | Transactional cloak | Checkout recovery with educational framing |

### Content Rules — Demands §32 Domain Warming Content Rules

**FORBIDDEN during weeks 1-2:**
- Discount codes, percentage-off offers, dollar-amount savings
- Hard-sell language: "Buy Now," "Shop Today," "Limited Time," "Don't Miss Out"
- More than one promotional link or CTA
- Aggressive countdown timers, urgency banners, stock-level alerts
- Third-party sponsored content or affiliate links

**REQUIRED during weeks 1-2:**
- Educational content, best-seller highlights, community-focused content
- Plain-text or lightly formatted preferred
- Reply prompts encouraged in EVERY email — replies are the #1 deliverability signal
- Minimum 60:40 text-to-image ratio
- Lena's peer-to-peer voice (Demands §32: "Lena from BrightKidCo")

### Sending Pattern Rules
- **Do NOT send to "All Subscribers" or unengaged segments** (Demands §32)
- Use engagement-based segments only — 90-Day Engaged minimum for general sends
- **Maximum 3-4 campaigns per week** during warming
- Monitor GPT reputation daily
- If open rate drops below **45%**: pause and narrow segment
- Reply prompts in EVERY email
- Phase 1: Use ONLY `"Lena from BrightKidCo" <support@send.brightkidco.com>` for ALL emails during warming

### L3 Exclusion
Level 3 subscribers are **excluded from all sends** during weeks 1-2 (Demands §26). See [Section 6](#6-l3-exclusion-rationale) for rationale.

### Daily Volume Ramp (Suggested)

| Day | Approximate Volume | Notes |
|-----|-------------------|-------|
| 1-2 | 50-100/day | Welcome flow only, most engaged subscribers |
| 3-5 | 100-200/day | Add browse/cart/checkout triggers |
| 6-10 | 200-350/day | Gradual increase as subscribers cycle through flows |
| 11-14 | 350-500/day | Nearing upper bound of foundation phase |

---

## 4. Weeks 3-4: Expansion Phase

### Duration
**Day 15 through Day 28**

### Active Flows
| Flow | Type | Promotional? |
|------|------|:-----------:|
| Welcome Flow E1-E8 | Transactional cloak | ❌ |
| Browse Abandonment | Transactional cloak | ❌ |
| Cart Abandonment | Transactional cloak | ❌ |
| Checkout Abandonment | Transactional cloak | ❌ |
| Order Confirmation | Transactional cloak (NO promotional content) | ❌ — transactional only |
| Shipping Confirmation | Transactional cloak (NO promotional content) | ❌ — transactional only |
| Out for Delivery | Transactional cloak (NO promotional content) | ❌ — transactional only |
| Arrived / Delivered | Transactional cloak (NO promotional content) | ❌ — transactional only |
| PP-Upsell | Transactional cloak | ✅ Gentle |
| PP-Level Detection | Transactional cloak | ❌ |
| PP-Education D0-21 | Transactional cloak | ✅ Gentle |
| PP-Mid Check-In | Transactional cloak | ✅ Gentle |

### Content Guidance
- Transactional emails MUST be predominantly transactional per Google 2024 guidelines
- NO promotional content in transactionals (cross-sells, upsells, marketing banners) — voids CAN-SPAM transactional exemption (Demands §32)
- Gentle promotional = one soft CTA, educational framing, no urgency tactics
- Minimum 60:40 text-to-image ratio continues
- Reply prompts continue in every email
- Introduce promotional elements slowly — one campaign per week maximum

### L3 Exclusion Continues
Level 3 subscribers remain excluded during weeks 3-4. See [Section 6](#6-l3-exclusion-rationale).

### Daily Volume Ramp

| Day | Approximate Volume | Notes |
|-----|-------------------|-------|
| 15-18 | 500-800/day | Add transactionals, moderate increase |
| 19-24 | 800-1,200/day | Post-purchase flows come online |
| 25-28 | 1,200-2,000/day | Gentle promotional tests begin |

---

## 5. Weeks 5-6: Full Deployment Phase

### Duration
**Day 29 through Day 42**

### Active Flows
All flows including:
- Welcome Flow E1-E8 (L1, L2, L3, GF)
- Browse Abandonment
- Cart / Checkout Abandonment
- All transactional flows (Order, Shipping, Out for Delivery, Arrived)
- PP-Upsell, PP-Level Detection, PP-Education D0-21, PP-Extended Upsell, PP-Mid Check-In
- PP-Mary S. Story
- PP-Extended Education L1-L4 (4 × 5 emails)
- PP-Support At-Risk
- Replenishment A/B/C
- Review Request
- Winback Path A (3 × 4 = 12 level-specific)
- Winback Path B (3 × 4 = 12 level-specific)
- FAQ/Objection Library (cross-level, 6 emails)
- Sunset Flow
- Referral Flow

### What Changes
| Aspect | Before (Weeks 1-4) | After (Weeks 5-6) |
|--------|-------------------|-------------------|
| L3 sends | Excluded | Full inclusion |
| Promotional content | Gentle/restricted | Full promotional allowed |
| Campaign frequency | 3-4/week max | Normal campaign schedule |
| From addresses | Single (support@) | Can introduce info@, help@ |
| Volume | ~2,000/day peak | Full volume (3,000+/day) |
| Monitoring cadence | Daily | Daily — continue GPT reputation monitoring |

### From Address Expansion
- Continue using `support@send.brightkidco.com` as primary
- May introduce `info@send.brightkidco.com` and `help@send.brightkidco.com` AFTER domain reputation is established (Demands §32)
- Reply-to remains `support@brightkidco.com` for all sends

### Monitoring During Weeks 5-6
- **Daily Google Postmaster Tools check** — if reputation drops to "Bad," engage Code Red Protocol immediately
- **Daily GPT (Google Postmaster Tools) reputation** check — if "Low" or "Bad," narrow send segments
- **Bounce rate** must stay below 0.5%
- **Spam complaint rate** must stay below 0.01%
- If open rate drops below **45%**: pause and narrow segment (Demands §32)

### Daily Volume Ramp

| Day | Approximate Volume | Notes |
|-----|-------------------|-------|
| 29-33 | 2,000-3,000/day | Full flows active, L3 introduced |
| 34-38 | 3,000-5,000/day | Campaign sends added |
| 39-42 | 5,000+/day | Sustained full volume, monitor closely |

---

## 6. L3 Exclusion Rationale

### Why L3 Is Excluded from Weeks 1-6 Warming

Level 3 subscribers represent the highest-risk send target during domain warming for three critical reasons:

| Factor | Detail | Impact on Deliverability |
|--------|--------|------------------------|
| **Low engagement baseline** | L3 parents are in resignation — they have tried many solutions and are skeptical. They open emails less frequently than L1/L2. | Lower open rates during warming directly signal to ISPs that the domain's content is not wanted. |
| **High spam-reporting risk** | L3 tone must be dignity-first, not hopeful. Any misstep during warming (even unintentional) reads as insincere → spam complaint. | Spam complaints during weeks 1-2 are catastrophic for a new domain. Even one complaint per 1,000 sends can tank reputation. |
| **Volume skew during ramp** | L3 is ~25% of total database. Including L3 at full proportion during weeks 1-4 means 25% of sends go to the least-engaged segment. | Engagement metrics will underperform, slowing the reputation-building that warming is designed to achieve. |

### L3 Phased Inclusion Plan

| Timeline | L3 Handling |
|----------|------------|
| Weeks 1-2 | **Excluded** from all sends |
| Weeks 3-4 | **Excluded** from all sends |
| Weeks 5-6 | **Full inclusion** — L3 flows go live with all other flows |
| Post-Week 6 | L3 continues at normal volume. Monitor L3-specific open rates weekly. If L3 open rate drops below 30%, create an L3-specific re-engagement segment. |

*Source: Demands §26 — "L3 excluded from weeks 1-2 warming"*

---

## 7. Bot Detection & Suppression

### Why Bot Detection Matters

Bots (automated email checkers, security scanners, spam traps) open and click links in emails without being real subscribers. This:
- Inflates open and click rates, creating false engagement signals
- Wastes sending volume on non-human recipients
- Can trigger spam trap hits, permanently damaging domain reputation
- Skews A/B testing and segmentation decisions

### Three Bot Detection Mechanisms (Demands §32)

#### 7.1 Known Fake Domains Blocklist

Blocklist of disposable/temporary email domains that are almost exclusively used by bots or spammers.

**Implementation in Klaviyo:**
1. Create a **segment** named `Bot — Known Fake Domains`
2. Condition: `Email domain` → `Is one of` → [paste blocklist below]
3. Apply a tag: `is_bot = True`
4. Add this segment as a suppression filter on ALL flows and campaigns

**Known Fake Domains List (20+):**

```
mailinator.com
guerrillamail.com
10minutemail.com
throwaway.email
yopmail.com
temp-mail.org
sharklasers.com
spambox.us
dispostable.com
mailnator.com
trashmail.com
tempmail.com
fakeinbox.com
getnada.com
burnermail.io
mohmal.com
emailondeck.com
tempinbox.com
mailexpire.com
mailmetrash.com
```

**Add to this list** whenever new fake domains are encountered. Store the master list in a convenient reference format for Klaviyo segment paste.

#### 7.2 Non-Engaged Sleepers

**Definition:** Subscribers who have received **10+ emails**, opened **0**, and clicked **0**.

These subscribers are highly likely to be bots, spam traps, or abandoned addresses. Continuing to send to them damages deliverability.

**Implementation in Klaviyo:**

1. Create a **segment** named `Bot — Non-Engaged Sleepers`
2. Conditions:
   - `Received email` → `At least 10 times`
   - `Opened email` → `0 times`
   - `Clicked email` → `0 times`
3. Apply a tag: `is_bot = True`
4. Add to Master Suppression List

**Klaviyo Segment Configuration:**

| Field | Value |
|-------|-------|
| **Segment name** | `Bot — Non-Engaged Sleepers` |
| **Condition 1** | `What someone has done` → `Received Email` → `At least 10 times` |
| **Condition 2** | `What someone has done` → `Opened Email` → `0 times` |
| **Condition 3** | `What someone has done` → `Clicked Email` → `0 times` |
| **Tag on entry** | `is_bot = True` |

**Klaviyo flow filter** applied to every flow trigger:
```
is_bot is not set
```

#### 7.3 `is_bot` Tag Suppression

**Unified suppression mechanism.** Both bot detection segments above tag the profile with `is_bot = True`. The tag is the single suppression point.

**Flow-level filter** (apply to EVERY flow's trigger conditions):
```
is_bot is not set
```
or equivalently:
```
is_bot does not equal True
```

**Campaign-level filter** (apply to every campaign's "Who receives" condition):
```
is_bot is not set
```

**Automated tagging via flow:**

Create a **Klaviyo flow** triggered by segment entry:

| Step | Action |
|------|--------|
| **Trigger** | Someone enters segment `Bot — Known Fake Domains` OR `Bot — Non-Engaged Sleepers` |
| **Action** | Add tag `is_bot` |
| **Action** | Add to profile property `is_bot = True` |
| **End** | No email sent — this is a data-only flow |

**Recommended segment refresh cadence:** Weekly — run the Non-Engaged Sleepers segment weekly to catch newly qualifying subscribers.

*Source: Demands §32 — Bot Detection & Suppression*

---

## 8. Code Red Protocol (Spam Crisis)

### When to Activate

Code Red activates when **Google Postmaster Tools** shows domain reputation as **"Bad"** (Red status). This means a significant portion of emails from the domain are being marked as spam by Gmail recipients.

### Severity Levels

| Level | Postmaster Status | Action Required |
|-------|------------------|-----------------|
| **⚠️ Warning** | "Low" (Yellow) | Monitor hourly. Prepare Code Red materials. Tighten segments. |
| **🚨 Code Red** | "Bad" (Red) | **Activate Protocol immediately.** Execute steps 1-5 below. |
| **⛔ Black** | "Bad" for 72+ hours | Full pause. Engage email deliverability consultant. |

### Step-by-Step Code Red Protocol

#### Step 1: Enable Temporary Double Opt-In (DOI)

**Duration:** 30 days minimum, until reputation recovers to "Low" or "Neutral"

**Implementation:**
- Change all sign-up forms from single opt-in to **double opt-in**
- Subscribers must confirm their email address via a confirmation link before being added to the list
- This prevents spam trap and bot sign-ups during the recovery period
- Add "Check your spam folder" messaging on sign-up confirmation pages

**Klaviyo setup:**
- Navigate to: **Lists & Segments** → [Your List] → **Settings**
- Toggle: **Require consent (double opt-in)** → ON
- Customize the confirmation email to include educational content and deliverability support messaging

#### Step 2: Modified Two-Step Welcome Flow

Replace the standard 8-email Welcome Flow with a **gated two-step version**:

| Step | Email | Action | Condition |
|------|-------|--------|-----------|
| 1 | Welcome Email #1 | Sent immediately | No condition |
| 2 | Welcome Email #2+ | **Gate behind open of Email #1** | Only if subscriber opened Email #1 within 7 days |

**Implementation:**
- Clone the Welcome Flow as `Welcome Flow — Code Red`
- Add a conditional branch after Welcome Email #1:
  - Branch: **Opened Email #1** → Continue flow
  - Branch: **Did NOT open Email #1 within 7 days** → Tag `unengaged = True`, suppress from further sends

**Note:** This dramatically reduces send volume but protects reputation. Only the most engaged subscribers receive the full welcome sequence.

#### Step 3: VIP-Only Sending

Restrict sends to the **highest-engagement segment only** for the first 2 weeks of Code Red.

**Segment — VIP Clickers:**
| Condition | Value |
|-----------|-------|
| Opened email | At least 5 times in last 30 days |
| Clicked email | At least 2 times in last 30 days |
| Placed order | At least 1 time ever |
| is_bot | Not set |

**Sending schedule:**
- **Week 1 of Code Red:** VIP Clickers only
- **Week 2 of Code Red:** Expand to 30-Day Engaged (opened or clicked in last 30 days)
- **Week 3+ of Code Red:** If Postmaster returns to "Low" or better, resume normal segment expansion

#### Step 4: Consider 48-72 Hour Sending Pause

**When to pause:**
- If spam complaint rate exceeds **0.05%** (Emergency threshold per Demands §32)
- If Postmaster shows "Bad" for 24+ hours despite DOI and VIP-only sending
- If bounce rate exceeds **1.0%** (Critical threshold)

**Pause procedure:**
1. Pause ALL flows and campaigns in Klaviyo
2. Do NOT stop authentication — SPF, DKIM, DMARC records must remain active
3. Use the 48-72 hour window to:
   - Run a full list hygiene check with ZeroBounce
   - Review all recent sends for content issues
   - Check reply-to and from-address alignment
   - Review spam complaint patterns (which emails/campaigns triggered complaints?)
4. Resume with VIP Clickers only
5. If complaint rate drops below 0.01% within 72 hours of resuming, gradually expand

#### Step 5: Reputation Recovery — Graduated Return

| Timeline | Segment | Volume Cap | Success Metric |
|----------|---------|-----------|----------------|
| Days 1-3 post-resume | VIP Clickers | 50% of normal | Spam complaint < 0.01% |
| Days 4-7 post-resume | 30-Day Engaged | 75% of normal | Spam complaint < 0.01% |
| Day 8+ post-resume | 90-Day Engaged (no L3) | 100% of normal | Spam complaint < 0.01% |
| Day 14+ post-resume | Full segments | 100% | Postmaster "Low" or better |
| Day 30+ post-resume | Disable double opt-in | 100% | Postmaster "Neutral" or better |

### Escalation Contacts

| Role | Contact | Responsibility |
|------|---------|----------------|
| **Deliverability Lead** | Klaviyo Deliverability Support | ISP feedback loops, reputation analysis |
| **DNS/Infra** | Domain registrar support | Authentication record issues |
| **Client Contact** | Ayoub (Brand owner) | Content approval during Code Red |
| **ZeroBounce** | ZeroBounce support (support@zerobounce.net) | List verification, spam trap identification |

*Source: Demands §32 — Code Red Protocol (Spam Crisis)*

---

## 9. From Address Strategy During Warming

### Phase 1 (Weeks 1-6)

| From Name | From Address | Purpose | Active During Warming? |
|-----------|-------------|---------|:---------------------:|
| Lena from BrightKidCo | `support@send.brightkidco.com` | All emails | ✅ Yes — **only** from-address |
| (Reserved) | `orders@send.brightkidco.com` | Transactional only | ⏳ After Week 6 |
| (Reserved) | `hello@send.brightkidco.com` | Marketing only | ⏳ After Week 6 |

**Critical Rule (Demands §32):**
> Phase 1: Use ONLY "Lena from BrightKidCo" <support@send.brightkidco.com> for ALL emails during warming. Adding new from-addresses during warming splits reputation signals. Introduce info@ and help@ personas AFTER domain reputation is established (post-Week 6).

### Phase 2 (Post-Week 6)

| From Name | From Address | Purpose |
|-----------|-------------|---------|
| Lena from BrightKidCo | `support@send.brightkidco.com` | Welcome, nurture, educational |
| BrightKidCo Orders | `orders@send.brightkidco.com` | Transactional (order confirmations, shipping, delivery) |
| Lena from BrightKidCo | `hello@send.brightkidco.com` | Marketing campaigns |

### Reply-To

- **Always:** `support@brightkidco.com` (not the sending subdomain)
- This ensures replies route to the main domain's inbox and do not need SPF/DKIM alignment beyond the sending subdomain

*Source: Demands §26 From Address Rules; Demands §32 Warming Sending Pattern Rules*

---

## 10. Monitoring & Metrics Thresholds

### Daily Monitoring Checklist (Weeks 1-6)

| Check | Frequency | Tool | Action if Failing |
|-------|-----------|------|-------------------|
| Google Postmaster reputation | Daily | [Postmaster Tools](https://postmaster.google.com) | Activate Code Red if "Bad" |
| Bounce rate | Daily | Klaviyo Analytics | Pause if > 1.0% |
| Spam complaint rate | Daily | Klaviyo Analytics + Google Postmaster | Pause if > 0.03% |
| Open rate | Daily | Klaviyo Analytics | Narrow segment if < 45% |
| Click rate | Daily | Klaviyo Analytics | Review content if dropping |
| Send volume vs. plan | Daily | Klaviyo Analytics | Slow down if exceeding ramp targets |
| ZeroBounce list health | Weekly | ZeroBounce | Run verification after big list imports |

### Metrics Thresholds (Demands §32)

| Metric | Target | Warning | Critical | Emergency |
|--------|:-----:|:-------:|:--------:|:---------:|
| **Bounce Rate** | < 0.5% | 0.5-1.0% | > 1.0% | — |
| **Spam Complaint** | < 0.01% | 0.01-0.03% | > 0.03% | > 0.05% |

#### Action Plans Per Threshold

**Warning (Bounce 0.5-1.0% / Spam 0.01-0.03%):**
- Narrow send segment (e.g., from 90-Day Engaged to 30-Day Engaged)
- Increase text-to-image ratio (target 70:30)
- Remove any promotional elements from next 3 sends
- Check for unhygienic list segments (bots, sleepers)

**Critical (Bounce > 1.0% / Spam > 0.03%):**
- PAUSE all sends for 24-48 hours
- Run full ZeroBounce verification
- Review all recent content for trigger language
- Activate Code Red Protocol (Section 8)

**Emergency (Spam > 0.05%):**
- PAUSE all sends immediately
- Activate Code Red Protocol full procedure
- Engage ZeroBounce support
- Consider DNS authentication review
- Contact Ayoub for content strategy review

---

## 11. Monthly Hygiene Checklist

Run this checklist once per month after the warming period is complete (Demands §32):

| # | Item | Owner | Frequency |
|:-:|------|-------|:---------:|
| 1 | Review bounce rate trend (target < 0.5%) | Deliverability Lead | Monthly |
| 2 | Review spam complaint rate (target < 0.03%) | Deliverability Lead | Monthly |
| 3 | Verify Sunset Flow is live and processing | Klaviyo Admin | Monthly |
| 4 | Review 120-Day Unengaged segment size | Klaviyo Admin | Monthly |
| 5 | Export Ghost Profiles for manual suppression | Klaviyo Admin | Monthly |
| 6 | Refresh Bot Detection segments | Klaviyo Admin | Monthly |
| 7 | Run ZeroBounce list verification | Deliverability Lead | Weekly in warming, monthly after |
| 8 | Review Google Postmaster reputation trend | Deliverability Lead | Monthly |

### Ghost Profile Suppression
Ghost profiles (zero-open, zero-click subscribers who have been in the system for 120+ days) should be exported from Klaviyo monthly and manually suppressed. Klaviyo does not automatically purge these — they accumulate and inflate send volume while dragging down engagement metrics.

---

## 12. Sunset Protocol

### Precision Segment Definition (Demands §32)

| Condition | Value |
|-----------|-------|
| Trigger | Opened 0 times in 120 days |
| AND | Clicked 0 times in 120 days |
| AND | Placed Order 0 times in 120 days |
| AND | Received Email at least 20 times |

### Process

1. **Re-engagement email** — Send one final re-engagement attempt
2. **4-7 day delay** — Wait for any response
3. **Tag `unengaged = True`** — Mark the profile
4. **Add to Master Suppression List** — Add to the list used by ALL flow and campaign filters
5. **Master Suppression List applied to**:
   - ALL campaign "Don't send to" filters
   - ALL flow audience filters

### Master Suppression List Composition

| Source | Description | Tag |
|--------|-------------|:---:|
| Bot Detection | Known Fake Domains + Non-Engaged Sleepers | `is_bot` |
| Sunset Protocol | 120-day zero engagement | `unengaged` |
| Bounce Hard | Hard bounces after 3 attempts | `hard_bounce` |
| Spam Complaint | Manually flagged complaint accounts | `spam_complaint` |
| Manual Suppression | Ghost profiles, manual removal requests | `manual_suppress` |

---

## Appendix A: Quick Reference — Flow Activation Timeline

| Week | Flows to Enable | Volume Target | Promotional? | L3? |
|:----:|----------------|:-------------:|:-----------:|:---:|
| **1** | Welcome, Browse, Cart, Checkout | 50-100/day | ❌ | ❌ |
| **2** | Continue above | 100-500/day | ❌ | ❌ |
| **3** | + Transactional (Order, Shipping, Delivery, Arrived), PP-Upsell, PP-Level Detection, PP-Education D0-21 | 500-1,200/day | ✅ Gentle | ❌ |
| **4** | + PP-Extended Upsell, PP-Mid Check-In, Replenishment A/B/C | 1,200-2,000/day | ✅ Gentle | ❌ |
| **5** | + PP-Mary S. Story, PP-Extended Education (all), PP-Support At-Risk, Review Request, Winback A/B, FAQ, Sunset, Referral | 2,000-3,000/day | ✅ Full | ✅ |
| **6** | All flows + campaigns | 3,000-5,000+/day | ✅ Full | ✅ |

---

*End of S7-I6 — Domain Warming Schedule & Bot Detection*
*Sources: Demands §26, Demands §32*
