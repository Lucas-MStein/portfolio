'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function Header() {
    const [hovered, setHovered] = useState<string | null>(null);
    const pathname = usePathname();

    const navItems = [
        { name: 'Start', href: '/#top' }, // 👈 NEU
        { name: 'Über', href: '/about' },
        { name: 'Projekte', href: '/projects' },
        { name: 'Leistungen', href: '/services' },
        { name: 'Tools', href: '/uses' },
    ];

    return (
        <header className="fixed top-6 inset-x-0 z-50 flex justify-center">
            <nav className="flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/75 px-2 py-2 text-sm shadow-lg backdrop-blur-md">
                {navItems.map((item) => {
                    const isActive =
                        item.href === '/'
                            ? pathname === '/'
                            : pathname === item.href || pathname.startsWith(item.href + '/');

                    const isHovered = hovered === item.href;

                    return (
                        <div
                            key={item.href}
                            className="relative"
                            onMouseEnter={() => setHovered(item.href)}
                            onMouseLeave={() => setHovered(null)}
                        >
                            {/* Hover-Pill */}
                            <AnimatePresence>
                                {isHovered && !isActive && (
                                    <motion.span
                                        layoutId="nav-pill-hover"
                                        className="absolute inset-0 rounded-full bg-zinc-800/60"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.15 }}
                                    />
                                )}
                            </AnimatePresence>

                            {/* Active-Pill */}
                            {isActive && (
                                <motion.span
                                    layoutId="nav-pill-active"
                                    className="absolute inset-0 rounded-full bg-zinc-800"
                                    transition={{
                                        type: 'spring',
                                        stiffness: 500,
                                        damping: 40,
                                        mass: 0.5,
                                    }}
                                />
                            )}

                            <Link
                                href={item.href}
                                className={`relative z-10 px-3 py-1.5 rounded-full transition
                  ${isActive ? 'text-white' : 'text-zinc-400 hover:text-white'}
                `}
                            >
                                {item.name}
                            </Link>
                        </div>
                    );
                })}
            </nav>
        </header>
    );
}