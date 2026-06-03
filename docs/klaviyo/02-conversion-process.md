# S7-I2: HTML → Klaviyo Template Conversion Process

**Part of:** Section 7 — Klaviyo Infrastructure & Template Setup
**Generated:** 2026-05-26
**Source Documents:**
- Giuliano-Demands.md Section 15 (Klaviyo Implementation)
- Giuliano-Demands.md Section 32 (Deliverability & Sending Rules)
- Giuliano-Demands.md Section 26 (Deliverability Prerequisites)
- v1-fix-and-build-plan.md Section 7, Item 2
- Example HTML files: `/root/projects/brightkido-email/outputs/html/`

---

## Table of Contents

1. [Overview](#1-overview)
2. [Klaviyo Variable Reference Quick-Start](#2-klaviyo-variable-reference-quick-start)
3. [Step-by-Step Conversion Process](#3-step-by-step-conversion-process)
   - [Step 1: Classify the Email Type](#step-1-classify-the-email-type)
   - [Step 2: Replace Hardcoded Text with Klaviyo Variables](#step-2-replace-hardcoded-text-with-klaviyo-variables)
   - [Step 3: Add Conditional Blocks for Level-Specific Content](#step-3-add-conditional-blocks-for-level-specific-content)
   - [Step 4: Inject Transactional Cloak Markup](#step-4-inject-transactional-cloak-markup)
   - [Step 5: Inject Conversational Cloak Markup](#step-5-inject-conversational-cloak-markup)
   - [Step 6: Replace Footer with Klaviyo-Compliant Markup](#step-6-replace-footer-with-klaviyo-compliant-markup)
   - [Step 7: Stabilise for Table-Based Layout](#step-7-stabilise-for-table-based-layout)
   - [Step 8: Verify Klaviyo Syntax](#step-8-verify-klaviyo-syntax)
4. [Conversion Checklist](#4-conversion-checklist)
5. [Cloak Markup Reference](#5-cloak-markup-reference)
   - [5.1 Transactional Cloak (Hidden Plain-Text Fallback Div)](#51-transactional-cloak-hidden-plain-text-fallback-div)
   - [5.2 Conversational Cloak](#52-conversational-cloak)
6. [Cloak Deployment Matrix](#6-cloak-deployment-matrix)
7. [Edge Cases & Error Handling](#7-edge-cases--error-handling)
8. [Verification Procedure](#8-verification-procedure)

---

## 1. Overview

Each standalone HTML email produced by Sections 4-5 of the plan needs Klaviyo variables, conditional blocks, transactional cloak markup, and conversational cloak markup injected before it can be used as a Klaviyo template. This document defines a repeatable conversion process that any operator can follow to convert any HTML file consistently.

**Input:** Standalone HTML file from `/root/projects/brightkido-email/outputs/html/`
**Output:** Klaviyo-ready HTML template
**Success:** Template renders correctly in Klaviyo preview, all variables resolve, cloak markup is invisible to end-user but present for deliverability.

---

## 2. Klaviyo Variable Reference Quick-Start

### Personalisation Variables

| Variable | Usage | Fallback | Where to Place |
|----------|-------|----------|----------------|
| `{{ first_name \| default: "there" }}` | Greeting line | "there" | First `<p>` of letter body after "Hi" |
| `{{ last_name }}` | Rare — only in transactional order details | — | Order detail blocks if shown |
| `{{ event.order_number }}` | Order reference number | — | Transactional emails (order # display) |
| `{{ event.order_date }}` | Order placement date | — | Transactional emails (date display) |
| `{{ event.shipping_address }}` | Full shipping address block | — | Order confirmation, shipping notification |
| `{{ event.tracking_url }}` | Tracking link | — | Shipping, Out for Delivery |
| `{{ event.tracking_number }}` | Tracking number string | — | Shipping, Out for Delivery |
| `{{ event.billing_address }}` | Billing address | — | Order confirmation |
| `{{ event.line_items }}` | Ordered items loop | — | Order confirmation details table |

### Unsubscribe & Preferences

| Variable | Placement | Notes |
|----------|-----------|-------|
| `{{ unsubscribe }}` | Footer — first line | Renders as one-click unsubscribe link. Mandatory for ALL marketing emails. |
| `{{ manage_preferences }}` | Footer — second line | Allows subscriber to update frequency/level preferences |
| `{% unsubscribe %}` | Footer — alternative tag | Tag-based syntax (use if `{{ unsubscribe }}` does not render in preview) |

### Organization Variables

| Variable | Usage |
|----------|-------|
| `{{ organization.url }}cart` | Cart recovery link |
| `{{ organization.url }}checkout` | Checkout recovery link |
| `{{ organization.name }}` | "BrightKidCo" |

### From Address Rules (Demands §32)

| Email Type | From Address |
|------------|-------------|
| Transactional | `orders@send.brightkidco.com` |
| Marketing | `hello@send.brightkidco.com` |
| Warming Phase (all) | `support@send.brightkidco.com` (Lena persona) |

---

## 3. Step-by-Step Conversion Process

### Step 1: Classify the Email Type

Determine the email's classification before converting:

**A. Transactional Emails** (Order Confirmation, Shipping, Out for Delivery, Arrived)
- MUST contain a hidden plain-text fallback div (cloak)
- MUST NOT contain promotional content, cross-sells, upsells, or marketing banners
- NO conversational cloak
- Strictly functional — order details, tracking, delivery info
- From address: `orders@send.brightkidco.com`

**B. Marketing Emails** (Welcome, Browse Abandonment, Cart Abandonment, Checkout Abandonment, Winback, Campaigns)
- MUST contain unsubscribe link
- MAY contain conversational cloak per deployment matrix
- Can contain promotional content (within guidelines)
- From address: `hello@send.brightkidco.com`

**C. Cross-Level Emails** (Welcome E1, Browse Abandonment E1, Cart Abandonment E1, Checkout Abandonment E1, Winback all)
- Require additional conditional blocks for level-specific content
- Require calibration rules R1-R6
- Require both transactional and conversational cloak

**D. Level-Specific Emails** (Welcome E2-8 for L1/L2/L3/GF, Extended Education, Winback Path A/B)
- Each file is already level-specific — no level conditionals needed
- Only need Klaviyo variables and standard cloak markup

---

### Step 2: Replace Hardcoded Text with Klaviyo Variables

Scan the HTML file for every hardcoded piece of user-specific or event-specific text and replace it with the corresponding Klaviyo variable.

#### 2a. Greeting Line

**Before:**
```html
<p style="margin: 0 0 14px; font-size: 17px; color: #1F2D2F; font-weight: 600;">
  Hi Sarah,
</p>
```

**After:**
```html
<p style="margin: 0 0 14px; font-size: 17px; color: #1F2D2F; font-weight: 600;">
  Hi {{ first_name | default: "there" }},
</p>
```

#### 2b. Order Reference Number (Transactional Only)

**Before:**
```html
<p style="font-size: 17px; color: #4A6568; margin: 14px 0 0; line-height: 1.4; font-weight: 500;">
  Order #BK-24601 · Placed May 26, 2026
</p>
```

**After:**
```html
<p style="font-size: 17px; color: #4A6568; margin: 14px 0 0; line-height: 1.4; font-weight: 500;">
  Order #{{ event.order_number }} · Placed {{ event.order_date | date: "%B %d, %Y" }}
</p>
```

#### 2c. Shipping Address (Transactional Only)

**Before:**
```html
<div style="margin-top: 16px; padding: 14px 16px; background: #FBF7F1; border-radius: 12px;">
  <div style="font-size: 10.5px; letter-spacing: 1.5px; text-transform: uppercase; color: #1E8A8F; font-weight: 700; margin-bottom: 6px;">
    Shipping to
  </div>
  123 Main Street
  San Francisco, CA 94102
</div>
```

**After:**
```html
<div style="margin-top: 16px; padding: 14px 16px; background: #FBF7F1; border-radius: 12px;">
  <div style="font-size: 10.5px; letter-spacing: 1.5px; text-transform: uppercase; color: #1E8A8F; font-weight: 700; margin-bottom: 6px;">
    Shipping to
  </div>
  {{ event.shipping_address }}
</div>
```

#### 2d. Tracking URL (Shipping / Out for Delivery)

**Before:**
```html
<a href="#" style="font-size: 15px; font-weight: 700; color: #1F2D2F; text-decoration: none;">
  Track My Order &rarr;
</a>
```

**After:**
```html
<a href="{{ event.tracking_url }}" style="font-size: 15px; font-weight: 700; color: #1F2D2F; text-decoration: none;">
  Track My Order &rarr;
</a>
```

#### 2e. Order Details Table (Transactional — Dynamic Data)

The order items table in transactional emails must be wrapped in Klaviyo's `{% for item in event.line_items %}` loop.

**Before:**
```html
<tr>
  <td style="padding: 12px 10px 12px 0;">
    <div style="font-weight: 700; color: #1F2D2F;">Body-Signal Learning Layer Underwear</div>
    <div style="font-size: 12px; color: #4A6568; margin-top: 2px;">3+3 Bundle · Ocean Blue / Sage</div>
  </td>
  <td align="center" style="padding: 12px 10px; color: #4A6568;">1</td>
  <td align="right" style="padding: 12px 0; font-weight: 700;">$79.99</td>
</tr>
```

**After:**
```html
{% for item in event.line_items %}
<tr>
  <td style="padding: 12px 10px 12px 0;">
    <div style="font-weight: 700; color: #1F2D2F;">{{ item.name }}</div>
    <div style="font-size: 12px; color: #4A6568; margin-top: 2px;">{{ item.variant }}</div>
  </td>
  <td align="center" style="padding: 12px 10px; color: #4A6568;">{{ item.quantity }}</td>
  <td align="right" style="padding: 12px 0; font-weight: 700;">{{ item.price }}</td>
</tr>
{% endfor %}
```

Also replace subtotal/total/shipping rows:

```html
<tr>
  <td style="padding: 4px 0;">Subtotal</td>
  <td align="right" style="padding: 4px 0;">{{ event.subtotal }}</td>
</tr>
<tr>
  <td style="padding: 4px 0;">Shipping</td>
  <td align="right" style="padding: 4px 0; color: #5DD07A; font-weight: 600;">{% if event.shipping_total == "0.00" %}Free{% else %}{{ event.shipping_total }}{% endif %}</td>
</tr>
<tr>
  <td style="padding: 4px 0;">Tax</td>
  <td align="right" style="padding: 4px 0;">{{ event.tax_total }}</td>
</tr>
<tr style="border-top: 2px solid #1F2D2F;">
  <td style="padding: 10px 0 4px; font-size: 17px; font-weight: 700; color: #1F2D2F;">Total</td>
  <td align="right" style="padding: 10px 0 4px; font-size: 17px; font-weight: 700; color: #1F2D2F;">{{ event.total }}</td>
</tr>
```

#### 2f. Cart / Checkout Recovery Links

**Before:**
```html
<a href="#" style="...">Return to Cart</a>
```

**After:**
```html
<a href="{{ organization.url }}cart" style="...">Return to Cart</a>
```

Similarly for checkout:
```html
<a href="{{ organization.url }}checkout" style="...">Complete Checkout</a>
```

---

### Step 3: Add Conditional Blocks for Level-Specific Content

Cross-level emails (those that reach ALL segments simultaneously) need conditional blocks to show level-appropriate content.

#### 3a. Level-Based Greeting Variant

Wrap personalised copy that differs by level:

```html
{% if avatar_level == "level1" %}
<p style="margin: 0 0 14px;">
  I know you're in the thick of Pre-K prep right now — and this parenting journey is not what you pictured.
</p>
{% elsif avatar_level == "level2" %}
<p style="margin: 0 0 14px;">
  You've probably researched more approaches than you can count. Let me share what the science says.
</p>
{% elsif avatar_level == "level3" %}
<p style="margin: 0 0 14px;">
  If you've been told it's too late, or that your child "just isn't ready" — I want you to know something different.
</p>
{% else %}
<!-- General Fallback — Cross-level neutral -->
<p style="margin: 0 0 14px;">
  Whether your child started showing signs last month or years ago — the right support changes everything.
</p>
{% endif %}
```

#### 3b. Level-Variant CTA Buttons

If the CTA or link destination differs by level, wrap in conditionals:

```html
{% if avatar_level == "level3" %}
<a href="{{ organization.url }}pages/gentle-approach" style="...">See the Gentle Approach</a>
{% elsif avatar_level == "level2" %}
<a href="{{ organization.url }}pages/science" style="...">Read the Research</a>
{% else %}
<a href="{{ organization.url }}collections/all" style="...">Shop Now</a>
{% endif %}
```

#### 3c. Level-Based Signoff Variant (Rare — Only in Cross-Level Flows)

```html
{% if avatar_level == "level3" %}
<div style="font-size: 14px; line-height: 1.65; color: #B8CACD;">
  You are not behind. You are not failing. You are finding your way — at exactly the right pace.
</div>
{% elsif avatar_level == "level2" %}
<div style="font-size: 14px; line-height: 1.65; color: #B8CACD;">
  Keep asking questions. The parents who question everything are the ones who change everything for their child.
</div>
{% else %}
<div style="font-size: 14px; line-height: 1.65; color: #B8CACD;">
  You've got this. One small win at a time.
</div>
{% endif %}
```

#### 3d. Conditional for General Fallback Migration Anchors

```html
{% if avatar_level == "general" %}
<!-- GF-specific: Migration anchors for self-identification -->
<p style="margin: 0 0 14px; font-size: 13px; color: #8A9B9D; font-style: italic;">
  Not sure which level fits your child? <a href="{{ organization.url }}pages/level-finder" style="color: #2BAEB4;">Take our quick assessment</a> — it takes 2 minutes and helps us send you the right support.
</p>
{% endif %}
```

---

### Step 4: Inject Transactional Cloak Markup

Every transactional email MUST include a hidden plain-text fallback `<div>` (the transactional cloak). This ensures that if the HTML rendering fails or is blocked, the email client or spam filter can still read the plain-text fallback content.

#### 4a. Where to Place the Cloak

The transactional cloak must be placed immediately after the opening `<body>` tag and before any visible content. It must be the very first thing in the email body.

#### 4b. Cloak Code Block — Full Implementation

```html
<!-- TRANSACTIONAL CLOAK — Hidden Plain-Text Fallback (DO NOT REMOVE) -->
<div style="display: none !important; visibility: hidden; opacity: 0; color: transparent; height: 0; width: 0; max-height: 0; max-width: 0; overflow: hidden; mso-hide: all; font-size: 1px; line-height: 1px; letter-spacing: -1px;">
  Order Confirmation — {{ event.order_number }}. Your BrightKidCo order of {{ event.total }} has been received. Shipping to {{ event.shipping_address }}. Track your delivery at {{ event.tracking_url }}. Questions? Reply to this email or contact hello@brightkidco.com. © BrightKidCo Ltd.
</div>
<!-- END TRANSACTIONAL CLOAK -->
```

#### 4c. Cloak Content Guidelines (Demands §32)

- Must contain a verbatim summary of the email's critical information (order number, total, shipping address, tracking URL)
- Must NOT be empty
- Must NOT contain promotional language
- Should read as a complete plain-text version of the email
- Must include fallback contact info
- Must be invisible to the user in all email clients

#### 4d. Cloak Content Templates per Transactional Email

**Order Confirmation:**
```
Order Confirmation — {{ event.order_number }}. Your BrightKidCo order of {{ event.total }} has been received. Shipping to {{ event.shipping_address }}. Track your delivery at {{ event.tracking_url }}. Questions? Reply to this email or contact hello@brightkidco.com.
```

**Shipping Notification:**
```
Shipping Notification — Order {{ event.order_number }} is on its way. Tracking number: {{ event.tracking_number }}. Track at {{ event.tracking_url }}. Estimated delivery within 3-7 business days. Contact hello@brightkidco.com for support.
```

**Out for Delivery:**
```
Out for Delivery — Order {{ event.order_number }} is out for delivery today. Tracking: {{ event.tracking_number }}. Live tracking: {{ event.tracking_url }}. Delivery updates may appear on your doorstep notification.
```

**Arrived:**
```
Package Arrived — Order {{ event.order_number }} has been delivered. Your Body-Signal Learning Layer Underwear is here. 60-day money-back guarantee: if it doesn't work for your family, return for a full refund. Questions? hello@brightkidco.com.
```

---

### Step 5: Inject Conversational Cloak Markup

Certain flows require conversational cloak markup — a hidden block designed to make the email appear more like a personal conversation to spam filters. This increases deliverability by reducing the "bulk marketing" signal.

#### 5a. Where to Place the Conversational Cloak

Place the conversational cloak immediately after the transactional cloak (if present) or after `<!--[if mso]>` conditional comments, before the visible email shell. It must be the second invisible element.

#### 5b. Conversational Cloak Code Block

```html
<!-- CONVERSATIONAL CLOAK — Personal tone signal (DO NOT REMOVE) -->
<div style="display: none !important; visibility: hidden; opacity: 0; color: transparent; height: 0; width: 0; max-height: 0; max-width: 0; overflow: hidden; mso-hide: all; font-size: 1px; line-height: 1px; letter-spacing: -1px;">
  Hi {{ first_name | default: "there" }}, I was thinking about what you said in your last reply — and wanted to share something that came to mind. Hope it helps. — Lena
</div>
<!-- END CONVERSATIONAL CLOAK -->
```

#### 5c. Customisable Conversational Cloak Templates

**For Welcome E1 (First touch):**
```
Hi {{ first_name | default: "there" }}, welcome to the BrightKidCo community. I'm Lena — I'm one of the parents behind this brand. If you ever want to chat about what's working (or what's not), just hit reply. I read every message. — Lena
```

**For Abandoned Cart/Checkout (Recovery):**
```
Hi {{ first_name | default: "there" }}, I noticed you left something in your cart — no pressure at all. Just wanted to make sure you had everything you needed to decide. Happy to answer any questions. — Lena
```

**For Browse Abandonment:**
```
Hi {{ first_name | default: "there" }}, I saw you were looking at our learning layers. If you're wondering whether they'd work for your child, I'd love to share what other parents in your situation have experienced. — Lena
```

**For Winback (all):**
```
Hi {{ first_name | default: "there" }}, it's been a while. I was thinking about your journey and wanted to check in. No sales pitch — just wanted to share something that might help right now. — Lena
```

---

### Step 6: Replace Footer with Klaviyo-Compliant Markup

The footer in the standalone HTML uses hardcoded unsubscribe text and placeholder links. These must be replaced with Klaviyo variables.

#### 6a. Standard Footer

**Before:**
```html
<div style="font-size: 11px; color: #8A9B9D; line-height: 1.65; margin: 0 auto; max-width: 340px;">
  No longer want to receive these emails? <a href="#" style="color: #1F2D2F; text-decoration: underline;">Unsubscribe</a>.<br/>
  <span>BrightKidCo Ltd &middot; Berlin, Germany &middot; hello@brightkidco.com</span>
</div>
```

**After (Marketing Emails):**
```html
<div style="font-size: 11px; color: #8A9B9D; line-height: 1.65; margin: 0 auto; max-width: 340px;">
  No longer want to receive these emails? <a href="{{ unsubscribe }}" style="color: #1F2D2F; text-decoration: underline;">Unsubscribe</a>.<br/>
  <a href="{{ manage_preferences }}" style="color: #8A9B9D; text-decoration: underline;">Manage Preferences</a><br/>
  <span>{{ organization.name }} &middot; Berlin, Germany &middot; hello@brightkidco.com</span>
</div>
```

**After (Transactional Emails — No Unsubscribe Link):**
```html
<div style="font-size: 11px; color: #8A9B9D; line-height: 1.65; margin: 0 auto; max-width: 340px;">
  <span>{{ organization.name }} &middot; Berlin, Germany &middot; hello@brightkidco.com</span>
</div>
```

#### 6b. Transactional-Only Footer Note

Add a note explaining why the recipient received the email (required for CAN-SPAM compliance, even for transactional emails):

```html
<div style="font-size: 12.5px; font-style: italic; color: #8A9B9D; text-align: center; padding: 18px 24px 0;">
  You're receiving this because you placed an order with {{ organization.name }}.
</div>
```

#### 6c. Social Icons (Marketing Only) — Insert Klaviyo Variables for Tracking

Social icon links currently use `#` placeholders. Replace with actual URLs:

```html
<a href="{{ organization.url }}pages/instagram"><svg ...></svg></a>
<a href="{{ organization.url }}pages/facebook"><svg ...></svg></a>
<a href="{{ organization.url }}pages/tiktok"><svg ...></svg></a>
```

---

### Step 7: Stabilise for Table-Based Layout

Klaviyo strips `<style>` blocks from the `<head>` on some email clients (Outlook, Gmail). To ensure the template renders correctly after Klaviyo processes it:

#### 7a. Move Critical Styles Inline

All critical styles (width, background-color, font-family, padding, border) must already be inlined per the design system convention. The standalone HTML should already have inline styles — verify this during conversion.

#### 7b. Preserve MSO Conditional Comments

Outlook conditional comments (`<!--[if mso]>`) must be preserved exactly as-is. They wrap the email shell in a `<table>` for Outlook's Word HTML engine:

```html
<!--[if (gte mso 9)|(IE)]>
<table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color:#FBF7F1;"><tr><td align="center" style="padding:0;">
<table role="presentation" width="420" align="center" style="width:420px;" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding:0;">
<![endif]-->
```

#### 7c. Max Width Enforcement

Ensure the email inner container uses `max-width: 420px` (marketing) or `600px` (transactional per demands §32) with `width: 100%`:

```html
<div style="max-width: 420px; width: 100%; margin: 0 auto; ...">
```

For transactional emails, use `600px`:
```html
<div style="max-width: 600px; width: 100%; margin: 0 auto; ...">
```

#### 7d. Preheader Handling

Preheader text should use the invisible `<div>` pattern AND a visible top bar to ensure both mobile and desktop clients render it:

```html
<!-- Preheader — Invisible -->
<div style="display:none !important;visibility:hidden;opacity:0;color:transparent;height:0;width:0;max-height:0;max-width:0;overflow:hidden;mso-hide:all;font-size:1px;line-height:1px;">
  Visible preheader text here
</div>
<!-- Visible preheader bar -->
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
  <tr>
    <td style="padding:6px 20px;font-size:11px;font-style:italic;color:#8A9B9D;background-color:#F6F2EA;text-align:center;">
      Visible preheader text here
    </td>
  </tr>
</table>
```

The preheader content should already exist in the HTML — just ensure the Klaviyo variables in it are resolved. If the preheader contains hardcoded references, replace them.

---

### Step 8: Verify Klaviyo Syntax

After making all substitutions, verify the template before saving it to Klaviyo.

#### 8a. Syntax Checks

| Check | What to Look For | Fix |
|-------|-----------------|-----|
| **Variable Syntax** | `{{ variable_name }}` — correct double curly braces | Replace single `{variable}` with `{{ variable }}` |
| **Default Fallback** | `{{ variable \| default: "text" }}` — pipe syntax with quotes | Add default to all name variables |
| **Conditional Blocks** | `{% if condition %}...{% elsif %}...{% else %}...{% endif %}` | Ensure all opened blocks are closed |
| **For Loops** | `{% for item in list %}...{% endfor %}` | Ensure loop closures match opens |
| **Nested Curly Braces** | No unescaped `{{ }}` inside HTML attributes | Use single `{ }` or encode |
| **Tag Symmetry** | Every `{% if %}` has `{% endif %}` | Count open/close pairs |
| **Filter Syntax** | `\| default:` not `\| default =` | Use correct pipe syntax |

#### 8b. Variable Resolution Test

Check that every Klaviyo variable used in the document corresponds to an actual profile property or event property defined in Demands §15 or the Template Variable Reference (Item 1).

**Valid Profile Properties:**
- `first_name`, `last_name`, `email`
- `avatar_level` (string: level1/level2/level3/general)
- `child_age` (optional)
- `signup_source` (string: popup/checkout/referral)
- `welcome_flow_completed` (boolean)
- `last_purchase_pack_size` (string: 1pair/3+3/5+5)
- `vip_customer` (boolean)
- `purchase_reason` (string)
- `label_sensitive` (boolean)
- `rfm_recency`, `rfm_frequency`, `rfm_monetary` (integers 1-5)

**Valid Event Properties (Transactional):**
- `event.order_number`
- `event.order_date`
- `event.shipping_address`
- `event.billing_address`
- `event.tracking_url`
- `event.tracking_number`
- `event.line_items` (array with name/variant/quantity/price)
- `event.subtotal`
- `event.shipping_total`
- `event.tax_total`
- `event.total`

#### 8c. Klaviyo Preview Test

1. Save the completed HTML in Klaviyo as a new template
2. Click **Preview & Test**
3. Verify all variables resolve (not showing raw `{{ }}` syntax)
4. Check that the template renders correctly at 420px/600px widths
5. Send a test email to a real inbox
6. Verify:
   - All images load
   - Links are correct
   - Preheader text shows correctly
   - Footer renders properly
   - No visible cloak divs

---

## 4. Conversion Checklist

Use this checklist for EVERY HTML → Klaviyo conversion. Check off each item as completed.

### Pre-Conversion

- [ ] Email type classified (Transactional / Marketing / Cross-Level / Level-Specific)
- [ ] From address determined (orders@ / hello@ / support@)
- [ ] Cloak requirements identified (per deployment matrix below)
- [ ] Level-specific or cross-level determined (conditional blocks needed?)

### Variable Substitution

- [ ] `{first_name}` → `{{ first_name | default: "there" }}` in greeting
- [ ] All `{#}` placeholder links replaced with `{{ }}` variables or real URLs
- [ ] Order number hardcoded → `{{ event.order_number }}` (transactional only)
- [ ] Order date → `{{ event.order_date | date: "%B %d, %Y" }}` (transactional only)
- [ ] Shipping address → `{{ event.shipping_address }}` (transactional only)
- [ ] Tracking URL → `{{ event.tracking_url }}` (shipping/out-for-delivery only)
- [ ] Tracking number → `{{ event.tracking_number }}` (shipping/out-for-delivery only)
- [ ] Line items wrapped in `{% for item in event.line_items %}` loop (transactional only)
- [ ] Subtotal/Shipping/Tax/Total replaced with `{{ event.* }}` variables
- [ ] Cart URL → `{{ organization.url }}cart`
- [ ] Checkout URL → `{{ organization.url }}checkout`

### Conditional Blocks (Cross-Level Only)

- [ ] Level-appropriate greeting wrapped in `{% if avatar_level == %}` block
- [ ] Level-specific CTA wrapped in conditional (if applicable)
- [ ] Level-specific body section wrapped in conditional (if applicable)
- [ ] GF migration anchor added (if in General Fallback flow)
- [ ] All conditionals closed with `{% endif %}`

### Transactional Cloak

- [ ] Hidden plain-text fallback `<div>` inserted after `<body>`
- [ ] Cloak content matches email type (order, shipping, delivery, arrived)
- [ ] Cloak contains {{ event.* }} variables, resolves correctly
- [ ] Cloak uses correct invisible CSS (`display:none;height:0;overflow:hidden;mso-hide:all`)
- [ ] Cloak contains no promotional language
- [ ] Cloak is the FIRST element after `<body>`

### Conversational Cloak

- [ ] Hidden conversational `<div>` inserted after transactional cloak (if both present)
- [ ] Cloak content uses personal, peer-to-peer tone
- [ ] Cloak uses correct invisible CSS
- [ ] Cloak contains Lena signoff with {{ first_name }} variable
- [ ] Cloak is the SECOND hidden element (if transactional cloak present)

### Footer

- [ ] Unsubscribe link: `{{ unsubscribe }}` (marketing only)
- [ ] Manage Preferences link: `{{ manage_preferences }}` (marketing only)
- [ ] No unsubscribe link in transactional emails
- [ ] Business address hardcoded → kept as-is (static content in footer)
- [ ] Transactional note present: "You're receiving this because..."
- [ ] Social icon `#` placeholders → real URLs

### Layout & Rendering

- [ ] Inline styles verified (no reliance on `<style>` block for critical layout)
- [ ] MSO conditional comments preserved
- [ ] Max-width correct (420px marketing / 600px transactional)
- [ ] Preheader visible AND invisible variants both present
- [ ] All links use real URLs (no `#` placeholders in links — only in SVGs for icon placeholders)

### Syntax Verification

- [ ] All `{{ }}` variable tags use correct syntax
- [ ] All `{% %}` control flow tags closed
- [ ] `| default:` fallback present on personalisation variables
- [ ] No stray single-brace variables (`{name}`) remaining
- [ ] Klaviyo preview renders correctly
- [ ] Test email sent and verified in real inbox
- [ ] Ghost profile test sent to confirm variable resolution

---

## 5. Cloak Markup Reference

### 5.1 Transactional Cloak (Hidden Plain-Text Fallback Div)

**Purpose:** Provides a plain-text fallback for transactional emails when HTML rendering fails or is blocked. This is covered by Google's 2024 transactional email guidelines — the email can still be classified as transactional (not promotional) even if the HTML doesn't render, as long as the plain-text fallback contains only transactional content.

**CSS Rules (Must Be Exact):**
```css
display: none !important;
visibility: hidden;
opacity: 0;
color: transparent;
height: 0;
width: 0;
max-height: 0;
max-width: 0;
overflow: hidden;
mso-hide: all;
font-size: 1px;
line-height: 1px;
letter-spacing: -1px;
```

The `mso-hide: all` is critical — it tells Outlook to hide the element. Without it, Outlook may still render the div as a tiny box.

**Full Code Snippet:**
```html
<!-- TRANSACTIONAL CLOAK — Hidden Plain-Text Fallback (DO NOT REMOVE) -->
<div style="display: none !important; visibility: hidden; opacity: 0; color: transparent; height: 0; width: 0; max-height: 0; max-width: 0; overflow: hidden; mso-hide: all; font-size: 1px; line-height: 1px; letter-spacing: -1px;">
  Order Confirmation — {{ event.order_number }}. Your BrightKidCo order of {{ event.total }} has been received. Shipping to {{ event.shipping_address }}. Track your delivery at {{ event.tracking_url }}. Questions? Reply to this email or contact hello@brightkidco.com. © {{ organization.name }}.
</div>
<!-- END TRANSACTIONAL CLOAK -->
```

**Content Rules (from Demands §32):**
- ✅ Must describe the transactional purpose of the email
- ✅ Must include order reference and key details
- ✅ Must include contact information
- ✅ Must NOT contain promotional offers, discounts, or marketing language
- ✅ Must NOT contain cross-sells or upsells
- ✅ Must be invisible in all email clients

### 5.2 Conversational Cloak

**Purpose:** A hidden personal note that signals to spam filters that the email is conversational (peer-to-peer) rather than bulk marketing. This improves inbox placement for email types that border on promotional but need high deliverability.

**CSS Rules:** Same as transactional cloak (identical invisible CSS).

**Full Code Snippet:**
```html
<!-- CONVERSATIONAL CLOAK — Personal tone signal (DO NOT REMOVE) -->
<div style="display: none !important; visibility: hidden; opacity: 0; color: transparent; height: 0; width: 0; max-height: 0; max-width: 0; overflow: hidden; mso-hide: all; font-size: 1px; line-height: 1px; letter-spacing: -1px;">
  Hi {{ first_name | default: "there" }}, I was thinking about what you said — and wanted to share something that came to mind. Hope it helps. — Lena
</div>
<!-- END CONVERSATIONAL CLOAK -->
```

**Content Rules:**
- ✅ Must use first-person, conversational tone
- ✅ Must include a personal greeting
- ✅ Must reference past interaction (even if generic)
- ✅ Must use Lena's voice (peer-to-peer, never salesy)
- ❌ Must NOT contain promotional language or offers
- ❌ Must NOT contain links or CTAs

---

## 6. Cloak Deployment Matrix

Per demands §32, the following matrix defines which flows require which cloak types:

| Flow | Transactional Cloak | Conversational Cloak | Notes |
|------|-------------------|---------------------|-------|
| **Welcome E1** | YES | YES | Both required — first touch needs maximum deliverability |
| **Welcome E2-8** | YES | NO | Transactional cloak only — subsequent touches |
| **Browse Abandonment E1** | YES | YES | Both required — re-engagement needs conversational signal |
| **Cart Abandonment E1** | YES | YES | Both required — recovery email needs conversational signal |
| **Checkout Abandonment E1** | YES | YES | Both required — recovery email needs conversational signal |
| **Order Confirmation** | YES | NO | Transactional only — no conversation needed |
| **Shipping Notification** | YES | NO | Transactional only |
| **Out for Delivery** | YES | NO | Transactional only |
| **Arrived** | YES | NO | Transactional only |
| **All Campaigns** | YES | NO | Transactional cloak required for all |
| **Customer Winback (all)** | YES | YES | Both required — re-engagement needs conversational signal |
| **Post-Purchase (all)** | YES | NO | Transactional cloak only |
| **PP-Level Detection** | YES | NO | Transactional cloak only |
| **PP-Extended Education** | YES | NO | Transactional cloak only |
| **PP-Mid Check-In** | YES | NO | Transactional cloak only |
| **FAQ/Objection Library** | YES | NO | Campaign-like content |
| **Referral Flow** | YES | NO | Campaign-like content |
| **Sunset** | YES | NO | Re-engagement — transactional cloak only |
| **Review Request** | YES | NO | Campaign-like content |
| **Replenishment A/B/C** | YES | NO | Post-purchase nurture |
| **PP-Upsell** | YES | NO | Post-purchase nurture |
| **Mary S. Story** | YES | NO | Brand story |
| **PP-Extended Upsell** | YES | NO | Post-purchase nurture |

---

## 7. Edge Cases & Error Handling

### 7.1 Missing or Unavailable Event Properties

**Problem:** An event property used in a transactional template (e.g. `event.tracking_url`) may be empty or unavailable for some orders.

**Solution:** Use conditional wrapping to show alternative content:

```html
{% if event.tracking_url %}
<a href="{{ event.tracking_url }}" style="...">Track My Order &rarr;</a>
{% else %}
<p style="...">Tracking information will be available once your order ships.</p>
{% endif %}
```

### 7.2 Avatar Level Not Yet Assigned

**Problem:** A General Fallback subscriber may not have an `avatar_level` property yet.

**Solution:** Always include a `{% else %}` (General Fallback) branch in every level conditional block. Never assume the property exists.

### 7.3 Mailchimp vs Klaviyo Variable Syntax in Source Files

**Problem:** Some source HTML files (especially older ones) may use Mailchimp-style variables (`*|FNAME|*`) or other ESP syntax instead of Klaviyo's Liquid-style `{{ }}`.

**Solution:** During conversion, do a global search-replace for these patterns:

| Old Syntax (Mailchimp/Other) | New Syntax (Klaviyo) |
|------------------------------|---------------------|
| `*|FNAME|*` | `{{ first_name \| default: "there" }}` |
| `*|UNSUB|*` | `{{ unsubscribe }}` |
| `*|UPDATE_PROFILE|*` | `{{ manage_preferences }}` |
| `{first_name}` | `{{ first_name \| default: "there" }}` |
| `[unsubscribe]` | `{{ unsubscribe }}` |

### 7.4 Nested Conditional Complexity

**Problem:** Deeply nested `{% if %}` blocks become hard to read and debug.

**Solution:** Limit nesting to 2 levels maximum. Extract complex conditions into simpler, flatter blocks. Mark each `{% endif %}` with an HTML comment indicating what it closes:

```html
{% if avatar_level == "level1" %}
  {% if welcome_flow_completed == false %}
    ...
  {% endif %} <!-- end welcome_flow_completed check -->
{% endif %} <!-- end level1 check -->
```

### 7.5 Empty Variable Output

**Problem:** A variable resolves to empty string, creating broken HTML (e.g. empty `href=""` links).

**Solution:** Use the `| default:` filter on ALL personalisation variables. For URLs, use conditional wrapping:

```html
{% if event.tracking_url %}
<a href="{{ event.tracking_url }}">Track</a>
{% endif %}
```

### 7.6 Variable Inside HTML Attributes (Vulnerability)

**Problem:** Using a variable directly inside an HTML attribute without URL-encoding can break the markup if the variable contains special characters.

**Solution:** Only use variables inside `href` attributes for known-safe URLs (tracking URLs, organization URLs). Never insert user-controlled variables (like `first_name`) into HTML attributes.

```html
<!-- SAFE: Known-safe URL variable -->
<a href="{{ event.tracking_url }}">Track</a>

<!-- UNSAFE: User name inside attribute value -->
<a href="/profile/{{ first_name }}">Profile</a>

<!-- SAFE: User name in text content only -->
Hi {{ first_name | default: "there" }},
```

### 7.7 Klaviyo Template Size Limits

**Problem:** Klaviyo has a template size limit of approximately 150KB. Very long emails with multiple level conditionals can approach this limit.

**Solution:** For cross-level emails with 4-level conditionals repeating long content blocks, consider splitting into separate template variants per level rather than using conditionals. A single template with 4 identical large blocks will be ~4x the size of a level-specific template.

### 7.8 Shopify Integration Conflicts

**Problem:** Shopify sends its own default transactional emails. If BrightKidCo also sends through Klaviyo, customers may receive duplicate emails.

**Solution:** In Shopify admin → Settings → Notifications, disable:
- Order Confirmation
- Shipping Confirmation
- Out for Delivery
- Delivery Confirmation

Replace with Klaviyo templates exclusively. This ensures consistent branding and prevents the "duplicate transactional" issue.

---

## 8. Verification Procedure

After completing the conversion, run the following verification:

### 8.1 File-Level Checks

- [ ] Converted file saved with naming convention: `flow-{NN}-{name}/email-{NN}-{variant}-klaviyo.html`
- [ ] File size > 6KB (minimum viable Klaviyo template)
- [ ] UTF-8 encoding confirmed
- [ ] No `#` placeholder links remain in `<a href>` tags
- [ ] No `{variable}` single-brace syntax remains

### 8.2 Klaviyo Template Test

1. Upload to Klaviyo: **Templates → Create Template → Paste HTML**
2. Preview at desktop (600px) and mobile (320px) widths
3. Verify all visible content renders correctly
4. Verify cloak divs are invisible
5. Send test to ghost profile:
   - `first_name` = "Test"
   - `avatar_level` = "level1"
   - With known event data for transactional templates
6. Send test to real email inbox
7. Check the raw source of the received email — cloak divs should be present but invisible

### 8.3 Full Regression Checklist

- [ ] Personalisation variables resolve correctly
- [ ] Conditional blocks show/hide correct level content
- [ ] Transactional cloak contains correct event data
- [ ] Conversational cloak uses peer-to-peer tone
- [ ] Unsubscribe link works (marketing emails)
- [ ] Manage Preferences link works (marketing emails)
- [ ] No unsubscribe link in transactional emails
- [ ] Footer renders correctly with brand info
- [ ] All images have `alt` text
- [ ] All links are functional
- [ ] MSO conditional comments work in Outlook
- [ ] Max-width is correct for email type
- [ ] All 6 Demand §32 rules satisfied (transactionals: no promo, table layout, inline CSS, max 600px, hidden plain-text div, Shopify disabled)
