'use client';

import { useState } from 'react';

type State = 'idle' | 'sending' | 'sent' | 'error';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [state, setState] = useState<State>('idle');

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState('sending');
    try {
      const res = await fetch('https://formspree.io/f/mgobgvld', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
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
          I reply within a working day. If it is urgent, email me directly.
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
          placeholder="A monthly report, a dashboard, a role. Add the file, the frequency and who reads it."
          className={`${field} resize-none`}
        />
      </label>

      {state === 'error' && (
        <p className="text-[13px] text-[#8a2f2f]">
          That did not send. Email prashantkarna6@gmail.com instead.
        </p>
      )}

      <button
        type="submit"
        disabled={state === 'sending'}
        className="btn-solid disabled:opacity-60"
      >
        {state === 'sending' ? 'Sending…' : 'Send message'}
      </button>
    </form>
  );
}
