#!/usr/bin/env python3
"""Fix closing parens on tuples broken by the previous fix_ids.py script."""

import re

filepath = "/root/projects/brightkidco/_notes/stage2-batch2/process_stage2.py"
with open(filepath, "r") as f:
    text = f.read()

# Find lines like ('ID', 'name', 'hint',\n   (next tuple)
# Need to add ), between them
# Pattern: A line ending with a comma (tuple start), followed by newline+whitespace+(next tuple start)
# Replace: ",\n        (" with "),\n        ("

# We need to be careful — only inside PICKS dicts
# Find each tuple that starts with ( and ends with comma instead of ),

# Match tuples: ("...", "...", "...",
# Replace with: ("...", "...", "..."),

# A tuple in our dicts looks like: ("ID", "name", "hint")
# After broken: ("ID", "name", "hint",
# We need to restore: ("ID", "name", "hint"),

# But only when followed by another tuple on next line (indicating it's broken)
# Pattern: line ends with comma, next non-empty line starts with ("

lines = text.split("\n")
new_lines = []
i = 0
while i < len(lines):
    line = lines[i]
    # Check if line is a broken tuple (ends with comma after third string)
    if re.match(r'\s+\("[^"]+",\s*"[^"]+",\s*"[^"]+",\s*$', line):
        # Look at next line
        if i + 1 < len(lines):
            next_line = lines[i + 1]
            if re.match(r'\s+\("[^"]+",', next_line):
                # Fix: add ) at end of this line
                new_lines.append(line[:-1] + "),")
                i += 1
                continue
    new_lines.append(line)
    i += 1

text = "\n".join(new_lines)

with open(filepath, "w") as f:
    f.write(text)
print("Done. Fixed broken tuples.")
