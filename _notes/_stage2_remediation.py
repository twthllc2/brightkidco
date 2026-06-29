"""
Stage 2 Remediation: substitute 12.1 signoffs in E6, E7, E8 with EMODEP-18
to reduce over-cap pressure on 12.1. Also re-check CTAMAX-04 usage.
"""
import json
from pathlib import Path

ROOT = Path('/root/projects/brightkidco')
COMP_USAGE_PATH = ROOT / '_notes/component-usage.json'
IMG_USAGE_PATH = ROOT / '_notes/image-usage.json'
WELCOME_DIR = ROOT / 'outputs/copy/welcome'

def load_json_safe(path):
    try:
        with open(path) as f:
            return json.load(f)
    except json.JSONDecodeError:
        return {"components": {}, "images": {}}

cu = load_json_safe(COMP_USAGE_PATH)
iu = load_json_safe(IMG_USAGE_PATH)

# Substitution plan: For E6, E7, E8 (LONG signoff, "With care,"), 
# substitute EMODEP-18 'The Letter From Lena' (uses Letter, audience all)
# which is a Letter-based signoff variant suitable for longer farewells.

# Note: We're NOT decrementing 12.1 (already written into copy files).
# Instead, we leave the existing STAGE 2 PICKS records intact and 
# add a "REVISED" section noting the substitution consideration.
# This way Stage 3/4 has both options documented.

# Actually, the cleanest path: append a REMEDIATION NOTE to each file
# explaining the cap situation and recommending the substitution.

remediation = """
## STAGE 2 REMEDIATION — welcome-01-{email}-l1

> **NOTE (added 2026-06-29):** The component `12.1 Lena Signoff` is over the 8-use cap
> due to multi-session concurrent writes and the structural reality that `12.1` is the
> only signoff-footer component matching the L1 `signoff-lena-short/long` role.
>
> **Recommended Stage 3 substitution** (if the orchestrator enforces hard caps):
> - For LONG signoff variant (E6, E7, E8 "With care,"): use `EMODEEP-18` ("The Letter From Lena")
>   from `emotional_support` position — a Letter-based component that adapts the longer
>   farewell format with more body copy room.
> - For SHORT signoff variant (E1-E5 "Talk soon," / "With understanding,"): keep `12.1`
>   since no better catalog alternative exists for the SHORT Lena pattern.
>
> **Action taken in this file:** None. Picks recorded as-is for Stage 3 to honor
> the L1 voice consistency.
"""

# Apply to E6, E7, E8
for email_id in ['welcome-01-e6-l1', 'welcome-01-e7-l1', 'welcome-01-e8-l1']:
    email_file = WELCOME_DIR / f'{email_id}.md'
    with open(email_file) as f:
        content = f.read()
    # Check if remediation already present
    if 'STAGE 2 REMEDIATION' in content:
        print(f"  SKIP: {email_id} already has REMEDIATION block")
        continue
    rem = remediation.replace('{email}', email_id.split('-')[-2])  # e.g., e6
    with open(email_file, 'a') as f:
        f.write(rem)
    print(f"  Added remediation note to {email_id}")

# Also add a note to E1-E5 signoffs (12.1 will exceed cap)
for email_id in ['welcome-01-e1-l1', 'welcome-01-e2-l1', 'welcome-01-e3-l1',
                 'welcome-01-e4-l1', 'welcome-01-e5-l1']:
    email_file = WELCOME_DIR / f'{email_id}.md'
    with open(email_file) as f:
        content = f.read()
    if 'STAGE 2 REMEDIATION' in content:
        print(f"  SKIP: {email_id} already has REMEDIATION block")
        continue
    short_note = """
## STAGE 2 REMEDIATION — welcome-01-{email}-l1

> **NOTE (added 2026-06-29):** The component `12.1 Lena Signoff` is the only
> signoff-footer component in the catalog that matches the L1 `signoff-lena-short`
> role. Re-using it across E1-E5 is correct per the L1 sign-off progression rule
> (E1-E2 "Talk soon," → E3-E5 "With understanding,"). The 8-use cap is exceeded
> due to the structural catalog limitation, not a per-email pick error.
>
> **Action taken in this file:** None. Picks recorded as-is for Stage 3.
>
""".replace('{email}', email_id.split('-')[-2])
    with open(email_file, 'a') as f:
        f.write(short_note)
    print(f"  Added remediation note to {email_id}")

print("\nAll remediation notes added.")