import type { Metadata } from 'next';
import { Contact } from '@/components/pages/Contact';
import { LocalBusinessJsonLd } from '@/lib/structured-data';

export const metadata: Metadata = {
  title: 'Liên hệ — Tư vấn miễn phí thiết kế thi công',
  description:
    'Liên hệ Pepper Builders & Makers để được tư vấn miễn phí. Trụ sở: 19 Hoàng Sa, Q.1, TP.HCM. Hotline: (+84) 931 888 149. Phản hồi trong 24h.',
  openGraph: {
    title: 'Liên hệ Pepper Builders & Makers',
    description: 'Nhận tư vấn miễn phí. Hotline: (+84) 931 888 149.',
  },
};

export default function ContactPage() {
  return (
    <>
      <LocalBusinessJsonLd />
      <Contact />;
    </>
  );
}
