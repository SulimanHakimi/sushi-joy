'use client';

import React from 'react';
import Link from 'next/link';
import { FaInstagram, FaFacebook, FaTiktok, FaPhone, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <>
      <footer id="kontakt" className="footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <div className="logo"><span className="logo-accent">SUSHI</span> JOY</div>
            <p>Authentischer japanischer Genuss in deinem Supermarkt – seit 2012.</p>
            <div className="social-icons" style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
              <a href="https://www.instagram.com/Sushijoy.de" target='_blank' className="social-link" aria-label="Instagram"><FaInstagram size={20} /></a>
              <a href="https://www.facebook.com/share/1C5fACBxh6/" target='_blank' className="social-link" aria-label="Facebook"><FaFacebook size={20} /></a>
              <a href="https://tiktok.com/@Sushijoy.de" target='_blank' className="social-link" aria-label="TikTok"><FaTiktok size={20} /></a>
            </div>
          </div>


          <div className="footer-blog">
            <h4>Aus unserem Blog</h4>
            <ul>
              <li><Link href="/blog/sushi-recipes">Sushi selber machen?</Link></li>
              <li><Link href="/blog/top-sushi-germany">Bestes Sushi DE</Link></li>
              <li><Link href="/blog/sushi-history">Die Sushi Story</Link></li>
              <li><Link href="/blog/sushi-types">Maki vs. Nigiri</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">Über Uns</Link></li>
              <li><Link href="/products">Produkte</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/locations">Standorte</Link></li>
              <li><Link href="/partnership">Partner werden</Link></li>
              <li><Link href="/contact">Kontakt</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Kontakt</h4>
            <p className="contact-item"><FaEnvelope className="icon" /> info@sushijoy.com</p>
            <p className="contact-item"><FaPhone className="icon" /> +49 (555) 123-4567</p>
          </div>
          <div className="footer-locations">
            <h4>Unsere Standorte</h4>
            <ul>
              <li><a href="https://www.google.com/maps/search/?api=1&query=Warendorferstr. 16, 59302 Oelde, Germany" target="_blank" rel="noopener noreferrer">Sushi Joy @ Oelde</a></li>
              <li><a href="https://www.google.com/maps/search/?api=1&query=Wemberweg 4, 59597 Erwitte, Germany" target="_blank" rel="noopener noreferrer">Sushi Joy @ Erwitte</a></li>
              <li><a href="https://www.google.com/maps/search/?api=1&query=Alisostraße 2, 33106 Paderborn, Germany" target="_blank" rel="noopener noreferrer">Sushi Joy @ Paderborn</a></li>
              <li><a href="https://www.google.com/maps/search/?api=1&query=Gebrüder-kerkmann-Platz 4, 59227 Ahlen, Germany" target="_blank" rel="noopener noreferrer">Sushi Joy @ Ahlen</a></li>
              <li><a href="https://www.google.com/maps/search/?api=1&query=Osttor 26, 48234 Sendenhorst, Germany" target="_blank" rel="noopener noreferrer">Sushi Joy @ Sendenhorst</a></li>
              <li><a href="https://www.google.com/maps/search/?api=1&query=Von Galen-Straße 21, 48336 Sassenberg, Germany" target="_blank" rel="noopener noreferrer">Sushi Joy @ Sassenberg</a></li>
            </ul>
          </div>

        </div>
        <div className="footer-bottom">
          <p>
            &copy; 2026 Sushi Joy. Alle Rechte vorbehalten. | <Link href="/imprint">Impressum</Link> | <Link href="/privacy-policy">Datenschutz</Link> |
            <Link href="/terms-of-service">AGB</Link> |
            <Link href="/cookie-policy">Cookies</Link>
          </p>
        </div>
      </footer>

      <style jsx>{`
        .footer {
          background: #050505;
          padding: 80px 0 40px;
          border-top: 1px solid var(--glass-border);
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 0.8fr 1fr;
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .footer-brand p {
          color: var(--text-muted);
          margin-top: 1.5rem;
          max-width: 300px;
          line-height: 1.6;
        }

        .footer h4 {
          margin-bottom: 1.5rem;
          font-size: 1.1rem;
          color: white;
        }

        .footer-links ul li,
        .footer-blog ul li,
        .footer-locations ul li {
          margin-bottom: 0.8rem;
        }

        .footer-links :global(a),
        .footer-blog :global(a),
        .footer-locations :global(a) {
          color: var(--text-muted);
          text-decoration: none;
          transition: var(--transition);
        }

        .footer-links :global(a:hover),
        .footer-blog :global(a:hover),
        .footer-locations :global(a:hover) {
          color: var(--primary);
          padding-left: 5px;
        }

        .contact-item {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 1rem;
            color: var(--text-muted);
        }

        .contact-item :global(.icon) {
            color: var(--primary);
        }

        .footer-bottom {
          text-align: center;
          padding-top: 40px;
          border-top: 1px solid var(--glass-border);
          color: var(--text-muted);
          font-size: 0.9rem;
        }
        
        .footer-bottom :global(a) {
            color: var(--text-muted);
            margin: 0 5px;
            text-decoration: none;
        }

        .social-link {
          color: var(--text-muted);
          transition: var(--transition);
        }

        .social-link:hover {
          color: var(--primary);
          transform: translateY(-3px);
        }

        @media (max-width: 1024px) {
          .footer-grid { grid-template-columns: 1fr 1fr; gap: 2rem; }
        }

        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr; text-align: center; }
          .footer-brand p { margin-inline: auto; }
          .social-icons { justify-content: center; }
          .contact-item { justify-content: center; }
        }
      `}</style>
    </>
  );
}
