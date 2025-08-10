import { notFound } from 'next/navigation';
import { articles } from '@/lib/articles';

type Props = {
    params: {
        slug: string;
    };
};

// Generate static paths (für SSG)
export function generateStaticParams() {
    return articles.map((article) => ({
        slug: article.slug,
    }));
}

export default function ArticlePage({ params }: Props) {
    const article = articles.find((a) => a.slug === params.slug);

    if (!article) return notFound();

    return (
        <article className="max-w-2xl mx-auto py-20 px-4 text-zinc-300">
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