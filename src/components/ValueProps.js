'use client';

import React from 'react';
import { FaFish, FaStore } from 'react-icons/fa';
import { GiSushis } from 'react-icons/gi';

const props = [
  {
    icon: <GiSushis size={32} />,
    title: 'Täglich Frisch',
    desc: 'Jeden Morgen handgerollt von unseren Sushi-Meistern.',
  },
  {
    icon: <FaFish size={28} />,
    title: 'Nachhaltiger Fang',
    desc: 'Ausschließlich MSC-zertifizierter Fisch höchster Qualität.',
  },
  {
    icon: <FaStore size={28} />,
    title: 'Immer in deiner Nähe',
    desc: 'Finde uns in 6 Standorten in deinem Lieblingssupermarkt.',
  },
];

export default function ValueProps() {
  return (
    <>
      <section className="value-props-section">
        <div className="container value-props-grid">
          {props.map((p, i) => (
            <div key={i} className="vp-card">
              <div className="vp-icon-wrap">
                {p.icon}
              </div>
              <div className="vp-text">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style jsx>{`
        .value-props-section {
          padding: 0;
          position: relative;
          z-index: 10;
          margin-top: -72px;
        }

        .value-props-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        .vp-card {
          display: flex;
          align-items: flex-start;
          gap: 1.2rem;
          padding: 2rem 1.8rem;
          background: rgba(18, 18, 18, 0.92);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          backdrop-filter: blur(10px);
          transition: all 0.35s ease;
        }

        .vp-card:hover {
          border-color: rgba(255, 87, 34, 0.4);
          background: rgba(22, 22, 22, 0.96);
          transform: translateY(-6px);
          box-shadow: 0 12px 30px rgba(0,0,0,0.3);
        }

        .vp-icon-wrap {
          flex-shrink: 0;
          width: 54px;
          height: 54px;
          background: rgba(255, 87, 34, 0.1);
          border: 1px solid rgba(255, 87, 34, 0.25);
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary);
          transition: background 0.3s;
        }

        .vp-card:hover .vp-icon-wrap {
          background: rgba(255, 87, 34, 0.18);
        }

        .vp-text h3 {
          font-size: 1rem;
          font-weight: 700;
          color: white;
          margin-bottom: 0.35rem;
          font-family: var(--font-outfit), sans-serif;
        }

        .vp-text p {
          font-size: 0.88rem;
          color: rgba(255, 255, 255, 0.55);
          line-height: 1.5;
        }

        @media (max-width: 900px) {
          .value-props-grid { grid-template-columns: 1fr; }
          .value-props-section { margin-top: 0; padding-top: 60px; }
        }
      `}</style>
    </>
  );
}
