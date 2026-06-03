# BrightKidCo Email Design System — Complete Pattern Extraction
**Source directories:** `BKCO - EMAIL MARKETING/` and `BKCO - EMAIL MARKETING-2/`
**Files analyzed:** 33 files (11 HTML + 4 JS + 18 JSX)

---

## 1. BRAND COLORS (TOKENS)

### Primary Brand Palette (`tokens.js`)
| Token | Hex | Usage |
|-------|-----|-------|
| `B.teal` | `#2BAEB4` | Primary accent, CTAs, gradients, underlined sections |
| `B.tealDeep` | `#1E8A8F` | Dark teal, section eyebrows, labels |
| `B.green` | `#5DD07A` | Secondary accent, positive signals, success badges |
| `B.greenDeep` | `#3BB35E` | Dark green variant |
| `B.ink` | `#1F2D2F` | Primary text, card borders, box shadows |
| `B.soft` | `#4A6568` | Body text, secondary paragraphs |
| `B.muted` | `#8A9B9D` | Muted labels, fine print, footer text |
| `B.cream` | `#FBF7F1` | Warm background, footer sections |
| `B.paper` | `#FFFFFF` | White cards, backgrounds |

### Brand Gradient
```css
linear-gradient(135deg, #2BAEB4 0%, #5DD07A 100%)
```
Used for: headline accent text, CTA buttons, section bands, progress bars.

### Section Background Palette (used across all email variants)
| Name | Hex | Where Used |
|------|-----|------------|
| Hero bg | `#FFFBF0` / `#FAF5EC` | Email openers, hero blocks |
| Letter bg | `#FFF6E2` / `#FBF7F1` | Letter body sections |
| Creed | `#FFFBF0` | Core statement sections |
| Reframe | `#EAF6F2` / `#E8F5EC` | Reframe blocks, science sections |
| Path | `#FFFBF0` | "A different path" sections |
| Quote | `#FFF6E2` / `#FFD866` | Testimonial blocks |
| Product | `#F0EDF8` / `#F5F1EA` / `#E8F0FC` | Product showcase sections |
| CTA | `#1F2D2F` (B.ink) | Dark CTA sections |
| Code | `#FAF7F0` | Discount code blocks |
| Expert | `#F0EDF8` / `#E8F5EC` | Expert/OT quote cards |
| Comparison | `#FFFBF0` | Comparison tables |
| Story | `#FFF6E2` | Parent story chapters |
| Mint | `#E8F5EC` | Insight blocks |
| Lilac | `#EEE8F6` | Soft premium hero gradients |
| Beige/Paper | `#E8DFD1` / `#F4EDE0` | Warm beige variant |
| Dark bg | `#0E1617` / `#14262A` / `#0A1618` | Bold monochrome, dark variants |
| Yellow | `#FFD866` | Sticker badges, quote blocks, accent highlights |

### Additional Variant-Specific Colors
| Color | Hex | Used In |
|-------|-----|---------|
| Peach | `#FFB5A0` | V6 Duotone, creed stickers |
| Warm cream | `#FFF9F0` | V1 Storybook background |
| Ink brown | `#2A2620` / `#2A2418` | Warm beige variant text |
| Soft text | `#3D5052` / `#4A4036` | Body text variants |
| Dark bg accent | `#5DD07A` (green on dark) | Dark playful variant |
| Dark yellow accent | `#FFD866` on dark | Dark variant borders |
| Coral/rose | `#D97757` | Not-covered badges, negative indicators |
| Amber | `#E8A23D` | Warning/comparison accent |
| Rating green | `#00B67A` | Trustpilot star color |

---

## 2. FONT SPECIFICATIONS

### Core Font System
| Role | Font Family | Stack |
|------|------------|-------|
| **Main/Mobile** | Questrial | `'Questrial', system-ui, sans-serif` |
| **Display Accent** | Fraunces | `'Fraunces', Georgia, serif` |
| **Handwritten** | Caveat | `'Caveat', cursive` |
| **Body (Email 1)** | Inter | `'Inter', system-ui, sans-serif` |
| **Monospace (Code)** | Courier New | `'Courier New', ui-monospace, Menlo, monospace` |

### Font Weights Used Per Family
| Family | Weights |
|--------|---------|
| Questrial | Default (400) |
| Fraunces | `400`, `500`, `600`, `700` + italic variants |
| Caveat | `400`, `500`, `600`, `700` |
| Inter | `400`, `500`, `600`, `700` |

### Google Fonts Imports
**Primary (most variants):**
```
https://fonts.googleapis.com/css2?family=Questrial&family=Fraunces:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Caveat:wght@400;500;700&display=swap
```
**Email 1 (early version):**
```
https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@400;500;600;700&display=swap
```

### Typographic Scale (Mobile 420px / Desktop 600px)
| Element | Size | Weight | Line Height | Letter Spacing |
|---------|------|--------|-------------|----------------|
| H1 (Big) | 40px / 56px | 700 | 0.95–1.05 | -0.8 to -2.5 |
| H1 (Standard) | 36–42px | 700 | 1.0–1.1 | -0.6 to -1.2 |
| H2 | 28–34px | 700 | 1.1–1.2 | -0.4 to -0.7 |
| H3 / Step title | 15–19px | 700 | 1.25–1.3 | 0 |
| Body text | 14–16px | 400 | 1.65–1.75 | 0 |
| Pullquote | 18–22px | 500–600 | 1.35–1.5 | italic |
| Fine print | 11–12.5px | 400 | 1.55–1.65 | 0 |
| Eyebrow/label | 10–11px | 700 | — | 1.5–2.5 |
| Button text | 15–15.5px | 700 | — | 0.2–0.5 |
| Part badge | 10.5px | 700 | 1.4 | 1.5 (uppercase) |
| Drop cap | 54–64px | 500–700 | 0.85 | — |
| Code display | 22–34px | 700 | — | 2–4 (monospace) |

---

## 3. SPACING PATTERNS

### Email Width
| Context | Width | Notes |
|---------|-------|-------|
| **Mobile (most variants)** | **420px** | Primary viewport for all variants |
| **Desktop (Email 1 early)** | **600px** | Early hi-fi prototype |
| **Design canvas artboard (10 UX)** | 420px | Mobile-optimized |
| **Design canvas artboard (early)** | 560px / 640px | Brief canvases |

### Padding & Margins
| Pattern | Value | Where |
|---------|-------|-------|
| Outer email padding | `20px 20px 60px` | Email shell padding |
| Header padding | `24px 20px 0` | Logo area, centered |
| Section padding | `22px 24px` / `28px 28px` | Content sections |
| Body left/right | `22px` / `24px` / `28px` / `32px` / `44px` | Varied by variant |
| Body horizontal (desktop E1) | `32px` / `44px` | Early version |
| CTA section padding | `20px 22px 44px` | Bottom CTA area |
| Footer padding | `30px 24px 30px` / `20px 20px 26px` | BREZ footer |
| Between paragraphs | `0 0 14px` or `0 0 18px` | Consistent |
| Section gap (steps) | `12px` / `14px` / `22px` / `24px` | Between cards |
| Image/section margin | `margin: \"24px 14px 0\"` / `\"0 16px\"` | Section images |

### Border Radius
| Component | Radius |
|-----------|--------|
| CTA buttons | `999px` (pill) |
| Section badges | `999px` (pill) |
| Content cards | `16–24px` |
| Image frames | `20px` (hero), `18px` (section) |
| Desktop E1 hero | `28px` |
| Code blocks | `22px` / `14px` |
| Comparison cards | `16px` |
| Stickers | `16px` |
| Quote blocks | `20px` |

### Box Shadows
| Pattern | Where |
|---------|-------|
| `4px 4px 0 {B.ink}` | Stickers, cards, code blocks (default) |
| `3px 3px 0 {B.ink}` | Smaller cards, images |
| `6px 6px 0 {B.ink}` | Framed images, product cards |
| `0 2px 0 rgba(43,174,180,0.15)` | Desktop CTA |
| `0 3px 10px rgba(0,0,0,0.06)` | Scrapbook paper |
| `0 6px 16px rgba(0,0,0,0.08)` | Polaroid/photo cards |
| `0 8px 20px rgba(0,0,0,0.08)` | Polaroid opener |
| `0 10px 0 -2px {B.teal}, 0 14px 0 -2px {B.ink}` | V10 Story Book stacked shadow |

### Max-Width Constraints
| Element | Max-Width |
|---------|-----------|
| Subhead text | `320px` / `340px` / `440px` / `460px` |
| Footer address | `340px` |
| Quote text | `440px` |
| Body hero sub | `460px` |

---

## 4. CTA BUTTON PATTERNS

### Primary CTA (Gradient — Most Common)
```html
<a href="#" style="
  display: inline-block;
  padding: 16px 32px;
  background: linear-gradient(135deg, #2BAEB4 0%, #5DD07A 100%);
  color: #FFFFFF;
  font-size: 15px;
  font-weight: 700;
  text-decoration: none;
  border-radius: 999px;
  letter-spacing: 0.3px;
">See how the method works →</a>
```
Variants include:
- **With ink shadow + border:** `boxShadow: 4px 4px 0 #1F2D2F`, `border: 2px solid #1F2D2F`
- **Rotated:** `transform: rotate(-0.5deg)` (playful variants)
- **Full-width block:** `display: block; width: 100%` (soft premium, bold mono)
- **Block + uppercase + no radius:** `borderRadius: 0` (magazine editorial, bold mono)
- **Desktop (Email 1):** `boxShadow: 0 2px 0 rgba(43,174,180,0.15)`

### Dark Mode CTA (Ink background → Lime/Green Text)
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
  letter-spacing: 0.3px;
">See how the method works →</a>
```
Used in: `CTAClose` component (dark ink CTA section), V10 Final.

### Secondary CTA (Border-only)
```html
<a href="#" style="
  display: block;
  width: 100%;
  padding: 14px 24px;
  background: transparent;
  color: #BAD5D7;
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
  border-radius: 999px;
  text-align: center;
  border: 1.5px solid #3A4547;
">Not ready yet — that's okay</a>
```
Used in: Flow 2 Email 4 (dual CTA layout).

### CTA Fine Print Pattern
```html
<div style="margin-top: 14px; font-size: 11.5px; color: #8A9B9D;">
  No rush. No pressure. Read it when you have a quiet moment.
</div>
```

### CTA Arrow
All primary CTAs append ` →` after the button text.

---

## 5. HEADER / FOOTER LAYOUTS

### Header (Page `Header` Component)
**Mobile (420px):**
```html
<div style="background: {sectionBg}; padding: 24px 20px 0; text-align: center;">
  <img src="../assets/brightkidco-logo-v2.png" alt="BrightKidCo" style="height: 34px;" />
</div>
```
- Logo height: **34px** (most), **24–28px** (Editorial), **22px** (V10 Bold Mono, inverted)
- Logo path: `../assets/brightkidco-logo-v2.png` or `../../assets/brightkidco-logo-new.png`
- Centered always
- Inverted logo: `filter: brightness(0) invert(1)` (dark variants)

### Editorial Masthead Header
```html
<div style="padding: 22px 22px 16px; border-bottom: 2px solid #1F2D2F; display: flex; align-items: center; justify-content: space-between;">
  <img src="logo" alt="BrightKidCo" style="height: 24px;" />
  <div style="font-size: 9px; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 700;">Vol. 1 · No. 1</div>
</div>
```

### Chat-style Header
```html
<div style="padding: 16px 20px; background: #F7F7F9; border-bottom: 1px solid #E5E5E8; display: flex; align-items: center; gap: 12px;">
  <div style="width: 38px; height: 38px; border-radius: 50%; background: gradient; ...">BK</div>
  <div>BrightKidCo</div>
  <div style="margin-left: auto;"><img src="logo" height="16" opacity=0.6 /></div>
</div>
```

### Footer (BREZ-inspired `Footer` Component)
```html
<div style="background: #FFFFFF; padding: 30px 24px; text-align: center;">
  <!-- Tagline in Fraunces italic -->
  <div style="font-family: 'Fraunces', Georgia, serif; font-size: 20px; font-style: italic; font-weight: 500; color: #1F2D2F; margin-bottom: 30px;">
    Calm progress, one day at a time.
  </div>
  <!-- Navigation links -->
  <div style="font-size: 14px; color: #1F2D2F; font-weight: 500; margin-bottom: 14px;">
    <a href="#" style="color: #1F2D2F; text-decoration: none;">Our Method</a>
  </div>
  <!-- Social icons (Instagram, Facebook, TikTok) -->
  <div style="display: flex; justify-content: center; gap: 22px; margin: 14px 0 28px;">
    <svg>...</svg>
  </div>
  <!-- Address + unsubscribe -->
  <div style="font-size: 11.5px; color: #8A9B9D; max-width: 340px; margin: 0 auto;">
    No longer want to receive these emails? <a href="#" style="color: #1F2D2F;">Unsubscribe</a>.<br/>
    BrightKidCo Ltd · Berlin, Germany · hello@brightkidco.com
  </div>
  <!-- Gradient bar accent -->
  <div style="margin: 28px auto 0; width: 60px; height: 3px; background: gradient; border-radius: 3px;" />
</div>
```

### Simple Footer (Variant pattern)
```html
<div style="padding: 16px 20px 24px; background: {bg}; text-align: center; font-size: 10.5px; color: {color};">
  BrightKidCo · A different path to dry days<br/>
  <a href="#" style="color: {color};">Unsubscribe</a> · <a href="#" style="color: {color};">Preferences</a>
</div>
```

### Preheader (Hidden preview line)
```html
<div style="padding: 6px 20px; font-size: 11px; color: #8A9B9D; background: #F6F2EA; text-align: center; font-style: italic;">
  Preheader: {text}
</div>
```

### "Out" Line (Unsubscribe-adjacent calming line)
```html
<div style="background: #FFFFFF; padding: 18px 24px 0; text-align: center; font-size: 12.5px; color: #8A9B9D; font-style: italic;">
  You can pause this series anytime. Come back when you're ready.
</div>
```

### Signoff (Personal · `Signoff` Component)
Full component with:
- **Avatar ring**: gradient border (#FFD866 → #2BAEB4), white inner, portrait placeholder SVG
- **Name/role**: "A note from" + "Lena Bauer" + "Founder · BrightKidCo · Mom of two"
- **Handwritten signature**: Caveat font, 42px, color `#D8F57C`, with flourish SVG
- **P.S.**: Italic personal note
- **Container**: Dark card (#1F2A2C) with subtle gradient top border, dashed borders
- Used at end of **every** email in Flow 1 + Flow 2

---

## 6. PRICING DISPLAY FORMATS

### Price Display (ProductShowcaseFull)
```html
<div style="text-align: right;">
  <div style="font-size: 10px; color: #8A9B9D; font-weight: 700; letter-spacing: 1px; text-transform: uppercase;">From</div>
  <div style="font-size: 28px; font-weight: 700; color: #1F2D2F; line-height: 1; letter-spacing: -0.5px;">€34</div>
</div>
```
Price note below:
```html
<div style="font-size: 12.5px; color: #4A6568; font-style: italic;">Starter pair · 10% off first order</div>
```

### Pricing Formats Used
| Email | Price | Context |
|-------|-------|---------|
| Email 4 (Flow 1) | `€34` | Starter pair, free shipping over €50 |
| Email 6 (Flow 1) | `€34` | Starter pair, first-order 10% off |
| Email 5 (Flow 1) | `€34` | "starter pair" label |
| F2 Email 1 (Code) | `€30.60` | €34 minus BRIGHT10 |
| F2 Email 2 | `€30.60` | With code |
| F2 Email 3 | `€30.60` | €34 minus BRIGHT10 · 2 days left |
| F2 Email 4 | `€30.60` | €34 minus BRIGHT10 · Last day |

### Price Feature Pills
```html
<div style="display: flex; gap: 8px; flex-wrap: wrap;">
  <div style="display: flex; align-items: center; gap: 6px; padding: 7px 12px; background: #FAF7F0; border: 1.5px solid #1F2D2F; border-radius: 999px; font-size: 11.5px; font-weight: 600;">
    <span style="color: #2BAEB4; font-weight: 700;">◉</span>
    <span>Body-Signal Layer™</span>
  </div>
  <!-- More pills... -->
</div>
```
Feature pill sets used:
- **Standard**: Body-Signal Layer™ / 60-day guarantee / Sensory-friendly
- **F2 Code**: Code pre-applied / Body-Signal Layer™ / 60-day guarantee
- **F2 Sarah**: BRIGHT10 applied / 4.9 on Trustpilot / 60-day guarantee
- **F2 Closer**: 60-day guarantee / No questions / Real returns

### Micro Trust Line
```html
<div style="margin-top: 12px; text-align: center; font-size: 11px; color: #8A9B9D; letter-spacing: 0.3px;">
  Free shipping on orders over €50 · 60-day guarantee · Real returns
</div>
```

---

## 7. IMAGE PLACEHOLDER CONVENTIONS

### Primary Placeholder (`ImgFrame` Component)
**Visual style**: White frame with dashed teal border, corner SVG marks + picture icon + centered label
```html
<div style="position: relative; width: 100%; height: 200px; background: #FFFFFF; border: 2px dashed #2BAEB4; border-radius: 20px;">
  <!-- Corner SVGs (4 corners) + picture icon + label + sublabel -->
  <div style="font-size: 12.5px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; color: #2BAEB4;">
    HERO IMAGE
  </div>
  <div style="font-size: 12px; color: #4A6568;">
    Lifestyle shot · parent & child ...
  </div>
</div>
```

### Framed Image (Black border + drop-shadow)
```html
<div style="border-radius: 20px; overflow: hidden; border: 2px solid #1F2D2F; box-shadow: 4px 4px 0 #1F2D2F;">
  <ImgFrame ... />
</div>
```

### SVG Illustration Library (`illustrations.jsx`)
10 components with brand-style hand-drawn illustrations:
| Component | Description | Background |
|-----------|-------------|-----------|
| `Illu_GentleMorning` | Parent + child silhouettes, sunrise | `#FFE8D6` |
| `Illu_Letter` | Opened envelope, confetti | `#E8F5EC` |
| `Illu_QuietRoom` | Bedroom with teddy, moon, folded pants | `#EEE8F6` |
| `Illu_Hands` | Close-up adult + child hand holding | `#FFF2D8` |
| `Illu_ProductPants` | Three pairs in a row, confetti | `#E8F0FC` |
| `Illu_Airplane` | Paper airplane journey, dashed path | `#D4F0E4` |
| `Illu_Signal` | Body-signal diagram with waves | `#E8F5EC` |
| `Illu_Sensory` | Fabric, cut-out tag, heart | `#FFF2D8` |
| `Illu_CalmSun` | Horizon sun with face | `#FFFFFF` |
| `Illu_QuoteBadge` | Round stamp with quote marks | `#F5F1EA` |

---

## 8. MOBILE vs DESKTOP RESPONSIVE

| Aspect | Mobile (420px) | Desktop Early (600px) |
|--------|---------------|----------------------|
| **Viewport** | `420px` (all variants) | `600px` (Email 1 early) |
| **Font** | Questrial + Fraunces | Fraunces (H1) + Inter (body) |
| **Layout** | Single column, stacked cards | Single column, wider padding |
| **Padding LR** | 14–24px | 32–44px |
| **H1 size** | 36–40px | 40px |
| **H2 size** | 28px | 26px |
| **Body text** | 14.5px | 16px |
| **Button padding** | 16px 28–32px | 16px 32px |
| **Images** | Full-width, capped at 420px | Full-width |
| **Cards** | Stacked vertical | Wider, same stacked pattern |

**Design notes**: The entire system is intentionally mobile-first (420px). Desktop width (600px) was only used in the `Email1` early prototype. All newer variants target 420px exclusively.

---

## 9. KLAVIVO-SPECIFIC PATTERNS

Referenced in design context only — not yet implemented in the HTML:
- **Klaviyo variable syntax**: Not present in current files
- **Klaviyo export**: Referenced as "Step 2 — once you pick variants" (10 UX Variants HTML)
- **Email shell component**: `EmailShell` component wraps each email with preheader area + font family + width — ready for Klaviyo template injection
- **Discount code**: BRIGHT10 (7-day validity) used across Flow 2

---

## 10. COMPLETE COMPONENT LIBRARY PATTERNS

### Component Hierarchy
```
EmailShell (wrapper: width + font + preheader)
├── Preheader (hidden preview line)
├── Header (logo, centered)
├── FramedImage / ImgFrame / SVG Illus
├── PartBadge (sticker "Part X of Y")
├── TitleBlock (badge + H1 + optional subhead)
├── Band (gradient transition section gaps)
├── Letter (paragraph stack, warm background)
├── Eyebrow (section label)
├── H2 (section headline with gradient accent)
├── Steps / MethodCards / CompareCards
├── Quote blocks
├── ProductShowcaseFull / Medium / Soft
├── CodeBlock + ReminderBar (Flow 2 only)
├── CTAClose (ink background CTA section)
├── Signoff (Lena personal card)
├── OutLine (pause/unsubscribe line)
└── Footer (BREZ-style, social links, address)
```

### Product Showcase Variants

**1. ProductShowcaseFull** (Emails 4, 6, all Flow 2)
- Hero image (300px height) + floating guarantee badge
- Product name, price (€34 / €30.60), price note
- Feature pills row
- Ink-button CTA ("Shop the pants" →)
- Micro trust line
- 2-up sub row (colourways + size range)

**2. ProductShowcaseMedium** (Email 5, F2 Email 2)
- Two-column: 140px image + content
- Compact: price inline, smaller CTA
- Used for inline product mentions with story context

**3. ProductShowcaseSoft** (Emails 2, 3)
- Dashed teal border, small 60px thumbnail
- Text-first: "Designed around this"
- Underline-style CTA link ("See the different path" →)
- Non-pushy, gentle product nod

### TitleBlock Pattern
```html
<div style="padding: 34px 22px 0; text-align: center;">
  <div style="display: inline-block; background: #FFD866; padding: 7px 14px; border-radius: 999px; font-size: 10.5px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; margin-bottom: 16px; border: 2px solid #1F2D2F; transform: rotate(-1.5deg);">
    ✿ Part one of four
  </div>
  <h1 style="font-size: 40px; line-height: 1; font-weight: 700; margin: 0; letter-spacing: -0.8px;">
    You haven't done<br/>
    <span style="background: linear-gradient(135deg, #2BAEB4 0%, #5DD07A 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">wrong.</span>
  </h1>
</div>
```

### Three-Step Cards (Pattern)
Each email variant displays 3 steps (numbered 01–03) — consistent content, varied visual treatment:
1. **Prevalent**: Tinted rounded cards with colored number badges (teal/green/peach)
2. **Storybook**: Polaroid-style with slight rotation + tape accents (Scrapbook)
3. **Duotone**: Colored background blocks with numbered text
4. **Editorial**: Magazine-style with italic Fraunces numbers + bottom borders
5. **Clinical**: White card inside rounded container with "Step" eyebrow
6. **Bold Mono**: Giant 72px numbered gradient

### Quote Block Patterns
| Pattern | Background | Quote Mark |
|---------|-----------|------------|
| Default sticker | `#FFD866` (yellow) | Large " (36px) |
| Editorial | Divider lines | None |
| Green block (V3 Duotone) | `#E6F7E9` | 40px green |
| Gradient (V9 Clinical) | Brand gradient (to white text) | 11px uppercase label |
| Scrapbook | Handwritten Caveat | " " in Caveat |
| Dark mode | `#FFD866` (yellow) on dark | None |
| Bold mono | Gradient text giant " (90px) | 90px gradient |

### Email 1 (Early Desktop) — Special Pattern
- Width: 600px
- Font: Fraunces + Inter (not Questrial)
- Lilac gradient hero: `linear-gradient(180deg, #EEE8F6 0%, #F6F1FB 100%)`
- Larger padding: 44px left/right
- Steps: Flex row with tinted backgrounds + Fraunces number accents
- CTA: Gradient pill button
- Cream footer

### Flow 2 Components (Discount Welcome)

**CodeBlock** — hero discount display:
```html
<div style="background: #FFFFFF; border: 2px solid #1F2D2F; border-radius: 22px; box-shadow: 4px 4px 0 #1F2D2F; padding: 28px 24px; text-align: center;">
  <div style="position: absolute; top: 0; left: 0; right: 0; height: 6px; background: gradient;" />
  <div style="letter-spacing: 1.6px; text-transform: uppercase; color: #1E8A8F; font-weight: 700;">Your welcome code</div>
  <div style="display: inline-block; padding: 18px 36px; background: #FAF7F0; border: 2.5px dashed #1F2D2F; border-radius: 14px; font-family: 'Courier New', monospace; font-size: 34px; font-weight: 700; letter-spacing: 4px;">
    BRIGHT10
  </div>
  <div style="font-style: italic; color: #4A6568;">Valid for 7 days · 10% off your first order</div>
  <div style="font-size: 11px; color: #8A9B9D;">Tap to copy · Auto-applied at checkout</div>
</div>
```

**ReminderBar** — code expiry strip:
```html
<div style="background: #FFF6E2; padding: 14px 22px; display: flex; align-items: center; gap: 12px; border-top: 1.5px solid #1F2D2F; border-bottom: 1.5px solid #1F2D2F;">
  <div style="width: 32px; height: 32px; background: #FFFFFF; border: 1.5px solid #1F2D2F; border-radius: 8px; display: flex; align-items: center; justify-content: center;">⏱</div>
  <div>
    <div style="text-transform: uppercase; font-weight: 700; color: #1E8A8F;">Your code is still waiting</div>
    <div style="font-weight: 600; font-family: 'Courier New', monospace; letter-spacing: 1.5px;">BRIGHT10 · 2 days left</div>
  </div>
</div>
```

**Dual CTA Layout** (Flow 2 Email 4 only):
- Primary: Full-width lime (#D8F57C) ink-text button
- Secondary: Full-width ghost button (transparent, 1.5px border #3A4547)

### Guarantee Badge / Seal
Two variants:
1. **60-Day Badge** (floating on product image): `#FFD866` background, `border: 2px solid #1F2D2F`, rotation, `60 days calm` text
2. **Guarantee Seal** (circular SVG badge): 200px/160px circle with rotation text path, inner "60" + "Calm Days"

### Comparison Card Pattern
Three-item comparison (Pull-ups vs Regular underwear vs Body-Signal Layer™):
- Each card: colored top stripe (red/amber/green), ✓/✕ indicator
- Active/positive card: green border + gradient header
- Negative cards: light tint headers + ink border

### Trustpilot Badge
```html
<div style="display: flex; align-items: center; gap: 12px; padding: 12px 14px; background: #FFFFFF; border: 1.5px solid #1F2D2F; border-radius: 12px;">
  <div style="color: #00B67A; font-size: 16px;">★★★★★</div>
  <div style="font-weight: 600; color: #1F2D2F;">4.9</div>
  <div style="color: #8A9B9D;">Trustpilot · 2,400+ reviews</div>
</div>
```

---

## EXTRACTED FILE MANIFEST

### HTML Files Read (11)
1. `BKCO - EMAIL MARKETING/autistic-welcome/V10 Final.html`
2. `BKCO - EMAIL MARKETING/autistic-welcome/Welcome Flow - Autistic Parent.html`
3. `BKCO - EMAIL MARKETING/autistic-welcome/variants/10 New UX Variants.html`
4. `BKCO - EMAIL MARKETING/autistic-welcome/variants/10 UX Variants.html`
5. `BKCO - EMAIL MARKETING/welcome-flow/Welcome Flows - 10 Emails.html`
6–11. Same filenames in `BKCO - EMAIL MARKETING-2/` (duplicates)

### JS Files Read (4)
1. `variants/tokens.js` — Brand tokens (colors, fonts)
2. `variants/content.js` — Email 1 shared content across 10 variants
3. `welcome-flow/content.js` — Flow 1 Emails 2-6 content
4. `welcome-flow/content-flow2.js` — Flow 2 (discount welcome) content

### JSX Component Files Read (18)
1. `welcome-flow/primitives.jsx` — ImgFrame, Header, PartBadge, TitleBlock, Letter, Eyebrow, H2, CTAClose, Signoff, OutLine, Footer, EmailShell
2. `welcome-flow/product-showcase.jsx` — ProductShowcaseFull, Medium, Soft
3. `welcome-flow/emails-2-3.jsx` — Email2, Email3
4. `welcome-flow/emails-4-5.jsx` — Email4, Email5
5. `welcome-flow/email-6.jsx` — Email6
6. `welcome-flow/flow2-emails.jsx` — CodeBlock, ReminderBar, F2Email1-4
7. `autistic-welcome/variants/variants-1-3.jsx` — V1 Storybook, V2 Editorial, V3 PlayfulCards
8. `autistic-welcome/variants/variants-4-6.jsx` — V4 SoftMinimal, V5 WarmBeige, V6 Duotone
9. `autistic-welcome/variants/variants-7-10.jsx` — V7 Chat, V8 Scrapbook, V9 Clinical, V10 BoldMono
10. `autistic-welcome/variants/new-v1-4.jsx` — V1 StickerStudio, V2 MagazineMod, V3 DuotoneBlocks, V4 Scrapbook
11. `autistic-welcome/variants/new-v5-7.jsx` — V5 HeroStack, V6 DarkPlayful, V7 EditorialMix
12. `autistic-welcome/variants/new-v8-10.jsx` — V8 SoftPremium, V9 PosterBold, V10 StoryBook
13. `autistic-welcome/variants/illustrations.jsx` — 10 SVG illustration components
14. `autistic-welcome/V10-final.jsx` — V10 Final standalone (refined Story Book)
15. `autistic-welcome/email-1.jsx` — Email 1 early desktop prototype
16. `autistic-welcome/design-canvas.jsx` — Design canvas layout component (3x)
17. `welcome-flow/app.jsx` — App orchestrator
18. `emails/wireframes.jsx` + `emails/hifi.jsx` — Wireframe/hifi pages
