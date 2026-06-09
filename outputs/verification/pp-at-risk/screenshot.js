const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const htmlPath = path.resolve('/root/projects/brightkidco/outputs/verification/pp-at-risk/atrisk-23-e4-render.html');

  // 1. Full page at 420px width
  const page1 = await browser.newPage({ viewport: { width: 420, height: 800 } });
  await page1.goto('file://' + htmlPath, { waitUntil: 'networkidle' });
  await page1.waitForTimeout(1000);
  await page1.screenshot({
    path: '/root/projects/brightkidco/outputs/verification/pp-at-risk/atrisk-23-e4-420-full.png',
    fullPage: true
  });
  await page1.close();

  // 2. Above the fold at 420x568
  const page2 = await browser.newPage({ viewport: { width: 420, height: 568 } });
  await page2.goto('file://' + htmlPath, { waitUntil: 'networkidle' });
  await page2.waitForTimeout(1000);
  await page2.screenshot({
    path: '/root/projects/brightkidco/outputs/verification/pp-at-risk/atrisk-23-e4-420x568-above-fold.png',
    fullPage: false
  });
  await page2.close();

  // 3. Mobile at 375px width
  const page3 = await browser.newPage({ viewport: { width: 375, height: 812 } });
  await page3.goto('file://' + htmlPath, { waitUntil: 'networkidle' });
  await page3.waitForTimeout(1000);
  await page3.screenshot({
    path: '/root/projects/brightkidco/outputs/verification/pp-at-risk/atrisk-23-e4-375-mobile.png',
    fullPage: false
  });
  await page3.close();

  await browser.close();
  console.log('Screenshots complete.');
})();
