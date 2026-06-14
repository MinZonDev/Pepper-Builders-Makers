import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6 pt-32">
      <h1 className="text-8xl md:text-9xl font-bold tracking-tighter mb-4 text-neutral-200">
        404
      </h1>
      <h2 className="text-2xl md:text-3xl font-bold mb-4">
        Trang không tồn tại
      </h2>
      <p className="text-neutral-500 mb-12 max-w-md">
        Trang bạn đang tìm kiếm không tồn tại hoặc đã được di chuyển đến địa chỉ khác.
      </p>
      <div className="flex gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-neutral-800 transition-colors"
        >
          <ArrowLeft size={16} /> Về trang chủ
        </Link>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 bg-white border border-neutral-200 text-black px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-neutral-50 transition-colors"
        >
          Xem dự án
        </Link>
      </div>
    </div>
  );
}
