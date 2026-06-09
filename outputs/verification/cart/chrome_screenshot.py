#!/usr/bin/env python3
"""Take screenshots using Chrome CLI directly (--screenshot flag)."""
import subprocess
import os
import json

CHROME = "/root/.hermes/profiles/ops13/home/.cache/ms-playwright/chromium-1223/chrome-linux64/chrome"
RENDER = "/root/projects/brightkidco/outputs/verification/cart/cart-02-e1-render.html"
OUT = "/root/projects/brightkidco/outputs/verification/cart"
URL = f"file://{RENDER}"

# 1. Full-page screenshot at 420px width
print("Taking full-page screenshot...")
r = subprocess.run([
    CHROME, "--headless", "--no-sandbox", "--disable-gpu", "--disable-dev-shm-usage",
    "--window-size=420,2000",
    f"--screenshot={OUT}/cart-02-e1-screenshot.png",
    URL
], capture_output=True, text=True, timeout=30)
print(f"Exit: {r.returncode}")
if r.stderr:
    print(f"Stderr: {r.stderr[:200]}")

# Check if file was created
if os.path.exists(f"{OUT}/cart-02-e1-screenshot.png"):
    size = os.path.getsize(f"{OUT}/cart-02-e1-screenshot.png")
    print(f"Screenshot saved: {size} bytes")
else:
    print("Screenshot NOT created")

# 2. Above-fold (420x568)
print("\nTaking above-fold screenshot...")
r2 = subprocess.run([
    CHROME, "--headless", "--no-sandbox", "--disable-gpu", "--disable-dev-shm-usage",
    "--window-size=420,568",
    f"--screenshot={OUT}/cart-02-e1-above-fold.png",
    URL
], capture_output=True, text=True, timeout=30)
if os.path.exists(f"{OUT}/cart-02-e1-above-fold.png"):
    size = os.path.getsize(f"{OUT}/cart-02-e1-above-fold.png")
    print(f"Above-fold saved: {size} bytes")

# 3. Mobile at 320px
print("\nTaking mobile screenshot...")
r3 = subprocess.run([
    CHROME, "--headless", "--no-sandbox", "--disable-gpu", "--disable-dev-shm-usage",
    "--window-size=320,2000",
    f"--screenshot={OUT}/cart-02-e1-mobile.png",
    URL
], capture_output=True, text=True, timeout=30)
if os.path.exists(f"{OUT}/cart-02-e1-mobile.png"):
    size = os.path.getsize(f"{OUT}/cart-02-e1-mobile.png")
    print(f"Mobile saved: {size} bytes")

print("\nDone!")
