'use client';

import Image from 'next/image';
import {
  ArrowRight,
  Download,
  Mail,
  Briefcase,
  Database,
  Code2,
  ChevronDown,
} from 'lucide-react';

const floatingCards = [
  {
    icon: Briefcase,
    label: '7+ Years',
    sub: 'Experience',
    delay: 'delay-100',
  },
  {
    icon: Database,
    label: 'Power BI',
    sub: 'Dashboarding',
    delay: 'delay-300',
  },
  {
    icon: Code2,
    label: 'SQL + Python',
    sub: 'Automation',
    delay: 'delay-500',
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden grid-bg">
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-cyan-500/8 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Photo */}
          <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className="relative">

              {/* Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/30 to-cyan-500/20 blur-2xl scale-110 animate-pulse-glow" />

              {/* Image */}
              <div className="relative glass rounded-2xl p-2 glow-blue-sm">
                <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-xl overflow-hidden">
                  <Image
                    src="/images/Linkedin_Pic.png"
                    alt="Prashant Karna"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Availability */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 bg-[#0a1628] border border-green-500/30 rounded-full whitespace-nowrap">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs text-green-400 font-medium">
                    Available for Opportunities
                  </span>
                </div>
              </div>

              {/* Floating Cards */}
              {floatingCards.map((card, i) => (
                <div
                  key={card.label}
                  className={`absolute glass rounded-xl px-3 py-2 flex items-center gap-2 animate-float ${card.delay} ${
                    i === 0
  ? '-top-4 -right-4'
  : i === 1
  ? 'bottom-1 -right-8'
  : '-top-4 -left-8'
                  }`}
                  style={{ animationDelay: `${i * 0.8}s` }}
                >
                  <div className="w-7 h-7 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <card.icon className="w-3.5 h-3.5 text-blue-400" />
                  </div>

                  <div>
                    <div className="text-xs font-semibold text-white">
                      {card.label}
                    </div>
                    <div className="text-[10px] text-slate-400">
                      {card.sub}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-6">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-blue-500/20 text-xs text-blue-400 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              Data Analyst · Power BI Developer · SQL
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Transforming{' '}
              <span className="text-gradient">Raw Data</span>{' '}
              Into{' '}
              <span className="text-gradient">Business Insights.</span>
            </h1>

            {/* Description */}
            <p className="text-slate-400 text-lg leading-relaxed max-w-lg">
              Data Analyst and Power BI Developer with{' '}
              <span className="text-white font-medium">7+ years</span> of
              experience in MIS reporting, dashboard development, SQL analysis
              and Python automation. I build clean, decision-ready reports that
              help teams understand performance and take action.
            </p>

            {/* Skill chips */}
            <div className="flex flex-wrap gap-2">
              {[
                'Power BI',
                'SQL',
                'Python',
                'DAX',
                'Excel',
                'Power Query',
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-xs font-medium text-slate-300 bg-white/5 border border-white/10 rounded-full hover:border-blue-500/30 hover:text-blue-400 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 pt-2">

              <a
                href="#case-studies"
                className="group flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-blue-600/25"
              >
                View Case Studies
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="/Prashant_Karna_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 glass hover:bg-white/8 text-white font-medium rounded-xl transition-all duration-200 border border-white/10 hover:border-white/20"
              >
                <Download className="w-4 h-4" />
                Resume
              </a>

              <a
                href="#contact"
                className="flex items-center gap-2 px-6 py-3 glass hover:bg-white/8 text-white font-medium rounded-xl transition-all duration-200 border border-white/10 hover:border-white/20"
              >
                <Mail className="w-4 h-4" />
                Contact
              </a>

            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="flex justify-center mt-20">
          <a
            href="#metrics"
            className="flex flex-col items-center gap-2 text-slate-500 hover:text-slate-300 transition-colors group"
          >
            <span className="text-xs tracking-widest uppercase">
              Explore
            </span>
            <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}