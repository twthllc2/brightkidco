# BrightKidCo Design System Reference

> **Document:** 00-design-system-reference.md
> **Project:** BrightKidCo (BKC) — Body-Signal Learning Layer™ Training Underwear
> **Purpose:** Single source of truth for ALL email prototype builders. Every operator agent building HTML emails references this document for brand constants, component patterns, tonality rules, and implementation notes.
> **Status:** v1.0 — Extracted from strategy docs (DOC-01–08), popup strategy (S04-C), segmentation strategy (S03-B), and Giuliano's React email prototypes
> **Generated:** 2026-05-26

---

## TABLE OF CONTENTS

1. [Brand Constants](#1-brand-constants)
   - 1.1 Color Palette (Primary)
   - 1.2 Color Palette (Giuliano's Design System)
   - 1.3 Font Specifications
   - 1.4 Spacing & Layout
   - 1.5 Pricing & Offer Constants
   - 1.6 Social & Brand Constants
2. [Email Structure Patterns](#2-email-structure-patterns)
   - 2.1 Email Shell / Wrapper
   - 2.2 Preheader Pattern
   - 2.3 Header Pattern (Logo)
   - 2.4 Body Section Pattern / Color Chapters
   - 2.5 Gradient Transition Bands
   - 2.6 CTA Section Pattern (Dark)
   - 2.7 Signoff Pattern (Lena)
   - 2.8 Out Line (Unsubscribe) Pattern
   - 2.9 Footer Pattern
3. [Component Library](#3-component-library)
   - 3.1 Header (Logo Bar)
   - 3.2 Image Placeholder Frame
   - 3.3 Framed Image Full
   - 3.4 Title Block
   - 3.5 Part / Sticker Badge
   - 3.6 Letter (Paragraph Block)
   - 3.7 Eyebrow
   - 3.8 Section H2
   - 3.9 CTA Button (Pill)
   - 3.10 Code Block (Discount Code)
   - 3.11 Reminder Bar
   - 3.12 Product Showcase — Full (Hero Card)
   - 3.13 Product Showcase — Medium (Inline Card)
   - 3.14 Product Showcase — Soft (Gentle Mention)
   - 3.15 Comparison Cards (Pull-ups vs BSL)
   - 3.16 Creed / Sticker Row
4. [Avatar Level Tonality Guide](#4-avatar-level-tonality-guide)
   - 4.1 Level 1 — Sarah (Verbal, Pre-K Driven)
   - 4.2 Level 2 — Lisa (Mixed Verbal, Method-Cycling)
   - 4.3 Level 3 — Maria (Non-Verbal, Dignity-First)
   - 4.4 General Fallback (Cross-Level)
   - 4.5 Tonality Constants Cross-Level Matrix
5. [Pricing Display Specs](#5-pricing-display-specs)
   - 5.1 Offer Matrix Per Level
   - 5.2 Price Display Formatting
   - 5.3 Product Feature Pills
6. [Voice Rules Summary](#6-voice-rules-summary)
   - 6.1 Lena's Identity
   - 6.2 The OVMP Framework
   - 6.3 Universal Forbidden Language
   - 6.4 Education/Promotion Ratio
7. [Image Placeholder Conventions](#7-image-placeholder-conventions)
   - 7.1 Placeholder Frame Format
   - 7.2 Standard Image Types
8. [Mobile vs Desktop Differences](#8-mobile-vs-desktop-differences)
9. [Klaviyo Implementation Notes](#9-klaviyo-implementation-notes)
   - 9.1 Tag Architecture
   - 9.2 Profile Properties
   - 9.3 Flow Routing Rules
   - 9.4 Sending Config

---

## 1. BRAND CONSTANTS

### 1.1 Color Palette (Primary)

These are the primary brand colors from the popup strategy and brand verification (DOC-06, L38, S04-C §2):

| Name | Hex | Usage | Source |
|------|-----|-------|--------|
| **Brand Green** | `#039902` | CTAs, accents, primary button BG | L38 §6, DOC6 §5 |
| **Mint** | `#DBFFCD` | Highlight boxes, soft backgrounds | L38 §6, DOC6 §5 |
| **Cream** | `#FBF7EB` | Card backgrounds, email BG | L38 §6, DOC6 §5 |
| **Yellow** | `#F5C84B` | Badges, stars, guarantee badges | L38 §6, DOC6 §5 |
| **Gray** | `#9AA8A7` | Subtle text, strikethrough pricing | L38 §6, DOC6 §5 |
| **Dark Text** | `#1A1A1A` | Body text, main copy | L33 Format |
| **Body Gray** | `#4A4A4A` | Sub-captions, secondary text | L33 Format |
| **Off-White BG** | `#FAF9F7` | Email background, container bg | L33 Format |

### 1.2 Color Palette (Giuliano's Design System)

Extracted from the React email prototypes (`tokens.js`) — used in the actual email designs:

| Name | Hex | Usage |
|------|-----|-------|
| **Teal** | `#2BAEB4` | Primary brand accent, section colors, headline highlights |
| **Teal Deep** | `#1E8A8F` | Eyebrow text, secondary accents, category labels |
| **Green** | `#5DD07A` | Positive affirmations, success states, creed stickers |
| **Green Deep** | `#3BB35E` | Hover states, deeper green accents |
| **Ink (Dark Text)** | `#1F2D2F` | Body text, headings, borders, drop-shadow color |
| **Soft (Secondary)** | `#4A6568` | Paragraph text, subheaders, secondary copy |
| **Muted** | `#8A9B9D` | Fine print, footer text, unselected states |
| **Cream** | `#FBF7F1` | Email backgrounds, card surfaces |
| **Paper** | `#FFFFFF` | White cards, product backgrounds |
| **Button Green** | `#D8F57C` | CTA button text/icon color on dark backgrounds |
| **Warm Yellow** | `#FFD866` | Badges, sticker elements, highlight boxes |
| **Gradient** | `linear-gradient(135deg, #2BAEB4 0%, #5DD07A 100%)` | Brand gradient, accent words, header bars |

**Common background colors used in email sections:**
- Hero sections: `#FFFBF0` (warm off-white)
- Letter sections: `#FFF6E2` (warm cream)
- Reframe/mechanism: `#EAF6F2` (soft mint-teal)
- Expert quote: `#F0EDF8` (soft lavender)
- Comparison: `#FFFBF0`
- Product reveal: `#F0EDF8` or `#F5F1EA`
- CTA section: `B.ink` (`#1F2D2F` — dark ink)
- Story sections: `#FFF6E2`
- Methods: `#FAF7F0`
- Step cards: `#E6F7E9`, `#FFF2D8`, `#EAF4F5`

### 1.3 Font Specifications

| Element | Font | Weight | Size | Line Height | Notes |
|---------|------|--------|------|-------------|-------|
| **Body** | Questrial | 400 | 14–15px | 1.6–1.7 | Primary body font |
| **H1 (Title)** | Questrial | 700 | 36–40px | 1.0–1.05 | Letter spacing -0.6 to -0.8 |
| **H2 (Section)** | Questrial | 700 | 24–28px | 1.15 | Letter spacing -0.4 |
| **H3 (Card)** | Questrial | 700 | 15.5–19px | 1.2–1.3 | — |
| **Eyebrow** | Questrial | 700 | 10–10.5px | — | Uppercase, letter-spacing 1.5–2 |
| **Preheader** | Questrial | 400 | 11px | — | Italic, muted color |
| **Fine Print** | Questrial | 400 | 11–12.5px | 1.65 | Footer/muted text |
| **Signature** | Caveat (cursive) | 500 | 42px | 0.95 | Lena's handwritten sign-off |
| **Display Accent** | Fraunces (serif) | 400–700 | varies | — | Serif counterpoint in some variants |
| **Code** | Courier New, ui-monospace | 700 | 22–34px | — | Discount code display, letter-spacing 2–4 |
| **Product Price** | Questrial | 700 | 28px | 1 | Letter spacing -0.5 |
| **Sticker/Badge** | Questrial | 700 | 10.5px | 1.4 | Uppercase, letter-spacing 1.5 |

**Key Rule:** Body text is NEVER bold. Bold only for headings, signatures, and labels. (L38 §6)

### 1.4 Spacing & Layout

| Element | Value | Notes |
|---------|-------|-------|
| **Email Max Width** | 420px | All emails constrained to 420px |
| **Logo Height** | 34px | Centered in header |
| **Header Padding** | 24px 20px 0 | Top, sides |
| **Body Padding (sides)** | 14–24px | Varies by section |
| **Section Padding Top** | 20–34px | Varies by component |
| **Section Padding Bottom** | 16–44px | Varies by component |
| **Gradient Band Height** | 32–50px | Default 40px |
| **CTA Section Padding** | 20px 22px 44px | Top sides bottom |
| **Footer Padding** | 30px 24px 30px | — |
| **OutLine Padding** | 18px 24px 0 | — |
| **Card Border Radius** | 14–24px | Standard: 16–20px |
| **Card Border** | 2px solid `B.ink` | All cards have ink border |
| **Card Shadow** | 3–6px 3–6px 0 `B.ink` | Ink drop-shadow offset |
| **Badge Border Radius** | 999px | Pill shape |
| **Badge Transform** | rotate(-1.5deg) | Slight tilt |
| **CTA Border Radius** | 999px | Pill shape |
| **CTA Min Height** | 48px | Touch target |
| **CTA Padding** | 16–17px 28–32px | Compact: 11px 18px |
| **Code Block Padding** | 28px 24px 24px | Compact: 18px 20px |
| **Code Dashed Border** | 2.5px dashed `B.ink` | — |
| **Gap (flex/grid)** | 10–14px | Standard card gap |
| **Section Spacer** | GradientBand | Smooth color transitions between sections |

### 1.5 Pricing & Offer Constants

| Offer | Price | Notes |
|-------|-------|-------|
| **1 Pair** | `$34.99` | Starter pair, entry-level |
| **3+3 Bundle** | **$79.99** + FREE Shipping | BESTSELLER — primary offer |
| **5+5 Bundle** | **$119.99** + FREE E-Book + FREE Targets + FREE Chart + FREE Shipping | Highest value |
| **Guarantee** | 60-Day Money Back | NEVER 30-day. "Calm Progress Guarantee" |
| **WELCOME10 Code** | 10% off first order | Valid 7 days. Auto-apply URL: `brightkidco.com/discount/WELCOME10` |

### 1.6 Social & Brand Constants

| Element | Value |
|---------|-------|
| **From Name** | Lena from BrightKidCo |
| **From Email** | support@brightkidco.com |
| **Sending Domain** | send.brightkidco.com |
| **Founder** | Mary S. — separate identity, only in Founder Story mails |
| **Reviews** | 16,511 · 4.9 ★ |
| **Trust Statement** | "100,000+ parents trust BrightKidCo" |
| **Instagram** | `instagram.com/brightkidco_official` |
| **TikTok** | `tiktok.com/@brightkidco.com` |
| **Facebook** | **NOT USED** in email — do not include |
| **Trustpilot** | **NO Trustpilot links** in any email |

---

## 2. EMAIL STRUCTURE PATTERNS

### 2.1 Email Shell / Wrapper

```html
<!-- Max-width container -->
<div style="width: 420px; background: {section-bg}; font-family: 'Questrial', system-ui, sans-serif; color: #1F2D2F;">
  
  <!-- Preheader (hidden in email clients, visible in preview) -->
  <div style="padding: 6px 20px; font-size: 11px; color: #8A9B9D; background: #F6F2EA; text-align: center; font-style: italic;">
    Preheader: {preheader text}
  </div>
  
  {email body sections...}

</div>
```

### 2.2 Preheader Pattern

```
Preheader: {short summary text}
```

Font: 11px, italic, muted (#8A9B9D). Background: #F6F2EA.
Serves as the preview text in email clients. Hidden in rendered email body.

Examples:
- "You are not failing. This is a different path."
- "The word nobody explained to you yet."
- "It wasn't the method. It was the map."
- "When you're ready. No pressure."

### 2.3 Header Pattern (Logo)

```html
<div style="background: {section-bg}; padding: 24px 20px 0; text-align: center;">
  <img src="brightkidco-logo-v2.png" alt="BrightKidCo" style="height: 34px;" />
</div>
```

**Logo file:** `brightkidco-logo-v2.png` (full wordmark, 34px height)
**Variant logo:** `brightkidco-logo-new.png` (28px height)

### 2.4 Body Section Pattern / Color Chapters

Each email is divided into visual "color chapters" — sections with distinct background colors that create visual separation and guide the emotional journey:

```
Section Flow:
  PREHEADER → HEADER → HERO IMAGE → TITLE → (gradient band)
  → LETTER OPENING → (gradient band) → REFRAME/MECHANISM
  → (gradient band) → COMPARISON/PRODUCT → (gradient band)
  → QUOTE/TESTIMONIAL → (gradient band) → PRODUCT SHOWCASE
  → (gradient band to CTA) → CTA SECTION (dark ink)
  → SIGNOFF → OUT LINE → FOOTER
```

### 2.5 Gradient Transition Bands

Used between every color section to create smooth visual transitions:

```css
/* Standard: from {current bg} to {next bg}, height 40px */
background: linear-gradient(180deg, {from-color} 0%, {to-color} 100%);
height: 40px;
```

Common band heights: 32px, 36px, 40px, 50px
The final band before the CTA section is typically 50px from the last section bg to `#1F2D2F` (ink).

### 2.6 CTA Section Pattern (Dark)

The primary call-to-action section. Always on a dark ink (#1F2D2F) background:

```html
<div style="background: #1F2D2F; padding: 20px 22px 44px; text-align: center; color: #FFFFFF;">
  <p style="font-size: 14px; line-height: 1.6; color: #B8CACD; margin: 0 0 24px;">
    {intro paragraph}
  </p>
  <a href="#" style="
    display: inline-block;
    padding: 17px 32px;
    background: #D8F57C;
    color: #1F2D2F;
    font-size: 15.5px;
    font-weight: 700;
    text-decoration: none;
    border-radius: 999px;
    letter-spacing: 0.3;
  ">{button text} →</a>
  <div style="margin-top: 16px; font-size: 11.5px; color: #8A9B9D;">
    {fine print / permission line}
  </div>
</div>
```

**CTA button on light backgrounds:**
```css
background: #1F2D2F;        /* ink bg */
color: #D8F57C;             /* green-chartreuse text */
font-size: 15px;
font-weight: 700;
padding: 16px 24px;
border-radius: 999px;
text-align: center;
```

**CTA button with ink shadow (variant):**
```css
background: {accent color};
color: #FFF;
font-size: 15px; font-weight: 700;
padding: 16px 28px;
border-radius: 999px;
box-shadow: 4px 4px 0 #1F2D2F;
border: 2px solid #1F2D2F;
transform: rotate({rot}deg);
```

### 2.7 Signoff Pattern (Lena)

Warm, human close at the end of every email. Contains: avatar placeholder + name/role + handwritten "Lena" signature + P.S. line.

```html
<div style="background: #1F2D2F; padding: 0 22px 36px;">
  <div style="
    position: relative;
    background: #1F2A2C;
    border: 1.5px solid #2F3D40;
    border-radius: 22px;
    padding: 26px 24px 24px;
  ">
    <!-- Top gradient accent bar -->
    <div style="position: absolute; top: 0; left: 0; right: 0; height: 4px;
      background: linear-gradient(135deg, #2BAEB4 0%, #5DD07A 100%);
      opacity: 0.9; border-radius: 22px 22px 0 0;" />

    <!-- Avatar + Name row -->
    <div style="display: flex; align-items: center; gap: 14px; margin-bottom: 18px;">
      <div style="width: 58px; height: 58px; flex-shrink: 0; border-radius: 50%;
        background: linear-gradient(135deg, #FFD866 0%, #2BAEB4 100%);
        padding: 2.5px;">
        <div style="width: 100%; height: 100%; border-radius: 50%;
          background: #FFFDF6; border: 1.5px solid #1F2D2F; ...">
          {avatar/silhouette placeholder}
        </div>
      </div>
      <div>
        <div style="font-size: 10.5px; letter-spacing: 1.6; text-transform: uppercase;
          color: #8FAFB2; font-weight: 700;">A note from</div>
        <div style="font-size: 17px; font-weight: 700; color: #FFFFFF;">Lena Bauer</div>
        <div style="font-size: 12px; color: #8FAFB2; font-style: italic;">
          Founder · BrightKidCo · Mom of two
        </div>
      </div>
    </div>

    <!-- Handwritten signature - Caveat font -->
    <div style="display: flex; align-items: center; gap: 14px; padding: 16px 0;
      border-top: 1.5px dashed #3A4547; border-bottom: 1.5px dashed #3A4547; margin-bottom: 16px;">
      <div style="font-size: 12.5px; color: #B8CACD;">With you,</div>
      <div style="font-family: 'Caveat', cursive; font-size: 42px; line-height: 0.95;
        font-weight: 500; color: #D8F57C; letter-spacing: -0.5;">Lena</div>
    </div>

    <!-- P.S. -->
    <div style="font-size: 13px; line-height: 1.65; color: #B8CACD; font-style: italic;">
      <span style="color: #D8F57C; font-weight: 700; font-style: normal;">P.S.</span>
      {ps content}
    </div>
  </div>
</div>
```

**Standard P.S. content:** "If you ever want to reply and tell me about your child — I read every one. Really."

### 2.8 Out Line (Unsubscribe) Pattern

```html
<div style="background: #FFFFFF; padding: 18px 24px 0; text-align: center; 
  font-size: 12.5px; color: #8A9B9D; font-style: italic;">
  You can pause this series anytime. Come back when you're ready.
</div>
```

### 2.9 Footer Pattern

```html
<div style="background: #FFFFFF; padding: 30px 24px 30px; text-align: center;">
  
  <!-- Tagline (Fraunces italic) -->
  <div style="font-family: 'Fraunces', Georgia, serif; font-size: 20px; 
    font-style: italic; font-weight: 500; color: #1F2D2F; margin-bottom: 30px; 
    letter-spacing: -0.2;">
    Calm progress, one day at a time.
  </div>
  
  <!-- Links -->
  <div style="font-size: 14px; color: #1F2D2F; font-weight: 500; margin-bottom: 14px;">
    <a href="#" style="color: #1F2D2F; text-decoration: none;">Our Method</a>
  </div>
  <div style="font-size: 14px; color: #1F2D2F; font-weight: 500; margin-bottom: 14px;">
    <a href="#" style="color: #1F2D2F; text-decoration: none;">Shop the Pants</a>
  </div>
  <div style="font-size: 14px; color: #1F2D2F; font-weight: 500; margin-bottom: 14px;">
    <a href="#" style="color: #1F2D2F; text-decoration: none;">Parent Stories</a>
  </div>
  
  <!-- Social icons (SVG inline - Instagram, Facebook, TikTok) -->
  <div style="display: flex; justify-content: center; gap: 22px; margin: 14px 0 28px;">
    ...
  </div>
  
  <!-- Address & Unsubscribe -->
  <div style="font-size: 11.5px; color: #8A9B9D; line-height: 1.65; margin: 0 auto; max-width: 340px;">
    No longer want to receive these emails? <a href="#" style="color: #1F2D2F; text-decoration: underline;">Unsubscribe</a>.<br/>
    <span style="font-size: 11px;">BrightKidCo Ltd · Berlin, Germany · hello@brightkidco.com</span>
  </div>
  
  <!-- Gradient bar accent -->
  <div style="margin: 28px auto 0; width: 60px; height: 3px; 
    background: linear-gradient(135deg, #2BAEB4 0%, #5DD07A 100%); 
    border-radius: 3px;" />
</div>
```

**Social Icons:**
- Instagram (camera icon - SVG)
- Facebook (f icon - SVG)
- TikTok (music note icon - SVG)

---

## 3. COMPONENT LIBRARY

### 3.1 Header (Logo Bar)

```html
<div style="padding: 22px 24px 0; text-align: center;">
  <img src="brightkidco-logo-v2.png" alt="BrightKidCo" style="height: 34px;" />
</div>
```

Variant with smaller logo: `height: 28px`

### 3.2 Image Placeholder Frame

A dashed teal frame with corner marks, label, and sublabel. Used for all image placeholders in prototypes.

```html
<div style="
  position: relative; width: 100%; height: {height}px;
  background: #FFFFFF;
  border: 2px dashed #2BAEB4;
  border-radius: {radius}px;
  display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  padding: 18px 22px; text-align: center;
">
  <!-- Corner marks (teal) -->
  <svg width="14" height="14" style="position: absolute; top: 10; left: 10;">...</svg>
  <svg width="14" height="14" style="position: absolute; top: 10; right: 10;">...</svg>
  ...
  <!-- Image icon -->
  <svg width="32" height="32">...</svg>
  <!-- Label -->
  <div style="font-family: Questrial; font-size: 12.5px; font-weight: 700;
    letter-spacing: 1; text-transform: uppercase; color: #2BAEB4; margin-bottom: 6px;">
    {label}
  </div>
  <!-- Sublabel -->
  <div style="font-family: Questrial; font-size: 12px; line-height: 1.5; color: #4A6568;">
    {sublabel}
  </div>
</div>
```

**Radius variants:** Standard = 20px, Inline/Product = 0 (handled by wrapper), Compact = 14px

### 3.3 Framed Image (Full)

A black-bordered image with ink drop-shadow, wrapping the `ImgFrame`:

```html
<div style="
  border-radius: {20}px; overflow: hidden;
  border: 2px solid #1F2D2F;
  box-shadow: {4}px {4}px 0 #1F2D2F;
">
  <ImgFrame height={height} radius={0} label={label} sublabel={sublabel} />
</div>
```

Shadow offset varies: 3px/3px (small), 4px/4px (medium), 6px/6px (large hero).

### 3.4 Title Block

```html
<div style="padding: 34px 22px 0; text-align: center;">
  <!-- Badge -->
  <div style="display: inline-block; background: #FFD866; padding: 7px 14px;
    border-radius: 999px; font-size: 10.5px; font-weight: 700; letter-spacing: 1.5;
    text-transform: uppercase; margin-bottom: 16px; border: 2px solid #1F2D2F;
    transform: rotate(-1.5deg);">
    ✿ Part one of six
  </div>
  <!-- H1 -->
  <h1 style="font-size: 40px; line-height: 1; font-weight: 700; margin: 0;
    letter-spacing: -0.8;">
    Title<br/>
    <span style="background: linear-gradient(135deg, #2BAEB4 0%, #5DD07A 100%);
      -webkit-background-clip: text; -webkit-text-fill-color: transparent;
      background-clip: text; color: transparent; font-weight: 700;">Accent Word</span>
  </h1>
  <!-- optional subhead -->
  <p style="font-size: 17px; color: #4A6568; margin-top: 14px;
    line-height: 1.4; font-weight: 500;">{subhead}</p>
</div>
```

### 3.5 Part / Sticker Badge

```html
<div style="
  display: inline-block; background: #FFD866; padding: 7px 14px;
  border-radius: 999px; font-size: 10.5px; font-weight: 700;
  letter-spacing: 1.5; text-transform: uppercase; color: #1F2D2F;
  margin-bottom: 16px; border: 2px solid #1F2D2F;
  transform: rotate(-1.5deg); white-space: nowrap;
">
  ✿ Part {X} of {Y}
</div>
```

**Variant with shadow:**
```css
box-shadow: 3px 3px 0 #1F2D2F;
```

### 3.6 Letter (Paragraph Block)

```html
<div style="background: {bg-color}; padding: 4px 24px 28px;
  font-size: 15px; line-height: 1.7; color: #4A6568;">
  
  <!-- First paragraph (bold) -->
  <p style="margin: 0 0 14px; font-size: 17px; color: #1F2D2F; font-weight: 600;">
    {first paragraph}
  </p>
  
  <!-- Body paragraphs -->
  <p style="margin: 0 0 14px;">{body paragraph}</p>
  <p style="margin: 0;">{last body paragraph}</p>
</div>
```

### 3.7 Eyebrow

```html
<div style="font-size: 10.5px; letter-spacing: 2px; text-transform: uppercase;
  color: #1E8A8F; font-weight: 700; margin-bottom: 10px;">
  {eyebrow text}
</div>
```

### 3.8 Section H2

```html
<h2 style="font-size: 28px; line-height: 1.15; font-weight: 700; margin: 0 0 16px;
  letter-spacing: -0.4; text-align: left;">
  {heading text}
  <span style="background: linear-gradient(135deg, #2BAEB4 0%, #5DD07A 100%);
    ...">{gradient accent}</span>
</h2>
```

### 3.9 CTA Button (Pill)

**Standard (dark bg):**
```html
<a href="#" style="
  display: inline-block;
  padding: 17px 32px;
  background: #D8F57C;
  color: #1F2D2F;
  font-size: 15.5px;
  font-weight: 700;
  text-decoration: none;
  border-radius: 999px;
  letter-spacing: 0.3;
">{button text} →</a>
```

**Ink-on-light-bg:**
```html
<a href="#" style="
  display: inline-block;
  padding: 16px 24px;
  background: #1F2D2F;
  color: #D8F57C;
  font-size: 15px;
  font-weight: 700;
  text-decoration: none;
  border-radius: 999px;
  text-align: center;
  letter-spacing: 0.3;
">{button text} →</a>
```

**Compact variant:**
```html
padding: 11px 18px;
font-size: 13px;
background: #1F2D2F;
color: #D8F57C;
border-radius: 999px;
```

**Underline CTA (soft variant — ProductShowcaseSoft):**
```html
<a href="#" style="
  display: inline-block;
  font-size: 12.5px; font-weight: 700;
  color: #1E8A8F; text-decoration: none;
  border-bottom: 1.5px solid #1E8A8F;
  padding-bottom: 2px;
">{ctaText} →</a>
```

### 3.10 Code Block (Discount Code)

For displaying discount codes (WELCOME10, BRIGHT10, etc.):

```html
<div style="
  background: #FFFFFF;
  border: 2px solid #1F2D2F;
  border-radius: 22px;
  box-shadow: 4px 4px 0 #1F2D2F;
  padding: 28px 24px 24px;
  text-align: center;
  overflow: hidden;
">
  <!-- Top gradient accent bar -->
  <div style="position: absolute; top: 0; left: 0; right: 0; height: 6px;
    background: linear-gradient(135deg, #2BAEB4 0%, #5DD07A 100%);" />

  <!-- Label -->
  <div style="font-size: 10.5px; letter-spacing: 1.6; text-transform: uppercase;
    color: #1E8A8F; font-weight: 700; margin-bottom: 10px; margin-top: 6px;">
    Your welcome code
  </div>

  <!-- Code display -->
  <div style="
    display: inline-block;
    padding: 18px 36px;
    background: #FAF7F0;
    border: 2.5px dashed #1F2D2F;
    border-radius: 14px;
    font-family: 'Courier New', monospace;
    font-size: 34px;
    font-weight: 700;
    color: #1F2D2F;
    letter-spacing: 4px;
    margin: 0 0 14px;
  ">WELCOME10</div>

  <!-- Note -->
  <div style="font-size: 13px; color: #4A6568; font-style: italic; margin-top: 2px;">
    Auto-applies at checkout
  </div>

  <!-- Tap to copy hint -->
  <div style="margin-top: 10px; font-size: 11px; color: #8A9B9D; letter-spacing: 0.3;">
    Tap to copy · Auto-applied at checkout
  </div>
</div>
```

### 3.11 Reminder Bar

Small strip for "code still valid · X days left" reminders:

```html
<div style="background: #FFF6E2; padding: 14px 22px;
  display: flex; align-items: center; gap: 12px;
  border-top: 1.5px solid #1F2D2F; border-bottom: 1.5px solid #1F2D2F;">
  <div style="width: 32px; height: 32px; flex-shrink: 0;
    background: #FFFFFF; border: 1.5px solid #1F2D2F;
    border-radius: 8px; display: flex; align-items: center;
    justify-content: center; font-size: 14px;">⏱</div>
  <div>
    <div style="font-size: 10px; letter-spacing: 1.3; text-transform: uppercase;
      color: #1E8A8F; font-weight: 700; margin-bottom: 2px;">{label}</div>
    <div style="font-size: 13.5px; font-weight: 600; color: #1F2D2F;
      font-family: 'Courier New', monospace; letter-spacing: 1.5;">{body}</div>
  </div>
</div>
```

### 3.12 Product Showcase — Full (Hero Card)

The primary product display — used in hero moments (E4, E6).

**Structure:**
1. Eyebrow + Title (with gradient accent) + Sub
2. Product Image Card (FramedImage, 300px height, 4:5 ratio)
3. Floating guarantee badge (yellow, rotated, top-right)
4. Product info: brand label + product name + price (From $XX)
5. Price note (italic)
6. Feature pills (3 pills: Body-Signal Layer™, 60-day guarantee, Sensory-friendly)
7. CTA button (ink on dark bg or light)
8. Micro trust line (Free shipping · 60-day guarantee · Real returns)
9. 2-up sub-row: colourways + size range

**Feature Pills pattern:**
```html
<div style="display: flex; gap: 8px; flex-wrap: wrap;">
  <div style="display: flex; align-items: center; gap: 6px;
    padding: 7px 12px; background: #FAF7F0;
    border: 1.5px solid #1F2D2F; border-radius: 999px;
    font-size: 11.5px; font-weight: 600; color: #1F2D2F;">
    <span style="color: #2BAEB4; font-weight: 700;">◉</span>
    <span>Body-Signal Layer™</span>
  </div>
</div>
```

**Guarantee Badge:**
```html
<div style="position: absolute; top: 14px; right: 14px;
  background: #FFD866; border: 2px solid #1F2D2F;
  border-radius: 999px; padding: 6px 12px;
  font-size: 10px; font-weight: 700; letter-spacing: 1;
  text-transform: uppercase; transform: rotate(4deg);
  box-shadow: 2px 2px 0 #1F2D2F; display: flex; align-items: center; gap: 5px;">
  <span style="font-size: 13px;">✿</span>
  <span>60 days calm</span>
</div>
```

**2-up Sub Row:**
```html
<div style="display: flex; gap: 10px; margin-top: 12px;">
  <div style="flex: 1; background: #FFFFFF; border: 2px solid #1F2D2F;
    border-radius: 14px; overflow: hidden; box-shadow: 3px 3px 0 #1F2D2F;">
    <div style="background: #2BAEB415;">
      <ImgFrame height=110 radius=0 label="COLOURWAY 01" sublabel="Sage · soft green" />
    </div>
    <div style="padding: 10px 12px; font-size: 11.5px; font-weight: 700;
      color: #1F2D2F; text-align: center; border-top: 2px solid #1F2D2F;">
      3 colourways
    </div>
  </div>
  <div style="flex: 1; ...">
    ... <!-- Size range card -->
  </div>
</div>
```

### 3.13 Product Showcase — Medium (Inline Card)

Side-by-side image + info — used in Education emails (E5).

```html
<div style="padding: 12px 14px 20px;">
  <div style="background: #FFFFFF; border: 2px solid #1F2D2F;
    border-radius: 20px; overflow: hidden; box-shadow: 4px 4px 0 #1F2D2F;">
    
    <!-- Two-column layout -->
    <div style="display: flex; align-items: stretch;">
      <!-- Image side (140px) -->
      <div style="width: 140px; flex-shrink: 0; border-right: 2px solid #1F2D2F;
        background: #FFFDF6;">
        <ImgFrame height=220 radius=0 label="PRODUCT" sublabel="" />
      </div>
      
      <!-- Info side -->
      <div style="padding: 18px; flex: 1; display: flex; flex-direction: column;
        justify-content: space-between;">
        <div>
          <div style="font-size: 10px; letter-spacing: 1.4; text-transform: uppercase;
            color: #1E8A8F; font-weight: 700; margin-bottom: 6px;">{eyebrow}</div>
          <h3 style="margin: 0 0 10px; font-size: 17px; font-weight: 700;
            line-height: 1.2; color: #1F2D2F;">{title}</h3>
          <div style="display: flex; align-items: baseline; gap: 6px; margin-bottom: 12px;">
            <span style="font-size: 20px; font-weight: 700; color: #1F2D2F;
              letter-spacing: -0.3;">€{price}</span>
            <span style="font-size: 11px; color: #4A6568;">starter pair</span>
          </div>
          <div style="font-size: 11.5px; color: #4A6568; line-height: 1.5;">
            60-day calm-progress guarantee. Return anytime, any reason.
          </div>
        </div>
        <a href="#" style="display: inline-block; padding: 11px 18px;
          background: #1F2D2F; color: #D8F57C; font-size: 13px; font-weight: 700;
          text-decoration: none; border-radius: 999px; text-align: center;
          margin-top: 14px;">{cta} →</a>
      </div>
    </div>
  </div>
</div>
```

### 3.14 Product Showcase — Soft (Gentle Mention)

Dashed border, text-forward, no price — used in E2, E3 for gentle product awareness:

```html
<div style="padding: 8px 22px 20px;">
  <div style="background: #FFFDF6; border: 2px dashed #2BAEB4;
    border-radius: 16px; padding: 18px; display: flex; gap: 14px;
    align-items: center;">
    <!-- Tiny product thumb -->
    <div style="width: 60px; height: 60px; flex-shrink: 0; background: #FFFFFF;
      border-radius: 12px; border: 1.5px solid #1F2D2F;
      display: flex; align-items: center; justify-content: center;">
      {small product SVG icon}
    </div>
    <div style="flex: 1;">
      <div style="font-size: 10px; letter-spacing: 1.3; text-transform: uppercase;
        color: #1E8A8F; font-weight: 700; margin-bottom: 3px;">{eyebrow}</div>
      <div style="font-size: 13px; color: #1F2D2F; line-height: 1.45;
        margin-bottom: 8px; font-weight: 500;">{product description line}</div>
      <a href="#" style="font-size: 12.5px; font-weight: 700; color: #1E8A8F;
        text-decoration: none; border-bottom: 1.5px solid #1E8A8F;
        padding-bottom: 2px;">{cta} →</a>
    </div>
  </div>
</div>
```

### 3.15 Comparison Cards (Pull-ups vs BSL)

3-card comparison: Pull-ups (negative), Regular underwear (negative), Body-Signal Learning Layer™ (positive):

```html
<div style="display: flex; flex-direction: column; gap: 14px;">
  <!-- Card template -->
  <div style="background: #FFFFFF; border: {2px solid #1F2D2F OR 3px solid #5DD07A};
    border-radius: 16px; overflow: hidden; box-shadow: 3px 3px 0 #1F2D2F;">
    <!-- Tinted header stripe -->
    <div style="padding: 12px 18px; background: {gradient or tinted bg};
      color: {#FFF or #1F2D2F}; font-size: 13px; font-weight: 700;
      display: flex; justify-content: space-between;
      border-bottom: 2px solid #1F2D2F;">
      <span>{card title}</span>
      <span style="font-size: 18px;">{✓ or ✕}</span>
    </div>
    <!-- Body -->
    <div style="padding: 16px 18px; font-size: 14px; line-height: 1.55; color: #4A6568;">
      {card body}
    </div>
  </div>
</div>
```

**Stripe backgrounds:** Positive = teal→green gradient, Negative 1 = #FFE8E0, Negative 2 = #F3EADF

### 3.16 Creed / Sticker Row

Used for bold affirmations like "You are not failing. Your child isn't broken. You just need a different path."

```html
<div style="padding: 8px 16px 36px;">
  <!-- Each creed line is a "sticker" -->
  <div style="background: #2BAEB4; color: #FFF; padding: 16px 20px;
    border-radius: 16px; transform: rotate(-1deg); margin-bottom: 12px;
    box-shadow: 3px 3px 0 #1F2D2F; border: 2px solid #1F2D2F;
    font-size: 19px; font-weight: 700; line-height: 1.25;">
    {creed line}
  </div>
</div>
```

**Sticker colors (in order):** #2BAEB4 (teal), #5DD07A (green), #FFB5A0 (salmon)
**Rotations:** -1°, 0.8°, -0.5°

---

## 4. AVATAR LEVEL TONALITY GUIDE

### 4.1 Level 1 — Sarah (Verbal, Pre-K Driven)

| Dimension | Value |
|-----------|-------|
| **Audience share** | ~35% of assigned (~17.5% total) |
| **Child age** | 3–5 years |
| **Child profile** | Fully verbal, knows letters/numbers, academically advanced |
| **Failed attempts** | 1–3 (first-time failure, likely Oh Crap method) |
| **Hope/Realism** | 70% Hope / 30% Realism |
| **Decision speed** | 2–7 days (fastest in ecosystem) |
| **Primary lever** | Pre-K enrollment deadline |
| **Dominant emotion** | Deadline Pressure, Social Pressure |
| **Urgency allowed** | HIGH |
| **Science density** | Medium-Low |
| **Empathy intensity** | Medium |
| **CTA aggressiveness** | Medium |
| **Testimonial length** | Short-Medium (3–8 sentences) |
| **Primary offer** | 3+3 Bundle ($79.99) |
| **Secondary offer** | 5+5 Bundle ($119.99) |
| **Math reframe** | OK |
| **Forbidden** | Resignation, BCBA assumptions, L2/3 comparisons, "Severe sensory issues", "Adult diapers" |

**Welcome Hook:** "He's almost 3 and shows zero interest in the potty."
**Key insight:** "He gets it — but he doesn't get it." The child understands intellectually but can't reliably act.

### 4.2 Level 2 — Lisa (Mixed Verbal, Method-Cycling)

| Dimension | Value |
|-----------|-------|
| **Audience share** | ~40% of assigned (~20% total) — LARGEST SEGMENT |
| **Child age** | 5–7 years |
| **Child profile** | Mixed verbal — scripts, echolalia, sometimes AAC |
| **Failed attempts** | 3–5+ (including BCBA protocol, private consultants) |
| **Hope/Realism** | 40% Hope / 60% Realism |
| **Decision speed** | 7–21 days (research-heavy) |
| **Primary lever** | Prompt-dependency frustration |
| **Dominant emotion** | Overwhelmed, Social Pressure |
| **Urgency allowed** | LOW (event-driven) |
| **Science density** | HIGH |
| **Empathy intensity** | High |
| **CTA aggressiveness** | Low |
| **Testimonial length** | Long (10–15 sentences) |
| **Primary offer** | 3+3 Bundle ($79.99) |
| **Secondary offer** | 5+5 Bundle ($119.99) |
| **Math reframe** | Carefully |
| **Forbidden** | "Easy/Quick", BCBA criticism, cheerleader language, "Magic/Miracle/Just trust" |

**The Level 2 Mail Formula (ALL 6 elements required):**
1. REAL symptom recognition (she tests immediately)
2. Mechanism specificity
3. Acknowledge BCBA/OT work
4. Realistic timelines
5. 60-day guarantee
6. Permission-not-to-buy

**BCBA respect language:** ✅ "Your BCBA has built the behavioral foundation." ❌ "ABA doesn't work for potty training."
**Welcome Hook:** "I used the Oh Crap method which totally stressed her and me out."

### 4.3 Level 3 — Maria (Non-Verbal, Dignity-First)

| Dimension | Value |
|-----------|-------|
| **Audience share** | ~25% of assigned (~12.5% total) |
| **Child age** | 6–10+ years |
| **Child profile** | Non-verbal or minimal verbal (0–50 functional words), severe sensory differences |
| **Failed attempts** | 5+ years of intensive therapies |
| **Hope/Realism** | 20% Hope / 80% Realism |
| **Decision speed** | 14–30+ days (slowest in ecosystem) |
| **Primary lever** | Size progression fear (outgrowing largest pull-ups → adult diapers) |
| **Dominant emotion** | Overwhelmed, Social Pressure |
| **Urgency allowed** | **NEVER** |
| **Science density** | Medium-High |
| **Empathy intensity** | Very High |
| **CTA aggressiveness** | Very Low (text links only) |
| **Testimonial length** | Long + messy (12–18+ sentences) |
| **Primary offer** | 1 Pair ($34.99) |
| **Secondary offer** | 3+3 Bundle ($79.99) |
| **Math reframe** | **NEVER** |
| **Forbidden** | Cure/fix/save, pressure, "Don't give up!", Pre-K driver, "Adult diapers" as sales pressure |

**Dignity-First Language (NON-NEGOTIABLE):**
- ✅ "Your child" / "He is doing the best his nervous system allows"
- ✅ "Whatever progress means for your family is enough"
- ❌ "Your child will be normal" / "Your kid can do this!" / "Cure" / "Fix" / "Solve"
- ❌ "Save him from years of diapers" / "Free her from pull-ups"

**Welcome Hook:** "He's 7 and still in pull-ups. I've given up trying."
**Key insight:** Resignation is NOT giving up — it is acceptance after years of pain.

### 4.4 General Fallback (Cross-Level)

| Dimension | Value |
|-----------|-------|
| **Audience share** | ~50% of total signup volume |
| **Hope/Realism** | 50/50 |
| **Strategy** | Symptom-First Language — NEVER level labels, NEVER fixed age, NEVER diagnosis prerequisite, NEVER verbal-exclusive |

**The 4 Universal Principles:**
1. NEVER Level Labels — "For kids who don't feel when they need to go"
2. NEVER Fixed Age — "If your child is anywhere from 3 to 10+"
3. NEVER Diagnosis Prerequisite — "For children whose nervous systems process signals differently"
4. NEVER Verbal-Exclusive — "Look for signals: pulling at pants, looking down"

**The "Whether...Or...If..." Language Pattern:**
- "Whether you're 3 weeks into wondering, or 3 years into trying..."
- "Whether your kid is verbal or not, 3 or 10, diagnosed or watching..."
- "If their nervous system processes signals differently..."

**Universal Symptom Hooks:**
1. "Kids who sit on the toilet for 20 minutes and nothing happens"
2. "Kids who pee right after the pull-up comes off"
3. "Kids who play in a wet pull-up without reacting"
4. "Kids who refuse to even try the toilet"
5. "Kids whose pediatrician keeps saying 'wait until they're ready' — but readiness never arrives"

### 4.5 Tonality Constants Cross-Level Matrix

| Dimension | Level 1 | Level 2 | Level 3 | General Fallback |
|-----------|:-------:|:-------:|:-------:|:----------------:|
| **Hope/Realism** | 70/30 | 40/60 | 20/80 | 50/50 |
| **Skepticism** | Low | Very High | Deep, Calm | Medium |
| **Urgency Allowed** | High (Pre-K) | LOW | **NEVER** | Low-Medium |
| **Science Density** | Low-Medium | HIGH | Medium-High | Medium |
| **Empathy Intensity** | Medium | High | Very High | High |
| **CTA Aggressiveness** | Medium | Low | Very Low | Medium-Low |
| **Testimonial Length** | Short-Med (3-8 sent) | Long (10-15) | Long+messy (15+) | Med (4-6 sent) |
| **Decision Period** | 2-7 days | 7-21 days | 14-30+ days | Variable |
| **General Energy** | Optimistic but grounded | Clinical warmth | Quiet warmth + clinical reality | Inclusive warmth |

**Cross-Level Calibration Rules (ALL flows):**
1. **Symptom Over Label** — Never use level labels; describe symptoms instead
2. **3–5 Recognition Anchors** — Every mail must have scenarios spanning all levels
3. **Age Ranges** — "Kids 3 to 10+" not "For 5-year-olds"
4. **Verbal/Non-Verbal Inclusivity** — Always pair verbal + non-verbal signal examples
5. **Timeline Flexibility** — "Some kids show signals after 2 weeks. Others need 8 weeks."
6. **Low Bar Success Metrics** — Mini-wins, not "fully trained"

---

## 5. PRICING DISPLAY SPECS

### 5.1 Offer Matrix Per Level

| Level | Primary Offer | Secondary Offer | Never Offer | Math Reframe | Urgency |
|-------|:-------------:|:---------------:|:-----------:|:------------:|:-------:|
| Level 1 | 3+3 Bundle ($79.99) | 5+5 Bundle ($119.99) | — | OK | Strong (Pre-K) |
| Level 2 | 3+3 Bundle ($79.99) | 5+5 Bundle ($119.99) | — | Carefully | Weak (events) |
| Level 3 | 1 Pair ($34.99) | 3+3 Bundle ($79.99) | 5+5 Bundle | **NEVER** | **NEVER** |
| General | 3+3 Bundle ($79.99) | 1 Pair ($34.99) | — | OK | Low-Medium |

### 5.2 Price Display Formatting

**Price pattern:**
```
From $34                     ← eyebrow, muted
$79.99                       ← main price display, font-size 28px, font-weight 700
Starter pair · 10% off       ← price note, italic, soft color
```

**Free shipping annotation:**
```
Free shipping on orders over €50 · 60-day guarantee · Real returns
```
Font: 11px, muted (#8A9B9D), letter-spacing 0.3

**Price comparison format:**
```html
<div style="display: flex; align-items: baseline; gap: 6px;">
  <span style="font-size: 28px; font-weight: 700; color: #1F2D2F; letter-spacing: -0.5;">$79.99</span>
  <span style="font-size: 11px; color: #4A6568;">starter pair</span>
</div>
```

### 5.3 Product Feature Pills

Three standard pills displayed below price on hero product cards:
1. Body-Signal Layer™ (icon: ◉)
2. 60-day guarantee (icon: ✓)
3. Sensory-friendly (icon: ♡)

```css
background: #FAF7F0;
border: 1.5px solid #1F2D2F;
border-radius: 999px;
padding: 7px 12px;
font-size: 11.5px;
font-weight: 600;
color: #1F2D2F;
gap: 6px;
```

---

## 6. VOICE RULES SUMMARY

### 6.1 Lena's Identity

| Element | Value |
|---------|-------|
| **Name** | Lena S. |
| **Role** | Customer Support |
| **Line** | "Customer Support · Mom of two autistic sons" |
| **Sons** | One is 6 (still in training); other trained at almost 8 |
| **NOT** | Founder, brand strategist, salesperson, spiritual influencer |
| **Voice style** | Peer-to-peer, NEVER founder framing |

**Who Lena IS:** A friend who went through the same thing. Clinically informed but emotionally raw. Knowledge-based, not hope-based. Direct without being harsh.

**Who Lena is NOT:** A founder. A brand strategist. A salesperson. Polished, perfect, or predictable. A "wellness brand."

### 6.2 The OVMP Framework

**NEVER use PAS (Problem-Agitate-Solve). Lena uses OVMP:**

| Step | Name | Description | % of Mail |
|------|------|-------------|-----------|
| **O** | Observation of reality | Specific scenario from the avatar's life | ~30% |
| **V** | Validation without drama | Acknowledge the struggle without minimizing | ~20% |
| **M** | Mechanism or information | Explain WHY the method failed, not just WHAT | ~35% |
| **P** | Permission / soft action | Let her decide, never push | ~15% |

**Structural Rules:**
- Open with symptom (never the product)
- Acknowledge prior failures BEFORE proposing mechanism
- Make Lena's voice the trust anchor (not brand voice)
- Offer permission not to buy (reduces resistance)
- End with peer-to-peer Lena moment + soft CTA

### 6.3 Universal Forbidden Language (ALL Flows, ALL Levels)

- "Easy" / "Simple" / "Effortless"
- "Train your kid in 3 days"
- "Guaranteed results"
- "Just like neurotypical kids"
- "Wait until they're ready"
- "Your child should..." / "Most children at this age..."
- "Don't worry"
- "Cure" / "Solve" / "Fix"
- "High-functioning" / "Low-functioning"
- "Suffering from autism"
- "Get him trained!"
- "Be more consistent" / "Just try harder"
- "Have you tried [obvious method]"
- "We understand" (without substance)
- "You forgot something!" (cart recovery)
- "We miss you!" (feels corporate)
- Exclamation marks in body text (signals marketing)
- "Congratulations!" (feels marketing)
- "Less than a coffee a day" math reframe (V18 forbid)

### 6.4 Education/Promotion Ratio

| Context | Ratio | Notes |
|---------|-------|-------|
| Standard e-commerce | 80/20 | Education/promotion split |
| Lena's rule | 90/10 to 95/5 | Almost entirely educational |
| Promotional moments | Framed as education | "60 days to know if it fits" = education |
| Anti-promotion | Always present | "If today isn't right, that's a real answer" |

**Core rule:** The product is never the hero. The mechanism is the hero.

---

## 7. IMAGE PLACEHOLDER CONVENTIONS

### 7.1 Placeholder Frame Format

All image placeholders use the standard `ImgFrame` component:
- White background (`#FFFFFF`)
- Dashed teal border (`2px dashed #2BAEB4`)
- Rounded corners (standard: 20px)
- Corner marks (SVG teal corner brackets)
- Image icon (SVG picture frame icon)
- UPPERCASE label (teal, 12.5px, letter-spacing 1)
- Sublabel (soft teal, 12px, describes the image composition)

### 7.2 Standard Image Types

| Image Type | Dimensions | Label Prefix | Description Pattern |
|------------|-----------|--------------|-------------------|
| **Hero** | height: 240px, ~5:3 | HERO IMAGE | Lifestyle shot · parent & child in calm moment. Morning light, soft tones. |
| **Section** | height: 200px, ~16:9 | SECTION IMAGE | Close-up / detail shot. Warm & quiet. |
| **Diagram** | height: 220px, ~5:3 | DIAGRAM · BODY-SIGNAL LOOP | Simple icon-based diagram. Soft pastel teal/green tones. |
| **Product Hero** | height: 300–320px, ~4:5 | PRODUCT HERO | Lifestyle on-body or kids wearing. Natural pose, soft window light. |
| **Detail Image** | height: 170px | STEP 01/02/03 IMAGE | Scene-specific: calm moment, product detail, happy family. |
| **Colourway** | height: 110px | COLOURWAY 01 | Product detail showcasing available colours. |
| **Size Range** | height: 110px | SIZE RANGE | Size chart or age range. |
| **Product Thumb** | 60×60px | PRODUCT | Small thumbnail for soft product mention. |
| **Avatar** | 58×58px circle | — | Warm portrait silhouette with gradient ring. |

---

## 8. MOBILE vs DESKTOP DIFFERENCES

From the popup strategy (S04-C §8) — applies to email rendering as well:

| Element | Desktop | Mobile |
|---------|---------|--------|
| **Email width** | 420px max | Full-width (100vw) |
| **Font sizes** | 17px body, 28–40px headlines | 16px body, 24–36px headlines |
| **CTA min height** | 48px | 48px (touch target) |
| **Tap targets** | N/A | Minimum 44×44px |
| **Layouts** | Standard | Stacked single-column |
| **Progressive disclosure** | Two-column OK | Always single column |

**Email mobile best practices derived from prototypes:**
- Max-width 420px renders well on both desktop and mobile
- Single-column layouts throughout (no side-by-side columns except medium product card at 140px image width)
- Touch-friendly CTA buttons (min 48px height, adequate padding)
- Font sizes are already mobile-appropriate (15px body text)
- All spacing and padding measured in px (not em/rem) for email client compatibility

---

## 9. KLAVIYO IMPLEMENTATION NOTES

### 9.1 Tag Architecture

**Avatar Level Tags (4):**
- `avatar_level1` — Verbal, 3–5 yrs, Pre-K driven
- `avatar_level2` — Mixed verbal, 5–7 yrs, sensory-dominant
- `avatar_level3` — Non-verbal, 6–10+ yrs, dignity-first
- `avatar_general` — Cross-level, "still figuring out"

**Behavioral Tags (6):**
- `welcome_completed` — Finished Welcome Flow
- `welcome_completed_no_purchase` — Finished Welcome, didn't buy
- `post_purchase_active` — Engaged post-purchase (opens + clicks)
- `at_risk_no_open` — 3–7 days no opens post-purchase
- `inactive_60_days` — 60 days no engagement
- `inactive_120_days` — 120 days no engagement

**Purchase Tags (5):**
- `buyer_1pair` — Purchased 1 Pair
- `buyer_3plus3` — Purchased 3+3 Bundle
- `buyer_5plus5` — Purchased 5+5 Bundle
- `repeat_buyer` — 2+ orders
- `vip_buyer` — 3+ orders

### 9.2 Profile Properties

| Property | Type | Values |
|----------|------|--------|
| `avatar_level` | string | `level1` / `level2` / `level3` / `general` |
| `child_age` | string | Free text |
| `signup_source` | string | `popup` / `checkout` / `referral` / `other` |
| `welcome_flow_completed` | boolean | `true` / `false` |
| `last_purchase_pack_size` | string | `1pair` / `3+3` / `5+5` |
| `vip_customer` | boolean | `true` / `false` |
| `suppressed` | boolean | `true` / `false` |
| `migrated_from` | string | Source segment before migration |
| `migration_trigger` | string | What caused migration |

### 9.3 Flow Routing Rules

- **Before level tag known** (GF/no tag) → Cross-Level (DOC 5)
- **After level tag known** → Level-specific (DOC 2/3/4) for educational/winback/FAQ flows
- **High-velocity flows** (Cart/Checkout/Browse) → Cross-Level even if tag known (speed > segmentation)
- **Post-Purchase Day 0–21** → Cross-Level (DOC 5) — education-first while level uncertain
- **Post-Purchase Day 22+** → Level-specific if tag known

**Level-segmented flows (4 variants each):**
1. Welcome Flow (01)
2. PP-Extended Education (20)
3. FAQ/Objection Library (24)
4. Winback Path A (19)
5. Winback Path B (22)

**All other flows → Cross-Level (DOC 5)**

### 9.4 Sending Config

| Setting | Value |
|---------|-------|
| **Sending Domain** | send.brightkidco.com |
| **From Name** | Lena from BrightKidCo |
| **From Email** | support@brightkidco.com |
| **Email Max Width** | 420px |
| **Font Loading** | Google Fonts: Questrial, Fraunces, Caveat via `<link>` or `@import` |
| **CSS Approach** | Inline styles for email client compatibility |

---

## APPENDIX: HTML Email Skeleton

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>BrightKidCo</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Questrial&family=Fraunces:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap" rel="stylesheet">
  <style>
    html, body { margin: 0; padding: 0; background: #F5F1EA; font-family: 'Questrial', system-ui, sans-serif; }
    * { box-sizing: border-box; }
  </style>
</head>
<body>
  <!-- Email content at 420px max width -->
  <div style="width: 420px; background: #FFFBF0; font-family: 'Questrial', system-ui, sans-serif; color: #1F2D2F; margin: 0 auto;">
    
    <!-- Preheader -->
    <div style="padding: 6px 20px; font-size: 11px; color: #8A9B9D; background: #F6F2EA; text-align: center; font-style: italic;">
      Preheader: {text}
    </div>
    
    <!-- Header -->
    <div style="padding: 24px 20px 0; text-align: center;">
      <img src="brightkidco-logo-v2.png" alt="BrightKidCo" style="height: 34px;" />
    </div>
    
    <!-- Hero Image -->
    <div style="margin: 24px 14px 0; border-radius: 24px; overflow: hidden; border: 2px solid #1F2D2F; box-shadow: 4px 4px 0 #1F2D2F;">
      <img src="hero-image.jpg" alt="Hero" style="width: 100%; display: block;" />
    </div>
    
    <!-- Title Block -->
    <div style="padding: 34px 22px 0; text-align: center;">
      <h1 style="font-size: 40px; line-height: 1; font-weight: 700; margin: 0; letter-spacing: -0.8px;">
        {title}
      </h1>
    </div>
    
    <!-- Letter Body -->
    <div style="padding: 4px 24px 28px; font-size: 15px; line-height: 1.7; color: #4A6568;">
      <p style="margin: 0 0 14px; font-size: 17px; color: #1F2D2F; font-weight: 600;">{first}</p>
      <p style="margin: 0 0 14px;">{body}</p>
    </div>
    
    <!-- CTA Section (Dark) -->
    <div style="background: #1F2D2F; padding: 20px 22px 44px; text-align: center;">
      <p style="font-size: 14px; line-height: 1.6; color: #B8CACD; margin: 0 0 24px;">{cta intro}</p>
      <a href="#" style="display: inline-block; padding: 17px 32px; background: #D8F57C; color: #1F2D2F; font-size: 15.5px; font-weight: 700; text-decoration: none; border-radius: 999px; letter-spacing: 0.3px;">{button} →</a>
    </div>
    
    <!-- Signoff -->
    <div style="background: #1F2D2F; padding: 0 22px 36px;">
      <div style="background: #1F2A2C; border: 1.5px solid #2F3D40; border-radius: 22px; padding: 26px 24px 24px;">
        <div style="font-size: 17px; font-weight: 700; color: #FFFFFF;">Lena</div>
        <div style="font-size: 13px; line-height: 1.65; color: #B8CACD; font-style: italic; margin-top: 12px;">
          <span style="color: #D8F57C; font-weight: 700;">P.S.</span> {ps text}
        </div>
      </div>
    </div>
    
    <!-- Out Line -->
    <div style="padding: 18px 24px; text-align: center; font-size: 12.5px; color: #8A9B9D; font-style: italic;">
      You can pause this series anytime. Come back when you're ready.
    </div>
    
    <!-- Footer -->
    <div style="padding: 20px 20px 26px; text-align: center; font-size: 11.5px; color: #8A9B9D; line-height: 1.7;">
      BrightKidCo Ltd · Berlin, Germany · hello@brightkidco.com<br/>
      <a href="#" style="color: #8A9B9D;">Unsubscribe</a>
    </div>
    
  </div>
</body>
</html>
```

---

*End of Design System Reference — v1.0*
*Every operator agent building HTML email prototypes MUST reference this document for brand-consistent output.*
