import { Outfit, Playfair_Display } from 'next/font/google'
import './globals.css'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata = {
  metadataBase: new URL('https://sushijoy.com'),
  title: 'Sushi Joy | Premium Supermarkt Sushi - Täglich Frisch',
  description: 'Erleben Sie feinstes Supermarkt-Sushi mit Sushi Joy. Frisch zubereitet, authentische japanische Aromen und Zutaten höchster Qualität. Finden Sie uns in Ihrem lokalen Supermarkt.',

  keywords: 'sushi, frisches sushi, supermarkt sushi, sushi joy, maki, nigiri, sashimi, japanisches essen, gesundes essen, oelde, erwitte, paderborn, ahlen, sendenhorst, sassenberg',
  openGraph: {
    title: 'Sushi Joy | Premium Supermarkt Sushi',
    description: 'Frisch zubereitet, authentische japanische Aromen, geliefert in Ihren lokalen Supermarkt.',
    url: 'https://sushijoy.com',
    siteName: 'Sushi Joy',
    images: [
      {
        url: '/og-image.jpg', // Should create or provide
        width: 1200,
        height: 630,
      },
    ],
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sushi Joy',
    description: 'Frisch zubereitet, authentische japanische Aromen, geliefert in Ihren lokalen Supermarkt.',
  },
}

import CookieConsent from '@/components/CookieConsent'

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              "name": "Sushi Joy",
              "image": "https://sushijoy.com/logo.png",
              "description": "Premium Supermarkt Sushi, jeden Tag frisch zubereitet.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Warendorferstr. 16",
                "addressLocality": "Oelde",
                "addressRegion": "NRW",
                "postalCode": "59302",
                "addressCountry": "DE"
              },
              "servesCuisine": "Japanese, Sushi",
              "priceRange": "$$"
            })
          }}
        />
      </head>
      <body className={`${outfit.variable} ${playfair.variable}`} suppressHydrationWarning={true}>
        {children}
        <CookieConsent />
      </body>
    </html>
  )
}
