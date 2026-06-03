# BrightKidCo — Klaviyo Template Variable Reference

> **Document:** 01-template-variables.md
> **Section:** 7, Item 1 — Klaviyo Infrastructure
> **Purpose:** Complete mapping of every Klaviyo/Liquid variable to its place in the template component structure
> **Status:** v1.0 — Canonical reference for HTML-to-Klaviyo template conversion
> **Last updated:** 2026-05-26

---

## TABLE OF CONTENTS

1. [Klaviyo Variable Quick Reference](#1-klaviyo-variable-quick-reference)
2. [Template Component → Variable Mapping](#2-template-component--variable-mapping)
   - 2.1 EmailShell / Preheader
   - 2.2 Header
   - 2.3 TitleBlock
   - 2.4 Letter / Body
   - 2.5 Band (Gradient Transitions)
   - 2.6 Content Sections (Creed, Definition, Quote, Product, etc.)
   - 2.7 CTAClose
   - 2.8 Signoff (Lena Bauer)
   - 2.9 OutLine
   - 2.10 Footer
3. [Level-Specific Conditional Blocks](#3-level-specific-conditional-blocks)
4. [Transactional vs Marketing Variables](#4-transactional-vs-marketing-variables)
5. [Profile Properties Reference](#5-profile-properties-reference)
6. [Tags Reference](#6-tags-reference)
7. [Conditional Block Syntax Patterns](#7-conditional-block-syntax-patterns)
8. [Template Code: Annotated Sections](#8-template-code-annotated-sections)

---

## 1. Klaviyo Variable Quick Reference

### Core Variables

| Variable | Klaviyo Syntax | Fallback | Component(s) | Type |
|----------|---------------|----------|-------------|------|
| First Name | `{{ first_name \| default: "there" }}` | "there" | Letter, TitleBlock, Signoff, Preheader, CTAClose | Profile |
| Last Name | `{{ last_name }}` | — | Footer (address) | Profile |
| Email | `{{ email }}` | — | Footer | Profile |
| Unsubscribe Link | `{% unsubscribe %}` | — | Footer | System |
| Manage Preferences | `{{ manage_preferences }}` or `{{ organization.manage_preferences \| default: "Manage preferences" }}` | "Manage preferences" | Footer | System |
| Order Number | `{{ event.order_number }}` | — | Transactional Letter, TitleBlock | Event |
| Organization URL | `{{ organization.url }}` | — | CTAClose, TitleBlock (links) | System |
| Cart URL | `{{ organization.url }}cart` | — | CTAClose (cart recovery) | System |
| Shop URL | `{{ organization.url }}collections/all-products` | — | Footer | System |

### Conditional System Variables

| Variable | Syntax | Purpose | Component(s) |
|----------|--------|---------|-------------|
| Avatar Level | `{{ person.avatar_level }}` | Level-specific content routing | Letter, TitleBlock, Content Sections, Signoff |
| Welcome Flow Completed | `{{ person.welcome_flow_completed }}` | Flow progression | Letter (suppression logic) |
| Last Purchase Pack Size | `{{ person.last_purchase_pack_size }}` | Upsell content | Letter, CTAClose |
| Child Age | `{{ person.child_age }}` | Age-appropriate content | Letter |
| Signup Source | `{{ person.signup_source }}` | Content adaptation | TitleBlock, Letter |
| VIP Customer | `{{ person.vip_customer }}` | VIP content | Letter, CTAClose |

### Klaviyo Liquid Tags

| Tag | Syntax | Component | Notes |
|-----|--------|-----------|-------|
| Unsubscribe | `{% unsubscribe %}` | Footer | Renders Klaviyo-managed unsubscribe link |
| Conditional If | `{% if condition %}...{% endif %}` | Letter, Content Sections | Level-based content branching |
| Conditional If/Else | `{% if condition %}...{% else %}...{% endif %}` | Letter, Content Sections | General fallback content |
| Conditional Elsif | `{% if c1 %}...{% elsif c2 %}...{% else %}...{% endif %}` | Letter, Content Sections | Multi-level content branches |

---

## 2. Template Component → Variable Mapping

### 2.1 EmailShell / Preheader

**Component:** The outermost wrapper and the preheader text strip at the top of every email.

| Variable | Location | Syntax | Fallback |
|----------|----------|--------|----------|
| `first_name` | Preheader text | `{{ first_name \| default: "there" }}` | "there" |

**Example — Preheader with first_name:**
```html
<!-- PREHEADER -->
<div style="display:none !important; visibility:hidden; opacity:0; color:transparent; height:0; width:0; max-height:0; max-width:0; overflow:hidden; mso-hide:all; font-size:1px; line-height:1px;">
  {{ first_name | default: "there" }} — Quick mechanism note before you go
</div>
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
  <tr>
    <td style="padding:6px 20px; font-size:11px; font-style:italic; color:#8A9B9D; background-color:#F6F2EA; text-align:center; line-height:1.4;">
      {{ first_name | default: "there" }} — Quick mechanism note before you go
    </td>
  </tr>
</table>
```

**Level-conditional preheader (Welcome Flow only):**
```html
{% if person.avatar_level == "level1" %}
  {{ first_name | default: "there" }} — Pre-K readiness starts here
{% elsif person.avatar_level == "level2" %}
  {{ first_name | default: "there" }} — The science behind body signals
{% elsif person.avatar_level == "level3" %}
  {{ first_name | default: "there" }} — Dignity-first approach to body-signal learning
{% else %}
  {{ first_name | default: "there" }} — Wherever you are on this journey
{% endif %}
```

---

### 2.2 Header

**Component:** Logo section at the top of every email.

| Variable | Location | Syntax | Fallback |
|----------|----------|--------|----------|
| *None* | — | — | — |

**No Klaviyo variables needed.** The logo image source uses a static URL:
```html
<img src="https://brightkidco.com/assets/brightkidco-logo-v2.png"
     alt="BrightKidCo — Body-Signal Learning Layer Training Underwear"
     width="auto" height="34" style="..." />
```

**Transactional variant** uses `orders@send.brightkidco.com` from name — handled at the Klaviyo campaign/flow level, not in template HTML.

---

### 2.3 TitleBlock

**Component:** Badge + H1 headline + optional subhead.

| Variable | Location | Syntax | Fallback |
|----------|----------|--------|----------|
| `first_name` | Subhead text (rare) | `{{ first_name \| default: "there" }}` | "there" |
| `avatar_level` | Conditional badge content | `{% if person.avatar_level %}...{% endif %}` | — |

**Example — standard TitleBlock (no variables):**
```html
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" class="bk-titleblock" style="padding:34px 22px 0; text-align:center;">
  <tr>
    <td align="center" style="padding:0;">
      <span style="display:inline-block; background-color:#FFD866; padding:7px 14px; border-radius:999px; font-size:10.5px; font-weight:700; letter-spacing:1.5px; text-transform:uppercase; margin-bottom:16px; border:2px solid #1F2D2F; transform:rotate(-1.5deg); white-space:nowrap;">
        Winback · 01 of 03
      </span>
      <h1 style="font-size:40px; line-height:1; font-weight:700; margin:0; letter-spacing:-0.8px; font-family:'Fraunces',Georgia,serif; color:#1F2D2F;">
        He gets it — but he doesn't
      </h1>
      <p style="font-size:17px; color:#4A6568; margin:14px 0 0; line-height:1.4; font-weight:500;">
        The one piece most potty training methods miss
      </p>
    </td>
  </tr>
</table>
```

**First_name injection point** (first email of a flow only, to personalise the welcome):
```html
<p style="font-size:17px; color:#4A6568; margin:14px 0 0; line-height:1.4; font-weight:500;">
  {{ first_name | default: "there" }}, here's what you need to know
</p>
```

**Level-based variant badges** for level-specific flows (e.g. Welcome, Extended Education):
```html
{% if person.avatar_level == "level1" %}
  <span style="display:inline-block; background-color:#FFD866; padding:7px 14px; border-radius:999px; font-size:10.5px; font-weight:700; letter-spacing:1.5px; text-transform:uppercase; margin-bottom:16px; border:2px solid #1F2D2F; transform:rotate(-1.5deg); white-space:nowrap;">
    Welcome
  </span>
{% else %}
  <span style="display:inline-block; background-color:#FFD866; padding:7px 14px; border-radius:999px; font-size:10.5px; font-weight:700; letter-spacing:1.5px; text-transform:uppercase; margin-bottom:16px; border:2px solid #1F2D2F; transform:rotate(-1.5deg); white-space:nowrap;">
    Welcome
  </span>
{% endif %}
```

> **Note:** Badge copy is flow-specific, not level-specific in most cases. Level-specific badge copy applies only when the flow title differs per level (e.g. "Welcome" is the same badge for all levels).

---

### 2.4 Letter / Body

**Component:** The main body text paragraphs. This is where the majority of Klaviyo variables are injected.

| Variable | Location | Syntax | Fallback |
|----------|----------|--------|----------|
| `first_name` | Opening/salutation paragraph | `{{ first_name \| default: "there" }}` | "there" |
| `event.order_number` | Transactional emails | `{{ event.order_number }}` | — |
| `avatar_level` | Conditional content blocks | `{% if person.avatar_level == "level1" %}...{% endif %}` | — |
| `child_age` | Age-specific content | `{% if person.child_age %}...{% endif %}` | — |
| `last_purchase_pack_size` | Upsell/replenishment content | `{% if person.last_purchase_pack_size == "1pair" %}...{% endif %}` | — |
| `vip_customer` | VIP-specific copy | `{% if person.vip_customer %}...{% endif %}` | — |

**Example — Lead paragraph with first_name:**
```html
<p style="margin:0 0 14px; font-size:17px; color:#1F2D2F; font-weight:600; line-height:1.7;">
  Hi {{ first_name | default: "there" }}, I'm Lena. We haven't talked in a while — and I respect your inbox, so I won't make this long.
</p>
```

**Example — Transactional email with order number:**
```html
<p style="margin:0 0 14px; font-size:15px; line-height:1.7; color:#4A6568;">
  Your order <strong style="color:#1F2D2F;">#{{ event.order_number }}</strong> has been confirmed. Here's what happens next...
</p>
```

**Example — Level-conditional body paragraphs:**
```html
{% if person.avatar_level == "level1" %}
  <p style="margin:0 0 14px; font-size:15px; line-height:1.7; color:#4A6568;">
    Your child talks about potty training but won't actually do it. That's not defiance — it's a signal-timing gap. And there's a window before Pre-K that's still open.
  </p>
{% elsif person.avatar_level == "level2" %}
  <p style="margin:0 0 14px; font-size:15px; line-height:1.7; color:#4A6568;">
    You've tried the sticker charts, the timed sits, maybe even the "Oh Crap" method. Some of it worked, temporarily. But here's what connects every failed attempt: none of them addressed the body signal.
  </p>
{% elsif person.avatar_level == "level3" %}
  <p style="margin:0 0 14px; font-size:15px; line-height:1.7; color:#4A6568;">
    If you've moved past active training — that's not failure. Your child's nervous system processes body signals differently. Some children take years. That's real.
  </p>
{% else %}
  <p style="margin:0 0 14px; font-size:15px; line-height:1.7; color:#4A6568;">
    Wherever you are on this journey — whether your child is just starting to show interest or you've been at it for years — the core problem is often the same: the "I need to go" signal isn't getting through.
  </p>
{% endif %}
```

**Example — Conditional block for pack-size-specific content:**
```html
{% if person.last_purchase_pack_size == "1pair" %}
  <p style="margin:0 0 14px; font-size:15px; line-height:1.7; color:#4A6568;">
    You started with a single pair. Many parents find that having more pairs creates a consistent feedback loop for their child. Our 3+3 bundle gives you three learning layers and three training pants — enough to rotate through a full day.
  </p>
{% elsif person.last_purchase_pack_size == "3+3" %}
  <p style="margin:0 0 14px; font-size:15px; line-height:1.7; color:#4A6568;">
    The 3+3 bundle is off to a great start. Some parents move up to the 5+5 bundle for maximum rotation as their child begins to notice the signal more consistently.
  </p>
{% endif %}
```

---

### 2.5 Band (Gradient Transitions)

**Component:** Gradient colour transitions between sections.

| Variable | Location | Syntax | Fallback |
|----------|----------|--------|----------|
| *None* | — | — | — |

**No Klaviyo variables needed.** Bands are purely visual (background gradient colours).

---

### 2.6 Content Sections (Creed, Definition, Quote, Product, etc.)

**Component:** The inner content blocks that vary by email pattern (Pattern A: Creed cards, Steps path, Quote cards; Pattern B: CodeBlock, Comparison pills, Promise badges, etc.).

| Variable | Location | Syntax | Fallback |
|----------|----------|--------|----------|
| `first_name` | Quote attribution, test cards | `{{ first_name \| default: "there" }}` | "there" |
| `avatar_level` | Conditional content display | `{% if person.avatar_level == "level1" %}...{% endif %}` | — |
| `event.order_number` | Order details in post-purchase | `{{ event.order_number }}` | — |

**Example — Quote card (no variables, static content):**
```html
<div style="background:#FFFFFF; border:2px solid #1F2D2F; border-radius:16px; padding:18px 20px; margin-bottom:16px;">
  <p style="margin:0; font-size:16px; line-height:1.6; color:#1F2D2F; font-style:italic; font-family:'Fraunces',Georgia,serif;">
    "Your child knows what potty training is. Talks about it. But can't feel the signal."
  </p>
  <p style="margin:12px 0 0; font-size:11px; color:#8A9B9D;">
    — From a BrightKidCo parent survey
  </p>
</div>
```

**Example — Quote card with first_name (in greeting/attribution):**
```html
<div style="background:#FFFFFF; border:2px solid #1F2D2F; border-radius:16px; padding:18px 20px; margin-bottom:16px;">
  <p style="margin:0 0 12px; font-size:15px; line-height:1.7; color:#4A6568;">
    {{ first_name | default: "there" }}, this is the pattern I hear most from parents with kids like yours.
  </p>
</div>
```

---

### 2.7 CTAClose

**Component:** The call-to-action section before Lena's signoff — dark ink background with a lime pill button.

| Variable | Location | Syntax | Fallback |
|----------|----------|--------|----------|
| `organization.url` | CTA link `href` | `{{ organization.url }}` | — |
| `organization.url`cart | Cart recovery CTA | `{{ organization.url }}cart` | — |
| `first_name` | Intro paragraph | `{{ first_name \| default: "there" }}` | "there" |

**Example — CTAClose with org URL (marketing email):**
```html
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:#1F2D2F;">
  <tr>
    <td align="center" style="padding:20px 22px 44px; background-color:#1F2D2F; text-align:center;">
      <p style="font-size:14px; line-height:1.6; color:#B8CACD; margin:0 0 24px;">
        {{ first_name | default: "there" }} — 60 days to see if the Body-Signal Learning Layer helps your child build the connection pull-ups block. Your judgment, no questions asked.
      </p>
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" style="margin:0 auto;">
        <tr>
          <td align="center" style="border-radius:999px; background:#D8F57C; padding:0;">
            <a href="{{ organization.url }}" target="_blank" style="display:inline-block; padding:17px 32px; background:#D8F57C; color:#1F2D2F; font-size:15.5px; font-weight:700; text-decoration:none; border-radius:999px;">
              See the Body-Signal Learning Layer
            </a>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
```

**Example — CTAClose with cart URL (cart recovery email):**
```html
<a href="{{ organization.url }}cart" target="_blank" style="display:inline-block; padding:17px 32px; background:#D8F57C; color:#1F2D2F; font-size:15.5px; font-weight:700; text-decoration:none; border-radius:999px;">
  Continue your order
</a>
```

**Example — CTAClose with discount auto-apply URL:**
```html
<a href="https://brightkidco.com/discount/10%25OFF-WELCOME" target="_blank" style="display:inline-block; padding:17px 32px; background:#D8F57C; color:#1F2D2F; font-size:15.5px; font-weight:700; text-decoration:none; border-radius:999px;">
  Shop Now
</a>
```

**CTAClose link variables by flow type:**

| Flow Type | CTA `href` Variable | Notes |
|-----------|---------------------|-------|
| Welcome (L1) | `{{ organization.url }}` | Shop link |
| Welcome (L2) | `{{ organization.url }}` | Shop link |
| Welcome (L3) | `{{ organization.url }}` | Shop link, no urgency |
| Welcome (GF) | `{{ organization.url }}` | Shop link |
| Cart Abandonment | `{{ organization.url }}cart` | Direct to cart |
| Checkout Abandonment | `{{ organization.url }}cart` | Direct to cart |
| Browse Abandonment | `{{ organization.url }}` | Shop link |
| Order Confirmation | `{{ organization.url }}collections/all-products` | Shop link (optional upsell) |
| Shipping Notification | `{{ organization.url }}account` | Track order link |
| PP-Upsell | `{{ organization.url }}collections/all-products` | Product link |
| Winback | `{{ organization.url }}` | Re-engagement link |
| Replenishment | `{{ organization.url }}collections/all-products` | Product link |

---

### 2.8 Signoff (Lena Bauer)

**Component:** Lena's personal signoff card — dark card with avatar, signature, and optional P.S.

| Variable | Location | Syntax | Fallback |
|----------|----------|--------|----------|
| `first_name` | P.S. block | `{{ first_name \| default: "there" }}` | "there" |

**Example — Signoff with first_name in P.S.:**
```html
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" class="bk-signoff-outer" style="background-color:#1F2D2F; padding:0 22px 36px;">
  <tr>
    <td align="center" style="padding:0;">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" class="bk-signoff-card" style="background-color:#1F2A2C; border:1.5px solid #2F3D40; border-radius:22px; overflow:hidden;">
        <tr>
          <td style="padding:0;">
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
              <tr><td style="padding:0; height:4px; background:linear-gradient(135deg,#2BAEB4 0%,#5DD07A 100%); font-size:0; line-height:0;">&nbsp;</td></tr>
            </table>
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
              <tr>
                <td style="padding:26px 24px 24px;">
                  <!-- Avatar + Name block (no variables) -->
                  ...
                  <!-- Signature (no variables) -->
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="padding-top:16px; padding-bottom:16px; border-top:1.5px dashed #3A4547; border-bottom:1.5px dashed #3A4547; margin-bottom:16px;">
                    <tr>
                      <td style="padding:0; font-family:'Caveat',cursive; font-size:42px; font-weight:500; line-height:0.95; letter-spacing:-0.5px; color:#D8F57C;">Lena</td>
                    </tr>
                  </table>
                  <!-- P.S. with first_name -->
                  <p style="margin:0; font-size:13px; line-height:1.65; color:#B8CACD; font-style:italic;">
                    <span style="color:#D8F57C; font-weight:700; font-style:normal;">P.S.</span>
                    {{ first_name | default: "there" }}, if you ever want to reply and tell me about your child — I read every one. Really.
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
```

> **Note:** The Signoff component uses a hardcoded name and role (Lena Bauer, Customer Support · Mom of two autistic sons). These are NOT Klaviyo variables — they're brand constants. Only the P.S. block uses `first_name` for personalisation.

---

### 2.9 OutLine

**Component:** The soft exit line between Signoff and Footer — italic, muted text.

| Variable | Location | Syntax | Fallback |
|----------|----------|--------|----------|
| `first_name` | Optional personalisation | `{{ first_name \| default: "there" }}` | "there" |

**Example:**
```html
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:#FFFFFF; padding:18px 24px 0; text-align:center;">
  <tr>
    <td align="center" style="padding:18px 24px 28px; font-size:12.5px; color:#8A9B9D; font-style:italic; line-height:1.5;">
      {{ first_name | default: "there" }}, you can pause this series anytime. Come back when you're ready.
    </td>
  </tr>
</table>
```

---

### 2.10 Footer

**Component:** The email footer — tagline, navigation links, social icons, unsubscribe/manage preferences, address, gradient divider.

| Variable | Location | Syntax | Fallback |
|----------|----------|--------|----------|
| `{% unsubscribe %}` | Unsubscribe link | `{% unsubscribe %}` | Renders Klaviyo unsubscribe link |
| `{{ manage_preferences }}` | Preferences link | `{{ manage_preferences \| default: "Manage preferences" }}` | "Manage preferences" |
| `{{ organization.url }}` | Shop link href | `{{ organization.url }}collections/all-products` | — |
| `{{ organization.url }}` | Parent Stories link | `{{ organization.url }}pages/real-parent-stories` | — |
| `{{ organization.url }}` | Contact link | `{{ organization.url }}pages/contact` | — |
| `{{ organization.url }}` | FAQ link | `{{ organization.url }}pages/faq` | — |

**Full annotated Footer template:**
```html
<!-- FOOTER -->
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:#FFFFFF; padding:30px 24px; text-align:center;">
  <tr>
    <td align="center" style="padding:0; background-color:#FFFFFF;">

      <!-- Tagline (static brand text, no variables) -->
      <p style="font-family:'Fraunces',Georgia,serif; font-size:20px; font-style:italic; font-weight:500; color:#1F2D2F; letter-spacing:-0.2px; margin:0 0 14px;">
        Calm progress, one day at a time.
      </p>

      <!-- Reviews microcopy (static text, no variables) -->
      <p style="font-size:11.5px; color:#8A9B9D; line-height:1.65; margin:0 auto 20px; max-width:340px;">
        Over 100,000 parents trust BrightKidCo · 16,511 reviews with 4.9★
      </p>

      <!-- Navigation links (org URLs) -->
      <a href="{{ organization.url }}collections/all-products" style="font-size:14px; font-weight:500; color:#1F2D2F; text-decoration:none; display:inline-block; margin-bottom:14px;">Shop</a>
      <span style="color:#8A9B9D; font-size:12px; margin:0 6px;">·</span>
      <a href="{{ organization.url }}pages/real-parent-stories" style="font-size:14px; font-weight:500; color:#1F2D2F; text-decoration:none; display:inline-block; margin-bottom:14px;">Parent Stories</a>
      <span style="color:#8A9B9D; font-size:12px; margin:0 6px;">·</span>
      <a href="{{ organization.url }}pages/faq" style="font-size:14px; font-weight:500; color:#1F2D2F; text-decoration:none; display:inline-block; margin-bottom:14px;">FAQ</a>
      <span style="color:#8A9B9D; font-size:12px; margin:0 6px;">·</span>
      <a href="{{ organization.url }}pages/contact" style="font-size:14px; font-weight:500; color:#1F2D2F; text-decoration:none; display:inline-block; margin-bottom:14px;">Contact us</a>

      <!-- Social Icons (static SVGs, no variables) -->
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" style="margin:14px auto 28px;">
        <tr>
          <td style="padding:0 11px;">
            <a href="https://instagram.com/brightkidco_official" target="_blank">
              <img src="https://brightkidco.com/assets/icon-instagram.png" alt="Instagram" width="22" height="22" style="display:block;" />
            </a>
          </td>
          <td style="padding:0 11px;">
            <a href="https://tiktok.com/@brightkidco.com" target="_blank">
              <img src="https://brightkidco.com/assets/icon-tiktok.png" alt="TikTok" width="22" height="22" style="display:block;" />
            </a>
          </td>
        </tr>
      </table>

      <!-- Klaviyo Unsubscribe + Manage Preferences + Address -->
      <p style="font-size:11.5px; color:#8A9B9D; line-height:1.65; margin:0 auto; max-width:340px;">
        {% unsubscribe %} · <a href="{{ manage_preferences | default: '#' }}" style="color:#1F2D2F; text-decoration:underline;">{{ manage_preferences | default: "Manage preferences" }}</a><br/>
        BrightKidCo Ltd · Berlin, Germany · hello@brightkidco.com
      </p>

      <!-- Gradient Divider Bar (static, no variables) -->
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" style="margin:28px auto 0;">
        <tr>
          <td style="padding:0; width:60px; height:3px; background:linear-gradient(135deg,#2BAEB4 0%,#5DD07A 100%); border-radius:3px; font-size:0; line-height:0;">&nbsp;</td>
        </tr>
      </table>
    </td>
  </tr>
</table>
```

**Important:** The `{% unsubscribe %}` tag is a Klaviyo Liquid tag, NOT a variable. It renders the full unsubscribe link with Klaviyo tracking. The `{{ manage_preferences }}` variable renders a link to the preference centre. Both are critical for CAN-SPAM compliance.

---

## 3. Level-Specific Conditional Blocks

### 3.1 Avatar Level Conditions

The `avatar_level` profile property drives all segmented content. The 4 valid values are:

| Value | Segment | ~Volume | Hope Ratio |
|-------|---------|---------|------------|
| `"level1"` | Level 1 — Mild ASD, verbal, 3-5 yrs | ~35% | 70% |
| `"level2"` | Level 2 — Moderate ASD, mixed verbal, 5-7 yrs | ~40% | 40% |
| `"level3"` | Level 3 — Severe ASD, non-verbal, 6-10+ yrs | ~25% | 20% |
| `"general"` | General Fallback — undeclared or unclassified | ~30-50% | 50/50 |

### 3.2 Conditional Block Patterns

**Pattern A — Simple level check (single variant):**
```html
{% if person.avatar_level == "level1" %}
  <p>Level 1 specific content here...</p>
{% endif %}
```

**Pattern B — Level check with general fallback:**
```html
{% if person.avatar_level == "level1" %}
  <p>Level 1 content...</p>
{% else %}
  <p>General content for all other levels...</p>
{% endif %}
```

**Pattern C — Multi-level branching (full segmentation):**
```html
{% if person.avatar_level == "level1" %}
  <p>Level 1 — Hopeful Investigator content</p>
{% elsif person.avatar_level == "level2" %}
  <p>Level 2 — Skeptical Researcher content</p>
{% elsif person.avatar_level == "level3" %}
  <p>Level 3 — Wounded Advocate content</p>
{% else %}
  <p>General Fallback — Newcomer content</p>
{% endif %}
```

**Pattern D — Level check combined with additional condition:**
```html
{% if person.avatar_level == "level1" and person.welcome_flow_completed == false %}
  <p>Welcome content for Level 1, first email</p>
{% endif %}
```

### 3.3 Where Level Conditionals Are Used Per Component

| Component | Typical Use | Pattern |
|-----------|-------------|---------|
| Preheader | Subtle level-dependent teaser text | B or C |
| TitleBlock | Badge text rarely changes per level; subhead may vary | A |
| Letter (1st paragraph) | Level-specific recognition anchor | C |
| Letter (body paragraphs) | Core content varies per level | C |
| Content Sections | Quote selection, mechanism explanation vary | C |
| Signoff | Signoff length variant selection (Short/Medium/Long) | A |
| CTAClose | Button text and CTA style vary slightly | A or B |

### 3.4 Level-Specific Variable Injection Points Per Flow

| Flow | Component | Level Injection Point |
|------|-----------|----------------------|
| **Welcome** (all 8 emails) | Letter (all paragraphs), Content Sections | Full multi-level branching for body copy; title/subhead may use simple conditional |
| **PP-Level Detection** (1 email, cross-level) | Letter, Content Sections | No level conditional (detection email is before level assignment) |
| **PP-Extended Education** (all 5 emails × 4 levels) | Letter (all paragraphs), Content Sections | Full multi-level branching |
| **Winback Path A** (3 emails × 4 levels) | Letter, Content Sections | Full multi-level branching |
| **Winback Path B** (3 emails × 4 levels) | Letter, Content Sections | Full multi-level branching |
| **Cart Abandonment** (cross-level) | Letter | No level conditional (uses 6 Calibration Rules instead) |
| **Checkout Abandonment** (cross-level) | Letter | No level conditional |
| **Browse Abandonment** (cross-level) | Letter | No level conditional |
| **Order Confirmation** (cross-level) | Letter | No level conditional — uses `{{ event.order_number }}` |
| **Shipping Notification** (cross-level) | Letter | No level conditional — uses `{{ event.order_number }}` |
| **PP-Upsell** (cross-level) | Letter | Conditional on `last_purchase_pack_size`, not `avatar_level` |
| **FAQ/Objection** (cross-level) | Letter, Content Sections | No level conditional |
| **Sunset** (cross-level) | Letter | No level conditional |

---

## 4. Transactional vs Marketing Variables

### 4.1 From Address Separation

| Email Type | From Name | From Address | Reply-To | User Voice |
|------------|-----------|-------------|----------|------------|
| **Transactional** (Order Confirmation, Shipping, Out for Delivery, Arrived) | Lena from BrightKidCo | `orders@send.brightkidco.com` | `support@brightkidco.com` | Lena's voice |
| **Marketing** (Welcome, Cart, Browse, PP-Education, Winback, etc.) | Lena from BrightKidCo | `hello@send.brightkidco.com` | `support@brightkidco.com` | Lena's voice |

### 4.2 Variable Availability Per Email Type

| Variable | Transactional | Marketing | Notes |
|----------|---------------|-----------|-------|
| `{{ first_name }}` | ✅ Yes | ✅ Yes | Always use with `default: "there"` |
| `{{ event.order_number }}` | ✅ Yes | ❌ No | Only available in post-purchase event-triggered emails |
| `{% unsubscribe %}` | ✅ Yes | ✅ Yes | Required by CAN-SPAM in ALL commercial emails |
| `{{ manage_preferences }}` | ✅ Yes | ✅ Yes | Required in all emails |
| `{{ organization.url }}` | ✅ Yes | ✅ Yes | All emails |
| `{{ organization.url }}cart` | ❌ No (use order link) | ✅ Yes (cart/checkout flows) | Cart URL only in cart/browse/checkout abandonment |
| `{{ person.avatar_level }}` | ❌ May not be set | ✅ Yes | Level detection hasn't happened on Day 0 transactional |
| `{{ person.last_purchase_pack_size }}` | ✅ Yes (known from event) | ✅ Yes | Available if known from purchase history |
| `{{ person.child_age }}` | ❌ May not be set | ✅ Yes | Optional property |

### 4.3 Transactional-Specific Email Variables

| Flow | Available Event Variables | Fallback Strategy |
|------|--------------------------|-------------------|
| Order Confirmation | `{{ event.order_number }}`, `{{ event.shipping_address }}`, `{{ event.billing_address }}`, `{{ event.total_price }}`, `{{ event.line_items }}` | Use hardcoded "your order" if event data unavailable |
| Shipping Notification | `{{ event.order_number }}`, `{{ event.tracking_url }}`, `{{ event.tracking_number }}`, `{{ event.carrier }}` | Provide generic "we'll update you" text if tracking unavailable |
| Out for Delivery | `{{ event.order_number }}`, `{{ event.tracking_url }}` | Same as Shipping |
| Arrived & Welcome | `{{ event.order_number }}`, `{{ event.total_price }}` | Use generic welcome text on fallback |

### 4.4 Marketing-Specific Variables

| Flow | Variables | Notes |
|------|-----------|-------|
| Welcome Flow | `{{ person.avatar_level }}`, `{{ first_name }}`, `{{ person.signup_source }}` | Level drives full content segmentation |
| Cart Abandonment | `{{ organization.url }}cart`, `{{ first_name }}`, `{{ event.line_items }}` | Cart URL is the primary conversion trigger |
| Checkout Abandonment | `{{ organization.url }}cart`, `{{ first_name }}`, `{{ event.line_items }}` | Same as cart |
| Browse Abandonment | `{{ organization.url }}`, `{{ first_name }}`, `{{ event.product_id }}` | Link to browsed product |
| PP-Education D0-21 | `{{ first_name }}`, `{{ person.last_purchase_pack_size }}` | Education content, upsell conditionals |
| Winback Path A/B | `{{ first_name }}`, `{{ person.avatar_level }}` | Level drives segmentation |
| Extended Education | `{{ first_name }}`, `{{ person.avatar_level }}` | Full multi-level branching |
| Replenishment | `{{ first_name }}`, `{{ person.last_purchase_pack_size }}` | Pack-size-based offers |
| FAQ/Objection | `{{ first_name }}` | Cross-level, no level branching |
| Sunset | `{{ first_name }}` | Minimal variables, focus on re-engagement |
| PP-Level Detection | `{{ first_name }}` | No level available yet (this email detects it) |

---

## 5. Profile Properties Reference

### 5.1 Core Properties (DOC1 Section 19)

| Property | Type | Values | Source | Used In |
|----------|------|--------|--------|---------|
| `first_name` | string | Any | Pop-up / Checkout signup | All emails |
| `last_name` | string | Any | Pop-up / Checkout signup | Footer (address) |
| `email` | string | Valid email | Pop-up / Checkout signup | System |
| `avatar_level` | string | `"level1"` / `"level2"` / `"level3"` / `"general"` | Pop-up selection / PP-Level Detection | Level-specific flows |
| `child_age` | string (optional) | e.g. `"4"`, `"7"` | Post-purchase survey | Age-specific content |
| `signup_source` | string | `"popup"` / `"checkout"` / `"referral"` | Signup event | Welcome flow variant |
| `welcome_flow_completed` | boolean | `true` / `false` | Automation after Welcome E8 | Flow progression |
| `last_purchase_pack_size` | string | `"1pair"` / `"3+3"` / `"5+5"` | Shopify order event | Replenishment, upsell |
| `vip_customer` | boolean | `true` / `false` | 3+ orders automation | VIP-specific content |

### 5.2 Additional Properties (Diagnosis layer-08)

| Property | Type | Values | Source | Used In |
|----------|------|--------|--------|---------|
| `purchase_reason` | string | Free text | Post-purchase survey | All post-purchase flows |
| `label_sensitive` | boolean | `true` / `false` | GF sub-group B flag | Content tone (no ASD labels) |
| `rfm_recency` | integer (1-5) | 1-5 | Klaviyo RFM (Phase 2+) | Segment-based send decisions |
| `rfm_frequency` | integer (1-5) | 1-5 | Klaviyo RFM (Phase 2+) | Segment-based send decisions |
| `rfm_monetary` | integer (1-5) | 1-5 | Klaviyo RFM (Phase 2+) | Segment-based send decisions |

### 5.3 Example — Setting profile properties in Klaviyo

Profile properties are set via:
- **Pop-up form:** `avatar_level` via button clicks mapping to tags → then tag-to-property mapping
- **Checkout:** `first_name`, `last_name`, `email` via Shopify integration
- **PP-Level Detection email:** `avatar_level` via reply-based selection or click-based migration anchors
- **Post-purchase flows:** `last_purchase_pack_size` via Shopify order event; `child_age`, `purchase_reason` via survey
- **Automation:** `welcome_flow_completed`, `vip_customer`, behavior tags via flow triggers

---

## 6. Tags Reference

### 6.1 All Tags

| Tag | Category | Source | Used By |
|-----|----------|--------|---------|
| `avatar_level1` | Level | Pop-up button 1 / PP-Level Detection | Welcome, Extended Ed, Winback A/B |
| `avatar_level2` | Level | Pop-up button 2 / PP-Level Detection | Welcome, Extended Ed, Winback A/B |
| `avatar_level3` | Level | Pop-up button 3 / PP-Level Detection | Welcome, Extended Ed, Winback A/B |
| `avatar_general` | Level | Pop-up button 4 | Welcome GF, PP-Level Detection |
| `welcome_completed` | Behavior | Automation — after Welcome E8 | Flow management |
| `welcome_completed_no_purchase` | Behavior | Automation — after Welcome E8 | Flow management |
| `post_purchase_active` | Behavior | Automation — after Arrived email | Flow management |
| `at_risk_no_open` | Behavior | Automation — 0 opens in 30 days | Winback trigger |
| `inactive_60_days` | Behavior | Automation — 60 days no open | Winback trigger |
| `inactive_120_days` | Behavior | Automation — 120 days no open | Sunset trigger |
| `buyer_1pair` | Purchase | Shopify — Order event with 1 pair | Upsell, Replenishment |
| `buyer_3plus3` | Purchase | Shopify — Order event with 3+3 | Upsell, Replenishment |
| `buyer_5plus5` | Purchase | Shopify — Order event with 5+5 | Upsell, Replenishment |
| `repeat_buyer` | Purchase | Automation — 2nd purchase | VIP qualification |
| `vip_buyer` | Purchase | Automation — 3+ orders | VIP flow |

### 6.2 Tag-to-Profile Property Mapping

Tags should be synced to profile properties via Klaviyo automation:

```
Pop-up tag assigned → Immediately copy to person.avatar_level = tag value
  avatar_level1 → person.avatar_level = "level1"
  avatar_level2 → person.avatar_level = "level2"
  avatar_level3 → person.avatar_level = "level3"
  avatar_general → person.avatar_level = "general"

Purchase tag assigned → Immediately copy to person.last_purchase_pack_size
  buyer_1pair → person.last_purchase_pack_size = "1pair"
  buyer_3plus3 → person.last_purchase_pack_size = "3+3"
  buyer_5plus5 → person.last_purchase_pack_size = "5+5"

3+ orders → person.vip_customer = true
```

---

## 7. Conditional Block Syntax Patterns

### 7.1 Level-Based Content Switching (Used in Letter, Content Sections)

```html
{% if person.avatar_level == "level1" %}
  <!-- Level 1 content: Hopeful, Pre-K focused, mild sensory -->
  <p>Your child talks about potty training but doesn't do it. Pre-K is coming, and there's still time.</p>
{% elsif person.avatar_level == "level2" %}
  <!-- Level 2 content: Skeptical, science-first, BCBA-compatible -->
  <p>You've tried the sticker charts, timed sits, and everything in between. None of it addressed the body signal.</p>
{% elsif person.avatar_level == "level3" %}
  <!-- Level 3 content: Dignity-first, practical, no urgency -->
  <p>If you've moved past active training — that's not failure. Your child's nervous system processes signals differently.</p>
{% else %}
  <!-- General Fallback: Symptom-first, no labels, cross-level -->
  <p>Wherever you are on this journey — whether your child talks about potty training or shows no awareness at all — the core challenge is often the same.</p>
{% endif %}
```

### 7.2 Pack-Size Conditional (Used in Replenishment, Upsell)

```html
{% if person.last_purchase_pack_size == "1pair" %}
  <!-- Offer 3+3 upgrade -->
{% elsif person.last_purchase_pack_size == "3+3" %}
  <!-- Offer 5+5 upgrade -->
{% elsif person.last_purchase_pack_size == "5+5" %}
  <!-- Offer replenishment only -->
{% else %}
  <!-- General offer -->
{% endif %}
```

### 7.3 Welcome Flow Completed Check

```html
{% if person.welcome_flow_completed == false %}
  <!-- Continue welcome flow content -->
{% else %}
  <!-- Redirect to post-purchase content -->
{% endif %}
```

### 7.4 Multiple Condition Combination

```html
{% if person.avatar_level == "level1" and person.signup_source == "popup" %}
  <!-- L1 with discount awareness — Pattern B code-based approach -->
{% endif %}
```

### 7.5 CRM-Level Conditional (Phase 2+ RFM)

```html
{% if person.rfm_recency >= 4 and person.rfm_frequency >= 4 %}
  <!-- VIP treatment -->
{% endif %}
```

---

## 8. Template Code: Annotated Sections

### 8.1 Complete Email Shell with Klaviyo Variables

Below is the annotated email structure showing exactly where each Klaviyo variable is inserted. The component flow follows the Long-Form Educational pattern (Pattern A).

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>BrightKidCo</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;700&family=Fraunces:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Questrial&display=swap" rel="stylesheet">
  <!--[if mso]>
  <noscript><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml></noscript>
  <![endif]-->
  <!-- Klaviyo inline styles ... -->
</head>
<body>

<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:#FBF7F1;">
  <tr>
    <td align="center">
      <div style="max-width:420px; width:100%; margin:0 auto; background-color:#FBF7F1;">

        <!-- ════════════════════════════════════════════ -->
        <!-- PREHEADER  [KLAVIYO: {{ first_name }}]     -->
        <!-- ════════════════════════════════════════════ -->
        <div style="display:none; font-size:1px; line-height:1px; max-height:0; max-width:0; opacity:0; overflow:hidden; mso-hide:all;">
          {{ first_name | default: "there" }} — Intro teaser here
        </div>
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
          <tr>
            <td style="padding:6px 20px; font-size:11px; font-style:italic; color:#8A9B9D; background-color:#F6F2EA; text-align:center;">
              {{ first_name | default: "there" }} — Intro teaser here
            </td>
          </tr>
        </table>

        <!-- ════════════════════════════════════════════ -->
        <!-- HEADER  (no Klaviyo variables)              -->
        <!-- ════════════════════════════════════════════ -->
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
          <tr>
            <td align="center" style="padding:24px 20px 0;">
              <img src="https://brightkidco.com/assets/brightkidco-logo-v2.png"
                   alt="BrightKidCo" height="34" style="display:inline-block;" />
            </td>
          </tr>
        </table>

        <!-- ════════════════════════════════════════════ -->
        <!-- TITLEBLOCK  (no Klaviyo variables default)  -->
        <!-- ════════════════════════════════════════════ -->
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
          <tr>
            <td align="center" style="padding:34px 22px 0;">
              <span style="display:inline-block; background-color:#FFD866; padding:7px 14px; border-radius:999px; font-size:10.5px; font-weight:700; letter-spacing:1.5px; text-transform:uppercase; border:2px solid #1F2D2F; transform:rotate(-1.5deg); white-space:nowrap;">
                Badge · 01 of 03
              </span>
              <h1 style="font-size:40px; line-height:1; font-weight:700; margin:0; letter-spacing:-0.8px; font-family:'Fraunces',Georgia,serif; color:#1F2D2F;">
                Headline line 1<br/>
                <span style="background:linear-gradient(135deg,#2BAEB4 0%,#5DD07A 100%); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; color:transparent;">Headline line 2</span>
              </h1>
              <!-- OPTIONAL: first_name in subhead only for Welcome E1 -->
              <p style="font-size:17px; color:#4A6568; margin:14px 0 0; line-height:1.4; font-weight:500;">
                {{ first_name | default: "there" }}, subhead here
              </p>
            </td>
          </tr>
        </table>

        <!-- ════════════════════════════════════════════ -->
        <!-- BAND  (no Klaviyo variables)                -->
        <!-- ════════════════════════════════════════════ -->
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
          <tr>
            <td style="height:40px; background:linear-gradient(180deg,#FFFBF0 0%,#FFF6E2 100%); font-size:0; line-height:0;">&nbsp;</td>
          </tr>
        </table>

        <!-- ════════════════════════════════════════════ -->
        <!-- LETTER / BODY  [KLAVIYO: first_name,        -->
        <!--  avatar_level conditionals]                 -->
        <!-- ════════════════════════════════════════════ -->
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:#FFF6E2;">
          <tr>
            <td style="padding:4px 24px 28px; background-color:#FFF6E2;">

              <!-- Lead paragraph with first_name -->
              <p style="margin:0 0 14px; font-size:17px; color:#1F2D2F; font-weight:600; line-height:1.7;">
                Hi {{ first_name | default: "there" }}, lead paragraph here.
              </p>

              <!-- Level-conditional body content -->
              {% if person.avatar_level == "level1" %}
                <p style="margin:0 0 14px; font-size:15px; line-height:1.7; color:#4A6568;">
                  Level 1 specific body paragraph.
                </p>
              {% elsif person.avatar_level == "level2" %}
                <p style="margin:0 0 14px; font-size:15px; line-height:1.7; color:#4A6568;">
                  Level 2 specific body paragraph.
                </p>
              {% elsif person.avatar_level == "level3" %}
                <p style="margin:0 0 14px; font-size:15px; line-height:1.7; color:#4A6568;">
                  Level 3 specific body paragraph.
                </p>
              {% else %}
                <p style="margin:0 0 14px; font-size:15px; line-height:1.7; color:#4A6568;">
                  General Fallback body paragraph.
                </p>
              {% endif %}

              <!-- Generic body paragraphs (same for all levels) -->
              <p style="margin:0 0 14px; font-size:15px; line-height:1.7; color:#4A6568;">
                Generic paragraph shared across all segments.
              </p>

            </td>
          </tr>
        </table>

        <!-- ════════════════════════════════════════════ -->
        <!-- CONTENT SECTIONS (level-conditional)        -->
        <!-- ════════════════════════════════════════════ -->
        <!-- Quote card, mechanism blocks, etc. -->
        <!-- These sections contain level-conditional   -->
        <!-- content inside {% if %} blocks as needed.   -->

        <!-- ════════════════════════════════════════════ -->
        <!-- BAND → CTACLOSE                              -->
        <!-- ════════════════════════════════════════════ -->
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
          <tr>
            <td style="height:50px; background:linear-gradient(180deg,#EAF6F2 0%,#1F2D2F 100%); font-size:0; line-height:0;">&nbsp;</td>
          </tr>
        </table>

        <!-- ════════════════════════════════════════════ -->
        <!-- CTACLOSE  [KLAVIYO: {{ organization.url }}] -->
        <!-- ════════════════════════════════════════════ -->
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:#1F2D2F;">
          <tr>
            <td align="center" style="padding:20px 22px 44px; background-color:#1F2D2F;">
              <!-- Intro (optional first_name) -->
              <p style="font-size:14px; line-height:1.6; color:#B8CACD; margin:0 0 24px;">
                {{ first_name | default: "there" }} — CTA intro text here.
              </p>
              <!-- CTA Button with org URL -->
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" style="margin:0 auto;">
                <tr>
                  <td align="center" style="border-radius:999px; background:#D8F57C; padding:0;">
                    <a href="{{ organization.url }}" target="_blank"
                       style="display:inline-block; padding:17px 32px; background:#D8F57C; color:#1F2D2F; font-size:15.5px; font-weight:700; text-decoration:none; border-radius:999px;">
                      CTA Button Label
                    </a>
                  </td>
                </tr>
              </table>
              <!-- Fine print -->
              <p style="margin-top:16px; font-size:11.5px; color:#8A9B9D;">
                60-Day Calm Progress Guarantee
              </p>
            </td>
          </tr>
        </table>

        <!-- ════════════════════════════════════════════ -->
        <!-- SIGNOFF  [KLAVIYO: {{ first_name }} in P.S.]-->
        <!-- ════════════════════════════════════════════ -->
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:#1F2D2F; padding:0 22px 36px;">
          <tr>
            <td align="center">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:#1F2A2C; border:1.5px solid #2F3D40; border-radius:22px; overflow:hidden;">
                <tr><td style="padding:0; height:4px; background:linear-gradient(135deg,#2BAEB4 0%,#5DD07A 100%);">&nbsp;</td></tr>
                <tr>
                  <td style="padding:26px 24px 24px;">
                    <!-- Avatar + Name (no variables) ... -->
                    <!-- Signature (no variables) -->
                    <div style="padding-top:16px; padding-bottom:16px; border-top:1.5px dashed #3A4547; border-bottom:1.5px dashed #3A4547; margin-bottom:16px;">
                      <span style="font-family:'Caveat',cursive; font-size:42px; font-weight:500; color:#D8F57C;">Lena</span>
                    </div>
                    <!-- P.S. with first_name -->
                    <p style="margin:0; font-size:13px; line-height:1.65; color:#B8CACD; font-style:italic;">
                      <span style="color:#D8F57C; font-weight:700; font-style:normal;">P.S.</span>
                      {{ first_name | default: "there" }}, if you ever want to reply — I read every one.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>

        <!-- ════════════════════════════════════════════ -->
        <!-- BAND (ink → white)                           -->
        <!-- ════════════════════════════════════════════ -->
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
          <tr>
            <td style="height:40px; background:linear-gradient(180deg,#1F2D2F 0%,#FFFFFF 100%); font-size:0; line-height:0;">&nbsp;</td>
          </tr>
        </table>

        <!-- ════════════════════════════════════════════ -->
        <!-- OUTLINE  (optional first_name)               -->
        <!-- ════════════════════════════════════════════ -->
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:#FFFFFF; padding:18px 24px 0; text-align:center;">
          <tr>
            <td align="center" style="padding:18px 24px 28px; font-size:12.5px; color:#8A9B9D; font-style:italic; line-height:1.5;">
              {{ first_name | default: "there" }}, you can pause this series anytime.
            </td>
          </tr>
        </table>

        <!-- ════════════════════════════════════════════ -->
        <!-- FOOTER  [KLAVIYO: {% unsubscribe %},         -->
        <!--  {{ manage_preferences }}, org URLs]         -->
        <!-- ════════════════════════════════════════════ -->
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:#FFFFFF; padding:30px 24px; text-align:center;">
          <tr>
            <td align="center" style="background-color:#FFFFFF;">
              <!-- Tagline (static) -->
              <p style="font-family:'Fraunces',Georgia,serif; font-size:20px; font-style:italic; font-weight:500; color:#1F2D2F; letter-spacing:-0.2px; margin:0 0 14px;">
                Calm progress, one day at a time.
              </p>
              <!-- Reviews (static) -->
              <p style="font-size:11.5px; color:#8A9B9D; line-height:1.65; margin:0 auto 20px; max-width:340px;">
                Over 100,000 parents trust BrightKidCo · 16,511 reviews with 4.9★
              </p>
              <!-- Navigation links with org URLs -->
              <a href="{{ organization.url }}collections/all-products" style="font-size:14px; font-weight:500; color:#1F2D2F; text-decoration:none; display:inline-block; margin-bottom:14px;">Shop</a>
              <span style="color:#8A9B9D; font-size:12px; margin:0 6px;">·</span>
              <a href="{{ organization.url }}pages/real-parent-stories" style="font-size:14px; font-weight:500; color:#1F2D2F; text-decoration:none; display:inline-block; margin-bottom:14px;">Parent Stories</a>
              <span style="color:#8A9B9D; font-size:12px; margin:0 6px;">·</span>
              <a href="{{ organization.url }}pages/faq" style="font-size:14px; font-weight:500; color:#1F2D2F; text-decoration:none; display:inline-block; margin-bottom:14px;">FAQ</a>
              <span style="color:#8A9B9D; font-size:12px; margin:0 6px;">·</span>
              <a href="{{ organization.url }}pages/contact" style="font-size:14px; font-weight:500; color:#1F2D2F; text-decoration:none; display:inline-block; margin-bottom:14px;">Contact us</a>
              <!-- Social Icons (static) -->
              <!-- Klaviyo unsubscribe + preferences -->
              <p style="font-size:11.5px; color:#8A9B9D; line-height:1.65; margin:0 auto; max-width:340px;">
                {% unsubscribe %} · <a href="{{ manage_preferences | default: '#' }}" style="color:#1F2D2F; text-decoration:underline;">{{ manage_preferences | default: "Manage preferences" }}</a><br/>
                BrightKidCo Ltd · Berlin, Germany · hello@brightkidco.com
              </p>
              <!-- Gradient divider (static) -->
            </td>
          </tr>
        </table>

      </div>
    </td>
  </tr>
</table>

</body>
</html>
```

### 8.2 Complete Footer Block (Reusable Klaviyo Block)

The footer is saved as a reusable block in Klaviyo. This is the canonical footer block with all Klaviyo variables:

```html
<!-- FOOTER — Reusable Klaviyo Block -->
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:#FFFFFF; padding:30px 24px; text-align:center;">
  <tr>
    <td align="center" style="padding:0; background-color:#FFFFFF;">

      <p style="font-family:'Fraunces',Georgia,serif; font-size:20px; font-style:italic; font-weight:500; color:#1F2D2F; letter-spacing:-0.2px; margin:0 0 14px;">
        Calm progress, one day at a time.
      </p>

      <p style="font-size:11.5px; color:#8A9B9D; line-height:1.65; margin:0 auto 20px; max-width:340px;">
        Over 100,000 parents trust BrightKidCo &middot; 16,511 reviews with 4.9&star;
      </p>

      <a href="{{ organization.url }}collections/all-products" style="font-size:14px; font-weight:500; color:#1F2D2F; text-decoration:none; display:inline-block; margin-bottom:14px;">Shop</a>
      <span style="color:#8A9B9D; font-size:12px; margin:0 6px;">&middot;</span>
      <a href="{{ organization.url }}pages/real-parent-stories" style="font-size:14px; font-weight:500; color:#1F2D2F; text-decoration:none; display:inline-block; margin-bottom:14px;">Parent Stories</a>
      <span style="color:#8A9B9D; font-size:12px; margin:0 6px;">&middot;</span>
      <a href="{{ organization.url }}pages/faq" style="font-size:14px; font-weight:500; color:#1F2D2F; text-decoration:none; display:inline-block; margin-bottom:14px;">FAQ</a>
      <span style="color:#8A9B9D; font-size:12px; margin:0 6px;">&middot;</span>
      <a href="{{ organization.url }}pages/contact" style="font-size:14px; font-weight:500; color:#1F2D2F; text-decoration:none; display:inline-block; margin-bottom:14px;">Contact us</a>

      <p style="font-size:11.5px; color:#8A9B9D; line-height:1.65; margin:0 auto; max-width:340px;">
        {% unsubscribe %} &middot;
        <a href="{{ manage_preferences | default: '#' }}" style="color:#1F2D2F; text-decoration:underline;">
          {{ manage_preferences | default: "Manage preferences" }}
        </a><br/>
        BrightKidCo Ltd &middot; Berlin, Germany &middot; hello@brightkidco.com
      </p>

    </td>
  </tr>
</table>
```

---

## Appendix A: Variable Fallback Summary

| Variable | Primary Use | Fallback Text | All Contexts |
|----------|-------------|---------------|--------------|
| `{{ first_name }}` | Personalisation | `default: "there"` | All emails |
| `{{ event.order_number }}` | Order reference | None (hide block if empty) | Transactional only |
| `{% unsubscribe %}` | Unsubscribe link | Klaviyo-managed | All emails |
| `{{ manage_preferences }}` | Preference centre link | `default: "Manage preferences"` | All emails |
| `{{ organization.url }}` | Base shop URL | None (do not render link if empty) | All emails |
| `{{ person.avatar_level }}` | Content segmentation | None (use `{% else %}` block) | Level-specific flows |
| `{{ person.child_age }}` | Age content adaptation | None (omit age-specific section) | All flows with age content |
| `{{ person.last_purchase_pack_size }}` | Upsell/replenishment targeting | None (show general offer) | Upsell, Replenishment |
| `{{ person.vip_customer }}` | VIP content | None (show standard content) | VIP flows |

## Appendix B: Klaviyo Technical Setup

### DNS Records
| Record | Value |
|--------|-------|
| SPF | `v=spf1 include:spf.klaviyo.com ~all` |
| DKIM | 2 CNAME records (provided by Klaviyo) |
| DMARC | Start `p=none` → `p=quarantine` → `p=reject` |

### API Scopes
| Scope | Permission |
|-------|-----------|
| `flows:read/write` | Create and manage flows |
| `campaigns:read/write` | Create and manage campaigns |
| `templates:read/write` | Create and manage templates |
| `lists:read/write` | Create and manage segments/lists |
| `metrics:read` | Read analytics data |

### Shopify Integration
- "Added to Cart" metric requires manual snippet installation in `theme.liquid` (not automatic)
- Order events are automatically synced via Shopify-Klaviyo integration
- Product catalog sync required for event-triggered recommendation blocks

### From Addresses
| Type | From Address | Used In |
|------|-------------|---------|
| Transactional | `orders@send.brightkidco.com` | Order Confirmation, Shipping, Out for Delivery, Arrived |
| Marketing | `hello@send.brightkidco.com` | Welcome, Cart, Browse, PP-Education, Winback, all other flows |
| Reply-To (all) | `support@brightkidco.com` | All emails |

> **Warming note:** The `hello@send.brightkidco.com` address is the post-warming (week 6+) target. During weeks 1-2 domain warming, use `support@send.brightkidco.com` as the sole marketing from address to avoid splitting reputation signals. See [05-dns-authentication.md](05-dns-authentication.md) §4 for the full warming schedule.

---

*End of document — Klaviyo Template Variable Reference v1.0*
*All mappings verified against Giuliano-Demands.md Section 15, design-system components-primitives.md, and produced HTML emails.*
*For segment configuration, see `03-segment-configuration.md` in this directory.*
