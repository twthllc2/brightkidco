const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  // Collect console errors
  const errors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') errors.push(msg.text());
  });
  page.on('pageerror', err => errors.push(err.message));

  await page.goto('file:///root/projects/brightkidco/outputs/verification/pp-extended-upsell/ppupsell-12-e1-render.html', { waitUntil: 'networkidle' });
  
  // Wait for fonts to load
  await page.waitForTimeout(3000);

  const outDir = '/root/projects/brightkidco/outputs/verification/pp-extended-upsell';

  // 1. Mobile at 375px
  await page.setViewportSize({ width: 375, height: 812 });
  await page.waitForTimeout(500);
  await page.screenshot({
    path: `${outDir}/ppupsell-12-e1-375-mobile.png`,
    fullPage: true
  });
  console.log('Screenshot 1: 375-mobile done');

  // 2. Full page at 420px
  await page.setViewportSize({ width: 420, height: 800 });
  await page.waitForTimeout(500);
  await page.screenshot({
    path: `${outDir}/ppupsell-12-e1-420-full.png`,
    fullPage: true
  });
  console.log('Screenshot 2: 420-full done');

  // 3. Above-fold at 420x568
  await page.setViewportSize({ width: 420, height: 568 });
  await page.waitForTimeout(500);
  await page.screenshot({
    path: `${outDir}/ppupsell-12-e1-420x568-above-fold.png`,
    fullPage: false
  });
  console.log('Screenshot 3: 420x568-above-fold done');

  // Report console errors
  if (errors.length > 0) {
    console.log('CONSOLE ERRORS:');
    errors.forEach(e => console.log('  - ' + e));
  } else {
    console.log('No console errors detected.');
  }

  await browser.close();
})();
