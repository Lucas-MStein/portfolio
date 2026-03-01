import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
    title: 'Über mich',
    description:
        'Erfahren Sie mehr über Lucas-Maurice Stein, Webentwickler aus Calw. Von der ersten Idee bis zum Go-Live begleite ich Projekte mit Fokus auf Performance und Design.',
    alternates: { canonical: '/about' },
    openGraph: {
        url: '/about',
        type: 'profile',
        title: 'Über Lucas-Maurice Stein',
        description: 'Webentwickler aus Calw mit Fokus auf maßgeschneiderte, performante Websites.',
        images: ['/og.png'],
    },
};

export default function AboutPage() {
    return (
        <main className="bg-black text-white min-h-screen py-20">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <PageHeader
                    title="Ich bin Lucas-Maurice Stein. Ich lebe in Calw und entwickle digitale Lösungen."
                />

                {/* Content */}
                <section className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-12 text-zinc-300">
                    <div className="lg:col-span-2 space-y-6">
                        <p>
                            Schon früh habe ich begonnen, Websites zu gestalten und eigene Tools zu bauen. Was als Spielerei begann,
                            ist heute mein Beruf: Ich entwerfe, programmiere und begleite Webprojekte – von der ersten Idee bis zum
                            Go-Live.
                        </p>
                        <p>
                            Dabei lege ich Wert auf Klarheit, Performance und nachhaltige Strukturen. Gute Interfaces sind für mich
                            nicht nur schön, sondern logisch aufgebaut und barrierefrei zugänglich.
                        </p>
                        <p>
                            Wenn ich nicht am Code arbeite, beschäftige ich mich mit Musikproduktion, bin auf dem Court oder editiere
                            Videos. Ich glaube daran, dass Technologie zugänglich sein sollte – und helfe dabei, das möglich zu machen.
                        </p>
                    </div>

                    {/* Optional: rechte Spalte frei lassen oder später befüllen */}
                    <div className="hidden lg:block" />
                </section>
            </div>
        </main>
    );
}