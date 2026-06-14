# Tài liệu Bàn giao Thiết kế UI/UX
## Pepper Builders & Makers — Website

> **Phiên bản:** 1.0 | **Ngày:** 2026-06-14  
> **Thiết kế:** Figma | **Tech stack:** Next.js 15 · React · TypeScript · Tailwind CSS 4

---

## 1. Tổng quan dự án

| Mục | Nội dung |
|---|---|
| Tên dự án | Pepper Builders & Makers — Website |
| Ngôn ngữ | Song ngữ **VI / EN** (switcher trong header) |
| Thương hiệu | Thiết kế & thi công nội thất cao cấp |
| Tagline | *"You Dream It, We Build It."* |
| Địa chỉ | 19 Hoàng Sa, Phường Sài Gòn, TP.HCM |
| Hotline | (+84) 931 888 149 |
| Email | info@pepper.builders |
| Copyright | © 2026 Pepper Builders & Makers |

---

## 2. Figma Design File

| | |
|---|---|
| **File key** | `JmfYx6tMiP2wgvQ5fssC0W` |
| **Link** | `https://www.figma.com/design/JmfYx6tMiP2wgvQ5fssC0W` |

### Cấu trúc pages trong Figma

| Page | Nội dung |
|---|---|
| `Components` | Button, ServiceCard, ProjectCard, StatItem, Header (Transparent/Solid), Footer |
| `Pepper — Desktop (VI)` | 6 frames Desktop tiếng Việt — **có prototype** |
| `Pepper — Desktop (EN)` | 6 frames Desktop tiếng Anh — **có prototype** |
| `Pepper — Mobile (VI)` | 6 frames Mobile tiếng Việt — **có prototype** |
| `Pepper — Mobile (EN)` | 6 frames Mobile tiếng Anh — **có prototype** |
| `Pepper — Home` → `Pepper — Blog Detail` | Các trang VI riêng lẻ (source gốc) |
| `Pepper — Home (EN)` → `Pepper — Blog Detail (EN)` | Các trang EN riêng lẻ |
| `Pepper — 404` | Trang 404 |
| `Pepper — Loading Skeleton` | Trạng thái skeleton loading |

> **Chạy prototype:** Mở trang `Desktop (VI/EN)` hoặc `Mobile (VI/EN)` → chọn frame Home → nhấn **▶ Present** (`Ctrl+Alt+Enter`)

---

## 3. Typography

### Font families

| Tên | Source | Dùng cho |
|---|---|---|
| **Inter** | Google Fonts | Body, nav, label, button, số liệu |
| **Playfair Display** | Google Fonts | Heading lớn (H1, hero title, quote) |

```css
/* globals.css — đã import sẵn */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Inter:wght@300;400;500;600;700&display=swap');

--font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
--font-serif: "Playfair Display", Georgia, "Times New Roman", serif;
```

### Thang type scale (Tailwind defaults)

| Token | Size | Dùng cho |
|---|---|---|
| `text-xs` | 12px | Label nhỏ, overline, copyright |
| `text-sm` | 14px | Nav links, body nhỏ, caption |
| `text-base` | 16px | Body chính |
| `text-lg` | 18px | Body lớn |
| `text-xl` | 20px | Sub-heading nhỏ |
| `text-2xl` | 24px | Section heading |
| `text-3xl` | 30px | Heading trung |
| `text-4xl` | 36px | Heading lớn |
| `text-5xl` | 48px | Hero sub-heading |
| `text-6xl` | 60px | Hero heading mobile |
| `text-7xl` | 72px | Hero heading desktop |
| `text-9xl` | 96px+ | Số lớn (404 page) |

### Font weights

| Token | Weight | Dùng cho |
|---|---|---|
| `font-light` | 300 | Quote, process descriptions |
| `font-normal` | 400 | Body text |
| `font-medium` | 500 | Label, nav active |
| `font-semibold` | 600 | Nav active state |
| `font-bold` | 700 | Button, heading, overline, CTA |

### Letter spacing đặc biệt

```css
tracking-wide        /* 0.025em — nav links */
tracking-widest      /* 0.1em  — button CTA, overline labels */
tracking-tighter     /* -0.05em — hero heading */
tracking-tight       /* -0.025em — section heading */
```

---

## 4. Color System

### Màu chính

| Màu | Hex / Token | Dùng cho |
|---|---|---|
| **White** | `#ffffff` | Background trang, header solid |
| **Black** | `#000000` | Text chính, button primary, dark section |
| **Footer Dark** | `#0f1115` | Footer background, dark CTA section |

### Neutral palette (Tailwind)

| Token | Hex | Dùng cho |
|---|---|---|
| `neutral-50` | `#fafafa` | Form background, card background nhẹ |
| `neutral-100` | `#f5f5f5` | Placeholder, divider nhẹ |
| `neutral-200` | `#e5e5e5` | Border, divider, skeleton |
| `neutral-400` | `#a3a3a3` | Subtext, icon, overline |
| `neutral-500` | `#737373` | Nav link inactive, caption |
| `neutral-600` | `#525252` | Body text secondary |
| `neutral-700` | `#404040` | Text on dark (footer nav) |
| `neutral-800` | `#262626` | Button hover state |

### Màu trạng thái

| Trạng thái | Class | Hex |
|---|---|---|
| Destructive | `--destructive` | `#d4183d` |
| Border default | `--border` | `rgba(0,0,0,0.1)` |

---

## 5. Layout & Grid

### Desktop (≥ 768px)

```
Frame width:   1440px
Container:     mx-auto px-12  →  padding 48px mỗi bên
Max content:   1440 - 96 = 1344px
Grid:          grid-cols-12, gap-6 / gap-12
```

### Mobile (< 768px)

```
Frame width:   390px
Container:     mx-auto px-6  →  padding 24px mỗi bên
Max content:   390 - 48 = 342px
Grid:          grid-cols-1 (stack dọc)
```

### Breakpoints (Tailwind defaults)

| Prefix | Width | Ghi chú |
|---|---|---|
| _(default)_ | 0px+ | Mobile first |
| `md:` | 768px+ | Tablet/Desktop layout bật |
| `lg:` | 1024px+ | Layout 12-col đầy đủ |

---

## 6. Components

### 6.1 Header

**Hai trạng thái:**

| State | Khi nào | Background | Text/Logo |
|---|---|---|---|
| **Transparent** | Trang Home, chưa scroll | `bg-transparent` | Trắng (`text-white`) |
| **Solid** | Sau scroll > 20px, hoặc trang khác Home | `bg-white/95 backdrop-blur-md border-b border-neutral-200` | Đen |

**Cấu trúc Desktop:**
```
[Logo]    [Dịch vụ] [Dự án] [Về chúng tôi] [Blog] [Liên hệ]    [VI / EN]  [Nhận Tư Vấn →]
```

**Specs:**
- Height: `py-4` (scroll) / `py-6` (normal) → ~64–80px
- Logo: `h-10 md:h-14` (40px mobile / 56px desktop), `w-auto`, `brightness-0 invert` khi trên nền tối
- Nav links: `text-sm tracking-wide`, active = `font-semibold text-black`
- CTA button: `bg-black text-white text-xs font-bold uppercase tracking-widest px-6 py-3 rounded-none`
- Divider trước lang/CTA: `border-l pl-8`

**Mobile menu:**
- Trigger: hamburger icon (24px)
- Overlay: `bg-black/80 backdrop-blur-xl` full screen
- Nav: `text-2xl font-light`, gap-6
- CTA: `w-full bg-white text-black py-4 uppercase tracking-widest`
- Animation: `motion/react` — fade + slide Y

---

### 6.2 Footer

**Cấu trúc 4 cột (grid-cols-12):**

| Cột | md:col-span | Nội dung |
|---|---|---|
| Brand | 4 | Logo + Tagline + Social icons |
| Navigation | 2 | Giới thiệu, Dịch vụ, Dự án, Liên hệ |
| Services | 2 | Hospitality, Residential, Commercial |
| Contact | 3 | Địa chỉ, Hotline, Email |

**Specs:**
- Background: `bg-[#0f1115]`
- Padding: `pt-24 pb-12`
- Tagline font: `text-lg md:text-2xl font-serif text-white whitespace-pre-line`
- Section title: `text-[11px] font-bold tracking-[0.2em] uppercase text-neutral-500`
- Links: `text-neutral-400 hover:text-white text-sm transition-colors`
- Social icons: 32px / 40px desktop, border `border-neutral-700 hover:border-white`
- Divider bottom: `border-t border-neutral-800/80`
- Copyright: `text-xs text-neutral-500`
- Logo: `brightness-0 invert` (vì footer dark)

---

### 6.3 Button / CTA

**Primary (Black):**
```css
bg-black text-white px-10 py-5 font-medium uppercase tracking-widest
hover:bg-neutral-800 transition-all hover:scale-105
```

**Primary Transparent (Header):**
```css
/* Khi header transparent */
bg-white text-black hover:bg-neutral-200
```

**Ghost / Link:**
```css
text-sm font-medium border-b border-black pb-1
/* dùng cho các link phụ */
```

**Arrow button (Project card):**
```css
w-12 h-12 border border-neutral-300 flex items-center justify-center
hover:bg-black hover:text-white hover:border-black transition-all
```

---

### 6.4 ServiceCard

```
Width:  448px (desktop), full-width (mobile)
Height: 399px (auto)

[Category badge — uppercase, tracking-widest, text-xs]
[Heading — font-bold, text-xl]
[Description — text-neutral-500, leading-relaxed]
[Read more → — text-sm]
```

---

### 6.5 ProjectCard

```
Width:  560px (desktop), full-width (mobile)
Height: 496px

[Project Image — 100% width, object-cover]
[Category badge — bg-neutral/white, text-xs uppercase]
[Project name — font-bold, text-lg]
[Location · Year — text-sm text-neutral-500]
[→ arrow button — 48px, border, hover fill black]
```

---

### 6.6 StatItem

```
Width: 240px (desktop)

[Number — text-5xl md:text-6xl font-bold tracking-tighter]
[Label — text-sm uppercase tracking-widest text-neutral-500 font-medium]
```

---

## 7. Các trang (Pages)

### 7.1 Home (`/`)

**Sections theo thứ tự:**

| # | Section | Notes |
|---|---|---|
| 1 | **Hero** | Full viewport, ảnh nền tối, text trắng, header transparent |
| 2 | **ServiceCards** | 3 cards ngang (Hospitality, Residential, Commercial) |
| 3 | **Quy trình** | 3 bước ngang: Tư vấn → Thiết kế → Thi công |
| 4 | **Dự án tiêu biểu** | Filter tabs + 3 ProjectCards, nút "Xem tất cả" |
| 5 | **Stats** | 4 StatItems: 15+, 0, 98%, 100% |
| 6 | **Blog preview** | 2–3 bài mới nhất |
| 7 | **CTA section** | Dark bg, headline lớn + button → /contact |
| 8 | **Footer** | |

**Hero specs:**
- Min height: `h-screen`
- Background: ảnh + overlay tối
- H1: `font-serif font-bold text-5xl md:text-7xl lg:text-[7rem]` — tracking-tighter, uppercase
- Sub: `"You Dream It, We Build It"` — italic serif
- CTA button: Primary (white on dark)
- Scroll indicator: ↓

---

### 7.2 Services (`/services`)

| Section | Notes |
|---|---|
| Hero | H1 lớn, không ảnh hoặc ảnh phụ, bg-white |
| 3 service sections | Xen kẽ dark/light, mỗi section full-width |
| Process | 6 bước dọc |
| CTA | Dark bg |

---

### 7.3 About (`/about`)

| Section | Notes |
|---|---|
| Hero | Stacked text 4 dòng: alt màu neutral-400/black, font-bold uppercase |
| Full-width image | `h-[60vh] md:h-[80vh]` |
| Quote + paragraphs | 2 cột: quote left, body right |
| Stats | 4 StatItems |
| Core Values | Grid 2×2 (border-top per item) |
| Process | Dark bg, sticky heading + scrollable steps |
| CTA | |

**Hero text pattern:**
```
Kiến tạo    ← neutral-400
không gian. ← black, indent
Định hình   ← neutral-400
phong cách. ← black, indent
```

---

### 7.4 Projects (`/projects`)

| Section | Notes |
|---|---|
| Filter tabs | All / Hospitality / Residential / Commercial |
| Project grid | 3 cols desktop, 1 col mobile, masonry-style |
| Pagination / Load more | (nếu có) |

**Filter tab active:** `border-b-2 border-black font-semibold`  
**Filter tab inactive:** `text-neutral-400 hover:text-black`

---

### 7.5 Contact (`/contact`)

| Bên | Nội dung |
|---|---|
| **Left** | Heading + description + 4 info rows (địa chỉ/hotline/email/giờ làm việc) + Google Maps |
| **Right** | Form (bg-neutral-50, p-8 md:p-12) |

**Form fields:**
1. Họ tên * (text)
2. Email * (email) + Số điện thoại * (tel) — 2 cols
3. Loại dự án * (select: Nhà ở / BĐS cho thuê / Nhà hàng / Khách sạn / Văn phòng / Khác)
4. Ngân sách dự kiến (text)
5. Mô tả nhu cầu * (textarea, rows=5)
6. Submit: `bg-black text-white w-full py-4 uppercase tracking-wide`

**Success state:** Checkmark icon (32px) + "Cảm ơn bạn!" message

---

### 7.6 Blog (`/blog`)

| Section | Notes |
|---|---|
| Featured post | Ảnh lớn + category + title + excerpt + "Đọc thêm →" |
| Grid bài viết | 3 cols desktop, 1 col mobile |

---

### 7.7 404 (`/not-found`)

```
min-h-[80vh], centered
"404"          → text-9xl font-bold text-neutral-200
"Trang không tồn tại"  → text-2xl font-bold
Description    → text-neutral-500
[← Về trang chủ]  [Xem dự án]  → 2 buttons
```

---

### 7.8 Loading Skeleton

5 sections skeleton với `animate-pulse`:
- Hero: `h-screen bg-neutral-200`
- Services: 3 cards `h-64 bg-neutral-100`
- Projects: 3 cards
- Stats: 4 items
- Footer

---

## 8. Responsive Behavior

### Header

| | Mobile (< 768px) | Desktop (≥ 768px) |
|---|---|---|
| Logo | `h-10` (40px) | `h-14` (56px) |
| Nav | Ẩn, thay bằng hamburger | Hiển thị ngang |
| CTA button | Trong mobile menu | Luôn hiển thị |
| Lang switcher | Trong header bar (mobile) | Bên header desktop |

### Layout chuyển đổi chính

| Element | Mobile | Desktop |
|---|---|---|
| Container padding | `px-6` (24px) | `px-12` (48px) |
| Project grid | 1 cột | 3 cột |
| Service cards | Stack dọc | Ngang |
| Footer | 1 cột → 2 cột | 4 cột |
| Contact | 1 cột (stacked) | 2 cột 50/50 |
| About hero text | Không indent | Indent dần từng dòng |
| Stats | 2×2 | 4 ngang |
| Core values | 1 cột | 2×2 |

---

## 9. Interactions & Animations

> Framework: **Framer Motion** (`motion/react`)

### Page animations

| Element | Animation | Config |
|---|---|---|
| Hero H1 | Stagger children, fade + slide Y | `staggerChildren: 0.1`, `duration: 0.8` |
| Hero image | Scale in | `scale: 0.95→1`, `duration: 1.2, delay: 0.4` |
| Section elements (scroll) | Fade + slide Y | `whileInView`, `once: true, margin: -100px` |
| Stats items | Stagger 0.1s | `delay: i * 0.1` |
| Process steps | Slide X | `x: 20→0`, `duration: 0.6` |

### Header transitions

```js
// Scroll threshold: window.scrollY > 20
// Transition: CSS transition-all duration-300
// Solid: bg-white/95 backdrop-blur-md py-4 border-b
// Transparent: bg-transparent py-6
```

### Mobile menu

```js
initial: { opacity: 0, y: -20 }
animate: { opacity: 1, y: 0 }
exit:    { opacity: 0, y: -20 }
// AnimatePresence wraps conditional render
```

### Hover states

| Element | Effect |
|---|---|
| Nav links | `text-neutral-500 → text-black` |
| Core value items | `translateX(0 → 8px)` trên title |
| Process steps | Number color `text-neutral-700 → text-white` |
| CTA button | `scale-105` |
| Arrow button (ProjectCard) | `bg → bg-black text-white` |
| Social icons footer | `border-neutral-700 → border-white, text-neutral-400 → text-white` |

---

## 10. Assets

### Logo

| File | Kích thước | Tỉ lệ | Dùng cho |
|---|---|---|---|
| `src/imports/logo.png` | 2000×1000px | 2:1 | Header, Footer (code) |
| `src/imports/logo_pepper_builders___makers__1_.png` | (đang dùng trong code) | — | Đang import trong Header.tsx, Footer.tsx |

**CSS xử lý logo trên nền tối:**
```css
/* Dùng khi header transparent hoặc dark bg */
brightness-0 invert
```
→ Chuyển logo màu bất kỳ thành trắng.

**Kích thước logo hiển thị:**
- Header desktop: `h-14` (56px), `w-auto`
- Header mobile: `h-10` (40px), `w-auto`
- Footer: `h-10 md:h-12` (40–48px)

### Icons

- Library: **Lucide React** (`lucide-react`)
- Các icon đang dùng: `Facebook`, `Instagram`, `Linkedin`, `MapPin`, `Phone`, `Mail`, `Clock`, `ArrowRight`, `Menu`, `X`, `Check`, `ChevronDown`

### Images

Tất cả ảnh dự án/blog hiện đang dùng **Unsplash** placeholder. Khi bàn giao:
- Thay bằng ảnh thực tế của từng dự án
- Format: JPG/WebP, tối ưu < 500KB mỗi ảnh
- Aspect ratio phổ biến: 16:9 (project hero), 4:3 (blog), 3:2 (ServiceCard)

---

## 11. Fonts & Performance

```html
<!-- Đã có trong globals.css, cần thêm preconnect vào layout.tsx -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
```

---

## 12. Cấu trúc route

| URL | Component | Layout |
|---|---|---|
| `/` | `Home` | Header transparent |
| `/services` | `Services` | Header solid |
| `/about` | `About` | Header solid |
| `/projects` | `Projects` | Header solid |
| `/contact` | `Contact` | Header solid |
| `/blog` | `Blog` | Header solid |
| `/blog/[slug]` | `BlogDetail` | Header solid |
| `/projects/[slug]` | `ProjectDetail` | Header solid |
| `*` (404) | `not-found.tsx` | Header solid |

---

## 13. Checklist Bàn giao cho Dev

### Design System
- [ ] Import fonts đúng weights (Inter 300,400,500,600,700 — Playfair Display 400,500,600,700)
- [ ] Apply CSS custom properties (`globals.css` đã có)
- [ ] Verify màu footer `#0f1115` không bị override

### Header
- [ ] Scroll listener `> 20px` đổi state
- [ ] Route check: chỉ transparent trên `/`
- [ ] Logo `brightness-0 invert` khi `isTransparent` hoặc mobile menu mở
- [ ] Mobile menu: z-index đúng, đóng khi navigate

### Footer
- [ ] Logo `brightness-0 invert` (dark bg)
- [ ] Grid responsive: mobile 1 col → desktop 4 col
- [ ] Social links placeholder `href="#"` → cập nhật link thật

### Pages
- [ ] Tất cả trang có `pt-24` hoặc `pt-32` (bù header fixed 80px)
- [ ] `min-h-screen` trên Contact, 404
- [ ] `whiteSpace: pre-line` cho địa chỉ và tagline có `\n`

### Form (Contact)
- [ ] Validation required fields
- [ ] Select dropdown dùng Radix UI (`@radix-ui/react-select`) — đã cài
- [ ] Success state toggle `setSubmitted(true)` sau mock submit
- [ ] Thay setTimeout mock bằng API thật khi deploy

### Bilingual
- [ ] `useLanguage()` hook phủ tất cả text content
- [ ] Địa chỉ VI: `19 Hoàng Sa, Phường Sài Gòn, TP.HCM`
- [ ] Địa chỉ EN: `19 Hoang Sa, Sai Gon Ward, HCMC`

### Hình ảnh
- [ ] Thay toàn bộ Unsplash URLs bằng ảnh thật
- [ ] Logo path: verify `src/imports/logo.png` hoặc `logo_pepper_builders___makers__1_.png`
- [ ] `ImageWithFallback` component đã có sẵn → dùng thay `<img>` / `<Image>`

### SEO & Meta
- [ ] `<title>` mỗi trang: `[Tên trang] — Pepper Builders & Makers`
- [ ] `<meta description>` mỗi trang
- [ ] OG image
- [ ] `lang="vi"` / `lang="en"` theo ngôn ngữ active

### Animations
- [ ] Cài `motion/react` (đã có trong package.json)
- [ ] `viewport: { once: true }` để animation chỉ chạy 1 lần khi scroll vào
- [ ] Test performance mobile với nhiều animation

---

## 14. Liên hệ hỗ trợ

| | |
|---|---|
| File Figma | `JmfYx6tMiP2wgvQ5fssC0W` |
| Prototype Desktop VI | Trang `Pepper — Desktop (VI)` → Present |
| Prototype Mobile VI | Trang `Pepper — Mobile (VI)` → Present |
| Prototype Desktop EN | Trang `Pepper — Desktop (EN)` → Present |
| Prototype Mobile EN | Trang `Pepper — Mobile (EN)` → Present |

---

*Tài liệu này được tạo tự động dựa trên source code và Figma design của dự án Pepper Builders & Makers.*
