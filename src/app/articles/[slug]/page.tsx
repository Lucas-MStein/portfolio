// src/app/articles/[slug]/page.tsx
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { articles } from '@/lib/articles';

type PageProps = {
    params: {
        slug: string;
    };
};

// Statische Pfade für alle Artikel erzeugen (SSG)
export function generateStaticParams() {
    return articles.map((a) => ({ slug: a.slug }));
}

// Optional: SEO / Open Graph
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const article = articles.find((a) => a.slug === params.slug);
    if (!article) return {};
    return {
        title: article.title,
        description: article.description,
        openGraph: {
            title: article.title,
            description: article.description,
            type: 'article',
        },
    };
}

export default function ArticlePage({ params }: PageProps) {
    const article = articles.find((a) => a.slug === params.slug);

    if (!article) {
        // 404-Seite von Next anzeigen
        return notFound();
    }

    return (
        <article className="max-w-2xl mx-auto py-20 px-4">
            <p className="text-sm text-zinc-500">{article.date}</p>
            <h1 className="mt-2 text-3xl font-bold text-white">{article.title}</h1>
            <p className="mt-2 text-zinc-400">{article.description}</p>

            {/* article.content kommt als HTML-String aus lib/articles.ts */}
            <div
                className="mt-6 prose prose-invert prose-zinc"
                dangerouslySetInnerHTML={{ __html: article.content }}
            />
        </article>
    );
}