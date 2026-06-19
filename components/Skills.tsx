'use client';

import { BarChart3, Database, Code, FileSpreadsheet, Wrench, Eye } from 'lucide-react';

const skillCategories = [
  {
    icon: BarChart3,
    title: 'BI & Dashboarding',
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/20',
    skills: ['Power BI', 'DAX', 'Power Query', 'Data Modeling', 'Dashboard Design', 'KPI Reporting'],
  },
  {
    icon: Database,
    title: 'Databases & SQL',
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-500/10',
    borderColor: 'border-cyan-500/20',
    skills: ['SQL Server', 'PostgreSQL', 'Joins', 'CTEs', 'Window Functions', 'Query Optimization'],
  },
  {
    icon: Code,
    title: 'Python & Automation',
    color: 'text-sky-400',
    bgColor: 'bg-sky-500/10',
    borderColor: 'border-sky-500/20',
    skills: ['Python', 'Pandas', 'NumPy', 'OpenCV', 'Tesseract OCR', 'Selenium'],
  },
  {
    icon: FileSpreadsheet,
    title: 'Excel & MIS Reporting',
    color: 'text-green-400',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500/20',
    skills: ['Advanced Excel', 'Pivot Tables', 'Power Query', 'VBA Macros', 'MIS Reports', 'Data Cleaning'],
  },
  {
    icon: Wrench,
    title: 'Tools & Platforms',
    color: 'text-amber-400',
    bgColor: 'bg-amber-500/10',
    borderColor: 'border-amber-500/20',
    skills: ['Power BI Service', 'SSMS', 'GitHub', 'VS Code', 'Jupyter Notebook', 'Microsoft 365'],
  },
  {
    icon: Eye,
    title: 'Analytics & Reporting',
    color: 'text-rose-400',
    bgColor: 'bg-rose-500/10',
    borderColor: 'border-rose-500/20',
    skills: ['Data Visualization', 'Trend Analysis', 'Business Insights', 'Data Validation', 'ETL', 'Reporting Automation'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-medium text-blue-400 tracking-widest uppercase mb-3">
            Expertise
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Practical data analytics toolkit covering Power BI, SQL, Python automation, Excel reporting and end-to-end dashboard development.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className={`glass glass-hover rounded-2xl p-6 border ${cat.borderColor}`}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-9 h-9 rounded-xl ${cat.bgColor} border ${cat.borderColor} flex items-center justify-center`}>
                  <cat.icon className={`w-4.5 h-4.5 ${cat.color}`} />
                </div>
                <h3 className="font-semibold text-white text-sm">{cat.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs bg-white/5 text-slate-300 rounded-lg border border-white/5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}