
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Über mich',
    description:
        'Erfahren Sie mehr über Lucas-Maurice Stein, Webentwickler aus Calw. Von der ersten Idee bis zum Go-Live begleite ich Projekte mit Fokus auf Performance und Design.',
    alternates: { canonical: '/about' },
    openGraph: {
        url: '/about',
        type: 'profile',
        title: 'Über Lucas-Maurice Stein',
        description:
            'Webentwickler aus Calw mit Fokus auf maßgeschneiderte, performante Websites.',
        images: ['/og.png'],
    },
}

export default function AboutPage() {
    return (
        <main className="max-w-5xl mx-auto px-4 py-24 grid grid-cols-1 lg:grid-cols-3 gap-12 text-zinc-300">
            {/* Zurück-Link */}
            <div className="lg:col-span-3 mb-6">
                <Link
                    href="/"
                    className="inline-flex items-center text-zinc-400 hover:text-white transition"
                >
                    <ArrowLeft className="h-5 w-5 mr-2" />
                    Zurück
                </Link>
            </div>

            {/* Textbereich */}
            <div className="lg:col-span-2 space-y-6">
                <h1 className="text-4xl font-bold text-white leading-tight">
                    Ich bin Lucas-Maurice Stein. Ich lebe in Calw und entwickle digitale Lösungen.
                </h1>
                <p>
                    Schon früh habe ich begonnen, Websites zu gestalten und eigene Tools zu bauen. Was als Spielerei begann, ist heute mein Beruf:
                    Ich entwerfe, programmiere und begleite Webprojekte – von der ersten Idee bis zum Go-Live.
                </p>
                <p>
                    Dabei lege ich Wert auf Klarheit, Performance und nachhaltige Strukturen. Gute Interfaces sind für mich nicht nur schön, sondern logisch aufgebaut und barrierefrei zugänglich.
                </p>
                <p>
                    Wenn ich nicht am Code arbeite, beschäftige ich mich mit Musikproduktion, bin auf dem Court oder editiere Videos. Ich glaube daran, dass Technologie zugänglich sein sollte – und helfe dabei, das möglich zu machen.
                </p>
            </div>
        </main>
    );
}