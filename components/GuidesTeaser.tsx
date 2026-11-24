import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getAllGuides } from '@/lib/guides';

export default function GuidesTeaser() {
  const guides = getAllGuides().slice(0, 3);
  if (guides.length === 0) return null;

  return (
    <section id="guides" className="section-padding border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-xs font-medium text-blue-400 tracking-widest uppercase mb-3">
              Writing
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
              Reporting work, written down
            </h2>
            <p className="text-slate-400 max-w-xl">
              Guides on MIS reporting, Power Query and Excel for trading and operations teams,
              from what I build day to day.
            </p>
          </div>
          <Link
            href="/guides"
            className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
          >
            All guides <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {guides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="glass glass-hover rounded-2xl p-6 flex flex-col"
            >
              <span className="text-[11px] font-medium text-slate-400 bg-white/5 border border-white/10 rounded-full px-2.5 py-1 self-start">
                {guide.category}
              </span>
              <h3 className="text-base font-semibold text-white mt-4 leading-snug">
                {guide.title}
              </h3>
              <p className="text-sm text-slate-400 mt-2 flex-1">{guide.description}</p>
              <span className="text-xs text-slate-500 mt-4">{guide.readMinutes} min read</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
