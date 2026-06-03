# Layer 38 Round 2: Brand Constants — Skill Loading

> Extracted: 2026-05-25
> Source: Skills scan + cross-reference with client files (layer-32, layer-33)

---

## 1. Skills Searched

| # | Skill | Path | Brand Constants Found |
|---|-------|------|----------------------|
| 1 | brand-voice-definition | email-marketing/brand-voice-definition/SKILL.md | Generic framework only — no BrightKidCo-specific constants |
| 2 | email-design-master | email-marketing/deliverability-technical/email-design-master/SKILL.md | Generic email design rules (600px, dark mode palette, Outlook hacks) |
| 3 | email-design-standards-and-template-build | email-marketing/deliverability-technical/email-design-standards-and-template-build/SKILL.md | Generic typography scale, color hierarchy, CTA specs |
| 4 | email-template-library | email-marketing/deliverability-technical/email-template-library/SKILL.md | Generic template dimensions, color rules, typography specs |
| 5 | copywriting-brand-voice-storytelling | email-marketing/strategy-analytics/copywriting-brand-voice-storytelling/SKILL.md | Generic voice matrix framework, vocabulary rules |
| 6 | brandkit | taste-skill/brandkit/SKILL.md | Brand identity image generation — not applicable to email constants |

**Total skills searched: 6** (exceeds minimum of 3)

---

## 2. Brand Constants from Skills

### 2.1 Generic Email Design Rules (email-design-master)

| Constant | Value | Source Skill |
|----------|-------|-------------|
| Max email width | 600px | email-design-master |
| Body font minimum (mobile) | 16px | email-design-master |
| Minimum tap target | 44x44px | email-design-master |
| Gmail clipping threshold | 102KB HTML | email-design-master |
| Max individual image size | 200KB | email-design-master |
| Max total email weight | 500KB | email-design-master |
| Font stack (safe) | Arial, Helvetica, sans-serif | email-design-master |
| Dark mode bg (not pure black) | #1a1a1a | email-design-master |
| Dark mode text (not pure white) | #f5f5f5 | email-design-master |
| CTA button method | Table cell with padding (never `<a>` with padding) | email-design-master |

### 2.2 Generic Typography Scale (email-design-standards)

| Element | Mobile | Desktop | Weight |
|---------|--------|---------|--------|
| H1 / Headline | 24-32px | 32-48px | Bold |
| H2 / Subheadline | 20-24px | 24-32px | Semi-Bold |
| Body Copy | 16px min | 16-18px | Regular |
| CTA Button | 16-18px | 16-18px | Bold |
| Footer / Legal | 11-12px | 11-12px | Regular |

### 2.3 Generic Color Hierarchy (email-design-standards)

| Role | Usage |
|------|-------|
| Primary Color | Headlines, main CTAs, brand elements |
| Secondary Color | Subheadlines, supporting elements, borders |
| Accent Color | CTAs, highlights, urgency indicators |
| Neutral | Body copy, backgrounds, dividers |

**Contrast rule:** CTA buttons must have minimum 4.5:1 contrast ratio against background.

### 2.4 Generic Template Color Rules (email-template-library)

| Element | Default Value |
|---------|---------------|
| Background | White (#FFFFFF) |
| Section background | Light gray (#F8F8F8) |
| Headline | Dark gray (#222222) |
| Body text | #555555 |
| CTA text | #FFFFFF on brand color |
| Urgency banner | Red (#CC3333) |
| Badge/gold | #D4AF37 / #F5A623 |

### 2.5 Brand Voice Framework (brand-voice-definition + copywriting-brand-voice-storytelling)

**Voice Matrix Axes (generic):**
- Formal ↔ Casual
- Serious ↔ Playful
- Technical ↔ Simple
- Authoritative ↔ Friendly
- Salesy ↔ Educational

**No BrightKidCo-specific brand constants were found in any skill.** All skills provide generic frameworks, not client-specific locked values.

---

## 3. Brand Constants from Client Files (Cross-Reference)

### 3.1 Pricing (USD)

| Offer | Price | Badge | Save Tag |
|-------|-------|-------|----------|
| 1 Pair | $34.99 | — | — |
| 3+3 FREE | $79.99 | BESTSELLER | Save 40% TODAY |
| 5+5 FREE | $119.99 | BEST VALUE / MAXIMUM VALUE | Save 60% TODAY |

**Bonuses with 5+5:** FREE E-Book "The Stress-Free Potty Training Guide", FREE Magic Potty Targets, FREE Potty Progress Chart, FREE Shipping

### 3.2 Guarantee
- **60-Day Money Back** (NEVER say 30)

### 3.3 Reviews / Trust Signals
- 16,511 reviews · 4.9 ★ on site
- 100,000+ parents trust BrightKidCo
- NO Trustpilot links (no page exists — BUT discrepancy noted below)
- NO Facebook links (not used by brand)

### 3.4 Discount Code
- Manual entry: **10%OFF-BKCO** (DOC6 says WELCOME10 — CONFLICT, see discrepancies)
- Auto-Apply Link: https://www.brightkidco.com/discount/10%25OFF-BKCO

### 3.5 URLs (LOCKED)

| Page | URL |
|------|-----|
| Homepage | https://www.brightkidco.com |
| All Products | https://www.brightkidco.com/collections/all-products |
| Autistic Parent PDP | https://www.brightkidco.com/products/potty-training-underwear-for-sensory-sensitive-toddlers-sp... |
| Standard PDP | https://www.brightkidco.com/products/potty-training-underwear |
| Parent Stories | https://www.brightkidco.com/pages/real-parent-stories |
| FAQ | https://www.brightkidco.com/pages/faq |
| Contact | https://www.brightkidco.com/pages/contact |
| Instagram | https://www.instagram.com/brightkidco_official/ |
| TikTok | https://www.tiktok.com/@brightkidco.com |

### 3.6 Color Palette (LOCKED)

| Color Name | Hex Code | Role |
|------------|----------|------|
| Brand-Green | `#039902` | Primary — CTAs, accents |
| Mint | `#DBFFCD` | Secondary — highlight boxes |
| Cream Card | `#FBF7EB` | Secondary — card backgrounds |
| Cream Alt | `#FAF5E8` | Secondary — section backgrounds |
| Brand-Yellow | `#F5C84B` / `#F5CB5C` | Accent — badges, stars |
| Soft Gray | `#9AA8A7` | Neutral — subtle text |
| Dark Text | `#1A1A1A` | Primary — body text |
| Body Gray | `#4A4A4A` | Neutral — sub-captions |
| Off-white BG | `#FAF9F7` | Background — email background |

### 3.7 Typography (LOCKED)

| Constant | Value |
|----------|-------|
| Font | Questrial weight 400 only (never bold for body) |
| Email-safe fallback | Arial, Helvetica, sans-serif |
| Headlines | 24-32px Desktop / 20-24px Mobile |
| Body | 16px Mobile / 17px Desktop |
| Line-height | 1.5 minimum |

### 3.8 Format Specs

| Constant | Value |
|----------|-------|
| Max email width | 600px |
| CTA button height | min 48px |
| CTA border radius | 50px (pill) |
| Side padding | 20-40px |
| Section spacing | 48-64px |
| Card border radius | 12-16px |
| Subject line | 30-50 chars optimal |
| Preheader | 40-90 chars |

### 3.9 Shipping
- 10 days standard
- USA / UK / AU / NZ / Canada
- Various US-based carriers (do NOT name specific carrier in copy)

### 3.10 Social
- Instagram: brightkidco_official
- TikTok: @brightkidco.com
- Facebook: NOT USED (do not include in any mail)

### 3.11 Footer Links (exact order)
Shop · Parent Stories · Contact us · FAQ

### 3.12 Sender Identity
- From: "Lena from BrightKidCo" <support@brightkidco.com>
- Reply-To: support@brightkidco.com
- Sending Subdomain: send.brightkidco.com

### 3.13 Key Research Stats
- 49% of autistic 4-5 year olds not toilet-trained (SPARK study)
- Kelly Mahler interoception research (gold standard reference)

---

## 4. Discrepancies Between Skills and Client Files

### 4.1 Skills vs Client Files

| Dimension | Skill Recommendation | Client File Value | Status |
|-----------|---------------------|-------------------|--------|
| Font | System fonts (Arial, Helvetica) — NO custom fonts | Questrial weight 400 with Arial/Helvetica fallback | **CLIENT WINS** — Questrial is the locked brand font; fallback stack aligns with skill |
| Font weight for body | Regular (400) | Questrial 400 only (never bold) | **ALIGNED** |
| Max email width | 600px | 600px | **ALIGNED** |
| Body font size (mobile) | 16px minimum | 16px Mobile | **ALIGNED** |
| CTA method | Table cell with padding | Table cell with padding (per design system) | **ALIGNED** |
| Dark mode bg | #1a1a1a | Not specified in client files | **SKILL DEFAULT** — use #1a1a1a |
| Dark mode text | #f5f5f5 | Not specified in client files | **SKILL DEFAULT** — use #f5f5f5 |
| CTA contrast ratio | 4.5:1 minimum | Not specified explicitly | **SKILL DEFAULT** — enforce 4.5:1 |

### 4.2 Internal Client File Discrepancies

| Issue | Source A | Source B | Resolution Needed |
|-------|----------|----------|-------------------|
| Discount code | DOC6: 10%OFF-BKCO | Task spec: WELCOME10 | **CONFLICT** — needs client confirmation |
| Guarantee on website | Brand constants: 60-day | Website currently shows 30-day | **DISCREPANCY** — website is wrong per brand rules |
| Trustpilot | Docs say NO Trustpilot links | Trustpilot page EXISTS (2,666 reviews) | **DISCREPANCY** — page exists but docs forbid linking |
| Prototype font | JSX prototypes use Fraunces + Inter | DOC specifies Questrial weight 400 | **DISCREPANCY** — prototypes deviate from locked font |
| Prototype colors | JSX: teal #2BAEB4, green #5DD07A, lilac #EEE8F6 | Brand: #039902, #DBFFCD, #FBF7EB | **DISCREPANCY** — prototypes use different palette |
| Prototype sign-off | "The BrightKidCo team" / "Lena" as Founder | Lena = "Customer Support · Mom of two autistic sons" | **DISCREPANCY** — prototypes break voice rules |

---

## 5. Consolidated Brand Constant Reference

### LOCKED VALUES (Do Not Change)

| Category | Constant | Value |
|----------|----------|-------|
| **Pricing** | 1 Pair | $34.99 |
| | 3+3 Bundle | $79.99 (BESTSELLER, Save 40%) |
| | 5+5 Bundle | $119.99 (BEST VALUE, Save 60%) |
| **Guarantee** | Duration | 60-Day Money Back (NEVER 30) |
| **Reviews** | Count | 16,511 reviews · 4.9 ★ |
| | Trust | 100,000+ parents |
| **Font** | Primary | Questrial weight 400 (never bold for body) |
| | Fallback | Arial, Helvetica, sans-serif |
| **Colors** | Primary CTA | #039902 (Brand-Green) |
| | Highlight | #DBFFCD (Mint) |
| | Card BG | #FBF7EB (Cream Card) |
| | Section BG | #FAF5E8 (Cream Alt) |
| | Badge/Stars | #F5C84B / #F5CB5C (Yellow) |
| | Subtle Text | #9AA8A7 (Soft Gray) |
| | Body Text | #1A1A1A (Dark Text) |
| | Sub-captions | #4A4A4A (Body Gray) |
| | Email BG | #FAF9F7 (Off-white) |
| **Layout** | Max width | 600px |
| | CTA height | min 48px |
| | CTA radius | 50px (pill) |
| | Side padding | 20-40px |
| | Section spacing | 48-64px |
| | Card radius | 12-16px |
| **Subject** | Length | 30-50 chars |
| **Preheader** | Length | 40-90 chars |
| **Sender** | From | "Lena from BrightKidCo" <support@brightkidco.com> |
| | Reply-To | support@brightkidco.com |
| | Subdomain | send.brightkidco.com |
| **Social** | Instagram | @brightkidco_official |
| | TikTok | @brightkidco.com |
| | Facebook | NOT USED |
| **Footer** | Order | Shop · Parent Stories · Contact us · FAQ |
| **Discount** | Code | 10%OFF-BKCO (pending WELCOME10 conflict) |
| **Shipping** | Duration | 10 days standard |
| | Regions | USA / UK / AU / NZ / Canada |
| **Research** | SPARK | 49% of autistic 4-5 year olds not toilet-trained |
| | Mahler | Kelly Mahler interoception research |

### SKILL DEFAULTS (Apply Where Client Files Are Silent)

| Category | Constant | Value | Source Skill |
|----------|----------|-------|-------------|
| Dark mode BG | #1a1a1a | email-design-master |
| Dark mode text | #f5f5f5 | email-design-master |
| CTA contrast | 4.5:1 minimum | email-design-standards |
| Tap target | 44x44px minimum | email-design-master |
| Image max | 200KB individual, 500KB total | email-design-master |
| Gmail clip | 102KB HTML | email-design-master |

---

## 6. Summary

**Skills searched:** 6 (brand-voice-definition, email-design-master, email-design-standards-and-template-build, email-template-library, copywriting-brand-voice-storytelling, brandkit)

**Key finding:** No skill contains BrightKidCo-specific brand constants. All skills provide generic email design frameworks. The brand constants come entirely from client files (DOC6, Claude-Project-Instructions.txt, layer-29 visual calibration, layer-33 client files).

**Cross-reference result:** Generic skill recommendations align with client file values on most dimensions (600px width, 16px body font, table-cell CTA method). The main divergence is font choice — skills recommend system fonts only, but the client locks Questrial as the primary brand font with system font fallback.

**Discrepancies requiring resolution:** 6 (discount code, guarantee website mismatch, Trustpilot existence, prototype font, prototype colors, prototype sign-off).
