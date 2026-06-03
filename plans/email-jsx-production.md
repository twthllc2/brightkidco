     1|# BrightKidCo — Email JSX Production Plan
     2|
     3|> **Phase: Email JSX** — Build production-ready JSX components for all 124 emails
     4|> Generated: May 30, 2026 | Source: Copy outputs + Email Artifact Library (100 artifacts) + client template (`email-1.jsx`)
     5|> Output dir: `/root/projects/brightkidco/outputs/jsx/`
     6|
     7|---
     8|
     9|## Purpose
    10|
    11|The copy phase produced 124 files with **what to say** (copy) and **how to build it** (creative strategy + layout spec + color spec + contraption architecture). This phase translates those specs into production-ready JSX components using the Email Artifact Library.
    12|
    13|**No wireframes. No intermediate step.** Copy → Artifacts → JSX → HTML.
    14|
    15|---
    16|
    17|## How It Works
    18|
    19|1. **Ralph reads this plan** and dispatches 15 agents per wave
    20|2. **Each agent** reads the copy file, reads the artifact library, assembles JSX
    21|3. **JSX output** goes to `outputs/jsx/<flow>/<email>.jsx`
    22|4. **Ralph validates** JSX files exist and are >500 bytes
    23|5. **Ralph runs** `node compile-jsx.mjs --all outputs/jsx/ outputs/html/` to compile HTML
    24|6. **Ralph advances** to next wave
    25|
    26|---
    27|
    28|## Input Files
    29|
    30|| File | Path | Purpose |
    31||------|------|---------|
    32|| Copy files | `/root/projects/brightkidco/outputs/copy/<flow>/<email>.md` | Source copy + creative strategy |
    33|| Artifact library | `/root/projects/brightkidco/email-artifact-library.md` | 100 reusable visual components |
    34|| Client template | `/root/projects/brightkidco/raw/extracted_bkco/autistic-welcome/email-1.jsx` | Brand system reference |
    35|| Compilation script | `/root/projects/brightkidco/compile-jsx.mjs` | JSX → HTML compiler |
    36|
    37|---
    38|
    39|## Agent Rules
    40|
    41|### Rule 1: The Copy File Is the Single Source of Truth
    42|
    43|Read the copy file for your assigned email. It contains:
    44|- **Part 1:** Full email copy (subject, preview, body, CTA, signoff, footer) — verbatim, never rewrite
    45|- **Part 2:** Full creative strategy (Big Idea, layout spec, color spec, contraption architecture, typography, furniture)
    46|
    47|### Rule 2: Use the Artifact Library for Visual Components
    48|
    49|Read the artifact library. Use the **Artifact Selection Guide** at the bottom to pick components for your flow type. The guide tells you which artifacts are mandatory and which are optional for each flow.
    50|
    51|### Rule 3: The Template Defines the Brand System
    52|
    53|Read the client template (`email-1.jsx`) for:
    54|- Font stack: Fraunces (serif) headlines + Inter (sans-serif) body
    55|- Color tokens: teal, green, ink, soft, cream, paper, lilac, mint
    56|- Section architecture: preheader → logo → hero → body → sections → CTA → signoff → footer
    57|- CTA pattern: gradient pill, border-radius 999
    58|
    59|### Rule 4: Copy Is NEVER Rewritten
    60|
    61|Every word of the email copy is taken VERBATIM from the copy file. No paraphrasing. No rewrites. The copy is the final approved copy. Your job is to lay it out, not to re-author it.
    62|
    ### Rule 5: Colors Come from the Copy File or Defaults

    If the copy file has a COLOR section with hex values, use those. If not, use the brand defaults: teal=#2BAEB4, green=#5DD07A, ink=#1F3A3D, soft=#4A6568, cream=#FBF7F1, paper=#FFFFFF, lilac=#EEE8F6, mint=#E8F5EC. The copy file's color spec (if present) overrides the defaults.
    66|
    ### Rule 6: Typography Comes from the Copy File or Defaults

    If the copy file has a TYPOGRAPHY section with exact specs, use those. If not, use the brand defaults: Fraunces for headlines, Inter for body, sizes per the template.
    70|
    71|### Rule 7: Every Email Must Work Without Images
    72|
    73|Images are optional. The email must communicate its full message even if images are blocked. Use emoji placeholders where images would go. Include `alt` text on all images.
    74|
    75|### Rule 8: JSX Structure
    76|
    77|Every JSX file follows this structure:
    78|
    79|```jsx
    80|/*
    81| * Flow Name · Email N · Level (if level-specific)
    82| * Copy file: /root/projects/brightkidco/outputs/copy/<flow>/<email>.md
    83| * Artifacts used: [list of artifact numbers and names]
    84| */
    85|
    86|const EmailName = () => {
    87|  // Color tokens from copy file
    88|  const teal = "#2BAEB4";
    89|  const green = "#5DD07A";
    90|  // ... etc
    91|
    92|  return (
    93|    <div style={{...}}>
    94|      {/* PREHEADER */}
    95|      {/* LOGO */}
    96|      {/* HERO */}
    97|      {/* BODY SECTIONS */}
    98|      {/* CTA */}
    99|      {/* SIGNOFF */}
   100|      {/* FOOTER */}
   101|    </div>
   102|  );
   103|};
   104|
   105|window.EmailName = EmailName;
   106|```
   107|
   108|### Rule 9: Be Creative Within Constraints
   109|
   110|Same artifacts, different arrangements per email. The arrangement is creative. The building blocks are fixed. Use the copy file's CONTRAPTION section to guide your layout choices.
   111|
   112|### Rule 10: Validate Before Marking Done
   113|
   114|Before marking your task done, verify:
   115|- [ ] All verbatim text from copy file included
   116|- [ ] Colors match the copy file's COLOR section
   117|- [ ] Typography matches the copy file's TYPOGRAPHY section
   118|- [ ] At least 3 artifacts from the library used
   119|- [ ] JSX is valid (no syntax errors)
   120|- [ ] Email works without images
   121|- [ ] File size > 500 bytes
   122|
   123|---
   124|
   125|## Wave Structure
   126|
   127|**124 emails ÷ 15 agents = 8 waves of 15 + 1 wave of 4**
   128|
   129|### Wave 01 — 15 emails
   130|
   131|| # | Agent | Flow | Email | Copy File | Output |
   132||---|-------|------|-------|-----------|--------|
   133|| 001 | ops | Browse Abandonment | browse-04-e1 | `/root/projects/brightkidco/outputs/copy/browse/browse-04-e1.md` | `/root/projects/brightkidco/outputs/jsx/browse/browse-04-e1.jsx` |
   134|| 002 | ops2 | Browse Abandonment | browse-04-e2 | `/root/projects/brightkidco/outputs/copy/browse/browse-04-e2.md` | `/root/projects/brightkidco/outputs/jsx/browse/browse-04-e2.jsx` |
   135|| 003 | ops3 | Browse Abandonment | browse-04-e3 | `/root/projects/brightkidco/outputs/copy/browse/browse-04-e3.md` | `/root/projects/brightkidco/outputs/jsx/browse/browse-04-e3.jsx` |
   136|| 004 | ops4 | Cart Abandonment | cart-02-e1 | `/root/projects/brightkidco/outputs/copy/cart/cart-02-e1.md` | `/root/projects/brightkidco/outputs/jsx/cart/cart-02-e1.jsx` |
   137|| 005 | ops5 | Cart Abandonment | cart-02-e2 | `/root/projects/brightkidco/outputs/copy/cart/cart-02-e2.md` | `/root/projects/brightkidco/outputs/jsx/cart/cart-02-e2.jsx` |
   138|| 006 | ops6 | Cart Abandonment | cart-02-e3 | `/root/projects/brightkidco/outputs/copy/cart/cart-02-e3.md` | `/root/projects/brightkidco/outputs/jsx/cart/cart-02-e3.jsx` |
   139|| 007 | ops7 | Checkout Abandonment | checkout-03-e1 | `/root/projects/brightkidco/outputs/copy/checkout/checkout-03-e1.md` | `/root/projects/brightkidco/outputs/jsx/checkout/checkout-03-e1.jsx` |
   140|| 008 | ops8 | Checkout Abandonment | checkout-03-e2 | `/root/projects/brightkidco/outputs/copy/checkout/checkout-03-e2.md` | `/root/projects/brightkidco/outputs/jsx/checkout/checkout-03-e2.jsx` |
   141|| 009 | ops9 | FAQ Library | faq-21-e1 | `/root/projects/brightkidco/outputs/copy/faq-library/faq-21-e1.md` | `/root/projects/brightkidco/outputs/jsx/faq-library/faq-21-e1.jsx` |
   142|| 010 | ops10 | FAQ Library | faq-21-e2 | `/root/projects/brightkidco/outputs/copy/faq-library/faq-21-e2.md` | `/root/projects/brightkidco/outputs/jsx/faq-library/faq-21-e2.jsx` |
   143|| 011 | ops11 | FAQ Library | faq-21-e3 | `/root/projects/brightkidco/outputs/copy/faq-library/faq-21-e3.md` | `/root/projects/brightkidco/outputs/jsx/faq-library/faq-21-e3.jsx` |
   144|| 012 | ops12 | FAQ Library | faq-21-e4 | `/root/projects/brightkidco/outputs/copy/faq-library/faq-21-e4.md` | `/root/projects/brightkidco/outputs/jsx/faq-library/faq-21-e4.jsx` |
   145|| 013 | ops13 | FAQ Library | faq-21-e5 | `/root/projects/brightkidco/outputs/copy/faq-library/faq-21-e5.md` | `/root/projects/brightkidco/outputs/jsx/faq-library/faq-21-e5.jsx` |
   146|| 014 | ops14 | FAQ Library | faq-21-e6 | `/root/projects/brightkidco/outputs/copy/faq-library/faq-21-e6.md` | `/root/projects/brightkidco/outputs/jsx/faq-library/faq-21-e6.jsx` |
   147|| 015 | ops15 | Post-Purchase At Risk | atrisk-23-e1 | `/root/projects/brightkidco/outputs/copy/pp-at-risk/atrisk-23-e1.md` | `/root/projects/brightkidco/outputs/jsx/pp-at-risk/atrisk-23-e1.jsx` |
   148|
   149|### Wave 02 — 15 emails
   150|
   151|| # | Agent | Flow | Email | Copy File | Output |
   152||---|-------|------|-------|-----------|--------|
   153|| 016 | ops | Post-Purchase At Risk | atrisk-23-e2 | `/root/projects/brightkidco/outputs/copy/pp-at-risk/atrisk-23-e2.md` | `/root/projects/brightkidco/outputs/jsx/pp-at-risk/atrisk-23-e2.jsx` |
   154|| 017 | ops2 | Post-Purchase At Risk | atrisk-23-e3 | `/root/projects/brightkidco/outputs/copy/pp-at-risk/atrisk-23-e3.md` | `/root/projects/brightkidco/outputs/jsx/pp-at-risk/atrisk-23-e3.jsx` |
   155|| 018 | ops3 | Post-Purchase At Risk | atrisk-23-e4 | `/root/projects/brightkidco/outputs/copy/pp-at-risk/atrisk-23-e4.md` | `/root/projects/brightkidco/outputs/jsx/pp-at-risk/atrisk-23-e4.jsx` |
   156|| 019 | ops4 | Post-Purchase Direct Upsell | upsell-09-e1 | `/root/projects/brightkidco/outputs/copy/pp-direct-upsell/upsell-09-e1.md` | `/root/projects/brightkidco/outputs/jsx/pp-direct-upsell/upsell-09-e1.jsx` |
   157|| 020 | ops5 | Post-Purchase Direct Upsell | upsell-09-e2 | `/root/projects/brightkidco/outputs/copy/pp-direct-upsell/upsell-09-e2.md` | `/root/projects/brightkidco/outputs/jsx/pp-direct-upsell/upsell-09-e2.jsx` |
   158|| 021 | ops6 | Post-Purchase Education | pped-11-d0 | `/root/projects/brightkidco/outputs/copy/pp-education/pped-11-d0.md` | `/root/projects/brightkidco/outputs/jsx/pp-education/pped-11-d0.jsx` |
   159|| 022 | ops7 | Post-Purchase Education | pped-11-d14 | `/root/projects/brightkidco/outputs/copy/pp-education/pped-11-d14.md` | `/root/projects/brightkidco/outputs/jsx/pp-education/pped-11-d14.jsx` |
   160|| 023 | ops8 | Post-Purchase Education | pped-11-d21 | `/root/projects/brightkidco/outputs/copy/pp-education/pped-11-d21.md` | `/root/projects/brightkidco/outputs/jsx/pp-education/pped-11-d21.jsx` |
   161|| 024 | ops9 | Post-Purchase Education | pped-11-d7 | `/root/projects/brightkidco/outputs/copy/pp-education/pped-11-d7.md` | `/root/projects/brightkidco/outputs/jsx/pp-education/pped-11-d7.jsx` |
   162|| 025 | ops10 | Post-Purchase Extended Education | pped-22-e1-gf | `/root/projects/brightkidco/outputs/copy/pp-extended-ed/pped-22-e1-gf.md` | `/root/projects/brightkidco/outputs/jsx/pp-extended-ed/pped-22-e1-gf.jsx` |
   163|| 026 | ops11 | Post-Purchase Extended Education | pped-22-e1-l1 | `/root/projects/brightkidco/outputs/copy/pp-extended-ed/pped-22-e1-l1.md` | `/root/projects/brightkidco/outputs/jsx/pp-extended-ed/pped-22-e1-l1.jsx` |
   164|| 027 | ops12 | Post-Purchase Extended Education | pped-22-e1-l2 | `/root/projects/brightkidco/outputs/copy/pp-extended-ed/pped-22-e1-l2.md` | `/root/projects/brightkidco/outputs/jsx/pp-extended-ed/pped-22-e1-l2.jsx` |
   165|| 028 | ops13 | Post-Purchase Extended Education | pped-22-e1-l3 | `/root/projects/brightkidco/outputs/copy/pp-extended-ed/pped-22-e1-l3.md` | `/root/projects/brightkidco/outputs/jsx/pp-extended-ed/pped-22-e1-l3.jsx` |
   166|| 029 | ops14 | Post-Purchase Extended Education | pped-22-e2-gf | `/root/projects/brightkidco/outputs/copy/pp-extended-ed/pped-22-e2-gf.md` | `/root/projects/brightkidco/outputs/jsx/pp-extended-ed/pped-22-e2-gf.jsx` |
   167|| 030 | ops15 | Post-Purchase Extended Education | pped-22-e2-l1 | `/root/projects/brightkidco/outputs/copy/pp-extended-ed/pped-22-e2-l1.md` | `/root/projects/brightkidco/outputs/jsx/pp-extended-ed/pped-22-e2-l1.jsx` |
   168|
   169|### Wave 03 — 15 emails
   170|
   171|| # | Agent | Flow | Email | Copy File | Output |
   172||---|-------|------|-------|-----------|--------|
   173|| 031 | ops | Post-Purchase Extended Education | pped-22-e2-l2 | `/root/projects/brightkidco/outputs/copy/pp-extended-ed/pped-22-e2-l2.md` | `/root/projects/brightkidco/outputs/jsx/pp-extended-ed/pped-22-e2-l2.jsx` |
   174|| 032 | ops2 | Post-Purchase Extended Education | pped-22-e2-l3 | `/root/projects/brightkidco/outputs/copy/pp-extended-ed/pped-22-e2-l3.md` | `/root/projects/brightkidco/outputs/jsx/pp-extended-ed/pped-22-e2-l3.jsx` |
   175|| 033 | ops3 | Post-Purchase Extended Education | pped-22-e3-gf | `/root/projects/brightkidco/outputs/copy/pp-extended-ed/pped-22-e3-gf.md` | `/root/projects/brightkidco/outputs/jsx/pp-extended-ed/pped-22-e3-gf.jsx` |
   176|| 034 | ops4 | Post-Purchase Extended Education | pped-22-e3-l1 | `/root/projects/brightkidco/outputs/copy/pp-extended-ed/pped-22-e3-l1.md` | `/root/projects/brightkidco/outputs/jsx/pp-extended-ed/pped-22-e3-l1.jsx` |
   177|| 035 | ops5 | Post-Purchase Extended Education | pped-22-e3-l2 | `/root/projects/brightkidco/outputs/copy/pp-extended-ed/pped-22-e3-l2.md` | `/root/projects/brightkidco/outputs/jsx/pp-extended-ed/pped-22-e3-l2.jsx` |
   178|| 036 | ops6 | Post-Purchase Extended Education | pped-22-e3-l3 | `/root/projects/brightkidco/outputs/copy/pp-extended-ed/pped-22-e3-l3.md` | `/root/projects/brightkidco/outputs/jsx/pp-extended-ed/pped-22-e3-l3.jsx` |
   179|| 037 | ops7 | Post-Purchase Extended Education | pped-22-e4-gf | `/root/projects/brightkidco/outputs/copy/pp-extended-ed/pped-22-e4-gf.md` | `/root/projects/brightkidco/outputs/jsx/pp-extended-ed/pped-22-e4-gf.jsx` |
   180|| 038 | ops8 | Post-Purchase Extended Education | pped-22-e4-l1 | `/root/projects/brightkidco/outputs/copy/pp-extended-ed/pped-22-e4-l1.md` | `/root/projects/brightkidco/outputs/jsx/pp-extended-ed/pped-22-e4-l1.jsx` |
   181|| 039 | ops9 | Post-Purchase Extended Education | pped-22-e4-l2 | `/root/projects/brightkidco/outputs/copy/pp-extended-ed/pped-22-e4-l2.md` | `/root/projects/brightkidco/outputs/jsx/pp-extended-ed/pped-22-e4-l2.jsx` |
   182|| 040 | ops10 | Post-Purchase Extended Education | pped-22-e4-l3 | `/root/projects/brightkidco/outputs/copy/pp-extended-ed/pped-22-e4-l3.md` | `/root/projects/brightkidco/outputs/jsx/pp-extended-ed/pped-22-e4-l3.jsx` |
   183|| 041 | ops11 | Post-Purchase Extended Education | pped-22-e5-gf | `/root/projects/brightkidco/outputs/copy/pp-extended-ed/pped-22-e5-gf.md` | `/root/projects/brightkidco/outputs/jsx/pp-extended-ed/pped-22-e5-gf.jsx` |
   184|| 042 | ops12 | Post-Purchase Extended Education | pped-22-e5-l1 | `/root/projects/brightkidco/outputs/copy/pp-extended-ed/pped-22-e5-l1.md` | `/root/projects/brightkidco/outputs/jsx/pp-extended-ed/pped-22-e5-l1.jsx` |
   185|| 043 | ops13 | Post-Purchase Extended Education | pped-22-e5-l2 | `/root/projects/brightkidco/outputs/copy/pp-extended-ed/pped-22-e5-l2.md` | `/root/projects/brightkidco/outputs/jsx/pp-extended-ed/pped-22-e5-l2.jsx` |
   186|| 044 | ops14 | Post-Purchase Extended Education | pped-22-e5-l3 | `/root/projects/brightkidco/outputs/copy/pp-extended-ed/pped-22-e5-l3.md` | `/root/projects/brightkidco/outputs/jsx/pp-extended-ed/pped-22-e5-l3.jsx` |
   187|| 045 | ops15 | Post-Purchase Extended Upsell | ppupsell-12-e1 | `/root/projects/brightkidco/outputs/copy/pp-extended-upsell/ppupsell-12-e1.md` | `/root/projects/brightkidco/outputs/jsx/pp-extended-upsell/ppupsell-12-e1.jsx` |
   188|
   189|### Wave 04 — 15 emails
   190|
   191|| # | Agent | Flow | Email | Copy File | Output |
   192||---|-------|------|-------|-----------|--------|
   193|| 046 | ops | Post-Purchase Extended Upsell | ppupsell-12-e2 | `/root/projects/brightkidco/outputs/copy/pp-extended-upsell/ppupsell-12-e2.md` | `/root/projects/brightkidco/outputs/jsx/pp-extended-upsell/ppupsell-12-e2.jsx` |
   194|| 047 | ops2 | Post-Purchase Extended Upsell | ppupsell-12-e3 | `/root/projects/brightkidco/outputs/copy/pp-extended-upsell/ppupsell-12-e3.md` | `/root/projects/brightkidco/outputs/jsx/pp-extended-upsell/ppupsell-12-e3.jsx` |
   195|| 048 | ops3 | Post-Purchase Level Detection | detection-10 | `/root/projects/brightkidco/outputs/copy/pp-level-detection/detection-10.md` | `/root/projects/brightkidco/outputs/jsx/pp-level-detection/detection-10.jsx` |
   196|| 049 | ops4 | Post-Purchase Mary Story | mary-14-e1 | `/root/projects/brightkidco/outputs/copy/pp-mary-story/mary-14-e1.md` | `/root/projects/brightkidco/outputs/jsx/pp-mary-story/mary-14-e1.jsx` |
   197|| 050 | ops5 | Post-Purchase Mid-Checkin | mid-13-d30 | `/root/projects/brightkidco/outputs/copy/pp-mid-checkin/mid-13-d30.md` | `/root/projects/brightkidco/outputs/jsx/pp-mid-checkin/mid-13-d30.jsx` |
   198|| 051 | ops6 | Post-Purchase Mid-Checkin | mid-13-d45 | `/root/projects/brightkidco/outputs/copy/pp-mid-checkin/mid-13-d45.md` | `/root/projects/brightkidco/outputs/jsx/pp-mid-checkin/mid-13-d45.jsx` |
   199|| 052 | ops7 | Post-Purchase Mid-Checkin | mid-13-d60 | `/root/projects/brightkidco/outputs/copy/pp-mid-checkin/mid-13-d60.md` | `/root/projects/brightkidco/outputs/jsx/pp-mid-checkin/mid-13-d60.jsx` |
   200|| 053 | ops8 | Replenishment A | repa-15-e1 | `/root/projects/brightkidco/outputs/copy/replenish-a/repa-15-e1.md` | `/root/projects/brightkidco/outputs/jsx/replenish-a/repa-15-e1.jsx` |
   201|| 054 | ops9 | Replenishment A | repa-15-e2 | `/root/projects/brightkidco/outputs/copy/replenish-a/repa-15-e2.md` | `/root/projects/brightkidco/outputs/jsx/replenish-a/repa-15-e2.jsx` |
   202|| 055 | ops10 | Replenishment A | repa-15-e3 | `/root/projects/brightkidco/outputs/copy/replenish-a/repa-15-e3.md` | `/root/projects/brightkidco/outputs/jsx/replenish-a/repa-15-e3.jsx` |
   203|| 056 | ops11 | Replenishment B | repb-16-e1 | `/root/projects/brightkidco/outputs/copy/replenish-b/repb-16-e1.md` | `/root/projects/brightkidco/outputs/jsx/replenish-b/repb-16-e1.jsx` |
   204|| 057 | ops12 | Replenishment B | repb-16-e2 | `/root/projects/brightkidco/outputs/copy/replenish-b/repb-16-e2.md` | `/root/projects/brightkidco/outputs/jsx/replenish-b/repb-16-e2.jsx` |
   205|| 058 | ops13 | Replenishment C | repc-17-e1 | `/root/projects/brightkidco/outputs/copy/replenish-c/repc-17-e1.md` | `/root/projects/brightkidco/outputs/jsx/replenish-c/repc-17-e1.jsx` |
   206|| 059 | ops14 | Replenishment C | repc-17-e2 | `/root/projects/brightkidco/outputs/copy/replenish-c/repc-17-e2.md` | `/root/projects/brightkidco/outputs/jsx/replenish-c/repc-17-e2.jsx` |
   207|| 060 | ops15 | Review Request | review-18-e1 | `/root/projects/brightkidco/outputs/copy/review-request/review-18-e1.md` | `/root/projects/brightkidco/outputs/jsx/review-request/review-18-e1.jsx` |
   208|
   209|### Wave 05 — 15 emails
   210|
   211|| # | Agent | Flow | Email | Copy File | Output |
   212||---|-------|------|-------|-----------|--------|
   213|| 061 | ops | Review Request | review-18-e2 | `/root/projects/brightkidco/outputs/copy/review-request/review-18-e2.md` | `/root/projects/brightkidco/outputs/jsx/review-request/review-18-e2.jsx` |
   214|| 062 | ops2 | Site Abandonment | site-20-e1 | `/root/projects/brightkidco/outputs/copy/site-abandonment/site-20-e1.md` | `/root/projects/brightkidco/outputs/jsx/site-abandonment/site-20-e1.jsx` |
   215|| 063 | ops3 | Sunset | sunset-25-e1 | `/root/projects/brightkidco/outputs/copy/sunset/sunset-25-e1.md` | `/root/projects/brightkidco/outputs/jsx/sunset/sunset-25-e1.jsx` |
   216|| 064 | ops4 | Sunset | sunset-25-e2 | `/root/projects/brightkidco/outputs/copy/sunset/sunset-25-e2.md` | `/root/projects/brightkidco/outputs/jsx/sunset/sunset-25-e2.jsx` |
   217|| 065 | ops5 | Transactional | arrived-08 | `/root/projects/brightkidco/outputs/copy/transactional/arrived-08.md` | `/root/projects/brightkidco/outputs/jsx/transactional/arrived-08.jsx` |
   218|| 066 | ops6 | Transactional | ofd-07-e1 | `/root/projects/brightkidco/outputs/copy/transactional/ofd-07-e1.md` | `/root/projects/brightkidco/outputs/jsx/transactional/ofd-07-e1.jsx` |
   219|| 067 | ops7 | Transactional | order-05-e1 | `/root/projects/brightkidco/outputs/copy/transactional/order-05-e1.md` | `/root/projects/brightkidco/outputs/jsx/transactional/order-05-e1.jsx` |
   220|| 068 | ops8 | Transactional | shipping-06 | `/root/projects/brightkidco/outputs/copy/transactional/shipping-06.md` | `/root/projects/brightkidco/outputs/jsx/transactional/shipping-06.jsx` |
   221|| 069 | ops9 | Welcome Flow | welcome-01-e1-gf | `/root/projects/brightkidco/outputs/copy/welcome/welcome-01-e1-gf.md` | `/root/projects/brightkidco/outputs/jsx/welcome/welcome-01-e1-gf.jsx` |
   222|| 070 | ops10 | Welcome Flow | welcome-01-e1-l1 | `/root/projects/brightkidco/outputs/copy/welcome/welcome-01-e1-l1.md` | `/root/projects/brightkidco/outputs/jsx/welcome/welcome-01-e1-l1.jsx` |
   223|| 071 | ops11 | Welcome Flow | welcome-01-e1-l2 | `/root/projects/brightkidco/outputs/copy/welcome/welcome-01-e1-l2.md` | `/root/projects/brightkidco/outputs/jsx/welcome/welcome-01-e1-l2.jsx` |
   224|| 072 | ops12 | Welcome Flow | welcome-01-e1-l3 | `/root/projects/brightkidco/outputs/copy/welcome/welcome-01-e1-l3.md` | `/root/projects/brightkidco/outputs/jsx/welcome/welcome-01-e1-l3.jsx` |
   225|| 073 | ops13 | Welcome Flow | welcome-01-e2-gf | `/root/projects/brightkidco/outputs/copy/welcome/welcome-01-e2-gf.md` | `/root/projects/brightkidco/outputs/jsx/welcome/welcome-01-e2-gf.jsx` |
   226|| 074 | ops14 | Welcome Flow | welcome-01-e2-l1 | `/root/projects/brightkidco/outputs/copy/welcome/welcome-01-e2-l1.md` | `/root/projects/brightkidco/outputs/jsx/welcome/welcome-01-e2-l1.jsx` |
   227|| 075 | ops15 | Welcome Flow | welcome-01-e2-l2 | `/root/projects/brightkidco/outputs/copy/welcome/welcome-01-e2-l2.md` | `/root/projects/brightkidco/outputs/jsx/welcome/welcome-01-e2-l2.jsx` |
   228|
   229|### Wave 06 — 15 emails
   230|
   231|| # | Agent | Flow | Email | Copy File | Output |
   232||---|-------|------|-------|-----------|--------|
   233|| 076 | ops | Welcome Flow | welcome-01-e2-l3 | `/root/projects/brightkidco/outputs/copy/welcome/welcome-01-e2-l3.md` | `/root/projects/brightkidco/outputs/jsx/welcome/welcome-01-e2-l3.jsx` |
   234|| 077 | ops2 | Welcome Flow | welcome-01-e3-gf | `/root/projects/brightkidco/outputs/copy/welcome/welcome-01-e3-gf.md` | `/root/projects/brightkidco/outputs/jsx/welcome/welcome-01-e3-gf.jsx` |
   235|| 078 | ops3 | Welcome Flow | welcome-01-e3-l1 | `/root/projects/brightkidco/outputs/copy/welcome/welcome-01-e3-l1.md` | `/root/projects/brightkidco/outputs/jsx/welcome/welcome-01-e3-l1.jsx` |
   236|| 079 | ops4 | Welcome Flow | welcome-01-e3-l2 | `/root/projects/brightkidco/outputs/copy/welcome/welcome-01-e3-l2.md` | `/root/projects/brightkidco/outputs/jsx/welcome/welcome-01-e3-l2.jsx` |
   237|| 080 | ops5 | Welcome Flow | welcome-01-e3-l3 | `/root/projects/brightkidco/outputs/copy/welcome/welcome-01-e3-l3.md` | `/root/projects/brightkidco/outputs/jsx/welcome/welcome-01-e3-l3.jsx` |
   238|| 081 | ops6 | Welcome Flow | welcome-01-e4-gf | `/root/projects/brightkidco/outputs/copy/welcome/welcome-01-e4-gf.md` | `/root/projects/brightkidco/outputs/jsx/welcome/welcome-01-e4-gf.jsx` |
   239|| 082 | ops7 | Welcome Flow | welcome-01-e4-l1 | `/root/projects/brightkidco/outputs/copy/welcome/welcome-01-e4-l1.md` | `/root/projects/brightkidco/outputs/jsx/welcome/welcome-01-e4-l1.jsx` |
   240|| 083 | ops8 | Welcome Flow | welcome-01-e4-l2 | `/root/projects/brightkidco/outputs/copy/welcome/welcome-01-e4-l2.md` | `/root/projects/brightkidco/outputs/jsx/welcome/welcome-01-e4-l2.jsx` |
   241|| 084 | ops9 | Welcome Flow | welcome-01-e4-l3 | `/root/projects/brightkidco/outputs/copy/welcome/welcome-01-e4-l3.md` | `/root/projects/brightkidco/outputs/jsx/welcome/welcome-01-e4-l3.jsx` |
   242|| 085 | ops10 | Welcome Flow | welcome-01-e5-gf | `/root/projects/brightkidco/outputs/copy/welcome/welcome-01-e5-gf.md` | `/root/projects/brightkidco/outputs/jsx/welcome/welcome-01-e5-gf.jsx` |
   243|| 086 | ops11 | Welcome Flow | welcome-01-e5-l1 | `/root/projects/brightkidco/outputs/copy/welcome/welcome-01-e5-l1.md` | `/root/projects/brightkidco/outputs/jsx/welcome/welcome-01-e5-l1.jsx` |
   244|| 087 | ops12 | Welcome Flow | welcome-01-e5-l2 | `/root/projects/brightkidco/outputs/copy/welcome/welcome-01-e5-l2.md` | `/root/projects/brightkidco/outputs/jsx/welcome/welcome-01-e5-l2.jsx` |
   245|| 088 | ops13 | Welcome Flow | welcome-01-e5-l3 | `/root/projects/brightkidco/outputs/copy/welcome/welcome-01-e5-l3.md` | `/root/projects/brightkidco/outputs/jsx/welcome/welcome-01-e5-l3.jsx` |
   246|| 089 | ops14 | Welcome Flow | welcome-01-e6-gf | `/root/projects/brightkidco/outputs/copy/welcome/welcome-01-e6-gf.md` | `/root/projects/brightkidco/outputs/jsx/welcome/welcome-01-e6-gf.jsx` |
   247|| 090 | ops15 | Welcome Flow | welcome-01-e6-l1 | `/root/projects/brightkidco/outputs/copy/welcome/welcome-01-e6-l1.md` | `/root/projects/brightkidco/outputs/jsx/welcome/welcome-01-e6-l1.jsx` |
   248|
   249|### Wave 07 — 15 emails
   250|
   251|| # | Agent | Flow | Email | Copy File | Output |
   252||---|-------|------|-------|-----------|--------|
   253|| 091 | ops | Welcome Flow | welcome-01-e6-l2 | `/root/projects/brightkidco/outputs/copy/welcome/welcome-01-e6-l2.md` | `/root/projects/brightkidco/outputs/jsx/welcome/welcome-01-e6-l2.jsx` |
   254|| 092 | ops2 | Welcome Flow | welcome-01-e6-l3 | `/root/projects/brightkidco/outputs/copy/welcome/welcome-01-e6-l3.md` | `/root/projects/brightkidco/outputs/jsx/welcome/welcome-01-e6-l3.jsx` |
   255|| 093 | ops3 | Welcome Flow | welcome-01-e7-gf | `/root/projects/brightkidco/outputs/copy/welcome/welcome-01-e7-gf.md` | `/root/projects/brightkidco/outputs/jsx/welcome/welcome-01-e7-gf.jsx` |
   256|| 094 | ops4 | Welcome Flow | welcome-01-e7-l1 | `/root/projects/brightkidco/outputs/copy/welcome/welcome-01-e7-l1.md` | `/root/projects/brightkidco/outputs/jsx/welcome/welcome-01-e7-l1.jsx` |
   257|| 095 | ops5 | Welcome Flow | welcome-01-e7-l2 | `/root/projects/brightkidco/outputs/copy/welcome/welcome-01-e7-l2.md` | `/root/projects/brightkidco/outputs/jsx/welcome/welcome-01-e7-l2.jsx` |
   258|| 096 | ops6 | Welcome Flow | welcome-01-e7-l3 | `/root/projects/brightkidco/outputs/copy/welcome/welcome-01-e7-l3.md` | `/root/projects/brightkidco/outputs/jsx/welcome/welcome-01-e7-l3.jsx` |
   259|| 097 | ops7 | Welcome Flow | welcome-01-e8-gf | `/root/projects/brightkidco/outputs/copy/welcome/welcome-01-e8-gf.md` | `/root/projects/brightkidco/outputs/jsx/welcome/welcome-01-e8-gf.jsx` |
   260|| 098 | ops8 | Welcome Flow | welcome-01-e8-l1 | `/root/projects/brightkidco/outputs/copy/welcome/welcome-01-e8-l1.md` | `/root/projects/brightkidco/outputs/jsx/welcome/welcome-01-e8-l1.jsx` |
   261|| 099 | ops9 | Welcome Flow | welcome-01-e8-l2 | `/root/projects/brightkidco/outputs/copy/welcome/welcome-01-e8-l2.md` | `/root/projects/brightkidco/outputs/jsx/welcome/welcome-01-e8-l2.jsx` |
   262|| 100 | ops10 | Welcome Flow | welcome-01-e8-l3 | `/root/projects/brightkidco/outputs/copy/welcome/welcome-01-e8-l3.md` | `/root/projects/brightkidco/outputs/jsx/welcome/welcome-01-e8-l3.jsx` |
   263|| 101 | ops11 | Winback A | winback-a-19-e1-gf | `/root/projects/brightkidco/outputs/copy/winback-a/winback-a-19-e1-gf.md` | `/root/projects/brightkidco/outputs/jsx/winback-a/winback-a-19-e1-gf.jsx` |
   264|| 102 | ops12 | Winback A | winback-a-19-e1-l1 | `/root/projects/brightkidco/outputs/copy/winback-a/winback-a-19-e1-l1.md` | `/root/projects/brightkidco/outputs/jsx/winback-a/winback-a-19-e1-l1.jsx` |
   265|| 103 | ops13 | Winback A | winback-a-19-e1-l2 | `/root/projects/brightkidco/outputs/copy/winback-a/winback-a-19-e1-l2.md` | `/root/projects/brightkidco/outputs/jsx/winback-a/winback-a-19-e1-l2.jsx` |
   266|| 104 | ops14 | Winback A | winback-a-19-e1-l3 | `/root/projects/brightkidco/outputs/copy/winback-a/winback-a-19-e1-l3.md` | `/root/projects/brightkidco/outputs/jsx/winback-a/winback-a-19-e1-l3.jsx` |
   267|| 105 | ops15 | Winback A | winback-a-19-e2-gf | `/root/projects/brightkidco/outputs/copy/winback-a/winback-a-19-e2-gf.md` | `/root/projects/brightkidco/outputs/jsx/winback-a/winback-a-19-e2-gf.jsx` |
   268|
   269|### Wave 08 — 15 emails
   270|
   271|| # | Agent | Flow | Email | Copy File | Output |
   272||---|-------|------|-------|-----------|--------|
   273|| 106 | ops | Winback A | winback-a-19-e2-l1 | `/root/projects/brightkidco/outputs/copy/winback-a/winback-a-19-e2-l1.md` | `/root/projects/brightkidco/outputs/jsx/winback-a/winback-a-19-e2-l1.jsx` |
   274|| 107 | ops2 | Winback A | winback-a-19-e2-l2 | `/root/projects/brightkidco/outputs/copy/winback-a/winback-a-19-e2-l2.md` | `/root/projects/brightkidco/outputs/jsx/winback-a/winback-a-19-e2-l2.jsx` |
   275|| 108 | ops3 | Winback A | winback-a-19-e2-l3 | `/root/projects/brightkidco/outputs/copy/winback-a/winback-a-19-e2-l3.md` | `/root/projects/brightkidco/outputs/jsx/winback-a/winback-a-19-e2-l3.jsx` |
   276|| 109 | ops4 | Winback A | winback-a-19-e3-gf | `/root/projects/brightkidco/outputs/copy/winback-a/winback-a-19-e3-gf.md` | `/root/projects/brightkidco/outputs/jsx/winback-a/winback-a-19-e3-gf.jsx` |
   277|| 110 | ops5 | Winback A | winback-a-19-e3-l1 | `/root/projects/brightkidco/outputs/copy/winback-a/winback-a-19-e3-l1.md` | `/root/projects/brightkidco/outputs/jsx/winback-a/winback-a-19-e3-l1.jsx` |
   278|| 111 | ops6 | Winback A | winback-a-19-e3-l2 | `/root/projects/brightkidco/outputs/copy/winback-a/winback-a-19-e3-l2.md` | `/root/projects/brightkidco/outputs/jsx/winback-a/winback-a-19-e3-l2.jsx` |
   279|| 112 | ops7 | Winback A | winback-a-19-e3-l3 | `/root/projects/brightkidco/outputs/copy/winback-a/winback-a-19-e3-l3.md` | `/root/projects/brightkidco/outputs/jsx/winback-a/winback-a-19-e3-l3.jsx` |
   280|| 113 | ops8 | Winback B | winback-b-24-e1-gf | `/root/projects/brightkidco/outputs/copy/winback-b/winback-b-24-e1-gf.md` | `/root/projects/brightkidco/outputs/jsx/winback-b/winback-b-24-e1-gf.jsx` |
   281|| 114 | ops9 | Winback B | winback-b-24-e1-l1 | `/root/projects/brightkidco/outputs/copy/winback-b/winback-b-24-e1-l1.md` | `/root/projects/brightkidco/outputs/jsx/winback-b/winback-b-24-e1-l1.jsx` |
   282|| 115 | ops10 | Winback B | winback-b-24-e1-l2 | `/root/projects/brightkidco/outputs/copy/winback-b/winback-b-24-e1-l2.md` | `/root/projects/brightkidco/outputs/jsx/winback-b/winback-b-24-e1-l2.jsx` |
   283|| 116 | ops11 | Winback B | winback-b-24-e1-l3 | `/root/projects/brightkidco/outputs/copy/winback-b/winback-b-24-e1-l3.md` | `/root/projects/brightkidco/outputs/jsx/winback-b/winback-b-24-e1-l3.jsx` |
   284|| 117 | ops12 | Winback B | winback-b-24-e2-gf | `/root/projects/brightkidco/outputs/copy/winback-b/winback-b-24-e2-gf.md` | `/root/projects/brightkidco/outputs/jsx/winback-b/winback-b-24-e2-gf.jsx` |
   285|| 118 | ops13 | Winback B | winback-b-24-e2-l1 | `/root/projects/brightkidco/outputs/copy/winback-b/winback-b-24-e2-l1.md` | `/root/projects/brightkidco/outputs/jsx/winback-b/winback-b-24-e2-l1.jsx` |
   286|| 119 | ops14 | Winback B | winback-b-24-e2-l2 | `/root/projects/brightkidco/outputs/copy/winback-b/winback-b-24-e2-l2.md` | `/root/projects/brightkidco/outputs/jsx/winback-b/winback-b-24-e2-l2.jsx` |
   287|| 120 | ops15 | Winback B | winback-b-24-e2-l3 | `/root/projects/brightkidco/outputs/copy/winback-b/winback-b-24-e2-l3.md` | `/root/projects/brightkidco/outputs/jsx/winback-b/winback-b-24-e2-l3.jsx` |
   288|
   289|### Wave 09 — 4 emails
   290|
   291|| # | Agent | Flow | Email | Copy File | Output |
   292||---|-------|------|-------|-----------|--------|
   293|| 121 | ops | Winback B | winback-b-24-e3-gf | `/root/projects/brightkidco/outputs/copy/winback-b/winback-b-24-e3-gf.md` | `/root/projects/brightkidco/outputs/jsx/winback-b/winback-b-24-e3-gf.jsx` |
   294|| 122 | ops2 | Winback B | winback-b-24-e3-l1 | `/root/projects/brightkidco/outputs/copy/winback-b/winback-b-24-e3-l1.md` | `/root/projects/brightkidco/outputs/jsx/winback-b/winback-b-24-e3-l1.jsx` |
   295|| 123 | ops3 | Winback B | winback-b-24-e3-l2 | `/root/projects/brightkidco/outputs/copy/winback-b/winback-b-24-e3-l2.md` | `/root/projects/brightkidco/outputs/jsx/winback-b/winback-b-24-e3-l2.jsx` |
   296|| 124 | ops4 | Winback B | winback-b-24-e3-l3 | `/root/projects/brightkidco/outputs/copy/winback-b/winback-b-24-e3-l3.md` | `/root/projects/brightkidco/outputs/jsx/winback-b/winback-b-24-e3-l3.jsx` |
   297|
   298|---
   299|
   300|## Task Body Template
   301|
   302|Each agent receives this task body (with email-specific values filled in):
   303|
   304|```
   305|─────────────────────────────────────────────
   306|TASK: [flow] · [email_name]
   307|─────────────────────────────────────────────
   308|
   309|COPY FILE: /root/projects/brightkidco/outputs/copy/[flow]/[email].md
   310|ARTIFACT LIBRARY: /root/projects/brightkidco/email-artifact-library.md
   311|CLIENT TEMPLATE: /root/projects/brightkidco/raw/extracted_bkco/autistic-welcome/email-1.jsx
   312|OUTPUT: /root/projects/brightkidco/outputs/jsx/[flow]/[email].jsx
   313|
   314|INSTRUCTIONS:
   315|
   316|1. Read the COPY FILE. It has two parts:
   317|   - Part 1: Full email copy (subject, preview, body, CTA, signoff, footer) — use VERBATIM
   318|   - Part 2: Full creative strategy (Big Idea, layout, color, contraption, typography, furniture)
   319|
   320|2. Read the ARTIFACT LIBRARY. Use the Artifact Selection Guide at the bottom to pick components for this flow type.
   321|
   322|3. Read the CLIENT TEMPLATE for brand system reference (fonts, colors, architecture).
   323|
   324|4. Build JSX:
   325|   - Follow the copy file's LAYOUT section for section order
   326|   - Follow the copy file's COLOR section for hex values
   327|   - Follow the copy file's TYPOGRAPHY section for font specs
   328|   - Follow the copy file's CONTRAPTION section for architecture
   329|   - Use artifacts from the library for visual components
   330|   - Copy text VERBATIM from Part 1
   331|
   332|5. Write JSX to OUTPUT path.
   333|
   334|6. Validate:
   335|   - All copy text is verbatim
   336|   - Colors match copy file's COLOR section
   337|   - Typography matches copy file's TYPOGRAPHY section
   338|   - At least 3 artifacts used
   339|   - JSX has no syntax errors
   340|   - File size > 500 bytes
   341|
   342|COLOR TOKENS (from copy file):
   343|[Extract from copy file's COLOR section]
   344|
   345|TYPOGRAPHY (from copy file):
   346|[Extract from copy file's TYPOGRAPHY section]
   347|
   348|CONTRAPTION (from copy file):
   349|[Extract from copy file's CONTRAPTION section]
   350|
   351|VALIDATE: ls -la [output_path] && wc -c [output_path]
   352|─────────────────────────────────────────────
   353|```
   354|
   355|---
   356|
   357|## Post-Wave Compilation
   358|
   359|After each wave completes, Ralph runs:
   360|
   361|```bash
   362|node /root/projects/brightkidco/compile-jsx.mjs --all /root/projects/brightkidco/outputs/jsx/ /root/projects/brightkidco/outputs/html/
   363|```
   364|
   365|This compiles all JSX files to standalone HTML email files.
   366|
   367|---
   368|
   369|## Validation Gates
   370|
   371|After each wave:
   372|1. Check all 15 JSX files exist in `outputs/jsx/<flow>/`
   373|2. Check each file is >500 bytes
   374|3. Run compilation: `node compile-jsx.mjs --all outputs/jsx/ outputs/html/`
   375|4. Check HTML output files exist
   376|5. If any file fails → re-dispatch that task
   377|
   378|---
   379|
   380|## Artifact Selection Guide (Quick Reference)
   381|
   382|### Welcome Flow
   383|**Mandatory:** Gradient Hero (2), Series Badge (3), Mint Insight Block (4), 3-Step Path Cards (5), Soft CTA (7), Signoff (8), Footer (9)
   384|**Optional:** Floating Circles (1), Parent Quote (6), Text-Only CTA (27), Icon Row (58), Pull Quote (62)
   385|
   386|### Cart Abandonment
   387|**Mandatory:** Product Feature Row (34), Solid Urgent CTA (25), Guarantee Badge (31), Star Rating (35), Signoff (8), Footer (9)
   388|**Optional:** Urgency Banner (39), Comparison Row (23), Reassurance Row (61), Testimonial with Stars (72)
   389|
   390|### Checkout Abandonment
   391|**Mandatory:** Product Feature Row (34), Solid Urgent CTA (25), Guarantee Badge (31), Progress Stepper (60), Signoff (8), Footer (9)
   392|**Optional:** Urgency Banner (39), Reassurance Row (61), Community Badge (40)
   393|
   394|### Browse Abandonment
   395|**Mandatory:** Product Image Hero (46), Soft CTA (7), Star Rating (35), Social Proof Bar (32), Signoff (8), Footer (9)
   396|**Optional:** Image Gallery 3-up (50), Icon Row (58), Testimonial Wall (43)
   397|
   398|### Post-Purchase Education
   399|**Mandatory:** Gradient Hero (2), Recognition Anchors (11), Timeline Spectrum (12), Low-Bar Wins (14), Soft CTA (7), Signoff (8), Footer (9)
   400|**Optional:** Mechanism Block (13), Progress Bar (30), Step Process (37), Info Card (71), Avatar Testimonial (36)
   401|
   402|### Post-Purchase Extended Education
   403|**Mandatory:** Gradient Hero (2), Section Header with Icon (44), Step Process (37), Soft CTA (7), Signoff (8), Footer (9)
   404|**Optional:** Checklist with Icons (38), Timeline Spectrum (12), Before/After (41), Stat Row (59)
   405|
   406|### Post-Purchase Upsell
   407|**Mandatory:** Product Feature Row (34), Solid CTA (25), Guarantee Badge (31), Star Rating (35), Signoff (8), Footer (9)
   408|**Optional:** Bundle Card (73), Testimonial with Stars (72), Reassurance Row (61)
   409|
   410|### Post-Purchase At Risk
   411|**Mandatory:** Gradient Hero (2), Avatar Testimonial (36), Soft CTA (7), Community Badge (40), Signoff (8), Footer (9)
   412|**Optional:** Warning Card (69), Pull Quote (62), Step Process (37)
   413|
   414|### Replenishment
   415|**Mandatory:** Product Feature Row (34), Order Summary (98), Solid CTA (25), Signoff (8), Footer (9)
   416|**Optional:** Bundle Card (73), Testimonial Wall (43), Reassurance Row (61)
   417|
   418|### Winback
   419|**Mandatory:** Full-Bleed Hero (17), Testimonial Wall (43), Stat Row (59), Soft CTA (7), Signoff (8), Footer (9)
   420|**Optional:** Pull Quote (62), Community Badge (40), Avatar Testimonial (36)
   421|
   422|### Review Request
   423|**Mandatory:** Gradient Hero (2), Star Rating (35), Solid CTA (25), Signoff (8), Footer (9)
   424|**Optional:** Checklist with Icons (38), Community Badge (40)
   425|
   426|### Transactional
   427|**Mandatory:** Shipping Status (99), Order Summary (98), Progress Stepper (60), Signoff (8), Footer (9)
   428|**Optional:** Delivery Confirmation (100), Info Card (71)
   429|
   430|### Sunset
   431|**Mandatory:** Gradient Hero (2), Pull Quote (62), Soft CTA (7), Signoff (8), Footer (9)
   432|**Optional:** Community Badge (40), Avatar Testimonial (36)
   433|
   434|### FAQ Library
   435|**Mandatory:** Section Header (44), FAQ Accordion (68), Accordion Group (96), Signoff (8), Footer (9)
   436|**Optional:** Info Card (71), Border Accent Card (21)
   437|
## Additional Validation (Added May 30)

### Em Dash Check
After compilation, check for em dashes in HTML output:
```bash
grep -r "—" outputs/html/ | head -5
# Should return nothing
```

### Visual QA (Optional but Recommended)
After wave compilation, open one HTML file in browser to verify:
- Colors render correctly
- Layout is not broken
- Text is readable
- No overlapping elements
