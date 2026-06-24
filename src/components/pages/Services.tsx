"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, ChevronDown } from "lucide-react";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import * as Accordion from "@radix-ui/react-accordion";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "motion/react";

export function Services() {
  const { language } = useLanguage();

  const t = {
    headerTitle: language === 'VI' ? "Ba Nhóm Công Trình Chính" : "Our Services",
    headerDesc: language === 'VI' ? "Mỗi nhóm công trình có mục tiêu sử dụng, yêu cầu vận hành và cách tiếp cận khác nhau. Pepper hiện tập trung vào ba nhóm dưới đây." : "Each project type has different usage goals, operational requirements, and approaches. Pepper currently focuses on the three types below.",
    viewProjects: language === 'VI' ? "Xem dự án" : "Explore projects",
    ctaBottomTitle: language === 'VI' ? "BẮT ĐẦU BẰNG MỘT CUỘC TRAO ĐỔI" : "START WITH A CONVERSATION",
    ctaBottomDesc: language === 'VI' ? "Mỗi dự án đều có những yêu cầu và điều kiện khác nhau.\nMột cuộc trao đổi ban đầu sẽ giúp làm rõ nhu cầu, điều kiện thực tế của dự án và định hướng bước tiếp theo." : "Every project has different requirements and conditions.\nAn initial conversation will help clarify needs, real project conditions, and the direction for next steps.",
    ctaBottomBtn: language === 'VI' ? "NHẬN TƯ VẤN DỰ ÁN" : "GET PROJECT CONSULTATION",
    faqTitle: language === 'VI' ? "Câu hỏi thường gặp" : "Frequently Asked Questions",
    faqP: language === 'VI' ? "Bạn có câu hỏi khác? Đừng ngần ngại liên hệ với chúng tôi." : "Have other questions? Don't hesitate to contact us.",
    faqBtn: language === 'VI' ? "Gửi câu hỏi cho Pepper" : "Send questions to Pepper",
    processTitle: language === 'VI' ? "Quy trình làm việc" : "Working Process",
  };

  const process = [
    { num: "01", title: language === 'VI' ? "Tiếp nhận dự án & làm rõ mục tiêu sử dụng/khai thác" : "Project Intake & Clarify Usage Goals", desc: language === 'VI' ? "Bắt đầu bằng việc tìm hiểu nhu cầu, hiện trạng và mục tiêu sử dụng hoặc khai thác của dự án." : "Begin by understanding the needs, current state, and usage or operational objectives of the project." },
    { num: "02", title: language === 'VI' ? "Định hình giải pháp & ngân sách dự án" : "Define Solution & Project Budget", desc: language === 'VI' ? "Đề xuất giải pháp phù hợp và xây dựng ngân sách sơ bộ để ra quyết định." : "Propose a suitable solution and develop a preliminary budget to support decision-making." },
    { num: "03", title: language === 'VI' ? "Ký kết hợp đồng & khởi động dự án" : "Sign Contract & Launch Project", desc: language === 'VI' ? "Thống nhất phạm vi công việc, kế hoạch triển khai và chính thức khởi động dự án." : "Agree on scope of work, implementation plan, and formally launch the project." },
    { num: "04", title: language === 'VI' ? "Phát triển thiết kế và lập kế hoạch triển khai" : "Develop Design & Implementation Plan", desc: language === 'VI' ? "Hoàn thiện các giải pháp thiết kế, vật liệu và kế hoạch thực hiện cho từng giai đoạn của dự án." : "Finalize design solutions, materials, and implementation plans for each phase of the project." },
    { num: "05", title: language === 'VI' ? "Thi công đồng bộ và hoàn thiện công trình" : "Integrated Construction & Delivery", desc: language === 'VI' ? "Thiết kế và thi công được phối hợp xuyên suốt để đảm bảo chất lượng, tiến độ và tính đồng bộ của công trình." : "Design and construction are coordinated throughout to ensure quality, schedule, and consistency of the project." },
    { num: "06", title: language === 'VI' ? "Bàn giao & đồng hành về sau" : "Handover & Ongoing Support", desc: language === 'VI' ? "Bàn giao công trình, hướng dẫn sử dụng/vận hành và hỗ trợ về sau." : "Hand over the project, provide usage and operation guidance, and offer ongoing support." },
  ];

  const services = [
    {
      id: "Hospitality",
      num: "01",
      title: language === 'VI' ? "CÔNG TRÌNH LƯU TRÚ & KHAI THÁC CHO THUÊ" : "RENTAL & HOSPITALITY PROPERTIES",
      desc: language === 'VI' ? "BẤT ĐỘNG SẢN KHAI THÁC CHO THUÊ  ·  RESORT  ·  KHÁCH SẠN  ·  HOMESTAY  ·  CĂN HỘ DỊCH VỤ" : "Hotels, Homestays, Serviced Apartments, Restaurants, Cafes, Rental Properties",
      content: language === 'VI'
        ? "Một công trình lưu trú không chỉ cần đẹp khi hoàn thành, mà còn phải vận hành hiệu quả trong nhiều năm sau đó. Pepper tiếp cận các dự án này từ góc nhìn của người sở hữu và vận hành tài sản. Với kinh nghiệm trực tiếp phát triển và khai thác các công trình lưu trú, chúng tôi tập trung vào việc tạo ra những không gian phù hợp với mục tiêu đầu tư, dễ vận hành và duy trì hiệu quả sử dụng trong dài hạn."
        : "A hospitality or rental property must be more than attractive at handover — it must operate efficiently for years to come. Pepper approaches these projects from the perspective of the owner and operator. Drawing on direct experience in developing and managing hospitality assets, we focus on creating spaces aligned with investment goals, straightforward to operate, and built for long-term performance.",
      cta: language === 'VI' ? "Xem các công trình lưu trú" : "View hospitality projects",
      img: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGludGVyaW9yfGVufDF8fHx8MTc4MTE1NjA5NHww&ixlib=rb-4.1.0&q=80&w=1080",
      reverse: false
    },
    {
      id: "Residential",
      num: "02",
      title: language === 'VI' ? "NHÀ Ở CÁ NHÂN HÓA" : "PERSONALIZED HOMES",
      desc: language === 'VI' ? "NHÀ Ở TƯ NHÂN  ·  CĂN HỘ CAO CẤP" : "Townhouses, Villas, Apartments — Designed for your lifestyle",
      content: language === 'VI'
        ? "Mỗi gia đình có những thói quen, nhu cầu và cách sử dụng không gian khác nhau. Pepper không bắt đầu từ một phong cách thiết kế có sẵn, mà từ cách ngôi nhà sẽ được sử dụng trong thực tế. Từ đó, chúng tôi xây dựng những không gian phù hợp với từng gia đình và vẫn đáp ứng tốt nhu cầu sử dụng trong nhiều năm sau khi hoàn thành."
        : "Every household has different habits, needs, and ways of using space. Pepper does not begin from a preset style, but from how the home will actually be lived in. From there, we build spaces that fit each family — and continue to meet their needs well into the years after completion.",
      cta: language === 'VI' ? "Xem dự án" : "Explore projects",
      img: "https://images.unsplash.com/photo-1564078516393-cf04bd966897?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjBsaXZpbmclMjByb29tfGVufDF8fHx8MTc4MTEyODQ1M3ww&ixlib=rb-4.1.0&q=80&w=1080",
      reverse: true
    },
    {
      id: "Commercial",
      num: "03",
      title: language === 'VI' ? "KHÔNG GIAN THƯƠNG MẠI" : "COMMERCIAL SPACES",
      desc: language === 'VI' ? "NHÀ HÀNG VÀ CỬA HÀNG BÁN LẺ" : "Offices, Showrooms, Retail, Commercial Spaces",
      content: language === 'VI'
        ? "Không gian thương mại là nơi trải nghiệm khách hàng và hoạt động kinh doanh diễn ra mỗi ngày. Pepper tiếp cận các dự án thương mại từ nhu cầu thực tế của từng mô hình kinh doanh. Chúng tôi tập trung vào việc xây dựng những không gian phù hợp với hoạt động vận hành và trải nghiệm khách hàng trong quá trình sử dụng lâu dài."
        : "Commercial spaces are where customer experience and daily business operations unfold. Pepper approaches each commercial project from the specific operational needs of its business model — building spaces that support both day-to-day running and customer experience over the long term.",
      cta: language === 'VI' ? "Xem các công trình thương mại" : "View commercial projects",
      img: "https://images.unsplash.com/photo-1558959356-2f36c7322d3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvcGVuJTIwb2ZmaWNlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzgxMTg2ODU5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      reverse: false
    }
  ];

  const faqs = [
    {
      q: language === 'VI' ? "KHI NÀO PEPPER LÀ LỰA CHỌN PHÙ HỢP?" : "When is Pepper the right choice?",
      a: language === 'VI'
        ? "Pepper phù hợp với những khách hàng đang tìm kiếm một đơn vị có thể đồng hành xuyên suốt từ ý tưởng đến khi công trình hoàn thành, đồng thời quan tâm đến hiệu quả sử dụng và giá trị lâu dài của tài sản."
        : "Pepper is the right fit for clients looking for a partner who can accompany them from concept to completion, while also caring about the long-term use efficiency and asset value."
    },
    {
      q: language === 'VI' ? "PEPPER CÓ NHẬN DỰ ÁN CẢI TẠO KHÔNG?" : "Does Pepper accept renovation projects?",
      a: language === 'VI'
        ? "Có. Pepper thực hiện cả công trình xây mới và cải tạo, tùy thuộc vào hiện trạng và mục tiêu sử dụng của từng dự án."
        : "Yes. Pepper handles both new construction and renovation projects, depending on the current state and usage objectives of each project."
    },
    {
      q: language === 'VI' ? "PEPPER CÓ NHẬN DỰ ÁN VỚI QUY MÔ NHỎ KHÔNG?" : "Does Pepper take on small-scale projects?",
      a: language === 'VI'
        ? "Có. Điều quan trọng không nằm ở quy mô lớn hay nhỏ, mà là mức độ phù hợp giữa dự án và cách tiếp cận của Pepper. Mỗi dự án sẽ được trao đổi và đánh giá riêng trước khi triển khai."
        : "Yes. What matters is not the scale, but the fit between the project and Pepper's approach. Each project is discussed and assessed individually before moving forward."
    },
    {
      q: language === 'VI' ? "TÔI CHƯA CÓ Ý TƯỞNG HOẶC KẾ HOẠCH RÕ RÀNG, PEPPER CÓ THỂ HỖ TRỢ KHÔNG?" : "I don't have a clear idea or plan yet — can Pepper help?",
      a: language === 'VI'
        ? "Có. Nhiều dự án bắt đầu từ một nhu cầu hoặc định hướng ban đầu thay vì một kế hoạch hoàn chỉnh. Pepper có thể cùng bạn thảo luận để xây dựng một bản định hướng dự án rõ ràng, dựa trên mục tiêu sử dụng, điều kiện thực tế và kinh nghiệm triển khai của đội ngũ. Đây sẽ là nền tảng giúp dự án có một định hướng rõ ràng và nhất quán trong suốt quá trình triển khai."
        : "Yes. Many projects start from an initial need or direction rather than a complete plan. Pepper can work with you to build a clear project brief based on usage goals, real conditions, and the team's implementation experience — providing a consistent foundation throughout the process."
    },
    {
      q: language === 'VI' ? "THỜI GIAN HOÀN THÀNH MỘT DỰ ÁN THƯỜNG KÉO DÀI BAO LÂU?" : "How long does a project typically take to complete?",
      a: language === 'VI'
        ? "Thời gian thực hiện phụ thuộc vào quy mô, hiện trạng và phạm vi công việc của từng dự án. Sau khi trao đổi ban đầu, Pepper sẽ đề xuất kế hoạch triển khai phù hợp."
        : "Completion time depends on the scale, current state, and scope of each project. After the initial discussion, Pepper will propose a suitable implementation plan."
    }
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <div className="pt-20 md:pt-28">
      {/* Back to Home */}
      <div className="container mx-auto px-6 md:px-12 pt-12">
      </div>
      {/* Editorial Hero Section */}
      <section className="bg-white py-24 md:py-32 border-b border-neutral-100">
        <motion.div 
          className="container mx-auto px-6 md:px-12"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16">
            <motion.div variants={fadeUp} className="lg:col-span-8">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
                {t.headerTitle}
              </h1>
            </motion.div>
            <motion.div variants={fadeUp} className="lg:col-span-4 lg:pt-4 flex flex-col justify-end">
              <div className="w-12 h-[2px] bg-black mb-6"></div>
              <p className="text-lg md:text-xl text-neutral-600 leading-relaxed font-light">
                {t.headerDesc}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Services List */}
      <div className="bg-white">
        {services.map((svc) => (
          <section key={svc.id} id={svc.id} className="min-h-screen border-b border-neutral-100 last:border-0 overflow-hidden flex items-center scroll-mt-24">
            <div className={`container mx-auto px-6 md:px-12 py-16 md:py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center w-full ${svc.reverse ? 'lg:grid-flow-col-dense' : ''}`}>

              <motion.div
                className={`flex flex-col justify-center ${svc.reverse ? 'lg:col-start-2' : ''}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUp}
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-sm font-medium text-neutral-400">/{svc.num}</span>
                  <span className="text-xs font-bold tracking-widest text-neutral-500 uppercase">{svc.desc}</span>
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">{svc.title}</h2>
                <p className="text-neutral-600 leading-relaxed mb-8 text-base md:text-lg font-light">
                  {svc.content}
                </p>

                <div>
                  <Link
                    href={`/projects?category=${svc.id}`}
                    className="group inline-flex items-center gap-3 text-sm font-bold tracking-widest uppercase hover:text-neutral-500 transition-colors"
                  >
                    <span className="border-b border-black group-hover:border-neutral-500 pb-1 transition-colors">
                      {svc.cta}
                    </span>
                    <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>

              <motion.div
                className={`relative ${svc.reverse ? 'lg:col-start-1' : ''}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUp}
              >
                <div className="overflow-hidden group bg-neutral-100">
                  <ImageWithFallback
                    src={svc.img}
                    alt={svc.title}
                    className="w-full aspect-[4/3] object-cover scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out"
                  />
                </div>
              </motion.div>

            </div>
          </section>
        ))}
      </div>

      {/* Process Section */}
      <section className="py-24 md:py-32 bg-black text-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
            
            {/* Sticky Header */}
            <div className="lg:w-1/3">
              <div className="sticky top-32">
                <motion.h2 
                  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="text-4xl md:text-5xl font-bold tracking-tight uppercase"
                >
                  {t.processTitle}
                </motion.h2>
              </div>
            </div>

            {/* Scrollable Steps */}
            <div className="lg:w-2/3">
              <div className="space-y-16 md:space-y-24">
                {process.map((step, i) => (
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

      {/* Modern Split FAQ Section */}
      <section className="py-24 md:py-32 bg-neutral-50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

            <motion.div
              className="lg:col-span-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">{t.faqTitle}</h2>
              <p className="text-neutral-600 mb-10 text-lg font-light leading-relaxed">{t.faqP}</p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-black text-white px-8 py-4 text-sm font-bold tracking-widest uppercase hover:bg-neutral-800 transition-colors"
              >
                {t.faqBtn}
              </Link>
            </motion.div>

            <motion.div
              className="lg:col-span-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <Accordion.Root type="single" collapsible className="w-full">
                {faqs.map((faq, i) => (
                  <Accordion.Item
                    key={i}
                    value={`faq-${i}`}
                    className="border-b border-neutral-300 last:border-0"
                  >
                    <Accordion.Header>
                      <Accordion.Trigger className="w-full py-6 md:py-8 flex justify-between items-center text-left hover:text-neutral-600 transition-colors [&[data-state=open]>div>svg]:rotate-180 group">
                        <span className="text-lg md:text-xl font-medium pr-8">{faq.q}</span>
                        <div className="w-10 h-10 border border-neutral-200 flex items-center justify-center shrink-0 group-hover:border-neutral-400 transition-colors bg-white">
                          <ChevronDown className="transition-transform duration-500 ease-out text-neutral-500" size={18} />
                        </div>
                      </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content className="overflow-hidden data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:slide-out-to-top-4 data-[state=open]:slide-in-from-top-2 transition-all duration-300">
                      <div className="pb-8 pt-2 text-neutral-600 leading-relaxed font-light text-base md:text-lg pr-12">
                        {faq.a}
                      </div>
                    </Accordion.Content>
                  </Accordion.Item>
                ))}
              </Accordion.Root>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Bottom CTA Block */}
      <section className="py-24 md:py-32 bg-black text-white text-center">
        <motion.div
          className="container mx-auto px-6 md:px-12 max-w-3xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight uppercase mb-8">
            {t.ctaBottomTitle}
          </h2>
          <p className="text-neutral-400 font-light text-lg leading-relaxed mb-12 whitespace-pre-line">
            {t.ctaBottomDesc}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-3 bg-white text-black px-10 py-5 text-sm font-bold tracking-widest uppercase hover:bg-neutral-200 transition-colors"
          >
            {t.ctaBottomBtn} <ArrowRight size={18} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
