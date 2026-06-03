# LAYER 36 ROUND 3: DELIVERABILITY INFRASTRUCTURE — Wiki Extraction
## BrightKidCo — Email Deliverability Knowledge Extraction

**Date:** 2026-05-25
**Source:** Wiki brain — skills, technical notes, TENZA deliverability SOPs
**Sections Explored:** 8 wiki areas, 6 atomic deliverability skills, 3 technical notes

---

## 1. WIKI SECTIONS EXPLORED

| # | Wiki Section | Path | Deliverability Findings |
|---|-------------|------|------------------------|
| 1 | Skills: Email Authentication Setup | skills/email-marketing/deliverability-technical/ | Complete SPF/DKIM/DMARC/BIMI setup procedure, DMARC phased rollout, sending subdomain architecture |
| 2 | Skills: Domain Warming | skills/email-marketing/deliverability-technical/ | 6-week warming protocol, Tier 1/2/3 classification, engagement-based segment targeting |
| 3 | Skills: List Hygiene | skills/email-marketing/deliverability-technical/ | Third-party verification, sunset protocol, bot detection, disposable domain blocklist |
| 4 | Skills: Content Signature Optimization | skills/email-marketing/deliverability-technical/ | Primary Inbox Cloaking Doctrine, hidden text injection, conversational cloak |
| 5 | Skills: Spam Recovery | skills/email-marketing/deliverability-technical/ | 6-week recovery protocol, Code Red escalation, Pre-BFCM accelerated variant |
| 6 | Wiki: Cold Email Setup Complete | skills-tools/technical/ | TENZA live infrastructure: 5 domains, 15 inboxes, Cloudflare DNS, ManyReach warmup |
| 7 | Wiki: BrightKidCo Memory Drop | skills-tools/memory-drops/ | Project context: training underwear for autistic children, Giuliano's brand |
| 8 | Wiki: Layer 36 Archive | brightkidco/archive/diagnosis/ | Prior deliverability diagnosis: 620-line blueprint, authentication done, warming NOT started |

---

## 2. DELIVERABILITY KNOWLEDGE EXTRACTED FROM WIKI

### 2.1 Authentication Infrastructure (SPF/DKIM/DMARC/BIMI)

**Source:** deliverability-authentication-setup skill (TENZA Fortune 500 SOP)

**Key findings:**

- **Dedicated sending subdomain is mandatory** for reputation isolation. Marketing emails should NEVER go from the root domain. Subdomain pattern: `hello.brand.com` or `send.brand.com`
- **SPF hard fail (-all)** recommended over soft fail (~all) for stronger authentication
- **SPF 10-lookup limit** is a critical constraint. Every `include:` counts. With Ionos + Klaviyo already included, BrightKidCo has 2 lookups used. Adding more services (Gorgias, Recharge, Yotpo) can quickly hit the limit. SPF flattening may be needed.
- **DMARC must be phased:** `p=none` → `p=quarantine` (after 7+ days clean) → `p=reject` (after 30+ days at quarantine). Never skip phases.
- **DMARC reports must go to a monitored inbox.** Connect to easyDMARC or dmarcian for analysis. 7-14 day observation period needed to identify ALL sending sources before enforcement.
- **Sending source audit is critical** before DMARC enforcement. Common sources: Klaviyo, Gorgias/Zendesk, Recharge/Loop, Yotpo/Judge.me, Google Workspace. Every legitimate source must pass SPF/DKIM.
- **BIMI requires DMARC at enforcement** (quarantine or reject) + VMC certificate (takes 1-2 weeks) + SVG Tiny P/S logo. Gmail requires VMC.
- **MX record on sending subdomain** is required by some mailbox providers for trust validation.
- **rDNS/PTR record** is important for German ISPs. Managed by IP provider, not DNS provider.
- **Google Postmaster Tools** verification is non-negotiable — must be set up before first send.

**BrightKidCo application:**
- Sending domain: `send.brightkidco.com` — already configured ✅
- SPF includes Ionos + Klaviyo — verify lookup count ≤10
- DMARC policy unknown — must verify current state and set to `p=none` if not already
- Google Postmaster Tools status unknown — MUST verify immediately
- MX record for `send.brightkidco.com` — unknown, must check
- BIMI — defer to post-warm-up (not critical for launch)

---

### 2.2 Domain Warming Protocol

**Source:** deliverability-domain-warming skill + deliverability-spam-recovery skill

**Key findings:**

- **New domains have ZERO reputation.** Mailbox providers treat unknown senders with extreme suspicion. Sending full volume from Day 1 guarantees spam folder placement or blocking.
- **Tier classification determines starting segment:**
  - Tier 1 (Healthy): GPT "High", open rates >40% → start with 90-Day Engaged
  - Tier 2 (New/Rewarming): New domain or no sends in 30+ days → start with Tier 2 Initial Warm-Up segment
  - Tier 3 (Active Recovery): GPT "Low"/"Bad" → start with 14-Day Engaged (Intensive Care)
- **BrightKidCo is Tier 2** — new domain, zero engagement history
- **6-week warming schedule:**
  - Weeks 1-2: 50-100 subscribers/day max, 3 campaigns/week to Tier 2 segment, value-only content
  - Weeks 3-4: Expand to 30-Day Engaged, 45%+ open rate target
  - Weeks 5-6: Expand to 60-Day then 90-Day Engaged, re-activate flows one by one
- **No engagement data fallback:** Use purchase-based segments (30-day purchasers = 14-Day equivalent, 90-day purchasers = 90-Day equivalent). If no purchases, use seed list of 50-100 known customers.
- **Daily monitoring is mandatory during warm-up:**
  - Open Rate: >50% (Weeks 1-2), >45% (Weeks 3-4), >40% (Weeks 5-6)
  - Bounce Rate: <0.5% (halt if >1%)
  - Spam Complaint Rate: <0.03% (halt if >0.05%)
  - GPT Reputation: Medium to High
- **Flow management during warm-up:** Pause ALL flows except Welcome, Browse Abandonment, Cart/Checkout Abandonment, Post-Purchase
- **Content rules during warm-up:** NO aggressive sales, NO discount-heavy promotions. ONLY: educational content, best-seller highlights, community content, founder stories. Plain-text preferred.
- **Reply prompts are powerful:** "Just reply to this email and let me know..." generates positive engagement signals

**Code Red Protocol (Emergency):**
- If GPT reputation is "Bad" (red) — nearly 100% of emails in spam
- Enable Double Opt-In temporarily
- Gate Welcome Flow behind open of Email #1
- Add "Check your spam folder" to sign-up confirmation
- Send ONLY to VIP Clickers for first 2 weeks
- Consider 48-72 hour sending pause for reputation reset

**Pre-BFCM Accelerated Recovery (4-week variant):**
- Aggressive list purge (90-120 day unengaged suppressed)
- 4-5 campaigns/week instead of 3
- Expand to 120-Day Engaged after 2 weeks at 90-Day
- Use when timeline is compressed

**BrightKidCo application:**
- Tier 2 classification confirmed — new domain, no campaigns sent
- Zero engagement history → must use purchase-based segments or seed list
- 6-week warming is NON-NEGOTIABLE before any promotional sends
- Daily volume cap: 50-100/day in Week 1
- Content must be value-only for first 2 weeks
- GPT monitoring must start from Day 1

---

### 2.3 List Hygiene & Data Quality

**Source:** deliverability-list-hygiene skill

**Key findings:**

- **Third-party email verification is mandatory before first send.** Export list → ZeroBounce/NeverBounce → suppress invalid addresses. Expected: 2-5% of list may be invalid.
- **7 engagement segments must exist before warming:**
  1. 14-Day Engaged
  2. 30-Day Engaged
  3. 60-Day Engaged
  4. 90-Day Engaged
  5. At-Risk (opened but never clicked in 90 days)
  6. Ghost Profiles (Apple MPP non-clickers)
  7. 120-Day Unengaged Trigger
- **Bot detection requires two segments:**
  1. Known Fake Domains (20+ disposable email domains: mailinator, guerrillamail, etc.)
  2. Non-Engaged Sleepers (received 10+ emails, zero opens, zero clicks)
- **Automated Sunset Protocol:**
  - Trigger: 120 days unengaged + received 20+ emails + no purchases
  - Flow: Re-engagement email → 4-7 day wait → tag `unengaged = True` → suppress
  - Master Suppression List: `unengaged is True` — exclude from ALL sends
- **Monthly hygiene checklist (10 items):**
  1. Review bounce rate trend (<0.5% target)
  2. Review spam complaint rate (<0.03% target)
  3. Verify Sunset Flow is live
  4. Review 120-Day Unengaged segment size
  5. Export Ghost Profiles for manual suppression
  6. Check GPT domain reputation
  7. Verify verification service credits
  8. Review lead source quality metrics
  9. Audit disposable domain blocklist
  10. Verify all sends include suppression + bot exclusions
- **Bounce rate thresholds:**
  - <0.3% = Excellent
  - 0.3-0.5% = Good
  - 0.5-0.99% = Warning (investigate)
  - 1-2% = Critical (immediate audit)
  - >2% = Emergency (full send pause)
- **Revenue impact:** 10% deliverability drop on 100K list = €1,500+ per campaign lost

**BrightKidCo application:**
- List hygiene audit NOT done — must run before first send
- No engagement segments built — must build all 7 before warming
- No sunset protocol — must build after Week 6
- Bot detection segments — must build for ongoing hygiene
- Real-time verification API — must integrate at signup level

---

### 2.4 Content Signature Optimization (Primary Inbox Cloaking)

**Source:** deliverability-content-signature-optimization skill (TENZA proprietary)

**Key findings:**

- **Algorithmic classification is multi-dimensional.** Gmail/Outlook sort into Primary, Promotions, Social, Updates tabs using: text-to-image ratio, keyword density, link-to-text ratio, sender reputation, sender persona, engagement velocity, reply rate.
- **Two-part cloaking system:**
  1. **Universal Transactional Cloak** — 300-400 word hidden text block in EVERY email, disguised as "Important Privacy Information" / "Account Security" notice. Uses `display:none` div. Improves text-to-image ratio + saturates with high-priority keywords.
  2. **Situational Conversational Cloak** — ~300 word hidden block mimicking personal 1-to-1 email. Deployed ONLY on: first Welcome email, first abandonment email (checkout/cart/browse), winback emails.
- **Sender Persona Protocol:**
  - Brand Announcer (`info@`) — campaigns, welcome flow, cross-sell
  - Helpful Agent (`help@`) — abandonment flows, post-purchase, replenishment, review requests, winback
- **Deployment matrix:** Transactional Cloak goes in EVERY email. Conversational Cloak goes in Welcome Email #1, Abandonment Email #1 (all types), and Winback flows only.
- **Klaviyo implementation:** Create Saved Blocks for each cloak. Drag into template as last elements before footer. Both cloaks are invisible in preview.
- **Emergency rollback:** Remove cloaks if spam complaints exceed 0.2%, support tickets about "security email" appear, inbox placement drops below 80%.

**BrightKidCo application:**
- Universal Transactional Cloak must be in EVERY email from Day 1
- Conversational Cloak on Welcome Email #1 and all abandonment Email #1s
- Two sender personas needed: `info@send.brightkidco.com` (Brand Announcer) and `help@send.brightkidco.com` (Helpful Agent)
- Current from address "Lena from BrightKidCo" <support@brightkidco.com> — need to verify this aligns with persona strategy
- Cloaking aligns perfectly with BrightKidCo's personal, conversational brand voice (Lena, mom of 2 autistic sons)

---

### 2.5 Spam Recovery & Reputation Repair

**Source:** deliverability-spam-recovery skill

**Key findings:**

- **6-week standard recovery protocol:**
  - Weeks 1-2: 14-Day Engaged only, 3 campaigns/week, value-only content, 50%+ open rate target
  - Weeks 3-4: 30-Day Engaged, 45%+ open rate target
  - Weeks 5-6: 60-Day → 90-Day Engaged, re-activate flows one by one
- **Recovery campaign content template:** Hero → Bridge → Core Content (list-style tips) → Social Proof → Soft CTA. NO discounts, NO hard-sell language, NO aggressive CTAs.
- **Forbidden elements during recovery:** Discount codes, "Buy Now", "Limited Time", countdown timers, urgency banners, affiliate links
- **Flow re-activation order:** Welcome → Browse Abandonment → Cart/Checkout Abandonment → Post-Purchase. 48-72 hour monitoring between each.
- **Decision points throughout recovery:** Each phase transition requires specific metric thresholds. Never advance if open rate drops below target.
- **Code Red protocol:** Double Opt-In + Modified Welcome Flow (gate behind Email #1 open) + "Check Your Spam" pop-up + VIP Clickers only

**BrightKidCo application:**
- Recovery protocol is NOT needed yet (new domain, no reputation damage) — but must be documented for future reference
- Recovery campaign content template is useful as a baseline for warming content too
- VIP Clickers segment must be built before warming starts (for emergency use)
- The forbidden elements list applies to warming content as well

---

### 2.6 TENZA Live Infrastructure Reference

**Source:** wiki/skills-tools/technical/cold-email-setup-complete

**Key findings:**

- TENZA has a live cold email infrastructure: 5 domains, 15 inboxes, all DNS verified via Cloudflare
- **DNS pattern:** A records for domain + mail subdomain, MX record, SPF (v=spf1 mx ~all), DMARC (p=none), DKIM (mail._domainkey)
- **Warmup configuration:** Start at 10 emails/day, 20% daily increase, max 50/day, 35% reply simulation, skip weekends, 120s delay between sends
- **SMTP config:** Port 587 for sending, port 993 for IMAP
- **Daily limit per sender:** 50 emails
- **DMARC starts at p=none** for all new domains — standard practice

**BrightKidCo application:**
- BrightKidCo uses Klaviyo (not self-hosted SMTP), so the infrastructure model is different
- The warmup parameters (10/day start, 20% increase, 50/day max) are a useful reference for Klaviyo campaign volume
- DMARC p=none is confirmed as the correct starting point
- The 35% reply simulation concept translates to encouraging replies in BrightKidCo emails

---

### 2.7 Existing BrightKidCo Layer 36 Diagnosis

**Source:** brightkidco/archive/diagnosis/layer-36-deliverability.md (620 lines, 25KB)

**Key findings from prior diagnosis:**

- **Authentication is DONE:** SPF (Ionos + Klaviyo), DKIM (Klaviyo-managed), DMARC (configured), custom tracking subdomain (send.brightkidco.com)
- **Domain warming is NOT STARTED** — this is the critical gap
- **Google Postmaster Tools status UNKNOWN** — must verify
- **List hygiene audit NOT DONE** — must run before first send
- **No engagement segments built** — must build all warming segments
- **No sunset protocol** — must build after warm-up
- **From address:** "Lena from BrightKidCo" <support@brightkidco.com>
- **Klaviyo login:** support@brightkidco.com
- **Collaborator:** ayoub@tenzamarketing.com
- **Tier classification:** Tier 2 (New/Rewarming)
- **DMARC recommended phases:** p=none → p=quarantine (Week 6) → p=reject (Week 10)

---

## 3. ADDITIONAL INSIGHTS & WARNINGS FROM WIKI

### 3.1 Critical Warnings

1. **NEVER send to "All Subscribers"** — this destroys sender reputation. Always use engagement-based segments.
2. **SPF 10-lookup limit is a silent killer.** With Ionos + Klaviyo already included, adding Gorgias, Recharge, Yotpo, Judge.me, Google Workspace can exceed the limit. Monitor and flatten as needed.
3. **Apple MPP (Mail Privacy Protection) inflates open rates.** Apple Mail pre-fetches email content, registering false opens. Must track clicks, not just opens, for true engagement measurement. Ghost Profile segment catches these.
4. **Reply rate matters for deliverability.** Emails that generate replies get classified as "important" by algorithms. Every BrightKidCo email should include a reply prompt.
5. **Plain-text fallback is mandatory.** Every email must have a complete plain-text version. Hidden text blocks improve algorithmic classification.
6. **Bounce rate >1% = immediate halt.** No exceptions. Must run list hygiene before resuming.
7. **Spam complaint rate >0.03% = red flag.** Gmail's threshold is 0.3% before blocking, but 0.03% is the operational ceiling for healthy senders.
8. **DMARC enforcement too early breaks legitimate email.** Never escalate to quarantine/reject without 7-14 days of monitoring DMARC reports and remediating all non-compliant sources.
9. **Cold email warmup and Klaviyo warming are DIFFERENT protocols.** Cold email (ManyReach-style) warms SMTP infrastructure. Klaviyo warming builds domain reputation for marketing automation. Don't confuse the two.
10. **Transactional emails must be separated from promotional.** No marketing content in order confirmations/shipping emails — it voids CAN-SPAM exemption and risks spam classification.

### 3.2 BrightKidCo-Specific Insights

1. **Niche audience (parents of autistic children) = high engagement potential.** This audience is emotionally invested and likely to engage deeply with relevant content. Warming should be faster than average if content resonates.
2. **"Lena from BrightKidCo" persona aligns with deliverability best practices.** Personal from-names outperform brand names. The mom-of-2-autistic-sons story is genuine and creates trust.
3. **Sensitive content requires extra caution.** Words like "cure," "fix," "miracle," "easy" are both deliverability risks (spam triggers) and brand risks (offensive to the autism community). The existing prohibitions in Onboarding-todos.txt are correct.
4. **Training underwear is a high-intent purchase.** Parents searching for this product are solving a real problem. Abandonment flows should have high recovery rates if deliverability is solid.
5. **Small initial list = faster warming.** BrightKidCo likely has a small subscriber base, which means warming can progress faster (less volume to ramp). 50-100/day cap in Week 1 may cover most of the list.
6. **Shopify integration must disable default emails.** Duplicate sends (Shopify + Klaviyo) hurt deliverability and confuse customers.

---

## 4. DELIVERABILITY ACTION PRIORITY MATRIX FOR BRIGHTKIDCO

| Priority | Action | Wiki Source | Status |
|----------|--------|-------------|--------|
| P0 | Verify Google Postmaster Tools for send.brightkidco.com | auth-setup skill | UNKNOWN |
| P0 | Run list through ZeroBounce before first send | list-hygiene skill | NOT DONE |
| P0 | Verify DMARC is at p=none | auth-setup skill | UNKNOWN |
| P0 | Check MX record for send.brightkidco.com | auth-setup skill | UNKNOWN |
| P0 | Run blacklist check on send.brightkidco.com | spam-recovery skill | NOT DONE |
| P1 | Build all 7 warming segments in Klaviyo | domain-warming skill | NOT DONE |
| P1 | Build bot detection segments (2) | list-hygiene skill | NOT DONE |
| P1 | Implement Universal Transactional Cloak in templates | content-signature skill | NOT DONE |
| P1 | Set up two sender personas (info@ + help@) | content-signature skill | NOT DONE |
| P2 | Begin 6-week warming protocol | domain-warming skill | NOT STARTED |
| P2 | Set up DMARC report analysis (easyDMARC/dmarcian) | auth-setup skill | NOT DONE |
| P2 | Configure real-time email verification at signup | list-hygiene skill | NOT DONE |
| P3 | Build automated sunset protocol (after Week 6) | list-hygiene skill | NOT DONE |
| P3 | Implement Conversational Cloak on key emails | content-signature skill | NOT DONE |
| P3 | Consider BIMI implementation | auth-setup skill | DEFERRED |

---

## 5. KEY METRICS & BENCHMARKS (From Wiki)

| Metric | Healthy | Warning | Critical | Source |
|--------|---------|---------|----------|--------|
| Open Rate (engaged) | >45% | 35-45% | <35% | domain-warming |
| Bounce Rate | <0.5% | 0.5-1% | >1% | list-hygiene |
| Spam Complaint Rate | <0.01% | 0.01-0.03% | >0.03% | spam-recovery |
| GPT Domain Reputation | High (Green) | Medium (Yellow) | Low/Bad | domain-warming |
| Inbox Placement Rate | >90% | 80-90% | <80% | list-hygiene |
| Unsubscribe Rate | <0.2% | 0.2-0.5% | >0.5% | list-hygiene |
| Unengaged Rate (>120d) | <15% | 15-25% | >25% | list-hygiene |
| Klaviyo Deliverability Score | 70+ (Excellent) | 65-70 | <65 (Poor) | layer-36-archive |

---

## 6. WARMING TIMELINE SUMMARY (From Wiki)

```
Week 0 (Before First Send):
  - List verification (ZeroBounce)
  - Build warming segments
  - Verify GPT, DMARC, MX, blacklist
  - Pause non-essential flows
  - Implement Transactional Cloak

Weeks 1-2 (Intensive Care):
  - 50-100 subscribers/day MAX
  - 3 campaigns/week to Tier 2 segment
  - Value-only content (educational, best-sellers, community)
  - Daily monitoring: open rate, bounce, spam, GPT

Weeks 3-4 (Gradual Expansion):
  - Expand to 30-Day Engaged
  - 3 campaigns/week, 45%+ open rate target
  - Mild promotions allowed (20% off) but 60%+ value content

Weeks 5-6 (Full Deployment):
  - Expand to 60-Day then 90-Day Engaged
  - Re-activate flows one by one (48-72h monitoring each)
  - Upgrade DMARC to p=quarantine
  - Build sunset protocol

Post-Warm-Up (Ongoing):
  - 3-4 campaigns/week to 90-Day Engaged
  - 1 campaign/month to expanded list
  - Monthly deliverability audit
  - Automated sunset protocol active
```

---

*Wiki extraction complete. 8 wiki sections explored, 6 atomic deliverability skills loaded, 3 technical notes reviewed. All findings documented with BrightKidCo-specific application notes.*
