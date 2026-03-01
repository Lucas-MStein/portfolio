import Hero from '@/components/Hero';
import Work from '@/components/Work';
import Gallery from '@/components/Gallery';
import ArticleList from '@/components/ArticleList';
import Footer from '@/components/Footer';

export default function Home() {
    return (
        <main className="bg-black text-white min-h-screen py-20">
            <div id="top" />
            {/* Master Container (einheitlich für alles) */}
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-20">
                <Hero />

                {/* Gallery sollte KEINEN eigenen max-w-7xl Container mehr haben,
           oder sie nutzt denselben max-w-6xl wie hier. */}
                <Gallery />

                {/* Articles + Work Layout */}
                <section className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_360px] items-start">
                    <ArticleList />

                    {/* Sidebar rechts */}
                    <div className="lg:sticky lg:top-28">
                        <Work />
                    </div>
                </section>
            </div>

            {/* Footer außerhalb vom space-y Stack */}
            <Footer />
        </main>
    );
}