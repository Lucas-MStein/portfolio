import Link from 'next/link'
import {
    Code2,
    Layout,
    Gauge,
    Search,
    Wrench,
    Rocket,
    ArrowLeft,
    Check
} from 'lucide-react'

type Service = {
    title: string
    description: string
    points: string[]
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

const services: Service[] = [
    {
        title: 'Webentwicklung (Next.js & Tailwind)',
        description:
            'Moderne, performante Websites und Web‑Apps mit Fokus auf Code‑Qualität, Barrierefreiheit und DX.',
        points: [
            'SSR/ISR, API Routes, Routing',
            'Saubere Komponenten & State‑Management',
            'Responsive & Dark Mode'
        ],
        Icon: Code2
    },
    {
        title: 'UI/UX & Implementierung',
        description:
            'Vom Wireframe zum fertigen Interface – pixelgenau und wartbar umgesetzt.',
        points: [
            'Design‑Systeme & Komponentenbibliotheken',
            'Interaktionen/Animationen (Framer Motion)',
            'Saubere Typografie & Layout'
        ],
        Icon: Layout
    },
    {
        title: 'Performance & Qualität',
        description:
            'Ladezeiten senken, Core Web Vitals verbessern, Bugs eliminieren.',
        points: [
            'Lighthouse/Pagespeed‑Audits',
            'Code‑Splitting & Caching',
            'Monitoring & Error Tracking'
        ],
        Icon: Gauge
    },
    {
        title: 'SEO & Sichtbarkeit',
        description:
            'Technische SEO, Metadaten/OG, Sitemaps – damit Inhalte gefunden werden.',
        points: [
            'Meta/OG, strukturierte Daten',
            'Saubere URL‑Struktur & Redirects',
            'Indexierung & Robots'
        ],
        Icon: Search
    },
    {
        title: 'Wartung & Weiterentwicklung',
        description:
            'Regelmäßige Updates, Security‑Patches und neue Features nach Bedarf.',
        points: [
            'Abhängigkeits‑Updates',
            'Refactoring & Tests',
            'Roadmap & Iteration'
        ],
        Icon: Wrench
    },
    {
        title: 'Launch & Deployment',
        description:
            'Vercel/Netlify‑Setups, Domains, Preview‑Workflows & CI/CD.',
        points: [
            'Automatisches Deployment',
            'Preview‑Environments',
            'Domain & SSL'
        ],
        Icon: Rocket
    }
]

export default function LeistungenPage() {
    return (
        <main className="max-w-5xl mx-auto px-4 py-24 grid grid-cols-1 lg:grid-cols-3 gap-12 text-zinc-300">
            {/* Zurück */}
            <div className="lg:col-span-3 -mt-6">
                <Link href="/" className="inline-flex items-center text-zinc-400 hover:text-white transition">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Zurück
                </Link>
            </div>

            {/* Intro links */}
            <div className="lg:col-span-2 space-y-6">
                <h1 className="text-4xl font-bold text-white leading-tight">
                    Leistungen, die Ihr Webprojekt voranbringen.
                </h1>
                <p>
                    Von der Idee bis zum Go‑Live: Ich plane, baue und betreue Websites
                    und Web‑Apps, die schnell, zugänglich und gut wartbar sind. Transparent,
                    pragmatisch und mit Liebe zum Detail.
                </p>
            </div>

            {/* Services Grid */}
            <section className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {services.map((s) => (
                    <article
                        key={s.title}
                        className="group rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 transition-colors hover:border-zinc-700"
                    >
                        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-900 flex items-center justify-center ring-1 ring-inset ring-zinc-700/60 shadow-sm">
                            <s.Icon className="h-5 w-5 text-zinc-300" />
                        </div>

                        <h3 className="mt-4 font-semibold text-white group-hover:text-indigo-400 transition-colors">
                            {s.title}
                        </h3>
                        <p className="mt-2 text-sm text-zinc-400">{s.description}</p>

                        <ul className="mt-4 space-y-2 text-sm text-zinc-400">
                            {s.points.map((p, i) => (
                                <li key={i} className="flex items-start gap-2">
                                    <Check className="h-4 w-4 mt-0.5 text-zinc-500" />
                                    <span>{p}</span>
                                </li>
                            ))}
                        </ul>
                    </article>
                ))}
            </section>
        </main>
    )
}