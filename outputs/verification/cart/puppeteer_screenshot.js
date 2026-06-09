const puppeteer = require('puppeteer');
const path = require('path');

const RENDER = 'file:///root/projects/brightkidco/outputs/verification/cart/cart-02-e1-render.html';
const OUT = '/root/projects/brightkidco/outputs/verification/cart';

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
  });

  // 1. Full-page screenshot at 420px
  console.log('Taking full-page screenshot...');
  const page = await browser.newPage();
  await page.setViewport({ width: 420, height: 800 });
  await page.goto(RENDER, { waitUntil: 'networkidle0', timeout: 30000 });
  await new Promise(r => setTimeout(r, 3000)); // wait for fonts
  await page.screenshot({ path: `${OUT}/cart-02-e1-screenshot.png`, fullPage: true });
  console.log('Full-page screenshot saved');

  // 2. Above-fold (420x568)
  console.log('Taking above-fold screenshot...');
  await page.screenshot({
    path: `${OUT}/cart-02-e1-above-fold.png`,
    fullPage: false,
    clip: { x: 0, y: 0, width: 420, height: 568 }
  });
  console.log('Above-fold screenshot saved');

  // 3. Mobile at 320px
  console.log('Taking mobile screenshot...');
  const mobilePage = await browser.newPage();
  await mobilePage.setViewport({ width: 320, height: 800 });
  await mobilePage.goto(RENDER, { waitUntil: 'networkidle0', timeout: 30000 });
  await new Promise(r => setTimeout(r, 3000));
  await mobilePage.screenshot({ path: `${OUT}/cart-02-e1-mobile.png`, fullPage: true });
  console.log('Mobile screenshot saved');

  // 4. Console errors
  const errorPage = await browser.newPage();
  await errorPage.setViewport({ width: 420, height: 800 });
  const errors = [];
  errorPage.on('console', msg => {
    if (msg.type() === 'error') errors.push(msg.text());
  });
  errorPage.on('pageerror', err => errors.push(err.message));
  await errorPage.goto(RENDER, { waitUntil: 'networkidle0', timeout: 30000 });
  await new Promise(r => setTimeout(r, 2000));
  console.log(`Console errors: ${errors.length > 0 ? JSON.stringify(errors) : 'None'}`);

  // 5. Rendered width
  const width = await errorPage.evaluate(() => document.getElementById('root').offsetWidth);
  console.log(`Rendered width: ${width}px`);

  // 6. CTA button dimensions
  const cta = await errorPage.evaluate(() => {
    const links = document.querySelectorAll('a');
    for (const link of links) {
      if (link.textContent.includes('Check out when')) {
        const rect = link.getBoundingClientRect();
        return { width: rect.width, height: rect.height, text: link.textContent.trim() };
      }
    }
    return null;
  });
  console.log(`CTA button: ${JSON.stringify(cta)}`);

  // 7. Computed fonts
  const fonts = await errorPage.evaluate(() => {
    const h1 = document.querySelector('h1');
    const ps = document.querySelectorAll('p');
    const body = ps.length > 0 ? ps[0] : null;
    return {
      h1Font: h1 ? getComputedStyle(h1).fontFamily : 'N/A',
      bodyFont: body ? getComputedStyle(body).fontFamily : 'N/A',
    };
  });
  console.log(`Fonts: ${JSON.stringify(fonts)}`);

  // 8. Extract all text
  const text = await errorPage.evaluate(() => document.getElementById('root').innerText);
  require('fs').writeFileSync(`${OUT}/cart-02-e1-text.txt`, text);
  console.log('Text content extracted');

  // 9. Section background colors
  const colors = await errorPage.evaluate(() => {
    const root = document.getElementById('root');
    const sections = root.querySelectorAll('div[style]');
    const results = [];
    sections.forEach((el, i) => {
      const bg = getComputedStyle(el).backgroundColor;
      const text = (el.innerText || '').substring(0, 50).replace(/\n/g, ' ');
      if (text && bg !== 'rgba(0, 0, 0, 0)') {
        results.push({ bg, text });
      }
    });
    return results.slice(0, 15);
  });
  console.log(`Section colors: ${JSON.stringify(colors)}`);

  // 10. SVG count
  const svgCount = await errorPage.evaluate(() => document.querySelectorAll('svg').length);
  console.log(`SVG count: ${svgCount}`);

  await browser.close();
  console.log('Done!');
})();
