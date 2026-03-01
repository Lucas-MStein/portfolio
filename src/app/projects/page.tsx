// src/app/projects/page.tsx
import type { Metadata } from 'next';
import { Globe, Rocket, Sparkles } from 'lucide-react';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
    title: 'Projekte',
    description:
        'Auswahl an Webprojekten von Lucas-Maurice Stein – moderne, performante Lösungen für verschiedenste Kunden.',
    alternates: { canonical: '/projects' },
    openGraph: {
        url: '/projects',
        type: 'website',
        title: 'Projekte – Lucas-Maurice Stein',
        description: 'Moderne Weblösungen und kreative Projekte – ein Auszug meiner Arbeit.',
        images: ['/og.png'],
    },
};

type Project = {
    title: string;
    description: string;
    href: string;
    hrefLabel: string;
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const projects: Project[] = [
    {
        title: 'A$AP',
        description: 'Mein persönlicher Blog mit Stil.',
        href: 'https://alwaysstriveandprosper.de',
        hrefLabel: 'alwaysstriveandprosper.de',
        Icon: Rocket,
    },
    {
        title: 'swish41',
        description: 'Ich mache auch Musik!',
        href: 'https://swish-41.de',
        hrefLabel: 'swish-41.de',
        Icon: Globe,
    },
    {
        title: 'Luca Tenner',
        description: 'Seite für einen Influencer.',
        href: 'https://lute08.de',
        hrefLabel: 'lute08.de',
        Icon: Sparkles,
    },
];

export default function ProjectsPage() {
    return (
        <main className="bg-black text-white min-h-screen py-20">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <PageHeader
                    title="Dinge, die ich gebaut habe, um meinen kleinen Abdruck im Universum zu hinterlassen."
                    description="Über die letzten Monate sind viele kleine Projekte entstanden – hier sind die, auf die ich besonders stolz bin. Viele davon sind Open Source. Wenn dich etwas anspricht, schau es dir gerne an und bring dich mit Ideen ein."
                />

                {/* Projektkarten */}
                <section className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-zinc-300">
                    {projects.map((p) => (
                        <article
                            key={p.title}
                            className="group rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6
                         transition-colors hover:border-zinc-700"
                        >
                            {/* Icon */}
                            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-900 flex items-center justify-center ring-1 ring-inset ring-zinc-700/60 shadow-sm">
                                <p.Icon className="h-5 w-5 text-zinc-300" />
                            </div>

                            {/* Titel + Beschreibung */}
                            <h3 className="mt-4 font-semibold text-white group-hover:text-indigo-400 transition-colors">
                                {p.title}
                            </h3>
                            <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                                {p.description}
                            </p>

                            {/* Link */}
                            <div className="mt-4 inline-flex items-center gap-2 text-sm">
                                <Link
                                    href={p.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-zinc-400 hover:text-zinc-200 transition"
                                >
                                    <Globe className="h-4 w-4" />
                                    <span className="underline decoration-zinc-700 group-hover:decoration-zinc-500">
                    {p.hrefLabel}
                  </span>
                                </Link>
                            </div>
                        </article>
                    ))}
                </section>
            </div>
        </main>
    );
}