#!/usr/bin/env python3
"""Take screenshots of welcome-01-e7-l2 with correct naming convention."""
import subprocess
import json
import time

# Check if Chrome is running
try:
    result = subprocess.run(['curl', '-s', 'http://127.0.0.1:9222/json/version'], 
                          capture_output=True, text=True, timeout=5)
    if result.returncode != 0:
        print("Chrome CDP not available")
        exit(1)
    print("Chrome CDP is available")
except:
    print("Chrome CDP not available")
    exit(1)

# Get WebSocket URL
result = subprocess.run(['curl', '-s', 'http://127.0.0.1:9222/json/version'], 
                      capture_output=True, text=True)
version_info = json.loads(result.stdout)
ws_url = version_info.get('webSocketDebuggerUrl', '')
print(f"WebSocket URL: {ws_url}")

# Get list of tabs
result = subprocess.run(['curl', '-s', 'http://127.0.0.1:9222/json/list'], 
                      capture_output=True, text=True)
tabs = json.loads(result.stdout)
print(f"Number of tabs: {len(tabs)}")

# Create a Node.js script to take screenshots
script = f'''
const puppeteer = require('puppeteer-core');

(async () => {{
  try {{
    const browser = await puppeteer.connect({{
      browserWSEndpoint: '{ws_url}'
    }});
    
    const page = await browser.newPage();
    
    // Load the HTML file
    await page.goto('file:///root/projects/brightkidco/outputs/verification/welcome/welcome-01-e7-l2-render.html', {{ waitUntil: 'networkidle0' }});
    await new Promise(r => setTimeout(r, 3000));
    
    // Check if page loaded correctly
    const title = await page.title();
    console.log('Page title: ' + title);
    
    // Take 375px mobile screenshot (full page)
    await page.setViewport({{ width: 375, height: 800 }});
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({{ 
      path: '/root/projects/brightkidco/outputs/verification/welcome/welcome-01-e7-l2-375-mobile.png',
      fullPage: true 
    }});
    console.log('Saved: welcome-01-e7-l2-375-mobile.png');
    
    // Take 420px full screenshot (full page)
    await page.setViewport({{ width: 420, height: 800 }});
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({{ 
      path: '/root/projects/brightkidco/outputs/verification/welcome/welcome-01-e7-l2-420-full.png',
      fullPage: true 
    }});
    console.log('Saved: welcome-01-e7-l2-420-full.png');
    
    // Take 420x568 above-fold screenshot (viewport only)
    await page.setViewport({{ width: 420, height: 568 }});
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({{ 
      path: '/root/projects/brightkidco/outputs/verification/welcome/welcome-01-e7-l2-420x568-above-fold.png',
      fullPage: false 
    }});
    console.log('Saved: welcome-01-e7-l2-420x568-above-fold.png');
    
    // Check console errors
    const errors = [];
    page.on('console', msg => {{
      if (msg.type() === 'error') errors.push(msg.text());
    }});
    
    // Get rendered width
    const width = await page.evaluate(() => document.querySelector('#root')?.offsetWidth || 0);
    console.log('Rendered width: ' + width + 'px');
    
    await page.close();
    console.log('All screenshots saved successfully');
    
  }} catch (error) {{
    console.error('Error:', error.message);
    process.exit(1);
  }}
}})();
'''

# Write the script to a temp file
import tempfile
import os

with tempfile.NamedTemporaryFile(mode='w', suffix='.js', delete=False) as f:
    f.write(script)
    script_path = f.name

# Run the script
try:
    result = subprocess.run(['node', script_path], 
                          capture_output=True, text=True, timeout=30)
    print(result.stdout)
    if result.stderr:
        print("STDERR:", result.stderr)
    exit_code = result.returncode
except subprocess.TimeoutExpired:
    print("Script timed out")
    exit_code = 1
except Exception as e:
    print(f"Error: {e}")
    exit_code = 1
finally:
    os.unlink(script_path)

exit(exit_code)
