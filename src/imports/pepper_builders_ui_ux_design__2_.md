# Pepper Builders & Makers — Ý tưởng & Thiết kế UI/UX Website
**pepper.builders** · Phiên bản 6.0 · Tháng 6, 2026

---

## Tổng quan ý tưởng

Pepper Builders & Makers là công ty thiết kế và thi công trọn gói tại TP.HCM, phục vụ phân khúc trung và cao cấp (ngân sách từ 2 tỷ+).

**Slogan:** *"You Dream It, We Build It"*

**Triết lý thiết kế:** Minimalism có chủ đích — ít nhưng tinh, khoảng trắng được tôn trọng, mỗi section chỉ truyền tải một thông điệp duy nhất.

---

## Định hướng Visual & Thương hiệu

Phong cách được giữ nguyên từ thiết kế hiện tại của pepper.builders — **không thay đổi màu sắc hay typography**, chỉ tối ưu thêm nội dung và UX.

| Yếu tố | Định hướng |
|--------|------------|
| Phong cách | Minimalism đen trắng nghiêm — editorial, không trang trí thừa |
| Màu nền | `#FFFFFF` trắng thuần — toàn bộ trang dùng nền trắng |
| Màu chữ chính | `#111111` đen — body text, heading, nav, CTA |
| Màu chữ phụ | `#555555` xám trung — caption, metadata, label nhỏ |
| Màu accent / CTA | **Không dùng màu accent** — CTA dùng nền đen `#111111` + text trắng, active state dùng font-weight/underline thay vì màu |
| Section nền phụ | `#F7F7F7` off-white — phân tách section nhẹ mà không dùng màu |
| Border / Divider | `#E0E0E0` xám nhạt — đường kẻ mỏng phân tách section |
| Tag / Label | Nền trắng + border `1px solid #111111` + text đen — không dùng badge màu |
| **Nguyên tắc màu** | **Ảnh dự án là điểm màu duy nhất trên toàn site** — mọi yếu tố UI đều đen/trắng/xám để ảnh công trình được tôn lên tối đa. Không bao giờ lỗi thời. |
| Logo | Wordmark "PB&M" kiểu block, in đậm, không icon |
| Typography heading | Slab serif hoặc monospace — đặc trưng, góc cạnh, không bo tròn |
| Typography body | Sans-serif nhỏ, justified (căn đều 2 lề) — mật độ chữ cao, đọc như tạp chí |
| Layout | 2 cột bất đối xứng — cột trái heading lớn, cột phải body text nhỏ hơn |
| Khoảng trắng | Rất nhiều — whitespace là yếu tố thiết kế chủ động, không phải khoảng trống |
| Hình ảnh | Full-bleed, đen trắng hoặc tông xám, không filter màu, không bo góc |
| Navigation | Đơn giản, text-only, không underline, không màu active rõ — tinh tế |
| Nút / Button | Nền đen + text trắng, không bo góc (border-radius: 0), không shadow |
| Ngôn ngữ | Tiếng Việt mặc định, nút EN \| VN text-only trên header phải |
| Đối tượng | Cá nhân/doanh nghiệp 30–55 tuổi, ngân sách 2 tỷ+, tại TP.HCM và các thành phố lớn |
| Tone | Chuyên nghiệp – Tin cậy – Hiệu quả — viết như tạp chí chuyên ngành, không bán hàng |

---

## Kiến trúc Navigation

```
Homepage (/)
├── Giới thiệu (/about)
├── Dịch vụ (/services)
│   ├── Hospitality
│   ├── Residential
│   └── Commercial
├── Dự án (/projects)
│   └── Chi tiết dự án (/projects/[ten-du-an])
├── Blog (/blog)
│   └── Bài viết (/blog/[slug])
└── Liên hệ (/contact)
```

---

## Thiết kế từng trang

---

### 1. Trang chủ — `/`

#### Hero Section
Phần đầu tiên người dùng nhìn thấy — cần gây ấn tượng mạnh và truyền đạt năng lực ngay lập tức.

**Phương án A — Video Hero (ưu tiên)**
- Video 15–20 giây, autoplay, muted, loop
- Nội dung: time-lapse công trình hoàn thiện → đội ngũ làm việc → không gian thành phẩm
- Format: WebM/MP4, nén dưới 5MB, có poster frame chống layout shift

**Phương án B — Slideshow (dự phòng)**
- 4–5 ảnh, mỗi ảnh 5 giây, hiệu ứng crossfade hoặc subtle zoom
- Ảnh 1: Hospitality (khách sạn/nhà hàng)
- Ảnh 2: Residential (biệt thự/căn hộ cao cấp)
- Ảnh 3: Commercial (văn phòng/retail)
- Ảnh 4: Đội ngũ tại công trình

**Overlay Text — giữ nguyên phong cách typography hiện tại:**
```
H1: "Thiết kế & Thi công toàn diện tại TP.HCM"
    (slab serif / monospace, cỡ lớn, trắng trên nền Hero)
Tagline: "You Dream It, We Build It"
    (body text nhỏ hơn — đứng một mình, không thêm sub-text lặp ý H1)
CTA Button: [Nhận tư vấn miễn phí]
    (nền đen + text trắng, border-radius: 0, không shadow)
```
> ⚠️ **Không thêm sub-text bên dưới tagline** — "Giải pháp trọn gói từ thiết kế đến vận hành..." lặp ý với H1 và khó đọc trên nền ảnh tối. Slogan đứng một mình tạo impact mạnh hơn.
> CTA phải hiển thị trên fold — không để người dùng phải cuộn xuống mới thấy.

---

#### Section 2 — Dịch vụ nổi bật

Layout: **Card grid 3 cột** (desktop) / stacked (mobile)

```
┌─────────────┐  ┌─────────────┐  ┌─────────────┐
│  HOSPITALITY │  │ RESIDENTIAL  │  │ COMMERCIAL   │
│   [icon]    │  │   [icon]    │  │   [icon]    │
│  25–30 từ   │  │  25–30 từ   │  │  25–30 từ   │
│ Xem thêm → │  │ Xem thêm → │  │ Xem thêm → │
└─────────────┘  └─────────────┘  └─────────────┘
```

Mỗi card: icon tối giản + tên dịch vụ + mô tả ngắn + link "Xem thêm →"

**Style card:** nền trắng, border `1px solid #E0E0E0`, không bo góc, không shadow, không màu accent — tag category dùng border đen + text đen.

---

#### Section 3 — Dự án tiêu biểu

- 3 project card nổi bật nhất
- Mỗi card: ảnh full-width + hover effect reveal tên dự án
- Nút "Xem tất cả dự án →" → `/projects`

**Hover effect:** Overlay mờ xuất hiện khi hover, hiển thị tên dự án và mũi tên — phù hợp phong cách minimalism.

> ⚠️ **Mobile fallback:** Hover không hoạt động trên mobile. Trên màn hình cảm ứng, hiển thị mặc định tên dự án + loại hình ở dưới ảnh (hoặc overlay nhẹ luôn hiển thị) — không để ảnh thuần mà không có thông tin.

---

#### Section 4 — Số liệu thống kê

**Tách riêng thành dải ngang đầy đủ** — không gộp chung với 4 bước quy trình vào cùng một section (gây mất cân bằng thị giác).

```
┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐
│   15+    │  │    0     │  │   98%    │  │  100%    │
│ Năm kinh │  │  Phát    │  │  Khách   │  │  Đúng    │
│ nghiệm   │  │ sinh CP  │  │  hài lòng│  │ tiến độ  │
└──────────┘  └──────────┘  └──────────┘  └──────────┘
```

Layout: 4 cột đều nhau, số lớn nổi bật (heading size), label nhỏ bên dưới — nền `#F7F7F7` phân tách nhẹ với các section xung quanh.

#### Section 5 — Hệ sinh thái trọn gói

**Section riêng biệt** sau dải số liệu — layout 2 cột bất đối xứng:

```
[Cột trái — heading lớn]     [Cột phải — 4 bước dạng grid 2×2]
Tại sao chọn Pepper?         01 Thiết kế · 02 Thi công
                             03 Quản lý  · 04 Vận hành
```

Mỗi bước: số thứ tự nổi bật + tên + 1 câu mô tả ngắn. Không dùng icon màu — dùng số kiểu editorial.

> ⚠️ **Lỗi prototype:** Section này đang gộp số liệu và 4 bước quy trình vào cùng một layout — cột trái quá thưa, cột phải quá dày. Tách ra 2 section như trên.

---

#### Section 6 — Quy trình rút gọn (trang chủ)

Phiên bản rút gọn 3 bước chính giữa Section Dịch vụ và Dự án — giúp người dùng trang chủ hiểu ngay cách Pepper làm việc mà không cần vào trang About:

```
① Tư vấn & Đánh giá  →  ② Thiết kế & Hợp đồng  →  ③ Thi công & Bàn giao
```

Link "Xem quy trình đầy đủ →" dẫn về `/about`.

#### Section 7 — CTA cuối trang

- Layout 2 cột: cột trái text lớn, cột phải nút CTA
- Text: *"Bạn có dự án cần thực hiện?"*
- Nút: **[Liên hệ ngay]** + **[Xem các công trình]** — 2 nút cho 2 nhóm người dùng khác nhau
- Nền section: `#F7F7F7` off-white với border-top `1px solid #E0E0E0`
- **Không dùng nền đen** — nền đen chỉ dành riêng cho Footer, tránh nhầm lẫn với Footer khi cuộn

> ⚠️ **Lỗi prototype:** Section CTA đang dùng nền đen — quá gần với Footer bên dưới, tạo cảm giác 2 vùng tối liền nhau, mất đi sự phân tách rõ ràng.

---

### 2. Trang Giới thiệu — `/about`

> **Thứ tự section được sắp xếp theo luồng cảm xúc:** Câu chuyện → Quy trình → Giá trị cốt lõi → Ảnh đội ngũ → Chứng nhận. Quy trình đặt sớm vì đây là điểm khác biệt lớn nhất của mô hình Design & Build — khách cần thấy "Pepper làm việc như thế nào" trước khi tin vào "Pepper tin vào điều gì."

#### Section 1 — Câu chuyện thương hiệu
- **Layout 2 cột bất đối xứng** như trang About hiện tại: cột trái heading lớn slab serif, cột phải body text justified
- Narrative 150+ từ: Pepper ra đời từ nhu cầu gì? Tại sao chọn mô hình trọn gói?
- **Tích hợp số liệu ngay trong đoạn văn** — không để tách rời ở section khác: "Từ năm 2010, Pepper đã hoàn thành X dự án tại X tỉnh thành..." Số liệu gần câu chuyện = tăng tin cậy
- Tone: chuyên gia chia sẻ, không bán hàng trực tiếp

> ⚠️ **Lỗi prototype:** Dải số liệu `15+ / 0 / 100% / 100%` đang bị tách rời ở section riêng phía dưới — xa câu chuyện thương hiệu, giảm impact. Nên kéo lên gần hoặc tích hợp vào đoạn mở đầu.

#### Section 2 — Quy trình làm việc (7 bước — bắt buộc đủ)

> ⚠️ **Lỗi prototype:** Đang hiển thị 5 bước, thiếu "Đánh giá dự án" (bước ②) và "Báo giá & Hợp đồng" (bước ④). Phải bổ sung đủ 7 bước theo đúng quy trình đã chốt.

**Timeline ngang (desktop) / dọc (mobile)** — style text-only, số thứ tự nổi bật, đường kẻ nối mỏng, không icon màu:

```
① Nhận yêu cầu
   → Ghi nhận thông tin dự án, mục tiêu, kỳ vọng

② Đánh giá dự án
   → Phân tích khả thi, quy mô, ngân sách, định hướng thiết kế

③ Gặp mặt tư vấn
   → Thảo luận trực tiếp, thống nhất hướng tiếp cận

④ Báo giá & Hợp đồng
   → Đề xuất chi tiết, ký kết hợp đồng minh bạch

⑤ Thiết kế
   → Hồ sơ kiến trúc, bản vẽ kỹ thuật, phối cảnh 3D

⑥ Xây dựng & Thi công
   → Kiểm soát Chất lượng – Chi phí – Tiến độ

⑦ Hoàn thành & Bàn giao
   → Nghiệm thu, bàn giao tài liệu, hỗ trợ sau dự án
```

UI: **Giữ nguyên ngôn ngữ thiết kế của diagram "Design & Build" đang có trên site** — text-only, uppercase label, đường kẻ mỏng nối các bước, không icon màu, không bo góc. Timeline ngang trên desktop, dọc trên mobile.

#### Section 3 — Giá trị cốt lõi / Our Beliefs
- Giữ nguyên nội dung "Our Beliefs" hiện tại — 6 beliefs đang có là tốt
- **Style hiện tại:** heading belief dạng slab serif lớn + body text nhỏ bên dưới — giữ nguyên
- **Bỏ icon outline hoặc tăng size rõ hơn** — icon hiện tại quá nhỏ và mờ, gần như không nhìn thấy. Thay thế bằng số thứ tự dạng editorial (01, 02, 03, 04) — phù hợp hơn với phong cách hiện tại của site
- Thêm ảnh minh chứng thực tế kèm theo từng giá trị nếu có (ảnh đen trắng hoặc tông xám)
- Đảm bảo "Our Beliefs" là `<h2>` trong HTML để Google index được — không thay đổi visual

#### Section 4 — Hình ảnh đội ngũ & Công trình
- Ảnh chụp toàn công ty — tín hiệu E-E-A-T quan trọng với Google
- 2–3 ảnh đội ngũ tại công trình thực tế (không cần chân dung cá nhân)

#### Section 5 — Chứng nhận & Báo chí
- Chứng chỉ hành nghề, giải thưởng ngành, bài báo/tạp chí đề cập
- Tín hiệu authority cho Google — bổ sung khi có

---

### 3. Trang Dịch vụ — `/services`

#### 3 nhóm dịch vụ chính

Mỗi nhóm là một section H2 riêng:

**HOSPITALITY**
Khách sạn, Nhà hàng, Quán café, Bar, Resort

**RESIDENTIAL**
Nhà phố, Biệt thự, Căn hộ, Nhà ở cá nhân

**COMMERCIAL**
Văn phòng, Showroom, Retail, BĐS cho thuê

Mỗi section: H2 + mô tả 80–120 từ + ảnh thực tế + link "Xem dự án →" (filter theo loại hình)

#### Hệ sinh thái 4 bước (hiển thị nổi bật)
```
Thiết kế → Thi công → Quản lý → Vận hành
```

#### FAQ Section
Dùng dạng accordion — kích hoạt rich snippet trên Google:
- Quy trình thiết kế thi công của Pepper diễn ra như thế nào?
- Pepper có thi công ngoài TP.HCM không?
- Thời gian hoàn thành một dự án trung bình là bao lâu?
- Pepper có nhận dự án cải tạo (renovation) không?
- Làm thế nào để bắt đầu một dự án với Pepper?

> ⚠️ **Lỗi prototype:** Nút CTA "Gửi câu hỏi cho Pepper" màu đen đang nằm ngay trong section FAQ — tạo ra 2 điểm CTA gần nhau gây phân tán. **Bỏ nút này**, chỉ giữ accordion FAQ thuần — người dùng muốn liên hệ sẽ dùng nav hoặc CTA section riêng ở cuối trang.

> ⚠️ Tránh FAQ về chi phí cụ thể — thay bằng CTA "Liên hệ để được đánh giá dự án và tư vấn ngân sách phù hợp"

---

### 4. Trang Dự án — `/projects`

#### Trang danh sách

**Filter tabs:**
```
[Tất cả] [Hospitality] [Residential] [Commercial]
```

**Grid layout:** Masonry hoặc 2–3 cột đều — ưu tiên ảnh full-bleed

**Mỗi card:**
- Ảnh đại diện đẹp
- Tên công trình
- Loại hình
- Địa điểm (quận/tỉnh)
- Hover: overlay hiển thị tên dự án + mũi tên "Xem chi tiết"

**Load:** Load more / Infinite scroll — không dùng pagination (gián đoạn trải nghiệm duyệt ảnh)

---

#### Trang chi tiết dự án — `/projects/[ten-du-an]`

```
┌────────────────────────────────────┐
│         Hero image (full-width)    │
├────────────────────────────────────┤
│  H1: Tên dự án cụ thể             │
│  Loại hình · Địa điểm · Diện tích │
│  Năm hoàn thành · Thời gian TC    │
├────────────────────────────────────┤
│  Mô tả ngắn về dự án              │
├────────────────────────────────────┤
│  Before/After Slider (interactive) │
│  → Dùng thư viện react-compare-image│
│  → KHÔNG chỉ đặt 2 ảnh cạnh nhau  │
├────────────────────────────────────┤
│         Gallery ảnh                │
│  (8–15 ảnh WebP)                  │
│  4–6 chi tiết · 2–3 quá trình TC  │
├────────────────────────────────────┤
│  Dự án tương tự                   │
│  (2–3 card CÙNG LOẠI HÌNH)        │
│  Không dùng prev/next tuần tự     │
├────────────────────────────────────┤
│  CTA: "Bạn có dự án tương tự?     │
│  Nhận tư vấn miễn phí" → /contact │
└────────────────────────────────────┘
```

> **URL slug:** Dùng không dấu + gạch ngang, có từ khóa.
> Ví dụ: `/projects/chi-bu-riverside-resort`
> Không dùng: `/projects/proj-001` hay `/projects/id-123`

> ⚠️ **Lỗi prototype — Before/After:** Section "So sánh hiện trạng & hoàn thiện" đang chỉ đặt 2 ảnh cạnh nhau tĩnh. Cần implement interactive drag slider (`react-compare-image` hoặc tương đương) — đây là tính năng UX rất mạnh, cần làm đúng.

> ⚠️ **Lỗi prototype — Dự án liên quan:** Đang dùng "Dự án trước/tiếp theo" tuần tự (Zen Workspace ↔ Lumiere Restaurant). Thay bằng **"Dự án tương tự"** lọc theo cùng category — người xem Grand Villa (Residential) nên thấy Sky Penthouse, không phải Zen Workspace (Commercial).

> ⚠️ **Mobile — hover effect trang Projects:** Trên màn hình cảm ứng không có hover. Mặc định hiển thị tên dự án + địa điểm ngay dưới ảnh — không để card chỉ có ảnh thuần.

---

### 5. Trang Liên hệ — `/contact`

#### Form liên hệ
- Họ tên
- Email
- Số điện thoại
- Loại dự án *(dropdown)*: Nhà ở / BĐS cho thuê / Nhà hàng / Khách sạn / Văn phòng / Khác
- Ngân sách dự kiến *(dropdown)*: 2–5 tỷ / 5–10 tỷ / 10–20 tỷ / 20 tỷ+
- Mô tả nhu cầu
- Nút gửi rõ ràng, nổi bật
- Micro-copy dưới nút gửi: *"Chúng tôi sẽ phản hồi trong 24 giờ làm việc"* — giảm lo lắng trước khi nhấn Submit

#### Thông tin liên hệ
- 📍 Địa chỉ: 19 Hoàng Sa, Phường Sài Gòn (Đa Kao), Quận 1, TP.HCM
- 📞 Hotline: (+84) 931 888 149
- 📧 Email: info@pepper.builders
- 🕐 Giờ làm việc: [cập nhật chính xác]

#### Yếu tố tạo tin tưởng
- Google Maps iframe với pin chính xác
- Ảnh văn phòng thực tế
- Badge: *"Phản hồi trong 24 giờ làm việc"*

> ⚠️ **NAP Consistency:** Địa chỉ phải đồng nhất 100% trên website, Google Business Profile, Facebook, LinkedIn. "19 Hoang Sa" (không dấu) và "19 Hoàng Sa" (có dấu) là **hai địa chỉ khác nhau** với Google.

---

### 6. Blog — `/blog`

#### Trang danh sách bài viết

**Layout card:**
- Bài featured đầu tiên: layout lớn — ảnh trái (50%) + tiêu đề/excerpt phải (50%)
- Các bài tiếp theo: grid 3 cột (desktop) / 1 cột (mobile) — ảnh thumbnail + category tag + tiêu đề + excerpt + ngày đăng
- Category tag: text uppercase, không badge màu — border đen + text đen
- Không bo góc, không shadow — border `1px solid #E0E0E0` phân tách card

**Filter tabs theo chủ đề** — đặt ngay dưới heading trang, trước danh sách bài:
```
[Tất cả]  [Hospitality]  [Residential]  [Commercial]  [Kiến thức chung]
```
Active state: `font-weight: 900` + underline mỏng — không dùng màu

> ⚠️ **Lỗi prototype:** Trang Blog hiện không có filter/tab phân loại — tất cả bài hiển thị cùng nhau. Cần thêm filter để người dùng tìm đúng chủ đề quan tâm.

**CTA cuối trang:** Ô đăng ký nhận bài mới qua email (nếu có email marketing) — đặt sau 6–8 bài đầu tiên, nút đen + text trắng, border-radius: 0

#### Định hướng nội dung
- Tone: Chia sẻ như chuyên gia — không bán hàng
- Target: Chủ đầu tư/doanh nghiệp ngân sách 2 tỷ+
- Tần suất: 1–2 bài/tháng

#### Chủ đề ưu tiên (3 tháng đầu)
1. "Design & Build là gì? So sánh với thuê riêng kiến trúc sư và nhà thầu"
2. "Bất động sản cho thuê: thiết kế thế nào để tối ưu công năng và tăng giá thuê?"
3. "Kiểm soát chi phí thi công: những phát sinh thường gặp và cách phòng tránh"
4. "Quy trình thiết kế thi công khách sạn boutique từ A đến Z"
5. "Chuẩn bị gì trước khi gặp kiến trúc sư? Checklist 10 điểm cho gia chủ"

---

## Yếu tố UX toàn site

### Header
Header được thiết kế theo phong cách tối giản, linh hoạt thay đổi trạng thái dựa vào vị trí cuộn trang và tối ưu trải nghiệm trên cả Mobile lẫn Desktop.

**Hành vi cuộn (Scroll Behavior)**
- Trạng thái ban đầu trên trang chủ: hoàn toàn trong suốt (`bg-transparent`), logo và chữ màu trắng để nổi bật trên nền Hero
- Khi cuộn trang: tự động chuyển sang nền trắng kính mờ (`bg-white/95 backdrop-blur-md`) với bóng đổ nhẹ (`shadow-sm`) — logo và text đổi thành đen/xám
- Trên các trang phụ (/about, /services, /projects...): luôn giữ nền trắng mặc định

**Bố cục Desktop**
- Bên trái: Logo "Pepper Builders & Makers" — tự động đảo màu bằng thuộc tính `invert` khi nền tối
- Ở giữa: Các liên kết điều hướng (Dịch vụ / Dự án / Về chúng tôi / Blog) — hover mượt mà, active state dùng `font-semibold`
- Bên phải: Nút chuyển ngôn ngữ VI / EN cách điệu bằng dấu `/`, kế bên là nút CTA "Nhận Tư Vấn" nền đen + chữ trắng, `tracking-widest`, icon mũi tên `ArrowRight`

**Bố cục Mobile**
- Logo góc trái, nút đổi ngôn ngữ và Hamburger Menu (icon Lucide) góc phải
- Khi mở menu: lớp phủ nền đen kính mờ (`bg-black/80 backdrop-blur-xl`) trượt xuống toàn màn hình (dùng thư viện `motion/react`), các liên kết phóng to với `font-light` — cảm giác sang trọng, không rối

### Footer
Footer dùng nền tối sâu `#0f1115` tạo tương phản mạnh ở cuối trang, bố cục lưới linh hoạt hiển thị thông tin rõ ràng.

**Màu sắc & Typography**
- Nền: `#0f1115` đen sâu
- Text chính: trắng — text phụ: `text-neutral-400`, `text-neutral-500`
- Tiêu đề cột: chữ in hoa, `text-[11px]`, `font-bold`, `tracking-[0.2em]`

**Bố cục Grid**
- Mobile: 2 cột nhỏ gọn, tiết kiệm không gian
- Desktop (12 cột):
  - **Cột 1 — Thương hiệu (4 cột):** Logo text "PB&M", slogan *"You Dream It, We Build It."* dùng `font-serif` sang trọng, icons mạng xã hội Facebook / Instagram / LinkedIn bọc trong vòng tròn viền mỏng
  - **Cột 2 — Điều hướng (2 cột):** Links nội bộ — Giới thiệu / Dịch vụ / Dự án / Blog
  - **Cột 3 — Dịch vụ (2–3 cột):** Hospitality / Residential / Commercial
  - **Cột 4 — Liên hệ (3 cột):** Địa chỉ 19 Hoàng Sa, Đa Kao, Q.1 · (+84) 931 888 149 · info@pepper.builders

**Footer Bottom**
Ngăn cách bởi đường viền ngang mỏng `border-neutral-800/80` — chứa dòng Copyright tự động cập nhật năm và chú thích *"Thiết kế & Thi công · TP.HCM"* với `text-xs`.

### Responsive
- Desktop: layout đầy đủ, grid nhiều cột
- Tablet: grid thu gọn, ảnh tối ưu lại
- Mobile: single column, timeline dọc, form đơn giản

### Hiệu suất (Core Web Vitals)
| Chỉ số | Mục tiêu |
|--------|----------|
| LCP (Largest Contentful Paint) | < 2.5 giây |
| CLS (Cumulative Layout Shift) | < 0.1 |
| INP (Interaction to Next Paint) | < 200ms |
| Kích thước ảnh WebP | Tối đa 200KB (hero 300KB) |

### Bảo vệ ảnh
- **Mở lại chuột phải** — right-click disabled gây hại UX nhiều hơn lợi
- Thay thế bằng **watermark logo nhẹ** ở góc ảnh trước khi upload — vừa bảo vệ bản quyền, vừa tạo nhận diện thương hiệu khi ảnh lan truyền

### Scroll Progress Indicator
- Áp dụng cho trang Case Study (chi tiết dự án) khi nội dung dài
- Thanh tiến trình mỏng ở top hoặc bên phải màn hình — giúp người dùng biết còn bao nhiêu nội dung phía dưới

### Trang 404
- Thiết kế có chủ đích, không dùng trang mặc định của trình duyệt
- Giữ nguyên phong cách: nền trắng, typography slab serif, nút đen + text trắng
- Nội dung: thông báo ngắn gọn + link nhanh về Trang chủ và Dự án
- Chi tiết nhỏ nhưng thể hiện sự chỉn chu của thương hiệu cao cấp

### Lưu ý SEO kỹ thuật khi deploy

> ⚠️ **Meta description:** Figma prototype đang dùng placeholder *"Enhance user experience with a streamlined interface..."* — **không phải meta description thật**. Khi code thật, từng trang phải có meta description riêng theo đúng nội dung đã chốt trong tài liệu SEO.

> ⚠️ **`noindex` flag:** Figma site đang set `meta-robots: noindex` — đúng cho prototype. **Nhớ bỏ flag này** khi deploy lên domain thật `pepper.builders`, nếu không Google sẽ không index bất kỳ trang nào.

---

## Roadmap triển khai

| Giai đoạn | Thời gian | Nội dung |
|-----------|-----------|----------|
| **Sprint 1** | Tuần 1–4 | Chuyển SSR/SSG (Next.js/Nuxt.js) · Triển khai meta tags · Tạo sitemap.xml & robots.txt · Mở lại chuột phải · Cập nhật copyright · Watermark ảnh · Alt text & WebP |
| **Sprint 2** | Tuần 5–8 | Viết lại nội dung About (7 bước quy trình) · Tối ưu Services · Tạo slug dự án có từ khóa · hreflang & canonical · Đăng ký Google Business Profile |
| **Sprint 3** | Tuần 9–12 | Schema markup toàn site · Xây dựng Case Study 4–8 dự án · Bộ lọc trang Projects · Tối ưu Core Web Vitals |
| **Sprint 4** | Tuần 13–24 | Ra mắt Blog · 2 bài/tháng · Internal linking · Theo dõi GSC & Analytics · Tối ưu liên tục theo data |

---

## Nội dung Pepper cần cung cấp

**Ưu tiên 1 — Dự án & Hình ảnh**
- Danh sách 4–8 dự án nổi bật: tên, loại hình, địa điểm, diện tích, năm hoàn thành
- 8–15 ảnh/dự án (chụp chuyên nghiệp): 1 hero + 2–3 before/after + 4–6 chi tiết + 2–3 quá trình thi công + 1–2 bản vẽ/3D
- Logo vector gốc: SVG hoặc AI/EPS, nền trong suốt

**Ưu tiên 2 — Câu chuyện thương hiệu**
- Nháp câu chuyện thương hiệu (team sẽ biên tập lại)
- Số liệu: tổng dự án hoàn thành, số tỉnh/thành phố đã thi công
- Ảnh chụp toàn công ty hoặc đội ngũ tại công trình

**Ưu tiên 3 — Pháp lý & Vận hành**
- Tên công ty pháp lý đầy đủ + mã số thuế
- Giờ làm việc chính xác
- Chứng chỉ hành nghề, giải thưởng, báo chí đề cập (nếu có)

**Ưu tiên 4 — Truy cập kỹ thuật**
- Quyền truy cập Google Search Console & Google Analytics
- Quyền truy cập domain/hosting

---

*Tài liệu dựa trên Pepper SEO & UI/UX Plan v6.0 — pepper.builders — Tháng 6, 2026*
*Người thực hiện: Phạm Minh Trọng | trongpm.work@gmail.com*
