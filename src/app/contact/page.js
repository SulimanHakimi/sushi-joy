'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaArrowLeft, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'contact', name, email, message }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus({ type: 'success', message: 'Nachricht erfolgreich gesendet!' });
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus({ type: 'error', message: data.error || 'Etwas ist schief gelaufen.' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Fehler beim Senden der Nachricht.' });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="contact-page">


      <section className="contact-hero">
        <div className="container">
          <h1 className="section-title">Kontaktieren Sie uns</h1>
          <p className="section-subtitle">Haben Sie Fragen oder Feedback? Wir freuen uns, von Ihnen zu hören</p>
        </div>
      </section>

      <section className="contact-content container">
        <div className="contact-grid">
          <div className="contact-info">
            <div className="info-item glass">
              <FaEnvelope className="icon" />
              <div>
                <h3>E-Mail</h3>
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
                <p>Warendorferstr. 16, 59302 Oelde, Germany</p>
              </div>
            </div>
            <div className="info-item glass">
              <FaMapMarkerAlt className="icon" />
              <div>
                <h3>Filiale Paderborn</h3>
                <p>Alisostraße 2, 33106 Paderborn, Germany</p>
              </div>
            </div>
          </div>

          <form className="contact-form glass" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                placeholder="Ihr Name"
                className="glass"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>E-Mail</label>
              <input
                type="email"
                placeholder="Ihre E-Mail-Adresse"
                className="glass"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Nachricht</label>
              <textarea
                placeholder="Wie können wir Ihnen helfen?"
                className="glass"
                rows="5"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <button className="btn btn-primary w-full" disabled={isSubmitting} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <FaPaperPlane style={{ marginRight: '8px' }} />
              {isSubmitting ? 'Sende...' : 'Nachricht senden'}
            </button>
            {status && (
              <p className={`status-message ${status.type}`}>
                {status.message}
              </p>
            )}


          </form>
        </div>
      </section>

      <style jsx>{`
        .contact-page {
          min-height: 100vh;
          padding-top: 100px;
          background: var(--bg-dark);
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
          border: 2px solid rgba(255, 255, 255, 0.15);
          color: white;
          background: rgba(255,255,255,0.05);
          outline: none;
          transition: var(--transition);
        }
        
        .form-group input::placeholder, .form-group textarea::placeholder {
          color: rgba(255, 255, 255, 0.4);
        }

        .form-group input:focus, .form-group textarea:focus {
          border-color: var(--primary);
          background: rgba(255,255,255,0.1);
          box-shadow: 0 0 0 2px rgba(255, 87, 34, 0.2);
        }

        .w-full {
          width: 100%;
        }

        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }
        
        .status-message {
            margin-top: 1rem;
            padding: 10px;
            border-radius: 8px;
            text-align: center;
        }
        .status-message.success {
            background: rgba(76, 175, 80, 0.2);
            color: #4CAF50;
        }
        .status-message.error {
            background: rgba(244, 67, 54, 0.2);
            color: #F44336;
        }
      `}</style>
    </div>
  );
}
