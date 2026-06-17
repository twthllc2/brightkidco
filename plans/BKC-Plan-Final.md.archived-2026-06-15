# BKC Plan — Final

> **The plan. The only plan. If a new session needs to do BKC work, this file is everything.**
>
> **Goal:** Ship BrightKidCo email designs to Giuliano. He owes $1,000 on delivery. We need it by Thursday.
>
> **Last updated:** 2026-06-15
>
> **Read this first. Then do the work.**

---

# TL;DR (read this in 60 seconds, then go to §0)

- **125 email designs total.** 60 already built but all look the same. 65 missing.
- **The work:** fix the variety on the 60, build the 65, ship to Giuliano. He pays $1,000 on delivery.
- **Structure:** §0 = execute trigger (read first, run §0 then continue). §1-9 = the plan (reference as you go). §10-16 = appendices (file paths, skill names, verification commands, ready-to-paste briefs).
- **Standard:** "Would a peer mom of an autistic child see this as a real email from a real brand, or as a template?" If template, redo. If real, ship.
- **No human gate.** You do not message Ayoub for "is this OK" or "should I proceed." You only message when: (a) all 6 phases done and $1,000 collected, (b) something blocks you 24+ hours, (c) you need info you can't find anywhere.
- **How to use this file:** read §0 first (it's the execution trigger), execute Step 1-8 of §0.2, reference §1-9 only when you need details. Don't try to memorize the whole 1,300 lines.

**GO.**

---

# 0. EXECUTION TRIGGER (read this first if you're a new session)

> **If you just opened this file as a new Hermes session, this section tells you what to do WITHOUT asking the user. Follow the steps. Don't stop. Don't ask. Run until done.**

## 0.1 Your job (the rule, made explicit)

Ayoub has been working on this project for 3+ weeks. He is tired, overwhelmed, broke, and trusting you to execute without him. The rule for messaging Ayoub is **simple and binary**:

**You do NOT message Ayoub for "is this OK" or "should I proceed" or "the visual looks good, want me to ship."** Those are decisions you make using the visual standard in §0.3.

**You DO message Ayoub in 3 situations only** (see §0.4 for details):
1. All 6 phases done and $1,000 collected
2. Blocked for more than 24 hours on something you can't unblock
3. Need information that exists ONLY in Ayoub's head (not in any file on disk)

That's the entire rule. The §0.4 details are for if/when you hit one of those 3.

Your job: read this plan, run the MUST tier of the pre-dispatch checklist (30 min), dispatch subagents in parallel, verify outputs, ship to cachy. Continue through Phases 2-5. Stop when the $1,000 is collected or when something blocks you for more than 24 hours.

## 0.2 The 8 execution steps (no decision points, just do them)

### Step 1: Run the MUST tier of the pre-dispatch checklist (30 min)

Go to §12. Do the 5 MUST items. (Skip the NICE tier for now — do those in parallel with subagent work, or skip them entirely if time-pressured.) The MUST items are: verify connectivity, verify SSH, verify all 12 mandatory read files exist, create the missing pp-extended-ed-flow/ folder, note the Winback A FLOW1_SHARED bug.

**Concrete first-30-minutes sequence:**
```bash
# 1. Verify connectivity (5 min)
ping -c 2 -W 2 100.76.121.113
ssh -o ConnectTimeout=5 -o BatchMode=yes ayoub@100.76.121.113 echo ok

# 2. Verify all 12 mandatory read files exist (5 min)
for f in \
  /root/projects/brightkidco/plans/BKC-Plan-Final.md \
  /root/projects/email-ops/email-design/bkc-complete-component-library.md \
  /root/projects/email-ops/email-design/raw/BKCO\ -\ EMAIL\ MARKETING/welcome-flow/primitives.jsx \
  /root/projects/email-ops/email-design/raw/BKCO\ -\ EMAIL\ MARKETING/welcome-flow/product-showcase.jsx \
  /root/projects/email-ops/email-design/raw/BKCO\ -\ EMAIL\ MARKETING/welcome-flow/illustrations.jsx \
  /root/projects/email-ops/email-design/raw/BKCO\ -\ EMAIL\ MARKETING/autistic-welcome/variants/tokens.js \
  /root/projects/email-ops/skills/email-creative-design/SKILL.md \
  /root/projects/email-ops/skills/email-creative-design/references/algorithmic-variation-engine.md \
  /root/projects/email-ops/skills/email-creative-design/references/template-library-patterns.md \
  /root/projects/email-ops/skills/taste-skill/SKILL.md \
  /root/projects/email-ops/skills/email-creative-design/references/js-template-literal-pitfalls.md; do
  test -f "$f" && echo "✅ $f" || echo "❌ MISSING: $f"
done

# 3. Verify copy files exist for the 4 Phase 1 flows (5 min)
for f in \
  /root/projects/brightkidco/outputs/copy/cart/cart-02-e1.md \
  /root/projects/brightkidco/outputs/copy/cart/cart-02-e2.md \
  /root/projects/brightkidco/outputs/copy/cart/cart-02-e3.md \
  /root/projects/brightkidco/outputs/copy/browse/browse-04-e1.md \
  /root/projects/brightkidco/outputs/copy/browse/browse-04-e2.md \
  /root/projects/brightkidco/outputs/copy/browse/browse-04-e3.md \
  /root/projects/brightkidco/outputs/copy/checkout/checkout-03-e1.md \
  /root/projects/brightkidco/outputs/copy/checkout/checkout-03-e2.md \
  /root/projects/brightkidco/outputs/copy/pp-education/pped-11-d0.md \
  /root/projects/brightkidco/outputs/copy/pp-education/pped-11-d7.md \
  /root/projects/brightkidco/outputs/copy/pp-education/pped-11-d14.md \
  /root/projects/brightkidco/outputs/copy/pp-education/pped-11-d21.md; do
  test -f "$f" && echo "✅ $f" || echo "❌ MISSING: $f"
done

# 4. Create the missing pp-extended-ed-flow/ folder (5 min)
mkdir -p "/root/projects/email-ops/email-design/raw/BKCO - EMAIL MARKETING/pp-extended-ed-flow"

# 5. Note the Winback A FLOW1_SHARED bug (1 min, just remember)
echo "Winback A: content.js has FLOW1_SHARED bug, must use window.FLOW_WINBACKA_SHARED. Phase 2 fix."
```

**That's 30 min, the MUST tier is done. Move to Step 2.**

### Step 2: Dispatch Phase 1 (4 subagents in parallel, one tool block)
Use the pre-filled briefs in Appendix D. Each brief is a complete `delegate_task` call with goal, context, and toolsets filled in. Paste them in. Wait for all 4 to return. They run in parallel.

### Step 3: Verify each output (run Appendix C commands on each emails.jsx)
For each of the 4 subagent returns:
- Run the grep checks (no em dashes, no $, no universal PartBadge opener, etc.)
- Run the bundler
- Open the bundled HTML and check it renders at 420px
- Read the subagent's "why I picked each component" report

### Step 4: If a subagent failed, retry up to 2 times
If the subagent's output is broken (syntax error, wrong components, rewrote copy), dispatch the SAME brief again with explicit "fix the syntax error" appended. Max 2 retries. If still failing after 2 retries, ship the best version you have, log the issue in PRODUCTION-TRACKER.md, and move on to the next subagent.

**Do not get stuck in a retry loop. Time matters more than perfection for Phase 1.**

### Step 5: Apply the visual standard + ship
Open each bundled HTML. Apply the standard from §0.3 ("real email from a real brand, or template?"). If template-feeling, re-dispatch the subagent with "the email looks like a template, not a real email. Re-do with: [specific feedback from the visual review]" (up to 3 self-retries). If real-feeling, ship to cachy via scp. Verify with `ssh ayoub@100.76.121.113 "ls -la /home/ayoub/Documents/"`.

### Step 6: Continue to Phase 2
After Phase 1 ships, do NOT wait for confirmation. Continue to Phase 2 (5 subagents in parallel for cross-level reworks). Use the same brief template. Same verification. Same standard. Ship. Continue.

If Giuliano later gives feedback through any channel (Telegram, email, the business partner), adjust the brief template in the next phase based on that feedback. But don't STOP execution waiting for feedback.

### Step 7: Continue through Phases 2-5
After Phase 1 ships and the visual standard is met, continue through Phase 2 (5 subagents in parallel for cross-level reworks), then Phase 3 (Winback A/B level builds, 2 subagents), then Phase 4 (Welcome level builds, 4 subagents), then Phase 5 (PP Extended Ed level builds, 4 subagents — first create the missing pp-extended-ed-flow/ folder).

Each phase uses the same brief template pattern. Each phase applies the same visual standard. Each phase ships to cachy before moving to the next. The total scope is 125 designs across 22 flows.

If at any point Giuliano gives feedback (through any channel), adjust the brief template in the NEXT phase based on that feedback. But don't stop execution waiting for feedback.

### Step 8: After $1,000 collected, message Ayoub
"$1,000 received. Retainer conversation can start. See §15 for what to do next."

## 0.3 The visual standard (no human in the loop)

You do NOT message Ayoub. You do NOT wait for confirmation. You do NOT escalate decisions. You use this standard:

> **"Would a peer mom of an autistic child see this as a real email from a real brand, or as a template?"**

If the answer is "real email from a real brand" → ship it.
If the answer is "template" → redo it yourself. Pick different components, different photos, different skeleton. Re-bundle. Re-render. Re-check. Up to 3 self-retries. If still template-feeling after 3 retries, ship the best version and log the issue in PRODUCTION-TRACKER.md.

**The 127 HTML files that Giuliano rejected** (per the project history) failed because they looked automated, no images, broken gradients, wall of text. Do not make those mistakes. The new HTML must:
- Have product photos in Cart, Browse, Checkout, Site Abandonment, Winback, Replenish A, PP Direct/Extended Upsell, Welcome E1/E5/E7/E8
- Have a recognizable visual hierarchy (hero > body > mechanism > testimonial > guarantee > CTA > signoff > footer)
- Use the brand colors (teal, green, cream, ink) visibly, not buried
- Have a CTA that's actually clickable-looking
- Not be a wall of text
- Use the hard shadows + 2px borders + tilted stickers that are Giuliano's signature

**If your HTML passes the visual standard, ship it. If it doesn't, redo it. No asking, no escalation, no human gate.**

## 0.4 When to STOP and message Ayoub

You message Ayoub ONLY in these situations:
1. **All 6 phases done and $1,000 collected** — message him it's done
2. **Something blocks you for more than 24 hours** — auth issues you can't resolve, copy files missing, bundler broken beyond repair, Giuliano says no
3. **You genuinely need information only Ayoub has** — but exhaust all other options first (read every file, search the wiki, check the skills, look at the existing 60 JSX files for patterns)

**You do NOT message Ayoub for:**
- "What should I do?" (the plan tells you)
- "Is this OK?" (the plan tells you)
- "Can I proceed?" (yes, just do it)
- "I have a question about Giuliano" (the GIULIANO-DEMANDS.md answers it)
- Progress updates mid-phase (do them at the end of each phase)
- "Should I retry this subagent?" (retry up to 2 times, then ship the best)
- "The visual looks OK, want me to ship?" (YES, ship it, that's the standard)
- "The visual doesn't look great, want me to redo?" (YES, redo it, that's the standard)

## 0.4 The decision rules (when in doubt, follow these)

| If this happens... | Do this... |
|--------------------|-----------|
| Subagent returns with 401 auth error | Retry the exact same brief. ~50% of first dispatches fail this way. |
| Subagent rewrites copy | Reject, re-dispatch with "VERBATIM" in bold 3 times |
| Subagent uses universal PartBadge opener | Reject, re-dispatch with "banned pattern #4" called out |
| Subagent uses soft shadow or rgba | Reject, re-dispatch with "hard sombras only, no blur, no rgba" in bold |
| Subagent output has syntax error | Reject, re-dispatch with "fix the syntax error" appended |
| Subagent's output passes verification | Bundle, scp to cachy, move to next subagent |
| Subagent fails 2 retries in a row | Ship the best version, log the issue, move on |
| Subagent picks a component not in the brief's suggestion | ACCEPT it if it matches the copy moment (creative director philosophy) |
| Giuliano's feedback after Phase 1 is positive | Continue to Phase 2-5 with the same brief template |
| Giuliano's feedback after Phase 1 has 2-3 specific objections | Adjust the brief template to address those objections, then continue |
| Giuliano says no to everything | Stop, message Ayoub, wait for direction |
| Cachy offline | Fall back to Telegram (bot token in /root/.hermes/.env, chat_id 6685671754) |
| Ayoub offline | Continue working, don't stop. The 4-5 day deadline is real. |

## 0.5 The anti-stuck checklist (if you feel yourself going in circles)

If you've spent more than 90 minutes on a single subagent (after retries), STOP and ask:
1. Is the copy file actually there? (check the path)
2. Is the flow folder actually there? (check the path)
3. Are the 12 mandatory read files actually there? (check the paths)
4. Is the bundler script actually executable? (check permissions)

If all yes, ship the best you have and log the issue. Time matters more than perfection for Phase 1.

## 0.6 The total scope and budget

> **Date anchor:** This file was last updated June 15, 2026. Phase 1 (the 4 flagship flows) should be done within 24 hours of opening this file. The full 125 should be done within 9 days. If you opened this file and it's already past Day 9, skip the phased plan and just build the most important flows first (Cart, Browse, PP Education, Winback A, Welcome E5).

| Phase | Subagents | Designs | Day (from file open) |
|-------|-----------|---------|----------------------|
| 1: Flagship (Cart, Browse, Checkout, PP Ed) | 4 | 12 | Day 1 |
| 2: Cross-level reworks | 5 | 50 | Day 2-3 |
| 3: Winback A/B levels | 2 | 18 | Day 4 |
| 4: Welcome levels | 4 | 32 | Day 5-6 |
| 5: PP Ext Ed levels | 4 | 20 | Day 7-8 |
| 6: Verify + ship to Giuliano | 1 | — | Day 9 |
| **TOTAL** | **20** | **132** (with 7 extra for revisions) | **~9 days** |

**The first 4 flows (Phase 1 = 12 designs) are the priority. Get those right, ship to cachy, then continue. Giuliano's $1,000 payment is tied to "are the designs done," not "are all 125 done." The first batch proves the system works, the rest fills in the scope.**

---

# 1. The Business

## The client
- **Giuliano** — German, in Bangkok. Business partner is the final decision-maker.
- **Brand:** BrightKidCo (brightkidco.com) — training underwear for autistic children.
- **Product:** Body-Signal Learning Layer™ — gives 30-60 seconds of sensory feedback when the child starts to wet, so the brain can learn the body signal.
- **Voice:** Lena — peer mom of two autistic sons. Not a brand. Not a founder. Not a clinician.
- **Platform:** Klaviyo. Login: `support@brightkidco.com` / `Gbl28.08.00*`. Sending: `send.brightkidco.com`.
- **Market:** Germany + international. Currency is **€ (NOT $).**

## The money
- **$500 already received** — paid for the current server.
- **$1,000 owed on delivery** — this is the goal. Clears overdraft and bills.
- **$1,500-2,000/month retainer** is likely if we deliver well.
- Ayoub is broke. This is survival money.

## The deadline
- **Today (Monday June 15):** Plan ready.
- **Tuesday June 16:** Pre-dispatch + Phase 1 (4 flows reworked).
- **Wednesday June 17:** Show Giuliano, get feedback.
- **Thursday June 18:** He pays $1,000. Phase 2-5 continue over the following 2 weeks.

## The quality bar
> "Would Giuliano be impressed?" — German precision, data-backed, professional.

The first round of 127 HTML emails was rejected by Giuliano. The current 60 designs are built from Giuliano's actual JSX code, but they all look the same. We fix the variety, add the missing 65, ship.

---

# 2. The Customer

## The 4 levels (exactly 4)

```
LEVEL 1 — SARAH          LEVEL 2 — LISA           LEVEL 3 — MARIA
~35% of audience         ~40% (LARGEST)           ~25% of audience
Verbal, 3-5 yrs          Mixed, 5-7 yrs            Non-verbal, 6-10+
Mild ASD                 Moderate ASD              High support
Hope: 70/30              Hope: 40/60               Hope: 20/80
Decision: 2-7 days       Decision: 7-21 days       Decision: 14-30d
Urgency OK               Low urgency               ZERO urgency
Pre-K driven             BCBA context              Dignity-first

         GENERAL FALLBACK (~50% real volume)
         Undeclared level, enters via pop-up
         5 sub-groups: Diagnostic, Diagnosis-Rejecter,
         Sensory-Difference, Overwhelmed, Cart-Without-OptIn
         Symptom language only — never "autism/ASD/Level"
```

## The 5 GF sub-groups
- **A** Diagnostic Entrants (~25%): pre-identity, education-first
- **B** Diagnosis-Rejecters (~15%): symptom language ONLY, never "autism"
- **C** Sensory-Difference (~25%): SPD/ADHD, science-driven
- **D** Overwhelmed Non-Selectors (~25%): has ASD but clicked pop-up away — goldmine
- **E** Cart/Browse without Opt-In (~10%): cookie capture, recovery framing

## The 6 R-rules (every cross-level email must show ALL 6)
1. **Symptom over label** — never "Level 1/2/3" or "autism/ASD." Use "nervous system differences."
2. **3-5 recognition anchors** per email (real parent situations like "he sits for 20 min, nothing happens").
3. **Age ranges** not fixed ages ("3-5" not "4").
4. **Both verbal and non-verbal** mentioned ("whether he can tell you or not...").
5. **Flexible timeline** ("may take a few weeks" not "in 2 weeks").
6. **Low-bar success** — the win is awareness, pause, look down. NOT "fully trained."

## The 5 conversion levers (pick 1-2 per email)
- L1: Mechanism specific (the sensory gap, interoception)
- L2: Pull-ups make this worse (sensation absorbed, signal loop silenced)
- L3: 60-day guarantee
- L4: Lena peer voice
- L5: 49% normalization stat (Barmpagiannis & Baldimtsi 2025)

## The 6 subject line formulas
1. Observation hook — "He talks about it but won't do it"
2. Validation hook — "Timers. Rewards. Naked days. Here's why none of it worked."
3. Mechanism tease — "The body-signal your child might not feel yet"
4. Permission frame — "You left something, no rush"
5. Question hook — "Why does he pee 30 seconds after standing up?"
6. Social proof — "3 parents, 3 different kids, 1 common piece"

## The 3 hard rules
1. **Never send to unengaged at standard volume**
2. **Never mix Mary S. (founder) with Lena sign-offs**
3. **Never use discount codes during warming**

## The trust pyramid (visual order in every email)
1. Peer-mom testimonial (specific, relatable) ⭐⭐⭐⭐⭐
2. OT/Therapist co-sign ⭐⭐⭐⭐
3. Before/after with micro-wins ⭐⭐⭐
4. Number of reviews (16,511 · 4.9★) ⭐⭐
5. Kelly Mahler citation ⭐

**The rule:** Mechanism section must come BEFORE guarantee section in every email.

## The 4 emotional phases
- **Phase 1 — Slow Realization** (2.5-3.5y, ~15%): confusion, no hard sell
- **Phase 2 — First Real Attempt** (3-4.5y, ~34%): desperation, no blame
- **Phase 3 — Method Cycling** (4-7y, ~35%): exhaustion, no hype
- **Phase 4 — Resignation** (7+, ~20%): grief/accept, no cheer

## Copy composition (every email)
- 30-50% authentic verbatim (real parent quotes)
- 30-50% Lena voice
- 10-20% mechanism/brand
- Minimum 2-4 authentic quotes per email

## Lena's identity (per email position)
- **E1 (Welcome first touch, V10-final):** "The BrightKidCo team" — we/our
- **E2-E6 (Welcome personal):** "Lena Bauer" — I/my
- **Flow 2 sender:** "Lena" (first name only)
- **From name (all emails):** "Lena from BrightKidCo"
- **Closing word per position:** "Talk soon" (E1-E2), "With understanding" (E3-E5), "With care" (E6+)

## Pricing
- **€34/pair** (base)
- **€30.60/pair with BRIGHT10** (10% off)
- **€79.99 bundle** (3+3)
- Use **€ symbol, NEVER $**

---

# 3. The 125 Emails (the scope)

## The 22 flows

| # | Flow | Emails | Built now | Need images? |
|---|------|--------|-----------|--------------|
| 01 | Welcome | 32 (8×4 levels) | 6 GF | Maybe (E1, E5, E7, E8) |
| 02 | Cart Abandonment | 3 | 3 GF | YES |
| 03 | Browse Abandonment | 3 | 3 GF | YES |
| 04 | Checkout Abandonment | 2 | 2 GF | YES |
| 05 | PP Education | 4 (D0/D7/D14/D21) | 4 GF | NO |
| 06 | PP Extended Ed | 20 (5×4) | **0 — folder missing** | NO |
| 07 | PP Direct Upsell | 2 | 2 GF | YES |
| 08 | PP Extended Upsell | 3 | 3 GF | YES |
| 09 | PP Mid Checkin | 3 (D30/D45/D60) | 3 GF | NO |
| 10 | PP Level Detection | 2 | 2 GF | NO |
| 11 | PP Mary Story | 1 | 1 GF | NO |
| 12 | PP At Risk | 4 | 4 GF | NO |
| 13 | Winback A | 12 (3×4) | 3 GF | Maybe |
| 14 | Winback B | 12 (3×4) | 3 GF | Maybe |
| 15 | Replenish A | 3 | 3 GF | Maybe |
| 16 | Replenish B | 2 | 2 GF | NO |
| 17 | Replenish C | 2 | 2 GF | NO |
| 18 | Review Request | 2 | 2 GF | NO |
| 19 | Site Abandonment | 1 | 1 GF | YES |
| 20 | Sunset | 2 | 2 GF | NO |
| 21 | Transactional | 4 (order/ship/out/arrived) | 4 GF | NO |
| 22 | FAQ Library | 6 | 6 GF | NO |
| | **TOTAL** | **125** | **60 (44%)** | |

**Missing: 65 designs.** Welcome 26, PP Extended Ed 20, Winback A 9, Winback B 9.

## Where the copy lives

`/root/projects/brightkidco/outputs/copy/<flow>/<filename>.md`

**Naming:**
- `<flow-key>-<flow-num>-<position>-<level>.md` (e.g. `cart-02-e1.md`, `welcome-01-e1-l1.md`, `winback-a-19-e1-gf.md`, `pped-22-e1-l1.md`)
- For day-based flows (PP Education, PP Mid Checkin): use `d0`/`d7`/`d14`/`d21`/`d30`/`d45`/`d60` instead of `e1`/`e2`/`e3`
- For level-based files: append `-l1`/`-l2`/`-l3`/`-gf` (only when level variants exist)

**Every copy file has this structure:**
1. Metadata block (flow, position, level, phase, purpose, emotional arc, framework, cadence, hope/realism, urgency, decision speed)
2. Subject line (with formula, char count, mobile safe, spam check, forbidden phrases check)
3. Preview text
4. From name (always "Lena from BrightKidCo")
5. Email body with named sections (Hook, Validation, Mechanism, etc.)
6. Lena sign-off with position-specific closing word + P.S. line
7. Footer (address, unsubscribe, "Lena reads every response")
8. Creative Strategy section (visual direction, layout, color narrative, typography, easter eggs, motion, level calibration)
9. Source citations

**The Creative Strategy section is critical** — it tells the subagent what the email is trying to make the parent feel and what visual treatment matches that feeling.

**The copy is the source of truth. Subagents use it VERBATIM. No rewriting, no shortening, no paraphrasing.**

---

# 4. The Design System

## Brand tokens (use these exact values, never invent new ones)

```
teal:       #2BAEB4    tealDeep:   #1E8A8F
green:      #5DD07A    greenDeep:  #3BB35E
ink:        #1F2D2F    soft:       #4A6568
muted:      #8A9B9D    cream:      #FBF7F1
paper:      #FFFFFF
yellow:     #FFD866    (Part badge)
lime:       #D8F57C    (CTA button, Lena's signature)
gradient:   linear-gradient(135deg, #2BAEB4 0%, #5DD07A 100%)

main:    'Questrial', system-ui, sans-serif   (body)
display: 'Fraunces', Georgia, serif            (headlines)
hand:    'Caveat', cursive                     (Lena's signature)
```

## Design treatment (Giuliano's authentic)

- **Borders:** 2px solid #1F2D2F on all cards, images, badges
- **Shadows:** HARD — `3px 3px 0` / `4px 4px 0` / `6px 6px 0` #1F2D2F. **No blur, no rgba, no soft shadows.**
- **Border radius:** 14-24px cards, 18-20px images, 999px badges/buttons
- **Email width:** 420px (mobile-first, single column below 600px)
- **Part badge:** bg #FFD866, 2px solid ink, radius 999, transform: rotate(-1.5deg)
- **CTA button (lime on dark):** bg #D8F57C, color #1F2D2F, radius 999, with ` →` arrow
- **Signoff card:** bg #1F2A2C, gradient top bar, Caveat 42px #D8F57C signature

## The 14 shared components (from `welcome-flow/primitives.jsx`)

`EmailShell`, `Header`, `ImgFrame`, `FramedImage`, `Band`, `PartBadge`, `TitleBlock`, `Letter`, `Eyebrow`, `H2`, `CTAClose`, `Signoff`, `OutLine`, `Footer`

## The 3 product showcase variants (from `welcome-flow/product-showcase.jsx`)

- `ProductShowcaseFull` — hero product moment (E4, E6)
- `ProductShowcaseMedium` — inline context (E5, stories)
- `ProductShowcaseSoft` — gentle mention (E2, E3)

## The 10 SVG illustrations (from `welcome-flow/illustrations.jsx`)

Illu_GentleMorning, Illu_Letter, Illu_QuietRoom, Illu_Hands, Illu_ProductPants, Illu_Airplane, Illu_Signal, Illu_Sensory, Illu_CalmSun, Illu_QuoteBadge

## The 28 working photos (28 photos total, 3 unusable)

`/root/projects/email-ops/email-design/raw/product-photos/`

**Flat-lay (12 files, product on white background):**
- `training-pant-fox-red-white.jpg` — red fox print
- `training-pant-cloud-raindrop-white.jpg` — white cloud/raindrop print
- `training-pant-whale-ocean-blue.jpg` — blue whale ocean
- `training-pant-bunny-hearts-pink.jpg` — pink bunny hearts
- `training-pant-watermelon-pink.jpg` — pink watermelon
- `training-pant-fox-woodland-white.jpg` — woodland fox
- `training-pant-penguin-multicolor.jpg` — multicolor penguin
- `pocket-diaper-moon-cloud-blue.jpg` — blue moon/cloud
- `swim-diaper-giraffe-yellow.jpg` — yellow giraffe
- `swim-diaper-unicorn-pink.jpg` — pink unicorn
- `swim-diaper-whale-ocean-blue.jpg` — blue whale ocean
- `diaper-woodland-creature-yellow.jpg` — yellow woodland creature
- `laundry-bag-llama-cream.png` — cream llama laundry bag

**Lifestyle (8 working + 3 unusable, 11 files):**
- `toddler-livingroom-dino-yellow.png` — toddler in living room, yellow dino pants, awake smiling (L1-appropriate)
- `toddler-napping-watermelon-pink-shorts.png` — toddler face-down napping, pink watermelon, face hidden in pillow (L3-appropriate, dignity-first)
- `toddler-backpack-moon-cloud-blue.png` — toddler with backpack, blue moon/cloud
- `toddler-potty-ladder-yellow-woodland.png` — toddler on yellow potty ladder, woodland
- `toddler-rearview-cat-mustard.png` — toddler in mustard clothing, cat in background (L3-appropriate)
- `founders-holding-pants-yellow-watermelon.png` — 2 women founders holding training pants, smiling (L2-appropriate, BCBA context)
- `toddler-playing-train-moon-cloud-blue.png` — toddler playing with train, blue moon/cloud
- `toddler-potty-ladder-pink-multicolor.png` — toddler on pink potty ladder, multicolor
- `washing-machine-training-pants.png` — training pants in washing machine
- ❌ `toddlers-backview-disposable-diapers.png` — DO NOT USE (disposable diaper, brand violation)
- ❌ `toddler-outdoors-grass-disposable-diaper.png` — DO NOT USE (disposable diaper, brand violation)
- (a 3rd was flagged for content mismatch)

**Accessories (5 files):**
- `book-potty-training-guide.png` — potty training book
- `cloth-pads-watermelon-astronaut-cat.png` — watermelon/astronaut/cat cloth pads
- `potty-targets-stickers-chart.png` — potty target stickers chart
- `towel-set-llama-cactus.png` — llama/cactus towel set
- `wet-bags-space-zebra-llama.png` — space/zebra/llama wet bags

**Branding (1 file):**
- `black-placeholder.png` — black placeholder for image slots

**Rules:**
- L3 NEVER gets smiling/forced-positive photos — use founders, rearview shots, napping only
- 5 accessories must each appear in at least 1 flow
- All 28 photos in HTML hidden div for bundler
- No two emails in the same flow use the same product photo

## The 11 design rules (non-negotiable)

1. Hero = title first, then component/image/quote, then button. **Never image above title.**
2. The hero middle element varies per email — SVG illustration, quote card, product image, stat, comparison, library component. Pick what fits the message.
3. Product images always live inside a showcase component (name, price, description, CTA). Never standalone.
4. No repeated image combinations across emails in the same flow.
5. 60-day seal only in guarantee emails. The seal must mean something because it's rare.
6. Nothing reusable except footer and logo. Each email unique.
7. No scattered images. Every image sits inside a component with text/pricing/CTA context.
8. Each email is a fundamentally different STRUCTURE based on narrative purpose.
9. No testimonials in onboarding (haven't tried product yet).
10. No product showcase in post-purchase (already own it).
11. Level variants are different designs, not content swaps.

## The 16 retired patterns (DO NOT USE)

These are what made the 55 existing designs look the same. Banned in all new work.

1. Tilted yellow/white/mint quote cards (was in 18/20 flows) — replace with stacked reviews or before/after
2. Gradient band transitions everywhere — replace with wave SVG, dot pattern, thin line, or no divider
3. 60-day seal in non-guarantee flows — keep ONLY in Cart, PP Mid Checkin, Winback B
4. Universal PartBadge → H1 → illustration → CTA opener
5. Universal lime-on-dark CTA — keep ONLY in Cart, Winback B, PP At Risk
6. Universal cream → mint → lavender → yellow → green background
7. Universal Body Signal SVG — keep ONLY in Welcome E3, PP Education D14, FAQ, PP Ext Ed W2
8. Universal dot-list recognition anchors (vary the R2 rendering per flow)
9. Universal PartBadge
10. $ pricing (use €)
11. External labels in customer text ("this customer is a Level 2 mom")
12. Agent-created components that aren't from Giuliano's 53 (use authentic first)
13. Em dashes in copy (use commas, periods, line breaks)
14. Generic card layouts without hard shadows
15. Soft shadows with rgba/blur
16. Fewer than 7 sections per email

## Image strategy per flow

| Flow | Image |
|------|-------|
| Welcome | Maybe (E1, E5, E7, E8) |
| Cart Abandonment | YES (product) |
| Browse Abandonment | YES (product) |
| Site Abandonment | YES (product) |
| Winback A/B | MAYBE (hero only) |
| Replenish A | MAYBE (reminder + product) |
| PP Direct/Extended Upsell | YES (product) |
| All other flows (PP Education, PP Extended Ed, PP Mid Checkin, PP Mary Story, PP At Risk, Replenish B/C, Review Request, Sunset, Transactional, FAQ) | NO (text + placeholder) |

---

# 5. The Creative Director Philosophy

> **This is the operating principle. The subagent is a creative director, not a code-execution engine.**

## The 5-step process (for every subagent)

1. **Read the copy.** Read the whole file. Don't skim. Read the metadata, the body, the Lena signoff, the Creative Strategy section.
2. **Understand the moment.** What is the parent feeling? Confused? Reassured? Urgent? Calm? What does the copy want to make them feel? What does it want them to do?
3. **Browse the library.** `/root/projects/email-ops/email-design/bkc-complete-component-library.md` (972 components across 79 categories). For each section of the email, find the component that BEST represents the moment. Read the actual HTML. Pick what fits.
4. **Pick the photos that match.** The 28 photos have descriptive filenames. If the copy is about a kid taking his first pause, pick a napping/rearview photo. If it's about the founder, use the founders photo. Match the moment.
5. **Track what you used.** Add `// USED: H2, SP8, G1, CT4, Illu_GentleMorning` and `// PHOTOS: fox-red, bunny-pink` comments at the top of every email function.

## What the subagent has permission to do

- **Deviate from any suggested code** if the library has a better fit. The codes are a reference, not an order.
- **Combine multiple library components** in creative ways. Don't pick one — pick what serves the moment.
- **Use agent-created components from the library** when Giuliano's 53 don't have what the moment needs. Log the rationale in the report.

## The "why I picked each component" report

Every subagent must include this in their report-back. 1 sentence per component — what moment in the copy does it serve? This makes the picking auditable. If the parent disagrees with a pick, they can ask the subagent to swap.

---

# 6. The Workflow (how to build one email)

## The 4 inputs
1. The copy file (verbatim)
2. The component library (972 components)
3. Giuliano's source code (tokens, primitives, canvas) — DON'T MODIFY
4. The 28 photos

## The 6 build steps

1. **Read the copy** at `/root/projects/brightkidco/outputs/copy/<flow>/<email>.md`
2. **Write `content.js`** with all text fields from the copy, VERBATIM
3. **Pick the section background colors** (5-8 from the 17-color palette, distinct from other emails in the same flow)
4. **Build the email component** in `emails.jsx` as a React component, using Giuliano's 14 primitives + the components you picked from the library
5. **Wire into the app** (`app.jsx`) — add the artboard entry
6. **Bundle** with `python3 tools/bundle_standalone.py <input.html> <output.html>` to get the 3.2MB self-contained HTML

## Script load order in the HTML (non-negotiable)

1. Brand tokens (`tokens.js` — defines `window.BRAND`, `window.FONT`)
2. Content data (`content.js` — defines `window.FLOW_*`)
3. Canvas framework (`design-canvas.jsx`)
4. Primitives (`primitives.jsx`)
5. Product showcase (`product-showcase.jsx`)
6. Email components (`emails.jsx`)
7. App (`app.jsx`)

## Folder structure

```
BKCO - EMAIL MARKETING/<flow>-flow/
├── content.js             All copy as structured JS objects
├── emails.jsx             All email components
├── app.jsx                Canvas app
└── <Flow Name>.html       Compiled output
```

## DO NOT TOUCH
- `autistic-welcome/` (Giuliano's, do not modify)
- `welcome-flow/primitives.jsx` (shared, do not modify)
- `welcome-flow/product-showcase.jsx` (shared, do not modify)
- `welcome-flow/illustrations.jsx` (shared, do not modify)
- `welcome-flow/design-canvas.jsx` (shared, do not modify)
- `assets/*.png` (logos, do not modify)
- `research/`, `scraps/`, `uploads/`, `references/`

## Naming conventions
- Flow folders: `<flow-name>-flow/` (lowercase, hyphenated)
- Files: `content.js`, `emails.jsx`, `app.jsx`, `<Flow Name>.html`
- Email components: `Email1`, `Email2`, ... `EmailN`
- Content objects: `window.FLOW_<NAME>` (e.g. `window.FLOW_CART`)
- Shared objects: `window.<NAME>_SHARED` (e.g. `window.CART_SHARED`)

**Known bug:** `winback-a-flow/content.js` uses `window.FLOW1_SHARED` (wrong). Should be `window.FLOW_WINBACKA_SHARED`. Fix in Phase 2.

---

# 7. The Bundler + Shipping

## The bundler

`/root/projects/email-ops/email-design/tools/bundle_standalone.py` (286 lines)

Inlines all JS/CSS/images into a single self-contained HTML file (~3.2MB).

```bash
cd /root/projects/email-ops/email-design
python3 tools/bundle_standalone.py "raw/BKCO - EMAIL MARKETING/<flow>/<Flow> Local.html" "raw/<Flow> _standalone_.html"
```

**Known limitation:** The bundler only knows the 11 flat-lay photo names in its ext_resources mapping. The 11 lifestyle + 5 accessory names may need to be added to the bundler. (Pre-dispatch task.)

## Shipping to cachy

**Target:** `ayoub@100.76.121.113` (Tailscale)
**Destination:** `/home/ayoub/Documents/`

```bash
scp "raw/<Flow> _standalone_.html" "ayoub@100.76.121.113:/home/ayoub/Documents/<Flow> _standalone_.html"
ssh ayoub@100.76.121.113 "chmod 644 '/home/ayoub/Documents/<Flow> _standalone_.html'"
```

**Use `ayoub@`, NOT `root@` (root fails with "Permission denied (publickey,password)").**

**Fallback if cachy offline:** Telegram. Bot token in `/root/.hermes/.env`, chat_id `6685671754`. Send zipped HTML via `sendMessage` API with `MEDIA:` prefix.

**Status (verified June 15):** Cachy online, ping works (53ms), SSH as `ayoub@` works.

---

# 8. The Subagent Brief

> **This is the brief that gets pasted into every `delegate_task` call. Every subagent receives this exact format.**

```markdown
─────────────────────────────────────────────
TASK: [flow] · email [N] · [level]
─────────────────────────────────────────────

## YOUR JOB

You are a creative director. You do NOT fill slots. You read the copy, understand the moment, and pick from the actual component library what best represents that moment.

**Process:**
1. Read the copy file at `/root/projects/brightkidco/outputs/copy/[flow]/<file>.md`. Read the whole thing. Don't skim.
2. Understand the moment — what is the parent feeling? What does the copy want to make them feel?
3. Go into `/root/projects/email-ops/email-design/bkc-complete-component-library.md` (972 components). Pick the component that BEST matches the moment. The codes (H1-H10, SP1-SP10, etc.) are a reference, not an order. If the library has a better fit, use it.
4. Pick the photos from the 28 working photos whose filenames match the moment.
5. Track what you used: add `// USED: H2, SP8, G1, CT4, Illu_GentleMorning` and `// PHOTOS: fox-red, bunny-pink` comments at the top of the email function.

## MANDATORY READS (open BEFORE writing any code)

1. `/root/projects/brightkidco/plans/BKC-Plan-Final.md` — this file
2. `/root/projects/brightkidco/outputs/copy/[flow]/<copy-file>.md` — THE COPY
3. `/root/projects/email-ops/email-design/bkc-complete-component-library.md` — THE LIBRARY (972 components)
4. `/root/projects/email-ops/email-design/raw/BKCO - EMAIL MARKETING/welcome-flow/primitives.jsx` — 14 shared components
5. `/root/projects/email-ops/email-design/raw/BKCO - EMAIL MARKETING/welcome-flow/product-showcase.jsx` — 3 product variants
6. `/root/projects/email-ops/email-design/raw/BKCO - EMAIL MARKETING/welcome-flow/illustrations.jsx` — 10 SVG illustrations
7. `/root/projects/email-ops/email-design/raw/BKCO - EMAIL MARKETING/autistic-welcome/variants/tokens.js` — brand tokens
8. `/root/projects/email-ops/skills/email-creative-design/SKILL.md` — pipeline
9. `/root/projects/email-ops/skills/email-creative-design/references/algorithmic-variation-engine.md` — variety rules
10. `/root/projects/email-ops/skills/email-creative-design/references/template-library-patterns.md` — 300 templates
11. `/root/projects/email-ops/skills/taste-skill/SKILL.md` — anti-slop
12. `/root/projects/email-ops/skills/email-creative-design/references/js-template-literal-pitfalls.md` — syntax errors

## SUGGESTED CODES (reference only)

[Hero code, Testimonial code, Guarantee code, CTA code from §7 per-flow assignments. If the library has a better fit, use it. Report why you deviated.]

## MANDATORY RULES

- Copy is VERBATIM. Do NOT rewrite, shorten, or paraphrase.
- No em dashes (—) or double hyphens (--) in copy. Use commas, periods, line breaks.
- No $ pricing. Use € (€34, €30.60 with BRIGHT10, €79.99 bundle).
- Brand tokens exact: teal #2BAEB4, green #5DD07A, ink #1F2D2F, cream #FBF7F1, lime #D8F57C, yellow #FFD866.
- Fonts: Fraunces display, Questrial body, Caveat handwritten.
- Hard shadows only: 3px 3px 0 / 4px 4px 0 / 6px 6px 0 #1F2D2F. No blur, no rgba.
- 2px solid #1F2D2F borders on all cards, images, badges.
- Mobile-first 420px width.
- Border radius: 999px (CTA/badge), 14-24px (cards), 18-20px (images).
- Subject line must fit one of 6 formulas: Observation, Validation, Mechanism tease, Permission frame, Question, Social proof.
- R1-R6 calibration visible: R2 3+ recognition anchors, R3 age ranges, R4 verbal+non-verbal, R5 flexible timeline, R6 low-bar success.
- Trust pyramid: mechanism before guarantee in every email.
- Lena signoff identity per email position: E1 = "BKC team", E2-E6 = "Lena Bauer", F2 = "Lena".
- Closing word per position: "Talk soon" (E1-E2), "With understanding" (E3-E5), "With care" (E6+).
- 3 hard rules: no Mary S. with Lena, no discount during warming, no unengaged volume.
- Every CTA: ` →` arrow.
- ≥7 sections per email.
- ≥1 hard shadow per card.
- ≥1 tilted sticker per email.
- ≥3 Giuliano authentic components per email.
- No universal PartBadge opener, no universal lime-on-dark CTA, no universal cream→mint→lavender bg.
- CONTENT.JS shared key MUST be set. Winback A: use `window.FLOW_WINBACKA_SHARED` (NOT FLOW1_SHARED).

## 16 RETIRED PATTERNS (DO NOT USE)

1. Tilted yellow/white/mint quote cards
2. Gradient band transitions everywhere
3. 60-day seal in non-guarantee flows (keep ONLY Cart, PP Mid Checkin, Winback B)
4. Universal PartBadge → H1 → illustration → CTA opener
5. Universal lime-on-dark CTA (keep ONLY Cart, Winback B, PP At Risk)
6. Universal cream → mint → lavender → yellow → green bg
7. Universal Body Signal SVG (keep ONLY Welcome E3, PP Education D14, FAQ, PP Ext Ed W2)
8. Universal dot-list recognition anchors
9. Universal PartBadge
10. $ pricing (use €)
11. External labels in customer text
12. Agent-created components not from Giuliano's 53
13. Em dashes in copy text
14. Generic card layouts without hard shadows
15. Soft shadows with rgba/blur
16. Fewer than 7 sections per email

## VERIFICATION (run before reporting back)

- File exists, >500 bytes
- Add `// COMBO: [hero]/[testimonial]/[guarantee]/[cta] [skeleton]` header comment
- Add `// USED: H2, SP8, G1, CT4, Illu_GentleMorning` and `// PHOTOS: fox-red, bunny-pink` tracking comments
- `grep "linear-gradient(180deg"` → 0 (no gradient band overuse)
- `grep yellow bg + tilted` → 0 (no tilted quote cards)
- `grep "$" in customer text` → 0 (use €)
- `grep "—" or "--" in copy text` → 0 (em dashes)
- Count sections → ≥7
- Lena signoff + footer present
- R1-R6 visible (R2 3+ recognition anchors)
- Trust pyramid order (mechanism before guarantee)
- Subject fits 6 formulas
- ≥3 Giuliano authentic components used
- ≥1 hard shadow per card
- ≥1 tilted sticker

## REPORT BACK

- Why you picked each component (1 sentence per component — what moment does it serve?)
- File paths produced
- Subject line + formula used
- Component codes used
- Giuliano authentic components used
- Photos used
- R1-R6 visible — which R2 rendering
- Any retired patterns encountered
- Any photos not found
- Bundler output size
- scp confirmation

─────────────────────────────────────────────
```

---

# 9. The 6 Execution Phases

**Total: 19 subagents across 6 phases, 125 designs.** Run 4-5 in parallel within each phase.

## Phase 1 — Flagship reworks (4 subagents, parallel) ← START HERE

| Subagent | Flow | Designs |
|----------|------|---------|
| 1 | Cart Abandonment | 3 |
| 2 | Browse Abandonment | 3 |
| 3 | Checkout Abandonment | 2 |
| 4 | PP Education | 4 |
| **Total** | | **12** |

## Phase 2 — Cross-level reworks (5 subagents, parallel)

| Subagent | Flows | Designs |
|----------|-------|---------|
| 1 | PP Direct Upsell + PP Extended Upsell + PP Mid Checkin + PP Mary Story | 9 |
| 2 | PP At Risk + Replenish A + Replenish B + Replenish C | 11 |
| 3 | Review Request + Site Abandonment + Sunset | 5 |
| 4 | Transactional + FAQ Library | 10 |
| 5 | Winback A GF + Winback B GF + PP Level Detection (fixes FLOW1_SHARED bug) | 8 |
| **Total** | | **43** |

## Phase 3 — Winback A/B level builds (2 subagents, parallel)

| Subagent | Flow | Designs |
|----------|------|---------|
| 1 | Winback A L1/L2/L3 | 9 |
| 2 | Winback B L1/L2/L3 | 9 |
| **Total** | | **18** |

## Phase 4 — Welcome level builds (4 subagents, parallel)

| Subagent | Flow | Designs |
|----------|------|---------|
| 1 | Welcome L1 | 8 |
| 2 | Welcome L2 | 8 |
| 3 | Welcome L3 | 8 |
| 4 | Welcome GF (E1, E7, E8 only) | 8 |
| **Total** | | **32** |

## Phase 5 — PP Extended Ed level builds (4 subagents, parallel)

**First:** create the missing `pp-extended-ed-flow/` folder.

| Subagent | Flow | Designs |
|----------|------|---------|
| 1 | PP Ext Ed L1 | 5 |
| 2 | PP Ext Ed L2 | 5 |
| 3 | PP Ext Ed L3 | 5 |
| 4 | PP Ext Ed GF | 5 |
| **Total** | | **20** |

## Phase 6 — Verify + ship

- Check the 28 photos all get used at least once across the 125
- Check the 53 Giuliano authentic components get used 30+ times
- Bundle 34 HTMLs (one per flow per level)
- scp to cachy
- Ayoub reviews in browser
- Send to Giuliano → collect $1,000

## The Thursday scope

Phase 1 (12 designs across 4 flows) is the realistic scope for the Thursday deadline. Get those 4 flows right, ship to Giuliano, collect $1,000. Continue Phases 2-5 over the following 2 weeks for the full 125.

---

# 10. Per-Flow Assignments (the variety baseline)

> These are SUGGESTIONS for variety coverage, not slot assignments. The subagent reads the copy and picks what matches. Use these to make sure no two emails in the same flow share the same components.

## Cross-level flows

| Flow | Suggested hero | Suggested testimonial | Suggested guarantee | Suggested CTA |
|------|----------------|----------------------|-------------------|---------------|
| Cart | E1: image / E2: quote / E3: gradient | E1: stacked reviews / E2,E3: before-after | 60-day seal (all 3) | Gentle invite (all 3) |
| Browse | Gradient (all 3) | Before-after (all 3) | Promise badges (all 3) | Soft link (all 3) |
| Checkout | E1: split / E2: gradient | (none) | Guarantee cards (both) | Soft link (both) |
| PP Education | D0: sticker / D7: split / D14: gradient / D21: gradient | D7: deep quote / D14: mom+child / D21: review | (none) | Dark block (all 4) |
| PP Direct Upsell | E1: split / E2: gradient | E1: side-by-side review | Dashed quote (both) | Product CTA (both) |
| PP Extended Upsell | E1: expert / E2: review / E3: split | E1: expert quote / E2: side-by-side | Covered/not (all 3) | Dual CTA (all 3) |
| PP Mid Checkin | E1: stat / E2: gradient / E3: gradient | E1: counter | 60-day seal compact (E1 only) | Curiosity code (all 3) |
| PP Mary Story | Handwritten opener | Chapter cards | Refund story | Exit close |
| PP At Risk | Gradient (4 variants) | E1: community thread | G4 (E4 only) | Gentle invite lime (all 4) |
| PP Level Detection | Gradient | Star rating | Trust icons | Next teaser |
| Replenish A | Gradient (all 3) | E1: review | Guarantee cards (E1) | Social CTA (all 3) |
| Replenish B | Gradient (both) | (none) | Covered checklist (E1) | Exit close (both) |
| Replenish C | E1: countdown / E2: gradient | E1: yellow quote | Dashed quote (E1) | Countdown (both) |
| Review Request | E1: gradient / E2: 2am mom | E2: customer photo | (none) | Social CTA (both) |
| Site Abandonment | Gradient | UGC photo grid | Promise badges | Soft link |
| Sunset | E1: handwritten / E2: gradient | E1: diary entry | (none) | Exit close (both) |
| Transactional | Minimal (all 4) | (none) | Trust icons (E1) | Standard CTA (all 4) |
| FAQ Library | E1: gradient / E2: gradient / E3-E6: FAQ blocks | (none) | (none) | Soft link (all 6) |

## Level-specific flows

| Flow | Per-level notes |
|------|-----------------|
| Winback A | 12 designs (3 × L1/L2/L3/GF). Hero gradient (3 variants). Stat row testimonial (E1). Covered/not guarantee (E1). Dark block CTA (all 3). |
| Winback B | 12 designs (3 × L1/L2/L3/GF). Hero gradient (E1, E3) / split (E2). Customer photo testimonial (E1). 60-day seal compact guarantee (E1). Gentle invite lime CTA (all 3). |
| Welcome Flow 1 | 32 designs (8 × 4 levels). Per-level: L1=Mirror/Bold/Question, L2=Scientific/Data/Before, L3=Identity/Whisper, GF=Curiosity/Story. E1 GF keeps V10_Final. |
| PP Extended Ed | 20 designs (5 × L1/L2/L3/GF). W1 gradient + step cards. W2 split + mechanism. W3 stat + checklist. W4 gradient + tip cards. W5 gradient + identity. All no images. |

---

# 11. The 8 Documented Subagent Errors

These have actually happened. Include in every brief to prevent.

1. **`FLOW1_SHARED` missing** — `winback-a-flow/content.js` has this bug. Use `window.FLOW_WINBACKA_SHARED` not `window.FLOW1_SHARED`.
2. **`const IMG` redeclaration** — `var IMG` is already defined in `LOCAL_HTML_TEMPLATE.html`. Do NOT redefine.
3. **`</script>` in template JSON** — Breaks script tags. Use `<\/script>` or different content.
4. **Wrong font paths** — Use Google Fonts CDN URLs, not local files.
5. **Master canvas blank** — Out of scope for individual flow builds. Skip.
6. **`ERR_ACCESS_TAILSCALE_DENIED`** — Auth issue. Retry the exact same brief. ~50% of first dispatches fail this way.
7. **Subagent rewrote Local HTML** — Brief must say: "modify emails.jsx only, do not touch Local.html"
8. **`sed` mangled HTML** — No sed/awk on HTML. No manual page edits. Rewrite the file.

---

# 12. Pre-Dispatch Checklist (tiered: MUST vs NICE)

> **Do the MUST tier (~30 min) before dispatching ANY subagent. Do the NICE tier (~2-3 hours) in parallel while subagents run, or skip if time-pressured.**

## MUST tier (5 items, ~30 min, do these or die)

1. **Tailscale connectivity** — `ping -c 2 -W 2 100.76.121.113` works (✅ verified June 15)
2. **SSH to cachy as ayoub** — `ssh -o ConnectTimeout=5 -o BatchMode=yes ayoub@100.76.121.113 echo ok` (✅ verified)
3. **All 12 mandatory read files exist** (✅ verified — see Appendix B)
4. **Create the missing `pp-extended-ed-flow/` folder** (5 min, just `mkdir`)
5. **Note the Winback A `FLOW1_SHARED` bug** — Phase 2 Agent 5 fixes it. Don't dispatch Winback A in Phase 1 (it's not in Phase 1, but if you ever do, know about the bug)

**That's it. 30 min. Now dispatch Phase 1.** Everything below is NICE.

## NICE tier (11 items, ~2-3 hours, do in parallel with subagent work)

6. **Create the Production Tracker** at `/root/projects/email-ops/email-design/PRODUCTION-TRACKER.md` (use template in §13)
7. **Photo content verified** — open each lifestyle photo, confirm name matches content (3 are unusable per §4)
8. **Bundler lifestyle support** — add 11 lifestyle + 5 accessory names to bundler ext_resources, test bundling a Local.html with a lifestyle photo
9. **Create the Canonical HTML Template** at `/root/projects/email-ops/email-design/raw/BKCO - EMAIL MARKETING/_CANONICAL_LOCAL_HTML_TEMPLATE.html` — same canvas chrome, same fonts, same dimensions for all flows
10. **Create the `variety_audit.py` script** — reads `// USED:` and `// PHOTOS:` comments from emails.jsx, produces the cross-flow comparison table
11. **PP Level Detection** — SKIP level variants (cross-level only, 2 built = correct)
12. **Welcome E1 strategy** — V10_Final kept as E1 GF. Build L1/L2/L3 E1 separately.
13. **Master canvas** — skipped (out of scope, known broken)
14. **Subject line formulas check** — spot-check 5 copy files
15. **Copy composition check** — spot-check 3 copy files (30-50% authentic / 30-50% Lena / 10-20% mechanism)
16. **Photo assignments confirmed** — every photo has a primary use in some flow

**If you skip the NICE tier entirely, you can still dispatch Phase 1.** The MUST tier is the floor. The NICE tier improves the output but is not blocking.

---

# 13. Production Tracker Template

Create at `/root/projects/email-ops/email-design/PRODUCTION-TRACKER.md`:

```markdown
# BKC Production Tracker

> Started: 2026-06-16
> Goal: 125 designs shipped, $1,000 collected
> Status: [update]

## PROGRESS

| Phase | Flows | Designs | Status | File paths |
|-------|-------|---------|--------|------------|
| 1: Flagship (Cart, Browse, Checkout, PP Ed) | 4 | 12 | ⏳ | — |
| 2: Cross-level reworks | 16 | 50 | ⏳ | — |
| 3: Winback A/B levels | 2 | 18 | ⏳ | — |
| 4: Welcome levels | 4 | 32 | ⏳ | — |
| 5: PP Ext Ed levels | 4 | 20 | ⏳ | — |
| 6: Verify + ship | — | — | ⏳ | — |
| **TOTAL** | **22** | **125** | | |

## HOW TO RESUME

1. Read this file
2. Check which phase is ⏳
3. Read /root/projects/brightkidco/plans/BKC-Plan-Final.md (this file)
4. Dispatch the next batch using the brief template
5. Update this tracker

## DESIGN RULES (persist across sessions)

- Verbatim copy from /root/projects/brightkidco/outputs/copy/
- Brand tokens: teal #2BAEB4, green #5DD07A, ink #1F2D2F, cream #FBF7F1, lime #D8F57C
- 2px solid #1F2D2F borders, hard 3px/4px/6px shadows (no blur, no rgba)
- Part badge: bg #FFD866, rotate -1.5deg
- Signoff: dark #1F2A2C, gradient ring, Caveat 42px #D8F57C signature
- Lena identity: E1 = "BKC team", E2-E6 = "Lena Bauer", F2 = "Lena"
- € pricing, no em dashes, ≥7 sections per email
```

---

# 14. Subagent Dispatch Mechanics

I use `delegate_task` from the delegation toolset. Each subagent:
- Has its own conversation (no context pollution)
- Has its own terminal session
- Gets a specific goal + context + toolsets
- Returns a final summary when done

**For Phase 1 (4 subagents in parallel), I call `delegate_task` 4 times in one tool block.**

```python
delegate_task(
    goal="Build Cart Abandonment flow (3 emails) per /root/projects/brightkidco/plans/BKC-Plan-Final.md. Read the copy files verbatim, follow the 7-step build, apply the creative director philosophy. Output: cart-flow/emails.jsx + Cart Abandonment Local.html + bundled _standalone_.html.",
    context="[FULL BRIEF TEMPLATE FROM §8 PASTED HERE, with Cart-specific values filled in]",
    toolsets=["file", "terminal", "web"]
)
# ... x4 for Cart, Browse, Checkout, PP Education
```

**Maximum 5 subagents in parallel.**

**Auth note:** ~50% of first dispatches fail with `ERR_ACCESS_TAILSCALE_DENIED`. Retry the exact same brief.

**After subagent returns, the parent (me) does:**
1. Read the subagent's report (especially "why I picked each component")
2. Run `python3 tools/bundle_standalone.py` to bundle
3. Open the bundled HTML, verify it renders at 420px
4. Run the verification greps
5. If passes: scp to cachy
6. If fails: re-dispatch the subagent with the specific failure

---

# 15. Post-Ship (after Giuliano pays $1,000)

- **Retainer conversation** ($1,500-2,000/month)
- **Client acquisition sprint** — figure out how to get the next client so we're not one failed client from zero again
- **Document the BKC workflow** as a reusable skill for other e-commerce clients
- **Update the wiki** with what worked
- **Save this plan** to a stable location

---

# 16. What is NOT in scope

- ❌ Showcase site — portfolio decoration, not revenue
- ❌ Wiki refinement
- ❌ TENZA Platform new features
- ❌ Email Service Delivery System productization
- ❌ Link processing backlog
- ❌ Any task not directly moving BKC delivery forward

---

# Appendix A — Key file paths

```
# THE PLAN
/root/projects/brightkidco/plans/BKC-Plan-Final.md                            # THIS FILE

# THE COPY (125 verbatim .md files)
/root/projects/brightkidco/outputs/copy/<flow>/<email>.md

# THE BUILD ENV
/root/projects/email-ops/email-design/raw/BKCO - EMAIL MARKETING/<flow>-flow/
  ├── content.js                # copy as JS data
  ├── emails.jsx                # email components
  ├── app.jsx                   # canvas app
  └── <Flow Name> Local.html    # source HTML

# THE BUNDLER + OUTPUTS
/root/projects/email-ops/email-design/tools/bundle_standalone.py   # 286-line bundler
/root/projects/email-ops/email-design/raw/<Flow> _standalone_.html  # bundled output

# THE LIBRARY (972 components)
/root/projects/email-ops/email-design/bkc-complete-component-library.md  # 1.7MB
/root/projects/email-ops/email-design/component-index.md                  # condensed index

# THE PHOTOS (28 working)
/root/projects/email-ops/email-design/raw/product-photos/flat-lay/        # 12 files
/root/projects/email-ops/email-design/raw/product-photos/lifestyle/       # 8 working + 3 unusable
/root/projects/email-ops/email-design/raw/product-photos/accessories/     # 5 files
/root/projects/email-ops/email-design/raw/product-photos/branding/        # 1 file

# THE STRATEGY + SYNTHESIS
/root/projects/brightkidco/demands/GIULIANO-DEMANDS.md           # 2010 lines
/root/projects/brightkidco/outputs/strategy/1-full-email-strategy.md  # 1782 lines
/root/projects/brightkidco/outputs/synthesis/01-customer-avatar.md     # 4 levels
/root/projects/brightkidco/outputs/synthesis/11-brand-voice-reference.md  # Lena's voice
/root/projects/brightkidco/outputs/synthesis/05-customer-language-bank.md  # real parent quotes

# GIULIANO'S SOURCE (do not modify)
/root/projects/email-ops/email-design/raw/BKCO - EMAIL MARKETING/autistic-welcome/variants/tokens.js
/root/projects/email-ops/email-design/raw/BKCO - EMAIL MARKETING/welcome-flow/primitives.jsx
/root/projects/email-ops/email-design/raw/BKCO - EMAIL MARKETING/welcome-flow/product-showcase.jsx
/root/projects/email-ops/email-design/raw/BKCO - EMAIL MARKETING/welcome-flow/illustrations.jsx
/root/projects/email-ops/email-design/raw/BKCO - EMAIL MARKETING/welcome-flow/flow2-emails.jsx
/root/projects/email-ops/email-design/raw/BKCO - EMAIL MARKETING/welcome-flow/V10-final.jsx
```

# Appendix B — The 12 skills the subagent reads

1. `/root/projects/brightkidco/plans/BKC-Plan-Final.md` — this file
2. `/root/projects/brightkidco/outputs/copy/<flow>/<email>.md` — THE COPY
3. `/root/projects/email-ops/email-design/bkc-complete-component-library.md` — 972 components
4. `/root/projects/email-ops/email-design/raw/BKCO - EMAIL MARKETING/welcome-flow/primitives.jsx`
5. `/root/projects/email-ops/email-design/raw/BKCO - EMAIL MARKETING/welcome-flow/product-showcase.jsx`
6. `/root/projects/email-ops/email-design/raw/BKCO - EMAIL MARKETING/welcome-flow/illustrations.jsx`
7. `/root/projects/email-ops/email-design/raw/BKCO - EMAIL MARKETING/autistic-welcome/variants/tokens.js`
8. `/root/projects/email-ops/skills/email-creative-design/SKILL.md`
9. `/root/projects/email-ops/skills/email-creative-design/references/algorithmic-variation-engine.md`
10. `/root/projects/email-ops/skills/email-creative-design/references/template-library-patterns.md`
11. `/root/projects/email-ops/skills/taste-skill/SKILL.md`
12. `/root/projects/email-ops/skills/email-creative-design/references/js-template-literal-pitfalls.md`

# Appendix C — Verification commands (parent runs after subagent returns)

```bash
# File exists
test -f "<flow>-flow/emails.jsx" && echo "✅ JSX exists"
test -f "<flow>-flow/<Flow> Local.html" && echo "✅ Local HTML exists"

# Quality checks
grep -c "linear-gradient(180deg" "<flow>-flow/emails.jsx"   # should be 0
grep "—" "<flow>-flow/emails.jsx"                           # should be 0
grep "\\\$" "<flow>-flow/emails.jsx" | grep -v "price"      # should be 0

# Count sections (rough)
grep -c "return (" "<flow>-flow/emails.jsx"

# Bundle
cd /root/projects/email-ops/email-design
python3 tools/bundle_standalone.py "raw/BKCO - EMAIL MARKETING/<flow>-flow/<Flow> Local.html" "raw/<Flow> _standalone_.html"
ls -la "raw/<Flow> _standalone_.html"  # should be ~3.2MB

# Ship
scp "raw/<Flow> _standalone_.html" "ayoub@100.76.121.113:/home/ayoub/Documents/<Flow> _standalone_.html"
ssh ayoub@100.76.121.113 "chmod 644 '/home/ayoub/Documents/<Flow> _standalone_.html'"
```

# Appendix D — Phase 1 ready-to-paste briefs (executable as-is)

When the pre-dispatch checklist is done, paste these into `delegate_task` calls. Each brief is complete — goal, context, toolsets all filled in. The context is the full §8 brief template with the per-flow values from §10 substituted.

**Run all 4 in ONE tool block (parallel). Wait for all 4. Verify each. Bundle each. Ship each.**

---

## D.1 Cart Abandonment (3 emails)

```python
delegate_task(
    goal="""Build the Cart Abandonment flow (3 emails) for BrightKidCo.

Read these 3 copy files verbatim (use the exact text, do NOT rewrite):
- /root/projects/brightkidco/outputs/copy/cart/cart-02-e1.md
- /root/projects/brightkidco/outputs/copy/cart/cart-02-e2.md
- /root/projects/brightkidco/outputs/copy/cart/cart-02-e3.md

For each email, follow the creative director philosophy (§5 of the plan): read the copy, understand the moment, browse the 972-component library, pick what matches.

Suggested variety per email (use as reference, deviate if better fit found):
- E1: image hero, stacked reviews testimonial, 60-day seal, gentle invite CTA
- E2: parent quote hero, before-after testimonial, 60-day seal, gentle invite CTA
- E3: gradient headline, before-after testimonial, 60-day seal, gentle invite CTA

Output files:
- /root/projects/email-ops/email-design/raw/BKCO - EMAIL MARKETING/cart-flow/emails.jsx
- /root/projects/email-ops/email-design/raw/BKCO - EMAIL MARKETING/cart-flow/Cart Abandonment Local.html
- /root/projects/email-ops/email-design/raw/BKCO - EMAIL MARKETING/cart-flow/app.jsx
- /root/projects/email-ops/email-design/raw/BKCO - EMAIL MARKETING/cart-flow/content.js

Then run the bundler:
cd /root/projects/email-ops/email-design && python3 tools/bundle_standalone.py "raw/BKCO - EMAIL MARKETING/cart-flow/Cart Abandonment Local.html" "raw/Cart Abandonment _standalone_.html"

Report back the bundled HTML size and the component picks (with 'why I picked each component' justification).""",

    context="""You are a creative director. Read the copy, browse the library, pick what matches the moment. Do NOT fill slots with predefined codes.

## MANDATORY READS (open BEFORE writing any code)
1. /root/projects/brightkidco/plans/BKC-Plan-Final.md (the master plan)
2. /root/projects/brightkidco/outputs/copy/cart/cart-02-e1.md, e2.md, e3.md (THE COPY — read all 3 in full)
3. /root/projects/email-ops/email-design/bkc-complete-component-library.md (THE LIBRARY — 972 components, browse by category)
4. /root/projects/email-ops/email-design/raw/BKCO - EMAIL MARKETING/welcome-flow/primitives.jsx (14 shared components)
5. /root/projects/email-ops/email-design/raw/BKCO - EMAIL MARKETING/welcome-flow/product-showcase.jsx (3 product variants)
6. /root/projects/email-ops/email-design/raw/BKCO - EMAIL MARKETING/welcome-flow/illustrations.jsx (10 SVG illustrations)
7. /root/projects/email-ops/email-design/raw/BKCO - EMAIL MARKETING/autistic-welcome/variants/tokens.js (brand tokens)
8. /root/projects/email-ops/skills/email-creative-design/SKILL.md
9. /root/projects/email-ops/skills/email-creative-design/references/algorithmic-variation-engine.md
10. /root/projects/email-ops/skills/email-creative-design/references/template-library-patterns.md
11. /root/projects/email-ops/skills/taste-skill/SKILL.md
12. /root/projects/email-ops/skills/email-creative-design/references/js-template-literal-pitfalls.md

## MANDATORY RULES
- Copy is VERBATIM. Do NOT rewrite, shorten, or paraphrase any text.
- No em dashes (—) or double hyphens (--) in copy. Use commas, periods, line breaks.
- No $ pricing. Use € (€34, €30.60 with BRIGHT10, €79.99 bundle).
- Brand tokens exact: teal #2BAEB4, green #5DD07A, ink #1F2D2F, cream #FBF7F1, lime #D8F57C, yellow #FFD866.
- Fonts: Fraunces display, Questrial body, Caveat handwritten.
- Hard shadows only: 3px 3px 0 / 4px 4px 0 / 6px 6px 0 #1F2D2F. No blur, no rgba.
- 2px solid #1F2D2F borders on all cards, images, badges.
- Mobile-first 420px width.
- Border radius: 999px (CTA/badge), 14-24px (cards), 18-20px (images).
- Subject lines must fit one of 6 formulas: Observation, Validation, Mechanism tease, Permission frame, Question, Social proof.
- R1-R6 calibration visible: R2 3+ recognition anchors, R3 age ranges, R4 verbal+non-verbal, R5 flexible timeline, R6 low-bar success.
- Trust pyramid: mechanism section before guarantee section in every email.
- Lena signoff identity: 'The BrightKidCo team' for E1, 'Lena Bauer' for E2/E3, with closing word 'Talk soon'.
- Every CTA must have ' →' arrow.
- ≥7 sections per email.
- ≥1 hard shadow per card.
- ≥1 tilted sticker per email (-1.5deg, #FFD866 bg).
- ≥3 Giuliano authentic components per email.
- CONTENT.JS shared key MUST be set: window.CART_SHARED.

## 16 RETIRED PATTERNS (DO NOT USE)
1. Tilted yellow/white/mint quote cards
2. Gradient band transitions everywhere
3. 60-day seal in non-guarantee flows (allowed in Cart)
4. Universal PartBadge → H1 → illustration → CTA opener
5. Universal lime-on-dark CTA (allowed in Cart)
6. Universal cream → mint → lavender → yellow → green bg
7. Universal Body Signal SVG
8. Universal dot-list recognition anchors
9. Universal PartBadge
10. $ pricing (use €)
11. External labels in customer text
12. Agent-created components not from Giuliano's 53
13. Em dashes in copy text
14. Generic card layouts without hard shadows
15. Soft shadows with rgba/blur
16. Fewer than 7 sections per email

## PHOTOS TO USE (descriptive names — match to moment in copy)
- fox-red (Cart E1 hero) — red fox print training pant
- bunny-hearts-pink (Cart E1 testimonial) — pink bunny hearts
- cloud-raindrop-white (Cart E2 hero) — white cloud/raindrop print
- fox-woodland (Cart E2 testimonial) — woodland fox
- watermelon-pink (Cart E3 hero) — pink watermelon
- giraffe-yellow (Cart E3 testimonial) — yellow giraffe

## VERIFICATION (run before reporting back)
- File exists, >500 bytes
- Add `// COMBO: [hero]/[testimonial]/[guarantee]/[cta] [skeleton]` header comment per email function
- Add `// USED: H2, SP8, G1, CT4, Illu_GentleMorning` and `// PHOTOS: fox-red, bunny-pink` tracking comments
- `grep 'linear-gradient(180deg'` → 0
- `grep yellow bg + tilted` → 0
- `grep '$' in customer text` → 0
- `grep '—' or '--' in copy text` → 0
- Count sections → ≥7
- Lena signoff + footer present
- R1-R6 visible (R2 3+ recognition anchors)
- Trust pyramid order (mechanism before guarantee)
- ≥3 Giuliano authentic components used
- ≥1 hard shadow per card
- ≥1 tilted sticker

## REPORT BACK
- Why you picked each component (1 sentence per component — what moment does it serve?)
- File paths produced
- Subject line + formula used
- Component codes used
- Giuliano authentic components used
- Photos used
- Bundler output size""",

    toolsets=["file", "terminal"]
)
```

---

## D.2 Browse Abandonment (3 emails)

```python
delegate_task(
    goal="""Build the Browse Abandonment flow (3 emails) for BrightKidCo.

Read these 3 copy files verbatim (do NOT rewrite):
- /root/projects/brightkidco/outputs/copy/browse/browse-04-e1.md
- /root/projects/brightkidco/outputs/copy/browse/browse-04-e2.md
- /root/projects/brightkidco/outputs/copy/browse/browse-04-e3.md

Suggested variety per email:
- E1, E2, E3: gradient headline hero, before-after testimonial, promise badges, soft link CTA

Output files:
- /root/projects/email-ops/email-design/raw/BKCO - EMAIL MARKETING/browse-flow/emails.jsx
- /root/projects/email-ops/email-design/raw/BKCO - EMAIL MARKETING/browse-flow/Browse Abandonment Local.html
- /root/projects/email-ops/email-design/raw/BKCO - EMAIL MARKETING/browse-flow/app.jsx
- /root/projects/email-ops/email-design/raw/BKCO - EMAIL MARKETING/browse-flow/content.js

Then run the bundler:
cd /root/projects/email-ops/email-design && python3 tools/bundle_standalone.py "raw/BKCO - EMAIL MARKETING/browse-flow/Browse Abandonment Local.html" "raw/Browse Abandonment _standalone_.html"

Report back the bundled HTML size and the component picks.""",

    context="[SAME FULL §8 BRIEF TEMPLATE as D.1, with the per-flow values from §10 for Browse: gradient headline / before-after / promise badges / soft link / fox-red + whale / pink. CONTENT.JS shared key: window.BROWSE_SHARED. Lena identity: 'Lena Bauer' for all 3, closing 'Talk soon'.]",

    toolsets=["file", "terminal"]
)
```

---

## D.3 Checkout Abandonment (2 emails)

```python
delegate_task(
    goal="""Build the Checkout Abandonment flow (2 emails) for BrightKidCo.

Read these 2 copy files verbatim:
- /root/projects/brightkidco/outputs/copy/checkout/checkout-03-e1.md
- /root/projects/brightkidco/outputs/copy/checkout/checkout-03-e2.md

Suggested variety per email:
- E1: split layout hero, no testimonial, guarantee cards, soft link CTA
- E2: gradient headline hero, no testimonial, guarantee cards, soft link CTA

Output files in /root/projects/email-ops/email-design/raw/BKCO - EMAIL MARKETING/checkout-flow/.

Then run the bundler, report back the bundled HTML size and component picks.""",

    context="[SAME FULL §8 BRIEF TEMPLATE as D.1, with per-flow values for Checkout: split / no testimonial / guarantee cards / soft link / fox-red + giraffe. CONTENT.JS shared key: window.CHECKOUT_SHARED. Lena identity: 'Lena Bauer' for both, closing 'Talk soon'.]",

    toolsets=["file", "terminal"]
)
```

---

## D.4 PP Education (4 emails: D0, D7, D14, D21)

```python
delegate_task(
    goal="""Build the PP Education flow (4 emails) for BrightKidCo.

Read these 4 copy files verbatim:
- /root/projects/brightkidco/outputs/copy/pp-education/pped-11-d0.md
- /root/projects/brightkidco/outputs/copy/pp-education/pped-11-d7.md
- /root/projects/brightkidco/outputs/copy/pp-education/pped-11-d14.md
- /root/projects/brightkidco/outputs/copy/pp-education/pped-11-d21.md

Suggested variety per email:
- D0: sticker row hero, no testimonial, step cards, dark block CTA
- D7: split layout hero, deep quote testimonial, mechanism diagram, dark block CTA
- D14: gradient headline hero, mom+child photo testimonial, checklist, dark block CTA
- D21: gradient headline hero, review screenshot testimonial, section header, dark block CTA

Output files in /root/projects/email-ops/email-design/raw/BKCO - EMAIL MARKETING/pp-education-flow/.

Then run the bundler, report back the bundled HTML size and component picks.""",

    context="[SAME FULL §8 BRIEF TEMPLATE as D.1, with per-flow values for PP Ed. PP Ed is text-heavy (no product images). CONTENT.JS shared key: window.PPEDUCATION_SHARED. Lena identity: 'Lena Bauer' for all 4, closing 'With understanding'.]",

    toolsets=["file", "terminal"]
)
```

---

## D.5 All 4 in ONE tool block

When ready, paste all 4 of the above `delegate_task(...)` calls in a single tool invocation block. They run in parallel. Wait for all 4 to return.

If 1 or more return with 401 auth error, retry just those 1-2 with the same brief (max 2 retries each).

After all 4 return, run Appendix C verification on each, bundle each, scp each to cachy.

Message Ayoub with the results (file names, sizes, any retries/issues).

**Then STOP. Wait for Ayoub's response before Phase 2.**

---

**END OF PLAN.**

**This is the source of truth. Any contradiction with other files, this file wins. Run §0 first, then the rest. Don't ask the user questions. Just execute.**
