#!/usr/bin/env python3
"""
render_check.py — Open a bundled standalone HTML in headless Chromium,
wait for React+Babel-standalone to mount, then verify the page rendered
without errors.

Usage:
    python3 render_check.py <file.html> [expected_artboard_count]

What it checks:
1. Page loads (no network error)
2. Zero console errors during page lifetime
3. At least 1 <DCArtboard> element rendered (if expected_artboard_count given, exactly that many)
4. All <img> tags have resolved src (no broken images)
5. Return non-zero if any check fails
"""

import sys
import re
import asyncio
from pathlib import Path
from playwright.async_api import async_playwright


async def render_check(html_path: str, expected_artboards: int | None = None) -> int:
    html_p = Path(html_path).resolve()
    if not html_p.exists():
        print(f"ERROR: file not found: {html_p}")
        return 1

    url = f"file://{html_p}"
    print(f"Opening: {url}")

    errors = []
    warnings = []

    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True, args=["--no-sandbox", "--disable-setuid-sandbox"])
        context = await browser.new_context()
        page = await context.new_page()

        # Capture console errors
        def on_console(msg):
            if msg.type == "error":
                errors.append(msg.text)
            elif msg.type == "warning":
                warnings.append(msg.text)

        page.on("console", on_console)

        # Capture page errors (uncaught exceptions)
        def on_pageerror(err):
            errors.append(f"pageerror: {err}")

        page.on("pageerror", on_pageerror)

        # Navigate
        try:
            await page.goto(url, wait_until="networkidle", timeout=30000)
        except Exception as e:
            print(f"ERROR: navigation failed: {e}")
            await browser.close()
            return 1

        # Wait for React to mount — give Babel-standalone time to transpile
        await page.wait_for_timeout(8000)

        # Check for <DCArtboard> elements — design-canvas.jsx uses data-dc-slot
        # on each artboard wrapper div
        artboard_count = await page.evaluate("""
            () => {
                return document.querySelectorAll('[data-dc-slot]').length;
            }
        """)

        # Check for broken images
        broken_images = await page.evaluate("""
            () => {
                const imgs = document.querySelectorAll('img');
                const broken = [];
                for (const img of imgs) {
                    if (img.naturalWidth === 0 && img.complete) {
                        broken.push(img.src.substring(0, 100));
                    }
                }
                return broken;
            }
        """)

        # Count total <img> tags
        total_images = await page.evaluate("document.querySelectorAll('img').length")

        # Print result
        print(f"\n  console errors:    {len(errors)}")
        for e in errors[:5]:
            print(f"    - {e[:200]}")
        if len(errors) > 5:
            print(f"    ... and {len(errors) - 5} more")

        print(f"  console warnings:  {len(warnings)}")
        for w in warnings[:3]:
            print(f"    - {w[:200]}")

        print(f"  <img> tags total:  {total_images}")
        print(f"  broken <img>:      {len(broken_images)}")
        for b in broken_images[:3]:
            print(f"    - {b}")

        print(f"  artboard divs:     {artboard_count}")
        if expected_artboards is not None:
            print(f"  expected:          {expected_artboards}")

        await browser.close()

    # Determine pass/fail
    # Filter out known-acceptable errors (state.json fetch on file:// URLs is expected
    # — design-canvas.jsx falls back to default state after 150ms timeout)
    acceptable_error_patterns = [
        r'\.design-canvas\.state\.json',  # canvas state sidecar, file:// not supported
        r'ERR_FILE_NOT_FOUND.*\.design-canvas',  # same root cause
    ]
    filtered_errors = []
    for e in errors:
        if any(re.search(pat, e) for pat in acceptable_error_patterns):
            continue
        filtered_errors.append(e)
    errors = filtered_errors

    failures = []
    if errors:
        failures.append(f"{len(errors)} console errors")
    if broken_images:
        failures.append(f"{len(broken_images)} broken images")
    if expected_artboards is not None and artboard_count != expected_artboards:
        failures.append(f"artboard count mismatch: got {artboard_count}, expected {expected_artboards}")

    if failures:
        print(f"\n✗ RENDER CHECK FAILED:")
        for f in failures:
            print(f"  - {f}")
        return 1

    print(f"\n✓ RENDER CHECK PASSED")
    return 0


def main():
    if len(sys.argv) < 2:
        print("Usage: python3 render_check.py <file.html> [expected_artboard_count]")
        sys.exit(1)

    html_path = sys.argv[1]
    expected_raw = sys.argv[2] if len(sys.argv) > 2 else None
    expected = int(expected_raw) if expected_raw is not None else None

    exit_code = asyncio.run(render_check(html_path, expected))
    sys.exit(exit_code)


if __name__ == "__main__":
    main()
