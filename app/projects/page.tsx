import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Power BI dashboards, lot-wise stock reconciliation and reporting systems built for HR, finance, retail and textile trading operations.',
  alternates: { canonical: 'https://prashantkarna.com/projects' },
};

const caseStudies = [
  {
    title: 'HR analytics dashboard',
    year: '2025',
    tools: ['Power BI', 'DAX', 'Power Query'],
    summary:
      'Retention risk for a 1,470-person workforce. The report gave HR one screen for attrition by salary band, age and job role instead of four exported tables.',
    points: [
      '16.1% overall attrition modelled against salary band and role level',
      'Attrition patterns surfaced by age, income and department',
      'High-risk segments flagged for retention planning',
    ],
    file: '/case-studies/hr-analytics/HR_Analytics_Dashboard.pdf',
  },
  {
    title: 'Credit card transaction report',
    year: '2025',
    tools: ['Power BI', 'DAX', 'Data modelling'],
    summary:
      'Portfolio performance across revenue, interest and transaction volume, with monthly and category trends on one model.',
    points: [
      '55M dollars of revenue and 8M in interest reconciled to source',
      '45M transactions processed into a monthly grain',
      'Category and acquisition trends tracked month over month',
    ],
    file: '/case-studies/credit-card-analytics/credit_card_project_(2).pdf',
  },
  {
    title: 'Credit card customer report',
    year: '2024',
    tools: ['Power BI', 'Segmentation', 'DAX'],
    summary:
      'Customer value by income, education, job type and family profile, built to support targeting and retention decisions.',
    points: [
      'Segmented customers by job, income and education',
      'Revenue compared across marital status and dependants',
      'Ownership categories used to size cross-sell',
    ],
    file: '/case-studies/customer-analytics/credit_card_project_(1).pdf',
  },
  {
    title: 'Data science salary benchmark',
    year: '2024',
    tools: ['Power BI', 'DAX'],
    summary:
      'Compensation across 3,755 records, ten countries and every experience level, treating remote ratio as a first-class dimension.',
    points: [
      'Salary by title, seniority and company size',
      'Country and remote-work comparison',
      'Hiring-market view rather than a single average',
    ],
    file: '/case-studies/data-science-salary-analysis/Data_Science_Salary_Analysis.pdf',
  },
];

const builds = [
  {
    title: 'Lot-wise fabric stock reconciliation',
    note: 'Lot-level model with inward, outward and job work movement, wastage lines and an exception report for negative balances and dead stock.',
    tools: ['Excel', 'Power Query'],
  },
  {
    title: 'Monthly MIS workbook with Power Query',
    note: 'Five-tab structure: raw export, cleaned query, KPI block, one-pager and notes, with three reconciliation checks before distribution.',
    tools: ['Excel', 'Power Query', 'Pivot tables'],
  },
  {
    title: 'Bank statement OCR to ledger',
    note: 'Python pipeline reading scanned statements with Tesseract and OpenCV, producing a structured ledger for reconciliation.',
    tools: ['Python', 'Tesseract', 'OpenCV'],
  },
  {
    title: 'Music store SQL analysis',
    note: 'Business questions answered on a PostgreSQL music store schema using joins, CTEs, window functions and aggregation.',
    tools: ['PostgreSQL', 'SQL'],
  },
  {
    title: 'Excel VBA reporting automation',
    note: 'Macros replacing manual report assembly: file merging, subtotals and high-volume processing across recurring files.',
    tools: ['Excel', 'VBA'],
  },
  {
    title: 'ETL and data processing workflows',
    note: 'Extraction, cleaning and shaping of SQL Server data into reporting-ready models for Power BI.',
    tools: ['Python', 'Pandas', 'SQL Server'],
  },
];

export default function ProjectsPage() {
  return (
    <div className="wrap py-14 sm:py-16">
      <p className="eyebrow">Work</p>
      <h1 className="display mt-5 max-w-[26ch] text-[2.2rem] sm:text-[2.9rem]">
        Reports, models and the systems that produce them.
      </h1>
      <p className="mt-6 max-w-[62ch] text-[16.5px] leading-relaxed text-[#3a3f46]">
        Four dashboard case studies and six builds. Each one started as a file somebody
        else could not trust.
      </p>

      <section className="mt-14">
        <div className="border-b border-[#14161a] pb-3">
          <h2 className="eyebrow">Case studies</h2>
        </div>

        <div className="grid gap-0 lg:grid-cols-2">
          {caseStudies.map((cs, i) => (
            <article
              key={cs.title}
              className={`border-b border-[#e2ddd4] py-8 ${
                i % 2 === 0 ? 'lg:pr-8' : 'lg:border-l lg:border-[#e2ddd4] lg:pl-8'
              }`}
            >
              <div className="flex items-baseline justify-between gap-4">
                <h3
                  className="text-[20px] leading-snug text-[#14161a]"
                  style={{ fontFamily: 'var(--font-display), Georgia, serif' }}
                >
                  {cs.title}
                </h3>
                <span className="num font-mono text-[11px] text-[#a8a29a]">{cs.year}</span>
              </div>

              <p className="mt-3 text-[14px] leading-relaxed text-[#3a3f46]">{cs.summary}</p>

              <ul className="mt-4 space-y-1.5 text-[13px] text-[#5f646c]">
                {cs.points.map((p) => (
                  <li key={p} className="flex gap-2.5">
                    <span className="mt-[8px] h-px w-2.5 shrink-0 bg-[#c9c2b6]" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap items-center gap-2">
                {cs.tools.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={cs.file}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-block text-[13px] text-[#24405e] underline decoration-[#c9c2b6] underline-offset-4 hover:decoration-[#24405e]"
              >
                Open the dashboard PDF
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <div className="border-b border-[#14161a] pb-3">
          <h2 className="eyebrow">Builds</h2>
        </div>

        <ul>
          {builds.map((b) => (
            <li key={b.title} className="border-b border-[#e2ddd4] py-6">
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                <h3 className="text-[17px] text-[#14161a]">{b.title}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {b.tools.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <p className="mt-2 max-w-[70ch] text-[13.5px] leading-relaxed text-[#5f646c]">
                {b.note}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
