'use client';

import React from 'react';
import Hero from '@/components/Hero';
import ValueProps from '@/components/ValueProps';
import ProductSlider from '@/components/ProductSlider';
import ReviewsSection from '@/components/ReviewsSection';
import Gallery from '@/components/Gallery';
import CTA from '@/components/CTA';

export default function Home() {
  return (
    <main className="main-content">
      <Hero />
      <ValueProps />
      <ProductSlider />
      <Gallery />
      <ReviewsSection />
      <CTA />
    </main>
  );
}
