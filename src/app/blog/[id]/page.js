import React from 'react';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import '../blog.css';

import postsData from '../../../data/posts.json';

// Convert array to object for easier lookup by ID
const blogPosts = postsData.reduce((acc, post) => {
  acc[post.id] = post;
  return acc;
}, {});


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
