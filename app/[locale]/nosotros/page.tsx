import { setRequestLocale, getTranslations } from 'next-intl/server';
import { routing } from '@/i18n/routing';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function AboutPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('about');

  const timeline = [
    { year: '2008', label: t('timeline.2008') },
    { year: '2015', label: t('timeline.2015') },
    { year: '2020', label: t('timeline.2020') },
    { year: '2024', label: t('timeline.2024') },
    { year: '2030', label: t('timeline.2030') }
  ];

  const values = [
    {
      title: t('values.integrity'),
      desc: t('values.integrityDesc'),
      icon: '◆'
    },
    {
      title: t('values.innovation'),
      desc: t('values.innovationDesc'),
      icon: '✦'
    },
    {
      title: t('values.impact'),
      desc: t('values.impactDesc'),
      icon: '●'
    }
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

      {/* Misión */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <div className="bg-gradient-to-br from-emerald-900/40 to-terra-deep border border-terra-lime/20 rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-6 text-terra-lime">
            {t('mission.title')}
          </h2>
          <p className="text-xl text-terra-cream/80 leading-relaxed italic">
            "{t('mission.text')}"
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-terra-cream text-terra-ink py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-14 text-center text-terra-deep">
            {t('timeline.title')}
          </h2>

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-terra-deep/20" />
            <div className="space-y-10">
              {timeline.map((item, i) => (
                <div key={i} className="relative pl-20">
                  <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-terra-deep flex items-center justify-center text-terra-lime font-bold text-xs">
                    {item.year}
                  </div>
                  <div className="pt-3">
                    <p className="text-lg font-medium text-terra-ink">
                      {item.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-10 text-center">{t('values.title')}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <div
              key={i}
              className="bg-terra-lime/5 border border-terra-lime/20 rounded-2xl p-8 text-center"
            >
              <div className="text-4xl text-terra-lime mb-4">{v.icon}</div>
              <h3 className="text-xl font-bold mb-3">{v.title}</h3>
              <p className="text-terra-cream/70 text-sm">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}