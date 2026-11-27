import Link from 'next/link';
import Image from 'next/image';
import { getAllGuides } from '@/lib/guides';
import { Figure, PipelineDiagram } from '@/components/Diagrams';

const stats = [
  { value: '07', label: 'years in MIS and BI' },
  { value: '04', label: 'industries reported on' },
  { value: '25', label: 'guides published' },
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

const builds = [
  {
    term: 'FMS',
    name: 'Flow management system',
    text: 'Every order and job work order tracked through its stages, with an owner, a due date and an ageing figure. Anything stuck shows up on day three, not day nine.',
  },
  {
    term: 'IMS',
    name: 'Inventory management system',
    text: 'Item and lot level stock with inward, outward and adjustments, reorder points calculated from lead time and usage, and a buy list generated instead of guessed.',
  },
  {
    term: 'Checklist',
    name: 'Employee task tracking',
    text: 'Recurring work assigned to a person, marked complete by that person, with a read-only completion dashboard so managers see the week without chasing anyone.',
  },
  {
    term: 'Dashboards',
    name: 'Reporting and MIS',
    text: 'Looker Studio and Power BI views reading from the same source as the sheets, so the number in the meeting matches the number in the file.',
  },
];

export default function Home() {
  const guides = getAllGuides().slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="wrap pb-16 pt-16 sm:pt-24">
        <div className="grid items-start gap-12 md:grid-cols-[1fr_165px] md:gap-8 lg:grid-cols-[1fr_250px] lg:gap-16">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#c8a86a]" />
              <p className="eyebrow">Data analyst · Ahmedabad, India</p>
            </div>

            <h1 className="display mt-7 max-w-[24ch] text-[2.4rem] leading-[1.04] sm:text-[2.9rem] md:text-[2.35rem] lg:text-[3.5rem]">
              I build the FMS, IMS and dashboards that keep a business running.
            </h1>

            <p className="mt-7 max-w-[54ch] text-[17px] leading-relaxed text-[#4a463e]">
              Flow management, inventory and reporting systems, built in Google Sheets, Apps
              Script and Looker Studio, with Power BI and SQL where the data outgrows a
              spreadsheet. Banking, pharmaceuticals, exhibitions, campaign analytics: the
              industry changes, the problem does not. The number nobody trusts.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-3">
              <Link href="/guides" className="btn-solid">
                Read the guides
              </Link>
              <Link
                href="/projects"
                className="text-sm text-[#1a1713] underline decoration-[#c8a86a] decoration-1 underline-offset-[5px] transition-colors hover:decoration-[#7e5e24] hover:text-[#7e5e24]"
              >
                See the work
              </Link>
              <a
                href="/Prashant_Karna_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#1a1713] underline decoration-[#c8a86a] decoration-1 underline-offset-[5px] transition-colors hover:decoration-[#7e5e24] hover:text-[#7e5e24]"
              >
                Résumé
              </a>
            </div>
          </div>

          <div className="flex justify-start md:justify-end">
            <div className="w-full max-w-[236px]">
              <div className="border border-[#c8a86a] bg-[#f3e8d2] p-2">
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <Image
                    src="/images/Linkedin_Pic.png"
                    alt="Prashant Karna"
                    fill
                    sizes="236px"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              <p className="mt-2.5 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.12em] text-[#9a917f]">
                <span>Prashant Karna</span>
                <span>2026</span>
              </p>
            </div>
          </div>
        </div>

        <dl className="mt-16 grid grid-cols-1 border-t border-[#c8a86a] sm:grid-cols-3">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`py-7 ${
                i > 0
                  ? 'border-t border-[#e4d9c4] sm:border-l sm:border-t-0 sm:pl-8'
                  : 'sm:pr-8'
              }`}
            >
              <dt className="num text-[2.15rem] leading-none text-[#1a1713]">{s.value}</dt>
              <dd className="mt-2 text-[13px] text-[#6b655a]">{s.label}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Schematic */}
      <section className="band border-y border-[#e4d9c4] py-10">
        <div className="wrap">
          <Figure caption="Flow and stock feed one reporting layer, so the number in the meeting matches the number in the file.">
            <PipelineDiagram className="h-auto w-full" />
          </Figure>
        </div>
      </section>

      {/* What I build */}
      <section className="wrap py-16">
        <div className="flex items-baseline justify-between gap-6 border-b border-[#c8a86a] pb-3">
          <h2 className="eyebrow">What I build</h2>
          <Link
            href="/services"
            className="text-[13px] text-[#7e5e24] underline decoration-[#c8a86a] underline-offset-4 hover:decoration-[#7e5e24]"
          >
            Services
          </Link>
        </div>

        <div className="grid gap-x-12 gap-y-9 py-9 sm:grid-cols-2">
          {builds.map((item, i) => (
            <div key={item.term} className="border-t border-[#e4d9c4] pt-5">
              <div className="flex items-baseline gap-3">
                <span className="num font-mono text-[11px] text-[#b08b4a]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-[#7e5e24]">
                  {item.term}
                </span>
                <h3 className="text-[15.5px] text-[#1a1713]">{item.name}</h3>
              </div>
              <p className="mt-2.5 max-w-[52ch] text-[13.5px] leading-relaxed text-[#6b655a]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Writing */}
      <section className="wrap py-16">
        <div className="flex items-baseline justify-between gap-6 border-b border-[#c8a86a] pb-3">
          <h2 className="eyebrow">Writing</h2>
          <Link
            href="/guides"
            className="text-[13px] text-[#7e5e24] underline decoration-[#c8a86a] underline-offset-4 hover:decoration-[#7e5e24]"
          >
            All 25 guides
          </Link>
        </div>

        <ol>
          {guides.map((guide, i) => (
            <li key={guide.slug} className="border-b border-[#e4d9c4]">
              <Link
                href={`/guides/${guide.slug}`}
                className="group grid grid-cols-[2.2rem_1fr] items-start gap-x-5 py-6 sm:grid-cols-[2.6rem_1fr_7rem]"
              >
                <span className="num pt-1.5 font-mono text-[11.5px] text-[#b08b4a]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span>
                  <span
                    className="block text-[19.5px] leading-snug text-[#1a1713] transition-colors group-hover:text-[#7e5e24]"
                    style={{ fontFamily: 'var(--font-display), Georgia, serif' }}
                  >
                    {guide.title}
                  </span>
                  <span className="mt-1.5 block max-w-[62ch] text-[13.5px] leading-relaxed text-[#6b655a]">
                    {guide.description}
                  </span>
                </span>
                <span className="hidden pt-1.5 text-right font-mono text-[10px] uppercase tracking-[0.1em] text-[#9a917f] sm:block">
                  {guide.readMinutes} min
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </section>

      {/* Work */}
      <section className="wrap py-16">
        <div className="flex items-baseline justify-between gap-6 border-b border-[#c8a86a] pb-3">
          <h2 className="eyebrow">Selected work</h2>
          <Link
            href="/projects"
            className="text-[13px] text-[#7e5e24] underline decoration-[#c8a86a] underline-offset-4 hover:decoration-[#7e5e24]"
          >
            All projects
          </Link>
        </div>

        <ul>
          {work.map((item) => (
            <li key={item.title} className="border-b border-[#e4d9c4]">
              <Link
                href={item.href}
                className="group grid gap-2 py-6 sm:grid-cols-[3rem_1fr] sm:gap-x-5"
              >
                <span className="num pt-1.5 font-mono text-[11.5px] text-[#b08b4a]">
                  {item.year}
                </span>
                <span>
                  <span
                    className="block text-[19.5px] text-[#1a1713] transition-colors group-hover:text-[#7e5e24]"
                    style={{ fontFamily: 'var(--font-display), Georgia, serif' }}
                  >
                    {item.title}
                  </span>
                  <span className="mt-1.5 block max-w-[62ch] text-[13.5px] leading-relaxed text-[#6b655a]">
                    {item.note}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Work with me */}
      <section className="band border-y border-[#e4d9c4] py-14">
        <div className="wrap">
          <div className="flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">Work with me</p>
              <p className="mt-4 max-w-[46ch] text-[20px] leading-relaxed text-[#33302a]">
                Building a reporting system and not sure where to start? I take on a small
                number of freelance builds alongside my work.
              </p>
            </div>
            <Link href="/contact" className="btn-solid shrink-0">
              Let&apos;s connect
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
