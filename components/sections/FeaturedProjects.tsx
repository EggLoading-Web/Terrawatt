import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { projects } from '@/data/projects';
import ProjectCard from '@/components/ui/ProjectCard';

export default function FeaturedProjects() {
  const t = useTranslations('home.featured');
  const featured = projects.slice(0, 3);

  return (
    <section className="bg-terra-deep py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-terra-lime mb-3 block">
              {t('label')}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-terra-cream mb-3">
              {t('title')}
            </h2>
            <p className="text-terra-cream/60 max-w-xl">{t('subtitle')}</p>
          </div>

          <Link
            href="/proyectos"
            className="text-terra-lime text-sm font-semibold hover:underline whitespace-nowrap"
          >
            Ver todos →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}