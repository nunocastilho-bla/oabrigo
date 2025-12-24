'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import styles from './Header.module.css';

export default function Header() {
    const [projectsOpen, setProjectsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            // Calculate opacity based on scroll (0 to 1, maxing out at 200px scroll)
            const opacity = Math.min(scrollPosition / 200, 1);
            setScrolled(opacity);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={styles.header}
            style={{
                backgroundColor: `rgba(26, 20, 16, ${scrolled * 0.95})`,
                backdropFilter: scrolled > 0 ? `blur(${scrolled * 10}px)` : 'none'
            }}
        >
            <div className={styles.logo}>
                <Link href="/">
                    <Image
                        src="/logo.png"
                        alt="Abrigo Logo"
                        width={80}
                        height={80}
                        className={styles.logoImage}
                    />
                </Link>
            </div>

            <nav className={styles.nav}>
                <Link href="/contacto">CONTACTO</Link>
                <div
                    className={styles.dropdown}
                    onMouseEnter={() => setProjectsOpen(true)}
                    onMouseLeave={() => setProjectsOpen(false)}
                >
                    <span>PROJECTOS</span>
                    {projectsOpen && (
                        <div className={styles.dropdownMenu}>
                            {['A01', 'A02', 'A03', 'A04', 'A05', 'A06', 'A07'].map(project => (
                                <Link key={project} href={`/projectos/${project.toLowerCase()}`}>
                                    {project}
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </nav>
        </header>
    );
}
