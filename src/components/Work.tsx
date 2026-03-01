import {
    Briefcase,
    FileDown,
    Coffee,
    Building2,
    Crosshair,
} from 'lucide-react';

const jobs = [
    {
        company: 'KÖMPF Onlineshops GmbH',
        role: 'B.A. in Onlinemedien',
        years: 'Oct. 2024 — Heute',
        icon: Building2,
    },
    {
        company: 'TSV Calw',
        role: 'FSJ Sport & Schule',
        years: '2021 — 2022',
        icon: Crosshair,
    },
    {
        company: 'VGC Wimberg',
        role: 'Getränkeabteilung',
        years: '2018 — Sep. 2024 (mit Unterbrechung)',
        icon: Coffee,
    },
];

export default function Work() {
    return (
        <aside className="bg-zinc-900/60 ring-1 ring-white/10 rounded-2xl p-6 text-white shadow-lg shadow-black/25">

            <h2 className="flex items-center gap-2 text-sm font-semibold text-zinc-400 mb-6">
                <Briefcase className="w-4 h-4" />
                Work
            </h2>

            <ul className="space-y-6">
                {jobs.map((job) => (
                    <li key={job.company} className="flex items-start gap-4">
                        <div className="p-2 bg-zinc-800 rounded-lg">
                            <job.icon className="w-5 h-5 text-zinc-300" />
                        </div>

                        <div>
                            <h3 className="text-sm font-medium text-white">
                                {job.company}
                            </h3>
                            <p className="text-sm text-indigo-400">
                                {job.role}
                            </p>
                            <p className="text-xs text-zinc-500">
                                {job.years}
                            </p>
                        </div>
                    </li>
                ))}
            </ul>

            <div className="mt-6">
                <a
                    href="/cv.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full rounded-xl
                     border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white/80
                     hover:bg-white/10 hover:border-white/20 transition"
                >
                    <FileDown className="w-4 h-4 mr-2" />
                    Download CV
                </a>
            </div>
        </aside>
    );
}