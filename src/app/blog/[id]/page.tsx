import type { Metadata } from 'next';
import { blogPosts } from '@/data/blog';
import { BlogDetail } from '@/components/pages/BlogDetail';
import { ArticleJsonLd } from '@/lib/structured-data';

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return { title: 'Bài viết không tìm thấy' };
  }

  return {
    title: post.title.vi,
    description: post.excerpt.vi.slice(0, 160),
    openGraph: {
      title: post.title.vi,
      description: post.excerpt.vi.slice(0, 160),
      type: 'article',
      images: [{ url: post.img, width: 1080, height: 720 }],
    },
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = blogPosts.find((p) => p.id === id);

  return (
    <>
      {post && (
        <ArticleJsonLd
          title={post.title.vi}
          description={post.excerpt.vi}
          image={post.img}
          datePublished={post.date.en}
          url={`https://pepper.builders/blog/${post.id}`}
        />
      )}
      <BlogDetail id={id} />
    </>
  );
}
