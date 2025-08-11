// src/app/articles/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { articles } from '@/lib/articles';

export default async function ArticlePage({
                                              params,
                                          }: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const article = articles.find((a) => a.slug === slug);
    if (!article) return notFound();

    return (
        <article className="max-w-2xl mx-auto py-20 px-4">
            <p className="text-sm text-zinc-500">{article.date}</p>
            <h1 className="mt-2 text-3xl font-bold text-white">{article.title}</h1>
            <p className="mt-2 text-zinc-400">{article.description}</p>

            <div
                className="mt-6 prose prose-invert prose-zinc"
                dangerouslySetInnerHTML={{ __html: article.content }}
            />
        </article>
    );
}

// Statische Pfade (SSG)
export function generateStaticParams() {
    return articles.map((a) => ({ slug: a.slug }));
}

// (optional) SEO-Metadaten – gleiche Promise-Signatur für params
// import type { Metadata } from 'next';
/*
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
    openGraph: { title: article.title, description: article.description, type: 'article' },
  };
}
*/