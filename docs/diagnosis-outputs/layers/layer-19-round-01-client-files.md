# Layer 19 — Round 01: Migration Strategy (Client File Extraction)

**Source Files:**
- `/root/projects/brightkidco/docs/extracted/DOC1-MASTER-FOUNDATION.txt`
- `/root/projects/brightkidco/docs/extracted/DOC6-USAGE-GUIDE.txt`
- `/root/projects/brightkidco/docs/extracted/Onboarding-todos.txt`
- `/root/projects/brightkidco/docs/WhatsApp Chat with Giuliano.txt` *(no migration content — business discussion about email code/AI videos)*

**Extraction Date:** 2026-05-25

---

## 1. The 4 Migration Paths

### Overview

BrightKidCo's subscriber base is segmented at pop-up signup into 4 avatar levels. However, ~50% of subscribers choose "Still figuring out" (General Fallback). The migration strategy converts these General Fallback subscribers into specific Level 1/2/3 segments over time, enabling level-specific email flows.

**Distribution at signup (DOC1 §1):**
- ~35% choose Level 1 (verbal, younger children, fewer attempts)
- ~40% choose Level 2 (mixed, sensory dominant, BCBA context)
- ~25% choose Level 3 (non-verbal, older children, years of attempts)
- ~50% choose "Still figuring out" = General Fallback

**Key insight from DOC6 §7:**
> "In the first 30 days after pop-up signup, the level distribution is DISTORTED, because pop-up self-selection doesn't perfectly correlate with clinical level."

**DOC6 §7 — Migration Philosophy:**
> "PRINCIPLE 3: MIGRATION > FORCED SEGMENTATION. If unclear which level: use General Fallback, then migrate through Click/Reply/Purchase Hints. Never guess."

---

### Migration Path 1: Click-Based Migration (Post-Purchase Level Detection)

**Trigger:** Order Placed + Day 14
**Flow:** Post-Purchase Level-Detection Mail (Flow #12)
**Segmentation:** Cross-level (asks level)

**How it works (DOC1 §17, §19; DOC6 §7):**
- Day 14 after purchase, ALL customers who don't have a level tag receive a level-detection email
- The email contains 4 buttons/options for self-categorization
- Clicking a button assigns the corresponding avatar tag
- This is the PRIMARY migration mechanism for General Fallback subscribers

**DOC6 §7 — Visual Flow:**
```
├─ Day 14: Level-Detection Mail (DOC 5)
│ ├─ Click on L1 button → avatar_level1
│ ├─ Click on L2 button → avatar_level2
│ ├─ Click on L3 button → avatar_level3
│ └─ No click → stays avatar_general
```

**DOC1 §24 — Buyer Journey:**
> "Day 14 (Level Detection): EMOTIONAL STATE: Engaged, wants help. TIPPING POINT: 'Tell us about your child' — felt-seen"

**Tag Logic (DOC1 §19):**
- Klaviyo property: `avatar_level` (string: "level1" / "level2" / "level3" / "general")
- Segment filter: `if avatar_level = unknown` (triggers Day 14 mail)
- After click: tag updated, future flows route to level-specific variant

**Fallback behavior:** No click = stays `avatar_general`. Continues receiving cross-level (DOC 5) emails. Can be re-targeted in future level-detection attempts.

---

### Migration Path 2: Reply-Based Migration

**Trigger:** Subscriber replies to any email
**How it works (DOC6 §7 — RS-Holistic Workflow):**

When a subscriber replies to any email (encouraged in every Lena sign-off), the reply content reveals level indicators:

- **Level 1 indicators:** Mentions Pre-K pressure, child is verbal, "almost trained," age 3-5
- **Level 2 indicators:** Mentions BCBA, sensory issues, "tried everything," age 5-7
- **Level 3 indicators:** Non-verbal child, age 6+, adult diapers, Medicaid, years of attempts

**Lena sign-off encourages replies (DOC1 §13):**
> "If you reply, you get me — not a template, not a bot. I read everything."
> "Reply if anything in this resonates with what you've been seeing at home. I read every one."

**Manual tag application:** Reply content is read by support (Lena), who manually updates the avatar_level property in Klaviyo based on level indicators in the reply.

**Tag application rules:** Same as Path 1 — `avatar_level` property updated to "level1", "level2", or "level3".

---

### Migration Path 3: Purchase-Based Migration (Purchase Hints)

**Trigger:** Purchase behavior analysis
**How it works (DOC6 §7):**

Purchase data provides indirect level signals:

**Underwear size → age hint → level hint:**
- Smaller sizes (2T-4T) → more likely Level 1 (younger, verbal)
- Medium sizes (5-7) → more likely Level 2 (sensory dominant)
- Larger sizes (8+) → more likely Level 3 (older, non-verbal)

**Bundle size → experience hint:**
- 1 Pair buyer → skeptical, "just trying" → possibly Level 3 Phase 4
- 3+3 buyer → moderate commitment → possibly Level 1-2
- 5+5 buyer → high investment, "tried everything" → possibly Level 2-3

**DOC1 §19 — Custom properties needed:**
- `last_purchase_pack_size` (string: "1pair" / "3+3" / "5+5")

**DOC6 §5 — Offer targeting by level:**
> "RECOMMEND 5+5 BUNDLE FOR: Level 2-3 audiences (higher investment readiness)"
> "RECOMMEND 1 PAIR FOR: Very skeptical audience (Level 3 Phase 4)"

**Tag application:** Manual or automated based on purchase data analysis. Updates `avatar_level` property.

---

### Migration Path 4: Post-Purchase Level Detection (Re-engagement)

**Trigger:** Day 14 + no level tag + active engagement
**How it works (DOC1 §17, DOC6 §7):**

This is an extension of Path 1 for subscribers who:
1. Didn't click the Day 14 level-detection email
2. Are still engaged (opening emails, clicking other links)
3. Show behavioral patterns that suggest a level

**Behavioral signals:**
- Opens/clicks on specific symptom-related content
- Time spent on specific product pages
- Engagement with level-specific testimonials
- Response to "Whether...Or...If..." language patterns (DOC 5 signature)

**DOC6 §7 — Segmentation Philosophy:**
> "PRINCIPLE 1: SYMPTOM-FIRST, NEVER LEVEL LABELS. In mail copy NEVER say 'Level 2'. Instead describe symptoms. The tag is backend logic, not content."

**Re-targeting:** Subscribers who don't migrate on Day 14 can be re-targeted in:
- Winback flows (Phase 2-3)
- Extended Education flows
- Mid Check-In flows (Day 30-60)

---

## 2. Tag Naming Conventions and Application Logic

### Tag Architecture (DOC1 §19)

**Primary Tags (from Pop-up):**
| Tag | Pop-up Button Text | Description |
|-----|-------------------|-------------|
| `avatar_level1` | "Talks about potty but won't actually do it" | Verbal, 3-5 years, 1-3 failed attempts |
| `avatar_level2` | "Sensory issues, tried many methods" | Mixed verbal, 5-7 years, 3-5+ failed attempts |
| `avatar_level3` | "Non-verbal or high support needs" | Non-verbal, 6-10+ years, 5+ years attempts |
| `avatar_general` | "Still figuring out what's going on" | Cross-level, diagnostic-pending, label-rejecters |

**Behavioral Tags:**
| Tag | Trigger | Purpose |
|-----|---------|---------|
| `welcome_completed` | Welcome flow finished | Prevents re-entry |
| `welcome_completed_no_purchase` | Welcome flow finished, no purchase | Targets for FAQ/Winback |
| `post_purchase_active` | Purchase + engagement | Routes to PP flows |
| `at_risk_no_open` | Day 3-7 no opens | Triggers Support At-Risk flow |
| `inactive_60_days` | 60 days no engagement | Triggers Winback Path A |
| `inactive_120_days` | 120 days no engagement | Triggers Sunset flow |

**Purchase Tags:**
| Tag | Trigger | Purpose |
|-----|---------|---------|
| `buyer_1pair` | 1-pair purchase | Replenishment Path A |
| `buyer_3plus3` | 3+3 bundle purchase | Replenishment Path B |
| `buyer_5plus5` | 5+5 bundle purchase | Replenishment Path C |
| `repeat_buyer` | 2+ purchases | VIP treatment |
| `vip_buyer` | 3+ orders | High LTV segment |

### Tag Application Rules

**Automatic application:**
1. Pop-up form submit → `avatar_level1/2/3/general` tag applied immediately
2. Klaviyo events → behavioral tags applied via flow logic
3. Purchase events → buyer tags applied via Shopify integration

**Manual application (via migration):**
1. Day 14 level-detection click → `avatar_level` property updated
2. Reply content analysis → `avatar_level` property updated
3. Purchase hint analysis → `avatar_level` property updated

**Tag Removal Rules:**
- Tags are NOT removed — they are UPDATED
- `avatar_general` → replaced by `avatar_level1/2/3` upon migration
- Behavioral tags persist as historical markers
- `welcome_completed` prevents flow re-entry (never removed)

### Klaviyo Profile Properties (DOC1 §19)

**Standard properties:**
- `first_name`, `last_name`, `email`, `created_at`, `consent`

**Custom properties (required for migration):**
| Property | Type | Values | Purpose |
|----------|------|--------|---------|
| `avatar_level` | string | "level1" / "level2" / "level3" / "general" | Primary migration target |
| `child_age` | string | (optional) | Age-based level inference |
| `signup_source` | string | "popup" / "checkout" / "referral" | Source tracking |
| `welcome_flow_completed` | boolean | true/false | Flow control |
| `last_purchase_pack_size` | string | "1pair" / "3+3" / "5+5" | Purchase hint |
| `vip_customer` | boolean | true/false | High LTV flag |

---

## 3. Re-engagement Rules for Non-Migrating Subscribers

### Definition: Non-Migrating Subscribers

Subscribers who remain `avatar_general` after:
1. Day 14 level-detection email (no click)
2. No replies with level indicators
3. No purchase behavior that suggests a level
4. Still engaged (opening emails)

### Re-engagement Flow Sequence

**Phase 2 Flows (Months 3-4):**

1. **Post-Purchase Mid Check-In Flow (Flow #15)**
   - Trigger: Day 30-60
   - Mails: 3
   - Segmentation: Cross-level
   - Purpose: Re-engage with "How are you doing?" + gentle level-sensing questions

2. **Post-Purchase Extended Upsell Flow (Flow #14)**
   - Trigger: Day 28 + level tag (or no tag)
   - Mails: 3
   - Segmentation: Level-aware
   - Purpose: Upsell with level-appropriate offers

3. **Review Request Flow (Flow #20)**
   - Trigger: Day 30 post-purchase
   - Mails: 2
   - Segmentation: Cross-level
   - Purpose: Engagement + level inference from review content

**Phase 3 Flows (Months 5-6):**

4. **Winback Path A (Post-Buyer Inactive) (Flow #21)**
   - Trigger: Last purchase + 90 days no engagement
   - Mails: 3
   - Segmentation: 4 level variants
   - Purpose: Re-engage inactive buyers with level-specific content

5. **Winback Path B (Subscriber Never-Bought) (Flow #22)**
   - Trigger: Signup + 60 days no purchase
   - Mails: 3
   - Segmentation: 4 level variants
   - Purpose: Re-engage non-buyers

6. **Sunset Flow (Flow #23)**
   - Trigger: 120 days inactive
   - Mails: 2
   - Segmentation: Cross-level
   - Purpose: Final re-engagement before list cleanup

### Re-engagement Language Patterns (DOC6 §7)

**"Whether...Or...If..." pattern (DOC 5 signature):**
> "Whether your child is verbal or non-verbal..."
> "Or if they've been in pull-ups for years..."
> "If they show sensory differences..."

This language pattern allows General Fallback emails to resonate across all levels without forcing a level assignment.

### Exit Conditions for Non-Migrating Flows

**Every flow must have (DOC1 §19):**
- Made a purchase (for conversion flows)
- Unsubscribed
- Already in higher-priority flow

**Migration triggers within flows:**
- Click on level-specific content → update `avatar_level`
- Reply with level indicators → manual tag update
- Purchase of level-specific bundle → automated tag update

---

## 4. Migration Strategy: Rollback and Failure Handling

### Rollback Rules

**No explicit rollback mechanism exists in the docs.** The system is designed as a one-way migration:
- `avatar_general` → `avatar_level1/2/3` (forward only)
- Tags are updated, not toggled
- No "un-migration" flow exists

**If mis-migration occurs:**
- Manual correction via Klaviyo profile edit
- No automated detection of incorrect level assignment
- Level-specific emails may feel "off" → subscriber may unsubscribe or go inactive

### Migration Failure Scenarios

**Scenario 1: Subscriber clicks wrong level button**
- Result: Receives level-specific emails that don't match their situation
- Detection: Low engagement, replies with confusion, unsubscribe
- Fix: Manual tag correction after reply analysis

**Scenario 2: Subscriber never clicks any level button**
- Result: Stays in `avatar_general` indefinitely
- Impact: Receives cross-level (DOC 5) content forever
- Mitigation: Re-engagement flows (Winback, Sunset) offer repeated level-detection opportunities

**Scenario 3: Purchase hints are ambiguous**
- Result: Wrong level inferred from purchase data
- Detection: Engagement metrics diverge from level-specific benchmarks
- Fix: Manual review of purchase patterns + reply content

### Cross-Level Calibration Rules (DOC1 §22)

These rules ensure General Fallback emails work for ALL levels, reducing urgency of migration:

1. **Symptom Description Over Level Label**
   > "NEVER: 'If your child is Level 2 or Level 3...' YES: 'If your child doesn't feel when they need to go...'"

2. **3-5 Recognition Anchors Per Mail**
   - Level 1: "Sits 20 minutes on toilet and nothing happens"
   - Level 2: "Pees immediately when pull-up comes off"
   - Level 3: "Doesn't react to wet diaper"

3. **Age Ranges Instead of Fixed Ages**
   > "NEVER: 'For 5-year-olds...' YES: 'For kids 3 to 10+...'"

4. **Verbal/Non-Verbal Inclusivity**
   > "Look for signals: pulling at their pants, looking down, saying 'wet,' or showing you with a gesture."

5. **Timeline Flexibility**
   > "NEVER: 'In 30 days your child will...' YES: 'Some kids show first signals after 2 weeks. Others need 8 weeks. Both are normal.'"

6. **Success Metrics Low Bar**
   - "Look at the wet spot for the first time"
   - "Pull at their pants in awareness"
   - "Walk toward the bathroom (even after the accident)"
   - "Stay dry 2 hours instead of 30 minutes"

---

## 5. Subscriber Segment Cross-Reference

### Level Profiles

| Level | Age | Verbal | Attempts | Hope | Dominant Phase | Audience % |
|-------|-----|--------|----------|------|----------------|------------|
| Level 1 | 3-5 | Yes | 1-3 | 70% | Phase 2 | ~35% |
| Level 2 | 5-7 | Mixed | 3-5+ | 40% | Phase 3 | ~40% |
| Level 3 | 6-10+ | No | 5+ years | 20% | Phase 4 | ~25% |
| General | 3-10+ | Any | Any | 50/50 | Mixed | ~50% volume |

### Migration Priority

**Highest priority:** General Fallback → Level 2 (largest segment, highest conversion potential)
**Second priority:** General Fallback → Level 1 (Pre-K urgency creates conversion window)
**Third priority:** General Fallback → Level 3 (dignity-first, longer timeline, Medicaid sensitivity)

### Flow Routing After Migration

**Before migration (avatar_general):**
- Welcome Flow GF (DOC 5)
- Cart/Checkout/Browse (Cross-level, DOC 5)
- All Post-Purchase Day 0-14 (Cross-level, DOC 5)

**After migration (avatar_level1/2/3):**
- Welcome Flow L1/L2/L3 (DOC 2/3/4)
- Post-Purchase Extended Education (4 level variants)
- Winback Path A/B (4 level variants)
- Level-specific symptom content

**Cross-level flows remain cross-level regardless of migration:**
- Cart Abandonment
- Checkout Abandonment
- Browse Abandonment
- Order Confirmation
- Shipping Notification
- Arrived & Welcome
- PP-Direct Upsell

---

## 6. Verbatim Rules from DOC Files

### Migration Strategy Rules (DOC6 §7)

> "DOC 5 (General Fallback) is the doc you'll use the most. Why: ~50% of real volume is General Fallback. ALL Cart/Checkout/Browse mails are Cross-Level. ALL Post-Purchase Day 0-14 mails are Cross-Level. Migration anchors transform General audience into Level segments."

> "DOC 5 has the 'Whether...Or...If...' language, the universal symptom hooks and the migration strategy. It is the operationally most important doc."

> "PRINCIPLE 3: MIGRATION > FORCED SEGMENTATION. If unclear which level: use General Fallback, then migrate through Click/Reply/Purchase Hints. Never guess."

> "PRINCIPLE 1: SYMPTOM-FIRST, NEVER LEVEL LABELS. In mail copy NEVER say 'Level 2'. Instead describe symptoms. The tag is backend logic, not content."

### Tag Logic Rules (DOC1 §19)

> "KLAVIYO TAGS (Lists/Segments): From Pop-up: avatar_level1, avatar_level2, avatar_level3, avatar_general"

> "Post-Purchase Flows: Day 0-21 Education → buyer_* tag + days_since_purchase. Day 14 Level-Detection → if avatar_level = unknown. Level-Specific Education (Phase 3) → avatar_level tag known after Day 14."

> "EXIT CONDITIONS (critical for Klaviyo): EVERY flow must have these exit conditions: Made a purchase (for conversion flows), Unsubscribed, Already in higher-priority flow."

### Segmentation Rules (DOC6 §7)

> "RULE: Before level tag known → Cross-Level (DOC 5). After level tag known → Level-specific (DOC 2/3/4). For high-velocity flows (Cart/Checkout) → Cross-Level even if tag known (speed > segmentation)."

> "PRACTICAL IMPLICATIONS: 1. When Yurishizu asks you for a mail, she ALWAYS asks: Which flow? Which avatar (Level 1/2/3/General/Cross-Level)? 2. Your doc lookup is: DOC 1 always (Foundation) + Plus one of DOC 2-5 based on avatar. 3. Cross-Level mails (Cart, Checkout, Browse, Post-Purchase Day 0-14) ALWAYS use DOC 5 + DOC 1."

### Onboarding Context (Onboarding-todos.txt)

> "ABOUT THE AUDIENCE: 4 sub-segments (Level 1, 2, 3, General Fallback). ~50% of real volume is General Fallback (cross-level). Mostly Phase 2-3 emotional state (skeptical, tried many things). Highly sensitive to fake marketing language."

---

## 7. Summary: Migration Strategy Architecture

### The Migration Funnel

```
POP-UP SIGNUP
├── 35% → Level 1 (immediate level-specific flows)
├── 40% → Level 2 (immediate level-specific flows)
├── 25% → Level 3 (immediate level-specific flows)
└── 50% → General Fallback (cross-level flows)
         │
         ├── Day 14: Level-Detection Mail (Click-Based)
         │   ├── Click L1 → Migrate to Level 1
         │   ├── Click L2 → Migrate to Level 2
         │   ├── Click L3 → Migrate to Level 3
         │   └── No click → Stay General
         │
         ├── Reply Analysis (Reply-Based)
         │   └── Reply content → Manual level assignment
         │
         ├── Purchase Hints (Purchase-Based)
         │   └── Size/Bundle → Inferred level
         │
         └── Re-engagement Flows (Day 30-120)
             ├── Mid Check-In (Day 30-60)
             ├── Winback Path A (90 days inactive)
             ├── Winback Path B (60 days no purchase)
             └── Sunset (120 days inactive)
```

### Key Metrics to Track

1. **Migration Rate:** % of General Fallback → Level-specific within 30 days
2. **Click-Through on Level Detection:** % who click a level button on Day 14
3. **Reply-Based Migration:** # of replies containing level indicators
4. **Purchase Hint Accuracy:** Correlation between inferred level and actual engagement
5. **Time-to-Migration:** Average days from signup to level assignment
6. **Non-Migrator Retention:** % of General Fallback who remain engaged without migration

---

*End of Layer 19 — Round 01 Client File Extraction*
