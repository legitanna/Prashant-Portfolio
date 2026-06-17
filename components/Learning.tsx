'use client';

import { Flame, Zap, Database, Award } from 'lucide-react';

const learningItems = [
  {
    icon: Database,
    title: 'Databricks',
    status: 'In Progress',
    statusColor: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
    progress: 40,
    progressColor: 'from-blue-600 to-blue-400',
    description: 'Exploring Delta Lake architecture, Lakehouse patterns, and collaborative data engineering workflows.',
    topics: ['Delta Lake', 'Lakehouse Architecture', 'Data Engineering Workflows', 'Unity Catalog'],
  },
  {
    icon: Zap,
    title: 'Apache Spark',
    status: 'In Progress',
    statusColor: 'text-orange-400 bg-orange-500/10 border-orange-500/20',
    progress: 30,
    progressColor: 'from-orange-600 to-amber-400',
    description: 'Learning distributed data processing for large-scale analytics beyond what SQL alone can handle.',
    topics: ['Spark SQL', 'Spark DataFrames', 'Distributed Processing', 'PySpark'],
  },
  {
    icon: Flame,
    title: 'Advanced SQL',
    status: 'Active',
    statusColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
    progress: 70,
    progressColor: 'from-cyan-600 to-cyan-400',
    description: 'Deepening SQL expertise with complex windowing, CTEs, and query performance tuning techniques.',
    topics: ['Window Functions', 'Query Optimization', 'Performance Tuning', 'CTEs & Subqueries'],
  },
  {
    icon: Award,
    title: 'PL-300 Certification',
    status: 'Prep Phase',
    statusColor: 'text-green-400 bg-green-500/10 border-green-500/20',
    progress: 55,
    progressColor: 'from-green-600 to-green-400',
    description: 'Preparing for the Microsoft Power BI Data Analyst Associate certification exam.',
    topics: ['DAX Mastery', 'Data Modeling', 'Power BI Service', 'Governance & Security'],
  },
];

export default function Learning() {
  return (
    <section id="learning" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-medium text-blue-400 tracking-widest uppercase mb-3">Growth</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">What I&apos;m Working On</h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Continuously expanding from traditional BI toward modern data engineering and cloud platforms.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {learningItems.map((item) => (
            <div key={item.title} className="glass glass-hover rounded-2xl p-6 border border-white/5 flex flex-col">
              {/* Icon + status */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-slate-300" />
                </div>
                <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${item.statusColor}`}>
                  {item.status}
                </span>
              </div>

              <h3 className="font-bold text-white text-base mb-2">{item.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4 flex-1">{item.description}</p>

              {/* Progress */}
              <div className="mb-4">
                <div className="flex justify-between text-xs text-slate-500 mb-1.5">
                  <span>Progress</span>
                  <span>{item.progress}%</span>
                </div>
                <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${item.progressColor}`}
                    style={{ width: `${item.progress}%` }}
                  />
                </div>
              </div>

              {/* Topics */}
              <div className="flex flex-wrap gap-1.5">
                {item.topics.map((t) => (
                  <span key={t} className="px-2 py-0.5 text-xs bg-white/5 text-slate-500 rounded-md">
                    {t}
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
