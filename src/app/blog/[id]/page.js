import React from 'react';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import '../blog.css';

const blogPosts = {
  '1': {
    title: 'Die Kunst, frisches Supermarkt-Sushi auszuwählen',
    content: `
      <p>Wenn Sie durch die Kühlregale Ihres lokalen Supermarkts stöbern, mag Sushi wie ein Glücksspiel erscheinen. Aber mit dem richtigen Wissen können Sie eine Platte auswählen, die einem Restaurantbesuch in nichts nachsteht. Bei Sushi Joy sind wir stolz auf unser "Frische-Siegel"-System, aber hier ist, worauf Sie bei jedem Supermarkt-Sushi achten sollten:</p>
      
      <h2>1. Die Reiskonsistenz</h2>
      <p>Der Reis sollte feucht und leicht durchscheinend aussehen. Wenn er trocken oder kreidig aussieht, liegt er wahrscheinlich schon zu lange oder wurde nicht bei der optimalen Temperatur gelagert. Guter Sushi-Reis sollte fest, aber zart sein.</p>
      
      <h2>2. Achten Sie auf den "Glanz"</h2>
      <p>Frischer Fisch hat einen natürlichen Glanz. Wenn der Lachs stumpf aussieht oder der Thunfisch dunkle Flecken hat, meiden Sie ihn. Die Farbe sollte lebendig sein – leuchtendes Orange für Lachs und tiefes Rot für Thunfisch.</p>
      
      <h2>3. Das Zubereitungsdatum</h2>
      <p>Überprüfen Sie immer den Zeitpunkt der Zubereitung. Bei Sushi Joy beliefern wir unsere Partner dreimal täglich. Idealerweise sollten Sie Sushi wählen, das in den letzten 4-6 Stunden hergestellt wurde.</p>
      
      <p>Achten Sie beim nächsten Einkauf auf das Sushi Joy Logo – es ist Ihre Garantie für erstklassige, handwerkliche Qualität bei jedem Bissen.</p>
    `,
    date: '10. Feb 2026',
    image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=1200'
  },
  '2': {
    title: 'Warum Wasabi und Ingwer nicht nur Deko sind',
    content: `
      <p>Haben Sie sich jemals gefragt, warum jede Sushi-Platte mit einem Klecks grüner Paste und einem Haufen rosa Ingwer serviert wird? Sie sind nicht nur zur Zierde da. Sie sind wesentliche Bestandteile des Sushi-Erlebnisses, sowohl für den Geschmack als auch für die Gesundheit.</p>
      
      <h2>Die Wissenschaft des Wasabi</h2>
      <p>Wasabi (oder sein Verwandter auf Meerrettichbasis) hat starke antimikrobielle Eigenschaften. Historisch gesehen wurde er zu rohem Fisch gegessen, um Lebensmittelvergiftungen vorzubeugen. Heute sorgt er für die typische "nasale Schärfe", die den Gaumen zwischen den Bissen reinigt.</p>
      
      <h2>Ingwer (Gari): Der ultimative Gaumenreiniger</h2>
      <p>Eingelegter Ingwer, oder <i>Gari</i>, soll zwischen verschiedenen Sushi-Sorten gegessen werden. Dies ermöglicht es Ihnen, das einzigartige Geschmacksprofil jedes Fisches voll zu erleben, ohne dass der vorherige auf Ihren Geschmacksknospen nachklingt.</p>
      
      <p>Wenn Sie das nächste Mal Sushi Joy genießen, lassen Sie die Beilagen nicht weg! Sie sind das Geheimnis eines professionellen Sushi-Erlebnisses.</p>
    `,
    date: '05. Feb 2026',
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c170db06?q=80&w=1200'
  },
  '3': {
    title: 'Die 5 besten Sake-Paarungen für Ihre Sushi-Platte',
    content: `
      <p>Die richtige Getränkewahl zu Ihrem Sushi kann ein schnelles Supermarkt-Mittagessen in ein Gourmet-Erlebnis verwandeln. Sake, japanischer Reiswein, ist die natürliche Wahl. Hier sind unsere Top 5 Paarungen:</p>
      
      <h2>1. Junmai mit Lachs Nigiri</h2>
      <p>Der reiche, volle Geschmack von Junmai-Sake ergänzt die fettige Reichhaltigkeit von frischem Lachs perfekt.</p>
      
      <h2>2. Daiginjo mit leichtem Weißfisch</h2>
      <p>Die delikaten, fruchtigen Noten von erstklassigem Daiginjo überdecken nicht die subtilen Aromen von Weißfisch wie Schnapper oder Wolfsbarsch.</p>
      
      <h2>3. Nigori (ungefiltert) mit scharfen Rollen</h2>
      <p>Das cremige, süße Profil von Nigori-Sake hilft, die Schärfe von Spicy Tuna oder Dynamite Rolls auszugleichen.</p>
      
      <p>Entdecken Sie mehr über die japanische Kultur und Küche direkt hier im Sushi Joy Blog.</p>
    `,
    date: '28. Jan 2026',
    image: 'https://images.unsplash.com/photo-1512839308926-e41f4eb27f50?q=80&w=1200'
  }
};


export async function generateMetadata({ params }) {
  const { id } = await params;
  const post = blogPosts[id] || { title: 'Blog Beitrag' };
  return {
    title: `${post.title} | Sushi Joy Blog`,
    description: `Lesen Sie über ${post.title} im Sushi Joy Blog. Expertentipps zu Sushi und der japanischen Küche.`,
  };
}

export default async function BlogPost({ params }) {
  const { id } = await params;
  const post = blogPosts[id];

  if (!post) {
    return (
      <div className="container" style={{ padding: '100px 0', textAlign: 'center' }}>
        <h1 style={{ color: '#FF5722' }}>Beitrag nicht gefunden</h1>
        <Link href="/" style={{ color: 'white', marginTop: '20px', display: 'block' }}>Zurück zur Startseite</Link>
      </div>
    );
  }

  return (
    <article className="blog_post">
      <nav className="blog_nav container">
        <Link href="/" className="back_link">
          <FaArrowLeft style={{ marginRight: '8px', verticalAlign: 'middle' }} /> Zurück zu Sushi Joy
        </Link>
      </nav>

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
