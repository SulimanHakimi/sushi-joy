'use client';

import LegalLayout from '@/components/LegalLayout';

export default function Imprint() {
    return (
        <LegalLayout title="Impressum">
            <h2>Angaben gemäß § 5 TMG</h2>
            <p>
                Sushi Joy Gourmet GmbH<br />
                Warendorferstr. 16<br />
                59302 Oelde
            </p>

            <h2>Vertreten durch:</h2>
            <p>Suliman Hakimi</p>

            <h2>Kontakt</h2>
            <p>
                Telefon: +49 (0) 555 123-4567<br />
                E-Mail: info@sushijoy.com
            </p>

            <h2>Umsatzsteuer-ID</h2>
            <p>
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                DE 123 456 789
            </p>

            <h2>EU-Streitschlichtung</h2>
            <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
                <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', marginLeft: '5px' }}>
                    https://ec.europa.eu/consumers/odr/
                </a>.
                Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>

            <h2>Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
            <p>
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
        </LegalLayout>
    );
}
