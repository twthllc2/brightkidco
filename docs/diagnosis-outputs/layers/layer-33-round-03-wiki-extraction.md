# L33 R3: Email Format Requirements -- Wiki Extraction

**Date:** May 25, 2026
**Layer:** 33 (Email Format Requirements)
**Round:** 3 (Wiki Extraction)
**Status:** Complete

---

## EXTRACTION SUMMARY

This document extracts ALL content relevant to email format requirements and deliverable standards from available sources. The wiki paths specified in the task body (`/root/wiki/`) do not exist on this system. Content was extracted from: archived Layer 33 diagnosis, overnight plan (Layers 29-38), Layer 38 brand constants, email-related skills (email-design-standards-and-template-build, email-html-generator, copywriting-body-copy-frameworks), meeting notes, and existing diagnosis outputs.

**Total sources read and extracted:** 8 files

---

## 1. THE STANDARD DELIVERABLE STRUCTURE

**Source:** `/root/projects/brightkidco/archive-20260523-1139/diagnosis/layer-33-format-requirements.md` (748 lines), `/root/projects/brightkidco/overnight-plan.md` (Layer 33 section)

Every BrightKidCo email must follow a rigid deliverable structure. The format is an operational contract between the copywriter (Ayoub), the brand strategist (Yurishizu), and the Klaviyo implementation layer. Deviations create review friction, implementation errors, and inconsistency across 110+ mails spanning 25 flows.

```
Mail: [Flow Name] – [Mail Position]
Avatar: [Level]
Send Timing: [Day X / Hour Y]
───────────────────────────────────
Subject Lines (A/B test ready):
1. [Option 1]
2. [Option 2]
3. [Option 3]
───────────────────────────────────
Preheaders:
1. [Option 1]
2. [Option 2]
3. [Option 3]
───────────────────────────────────
Mail Body:
[Structured by sections — see Section 4]
───────────────────────────────────
Lena Sign-Off:
[2-3 sentence sign-off + optional P.S.]
───────────────────────────────────
Mobile-First Notes:
[Layout/length considerations]
───────────────────────────────────
Klaviyo Implementation Notes:
[Trigger setup, exit conditions, segment filters]
```

### Format Rules
- Mail Name + Position: Always first line. Format: `Mail: [Flow Name] – [Mail Position]`. Example: `Mail: Welcome Flow L2 – E2 of 8`
- Avatar: Always second line. Use exact tag: `avatar_level1`, `avatar_level2`, `avatar_level3`, `avatar_general`, or `Cross-Level`
- Send Timing: Always third line. Format: `Day X / Hour Y` after trigger event. Example: `Day 1 / Hour 4`
- Separator: Use `───────────────────────────────────` between each section header

---

## 2. SUBJECT LINE REQUIREMENTS

**Source:** Archived Layer 33 (Section 2)

### Requirements
- Quantity: Exactly 3 options per mail
- Label: "Subject Lines (A/B test ready)"
- Purpose: All 3 are viable A/B test candidates. No throwaway options.

### Rules
- Must sound like Lena, not like a brand
- Must open with symptom recognition OR curiosity — never product-first
- Must NOT contain forbidden phrases (see Layer 15 / Brand Voice Guide)
- No exclamation marks in subject lines (signals marketing)
- No ALL CAPS words (except where brand constants require it)
- Length: 30-50 characters optimal for mobile inbox display
- Personalization: Use `{first_name}` in at least 1 of 3 options where flow context allows

### Subject Line Patterns by Flow Stage

| Stage | Pattern | Example |
|-------|---------|---------|
| Welcome E1 | Curiosity + Code | "Your 10% code + something worth knowing" |
| Welcome E2-E4 | Symptom Recognition | "Sticker charts. Social stories. Timed sits." |
| Cart Recovery | Soft Reminder | "You left something in your cart" |
| Transactional | Functional + Warm | "Your order is confirmed" |
| Post-Purchase | Empathy + Education | "What to expect this week" |
| Winback | Respectful Re-engagement | "It's been a while" |

### Avatar-Specific Subject Line Calibration
- Level 1: Pre-K hooks allowed. Hope-forward language OK. Example: "Before September starts..."
- Level 2: Mechanism-specific, BCBA-respectful. Example: "Why ABA alone can't close this gap"
- Level 3: Zero urgency. Dignity-first. Example: "Late is not never"
- General Fallback: Symptom-first, inclusive. Example: "If your child doesn't feel when they need to go..."

---

## 3. PREHEADER REQUIREMENTS

**Source:** Archived Layer 33 (Section 3)

### Requirements
- Quantity: Exactly 3 options per mail
- Label: "Preheaders"
- Purpose: Extended subject line — what appears after the subject in mobile inbox

### Rules
- Must complement, not repeat, the subject line
- Length: 40-90 characters (what mobile clients display varies)
- Must not be generic ("View this email in your browser")
- Should add context, emotional hook, or curiosity gap
- No forbidden phrases

### Preheader Patterns

| Type | Example |
|------|---------|
| Question Hook | "Why none of those methods COULD work for your kid's nervous system." |
| Stat Anchor | "49% of autistic 4-5 year olds aren't trained. You're not alone." |
| Permission Frame | "60 days to decide. No pressure, no guilt." |
| Scenario Hook | "He sits there for 20 minutes. Nothing happens. Sound familiar?" |

---

## 4. MAIL BODY STRUCTURE AND SECTIONS

**Source:** Archived Layer 33 (Section 4), overnight-plan.md (Layer 33)

### Mandatory Section Hierarchy (NOT freeform)

1. **Opening Hook** — Symptom recognition or scenario (never product-first)
2. **Validation / Failure Acknowledgment** — Name specific failed methods
3. **Mechanism / Information** — Body-Signal Learning Layer™ explanation
4. **Social Proof / Testimonial** — 2-4 RS quotes (when flow stage requires it)
5. **Offer / CTA** — Bundle recommendation with guarantee mention
6. **Permission Frame** — "If today isn't right, that's a real answer"

### Opening Hook Rules
- ALWAYS open with a symptom or scenario, never with the product
- Use 3-5 specific scenarios per mail (cross-level recognition anchors)
- Scenarios must be sourced from RS PDFs or DOC1 verbatim language bank
- Must make the reader think: "They know my life"

**Good Opening:**
> "Your kid sits on the toilet, you wait, nothing happens. Then you put the pull-up back on, and 30 seconds later there's pee in it."

**Bad Opening:**
> "BrightKidCo's Body-Signal Learning Layer™ is designed to help your child..."

### Validation Section Rules
- MUST appear before any mechanism explanation
- Name specific failed methods: sticker charts, Oh Crap, timed sits, ABA, social stories, naked method
- Explain WHY each failed (sensory gap argument)
- Reframe: "You haven't failed. You solved the wrong problem."
- Never imply the parent did something wrong

### Mechanism Section Rules
- Body-Signal Learning Layer™ (with trademark) must be mentioned by name
- Explain the sensory gap: sustained 30-60 second localized sensation vs. brief diffuse sensation
- Kelly Mahler / SPARK research citations when audience is Level 2+
- Never promise outcomes ("Your child will...")
- Use "may help," "some families see," "worth trying"

### Testimonial / RS Integration Rules
- 2-4 verbatim quotes from RS PDFs per mail (when flow stage requires)
- Cite informally: "one mom in our research described..."
- Never fabricate quotes (Anti-Fabrication rule — non-negotiable)
- Light anonymization OK (change first names, ages within range)
- Testimonial selection must match avatar level (age, complexity, journey length)

### Offer Section Rules
- Default recommendation: 3+3 Bundle ($79.99)
- Mention 60-Day Money Back Guarantee (never 30)
- Use exact pricing format: `$79.99`, `$34.99`, `$119.99`
- Bundle notation: `3 + 3 FREE` with spaces around +
- "FREE" always in caps when used as offer modifier
- CTA: Soft, permission-based. Never "BUY NOW!"
- CTA must be min 48px height for mobile tap targets

### Permission Frame Rules
- Every mail must include a permission-not-to-buy moment
- Reduces psychological resistance
- Example: "If today isn't the day, that's okay. The product will be here next month. So will I."
- Especially critical for Cart Recovery, Checkout Abandonment, and Winback flows

### Body Length Guidelines

| Flow Stage | Target Word Count | Rationale |
|------------|-------------------|-----------|
| Welcome E1 (Discount) | 150-250 words | Code delivery — keep short |
| Welcome E2-E4 (Education) | 300-500 words | Mechanism explanation needs space |
| Cart Recovery E1 | 200-350 words | Quick reminder |
| Cart Recovery E2-E3 | 300-450 words | Story + mechanism |
| Transactional | 100-200 words | Functional, not chatty |
| Post-Purchase Early | 200-350 words | Education + reassurance |
| Post-Purchase Mid | 300-450 words | Troubleshooting + support |
| Winback | 300-450 words | Re-engagement needs depth |

### {first_name} Usage
- Use in greeting and 1-2 key emotional moments
- Do NOT over-use (max 3x per mail)
- Example greeting: "Hey {first_name}," (not "Dear {first_name}")

---

## 5. LENA SIGN-OFF STANDARDS

**Source:** Archived Layer 33 (Section 5)

### Requirements
- Every mail ends with Lena sign-off. No exceptions.
- Length: Maximum 2-3 sentences body + max 2 lines P.S.
- Profile subtitle: "Customer Support · Mom of two autistic sons"
- NEVER use founder framing in regular mails

### Forbidden in Sign-Off
- "I'm the founder of BrightKidCo"
- "I'm not the founder, I'm..."
- "I started this company because..."
- 4+ paragraphs of sign-off text
- Story drama about sons

### Allowed in Sign-Off
- "Lena S."
- "Mom of two autistic sons"
- "If you reply, you get me"
- "I have two autistic sons. One is 6, still working on it. The other took us until he was almost 8."

### Three Standard Templates

**SHORT VARIANT** (Welcome E1, transactional):
```
Thanks for being here.
If you have a question, hit reply. You'll get me — not a template, not a bot. I read everything.
Lena ——
```

**MEDIUM VARIANT** (with sons reference):
```
I have two autistic sons. One's 6, still in the middle of it. The other took us until he was almost 8.
If your kid is anywhere on this curve — that's normal here.
Lena ——
P.S. Reply if anything in this resonates with what you've been seeing at home. I read every one.
```

**LONG VARIANT** (Cart Recovery, Last Day):
```
Whatever you choose — thanks for reading this far.
If this isn't the day, that's okay. The product will be here next month. So will I.
I have two autistic sons. I know what it's like when 'later' turns into another year. But I also know what it's like to push too early. Trust your read.
Lena ——
```

### Sign-Off Selection by Flow Stage

| Flow Stage | Variant | Reasoning |
|------------|---------|-----------|
| Welcome E1 | Short | First touch — keep light |
| Welcome E2-E4 | Medium | Build trust through sons reference |
| Cart Recovery E1-E2 | Medium | Reminder tone |
| Cart Recovery E3 / Last Day | Long | Maximum empathy, permission frame |
| Transactional (Order Confirm, Shipping) | Short | Functional context |
| Post-Purchase Early | Medium | Warm welcome to family |
| Post-Purchase Mid | Medium-Long | Coach + support energy |
| Winback | Long | Respectful, no guilt |

### P.S. Line Rules
- Max 2 lines
- Should add value, not repeat body content
- Good P.S. uses: reply encouragement, soft re-mention of guarantee, or one-line RS quote
- Bad P.S.: repeating the CTA, generic "Don't forget!"

---

## 6. MOBILE-FIRST DESIGN SPECIFICATIONS

**Source:** Archived Layer 33 (Section 6), email-design-standards-and-template-build skill, email-html-generator skill, copywriting-body-copy-frameworks skill

### Mobile Design Rules

| Element | Specification |
|---------|---------------|
| Layout | Single column only — no multi-column in email |
| Max Width | 600px |
| Body Font | Questrial, weight 400 (never bold for body) |
| Body Font Size | 16px mobile / 17px desktop |
| Headline Font Size | 24-32px desktop / 20-24px mobile |
| Caption Font Size | 13-14px |
| Line Height | 1.5-1.6 |
| CTA Button Height | Min 48px (tap-friendly) |
| CTA Border Radius | 50px (pill shape) |
| Side Padding | 20-40px |
| Section Spacing | 48-64px |
| Card Border Radius | 12-16px |
| Hero Images | Real parents, soft lighting, neutral tones |
| No Cartoon Illustrations | Never — infantilized look kills trust |

### Color Palette

| Color | Hex | Use |
|-------|-----|-----|
| Brand Green | #039902 | CTAs, accents |
| Mint | #DBFFCD | Highlight boxes, soft backgrounds |
| Cream | #FBF7EB / #FAF5E8 | Card backgrounds |
| Yellow | #F5C84B / #F5CB5C | Badges, stars |
| Gray | #9AA8A7 | Subtle text, strikethrough |
| Dark Text | #1A1A1A | Body text, sign-off background |
| Body Gray | #4A4A4A | Sub-captions, italic notes |
| Off-White Background | #FAF9F7 | Overall email background |

### Responsive Breakpoints
```css
@media only screen and (max-width: 600px) {
  .mobile-full { width: 100% !important; }
  .mobile-pad { padding: 20px 16px !important; }
  .mobile-center { text-align: center !important; }
  .mobile-hide { display: none !important; }
}
```

### Image Rules
- Hero Images DO'S: Real parents and real kids in real homes, soft natural lighting, diverse representation, kids 3-10 years, hands/silhouettes/half-faces, product context
- Hero Images DON'TS: Stock images of neurotypical families, bright cartoon colors, children's faces full-on, "Before/After" style, pull-ups staged as "evil"
- Total image weight: under 200KB per email (ideally under 100KB)
- Text-to-image ratio: at least 40-60% text content
- Alt text on every functional image

### Design Standards from Skills (General E-commerce)
- Ease of Click: Button above the fold, large buttons (min 44x44px), centered buttons
- Skimmability: Simple layout, clear sections, minimal copy, bold reading path technique
- Branding Consistency: Correct fonts, branded graphics, congruent styling
- Typography Scale: H1 24-32px mobile / 32-48px desktop, Body 16px min, Footer 11-12px

---

## 7. KLAVIYO IMPLEMENTATION NOTES FORMAT

**Source:** Archived Layer 33 (Section 7), overnight-plan.md (Layer 37)

### Every deliverable must include:
1. **Trigger setup** — What Klaviyo event triggers this mail
2. **Exit conditions** — When should the subscriber exit this flow
3. **Segment filters** — Who receives this mail (avatar tag, purchase status, etc.)
4. **Timing / delay** — Time delay from trigger or previous mail
5. **A/B test configuration** — Subject line split details
6. **Special logic** — Conditional content blocks, dynamic product feeds

### Standard Exit Conditions (EVERY flow)
- Made a purchase (for conversion flows)
- Unsubscribed
- Already in higher-priority flow

### Klaviyo Sender Settings (All Mails)

| Setting | Value |
|---------|-------|
| From Email | support@brightkidco.com |
| From Name | "Lena from BrightKidCo" |
| Reply-To | support@brightkidco.com |
| Sending Subdomain | Send.brightkidco.com |

### Trigger Summary by Flow

| Flow | Klaviyo Trigger | Audience Filter | Timing |
|------|-----------------|-----------------|--------|
| Welcome | Form Submit | avatar_level tag + welcome_completed = false | Immediate E1, then intervals |
| Cart Aband. | Cart Abandoned | No purchase 24h | E1: 1h, E2: 24h, E3: 72h |
| Checkout | Started Checkout | No purchase 1h | E1: 1h, E2: 24h |
| Browse | Viewed Product | No cart 24h | E1: 1h, E2: 24h, E3: 72h |
| Order Confirm | Order Placed | All | Immediate |
| Shipping | Order Fulfilled | All | Immediate |
| Arrived | Carrier Delivered | All | Immediate |
| PP-Direct Upsell | Order Placed | Day 1-3 | E1: Day 1, E2: Day 3 |
| PP-Level Detection | Order Placed | Day 14 + no level | Day 14 |

### Klaviyo Profile Properties
- `avatar_level` (string: "level1" / "level2" / "level3" / "general")
- `child_age` (optional)
- `signup_source` (string: "popup" / "checkout" / "referral")
- `welcome_flow_completed` (boolean)
- `last_purchase_pack_size` (string: "1pair" / "3+3" / "5+5")
- `vip_customer` (boolean)

### Tags
- Pop-up: `avatar_level1`, `avatar_level2`, `avatar_level3`, `avatar_general`
- Behavior: `welcome_completed`, `welcome_completed_no_purchase`, `post_purchase_active`, `at_risk_no_open`, `inactive_60_days`, `inactive_120_days`
- Purchase: `buyer_1pair`, `buyer_3plus3`, `buyer_5plus5`, `repeat_buyer`, `vip_buyer` (3+ orders)

---

## 8. EMAIL FOOTER STANDARD

**Source:** Archived Layer 33 (Section 8)

```
[BrightKidCo Logo]

Built for the brain that learns differently.

[Links — all plain text, no bold]
Shop · Parent Stories · Contact us · FAQ

[Social Icons]
Instagram · TikTok

[Reviews microcopy]
16,511 reviews · 4.9 ★ — 100,000+ parents trust BrightKidCo

[Business Address Placeholder]
BrightKidCo · [Address]

[Klaviyo Tags]
{% unsubscribe %} · Manage preferences
```

### Footer Link URLs

| Link | URL |
|------|-----|
| Shop | https://www.brightkidco.com/collections/all-products |
| Parent Stories | https://www.brightkidco.com/pages/real-parent-stories |
| Contact | https://www.brightkidco.com/pages/contact |
| FAQ | https://www.brightkidco.com/pages/faq |
| Instagram | https://www.instagram.com/brightkidco_official/ |
| TikTok | https://www.tiktok.com/@brightkidco.com |

### Footer Rules
- NO Trustpilot link (no page exists)
- NO Facebook link (not used by brand)
- NO review buttons leading to non-existent pages
- Reviews microcopy only as text, not clickable
- Footer is saved as a reusable block in Klaviyo — build once, use in all mails

---

## 9. BRAND CONSTANTS — FORMAT-SPECIFIC RULES

**Source:** Archived Layer 33 (Section 9), Layer 38 brand constants

### Pricing Format

| Rule | Correct | Wrong |
|------|---------|-------|
| Dollar sign before number | $34.99 | 34.99$, USD 34.99 |
| Period for cents | $79.99 | $79,99 |
| Bundle notation | 3 + 3 FREE | 3+3 FREE, 3&3 FREE |
| FREE caps | FREE Shipping, FREE E-Book | free shipping |

### Product Names (Exact Writing)
- Body-Signal Learning Layer™ (with trademark)
- "The Stress-Free Potty Training Guide" (E-book name in quotes)
- "Magic Potty Targets" (no trademark)
- "Potty Progress Chart" (no trademark)

### Discount Code
- Code (manual entry): `10%OFF-BKCO`
- Auto-apply link: `https://www.brightkidco.com/discount/10%25OFF-BKCO`

### Guarantee Mention
- "60-Day Money Back Guarantee" (with hyphen)
- OR "60 days to decide" (more informal)
- NEVER "30 days" — always 60

### Shipping Copy
- "10-day delivery" or "ships in about 10 days" OK
- "Free Shipping included" for 3+3 and 5+5 bundles
- NEVER name a specific carrier

### URL Rules
- All URLs must be used EXACTLY as specified in Brand Constants
- Primary PDP for Phase 1: long sensory-sensitive URL (full URL in DOC1)
- Standard PDP: `https://www.brightkidco.com/products/potty-training-underwear`

---

## 10. FORMAT RULES BY FLOW TYPE

**Source:** Archived Layer 33 (Section 12)

### Welcome Flow (Level-Segmented)

| Element | Specification |
|---------|---------------|
| Subject Lines | 3 options, symptom-first for E2+, code-forward for E1 |
| Preheaders | 3 options, curiosity hooks |
| Body Length | E1: 150-250w, E2-E4: 300-500w, E5-E8: 200-350w |
| Lena Sign-Off | Short (E1), Medium (E2-E4), Medium-Long (E5-E8) |
| RS Quotes | 2-4 per mail (E2-E8), not required for E1 |
| CTA | Soft, permission-based |
| Klaviyo Notes | Form Submit trigger, avatar_level tag filter |

### Cart / Checkout Abandonment (Cross-Level)

| Element | Specification |
|---------|---------------|
| Subject Lines | 3 options, soft reminder tone |
| Preheaders | 3 options, question hooks |
| Body Length | E1: 200-350w, E2-E3: 300-450w |
| Lena Sign-Off | Medium (E1-E2), Long (E3/Last Day) |
| RS Quotes | 2-3 per mail |
| CTA | Permission-not-to-buy prominent |
| Klaviyo Notes | Cart Abandoned / Started Checkout trigger, exit on purchase |

### Transactional (Order Confirm, Shipping, Arrived)

| Element | Specification |
|---------|---------------|
| Subject Lines | 3 options, functional + warm |
| Preheaders | 3 options, information-forward |
| Body Length | 100-200w |
| Lena Sign-Off | Short |
| RS Quotes | Not required |
| CTA | Soft cross-sell spot |
| Klaviyo Notes | Order Placed / Fulfilled / Delivered trigger |

### Post-Purchase (Early + Mid)

| Element | Specification |
|---------|---------------|
| Subject Lines | 3 options, empathy + education |
| Preheaders | 3 options, reassurance hooks |
| Body Length | Early: 200-350w, Mid: 300-450w |
| Lena Sign-Off | Medium (Early), Medium-Long (Mid) |
| RS Quotes | 2-3 for education mails |
| CTA | Support-oriented, not sales |
| Klaviyo Notes | Order Placed trigger + day delay |

### Winback (Post-Buyer Inactive)

| Element | Specification |
|---------|---------------|
| Subject Lines | 3 options, respectful re-engagement |
| Preheaders | 3 options, no guilt |
| Body Length | 300-450w |
| Lena Sign-Off | Long |
| RS Quotes | 2-4, late-trainer stories for Level 3 |
| CTA | Very soft, "whichever path you take" |
| Klaviyo Notes | 90 days inactive trigger, 4 level variants |

---

## 11. ANTI-FABRICATION FORMAT RULE

**Source:** Archived Layer 33 (Section 13), overnight-plan.md (Layer 30)

Embedded in the format because it affects the testimonial section of every deliverable:

- You may ONLY use verbatim quotes that exist in the RS PDFs provided.
- You may NOT: invent customer quotes, fabricate testimonials, imagine "what a mom might say," generate plausible-sounding but fake reviews, adapt quotes so heavily they become fictional.
- You MAY: lightly anonymize (change first names, change ages within range), combine themes from multiple real quotes (note internally), paraphrase for length keeping core meaning and voice.
- If no real quote matches: FLAG IT instead of fabricating.
- In deliverable: Mark RS-sourced quotes with source attribution in Klaviyo Implementation Notes.

---

## 12. HTML TEMPLATE STRUCTURE FOR KLAVIYO

**Source:** Archived Layer 33 (Section 11), email-html-generator skill

### Base HTML Skeleton
```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Email</title>
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
    body { margin: 0; padding: 0; min-width: 100%; background-color: #FAF9F7; }
    table { border-spacing: 0; font-family: 'Questrial', Arial, Helvetica, sans-serif; color: #1A1A1A; }
    td { padding: 0; }
    img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
    h1, h2, h3, p { margin: 0; padding: 0; }
    @media only screen and (max-width: 600px) {
      .mobile-full { width: 100% !important; }
      .mobile-pad { padding: 20px 16px !important; }
      .mobile-center { text-align: center !important; }
      .mobile-hide { display: none !important; }
    }
  </style>
</head>
```

### Content Formatting
- Headlines: `<h1 style="font-size:24px; font-weight:400; margin:0 0 15px; color:#1A1A1A;">`
- Body paragraphs: `<p style="margin:0 0 15px; font-size:16px; line-height:1.6;">`
- CTA Button: Pill shape (border-radius: 50px), min-height 48px, Brand Green background (#039902), white text
- Cards: Background #FBF7EB, border-radius 12-16px, subtle box-shadow

### CTA Button HTML
```html
<tr>
  <td align="center" style="padding:10px 40px 30px;">
    <table role="presentation" cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td align="center" style="background-color:#039902; border-radius:50px; padding:14px 35px;">
          <a href="{{CTA_URL}}" target="_blank"
             style="color:#ffffff; font-size:16px; font-weight:400;
             font-family:'Questrial', Arial, sans-serif; text-decoration:none;
             display:inline-block;">
            {{CTA_TEXT}}
          </a>
        </td>
      </tr>
    </table>
  </td>
</tr>
```

---

## 13. QUICK-REFERENCE CHECKLIST (BEFORE SEND)

**Source:** Archived Layer 33 (Section 10)

### Voice
- [ ] Sounds like Lena, not like Brand?
- [ ] No marketing phrases ("easy", "miracle", "cure")?
- [ ] Failed methods validated before mechanism?

### Avatar
- [ ] Tonality calibration correct? (L1: 70%, L2: 40%, L3: 20%, GF: 50/50 hope)
- [ ] Symptom cluster matches the level?
- [ ] Forbidden phrases checked?

### Structure
- [ ] Open with symptom recognition?
- [ ] 3-5 specific scenarios?
- [ ] 5 Big Levers or level-specific applied?
- [ ] Permission-Not-To-Buy included?

### Output Format
- [ ] 3 Subject Lines + 3 Preheaders?
- [ ] Klaviyo Implementation Notes?
- [ ] Lena Sign-Off (max 2-3 sentences)?
- [ ] Mobile-First Notes?
- [ ] Footer standard applied?

### Brand Constants
- [ ] Pricing correct?
- [ ] 60-Day (not 30)?
- [ ] Reviews count correct?
- [ ] NO Trustpilot links?
- [ ] Footer links correct?
- [ ] URLs exact?

### RS Integration
- [ ] 2-4 verbatim quotes from RS used?
- [ ] Quotes cited informally?
- [ ] NO fabricated quotes or testimonials?

---

## 14. BODY COPY FRAMEWORKS (FROM SKILLS)

**Source:** copywriting-body-copy-frameworks skill

### Available Frameworks
- **PAS (Problem-Agitate-Solve):** Most reliable for e-commerce. Mirror buying decisions: problem → pain → solution.
- **AIDA (Attention-Interest-Desire-Action):** Classic funnel. Strong opening → relevance → desire → CTA.
- **BAB (Before-After-Bridge):** Transformation narrative. Problem state → ideal state → product as bridge.
- **Storytelling Arc:** Hook → Conflict → Resolution → CTA. Most emotionally engaging.

### The "So What?" Test
Every sentence must earn its place. After writing each sentence, ask: "So what?" If it doesn't move the reader closer to action, cut it.

### CTA Formula
Action Verb + Benefit + (Optional: Urgency/Context)

### CTA Best Practices
- One primary CTA per email
- Use action-oriented language ("Get," "Shop," "Claim," "Start," "Try")
- Be specific ("Get 20% Off Your First Order" beats "Get a Discount")
- Keep CTA copy under 30 characters for buttons
- Minimum 44x44px tap target
- Centered buttons perform better on mobile

---

## 15. DESIGN STANDARDS FROM SKILLS

**Source:** email-design-standards-and-template-build skill

### Layout Anatomy
1. Preheader / Preview Text (under 100 chars, always set in ESP)
2. Hero Section (75% of design effort — headline, visual, value prop, CTA above fold)
3. Bridge Section (supports hero, transitions to product)
4. Product Section (individual CTAs + general CTA at bottom)
5. CTA Section (reinforced near bottom)
6. Footer (unsubscribe, address, social links)

### Visual Hierarchy
- Reverse Triangle: wide attention at top, narrowing to CTA
- F-Pattern scanning: key info along left-to-right, down path
- Bold Reading Path: bold key phrases, read only bold text to verify story flows

### Design QA Checklist
- Hero section has headline, visual, value prop, CTA above fold
- Single column on mobile
- Body font 16px min, headlines 20px+ mobile
- Buttons full-width on mobile, centered
- Tap targets min 44x44px
- Total email weight under 200KB
- Alt text on every image
- Text-to-image ratio at least 40:60

---

## 16. EXISTING EMAIL PROTOTYPE PATTERNS

**Source:** overnight-plan.md (Layer 32)

Previous work established a 6-email Welcome Flow:
1. Welcome: "You haven't done anything wrong" — discount delivery, validation
2. Mechanism: "The body-signal your child might not feel yet" — interoception intro
3. Failed Methods: "Timers. Rewards. Naked days. Here is why none of it worked"
4. Product Reveal: "This is where we show you the pants" — 3-layer system
5. Social Proof: Testimonials from parents
6. Guarantee: 60-Day Calm Progress Guarantee with permission not to buy

Separate Flow 2 (Discount Welcome) has 4 emails: Code delivery, Mechanism, Story, Guarantee closer.

Design tokens from existing code: primary teal #2BAEB4, green #5DD07A, ink #1F2D2F, soft #4A6568, muted #8A9B9D, cream #FBF7F1, paper #FFFFFF. Font: Questrial for main text, Fraunces for display serif accent.

---

## 17. CROSS-REFERENCES

**Source:** Archived Layer 33 (Section 14)

| Layer | Title | Relevance |
|-------|-------|-----------|
| Layer 6 | Symptom Clusters | Determines which scenarios appear in body |
| Layer 9 | Voice — Lena | Governs tone of entire mail including sign-off |
| Layer 11 | Objections | Determines counter-strategy in body sections |
| Layer 13 | Trust Pyramid | Determines section ordering priority |
| Layer 15 | Offers | Determines pricing format and bundle language |
| Layer 17 | Tonality Calibration | Determines hope/realism balance per avatar |
| Layer 18 | Cross-Level Calibration | Governs inclusive language rules |
| Layer 19 | Migration Strategy | Determines General Fallback body structure |
| Layer 29 | Visual Calibration | Design changes per avatar level |
| Layer 30 | Anti-Fabrication | Testimonial sourcing rules |
| Layer 32 | Existing Patterns | Real mail examples for format validation |
| Layer 38 | Brand Constants | Exact values for pricing, URLs, colors |

---

## SOURCE FILES EXTRACTED

1. `/root/projects/brightkidco/archive-20260523-1139/diagnosis/layer-33-format-requirements.md` — 748 lines, primary format spec
2. `/root/projects/brightkidco/overnight-plan.md` — Layers 29-38 sections (format, visual calibration, brand constants)
3. `/root/projects/brightkidco/archive-20260523-1139/diagnosis/layer-38-brand-constants.md` — Pricing, guarantee, URLs
4. `/root/projects/brightkidco/docs/bightkidco.com/Meeting started 2026_05_20 09_06 CEST - Notes by Gemini.md` — Giuliano's format explanation
5. `email-design-standards-and-template-build` skill — Design system, template anatomy, mobile-first standards
6. `email-html-generator` skill — HTML template structure for Klaviyo
7. `copywriting-body-copy-frameworks` skill — Body copy frameworks, CTA optimization, scannability rules
8. `/root/projects/brightkidco/archive-20260523-1139/diagnosis/layer-29-visual-calibration.md` — Visual calibration per level

---

*End of L33 R3: Email Format Requirements -- Wiki Extraction*
