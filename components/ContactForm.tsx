'use client';

import { useState } from 'react';

/**
 * Contact delivery.
 *
 * Default: FormSubmit, which needs no account. The first submission sends an
 * activation email to the address in the endpoint; click it once and every
 * later message is delivered normally.
 *
 * To switch provider later, set NEXT_PUBLIC_CONTACT_ENDPOINT in the hosting
 * environment, or change the fallback below. The request body is plain JSON,
 * which FormSubmit, Web3Forms and Formspree all accept.
 */
const ENDPOINT =
  process.env.NEXT_PUBLIC_CONTACT_ENDPOINT ??
  'https://formsubmit.co/ajax/prashantkarna6@gmail.com';

const DIRECT_EMAIL = 'prashantkarna6@gmail.com';

type State = 'idle' | 'sending' | 'sent' | 'error';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [honey, setHoney] = useState('');
  const [state, setState] = useState<State>('idle');

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honey) return; // bot filled the hidden field
    setState('sending');
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `New enquiry from prashantkarna.com — ${form.name || 'website'}`,
          _template: 'table',
          _honey: '',
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && String(data.success) !== 'false') {
        setState('sent');
        setForm({ name: '', email: '', message: '' });
      } else {
        setState('error');
      }
    } catch {
      setState('error');
    }
  };

  const field =
    'w-full border border-[#e2ddd4] bg-white px-3.5 py-2.5 text-[14px] text-[#14161a] placeholder:text-[#a8a29a] focus:border-[#14161a] focus:outline-none transition-colors';

  if (state === 'sent') {
    return (
      <div className="border border-[#e2ddd4] bg-white px-6 py-10">
        <p className="text-[16px] text-[#14161a]">Message sent.</p>
        <p className="mt-2 text-[14px] text-[#5f646c]">
          If it is urgent, email me directly at{' '}
          <a
            href={`mailto:${DIRECT_EMAIL}`}
            className="text-[#24405e] underline decoration-[#c9c2b6] underline-offset-4"
          >
            {DIRECT_EMAIL}
          </a>
          .
        </p>
        <button
          onClick={() => setState('idle')}
          className="mt-5 text-[13px] text-[#24405e] underline decoration-[#c9c2b6] underline-offset-4"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="eyebrow mb-2 block">Name</span>
          <input
            required
            value={form.name}
            onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
            placeholder="Your name"
            className={field}
          />
        </label>
        <label className="block">
          <span className="eyebrow mb-2 block">Email</span>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
            placeholder="you@company.com"
            className={field}
          />
        </label>
      </div>

      <label className="block">
        <span className="eyebrow mb-2 block">What do you need?</span>
        <textarea
          required
          rows={6}
          value={form.message}
          onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
          placeholder="A monthly report, a dashboard, a stock or flow system. Add the file, the frequency and who reads it."
          className={`${field} resize-none`}
        />
      </label>

      {/* hidden from people, catches bots */}
      <input
        type="text"
        name="_honey"
        value={honey}
        onChange={(e) => setHoney(e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      {state === 'error' && (
        <p className="text-[13px] text-[#8a2f2f]">
          That did not send. Email{' '}
          <a href={`mailto:${DIRECT_EMAIL}`} className="underline underline-offset-2">
            {DIRECT_EMAIL}
          </a>{' '}
          instead.
        </p>
      )}

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={state === 'sending'}
          className="btn-solid disabled:opacity-60"
        >
          {state === 'sending' ? 'Sending…' : 'Send message'}
        </button>
        <span className="text-[12.5px] text-[#8a8f97]">
          Or email{' '}
          <a href={`mailto:${DIRECT_EMAIL}`} className="underline decoration-[#c9c2b6] underline-offset-2">
            {DIRECT_EMAIL}
          </a>
        </span>
      </div>
    </form>
  );
}
