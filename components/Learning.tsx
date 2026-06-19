'use client';

import { Flame, Zap, Database, Award } from 'lucide-react';

const learningItems = [
  {
    icon: Database,
    title: 'Databricks',
    status: 'Currently Learning',
    statusColor: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
    description:
      'Learning Lakehouse architecture, Delta Lake concepts and collaborative data engineering workflows for modern analytics platforms.',
    topics: ['Delta Lake', 'Lakehouse', 'Unity Catalog', 'Workflows'],
  },
  {
    icon: Zap,
    title: 'Apache Spark',
    status: 'Currently Learning',
    statusColor: 'text-orange-400 bg-orange-500/10 border-orange-500/20',
    description:
      'Building understanding of distributed data processing, Spark SQL and PySpark for handling larger datasets beyond traditional SQL workflows.',
    topics: ['PySpark', 'Spark SQL', 'DataFrames', 'Distributed Processing'],
  },
  {
    icon: Flame,
    title: 'Advanced SQL',
    status: 'Strengthening',
    statusColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
    description:
      'Improving SQL depth through advanced joins, CTEs, window functions, query optimization and performance-focused reporting logic.',
    topics: ['Window Functions', 'CTEs', 'Optimization', 'Performance Tuning'],
  },
  {
    icon: Award,
    title: 'PL-300 Certification',
    status: 'Preparing',
    statusColor: 'text-green-400 bg-green-500/10 border-green-500/20',
    description:
      'Preparing for the Microsoft Power BI Data Analyst Associate certification to strengthen Power BI modeling, DAX and service-level knowledge.',
    topics: ['DAX', 'Data Modeling', 'Power BI Service', 'Security'],
  },
];

export default function Learning() {
  return (
    <section id="learning" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-medium text-blue-400 tracking-widest uppercase mb-3">
            Growth
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Currently Learning
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Expanding from business intelligence into modern data engineering, distributed processing and advanced analytics workflows.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {learningItems.map((item) => (
            <div
              key={item.title}
              className="glass glass-hover rounded-2xl p-6 border border-white/5 flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-slate-300" />
                </div>
                <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${item.statusColor}`}>
                  {item.status}
                </span>
              </div>

              <h3 className="font-bold text-white text-base mb-2">
                {item.title}
              </h3>

              <p className="text-xs text-slate-400 leading-relaxed mb-5 flex-1">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mt-auto">
                {item.topics.map((topic) => (
                  <span
                    key={topic}
                    className="px-2 py-0.5 text-xs bg-white/5 text-slate-400 rounded-md"
                  >
                    {topic}
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