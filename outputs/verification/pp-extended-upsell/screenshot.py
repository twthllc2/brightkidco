#!/usr/bin/env python3
"""Screenshot the render HTML at three viewports."""
import subprocess, sys, os

OUT = "/root/projects/brightkidco/outputs/verification/pp-extended-upsell"
HTML = f"{OUT}/ppupsell-12-e2-render.html"

# Use file:// URL
url = f"file://{HTML}"

script = f'''
const {{ chromium }} = require('playwright');

(async () => {{
  const browser = await chromium.launch({{ headless: true }});
  const page = await browser.newPage();
  
  // Collect console errors
  const errors = [];
  page.on('console', msg => {{
    if (msg.type() === 'error') errors.push(msg.text());
  }});
  page.on('pageerror', err => errors.push(err.message));

  await page.goto('{url}', {{ waitUntil: 'networkidle' }});
  
  // Wait for fonts to load
  await page.waitForTimeout(3000);

  // 1. Full page at 420px
  await page.setViewportSize({{ width: 420, height: 800 }});
  await page.screenshot({{
    path: '{OUT}/ppupsell-12-e2-full-420.png',
    fullPage: true
  }});
  console.log('Screenshot 1: full-420 done');

  // 2. Mobile at 375px
  await page.setViewportSize({{ width: 375, height: 812 }});
  await page.waitForTimeout(500);
  await page.screenshot({{
    path: '{OUT}/ppupsell-12-e2-mobile-375.png',
    fullPage: true
  }});
  console.log('Screenshot 2: mobile-375 done');

  // 3. Above-fold at 420x568
  await page.setViewportSize({{ width: 420, height: 568 }});
  await page.waitForTimeout(500);
  await page.screenshot({{
    path: '{OUT}/ppupsell-12-e2-above-fold-420x568.png',
    fullPage: false
  }});
  console.log('Screenshot 3: above-fold done');

  // Report console errors
  if (errors.length > 0) {{
    console.log('CONSOLE ERRORS:');
    errors.forEach(e => console.log('  - ' + e));
  }} else {{
    console.log('No console errors detected.');
  }}

  // Get page dimensions
  const dims = await page.evaluate(() => {{
    const root = document.getElementById('root');
    return {{
      width: root.offsetWidth,
      height: root.scrollHeight,
      childCount: root.children.length
    }};
  }});
  console.log('Page dimensions: ' + JSON.stringify(dims));

  await browser.close();
}})();
'''

# Write and run the script
script_path = f"{OUT}/screenshot.js"
with open(script_path, 'w') as f:
    f.write(script)

result = subprocess.run(['node', script_path], capture_output=True, text=True, timeout=60)
print("STDOUT:", result.stdout)
print("STDERR:", result.stderr)
print("EXIT:", result.returncode)
