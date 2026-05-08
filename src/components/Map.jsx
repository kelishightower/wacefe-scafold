import React from 'react';
import WashingtonCountyMap from './WashingtonCountyMap'

export default function MapComponent() {
  return (
    <section className="showcase-item stacked">
      <div className="stack-sm showcase-copy">
        <p className="eyebrow">county data</p>
        <h3 className="panel-title">compare place, opportunity, and access</h3>
        <p className="section-copy compact-copy">
          Use the map to compare counties by income, housing pressure, or school-related opportunity. Nearby places can have very different outcomes, so ask what local history, policy, or access to investment might help explain the pattern.
        </p>
      </div>

      <div className="panel panel-map showcase-panel">
        <div className="panel-header align-start">
          <div className="stack-sm map-panel-intro">
            <p className="eyebrow">county map + data</p>
            <h3 className="panel-title">washington county map</h3>
            <p className="section-copy compact-copy">
              Click a county to explore the available data. Use the layer controls to compare more than one kind of opportunity at a time.
            </p>
          </div>
        </div>

          <WashingtonCountyMap />
          <p className="chart-caption">
            Caption: County-level data can show geographic patterns, but it does not explain every individual experience. Treat large differences as a starting point for questions about jobs, housing, school funding, public investment, and local history.
          </p>

      </div>
    </section>
  );
}
