# Layer 36 Round 04: Deliverability Infrastructure — Cross-Reference Matrix

**Generated:** 2026-05-25
**Source Layers:** L36 (R1-R3), L37 (R1), L35 (R1), L33 (R1), overnight-plan.md
**Purpose:** Map every deliverability dependency across all diagnosis layers

---

## 1. CROSS-REFERENCE MATRIX: L36 vs ALL RELEVANT LAYERS

### 1.1 L36 ↔ L37 (Klaviyo Technical Setup) — CRITICAL DEPENDENCY

| L36 Component | L37 Component | Dependency Type | Specific Connection |
|---|---|---|---|
| Sending subdomain `send.brightkidco.com` | Sender configuration (L37 §5a) | MUST MATCH | L37 specifies `Send.brightkidco.com` as sending subdomain — L36 confirms DNS is configured. Case difference (`Send` vs `send`) must be verified in Klaviyo settings. |
| From address `support@brightkidco.com` | Sender config (L37 §5a) | MUST MATCH | L36 and L37 both specify identical from address. No conflict. |
| DMARC `p=none` | Flow triggers (L37 §3) | DEPENDENCY | DMARC must stay at `p=none` during warming phase (L36). L37's 9 flow triggers will generate the first sends — these must respect warming volume caps. |
| Warming segments (8 segments) | Behavioral tags (L37 §2b) | MUST BUILD FIRST | L36 requires 8 warming segments (`[WARMING] 14-Day Engaged`, etc.) but L37 defines only 6 behavioral tags. Warming segments are NOT in L37's tag spec — they must be built separately in Klaviyo as segments (not tags). |
| Transactional Cloak (hidden text) | Flow architecture (L37 §5d) | DEPENDENCY | L36 requires Universal Transactional Cloak in EVERY email. L37's 9 flow triggers × multiple emails = every template must include the cloak saved block. Implementation must happen at template level, not per-email. |
| Sender persona: `info@` + `help@` | Single sender `support@` | CONFLICT | L36 R2 specifies two sender personas (Brand Announcer `info@`, Helpful Agent `help@`). L37 R1 specifies single sender `support@brightkidco.com`. Resolution: L37 wins for Phase 1 (single sender); persona split is Phase 2+ optimization. |
| SPF `~all` (soft fail) | All outbound sends | RISK | L36 notes SPF uses `~all` (soft fail). Skill library recommends `-all` (hard fail). Every email sent through L37's flows passes through this soft-fail SPF — acceptable during warming but should be tightened post-warmup. |
| Google Postmaster Tools | All flow sends | MUST SET UP | L36 requires GPT monitoring before first send. L37's flow triggers (especially Welcome Flow) will generate the first sends. GPT must be verified BEFORE any L37 flow goes live. |
| Email verification at signup | Pop-up form trigger (L37 §3) | DEPENDENCY | L36 requires ZeroBounce/NeverBounce integration at signup. L37's Welcome Flow triggers on Form Submit — if the form doesn't verify emails, invalid addresses enter the warming segment and destroy bounce rate. |
| Sunset protocol (120-day) | `inactive_120_days` tag (L37 §2b) | MUST SYNC | L36 sunset triggers at 120 days unengaged. L37 defines `inactive_120_days` tag. These MUST be synchronized — the tag should trigger the sunset flow, and the sunset flow must add to Master Suppression List. |
| Bounce thresholds (<0.5%) | All flow sends | MONITORING | L37's 9 flows generate email volume. Each flow's bounce rate must be monitored against L36's thresholds. Order Confirmation and Shipping (transactional) have different expectations than promotional flows. |
| Grey hat code snippet | All email templates | RISK | L36 R1 documents Ayoub's grey hat technique for primary tab placement. If deployed in L37 templates, it must be monitored via GPT and removed immediately if warnings appear. Every template must have the snippet OR not — inconsistent deployment hurts more than none. |

**L36-L37 Connection Summary:** 12 specific cross-references. The relationship is foundational — L37 flows CANNOT go live until L36 warming infrastructure is ready. L37 defines WHAT gets sent; L36 defines HOW it gets delivered.

---

### 1.2 L36 ↔ L35 (Avatar Scope Constraint) — WARMING SCOPE

| L36 Component | L35 Component | Dependency Type | Specific Connection |
|---|---|---|---|
| Warming segment targeting | Phase 1 avatar scope (4 levels) | CONSTRAINT | L36 warming must target Phase 1 avatars only (L1, L2, L3, General). L35 excludes Deadline Parent, Social Pressure Mom, Overwhelmed Mom from Phase 1. Warming segments must NOT include Phase 2+ avatar data. |
| Warming order: most engaged first | Level distribution (~50% General) | IMPLICATION | L35 shows ~50% of pop-up signups choose General Fallback. L36's warming should start with this largest segment (highest volume = fastest warming data). General Fallback (DOC 5) is the operational warming workhorse. |
| Content restrictions during warming | Avatar tonality rules (L35) | CONSTRAINT | L36 restricts warming content to value-only (no aggressive sales). L35's tonality calibration (hope percentages per level) must be respected even in warming emails. Level 3 gets 20% hope — warming content for L3 must not be overly optimistic. |
| Level 3 exclusion from weeks 1-2 | Phase 1 scope includes L3 | TENSION | L36 excludes Level 3 from warming weeks 1-2 (smallest, least engaged segment). L35 includes L3 in Phase 1 scope. Resolution: L3 warms in weeks 3-4 when expanding to 30-Day Engaged. |

**L36-L35 Summary:** 4 cross-references. Avatar scope constrains warming targeting. The 4-level system determines who gets warmed first and what content they receive during warming.

---

### 1.3 L36 ↔ L33 (Email Format Requirements) — TEMPLATE CONSTRAINTS

| L36 Component | L33 Component | Dependency Type | Specific Connection |
|---|---|---|---|
| Transactional Cloak (300-400 words hidden) | Master Output Format (L33 §1) | ADDITION | L33's format template has 9 components but does NOT include the Transactional Cloak. L36 requires it in every email. The cloak saved block must be inserted before the footer in every template — L33 format must be updated to include it. |
| 600px max width, table-based | Visual Design Standards (L33 §10) | MUST MATCH | L36 R2 specifies 600px max width, table-based layout, inline CSS. L33's visual standards must enforce this for deliverability (not just aesthetics). Outlook's Word renderer breaks non-table layouts — this is a deliverability issue, not just design. |
| Text-to-image ratio 40-60% minimum | Content Composition (L33 §12) | MUST ENFORCE | L36 requires minimum 40% text ratio. L33's content composition rules must enforce this as a deliverability constraint, not just a design preference. Image-heavy emails trigger spam filters. |
| Dark mode: #1a1a1a bg, #f5f5f5 text | Visual Design Standards (L33 §10) | MUST MATCH | L36 specifies dark mode colors for deliverability (pure black/white triggers spam filters in some clients). L33's visual standards must use these exact values. |
| CTA buttons: 44-56px height, table cell method | Visual Design Standards (L33 §10) | MUST MATCH | L36 specifies CTA implementation method (table cell, not padding on `<a>`). L33 must enforce this — padding-based CTAs break in Outlook, causing rendering issues that hurt engagement metrics. |
| <102KB total HTML | Master Output Format (L33 §1) | CONSTRAINT | L36 R2 specifies Gmail clips emails >102KB. L33's format template must include this as a hard limit. Transactional Cloak adds ~2KB — must account for this in template budget. |
| Footer: `{% unsubscribe %}` tag | Footer Standard (L33 §14) | MUST MATCH | L36 requires Klaviyo unsubscribe tag in every footer. L33's footer standard must include this — missing unsubscribe link violates CAN-SPAM and triggers spam filters. |
| Forbidden phrases (spam triggers) | Voice Rules (L33 §11) | MUST ENFORCE | L36's forbidden phrases list (easy, simple, cure, fix, guaranteed results) overlaps with L33's voice rules. These are both brand risks AND deliverability risks — spam filters flag them. |

**L36-L33 Summary:** 8 cross-references. Format requirements directly affect deliverability. Every template constraint in L33 exists because of L36's infrastructure requirements.

---

### 1.4 L36 ↔ L38 (Brand Constants) — SENDER IDENTITY

| L36 Component | L38 Component | Dependency Type | Specific Connection |
|---|---|---|---|
| From Name: "Lena from BrightKidCo" | Sender constants (L38) | MUST MATCH | L36 and L38 both specify identical from name. Consistency required — changing the from name during warming resets reputation. |
| Discount code `WELCOME10` | Warming content restrictions | CONSTRAINT | L36 forbids aggressive discounting during warming weeks 1-2. L38's WELCOME10 code can only appear in warming emails as a soft mention, not a hard CTA. |
| 60-Day Money Back Guarantee | Transactional email rules | DELIVERABILITY | L36 requires transactional emails be purely transactional (no promo). L38's guarantee messaging must NOT appear in order confirmation/shipping emails — it's promotional and voids CAN-SPAM exemption. |
| Social links (IG, TikTok only) | Footer requirements | MUST MATCH | L36 footer standard includes social links. L38 confirms Instagram + TikTok only, NO Facebook. Including Facebook link in email footer is both a brand violation and wasted HTML bytes. |

**L36-L38 Summary:** 4 cross-references. Brand constants must align with deliverability constraints — especially around transactional email purity and footer content.

---

### 1.5 L36 ↔ L29 (Visual Calibration) — DESIGN FOR DELIVERABILITY

| L36 Component | L29 Component | Dependency Type | Specific Connection |
|---|---|---|---|
| Image alt text required | Visual design specs | MUST ENFORCE | L36 requires every image to have alt text, `display:block`, width/height set. Missing alt text triggers spam filters and hurts accessibility. L29's visual specs must include this as a deliverability requirement. |
| Mobile-first: 16px min body, 44px tap targets | Mobile design specs | MUST MATCH | L36 specifies mobile-first requirements for deliverability (small text = low engagement = reputation damage). L29's visual calibration must enforce these minimums. |

**L36-L29 Summary:** 2 cross-references. Visual design choices directly impact engagement metrics that determine sender reputation.

---

### 1.6 L36 ↔ L17 (Tonality) — CONTENT FOR DELIVERABILITY

| L36 Component | L17 Component | Dependency Type | Specific Connection |
|---|---|---|---|
| No urgency manipulation | Tonality calibration | MUST ENFORCE | L36 forbids urgency tactics during warming. L17's tonality rules must ensure warming emails use "calm, confident, we're not in a hurry" tone. Pressure tactics trigger both spam complaints and brand damage. |
| Reply prompts encouraged | Conversational tone | POSITIVE DEPENDENCY | L36 notes reply prompts generate positive engagement signals. L17's conversational, warm tone naturally supports this — "Just reply to this email and let me know..." fits the Lena persona perfectly. |
| No guilt-tripping | Sensitive areas (L36 §5) | MUST ENFORCE | L36's content sensitivities (self-blame, comparison wound, pediatrician frustration) overlap with L17's tonality rules. Violating these triggers spam complaints from emotionally sensitive parents. |

**L36-L17 Summary:** 3 cross-references. Tonality directly affects spam complaint rate — emotionally misaligned content from a new domain is an existential risk.

---

### 1.7 L36 ↔ L8 (Segmentation Mechanics) — AUDIENCE TARGETING

| L36 Component | L8 Component | Dependency Type | Specific Connection |
|---|---|---|---|
| Engagement-based segments | RFM segmentation | MUST BUILD | L36 requires engagement-based segments for warming. L8 defines RFM segmentation for Phase 2+. During warming (Phase 1), only engagement segments exist — RFM is irrelevant until reputation is established. |
| Never send to "All Subscribers" | Segment exclusion rules | HARD RULE | L36's #1 rule: NEVER send to all subscribers. L8's segmentation must enforce this at the Klaviyo level — every campaign and flow must have engagement-based filters. |
| Master Suppression List | Suppression logic | MUST BUILD | L36 requires a Master Suppression List (`unengaged = True`). L8's segmentation must reference this in all "Don't send to" filters. Missing this one filter can destroy a new domain's reputation. |
| Bot detection segments | Data quality | MUST BUILD | L36 requires bot detection (disposable domains + non-engaged sleepers). L8's segmentation must exclude these from all sends. Bots inflate open rates artificially, masking true engagement during warming. |

**L36-L8 Summary:** 4 cross-references. Segmentation is the enforcement mechanism for deliverability rules. Without proper segments, warming protocols are unenforceable.

---

### 1.8 L36 ↔ L16 (Flow Architecture) — FLOW-LEVEL DELIVERABILITY

| L36 Component | L16 Component | Dependency Type | Specific Connection |
|---|---|---|---|
| Flow re-activation order | Flow sequencing | MUST FOLLOW | L36 specifies re-activation order: Welcome → Browse → Cart/Checkout → Post-Purchase. L16's flow architecture must respect this — activating high-volume flows too early overwhelms warming capacity. |
| Pause non-essential flows | Flow management | CONSTRAINT | L36 requires pausing all flows except Welcome, Browse, Cart/Checkout, Post-Purchase during weeks 1-2. L16's Phase 1 flow set (9 flows) must be selectively activated. |
| Transactional vs promotional separation | Flow types | MUST ENFORCE | L36 requires transactional emails (Order Confirmation, Shipping, Arrived) to be purely transactional. L16's flow architecture must ensure these flows contain NO promotional content — no cross-sells, no discount codes, no marketing banners. |
| Conversational Cloak on first emails | Flow email positioning | DEPENDENCY | L36 requires Conversational Cloak on first email of Welcome, Cart, Checkout, Browse flows only. L16's flow architecture must mark these specific emails for cloak insertion. |

**L36-L16 Summary:** 4 cross-references. Flow architecture determines email volume and content mix — both critical for warming.

---

## 2. DEPENDENCY MAP (What Must Be Configured Before What)

```
PHASE 0: PRE-SEND INFRASTRUCTURE (Must complete before ANY email)
  ├── 1. Verify Google Postmaster Tools for send.brightkidco.com
  ├── 2. Verify DMARC is at p=none (confirmed ✅)
  ├── 3. Verify SPF includes Ionos + Klaviyo (confirmed ✅)
  ├── 4. Verify DKIM records (Klaviyo-managed, likely ✅)
  ├── 5. Check MX record for send.brightkidco.com
  ├── 6. Run blacklist check on send.brightkidco.com
  ├── 7. Run list through ZeroBounce (verify existing subscribers)
  └── 8. Build Transactional Cloak saved block in Klaviyo

PHASE 1: KLAVIYO SEGMENT BUILD (Must complete before warming)
  ├── 9.  Build [WARMING] 14-Day Engaged segment
  ├── 10. Build [WARMING] 30-Day Engaged segment
  ├── 11. Build [WARMING] 60-Day Engaged segment
  ├── 12. Build [WARMING] 90-Day Engaged segment
  ├── 13. Build [WARMING] Tier 2 — Initial Warm-Up segment
  ├── 14. Build [ADVANCED] VIP Clickers (90 Day)
  ├── 15. Build [ADVANCED] At-Risk Engagers (90 Day)
  ├── 16. Build [ADVANCED] Ghost Profiles
  ├── 17. Build bot detection segments (2)
  ├── 18. Build Master Suppression List
  └── 19. Configure real-time email verification at signup form

PHASE 2: WARMING (Weeks 1-2) — First sends
  ├── 20. Activate Welcome Flow ONLY (to Tier 2 segment)
  ├── 21. Install Transactional Cloak in Welcome template
  ├── 22. Set volume cap: 50-100 subscribers/day
  ├── 23. Content: value-only, no discounts, no urgency
  ├── 24. Daily monitoring: open rate, bounce, spam, GPT
  └── 25. Pause ALL other flows

PHASE 3: EXPANSION (Weeks 3-4)
  ├── 26. Expand to 30-Day Engaged segment
  ├── 27. Activate Browse Abandonment flow
  ├── 28. Monitor flow for 48-72 hours before next
  └── 29. Allow mild promotions (20% off, 60%+ value content)

PHASE 4: FULL DEPLOYMENT (Weeks 5-6)
  ├── 30. Expand to 60-Day then 90-Day Engaged
  ├── 31. Activate Cart/Checkout Abandonment
  ├── 32. Activate Post-Purchase flows
  ├── 33. Install Transactional Cloak in ALL remaining templates
  ├── 34. Install Conversational Cloak on first emails (Welcome, Cart, Checkout, Browse)
  ├── 35. Upgrade DMARC to p=quarantine
  └── 36. Build automated sunset protocol

PHASE 5: POST-WARMUP (Ongoing)
  ├── 37. 3-4 campaigns/week to 90-Day Engaged
  ├── 38. Monthly deliverability audit
  ├── 39. DMARC report analysis (easyDMARC/dmarcian)
  └── 40. Consider BIMI implementation
```

---

## 3. CONFLICT IDENTIFICATION

### Conflict 1: Sender Persona Strategy
- **L36 R2** specifies two sender personas: `info@` (Brand Announcer) and `help@` (Helpful Agent)
- **L37 R1** specifies single sender: `support@brightkidco.com`
- **Resolution:** L37 wins for Phase 1. Persona split is a deliverability optimization for Phase 2+. Changing from address during warming resets reputation — do NOT split personas until post-warmup.

### Conflict 2: SPF Configuration
- **L36 R1** shows SPF as `~all` (soft fail)
- **L36 R2** skill library recommends `-all` (hard fail)
- **Resolution:** Keep `~all` during warming. Switch to `-all` after 6-week warmup when all sending sources are verified. Hard fail too early can break legitimate email from unverified sources.

### Conflict 3: Transactional Email Content
- **L37** defines Order Confirmation with upsell, Shipping with upsell, Arrived with upsell
- **L36** requires transactional emails be purely transactional (no promotional content)
- **Resolution:** The "upsell" in L37 transactional emails must be limited to product recommendations, NOT discount codes or marketing CTAs. Cross-sell content voids CAN-SPAM transactional exemption.

### Conflict 4: Avatar Level 3 Warming Timeline
- **L35** includes Level 3 in Phase 1 scope
- **L36** excludes Level 3 from warming weeks 1-2
- **Resolution:** L36 is correct. Level 3 warms in weeks 3-4. This is a deliverability decision, not a scope decision — L3 is smallest and least engaged, warming them too early wastes capacity.

### Conflict 5: Grey Hat Technique vs White Hat Protocols
- **L36 R1** documents Ayoub's grey hat code snippet for primary tab placement
- **L36 R2** skill library follows white hat deliverability protocols only
- **Resolution:** The grey hat technique is Ayoub's personal optimization, not part of the standard deliverability framework. If deployed, it must be documented and monitored separately. The skill library's warming protocol is the baseline — grey hat is an overlay, not a replacement.

---

## 4. GAP ANALYSIS

### Gap 1: Google Postmaster Tools — STATUS UNKNOWN
- **What's needed:** Verification of GPT for send.brightkidco.com
- **Who should do it:** Ayoub (has DNS access via Ionos)
- **Why critical:** GPT is the ONLY way to see Gmail's reputation score for the domain. Without it, warming is flying blind.
- **No layer covers:** The actual setup steps for GPT verification

### Gap 2: MX Record for Sending Subdomain
- **What's needed:** MX record on send.brightkidco.com
- **Who should do it:** Ayoub (Ionos DNS)
- **Why important:** Some mailbox providers require MX records on sending subdomains for trust validation
- **No layer covers:** Whether this record exists or needs to be created

### Gap 3: Email Verification Service Integration
- **What's needed:** ZeroBounce/NeverBounce API integration at Klaviyo signup form level
- **Who should do it:** Giuliano (Klaviyo settings) or Ayoub (technical setup)
- **Why critical:** Without verification, invalid addresses enter warming segments, destroying bounce rate
- **No layer covers:** Specific integration steps or API key setup

### Gap 4: Warming Segment Definitions — NOT IN L37
- **What's needed:** 8 warming segments defined in L36 R2 but NOT in L37's tag spec
- **Who should build:** Whoever builds the Klaviyo segments
- **Why critical:** Warming cannot start without these segments
- **Gap:** L37 defines tags (avatar, behavioral, purchase) but NOT engagement-based warming segments

### Gap 5: DMARC Report Analysis Platform
- **What's needed:** easyDMARC or dmarcian account connected to DMARC reports
- **Who should do it:** Ayoub
- **Why important:** DMARC reports reveal all sending sources — must identify before upgrading policy
- **No layer covers:** Platform selection or setup

### Gap 6: Shopify Integration — Duplicate Email Prevention
- **What's needed:** Disable Shopify's default transactional emails when Klaviyo takes over
- **Who should do it:** Giuliano (Shopify admin)
- **Why critical:** Duplicate sends (Shopify + Klaviyo) hurt deliverability and confuse customers
- **No layer covers:** Specific Shopify email settings to disable

### Gap 7: Conversational Cloak Variants — NOT SPECIFIED
- **What's needed:** 4 variants of Conversational Cloak (Abandonment, Nurture/Welcome, Helpful Follow-Up, Founder's Office)
- **Who should write:** Copywriter following L36 R2 skill specs
- **Why important:** Conversational Cloak must be deployed on first emails of key flows
- **Gap:** No layer provides the actual cloak content — only the structure requirements

### Gap 8: Blacklist Check — NOT DONE
- **What's needed:** MXToolbox blacklist check on send.brightkidco.com
- **Who should do it:** Anyone with MXToolbox access
- **Why critical:** If the domain is already blacklisted (unlikely for new domain, but must verify), warming is pointless
- **No layer covers:** Results or process

---

## 5. CRITICAL PATH ITEMS (Must Be Right Before Any Send)

### BLOCKING — Cannot send ANY email until these are verified:

1. **Google Postmaster Tools** — Must be set up for send.brightkidco.com. Without GPT, there is no reputation monitoring. First sends go blind.

2. **List Verification** — Existing subscriber list must be run through ZeroBounce/NeverBounce. Expected 2-5% invalid. Sending to invalid addresses on day 1 destroys bounce rate.

3. **Warming Segments Built** — The 8 warming segments (L36 R2) must exist in Klaviyo before any campaign is sent. Without segments, warming protocol is unenforceable.

4. **Master Suppression List** — Must be built and applied to ALL campaign "Don't send to" and ALL flow filters. Missing this one filter = sending to unengaged = spam complaints = domain death.

5. **Transactional Cloak Saved Block** — Must be created in Klaviyo as a saved block. Every template gets this block. Without it, emails lack the hidden text that improves algorithmic classification.

### NON-BLOCKING but urgent (can send without these, but risk increases):

6. **Bot Detection Segments** — Can be built after first sends, but before scaling
7. **Sunset Protocol** — Not needed until 120 days of sending (Month 4+)
8. **DMARC Escalation** — Not needed until Week 6 (stays at p=none)
9. **BIMI** — Post-warmup optimization, not blocking
10. **Sender Persona Split** — Post-warmup optimization, single sender is fine for Phase 1

---

## 6. WARMING SCHEDULE IMPLICATIONS BY FLOW TYPE

| Flow | L37 Trigger | Volume Risk | Warming Week | Rationale |
|---|---|---|---|---|
| Welcome Flow | Form Submit | LOW (new signups only) | Week 1 | Smallest, most engaged audience. First touch = highest engagement signal. |
| Browse Abandonment | Viewed Product | LOW-MEDIUM | Week 3 | Moderate volume, engagement-based trigger. Activate after 2 weeks of clean data. |
| Cart Abandonment | Cart Abandoned | MEDIUM | Week 5 | Higher volume, recovery-focused. Needs established reputation to convert. |
| Checkout Abandonment | Started Checkout | MEDIUM | Week 5 | Similar to cart — activate together. High-intent signals but higher volume. |
| Order Confirmation | Order Placed | N/A (transactional) | Week 1 | Transactional — always active, no warming needed. But MUST be pure transactional. |
| Shipping Notification | Order Fulfilled | N/A (transactional) | Week 1 | Transactional — always active. No promotional content. |
| Arrived & Welcome | Carrier Delivered | N/A (transactional) | Week 1 | Transactional — always active. No promotional content. |
| PP-Direct Upsell | Order Placed (Day 1-3) | LOW | Week 5 | Post-purchase promotional. Wait for reputation. |
| PP-Level Detection | Order Placed (Day 14) | LOW | Week 5 | Post-purchase engagement. Wait for reputation. |

---

## 7. CONTENT RESTRICTIONS MATRIX (Deliverability × Design × Tonality)

| Restriction | L36 Source | L33 Source | L17 Source | Enforcement |
|---|---|---|---|---|
| No "easy/simple/quickly" | Forbidden phrases (R1) | Voice rules | Tonality | Spam filter trigger + brand violation |
| No "guaranteed results" | Forbidden phrases (R1) | — | — | Spam filter trigger |
| No "cure/fix/solve" | Forbidden phrases (R1) | — | Sensitive areas | Spam filter + community offense |
| No urgency manipulation | Warming rules (R2) | — | Tonality calibration | Spam complaints from emotional audience |
| No guilt-tripping | Sensitive areas (R1) | — | Tonality | Spam complaints + brand damage |
| 60:40 text-to-image minimum | Content rules (R2) | Content composition | — | Spam filter algorithm |
| <102KB HTML | Template rules (R2) | — | — | Gmail clipping threshold |
| Table-based layout | Template rules (R2) | Visual standards | — | Outlook rendering (Word engine) |
| Always include unsubscribe | Footer standard (R1) | Footer standard | — | CAN-SPAM compliance |
| Always include physical address | Footer standard (R1) | Footer standard | — | CAN-SPAM compliance |

---

## 8. SUMMARY STATISTICS

| Metric | Count |
|---|---|
| Total cross-references documented | 41 |
| Layers cross-referenced | 8 (L8, L16, L17, L29, L33, L35, L37, L38) |
| Conflicts identified | 5 |
| Gaps identified | 8 |
| Critical path items | 5 blocking, 5 non-blocking |
| Warming schedule entries | 9 flow types |
| Content restrictions mapped | 10 |

---

*Cross-reference complete. L36's deliverability infrastructure is the foundation layer — every downstream output depends on it. Authentication is done; warming is the critical gap. No email should be sent until Phase 0 and Phase 1 of the dependency map are complete.*
