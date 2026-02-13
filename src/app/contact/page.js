'use client';

import React from 'react';
import Link from 'next/link';
import { FaArrowLeft, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

export default function ContactPage() {
    return (
        <div className="contact-page">
            <nav className="contact-nav glass">
                <div className="container">
                    <Link href="/" className="back-link">
                        <FaArrowLeft style={{ marginRight: '8px' }} /> Zurück
                    </Link>
                    <div className="logo"><span className="logo-accent">SUSHI</span> JOY</div>
                </div>
            </nav>

            <section className="contact-hero">
                <div className="container">
                    <h1 className="section-title">Kontaktieren Sie uns</h1>
                    <p className="section-subtitle">Haben Sie Fragen oder Feedback? Wir freuen uns, von Ihnen zu hören.</p>
                </div>
            </section>

            <section className="contact-content container">
                <div className="contact-grid">
                    <div className="contact-info">
                        <div className="info-item glass">
                            <FaEnvelope className="icon" />
                            <div>
                                <h3>Email</h3>
                                <p>info@sushijoy.com</p>
                            </div>
                        </div>
                        <div className="info-item glass">
                            <FaPhone className="icon" />
                            <div>
                                <h3>Telefon</h3>
                                <p>+49 (0) 555 123-4567</p>
                            </div>
                        </div>
                        <div className="info-item glass">
                            <FaMapMarkerAlt className="icon" />
                            <div>
                                <h3>Hauptsitz</h3>
                                <p>Warendorferstr. 16, 59302 Oelde</p>
                            </div>
                        </div>
                    </div>

                    <form className="contact-form glass" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" placeholder="Geben Sie Ihren Namen ein" className="glass" />
                        </div>
                        <div className="form-group">
                            <label>E-Mail</label>
                            <input type="email" placeholder="Geben Sie Ihre E-Mail ein" className="glass" />
                        </div>
                        <div className="form-group">
                            <label>Nachricht</label>
                            <textarea placeholder="Wie können wir Ihnen helfen?" className="glass" rows="5"></textarea>
                        </div>
                        <button className="btn btn-primary w-full">
                            <FaPaperPlane style={{ marginRight: '8px' }} /> Nachricht senden
                        </button>
                    </form>
                </div>
            </section>

            <style jsx>{`
        .contact-page {
          min-height: 100vh;
          padding-top: 100px;
          background: var(--bg-dark);
        }

        .contact-nav {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 1rem 0;
        }

        .contact-nav .container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .back-link {
          color: var(--text-muted);
          font-weight: 600;
          display: flex;
          align-items: center;
        }

        .logo {
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .logo-accent {
          color: var(--primary);
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 3rem;
          margin-bottom: 60px;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .info-item {
          padding: 2rem;
          border-radius: 20px;
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .icon {
          font-size: 1.5rem;
          color: var(--primary);
        }

        .contact-form {
          padding: 3rem;
          border-radius: 24px;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 600;
          color: var(--text-muted);
        }

        .form-group input, .form-group textarea {
          width: 100%;
          padding: 1rem;
          border-radius: 12px;
          border: 1px solid var(--glass-border);
          color: white;
          outline: none;
          transition: var(--transition);
        }

        .form-group input:focus, .form-group textarea:focus {
          border-color: var(--primary);
        }

        .w-full {
          width: 100%;
        }

        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
        </div>
    );
}
