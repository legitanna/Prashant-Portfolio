'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const KEY = 'pk-cookie-choice';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setVisible(true);
    } catch {
      setVisible(false);
    }
  }, []);

  const choose = (value: 'all' | 'essential') => {
    try {
      localStorage.setItem(KEY, value);
    } catch {
      // Storage blocked; the banner simply closes for this session.
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-[60] sm:left-auto sm:right-6 sm:max-w-sm">
      <div className="glass rounded-2xl p-5 border border-white/10 shadow-xl shadow-black/40">
        <p className="text-sm text-slate-300 leading-relaxed">
          This site uses cookies to measure traffic and, once ads are switched on, to show relevant
          advertising. You can accept all or keep only what the site needs to work.
        </p>
        <div className="flex items-center gap-2 mt-4">
          <button
            onClick={() => choose('all')}
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
          >
            Accept all
          </button>
          <button
            onClick={() => choose('essential')}
            className="px-4 py-2 text-sm font-medium text-slate-300 border border-white/10 hover:bg-white/5 rounded-lg transition-colors"
          >
            Essential only
          </button>
          <Link href="/privacy" className="ml-auto text-xs text-slate-500 hover:text-slate-300">
            Policy
          </Link>
        </div>
      </div>
    </div>
  );
}
