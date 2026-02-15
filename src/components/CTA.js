'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaPaperPlane } from 'react-icons/fa';

export default function CTA() {
  const [email, setEmail] = useState('');
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
        body: JSON.stringify({ type: 'newsletter', email }),
      });

      if (res.ok) {
        setStatus({ type: 'success', message: 'Danke fürs Abonnieren!' });
        setEmail('');
      } else {
        setStatus({ type: 'error', message: 'Etwas ist schiefgelaufen.' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Fehler beim Abonnieren.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="cta-section container">
        <div className="cta-box glass">
          <h2>Hol dir die Freude heute nach Hause</h2>
          <p>Abonniere unseren Newsletter für exklusive Rezepte, Sake-Guides und Neuigkeiten.</p>
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <div style={{ flex: 1 }}>
              <input
                type="email"
                placeholder="Deine E-Mail-Adresse"
                className="glass"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isSubmitting}
              />
              {status && <p style={{ fontSize: '0.9rem', color: status.type === 'success' ? '#4CAF50' : '#F44336', marginTop: '10px' }}>{status.message}</p>}
            </div>
            <button type="submit" className="btn btn-primary" disabled={isSubmitting} style={{ height: 'fit-content' }}>
              <FaPaperPlane style={{ marginRight: '8px', verticalAlign: 'middle' }} /> {isSubmitting ? 'Abonniere...' : 'Abonnieren'}
            </button>
          </form>
        </div>
      </section>
      <style jsx>{`
        .cta-box {
          padding: 5rem;
          border-radius: 40px;
          text-align: center;
          background: linear-gradient(135deg, rgba(255, 87, 34, 0.1), rgba(0,0,0,0));
          margin: 80px 0;
        }

        .cta-box h2 {
          font-size: 3.5rem;
          margin-bottom: 1.5rem;
        }

        .newsletter-form {
          margin-top: 2rem;
          display: flex;
          gap: 1rem;
          max-width: 600px;
          margin-inline: auto;
        }

        .newsletter-form input {
          flex: 1;
          padding: 1rem 1.5rem;
          border-radius: 50px;
          border: 1px solid var(--glass-border);
          color: white;
          outline: none;
        }

        @media (max-width: 768px) {
          .cta-box { padding: 3rem 1.5rem; }
          .cta-box h2 { font-size: 2.2rem; }
          .newsletter-form { flex-direction: column; }
        }
      `}</style>
    </>
  );
}
