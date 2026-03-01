'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

type PageHeaderProps = {
    title: string;
    description?: string;
};

export default function PageHeader({ title, description }: PageHeaderProps) {
    const router = useRouter();

    return (
        <header className="w-full">
            {/* Back row: immer gleiche Höhe */}
            <div className="h-10 flex items-center">
                <button
                    type="button"
                    onClick={() => router.back()}
                    className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition
                     focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 rounded-md px-2 -ml-2"
                    aria-label="Zurück"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Zurück
                </button>
            </div>

            <h1 className="mt-10 text-4xl sm:text-5xl font-bold tracking-tight text-white">
                {title}
            </h1>

            {description && (
                <p className="mt-6 max-w-2xl text-base text-zinc-400 leading-relaxed">
                    {description}
                </p>
            )}
        </header>
    );
}