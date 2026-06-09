const puppeteer = require('/root/.hermes/node/lib/node_modules/puppeteer-core');
const path = require('path');

const OUTPUT_DIR = '/root/projects/brightkidco/outputs/verification/pp-mid-checkin';
const HTML_FILE = path.join(OUTPUT_DIR, 'mid-13-d60-render.html');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: '/root/.cache/puppeteer/chrome/linux-149.0.7827.22/chrome-linux64/chrome',
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu'],
  });

  const page = await browser.newPage();

  const consoleMessages = [];
  page.on('console', msg => {
    consoleMessages.push({ type: msg.type(), text: msg.text() });
  });
  page.on('pageerror', err => {
    consoleMessages.push({ type: 'pageerror', text: err.toString() });
  });

  await page.goto('file://' + HTML_FILE, { waitUntil: 'networkidle0', timeout: 60000 });

  await new Promise(r => setTimeout(r, 5000));

  const debug = await page.evaluate(() => {
    return {
      reactDefined: typeof window.React !== 'undefined',
      reactDOMDefined: typeof window.ReactDOM !== 'undefined',
      babelDefined: typeof window.Babel !== 'undefined',
      brandDefined: typeof window.BRAND !== 'undefined',
      emailShellDefined: typeof window.EmailShell !== 'undefined',
      rootContent: document.getElementById('root').innerHTML.substring(0, 200),
      scriptTags: document.querySelectorAll('script').length,
      babelScripts: document.querySelectorAll('script[type="text/babel"]').length,
    };
  });
  console.log('Debug info:', JSON.stringify(debug, null, 2));

  console.log('\nConsole messages:');
  consoleMessages.forEach(m => console.log('  [' + m.type + '] ' + m.text));

  await browser.close();
})();
