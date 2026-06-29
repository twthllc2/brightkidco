import re

text = open('/root/projects/brightkidco/outputs/copy/pp-extended-upsell/ppupsell-12-e1.md').read()

# Just check the simple version
pat = r'##\s+Subject(?:\s+Line)?\s*\n+\*+\s*([^*\n]+?)\s*\*+'
m = re.search(pat, text)
print('Test simple:', m.group(1) if m else 'NONE')

# The issue is the (Primary) - my pattern doesn't allow for that
pat2 = r'##\s+Subject(?:\s+Line)?(?:\s*\([^\)]*\))?\s*\n+\*+\s*([^*\n]+?)\s*\*+'
m = re.search(pat2, text)
print('Test with parens:', m.group(1) if m else 'NONE')
