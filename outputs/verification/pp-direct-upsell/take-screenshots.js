const { chromium } = require('playwright');
const path = require('path');
const OUTPUT_DIR = '/root/projects/brightkidco/outputs/verification/pp-direct-upsell';
const RENDER_HTML = path.join(OUTPUT_DIR, 'upsell-09-e1-render.html');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  const consoleErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  
  await page.goto('file://' + RENDER_HTML, { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);

  // 1. Full page at 420px width
  await page.setViewportSize({ width: 420, height: 800 });
  await page.waitForTimeout(500);
  const fp1 = path.join(OUTPUT_DIR, 'upsell-09-e1-420-full.png');
  await page.screenshot({ path: fp1, fullPage: true });
  console.log('saved:', fp1);

  // 2. Mobile at 375px width
  await page.setViewportSize({ width: 375, height: 800 });
  await page.waitForTimeout(500);
  const fp2 = path.join(OUTPUT_DIR, 'upsell-09-e1-375-mobile.png');
  await page.screenshot({ path: fp2, fullPage: true });
  console.log('saved:', fp2);

  // 3. Above-fold at 420x568
  await page.setViewportSize({ width: 420, height: 568 });
  await page.waitForTimeout(500);
  const fp3 = path.join(OUTPUT_DIR, 'upsell-09-e1-420x568-above-fold.png');
  await page.screenshot({ path: fp3, fullPage: false });
  console.log('saved:', fp3);

  // Get page dimensions
  const dims = await page.evaluate(() => {
    const el = document.getElementById('root');
    return { width: el.scrollWidth, height: el.scrollHeight };
  });
  console.log('dimensions:', JSON.stringify(dims));
  console.log('consoleErrors:', JSON.stringify(consoleErrors));
  
  await browser.close();
})();
