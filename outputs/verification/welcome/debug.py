import asyncio
from playwright.async_api import async_playwright

async def main():
    html_path = "/root/projects/brightkidco/outputs/verification/welcome/welcome-01-e6-gf-render.html"
    out_dir = "/root/projects/brightkidco/outputs/verification/welcome"

    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(viewport={"width": 420, "height": 800})

        errors = []
        logs = []
        page.on("console", lambda msg: logs.append(f"[{msg.type}] {msg.text}"))
        page.on("pageerror", lambda exc: errors.append(str(exc)))

        await page.goto(f"file://{html_path}", wait_until="networkidle")
        await page.wait_for_timeout(3000)

        root_html = await page.evaluate("document.getElementById('root')?.innerHTML?.substring(0, 500) || 'EMPTY'")
        print(f"Root innerHTML (first 500): {root_html}")
        print(f"Console logs ({len(logs)}):")
        for l in logs[:20]:
            print(f"  {l}")
        print(f"Page errors ({len(errors)}):")
        for e in errors[:10]:
            print(f"  {e}")

        await browser.close()

asyncio.run(main())
