const puppeteer = require('puppeteer');

const RENDER = 'file:///root/projects/brightkidco/outputs/verification/cart/cart-02-e1-render.html';

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 420, height: 800 });
  await page.goto(RENDER, { waitUntil: 'networkidle0', timeout: 30000 });
  await new Promise(r => setTimeout(r, 3000));

  // Sample 10 CSS values for contraption accuracy
  const css = await page.evaluate(() => {
    const root = document.getElementById('root');
    const results = {};

    // 1. Email background
    results.emailBg = getComputedStyle(root).backgroundColor;

    // 2. From name text color
    const fromName = root.querySelector('div > div > div');
    results.fromNameColor = fromName ? getComputedStyle(fromName).color : 'N/A';
    results.fromNameFont = fromName ? getComputedStyle(fromName).fontFamily : 'N/A';

    // 3. Eyebrow color and font
    const eyebrow = Array.from(root.querySelectorAll('div')).find(d => d.textContent.includes("YOUR CART'S STILL HERE"));
    results.eyebrowColor = eyebrow ? getComputedStyle(eyebrow).color : 'N/A';
    results.eyebrowFontSize = eyebrow ? getComputedStyle(eyebrow).fontSize : 'N/A';
    results.eyebrowTextTransform = eyebrow ? getComputedStyle(eyebrow).textTransform : 'N/A';

    // 4. H1 font and size
    const h1 = root.querySelector('h1');
    results.h1FontSize = h1 ? getComputedStyle(h1).fontSize : 'N/A';
    results.h1FontWeight = h1 ? getComputedStyle(h1).fontWeight : 'N/A';
    results.h1LineHeight = h1 ? getComputedStyle(h1).lineHeight : 'N/A';
    results.h1Color = h1 ? getComputedStyle(h1).color : 'N/A';

    // 5. CTA button
    const ctaLink = Array.from(root.querySelectorAll('a')).find(a => a.textContent.includes('Check out when'));
    if (ctaLink) {
      results.ctaBg = getComputedStyle(ctaLink).backgroundColor;
      results.ctaColor = getComputedStyle(ctaLink).color;
      results.ctaFontSize = getComputedStyle(ctaLink).fontSize;
      results.ctaFontWeight = getComputedStyle(ctaLink).fontWeight;
      results.ctaBorderRadius = getComputedStyle(ctaLink).borderRadius;
      results.ctaHeight = ctaLink.getBoundingClientRect().height;
      results.ctaWidth = ctaLink.getBoundingClientRect().width;
    }

    // 6. Testimonial card border
    const testimonialCards = root.querySelectorAll('div[style*="borderLeft"]');
    if (testimonialCards.length > 0) {
      results.testimonialBorderLeft = getComputedStyle(testimonialCards[0]).borderLeft;
      results.testimonialBorderRadius = getComputedStyle(testimonialCards[0]).borderRadius;
      results.testimonialBg = getComputedStyle(testimonialCards[0]).backgroundColor;
      results.testimonialPadding = getComputedStyle(testimonialCards[0]).padding;
    }

    // 7. Mechanism section - teal vertical line
    const mechanismSection = Array.from(root.querySelectorAll('div')).find(d => {
      const style = d.getAttribute('style') || '';
      return style.includes('position: absolute') && style.includes('rgba(43, 174, 180');
    });
    if (mechanismSection) {
      results.mechanismLineColor = getComputedStyle(mechanismSection).backgroundColor;
      results.mechanismLineWidth = getComputedStyle(mechanismSection).width;
    }

    // 8. Footer text
    const footerText = Array.from(root.querySelectorAll('div')).find(d => d.textContent.trim() === 'BrightKidCo');
    if (footerText) {
      results.footerColor = getComputedStyle(footerText).color;
      results.footerFontSize = getComputedStyle(footerText).fontSize;
    }

    // 9. Guarantee section
    const guaranteeText = Array.from(root.querySelectorAll('p')).find(p => p.textContent.includes('60 days to try it'));
    if (guaranteeText) {
      results.guaranteeFontWeight = getComputedStyle(guaranteeText).fontWeight;
      results.guaranteeFontSize = getComputedStyle(guaranteeText).fontSize;
    }

    // 10. Section count
    results.totalSections = root.querySelectorAll('h1, h2, h3').length;
    results.totalSVGs = root.querySelectorAll('svg').length;
    results.totalLinks = root.querySelectorAll('a').length;

    return results;
  });

  console.log(JSON.stringify(css, null, 2));
  await browser.close();
})();
