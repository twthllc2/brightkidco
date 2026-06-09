const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  const errors = [];
  page.on('console', msg => { if (msg.type() === 'error') errors.push(msg.text()); });
  page.on('pageerror', err => errors.push(err.message));

  await page.goto('file:///root/projects/brightkidco/outputs/verification/pp-extended-upsell/ppupsell-12-e3-render.html', { waitUntil: 'networkidle' });
  await page.waitForTimeout(3000);

  // 1. Full page at 420px
  await page.setViewportSize({ width: 420, height: 800 });
  await page.screenshot({ path: '/root/projects/brightkidco/outputs/verification/pp-extended-upsell/ppupsell-12-e3-full-420.png', fullPage: true });
  console.log('Screenshot 1: full-420 done');

  // 2. Mobile at 375px
  await page.setViewportSize({ width: 375, height: 812 });
  await page.waitForTimeout(500);
  await page.screenshot({ path: '/root/projects/brightkidco/outputs/verification/pp-extended-upsell/ppupsell-12-e3-mobile-375.png', fullPage: true });
  console.log('Screenshot 2: mobile-375 done');

  // 3. Above-fold at 420x568
  await page.setViewportSize({ width: 420, height: 568 });
  await page.waitForTimeout(500);
  await page.screenshot({ path: '/root/projects/brightkidco/outputs/verification/pp-extended-upsell/ppupsell-12-e3-above-fold-420x568.png', fullPage: false });
  console.log('Screenshot 3: above-fold done');

  if (errors.length > 0) { console.log('CONSOLE ERRORS:'); errors.forEach(e => console.log('  - ' + e)); }
  else { console.log('No console errors detected.'); }

  const dims = await page.evaluate(() => {
    const root = document.getElementById('root');
    return { width: root.offsetWidth, height: root.scrollHeight, childCount: root.children.length };
  });
  console.log('Page dimensions: ' + JSON.stringify(dims));
  await browser.close();
})();
