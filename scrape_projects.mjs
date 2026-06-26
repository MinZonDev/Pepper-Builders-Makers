import { chromium } from 'playwright';

const BASE = 'https://pepper.builders';

async function scrapeListing(page) {
  await page.goto(`${BASE}/projects.html`, { waitUntil: 'load', timeout: 30000 });
  await page.waitForTimeout(3000);
  // Scroll to trigger lazy loading for all project images
  await page.evaluate(async () => {
    const h = document.body.scrollHeight;
    for (let y = 0; y < h; y += 300) { window.scrollTo(0, y); await new Promise(r => setTimeout(r, 80)); }
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(2000);
  return page.evaluate(() => {
    const items = [...document.querySelectorAll('.project-item a')];
    return items.map(a => {
      const img = a.querySelector('img')?.src || '';
      const name = a.querySelector('p.mb-0')?.textContent?.trim() || '';
      const location = a.querySelector('p.location')?.textContent?.trim() || '';
      return { name, location, href: a.href, thumb: img };
    });
  });
}

async function scrapeProject(page, href) {
  await page.goto(href, { waitUntil: 'load', timeout: 30000 });
  await page.waitForTimeout(3000);
  // Scroll to load lazy images
  await page.evaluate(async () => {
    const h = document.body.scrollHeight;
    for (let y = 0; y < h; y += 300) { window.scrollTo(0, y); await new Promise(r => setTimeout(r, 80)); }
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(1500);

  return page.evaluate(() => {
    const imgs = [...new Set(
      [...document.querySelectorAll('img')]
        .map(i => i.src)
        .filter(s => s.includes('/assets/projects/') && !s.includes('logo'))
    )];
    const text = document.body.innerText;
    const getField = (label) => {
      const rx = new RegExp(label + '\\s*([^\\n]+)', 'i');
      const m = text.match(rx);
      return m ? m[1].trim() : '';
    };
    const name = document.querySelector('h2')?.textContent?.trim() || '';
    const year = getField('Year');
    const category = getField('Category');
    const location = getField('Location');
    const area = getField('Area');
    return { name, year, category, location, area, imgs };
  });
}

function slugify(str) {
  return str.toLowerCase()
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/đ/g, 'd').replace(/Đ/g, 'd')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function mapCategory(cat) {
  const c = (cat || '').toUpperCase();
  if (c.includes('RESIDENTIAL')) return 'Residential';
  if (c.includes('COMMERCIAL') || c.includes('RESTAURANT') || c.includes('BAR')) return 'Commercial';
  return 'Hospitality'; // default
}

async function main() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1440, height: 900 });

  console.log('Scraping project listing...');
  const listing = await scrapeListing(page);
  console.log(`Found ${listing.length} projects`);

  const projects = [];

  for (let i = 0; i < listing.length; i++) {
    const item = listing[i];
    console.log(`[${i + 1}/${listing.length}] ${item.name}`);
    try {
      const detail = await scrapeProject(page, item.href);
      const name = detail.name || item.name;
      const imgs = detail.imgs.length > 0 ? detail.imgs : [item.thumb].filter(Boolean);
      const cover = imgs[0] || '';
      const before = imgs[1] || imgs[0] || '';
      const gallery = imgs.slice(2).length > 0 ? imgs.slice(2) : imgs.slice(0, 3);

      projects.push({
        id: slugify(name),
        name,
        category: mapCategory(detail.category || item.href),
        location: { vi: detail.location || item.location, en: detail.location || item.location },
        year: detail.year || '',
        area: detail.area || '',
        img: cover,
        beforeImg: before,
        gallery,
        description: { vi: '', en: '' },
        client: '',
        scale: detail.area || '',
        services: { vi: 'Thiết kế & Thi công', en: 'Design & Build' },
      });
    } catch (err) {
      console.log(`  ERR: ${err.message}`);
      projects.push({ id: slugify(item.name), name: item.name, error: err.message });
    }
  }

  await browser.close();

  // Output as JSON
  const fs = await import('fs');
  fs.writeFileSync('scraped_projects.json', JSON.stringify(projects, null, 2));
  console.log(`\nDone. Saved ${projects.length} projects to scraped_projects.json`);
}

main().catch(console.error);
