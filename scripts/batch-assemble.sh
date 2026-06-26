#!/bin/bash
# Batch assemble HTML for all non-welcome picks files
set -euo pipefail

PICKS_DIR="/root/projects/brightkidco/outputs/picks"
LAYOUTS_DIR="/root/projects/brightkidco/outputs/layouts"
HTML_DIR="/root/projects/brightkidco/outputs/html"
ASSEMBLER="/root/projects/brightkidco/scripts/assemble-email.py"

mkdir -p "$HTML_DIR"

success=0
fail=0
skipped=0
missing_layout=0

# Build a lookup of all layout files by basename
declare -A LAYOUT_MAP
while IFS= read -r -d '' layout_file; do
    basename=$(basename "$layout_file")
    LAYOUT_MAP["$basename"]="$layout_file"
done < <(find "$LAYOUTS_DIR" -name "*.json" -print0)

echo "Found ${#LAYOUT_MAP[@]} layout files"
echo ""

# Process all picks files (non-welcome)
while IFS= read -r -d '' picks_file; do
    basename=$(basename "$picks_file")
    email_id="${basename%.json}"

    # Skip welcome files
    if [[ "$email_id" == welcome-* ]]; then
        echo "SKIP (welcome): $email_id"
        ((skipped++)) || true
        continue
    fi

    # Check if already built
    if [ -f "$HTML_DIR/${email_id}.html" ]; then
        echo "EXISTS: $email_id"
        ((skipped++)) || true
        continue
    fi

    # Find matching layout
    layout_path="${LAYOUT_MAP[$basename]:-}"
    if [ -z "$layout_path" ]; then
        echo "NO-LAYOUT: $email_id (no matching layout found for $basename)"
        ((missing_layout++)) || true
        continue
    fi

    # Assemble
    output_file="$HTML_DIR/${email_id}.html"
    if python3 "$ASSEMBLER" "$layout_path" "$picks_file" --output "$output_file" 2>&1; then
        # Verify output has basic structure
        if [ -f "$output_file" ] && grep -q '<!DOCTYPE html>' "$output_file" && grep -q '</html>' "$output_file"; then
            echo "OK: $email_id ($(wc -c < "$output_file") bytes)"
            ((success++)) || true
        else
            echo "FAIL-VERIFY: $email_id (output missing DOCTYPE or closing html)"
            ((fail++)) || true
        fi
    else
        echo "FAIL: $email_id (assembler returned non-zero)"
        ((fail++)) || true
    fi
done < <(find "$PICKS_DIR" -name "*.json" -print0)

echo ""
echo "============================================"
echo "SUCCESS: $success"
echo "FAILED:  $fail"
echo "SKIPPED: $skipped (welcome + already built)"
echo "NO-LAYOUT: $missing_layout"
echo "============================================"
