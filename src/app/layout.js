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
  metadataBase: new URL('https://sushijoy.de'),
  title: 'Sushi Joy | Bestes Supermarkt Sushi in Deutschland',
  description: 'Erlebe erstklassiges Sushi im Supermarkt mit Sushi Joy. Täglich frisch zubereitet, authentische japanische Zutaten. Finde uns in Oelde, Paderborn, Erwitte und Umgebung.',
  keywords: 'Sushi Joy, Supermarkt Sushi, Frisches Sushi, Sushi kaufen, Sushi Oelde, Sushi Paderborn, Sushi Erwitte, Sushi Ahlen, Sushi Sendenhorst, Sushi Sassenberg, Japanisches Essen, Maki, Nigiri, Sashimi',
  openGraph: {
    title: 'Sushi Joy | Premium Supermarkt Sushi',
    description: 'Täglich frisch gerolltes Sushi in deinem lokalen Supermarkt. Entdecke Qualität und Frische.',
    url: 'https://sushijoy.de',
    siteName: 'Sushi Joy',
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sushi Joy - Frisches Sushi im Supermarkt',
    description: 'Dein tägliches Stück Japan. Frisch, lecker und direkt um die Ecke.',
  },
}

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FoodEstablishment",
              "name": "Sushi Joy",
              "image": "https://sushijoy.de/logo.png",
              "description": "Premium Supermarkt Sushi, täglich frisch zubereitet.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Warendorferstr. 16",
                "addressLocality": "Oelde",
                "postalCode": "59302",
                "addressCountry": "DE"
              },
              "servesCuisine": "Sushi, Japanese",
              "priceRange": "€€",
              "areaServed": ["Oelde", "Paderborn", "Erwitte", "Ahlen", "Sendenhorst", "Sassenberg"]
            })
          }}
        />
      </head>
      <body className={`${outfit.variable} ${playfair.variable}`} suppressHydrationWarning={true}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
