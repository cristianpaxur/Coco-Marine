import type { Metadata, Viewport } from 'next';
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#102236',
};

export const metadata: Metadata = {
  title: 'Coco Marine - Frutos do Mar Santos',
  description:
    'Alta gastronomia costeira e frutos do mar frescos no coração do Gonzaga, Santos. Reservas e cardápio requintado.',
  openGraph: {
    title: 'Coco Marine - Frutos do Mar Santos',
    description:
      'Alta gastronomia costeira e frutos do mar frescos no coração do Gonzaga, Santos. Reservas e cardápio requintado.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Coco Marine - Frutos do Mar Santos',
    description:
      'Alta gastronomia costeira e frutos do mar frescos no coração do Gonzaga, Santos. Reservas e cardápio requintado.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`scroll-smooth ${playfair.variable} ${plusJakarta.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#faf8f5] text-[#102236] font-sans antialiased selection:bg-[#f9ecc9] selection:text-[#3d2f00]">
        {children}
      </body>
    </html>
  );
}
