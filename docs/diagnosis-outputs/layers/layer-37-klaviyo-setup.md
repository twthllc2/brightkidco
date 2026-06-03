# Layer 37: Klaviyo Technical Setup — Consolidated Diagnosis

**Client:** BrightKidCo (www.brightkidco.com)
**Product:** Potty training underwear for sensory-sensitive toddlers
**Synthesized from:** R1 (Client Files), R2 (Skill Loading), R3 (Wiki Extraction), R4 (Cross-Reference)
**Date:** 2026-05-25

---

## Executive Summary

BrightKidCo's Klaviyo technical setup requires **6 custom profile properties**, **15 tags** (4 avatar + 6 behavioral + 5 purchase), and **9 Phase 1 flows** out of 25 total flows defined in the architecture layer. The setup centers on an avatar-level segmentation system where subscribers self-select into one of four levels (L1/L2/L3/General) via a pop-up, which determines their entire email journey tonality and content.

Key findings from cross-layer analysis:
- **15 tags match exactly** across L37, L8 (Segmentation), and L16 (Flow Architecture)
- **9 Phase 1 flow triggers are consistent** across all layers
- **2 critical inconsistencies** require resolution before implementation (discount code mismatch, missing profile properties)
- **16 Phase 2/3 flows** are documented in L16 but excluded from L37's Phase 1 scope
- **Domain warming (L36)** constrains which flows can activate in weeks 1-6

---

## 1. Custom Profile Properties

| Property | Type | Allowed Values | Segmentation Purpose | Flow Impact | Phase |
|---|---|---|---|---|---|
| `avatar_level` | string | `level1`, `level2`, `level3`, `general` | PRIMARY routing key — determines Welcome Flow variant, level-specific flows, migration paths | Routes to 4 Welcome variants, PP-Extended Education, Winback A/B, FAQ variants | P1 |
| `child_age` | string/number | optional, free text | Age-based content calibration; purchase hint inference (size → age → level) | No direct flow trigger; influences dynamic content blocks | P1 |
| `signup_source` | string | `popup`, `checkout`, `referral` | Tracks acquisition channel; popup = has level tag, checkout/referral = may be GF | Affects which flows are relevant (popup = full funnel, checkout = post-purchase focus) | P1 |
| `welcome_flow_completed` | boolean | true/false | Binary gate — unlocks post-welcome flows (PP-Extended Education, FAQ, Winback B) | Exits Welcome Flow; triggers PP-Education Day 0-21 | P1 |
| `last_purchase_pack_size` | string | `1pair`, `3+3`, `5+5` | Determines upsell/replenishment path | Routes to Replenishment A/B/C; cart recovery dynamic content | P1 |
| `vip_customer` | boolean | true/false | High LTV flag (3+ orders) — Phase 2+ VIP targeting | Triggers VIP Flow (TBD); referral eligibility | P2 |

### Missing Properties (from L8 Segmentation Layer)

| Property | Type | Gap? | Impact |
|---|---|---|---|
| `purchase_reason` | string | YES | Zero-party data collection not in L37 spec; needed for GF sub-group routing |
| `label_sensitive` | boolean | YES | Sub-Group B (Diagnosis-Rejecters) label-sensitive track requires this |

**FINDING:** L37 defines 6 properties. L8 defines 11 (6 + 5 additional). The 5 additional are Phase 2+ (RFM-based), but `purchase_reason` and `label_sensitive` are Phase 1 relevant for GF sub-group routing.

---

## 2. Tag Taxonomy

### 2.1 Avatar Level Tags (4 tags)

| Tag | Trigger | Avatar (L4) | Segment Size | Hope Level | Warming Order (L36) |
|---|---|---|---|---|---|
| `avatar_level1` | Pop-up button 1 | Sarah — Verbal, Hope-Intact, 3-5 yrs | ~35% of audience | 70% hope | Week 1-2 OK |
| `avatar_level2` | Pop-up button 2 | Lisa — Mixed Verbal, Method-Cycling, 5-7 yrs | ~40% of audience (LARGEST) | 40% hope | Week 1-2 OK |
| `avatar_level3` | Pop-up button 3 | Maria — Non-Verbal, Dignity-First, 6-10+ yrs | ~25% of audience | 20% hope | EXCLUDED weeks 1-2 |
| `avatar_general` | Pop-up button 4 | Cross-Level, "still figuring out" | ~50% of real volume | 50/50 hope | Week 1-2 OK |

**Technical mechanism:** Pop-up is 1-step (email field + 1 question with 4 buttons). Each button applies the corresponding avatar tag. Tag determines which Welcome Flow variant the subscriber enters and calibrates tonality for all subsequent mails.

**Migration path:** Day 14 post-purchase, `avatar_general` subscribers receive a level-detection email with 4 re-selection buttons. Clicking L1/L2/L3 updates their tag. No click = stays `avatar_general`.

### 2.2 Behavioral Tags (6 tags)

| Tag | Description | Exit Condition | Flows Affected |
|---|---|---|---|
| `welcome_completed` | Finished Welcome Flow | Set to `true`, permanent | Exits Welcome Flow |
| `welcome_completed_no_purchase` | Completed welcome, no purchase | Purchase OR 60d inactivity | FAQ/Objection Library, Winback B |
| `post_purchase_active` | Engaged post-purchase subscriber | Engagement degrades | Referral Flow |
| `at_risk_no_open` | No opens in 3-7 days (L8 spec) | Open detected OR 60d escalation | PP-Support At-Risk |
| `inactive_60_days` | No opens/clicks for 60 days | Engagement detected | Winback A/B |
| `inactive_120_days` | No opens/clicks for 120 days | Suppression from active list | Sunset Flow |

**NOTE:** L37 says `at_risk_no_open` triggers on "recent" inactivity. L8 specifies "3-7 days." Use L8's spec as authoritative.

### 2.3 Purchase Tags (5 tags)

| Tag | Description | Upsell Path | Replenishment Flow |
|---|---|---|---|
| `buyer_1pair` | Purchased single pair ($34.99) | → 3+3 Bundle (Upgrade Path A) | Replenishment A (Day 14) |
| `buyer_3plus3` | Purchased 3+3 bundle ($79.99) | → 5+5 Bundle (Upgrade Path B) | Replenishment B (Day 75) |
| `buyer_5plus5` | Purchased 5+5 bundle ($119.99) | → Accessory Cross-Sell | Replenishment C (Day 150) |
| `repeat_buyer` | Multiple purchases | Higher tier offers | VIP track |
| `vip_buyer` | High-value repeat customer (3+ orders) | VIP treatment, early access | Referral / Loyalty |

### Tag Count Verification

| Source | Avatar | Behavioral | Purchase | Total |
|---|---|---|---|---|
| L37 R1 | 4 | 6 | 5 | **15** |
| L8 R5 | 4 | 6 | 5 | **15** |
| Match? | YES | YES | YES | **YES — exact match** |

---

## 3. Flow Triggers — Phase 1 (9 Flows)

### 3.1 Welcome Flow (4 Variants)

| Variant | Trigger | Filter | Emails | Timing | Source Doc |
|---|---|---|---|---|---|
| Welcome L1 | Form Submit + `avatar_level1` | Placed Order 0 times | 8 emails | Day 0+ | DOC 2 |
| Welcome L2 | Form Submit + `avatar_level2` | Placed Order 0 times | 8 emails | Day 0+ | DOC 3 |
| Welcome L3 | Form Submit + `avatar_level3` | Placed Order 0 times | 8 emails | Day 0+ | DOC 4 |
| Welcome GF | Form Submit + `avatar_general` | Placed Order 0 times | 8 emails | Day 0+ | DOC 5 |

**Klaviyo trigger type:** List ("Subscribed to List" for primary subscriber list)
**Entry filter:** "Placed Order = 0 times over all time"
**Auto-resend:** Email 1 non-openers get resend after 1 day with different subject line

### 3.2 Cart Abandonment

| Field | Value |
|---|---|
| Trigger | Cart Abandoned (metric: Added to Cart) |
| Condition | No purchase within 24 hours |
| Audience | Cross-Level (DOC 5) — ALWAYS, even if avatar tag known |
| Emails | 3 (reminder 1-2h, social proof 24h, urgency 48-72h) |
| CRITICAL | Requires manual Shopify snippet installation in theme.liquid (NOT automatic) |

**Cart recovery logic:**
- 1 Pair in cart → Upsell to 3+3 ("most parents need more")
- 3+3 in cart → Reminder + Free Shipping emphasis
- 5+5 in cart → Total value emphasis ($119.99 vs. $34.99 × 10 = $349.90)

### 3.3 Checkout Abandonment

| Field | Value |
|---|---|
| Trigger | Started Checkout (Klaviyo native) |
| Condition | No purchase within 1 hour |
| Audience | Cross-Level (DOC 5) |
| Emails | 2-3 (30min, 4h, 24h) |

### 3.4 Browse Abandonment

| Field | Value |
|---|---|
| Trigger | Viewed Product |
| Condition | No cart added within 24 hours |
| Audience | Cross-Level (DOC 5) |
| Emails | 3 |

### 3.5 Order Confirmation

| Field | Value |
|---|---|
| Trigger | Order Placed (Shopify → Klaviyo) |
| Condition | All customers (no filter) |
| Audience | Cross-Level (DOC 5) |
| Emails | 1 (immediate) |
| From Address | orders@send.brightkidco.com |

### 3.6 Shipping Notification

| Field | Value |
|---|---|
| Trigger | Order Fulfilled |
| Condition | All customers (no filter) |
| Audience | Cross-Level (DOC 5) |
| Emails | 1 |

### 3.7 Arrived & Welcome

| Field | Value |
|---|---|
| Trigger | Carrier Delivered |
| Condition | All customers (no filter) |
| Audience | Cross-Level (DOC 5) |
| Emails | 1 (includes upsell opportunity) |

### 3.8 Post-Purchase Direct Upsell

| Field | Value |
|---|---|
| Trigger | Order Placed |
| Timing | Days 1-3 after purchase |
| Audience | Cross-Level (DOC 5) |
| Products | Wash Bag + Mattress accessory cross-sell |
| Emails | 2 |

### 3.9 Post-Purchase Level-Detection

| Field | Value |
|---|---|
| Trigger | Order Placed |
| Timing | Day 14 after purchase |
| Condition | No level tag assigned (subscriber is `avatar_general`) |
| Mechanism | Email with 4 re-selection buttons (L1/L2/L3/General) |
| Expected Performance | 65-75% open, 35-50% click, 40-50% migration rate (from L8) |
| Fallback | No click → stays `avatar_general`; optional 7-day reminder |

---

## 4. Exit Conditions

### Universal Exit Conditions (Every Flow)

| Exit Condition | Applies To |
|---|---|
| Made a purchase | Conversion flows (Cart, Checkout, Browse abandonment) |
| Unsubscribed | All flows |
| Already in a higher-priority flow | All flows (prevents overlap) |

### Priority Hierarchy

```
Order Confirmation > Shipping > Arrived (sequential post-purchase)
Cart/Checkout/Browse are independent high-velocity flows
Welcome Flow runs parallel but lower priority than transactional flows
```

### Segmentation Rules

- Before level tag known → Cross-Level (DOC 5)
- After level tag known → Level-specific (DOC 2/3/4)
- High-velocity flows (Cart/Checkout/Browse) → ALWAYS Cross-Level, even if tag known
- Reason: Speed of response > segmentation accuracy for abandonment flows

---

## 5. Technical Implementation Notes

### 5.1 Sender Configuration

| Setting | Value | Source |
|---|---|---|
| From Email | support@brightkidco.com | L37, L36 |
| From Name | "Lena from BrightKidCo" | L37, L36 |
| Reply-To | support@brightkidco.com | L37, L36 |
| Sending Subdomain | send.brightkidco.com (lowercase) | L36 standard |
| Tracking Subdomain | click.brightkidco.com → dct.klaviyodns.com | L36 |
| Transactional From | orders@send.brightkidco.com | L3 wiki |
| Marketing From | hello@send.brightkidco.com | L3 wiki |

### 5.2 Discount Code

| Setting | Value | Note |
|---|---|---|
| Code | WELCOME10 | Consensus across L4/L8/L16 (L37's 10%OFF-BKCO is INCORRECT — see INC-1) |
| Auto-Apply URL | brightkidco.com/discount/WELCOME10 | |
| Discount | 10% off | |
| Usage | 1 per customer | |

### 5.3 DNS Authentication (from L36)

| Record | Value | Status |
|---|---|---|
| SPF TXT | `v=spf1 include:spf.klaviyo.com ~all` | Configured |
| DKIM CNAME | 2 records from Klaviyo | Configured |
| DMARC TXT | Start with `p=none`, upgrade to `quarantine` then `reject` | Configured |

### 5.4 Shopify Integration Requirements

| Integration | Status | Action |
|---|---|---|
| Klaviyo-Shopify connection | Assumed active | Verify |
| "Viewed Product" metric | Auto-tracked | Verify |
| "Added to Cart" metric | Requires manual snippet in theme.liquid | **MUST INSTALL** |
| Checkout opt-in checkbox | Pre-selected | Enable in Shopify Settings > Checkout |

### 5.5 Klaviyo API Patterns

```
Base URL: https://a.klaviyo.com/api/
Headers: Authorization: Klaviyo-API-Key {KEY}, revision: 2025-01-15
Flow creation: POST /api/flows (draft status first)
Trigger types: "metric" (event-based), "list" (subscription-based)
```

**Required API Key Scopes:** flows:read, flows:write, campaigns:read, campaigns:write, templates:read, templates:write, lists:read, lists:write, metrics:read

### 5.6 Design Constants

| Element | Value |
|---|---|
| Font | Questrial weight 400 only (never bold for body) |
| Brand Green | #039902 |
| Mint | #DBFFCD |
| Cream | #FBF7EB (standardized) |
| Yellow | #F5C84B (standardized) |
| Gray | #9AA8A7 |
| Email Width | 600px |
| Mobile Breakpoint | 480px |
| Max File Size | Under 100KB |
| Image Format | JPG (photos) / PNG (graphics) |

### 5.7 Klaviyo Variables

| Variable | Usage | Fallback |
|---|---|---|
| `{{ first_name }}` | Greeting personalization | "there" |
| `{{ event.order_number }}` | Order reference | "[order number]" |
| `{{ unsubscribe }}` | Footer unsubscribe link | Required |
| `{{ manage_preferences }}` | Footer preference link | Required |
| `{{ organization.url }}cart` | Cart page link | Static URL |

### 5.8 Platform & Market

| Setting | Value |
|---|---|
| E-commerce | Shopify (www.brightkidco.com) |
| Email Platform | Klaviyo |
| Paid Traffic | Meta Ads primarily |
| Markets | USA (65%), UK (15%), AU/NZ (15%), Canada (5%) |

---

## 6. Cross-Layer Dependency Map

### 6.1 Warming Constraints (L36 → L37)

| Warming Phase | Weeks | Active Flows | Content Restrictions |
|---|---|---|---|
| Phase 1 | 1-2 | Welcome, Browse, Cart/Checkout, Post-Purchase | No promotional content, no urgency tactics, transactional cloak required |
| Phase 2 | 3-4 | + PP-Level Detection | Soft promotional OK |
| Phase 3 | 5-6 | + one flow at a time (48-72h monitoring) | Full content OK |
| Post-Warmup | 7+ | All 25 flows | No restrictions |

**CRITICAL:** L37 does not reference L36 warming constraints. All 9 Phase 1 flows must respect warming phases. Domain warming has NOT started (confirmed by L36).

### 6.2 Deliverability Dependencies (L36)

| L36 Requirement | L37 Status | Action |
|---|---|---|
| ZeroBounce list verification | Not mentioned | Reference as prerequisite |
| Google Postmaster Tools | Not mentioned | Set up and verify |
| 7 engagement segments | Not mentioned | Build in Klaviyo |
| Bot detection segments | Not mentioned | Build for suppression |
| Transactional Cloak | Not mentioned | Add to every email template |
| Conversational Cloak | Not mentioned | Flag which emails need it |
| DMARC upgrade path | Not mentioned | Schedule p=none → quarantine |

### 6.3 Flow Segmentation Architecture

| Flow Type | Segmentation | Reason |
|---|---|---|
| Welcome (4 variants) | Level-specific | Tonality calibration per avatar |
| Cart/Checkout/Browse | Cross-level (DOC 5) | Speed > segmentation for abandonment |
| Order/Shipping/Arrived | Cross-level (DOC 5) | Transactional, no segmentation needed |
| PP-Direct Upsell | Cross-level (DOC 5) | Universal accessory offer |
| PP-Level Detection | Cross-level (asks level) | Migration from general to specific |
| Replenishment A/B/C | Cross-level (DOC 5) | Pack-size based, not level based |
| Winback A/B | Level-specific (4 variants) | Re-engagement tonality per level |
| Sunset | Cross-level (DOC 5) | Final attempt, universal |

---

## 7. Identified Gaps & Risks

### Critical (Blocks Implementation)

| ID | Issue | Impact | Resolution |
|---|---|---|---|
| GAP-1 | **Discount code mismatch** — L37 says 10%OFF-BKCO, L4/L8/L16 say WELCOME10 | Pop-up shows WELCOME10 but Klaviyo may have wrong code | Use WELCOME10 everywhere (L4/L8/L16 consensus) |
| GAP-2 | **Missing `purchase_reason` and `label_sensitive` properties** | GF Sub-Group B routing impossible; zero-party data not collected | Add to Klaviyo custom properties |
| GAP-3 | **"Added to Cart" Shopify snippet not installed** | Cart Abandonment flow cannot trigger | Install snippet in theme.liquid before `</body>` |

### Medium (Affects Quality)

| ID | Issue | Impact | Resolution |
|---|---|---|---|
| GAP-4 | `at_risk_no_open` trigger timing ambiguous | "Recent" vs "3-7 days" — inconsistent implementation | Use L8's 3-7 day spec |
| GAP-5 | Sending subdomain capitalization inconsistent | "Send" vs "send" — DNS is case-insensitive but should be consistent | Use lowercase |
| GAP-6 | Cream/yellow color values duplicated | Two cream values (#FBF7EB / #FAF5E8), two yellow values (#F5C84B / #F5CB5C) | Standardize: #FBF7EB cream, #F5C84B yellow |
| GAP-7 | PP-Level Detection missing expected metrics | No performance baseline for key migration flow | Add: 65-75% open, 35-50% click, 40-50% migration |
| GAP-8 | L37 doesn't reference L36 warming constraints | May activate all flows before domain is warmed | Add warming dependency section |
| GAP-9 | Transactional Cloak missing from template spec | L36 requires it on every email | Add cloak block to Klaviyo template spec |

### Low (Documentation Gaps)

| ID | Issue | Impact | Resolution |
|---|---|---|---|
| GAP-10 | 16 L16 flows not in L37 | Phase 2/3 flows undocumented in technical spec | Document explicitly as Phase 2/3 |
| GAP-11 | Exit conditions per flow not documented | Only universal conditions listed | Reference L8's flow routing table |
| GAP-12 | Cart Abandonment Shopify snippet not noted | Implementation may miss critical setup step | Add L16's technical note |
| GAP-13 | 2 wiki stubs (Klaviyo Setup Checklist, Email Deliverability) | Missing reference docs | Create content |

---

## 8. Implementation Checklist

### Phase 1: Account & Access
- [ ] Klaviyo account access with admin/manager permissions
- [ ] Private API key generated with correct scopes
- [ ] Account ID and subscriber list ID documented
- [ ] API key tested and verified (200 response)

### Phase 2: Authentication & Infrastructure
- [ ] Sending subdomain verified (send.brightkidco.com)
- [ ] SPF/DKIM/DMARC records verified
- [ ] Google Postmaster Tools set up
- [ ] Tracking subdomain configured (click.brightkidco.com)

### Phase 3: Shopify Integration
- [ ] Klaviyo-Shopify integration connected
- [ ] "Viewed Product" metric verified
- [ ] "Added to Cart" snippet installed in theme.liquid
- [ ] "Added to Cart" metric verified after 24h
- [ ] Checkout opt-in checkbox enabled

### Phase 4: Profile Properties & Tags
- [ ] 6 custom properties created (or 8 with `purchase_reason` + `label_sensitive`)
- [ ] Pop-up form configured with 4 level-selection buttons
- [ ] Pop-up response mapped to tag assignment
- [ ] Tag logic verified (test subscription with each level)

### Phase 5: Segments
- [ ] Engagement segments: 14/30/60/90-day engaged
- [ ] Avatar-level segments: one per level tag
- [ ] Cross-level segment for general fallback
- [ ] At-risk segment configured
- [ ] Warming segments ready

### Phase 6: Domain Warming
- [ ] 6-week warm-up protocol initiated
- [ ] Start with 14-day engaged segment (L1 + L2 + GF only, exclude L3 weeks 1-2)
- [ ] Gradual volume ramp per L36 protocol

### Phase 7: Flow Architecture (Phase 1)
- [ ] Welcome Flow L1 (8 emails, DOC 2 tonality)
- [ ] Welcome Flow L2 (8 emails, DOC 3 tonality)
- [ ] Welcome Flow L3 (8 emails, DOC 4 tonality)
- [ ] Welcome Flow GF (8 emails, DOC 5 tonality)
- [ ] Cart Abandonment (3 emails, cross-level)
- [ ] Checkout Abandonment (2-3 emails, cross-level)
- [ ] Browse Abandonment (3 emails, cross-level)
- [ ] Order Confirmation (1 email, transactional)
- [ ] Shipping Notification (1 email, transactional)
- [ ] Arrived & Welcome (1 email, cross-level + upsell)
- [ ] PP-Direct Upsell (2 emails, cross-level)
- [ ] PP-Level Detection (1 email, GF only, Day 14)

### Phase 8: Monitoring & Hygiene
- [ ] Bounce rate monitoring (<0.5%)
- [ ] Spam complaint monitoring (<0.03%)
- [ ] Monthly hygiene SOP scheduled
- [ ] Sunset flow configured for 120-day inactive

---

## 9. Source References

| Round | Source | Content |
|---|---|---|
| R1 | Client Files (DOC6, Onboarding-todos, Claude-Project-Instructions, overnight-plan) | Profile properties, tags, flow triggers, exit conditions, sender config, design constants |
| R2 | Skill Library (10+ skills) | API patterns, authentication, domain warming, list hygiene, flow setup, pop-up strategy |
| R3 | Wiki (11 notes across 4 areas) | Flow architecture patterns, email design specs, timing patterns, API patterns, coupon patterns |
| R4 | Cross-Reference (L4, L8, L16, L36) | Inconsistency analysis, gap identification, deliverability constraints, dependency mapping |

---

*Synthesized: Layer 37 Round 5 — Klaviyo Technical Setup*
*Input rounds: 4 (R1: 242 lines, R2: 285 lines, R3: 314 lines, R4: 327 lines)*
*Total input: 1,168 lines → Consolidated output*
