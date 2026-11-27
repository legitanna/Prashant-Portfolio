'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const links = [
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/projects' },
  { label: 'Guides', href: '/guides' },
  { label: 'About', href: '/about' },
];

const cta = { label: "Let's connect", href: '/contact' };

export default function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    pathname === href || (href !== '/' && pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-40 border-b border-[#e4d9c4] bg-[#faf6ed]/95 backdrop-blur-sm print:hidden">
      <div className="h-[2px] bg-[#c8a86a]" />
      <div className="wrap flex h-16 items-center justify-between">
        <Link
          href="/"
          className="font-display text-[17px] text-[#1a1713]"
          style={{ fontFamily: 'var(--font-display), Georgia, serif' }}
        >
          Prashant Karna
          <span className="ml-2 hidden font-mono text-[10px] uppercase tracking-[0.14em] text-[#9a917f] sm:inline">
            MIS &amp; analytics
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[13.5px] transition-colors ${
                isActive(link.href)
                  ? 'text-[#1a1713] underline decoration-[#1a1713] decoration-1 underline-offset-[6px]'
                  : 'text-[#6b655a] hover:text-[#1a1713]'
              }`}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href={cta.href}
            className={`inline-flex items-center gap-1.5 px-4 py-2 text-[13.5px] transition-colors ${
              isActive(cta.href)
                ? 'bg-[#7e5e24] text-[#faf6ed]'
                : 'bg-[#1a1713] text-[#faf6ed] hover:bg-[#7e5e24]'
            }`}
          >
            {cta.label}
            <span aria-hidden="true" className="text-[12px]">
              →
            </span>
          </Link>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="md:hidden -mr-2 p-2 text-[#1a1713]"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
            {open ? (
              <path d="M4 4l12 12M16 4L4 16" />
            ) : (
              <>
                <path d="M2 6h16" />
                <path d="M2 14h16" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-[#e4d9c4] md:hidden">
          <div className="wrap flex flex-col py-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-[#f0e6d3] py-3 text-sm text-[#2b2f35] last:border-0"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={cta.href}
              onClick={() => setOpen(false)}
              className="mt-3 mb-2 flex items-center justify-between bg-[#1a1713] px-4 py-3 text-sm text-[#faf6ed]"
            >
              {cta.label}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
