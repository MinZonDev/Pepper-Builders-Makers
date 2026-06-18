"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, MoveHorizontal } from "lucide-react";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import { allProjects } from "@/data/projects";
import { useLanguage } from "@/contexts/LanguageContext";

export function ProjectDetail({ id }: { id: string }) {
  const { language } = useLanguage();
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const project = allProjects.find((p) => p.id === id);

  const handleSliderMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    // Support for both mouse and touch events
    const clientX = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  };

  const t = {
    notFound: language === 'VI' ? "Không tìm thấy dự án" : "Project not found",
    notFoundDesc: language === 'VI' ? "Dự án bạn đang tìm kiếm không tồn tại hoặc đã bị xóa." : "The project you are looking for does not exist or has been removed.",
    backToList: language === 'VI' ? "Quay lại danh sách" : "Back to list",
    home: language === 'VI' ? "Trang chủ" : "Home",
    projectsLabel: language === 'VI' ? "Dự án" : "Projects",
    client: "Client",
    scopeOfWork: "Scope of Work",
    partner: "Partner",
    completionYear: "Completion Year",
    location: "Location",
    area: "Area",
    prevLabel: language === 'VI' ? "Dự án trước" : "Previous",
    nextLabel: language === 'VI' ? "Dự án tiếp theo" : "Next",
    before: "From Asset",
    after: "to Experience",
    beforeAfterTitle: language === 'VI' ? "So sánh Hiện trạng & Hoàn thiện" : "Before & After Comparison",
  };

  if (!project) {
    return (
      <div className="pt-32 pb-24 text-center min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">{t.notFound}</h1>
        <p className="text-neutral-500 mb-8">{t.notFoundDesc}</p>
        <Link href="/projects" className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 font-medium hover:bg-neutral-800 transition-colors">
          <ArrowLeft size={16} /> {t.backToList}
        </Link>
      </div>
    );
  }

  // Find next/prev projects for navigation
  const currentIndex = allProjects.findIndex(p => p.id === id);
  const prevProject = allProjects[(currentIndex - 1 + allProjects.length) % allProjects.length];
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];

  return (
    <div className="pt-32 bg-white min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        {/* Back Button */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-black transition-colors mb-12"
        >
          <ArrowLeft size={16} /> {t.projectsLabel}
        </Link>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-12 uppercase">
          {project.name}
        </h1>

        {/* Hero / Prominent Image */}
        <div className="w-full mb-16 md:mb-24 bg-neutral-100 overflow-hidden">
          <ImageWithFallback
            src={project.img}
            alt={`${project.name} Featured`}
            className="w-full h-[50vh] md:h-[75vh] object-cover"
          />
        </div>

        {/* Info & Description Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-24">
          {/* Details Table - Left */}
          <div className="lg:col-span-5">
            <ul className="border-t border-neutral-200">
              <li className="flex justify-between py-5 border-b border-neutral-200 text-sm md:text-base">
                <span className="text-neutral-500 w-1/3">{t.client}</span>
                <span className="font-medium w-2/3 text-right">{project.client}</span>
              </li>
              <li className="flex justify-between py-5 border-b border-neutral-200 text-sm md:text-base">
                <span className="text-neutral-500 w-1/3">{t.scopeOfWork}</span>
                <span className="font-medium w-2/3 text-right">{language === 'VI' ? project.services.vi : project.services.en}</span>
              </li>
              <li className="flex justify-between py-5 border-b border-neutral-200 text-sm md:text-base">
                <span className="text-neutral-500 w-1/3">{t.partner}</span>
                <span className="font-medium w-2/3 text-right">{project.partner || 'Design by O9'}</span>
              </li>
              <li className="flex justify-between py-5 border-b border-neutral-200 text-sm md:text-base">
                <span className="text-neutral-500 w-1/3">{t.completionYear}</span>
                <span className="font-medium w-2/3 text-right">{project.year}</span>
              </li>
              <li className="flex justify-between py-5 border-b border-neutral-200 text-sm md:text-base">
                <span className="text-neutral-500 w-1/3">{t.location}</span>
                <span className="font-medium w-2/3 text-right">{language === 'VI' ? project.location.vi : project.location.en}</span>
              </li>
              <li className="flex justify-between py-5 border-b border-neutral-200 text-sm md:text-base">
                <span className="text-neutral-500 w-1/3">{t.area}</span>
                <span className="font-medium w-2/3 text-right">{project.scale}</span>
              </li>
            </ul>
          </div>

          {/* Description - Right */}
          <div className="lg:col-span-7">
            <p className="text-xl md:text-2xl text-neutral-800 leading-relaxed font-light">
              {language === 'VI' ? project.description.vi : project.description.en}
            </p>
          </div>
        </div>

        {/* Before / After Slider Section */}
        <div className="mb-24">
          <h2 className="text-2xl font-bold mb-8 uppercase tracking-wide">{t.beforeAfterTitle}</h2>
          <div 
            className="relative w-full aspect-[4/3] md:aspect-[21/9] bg-neutral-100 overflow-hidden cursor-ew-resize select-none group"
            ref={containerRef}
            onMouseMove={handleSliderMove}
            onTouchMove={handleSliderMove}
          >
            {/* After Image (Full width) */}
            <div className="absolute inset-0 w-full h-full pointer-events-none">
              <ImageWithFallback 
                src={project.img} 
                alt={`${project.name} After`} 
                className="w-full h-full object-cover" 
              />
            </div>

            {/* Before Image (Cropped) */}
            <div 
              className="absolute inset-0 h-full pointer-events-none"
              style={{ clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}
            >
              <ImageWithFallback 
                src={project.beforeImg || project.img} 
                alt={`${project.name} Before`} 
                className="w-full h-full object-cover grayscale-[50%]" 
              />
            </div>

            {/* Slider Line & Handle */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-white pointer-events-none transition-opacity opacity-80 group-hover:opacity-100"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white text-black flex items-center justify-center">
                <MoveHorizontal size={24} />
              </div>
            </div>

            {/* Labels */}
            <div className="absolute top-6 left-6 bg-black/60 text-white px-4 py-2 text-xs md:text-sm font-medium tracking-widest uppercase backdrop-blur-sm pointer-events-none">
              {t.before}
            </div>
            <div className="absolute top-6 right-6 bg-black/60 text-white px-4 py-2 text-xs md:text-sm font-medium tracking-widest uppercase backdrop-blur-sm pointer-events-none">
              {t.after}
            </div>
          </div>
        </div>

        {/* Gallery Masonry / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 pb-32">
          {project.gallery?.map((imgUrl, i) => (
            <div 
              key={i} 
              // Pattern: 0: Full, 1: Half, 2: Half, 3: Full, 4: Half, 5: Half...
              className={`${i % 3 === 0 ? "md:col-span-2" : "col-span-1"}`}
            >
              <ImageWithFallback
                src={imgUrl}
                alt={`${project.name} gallery ${i + 1}`}
                className="w-full h-full min-h-[400px] object-cover max-h-[90vh]"
              />
            </div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="border-t border-neutral-200 py-24 md:py-32 flex flex-col items-center text-center mt-12">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 uppercase max-w-3xl">
            {language === 'VI' ? "Bạn có dự án tương tự?" : "Have a similar project?"}
          </h2>
          <p className="text-neutral-500 mb-10 text-lg md:text-xl font-light max-w-2xl">
            {language === 'VI' ? "Kết nối với chúng tôi để biến tầm nhìn của bạn thành hiện thực với giải pháp thiết kế và thi công chuẩn mực." : "Connect with us to turn your vision into reality with our exceptional design and build solutions."}
          </p>
          <Link 
            href="/contact" 
            className="group inline-flex items-center justify-center gap-3 bg-black text-white px-10 py-5 text-sm font-bold tracking-widest uppercase hover:bg-neutral-800 transition-colors"
          >
            <span>{language === 'VI' ? "Bắt đầu dự án" : "Start your project"}</span>
            <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Modern Previous / Next Navigation */}
      <div className="flex flex-col md:flex-row w-full h-[30vh] md:h-[40vh]">
        {/* Previous Project */}
        <Link href={`/projects/${prevProject.id}`} className="flex-1 relative group overflow-hidden bg-neutral-900 border-b md:border-b-0 md:border-r border-white/20">
          <ImageWithFallback 
            src={prevProject.img} 
            alt={prevProject.name} 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-50 group-hover:opacity-70" 
          />
          <div className="absolute inset-0 flex flex-col items-start justify-center p-8 md:p-12 text-white z-10 transition-transform duration-500 group-hover:translate-x-4">
            <span className="text-sm tracking-[0.2em] uppercase mb-4 opacity-70 flex items-center gap-2">
              <ArrowLeft size={16} /> {t.prevLabel}
            </span>
            <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold uppercase">{prevProject.name}</h3>
          </div>
        </Link>

        {/* Next Project */}
        <Link href={`/projects/${nextProject.id}`} className="flex-1 relative group overflow-hidden bg-neutral-900">
          <ImageWithFallback 
            src={nextProject.img} 
            alt={nextProject.name} 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-50 group-hover:opacity-70" 
          />
          <div className="absolute inset-0 flex flex-col items-end justify-center p-8 md:p-12 text-white z-10 transition-transform duration-500 group-hover:-translate-x-4">
            <span className="text-sm tracking-[0.2em] uppercase mb-4 opacity-70 flex items-center gap-2">
              {t.nextLabel} <ArrowRight size={16} />
            </span>
            <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold uppercase text-right">{nextProject.name}</h3>
          </div>
        </Link>
      </div>
    </div>
  );
}
