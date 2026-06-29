import re
text = open('/root/projects/brightkidco/outputs/copy/winback-a/winback-a-19-e3-gf.md').read()
m = re.search(r'^#\s+([^\n]+)', text, re.MULTILINE)
title = m.group(1).strip()
title = title.split('—')[0].split(' - ')[0].strip().strip('"').strip("'").strip()
print(repr(title))
