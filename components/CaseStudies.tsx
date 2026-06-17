'use client';

import Image from 'next/image';
import { ExternalLink, Users, CreditCard, TrendingUp, DollarSign } from 'lucide-react';

const caseStudies = [
  {
    title: 'HR Analytics Dashboard',
    category: 'Human Resources',
    icon: Users,
    tags: ['Power BI', 'HR Data', 'Attrition'],
    highlights: ['1,470 employees tracked', '16.1% attrition rate analyzed', 'Salary & age segmentation', 'Job role breakdown'],
    description:
      'Built a comprehensive HR analytics dashboard analyzing employee attrition, demographics, and salary distributions across departments. Enabled HR leadership to identify at-risk segments and reduce turnover.',
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
    highlights: ['$55M revenue tracked', '$8M interest analyzed', '45M transactions processed', 'Monthly trend analysis'],
    description:
      'Designed an end-to-end credit card transaction report covering revenue by category, spending patterns, and monthly trends. Delivered insights enabling targeted credit limit adjustments and portfolio growth.',
    pdfLink: '/case-studies/credit-card-analytics/credit_card_project_(2).pdf',
    isImage: false,
    previewStats: [
      { label: 'Revenue', value: '55M' },
      { label: 'Interest', value: '8M' },
      { label: 'Transactions', value: '45M' },
      { label: 'Acquisitions', value: '10K' },
    ],
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
    highlights: ['Customer segmentation by job', 'Income & education analysis', 'Marital status revenue split', 'Dependent count impact'],
    description:
      'Created a customer analytics dashboard revealing behavioral patterns across income segments, education levels, and demographics, enabling targeted marketing and customer retention strategies.',
    pdfLink: '/case-studies/customer-analytics/credit_card_project_(1).pdf',
    isImage: false,
    previewStats: [
      { label: 'Revenue', value: '55M' },
      { label: 'Segments', value: '6+' },
      { label: 'Income Tiers', value: '3' },
      { label: 'Education Levels', value: '6' },
    ],
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
    highlights: ['$137.57K avg salary', '3,755 employees analyzed', '10+ countries compared', 'Remote work trend insights'],
    description:
      'Analyzed global data science compensation data across job titles, experience levels, company sizes, and remote ratios. Provided benchmarking insights for hiring managers and job seekers.',
    pdfLink: '/case-studies/data-science-salary-analysis/Data_Science_Salary_Analysis.pdf',
    isImage: false,
    previewStats: [
      { label: 'Avg Salary', value: '$137K' },
      { label: 'Employees', value: '3,755' },
      { label: 'Countries', value: '10+' },
      { label: 'Top Role', value: '$375K' },
    ],
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
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-medium text-blue-400 tracking-widest uppercase mb-3">Portfolio</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Featured Case Studies
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Real-world Power BI projects that transformed raw data into strategic business decisions.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {caseStudies.map((cs, i) => (
            <div
              key={cs.title}
              className={`glass glass-hover rounded-2xl overflow-hidden border ${cs.border} bg-gradient-to-br ${cs.color} flex flex-col`}
            >
              {/* Image or stats preview */}
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
              ) : cs.previewStats ? (
                <div className="grid grid-cols-4 gap-0 border-b border-white/5">
                  {cs.previewStats.map((stat) => (
                    <div key={stat.label} className="p-4 text-center border-r border-white/5 last:border-r-0">
                      <div className={`text-lg font-bold ${cs.accent}`}>{stat.value}</div>
                      <div className="text-xs text-slate-500 mt-0.5">{stat.label}</div>
                    </div>
                  ))}
                </div>
              ) : null}

              {/* Content */}
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

                {/* Highlights */}
                <ul className="space-y-1.5 mb-5 flex-1">
                  {cs.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-xs text-slate-400">
                      <span className={`w-1 h-1 rounded-full ${cs.iconBg} ${cs.iconColor} flex-shrink-0`} style={{ background: 'currentColor' }} />
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Tags + CTA */}
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex gap-2">
                    {cs.tags.map((t) => (
                      <span key={t} className="px-2 py-0.5 text-xs bg-white/5 text-slate-400 rounded-md">{t}</span>
                    ))}
                  </div>
                  {cs.pdfLink && (
                    <a
                      href={cs.pdfLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-1.5 text-xs font-medium ${cs.accent} hover:underline`}
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
