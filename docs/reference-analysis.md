# BKC Email Build — Reference Analysis

> Derived from studying Giuliano's welcome flow source files.
> Last updated: 2026-06-19

---

## 1. Architecture Overview

```
tokens.js          → window.BRAND (9 colors, 2 gradients), window.FONT (Questrial, Fraunces)
content.js         → window.FLOW1 (per-email copy data), window.FLOW1_SHARED (signoff/footer)
primitives.jsx     → 14 React components on window (EmailShell, Header, TitleBlock, etc.)
product-showcase.jsx → 3 product display levels (Soft, Medium, Full)
illustrations.jsx  → 10 inline SVG illustrations on window.Illus
email-N.jsx        → Individual email components (the assembly)
design-canvas.jsx  → Figma-like canvas wrapper (zero deps)
app.jsx            → Entry point, wires emails into DesignCanvas
```

**Everything runs on window globals.** No imports, no bundler. Load order in HTML matters.

---

## 2. Brand Tokens (`tokens.js`)

### Colors — `window.BRAND`
| Token | Hex | Role |
|-------|-----|------|
| `teal` | `#2BAEB4` | Primary accent |
| `tealDeep` | `#1E8A8F` | Dark teal (hover, deeper accents) |
| `green` | `#5DD07A` | Secondary accent |
| `greenDeep` | `#3BB35E` | Dark green |
| `ink` | `#1F2D2F` | Primary text / dark backgrounds |
| `soft` | `#4A6568` | Secondary text |
| `muted` | `#8A9B9D` | Tertiary/disabled text |
| `cream` | `#FBF7F1` | Warm background |
| `paper` | `#FFFFFF` | White background |
| `gradient` | `linear-gradient(135deg, #2BAEB4 0%, #5DD07A 100%)` | Brand signature |
| `gradientText` | Same gradient as text fill via `-webkit-background-clip` | Gradient headings |

### Fonts — `window.FONT`
| Token | Value | Role |
|-------|-------|------|
| `main` | `'Questrial', system-ui, sans-serif` | Body font |
| `display` | `'Fraunces', Georgia, serif` | Headline accent font |

---

## 3. Primitives (14 components)

| Component | Props | Purpose |
|-----------|-------|---------|
| `EmailShell` | `children, preheader, bg` | Outer wrapper, sets max-width 420px, renders preheader |
| `Header` | `bg` | Logo bar at top of email |
| `PartBadge` | `children` | Yellow pill sticker ("PART 1") |
| `TitleBlock` | `badge, part1, part2, accent2?, subhead?` | Badge + two-line h1 + optional subtitle |
| `Letter` | `bg, paras, first?` | Body text block, `first` = bold opening sentence |
| `Eyebrow` | `children, color?` | Small uppercase section label |
| `H2` | `children, center?, size?` | Section heading |
| `Band` | `from, to, height?` | Gradient color transition strip between sections |
| `FramedImage` | `children, height, label, sublabel, shadow?` | Ink-shadow image wrapper |
| `ImgFrame` | `height, label, sublabel, radius?, aspect?` | Dashed teal border placeholder |
| `CTAClose` | `intro, button, fine?, bg?` | Dark CTA block with lime-green button |
| `Signoff` | `bg?` | Lena's personal signoff (reads FLOW1_SHARED.signoff) |
| `OutLine` | `bg?` | Calming unsubscribe line (reads FLOW1_SHARED.out) |
| `Footer` | none | Tagline, links, social icons, address (reads FLOW1_SHARED.footer) |

### Product Showcase (3 levels)
| Component | Props | Used when |
|-----------|-------|-----------|
| `ProductShowcaseSoft` | `eyebrow, line, ctaText` | Gentle mention, no photo (icon only) |
| `ProductShowcaseMedium` | `eyebrow, title, priceFrom, ctaButton` | Side-by-side image + text |
| `ProductShowcaseFull` | `eyebrow, title, titleAccent, sub, priceFrom, priceNote, features?, ctaButton, guaranteeBadge?` | Full hero product card |

---

## 4. Email Assembly Pattern

Every email follows this skeleton:

```
EmailShell(preheader, bg)
  ├── Header(bg)
  ├── <div margin="24px 14px 0">
  │     └── FramedImage(height, label, sublabel, shadow=6)    ← HERO IMAGE
  ├── TitleBlock(badge, part1, part2)
  ├── Band(from → to)
  ├── Letter(bg, first="greeting", paras)                     ← OPENING
  ├── Band(from → to)
  ├── [CUSTOM SECTIONS — unique per email]                    ← THE MEAT
  ├── Band(from → to)
  ├── [more custom sections...]
  ├── Band(from → to, height=50)                              ← THICK BAND TO CTA
  ├── CTAClose(intro, button, fine)
  ├── Signoff()
  ├── OutLine()
  └── Footer()
```

**Key rules:**
- Band goes between EVERY section for smooth color transitions
- The final Band before CTAClose uses `height={50}` (thicker)
- CTAClose → Signoff → OutLine → Footer is always the same closing sequence
- Hero image always uses `FramedImage` with `shadow={6}`
- Each email defines its own `BG_*` constants at the top of the component

---

## 5. Color Palette Pattern

Each email defines 5-8 background colors that cycle through sections:

| Typical BG names | Colors used | Pattern |
|------------------|-------------|---------|
| `BG_HERO` | `#FFFBF0` or `#FFF6E2` or `#FAF7F0` | Warm cream/yellow |
| `BG_LETTER` | `#FFFBF0` or `#FFF6E2` | Warm |
| `BG_BODY_*` | `#EAF6F2`, `#F0EDF8`, `#FFFBF0` | Cool teal, purple, or warm |
| `BG_TEST` | `#FFF6E2` | Warm yellow for testimonials |
| `BG_CTA` | `B.ink` | Always dark for CTA block |

**Color cycling:** warm → cool → warm → cool → ... → dark (CTA)

---

## 6. Custom Section Patterns

### Pattern A: Paragraph Array
Used for: `letterOpening`, `definitionBody`, `reframeBody`, `closing`
```jsx
{c.someArray.map((p, i) => (
  <p key={i} style={{
    fontSize: i === 0 ? 17 : 14.5,     // first item larger
    color: i === 0 ? B.ink : B.soft,    // first item darker
    fontWeight: i === 0 ? 600 : 400,
    margin: "0 0 12px",
  }}>{p}</p>
))}
```

### Pattern B: Numbered Card Array
Used for: `methods`, `layers`, `chapters`, `guaranteePoints`
```jsx
{c.items.map((item, i) => {
  const accents = [B.teal, B.green, "#E8A23D"];
  return (
    <div style={{
      marginBottom: 16, background: "#FFF", borderRadius: 18,
      overflow: "hidden", border: `2px solid ${B.ink}`,
      boxShadow: `3px 3px 0 ${B.ink}`,
    }}>
      <ImgFrame height={130} radius={0} label={`...`} sublabel={`...`} />
      <div style={{ padding: "18px 20px 20px", borderTop: `2px solid ${B.ink}`, background: "#FFFDF6" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
          <div style={{ width: 32, height: 32, borderRadius: "50%", background: accents[i], color: "#FFF",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 12, fontWeight: 700, border: `2px solid ${B.ink}` }}>{item.n}</div>
          <h3 style={{ margin: 0, fontSize: 16.5, fontWeight: 700 }}>{item.name}</h3>
        </div>
        {/* item-specific content below */}
      </div>
    </div>
  );
})}
```

### Pattern C: Sticker/Reason Array
Used for: `reframePoints`
```jsx
{c.items.map((p, i) => {
  const cols = ["#FFB5A0", B.teal, B.green, "#FFD866"];
  const rot = [-0.8, 0.6, -0.4, 0.5];
  return (
    <div style={{
      background: cols[i], color: i === 3 ? B.ink : "#FFFFFF",
      padding: "14px 18px", borderRadius: 14,
      transform: `rotate(${rot[i]}deg)`,
      boxShadow: `3px 3px 0 ${B.ink}`, border: `2px solid ${B.ink}`,
      fontSize: 15, fontWeight: 700, lineHeight: 1.3,
    }}>{p}</div>
  );
})}
```

### Pattern D: Comparison Cards
Used for: `compareCards` (with `tone: "neg"|"pos"`)
```jsx
{c.compareCards.map((card, i) => {
  const isPos = card.tone === "pos";
  return (
    <div style={{
      background: "#FFFFFF",
      border: isPos ? `3px solid ${B.green}` : `2px solid ${B.ink}`,
      borderRadius: 16, overflow: "hidden",
      boxShadow: `3px 3px 0 ${B.ink}`,
    }}>
      <div style={{
        padding: "12px 18px",
        background: isPos ? B.gradient : (i === 0 ? "#FFE8E0" : "#F3EADF"),
        color: isPos ? "#FFFFFF" : B.ink,
        fontSize: 13, fontWeight: 700, letterSpacing: 0.3,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        borderBottom: `2px solid ${B.ink}`,
      }}>
        <span>{card.title}</span>
        <span style={{ fontSize: 18 }}>{isPos ? "✓" : "✕"}</span>
      </div>
      <div style={{ padding: "16px 18px", fontSize: 14, lineHeight: 1.55, color: B.soft }}>
        {card.body}
      </div>
    </div>
  );
})}
```

### Pattern E: Quote/Testimonial Card
Used for: `storyQuote`, `testimonial`
```jsx
<div style={{
  padding: "26px 22px", background: "#FFD866",
  borderRadius: 20, border: `2px solid ${B.ink}`,
  boxShadow: `4px 4px 0 ${B.ink}`, transform: "rotate(-0.3deg)",
}}>
  <Eyebrow color={B.ink}>{c.storyLabel}</Eyebrow>
  <div style={{ fontSize: 36, lineHeight: 0.8, color: B.ink, fontWeight: 700, marginBottom: 6 }}>"</div>
  <p style={{ fontSize: 16, lineHeight: 1.5, fontWeight: 500, margin: "0 0 12px", fontStyle: "italic", color: B.ink }}>
    {c.storyQuote}
  </p>
  <div style={{ fontSize: 12, color: B.ink, fontWeight: 700 }}>— {c.storyBy}</div>
</div>
```

### Pattern F: Expert Quote Card
Used for: `expertQuote`
```jsx
<div style={{
  padding: "26px 22px", background: "#FFFFFF",
  borderRadius: 20, border: `2px solid ${B.ink}`,
  boxShadow: `4px 4px 0 ${B.ink}`,
}}>
  <div style={{ fontSize: 10.5, letterSpacing: 2, textTransform: "uppercase", color: B.tealDeep, fontWeight: 700, marginBottom: 14 }}>
    {c.expertLabel}
  </div>
  <div style={{ fontSize: 36, lineHeight: 0.8, color: B.teal, fontWeight: 700, marginBottom: 8 }}>"</div>
  <p style={{ fontSize: 17, lineHeight: 1.5, fontWeight: 500, margin: "0 0 16px", color: B.ink, fontStyle: "italic" }}>
    {c.expertQuote}
  </p>
  <div style={{ fontSize: 12, color: B.soft, fontWeight: 600 }}>— {c.expertBy}</div>
</div>
```

### Pattern G: Checklist
Used for: `feelPoints`, `forYouPoints`, `covered.items`
```jsx
<ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
  {c.items.map((p, i) => (
    <li key={i} style={{
      fontSize: 15, lineHeight: 1.55, color: B.ink,
      padding: "10px 0",
      borderTop: i === 0 ? "none" : `1px solid ${B.teal}22`,
      display: "flex", gap: 10,
    }}>
      <span style={{ color: B.green, fontWeight: 700, flexShrink: 0 }}>✓</span>
      <span>{p}</span>
    </li>
  ))}
</ul>
```

### Pattern H: FAQ/Objections
Used for: `objections` (array of `{q, a}`)
```jsx
{c.objections.map((o, i) => (
  <div key={i} style={{ borderTop: `1px solid ${B.teal}33`, paddingTop: 14 }}>
    <div style={{ fontSize: 15, fontWeight: 700, color: B.ink, marginBottom: 6 }}>{o.q}</div>
    <p style={{ fontSize: 14, lineHeight: 1.6, color: B.soft, margin: 0 }}>{o.a}</p>
  </div>
))}
```

### Pattern I: Pull Quote (centered)
Used for: `pullquote`
```jsx
<div style={{ padding: "36px 22px 40px", textAlign: "center" }}>
  <div style={{ fontSize: 48, lineHeight: 0.8, color: B.teal, fontWeight: 700, marginBottom: 12 }}>"</div>
  <p style={{ fontSize: 22, lineHeight: 1.35, fontWeight: 500, margin: 0, fontStyle: "italic", color: B.ink, letterSpacing: -0.3 }}>
    {c.pullquote}
  </p>
  <div style={{ margin: "24px auto 0", width: 48, height: 3, background: B.gradient, borderRadius: 3 }} />
</div>
```

---

## 7. Content Field → Component Mapping

| Content field | Maps to | Component/Pattern |
|---------------|---------|-------------------|
| `meta` | Metadata only | Not rendered |
| `preheader` | `EmailShell` | `preheader={c.preheader}` |
| `subject` | Not rendered | Used by email client |
| `heroBadge` | `TitleBlock` | `badge={c.heroBadge}` |
| `h1a` | `TitleBlock` | `part1={c.h1a}` |
| `h1b` | `TitleBlock` | `part2={c.h1b}` |
| `ctaIntro` | `CTAClose` | `intro={c.ctaIntro}` |
| `ctaButton` | `CTAClose` | `button={c.ctaButton}` |
| `ctaFinePrint` | `CTAClose` | `fine={c.ctaFinePrint}` |
| `letterOpening` | `Letter` | `paras={c.letterOpening}` |
| `*Label` | `Eyebrow` | `<Eyebrow>{c.xxxLabel}</Eyebrow>` |
| `*Title` | `H2` | `<H2>{c.xxxTitle}</H2>` |
| `*Body` (array) | Custom JSX | Pattern A (paragraph array) |
| `*Points` (array) | Custom JSX | Pattern G (checklist) or Pattern C (stickers) |
| `*Cards` (array) | Custom JSX | Pattern D (comparison) or Pattern B (numbered cards) |
| `*Quote` | Custom JSX | Pattern E or F (quote card) |
| `*Items` (array) | Custom JSX | Pattern G (checklist) |
| `objections` (array of {q,a}) | Custom JSX | Pattern H (FAQ) |
| `chapters` (array) | Custom JSX | Pattern B (numbered cards with story) |
| `methods` (array) | Custom JSX | Pattern B (numbered cards with promise/reality) |
| `layers` (array) | Custom JSX | Pattern B (numbered cards with what/does) |
| `guaranteePoints` (array) | Custom JSX | Pattern B variant (checkmark instead of number) |
| `closing` (array) | Custom JSX | Pattern A (paragraph array with conditional styling) |
| `subhead` | `TitleBlock` | `subhead={c.subhead}` |

---

## 8. Per-Email Color Palettes (from reference)

### Email 2 — The Mechanism
```
BG_HERO    = #FFFBF0  (warm cream)
BG_DEF     = #EAF6F2  (cool teal)
BG_REF     = #FFF6E2  (warm yellow)
BG_COMP    = #FFFBF0  (warm cream)
BG_EXPERT  = #F0EDF8  (soft purple)
BG_CTA     = B.ink    (dark)
```

### Email 3 — Why Everything Failed
```
BG_HERO    = #FFF6E2  (warm yellow)
BG_LETTER  = #FFFBF0  (warm cream)
BG_METHODS = #FAF7F0  (warm peach)
BG_REFRAME = #EAF6F2  (cool teal)
BG_STORY   = #FFF6E2  (warm yellow)
BG_CTA     = B.ink
```

### Email 4 — Product Reveal
```
BG_HERO         = #FFFBF0
BG_PRODUCT_FULL = #F5F1EA  (warm beige)
BG_LETTER       = #FFF6E2
BG_PRODUCT      = #F0EDF8  (soft purple)
BG_LAYERS       = #FFFBF0
BG_FEEL         = #EAF6F2
BG_TEST         = #FFF6E2
BG_OBJ          = #FFFFFF
BG_CTA          = B.ink
```

### Email 5 — Sarah's Story
```
BG_HERO  = #FAF7F0
BG_INTRO = #FFFBF0
BG_CH    = #FFF6E2
BG_PULL  = #EAF6F2
BG_WHY   = #FFFBF0
BG_CTA   = B.ink
```

### Email 6 — The Invitation
```
BG_HERO      = #FFFBF0
BG_LETTER    = #FFF6E2
BG_GUARANTEE = #EAF6F2
BG_COVERED   = #FFFBF0
BG_PRODUCT   = #F0EDF8
BG_CLOSING   = #FFF6E2
BG_CTA       = B.ink
```

---

## 9. Compiler Constraints

**File:** `/root/projects/email-ops/compile-jsx.mjs`

1. **One component per file** — compiler exports the last `window.X = X;` assignment
2. **Self-contained JSX required** — esbuild transformSync only transforms, doesn't bundle
3. **Registration must be `window.EmailN = EmailN;`** — the regex `/window\.(\w+)\s*=\s*\1;?/g` does NOT match `Object.assign(window, {...})`
4. **Output** — full standalone HTML with Google Fonts, email client CSS resets, MSO Outlook conditionals, preheader

---

## 10. Registration Pattern

**Giuliano uses:**
```js
Object.assign(window, { Email2, Email3 });
```

**Compiler requires:**
```js
window.Email2 = Email2;
```

**For new emails, use the compiler-compatible pattern.** Each email must be its own file with `window.EmailN = EmailN;` at the end.
