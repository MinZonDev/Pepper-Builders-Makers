"use client";

import Link from "next/link";
import { ArrowRight, Hexagon, Square, Triangle, Circle } from "lucide-react";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import { motion } from "motion/react";
import { useLanguage } from "@/contexts/LanguageContext";

export function About() {
  const { language } = useLanguage();

  const t = {
    heroTitle1: language === 'VI' ? "Kiến tạo" : "Crafting",
    heroTitle2: language === 'VI' ? "không gian." : "spaces.",
    heroTitle3: language === 'VI' ? "Định hình" : "Shaping",
    heroTitle4: language === 'VI' ? "phong cách." : "lifestyles.",
    introQuote: language === 'VI' 
      ? "Sự hoàn mỹ không đến từ những điều lớn lao, mà từ sự tận tâm trong từng chi tiết nhỏ nhất." 
      : "Perfection does not come from grand things, but from dedication to the smallest details.",
    introP1: language === 'VI' 
      ? "Thành lập từ năm 2010, Pepper Builders & Makers bắt đầu với một triết lý đơn giản: Xây dựng không chỉ là gạch vữa, mà là kiến tạo trải nghiệm sống. Chúng tôi là tập hợp của những kiến trúc sư, kỹ sư và những người thợ thủ công đam mê cái đẹp." 
      : "Founded in 2010, Pepper Builders & Makers started with a simple philosophy: Construction is not just about bricks and mortar, but creating living experiences. We are a collective of architects, engineers, and craftsmen passionate about beauty.",
    introP2: language === 'VI' 
      ? "Với mô hình Design & Build trọn gói, chúng tôi kiểm soát chất lượng khắt khe từ nét vẽ đầu tiên đến khi bàn giao chìa khóa, đảm bảo mỗi không gian đều mang đậm dấu ấn cá nhân của gia chủ và tối ưu hóa công năng vận hành." 
      : "With a turnkey Design & Build model, we strictly control quality from the first stroke to handing over the keys, ensuring each space bears the personal mark of the owner and optimizes operational functionality.",
    stats: [
      { num: "15+", label: language === 'VI' ? "Năm kinh nghiệm" : "Years Experience" },
      { num: "0", label: language === 'VI' ? "Phát sinh chi phí" : "Hidden Costs" },
      { num: "100%", label: language === 'VI' ? "Đúng tiến độ" : "On-time Completion" },
      { num: "100%", label: language === 'VI' ? "Cam kết chất lượng" : "Quality Guarantee" },
    ],
    valuesTitle: language === 'VI' ? "Giá trị cốt lõi" : "Core Values",
    values: [
      { 
        icon: <Hexagon size={24} className="mb-6 stroke-1 text-neutral-400" />,
        title: language === 'VI' ? "Tinh Tế" : "Refinement", 
        desc: language === 'VI' ? "Mọi đường nét, vật liệu đều được lựa chọn và thi công với độ chính xác cao nhất." : "Every line and material is selected and executed with the highest precision." 
      },
      { 
        icon: <Triangle size={24} className="mb-6 stroke-1 text-neutral-400" />,
        title: language === 'VI' ? "Sáng Tạo" : "Innovation", 
        desc: language === 'VI' ? "Không ngừng cập nhật xu hướng và công nghệ mới để mang lại giải pháp đột phá." : "Constantly updating trends and new technologies to bring breakthrough solutions." 
      },
      { 
        icon: <Circle size={24} className="mb-6 stroke-1 text-neutral-400" />,
        title: language === 'VI' ? "Bền Vững" : "Sustainability", 
        desc: language === 'VI' ? "Ưu tiên vật liệu thân thiện môi trường và thiết kế tối ưu hóa năng lượng tự nhiên." : "Prioritizing eco-friendly materials and designs that optimize natural energy." 
      },
      { 
        icon: <Square size={24} className="mb-6 stroke-1 text-neutral-400" />,
        title: language === 'VI' ? "Tận Tâm" : "Dedication", 
        desc: language === 'VI' ? "Đồng hành cùng khách hàng như xây dựng chính ngôi nhà của mình." : "Accompanying clients as if building our own home." 
      },
    ],
    processTitle: language === 'VI' ? "Quy trình làm việc" : "How we work",
    process: [
      { num: "01", title: language === 'VI' ? "Tiếp nhận & Đánh giá" : "Receive & Evaluate", desc: language === 'VI' ? "Ghi nhận thông tin dự án, mục tiêu và kỳ vọng. Phân tích tính khả thi, quy mô và ngân sách dự kiến." : "Record project information, goals, and expectations. Analyze feasibility, scale, and estimated budget." },
      { num: "02", title: language === 'VI' ? "Tư vấn & Thống nhất phương án" : "Consulting & Concept Agreement", desc: language === 'VI' ? "Thảo luận trực tiếp, làm rõ yêu cầu và thống nhất hướng tiếp cận." : "Direct discussion, clarify requirements and agree on the approach." },
      { num: "03", title: language === 'VI' ? "Báo giá & Hợp đồng" : "Quotation & Contract", desc: language === 'VI' ? "Trình bày đề xuất chi tiết, ký kết hợp đồng minh bạch." : "Present detailed proposal, transparent contract signing." },
      { num: "04", title: language === 'VI' ? "Thiết kế & Phối cảnh 3D" : "Design & 3D Rendering", desc: language === 'VI' ? "Phát triển hồ sơ kiến trúc, bản vẽ kỹ thuật và phối cảnh 3D theo yêu cầu." : "Develop architectural documents, technical drawings and 3D renderings as required." },
      { num: "05", title: language === 'VI' ? "Thi công & Giám sát" : "Construction & Supervision", desc: language === 'VI' ? "Triển khai công trình với kiểm soát chặt chẽ Chất lượng – Chi phí – Tiến độ." : "Implement construction with strict control of Quality - Cost - Schedule." },
      { num: "06", title: language === 'VI' ? "Hoàn thành & Bàn giao" : "Completion & Handover", desc: language === 'VI' ? "Nghiệm thu, tất toán toàn bộ chi phí, bàn giao tài liệu và bảo hành dự án." : "Acceptance, settle all costs, handover documents and project warranty." },
    ],
    ctaTitle: language === 'VI' ? "Cùng kiến tạo không gian tiếp theo của bạn." : "Let's build your next space together.",
    ctaBtn: language === 'VI' ? "Khởi tạo dự án" : "Start your project",
  };

  const fadeInUp = {
    hidden: { y: 24 },
    visible: { y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } }
  };

  return (
    <div className="pt-32 bg-white">
      
      {/* Hero Section */}
      <section className="container mx-auto px-6 md:px-12 mb-12">
        <motion.h1 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
          className="text-5xl md:text-7xl lg:text-[7rem] font-bold tracking-tighter uppercase leading-[0.9]"
        >
          <motion.div variants={fadeInUp} className="block text-neutral-400">{t.heroTitle1}</motion.div>
          <motion.div variants={fadeInUp} className="block text-black ml-0 md:ml-24">{t.heroTitle2}</motion.div>
          <motion.div variants={fadeInUp} className="block text-neutral-400 mt-4 md:mt-8">{t.heroTitle3}</motion.div>
          <motion.div variants={fadeInUp} className="block text-black ml-0 md:ml-48">{t.heroTitle4}</motion.div>
        </motion.h1>
      </section>

      {/* Big Hero Image */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] as const }}
        className="w-full h-[60vh] md:h-[80vh]"
      >
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBsaXZpbmclMjByb29tfGVufDF8fHx8MTc4MTE4Njg1OXww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Pepper Builders Modern Architecture"
          className="w-full h-full object-cover"
        />
      </motion.section>

      {/* Intro & Philosophy Section */}
      <section className="py-24 md:py-32 container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-5xl font-light leading-snug tracking-tight text-black">
              "{t.introQuote}"
            </h2>
          </motion.div>
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
            className="flex flex-col gap-8 text-lg text-neutral-600 font-light leading-relaxed"
          >
            <p>{t.introP1}</p>
            <p>{t.introP2}</p>
          </motion.div>
        </div>
      </section>

      {/* Stats Divider */}
      <section className="border-y border-neutral-200 bg-neutral-50">
        <div className="container mx-auto px-6 md:px-12 py-16 md:py-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
            {t.stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-center md:text-left"
              >
                <div className="text-5xl md:text-6xl font-bold tracking-tighter mb-4">{stat.num}</div>
                <div className="text-sm uppercase tracking-widest text-neutral-500 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 md:py-32 container mx-auto px-6 md:px-12">
        <motion.h2 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          className="text-sm font-bold tracking-widest uppercase mb-16 text-neutral-400"
        >
          {t.valuesTitle}
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {t.values.map((val, i) => (
            <motion.div 
              key={i}
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="group border-t border-neutral-200 pt-8"
            >
              {val.icon}
              <h3 className="text-2xl font-bold mb-4 group-hover:translate-x-2 transition-transform duration-300">{val.title}</h3>
              <p className="text-neutral-500 leading-relaxed max-w-sm">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process (Sticky Layout) */}
      <section className="py-24 md:py-32 bg-black text-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
            
            {/* Sticky Header */}
            <div className="lg:w-1/3">
              <div className="sticky top-32">
                <motion.h2 
                  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                  className="text-4xl md:text-5xl font-bold tracking-tight uppercase"
                >
                  {t.processTitle}
                </motion.h2>
              </div>
            </div>

            {/* Scrollable Steps */}
            <div className="lg:w-2/3">
              <div className="space-y-16 md:space-y-24">
                {t.process.map((step, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row gap-6 md:gap-12 group"
                  >
                    <div className="text-4xl md:text-5xl font-light text-neutral-700 font-mono group-hover:text-white transition-colors duration-500 shrink-0">
                      {step.num}
                    </div>
                    <div className="pt-2 md:pt-4">
                      <h3 className="text-2xl md:text-3xl font-bold mb-4">{step.title}</h3>
                      <p className="text-lg text-neutral-400 leading-relaxed font-light">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Big CTA */}
      <section className="py-32 md:py-48 text-center px-6 container mx-auto">
        <motion.div
           initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-12 max-w-3xl mx-auto leading-tight">
            {t.ctaTitle}
          </h2>
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center gap-3 bg-black text-white px-10 py-5 font-medium uppercase tracking-widest hover:bg-neutral-800 transition-all hover:scale-105"
          >
            {t.ctaBtn} <ArrowRight size={20} />
          </Link>
        </motion.div>
      </section>

    </div>
  );
}
