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
  title: "Kenert Lauri | Veebiarendus",
  description:
    "Kiired, turvalised ja hooldusevabad veebilehed ettevõtetele. Ei mingit WordPressi peavalu.",
  metadataBase: new URL("https://kenert.dev"),
  openGraph: {
    title: "Kenert Lauri | Veebiarendus",
    description:
      "Kiired, turvalised ja hooldusevabad veebilehed ettevõtetele. Ei mingit WordPressi peavalu.",
    locale: "et_EE",
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
    <html lang="et" className={`${geist.variable} ${jakarta.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
