import { setRequestLocale, getTranslations } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { projects } from '@/data/projects';
import ProjectsGrid from '@/components/ui/ProjectsGrid';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function ProjectsPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('projects');

  return (
    <main className="bg-terra-deep min-h-screen text-terra-cream pt-20">
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-14">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            {t('title')}
          </h1>
          <p className="text-lg text-terra-cream/70 max-w-2xl">
            {t('subtitle')}
          </p>
        </div>

        <ProjectsGrid projects={projects} />
      </section>
    </main>
  );
}