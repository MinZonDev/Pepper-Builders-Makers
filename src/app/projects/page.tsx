import type { Metadata } from 'next';
import { Suspense } from 'react';
import { Projects } from '@/components/pages/Projects';

export const metadata: Metadata = {
  title: 'Dự án tiêu biểu — Công trình đã thực hiện',
  description:
    'Xem danh sách các dự án thiết kế thi công tiêu biểu của Pepper Builders & Makers: Hospitality, Residential, Commercial tại TP.HCM và các tỉnh thành.',
  openGraph: {
    title: 'Dự án tiêu biểu | Pepper Builders & Makers',
    description: 'Portfolio các công trình Hospitality, Residential, Commercial đã hoàn thành.',
  },
};

export default function ProjectsPage() {
  return <Suspense><Projects /></Suspense>;
}
