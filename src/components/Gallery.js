'use client';

import React from 'react';

import galleryImages from '../data/gallery.json';

export default function Gallery() {
    return (
        <section id="gallery" className="gallery-section">
            <div className="container">
                <h2 className="section-title">Einblicke in den Genuss</h2>
                <p className="section-subtitle">Bilder aus unserer Küche direkt auf deinen Tisch.</p>

                <div className="gallery-grid">
                    {galleryImages.map((src, index) => (
                        <div key={index} className="gallery-item glass">
                            <img src={src} alt={`Sushi Joy Gallery ${index + 1}`} loading="lazy" />
                            <div className="overlay">
                                <span className="overlay-text">Sushi Joy</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .gallery-section {
                    padding: 80px 0;
                    background: var(--bg-dark);
                }

                .gallery-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
                    gap: 2rem;
                }

                .gallery-item {
                    position: relative;
                    border-radius: 20px;
                    overflow: hidden;
                    aspect-ratio: 1 / 1; /* Square images */
                    cursor: pointer;
                    transition: var(--transition);
                }

                .gallery-item img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.5s ease;
                }

                .gallery-item:hover {
                    box-shadow: 0 15px 30px rgba(0,0,0,0.4);
                }

                .gallery-item:hover img {
                    transform: scale(1.1);
                }

                .overlay {
                    position: absolute;
                    inset: 0;
                    background: rgba(0, 0, 0, 0.4);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    opacity: 0;
                    transition: var(--transition);
                }

                .gallery-item:hover .overlay {
                    opacity: 1;
                }

                .overlay-text {
                    color: white;
                    font-family: 'Playfair Display', serif;
                    font-size: 1.5rem;
                    font-weight: 600;
                    transform: translateY(20px);
                    transition: transform 0.3s ease;
                }

                .gallery-item:hover .overlay-text {
                    transform: translateY(0);
                }

                @media (max-width: 768px) {
                    .gallery-grid {
                        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
                        gap: 1rem;
                    }
                }
            `}</style>
        </section>
    );
}
