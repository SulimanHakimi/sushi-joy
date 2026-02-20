'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaMapMarkerAlt } from 'react-icons/fa';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'nav-scrolled' : ''}`}>
        <div className="container nav-flex">
          <div className="logo">
            <Link href="/"><span className="logo-accent">SUSHI</span> JOY</Link>
          </div>

          <ul className="nav-links desktop-only">
            <li><Link href="/">Startseite</Link></li>
            <li><Link href="/about">Über uns</Link></li>
            <li><Link href="/products">Unser Sushi</Link></li>
            <li><Link href="/partnership">Partner werden</Link></li>
            <li><Link href="/contact">Kontakt</Link></li>
          </ul>

          <div className="nav-actions desktop-only">
            <Link href="/locations" className="btn btn-primary nav-cta">
              <FaMapMarkerAlt style={{ marginRight: '8px', verticalAlign: 'middle' }} /> Hier finden
            </Link>
          </div>

          <button className="hamburger-btn mobile-only" onClick={toggleMenu} aria-label="Toggle Menu">
            {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`mobile-menu-overlay ${menuOpen ? 'open' : ''}`}>
          <ul className="mobile-nav-links">
            <li><Link href="/" onClick={toggleMenu}>Startseite</Link></li>
            <li><Link href="/about" onClick={toggleMenu}>Über uns</Link></li>
            <li><Link href="/products" onClick={toggleMenu}>Unser Sushi</Link></li>
            <li><Link href="/partnership">Partner werden</Link></li>


            <li><Link href="/contact" onClick={toggleMenu}>Kontakt</Link></li>
            <li style={{ marginTop: '20px' }}>
              <Link href="/locations" className="btn btn-primary" onClick={toggleMenu}>
                <FaMapMarkerAlt style={{ marginRight: '8px' }} /> Hier finden
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 1.5rem 0;
          transition: var(--transition);
        }

        .nav-scrolled {
          background: rgba(10, 10, 10, 0.8);
          backdrop-filter: blur(10px);
          padding: 1rem 0;
          border-bottom: 1px solid var(--glass-border);
        }

        .nav-flex {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-family: 'Playfair Display', serif;
          font-size: 1.8rem;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .logo-accent {
          color: var(--primary);
        }

        .nav-links.desktop-only {
          display: flex;
          gap: 2.5rem;
        }

        .nav-actions.desktop-only {
          display: block;
        }

        .mobile-only {
          display: none !important;
        }

        .hamburger-btn {
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          z-index: 3000;
          padding: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition);
        }

        .hamburger-btn:hover {
          color: var(--primary);
        }

        .mobile-menu-overlay {
          position: fixed;
          top: 0;
          right: -100%;
          width: 100%;
          height: 100vh;
          background: rgba(5, 5, 5, 0.98);
          backdrop-filter: blur(20px);
          z-index: 1500;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
        }

        .mobile-menu-overlay.open {
          right: 0;
        }

        .mobile-nav-links {
          list-style: none;
          text-align: center;
        }

        .mobile-nav-links li {
          margin-bottom: 2rem;
        }

        .mobile-nav-links :global(a) {
          font-size: 1.5rem; /* Better size for mobile */
          font-weight: 600;
          color: white;
          font-family: 'Playfair Display', serif;
          transition: var(--transition);
          text-decoration: none;
        }

        .mobile-nav-links :global(a:hover) {
          color: var(--primary);
        }

        .nav-links :global(a) {
          font-size: 0.9rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--text-muted);
          text-decoration: none;
        }

        .nav-links :global(a:hover) {
          color: var(--primary);
        }

        @media (max-width: 1024px) {
          .desktop-only { display: none !important; }
          .mobile-only { display: flex !important; }
        }
      `}</style>
    </>
  );
}
