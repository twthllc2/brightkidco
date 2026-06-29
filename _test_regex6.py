import re

text = open('/root/projects/brightkidco/outputs/copy/pp-education/pped-11-d14.md').read()

skip_patterns = [
    r'\bsubject line', r'\bpreview', r'\bbody\b', r'\bsender', r'\bmetadata',
    r'\boverview', r'\bcreative', r'\bsign-?off', r'\bfooter', r'\blena\b',
    r'\bpart \d', r'\bemail body', r'\bhalf \d', r'\bflow\b', r'\bposition',
    r'\bcta\b', r'\bcall to action', r'\bbig idea', r'\blay out', r'\bcontraption',
    r'\btypography', r'\bfurniture', r'\bmobile', r'\brecognition anchor',
    r'\bverification', r'\bsource citation', r'\breference', r'\bhook',
    r'\bvalidation', r'\bmechanism', r'\bproduct', r'\bguarantee',
    r'\btestimonial', r'\bcalibration', r'\bstrategy', r'\bimage',
    r'\bcolor', r'\bpattern', r'\boption',
]

for hm in re.finditer(r'^##\s+([^\n]+)', text, re.MULTILINE):
    title = hm.group(1).strip().strip('"').strip("'").strip()
    low = title.lower()
    matched = [p for p in skip_patterns if re.search(p, low)]
    if matched:
        print(f'SKIP {title} -- matched: {matched}')
        continue
    if title and 3 < len(title) < 200 and not low.startswith('section ') and 'subject' not in low:
        print(f'PICK: {title}')
        break
    else:
        print(f'NO MATCH: {title}')

