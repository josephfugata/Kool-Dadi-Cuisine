import type {Metadata} from 'next';
import { Toaster } from "@/components/ui/toaster"
import './globals.css';

const siteConfig = {
  name: 'Kool Dadi Cuisine',
  description: 'Gutom? Siomai ang sagot! Sariwa, legit na masarap, at abot-kaya. Isang chat lang, solve na ang cravings! Order na sa Messenger!',
  url: 'https://kool-dadi-cuisine.com', // Replace with your actual domain
  ogImage: 'https://kool-dadi-cuisine.com/og-image.png', // Replace with your actual OG image URL
  keywords: ['siomai', 'filipino food', 'food delivery', 'manila', 'cravings', 'comfort food', 'street food', 'pinoy food'],
  author: 'Kool Dadi Cuisine',
};

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author }],
  creator: siteConfig.author,
  
  openGraph: {
    type: "website",
    locale: "en_PH",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@kool_dadi_cuisine", // Replace with your Twitter handle
  },
  icons: {
    icon: "/favicon/favicon.ico",
    shortcut: "/favicon/favicon-16x16.png",
    apple: "/favicon/apple-touch-icon.png",
    other: [
      { rel: 'icon', type: 'image/png', sizes: '32x32', url: '/favicon/favicon-32x32.png' },
    ],
  },
  manifest: `/favicon/site.webmanifest`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Lobster&family=Nunito:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body bg-background text-foreground antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
