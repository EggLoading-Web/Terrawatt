import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function SustainabilitySection() {
  const t = useTranslations('home.sustainability');

  const points = [t('point1'), t('point2'), t('point3')];

  return (
    <section className="bg-terra-cream text-terra-ink py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-terra-deep/60 mb-3 block">
            {t('label')}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-terra-deep mb-6 leading-tight">
            {t('title')}
          </h2>
          <p className="text-lg text-terra-ink/70 mb-8 leading-relaxed">
            {t('description')}
          </p>

          <ul className="space-y-4 mb-10">
            {points.map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1 w-5 h-5 rounded-full bg-terra-lime flex items-center justify-center text-terra-deep text-xs font-bold shrink-0">
                  ✓
                </span>
                <span className="text-terra-ink/80">{point}</span>
              </li>
            ))}
          </ul>

          <Link
            href="/sostenibilidad"
            className="inline-block bg-terra-deep text-terra-cream px-8 py-3 rounded-full font-semibold hover:bg-terra-deep/90 transition"
          >
            {t('cta')}
          </Link>
        </div>

        {/* Panel visual */}
        <div className="relative">
          <div className="aspect-square rounded-3xl bg-gradient-to-br from-terra-deep to-emerald-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(61,220,132,0.4),transparent_60%)]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-terra-cream">
                <p className="text-7xl font-bold text-terra-lime">2040</p>
                <p className="text-sm uppercase tracking-[0.3em] mt-3 text-terra-cream/70">
                  Net Zero
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}