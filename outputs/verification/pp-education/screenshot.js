const puppeteer = require('/root/.hermes/node/lib/node_modules/puppeteer-core');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: '/root/.cache/puppeteer/chrome/linux-149.0.7827.22/chrome-linux64/chrome',
    args: ['--no-sandbox', '--disable-gpu', '--disable-dev-shm-usage'],
    headless: 'new',
  });
  const outDir = '/root/projects/brightkidco/outputs/verification/pp-education';
  const fileUrl = `file://${outDir}/pped-11-d14-render.html`;

  // 1. Desktop 420px full page
  const page1 = await browser.newPage();
  await page1.setViewport({ width: 420, height: 800 });
  await page1.goto(fileUrl, { waitUntil: 'networkidle0', timeout: 30000 });
  await new Promise(r => setTimeout(r, 2000));
  await page1.screenshot({ path: `${outDir}/pped-11-d14-420-full.png`, fullPage: true });
  console.log('Desktop 420px full page done');

  // 2. Mobile 375px full page
  const page2 = await browser.newPage();
  await page2.setViewport({ width: 375, height: 812 });
  await page2.goto(fileUrl, { waitUntil: 'networkidle0', timeout: 30000 });
  await new Promise(r => setTimeout(r, 2000));
  await page2.screenshot({ path: `${outDir}/pped-11-d14-375-mobile.png`, fullPage: true });
  console.log('Mobile 375px done');

  // 3. Above-fold 420x568
  const page3 = await browser.newPage();
  await page3.setViewport({ width: 420, height: 568 });
  await page3.goto(fileUrl, { waitUntil: 'networkidle0', timeout: 30000 });
  await new Promise(r => setTimeout(r, 2000));
  await page3.screenshot({ path: `${outDir}/pped-11-d14-420x568-above-fold.png` });
  console.log('Above-fold 420x568 done');

  await browser.close();
  console.log('All screenshots complete');
})();
