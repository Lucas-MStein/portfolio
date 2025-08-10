import {
    Briefcase,
    FileDown,
    Coffee,
    Building2, Crosshair,
} from 'lucide-react';

const jobs = [
    {
        company: 'KÖMPF Onlineshops GmbH',
        role: 'B.A. in Onlinemedien',
        years: ' Oct. 2024 — Heute',
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
        <div className="bg-zinc-900 rounded-xl p-6 text-white w-full max-w-md mx-auto lg:mx-0">
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
                            <h3 className="text-sm font-medium text-white">{job.company}</h3>
                            <p className="text-sm text-indigo-400">{job.role}</p>
                            <p className="text-xs text-zinc-500">{job.years}</p>
                        </div>
                    </li>
                ))}
            </ul>
            <div className="mt-6">
                <a
                    href="/cv.pdf"
                    target="_blank"
                    className="flex items-center justify-center w-full rounded-md border border-zinc-700 px-4 py-2 text-sm text-zinc-300 hover:border-white transition"
                >
                    <FileDown className="w-4 h-4 mr-2" />
                    Download CV
                </a>
            </div>
        </div>
    );
}