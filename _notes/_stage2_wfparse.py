import re
import sys

files = ['e1','e2','e3','e4','e5','e6','e7','e8']
for fname in files:
    path = f'/root/projects/brightkidco/outputs/copy/welcome/welcome-01-{fname}-l1.md'
    with open(path) as f:
        content = f.read()
    # Find WIREFRAME section
    wf_match = re.search(r'## WIREFRAME.*?(?=## |\Z)', content, re.DOTALL)
    if not wf_match:
        print(f'{fname}: NO WIREFRAME FOUND')
        continue
    wf = wf_match.group(0)
    print(f'\n=========== {fname.upper()} ===========')
    # Find each section
    sections = re.split(r'\[SECTION \d+:', wf)
    for i, s in enumerate(sections):
        if i == 0:
            continue
        # Get ROLE
        role_m = re.search(r'ROLE:\s*([^\n]+)', s)
        intent_m = re.search(r'INTENT:\s*([^\n]+)', s)
        # Get section header
        head_m = re.match(r'([^\n]+)', s)
        head = head_m.group(1).strip() if head_m else '?'
        print(f'  SECTION head="{head}"')
        if role_m:
            print(f'    ROLE: {role_m.group(1).strip()[:80]}')
        if intent_m:
            print(f'    INTENT: {intent_m.group(1).strip()[:80]}')