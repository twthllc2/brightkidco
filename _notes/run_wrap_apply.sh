#!/bin/bash
# Stage 2 WRAP tag applicator - runs the Python script.
set -e
cd /root/projects/brightkidco/_notes
python3.12 _wrap_apply.py
echo "DONE. Audit file:"
ls -la /root/projects/brightkidco/_notes/stage-2-wrap-tag-audit.md
