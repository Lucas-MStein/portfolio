// src/app/articles/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { articles } from '@/lib/articles';

export default function ArticlePage({
                                        params,
                                    }: {
    params: { slug: string };
}) {
    const article = articles.find((a) => a.slug === params.slug);

    if (!article) {
        return notFound();
    }

    return (
        <article className="max-w-2xl mx-auto py-20 px-4">
            <p className="text-sm text-zinc-500">{article.date}</p>
            <h1 className="mt-2 text-3xl font-bold text-white">{article.title}</h1>
            <p className="mt-2 text-zinc-400">{article.description}</p>

            {/* HTML-Content aus lib/articles.ts */}
            <div
                className="mt-6 prose prose-invert prose-zinc"
                dangerouslySetInnerHTML={{ __html: article.content }}
            />
        </article>
    );
}