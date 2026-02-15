'use client';

import React from 'react';
import { products as sushiData } from '../../data/products';

export default function Products() {
  return (
    <main className="main-content">
      <section id="produkte" className="products">
        <div className="container">
          <h2 className="section-title">Die Supermarkt-Auswahl</h2>
          <p className="section-subtitle">Eine kuratierte Kollektion unserer Sushi-Bestseller, frisch verpackt für dich.</p>

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
                    <span className="price">{sushi.price} €</span>
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
            padding: 60px 0;
        }
        .product-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 2.5rem;
          padding-bottom: 20px;
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
          flex-wrap: wrap;
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
      `}</style>
    </main>
  );
}
