'use client';

import { BarChart2, Database, FileSpreadsheet, Brain } from 'lucide-react';

const highlights = [
  {
    icon: BarChart2,
    label: 'Power BI Reporting',
    desc: 'Dashboards, DAX measures, data modeling and KPI reporting',
  },
  {
    icon: Database,
    label: 'SQL Analysis',
    desc: 'Joins, CTEs, window functions, validation and reporting queries',
  },
  {
    icon: Brain,
    label: 'Python Automation',
    desc: 'Pandas workflows, OCR automation, scraping and data processing',
  },
  {
    icon: FileSpreadsheet,
    label: 'Excel & MIS',
    desc: 'Advanced Excel, VBA macros, Power Query and recurring reports',
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div className="space-y-6">
            <div>
              <p className="text-xs font-medium text-blue-400 tracking-widest uppercase mb-3">
                About Me
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Data Analyst Focused on{' '}
                <span className="text-gradient">Business Reporting</span>
              </h2>

              <div className="space-y-4 text-slate-400 leading-relaxed">
                <p>
                  I&apos;m <span className="text-white font-medium">Prashant Karna</span>, a Data Analyst and Power BI Developer with over{' '}
                  <span className="text-white font-medium">7 years of experience</span> across MIS reporting, business analytics, SQL analysis and dashboard development.
                </p>

                <p>
                  My work includes building interactive <span className="text-blue-400">Power BI dashboards</span>, writing SQL queries, creating DAX measures, automating Excel-based reports and using Python to clean, process and extract data from different sources.
                </p>

                <p>
                  I enjoy converting raw and scattered data into clean, structured and decision-ready reports that help teams track performance, identify issues and take faster action.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {[
                'Power BI',
                'DAX',
                'SQL',
                'Python',
                'Pandas',
                'Power Query',
                'Excel',
                'VBA',
                'Data Modeling',
                'MIS Reporting',
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map((h, i) => (
              <div
                key={h.label}
                className="glass glass-hover rounded-2xl p-5 border border-white/5"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-500/20 flex items-center justify-center mb-4">
                  <h.icon className="w-5 h-5 text-blue-400" />
                </div>

                <h3 className="font-semibold text-white text-sm mb-1">
                  {h.label}
                </h3>

                <p className="text-xs text-slate-500 leading-relaxed">
                  {h.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}