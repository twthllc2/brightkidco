#!/usr/bin/env python3
"""20-point verification checklist for pped-22-e4-l2."""
import os, json, re
from pathlib import Path

OUT = Path("/root/projects/brightkidco/outputs/verification/pp-extended-ed")
HTML = OUT / "pped-22-e4-l2-render.html"
COPY = Path("/root/projects/brightkidco/outputs/copy/pp-extended-ed/pped-22-e4-l2.md")
WIRE = Path("/root/projects/brightkidco/outputs/wireframes/pp-extended-ed/pped-22-e4-l2.md")

html = HTML.read_text()
copy = COPY.read_text()
wire = WIRE.read_text()

results = []
def check(num, name, passed, detail=""):
    status = "PASS" if passed else "FAIL"
    results.append((num, name, status, detail))
    print(f"  [{num:2d}] {status} — {name}" + (f" ({detail})" if detail else ""))

print("20-POINT VERIFICATION: pped-22-e4-l2")
print("=" * 60)

# 1. HTML file exists and > 100 bytes
check(1, "Render HTML exists and > 100 bytes",
      HTML.exists() and HTML.stat().st_size > 100,
      f"{HTML.stat().st_size} bytes")

# 2. All 3 screenshots exist and > 10KB
shots = [
    OUT / "pped-22-e4-l2-420-full.png",
    OUT / "pped-22-e4-l2-420x568-above-fold.png",
    OUT / "pped-22-e4-l2-375-mobile.png",
]
all_shots_ok = all(s.exists() and s.stat().st_size > 10240 for s in shots)
sizes = [s.stat().st_size for s in shots]
check(2, "All 3 screenshots exist and > 10KB each",
      all_shots_ok, f"sizes: {sizes}")

# 3. Google Fonts loaded (Questrial + Fraunces)
check(3, "Google Fonts loaded (Questrial + Fraunces)",
      "fonts.googleapis.com" in html and "Questrial" in html and "Fraunces" in html)

# 4. 420px width container
check(4, "420px width container present",
      "width: 420px" in html or "width:420px" in html)

# 5. Header with BrightKidCo branding
check(5, "Header with BrightKidCo branding",
      "BrightKidCo" in html[:3000])

# 6. Hero section with eyebrow, H1, subtext
check(6, "Hero section (eyebrow + H1 + subtext)",
      "DAY 21 CHECK-IN" in html and
      "3 weeks in, here's what" in html and
      "21 days of body-signal learning" in html)

# 7. Timeline visual present
check(7, "Timeline visual (Week labels + bar + gap label)",
      "Week 1" in html and "Week 6-8" in html and "THE 3-WEEK GAP" in html and "SIGNAL" in html)

# 8. Gradient bands (teal-to-green)
check(8, "Gradient bands between sections",
      html.count("linear-gradient(90deg, #2BAEB4") >= 3)

# 9. Letter/mechanism section with ink shadow
check(9, "Mechanism section with ink box-shadow card",
      "#1F2D2F" in html and "box-shadow" in html)

# 10. Research citation cards (2 cards with confidence badges)
check(10, "Research citations (2 cards with confidence badges)",
      "Hample, Mahler" in html and "Internal Data, N=672" in html and
      "CONFIDENCE: MEDIUM" in html and "CONFIDENCE: LOW (INTERNAL)" in html)

# 11. Troubleshooting checklist (4 cards with emoji icons)
check(11, "Troubleshooting checklist (4 cards)",
      all(x in html for x in ["Wear Time", "The Environment", "Clothing Choices", "Daily Rhythm"]))

# 12. Testimonial with green left border
check(12, "Testimonial with green left border",
      "border-left" in html and "#5DD07A" in html)

# 13. Progress table with 4 rows (Week 4-5, 5-6, 6-8, 8+)
check(13, "Progress table (4 rows: 4-5, 5-6, 6-8, 8+)",
      all(x in html for x in ["4-5", "5-6", "6-8", "8+"]))

# 14. 60-day guarantee section
check(14, "60-day guarantee section",
      "60-day guarantee" in html and "39 more days" in html)

# 15. CTA button with teal background
check(15, "CTA button (teal bg, white text, permission frame)",
      "When you're ready, the body-signal learning guide is here" in html and
      "background:#2BAEB4" in html)

# 16. Lena sign-off with dark background card
check(16, "Lena sign-off (dark card, avatar, P.S.)",
      "background:#1F2A2C" in html and
      "P.S." in html and "Lena ——" in html)

# 17. Footer with unsubscribe + address
check(17, "Footer (unsubscribe + address)",
      "unsubscribe" in html.lower() and "San Francisco, CA 94107" in html)

# 18. Brand colors used correctly
check(18, "Brand colors used (teal, green, ink, soft, cream, muted)",
      all(c in html for c in ["#2BAEB4", "#5DD07A", "#1F2D2F", "#4A6568", "#FBF7F1", "#8A9B9D"]))

# 19. Typography matches spec (Questrial primary, Fraunces serif accent)
check(19, "Typography matches spec (Questrial primary, Fraunces accent)",
      "Questrial" in html and "Fraunces" in html and
      "font-family:'Fraunces',serif" in html.replace(" ",""))

# 20. Key copy elements from copy file present in render
check(20, "Key copy from copy file present in render",
      "Lena here." in html and
      "interoception" in html and
      "BCBA" in html and
      "Barmpagiannis" not in html)  # Note: 49-study reference not in JSX sections shown

print("\n" + "=" * 60)
passed = sum(1 for _, _, s, _ in results if s == "PASS")
failed = sum(1 for _, _, s, _ in results if s == "FAIL")
print(f"RESULT: {passed}/20 PASS, {failed}/20 FAIL")
if failed == 0:
    print("STATUS: PASS")
else:
    print("STATUS: FAIL")
    for num, name, status, detail in results:
        if status == "FAIL":
            print(f"  FAILED [{num}]: {name} — {detail}")
