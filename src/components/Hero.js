'use client';

import React from 'react';
import Link from 'next/link';
import { FaMapMarkerAlt, FaUtensils, FaChevronDown, FaStar } from 'react-icons/fa';

export default function Hero() {
  return (
    <>
      <section id="hero" className="hero">
        <div className="hero-bg" />
        <div className="hero-overlay" />

        {/* Left content */}
        <div className="hero-content">
          <h1 className="hero-title fade-in">
            Erlebe die
            <span className="highlight">
              Freude an<br />Frische
            </span>
          </h1>

          <p className="hero-subtitle fade-in">
            Premium handgemachtes Sushi, täglich frisch für deinen
            Supermarkt zubereitet. Authentischer Geschmack,
            kompromisslose Qualität.
          </p>

          <div className="hero-btns fade-in">
            <Link href="/products" className="btn-hero-primary">
              <FaUtensils />
              <span>Menü entdecken</span>
            </Link>
            <Link href="/locations" className="btn-hero-secondary">
              <FaMapMarkerAlt />
              <span>Filiale finden</span>
            </Link>
          </div>

          <div className="hero-stats fade-in">
            <div className="stat">
              <span className="stat-number">6</span>
              <span className="stat-label">Standorte</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">Sushi-Variationen</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-number">100%</span>
              <span className="stat-label">Täglich Frisch</span>
            </div>
          </div>
        </div>

        {/* Floating card — desktop only */}
        <div className="hero-card fade-in">
          <div className="hero-card-img-wrap">
            <img
              src="./images/sushi24.jpeg"
              alt="Premium Sushi"
            />
          </div>
          <div className="hero-card-body">
            <span className="card-tag">Bestseller</span>
            <p className="card-name">Salmon Maki Set</p>
            <div className="card-stars">
              {[...Array(5)].map((_, i) => <FaStar key={i} />)}
              <span>4.9</span>
            </div>
          </div>
          <div className="card-glow" />
        </div>

        {/* Scroll indicator */}
        <a href="#" className="scroll-down">
          <FaChevronDown />
        </a>
      </section>

      <style jsx>{`
        /* ─────── HERO SHELL ─────── */
        .hero {
          min-height: 100vh;
          position: relative;
          display: flex;
          align-items: center;
          overflow: hidden;
          padding: 0 clamp(1.5rem, 8vw, 10rem);
          gap: 3rem;
        }

        .hero-bg {
          position: absolute;
          inset: 0;
          background: url('https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=2000') center/cover no-repeat;
          transform: scale(1.05);
          transition: transform 10s ease;
        }
        .hero:hover .hero-bg { transform: scale(1.0); }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(105deg, rgba(4,4,4,0.97) 0%, rgba(4,4,4,0.88) 38%, rgba(4,4,4,0.45) 65%, transparent 100%),
            linear-gradient(to top, rgba(4,4,4,0.85) 0%, transparent 55%);
        }

        /* ─────── CONTENT BLOCK ─────── */
        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 620px;
          flex-shrink: 0;
          padding-top: 140px;
          padding-bottom: 80px;
        }

        /* Badge */
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 87, 34, 0.1);
          border: 1px solid rgba(255, 87, 34, 0.35);
          color: var(--primary);
          padding: 0.5rem 1.2rem;
          border-radius: 50px;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.6px;
          text-transform: uppercase;
          margin-bottom: 1.8rem;
          animation: fadeInUp 0.6s ease 0.1s both;
        }
        .badge-icon { font-size: 0.75rem; }

        /* Title */
        .hero-title {
          font-family: var(--font-playfair), serif;
          font-size: clamp(2.6rem, 5.5vw, 5rem);
          line-height: 1.06;
          font-weight: 900;
          color: white;
          margin-bottom: 1rem;
          animation: fadeInUp 0.6s ease 0.2s both;
        }

        .highlight {
          color: var(--primary);
          display: block;
          position: relative;
        }

        /* Subtitle */
        .hero-subtitle {
          font-size: 1.05rem;
          color: rgba(255,255,255,0.65);
          line-height: 1.75;
          margin-bottom: 2.5rem;
          font-weight: 300;
          max-width: 480px;
          animation: fadeInUp 0.6s ease 0.35s both;
        }

        /* ─────── BUTTONS ─────── */
        .hero-btns {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 3.5rem;
          animation: fadeInUp 0.6s ease 0.5s both;
        }

        .btn-hero-primary,
        .btn-hero-secondary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 0.95rem 2.2rem;
          border-radius: 50px;
          font-weight: 700;
          font-size: 0.92rem;
          letter-spacing: 0.3px;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.34,1.56,0.64,1);
          white-space: nowrap;
        }

        .btn-hero-primary {
          background: linear-gradient(135deg, var(--primary) 0%, #e84c10 100%);
          color: white;
          box-shadow: 0 8px 28px rgba(255, 87, 34, 0.4), inset 0 1px 0 rgba(255,255,255,0.15);
        }
        .btn-hero-primary:hover {
          transform: translateY(-4px) scale(1.02);
          box-shadow: 0 16px 36px rgba(255, 87, 34, 0.55);
        }
        .btn-hero-primary:active { transform: translateY(-1px); }

        .btn-hero-secondary {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.18);
          backdrop-filter: blur(12px);
          color: rgba(255,255,255,0.9);
        }
        .btn-hero-secondary:hover {
          background: rgba(255,255,255,0.12);
          border-color: rgba(255,255,255,0.35);
          transform: translateY(-4px);
        }

        /* ─────── STATS ─────── */
        .hero-stats {
          display: flex;
          align-items: center;
          gap: 2rem;
          animation: fadeInUp 0.6s ease 0.65s both;
        }

        .stat { display: flex; flex-direction: column; gap: 3px; }

        .stat-number {
          font-size: 1.9rem;
          font-weight: 800;
          color: white;
          font-family: var(--font-playfair), serif;
          line-height: 1;
        }

        .stat-label {
          font-size: 0.68rem;
          color: rgba(255,255,255,0.45);
          text-transform: uppercase;
          letter-spacing: 1.2px;
        }

        .stat-divider {
          width: 1px;
          height: 38px;
          background: rgba(255,255,255,0.12);
        }

        /* ─────── FLOATING CARD ─────── */
        .hero-card {
          position: relative;
          z-index: 2;
          margin-left: auto;
          width: 260px;
          flex-shrink: 0;
          background: rgba(22,22,22,0.75);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 28px;
          overflow: hidden;
          animation: fadeInRight 0.8s ease 0.7s both;
          box-shadow: 0 24px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04);
          display: none; /* hidden on mobile, shown on desktop */
        }

        .hero-card-img-wrap {
          width: 100%;
          overflow: hidden;
        }
        .hero-card-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          rotate:45deg;
          transition: transform 6s ease;
        }
        .hero-card:hover .hero-card-img-wrap img { transform: scale(1.06); }

        .hero-card-body {
          padding: 1.2rem 1.4rem;
        }

        .card-tag {
          display: inline-block;
          font-size: 0.68rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--primary);
          background: rgba(255,87,34,0.12);
          border: 1px solid rgba(255,87,34,0.25);
          padding: 0.2rem 0.7rem;
          border-radius: 50px;
          margin-bottom: 0.6rem;
        }

        .card-name {
          font-size: 1.1rem;
          font-weight: 700;
          color: white;
          font-family: var(--font-playfair), serif;
          margin-bottom: 0.5rem;
        }

        .card-stars {
          display: flex;
          align-items: center;
          gap: 3px;
          color: #FFB800;
          font-size: 0.75rem;
        }
        .card-stars span {
          color: rgba(255,255,255,0.5);
          font-size: 0.8rem;
          margin-left: 4px;
        }

        .card-glow {
          position: absolute;
          bottom: -40px;
          left: 50%;
          transform: translateX(-50%);
          width: 140px;
          height: 80px;
          background: radial-gradient(circle, rgba(255,87,34,0.25) 0%, transparent 70%);
          filter: blur(12px);
          pointer-events: none;
        }

        /* ─────── SCROLL INDICATOR ─────── */
        .scroll-down {
          position: absolute;
          bottom: 2.5rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 3;
          color: rgba(255,255,255,0.35);
          font-size: 1rem;
          animation: bounce 2s ease-in-out infinite;
          text-decoration: none;
          transition: color 0.3s;
        }
        .scroll-down:hover { color: var(--primary); }

        /* ─────── ANIMATIONS ─────── */
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(40px); }
          to   { opacity: 1; transform: translateX(0); }
        }

        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50%       { transform: translateX(-50%) translateY(8px); }
        }

        /* ─────── RESPONSIVE ─────── */
        @media (min-width: 960px) {
          .hero-card { display: block; }
        }

        @media (max-width: 768px) {
          .hero { padding: 0 1.5rem; }
          .hero-content { padding-top: 120px; padding-bottom: 80px; }
          .hero-title { font-size: 2.7rem; }
          .hero-btns { flex-direction: column; }
          .btn-hero-primary, .btn-hero-secondary { justify-content: center; }
          .hero-stats { gap: 1.2rem; flex-wrap: wrap; }
          .stat-number { font-size: 1.5rem; }
        }

        @media (max-width: 480px) {
          .hero-title { font-size: 2.1rem; }
          .hero-subtitle { font-size: 0.97rem; }
          .hero-badge { font-size: 0.72rem; }
        }
      `}</style>
    </>
  );
}
