import React from 'react';

/*
const counties = ['King', 'Pierce', 'Snohomish', 'Spokane', 'Yakima'];
const layers = ['Median Income', 'Race/Ethnicity', 'Education', 'Homeownership', 'School Funding'];

const metrics = {
  King: { income: '$124,500', homeownership: '61%', schoolFunding: '$17,200/student' },
  Pierce: { income: '$93,200', homeownership: '65%', schoolFunding: '$14,900/student' },
  Snohomish: { income: '$110,800', homeownership: '71%', schoolFunding: '$15,300/student' },
  Spokane: { income: '$78,400', homeownership: '63%', schoolFunding: '$13,700/student' },
  Yakima: { income: '$67,900', homeownership: '58%', schoolFunding: '$12,400/student' }
};
*/

export default function MapComponent() {
  /*
  // state variables for currently selected county and layer
  const [selectedCounty, setSelectedCounty] = useState(counties[0]);
  const [selectedLayer, setSelectedLayer] = useState(layers[0]);

  // compute the bar values for the current layer. We use useMemo to avoid
  // recalculating when `selectedLayer` hasn't changed. In a beginner-friendly
  // version we could compute this on every render without harm, but the memo
  // demonstrates the pattern.
  const barValues = useMemo(function () {
    const mapping = {
      'Median Income': [90, 76, 84, 63, 55],
      'Race/Ethnicity': [62, 74, 59, 52, 47],
      Education: [88, 71, 82, 66, 58],
      Homeownership: [61, 65, 71, 63, 58],
      'School Funding': [86, 73, 75, 68, 62]
    };
    // look up the current layer's array
    return mapping[selectedLayer];
  }, [selectedLayer]);

  // handlers for dropdown changes
  function handleCountyChange(event) {
    setSelectedCounty(event.target.value);
  }

  function handleLayerChange(event) {
    setSelectedLayer(event.target.value);
  }
  */

  return (
    <section className="panel panel-map">
      <div className="panel-header">
        <div>
          <p className="eyebrow">Map placeholder</p>
          <h3 className="panel-title">Washington State Map (Mockup)</h3>
        </div>
      </div>

      <div className="map-grid" style={{ gap: '1rem', alignItems: 'flex-start' }}>
        <div
          className="map-canvas"
          style={{
            border: '2px dashed #888',
            minHeight: '280px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#fafafa',
            color: '#333'
          }}
        >
          <strong style={{ fontSize: '1.1rem' }}>Map will go here</strong>
          <p style={{ margin: '0.35rem 0 0', fontSize: '0.83rem', color: '#777' }}>
            (Compressed placeholder for embedded site) 
          </p>
        </div>

        <aside className="stats-card" style={{ minWidth: '220px' }}>
          <h4>Toggle options (mockup)</h4>
          <label style={{ display: 'block', margin: '0.4rem 0' }}>
            <input type="checkbox" defaultChecked /> Show income layer
          </label>
          <label style={{ display: 'block', margin: '0.4rem 0' }}>
            <input type="checkbox" defaultChecked /> Show population layer
          </label>
          <label style={{ display: 'block', margin: '0.4rem 0' }}>
            <input type="checkbox" /> Show school funding layer
          </label>
        </aside>
      </div>

      {/*
      Legacy detailed map panel (commented out per request):
      - county/layer dropdown controls
      - region bubble decorations
      - stats card and comparison bars

      [original code is still present above, now reduced to plain placeholder]
      */}
    </section>
  );
}
