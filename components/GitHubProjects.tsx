'use client';

import { Github, Code2, FileText, Database, Bot, Globe, BarChart3, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Music Store SQL Analysis',
    type: 'SQL Project',
    icon: Database,
    techStack: ['PostgreSQL', 'SQL', 'Data Analysis'],
    description:
      'Analyzed music store sales and customer data using joins, CTEs, window functions and aggregations to answer business questions and identify sales patterns.',
    highlights: [
      'Performed customer and sales analysis',
      'Used joins, CTEs and aggregations',
      'Answered business-focused SQL questions',
    ],
    link: 'https://github.com/legitanna/Music-Store-Analysis',
  },
  {
    title: 'Bihar Voter Roll OCR Automation',
    type: 'Python Automation',
    icon: FileText,
    techStack: ['Python', 'Pandas', 'Tesseract OCR', 'OpenCV'],
    description:
      'Built an OCR pipeline to convert thousands of Bihar voter-roll PDF files into structured tables for district, block and village-level analysis.',
    highlights: [
      'Converted PDF voter rolls into tables',
      'Created structured datasets from OCR output',
      'Enabled location-wise voter analysis',
    ],
  },
  {
    title: 'Excel VBA Reporting Automation',
    type: 'Excel Automation',
    icon: Code2,
    techStack: ['Excel', 'VBA', 'Macros'],
    description:
      'Developed VBA macros to automate repetitive reporting tasks, merge large datasets, create subtotals and process high-volume Excel files efficiently.',
    highlights: [
      'Automated repetitive Excel tasks',
      'Processed large datasets efficiently',
      'Reduced manual reporting effort',
    ],
  },
  {
    title: 'ETL & Data Processing',
    type: 'Data Engineering',
    icon: Database,
    techStack: ['Python', 'Pandas', 'SQL Server'],
    description:
      'Built ETL workflows for extracting, cleaning, transforming and preparing business data for analytics and dashboard reporting.',
    highlights: [
      'Cleaned and transformed raw datasets',
      'Prepared reporting-ready data models',
      'Worked with SQL Server data sources',
    ],
  },
  {
    title: 'Web Scraping Automation',
    type: 'Automation',
    icon: Globe,
    techStack: ['Python', 'Selenium', 'BeautifulSoup'],
    description:
      'Automated data collection from dynamic websites using browser automation and scraping techniques to reduce manual data-gathering work.',
    highlights: [
      'Automated browser-based workflows',
      'Collected structured website data',
      'Reduced manual collection effort',
    ],
  },
  {
    title: 'Power BI Dashboard Development',
    type: 'BI Reporting',
    icon: BarChart3,
    techStack: ['Power BI', 'DAX', 'Power Query'],
    description:
      'Designed interactive dashboards for HR analytics, financial analytics and salary benchmarking using Power BI, DAX and Power Query.',
    highlights: [
      'Built interactive business dashboards',
      'Created DAX measures and KPIs',
      'Delivered decision-ready reporting',
    ],
  },
];

export default function GitHubProjects() {
  return (
    <section id="github" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="text-xs font-medium text-blue-400 tracking-widest uppercase mb-3">
            Technical Work
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Technical Projects
          </h2>
          <p className="text-slate-400 max-w-3xl">
            A collection of SQL, Python automation, ETL, Excel VBA and Power BI work demonstrating practical data analysis and reporting skills.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <div
              key={project.title}
              className="glass glass-hover rounded-2xl p-5 border border-white/5 flex flex-col group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                  <project.icon className="w-4 h-4 text-blue-400" />
                </div>
                <span className="text-xs text-blue-400 bg-blue-500/10 px-2 py-1 rounded-md">
                  {project.type}
                </span>
              </div>

              <h3 className="font-semibold text-white text-base mb-2 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>

              <p className="text-sm text-slate-400 leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              <ul className="space-y-1.5 mb-4">
                {project.highlights.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs text-slate-400">
                    <span className="w-1 h-1 rounded-full bg-blue-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 text-xs bg-white/5 text-slate-400 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-1.5 text-xs font-medium text-blue-400 hover:underline"
                >
                  <Github className="w-3.5 h-3.5" />
                  View Repository
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}