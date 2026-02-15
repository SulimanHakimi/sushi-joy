'use client';

import React from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

export default function ReviewsSection() {
    const customerReviews = [
        {
            id: 1,
            name: "Hudeifa Salem Milad",
            role: "Local Guide",
            text: "Finde das Sushi dort sehr lecker und frisch! Das Schöne ist, dass man das Team beim Zubereiten sehen kann.",
            rating: 5
        },
        {
            id: 2,
            name: "H.",
            role: "Verified Customer",
            text: "Sehr lecker und frisch, Mitarbeiter sind auch nett und hilfsbereit und antworten auf Fragen.",
            rating: 5
        },
        {
            id: 3,
            name: "timä",
            role: "Verified Customer",
            text: "Ich bin super begeistert von dem neuen Sushi Restaurant. Das Essen ist super lecker und frisch.",
            rating: 5
        }
    ];

    return (
        <section id="reviews" className="reviews-section">
            <div className="container">
                <h2 className="section-title">Was unsere Kunden sagen</h2>
                <p className="section-subtitle">Echtes Feedback von echten Sushi-Liebhabern.</p>

                <div className="reviews-grid">
                    {customerReviews.map((review) => (
                        <div key={review.id} className="review-card glass">
                            <FaQuoteLeft className="quote-icon" />
                            <p className="review-text">"{review.text}"</p>
                            <div className="review-rating">
                                {[...Array(review.rating)].map((_, i) => (
                                    <FaStar key={i} color="#FFC107" />
                                ))}
                            </div>
                            <div className="reviewer-info">
                                <h4>{review.name}</h4>
                                <span>{review.role}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        .reviews-section {
            padding: 100px 0;
            background: var(--bg-dark);
        }

        .reviews-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin-top: 3rem;
        }

        .review-card {
            padding: 2.5rem;
            border-radius: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            transition: var(--transition);
        }

        .review-card:hover {
            transform: translateY(-5px);
            background: rgba(255, 255, 255, 0.05);
        }

        .quote-icon {
            font-size: 2rem;
            color: var(--primary);
            margin-bottom: 1.5rem;
            opacity: 0.5;
        }

        .review-text {
            font-size: 1.1rem;
            font-style: italic;
            margin-bottom: 1.5rem;
            line-height: 1.6;
        }

        .review-rating {
            display: flex;
            gap: 5px;
            margin-bottom: 1rem;
        }

        .reviewer-info h4 {
            font-size: 1.1rem;
            margin-bottom: 0.2rem;
            color: white;
        }

        .reviewer-info span {
            font-size: 0.9rem;
            color: var(--text-muted);
        }
      `}</style>
        </section>
    );
}
