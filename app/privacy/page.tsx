import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy',
  description:
    'What data this site collects, how cookies and Google AdSense are used, and how to opt out of personalised advertising.',
  alternates: { canonical: 'https://prashantkarna.com/privacy' },
};

const updated = '24 November 2026';

export default function PrivacyPage() {
  return (
    <div className="wrap-narrow py-14 sm:py-16">
      <p className="eyebrow">Privacy</p>
      <h1 className="display mt-5 text-[2.2rem] sm:text-[2.6rem]">Privacy policy</h1>
      <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.12em] text-[#8a8f97]">
        Last updated {updated}
      </p>

      <article className="prose-article mt-10">
        <p>
          This site is run by Prashant Karna, an individual based in Ahmedabad, India. It is a
          personal site and a library of reporting guides. This page explains what is collected
          and why.
        </p>

        <h2>What you send me</h2>
        <p>
          The contact form is handled by Formspree. If you use it, I receive the name, email
          address and message you type, and I keep them only as long as needed to reply and to
          keep a record of work. I do not sell or share that information.
        </p>
        <p>
          Email sent to prashantkarna6@gmail.com is stored in that mailbox under Google&apos;s
          terms.
        </p>

        <h2>Analytics</h2>
        <p>
          Traffic is measured with privacy-friendly analytics that record page views, referrer,
          approximate country and device type. These records are not used to identify you.
        </p>

        <h2>Advertising</h2>
        <p>
          This site may show advertising through Google AdSense. Google and its partners use
          cookies to serve ads based on your prior visits to this and other websites.
        </p>
        <p>
          Google&apos;s use of advertising cookies lets it and its partners serve ads to you based
          on your visit to this site and other sites on the internet. You can opt out of
          personalised advertising by visiting{' '}
          <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">
            Google Ads Settings
          </a>{' '}
          or{' '}
          <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer">
            aboutads.info
          </a>
          .
        </p>
        <p>
          For visitors in the European Economic Area, the United Kingdom and Switzerland, a
          consent message is shown before advertising cookies are used, as required by local law.
          You can change your choice at any time by clearing this site&apos;s data in your browser.
        </p>

        <h2>Cookies this site sets</h2>
        <ul>
          <li>
            <strong>pk-cookie-choice</strong> stores whether you accepted advertising cookies. It
            stays in your browser until you clear it.
          </li>
          <li>
            Advertising and analytics cookies are set by Google and its partners only after you
            accept them, where consent is required.
          </li>
        </ul>

        <h2>Your rights</h2>
        <p>
          You can ask what personal data I hold about you, ask for a copy, or ask for it to be
          deleted. Write to prashantkarna6@gmail.com and I will respond within 30 days.
        </p>

        <h2>Changes</h2>
        <p>
          If this policy changes, the date at the top of this page changes with it. Material
          changes will be noted on the home page.
        </p>
      </article>
    </div>
  );
}
