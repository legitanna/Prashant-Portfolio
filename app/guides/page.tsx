import type { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { getAllGuides } from '@/lib/guides';

export const metadata: Metadata = {
  title: 'Guides | Excel, Power Query and MIS Reporting',
  description:
    'Practical guides on Excel reporting, Power Query, Power BI and MIS workflows for small teams, written by a data analyst with seven years of hands-on experience.',
  alternates: { canonical: 'https://prashantkarna.com/guides' },
};

export default function GuidesIndex() {
  const guides = getAllGuides();
  const [featured, ...rest] = guides;

  return (
    <>
      <Navigation />
      <main className="pt-28 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-medium text-blue-400 tracking-widest uppercase mb-3">Guides</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Reporting work, written down
          </h1>
          <p className="text-slate-400 max-w-2xl mb-14">
            Everything here comes from building monthly reports, dashboards and data pipelines for
            finance, operations and pharma teams. No theory, no tool reviews nobody asked for.
          </p>

          {featured && (
            <Link
              href={`/guides/${featured.slug}`}
              className="block glass glass-hover rounded-2xl p-8 mb-10"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="px-2.5 py-1 text-[11px] font-medium text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-full">
                  {featured.category}
                </span>
                <span className="text-xs text-slate-500">{featured.readMinutes} min read</span>
              </div>
              <h2 className="text-2xl font-bold text-white mb-3">{featured.title}</h2>
              <p className="text-slate-400 max-w-2xl">{featured.description}</p>
              <span className="inline-block mt-5 text-sm text-blue-400">Read the guide</span>
            </Link>
          )}

          <div className="grid gap-4">
            {rest.map((guide) => (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="block glass glass-hover rounded-xl p-6"
              >
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="text-[11px] font-medium text-slate-400 bg-white/5 border border-white/10 rounded-full px-2.5 py-1">
                    {guide.category}
                  </span>
                  <span className="text-xs text-slate-500">{guide.readMinutes} min read</span>
                </div>
                <h2 className="text-lg font-semibold text-white">{guide.title}</h2>
                <p className="text-sm text-slate-400 mt-2">{guide.description}</p>
              </Link>
            ))}
          </div>

          {guides.length === 0 && (
            <p className="text-slate-500">First guide is being written. Check back shortly.</p>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
