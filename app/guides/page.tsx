import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllGuides } from '@/lib/guides';

export const metadata: Metadata = {
  title: 'Guides — MIS reporting, Excel and Power Query',
  description:
    'Practical guides on monthly MIS reports, Power Query, Power BI dashboards and stock or ledger reporting, written from seven years of hands-on work.',
  alternates: { canonical: 'https://prashantkarna.com/guides' },
};

export default function GuidesIndex() {
  const guides = getAllGuides();

  return (
    <div className="wrap py-14 sm:py-16">
      <p className="eyebrow">Guides</p>
      <h1 className="display mt-5 max-w-[24ch] text-[2.2rem] sm:text-[2.9rem]">
        Reporting work, written down.
      </h1>
      <p className="mt-6 max-w-[60ch] text-[16.5px] leading-relaxed text-[#3a3f46]">
        Everything here comes from building reports for finance, pharma, events and
        textile trading teams. Formulas that work, checks that catch errors, and the parts
        of a report that fail quietly.
      </p>

      <div className="mt-12 border-b border-[#14161a] pb-3">
        <p className="eyebrow">{guides.length} articles</p>
      </div>

      <ol>
        {guides.map((guide, i) => (
          <li key={guide.slug} className="border-b border-[#e2ddd4]">
            <Link href={`/guides/${guide.slug}`} className="group grid gap-2 py-7 sm:grid-cols-[3rem_1fr_9rem] sm:gap-5">
              <span className="num font-mono text-[12px] text-[#a8a29a]">
                {String(i + 1).padStart(2, '0')}
              </span>

              <span>
                <span
                  className="block text-[21px] leading-snug text-[#14161a] group-hover:underline group-hover:decoration-[#c9c2b6] group-hover:underline-offset-4"
                  style={{ fontFamily: 'var(--font-display), Georgia, serif' }}
                >
                  {guide.title}
                </span>
                <span className="mt-2 block max-w-[62ch] text-[14px] leading-relaxed text-[#5f646c]">
                  {guide.description}
                </span>
              </span>

              <span className="flex items-start justify-between gap-4 sm:block sm:text-right">
                <span className="font-mono text-[10.5px] uppercase tracking-[0.1em] text-[#6b7078]">
                  {guide.category}
                </span>
                <span className="mt-1 block font-mono text-[10.5px] text-[#a8a29a]">
                  {guide.readMinutes} min
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
