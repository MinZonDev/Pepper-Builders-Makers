import { chromium } from 'playwright';

const BASE = 'https://pepper-builders-makers.vercel.app';

const pages = [
  // VI pages
  { name: 'Blog VI',          url: `${BASE}/blog`,                                        captureId: '7e60fef8-00a5-47e5-b740-3be95e160ecd', lang: 'VI' },
  { name: 'Blog Detail VI',   url: `${BASE}/blog/xu-huong-thiet-ke-noi-that-2026`,        captureId: '25b9c238-1f49-4bd8-a2b2-0b7ecac2bb1c', lang: 'VI' },
  { name: 'Project Detail VI',url: `${BASE}/projects/bare-tan-dinh`,                      captureId: '92dcb53a-6c04-4e2a-bf25-5e58cbc7ff2c', lang: 'VI' },
  { name: 'Contact VI',       url: `${BASE}/contact`,                                     captureId: '86abb147-cf3e-4531-9635-ee4b54437822', lang: 'VI' },
  // EN pages
  { name: 'Blog EN',          url: `${BASE}/blog`,                                        captureId: 'dceaf544-ff35-41ad-89b8-58fc91967a8c', lang: 'EN' },
  { name: 'Blog Detail EN',   url: `${BASE}/blog/xu-huong-thiet-ke-noi-that-2026`,        captureId: '38d546c3-7ce6-4991-a571-b6e7c8ef35dd', lang: 'EN' },
  { name: 'Project Detail EN',url: `${BASE}/projects/bare-tan-dinh`,                      captureId: '787a2023-d29b-450d-9d6e-f14a88b79f1d', lang: 'EN' },
  { name: 'Contact EN',       url: `${BASE}/contact`,                                     captureId: '4decae58-4e07-457a-b1e9-f9632ac4cfd0', lang: 'EN' },
];

async function captureOne({ name, url, captureId, lang }) {
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

  if (lang === 'EN') {
    console.log(`[${name}] Switching to EN ...`);
    await page.click('button:has-text("EN")');
    await page.waitForTimeout(1500);
  }

  // Scroll through entire page to trigger lazy images and whileInView animations
  console.log(`[${name}] Scrolling ...`);
  await page.evaluate(async () => {
    const totalHeight = document.body.scrollHeight;
    const step = 400;
    for (let pos = 0; pos < totalHeight; pos += step) {
      window.scrollTo(0, pos);
      await new Promise(r => setTimeout(r, 120));
    }
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(2000);

  // Inject capture.js
  const r = await context.request.get('https://mcp.figma.com/mcp/html-to-design/capture.js');
  await page.evaluate((s) => {
    const el = document.createElement('script');
    el.textContent = s;
    document.head.appendChild(el);
  }, await r.text());
  await page.waitForTimeout(1500);

  console.log(`[${name}] Firing capture ...`);
  const endpoint = `https://mcp.figma.com/mcp/capture/${captureId}/submit`;
  await page.evaluate(({ id, ep }) => {
    window.figma.captureForDesign({ captureId: id, endpoint: ep, selector: 'body' });
  }, { id: captureId, ep: endpoint });

  await page.waitForTimeout(12000);
  console.log(`[${name}] Done.`);
  await browser.close();
  return { name, captureId };
}

async function main() {
  console.log('Batch recapture: 8 pages with scroll-through...\n');

  // 4 batches of 2 in parallel (avoid overloading)
  const batches = [
    pages.slice(0, 2),
    pages.slice(2, 4),
    pages.slice(4, 6),
    pages.slice(6, 8),
  ];

  const allResults = [];
  for (const batch of batches) {
    const results = await Promise.allSettled(batch.map(captureOne));
    allResults.push(...results);
  }

  console.log('\n--- Results ---');
  for (const r of allResults) {
    if (r.status === 'fulfilled') console.log(`OK  ${r.value.name}`);
    else console.log(`ERR ${r.reason?.message || r.reason}`);
  }
  console.log('All done.');
}

main().catch(console.error);
