'use client';

import { useState, useEffect } from 'react';
import styles from './project.module.css';

interface ProjectGalleryProps {
    projectId: string;
    projectTitle: string;
}

export default function ProjectGallery({ projectId, projectTitle }: ProjectGalleryProps) {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Replace with actual images count when you upload them
    const imageCount = 5; // Placeholder count
    const images = Array.from({ length: imageCount }, (_, i) => ({
        src: `/images/projects/${projectId}/${i + 1}.jpg`,
        alt: `${projectTitle} - Image ${i + 1}`,
        placeholder: `Imagem ${i + 1}`
    }));

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!lightboxOpen) return;

            if (e.key === 'Escape') {
                setLightboxOpen(false);
            } else if (e.key === 'ArrowLeft') {
                navigatePrevious();
            } else if (e.key === 'ArrowRight') {
                navigateNext();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [lightboxOpen, currentImageIndex]);

    const openLightbox = (index: number) => {
        setCurrentImageIndex(index);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
    };

    const navigateNext = () => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const navigatePrevious = () => {
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <>
            <div className={styles.gallery}>
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={styles.imageContainer}
                        onClick={() => openLightbox(index)}
                    >
                        <div className={styles.placeholder}>
                            {image.placeholder}
                        </div>
                    </div>
                ))}
            </div>

            {/* Lightbox Modal */}
            {lightboxOpen && (
                <div className={styles.lightbox} onClick={closeLightbox}>
                    <button className={styles.closeButton} onClick={closeLightbox}>
                        ✕
                    </button>

                    <button
                        className={`${styles.navButton} ${styles.prevButton}`}
                        onClick={(e) => {
                            e.stopPropagation();
                            navigatePrevious();
                        }}
                    >
                        ‹
                    </button>

                    <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
                        <div className={styles.imageWrapper}>
                            <div className={styles.lightboxPlaceholder}>
                                {images[currentImageIndex].placeholder}
                            </div>
                        </div>
                        <div className={styles.imageCounter}>
                            {currentImageIndex + 1} / {images.length}
                        </div>
                    </div>

                    <button
                        className={`${styles.navButton} ${styles.nextButton}`}
                        onClick={(e) => {
                            e.stopPropagation();
                            navigateNext();
                        }}
                    >
                        ›
                    </button>
                </div>
            )}
        </>
    );
}
