const { chromium } = require('playwright');

(async () => {
  try {
    console.log('Launching browser...');
    const browser = await chromium.launch({ headless: true });
    console.log('Browser launched');
    
    const page = await browser.newPage();
    console.log('Page created');
    
    // Load the HTML file
    await page.goto('file:///root/projects/brightkidco/outputs/verification/welcome/welcome-01-e7-l2-render-local.html', { waitUntil: 'networkidle' });
    console.log('Page loaded');
    
    // Wait for React to render
    await page.waitForTimeout(3000);
    
    // Take 375px mobile screenshot (full page)
    await page.setViewportSize({ width: 375, height: 800 });
    await page.waitForTimeout(1000);
    await page.screenshot({ 
      path: '/root/projects/brightkidco/outputs/verification/welcome/welcome-01-e7-l2-375-mobile.png',
      fullPage: true 
    });
    console.log('Saved: welcome-01-e7-l2-375-mobile.png');
    
    // Take 420px full screenshot (full page)
    await page.setViewportSize({ width: 420, height: 800 });
    await page.waitForTimeout(1000);
    await page.screenshot({ 
      path: '/root/projects/brightkidco/outputs/verification/welcome/welcome-01-e7-l2-420-full.png',
      fullPage: true 
    });
    console.log('Saved: welcome-01-e7-l2-420-full.png');
    
    // Take 420x568 above-fold screenshot (viewport only)
    await page.setViewportSize({ width: 420, height: 568 });
    await page.waitForTimeout(1000);
    await page.screenshot({ 
      path: '/root/projects/brightkidco/outputs/verification/welcome/welcome-01-e7-l2-420x568-above-fold.png',
      fullPage: false 
    });
    console.log('Saved: welcome-01-e7-l2-420x568-above-fold.png');
    
    await browser.close();
    console.log('All screenshots saved successfully');
    
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
})();
