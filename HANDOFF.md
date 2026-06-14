# UI/UX Design Handoff Document
## Project: Pepper Builders & Makers (PB&M)

This document serves as the design specification and handoff for the engineering team. It outlines the core visual language, layout structure, and interactive behaviors to ensure consistency across the React application.

---

## 1. Design Principles
- **Minimalist & Modern:** Inspired by international architectural studios.
- **Commitment Focus:** Emphasis on "0 Hidden Costs" and "100% On-Time" rather than arbitrary numbers.
- **Typography-Driven:** Large, confident headings paired with light, breathable body text.
- **Fluid Motion:** Smooth transitions and slow zooms using `motion/react` to convey luxury and scale.
- **Bilingual Support:** Interface components must accommodate both English and Vietnamese text lengths gracefully.

---

## 2. Color Palette
The project uses Tailwind CSS v4 with custom tokens. The theme is primarily monochromatic with subtle neutral variations.

### Light Theme (Default)
| Token Name | Hex / Value | Usage |
| :--- | :--- | :--- |
| `--background` | `#ffffff` | Primary page backgrounds |
| `--foreground` | `oklch(0.145 0 0)` | Primary text (Black/Dark Grey) |
| `--primary` | `#030213` | Deep Black for heavy contrast elements (Buttons, solid blocks) |
| `--muted` | `#ececf0` | Light Grey for subtle backgrounds |
| `--muted-foreground`| `#717182` | Medium Grey for secondary text/labels |
| `--border` | `rgba(0, 0, 0, 0.1)`| Thin dividers and borders |

### Dark Theme Exceptions
The hero section and footer utilize inverted/dark schemes independent of system theme settings to create dramatic contrast.
- **Hero/Footer Background:** `bg-neutral-900` or `#0f1115`
- **Hero/Footer Text:** `text-white` or `text-neutral-400`

---

## 3. Typography
The typography uses a mix of modern Sans-Serif and elegant Serif fonts to create architectural contrast.

### Font Families
- **Primary (Sans-Serif):** Used for navigation, UI elements, labels, and generic body copy.
- **Secondary (Serif):** Used for elegant statements, quotes, and the "You Dream It, We Build It" slogan.

### Scale & Hierarchy
- **H1 (Hero):** 4xl to 6xl (`text-4xl md:text-6xl`), `font-bold`, tight tracking (`tracking-tight`).
- **H2 (Section Titles):** 3xl (`text-3xl`), `font-bold`.
- **H3 (Card/Project Titles):** xl to 4xl, depending on context.
- **Subtitles/Tags:** Small (`text-[11px]` to `text-sm`), `font-bold`, uppercase, wide tracking (`tracking-[0.2em]`).
- **Body Text:** Base to lg (`text-base md:text-lg`), relaxed line height (`leading-relaxed`), `text-neutral-500` or `text-neutral-600`.

---

## 4. Grid & Layout System
- **Container:** Max-width constrained with horizontal padding (`px-6 md:px-12`).
- **Grid System:** 12-column CSS Grid (`grid-cols-1 md:grid-cols-12`) used heavily in the Footer and complex sections.
- **Spacing:** Generous vertical rhythm. Use `py-24` or `py-32` for major section breaks to let content breathe.

### Mobile Responsiveness
- **Header:** Transparent on load, white frosted glass (`backdrop-blur-md bg-white/95`) on scroll. Mobile menu uses a dark frosted glass overlay (`bg-black/80 backdrop-blur-xl`).
- **Footer:** 2-column layout on mobile, expanding to a 12-column grid on desktop.
- **Stacking:** Flex/Grid columns stack vertically (`col-span-1`) on mobile and expand side-by-side (`md:col-span-4`, `md:grid-cols-3`) on larger screens.

---

## 5. UI Components

### Buttons & Links
- **Primary CTA:** Solid black background (`bg-black`), white text, `text-xs font-bold uppercase tracking-widest`, `px-6 py-3`. Hover: `bg-neutral-800`.
- **Secondary/Ghost CTA:** Transparent or white background, black text.
- **Inline Links:** Often paired with an arrow icon (`<ArrowRight size={16} />`), styled with a bottom border or simple hover color transition (`hover:text-neutral-500`).

### Navigation (Header)
- Desktop: Horizontal links, Language Switcher (VI/EN) separated by `/`, and CTA button.
- Mobile: Hamburger menu (Lucide `Menu` / `X` icons). When open, logo and icons invert to white against the dark frosted background.

### Imagery
- **Aspect Ratios:** Hero images cover the full screen (`h-screen min-h-[100svh]`). Project cards use a `60vh` height block.
- **Treatment:** Use `object-cover`.
- **Component:** Always use `<ImageWithFallback />` for graceful loading.

---

## 6. Motion & Interaction (Framer Motion / Tailwind)
- **Hero Slider:** `mode="popLayout"`. Fade in and slight scale down (`scale: 1.05` to `1`) over `1.5s` using `easeInOut`.
- **Image Hover Effects:** Project cards feature a slow zoom on hover (`group-hover:scale-105 duration-1000`) and a dark overlay fade (`bg-black/40 duration-500`) to reveal text.
- **Mobile Menu Entry:** Slides down from top (`y: -20` to `0`, `opacity: 0` to `1`).

---

## 7. Assets
- **Icons:** Lucide React (`Menu`, `X`, `ArrowRight`, `Building2`, `Home`, `Briefcase`, `Facebook`, `Instagram`, `Linkedin`). Outline weight is set thin (`stroke-1` on large icons).
- **Logos:** `imgi_1_pepper-logo-2.png`. Implemented with `brightness-0 invert` utility classes when placed on dark backgrounds (like the open mobile menu).

---
*Generated by Figma Make AI for seamless developer handoff.*