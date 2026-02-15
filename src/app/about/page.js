'use client';

import React from 'react';
import Link from 'next/link';
import { FaArrowLeft, FaHistory, FaAward, FaUsers } from 'react-icons/fa';

export default function AboutPage() {
  return (
    <div className="about-page">


      <section className="about-hero">
        <div className="container">
          <h1 className="section-title">Unsere Geschichte</h1>
          <p className="section-subtitle">Vom kleinen Traum zur Supermarkt-Sensation.</p>
        </div>
      </section>

      <section className="about-content container">
        <div className="grid">
          <div className="about-card glass">
            <div className="icon"><FaHistory /></div>
            <h2>Seit 2012</h2>
            <p>Sushi Joy wurde mit der Vision gegründet, Restaurantqualität direkt in den Supermarkt zu bringen. Was in einer kleinen Küche begann, ist heute ein Symbol für Frische und Qualität in ganz Deutschland.</p>
          </div>
          <div className="about-card glass">
            <div className="icon"><FaAward /></div>
            <h2>Qualität an erster Stelle</h2>
            <p>Wir verwenden ausschließlich MSC-zertifizierten Fisch und regional bezogenes Gemüse. Jedes Nigiri und jede Maki-Rolle wird handgefertigt, um den perfekten Geschmack zu garantieren.</p>
          </div>
          <div className="about-card glass">
            <div className="icon"><FaUsers /></div>
            <h2>Unser Team</h2>
            <p>Unsere Sushi-Meister bringen jahrzehntelange Erfahrung aus der traditionellen japanischen Küche mit. Wir glauben, dass man die Leidenschaft in jedem Bissen schmeckt.</p>
          </div>
        </div>

        <div className="mission-statement glass">
          <h2>Unsere Mission</h2>
          <p>"Wir bringen die Freude an authentischem, frischem Sushi zu jedem – einfach, nachhaltig und jeden Tag neu."</p>
        </div>
      </section>

      <style jsx>{`
        .about-page {
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

        .about-hero {
          padding: 60px 0;
          text-align: center;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .about-card {
          padding: 3rem 2rem;
          text-align: center;
          border-radius: 24px;
        }

        .icon {
          font-size: 3rem;
          color: var(--primary);
          margin-bottom: 1.5rem;
        }

        .about-card h2 {
          margin-bottom: 1rem;
        }

        .mission-statement {
          text-align: center;
          padding: 4rem 2rem;
          border-radius: 24px;
          margin-bottom: 60px;
        }

        .mission-statement h2 {
          color: var(--primary);
          margin-bottom: 1.5rem;
        }

        .mission-statement p {
          font-size: 1.5rem;
          font-style: italic;
          color: var(--text-muted);
          max-width: 800px;
          margin: 0 auto;
        }
      `}</style>
    </div>
  );
}
