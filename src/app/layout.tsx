import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { WebsiteJsonLd, OrganizationJsonLd } from '@/lib/structured-data';

export const metadata: Metadata = {
  metadataBase: new URL('https://pepper.builders'),
  title: {
    default: 'Pepper Builders & Makers — Thiết kế & Thi công trọn gói tại TP.HCM',
    template: '%s | Pepper Builders & Makers',
  },
  description:
    'Công ty thiết kế thi công trọn gói tại TP.HCM. Chuyên Hospitality, Residential, Commercial. 15+ năm kinh nghiệm, 0 phát sinh chi phí, 100% đúng tiến độ.',
  keywords: [
    'thiết kế thi công',
    'xây dựng trọn gói',
    'thiết kế nội thất',
    'thi công nội thất',
    'kiến trúc',
    'TP.HCM',
    'Pepper Builders',
    'design and build',
  ],
  authors: [{ name: 'Pepper Builders & Makers' }],
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    alternateLocale: 'en_US',
    siteName: 'Pepper Builders & Makers',
    title: 'Pepper Builders & Makers — Thiết kế & Thi công trọn gói',
    description:
      'You Dream It, We Build It. Thiết kế & Thi công toàn diện cho Hospitality, Residential, Commercial.',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className="font-sans antialiased">
        <LanguageProvider>
          <div className="flex min-h-screen flex-col bg-white text-neutral-900 font-sans">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <ScrollToTop />
          </div>
        </LanguageProvider>
        <WebsiteJsonLd />
        <OrganizationJsonLd />
      </body>
    </html>
  );
}
