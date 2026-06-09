const puppeteer = require('puppeteer-core');

(async () => {
  try {
    const browser = await puppeteer.connect({
      browserWSEndpoint: 'ws://127.0.0.1:9222/devtools/browser'
    });
    const page = await browser.newPage();
    await page.setViewport({ width: 420, height: 800 });
    
    const errors = [];
    page.on('console', msg => {
      if (msg.type() === 'error') errors.push(msg.text());
    });
    
    await page.goto('file:///root/projects/brightkidco/outputs/verification/welcome/welcome-01-e8-l1-render.html', { waitUntil: 'networkidle0' });
    await new Promise(r => setTimeout(r, 4000));
    
    // Full page screenshot
    await page.screenshot({ path: '/root/projects/brightkidco/outputs/verification/welcome/welcome-01-e8-l1-screenshot.png', fullPage: true });
    console.log('Saved: welcome-01-e8-l1-screenshot.png');
    
    // Above fold (420x568)
    await page.setViewport({ width: 420, height: 568 });
    await new Promise(r => setTimeout(r, 500));
    await page.screenshot({ path: '/root/projects/brightkidco/outputs/verification/welcome/welcome-01-e8-l1-above-fold.png', fullPage: false });
    console.log('Saved: welcome-01-e8-l1-above-fold.png');
    
    // Mobile (320px)
    await page.setViewport({ width: 320, height: 800 });
    await new Promise(r => setTimeout(r, 500));
    await page.screenshot({ path: '/root/projects/brightkidco/outputs/verification/welcome/welcome-01-e8-l1-mobile.png', fullPage: true });
    console.log('Saved: welcome-01-e8-l1-mobile.png');
    
    // Console errors
    console.log('Console errors: ' + errors.length);
    errors.forEach(e => console.log('  ERROR: ' + e));
    
    // Get rendered width
    const width = await page.evaluate(() => document.querySelector('#root').offsetWidth);
    console.log('Rendered width: ' + width + 'px');
    
    // Get CTA button dimensions
    const cta = await page.evaluate(() => {
      const btn = document.querySelector('.l1-cta-btn');
      if (!btn) return null;
      const rect = btn.getBoundingClientRect();
      const style = window.getComputedStyle(btn);
      return {
        width: rect.width,
        height: rect.height,
        background: style.backgroundColor,
        color: style.color,
        fontSize: style.fontSize,
        borderRadius: style.borderRadius,
      };
    });
    console.log('CTA button: ' + JSON.stringify(cta));
    
    // Get computed fonts
    const fonts = await page.evaluate(() => {
      const results = {};
      const selectors = [['h1', 'Hook heading'], ['p', 'Body text']];
      for (const [sel, label] of selectors) {
        const el = document.querySelector(sel);
        if (el) {
          const s = window.getComputedStyle(el);
          results[label] = {
            fontFamily: s.fontFamily,
            fontSize: s.fontSize,
            fontWeight: s.fontWeight,
            color: s.color,
            lineHeight: s.lineHeight,
          };
        }
      }
      return results;
    });
    console.log('Computed fonts: ' + JSON.stringify(fonts));
    
    // Get all unique colors
    const colors = await page.evaluate(() => {
      const allElements = document.querySelectorAll('#root *');
      const colors = new Set();
      for (const el of allElements) {
        const s = window.getComputedStyle(el);
        if (s.color) colors.add('color:' + s.color);
        if (s.backgroundColor && s.backgroundColor !== 'rgba(0, 0, 0, 0)') colors.add('bg:' + s.backgroundColor);
        if (s.borderColor && s.borderColor !== 'rgb(0, 0, 0)') colors.add('border:' + s.borderColor);
      }
      return [...colors].slice(0, 40);
    });
    console.log('Unique colors: ' + JSON.stringify(colors));
    
    // Get images
    const images = await page.evaluate(() => {
      const imgs = document.querySelectorAll('img');
      return Array.from(imgs).map(img => ({
        src: img.src,
        alt: img.alt,
        naturalWidth: img.naturalWidth,
        rendered: img.complete && img.naturalHeight !== 0,
      }));
    });
    console.log('Images: ' + JSON.stringify(images));
    
    await page.close();
    browser.disconnect();
    console.log('Done!');
  } catch (e) {
    console.error('Error: ' + e.message);
    process.exit(1);
  }
})();
