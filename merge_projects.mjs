import { readFileSync, writeFileSync } from 'fs';

const scraped = JSON.parse(readFileSync('scraped_projects.json', 'utf8'));
const catMap = JSON.parse(readFileSync('category_map.json', 'utf8'));
const ts = readFileSync('src/data/projects.ts', 'utf8');

// Extract id + description block pairs using a simple state machine approach
function extractField(src, id, fieldName) {
  // Find the id, then find the next fieldName within that block
  const idIdx = src.indexOf(`id: '${id}'`);
  if (idIdx === -1) return null;
  // Find the next closing }  bracket that ends this project
  const nextId = src.indexOf("  {\n    id:", idIdx + 10);
  const block = nextId === -1 ? src.slice(idIdx) : src.slice(idIdx, nextId);
  const fieldRx = new RegExp(fieldName + `:\\s*\\{\\s*vi:\\s*'([^']*)'\\s*,\\s*en:\\s*'([^']*)'`);
  const m = block.match(fieldRx);
  return m ? { vi: m[1], en: m[2] } : null;
}

function viLocation(en) {
  return en
    .replace('District 1, Ho Chi Minh City', 'Quận 1, TP.HCM')
    .replace('District 2, Ho Chi Minh City', 'Quận 2, TP.HCM')
    .replace('District 6, Ho Chi Minh City', 'Quận 6, TP.HCM')
    .replace('District 7, Ho Chi Minh City', 'Quận 7, TP.HCM')
    .replace('District 9, Ho Chi Minh City', 'Quận 9, TP.HCM')
    .replace('District 11, Ho Chi Minh City', 'Quận 11, TP.HCM')
    .replace('Ho Chi Minh City', 'TP.HCM')
    .replace('HCMC', 'TP.HCM')
    .replace('Nhon Trach Town, Dong Nai Province', 'Thị trấn Nhơn Trạch, Đồng Nai')
    .replace('Son Tra District, Da Nang City', 'Quận Sơn Trà, Đà Nẵng')
    .replace('Nha Trang City', 'TP. Nha Trang')
    .replace('Da Nang', 'Đà Nẵng')
    .replace('Saigon Ward', 'Phường Sài Gòn')
    .replace('Hai Chau Ward', 'Phường Hải Châu')
    .replace('Binh Trung Ward, TP.HCM', 'Phường Bình Trưng Tây, TP.HCM')
    .replace('Sai Gon Ward, TP.HCM', 'Phường Sài Gòn, TP.HCM')
    .replace('Da Kao Ward, District 1,TP.HCM', 'Phường Đa Kao, Quận 1, TP.HCM');
}

function q(s) { return `'${s.replace(/'/g, "\\'")}'`; }
function qs(s) { return `"${s.replace(/"/g, '\\"').replace(/\n/g, '\\n')}"` }

const lines = [
  `export type Project = {`,
  `  id: string;`,
  `  name: string;`,
  `  category: 'Hospitality' | 'Residential' | 'Commercial';`,
  `  location: { vi: string; en: string };`,
  `  year: string;`,
  `  img: string;`,
  `  beforeImg: string;`,
  `  gallery: string[];`,
  `  description: { vi: string; en: string };`,
  `  client: string;`,
  `  scale: string;`,
  `  services: { vi: string; en: string };`,
  `  partner?: string;`,
  `  tagline?: { vi: string; en: string };`,
  `};`,
  ``,
  `export const allProjects: Project[] = [`,
];

let merged = 0, noDesc = 0;

scraped.forEach((p, i) => {
  const name = p.name.replace(/\s+/g, ' ').trim();
  const cat = catMap[name] || catMap[p.name] || p.category;
  const locEn = p.location.en;
  const locVi = viLocation(locEn);
  const gallery = p.gallery.length > 0 ? p.gallery : (p.img ? [p.img] : []);

  // Get description from current file
  const desc = extractField(ts, p.id, 'description');
  const svc = extractField(ts, p.id, 'services');
  const tagline = extractField(ts, p.id, 'tagline');

  if (desc) merged++; else noDesc++;

  const descVi = desc?.vi || '';
  const descEn = desc?.en || '';
  const svcVi = svc?.vi || 'Thiết kế & Thi công';
  const svcEn = svc?.en || 'Design & Build';

  const comma = i < scraped.length - 1 ? ',' : '';

  lines.push(`  {`);
  lines.push(`    id: '${p.id}',`);
  lines.push(`    name: '${name}',`);
  lines.push(`    category: '${cat}',`);
  lines.push(`    location: { vi: '${locVi}', en: '${locEn}' },`);
  lines.push(`    year: '${p.year}',`);
  lines.push(`    img: '${p.img}',`);
  lines.push(`    beforeImg: '${p.beforeImg}',`);
  lines.push(`    gallery: ${JSON.stringify(gallery)},`);
  lines.push(`    description: { vi: '${descVi.replace(/'/g, "\\'")}', en: '${descEn.replace(/'/g, "\\'")}' },`);
  lines.push(`    client: '',`);
  lines.push(`    scale: '${p.scale || p.area || ''}',`);
  lines.push(`    services: { vi: '${svcVi}', en: '${svcEn}' },`);
  if (tagline) {
    lines.push(`    tagline: { vi: '${tagline.vi.replace(/'/g, "\\'")}', en: '${tagline.en.replace(/'/g, "\\'")}' },`);
  }
  lines.push(`  }${comma}`);
});

lines.push(`];`);
lines.push(``);

const output = lines.join('\n');
writeFileSync('src/data/projects.ts', output, 'utf8');

console.log(`Done. Merged ${merged} descriptions, ${noDesc} without desc.`);
console.log(`Total projects: ${scraped.length}`);
