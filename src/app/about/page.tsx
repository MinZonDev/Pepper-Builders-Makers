import type { Metadata } from 'next';
import { About } from '@/components/pages/About';

export const metadata: Metadata = {
  title: 'Về chúng tôi — 15+ năm kinh nghiệm thiết kế thi công',
  description:
    'Tìm hiểu về Pepper Builders & Makers: 15+ năm kinh nghiệm thiết kế và thi công trọn gói. Giá trị cốt lõi: Tinh tế, Sáng tạo, Bền vững, Tận tâm.',
  openGraph: {
    title: 'Về Pepper Builders & Makers — Thiết kế & Thi công trọn gói TP.HCM',
    description: 'Thành lập từ năm 2010. Design & Build trọn gói. 15+ năm kinh nghiệm, 0 phát sinh chi phí.',
  },
};

export default function AboutPage() {
  return <About />;
}
