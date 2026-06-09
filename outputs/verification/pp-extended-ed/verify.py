import os

base = "/root/projects/brightkidco/outputs/verification/pp-extended-ed"

# Check file existence and sizes
checks = {}
for f in ["pped-22-e5-l2-render.html", "pped-22-e5-l2-420-full.png", 
          "pped-22-e5-l2-420x568-above-fold.png", "pped-22-e5-l2-375-mobile.png"]:
    path = os.path.join(base, f)
    size = os.path.getsize(path) if os.path.exists(path) else 0
    checks[f] = {"exists": os.path.exists(path), "size": size}

# Read HTML to check content
with open(os.path.join(base, "pped-22-e5-l2-render.html"), "r") as fh:
    html = fh.read()

content_checks = {
    "Google Fonts loaded": "fonts.googleapis.com" in html and "Questrial" in html,
    "420px container": "max-width: 420px" in html,
    "Brand teal #2BAEB4": "#2BAEB4" in html,
    "Brand green #5DD07A": "#5DD07A" in html,
    "Brand ink #1F2D2F": "#1F2D2F" in html,
    "Brand soft #4A6568": "#4A6568" in html,
    "Brand cream #FBF7F1": "#FBF7F1" in html,
    "Badge PLATEAU TROUBLESHOOTING": "PLATEAU TROUBLESHOOTING" in html,
    "Headline present": "recalibration" in html,
    "Brain Road placeholder": "BRAIN ROAD" in html,
    "Gradient bands": "linear-gradient(90deg, #2BAEB4" in html,
    "Letter-09 recognition hook": "And then it stopped" in html,
    "Neurological reframe": "consolidation phase" in html,
    "Card 1: Prompt-Dependency": "Prompt-Dependency Persists" in html,
    "Card 2: Sensory Habituation": "Sensory Habituation" in html,
    "Card 3: Environment-Specific": "Environment-Specific Regression" in html,
    "Signal-Timing Diagram": "SIGNAL-TIMING DIAGRAM" in html,
    "Easter egg equation": "\u2202I/\u2202t" in html,
    "CTA button": "Ask Lena a question" in html,
    "CTA green #039902": "#039902" in html,
    "Awareness checklist (4 items)": html.count("\u2713") >= 4,
    "60-day guarantee": "60-day guarantee" in html,
    "Lena signoff dark card": "#1F2A2C" in html,
    "Lena signature (Caveat)": "Caveat" in html,
    "P.S. line": "P.S." in html,
    "P.P.S. line": "P.P.S." in html,
    "Fraunces serif": "Fraunces" in html,
    "Footer tagline": "Built for the brain" in html,
    "CAN-SPAM address": "123 Commerce Street" in html,
    "Unsubscribe link": "Unsubscribe" in html,
}

print("=== FILE CHECKS ===")
for f, info in checks.items():
    status = "PASS" if info["exists"] and info["size"] > 0 else "FAIL"
    print(f"  {status}: {f} ({info['size']:,} bytes)")

print("\n=== CONTENT CHECKS ===")
for check, result in content_checks.items():
    status = "PASS" if result else "FAIL"
    print(f"  {status}: {check}")

total = len(content_checks)
passed = sum(1 for v in content_checks.values() if v)
print(f"\n=== SUMMARY: {passed}/{total} content checks passed ===")
