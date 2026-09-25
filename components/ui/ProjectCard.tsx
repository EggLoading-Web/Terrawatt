import { useLocale, useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Project } from '@/data/projects';

type Props = {
  project: Project;
};

const typeColors: Record<string, string> = {
  solar: 'bg-amber-400/20 text-amber-300',
  wind: 'bg-sky-400/20 text-sky-300',
  hydrogen: 'bg-emerald-400/20 text-emerald-300'
};

export default function ProjectCard({ project }: Props) {
  const t = useTranslations('projects');
  const locale = useLocale() as 'es' | 'en' | 'pt';
  const tr = project.translations[locale];

  return (
    <Link
      href={`/proyectos/${project.slug}`}
      className="group block bg-terra-deep rounded-2xl overflow-hidden border border-terra-lime/10 hover:border-terra-lime/40 transition-all duration-300"
    >
      {/* Header visual */}
      <div className="relative h-44 bg-gradient-to-br from-terra-deep via-emerald-900 to-terra-deep overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30%_50%,rgba(61,220,132,0.4),transparent_60%)]" />
        <div className="absolute top-4 left-4 flex gap-2">
          <span
            className={`text-xs font-semibold px-3 py-1 rounded-full ${
              typeColors[project.type]
            }`}
          >
            {t(`filters.${project.type}`)}
          </span>
        </div>
        <div className="absolute top-4 right-4 text-xs font-medium text-terra-cream/80">
          {project.countryCode}
        </div>
        <div className="absolute bottom-4 left-4 text-5xl font-bold text-terra-cream/10">
          {project.capacityMW}
        </div>
      </div>

      {/* Contenido */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-terra-cream group-hover:text-terra-lime transition mb-2">
          {tr.name}
        </h3>
        <p className="text-sm text-terra-cream/60 mb-4 line-clamp-2">
          {tr.description}
        </p>

        <div className="flex items-center justify-between text-xs text-terra-cream/50">
          <span>{tr.location}</span>
          <span>{project.year}</span>
        </div>
      </div>
    </Link>
  );
}