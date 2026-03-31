import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import { Inter } from 'next/font/google';
import './globals.css';

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Kenert Lauri | Veebiarendus',
  description:
    'Kiired, turvalised ja hooldusevabad veebilehed ettevõtetele. Ei mingit WordPressi peavalu.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="et" className={`${geist.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
