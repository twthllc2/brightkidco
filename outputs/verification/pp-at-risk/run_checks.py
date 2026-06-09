#!/usr/bin/env python3
import os

with open("/root/projects/brightkidco/outputs/verification/pp-at-risk/atrisk-23-e3-render.html", "r") as f:
    html = f.read()

checks = []
checks.append(("Preheader text present", "One small thing. Three days. No pressure." in html))
checks.append(("BKC brand header present", "BrightKidCo" in html))
checks.append(("Hero illustration area present", "SOFT RESET STILL LIFE" in html or "F5EFEA" in html))
checks.append(("Headline matches wireframe", "One last thing before I go quiet" in html))
checks.append(("Hook text present", "It's been a little quiet" in html))
checks.append(("Rose border validation callout", "border-left: 3px solid #D4A89B" in html))
checks.append(("Mechanism callout box present", "One thing worth trying" in html))
checks.append(("Compass/reset icon SVG", '<svg width="32" height="32"' in html))
checks.append(("3-hour/3-day suggestion present", "3 consecutive hours, three days" in html))
checks.append(("Interoception research reference", "interoception" in html))
checks.append(("CTA button present", "Try it for 3 days, no pressure" in html and "#D4A89B" in html))
checks.append(("CTA pill shape (border-radius 25px)", "border-radius: 25px" in html))
checks.append(("Secondary CTA text", "Or just tuck this away for later" in html))
checks.append(("Lena sign-off present", "Lena" in html and "Customer Support" in html))
checks.append(("P.S. in italic", "P.S." in html and "font-style: italic" in html))
checks.append(("60-day guarantee in P.S.", "60 days, your judgment" in html))
checks.append(("Footer with unsubscribe", "Unsubscribe" in html and "Manage Preferences" in html))
checks.append(("Warm background #FFF9F5", "#FFF9F5" in html))
checks.append(("Mechanism box styling", "border: 2px solid #D4A89B" in html and "#FAF5F0" in html))
checks.append(("Easter egg HTML comment", "The door doesn't lock" in html))

passed = 0
failed = 0
for i, (name, result) in enumerate(checks, 1):
    status = "PASS" if result else "FAIL"
    if result: passed += 1
    else: failed += 1
    print(f"  {i:2d}. [{status}] {name}")

print(f"\n  Results: {passed}/20 passed, {failed}/20 failed")

screenshot_checks = [
    ("/root/projects/brightkidco/outputs/verification/pp-at-risk/atrisk-23-e3-420-full.png", 10240),
    ("/root/projects/brightkidco/outputs/verification/pp-at-risk/atrisk-23-e3-420x568-above-fold.png", 10240),
    ("/root/projects/brightkidco/outputs/verification/pp-at-risk/atrisk-23-e3-375-mobile.png", 10240),
]
print("\n  Screenshot validation:")
for fpath, min_size in screenshot_checks:
    fname = os.path.basename(fpath)
    if os.path.exists(fpath):
        size = os.path.getsize(fpath)
        status = "PASS" if size > min_size else "FAIL"
        print(f"    [{status}] {fname} — {size:,} bytes (min {min_size:,})")
    else:
        print(f"    [FAIL] {fname} — file not found")

html_size = os.path.getsize("/root/projects/brightkidco/outputs/verification/pp-at-risk/atrisk-23-e3-render.html")
print(f"\n  HTML file size: {html_size:,} bytes ({html_size/1024:.1f} KB)")
print(f"  Gmail clip-safe (<102KB): {'PASS' if html_size < 104857 else 'FAIL'}")

overall = "PASS" if failed == 0 else "FAIL"
print(f"\n  Overall Status: {overall}")
