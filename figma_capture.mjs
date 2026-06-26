import { chromium } from 'playwright';

// EN pages — need to click the EN button after load
const pages = [
  {
    name: 'Home EN',
    url: 'https://pepper-builders-makers.vercel.app/',
    captureId: '68b17ce5-e8c3-4657-97f3-44de244b3918',
  },
  {
    name: 'Services EN',
    url: 'https://pepper-builders-makers.vercel.app/services',
    captureId: 'c4216a88-52b0-466b-862c-ddc1c36d61b1',
  },
  {
    name: 'About EN',
    url: 'https://pepper-builders-makers.vercel.app/about',
    captureId: '9357e492-c94d-418c-9a25-e7c245c71f74',
  },
  {
    name: 'Contact EN',
    url: 'https://pepper-builders-makers.vercel.app/contact',
    captureId: '8e29daa0-f417-46c1-bd65-cfc876fced4a',
  },
];

async function captureOne({ name, url, captureId }) {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();

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

  // Switch to EN language
  console.log(`[${name}] Switching to EN ...`);
  await page.click('button:has-text("EN")');
  await page.waitForTimeout(1500);

  // Inject capture.js
  const r = await context.request.get('https://mcp.figma.com/mcp/html-to-design/capture.js');
  await page.evaluate((s) => {
    const el = document.createElement('script');
    el.textContent = s;
    document.head.appendChild(el);
  }, await r.text());
  await page.waitForTimeout(1500);

  // Fire-and-forget capture
  console.log(`[${name}] Firing capture ...`);
  const endpoint = `https://mcp.figma.com/mcp/capture/${captureId}/submit`;
  await page.evaluate(({ id, ep }) => {
    window.figma.captureForDesign({ captureId: id, endpoint: ep, selector: 'body' });
  }, { id: captureId, ep: endpoint });

  await page.waitForTimeout(10000);
  console.log(`[${name}] Done.`);
  await browser.close();
  return { name, captureId };
}

async function main() {
  console.log('Capturing 4 EN pages at 1440x900...\n');

  // Batch 1: Home EN + Services EN
  const r1 = await Promise.allSettled(pages.slice(0, 2).map(captureOne));
  // Batch 2: About EN + Contact EN
  const r2 = await Promise.allSettled(pages.slice(2).map(captureOne));

  for (const r of [...r1, ...r2]) {
    if (r.status === 'fulfilled') console.log(`OK  ${r.value.name}`);
    else console.log(`ERR ${r.reason?.message || r.reason}`);
  }
  console.log('All done.');
}

main().catch(console.error);
