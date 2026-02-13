'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaFish, FaShoppingCart, FaStore, FaInstagram, FaFacebook, FaTwitter, FaArrowRight, FaMapMarkerAlt, FaPaperPlane, FaBars, FaTimes } from 'react-icons/fa';
import { GiSushis } from 'react-icons/gi';

const sushiData = [
  {
    id: 1,
    name: 'Klassisches Lachs Nigiri',
    category: 'Nigiri',
    price: '$8.99',
    image: 'https://images.unsplash.com/photo-1583623025817-d180a2221d0a?q=80&w=800',
    tags: ['Frisch', 'Omega-3']
  },
  {
    id: 2,
    name: 'Spicy Tuna Maki',
    category: 'Maki',
    price: '$12.49',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=800',
    tags: ['Scharf', 'Chef Empfehlung']
  },
  {
    id: 3,
    name: 'Dragon Roll',
    category: 'Spezialität',
    price: '$15.99',
    image: 'https://images.unsplash.com/photo-1617196034183-421b4917c92d?q=80&w=800',
    tags: ['Premium', 'Bestseller']
  },
  {
    id: 4,
    name: 'California Box',
    category: 'Sets',
    price: '$18.00',
    image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=800',
    tags: ['Vorteil', 'Beliebt']
  },
  {
    id: 5,
    name: 'Rainbow Roll',
    category: 'Spezialität',
    price: '$16.50',
    image: 'https://images.unsplash.com/photo-1593560708920-61ddf1847551?q=80&w=800',
    tags: ['Bunt', 'Frisch']
  },
  {
    id: 6,
    name: 'Tempura Garnelen Maki',
    category: 'Maki',
    price: '$11.99',
    image: 'https://images.unsplash.com/photo-1562158014-972171031ef5?q=80&w=800',
    tags: ['Knusprig', 'Gekocht']
  }
];

const blogData = [
  {
    id: 1,
    title: 'Die Kunst, frisches Supermarkt-Sushi auszuwählen',
    excerpt: 'Nicht jedes Supermarkt-Sushi ist gleich. Erfahren Sie, worauf Sie achten müssen, um den frischesten Fang zu erhalten...',
    date: '10. Feb 2026',
    image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=800'
  },
  {
    id: 2,
    title: 'Warum Wasabi und Ingwer nicht nur Deko sind',
    excerpt: 'Die traditionellen Begleiter von Sushi erfüllen einen wichtigen gesundheitlichen Zweck. Entdecken Sie die Wissenschaft dahinter...',
    date: '05. Feb 2026',
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c170db06?q=80&w=800'
  },
  {
    id: 3,
    title: 'Die 5 besten Sake-Paarungen für Ihre Sushi-Platte',
    excerpt: 'Verbessern Sie Ihr Esserlebnis zu Hause mit dem perfekten Sake. Von Junmai bis Daiginjo führen wir Sie durch die besten Paarungen...',
    date: '28. Jan 2026',
    image: 'https://images.unsplash.com/photo-1512839308926-e41f4eb27f50?q=80&w=800'
  }
];

const locations = [
  { id: 1, name: 'Sushi Joy @ Oelde', address: 'Warendorferstr. 16, 59302 Oelde, Germany', lat: 51.8262, lng: 8.1364 },
  { id: 2, name: 'Sushi Joy @ Erwitte', address: 'Wemberweg 4, 59597 Erwitte, Germany', lat: 51.6119, lng: 8.3325 },
  { id: 3, name: 'Sushi Joy @ Paderborn', address: 'Alisostraße 2, 33106 Paderborn, Germany', lat: 51.7348, lng: 8.7067 },
  { id: 4, name: 'Sushi Joy @ Ahlen', address: 'Gebrüder-kerkmann-Platz 4, 59227 Ahlen, Germany', lat: 51.7618, lng: 7.8925 },
  { id: 5, name: 'Sushi Joy @ Sendenhorst', address: 'Osttor 26, 48234 Sendenhorst, Germany', lat: 51.8447, lng: 7.8285 },
  { id: 6, name: 'Sushi Joy @ Sassenberg', address: 'Von Galen-Straße 21, 48336 Sassenberg, Germany', lat: 51.9897, lng: 8.0416 },
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [activeLocation, setActiveLocation] = useState(locations[0]);
  const [filter, setFilter] = useState('All');
  const [findingLocation, setFindingLocation] = useState(false);
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

  const filteredLocations = filter === 'All'
    ? locations
    : locations.filter(loc => loc.address.includes(filter));

  const handleFindNearMe = () => {
    setFindingLocation(true);
    if (!navigator.geolocation) {
      alert('Geolokalisierung wird nicht unterstützt.');
      setFindingLocation(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        let minDistance = Infinity;
        let nearest = locations[0];

        const calculateDistance = (lat1, lon1, lat2, lon2) => {
          const R = 6371;
          const dLat = (lat2 - lat1) * (Math.PI / 180);
          const dLon = (lon2 - lon1) * (Math.PI / 180);
          const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
          return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        };

        locations.forEach((loc) => {
          const dist = calculateDistance(latitude, longitude, loc.lat, loc.lng);
          if (dist < minDistance) {
            minDistance = dist;
            nearest = loc;
          }
        });

        setActiveLocation(nearest);
        setFilter('All');
        setFindingLocation(false);
        document.getElementById('standorte').scrollIntoView({ behavior: 'smooth' });
      },
      () => {
        setFindingLocation(false);
        alert('Zugriff auf Standort verweigert.');
      }
    );
  };

  return (
    <main className="main-content">
      {/* Navbar */}
      <nav className={`navbar ${scrolled ? 'nav-scrolled' : ''}`}>
        <div className="container nav-flex">
          <div className="logo">
            <Link href="/"><span className="logo-accent">SUSHI</span> JOY</Link>
          </div>

          <ul className="nav-links desktop-only">
            <li><a href="#hero">Startseite</a></li>
            <li><Link href="/about">Über uns</Link></li>
            <li><a href="#produkte">Unser Sushi</a></li>
            <li><a href="#standorte">Standorte</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><Link href="/contact">Kontakt</Link></li>
          </ul>

          <div className="nav-actions desktop-only">
            <button className="btn btn-primary nav-cta" onClick={handleFindNearMe}>
              <FaMapMarkerAlt style={{ marginRight: '8px', verticalAlign: 'middle' }} /> In meiner Nähe
            </button>
          </div>

          <button className="hamburger-btn mobile-only" onClick={toggleMenu} aria-label="Toggle Menu">
            {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`mobile-menu-overlay ${menuOpen ? 'open' : ''}`}>
          <ul className="mobile-nav-links">
            <li><a href="#hero" onClick={toggleMenu}>Startseite</a></li>
            <li><Link href="/about" onClick={toggleMenu}>Über uns</Link></li>
            <li><a href="#produkte" onClick={toggleMenu}>Unser Sushi</a></li>
            <li><a href="#standorte" onClick={toggleMenu}>Standorte</a></li>
            <li><a href="#blog" onClick={toggleMenu}>Blog</a></li>
            <li><Link href="/contact" onClick={toggleMenu}>Kontakt</Link></li>
            <li style={{ marginTop: '20px' }}>
              <button className="btn btn-primary" onClick={() => { handleFindNearMe(); toggleMenu(); }}>
                <FaMapMarkerAlt style={{ marginRight: '8px' }} /> In meiner Nähe
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className="hero-overlay"></div>
        <div className="container hero-content fade-in">
          <h1 className="hero-title">Erleben Sie die <br /><span className="highlight">Freude an Frische</span></h1>
          <p className="hero-subtitle">Premium handgemachtes Sushi, täglich frisch für Ihren Supermarkt zubereitet. Authentischer Geschmack, kompromisslose Qualität.</p>
          <div className="hero-btns">
            <a href="#produkte" className="btn btn-primary">Menü entdecken</a>
            <a href="#standorte" className="btn btn-outline">Filiale finden</a>
          </div>
        </div>
      </section>

      {/* Stats/Value Props */}
      <section className="value-props container">
        <div className="prop-card glass">
          <div className="prop-icon"><GiSushis color="#FF5722" /></div>
          <h3>Täglich Frisch</h3>
          <p>Jeden Morgen von Meisterköchen handgerollt.</p>
        </div>
        <div className="prop-card glass">
          <div className="prop-icon"><FaFish color="#FF5722" /></div>
          <h3>Nachhaltig bezogen</h3>
          <p>Wir verwenden nur nachhaltigen Fisch höchster Qualität.</p>
        </div>
        <div className="prop-card glass">
          <div className="prop-icon"><FaStore color="#FF5722" /></div>
          <h3>Immer in Ihrer Nähe</h3>
          <p>Finden Sie uns in Ihren lokalen Lieblingssupermärkten.</p>
        </div>
      </section>

      {/* Products Section */}
      <section id="produkte" className="products">
        <div className="container">
          <h2 className="section-title">Die Supermarkt-Auswahl</h2>
          <p className="section-subtitle">Eine kuratierte Sammlung unserer Sushi-Bestseller, erhältlich in Frischeverpackung.</p>

          <div className="product-grid">
            {sushiData.map((sushi) => (
              <div key={sushi.id} className="product-card glass">
                <div className="product-img-wrapper">
                  <img src={sushi.image} alt={sushi.name} className="product-img" loading="lazy" />
                  <span className="product-badge">{sushi.category}</span>
                </div>
                <div className="product-info">
                  <h3>{sushi.name}</h3>
                  <div className="product-tags">
                    {sushi.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                  </div>
                  <div className="product-footer">
                    <span className="price">{sushi.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Store Locator Section */}
      <section id="standorte" className="store-locator">
        <div className="container">
          <h2 className="section-title">Besuchen Sie unsere Partner</h2>
          <p className="section-subtitle">Durchsuchen Sie unsere Premium-Supermarkt-Standorte oder finden Sie den nächstgelegenen.</p>

          <div className="branches-grid">
            {locations.map((loc) => (
              <div
                key={loc.id}
                className="location-card glass"
              >
                <div className="card-header">
                  <FaStore className="store-icon" />
                  <div className="card-title-group">
                    <h3>{loc.name}</h3>
                    <p className="card-address">{loc.address}</p>
                  </div>
                </div>

                <div className="card-actions">
                  <button
                    className="btn-card primary"
                    onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc.address)}`, '_blank')}
                  >
                    <FaPaperPlane style={{ marginRight: '8px' }} /> Route planen
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Blog Section */}
      <section id="blog" className="blog-section">
        <div className="container">
          <h2 className="section-title">Sushi Joy Blog</h2>
          <p className="section-subtitle">Einblicke in die Sushi-Kultur, Zubereitung und die Freude an der japanischen Küche.</p>

          <div className="blog-grid">
            {blogData.map((post) => (
              <article key={post.id} className="blog-card glass">
                <div className="blog-img-wrapper">
                  <img src={post.image} alt={post.title} loading="lazy" />
                </div>
                <div className="blog-content">
                  <span className="blog-date">{post.date}</span>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <Link href={`/blog/${post.id}`} className="read-more">
                    Ganzen Artikel lesen <FaArrowRight size={12} style={{ marginLeft: '5px', verticalAlign: 'middle' }} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section container">
        <div className="cta-box glass">
          <h2>Holen Sie sich die Freude heute Abend nach Hause</h2>
          <p>Abonnieren Sie unseren Newsletter für exklusive Rezepte, Sake-Guides und Verfügbarkeits-Updates.</p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Ihre E-Mail-Adresse" className="glass" />
            <button type="submit" className="btn btn-primary">
              <FaPaperPlane style={{ marginRight: '8px', verticalAlign: 'middle' }} /> Abonnieren
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer id="kontakt" className="footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <div className="logo"><span className="logo-accent">SUSHI</span> JOY</div>
            <p>Wir bringen seit 2012 authentische japanische Freude in Ihren Supermarkt.</p>
          </div>
          <div className="footer-links">
            <h4>Schnelllinks</h4>
            <ul>
              <li><a href="#hero">Startseite</a></li>
              <li><Link href="/track-order">Sendungsverfolgung</Link></li>
              <li><Link href="/about">Über uns</Link></li>
              <li><a href="#produkte">Sushi Auswahl</a></li>
              <li><Link href="/contact">Kontakt</Link></li>
            </ul>
          </div>
          <div className="footer-social">
            <h4>Folgen Sie uns</h4>
            <div className="social-icons" style={{ display: 'flex', gap: '1.5rem', marginTop: '1rem' }}>
              <a href="#" className="social-link" aria-label="Instagram"><FaInstagram size={24} /></a>
              <a href="#" className="social-link" aria-label="Facebook"><FaFacebook size={24} /></a>
              <a href="#" className="social-link" aria-label="Twitter"><FaTwitter size={24} /></a>
            </div>
          </div>
          <div className="footer-contact">
            <h4>Kontaktieren Sie uns</h4>
            <p>info@sushijoy.com</p>
            <p>+49 (555) 123-4567</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; 2026 Sushi Joy. Alle Rechte vorbehalten. |
            <Link href="/imprint">Impressum</Link> |
            <Link href="/privacy-policy">Datenschutzerklärung</Link> |
            <Link href="/terms-of-service">AGB</Link> |
            <Link href="/cookie-policy">Cookie-Richtlinie</Link>
          </p>
        </div>
      </footer>

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

        .mobile-nav-links a {
          font-size: 2rem;
          font-weight: 800;
          color: white;
          font-family: 'Playfair Display', serif;
          transition: var(--transition);
        }

        .mobile-nav-links a:hover {
          color: var(--primary);
        }

        .nav-links a {
          font-size: 0.9rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--text-muted);
        }

        .nav-links a:hover {
          color: var(--primary);
        }

        .hero {
          height: 100vh;
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

        .product-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 2.5rem;
        }

        .product-card {
          border-radius: 24px;
          overflow: hidden;
          transition: var(--transition);
        }

        .product-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }

        .product-img-wrapper {
          height: 250px;
          position: relative;
          overflow: hidden;
        }

        .product-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .product-card:hover .product-img {
          transform: scale(1.1);
        }

        .product-badge {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: var(--primary);
          padding: 0.3rem 1rem;
          border-radius: 50px;
          font-size: 0.8rem;
          font-weight: 700;
        }

        .product-info {
          padding: 1.5rem;
        }

        .product-info h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }

        .product-tags {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .tag {
          font-size: 0.75rem;
          background: rgba(255,255,255,0.1);
          padding: 0.2rem 0.6rem;
          border-radius: 4px;
          color: var(--text-muted);
        }

        .product-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .price {
          font-size: 1.4rem;
          font-weight: 800;
          color: var(--primary);
        }

        .btn-icon {
          width: 45px;
          height: 45px;
          border-radius: 50%;
          border: 1px solid var(--glass-border);
          background: var(--glass);
          color: white;
          cursor: pointer;
          font-size: 1.2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition);
        }

        .btn-icon:hover {
          background: var(--primary);
          border-color: var(--primary);
        }

        .store-locator {
          background: rgba(255, 87, 34, 0.03);
          padding: 100px 0;
        }
        .branches-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .location-card {
          padding: 2rem;
          border-radius: 20px;
          transition: var(--transition);
          position: relative;
          border: 1px solid var(--glass-border);
          background: rgba(255, 255, 255, 0.02);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .location-card:hover {
          background: rgba(255, 255, 255, 0.05);
          transform: translateY(-5px);
          border-color: var(--primary);
        }

        .card-header {
          display: flex;
          align-items: flex-start;
          gap: 1.2rem;
          margin-bottom: 2rem;
        }

        .card-title-group h3 {
          font-size: 1.1rem;
          margin-bottom: 0.3rem;
          color: white;
        }

        .card-address {
          font-size: 0.85rem !important;
          color: var(--text-muted) !important;
          margin-left: 0 !important;
          line-height: 1.4;
        }

        .store-icon {
          color: var(--primary);
          font-size: 1.4rem;
          margin-top: 3px;
        }

        .card-actions {
          display: flex;
          gap: 0.8rem;
        }

        .btn-card {
          flex: 1;
          padding: 0.7rem;
          border-radius: 12px;
          font-size: 0.85rem;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition);
        }

        .btn-card.primary {
          background: var(--primary);
          border: none;
          color: white;
        }

        .btn-card.outline {
          background: transparent;
          border: 1px solid var(--glass-border);
          color: white;
        }

        .btn-card:hover {
          transform: scale(1.02);
        }

        .btn-card.outline:hover {
          border-color: var(--primary);
          color: var(--primary);
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255,255,255,0.05);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: var(--primary);
          border-radius: 10px;
        }

        .locator-map {
          height: 500px;
          border-radius: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          background: rgba(255,255,255,0.02);
        }
        .map-placeholder {
          text-align: center;
          color: var(--text-muted);
        }
        
        .nearest-result {
          background: rgba(255, 87, 34, 0.05);
          padding: 2rem;
          border-radius: 20px;
          border-left: 4px solid var(--primary);
        }
        
        .nearest-name {
          font-size: 1.5rem;
          font-weight: 800;
          color: white;
          margin-bottom: 0.5rem;
        }
        
        .nearest-address {
          color: var(--text-muted);
          margin-bottom: 1rem;
        }
        
        .nearest-distance {
          font-size: 0.9rem;
          color: var(--primary);
        }
        
        .map-overlay-info {
          position: absolute;
          bottom: 1rem;
          left: 1rem;
          background: var(--bg-dark);
          padding: 0.5rem 1rem;
          border-radius: 50px;
          font-size: 0.8rem;
          font-weight: 600;
          border: 1px solid var(--glass-border);
        }

        .pulse {
          width: 20px;
          height: 20px;
          background: var(--primary);
          border-radius: 50%;
          margin: 20px auto;
          box-shadow: 0 0 0 0 rgba(255, 87, 34, 0.7);
          animation: pulse_anim 2s infinite;
        }
        @keyframes pulse_anim {
          0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(255, 87, 34, 0.7); }
          70% { transform: scale(1); box-shadow: 0 0 0 10px rgba(255, 87, 34, 0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(255, 87, 34, 0); }
        }

        .blog-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .blog-card {
          border-radius: 16px;
          overflow: hidden;
        }

        .blog-img-wrapper {
          height: 200px;
        }

        .blog-img-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .blog-content {
          padding: 1.5rem;
        }

        .blog-date {
          display: block;
          font-size: 0.8rem;
          color: var(--primary);
          margin-bottom: 0.5rem;
          font-weight: 600;
        }

        .blog-content h3 {
          margin-bottom: 1rem;
          font-size: 1.3rem;
        }

        .read-more {
          display: inline-block;
          margin-top: 1rem;
          font-weight: 600;
          color: var(--primary);
        }

        .cta-box {
          padding: 5rem;
          border-radius: 40px;
          text-align: center;
          background: linear-gradient(135deg, rgba(255, 87, 34, 0.1), rgba(0,0,0,0));
          margin: 80px 0;
        }

        .cta-box h2 {
          font-size: 3.5rem;
          margin-bottom: 1.5rem;
        }

        .newsletter-form {
          margin-top: 2rem;
          display: flex;
          gap: 1rem;
          max-width: 600px;
          margin-inline: auto;
        }

        .newsletter-form input {
          flex: 1;
          padding: 1rem 1.5rem;
          border-radius: 50px;
          border: 1px solid var(--glass-border);
          color: white;
          outline: none;
        }

        .footer {
          background: #050505;
          padding: 80px 0 40px;
          border-top: 1px solid var(--glass-border);
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 4rem;
          margin-bottom: 4rem;
        }

        .footer-brand p {
          color: var(--text-muted);
          margin-top: 1.5rem;
          max-width: 300px;
        }

        .footer h4 {
          margin-bottom: 1.5rem;
          font-size: 1.1rem;
        }

        .footer-links ul li {
          margin-bottom: 0.8rem;
        }

        .footer-links a {
          color: var(--text-muted);
        }

        .footer-links a:hover {
          color: var(--primary);
        }

        .footer-bottom {
          text-align: center;
          padding-top: 40px;
          border-top: 1px solid var(--glass-border);
          color: var(--text-muted);
          font-size: 0.9rem;
        }

        .social-link {
          color: var(--text-muted);
          transition: var(--transition);
        }

        .social-link:hover {
          color: var(--primary);
          transform: translateY(-3px);
        }

        @media (max-width: 1200px) {
          .locator-flex { grid-template-columns: 350px 1fr; }
          .hero-title { font-size: 4rem; }
        }

        @media (max-width: 1024px) {
          .desktop-only { display: none !important; }
          .mobile-only { display: flex !important; }
          .footer-grid { grid-template-columns: 1fr 1fr; gap: 2rem; }
          .blog-grid { grid-template-columns: 1fr 1fr; }
          .product-grid { grid-template-columns: repeat(2, 1fr); }
          .locator-flex { grid-template-columns: 1fr; }
          .location-list { height: 350px; }
        }

        @media (max-width: 768px) {
          .hero-title { font-size: 3rem; }
          .hero-subtitle { font-size: 1.1rem; }
          .hero-btns { flex-direction: column; }
          .value-props { grid-template-columns: 1fr; margin-top: 0; padding-top: 50px; }
          .footer-grid { grid-template-columns: 1fr; text-align: center; }
          .footer-brand p { margin-inline: auto; }
          .social-icons { justify-content: center; }
          .blog-grid { grid-template-columns: 1fr; }
          .product-grid { grid-template-columns: 1fr; }
          .cta-box { padding: 3rem 1.5rem; }
          .cta-box h2 { font-size: 2.2rem; }
          .newsletter-form { flex-direction: column; }
          .locator-tabs { flex-wrap: wrap; }
          .tab-btn { padding: 0.6rem 1.2rem; font-size: 0.85rem; }
        }

        @media (max-width: 480px) {
          .hero-title { font-size: 2.5rem; }
          .container { padding: 0 1.5rem; }
          .section-title { font-size: 2rem; }
        }
      `}</style>
    </main>
  );
}
