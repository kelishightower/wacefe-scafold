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
    return value > 12   ? '#a50f15' :
           value > 9   ? '#de2d26' :
           value > 6   ? '#fb6a4a' :
           value > 3   ? '#fcae91' : '#fee5d9';
  }
  if (layer === 'schoolFunding') {
    return value > 18000 ? '#1b9e77' :
           value > 17000 ? '#66c2a5' :
           value > 16000 ? '#b3e2cd' :
           value > 15000 ? '#e0f3db' : '#f7fcfd';
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
  const [selectedCounty, setSelectedCounty] = useState(null);

  function getLayerLabel(layer) {
    return {
      income: 'Median income',
      poverty: 'Poverty rate',
      schoolFunding: 'School funding',
      gini: 'Gini index'
    }[layer] || layer;
  }

  function formatLayerValue(layer, value) {
    if (value === null || value === undefined) return 'No data';
    if (layer === 'income' || layer === 'schoolFunding') {
      return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value);
    }
    if (layer === 'poverty') {
      return `${value}%`;
    }
    return value.toFixed(2);
  }

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
      click:     ()  => {
        const props = feature.properties;
        setSelectedCounty(props);
        if (onCountyClick) {
          onCountyClick(props);
        }
      },
    });
  }

  // Legend data for each layer
  const legendData = {
    income: {
      title: 'median income',
      source: {
        text: 'United States Census Bureau - median household income',
        url: 'https://data.census.gov/table/ACSDT5Y2023.B19013?q=B19013:+Median+Household+Income+in+the+Past+12+Months+(in+2024+Inflation-Adjusted+Dollars)&g=040XX00US53$0500000'
      },
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
      source: {
        text: 'National Institute on Minority Health and Health Disparities - Washington poverty data',
        url: 'https://hdpulse.nimhd.nih.gov/data-portal/social/table?age=001&age_options=ageall_1&demo=00007&demo_options=poverty_3&race=00&race_options=race_7&sex=0&sex_options=sexboth_1&socialtopic=080&socialtopic_options=social_6&statefips=53&statefips_options=area_states'
      },
      items: [
        { color: '#a50f15', label: '>20%' },
        { color: '#de2d26', label: '16% - 20%' },
        { color: '#fb6a4a', label: '13% - 16%' },
        { color: '#fcae91', label: '10% - 13%' },
        { color: '#fee5d9', label: '<10%' }
      ]
    },
    schoolFunding: {
      title: 'Per-Pupil School Funding',
      source: {
        text: 'Washington Office of Superintendent of Public Instruction - per-pupil funding',
        url: 'https://drive.google.com/file/d/1eTELTe5o-eexdYw-QX_C_cM3Qn1GD-UT/view'
      },
      items: [
        { color: '#1b9e77', label: '>$18,000' },
        { color: '#66c2a5', label: '$17,000 - $18,000' },
        { color: '#b3e2cd', label: '$16,000 - $17,000' },
        { color: '#e0f3db', label: '$15,000 - $16,000' },
        { color: '#f7fcfd', label: '<$15,000' }
      ]
    },
    gini: {
      title: 'Gini Index',
      source: {
        text: 'United States Census Bureau - gini index',
        url: 'https://data.census.gov/table?q=washington+state+county+gini'
      },
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
    <div className="county-map-layout">
      <div className="county-map-sidebar">
        <div className="layer-toggle">
          {['income', 'poverty', 'schoolFunding', 'gini'].map(layer => (
            <button
              key={layer}
              className={activeLayer === layer ? 'toggle active' : 'toggle'}
              onClick={() => setActiveLayer(layer)}
            >
              {{ income: 'Median income', poverty: 'Poverty rate', schoolFunding: 'School funding', gini: 'Gini index' }[layer]}
            </button>
          ))}
        </div>

        <div className="county-map-legend">
          <h4>
            {legendData[activeLayer].title}
          </h4>
          {legendData[activeLayer].items.map((item, index) => (
            <div key={index} className="county-map-legend-row">
              <span className="county-map-swatch" style={{ backgroundColor: item.color }} />
              <span>{item.label}</span>
            </div>
          ))}
        </div>

        <div className="county-map-selected">
          <h4>selected county</h4>
          {selectedCounty ? (
            <>
              <p className="selected-county-name">{selectedCounty.JURISDICT_LABEL_NM}</p>
              <p className="selected-county-stat">
                {getLayerLabel(activeLayer)}: {formatLayerValue(activeLayer, selectedCounty[activeLayer])}
              </p>
            </>
          ) : (
            <p className="selected-county-placeholder">Click a county to view its statistic.</p>
          )}
        </div>
      </div>

      <div className="county-map-canvas">
        <MapContainer center={[47.4, -120.5]} zoom={6} className="leaflet-map">
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
        <p className="county-map-source" style={{ marginTop: '0.75rem', fontSize: '0.9rem', color: 'var(--muted)' }}>
          Data source: <a href={legendData[activeLayer].source.url} target="_blank" rel="noreferrer">{legendData[activeLayer].source.text}</a>.
        </p>
      </div>
    </div>
  );
}
