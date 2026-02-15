'use client';

import React, { useState } from 'react';
import { FaStore, FaPaperPlane, FaMapMarkerAlt } from 'react-icons/fa';

export default function Locations() {
    const [filter, setFilter] = useState('All');
    const [findingLocation, setFindingLocation] = useState(false);

    const locations = [
        { id: 1, name: 'Sushi Joy @ Oelde', address: 'Warendorferstr. 16, 59302 Oelde, Germany', lat: 51.8262, lng: 8.1364 },
        { id: 2, name: 'Sushi Joy @ Erwitte', address: 'Wemberweg 4, 59597 Erwitte, Germany', lat: 51.6119, lng: 8.3325 },
        { id: 3, name: 'Sushi Joy @ Paderborn', address: 'Alisostraße 2, 33106 Paderborn, Germany', lat: 51.7348, lng: 8.7067 },
        { id: 4, name: 'Sushi Joy @ Ahlen', address: 'Gebrüder-kerkmann-Platz 4, 59227 Ahlen, Germany', lat: 51.7618, lng: 7.8925 },
        { id: 5, name: 'Sushi Joy @ Sendenhorst', address: 'Osttor 26, 48234 Sendenhorst, Germany', lat: 51.8447, lng: 7.8285 },
        { id: 6, name: 'Sushi Joy @ Sassenberg', address: 'Von Galen-Straße 21, 48336 Sassenberg, Germany', lat: 51.9897, lng: 8.0416 },
    ];

    const handleFindNearMe = () => {
        setFindingLocation(true);
        if (!navigator.geolocation) {
            alert('Geolokalisierung wird nicht unterstützt.');
            setFindingLocation(false);
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                let minDistance = Infinity;
                let nearest = locations[0];

                const calculateDistance = (lat1, lon1, lat2, lon2) => {
                    const R = 6371;
                    const dLat = (lat2 - lat1) * (Math.PI / 180);
                    const dLon = (lon2 - lon1) * (Math.PI / 180);
                    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
                    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                };

                locations.forEach((loc) => {
                    const dist = calculateDistance(latitude, longitude, loc.lat, loc.lng);
                    if (dist < minDistance) {
                        minDistance = dist;
                        nearest = loc;
                    }
                });

                // In a real app, we might highlight this location or zoom map to it.
                // For now, let's just alert or scroll to it.
                alert(`Nächstgelegener Standort gefunden: ${nearest.name}`);
                setFindingLocation(false);
            },
            () => {
                setFindingLocation(false);
                alert('Zugriff auf Standort verweigert.');
            }
        );
    };

    const filteredLocations = filter === 'All'
        ? locations
        : locations.filter(loc => loc.address.includes(filter));

    return (
        <main className="main-content">
            <section id="standorte" className="store-locator">
                <div className="container">
                    <h2 className="section-title">Besuchen Sie unsere Partner</h2>
                    <p className="section-subtitle">Durchstöbern Sie unsere Premium-Supermarkt-Standorte oder finden Sie den nächstgelegenen.</p>

                    <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                        <button className="btn btn-primary" onClick={handleFindNearMe} disabled={findingLocation}>
                            <FaMapMarkerAlt style={{ marginRight: '8px' }} /> {findingLocation ? 'Lokalisiere...' : 'In meiner Nähe finden'}
                        </button>
                    </div>

                    <div className="branches-grid">
                        {filteredLocations.map((loc) => (
                            <div
                                key={loc.id}
                                className="location-card glass"
                            >
                                <div className="card-header">
                                    <FaStore className="store-icon" />
                                    <div className="card-title-group">
                                        <h3>{loc.name}</h3>
                                        <p className="card-address">{loc.address}</p>
                                    </div>
                                </div>

                                <div className="card-actions">
                                    <button
                                        className="btn-card primary"
                                        onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc.address)}`, '_blank')}
                                    >
                                        <FaPaperPlane style={{ marginRight: '8px' }} /> Route planen
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <style jsx>{`
        .main-content {
            padding-top: 80px;
            min-height: 100vh;
            background: var(--bg-dark);
        }
        .store-locator {
          background: rgba(255, 87, 34, 0.03);
          padding: 60px 0;
        }
        .branches-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .location-card {
          padding: 2rem;
          border-radius: 20px;
          transition: var(--transition);
          position: relative;
          border: 1px solid var(--glass-border);
          background: rgba(255, 255, 255, 0.02);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .location-card:hover {
          background: rgba(255, 255, 255, 0.05);
          transform: translateY(-5px);
          border-color: var(--primary);
        }

        .card-header {
          display: flex;
          align-items: flex-start;
          gap: 1.2rem;
          margin-bottom: 2rem;
        }

        .card-title-group h3 {
          font-size: 1.1rem;
          margin-bottom: 0.3rem;
          color: white;
        }

        .card-address {
          font-size: 0.85rem !important;
          color: var(--text-muted) !important;
          margin-left: 0 !important;
          line-height: 1.4;
        }

        .store-icon {
          color: var(--primary);
          font-size: 1.4rem;
          margin-top: 3px;
        }

        .card-actions {
          display: flex;
          gap: 0.8rem;
        }

        .btn-card {
          flex: 1;
          padding: 0.7rem;
          border-radius: 12px;
          font-size: 0.85rem;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition);
        }

        .btn-card.primary {
          background: var(--primary);
          border: none;
          color: white;
        }

        .btn-card:hover {
          transform: scale(1.02);
        }
      `}</style>
        </main>
    );
}
