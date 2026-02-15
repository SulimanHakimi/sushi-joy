'use client';

export default function Imprint() {
    return (
        <div className="imprint-page">
            <div className="container">
                <h1 className="section-title">Impressum</h1>

                <div className="imprint-content glass">
                    <h2>Angaben gemäß § 5 TMG</h2>
                    <p>
                        Sushi Joy GmbH<br />
                        Warendorferstr. 16<br />
                        59302 Oelde<br />
                        Deutschland
                    </p>

                    <h2>Kontakt</h2>
                    <p>
                        Telefon: +49 (0) 555 123-4567<br />
                        E-Mail: info@sushijoy.de
                    </p>

                    <h2>Registereintrag</h2>
                    <p>
                        Eintragung im Handelsregister.<br />
                        Registergericht: Amtsgericht Oelde<br />
                        Registernummer: HRB 12345
                    </p>

                    <h2>Umsatzsteuer-ID</h2>
                    <p>
                        Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:<br />
                        DE 123 456 789
                    </p>

                    <h2>Vertreten durch</h2>
                    <p>
                        Geschäftsführer: Max Mustermann
                    </p>

                    <h2>Streitschlichtung</h2>
                    <p>
                        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
                        <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr</a>.<br />
                        Unsere E-Mail-Adresse finden Sie oben im Impressum.
                    </p>

                    <p>
                        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                    </p>
                </div>
            </div>

            <style jsx>{`
                .imprint-page {
                    padding: 120px 0;
                    background: var(--bg-dark);
                    min-height: 100vh;
                    color: white;
                }
                .imprint-content {
                    padding: 3rem;
                    border-radius: 20px;
                }
                h1 {
                    margin-bottom: 2rem;
                    text-align: center;
                    color: var(--primary);
                }
                h2 {
                    margin-top: 2rem;
                    margin-bottom: 1rem;
                    color: var(--primary);
                    font-size: 1.5rem;
                }
                p {
                    line-height: 1.6;
                    color: var(--text-muted);
                }
                a {
                    color: var(--primary);
                    text-decoration: none;
                }
                a:hover {
                    text-decoration: underline;
                }
            `}</style>
        </div>
    );
}
