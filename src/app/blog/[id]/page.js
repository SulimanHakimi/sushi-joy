import React from 'react';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import '../blog.css';

const blogPosts = {
  '1': {
    title: 'The Art of Choosing Fresh Supermarket Sushi',
    content: `
      <p>When browsing the refrigerated shelves of your local supermarket, sushi might seem like a gamble. But with the right knowledge, you can choose a platter that rivals a restaurant visit. At Sushi Joy, we take pride in our "Freshness Seal" system, but here is what you should look for in every supermarket sushi:</p>
      
      <h2>1. Rice Consistency</h2>
      <p>The rice should look moist and slightly translucent. If it looks dry or chalky, it has likely been sitting too long or was not stored at the optimal temperature. Good sushi rice should be firm but tender.</p>
      
      <h2>2. Look for the "Sheen"</h2>
      <p>Fresh fish has a natural sheen. If the salmon looks dull or the tuna has dark spots, avoid it. The color should be vibrant – bright orange for salmon and deep red for tuna.</p>
      
      <h2>3. Preparation Time</h2>
      <p>Always check the preparation time. At Sushi Joy, we deliver to our partners three times daily. Ideally, you should choose sushi made within the last 4-6 hours.</p>
      
      <p>Look for the Sushi Joy logo on your next shopping trip – it is your guarantee for premium, artisanal quality in every bite.</p>
    `,
    date: 'Feb 10, 2026',
    image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=1200'
  },
  '2': {
    title: 'Why Wasabi and Ginger Are Not Just Decoration',
    content: `
      <p>Have you ever wondered why every sushi platter is served with a dollop of green paste and a pile of pink ginger? They are not just for decoration. They are essential parts of the sushi experience, both for taste and health.</p>
      
      <h2>The Science of Wasabi</h2>
      <p>Wasabi (or its horseradish-based relative) has strong antimicrobial properties. Historically, it was eaten with raw fish to prevent food poisoning. Today, it provides that typical "nasal heat" that cleanses the palate between bites.</p>
      
      <h2>Ginger (Gari): The Ultimate Palate Cleanser</h2>
      <p>Pickled ginger, or <i>Gari</i>, is meant to be eaten between different types of sushi. This allows you to fully experience the unique flavor profile of each fish without the previous one lingering on your taste buds.</p>
      
      <p>Next time you enjoy Sushi Joy, don't skip the sides! They are the secret to a professional sushi experience.</p>
    `,
    date: 'Feb 05, 2026',
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c170db06?q=80&w=1200'
  },
  '3': {
    title: 'The 5 Best Sake Pairings for Your Sushi Platter',
    content: `
      <p>Choosing the right drink for your sushi can transform a quick supermarket lunch into a gourmet experience. Sake, Japanese rice wine, is the natural choice. Here are our top 5 pairings:</p>
      
      <h2>1. Junmai with Salmon Nigiri</h2>
      <p>The rich, full flavor of Junmai sake perfectly complements the fatty richness of fresh salmon.</p>
      
      <h2>2. Daiginjo with Light White Fish</h2>
      <p>The delicate, fruity notes of premium Daiginjo do not overpower the subtle flavors of white fish like snapper or sea bass.</p>
      
      <h2>3. Nigori (Unfiltered) with Spicy Rolls</h2>
      <p>The creamy, sweet profile of Nigori sake helps to balance the heat of Spicy Tuna or Dynamite rolls.</p>
      
      <p>Discover more about Japanese culture and cuisine right here on the Sushi Joy Blog.</p>
    `,
    date: 'Jan 28, 2026',
    image: 'https://images.unsplash.com/photo-1512839308926-e41f4eb27f50?q=80&w=1200'
  }
};


export async function generateMetadata({ params }) {
  const { id } = await params;
  const post = blogPosts[id] || { title: 'Blog Post' };
  return {
    title: `${post.title} | Sushi Joy Blog`,
    description: `Read about ${post.title} on the Sushi Joy Blog. Expert tips on sushi and Japanese cuisine.`,
  };
}

export default async function BlogPost({ params }) {
  const { id } = await params;
  const post = blogPosts[id];

  if (!post) {
    return (
      <div className="container" style={{ padding: '100px 0', textAlign: 'center' }}>
        <h1 style={{ color: '#FF5722' }}>Post not found</h1>
        <Link href="/" style={{ color: 'white', marginTop: '20px', display: 'block' }}>Back to Home</Link>
      </div>
    );
  }

  return (
    <article className="blog_post">


      <header className="post_header">
        <div className="container">
          <span className="date">{post.date}</span>
          <h1>{post.title}</h1>
        </div>
      </header>

      <div className="container">
        <div className="post_img_wrapper">
          <img src={post.image} alt={post.title} />
        </div>

        <div className="post_content" dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </article>
  );
}
