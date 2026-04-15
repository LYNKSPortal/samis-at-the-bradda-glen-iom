import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sami's at the Bradda Glen | Mediterranean Restaurant in Port Erin, Isle of Man",
  description: "Experience Mediterranean and Middle Eastern flavours with stunning Port Erin Bay views. Perfect for dining, events, weddings, and functions at the Isle of Man's premier destination restaurant.",
  keywords: "restaurant, Isle of Man, Port Erin, Mediterranean, Middle Eastern, weddings, events, functions, Bradda Glen",
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: "Sami's at the Bradda Glen | Mediterranean Restaurant in Port Erin, Isle of Man",
    description: "Experience Mediterranean and Middle Eastern flavours with stunning Port Erin Bay views. Perfect for dining, events, weddings, and functions at the Isle of Man's premier destination restaurant.",
    url: 'https://samis.im',
    siteName: "Sami's at the Bradda Glen",
    images: [
      {
        url: '/meta-twitter-img.jpg',
        width: 1200,
        height: 630,
        alt: "Sami's at the Bradda Glen Restaurant",
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Sami's at the Bradda Glen | Mediterranean Restaurant in Port Erin, Isle of Man",
    description: "Experience Mediterranean and Middle Eastern flavours with stunning Port Erin Bay views. Perfect for dining, events, weddings, and functions at the Isle of Man's premier destination restaurant.",
    images: ['/meta-twitter-img.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
