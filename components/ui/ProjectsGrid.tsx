'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Project, ProjectType, ProjectStatus } from '@/data/projects';
import ProjectCard from './ProjectCard';

type Props = {
  projects: Project[];
};

export default function ProjectsGrid({ projects }: Props) {
  const t = useTranslations('projects');
  const [typeFilter, setTypeFilter] = useState<ProjectType | 'all'>('all');
  const [statusFilter, setStatusFilter] = useState<ProjectStatus | 'all'>('all');

  const filtered = projects.filter((p) => {
    const typeMatch = typeFilter === 'all' || p.type === typeFilter;
    const statusMatch = statusFilter === 'all' || p.status === statusFilter;
    return typeMatch && statusMatch;
  });

  const types: (ProjectType | 'all')[] = ['all', 'solar', 'wind', 'hydrogen'];
  const statuses: (ProjectStatus | 'all')[] = [
    'all',
    'operational',
    'construction',
    'planned'
  ];

  return (
    <div>
      {/* Filtros */}
      <div className="flex flex-wrap gap-6 mb-10">
        <div>
          <p className="text-xs uppercase tracking-wider text-terra-cream/50 mb-2">
            {t('filters.type')}
          </p>
          <div className="flex gap-2 flex-wrap">
            {types.map((type) => (
              <button
                key={type}
                onClick={() => setTypeFilter(type)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${
                  typeFilter === type
                    ? 'bg-terra-lime text-terra-deep'
                    : 'bg-terra-lime/10 text-terra-cream hover:bg-terra-lime/20'
                }`}
              >
                {t(`filters.${type}`)}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-wider text-terra-cream/50 mb-2">
            {t('filters.status')}
          </p>
          <div className="flex gap-2 flex-wrap">
            {statuses.map((status) => (
              <button
                key={status}
                onClick={() => setStatusFilter(status)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${
                  statusFilter === status
                    ? 'bg-terra-lime text-terra-deep'
                    : 'bg-terra-lime/10 text-terra-cream hover:bg-terra-lime/20'
                }`}
              >
                {t(`filters.${status}`)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <p className="text-center text-terra-cream/60 py-16">{t('noResults')}</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}