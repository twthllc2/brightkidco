# Layer 37 Round 2: Klaviyo Technical Setup — Skill Loading

## Summary

Loaded and extracted Klaviyo technical setup guidance from 10+ skills across the email-marketing skill library, plus cross-referenced with client documentation (DOC6-USAGE-GUIDE.txt, Onboarding-todos.txt). Below is the consolidated output.

---

## 1. Skills Searched

| # | Skill | Category | Klaviyo Relevance |
|---|-------|----------|-------------------|
| 1 | client-credential-request | email-marketing | API key request, storage, provisioning |
| 2 | klaviyo-api-tool | email-marketing | Full API interaction guide (flows, templates, triggers) |
| 3 | client-onboarding-structure | email-marketing | Project structure, brand brief distillation |
| 4 | flow-welcome | email-marketing/flows | Welcome flow trigger, filter, 8-email sequence setup |
| 5 | flow-abandoned-cart | email-marketing/flows | Cart metric setup (Shopify snippet), dynamic blocks |
| 6 | deliverability-authentication-setup | email-marketing/deliverability | SPF, DKIM, DMARC, sending subdomain in Klaviyo |
| 7 | deliverability-domain-warming | email-marketing/deliverability | 6-week warm-up, engagement segments in Klaviyo |
| 8 | deliverability-list-hygiene | email-marketing/deliverability | Bounce/spam monitoring, engagement segments |
| 9 | email-collection-popup-strategy | email-marketing/deliverability | Pop-up types, Klaviyo form integration |
| 10 | email-collection-list-growth | email-marketing/deliverability | List growth methods, checkout opt-in (Shopify) |

---

## 2. Klaviyo Setup Guidance Extracted from Skills

### 2.1 API Access & Credentials (client-credential-request)

- **API Key Generation:** Klaviyo > Settings > API Keys > Create Private API Key
- **Required Scopes:** flows:read, flows:write, campaigns:read, campaigns:write, templates:read, templates:write, lists:read, lists:write, metrics:read
- **Key Naming Convention:** "Tenza Marketing - Flow Builder"
- **Additional Info Needed:** Klaviyo account ID (from URL), main subscriber list ID
- **Storage:** `/root/wiki/clients/{client-name}/client-info.md` in YAML frontmatter
- **Security:** Never put API keys in Kanban task bodies; never commit to git; rotate on client exit
- **Verification:** `curl -s "https://a.klaviyo.com/api/accounts/" -H "Authorization: Klaviyo-API-Key $KEY"` — 200 = working

### 2.2 API Operations (klaviyo-api-tool)

- **Base URL:** `https://a.klaviyo.com/api/`
- **Headers:** Authorization: Klaviyo-API-Key {KEY}, revision: 2025-01-15
- **Key Operations:**
  - Get account details, lists, flows
  - Create metric-triggered flows (draft status first)
  - Add email actions with subject/preview/from/content
  - Add time delays between emails
  - Update flow status (draft -> live)
  - Create templates
- **Metric IDs Reference:** List Subscribed, Added to Cart, Started Checkout, Placed Order, Ordered Product, Fulfilled Order
- **Error Handling:** 401 = bad key, 403 = missing scopes, 429 = rate limited (backoff)
- **Verification Checklist:** Flow in draft, correct trigger, correct subjects, delays match, from name/email correct, test send, unsubscribe link working

### 2.3 Email Authentication (deliverability-authentication-setup)

- **Sending Subdomain:** Choose brand-aligned subdomain (e.g., `hello.brightkidco.com`)
- **DNS Records Required:**
  - SPF TXT: `v=spf1 include:spf.klaviyo.com ~all`
  - DKIM CNAME records (2) — targets from Klaviyo
- **Klaviyo Config:** Settings > Sending Domains > Add Domain
- **DMARC Phased Rollout:** Start `p=none`, monitor, graduate to `p=quarantine` then `p=reject`
- **Google Postmaster Tools:** Set up for reputation monitoring
- **BIMI:** Optional — requires vector logo + VMC certificate

### 2.4 Domain Warming (deliverability-domain-warming)

- **6-Week Protocol:** Gradual volume ramp starting with most engaged segments
- **Engagement Segments to Build in Klaviyo:**
  - `[WARMING] 14-Day Engaged — Vanguard`
  - `[WARMING] 30-Day Engaged`
  - `[WARMING] 60-Day Engaged`
  - `[WARMING] 90-Day Engaged`
- **Tier Classification:** Tier 1 (Healthy, GPT High), Tier 2 (New/Rewarming), Tier 3 (Active Recovery)
- **Pre-Flight:** Authentication complete, subdomain verified, GPT set up, non-essential flows paused

### 2.5 List Hygiene (deliverability-list-hygiene)

- **Target Metrics:** Bounce <0.5%, Spam complaints <0.03%
- **Engagement Segments (TENZA naming):**
  - `[TENZA] Engaged 14/30/60/90 Days`
  - `[ADVANCED] At-Risk - Opened Not Clicked 90 Days`
- **Monitoring:** Google Postmaster Tools + Klaviyo Analytics Deliverability tab
- **Monthly Hygiene Execution:** Diagnostic audit, real-time verification, sunset protocol

### 2.6 Pop-Up & List Growth (email-collection-popup-strategy, email-collection-list-growth)

- **Pop-Up Types:** Entry, Exit-Intent (desktop), Scroll-Triggered (mobile), Timed, Teaser Widget, Full-Screen
- **Default:** Exit-intent on desktop, scroll-triggered at 60-75% on mobile
- **Offer Engineering:** 10% off standard, test 15-20%; minimum spend threshold to protect margins
- **Checkout Opt-In:** Shopify > Settings > Checkout > Marketing options > Email (pre-selected)
- **4 Collection Methods:** Pop-up forms (primary), post-purchase opt-in (highest value), sign-up pages, embedded forms

### 2.7 Flow Setup — Welcome Flow (flow-welcome)

- **Trigger:** "List — Subscribed to List" for primary subscriber list
- **Flow Filter:** "Placed Order 0 times over all time"
- **Pre-Flight:** Admin access, list active, discount code created, dynamic product blocks configured, brand assets ready
- **Email Sequence (8 emails):**
  1. Welcome (immediate) — discount code, USPs, social proof, bestseller grid
  2. Brand Story (1-2 days) — founding story, mission
  3. USPs/Social Proof (2-3 days) — reviews, press
  4-8. Education, urgency, final push
- **Auto-Resend:** Email 1 non-openers get resend after 1 day with different subject line
- **Back-Population:** One-time clone for existing subscribers

### 2.8 Flow Setup — Abandoned Cart (flow-abandoned-cart)

- **CRITICAL PREREQUISITE:** "Added to Cart" metric requires manual Shopify snippet installation (NOT automatic)
- **Steps:**
  1. Verify "Viewed Product" metric connected
  2. Install "Added to Cart" snippet in Shopify theme.liquid (before `</body>`)
  3. Wait 24h, verify data flowing in Klaviyo Analytics > Metrics
- **Dynamic Content Block:** Split block with `{{ event.ImageURL }}`, `{{ event.Name }}`, `{{ event.Price|striptags }}`
- **Flow Filters:** Placed order 0 times, Checkout started 0 times, not in flow in last 7-15 days
- **3-Email Sequence:** Brief reminder (1-2h), social proof (24h), urgency/discount (48-72h)

---

## 3. Cross-Reference: Skills vs Client Files

### 3.1 DOC6-USAGE-GUIDE.txt — Klaviyo-Specific Requirements

| Requirement | From DOC6 | Skills Coverage |
|-------------|-----------|-----------------|
| 4 avatar tags (level1/2/3/general) | Pop-up assigns tag via 4 buttons | NOT in skills — client-specific |
| Tag determines Welcome Flow variant | Klaviyo routing by tag | Partially (flow-welcome covers single variant) |
| Cross-level flows for Cart/Checkout/Browse | DOC 5 used for all high-velocity flows | Skills cover flow setup but NOT level-splitting |
| Post-Purchase Level Detection (Day 14) | Re-selection email with 4 buttons | NOT in skills — client-specific |
| Migration from general to specific level | Click/Reply/Purchase hints | NOT in skills |
| Symptom-first, never level labels in copy | Backend tag logic only | NOT in skills (copy guidance, not technical) |
| Lena sign-off on every mail | Brand voice requirement | NOT in skills (brand voice, not Klaviyo config) |
| Klaviyo Implementation Notes in every email | Required output field | Mentioned in output format |
| All copy through Yurishizu review before Klaviyo | Approval workflow | NOT in skills (process, not technical) |

### 3.2 Onboarding-todos.txt — Klaviyo-Specific Requirements

| Requirement | From Onboarding | Skills Coverage |
|-------------|-----------------|-----------------|
| Klaviyo account access | Step 3 (after doc reading) | client-credential-request covers API key |
| Implement in Klaviyo after approval | Step 3 workflow | klaviyo-api-tool covers programmatic deployment |
| 15-30 min per mail implementation | Timeline estimate | NOT in skills |
| Flow Briefing IS the prompt | Workflow rule | NOT in skills (process) |

---

## 4. Gaps Between Skills and Client Requirements

### 4.1 Critical Gaps (Not Covered by Skills)

1. **Avatar Tag Routing in Klaviyo:** The client requires pop-up → tag → Welcome Flow variant routing. Skills cover single Welcome Flow setup but NOT the branching logic for 4 avatar-specific variants triggered by profile properties/tags.

2. **Profile Property Setup:** Client docs reference `avatar_level1`, `avatar_level2`, `avatar_level3`, `avatar_general` as Klaviyo profile properties/tags. No skill covers creating custom profile properties or mapping pop-up responses to tags.

3. **Post-Purchase Level Detection Flow:** Day 14 email with 4 re-selection buttons that updates the profile tag. This is a custom flow not covered by any skill.

4. **Cross-Level vs Level-Specific Flow Architecture:** The strategic decision of which flows get 4 variants vs 1 cross-level version is client-specific. Skills assume standard flow setup.

5. **Migration Logic:** Moving subscribers from `avatar_general` to specific levels based on click/reply/purchase behavior. No skill covers this conditional tag-update automation.

### 4.2 Partial Coverage (Skills Cover Basics, Client Needs More)

1. **Welcome Flow:** Skills cover standard 8-email welcome series. Client needs 4 parallel welcome series with different tonality per avatar level — requires 4x flow creation.

2. **Segmentation:** Skills cover engagement-based segments (14/30/60/90-day). Client needs avatar-level segments based on custom tags — different segmentation logic.

3. **Flow Filters:** Skills cover "Placed Order 0 times" standard filter. Client may need avatar-level conditional filters.

### 4.3 Fully Covered by Skills

1. **API Access & Authentication** — client-credential-request + klaviyo-api-tool
2. **DNS/Email Authentication** — deliverability-authentication-setup
3. **Domain Warming** — deliverability-domain-warming
4. **List Hygiene** — deliverability-list-hygiene
5. **Pop-Up Strategy** — email-collection-popup-strategy
6. **Cart Abandonment Setup** — flow-abandoned-cart (including Shopify snippet)
7. **Flow Creation via API** — klaviyo-api-tool (create flow, add emails, add delays)
8. **Template Management** — klaviyo-api-tool (create/update templates)

---

## 5. Consolidated Setup Requirements List

### Phase 1: Account & Access
- [ ] Klaviyo account access with admin/manager permissions
- [ ] Private API key generated with correct scopes (flows, campaigns, templates, lists, metrics:read)
- [ ] Account ID and subscriber list ID documented
- [ ] API key tested and verified (200 response)

### Phase 2: Authentication & Infrastructure
- [ ] Sending subdomain chosen and created in DNS
- [ ] Subdomain added to Klaviyo Settings > Sending Domains
- [ ] SPF TXT record added (`v=spf1 include:spf.klaviyo.com ~all`)
- [ ] DKIM CNAME records added (2 records from Klaviyo)
- [ ] DMARC TXT record added (start with `p=none`)
- [ ] Google Postmaster Tools set up for sending domain
- [ ] All records verified (green checkmarks in Klaviyo)

### Phase 3: Shopify Integration
- [ ] Klaviyo-Shopify integration connected
- [ ] "Viewed Product" metric verified active
- [ ] "Added to Cart" snippet installed in theme.liquid
- [ ] "Added to Cart" metric verified after 24h
- [ ] Checkout page email opt-in checkbox enabled (pre-selected)
- [ ] All standard metrics confirmed: Placed Order, Started Checkout, Fulfilled Order

### Phase 4: Profile Properties & Tags
- [ ] Custom profile properties created: `avatar_level1`, `avatar_level2`, `avatar_level3`, `avatar_general`
- [ ] Pop-up form configured with 4 level-selection buttons
- [ ] Pop-up response mapped to profile tag assignment
- [ ] Tag logic verified (test subscription with each level)

### Phase 5: Segments
- [ ] Engagement segments built: 14/30/60/90-day engaged
- [ ] Avatar-level segments built: one per level tag
- [ ] Cross-level segment for general fallback
- [ ] At-risk segment configured
- [ ] Warming segments ready (if new domain)

### Phase 6: Domain Warming (if new sending domain)
- [ ] 6-week warm-up protocol initiated
- [ ] Start with 14-day engaged segment
- [ ] Gradual volume ramp per protocol
- [ ] Daily monitoring of bounce/spam/open rates

### Phase 7: Flow Architecture
- [ ] Welcome Flow L1 (avatar_level1 trigger, DOC 2 tonality)
- [ ] Welcome Flow L2 (avatar_level2 trigger, DOC 3 tonality)
- [ ] Welcome Flow L3 (avatar_level3 trigger, DOC 4 tonality)
- [ ] Welcome Flow General (avatar_general trigger, DOC 5 tonality)
- [ ] Cart Abandonment (cross-level, Added to Cart trigger)
- [ ] Checkout Abandonment (cross-level, Started Checkout trigger)
- [ ] Browse Abandonment (cross-level, Viewed Product trigger)
- [ ] Post-Purchase Cross-Level (Day 0-13, DOC 5)
- [ ] Post-Purchase Level Detection (Day 14, re-selection email)
- [ ] Order Confirmation (transactional)
- [ ] Shipping Notification (transactional)

### Phase 8: Pop-Up & List Growth
- [ ] Pop-up form designed (brand colors, 10-15% offer)
- [ ] Exit-intent trigger on desktop
- [ ] Scroll-trigger (60-75%) on mobile
- [ ] Teaser widget configured
- [ ] Embedded footer form active
- [ ] Sign-up landing page created

### Phase 9: Monitoring & Hygiene
- [ ] Bounce rate monitoring active (target <0.5%)
- [ ] Spam complaint monitoring active (target <0.03%)
- [ ] Monthly hygiene SOP scheduled
- [ ] Sunset flow configured for unengaged subscribers
- [ ] Google Postmaster Tools reputation tracking active

---

## 6. BrightKidCo-Specific Constants (from DOC6)

| Constant | Value |
|----------|-------|
| From Email | support@brightkidco.com |
| From Name | "Lena from BrightKidCo" |
| Reply-To | support@brightkidco.com |
| Discount Code | WELCOME10 |
| Auto-Apply URL | brightkidco.com/discount/10%25OFF-WELCOME |
| Font | Questrial weight 400 only |
| Brand Green | #039902 |
| Mint | #DBFFCD |
| Cream | #FBF7EB / #FAF5E8 |
| Yellow | #F5C84B / #F5CB5C |
| Gray | #9AA8A7 |
| Guarantee | 60-Day Money Back (NEVER 30) |
| Reviews | 16,511 reviews, 4.9 stars |
| Primary PDP | brightkidco.com/products/potty-training-underwear-for-sensory-sensitive-toddlers... |
| Parent Stories | /pages/real-parent-stories |
| FAQ | /pages/faq |
| Contact | /pages/contact |
| Instagram | instagram.com/brightkidco_official |
| TikTok | tiktok.com/@brightkidco.com |
| Facebook | facebook.com (Profile ID: 61585090600925) |
| Footer Order | Shop · Parent Stories · Contact us · FAQ |
| Shipping | 10 days standard, US-based carriers (no specific carrier named) |

---

*Generated: Layer 37 Round 2 — Skill Loading*
*Skills searched: 10+ (across flows, deliverability, API, onboarding)*
*Client files cross-referenced: DOC6-USAGE-GUIDE.txt, Onboarding-todos.txt*
