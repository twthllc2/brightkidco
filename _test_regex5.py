import re

text = open('/root/projects/brightkidco/outputs/copy/pp-education/pped-11-d14.md').read()

skip_list = ['subject line', 'preview text', 'body', 'sender', 'metadata', 'overview', 'creative', 'p.s.', 'sign-off', 'sign off', 'footer', 'lena', 'part 1', 'part 2', 'email body', 'half 1', 'half 2', 'flow', 'email position', 'cta', 'call to action', 'big idea', 'layout', 'contraption', 'color', 'typography', 'furniture', 'mobile', 'recognition anchor', 'verification', 'source citation', 'reference']

for hm in re.finditer(r'^##\s+([^\n]+)', text, re.MULTILINE):
    title = hm.group(1).strip().strip('"').strip("'").strip()
    low = title.lower()
    if any(skip in low for skip in skip_list):
        print(f'SKIP: {title}')
        continue
    if title and 3 < len(title) < 200 and not low.startswith('section ') and 'subject' not in low:
        print(f'PICK: {title}')
        break
    else:
        print(f'NO MATCH: {title}')

