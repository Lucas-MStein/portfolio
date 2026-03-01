import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
    title: 'Tools & Technologien',
    description: 'Die Tools und Technologien, mit denen Lucas-Maurice Stein tagtäglich arbeitet.',
    alternates: { canonical: '/uses' },
    openGraph: {
        url: '/uses',
        type: 'website',
        title: 'Tools & Technologien – Lucas-Maurice Stein',
        description: 'Mein Technologie-Stack: Moderne Tools für effiziente und kreative Webentwicklung.',
        images: ['/og.png'],
    },
};

export default function UsesPage() {
    const categories = [
        {
            title: 'Hardware',
            items: [
                { name: 'MacBook Pro 13” M2 (2022)', description: 'Mein Hauptarbeitsgerät – schnell, leise und zuverlässig.' },
                { name: 'LG 27” 4K Monitor', description: 'Viel Platz für Code und Design gleichzeitig.' },
                { name: 'Keychron K2', description: 'Mechanische Tastatur mit angenehmem Tippgefühl.' },
            ],
        },
        {
            title: 'Software',
            items: [
                { name: 'PhpStorm', description: 'Mein Haupteditor für Webentwicklung.' },
                { name: 'Figma', description: 'UI/UX Design und Prototyping.' },
                { name: 'Raycast', description: 'Schneller App-Launcher und Workflow-Tool.' },
            ],
        },
        {
            title: 'Produktivität',
            items: [
                { name: 'Notion', description: 'Projektorganisation und Wissensdatenbank.' },
                { name: 'Todoist', description: 'Aufgabenverwaltung für den Alltag.' },
                { name: 'Slack', description: 'Teamkommunikation.' },
            ],
        },
    ];

    return (
        <main className="bg-black text-white min-h-screen py-20">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <PageHeader
                    title="Tools, die ich täglich benutze."
                    description="Eine Übersicht über meine aktuelle Hardware, Software und Tools, die meinen Workflow unterstützen."
                />

                {/* Kategorien */}
                <div className="mt-16 space-y-12 text-zinc-300">
                    {categories.map((category, idx) => (
                        <section key={idx}>
                            <h2 className="text-xl font-semibold text-white mb-4">{category.title}</h2>

                            <ul className="space-y-4">
                                {category.items.map((item, i) => (
                                    <li key={i} className="border-b border-zinc-800/80 pb-4">
                                        <p className="font-medium text-white">{item.name}</p>
                                        <p className="text-sm text-zinc-400">{item.description}</p>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    ))}
                </div>
            </div>
        </main>
    );
}