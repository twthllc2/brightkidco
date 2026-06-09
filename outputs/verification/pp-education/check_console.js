const puppeteer = require('/root/.hermes/node/lib/node_modules/puppeteer-core');
(async () => {
  const browser = await puppeteer.launch({
    executablePath: '/root/.cache/puppeteer/chrome/linux-149.0.7827.22/chrome-linux64/chrome',
    args: ['--no-sandbox', '--disable-gpu'],
    headless: 'new',
  });
  const page = await browser.newPage();
  const errors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') errors.push(msg.text());
  });
  page.on('pageerror', err => errors.push(err.message));
  await page.setViewport({ width: 420, height: 800 });
  await page.goto('file:///root/projects/brightkidco/outputs/verification/pp-education/pped-11-d14-render.html', { waitUntil: 'networkidle0', timeout: 30000 });
  await new Promise(r => setTimeout(r, 2000));
  
  // Get page height
  const height = await page.evaluate(() => document.getElementById('root').offsetHeight);
  console.log('Page height:', height);
  
  if (errors.length === 0) {
    console.log('NO CONSOLE ERRORS');
  } else {
    console.log('CONSOLE ERRORS:');
    errors.forEach(e => console.log('  -', e));
  }
  await browser.close();
})();
