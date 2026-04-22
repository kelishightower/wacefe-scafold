import React, { useRef, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import counties from '../data/wa-counties.json';
import countyData from '../data/county-data.js';

// Color scales for each layer - adjust thresholds and colors as needed
function getColor(value, layer) {
  if (!value) return '#ccc';
  if (layer === 'income') {
    return value > 90000 ? '#084594' :
           value > 75000 ? '#2171b5' :
           value > 65000 ? '#4292c6' :
           value > 55000 ? '#9ecae1' : '#deebf7';
  }
  if (layer === 'poverty') {
    return value > 20   ? '#a50f15' :
           value > 16   ? '#de2d26' :
           value > 13   ? '#fb6a4a' :
           value > 10   ? '#fcae91' : '#fee5d9';
  }
  return value > 0.46 ? '#a50f15' :
         value > 0.44 ? '#de2d26' :
         value > 0.43 ? '#fb6a4a' :
         value > 0.42 ? '#fcae91' : '#fee5d9';
}

// Merge data into the GeoJSON once at the top level
const enrichedCounties = {
  ...counties,
  features: counties.features.map(f => ({
    ...f,
    properties: {
      ...f.properties,
      ...countyData[f.properties.JURISDICT_LABEL_NM] || {}
    }
  }))
};

export default function WashingtonCountyMap({ onCountyClick }) {
  const geoJsonRef = useRef();
  const [activeLayer, setActiveLayer] = useState('income');

  function styleFeature(feature) {
    const val = feature.properties[activeLayer];
    return {
      fillColor: getColor(val, activeLayer),
      weight: 1,
      color: '#fff',
      fillOpacity: 0.75,
    };
  }

  // Washington county-level interactivity
  function onEachFeature(feature, layer) {
    const name = feature.properties.JURISDICT_LABEL_NM;
    layer.bindTooltip(name, { sticky: true });
    layer.on({
      mouseover: (e) => e.target.setStyle({ fillOpacity: 1, weight: 2 }),
      mouseout:  (e) => geoJsonRef.current?.resetStyle(e.target),
      click:     ()  => onCountyClick(feature.properties), // ← sends data up
    });
  }

  // Legend data for each layer
  const legendData = {
    income: {
      title: 'Median Income',
      items: [
        { color: '#084594', label: '>$90,000' },
        { color: '#2171b5', label: '$75,000 - $90,000' },
        { color: '#4292c6', label: '$65,000 - $75,000' },
        { color: '#9ecae1', label: '$55,000 - $65,000' },
        { color: '#deebf7', label: '<$55,000' }
      ]
    },
    poverty: {
      title: 'Poverty Rate (%)',
      items: [
        { color: '#a50f15', label: '>20%' },
        { color: '#de2d26', label: '16% - 20%' },
        { color: '#fb6a4a', label: '13% - 16%' },
        { color: '#fcae91', label: '10% - 13%' },
        { color: '#fee5d9', label: '<10%' }
      ]
    },
    gini: {
      title: 'Gini Index',
      items: [
        { color: '#a50f15', label: '>0.46' },
        { color: '#de2d26', label: '0.44 - 0.46' },
        { color: '#fb6a4a', label: '0.43 - 0.44' },
        { color: '#fcae91', label: '0.42 - 0.43' },
        { color: '#fee5d9', label: '<0.42' }
      ]
    }
  };

  return (
    <div style={{ position: 'relative', display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
      {/* Left sidebar with toggle buttons and legend */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', flexShrink: 0 }}>
        {/* Toggle buttons stacked vertically */}
        <div className="layer-toggle" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {['income', 'poverty', 'gini'].map(layer => (
            <button
              key={layer}
              className={activeLayer === layer ? 'toggle active' : 'toggle'}
              onClick={() => setActiveLayer(layer)}
              style={{ width: '100%', padding: '10px', textAlign: 'left' }}
            >
              {{ income: 'Median income', poverty: 'Poverty rate', gini: 'Gini index' }[layer]}
            </button>
          ))}
        </div>

        {/* Legend */}
        <div style={{
          background: 'white',
          padding: '15px',
          borderRadius: '5px',
          boxShadow: '0 0 10px rgba(0,0,0,0.1)',
          fontSize: '12px',
          minWidth: '200px'
        }}>
          <h4 style={{ margin: '0 0 10px 0', fontSize: '14px', fontWeight: 'bold' }}>
            {legendData[activeLayer].title}
          </h4>
          {legendData[activeLayer].items.map((item, index) => (
            <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '6px' }}>
              <div style={{
                width: '18px',
                height: '18px',
                backgroundColor: item.color,
                marginRight: '8px',
                border: '1px solid #ccc',
                flexShrink: 0
              }}></div>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Map on the right */}
      <div style={{ flex: 1, position: 'relative' }}>
        <MapContainer center={[47.4, -120.5]} zoom={6} style={{ height: '350px', width: '100%', zIndex: 200 }}>
          <TileLayer
            attribution="© OpenStreetMap"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {/* important: forces re-render on layer change */}
          <GeoJSON
            key={activeLayer}
            ref={geoJsonRef}
            data={enrichedCounties}
            style={styleFeature}
            onEachFeature={onEachFeature}
          />
        </MapContainer>
      </div>
    </div>
  );
}