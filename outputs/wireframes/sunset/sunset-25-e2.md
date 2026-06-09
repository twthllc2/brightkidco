# Wireframe: Sunset — E2 | Cross-Level

## 1. Metadata

| Field | Value |
|-------|-------|
| **Flow** | Sunset (Flow 25) |
| **Position** | E2 — Final Goodbye (4-7 days after E1, 120+ days unengaged) |
| **Level** | Cross-Level (R1-R6, single copy for all 4 levels) |
| **Copy File** | /root/brightkidco/outputs/copy/sunset/sunset-25-e2.md |
| **Strategy Map Entry** | flows.sunset.emails.e2 |
| **Flow Signature** | Graceful close, ink primary, paper accents, farewell-first hero, minimal elegant, low density, NO CTA |
| **Level Calibration** | Cross-Level — 50% Hope / 50% Realism, zero urgency, NO CTA per S2 spec, card-based layout, Questrial body |
| **Component Categories Used** | HERO, TEXT/LETTER, MECHANISM, SIGNOFF, DECORATIVE |
| **Total Estimated Height** | ~3,400px (desktop) / ~3,800px (mobile) |

---

## 2. Strategy Box

**Big Idea:** "The door stays open." This is not a goodbye that closes a chapter. It's a goodbye that leaves the door unlocked. The core message: you are not being abandoned. BrightKidCo is a resource, not a subscription. Whether you buy today, next year, or never, the information, the mechanism, and Lena's support remain available. The emotional arc moves through three beats: (1) Acknowledgment — we see you haven't engaged, that's fine; (2) Validation — whatever reason you stepped back is valid; (3) Open Door — the product, the science, and Lena are here when you need them.

**Emotional Arc Position:** Second and final sunset email. Triggered 4-7 days after E1 when the subscriber did not re-engage. This is the ABSOLUTE FINAL TOUCHPOINT in the entire BrightKidCo email program. No CTA per S2 spec: "E2: Goodbye → Lena (LONG) → NO CTA." The sign-off link in the P.S. (brightkidco.com) serves as a soft, text-based homeward anchor.

**Component Selection Rationale:**
- HERO (Open Door Easter Egg): Small, subtle door illustration directly beneath the logo — a door slightly ajar with a sliver of warm light. Not the full-width hero of E1. This is a whisper, not an invitation.
- LETTER-01 (Card Stack): Four sections alternating cream/white/mint backgrounds create visual rhythm without images. Card system with border-radius 12px, subtle shadows. Each card is a self-contained emotional beat.
- MECHANISM (Validation + Gentle Science): The mint (#DBFFCD) card contains Lena's personal story and the interoception explanation. Education is present but not foregrounded — one section only.
- SIGNOFF (LONG variant): "With care, Lena" — the deepest sign-off variant, reserved for the absolute final touchpoint. Includes P.S. with 60-day guarantee as standing offer, not push.
- DESDEEP (Warm Linen Dividers): Minimal decorative elements. No badges, no seals, no social proof. The absence IS the design.

**Differentiation Note from E1:** E2 has NO CTA button (per S2 spec). E1 has a CTA. E2 uses Questrial (sans-serif) while E1 uses Georgia (serif). E2 uses alternating card backgrounds (cream/white/mint) while E1 is flat white. E2 has 4 content sections vs E1's 2. E2's layout is card-based and rhythmic while E1's is vertical and linear. E2 uses the LONG sign-off; E1 uses MEDIUM. The two layouts share zero identical structural elements.

---

## 3. Creative Box

**Color Palette:**
- Primary: #1F2D2F (B.ink) — Headings, body text, card borders
- Secondary: #2BAEB4 (B.teal) — Logo, Lena's name in sign-off, footer links
- Accent: #5DD07A (B.green) — Gentle education accent, mechanism card border
- Background: #FBF7F1 (B.cream) — Hook card, sign-off card, warm sections
- Text: #1F2D2F (B.ink) — Primary body text, headings
- Page Background: #FFFFFF (B.paper) — Email canvas, white card sections
- Secondary Text: #4A6568 (B.soft) — Body copy, permission text
- Tertiary Text: #8A9B9D (B.muted) — Captions, footer, subtitle, copyright
- Cream Card: #FBF7F1 — Hook section, sign-off section backgrounds
- Mint Card: #DBFFCD — Mechanism/validation section (gentle education)
- Divider: #E8E2DA — Section dividers, card borders
- Card Shadow: rgba(0,0,0,0.04) — Subtle depth on cream and mint cards

**Typography:**
- Primary: Questrial, Arial, Helvetica, sans-serif — All body copy, sign-off, headings
- Section headline: Questrial, 28px, weight 400, color B.ink
- Section body: Questrial, 17px, weight 400, line-height 1.6-1.7, color B.soft
- Sign-off closing: Questrial, 16px, weight 400, font-style italic, color B.ink
- Lena's name: Questrial, 18px, weight 400, color B.teal
- Subtitle: Questrial, 14px, weight 400, color B.muted
- P.S. body: Questrial, 15px, weight 400, line-height 1.5, color B.soft
- Footer links: Questrial, 13px, color B.teal
- Final italic line: Questrial, 17px, weight 400, font-style italic, color B.ink

**Border Radius:** Cards: 12px, Images: 0 (line-art illustration)
**Shadow:** Card shadow: 0 2px 8px rgba(0,0,0,0.04) — applied to cream and mint cards only
**Spacing:** Section gap: 32px, H-padding: 32px, Card padding: 48px 32px (first/last) / 32px 32px (middle), Email max-width: 600px

---

## 4. Layout ASCII

```
┌────────────────────── 420px ──────────────────────┐
│ [white #FFFFFF]                                    │
│                                                    │
│  ┌─ Header ───────────────────────────────────┐    │
│  │ Header (bg: #FFFFFF)                       │    │ 72px
│  │ Logo: brightkidco-logo-v2.png (h:34)       │    │
│  │ padding: 24px 20px 0, text-align: center   │    │
│  │ 1px #E8E2DA separator below                 │    │
│  └─────────────────────────────────────────────┘   │
│                                                    │
│  ┌─ HERO: Open Door Easter Egg ──────────────┐    │
│  │ [bg: #FFFFFF]                              │    │ ~160px
│  │ text-align: center, padding: 20px 24px     │    │
│  │                                              │    │
│  │  ┌─ Door Illustration ────────────────┐     │    │
│  │  │ 160px wide × 100px tall            │     │    │
│  │  │ Simple 1-color line art             │     │    │
│  │  │ B.teal (#2BAEB4) on B.cream         │     │    │
│  │  │ Door frame: 1.5px stroke            │     │    │
│  │  │ Door angled ~15° inward             │     │    │
│  │  │ Light sliver: soft gradient          │     │    │
│  │  │ #FBF7F1 → transparent               │     │    │
│  │  │ Below door: "Still here."            │     │    │
│  │  │ [Questrial 11px, B.muted, upper]    │     │    │
│  │  │ Alt: "A door slightly open with     │     │    │
│  │  │ warm light, still here when you're  │     │    │
│  │  │ ready."                             │     │    │
│  │  └──────────────────────────────────────┘    │   │
│  └─────────────────────────────────────────────┘   │
│                                                    │
│  ▲ 32px gap                                        │
│                                                    │
│  ┌─ SECTION 1: Hook (Cream Card) ────────────┐    │
│  │ [bg: #FBF7F1 cream]                       │    │ ~280px
│  │ padding: 48px 32px                          │    │
│  │ border-radius: 12px                         │    │
│  │ box-shadow: 0 2px 8px rgba(0,0,0,0.04)    │    │
│  │                                              │    │
│  │  "This our last email."                      │    │
│  │  [Questrial 28px, weight 400, B.ink]        │    │
│  │                                              │    │
│  │  "We haven't heard from you in a while,     │    │
│  │   and we're respecting your inbox. If today  │    │
│  │   isn't the right time, that's a real        │    │
│  │   answer. The product will be here when      │    │
│  │   you're ready. So will I."                  │    │
│  │  [Questrial 17px, B.soft, line-height 1.6]  │    │
│  └─────────────────────────────────────────────┘   │
│                                                    │
│  ▲ 32px gap                                        │
│                                                    │
│  ┌─ SECTION 2: Recognition Anchors (White) ──┐    │
│  │ [bg: #FFFFFF]                              │    │ ~360px
│  │ padding: 32px 32px                          │    │
│  │                                              │    │
│  │  "Whether your child talks about the potty   │    │
│  │   but doesn't use it, or you've been at this │    │
│  │   for years and stopped counting the         │    │
│  │   attempts, if the signal isn't arriving,    │    │
│  │   you're not alone in that."                 │    │
│  │  [Questrial 17px, B.ink, line-height 1.7]   │    │
│  │                                              │    │
│  │  "Some kids are 3 and just starting to show  │    │
│  │   signs. Others are 10+ and you've tried     │    │
│  │   everything. Some parents have just begun   │    │
│  │   looking. Others have stepped back from     │    │
│  │   trying entirely. Every version belongs     │    │
│  │   here."                                     │    │
│  │  [Questrial 17px, B.soft, line-height 1.7]  │    │
│  └─────────────────────────────────────────────┘   │
│                                                    │
│  ▲ 32px gap                                        │
│                                                    │
│  ┌─ SECTION 3: Validation + Mechanism (Mint) ┐    │
│  │ [bg: #DBFFCD mint]                        │    │ ~480px
│  │ padding: 48px 32px                          │    │
│  │ border-radius: 12px                         │    │
│  │ box-shadow: 0 2px 8px rgba(0,0,0,0.04)    │    │
│  │                                              │    │
│  │  "If you've stepped back from trying, I      │    │
│  │   get it. Both my sons went through this.    │    │
│  │   My older son was 8 before we figured out   │    │
│  │   what was really going on. And I know what  │    │
│  │   it feels like when every method you try    │    │
│  │   ends the same way."                        │    │
│  │  [Questrial 17px, B.ink, line-height 1.7]   │    │
│  │                                              │    │
│  │  "What we've learned, from the research and  │    │
│  │   from thousands of families, is that it's   │    │
│  │   not about effort. It's not about           │    │
│  │   motivation. For kids whose nervous systems │    │
│  │   process body signals differently, the      │    │
│  │   standard methods were solving the wrong    │    │
│  │   problem."                                  │    │
│  │  [Questrial 17px, B.soft, line-height 1.7]  │    │
│  │                                              │    │
│  │  "The signal that says \"I need to go\",     │    │
│  │   interoception, arrives differently for     │    │
│  │   some kids. It arrives too late, or it      │    │
│  │   doesn't arrive at all. And no method that  │    │
│  │   assumes it's already there can bridge      │    │
│  │   that gap."                                 │    │
│  │  [Questrial 17px, B.soft, line-height 1.7]  │    │
│  └─────────────────────────────────────────────┘   │
│                                                    │
│  ▲ 32px gap                                        │
│                                                    │
│  ┌─ SECTION 4: Permission / Gentle Close (White)┐  │
│  │ [bg: #FFFFFF]                              │    │ ~280px
│  │ padding: 32px 32px                          │    │
│  │                                              │    │
│  │  "If your child's situation has changed, if  │    │
│  │   you're ready to try something different    │    │
│  │   down the road, you're always welcome back. │    │
│  │   If today isn't the day, that's okay. The   │    │
│  │   science will still be here. The            │    │
│  │   Body-Signal Learning Layer will still be   │    │
│  │   here. So will I."                          │    │
│  │  [Questrial 17px, B.soft, line-height 1.6]  │    │
│  │                                              │    │
│  │  "Whichever path you take, thanks for        │    │
│  │   letting us into your inbox. You've been    │    │
│  │   doing the work. That's what matters."      │    │
│  │  [Questrial 17px, B.ink, italic,             │    │
│  │   line-height 1.6]                           │    │
│  └─────────────────────────────────────────────┘   │
│                                                    │
│  ▲ 40px gap                                        │
│                                                    │
│  ┌─ SIGNOFF: LONG variant (Cream Card) ───────┐   │
│  │ [bg: #FBF7F1 cream]                        │   │ ~400px
│  │ padding: 32px 32px                           │   │
│  │ border-radius: 12px                          │   │
│  │ box-shadow: 0 2px 8px rgba(0,0,0,0.04)     │   │
│  │                                               │   │
│  │  "With care,"                                 │   │
│  │  [Questrial 16px, B.ink, italic]              │   │
│  │                                               │   │
│  │  "Lena,"                                      │   │
│  │  [Questrial 18px, B.teal]                     │   │
│  │                                               │   │
│  │  "Customer Support · Mom of two autistic      │   │
│  │   sons"                                       │   │
│  │  [Questrial 14px, B.muted]                    │   │
│  │                                               │   │
│  │  ┌─ Thin Rule before P.S. ─────────────┐     │   │
│  │  │ 1px #E8E2DA                          │     │   │
│  │  └──────────────────────────────────────┘     │   │
│  │                                               │   │
│  │  "P.S. My older son was 8 before we figured   │   │
│  │   this out. If you've stepped back from       │   │
│  │   trying, I get it. When you're ready, the    │   │
│  │   science will still be here. 60 days, your   │   │
│  │   judgment. https://brightkidco.com"          │   │
│  │  [Questrial 15px, B.soft, line-height 1.5]   │   │
│  └──────────────────────────────────────────────┘   │
│                                                    │
│  ▲ 48px gap                                        │
│                                                    │
│  ┌─ Divider ──────────────────────────────────┐    │
│  │ 1px solid #E8E2DA                            │    │ 1px
│  └─────────────────────────────────────────────┘   │
│                                                    │
│  ┌─ Footer ──────────────────────────────────┐    │
│  │ [bg: #FFFFFF]                              │    │ ~260px
│  │ padding: 32px 32px 48px                     │    │
│  │ text-align: center                           │    │
│  │                                              │    │
│  │  [Shop] · [Parent Stories] · [Contact Us]   │    │
│  │  · [FAQ]                                     │    │
│  │  [Questrial 13px, B.teal, centered]         │    │
│  │  Separator: "·" between links                │    │
│  │                                              │    │
│  │  "16,511 reviews · 4.9 ★ · 100,000+        │    │
│  │   parents"                                   │    │
│  │  [Questrial 13px, B.muted]                   │    │
│  │                                              │    │
│  │  "support@brightkidco.com | Unsubscribe |    │    │
│  │   Preferences"                               │    │
│  │  [Questrial 12px, B.muted]                   │    │
│  │                                              │    │
│  │  "BrightKidCo · 123 Main Street, Suite 200, │    │
│  │   San Francisco, CA 94102"                   │    │
│  │  [Questrial 12px, B.muted]                   │    │
│  │                                              │    │
│  │  "© 2026 BrightKidCo. All rights reserved." │    │
│  │  [Questrial 11px, B.muted]                   │    │
│  └─────────────────────────────────────────────┘   │
│                                                    │
└────────────────────────────────────────────────────┘
```

---

## 5. Technique Specs

### Section: Email Shell
- Component: EmailShell (from primitives.jsx)
- Width: 420px (MW constant)
- Height: auto
- Background: #FFFFFF (B.paper)
- Font-family: Questrial, Arial, Helvetica, sans-serif
- Color: B.ink (#1F2D2F)

### Section: Header
- Component: Header (from primitives.jsx)
- Width: 100%
- Height: 72px
- Background: #FFFFFF (B.paper)
- Padding: 24px 20px 0
- Text-align: center
- Logo: brightkidco-logo-v2.png, height: 34px
- Border-bottom: 1px solid #E8E2DA

### Section: HERO — Open Door Easter Egg
- Width: 100%
- Background: #FFFFFF (B.paper)
- Padding: 20px 24px
- Text-align: center

#### Door Illustration
- Canvas: 160px wide × 100px tall
- Line art: B.teal (#2BAEB4) on B.cream (#FBF7F1) background
- Door frame: 1.5px stroke
- Door angle: ~15° inward (Easter egg — "open enough to see through, not open enough to walk through")
- Light sliver: soft gradient from #FBF7F1 to transparent, 3px wide at widest
- Below door: "Still here." in Questrial 11px, B.muted, uppercase, letter-spacing 1px
- Alt text: "A door slightly open with warm light, still here when you're ready."
- data-door="15deg-open" (aria-details for screen readers)

### Section: SPACER 32px
- Component: Spacer
- Height: 32px
- Background: transparent

### Section: SECTION 1 — Hook (Cream Card)
- Width: 100%
- Background: #FBF7F1 (B.cream)
- Padding: 48px 32px
- Border-radius: 12px
- Box-shadow: 0 2px 8px rgba(0,0,0,0.04)

#### Headline ("This our last email.")
- Font-family: Questrial
- Font-size: 28px
- Font-weight: 400
- Color: B.ink (#1F2D2F)
- Line-height: 1.2
- Margin-bottom: 16px

#### Body paragraph
- Font-family: Questrial
- Font-size: 17px
- Font-weight: 400
- Color: B.soft (#4A6568)
- Line-height: 1.6

### Section: SECTION 2 — Recognition Anchors (White)
- Width: 100%
- Background: #FFFFFF (B.paper)
- Padding: 32px 32px

#### Body paragraphs
- Font-family: Questrial
- Font-size: 17px
- Font-weight: 400
- Color: B.ink (#1F2D2F) — first paragraph (recognition hook)
- Color: B.soft (#4A6568) — second paragraph (expansion)
- Line-height: 1.7
- Margin-bottom: 16px (between paragraphs)

### Section: SECTION 3 — Validation + Mechanism (Mint Card)
- Width: 100%
- Background: #DBFFCD (mint)
- Padding: 48px 32px
- Border-radius: 12px
- Box-shadow: 0 2px 8px rgba(0,0,0,0.04)

#### Body paragraphs
- Font-family: Questrial
- Font-size: 17px
- Font-weight: 400
- Color: B.ink (#1F2D2F) — first paragraph (personal validation)
- Color: B.soft (#4A6568) — second and third paragraphs (mechanism)
- Line-height: 1.7
- Margin-bottom: 16px (between paragraphs)

### Section: SECTION 4 — Permission / Gentle Close (White)
- Width: 100%
- Background: #FFFFFF (B.paper)
- Padding: 32px 32px

#### Body paragraphs
- Font-family: Questrial
- Font-size: 17px
- Font-weight: 400
- Color: B.soft (#4A6568)
- Line-height: 1.6
- Margin-bottom: 16px

#### Final italic line ("You've been doing the work...")
- Font-family: Questrial
- Font-size: 17px
- Font-weight: 400
- Font-style: italic
- Color: B.ink (#1F2D2F)
- Line-height: 1.6

### Section: SIGNOFF — LONG variant (Cream Card)
- Width: 100%
- Background: #FBF7F1 (B.cream)
- Padding: 32px 32px
- Border-radius: 12px
- Box-shadow: 0 2px 8px rgba(0,0,0,0.04)

#### Closing ("With care,")
- Font-family: Questrial
- Font-size: 16px
- Font-weight: 400
- Font-style: italic
- Color: B.ink (#1F2D2F)
- Line-height: 1.4
- Margin-bottom: 4px

#### Name ("Lena,")
- Font-family: Questrial
- Font-size: 18px
- Font-weight: 400
- Color: B.teal (#2BAEB4)
- Line-height: 1.4
- Margin-bottom: 4px

#### Role ("Customer Support · Mom of two autistic sons")
- Font-family: Questrial
- Font-size: 14px
- Font-weight: 400
- Color: B.muted (#8A9B9D)
- Line-height: 1.4
- Margin-bottom: 20px

#### Thin Rule before P.S.
- Width: 100%
- Height: 1px
- Background: #E8E2DA
- Margin-bottom: 16px

#### P.S. Block
- Font-family: Questrial
- Font-size: 15px
- Font-weight: 400
- Color: B.soft (#4A6568)
- Line-height: 1.5

### Section: Divider
- Width: 100%
- Height: 1px
- Border-top: 1px solid #E8E2DA

### Section: Footer
- Component: Footer (from primitives.jsx)
- Width: 100%
- Background: #FFFFFF (B.paper)
- Padding: 32px 32px 48px
- Text-align: center

#### Footer links
- Font-family: Questrial
- Font-size: 13px
- Color: B.teal (#2BAEB4)
- Separator: " · " between links

#### Reviews line
- Font-family: Questrial
- Font-size: 13px
- Color: B.muted (#8A9B9D)

#### Contact / Unsubscribe
- Font-family: Questrial
- Font-size: 12px
- Color: B.muted (#8A9B9D)

#### Address
- Font-family: Questrial
- Font-size: 12px
- Color: B.muted (#8A9B9D)

#### Copyright
- Font-family: Questrial
- Font-size: 11px
- Color: B.muted (#8A9B9D)

---

## 6. Copy Blocks

### Block: Subject Line
This our last email, and that's okay

### Block: Preview Text
You're always welcome back. But if today isn't the day, that's a real answer.

### Block: From Name
Lena from BrightKidCo

### Block: Hook Headline
This our last email.

### Block: Hook Body
We haven't heard from you in a while, and we're respecting your inbox. If today isn't the right time, that's a real answer. The product will be here when you're ready. So will I.

### Block: Recognition Anchors (Part 1)
Whether your child talks about the potty but doesn't use it, or you've been at this for years and stopped counting the attempts, if the signal isn't arriving, you're not alone in that.

### Block: Recognition Anchors (Part 2)
Some kids are 3 and just starting to show signs. Others are 10+ and you've tried everything. Some parents have just begun looking. Others have stepped back from trying entirely. Every version belongs here.

### Block: Validation + Mechanism (Part 1 — Personal)
If you've stepped back from trying, I get it. Both my sons went through this. My older son was 8 before we figured out what was really going on. And I know what it feels like when every method you try ends the same way.

### Block: Validation + Mechanism (Part 2 — Research)
What we've learned, from the research and from thousands of families, is that it's not about effort. It's not about motivation. For kids whose nervous systems process body signals differently, the standard methods were solving the wrong problem.

### Block: Validation + Mechanism (Part 3 — Interoception)
The signal that says "I need to go", interoception, arrives differently for some kids. It arrives too late, or it doesn't arrive at all. And no method that assumes it's already there can bridge that gap.

### Block: Permission Close (Part 1)
If your child's situation has changed, if you're ready to try something different down the road, you're always welcome back. If today isn't the day, that's okay. The science will still be here. The Body-Signal Learning Layer will still be here. So will I.

### Block: Permission Close (Part 2 — Final)
Whichever path you take, thanks for letting us into your inbox. You've been doing the work. That's what matters.

### Block: Signoff
With care,

Lena,
Customer Support · Mom of two autistic sons

### Block: P.S.
P.S. My older son was 8 before we figured this out. If you've stepped back from trying, I get it. When you're ready, the science will still be here. 60 days, your judgment. https://brightkidco.com

### Block: Footer Links
Shop · Parent Stories · Contact Us · FAQ

### Block: Footer Reviews
16,511 reviews · 4.9 ★ · 100,000+ parents

### Block: Footer Contact
support@brightkidco.com | Unsubscribe | Preferences

### Block: Footer Address
BrightKidCo · 123 Main Street, Suite 200, San Francisco, CA 94102

### Block: Footer Copyright
© 2026 BrightKidCo. All rights reserved.

---

## 7. Image Briefs

### Image: Header Logo
- Source: /root/projects/brightkidco/raw/BKCO - EMAIL MARKETING/welcome-flow/ (referenced as ../assets/brightkidco-logo-v2.png)
- Display: height 34px, auto width
- Border-radius: 0 (logo is transparent PNG)
- Context: Standard header placement, centered
- Alt text: "BrightKidCo"

### Image: Hero Illustration — Open Door Easter Egg
- Source: Custom illustration (not a product photo)
- Display: 160px wide × 100px tall
- Border-radius: 0 (line-art)
- Shadow: None
- Context: Hero section, below header, above hook card
- Description: Simple 1-color line art in B.teal (#2BAEB4) on B.cream (#FBF7F1) background. Door frame: thin 1.5px stroke. Door angled at ~15° inward. Light sliver: soft gradient from #FBF7F1 to transparent. Below door: "Still here." in small caps.
- Alt text: "A door slightly open with warm light, still here when you're ready."
- Easter egg: data-door="15deg-open" attribute for aria-details. The 15° angle = "open enough to see through, not open enough to walk through." Shadow falls left (morning light = new day, not setting sun). Light gap is 3px wide at widest — modest, respectful invitation.

### Image: Signoff Avatar (NOT USED)
- Note: The LONG sign-off variant does not include an avatar image. Text-only sign-off with Lena's name in B.teal.

### Image: Product Photos (NOT USED)
- Note: Sunset E2 has ZERO product mention in the body copy. No product images appear in the email. This is a goodbye email — product imagery would signal "still selling." The Open Door illustration is the only visual element, carrying emotional weight without overstepping.

---

## 8. Render Notes

### Dark Mode
- Background inversions: Email shell background stays #FFFFFF. Cream sections (#FBF7F1) invert to #1A2A2C. White sections (#FFFFFF) invert to #1F2D2F. Mint section (#DBFFCD) inverts to #1A3A2C.
- Text color inversions: B.ink (#1F2D2F) → #FFFFFF. B.soft (#4A6568) → #B8CACD. B.muted (#8A9B9D) → #6A7B7D. B.teal (#2BAEB4) → #4CC8D0 (brighter for dark bg).
- Card shadows: Become subtle glow (0 2px 8px rgba(255,255,255,0.04)) or removed entirely.
- Open door illustration: Line color stays B.teal (vibrant on dark). "Still here." text inverts to #B8CACD.
- Footer links: B.teal stays (high contrast on dark).

### Responsive
- Breakpoint: 320px (minimum supported)
- Behavior at 320px: Hook headline reduces to 22px. Body text reduces to 16px. Card padding reduces to 32px 20px. Open door illustration scales to full width. Footer links stack vertically.
- Behavior at 420px: Default rendering (all specs as listed above).
- Behavior at 600px+: Max-width 420px centered. Email appears in a centered column. Background outside email can be #E8E2DA for warmth.

### Email Client Compatibility
- Outlook: MSO conditional comments for background colors on cream and mint cards. VML background fallback for #FBF7F1 and #DBFFCD. Border-radius fallback: accept square corners on Outlook desktop.
- Gmail: All styles inline (no CSS classes). Gmail strips <style> blocks in non-AMP mode. Ensure all colors are inline. Box-shadow: NOT supported in Gmail — cards render flat (acceptable — the subtle shadow is progressive enhancement only).
- Apple Mail: Full CSS support including gradients, border-radius, box-shadow, and background-image. Renders as designed. Animation (fade-in on scroll) supported.
- Mobile clients: Preheader text visible in preview. Hook headline scales down. All sections stack vertically. Card padding reduces for small screens.

### Special Instructions
1. COPY VERBATIM: Every word in the Copy Blocks section is extracted verbatim from the copy file. The JSX agent must place this exact text. No paraphrasing, no "improving."
2. ZERO CTA: This email has NO CTA button per S2 spec: "E2: Goodbye → Lena (LONG) → NO CTA." The sign-off P.S. contains a text link (brightkidco.com) as a soft homeward anchor — NOT a CTA button.
3. LONG SIGN-OFF: This email uses Lena's LONG sign-off variant — "With care, Lena, Customer Support · Mom of two autistic sons." This is the deepest sign-off in the program, reserved for the absolute final touchpoint. The 60-day guarantee in the P.S. is a standing offer, not a push.
4. CARD-BASED LAYOUT: Four content sections use alternating backgrounds (cream → white → mint → white) with card styling (border-radius 12px, subtle shadow). This creates visual rhythm without images. E1 uses flat white throughout — the card system is E2's distinguishing structural feature.
5. NO SHADOWS ON WHITE SECTIONS: Only cream (#FBF7F1) and mint (#DBFFCD) cards get the subtle box-shadow. White (#FFFFFF) sections are flat. This creates gentle depth hierarchy without heaviness.
6. CROSS-LEVEL COMPLIANCE: R1 — no level labels, symptom-only language. R2 — 4 recognition anchors (talks but doesn't go, years of attempts, age 3 vs 10+, just looking vs stepped back). R3 — age ranges "3" to "10+". R4 — verbal/non-verbal paired. R5 — "when you're ready" is open-ended. R6 — success = "you've been doing the work."
7. FLOW DESIGN SIGNATURE: "Graceful close, ink primary, paper accents, farewell-first hero, minimal elegant, low density, NO CTA." Every design decision serves the goodbye tone.
8. MINT CARD RATIONALE: The #DBFFCD mint section contains the mechanism explanation (interoception). One educational section is appropriate — science is still present but not foregrounded. Green is restrained: no conversion signal, just brand identity.
9. EASTER EGG — 15° DOOR ANGLE: The door in the illustration is angled at exactly 15° — "open enough to see through, not open enough to walk through." Shadow falls left (morning light = new day). Light gap is 3px wide — modest, respectful. Alt text Easter egg: data-door="15deg-open" for aria-details.
10. NO BOLD TEXT: Per 11-brand-voice-reference.md §14.3, weight 400 only. Emotional weight carried by italic and spacing, not bold. This applies throughout the email.
11. ESTIMATED TOTAL HEIGHT: ~3,400px desktop, ~3,800px mobile. Longer than E1 due to card-based layout with generous padding, but still LOW density overall (no product blocks, no social proof, no comparison sections).

---

## 9. Component Categories

| Category | Component Used | Section |
|----------|---------------|---------|
| HERO | Open Door Easter Egg (small illustration) | Hero section |
| TEXT/LETTER | LETTER-01 Card Stack (4 alternating sections) | Sections 1-4 |
| MECHANISM | Validation + Interoception explanation (mint card) | Section 3 |
| SIGNOFF | SIGNOFF LONG variant (Lena sign-off + P.S.) | Signoff section |
| DECORATIVE | Warm linen dividers, "Still here." text, footer | Between sections, footer |

**Minimum 5 unique categories: HERO, TEXT/LETTER, MECHANISM, SIGNOFF, DECORATIVE** ✓

---

## 10. Section Map

| Section | Component Category | Description |
|---------|-------------------|-------------|
| Header | HERO | Logo placement with thin separator |
| HERO (Open Door Easter Egg) | HERO | Small door illustration — 15° angle, warm light sliver, "Still here." |
| Section 1: Hook (Cream Card) | TEXT/LETTER | "This our last email" headline + observation body |
| Section 2: Recognition Anchors (White) | TEXT/LETTER | Whether...Or...If... pattern + 4 recognition anchors |
| Section 3: Validation + Mechanism (Mint Card) | MECHANISM | Lena's personal story + interoception explanation |
| Section 4: Permission / Gentle Close (White) | TEXT/LETTER | Open door promise + final italic validation |
| SIGNOFF (LONG, Cream Card) | SIGNOFF | "With care, Lena" + P.S. with 60-day guarantee |
| Footer | DECORATIVE | Links, reviews, unsubscribe, address, copyright |

---

## 11. Quality Notes

1. **Verbatim Copy Verified:** All body copy blocks extracted directly from /root/projects/brightkidco/outputs/copy/sunset/sunset-25-e2.md. No words added, removed, or paraphrased. Subject line, preview text, and from name match copy file exactly.
2. **Brand Token Compliance:** All colors use the mandated brand token set: B.ink (#1F2D2F), B.teal (#2BAEB4), B.green (#5DD07A), B.soft (#4A6568), B.cream (#FBF7F1), B.paper (#FFFFFF), B.muted (#8A9B9D). The only exception is the mint card (#DBFFCD) which is explicitly specified in the copy file's creative strategy for the mechanism section. The warm linen divider (#E8E2DA) is a neutral tone consistent with other wireframes.
3. **Low Density Compliance:** Layout contains zero product images, zero guarantee seals (the 60-day guarantee is text-only in the P.S.), zero social proof blocks (reviews line is in footer only, not body), zero stat cards. The only visual element beyond text is the small open-door illustration. This is among the most restrained emails in the program.
4. **Cross-Level Compliance (R1-R6):** R1 — no level labels, symptom-first language ("talks about the potty but doesn't use it"). R2 — 4 recognition anchors covering all sub-groups. R3 — age ranges "3" to "10+". R4 — verbal/non-verbal paired ("talks about the potty" + "stopped counting"). R5 — "when you're ready" is open-ended. R6 — success = "you've been doing the work."
5. **E1/E2 Distinction:** E2 has NO CTA button (E1 has one). E2 uses Questrial (E1 uses Georgia). E2 uses alternating card backgrounds (E1 is flat white). E2 has 4 content sections (E1 has 2). E2 uses LONG sign-off (E1 uses MEDIUM). E2's layout is card-based and rhythmic (E1's is vertical and linear). The two wireframes share zero identical structural elements.
6. **Open Door Easter Egg — 15° Angle:** The door is angled at exactly 15° — "open enough to see through, not open enough to walk through." Shadow falls to the left (morning light = new day, not setting sun). Light gap is 3px wide at widest — modest, respectful invitation. Alt text reads: "A door slightly open with warm light, still here when you're ready."
7. **No CTA Design:** The absence of a CTA button is the single most important structural difference from E1. Per S2 spec: "E2: Goodbye → Lena (LONG) → NO CTA." The P.S. text link (brightkidco.com) serves as a soft homeward anchor — not a conversion lever.
8. **Card System Rationale:** Alternating cream/white/mint backgrounds create visual rhythm and scannability without requiring images. Card shadows are subtle (0 2px 8px rgba(0,0,0,0.04)) — present on cream and mint cards only, absent on white sections. This creates gentle depth hierarchy.
9. **No Bold Text:** Per 11-brand-voice-reference.md §14.3, weight 400 only throughout. Emotional weight carried by italic and generous spacing (line-height 1.6-1.7), not by bold. Slower reading pace signals "no hurry," consistent with the goodbye tone.
10. **Mint Card Purpose:** The #DBFFCD mint section contains the mechanism explanation (Lena's personal story + interoception). One educational section is appropriate — science is present but not foregrounded. Green is restrained to this single section: no conversion signal, just brand identity.
11. **Motion Notes:** Two micro-motions for mobile clients that support animation: (1) Each section card fades in at opacity 0→1 over 400ms with cubic-bezier(0.25, 0.1, 0.25, 1) as the subscriber scrolls — creates unhurried reading rhythm. (2) Footer links and Lena's name darken slightly on hover (a:hover color: #026b01). Both respect prefers-reduced-motion. No countdown timer, no pulsing CTA, no slide-in banner, no parallax.
12. **Estimated Total Height:** ~3,400px desktop, ~3,800px mobile. Longer than E1 due to card-based layout with generous padding, but still LOW density overall.
