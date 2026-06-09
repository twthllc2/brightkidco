const puppeteer = require('puppeteer');
const path = require('path');

const delay = ms => new Promise(r => setTimeout(r, ms));
const HTML_FILE = 'file://' + path.resolve('/root/projects/brightkidco/outputs/verification/pp-level-detection/detection-10-render.html');
const OUTPUT_DIR = '/root/projects/brightkidco/outputs/verification/pp-level-detection';

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
  });

  // Screenshot 1: 375px mobile (full page)
  const page1 = await browser.newPage();
  await page1.setViewport({ width: 375, height: 812, deviceScaleFactor: 2 });
  await page1.goto(HTML_FILE, { waitUntil: 'networkidle0', timeout: 30000 });
  await delay(3000);
  await page1.screenshot({
    path: path.join(OUTPUT_DIR, 'detection-10-375-mobile.png'),
    fullPage: true,
  });
  console.log('Screenshot 1: 375px mobile saved');

  // Screenshot 2: 420px full page
  const page2 = await browser.newPage();
  await page2.setViewport({ width: 420, height: 800, deviceScaleFactor: 2 });
  await page2.goto(HTML_FILE, { waitUntil: 'networkidle0', timeout: 30000 });
  await delay(3000);
  await page2.screenshot({
    path: path.join(OUTPUT_DIR, 'detection-10-420-full.png'),
    fullPage: true,
  });
  console.log('Screenshot 2: 420px full saved');

  // Screenshot 3: 420x568 above-fold (viewport only)
  const page3 = await browser.newPage();
  await page3.setViewport({ width: 420, height: 568, deviceScaleFactor: 2 });
  await page3.goto(HTML_FILE, { waitUntil: 'networkidle0', timeout: 30000 });
  await delay(3000);
  await page3.screenshot({
    path: path.join(OUTPUT_DIR, 'detection-10-420x568-above-fold.png'),
    fullPage: false,
  });
  console.log('Screenshot 3: 420x568 above-fold saved');

  await browser.close();
  console.log('Done.');
})();
