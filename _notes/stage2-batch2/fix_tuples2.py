#!/usr/bin/env python3
"""Fix all remaining missing closing parens on tuple lines."""

import re

filepath = "/root/projects/brightkidco/_notes/stage2-batch2/process_stage2.py"
with open(filepath, "r") as f:
    text = f.read()

# Match: any line ending with comma after 3 strings, followed by either ], or another tuple
# Line: ("ID", "name", "hint",
# Replace with: ("ID", "name", "hint"),

# Pattern: (\"X\", \"Y\", \"Z\",\n        (next tuple OR ])
lines = text.split("\n")
new_lines = []
for i, line in enumerate(lines):
    # If line ends with , (broken tuple end)
    if re.match(r'\s+\("[^"]+",\s*"[^"]+",\s*"[^"]+",\s*$', line):
        # Add closing paren
        new_lines.append(line[:-1] + "),")
    else:
        new_lines.append(line)

text = "\n".join(new_lines)

with open(filepath, "w") as f:
    f.write(text)
print("Done.")
