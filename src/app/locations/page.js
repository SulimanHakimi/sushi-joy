'use client';

import React, { useState, useMemo } from 'react';
import dynamic from 'next/dynamic';
import { FaStore, FaPaperPlane, FaMapMarkerAlt, FaClock, FaPhoneAlt, FaExternalLinkAlt } from 'react-icons/fa';

// Dynamically import the map component with SSR disabled
const MapWrapper = dynamic(() => import('@/components/MapWrapper'), { ssr: false });

export default function Locations() {
    const [selectedId, setSelectedId] = useState(null);

    const locations = [
        {
            id: 1,
            city: 'Oelde',
            name: 'Sushi Joy @ Marktkauf',
            address: 'Warendorferstr. 16, 59302 Oelde, Germany',
            lat: 51.8262,
            lng: 8.1364,
            hours: 'Mo-Sa: 07:00 - 21:00 Uhr',
            phone: '+49 2522 123456'
        },
        {
            id: 2,
            city: 'Erwitte',
            name: 'Sushi Joy @ EDEKA',
            address: 'Wemberweg 4, 59597 Erwitte, Germany',
            lat: 51.6119,
            lng: 8.3325,
            hours: 'Mo-Sa: 07:00 - 21:00 Uhr',
            phone: '+49 2943 987654'
        },
        {
            id: 3,
            city: 'Paderborn',
            name: 'Sushi Joy @ Kaufland',
            address: 'Alisostraße 2, 33106 Paderborn, Germany',
            lat: 51.7348,
            lng: 8.7067,
            hours: 'Mo-Sa: 07:00 - 22:00 Uhr',
            phone: '+49 5251 555666'
        },
        {
            id: 4,
            city: 'Ahlen',
            name: 'Sushi Joy @ Rewe',
            address: 'Gebrüder-kerkmann-Platz 4, 59227 Ahlen, Germany',
            lat: 51.7618,
            lng: 7.8925,
            hours: 'Mo-Sa: 07:00 - 21:00 Uhr',
            phone: '+49 2382 444333'
        },
        {
            id: 5,
            city: 'Sendenhorst',
            name: 'Sushi Joy @ EDEKA',
            address: 'Osttor 26, 48234 Sendenhorst, Germany',
            lat: 51.8447,
            lng: 7.8285,
            hours: 'Mo-Sa: 07:00 - 20:00 Uhr',
            phone: '+49 2526 111222'
        },
        {
            id: 6,
            city: 'Sassenberg',
            name: 'Sushi Joy @ Marktkauf',
            address: 'Von Galen-Straße 21, 48336 Sassenberg, Germany',
            lat: 51.9897,
            lng: 8.0416,
            hours: 'Mo-Sa: 08:00 - 21:00 Uhr',
            phone: '+49 2583 999888'
        },
    ];

    const selectedLocation = useMemo(() =>
        locations.find(l => l.id === selectedId) || null,
        [selectedId]);

    return (
        <main className="main-content">
            <section className="locations-layout">
                <div className="container grid-layout">
                    {/* Left Side: Map List */}
                    <div className="list-panel glass">
                        <div className="panel-header">
                            <h2>Unsere Standorte</h2>
                            <p>Premium Sushi in Ihrer Nähe</p>
                        </div>

                        <div className="locations-list-scroll">
                            {locations.map(loc => (
                                <div
                                    key={loc.id}
                                    className={`location-item ${selectedId === loc.id ? 'active' : ''}`}
                                    onClick={() => setSelectedId(loc.id)}
                                >
                                    <div className="item-content">
                                        <div className="item-header">
                                            <h3>{loc.city}</h3>
                                            <span className="badge">{loc.name.split('@')[1] || 'Supermarkt'}</span>
                                        </div>
                                        <p className="address">{loc.address}</p>
                                        <div className="meta-info">
                                            <span><FaClock className="icon" /> {loc.hours}</span>
                                            {/* <span><FaPhoneAlt className="icon" /> {loc.phone}</span> */}
                                        </div>
                                    </div>
                                    <button
                                        className="btn-route"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc.address)}`, '_blank');
                                        }}
                                        title="Route planen"
                                    >
                                        <FaPaperPlane />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Interactive Map */}
                    <div className="map-panel glass">
                        <MapWrapper
                            locations={locations}
                            selectedLocation={selectedLocation}
                            onSelectLocation={setSelectedId}
                        />
                    </div>
                </div>
            </section>

            <style jsx>{`
                .main-content {
                    background: var(--bg-dark);
                    min-height: 100vh;
                    padding-top: 80px;
                    display: flex;
                    flex-direction: column;
                }

                .locations-layout {
                    flex: 1;
                    padding: 2rem 0;
                    height: calc(100vh - 80px); /* Full viewport height minus nav */
                    min-height: 600px;
                }

                .grid-layout {
                    display: grid;
                    grid-template-columns: 400px 1fr;
                    gap: 2rem;
                    height: 100%;
                }

                /* List Panel */
                .list-panel {
                    border-radius: 20px;
                    border: 1px solid var(--glass-border);
                    background: rgba(20, 20, 20, 0.6);
                    backdrop-filter: blur(10px);
                    display: flex;
                    flex-direction: column;
                    overflow: hidden;
                }

                .panel-header {
                    padding: 2rem;
                    border-bottom: 1px solid var(--glass-border);
                    background: rgba(255, 255, 255, 0.02);
                }

                .panel-header h2 {
                    font-size: 2rem;
                    color: white;
                    margin-bottom: 0.5rem;
                }

                .panel-header p {
                    color: var(--primary);
                    font-weight: 500;
                }

                .locations-list-scroll {
                    flex: 1;
                    overflow-y: auto;
                    padding: 1rem;
                }

                /* Custom Scrollbar */
                .locations-list-scroll::-webkit-scrollbar {
                    width: 6px;
                }
                .locations-list-scroll::-webkit-scrollbar-thumb {
                    background: var(--glass-border);
                    border-radius: 10px;
                }
                .locations-list-scroll::-webkit-scrollbar-track {
                    background: transparent;
                }

                .location-item {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 1.2rem;
                    margin-bottom: 1rem;
                    border-radius: 12px;
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid transparent; /* invisible border */
                    transition: all 0.2s ease;
                    cursor: pointer;
                }

                .location-item:hover {
                    background: rgba(255, 255, 255, 0.06);
                }

                .location-item.active {
                    background: rgba(255, 87, 34, 0.1);
                    border-color: var(--primary);
                }

                .item-content {
                    flex: 1;
                }

                .item-header {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    margin-bottom: 0.3rem;
                }

                .item-header h3 {
                    font-size: 1.1rem;
                    color: white;
                    margin: 0;
                }

                .badge {
                    font-size: 0.7rem;
                    padding: 2px 6px;
                    border-radius: 4px;
                    background: rgba(255, 255, 255, 0.1);
                    color: var(--text-muted);
                }

                .address {
                    font-size: 0.9rem;
                    color: var(--text-muted);
                    margin-bottom: 0.5rem;
                    line-height: 1.4;
                }

                .meta-info {
                    display: flex;
                    gap: 1rem;
                    font-size: 0.8rem;
                    color: var(--text-muted);
                }

                .meta-info span {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                }

                .icon {
                    color: var(--primary);
                }

                .btn-route {
                    background: rgba(255, 255, 255, 0.1);
                    border: none;
                    color: white;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    margin-left: 1rem;
                    transition: all 0.2s ease;
                }

                .btn-route:hover {
                    background: var(--primary);
                    transform: scale(1.1);
                }

                /* Map Panel */
                .map-panel {
                    border-radius: 20px;
                    overflow: hidden;
                    border: 1px solid var(--glass-border);
                    /* height: 100%; handled by grid */
                    position: relative;
                }

                @media (max-width: 1024px) {
                    .grid-layout {
                        grid-template-columns: 1fr;
                        grid-template-rows: auto 500px;
                        height: auto;
                    }
                    .locations-layout {
                        height: auto;
                    }
                    .list-panel {
                        max-height: 500px;
                    }
                }
            `}</style>
        </main>
    );
}
