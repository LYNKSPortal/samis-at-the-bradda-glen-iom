'use client';

import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icons in React-Leaflet
const icon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

export default function Map() {
  // Bradda Glen, Port Erin coordinates
  const position: [number, number] = [54.091629, -4.764755];

  useEffect(() => {
    // Fix for Leaflet in Next.js
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
      iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    });
  }, []);

  return (
    <MapContainer
      center={position}
      zoom={15}
      scrollWheelZoom={false}
      style={{ height: '100%', width: '100%', borderRadius: '0.5rem' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={icon}>
        <Popup>
          <strong>Samis at the Bradda Glen</strong>
          <br />
          Bradda Glen, Port Erin
          <br />
          IM9 6PJ, Isle of Man
        </Popup>
      </Marker>
      <Marker position={position} icon={L.divIcon({
        className: 'custom-label',
        html: '<div style="background: white; padding: 8px 16px; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.2); font-weight: 600; color: #3F79A8; white-space: nowrap; font-size: 14px; border: 2px solid #3F79A8; display: inline-block;">We are here!</div>',
        iconSize: [120, 40],
        iconAnchor: [60, 85]
      })} />
    </MapContainer>
  );
}
