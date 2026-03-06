'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes, FaMapMarkerAlt } from 'react-icons/fa';

const navLinks = [
  { href: '/', label: 'Startseite' },
  { href: '/about', label: 'Über uns' },
  { href: '/products', label: 'Unser Sushi' },
  { href: '/locations', label: 'Standorte' },
  { href: '/contact', label: 'Kontakt' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'nav-scrolled' : ''}`}>
        <div className="container nav-flex">
          {/* Logo */}
          <div className="logo">
            <a href="/"><span className="logo-accent">SUSHI</span> JOY</a>
          </div>

          {/* Desktop Nav Links */}
          <ul className="nav-links desktop-only">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className={pathname === href ? 'nav-active' : ''}>{label}</Link>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="desktop-only">
              <Link href="/locations" className="nav-cta" style={{display:"flex", gap:"9px", justifyContent:"center", alignItems:"center", padding:"0.5rem 1.5rem 0.5rem 1.2rem", backgroundColor:"#ff5722", borderRadius:"50px"}}>
                <span className="cta-pulse-ring" />
                <FaMapMarkerAlt className="cta-icon" />
                <span>Hier finden</span>
              </Link>
          </div>

          {/* Hamburger */}
          <button className="hamburger-btn mobile-only" onClick={toggleMenu} aria-label="Toggle Menu">
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-overlay ${menuOpen ? 'open' : ''}`}>
          <button className="close-btn" onClick={toggleMenu} aria-label="Close Menu"><FaTimes size={28} /></button>
          <ul className="mobile-nav-links">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className={pathname === href ? 'mobile-active' : ''} onClick={toggleMenu}>{label}</Link>
              </li>
            ))}
            <li className="mobile-cta-wrap">
              <Link href="/locations" className="nav-cta" onClick={toggleMenu}>
                <FaMapMarkerAlt />
                <span>Hier finden</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <style jsx>{`
        /* ── MOBILE FIRST ── */
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 1rem 0;
          transition: all 0.4s ease;
          background: transparent;
        }

        .nav-scrolled {
          background: rgba(10, 10, 10, 0.9);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          padding: 0.7rem 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
        }

        .nav-flex {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 1.25rem;
        }

        /* Logo */
        .logo a {
          font-family: var(--font-playfair), serif;
          font-size: 1.4rem;
          font-weight: 800;
          letter-spacing: 3px;
          color: white;
          text-decoration: none;
          transition: opacity 0.3s;
        }
        .logo a:hover { opacity: 0.85; }
        .logo-accent { color: var(--primary); }

        /* Nav Links */
        .nav-links {
          display: flex;
          gap: 2.5rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .nav-links :global(a) {
          font-size: 0.78rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          position: relative;
          padding-bottom: 4px;
          transition: color 0.3s ease;
        }

        .nav-links :global(a::after) {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1px;
          background: var(--primary);
          transition: width 0.3s ease;
        }

        .nav-links :global(a:hover) { color: white; }
        .nav-links :global(a:hover::after) { width: 100%; }
        .nav-links :global(.nav-active) { color: white; }
        .nav-links :global(.nav-active::after) { width: 100%; }

        /* CTA Button */
        .nav-cta {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 0.65rem 1.5rem 0.65rem 1.2rem;
          background: linear-gradient(135deg, var(--primary) 0%, #e84c10 100%);
          color: white;
          text-decoration: none;
          border-radius: 50px;
          font-size: 0.83rem;
          font-weight: 700;
          letter-spacing: 0.5px;
          transition: all 0.35s cubic-bezier(0.34,1.56,0.64,1);
          box-shadow: 0 4px 18px rgba(255, 87, 34, 0.38), inset 0 1px 0 rgba(255,255,255,0.15);
          white-space: nowrap;
          position: relative;
          overflow: hidden;
        }

        .nav-cta:hover {
          transform: translateY(-3px) scale(1.04);
          box-shadow: 0 10px 28px rgba(255, 87, 34, 0.55);
        }
        .nav-cta:active { transform: translateY(-1px) scale(1.01); }

        .cta-icon { font-size: 0.9rem; flex-shrink: 0; }

        /* Pulse ring on pin icon */
        .cta-pulse-ring {
          position: absolute;
          right: 15%;
          top: 50%;
          transform: translateY(-50%);
          width: 28px;
          height: 28px;
          border-radius: 50%;
          border: 2px solid rgba(255,255,255,0.3);
          animation: ctaPulse 2.2s ease-out infinite;
          pointer-events: none;
        }

        @keyframes ctaPulse {
          0%   { transform: translateY(-50%) scale(0.6); opacity: 0.8; }
          100% { transform: translateY(-50%) scale(1.6); opacity: 0; }
        }

        /* Hamburger */
        .hamburger-btn {
          background: none;
          border: 1px solid rgba(255,255,255,0.15);
          color: white;
          width: 44px;
          height: 44px;
          border-radius: 10px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s;
          z-index: 3000;
          flex-shrink: 0;
        }
        .hamburger-btn:hover {
          background: rgba(255,255,255,0.1);
          border-color: var(--primary);
          color: var(--primary);
        }

        /* Mobile Overlay */
        .mobile-overlay {
          position: fixed;
          inset: 0;
          background: rgba(8, 8, 8, 0.97);
          backdrop-filter: blur(24px);
          z-index: 2000;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          transform: translateX(100%);
          transition: transform 0.5s cubic-bezier(0.77, 0, 0.175, 1);
          padding: 2rem 1.5rem;
        }
        .mobile-overlay.open { transform: translateX(0); }

        .close-btn {
          position: absolute;
          top: 1.25rem;
          right: 1.25rem;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.1);
          color: white;
          width: 48px;
          height: 48px;
          border-radius: 10px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s;
        }
        .close-btn:hover { background: rgba(255,87,34,0.2); color: var(--primary); }

        .mobile-nav-links {
          list-style: none;
          text-align: center;
          padding: 0;
          margin: 0;
          width: 100%;
        }

        .mobile-nav-links li { margin-bottom: 2rem; }

        .mobile-nav-links :global(a) {
          font-size: clamp(1.5rem, 6vw, 2rem);
          font-weight: 700;
          color: rgba(255,255,255,0.75);
          font-family: var(--font-playfair), serif;
          text-decoration: none;
          transition: color 0.3s;
          letter-spacing: 1px;
        }
        .mobile-nav-links :global(a:hover),
        .mobile-nav-links :global(.mobile-active) { color: var(--primary); }

        .mobile-cta-wrap {\
          display:flex;
          margin-top: 1.5rem !important;
        }

        .mobile-cta-wrap .nav-cta {
          font-size: 1rem;
          padding: 0.85rem 2.5rem;
        }

        /* Show / Hide */
        .desktop-only { display: flex; }
        .mobile-only { display: none !important; }

        /* ── DESKTOP nav up to 1024 shows hamburger ── */
        @media (max-width: 1024px) {
          .desktop-only { display: none !important; }
          .mobile-only { display: flex !important; }
        }

        /* ── DESKTOP 1024px+ ── */
        @media (min-width: 1024px) {
          .nav-flex { padding: 0 2rem; }
          .logo a { font-size: 1.6rem; }
        }
      `}</style>
    </>
  );
}
