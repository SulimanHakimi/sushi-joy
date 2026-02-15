'use client';

import React from 'react';
import { FaFish, FaStore } from 'react-icons/fa';
import { GiSushis } from 'react-icons/gi';

export default function ValueProps() {
  return (
    <>
      <section className="value-props container">
        <div className="prop-card glass">
          <div className="prop-icon"><GiSushis color="#FF5722" /></div>
          <h3>Täglich Frisch</h3>
          <p>Jeden Morgen handgerollt von Meisterköchen.</p>
        </div>
        <div className="prop-card glass">
          <div className="prop-icon"><FaFish color="#FF5722" /></div>
          <h3>Nachhaltiger Fang</h3>
          <p>Wir verwenden nur nachhaltigen Fisch höchster Qualität.</p>
        </div>
        <div className="prop-card glass">
          <div className="prop-icon"><FaStore color="#FF5722" /></div>
          <h3>Immer in deiner Nähe</h3>
          <p>Finde uns in deinem Lieblingssupermarkt.</p>
        </div>
      </section>
      <style jsx>{`
        .value-props {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin-top: -100px;
          position: relative;
          z-index: 10;
        }

        .prop-card {
          padding: 3rem 2rem;
          text-align: center;
          border-radius: 20px;
          transition: var(--transition);
        }

        .prop-card:hover {
          transform: translateY(-10px);
          background: rgba(255, 87, 34, 0.05);
          border-color: var(--primary);
        }

        .prop-icon {
          font-size: 3rem;
          margin-bottom: 1.5rem;
        }

        @media (max-width: 768px) {
          .value-props { grid-template-columns: 1fr; margin-top: 0; padding-top: 50px; }
        }
      `}</style>
    </>
  );
}
