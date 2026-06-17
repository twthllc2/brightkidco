# BKC Build Workflow

> **The build pipeline in 6 steps.** See `README.md` for the folder structure.

## The 6 Steps

```
COPY (the .md)              →  /root/projects/brightkidco/outputs/copy/<flow>/*.md
   ↓
1. content.js               →  window.FLOW_<KEY> = { e1, e2, ... } + window.FLOW_<KEY>_SHARED
   ↓
2. emails.jsx               →  const Email1 = () => { const c = window.FLOW_<KEY>.e1; return <EmailShell>... }
   ↓
3. app.jsx                  →  <DesignCanvas> with <DCSection> and <DCArtboard> entries
   ↓
4. <Flow Name> Local.html   →  Already templated (open in browser to preview)
   ↓
5. Bundle                   →  python3 tools/bundle_standalone.py
   ↓
6. Ship                     →  scp to ayoub@100.76.121.113:/home/ayoub/Documents/
```

The 4 files per flow already exist (templated, empty). You fill them in from the copy.

## The Load Order (in every Local.html, non-negotiable)

```html
<!-- 1. React + ReactDOM + Babel Standalone (CDN, pinned) -->
<!-- 2. tokens.js (defines window.BRAND, window.FONT) -->
<!-- 3. content.js (defines window.FLOW_<KEY>) -->
<!-- 4. design-canvas.jsx, primitives.jsx, product-showcase.jsx, illustrations.jsx (shared) -->
<!-- 5. emails.jsx (flow-specific) -->
<!-- 6. app.jsx (mounts to #root) -->
```

## The 5 Shared Files (NEVER modify without intent)

| File | Path |
|------|------|
| `tokens.js` | `autistic-welcome/variants/tokens.js` |
| `primitives.jsx` | `welcome-flow/primitives.jsx` |
| `product-showcase.jsx` | `welcome-flow/product-showcase.jsx` |
| `design-canvas.jsx` | `welcome-flow/design-canvas.jsx` |
| `illustrations.jsx` | `autistic-welcome/variants/illustrations.jsx` |

## The Component Library (for sections beyond the 14 primitives)

`/root/projects/brightkidco/outputs/email-design/component-index-v2.md` — 950 components organized by email position (13 positions: SHELL, HERO, BODY-RECOGNITION, BODY-MECHANISM, etc.)

## The Working Reference (the only flow with real emails)

`welcome-flow/` — 10 emails built by Giuliano. Best single-email example: `email-6.jsx`.

## The Hard Rules (every email, no exceptions)

- Copy is VERBATIM (no rewriting, no shortening)
- No em dashes (—) or double hyphens (--) — use commas, periods, line breaks
- Use € not $ (€34/pair, €30.60 with BRIGHT10, €79.99 bundle)
- Brand tokens only: `B.teal`, `B.ink`, `B.cream`, `B.lime`, `B.yellow`
- Hard shadows only: `3px 3px 0`, `4px 4px 0`, `6px 6px 0` with `B.ink` (no blur, no rgba)
- 2px solid borders on all cards
- Mobile-first 420px (use `MW`)
- Lena signoff: E1 = "BKC team", E2+ = "Lena Bauer"
- Closing word: "Talk soon" (E1-E2), "With understanding" (E3-E5), "With care" (E6+)
- Mechanism BEFORE guarantee in every email
- Subject line fits one of 6 formulas: Observation, Validation, Mechanism tease, Permission frame, Question, Social proof
- ≥7 sections per email
- ≥1 hard shadow per card
- ≥1 tilted sticker per email

## Build Verification (before claiming "done")

```bash
# 1. File exists, >500 bytes
test -s "raw/BKCO - EMAIL MARKETING/<flow>-flow/emails.jsx" && echo "✅ JSX exists"

# 2. No em dashes in copy
grep "—" "raw/BKCO - EMAIL MARKETING/<flow>-flow/content.js"  # should be empty

# 3. No $ in customer text (use €)
grep "\\$" "raw/BKCO - EMAIL MARKETING/<flow>-flow/content.js"  # should be empty

# 4. ≥7 sections per email
grep -c "return (" "raw/BKCO - EMAIL MARKETING/<flow>-flow/emails.jsx"

# 5. Bundle
cd /root/projects/brightkidco/outputs/email-design
python3 tools/bundle_standalone.py "raw/BKCO - EMAIL MARKETING/<flow>-flow/<Flow> Local.html" "raw/<Flow> _standalone_.html"
# Should produce ~3.2MB output

# 6. Ship
scp "raw/<Flow> _standalone_.html" ayoub@100.76.121.113:/home/ayoub/Documents/
```

## See Also

- `README.md` — folder structure
- `_TEMPLATE/README.md` — the 4-file pattern
- `welcome-flow/email-6.jsx` — best real example
- `welcome-flow/content.js` — best content data example
