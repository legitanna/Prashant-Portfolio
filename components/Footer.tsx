import { BarChart3, Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
              <BarChart3 className="w-4 h-4 text-blue-400" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Prashant Karna</div>
              <div className="text-xs text-slate-500">Data Analyst · Power BI Developer</div>
            </div>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-6 text-xs text-slate-500">
            {[
              { label: 'About', href: '#about' },
              { label: 'Case Studies', href: '#case-studies' },
              { label: 'Experience', href: '#experience' },
              { label: 'Contact', href: '#contact' },
            ].map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/legitanna"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/20 transition-all"
            >
              <Github className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://www.linkedin.com/in/prashantkarna/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500/30 transition-all"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>
            <a
              href="mailto:prashantkarna@email.com"
              className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all"
            >
              <Mail className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center text-xs text-slate-600">
          &copy; {new Date().getFullYear()} Prashant Karna. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
