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
  metadataBase: new URL('https://samis.im'),
  title: {
    default: "Sami's at the Bradda Glen | Mediterranean Restaurant in Port Erin, Isle of Man",
    template: "%s | Sami's at the Bradda Glen"
  },
  description: "Experience Mediterranean and Middle Eastern flavours with stunning Port Erin Bay views. Perfect for dining, events, weddings, and functions at the Isle of Man's premier destination restaurant.",
  keywords: [
    "restaurant Isle of Man",
    "Port Erin restaurant",
    "Mediterranean restaurant Isle of Man",
    "Middle Eastern food Isle of Man",
    "Bradda Glen restaurant",
    "wedding venue Isle of Man",
    "function venue Port Erin",
    "event space Isle of Man",
    "sea view restaurant",
    "Port Erin Bay dining",
    "Isle of Man weddings",
    "Mediterranean cuisine",
    "fine dining Isle of Man",
    "restaurant with views",
    "Sami's restaurant"
  ],
  authors: [{ name: "Sami's at the Bradda Glen" }],
  creator: "Sami's at the Bradda Glen",
  publisher: "Sami's at the Bradda Glen",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
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
        alt: "Sami's at the Bradda Glen Restaurant - Mediterranean dining with Port Erin Bay views",
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
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Sami's at the Bradda Glen",
    "image": "https://samis.im/meta-twitter-img.jpg",
    "description": "Mediterranean and Middle Eastern restaurant with stunning Port Erin Bay views, offering fine dining, events, weddings, and functions in the Isle of Man.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Bradda Glen",
      "addressLocality": "Port Erin",
      "addressRegion": "Isle of Man",
      "postalCode": "IM9",
      "addressCountry": "IM"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 54.091629,
      "longitude": -4.764755
    },
    "url": "https://samis.im",
    "telephone": "+441624837713",
    "email": "bookings@samis.im",
    "priceRange": "$$",
    "servesCuisine": ["Mediterranean", "Middle Eastern"],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "10:00",
        "closes": "22:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "10:00",
        "closes": "17:00"
      }
    ],
    "acceptsReservations": "True",
    "hasMenu": "https://samis.im/menus",
    "sameAs": [
      "https://www.facebook.com/SamisAtTheBraddaGlen"
    ]
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
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
