'use client';

import { useState } from 'react';

export default function Footer() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <footer className="mt-32">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="border-t border-zinc-800 pt-10 pb-16 flex flex-col items-center space-y-6 text-sm text-zinc-500">
                        {/* Impressum Button */}
                        <button
                            onClick={() => setIsOpen(true)}
                            className="hover:text-zinc-300 transition underline"
                        >
                            Impressum
                        </button>

                        {/* Copyright */}
                        <p className="text-center">
                            © {new Date().getFullYear()} Lucas-Maurice Stein. Alle Rechte vorbehalten.
                        </p>
                    </div>
                </div>
            </footer>

            {/* Modal Overlay */}
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4">
                    <div className="max-w-xl w-full bg-zinc-900 rounded-lg p-6 shadow-xl text-zinc-300 relative">
                        {/* Close Button */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-4 right-4 text-zinc-500 hover:text-white text-sm"
                        >
                            ✕
                        </button>

                        {/* Impressum Content */}
                        <h2 className="text-xl font-semibold mb-4">Impressum</h2>
                        <p>
                            <strong>Lucas-Maurice Stein</strong><br />
                            Herrengarten 39<br />
                            75365 Calw<br />
                            Deutschland
                        </p>

                        <p className="mt-4">
                            E-Mail: <a href="mailto:lucasmauricestein@gmail.com" className="underline">lucasmauricestein@gmail.com</a><br />
                            Telefon: +49 176 47736812
                        </p>

                        <p className="mt-4 text-sm text-zinc-500">
                            Dieses Impressum gilt auch für meine Profile auf GitHub, LinkedIn und anderen Plattformen.
                        </p>
                    </div>
                </div>
            )}
        </>
    );
}