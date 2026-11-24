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
      // Storage blocked; the banner closes for this session.
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-3 bottom-3 z-50 sm:left-auto sm:right-4 sm:bottom-4 sm:max-w-[380px] print:hidden">
      <div className="border border-[#14161a] bg-[#14161a] px-5 py-4 text-[#efeae2]">
        <p className="text-[13px] leading-relaxed">
          Cookies measure traffic and, once ads are switched on, show relevant advertising. Accept
          all, or keep only what the site needs.
        </p>
        <div className="mt-4 flex items-center gap-2">
          <button
            onClick={() => choose('all')}
            className="bg-[#fbf9f5] px-3.5 py-2 text-[12.5px] font-medium text-[#14161a] transition-colors hover:bg-white"
          >
            Accept all
          </button>
          <button
            onClick={() => choose('essential')}
            className="border border-[#4a4f56] px-3.5 py-2 text-[12.5px] text-[#c9c2b6] transition-colors hover:border-[#8a8f97]"
          >
            Essential only
          </button>
          <Link href="/privacy" className="ml-auto text-[11px] text-[#8a8f97] hover:text-[#c9c2b6]">
            Policy
          </Link>
        </div>
      </div>
    </div>
  );
}
