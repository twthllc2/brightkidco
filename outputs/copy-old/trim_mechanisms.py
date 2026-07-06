#!/usr/bin/env python3
"""Trim mechanism/science sections by 30-40% in PP-Education and PP-Extended-Ed files.
Keeps key stats, removes dense citations and verbose explanations.
Only modifies PART 1 (email copy) mechanism sections, not hooks/validation/CTAs/sign-offs.
"""
import re, os, sys

def trim_mechanism(old_text, target_reduction=0.35):
    """Generic mechanism trimmer. Returns trimmed text."""
    words = old_text.split()
    target = int(len(words) * (1 - target_reduction))
    
    # Strategy: remove citation-heavy sentences, compress explanations
    # Preserve: key stats (percentages, numbers), BSL description, core analogy
    
    lines = old_text.split('\n')
    kept_lines = []
    removed_words = 0
    
    for line in lines:
        stripped = line.strip()
        # Skip dense citation lines
        if re.search(r'(Nicholson et al\.|Wiggins et al\.|Barmpagiannis|Leekam et al\.|Hample.*Mahler|Green et al\.|Kelly Mahler)', stripped):
            # Keep line if it has a key stat
            if re.search(r'\d+%', stripped) or re.search(r'\d+ weeks', stripped):
                kept_lines.append(line)
            else:
                removed_words += len(stripped.split())
            continue
        # Skip lines that are just source citations
        if stripped.startswith('*') and 'source' in stripped.lower():
            removed_words += len(stripped.split())
            continue
        # Skip redundant "That's it" / "Nothing more" padding
        if stripped in ["That's it.", "Nothing more, nothing less.", "That matters, so let me say it again."]:
            removed_words += len(stripped.split())
            continue
        kept_lines.append(line)
    
    result = '\n'.join(kept_lines)
    return result, removed_words

# ========== PP-EDUCATION FILES ==========

files_to_process = [
    # PP-Education
    ("/root/projects/brightkidco/outputs/copy/pp-education/pped-11-d0.md", "SECTION 6 — MECHANISM DEEP DIVE", "SECTION 7 — CTA"),
    ("/root/projects/brightkidco/outputs/copy/pp-education/pped-11-d7.md", "MECHANISM, WHY THE BRAIN NEEDS REPETITION", "PRACTICAL TIPS"),
    ("/root/projects/brightkidco/outputs/copy/pp-education/pped-11-d14.md", "Mechanism Reinforcement, Why the Signal Takes Time", "Mini-Win Tracking Prompt"),
    ("/root/projects/brightkidco/outputs/copy/pp-education/pped-11-d21.md", "MECHANISM REMINDER", "LOW-BAR WINS"),
    # PP-Extended Ed E1
    ("/root/projects/brightkidco/outputs/copy/pp-extended-ed/pped-22-e1-l1.md", "Section 3: Mechanism", "Section 4: Social Proof"),
    ("/root/projects/brightkidco/outputs/copy/pp-extended-ed/pped-22-e1-l2.md", "The Mechanism They All Missed", "What BCBA Built"),
    ("/root/projects/brightkidco/outputs/copy/pp-extended-ed/pped-22-e1-l3.md", "SECTION 3: MECHANISM / EDUCATION", "SECTION 4: TESTIMONIAL"),
    ("/root/projects/brightkidco/outputs/copy/pp-extended-ed/pped-22-e1-gf.md", "[SECTION: MECHANISM]", "[SECTION: CTA"),
    # PP-Extended Ed E2
    ("/root/projects/brightkidco/outputs/copy/pp-extended-ed/pped-22-e2-l1.md", "Why documentation matters", "Your Week 4 tracking"),
    ("/root/projects/brightkidco/outputs/copy/pp-extended-ed/pped-22-e2-l2.md", "What Nicholson et al. 2019 Actually Found", "Where Your Child Is Right Now"),
    ("/root/projects/brightkidco/outputs/copy/pp-extended-ed/pped-22-e2-l3.md", "Section 3 — Mechanism", "Section 4 — What This Changes"),
    ("/root/projects/brightkidco/outputs/copy/pp-extended-ed/pped-22-e2-gf.md", "What's Actually Happening During the Plateau", "What Awareness Actually Looks Like"),
    # PP-Extended Ed E3
    ("/root/projects/brightkidco/outputs/copy/pp-extended-ed/pped-22-e3-l1.md", "Sign #3: The Late-Arriving Announcement", "Keep the BKC undies"),
    ("/root/projects/brightkidco/outputs/copy/pp-extended-ed/pped-22-e3-l2.md", "Mechanism Specificity, Why Prompts Overwrite", "Practical Strategy, Prompt Fading"),
    ("/root/projects/brightkidco/outputs/copy/pp-extended-ed/pped-22-e3-l3.md", "What micro-wins look like for L3 children", "The tracking system"),
    ("/root/projects/brightkidco/outputs/copy/pp-extended-ed/pped-22-e3-gf.md", "Why this matters", "What to do with this"),
    # PP-Extended Ed E4
    ("/root/projects/brightkidco/outputs/copy/pp-extended-ed/pped-22-e4-l1.md", "Why prompting can hold progress back", "How to reduce prompting"),
    ("/root/projects/brightkidco/outputs/copy/pp-extended-ed/pped-22-e4-l2.md", "What the first 3 weeks actually accomplish", "If you're in the"),
    ("/root/projects/brightkidco/outputs/copy/pp-extended-ed/pped-22-e4-l3.md", "The research tells us something", "Here's what we know"),
    ("/root/projects/brightkidco/outputs/copy/pp-extended-ed/pped-22-e4-gf.md", "Mechanism", "Practical Guidance"),
    # PP-Extended Ed E5
    ("/root/projects/brightkidco/outputs/copy/pp-extended-ed/pped-22-e5-l1.md", "Mechanism, School Readiness Protocol", "CTA"),
    ("/root/projects/brightkidco/outputs/copy/pp-extended-ed/pped-22-e5-l2.md", None, None),  # Large file, handled separately
    ("/root/projects/brightkidco/outputs/copy/pp-extended-ed/pped-22-e5-l3.md", None, None),  # No mechanism section in email copy
    ("/root/projects/brightkidco/outputs/copy/pp-extended-ed/pped-22-e5-gf.md", "What the science actually shows", "You don't have to track"),
]

print(f"Files to process: {len(files_to_process)}")
print("Starting mechanism trims...")
