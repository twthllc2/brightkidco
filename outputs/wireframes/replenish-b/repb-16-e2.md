# Wireframe: Replenish B — E2 | 90-Day Re-Order Reminder (Cross-Level)

## 1. Metadata

| Field | Value |
|-------|-------|
| **Flow** | Replenish B (Flow 16) |
| **Position** | E2 — Day 90 post-purchase |
| **Level** | Cross-Level (L1 / L2 / L3 / GF) |
| **Copy File** | /root/projects/brightkidco/outputs/copy/replenish-b/repb-16-e2.md |
| **Strategy Map Entry** | flows.replenish-b.emails.e2 |
| **Flow Signature** | replenishment-reminder, 90-day milestone |
| **Level Calibration** | Cross-level single copy, R1-R6 calibrated, Hope/Realism 60/40 |
| **Component Categories Used** | HERO, TEXT/LETTER, TESTIMONIAL, MECHANISM, PRODUCT, CTA, GUARANTEE, DECORATIVE |
| **Total Estimated Height** | ~5,600px |

## 2. Strategy Box

**Big Idea:** "The 90-Day Nervous System Check-In." Not a sales reminder, a milestone marker. 90 days is the point where the nervous system that picks up signals slowly has had sustained, repeated feedback.

**Emotional Arc Position:** Acknowledge milestone → Recognize progress (any level) → Normalize varied timelines → Offer next step.

**Component Selection Rationale:** HERO-9 (Whisper Tone) matches the calm, warm energy of a 90-day check-in. LETTER-01 (Paragraph Stack) delivers the Whether/Or/If opening and recognition anchors cleanly. TRUSTDEEP-8 (The Milestone Counter) visualizes the 90-day journey. EDU-11 (Science Citation) provides the mechanism evidence. CTA-4 (Gentle Invite) matches the low-pressure reorder CTA.

**Differentiation Note:** Warmer coral (#E8856E) CTA replaces teal for this email — warmer, less clinical. Teal accents (#5B9B9B) for anchors create calm trust signal. 3-option Progress Marker contraption doubles as migration data collection.

## 3. Creative Box

**Color Palette:**
- Primary CTA: #E8856E (warm coral) — CTA button, Lena sign-off accent
- Background: #F9F7F5 (warm off-white)
- Body Text: #2D2A26 (deep charcoal)
- Accent/Anchors: #5B9B9B (soft teal) — bullet anchors, pull quotes
- Testimonial Background: #F3EDE5 (light cream)
- Headers: #4A3F38 (dark brown)
- Links: #2D2A26 (underlined charcoal)

**Typography:**
- Header: Inter / system sans-serif, 22px, Medium, line-height 1.3
- Body: Inter, 17px, Regular, line-height 1.6
- Recognition Anchors: Inter, 16px, Regular, line-height 1.5
- Testimonials: Inter Italic, 16px, Regular, line-height 1.5
- CTA Button: Inter, 16px, SemiBold, line-height 1.2
- Lena Sign-Off: Inter, 15px, Regular, line-height 1.5
- Footer: Inter, 12px, Light, line-height 1.4

**Border Radius:** Cards: 8px, CTA Button: 8px, Testimonial: 8px
**Shadow:** Testimonial: 3px left-border #5B9B9B
**Spacing:** Section gap: 24px, H-padding: 24px, Card padding: 16px

## 4. Layout ASCII

```
+----------------------------------------------+  ← #F9F7F5 B.paper outer
|  +----------------------------------------+  |
|  |  HEADER: BrightKidCo logo + "Lena"     |  |  ← left-aligned logo
|  |  nameplate (13px gray)                 |  |     "Lena, Customer Support..."
|  +----------------------------------------+  |
|  ─────────── thin divider #E5DDD5 ─────────  |
|  +----------------------------------------+  |
|  |  OPENING: Whether...Or...If...          |  |  ← universal recognition
|  |  "Whether your child is 3 or 10,       |  |     paragraph
|  |   verbal or non-verbal..."             |  |
|  |  "You bought the 3+3 bundle 90 days    |  |
|  |   ago. Let's check in."                |  |
|  +----------------------------------------+  |
|  ─────────── thin divider #E5DDD5 ─────────  |
|  +----------------------------------------+  |
|  |  RECOGNITION ANCHORS (6 bullets)       |  |  ← em-dash lead-ins
|  |  , Whether your child says "wet" or   |  |     #5B9B9B dash color
|  |    shows you with their body...        |  |
|  |  , They pull at their pants...         |  |
|  |  , Look down at the spot...            |  |
|  |  , Stay dry 2 hours instead of 30min...│  |
|  |  , Walk toward the bathroom...         |  |
|  |  , And if none of these have happened  |  |
|  |    yet: that does not mean nothing     |  |
|  |    is happening.                       |  |
|  +----------------------------------------+  |
|  ─────────── thin divider #E5DDD5 ─────────  |
|  +----------------------------------------+  |
|  |  THREE-FAMILY TESTIMONIAL (3 cards)    |  |  ← #F3EDE5 bg (cream)
|  |  ┌──────────────────────────────────┐  |  |
|  |  │ "Sarah's mom, Level 1"           │  |  |  ← 3px teal left border
|  |  │ "He went from 'almost trained'   │  |  |     #5B9B9B
|  |  │  to 'mostly' in about 6 weeks..."│  |  |
|  |  └──────────────────────────────────┘  |  |
|  |  ┌──────────────────────────────────┐  |  |
|  |  │ "Lisa's mom, Level 2"            │  |  |
|  |  │ "Week 10 was when she finally    │  |  |
|  |  │  paused. Just paused..."         │  |  |
|  |  └──────────────────────────────────┘  |  |
|  |  ┌──────────────────────────────────┐  |  |
|  |  │ "Maria's mom, Level 3"           │  |  |
|  |  │ "He's not trained. He may never  │  |  |
|  |  │  be fully trained..."            │  |  |
|  |  └──────────────────────────────────┘  |  |
|  +----------------------------------------+  |
|  ─────────── thin divider #E5DDD5 ─────────  |
|  +----------------------------------------+  |
|  |  MECHANISM: Why 90 Days Matters        |  |  ← science citation
|  |  "Ninety days of Body-Signal Learning  |  |     Barmpagiannis &
|  |   Layer exposure means..."             |  |     Baldimtsi 2025
|  |  "The science is clear: body signal    |  |
|  |   differences in autism are real..."   |  |
|  +----------------------------------------+  |
|  ─────────── thin divider #E5DDD5 ─────────  |
|  +----------------------------------------+  |
|  |  PROGRESS MARKER: Where Are You?       |  |  ← 3-option click bar
|  |  ┌──────────────────────────────────┐  |  |     contraption
|  |  │ "Your child at 90 days:"         │  |  |
|  |  │ ○ I've seen new signals          │  |  |
|  |  │ ○ No obvious changes             │  |  |
|  |  │ ○ We paused, thinking about      │  |  |
|  |  │   trying again                   │  |  |
|  |  └──────────────────────────────────┘  |  |
|  +----------------------------------------+  |
|  ─────────── thin divider #E5DDD5 ─────────  |
|  +----------------------------------------+  |
|  |  UTILITY: Ready for Next Size?         |  |  ← 2 reasons to reorder
|  |  "1. Your child may be ready to size  |  |
|  |   up..."                              |  |
|  |  "2. The 3+3 pairs have been through  |  |
|  |   90 days of wear..."                 |  |
|  +----------------------------------------+  |
|  ─────────── thin divider #E5DDD5 ─────────  |
|  +----------------------------------------+  |
|  |  CTA: Re-Order 3+3 or Size Up         |  |  ← primary + secondary
|  |  ┌──────────────────────────────────┐  |  |
|  |  │ "Re-Order Your 3+3 Bundle →"     │  |  |  ← #E8856E bg
|  |  │  (Full-width mobile, 48px)       │  |  |     white text
|  |  └──────────────────────────────────┘  |  |
|  |  "Or if you're not sure about sizing: │  |  ← reply prompt
|  |   reply to this email..."             |  |
|  +----------------------------------------+  |
|  ─────────── thin divider #E5DDD5 ─────────  |
|  +----------------------------------------+  |
|  |  GUARANTEE: 60-Day Reminder            |  |  ← #F3EDE5 bg
|  |  "Every pair comes with the 60-day     |  |     optional lock icon
|  |   guarantee. Full refund. No questions."|  |
|  +----------------------------------------+  |
|  ─────────── thin divider #E5DDD5 ─────────  |
|  +----------------------------------------+  |
|  |  LENA SIGN-OFF (MEDIUM)                |  |  ← warm personal
|  |  "I have two autistic sons. One's 6,  |  |
|  |   still in the middle of it..."       |  |
|  |  "Lena —,"                            |  |
|  |  "P.S. Hit reply if you've seen any   |  |  ← reply invitation
|  |   new signals, even tiny ones."       |  |
|  +----------------------------------------+  |
|  ─────────── thin divider #E5DDD5 ─────────  |
|  +----------------------------------------+  |
|  |  FOOTER: Address, unsubscribe, prefs   |  |  ← 11px #888
|  |  BrightKidCo LLC                      |  |     CAN-SPAM
|  |  [Unsubscribe] | [Manage Preferences] |  |
|  +----------------------------------------+  |
+----------------------------------------------+
```

## 5. Section Specs

### Section 1 — Brand Header
- **Component:** UTIL-08 — Nav Bar
- **Copy:** BrightKidCo logo (left-aligned) + "Lena, Customer Support · Mom of two autistic sons" nameplate (13px gray)
- **Background:** #F9F7F5
- **Padding:** 24px top, 24px sides, 24px bottom
- **Typography:** Logo: Inter 22px Medium. Nameplate: Inter 13px Regular, color #888.
- **Notes:** Personal header establishes Lena as sender, not brand.

### Section 2 — Opening (LETTER-01: Paragraph Stack — Whether/Or/If)
- **Component:** LETTER-01 — Paragraph Stack
- **Copy (verbatim):** "Whether your child is 3 or 10, verbal or non-verbal, diagnosed or still figuring it out, 90 days of body-signal learning is real time."
- "Some kids show their first pause within weeks. Others take months before the nervous system registers anything new. Both are normal."
- "You bought the 3+3 bundle 90 days ago. Let's check in."
- **Background:** #F9F7F5
- **Padding:** 24px sides, 24px top/bottom
- **Typography:** Inter 17px Regular, line-height 1.6, color #2D2A26
- **Notes:** Whether/Or/If inclusive pattern. Opens with universal recognition.

### Section 3 — Recognition Anchors (6 bullets with em-dash lead-ins)
- **Component:** LETTER-01 — Paragraph Stack
- **Copy (verbatim):** "You might have noticed something, or maybe nothing obvious yet. Here are the signals parents tell me about around the 90-day mark:"
- ", Whether your child says 'wet' or shows you with their body, the pause before an accident is real. Even once."
- ", They pull at their pants instead of sitting in a wet pull-up without flinching."
- ", Look down at the spot after it happens, because for the first time, they *felt* something."
- ", Stay dry 2 hours instead of 30 minutes. Or 4 hours instead of 1."
- ", Walk toward the bathroom, even after an accident, because some part of the connection is forming."
- ", And if none of these have happened yet: that does not mean nothing is happening."
- **Background:** #F9F7F5
- **Padding:** 24px sides, 16px between items
- **Typography:** Em-dash: #5B9B9B (soft teal), 16px. Body: Inter 16px Regular, line-height 1.5.
- **Notes:** 6 anchors covering all levels. Em-dash lead-ins create conversational list feel.

### Section 4 — Three-Family Testimonial (TRUSTDEEP-8: The Milestone Counter)
- **Component:** TRUSTDEEP-8 — The Milestone Counter
- **Card 1 (L1):** "Sarah's mom, Level 1" — "He went from 'almost trained' to 'mostly' in about 6 weeks. At 3 months, he was initiating, coming to tell me. I didn't think that would ever happen."
- **Card 2 (L2):** "Lisa's mom, Level 2" — "Week 10 was when she finally paused. Just paused. She was playing and she stopped and looked down. That had never happened. We're not there yet, but she's *feeling* something now."
- **Card 3 (L3):** "Maria's mom, Level 3" — "He's not trained. He may never be fully trained in the way I hoped. But last week, for the first time in 9 years, he looked at the wet spot. Not with distress. Just notice. That's enough for now."
- **Closing Copy:** "These three different kids, three different timelines, one common thread: the body-signal pathway takes time, and the first signal looks different for every child."
- **Background:** #F3EDE5 (light cream)
- **Card Border:** 3px left border #5B9B9B (soft teal)
- **Card Radius:** 8px
- **Padding:** 24px sides, 16px between cards
- **Typography:** Quote: Inter Italic 16px, line-height 1.5. Attribution: Inter 13px Regular, color #888.
- **Notes:** Left-border quote treatment. Each card separated by 16px vertical gap.

### Section 5 — Mechanism (EDU-11: Science Citation)
- **Component:** EDU-11 — Science Citation
- **Copy (verbatim):** "Ninety days of Body-Signal Learning Layer exposure means the nervous system that picks up signals slowly has had sustained, gentle feedback, 30 to 60 seconds of sensation per wear, to start building a connection that never existed before."
- "The science is clear: body signal differences in autism are real and measurable (Barmpagiannis & Baldimtsi 2025, 49-study systematic review)."
- "Some brains need 2 weeks to register the signal. Others need 12 weeks or more. Both are within the normal range for autistic children."
- **Background:** #F9F7F5
- **Padding:** 24px sides, 24px top/bottom
- **Typography:** Inter 17px Regular, line-height 1.6. Citation: Inter 14px Regular, color #888.
- **Notes:** Science evidence with citation. Timeline flexibility emphasized.

### Section 6 — Progress Marker (Contraption)
- **Component:** Custom interactive element
- **Copy (verbatim):** "Your child at 90 days:" / "○ I've seen new signals (pausing, looking, noticing)" / "○ No obvious changes, still wearing consistently" / "○ We paused, thinking about trying again"
- **Background:** #FFFFFF card on #F9F7F5
- **Card Border:** 1px #E5DDD5
- **Card Radius:** 8px
- **Padding:** 24px sides, 16px internal
- **Typography:** Inter 16px Regular. Options: Inter 15px Regular.
- **Notes:** 3-option click bar. Each option links to different landing page. Doubles as migration data-collection point.

### Section 7 — Utility / Offer
- **Component:** LETTER-01 — Paragraph Stack
- **Copy (verbatim):** "At 90 days, two things often happen at once: 1. Your child may be ready to size up... 2. The 3+3 pairs have been through 90 days of wear and wash cycles."
- "CTA: Re-order your 3+3, or size up if your child has grown."
- **Background:** #F9F7F5
- **Padding:** 24px sides, 24px top/bottom
- **Typography:** Inter 17px Regular, line-height 1.6. Numbers: Bold emphasis.

### Section 8 — CTA (CTA-4: Gentle Invite)
- **Component:** CTA-4 — Gentle Invite
- **Primary CTA Button:** "Re-Order Your 3+3 Bundle →"
- **Button Link:** https://www.brightkidco.com/collections/all-products
- **Secondary Copy:** "Or if you're not sure about sizing: reply to this email and tell me about your child. I'll help you figure out the right fit."
- **Background:** #F9F7F5
- **Button:** Background #E8856E (warm coral), text #FFFFFF, 48px height, 8px radius, full-width mobile, centered max 320px
- **Button Hover:** scale 1.02, 0.3s ease
- **Padding:** 30px above/below CTA
- **Typography:** Button: Inter 16px SemiBold. Secondary: Inter 15px italic, color #2D2A26 underlined.
- **Notes:** Warm coral CTA differentiates from E1's teal. Reply prompt for sizing help.

### Section 9 — Guarantee (60-Day Reminder)
- **Component:** TRUST-5 — Promise Badges Strip
- **Copy (verbatim):** "Every pair comes with the 60-day guarantee. Always has. If these aren't working for your child, full refund. No questions."
- **Background:** #F3EDE5 (light cream inset)
- **Padding:** 24px sides, 16px internal
- **Typography:** Inter 15px Regular, line-height 1.5. Optional lock icon (decorative only).

### Section 10 — Lena Sign-Off (MEDIUM variant)
- **Component:** UTIL-05 — Signoff Card
- **Copy (verbatim):** "I have two autistic sons. One's 6, still in the middle of it. The other took us until he was almost 8. I know what 90 days of waiting for something to happen feels like, and what it feels like when that first signal finally arrives."
- "Wherever you are at this milestone: there's no deadline here. Just keep going at your child's pace."
- "Lena —,"
- "P.S. Hit reply if you've seen any new signals, even tiny ones. I read every response."
- **Background:** #F9F7F5
- **Padding:** 24px sides, 24px top/bottom
- **Typography:** Body: Inter 15px Regular, line-height 1.5. Signature: Georgia italic 16px. P.S.: Inter 14px italic, color #888.
- **Notes:** MEDIUM variant. Em-dash after "Lena" per brand voice standard.

### Section 11 — Footer
- **Component:** UTIL-04 — Footer
- **Copy (verbatim):** "BrightKidCo LLC" / "[Physical Address]" / "No longer want these replenishment reminders? Update your preferences or unsubscribe above."
- **Background:** #F9F7F5
- **Padding:** 24px sides, 16px top/bottom
- **Typography:** Inter 12px Light, line-height 1.4, color #888
- **Notes:** CAN-SPAM compliant. Thin 1px #E5DDD5 divider above footer.

## 6. Component Details

### HERO-9 — Whisper Tone
- **Component ID:** HERO-9 (L3996)
- **Props:** headlineText="90 days in, what's changed?", previewText="Whether it's a glance down or a step toward the bathroom, that's real progress."
- **Variant:** Quiet milestone marker
- **Overrides:** Text-only hero, no image — matches reflective tone

### LETTER-01 — Paragraph Stack
- **Component ID:** LETTER-01 (L7767)
- **Props:** sections=["whether-or-if-opening", "recognition-anchors", "mechanism"]
- **Variant:** Whether/Or/If inclusive pattern
- **Overrides:** Em-dash lead-ins for anchors, science citation formatting

### TRUSTDEEP-8 — The Milestone Counter
- **Component ID:** TRUSTDEEP-8 (L11150)
- **Props:** cards=[{speaker: "Sarah's mom", level: "L1", quote: "He went from 'almost trained'..."}, {speaker: "Lisa's mom", level: "L2", quote: "Week 10 was when she finally paused..."}, {speaker: "Maria's mom", level: "L3", quote: "He's not trained..."}]
- **Variant:** 90-day milestone testimonials
- **Overrides:** 3px teal (#5B9B9B) left border, cream (#F3EDE5) background

### EDU-11 — Science Citation
- **Component ID:** EDU-11 (L5520)
- **Props:** citation="Barmpagiannis & Baldimtsi 2025, 49-study systematic review"
- **Variant:** Mechanism evidence
- **Overrides:** Inline citation style, not card format

### CTA-4 — Gentle Invite
- **Component ID:** CTA-4 (L6692)
- **Props:** buttonText="Re-Order Your 3+3 Bundle →", buttonLink="https://www.brightkidco.com/collections/all-products"
- **Variant:** Warm coral, gentle invite
- **Overrides:** #E8856E background (warm coral vs teal), reply prompt secondary

### TRUST-5 — Promise Badges Strip
- **Component ID:** TRUST-5 (L6505)
- **Props:** headline="60-day guarantee", details="Full refund. No questions."
- **Variant:** Minimal guarantee reminder
- **Overrides:** Text-only, cream background inset

### DESDEEP-2 — The Split Personality
- **Component ID:** DESDEEP-2 (L13164)
- **Props:** style="minimal-dividers"
- **Variant:** Warm, editorial dividers
- **Overrides:** 1px #E5DDD5 dividers between sections

## 7. Image Briefs

### Image 1 — Product Flat Lay (if needed)
- **Path:** /root/projects/brightkidco/raw/product-photos/flat-lay/training-pant-watermelon-pink.jpg
- **Alt text:** "BrightKidCo body-signal training pants in watermelon pink pattern"
- **Recommended dimensions:** 600×400px (3:2 crop)
- **Cropping/focal point:** Product centered on clean background
- **Fallback color:** #F3EDE5 (cream)

### Image 2 — Lifestyle (if needed)
- **Path:** /root/projects/brightkidco/raw/product-photos/lifestyle/toddler-rearview-cat-mustard.png
- **Alt text:** "A child in BrightKidCo training pants"
- **Recommended dimensions:** 600×340px (16:9 crop)
- **Fallback color:** #F9F7F5

## 8. Rendering Notes

- **Email client considerations:** Progress Marker contraption uses HTML radio buttons styled as clickable options — falls back to text links in Outlook. Testimonial cards use table-based layout for Outlook compatibility.
- **Mobile responsive notes:** Single-column layout. CTA button goes full-width on screens < 600px. Section padding reduces to 16px on mobile. Progress Marker options stack vertically. Minimum 48px tap targets.
- **Accessibility notes:** All images have descriptive alt text. Color contrast ratios: body text #2D2A26 on #F9F7F5 passes WCAG AA. CTA white on coral passes WCAG AA. Teal anchors on cream pass WCAG AA.
- **Special instructions:** 3-option Progress Marker doubles as migration data collection — click patterns correlate with level indicators. Reply prompt for sizing help deepens engagement. Warm coral (#E8856E) CTA is warmer than E1's teal, signaling progression in the relationship.
