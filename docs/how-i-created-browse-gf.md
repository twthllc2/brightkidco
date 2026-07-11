# How I Created the Browse GF Flow

## Step 1: Read the Foundation Files

I read these files in order before writing any code:

1. **GIULIANO-DEMANDS.md** — The master success criteria. 4 avatar levels, 25 flows, R1-R6 cross-level calibration rules, V16 symptom-only language, brand voice (Lena), forbidden phrases, design system specs (colors #039902, Questrial font).

2. **Strategy files (1, 2, 3)** — Flow architecture, copy strategy per email, segmentation blueprint.

3. **Synthesis files** — Customer avatar (4 levels), email sequence framework (25 flows), level messaging matrix.

4. **GF customer journey (6 files)** — This was key. The GF segment has 5 sub-groups (A-E). Each has different trust baselines, emotional needs, and migration potential. Browse Abandonment is a cross-level flow — all 4 levels receive the same copy calibrated via R1-R6.

5. **Copy files (browse-04-e1.md, e2.md, e3.md)** — Each had the full email copy + wireframe section-by-section spec.

6. **Welcome Flow (Giuliano's reference implementation)** — I studied every file:
   - `primitives.jsx` — All shared components and their exact APIs
   - `content.js` — How copy data is structured per email
   - `emails-2-3.jsx`, `emails-4-5.jsx`, `email-6.jsx` — How each email component is built
   - `flow2-emails.jsx` — How a second flow is structured
   - `product-showcase.jsx` — Product component variants
   - `design-canvas.jsx` — The Figma-like canvas system
   - `app.jsx` — How artboards are assembled
   - `Welcome Flows - 10 Emails.html` — The load order
   - `tokens.js` — Brand tokens

## Step 2: Understand Giuliano's Email Component Pattern

Each Welcome Flow email follows this exact structure:

```
EmailShell:
  Header (logo)
  FramedImage (hero image placeholder, 200-260px)
  TitleBlock (badge + h1a/h1b)
  Band (color transition)
  Letter (opening text)
  Band
  [Section with Eyebrow + H2 + content]
  Band
  [Section with visual component - cards, images, quotes]
  Band
  ...more sections...
  ProductShowcaseSoft (ALWAYS before CTA)
  Band
  CTAClose (dark section with filled button)
  Signoff (reads from FLOW1_SHARED.signoff)
  OutLine
  Footer
```

Key observations:
- 8-14 sections per email
- 2-3 FramedImage per email (hero + mid-email)
- Every section has a visual component (card, image, product component, sticker) — no walls of text
- ProductShowcaseSoft is in every email, even education-first ones
- Signoff, OutLine, Footer are always at the end

## Step 3: Study the Browse Wireframe Specs

Each browse email had a detailed wireframe in the copy file specifying:

- Section count and order
- Visual element role per section
- Image density (the wireframes said 0 images, which turned out wrong)
- Component types for each section
- CTA style (text-link vs filled button)
- Signoff variant (SHORT/MEDIUM/LONG)
- Color temperature

The wireframe section orders were:
- **E1**: Opener+6 anchors → Validation → Mechanism → 3 testimonials → Permission+text-link CTA
- **E2**: Opener → 3 full testimonials → Mechanism → CTA → Migration anchors
- **E3**: Hook → 5 anchors → Mechanism+Mahler → Mini-wins → Product → Guarantee → Filled CTA

## Step 4: Create the Content File (content-browse.js)

I structured the copy data matching what the primitives expect:

```js
window.BROWSE = {
  e1: {
    preheader, subject, heroBadge, h1a, h1b,
    opener: "Whether...Or...If...",
    anchors: [6 symptom recognition strings],
    bridgeLine: "If even one of those...",
    validationLabel, validationParagraphs[], validationReframe,
    mechanismLabel, mechanismBody,
    testimonialsLabel, testimonials[{name, child, quote}],
    testimonialClosing,
    ctaIntro, ctaButton, ctaFine,
  },
  e2: { /* different structure for social proof email */ },
  e3: { /* different structure for offer close email */ },
};
```

Then set `window.FLOW1_SHARED` with signoff, out, footer — because the primitives (Signoff, OutLine, Footer) read from FLOW1_SHARED specifically, not from my BROWSE object.

## Step 5: Create the JSX Components (emails-browse.jsx)

Each email component follows the Welcome Flow pattern but with the wireframe's section order.

**E1 (The Signal)** — Education-first:
- FramedImage hero (diagram, 220px)
- TitleBlock
- Letter (opener)
- 6 method cards with ImgFrame 130px each (numbered circle + image placeholder + label)
- FramedImage mid (signal pathway)
- Validation text section (1 text section per email)
- Mechanism with 2px emerald left border
- 3 cream testimonial cards with gold quote marks
- ProductShowcaseSoft
- Text-link CTA (not CTAClose — wireframe said text link for E1)

**E2 (Three Parents)** — Social proof:
- FramedImage hero (lifestyle, 200px)
- TitleBlock
- Opener text
- 3 testimonial cards with colored banner header + sidecar ImgFrame 90px
- FramedImage mid (interoception diagram)
- Mechanism yellow sticker quote block
- CTA text-link
- Migration anchor links
- ProductShowcaseSoft

**E3 (60 Days)** — Offer close:
- FramedImage hero (product, 240px)
- TitleBlock
- Hook opener letter
- 5 compact anchor cards (numbered circles, rotated — different style from E1)
- Mechanism text + Kelly Mahler citation
- FramedImage mid (lifestyle)
- 3 mini-win cream cards
- ProductShowcaseFull
- Guarantee seal (circular) + checklist cards
- CTAClose filled button

## Step 6: Create the App File (app-browse.jsx)

Simple assembly — 2 lines per email:

```jsx
<DCArtboard id="e1" label="E1 · The Signal · 30 min" width={MW} height={420}
  style={{ height: 'auto', overflow: 'visible' }}>
  <window.BrowseE1 />
</DCArtboard>
```

The `style={{ height: 'auto', overflow: 'visible' }}` override prevents whitespace at bottom of artboards (the design-canvas component sets a fixed height by default, which leaves dead space if content is shorter).

## Step 7: Create the HTML Entry (Browse Abandonment GF.html)

Same structure as Giuliano's Welcome Flow HTML:

```html
<head>
  Google Fonts (Questrial, Fraunces, Caveat)
  React 18 + ReactDOM + Babel standalone (CDN, pinned versions)
</head>
<body>
  <div id="root"></div>
  
  <script src="../autistic-welcome/variants/tokens.js"></script>
  <script src="content-browse.js"></script>
  <script type="text/babel" src="../welcome-flow/design-canvas.jsx"></script>
  <script type="text/babel" src="../welcome-flow/primitives.jsx"></script>
  <script type="text/babel" src="../welcome-flow/product-showcase.jsx"></script>
  <script type="text/babel" src="emails-browse.jsx"></script>
  <script type="text/babel" src="app-browse.jsx"></script>
</body>
```

Critical: primitives.jsx must be loaded BEFORE the email JSX files because email components use Header, FramedImage, Band, etc. from primitives.

JSX files use `type="text/babel"` so Babel transpiles them in-browser.

## Step 8: Serve and Test

```bash
cd /root/projects/brightkidco/outputs/email-design-environment
python3 -m http.server 3099
```

Open the URL in a browser. The design canvas shows all 3 emails as movable artboards. Check browser console for JS errors (must be 0).

## Key Lessons Discovered During the Process

### Image Rules
- FramedImage must be full-width at 240px height
- Append "3:4 crop" or "9:16 crop" to sublabel — these are portrait orientations for mobile
- NEVER 16:9 or 4:3
- 2-3 FramedImage per email (hero + mid-email breaks up text)
- Card ImgFrames at 130px (method cards) or 90px (testimonial sidecar)

### Section Density
- 10-12 sections per email minimum
- No section should be pure text — every section has a visual component
- Section count varies between emails (not same count every time)

### Card Style Variety
Each email needs different card styles. Never reuse the exact same card pattern between emails. The 3 emails should use:
- E1: Method cards (numbered + 130px ImgFrame)
- E2: Banner testimonial cards (colored header + sidecar image)
- E3: Compact rotated anchor cards (no image, numbered circles)

### Product Components
- ProductShowcaseSoft goes before EVERY CTA — even education-first emails
- ProductShowcaseFull goes in the offer close email (E3)
- These handle their own internal image placeholders

### Signoff
- Use `<Signoff />` component — never hand-roll signoff HTML
- The name "Lena Bauer" and role "Founder · BrightKidCo · Mom of two" are hardcoded in the component
- Only the greeting (line1) and P.S. text are dynamic from FLOW1_SHARED.signoff

### The Signoff/OutLine/Footer Dependency
All three read from `window.FLOW1_SHARED` specifically. My content file sets both `window.BROWSE` (for my email content) and `window.FLOW1_SHARED` (for the primitives).

### Color Flow
- 5-8 background colors per email, transitioning via `<Band>`
- Colors: #FFFBF0, #FFF6E2, #FFFFFF, #FAF7F0, #EAF6F2, #F0EDF8, #F5F1EA
- Last Band transitions to B.ink (dark) before Signoff

### The "0 Images" Wireframe Trap
The wireframes specified "0 images, text-only" for E1. This is WRONG for the Giuliano framework. Every Giuliano email has 2-3 FramedImage. The wireframe's visual constraints should be ignored — only its section ORDER and INTENT should be followed. Visual execution belongs to the Giuliano component system.

### Auto-Height Artboards
The design-canvas component sets a fixed height on artboards (via the `height` prop on DCArtboard). If the height is too large, there's whitespace at the bottom. If too small, content gets clipped. Solution: pass `style={{ height: 'auto', overflow: 'visible' }}` to DCArtboard to let content determine height.
