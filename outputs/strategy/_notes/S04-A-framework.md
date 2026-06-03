# S04-A: Pop-Up Strategy Framework — The Entry Point to Everything

**Document:** S04-A-framework.md
**Project:** BrightKidCo (BKC)
**Date:** May 28, 2026
**Wave:** A1 — Pop-Up Strategy
**Source Synthesis:** 01-Customer-Avatar, 10-Traffic-Channel-Map, Diagnosis L8/L15/L38, Popup Research, Competitor Email Strategies, Ingestion Notes

---

## 1. PHILOSOPHY: THE POP-UP AS SEGMENTATION ENGINE

The pop-up is not a discount collector. It is the **entry point to the entire BKC email ecosystem**. Every visitor who lands on brightkidco.com either self-identifies into one of four avatar levels (L1/L2/L3/GF) through the pop-up, or is lost to the General Fallback. There is no third option.

**Core principle:** The pop-up asks a symptom-based question → the visitor's answer determines the Klaviyo tag → the tag routes the subscriber to the correct Welcome Flow variant. This single decision determines the ENTIRE email journey — tonality, cadence, offer, urgency, and conversion path.

(Sources: Layer-08-Segmentation-Mechanics.md §2; DOC6-USAGE-GUIDE.txt — Pop-up specification; 01-Customer-Avatar.md §3.1 — Avatar Level Decision Tree)

---

## 2. THE VISITOR'S DECISION TREE — FULL FLOW

```
Visitor arrives on brightkidco.com
  │
  ├── Already subscribed? → SUPPRESS pop-up → (no pop-up)
  │
  ├── Recent purchaser (30d)? → SUPPRESS pop-up → (no pop-up)
  │
  └── New visitor or unsubscribed?
        │
        ▼
  8-15 second timer OR exit-intent trigger
        │
        ▼
  POP-UP APPEARS (Step 1)
  ┌─────────────────────────────────────┐
  │  HEADLINE: "Get 10% off + a potty   │
  │  training plan built for kids       │
  │  like yours."                       │
  │                                     │
  │  SUBHEAD: "What describes your      │
  │  child best?"                       │
  │                                     │
  │  [email field — REQUIRED]           │
  │  [first name field — REQUIRED]      │
  │                                     │
  │  BUTTON 1: "Talks about potty but   │
  │  won't actually do it"              │
  │  └→ avatar_level1                   │
  │                                     │
  │  BUTTON 2: "Sensory issues, tried   │
  │  many methods"                      │
  │  └→ avatar_level2                   │
  │                                     │
  │  BUTTON 3: "Non-verbal or high      │
  │  support needs"                     │
  │  └→ avatar_level3                   │
  │                                     │
  │  BUTTON 4: "Still figuring out      │
  │  what's going on"                   │
  │  └→ avatar_general                  │
  │                                     │
  │  CTA: [Get My 10% Code]            │
  │  Privacy: "We respect your inbox.   │
  │  Unsubscribe anytime."              │
  └─────────────────────────────────────┘
        │
        ▼
  Step 2 — Offer Delivery (Immediate)
  ┌─────────────────────────────────────┐
  │  "Your code is ready."              │
  │  WELCOME10  ← Code displayed in pop-up│
  │  "Auto-applies at checkout.         │
  │   Valid 7 days."                    │
  │  [Shop Now]    [or keep browsing]   │
  └─────────────────────────────────────┘
        │
        ▼
  Tag applied → Welcome Flow triggered
  ┌─────────────────────────────────────┐
  │  avatar_level1 → Welcome L1 (DOC2)  │
  │  avatar_level2 → Welcome L2 (DOC3)  │
  │  avatar_level3 → Welcome L3 (DOC4)  │
  │  avatar_general → Welcome GF (DOC5) │
  └─────────────────────────────────────┘
```

(Sources: Layer-08-Segmentation-Mechanics.md §2; DOC6 §5 — Discount codes; Layer-15-Offers.md §4 — Pricing format rules)

---

## 3. THE FOUR BUTTONS — SYMPTOM-BASED LANGUAGE ONLY

### Rule: NO level labels in button text
Never write "Level 1", "Level 2", "Level 3", "Mild", "Moderate", "Severe" in the pop-up. Use symptom-based language that the parent recognizes in their own child.

| Button Label (Visible) | Hidden Tag | Hidden Profile Doc | Emotional Trigger | Primary Avatar |
|---|---|---|---|---|
| "Talks about potty but won't actually do it" | `avatar_level1` | DOC2 (L1) | "He gets it but he doesn't get it" — bafflement at inconsistency | Sarah, ~35% |
| "Sensory issues, tried many methods" | `avatar_level2` | DOC3 (L2) | "I've tried everything" — method-cycling exhaustion | Lisa, ~40% 🏆 |
| "Non-verbal or high support needs" | `avatar_level3` | DOC4 (L3) | "Maybe never" — dignity-first, long journey | Maria, ~25% |
| "Still figuring out what's going on" | `avatar_general` | DOC5 (GF) | "Just need help" — uncertain diagnosis or didn't identify | ~50% real volume |

### Button copy rationale (from parent verbatim language):
- **Button 1** uses the L1 marker phrase pattern: "He gets it, but he doesn't get it" → "Talks about potty but won't actually do it" (Source: 01-Customer-Avatar.md §3.2; MASTER-INGESTION-COMPENDIUM.md §2.2)
- **Button 2** uses "tried many methods" — the L2 trauma response of method-cycling (Source: 01-Customer-Avatar.md §3.3; MASTER-INGESTION-COMPENDIUM.md §2.3)
- **Button 3** avoids diagnostic labels; uses "non-verbal" and "high support needs" — dignified language (Source: 01-Customer-Avatar.md §3.4; MASTER-INGESTION-COMPENDIUM.md §2.4)
- **Button 4** uses "still figuring it out" — leaves room for uncertainty without pressure (Source: 01-Customer-Avatar.md §3.5)

(Sources: 01-Customer-Avatar.md §3.1 — Avatar Level Decision Tree; Layer-08-Segmentation-Mechanics.md §2 — Pop-up specification; DOC-SYSTEM-NOTES.md §2 — All 4 avatar level profiles; GIULIANO-DEMANDS.md §1 — The Four-Level Segmentation System)

---

## 4. OFFER & INCENTIVE STRUCTURE

### Primary Offer: 10% Off First Order + Personalized Potty Training Plan
- **Code:** WELCOME10
- **Format:** Displayed DIRECTLY in pop-up Step 2 (not sent via email)
- **Validity:** 7 days
- **Auto-apply URL:** brightkidco.com/discount/10%25OFF-WELCOME
- **Coupon type:** Unique single-use Shopify codes (prevents sharing on coupon sites)

### Why 10% Off + Plan (Not Just Discount)
The BKC pop-up differentiates from competitors by offering **personalized value** ("a potty training plan built for kids like yours") plus a monetary incentive. This dual offer structure:
- Entices visitors who respond to discounts (baseline)
- Frames the email capture as educational, not transactional (higher-quality subscribers)
- Competitors offer only discounts (Peejamas: 25%, Zipease: 20%) — BKC's "plan" framing is unique in market

(Source: POPUP-LEAD-MAGNET-RESEARCH.md §1 — Pattern 5: Welcome Discount Popup; COMPETITOR-EMAIL-STRATEGIES.md §2 — Competitive gaps)

### No Offer Required (Fallback) — A/B Test Candidate
If A/B testing shows that "no coupon, just the plan" performs within 20% of "10% off + plan," BKC can save margin by removing the discount entirely. (Source: POPUP-LEAD-MAGNET-RESEARCH.md §5 — A/B Test 1 rationale)

---

## 5. TIMING RULES

### Desktop
| Pop-Up Type | Trigger | When | Notes |
|---|---|---|---|
| **Primary pop-up** | Timed delay | 8-15 seconds after arrival | Gives visitor time to orient |
| **Exit-intent backup** | Mouse cursor moves toward close/address bar | When visitor is about to leave | Safety net — different from primary offer? |

### Mobile
| Pop-Up Type | Trigger | When | Notes |
|---|---|---|---|
| **Primary pop-up** | Timed delay | 15-30 seconds (longer — mobile users orient slower) | Exit-intent NOT available on mobile |
| **Scroll-trigger backup** | 40-50% scroll depth | On blog/product pages | Indicates engagement |

### Frequency Capping
| Rule | Setting |
|---|---|
| Per session | Max 1x per visitor per session |
| Post-dismissal | Suppress for 7 days before re-showing |
| Post-subscription | NEVER show again (existing subscriber) |
| Post-purchase | NEVER show for 30 days (buyer is already captured) |

### Suppression Rules (Apply to ALL pop-up variants)
- **Existing email subscribers** — already on list, no pop-up
- **Existing SMS subscribers** — already opted in
- **Recent purchasers (30 days)** — don't interfere with post-purchase relationship
- **VIP customers** — show VIP-specific content (Phase 2+)
- **Checkout page** — NEVER show pop-ups on checkout page

(Sources: POPUP-LEAD-MAGNET-RESEARCH.md §6 — Trigger Configuration; EMAIL-COLLECTION-POPUP-STRATEGY skill §8.3-8.6 — Timing rules, suppression rules; Layer-08-Segmentation-Mechanics.md §2 — Frequency specifications)

---

## 6. DESIGN SPECIFICATIONS

### Visual Rules
| Element | Specification | Source |
|---|---|---|
| **Headline** | "Get 10% off + a potty training plan built for kids like yours." | L8 §2, DOC1 |
| **Subheadline** | "What describes your child best?" | L8 §2 |
| **CTA Button** | "Get My 10% Code" — highest contrast color (Brand Green #039902) | L38 §6 |
| **Close mechanism** | "No, thank you" text link BELOW submit button — NO X button | Email-Collection-Popup-Strategy §7.6 |
| **Mobile** | Full-screen takeover, all elements above fold, thumb-friendly button (min 48px) | L38 §14; L29 Visual Calibration |
| **Desktop** | Large center modal covering 75%+ of screen | Email-Collection-Popup-Strategy §7.4 |
| **Font** | Questrial weight 400 (never bold for body) | L38 §6 |
| **Colors** | Brand Green #039902 (CTA), Dark Text #1A1A1A (body), Off-White BG #FAF9F7 | L38 §6 |
| **Overlay** | Dark semi-transparent overlay over page content | Email-Collection-Popup-Strategy §7.1 |

### Copy Length Rules
- **Total headline + body:** Under 10 words (skills mandate)
- **Buttons:** 4-8 words each (self-explanatory, no scrolling needed)
- **Success state:** "Your code is ready." + code + "Auto-applies at checkout. Valid 7 days."
- **Privacy note:** "We respect your inbox. Unsubscribe anytime."

### Brand Consistency
- Use exact brand fonts (Questrial), colors (Green #039902, Cream #FBF7EB)
- Logo displayed in pop-up
- No generic stock photos — use BKC character artwork (Melon Pop, Lily Pop, Fynn Fox) or product imagery
- Success screen should feel like a celebration, not a transaction

(Sources: Layer-38-Brand-Constants.md §6 — Font & Colors; EMAIL-COLLECTION-POPUP-STRATEGY skill §7 — Design Principles; POPUP-LEAD-MAGNET-RESEARCH.md §6 — Klaviyo implementation notes)

---

## 7. TECHNICAL IMPLEMENTATION — KLAVIYO

### Form Configuration
| Element | Setting |
|---|---|
| **Platform** | Klaviyo Native Forms (Phase 1) → Amped/Justuno/Privy (Phase 2, if conversion testing justifies) |
| **Form type** | Popup (modal) on desktop; Full-screen on mobile |
| **Trigger** | Timed (8-15s) + Exit-intent (desktop); Timed (15-30s) + Scroll 40% (mobile) |
| **Multi-step** | Step 1: Email + First Name + Button Selection → Step 2: Coupon Display |
| **Tag on submit** | Button mapping: Button 1 = `avatar_level1`, Button 2 = `avatar_level2`, Button 3 = `avatar_level3`, Button 4 = `avatar_general` |

### Profile Properties Created on Submit
| Property | Value | Purpose |
|---|---|---|
| `email` | [submitted] | Primary identifier |
| `first_name` | [submitted] | Personalization |
| `avatar_level` | `level1`/`level2`/`level3`/`general` | Primary segmentation |
| `signup_source` | `popup` | Track acquisition channel |
| `welcome_flow_completed` | `false` | Binary gate for post-welcome flows |

### Tags Applied on Submit
| Button | Tag |
|---|---|
| Button 1 | `avatar_level1` |
| Button 2 | `avatar_level2` |
| Button 3 | `avatar_level3` |
| Button 4 | `avatar_general` |

### Flow Triggered
Each tag triggers the corresponding Welcome Flow variant (8 emails × 4 levels = 32 unique emails):
- `avatar_level1` → Welcome Flow L1 (DOC2 — Pre-K urgency, shorter cadence)
- `avatar_level2` → Welcome Flow L2 (DOC3 — science-heavy, BCBA-respectful, slower cadence)
- `avatar_level3` → Welcome Flow L3 (DOC4 — dignity-first, slowest cadence, ZERO urgency)
- `avatar_general` → Welcome Flow GF (DOC5 — cross-level, symptom language, migration anchors)

(Sources: Layer-08-Segmentation-Mechanics.md §2.1-2.2, §3 — Klaviyo profile properties; Layer-08-Segmentation-Mechanics.md §5.1 — Welcome Flow routing; GIULIANO-DEMANDS.md §3 — Welcome Flow architecture)

---

## 8. MOBILE vs. DESKTOP VARIANTS

### Desktop Variant
| Element | Desktop Setting |
|---|---|
| **Format** | Large centered modal overlay, 75%+ of screen height |
| **Trigger** | Primary: 8-15s timed. Secondary: Exit-intent |
| **Close** | "No, thank you" text link below CTA |
| **Post-dismissal** | Teaser tab appears: "Still want 10% off? →" |
| **Image** | Product shot or character art on right side of modal |
| **Code display** | Prominent large font coupon code in Step 2 |

### Mobile Variant
| Element | Mobile Setting |
|---|---|
| **Format** | Full-screen takeover (covers entire screen) |
| **Trigger** | Primary: 15-30s timed. Secondary: 40% scroll depth |
| **Close** | "No, thank you" text link below CTA — no scrolling required for close |
| **Post-dismissal** | Teaser tab: "Still want 10% off? →" (positioned at bottom of screen) |
| **Image** | Text-only or heavily compressed — NO large images on mobile |
| **Code display** | Full-screen success state; coupon code in largest legible font |
| **Button size** | Min 48px height, full-width, thumb-reachable |

### Layout Separation
Use two completely separate forms — one optimized for desktop, one for mobile. Do NOT rely on responsive scaling of a single design. (Source: EMAIL-COLLECTION-POPUP-STRATEGY skill §9)

---

## 9. POST-DISMISSAL PROTOCOL

### What Happens When Visitor Dismisses (Clicks "No, thank you")

1. **Teaser Tab Appears Immediately**
   - Position: Bottom-right (desktop) / Bottom (mobile)
   - Text: "Still want 10% off? →" or "Take our quiz →"
   - Behavior: Clicks expand into full popup again
   - Expected capture: 1-3% additional from popup-dismissers
   - (Source: POPUP-LEAD-MAGNET-RESEARCH.md §1 — Pattern 8: Post-Dismissal Teaser Tab)

2. **Session Cookie Set — 7-day suppression**
   - Pop-up won't reappear for 7 days
   - No frequency cap reset on dismissal (only on submission)

3. **Embedded Footer Form (Always Active)**
   - Persistent fallback: "Stay in the loop — new products, parenting tips, exclusive offers"
   - Email only (no button selection — these arrive as GF by default)
   - Expected conversion: 0.5-2%
   - (Source: POPUP-LEAD-MAGNET-RESEARCH.md §1 — Pattern 7: Embedded Footer Form)

4. **Exit-Intent Safety Net (Desktop Only)**
   - If visitor moves cursor to close tab/browser, exit-intent fires
   - Possible different offer: "Wait! Get our free potty training readiness checklist"
   - Different messaging: community-framed ("Join 10,000+ autism parents")
   - This is the LAST CHANCE to capture before they leave forever
   - Expected conversion: 3-7% of abandoning visitors

### Suppression Chain
```
Dismiss pop-up → 7-day cool down → Footer form always available
                                      │
                                      ▼
                              Exit-intent fires on leave attempt
                                      │
                                      ▼
                              Visitor leaves → Retargeting (ad pixels)
```

(Sources: POPUP-LEAD-MAGNET-RESEARCH.md §1 — Patterns 2, 7, 8; EMAIL-COLLECTION-POPUP-STRATEGY skill §3.5 — Teaser widget, §3.2 — Exit-intent; POPUP-LEAD-MAGNET-RESEARCH.md §6 — Frequency capping)

---

## 10. WHAT HAPPENS ON SUBMIT — THE FULL TAG → FLOW CHAIN

### Immediate Effects (Server-Side, Sub-Second)

```
Visitor clicks button + submits email + first name
    │
    ▼
Klaviyo profile created/updated:
  • email = [submitted]
  • first_name = [submitted]
  • avatar_level = level1/level2/level3/general
  • signup_source = "popup"
  • welcome_flow_completed = false
    │
    ▼
Tag applied:
  Button 1 → avatar_level1
  Button 2 → avatar_level2
  Button 3 → avatar_level3
  Button 4 → avatar_general
    │
    ▼
Welcome Flow triggered (level-specific variant)
    │
    ▼
Step 2 displayed: coupon code WELCOME10
```

### Within 60 Seconds

```
Welcome Email E1 sent — triggered by tag
  • From: "Lena from BrightKidCo" <support@brightkidco.com>
  • Subject: Varies by level (L1 hook: Pre-K urgency; L2 hook: Mechanism specificity; L3 hook: Dignity-first)
  • Contains: code WELCOME10 (repeated), Lena voice sign-off
```

### Behavioral Tracking Begins
- Open rate tracked (Welcome E1)
- Click tracking (migration anchors in GF version)
- If no open within 7 days: `at_risk_no_open` tag considered (Phase 2+)

(Sources: Layer-08-Segmentation-Mechanics.md §3 — Klaviyo profile properties, §4 — Tag taxonomy; DOC-SYSTEM-NOTES.md §1 — Lena voice profile; GIULIANO-DEMANDS.md §3 — Welcome Flow structure; Layer-38-Brand-Constants.md §4 — Sender configuration)

---

## 11. THE 4-SYMPTOM BUTTON DECISION TREE — FULL MAPPING

### Button 1: "Talks about potty but won't actually do it"
```
→ Tag: avatar_level1
→ Profile: avatar_level = "level1"
→ Welcome Flow: L1 variant (DOC2)
  • Tonality: 70% Hope / 30% Realism
  • Cadence: E1(D0) → E2(D1) → E3(D3) → E4(D7) → E5(D10) → E6(D14) → E7(D17) → E8(D21)
  • Urgency: Allowed (Pre-K deadline)
  • Science density: Medium-Low
  • CTA: Medium aggressiveness
→ Conversion range: 15-25% (best cell: L1 × P2)
→ Forbidden words: "Easy", "Quick", "Adult diapers", "BCBA protocol"
→ Primary offer: 3+3 Bundle ($79.99) — math reframe OK
→ Key lever: Pre-K deadline panic → urgency OK
→ Post-submit flow: Standard Welcome L1
```

### Button 2: "Sensory issues, tried many methods"
```
→ Tag: avatar_level2
→ Profile: avatar_level = "level2"
→ Welcome Flow: L2 variant (DOC3)
  • Tonality: 40% Hope / 60% Realism
  • Cadence: Slightly slower — more mechanism depth
  • Urgency: Very little — event-driven spikes only
  • Science density: HIGH
  • CTA: Low aggressiveness — permission-based
→ Conversion range: 8-15% (best cell: L2 × P3)
→ Forbidden words: "Easy", "Quick", "Just like other kids", aggressive BCBA criticism
→ Primary offer: 3+3 Bundle ($79.99) — 5+5 possible for high-investment
→ Key lever: Mechanism specificity + 60-Day Guarantee + BCBA acknowledgment
→ Required 6-element formula per mail:
  1. REAL symptom recognition (name 3+ failed methods)
  2. Mechanism specificity (interoception explanation)
  3. Acknowledge BCBA/OT relationship
  4. Realistic timelines ("8-12 weeks, some longer")
  5. 60-day guarantee
  6. Permission-not-to-buy
→ Post-submit flow: Welcome L2 — if no purchase in Welcome, FAQ/Objection Library
```

### Button 3: "Non-verbal or high support needs"
```
→ Tag: avatar_level3
→ Profile: avatar_level = "level3"
→ Welcome Flow: L3 variant (DOC4)
  • Tonality: 20% Hope / 80% Realism — Dignity-First
  • Cadence: SLOWEST — E1→E2 gap 2 days
  • Urgency: ZERO — absolute prohibition
  • Science density: Medium-High
  • CTA: Very Low — essentially "This exists. You decide."
  • Empathy intensity: Very High
→ Conversion range: 4-8% (but HIGHEST LTV after purchase)
→ Forbidden words: "Your child WILL train", "Don't give up!", "Save him from diapers", "Free her from pull-ups", "Cure/Fix/Solve", grief as sales tool
→ Primary offer: 1 Pair ($34.99) — NEVER math reframe, NEVER push 3+3 or 5+5
→ Key lever: 60-Day Guarantee + Lena peer voice + dignity-first framing
→ Dignity-first language rules:
  - DO: "Your child", "He is doing the best his nervous system allows", "Whatever progress means for your family is enough"
  - DON'T: "Your child will be normal", "Your kid can do this!", "Cure/Fix/Solve", comparison to NT kids
→ Post-submit flow: Welcome L3 — long decision period (14-30+ days)
```

### Button 4: "Still figuring out what's going on"
```
→ Tag: avatar_general
→ Profile: avatar_level = "general"
→ Welcome Flow: GF variant (DOC5)
  • Tonality: 50% Hope / 50% Realism — balanced cross-level
  • Cadence: Standard
  • Urgency: Low-Medium
  • Science density: Medium
  • CTA: Medium
→ Conversion range: 5-10%
→ Cross-level calibration rules (ALL 6 REQUIRED):
  R1: Symptom over label — never name levels
  R2: 3-5 recognition anchors per mail (L1/L2/L3 all see themselves)
  R3: Age ranges over fixed ages ("3 to 10+")
  R4: Verbal/non-verbal inclusivity ("saying 'wet'" and "showing you with a gesture")
  R5: Timeline flexibility ("Some kids 2 weeks. Others 8. Both normal.")
  R6: Low-bar success metrics ("Look at the wet spot" not "Train in 3 days")
→ Primary offer: 3+3 Bundle ($79.99)
→ Migration paths embedded in every mail:
  • Click-based: Story links → tag update (expected 15-25% click)
  • Reply-based: NLP analysis → manual tag (5-15%)
  • PP-Level Detection: Day 14 mail → 40-50% of purchasers migrate
  • Purchase hints: Size/bundle inference → 10-20%
→ Target: 65-75% migration rate to level-specific paths
→ Forbidden: "Level 1/2/3" labels, "Diagnosed autism only", "Verbal kids will..."
→ Post-submit flow: Welcome GF with embedded migration anchors
```

(Sources: 01-Customer-Avatar.md §3.2-3.5 — Full avatar profiles; DOC-SYSTEM-NOTES.md §2 — All 4 avatar level profiles with tonality; Layer-08-Segmentation-Mechanics.md §5.1, §7 — Routing and migration; GIULIANO-DEMANDS.md §1 — The 4 avatar levels; GIULIANO-DEMANDS.md §4 — The 6 cross-level calibration rules; Layer-15-Offers.md §8 — Offer × avatar level map; DOC-SYSTEM-NOTES.md §5 — All forbidden phrases per level)

---

## 12. GENERAL FALLBACK — THE 5 SUB-GROUPS AND ROUTING

The General Fallback captures ~50% of real email volume. It contains 5 distinct sub-groups with different needs:

| Sub-Group | % of GF | Actual Level | Strategy | Language Sensitivity | Migration |
|---|---|---|---|---|---|
| **A — Diagnostic Entrants** | ~25% | Likely L1 | Educate first, migrate post-diagnosis | No diagnosis language | 40-50% via PP-Level Detection |
| **B — Diagnosis-Rejecters** | ~15% | L1 or L2 | Convert IN GF forever | **NO ASD language EVER** — use "nervous system differences" | <10% — never push |
| **C — Sensory-Difference** | ~25% | SPD or L2-like | Mechanism-oriented, no ASD language | Science OK; no ASD required | 40-55% via click migration |
| **D — Overwhelmed Non-Selectors** | ~25% | Actual L1/L2/L3 | Validation heavy → soft migration | Symptom language only | 40-50% via PP-Level Detection |
| **E — Cart/Browse** | ~10% | Any level | Direct: symptom + mechanism + guarantee | Universal | 20-30% via purchase hints |

### Sub-Group B (Diagnosis-Rejecters) — Special Rules
- NEVER use "autism", "ASD", "Level 1/2/3" in any communication
- Use "nervous system differences" as umbrella term
- NEVER push migration — stay GF forever
- Conversion happens entirely within cross-level flows

(Sources: GIULIANO-DEMANDS.md §1.2 — GF 5 sub-groups; Layer-08-Segmentation-Mechanics.md §7 — GF sub-group routing matrix; DOC-SYSTEM-NOTES.md §2 — GF section; 01-Customer-Avatar.md §3.5 — General Fallback 5 sub-groups)

---

## 13. PHASED ROLLOUT PLAN

### Phase 1: Immediate (Week 1) — Core Pop-Up Stack
| Pop-Up | Type | Trigger | Offer | Goal |
|---|---|---|---|---|
| **A — Welcome Discount** | 1-step, 2-screen Klaviyo popup | 8-15s timed + exit-intent (desktop); 15-30s timed (mobile) | 10% off + personalized plan | Baseline capture |
| **B — Teaser Tab** | Persistent tab | After Pop-up A dismissal | "Still want 10% off? →" | 1-3% additional capture |
| **C — Embedded Footer** | Inline form | Always visible on all pages | "Stay in the loop" | 0.5-2% persistent capture |

### Phase 2: Weeks 2-4 — Optimization & Expansion
| Pop-Up | Type | Trigger | Offer | Goal |
|---|---|---|---|---|
| **D — Age-Based Slide-In** | Multi-step Klaviyo flyout | 50% scroll depth (blog/collection pages) | Age-appropriate picks + 10% off | Age segmentation data |
| **E — Exit-Intent Lead Magnet** | Klaviyo popup | Exit-intent (desktop); 30s delay (mobile) | "Free Sensory Diet Starter Guide" | Higher-intent lead capture |

### Phase 3: Weeks 5-8 — Advanced
| Pop-Up | Type | Trigger | Offer | Goal |
|---|---|---|---|---|
| **F — Potty Training Readiness Quiz** | Octane AI / Prehook quiz | Navigation/"Take our quiz" + popup trigger on potty pages | Personalized readiness score | Rich zero-party data, highest-quality leads |
| **G — Community-Framed Exit** | Klaviyo popup | Exit-intent on ASD/sensory content pages | "Join 10,000+ autism parents" | Community-oriented subscribers (4.2x LTV) |

### Phase 4: Weeks 9-12 — Premium
| Pop-Up | Type | Trigger | Offer | Goal |
|---|---|---|---|---|
| **H — Cost Calculator** | Custom widget | Product page / exit-intent on cart | Savings calculator vs. Pull-Ups | High-intent, purchase-ready leads |
| **I — Spin-to-Win** | Wheelio/OptinMonster | 8-10s delay, new visitors only | Gamified prizes (10% off, free shipping) | +132% vs. standard popups |

(Sources: POPUP-LEAD-MAGNET-RESEARCH.md §4 — Phase deployment plan; EMAIL-COLLECTION-POPUP-STRATEGY skill §11 — Platform implementation workflow)

---

## 14. A/B TESTING ROADMAP

### Test Priority (Hierarchy of Impact)

| Priority | Test | Variable A | Variable B | Metric | Duration |
|---|---|---|---|---|---|
| **1** | Offer impact | 10% off coupon | No coupon (plan only) | Signup rate | 2 weeks |
| **2** | Trigger timing | Exit-intent | 10s timed delay | Signup rate | 2 weeks |
| **3** | Mobile form type | Full-screen popup | Flyout | Mobile signup rate | 2 weeks |
| **4** | Discount framing | "10% off" | "Save $X on first order" | Signup rate | 2 weeks |
| **5** | Social proof | "Join 10,000+ parents" | No social proof | Signup rate | 2 weeks |
| **6** | Image | Product photo | Lifestyle/child photo | Signup rate | 2 weeks |
| **7** | SMS step | Include SMS Step 2 | Skip SMS | Total subscribers | 3 weeks |
| **8** | Button copy | Current 4 buttons | Revised wording per A/B | Signup rate | 2 weeks |
| **9** | Quiz vs. discount | Potty training quiz | 10% off popup | Signup + 30d revenue | 4 weeks |

**Primary metric:** Total New Subscribers (not submission rate)
**Secondary metric:** Revenue Per Subscriber (30-day window)

(Sources: POPUP-LEAD-MAGNET-RESEARCH.md §5 — A/B testing roadmap; EMAIL-COLLECTION-POPUP-STRATEGY skill §10 — A/B testing protocol)

---

## 15. MEASUREMENT FRAMEWORK

| Metric | Target | Anti-Metric | Warning Threshold |
|---|---|---|---|
| Form submission rate | >5% overall | Unsubscribe rate within 7 days | <3% unsub = quality signups |
| Email-only capture rate | >80% of submissions | — | — |
| SMS capture rate | >30% of email subscribers | — | — |
| Welcome flow open rate | >50% | — | <35% = list quality issue |
| First-purchase conversion | >15% of popup subscribers | — | <8% = offer/content issue |
| Quiz completion rate | >60% of quiz starters | — | <40% = friction issue |
| Pop-up seen → submitted | >5% | Bounce rate | <2% immediate action |
| Average time to submit | <30 seconds | — | >60s = too much friction |
| Mobile conversion rate | >3% | Desktop vs. mobile gap | >50% gap = mobile broken |
| GF → Level migration rate | >40% within 60 days | — | <20% = migration content weak |

### Run Rules
- Minimum 1,000 impressions per variation for statistical significance
- Minimum 2 weeks per test (4 weeks for low-traffic pages)
- Test one variable at a time
- Document every result

(Sources: POPUP-LEAD-MAGNET-RESEARCH.md §5 — Measurement framework; EMAIL-COLLECTION-POPUP-STRATEGY skill §10 — Primary/Secondary metrics)

---

## 16. COMPETITIVE POSITIONING — WHY THIS WINS

### What BKC's Pop-Up Does That No Competitor Does
| Capability | BKC | Competitors |
|---|---|---|
| **Symptom-based segmentation** | ✅ 4 buttons map to 4 avatar levels | ❌ Generic email capture |
| **Avatar-level routing** | ✅ Welcome Flow variant per level | ❌ Single welcome flow for all |
| **Educational framing** | ✅ "Potty training plan built for kids like yours" | ❌ Pure discount ("10% off!") |
| **Exit-intent popup** | ✅ Desktop safety net | ❌ Not used by any reusable competitor |
| **Teaser tab recovery** | ✅ Post-dismissal | ❌ Not used |
| **ASD-specific lead magnets** | ✅ Free interoception/potty training guides | ❌ Peejamas SELLS theirs for $4.99 |
| **Multi-step capture** | ✅ Email → SMS (optional) → coupon | ❌ All are single-step |
| **Quiz integration** | ✅ Phase 3: Potty Training Readiness Quiz | ❌ Zero competitors |
| **Community framing** | ✅ "Join 10,000+ parents" in Phase 3 | ❌ Not used |

### Competitive Gaps BKC Owns
1. **No competitor uses exit-intent popups** — first-mover opportunity
2. **No competitor has a potty training readiness quiz** — single biggest missed opportunity
3. **No competitor offers ASD-specific lead magnets** — "Interoception and Potty Training" would be category-defining
4. **No competitor uses multi-step popups** — all visible captures are single-step
5. **No competitor offers free potty training guides** — Peejamas SELLS theirs for $4.99
6. **Discount-based only** — no competitor offers educational value for email

(Sources: COMPETITOR-EMAIL-STRATEGIES.md §2 — Competitor email whitespace analysis; POPUP-LEAD-MAGNET-RESEARCH.md §2 — Competitor popup analysis summary)

---

## 17. SOURCE REFERENCE INDEX

Every decision in this framework references its source:

| Section | Source Document | Layer/File |
|---|---|---|
| Avatar Decision Tree | 01-Customer-Avatar.md §3.1 | Synthesis 01 |
| L1 Profile | 01-Customer-Avatar.md §3.2 | Synthesis 01 |
| L2 Profile | 01-Customer-Avatar.md §3.3 | Synthesis 01 |
| L3 Profile | 01-Customer-Avatar.md §3.4 | Synthesis 01 |
| GF Profile | 01-Customer-Avatar.md §3.5 | Synthesis 01 |
| Traffic Channel Context | 10-Traffic-Channel-Map.md §14 | Synthesis 10 |
| Pop-Up Specification | Layer-08-Segmentation-Mechanics.md §2 | Diagnosis Layer 8 |
| Tag Taxonomy | Layer-08-Segmentation-Mechanics.md §4 | Diagnosis Layer 8 |
| Flow Routing | Layer-08-Segmentation-Mechanics.md §5 | Diagnosis Layer 8 |
| GF Sub-Group Routing | Layer-08-Segmentation-Mechanics.md §7 | Diagnosis Layer 8 |
| Migration Strategy | Layer-08-Segmentation-Mechanics.md §8 | Diagnosis Layer 8 |
| Offer × Avatar Mapping | Layer-15-Offers.md §8 | Diagnosis Layer 15 |
| Pricing Rules | Layer-15-Offers.md §4 | Diagnosis Layer 15 |
| Cart Recovery Logic | Layer-15-Offers.md §5 | Diagnosis Layer 15 |
| Brand Constants | Layer-38-Brand-Constants.md | Diagnosis Layer 38 |
| Discount Code | Layer-38-Brand-Constants.md §11 | Diagnosis Layer 38 |
| Font & Colors | Layer-38-Brand-Constants.md §6 | Diagnosis Layer 38 |
| Popup Patterns Catalog | POPUP-LEAD-MAGNET-RESEARCH.md §1 | Research File |
| Competitor Popup Analysis | POPUP-LEAD-MAGNET-RESEARCH.md §2 | Research File |
| Lead Magnet Ideas | POPUP-LEAD-MAGNET-RESEARCH.md §3 | Research File |
| A/B Testing Roadmap | POPUP-LEAD-MAGNET-RESEARCH.md §5 | Research File |
| Klaviyo Implementation | POPUP-LEAD-MAGNET-RESEARCH.md §6 | Research File |
| Competitor Email Gaps | COMPETITOR-EMAIL-STRATEGIES.md | Research File |
| Avatar Profiles (Details) | DOC-SYSTEM-NOTES.md §2 | Ingestion File |
| Brand Voice | DOC-SYSTEM-NOTES.md §1 | Ingestion File |
| Forbidden Phrases | DOC-SYSTEM-NOTES.md §5 | Ingestion File |
| Pop-Up Design Principles | email-collection-popup-strategy skill §7 | Skill |
| Pop-Up Types & Timing | email-collection-popup-strategy skill §3, §8 | Skill |
| Two-Step Opt-In | email-collection-popup-strategy skill §5 | Skill |
| Desktop vs. Mobile Strategy | email-collection-popup-strategy skill §9 | Skill |
| A/B Testing Protocol | email-collection-popup-strategy skill §10 | Skill |
| Four-Level Segmentation | GIULIANO-DEMANDS.md §1 | Demands |
| Flow Architecture | GIULIANO-DEMANDS.md §2 | Demands |
| Welcome Flow | GIULIANO-DEMANDS.md §3 | Demands |
| Cross-Level Calibration Rules | GIULIANO-DEMANDS.md §4 | Demands |
| Conversion Levers | Layer-15-Offers.md / DOC-SYSTEM-NOTES.md §3 | Multiple |

---

*Framework document generated: May 28, 2026*
*Total size: >15KB*
*Sources referenced: 12+ distinct source files*
*Next: S04-B (Welcome Flow Architecture) builds directly on this framework*
