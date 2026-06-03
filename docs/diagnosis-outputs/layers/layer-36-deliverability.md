# LAYER 36: DELIVERABILITY INFRASTRUCTURE — DEFINITIVE DIAGNOSIS

**Date:** 2026-05-25
**Consolidated From:** R1 (Client Files), R2 (Skill Loading — 14 skills), R3 (Wiki Extraction), R4 (Cross-Reference)
**Classification:** BrightKidCo Email Program — Gate Layer

---

## EXECUTIVE SUMMARY

BrightKidCo's deliverability infrastructure is **authenticated but unwarmed**. DNS authentication (SPF, DKIM, DMARC, custom tracking subdomain) is fully configured on the sending domain `send.brightkidco.com`. The Klaviyo account is live. However, the domain has **zero sender reputation** — it is a Tier 2 (New/Rewarming) domain that requires a mandatory 6-week warming protocol before any promotional sends.

**Current state:** Authentication done. Reputation zero. No emails sent. No engagement history. No Google Postmaster Tools verified. No list hygiene audit performed. No warming segments built. No content prepared.

**Critical risk:** Sending to the full list from Day 1 on a new domain guarantees spam folder placement or outright blocking by Gmail, Outlook, and Apple Mail. The warming protocol is non-negotiable.

**Primary bottleneck:** List hygiene (ZeroBounce verification + engagement segment construction) blocks ALL downstream sending. Not a single email can go out until list quality is confirmed and warming segments are built.

**Timeline to full deployment:** Minimum 6 weeks from first send to unrestricted campaign cadence. Full flow activation (all 25 flows) delayed until post-warmup.

---

## 1. INFRASTRUCTURE INVENTORY

### 1.1 Sending Domain

| Element | Value | Status |
|---------|-------|--------|
| Root Domain | brightkidco.com | Active |
| Sending Subdomain | send.brightkidco.com | Configured via Klaviyo Dedicated Sender |
| From Email | support@brightkidco.com | Configured |
| From Name | "Lena from BrightKidCo" | Configured |
| Reply-To | support@brightkidco.com | Configured |
| Custom Tracking Subdomain | click.brightkidco.com | CNAME → dct.klaviyodns.com |
| DNS Provider / Registrar | Ionos | Active |
| Email Hosting | Ionos (support@ inbox) | Active |
| Sending Platform | Klaviyo | Newly configured |
| Klaviyo Login | support@brightkidco.com | Active |
| Klaviyo Admin | ayoub@tenzamarketing.com | Added 5/19/26 |

### 1.2 DNS Records (Confirmed via WhatsApp 5/19/26)

**DMARC:**
```
Type: TXT
Host: _dmarc
Value: v=DMARC1; p=none; rua=mailto:support@brightkidco.com
```

**SPF:**
```
Type: TXT
Host: @
Value: v=spf1 include:_spf-us.ionos.com include:klaviyo.com ~all
```

**Custom Tracking CNAME:**
```
Type: CNAME
Host: click
Value: dct.klaviyodns.com
```

**DKIM:** Referenced as required in DOC1 but specific records not shown in WhatsApp chat — likely auto-configured by Klaviyo during Dedicated Sender setup. Status: verify in Klaviyo Settings > Domains.

### 1.3 Infrastructure Timeline

| Date | Event |
|------|-------|
| 5/19/26 | Klaviyo credentials shared, DNS configured via Google Meet |
| 5/19/26 | Ayoub added as Klaviyo user (ayoub@tenzamarketing.com) |
| 5/20/26 | Sending subdomain confirmed: send.brightkidco.com |
| 5/20/26 | Giuliano working on flows, Ayoub handling execution |

---

## 2. AUTHENTICATION STATUS

| Protocol | Status | Details | Action Needed |
|----------|--------|---------|---------------|
| **SPF** | ✅ Configured | `v=spf1 include:_spf-us.ionos.com include:klaviyo.com ~all` — 2/10 DNS lookups used | Monitor lookup count if adding services (Gorgias, Recharge, Yotpo). Current soft fail (`~all`) is appropriate for new setup. |
| **DKIM** | ⚠️ Unverified | Referenced as "Klaviyo-managed" but specific CNAME records not documented. Klaviyo provides `klaviyo1._domainkey` and `klaviyo2._domainkey` during setup. | Verify in Klaviyo Settings > Domains > Authentication. Should show "Verified." |
| **DMARC** | ✅ Configured | `p=none` (monitoring mode). Reports go to support@brightkidco.com. | Correct for warming phase. Upgrade to `p=quarantine` after Week 6. Connect to easyDMARC/dmarcian for automated analysis. |
| **Custom Tracking** | ✅ Configured | `click.brightkidco.com → dct.klaviyodns.com` | None — active. |
| **BIMI** | ❌ Not Configured | Requires DMARC at `p=quarantine` or `p=reject` + VMC certificate (1-2 weeks to issue) + SVG Tiny P/S logo. | Defer to post-warmup. Not critical for launch. |
| **MX Record (send subdomain)** | ⚠️ Unknown | Some mailbox providers require MX on sending subdomain for trust validation. | Check: `dig MX send.brightkidco.com`. If missing, add MX pointing to Ionos mail servers. |
| **rDNS/PTR** | ⚠️ Unknown | Important for German ISPs. Managed by IP provider. | Verify with Klaviyo support. |
| **Google Postmaster Tools** | ❌ NOT Verified | Critical for monitoring Gmail domain reputation during warming. Data populates within 24-48h of first sends. | **P0 BLOCKER.** Verify send.brightkidco.com at gmail.com/postmaster. |

### DMARC Phased Rollout Plan

| Phase | Policy | When | Condition |
|-------|--------|------|-----------|
| Phase 1 (Current) | `p=none` | Now through Week 6 | Monitoring mode — collecting data |
| Phase 2 | `p=quarantine` | After Week 6 | 7+ days of 100% legitimate source pass |
| Phase 3 | `p=reject` | After Week 10+ | 30+ days stable at quarantine |

**Critical rule:** Never escalate to quarantine/reject without 7-14 days of monitoring DMARC reports and remediating all non-compliant sending sources. Common sources to audit: Klaviyo, Gorgias/Zendesk, Recharge/Loop, Yotpo/Judge.me, Google Workspace.

### SPF Lookup Budget

| Service | Lookups | Status |
|---------|---------|--------|
| Ionos (_spf-us.ionos.com) | 1 | Active |
| Klaviyo (klaviyo.com) | 1 | Active |
| **Total** | **2/10** | Safe |

**Warning:** Adding Gorgias, Recharge, Yotpo, Judge.me, or Google Workspace each adds lookups. Monitor carefully. If approaching 10, use SPF flattening (convert includes to explicit IP ranges). Multiple SPF records cause intermittent failures — only ONE TXT record starting with `v=spf1` per domain.

---

## 3. DOMAIN WARMING PLAN

### 3.1 Tier Classification

**BrightKidCo = Tier 2 (New/Rewarming)**
- New sending domain (send.brightkidco.com)
- Zero campaigns sent
- Zero engagement history
- No Google Postmaster data

### 3.2 Pre-Warming Checklist (Week 0)

| # | Task | Status |
|---|------|--------|
| 1 | Verify Google Postmaster Tools for send.brightkidco.com | ❌ NOT DONE |
| 2 | Run subscriber list through ZeroBounce for verification | ❌ NOT DONE |
| 3 | Run blacklist check on send.brightkidco.com (MXToolbox) | ❌ NOT DONE |
| 4 | Verify DKIM is "Verified" in Klaviyo | ⚠️ UNKNOWN |
| 5 | Verify MX record for send.brightkidco.com | ⚠️ UNKNOWN |
| 6 | Build 7 warming segments in Klaviyo (see §3.4) | ❌ NOT DONE |
| 7 | Build 2 bot detection segments | ❌ NOT DONE |
| 8 | Build VIP Clickers emergency segment | ❌ NOT DONE |
| 9 | Implement Universal Transactional Cloak saved block | ❌ NOT DONE |
| 10 | Prepare 6+ warming content emails (educational, non-promotional) | ❌ NOT DONE |
| 11 | Pause all flows except Welcome, Browse Abandonment, Cart/Checkout Abandonment, Post-Purchase | ❌ NOT DONE |

### 3.3 Six-Week Warming Schedule

**Week 1-2: Intensive Care / Vanguard Launch**

| Parameter | Value |
|-----------|-------|
| Target Segment | Tier 2 Initial Warm-Up (clicked in 30 days OR added in 15 days) |
| Volume | 50-100 subscribers per day maximum |
| Frequency | 3 high-engagement campaigns per week |
| Content | Educational, best-seller highlights, community stories, founder stories. NO aggressive sales. NO pricing. NO discounts. |
| Format | Plain-text or lightly formatted preferred |
| Reply Prompts | Encouraged — "Just reply to this email and let me know..." |
| Benchmarks | Open rate >50%, bounce <0.5%, spam <0.03% |
| Monitoring | DAILY — open rate, bounce, spam complaints, GPT reputation |

**Week 3-4: Gradual Expansion**

| Parameter | Value |
|-----------|-------|
| Target Segment | 30-Day Engaged (opened or clicked in last 30 days) |
| Volume | Increase proportionally |
| Frequency | 3 campaigns/week |
| Content | 60%+ value-first, mild promotional content allowed (20% off) |
| Benchmarks | Open rate >45% on 30-Day segment |
| Rollback Trigger | If open rate drops below 45% — revert to 14-Day segment, wait another week |

**Week 5-6: Full Deployment**

| Parameter | Value |
|-----------|-------|
| Target Segments | Week 5: 60-Day Engaged. Week 6: 90-Day Engaged |
| Flow Re-activation | One flow at a time, 48-72 hour monitoring between each |
| DMARC Upgrade | Upgrade to `p=quarantine` at end of Week 6 |
| Benchmarks | Open rate >40% on 90-Day segment |
| Sunset Protocol | Build now — will be needed post-warmup |

**Post-Warmup Permanent Cadence:**

| Parameter | Value |
|-----------|-------|
| Primary Sends | 90-Day Engaged segment, 3-4 campaigns/week |
| Broad Reach | 1 campaign/month to expanded list |
| Never Send To | "All Subscribers" or unengaged segments |
| Monthly Audit | First Monday of each month (45-60 min) |

### 3.4 Foundational Segments to Build in Klaviyo

| Segment Name | Logic | Purpose |
|-------------|-------|---------|
| `[WARMING] Tier 2 — Initial Warm-Up` | Clicked in 30 days OR Added in 15 days, can receive email | Weeks 1-2 target |
| `[WARMING] 14-Day Engaged — Vanguard` | Opened OR Clicked in last 14 days, can receive email | Backup / rollback segment |
| `[WARMING] 30-Day Engaged` | Opened OR Clicked in last 30 days, can receive email | Weeks 3-4 target |
| `[WARMING] 60-Day Engaged` | Opened OR Clicked in last 60 days, can receive email | Week 5 target |
| `[WARMING] 90-Day Engaged` | Opened OR Clicked in last 90 days, can receive email | Week 6+ permanent |
| `[ADVANCED] VIP Clickers (90 Day)` | Clicked in 90 days, can receive email | Emergency (Code Red) |
| `[ADVANCED] At-Risk Engagers (90 Day)` | Opened in 90 days AND Clicked 0 times in 90 days | Monitoring — exclude from warming |
| `[ADVANCED] Ghost Profiles` | Apple Privacy Open = TRUE, Clicked 0 in 120 days, Ordered 0 in 120 days | Suppression |

**No engagement data fallback:** If no historical engagement data exists (likely for new domain), use purchase-based segments: 30-day purchasers = 14-Day equivalent, 90-day purchasers = 90-Day equivalent. If no purchases either, use a seed list of 50-100 known customers.

### 3.5 Daily Monitoring Metrics During Warming

| Metric | Week 1-2 Target | Week 3-4 Target | Week 5-6 Target | Red Flag | Action on Red Flag |
|--------|-----------------|-----------------|-----------------|----------|-------------------|
| Open Rate | >50% | >45% | >40% | <45% (W1-2), <40% (W3-4) | Narrow segment, improve content |
| Bounce Rate | <0.5% | <0.5% | <0.5% | >1% | Halt immediately, run list hygiene |
| Spam Complaint Rate | <0.03% | <0.03% | <0.03% | >0.05% | Halt, identify offending campaign |
| GPT Reputation | Medium to High | Medium to High | Medium to High | Low or Bad | Reduce volume, revert to 14-day |
| Unsubscribe Rate | <0.3% | <0.3% | <0.3% | >0.5% | Review frequency and content |
| Klaviyo Deliverability Score | 70+ | 70+ | 70+ | <65 | Full deliverability audit |

### 3.6 Flow Restrictions During Warming

| Warming Phase | Allowed Flows | Status |
|---------------|--------------|--------|
| Weeks 1-2 | Welcome Flow (all variants) | ACTIVE |
| Weeks 1-2 | Browse Abandonment | ACTIVE |
| Weeks 1-2 | Cart Abandonment | ACTIVE |
| Weeks 1-2 | Checkout Abandonment | ACTIVE |
| Weeks 1-2 | Post-Purchase (basic) | ACTIVE |
| Weeks 1-2 | ALL other flows (20+) | **PAUSED** |
| Weeks 3-4 | + Post-Purchase Level Detection | ACTIVE (48-72h monitoring) |
| Weeks 5-6 | + one flow at a time | ACTIVE (48-72h monitoring each) |
| Post-Warmup | All 25 flows | ACTIVE |

**Impact:** Full Phase 1 flow deployment (25 flows, 110+ emails) is delayed by 6 weeks from first send.

---

## 4. LIST HYGIENE FRAMEWORK

### 4.1 Bounce Rate Thresholds

| Bounce Rate | Status | Action |
|------------|--------|--------|
| <0.3% | Excellent | Normal monitoring |
| 0.3% – 0.5% | Good | Continue current practices |
| 0.5% – 0.99% | Warning | Investigate source of bounces |
| 1.0% – 2.0% | Critical | Immediate audit, halt sends to unverified segments |
| >2.0% | Emergency | Full send pause, deep audit of collection practices |

### 4.2 List Quality Metrics Targets

| Metric | Target | Warning | Critical |
|--------|--------|---------|----------|
| Bounce Rate | <0.5% | 0.5% – 1.0% | >1.0% |
| Spam Complaint Rate | <0.01% | 0.01% – 0.03% | >0.03% |
| Unengaged Rate (>120d) | <15% | 15% – 25% | >25% |
| Open Rate (90-day engaged) | >40% | 30% – 40% | <30% |
| Inbox Placement Rate | >90% | 80% – 90% | <80% |
| Unsubscribe Rate | <0.2% | 0.2% – 0.5% | >0.5% |

### 4.3 Real-Time Email Verification

**Service:** ZeroBounce, NeverBounce, or Kickbox — integrate at signup form level.

**Rules:**
- Reject invalid addresses at form level before they enter the list
- Flag role accounts (admin@, info@, sales@, support@)
- Detect malformed domains (gmal.com, yahoo.co, hotnail.com)
- Expected: 2-5% of any unverified list may be invalid

### 4.4 Sunset Protocol

**Trigger segment:** `[SUNSET] 1. Trigger - Unengaged (120 Days)`
- Opened 0 times in 120 days AND Clicked 0 times in 120 days AND Placed Order 0 times in 120 days AND Received Email at least 20 times

**Flow:**
1. Re-engagement email sent
2. 4-7 day delay
3. Tag `unengaged = True`
4. Add to `[SUPPRESS] 2. Master Suppression List`

**Suppression enforcement:** Master Suppression List applied to ALL campaign "Don't send to" filters and ALL flow audience filters.

### 4.5 Bot Detection

**Segment 1 — Known Fake Domains:**
Disposable email domain blocklist (20+ domains): mailinator, 10minutemail, guerrillamail, yopmail, tempmail, throwaway.email, maildrop, fakeinbox, trashmail, mytemp.email, tempail, temp-mail, guerrillamail, sharklasers, grr.la, disposableemail, mailnesia, discard.email, mailcatch, tempinbox

**Segment 2 — Non-Engaged Sleepers:**
Received 10+ emails, opened 0, clicked 0

**Action:** Tag with `is_bot = True` via flows. Exclude from ALL sends via flow filters (`is_bot is not set`).

### 4.6 Monthly Hygiene Checklist

1. Review bounce rate trend (target <0.5%)
2. Review spam complaint rate (target <0.03%)
3. Verify Sunset Flow is live and processing
4. Review 120-Day Unengaged segment size
5. Export Ghost Profiles for manual suppression
6. Check Google Postmaster Tools domain reputation
7. Verify email verification service credits remaining
8. Review lead source quality metrics
9. Audit disposable email domain list
10. Verify all sends include Master Suppression + bot exclusions

---

## 5. SPAM AVOIDANCE PLAYBOOK

### 5.1 Content Rules for Warming (Weeks 1-2)

**Forbidden Elements:**
- Discount codes, percentage-off offers, dollar-amount savings
- Hard-sell language: "Buy Now," "Shop Today," "Limited Time," "Don't Miss Out"
- More than one promotional link or CTA
- Aggressive countdown timers, urgency banners, stock-level alerts
- Third-party sponsored content or affiliate links

**Forbidden Phrases (DOC1 §15 — brand + deliverability risk):**
- "Easy" / "Simple" / "Effortless"
- "Train your kid in 3 days"
- "Guaranteed results"
- "Cure" / "Solve" / "Fix"
- "Your child will be normal"
- "Get him trained!"

**Required Elements:**
- Educational content, best-seller highlights, community-focused content
- Plain-text or lightly formatted preferred
- Reply prompts encouraged
- Minimum 60:40 text-to-image ratio
- Lena's peer-to-peer voice (calm, confident, "we're not in a hurry")

**Best warming content types (from cross-reference):**
- Failed methods explanations (L12) — educational, non-promotional, high engagement
- Level 2 Paradox content (L22) — "goes at school but not at home" generates replies
- Founder stories (Lena's personal experience with 2 autistic sons)
- Community stories and parent testimonials (L28-compliant: level-specific, anti-fabrication)

### 5.2 Sending Pattern Rules

- **NEVER** send to "All Subscribers" or unengaged segments
- Always use engagement-based segments (90-Day Engaged minimum for general sends)
- 3-4 campaigns per week maximum
- Monitor GPT reputation daily during warming/recovery
- If open rate drops below 45%: pause and narrow segment
- Reply prompts in every email — replies are the #1 deliverability signal

### 5.3 Spam Complaint Thresholds

| Rate | Status | Action |
|------|--------|--------|
| <0.01% | Target | Normal operation |
| 0.01% – 0.03% | Warning | Investigate source |
| >0.03% | Critical | Halt sending, identify offending campaign |
| >0.05% | Emergency | Full send pause, 6-Week Recovery Protocol |

### 5.4 Code Red Protocol (Nearly 100% Spam Placement)

Triggered when Google Postmaster reputation is "Bad" (red):

1. Enable temporary Double Opt-In for all new subscribers
2. Modified Two-Step Welcome Flow — gate behind open of Email #1
3. "Check your spam folder" messaging on sign-up confirmation pages
4. Send ONLY to VIP Clickers segment for first 2 weeks
5. Consider 48-72 hour sending pause for reputation reset

### 5.5 Transactional Email Rules

- Must be predominantly transactional per Google 2024 guidelines
- **NO promotional content** (cross-sells, upsells, marketing banners) — voids CAN-SPAM transactional exemption
- Hidden plain-text fallback div mandatory for deliverability
- Table-based layout, inline CSS, 600px max width
- Shopify integration must disable default transactional emails to avoid duplicate sends

### 5.6 Sensitive Content Guidelines (Deliverability-Critical)

BrightKidCo's audience (parents of autistic children) is emotionally sensitive. Content that triggers emotional distress generates spam complaints.

| Sensitive Area | Rule | Deliverability Impact |
|---------------|------|----------------------|
| Self-Blame | Never hint she's doing something wrong | Spam complaints from distressed parents |
| Partner Conflict | Don't sound like she has to convince her partner | Partner-blaming = spam complaints |
| Comparison Wound | Never position neurotypical kids as standard | Comparison = unsubscribe + spam report |
| Pediatrician Frustration | Gently acknowledge, never attack medical profession | Medical criticism = abuse reports |
| BCBA Loyalty (L23) | Never criticize ABA/BCBA | Level 2 moms (40% of audience) will mark as spam |
| Medicaid Sensitivity (L26) | No math reframes for L3, "add alongside" framing | "Wasting money" = instant spam complaint |
| Adult Diaper Fear (L27) | Never use as fear tactic | Deeply offensive to L3 parents = reputation damage |

---

## 6. CONTENT SIGNATURE OPTIMIZATION

### 6.1 Primary Inbox Cloaking Doctrine

**Purpose:** Force Gmail/Outlook to classify promotional emails as Important/Primary by injecting hidden content that mimics security alerts and personal messages.

**Asset 1 — Universal Transactional Cloak:**
- **Deployment:** EVERY SINGLE EMAIL — all campaigns and all automated flows
- **Content:** 300-400 words of hidden text disguised as "Important Privacy Information"
- **HTML:** `<div style="display:none; max-height:0px; overflow:hidden; font-size:1px; line-height:1px; color:#ffffff;">`
- **Solves:** Text-to-image ratio, high-priority keyword saturation, risk-averse algorithm classification

**Asset 2 — Situational Conversational Cloak:**
- **Deployment:** SURGICAL — first email only of specific flows
- **Content:** ~300 words mimicking personal 1-to-1 email
- **Deploy on:** First Welcome email, first Abandoned Checkout, first Abandoned Cart, first Browse Abandonment, any flow email with open rate <30%
- **4 variants:** Abandonment, Nurture/Welcome, Helpful Follow-Up, Founder's Office Re-engagement

### 6.2 Sender Persona Protocol (Deferred to Post-Warmup)

| Persona | From Name | Email | Use For |
|---------|----------|-------|---------|
| Brand Announcer | BrightKidCo | info@send.brightkidco.com | Welcome, campaigns, cross-sell, VIP |
| Helpful Agent | BrightKidCo | help@send.brightkidco.com | Abandonment, post-purchase, review, winback, sunset |

**Phase 1 resolution:** Use "Lena from BrightKidCo" <support@brightkidco.com> for ALL emails during warming. Adding new from-addresses during warming splits reputation signals. Introduce info@ and help@ personas after domain reputation is established (post-Week 6).

### 6.3 Deployment Matrix

| Flow | Transactional Cloak | Conversational Cloak |
|------|-------------------|---------------------|
| Welcome Email #1 | YES | YES |
| Welcome Emails #2-8 | YES | NO |
| Abandoned Checkout #1 | YES | YES |
| Abandoned Cart #1 | YES | YES |
| Browse Abandonment #1 | YES | YES |
| All Campaigns | YES | NO |
| Customer Winback (all) | YES | YES |
| Post-Purchase (all) | YES | NO |

### 6.4 Klaviyo Implementation

1. Create Saved Block: `[BKC] Universal Transactional Cloak v1`
2. Create Conversational Cloak variants for abandonment and welcome
3. Install as last elements before footer in every template
4. Replace [CLIENT NAME] with "BrightKidCo"
5. Replace [CLIENT SUPPORT EMAIL] with support@brightkidco.com

### 6.5 Grey Hat Technique (Ayoub's Code Snippet)

Ayoub has developed a "grey hat" code snippet that tricks Gmail/Outlook into placing promotional emails in the Primary tab instead of Promotions. Tested and working for multiple brands.

**Status:** May be deployed for BrightKidCo.
**Monitoring:** Google Postmaster Tools — if warnings appear, stop immediately.
**Risk:** Worst case = domain blacklisted from Gmail.
**Backup:** Buy new domain and restart if blacklisted.

---

## 7. CROSS-REFERENCE DEPENDENCY MAP

### 7.1 Layer 36 Connections

| Layer | Connection Type | Impact on L36 |
|-------|----------------|---------------|
| **L37 (Klaviyo Technical)** | 🔴 PRIMARY DEPENDENCY | Every L36 decision requires L37 configuration. Warming segments, flow activation, monitoring — all execute through Klaviyo. |
| **L16 (Flow Architecture)** | 🔴 CRITICAL CONSTRAINT | Only 5 of 25 flows can run during 6-week warming. Full flow deployment delayed by 6 weeks. |
| **L29 (Visual Calibration)** | 🔴 DESIGN CONSTRAINT | Image-heavy designs (<40% text) trigger spam filters. Visual choices must respect text-to-image ratio. |
| **L33 (Format Requirements)** | ↔ BIDIRECTIONAL | Subject lines, preheaders, body structure, footer all must comply with deliverability rules. |
| **L38 (Brand Constants)** | → INBOUND | Pricing, product names, "FREE" language must be suppressed during warming weeks 1-2. |
| **L15 (Offers)** | ↔ CONFLICT | Promotional language forbidden during warming. Offers deferred to weeks 5-6+. |
| **L09 (Voice — Lena)** | ↔ BIDIRECTIONAL | Lena's personal voice generates replies = #1 deliverability signal. Both sender personas must sound like Lena. |
| **L08 (Segmentation)** | → INBOUND | Warming segments built from L08's tag system (avatar_level1/2/3/general). |
| **L04 (Avatar Levels)** | → INBOUND | Level 1 (hope-intact) = best warming candidates. Level 3 (resigned) = worst. Priority: L1 > L2 > L3. |
| **L12 (Failed Methods)** | → INBOUND | Best warming content — educational, non-promotional, high engagement. |
| **L22 (Level 2 Paradox)** | → INBOUND | "Goes at school but not at home" content generates "me too!" replies = warming fuel. |
| **L17 (Tonality)** | ↔ BIDIRECTIONAL | Warming weeks 1-2 tonality = L17's "pre-purchase" tonality (calm, confident, mechanism-led). |

### 7.2 Critical Path

```
DNS Auth ✅ → Google Postmaster ⚠️ → List Hygiene 🔴 → Klaviyo Config 🔴 → Content Prep 🔴 → Warming 🔴 → DMARC Upgrade → Full Launch
```

**Bottleneck:** List Hygiene blocks everything. Cannot send a single email until list is verified and warming segments are built.

### 7.3 Conflicts Resolved

| # | Conflict | Resolution |
|---|----------|------------|
| 1 | Offer language (L15) vs warming rules (L36) | Weeks 1-2: zero promotional language. Weeks 3-4: mild (20% off). Weeks 5-6: full offers. |
| 2 | DMARC upgrade timing (7 days vs 6 weeks) | Follow 6-week timeline for new domains. 7-day rule applies to established domains. |
| 3 | Campaign frequency (8-16/month vs 3/week) | Start 2/week in Week 1, increase to 3/week in Weeks 2-6. |
| 4 | Bounce thresholds (<1% vs <0.5%) | Use granular List Hygiene thresholds: <0.3% target, 0.5% investigate, 1% halt. |
| 5 | Sender persona (info@/help@ vs support@) | Phase 1: support@ only. Phase 2: introduce info@/help@ after reputation established. |
| 6 | Open rate benchmarks (40% vs 50%) | Not a conflict — 50%+ for tiny warming segment, 40%+ for broader segments. |

---

## 8. ACTION ITEMS (Prioritized)

### P0 — BLOCKERS (Must Complete Before First Send)

| # | Action | Owner | Status |
|---|--------|-------|--------|
| 1 | Verify Google Postmaster Tools for send.brightkidco.com | Ayoub | ❌ NOT DONE |
| 2 | Run subscriber list through ZeroBounce | Ayoub + Giuliano | ❌ NOT DONE |
| 3 | Run blacklist check on send.brightkidco.com (MXToolbox) | Ayoub | ❌ NOT DONE |
| 4 | Verify DKIM is "Verified" in Klaviyo Settings > Domains | Ayoub | ⚠️ UNKNOWN |
| 5 | Check MX record for send.brightkidco.com | Ayoub | ⚠️ UNKNOWN |
| 6 | Build 7 warming segments in Klaviyo | Ayoub | ❌ NOT DONE |
| 7 | Build 2 bot detection segments | Ayoub | ❌ NOT DONE |
| 8 | Verify Shopify-Klaviyo integration is active | Ayoub | ⚠️ UNKNOWN |

### P1 — PREPARE (Before Warming Starts)

| # | Action | Owner | Status |
|---|--------|-------|--------|
| 9 | Create Universal Transactional Cloak saved block in Klaviyo | Ayoub | ❌ NOT DONE |
| 10 | Create 6+ warming content emails (educational, non-promotional) | Giuliano + Ayoub | ❌ NOT DONE |
| 11 | Build VIP Clickers emergency segment | Ayoub | ❌ NOT DONE |
| 12 | Set up DMARC report analysis (easyDMARC or dmarcian free tier) | Ayoub | ❌ NOT DONE |
| 13 | Configure real-time email verification at signup (ZeroBounce API) | Ayoub | ❌ NOT DONE |
| 14 | Create warming monitoring dashboard in Klaviyo | Ayoub | ❌ NOT DONE |
| 15 | Include business address in email footer template | Giuliano | ❌ NOT DONE |
| 16 | Verify Shopify default transactional emails are disabled | Ayoub | ❌ NOT DONE |

### P2 — EXECUTE (During Warming)

| # | Action | Owner | Status |
|---|--------|-------|--------|
| 17 | Begin Week 1-2 warming protocol (Tier 2 segment, 50-100/day) | Ayoub | ❌ NOT STARTED |
| 18 | Daily monitoring: open rate, bounce, spam, GPT reputation | Ayoub | ❌ NOT STARTED |
| 19 | Expand to 30-Day Engaged at Week 3 | Ayoub | — |
| 20 | Expand to 60-Day Engaged at Week 5 | Ayoub | — |
| 21 | Re-activate paused flows one at a time (Weeks 5-6) | Ayoub | — |
| 22 | Implement Conversational Cloak on key first emails | Ayoub | ❌ NOT DONE |

### P3 — POST-WARMUP

| # | Action | Owner | Status |
|---|--------|-------|--------|
| 23 | Upgrade DMARC to `p=quarantine` | Ayoub | — |
| 24 | Build automated sunset protocol (120-day trigger) | Ayoub | ❌ NOT DONE |
| 25 | Introduce sender personas (info@ + help@) | Ayoub | — |
| 26 | Establish monthly deliverability audit cadence | Ayoub | — |
| 27 | Consider BIMI implementation | Ayoub | DEFERRED |
| 28 | Monitor for 30+ days at `p=quarantine` before considering `p=reject` | Ayoub | — |

---

## 9. BENCHMARKS REFERENCE

| Metric | Industry Benchmark | BrightKidCo Warming Target | BrightKidCo Steady State |
|--------|-------------------|-----------------------------|--------------------------|
| Open Rate | >45% | >50% (W1-2), >45% (W3-4), >40% (W5-6) | >45% |
| Click Rate | >1% | >2% (during warming) | >2% |
| Bounce Rate | <1% | <0.5% | <0.5% |
| Spam Complaint Rate | <0.01% | <0.01% | <0.01% |
| Unsubscribe Rate | <0.5% | <0.3% | <0.3% |
| Klaviyo Deliverability Score | 70+ | 70+ | 75+ |
| Inbox Placement Rate | >90% | >95% | >95% |
| Pop-up Conversion Rate | 5%+ | 8%+ | 8%+ |

---

## 10. GAPS REQUIRING EXTERNAL INPUT

| # | Gap | Why It Matters | Recommended Action |
|---|-----|---------------|-------------------|
| G1 | Google Postmaster Tools verification status unknown | Cannot monitor Gmail domain reputation — the PRIMARY warming signal | Verify immediately at gmail.com/postmaster |
| G2 | MX record for send.brightkidco.com unknown | Some MBPs reject email from domains without MX | Check with `dig MX send.brightkidco.com` |
| G3 | DKIM records not explicitly documented | Must verify DKIM is actually configured, not just assumed | Check Klaviyo Settings > Domains > Authentication |
| G4 | No email verification service configured | Cannot verify list quality before first send | Set up ZeroBounce account |
| G5 | No engagement segments built | Cannot start warming without target segments | Build all 9 segments in Klaviyo |
| G6 | No warming content created | 6+ educational emails needed for Week 1-2 | Content team must produce before warming starts |
| G7 | Blacklist check not performed | If domain is blacklisted, all sending is blocked | MXToolbox blacklist check |
| G8 | Shopify integration status unknown | No order events, no catalog sync without integration | Verify Klaviyo-Shopify app installed and events syncing |
| G9 | Reply monitoring not configured | Replies = #1 deliverability signal but support@ inbox monitoring unknown | Set up reply monitoring, respond within 24h |
| G10 | No monitoring dashboard | Daily monitoring mandatory during warming but no dashboard exists | Create Klaviyo dashboard with key metrics + threshold alerts |

---

*Layer 36 synthesis complete. Consolidated from 4 rounds of research: R1 client files (290 lines), R2 skill loading (14 skills, 372 lines), R3 wiki extraction (344 lines), R4 cross-reference (325 lines). Total source material: ~1,331 lines. All findings synthesized, conflicts resolved, gaps identified, and action items prioritized.*
