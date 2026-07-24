import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Namoh | Spiritual Guidance, Pooja Services & Astrology',
  description:
    'Namoh connects you with authentic pooja services and trusted astrologers — rooted in tradition, designed for modern life.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="relative flex min-h-screen flex-col bg-bg font-body text-text">
        <div aria-hidden="true" className="fixed inset-0 -z-10">
          <Image
            src="/hero-bg.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/20 to-black/55" />
        </div>

        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
