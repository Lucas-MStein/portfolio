'use client';

import Link from 'next/link';
import { articles } from '@/lib/articles';

export default function ArticleList() {
    return (
        <div className="space-y-10">
            {articles.map((article, index) => (
                <article
                    key={index}
                    className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6
                     hover:border-zinc-600 transition-all duration-200"
                >
                    <p className="text-sm text-zinc-500">{article.date}</p>

                    <h2 className="mt-2 text-lg font-semibold text-white
                         group-hover:text-indigo-400 transition">
                        {article.title}
                    </h2>

                    <p className="mt-2 text-sm text-zinc-400">
                        {article.description}
                    </p>

                    <div className="mt-4">
                        <Link
                            href={`/articles/${article.slug}`}
                            className="inline-flex items-center text-sm font-medium text-indigo-400 hover:text-indigo-300 transition"
                        >
                            Read article
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="ml-1 h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </Link>
                    </div>
                </article>
            ))}
        </div>
    );
}