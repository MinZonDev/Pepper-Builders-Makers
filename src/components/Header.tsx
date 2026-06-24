"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import logoImg from "@/app/logo.svg";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPastHero, setIsPastHero] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const router = useRouter();
  const pathname = usePathname();

  const isHomePage = pathname === "/";
  const isTransparent = isHomePage && !isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      setIsPastHero(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes or resized
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: language === 'VI' ? "Dịch vụ" : "Services", path: "/services" },
    { name: language === 'VI' ? "Dự án" : "Projects", path: "/projects" },
    { name: language === 'VI' ? "Về chúng tôi" : "About", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: language === 'VI' ? "Liên hệ" : "Contact", path: "/contact" },
  ];

  const ctaText = language === 'VI' ? "Nhận Tư Vấn" : "Get a Quote";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isMobileMenuOpen 
          ? "py-6" 
          : isScrolled 
            ? "bg-white/95 backdrop-blur-md py-4 border-b border-neutral-200" 
            : isHomePage 
              ? "bg-transparent py-6"
              : "bg-white py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="z-50 relative flex items-center">
          <ImageWithFallback
            src={typeof logoImg === 'string' ? logoImg : logoImg.src}
            alt="Pepper Builders & Makers"
            className={`w-auto object-contain transition-all duration-500 ease-out ${
              isTransparent ? "h-20 md:h-20" : "h-14 md:h-14"
            } ${
              isMobileMenuOpen || isTransparent ? "brightness-0 invert" : ""
            }`}
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`text-sm tracking-wide transition-colors ${
                    isActive
                      ? (isTransparent ? "text-white font-semibold" : "text-black font-semibold")
                      : (isTransparent ? "text-white/80 hover:text-white" : "text-neutral-500 hover:text-black")
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className={`flex items-center gap-6 border-l pl-8 ${isTransparent ? "border-white/30" : "border-neutral-200"}`}>
            {/* Lang Switcher */}
            <div className={`flex items-center gap-2 text-sm ${isTransparent ? "text-white/80" : "text-neutral-500"}`}>
              <button 
                onClick={() => setLanguage('VI')}
                className={`transition-colors ${language === 'VI' ? (isTransparent ? 'text-white font-medium' : 'text-black font-medium') : (isTransparent ? 'hover:text-white' : 'hover:text-black')}`}
              >
                VI
              </button>
              <span>/</span>
              <button 
                onClick={() => setLanguage('EN')}
                className={`transition-colors ${language === 'EN' ? (isTransparent ? 'text-white font-medium' : 'text-black font-medium') : (isTransparent ? 'hover:text-white' : 'hover:text-black')}`}
              >
                EN
              </button>
            </div>
            
            {/* CTA Button — hidden on homepage until scrolled past hero */}
            <motion.button
              onClick={() => router.push('/contact')}
              initial={false}
              animate={{
                opacity: isHomePage && !isPastHero ? 0 : 1,
                x: isHomePage && !isPastHero ? 20 : 0,
                pointerEvents: isHomePage && !isPastHero ? 'none' as const : 'auto' as const,
              }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className={`${isTransparent ? "bg-white text-black hover:bg-neutral-200" : "bg-black text-white hover:bg-neutral-800"} text-xs font-bold uppercase tracking-widest px-6 py-3 transition-colors flex items-center gap-2 rounded-none`}
            >
              {ctaText} <ArrowRight size={14} />
            </motion.button>
          </div>
        </div>

        {/* Mobile Toggle & Actions */}
        <div className="md:hidden flex items-center gap-4 z-50">
          <div className={`flex items-center gap-2 text-sm ${isMobileMenuOpen || isTransparent ? "text-white/60" : "text-neutral-500"}`}>
            <button 
              onClick={() => setLanguage('VI')}
              className={`transition-colors ${language === 'VI' ? (isMobileMenuOpen || isTransparent ? 'text-white font-medium' : 'text-black font-medium') : (isMobileMenuOpen || isTransparent ? 'hover:text-white' : 'hover:text-black')}`}
            >
              VI
            </button>
            <span>/</span>
            <button 
              onClick={() => setLanguage('EN')}
              className={`transition-colors ${language === 'EN' ? (isMobileMenuOpen || isTransparent ? 'text-white font-medium' : 'text-black font-medium') : (isMobileMenuOpen || isTransparent ? 'hover:text-white' : 'hover:text-black')}`}
            >
              EN
            </button>
          </div>
          <button
            className={`p-2 -mr-2 ${isMobileMenuOpen || isTransparent ? "text-white" : "text-black"}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-0 left-0 w-full bg-black/80 backdrop-blur-xl h-screen flex flex-col pt-24 px-6 pb-8 -z-10"
            >
              <nav className="flex flex-col gap-6 text-2xl font-light mb-auto">
                {navLinks.map((link) => {
                  const isActive = pathname === link.path;
                  return (
                    <Link
                      key={link.name}
                      href={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={isActive ? "text-white font-medium" : "text-neutral-400 hover:text-white transition-colors"}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </nav>
              
              <div className="flex flex-col gap-6">
                <button 
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    router.push('/contact');
                  }}
                  className="w-full bg-white text-black text-sm font-bold uppercase tracking-widest py-4 flex items-center justify-center gap-2 hover:bg-neutral-200 transition-colors"
                >
                  {ctaText} <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
