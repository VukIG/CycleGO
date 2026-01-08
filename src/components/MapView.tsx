import React, { useState } from 'react';
import { MapContainer, TileLayer, Polyline, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { Layers } from 'lucide-react';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
// Fix Leaflet icons
let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;
// Morning Commute Path (Blue)
const morningCommutePath: [number, number][] = [[51.505, -0.09], [51.506, -0.092], [51.507, -0.094], [51.508, -0.096], [51.509, -0.098], [51.51, -0.1], [51.512, -0.102], [51.514, -0.1], [51.515, -0.09]];
// EuroVelo Routes
const euroVeloRoutes = [{
  id: 'EV1',
  name: 'Atlantic Coast Route',
  color: '#F59E0B',
  path: [[51.505, -0.09], [51.51, -0.1], [51.52, -0.12]]
}, {
  id: 'EV6',
  name: 'Atlantic-Black Sea',
  color: '#F59E0B',
  path: [[51.515, -0.09], [51.52, -0.08], [51.53, -0.07]]
}];
// Saved Places with Images
const savedPlaces = [{
  id: 1,
  name: 'Hidden Waterfall',
  note: 'Great spot for lunch',
  pos: [51.51, -0.095],
  icon: 'water',
  image: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=400&h=300&fit=crop'
}, {
  id: 2,
  name: 'Sunset Ridge',
  note: 'Best view at 7pm',
  pos: [51.508, -0.092],
  icon: 'mountain',
  image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop'
}, {
  id: 3,
  name: 'Old Mill Cafe',
  note: 'Amazing coffee stop',
  pos: [51.513, -0.098],
  icon: 'cafe',
  image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop'
}];
export function MapView({
  showEuroVelo = false,
  onToggleEuroVelo
}: {
  showEuroVelo?: boolean;
  onToggleEuroVelo?: () => void;
}) {
  return <div className="absolute inset-0 z-0 bg-[#0F1419]">
      <MapContainer center={[51.51, -0.095]} zoom={14} scrollWheelZoom={true} zoomControl={false} className="w-full h-full" style={{
      background: '#0F1419'
    }}>
        {/* Dark Tiles */}
        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" />

        {/* Morning Commute Path (Blue) */}
        <Polyline positions={morningCommutePath} pathOptions={{
        color: '#0EA5E9',
        weight: 4,
        opacity: 0.8,
        lineCap: 'round'
      }} />

        {/* EuroVelo Layer */}
        {showEuroVelo && euroVeloRoutes.map(route => <Polyline key={route.id} positions={route.path as [number, number][]} pathOptions={{
        color: route.color,
        weight: 4,
        opacity: 0.8,
        dashArray: '10, 10',
        lineCap: 'round'
      }}>
              <Popup>
                <div className="text-sm font-bold text-amber-500">
                  {route.id}
                </div>
                <div className="text-xs text-slate-300">{route.name}</div>
              </Popup>
            </Polyline>)}

        {/* Saved Places with Images */}
        {savedPlaces.map(place => <Marker key={place.id} position={place.pos as [number, number]}>
            <Popup maxWidth={300}>
              <div className="p-2">
                <img src={place.image} alt={place.name} className="w-full h-32 object-cover rounded-lg mb-2" />
                <div className="font-bold text-emerald-400 mb-1">
                  {place.name}
                </div>
                <div className="text-xs text-slate-400">{place.note}</div>
              </div>
            </Popup>
          </Marker>)}
      </MapContainer>

      {/* Map Controls */}
      <div className="absolute top-20 right-4 flex flex-col gap-2 z-[400]">
        <button onClick={onToggleEuroVelo} className={`p-3 rounded-full backdrop-blur-md border transition-colors ${showEuroVelo ? 'bg-amber-500/20 border-amber-500 text-amber-500' : 'bg-slate-900/80 border-white/10 text-slate-400'}`}>
          <Layers size={20} />
        </button>
      </div>

      {/* Vignette */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(15,20,25,0.6)_100%)] z-[400]" />
    </div>;
}