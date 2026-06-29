## WIREFRAME — built 2026-06-28 by subagent-misc

```
=================================================================
WIREFRAME: pp-leveldetect-01-e1
Email ID: pp-leveldetect-01-e1
Flow: PP-Level Detection (Flow 09, GF ONLY — THE BIG LEVER)
Position: E1 (single, GF-only) | Day: 14 | Level: GF
Avatar: Group D (Overwhelmed Non-Selectors, ~25% of GF)
        primarily; also serves A, B, C, E as re-detection
        opportunity. Fires for any subscriber still carrying
        avatar_general at Day 14 post-purchase.
Lever: L4 (Lena) | Sign-off: Lena SHORT variant
Subject: "Quick question about your child"
Preheader: "One tap. Help us send you the right content."
=================================================================

NOTE: THE BIG MIGRATION LEVER. Single email. Fires once.
Only GF-only flow in the entire BrightKidCo system. Day 14
trust is at PEAK (transaction-confirmed intent, mechanism
understood, guarantee absorbed). The job: convert
avatar_general → l1/l2/l3 via SELF-SELECTION without
forcing the choice. Expected 40-50% migration rate for
Group D.

CONSTRAINTS (HARD):
- ZERO product pitch (already purchased, no upsell here)
- ZERO urgency (Day 14 is post-peak; this is detection,
  not conversion)
- LISTEN-ONLY FEEL (parent picks her story, we listen;
  we don't tell her what level her child is)
- LOWEST CTA AGGRESSION in entire GF system — story
  links styled as text-link or low-emphasis button
  (per GF-MASTER §20: "CTA aggression: Lowest of any
  GF mail. Story links styled as text-link or
  low-emphasis button.")
- NO offer. Pure detection. No code, no pricing, no
  bundle ask, no reorder ask.
- 70%-confidence floor rule: Buttons 1-3 update the tag.
  Button 4 re-confirms GF.

Vertically stacked, single column. No side-by-side. No
two-column. The 4 level cards are stacked vertically as
full-width click blocks, NOT as a side-by-side grid.
Lena SHORT sign-off.

=================================================================
[HEADER — STATIC, EXTRACTED ONCE FROM GIULIANO MOCKUP]
─────────────────────────────────────────────────────────────────
Logo centered, ~60px tall, muted warm grey
Same on all 125 emails
─────────────────────────────────────────────────────────────────

=================================================================
[SECTION 1: HERO + HEADLINE + BADGE — PERMISSION FRAME]
─────────────────────────────────────────────────────────────────
[VISUAL ELEMENT — BADGE]
ROLE: badge-low-commitment
INTENT: a small "Quick question" pill badge above the
        headline, set in Questrial 10.5px / 700 weight,
        uppercase, with generous letter-spacing. Signals
        low-commitment ask. The whole email is framed as
        a one-tap conversation, not a survey.
EXAMPLE_PICK: rounded pill, ~120px wide, muted teal
              background (#EAF6F2), teal text (#2BAEB4),
              centered or left-aligned above headline

[VISUAL ELEMENT — HERO IMAGE]
ROLE: hero-lifestyle-photo
INTENT: 220px lifestyle photo with ink border (standard
        BKC hero treatment). Warm tone, real-family
        imagery, NO product close-up, NO level-coded
        imagery. Image suggests "parent + child moment"
        without signaling diagnosis, age, or support
        level.
EXAMPLE_PICK: child and parent from behind at a
              bathroom door, soft natural light,
              warm color grading, ink border 2px solid
              #1F2D2F, no text overlay on image

[VISUAL ELEMENT — HEADLINE CARD]
HEADLINE: "Which one sounds like your child?"
          (Fraunces 34px, 700 weight, gradient text
          from teal → green on the phrase "your child")
SUBHEADLINE: "Two weeks in. Help us send you the right
              content." (Fraunces ~18px, warm clay,
              single line below headline)

INTENT: a question, not a directive. "Sounds like"
        invites recognition without forcing a label.
        Subhead grounds in Day 14 timing contextually
        ("Two weeks in") without urgency.

72px space above headline, 48px space below subhead
NO CTA in this section (headline IS the ask)

─────────────────────────────────────────────────────────────────

=================================================================
[SECTION 2: LEVEL SELECTION — 4 STACKED CLICKABLE BLOCKS]
─────────────────────────────────────────────────────────────────
HEADLINE: (none — the cards speak)
SUBHEADLINE: (none)

[VISUAL ELEMENT — BLOCK 1: LEVEL 1]
ROLE: level-card-clickable-block (L1, Verbal & Aware)
INTENT: full-width clickable card, solid 2px ink border,
        3px 3px 0 ink box-shadow (standard BKC card
        treatment). Green circle icon #5DD07A with 💬
        speech bubble emoji inside. Card title in
        Fraunces 17px / 700. Card description in
        Questrial 13px / 400. Card is a BUTTON-LINK,
        but rendered with no fill — looks like a card,
        behaves like a tap. Tapping updates the tag
        to avatar_level1.
EXAMPLE_PICK: 
  ┌───────────────────────────────────────────────────┐
  │  [💬 Green circle]  Verbal & aware                │
  │                    Can tell you when they need   │
  │                    to go, but signals arrive late │
  └───────────────────────────────────────────────────┘

CRITICAL: NO "Level 1" text. Symptom language only
(R1: symptom over label).

[VISUAL ELEMENT — BLOCK 2: LEVEL 2]
ROLE: level-card-clickable-block (L2, Sometimes Aware)
INTENT: full-width card, teal circle icon #2BAEB4 with
        🤔 thinking face emoji inside. Same card
        treatment as Block 1. Tapping updates the tag
        to avatar_level2.
EXAMPLE_PICK:
  ┌───────────────────────────────────────────────────┐
  │  [🤔 Teal circle]  Sometimes aware               │
  │                    Inconsistent signals, mixed   │
  │                    communication, pauses sometimes│
  └───────────────────────────────────────────────────┘

[VISUAL ELEMENT — BLOCK 3: LEVEL 3]
ROLE: level-card-clickable-block (L3, Rarely Aware)
INTENT: full-width card, pink circle icon #FFB5A0 with
        🫧 bubbles emoji inside. Tapping updates the
        tag to avatar_level3.
EXAMPLE_PICK:
  ┌───────────────────────────────────────────────────┐
  │  [🫧 Pink circle]  Rarely aware                  │
  │                    Doesn't react to wet, no      │
  │                    signal, needs full-body       │
  │                    sensation                     │
  └───────────────────────────────────────────────────┘

[VISUAL ELEMENT — BLOCK 4: LEVEL 4 — DASHED VARIANT]
ROLE: level-card-clickable-block (GF re-confirm)
INTENT: full-width card with DASHED teal border
        (#2BAEB4, 2px dashed) on mint background
        (#EAF6F2). Yellow circle icon #FFD866 with
        ❓ question mark emoji inside. Visually
        distinct from the solid-border cards above.
        Tapping re-confirms avatar_general. This is
        the permission escape valve — explicitly
        invites "not sure yet" without penalty.
EXAMPLE_PICK:
  ┌- - - - - - - - - - - - - - - - - - - - - - - - - -┐
  │   [❓ Yellow circle]  Not sure yet                 │
  │                    Still figuring it out, and     │
  │   (mint bg)         that's completely fine         │
  └- - - - - - - - - - - - - - - - - - - - - - - - - -┘

48px space above the first card, 32px between cards,
64px space below the last card

NO CTA BUTTON ELSEWHERE. The cards ARE the interaction
(no "submit" button, no "tap to confirm," no
"select one" CTA — tapping a card is the entire action).

─────────────────────────────────────────────────────────────────

=================================================================
[SECTION 3: HELPER TEXT — PERMISSION REINFORCEMENT]
─────────────────────────────────────────────────────────────────
HEADLINE: (none)

[VISUAL ELEMENT]
ROLE: helper-text-muted-centered
INTENT: a single muted-gray line beneath the cards,
        Questrial 14px / 400, centered. Re-frames the
        task as recognition, not classification:
        "Pick the one that sounds most like your child.
        We'll tailor what you see next." Lower-stakes
        than "select your child's level."
EXAMPLE_PICK: text-only, body color at 60% opacity,
              centered, single line, max-width 480px

NOTE: This is the LOWEST-friction microcopy in the
entire GF system. The next email in the flow tailors
content to whichever tag was set; helper text sets
the expectation that the parent will see different
content based on the choice. This is also the
"listen-only" cue: we are listening to HER
classification, not telling her.

48px space above, 48px space below
NO CTA in this section

─────────────────────────────────────────────────────────────────

=================================================================
[SIGNOFF — LENA SHORT VARIANT (required; "I read everything"
                                 is the brand-trust anchor)]
─────────────────────────────────────────────────────────────────
Background: warm cream (subtle separation, slightly deeper
            than main bg)
Body 16px:   "Thanks for being here. If you have a question,
             hit reply. You'll get me, not a template, not
             a bot. I read everything."
Closing:     "Lena —,"
Tagline:     "Customer Support · Mom of two autistic sons"
             (14px italic, warm clay)

NOTE: The "I read everything" line is critical for the
LITMUS test (Group B, Diagnosis-Rejecters). Lena's
peer-voice sign-off holds even in this detection-only
email. It says: a real person is on the other end of
this email, not an algorithm trying to label your
child.

NO P.S. on this email — the helper text is the P.S.
equivalent for this flow. Lower visual weight.

=================================================================
[FOOTER — STATIC, EXTRACTED ONCE FROM GIULIANO MOCKUP]
─────────────────────────────────────────────────────────────────
BrightKidCo
support@brightkidco.com
16,511 reviews · 4.9 ★ — 100,000+ parents trust BrightKidCo
[Unsubscribe] | [Manage preferences]
[Physical Address, City, State ZIP]
Questions? Reply to this email, Lena reads every response.
© 2026 BrightKidCo. All rights reserved.

=================================================================
ABOVE_FOLD_CHECK:
- Hero image visible above 400px (mobile)? YES (220px
  hero is the first visual element above fold)
- "Quick question" badge visible above 400px? YES (sits
  above the hero)
- Section 1 headline visible above 400px? YES
  ("Which one sounds like your child?")
- First level card (L1) visible above 400px on desktop?
  YES (cards begin immediately below subhead)
- PASS

=================================================================
IMAGE_COUNT:
- Total images in this email: 1 (lifestyle hero, 220px)
- Image positions: section 1 (above headline)
- Density category: 1 (text-dominant, single image)

=================================================================
COMPONENT_COUNT:
- Total distinct component ROLES in this email: 7
  - badge-low-commitment (section 1)
  - hero-lifestyle-photo (section 1)
  - headline-card-gradient (section 1)
  - level-card-clickable-block (section 2, repeated 4x
    with variant styling for Block 4)
  - helper-text-muted-centered (section 3)
  - signoff-lena-short (signoff block)
  - footer-static (footer block)
- Density category: 7 (image-light, interaction-heavy
  via cards, not via CTA button)

=================================================================
STRUCTURAL_INTENT (9 dimensions):
- Section count: 3 (3 body sections + signoff block)
- Section pattern: G (Hero/Permission → Level Selection
  → Helper Text → Signoff)
- Image density: 1 (single lifestyle hero, no product,
  no avatars on cards)
- Color temperature: warm cream/earth base + cool accents
  (teal #2BAEB4, green #5DD07A, pink #FFB5A0, yellow
  #FFD866, mint #EAF6F2) for the four level cards —
  cool palette is permitted ONLY for the level-card
  differentiation system, NOT for body prose
- Email length: short (~332 words per locked-profile;
  the cards do the lifting, not the prose)
- Argument structure: LISTEN-ONLY (no argument; the
  email asks, the parent answers, the system responds)
- Visual rhythm: tight (32-48px between cards, 48-72px
  at the section boundaries — tight enough for a tap
  interaction, open enough to read each card on its own)
- CTA position: distributed (4 clickable cards in the
  body, NO terminal CTA button — the email has no
  "next step" because the parent's tap IS the next
  step)
- Subject line type: permission-based curiosity hook
  ("Quick question about your child" — formula is
  lowest-commitment permission frame)

=================================================================
VARIANCE_CHECK:
- Previous email in flow+level: NONE (Flow 09 is a
  single-email flow, fires once at Day 14, no E2/E3)
- Baseline set. N/9 = N/A. (Standalone single — no
  predecessor to compare against. Stage 1 baseline
  established for any future Level Detection
  expansion by subagents downstream.)
- Note: PP-Level Detection is structurally unique in
  the entire system — the only email where the BODY
  is the CTA (cards ARE the interaction, no terminal
  button). Variance expectations vs. any other email
  in the system: section count, section pattern, and
  CTA position will all be anomalous. The lockfile
  shape (Shape G) reflects this.

=================================================================
SUPPRESSION PRIORITY (per GF-MASTER §20, CRITICAL):
At Day 14 for GF purchasers, this email SUPPRESSES:
  - Welcome GF E6 (Flow 01) — suppressed for purchasers
  - PP-Education D0-21 E3 (Flow 11) — suppressed
This email is the HIGHEST priority for Day 14 GF.
No other Day 14 mail fires alongside it.

=================================================================
POST-CLICK BEHAVIOR:
Click Button 1 (Verbal & aware):
  Tag updates avatar_general → avatar_level1
  Future flows re-route: PP-Extended Education switches
  from GF themes → L1 themes. Migration is permanent
  for Group D.

Click Button 2 (Sometimes aware):
  Tag updates avatar_general → avatar_level2
  Future flows re-route → L2 themes. Permanent for D.

Click Button 3 (Rarely aware):
  Tag updates avatar_general → avatar_level3
  Future flows re-route → L3 themes. Permanent for D.

Click Button 4 (Not sure yet):
  Tag remains avatar_general. GF mail continues. Future
  migration opportunities remain.

No click:
  Tag remains avatar_general. Single touchpoint fired.
  Migration becomes dependent on organic story link
  clicks. Estimated 5-10% organic migration post-PP-
  Level Detection vs 40-50% at the touchpoint itself.

=================================================================
EXPECTED PERFORMANCE (per GF-MASTER §20):
- Migration rate at PP-Level Detection: 40-50% of
  Group D × 25% Group D share × 50% GF share = 5.6%
  of total audience migrates at Day 14.
- Combined with other migration waves: Target 65-75%
  migration over lifecycle, bulk by Day 30.

=================================================================
TRUST-AFTER DELTAS (per GF-MASTER §20):
- Sub-Group A: 9.5 click / 9.0 no-click (+0.5 to +2.0)
- Sub-Group B (LITMUS): 8.5 click / 7.0 no-click with
  V16 PASS (+0.5 to +1.0). If V16 FAILS: 3.0 (-2.0 to
  -4.0). This email MUST pass V16 — symptom-only
  language, ZERO "autism," "ASD," or "Level 1/2/3."
- Sub-Groups C, D, E: comparable positive deltas.

=================================================================
CROSS-LEVEL CALIBRATION CONFIRMATION:
R1 (symptom over label): "Verbal & aware," "Sometimes
    aware," "Rarely aware," "Not sure yet" — no level
    numbers anywhere ✓
R2 (3-5 recognition anchors): 4 anchors (one per card)
    ✓
R3 (age ranges): NO ages mentioned — language is
    symptom-based, age-agnostic ✓
R4 (verbal + non-verbal inclusivity): L1 covers verbal
    ("Can tell you"), L2-L3 cover non-verbal ("pauses,"
    "doesn't react") ✓
R5 (timeline flexibility): No timeline promises. "Two
    weeks in" is contextual, not a promise ✓
R6 (low-bar success): "Still figuring it out, and
    that's completely fine" validates GF. No success
    metrics in this email ✓

V16 (GF-specific, symptom language only): PASS. Zero
    "autism," "ASD," "Level 1/2/3" anywhere in copy.

HOPE/REALISM LANDING: 60/40 toward realism. Detection
asks for honesty, not optimism.

FORBIDDEN LANGUAGE AUDIT: PASS
  No product mention. No offer. No urgency. No
  "easy," "quick," "shop now," "buy," "order,"
  exclamation marks, "Pre-K," "school deadline,"
  "subscribe," "register," "complete your profile."
  Tap is the action. No CTA button.

=================================================================
END OF WIREFRAME — pp-leveldetect-01-e1
=================================================================
```
