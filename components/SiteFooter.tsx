import Link from 'next/link';

export default function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-[#e4d9c4] print:hidden">
      <div className="wrap grid gap-10 py-12 sm:grid-cols-3">
        <div>
          <p
            className="text-[15px] text-[#1a1713]"
            style={{ fontFamily: 'var(--font-display), Georgia, serif' }}
          >
            Prashant Karna
          </p>
          <p className="mt-2 max-w-[26ch] text-[13px] leading-relaxed text-[#6b655a]">
            Flow, stock and reporting systems for businesses that run on spreadsheets.
          </p>
        </div>

        <div>
          <p className="eyebrow mb-3">Pages</p>
          <ul className="space-y-2 text-[13px] text-[#6b655a]">
            {[
              { label: 'Services', href: '/services' },
              { label: 'Work', href: '/projects' },
              { label: 'Guides', href: '/guides' },
              { label: 'About', href: '/about' },
              { label: "Let's connect", href: '/contact' },
              { label: 'Privacy', href: '/privacy' },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-[#1a1713]">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-3">Elsewhere</p>
          <ul className="space-y-2 text-[13px] text-[#6b655a]">
            <li>
              <a
                href="https://www.linkedin.com/in/prashantkarna/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#1a1713]"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/legitanna"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#1a1713]"
              >
                GitHub
              </a>
            </li>
            <li>
              <a href="mailto:prashantkarna6@gmail.com" className="hover:text-[#1a1713]">
                Email
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="wrap flex flex-col gap-2 border-t border-[#f0e6d3] py-5 font-mono text-[11px] text-[#9a917f] sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} Prashant Karna</span>
        <span>Ahmedabad, India · GMT+5:30</span>
      </div>
    </footer>
  );
}
