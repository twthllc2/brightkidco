# Stage 2 WRAP Tag Audit — All 125 Copy Files

**Generated:** 125 copy files in `/root/projects/brightkidco/outputs/copy/` were inspected for STAGE 2 PICKS section WRAP annotations. 913 section rows were tagged.


## Overall WRAP Distribution

| WRAP Value | Count | % |
|---|---|---|
| `image-inside-component` | 338 | 37.0% |
| `image-standalone (placed between sections)` | 179 | 19.6% |
| `component-text-only` | 140 | 15.3% |
| `image-required-component` | 98 | 10.7% |
| `component-text-only (locked-signoff, not counted in body cap)` | 62 | 6.8% |
| `image-standalone` | 43 | 4.7% |

## Per-Flow Breakdown

| Flow | Files | Sections | image-inside-component | image-standalone | component-text-only | locked-signoff | image-required-component (BUG) | image-standalone (placed between sections) |
|---|---|---|---|---|---|---|---|---|
| browse | 3 | 19 | 6 | 8 | 3 | 0 | 0 | 2 |
| cart | 3 | 21 | 13 | 3 | 0 | 0 | 1 | 4 |
| checkout | 2 | 11 | 1 | 0 | 0 | 0 | 0 | 10 |
| faq-library | 6 | 27 | 3 | 0 | 10 | 6 | 0 | 8 |
| pp-at-risk | 4 | 25 | 10 | 1 | 0 | 0 | 0 | 10 |
| pp-direct-upsell | 2 | 17 | 7 | 1 | 3 | 2 | 0 | 2 |
| pp-education | 4 | 41 | 4 | 0 | 10 | 3 | 9 | 0 |
| pp-extended-ed | 20 | 153 | 69 | 5 | 26 | 0 | 27 | 26 |
| pp-extended-upsell | 3 | 26 | 10 | 1 | 5 | 2 | 1 | 4 |
| pp-level-detection | 2 | 11 | 3 | 2 | 1 | 2 | 0 | 2 |
| pp-mary-story | 1 | 7 | 2 | 0 | 2 | 0 | 0 | 3 |
| pp-mid-checkin | 3 | 25 | 8 | 0 | 2 | 3 | 0 | 9 |
| replenish-a | 3 | 25 | 9 | 3 | 5 | 2 | 2 | 1 |
| replenish-b | 2 | 18 | 5 | 2 | 3 | 2 | 3 | 1 |
| replenish-c | 2 | 16 | 6 | 0 | 4 | 2 | 1 | 1 |
| review-request | 2 | 16 | 5 | 1 | 2 | 2 | 0 | 4 |
| site-abandonment | 1 | 6 | 3 | 1 | 1 | 0 | 0 | 1 |
| sunset | 2 | 15 | 5 | 1 | 5 | 0 | 1 | 3 |
| transactional | 4 | 35 | 3 | 0 | 9 | 5 | 16 | 2 |
| welcome | 32 | 235 | 118 | 9 | 24 | 28 | 11 | 29 |
| winback-a | 12 | 87 | 23 | 3 | 16 | 1 | 13 | 31 |
| winback-b | 12 | 77 | 25 | 2 | 9 | 2 | 13 | 26 |

## Body-Cap Math (locked-signoff exclusion)

- **Total section rows tagged:** 913
- **Locked-signoff rows (excluded from body cap):** 62
- **Body-cap eligible rows:** 851

**Note:** Per task rules, locked-signoff blocks (`12.1`, `12.2`, `UTIL-05`, `EMODEEP-18/04/03/15`) ship from the locked `footer.html` and are NOT counted in the body's component cap. The remaining rows are the body's actual structure.

## Anomalies

- **Total `image-required-component` rows (potential BUGs):** 98
  - These are sections where the picked component requires an image to render (HERO-*, PROD-*, EDU-*, 6.1/6.2/6.3, M10, M2, SP-03, 21.1, 19.2, PS-*, IMAGE-*, FLOWIMG-*, CAMIMG-*, PDISP-*, DEEPPROD-*), but the IMAGE PICKED line declared no image. This is a flag for subagents to revisit and either pick an image or swap to a text-only component.

## Body-Cap Eligible Rows per Flow (after locked-signoff exclusion)

| Flow | Sections | Locked-Signoff | Body-Cap Eligible |
|---|---|---|---|
| browse | 19 | 0 | 19 |
| cart | 21 | 0 | 21 |
| checkout | 11 | 0 | 11 |
| faq-library | 27 | 6 | 21 |
| pp-at-risk | 25 | 0 | 25 |
| pp-direct-upsell | 17 | 2 | 15 |
| pp-education | 41 | 3 | 38 |
| pp-extended-ed | 153 | 0 | 153 |
| pp-extended-upsell | 26 | 2 | 24 |
| pp-level-detection | 11 | 2 | 9 |
| pp-mary-story | 7 | 0 | 7 |
| pp-mid-checkin | 25 | 3 | 22 |
| replenish-a | 25 | 2 | 23 |
| replenish-b | 18 | 2 | 16 |
| replenish-c | 16 | 2 | 14 |
| review-request | 16 | 2 | 14 |
| site-abandonment | 6 | 0 | 6 |
| sunset | 15 | 0 | 15 |
| transactional | 35 | 5 | 30 |
| welcome | 235 | 28 | 207 |
| winback-a | 87 | 1 | 86 |
| winback-b | 77 | 2 | 75 |

**Body-cap math note:** The task spec mandates 4-8 components per email. The `body-cap eligible` column above is what each flow's structure contributes. Sum across an email's flow = its body component count (the locked-signoff footer block is pre-rendered from `footer.html` and does not count).

## BUG Hot Spots (image-required-component)

**77 unique components** flagged as `image-required-component`.

| Component ID | BUG Count | Sample Files |
|---|---|---|
| `TRUST-1` | 4 | cart/cart-02-e2.md, transactional/shipping-06.md, welcome/welcome-01-e3-l2.md (+1 more) |
| `EDU-10` | 4 | pp-education/pped-11-d21.md, replenish-a/repa-15-e2.md, transactional/arrived-08.md (+1 more) |
| `UTIL-09` | 4 | pp-extended-ed/pped-22-e4-l1.md, winback-a/winback-a-19-e1-l3.md, winback-b/winback-b-24-e3-gf.md (+1 more) |
| `CMP-7` | 4 | replenish-c/repc-17-e2.md, transactional/arrived-08.md, transactional/ofd-07-e1.md (+1 more) |
| `STORY-09` | 3 | pp-education/pped-11-d0.md, pp-extended-upsell/ppupsell-12-e2.md, transactional/order-05-e1.md |
| `EDU-2` | 2 | pp-education/pped-11-d0.md, welcome/welcome-01-e6-l2.md |
| `10` | 2 | pp-education/pped-11-d14.md, pp-education/pped-11-d21.md |
| `EDU-7` | 2 | pp-education/pped-11-d21.md, transactional/arrived-08.md |
| `EDU-8` | 2 | pp-education/pped-11-d7.md, replenish-b/repb-16-e2.md |
| `EDU-9` | 2 | pp-education/pped-11-d7.md, replenish-a/repa-15-e3.md |
| `EDU-3` | 2 | replenish-b/repb-16-e1.md, transactional/ofd-07-e1.md |
| `STORY-13` | 2 | transactional/ofd-07-e1.md, transactional/order-05-e1.md |
| `EDU-13` | 1 | pp-education/pped-11-d14.md |
| `DEEPCAMP-10` | 1 | pp-extended-ed/pped-22-e1-gf.md |
| `DEEPPROD-1` | 1 | pp-extended-ed/pped-22-e1-l1.md |
| `DESDEEP-1` | 1 | pp-extended-ed/pped-22-e1-l2.md |
| `FLOW-1` | 1 | pp-extended-ed/pped-22-e1-l3.md |
| `CMP-9` | 1 | pp-extended-ed/pped-22-e1-l3.md |
| `FLOWIMG-008` | 1 | pp-extended-ed/pped-22-e2-gf.md |
| `FS3` | 1 | pp-extended-ed/pped-22-e2-l1.md |
| `STORY-14` | 1 | pp-extended-ed/pped-22-e2-l1.md |
| `PDISP-1` | 1 | pp-extended-ed/pped-22-e2-l2.md |
| `TRUSTDEEP-10.1` | 1 | pp-extended-ed/pped-22-e2-l3.md |
| `CAMIMG-8` | 1 | pp-extended-ed/pped-22-e3-gf.md |
| `CAMIMG-4` | 1 | pp-extended-ed/pped-22-e3-l1.md |
| `TRUSTDEEP-11.1` | 1 | pp-extended-ed/pped-22-e3-l1.md |
| `CAMIMG-14` | 1 | pp-extended-ed/pped-22-e3-l2.md |
| `CAMIMG-5` | 1 | pp-extended-ed/pped-22-e3-l3.md |
| `CAMIMG-11` | 1 | pp-extended-ed/pped-22-e4-gf.md |
| `SP5` | 1 | pp-extended-ed/pped-22-e4-gf.md |
| `CAMIMG-3` | 1 | pp-extended-ed/pped-22-e4-l1.md |
| `CSHOP-13` | 1 | pp-extended-ed/pped-22-e4-l2.md |
| `STORYDEEP-01` | 1 | pp-extended-ed/pped-22-e4-l2.md |
| `CAMIMG-1` | 1 | pp-extended-ed/pped-22-e4-l3.md |
| `STORYDEEP-05` | 1 | pp-extended-ed/pped-22-e4-l3.md |
| `FLOWDEEP-5` | 1 | pp-extended-ed/pped-22-e5-gf.md |
| `FLOWDEEP-1` | 1 | pp-extended-ed/pped-22-e5-l1.md |
| `FLOWIMG-001` | 1 | pp-extended-ed/pped-22-e5-l2.md |
| `FLOWDEEP-4` | 1 | pp-extended-ed/pped-22-e5-l3.md |
| `HERO-20` | 1 | replenish-b/repb-16-e1.md |
| `TRUSTDEEP-3` | 1 | sunset/sunset-25-e2.md |
| `CMP-6` | 1 | transactional/ofd-07-e1.md |
| `PSYCH-02` | 1 | transactional/ofd-07-e1.md |
| `CMP-4` | 1 | transactional/order-05-e1.md |
| `CMP-5` | 1 | transactional/shipping-06.md |
| `PSYCH-01` | 1 | transactional/shipping-06.md |
| `EDU-1` | 1 | transactional/shipping-06.md |
| `HERO-9` | 1 | welcome/welcome-01-e1-l3.md |
| `6.2` | 1 | welcome/welcome-01-e3-l2.md |
| `PROD-1` | 1 | welcome/welcome-01-e5-gf.md |
| `EDU-4` | 1 | welcome/welcome-01-e5-l2.md |
| `HERO-6` | 1 | welcome/welcome-01-e6-l2.md |
| `HERO-7` | 1 | welcome/welcome-01-e7-l2.md |
| `TRUST-2` | 1 | welcome/welcome-01-e8-l2.md |
| `IMG-01` | 1 | winback-a/winback-a-19-e1-gf.md |
| `FLOWIMG-003` | 1 | winback-a/winback-a-19-e1-l1.md |
| `DEEPPROD-10` | 1 | winback-a/winback-a-19-e1-l2.md |
| `FLOW-6` | 1 | winback-a/winback-a-19-e1-l3.md |
| `CSHOP-15` | 1 | winback-a/winback-a-19-e2-gf.md |
| `CAMIMG-18` | 1 | winback-a/winback-a-19-e2-l1.md |
| `CAMIMG-16` | 1 | winback-a/winback-a-19-e2-l2.md |
| `CSHOP-14` | 1 | winback-a/winback-a-19-e2-l3.md |
| `CSHOP-29` | 1 | winback-a/winback-a-19-e3-gf.md |
| `CSHOP-26` | 1 | winback-a/winback-a-19-e3-l1.md |
| `CSHOP-22` | 1 | winback-a/winback-a-19-e3-l2.md |
| `CSHOP-3` | 1 | winback-a/winback-a-19-e3-l3.md |
| `PRICE-1` | 1 | winback-b/winback-b-24-e1-gf.md |
| `FLOWDEEP-3` | 1 | winback-b/winback-b-24-e1-l1.md |
| `FLOWDEEP-11` | 1 | winback-b/winback-b-24-e1-l2.md |
| `IMG-08` | 1 | winback-b/winback-b-24-e1-l3.md |
| `CSHOP-23` | 1 | winback-b/winback-b-24-e2-gf.md |
| `CSHOP-19` | 1 | winback-b/winback-b-24-e2-l1.md |
| `CSHOP-17` | 1 | winback-b/winback-b-24-e2-l2.md |
| `CSHOP-24` | 1 | winback-b/winback-b-24-e2-l3.md |
| `DEEPCAMP-12` | 1 | winback-b/winback-b-24-e3-gf.md |
| `CSHOP-9` | 1 | winback-b/winback-b-24-e3-l2.md |
| `DEEPCAMP-08` | 1 | winback-b/winback-b-24-e3-l3.md |

**Resolution path:** These BUGs indicate that a stage-2 subagent picked a component that requires an image but the IMAGE PICKED line is empty. The subagent must either (a) pick an image from the catalog and re-run, or (b) swap the component to a text-only equivalent.

## Catalog-vs-Rule Anomalies

The following task rules treat these components as 'locked-signoff' (Lena footer), but the `component-catalog.json` describes them as `emotional_support` (body content):

| Component ID | Catalog Name | Catalog Position | Task Rule Classification |
|---|---|---|---|
| EMODEEP-15 | The Emotional Weather *(L12395)* | emotional_support | locked-signoff (per task) |
| EMODEEP-04 | The Empathy Mirror *(L12072)* | emotional_support | locked-signoff (per task) |
| EMODEEP-03 | The Permission Letter *(L12044)* | emotional_support | locked-signoff (per task) |
| EMODEEP-18 | The Letter From Lena *(L12491)* | emotional_support | locked-signoff (per task) |

**Resolution:** Per the explicit task rules, these are classified as locked-signoff. The catalog metadata appears to be misclassified for these specific IDs (they all carry 'Lena' in their narrative use). Flagging for catalog-reconciliation by the parent agent.

## Files Processed

All 125 copy files in `/root/projects/brightkidco/outputs/copy/` were processed (excluding `/analysis/` and `.bak-*` files). Each file received WRAP annotations on every section row in its STAGE 2 PICKS section. Both block-format (most files) and table-format (FAQ/Sunset/Transactional/Welcome files) STAGE 2 PICKS structures are supported.
