"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import { motion } from "motion/react";
import { useLanguage } from "@/contexts/LanguageContext";

export function About() {
  const { language } = useLanguage();

  const t = {
    heroTitle1: language === 'VI' ? "Về chúng tôi" : "About Us",
    heroTitle2: language === 'VI' ? "" : "",
    introNew: language === 'VI'
      ? "Pepper là một tổ chức thiết kế và thi công được xây dựng xoay quanh một cách làm việc nhất quán.\n\nChúng tôi tin rằng những quyết định tốt không chỉ dựa trên thiết kế hay thi công riêng lẻ, mà cần được nhìn như một phần của toàn bộ quá trình sử dụng và vận hành công trình sau này."
      : "Pepper is a design-build firm defined by a consistent methodology.\n\nWe believe that good decisions are not driven by design or construction in isolation — they must be understood as part of how a building will be used and operated over its lifetime.",
    introP1: language === 'VI'
      ? "Thành lập từ năm 2010, Pepper Builders & Makers bắt đầu với một triết lý đơn giản: Xây dựng không chỉ là gạch vữa, mà là kiến tạo trải nghiệm sống. Chúng tôi là tập hợp của những kiến trúc sư, kỹ sư và những người thợ thủ công đam mê cái đẹp."
      : "Founded in 2010, Pepper Builders & Makers started with a simple philosophy: Construction is not just about bricks and mortar, but creating living experiences. We are a collective of architects, engineers, and craftsmen passionate about beauty.",
    introP2: language === 'VI'
      ? "Với mô hình Design & Build trọn gói, chúng tôi kiểm soát chất lượng khắt khe từ nét vẽ đầu tiên đến khi bàn giao chìa khóa, đảm bảo mỗi không gian đều mang đậm dấu ấn cá nhân của gia chủ và tối ưu hóa công năng vận hành."
      : "With a turnkey Design & Build model, we strictly control quality from the first stroke to handing over the keys, ensuring each space bears the personal mark of the owner and optimizes operational functionality.",
    methodTitle: language === 'VI' ? "PHƯƠNG PHÁP LÀM VIỆC CỦA PEPPER" : "PEPPER'S WORKING METHODOLOGY",
    methods: [
      {
        num: "01",
        title: language === 'VI' ? "Bắt đầu từ cách công trình sẽ được sử dụng" : "Start from how the building will be used",
        desc: language === 'VI' ? "Mỗi quyết định đều được xem xét từ góc nhìn của người sẽ sở hữu, vận hành hoặc sử dụng công trình trong thực tế." : "Every decision is examined from the perspective of those who will own, operate, or use the building in practice."
      },
      {
        num: "02",
        title: language === 'VI' ? "Thiết kế và thi công được phát triển cùng nhau" : "Design and construction developed in parallel",
        desc: language === 'VI' ? "Các giải pháp được kiểm chứng liên tục giữa ý tưởng, vật liệu, ngân sách và khả năng triển khai thực tế." : "Solutions are continuously cross-checked against ideas, materials, budget, and real-world feasibility."
      },
      {
        num: "03",
        title: language === 'VI' ? "Ưu tiên giá trị sử dụng dài hạn" : "Prioritize long-term operational value",
        desc: language === 'VI' ? "Chúng tôi quan tâm đến cách công trình vận hành sau khi hoàn thành, không chỉ thời điểm bàn giao." : "We care about how the building operates after completion, not just the handover moment."
      },
      {
        num: "04",
        title: language === 'VI' ? "Mỗi quyết định đều có lý do" : "Every decision has a reason",
        desc: language === 'VI' ? "Chúng tôi không theo đuổi các giải pháp chỉ vì xu hướng hay hình thức. Mỗi lựa chọn về bố trí, vật liệu hay chi phí đầu tư đều cần phục vụ một mục tiêu sử dụng cụ thể của công trình." : "We do not pursue solutions merely because of trends or aesthetics. Every choice of layout, material, or budget allocation must serve a specific functional purpose within the project."
      },
    ],
    expTitle: language === 'VI' ? "KINH NGHIỆM ĐƯỢC HÌNH THÀNH TỪ THỰC TẾ" : "EXPERIENCE SHAPED BY PRACTICE",
    expContent: language === 'VI'
      ? "Kinh nghiệm thiết kế, thi công và trực tiếp tham gia vào quá trình vận hành công trình giúp Pepper hiểu rõ hơn mối liên hệ giữa ý tưởng, triển khai và sử dụng thực tế. Thay vì xem đây là những giai đoạn tách biệt, chúng tôi tiếp cận chúng như những phần liên kết chặt chẽ của cùng một quá trình. Điều này giúp các quyết định được đưa ra nhất quán hơn từ giai đoạn đầu cho đến khi công trình đi vào sử dụng. Những kinh nghiệm đó được tích hợp thành một cách tiếp cận thống nhất trong mỗi dự án."
      : "Experience in design, construction, and hands-on involvement in building operations has given Pepper a deeper understanding of the relationship between ideas, execution, and real-world use. Rather than treating these as separate phases, we approach them as closely interconnected parts of a single continuous process. This enables more consistent decision-making from the earliest stage through to when the building is in use. These experiences are brought together into a unified approach in every project.",
    ctaTitle: language === 'VI' ? "MỖI DỰ ÁN ĐỀU BẮT ĐẦU TỪ NHỮNG CÂU HỎI ĐÚNG!" : "Every project starts with the right questions!",
    ctaBtn: language === 'VI' ? "Khởi tạo dự án" : "Start your project",
  };

  const fadeInUp = {
    hidden: { y: 24 },
    visible: { y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } }
  };

  return (
    <div className="bg-white">

      {/* Hero — khớp với phần viewport còn lại sau header */}
      <section className="mt-[var(--header-offset,8rem)] h-[calc(100vh-var(--header-offset,8rem))] flex flex-col lg:flex-row overflow-hidden">

        {/* Left: Image — full height */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] as const }}
          className="relative w-full lg:w-1/2 min-h-[45vh] lg:min-h-0 lg:h-full overflow-hidden"
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBsaXZpbmclMjByb29tfGVufDF8fHx8MTc4MTE4Njg1OXww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Pepper Builders Modern Architecture"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Right: Title + Intro — căn giữa dọc */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.14 } } }}
          className="w-full lg:w-1/2 flex items-center px-8 md:px-12 lg:px-16 py-12 lg:py-0"
        >
          <div className="max-w-lg">
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-mono tracking-tight leading-tight mb-8"
            >
              {t.heroTitle1}
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-neutral-600 font-light leading-relaxed whitespace-pre-line"
            >
              {t.introNew}
            </motion.p>
          </div>
        </motion.div>

      </section>

      {/* PHƯƠNG PHÁP LÀM VIỆC CỦA PEPPER */}
      <section className="py-24 md:py-32 container mx-auto px-6 md:px-12">
        <motion.h2
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          className="text-3xl md:text-5xl font-bold tracking-tight uppercase mb-16 md:mb-24"
        >
          {t.methodTitle}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {t.methods.map((item, i) => (
            <motion.div
              key={i}
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="group border-t border-neutral-200 pt-8"
            >
              <span className="text-sm font-mono text-neutral-400 mb-4 block">{item.num}</span>
              <h3 className="text-xl md:text-2xl font-bold mb-4 group-hover:translate-x-2 transition-transform duration-300">{item.title}</h3>
              <p className="text-neutral-500 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* KINH NGHIỆM ĐƯỢC HÌNH THÀNH TỪ THỰC TẾ */}
      <section className="py-24 md:py-32 bg-black text-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            <div className="lg:col-span-5">
              <motion.h2
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight uppercase"
              >
                {t.expTitle}
              </motion.h2>
            </div>
            <motion.div
              className="lg:col-span-7"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
              <p className="text-lg md:text-xl text-neutral-300 font-light leading-relaxed">
                {t.expContent}
              </p>
            </motion.div>
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
