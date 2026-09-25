import { setRequestLocale, getTranslations } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import ContactForm from '@/components/ui/ContactForm';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function ContactPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('contact');

  const offices = [
    { city: t('offices.madrid'), tz: 'CET · UTC+1' },
    { city: t('offices.saoPaulo'), tz: 'BRT · UTC-3' },
    { city: t('offices.santiago'), tz: 'CLT · UTC-3' }
  ];

  return (
    <main className="bg-terra-deep min-h-screen text-terra-cream pt-20">
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <span className="text-xs uppercase tracking-[0.3em] text-terra-lime mb-4 block">
          {t('label')}
        </span>
        <h1 className="text-5xl md:text-6xl font-bold mb-6">{t('title')}</h1>
        <p className="text-lg text-terra-cream/70 max-w-2xl mx-auto">
          {t('subtitle')}
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-20 grid md:grid-cols-5 gap-12">
        {/* Formulario */}
        <div className="md:col-span-3">
          <ContactForm />
        </div>

        {/* Oficinas */}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold mb-6">{t('offices.title')}</h2>
          <div className="space-y-4">
            {offices.map((o, i) => (
              <div
                key={i}
                className="bg-terra-lime/5 border border-terra-lime/20 rounded-2xl p-6"
              >
                <p className="font-semibold text-terra-lime mb-1">{o.city}</p>
                <p className="text-sm text-terra-cream/60">{o.tz}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-terra-lime/5 border border-terra-lime/20 rounded-2xl">
            <p className="text-sm text-terra-cream/60 mb-1">Email</p>
            <p className="text-terra-lime font-medium">hola@terrawatt.com</p>
          </div>
        </div>
      </section>
    </main>
  );
}