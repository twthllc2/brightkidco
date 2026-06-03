# BrightKidCo — Email HTML Production Plan

> **Phase: Email HTML** — Two phases: JSX production then HTML compilation
> Generated: May 29, 2026 | Source: Wireframes (.md) + JSX template reference (`email-1.jsx`)
> Output dir: `/root/projects/brightkidco/outputs/html/`

---

## Purpose

The wireframe phase produced ASCII specs with every hex, px, and contraption documented. This phase translates those specs into production-ready files — first as JSX components (editable source), then as compiled email HTML (Klaviyo-ready).

**Two-phase system:**

```
Phase 1 — JSX:   Wireframe (.md) + email-1.jsx (template) → JSX component (.jsx)
Phase 2 — HTML:  Wireframe (.md) + email-1.jsx (template) → Production HTML (.html)
```

**Why two phases:**
- JSX is the editable source — same format as Giuliano's design system (`email-1.jsx`)
- HTML is the compiled output — email-safe, table-based, CSS-inlined, Klaviyo-ready
- JSX can be recompiled if HTML requirements change (Outlook fix, dark mode tweak, etc.)
- Phase 1 is creative (translating ASCII to component code), Phase 2 is mechanical (build compilation)

---

## Universal Rules — APPLY TO ALL AGENTS

### Rule 1: The Wireframe Is the Single Source of Truth

The wireframe contains everything needed to produce the JSX and HTML. Do NOT read the original copy output file. Do NOT read GIULIANO-DEMANDS.md. The wireframe encodes every decision — copy, colors, spacing, contraptions, render notes. If the wireframe is missing something, flag it — do not invent.

### Rule 2: Copy Is NEVER Rewritten

The copy blocks in the wireframe's Section 6 are the exact text. Every word — subject line, preheader, H1, body paragraphs, CTA, signoff, footer — is taken verbatim. No paraphrasing. No rewrites.

### Rule 3: The Template (`email-1.jsx`) Defines the Component Architecture

Every JSX file follows the exact same structure as `email-1.jsx`:
- React functional component with inline style objects
- Color tokens declared as consts at the top (`teal`, `green`, `ink`, `soft`, `cream`, `paper`)
- Section-by-section return with JSX comments marking each section
- No external CSS files — all styles inline
- Font stack: Fraunces (serif) for headlines, Inter (sans-serif) for body

The HTML phase applies its own conversion rules but the JSX intermediate must match this pattern exactly.

### Rule 4: Contraptions Copy CSS Verbatim from the Wireframe

Every CSS value used in a contraption (floating circles, insight block, creed stickers, path cards, quote block, CTA pill, signoff) comes directly from the wireframe's Contraption Specs section. If the wireframe says `border-radius: 16`, the JSX uses `borderRadius: 16`. If the wireframe says `box-shadow: 3px 3px 0 #1F2D2F`, the JSX uses `boxShadow: "3px 3px 0 #1F2D2F"`. No approximation.

---

## Input Sources

| Source | Path |
|--------|------|
| Wireframe (primary source for both phases) | `/root/projects/brightkidco/wireframes/<flow>/<email>.md` |
| JSX Template Reference (for both phases) | BKCO - EMAIL MARKETING-2.zip → `autistic-welcome/email-1.jsx` |
| HTML Compilation Rules | Defined below in Phase 2 |
| JSX output dir | `/root/projects/brightkidco/outputs/jsx/<flow>/` |
| HTML output dir | `/root/projects/brightkidco/outputs/html/<flow>/` |

---

## Phase 1 — JSX Production

**Input:** Wireframe `.md` file
**Output:** JSX component `.jsx` file
**Agent type:** Ops agents (same dispatch as wireframe phase)

### JSX Output Template

Every JSX file follows this structure. **Warning: Do NOT copy the section layout from this template into your JSX.** Your JSX sections come from YOUR wireframe's Layout ASCII — they will be different for every email. This template only shows the structural patterns (color tokens, component declaration, return structure, export).

```javascript
/*
 * <Flow Name> · Email <N> · <Level, if level-specific>
 * Wireframe: /root/projects/brightkidco/wireframes/<flow>/<email>.md
 * Contraptions: <list from wireframe Section 5>
 */

const Email<Flow><Email><Level> = () => {
  // ═══════════ BRAND COLOR TOKENS ═══════════
  // These 8 tokens are ALWAYS declared. Copy them exactly.
  const teal   = "#2BAEB4";
  const green  = "#5DD07A";
  const ink    = "#1F3A3D";
  const soft   = "#4A6568";
  const cream  = "#FBF7F1";
  const paper  = "#FFFFFF";
  const mint   = "#E8F5EC";
  const lilac  = "#EEE8F6";
  // Add email-specific colors below (if any from wireframe).

  // ═══════════ YOUR SECTIONS COME FROM THE WIREFRAME ═══════════
  // The wireframe's Layout ASCII (Section 4) shows exactly which
  // sections this email has. Each section becomes a <div> in the JSX.
  // The wireframe's Contraption Specs (Section 5) has every CSS value.
  // The wireframe's Copy Blocks (Section 6) has every word.
  //
  // Sections will differ per email:
  //   Welcome E1 → preheader, logo, lilac hero, letter, insight block,
  //                 3-step path, quote, CTA, signoff, footer
  //   Cart E1    → preheader, logo, product reminder, urgency badge,
  //                 product grid, CTA, footer
  //   Shipping   → preheader, logo, tracking info, order summary, footer
  //   Sunset E1  → preheader, logo, short text, CTA, footer
  //
  // Follow the wireframe exactly. Do NOT copy Welcome E1's sections
  // into other emails.

  return (
    <div style={{
      width: 600,
      margin: "0 auto",
      fontFamily: "'Fraunces', Georgia, serif",
      background: paper,
      color: ink,
      borderRadius: 24,
      overflow: "hidden",
    }}>
      {/* ── SECTION 1: [name from wireframe Layout ASCII] ── */}
      {/* Background color: from wireframe (hex inline on ASCII) */}
      {/* Padding: from wireframe (inline on ASCII) */}
      {/* Copy: from wireframe Section 6 (Copy Blocks) — verbatim */}
      {/* Contraptions: CSS values from wireframe Section 5 (Contraption Specs) */}

      {/* ── SECTION 2: [name] ── */}
      {/* Same pattern — wireframe drives everything */}

      {/* ── SECTION N: ... ── */}
      {/* One <div> per wireframe section until all sections are done */}

      {/* ── CTA BUTTON ── */}
      {/* CSS from wireframe Contraption Specs. Copy from wireframe Copy Blocks */}
      <div style={{ textAlign: "center", padding: "24px 0" }}>
        <a href="#" style={{
          display: "inline-block",
          padding: "16px 32px",
          background: `linear-gradient(135deg, ${teal} 0%, ${green} 100%)`,
          color: "#FFFFFF",
          textDecoration: "none",
          borderRadius: 999,
          fontWeight: 600,
          fontSize: 15,
        }}>
          [CTA text from wireframe] →
        </a>
      </div>

      {/* ── SIGNOFF ── */}
      <div style={{
        padding: "44px 44px 24px",
        fontFamily: "'Inter', system-ui, sans-serif",
        fontSize: 15, lineHeight: 1.7, color: soft,
      }}>
        <p style={{ margin: "0 0 6px" }}>[signoff opening from wireframe]</p>
        <p style={{
          fontFamily: "'Fraunces', Georgia, serif",
          fontSize: 22, color: ink, margin: "0 0 4px", fontWeight: 500,
        }}>[signoff name from wireframe]</p>
        <p style={{ margin: 0, fontSize: 13, color: "#98A6A8" }}>[PS from wireframe]</p>
      </div>

      {/* ── FOOTER ── */}
      <div style={{
        padding: "24px 32px 32px",
        background: cream,
        textAlign: "center",
        fontFamily: "'Inter', system-ui, sans-serif",
      }}>
        <div style={{
          fontSize: 11, color: "#98A6A8", letterSpacing: 0.3, lineHeight: 1.7,
        }}>
          [tagline from wireframe]<br/>
          <a href="#" style={{ color: "#98A6A8", textDecoration: "underline" }}>Unsubscribe</a>
          {" · "}
          <a href="#" style={{ color: "#98A6A8", textDecoration: "underline" }}>Manage preferences</a>
        </div>
      </div>
    </div>
  );
};

window.Email<Flow><Email><Level> = Email<Flow><Email><Level>;
```

### Phase 1 Rules

1. **Every section from the wireframe's Layout ASCII becomes a `<div>` in the JSX.** The wireframe shows exactly which sections exist. Each gets its own JSX section with a comment marker.

2. **Every hex from the wireframe becomes a JSX inline style value.** If the wireframe says `bg: #FFF6E2`, the JSX uses `background: "#FFF6E2"`. No token names — always the literal hex.

3. **Contraptions from the template** (floating circles, lilac gradient hero, mint insight block, tilted creed stickers, 3-step path cards, parent quote block, soft gradient CTA pill) are added using the EXACT CSS from the wireframe's Contraption Specs section. The template's email-1.jsx shows the structural pattern — follow it exactly but use the wireframe's values.

4. **Copy is taken from the wireframe's Copy Blocks section (Section 6).** Every word verbatim.

5. **Brand color tokens** (`teal`, `green`, `ink`, `soft`, `cream`, `paper`, `mint`, `lilac`) are always declared at the top of every JSX file, exactly as in `email-1.jsx`. Email-specific colours are declared below them.

6. **The component name** follows the pattern: `Email<Flow><Email><Level>`. Examples: `EmailWelcomeE1L1`, `EmailCartE1`, `EmailFAQ21E2`.

---

## Phase 2 — HTML Compilation

**Input:** Wireframe `.md` file + `email-1.jsx` (template reference from zip)
**Output:** Production HTML `.html` file
**Agent type:** Ops agents (mechanical conversion, zero creative decisions)

### HTML Compilation Rules — MANDATORY

The wireframe contains the layout, copy, colours, and contraption specs. The `email-1.jsx` template shows how BrightKidCo components are structured (inline styles, token system, section architecture). The HTML builder reads BOTH:
- **Wireframe** → for section structure, copy blocks, image briefs, render notes
- **email-1.jsx** → for component architecture patterns, inline style format, font stack, token names

Neither alone is sufficient — the wireframe has the email-specific content, the JSX has the brand's structural patterns. The HTML output is production email HTML that works across all major clients.

#### C1 — Structure: Table-Based Layout

Every email HTML follows a table-based structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Subject line from wireframe</title>
  <!--[if mso]>
  <noscript>
    <xml>
      <o:OfficeDocumentSettings>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
  </noscript>
  <![endif]-->
  <style>
    /* Font loading */
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Fraunces:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap');
    
    /* CSS reset */
    body, table, td, p, a, li, blockquote { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
    table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
    img { -ms-interpolation-mode: bicubic; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
    
    /* Responsive */
    @media only screen and (max-width: 620px) {
      .email-container { width: 100% !important; }
      .mobile-pad { padding-left: 16px !important; padding-right: 16px !important; }
      .mobile-stack { display: block !important; width: 100% !important; }
      .mobile-hide { display: none !important; }
    }
    
    /* Dark mode */
    @media (prefers-color-scheme: dark) {
      .dark-bg { background-color: #1A1A1A !important; }
      .dark-text { color: #F5F5F5 !important; }
      .dark-card { background-color: #2A2A2A !important; }
      [data-ogsc] .dark-bg { background-color: #1A1A1A !important; }
    }
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #F5F1EA;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
    <tr>
      <td align="center" style="padding: 20px 0;">
        <!--[if mso]>
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" align="center">
        <tr><td>
        <![endif]-->
        <table class="email-container" role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px; width: 100%;">
          <tr>
            <td style="background-color: #FFFFFF; border-radius: 24px;">
              <!-- EMAIL CONTENT GOES HERE -->
              <!-- Each JSX <div> becomes a <tr><td> block -->
            </td>
          </tr>
        </table>
        <!--[if mso]>
        </td></tr>
        </table>
        <![endif]-->
      </td>
    </tr>
  </table>
</body>
</html>
```

#### C2 — JSX to HTML Style Mapping

Every JSX inline style object converts to an HTML `style` attribute using these exact rules:

```
JSX                        →  HTML
────────────────────────────────────────────────────────
width: 600                →  width: 600px;
margin: "0 auto"          →  margin: 0 auto;
padding: "12px 32px"       →  padding: 12px 32px;
fontSize: 11              →  font-size: 11px;
fontFamily: "'Inter'..."  →  font-family: 'Inter', system-ui, sans-serif;
lineHeight: 1.7           →  line-height: 1.7;
borderRadius: 24          →  border-radius: 24px;
fontWeight: 600           →  font-weight: 600;
letterSpacing: 0.3        →  letter-spacing: 0.3px;
textTransform: "uppercase"→  text-transform: uppercase;
textAlign: "center"        →  text-align: center;
display: "flex"           →  CONVERT TO TABLE (see C4)
position: "absolute"      →  RENDER AS PNG (see C6)
boxShadow: "3px 3px 0..."  →  USE VML (see C7)
background: `linear...`   →  background: linear-gradient(...);
                              (VML fallback for Outlook)
```

**Key conversions:**
- All numeric values get `px` appended (except `lineHeight`, `fontWeight`, `opacity`, `zIndex`)
- `camelCase` → `kebab-case` for all CSS properties
- Template literals (`\`...\``) resolve to string values
- `display: "flex"` → table layout with `display: block` on mobile

#### C3 — Font Loading

Every HTML file includes:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

And uses the font stack from the wireframe/JSX as the `font-family` value. Never omit the fallback stack.

#### C4 — Flex Layout Conversion

JSX `display: "flex"` layouts convert to HTML tables:

```html
<!-- JSX: <div style={{display: "flex", gap: 20}}>...</div> -->
<!-- HTML: -->
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
  <tr>
    <td valign="top" style="padding-right: 10px; width: 50%;">
      <!-- first child -->
    </td>
    <td valign="top" style="padding-left: 10px; width: 50%;">
      <!-- second child -->
    </td>
  </tr>
</table>
```

- `gap` in JSX → `padding-left`/`padding-right` on inner `<td>` elements
- Each flex child becomes a `<td>` with `valign="top"`
- On mobile (< 620px), flex columns stack: add `mobile-stack` class to `<td>`

#### C5 — Responsive Behavior

```css
@media only screen and (max-width: 620px) {
  .email-container { width: 100% !important; }
  .mobile-full { width: 100% !important; display: block !important; }
  .mobile-stack { display: block !important; width: 100% !important; }
  .mobile-pad { padding-left: 16px !important; padding-right: 16px !important; }
  .mobile-center { text-align: center !important; }
  .mobile-hide { display: none !important; }
  .mobile-show { display: block !important; }
  .mobile-fs-24 { font-size: 24px !important; }
  .mobile-fs-18 { font-size: 18px !important; }
  .mobile-fs-14 { font-size: 14px !important; }
}
```

Apply `mobile-*` classes to elements based on the wireframe's Render Notes responsive specification.

#### C6 — Image Handling

Every wireframe Image Brief maps to an `<img>` tag:

```html
<img src="[PLACEHOLDER: see Image Briefs]" alt="[alt text from wireframe]"
     width="[width from ratio]" height="[height from ratio]"
     style="display: block; width: 100%; max-width: [width]px; height: auto; border: 0;"
     loading="lazy" />
```

- `src` uses a placeholder path (images are produced separately by the client)
- `alt` text comes from the wireframe's Image Brief
- `width`/`height` from the wireframe's ratio specification
- Images are `display: block` to prevent spacing issues in email clients
- Rounded corners use `border-radius` on the `<img>` tag

#### C7 — Outlook VML for Rounded Elements

Rounded corners, box-shadows, and gradient backgrounds require VML for Outlook:

```html
<!--[if mso]>
<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml"
  xmlns:w="urn:schemas-microsoft-com:office:word"
  href="#" style="height:48px;v-text-anchor:middle;width:auto;"
  arcsize="50%" strokecolor="#1F2D2F"
  fillcolor="#D8F57C">
  <w:anchorlock/>
  <center style="color:#1F2D2F;font-family:'Inter',sans-serif;font-size:15px;font-weight:700;">
    CTA Text →
  </center>
</v:roundrect>
<![endif]-->
<!--[if !mso]><!-- -->
  <a href="#" style="...">CTA Text →</a>
<!--<![endif]-->
```

Apply VML roundrect for:
- Every CTA button (if `border-radius: 999` or pill shape)
- Gradient backgrounds (use VML `fill` with `type="gradient"`)
- Elements with `box-shadow` (use VML shadow)

#### C8 — Dark Mode

Every HTML file includes dark mode overrides, using the hex pairs from the wireframe's Render Notes:

```css
@media (prefers-color-scheme: dark) {
  .dark-bg { background-color: #1A1A1A !important; }
  .dark-card { background-color: #2A2A2A !important; }
  .dark-text { color: #F5F5F5 !important; }
  .dark-soft { color: #B8CACD !important; }
  .dark-cta { background-color: #D8F57C !important; }
}
```

Also add `data-ogsc` and `data-ogsb` attribute selectors for Outlook.com dark mode.

#### C9 — Gmail Clip Limit

Total HTML file size must stay under **102KB** (Gmail clips at 102KB). If a compiled HTML file exceeds 90KB, flag it in the output — do not silently pass.

#### C10 — No Creative Decisions in Phase 2

Phase 2 is mechanical translation. Every design decision was already made in the wireframe. The HTML builder:
- Does NOT choose colours (wireframe has hex values)
- Does NOT choose fonts (template defines Fraunces + Inter)
- Does NOT choose spacing (wireframe has px values)
- Does NOT choose layout (wireframe ASCII shows section order)
- Does NOT choose contraptions (wireframe Contraption Specs has CSS values)
- ONLY reads the wireframe sections and converts them to production HTML using the template's structural patterns

---

## Task List — 124 JSX + 124 HTML = 248 files total

Each wireframe maps to 1 JSX file and 1 HTML file. The wave structure matches the wireframe waves exactly.

### Naming Convention

```
Wireframe:  /root/projects/brightkidco/wireframes/<flow>/<flow>-<id>-e<email>[-l<level>].md
JSX:        /root/projects/brightkidco/outputs/jsx/<flow>/<flow>-<id>-e<email>[-l<level>].jsx
HTML:       /root/projects/brightkidco/outputs/html/<flow>/<flow>-<id>-e<email>[-l<level>].html
```

### Wave Structure

| Wave | Emails | JSX Tasks | HTML Tasks |
|------|--------|-----------|------------|
| 1 | Welcome E1-E4 (16) | 16 | 16 |
| 2 | Welcome E5-E8 (16) | 16 | 16 |
| 3 | Cart/Checkout/Browse (8) | 8 | 8 |
| 4 | Transactional + PP-Detect (7) | 7 | 7 |
| 5 | PP Ed + Mary Story (8) | 8 | 8 |
| 6 | Mid-Check + Replenish + Review (12) | 12 | 12 |
| 7 | Winback A + Site + FAQ E1 (14) | 14 | 14 |
| 8 | FAQ E2-E6 (5) | 5 | 5 |
| 9 | PP-Ext Ed E1-E3 (12) | 12 | 12 |
| 10 | PP-Ext Ed E4-E5 + At-Risk + Sunset (14) | 14 | 14 |
| 11 | Winback B (12) | 12 | 12 |
| **Total** | **124** | **124** | **124** |

---

## Execution Flow

```
Wave N wireframes verified ✅
  │
  ├── Phase 1 — JSX Production: 15 agents in parallel
  │     Each reads: wireframe (.md) + email-1.jsx (template reference)
  │     Writes: 1 .jsx file per email
  │     Validation: component structure, inline styles, copy verbatim
  │
  └── Phase 2 — HTML Compilation: 15 agents in parallel
        Each reads: wireframe (.md) + email-1.jsx (template reference)
        Writes: 1 .html file per email
        Validation: table structure, CSS inlined, responsive, dark mode, Outlook VML
        NO CREATIVE DECISIONS — mechanical conversion only
```

**1 wireframe wave → 2 sub-waves (JSX then HTML) = 2 rounds per wave.**
**Total: 11 waves × 2 = 22 rounds.**
**Total files: 124 wireframes + 124 JSX + 124 HTML = 372 files across all phases.**

---

## Validation Criteria

### JSX Validation (Phase 1)

- [ ] File exists at exact path with `.jsx` extension
- [ ] File size minimum 5KB
- [ ] Component name matches pattern: `Email<Flow><Email><Level>`
- [ ] 8 brand color tokens declared at top (`teal`, `green`, `ink`, `soft`, `cream`, `paper`, `mint`, `lilac`)
- [ ] Every section from wireframe Layout ASCII has a corresponding JSX `<div>` with comment marker
- [ ] All CSS values match the wireframe's Contraption Specs — random sampling of 5 values
- [ ] Copy matches wireframe's Copy Blocks — random sampling of 3 blocks
- [ ] No external CSS files — all styles inline
- [ ] Component exported to `window.Email*`

### HTML Validation (Phase 2)

- [ ] File exists at exact path with `.html` extension
- [ ] File size under 102KB (Gmail clip limit)
- [ ] DOCTYPE and charset declared
- [ ] Table-based layout (not `<div>` layout)
- [ ] Google Fonts loaded via `<link>` in `<head>` (exact URLs from email-1.jsx)
- [ ] All CSS properties match wireframe Contraption Specs — random sampling of 5 values
- [ ] Copy matches wireframe Copy Blocks — random sampling of 3 blocks verbatim
- [ ] Email structure matches wireframe Layout ASCII — same section order and hierarchy
- [ ] Images have `alt` text from wireframe Image Briefs
- [ ] Responsive media queries present (< 620px)
- [ ] Dark mode media queries present with hex pairs from wireframe Render Notes
- [ ] CTA button has VML roundrect for Outlook (if pill/rounded in wireframe)
- [ ] Gradient backgrounds have VML fallback (if present in wireframe)
- [ ] No creative decisions — everything traceable to the wireframe
- [ ] File ends cleanly (no truncated output)

---

## Output Directory Structure

```
/root/projects/brightkidco/outputs/
├── jsx/
│   ├── welcome/
│   │   ├── welcome-01-e1-l1.jsx
│   │   ├── welcome-01-e1-l2.jsx
│   │   ├── ...
│   ├── cart/
│   ├── checkout/
│   ├── browse/
│   ├── transactional/
│   ├── pp-direct-upsell/
│   ├── pp-level-detection/
│   ├── pp-education/
│   ├── pp-extended-upsell/
│   ├── pp-mid-checkin/
│   ├── pp-mary-story/
│   ├── replenish-a/
│   ├── replenish-b/
│   ├── replenish-c/
│   ├── review-request/
│   ├── winback-a/
│   ├── site-abandonment/
│   ├── faq-library/
│   ├── pp-extended-ed/
│   ├── pp-at-risk/
│   ├── winback-b/
│   └── sunset/
│
└── html/
    ├── welcome/
    │   ├── welcome-01-e1-l1.html
    │   ├── welcome-01-e1-l2.html
    │   ├── ...
    ├── cart/
    ├── checkout/
    ├── browse/
    ├── transactional/
    ├── ...
    └── sunset/
```
