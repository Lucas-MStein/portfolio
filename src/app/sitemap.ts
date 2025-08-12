// src/app/sitemap.ts
import type { MetadataRoute } from 'next'
import { articles } from '@/lib/articles'

export default function sitemap(): MetadataRoute.Sitemap {
    const base = 'https://webdesignbystein.de'
    const now = new Date().toISOString()

    const staticPages = [
        '', 'about', 'projects', 'services', 'uses'
    ].map((p) => ({
        url: `${base}/${p}`,
        lastModified: now,
        changeFrequency: 'weekly' as const,
        priority: p === '' ? 1 : 0.8,
    }))

    const articlePages = articles.map((a) => ({
        url: `${base}/articles/${a.slug}`,
        lastModified: now,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    return [...staticPages, ...articlePages]
}