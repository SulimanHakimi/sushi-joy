'use client';

export default function SushiHistory() {
    return (
        <article className="blog-post">
            <div className="container">
                <h1>Vom Mekong bis München: Die Verrückte Reise des Sushi 🌍</h1>
                <p className="meta">Von: Euer Sushi Joy Historian | Lesezeit: 3 Min.</p>

                <p>Wisst ihr eigentlich, woher all diese Rollen wirklich kommen? 🤔</p>
                <p>Viele denken sofort an Tokio, Hightech und blinkende Lichter. Aber die Wahrheit ist viel älter – und ehrlich gesagt, ziemlich schräg. Es fing nämlich gar nicht in Japan an, sondern irgendwo am Mekong-Fluss in Südostasien.</p>

                <h2>Narezushi: Der Ur-Großvater des Sushi</h2>
                <p>Damals, als es noch keine Kühlschränke gab (super lange her!), suchten die Leute nach Wegen, Fisch haltbar zu machen. Die Idee: Man packt den Fisch in gesäuerten Reis und lässt ihn... nun ja, fermentieren. Das Ganze hieß <strong>Narezushi</strong>. Und der Clou? Den Reis hat man am Ende weggeworfen und nur den stinkenden Fisch gegessen. 😅</p>

                <h2>Der Game-Changer in der Edo-Zeit</h2>
                <p>Erst Jahrhunderte später, in der Edo-Zeit in Japan (so 17. bis 19. Jahrhundert), kam jemand auf die brillante Idee: "Hey, lass uns den Reis mit Essig würzen BEVOR er schlecht wird, und ihn zusammen mit frischem Fisch essen." Boom! Das moderne Sushi war geboren. Fast Food der alten Schule!</p>

                <h2>Sushi Erobert den Westen</h2>
                <p>Spulen wir vor ins 20. Jahrhundert: Sushi ist global. Aber der Westen war noch skeptisch gegenüber rohem Fisch. Die Lösung? Die <strong>California Roll</strong> (Avocado statt fettem Thunfisch, und das Nori schön versteckt innen drin). Ein genialer Schachzug, der Sushi für alle zugänglich machte.</p>

                <p>Und heute? Heute stehen wir von <strong>Sushi Joy</strong> da und verbinden diese jahrhundertealte Tradition mit deinem modernen Alltag. Echtes Handwerk, aber entspannt im Supermarkt um die Ecke. Verrückte Geschichte, oder?</p>
            </div>
            <style jsx>{`
                .blog-post {
                    padding: 120px 0;
                    background: var(--bg-dark);
                    color: var(--text-main);
                    min-height: 100vh;
                }
                h1 { font-size: 2.5rem; margin-bottom: 0.5rem; color: var(--primary); }
                h2 { font-size: 1.8rem; margin: 2rem 0 1rem; color: var(--accent); }
                p { margin-bottom: 1rem; line-height: 1.8; color: var(--text-muted); }
                .meta { font-size: 0.9rem; color: #888; margin-bottom: 3rem; }
                strong { color: var(--text-main); }
            `}</style>
        </article>
    );
}
