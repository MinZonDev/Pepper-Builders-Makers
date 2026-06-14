import type { Metadata } from 'next';
import { Services } from '@/components/pages/Services';

export const metadata: Metadata = {
  title: 'Dịch vụ thiết kế thi công — Hospitality, Residential, Commercial',
  description:
    'Dịch vụ thiết kế thi công trọn gói: Khách sạn, Nhà hàng, Nhà ở, Văn phòng. Quy trình 6 bước chặt chẽ. Từ thiết kế đến thi công dưới một đội ngũ duy nhất.',
  openGraph: {
    title: 'Dịch vụ thiết kế thi công | Pepper Builders & Makers',
    description: 'Hospitality • Residential • Commercial. Design & Build trọn gói tại TP.HCM.',
  },
};

export default function ServicesPage() {
  return <Services />;
}
