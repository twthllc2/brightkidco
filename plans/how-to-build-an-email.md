# How to Build a BrightKidCo Email

The complete pipeline from copy file to working HTML email.

---

## Inputs

1. **A copy file** (`/root/projects/brightkidco/email-copy/`) — a `.md` file containing the creative brief: preheader, headline, body copy, product description, CTA, and shared signoff/footer text.

2. **Product photos** (`/root/projects/brightkidco/photos/`) — JPG or PNG product images. Each email uses a minimum of 4: one hero image and 3 product shots. Images must be under 130KB each when base64-encoded.

3. **Brand tokens and primitives** — the design system defined in Giuliano's reference. Colors, fonts, component patterns. These are hardcoded into every JSX file.

---

## The Pipeline

### Step 1: Read the copy file

Read the full `.md` file. Extract:
- Preheader text
- Hero badge + headline (part 1 and part 2)
- Hook paragraph
- Validation paragraph
- Mechanism/explanation paragraph
- Product introduction
- Guarantee copy
- CTA intro text + button label + fine print
- Testimonials (if present)

Note the shared data section at the bottom — this contains the signoff name, signoff text, P.S., out-line text, and footer content (tagline, links, address). This is the same across all emails in a flow.

### Step 2: Choose 4+ product photos

Pick one hero image (flat-lay or lifestyle, ideally a lifestyle shot of the product in use) and three product variant images. Convert them to base64:

```bash
base64 -w 0 photos/product-photo-1.jpg
```

The hero image goes at the top of the email. The three product images go in a row below the product description section.

### Step 3: Write the JSX file

The JSX file is a single self-contained JavaScript file that defines everything needed to render the email. It uses `React.createElement()` calls (not JSX syntax) so it can be transpiled with esbuild.

The file has 6 sections, always in this order:

#### Section 1: Brand Tokens
```javascript
window.BRAND = {
  teal: "#2BAEB4",
  tealDeep: "#1E8A8F",
  green: "#5DD07A",
  greenDeep: "#3BB35E",
  ink: "#1F2D2F",
  soft: "#4A6568",
  muted: "#8A9B9D",
  cream: "#FBF7F1",
  paper: "#FFFFFF",
  gradient: "linear-gradient(135deg, #2BAEB4 0%, #5DD07A 100%)",
  gradientText: { /* gradient text CSS */ }
};

window.FONT = {
  main: "'Questrial', system-ui, sans-serif",
  display: "'Fraunces', Georgia, serif"
};
```

#### Section 2: Shared Data
```javascript
window.FLOW1_SHARED = {
  signoff: { line1: "Talk soon,", name: "Lena Bauer", ps: "P.S. ..." },
  out: "Reply to this email. Lena reads every response.",
  footer: { tagline: "Calm progress, one day at a time.", links: [...], address: "..." }
};
```

#### Section 3: Primitives (components)
These are the reusable building blocks. Define them as `var` functions:

| Component | Purpose |
|-----------|---------|
| `ImgFrame` | Dashed-border placeholder frame with label + sublabel |
| `FramedImage` | Solid border + drop shadow container wrapping ImgFrame |
| `Band` | Gradient color transition strip between sections |
| `Header` | Top bar with BrightKidCo SVG logo |
| `PartBadge` | Small rounded pill badge (yellow background, rotated) |
| `TitleBlock` | Badge + large headline + optional subhead |
| `Letter` | Body copy section with greeting + paragraphs |
| `Eyebrow` | Small uppercase label above section headings |
| `H2` | Section heading with optional gradient text span |
| `CTAClose` | Dark background CTA block with button |
| `Signoff` | Personal signoff card with avatar, name, signature, P.S. |
| `OutLine` | Single-line italic text prompt to reply |
| `Footer` | Tagline, links, unsubscribe, address, gradient bar |
| `EmailShell` | Outer wrapper: max-width 420px, font, background |

**Component order in the file matters.** Later components reference earlier ones. `EmailShell` wraps everything. `Signoff`, `OutLine`, and `Footer` always appear at the bottom.

#### Section 4: Embedded Images
```javascript
var IMG_HERO = "data:image/jpeg;base64,...";
var IMG_PROD1 = "data:image/jpeg;base64,...";
var IMG_PROD2 = "data:image/jpeg;base64,...";
var IMG_PROD3 = "data:image/jpeg;base64,...";
```

Each image is a single `var` holding the full base64 data URI. These get passed as `src` props to `<img>` elements.

#### Section 5: Email Data
```javascript
var emailData = {
  preheader: "...",
  heroBadge: "...",
  h1a: "first line of headline",
  h1b: "second line of headline",
  hook: "...",
  validation: "...",
  mechanism: "...",
  testimonialClosing: "...",
  productIntro: "...",
  guarantee: "...",
  ctaIntro: "...",
  ctaButton: "...",
  ctaFinePrint: "..."
};
```

This is the only section that changes per email. Everything else (tokens, primitives, shared data) stays the same.

#### Section 6: The Email Component
```javascript
var CartE1 = function() {
  var c = emailData;
  var BG_HERO = "#FFFBF0";
  var BG_LETTER = "#FFF6E2";
  // ... more section backgrounds

  return React.createElement(EmailShell, { preheader: c.preheader, bg: BG_HERO },
    React.createElement(Header, { bg: BG_HERO }),
    React.createElement(TitleBlock, { badge: c.heroBadge, part1: c.h1a, part2: c.h1b }),
    React.createElement(Band, { from: BG_HERO, to: BG_LETTER }),
    // Hero image
    React.createElement("div", { style: { margin: "16px 14px 20px", borderRadius: 20, overflow: "hidden", border: "2px solid " + B.ink, boxShadow: "6px 6px 0 " + B.ink } },
      React.createElement("img", { src: IMG_HERO, alt: "...", style: { width: "100%", display: "block" } })
    ),
    // Hook + Validation
    React.createElement(Letter, { bg: BG_LETTER, first: "Hi there.", paras: [c.hook, c.validation] }),
    React.createElement(Band, { from: BG_LETTER, to: BG_MECHANISM }),
    // Mechanism
    React.createElement("div", { style: { background: BG_MECHANISM, padding: "28px 22px 16px" } },
      React.createElement(Eyebrow, null, "Why nothing's worked"),
      React.createElement(H2, { size: 24 }, "The signal ", /* gradient span */, " problem."),
      React.createElement("p", { ... }, c.mechanism)
    ),
    // ... more sections ...
    React.createElement(CTAClose, { intro: c.ctaIntro, button: c.ctaButton, fine: c.ctaFinePrint }),
    React.createElement(Signoff, null),
    React.createElement(OutLine, null),
    React.createElement(Footer, null)
  );
};

window.CartE1 = CartE1;
```

**Critical section order inside the email component:**
1. Header (logo)
2. TitleBlock (headline ABOVE the image)
3. Band (gradient transition)
4. Hero image (with margin `"16px 14px 20px"`)
5. Letter (body copy)
6. Band
7. Mechanism section (eyebrow + heading + paragraph)
8. Band
9. Testimonials section (cards with quotes)
10. Band
11. Product section (eyebrow + heading + description + 3 product photos)
12. Band
13. Guarantee section
14. Band (taller, 50px, to dark background)
15. CTAClose (dark block with green button)
16. Signoff (personal card with avatar + signature)
17. OutLine (reply prompt)
18. Footer (tagline + links + unsubscribe + address)

---

### Step 4: Transpile with esbuild

```bash
npx esbuild outputs/cart-e1.jsx \
  --bundle \
  --format=iife \
  --outfile=outputs/cart-e1.transpiled.js \
  --loader:.jsx=jsx \
  --jsx=react
```

This converts the `React.createElement()` calls into browser-ready JavaScript wrapped in an IIFE.

### Step 5: Wrap in HTML shell

The HTML file has a fixed structure. Only the transpiled JS changes between emails.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="x-apple-disable-message-reformatting">
  <meta name="color-scheme" content="light">
  <meta name="supported-color-schemes" content="light">
  <title>BrightKidCo</title>

  <!-- Google Fonts: Questrial (body), Fraunces (display), Caveat (signature) -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;700&family=Fraunces:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&family=Questrial&display=swap" rel="stylesheet">

  <style>
    /* Email client CSS resets */
    body { margin: 0; padding: 0; width: 100% !important; height: 100% !important; min-width: 100%; background-color: #FBF7F1; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
    table { border-collapse: collapse; mso-table-lspace: 0; mso-table-rspace: 0; }
    td { font-family: 'Questrial', system-ui, sans-serif; color: #1F2D2F; }
    img { display: block; border: 0; outline: none; line-height: 0; max-width: 100%; height: auto; }
    a img { border: 0; outline: none; }
    .preheader { display: none !important; visibility: hidden; opacity: 0; color: transparent; height: 0; width: 0; max-height: 0; max-width: 0; overflow: hidden; mso-hide: all; font-size: 1px; line-height: 1px; }

    /* Mobile responsive */
    @media screen and (max-width: 420px) {
      .bk-email { width: 100% !important; max-width: 100% !important; }
      .bk-section { padding-left: 18px !important; padding-right: 18px !important; }
      .bk-cta-btn { display: block !important; width: 100% !important; text-align: center !important; }
    }

    /* Desktop fixed width */
    @media screen and (min-width: 601px) {
      .bk-email { width: 420px !important; }
    }
  </style>
</head>
<body style="margin:0;padding:0;width:100% !important;height:100% !important;min-width:100%;background-color:#FBF7F1;">

  <!--[if (gte mso 9)|(IE)]>
  <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color:#FBF7F1;"><tr><td align="center" style="padding:0;">
  <table role="presentation" width="420" align="center" style="width:420px;" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding:0;">
  <![endif]-->

  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:#FBF7F1;">
    <tr>
      <td align="center" style="padding:0;background-color:#FBF7F1;">
        <div class="bk-email" style="max-width:420px;width:100%;margin:0 auto;background-color:#FBF7F1;font-family:'Questrial',system-ui,sans-serif;color:#1F2D2F;">
          <div class="preheader" style="display:none !important;...">PREHEADER TEXT HERE</div>
          <div id="root"></div>
        </div>
      </td>
    </tr>
  </table>

  <!--[if (gte mso 9)|(IE)]>
  </td></tr></table>
  </td></tr></table>
  <![endif]-->

  <!-- React CDN -->
  <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>

  <!-- Transpiled email JS (paste contents of .transpiled.js) -->
  <script>
    // ... transpiled IIFE goes here ...

    /* Mount the email */
    ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(CartE1));
  </script>
</body>
</html>
```

The mount line at the bottom references the email component by name (`CartE1`). This must match `window.CartE1 = CartE1;` in the JSX.

### Step 6: Test in browser

Start a local server:
```bash
cd /root/projects/brightkidco/outputs && python3 -m http.server 8888
```

Open `http://localhost:8888/cart-e1.html` in a browser. Check:
- Logo renders at the top
- Headline appears above the hero image
- Hero image has correct spacing (not too close to headline, visible gap below)
- All 4 images load (1 hero + 3 product)
- Section backgrounds transition smoothly via gradient bands
- Testimonial cards display with colored left borders
- CTA button is green on dark background
- Signoff card shows avatar in a circle (image doesn't overflow the circle)
- Footer shows tagline, links, unsubscribe, and address
- Page is 420px wide on desktop, full-width on mobile

---

## Section Background Colors

Each section has its own background color, connected by `Band` gradient transitions:

| Section | Background |
|---------|-----------|
| Hero / Title | `#FFFBF0` (warm cream) |
| Letter / Body | `#FFF6E2` (slightly warmer) |
| Mechanism | `#EAF6F2` (light teal-green) |
| Testimonials | `#FFF6E2` (warm cream) |
| Product | `#F0EDF8` (light lavender) |
| Guarantee | `#FFFBF0` (warm cream) |
| CTA | `#1F2D2F` (dark ink) |
| Signoff | `#1F2D2F` (dark ink) |
| OutLine | `#FFFFFF` (white) |
| Footer | `#FFFFFF` (white) |

These are defined as `var` inside the email component function and passed to each section.

---

## File Structure

```
/root/projects/brightkidco/
├── email-copy/          # 127 copy files (.md)
├── photos/              # 29 product photos (.jpg, .png)
├── outputs/
│   ├── cart-e1.jsx      # Source JSX (what you edit)
│   ├── cart-e1.transpiled.js  # Transpiled by esbuild
│   └── cart-e1.html     # Final standalone HTML email
├── docs/
│   └── how-to-build-an-email.md  # This document
└── email-design-environment/     # Giuliano's original reference
    └── autistic-welcome/
        ├── tokens.js
        ├── primitives.jsx
        ├── email/               # Reference JSX files
        └── ...
```

---

## Summary

One email = one copy file + 4 product photos + a JSX file + an HTML wrapper.

The JSX file has 6 sections. Only section 5 (email data) changes per email. Sections 1-4 (tokens, shared data, primitives, images) and section 6 (the email component) use the same structure every time — you swap in the new copy text and images.

Transpile with esbuild, paste into the HTML wrapper, test in browser. Done.
