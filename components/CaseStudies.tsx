'use client';

import Image from 'next/image';
import { ExternalLink, Users, CreditCard, TrendingUp, DollarSign } from 'lucide-react';

const caseStudies = [
  {
    title: 'HR Analytics Dashboard',
    category: 'Human Resources',
    icon: Users,
    tags: ['Power BI', 'HR Data', 'Attrition'],
    highlights: [
      'Tracked 1,470 employees across departments',
      'Analyzed 16.1% overall attrition rate',
      'Identified attrition patterns by age, salary and job role',
      'Enabled HR teams to spot high-risk workforce segments',
    ],
    description:
      'Developed an interactive HR analytics dashboard to help HR leaders monitor employee attrition, workforce demographics, salary distribution and job-role level risk areas. The report converts raw HR data into clear decision points for retention planning.',
    image: '/case-studies/hr-analytics/HR_Analytics_Dashboard_page-0001_(1).jpg',
    isImage: true,
    color: 'from-blue-600/10 to-blue-800/5',
    border: 'border-blue-500/15',
    iconBg: 'bg-blue-500/15',
    iconColor: 'text-blue-400',
    accent: 'text-blue-400',
  },
  {
    title: 'Credit Card Transaction Report',
    category: 'Financial Analytics',
    icon: CreditCard,
    tags: ['Power BI', 'Finance', 'Revenue'],
    highlights: [
      '$55M revenue analyzed',
      '$8M interest tracked',
      '45M transactions processed',
      'Monthly performance and category trends monitored',
    ],
    description:
      'Built a Power BI transaction analysis report to track revenue, interest, transaction volume and acquisition performance. The dashboard helps users understand spending behavior, identify category-level trends and monitor financial performance over time.',
    image: '/case-studies/credit-card-analytics/credit-card-transaction.jpg',
    pdfLink: '/case-studies/credit-card-analytics/credit_card_project_(2).pdf',
    isImage: true,
    color: 'from-cyan-600/10 to-cyan-800/5',
    border: 'border-cyan-500/15',
    iconBg: 'bg-cyan-500/15',
    iconColor: 'text-cyan-400',
    accent: 'text-cyan-400',
  },
  {
    title: 'Credit Card Customer Report',
    category: 'Customer Analytics',
    icon: TrendingUp,
    tags: ['Power BI', 'Segmentation', 'CRM'],
    highlights: [
      'Segmented customers by job, income and education',
      'Analyzed revenue by marital status and dependent count',
      'Compared customer behavior across ownership categories',
      'Supported targeted marketing and retention decisions',
    ],
    description:
      'Created a customer analytics dashboard focused on customer profiling, segmentation and revenue contribution. The report highlights how income level, education, job type and family profile influence customer value and portfolio performance.',
    image: '/case-studies/customer-analytics/credit-card-customer.jpg',
    pdfLink: '/case-studies/customer-analytics/credit_card_project_(1).pdf',
    isImage: true,
    color: 'from-green-600/10 to-green-800/5',
    border: 'border-green-500/15',
    iconBg: 'bg-green-500/15',
    iconColor: 'text-green-400',
    accent: 'text-green-400',
  },
  {
    title: 'Data Science Salary Analysis',
    category: 'Market Research',
    icon: DollarSign,
    tags: ['Power BI', 'Salary Data', 'Global'],
    highlights: [
      'Analyzed 3,755 global salary records',
      'Compared compensation across 10+ countries',
      'Benchmarked salary by experience and company size',
      'Explored remote-work and job-title salary patterns',
    ],
    description:
      'Designed a salary benchmarking dashboard using global data science compensation data. The report compares salaries by job title, experience level, company size, country and remote ratio to support career research and hiring-market analysis.',
    image: '/case-studies/data-science-salary-analysis/data-science-salary.jpg',
    pdfLink: '/case-studies/data-science-salary-analysis/Data_Science_Salary_Analysis.pdf',
    isImage: true,
    color: 'from-amber-600/10 to-amber-800/5',
    border: 'border-amber-500/15',
    iconBg: 'bg-amber-500/15',
    iconColor: 'text-amber-400',
    accent: 'text-amber-400',
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-medium text-blue-400 tracking-widest uppercase mb-3">Portfolio</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Featured Case Studies
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Real-world Power BI projects that transformed raw data into strategic business decisions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {caseStudies.map((cs) => (
            <div
              key={cs.title}
              className={`glass glass-hover rounded-2xl overflow-hidden border ${cs.border} bg-gradient-to-br ${cs.color} flex flex-col`}
            >
              {cs.isImage && cs.image ? (
                <div className="relative h-48 overflow-hidden bg-[#0a1628]">
                  <Image
                    src={cs.image}
                    alt={cs.title}
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070d1a]/80 via-transparent to-transparent" />
                </div>
              ) : null}

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`w-7 h-7 rounded-lg ${cs.iconBg} flex items-center justify-center`}>
                        <cs.icon className={`w-3.5 h-3.5 ${cs.iconColor}`} />
                      </div>
                      <span className={`text-xs font-medium ${cs.accent}`}>{cs.category}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white">{cs.title}</h3>
                  </div>
                </div>

                <p className="text-sm text-slate-400 leading-relaxed mb-4">{cs.description}</p>

                <ul className="space-y-1.5 mb-5 flex-1">
                  {cs.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-xs text-slate-400">
                      <span
                        className={`w-1 h-1 rounded-full ${cs.iconBg} ${cs.iconColor} flex-shrink-0`}
                        style={{ background: 'currentColor' }}
                      />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between mt-auto">
                  <div className="flex gap-2 flex-wrap">
                    {cs.tags.map((t) => (
                      <span key={t} className="px-2 py-0.5 text-xs bg-white/5 text-slate-400 rounded-md">{t}</span>
                    ))}
                  </div>

                  {cs.pdfLink && (
                    <a
                      href={cs.pdfLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-1.5 text-xs font-medium ${cs.accent} hover:underline whitespace-nowrap`}
                    >
                      View Dashboard <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}