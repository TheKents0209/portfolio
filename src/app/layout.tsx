import type { Metadata } from "next";
import { Geist, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kenert Lauri | Frontend developer",
  description:
    "Frontend developer in Tartu, Estonia. Co-founded and built Sanalliset, an online jewellery store with 3,800+ orders, on Next.js, TypeScript, Supabase and Stripe.",
  metadataBase: new URL("https://kenert.dev"),
  openGraph: {
    title: "Kenert Lauri | Frontend developer",
    description:
      "Frontend developer in Tartu, Estonia. Co-founded and built Sanalliset, an online jewellery store with 3,800+ orders, on Next.js, TypeScript, Supabase and Stripe.",
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
  other: {
    "theme-color": "#ffffff",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${jakarta.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
