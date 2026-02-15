'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-banner glass">
      <div className="container banner-content">
        <div className="text-content">
          <p>
            Wir nutzen Cookies, um Ihre Erfahrung zu verbessern. Durch die weitere Nutzung unserer Website stimmen Sie der Verwendung von Cookies zu.
            Weitere Informationen finden Sie in unserer <Link href="/cookie-policy" className="policy-link">Cookie-Richtlinie</Link>.
          </p>
        </div>
        <div className="actions">
          <button className="btn btn-primary" onClick={acceptCookies}>Akzeptieren</button>
        </div>
      </div>

      <style jsx>{`
        .cookie-banner {
          position: fixed;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          width: 90%;
          max-width: 800px;
          z-index: 9999;
          padding: 1.5rem;
          border-radius: 20px;
          animation: slideUp 0.5s ease forwards;
        }

        .banner-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
        }

        .text-content p {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.5;
        }

        .policy-link {
          color: var(--primary);
          text-decoration: underline;
        }

        .actions {
          flex-shrink: 0;
        }

        @keyframes slideUp {
          from {
            transform: translate(-50%, 100px);
            opacity: 0;
          }
          to {
            transform: translate(-50%, 0);
            opacity: 1;
          }
        }

        @media (max-width: 768px) {
          .banner-content {
            flex-direction: column;
            text-align: center;
            gap: 1rem;
          }
        }
      `}</style>
    </div>
  );
}
