import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Résumé',
  description:
    'Résumé of Prashant Karna, MIS executive and reporting specialist: Google Sheets, Apps Script, Looker Studio, Power BI and SQL.',
  alternates: { canonical: 'https://prashantkarna.com/resume' },
  robots: { index: false },
};

const roles = [
  {
    period: '2026 — Present',
    role: 'MIS Executive',
    org: 'Textile trading company · Ahmedabad',
    points: [
      'Own the flow management sheet (FMS) tracking order and job flow across sales, stores, job work and dispatch, with stage ageing and exception flags.',
      'Built an employee checklist system where staff mark recurring work complete through a shared Looker Studio view.',
      'Maintain the inventory management sheet (IMS) and publish daily inward, outward and financial reports.',
      'Build internal web apps in Google Apps Script and maintain company websites and IT setup.',
    ],
  },
  {
    period: 'Jul 2025 — Nov 2025',
    role: 'Data Analyst / Analytics Consultant',
    org: 'Samvidhan Leadership Program',
    points: [
      'Built Power BI dashboards for campaign and field performance across constituencies.',
      'Analysed large election datasets for constituency-level trends and anomalies.',
      'Automated document extraction and structuring with Python.',
    ],
  },
  {
    period: 'Aug 2024 — Jun 2025',
    role: 'Data Analyst',
    org: 'OrigaBee',
    points: [
      'Sole analyst for a US pharmacy client: Power BI dashboards and KPI reporting on SQL Server data.',
      'Built ETL and processing workflows in Python, Pandas and SQL, cutting manual reporting effort.',
      'Modelled data and wrote DAX measures for recurring business reporting.',
    ],
  },
  {
    period: '2018 — 2024',
    role: 'MIS Executive cum Data Analyst',
    org: 'Choudhary Shah & Company',
    points: [
      'Produced periodic MIS reports and management dashboards for finance and operations.',
      'Automated recurring reports with Excel formulas, Power Query and VBA, and reconciled data for audit.',
    ],
  },
  {
    period: '2016 — 2018',
    role: 'MIS Executive',
    org: "Vijayan's Fair & Exhibition",
    points: ['Ran operational reporting on event budgets, registrations and activity.'],
  },
];

const systems = [
  'Flow management sheet (FMS) with stage-wise tracking and ageing',
  'Employee checklist system with Looker Studio completion view',
  'Inventory management sheet (IMS) with reorder points and buy list',
  'Daily financial and inward–outward reporting, reconciled before release',
  'Lot-wise fabric stock reconciliation with job work and wastage',
  'Apps Script web apps for internal operations',
];

const skills: [string, string][] = [
  ['Google Workspace', 'Sheets, Apps Script, Looker Studio, Forms, Drive workflows'],
  ['BI', 'Power BI, DAX, Power Query, data modelling, KPI design'],
  ['Data', 'SQL Server, PostgreSQL, Python, Pandas, Tesseract OCR'],
  ['Excel', 'Advanced formulas, pivot tables, VBA, reconciliation'],
  ['Web and IT', 'HTML and CSS, static sites, Git, Workspace administration'],
];

export default function ResumePage() {
  return (
    <div className="mx-auto w-full max-w-[820px] px-6 py-10 print:max-w-none print:px-0 print:py-0">
      <header className="border-b border-[#14161a] pb-3">
        <h1
          className="text-[2rem] leading-none text-[#14161a] print:text-[21pt]"
          style={{ fontFamily: 'var(--font-display), Georgia, serif' }}
        >
          Prashant Karna
        </h1>
        <p className="mt-1.5 text-[13.5px] text-[#2b2f35] print:text-[9.5pt]">
          MIS Executive · Business Systems &amp; Reporting
        </p>
        <p className="mt-1 font-mono text-[10.5px] leading-relaxed text-[#5f646c] print:text-[7.6pt]">
          Ahmedabad, India · prashantkarna6@gmail.com · linkedin.com/in/prashantkarna ·
          github.com/legitanna · prashantkarna.com
        </p>
      </header>

      <p className="mt-4 text-[13px] leading-relaxed text-[#2b2f35] print:mt-3 print:text-[8.6pt] print:leading-[1.45]">
        MIS and reporting professional working across textile trading, finance, healthcare and
        campaign analytics since 2016. I build the systems a company reports from: flow
        management, inventory, checklists, daily financial reporting, and the internal apps that
        hold them together. Google Sheets and Apps Script in practice, Power BI and SQL where the
        data outgrows a spreadsheet.
      </p>

      <section className="mt-5 print:mt-3.5">
        <h2 className="border-b border-[#e2ddd4] pb-1 font-mono text-[10px] uppercase tracking-[0.16em] text-[#14161a] print:text-[7.4pt]">
          Experience
        </h2>

        {roles.map((r) => (
          <div key={r.org} className="mt-3 break-inside-avoid print:mt-2.5">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <p className="text-[13.5px] font-medium text-[#14161a] print:text-[9pt]">
                {r.role}
                <span className="font-normal text-[#5f646c]"> — {r.org}</span>
              </p>
              <p className="num font-mono text-[9.5px] text-[#8a8f97] print:text-[7.2pt]">
                {r.period}
              </p>
            </div>
            <ul className="mt-1 space-y-0.5">
              {r.points.map((p) => (
                <li
                  key={p}
                  className="flex gap-2 text-[12.5px] leading-[1.45] text-[#3a3f46] print:text-[8.2pt] print:leading-[1.38]"
                >
                  <span className="mt-[6px] h-px w-2 shrink-0 bg-[#c9c2b6]" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="mt-5 print:mt-3">
        <h2 className="border-b border-[#e2ddd4] pb-1 font-mono text-[10px] uppercase tracking-[0.16em] text-[#14161a] print:text-[7.4pt]">
          Selected systems
        </h2>
        <ul className="mt-2 grid gap-x-8 gap-y-1 sm:grid-cols-2 print:mt-1.5 print:grid-cols-2 print:gap-y-0.5">
          {systems.map((s) => (
            <li
              key={s}
              className="flex min-w-0 gap-2 text-[12.5px] leading-[1.4] text-[#3a3f46] print:text-[8.2pt] print:leading-[1.32]"
            >
              <span className="mt-[6px] h-px w-2 shrink-0 bg-[#c9c2b6]" />
              <span className="min-w-0">{s}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-5 print:mt-3">
        <h2 className="border-b border-[#e2ddd4] pb-1 font-mono text-[10px] uppercase tracking-[0.16em] text-[#14161a] print:text-[7.4pt]">
          Skills
        </h2>
        <dl className="mt-2 grid gap-x-8 gap-y-1 sm:grid-cols-2 print:mt-1.5 print:grid-cols-2 print:gap-y-0.5">
          {skills.map(([k, v]) => (
            <div key={k} className="min-w-0">
              <dt className="text-[10.5px] uppercase tracking-[0.06em] text-[#8a8f97] print:text-[7pt]">
                {k}
              </dt>
              <dd className="text-[12.5px] leading-[1.4] text-[#3a3f46] print:text-[8.2pt] print:leading-[1.32]">
                {v}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-5 print:mt-3">
        <h2 className="border-b border-[#e2ddd4] pb-1 font-mono text-[10px] uppercase tracking-[0.16em] text-[#14161a] print:text-[7.4pt]">
          Study
        </h2>
        <p className="mt-2 text-[12.5px] leading-[1.45] text-[#3a3f46] print:mt-1.5 print:text-[8.2pt] print:leading-[1.36]">
          PL-300 Power BI Data Analyst (in preparation) · Databricks lakehouse and Delta Lake ·
          Apache Spark and PySpark · Advanced SQL and query performance.
        </p>
      </section>

      <p className="mt-6 font-mono text-[10px] text-[#a8a29a] print:hidden">
        Printing this page produces the PDF version.
      </p>
    </div>
  );
}
