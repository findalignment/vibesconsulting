import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://vibes.consulting'
  const routes = ['', '/services', '/packages', '/about', '/case-studies', '/blog', '/contact']
  return routes.map((r) => ({ url: `${base}${r || '/'}`, changeFrequency: 'weekly', priority: r === '' ? 1 : 0.6 }))
}

