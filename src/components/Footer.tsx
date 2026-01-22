'use client';

import { useState } from 'react';

type OpenModal = null | 'impressum' | 'datenschutz';

export default function Footer() {
    const [openModal, setOpenModal] = useState<OpenModal>(null);

    return (
        <>
            <footer className="mt-32">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="border-t border-zinc-800 pt-10 pb-16 flex flex-col items-center space-y-6 text-sm text-zinc-500">
                        {/* Legal Links */}
                        <div className="flex items-center space-x-4">
                            <button
                                onClick={() => setOpenModal('impressum')}
                                className="hover:text-zinc-300 transition underline"
                            >
                                Impressum
                            </button>

                            <span className="text-zinc-600">|</span>

                            <button
                                onClick={() => setOpenModal('datenschutz')}
                                className="hover:text-zinc-300 transition underline"
                            >
                                Datenschutz
                            </button>
                        </div>

                        {/* Copyright */}
                        <p className="text-center">
                            © {new Date().getFullYear()} Lucas-Maurice Stein. Alle Rechte vorbehalten.
                        </p>
                    </div>
                </div>
            </footer>

            {/* Modal Overlay */}
            {openModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4">
                    <div className="max-w-xl w-full bg-zinc-900 rounded-lg p-6 shadow-xl text-zinc-300 relative">
                        {/* Close Button */}
                        <button
                            onClick={() => setOpenModal(null)}
                            className="absolute top-4 right-4 text-zinc-500 hover:text-white text-sm"
                        >
                            ✕
                        </button>

                        {/* Title */}
                        <h2 className="text-xl font-semibold mb-4">
                            {openModal === 'impressum'
                                ? 'Impressum'
                                : 'Datenschutzerklärung'}
                        </h2>

                        {/* Impressum */}
                        {openModal === 'impressum' && (
                            <>
                                <p>
                                    <strong>Lucas-Maurice Stein</strong>
                                    <br />
                                    Herrengarten 39
                                    <br />
                                    75365 Calw
                                    <br />
                                    Deutschland
                                </p>

                                <p className="mt-4">
                                    E-Mail:{' '}
                                    <a
                                        href="mailto:lucasmauricestein@gmail.com"
                                        className="underline"
                                    >
                                        lucasmauricestein@gmail.com
                                    </a>
                                    <br />
                                    Telefon: +49 176 47736812
                                </p>

                                <p className="mt-4 text-sm text-zinc-500">
                                    Dieses Impressum gilt auch für meine Profile
                                    auf GitHub, LinkedIn und anderen Plattformen.
                                </p>
                            </>
                        )}

                        {/* Datenschutz */}
                        {openModal === 'datenschutz' && (
                            <>
                                <p className="text-sm text-zinc-400 mb-4">
                                    Verantwortlicher im Sinne der DSGVO:
                                </p>

                                <p className="mb-4">
                                    <strong>Lucas-Maurice Stein</strong>
                                    <br />
                                    E-Mail:{' '}
                                    <a
                                        href="mailto:lucasmauricestein@gmail.com"
                                        className="underline"
                                    >
                                        lucasmauricestein@gmail.com
                                    </a>
                                </p>

                                <p className="mb-4">
                                    Diese Website dient ausschließlich der
                                    Information. Es werden keine
                                    personenbezogenen Daten aktiv erhoben.
                                </p>

                                <p className="mb-4">
                                    Beim Aufruf der Website können durch den
                                    Hosting-Anbieter (Vercel) technische
                                    Zugriffsdaten (z. B. IP-Adresse,
                                    Browsertyp) verarbeitet werden, um den
                                    sicheren Betrieb der Website zu
                                    gewährleisten.
                                </p>

                                <p className="text-sm text-zinc-500">
                                    Es werden keine Cookies zu Analyse- oder
                                    Marketingzwecken gesetzt.
                                </p>
                            </>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}