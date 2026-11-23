import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: 'https://prashantkarna.com/sitemap.xml',
    host: 'https://prashantkarna.com',
  };
}
