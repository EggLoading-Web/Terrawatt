'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import { useState } from 'react';

const localeNames: Record<string, string> = {
  es: 'ES',
  en: 'EN',
  pt: 'PT'
};

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  function changeLocale(nextLocale: string) {
    router.replace(pathname, { locale: nextLocale });
    setOpen(false);
  }

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-terra-cream hover:text-terra-lime transition"
      >
        {localeNames[locale]}
        <span className="text-xs">▾</span>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 bg-terra-cream text-terra-ink rounded-lg shadow-lg overflow-hidden min-w-[80px] z-50">
          {routing.locales.map((loc) => (
            <button
              key={loc}
              onClick={() => changeLocale(loc)}
              className={`block w-full px-4 py-2 text-sm text-left hover:bg-terra-lime/20 transition ${
                loc === locale ? 'bg-terra-lime/30 font-semibold' : ''
              }`}
            >
              {localeNames[loc]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}