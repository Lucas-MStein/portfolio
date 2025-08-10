import Image from 'next/image';

const images = [
    '/gallery/image1.jpg',
    '/gallery/image2.jpg',
    '/gallery/image3.jpg',
    '/gallery/image4.jpg',
];

export default function Gallery() {
    return (
        <section className="w-full">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
                    {images.map((src, index) => (
                        <div
                            key={index}
                            className="group overflow-hidden rounded-2xl bg-zinc-800 hover:scale-105 hover:rotate-1 transition-all duration-300"
                        >
                            <Image
                                src={src}
                                alt={`Gallery image ${index + 1}`}
                                width={500}
                                height={500}
                                className="object-cover aspect-square rounded-2xl transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}