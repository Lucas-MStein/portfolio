import './globals.css'
import Header from '@/components/Header'

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body>
        <Header />
        <div className="pt-32">{children}</div> {/* mehr Abstand für zentrierten Header */}
        </body>
        </html>
    );
}