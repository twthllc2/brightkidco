# Layer 36 Round 01: Deliverability Infrastructure — Client File Exhaustion

## Source Files Read
- Onboarding-todos.txt (149 lines, full read)
- WhatsApp Chat with Giuliano.txt (2621 lines, searched and read deliverability-relevant sections)
- DOC6-USAGE-GUIDE.txt (1010 lines, full read)
- DOC1-MASTER-FOUNDATION.txt (1792 lines, read through line 1460)

---

## 1. COMPLETE INFRASTRUCTURE INVENTORY

### Sending Domain
- **Sending Subdomain:** Send.brightkidco.com
- **From Email:** support@brightkidco.com
- **From Name:** "Lena from BrightKidCo"
- **Reply-To:** support@brightkidco.com
- **Status:** Newly set up via Klaviyo Dedicated Sender

### DNS Provider
- **Domain Registrar/Host:** Ionos
- **Email Hosting:** Ionos (support@brightkidco.com inbox hosted there)
- **Email Sending Platform:** Klaviyo

### DNS Records Configured (from WhatsApp chat, 5/19/26)

#### DMARC (Mandatory)
```
Type: TXT
Host/Name: _dmarc
Value: v=DMARC1; p=none; rua=mailto:support@brightkidco.com
```
- Policy: `p=none` (monitoring mode, not enforcing)
- Aggregate reports: sent to support@brightkidco.com

#### SPF
```
Type: TXT
Host/Name: @
Value: v=spf1 include:_spf-us.ionos.com include:klaviyo.com ~all
```
- Authorizes both Ionos (email hosting) and Klaviyo (email sending)
- Soft fail (`~all`) — not a hard fail, which is appropriate for a new setup

#### Custom Tracking Subdomain
```
Type: CNAME
Host/Name: click
Value: dct.klaviyodns.com
```
- Custom tracking subdomain: click.brightkidco.com
- Points to Klaviyo's DNS infrastructure

#### Additional DNS Notes (from WhatsApp)
- Ayoub also referenced additional subdomains:
  - `trklk.domain.com -> domain.com` (likely tracking link)
  - `click.domain.com -> domain` (click tracking)
  - `klk.domain.com` (Klaviyo link tracking)
- DKIM: Referenced in DOC1 as required ("Domain Authentication (DKIM, SPF, DMARC)") but specific DKIM records not shown in chat — likely auto-configured by Klaviyo during Dedicated Sender setup

### Klaviyo Account Details
- **Login Email:** support@brightkidco.com
- **Account Password (shared in chat):** Gbl28.08.00* (referenced 5/19/26)
- **Recovery Codes (shared in chat, 5/19/26):**
  - 0a8b6fdc-322b-4905-8cbf-33111e447985
  - ddb8f8e4-460d-4c62-9d16-0ed3b1243249
  - 4ecd7266-3367-4343-a326-662506800a2a
  - bfdc47a8-3170-49ba-b7c8-2ba0b3a78e63
  - 3f051799-88dd-4329-aadc-ce1386f63a59
- **Settings URL:** https://www.klaviyo.com/settings/account/domains

### Ayoub's User Access
- Ayoub has his own Klaviyo account (ayoub@tenzamarketing.com)
- Asked Giuliano (5/19/26) if he should add himself as a user instead of logging into Giuliano's account
- Giuliano approved: "just do bro u are the boss"
- Ayoub has access to Klaviyo "composer" with his own account
- Access level: Admin/Manager (full setup capabilities)

---

## 2. SENDING DOMAIN AND REPUTATION STATUS

### Current State: NEW DOMAIN — ZERO SENDER REPUTATION
- **Domain:** brightkidco.com
- **Sending Subdomain:** send.brightkidco.com (Dedicated Sender in Klaviyo)
- **Reputation:** Zero — this is a brand-new sending domain
- **Authentication:** DONE (SPF, DMARC, custom tracking subdomain all configured)
- **Sender Reputation:** NOT established — requires warming

### Key Reputation Facts
- The domain has no sending history
- No Google Postmaster data yet (too new)
- No feedback loop data
- No engagement history with mailbox providers

### Grey Hat Email Code Snippet (from WhatsApp, Oct 2025)
The WhatsApp chat reveals Ayoub has developed a "grey hat" code snippet technique:
- Description: "a piece of code that's hidden in all of your emails that tricks Gmail, outlook, etc. And redirects your email to always land top in primary tab instead of promo tab"
- Status: Tested and working (test emails landed in primary tab for Giuliano, Jake, and others)
- Risk: "the day that it starts detecting it only to start switching strategies or just stop using it and that's it but worst case scenario a domain gets blacklisted from Gmail"
- Monitoring: "Once it's detected, which i don't think it's happening any time soon, it will appear warning in Google Postmaster, just after seeing warning stop to not get blacklisted"
- Classification: Grey hat (not black hat, not white hat)
- This technique was being sold to other brand owners at 3.5k-7.5k one-time
- **Relevance to BrightKidCo:** This technique may be applied to BrightKidCo emails — it's Ayoub's signature deliverability advantage

---

## 3. WARMING REQUIREMENTS

### Domain Warmup Plan (Inferred from Infrastructure Status)
- **Status:** New sending domain needs gradual ramp
- **Timeline:** Typically 6 weeks for new domains
- **Approach:** Start with most engaged segments first
- **Authentication:** DONE (SPF + DMARC + custom tracking subdomain)
- **Reputation:** NOT established — this is the critical gap

### Warmup Strategy Implications
1. **Start with smallest, most engaged list** — likely popup signups who are warmest
2. **Gradually increase volume** over 6 weeks
3. **Monitor Google Postmaster** for reputation signals
4. **Watch for spam complaints** — new domain has zero tolerance
5. **Build engagement history** before scaling to full list

### Risk Factors for New Domain
- BrightKidCo audience is highly sensitive (autistic children's parents)
- Emotional content can trigger spam complaints if misaligned
- New domain + new Klaviyo account = double newness penalty
- No existing subscriber engagement history

---

## 4. KLAVIYO ACCOUNT CONFIGURATION

### From DOC1 (Section 19: Klaviyo Setup & Tag Logic)
- **Account Status:** Newly set up
- **Shopify Integration:** Required (install Klaviyo-Shopify app, sync events: Order Placed, Fulfilled, Delivered, sync product catalog)
- **Web Tracking:** Klaviyo JavaScript snippet on all pages (tracks: Viewed Product, Started Checkout, Active on Site)

### Custom Properties Needed
- `avatar_level` (string: "level1" / "level2" / "level3" / "general")
- `child_age` (optional)
- `signup_source` (string: "popup" / "checkout" / "referral")
- `welcome_flow_completed` (boolean)
- `last_purchase_pack_size` (string: "1pair" / "3+3" / "5+5")
- `vip_customer` (boolean, for high LTV)

### Tags (Lists/Segments)
**From Pop-up:**
- avatar_level1, avatar_level2, avatar_level3, avatar_level2

**From Behavior:**
- welcome_completed, welcome_completed_no_purchase, post_purchase_active, at_risk_no_open, inactive_60_days, inactive_120_days

**From Purchase:**
- buyer_1pair, buyer_3plus3, buyer_5plus5, repeat_buyer, vip_buyer (3+ orders)

### Flow Triggers
| Flow | Klaviyo Trigger | Audience Filter |
|------|-----------------|-----------------|
| Welcome | Form Submit | avatar_level tag |
| Cart Aband. | Cart Abandoned | No purchase 24h |
| Checkout | Started Checkout | No purchase 1h |
| Browse | Viewed Product | No cart 24h |
| Order Confirm | Order Placed | All |
| Shipping | Order Fulfilled | All |
| Arrived | Carrier Delivered | All |
| PP-Direct Upsell | Order Placed | Day 1-3 |
| PP-Level Detection | Order Placed | Day 14 + no level |

### Exit Conditions (Critical)
Every flow must have:
- Made a purchase (for conversion flows)
- Unsubscribed
- Already in higher-priority flow

---

## 5. DELIVERABILITY RULES AND CONSTRAINTS FROM BRAND DOCS

### From DOC6 (Brand Constants — Email Sender)
- From Email: support@brightkidco.com
- From Name: "Lena from BrightKidCo"
- Reply-To: support@brightkidco.com
- Sending Subdomain: Send.brightkidco.com

### From DOC1 (Section 15: Forbidden Phrases)
These phrases directly impact deliverability by triggering spam filters:
- "Easy" / "Simple" / "Effortless"
- "Train your kid in 3 days"
- "Guaranteed results"
- "Cure" / "Solve" / "Fix"
- "Your child will be normal"
- "Get him trained!"

### From DOC1 (Section 20: Email Footer Standard)
Every mail (except transactional) must include:
- BrightKidCo Logo
- "Built for the brain that learns differently."
- Footer links: Shop · Parent Stories · Contact us · FAQ
- Social: Instagram · TikTok
- Reviews microcopy: "16,511 reviews · 4.9 ★ — 100,000+ parents trust BrightKidCo"
- Business address placeholder
- Klaviyo tags: `{% unsubscribe %}` · Manage preferences
- **NO Trustpilot links** (no page exists)
- **NO Facebook link** (not used by brand)
- **NO review buttons leading to non-existent pages**

### From DOC1 (Section 21: Tonality Calibration)
Deliverability-relevant tonality rules:
- Pre-purchase: Education + Soft Conversion, calm, confident, "we're not in a hurry"
- Conversion moment: Friendly Reminder + Permission Not To Buy
- Transactional: Warm + Functional
- Post-purchase early: Warm + Reassurance + Education
- Post-purchase mid: Realistic + Patient + "It's normal"
- **NEVER:** Hard-sell, urgency manipulation, pressure tactics, fake scarcity, guilt-tripping

### From DOC1 (Section 15: Sensitive Areas)
Deliverability-critical content sensitivities:
1. **Self-Blame:** Never hint she's doing something wrong
2. **Partner Conflict:** Don't sound like she has to convince her partner
3. **Comparison Wound:** Never position neurotypical kids as standard
4. **Pediatrician Frustration:** Gently acknowledge, never attack medical profession

### From Onboarding-todos.txt (Quick Reference Rules)
- NEVER promise outcomes ("Your child will...")
- NEVER use "easy/simple/quickly/miracle/cure/fix"
- NEVER compare to neurotypical kids
- NEVER fabricate quotes or testimonials
- ALWAYS include 60-Day Money Back (never 30)
- ALWAYS cite real RS quotes informally
- ALWAYS end with Lena sign-off

---

## 6. KEY DELIVERABILITY RISKS AND CONSIDERATIONS

### Risk 1: New Domain + New Account
- Double penalty: no sending history on domain OR Klaviyo account
- Requires careful 6-week warmup
- Must start with most engaged subscribers

### Risk 2: Emotional Content Sensitivity
- Audience is parents of autistic children — highly emotional
- Misaligned messaging triggers spam complaints
- Must validate before proposing (DOC1 Lever pattern)

### Risk 3: Grey Hat Technique
- Ayoub's code snippet technique may be deployed
- Monitors Google Postmaster for detection warnings
- If detected: stop immediately, worst case = domain blacklist
- Backup plan: buy new domain and restart

### Risk 4: DMARC Policy is `p=none`
- Currently monitoring only, not enforcing
- Should eventually move to `p=quarantine` or `p=reject`
- But for warming phase, `p=none` is appropriate

### Risk 5: SPF Soft Fail
- Using `~all` (soft fail) instead of `-all` (hard fail)
- Appropriate for new setup, but means unauthorized senders get through
- Monitor SPF alignment during warming

---

## 7. INFRASTRUCTURE TIMELINE

| Date | Event | Source |
|------|-------|--------|
| 5/19/26 | Klaviyo login credentials shared | WhatsApp |
| 5/19/26 | DNS records discussed (DMARC, SPF, tracking subdomain) | WhatsApp |
| 5/19/26 | Ayoub added as Klaviyo user | WhatsApp |
| 5/19/26 | Ionos DNS setup done together via Google Meet | WhatsApp |
| 5/20/26 | Sending subdomain confirmed: Send.brightkidco.com | WhatsApp |
| 5/20/26 | Giuliano working on flows, Ayoub handling execution | WhatsApp |

---

## Summary

BrightKidCo's deliverability infrastructure is **authenticatized but unwarmed**. The critical facts:

1. **Sending domain:** Send.brightkidco.com (new, zero reputation)
2. **From address:** support@brightkidco.com, "Lena from BrightKidCo"
3. **DNS:** DMARC (p=none), SPF (Ionos + Klaviyo, ~all), custom tracking CNAME (click.brightkidco.com → dct.klaviyodns.com)
4. **Klaviyo:** Newly configured, Shopify integration pending, Ayoub has admin access
5. **Reputation:** Zero — requires 6-week gradual warmup starting with most engaged segments
6. **Grey hat technique:** Ayoub has a code snippet that tricks Gmail into primary tab placement — may be deployed, monitored via Google Postmaster
7. **Content constraints:** Forbidden phrases list, tonality calibration rules, anti-fabrication rules all protect deliverability by avoiding spam trigger language

The gap between "authentication done" and "reputation established" is the central deliverability challenge. Everything downstream (flow deployment, campaign cadence, segment targeting) must respect the warmup timeline.
