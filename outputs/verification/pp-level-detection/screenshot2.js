const puppeteer = require('puppeteer');
const path = require('path');
const delay = ms => new Promise(r => setTimeout(r, ms));

const HTML_FILE = 'file://' + path.resolve('/root/projects/brightkidco/outputs/verification/pp-level-detection/pp-leveldetect-01-e1.html');
const OUTPUT_DIR = '/root/projects/brightkidco/outputs/verification/pp-level-detection';

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
  });

  // Above-fold screenshot
  const page = await browser.newPage();
  await page.setViewport({ width: 420, height: 568, deviceScaleFactor: 2 });
  await page.goto(HTML_FILE, { waitUntil: 'networkidle0', timeout: 30000 });
  await delay(2000);
  await page.screenshot({
    path: path.join(OUTPUT_DIR, 'pp-leveldetect-01-e1-420-above-fold.png'),
    fullPage: false,
  });
  console.log('Above-fold screenshot saved');

  // Console errors
  const errors = [];
  page.on('console', msg => { if (msg.type() === 'error') errors.push(msg.text()); });
  page.on('pageerror', err => errors.push(err.message));

  // Get metrics
  const metrics = await page.evaluate(() => {
    const root = document.getElementById('root');
    const shell = root?.firstChild;
    return {
      emailWidth: shell ? shell.offsetWidth : 0,
      emailHeight: shell ? shell.offsetHeight : 0,
      consoleErrors: [],
    };
  });

  console.log('Metrics:', JSON.stringify(metrics));
  console.log('Console errors:', JSON.stringify(errors));

  await browser.close();
  console.log('Done');
})();
