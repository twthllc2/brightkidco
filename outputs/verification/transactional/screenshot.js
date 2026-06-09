const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch({ headless: true, args: ['--no-sandbox', '--disable-gpu'] });
  const renderUrl = 'file:///root/projects/brightkidco/outputs/verification/transactional/shipping-06-render.html';
  const outputDir = '/root/projects/brightkidco/outputs/verification/transactional';

  // 1. Full page at 420px width
  const page1 = await browser.newPage({ viewport: { width: 420, height: 800 } });
  await page1.goto(renderUrl, { waitUntil: 'load', timeout: 20000 });
  await page1.waitForTimeout(3000);
  await page1.screenshot({ path: path.join(outputDir, 'shipping-06-desktop-420.png'), fullPage: true });
  console.log('Screenshot 1 done');

  // 2. Mobile at 375px width
  const page2 = await browser.newPage({ viewport: { width: 375, height: 812 } });
  await page2.goto(renderUrl, { waitUntil: 'load', timeout: 20000 });
  await page2.waitForTimeout(3000);
  await page2.screenshot({ path: path.join(outputDir, 'shipping-06-mobile-375.png'), fullPage: true });
  console.log('Screenshot 2 done');

  // 3. Above-fold at 420x568
  const page3 = await browser.newPage({ viewport: { width: 420, height: 568 } });
  await page3.goto(renderUrl, { waitUntil: 'load', timeout: 20000 });
  await page3.waitForTimeout(3000);
  await page3.screenshot({ path: path.join(outputDir, 'shipping-06-above-fold.png'), fullPage: false });
  console.log('Screenshot 3 done');

  // 4. Collect console errors
  const page4 = await browser.newPage({ viewport: { width: 420, height: 800 } });
  const errors = [];
  page4.on('console', msg => {
    if (msg.type() === 'error') errors.push(msg.text());
  });
  page4.on('pageerror', err => errors.push(err.message));
  await page4.goto(renderUrl, { waitUntil: 'load', timeout: 20000 });
  await page4.waitForTimeout(3000);
  console.log('Console errors:', JSON.stringify(errors));

  // 5. Get structure
  const structure = await page4.evaluate(() => {
    const root = document.getElementById('root');
    const h1s = [...root.querySelectorAll('h1')].map(e => e.textContent.trim());
    const h2s = [...root.querySelectorAll('h2')].map(e => e.textContent.trim());
    const imgs = root.querySelectorAll('img');
    const svgs = root.querySelectorAll('svg');
    const computedWidth = root.firstElementChild ? root.firstElementChild.offsetWidth : 0;
    const totalHeight = root.firstElementChild ? root.firstElementChild.offsetHeight : 0;
    return { h1s, h2s, imgCount: imgs.length, svgCount: svgs.length, computedWidth, totalHeight };
  });
  console.log('Structure:', JSON.stringify(structure));

  await browser.close();
  console.log('Done');
})();
