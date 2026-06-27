#!/bin/bash
# Batch assemble second half of 125 emails (pped-* through winback-*)
set -e

PICKS_DIR="/root/projects/brightkidco/outputs/picks"
LAYOUTS_DIR="/root/projects/brightkidco/outputs/layouts"
HTML_DIR="/root/projects/brightkidco/outputs/html"
SCRIPT="/root/projects/brightkidco/scripts/assemble-email.py"

mkdir -p "$HTML_DIR"

SUCCESS=0
FAIL=0
TOTAL=0

echo "=== Starting batch assembly (SECOND HALF: pped-* through winback-*) ==="
echo ""

# Get sorted list, filter for pped-* through winback-*
EMAILS=$(ls "$PICKS_DIR"/*.json | xargs -n1 basename | sed 's/\.json$//' | sort | awk '/^pped-/{found=1} found{print}' )

for email_name in $EMAILS; do
    picks_file="$PICKS_DIR/$email_name.json"
    
    # Find layout file with same name
    layout_file=$(find "$LAYOUTS_DIR" -name "$email_name.json" -print -quit 2>/dev/null)
    
    if [ -z "$layout_file" ]; then
        echo "SKIP: $email_name — no matching layout found"
        FAIL=$((FAIL + 1))
        continue
    fi
    
    output_file="$HTML_DIR/$email_name.html"
    
    echo -n "[$((TOTAL + 1))] $email_name ... "
    
    if python3 "$SCRIPT" "$layout_file" "$picks_file" "$output_file" 2>/dev/null; then
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
for html_file in "$HTML_DIR"/pped-*.html "$HTML_DIR"/ppupsell-*.html "$HTML_DIR"/repa-*.html "$HTML_DIR"/repb-*.html "$HTML_DIR"/repc-*.html "$HTML_DIR"/review-*.html "$HTML_DIR"/shipping-*.html "$HTML_DIR"/site-*.html "$HTML_DIR"/sunset-*.html "$HTML_DIR"/upsell-*.html "$HTML_DIR"/welcome-*.html "$HTML_DIR"/winback-*.html; do
    [ -f "$html_file" ] || continue
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
    
    if [ -n "$issues" ]; then
        echo "ISSUES: $fn ->$issues"
    fi
done

echo ""
echo "=== Quick verification done ==="
