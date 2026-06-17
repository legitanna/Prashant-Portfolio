'use client';

import { useState, useEffect } from 'react';
import { Menu, X, BarChart3 } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#github' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#070d1a]/90 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-blue-950/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
              <BarChart3 className="w-4 h-4 text-blue-400" />
            </div>
            <span className="font-semibold text-white text-sm tracking-wide">Prashant Karna</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm text-slate-400 hover:text-white transition-colors rounded-lg hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="/Prashant_Karna_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm font-medium text-blue-400 border border-blue-500/30 rounded-lg hover:bg-blue-500/10 transition-all"
            >
              Resume
            </a>
            <a
              href="#contact"
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-all"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-slate-400 hover:text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#070d1a]/95 backdrop-blur-xl border-b border-white/5">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-3 text-sm text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 flex flex-col gap-2">
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="px-4 py-2.5 text-sm font-medium text-center text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-all"
              >
                Hire Me
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
