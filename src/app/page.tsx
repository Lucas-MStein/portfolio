import Hero from '@/components/Hero';
import Work from '@/components/Work';
import Gallery from '@/components/Gallery';
import ArticleList from '@/components/ArticleList';
import Footer from '@/components/Footer';

export default function Home() {
    return (
        <main className="bg-black text-white min-h-screen py-20 px-4">
            <div className="max-w-7xl mx-auto space-y-24">
                <Hero />
                <Gallery />

                {/* Grid für Artikel + Jobs */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <ArticleList />
                    <Work />
                </div>
                <Footer />
            </div>
        </main>
    );
}