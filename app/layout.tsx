import './globals.css';
import type { Metadata } from 'next';
import Script from 'next/script';
import { Inter, Fraunces, JetBrains_Mono } from 'next/font/google';
import CookieConsent from '@/components/CookieConsent';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-display',
  display: 'swap',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://prashantkarna.com'),
  title: {
    default: 'Prashant Karna — MIS reporting and analytics',
    template: '%s | Prashant Karna',
  },
  description:
    'Data analyst with seven years in MIS reporting, Power BI and Power Query. Guides on monthly reporting for trading and operations teams, plus selected projects.',
  keywords: [
    'MIS reporting',
    'Power BI',
    'Power Query',
    'Excel reporting',
    'data analyst',
    'textile trading reports',
  ],
  authors: [{ name: 'Prashant Karna' }],
  openGraph: {
    title: 'Prashant Karna — MIS reporting and analytics',
    description:
      'Seven years in MIS and BI. Guides on monthly reporting, and the dashboards behind them.',
    type: 'website',
    url: 'https://prashantkarna.com',
    images: [{ url: '/images/Linkedin_Pic.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prashant Karna — MIS reporting and analytics',
    description: 'Guides on monthly reporting, and the dashboards behind them.',
    images: [{ url: '/images/Linkedin_Pic.png' }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const adsClient = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;

  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} ${mono.variable}`}
    >
      <body className={`${inter.className} min-h-screen antialiased`}>
        <SiteNav />
        <main>{children}</main>
        <SiteFooter />
        <CookieConsent />
        {adsClient && (
          <Script
            async
            strategy="afterInteractive"
            crossOrigin="anonymous"
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsClient}`}
          />
        )}
      </body>
    </html>
  );
}
