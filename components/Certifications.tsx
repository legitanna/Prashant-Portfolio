'use client';

import { Award, CheckCircle2 } from 'lucide-react';

const certifications = [
  {
    title: 'SQL for Data Science & Analytics',
    issuer: 'Udemy / Online Platform',
    category: 'Data Engineering',
    color: 'border-blue-500/20',
    bg: 'from-blue-600/10 to-transparent',
    iconColor: 'text-blue-400',
    iconBg: 'bg-blue-500/15',
    skills: ['SELECT Queries', 'Joins & Subqueries', 'Aggregations', 'CTEs'],
  },
  {
    title: 'Power BI Data Visualization & Reporting',
    issuer: 'Microsoft / Online Platform',
    category: 'Business Intelligence',
    color: 'border-cyan-500/20',
    bg: 'from-cyan-600/10 to-transparent',
    iconColor: 'text-cyan-400',
    iconBg: 'bg-cyan-500/15',
    skills: ['Power BI Desktop', 'DAX Basics', 'Report Design', 'Dashboards'],
  },
  {
    title: 'Python for Data Analysis',
    issuer: 'Online Platform',
    category: 'Programming',
    color: 'border-green-500/20',
    bg: 'from-green-600/10 to-transparent',
    iconColor: 'text-green-400',
    iconBg: 'bg-green-500/15',
    skills: ['Pandas', 'NumPy', 'Matplotlib', 'Data Wrangling'],
  },
  {
    title: 'Data Science and Analytics',
    issuer: 'Online Platform',
    category: 'Data Science',
    color: 'border-amber-500/20',
    bg: 'from-amber-600/10 to-transparent',
    iconColor: 'text-amber-400',
    iconBg: 'bg-amber-500/15',
    skills: ['Statistical Analysis', 'Machine Learning Basics', 'EDA', 'Data Storytelling'],
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-medium text-blue-400 tracking-widest uppercase mb-3">Credentials</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Certifications</h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Validated skills through structured coursework and industry-recognized certifications.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className={`glass glass-hover rounded-2xl p-6 border ${cert.color} bg-gradient-to-br ${cert.bg} flex flex-col`}
            >
              <div className={`w-10 h-10 rounded-xl ${cert.iconBg} flex items-center justify-center mb-4`}>
                <Award className={`w-5 h-5 ${cert.iconColor}`} />
              </div>

              <span className={`text-xs font-medium ${cert.iconColor} mb-2`}>{cert.category}</span>
              <h3 className="font-semibold text-white text-sm leading-snug mb-2">{cert.title}</h3>
              <p className="text-xs text-slate-500 mb-4">{cert.issuer}</p>

              <div className="flex flex-col gap-1.5 mt-auto">
                {cert.skills.map((s) => (
                  <div key={s} className="flex items-center gap-2 text-xs text-slate-400">
                    <CheckCircle2 className={`w-3 h-3 ${cert.iconColor} flex-shrink-0`} />
                    {s}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
