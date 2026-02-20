'use client';

import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEffect } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { renderToStaticMarkup } from 'react-dom/server';

// Recenter map when selected location changes
function RecenterMap({ lat, lng }) {
    const map = useMap();
    useEffect(() => {
        if (lat && lng) {
            map.setView([lat, lng], 13, {
                animate: true,
            });
        }
    }, [lat, lng, map]);
    return null;
}

// Custom specialized icon
const CreateIcon = () => {
    const iconMarkup = renderToStaticMarkup(
        <div style={{ color: '#ff5722', fontSize: '2rem', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))' }}>
            <FaMapMarkerAlt />
        </div>
    );

    return L.divIcon({
        html: iconMarkup,
        className: 'custom-marker-icon',
        iconSize: [30, 42],
        iconAnchor: [15, 42],
        popupAnchor: [0, -40],
    });
};

export default function MapWrapper({ locations, selectedLocation, onSelectLocation }) {
    // Center on NRW cluster initially, or Germany if broad
    const defaultCenter = [51.7, 8.2]; // Centered on the cluster
    const defaultZoom = 9;

    return (
        <MapContainer
            center={defaultCenter}
            zoom={defaultZoom}
            style={{ height: '100%', width: '100%', borderRadius: '20px', zIndex: 0 }}
            zoomControl={false}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
            />

            {locations.map((loc) => (
                <Marker
                    key={loc.id}
                    position={[loc.lat, loc.lng]}
                    icon={CreateIcon()}
                    eventHandlers={{
                        click: () => onSelectLocation(loc.id),
                    }}
                >
                    <Popup className="glass-popup">
                        <div style={{ padding: '5px', textAlign: 'center' }}>
                            <h3 style={{ margin: '0 0 5px', fontSize: '1rem', color: '#ff5722' }}>{loc.city}</h3>
                            <p style={{ margin: 0, fontSize: '0.8rem', color: '#333' }}>{loc.name}</p>
                            <p style={{ margin: '5px 0 0', fontSize: '0.75rem', color: '#666' }}>{loc.hours}</p>
                        </div>
                    </Popup>
                </Marker>
            ))}

            {selectedLocation && (
                <RecenterMap lat={selectedLocation.lat} lng={selectedLocation.lng} />
            )}
        </MapContainer>
    );
}
