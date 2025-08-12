// src/app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import Header from '@/components/Header'

export const metadata: Metadata = {
    metadataBase: new URL('https://webdesignbystein.de'),
    title: {
        default: 'Lucas-Maurice Stein – Webentwickler aus Calw',
        template: '%s · Lucas-Maurice Stein',
    },
    description:
        'Moderner Webauftritt mit Next.js & Tailwind – Projekte, Leistungen und Artikel von Lucas-Maurice Stein.',
    alternates: { canonical: '/' },
    openGraph: {
        type: 'website',
        url: 'https://webdesignbystein',
        siteName: 'Lucas-Maurice Stein',
        title: 'Lucas-Maurice Stein – Webentwickler aus Calw',
        description:
            'Projekte, Leistungen und Artikel – gebaut mit Next.js & Tailwind.',
        images: ['/og.png'], // /public/og.png (1200x630)
    },
    twitter: {
        card: 'summary_large_image',
        creator: '@lucasballout', // optional: anpassen/entfernen
        images: ['/og.png'],
    },
    icons: {
        icon: '/favicon.ico',
        apple: '/apple-touch-icon.png',
    },
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        // Dark Mode dauerhaft erzwingen
        <html lang="de" className="dark" suppressHydrationWarning>
        <body>
        <Header />
        <div className="pt-32">{children}</div>
        </body>
        </html>
    )
}