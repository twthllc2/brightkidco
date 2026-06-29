import re

text = open('/root/projects/brightkidco/outputs/copy/pp-extended-upsell/ppupsell-12-e1.md').read()

patterns = [
    r'##\s+Subject\s*Line[:\s]+["\u201c]([^"\u201d\n]+?)["\u201d]',
    r'##\s+Subject(?:\s+Line)?\s*\n+>\s*\*+\s*([^*\n]+?)\s*\*+',
    r'##\s+Subject(?:\s+Line)?\s*\n+\*+\s*([^*\n]+?)\s*\*+',
    r'##\s+Subject(?:\s+Line)?\s*\n+>\s*\*?\*?([^*\n]+?)\*?\*?\s*(?:\(|\n|$)',
    r'##\s+Subject(?:\s+Line)?\s*\n+["\']?([^*\n]+?)["\']?\s*(?:\(|\n|$)',
    r'###\s+Subject(?:\s+Line)?\s*\n+>\s*\*+\s*([^*\n]+?)\s*\*+',
    r'###\s+Subject(?:\s+Line)?\s*\n+\*+\s*([^*\n]+?)\s*\*+',
    r'###\s+Subject(?:\s+Line)?\s*\n+>\s*\*?\*?([^*\n]+?)\*?\*?\s*(?:\(|\n|$)',
    r'###\s+Subject(?:\s+Line)?\s*\n+["\']?([^*\n]+?)["\']?\s*(?:\(|\n|$)',
    r'\*\*Subject(?:\s+Line)?:\*\*\s*\*?\*?"?([^*\n"]+?)"?\*?\*?\s*(?:\(|\n|$)',
    r'\|\s*\*\*Subject(?:\s+Line)?\*\*\s*\|\s*([^\n|]+?)\s*\|',
    r'^#\s+[^\n]*?["\u201c]([^"\u201d\n]+?)["\u201d]',
]

lowercase_words = ['count', 'characters', 'type:', 'alternative', 'verification', 'audit']

for i, pat in enumerate(patterns):
    m = re.search(pat, text, re.IGNORECASE | re.DOTALL)
    if m:
        val = m.group(1).strip()
        val = val.strip('"').strip("'").strip('*').strip().rstrip(',').rstrip('.').strip()
        if val and 3 < len(val) < 250:
            low = val.lower()
            bad = any(w in low for w in lowercase_words)
            print(f'P{i}: {val[:60]} -- BAD: {bad}')
        else:
            print(f'P{i}: invalid (len={len(val)}): {val[:60]}')
    else:
        print(f'P{i}: no match')
