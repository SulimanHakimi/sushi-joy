'use client';

import React from 'react';
import Link from 'next/link';

export default function Hero() {
  return (
    <>
      <section id="hero" className="hero">
        <div className="hero-overlay"></div>
        <div className="container hero-content fade-in">
          <h1 className="hero-title">Erlebe die <br /><span className="highlight">Freude an Frische</span></h1>
          <p className="hero-subtitle">Premium handgemachtes Sushi, täglich frisch für deinen Supermarkt zubereitet. Authentischer Geschmack, kompromisslose Qualität.</p>
          <div className="hero-btns">
            <Link href="/products" className="btn btn-primary">Menü entdecken</Link>
            <Link href="/locations" className="btn btn-outline">Filiale finden</Link>
          </div>
        </div>
      </section>
      <style jsx>{`
        .hero {
          height: 140vh;
          background: url('https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=2000') center/cover no-repeat;
          display: flex;
          align-items: center;
          position: relative;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, rgba(0,0,0,0.9) 20%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.2));
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 700px;
        }

        .hero-title {
          font-size: 5rem;
          line-height: 1.1;
          margin-bottom: 1.5rem;
        }

        .highlight {
          color: var(--primary);
        }

        .hero-subtitle {
          font-size: 1.25rem;
          color: var(--text-muted);
          margin-bottom: 2.5rem;
        }

        .hero-btns {
          display: flex;
          gap: 1.5rem;
        }

        @media (max-width: 1200px) {
          .hero-title { font-size: 4rem; }
        }

        @media (max-width: 768px) {
          .hero-title { font-size: 3rem; }
          .hero-subtitle { font-size: 1.1rem; }
          .hero-btns { flex-direction: column; }
        }

        @media (max-width: 480px) {
          .hero-title { font-size: 2.2rem; }
          .hero-subtitle { font-size: 1rem; }
        }
      `}</style>
    </>
  );
}
