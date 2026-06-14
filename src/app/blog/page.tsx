import type { Metadata } from 'next';
import { Blog } from '@/components/pages/Blog';

export const metadata: Metadata = {
  title: 'Blog & Góc nhìn — Kiến thức thiết kế thi công',
  description:
    'Chia sẻ kinh nghiệm thiết kế, xu hướng kiến trúc, và các câu chuyện từ công trường của đội ngũ Pepper Builders & Makers.',
  openGraph: {
    title: 'Blog & Góc nhìn | Pepper Builders & Makers',
    description: 'Kiến thức thiết kế, xu hướng kiến trúc, kinh nghiệm thi công.',
  },
};

export default function BlogPage() {
  return <Blog />;
}
