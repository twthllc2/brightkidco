# Components: Variants 8-10 + Flow 2

> Design System documentation for BrightKidCo Welcome Flow
> Source: `variants-7-10.jsx`, `flow2-emails.jsx`, `content-flow2.js`
> Date: 2026-05-26

---

## 1. Variant Overview (Email 1 Variants)

Variants 7-10 are alternative visual executions of Welcome Flow Email 1. All share the same content window (`window.E1_CONTENT`) and brand constants (`B`, `F`).

| Variant | Name | Mood | Key Visual Device | Width |
|---------|------|------|-------------------|-------|
| V7 | Conversational Chat | iMessage-like | Chat bubbles, "active now" indicator | 420px |
| V8 | Scrapbook / Journal | Handmade, tactile | Tape elements, handwritten font, index cards | 420px |
| V9 | Clinical Premium | Trustworthy, BREZ-like | Card-based layout, soft medical teals, rounded corners | 420px |
| V10 | Bold Monochrome | Statement, contrast | Dark background, huge type, minimalist | 420px |

---

## 2. Variant 8 — Scrapbook / Journal (`V8_Scrapbook`)

### Character
A warm, tactile journal aesthetic. Mixed textures — taped index cards, handwritten notes, polaroid-style quotes, and slight rotations on cards.

### Sub-components

#### `Tape` (internal component)
Used liberally for physical "stuck to page" effect.

**Props:**
- `rot` (number, default 0) — rotation in degrees
- `top` (number/string, default 0) — absolute top offset
- `left` (string, default "50%") — absolute left positioning

**Styles:**
- Size: 60×20px
- Background: `rgba(255,214,102,0.7)` (translucent yellow washi)
- Border: `1px solid rgba(0,0,0,0.05)`
- Positioned via `transform: translateX(-50%) rotate(${rot}deg)`

#### Content sections

**Opening note:**
- Container: margin `40px 20px 0`, padding `36px 24px 28px`
- Background: `#FFFCF3`, paper shadow `0 3px 10px rgba(0,0,0,0.06), 0 1px 0 #EBE0C5`
- Tape at top center: rot -4°, top -10px
- Badge: "Note № 1 of 4" — `#8B7A52`, letterSpacing 2, uppercase
- H1: font `'Caveat', 'Fraunces', cursive` — 40px, lineHeight 1.05, letterSpacing -0.5
- Sub-line: italic, 14px, `#5A4E36`

**Creed (index card):**
- Container at margin `8px 20px 0`, padding `26px 24px`
- Background: `#FFF`, `boxShadow 0 4px 12px rgba(0,0,0,0.07)`
- Rotation: -1°
- Two tape pieces at top (30% and 75% left)
- Each creed line: handwritten font (22px) with `✓` checkmark in `B.green`

**Reframe ("here's the thing ↓"):**
- Handwritten label rotated -2°
- SVG underline path under "motivation" — teal squiggly stroke
- Third paragraph emphasized (weight 700, color `#2A2418`)

**Steps (stacked cards):**
- Each step card: rotated (-1.2°, 0.8°, -0.5°)
- Backgrounds per step: `#E8F5EC`, `#FFF2D8`, `#FFE8D6`
- Tape per step (alternating 20%/80% left, alternating -5/5 rotation)
- Step number in handwritten gradient font (28px)

**Quote (polaroid):**
- Container: margin `32px 30px 0`, padding `20px 18px 28px`
- Background: `#FFF`, `boxShadow 0 6px 16px rgba(0,0,0,0.08)`
- Rotation: 1°
- Quote text handwritten (20px)
- Attribution `#8B7A52`

**CTA:**
- Button: gradient bg, `borderRadius 999`, `boxShadow 3px 3px 0 #2A2418`
- Fine print in handwritten font

**Footer:**
- Background `#EBE0C5`, text `#8B7A52`
- Links: Unsubscribe · Preferences (both `#8B7A52`)

---

## 3. Variant 9 — Clinical Premium (`V9_Clinical`)

### Character
A soft-medical, trustworthy aesthetic. Clean white cards on a light teal-tinted background. Rounded shapes, numbered sections, clinical labels.

**Background:** `#F4F9F9` · **Text:** `#1A2B2D`

### Layout

**Header module:**
- Badge pill: `background #E0F2EE`, `color B.tealDeep`, `borderRadius 999`, uppercase, letterSpacing 1.5
- Text: "● Module 01 of 04"

**H1:** 38px, lineHeight 1.1, letterSpacing -0.8, gradient accent on "anything wrong."

**Letter card:**
- Container: margin `40px 20px 0`, padding `32px 28px`
- Background: `#FFF`, borderRadius 20, `boxShadow 0 2px 16px rgba(26,43,45,0.06)`
- Text color: `#3B4F51`, lineHeight 1.75
- Creed items separated by `borderTop: 1px solid #E0EDEB`
- Each creed line: circle badge with gradient bg + white SVG checkmark

**Reframe section ("① The Science"):**
- Section label: tealDeep, letterSpacing 2, uppercase
- H2: 28px, lineHeight 1.2
- Info callout: `background #E0F2EE`, `borderRadius 12`, `color B.tealDeep`
  - Font size 13, with interoception definition
  - ↳ icon before text

**Steps section ("② The Method"):**
- White card with `borderRadius 20`, `boxShadow 0 2px 16px`
- Steps separated by `borderBottom: 1px solid #E8F0EF`
- Step number in gradient: `01`, `02`, `03` — gradient text, letterSpacing 1

**Quote card:**
- Container: `margin 40px 20px 0`, padding `28px 24px`
- Background: `B.gradient`, color `#FFF`, borderRadius 20
- Eyebrow: "From a parent"
- Quote: 17px, fontWeight 600
- Attribution: 12px, opacity 0.9

**CTA:**
- Full-width block button (`display: block`) with borderRadius 14
- No box-shadow, no rotation — clean medical

**Footer:**
- Text: `#8B9FA1`
- Links: Unsubscribe · Preferences

---

## 4. Variant 10 — Bold Monochrome (`V10_BoldMono`)

### Character
Dark, high-contrast, editorial. Huge typography, no decoration. White-on-black with bright accents.

**Background:** `#0E1617` (near-black) · **Text:** `#FFF`

### Key Visual Choices

**Header:**
- Logo inverted: `filter: brightness(0) invert(1)`
- Progress indicator: "01/04" in muted white

**H1:**
- 56px, lineHeight 0.95, fontWeight 700, letterSpacing -2.5
- Each word on its own line (enforced by `<br/>`)
- "wrong." in gradient text

**Divider:**
- `1px solid rgba(255,255,255,0.15)` between sections

**Creed ("white section" brand break):**
- Background switch: `#FFF` with `#0E1617` text
- Each line: 28px, fontWeight 700, letterSpacing -0.8
- Numbered `01`, `02`, `03` in teal
- First line in gradient

**Reframe:**
- Section label: `▸ The Reframe` in `B.green`
- H2: 40px, lineHeight 1.05, letterSpacing -1.2, line-broken through `<br/>`
- Third paragraph: `#FFF` (bold), rest `rgba(255,255,255,0.75)`

**Steps:**
- Section divider: `borderTop: 1px solid rgba(255,255,255,0.12)` between each step
- Step number: 72px, lineHeight 0.85, letterSpacing -3, gradient text
- Step title: 22px

**Quote:**
- Huge opening quote mark: 90px, lineHeight 0.6, gradient text
- Quote text: 22px, fontWeight 700
- Attribution: `rgba(255,255,255,0.5)`, uppercase, letterSpacing 1

**CTA (white section):**
- Full-width block button: `borderRadius 0` (square!)
- Button text `.toUpperCase()` with `→`
- Fine print: uppercase, letterSpacing 0.5, fontWeight 600

**Footer:**
- `borderTop: 1px solid rgba(255,255,255,0.12)`
- Link color: `rgba(255,255,255,0.5)`

---

## 5. Flow 2 — Discount Welcome Flow

Flow 2 is a 4-email sequence triggered when a user signs up via a discount popup. It reuses all Flow 1 primitives (`EmailShell`, `Header`, `Footer`, `Signoff`, `OutLine`, `Band`, `Letter`, `TitleBlock`, `Eyebrow`, `H2`, `CTAClose`, `FramedImage`, `ProductShowcaseSoft`, `ProductShowcaseMedium`, `ProductShowcaseFull`) and adds two new components.

**Sender persona:** Lena (founder), same as Flow 1 but with more direct transactional framing.

**Code:** BRIGHT10 — 10% off, valid 7 days

| Email | Timing | Subject | Key Content |
|-------|--------|---------|-------------|
| F2E1 | Immediate | Code Delivery | CodeBlock, product showcase, differentiation, Trustpilot, what's next |
| F2E2 | +36h | Mechanism | Interoception definition, 3-card comparison, OT quote, ReminderBar |
| F2E3 | +3 days | Parent Story | Sarah & Marcus chapters, pull-quote, promise badges, ReminderBar |
| F2E4 | +2 days | Guarantee Closer | 60-day guarantee seal, what's covered/not covered, counter-testimonial, ReminderBar |

---

## 6. New Primitives — CodeBlock & ReminderBar

### `CodeBlock`

```jsx
<CodeBlock
  code="BRIGHT10"
  label="Your welcome code"
  note="Valid for 7 days · 10% off your first order"
  bg="#FFFFFF"
  compact={false}
/>
```

**Purpose:** A prominent, copy-able discount code display. The "hero moment" of Flow 2 Email 1, referenced in subsequent emails.

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `code` | string | `"BRIGHT10"` | The discount code text |
| `label` | string | `"Your welcome code"` | Eyebrow label above the code |
| `note` | string | — | Optional italic note below the code |
| `bg` | string | `"#FFFFFF"` | Card background color |
| `compact` | bool | `false` | Smaller variant for reuse in later emails |

**Outer container:**
- Border: `2px solid ${B.ink}` (`#1F2D2F`)
- Border radius: 22px
- Box shadow: `4px 4px 0 ${B.ink}` (ink drop-shadow)
- Padding (normal): `28px 24px 24px`
- Padding (compact): `18px 20px`
- `position: relative`, `overflow: hidden`

**Gradient top bar:**
- Absolute, top 0, full width, height 6px
- Background: `B.gradient`

**Label:**
- Font size 10.5, letterSpacing 1.6, uppercase
- Color: `B.tealDeep`, fontWeight 700
- Margin bottom: 10 (normal) / 6 (compact)

**Code display (dashed border):**
- `display: inline-block`
- Padding normal: `18px 36px` / compact: `10px 22px`
- Background: `#FAF7F0` (warm light beige)
- **Border: `2.5px dashed ${B.ink}`** — the signature style
- Border radius: 14px
- Font family: `'Courier New', ui-monospace, Menlo, monospace`
- Font size: 34 (normal) / 22 (compact)
- Font weight: 700
- Color: `B.ink`
- Letter spacing: 4 (normal) / 2 (compact)
- Margin bottom: 14 (normal) / 6 (compact)

**Note:**
- Font size 13 (normal) / 11.5 (compact)
- Color: `B.soft`, `fontStyle: italic`
- Visible only if `note` prop is provided

**Tap-to-copy hint:**
- Only rendered in non-compact mode
- Text: "Tap to copy · Auto-applied at checkout"
- Font size 11, color `B.muted`

---

### `ReminderBar`

```jsx
<ReminderBar
  label="Your code is still here"
  body="BRIGHT10 · 5 days left"
  bg="#FFF6E2"
/>
```

**Purpose:** A compact urgency strip appearing mid-email in Flow 2 Emails 2-4, showing the discount code and days remaining.

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | string | — | Eyebrow label above the countdown |
| `body` | string | — | The countdown text (code + days) |
| `bg` | string | `"#FFF6E2"` | Background color |

**Container:**
- `display: flex`, `alignItems: center`, `gap: 12`
- Padding: `14px 22px`
- Border top: `1.5px solid ${B.ink}`
- Border bottom: `1.5px solid ${B.ink}`
- No left/right border — it's a full-width strip

**Clock icon:**
- Container: 32×32px, `background #FFF`, `border 1.5px solid ${B.ink}`, borderRadius 8
- Content: `⏱` emoji, fontSize 14
- `flexShrink: 0`

**Label:**
- Font size 10, letterSpacing 1.3, uppercase
- Color: `B.tealDeep`, fontWeight 700
- Margin bottom: 2px

**Body (countdown):**
- Font size 13.5, fontWeight 600
- Color: `B.ink`
- Font family: `'Courier New', monospace` (mono for the code)
- Letter spacing: 1.5

---

## 7. Flow 2 — 4 Emails Detailed

### Email 1 — Code Delivery (`F2Email1`)

| Section | Background | Content |
|---------|-----------|---------|
| Shell + Header | `#FFFBF0` | `EmailShell(preheader=c.preheader)`, `Header` |
| Title | `#FFFBF0` | `TitleBlock(badge="Welcome · 01 of 04")` |
| Band | → `#FAF7F0` | Gradient transition |
| Letter | `#FAF7F0` | `Letter(first="Lena here 👋")` — greeting + no-pressure intro |
| **CodeBlock** | `#FAF7F0` | Full-size code block with BRIGHT10 · label · note |
| Band | → `#F5F1EA` | |
| Product Showcase Full | `#F5F1EA` | `ProductShowcaseFull` — Body-Signal Learning Layer™, price `€30.60`, features: code pre-applied, 60-day guarantee |
| Band | → `#FFF6E2` | |
| Differentiation | `#FFF6E2` | "Quick note" — one paragraph |
| Trustpilot | `#FFF6E2` | ★★★★★ 4.9 · 2,400+ reviews |
| Band | → `#EAF6F2` | |
| What's Next | `#EAF6F2` | 3 timeline cards: +36h (mechanism), +4 days (story), +1 week (guarantee) |
| Band | → ink | gradient 50px |
| CTAClose | `B.ink` | `CTAClose` — intro, button "Shop with BRIGHT10", fine print |
| Signoff | `B.ink` | `Signoff` |
| OutLine | — | `OutLine` |
| Footer | — | `Footer` |

### Email 2 — Mechanism (`F2Email2`)

| Section | Background | Content |
|---------|-----------|---------|
| Shell + Header | `#FFFBF0` | preheader about interoception |
| Title | `#FFFBF0` | `TitleBlock(badge="Welcome · 02 of 04")` — "Before you use BRIGHT10." |
| Band | → `#FAF7F0` | |
| Letter | `#FAF7F0` | `Letter(first="Hi again — Lena.")` — mechanism intro |
| Band | → `#FFF6E2` | |
| Mechanism definition | `#FFF6E2` | Eyebrow, H2 "Interoception.", definition card (white, ink-shadow border), mechanism body |
| Band | → `#EAF6F2` | |
| Comparison cards | `#EAF6F2` | 3 comparison items: Pull-ups (red ✕), Regular underwear (amber ✕), Body-Signal Layer™ (green ✓) — each with circle badge |
| Band | → `#F0EDF8` | |
| OT Quote | `#F0EDF8` | "Clinical perspective" — white card with ink shadow, OT quote |
| Band | → `#FFFBF0` | |
| Product Medium | `#FFFBF0` | `ProductShowcaseMedium` — "Built around the signal", price €30.60 |
| **ReminderBar** | `#FFF6E2` | "Your code is still here · BRIGHT10 · 5 days left" |
| Band | → ink | gradient 50px |
| CTAClose | `B.ink` | `CTAClose` — "See the pants", fine print mentions 5 days left |

### Email 3 — Parent Story (`F2Email3`)

| Section | Background | Content |
|---------|-----------|---------|
| Shell + Header | `#FAF7F0` | preheader about Sarah |
| Hero | `#FAF7F0` | `FramedImage` height 260 — "HERO · PARENT + CHILD" |
| Title | `#FAF7F0` | `TitleBlock` — "One story. One parent." subhead: "This might feel familiar." |
| Band | → `#FFFBF0` | |
| Letter | `#FFFBF0` | `Letter(first="Lena here again.")` — intro Sarah |
| Band | → `#FFF6E2` | |
| Chapters | `#FFF6E2` | 4 chapter cards (Year 1, Year 2, Year 3, What changed) — each with `when` header stripe, title, body. Final chapter has green tinted header |
| Band | → `#EAF6F2` | |
| Pull-quote | `#EAF6F2` | Large open quote, italic body, attribution |
| Band | → `#FFFBF0` | |
| Promise badges | `#FFFBF0` | Horizontal row: Trustpilot 4.9 · 60-day guarantee · Parent-to-parent real — each as pill `borderRadius 999` |
| Band | → `#F5F1EA` | |
| Product Showcase Full | `#F5F1EA` | "The pants Sarah used" — full product card with features: BRIGHT10 applied, 4.9 Trustpilot, 60-day guarantee |
| **ReminderBar** | `#FFF6E2` | "Your code is still waiting · BRIGHT10 · 2 days left" |
| Band | → ink | gradient 50px |
| CTAClose | `B.ink` | "Start with what worked for Sarah" |

### Email 4 — Guarantee Closer (`F2Email4`)

| Section | Background | Content |
|---------|-----------|---------|
| Shell + Header | `#FFFBF0` | preheader about guarantee |
| Title | `#FFFBF0` | `TitleBlock` — "Protected, even if you wait." |
| Band | → `#FAF7F0` | |
| Letter | `#FAF7F0` | "Lena — final note." — code expires, but guarantee matters more |
| Band | → `#EAF6F2` | |
| Guarantee hero | `#EAF6F2` | "The 60-Day Calm-Progress Guarantee™" — SVG circular seal with 60 in center, dashes around, text path on circle |
| Band | → `#FFFBF0` | |
| What's covered | `#FFFBF0` | Two cards: "Covered" (green badge, ✓ items) and "Not a thing" (red badge, ✕ items) |
| Band | → `#FFF6E2` | |
| Return story | `#FFF6E2` | Counter-testimonial card — a real return story with italic body + framing |
| Band | → `#F5F1EA` | |
| Product Showcase Full | `#F5F1EA` | "Protected, either way" — last day for code, price €30.60 |
| **Code reminder** | `#F5F1EA` | Dashed-teal-bordered card: "BRIGHT10 · Last day." + reassurance text |
| Band | → ink | gradient 50px |
| Dual CTA | `B.ink` | Primary: `#D8F57C` bg "Start protected →" · Secondary: transparent/outline "Remind me later" |

---

## 8. Flow 2 vs Flow 1 — Schematic Differences

### Structural Differences

| Aspect | Flow 1 (6 emails) | Flow 2 (4 emails) |
|--------|-------------------|-------------------|
| **Trigger** | Signup via autistic parent content | Signup via discount popup |
| **Goal** | Trust-building, permission, methodology | Transactional, deadline-driven |
| **Sender** | Lena (founder) | Lena (founder) same identity |
| **Code** | No discount code | BRIGHT10 — 10% off, 7-day validity |
| **Email count** | 6 | 4 |
| **First email** | "You haven't done anything wrong" (philosophical reassurance) | "Your code, as promised." (direct value delivery) |
| **Timing** | Immediate → +24h → +2d → +4d → +6d → +8d | Immediate → +36h → +3d → +2d |
| **Total duration** | ~8 days | ~5-6 days (code expires day 7) |
| **Product reveal** | Email 4 (soft, educational) | Email 1 (immediate, below code) |
| **Story** | Email 5 (Sarah) | Email 3 (Sarah — shortened 4 chapters vs 4+ in Flow 1) |
| **Closing** | Email 6 — The Invitation (emotional close) | Email 4 — Guarantee closer (expiry-driven) |
| **Urgency mechanics** | None | Code expiry countdown, ReminderBar, "last day" messaging |
| **Returns marketing** | Implicit 60-day guarantee | Explicit "Calm-Progress Guarantee" with counter-testimonial |
| **CodeBlock** | Not present | Hero component in E1, referenced in E2-E4 |
| **ReminderBar** | Not present | Present in E2-E4, countdown ticks down |
| **Dual CTA** | Single CTA per email | Dual CTA in E4 (primary + secondary "Remind me later") |

### Flow 1 Email Map (for reference)

| Email | Title | Timing |
|-------|-------|--------|
| E1 | Permission & Reassurance | Immediate |
| E2 | The Mechanism | +24h |
| E3 | Why Everything Failed | +2 days |
| E4 | How the Product Works | +4 days |
| E5 | Sarah's Story | +6 days |
| E6 | The Invitation | +8 days |

### Flow 2 Email Map

| Email | Title | Timing | CodeBlock | ReminderBar |
|-------|-------|--------|-----------|-------------|
| F2E1 | Code Delivery | Immediate | ✅ Full-size | — |
| F2E2 | Mechanism | +36h | — | ✅ "5 days left" |
| F2E3 | Parent Story | +3 days | — | ✅ "2 days left" |
| F2E4 | Guarantee Closer | +2 days | — | ✅ "Last day" |

### Shared Components (identical in both flows)

- `EmailShell` — outer wrapper with preheader
- `Header` — logo, 34px height, centered
- `PartBadge` — yellow rotated sticker (`#FFD866`)
- `TitleBlock` — badge + h1 with gradient accent
- `Letter` — paragraph stack with first-line emphasis
- `Eyebrow` — section label, uppercase, letterSpacing 2
- `H2` — section heading, configurable size
- `Band` — gradient color transition, configurable height
- `FramedImage` — image placeholder with ink shadow
- `ImgFrame` — dashed teal frame for image slots
- `ProductShowcaseSoft` — inline product reference (no price)
- `ProductShowcaseMedium` — product card with price and CTA
- `ProductShowcaseFull` — full product card with features list
- `CTAClose` — dark CTA section with lime-green button
- `Signoff` — Lena's personal signoff with handwritten name
- `OutLine` — "Out of this series? Unsubscribe." line
- `Footer` — tagline + unsubscribe/preferences links
