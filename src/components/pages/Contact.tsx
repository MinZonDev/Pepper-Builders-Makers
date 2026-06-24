"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Clock, MapPin, Phone, Mail, Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import * as Select from "@radix-ui/react-select";
import { Check, ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { language } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Mock submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  const t = {
    title: language === 'VI' ? "TRAO ĐỔI VỀ DỰ ÁN CỦA BẠN" : "LET'S TALK ABOUT YOUR PROJECT",
    desc: language === 'VI'
      ? "Mỗi dự án đều có những yêu cầu và điều kiện khác nhau. Hãy chia sẻ một vài thông tin ban đầu để Pepper có thể hiểu rõ hơn về nhu cầu của bạn."
      : "Every project has different requirements and conditions. Share a few details so Pepper can better understand your needs.",
    hq: language === 'VI' ? "Trụ sở chính" : "Headquarters",
    hqVal: language === 'VI' ? "19 Hoàng Sa, Phường Sài Gòn, TP.HCM" : "19 Hoang Sa, Sai Gon Ward, HCMC",
    hotline: "Hotline",
    email: "Email",
    hours: language === 'VI' ? "Giờ làm việc" : "Working Hours",
    hoursVal: language === 'VI' ? "Thứ 2 - Thứ 6: 8:30 - 17:30" : "Mon - Fri: 8:30 AM - 5:30 PM",
    formTitle: language === 'VI' ? "Gửi yêu cầu tư vấn" : "Send a consultation request",
    thxTitle: language === 'VI' ? "Cảm ơn bạn!" : "Thank you!",
    thxDesc: language === 'VI' ? "Yêu cầu của bạn đã được gửi thành công. Chúng tôi sẽ liên hệ lại trong thời gian sớm nhất." : "Your request has been sent successfully. We will get back to you as soon as possible.",
    thxBtn: language === 'VI' ? "Gửi yêu cầu khác" : "Send another request",
    fName: language === 'VI' ? "Họ tên *" : "Full Name *",
    fNameP: "",
    fEmail: "Email *",
    fPhone: language === 'VI' ? "Số điện thoại *" : "Phone Number *",
    fType: language === 'VI' ? "Loại dự án *" : "Project Type *",
    fTypeP: language === 'VI' ? "Chọn loại dự án" : "Select project type",
    types: language === 'VI' ? ['Nhà ở', 'BĐS cho thuê', 'Nhà hàng', 'Khách sạn', 'Văn phòng', 'Khác'] : ['Residential', 'Rental Property', 'Restaurant', 'Hotel', 'Office', 'Other'],
    fBudget: language === 'VI' ? "Ngân sách dự kiến" : "Estimated Budget",
    fBudgetP: "",
    fDesc: language === 'VI' ? "Mô tả nhu cầu *" : "Requirements Description *",
    fDescP: "",
    btnSending: language === 'VI' ? "Đang gửi..." : "Sending...",
    btnSubmit: language === 'VI' ? "Gửi thông tin" : "Send Request",
  };

  return (
    <div className="pt-32 min-h-screen bg-white">
      <div className="container mx-auto px-6 md:px-12 py-16">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Info Section */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
              {t.title}
            </h1>
            <p className="text-lg text-neutral-600 leading-relaxed mb-12">
              {t.desc}
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex gap-4 items-start">
                <MapPin className="text-neutral-400 shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold mb-1">{t.hq}</h3>
                  <p className="text-neutral-600">{t.hqVal}</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <Phone className="text-neutral-400 shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold mb-1">{t.hotline}</h3>
                  <a href="tel:+84931888149" className="text-neutral-600 hover:text-black transition-colors">(+84) 931 888 149</a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <Mail className="text-neutral-400 shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold mb-1">{t.email}</h3>
                  <a href="mailto:info@pepper.builders" className="text-neutral-600 hover:text-black transition-colors">info@pepper.builders</a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <Clock className="text-neutral-400 shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold mb-1">{t.hours}</h3>
                  <p className="text-neutral-600">{t.hoursVal}</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-12">
              <a href="https://zalo.me/0931888149" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-neutral-200 flex items-center justify-center text-neutral-400 hover:text-black hover:border-black transition-all" aria-label="Zalo">
                <MessageCircle size={18} />
              </a>
              <a href="https://www.facebook.com/PepperBuilders/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-neutral-200 flex items-center justify-center text-neutral-400 hover:text-black hover:border-black transition-all" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="https://www.instagram.com/pepper.builders/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-neutral-200 flex items-center justify-center text-neutral-400 hover:text-black hover:border-black transition-all" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="https://www.linkedin.com/company/pepper-builders-makers/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-neutral-200 flex items-center justify-center text-neutral-400 hover:text-black hover:border-black transition-all" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
            </div>

            <a
              href="https://maps.google.com/maps?q=Pepper+House+19+Hoang+Sa+Ho+Chi+Minh+City"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-64 overflow-hidden border border-neutral-200 group"
              aria-label="Xem trên Google Maps"
            >
              <ImageWithFallback
                src="/map.png"
                alt="Pepper Builders & Makers — 19 Hoàng Sa, TP.HCM"
                className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
              />
            </a>
          </div>

          {/* Form Section */}
          <div className="bg-neutral-50 p-8 md:p-12">
            <h2 className="text-2xl font-bold mb-8">{t.formTitle}</h2>
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-24">
                <div className="w-16 h-16 bg-black text-white flex items-center justify-center mb-6">
                  <Check size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">{t.thxTitle}</h3>
                <p className="text-neutral-600">{t.thxDesc}</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-sm font-medium border-b border-black pb-1"
                >
                  {t.thxBtn}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">{t.fName}</label>
                  <input type="text" id="name" required className="w-full px-4 py-3 bg-white border border-neutral-200 focus:border-black focus:outline-none transition-colors" placeholder={t.fNameP} />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">{t.fEmail}</label>
                    <input type="email" id="email" required className="w-full px-4 py-3 bg-white border border-neutral-200 focus:border-black focus:outline-none transition-colors" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">{t.fPhone}</label>
                    <input type="tel" id="phone" required className="w-full px-4 py-3 bg-white border border-neutral-200 focus:border-black focus:outline-none transition-colors" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">{t.fType}</label>
                  <Select.Root required>
                    <Select.Trigger className="w-full px-4 py-3 bg-white border border-neutral-200 focus:border-black focus:outline-none transition-colors flex justify-between items-center text-left">
                      <Select.Value placeholder={t.fTypeP} />
                      <Select.Icon>
                        <ChevronDown size={16} className="text-neutral-400" />
                      </Select.Icon>
                    </Select.Trigger>
                    <Select.Portal>
                      <Select.Content className="bg-white border border-neutral-200 z-50 w-[var(--radix-select-trigger-width)]">
                        <Select.Viewport>
                          <Select.Group>
                            {t.types.map(item => (
                              <Select.Item key={item} value={item} className="px-4 py-3 hover:bg-neutral-50 cursor-pointer outline-none flex justify-between items-center">
                                <Select.ItemText>{item}</Select.ItemText>
                                <Select.ItemIndicator>
                                  <Check size={16} />
                                </Select.ItemIndicator>
                              </Select.Item>
                            ))}
                          </Select.Group>
                        </Select.Viewport>
                      </Select.Content>
                    </Select.Portal>
                  </Select.Root>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-neutral-700 mb-2">{t.fBudget}</label>
                  <input type="text" id="budget" className="w-full px-4 py-3 bg-white border border-neutral-200 focus:border-black focus:outline-none transition-colors" placeholder={t.fBudgetP} />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">{t.fDesc}</label>
                  <textarea id="message" required rows={5} className="w-full px-4 py-3 bg-white border border-neutral-200 focus:border-black focus:outline-none transition-colors resize-none" placeholder={t.fDescP} />
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-black text-white py-4 font-medium tracking-wide hover:bg-neutral-800 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? t.btnSending : t.btnSubmit}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
