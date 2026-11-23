import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AdSlot from '@/components/AdSlot';
import { getAllGuides, getGuide, getGuideSlugs } from '@/lib/guides';

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return getGuideSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const guide = getGuide(params.slug);
  if (!guide) return { title: 'Guide not found' };
  return {
    title: `${guide.title} | Prashant Karna`,
    description: guide.description,
    keywords: guide.keywords,
    alternates: { canonical: `https://prashantkarna.com/guides/${guide.slug}` },
    openGraph: {
      title: guide.title,
      description: guide.description,
      type: 'article',
      url: `https://prashantkarna.com/guides/${guide.slug}`,
      publishedTime: guide.date,
      modifiedTime: guide.updated ?? guide.date,
      authors: ['Prashant Karna'],
    },
  };
}

export default function GuidePage({ params }: Params) {
  const guide = getGuide(params.slug);
  if (!guide) notFound();

  const related = getAllGuides()
    .filter((g) => g.slug !== guide.slug)
    .slice(0, 2);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: guide.title,
    description: guide.description,
    datePublished: guide.date,
    dateModified: guide.updated ?? guide.date,
    author: {
      '@type': 'Person',
      name: 'Prashant Karna',
      url: 'https://prashantkarna.com',
      jobTitle: 'Data Analyst',
    },
    publisher: { '@type': 'Person', name: 'Prashant Karna' },
    mainEntityOfPage: `https://prashantkarna.com/guides/${guide.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />
      <main className="pt-28 pb-24 px-4 sm:px-6 lg:px-8">
        <article className="max-w-3xl mx-auto">
          <nav className="text-xs text-slate-500 mb-6">
            <Link href="/guides" className="hover:text-slate-300">
              Guides
            </Link>
            <span className="mx-2">/</span>
            <span className="text-slate-400">{guide.category}</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
            {guide.title}
          </h1>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-500 mb-10 pb-8 border-b border-white/5">
            <span className="text-slate-300">Prashant Karna</span>
            <span>Data Analyst, 7 years in MIS and BI</span>
            <time dateTime={guide.date}>
              {new Date(guide.date).toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </time>
            <span>{guide.readMinutes} min read</span>
          </div>

          <div className="prose-article" dangerouslySetInnerHTML={{ __html: guide.html }} />

          <div className="mt-14">
            <AdSlot slot="article-footer" />
          </div>

          <div className="mt-16 glass rounded-2xl p-6">
            <h2 className="text-lg font-semibold text-white mb-2">Need this built in your business?</h2>
            <p className="text-sm text-slate-400 mb-4">
              I build monthly reporting packs, Power BI dashboards and Power Query pipelines for
              small finance and operations teams. Send the messy file and a description of what you
              need to see each month.
            </p>
            <Link
              href="/#contact"
              className="inline-flex px-5 py-2.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
            >
              Get in touch
            </Link>
          </div>

          {related.length > 0 && (
            <div className="mt-16">
              <h2 className="text-sm font-medium text-slate-400 uppercase tracking-widest mb-4">
                More guides
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {related.map((g) => (
                  <Link
                    key={g.slug}
                    href={`/guides/${g.slug}`}
                    className="glass glass-hover rounded-xl p-5"
                  >
                    <span className="text-[11px] text-slate-500">{g.category}</span>
                    <h3 className="text-sm font-semibold text-white mt-1">{g.title}</h3>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>
      </main>
      <Footer />
    </>
  );
}
