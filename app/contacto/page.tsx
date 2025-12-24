'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import styles from './page.module.css';

export default function ContactPage() {
    const [phoneCopied, setPhoneCopied] = useState(false);
    const [emailCopied, setEmailCopied] = useState(false);

    const phone = '+351 92 615 3757';
    const email = 'abrigo.atelier@gmail.com';

    const copyToClipboard = async (text: string, type: 'phone' | 'email') => {
        try {
            await navigator.clipboard.writeText(text);
            if (type === 'phone') {
                setPhoneCopied(true);
                setTimeout(() => setPhoneCopied(false), 2000);
            } else {
                setEmailCopied(true);
                setTimeout(() => setEmailCopied(false), 2000);
            }
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    return (
        <>
            <Header />
            <main className={styles.main}>
                <div className={styles.container}>
                    <div className={styles.content}>
                        <div className={styles.info}>
                            <h2>Contacto</h2>
                            <div className={styles.contactDetails}>
                                <div className={styles.contactRow}>
                                    <div>
                                        <h3>Telemóvel</h3>
                                        <p>{phone}</p>
                                    </div>
                                    <button
                                        onClick={() => copyToClipboard(phone, 'phone')}
                                        className={styles.copyButton}
                                        title="Copiar número"
                                    >
                                        {phoneCopied ? '✓' : '⎘'}
                                    </button>
                                </div>
                                <div className={styles.contactRow}>
                                    <div>
                                        <h3>Email</h3>
                                        <p>{email}</p>
                                    </div>
                                    <div className={styles.buttonGroup}>
                                        <button
                                            onClick={() => copyToClipboard(email, 'email')}
                                            className={styles.copyButton}
                                            title="Copiar email"
                                        >
                                            {emailCopied ? '✓' : '⎘'}
                                        </button>
                                        <a
                                            href={`mailto:${email}`}
                                            className={styles.emailButton}
                                            title="Enviar email"
                                        >
                                            ✉
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <h3>Localização</h3>
                                    <p>Entre Lisboa e Ferreira do Alentejo</p>
                                </div>
                                <div>
                                    <h3>Redes Sociais</h3>
                                    <div className={styles.social}>
                                        <a href="https://www.facebook.com/abrigo.atelier" target="_blank" rel="noopener noreferrer">Facebook</a>
                                        <a href="https://www.instagram.com/abrigo.atelier/" target="_blank" rel="noopener noreferrer">Instagram</a>
                                        <a href="https://www.linkedin.com/company/abrigo-atelier/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.architects}>
                            <div className={styles.architectCard}>
                                <div className={styles.photo}>
                                    <Image
                                        src="/images/architects/mafalda.png"
                                        alt="Mafalda Toscano"
                                        fill
                                        style={{ objectFit: 'cover' }}
                                    />
                                </div>
                                <h3>Mafalda Toscano</h3>
                                <p>Mestre em Arquitectura pelo Instituto Superior Técnico e pela Faculdade de Arquitectura do Porto desde 2018. Estagiou com a Infraestruturas de Portugal em 2019 e colabora desde 2020 com o Desatelier.</p>
                            </div>
                            <div className={styles.architectCard}>
                                <div className={styles.photo}>
                                    <Image
                                        src="/images/architects/miguel.png"
                                        alt="Miguel del Castilho"
                                        fill
                                        style={{ objectFit: 'cover' }}
                                    />
                                </div>
                                <h3>Miguel del Castilho</h3>
                                <p>Mestre em Arquitectura pelo Instituto Superior Técnico e pela Technische Universiteit Eindhoven desde 2017. Colaborou com vários ateliers na sua prática profissional, tendo sido os mais importantes o Atelier RUA, em 2019, o Terrapalha em 2020 e o Desatelier em 2021. Actualmente, e desde Setembro de 2021, que integra o CRU Atelier.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
