'use client';

import React from 'react';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

export default function LegalLayout({ title, children }) {
    return (
        <div className="legal-page">
            <nav className="legal-nav glass">
                <div className="container">
                    <Link href="/" className="back-link">
                        <FaArrowLeft style={{ marginRight: '8px' }} /> Zurück zur Startseite
                    </Link>
                    <div className="logo"><span className="logo-accent">SUSHI</span> JOY</div>
                </div>
            </nav>

            <main className="container legal-content fade-in">
                <h1 className="section-title">{title}</h1>
                <div className="content-box glass">
                    {children}
                </div>
            </main>

            <style jsx>{`
        .legal-page {
          min-height: 100vh;
          padding-top: 100px;
          padding-bottom: 50px;
        }

        .legal-nav {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 1rem 0;
        }

        .legal-nav .container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .back-link {
          color: var(--text-muted);
          font-weight: 600;
          display: flex;
          align-items: center;
          transition: var(--transition);
        }

        .back-link:hover {
          color: var(--primary);
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

        .legal-content {
          max-width: 800px;
          margin: 0 auto;
        }

        .content-box {
          padding: 3rem;
          border-radius: 24px;
          line-height: 1.8;
          color: var(--text-muted);
        }

        .content-box :global(h2) {
          color: white;
          margin-top: 2rem;
          margin-bottom: 1rem;
          font-family: 'Playfair Display', serif;
        }

        .content-box :global(p) {
          margin-bottom: 1.5rem;
        }

        .content-box :global(ul) {
          margin-bottom: 1.5rem;
          padding-left: 1.5rem;
          list-style: disc;
        }

        .content-box :global(li) {
          margin-bottom: 0.5rem;
        }
      `}</style>
        </div>
    );
}
