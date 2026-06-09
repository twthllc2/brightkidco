# Wireframe: Sunset — E1 | Cross-Level

## 1. Metadata

| Field | Value |
|-------|-------|
| **Flow** | Sunset (Flow 25) |
| **Position** | E1 — Re-engagement Attempt (120+ days unengaged) |
| **Level** | Cross-Level (R1-R6, single copy for all 4 levels) |
| **Copy File** | /root/projects/brightkidco/outputs/copy/sunset/sunset-25-e1.md |
| **Strategy Map Entry** | flows.sunset.emails.e1 |
| **Flow Signature** | Graceful close, ink primary, paper accents, farewell-first hero, minimal elegant, low density, respectful CTA |
| **Level Calibration** | Cross-Level — 30% Hope / 70% Realism, zero urgency, no product offer, CTA is mailing-list choice, low density, Georgia serif body |
| **Component Categories Used** | HERO, TEXT/LETTER, CTA, SIGNOFF, DECORATIVE |
| **Total Estimated Height** | ~2,800px (desktop) / ~3,200px (mobile) |

---

## 2. Strategy Box

**Big Idea:** "The Open Door." The visual and emotional metaphor is a door that can swing either way — stay or go — but never closes permanently. The email is an invitation, not a gate. The subscriber is in control. BrightKidCo stands at the threshold, holding the door open, waiting without pressure. This is the sunset flow's only moment of choice. The creative respects that dignity. No urgency. No countdown. Just a clear, warm path in either direction.

**Emotional Arc Position:** First of two sunset emails. Triggered at 120+ days unengaged. Emotional arc: Observation ("We haven't heard from you") → Validation ("This stuff is hard") → Permission ("Click below and we'll keep sending") → Release ("No hard feelings at all"). The entire arc is compressed into one message — this email does the work of a full goodbye sequence.

**Component Selection Rationale:**
- HERO (Farewell-first): Text-forward with open-door illustration. No product image, no urgency imagery. The hero is an invitation to decide, not a visual pitch.
- LETTER-01 (Paragraph Stack): Three body paragraphs — observation, validation, permission. Georgia serif for warmth. Low density, generous whitespace.
- CTA-4 (Gentle Invite): "Yes, keep me updated" — the ONLY CTA in the sunset flow. Green pill button, respectful tone. This is a mailing-list choice, not a purchase.
- SIGNOFF (MEDIUM variant): "With understanding, Lena" — the medium sign-off, warmer than SHORT but not the full LONG variant reserved for E2.
- DESDEEP-14 (Minimal Divider): Warm linen divider, 120px, centered. No decorative noise — the absence IS the design choice.

**Differentiation Note from E2:** E1 has a CTA button (the choice moment). E2 has NO CTA (the final goodbye). E1 uses the MEDIUM sign-off. E2 uses the LONG sign-off. E1's layout is vertical and linear (hero → body → CTA → signoff). E2's layout uses alternating card backgrounds (cream/white/mint) for visual rhythm. E1 is the email of choice; E2 is the email of release.

---

## 3. Creative Box

**Color Palette:**
- Primary: #1F2D2F (B.ink) — Headings, body text emphasis, hero text
- Secondary: #2BAEB4 (B.teal) — CTA button fill, accent highlights
- Accent: #5DD07A (B.green) — CTA hover state, secondary accent
- Background: #FBF7F1 (B.cream) — Warm section backgrounds, email canvas warmth
- Text: #1F2D2F (B.ink) — Primary body text, headings
- Page Background: #FFFFFF (B.paper) — Email canvas
- Secondary Text: #4A6568 (B.soft) — Body copy, permission paragraph, P.S. block
- Tertiary Text: #8A9B9D (B.muted) — Captions, footer, divider color
- CTA Text: #FFFFFF — CTA button text on dark background

**Typography:**
- Primary: Georgia, "Times New Roman", serif — All body copy, sign-off, P.S., heading
- Secondary: Arial, sans-serif — Footer, unsubscribe link
- Heading (hook): Georgia, 22px, weight 700, line-height 1.3, color B.ink
- Body paragraphs: Georgia, 16px, weight 400, line-height 1.6, color B.soft
- Permission paragraph: Georgia, 14px, weight 400, font-style italic, line-height 1.5, color B.muted
- CTA button: Georgia, 15px, weight 700, color #FFFFFF
- Lena sign-off name: Georgia, 15px, weight 700, line-height 1.4, color B.ink
- Lena subtitle: Georgia, 13px, weight 400, line-height 1.4, color B.soft
- P.S. block: Georgia, 13px, weight 400, line-height 1.5, color B.soft
- Footer: Arial, 11px, weight 400, line-height 1.4, color B.muted

**Border Radius:** CTA button: 999px (pill), Images: 0 (line-art illustration)
**Shadow:** None — zero shadow in sunset flow. Clean, flat, minimal.
**Spacing:** Section gap: 32px, H-padding: 24px, Body max-width: 520px centered, Email max-width: 600px

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
│  └─────────────────────────────────────────────┘   │
│                                                    │
│  ┌─ HERO: Farewell-first (Open Door) ─────────┐   │
│  │ [bg: #FFFFFF — no product image]            │   │ ~280px
│  │                                              │   │
│  │  ┌─ Open Door Illustration ────────────┐    │   │
│  │  │ Line-art: minimal wooden doorway    │    │   │
│  │  │ viewed from inside looking out      │    │   │
│  │  │ Door at 45° angle, warm light       │    │   │
│  │  │ spills through (radial gradient)    │    │   │
│  │  │ 600×300px canvas, 2px warm gray     │    │   │
│  │  │ stroke (#8A9B9D B.muted)            │    │   │
│  │  │ No lock, no handle, no latch        │    │   │
│  │  │ (Easter egg: door has no lock)      │    │   │
│  │  └──────────────────────────────────────┘    │   │
│  │                                              │   │
│  └─────────────────────────────────────────────┘   │
│                                                    │
│  ┌─ SPACER 24px ─────────────────────────────┐    │
│  └─────────────────────────────────────────────┘   │
│                                                    │
│  ┌─ LETTER-01: Hook + Body ──────────────────┐    │
│  │ [bg: #FFFFFF]                              │    │ ~700px
│  │ padding: 0 24px                             │    │
│  │ max-width: 520px, margin: 0 auto            │    │
│  │                                              │    │
│  │  ┌─ Hook Headline ────────────────────┐     │    │
│  │  │ "We haven't heard from you         │     │    │
│  │  │  in a while."                      │     │    │
│  │  │ [Georgia 22px, weight 700,         │     │    │
│  │  │  B.ink, line-height 1.3]           │     │    │
│  │  └────────────────────────────────────┘     │    │
│  │                                              │    │
│  │  ┌─ Warm Linen Divider ──────────────┐     │    │
│  │  │ 1px #E8E2DA, 120px, centered       │     │    │
│  │  └────────────────────────────────────┘     │    │
│  │                                              │    │
│  │  "I get it. This stuff is hard. Sometimes   │    │
│  │   the information comes at the wrong time.   │    │
│  │   Sometimes you need a break. Sometimes the  │    │
│  │   timing just isn't right, and that's okay." │    │
│  │   [Georgia 16px, B.soft, line-height 1.6]   │    │
│  │                                              │    │
│  │  "If you signed up hoping for answers and    │    │
│  │   they didn't come fast enough, that's on    │    │
│  │   us, not on you. If you put body-signal     │    │
│  │   learning on the shelf because you had      │    │
│  │   other things to fight for, that's real,    │    │
│  │   and normal, and I've been there."          │    │
│  │   [Georgia 16px, B.soft, line-height 1.6]   │    │
│  │                                              │    │
│  │  "My older son was eight before he finally   │    │
│  │   trained. We took breaks. We stopped trying.│    │
│  │   We started again. That's not failure.      │    │
│  │   That's how this works for a lot of         │    │
│  │   families."                                 │    │
│  │   [Georgia 16px, B.soft, line-height 1.6]   │    │
│  │                                              │    │
│  │  "I want to be direct with you: if you're    │    │
│  │   still interested in body-signal learning   │    │
│  │   for your child, click below and we'll      │    │
│  │   keep sending you updates, science, and     │    │
│  │   parent stories. We'd love to have you."    │    │
│  │   [Georgia 16px, B.soft, line-height 1.6]   │    │
│  │                                              │    │
│  │  "If not? No hard feelings at all. We'll     │    │
│  │   stop emailing you after this one."         │    │
│  │   [Georgia 14px, B.muted, italic]            │    │
│  └─────────────────────────────────────────────┘   │
│                                                    │
│  ┌─ SPACER 32px ─────────────────────────────┐    │
│  └─────────────────────────────────────────────┘   │
│                                                    │
│  ┌─ CTA-4: Gentle Invite ────────────────────┐    │
│  │ [bg: #FFFFFF]                              │    │ ~100px
│  │ text-align: center, padding: 0 24px        │    │
│  │                                              │    │
│  │  ┌─ CTA Button ─────────────────────┐      │    │
│  │  │ "Yes, keep me updated"            │      │    │
│  │  │ bg: #2BAEB4 (B.teal)             │      │    │
│  │  │ color: #FFFFFF                    │      │    │
│  │  │ padding: 14px 32px, radius: 999  │      │    │
│  │  │ Georgia 15px, weight 700          │      │    │
│  │  │ width: 240px, centered            │      │    │
│  │  └───────────────────────────────────┘      │    │
│  └─────────────────────────────────────────────┘   │
│                                                    │
│  ┌─ SPACER 32px ─────────────────────────────┐    │
│  └─────────────────────────────────────────────┘   │
│                                                    │
│  ┌─ Permission Close ────────────────────────┐    │
│  │ [bg: #FFFFFF]                              │    │ ~120px
│  │ text-align: center, padding: 0 24px        │    │
│  │                                              │    │
│  │  "If your situation changes down the road,   │    │
│  │   if a new challenge comes up, if you hear   │    │
│  │   something from a therapist that makes you  │    │
│  │   curious, if you just want to revisit the   │    │
│  │   research, you can always come back. Our    │    │
│  │   doors don't lock."                         │    │
│  │   [Georgia 14px, B.muted, italic]            │    │
│  │                                              │    │
│  │  "Whatever you choose, I'm glad you gave     │    │
│  │   us a shot."                                │    │
│  │   [Georgia 14px, B.soft, line-height 1.5]   │    │
│  └─────────────────────────────────────────────┘   │
│                                                    │
│  ┌─ Warm Linen Divider ──────────────────────┐   │
│  │ 1px #E8E2DA, 120px, centered               │   │ 24px
│  └─────────────────────────────────────────────┘   │
│                                                    │
│  ┌─ SIGNOFF: MEDIUM variant ─────────────────┐    │
│  │ [bg: #FFFFFF]                              │    │ ~320px
│  │ padding: 24px 24px                          │    │
│  │ max-width: 520px, margin: 0 auto            │    │
│  │                                              │    │
│  │  "With understanding,"                       │    │
│  │  [Georgia 15px, B.soft, line-height 1.4]    │    │
│  │                                              │    │
│  │  "Lena ——"                                   │    │
│  │  [Georgia 15px, weight 700, B.ink]          │    │
│  │                                              │    │
│  │  "Customer Support · Mom of two autistic     │    │
│  │   sons"                                      │    │
│  │  [Georgia 13px, B.soft]                      │    │
│  │                                              │    │
│  │  ┌─ P.S. Block ──────────────────────┐      │    │
│  │  │ "P.S. Both my sons went through   │      │    │
│  │  │  this. I know what it feels like  │      │    │
│  │  │  to try everything. If you're not │      │    │
│  │  │  sure yet, you can reply to this  │      │    │
│  │  │  email and I'll answer honestly,  │      │    │
│  │  │  no pitch, no pressure. You'll    │      │    │
│  │  │  get me, not a template."         │      │    │
│  │  │ [Georgia 13px, B.soft, italic]    │      │    │
│  │  └───────────────────────────────────┘      │    │
│  └─────────────────────────────────────────────┘   │
│                                                    │
│  ┌─ SPACER 24px ─────────────────────────────┐    │
│  └─────────────────────────────────────────────┘   │
│                                                    │
│  ┌─ Warm Linen Divider ──────────────────────┐   │
│  │ 1px #E8E2DA, 120px, centered               │   │ 24px
│  └─────────────────────────────────────────────┘   │
│                                                    │
│  ┌─ Footer ──────────────────────────────────┐    │
│  │ [bg: #FFFFFF]                              │    │ ~180px
│  │ padding: 24px 24px                          │    │
│  │ text-align: center                           │    │
│  │                                              │    │
│  │  "You're receiving this because you         │    │
│  │   subscribed to BrightKidCo updates. If      │    │
│  │   you'd like to stay, click \"Yes, keep me  │    │
│  │   updated\" above. If not, you can           │    │
│  │   unsubscribe below."                        │    │
│  │  [Arial 11px, B.muted]                      │    │
│  │                                              │    │
│  │  "Unsubscribe | BrightKidCo · 123 Main      │    │
│  │   Street, Suite 200, San Francisco, CA       │    │
│  │   94102"                                     │    │
│  │  [Arial 11px, B.muted]                      │    │
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
- Font-family: Georgia, "Times New Roman", serif
- Color: B.ink (#1F2D2F)

### Section: Header
- Component: Header (from primitives.jsx)
- Width: 100%
- Height: 72px
- Background: #FFFFFF (B.paper)
- Padding: 24px 20px 0
- Text-align: center
- Logo: brightkidco-logo-v2.png, height: 34px

### Section: HERO — Farewell-first (Open Door)
- Width: 100%
- Background: #FFFFFF (B.paper)
- Padding: 34px 22px 28px
- Text-align: center

#### Open Door Illustration
- Canvas: 600×300px (scales to 100% width, max 420px)
- Line weight: 2px, B.muted (#8A9B9D)
- Fill: None (negative space)
- Light gradient: radial-gradient(circle at 60% 50%, #FBF7F1 0%, transparent 80%)
- Door angle: 45° open from inside
- Alt text: "An open door with warm light spilling through, the choice is yours"
- No lock, no handle, no latch mechanism (Easter egg — mirrors "Our doors don't lock" copy)

### Section: SPACER 24px
- Component: Spacer (inline div/td)
- Height: 24px
- Background: transparent

### Section: LETTER-01 — Hook + Body (Opener)
- Component: Letter (from primitives.jsx)
- Width: 100%
- Background: #FFFFFF (B.paper)
- Padding: 0 24px
- Max-width: 520px, margin: 0 auto

#### Hook Headline
- Font-family: Georgia, "Times New Roman", serif
- Font-size: 22px
- Font-weight: 700
- Line-height: 1.3
- Color: B.ink (#1F2D2F)
- Margin-bottom: 14px

#### Warm Linen Divider (after headline)
- Width: 120px
- Height: 1px
- Background: #E8E2DA
- Margin: 14px auto

#### Body paragraphs
- Font-family: Georgia, "Times New Roman", serif
- Font-size: 16px
- Font-weight: 400
- Color: B.soft (#4A6568)
- Line-height: 1.6
- Margin-bottom: 16px (between paragraphs)

#### Permission paragraph ("If not? No hard feelings...")
- Font-family: Georgia, "Times New Roman", serif
- Font-size: 14px
- Font-weight: 400
- Font-style: italic
- Color: B.muted (#8A9B9D)
- Line-height: 1.5

### Section: SPACER 32px
- Component: Spacer
- Height: 32px
- Background: transparent

### Section: CTA-4 — Gentle Invite
- Component: CTAClose pattern (adapted — light bg, not dark)
- Width: 100%
- Background: #FFFFFF (B.paper)
- Padding: 0 24px
- Text-align: center

#### CTA Button ("Yes, keep me updated")
- Display: inline-block
- Padding: 14px 32px
- Background: #2BAEB4 (B.teal)
- Color: #FFFFFF
- Font-family: Georgia, "Times New Roman", serif
- Font-size: 15px
- Font-weight: 700
- Border-radius: 999px
- Text-decoration: none
- Width: 240px
- Text-align: center
- Hover state: background #5DD07A (B.green)

### Section: Permission Close
- Width: 100%
- Background: #FFFFFF (B.paper)
- Padding: 0 24px
- Text-align: center

#### Permission paragraphs
- Font-family: Georgia, "Times New Roman", serif
- Font-size: 14px
- Font-weight: 400
- Font-style: italic
- Color: B.muted (#8A9B9D)
- Line-height: 1.5
- Margin-bottom: 12px

#### Closing line ("Whatever you choose...")
- Font-family: Georgia, "Times New Roman", serif
- Font-size: 14px
- Font-weight: 400
- Color: B.soft (#4A6568)
- Line-height: 1.5

### Section: Warm Linen Divider (2 instances)
- Width: 120px
- Height: 1px
- Background: #E8E2DA
- Margin: 0 auto

### Section: SIGNOFF — MEDIUM variant
- Component: Signoff (from primitives.jsx)
- Width: 100%
- Background: #FFFFFF (B.paper)
- Padding: 24px 24px
- Max-width: 520px, margin: 0 auto

#### Closing ("With understanding,")
- Font-family: Georgia, "Times New Roman", serif
- Font-size: 15px
- Color: B.soft (#4A6568)
- Line-height: 1.4
- Margin-bottom: 4px

#### Name ("Lena ——")
- Font-family: Georgia, "Times New Roman", serif
- Font-size: 15px
- Font-weight: 700
- Color: B.ink (#1F2D2F)
- Line-height: 1.4
- Margin-bottom: 4px

#### Role ("Customer Support · Mom of two autistic sons")
- Font-family: Georgia, "Times New Roman", serif
- Font-size: 13px
- Color: B.soft (#4A6568)
- Line-height: 1.4
- Margin-bottom: 20px

#### P.S. Block
- Border-top: 1px solid #E8E2DA
- Padding-top: 16px
- Font-family: Georgia, "Times New Roman", serif
- Font-size: 13px
- Font-weight: 400
- Font-style: italic
- Color: B.soft (#4A6568)
- Line-height: 1.5

### Section: Footer
- Component: Footer (from primitives.jsx)
- Width: 100%
- Background: #FFFFFF (B.paper)
- Padding: 24px 24px
- Text-align: center

#### Footer text
- Font-family: Arial, sans-serif
- Font-size: 11px
- Font-weight: 400
- Color: B.muted (#8A9B9D)
- Line-height: 1.6

#### Unsubscribe link
- Font-family: Arial, sans-serif
- Font-size: 11px
- Color: B.muted (#8A9B9D)
- Text-decoration: underline

---

## 6. Copy Blocks

### Block: Subject Line
Haven't heard from you in a while

### Block: Preheader
Checking in, no pressure, just making sure you still want to hear from us.

### Block: From Name
Lena at BrightKidCo

### Block: Hook Headline
We haven't heard from you in a while.

### Block: Body (Validation, Observation)
I get it. This stuff is hard. Sometimes the information comes at the wrong time. Sometimes you need a break. Sometimes the timing just isn't right, and that's okay.

### Block: Body (Permission, Clear Choice — Part 1)
If you signed up hoping for answers and they didn't come fast enough, that's on us, not on you. If you put body-signal learning on the shelf because you had other things to fight for, that's real, and normal, and I've been there.

### Block: Body (Personal Story)
My older son was eight before he finally trained. We took breaks. We stopped trying. We started again. That's not failure. That's how this works for a lot of families.

### Block: Body (Permission, Clear Choice — Part 2)
I want to be direct with you: if you're still interested in body-signal learning for your child, click below and we'll keep sending you updates, science, and parent stories. We'd love to have you.

If not? No hard feelings at all. We'll stop emailing you after this one.

### Block: CTA Button Text
Yes, keep me updated

### Block: Permission Close
If your situation changes down the road, if a new challenge comes up, if you hear something from a therapist that makes you curious, if you just want to revisit the research, you can always come back. Our doors don't lock.

Whatever you choose, I'm glad you gave us a shot.

### Block: Signoff
With understanding,

Lena ——
Customer Support · Mom of two autistic sons

### Block: P.S.
P.S. Both my sons went through this. I know what it feels like to try everything. If you're not sure yet, you can reply to this email and I'll answer honestly, no pitch, no pressure. You'll get me, not a template.

### Block: Footer
You're receiving this because you subscribed to BrightKidCo updates. If you'd like to stay, click "Yes, keep me updated" above. If not, you can unsubscribe below.

Unsubscribe | BrightKidCo · 123 Main Street, Suite 200, San Francisco, CA 94102

---

## 7. Image Briefs

### Image: Header Logo
- Source: /root/projects/brightkidco/raw/BKCO - EMAIL MARKETING/welcome-flow/ (referenced as ../assets/brightkidco-logo-v2.png)
- Display: height 34px, auto width
- Border-radius: 0 (logo is transparent PNG)
- Context: Standard header placement, centered
- Alt text: "BrightKidCo"

### Image: Hero Illustration — Open Door (Contraption H2 "Threshold")
- Source: Custom illustration (not a product photo)
- Display: 600×300px canvas, scales to 100% width max 420px
- Border-radius: 0 (line-art, no rounding needed)
- Shadow: None
- Context: Hero section, below header, before body copy
- Description: Minimal line-art illustration of a simple wooden doorway shown from the inside looking out. Door stands open at a 45-degree angle. Beyond the threshold, soft warm light spills in as a gentle radial warm-white-to-transparent gradient. Floor is a single horizontal line. No walls, no fixtures. No lock, no handle, no latch mechanism.
- Alt text: "An open door with warm light spilling through, the choice is yours"
- Line weight: 2px, warm gray (#8A9B9D / B.muted)
- Fill: None (negative space)
- Light gradient: radial-gradient(circle at 60% 50%, #FBF7F1 0%, transparent 80%)

### Image: Signoff Avatar (NOT USED)
- Note: The MEDIUM sign-off variant does not include an avatar image. Text-only sign-off.

### Image: Product Photos (NOT USED)
- Note: Sunset E1 has ZERO product mention in the body copy. No product images appear in the email. The CTA is a mailing-list choice, not a purchase. Product photos are intentionally excluded per the sunset flow design signature.

---

## 8. Render Notes

### Dark Mode
- Background inversions: Email shell background stays #FFFFFF. White sections (#FFFFFF) invert to #1F2D2F.
- Text color inversions: B.ink (#1F2D2F) → #FFFFFF. B.soft (#4A6568) → #B8CACD. B.muted (#8A9B9D) → #6A7B7D.
- CTA button: #2BAEB4 (B.teal) stays (high contrast on dark). #FFFFFF text stays.
- Warm linen divider: #E8E2DA → #3A4547 (darker neutral).
- Open door illustration: Line color inverts to #B8CACD. Light gradient uses #1F2D2F base instead of #FBF7F1.

### Responsive
- Breakpoint: 320px (minimum supported)
- Behavior at 320px: Hero title reduces to 18px. Body text reduces to 14px. Padding reduces to 16px horizontal. CTA button width reduces to 200px, padding 12px 24px. Open door illustration scales to full width.
- Behavior at 420px: Default rendering (all specs as listed above).
- Behavior at 600px+: Max-width 420px centered. Email appears in a centered column. Background outside email can be #E8E2DA for warmth.

### Email Client Compatibility
- Outlook: MSO conditional comments for background colors. VML background for cream sections. Border-radius fallback: use `mso-border-radius` or accept square corners on Outlook desktop. CTA button: square corners acceptable.
- Gmail: All styles inline (no CSS classes). Gmail strips <style> blocks in non-AMP mode. Ensure all colors are inline. Box-shadow: NOT supported in Gmail — accept flat rendering (intentional — no shadows in sunset flow anyway).
- Apple Mail: Full CSS support including gradients, border-radius, and background-image. Renders as designed. Animation (gentle pulse on door glow) supported.
- Mobile clients: Preheader text visible in preview. Hero title scales down. CTA button is 44px+ tap target. All sections stack vertically (default email rendering).

### Special Instructions
1. COPY VERBATIM: Every word in the Copy Blocks section is extracted verbatim from the copy file. The JSX agent must place this exact text. No paraphrasing, no "improving."
2. ZERO PRODUCT MENTION: The copy file and creative strategy explicitly state no product images or product text in the body. Do NOT add product photos, product showcases, or product links.
3. MEDIUM SIGN-OFF: This email uses Lena's MEDIUM sign-off variant — "With understanding, Lena —— Customer Support · Mom of two autistic sons." NOT the SHORT variant, NOT the LONG variant (LONG is reserved for E2).
4. LOW DENSITY: Sunset is the LOWEST density flow in the entire program. Generous whitespace. No badges, no stars, no review counts, no guarantee seals. The absence of decorative noise IS the design choice.
5. GEORGIA SERIF: This email uses Georgia as the primary typeface (not Questrial). This is intentional per the sunset creative strategy — Georgia's serifs signal reading rather scanning, the subscriber should feel they're reading a note, not an ad.
6. CROSS-LEVEL COMPLIANCE: This email satisfies R1-R6 simultaneously. No level labels. No diagnosis gatekeeping. Universal hook: "We haven't heard from you." The CTA is a mailing-list choice, not a purchase (R4 offer-neutral).
7. FLOW DESIGN SIGNATURE: "Graceful close, ink primary, paper accents, farewell-first hero, minimal elegant, low density, respectful CTA." Every design decision serves the goodbye tone.
8. NO SHADOWS: Zero box-shadow in the sunset flow. Clean, flat, minimal. Shadows would add visual weight that contradicts the low-density, graceful-close signature.
9. CTA TONE: The CTA "Yes, keep me updated" is a mailing-list re-engagement, NOT a purchase CTA. The button color is B.teal (not the more aggressive B.green), communicating "an option" rather than "a pitch."
10. EASTER EGG: The open-door illustration has no lock, no handle, no latch mechanism. This mirrors the copy phrase "Our doors don't lock." A subscriber who notices the illustration after reading the copy will spot the deliberate design choice.

---

## 9. Component Categories

| Category | Component Used | Section |
|----------|---------------|---------|
| HERO | Farewell-first (Open Door illustration) | Hero section |
| TEXT/LETTER | LETTER-01 Paragraph Stack (body copy) | Hook + Body section |
| CTA | CTA-4 Gentle Invite ("Yes, keep me updated") | CTA section |
| SIGNOFF | SIGNOFF MEDIUM variant (Lena sign-off + P.S.) | Signoff section |
| DECORATIVE | Warm linen dividers (1px #E8E2DA, 120px) | Between sections |

**Minimum 5 unique categories: HERO, TEXT/LETTER, CTA, SIGNOFF, DECORATIVE** ✓

---

## 10. Section Map

| Section | Component Category | Description |
|---------|-------------------|-------------|
| Header | HERO | Logo placement, centered |
| HERO (Open Door) | HERO | Farewell-first illustration — open doorway with warm light |
| LETTER-01 (Hook + Body) | TEXT/LETTER | Observation hook + 3 body paragraphs + permission text |
| CTA-4 (Gentle Invite) | CTA | "Yes, keep me updated" green pill button |
| Permission Close | TEXT/LETTER | "Our doors don't lock" closing + "Whatever you choose" |
| SIGNOFF (MEDIUM) | SIGNOFF | "With understanding, Lena" + P.S. block |
| Footer | DECORATIVE | Unsubscribe, address, legal |

---

## 11. Quality Notes

1. **Verbatim Copy Verified:** All body copy blocks extracted directly from /root/projects/brightkidco/outputs/copy/sunset/sunset-25-e1.md. No words added, removed, or paraphrased. Subject line, preheader, and from name match copy file exactly.
2. **Brand Token Compliance:** All colors use the mandated brand token set: B.ink (#1F2D2F), B.teal (#2BAEB4), B.green (#5DD07A), B.soft (#4A6568), B.cream (#FBF7F1), B.paper (#FFFFFF), B.muted (#8A9B9D). The only non-token color is the warm linen divider (#E8E2DA), which is a neutral divider tone consistent with other wireframes in the system.
3. **Low Density Compliance:** Layout contains zero product images, zero guarantee seals, zero social proof blocks, zero stat cards. The only visual element beyond text is the open-door illustration. This is the most restrained email in the entire BrightKidCo program.
4. **Cross-Level Compliance (R1-R6):** R1 — no level labels, symptom-neutral hook. R2 — universal emotional anchors ("this stuff is hard"). R3 — age-inclusive language. R4 — offer-neutral CTA (mailing list, not product). R5 — no proof points, no stats. R6 — CTA universal ("Yes, keep me updated" works for all levels).
5. **E1/E2 Distinction:** E1 has a CTA button (the choice moment). E1 uses Georgia serif. E1's layout is vertical and linear. E1 uses the MEDIUM sign-off. E2 will have NO CTA, uses Questrial, alternating card backgrounds, and LONG sign-off. The two wireframes share zero identical structural elements.
6. **Open Door Easter Egg:** The illustration intentionally omits lock, handle, and latch mechanisms. This mirrors the copy line "Our doors don't lock." The light beam's lower edge aligns at ~15° from horizontal, subtly illuminating the body text start (2° easter egg per creative strategy).
7. **CTA Color Decision:** B.teal (#2BAEB4) chosen over B.green (#5DD07A) for the CTA button. Lower saturation communicates "an option" rather than "a pitch," consistent with the sunset flow's respectful, zero-pressure tone. B.green appears only on hover state.
8. **Typography Decision:** Georgia serif used intentionally per sunset creative strategy rationale — Georgia signals reading rather than scanning, making the email feel like a personal note rather than a marketing message. This supports V4 (Never sound like marketing).
9. **No Shadows:** Zero box-shadow throughout. Clean, flat, minimal. Shadows add visual weight that contradicts the low-density, graceful-close signature.
10. **Estimated Total Height:** ~2,800px desktop, ~3,200px mobile. This is among the shortest emails in the program, consistent with LOW density mandate.
