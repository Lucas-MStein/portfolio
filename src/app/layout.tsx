// src/app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import Header from '@/components/Header'
import Script from 'next/script'

const GA_ID = process.env.NEXT_PUBLIC_GA_ID

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
        url: 'https://webdesignbystein.de',
        siteName: 'Lucas-Maurice Stein',
        title: 'Lucas-Maurice Stein – Webentwickler aus Calw',
        description:
            'Projekte, Leistungen und Artikel – gebaut mit Next.js & Tailwind.',
        images: ['/og.png'],
    },
    twitter: {
        card: 'summary_large_image',
        creator: '@lucasballout',
        images: ['/og.png'],
    },
    icons: {
        icon: '/favicon.ico',
        apple: '/apple-touch-icon.png',
    },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="de" className="dark" suppressHydrationWarning>
        <head>
            {GA_ID && (
                <>
                    {/* gtag.js im Head laden */}
                    <Script
                        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
                        strategy="beforeInteractive"
                    />
                    <Script id="ga-init" strategy="beforeInteractive">
                        {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', { anonymize_ip: true });
              `}
                    </Script>
                </>
            )}
        </head>
        <body>
        <Header />
        <div className="pt-32">{children}</div>
        </body>
        </html>
    )
}