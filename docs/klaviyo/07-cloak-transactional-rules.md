# Cloak Deployment Matrix & Transactional Rules

**Document:** 07-cloak-transactional-rules.md
**Source:** Giuliano-Demands.md Section 26 (Deliverability Prerequisites) + Section 32 (Deliverability & Sending Rules)
**Scope:** Complete per-flow cloak assignments + transactional email rules for BrightKidCo Klaviyo deployment
**Version:** 1.0 — 2026-05-26

---

## 1. Cloak Types Overview

Klaviyo supports two email cloaks that protect deliverability by routing through trusted sending infrastructure:

| Cloak | Purpose | When Used |
|-------|---------|-----------|
| **Transactional Cloak** | Routes via transactional sending infrastructure (higher reputation, faster throughput). Required on every email per Giuliano-Demands §26. | ALL emails |
| **Conversational Cloak** | Routes via conversational/interactive sending path. Used for high-spam-risk first-touch emails (cold outreach, re-engagement, first welcome). | Specific flows only (first touch + winback) |

**Why two cloaks?** Google's 2024 bulk sender guidelines penalize promotional-looking email sent through transactional pathways. Conversational cloaks signal "wanted conversation" to inbox providers. Using the right cloak on the right email prevents reputation fragmentation and maintains CAN-SPAM transactional exemption.

### CAN-SPAM Transactional Exemption Reference

Under CAN-SPAM, a "transactional or relationship message" is exempt from most requirements (opt-out, subject line truthfulness, physical address) IF its primary purpose is:

- Facilitating a completed or agreed-upon transaction
- Providing warranty, recall, safety, or security information
- Notifying about a change in terms/features/account balance
- Subscription-related information about membership/account/loan

**Rule:** If ANY promotional content (cross-sells, upsells, marketing banners, discount codes) is added to a transactional email, the CAN-SPAM transactional exemption is voided and the email becomes a commercial message. Per Giuliano-Demands §32: *"NO promotional content (cross-sells, upsells, marketing banners) — voids CAN-SPAM transactional exemption."*

---

## 2. Complete Cloak Deployment Matrix

Per Giuliano-Demands §32, every email gets a **Transactional Cloak**. Conversational Cloak is assigned per the matrix below. This matrix covers ALL 25+ flows across all phases (77 unique emails total).

### 2.1 Level-Specific Flows (76 emails × 4 levels)

| Flow | Transactional Cloak | Conversational Cloak | Rationale |
|------|-------------------|---------------------|-----------|
| **Welcome E1** | YES | YES | First touch — highest spam risk. Conversational cloak signals wanted relationship. |
| **Welcome E2** | YES | NO | Subscriber already opened E1 (or should be gated). Subsequent welcome emails are expected. |
| **Welcome E3** | YES | NO | Expected sequence continuation. |
| **Welcome E4** | YES | NO | Educational content — low spam risk. |
| **Welcome E5** | YES | NO | Expected sequence continuation. |
| **Welcome E6** | YES | NO | Social proof — subscriber is engaged. |
| **Welcome E7** | YES | NO | Objection handling — expected part of sequence. |
| **Welcome E8** | YES | NO | Final welcome — call to action. |
| **PP-Extended Education E1** | YES | NO | Post-purchase — customer already engaged, no conversational cloak needed. |
| **PP-Extended Education E2** | YES | NO | Educational follow-up. |
| **PP-Extended Education E3** | YES | NO | Educational follow-up. |
| **PP-Extended Education E4** | YES | NO | Educational follow-up. |
| **PP-Extended Education E5** | YES | NO | Educational follow-up. |
| **Winback Path A E1** (Customer) | YES | YES | Re-engagement after 90d inactivity — high spam risk. Conversational cloak signals re-engagement. |
| **Winback Path A E2** (Customer) | YES | YES | Per matrix: "Customer Winback (all)" — all winback emails get conversational cloak. |
| **Winback Path A E3** (Customer) | YES | YES | Per matrix: "Customer Winback (all)" — all winback emails get conversational cloak. |
| **Winback Path B E1** (Subscriber) | YES | YES | Re-engagement after 60d no purchase — high spam risk. |
| **Winback Path B E2** (Subscriber) | YES | YES | Per matrix: "Customer Winback (all)" — covers subscriber winback as well. |
| **Winback Path B E3** (Subscriber) | YES | YES | Per matrix: "Customer Winback (all)" — all winback emails get conversational cloak. |

### 2.2 Cross-Level Pre-Purchase Flows

| Flow | Transactional Cloak | Conversational Cloak | Rationale |
|------|-------------------|---------------------|-----------|
| **Cart Abandonment E1** | YES | YES | First touch after cart abandonment — re-engagement needed. High spam risk. |
| **Cart Abandonment E2** | YES | NO | Subsequent follow-up — lower risk. |
| **Cart Abandonment E3** | YES | NO | Final reminder — lower risk. |
| **Checkout Abandonment E1** | YES | YES | First touch after checkout abandonment — critical conversion window. |
| **Checkout Abandonment E2** | YES | NO | Final follow-up — lower risk. |
| **Browse Abandonment E1** | YES | YES | First touch after browse — subscriber may not remember opting in. |
| **Browse Abandonment E2** | YES | NO | Subsequent browse email. |
| **Browse Abandonment E3** | YES | NO | Final browse email. |

### 2.3 Transactional & Post-Purchase Flows

| Flow | Transactional Cloak | Conversational Cloak | Rationale |
|------|-------------------|---------------------|-----------|
| **Order Confirmation** | YES | NO | Pure transactional — CAN-SPAM exempt. Customer expects this email. |
| **Shipping Notification** | YES | NO | Pure transactional — expected notification. |
| **Out for Delivery** | YES | NO | Pure transactional — expected notification. |
| **Arrived & Welcome** | YES | NO | Transactional with upsell block — keep transactional cloak. Conversational not needed (already customer). |
| **PP-Direct Upsell E1** | YES | NO | Post-purchase — customer already has relationship. |
| **PP-Direct Upsell E2** | YES | NO | Post-purchase follow-up. |
| **PP-Level Detection** | YES | NO | Post-purchase Day 14 — customer engaged. |
| **PP-Education Day 0-21 E1** | YES | NO | Post-purchase educational — customer engaged. |
| **PP-Education Day 0-21 E2** | YES | NO | Educational follow-up. |
| **PP-Education Day 0-21 E3** | YES | NO | Educational follow-up. |
| **PP-Education Day 0-21 E4** | YES | NO | Educational follow-up. |
| **PP-Extended Upsell E1** | YES | NO | Post-purchase upsell — customer already engaged. |
| **PP-Extended Upsell E2** | YES | NO | Upsell follow-up. |
| **PP-Extended Upsell E3** | YES | NO | Final upsell. |
| **PP-Mid Check-In Day 30-60 E1** | YES | NO | Post-purchase — customer engaged. |
| **PP-Mid Check-In Day 30-60 E2** | YES | NO | Check-in follow-up. |
| **PP-Mid Check-In Day 30-60 E3** | YES | NO | Final check-in. |
| **PP-Support At-Risk E1** | YES | NO | Support outreach — customer relationship exists. |
| **PP-Support At-Risk E2** | YES | NO | Support follow-up. |
| **PP-Support At-Risk E3** | YES | NO | Support follow-up. |
| **PP-Support At-Risk E4** | YES | NO | Final support outreach. |
| **BP-Mary S. Story** | YES | NO | Brand story — post-purchase, customer relationship exists. |

### 2.4 Lifecycle & Retention Flows

| Flow | Transactional Cloak | Conversational Cloak | Rationale |
|------|-------------------|---------------------|-----------|
| **Replenishment A E1** (1-Pair Buyer) | YES | NO | Post-purchase replenishment reminder — customer relationship exists. |
| **Replenishment A E2** | YES | NO | Replenishment follow-up. |
| **Replenishment A E3** | YES | NO | Final replenishment reminder. |
| **Replenishment B E1** (3+3 Buyer) | YES | NO | Post-purchase replenishment. |
| **Replenishment B E2** | YES | NO | Replenishment follow-up. |
| **Replenishment C E1** (5+5 Buyer) | YES | NO | Post-purchase replenishment. |
| **Replenishment C E2** | YES | NO | Replenishment follow-up. |
| **Review Request E1** | YES | NO | Post-purchase review ask — customer engaged. |
| **Review Request E2** | YES | NO | Review follow-up. |
| **Referral Flow E1** | YES | NO | Post-purchase referral ask — customer engaged. |
| **Referral Flow E2** | YES | NO | Referral follow-up. |
| **Referral Flow E3** | YES | NO | Final referral ask. |
| **FAQ/Objection Library E1** | YES | NO | Educational — customer relationship exists. |
| **FAQ/Objection Library E2** | YES | NO | FAQ follow-up. |
| **FAQ/Objection Library E3** | YES | NO | FAQ follow-up. |
| **FAQ/Objection Library E4** | YES | NO | FAQ follow-up. |
| **FAQ/Objection Library E5** | YES | NO | FAQ follow-up. |
| **FAQ/Objection Library E6** | YES | NO | Final FAQ email. |
| **Sunset Flow E1** (Re-engagement) | YES | NO | Unengaged outreach — transactional cloak sufficient. |
| **Sunset Flow E2** (Final goodbye) | YES | NO | Final outreach before suppression. |

### 2.5 Campaigns

| Flow | Transactional Cloak | Conversational Cloak | Rationale |
|------|-------------------|---------------------|-----------|
| **All Campaigns** | YES | NO | Promotional one-time sends. Transactional cloak protects deliverability. Conversational not needed for promotional. |

---

## 3. Cloak Implementation Guide for Klaviyo

### 3.1 Enabling Transactional Cloak

In Klaviyo, transactional cloaking is set at the email template level via the **Delivery Settings** tab:

**Steps:**
1. Open email template in Klaviyo editor
2. Navigate to **Settings > Delivery Settings**
3. Under **"Sending Method"**, select **Transactional**
4. Save template

**Klaviyo API approach** (for bulk template creation):

```json
{
  "data": {
    "type": "template",
    "attributes": {
      "name": "welcome-e1-l1",
      "html": "...",
      "editor_type": "code",
      "return_url": "",
      "from_email": "hello@send.brightkidco.com",
      "from_name": "Lena from BrightKidCo",
      "subject": "...",
      "preview_text": "...",
      "is_transactional": true
    }
  }
}
```

Set `is_transactional: true` for ALL templates.

### 3.2 Enabling Conversational Cloak

Conversational cloaking is configured per-flow rather than per-template in Klaviyo Enterprise:

**For flows requiring conversational cloak (Welcome E1, Abandoned Cart E1, Abandoned Checkout E1, Browse Abandonment E1, Winback A/B all):**

1. Navigate to the flow in Klaviyo
2. Click the email step within the flow
3. Go to **Settings > Delivery Settings**
4. Under **"Email Cloaking"**, enable **"Conversational Email Cloaking"**
5. Save

**Note:** Conversational cloaking may require Klaviyo Enterprise plan. If not available, set up a dedicated sending subdomain (`conversations.send.brightkidco.com`) for these emails as a manual alternative.

### 3.3 HTML Snippet — Transactional Email Cloak Tag

Klaviyo automatically handles cloak routing based on the template's delivery settings. However, you should include the following hidden plain-text fallback div in EVERY email for deliverability compliance (per Giuliano-Demands §26):

```html
<!--[if !mso]><!-- -->
<div style="display:none;font-size:1px;color:#ffffff;line-height:1px;max-height:0px;max-width:0px;opacity:0;overflow:hidden;mso-hide:all;">
  __PLAINTEXT_FALLBACK__
</div>
<!--<![endif]-->
```

Where `__PLAINTEXT_FALLBACK__` is a summary of the email content in plain text (2-3 sentences). This helps Google's spam filter classify the email correctly.

### 3.4 CAN-SPAM Compliance Snippet

For all transactional emails (Order Confirmation, Shipping, Out for Delivery, Arrived):

```html
<!-- TRANSACTIONAL EMAIL — CAN-SPAM EXEMPT
  This email contains no promotional content.
  Primary purpose: [ORDER CONFIRMATION / SHIPPING NOTIFICATION / DELIVERY UPDATE]
  To preserve CAN-SPAM transactional exemption, do NOT add:
  - Cross-sell or upsell banners
  - Discount codes or promotional offers
  - Marketing imagery unrelated to the transaction
-->
```

Keep this as an HTML comment in the email source for audit trail purposes.

### 3.5 Complete Per-Template Cloak Configuration Example

**Welcome E1 template configuration:**

```
Template Name: welcome-e1-l1
From Email:    hello@send.brightkidco.com
From Name:     Lena from BrightKidCo
Reply-To:      support@brightkidco.com

Delivery Settings:
  - Sending Method: Transactional (YES)
  - Conversational Email Cloaking: ENABLED

Other Settings:
  - Hidden plain-text fallback div: REQUIRED
  - Table-based layout: YES
  - Max width: 600px
  - Inline CSS: YES
```

**Order Confirmation template configuration:**

```
Template Name: order-confirmation
From Email:    orders@send.brightkidco.com
From Name:     BrightKidCo Orders
Reply-To:      support@brightkidco.com

Delivery Settings:
  - Sending Method: Transactional (YES)
  - Conversational Email Cloaking: DISABLED

Other Settings:
  - NO promotional content (CAN-SPAM exemption preserved)
  - Hidden plain-text fallback div: REQUIRED
  - Table-based layout: YES
  - Max width: 600px
  - Inline CSS: YES
```

---

## 4. Transactional Email Rules

Per Giuliano-Demands §26 (Deliverability Prerequisites) and §32 (Transactional Email Rules).

### 4.1 NO Promotional Content in Transactionals

Transactional emails (Order Confirmation, Shipping Notification, Out for Delivery, Arrived & Welcome, PP-Level Detection) MUST contain ZERO promotional content.

| Content Type | Allowed? | Notes |
|-------------|----------|-------|
| Order details | YES | Items purchased, price, status |
| Shipping info | YES | Tracking number, carrier, delivery estimate |
| Product images of purchased items | YES | Only items customer bought |
| Cross-sell / upsell banners | NO | Voids CAN-SPAM exemption |
| Discount codes | NO | Promotional content |
| Marketing banners | NO | Promotional content |
| "You might also like" | NO | Voids transactional classification |
| Social media links | CONDITIONAL | Allowed in footer if standard across all emails |
| Footer with tagline + links | YES | Standard footer is acceptable |
| Lena sign-off | YES | Brand voice — permitted |

**Penalty for violation:** If a transactional email contains any promotional content, Google reclassifies it as promotional, removing the CAN-SPAM exemption AND hurting the transactional sending reputation.

### 4.2 Hidden Plain-Text Fallback Div

Every email MUST include a hidden plain-text fallback div. This is NOT optional — it's a deliverability requirement per Giuliano-Demands §26.

**Purpose:** Email clients (especially Gmail and Outlook) use the first rendered text in the email to classify it. A hidden text fallback ensures the email is classified correctly even before images load or CSS renders.

**Implementation:**

```html
<!-- Hidden plain-text fallback — REQUIRED on all transactional emails -->
<div style="display:none;font-size:1px;color:#ffffff;line-height:1px;max-height:0px;max-width:0px;opacity:0;overflow:hidden;mso-hide:all;">
  Your BrightKidCo order #[ORDER_NUMBER] has been confirmed.
  Shipping to [ADDRESS]. Estimated delivery: [DATE].
  Track your order: [TRACKING_URL]
</div>
```

**For Welcome/Cart/Checkout emails:**

```html
<!-- Hidden plain-text fallback -->
<div style="display:none;font-size:1px;color:#ffffff;line-height:1px;max-height:0px;max-width:0px;opacity:0;overflow:hidden;mso-hide:all;">
  {{ email_preview_text }}
</div>
```

### 4.3 Table-Based Layout Mandate

All emails MUST use nested `<table>` layout with inline CSS. This is non-negotiable for email client compatibility (per Giuliano-Demands §26):

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>BrightKidCo</title>
</head>
<body style="margin:0;padding:0;background-color:#FBF7F1;font-family:'Questrial',system-ui,sans-serif;-webkit-font-smoothing:antialiased;">
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:#FBF7F1;">
    <tr>
      <td align="center" style="padding:20px 10px;">
        <!--[if mso]><table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600"><tr><td><![endif]-->
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width:600px;background-color:#FFFFFF;border-radius:12px;">
          <!-- EMAIL CONTENT HERE -->
        </table>
        <!--[if mso]></td></tr></table><![endif]-->
      </td>
    </tr>
  </table>
</body>
</html>
```

**Key rules:**
- Max width: 600px (wider containers break in Outlook)
- Table-based layout — no `<div>`-only layouts for email body
- Inline CSS on every element — no `<style>` blocks for primary layout (a small `<style>` block for media queries is acceptable)
- MSO conditional comments for Outlook width constraints

### 4.4 Inline CSS Rules

All styling MUST be inline. A minimal `<style>` block is ONLY permitted for:

```html
<style>
  @media only screen and (max-width:480px) {
    .mobile-full { width:100% !important; }
    .mobile-stack { display:block !important; width:100% !important; }
    .mobile-hide { display:none !important; }
    .mobile-center { text-align:center !important; }
    .mobile-pad { padding:15px !important; }
    .mobile-cta { width:100% !important; display:block !important; }
  }
</style>
```

**DO NOT use `<style>` blocks for:**
- Font families (use inline `style="font-family:..."`)
- Colors (inline)
- Backgrounds (inline)
- Padding and margins (inline)

### 4.5 From Address Configuration

Per Giuliano-Demands §26:

| Type | From Address | From Name |
|------|-------------|-----------|
| Transactional | `orders@send.brightkidco.com` | BrightKidCo Orders |
| Marketing / Flow | `hello@send.brightkidco.com` | Lena from BrightKidCo |
| Reply-to (all) | `support@brightkidco.com` | BrightKidCo Support |

**Implementation in Klaviyo:**

For each template, set:
```
From Email:  hello@send.brightkidco.com   [or orders@ for transactional-only templates]
From Name:   Lena from BrightKidCo        [or BrightKidCo Orders]
Reply-To:    support@brightkidco.com      [ALWAYS this]
```

**Important:** Never set a NO-REPLY address. Reply prompts increase deliverability (Giuliano-Demands §32: *"Reply prompts in EVERY email — replies are #1 deliverability signal"*).

---

## 5. Shopify Integration Notes

### 5.1 Disable Default Shopify Transactional Emails

Shopify sends its own transactional emails by default (order confirmation, shipping notification, etc.). If BrightKidCo also sends these via Klaviyo, customers receive duplicates.

**Steps to disable default Shopify emails:**

1. In Shopify Admin, go to **Settings > Notifications**
2. For each notification type that Klaviyo will handle:
   - **Order confirmation**
   - **Shipping confirmation**
   - **Delivery confirmation**
   - **Out for delivery**
   - Click **"Customize"** then **"Disable"** (or remove email recipients)
3. Alternatively, create an empty notification template that sends nothing

**Kanban note:** This is a one-time setup task on the Shopify side. Create a checklist item for the Shopify administrator.

### 5.2 Shopify → Klaviyo Integration Checklist

| Requirement | Status | Notes |
|-------------|--------|-------|
| Shopify-Klaviyo integration active | Required | Standard integration via Klaviyo Shopify app |
| Order webhook enabled | Required | Triggers order confirmation flow |
| Fulfillment webhook enabled | Required | Triggers shipping notification |
| Customer creation sync | Required | Triggers welcome flow (non-Shopify signups via popup) |
| Abandoned checkout sync | Required | Triggers checkout abandonment flow |
| Product sync enabled | Required | For dynamic product blocks in emails |
| Default Shopify transactional disabled | Required | Prevents duplicate sends |
| `tags` field mapped to Klaviyo | Required | Level tags (`avatar_level1`, `avatar_level2`, `avatar_level3`, `avatar_general`) sync from Shopify |

### 5.3 Klaviyo Template Variables for Shopify

Use Klaviyo's Shopify integration variables for dynamic content:

```html
<!-- Order details -->
{{ shopify_order.order_number }}
{{ shopify_order.created_at }}
{{ shopify_order.financial_status }}
{{ shopify_order.fulfillment_status }}

<!-- Line items -->
{% for item in shopify_order.line_items %}
  {{ item.title }}
  {{ item.quantity }}
  {{ item.price | money }}
  {{ item.image | image_size: '200x' }}
{% endfor %}

<!-- Customer -->
{{ shopify_customer.first_name }}
{{ shopify_customer.email }}
{{ shopify_customer.phone }}

<!-- Shipping -->
{% if shopify_order.shipping_address %}
  {{ shopify_order.shipping_address.city }}
  {{ shopify_order.shipping_address.province }}
  {{ shopify_order.shipping_address.zip }}
{% endif %}

<!-- Tracking -->
{% if shopify_order.fulfillments[0].tracking_company %}
  {{ shopify_order.fulfillments[0].tracking_company }}
  {{ shopify_order.fulfillments[0].tracking_number }}
  {{ shopify_order.fulfillments[0].tracking_url }}
{% endif %}
```

### 5.4 Shopify Transactional Email Variable Mapping

| Klaviyo Template | Shopify Trigger | Key Variables |
|-----------------|-----------------|---------------|
| Order Confirmation | Order created | `shopify_order.order_number`, line items, shipping address, total price |
| Shipping Notification | Fulfillment created | Tracking company, number, URL, line items shipped |
| Out for Delivery | Fulfillment status = in_transit | Tracking info, estimated delivery |
| Arrived & Welcome | Fulfillment status = delivered | Delivery confirmation, upsell block |

---

## 6. Domain Warming & Cloak Deployment Sequence

Per Giuliano-Demands §32 (Domain Warming Content Rules):

### Weeks 1-2 (Warming Phase)

| Flow | Transactional Cloak | Conversational Cloak | Notes |
|------|-------------------|---------------------|-------|
| Welcome E1 | YES | YES | L1-L2 only — NO L3 during warming (Giuliano-Demands §26) |
| Welcome E2-4 | YES | NO | Educational only — NO promotional |
| Browse Abandonment E1 | YES | YES | L1-L2 only |
| Cart Abandonment E1 | YES | YES | L1-L2 only |
| Checkout Abandonment E1 | YES | YES | L1-L2 only |

**Promotional content DURING warming is FORBIDDEN:**
- No discount codes, no percentage-off offers
- No "Buy Now," "Shop Today," "Limited Time"
- No more than one promotional CTA
- No countdown timers, urgency banners, stock alerts
- Maximum 1 CTA per email

**Required during warming:**
- Educational content, best-seller highlights, community content
- Plain-text or lightly formatted preferred
- Reply prompts in EVERY email
- Minimum 60:40 text-to-image ratio
- Lena's peer-to-peer voice

### Week 3-4 (Transition Phase)

| Flow | Transactional Cloak | Conversational Cloak | Notes |
|------|-------------------|---------------------|-------|
| All Week 1-2 flows | YES | Per matrix | Continued |
| Welcome E5-8 | YES | NO | Introduce gentle promotional |
| PP-Education Day 0-21 | YES | NO | Post-purchase — customer engaged |
| Order Confirmation | YES | NO | Transactional — pure |
| Shipping Notification | YES | NO | Transactional — pure |
| Abandoned Cart E2-3 | YES | NO | Follow-ups |

### Week 5-6 (Full Deployment)

All flows active per the complete cloak matrix above.

---

## 7. Deliverability Risk Mitigation

### 7.1 Segregation of Sending Domains

| Domain | Used For | Cloak Type |
|--------|---------|-----------|
| `orders@send.brightkidco.com` | Transactional only (confirmation, shipping) | Transactional |
| `hello@send.brightkidco.com` | Marketing flows + campaigns | Transactional (all) + Conversational (specific flows) |

**Do NOT mix from-addresses during domain warming** (Giuliano-Demands §32: "Adding new from-addresses during warming splits reputation signals"). Use `"Lena from BrightKidCo" <support@send.brightkidco.com>` for ALL emails during Weeks 1-2. `orders@send.brightkidco.com` is also active from Day 1 for transactional emails only (order confirmations, shipping, receipts). `hello@send.brightkidco.com` must NOT be used until post-Week 6. See [05-dns-authentication.md](05-dns-authentication.md) §4 and [06-warming-bot-detection.md](06-warming-bot-detection.md) §3 for the full warming schedule.

### 7.2 Bot Detection & Suppression Integration

Bot-detected profiles (tagged `is_bot = True` via Klaviyo flows) MUST be excluded from ALL sends:

**Flow-level filter:**
```
Person properties: is_bot is not set
```

**Campaign-level filter:**
```
Exclude: is_bot = True
```

**Bot detection segments (from Giuliano-Demands §32):**
- Segment 1 — Known Fake Domains: blocklist of 20+ disposable email domains
- Segment 2 — Non-Engaged Sleepers: received 10+ emails, opened 0, clicked 0

### 7.3 Code Red Protocol (Spam Crisis)

When Google Postmaster reputation is "Bad" (Giuliano-Demands §32):

1. Enable **Double Opt-In** for all new subscribers
2. Switch Welcome Flow to **Two-Step** — gate E2-E8 behind E1 open
3. Add **"Check your spam folder"** messaging on sign-up confirmation pages
4. Send ONLY to **VIP Clickers** segment for 2 weeks
5. Consider **48-72 hour sending pause** for reputation reset

During Code Red, the cloak matrix does not change, but ALL sending volume drops to VIP-only.

---

## Appendix A: Quick-Reference Matrix Table

| Flow | Emails | Tx Cloak | Conv Cloak | Phase |
|------|--------|----------|------------|-------|
| Welcome E1 | 4 | YES | **YES** | 1 |
| Welcome E2-8 | 28 | YES | NO | 1 |
| Cart Abandonment E1 | 1 | YES | **YES** | 1 |
| Cart Abandonment E2-3 | 2 | YES | NO | 1 |
| Checkout Abandonment E1 | 1 | YES | **YES** | 1 |
| Checkout Abandonment E2 | 1 | YES | NO | 1 |
| Browse Abandonment E1 | 1 | YES | **YES** | 1 |
| Browse Abandonment E2-3 | 2 | YES | NO | 1 |
| Order Confirmation | 1 | YES | NO | 1 |
| Shipping Notification | 1 | YES | NO | 1 |
| Out for Delivery | 1 | YES | NO | 1 |
| Arrived & Welcome | 1 | YES | NO | 1 |
| PP-Direct Upsell | 2 | YES | NO | 1 |
| BP-Mary S. Story | 1 | YES | NO | 1 |
| PP-Level Detection | 1 | YES | NO | 1 |
| PP-Education Day 0-21 | 4 | YES | NO | 2 |
| PP-Extended Upsell | 3 | YES | NO | 2 |
| PP-Mid Check-In | 3 | YES | NO | 2 |
| Review Request | 2 | YES | NO | 2 |
| Replenishment A | 3 | YES | NO | 2 |
| Replenishment B | 2 | YES | NO | 2 |
| Replenishment C | 2 | YES | NO | 2 |
| Winback Path A (all) | 12 | YES | **YES** | 2 |
| PP-Extended Education | 20 | YES | NO | 3 |
| Winback Path B (all) | 12 | YES | **YES** | 3 |
| PP-Support At-Risk | 4 | YES | NO | 3 |
| FAQ/Objection Library | 6 | YES | NO | 3 |
| Sunset | 2 | YES | NO | 3 |
| Referral | 3 | YES | NO | 3 |
| All Campaigns | N/A | YES | NO | — |

**Total flows: 30 | Total unique emails: ~110 | All YES on Tx Cloak | 7 flow groups with Conv Cloak**

## Appendix B: Template Variable Syntax Standardization

Per the W6 cross-check findings, all cloaked templates MUST use **Klaviyo double-brace syntax** (`{{ variable }}`) consistently:

| Variable | Correct Syntax | Incorrect Syntax |
|----------|---------------|-----------------|
| Unsubscribe | `{{ unsubscribe_url }}` | `*|UNSUB|*`, `{% unsubscribe %}` |
| Preferences | `{{ preferences_url }}` | `*|UPDATE_PROFILE|*` |
| First Name | `{{ first_name }}` | `{first_name}`, `*|FNAME|*` |
| Logo URL | `{{ logo_url }}` | Hardcoded path, `#` |
| Company Address | `{{ company_address }}` | Hardcoded text |
| Discount Code | `{{ discount_code }}` | `*|DISCOUNT|*` |

## Appendix C: CAN-SPAM Compliance Checklist

Per Giuliano-Demands §32:

- [ ] Transactional emails contain ZERO promotional content
- [ ] No cross-sells, upsells, or marketing banners in transactional emails
- [ ] Hidden plain-text fallback div present in ALL emails
- [ ] Table-based layout with inline CSS throughout
- [ ] Max width 600px enforced
- [ ] Shopify default transactional emails DISABLED
- [ ] Reply-to set to `support@brightkidco.com` on all emails
- [ ] Physical business address in footer (standardized — single address across all emails)
- [ ] Klaviyo template variables use consistent `{{ double_brace }}` syntax
- [ ] Conversational cloak assigned per matrix (not arbitrarily)
