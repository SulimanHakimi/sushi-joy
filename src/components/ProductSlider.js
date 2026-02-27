'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { FaChevronLeft, FaChevronRight, FaShoppingCart } from 'react-icons/fa';
import { products } from '../data/products';

export default function ProductSlider() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = 350; // Adjust based on card width
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="product-slider-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Unsere Favoriten</h2>
          <p className="section-subtitle">Entdecke die beliebtesten Gerichte aus unserem Menü.</p>
          <div className="slider-nav">
            <button onClick={() => scroll('left')} className="nav-btn" aria-label="Scroll Left"><FaChevronLeft /></button>
            <button onClick={() => scroll('right')} className="nav-btn" aria-label="Scroll Right"><FaChevronRight /></button>
          </div>
        </div>

        <div className="slider-container" ref={scrollRef}>
          {products.map((product) => (
            <div key={product.id} className="slider-card glass">
              <div className="card-img-wrapper">
                <img src={product.image} alt={product.name} />
                <span className="card-badge">{product.category}</span>
              </div>
              <div className="card-content">
                <Link className='cursor-pinter' href={`/products/${product.slug}`} key={product.id}>{product.name}</Link>
                <p className="card-price">{product.price} €</p>

              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link href="/products" className="btn btn-primary">Vollständiges Menü ansehen</Link>
        </div>
      </div>

      <style jsx>{`
        .product-slider-section {
          padding: 80px 0;
          background: var(--bg-dark);
          position: relative;
        }

        .section-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-bottom: 3rem;
          position: relative;
        }

        .slider-nav {
          display: flex;
          gap: 1rem;
          margin-top: 1.5rem;
        }

        .nav-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1px solid var(--glass-border);
          background: rgba(255,255,255,0.05);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: var(--transition);
        }

        .nav-btn:hover {
          background: var(--primary);
          border-color: var(--primary);
        }

        .slider-container {
          display: flex;
          gap: 2rem;
          overflow-x: auto;
          scroll-behavior: smooth;
          padding: 20px 5px 40px 5px; /* Padding for hover effects */
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE/Edge */
        }

        .slider-container::-webkit-scrollbar {
          display: none; /* Chrome/Safari */
        }

        .slider-card {
          min-width: 300px;
          border-radius: 20px;
          overflow: hidden;
          transition: var(--transition);
          flex-shrink: 0;
        }

        .slider-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.3);
        }

        .card-img-wrapper {
          height: 200px;
          position: relative;
        }

        .card-img-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .card-badge {
          position: absolute;
          top: 10px;
          right: 10px;
          background: var(--primary);
          color: white;
          padding: 4px 10px;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 700;
        }

        .card-content {
          padding: 1.5rem;
          text-align: center;
        }

        .card-content h3 {
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .card-price {
          color: var(--primary);
          font-weight: 800;
          font-size: 1.2rem;
          margin-bottom: 1.2rem;
        }

        .btn-details {
          display: inline-block;
          padding: 0.6rem 1.5rem;
          border: 1px solid var(--glass-border);
          border-radius: 50px;
          color: white;
          font-size: 0.9rem;
          text-decoration: none;
          transition: var(--transition);
        }

        .btn-details:hover {
          background: white;
          color: black;
        }

        @media (max-width: 768px) {
           .section-header { margin-bottom: 2rem; }
        }
      `}</style>
    </section>
  );
}
