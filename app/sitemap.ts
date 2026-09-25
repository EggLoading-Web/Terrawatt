import { MetadataRoute } from 'next';
import { projects } from '@/data/projects';
import { routing } from '@/i18n/routing';

const baseUrl = 'https://terrawatt.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['', '/proyectos', '/sostenibilidad', '/nosotros', '/contacto'];

  const urls: MetadataRoute.Sitemap = [];

  for (const locale of routing.locales) {
    for (const page of pages) {
      urls.push({
        url: `${baseUrl}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: page === '' ? 1 : 0.8
      });
    }

    for (const project of projects) {
      urls.push({
        url: `${baseUrl}/${locale}/proyectos/${project.slug}`,
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.6
      });
    }
  }

  return urls;
}