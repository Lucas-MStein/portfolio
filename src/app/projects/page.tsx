// src/app/projects/page.tsx
import Link from 'next/link';
import { Globe, Rocket, Sparkles, ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Projekte',
    description:
        'Auswahl an Webprojekten von Lucas-Maurice Stein – moderne, performante Lösungen für verschiedenste Kunden.',
    alternates: { canonical: '/projects' },
    openGraph: {
        url: '/projects',
        type: 'website',
        title: 'Projekte – Lucas-Maurice Stein',
        description:
            'Moderne Weblösungen und kreative Projekte – ein Auszug meiner Arbeit.',
        images: ['/og.png'],
    },
}

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
        title: 'TSV Calw Basketball',
        description: 'Die offizielle Seite des TSV Calw Basketball.',
        href: 'https://lucas-mstein.github.io/lionsbasketball/',
        hrefLabel: 'lionsbasketball.de',
        Icon: Globe,
    },
    {
        title: 'Leo aus Berlin',
        description: 'Seite für einen Influencer.',
        href: 'https://lucas-mstein.github.io/freshprinceofberlin/',
        hrefLabel: 'freshprinceofberlin.com',
        Icon: Sparkles,
    },
];

export default function ProjectsPage() {
    return (
        <main className="max-w-5xl mx-auto px-4 py-24 grid grid-cols-1 lg:grid-cols-3 gap-12 text-zinc-300">
            {/* Zurück-Link */}
            <div className="lg:col-span-3 -mt-6">
                <Link
                    href="/"
                    className="inline-flex items-center text-zinc-400 hover:text-white transition"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Zurück
                </Link>
            </div>

            {/* Headline + Intro */}
            <div className="lg:col-span-2 space-y-6">
                <h1 className="text-4xl font-bold text-white leading-tight">
                    Dinge, die ich gebaut habe, um meinen kleinen Abdruck im Universum zu hinterlassen.
                </h1>
                <p>
                    Über die letzten Monate sind viele kleine Projekte entstanden – hier sind die,
                    auf die ich besonders stolz bin. Viele davon sind Open Source. Wenn dich etwas anspricht,
                    schau es dir gerne an und bring dich mit Ideen ein.
                </p>
            </div>

            {/* Projektkarten */}
            <section className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {projects.map((p) => (
                    <article
                        key={p.title}
                        className="group rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 transition-colors hover:border-zinc-700"
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
        </main>
    );
}