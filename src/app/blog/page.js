'use client';

import React from 'react';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import blogData from '../../data/posts.json';

export default function Blog() {

  return (
    <main className="main-content">
      <section id="blog" className="blog-section">
        <div className="container">
          <h2 className="section-title">Sushi Joy Blog</h2>
          <p className="section-subtitle">Insights into sushi culture, preparation, and the joy of Japanese cuisine.</p>

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
                    Read Full Article <FaArrowRight size={12} style={{ marginLeft: '5px', verticalAlign: 'middle' }} />
                  </Link>
                </div>
              </article>
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
        .blog-section {
            padding: 60px 0;
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
          text-decoration: none;
        }

        @media (max-width: 1024px) {
          .blog-grid { grid-template-columns: 1fr 1fr; }
        }

        @media (max-width: 768px) {
          .blog-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </main>
  );
}
