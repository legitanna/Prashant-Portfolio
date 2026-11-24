'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const links = [
  { label: 'Guides', href: '/guides' },
  { label: 'Work', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    pathname === href || (href !== '/' && pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-40 border-b border-[#e2ddd4] bg-[#fbf9f5]/95 backdrop-blur-sm">
      <div className="wrap flex h-16 items-center justify-between">
        <Link
          href="/"
          className="font-display text-[17px] text-[#14161a]"
          style={{ fontFamily: 'var(--font-display), Georgia, serif' }}
        >
          Prashant Karna
          <span className="ml-2 hidden font-mono text-[10px] uppercase tracking-[0.14em] text-[#8a8f97] sm:inline">
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
                  ? 'text-[#14161a] underline decoration-[#14161a] decoration-1 underline-offset-[6px]'
                  : 'text-[#5f646c] hover:text-[#14161a]'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="/Prashant_Karna_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#e2ddd4] px-3.5 py-1.5 text-[13px] text-[#14161a] transition-colors hover:border-[#14161a]"
          >
            Résumé
          </a>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="md:hidden -mr-2 p-2 text-[#14161a]"
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
        <div className="border-t border-[#e2ddd4] md:hidden">
          <div className="wrap flex flex-col py-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-[#efeae2] py-3 text-sm text-[#2b2f35] last:border-0"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="/Prashant_Karna_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 text-sm text-[#24405e] underline decoration-[#c9c2b6] underline-offset-4"
            >
              Résumé (PDF)
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
