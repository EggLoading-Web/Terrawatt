import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function FinalCta() {
  const t = useTranslations('home.finalCta');

  return (
    <section className="bg-gradient-to-br from-emerald-900 via-terra-deep to-terra-deep py-24 px-6 border-t border-terra-lime/10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-terra-cream mb-6">
          {t('title')}
        </h2>
        <p className="text-lg text-terra-cream/70 mb-10 max-w-2xl mx-auto">
          {t('subtitle')}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/carreras"
            className="bg-terra-lime text-terra-deep px-8 py-4 rounded-full font-semibold hover:bg-terra-cream transition"
          >
            {t('primary')}
          </Link>
          <Link
            href="/contacto"
            className="border-2 border-terra-lime/40 text-terra-lime px-8 py-4 rounded-full font-semibold hover:border-terra-lime transition"
          >
            {t('secondary')}
          </Link>
        </div>
      </div>
    </section>
  );
}