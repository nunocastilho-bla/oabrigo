'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './project.module.css';

interface ProjectGalleryProps {
    projectId: string;
    projectTitle: string;
}

export default function ProjectGallery({ projectId, projectTitle }: ProjectGalleryProps) {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [loadedImages, setLoadedImages] = useState<Array<{ src: string; alt: string }>>([]);

    // Load available images on mount
    useEffect(() => {
        const checkImages = async () => {
            const availableImages: Array<{ src: string; alt: string }> = [];
            const maxImages = 20;

            for (let i = 1; i <= maxImages; i++) {
                const imagePath = `/images/projects/${projectId}/${i}.png`;
                try {
                    const response = await fetch(imagePath, { method: 'HEAD' });
                    if (response.ok) {
                        availableImages.push({
                            src: imagePath,
                            alt: `${projectTitle} - Image ${i}`
                        });
                    }
                } catch {
                    // Image doesn't exist, skip it
                    break; // Stop checking if we hit a missing image
                }
            }
            setLoadedImages(availableImages);
        };

        checkImages();
    }, [projectId, projectTitle]);

    const images = loadedImages;

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
                        <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            style={{ objectFit: 'cover' }}
                            sizes="(max-width: 768px) 100vw, 350px"
                        />
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
                            <Image
                                src={images[currentImageIndex].src}
                                alt={images[currentImageIndex].alt}
                                fill
                                style={{ objectFit: 'contain' }}
                                sizes="90vw"
                            />
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
