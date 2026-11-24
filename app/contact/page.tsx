import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: "Let's connect",
  description:
    'Contact Prashant Karna about a freelance build: MIS reporting packs, FMS flow management, IMS inventory systems, checklists or Power BI and Looker Studio dashboards.',
  alternates: { canonical: 'https://prashantkarna.com/contact' },
};

export default function ContactPage() {
  return (
    <div className="wrap py-14 sm:py-16">
      <p className="eyebrow">Contact</p>
      <h1 className="display mt-5 max-w-[22ch] text-[2.2rem] sm:text-[2.9rem]">
        Tell me what the report has to answer.
      </h1>

      <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#2f6b4f]" />
            <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#2f6b4f]">
              Open to freelance builds
            </span>
          </div>

          <p className="mt-5 max-w-[42ch] text-[16px] leading-relaxed text-[#3a3f46]">
            A monthly reporting pack, an inventory or flow system, a dashboard that needs
            finishing rather than starting. Short, scoped work, delivered around my job.
          </p>

          <dl className="mt-8 border-t border-[#e2ddd4]">
            {[
              { k: 'Email', v: 'prashantkarna6@gmail.com', href: 'mailto:prashantkarna6@gmail.com' },
              { k: 'LinkedIn', v: 'in/prashantkarna', href: 'https://www.linkedin.com/in/prashantkarna/' },
              { k: 'GitHub', v: 'legitanna', href: 'https://github.com/legitanna' },
            ].map((row) => (
              <div key={row.k} className="flex items-baseline justify-between gap-4 border-b border-[#e2ddd4] py-3.5">
                <dt className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-[#8a8f97]">
                  {row.k}
                </dt>
                <dd>
                  <a
                    href={row.href}
                    className="text-[14px] text-[#14161a] underline decoration-[#c9c2b6] underline-offset-4 hover:decoration-[#14161a]"
                  >
                    {row.v}
                  </a>
                </dd>
              </div>
            ))}
            <div className="flex items-baseline justify-between gap-4 border-b border-[#e2ddd4] py-3.5">
              <dt className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-[#8a8f97]">
                Based
              </dt>
              <dd className="text-[14px] text-[#14161a]">Ahmedabad, India · remote or onsite</dd>
            </div>
          </dl>
        </div>

        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
