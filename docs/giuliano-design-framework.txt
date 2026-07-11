# Giuliano Email Design Framework — Reference

## Architecture

React-based preview tool. Renders email designs as movable artboards in a Figma-like canvas. Artboards are 420px wide (mobile-first). Deliverable is a standalone .html that loads everything via CDN scripts.

### Load Order (strict)

```
1. tokens.js              → window.BRAND, window.FONT
2. content-*.js           → window.FLOW1 (email copy data)
3. design-canvas.jsx      → DesignCanvas, DCSection, DCArtboard
4. primitives.jsx         → Header, TitleBlock, Letter, Band, Eyebrow, H2,
                            CTAClose, Signoff, OutLine, Footer, EmailShell,
                            ImgFrame, FramedImage, PartBadge
5. product-showcase.jsx   → ProductShowcaseFull/Medium/Soft
6. emails-*.jsx           → Individual email React components
7. app-*.jsx              → Assembles artboards into DesignCanvas sections
```

### Brand Tokens

```js
window.BRAND = {
  teal: "#2BAEB4", tealDeep: "#1E8A8F",
  green: "#5DD07A", greenDeep: "#3BB35E",
  ink: "#1F2D2F", soft: "#4A6568", muted: "#8A9B9D",
  cream: "#FBF7F1", paper: "#FFFFFF",
  gradient: "linear-gradient(135deg, #2BAEB4 0%, #5DD07A 100%)",
  gradientText: { background: "...", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" },
};
window.FONT = { main: "'Questrial', system-ui, sans-serif", display: "'Fraunces', Georgia, serif" };
```

All primitives read from `window.FLOW1_SHARED`:
```js
window.FLOW1_SHARED = {
  signoff: { line1: "With understanding,", ps: "P.S. ..." },
  out: "You can pause this series anytime. Come back when you're ready.",
  footer: { tagline: "...", links: ["Our Method", "Shop the Pants", "Parent Stories"], address: "..." },
};
```

## Component API

- **EmailShell({ preheader, bg })** — 420px wrapper
- **Header({ bg })** — logo centered
- **TitleBlock({ badge, part1, part2, accent2, subhead })** — badge + h1 split
- **Letter({ bg, paras[], first })** — paragraph stack
- **Band({ from, to, height })** — gradient transition between sections (default 40px)
- **Eyebrow({ children, color })** — uppercase section label
- **H2({ children, center, size })** — section heading
- **FramedImage({ height, label, sublabel, shadow })** — image placeholder, full-width
- **ImgFrame({ height, label, sublabel, radius, aspect })** — inline image inside cards
- **CTAClose({ intro, button, fine, bg })** — dark CTA section with filled pill button
- **Signoff({ bg })** — reads FLOW1_SHARED.signoff. Name/role hardcoded.
- **OutLine({ bg })** — "You can pause..." line
- **Footer()** — brand footer
- **ProductShowcaseSoft({ eyebrow, line, ctaText })** — small product teaser
- **ProductShowcaseMedium({ eyebrow, title, priceFrom, ctaButton })** — inline product card
- **ProductShowcaseFull({ eyebrow, title, titleAccent, sub, priceFrom, priceNote, ctaButton, features[] })** — full product card with 3 feature pills

## Image Rules

- FramedImage: full-width, 240px height. Append "3:4 crop" or "9:16 crop" to sublabel to indicate source image aspect ratio. NEVER 16:9 or 4:3.
- Card ImgFrame: 130px (method cards), 90px (testimonial sidecar)
- 2-3 FramedImage per email (hero + mid-email)

## Section Density

10-12 sections per email. No section is pure text — each has a visual component (card, image, product component, sticker block).

## Card Style Types (vary per email, no reuse between positions)

- **Method cards**: numbered circle + ImgFrame (130px) + label + description
- **Banner testimonial cards**: colored header strip + sidecar ImgFrame (90px) + quote
- **Cream testimonial cards**: #FBF7EB bg, gold quote marks, border shadow
- **Sticker cards**: colored bg, rotated 0.3-0.8deg, box shadow
- **Comparison cards**: 3-column, tinted header, checkmark/x indicator
- **Anchor cards**: compact numbered circles, no image, rotated
- **Product cards**: ProductShowcaseFull handles its own internal layout

## Must Include (every email)

- ProductShowcaseSoft before CTA (even education-first emails)
- Signoff component (never hand-roll — reads from FLOW1_SHARED.signoff)
- OutLine + Footer after signoff
- FramedImage hero + FramedImage mid-email

## Wireframe → Component Translation

| Wireframe Section | Giuliano Component |
|------------------|-------------------|
| Recognition / anchors | Method cards with ImgFrame or compact anchor cards |
| Validation / absolution | Eyebrow + paragraph stack (text, 1 per email) |
| Mechanism / science | Left-border quote block + FramedImage |
| Social proof | Testimonial cards (cream or banner style) |
| Product mention | ProductShowcaseSoft/Medium/Full |
| Guarantee | Circular seal + checklist cards |
| CTA | CTAClose (filled) or text-link per position |

## Creating a New Flow

4 files in a new folder under `email-design-environment/`:

1. **content-flow.js** — copy data on `window.FLOWX.e1/e2/e3` + `window.FLOW1_SHARED`
2. **emails-flow.jsx** — email components, each: Header → FramedImage → TitleBlock → sections → ProductShowcaseSoft → CTA → Signoff → OutLine → Footer. Register with `Object.assign(window, { ComponentName })`.
3. **app-flow.jsx** — DesignCanvas > DCSection > DCArtboard with `style={{ height: 'auto', overflow: 'visible' }}`
4. **Flow Name.html** — HTML entry loading everything in order

### Pattern for Each Email Component

```jsx
const EmailX = () => {
  const c = window.FLOWX.e1;
  const BG = { HERO: "#FFFBF0", LETTER: "#FFF6E2", ... };
  return (
    <EmailShell preheader={c.preheader} bg={BG.HERO}>
      <Header bg={BG.HERO} />
      <FramedImage height={240} label="..." sublabel="... 3:4 crop" shadow={6} />
      <TitleBlock badge={c.heroBadge} part1={c.h1a} part2={c.h1b} />
      <Band from={BG.HERO} to={BG.LETTER} />
      <Letter bg={BG.LETTER} first="" paras={[c.opener]} />
      {/* visual sections here */}
      <ProductShowcaseSoft eyebrow="..." line="..." ctaText="..." />
      <CTAClose intro={c.ctaIntro} button={c.ctaButton} fine={c.ctaFine} />
      <Signoff /><OutLine /><Footer />
    </EmailShell>
  );
};
Object.assign(window, { EmailX });
```

## File Structure

```
email-design-environment/
├── browse-gf/                    # New flow
│   ├── content-browse.js
│   ├── emails-browse.jsx
│   ├── app-browse.jsx
│   └── Browse Abandonment GF.html
├── welcome-flow/                 # Giuliano's reference
│   ├── content.js, primitives.jsx, emails-2-3.jsx, app.jsx
│   ├── product-showcase.jsx, design-canvas.jsx, flow2-emails.jsx
│   └── Welcome Flows - 10 Emails.html
└── autistic-welcome/variants/tokens.js
```

## Serve

```bash
cd /root/projects/brightkidco/outputs/email-design-environment
python3 -m http.server 3099
```
