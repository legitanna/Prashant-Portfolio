import Link from 'next/link';
import Image from 'next/image';
import { getAllGuides } from '@/lib/guides';

const stats = [
  { value: '07', label: 'years in MIS and BI' },
  { value: '04', label: 'industries reported on' },
  { value: '07', label: 'guides published' },
];

const work = [
  {
    year: '2025',
    title: 'HR analytics dashboard',
    note: 'Attrition and workforce risk for 1,470 employees, built in Power BI with DAX measures on salary bands and job roles.',
    href: '/projects',
  },
  {
    year: '2025',
    title: 'Lot-wise stock reconciliation',
    note: 'Fabric stock by dye lot, with job work movement and wastage, replacing an item-level report that hid dead stock.',
    href: '/projects',
  },
  {
    year: '2024',
    title: 'Credit card portfolio reporting',
    note: '55 million dollars of revenue and eight million in interest tracked across monthly transaction and customer views.',
    href: '/projects',
  },
];

export default function Home() {
  const guides = getAllGuides().slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="wrap pb-14 pt-16 sm:pt-20">
        <div className="grid items-start gap-12 md:grid-cols-[1fr_200px] md:gap-10 lg:grid-cols-[1fr_260px] lg:gap-16">
          <div>
            <p className="eyebrow">Data analyst · Ahmedabad, India</p>

            <h1 className="display mt-6 max-w-[18ch] text-[2.6rem] sm:text-[3.4rem]">
              I build the reports a business actually runs on.
            </h1>

            <p className="mt-7 max-w-[54ch] text-[17px] leading-relaxed text-[#4a4f56]">
              Seven years of MIS and analytics, most recently for textile trading and
              pharmaceutical distribution. Excel, Power Query, Power BI and SQL — the
              unglamorous work of making a number trustworthy enough to decide on.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-3">
              <Link href="/guides" className="btn-solid">
                Read the guides
              </Link>
              <Link
                href="/projects"
                className="text-sm text-[#14161a] underline decoration-[#c9c2b6] decoration-1 underline-offset-[5px] hover:decoration-[#14161a]"
              >
                See the work
              </Link>
              <a
                href="/Prashant_Karna_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#14161a] underline decoration-[#c9c2b6] decoration-1 underline-offset-[5px] hover:decoration-[#14161a]"
              >
                Résumé
              </a>
            </div>
          </div>

          <div className="flex justify-start md:justify-end">
            <div className="w-full max-w-[240px] border border-[#e2ddd4] bg-white p-2 md:max-w-[180px] lg:max-w-[240px]">
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src="/images/Linkedin_Pic.png"
                  alt="Prashant Karna"
                  fill
                  sizes="240px"
                  className="object-cover"
                  priority
                />
              </div>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.12em] text-[#8a8f97]">
                Prashant Karna · 2026
              </p>
            </div>
          </div>
        </div>

        <dl className="mt-16 grid grid-cols-1 border-t border-[#e2ddd4] sm:grid-cols-3">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`py-6 sm:py-7 ${
                i > 0 ? 'border-t border-[#e2ddd4] sm:border-l sm:border-t-0 sm:pl-8' : 'sm:pr-8'
              }`}
            >
              <dt className="num text-[2rem] leading-none text-[#14161a]">{s.value}</dt>
              <dd className="mt-2 text-[13px] text-[#5f646c]">{s.label}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Writing */}
      <section className="wrap py-14">
        <div className="flex items-end justify-between gap-6 border-b border-[#14161a] pb-3">
          <div>
            <h2 className="eyebrow">Writing</h2>
          </div>
          <Link href="/guides" className="text-[13px] text-[#24405e] hover:underline">
            All guides
          </Link>
        </div>

        <ol>
          {guides.map((guide, i) => (
            <li key={guide.slug} className="border-b border-[#e2ddd4]">
              <Link
                href={`/guides/${guide.slug}`}
                className="group grid grid-cols-[2.5rem_1fr] items-start gap-x-4 py-6 sm:grid-cols-[3rem_1fr_7rem]"
              >
                <span className="num pt-1 font-mono text-[12px] text-[#a8a29a]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span>
                  <span
                    className="block text-[19px] leading-snug text-[#14161a] group-hover:underline group-hover:decoration-[#c9c2b6] group-hover:underline-offset-4"
                    style={{ fontFamily: 'var(--font-display), Georgia, serif' }}
                  >
                    {guide.title}
                  </span>
                  <span className="mt-1.5 block max-w-[62ch] text-[13.5px] leading-relaxed text-[#5f646c]">
                    {guide.description}
                  </span>
                </span>
                <span className="hidden pt-1 text-right font-mono text-[10.5px] uppercase tracking-[0.1em] text-[#8a8f97] sm:block">
                  {guide.readMinutes} min
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </section>

      {/* Work */}
      <section className="wrap py-14">
        <div className="flex items-end justify-between gap-6 border-b border-[#14161a] pb-3">
          <h2 className="eyebrow">Selected work</h2>
          <Link href="/projects" className="text-[13px] text-[#24405e] hover:underline">
            All projects
          </Link>
        </div>

        <ul>
          {work.map((item) => (
            <li key={item.title} className="border-b border-[#e2ddd4]">
              <Link href={item.href} className="group grid gap-2 py-6 sm:grid-cols-[3rem_1fr] sm:gap-x-4">
                <span className="num pt-1 font-mono text-[12px] text-[#a8a29a]">{item.year}</span>
                <span>
                  <span className="block text-[19px] text-[#14161a] group-hover:underline group-hover:decoration-[#c9c2b6] group-hover:underline-offset-4"
                    style={{ fontFamily: 'var(--font-display), Georgia, serif' }}
                  >
                    {item.title}
                  </span>
                  <span className="mt-1.5 block max-w-[62ch] text-[13.5px] leading-relaxed text-[#5f646c]">
                    {item.note}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Availability */}
      <section className="wrap py-14">
        <div className="border border-[#e2ddd4] bg-white/40 px-6 py-8 sm:px-10 sm:py-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="eyebrow">Availability</p>
              <p className="mt-3 max-w-[46ch] text-[17px] leading-relaxed text-[#2b2f35]">
                Open to data analyst and MIS roles, and to short reporting builds for
                trading and distribution businesses.
              </p>
            </div>
            <Link href="/contact" className="btn-ghost shrink-0">
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
