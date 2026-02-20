'use client';

import React from 'react';
import { FaHandshake, FaChartLine, FaStore, FaCheckCircle } from 'react-icons/fa';

export default function Partnership() {
    return (
        <main className="partnership-page">
            <section className="hero-section">
                <div className="container hero-content">
                    <h1 className="hero-title">Werden Sie <span className="highlight">Sushi Joy</span> Partner</h1>
                    <p className="hero-subtitle">
                        Bringen Sie erstklassiges, frisch zubereitetes Sushi in Ihren Supermarkt.
                        Steigern Sie Ihre Frequenz und begeistern Sie Ihre Kunden mit authentischer japanischer Qualität.
                    </p>
                    <a href="#partner-form" className="btn btn-primary">Jetzt Partner werden</a>
                </div>
            </section>

            <section className="value-props">
                <div className="container">
                    <h2 className="section-title">Warum Sushi Joy?</h2>
                    <div className="props-grid">
                        <div className="prop-card glass">
                            <FaChartLine className="prop-icon" />
                            <h3>Umsatzsteigerung</h3>
                            <p>Profitieren Sie von einer attraktiven Marge und steigern Sie den Durchschnittsbon Ihrer Kunden durch unser Premium-Sushi.</p>
                        </div>
                        <div className="prop-card glass">
                            <FaStore className="prop-icon" />
                            <h3>Full-Service Konzept</h3>
                            <p>Wir kümmern uns um alles: Von der Theke über das Personal bis hin zur täglichen Frischelieferung und Zubereitung vor Ort.</p>
                        </div>
                        <div className="prop-card glass">
                            <FaCheckCircle className="prop-icon" />
                            <h3>Höchste Qualität</h3>
                            <p>Unsere Sushi-Meister verwenden nur zertifizierte, frische Zutaten. Nachhaltigkeit und Qualität stehen bei uns an erster Stelle.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="partner-form" className="contact-section">
                <div className="container">
                    <div className="form-wrapper glass">
                        <h2 className="form-title">Partnerantrag</h2>
                        <p className="form-subtitle">Interessiert? Füllen Sie das Formular aus und wir melden uns umgehend bei Ihnen.</p>

                        <form className="partnership-form" onSubmit={(e) => e.preventDefault()}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="company">Supermarkt / Unternehmen</label>
                                    <input type="text" id="company" placeholder="z.B. Edeka Muster" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="contact-person">Ansprechpartner</label>
                                    <input type="text" id="contact-person" placeholder="Max Mustermann" required />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="email">E-Mail Adresse</label>
                                    <input type="email" id="email" placeholder="max@beispiel.de" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="city">Stadt / Standort</label>
                                    <input type="text" id="city" placeholder="Musterstadt" required />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Nachricht (Optional)</label>
                                <textarea id="message" rows="4" placeholder="Zusätzliche Informationen..."></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary btn-block">
                                <FaHandshake style={{ marginRight: '10px' }} /> Jetzt Anfrage senden
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .partnership-page {
                    background: var(--bg-dark);
                    min-height: 100vh;
                    padding-top: 80px;
                }

                .hero-section {
                    padding: 80px 0;
                    text-align: center;
                    background: radial-gradient(circle at center, rgba(255,87,34,0.15) 0%, transparent 70%);
                }

                .hero-title {
                    font-size: 3.5rem;
                    font-weight: 800;
                    margin-bottom: 1.5rem;
                    line-height: 1.1;
                    color: white;
                }

                .highlight {
                    color: var(--primary);
                    background: linear-gradient(120deg, rgba(255,87,34,0.2) 0%, rgba(255,87,34,0) 100%);
                    padding: 0 10px;
                    border-radius: 8px;
                }

                .hero-subtitle {
                    font-size: 1.2rem;
                    color: var(--text-muted);
                    max-width: 700px;
                    margin: 0 auto 2.5rem;
                    line-height: 1.6;
                }

                .value-props {
                    padding: 60px 0;
                }

                .section-title {
                    text-align: center;
                    font-size: 2.5rem;
                    margin-bottom: 3rem;
                    color: white;
                }

                .props-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 2rem;
                }

                .prop-card {
                    padding: 2.5rem;
                    border-radius: 20px;
                    text-align: center;
                    border: 1px solid var(--glass-border);
                    background: rgba(255, 255, 255, 0.03);
                    transition: transform 0.3s ease, border-color 0.3s ease;
                }

                .prop-card:hover {
                    transform: translateY(-10px);
                    border-color: var(--primary);
                    background: rgba(255, 255, 255, 0.05);
                }

                .prop-icon {
                    font-size: 3rem;
                    color: var(--primary);
                    margin-bottom: 1.5rem;
                }

                .prop-card h3 {
                    font-size: 1.5rem;
                    margin-bottom: 1rem;
                    color: white;
                }

                .prop-card p {
                    color: var(--text-muted);
                    line-height: 1.6;
                }

                .contact-section {
                    padding: 80px 0;
                }

                .form-wrapper {
                    max-width: 800px;
                    margin: 0 auto;
                    padding: 3rem;
                    border-radius: 20px;
                    border: 1px solid var(--glass-border);
                    background: rgba(20, 20, 20, 0.8);
                }

                .form-title {
                    text-align: center;
                    font-size: 2rem;
                    color: white;
                    margin-bottom: 0.5rem;
                }

                .form-subtitle {
                    text-align: center;
                    color: var(--text-muted);
                    margin-bottom: 2.5rem;
                }

                .partnership-form .form-row {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1.5rem;
                }

                .form-group {
                    margin-bottom: 1.5rem;
                }

                .form-group label {
                    display: block;
                    margin-bottom: 0.5rem;
                    color: var(--text-muted);
                    font-weight: 500;
                }

                .form-group input,
                .form-group textarea {
                    width: 100%;
                    padding: 12px 16px;
                    border-radius: 10px;
                    border: 1px solid var(--glass-border);
                    background: rgba(255, 255, 255, 0.05);
                    color: white;
                    font-size: 1rem;
                    transition: all 0.3s ease;
                }

                .form-group input:focus,
                .form-group textarea:focus {
                    border-color: var(--primary);
                    outline: none;
                    box-shadow: 0 0 0 3px rgba(255, 87, 34, 0.2);
                }

                .btn-block {
                    width: 100%;
                    margin-top: 1rem;
                }

                @media (max-width: 768px) {
                    .partnership-form .form-row {
                        grid-template-columns: 1fr;
                    }
                    .hero-title {
                        font-size: 2.5rem;
                    }
                    .form-wrapper {
                        padding: 1.5rem;
                    }
                }
            `}</style>
        </main>
    );
}
