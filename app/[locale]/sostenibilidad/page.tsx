import { setRequestLocale, getTranslations } from 'next-intl/server';
import { routing } from '@/i18n/routing';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function SustainabilityPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('sustainability');

  const pillars = [
    {
      key: 'environmental',
      title: t('pillars.environmental'),
      desc: t('pillars.environmentalDesc'),
      icon: '🌱'
    },
    {
      key: 'social',
      title: t('pillars.social'),
      desc: t('pillars.socialDesc'),
      icon: '🤝'
    },
    {
      key: 'governance',
      title: t('pillars.governance'),
      desc: t('pillars.governanceDesc'),
      icon: '⚖️'
    }
  ];

  const goals = [
    { year: '2040', label: t('goals.goal2040') },
    { year: '2030', label: t('goals.goal2030') },
    { year: '2025', label: t('goals.goal2025') },
    { year: '2025', label: t('goals.goal2025Biodiv') }
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

      {/* Pilares ESG */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <h2 className="text-3xl font-bold mb-10 text-center">
          {t('pillars.title')}
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((p) => (
            <div
              key={p.key}
              className="bg-terra-lime/5 border border-terra-lime/20 rounded-2xl p-8 hover:border-terra-lime/40 transition"
            >
              <div className="text-5xl mb-4">{p.icon}</div>
              <h3 className="text-xl font-bold text-terra-lime mb-3">
                {p.title}
              </h3>
              <p className="text-terra-cream/70 text-sm leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Metas */}
      <section className="bg-terra-cream text-terra-ink py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center text-terra-deep">
            {t('goals.title')}
          </h2>
          <div className="space-y-4">
            {goals.map((g, i) => (
              <div
                key={i}
                className="flex items-center gap-6 bg-white/60 border border-terra-deep/10 rounded-2xl p-6"
              >
                <span className="text-4xl font-bold text-terra-deep min-w-[100px]">
                  {g.year}
                </span>
                <span className="text-lg text-terra-ink/80">{g.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}