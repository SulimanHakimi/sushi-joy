'use client';

export default function SushiTypes() {
    return (
        <article className="blog-post">
            <div className="container">
                <h1>Maki vs. Nigiri: Der Ultimative Sushi-Guide für Dummies (und Profis) 🤓</h1>
                <p className="meta">Der Sushi Joy Guide für Clevere Genießer</p>

                <p>Hand aufs Herz: Stehst du auch manchmal vor der Theke und denkst dir: "Was war nochmal was?" Keine Sorge, wir klären das ein für alle Mal. Damit du beim nächsten Date oder Familienessen wie ein echter Sushi-Connoisseur wirkst.</p>

                <h2>1. Nigiri (Der Purist)</h2>
                <p>Das ist das "Finger-Sushi". Ein kleiner, handgeformter Reisballen, und oben drauf liegt meist eine Scheibe roher Fisch (wie Lachs oder Thunfisch) oder auch Garnelen (Ebi). Simpel, elegant, lecker. Hier schmeckt man die Qualität am besten.</p>

                <h2>2. Maki (Der Klassiker)</h2>
                <p>Maki heißt wörtlich "gerollt". Reis, Fisch und Gemüse werden in ein Nori-Blatt (Seetang) gewickelt.
                    <br />✨ <strong>Hoso-Maki:</strong> Die kleinen Dünnen mit nur einer Füllung (z.B. nur Gurke oder nur Lachs).
                    <br />✨ <strong>Futo-Maki:</strong> Die dicken Brummer mit vielen Füllungen auf einmal.</p>

                <h2>3. Uramaki (Der Inside-Out Rebell)</h2>
                <p>Hier ist alles verkehrt herum – aber auf die gute Art! Der Reis ist außen, das Nori innen. Warum? Weil man so den Reis noch schön in Sesam oder Kaviar wälzen kann. Unsere <strong>Spicy Salmon Crunch</strong> ist genau so ein Kandidat. Absoluter Fan-Favorite!</p>

                <h2>4. Sashimi (Der Naked Truth)</h2>
                <p>Achtung, Fangfrage: Ist das Sushi? <br />Technisch gesehen: Nein! Denn Sushi bedeutet "gesäuerter Reis". Sashimi ist purer, roher Fisch in Scheiben. Ohne Reis. Für alle Keto-Fans und Fisch-Liebhaber das Nonplusultra.</p>

                <p>Jetzt weißt du Bescheid! Also, worauf hast du heute Lust? Schnapp dir deine Favoriten an der <strong>Sushi Joy</strong> Theke und mix dir deine eigene Platte zusammen! 🍱</p>
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
