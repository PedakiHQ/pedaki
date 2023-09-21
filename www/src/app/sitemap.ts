import { baseUrl } from '~/config/shared';
import type { MetadataRoute } from 'next';

const staticRoutes = [
  { url: '', priority: 1 },
  { url: '/pricing', priority: 1 },
  { url: '/legal/privacy-policy', priority: 0.5 },
  { url: '/legal/terms-of-service', priority: 0.5 },
  { url: '/brand', priority: 0.5 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return staticRoutes.map(route => ({
    url: `${baseUrl}${route.url}`,
    priority: route.priority,
  }));
}
