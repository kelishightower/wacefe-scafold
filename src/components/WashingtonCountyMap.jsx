import React, { useRef } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import counties from '../data/wa-counties.json';

export default function WashingtonCountyMap() {
  const geoJsonRef = useRef();

  function styleFeature() {
    return {
      fillColor: '#bdd7e7',
      weight: 1,
      color: '#2171b5',
      fillOpacity: 0.6
    };
  }

  function onEachFeature(feature, layer) {
    const countyName = feature.properties.NAME;

    layer.bindTooltip(countyName, { sticky: true });

    layer.on({
      mouseover: (e) => e.target.setStyle({ fillOpacity: 1, weight: 2 }),
      mouseout: (e) => geoJsonRef.current?.resetStyle(e.target)
    });
  }

  return (
    <MapContainer
      center={[47.4, -120.5]}
      zoom={6}
      style={{ height: '420px', width: '100%', zIndex: 200 }}
    >
      <TileLayer
        attribution="© OpenStreetMap"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <GeoJSON
        ref={geoJsonRef}
        data={counties}
        style={styleFeature}
        onEachFeature={onEachFeature}
      />
    </MapContainer>
  );
}