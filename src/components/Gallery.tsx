import Image from 'next/image';

const images = [
    '/gallery/image1.jpg',
    '/gallery/image2.jpg',
    '/gallery/image3.jpg',
    '/gallery/image4.jpg',
];

export default function Gallery() {
    return (
        <section className="w-full py-10 md:py-12 border-b border-white/5">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {images.map((src, index) => (
                    <div
                        key={index}
                        className="group overflow-hidden rounded-2xl bg-zinc-900/60 ring-1 ring-white/10
                       transition-transform duration-300 hover:scale-[1.02]"
                    >
                        <Image
                            src={src}
                            alt={`Gallery image ${index + 1}`}
                            width={600}
                            height={600}
                            className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}