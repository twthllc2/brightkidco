const puppeteer = require('/root/.hermes/node/lib/node_modules/puppeteer-core');
const path = require('path');
const fs = require('fs');

const OUTPUT_DIR = '/root/projects/brightkidco/outputs/verification/pp-mid-checkin';
const HTML_FILE = path.join(OUTPUT_DIR, 'mid-13-d60-render.html');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: '/root/.cache/puppeteer/chrome/linux-149.0.7827.22/chrome-linux64/chrome',
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu', '--font-render-hinting=none'],
  });

  const page = await browser.newPage();

  // Collect console messages
  const consoleMessages = [];
  page.on('console', msg => {
    consoleMessages.push({ type: msg.type(), text: msg.text() });
  });
  page.on('pageerror', err => {
    consoleMessages.push({ type: 'error', text: err.toString() });
  });

  await page.goto(`file://${HTML_FILE}`, { waitUntil: 'networkidle0', timeout: 30000 });

  // Debug: log page content
  const bodyHTML = await page.evaluate(() => document.body.innerHTML.substring(0, 500));
  console.log('Body HTML (first 500 chars):', bodyHTML);

  // Wait for React to render
  await page.waitForSelector('#root > div', { timeout: 15000 });
  await new Promise(r => setTimeout(r, 2000));

  // Screenshot 1: Full page at 420px
  await page.setViewport({ width: 420, height: 800, deviceScaleFactor: 2 });
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({
    path: path.join(OUTPUT_DIR, 'mid-13-d60-full-420.png'),
    fullPage: true,
  });
  console.log('Screenshot 1: full-420.png saved');

  // Screenshot 2: Mobile at 375px
  await page.setViewport({ width: 375, height: 812, deviceScaleFactor: 2 });
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({
    path: path.join(OUTPUT_DIR, 'mid-13-d60-mobile-375.png'),
    fullPage: true,
  });
  console.log('Screenshot 2: mobile-375.png saved');

  // Screenshot 3: Above-fold at 420x568
  await page.setViewport({ width: 420, height: 568, deviceScaleFactor: 2 });
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({
    path: path.join(OUTPUT_DIR, 'mid-13-d60-above-fold.png'),
    fullPage: false,
  });
  console.log('Screenshot 3: above-fold.png saved');

  // Get rendered HTML dimensions
  const dims = await page.evaluate(() => {
    const el = document.querySelector('#root > div');
    return { width: el.offsetWidth, height: el.offsetHeight };
  });
  console.log(`Rendered email: ${dims.width}px x ${dims.height}px`);

  // Count sections
  const sectionCount = await page.evaluate(() => {
    const email = document.querySelector('#root > div');
    return email ? email.children.length : 0;
  });
  console.log(`Section count: ${sectionCount}`);

  // Check fonts loaded
  const fontsLoaded = await page.evaluate(() => {
    return document.fonts.ready.then(() => {
      const fonts = [];
      document.fonts.forEach(f => {
        if (f.status === 'loaded') fonts.push(f.family);
      });
      return [...new Set(fonts)];
    });
  });
  console.log(`Fonts loaded: ${fontsLoaded.join(', ')}`);

  // Get computed styles for key elements
  const styleInfo = await page.evaluate(() => {
    const root = document.querySelector('#root > div');
    const rootStyle = window.getComputedStyle(root);
    return {
      rootWidth: rootStyle.width,
      rootBg: rootStyle.backgroundColor,
      rootFont: rootStyle.fontFamily,
    };
  });
  console.log(`Root styles: width=${styleInfo.rootWidth}, bg=${styleInfo.rootBg}, font=${styleInfo.rootFont}`);

  // Output console messages
  if (consoleMessages.length > 0) {
    console.log('\nConsole messages:');
    consoleMessages.forEach(m => console.log(`  [${m.type}] ${m.text}`));
  } else {
    console.log('\nNo console messages.');
  }

  // Save metadata
  const meta = {
    email: 'mid-13-d60',
    flow: 'pp-mid-checkin',
    renderedWidth: dims.width,
    renderedHeight: dims.height,
    sectionCount,
    fontsLoaded,
    consoleMessages,
    styleInfo,
  };
  fs.writeFileSync(path.join(OUTPUT_DIR, 'mid-13-d60-meta.json'), JSON.stringify(meta, null, 2));
  console.log('\nMetadata saved to mid-13-d60-meta.json');

  await browser.close();
})();
