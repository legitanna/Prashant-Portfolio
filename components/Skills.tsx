'use client';

import { BarChart3, Database, Code, FileSpreadsheet, Wrench, Eye } from 'lucide-react';

const skillCategories = [
  {
    icon: BarChart3,
    title: 'Business Intelligence',
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/20',
    skills: [
      { name: 'Power BI', level: 95 },
      { name: 'DAX', level: 90 },
      { name: 'Data Modeling', level: 88 },
      { name: 'Power Query', level: 85 },
    ],
  },
  {
    icon: Database,
    title: 'Data & Databases',
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-500/10',
    borderColor: 'border-cyan-500/20',
    skills: [
      { name: 'SQL', level: 92 },
      { name: 'Query Optimization', level: 82 },
      { name: 'Data Validation', level: 88 },
      { name: 'ETL', level: 78 },
    ],
  },
  {
    icon: Code,
    title: 'Programming',
    color: 'text-sky-400',
    bgColor: 'bg-sky-500/10',
    borderColor: 'border-sky-500/20',
    skills: [
      { name: 'Python', level: 80 },
      { name: 'Pandas', level: 78 },
      { name: 'Web Scraping', level: 75 },
      { name: 'Automation', level: 80 },
    ],
  },
  {
    icon: FileSpreadsheet,
    title: 'Reporting & MIS',
    color: 'text-green-400',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500/20',
    skills: [
      { name: 'Excel (Advanced)', level: 95 },
      { name: 'MIS Automation', level: 88 },
      { name: 'Financial Reporting', level: 85 },
      { name: 'Dashboard Design', level: 90 },
    ],
  },
  {
    icon: Wrench,
    title: 'Tools & Platforms',
    color: 'text-amber-400',
    bgColor: 'bg-amber-500/10',
    borderColor: 'border-amber-500/20',
    skills: [
      { name: 'Power BI Service', level: 88 },
      { name: 'Microsoft 365', level: 92 },
      { name: 'SharePoint', level: 75 },
      { name: 'Git & GitHub', level: 70 },
    ],
  },
  {
    icon: Eye,
    title: 'Analytics',
    color: 'text-rose-400',
    bgColor: 'bg-rose-500/10',
    borderColor: 'border-rose-500/20',
    skills: [
      { name: 'Data Visualization', level: 93 },
      { name: 'KPI Design', level: 88 },
      { name: 'Trend Analysis', level: 85 },
      { name: 'Statistical Analysis', level: 75 },
    ],
  },
];

function SkillBar({ name, level, color }: { name: string; level: number; color: string }) {
  return (
    <div>
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm text-slate-300">{name}</span>
        <span className={`text-xs font-medium ${color}`}>{level}%</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-1000 bg-gradient-to-r ${
            color.includes('blue') ? 'from-blue-600 to-blue-400' :
            color.includes('cyan') ? 'from-cyan-600 to-cyan-400' :
            color.includes('sky') ? 'from-sky-600 to-sky-400' :
            color.includes('green') ? 'from-green-600 to-green-400' :
            color.includes('amber') ? 'from-amber-600 to-amber-400' :
            'from-rose-600 to-rose-400'
          }`}
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-medium text-blue-400 tracking-widest uppercase mb-3">Expertise</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Skills & Technologies</h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            A full-stack data analyst toolkit — from raw SQL queries to polished Power BI dashboards.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className={`glass glass-hover rounded-2xl p-6 border ${cat.borderColor}`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-9 h-9 rounded-xl ${cat.bgColor} border ${cat.borderColor} flex items-center justify-center`}>
                  <cat.icon className={`w-4.5 h-4.5 ${cat.color}`} />
                </div>
                <h3 className="font-semibold text-white text-sm">{cat.title}</h3>
              </div>
              <div className="space-y-4">
                {cat.skills.map((s) => (
                  <SkillBar key={s.name} name={s.name} level={s.level} color={cat.color} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
