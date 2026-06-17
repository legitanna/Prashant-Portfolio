'use client';

import { TrendingUp, Layers, Globe, Code2 } from 'lucide-react';

const metrics = [
  {
    icon: TrendingUp,
    value: '7+',
    label: 'Years Experience',
    sub: 'Professional Analytics',
    color: 'from-blue-500/20 to-blue-600/10',
    border: 'border-blue-500/20',
    iconColor: 'text-blue-400',
    iconBg: 'bg-blue-500/15',
  },
  {
    icon: Layers,
    value: '4',
    label: 'Analytics Roles',
    sub: 'Across Diverse Projects',
    color: 'from-cyan-500/20 to-cyan-600/10',
    border: 'border-cyan-500/20',
    iconColor: 'text-cyan-400',
    iconBg: 'bg-cyan-500/15',
  },
  {
    icon: Globe,
    value: '3',
    label: 'Industries Served',
    sub: 'Finance · Pharma · Events',
    color: 'from-sky-500/20 to-sky-600/10',
    border: 'border-sky-500/20',
    iconColor: 'text-sky-400',
    iconBg: 'bg-sky-500/15',
  },
  {
    icon: Code2,
    value: '4+',
    label: 'Core Tools',
    sub: 'Power BI · SQL · Python',
    color: 'from-blue-400/20 to-blue-500/10',
    border: 'border-blue-400/20',
    iconColor: 'text-blue-300',
    iconBg: 'bg-blue-400/15',
  },
];

export default function Metrics() {
  return (
    <section id="metrics" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((m, i) => (
            <div
              key={m.label}
              className={`relative glass glass-hover rounded-2xl p-6 border ${m.border} bg-gradient-to-br ${m.color}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className={`w-10 h-10 rounded-xl ${m.iconBg} flex items-center justify-center mb-4`}>
                <m.icon className={`w-5 h-5 ${m.iconColor}`} />
              </div>
              <div className={`text-3xl sm:text-4xl font-bold mb-1 ${m.iconColor}`}>{m.value}</div>
              <div className="text-sm font-semibold text-white mb-0.5">{m.label}</div>
              <div className="text-xs text-slate-500">{m.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
