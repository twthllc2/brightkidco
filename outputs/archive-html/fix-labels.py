#!/usr/bin/env python3
"""
Fix internal labels leaked into customer-facing email content.
Run from: /root/projects/brightkidco/outputs/archive-html/html3/
"""
import os
import re
import glob

HTML_DIR = "."
FIXES_LOG = []

def log_fix(filepath, fix_type, before, after):
    rel = os.path.relpath(filepath, HTML_DIR)
    FIXES_LOG.append(f"  {rel}: {fix_type} | '{before}' -> '{after}'")

def fix_titles():
    """Remove internal labels from <title> tags."""
    files = glob.glob("**/*.html", recursive=True)
    fixed = 0
    
    for f in files:
        with open(f, "r") as fh:
            content = fh.read()
        
        title_match = re.search(r"<title>([^<]*)</title>", content)
        if not title_match:
            continue
        
        title = title_match.group(1)
        original = title
        
        # Skip if already clean
        if not any(x in title for x in ["GF", "L1", "L2", "L3", "Winback", "Extended Education", "E1", "E2", "E3"]):
            continue
        
        # Clean the title
        # Remove patterns like " — GF", " — L3", ", L1 — E1", " Winback A E1 GF"
        cleaned = title
        
        # Remove trailing level/flow labels
        cleaned = re.sub(r"\s*[-—,]\s*(GF|L[123])\s*$", "", cleaned)
        cleaned = re.sub(r"\s*[-—,]\s*(GF|L[123])\s*[-—,]\s*E\d+\s*$", "", cleaned)
        cleaned = re.sub(r"\s*[-—]\s*E\d+\s*$", "", cleaned)
        
        # Remove Winback patterns
        cleaned = re.sub(r"\s*Winback\s+(Path\s+)?[AB]\s*", " ", cleaned)
        cleaned = re.sub(r"\s*E\d+\s*(GF|L[123])?\s*", " ", cleaned)
        
        # Remove Extended Education patterns
        cleaned = re.sub(r"\s*Extended\s+Education\s*,?\s*(L[123])?\s*[-—]?\s*", " ", cleaned)
        
        # Clean up extra spaces and dashes
        cleaned = re.sub(r"\s+", " ", cleaned).strip()
        cleaned = re.sub(r"\s*[-—]\s*$", "", cleaned).strip()
        cleaned = re.sub(r"^\s*[-—]\s*", "", cleaned).strip()
        
        # If empty, generate from filename
        if not cleaned or cleaned == "BrightKidCo":
            dirname = os.path.basename(os.path.dirname(f))
            basename = os.path.basename(f).replace(".html", "")
            # Convert filename to readable title
            readable = basename.replace("-", " ").title()
            cleaned = f"BrightKidCo — {readable}"
        
        if cleaned != original:
            new_content = content.replace(
                f"<title>{original}</title>",
                f"<title>{cleaned}</title>"
            )
            with open(f, "w") as fh:
                fh.write(new_content)
            fixed += 1
            log_fix(f, "TITLE", original, cleaned)
    
    print(f"Titles fixed: {fixed}")

def fix_winback_body():
    """Replace 'Winback' with customer-friendly text in email body."""
    files = glob.glob("**/*.html", recursive=True)
    fixed = 0
    
    # Patterns to fix in body text (not in comments or style blocks)
    replacements = [
        ("Winback &middot; Offer", "We miss you &middot; Special offer"),
        ("Winback &middot; Final", "Last chance &middot; We miss you"),
        ("Winback Path A", "We miss you"),
        ("Winback Path B", "We miss you"),
        (">Winback<", ">We miss you<"),
    ]
    
    for f in files:
        with open(f, "r") as fh:
            content = fh.read()
        
        original = content
        for old, new in replacements:
            # Only replace in body text, not in comments
            content = content.replace(old, new)
        
        if content != original:
            with open(f, "w") as fh:
                fh.write(content)
            fixed += 1
            log_fix(f, "WINBACK", "Winback label", "Customer-friendly text")
    
    print(f"Winback body labels fixed: {fixed}")

def check_gf_level_mentions():
    """Check if GF (general fallback) emails mention levels."""
    gf_files = glob.glob("**/GF/*.html", recursive=True)
    issues = []
    
    for f in gf_files:
        with open(f, "r") as fh:
            content = fh.read()
        
        # Check for level mentions (Level 1, Level 2, Level 3, L1, L2, L3)
        # Exclude style blocks and comments
        # Remove HTML comments
        clean = re.sub(r"<!--.*?-->", "", content, flags=re.DOTALL)
        # Remove style blocks
        clean = re.sub(r"<style.*?</style>", "", clean, flags=re.DOTALL)
        
        level_mentions = re.findall(r"Level\s*[123]|(?<!\w)L[123](?!\w)", clean)
        if level_mentions:
            rel = os.path.relpath(f, HTML_DIR)
            issues.append(f"  {rel}: {level_mentions}")
    
    if issues:
        print(f"\nGF emails with level mentions (NEEDS FIX):")
        for i in issues:
            print(i)
    else:
        print(f"\nGF emails: No level mentions found (CORRECT)")

def check_extended_edu_body():
    """Check extended education emails for internal labels."""
    edu_files = glob.glob("**/flow-13-extended-edu/**/*.html", recursive=True)
    issues = []
    
    for f in edu_files:
        with open(f, "r") as fh:
            content = fh.read()
        
        # Check for "Extended Education" in body
        clean = re.sub(r"<!--.*?-->", "", content, flags=re.DOTALL)
        clean = re.sub(r"<style.*?</style>", "", clean, flags=re.DOTALL)
        
        if "Extended Education" in clean:
            rel = os.path.relpath(f, HTML_DIR)
            # Find the context
            idx = clean.find("Extended Education")
            context = clean[max(0,idx-50):idx+50].replace("\n", " ")
            issues.append(f"  {rel}: ...{context}...")
    
    if issues:
        print(f"\nExtended Education emails with 'Extended Education' label (NEEDS FIX):")
        for i in issues:
            print(i)
    else:
        print(f"\nExtended Education emails: No internal labels found (CORRECT)")

def main():
    print("=" * 70)
    print("COPY FIX SCRIPT — Internal Label Cleanup")
    print("=" * 70)
    
    print("\n--- Fix 1: Title tags ---")
    fix_titles()
    
    print("\n--- Fix 2: Winback body labels ---")
    fix_winback_body()
    
    print("\n--- Check 3: GF level mentions ---")
    check_gf_level_mentions()
    
    print("\n--- Check 4: Extended Education labels ---")
    check_extended_edu_body()
    
    print("\n--- Fix Log ---")
    for entry in FIXES_LOG:
        print(entry)
    
    print(f"\nTotal fixes: {len(FIXES_LOG)}")

if __name__ == "__main__":
    main()
