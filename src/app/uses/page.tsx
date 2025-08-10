import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

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
    ]

    return (
        <main className="max-w-5xl mx-auto px-4 py-24 text-zinc-300">
            {/* Zurück */}
            <Link href="/" className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white mb-8">
                <ArrowLeft className="w-4 h-4" /> Zurück
            </Link>

            {/* Headline */}
            <h1 className="text-4xl font-bold text-white leading-tight mb-4">
                Tools, die ich täglich benutze.
            </h1>
            <p className="mb-12 text-zinc-400 max-w-2xl">
                Eine Übersicht über meine aktuelle Hardware, Software und Tools, die meinen Workflow unterstützen.
            </p>

            {/* Kategorien */}
            <div className="space-y-12">
                {categories.map((category, idx) => (
                    <section key={idx}>
                        <h2 className="text-xl font-semibold text-white mb-4">{category.title}</h2>
                        <ul className="space-y-4">
                            {category.items.map((item, i) => (
                                <li key={i} className="border-b border-zinc-800 pb-4">
                                    <p className="font-medium text-white">{item.name}</p>
                                    <p className="text-sm text-zinc-400">{item.description}</p>
                                </li>
                            ))}
                        </ul>
                    </section>
                ))}
            </div>
        </main>
    )
}