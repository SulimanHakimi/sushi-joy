'use client';

export default function SushiRecipes() {
    return (
        <article className="blog-post">
            <div className="container">
                <h1>Sushi Selber Machen: Ein Einfaches Rezept für Zuhause 🍣</h1>
                <p className="meta">Veröffentlicht am 15. Februar 2026 | Vom Sushi Joy Team</p>

                <section>
                    <h2>Hol dir das Sushi-Feeling in deine Küche!</h2>
                    <p>Sind wir mal ehrlich: Nichts schlägt den Komfort, sich einfach eine frische Box von <strong>Sushi Joy</strong> aus dem Supermarkt zu schnappen. Aber manchmal packt einen der Ehrgeiz, oder? Sushi selber machen ist nicht nur lecker, sondern macht auch mega Spaß – besonders mit Freunden oder dem Partner.</p>
                    <p>Heute zeigen wir euch, wie ihr unseren Bestseller, die <strong>Spicy Salmon Roll</strong>, ganz einfach nachbauen könnt. Los geht's!</p>
                </section>

                <section>
                    <h3>Was ihr braucht (Zutaten)</h3>
                    <ul>
                        <li><strong>Sushi-Reis</strong> (Rundkornreis, gewürzt mit Reisessig, Zucker & Salz)</li>
                        <li><strong>Nori-Blätter</strong> (Gerösteter Seetang)</li>
                        <li><strong>Lachs</strong> (Achtet unbedingt auf Sushi-Qualität/Sashimi-Grad!)</li>
                        <li><strong>Gurke</strong> (in feine Stifte geschnitten)</li>
                        <li><strong>Spicy Mayo</strong> (Mayo + Sriracha mischen – je nach Schärfewunsch)</li>
                        <li><strong>Sesam</strong> (geröstet schmeckt’s am besten)</li>
                    </ul>
                </section>

                <section>
                    <h3>Schritt-für-Schritt Anleitung</h3>
                    <ol>
                        <li>Legt ein Nori-Blatt auf eure Bambusmatte (glatte Seite nach unten).</li>
                        <li>Verteilt eine dünne Schicht Reis darauf. Hände nass machen nicht vergessen, sonst klebt alles!</li>
                        <li><strong>Pro-Tipp:</strong> Für eine "Inside-Out" Rolle (Uramaki) dreht ihr das Blatt jetzt um, sodass der Reis auf der Matte liegt.</li>
                        <li>Legt den Lachs und die Gurkenstifte mittig auf das Nori.</li>
                        <li>Rollt alles mit Hilfe der Matte fest zusammen. Schön drücken, damit nichts rausfällt.</li>
                        <li>Schneidet die Rolle mit einem scharfen, feuchten Messer in 8 mundgerechte Stücke.</li>
                        <li>Topping-Time: Ein Klecks Spicy Mayo drauf und mit Sesam bestreuen. Fertig!</li>
                    </ol>
                </section>

                <p>Klingt nach zu viel Arbeit? Kein Stress! Dein nächster <strong>Sushi Joy</strong> Counter im Rewe oder Edeka wartet schon mit frisch gerollten Highlights auf dich. 😉</p>
            </div>
            <style jsx>{`
                .blog-post {
                    padding: 120px 0;
                    background: var(--bg-dark);
                    color: var(--text-main);
                    min-height: 100vh;
                }
                h1 { font-size: 2.5rem; margin-bottom: 0.5rem; color: var(--primary); }
                h2 { font-size: 1.8rem; margin: 2rem 0 1rem; }
                h3 { font-size: 1.4rem; margin: 1.5rem 0 0.5rem; color: var(--accent); }
                p { margin-bottom: 1rem; line-height: 1.8; color: var(--text-muted); }
                .meta { font-size: 0.9rem; color: #888; margin-bottom: 3rem; }
                ul, ol { margin-left: 2rem; margin-bottom: 1.5rem; color: var(--text-muted); }
                li { margin-bottom: 0.5rem; }
                strong { color: var(--text-main); }
            `}</style>
        </article>
    );
}
