import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import '../globals.css';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const titles: Record<string, string> = {
    es: 'TerraWatt — Energía que mueve al mundo',
    en: 'TerraWatt — Powering a moving world',
    pt: 'TerraWatt — Energia que move o mundo'
  };

  const descriptions: Record<string, string> = {
    es: 'Multinacional de energía renovable con proyectos solares, eólicos e hidrógeno verde en tres continentes.',
    en: 'Renewable energy multinational with solar, wind and green hydrogen projects across three continents.',
    pt: 'Multinacional de energia renovável com projetos solares, eólicos e hidrogênio verde em três continentes.'
  };

  return {
    title: titles[locale] || titles.es,
    description: descriptions[locale] || descriptions.es,
    metadataBase: new URL('https://terrawatt.vercel.app'),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        es: '/es',
        en: '/en',
        pt: '/pt'
      }
    },
    openGraph: {
      title: titles[locale],
      description: descriptions[locale],
      locale,
      type: 'website'
    }
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="flex flex-col min-h-screen">
        <NextIntlClientProvider messages={messages}>
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}