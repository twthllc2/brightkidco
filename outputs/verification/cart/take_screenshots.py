#!/usr/bin/env python3
"""Take 3 screenshots for cart-02-e1 at required viewport sizes."""
import subprocess
import os

CHROME = "/root/.hermes/profiles/ops/home/.cache/ms-playwright/chromium-1223/chrome-linux64/chrome"
RENDER = "/root/projects/brightkidco/outputs/verification/cart/cart-02-e1-render.html"
OUT = "/root/projects/brightkidco/outputs/verification/cart"
URL = f"file://{RENDER}"

BASE_ARGS = ["--headless", "--no-sandbox", "--disable-gpu", "--disable-dev-shm-usage"]

def take_screenshot(window_w, window_h, filename, full_page=True):
    """Take a screenshot. Chrome --screenshot captures what's visible at window size."""
    filepath = os.path.join(OUT, filename)
    # Remove old file if exists
    if os.path.exists(filepath):
        os.remove(filepath)
    
    args = CHROME, *BASE_ARGS, f"--window-size={window_w},{window_h}", f"--screenshot={filepath}", URL
    print(f"Taking {filename} (viewport {window_w}x{window_h})...")
    r = subprocess.run(args, capture_output=True, text=True, timeout=30)
    if os.path.exists(filepath):
        size = os.path.getsize(filepath)
        print(f"  -> {size} bytes {'OK' if size > 100 else 'TOO SMALL!'}")
    else:
        print(f"  -> FAILED: file not created")
        if r.stderr:
            print(f"  stderr: {r.stderr[:200]}")
    return filepath

# 1. 375px mobile - full page
take_screenshot(375, 2000, "cart-02-e1-375-mobile.png")

# 2. 420px full - full page  
take_screenshot(420, 2000, "cart-02-e1-420-full.png")

# 3. 420x568 above-fold
take_screenshot(420, 568, "cart-02-e1-420x568-above-fold.png")

print("\nDone! Verifying files:")
for f in ["cart-02-e1-375-mobile.png", "cart-02-e1-420-full.png", "cart-02-e1-420x568-above-fold.png"]:
    path = os.path.join(OUT, f)
    if os.path.exists(path):
        size = os.path.getsize(path)
        status = "PASS" if size > 100 else "FAIL"
        print(f"  {f}: {size} bytes [{status}]")
    else:
        print(f"  {f}: MISSING")
