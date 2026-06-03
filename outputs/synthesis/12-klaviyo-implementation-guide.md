# BrightKidCo — Klaviyo Implementation Guide

> **Complete technical guide for a Klaviyo specialist to build every flow, segment, tag, and form for BrightKidCo's email program.**
> Version: 1.0 | Generated: May 28, 2026 | Total Flows: 25 | Total Emails: 110+ | Phases: 3

---

## TABLE OF CONTENTS

1. [Account Setup & Authentication](#1-account-setup--authentication)
2. [Sending & Tracking Infrastructure](#2-sending--tracking-infrastructure)
3. [Shopify Integration](#3-shopify-integration)
4. [List Structure](#4-list-structure)
5. [Custom Profile Properties](#5-custom-profile-properties)
6. [Complete Tag Taxonomy](#6-complete-tag-taxonomy)
7. [Pop-Up / Signup Form Implementation](#7-pop-up--signup-form-implementation)
8. [Segment Definitions](#8-segment-definitions)
9. [Flow Architecture Overview](#9-flow-architecture-overview)
10. [Phase 1: Launch-Ready Flows (Months 1-2)](#10-phase-1-launch-ready-flows-months-1-2)
11. [Phase 2: High-Value Flows (Months 3-4)](#11-phase-2-high-value-flows-months-3-4)
12. [Phase 3: Nice-to-Have Flows (Months 5-6)](#12-phase-3-nice-to-have-flows-months-5-6)
13. [Cross-Flow Suppression & Priority](#13-cross-flow-suppression--priority)
14. [Domain Warming Protocol](#14-domain-warming-protocol)
15. [Deliverability & Compliance](#15-deliverability--compliance)
16. [Reporting & Monitoring](#16-reporting--monitoring)
17. [Implementation Checklist](#17-implementation-checklist)

---

## 1. ACCOUNT SETUP & AUTHENTICATION

### 1.1 Klaviyo Account Requirements

| Requirement | Detail |
|------------|--------|
| Account Tier | Klaviyo (any tier supporting flows + forms + segments) |
| Access Level | Admin or Manager permissions |
| Account ID | Document after setup (used in API calls) |
| Private API Key | Generate with scopes below |

### 1.2 API Key Scopes Required

```
Scope                    | Purpose
─────────────────────────┼─────────────────────────────
flows:read               | Read flow definitions
flows:write              | Create/update flows
campaigns:read           | Read campaign analytics
campaigns:write          | Create/update campaigns
templates:read           | Read email templates
templates:write          | Create/update templates
lists:read               | Read subscriber lists
lists:write              | Create/update lists
metrics:read             | Read event metrics
segments:read            | Read segment definitions
segments:write           | Create/update segments
catalogs:read            | Read product catalog
catalogs:write           | Create/update catalog items
profiles:read            | Read profile data
profiles:write           | Create/update profiles
```

### 1.3 API Reference

```
Base URL:     https://a.klaviyo.com/api/
Auth Header:  Authorization: Klaviyo-API-Key {KEY}
Revision:     revision: 2025-01-15
Flow Creation: POST /api/flows (draft status first)
Trigger Types: "metric" (event-based), "list" (subscription-based)
Profile Ops:   POST /api/profiles, POST /api/profile-import
```

---

## 2. SENDING & TRACKING INFRASTRUCTURE

### 2.1 Sender Configuration

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                      KLAVIYO SENDER CONFIGURATION                            ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  ┌──────────────────────────────────────────────────────────────────────┐   ║
║  │  FROM:      "Lena from BrightKidCo" <support@brightkidco.com>         │   ║
║  │  REPLY-TO:  support@brightkidco.com                                    │   ║
║  │  SENDING:   send.brightkidco.com (subdomain)                           │   ║
║  │  TRACKING:  click.brightkidco.com → dct.klaviyodns.com                 │   ║
║  │                                                                         │   ║
║  │  TRANSACTIONAL: orders@send.brightkidco.com (order confirmations)      │   ║
║  │  MARKETING:     hello@send.brightkidco.com (promotional sends)         │   ║
║  └──────────────────────────────────────────────────────────────────────┘   ║
║                                                                              ║
║  RULE: Always use "Lena from BrightKidCo" as from name. Never Mary S.      ║
║         The founder (Mary S.) appears only in dedicated flow (Flow 11).     ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

### 2.2 DNS Records

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                     DNS AUTHENTICATION RECORDS                                ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  RECORD          │ TYPE  │ VALUE                                            ║
║ ────────────────┼───────┼──────────────────────────────────────────────────  ║
║  SPF TXT         │ TXT   │ v=spf1 include:spf.klaviyo.com ~all              ║
║  DKIM CNAME 1   │ CNAME │ s1._domainkey.send.brightkidco.com →              ║
║                  │       │   s1._domainkey.klaviyo.com                       ║
║  DKIM CNAME 2   │ CNAME │ s2._domainkey.send.brightkidco.com →              ║
║                  │       │   s2._domainkey.klaviyo.com                       ║
║  DMARC TXT       │ TXT   │ v=DMARC1; p=none; rua=mailto:dmarc@ — START     ║
║                  │       │ → Upgrade to p=quarantine → p=reject over time   ║
║  TRACKING CNAME  │ CNAME │ click.brightkidco.com → dct.klaviyodns.com       ║
║                                                                              ║
║  STATUS: Authentication COMPLETE. Domain warming NOT STARTED.               ║
║  See Section 14 for warming protocol.                                        ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

### 2.3 Custom Tracking Domain Setup

1. In Klaviyo, navigate to **Settings > Email > Tracking Domains**
2. Add `click.brightkidco.com` as a custom tracking domain
3. Create CNAME as shown above
4. Verify domain ownership via DNS
5. Wait 24-48 hours for DNS propagation before sending

---

## 3. SHOPIFY INTEGRATION

### 3.1 Integration Status & Requirements

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                   SHOPIFY → KLAVIYO INTEGRATION MAP                           ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  EVENT                      │ STATUS    │ NOTES                              ║
║ ───────────────────────────┼──────────┼───────────────────────────────────── ║
║  Order Placed               │ AUTO ✅   │ Native Shopify integration          ║
║  Order Fulfilled            │ AUTO ✅   │ Native Shopify integration          ║
║  Order Cancelled            │ AUTO ✅   │ Native Shopify integration          ║
║  Viewed Product             │ AUTO ✅   │ Klaviyo tracking snippet            ║
║  Added to Cart              │ MANUAL ⚠  │ Requires snippet in theme.liquid   ║
║  Started Checkout           │ AUTO ✅   │ Klaviyo tracking snippet            ║
║  Placed Order               │ AUTO ✅   │ Native Shopify integration          ║
║  Fulfilled Order            │ AUTO ✅   │ Native Shopify integration          ║
║  Carrier Delivered          │ CONDITIONAL │ Depends on carrier webhooks      ║
║  Carrier Out for Delivery   │ CONDITIONAL │ Depends on carrier webhooks      ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

### 3.2 "Added to Cart" Shopify Snippet Installation

Cart Abandonment flow requires a custom "Added to Cart" metric. Klaviyo's default "Abandoned Cart" fires only on "Started Checkout" — this is actually checkout abandonment. True cart abandonment requires a manual code snippet.

**Installation steps:**

1. Open Shopify Admin → **Online Store > Themes > Edit Code**
2. Locate `theme.liquid`
3. Insert the following snippet just before `</body>`:

```javascript
// Klaviyo "Added to Cart" tracking snippet
// Insert before </body> in theme.liquid
window.addEventListener('load', function() {
  var addToCartForms = document.querySelectorAll('form[action*="/cart/add"]');
  addToCartForms.forEach(function(form) {
    form.addEventListener('submit', function(e) {
      var item = {
        ProductName: '{{ product.title }}',
        ProductID: '{{ product.id }}',
        SKU: '{{ product.selected_or_first_available_variant.sku }}',
        Price: '{{ product.selected_or_first_available_variant.price | money }}',
        URL: window.location.href
      };
      var _learnq = _learnq || [];
      _learnq.push(['track', 'Added to Cart', item]);
    });
  });
});
```

4. **Verify:** After 24 hours, check Klaviyo Metrics page — "Added to Cart" should show events

### 3.3 Checkout Opt-In Checkbox

Enable checkout opt-in in **Shopify Settings > Checkout > Email opt-in**:
- Set to "Pre-selected" by default (per BrightKidCo strategy)
- This captures subscribers who skip the popup but proceed to checkout

### 3.4 Product Catalog Sync

- Enable **Automatic Catalog Sync** in Klaviyo → **Integrations > Shopify**
- Verify product sync completes successfully
- Products should show in Klaviyo Catalog with correct IDs, prices, and images
- Required for dynamic product blocks in abandonment and upsell flows

---

## 4. LIST STRUCTURE

### 4.1 Master List Configuration

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                   BRIGHTKIDCO LIST ARCHITECTURE                                ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  ┌─────────────────────────────────────────────────────────────────────┐    ║
║  │  MASTER SUBSCRIBER LIST    (ALL SUBSCRIBERS)                          │    ║
║  │  ┌──────────────────────────────────────────────────────────────┐   │    ║
║  │  │  WELCOME FLOW L1  ── enter: avatar_level1 tag                │   │    ║
║  │  │  WELCOME FLOW L2  ── enter: avatar_level2 tag                │   │    ║
║  │  │  WELCOME FLOW L3  ── enter: avatar_level3 tag                │   │    ║
║  │  │  WELCOME FLOW GF  ── enter: avatar_general tag               │   │    ║
║  │  └──────────────────────────────────────────────────────────────┘   │    ║
║  │                                                                       │    ║
║  │  ↓ Behavior tracking via tags, not separate lists                    │    ║
║  │                                                                       │    ║
║  │  → All subscribers remain in Master List throughout lifecycle        │    ║
║  │  → Segmentation happens via tags + segments, NOT separate lists      │    ║
║  │  → Suppression via standard Klaviyo unsubscribe/bounce tracking      │    ║
║  └─────────────────────────────────────────────────────────────────────┘    ║
║                                                                              ║
║  ┌─────────────────────────────────────────────────────────────────────┐    ║
║  │  SUPPRESSION LIST   (DO NOT SEND TO)                                 │    ║
║  │  Contains: Unsubscribed profiles, Hard bounced, Spam complainers,    │    ║
║  │            Unengaged 180+ days (after Sunset completes)              │    ║
║  │  Maintained via: Klaviyo auto-suppression + segment-based exclusion  │    ║
║  └─────────────────────────────────────────────────────────────────────┘    ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

### 4.2 List Architecture Rules

| Rule | Detail |
|------|--------|
| **Single Master List** | ONE subscriber list. All subscribers enter the same master list. No separate lists per level. |
| **Segmentation via Tags** | Avatar level is tracked via profile tags (`avatar_level1`, etc.), NOT separate lists |
| **Suppression via Exclusion** | Suppress from ALL flows/campaigns using the Master Suppression Segment (see Section 8) |
| **No Auto-Generated Lists** | Klaviyo auto-generates lists from form submissions — keep the main list as the single source of truth |
| **Data Portability** | Single list simplifies exports, audits, and future migration |

---

## 5. CUSTOM PROFILE PROPERTIES

### 5.1 Property Definitions

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                  KLAVIYO CUSTOM PROFILE PROPERTIES                             ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  ┌──────────────────────────────────────────────────────────────────────────┐║
║  │  PROPERTY             │ TYPE    │ VALUES                       │ PURPOSE │║
║  ├──────────────────────────────────────────────────────────────────────────┤║
║  │  avatar_level          │ string  │ "level1" / "level2" /       │ PRIMARY │║
║  │                        │         │ "level3" / "general"         │ routing │║
║  ├──────────────────────────────────────────────────────────────────────────┤║
║  │  child_age             │ string  │ Free text (optional)         │ Content │║
║  │                        │         │ e.g. "5", "3.5", "8"        │ calib.  │║
║  ├──────────────────────────────────────────────────────────────────────────┤║
║  │  signup_source         │ string  │ "popup" / "checkout" /       │ Channel │║
║  │                        │         │ "referral" / "other"         │ attrib. │║
║  ├──────────────────────────────────────────────────────────────────────────┤║
║  │  welcome_flow_completed│ boolean │ true / false (default false)│ Gate    │║
║  ├──────────────────────────────────────────────────────────────────────────┤║
║  │  last_purchase_pack_   │ string  │ "1pair" / "3+3" / "5+5"     │ Replen. │║
║  │  size                  │         │                               │ timing  │║
║  ├──────────────────────────────────────────────────────────────────────────┤║
║  │  vip_customer          │ boolean │ true / false (default false) │ VIP     │║
║  │                        │         │ Set after 3+ orders          │ routing │║
║  ├──────────────────────────────────────────────────────────────────────────┤║
║  │  purchase_reason       │ string  │ Free text                     │ Zero-   │║
║  │  (Phase 2+)            │         │ "gift", "own child", "school" │ party   │║
║  ├──────────────────────────────────────────────────────────────────────────┤║
║  │  label_sensitive       │ boolean │ true / false                   │ Sub-    │║
║  │  (Phase 2+)            │         │                               │ Group B │║
║  └──────────────────────────────────────────────────────────────────────────┘║
║                                                                              ║
║  PHASE 2+ RFM PROPERTIES (add when 500+ customers exist):                   ║
║    rfm_recency (int 1-5) | rfm_frequency (int 1-5)                          ║
║    rfm_monetary (int 1-5) | rfm_persona (string)                            ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

### 5.2 Property Setting Sources

| Property | Set By | When |
|----------|--------|------|
| `avatar_level` | Pop-up button click OR PP-Level Detection mail | On signup OR Day 14 post-purchase |
| `child_age` | Pop-up form field (optional) | On signup |
| `signup_source` | Signup form hidden field | On signup |
| `welcome_flow_completed` | Welcome Flow exit action | After Welcome Flow completes |
| `last_purchase_pack_size` | Order Placed event → Flow action | On purchase |
| `vip_customer` | Flow condition: 3+ orders | After 3rd purchase |
| `purchase_reason` | Post-purchase survey (Phase 2+) | After first purchase |
| `label_sensitive` | Reply detection OR Sub-Group B form variant | On signup or reply |

### 5.3 Klaviyo UI Setup

1. Navigate to **Settings > Custom Properties**
2. Click **Add Custom Property** for each property above
3. Set type (string/boolean) and allowed values where applicable
4. Properties are immediately available for segment and flow conditions

---

## 6. COMPLETE TAG TAXONOMY

### 6.1 Tag Categories Overview

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                      COMPLETE TAG TAXONOMY (15 TAGS)                          ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  AVATAR TAGS (4)          BEHAVIORAL TAGS (6)         PURCHASE TAGS (5)     ║
║  ┌──────────────────────┐ ┌──────────────────────┐  ┌──────────────────────┐ ║
║  │ avatar_level1        │ │ welcome_completed    │  │ buyer_1pair          │ ║
║  │ avatar_level2        │ │ welcome_completed_   │  │ buyer_3plus3         │ ║
║  │ avatar_level3        │ │   no_purchase        │  │ buyer_5plus5         │ ║
║  │ avatar_general       │ │ post_purchase_active │  │ repeat_buyer         │ ║
║  └──────────────────────┘ │ at_risk_no_open      │  │ vip_buyer            │ ║
║                           │ inactive_60_days     │  └──────────────────────┘ ║
║                           │ inactive_120_days    │                           ║
║                           └──────────────────────┘                           ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

### 6.2 Avatar Level Tags (4 Tags)

| Tag | Trigger | Applied | Segment Size | Primary Flow |
|-----|---------|---------|:------------:|-------------|
| `avatar_level1` | Pop-up button 1: "Talks about potty but won't actually do it" | On signup | ~35% | Welcome L1 |
| `avatar_level2` | Pop-up button 2: "Sensory issues, tried many methods" | On signup | ~40% (LARGEST) | Welcome L2 |
| `avatar_level3` | Pop-up button 3: "Non-verbal or high support needs" | On signup | ~25% | Welcome L3 |
| `avatar_general` | Pop-up button 4: "Still figuring out what's going on" | On signup | ~50% real volume | Welcome GF |

**Routing rules for avatar tags:**
- Welcome Flow: Level-specific variant (4 different flows)
- Cart/Checkout/Browse Abandonment: Cross-level ALWAYS (speed > segmentation)
- PP-Education Day 0-21: Cross-level
- PP-Extended Education Day 22+: Level-specific if tag known
- PP-Extended Upsell Day 28: Level-aware content
- Winback Path A/B: Level-specific variants
- FAQ/Objection Library: Cross-level (DOC5) with level-aware content

### 6.3 Behavioral Tags (6 Tags)

| Tag | Trigger | When Applied | Flow Impact | Exit Condition |
|-----|---------|:------------:|-------------|:--------------:|
| `welcome_completed` | Welcome Flow exit | After Welcome Flow completes | Excludes from Welcome. Unlocks PP-Extended Education. | `welcome_flow_completed = true` (permanent) |
| `welcome_completed_no_purchase` | Welcome Flow exit (no purchase) | After Welcome Flow | Routes to FAQ/Objection Library. Enables Winback B. | Purchase OR 60d inactivity |
| `post_purchase_active` | Positive engagement signals | Behavioral check | Unlocks Referral Flow at Day 30 | Engagement degrades |
| `at_risk_no_open` | 3-7 days of no opens | Engagement check | Routes to PP-Support At-Risk | Open detected OR 60d escalation |
| `inactive_60_days` | 60 days with no engagement | Engagement check | Routes to Winback A (if buyer) or Winback B (if non-buyer) | Engagement detected |
| `inactive_120_days` | 120 days with no engagement | Engagement check | Routes to Sunset Flow | Suppression from active list |

### 6.4 Purchase Tags (5 Tags)

| Tag | Trigger | Flow Impact | Upsell Path |
|-----|---------|-------------|:-----------:|
| `buyer_1pair` | Purchased 1 Pair ($34.99) | Replenishment A at Day 14. PP-Direct Upsell at Day 1-3 | → 3+3 Bundle |
| `buyer_3plus3` | Purchased 3+3 Bundle ($79.99) | Replenishment B at Day 75. PP-Extended Upsell at Day 28 | → 5+5 Bundle |
| `buyer_5plus5` | Purchased 5+5 Bundle ($119.99) | Replenishment C at Day 150. VIP consideration | → Accessory Cross-Sell |
| `repeat_buyer` | Multiple purchases | Cross-level loyalty content. Excluded from Winback A | VIP track |
| `vip_buyer` | 3+ orders | VIP treatment. Early access. Referral/Loyalty rewards | Highest-tier content |

### 6.5 Tag Interaction Matrix

```
PRIMARY TAG         │ SECONDARY TAG      │ ROUTING BEHAVIOR
────────────────────┼───────────────────┼────────────────────────────────────
avatar_level1/2/3   │ welcome_completed │ Level-specific flows activated.
                    │                   │ Welcome flow skipped.
────────────────────┼───────────────────┼────────────────────────────────────
avatar_general      │ welcome_completed │ Cross-level flows activated.
                    │                   │ General content until migration.
────────────────────┼───────────────────┼────────────────────────────────────
avatar_level1/2/3   │ inactive_60_days  │ Winback Path A — still level-specific
────────────────────┼───────────────────┼────────────────────────────────────
avatar_general      │ inactive_60_days  │ Winback Path A — cross-level
────────────────────┼───────────────────┼────────────────────────────────────
avatar_level1/2/3   │ at_risk_no_open   │ PP-Support At-Risk (cross-level)
                    │                   │ At-risk overrides level-specific
────────────────────┼───────────────────┼────────────────────────────────────
buyer_[X]           │ avatar_level1/2/3 │ Avatar = content; Transaction = timing
```

### 6.6 Tag Application Mechanism

Tags are applied via these mechanisms:

| Mechanism | Tags Applied | Implementation |
|-----------|-------------|----------------|
| **Pop-up form action** | `avatar_level1/2/3/general` | Klaviyo Form → checkbox/button → "Add tag to profile" action |
| **Flow action** | `welcome_completed`, `welcome_completed_no_purchase` | End of Welcome Flow → "Add tag" step |
| **Flow condition + action** | `buyer_1pair/3plus3/5plus5` | Order Placed trigger → Condition on product → Add tag |
| **Segment-based (manual/auto)** | `at_risk_no_open`, `inactive_60_days`, `inactive_120_days` | Dynamic segment → auto-apply tag via flow trigger |
| **Manual / API** | `post_purchase_active`, `repeat_buyer`, `vip_buyer` | Klaviyo API profile tag endpoint |

### 6.7 Tag Creation in Klaviyo

1. Navigate to **Lists & Segments > Tags**
2. Create each tag in all 3 categories (15 total)
3. Tags are lowercase with underscores — this is critical for flow conditions
4. Verify tags appear in profile sidebar after test signup

---

## 7. POP-UP / SIGNUP FORM IMPLEMENTATION

### 7.1 Pop-Up Configuration Overview

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                         POP-UP SPECIFICATION                                  ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  TYPE:        Popup (modal) — Klaviyo Forms or external tool                ║
║  TRIGGER:     Desktop: exit-intent | Mobile: 15-30 second time delay       ║
║  DISPLAY:     1-step popup with email + name + 1-question self-selection    ║
║  MOBILE:      Full-screen variant, mobile-optimized layout                  ║
║  FREQUENCY:   Max 1x per 7 days per visitor (30-day suppress after dismiss) ║
║  IMPLEMENT:   Klaviyo Forms (native) or Privy/OptinMonster/Justuno          ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

### 7.2 Step 1 — Self-Selection Widget

| Element | Text |
|---------|------|
| **Headline** | "Get 10% off + a potty training plan built for kids like yours." |
| **Subheadline** | "What describes your child best?" |
| **Email Field** | [enter your email] — required |
| **First Name Field** | [enter your first name] — required |
| **CTA Button** | [Get My 10% Code] |
| **Privacy Note** | "We respect your inbox. Unsubscribe anytime." |

### 7.3 Four Selection Buttons → Tag Mapping

```
╔══════════════════════════════════════════════════════════════════════════════╗
║              BUTTON LABEL → TAG → AVATAR LEVEL MAPPING                        ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  BUTTON TEXT                               │ KLAVIYO TAG     │ LEVEL        ║
║ ──────────────────────────────────────────┼─────────────────┼────────────── ║
║  "Talks about potty but won't actually     │ avatar_level1   │ Level 1      ║
║   do it"                                   │                 │ Sarah        ║
║ ──────────────────────────────────────────┼─────────────────┼────────────── ║
║  "Sensory issues, tried many methods"      │ avatar_level2   │ Level 2      ║
║                                           │                 │ Lisa 🏆      ║
║ ──────────────────────────────────────────┼─────────────────┼────────────── ║
║  "Non-verbal or high support needs"        │ avatar_level3   │ Level 3      ║
║                                           │                 │ Maria        ║
║ ──────────────────────────────────────────┼─────────────────┼────────────── ║
║  "Still figuring out what's going on"      │ avatar_general  │ General      ║
║                                           │                 │ Fallback     ║
║                                                                              ║
║  CRITICAL: NO level labels in button text. Symptom-based language ONLY.     ║
║  NEVER show "Level 1", "Level 2" etc. to the subscriber.                    ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

### 7.4 Step 2 — Offer Delivery (Immediately After Submit)

| Element | Text |
|---------|------|
| **Headline** | "Your code is ready." |
| **Code Display** | `WELCOME10` (prominent, large font) |
| **Note** | "Auto-applies at checkout. Valid 7 days." |
| **CTA Button** | [Shop Now] |
| **Close Option** | "or keep browsing" |

**CRITICAL IMPLEMENTATION DETAIL:** Code is displayed DIRECTLY in the pop-up, NOT sent via email. Customer can buy immediately without checking inbox.

### 7.5 Klaviyo Forms Setup Steps

1. **Create the form:**
   - Navigate to **Sign-up Forms → Create Form → Popup**
   - Select "Multi-step" layout
   - Use exact copy from 7.2-7.4 above

2. **Configure trigger:**
   - Desktop: Exit-intent trigger
   - Mobile: Time delay, 15-30 seconds
   - Frequency cap: Once per 7 days

3. **Configure button → tag mapping:**
   - Each of the 4 selection buttons triggers a different "Add tag" action in the form submit
   - In Klaviyo Forms, use conditional content blocks or separate hidden fields per button
   - Alternative: Use separate submit actions per button (button 1 → tag avatar_level1, etc.)

4. **Configure success action:**
   - Display Step 2 with WELCOME10 code
   - Add profile to Master Subscriber List
   - Set `signup_source = "popup"`
   - The applied tag triggers the corresponding Welcome Flow variant

5. **Configure suppression:**
   - Hide from existing subscribers (already on Master List)
   - Hide from visitors who dismissed in last 30 days

### 7.6 Klaviyo Native Forms vs Third-Party Decision

```
FEATURE                     │ KLAVIYO NATIVE  │ THIRD-PARTY (Privy/Justuno)
────────────────────────────┼─────────────────┼─────────────────────────────
Popup, flyout, embedded     │ ✅ Yes          │ ✅ Yes
Multi-step forms            │ ✅ Yes          │ ✅ Yes
Exit intent (desktop)       │ ✅ Yes          │ ✅ Yes
Exit intent (mobile)        │ ❌ No           │ ✅ Some tools
Coupon integration          │ ✅ Yes          │ ✅ Yes
A/B testing                 │ ✅ Basic        │ ✅ Advanced
Conditional logic           │ ⚠️ Limited     │ ✅ Advanced
Quiz integration            │ ❌ No           │ ✅ With API
Direct Klaviyo tag action   │ ✅ Native       │ ✅ Via API
```

**Recommendation:** Start with Klaviyo native forms. They cover 80% of BKC's needs. Consider Wisepops or Octane AI if advanced branching (quiz-style selection) or mobile exit-intent becomes necessary.

---

## 8. SEGMENT DEFINITIONS

### 8.1 Standard Klaviyo Segments

#### Engagement-Based Segments

| Segment Name | Filter Condition | Purpose |
|-------------|-----------------|---------|
| Engaged 90 Days | Opened email OR clicked in last 90 days | Default campaign audience (Phase 1) |
| Engaged 30 Days | Opened email OR clicked in last 30 days | VIP-level triggered sends (Phase 2+) |
| Unengaged 180+ Days | 0 opens AND 0 clicks in 180 days | Suppression — exclude from ALL campaigns |
| At-Risk (90d) | Engaged 90 days but 0 clicks in 90 days | Losing interest — targeted re-engagement |

#### Value-Based Segments

| Segment Name | Filter Condition | Purpose |
|-------------|-----------------|---------|
| VIP (Top 10%) | Total spend in top 10% | Phase 2+: Early access, referral, loyalty |
| High AOV | Total spend > $150 | Upsell targeting |
| One-Time Buyers | 1 purchase, no purchase in 90 days | Targeted winback |
| Frequent Buyers | 3+ orders | Referral invitations |

#### Demographic Segments

| Segment Name | Filter Condition | Purpose |
|-------------|-----------------|---------|
| US Subscribers | Country = US (~65%) | Country-specific content |
| UK Subscribers | Country = UK (~15%) | UK pricing, terminology |
| AU/NZ Subscribers | Country = AU or NZ (~15%) | Regional seasonal triggers |
| Canada Subscribers | Country = CA (~5%) | Canadian-specific content |

### 8.2 Flow-Specific Segments

These segments are used as entry conditions for flow triggering:

| Segment Name | Filter Condition | Triggers |
|-------------|-----------------|:--------:|
| Welcome Flow L1 | Tag contains `avatar_level1` + `welcome_flow_completed = false` | Flow 01 |
| Welcome Flow L2 | Tag contains `avatar_level2` + `welcome_flow_completed = false` | Flow 01 |
| Welcome Flow L3 | Tag contains `avatar_level3` + `welcome_flow_completed = false` | Flow 01 |
| Welcome Flow GF | Tag contains `avatar_general` + `welcome_flow_completed = false` | Flow 01 |
| Cart Abandonment | Cart Abandoned event + No purchase in 24h | Flow 02 |
| Checkout Abandonment | Started Checkout event + No purchase in 1h | Flow 03 |
| Browse Abandonment | Viewed Product event + No cart in 24h | Flow 04 |
| PP-Level Detection | Order Placed + Day 14 + `avatar_level = "general"` | Flow 12 |
| PP-Extended Education | Level tag known + Day 22 after purchase | Flow 15 |
| PP-Support At-Risk | Tag `at_risk_no_open` + Day 3-7 post-purchase | Flow 16 |
| Sunset Flow | Tag `inactive_120_days` | Flow 23 |
| FAQ/Objection Library | Tag `welcome_completed_no_purchase` | Flow 24 |

### 8.3 Master Suppression Segment (Apply to ALL Campaigns)

| Criteria | Condition |
|----------|-----------|
| Unsubscribed | Klaviyo unsubscribe flag |
| Hard Bounced | Klaviyo bounce tracking (< 0.5% target) |
| Spam Complainers | Klaviyo complaint tracking (< 0.01% target) |
| Unengaged 180+ Days | 0 opens AND 0 clicks in 180 days |
| Role Accounts | `@temp`, `@mailinator`, `@guerrillamail`, catch-all addresses |
| Sunset In Progress | Currently in Sunset Flow (Flow 23) |

### 8.4 Klaviyo Segment Syntax Reference

```
FILTER                              │ SYNTAX
────────────────────────────────────┼──────────────────────────────────────
Has tag `avatar_level1`             │ Tags contain "avatar_level1"
Property equals "general"           │ Properties: avatar_level = "general"
Boolean is false                    │ Properties: welcome_flow_completed = false
Order count over all time           │ Placed Order = 0 times over all time
Days since event                    │ Placed Order = 0 times since starting this flow
Date-based                          │ Subscribed at date after 2026-06-01
Open rate                           │ Opened email at least once in the last 90 days
Click rate                          │ Clicked email at least once in the last 90 days
```

---

## 9. FLOW ARCHITECTURE OVERVIEW

### 9.1 System Architecture

```
╔══════════════════════════════════════════════════════════════════════════════╗
║              COMPLETE FLOW SYSTEM ARCHITECTURE (25 FLOWS)                     ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  PHASE 1              │ PHASE 2               │ PHASE 3                      ║
║  (Months 1-2)         │ (Months 3-4)          │ (Months 5-6)                ║
║  9 flows, ~43 emails  │ 8 flows, ~34 emails   │ 8 flows, ~33 emails         ║
║ ─────────────────────┼───────────────────────┼───────────────────────────── ║
║                       │                        │                              ║
║  Welcome L1 (8)       │ Browse Abandon (3)    │ PP-Ext Ed L1 (5)            ║
║  Welcome L2 (8)       │ Mary S. Story (1)     │ PP-Ext Ed L2 (5)            ║
║  Welcome L3 (8)       │ PP-Edu Day 0-21 (4)   │ PP-Ext Ed L3 (5)            ║
║  Welcome GF (8)       │ PP-Ext Upsell (3)     │ PP-Ext Ed GF (5)            ║
║  Cart Abandon (3)    │ PP-Mid Check-In (3)   │ PP-Support At-Risk (4)      ║
║  Chkout Abandon (2)  │ Replenish A (3)       │ Winback Path B L1 (3)       ║
║  Order Conf (1)      │ Replenish B (2)       │ Winback Path B L2 (3)       ║
║  Shipping (1)        │ Replenish C (2)       │ Winback Path B L3 (3)       ║
║  Out Deliver (1)     │ Review Request (2)    │ Winback Path B GF (3)       ║
║  Arrived+Welcome (1) │ Winback A L1 (3)      │ Sunset (2)                   ║
║  PP-Direct Upsell (2)│ Winback A L2 (3)      │ FAQ/Objection Lib (6)       ║
║  PP-Level Detect (1) │ Winback A L3 (3)      │ Referral (3)                 ║
║                       │ Winback A GF (3)      │                              ║
║                       │                        │                              ║
║  ────────────────     │ ────────────────      │ ────────────────             ║
║  LEVEL-SPECIFIC: 32  │ LEVEL-SPECIFIC: 12    │ LEVEL-SPECIFIC: 32           ║
║  CROSS-LEVEL:   11   │ CROSS-LEVEL:   22     │ CROSS-LEVEL:   15            ║
║                                                                              ║
║  TOTAL: 25 flows | 110+ unique emails | 77 level-specific | 33 cross-level  ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

### 9.2 Subscriber Lifecycle with Flow Triggers

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                         SUBSCRIBER LIFECYCLE WITH FLOW TRIGGERS                       │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                       │
│             ┌─── TIMELINE ────────────────────────────────────────────────────┐       │
│             │ D0  D1  D3  D7  D10  D14  D21  D28  D30  D60  D75  D90  D120   │       │
│             └─────────────────────────────────────────────────────────────────┘       │
│                                                                                       │
│  ARRIVAL                                                                              │
│     │                                                                                 │
│     ▼                                                                                 │
│  ┌────────┐                                                                          │
│  │ POP-UP │                                                                          │
│  └───┬────┘                                                                          │
│      │                                                                               │
│      ▼                                                                               │
│  ┌─────────────────────────────────────────────────────────┐                        │
│  │          WELCOME FLOW (8×4=32 ★ Level-specific)         │                        │
│  │  ┌──┐ ┌──┐ ┌──┐ ┌──┐ ┌───┐ ┌───┐ ┌───┐ ┌────┐        │                        │
│  │  │E1│→│E2│→│E3│→│E4│→│E5 │→│E6 │→│E7 │→│E8 │        │                        │
│  │  │D0│ │D1│ │D3│ │D7│ │D10│ │D14│ │D17│ │D21│        │                        │
│  │  └──┘ └──┘ └──┘ └──┘ └───┘ └───┘ └───┘ └────┘        │                        │
│  └─────────────────────────────────────────────────────────┘                        │
│      │                                                                               │
│      ├────── NO PURCHASE ──────────────┐        ┌──── PURCHASE ────────────────┐    │
│      │                                  │        │                                │    │
│      ▼                                  ▼        ▼                                ▼    │
│  ┌──────────────┐              ┌────────────┐  ┌──────────────────────────────────┐  │
│  │ CART/CHECKOUT│              │ WINBACK B  │  │ ORDER CONFIRM → SHIPPING → OUT   │  │
│  │ BROWSE ABAND │              │ (60d)      │  │ → ARRIVED → PP-DIRECT UPSELL     │  │
│  │ (7 emails)   │              │ 3×4=12★   │  │ (7 emails, cross-level)           │  │
│  └──────┬───────┘              └────────────┘  └──────────┬───────────────────────┘  │
│         │                                                  │                          │
│         ▼                                                  ▼                          │
│  ┌───────────────────────────────────────────────────────────┐                      │
│  │  PP-EDUCATION D0-21 (4) → PP-LEVEL DETECT (GF, D14)       │                      │
│  │  → PP-Ext Upsell (D28) → PP-Mid Check-In (D30-60)         │                      │
│  │  → Replenish A/B/C (D14/75/150) → Review Request (D30)   │                      │
│  └───────────────────────────────────────────────────────────┘                      │
│                              │                                                       │
│                              ├──── INACTIVE 60d ──→ WINBACK A (3×4=12★)             │
│                              ├──── INACTIVE 120d → SUNSET (2)                       │
│                              └──── POSITIVE ENG → REFERRAL (D30, 3)                  │
│                                                                                       │
│  PARALLEL TRACK (Post-Welcome, No Purchase):                                         │
│  FAQ/OBJECTION LIBRARY (6) → WINBACK B (3×4=12★)                                    │
│                                                                                       │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

### 9.3 Level-Segmented vs Cross-Level Flows

| Type | Flows |
|------|-------|
| **Level-Segmented (4 variants each)** | Welcome Flow, PP-Extended Education, Winback Path A, Winback Path B |
| **Cross-Level (DOC 5 — 1 copy)** | Cart/Checkout/Browse Abandonment, Order Confirmation, Shipping, Out for Delivery, Arrived & Welcome, PP-Direct Upsell, PP-Level Detection, PP-Mary S. Story, PP-Education Day 0-21, PP-Extended Upsell, PP-Mid Check-In, PP-Support At-Risk, Replenishment A/B/C, Review Request, FAQ/Objection Library, Sunset, Referral |

### 9.4 Segmentation Rule

| Rule | Detail |
|------|--------|
| Before level tag known | Cross-Level (DOC 5) — General Fallback content |
| After level tag known | Level-specific (DOC 2/3/4) for educational/winback/FAQ |
| High-velocity flows (Cart/Checkout) | Cross-Level ALWAYS — speed > segmentation |
| Post-Purchase Day 0-21 | Cross-Level — education-first while level uncertain |
| Post-Purchase Day 22+ | Level-specific if tag known |

---

## 10. PHASE 1: LAUNCH-READY FLOWS (Months 1-2)

### 10.1 Flow Priority Order

| Priority | Flow | Rationale |
|----------|------|-----------|
| 1 | Welcome Flow (all 4 variants) | Highest priority — ALL subscribers enter here |
| 2 | Cart + Checkout Abandonment | Immediate conversion lift |
| 3 | Order Confirmation + Shipping + Arrived | Customer expects these (transactional) |
| 4 | PP-Direct Upsell | Parallel to delivery, high-ROI |
| 5 | PP-Level Detection | Day 14+ — enables Phase 2 segmentation |

### 10.2 FLOW 01: Welcome Flow (4 Level Variants)

**The highest-priority flow — all subscribers enter here first.**

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                     WELCOME FLOW — 8-EMAIL BUYER JOURNEY                      ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  Day 0        Day 1        Day 3        Day 7        Day 10      Day 21    ║
║  ┌─────┐     ┌─────┐     ┌─────┐     ┌─────┐     ┌─────┐     ┌─────┐      ║
║  │ E1  │────→│ E2  │────→│ E3  │────→│ E4  │────→│E5-E7│────→│ E8  │      ║
║  └─────┘     └─────┘     └─────┘     └─────┘     └─────┘     └─────┘      ║
║     │           │           │           │           │           │           ║
║     ▼           ▼           ▼           ▼           ▼           ▼           ║
║  Welcome    Mechanism   Decision    "You        Slow        Gentle        ║
║  + Code     Explains    Time:       Didn't      Nurture     Close         ║
║  WELCOME10  It          60-Day +    Fail"       + Social    + Door        ║
║                         Permission              Proof       Stays         ║
║                         Not to Buy                          Open          ║
║                                                                              ║
║  ┌──────────────────────────────────────────────────────────────────────┐   ║
║  │  STRUCTURE: Enter → Educate → Decision → Reframe → Nurture → Close    │   ║
║  └──────────────────────────────────────────────────────────────────────┘   ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

#### Technical Configuration

| Property | Value |
|----------|-------|
| **Trigger** | Subscribed to List (Master List) + avatar_level tag applied |
| **Emails** | 8 per level variant = 32 total |
| **Timing** | D0/1/3/7/10/14/17/21 (over 21 days) |
| **Segmentation** | 4 level variants |
| **Flow filter** | Placed Order = 0 times since starting this flow |
| **Exit conditions** | Made a purchase, Unsubscribed, Already in higher-priority flow |
| **Discount** | WELCOME10 (10% off, auto-apply URL in email) |

#### Email Sequence Timing

| Email | Day | Goal | Tipping Point |
|-------|-----|------|---------------|
| E1 | Day 0 | Welcome + code delivery (WELCOME10) | Recognizes her problem in the mail |
| E2 | Day 1 | Mechanism explanation | "Holy shit, that explains it" |
| E3 | Day 3 | Decision time + 60-day guarantee | Permission not to buy |
| E4 | Day 7 | "You didn't fail" reframe | Absolution |
| E5 | Day 10 | Slow acceptance / wisdom audience | Deeper mechanism education |
| E6 | Day 14 | Continued nurture | Social proof + peer stories |
| E7 | Day 17 | Final conversion push | Permission-not-to-buy |
| E8 | Day 21 | Last touch before flow exit | Gentle close, door stays open |

#### 4 Level Variants — Tonality Differences

**Level 1 (Sarah) — 70% Hope / 30% Realism (~35%):**
- Voice: Education-oriented, gentle, Pre-K driven
- Hook: "He's almost 3 and shows zero interest in the potty"
- Mechanism: Sensory gap reframe with hope framing
- Cadence: Normal timing, Pre-K urgency in later emails
- Forbidden: Never mention L2/L3 experiences, severe autism, adult diapers

**Level 2 (Lisa) — 40% Hope / 60% Realism (~40% LARGEST):**
- Voice: Science-first, mechanism specificity, BCBA-respectful
- Hook: "I tried the Oh Crap method and it totally stressed her and me"
- Mechanism: Kelly Mahler interoception research, complements BCBA
- Cadence: Slightly slower, more mechanism depth, less frequency
- Forbidden: Pre-K urgency, aggressive BCBA criticism, "quick" results

**Level 3 (Maria) — 20% Hope / 80% Realism (~25%):**
- Voice: Dignity-first, respectful, no urgency, no pressure
- Hook: "He's 7 and still in pull-ups. I've given up trying."
- Mechanism: Late-trainer stories (Maureen Bennie's son was 9.5)
- Cadence: SLOWEST — E1->E2 gap 2 days, ZERO urgency
- Forbidden: "Don't give up", grief as sales tool, "independence" without context

**General Fallback — 50/50 Hope/Realism (~50% of volume):**
- Voice: "Whether...Or...If..." language pattern, symptom-first
- Hook: Cross-level recognition anchors (3-5 scenarios per mail)
- Mechanism: Migration anchors to push toward level self-identification
- Cadence: Balanced, cross-level language, migration anchors embedded
- Forbidden: Level labels, diagnosis language, fixed age references

#### Welcome Flow Klaviyo Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                  WELCOME FLOW — KLAVIYO ARCHITECTURE                          │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│  [Trigger: Form Submit + avatar_level tag]                                    │
│           │                                                                   │
│           v                                                                   │
│  ┌────────────────────────────────────────────┐                              │
│  │  WELCOME FLOW L1 (avatar_level1)           │                              │
│  │  ┌──┐ ┌──┐ ┌──┐ ┌──┐ ┌───┐ ┌───┐ ┌───┐ ┌──┐ │                              │
│  │  │E1│→│E2│→│E3│→│E4│→│E5 │→│E6 │→│E7 │→│E8│ │                              │
│  │  │D0│ │D1│ │D3│ │D7│ │D10│ │D14│ │D17│ │D21│ │                              │
│  │  └──┘ └──┘ └──┘ └──┘ └───┘ └───┘ └───┘ └──┘ │                              │
│  │  Filter: Placed Order 0 times                  │                              │
│  └────────────────────────────────────────────────┘                              │
│           │                                                                      │
│  ┌────────────────────────────────────────────────────────────────────┐          │
│  │  Condition split: Has customer placed order since starting flow?   │          │
│  └────────────────────────────┬───────────────────────────────────────┘          │
│                              │                                                  │
│                     YES ─────┴──── NO                                           │
│                       │              │                                          │
│                       v              v                                          │
│                 (EXIT FLOW)   CONTINUE TO E2                                    │
│                                                                                 │
│  ┌────────────────────────────────────────────────────────┐                    │
│  │  AT END OF FLOW (after E8 or purchase):                  │                    │
│  │  → Add tag: welcome_completed                             │                    │
│  │  → If NO purchase: add tag: welcome_completed_no_purchase│                    │
│  │  → Set profile: welcome_flow_completed = true            │                    │
│  └────────────────────────────────────────────────────────┘                    │
│                                                                               │
│  NOTE: Create 4 separate Klaviyo flows (L1, L2, L3, GF) —                     │
│  each with identical architecture but different content.                       │
│  DO NOT use conditional splits to handle level variants in one flow —         │
│  4 separate flows keeps each variant clean and maintainable.                   │
│                                                                               │
└─────────────────────────────────────────────────────────────────────────────┘
```

#### Discount Code

| Setting | Value |
|---------|-------|
| **Code** | `WELCOME10` (consensus across ALL architecture layers) |
| **Auto-Apply URL** | `https://www.brightkidco.com/discount/10%25OFF-WELCOME` |
| **Display in** | Popup Step 2 + Welcome Email E1 |
| **Discount** | 10% off first order |
| **Validity** | 7 days from signup |
| **Usage** | 1 per customer |

---

### 10.3 FLOW 02: Cart Abandonment Flow

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                  CART ABANDONMENT FLOW (3 emails, cross-level)               │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│  [Trigger: Added to Cart event + No purchase in 24h]                         │
│           │                                                                   │
│           v                                                                   │
│  ┌────────────────────────────────────────────────────────────┐              │
│  │  E1   │  Timer: +1 hour from abandon    │                   │              │
│  │       │  Goal: Mechanism reminder + reassurance             │              │
│  │       │  Content: "It's not the method, it's a sensory gap" │              │
│  │       │  CTA: See your cart → checkout                      │              │
│  └────────────────────────────────────────────────────────────┘              │
│           │                                                                   │
│           v                                                                   │
│  ┌────────────────────────────────────────────────────────────┐              │
│  │  E2   │  Timer: +24 hours from abandon   │                   │              │
│  │       │  Goal: Social proof + stories                       │              │
│  │       │  Content: Peer testimonials + product value          │              │
│  │       │  CTA: Finish your order                              │              │
│  └────────────────────────────────────────────────────────────┘              │
│           │                                                                   │
│           v                                                                   │
│  ┌────────────────────────────────────────────────────────────┐              │
│  │  E3   │  Timer: +72 hours from abandon   │                   │              │
│  │       │  Goal: 60-day guarantee + permission                 │              │
│  │       │  Content: Risk reversal + "If today isn't right"     │              │
│  │       │  CTA: Shop with confidence                           │              │
│  └────────────────────────────────────────────────────────────┘              │
│                                                                               │
│  Flow filters: Placed Order 0 times | Not in this flow last 10 days          │
│  Segmentation: Cross-level (DOC 5) always — even if avatar tag known         │
│  Exit conditions: Made a purchase, Unsubscribed                              │
│                                                                               │
└─────────────────────────────────────────────────────────────────────────────┘
```

#### Cart Recovery Dynamic Content

| Cart Contents | Upsell Strategy |
|---------------|-----------------|
| 1 Pair in cart | Upsell to 3+3: "Most parents find 3 pairs is the sweet spot" |
| 3+3 in cart | Reminder + Free Shipping emphasis |
| 5+5 in cart | Total value: "$119.99 vs $34.99 × 10 pairs = $349.90" |

---

### 10.4 FLOW 03: Checkout Abandonment Flow

| Property | Value |
|----------|-------|
| **Trigger** | Started Checkout → No purchase in 1 hour |
| **Emails** | 2 |
| **Timing** | E1 at +1h, E2 at +24h |
| **Segmentation** | Cross-level (DOC 5) |
| **Flow filter** | Placed Order 0 times since starting |

**Email sequence:**
- **E1 (+1h):** Friendly reminder + answer last doubts. "If today isn't right, that's a real answer."
- **E2 (+24h):** Final nudge with 60-day guarantee. "You decide — no pressure."

---

### 10.5 FLOW 04: Browse Abandonment Flow

| Property | Value |
|----------|-------|
| **Trigger** | Viewed Product → No cart in 24h |
| **Emails** | 3 (+2 optional) |
| **Timing** | E1 at 1-2h, E2 at Day 1, E3 at Day 2 |
| **Segmentation** | Cross-level (DOC 5) |

**Email sequence:**
- **E1 (1-2h):** "See something you liked?" + dynamic product block
- **E2 (Day 1):** Trust building — risk reversals (guarantee, shipping, refunds), recommended products
- **E3 (Day 2):** Social proof — testimonials, review highlights, "16,511 reviews · 4.9★"
- E4 (optional, Day 3): Small discount or incentive
- E5 (optional, Day 4): "Last chance" gentle urgency

---

### 10.6 FLOW 05: Order Confirmation Flow

| Property | Value |
|----------|-------|
| **Trigger** | Order Placed (Shopify → Klaviyo) |
| **Emails** | 1 (with cross-sell block) |
| **Timing** | Immediate |
| **Segmentation** | Cross-level (DOC 5) |

**Content:** Thank you + order details + delivery estimate (10 days standard) + soft cross-sell block (Wash Bag, Mattress Protector) + set expectations for what's coming

---

### 10.7 FLOW 06: Shipping Notification Flow

| Property | Value |
|----------|-------|
| **Trigger** | Order Fulfilled |
| **Emails** | 1 |
| **Timing** | When order ships |
| **Segmentation** | Cross-level (DOC 5) |

**Content:** Tracking information + delivery expectations (10 days) + "What to expect" anticipation builder

---

### 10.8 FLOW 07: Out for Delivery Flow

| Property | Value |
|----------|-------|
| **Trigger** | Carrier update "Out for Delivery" |
| **Emails** | 1 (optional) |
| **Timing** | When carrier reports out for delivery |
| **Segmentation** | Cross-level (DOC 5) |

**Content:** Build anticipation + prep tips: "Open the box together — let your kid touch it first"

---

### 10.9 FLOW 08: Arrived & Welcome Flow

| Property | Value |
|----------|-------|
| **Trigger** | Carrier update "Delivered" |
| **Emails** | 1 (with massive upsell block) |
| **Timing** | When carrier reports delivered |
| **Segmentation** | Cross-level (DOC 5) |

**Content:** Welcome to the family + sensory prep tips + massive upsell block + set realistic Week-1 expectations

---

### 10.10 FLOW 09: Post-Purchase Direct Upsell Flow

| Property | Value |
|----------|-------|
| **Trigger** | Order Placed + Day 1-3 |
| **Emails** | 2 |
| **Timing** | E1 at Day 1, E2 at Day 3 |
| **Segmentation** | Cross-level (DOC 5) |

| Email | Timing | Product | Social Proof |
|-------|--------|---------|--------------|
| E1 | Day 1 | Wash Bag | "73% of parents add these" |
| E2 | Day 3 | Mattress Protector | "Makes nighttime training easier" |

---

### 10.11 FLOW 10: Post-Purchase Level-Detection Mail

```
┌─────────────────────────────────────────────────────────────────────────────┐
│              POST-PURCHASE LEVEL-DETECTION (GF migration)                    │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│  [Trigger: Order Placed + Day 14 + avatar_level = "general"]                 │
│           │                                                                   │
│           v                                                                   │
│  ┌────────────────────────────────────────────────────────────┐              │
│  │  Single email with 4 selection buttons:                     │              │
│  │                                                              │              │
│  │  ┌──────────────────────────────────────────────────────┐  │              │
│  │  │  Subject: "Quick question about your kid"             │  │              │
│  │  │                                                       │  │              │
│  │  │  [Button 1] → "Talks about potty but won't use it"   │  │              │
│  │  │              → Sets avatar_level1, routes to L1 flows │  │              │
│  │  │                                                       │  │              │
│  │  │  [Button 2] → "Sensory issues, tried many methods"   │  │              │
│  │  │              → Sets avatar_level2, routes to L2 flows │  │              │
│  │  │                                                       │  │              │
│  │  │  [Button 3] → "Non-verbal or high support needs"     │  │              │
│  │  │              → Sets avatar_level3, routes to L3 flows │  │              │
│  │  │                                                       │  │              │
│  │  │  [Button 4] → "Still figuring it out"                │  │              │
│  │  │              → Stays avatar_general (no change)       │  │              │
│  │  └──────────────────────────────────────────────────────┘  │              │
│  └────────────────────────────────────────────────────────────┘              │
│           │                                                                   │
│           v                                                                   │
│  ╔═══════════════════════════════════════════════════════════════╗           │
│  ║  EXPECTED PERFORMANCE:                                        ║           │
│  ║  • Open rate: 65-75%                                          ║           │
│  ║  • Click rate: 35-50%                                         ║           │
│  ║  • Migration rate: 40-50% (of GF purchasers)                  ║           │
│  ║  • Fallback: No click → stays avatar_general permanently      ║           │
│  ╚═══════════════════════════════════════════════════════════════╝           │
│                                                                               │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 11. PHASE 2: HIGH-VALUE FLOWS (Months 3-4)

### 11.1 Phase 2 Implementation Priority

| Priority | Flow | Trigger |
|----------|------|---------|
| 1 | Browse Abandonment | Viewed Product, no cart |
| 2 | PP-Mary S. Story | Order Placed + Day 3 |
| 3 | PP-Education Day 0-21 | Order Placed |
| 4 | Review Request | Day 30 post-purchase |
| 5 | PP-Extended Upsell | Day 28 + level tag |
| 6 | PP-Mid Check-In | Day 30-60 |
| 7 | Replenishment A/B/C | Pack-size + Day 14/75/150 |
| 8 | Winback Path A | Last purchase + 90d inactive |

### 11.2 FLOW 11: Post-Purchase Mary S. Story Flow

| Property | Value |
|----------|-------|
| **Trigger** | Order Placed + Day 3 |
| **Emails** | 1 |
| **Segmentation** | Cross-level (DOC 5) |
| **Voice** | Mary S. (Founder) — NOT Lena |

**CRITICAL:** Mary S. does NOT appear in any other flow. This is the ONLY place founder voice appears. All other emails use Lena voice.

### 11.3 FLOW 12: Post-Purchase Education Day 0-21 Flow

| Property | Value |
|----------|-------|
| **Trigger** | Order Placed |
| **Emails** | 4 |
| **Timing** | Days 0-21 post-purchase |
| **Segmentation** | Cross-level (DOC 5) |

**Emotional state journey:**
- **Day 0-7:** Hoping, observing, vulnerable → Set realistic Week-1 expectations
- **Day 7-21:** Some progress or frustration → Mini-wins acknowledgment, troubleshooting

**Content arc:**
1. "Here's what to expect this week" (expectation setting)
2. "Week 1 plateau is real. Hold the line." (patience coaching)
3. Mini-wins celebration ("Look at the wet spot for the first time")
4. Troubleshooting + "It's normal" reassurance

### 11.4 FLOW 13: Post-Purchase Extended Upsell Flow

| Property | Value |
|----------|-------|
| **Trigger** | Day 28 + level tag |
| **Emails** | 3 |
| **Segmentation** | Level-aware content |

### 11.5 FLOW 14: Post-Purchase Mid Check-In Flow

| Property | Value |
|----------|-------|
| **Trigger** | Day 30-60 |
| **Emails** | 3 |
| **Segmentation** | Cross-level (DOC 5) |

**Purpose:** Check in on customer progress, provide coaching, celebrate mini-wins, prevent refund.

### 11.6 FLOW 15-17: Replenishment Paths A/B/C

#### Replenishment A (1-Pair Buyer)

| Property | Value |
|----------|-------|
| **Trigger** | 1-pair order + Day 14 |
| **Emails** | 3 |
| **Segmentation** | Cross-level (DOC 5) |
| **Upgrade Path** | 1-Pair → 3+3 Bundle |
| **Purpose** | Upgrade before the first pair wears out |

#### Replenishment B (3+3 Buyer)

| Property | Value |
|----------|-------|
| **Trigger** | 3+3 order + Day 75 |
| **Emails** | 2 |
| **Segmentation** | Cross-level (DOC 5) |
| **Upgrade Path** | 3+3 → 5+5 Bundle |

#### Replenishment C (5+5 Buyer)

| Property | Value |
|----------|-------|
| **Trigger** | 5+5 order + Day 150 |
| **Emails** | 2 |
| **Segmentation** | Cross-level (DOC 5) |

### 11.7 FLOW 20: Review Request Flow

| Property | Value |
|----------|-------|
| **Trigger** | Day 30 post-purchase |
| **Emails** | 2 |
| **Segmentation** | Cross-level (DOC 5) |

### 11.8 FLOW 21: Winback Path A (Post-Buyer Inactive) — Level-Specific

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                   WINBACK PATH A — POST-BUYER INACTIVE (90 days)              ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  [Trigger: Last purchase + 90 days no engagement]                            ║
║                                                                              ║
║  ┌──────────────────────────────────────────────────────────────────────┐   ║
║  │  E1 (Day 0): "It's Been Awhile"                                       │   ║
║  │  Brand reminder, product highlights, "How are you doing?"             │   ║
║  └──────────────────────────────────────────────────────────────────────┘   ║
║                            │                                                ║
║                            v                                                ║
║  ┌──────────────────────────────────────────────────────────────────────┐   ║
║  │  E2 (Day 7): Discount Open                                            │   ║
║  │  Exclusive offer for returning customers, level-specific messaging    │   ║
║  └──────────────────────────────────────────────────────────────────────┘   ║
║                            │                                                ║
║                            v                                                ║
║  ┌──────────────────────────────────────────────────────────────────────┐   ║
║  │  E3 (Day 14): Text-Based Closer                                       │   ║
║  │  Personal note, "Whichever path you take", support offer              │   ║
║  └──────────────────────────────────────────────────────────────────────┘   ║
║                                                                              ║
║  Segmentation: 4 level variants × 3 emails = 12 total                       ║
║  Key insight: Text-based emails from Lena consistently perform best         ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

---

## 12. PHASE 3: NICE-TO-HAVE FLOWS (Months 5-6)

### 12.1 Phase 3 Implementation Priority

| Priority | Flow | Trigger |
|----------|------|---------|
| 1 | PP-Extended Education (×4 levels) | Level tag + Day 22 |
| 2 | PP-Support At-Risk | Day 3-7 no opens |
| 3 | Winback Path B (×4 levels) | Signup + 60d no purchase |
| 4 | Sunset | 120 days inactive |
| 5 | FAQ/Objection Library | Welcome end + no purchase |
| 6 | Referral Flow | Day 30 + positive engagement |

### 12.2 FLOW 22: Post-Purchase Extended Education (Level-Specific)

| Property | Value |
|----------|-------|
| **Trigger** | Level tag activated + Day 22 after purchase |
| **Emails** | 5 per level variant = 20 total |
| **Segmentation** | 4 level variants |

**Level-specific content focus:**

| Level | Focus |
|-------|-------|
| Level 1 | Pre-K readiness, gentle progress tracking, "almost there" coaching |
| Level 2 | Sensory mechanism deep-dive, BCBA complementary approach, Kelly Mahler interoception |
| Level 3 | Dignity-first education, late-trainer stories, patience framing |
| General | Cross-level education, migration anchors embedded |

### 12.3 FLOW 23: Post-Purchase Support At-Risk Flow

| Property | Value |
|----------|-------|
| **Trigger** | Day 3-7 no opens |
| **Emails** | 4 |
| **Segmentation** | Cross-level (DOC 5) |

**Purpose:** Re-engage customers who stopped opening emails. Prevent silent churn.

### 12.4 FLOW 24: Winback Path B (Subscriber Never-Bought) — Level-Specific

| Property | Value |
|----------|-------|
| **Trigger** | Signup + 60 days no purchase |
| **Emails** | 3 per level variant = 12 total |
| **Segmentation** | 4 level variants |

**Email sequence:**
- E1 (Day 0): "We miss you" — brand reminder, what's new
- E2 (Day 7): Discount or offer to re-engage
- E3 (Day 14): Final personal outreach, support offer

### 12.5 FLOW 25: Sunset Flow

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                        SUNSET FLOW (120 days inactive)                        ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  [Trigger: 120 days with NO opens AND NO clicks]                             ║
║                                                                              ║
║  ┌──────────────────────────────────────────────────────────────────────┐   ║
║  │  E1 (Day 0): "Update your preferences"                                │   ║
║  │  → Stay subscribed OR update frequency (link)                         │   ║
║  │  OR → Unsubscribe (link)                                              │   ║
║  └──────────────────────────────────────────────────────────────────────┘   ║
║                            │                                                ║
║                            v                                                ║
║  ┌──────────────────────────────────────────────────────────────────────┐   ║
║  │  E2 (Day 3): "Is this goodbye?"                                       │   ║
║  │  → Final confirmation. "We'll miss you." link to stay                 │   ║
║  │  → If no action → suppress profile at Day 8                          │   ║
║  └──────────────────────────────────────────────────────────────────────┘   ║
║                                                                              ║
║  POST-FLOW ACTIONS:                                                         ║
║  • Set profile: suppressed = true                                          ║
║  • Add to suppression list                                                  ║
║  • Suppress for 6-12 months (not permanently)                               ║
║  • Re-enable if subscriber re-engages via another channel                   ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

### 12.6 FLOW 26: FAQ/Objection Library Flow

| Property | Value |
|----------|-------|
| **Trigger** | Welcome flow end + no purchase |
| **Emails** | 6 |
| **Segmentation** | Cross-level (DOC 5) |

**Objection Map (6 emails addressing top objections):**

| Email | Objection | Focus |
|-------|-----------|-------|
| E1 | D1: "I've tried everything. Why would this be different?" | Mechanism specificity — sensory gap, not method |
| E2 | D2/D3: "Maybe I'm the problem / What if I get my hopes up?" | Validation + 60-day guarantee |
| E3 | C1/C2: "Never heard of this brand / Need proof" | 16,511 reviews, 100K+ parents, social proof |
| E4 | D4: "He's too old/severe for any product to help" | Late-trainer stories (Maureen Bennie, 9.5 years) |
| E5 | B1/B2: "Tried underwear / My BCBA has a protocol" | Mechanism difference (sensory, not behavioral) + "Complements BCBA" |
| E6 | All remaining: C3, B3, B4 | Math reframe ($657-1095/year on pull-ups) + closing CTA |

### 12.7 FLOW 27: Referral Flow

| Property | Value |
|----------|-------|
| **Trigger** | Day 30 post-purchase + positive engagement |
| **Emails** | 3 |
| **Segmentation** | Cross-level (DOC 5) |

**Purpose:** Leverage satisfied customers for referrals. "Share with a friend" incentives.

---

## 13. CROSS-FLOW SUPPRESSION & PRIORITY

### 13.1 Flow Priority Chain

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                      FLOW PRIORITY & SUPPRESSION CHAIN                        ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║         HIGHEST ──→  SUNSET FLOW                                             ║
║         PRIORITY      │                                                       ║
║                       │ Suppresses ALL other flows unconditionally           ║
║                       │ Tag: inactive_120_days → Master Suppression List     ║
║                       ▼                                                       ║
║                    WINBACK (Path A or B)                                      ║
║                       │                                                       ║
║                       │ Pauses ALL nurture flows while active                 ║
║                       │ Overrides Welcome, PP-Education, Replenishment        ║
║                       ▼                                                       ║
║                    PP-LEVEL DETECTION (Day 14)                                ║
║                       │                                                       ║
║                       │ Takes priority over ALL other Day 14 content          ║
║                       │ (Welcome E6, PP-Education, Replenishment)             ║
║                       ▼                                                       ║
║                    CART ABANDONMENT                                            ║
║                       │                                                       ║
║                       │ Suppresses Welcome FLOW during active cart            ║
║                       │ ⚠ Exception: If Welcome E1-E2 already sent,          ║
║                       │   they remain delivered. E3+ suppressed until         ║
║                       │   cart is recovered or expires.                       ║
║                       ▼                                                       ║
║                    ALL OTHER FLOWS                                             ║
║                       │                                                       ║
║                       │ Normal operation — no cross-suppression               ║
║                       │ One flow at a time per subscriber                     ║
║          LOWEST ────┘                                                         ║
║                                                                              ║
║  ADDITIONAL RULES:                                                           ║
║  • Cart Abandonment does NOT suppress Welcome E1-E2 if already sent         ║
║  • PP-Level Detection fires ONCE at Day 14 for GF subscribers               ║
║  • Winback pauses nurture but allows transactional emails                    ║
║  • Sunset = permanent exit — subscriber cannot re-enter any flow            ║
║  • Never double-saturate: max 1 flow email per subscriber per day           ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

### 13.2 Universal Exit Conditions (Every Flow)

| Exit Condition | Applies To |
|---------------|------------|
| Made a purchase | Conversion flows (Cart, Checkout, Browse) |
| Unsubscribed | ALL flows — immediately exit |
| Already in a higher-priority flow | All overlapping flows (use priority chain above) |

---

## 14. DOMAIN WARMING PROTOCOL

### 14.1 Current Status

**Authentication: COMPLETE ✅ | Warming: NOT STARTED ⚠️**

Domain warming is a prerequisite before sending promotional emails. The sending domain `send.brightkidco.com` must be gradually warmed over 6 weeks to build reputation with email providers (Gmail, Outlook, Yahoo).

### 14.2 6-Week Warming Protocol

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                      6-WEEK DOMAIN WARMING PROTOCOL                           ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  WEEK  │ VOLUME   │ ACTIVE FLOWS                  │ CONTENT RESTRICTIONS     ║
║ ───────┼─────────┼───────────────────────────────┼───────────────────────── ║
║  1-2   │ 100-500  │ Welcome (all 4 variants)      │ NO promotional content   ║
║        │ /day     │ Transactional (Order,         │ Transactional cloak      ║
║        │          │   Shipping, Arrived)           │ required in every email  ║
║        │          │ Browse Abandonment (E1 only)  │ No urgency tactics       ║
║ ───────┼─────────┼───────────────────────────────┼───────────────────────── ║
║  3-4   │ 500-2K   │ + PP-Level Detection          │ Soft promotional OK      ║
║        │ /day     │ + Cart/Checkout Abandonment   │ Mild urgency allowed     ║
║        │          │ + PP-Direct Upsell             │                          ║
║ ───────┼─────────┼───────────────────────────────┼───────────────────────── ║
║  5-6   │ 2-5K     │ + One flow at a time          │ Full content OK          ║
║        │ /day     │   (48-72h monitoring each)    │ Monitor bounces/spam     ║
║ ───────┼─────────┼───────────────────────────────┼───────────────────────── ║
║  7+    │ FULL     │ All 25 flows                  │ No restrictions          ║
║                                                                              ║
║  CRITICAL: Do NOT activate all 9 Phase 1 flows simultaneously on a cold     ║
║  domain. Follow the week-by-week ramp above.                                ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

### 14.3 Pre-Warming Checklist

| Item | Status |
|------|--------|
| ZeroBounce list verification | ☐ |
| Google Postmaster Tools setup | ☐ |
| 7 engagement segments built | ☐ |
| Bot detection segments built | ☐ |
| Transactional Cloak in every template | ☐ |
| DMARC at `p=none` | ✅ Complete |
| SPF/DKIM verified | ✅ Complete |
| Custom tracking domain verified | ☐ |

---

## 15. DELIVERABILITY & COMPLIANCE

### 15.1 Transactional Cloak Requirement

Every BrightKidCo email MUST include a "Transactional Cloak" — a hidden text block that contains genuine transactional/unsubscribe information, improving inbox placement.

**Implementation:**
- 300-400 words of hidden text (white-on-white or zero-height div)
- Content: company address, privacy policy summary, preference options, legal info
- Must be unique per email (not identical in every mail)
- Place in the email footer, below the main content

### 15.2 Footer Requirements

Every email must have a Klaviyo footer block containing:

| Element | Detail |
|---------|--------|
| Unsubscribe link | `{{ unsubscribe }}` — required by CAN-SPAM |
| Manage preferences | `{{ manage_preferences }}` |
| Sender identity | "Lena from BrightKidCo" + support@brightkidco.com |
| Physical address | Company address (verified before deploying) |
| Social links | Instagram + TikTok (NO Facebook — forbidden per brand guidelines) |

### 15.3 Compliance Notes

| Regulation | Requirement | BKC Status |
|------------|------------|:----------:|
| CAN-SPAM | Physical address in every email, clear unsubscribe, opt-in consent | Required |
| GDPR (UK/EU ~15% audience) | Explicit consent checkbox, data processing notice, right to erasure | Required for UK/EU signups |
| CASL (Canada ~5% audience) | Express consent, clear sender ID, unsubscribe within 2 business days | Required for CA signups |

---

## 16. REPORTING & MONITORING

### 16.1 Weekly Quick-Check Dashboard

Build a Klaviyo dashboard with the following metrics checked weekly:

| Metric | Target | Warning | Critical |
|--------|:-----:|:-------:|:--------:|
| Last campaign open rate | > 30% | < 25% | < 20% |
| Last campaign click rate | > 3% | < 2% | < 1% |
| Bounce rate | < 0.5% | 0.5-1% | > 1% |
| Spam complaint rate | < 0.01% | 0.01-0.05% | > 0.05% |
| Unengaged 180+ Days | < 20% | 20-30% | > 30% |
| Sunset flow active? | YES | — | NO |
| Monthly net growth | > 1% | 0-1% | Negative |

### 16.2 Flow-Specific KPIs

```
FLOW                    │ PRIMARY KPI            │ SECONDARY KPI
────────────────────────┼────────────────────────┼─────────────────────────────
Welcome L1              │ Conversion rate 15-25%  │ Open rate > 40%
Welcome L2              │ Conversion rate 8-15%   │ Mechanism engagement > 30%
Welcome L3              │ Conversion rate 4-8%    │ Reply rate > 5%
Cart Abandonment        │ Recovery rate 5-15%     │ E1 open > 45%
Checkout Abandonment    │ Recovery rate 5-20%     │ E1 open > 50%
Browse Abandonment      │ Cart creation 3-10%     │ E1 click > 5%
PP-Level Detection      │ Migration rate 40-50%   │ Open rate > 65%
Replenishment A         │ Conversion rate 5-10%   │ Click rate > 15%
Winback A (L3)          │ Conversion rate 3-5%    │ Reply rate > 3%
FAQ/Objection Library   │ Conversion rate 4-8% L2 │ Total clicks > 10%
```

### 16.3 Growth Targets

| Metric | Target | Notes |
|--------|:------:|-------|
| Monthly list growth | > 2% | Popup is primary acquisition channel |
| Net growth | > 1% | Sustainable growth outpacing churn |
| Churn per campaign | < 0.2% unsubscribe rate | Sensitive audience = lower tolerance |
| Spam complaint | < 0.01% | Tone-deaf campaign could spike |

### 16.4 Klaviyo Dashboard Setup

Create the following dashboard widgets:

1. **Email Performance:** Open rate, click rate, revenue (rolling 30 days)
2. **List Growth:** New subscribers, unsubscribes, net growth
3. **Flow Revenue:** Revenue attributed to each flow
4. **Segment Sizes:** Avatar level distribution, engagement tiers
5. **Deliverability:** Bounce rate, spam complaints, engagement over time

---

## 17. IMPLEMENTATION CHECKLIST

### Phase 0: Account & Infrastructure

- [ ] Klaviyo account created with admin/manager permissions
- [ ] Private API key generated with correct scopes
- [ ] Sending subdomain verified (send.brightkidco.com)
- [ ] SPF/DKIM/DMARC records verified
- [ ] Custom tracking domain configured (click.brightkidco.com)
- [ ] Google Postmaster Tools set up
- [ ] Shopify-Klaviyo integration connected and verified
- [ ] "Added to Cart" snippet installed in theme.liquid
- [ ] Checkout opt-in checkbox enabled in Shopify

### Phase 1: Properties, Tags & Forms

- [ ] 6 custom profile properties created in Klaviyo
- [ ] All 15 tags created (4 avatar + 6 behavioral + 5 purchase)
- [ ] Pop-up form created with 4 button → tag mappings
- [ ] Pop-up Step 2 configured with WELCOME10 display
- [ ] Frequency cap applied (max 1x per 7 days per visitor)
- [ ] Mobile full-screen variant configured
- [ ] Teaser tab created (post-dismissal fallback)
- [ ] Footer embedded form created (all pages)
- [ ] GDPR consent checkbox added (for UK/EU signups)

### Phase 1: Segments

- [ ] Engaged 90 Days segment
- [ ] Unengaged 180+ Days segment (master suppression)
- [ ] Master Suppression Segment (unsub + bounced + spam + unengaged 180d)
- [ ] Welcome Flow trigger segments (4 variants: L1/L2/L3/GF)
- [ ] Cart/Checkout/Browse abandonment segments
- [ ] First-Time Buyers (30d) segment
- [ ] Lapsed Customers (90d) segment
- [ ] Country segments (US/UK/AU-NZ/Canada)

### Phase 1: Flow Setup

- [ ] Welcome Flow L1 (8 emails)
- [ ] Welcome Flow L2 (8 emails)
- [ ] Welcome Flow L3 (8 emails)
- [ ] Welcome Flow GF (8 emails)
- [ ] Cart Abandonment Flow (3 emails)
- [ ] Checkout Abandonment Flow (2 emails)
- [ ] Order Confirmation Flow (1 email)
- [ ] Shipping Notification Flow (1 email)
- [ ] Arrived & Welcome Flow (1 email)
- [ ] PP-Direct Upsell Flow (2 emails)
- [ ] PP-Level Detection Flow (1 email)
- [ ] Exit conditions set on all flows

### Phase 2: Extended Flows (Months 3-4)

- [ ] Browse Abandonment Flow (3 emails)
- [ ] PP-Mary S. Story Flow (1 email)
- [ ] PP-Education Day 0-21 Flow (4 emails)
- [ ] PP-Extended Upsell Flow (3 emails)
- [ ] PP-Mid Check-In Flow (3 emails)
- [ ] Replenishment Path A (3 emails) — buyer_1pair
- [ ] Replenishment Path B (2 emails) — buyer_3plus3
- [ ] Replenishment Path C (2 emails) — buyer_5plus5
- [ ] Review Request Flow (2 emails)
- [ ] Winback Path A (3 × 4 levels = 12 emails)

### Phase 3: Advanced Flows (Months 5-6)

- [ ] PP-Extended Education — L1 (5 emails)
- [ ] PP-Extended Education — L2 (5 emails)
- [ ] PP-Extended Education — L3 (5 emails)
- [ ] PP-Extended Education — GF (5 emails)
- [ ] PP-Support At-Risk Flow (4 emails)
- [ ] Winback Path B — L1 (3 emails)
- [ ] Winback Path B — L2 (3 emails)
- [ ] Winback Path B — L3 (3 emails)
- [ ] Winback Path B — GF (3 emails)
- [ ] Sunset Flow (2 emails)
- [ ] FAQ/Objection Library Flow (6 emails)
- [ ] Referral Flow (3 emails)

### Ongoing

- [ ] Weekly dashboard review established
- [ ] Domain warming protocol active
- [ ] ZeroBounce list verification scheduled (monthly)
- [ ] Unengaged 180+ days suppression active
- [ ] DMARC upgrade path: p=none → quarantine → reject scheduled
- [ ] RFM properties added (at 500+ customers)
- [ ] Predictive Analytics enabled (at 500+ customers, 12+ months data)

---

## APPENDIX A: BRAND CONSTANTS REFERENCE

### Pricing

| Product | Price | Notes |
|---------|-------|-------|
| 1 Pair | $34.99 | Single pair |
| 3+3 Bundle | $79.99 | BESTSELLER — Buy 3 Get 3 Free, Save 40% |
| 5+5 Bundle | $119.99 | MAXIMUM VALUE — Save 60%, FREE E-Book + Potty Targets + Chart |

### Guarantee

| Constant | Value |
|----------|-------|
| Guarantee period | **60-Day Money Back** (NEVER say 30 days — website currently shows 30, use 60 in emails) |

### Trust Signals

| Constant | Value |
|----------|-------|
| Reviews count | 16,511 (on-site, text-only in emails) |
| Star rating | 4.9 ★ |
| Trust statement | "100,000+ parents trust BrightKidCo" |
| Trustpilot | **DO NOT** include Trustpilot links (docs say no — use text-only review count) |

### Sender Configuration

| Constant | Value |
|----------|-------|
| From Name | "Lena from BrightKidCo" |
| From Email | support@brightkidco.com |
| Reply-To | support@brightkidco.com |
| Sending subdomain | send.brightkidco.com |

### Font & Colors

| Element | Value |
|---------|-------|
| Font | Questrial (weight 400 only) |
| Brand Green | #039902 |
| Mint | #DBFFCD |
| Cream | #FBF7EB |
| Yellow | #F5C84B |
| Gray | #9AA8A7 |
| Dark Text | #1A1A1A |
| Body Gray | #4A4A4A |
| Off-White BG | #FAF9F7 |

### URLs

| Page | URL |
|------|-----|
| Homepage | https://www.brightkidco.com |
| Autistic PDP | /products/potty-training-underwear-for-sensory-sensitive-toddlers-[...] |
| Standard PDP | /products/potty-training-underwear |
| Parent Stories | /pages/real-parent-stories |
| FAQ | /pages/faq |
| Contact | /pages/contact |

### Social (in emails)

| Platform | Status |
|----------|--------|
| Instagram | ✅ Include: instagram.com/brightkidco_official |
| TikTok | ✅ Include: tiktok.com/@brightkidco.com |
| Facebook | ❌ NEVER include — forbidden per brand guidelines |

### Bundle Writing Rules

| Rule | Correct | Wrong |
|------|---------|-------|
| Bundle notation | `3 + 3 FREE` (spaces around +) | `3+3 FREE`, `3&3 FREE` |
| FREE capitalization | FREE Shipping, FREE E-Book | free shipping |
| Currency | $34.99 | 34.99$, USD 34.99 |

---

## APPENDIX B: EMAIL DELIVERABLE TEMPLATE (FOR COPY HANDOFF)

Every email copy written for Klaviyo deployment must follow this structured format (from Layer 33):

```
Mail: [Flow Name] - Mail [Number]
Avatar: [Level 1 / Level 2 / Level 3 / General]
Send Timing: Day [X] / Hour [Y]

SUBJECT LINES (A/B Test Ready):
A: [Subject Option A — max 60 chars]
B: [Subject Option B — max 60 chars]
C: [Subject Option C — max 60 chars]

PREHEADERS (A/B Test Ready):
A: [Preheader — max 90 chars]
B: [Preheader — max 90 chars]
C: [Preheader — max 90 chars]

MAIL BODY:
1. Hook (2-4 seconds)
2. Validation (2-5 seconds)
3. Mechanism/Information
4. Social Proof / Testimonial
5. Product / CTA
6. Guarantee / Risk Reversal
7. Lena Sign-Off (max 2-3 sentences)
8. P.S. (max 2 lines)

LENA SIGN-OFF:
[Choose: SHORT | MEDIUM | LONG variant]

KLAVIYO IMPLEMENTATION NOTES:
- Dynamic blocks needed
- Conditional content
- Tags to set
- Filters required
```

---

*End of Klaviyo Implementation Guide. This document serves as the single source of truth for building BrightKidCo's complete email infrastructure in Klaviyo. All 25 flows, 15 tags, 6+ custom properties, 20+ segments, and 3 pop-up forms are defined above with Klaviyo-specific syntax and implementation steps. A Klaviyo specialist should need no external questions to build the entire system from this document.*
