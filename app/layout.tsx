import './globals.css';
import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://prashantkarna.com'),
  title: 'Prashant Karna | Data Analyst & Power BI Developer',
  description:
    'Data Analyst with 7+ years of experience building Power BI dashboards, automating reporting workflows, and delivering actionable insights through SQL, Python and Excel.',
  keywords: ['Data Analyst', 'Power BI Developer', 'SQL', 'Python', 'DAX', 'Dashboard', 'Analytics'],
  authors: [{ name: 'Prashant Karna' }],
  openGraph: {
    title: 'Prashant Karna | Data Analyst & Power BI Developer',
    description: 'Turning Data Into Decisions. 7+ years of analytics experience.',
    type: 'website',
    url: 'https://prashantkarna.com',
    images: [{ url: '/images/Linkedin_Pic.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prashant Karna | Data Analyst',
    description: 'Turning Data Into Decisions.',
    images: [{ url: '/images/Linkedin_Pic.png' }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className={`${inter.className} bg-[#070d1a] text-white antialiased`}>{children}</body>
    </html>
  );
}
