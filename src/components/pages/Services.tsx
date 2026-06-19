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
    headerTitle: language === 'VI' ? "Dịch vụ của chúng tôi" : "Our Services",
    headerDesc: language === 'VI' ? "Pepper Builders & Makers cung cấp giải pháp thiết kế và thi công cho các không gian lưu trú, cho thuê, thương mại và nhà ở cá nhân hóa — với trọng tâm là tạo ra những công trình có concept, công năng và trải nghiệm sử dụng rõ ràng." : "Pepper Builders & Makers provides design and construction solutions for hospitality, rental, commercial, and personalized residential spaces — with a focus on creating projects with clear concepts, functionality, and user experience.",
    viewProjects: language === 'VI' ? "Xem dự án" : "Explore projects",
    faqTitle: language === 'VI' ? "Câu hỏi thường gặp" : "Frequently Asked Questions",
    faqP: language === 'VI' ? "Bạn có câu hỏi khác? Đừng ngần ngại liên hệ với chúng tôi." : "Have other questions? Don't hesitate to contact us.",
    faqBtn: language === 'VI' ? "Gửi câu hỏi cho Pepper" : "Send questions to Pepper",
    processTitle: language === 'VI' ? "Quy trình làm việc" : "Working Process",
  };

  const process = [
    { num: "01", title: language === 'VI' ? "Tiếp nhận & đánh giá dự án" : "Project Intake & Assessment", desc: language === 'VI' ? "Ghi nhận thông tin dự án, mục tiêu và kỳ vọng. Phân tích tính khả thi, quy mô và ngân sách dự kiến." : "Record project information, goals, and expectations. Analyze feasibility, scale, and estimated budget." },
    { num: "02", title: language === 'VI' ? "Tư vấn và thống nhất phương án" : "Consulting & Concept Agreement", desc: language === 'VI' ? "Thảo luận trực tiếp, làm rõ yêu cầu và thống nhất hướng tiếp cận thiết kế phù hợp nhất." : "Direct discussion, clarify requirements and agree on the most suitable design approach." },
    { num: "03", title: language === 'VI' ? "Khái toán ngân sách và hợp đồng" : "Budget Estimate & Contract", desc: language === 'VI' ? "Khái toán chi phí chi tiết, minh bạch theo từng hạng mục. Ký kết hợp đồng rõ ràng, không phát sinh." : "Detailed, transparent cost estimate by line item. Clear contract signing with no hidden costs." },
    { num: "04", title: language === 'VI' ? "Thiết kế & lên kế hoạch thi công" : "Design & Construction Planning", desc: language === 'VI' ? "Phát triển hồ sơ kiến trúc, bản vẽ kỹ thuật, phối cảnh 3D và lên tiến độ thi công chi tiết." : "Develop architectural documents, technical drawings, 3D renderings, and detailed construction schedule." },
    { num: "05", title: language === 'VI' ? "Thi công & quản lý chất lượng" : "Construction & Quality Management", desc: language === 'VI' ? "Triển khai công trình với kiểm soát chặt chẽ Chất lượng – Chi phí – Tiến độ tại công trường." : "Execute construction with strict on-site control of Quality, Cost, and Schedule." },
    { num: "06", title: language === 'VI' ? "Hoàn thành & bàn giao" : "Completion & Handover", desc: language === 'VI' ? "Nghiệm thu, tất toán toàn bộ chi phí, bàn giao hồ sơ hoàn công và bảo hành dự án." : "Acceptance, settle all costs, handover as-built documents and project warranty." },
  ];

  const services = [
    {
      id: "Hospitality",
      num: "01",
      title: "RENTAL & HOSPITALITY PROPERTIES",
      desc: language === 'VI' ? "Khách sạn, Homestay, Căn hộ dịch vụ, Nhà hàng, Quán café, BĐS cho thuê" : "Hotels, Homestays, Serviced Apartments, Restaurants, Cafes, Rental Properties",
      content: language === 'VI'
        ? "Giải pháp thiết kế và thi công trọn gói cho bất động sản lưu trú và khai thác cho thuê. Chúng tôi giải bài toán tối ưu giữa chi phí đầu tư và giá trị khai thác, từ bố trí công năng tối ưu cho vận hành đến ngôn ngữ thiết kế tạo trải nghiệm khác biệt — biến mỗi tài sản thành nguồn thu bền vững với hiệu suất vượt trội."
        : "Turnkey design and build solutions for hospitality and rental properties. We solve the optimization between investment cost and exploitation value, from optimal functional layout for operations to design language creating differentiated experiences — turning every asset into a sustainable revenue source with outstanding performance.",
      img: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGludGVyaW9yfGVufDF8fHx8MTc4MTE1NjA5NHww&ixlib=rb-4.1.0&q=80&w=1080",
      reverse: false
    },
    {
      id: "Residential",
      num: "02",
      title: "PERSONALIZED HOMES",
      desc: language === 'VI' ? "Nhà phố, Biệt thự, Căn hộ — Thiết kế theo phong cách sống riêng" : "Townhouses, Villas, Apartments — Designed for your lifestyle",
      content: language === 'VI'
        ? "Không gian sống được thiết kế riêng, phản ánh phong cách và câu chuyện của gia chủ. Chúng tôi lắng nghe cách bạn sống, sinh hoạt và vận hành gia đình để tạo nên giải pháp nội - ngoại thất cá nhân hóa đến từng chi tiết. Mỗi vật liệu, mỗi góc sáng, mỗi đường nét đều mang dấu ấn riêng — để ngôi nhà thực sự là của bạn."
        : "Bespoke living spaces designed to reflect your lifestyle and personal story. We listen to how you live, operate your household, and interact with your space to create interior and exterior solutions personalized to every detail. Every material, every light angle, every line carries your unique signature — so the home is truly yours.",
      img: "https://images.unsplash.com/photo-1564078516393-cf04bd966897?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjBsaXZpbmclMjByb29tfGVufDF8fHx8MTc4MTEyODQ1M3ww&ixlib=rb-4.1.0&q=80&w=1080",
      reverse: true
    },
    {
      id: "Commercial",
      num: "03",
      title: "COMMERCIAL SPACES",
      desc: language === 'VI' ? "Văn phòng, Showroom, Retail, Không gian thương mại" : "Offices, Showrooms, Retail, Commercial Spaces",
      content: language === 'VI'
        ? "Thiết kế và thi công không gian thương mại hướng tới hiệu quả vận hành và trải nghiệm thương hiệu. Từ văn phòng truyền cảm hứng làm việc, showroom kể câu chuyện sản phẩm, đến mặt bằng retail tối ưu hành trình khách hàng — chúng tôi biến không gian thành công cụ kinh doanh chiến lược."
        : "Design and build commercial spaces geared towards operational efficiency and brand experience. From offices that inspire productivity, showrooms that tell product stories, to retail spaces that optimize customer journeys — we turn spaces into strategic business tools.",
      img: "https://images.unsplash.com/photo-1558959356-2f36c7322d3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvcGVuJTIwb2ZmaWNlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzgxMTg2ODU5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      reverse: false
    }
  ];

  const faqs = [
    {
      q: language === 'VI' ? "Quy trình thiết kế thi công của Pepper diễn ra như thế nào?" : "How does Pepper's design and build process work?",
      a: language === 'VI'
        ? "Chúng tôi áp dụng quy trình 6 bước chặt chẽ: Tiếp nhận & đánh giá dự án → Tư vấn và thống nhất phương án → Khái toán ngân sách và hợp đồng → Thiết kế & lên kế hoạch thi công → Thi công & quản lý chất lượng → Hoàn thành & bàn giao. Xuyên suốt quá trình, khách hàng luôn được cập nhật tiến độ liên tục."
        : "We apply a strict 6-step process: Project Intake & Assessment → Consulting & Concept Agreement → Budget Estimate & Contract → Design & Construction Planning → Construction & Quality Management → Completion & Handover. Throughout the process, clients are always updated on the progress."
    },
    {
      q: language === 'VI' ? "Pepper có thi công ngoài TP.HCM không?" : "Does Pepper undertake construction outside HCMC?",
      a: language === 'VI' 
        ? "Có. Trụ sở chính của chúng tôi tại TP.HCM nhưng chúng tôi đã và đang thực hiện các dự án tại nhiều tỉnh thành trên cả nước, đặc biệt là các dự án Hospitality và Biệt thự nghỉ dưỡng."
        : "Yes. Our headquarters is in HCMC but we have been executing projects in many provinces nationwide, especially Hospitality and Resort Villa projects."
    },
    {
      q: language === 'VI' ? "Thời gian hoàn thành một dự án trung bình là bao lâu?" : "What is the average completion time for a project?",
      a: language === 'VI'
        ? "Thời gian phụ thuộc vào quy mô và loại hình dự án. Tuy nhiên, với mô hình trọn gói Design & Build, chúng tôi có thể rút ngắn đáng kể thời gian so với phương pháp truyền thống nhờ sự phối hợp mượt mà giữa thiết kế và đội thầu thi công nội bộ."
        : "Time depends on the scale and type of project. However, with the turnkey Design & Build model, we can significantly shorten the time compared to traditional methods thanks to seamless coordination between design and our internal construction teams."
    },
    {
      q: language === 'VI' ? "Pepper có nhận dự án cải tạo (renovation) không?" : "Does Pepper accept renovation projects?",
      a: language === 'VI'
        ? "Chắc chắn. Chúng tôi có nhiều kinh nghiệm trong việc cải tạo các công trình hiện hữu, từ căn hộ, nhà phố đến việc tái định vị không gian nhà hàng, văn phòng để mang lại diện mạo và sức sống mới."
        : "Absolutely. We have extensive experience in renovating existing structures, from apartments and townhouses to repositioning restaurant and office spaces to bring a new look and vitality."
    },
    {
      q: language === 'VI' ? "Làm thế nào để bắt đầu một dự án với Pepper?" : "How to start a project with Pepper?",
      a: language === 'VI'
        ? "Rất đơn giản, bạn chỉ cần liên hệ với chúng tôi qua form trên website, email hoặc hotline để đặt lịch tư vấn. Chúng tôi sẽ lắng nghe ý tưởng, đánh giá ngân sách và tư vấn giải pháp phù hợp nhất cho bạn."
        : "It's very simple, you just need to contact us via the website form, email, or hotline to schedule a consultation. We will listen to your ideas, evaluate your budget, and advise the most suitable solution for you."
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
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-black transition-colors">
          <ArrowLeft size={16} /> {language === 'VI' ? 'Trang chủ' : 'Home'}
        </Link>
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
                      {t.viewProjects}
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
    </div>
  );
}
