import re
import sys
sys.path.insert(0, '/root/projects/brightkidco')
from build_all import extract_first_match

text = open('/root/projects/brightkidco/outputs/copy/pp-extended-upsell/ppupsell-12-e1.md').read()
result = extract_first_match(text, [
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
])
print(f'Result: "{result}"')
