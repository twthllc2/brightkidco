import re
text = open('/root/projects/brightkidco/outputs/copy/pp-extended-upsell/ppupsell-12-e1.md').read()
patterns = [
    r'##\s+Subject(?:\s+Line)?(?:\s*\([^\)]*\))?\s*\n+\*+\s*([^*\n]+?)\s*\*+',
    r'##\s+Subject(?:\s+Line)?\s*\([^\)]+\)\s*\n+\*+\s*([^*\n]+?)\s*\*+',
    r'##\s+Subject(?:\s+Line)?[^\n]*\n+\*+\s*([^*\n]+?)\s*\*+',
    r'##\s+Subject[^\n]*\n+\*+\s*([^*\n]+?)\s*\*+',
]
for pat in patterns:
    m = re.search(pat, text)
    if m:
        print(f'Pattern matched: {m.group(1).strip()[:60]}')
    else:
        print(f'Pattern NO match: {pat[:60]}')
