import { chromium } from 'playwright';

const pages = [
  {
    name: 'Services VI',
    url: 'https://pepper-builders-makers.vercel.app/services',
    captureId: 'f6ab0dd1-2dc0-4d0d-b9fc-38c7d760cb85',
    lang: 'VI',
  },
  {
    name: 'Services EN',
    url: 'https://pepper-builders-makers.vercel.app/services',
    captureId: 'cc2d7400-5a62-4e61-b097-755f1129109c',
    lang: 'EN',
  },
];

async function captureOne({ name, url, captureId, lang }) {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();

  // Remove CSP headers so capture.js can be injected
  await page.route('**/*', async (route) => {
    try {
      const response = await route.fetch();
      const headers = { ...response.headers() };
      delete headers['content-security-policy'];
      delete headers['content-security-policy-report-only'];
      await route.fulfill({ response, headers });
    } catch { await route.continue(); }
  });

  console.log(`[${name}] Loading ...`);
  await page.goto(url, { waitUntil: 'load', timeout: 45000 });
  await page.waitForTimeout(2000);

  // Switch language if needed
  if (lang === 'EN') {
    console.log(`[${name}] Switching to EN ...`);
    await page.click('button:has-text("EN")');
    await page.waitForTimeout(1500);
  }

  // Scroll through entire page to trigger all whileInView (framer-motion) animations
  console.log(`[${name}] Scrolling to trigger animations ...`);
  await page.evaluate(async () => {
    const totalHeight = document.body.scrollHeight;
    const step = 400;
    for (let pos = 0; pos < totalHeight; pos += step) {
      window.scrollTo(0, pos);
      await new Promise(r => setTimeout(r, 150));
    }
    // Scroll back to top so the capture starts from the beginning
    window.scrollTo(0, 0);
  });
  // Wait for all animations to settle after scroll
  await page.waitForTimeout(2000);

  // Inject capture.js
  const r = await context.request.get('https://mcp.figma.com/mcp/html-to-design/capture.js');
  await page.evaluate((s) => {
    const el = document.createElement('script');
    el.textContent = s;
    document.head.appendChild(el);
  }, await r.text());
  await page.waitForTimeout(1500);

  // Fire-and-forget capture (Promise never resolves — do NOT await)
  console.log(`[${name}] Firing capture ...`);
  const endpoint = `https://mcp.figma.com/mcp/capture/${captureId}/submit`;
  await page.evaluate(({ id, ep }) => {
    window.figma.captureForDesign({ captureId: id, endpoint: ep, selector: 'body' });
  }, { id: captureId, ep: endpoint });

  await page.waitForTimeout(12000); // Wait for upload to complete
  console.log(`[${name}] Done.`);
  await browser.close();
  return { name, captureId };
}

async function main() {
  console.log('Recapturing Services pages with scroll-through...\n');

  // Run both in parallel
  const results = await Promise.allSettled(pages.map(captureOne));

  for (const r of results) {
    if (r.status === 'fulfilled') console.log(`OK  ${r.value.name}`);
    else console.log(`ERR ${r.reason?.message || r.reason}`);
  }
  console.log('All done.');
}

main().catch(console.error);
