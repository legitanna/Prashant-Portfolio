import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description:
    'MIS and business systems specialist in Ahmedabad. I build FMS flow management sheets, IMS inventory systems, employee checklists and dashboards in Google Sheets, Apps Script and Looker Studio, with Power BI and SQL where the data outgrows a spreadsheet.',
  keywords: [
    'FMS',
    'flow management system',
    'IMS',
    'inventory management system',
    'checklist system',
    'dashboards',
    'Google Sheets',
    'Apps Script',
    'Looker Studio',
    'MIS reporting',
  ],
  alternates: { canonical: 'https://prashantkarna.com/about' },
};

const experience = [
  {
    period: '2026 — Present',
    role: 'MIS Executive — Business Systems',
    org: 'Maitri Texfab Pvt Ltd, Ahmedabad',
    points: [
      'Own the FMS (flow management system) for the trading operation: every order tracked through booking, design approval, job work, quality check and dispatch, with stage ageing and exception flags.',
      'Designed the company checklist system: recurring tasks assigned per employee, marked complete by staff, and surfaced through a live completion dashboard in Looker Studio.',
      'Maintain the IMS (inventory management system) across inward, outward and adjustments, with reorder points, a generated buy list and a daily inward and outward report.',
      'Publish the daily financial report and monthly MIS pack, reconciled to the books before release.',
      'Build internal web apps and dashboards with Google Apps Script and Looker Studio, and maintain the company websites and IT setup.',
    ],
  },
  {
    period: 'Jul 2025 — Nov 2025',
    role: 'Data Analyst / Analytics Consultant',
    org: 'Samvidhan Leadership Program',
    points: [
      'Built dashboards tracking campaign and field performance across constituencies.',
      'Analysed large election datasets to surface constituency-level trends and anomalies.',
      'Automated extraction and structuring of source documents with Python.',
    ],
  },
  {
    period: 'Aug 2024 — Jun 2025',
    role: 'Data Analyst',
    org: 'OrigaBee',
    points: [
      'Sole analyst supporting operations for a US pharmacy client.',
      'Built Power BI dashboards and KPI reports on SQL Server data.',
      'Wrote ETL and processing workflows in Python, Pandas and SQL; cut manual reporting effort.',
      'Modelled data and wrote DAX measures for recurring business reporting.',
    ],
  },
  {
    period: '2018 — 2024',
    role: 'MIS Executive cum Data Analyst',
    org: 'Choudhary Shah & Company',
    points: [
      'Produced periodic MIS reports and management dashboards for finance and operations.',
      'Automated recurring reports with Excel formulas, Power Query and VBA.',
      'Maintained large datasets and reconciled them for accounting, taxation and audit.',
    ],
  },
  {
    period: '2016 — 2018',
    role: 'MIS Executive',
    org: "Vijayan's Fair & Exhibition",
    points: [
      'Ran operational reporting on event budgets, registrations and activity.',
      'Maintained event records and supported coordination across internal teams.',
    ],
  },
];

const skills = [
  {
    group: 'Systems I build',
    items: ['FMS', 'IMS', 'Checklists', 'Dashboards', 'Approval flows', 'Reorder logic'],
  },
  {
    group: 'Google Workspace',
    items: ['Sheets', 'Apps Script', 'Looker Studio', 'Forms', 'Drive workflows', 'Admin'],
  },
  {
    group: 'BI and dashboards',
    items: ['Power BI', 'DAX', 'Power Query', 'Data modelling', 'KPI design'],
  },
  {
    group: 'Databases',
    items: ['SQL Server', 'PostgreSQL', 'Joins and CTEs', 'Window functions', 'Query tuning'],
  },
  {
    group: 'Python',
    items: ['Pandas', 'NumPy', 'OpenCV', 'Tesseract OCR', 'Selenium'],
  },
  {
    group: 'Excel and reporting',
    items: ['Advanced Excel', 'Pivot tables', 'VBA macros', 'Reconciliation', 'MIS packs'],
  },
];

const learning = [
  { title: 'Databricks', note: 'Lakehouse architecture, Delta Lake, Unity Catalog.' },
  { title: 'Apache Spark', note: 'PySpark, Spark SQL and DataFrames for larger datasets.' },
  { title: 'Advanced SQL', note: 'Window functions, query plans and performance.' },
  { title: 'PL-300', note: 'Preparing for the Microsoft Power BI Data Analyst certification.' },
];

export default function AboutPage() {
  return (
    <div className="wrap-narrow py-14 sm:py-16">
      <p className="eyebrow">About</p>
      <h1 className="display mt-5 max-w-[26ch] text-[2.2rem] sm:text-[2.9rem]">
        I design and run the systems a trading business reports from.
      </h1>

      <div className="mt-8 space-y-5 text-[16.5px] leading-relaxed text-[#3a3f46]">
        <p>
          I am an MIS executive at Maitri Texfab Pvt Ltd, a textile trading company in
          Ahmedabad. My work is not a monthly spreadsheet. It is the operating layer of the
          business: an <strong className="font-semibold text-[#14161a]">FMS</strong> that moves
          every order through its stages, an{' '}
          <strong className="font-semibold text-[#14161a]">IMS</strong> that keeps stock and
          reorder points honest, a{' '}
          <strong className="font-semibold text-[#14161a]">checklist system</strong> that makes
          daily accountability visible, and the{' '}
          <strong className="font-semibold text-[#14161a]">dashboards</strong> that report all
          three.
        </p>
        <p>
          The constraint in a trading business is rarely analytical. It is that the order sits
          with a job worker for nine days and nobody notices until the customer calls. Systems
          like these exist to surface that on day three, while there is still time to act.
        </p>
        <p>
          Most of it runs on Google Sheets, Apps Script and Looker Studio, because the company
          already works inside Google Workspace and a system nobody opens is worth nothing.
          Where the data outgrows a spreadsheet I use Power BI, Power Query and SQL, which is
          the same work with heavier machinery: a finance and audit firm, a US pharmacy
          operation, an election analytics programme, and exhibition operations before that.
        </p>
        <p>
          I write about all of it here, including the parts that failed first. If a report took
          three days to build and one mistake to fix, the guide covers the mistake.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm">
        <a
          href="/Prashant_Karna_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#24405e] underline decoration-[#c9c2b6] underline-offset-4 hover:decoration-[#24405e]"
        >
          Download résumé (PDF)
        </a>
        <a
          href="https://www.linkedin.com/in/prashantkarna/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#24405e] underline decoration-[#c9c2b6] underline-offset-4 hover:decoration-[#24405e]"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/legitanna"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#24405e] underline decoration-[#c9c2b6] underline-offset-4 hover:decoration-[#24405e]"
        >
          GitHub
        </a>
        <a
          href="/resume"
          className="text-[#24405e] underline decoration-[#c9c2b6] underline-offset-4 hover:decoration-[#24405e]"
        >
          Web version
        </a>
      </div>

      <section className="mt-16">
        <div className="border-b border-[#14161a] pb-3">
          <h2 className="eyebrow">Experience</h2>
        </div>

        <ol>
          {experience.map((job) => (
            <li key={job.org} className="grid gap-2 border-b border-[#e2ddd4] py-7 sm:grid-cols-[10rem_1fr] sm:gap-6">
              <p className="num font-mono text-[11px] leading-relaxed text-[#8a8f97]">
                {job.period}
              </p>
              <div>
                <h3 className="text-[17px] text-[#14161a]" style={{ fontFamily: 'var(--font-display), Georgia, serif' }}>
                  {job.role}
                </h3>
                <p className="mt-0.5 text-[13.5px] text-[#5f646c]">{job.org}</p>
                <ul className="mt-3 space-y-1.5 text-[14px] leading-relaxed text-[#3a3f46]">
                  {job.points.map((p) => (
                    <li key={p} className="flex gap-2.5">
                      <span className="mt-[9px] h-px w-2.5 shrink-0 bg-[#c9c2b6]" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-16">
        <div className="border-b border-[#14161a] pb-3">
          <h2 className="eyebrow">Tools</h2>
        </div>

        <dl className="grid gap-x-10 gap-y-7 py-7 sm:grid-cols-2">
          {skills.map((s) => (
            <div key={s.group}>
              <dt className="text-[13px] text-[#14161a]">{s.group}</dt>
              <dd className="mt-2 flex flex-wrap gap-1.5">
                {s.items.map((i) => (
                  <span key={i} className="tag">
                    {i}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-12">
        <div className="border-b border-[#14161a] pb-3">
          <h2 className="eyebrow">Courses and study</h2>
        </div>
        <ul>
          {learning.map((l) => (
            <li key={l.title} className="grid gap-1 border-b border-[#e2ddd4] py-4 sm:grid-cols-[10rem_1fr] sm:gap-6">
              <p className="text-[13.5px] text-[#14161a]">{l.title}</p>
              <p className="text-[13.5px] text-[#5f646c]">{l.note}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
