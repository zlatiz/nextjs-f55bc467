import * as React from "react";
import type { Metadata } from "next";
import "./globals.css";
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'John Keane Studios | Welcome to John Keane Studios',
  description:
    'Independent recording studio and producer services offering recording, mixing, production, client discography, studio equipment and music clips.',
  keywords: [
    'john keane',
    'we three keanes',
    'christmas songs',
    'keanelok',
    'online pro tools',
    'pro tools',
    'pro tools tutorial',
    'digidesign',
    'daw',
    'digital audio',
    'pro tools video',
    'video tutorial',
    'johnkeanestudios'
  ],
  authors: [{ name: 'John Keane Studios' }],
  openGraph: {
    title: 'John Keane Studios | Welcome to John Keane Studios',
    description:
      'Independent recording studio and producer services offering recording, mixing, production, client discography, studio equipment and music clips.',
    type: 'website',
    locale: 'en_US',
    siteName: 'John Keane Studios'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'John Keane Studios | Welcome to John Keane Studios',
    description:
      'Independent recording studio and producer services offering recording, mixing, production, client discography, studio equipment and music clips.'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;600;700&family=Space+Grotesk:wght@400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
