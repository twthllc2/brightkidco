#!/usr/bin/env python3
from html.parser import HTMLParser
import re

class XHTMLValidator(HTMLParser):
    def __init__(self):
        super().__init__()
        self.errors = []
        self.stack = []
        self.void_elements = {'area','base','br','col','embed','hr','img','input','link','meta','param','source','track','wbr'}
    def handle_starttag(self, tag, attrs):
        if tag not in self.void_elements:
            self.stack.append(tag)
    def handle_endtag(self, tag):
        if tag in self.void_elements:
            return
        if self.stack and self.stack[-1] == tag:
            self.stack.pop()
        elif tag in self.stack:
            while self.stack and self.stack[-1] != tag:
                self.errors.append(f'Unclosed tag: <{self.stack.pop()}>')
            if self.stack:
                self.stack.pop()
        else:
            self.errors.append(f'Unexpected closing tag: </{tag}>')

with open('/root/projects/brightkidco/outputs/production/winback-a/winback-a-19-e2-l2.html', 'r') as f:
    content = f.read()

v = XHTMLValidator()
v.feed(content)

checks = []
checks.append(('DOCTYPE', '<!DOCTYPE html PUBLIC' in content))
checks.append(('xmlns', 'xmlns="http://www.w3.org/1999/xhtml"' in content))
checks.append(('charset', 'charset="UTF-8"' in content))
checks.append(('viewport', 'viewport' in content))
checks.append(('preheader', 'display:none; max-height:0' in content))
checks.append(('dark mode', 'prefers-color-scheme: dark' in content))
checks.append(('table wrapper', 'role="presentation"' in content))
checks.append(('inline styles', 'style=' in content))
checks.append(('Questrial font', 'Questrial,Arial,sans-serif' in content))
checks.append(('Fraunces font', 'Fraunces' in content))
checks.append(('Caveat font', 'Caveat' in content))
checks.append(('VML block', 'v:roundrect' in content))
checks.append(('BCBA quote box', 'F5F2ED' in content))
checks.append(('teal border', '#8AA67A' in content))
checks.append(('dark signoff card', '#1F2A2C' in content))
checks.append(('60-day guarantee', '5DD07A' in content))

print('=== XHTML Structure Validation ===')
for name, passed in checks:
    status = 'PASS' if passed else 'FAIL'
    print(f'  {status}: {name}')

if v.errors:
    print(f'\nParse errors ({len(v.errors)}):')
    for e in v.errors[:10]:
        print(f'  {e}')
else:
    print('\nNo parse errors found.')

section_count = content.count('<!-- SECTION')
print(f'\nSections found: {section_count}')

table_opens = len(re.findall(r'<table[^>]*>', content))
table_closes = len(re.findall(r'</table>', content))
print(f'Tables opened: {table_opens}, closed: {table_closes}')

file_size = len(content.encode('utf-8'))
print(f'\nFile size: {file_size} bytes ({file_size/1024:.1f} KB)')
print(f'Under 102KB limit: {"YES" if file_size < 102400 else "NO"}')
