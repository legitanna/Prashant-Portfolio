import type { MetadataRoute } from 'next';
import { getAllGuides } from '@/lib/guides';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://prashantkarna.com';

  const guides = getAllGuides().map((guide) => ({
    url: `${base}/guides/${guide.slug}`,
    lastModified: new Date(guide.updated ?? guide.date),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/guides`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/projects`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.5 },
    { url: `${base}/privacy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.2 },
    ...guides,
  ];
}
