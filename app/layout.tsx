import * as React from "react";
import type { Metadata } from "next";
import "./globals.css";
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'John Keane Studios | Professional Recording & Production',
  description:
    'Award-winning recording studio in Athens, GA. Professional recording, mixing, and production services for artists who demand excellence.',
  keywords: [
    'recording studio',
    'music production',
    'mixing',
    'mastering',
    'athens georgia',
    'john keane',
    'producer'
  ],
  authors: [{ name: 'John Keane Studios' }],
  openGraph: {
    title: 'John Keane Studios | Professional Recording & Production',
    description:
      'Award-winning recording studio. Professional recording, mixing, and production services for artists who demand excellence.',
    type: 'website',
    locale: 'en_US',
    siteName: 'John Keane Studios'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'John Keane Studios | Professional Recording & Production',
    description:
      'Award-winning recording studio. Professional recording, mixing, and production services.'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
