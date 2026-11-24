import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
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
    title: guide.title,
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

  const related = getAllGuides().filter((g) => g.slug !== guide.slug).slice(0, 2);

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

      <article className="wrap-narrow py-12 sm:py-14">
        <nav className="mb-8 font-mono text-[10.5px] uppercase tracking-[0.12em] text-[#8a8f97]">
          <Link href="/guides" className="hover:text-[#14161a]">
            Guides
          </Link>
          <span className="mx-2 text-[#c9c2b6]">/</span>
          <span>{guide.category}</span>
        </nav>

        <h1 className="display text-[2.1rem] leading-[1.12] sm:text-[2.6rem]">{guide.title}</h1>

        <p className="mt-6 max-w-[58ch] text-[17px] leading-relaxed text-[#5f646c]">
          {guide.description}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 border-y border-[#e2ddd4] py-3 font-mono text-[10.5px] uppercase tracking-[0.1em] text-[#8a8f97]">
          <span className="text-[#14161a]">Prashant Karna</span>
          <span>Data analyst</span>
          <time dateTime={guide.date}>
            {new Date(guide.date).toLocaleDateString('en-GB', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </time>
          <span>{guide.readMinutes} min read</span>
        </div>

        <div className="mt-10 prose-article" dangerouslySetInnerHTML={{ __html: guide.html }} />

        <div className="mt-12">
          <AdSlot slot="article-footer" />
        </div>

        <aside className="mt-14 border border-[#e2ddd4] bg-white/60 px-6 py-7">
          <p className="eyebrow">Need this built</p>
          <p className="mt-3 max-w-[52ch] text-[15.5px] leading-relaxed text-[#3a3f46]">
            I build monthly reporting packs, lot-wise stock reports and Power BI dashboards
            for trading and distribution teams. Send the file and what it has to answer.
          </p>
          <Link
            href="/contact"
            className="mt-5 inline-block text-[13px] text-[#24405e] underline decoration-[#c9c2b6] underline-offset-4 hover:decoration-[#24405e]"
          >
            Get in touch
          </Link>
        </aside>

        {related.length > 0 && (
          <section className="mt-14">
            <div className="border-b border-[#14161a] pb-3">
              <h2 className="eyebrow">Read next</h2>
            </div>
            <ul>
              {related.map((g) => (
                <li key={g.slug} className="border-b border-[#e2ddd4]">
                  <Link href={`/guides/${g.slug}`} className="group flex items-baseline justify-between gap-6 py-5">
                    <span>
                      <span className="block font-mono text-[10px] uppercase tracking-[0.1em] text-[#a8a29a]">
                        {g.category}
                      </span>
                      <span className="mt-1 block text-[17px] text-[#14161a] group-hover:underline group-hover:decoration-[#c9c2b6] group-hover:underline-offset-4">
                        {g.title}
                      </span>
                    </span>
                    <span className="shrink-0 font-mono text-[10.5px] text-[#a8a29a]">
                      {g.readMinutes} min
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </article>
    </>
  );
}
