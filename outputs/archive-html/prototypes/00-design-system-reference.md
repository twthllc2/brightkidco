# BrightKidCo Email Design System Reference

**Document:** 00-design-system-reference.md
**Project:** BrightKidCo — Body-Signal Learning Layer™ Training Underwear
**Purpose:** Single source of truth for HTML email prototypes across all 27 flows (~110 emails)
**Brand Voice Anchor:** Lena S. — Customer Support, Mom of two autistic sons
**Effective Date:** 2026-05-26
**Engine:** Email-safe HTML/CSS (tables, inline styles, MSO conditional comments)

---

## Table of Contents

1. [Color Palette](#1-color-palette)
2. [Typography](#2-typography)
3. [Spacing & Layout System](#3-spacing--layout-system)
4. [Containers & Backgrounds](#4-containers--backgrounds)
5. [Button Styles](#5-button-styles)
6. [Text Links](#6-text-links)
7. [Dividers & Rules](#7-dividers--rules)
8. [Header & Preheader](#8-header--preheader)
9. [Footer & Sign-Off](#9-footer--sign-off)
10. [Responsive Breakpoints](#10-responsive-breakpoints)
11. [Image Placeholder Specs](#11-image-placeholder-specs)
12. [Product Card Template](#12-product-card-template)
13. [Testimonial Block](#13-testimonial-block)
14. [Stat / Proof Block](#14-stat--proof-block)
15. [CTA Bar (Full-Width)](#15-cta-bar-full-width)
16. [Level Badge System](#16-level-badge-system)
17. [MSO Conditional Comments](#17-mso-conditional-comments)
18. [Complete Email Shell Template](#18-complete-email-shell-template)
19. [Accessibility Guidelines](#19-accessibility-guidelines)
20. [Quick Reference Cards](#20-quick-reference-cards)

---

## 1. Color Palette

### 1.1 Brand Colors

| Token | Hex | RGB | Usage |
|-------|-----|-----|-------|
| `--color-primary` | `#FF6B4A` | `rgb(255,107,74)` | Primary buttons, key CTAs, accent headers |
| `--color-secondary` | `#4A9BFF` | `rgb(74,155,255)` | Secondary buttons, text links, info blocks |
| `--color-tertiary` | `#5CC4A0` | `rgb(92,196,160)` | Success states, progress indicators, testimonials |
| `--color-accent` | `#FFB84A` | `rgb(255,184,74)` | Highlights, star ratings, warning banners |
| `--color-dark` | `#2D2B2E` | `rgb(45,43,46)` | Body text, headings |
| `--color-medium` | `#6B7280` | `rgb(107,114,128)` | Secondary text, metadata |
| `--color-light` | `#9CA3AF` | `rgb(156,163,175)` | Placeholder text, disabled states |
| `--color-border` | `#E5E7EB` | `rgb(229,231,235)` | Dividers, borders, rules |
| `--color-bg` | `#FFFFFF` | `rgb(255,255,255)` | Main email background |
| `--color-bg-warm` | `#FFF8F5` | `rgb(255,248,245)` | Alternate sections, callout blocks |
| `--color-bg-soft-blue` | `#F0F7FF` | `rgb(240,247,255)` | Education blocks, science callouts |
| `--color-bg-soft-green` | `#F0FDF4` | `rgb(240,253,244)` | Success messages, mini-wins |
| `--color-error` | `#EF4444` | `rgb(239,68,68)` | Error states, urgent notices |
| `--color-success` | `#10B981` | `rgb(16,185,129)` | Guarantee badges, positive signals |
| `--color-white` | `#FFFFFF` | `rgb(255,255,255)` | Button text on dark backgrounds |

### 1.2 Color Psychology & Brand Fit

| Color | Emotional Association | Why It Fits BrightKidCo |
|-------|----------------------|------------------------|
| Coral (#FF6B4A) | Warmth, energy, approachability | Counterbalances the clinical/medical feel; "bright" in BrightKidCo |
| Sky Blue (#4A9BFF) | Trust, clarity, calm | Essential for autism-parent audience — trust is the #1 currency |
| Mint (#5CC4A0) | Growth, renewal, gentle progress | Mirrors the "mini-wins" philosophy; no pressure growth |
| Gold (#FFB84A) | Optimism, warmth, value | Highlights hope without being pushy |
| Warm BG (#FFF8F5) | Nurturing, softness | Makes the email feel like a letter from a friend, not a brand |

### 1.3 Accessibility Contrast Ratios

| Combination | Ratio | WCAG |
|-------------|-------|------|
| Dark text (#2D2B2E) on White (#FFF) | 15.2:1 | AAA |
| Medium text (#6B7280) on White (#FFF) | 5.7:1 | AA |
| White text on Coral (#FF6B4A) | 4.6:1 | AA |
| White text on Blue (#4A9BFF) | 4.3:1 | AA |
| Coral text (#FF6B4A) on White (#FFF) | 4.6:1 | AA |
| Dark text on Warm BG (#FFF8F5) | 13.8:1 | AAA |

---

## 2. Typography

### 2.1 Font Stack

| Context | Font Stack | Fallback Rationale |
|---------|-----------|-------------------|
| **Headings** | `Georgia, 'Times New Roman', Times, serif` | Warm, trustworthy, readable at any size; serif feels substantive |
| **Body Text** | `Arial, 'Helvetica Neue', Helvetica, sans-serif` | Clean, universally supported, renders well on all email clients |
| **Sign-Off / Lena** | `Georgia, 'Times New Roman', Times, serif` | Distinguishes Lena's voice from body copy; feels personal |
| **Data / Stats** | `Arial, 'Helvetica Neue', Helvetica, sans-serif` | Clean numbers; serif for data looks dated |
| **Preheader** | `Arial, 'Helvetica Neue', Helvetica, sans-serif` | Matches body; invisible in most clients anyway |
| **Button Text** | `Arial, 'Helvetica Neue', Helvetica, sans-serif` | Bold sans-serif for readability on small screens |

### 2.2 Font Sizes

| Token | Desktop | Mobile | Context |
|-------|---------|--------|---------|
| `fs-hero` | 32px | 26px | Hero / main headline (rare — welcome E1 only) |
| `fs-heading-1` | 26px | 22px | Section headings |
| `fs-heading-2` | 22px | 20px | Sub-headings |
| `fs-heading-3` | 18px | 16px | Card/proof block titles |
| `fs-body` | 16px | 16px | **All body text** (never smaller than 16px on mobile) |
| `fs-body-small` | 14px | 14px | Metadata, footnotes, disclaimers, secondary info |
| `fs-button` | 16px | 16px | Button labels |
| `fs-signoff` | 15px | 15px | Lena sign-off block |
| `fs-preheader` | 10px | 10px | Hidden preheader text |

### 2.3 Font Weights

| Token | Weight | Context |
|-------|--------|---------|
| `fw-normal` | 400 | Body text |
| `fw-bold` | 700 | Headings, button text, emphasis |
| `fw-normal-signed` | 400 (italic) | Lena sign-off — rendered in Georgia italic |

### 2.4 Line Heights

| Context | Line Height | Notes |
|---------|-------------|-------|
| Body text | 1.6 (26px at 16px) | Comfortable reading |
| Headings | 1.3 | Tight enough for hierarchy |
| Button text | 1.2 | Single-line buttons |
| Bullet lists | 1.5 | Readable list items |

### 2.5 Typography HTML Snippets

**Heading 1:**
```html
<h1 style="font-family: Georgia, 'Times New Roman', Times, serif; font-size: 26px; font-weight: 700; line-height: 1.3; color: #2D2B2E; margin: 0 0 12px 0;">Your heading here</h1>
```

**Heading 2:**
```html
<h2 style="font-family: Georgia, 'Times New Roman', Times, serif; font-size: 22px; font-weight: 700; line-height: 1.3; color: #2D2B2E; margin: 0 0 10px 0;">Your sub-heading here</h2>
```

**Heading 3:**
```html
<h3 style="font-family: Georgia, 'Times New Roman', Times, serif; font-size: 18px; font-weight: 700; line-height: 1.3; color: #2D2B2E; margin: 0 0 8px 0;">Your card title here</h3>
```

**Body Text:**
```html
<p style="font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 16px; font-weight: 400; line-height: 1.6; color: #2D2B2E; margin: 0 0 16px 0;">Your body text here. This is the standard paragraph style for all BrightKidCo emails. Never go below 16px on any device.</p>
```

**Small Text:**
```html
<p style="font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 14px; font-weight: 400; line-height: 1.5; color: #6B7280; margin: 0 0 12px 0;">Secondary info, footnote, or disclaimer text.</p>
```

**Lena Sign-Off Text:**
```html
<p style="font-family: Georgia, 'Times New Roman', Times, serif; font-size: 15px; font-weight: 400; font-style: italic; line-height: 1.5; color: #2D2B2E; margin: 0 0 4px 0;">Lena</p>
<p style="font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 13px; font-weight: 400; line-height: 1.4; color: #6B7280; margin: 0;">Customer Support · Mom of two autistic sons</p>
```

---

## 3. Spacing & Layout System

### 3.1 Spacing Tokens

| Token | px | em (at 16px) | Context |
|-------|----|--------------|---------|
| `sp-xs` | 4px | 0.25em | Between inline elements |
| `sp-sm` | 8px | 0.5em | Tight stacking |
| `sp-md` | 16px | 1em | Default spacing between paragraphs |
| `sp-lg` | 24px | 1.5em | Between sections |
| `sp-xl` | 32px | 2em | Major section breaks |
| `sp-2xl` | 48px | 3em | Email top padding, major dividers |
| `sp-3xl` | 64px | 4em | Footer spacing from body |
| `sp-section` | 40px | 2.5em | Between different content blocks |

### 3.2 Email Padding System

| Area | Desktop | Mobile |
|------|---------|--------|
| Outer wrapper padding | 0 | 0 (full-width background) |
| Content area padding (left/right) | 40px | 20px |
| Content area top padding | 48px | 32px |
| Content area bottom padding | 48px | 32px |
| Section spacing within email | 40px | 32px |
| Paragraph bottom margin | 16px | 16px |

### 3.3 Cell Padding Standards (Inside Tables)

| Element | Padding |
|---------|---------|
| Button cell | 14px 32px (top/bottom left/right) |
| Product card | 16px |
| Testimonial block | 20px |
| Stat block | 16px 20px |
| Footer links | 4px 0 |
| Image cell | 0 (let image handle it) |

---

## 4. Containers & Backgrounds

### 4.1 Main Email Wrapper

```html
<!-- Email wrapper — 100% background -->
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #FFF5F0;">
  <tr>
    <td align="center" style="padding: 0;">
      <!--[if mso]>
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600"><tr><td>
      <![endif]-->
      
      <!-- Content container -->
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 600px; background-color: #FFFFFF; width: 100%;">
        <tr>
          <td style="padding: 48px 40px 48px 40px; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 16px; line-height: 1.6; color: #2D2B2E;">
            <!-- Email content goes here -->
          </td>
        </tr>
      </table>
      
      <!--[if mso]>
      </td></tr></table>
      <![endif]-->
    </td>
  </tr>
</table>
```

### 4.2 Warm Background Section

```html
<!-- Warm BG section callout -->
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
  <tr>
    <td style="background-color: #FFF8F5; padding: 24px 20px; border-radius: 8px;">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
        <tr>
          <td style="font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 16px; line-height: 1.6; color: #2D2B2E;">
            <!-- Callout content -->
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
```

### 4.3 Blue Science Callout (Mechanism Explanations)

```html
<!-- Science/education callout -->
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
  <tr>
    <td style="background-color: #F0F7FF; padding: 24px 20px; border-radius: 8px;">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
        <tr>
          <td style="font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 16px; line-height: 1.6; color: #2D2B2E;">
            <!-- Science content -->
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
```

### 4.4 Full-Width Banner Row

```html
<!-- Full-width banner (spans content area) -->
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
  <tr>
    <td style="padding: 0;">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
        <tr>
          <td style="background-color: #FF6B4A; padding: 24px 40px; text-align: center;">
            <p style="font-family: Georgia, 'Times New Roman', Times, serif; font-size: 18px; font-weight: 700; color: #FFFFFF; margin: 0 0 8px 0; line-height: 1.4;">Banner heading</p>
            <p style="font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 16px; color: #FFFFFF; margin: 0; line-height: 1.5; opacity: 0.9;">Banner subtext</p>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
```

### 4.5 Dos & Don'ts: Container Rules

| Do | Don't |
|----|-------|
| Use tables for layout (email standard) | Use divs for layout (inconsistent rendering) |
| Nest tables when needed | Exceed 4 levels of table nesting |
| Use `role="presentation"` on all layout tables | Use `role="presentation"` on content tables |
| Wrap Outlook in MSO comments | Use floats or flexbox |
| Set explicit widths on table cells | Rely on automatic width calculation |
| Use background-color on td elements | Use CSS background properties on table |

---

## 5. Button Styles

### 5.1 Primary Button (Coral)

```html
<!-- Primary CTA button -->
<table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center">
  <tr>
    <td align="center" style="border-radius: 6px; background-color: #FF6B4A;">
      <a href="{{cta_url}}" target="_blank" style="display: inline-block; padding: 14px 32px; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 16px; font-weight: 700; color: #FFFFFF; text-decoration: none; background-color: #FF6B4A; border-radius: 6px; border: 1px solid #FF6B4A; mso-hide: all;">
        See the options
      </a>
      <!--[if mso]>
      <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="{{cta_url}}" style="height:50px;v-text-anchor:middle;width:200px;" arcsize="12%" strokecolor="#FF6B4A" fillcolor="#FF6B4A">
        <w:anchorlock/>
        <center style="color:#FFFFFF;font-family:Arial,Helvetica,sans-serif;font-size:16px;font-weight:bold;">See the options</center>
      </v:roundrect>
      <![endif]-->
    </td>
  </tr>
</table>
```

**Available text variants (use these exact labels):**
- "See the options"
- "See how it works"
- "Learn about the mechanism"
- "Read their stories"
- "Understand the science"
- "Complete your order"
- "Return to checkout"
- "See your cart"
- "Start the 60-day trial"

### 5.2 Secondary Button (White / Outline)

```html
<!-- Secondary outlined button -->
<table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center">
  <tr>
    <td align="center" style="border-radius: 6px; background-color: #FFFFFF;">
      <a href="{{cta_url}}" target="_blank" style="display: inline-block; padding: 14px 32px; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 16px; font-weight: 700; color: #FF6B4A; text-decoration: none; background-color: #FFFFFF; border-radius: 6px; border: 2px solid #FF6B4A; mso-hide: all;">
        See how it works
      </a>
      <!--[if mso]>
      <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="{{cta_url}}" style="height:50px;v-text-anchor:middle;width:200px;" arcsize="12%" strokecolor="#FF6B4A" fillcolor="#FFFFFF">
        <w:anchorlock/>
        <center style="color:#FF6B4A;font-family:Arial,Helvetica,sans-serif;font-size:16px;font-weight:bold;">See how it works</center>
      </v:roundrect>
      <![endif]-->
    </td>
  </tr>
</table>
```

### 5.3 Text-Only CTA (Low-Pressure / Level 3)

```html
<!-- Low-pressure text link CTA (for Level 3 emails) -->
<table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center">
  <tr>
    <td align="center" style="padding: 8px 0;">
      <a href="{{cta_url}}" target="_blank" style="font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 16px; font-weight: 400; color: #4A9BFF; text-decoration: underline; text-underline-offset: 3px;">
        Read one family's story
      </a>
    </td>
  </tr>
</table>
```

### 5.4 Button Width Guidelines

| Context | Max Width | Notes |
|---------|-----------|-------|
| Desktop single CTA | 280px | Centered in content area |
| Mobile single CTA | 100% (full-width) | Stacks to full width at <480px |
| Side-by-side CTAs | 45% each | Two columns on desktop, stack on mobile |
| Text-only CTA | Auto | Never force full-width |

---

## 6. Text Links

### 6.1 Inline Text Links

```html
<!-- Standard inline link in body text -->
<a href="{{url}}" target="_blank" style="color: #4A9BFF; font-weight: 700; text-decoration: underline; text-underline-offset: 2px;">
  link text here
</a>
```

### 6.2 Lena Reply Link

```html
<!-- Reply-to-Lena link (sign-off block) -->
<a href="mailto:support@brightkidco.com" style="color: #4A9BFF; font-weight: 700; text-decoration: underline;">
  hit reply
</a>
```

### 6.3 Link Color Overrides

| Context | Link Color | Hover (where supported) |
|---------|-----------|-------------------------|
| Body text | `#4A9BFF` (blue) | `#3B82F6` |
| In colored section (coral bg) | `#FFFFFF` (white, underlined) | `#FFFFFF` |
| In colored section (blue bg) | `#FFFFFF` (white, underlined) | `#FFFFFF` |
| Footer links | `#6B7280` (medium gray) | `#4A9BFF` |
| Unsubscribe | `#9CA3AF` (light gray) | `#6B7280` |

---

## 7. Dividers & Rules

### 7.1 Standard Section Divider

```html
<!-- Section divider -->
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
  <tr>
    <td style="padding: 32px 0 0 0;">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
        <tr>
          <td style="border-bottom: 1px solid #E5E7EB; height: 1px; line-height: 1px; font-size: 1px;">&nbsp;</td>
        </tr>
      </table>
    </td>
  </tr>
</table>
```

### 7.2 Light Divider (Between Tight Sections)

```html
<!-- Light separator within a section -->
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
  <tr>
    <td style="padding: 16px 0;">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
        <tr>
          <td style="border-bottom: 1px solid #F0F0F0; height: 1px; line-height: 1px; font-size: 1px;">&nbsp;</td>
        </tr>
      </table>
    </td>
  </tr>
</table>
```

### 7.3 Colored Accent Divider

```html
<!-- Coral accent divider (for sign-off area or major section breaks) -->
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
  <tr>
    <td style="padding: 32px 0 16px 0;">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="80" align="left">
        <tr>
          <td style="border-bottom: 3px solid #FF6B4A; height: 3px; line-height: 3px; font-size: 1px;">&nbsp;</td>
        </tr>
      </table>
    </td>
  </tr>
</table>
```

### 7.4 Spacer (Empty Space)

```html
<!-- Vertical spacer — 24px -->
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
  <tr>
    <td style="height: 24px; line-height: 24px; font-size: 1px;">&nbsp;</td>
  </tr>
</table>
```

**Spacer height variants:**
- `sp-sm`: 8px
- `sp-md`: 16px
- `sp-lg`: 24px
- `sp-xl`: 32px
- `sp-2xl`: 48px
- `sp-3xl`: 64px

---

## 8. Header & Preheader

### 8.1 Hidden Preheader

```html
<!-- Hidden preheader — first element in email body -->
<div style="display: none; font-size: 1px; color: #FFFFFF; line-height: 1px; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; mso-hide: all;">
  Preheader text here — extends subject line. 80-100 characters recommended. Never repeat the subject line.
</div>
```

### 8.2 Logo Header (Standard)

```html
<!-- Logo header row -->
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
  <tr>
    <td align="center" style="padding: 0 0 32px 0;">
      <a href="https://brightkidco.com" target="_blank" style="text-decoration: none;">
        <img src="https://send.brightkidco.com/img/logo.png" alt="BrightKidCo" width="180" height="auto" style="display: block; border: 0; outline: 0; width: 180px; height: auto; max-width: 100%;" />
      </a>
    </td>
  </tr>
</table>
```

### 8.3 Logo with Lena Subtitle

```html
<!-- Logo + Lena subtitle (welcome emails, sign-off sections) -->
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
  <tr>
    <td align="center" style="padding: 0 0 24px 0;">
      <a href="https://brightkidco.com" target="_blank" style="text-decoration: none;">
        <img src="https://send.brightkidco.com/img/logo.png" alt="BrightKidCo" width="180" height="auto" style="display: block; border: 0; outline: 0; width: 180px; height: auto; max-width: 100%;" />
      </a>
      <p style="font-family: Georgia, 'Times New Roman', Times, serif; font-size: 14px; font-style: italic; color: #6B7280; margin: 8px 0 0 0;">
        Customer Support &middot; Mom of two autistic sons
      </p>
    </td>
  </tr>
</table>
```

### 8.4 Header Rules

| Rule | Detail |
|------|--------|
| Logo max width | 180px desktop, full-width mobile (responsive) |
| Lena subtitle | Only in welcome emails and sign-off sections |
| View in browser link | Top of email, 12px text above logo |
| Preheader char limit | 80-100 characters |
| Preheader positioning | Immediately after `<body>` tag, before any visible content |

---

## 9. Footer & Sign-Off

### 9.1 Full Footer Block

```html
<!-- Standard footer -->
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
  <tr>
    <td style="padding: 40px 0 0 0; border-top: 1px solid #E5E7EB;">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
        <tr>
          <td align="center" style="padding: 0 0 16px 0;">
            <p style="font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 12px; line-height: 1.5; color: #9CA3AF; margin: 0;">
              <a href="https://brightkidco.com" target="_blank" style="color: #6B7280; text-decoration: underline;">BrightKidCo</a>
              &nbsp;&middot;&nbsp;
              <a href="{{unsubscribe_url}}" target="_blank" style="color: #9CA3AF; text-decoration: underline;">Unsubscribe</a>
              &nbsp;&middot;&nbsp;
              <a href="https://brightkidco.com/privacy" target="_blank" style="color: #9CA3AF; text-decoration: underline;">Privacy</a>
            </p>
          </td>
        </tr>
        <tr>
          <td align="center" style="padding: 0 0 16px 0;">
            <p style="font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 12px; line-height: 1.5; color: #9CA3AF; margin: 0;">
              {{company_address}}
            </p>
          </td>
        </tr>
        <tr>
          <td align="center">
            <p style="font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 11px; line-height: 1.4; color: #D1D5DB; margin: 0;">
              You received this email because you signed up at BrightKidCo or made a purchase. If you'd rather not hear from us, you can <a href="{{unsubscribe_url}}" target="_blank" style="color: #9CA3AF; text-decoration: underline;">unsubscribe here</a>.
            </p>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
```

### 9.2 Footer with Social Links

```html
<!-- Footer with social icons -->
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
  <tr>
    <td align="center" style="padding: 32px 0 16px 0; border-top: 1px solid #E5E7EB;">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td style="padding: 0 8px;">
            <a href="https://facebook.com/brightkidco" target="_blank">
              <img src="https://send.brightkidco.com/img/social/fb.png" alt="Facebook" width="28" height="28" style="display: block; border: 0;" />
            </a>
          </td>
          <td style="padding: 0 8px;">
            <a href="https://instagram.com/brightkidco" target="_blank">
              <img src="https://send.brightkidco.com/img/social/ig.png" alt="Instagram" width="28" height="28" style="display: block; border: 0;" />
            </a>
          </td>
          <td style="padding: 0 8px;">
            <a href="https://pinterest.com/brightkidco" target="_blank">
              <img src="https://send.brightkidco.com/img/social/pin.png" alt="Pinterest" width="28" height="28" style="display: block; border: 0;" />
            </a>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
```

---

## 10. Responsive Breakpoints

### 10.1 Breakpoint Definitions

| Breakpoint | Target | Behavior |
|-----------|--------|----------|
| 600px+ | Desktop Outlook, Webmail | Full layout, 600px container |
| 480px–599px | Tablet, small desktop | Slight padding reduction |
| <480px | Mobile (iOS Mail, Gmail app, Android) | Full-width, stacked layout |

### 10.2 Mobile Media Queries

```html
<style type="text/css">
  @media only screen and (max-width: 600px) {
    .email-container { width: 100% !important; }
    .content-padding { padding-left: 20px !important; padding-right: 20px !important; }
    .mobile-full { width: 100% !important; display: block !important; }
    .mobile-hide { display: none !important; }
    .mobile-center { text-align: center !important; }
    .mobile-pad-top { padding-top: 24px !important; }
    .mobile-stack { display: block !important; width: 100% !important; }
  }
  
  @media only screen and (max-width: 480px) {
    h1 { font-size: 22px !important; }
    h2 { font-size: 20px !important; }
    h3 { font-size: 16px !important; }
    .button-text { font-size: 16px !important; }
    .hero-image { width: 100% !important; height: auto !important; }
  }
</style>
```

### 10.3 Responsive Two-Column Layout

```html
<!-- Two-column layout (stacks on mobile) -->
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
  <tr>
    <!-- Left column -->
    <td class="mobile-stack" width="50%" valign="top" style="padding: 0 10px 0 0;">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
        <tr>
          <td style="font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 16px; line-height: 1.6; color: #2D2B2E;">
            <!-- Left content -->
          </td>
        </tr>
      </table>
    </td>
    <!-- Right column -->
    <td class="mobile-stack" width="50%" valign="top" style="padding: 0 0 0 10px;">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
        <tr>
          <td style="font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 16px; line-height: 1.6; color: #2D2B2E;">
            <!-- Right content -->
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
```

### 10.4 Responsive Rules Summary

| Element | Desktop | <480px |
|---------|---------|--------|
| Content padding | 40px sides | 20px sides |
| Headings | 26px / 22px / 18px | 22px / 20px / 16px |
| Body text | 16px | 16px (never smaller) |
| Buttons | Fixed 280px max | Full-width |
| Two columns | Side by side | Stacked vertically |
| Images | Fixed width | max-width: 100% |
| Product cards | 2 per row | 1 per row, stacked |
| Logo | 180px | 140px |

---

## 11. Image Placeholder Specs

### 11.1 Image Sizing

| Image Type | Width | Height | Aspect Ratio | File Format | Max File Size |
|-----------|-------|--------|-------------|-------------|--------------|
| Hero banner | 600px | 300px | 2:1 | JPG | 150KB |
| Product image | 280px | 280px | 1:1 | PNG | 100KB |
| Avatar/icon | 60px | 60px | 1:1 | PNG | 30KB |
| Social icon | 28px | 28px | 1:1 | PNG | 5KB |
| Logo | 180px | auto | variable | PNG (transparent) | 40KB |
| Logo (mobile) | 140px | auto | variable | PNG (transparent) | 30KB |
| Divider graphic | 600px | 2px | variable | PNG | 5KB |
| Product bundle | 500px | 400px | 5:4 | JPG | 120KB |

### 11.2 Image HTML Template

```html
<!-- Standard product image with alt text -->
<img src="https://send.brightkidco.com/img/products/3-3-bundle.jpg" 
     alt="BrightKidCo Body-Signal Learning Layer 3+3 bundle — six pairs of training underwear"
     width="280" height="280" 
     style="display: block; width: 100%; max-width: 280px; height: auto; border: 0; outline: 0;" />
```

### 11.3 Alt Text Guidelines (V23 Compliance)

| Avatar Level | Alt Text Tone | Example |
|-------------|---------------|---------|
| Level 1 | Active, forward-looking | "Child exploring BrightKidCo underwear — first step toward body awareness" |
| Level 2 | Calm, sensory-aware | "BrightKidCo underwear tagless design — sensory-friendly for sensitive skin" |
| Level 3 | Reflective, dignity-forward | "Comfortable underwear designed for dignity — BrightKidCo's adaptive fit" |
| General | Inclusive, warm | "BrightKidCo Body-Signal Learning Layer — designed for nervous systems that process signals differently" |

**Alt text rules:**
- Never describe stock photos generically (e.g. "smiling mom and child")
- Always include "BrightKidCo" in product images
- Keep alt text under 125 characters
- Describe the functional benefit, not just the visual appearance
- Never use exclamation marks in alt text

---

## 12. Product Card Template

### 12.1 Product Card (Single)

```html
<!-- Single product card -->
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #FFFFFF; border: 1px solid #E5E7EB; border-radius: 8px;">
  <tr>
    <td style="padding: 16px;">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
        <tr>
          <td align="center" style="padding: 0 0 12px 0;">
            <img src="https://send.brightkidco.com/img/products/3-3-bundle.jpg" 
                 alt="BrightKidCo 3+3 Bundle — six pairs of training underwear"
                 width="240" height="240"
                 style="display: block; width: 100%; max-width: 240px; height: auto; border: 0;" />
          </td>
        </tr>
        <tr>
          <td style="padding: 0 0 8px 0;">
            <h3 style="font-family: Georgia, 'Times New Roman', Times, serif; font-size: 18px; font-weight: 700; color: #2D2B2E; margin: 0; line-height: 1.3;">
              3+3 Bundle
            </h3>
          </td>
        </tr>
        <tr>
          <td style="padding: 0 0 8px 0;">
            <p style="font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 14px; line-height: 1.5; color: #6B7280; margin: 0;">
              Six pairs of Body-Signal Learning Layer&trade; training underwear
            </p>
          </td>
        </tr>
        <tr>
          <td style="padding: 0 0 12px 0;">
            <p style="font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 18px; font-weight: 700; color: #2D2B2E; margin: 0;">
              $79.99
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center">
              <tr>
                <td align="center" style="border-radius: 6px; background-color: #FF6B4A;">
                  <a href="{{add_to_cart_url}}" target="_blank" style="display: inline-block; padding: 12px 28px; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 16px; font-weight: 700; color: #FFFFFF; text-decoration: none; background-color: #FF6B4A; border-radius: 6px; border: 1px solid #FF6B4A; mso-hide: all;">
                    Add to cart
                  </a>
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

### 12.2 Product Offer Grid (3+3 vs 1 Pair — Level 3 Usage)

```html
<!-- Two-product comparison grid (stacks on mobile) -->
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
  <tr>
    <!-- 3+3 Bundle -->
    <td class="mobile-stack" width="50%" valign="top" style="padding: 0 8px 0 0;">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #FFFFFF; border: 1px solid #E5E7EB; border-radius: 8px;">
        <tr>
          <td style="padding: 16px; text-align: center;">
            <p style="font-family: Georgia, 'Times New Roman', Times, serif; font-size: 16px; font-weight: 700; color: #2D2B2E; margin: 0 0 4px 0;">3+3 Bundle</p>
            <p style="font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 14px; color: #6B7280; margin: 0 0 8px 0;">Best value</p>
            <p style="font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 20px; font-weight: 700; color: #2D2B2E; margin: 0 0 12px 0;">$79.99</p>
            <a href="{{url}}" target="_blank" style="font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 14px; font-weight: 700; color: #FF6B4A; text-decoration: underline;">See details</a>
          </td>
        </tr>
      </table>
    </td>
    <!-- 1 Pair -->
    <td class="mobile-stack" width="50%" valign="top" style="padding: 0 0 0 8px;">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #F0F7FF; border: 1px solid #DBEAFE; border-radius: 8px;">
        <tr>
          <td style="padding: 16px; text-align: center;">
            <p style="font-family: Georgia, 'Times New Roman', Times, serif; font-size: 16px; font-weight: 700; color: #2D2B2E; margin: 0 0 4px 0;">1 Pair</p>
            <p style="font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 14px; color: #6B7280; margin: 0 0 8px 0;">Try one first</p>
            <p style="font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 20px; font-weight: 700; color: #2D2B2E; margin: 0 0 12px 0;">$34.99</p>
            <a href="{{url}}" target="_blank" style="font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 14px; font-weight: 700; color: #4A9BFF; text-decoration: underline;">See details</a>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
```

---

## 13. Testimonial Block

### 13.1 Standard Testimonial

```html
<!-- Customer testimonial block -->
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
  <tr>
    <td style="background-color: #FFF8F5; border-left: 4px solid #FF6B4A; padding: 20px; border-radius: 0 8px 8px 0;">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
        <tr>
          <td style="padding: 0 0 8px 0;">
            <p style="font-family: Georgia, 'Times New Roman', Times, serif; font-size: 16px; font-style: italic; line-height: 1.6; color: #2D2B2E; margin: 0;">
              "{{testimonial_text}}"
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <p style="font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 14px; font-weight: 700; color: #6B7280; margin: 0;">
              &mdash; {{parent_name}}, mom of {{child_age}}-year-old
            </p>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
```

### 13.2 Testimonial with Avatar Image

```html
<!-- Testimonial with photo -->
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
  <tr>
    <td style="background-color: #F0FDF4; border-radius: 8px; padding: 20px;">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
        <tr>
          <td width="60" valign="top" style="padding: 0 16px 0 0;">
            <img src="https://send.brightkidco.com/img/testimonials/avatar.jpg" 
                 alt="BrightKidCo parent community member" 
                 width="60" height="60" 
                 style="display: block; width: 60px; height: 60px; border-radius: 50%; border: 0;" />
          </td>
          <td valign="top">
            <p style="font-family: Georgia, 'Times New Roman', Times, serif; font-size: 15px; font-style: italic; line-height: 1.6; color: #2D2B2E; margin: 0 0 8px 0;">
              "{{testimonial_text}}"
            </p>
            <p style="font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 13px; font-weight: 700; color: #6B7280; margin: 0;">
              &mdash; {{parent_name}}
            </p>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
```

### 13.3 Testimonial Rules by Avatar Level

| Level | Tone | Length | Style |
|-------|------|--------|-------|
| Level 1 | Short, encouraging | 3-8 sentences | Focus on "it clicked" moments |
| Level 2 | Detailed, process-oriented | 10-15 sentences | Focus on mechanism understanding |
| Level 3 | Long, raw, unpolished | 12-18 sentences | Focus on dignity, late-training stories |
| General | Balanced | 4-6 sentences | Inclusive, symptom-focused |

---

## 14. Stat / Proof Block

```html
<!-- Stat block with data -->
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
  <tr>
    <td style="background-color: #F0F7FF; border-radius: 8px; padding: 24px 20px; text-align: center;">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center">
        <tr>
          <td style="padding: 0 0 4px 0;">
            <p style="font-family: Georgia, 'Times New Roman', Times, serif; font-size: 36px; font-weight: 700; color: #4A9BFF; margin: 0; line-height: 1.1;">
              49%
            </p>
          </td>
        </tr>
        <tr>
          <td style="padding: 0 0 8px 0;">
            <p style="font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 16px; font-weight: 700; color: #2D2B2E; margin: 0; line-height: 1.4;">
              of autistic 4-5 year olds<br/>aren't toilet trained
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <p style="font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 13px; color: #6B7280; margin: 0;">
              <em>Source: SPARK study (Wiggins et al., J Autism Dev Disord)</em>
            </p>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
```

**Stat block color variants:**

| Variant | BG Color | Number Color | Use Case |
|---------|----------|-------------|----------|
| Blue (standard) | `#F0F7FF` | `#4A9BFF` | SPARK stat, science data |
| Coral (urgency) | `#FFF8F5` | `#FF6B4A` | Deadline pressure, timeline stats |
| Green (growth) | `#F0FDF4` | `#10B981` | Success rates, mini-wins count |

---

## 15. CTA Bar (Full-Width)

```html
<!-- Full-width CTA bar section -->
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
  <tr>
    <td style="padding: 32px 0 0 0;">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #FF6B4A; border-radius: 8px;">
        <tr>
          <td style="padding: 32px 24px; text-align: center;">
            <p style="font-family: Georgia, 'Times New Roman', Times, serif; font-size: 20px; font-weight: 700; color: #FFFFFF; margin: 0 0 8px 0; line-height: 1.3;">
              60 days to know if it fits your kid
            </p>
            <p style="font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 16px; color: #FFFFFF; margin: 0 0 20px 0; line-height: 1.5; opacity: 0.9;">
              No pressure. Your judgment either way.
            </p>
            <!-- Button inside colored section -->
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center">
              <tr>
                <td align="center" style="border-radius: 6px; background-color: #FFFFFF;">
                  <a href="{{cta_url}}" target="_blank" style="display: inline-block; padding: 14px 32px; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 16px; font-weight: 700; color: #FF6B4A; text-decoration: none; background-color: #FFFFFF; border-radius: 6px; border: 1px solid #FFFFFF;">
                    See the options
                  </a>
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

---

## 16. Level Badge System

For internal/prototype reference only — NEVER shown in email copy (V4: never sound like marketing).

```html
<!-- Invisible level marker for internal development tracking -->
<!--[if !mso]><!-->
<div style="display: none; height: 0; line-height: 0;">
  <!-- avatar_level1 / level2 / level3 / general -->
</div>
<!--<![endif]-->
```

**Level variant color mapping (for internal design reference only):**

| Level | Design Accent Color | BG Section | Tone |
|-------|-------------------|------------|------|
| Level 1 (Sarah) | Coral `#FF6B4A` | `#FFF8F5` | Optimistic but grounded |
| Level 2 (Lisa) | Blue `#4A9BFF` | `#F0F7FF` | Clinical warmth |
| Level 3 (Maria) | Mint `#5CC4A0` | `#F0FDF4` | Quiet warmth + clinical reality |
| General Fallback | Gold `#FFB84A` | `#FFFBEB` | Inclusive warmth |

---

## 17. MSO Conditional Comments

### 17.1 Standard Outlook Wrapper

```html
<!--[if mso]>
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600" align="center"><tr><td>
<![endif]-->

<!-- Content here -->

<!--[if mso]>
</td></tr></table>
<![endif]-->
```

### 17.2 Outlook-Specific Button (VML Rendering)

```html
<!-- VML button for Outlook desktop -->
<!--[if mso]>
<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" 
             xmlns:w="urn:schemas-microsoft-com:office:word" 
             href="{{cta_url}}" 
             style="height:50px;v-text-anchor:middle;width:220px;" 
             arcsize="12%" 
             strokecolor="#FF6B4A" 
             fillcolor="#FF6B4A">
  <w:anchorlock/>
  <center style="color:#FFFFFF;font-family:Arial,Helvetica,sans-serif;font-size:16px;font-weight:bold;">
    See the options
  </center>
</v:roundrect>
<![endif]-->
```

### 17.3 Outlook Conditional Classes

| Class / Attribute | Purpose |
|-------------------|---------|
| `mso-hide: all` | Hide elements from Outlook (e.g. hidden preheader) |
| `mso-line-height-rule: exactly` | Fix Outlook line height rendering |
| `mso-table-lspace: 0; mso-table-rspace: 0` | Remove table cell spacing in Outlook |
| `v:roundrect` | Rounded buttons in Outlook |
| `<!--[if mso]>` | Outlook-only content wrapper |
| `<!--[if !mso]><!-->` | Non-Outlook content wrapper |
| `w:anchorlock` | Prevent Outlook link wrapping |

---

## 18. Complete Email Shell Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="format-detection" content="telephone=no" />
  <meta name="x-apple-disable-message-reformatting" />
  <title>BrightKidCo</title>
  <!--[if mso]>
  <noscript>
    <xml>
      <o:OfficeDocumentSettings>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
  </noscript>
  <![endif]-->
  <style type="text/css">
    /* Reset */
    body, table, td, p, a, li, blockquote {
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
    }
    table, td {
      mso-table-lspace: 0pt;
      mso-table-rspace: 0pt;
      border-collapse: collapse;
    }
    img {
      -ms-interpolation-mode: bicubic;
    }
    
    /* Responsive */
    @media only screen and (max-width: 600px) {
      .email-container { width: 100% !important; }
      .content-padding { padding-left: 20px !important; padding-right: 20px !important; }
      .mobile-full { width: 100% !important; display: block !important; }
      .mobile-hide { display: none !important; }
      .mobile-center { text-align: center !important; }
      .mobile-stack { display: block !important; width: 100% !important; }
    }
    @media only screen and (max-width: 480px) {
      h1 { font-size: 22px !important; }
      h2 { font-size: 20px !important; }
      h3 { font-size: 16px !important; }
    }
    
    /* Outlook fix */
    .ExternalClass p, .ExternalClass span, .ExternalClass td { line-height: 100%; }
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #FFF5F0; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;">
  
  <!-- Hidden preheader -->
  <div style="display: none; font-size: 1px; color: #FFF5F0; line-height: 1px; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; mso-hide: all;">
    Preheader text — extends subject line. 80-100 characters.
  </div>
  
  <!-- Email wrapper -->
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #FFF5F0;">
    <tr>
      <td align="center" style="padding: 0;">
        
        <!--[if mso]>
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600" align="center"><tr><td>
        <![endif]-->
        
        <!-- Main content container -->
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" class="email-container" style="max-width: 600px; background-color: #FFFFFF; width: 100%;">
          <tr>
            <td class="content-padding" style="padding: 48px 40px 48px 40px;">
              
              <!-- LOGO -->
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                  <td align="center" style="padding: 0 0 32px 0;">
                    <a href="https://brightkidco.com" target="_blank" style="text-decoration: none;">
                      <img src="https://send.brightkidco.com/img/logo.png" alt="BrightKidCo" width="180" style="display: block; border: 0; width: 180px; max-width: 100%; height: auto;" />
                    </a>
                  </td>
                </tr>
              </table>
              
              <!-- =========== EMAIL CONTENT STARTS HERE =========== -->
              
              <!-- Heading -->
              <h1 style="font-family: Georgia, 'Times New Roman', Times, serif; font-size: 26px; font-weight: 700; line-height: 1.3; color: #2D2B2E; margin: 0 0 16px 0;">
                Email heading goes here
              </h1>
              
              <!-- Body -->
              <p style="font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 16px; line-height: 1.6; color: #2D2B2E; margin: 0 0 16px 0;">
                Body paragraph — observation, validation, or mechanism text. Never use exclamation marks in body copy.
              </p>
              
              <!-- CTA Button -->
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" style="padding: 8px 0 24px 0;">
                <tr>
                  <td align="center" style="border-radius: 6px; background-color: #FF6B4A;">
                    <a href="{{cta_url}}" target="_blank" style="display: inline-block; padding: 14px 32px; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 16px; font-weight: 700; color: #FFFFFF; text-decoration: none; background-color: #FF6B4A; border-radius: 6px; border: 1px solid #FF6B4A; mso-hide: all;">
                      See the options
                    </a>
                    <!--[if mso]>
                    <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="{{cta_url}}" style="height:50px;v-text-anchor:middle;width:200px;" arcsize="12%" strokecolor="#FF6B4A" fillcolor="#FF6B4A">
                      <w:anchorlock/>
                      <center style="color:#FFFFFF;font-family:Arial,Helvetica,sans-serif;font-size:16px;font-weight:bold;">See the options</center>
                    </v:roundrect>
                    <![endif]-->
                  </td>
                </tr>
              </table>
              
              <!-- =========== EMAIL CONTENT ENDS HERE =========== -->
              
              <!-- LENA SIGN-OFF -->
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                  <td style="padding: 32px 0 0 0; border-top: 1px solid #E5E7EB;">
                    <p style="font-family: Georgia, 'Times New Roman', Times, serif; font-size: 15px; font-style: italic; line-height: 1.6; color: #2D2B2E; margin: 0 0 4px 0;">
                      If your child is anywhere on this curve — that's normal here.
                    </p>
                    <p style="font-family: Georgia, 'Times New Roman', Times, serif; font-size: 15px; font-style: italic; line-height: 1.5; color: #2D2B2E; margin: 0 0 4px 0;">
                      Lena
                    </p>
                    <p style="font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 13px; line-height: 1.4; color: #6B7280; margin: 0 0 8px 0;">
                      Customer Support &middot; Mom of two autistic sons
                    </p>
                    <p style="font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 13px; line-height: 1.4; color: #6B7280; margin: 0;">
                      <a href="mailto:support@brightkidco.com" style="color: #4A9BFF; text-decoration: underline;">hit reply</a> &mdash; you'll get me, not a bot.
                    </p>
                  </td>
                </tr>
              </table>
              
            </td>
          </tr>
          
          <!-- FOOTER -->
          <tr>
            <td style="padding: 0 40px 32px 40px;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                  <td align="center" style="padding: 16px 0 0 0; border-top: 1px solid #E5E7EB;">
                    <p style="font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 12px; line-height: 1.5; color: #9CA3AF; margin: 0;">
                      <a href="https://brightkidco.com" target="_blank" style="color: #6B7280; text-decoration: underline;">BrightKidCo</a>
                      &nbsp;&middot;&nbsp;
                      <a href="{{unsubscribe_url}}" target="_blank" style="color: #9CA3AF; text-decoration: underline;">Unsubscribe</a>
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
        
        <!--[if mso]>
        </td></tr></table>
        <![endif]-->
        
      </td>
    </tr>
  </table>
  
</body>
</html>
```

---

## 19. Accessibility Guidelines

### 19.1 Color Contrast Minimums

| Element | Foreground | Background | Ratio | Level |
|---------|-----------|------------|-------|-------|
| Body text | `#2D2B2E` | `#FFFFFF` | 15.2:1 | AAA |
| Body text | `#2D2B2E` | `#FFF8F5` | 13.8:1 | AAA |
| Body text | `#2D2B2E` | `#F0F7FF` | 14.1:1 | AAA |
| Secondary text | `#6B7280` | `#FFFFFF` | 5.7:1 | AA |
| Button (white text) | `#FFFFFF` | `#FF6B4A` | 4.6:1 | AA |
| Button (outline text) | `#FF6B4A` | `#FFFFFF` | 4.6:1 | AA |
| Text link (blue) | `#4A9BFF` | `#FFFFFF` | 4.3:1 | AA |
| Footer links | `#9CA3AF` | `#FFFFFF` | 2.7:1 | ❌ Suppressed intentionally |

### 19.2 Accessibility Checklist

| Item | Requirement |
|------|-------------|
| All images have alt text | Yes — every `img` tag must have `alt=""` attribute |
| Meaningful images have descriptive alt | Yes — see §11.3 |
| Decorative images have empty alt (`alt=""`) | Yes — spacers and dividers |
| Color is not the only differentiator | Links have underline in addition to color |
| Font size minimum | 16px on all devices — never smaller for body text |
| Link text is descriptive | "See the options" not "click here" |
| Table role="presentation" on layout tables | Yes — all layout tables are presentational |
| Heading hierarchy respected | h1 → h2 → h3 (never skip levels) |
| Sufficient touch target size | Buttons minimum 44px height (14px padding top+bottom on 16px text) |

---

## 20. Quick Reference Cards

### 20.1 Color Palette Card

```
PRIMARY      #FF6B4A    rgb(255,107,74)    Coral
SECONDARY    #4A9BFF    rgb(74,155,255)    Sky Blue
TERTIARY     #5CC4A0    rgb(92,196,160)    Mint
ACCENT       #FFB84A    rgb(255,184,74)    Gold

DARK         #2D2B2E    rgb(45,43,46)      Body text
MEDIUM       #6B7280    rgb(107,114,128)   Secondary text
LIGHT        #9CA3AF    rgb(156,163,175)   Placeholder
BORDER       #E5E7EB    rgb(229,231,235)   Dividers

BG-WHITE     #FFFFFF    rgb(255,255,255)   Main bg
BG-WARM      #FFF8F5    rgb(255,248,245)   Warm sections
BG-BLUE      #F0F7FF    rgb(240,247,255)   Science blocks
BG-GREEN     #F0FDF4    rgb(240,253,244)   Success/Wins
```

### 20.2 Typography Card

```
HEADINGS:   Georgia, 'Times New Roman', Times, serif
BODY/SANS:  Arial, 'Helvetica Neue', Helvetica, sans-serif

SIZES:
  h1: 26px (22px mobile)
  h2: 22px (20px mobile)
  h3: 18px (16px mobile)
  body: 16px (never smaller)
  small: 14px
  signoff: 15px Georgia italic
  button: 16px bold
```

### 20.3 Spacing Card

```
Between paragraphs:  16px
Between sections:    32px
Content padding:     40px sides (20px mobile)
Top/bottom pad:      48px (32px mobile)
Button padding:      14px top/bottom, 32px left/right
```

### 20.4 Button Behavior Card

```
PRIMARY:    Coral bg (#FF6B4A), white text, radius 6px
SECONDARY:  White bg, coral border (2px), coral text, radius 6px
TEXT-ONLY:  Blue text (#4A9BFF), underlined, no bg

DESKTOP:    Max 280px wide, centered
MOBILE:     Full-width at <480px

OUTLOOK:    VML roundrect with arcsize=12%
```

### 20.5 Component Library Index

| Component | Section | File Snippet |
|-----------|---------|-------------|
| Email shell (complete) | §18 | Full template |
| Primary button | §5.1 | `button-primary` |
| Secondary button | §5.2 | `button-secondary` |
| Text-only CTA | §5.3 | `button-text-link` |
| Standard section divider | §7.1 | `divider-standard` |
| Coral accent divider | §7.3 | `divider-accent` |
| Product card | §12.1 | `product-card` |
| Product grid (2-up) | §12.2 | `product-grid` |
| Testimonial | §13.1 | `testimonial-block` |
| Testimonial + avatar | §13.2 | `testimonial-avatar` |
| Stat block | §14 | `stat-block` |
| CTA bar (colored) | §15 | `cta-bar` |
| Warm callout section | §4.2 | `section-warm` |
| Blue science callout | §4.3 | `section-science` |
| Footer full | §9.1 | `footer-standard` |
| Footer with social | §9.2 | `footer-social` |
| Logo header | §8.2 | `header-logo` |
| Logo + Lena subtitle | §8.3 | `header-lena` |
| Hidden preheader | §8.1 | `hidden-preheader` |
| Outlook container | §17.1 | `mso-wrapper` |
| Outlook VML button | §17.2 | `mso-button` |
| Two-column layout | §10.3 | `two-column` |
| Spacer | §7.4 | `spacer-{size}` |
| Guarantee badge | §14 (stat) | `stat-block-guarantee` |

---

*End of BrightKidCo Design System Reference v1.0*
*Use this document as the single source of truth for all email prototype HTML/CSS across all 27 flows.*
*Update this document when design tokens change — never update tokens in individual email files.*
