'use client';

import { MapPin, Calendar } from 'lucide-react';

const experiences = [
  {
    company: 'Samvidhan Leadership Program',
    role: 'Data Analyst',
    period: '2025 – Present',
    location: 'India',
    type: 'Current',
    color: 'border-blue-500',
    dotColor: 'bg-blue-500',
    glowColor: 'shadow-blue-500/30',
    responsibilities: [
      'Designed campaign analytics dashboards tracking election performance metrics',
      'Performed election data analysis to identify constituency-level trends',
      'Developed Power BI reports for leadership decision-making',
      'Built Python web scrapers for political data aggregation',
    ],
    tech: ['Power BI', 'Python', 'SQL', 'Web Scraping'],
  },
  {
    company: 'Shivaji Infotech',
    role: 'Data Analyst',
    period: '2024 – 2025',
    location: 'India',
    type: 'Previous',
    color: 'border-cyan-500/50',
    dotColor: 'bg-cyan-500',
    glowColor: 'shadow-cyan-500/20',
    responsibilities: [
      'Owned U.S. pharmacy analytics dashboards used by operations teams',
      'Built Power BI reports from complex SQL queries across multiple data sources',
      'Validated data pipelines ensuring accuracy of pharmacy transaction records',
      'Created SQL-based automated reporting reducing manual effort by 60%',
    ],
    tech: ['Power BI', 'SQL', 'DAX', 'Excel'],
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
      'Managed financial reporting and MIS for the company across all business units',
      'Automated recurring MIS reports using Excel macros and Power Query',
      'Led migration of static Excel reports to interactive Power BI dashboards',
      'Delivered weekly/monthly P&L and KPI dashboards to senior management',
    ],
    tech: ['Power BI', 'Excel', 'Power Query', 'DAX', 'MIS'],
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
      'Tracked event analytics and footfall data for exhibitions and trade fairs',
      'Maintained budget tracking dashboards to monitor expenditure vs. targets',
      'Generated ROI reports for sponsors and stakeholders post each event',
      'Streamlined data collection processes across event operations teams',
    ],
    tech: ['Excel', 'MIS Reporting', 'Data Analysis'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-medium text-blue-400 tracking-widest uppercase mb-3">Career Journey</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Work Experience</h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            7+ years across finance, pharma, politics, and events — always translating data into decisions.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-blue-500/20 to-transparent md:-translate-x-1/2" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <div
                key={exp.company}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-6">
                  <div className={`w-4 h-4 rounded-full ${exp.dotColor} ring-4 ring-[#070d1a] shadow-lg ${exp.glowColor}`} />
                </div>

                {/* Date badge (desktop) */}
                <div className={`hidden md:flex w-1/2 ${i % 2 === 0 ? 'justify-end pr-12' : 'justify-start pl-12'} items-start pt-4`}>
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                    {exp.type === 'Current' && (
                      <span className="px-2 py-0.5 text-xs bg-blue-500/15 text-blue-400 rounded-full border border-blue-500/20">Current</span>
                    )}
                  </div>
                </div>

                {/* Card */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                  <div className={`glass rounded-2xl p-6 border-l-2 ${exp.color} border-t border-r border-b border-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-0.5`}>
                    {/* Mobile date */}
                    <div className="flex items-center gap-2 text-xs text-slate-500 mb-3 md:hidden">
                      <Calendar className="w-3 h-3" />
                      {exp.period}
                      {exp.type === 'Current' && (
                        <span className="px-2 py-0.5 bg-blue-500/15 text-blue-400 rounded-full border border-blue-500/20">Current</span>
                      )}
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
                        <span key={t} className="px-2.5 py-1 text-xs bg-white/5 text-slate-400 rounded-lg border border-white/5">
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
