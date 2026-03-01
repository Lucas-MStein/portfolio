import { Github, Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
    const mailto =
        'mailto:lucasmauricestein@gmail.com' +
        '?subject=' +
        encodeURIComponent('Projektanfrage über webdesignbystein.de') +
        '&body=' +
        encodeURIComponent(
            `Hi Lucas,\n\nich interessiere mich für einen modernen Webauftritt.\n\nKurz zu meinem Projekt:\n- Branche/Projekt:\n- Ziel der Website:\n- Zeitrahmen:\n- Budgetrahmen (optional):\n\nViele Grüße\n`
        );

    return (
        <section className="flex flex-col items-center text-center">
            {/* Profilbild */}
            <Image
                src="/avatar.jpg"
                alt="Profilbild von Lucas-Maurice Stein"
                width={96}
                height={96}
                priority
                className="rounded-full border border-white/10"
            />

            {/* Name + Titel */}
            <h1 className="mt-8 text-3xl font-bold tracking-tight text-white sm:text-5xl">
                Softwareentwickler, Gestalter und Side-Quest-Liebhaber.
            </h1>

            <p className="mt-6 text-base text-zinc-400 max-w-xl leading-relaxed">
                Ich bin Lucas-Maurice Stein, Webentwickler aus Calw.
                Die digitale Welt dreht sich schnell – aber nicht jeder kommt mit.
                Ich helfe Ihnen dabei, nicht nur Schritt zu halten, sondern sich mit einem modernen, maßgeschneiderten Webauftritt klar und professionell zu positionieren.
            </p>

            {/* CTA */}
            <div className="mt-10 flex justify-center">
                <a
                    href={mailto}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-black
                     hover:bg-zinc-200 transition
                     focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                >
                    <Mail className="h-4 w-4" />
                    Projekt anfragen
                </a>
            </div>


            {/* Social Icons */}
            <div className="mt-8 flex items-center gap-10">
                <a
                    href="https://github.com/Lucas-MStein"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profil öffnen"
                    className="text-indigo-400 hover:text-indigo-300 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/40 rounded-md"
                >
                    <Github className="h-5 w-5" />
                </a>
                <a
                    href="https://www.linkedin.com/in/lucas-maurice-stein-0b50a0259/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profil öffnen"
                    className="text-indigo-400 hover:text-indigo-300 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/40 rounded-md"
                >
                    <Linkedin className="h-5 w-5" />
                </a>
                <a
                    href="mailto:lucasmauricestein@gmail.com"
                    aria-label="E-Mail senden"
                    className="text-indigo-400 hover:text-indigo-300 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/40 rounded-md"
                >
                    <Mail className="h-5 w-5" />
                </a>
            </div>
        </section>
    );
}