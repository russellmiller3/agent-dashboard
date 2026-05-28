const playwright_path = 'C:/Users/rmill/Desktop/programming/cast/.claude/worktrees/agent-a8c44f9a2558240c2/node_modules/playwright';
const { chromium } = require(playwright_path);
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 1600, height: 1100 } });
  const page = await ctx.newPage();
  await page.goto('http://127.0.0.1:9999/?demo&theme=light', { waitUntil: 'networkidle' });
  await page.waitForTimeout(500);
  const screenshot_path = path.resolve(__dirname, '..', 'screenshots', 'action-icons-fixed-2026-05-28.png');
  await page.screenshot({ path: screenshot_path, fullPage: true });
  console.log('saved', screenshot_path);
  await browser.close();
})().catch((err) => { console.error(err); process.exit(1); });
