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
    highlights: [
      'Segmented customers by job, income and education',
      'Analyzed revenue by marital status and dependent count',
      'Compared customer behavior across ownership categories',
      'Supported targeted marketing and retention decisions',
    ],
    description:
      'Created a customer analytics dashboard focused on customer profiling, segmentation and revenue contribution. The report highlights how income level, education, job type and family profile influence customer value and portfolio performance.',
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
    highlights: [
      'Analyzed 3,755 global salary records',
      'Compared compensation across 10+ countries',
      'Benchmarked salary by experience and company size',
      'Explored remote-work and job-title salary patterns',
    ],
    description:
      'Designed a salary benchmarking dashboard using global data science compensation data. The report compares salaries by job title, experience level, company size, country and remote ratio to support career research and hiring-market analysis.',
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