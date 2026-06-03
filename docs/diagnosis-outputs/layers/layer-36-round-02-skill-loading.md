# Layer 36 Round 2: Deliverability Infrastructure — Skill Loading Report

**Task:** Load all 14 deliverability skills and extract actionable rules for BrightKidCo
**Generated:** 2026-05-25

---

## Layer 36 Context (from overnight-plan.md)

> The sending infrastructure is already set up. The Klaviyo account is live with login support@brightkidco.com. DNS is fully configured with DMARC, SPF including both Ionos and Klaviyo, and a custom tracking subdomain. The sending domain is Send.brightkidco.com. The from address is "Lena from BrightKidCo" support@brightkidco.com with the same address as reply-to.
>
> However, this is a new sending domain. New sending domains need warming — gradual volume ramp over approximately 6 weeks, starting with the most engaged segments. The authentication is done but the reputation is not built yet. First sends should go to small, engaged segments, not the full list.

---

## Skills Inventory

| # | Skill Name | Status | Body Size | Key Domain |
|---|-----------|--------|-----------|------------|
| 1 | deliverability-audit-monitoring | ✓ Found | 22432 chars | Audit & Monitoring |
| 2 | deliverability-authentication-setup | ✓ Found | 21101 chars | Authentication (SPF/DKIM/DMARC) |
| 3 | deliverability-content-signature-optimization | ✓ Found | 26816 chars | Content & Inbox Placement |
| 4 | deliverability-domain-warming | ✓ Found | 21111 chars | Domain Warming |
| 5 | deliverability-list-hygiene | ✓ Found | 30064 chars | List Hygiene |
| 6 | deliverability-spam-recovery | ✓ Found | 29395 chars | Spam Recovery |
| 7 | deliverability-transactional-code | ✓ Found | 20873 chars | Transactional Email Code |
| 8 | email-audit-execution | ✓ Found | 22385 chars | Email Audit Execution |
| 9 | email-collection-list-growth | ✓ Found | 14289 chars | List Growth |
| 10 | email-collection-popup-strategy | ✓ Found | 20893 chars | Pop-Up Strategy |
| 11 | email-cta-conversion-design | ✓ Found | 39518 chars | CTA & Conversion Design |
| 12 | email-design-master | ✓ Found | 20191 chars | Email Design |
| 13 | email-design-standards-and-template-build | ✓ Found | 22836 chars | Design Standards & Templates |
| 14 | email-template-library | ✓ Found | 42179 chars | Template Library |

**Total skills loaded: 14/14** (all found on disk)

---

## Authentication Requirements Extract

### Source Skills: deliverability-authentication-setup, deliverability-audit-monitoring

### SPF (Sender Policy Framework)

- **SPF TXT record:** `v=spf1 include:spf.klaviyo.com ~all` (Host: `hello` or `@` depending on provider)
- SPF record has multiple TXT records starting with `v=spf1` — there must be only one
- [ ] Dedicated sending subdomain created and verified in Klaviyo — green checkmarks on SPF, DKIM, and Domain
- [ ] Full sending source audit completed — all legitimate sources pass SPF and/or DKIM
- [ ] SPF lookup count verified at 10 or fewer (including all `include:` statements)
- [ ] GPT shows 100% authentication pass rate across SPF, DKIM, and DMARC
- [[spf-record]] — SPF troubleshooting scenarios

### DKIM (DomainKeys Identified Mail)

- **DKIM CNAME record 1:** `klaviyo1._domainkey.hello.yourbrand.com` → target provided by Klaviyo
- **DKIM CNAME record 2:** `klaviyo2._domainkey.hello.yourbrand.com` → target provided by Klaviyo
- DKIM CNAME points to wrong target — re-copy from Klaviyo
- [ ] Dedicated sending subdomain created and verified in Klaviyo — green checkmarks on SPF, DKIM, and Domain
- [ ] Full sending source audit completed — all legitimate sources pass SPF and/or DKIM
- [ ] GPT shows 100% authentication pass rate across SPF, DKIM, and DMARC
- [[dkim-record]] — DKIM troubleshooting scenarios

### DMARC (Domain-based Message Authentication)

- **Host:** `_dmarc` (or `_dmarc.hello` for subdomain)
- **Value:** `v=DMARC1; p=none; rua=mailto:dmarc-reports@yourbrand.com; ruf=mailto:dmarc-forensics@yourbrand.com; fo=1; pct=100`
- [ ] DMARC record published at `p=none` with DMARC analysis platform connected and showing data
- [ ] DMARC policy escalated to `p=quarantine` after 7+ days of clean data
- [ ] GPT shows 100% authentication pass rate across SPF, DKIM, and DMARC
- Verify DMARC reports are still flowing to the analysis platform
- Confirm no new unauthorized sending sources have appeared in DMARC data
- DMARC policy escalation (moving to `p=reject`)
- [[dmarc-policy]] — DMARC implementation deep dive

### BIMI (Brand Indicators for Message Identification)

- [ ] Brand logo in vector format available for BIMI (if BIMI is in scope)
- BIMI-compliant SVG logo file
- **Host:** `default._bimi` (or `default._bimi.hello` for subdomain)
- **Value:** `v=BIMI1; l=https://cdn.yourbrand.com/bimi/logo.svg; a=https://cdn.yourbrand.com/bimi/cert.pem;`
- [ ] BIMI record published (if applicable) with SVG and VMC hosted on HTTPS URLs — verified with BIMI Record Checker

### BrightKidCo Authentication Status

- ✅ SPF configured (Ionos + Klaviyo)
- ✅ DMARC configured
- ✅ Custom tracking subdomain: Send.brightkidco.com
- ✅ From address: "Lena from BrightKidCo" <support@brightkidco.com>
- ⚠️ BIMI: Not configured (defer to post-warming)
- ⚠️ Verify DKIM key strength (2048-bit minimum)

---

## Domain Warming Schedule Extract

### Source Skill: deliverability-domain-warming

### Core Warming Principles

- [ ] Dedicated sending subdomain configured and verified in Klaviyo — green checkmarks on all 3
- [ ] Google Postmaster Tools set up and verifying the sending subdomain — data populating (may take 24-48 hours)
- [ ] Client briefed and agreed to the strategic pause and reduced sending audience
- `Opened Email` at least once in last 14 days **OR** `Clicked Email` at least once in last 14 days
- `Opened Email` at least once in last 30 days **OR** `Clicked Email` at least once in last 30 days
- `Opened Email` at least once in last 60 days **OR** `Clicked Email` at least once in last 60 days
- `Opened Email` at least once in last 90 days **OR** `Clicked Email` at least once in last 90 days
- (`Clicked Email` at least once in last 30 days)
- **OR** (Is in main subscriber list **AND** `Was Added` in last 15 days)
- (`Opened Email` at least once in last 14 days) **OR** (`Clicked Email` at least once in last 14 days)
- `Clicked Email` at least once in last 90 days
- `Opened Email` at least once in last 90 days
- `Clicked Email` zero times in last 90 days
- `Clicked Email` zero times in last 120 days
- `Placed Order` zero times in last 120 days

### Recommended 6-Week Warming Schedule for BrightKidCo

| Week | Daily Volume | Target Segment | Focus |
|------|-------------|----------------|-------|
| 1 | 50-100/day | Most engaged (opened in last 30 days) | Build initial reputation |
| 2 | 100-250/day | Engaged (opened in last 60 days) | Monitor inbox placement |
| 3 | 250-500/day | Active (opened in last 90 days) | Check spam folder rate |
| 4 | 500-1000/day | Broader engaged (clicked in last 90 days) | Watch complaint rate |
| 5 | 1000-2000/day | Active subscribers | Verify consistent delivery |
| 6 | 2000+/day | Full list (excluding unengaged) | Full ramp, monitor closely |

### Warming Rules

- NEVER send to full list in week 1 — destroys domain reputation instantly
- Start with subscribers who opened/clicked in last 30 days
- Monitor complaint rate: must stay below 0.1% (0.3% = instant damage)
- Monitor bounce rate: must stay below 2% (hard bounces)
- If spam folder placement detected, PAUSE and reduce volume by 50%
- Weekend sends typically get lower engagement — warm on weekdays first
- Transactional emails (order confirmation, shipping) don't count toward warming volume
- Use Klaviyo's built-in sending reputation dashboard to track progress

---

## List Hygiene Rules Extract

### Source Skills: deliverability-list-hygiene, deliverability-audit-monitoring

### Bounce Handling

- [ ] Email verification service account active with available credits (ZeroBounce, NeverBounce, Kickbox, or similar)
- [ ] Bounce rate trend data pulled — current rate known
- Sourced from unverified giveaway/contest entries — suppress if bounce rate > 3% or spam complaint rate > 0.05%
- Multiple hard bounces over time — Klaviyo auto-suppresses, verify the suppression list is active
- [ ] Review bounce rate trend (last 30 days) — target < 0.5%. If > 1%, escalate.
- [ ] Bounce rate documented (current rate: ___%) — target < 0.5%
- Bounce rate threshold change by ESP — update benchmark tables

### Suppression Rules

- [ ] Current suppression lists and sunset flow status verified (active/inactive)
- Sourced from purchased/rented lists — immediate suppression
- Sourced from unverified giveaway/contest entries — suppress if bounce rate > 3% or spam complaint rate > 0.05%
- Multiple hard bounces over time — Klaviyo auto-suppresses, verify the suppression list is active
- No engagement after receiving 10+ emails — suppress (bot/sleeper profile)
- [ ] Export Ghost Profiles segment and review for manual suppression candidates
- [ ] Verify all campaign sends and flow triggers include the Master Suppression Segment and bot exclusion filters
- [ ] Risky subscribers suppressed

### Sunset Windows

- [ ] Current suppression lists and sunset flow status verified (active/inactive)
- [ ] Verify Sunset Flow is live and has processed profiles in the last 30 days
- [ ] Automated sunset protocol live (trigger segment + sunset flow + master suppression)
- [[automated-sunset-protocol]] — Automated sunset flow architecture

### General Hygiene Practices

- [ ] Klaviyo account access with Analytics, Segments, Lists, Flows, and Settings permissions
- [ ] Google Postmaster Tools (GPT) set up and showing data for the sending domain
- [ ] Email verification service account active with available credits (ZeroBounce, NeverBounce, Kickbox, or similar)
- [ ] Last 90 days of campaign performance data available in Klaviyo Analytics
- [ ] Bounce rate trend data pulled — current rate known
- [ ] Spam complaint rate from last 30 days known (Klaviyo + GPT)
- [ ] Current suppression lists and sunset flow status verified (active/inactive)
- **Scenario A (Low across all domains):** Widespread sender reputation issue. Initiate 6-Week Recovery Protocol (send only to 14-Day Engaged segment).
- **Scenario B (Low on specific domains):** Isolated reputation issue (most commonly Microsoft). Create recovery segments targeting only the underperforming domains.
- Total subscriber count: `[ENTER]`

---

## Spam Avoidance Rules Extract

### Source Skills: deliverability-spam-recovery, deliverability-content-signature-optimization, deliverability-audit-monitoring

### Content Guidelines to Avoid Spam Filters

- **Per campaign launch:** Before sending to a broad segment (> 10K), verify: segment is engagement-based (90-Day Engaged minimum for general sends), content is not promotional-only, and GPT reputation is "Medium" or "High".
- **Recovery tracking log maintenance:** Maintain a chronological log of every campaign sent during recovery with its open rate, click rate, spam complaint rate, and GPT tier at time of send. This log is critical for identifying which content types drive the strongest engagement during recovery and for briefing future recovery efforts.

### Sending Pattern Rules

- [ ] **Google Postmaster Tools configured** — confirm IP and Domain Reputation dashboards are active and accessible for the sending domain; note current GPT reputation level and the date of any drop.
- [ ] Client debrief completed: summary of recovery timeline, engagement metrics before/after, GPT reputation progression, and recommendations for ongoing monitoring.
- **Per campaign launch:** Before sending to a broad segment (> 10K), verify: segment is engagement-based (90-Day Engaged minimum for general sends), content is not promotional-only, and GPT reputation is "Medium" or "High".
- **Recovery tracking log maintenance:** Maintain a chronological log of every campaign sent during recovery with its open rate, click rate, spam complaint rate, and GPT tier at time of send. This log is critical for identifying which content types drive the strongest engagement during recovery and for briefing future recovery efforts.

### Reputation & Blacklist Monitoring

- [ ] **Google Postmaster Tools configured** — confirm IP and Domain Reputation dashboards are active and accessible for the sending domain; note current GPT reputation level and the date of any drop.
- [ ] **Recent campaign audit performed** — compare recent campaigns against benchmarks: open rate (< 45%), spam complaint rate (> 0.03% or 0.01% target), bounce rate (> 1%), unsubscribe rate (> 0.5%). Identify the campaign or date range when reputation degraded.
- [ ] **Code Red assessment** — determine if the account is in Code Red status (nearly 100% of emails including transactional going to spam). If yes, prepare Temporary Double Opt-In, Modified Two-Step Welcome Flow, and "Check Your Spam" pop-up before beginning Plan 1.
- [ ] Google Postmaster Tools shows GPT reputation at consistent "Medium" (Yellow) or "High" (Green) for at least 7 consecutive days.
- [ ] All core flows fully re-activated and delivering to inbox: Welcome Series, Browse Abandonment, Cart/Checkout Abandonment, Post-Purchase.
- [ ] Code Red measures reverted (if applicable): Double Opt-In switched back to Single Opt-In; Welcome Flow restored to original (Conditional Split removed); "Check Your Spam" pop-up reverted to standard success message.
- [ ] Client debrief completed: summary of recovery timeline, engagement metrics before/after, GPT reputation progression, and recommendations for ongoing monitoring.
- **Weekly during recovery:** Check GPT reputation (IP and Domain) every Monday and Thursday. Log reputation tier in the recovery tracking document.

---

## Content Signature Optimization Extract

### Source Skill: deliverability-content-signature-optimization

### Email Structure Optimization

- Drag `[TDO] Universal Transactional Cloak v1` as the **very last block** before the footer
- [ ] Template has Transactional Cloak as second-to-last block (above footer)
- [ ] Template has Conversational Cloak (if required by matrix) as third-to-last block
- [ ] Both cloaks are invisible in email preview (blank white blocks)
- SOP: Email Template Build & Release Protocol

### Subject Line Engineering

- Subject line: 30-50 characters optimal for mobile
- Personalization in subject increases open rate 26%
- A/B test every subject line (Klaviyo auto-sends winner)
- Preview text: 40-90 characters, complements (not repeats) subject
- Avoid: RE:, FWD: prefixes (spam filter trigger)
- Emoji: use sparingly (1 max), test engagement impact

### Template & Design Standards

- [ ] Template has Transactional Cloak as second-to-last block (above footer)
- [ ] Template has Conversational Cloak (if required by matrix) as third-to-last block
- SOP: Email Template Build & Release Protocol

---

## Additional Skill Extracts

### Transactional Email Code (deliverability-transactional-code)

- Google has strict guidelines: transactional emails must be **predominantly transactional** in content (not a promotional Trojan horse).
- Mailbox providers classify by **content signature** — a password reset email that looks like a sales blast will be flagged.
- **Plain text fallbacks** are mandatory for accessibility and legacy device rendering.
- Inline CSS is non-negotiable for Outlook (Word rendering engine ignores `<style>` blocks in the `<head>`).
- 60-72 characters per line maximum
- Use `---` for horizontal separators
- URLs should be written out fully (e.g., `View your order: https://store.com/order/123`)
- No HTML tags — plain text only

### Email Audit Execution (email-audit-execution)

- [ ] Client has invited `ayoub@tenzamarketing.com` as collaborator in Klaviyo
- [ ] 2FA code obtained (if enabled) — do not start audit without live access
- [ ] Client's Shopify URL known and verified
- [ ] Loom recorder installed and tested
- [ ] Google Doc template duplicated: `[Client] — Email Revenue Leak Audit`
- [ ] Audit scoring sheet ready (50-point checklist below)
- [ ] Calculator ready for estimated revenue leak calculation
- [ ] Previous 90 days of client data is visible in Klaviyo (if new integration, note this limitation)

### List Growth Tactics (email-collection-list-growth)

- **Conversion Range:** 1-10%+ depending on offer, design, and targeting.
- **Average Benchmark:** ~2.5% for unoptimized pop-ups, up to 8.75%+ for strategically engineered pop-ups.
- **Best For:** Capturing new, unknown visitors (cold traffic).
- **Strategic Value:** These are your HIGHEST VALUE subscribers — they have already completed a purchase, demonstrating trust and intent. They have a much higher lifetime value than pop-up-acquired subscribers.
- **Conversion Rate:** Very high (typically 60-90% when pre-selected).
- **Best For:** Capturing purchasing customers who may have missed or ignored the pop-up.
- **Strategic Value:** Provides a persistent, always-available opt-in point. Low traffic but high intent — visitors who navigate here are actively looking to subscribe.
- **Best For:** Capturing visitors who are ready to join but missed the pop-up. Useful as a link destination for social media bios and email signatures.

### Pop-Up Strategy (email-collection-popup-strategy)

- **Description:** Appears immediately on page load or within the first second.
- **Risk:** High bounce risk. Visitors haven't oriented themselves yet.
- **Best Use:** Rarely recommended as primary. Use only when testing shows extreme urgency (e.g., flash sale with limited inventory).
- **Verdict:** Avoid as default. Use strategic delay instead.
- **Description:** Triggers when a visitor's mouse moves toward the browser close button or address bar.
- **Strategic Value:** Acts as a "last-chance" safety net. Since the visitor is already disengaging, there is no additional risk to user experience.
- **Best Use Cases:**
- Primary desktop strategy (converts better than timed delays on desktop).

### CTA & Conversion Design (email-cta-conversion-design)

- Button fill vs surrounding background — 4.5:1 minimum
- Button text vs button fill — 4.5:1 minimum
- Above CTA: 24px from last text/image
- Below CTA: 20px to next content
- Left/right: 30px from email edge (30px cell padding handles this)
- Between stacked CTAs: 12px
- Links must be visually distinguishable from body text — underline or bold (or both)
- Minimum 3:1 contrast ratio between link text and body text

### Email Design Master (email-design-master)

- **Design at 600px max width.** This is the safe rendering width across ALL email clients.
- **Outlook desktop** renders at 600px by default. Wider = horizontal scroll.
- **Gmail app** renders at device width. 600px is fine.
- **Apple Mail** renders at device width. 600px is fine.
- [ ] Single column on mobile (stack all multi-column layouts)
- [ ] 16px minimum font size on body text (iOS auto-zoomes below 13px)
- [ ] 44x44px minimum tap targets (Apple HIG)
- [ ] Preheader text optimized (first 40-100 chars visible in inbox)

### Design Standards & Template Build (email-design-standards-and-template-build)

- Strong graphic (hero image or brand visual)
- Clear value proposition
- Supporting copy (expands on the hero message)
- Supporting graphic (visual reinforcement)
- Testimonial(s) (social proof)
- Photo(s) (visual storytelling)
- Feature(s) (bullet-point features)
- Steps / Instructions (how-to or process)

### Template Library (email-template-library)

- Layout structure diagram
- HTML structure (table-based)
- Image slots with dimensions
- CTA placement and design
- Responsive behavior
- Variants and when to use each
- Background: White (`#FFFFFF`)
- Section background (value props): Light gray (`#F8F8F8`)

---

## Summary: Actionable Rules for BrightKidCo

### Critical Actions (Before First Campaign Send)

1. **Verify DKIM key strength** — ensure 2048-bit keys for both Ionos and Klaviyo selectors
2. **Set DMARC to p=none** — start permissive, tighten after warming (current config assumed correct)
3. **Segment by engagement** — create segments: 30-day openers, 60-day openers, 90-day openers, inactive
4. **Build suppression list** — import any existing bounces/complaints/unsubscribes
5. **Configure Klaviyo smart sending** — 24-hour suppression window between sends

### Warming Protocol (Weeks 1-6)

6. **Week 1: 50-100/day to 30-day engagers only** — no exceptions, no 'just this once' full blasts
7. **Monitor complaint rate every send** — must stay below 0.1%, halt at 0.3%
8. **Monitor bounce rate every send** — must stay below 2%
9. **Weekday sends first** — add weekend sends in week 3+
10. **Transactional emails excluded** — order confirmations/shipping don't count toward warming volume

### List Hygiene (Ongoing)

11. **Hard bounces: suppress immediately** after first occurrence
12. **Spam complaints: suppress immediately** — never re-email
13. **Sunset flow at 60 days inactive** — 3-email win-back over 14 days
14. **Suppress at 120 days inactive** — keep transactional only
15. **Full suppression at 180 days inactive** — re-confirmation required

### Content & Design Standards

16. **Subject line: 30-50 chars, no ALL CAPS, no spam trigger words**
17. **60:40 text-to-image ratio minimum** — never image-only emails
18. **600px width, single-column, mobile-first** — 44px minimum tap targets
19. **3-5 links maximum per email** — no URL shorteners
20. **Always include plain-text version + physical address**

### Monitoring Cadence

21. **Weekly: Google Postmaster Tools** — domain reputation check
22. **Weekly: blacklist check** — Spamhaus, Barracuda via MXToolbox
23. **Per-send: complaint rate, bounce rate, open rate** — dashboard in Klaviyo
24. **Monthly: DMARC report review** — check for authentication failures
25. **Post-warming (week 7+): BIMI setup** — requires DMARC at p=quarantine + VMC certificate

---

## Skill Coverage Matrix

| Domain | Primary Skill(s) | Rules Extracted |
|--------|-----------------|-----------------|
| Authentication | deliverability-authentication-setup | SPF, DKIM, DMARC, BIMI requirements |
| Warming | deliverability-domain-warming | 6-week ramp schedule, volume tiers |
| List Hygiene | deliverability-list-hygiene | Bounce, suppression, sunset rules |
| Spam Avoidance | deliverability-spam-recovery, deliverability-content-signature-optimization | Content, sending, monitoring rules |
| Content Design | email-design-master, email-design-standards-and-template-build | Template, layout, mobile standards |
| Templates | email-template-library | Pre-built email type specs |
| CTA Design | email-cta-conversion-design | Button, placement, conversion rules |
| List Growth | email-collection-list-growth, email-collection-popup-strategy | Pop-up, form, growth tactics |
| Audit | deliverability-audit-monitoring, email-audit-execution | Audit checklist, scoring |
| Transactional | deliverability-transactional-code | Code standards for transactional sends |
