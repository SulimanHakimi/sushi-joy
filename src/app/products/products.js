// products/products.js
'use client';

import React from 'react';
import { products as sushiData } from '../../data/products';
import Link from 'next/link';

export default function Products() {
  return (
    <main className="main-content">
      <section className="products">
        <div className="container">
          <h2 className="section-title">Unser Sushi</h2>
          <p className="section-subtitle">
            Entdecken Sie unsere frische Sushi-Auswahl, zubereitet mit Premium-Zutaten.
          </p>

          <div className="product-grid">
            {sushiData.map((sushi) => (
              <div key={sushi.id} className="product-card">

                <div className="product-img-wrapper">
                  <img
                    src={sushi.image}
                    alt={sushi.name}
                    className="product-img"
                    loading="lazy"
                  />

                  <span className="product-badge">{sushi.category}</span>
                </div>

                <div className="product-info">
                  <h3>{sushi.name}</h3>

                  <div className="product-tags">
                    {sushi.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="product-footer">
                    <span className="price">{sushi.price} €</span>

                    <Link href="#" className="btn-details">
                      Ansehen
                    </Link>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .main-content {
          padding-top: 80px;
          min-height: 100vh;
          background: var(--bg-dark);
        }

        .products {
          padding: 80px 0;
        }

        .section-title {
          text-align: center;
          font-size: 3rem;
          margin-bottom: 3rem;
          color: var(--primary);
        }

        .section-subtitle {
          text-align: center;
          color: var(--text-muted);
          max-width: 600px;
          margin: -2.5rem auto 3rem;
        }

        .product-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 2rem;
        }

        .product-card {
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(10px);
          border-radius: 18px;
          overflow: hidden;
          transition: all .35s ease;
          border: 1px solid rgba(255,255,255,0.05);
        }

        .product-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0,0,0,0.4);
        }

        .product-img-wrapper {
          height: 220px;
          position: relative;
          overflow: hidden;
        }

        .product-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform .5s ease;
        }

        .product-card:hover .product-img {
          transform: scale(1.1);
        }

        .product-badge {
          position: absolute;
          top: 15px;
          right: 15px;
          background: var(--primary);
          color: white;
          padding: 4px 12px;
          font-size: .75rem;
          border-radius: 50px;
          font-weight: 700;
        }

        .product-info {
          padding: 1.4rem;
        }

        .product-info h3 {
          font-size: 1.3rem;
          margin-bottom: .8rem;
        }

        .product-tags {
          display: flex;
          gap: 6px;
          flex-wrap: wrap;
          margin-bottom: 1.2rem;
        }

        .tag {
          font-size: .7rem;
          padding: 3px 8px;
          background: rgba(255,255,255,0.08);
          border-radius: 5px;
          color: #ccc;
        }

        .product-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .price {
          font-size: 1.3rem;
          font-weight: 800;
          color: var(--primary);
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

      `}</style>
    </main>
  );
}
