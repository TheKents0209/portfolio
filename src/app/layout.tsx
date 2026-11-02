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
  title: "Kenert Lauri | Full-stack developer",
  description:
    "Full-stack developer in Tartu. Built and ran the Sanalliset online shop and its back office: Next.js, TypeScript, Postgres, Stripe.",
  metadataBase: new URL("https://kenert.dev"),
  openGraph: {
    title: "Kenert Lauri | Full-stack developer",
    description:
      "Full-stack developer in Tartu. Built and ran the Sanalliset online shop and its back office: Next.js, TypeScript, Postgres, Stripe.",
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
