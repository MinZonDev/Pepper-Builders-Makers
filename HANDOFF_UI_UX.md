# Pepper Builders & Makers — Tài liệu Bàn giao UI/UX Frontend

> **Phiên bản:** 1.0 · **Ngày:** 25/06/2026  
> **Website tham chiếu:** https://pepper-builders-makers.vercel.app/  
> **Figma:** https://www.figma.com/design/JmfYx6tMiP2wgvQ5fssC0W/-UI-UX----Pepper-Builders---Makers?node-id=59-2&m=dev  
> **Dành cho:** Frontend Developer phía Khách hàng

---

## MỤC LỤC

1. [Design System](#1-design-system)
2. [Cấu trúc tổng thể & Layout](#2-cấu-trúc-tổng-thể--layout)
3. [Thành phần dùng chung — Header](#3-header)
4. [Thành phần dùng chung — Footer](#4-footer)
5. [Trang Chủ (Home)](#5-trang-chủ-home)
6. [Trang Dịch vụ (Services)](#6-trang-dịch-vụ-services)
7. [Trang Dự án (Projects)](#7-trang-dự-án-projects)
8. [Trang Chi tiết Dự án (Project Detail)](#8-trang-chi-tiết-dự-án-project-detail)
9. [Trang Giới thiệu (About)](#9-trang-giới-thiệu-about)
10. [Trang Blog (Blog List)](#10-trang-blog-blog-list)
11. [Trang Chi tiết Blog (Blog Detail)](#11-trang-chi-tiết-blog-blog-detail)
12. [Trang Liên hệ (Contact)](#12-trang-liên-hệ-contact)
13. [Trang 404 (Not Found)](#13-trang-404-not-found)
14. [Animations & Transitions tổng hợp](#14-animations--transitions-tổng-hợp)
15. [Nội dung — Bilingual (VI / EN)](#15-nội-dung--bilingual-vi--en)
16. [Hình ảnh & Media](#16-hình-ảnh--media)
17. [Lưu ý triển khai](#17-lưu-ý-triển-khai)

---

## 1. Design System

### 1.1 Màu sắc

| Token | Hex | Sử dụng |
|---|---|---|
| `--color-black` | `#111111` | Text chính, nền CTA, border active |
| `--color-white` | `#FFFFFF` | Nền trang, text trên nền tối |
| `--color-neutral-50` | `#F7F7F7` | Nền section phụ, nền form |
| `--color-neutral-100` | `#F5F5F5` | Nền ảnh placeholder |
| `--color-neutral-200` | `#E0E0E0` | Border, divider |
| `--color-neutral-400` | `#A0A0A0` | Icon, placeholder text |
| `--color-neutral-500` | `#555555` / `#737373` | Text phụ, caption |
| `--color-neutral-600` | `#404040` | Text body |
| `--color-neutral-900` | `#171717` | Hero overlay |
| `--color-footer-bg` | `#0f1115` | Nền Footer |

> **Không dùng màu accent nào khác.** Toàn bộ palette là **đen–trắng–xám**. Chỉ tương phản, không màu thương hiệu.

### 1.2 Typography

| Role | Font | Weight | Size (Desktop → Mobile) |
|---|---|---|---|
| Heading display | `IBM Plex Mono` | 400–700 | `text-7xl` → `text-4xl` |
| Heading section | `IBM Plex Mono` | 400 | `text-5xl` → `text-3xl` |
| Subheading / Label | `Inter` | 700 | `text-sm`, tracking-widest, uppercase |
| Body text | `Inter` | 300–400 | `text-base` / `text-lg` |
| Caption / Meta | `Inter` | 400 | `text-xs` / `text-sm` |
| Number / Step | `IBM Plex Mono` | 400 | `text-4xl`–`text-5xl` |

**Font loading:** Google Fonts (Next.js `next/font`). Subsets: `latin`, `vietnamese`.  
**Font variables:** `--font-inter`, `--font-ibm-plex-mono`.  
`font-sans` = Inter · `font-mono` = IBM Plex Mono.

### 1.3 Spacing & Layout

- **Container max-width:** không có max-width cố định riêng — dùng `container mx-auto`.
- **Padding ngang:** `px-6` (mobile 24px) → `md:px-12` (desktop 48px).
- **Section padding dọc:** `py-24` (96px) đến `py-32` (128px). Sections quan trọng: `py-48`.
- **Gap grid:** `gap-8` (32px) đến `gap-24` (96px) tùy context.

### 1.4 Border & Radius

- **Radius:** `rounded-none` — **không bo góc** ở bất kỳ đâu. Đây là điểm thiết kế cốt lõi.
- **Border:** `border border-[#E0E0E0]` hoặc `border-neutral-200`. Dùng phổ biến cho card, input, divider.

### 1.5 Nút bấm (Button Variants)

| Variant | Nền | Text | Border | Hover |
|---|---|---|---|---|
| Primary (CTA chính) | `#111111` | White | None | `bg-neutral-800` |
| Secondary (outline) | White | `#111111` | `#E0E0E0` | `bg-[#F7F7F7]` |
| Ghost Link | Transparent | `#111111` | none | underline |
| Hero CTA | Transparent | White | White (1px) | `bg-white text-black` |

**Padding chuẩn:** `px-8 py-4`. Tracking: `tracking-widest`. Text: `text-sm font-bold uppercase`.

### 1.6 Icon Library

Sử dụng **Lucide React**. Các icon đang dùng:
- `ArrowRight`, `ArrowLeft` — điều hướng, CTA
- `Menu`, `X` — mobile menu toggle
- `BedDouble`, `House`, `Store` — service icons (Homepage)
- `MapPin`, `Phone`, `Mail`, `Clock`, `MessageCircle` — Contact info
- `Facebook`, `Instagram`, `Linkedin` — social
- `ChevronDown` — accordion, select
- `MoveHorizontal` — before/after slider handle
- `Check` — form confirm

---

## 2. Cấu trúc tổng thể & Layout

### 2.1 Cấu trúc trang

```
<html>
  <body>
    <Header />       ← fixed top, z-50
    <main>
      <PageContent />
    </main>
    <Footer />
    <ScrollToTop />  ← floating button góc phải dưới
  </body>
</html>
```

### 2.2 Routing (7 trang)

| Route | Component |
|---|---|
| `/` | Home |
| `/services` | Services |
| `/projects` | Projects (filterable) |
| `/projects/[id]` | Project Detail |
| `/about` | About |
| `/blog` | Blog List |
| `/blog/[id]` | Blog Detail |
| `/contact` | Contact |

### 2.3 Language Context

Toàn site hỗ trợ **VI / EN** song ngữ. Context `LanguageContext` cung cấp `language` + `setLanguage`. Mặc định: `'VI'`. Switcher hiển thị ở cả Header desktop và mobile.

---

## 3. Header

### 3.1 Cấu trúc

```
<header fixed top-0 full-width z-50>
  <container>
    [Logo]        [Nav Links]    [Lang Switcher | CTA Button]
    [Logo]        [Lang Switcher | Hamburger]  ← Mobile
  </container>
</header>
```

### 3.2 Trạng thái

| Trạng thái | Điều kiện | Nền | Logo | Nav text |
|---|---|---|---|---|
| **Transparent** | Homepage + chưa scroll | `bg-transparent` | Trắng (inverted) | White/80 |
| **Scrolled** | scrollY > 20px | `bg-white/95 backdrop-blur-md` + `border-b` | Đen | neutral-500 |
| **Non-home** | Các trang khác | `bg-white` | Đen | neutral-500 |
| **Mobile menu open** | Menu mở | không thay đổi nền header | Trắng (inverted) | — |

**Transition:** `transition-all duration-300` khi chuyển trạng thái.  
**Padding dọc:** `py-6` → thu về `py-4` khi scroll.

### 3.3 Logo

- File: `logo.svg` (SVG, đặt tại `src/app/logo.svg`)
- Kích thước: `h-20 md:h-20` khi transparent → `h-14 md:h-14` khi scrolled
- Màu: White (CSS `brightness-0 invert`) khi trên nền tối; đen bình thường khi nền trắng.
- Animation: `transition-all duration-500 ease-out`

### 3.4 Nav Links (Desktop)

5 links: **Dịch vụ** · **Dự án** · **Về chúng tôi** · **Blog** · **Liên hệ**  
(EN: Services · Projects · About · Blog · Contact)

- Active: `font-semibold` + màu theo nền (white hoặc black)
- Hover: màu đầy đủ (từ mờ sang sáng)
- `text-sm tracking-wide`

### 3.5 CTA Button (Desktop)

- Text: **"Nhận Tư Vấn"** / "Get a Quote"
- Chỉ hiện sau khi scroll qua hero (isPastHero = scrollY > 80vh)
- Animation vào/ra: `opacity` + `x: 20 → 0`, duration 0.4s, ease `[0.22, 1, 0.36, 1]`
- Style: `bg-black text-white` (hoặc `bg-white text-black` khi transparent)
- Padding: `px-6 py-3`

### 3.6 Mobile Menu

- Trigger: Hamburger icon → X icon
- Overlay: `bg-black/80 backdrop-blur-xl` phủ full screen
- Animation: `opacity: 0, y: -20 → opacity: 1, y: 0` (Framer Motion AnimatePresence)
- Nav links: `text-2xl font-light`, màu neutral-400 → white khi active
- CTA button mobile: `w-full bg-white text-black py-4`
- Đóng khi: click link, thay đổi route, resize lên desktop

---

## 4. Footer

### 4.1 Cấu trúc

```
<footer bg-[#0f1115] text-white pt-24 pb-12>
  <container>
    <grid 12-col>
      [Col 1–4: Brand + Tagline + Socials]
      [Col 6–7: Navigation]
      [Col 8–10: Services]
      [Col 10–12: Contact]
    </grid>
    <divider />
    <copyright text-xs text-neutral-500 />
  </container>
</footer>
```

### 4.2 Cột Brand (col-span-4)

- Logo: `h-10 md:h-12`, `brightness-0 invert` (trắng trên nền tối)
- Tagline (font-mono): **"Kiến tạo không gian.\nTạo lập giá trị."** / "Create Spaces.\nCreate Value."
- Social icons: Facebook, Instagram, LinkedIn — border square 40px, hover border-white + text-white

### 4.3 Cột Navigation (col-span-2)

Header: `ĐIỀU HƯỚNG` / `NAVIGATION` (text-[11px] tracking-[0.2em] uppercase neutral-500)  
Links: Giới thiệu · Dịch vụ · Dự án · Liên hệ (text-sm neutral-400 → white hover)

### 4.4 Cột Services (col-span-2)

Header: `DỊCH VỤ` / `SERVICES`  
3 links: Công trình lưu trú & khai thác · Nhà ở Cá nhân hóa · Không gian Thương mại

### 4.5 Cột Contact (col-span-3)

Header: `LIÊN HỆ` / `CONTACT`
- Địa chỉ: 19 Hoàng Sa, Phường Sài Gòn, TP.HCM
- Phone: (+84) 931 888 149
- Email: info@pepper.builders

### 4.6 Bottom Bar

`© 2026 Pepper Builders & Makers. Bảo lưu mọi quyền.` — `border-t border-neutral-800/80 pt-8`

---

## 5. Trang Chủ (Home)

**URL:** `/`  
**Mô tả:** Landing page chính, gồm 6 sections active (Section 4 - thống kê đang bị ẩn `hidden`).

---

### Section 1 — Hero Slideshow

**Layout:** Full-viewport (`h-screen min-h-[100svh]`), `bg-neutral-900`

**Ảnh nền (Slideshow):**
- 5 ảnh từ Unsplash, tự động chuyển mỗi **5 giây** (setInterval)
- Filter: `grayscale` (đen trắng hoàn toàn)
- Opacity lớp ảnh: `0.6`

**Animation ảnh (Framer Motion AnimatePresence `mode="popLayout"`):**
```
initial:  { opacity: 0, scale: 1.05 }
animate:  { opacity: 0.6, scale: 1 }
exit:     { opacity: 0 }
duration: 1.5s, ease: easeInOut
```
> Ken Burns effect nhẹ — ảnh mới vào từ scale 1.05 thu về 1.

**Text layer (z-10, text-center, max-w-5xl):**

1. **Subtitle** (h1 tag vì SEO — nhưng style nhỏ):  
   `text-sm md:text-base font-light opacity-80`  
   VI: *"Cung cấp giải pháp thiết kế và thi công toàn diện..."*  
   EN: *"Comprehensive design & build for homes, hospitality..."*  
   Animation: `opacity 0→1, y 20→0`, duration 0.6s

2. **Slogan chính** (p tag):  
   `text-5xl md:text-7xl font-mono tracking-tight whitespace-pre-line`  
   VI: **"Kiến tạo không gian\nTạo lập giá trị"**  
   EN: **"Create Spaces\nCreate Value"**  
   Animation: `opacity 0→1, y 20→0`, delay 0.2s

3. **CTA Button:**  
   Border-only style, `px-8 py-4`, `tracking-widest uppercase`  
   VI: **"NHẬN TƯ VẤN DỰ ÁN"** · EN: "GET PROJECT CONSULTATION"  
   Hover: `bg-white text-[#111111]`  
   Animation: delay 0.4s

---

### Section 2 — Dịch vụ nổi bật

**Layout:** `py-24`, grid 3 cột đều (`grid-cols-3`), không gap (dùng border collapse `-ml-[1px] -mt-[1px]`)

**3 thẻ dịch vụ** (giống nhau về cấu trúc):

| # | Icon (Lucide) | Tiêu đề VI | Tiêu đề EN |
|---|---|---|---|
| 1 | `BedDouble` stroke-1 | Công trình lưu trú & khai thác cho thuê | Rental & Hospitality Properties |
| 2 | `House` stroke-1 | Nhà ở cá nhân hóa | Personalized Homes |
| 3 | `Store` stroke-1 | Không gian thương mại | Commercial Spaces |

**Mỗi thẻ:** `border border-[#E0E0E0] bg-white p-10 flex flex-col items-start`  
- Icon 24px, `mb-8`
- Title: `text-sm font-bold tracking-widest uppercase mb-4`
- Description: `text-[#555555] text-sm leading-relaxed flex-grow mb-8`
- Link "Xem dự án / View projects": `inline-flex items-center gap-2 text-sm font-bold hover:underline` + `ArrowRight` icon

> Hover state cho cả thẻ: không có. Chỉ link có underline hover.

---

### Section 3 — Dự án tiêu biểu

**Layout:** `py-24 border-t border-[#E0E0E0]`

**Header row:**
- Trái: H2 `text-3xl md:text-5xl font-mono` — "Dự án tiêu biểu" / "Featured Projects"
- Phải: 4 filter buttons (All / Rental & Hospitality / Personalized Homes / Commercial Spaces)

**Filter buttons:**
- `text-xs font-bold tracking-widest uppercase`
- Active: `text-[#111111] border-b-2 border-[#111111]`
- Inactive: `text-neutral-600 hover:text-[#111111]`

**Grid 2×2:**
- `grid-cols-2 gap-8`
- Hiển thị **4 dự án** đầu tiên sau khi lọc
- Animation (Framer Motion `layout` + `AnimatePresence`):
  ```
  initial: { opacity: 0, scale: 0.97 }
  animate: { opacity: 1, scale: 1 }
  exit:    { opacity: 0, scale: 0.97 }
  duration: 0.35s
  ```

**Mỗi project card:**
- Ảnh: `aspect-[4/3]`, `overflow-hidden`
- Ảnh filter: `grayscale` → `grayscale-0` + `scale-105` khi hover (`transition-all duration-700`)
- Overlay badge category: góc dưới-trái, `bg-black/70 backdrop-blur-sm text-white px-3 py-1.5 text-[10px] font-bold tracking-widest uppercase`
- Tên dự án: `text-lg md:text-xl font-mono`
- Meta: `text-xs text-neutral-500` — location · year
- Tagline: `text-sm text-[#555555] line-clamp-2`
- Arrow button: `w-10 h-10 border border-[#E0E0E0]` → hover: `border-[#111111] bg-[#111111] text-white`

**CTA:** "Xem tất cả dự án / View all projects" → `/projects`  
Style: `bg-[#111111] text-white px-8 py-4 uppercase tracking-widest`

---

### Section 4 — Số liệu (ẨN)

**Trạng thái:** `<section className="hidden">` — Ẩn hoàn toàn, không hiển thị.  
4 số: 15+ Năm kinh nghiệm · 0 Phát sinh CP · 98% Khách hài lòng · 100% Đúng tiến độ.  
> Nếu client muốn bật lại: bỏ class `hidden`.

---

### Section 5 — Tại sao chọn Pepper?

**Layout:** `py-32`, grid `lg:grid-cols-12`

- Trái (col-span-5): H2 `text-4xl md:text-6xl font-mono` — "Tại sao chọn Pepper?" / "Why choose Pepper?"
- Phải (col-span-7): 4 điểm trong `grid-cols-2 gap-x-12 gap-y-16`

**4 điểm mạnh:**

| # | VI | EN |
|---|---|---|
| 01 | Kinh nghiệm từ công trình đã đi vào sử dụng thực tế | Experience from real-world projects |
| 02 | Hiểu giá trị từ phía chủ đầu tư | Understanding investor value |
| 03 | Trung thực giữa thiết kế và thi công | Integrity across design and construction |
| 04 | Đồng hành sau bàn giao | Post-handover partnership |

**Mỗi điểm:** Số `text-sm font-bold text-[#555555] mb-4` + Title `text-xl font-bold mb-3` + Desc `text-sm text-[#555555] leading-relaxed`

> Không có animation riêng ở section này (chỉ static render).

---

### Section 6 — CTA Bottom

**Layout:** `bg-[#F7F7F7] border-t border-[#E0E0E0] py-32 px-6`  
Grid: `lg:grid-cols-2 gap-12 items-center`

- Trái: H2 `text-3xl md:text-5xl font-mono whitespace-pre-line`  
  VI: **"Cùng trao đổi về\ndự án của bạn"** · EN: "Have a project\nin mind?"
- Phải: 2 nút `flex-col sm:flex-row lg:justify-end gap-4`
  - Primary: "Liên hệ ngay" → `/contact` — `bg-[#111111] text-white`
  - Secondary: "Xem các công trình" → `/projects` — `bg-white border border-[#E0E0E0]`

---

## 6. Trang Dịch vụ (Services)

**URL:** `/services`  
**Header offset:** `pt-20 md:pt-28`

---

### Section 1 — Editorial Hero

**Layout:** `py-24 md:py-32 border-b border-neutral-100`  
Grid: `lg:grid-cols-12`

- Trái (col-span-8): H1 `text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight`  
  VI: **"Ba Nhóm Công Trình Chính"** · EN: "Our Services"
- Phải (col-span-4): Divider `w-12 h-[2px] bg-black mb-6` + mô tả `text-lg md:text-xl font-light`

**Animation (stagger vào khi mount):**
```
staggerChildren: 0.1s
fadeUp: opacity 0→1, y 40→0, duration 0.8s, ease [0.16, 1, 0.3, 1]
```

---

### Section 2–4 — 3 Dịch vụ (alternating layout)

Mỗi service chiếm `min-h-screen`, có `id` anchor (`#Hospitality`, `#Residential`, `#Commercial`).

| # | ID | VI Title | EN Title | Layout |
|---|---|---|---|---|
| 01 | Hospitality | CÔNG TRÌNH LƯU TRÚ & KHAI THÁC CHO THUÊ | RENTAL & HOSPITALITY PROPERTIES | Ảnh phải |
| 02 | Residential | NHÀ Ở CÁ NHÂN HÓA | PERSONALIZED HOMES | Ảnh trái |
| 03 | Commercial | KHÔNG GIAN THƯƠNG MẠI | COMMERCIAL SPACES | Ảnh phải |

**Mỗi service block:**
- Meta label: `/01` + `text-xs tracking-widest text-neutral-500 uppercase` (loại công trình)
- H2: `text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight`
- Body: `text-neutral-600 text-base md:text-lg font-light leading-relaxed mb-8`
- CTA link: underline style + `ArrowRight` hover translate-x-1
- Ảnh: `aspect-[4/3]`, hover `scale-105 duration-1000`
- Animation: `whileInView`, `once: true`, margin `-100px`

---

### Section 5 — Quy trình làm việc (Process)

**Layout:** `py-24 md:py-32 bg-black text-white`  
**2 cột:** Sticky header trái (1/3) + Steps phải (2/3)

**H2:** "Quy trình làm việc" / "Working Process" — `text-4xl md:text-5xl font-bold uppercase`

**6 bước:**

| # | VI | EN |
|---|---|---|
| 01 | Tiếp nhận dự án & làm rõ mục tiêu sử dụng/khai thác | Project Intake & Clarify Usage Goals |
| 02 | Định hình giải pháp & ngân sách dự án | Define Solution & Project Budget |
| 03 | Ký kết hợp đồng & khởi động dự án | Sign Contract & Launch Project |
| 04 | Phát triển thiết kế và lập kế hoạch triển khai | Develop Design & Implementation Plan |
| 05 | Thi công đồng bộ và hoàn thiện công trình | Integrated Construction & Delivery |
| 06 | Bàn giao & đồng hành về sau | Handover & Ongoing Support |

**Mỗi bước:** Số lớn `text-4xl md:text-5xl font-mono text-neutral-700` + `group-hover:text-white transition-colors 500ms`  
Animation: `opacity 0→1, x 20→0`, `whileInView once`, duration 0.6s

---

### Section 6 — FAQ

**Layout:** `py-24 md:py-32 bg-neutral-50`  
Grid: `lg:grid-cols-12`

- Trái (col-span-4): H2 + mô tả + CTA button "Gửi câu hỏi cho Pepper"
- Phải (col-span-8): **Accordion** (Radix UI `Accordion.Root type="single" collapsible`)

**5 câu hỏi FAQ** (xem nội dung đầy đủ tại [Section 15](#15-nội-dung--bilingual-vi--en))

**Accordion item:**
- Trigger: `py-6 md:py-8 flex justify-between items-center`
- Question: `text-lg md:text-xl font-medium`
- Icon: `ChevronDown` trong border-square 40px, rotate 180° khi open (CSS `[data-state=open]`)
- Content animation: `data-[state=open]:slide-in-from-top-2`, fade + slide, duration 300ms
- Border: `border-b border-neutral-300`, last item không có border

---

### Section 7 — CTA Bottom

**Layout:** `py-24 md:py-32 bg-black text-white text-center`  
H2: `text-3xl md:text-5xl font-bold uppercase`  
VI: **"BẮT ĐẦU BẰNG MỘT CUỘC TRAO ĐỔI"** · EN: "START WITH A CONVERSATION"  
Button: `bg-white text-black px-10 py-5 uppercase tracking-widest` → `/contact`  
Animation: `whileInView once`, fadeUp

---

## 7. Trang Dự án (Projects)

**URL:** `/projects`  
**Header offset:** `pt-32`

### 7.1 Page Header

H1: `text-4xl md:text-5xl font-bold tracking-tight uppercase`  
VI: **"Công trình đã thực hiện"** · EN: "Our Projects"

### 7.2 Filter Tabs

4 tab: **All** · **Rental & Hospitality Properties** · **Personalized Homes** · **Commercial Spaces**

- Layout: `flex flex-wrap gap-8 mb-12 border-b border-neutral-200`
- Tab: `pb-4 text-sm font-medium tracking-wide`
- Active indicator: `<motion.div layoutId="activeTab">` — animated underline `h-[2px] bg-black absolute bottom-[-1px]`
- Nhận filter qua URL param: `?category=Hospitality` (dùng `useSearchParams`)

### 7.3 Project Grid

`grid-cols-2 gap-8 md:gap-12`  
Tổng cộng **33 dự án** trong data.

**Animation (Framer Motion `layout` + `AnimatePresence`):**
```
initial: { opacity: 0, scale: 0.95 }
animate: { opacity: 1, scale: 1 }
exit:    { opacity: 0, scale: 0.95 }
duration: 0.3s
```

**Mỗi project card:**
- Ảnh: `aspect-[4/3] overflow-hidden bg-neutral-100` → hover `scale-105 duration-700`
- Tên: `text-xl md:text-2xl font-bold uppercase` → hover `text-neutral-600`
- Location: `text-sm text-neutral-500`
- Category badge: `text-sm tracking-widest uppercase text-neutral-600` (góc phải)

---

## 8. Trang Chi tiết Dự án (Project Detail)

**URL:** `/projects/[id]`  
**Header offset:** `pt-32`

### 8.1 Back Button

`← Dự án / Projects` — `text-sm text-neutral-500 hover:text-black mb-12`

### 8.2 Title

H1: `text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight uppercase`

### 8.3 Hero Image

`w-full h-[40vh] md:h-[60vh] object-cover bg-neutral-100`

### 8.4 Info + Description (2 cột)

Grid: `lg:grid-cols-12 gap-16 lg:gap-24`

**Trái (col-span-5) — Details Table:**

| Label | Value |
|---|---|
| Client | tên client |
| Scope of Work | services (bilingual) |
| Partner | tên partner (default: "Design by O9") |
| Completion Year | năm |
| Location | địa điểm (bilingual) |
| Area | diện tích (m²) |

Style: `border-t border-b border-neutral-200` cho mỗi row, `py-5`, label: `text-neutral-500 w-1/3`, value: `font-medium w-2/3 text-right`

**Phải (col-span-7) — Description:**  
`text-xl md:text-2xl text-neutral-800 leading-relaxed font-light`

### 8.5 Before & After Slider

**Layout:** `aspect-[4/3] md:aspect-[21/9]`, `cursor-ew-resize`

**Cơ chế:**
- State `sliderPos` (0–100, default 50)
- Sự kiện: `onMouseMove` + `onTouchMove` — tính `clipPath` theo vị trí cursor
- Ảnh "Before" (trái): `clipPath: polygon(0 0, X% 0, X% 100%, 0 100%)`, có `grayscale-[50%]`
- Ảnh "After" (phải): full width bên dưới
- Slider line: `w-1 bg-white absolute`, vị trí động
- Handle: `w-12 h-12 bg-white text-black` chứa icon `MoveHorizontal`
- Labels: góc trên-trái "From Asset", góc trên-phải "to Experience" — `bg-black/60 backdrop-blur-sm text-white uppercase tracking-widest`

### 8.6 Gallery Grid

Pattern layout: item số 0, 3, 6... → `md:col-span-2` (full width). Các item còn lại: half.  
`min-h-[300px] max-h-[70vh] object-cover`

### 8.7 CTA Section

`border-t py-24 text-center`  
VI: "Bạn có dự án tương tự?" · EN: "Have a similar project?"  
Button → `/contact`

### 8.8 Prev / Next Navigation

`flex flex-col md:flex-row w-full h-[30vh] md:h-[40vh]`

Mỗi phần (prev/next) là full-bleed image với overlay text:
- Ảnh: `opacity-50` → `opacity-70` hover, `scale-105` hover, `duration-1000`
- Text: tên dự án lớn + label "Previous"/"Next"
- Hover animation: `translate-x-4` (prev) / `-translate-x-4` (next) trên text, duration 500ms

---

## 9. Trang Giới thiệu (About)

**URL:** `/about`

### 9.1 Hero — Split Screen

**Layout:** Full viewport trừ header (`h-[calc(100vh-var(--header-offset,8rem))]`), `mt-[var(--header-offset,8rem)]`  
**2 cột ngang:**

**Trái (lg:w-1/2):** Ảnh full height  
Animation: `opacity 0→1`, duration 1.2s, ease `[0.22, 1, 0.36, 1]`

**Phải (lg:w-1/2):** Centered text  
- H1: `text-4xl md:text-6xl font-mono` — "Về chúng tôi" / "About Us"
- Intro text: `text-lg md:text-xl text-neutral-600 font-light whitespace-pre-line`  
  VI: *"Pepper là một tổ chức thiết kế và thi công..."*

Animation (stagger): `staggerChildren: 0.14s`, fadeInUp `y: 24→0, duration 0.7s`

### 9.2 Phương pháp làm việc

**Layout:** `py-24 md:py-32`  
H2: `text-3xl md:text-5xl font-bold uppercase` — "PHƯƠNG PHÁP LÀM VIỆC CỦA PEPPER"

Grid `grid-cols-2 gap-x-12 gap-y-16`:

| # | VI | EN |
|---|---|---|
| 01 | Bắt đầu từ cách công trình sẽ được sử dụng | Start from how the building will be used |
| 02 | Thiết kế và thi công được phát triển cùng nhau | Design and construction developed in parallel |
| 03 | Ưu tiên giá trị sử dụng dài hạn | Prioritize long-term operational value |
| 04 | Mỗi quyết định đều có lý do | Every decision has a reason |

**Mỗi item:** `border-t border-neutral-200 pt-8`  
- Số: `text-sm font-mono text-neutral-400 mb-4`
- Tiêu đề: `text-xl md:text-2xl font-bold mb-4 group-hover:translate-x-2 transition-transform duration-300` ← hover slide right
- Mô tả: `text-neutral-500 leading-relaxed`
- Animation: `whileInView once`, fadeInUp

### 9.3 Kinh nghiệm (Dark Section)

**Layout:** `py-24 md:py-32 bg-black text-white`  
Grid: `lg:grid-cols-12`

- Trái (col-span-5): H2 uppercase bold — "KINH NGHIỆM ĐƯỢC HÌNH THÀNH TỪ THỰC TẾ"
- Phải (col-span-7): Đoạn văn `text-lg md:text-xl text-neutral-300 font-light leading-relaxed`

### 9.4 CTA Big

**Layout:** `py-32 md:py-48 text-center`  
H2: `text-4xl md:text-6xl font-bold tracking-tight max-w-3xl mx-auto`  
VI: **"MỖI DỰ ÁN ĐỀU BẮT ĐẦU TỪ NHỮNG CÂU HỎI ĐÚNG!"**  
Button: `bg-black text-white px-10 py-5 hover:scale-105` → `/contact`  
Animation: `whileInView once`, fadeInUp

---

## 10. Trang Blog (Blog List)

**URL:** `/blog`  
**Header offset:** `pt-32`

### 10.1 Header

H1: `text-4xl md:text-5xl font-bold uppercase` — "Blog & Góc nhìn" / "Blog & Perspectives"  
Subtitle: `text-lg text-neutral-600 max-w-2xl mb-16`

### 10.2 Featured Post (bài đầu tiên)

Layout: `grid-cols-2 items-center bg-neutral-50 hover:bg-neutral-100`  
- Ảnh trái: `h-[35vh] lg:h-[50vh]`, hover `scale-105 duration-700`
- Content phải: `p-8 lg:p-12`
  - Meta: category (uppercase bold) + dấu `•` + date với Clock icon
  - Tiêu đề: `text-3xl lg:text-4xl font-bold leading-tight`
  - Excerpt: `text-lg font-light leading-relaxed`
  - Link "Đọc bài viết / Read article": underline style + `ArrowRight`

### 10.3 Grid Posts (từ bài thứ 2 trở đi)

`grid-cols-3 gap-12`

Mỗi card:
- Ảnh: `aspect-[4/3]`, hover `scale-105 duration-700`
- Category badge + date
- Tiêu đề: `text-2xl font-bold line-clamp-2`
- Excerpt: `text-sm font-light line-clamp-3`

---

## 11. Trang Chi tiết Blog (Blog Detail)

**URL:** `/blog/[id]`  
**Header offset:** `pt-32`

### 11.1 Cấu trúc

1. Back button `← Blog`
2. Header (centered, max-w-4xl):
   - Meta: category + date
   - H1: `text-4xl md:text-5xl lg:text-6xl font-bold leading-tight`
3. Hero image: `h-[40vh] md:h-[55vh] object-cover max-w-5xl mx-auto`
4. Content (max-w-3xl mx-auto):
   - Render markdown đơn giản: `\n\n` → thẻ `<p>`, `**text**` → `<strong>`
   - Typography: `text-lg md:text-xl text-neutral-700 font-light leading-relaxed mb-6`
5. Bottom bar: back link + share (Facebook, LinkedIn, X)
6. Related Posts: `bg-neutral-50 py-24`, 2 bài dạng thumbnail + text ngang

---

## 12. Trang Liên hệ (Contact)

**URL:** `/contact`  
**Header offset:** `pt-32`

**Layout:** `grid-cols-2 gap-16 lg:gap-24`

---

### Cột trái — Thông tin

H1: `text-4xl md:text-5xl font-bold` — "TRAO ĐỔI VỀ DỰ ÁN CỦA BẠN" / "LET'S TALK ABOUT YOUR PROJECT"  
Intro: `text-lg text-neutral-600 leading-relaxed mb-12`

**Contact info items** (icon + label + value):
- MapPin: Trụ sở chính / Headquarters — "19 Hoàng Sa, Phường Sài Gòn, TP.HCM"
- Phone: Hotline — "(+84) 931 888 149" (link `tel:`)
- Mail: Email — "info@pepper.builders" (link `mailto:`)
- Clock: Giờ làm việc / Working Hours — "T2-T6: 8:30-17:30"

**Social row:** 4 icons 40px (Zalo, Facebook, Instagram, LinkedIn) — border-square hover border-black

**Map:** Static image `/map.png` → link ra Google Maps

---

### Cột phải — Form

`bg-neutral-50 p-8 md:p-12`  
H2: "Gửi yêu cầu tư vấn" / "Send a consultation request"

**Form fields:**
1. Họ tên / Full Name — `input[type=text] required`
2. Email — `input[type=email] required`
3. Số điện thoại — `input[type=tel] required` (cùng row với email)
4. Loại dự án — Radix UI `Select` dropdown  
   VI options: Nhà ở · BĐS cho thuê · Nhà hàng · Khách sạn · Văn phòng · Khác  
   EN options: Residential · Rental Property · Restaurant · Hotel · Office · Other
5. Ngân sách dự kiến — `input[type=text]` (optional)
6. Mô tả nhu cầu — `textarea rows=5 required`
7. Submit button: `w-full bg-black text-white py-4` — disabled với opacity-70 khi đang gửi

**Input style:** `px-4 py-3 bg-white border border-neutral-200 focus:border-black focus:outline-none`  
**Radix Select style:** Trigger giống input. Dropdown: `bg-white border border-neutral-200 z-50`. Item hover: `bg-neutral-50`. Check icon khi selected.

**Sau submit thành công:**  
Thay form bằng Success state:
- Icon: `w-16 h-16 bg-black text-white flex items-center justify-center` + Check icon
- H3: "Cảm ơn bạn!" / "Thank you!"
- Mô tả xác nhận
- Link "Gửi yêu cầu khác" → reset state

---

## 13. Trang 404 (Not Found)

**File:** `src/app/not-found.tsx`  
Centered, full screen. Nút quay về trang chủ.

---

## 14. Animations & Transitions tổng hợp

### 14.1 Thư viện

**Framer Motion** (`motion/react`). Các pattern chính:

### 14.2 Fade In Up (Pattern dùng nhiều nhất)

```js
const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
}
// Dùng: initial="hidden" whileInView="visible" viewport={{ once: true }}
```

Biến thể nặng hơn (Services page):
```js
{ opacity: 0, y: 40 } → { opacity: 1, y: 0, duration: 0.8, ease: [0.16, 1, 0.3, 1] }
```

### 14.3 Stagger Children

```js
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
}
```

### 14.4 Hero Image Slideshow

```js
initial:  { opacity: 0, scale: 1.05 }
animate:  { opacity: 0.6, scale: 1 }
exit:     { opacity: 0 }
transition: { duration: 1.5, ease: "easeInOut" }
```

### 14.5 Hero Text Entry

```js
initial: { opacity: 0, y: 20 }
animate: { opacity: 1, y: 0 }
transition: { duration: 0.6, delay: 0 / 0.2 / 0.4 }
```

### 14.6 Project Card Filter

```js
layout  // Framer layout animation
initial: { opacity: 0, scale: 0.97 }
animate: { opacity: 1, scale: 1 }
exit:    { opacity: 0, scale: 0.97 }
transition: { duration: 0.35 }
```

### 14.7 CTA Button Slide-in (Header)

```js
animate: {
  opacity: isHidden ? 0 : 1,
  x: isHidden ? 20 : 0,
  pointerEvents: isHidden ? 'none' : 'auto'
}
transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
```

### 14.8 Mobile Menu

```js
initial: { opacity: 0, y: -20 }
animate: { opacity: 1, y: 0 }
exit:    { opacity: 0, y: -20 }
```

### 14.9 Process Steps (Services)

```js
initial: { opacity: 0, x: 20 }
whileInView: { opacity: 1, x: 0 }
transition: { duration: 0.6 }
```

### 14.10 Hover Micro-interactions

| Element | Effect |
|---|---|
| Project ảnh (trang chủ) | `grayscale → grayscale-0` + `scale-105`, duration 700ms |
| Project ảnh (projects page) | `scale-105`, duration 700ms |
| Service ảnh | `scale-105`, duration 1000ms |
| About method items | `translate-x-2`, duration 300ms |
| Prev/Next project nav | `translate-x-4` hoặc `-4`, duration 500ms |
| Arrow button trong card | border/bg flip đen–trắng |
| Service CTA link | Arrow `translate-x-1`, duration 200ms |

### 14.11 ScrollToTop Button

Floating button `fixed bottom-8 right-8 z-50`. Xuất hiện sau khi scroll > 200px.  
Animation: `opacity 0→1` + `scale 0.8→1` (Framer Motion). Click: `window.scrollTo({ top: 0, behavior: 'smooth' })`.

---

## 15. Nội dung — Bilingual (VI / EN)

### 15.1 Cấu trúc data

- **`src/data/projects.ts`** — 33 dự án, mỗi dự án có field bilingual cho `location`, `description`, `services`, `tagline`
- **`src/data/blog.ts`** — Blog posts với `title`, `excerpt`, `content`, `date` bilingual

### 15.2 Switching

- Context `LanguageContext` — `language: 'VI' | 'EN'`, lưu vào `localStorage`
- Các component đọc `language` và render `t[key]` tương ứng inline

### 15.3 Nội dung cố định (không bilingual)

- Địa chỉ: `19 Hoàng Sa, Phường Sài Gòn, TP.HCM`
- Phone: `(+84) 931 888 149`
- Email: `info@pepper.builders`
- Social links: Facebook, Instagram, LinkedIn, Zalo

---

## 16. Hình ảnh & Media

### 16.1 Component `ImageWithFallback`

Tất cả ảnh đều dùng component này tại `src/components/figma/ImageWithFallback.tsx`.  
Xử lý: fallback khi ảnh lỗi, hỗ trợ `src` string hoặc `StaticImport`.

### 16.2 Ảnh dự án

- **23 ảnh thực** từ client: `.jpg` đặt tại `src/imports/projects/`
- **10 dự án** chưa có ảnh (hiện dùng ảnh Unsplash tạm)
- Format Unsplash: `https://images.unsplash.com/photo-{ID}?w=1080&q=80&fit=crop&auto=format`

### 16.3 Ảnh Hero Slideshow (Trang chủ)

5 ảnh Unsplash kiến trúc/nội thất — dùng `w=1920&q=80`

### 16.4 Logo

- File: `src/app/logo.svg` (SVG vector)
- Đảo màu bằng CSS: `brightness-0 invert` để dùng trên nền tối
- Không dùng phiên bản PNG

### 16.5 Map (Trang Liên hệ)

Static image: `/map.png` (đặt tại `public/map.png`)  
Link ra Google Maps: địa chỉ Pepper House 19 Hoàng Sa

### 16.6 Aspect Ratios chuẩn

| Vị trí | Ratio |
|---|---|
| Project cards (tất cả trang) | `4:3` |
| Hero page detail | `auto h-[40-60vh]` |
| Before/After slider | `4:3` mobile · `21:9` desktop |
| Blog featured | `auto h-[35-50vh]` |
| Blog grid cards | `4:3` |
| Service section | `4:3` |

---

## 17. Lưu ý triển khai

### 17.1 Stack & Dependencies

| Package | Version | Mục đích |
|---|---|---|
| Next.js | 15 | Framework |
| React | 19 | UI |
| TypeScript | latest | Types |
| Tailwind CSS | 4 | Styling |
| `motion/react` (Framer Motion) | latest | Animations |
| `@radix-ui/react-accordion` | — | FAQ accordion |
| `@radix-ui/react-select` | — | Contact form select |
| `lucide-react` | — | Icons |

### 17.2 Quan trọng

1. **`rounded-none` toàn bộ** — Mọi nút, input, container đều không bo góc. Đây là điểm đặc trưng thiết kế.
2. **Font phải load đúng** — IBM Plex Mono (display/heading) + Inter (body). Thiếu font làm mất hoàn toàn cảm giác design.
3. **Grayscale trên hero homepage** — Ảnh nền hero PHẢI có filter `grayscale`. Đây là chủ ý thiết kế.
4. **`whileInView viewport={{ once: true }}`** — Tất cả scroll animation chỉ chạy 1 lần, không lặp khi scroll lên xuống.
5. **Container padding:** Luôn `px-6 md:px-12`. Không dùng padding khác.
6. **Header transparent chỉ trên homepage** — Các trang khác: header trắng ngay từ đầu.
7. **CTA Header ẩn trên homepage** cho đến khi scroll qua hero (80% viewport height).
8. **Language context** phải wrap toàn bộ app.
9. **ScrollToTop** component luôn hiển thị trên tất cả trang.

### 17.3 Responsive Breakpoints (Tailwind)

| Prefix | Min-width |
|---|---|
| `sm:` | 640px |
| `md:` | 768px |
| `lg:` | 1024px |
| `xl:` | 1280px |

### 17.4 SEO

- `metadataBase`: `https://pepper.builders`
- Default title + template: `%s | Pepper Builders & Makers`
- OpenGraph + Twitter Card configured
- Structured data: `WebsiteJsonLd` + `OrganizationJsonLd` (JSON-LD schema)
- HTML lang: `vi`

---

*Tài liệu này phản ánh trạng thái website tại thời điểm 25/06/2026. Mọi thay đổi phát sinh sau bàn giao cần được cập nhật theo đây.*
