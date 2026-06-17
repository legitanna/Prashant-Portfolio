'use client';

import { BarChart2, Database, FileSpreadsheet, Brain } from 'lucide-react';

const highlights = [
  { icon: BarChart2, label: 'Power BI Expert', desc: 'Complex DAX, data modeling, enterprise dashboards' },
  { icon: Database, label: 'SQL Proficiency', desc: 'Query optimization, reporting, stored procedures' },
  { icon: Brain, label: 'Python Analytics', desc: 'Web scraping, automation, data pipelines' },
  { icon: FileSpreadsheet, label: 'Excel & MIS', desc: 'Advanced formulas, automation, financial reporting' },
];

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left text */}
          <div className="space-y-6">
            <div>
              <p className="text-xs font-medium text-blue-400 tracking-widest uppercase mb-3">About Me</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Data Analyst Who Speaks{' '}
                <span className="text-gradient">Business</span>
              </h2>
              <div className="space-y-4 text-slate-400 leading-relaxed">
                <p>
                  I&apos;m <span className="text-white font-medium">Prashant Karna</span>, a Data Analyst with over 7 years of
                  hands-on experience transforming raw data into strategic business intelligence. My work spans
                  U.S. pharmacy analytics, financial MIS, campaign analytics, and event management.
                </p>
                <p>
                  I specialize in building <span className="text-blue-400">Power BI dashboards</span> that don&apos;t just look good
                  — they drive decisions. From designing complex DAX measures to automating MIS workflows in Excel and Python,
                  I bridge the gap between data complexity and business clarity.
                </p>
                <p>
                  Currently expanding expertise in <span className="text-white font-medium">Databricks, Apache Spark</span>, and
                  advanced SQL to stay ahead of the evolving data landscape.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {['Power BI', 'DAX', 'SQL', 'Python', 'Power Query', 'Excel', 'Data Modeling', 'MIS Automation'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right — feature grid */}
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
                <h3 className="font-semibold text-white text-sm mb-1">{h.label}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
