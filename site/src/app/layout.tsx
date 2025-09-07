import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from '@/components/Analytics';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const jetBrainsMono = localFont({
  src: [
    {
      path: './fonts/JetBrainsMono-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/JetBrainsMono-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/JetBrainsMono-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/JetBrainsMono-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-jetbrains-mono',
});

export const metadata: Metadata = {
  title: "Dean van Zyl - Cloud Native Director of Platform",
  description: "Building robust scalable platforms that empower innovation. Specializing in Kubernetes, AWS, observability, and cloud architecture.",
  keywords: "Dean van Zyl, Cloud Native, Platform Engineering, Kubernetes, AWS, DevOps, Site Reliability, Observability",
  authors: [{ name: "Dean van Zyl" }],
  creator: "Dean van Zyl",
  openGraph: {
    title: "Dean van Zyl - Cloud Native Director of Platform",
    description: "Building robust scalable platforms that empower innovation. Specializing in Kubernetes, AWS, observability, and cloud architecture.",
    url: "https://deanvz.com",
    siteName: "Dean van Zyl",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dean van Zyl - Cloud Native Director of Platform",
    description: "Building robust scalable platforms that empower innovation. Specializing in Kubernetes, AWS, observability, and cloud architecture.",
    creator: "@deanvz",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${jetBrainsMono.variable} antialiased bg-slate-900 text-slate-100`}>
        <Analytics />
        {children}
      </body>
    </html>
  );
}