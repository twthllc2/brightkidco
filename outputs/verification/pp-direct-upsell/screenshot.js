const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const outputDir = '/root/projects/brightkidco/outputs/verification/pp-direct-upsell';
  const htmlPath = path.join(outputDir, 'upsell-09-e2.html');

  // Screenshot 1: Full page at 420px
  const page1 = await browser.newPage();
  await page1.setViewportSize({ width: 420, height: 800 });
  await page1.goto('file://' + htmlPath);
  await page1.waitForTimeout(2000);
  await page1.screenshot({ path: path.join(outputDir, 'upsell-09-e2-420-full.png'), fullPage: true });
  console.log('420px full page screenshot saved');
  await page1.close();

  // Screenshot 2: Mobile at 375px
  const page2 = await browser.newPage();
  await page2.setViewportSize({ width: 375, height: 800 });
  await page2.goto('file://' + htmlPath);
  await page2.waitForTimeout(2000);
  await page2.screenshot({ path: path.join(outputDir, 'upsell-09-e2-375-mobile.png'), fullPage: true });
  console.log('375px mobile screenshot saved');
  await page2.close();

  // Screenshot 3: Above-fold 420x568
  const page3 = await browser.newPage();
  await page3.setViewportSize({ width: 420, height: 568 });
  await page3.goto('file://' + htmlPath);
  await page3.waitForTimeout(2000);
  await page3.screenshot({ path: path.join(outputDir, 'upsell-09-e2-420x568-above-fold.png'), fullPage: false });
  console.log('420x568 above-fold screenshot saved');
  await page3.close();

  await browser.close();
  console.log('All screenshots saved successfully');
})();
