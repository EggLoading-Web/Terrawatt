import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function HeroSection() {
  const t = useTranslations('hero');

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-terra-deep">
      {/* Fondo animado */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-terra-lime/20 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] rounded-full bg-terra-water/10 blur-3xl animate-pulse [animation-duration:4s]" />
      </div>

      {/* Grid decorativa */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Contenido */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <span className="inline-block mb-6 text-xs uppercase tracking-[0.3em] text-terra-lime">
          TerraWatt · Global
        </span>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-terra-cream leading-[1.05] mb-8">
          {t('title')}
        </h1>
        <p className="text-lg md:text-xl text-terra-cream/70 max-w-3xl mx-auto mb-12 leading-relaxed">
          {t('subtitle')}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/proyectos"
            className="bg-terra-lime text-terra-deep px-8 py-4 rounded-full font-semibold hover:bg-terra-cream transition-colors"
          >
            {t('cta')}
          </Link>
          <Link
            href="/nosotros"
            className="border-2 border-terra-lime/40 text-terra-lime px-8 py-4 rounded-full font-semibold hover:border-terra-lime hover:bg-terra-lime/10 transition-colors"
          >
            {t('ctaSecondary')}
          </Link>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-terra-cream/40 text-xs uppercase tracking-widest animate-bounce">
        ↓
      </div>
    </section>
  );
}