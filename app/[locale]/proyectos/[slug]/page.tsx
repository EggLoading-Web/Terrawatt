import { setRequestLocale, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Link } from '@/i18n/navigation';
import { projects, getProjectBySlug } from '@/data/projects';
import { routing } from '@/i18n/routing';

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    projects.map((p) => ({ locale, slug: p.slug }))
  );
}

export default async function ProjectDetailPage({
  params
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const t = await getTranslations('projectDetail');
  const tProjects = await getTranslations('projects');
  const tr = project.translations[locale as 'es' | 'en' | 'pt'];

  return (
    <main className="bg-terra-deep min-h-screen text-terra-cream pt-20">
      {/* Hero del proyecto */}
      <section className="relative bg-gradient-to-br from-terra-deep via-emerald-900/40 to-terra-deep py-24 px-6 border-b border-terra-lime/10">
        <div className="max-w-5xl mx-auto">
          <Link
            href="/proyectos"
            className="inline-flex items-center gap-2 text-sm text-terra-lime hover:underline mb-8"
          >
            ← {t('backToProjects')}
          </Link>

          <div className="flex gap-3 mb-6">
            <span className="bg-terra-lime/20 text-terra-lime text-xs font-semibold px-3 py-1 rounded-full">
              {tProjects(`filters.${project.type}`)}
            </span>
            <span className="bg-terra-water/20 text-terra-water text-xs font-semibold px-3 py-1 rounded-full">
              {tProjects(`filters.${project.status}`)}
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-4">{tr.name}</h1>
          <p className="text-lg text-terra-cream/70">{tr.location}</p>
        </div>
      </section>

      {/* Cifras clave */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-terra-lime/5 border border-terra-lime/20 rounded-2xl p-6">
            <p className="text-xs uppercase tracking-wider text-terra-cream/50 mb-2">
              {tProjects('capacity')}
            </p>
            <p className="text-3xl font-bold text-terra-lime">
              {project.capacityMW}
              <span className="text-base ml-1">MW</span>
            </p>
          </div>

          <div className="bg-terra-lime/5 border border-terra-lime/20 rounded-2xl p-6">
            <p className="text-xs uppercase tracking-wider text-terra-cream/50 mb-2">
              {tProjects('co2Avoided')}
            </p>
            <p className="text-3xl font-bold text-terra-lime">
              {(project.co2AvoidedTons / 1000).toFixed(0)}
              <span className="text-base ml-1">kt</span>
            </p>
          </div>

          <div className="bg-terra-lime/5 border border-terra-lime/20 rounded-2xl p-6">
            <p className="text-xs uppercase tracking-wider text-terra-cream/50 mb-2">
              {tProjects('year')}
            </p>
            <p className="text-3xl font-bold text-terra-lime">{project.year}</p>
          </div>

          <div className="bg-terra-lime/5 border border-terra-lime/20 rounded-2xl p-6">
            <p className="text-xs uppercase tracking-wider text-terra-cream/50 mb-2">
              {t('location')}
            </p>
            <p className="text-sm font-medium text-terra-cream">
              {project.country}
            </p>
          </div>
        </div>

        {/* Descripción */}
        <div>
          <h2 className="text-3xl font-bold mb-6">{t('overview')}</h2>
          <p className="text-lg text-terra-cream/80 leading-relaxed">
            {tr.description}
          </p>
        </div>
      </section>
    </main>
  );
}