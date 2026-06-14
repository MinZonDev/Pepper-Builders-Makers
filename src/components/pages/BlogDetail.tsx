"use client";

import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import { useLanguage } from "@/contexts/LanguageContext";
import { blogPosts } from "@/data/blog";
export function BlogDetail({ id }: { id: string }) {
  const { language } = useLanguage();
  
  const post = blogPosts.find((p) => p.id === id);

  const t = {
    notFound: language === 'VI' ? "Không tìm thấy bài viết" : "Article not found",
    notFoundDesc: language === 'VI' ? "Bài viết bạn đang tìm kiếm không tồn tại hoặc đã bị xóa." : "The article you are looking for does not exist or has been removed.",
    backToList: language === 'VI' ? "Trở về Blog" : "Back to Blog",
    share: language === 'VI' ? "Chia sẻ bài viết:" : "Share this article:",
    relatedPosts: language === 'VI' ? "Bài viết liên quan" : "Related Posts",
    home: language === 'VI' ? "Trang chủ" : "Home",
  };

  if (!post) {
    return (
      <div className="pt-32 pb-24 text-center min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">{t.notFound}</h1>
        <p className="text-neutral-500 mb-8">{t.notFoundDesc}</p>
        <Link href="/blog" className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 font-medium uppercase tracking-widest hover:bg-neutral-800 transition-colors">
          <ArrowLeft size={16} /> {t.backToList}
        </Link>
      </div>
    );
  }

  // Related posts (excluding current)
  const related = blogPosts.filter(p => p.id !== id).slice(0, 2);

  // Render content with basic markdown-like support (bold and newlines)
  const renderContent = (text: string) => {
    return text.split('\n\n').map((paragraph, idx) => {
      // Basic bold matching **text**
      const parts = paragraph.split(/(\*\*.*?\*\*)/g);
      return (
        <p key={idx} className="mb-6 text-lg md:text-xl text-neutral-700 leading-relaxed font-light">
          {parts.map((part, i) => {
            if (part.startsWith('**') && part.endsWith('**')) {
              return <strong key={i} className="font-semibold text-black">{part.slice(2, -2)}</strong>;
            }
            return part;
          })}
        </p>
      );
    });
  };

  return (
    <div className="pt-32 bg-white min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        {/* Breadcrumb */}
        <nav className="flex text-sm text-neutral-500 mb-12" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2">
            <li>
              <Link href="/" className="hover:text-black transition-colors">{t.home}</Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/blog" className="hover:text-black transition-colors">Blog</Link>
            </li>
            <li>/</li>
            <li className="text-black font-medium truncate w-32 md:w-auto" aria-current="page">
              {language === 'VI' ? post.title.vi : post.title.en}
            </li>
          </ol>
        </nav>

        {/* Header */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <div className="flex items-center justify-center gap-4 text-sm text-neutral-500 mb-8">
            <span className="font-semibold text-black uppercase tracking-widest">{post.category}</span>
            <span>•</span>
            <span className="flex items-center gap-1"><Clock size={14} /> {language === 'VI' ? post.date.vi : post.date.en}</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 leading-tight">
            {language === 'VI' ? post.title.vi : post.title.en}
          </h1>
        </div>

        {/* Hero Image */}
        <div className="w-full max-w-5xl mx-auto mb-16 md:mb-24 bg-neutral-100 overflow-hidden">
          <ImageWithFallback
            src={post.img}
            alt={language === 'VI' ? post.title.vi : post.title.en}
            className="w-full h-[50vh] md:h-[70vh] object-cover"
          />
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto mb-24">
          <div className="prose prose-lg">
            {renderContent(language === 'VI' ? post.content.vi : post.content.en)}
          </div>
          
          <div className="mt-16 pt-8 border-t border-neutral-200 flex flex-col md:flex-row justify-between items-center gap-4">
            <Link href="/blog" className="inline-flex items-center gap-2 font-medium hover:text-neutral-500 transition-colors">
              <ArrowLeft size={16} /> {t.backToList}
            </Link>
            <div className="flex items-center gap-4 text-sm text-neutral-500">
              <span>{t.share}</span>
              <div className="flex gap-3">
                <a href="#" className="hover:text-black transition-colors">Facebook</a>
                <a href="#" className="hover:text-black transition-colors">LinkedIn</a>
                <a href="#" className="hover:text-black transition-colors">X (Twitter)</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Posts */}
      {related.length > 0 && (
        <section className="bg-neutral-50 py-24 border-t border-neutral-200">
          <div className="container mx-auto px-6 md:px-12">
            <h2 className="text-3xl font-bold mb-12 uppercase tracking-wide">{t.relatedPosts}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {related.map((relPost) => (
                <Link href={`/blog/${relPost.id}`} key={relPost.id} className="group flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-1/2 aspect-[4/3] overflow-hidden bg-neutral-100 shrink-0">
                    <ImageWithFallback
                      src={relPost.img}
                      alt={language === 'VI' ? relPost.title.vi : relPost.title.en}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold mb-2">{relPost.category}</span>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-neutral-600 transition-colors leading-snug">
                      {language === 'VI' ? relPost.title.vi : relPost.title.en}
                    </h3>
                    <span className="text-sm text-neutral-500 flex items-center gap-1">
                      <Clock size={14} /> {language === 'VI' ? relPost.date.vi : relPost.date.en}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
