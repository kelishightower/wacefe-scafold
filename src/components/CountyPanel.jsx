const [selectedCounty, setSelectedCounty] = useState(null);

function onEachFeature(feature, layer) {
  layer.on({
    click: () => setSelectedCounty(feature.properties),
    mouseover: (e) => e.target.setStyle({ fillOpacity: 1, weight: 2 }),
    mouseout: (e) => geoJsonRef.current?.resetStyle(e.target),
  });
}

{selectedCounty && (
  <div className="detail-panel">
    <h3>{selectedCounty.NAME} County</h3>
    <div className="stat-row">
      <span>Median income</span>
      <span>${selectedCounty.income?.toLocaleString()}</span>
    </div>
    <div className="stat-row">
      <span>Poverty rate</span>
      <span>{selectedCounty.poverty?.toFixed(1)}%</span>
    </div>
    <div className="stat-row">
      <span>Gini index</span>
      <span>{selectedCounty.gini?.toFixed(3)}</span>
    </div>
  </div>
)}