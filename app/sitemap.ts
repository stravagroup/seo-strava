import type { MetadataRoute } from 'next'
import { services } from '@/content/services'
import { locations } from '@/content/locations'
import { posts } from '@/content/posts'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.stravagroupcarpentry.com.au'

  const servicePages: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${base}/services/${s.slug}/`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const locationPages: MetadataRoute.Sitemap = locations.map((l) => ({
    url: `${base}/locations/${l.slug}/`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  const blogPages: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${base}/blog/${p.slug}/`,
    lastModified: new Date(p.publishDate),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [
    { url: `${base}/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 1.0 },
    { url: `${base}/services/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/contact/`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.8 },
    { url: `${base}/locations/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/blog/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    ...servicePages,
    ...locationPages,
    ...blogPages,
  ]
}
