import {
    Github,
    Linkedin,
    Mail,
} from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
    return (
        <section className="flex flex-col items-center text-center">
            {/* Profilbild */}
            <Image
                src="/avatar.jpg"
                alt="Profilbild"
                width={96}
                height={96}
                className="rounded-full border border-white/10"
            />

            {/* Name + Titel */}
            <h1 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-5xl">
                Softwareentwickler, Gestalter und Side-Quest-Liebhaber.
            </h1>
            <p className="mt-4 text-base text-zinc-400 max-w-xl">
                Ich bin Lucas-Maurice Stein, Webentwickler aus Calw.
                Die digitale Welt dreht sich schnell – aber nicht jeder kommt mit.
                Ich helfe Ihnen dabei, nicht nur Schritt zu halten, sondern sich mit einem modernen, maßgeschneiderten Webauftritt klar und professionell zu positionieren.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-5" >
                <a
                    href="https://github.com/Lucas-MStein"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-400 hover:text-indigo-300 transition"
                >
                    <Github className="h-5 w-5" />
                </a>
                <a
                    href="https://www.linkedin.com/in/lucas-maurice-stein-0b50a0259/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-400 hover:text-indigo-300 transition"
                >
                    <Linkedin className="h-5 w-5" />
                </a>
                <a
                    href="mailto:lucasmauricestein@gmail.com"
                    className="text-indigo-400 hover:text-indigo-300 transition"
                >
                    <Mail className="h-5 w-5" />
                </a>
            </div>
        </section>
    );
}