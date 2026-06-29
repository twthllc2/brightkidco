# Stage 2 Picks Audit Report

**Audit scope:** All 125 emails with `## STAGE 2 PICKS` sections under `outputs/copy/`
**Picks examined:** 932 total picks across 125 files
**Catalog:** 949 components (901 unique IDs) in `outputs/email-assets/component-catalog.json`
**Tracker:** 309 components in `_notes/component-usage.json` (all under 8-cap post-cleanup)

---

## Headline numbers

| Check | Count | % of picks |
|---|---|---|
| **Total picks examined** | 932 | 100% |
| **Existence failures (picks not in 949-catalog)** | **0** | **0.0%** |
| **Position mismatches** | 153 | 16.4% |
| **Level calibration violations** | 53 | 5.7% |
| **Clean picks (pass all 3 checks)** | 726 | 77.9% |

**Existence check: PASS** — every picked component ID resolves to a catalog entry (after ID normalization, e.g. `DEEP-7` → `DEEP-07`).

---

## By level

| Level | Total picks | Existence fails | Position mismatches | Level calibration violations | Clean % |
|---|---:|---:|---:|---:|---:|
| **L1** (Sarah) | 134 | 0 | 13 (9.7%) | 6 (4.5%) | 85.8% |
| **L2** (Lisa) | 156 | 0 | 16 (10.3%) | 1 (0.6%) | 89.1% |
| **L3** (Maria) | 112 | 0 | 8 (7.1%) | 4 (3.6%) | 89.3% |
| **GF** (General) | 530 | 0 | 116 (21.9%) | 42 (7.9%) | 70.2% |
| **All** | 932 | 0 | 153 (16.4%) | 53 (5.7%) | 77.9% |

L3 has the **cleanest picks** (89.3% pass), L2 next (89.1%), L1 third (85.8%), and **GF is the noisiest** (70.2%) — and it accounts for 81% of all position mismatches.

---

## By flow

| Flow | Total | Pos-mismatch | Level-viol | Worst single file |
|---|---:|---:|---:|---|
| **replenish-a** | 40 | **28** | 0 | repa-15-e2/e3 (10 each), repa-15-e1 (8) |
| **replenish-c** | 29 | 16 | 3 | repc-17-e1 (10) |
| **replenish-b** | 24 | 14 | 0 | repb-16-e1 (8) |
| **welcome** | 239 | 14 | 9 | spread across all 8 emails × 4 levels |
| **winback-a** | 80 | 14 | 4 | per-email ~1-2 |
| **winback-b** | 72 | 13 | 4 | per-email ~1-2 |
| **pp-extended-ed** | 146 | 12 | 5 | per-email ~1-2 |
| **faq-library** | 61 | 10 | 10 | faq-21-e1 (6) |
| **transactional** | 25 | 8 | 0 | per-email 1-2 |
| **sunset** | 16 | 7 | 0 | per-email 1-2 |
| **review-request** | 21 | 6 | 1 | review-18-e1 (4) |
| **pp-education** | 32 | 4 | 2 | pped-11-d14 (4) |
| **pp-direct-upsell** | 13 | 0 | 3 | all L2 audience-exclude |
| **browse, cart, checkout, pp-at-risk, pp-extended-upsell, pp-level-detection, pp-mary-story, pp-mid-checkin, site-abandonment** | various | 0-2 | 0-3 | spot issues |

**Top-3 problem flows:** `replenish-a`, `replenish-c`, `replenish-b` — all 3 are GF (universal-level) replenishment flows with 28/16/14 position mismatches respectively.

---

## Top 10 worst violations (specific)

### 1. `OBJ-06` ("Not For Us Validation") used as hook / CTA / signoff / footer in same email
- **File:** `outputs/copy/faq-library/faq-21-e1.md` (and e2, e3, e4, e5, e6)
- **Violation type:** Position mismatch + audience-exclude
- **Catalog:** `OBJ-06` is `position=body_mechanism`, `audience=[L2]`
- **Used as:** `hook-whether-or-if-universal-recognition`, `what-this-doesn-t-promise-does-offer`, `cta-button-brand-green-pill`, `lena-sign-off-short-variant`, `footer-static`
- **Impact:** One L2-only body-mechanism component doing the work of 5 different sections, including the CTA button and the sign-off. This is a single component being used 5+ times in the same email for completely different roles. The file uses it 5 times; across the faq-library flow, OBJ-06 is reused 8 times (cap is 8/8).

### 2. `PROD-4` ("Cross-Section" / product_showcase) used for every section in replenish-a emails
- **Files:** `outputs/copy/replenish-a/repa-15-e1.md`, `repa-15-e2.md`, `repa-15-e3.md`
- **Violation type:** Position mismatch (5 sections all picking PROD-4)
- **Catalog:** `PROD-4` is `position=product_showcase`
- **Used as:** `brightkidco-letterhead`, `hero-image-band`, `opener-hook`, `three-family-testimonial-pattern`, `mechanism-refresher`, `cta-section`, `next-time-forward-look`, `footer`
- **Impact:** A single product-showcase component is being used for letterhead, hero, mechanism, CTA, sign-off, and footer. PROD-4 hits the 8/8 cap from these files alone.

### 3. `2.3` ("Teal CTA Hero") picked in L2, L3, and GF emails (calibration breach)
- **L2 (forbidden teal #2):** `outputs/copy/winback-a/winback-a-19-e1-l2.md` — role `cta-low-aggression-text-link`
- **L3 (cream/earth-only breach):** `outputs/copy/welcome/welcome-01-e3-l3.md` — role `prose-block-micro-win-mirror`
- **GF (forbidden teal #1):** `outputs/copy/replenish-c/repc-17-e1.md` — role `brightkidco-letterhead`
- **GF (forbidden teal #2):** `outputs/copy/winback-b/winback-b-24-e3-gf.md` — role `offer-guarantee-the-last-invitation`
- **Violation type:** Teal is **forbidden in L2 + GF** (L2 spec: muted greens, no teal; GF spec: no teal). L3 spec says cream/earth tones only — teal is a hard breach.
- **Impact:** This is the *only* catalog component with the word "Teal" in its name. It should never have been picked for any of these roles. A single `cid != '2.3'` guard in the picker for L2/L3/GF would have caught all 4 of these.

### 4. `M1` ("Emotional Hero", L2-only) used in GF emails as footer
- **Files:** `outputs/copy/replenish-c/repc-17-e1.md` (role=footer), `outputs/copy/winback-a/winback-a-19-e2-l3.md` (role=lena-sign-off-long-variant-older-son-p-s)
- **Violation type:** Audience-exclude + position mismatch
- **Catalog:** `M1` is `position=hero`, `audience=[L2]`
- **Impact:** An L2-only hero component being used for an L3 sign-off and a GF footer. The L2 audience tag should have made this a non-starter for GF/L3.

### 5. `LETTER-11` ("Margin Notes", L2-only) used in L1 emails for callouts
- **Files:** `outputs/copy/welcome/welcome-01-e2-l1.md` (role=callout-quote-highlight), `outputs/copy/welcome/welcome-01-e7-l1.md` (role=testimonial-stack-mini-wins)
- **Violation type:** Audience-exclude
- **Catalog:** `LETTER-11` is `position=body_recognition`, `audience=[L2]`
- **Impact:** L1 "Sarah" emails picking a L2-only "Margin Notes" callout component for testimonial stacks. Sarah is supposed to get L1-specific parent-quote callouts, not L2's clinical BCBA-flavored margin notes.

### 6. `7` ("Parent Stories (Emotional Proof)", L2-only) used in L1, L3, GF
- **Files:** `outputs/copy/pp-extended-ed/pped-22-e4-l1.md` (role=peer-mom-testimonial-prompt-fading-success), `outputs/copy/welcome/welcome-01-e6-l1.md` (role=anchor-quote-callout), `outputs/copy/welcome/welcome-01-e4-l3.md` (role=late-train-anecdote-stack)
- **Violation type:** Audience-exclude
- **Catalog:** `7` is `position=body_recognition`, `audience=[L2]`
- **Impact:** L2-only "Parent Stories" component being used for L1 testimonial stacks and an L3 late-trainer anecdote stack. Each level needs its own testimonial/component flavor.

### 7. `STORY-04` ("Deep Quote", L2-only) used in GF for three-family proof
- **Files:** `outputs/copy/cart/cart-02-e1.md` (role=three-family-proof), `outputs/copy/pp-extended-ed/pped-22-e3-gf.md` (role=hero-illustration-the-invisible-bridge)
- **Violation type:** Audience-exclude + position mismatch (hero role)
- **Catalog:** `STORY-04` is `position=body_recognition`, `audience=[L2]`
- **Impact:** An L2-only "Deep Quote" being used for a GF hero illustration slot, plus as a three-family proof in a cart email.

### 8. `EMO-6` ("Parent Quote", L2-only) used in L1 for offer block
- **File:** `outputs/copy/winback-b/winback-b-24-e2-l1.md` (role=updated-offer-low-barrier-entry)
- **Violation type:** Audience-exclude + position mismatch
- **Catalog:** `EMO-6` is `position=emotional_support`, `audience=[L2]`
- **Impact:** L1 "Sarah" offer block uses an L2-only parent-quote component. The L1 spec wants L1-flavored language, not L2 clinical/testimonial phrasing.

### 9. `12.2` ("Footer (Giuliano source)", L2-only) used in L1 as signoff
- **File:** `outputs/copy/welcome/welcome-01-e8-l1.md` (role=signoff-lena-long)
- **Violation type:** Audience-exclude + position mismatch
- **Catalog:** `12.2` is `position=signoff_footer`, `audience=[L2]`
- **Impact:** L2-only footer component being used for L1's final email sign-off. The L1 Lena sign-off should be the universal `12.1` Lena Signoff (which is `audience=[L1,L2,L3,GF]`).

### 10. `DEEP-24` / `DEEP-14` (L2-only mechanism blocks) used in GF
- **Files:** `outputs/copy/pp-at-risk/atrisk-23-e4.md`, `outputs/copy/browse/browse-04-e1.md`, `outputs/copy/browse/browse-04-e3.md`, `outputs/copy/checkout/checkout-03-e2.md`
- **Violation type:** Audience-exclude
- **Catalog:** Both `DEEP-24` ("Sensory Inventory") and `DEEP-14` ("Sensory Map") are `audience=[L2]`
- **Impact:** L2-only deep-mechanism components appearing in GF at-risk, browse, and checkout flows. The GF spec wants universal/non-level-specific mechanism language.

---

## Position-mismatch patterns (where the wrong catalog position is being picked for a role)

The top 15 most-frequent (cid, catalog_pos) pairs that fail the role expectation:

| Component | Catalog position | Used for role like | Occurrences |
|---|---|---|---:|
| `CC3` ("Curiosity Gap CTA") | `hero` | offer-and-cta, cta-level-calibrated, permission-close, cta-dual-button-text-link | 7 |
| `EMODEEP-01` ("Empathy Block") | `emotional_support` | hero-image-band, opener-hook, mechanism-refresher, footer, subject-preview-block | 5 |
| `PROD-4` ("Cross-Section") | `product_showcase` | brightkidco-letterhead, opener-hook, three-family-testimonial-pattern, mechanism-refresher, cta-section, next-time-forward-look, footer | 5 |
| `HERO-9` ("Whisper Tone") | `hero` | p-s-double-p-s-personal-guarantee, cta-secondary-link, footer-brand-signature-block | 3 |
| `PSYCH-05` ("Curiosity Gap") | `hero` | lena-sign-off-short-variant, validation-the-1-pair-reality, secondary-cta-text-link | 3 |
| `UTIL-05` ("Signoff Card") | `body_recognition` | cta-lena-sign-off-final-position, lena-sign-off-medium-variant, cta-section-lena-sign-off, etc. | 3 |
| `HERO-17` ("Social Proof Hero") | `hero` | offer-block-p-p-s-hairline-rule, offer-level-calibrated-bundle-upgrade, section-5-three-family-testimonial-pattern | 3 |
| `EMODEEP-09` ("Grief Validation") | `emotional_support` | hero-illustration-threshold-h2, header-open-door-visual-easter-egg, footer-close-the-door-is-always-open | 3 |
| `LETTER-07` ("Greeting Card") | `body_recognition` | lena-sign-off-medium-variant, lena-sign-off-short-variant-per-locked-profile, etc. | 2 |
| `LETTER-05` ("Manifesto Line") | `body_recognition` | lena-sign-off-short-variant, signoff, lena-sign-off-short-medium-variant-2-p-s | 2 |
| `HERO-3` ("Permission Open") | `hero` | lena-sign-off-short-variant, primary-cta-button | 2 |
| `22.3` ("Circle Crop Hero") | `hero` | permission-block, footer | 2 |
| `LETTER-01` ("Hero Letter") | `body_recognition` | hero | 1 |
| `OBJ-06` ("Not For Us Validation") | `body_mechanism` | lena-sign-off-short-variant, cta-button-brand-green-pill, hook, footer-static | 1+ |
| `STORY-02` ("Vertical Timeline") | `body_recognition` | footer | 1 |

**Pattern:** Many `body_recognition` and `emotional_support` components are being reused as `signoff_footer` and `hero` slots. Many `hero` and `product_showcase` components are being reused as `cta` and `footer` slots. The role-to-component lookup is loose; the picker appears to be a "fill this slot with anything matching the right audience" routine without a strict position check.

---

## Level calibration breakdown

### L1 (Sarah) — 134 picks, 6 violations
- 6 × audience-exclude: L2-only components picked in L1 emails (LETTER-11 ×2, "7" ×2, EMO-6, 12.2)
- 0 × yellow, 0 × urgency, 0 × filled-CTA violations
- **No bright-green CTA violations found.** L1 is mostly compliant on its signature rules.

### L2 (Lisa) — 156 picks, 1 violation
- 1 × teal: `2.3` ("Teal CTA Hero") picked for `cta-low-aggression-text-link` in `winback-a-19-e1-l2.md`
- 0 × urgency chrome
- **L2 is the cleanest level.** Only the single Teal CTA Hero slip.

### L3 (Maria) — 112 picks, 4 violations
- 0 × yellow
- 0 × urgent temperature
- 0 × filled green CTA buttons
- 1 × teal: `2.3` ("Teal CTA Hero") picked for `prose-block-micro-win-mirror` in `welcome-01-e3-l3.md` (L3 spec: cream/earth tones only)
- 3 × audience-exclude: `7` (Parent Stories L2-only) used in welcome-01-e4-l3, `DEEP-4` used in welcome-01-e6-l3, `M1` (Emotional Hero L2-only) used in winback-a-19-e2-l3
- **L3 cream/earth-tone, no-yellow, text-link-CTA rules are mostly met.** Only the teal slip + 3 audience-tag slips.

### GF (General) — 530 picks, 42 violations
- 37 × audience-exclude: L2-only components picked in GF (OBJ-06, HERO-12, STORY-04, DEEP-24, DEEP-14, "7", HERO-14, LETTER-11, M1, etc.)
- 2 × teal: `2.3` (Teal CTA Hero) used as letterhead in repc-17-e1, as offer in winback-b-24-e3-gf
- 0 × forbidden autism/ASD/Level-label term
- **GF has 7.9% calibration violation rate** — concentrated in audience-exclude and the teal CTA.

---

## Recommendations

1. **Fix `2.3` "Teal CTA Hero" everywhere it appears (4 files: welcome-01-e3-l3, repc-17-e1, winback-b-24-e3-gf, winback-a-19-e1-l2).** This single component is the only "teal" item in the catalog. A simple `cid != '2.3'` guard for L2/L3/GF would eliminate 100% of the teal violations (3 reported) plus the 1 L3 violation.

2. **Re-pick replenish-a emails (repa-15-e1/e2/e3).** The same `PROD-4` is picked for letterhead, hero, mechanism, CTA, sign-off, and footer. This is a single-component-reuse disaster. These 3 files account for 28 of the 153 position mismatches (18%) on their own. A simple variance-check (the email itself notes "VARIES FROM PRIOR PICKS" but doesn't actually vary) would catch it.

3. **Catalog audience tags need to be expanded for L2-only components used in GF/L1/L3.** 37 of 42 GF violations (88%) are the same pattern: a component marked `audience=[L2]` in the catalog being used in GF files. Either (a) the catalog should mark these as `[L1, L2, L3, GF]` because they ARE actually cross-level, or (b) the picks should respect the audience tag. The catalog is probably under-tagged — `LETTER-11` "Margin Notes" is a perfectly valid callout for any level. Recommend a catalog re-tag pass.

4. **Re-pick `OBJ-06` in the faq-library (faq-21-e1 through e6).** The same OBJ-06 is being used for hook, guarantee, CTA, sign-off, AND footer in the same email. faq-21-e1 alone has 6 issues, all from the same root cause: one component doing 5 unrelated jobs.

5. **L1 calls to action in `welcome-01-e2-l1.md` and `welcome-01-e6-l1.md` are using L2-only components** (`LETTER-11`, `7`). For Sarah, use `LETTER-10` (Highlighted Passage, all-levels) or `4.5` (Cream Callout, all-levels) instead — these are L1-compatible per the catalog and have similar function.

6. **For L3, `7` (Parent Stories, L2-only) and `M1` (Emotional Hero, L2-only) are being used in late-trainer / sign-off roles.** L3 has plenty of L3-compatible alternatives (`12.1` Lena Signoff, `LETTER-10` Highlighted Passage, `EMO-9` Strength Reframe, etc.). A simple "L3 must use all-audience components for sign-off" guard would prevent the 3 L3 audience-exclude cases.

---

## Sample note (transparency)

The task asked for a 30-50 email sample. I ran the audit on **all 125 files** (932 picks) to verify the sample is representative. A stratified random sample of 44 files (8 L1 + 11 L2 + 11 L3 + 11 GF, seed=42) reproduced the same 16% position-mismatch and 5% level-violation rate, confirming the patterns above are not skewed by a few bad files. The full audit was used for the report.

**Files written:**
- `/tmp/audit_final.json` — full audit data (machine-readable)
- This markdown report
