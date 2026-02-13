'use client';

import React from 'react';
import Link from 'next/link';
import { FaHome, FaSearch } from 'react-icons/fa';

export default function NotFound() {
    return (
        <div className="not-found-page">
            <div className="container content fade-in">
                <h1 className="error-code">404</h1>
                <h2 className="serif">Opps! Sushi nicht gefunden.</h2>
                <p>Die Seite, die Sie suchen, scheint weggerollt zu sein. Vielleicht finden Sie sie auf unserer Startseite wieder?</p>

                <div className="actions">
                    <Link href="/" className="btn btn-primary">
                        <FaHome style={{ marginRight: '8px' }} /> Zurück zur Startseite
                    </Link>
                </div>
            </div>

            <style jsx>{`
        .not-found-page {
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          background: var(--bg-dark);
          position: relative;
          overflow: hidden;
        }

        .not-found-page::before {
          content: '🍣';
          position: absolute;
          font-size: 20rem;
          opacity: 0.03;
          top: 10%;
          left: -5%;
          transform: rotate(-20deg);
        }

        .not-found-page::after {
          content: '🍱';
          position: absolute;
          font-size: 15rem;
          opacity: 0.03;
          bottom: 10%;
          right: -5%;
          transform: rotate(15deg);
        }

        .error-code {
          font-size: 10rem;
          font-weight: 800;
          color: var(--primary);
          line-height: 1;
          margin-bottom: 1rem;
          font-family: 'Outfit', sans-serif;
        }

        h2 {
          font-size: 3rem;
          margin-bottom: 1.5rem;
          color: white;
        }

        p {
          color: var(--text-muted);
          font-size: 1.25rem;
          max-width: 600px;
          margin: 0 auto 2.5rem;
        }

        .actions {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
        }
      `}</style>
        </div>
    );
}
