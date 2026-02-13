'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaArrowLeft, FaTruck, FaPaperPlane } from 'react-icons/fa';
import { getTrackingUrl } from '@/utils/tracking';

export default function TrackOrderPage() {
    const [shipmentId, setShipmentId] = useState('');
    const [error, setError] = useState('');

    const handleTrack = (e) => {
        e.preventDefault();
        if (!shipmentId.trim()) {
            setError('Bitte geben Sie eine Sendungsnummer ein.');
            return;
        }

        const trackingUrl = getTrackingUrl(shipmentId);
        window.open(trackingUrl, '_blank');
        setError('');
    };

    return (
        <div className="track-page">
            <nav className="track-nav glass">
                <div className="container">
                    <Link href="/" className="back-link">
                        <FaArrowLeft style={{ marginRight: '8px' }} /> Zurück
                    </Link>
                    <div className="logo"><span className="logo-accent">SUSHI</span> JOY</div>
                </div>
            </nav>

            <section className="track-hero">
                <div className="container">
                    <h1 className="section-title">Sendungsverfolgung</h1>
                    <p className="section-subtitle">Geben Sie Ihre Sendungsnummer ein, um den Status Ihrer Lieferung zu prüfen.</p>
                </div>
            </section>

            <section className="track-content container">
                <div className="track-box glass">
                    <FaTruck className="track-icon" />
                    <form onSubmit={handleTrack} className="track-form">
                        <div className="form-group">
                            <label htmlFor="shipmentId">Sendungsnummer (Shipment ID)</label>
                            <input
                                type="text"
                                id="shipmentId"
                                placeholder="z.B. 988022729286"
                                value={shipmentId}
                                onChange={(e) => setShipmentId(e.target.value)}
                                className="glass-input"
                            />
                        </div>
                        {error && <p className="error-msg">{error}</p>}
                        <button type="submit" className="btn btn-primary w-full">
                            <FaPaperPlane style={{ marginRight: '8px' }} /> Verfolgen
                        </button>
                    </form>
                    <p className="track-note">
                        Sie werden zur Tracking-Seite unseres Logistikpartners DB Schenker weitergeleitet.
                    </p>
                </div>
            </section>

            <style jsx>{`
        .track-page {
          min-height: 100vh;
          padding-top: 100px;
          background: var(--bg-dark);
        }

        .track-nav {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 1rem 0;
        }

        .track-nav .container {
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

        .track-hero {
          padding: 60px 0;
          text-align: center;
        }

        .track-content {
          display: flex;
          justify-content: center;
          margin-bottom: 60px;
        }

        .track-box {
          padding: 3rem;
          border-radius: 24px;
          max-width: 500px;
          width: 100%;
          text-align: center;
        }

        .track-icon {
          font-size: 4rem;
          color: var(--primary);
          margin-bottom: 2rem;
        }

        .track-form {
          margin-bottom: 1.5rem;
          text-align: left;
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

        .glass-input {
          width: 100%;
          padding: 1rem;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid var(--glass-border);
          color: white;
          outline: none;
          transition: var(--transition);
        }

        .glass-input:focus {
          border-color: var(--primary);
          background: rgba(255, 255, 255, 0.1);
        }

        .error-msg {
          color: #ff4444;
          margin-bottom: 1rem;
          font-size: 0.9rem;
        }

        .w-full {
          width: 100%;
        }

        .track-note {
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.5;
        }
      `}</style>
        </div>
    );
}
