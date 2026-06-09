const { chromium } = require('playwright');
const path = require('path');

const HTML_FILE = 'file://' + path.resolve('/root/projects/brightkidco/outputs/verification/pp-level-detection/pp-leveldetect-01-e1.html');
const OUTPUT_DIR = '/root/projects/brightkidco/outputs/verification/pp-level-detection';

(async () => {
  const browser = await chromium.launch({ headless: true });

  // Screenshot 1: 375px mobile (full page)
  const page1 = await browser.newPage();
  await page1.setViewportSize({ width: 375, height: 812 });
  await page1.goto(HTML_FILE, { waitUntil: 'networkidle', timeout: 30000 });
  await page1.waitForTimeout(3000);
  await page1.screenshot({
    path: path.join(OUTPUT_DIR, 'pp-leveldetect-01-e1-375-mobile.png'),
    fullPage: true,
  });
  console.log('Screenshot 1: 375px mobile saved');

  // Screenshot 2: 420px full page
  const page2 = await browser.newPage();
  await page2.setViewportSize({ width: 420, height: 800 });
  await page2.goto(HTML_FILE, { waitUntil: 'networkidle', timeout: 30000 });
  await page2.waitForTimeout(3000);
  await page2.screenshot({
    path: path.join(OUTPUT_DIR, 'pp-leveldetect-01-e1-420-full.png'),
    fullPage: true,
  });
  console.log('Screenshot 2: 420px full saved');

  // Screenshot 3: 420x568 above-fold (viewport only)
  const page3 = await browser.newPage();
  await page3.setViewportSize({ width: 420, height: 568 });
  await page3.goto(HTML_FILE, { waitUntil: 'networkidle', timeout: 30000 });
  await page3.waitForTimeout(3000);
  await page3.screenshot({
    path: path.join(OUTPUT_DIR, 'pp-leveldetect-01-e1-420x568-above-fold.png'),
    fullPage: false,
  });
  console.log('Screenshot 3: 420x568 above-fold saved');

  await browser.close();
  console.log('Done.');
})();
