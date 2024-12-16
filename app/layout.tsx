import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next.js Image Lazy Loading with Swiper Demo",
  description:
    "A demo showing how Next.js Image and Swiper work together with native lazy loading",
  metadataBase: new URL("https://lazy-carousel.marcelfahle.net"),
  openGraph: {
    title: "Next.js Image Lazy Loading with Swiper Demo",
    description:
      "A demo showing how Next.js Image and Swiper work together with native lazy loading",
    url: "https://lazy-carousel.marcelfahle.net",
    siteName: "Lazy Carousel Demo",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Next.js Image Lazy Loading with Swiper Demo",
    description:
      "A demo showing how Next.js Image and Swiper work together with native lazy loading",
    creator: "@marcelfahle",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
