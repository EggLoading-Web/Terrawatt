'use client';

import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import { useState } from 'react';
import LocaleSwitcher from './LocaleSwitcher';

export default function Header() {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { href: '/', label: t('home') },
    { href: '/proyectos', label: t('projects') },
    { href: '/sostenibilidad', label: t('sustainability') },
    { href: '/nosotros', label: t('about') },
    { href: '/contacto', label: t('contact') }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-terra-deep/95 backdrop-blur-sm border-b border-terra-lime/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-terra-cream">
            Terra<span className="text-terra-lime">Watt</span>
          </span>
        </Link>

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition ${
                pathname === link.href
                  ? 'text-terra-lime'
                  : 'text-terra-cream hover:text-terra-lime'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Selector idioma */}
        <div className="flex items-center gap-4">
          <LocaleSwitcher />

          {/* Botón menú mobile */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-terra-cream text-2xl"
            aria-label="Menu"
          >
            {mobileOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Menú mobile */}
      {mobileOpen && (
        <nav className="md:hidden bg-terra-deep border-t border-terra-lime/10 px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-terra-cream hover:text-terra-lime transition text-sm font-medium"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}