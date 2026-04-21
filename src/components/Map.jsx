import React from 'react';
import WashingtonCountyMap from './WashingtonCountyMap'

export default function MapComponent() {
  return (
    <section className="showcase-item stacked">
      <div className="stack-sm showcase-copy">
        <p className="eyebrow">how to use this map</p>
        <h3 className="panel-title">Help students compare place, opportunity, and access</h3>
        <p className="section-copy compact-copy">
          This area could explain what students should compare across counties, such as income, housing pressure, or school-related opportunity. It is also a good place to prompt them to ask why nearby places can have very different outcomes and what local history or policy might help explain those differences.
        </p>
      </div>

      <div className="panel panel-map showcase-panel">
        <div className="panel-header align-start">
          <div className="stack-sm">
            <p className="eyebrow">county map + data</p>
            <h3 className="panel-title">Washington county map</h3>
            <p className="section-copy compact-copy">
              This section will hold the Washington county map, metric toggles, and county hover data once your team is ready to plug in the real content.
            </p>
          </div>
        </div>

          <WashingtonCountyMap />

      </div>
    </section>
  );
}
