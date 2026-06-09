#!/usr/bin/env python3
import json

with open("/root/projects/brightkidco/outputs/verification/checkout/checkout-03-e2-verification-data.json") as f:
    data = json.load(f)

texts = data["checks"]["textContent"]
all_text = " ".join(texts)

phrases = [
    "Whether you", "verbal or non-verbal", "diagnosed or still figuring it out",
    "hope-fear cycle", "realest question", "Three parents. Three different kids",
    "If 3 weeks of success then total regression", "dollar for every method",
    "made peace with maybe never", "signal-timing gap", "training problem",
    "Body-Signal Learning Layer", "30 to 60 seconds", "pull-up wicks away",
    "Some kids show their first signal in 2 weeks", "Others need 8 weeks",
    "Both are normal. Both are progress", "60-Day Trial", "Try it for 60 days",
    "Your Judgment", "By your judgment", "No Questions",
    "Full refund. No shipping to return", "every dollar back",
    "guarantee is not a sales tactic", "depends on your child",
    "YOUR CART", "product will be here when you",
    "today is not the day", "With care", "Lena",
    "Customer Support", "Mom of two autistic sons",
    "My older son was 8", "hit reply", "I read everything",
    "Calm progress", "Unsubscribe", "123 Commerce Street",
    "Portland, OR 97201", "Questions? Reply to this email",
]

missing = []
for p in phrases:
    if p.lower() in all_text.lower():
        print(f"PASS: {p}")
    else:
        print(f"FAIL: {p}")
        missing.append(p)

print(f"\n--- {len(phrases) - len(missing)}/{len(phrases)} found, {len(missing)} missing")
if missing:
    print("Missing:", missing)
