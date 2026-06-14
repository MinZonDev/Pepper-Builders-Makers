"use client";

import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import { useLanguage } from "@/contexts/LanguageContext";
import { blogPosts } from "@/data/blog";

export function Blog() {
  const { language } = useLanguage();

  const t = {
    title: language === 'VI' ? "Blog & Góc nhìn" : "Blog & Perspectives",
    desc: language === 'VI' ? "Chia sẻ kinh nghiệm thiết kế, xu hướng kiến trúc, và các câu chuyện từ công trường của đội ngũ Pepper Builders & Makers." : "Sharing design experiences, architectural trends, and stories from the construction site by the Pepper Builders & Makers team.",
    readArticle: language === 'VI' ? "Đọc bài viết" : "Read article"
  };

  return (
    <div className="pt-32 min-h-screen">
      <div className="container mx-auto px-6 md:px-12 py-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 uppercase">
          {t.title}
        </h1>
        <p className="text-lg text-neutral-600 max-w-2xl mb-16">
          {t.desc}
        </p>

        {/* Featured Post */}
        {blogPosts.length > 0 && (
          <div className="mb-16">
            <Link href={`/blog/${blogPosts[0].id}`} className="group grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-neutral-50 hover:bg-neutral-100 transition-colors">
              <div className="h-[40vh] lg:h-[60vh] w-full overflow-hidden">
                <ImageWithFallback
                  src={blogPosts[0].img}
                  alt={language === 'VI' ? blogPosts[0].title.vi : blogPosts[0].title.en}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8 lg:p-12 lg:pl-8">
                <div className="flex items-center gap-4 text-sm text-neutral-500 mb-4">
                  <span className="font-semibold text-black uppercase tracking-widest">{blogPosts[0].category}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1"><Clock size={14} /> {language === 'VI' ? blogPosts[0].date.vi : blogPosts[0].date.en}</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6 group-hover:text-neutral-600 transition-colors leading-tight">
                  {language === 'VI' ? blogPosts[0].title.vi : blogPosts[0].title.en}
                </h2>
                <p className="text-neutral-600 leading-relaxed mb-8 text-lg font-light">
                  {language === 'VI' ? blogPosts[0].excerpt.vi : blogPosts[0].excerpt.en}
                </p>
                <span className="inline-flex items-center gap-2 font-medium border-b border-black pb-1 group-hover:border-neutral-500 group-hover:text-neutral-500 transition-all uppercase tracking-widest text-sm">
                  {t.readArticle} <ArrowRight size={16} />
                </span>
              </div>
            </Link>
          </div>
        )}

        {/* Grid Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {blogPosts.slice(1).map((post) => (
            <Link href={`/blog/${post.id}`} key={post.id} className="group block">
              <div className="w-full aspect-[4/3] overflow-hidden mb-6 bg-neutral-100">
                <ImageWithFallback
                  src={post.img}
                  alt={language === 'VI' ? post.title.vi : post.title.en}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center gap-3 text-sm text-neutral-500 mb-4">
                <span className="font-semibold text-black uppercase tracking-widest text-xs">{post.category}</span>
                <span>•</span>
                <span className="text-xs">{language === 'VI' ? post.date.vi : post.date.en}</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-neutral-600 transition-colors line-clamp-2 leading-snug">
                {language === 'VI' ? post.title.vi : post.title.en}
              </h3>
              <p className="text-neutral-600 leading-relaxed text-sm line-clamp-3 font-light">
                {language === 'VI' ? post.excerpt.vi : post.excerpt.en}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
