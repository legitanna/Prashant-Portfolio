'use client';

import { MapPin, Calendar } from 'lucide-react';

const experiences = [
  {
    company: 'Samvidhan Leadership Program',
    role: 'Data Analyst / Analytics Consultant',
    period: 'Jul 2025 – Nov 2025',
    location: 'India',
    type: 'Previous',
    color: 'border-blue-500',
    dotColor: 'bg-blue-500',
    glowColor: 'shadow-blue-500/30',
    responsibilities: [
      'Designed analytics dashboards and reports to monitor campaign and field performance metrics',
      'Performed large-scale election data analysis to identify constituency-level trends and anomalies',
      'Developed Power BI dashboards to support leadership decision-making and reporting',
      'Built Python-based automation and data extraction workflows for structured analysis',
    ],
    tech: ['Power BI', 'Python', 'SQL', 'Excel'],
  },
  {
    company: 'Shivaji Infotech',
    role: 'Data Analyst',
    period: 'Aug 2024 – Jun 2025',
    location: 'India',
    type: 'Previous',
    color: 'border-cyan-500/50',
    dotColor: 'bg-cyan-500',
    glowColor: 'shadow-cyan-500/20',
    responsibilities: [
      'Served as the sole Data Analyst supporting operations for a U.S. pharmacy client',
      'Developed interactive Power BI dashboards and KPI reports using SQL Server data',
      'Built ETL and data-processing workflows using Python, Pandas and SQL',
      'Automated reporting processes, improving efficiency and reducing manual effort',
      'Designed DAX measures and data models for business reporting and decision-making',
    ],
    tech: ['Power BI', 'SQL Server', 'DAX', 'Python', 'Pandas', 'Excel'],
  },
  {
    company: 'Choudhary Shah & Company',
    role: 'MIS Executive cum Data Analyst',
    period: '2018 – 2024',
    location: 'India',
    type: 'Previous',
    color: 'border-slate-500/50',
    dotColor: 'bg-slate-400',
    glowColor: 'shadow-slate-400/20',
    responsibilities: [
      'Managed financial and operational data used for reporting and business analysis',
      'Prepared periodic MIS reports and dashboards for management',
      'Automated repetitive reporting tasks using Excel formulas, Power Query and VBA',
      'Maintained large datasets and ensured data accuracy and consistency',
      'Supported accounting, taxation and audit-related reporting activities',
    ],
    tech: ['Excel', 'Power Query', 'VBA', 'Power BI', 'MIS Reporting'],
  },
  {
    company: "Vijayan's Fair & Exhibition Pvt. Ltd.",
    role: 'MIS Executive',
    period: '2016 – 2018',
    location: 'India',
    type: 'Previous',
    color: 'border-slate-600/50',
    dotColor: 'bg-slate-500',
    glowColor: 'shadow-slate-500/20',
    responsibilities: [
      'Managed operational reports and maintained event-related data records',
      'Prepared MIS reports to track budgets, registrations and business activities',
      'Supported event operations through reporting and data management',
      'Coordinated with internal teams and stakeholders to ensure smooth execution of exhibitions and trade fairs',
      'Assisted management with data-driven planning and reporting',
    ],
    tech: ['Excel', 'MIS Reporting', 'Data Analysis'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-medium text-blue-400 tracking-widest uppercase mb-3">
            Career Journey
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Work Experience
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            7+ years across analytics, MIS reporting, finance operations, campaign analytics and business reporting.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-blue-500/20 to-transparent md:-translate-x-1/2" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <div
                key={exp.company}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-6">
                  <div className={`w-4 h-4 rounded-full ${exp.dotColor} ring-4 ring-[#070d1a] shadow-lg ${exp.glowColor}`} />
                </div>

                <div className={`hidden md:flex w-1/2 ${i % 2 === 0 ? 'justify-end pr-12' : 'justify-start pl-12'} items-start pt-4`}>
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                  <div className={`glass rounded-2xl p-6 border-l-2 ${exp.color} border-t border-r border-b border-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-0.5`}>
                    <div className="flex items-center gap-2 text-xs text-slate-500 mb-3 md:hidden">
                      <Calendar className="w-3 h-3" />
                      {exp.period}
                    </div>

                    <div className="mb-4">
                      <h3 className="text-lg font-bold text-white">{exp.company}</h3>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-sm text-blue-400 font-medium">{exp.role}</span>
                        <span className="flex items-center gap-1 text-xs text-slate-500">
                          <MapPin className="w-3 h-3" /> {exp.location}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {exp.responsibilities.map((r) => (
                        <li key={r} className="flex items-start gap-2 text-sm text-slate-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500/60 flex-shrink-0 mt-1.5" />
                          {r}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 text-xs bg-white/5 text-slate-400 rounded-lg border border-white/5"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}