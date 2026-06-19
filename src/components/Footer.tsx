"use client";

import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import logoImg from "@/app/logo.svg";

export function Footer() {
  const { language } = useLanguage();

  const t = {
    tagline: language === 'VI' ? "Kiến tạo không gian.\nTạo lập giá trị." : "Create Spaces.\nCreate Value.",
    navTitle: language === 'VI' ? 'ĐIỀU HƯỚNG' : 'NAVIGATION',
    navLinks: [
      { name: language === 'VI' ? 'Giới thiệu' : 'About', path: '/about' },
      { name: language === 'VI' ? 'Dịch vụ' : 'Services', path: '/services' },
      { name: language === 'VI' ? 'Dự án' : 'Projects', path: '/projects' },
      { name: language === 'VI' ? 'Liên hệ' : 'Contact', path: '/contact' },
    ],
    servicesTitle: language === 'VI' ? 'DỊCH VỤ' : 'SERVICES',
    servicesLinks: [
      { name: language === 'VI' ? 'Cho thuê & Lưu trú' : 'Rental & Hospitality', path: '/services' },
      { name: language === 'VI' ? 'Nhà ở Cá nhân hóa' : 'Personalized Homes', path: '/services' },
      { name: language === 'VI' ? 'Không gian Thương mại' : 'Commercial Spaces', path: '/services' },
    ],
    contactTitle: language === 'VI' ? 'LIÊN HỆ' : 'CONTACT',
    address: '19 Hoàng Sa, Phường Sài Gòn, TP.HCM',
    phone: '(+84) 931 888 149',
    email: 'info@pepper.builders',
    copyright: language === 'VI' ? '© 2026 Pepper Builders & Makers. Bảo lưu mọi quyền.' : '© 2026 Pepper Builders & Makers. All rights reserved.',
    design: language === 'VI' ? 'Thiết kế & Thi công trọn gói.' : 'Design & Build.'
  };

  return (
    <footer className="bg-[#0f1115] text-white pt-24 pb-12 mt-auto w-full">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-12 md:gap-12 lg:gap-8 mb-16 md:mb-20">

          {/* Brand Column */}
          <div className="col-span-1 md:col-span-4 lg:col-span-4 flex flex-col items-start order-1 md:order-1">
            <Link href="/" className="mb-6">
              <ImageWithFallback
                src={typeof logoImg === 'string' ? logoImg : logoImg.src}
                alt="Pepper Builders & Makers"
                className="h-10 md:h-12 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-lg md:text-xl lg:text-2xl font-mono text-white mb-8 md:mb-10 whitespace-pre-line leading-snug break-words max-w-full">
              {t.tagline}
            </p>
            <div className="flex gap-3 md:gap-4 flex-wrap">
              <a href="https://www.facebook.com/PepperBuilders/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-8 h-8 md:w-10 md:h-10 border border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white transition-all"><Facebook size={16} /></a>
              <a href="https://www.instagram.com/pepper.builders/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-8 h-8 md:w-10 md:h-10 border border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white transition-all"><Instagram size={16} /></a>
              <a href="https://www.linkedin.com/company/pepper-builders-makers/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-8 h-8 md:w-10 md:h-10 border border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white transition-all"><Linkedin size={16} /></a>
            </div>
          </div>

          {/* Contact */}
          <div className="col-span-1 md:col-span-3 lg:col-span-3 order-2 md:order-4">
            <h3 className="text-[11px] font-bold tracking-[0.2em] uppercase text-neutral-500 mb-6 md:mb-8">{t.contactTitle}</h3>
            <div className="flex flex-col gap-3 md:gap-5 text-sm text-neutral-400 break-words">
              <p className="whitespace-pre-line leading-relaxed">{t.address}</p>
              <p>{t.phone}</p>
              <p className="break-all">{t.email}</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2 lg:col-start-6 order-3 md:order-2">
            <h3 className="text-[11px] font-bold tracking-[0.2em] uppercase text-neutral-500 mb-6 md:mb-8">{t.navTitle}</h3>
            <ul className="flex flex-col gap-3 md:gap-5">
              {t.navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.path} className="text-neutral-400 hover:text-white text-sm transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1 md:col-span-3 lg:col-span-2 order-4 md:order-3">
            <h3 className="text-[11px] font-bold tracking-[0.2em] uppercase text-neutral-500 mb-6 md:mb-8">{t.servicesTitle}</h3>
            <ul className="flex flex-col gap-3 md:gap-5">
              {t.servicesLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.path} className="text-neutral-400 hover:text-white text-sm transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-neutral-800/80 pt-8 mt-12 relative">
          <p className="text-xs text-neutral-500">{t.copyright}</p>
          <p className="text-xs text-neutral-500 mt-4 md:mt-0">{t.design}</p>
        </div>
      </div>
    </footer>
  );
}
