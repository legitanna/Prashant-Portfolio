import type { Metadata } from 'next';
import Link from 'next/link';
import { Figure, ValueChainDiagram } from '@/components/Diagrams';

export const metadata: Metadata = {
  title: 'Services — FMS, IMS and automated reporting',
  description:
    'I build FMS flow management systems, IMS inventory systems, checklists and automated MIS reporting in Power BI, Excel, Google Sheets and Looker Studio for manufacturers and traders.',
  keywords: [
    'FMS',
    'flow management system',
    'IMS',
    'inventory management system',
    'MIS reporting',
    'Power BI reporting',
    'Looker Studio dashboard',
    'Google Sheets automation',
  ],
  alternates: { canonical: 'https://prashantkarna.com/services' },
};

const services = [
  {
    term: 'MIS',
    title: 'Monthly and daily MIS reports',
    body: 'The pack management actually reads: actual against budget, variance by region or category, the five exceptions that matter, and a short written commentary. Built to close in an hour, not a week.',
    points: [
      'Daily flash: sales, collections, cash position',
      'Monthly pack: revenue, margin, units, working capital',
      'Reconciliation checks so the total is defensible',
    ],
  },
  {
    term: 'Automation',
    title: 'Reports that run themselves',
    body: 'The same report, without the manual steps. Power BI with scheduled refresh, Excel with Power Query, Google Sheets with Apps Script, Looker Studio on top. One source, no copy-paste, no version confusion.',
    points: [
      'Power BI models with DAX measures and scheduled refresh',
      'Excel and Power Query for files that stay in the business',
      'Google Sheets and Apps Script for Workspace teams',
      'Looker Studio dashboards for people who only need to look',
    ],
  },
  {
    term: 'FMS',
    title: 'Flow management systems',
    body: 'Every order, job or request tracked through its stages with an owner, a due date and an ageing figure. When something sits with one person for nine days, the sheet says so on day three.',
    points: [
      'Stage model designed around how your work actually moves',
      'Ageing against a per-stage standard, not a guess',
      'Exception view: stuck, overdue, unassigned',
      'Stage history kept automatically, so cycle times become measurable',
    ],
  },
  {
    term: 'IMS',
    title: 'Inventory management systems',
    body: 'Stock built on movements rather than typed balances. Inward, outward, adjustments and job work, with reorder points calculated from your own usage and lead time.',
    points: [
      'Item and lot level balances that reconcile to a stock count',
      'Reorder points and a generated buy list',
      'Job work and wastage tracked as locations, not losses',
      'Dead stock and negative balance exceptions',
    ],
  },
  {
    term: 'Flows',
    title: 'The rest of the paperwork',
    body: 'Manufacturers and traders run on documents. These are the flows that hold them together, built in the same tools you already use.',
    points: [
      'Purchase and sales registers with GST-ready columns',
      'Employee checklists with completion dashboards',
      'Approval flows for purchases, discounts and credit',
      'Receivables ageing with an owner against every party',
      'Dispatch, gate pass and delivery tracking',
    ],
  },
];

const steps = [
  {
    n: '01',
    title: 'The call',
    body: 'Thirty minutes. You describe the report or the flow, and where it breaks today. I ask for one sample export.',
  },
  {
    n: '02',
    title: 'Scope and quote',
    body: 'A written scope: what is built, what it costs, when it is delivered. Fixed fee, no hourly surprises.',
  },
  {
    n: '03',
    title: 'Build',
    body: 'Worked in your own Google or Microsoft account, on your data, with you able to watch progress and correct the rules early.',
  },
  {
    n: '04',
    title: 'Handover',
    body: 'A working system, a one-page document explaining how to refresh it, and two weeks of support for the questions that appear in week two.',
  },
];

export default function ServicesPage() {
  return (
    <>
      <div className="wrap pb-4 pt-14 sm:pt-20">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-[#c8a86a]" />
          <p className="eyebrow">Services</p>
        </div>

        <h1 className="display mt-7 max-w-[24ch] text-[2.4rem] sm:text-[3.2rem]">
          Systems that produce the numbers themselves.
        </h1>

        <p className="mt-6 max-w-[60ch] text-[16.5px] leading-relaxed text-[#4a463e]">
          I build reporting and operations systems for manufacturers and traders, in the tools
          your team already opens every day. Fixed scope, fixed fee, handed over working.
        </p>

        <div className="mt-12 flex flex-wrap gap-x-8 gap-y-2 border-y border-[#e4d9c4] py-4 font-mono text-[10.5px] uppercase tracking-[0.12em] text-[#8a8378]">
          <span>MIS</span>
          <span>Automation</span>
          <span>FMS</span>
          <span>IMS</span>
          <span>Flows</span>
          <span className="ml-auto hidden sm:inline">Five services</span>
        </div>
      </div>

      <section className="band mt-10 border-y border-[#e4d9c4] py-10">
        <div className="wrap">
          <Figure caption="Every step is tracked where it happens. The report reads all of them, not a copy of one.">
            <ValueChainDiagram className="h-auto w-full" />
          </Figure>
        </div>
      </section>

      <div className="wrap">
        <section className="pt-16">
          <div className="flex items-baseline justify-between gap-6 border-b border-[#c8a86a] pb-3">
            <h2 className="eyebrow">What I build</h2>
            <span className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-[#8a8378]">
              Fixed scope · fixed fee
            </span>
          </div>

          <div>
            {services.map((s, i) => (
              <article
                key={s.title}
                className="grid gap-3 border-b border-[#e4d9c4] py-9 lg:grid-cols-[7.5rem_1fr] lg:gap-10"
              >
                <div>
                  <p className="num font-mono text-[11.5px] text-[#b08b4a]">
                    {String(i + 1).padStart(2, '0')}
                  </p>
                  <p className="mt-1.5 font-mono text-[10.5px] uppercase tracking-[0.14em] text-[#7e5e24]">
                    {s.term}
                  </p>
                </div>

                <div>
                  <h3
                    className="text-[22px] leading-snug text-[#1a1713]"
                    style={{ fontFamily: 'var(--font-display), Georgia, serif' }}
                  >
                    {s.title}
                  </h3>
                  <p className="mt-2.5 max-w-[62ch] text-[15px] leading-relaxed text-[#4a463e]">
                    {s.body}
                  </p>
                  <ul className="mt-5 grid gap-x-10 gap-y-1.5 sm:grid-cols-2">
                    {s.points.map((p) => (
                      <li
                        key={p}
                        className="flex gap-2.5 text-[13.5px] leading-relaxed text-[#6b655a]"
                      >
                        <span className="mt-[9px] h-px w-2.5 shrink-0 bg-[#c8a86a]" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <div className="flex items-baseline justify-between gap-6 border-b border-[#c8a86a] pb-3">
            <h2 className="eyebrow">How it runs</h2>
            <span className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-[#8a8378]">
              Two to four weeks
            </span>
          </div>

          <div className="grid gap-x-12 gap-y-9 py-9 sm:grid-cols-2">
            {steps.map((s) => (
              <div key={s.n} className="border-t border-[#e4d9c4] pt-5">
                <p className="num font-mono text-[11.5px] text-[#b08b4a]">{s.n}</p>
                <h3 className="mt-2.5 text-[17px] text-[#1a1713]">{s.title}</h3>
                <p className="mt-2 max-w-[46ch] text-[13.5px] leading-relaxed text-[#6b655a]">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="band mt-6 border-y border-[#e4d9c4] py-10">
        <div className="wrap">
          <div className="grid gap-4 sm:grid-cols-[14rem_1fr] sm:gap-10">
            <p className="eyebrow">Before we talk</p>
            <p className="max-w-[62ch] text-[16px] leading-relaxed text-[#33302a]">
              Have three things ready and the conversation is twice as useful: one sample
              export of the data, how often the report is produced, and who reads it. The last
              one matters most. A report with no named reader is a report nobody uses.
            </p>
          </div>
        </div>
      </section>

      <div className="wrap pb-16 pt-12">
        <section className="flex flex-wrap items-end justify-between gap-7 border-t border-[#c8a86a] pt-9">
          <p className="max-w-[42ch] text-[21px] leading-relaxed text-[#33302a]">
            Tell me what the report has to answer, and I will tell you what it takes to build
            it.
          </p>
          <Link href="/contact" className="btn-solid shrink-0">
            Let&apos;s connect
            <span aria-hidden="true">→</span>
          </Link>
        </section>
      </div>
    </>
  );
}
