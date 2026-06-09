#!/usr/bin/env python3
import asyncio
from playwright.async_api import async_playwright

RENDER = '/root/projects/brightkidco/outputs/verification/welcome/welcome-01-e6-l2-render.html'
OUT = '/root/projects/brightkidco/outputs/verification/welcome'

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(viewport={'width': 420, 'height': 800})
        errors = []
        page.on('console', lambda msg: errors.append(msg.text) if msg.type == 'error' else None)
        
        await page.goto(f'file://{RENDER}', wait_until='networkidle')
        await page.wait_for_timeout(3000)
        
        await page.screenshot(path=f'{OUT}/welcome-01-e6-l2-screenshot.png', full_page=True)
        print("Screenshot 1: full page")
        
        await page.set_viewport_size({'width': 420, 'height': 568})
        await page.wait_for_timeout(500)
        await page.screenshot(path=f'{OUT}/welcome-01-e6-l2-above-fold.png', full_page=False)
        print("Screenshot 2: above fold")
        
        await page.set_viewport_size({'width': 320, 'height': 800})
        await page.wait_for_timeout(500)
        await page.screenshot(path=f'{OUT}/welcome-01-e6-l2-mobile.png', full_page=True)
        print("Screenshot 3: mobile")

        await page.set_viewport_size({'width': 420, 'height': 800})
        await page.wait_for_timeout(500)

        data = await page.evaluate("""() => {
            const root = document.querySelector('#root > div');
            const w = root ? root.offsetWidth : 0;
            const h = root ? root.offsetHeight : 0;
            
            const h1 = document.querySelector('h1');
            const h1Font = h1 ? getComputedStyle(h1).fontFamily : 'N/A';
            const h1Style = h1 ? {
                fontSize: getComputedStyle(h1).fontSize,
                fontStyle: getComputedStyle(h1).fontStyle,
                fontWeight: getComputedStyle(h1).fontWeight
            } : null;
            
            const body = document.querySelector('p');
            const bodyFont = body ? getComputedStyle(body).fontFamily : 'N/A';
            
            const ctas = [];
            document.querySelectorAll('a').forEach(a => {
                const r = a.getBoundingClientRect();
                if (r.height > 30 && r.height < 200) {
                    ctas.push({
                        text: a.textContent.trim().substring(0, 50),
                        w: Math.round(r.width), h: Math.round(r.height),
                        bg: getComputedStyle(a).backgroundColor,
                        color: getComputedStyle(a).color
                    });
                }
            });
            
            const bgColors = new Set();
            document.querySelectorAll('div').forEach(d => {
                const bg = getComputedStyle(d).backgroundColor;
                if (bg && bg !== 'rgba(0, 0, 0, 0)' && bg !== 'rgb(255, 255, 255)')
                    bgColors.add(bg);
            });
            
            const fonts = new Set();
            document.querySelectorAll('h1, h2, h3, p').forEach(el => {
                fonts.add(getComputedStyle(el).fontFamily.split(',')[0].trim().replace(/['"]/g, ''));
            });
            
            const imgs = [];
            document.querySelectorAll('img').forEach(i => imgs.push({
                src: i.src.split('/').pop(), alt: i.alt, w: i.naturalWidth
            }));
            
            const sections = document.querySelectorAll('h1, h2').length;
            const allText = root ? root.textContent.substring(0, 800) : '';
            
            return {
                w, h, h1Font, h1Style, bodyFont, ctas,
                bgColors: [...bgColors], fonts: [...fonts],
                imgs, sections, allText
            };
        }""")
        
        print(f"\nWidth: {data['w']}px, Height: {data['h']}px")
        print(f"H1 font: {data['h1Font']}")
        print(f"H1 style: {data['h1Style']}")
        print(f"Body font: {data['bodyFont']}")
        print(f"Fonts used: {data['fonts']}")
        print(f"Sections (h1+h2): {data['sections']}")
        print(f"CTAs: {data['ctas']}")
        print(f"Bg colors: {data['bgColors'][:15]}")
        print(f"Images: {data['imgs']}")
        print(f"\nFirst 500 chars: {data['allText'][:500]}")
        
        if errors:
            print(f"\nConsole errors: {errors}")
        else:
            print("\nNo console errors.")
        
        await browser.close()

asyncio.run(main())
