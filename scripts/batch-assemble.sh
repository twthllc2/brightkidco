#!/bin/bash
# Batch assemble all 125 emails
set -e

PICKS_DIR="/root/projects/brightkidco/outputs/picks"
LAYOUTS_DIR="/root/projects/brightkidco/outputs/layouts"
HTML_DIR="/root/projects/brightkidco/outputs/html"
SCRIPT="/root/projects/brightkidco/scripts/assemble-email.py"

mkdir -p "$HTML_DIR"

SUCCESS=0
FAIL=0
TOTAL=0

echo "=== Starting batch assembly ==="
echo ""

for picks_file in "$PICKS_DIR"/*.json; do
    filename=$(basename "$picks_file")
    email_name="${filename%.json}"
    
    # Find layout file with same name
    layout_file=$(find "$LAYOUTS_DIR" -name "$filename" -print -quit 2>/dev/null)
    
    if [ -z "$layout_file" ]; then
        echo "SKIP: $filename — no matching layout found"
        FAIL=$((FAIL + 1))
        continue
    fi
    
    output_file="$HTML_DIR/$email_name.html"
    
    echo -n "[$((TOTAL + 1))/125] $email_name ... "
    
    if python3 "$SCRIPT" "$layout_file" "$picks_file" --output "$output_file" 2>/dev/null; then
        echo "OK"
        SUCCESS=$((SUCCESS + 1))
    else
        echo "FAIL"
        FAIL=$((FAIL + 1))
    fi
    
    TOTAL=$((TOTAL + 1))
done

echo ""
echo "=== Done ==="
echo "Total: $TOTAL"
echo "Success: $SUCCESS"
echo "Failed: $FAIL"

# Quick verification
echo ""
echo "=== Quick verification of outputs ==="
for html_file in "$HTML_DIR"/*.html; do
    fn=$(basename "$html_file")
    
    issues=""
    
    # Check gradient bands
    if ! grep -q "linear-gradient" "$html_file"; then
        issues="$issues NO-GRADIENT"
    fi
    
    # Check logo
    if ! grep -q "brightkidco-logo" "$html_file"; then
        issues="$issues NO-LOGO"
    fi
    
    # Check footer
    if ! grep -q "Calm progress" "$html_file"; then
        issues="$issues NO-FOOTER"
    fi
    
    # Check images
    img_count=$(grep -c '<img ' "$html_file" 2>/dev/null || echo 0)
    if [ "$img_count" -lt 2 ]; then
        issues="$issues LOW-IMAGES($img_count)"
    fi
    
    # Check for real copy text (not section names as main content)
    # Section names are single words like "Guarantee", "Product Showcase" etc.
    # Real copy text should have longer sentences
    long_text_count=$(grep -oP '(?<=>)[A-Za-z][^<]{50,}(?=<)' "$html_file" 2>/dev/null | wc -l)
    if [ "$long_text_count" -lt 2 ]; then
        issues="$issues NO-REAL-COPY"
    fi
    
    if [ -n "$issues" ]; then
        echo "ISSUES: $fn ->$issues"
    fi
done

echo ""
echo "=== Quick verification done ==="
