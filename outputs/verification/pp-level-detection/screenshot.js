const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const delay = ms => new Promise(r => setTimeout(r, ms));

const HTML_FILE = 'file://' + path.resolve('/root/projects/brightkidco/outputs/verification/pp-level-detection/pp-leveldetect-01-e1.html');
const OUTPUT_DIR = '/root/projects/brightkidco/outputs/verification/pp-level-detection';

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
  });

  // Screenshot 1: Full page at 420px width
  const page1 = await browser.newPage();
  await page1.setViewport({ width: 420, height: 800, deviceScaleFactor: 2 });
  await page1.goto(HTML_FILE, { waitUntil: 'networkidle0', timeout: 30000 });
  await delay(2000); // let fonts load
  await page1.screenshot({
    path: path.join(OUTPUT_DIR, 'pp-leveldetect-01-e1-420-full.png'),
    fullPage: true,
  });
  console.log('Screenshot 1: 420px full page saved');

  // Screenshot 2: Mobile at 375px width
  const page2 = await browser.newPage();
  await page2.setViewport({ width: 375, height: 812, deviceScaleFactor: 2 });
  await page2.goto(HTML_FILE, { waitUntil: 'networkidle0', timeout: 30000 });
  await delay(2000);
  await page2.screenshot({
    path: path.join(OUTPUT_DIR, 'pp-leveldetect-01-e1-375-mobile.png'),
    fullPage: true,
  });
  console.log('Screenshot 2: 375px mobile saved');

  // Screenshot 3: Above-fold at 420x568
  const page3 = await browser.newPage();
  await page3.setViewport({ width: 420, height: 568, deviceScaleFactor: 2 });
  await page3.goto(HTML_FILE, { waitUntil: 'networkidle0', timeout: 30000 });
  await delay(2000);
  await page3.screenshot({
    path: path.join(OUTPUT_DIR, 'pp-leveldetect-01-e1-420-above-fold.png'),
    fullPage: false,
  });
  console.log('Screenshot 3: 420x568 above-fold saved');

  // Collect console errors
  const page4 = await browser.newPage();
  const consoleErrors = [];
  page4.on('console', msg => {
    if (msg.type() === 'error') consoleErrors.push(msg.text());
  });
  page4.on('pageerror', err => consoleErrors.push(err.message));
  await page4.setViewport({ width: 420, height: 800, deviceScaleFactor: 1 });
  await page4.goto(HTML_FILE, { waitUntil: 'networkidle0', timeout: 30000 });
  await delay(2000);

  // Get page metrics
  const metrics = await page4.evaluate(() => {
    const root = document.getElementById('root');
    const emailShell = root?.querySelector('[style*="width: 420"]') || root?.firstChild;
    const width = emailShell ? emailShell.offsetWidth : 0;
    const height = emailShell ? emailShell.offsetHeight : 0;

    // Count sections
    const allDivs = root.querySelectorAll('div');
    const links = root.querySelectorAll('a[href="#"]');

    // Check fonts loaded
    const fontCheck = document.fonts ? Array.from(document.fonts).map(f => f.family + ' ' + f.status) : [];

    return {
      emailWidth: width,
      emailHeight: height,
      totalDivs: allDivs.length,
      linkCount: links.length,
      fonts: fontCheck,
      bodyBg: getComputedStyle(document.body).backgroundColor,
    };
  });

  console.log('\n=== Console Errors ===');
  consoleErrors.forEach(e => console.log('ERROR:', e));
  if (consoleErrors.length === 0) console.log('No console errors');

  console.log('\n=== Page Metrics ===');
  console.log(JSON.stringify(metrics, null, 2));

  await browser.close();
  console.log('\nDone.');
})();
