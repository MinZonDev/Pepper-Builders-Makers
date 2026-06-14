"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Building2, Home as HomeIcon, Briefcase } from "lucide-react";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import { motion, AnimatePresence } from "motion/react";
import { allProjects } from "@/data/projects";
import { useLanguage } from "@/contexts/LanguageContext";

const heroImages = [
  "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?w=1920&q=80&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&q=80&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1654658975918-a2c06424550a?w=1920&q=80&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1591474200742-8e512e6f98f8?w=1920&q=80&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1453586857165-eb78d44460ca?w=1920&q=80&fit=crop&auto=format",
];

export default function HomeContent() {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState('ALL');
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, scrollLeft: 0 });

  const updateScrollState = useCallback(() => {
    const el = sliderRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < maxScroll - 10);
    setScrollProgress(maxScroll > 0 ? el.scrollLeft / maxScroll : 0);
  }, []);

  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener('scroll', updateScrollState, { passive: true });
    return () => el.removeEventListener('scroll', updateScrollState);
  }, [updateScrollState, activeFilter]);

  const scrollSlider = (direction: 'left' | 'right') => {
    const el = sliderRef.current;
    if (!el) return;
    const cardWidth = el.querySelector('a')?.offsetWidth || 400;
    el.scrollBy({ left: direction === 'right' ? cardWidth + 32 : -(cardWidth + 32), behavior: 'smooth' });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    const el = sliderRef.current;
    if (!el) return;
    setIsDragging(true);
    dragStart.current = { x: e.pageX - el.offsetLeft, scrollLeft: el.scrollLeft };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const el = sliderRef.current;
    if (!el) return;
    const x = e.pageX - el.offsetLeft;
    const walk = (x - dragStart.current.x) * 1.5;
    el.scrollLeft = dragStart.current.scrollLeft - walk;
  };

  const handleDragEnd = () => setIsDragging(false);
  const { language } = useLanguage();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const t = {
    heroTitle: language === 'VI' ? "Thiết kế & Thi công toàn diện" : "Comprehensive Design & Build",
    heroBtn: language === 'VI' ? "Nhận tư vấn miễn phí" : "Get Free Consultation",
    srvTitle: language === 'VI' ? "Dịch vụ nổi bật" : "Featured Services",
    srvDesc1: language === 'VI' ? "Khách sạn, Nhà hàng, Quán café, Bar, Resort với tiêu chuẩn thẩm mỹ và công năng vượt trội." : "Hotels, Restaurants, Cafes, Bars, Resorts with outstanding aesthetic and functional standards.",
    srvDesc2: language === 'VI' ? "Nhà phố, Biệt thự, Căn hộ cao cấp. Mang đậm dấu ấn cá nhân và phong cách sống." : "Townhouses, Villas, Premium Apartments. Deeply imbued with personal marks and lifestyles.",
    srvDesc3: language === 'VI' ? "Văn phòng, Showroom, Retail, BĐS cho thuê. Tối ưu diện tích và trải nghiệm thương hiệu." : "Offices, Showrooms, Retail, Rental Properties. Optimizing space and brand experience.",
    readMore: language === 'VI' ? "Xem thêm" : "Read more",
    projTitle: language === 'VI' ? "Dự án tiêu biểu" : "Featured Projects",
    projAll: language === 'VI' ? "Xem tất cả dự án" : "View all projects",
    projDetail: language === 'VI' ? "Xem chi tiết" : "View details",
    stat1: language === 'VI' ? "Năm kinh nghiệm" : "Years Experience",
    stat2: language === 'VI' ? "Phát sinh CP" : "Hidden Costs",
    stat3: language === 'VI' ? "Khách hài lòng" : "Happy Clients",
    stat4: language === 'VI' ? "Đúng tiến độ" : "On-time",
    whyTitle: language === 'VI' ? "Tại sao chọn Pepper?" : "Why choose Pepper?",
    whyP1Title: language === 'VI' ? "Thiết kế" : "Design",
    whyP1Desc: language === 'VI' ? "Sáng tạo, tối ưu công năng và đậm dấu ấn." : "Creative, functionally optimized, and signature.",
    whyP2Title: language === 'VI' ? "Thi công" : "Construction",
    whyP2Desc: language === 'VI' ? "Đội ngũ lành nghề, kỹ thuật thi công sắc nét." : "Skilled team, sharp construction techniques.",
    whyP3Title: language === 'VI' ? "Quản lý" : "Management",
    whyP3Desc: language === 'VI' ? "Giám sát tiến độ và chất lượng nghiêm ngặt." : "Strict progress and quality supervision.",
    whyP4Title: language === 'VI' ? "Vận hành" : "Operation",
    whyP4Desc: language === 'VI' ? "Hỗ trợ bảo trì, đảm bảo công trình bền vững." : "Maintenance support, ensuring durable works.",
    processShort1: language === 'VI' ? "Tư vấn & Đánh giá" : "Consult & Assess",
    processShort2: language === 'VI' ? "Thiết kế & Hợp đồng" : "Design & Contract",
    processShort3: language === 'VI' ? "Thi công & Bàn giao" : "Build & Handover",
    processShortLink: language === 'VI' ? "Xem quy trình đầy đủ" : "View full process",
    ctaTitle: language === 'VI' ? "Bạn có dự án cần thực hiện?" : "Have a project in mind?",
    ctaBtn1: language === 'VI' ? "Liên hệ ngay" : "Contact us now",
    ctaBtn2: language === 'VI' ? "Xem các công trình" : "View our works",
  };

  return (
    <div className="w-full bg-white text-[#111111]">
      {/* Section 1 - Hero */}
      <section className="relative h-screen min-h-[100svh] w-full flex items-center justify-center overflow-hidden bg-neutral-900">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentHeroIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.6, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <ImageWithFallback
              src={heroImages[currentHeroIndex]}
              alt="Thiết kế thi công trọn gói tại TP.HCM — Pepper Builders"
              className="w-full h-full object-cover grayscale"
            />
          </motion.div>
        </AnimatePresence>
        
        <div className="container mx-auto relative z-10 px-6 md:px-12 text-center text-white max-w-5xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-serif tracking-tight mb-6"
          >
            {t.heroTitle}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl font-light mb-12 opacity-90 text-center"
          >
            &quot;You Dream It, We Build It&quot;
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link 
              href="/contact" 
              className="inline-block bg-[#111111] text-white rounded-none px-8 py-4 font-bold text-sm tracking-widest uppercase hover:bg-neutral-800 transition-colors"
            >
              {t.heroBtn}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Section 2 - Dịch vụ nổi bật */}
      <section className="py-24 container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {[
            {
              title: "HOSPITALITY",
              desc: t.srvDesc1,
              icon: <Building2 size={24} className="mb-8 stroke-1" />,
              link: "/services"
            },
            {
              title: "RESIDENTIAL",
              desc: t.srvDesc2,
              icon: <HomeIcon size={24} className="mb-8 stroke-1" />,
              link: "/services"
            },
            {
              title: "COMMERCIAL",
              desc: t.srvDesc3,
              icon: <Briefcase size={24} className="mb-8 stroke-1" />,
              link: "/services"
            },
          ].map((service, i) => (
            <div key={i} className="border border-[#E0E0E0] bg-white p-10 flex flex-col items-start -ml-[1px] -mt-[1px]">
              {service.icon}
              <h3 className="text-sm font-bold tracking-widest uppercase mb-4">{service.title}</h3>
              <p className="text-[#555555] mb-8 leading-relaxed flex-grow text-sm">{service.desc}</p>
              <Link href={service.link} className="inline-flex items-center gap-2 text-sm font-bold mt-auto hover:underline underline-offset-4">
                {t.readMore} <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Section 6 - Quy trình rút gọn */}
      <section className="pb-24 pt-0 container mx-auto px-6 md:px-12 text-center">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-sm md:text-base font-medium text-[#555555] mb-8">
          <span className="flex items-center gap-2">
            <span className="w-6 h-6 border border-[#111111] text-[#111111] flex items-center justify-center text-xs">1</span>
            {t.processShort1}
          </span>
          <ArrowRight size={16} className="hidden md:block opacity-30" />
          <span className="flex items-center gap-2">
            <span className="w-6 h-6 border border-[#111111] text-[#111111] flex items-center justify-center text-xs">2</span>
            {t.processShort2}
          </span>
          <ArrowRight size={16} className="hidden md:block opacity-30" />
          <span className="flex items-center gap-2">
            <span className="w-6 h-6 border border-[#111111] text-[#111111] flex items-center justify-center text-xs">3</span>
            {t.processShort3}
          </span>
        </div>
        <Link href="/about" className="inline-flex items-center gap-2 text-sm font-bold hover:underline underline-offset-4">
          {t.processShortLink} <ArrowRight size={16} />
        </Link>
      </section>

      {/* Section 3 - Dự án tiêu biểu (Horizontal Slider) */}
      <section className="py-24 bg-white border-t border-[#E0E0E0] overflow-hidden">
        {/* Header */}
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-serif tracking-tight mb-6">{t.projTitle}</h2>
            <div className="flex flex-wrap gap-4 md:gap-8">
              {['ALL', 'HOSPITALITY', 'RESIDENTIAL', 'COMMERCIAL'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`text-xs font-bold tracking-widest uppercase transition-colors pb-1 ${
                    activeFilter === filter 
                      ? "text-[#111111] border-b-2 border-[#111111]" 
                      : "text-[#555555] hover:text-[#111111]"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
          {/* Arrow Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollSlider('left')}
              disabled={!canScrollLeft}
              className={`w-12 h-12 border flex items-center justify-center transition-all ${
                canScrollLeft
                  ? 'border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-white'
                  : 'border-[#E0E0E0] text-[#E0E0E0] cursor-not-allowed'
              }`}
              aria-label="Previous project"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              onClick={() => scrollSlider('right')}
              disabled={!canScrollRight}
              className={`w-12 h-12 border flex items-center justify-center transition-all ${
                canScrollRight
                  ? 'border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-white'
                  : 'border-[#E0E0E0] text-[#E0E0E0] cursor-not-allowed'
              }`}
              aria-label="Next project"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Horizontal Slider */}
        <div
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          className={`flex gap-8 overflow-x-auto pl-6 md:pl-[max(1.5rem,calc((100vw-1280px)/2+1.5rem))] pr-12 pb-4 scroll-smooth snap-x snap-mandatory ${
            isDragging ? 'cursor-grabbing select-none' : 'cursor-grab'
          }`}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {allProjects
            .filter((project) => activeFilter === 'ALL' || project.category.toUpperCase() === activeFilter)
            .map((project) => (
              <Link
                href={`/projects/${project.id}`}
                key={project.id}
                className="group block shrink-0 snap-start"
                style={{ width: 'clamp(300px, 40vw, 560px)' }}
                draggable={false}
                onClick={(e) => { if (isDragging) e.preventDefault(); }}
              >
                <div className="relative w-full aspect-[4/3] overflow-hidden mb-6 bg-[#F7F7F7]">
                  <ImageWithFallback
                    src={project.img}
                    alt={project.name}
                    className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                    draggable={false}
                  />
                  {/* Category badge */}
                  <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1.5 text-[10px] font-bold tracking-widest uppercase">
                    {project.category}
                  </div>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-serif text-[#111111] mb-1 group-hover:text-neutral-600 transition-colors">{project.name}</h3>
                    <span className="text-xs text-[#999999]">
                      {language === 'VI' ? project.location.vi : project.location.en} · {project.year}
                    </span>
                  </div>
                  <div className="w-10 h-10 border border-[#E0E0E0] flex items-center justify-center shrink-0 mt-1 group-hover:border-[#111111] group-hover:bg-[#111111] group-hover:text-white transition-all">
                    <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            ))}
        </div>

        {/* Progress Bar + CTA */}
        <div className="container mx-auto px-6 md:px-12 mt-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Progress indicator */}
          <div className="w-full sm:w-64 h-[2px] bg-[#E0E0E0] relative">
            <div
              className="absolute top-0 left-0 h-full bg-[#111111] transition-all duration-300 ease-out"
              style={{ width: `${Math.max(10, scrollProgress * 100)}%` }}
            />
          </div>
          <Link href="/projects" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#111111] rounded-none text-white text-sm font-bold uppercase tracking-widest hover:bg-neutral-800 transition-colors">
            {t.projAll} <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Section 4 - Số liệu thống kê */}
      <section className="py-24 bg-[#F7F7F7] border-y border-[#E0E0E0]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div>
              <span className="block text-5xl md:text-7xl font-serif mb-4">15+</span>
              <span className="text-xs font-bold text-[#555555] uppercase tracking-widest">{t.stat1}</span>
            </div>
            <div>
              <span className="block text-5xl md:text-7xl font-serif mb-4">0</span>
              <span className="text-xs font-bold text-[#555555] uppercase tracking-widest">{t.stat2}</span>
            </div>
            <div>
              <span className="block text-5xl md:text-7xl font-serif mb-4">98%</span>
              <span className="text-xs font-bold text-[#555555] uppercase tracking-widest">{t.stat3}</span>
            </div>
            <div>
              <span className="block text-5xl md:text-7xl font-serif mb-4">100%</span>
              <span className="text-xs font-bold text-[#555555] uppercase tracking-widest">{t.stat4}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 - Hệ sinh thái trọn gói */}
      <section className="py-32 container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          <div className="lg:col-span-5">
            <h2 className="text-4xl md:text-6xl font-serif tracking-tight leading-tight">{t.whyTitle}</h2>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">
            {[
              { num: "01", title: t.whyP1Title, desc: t.whyP1Desc },
              { num: "02", title: t.whyP2Title, desc: t.whyP2Desc },
              { num: "03", title: t.whyP3Title, desc: t.whyP3Desc },
              { num: "04", title: t.whyP4Title, desc: t.whyP4Desc }
            ].map((point, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-sm font-bold text-[#555555] mb-4">{point.num}</span>
                <h4 className="text-xl font-bold mb-3">{point.title}</h4>
                <p className="text-sm text-[#555555] leading-relaxed">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7 - CTA */}
      <section className="bg-[#F7F7F7] border-t border-[#E0E0E0] py-32 px-6">
        <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <h2 className="text-3xl md:text-5xl font-serif tracking-tight leading-tight max-w-xl">{t.ctaTitle}</h2>
          <div className="flex flex-col sm:flex-row lg:justify-end gap-4">
            <Link 
              href="/contact" 
              className="inline-flex justify-center bg-[#111111] text-white rounded-none px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-neutral-800 transition-colors"
            >
              {t.ctaBtn1}
            </Link>
            <Link 
              href="/projects" 
              className="inline-flex justify-center bg-white border border-[#E0E0E0] text-[#111111] rounded-none px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-[#F7F7F7] transition-colors"
            >
              {t.ctaBtn2}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
