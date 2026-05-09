import React from 'react';
import WashingtonCountyMap from './WashingtonCountyMap'

export default function MapComponent() {
  return (
    <section className="showcase-item stacked">
      <div className="stack-sm showcase-copy">
        <p className="eyebrow">interactive map</p>
        <h3 className="panel-title">compare place, opportunity, and access</h3>
        <p className="section-copy compact-copy">
          Geographical data helps us see patterns that are hard to notice in our everyday lives as Washington residents. We can see where incomes are higher or lower, where home ownership is common and rare, and where educational opportunities vary. What local history, policy, or access to resources might help explain the patterns?
        </p>
      </div>

      <div className="panel panel-map showcase-panel">
        <div className="panel-header align-start">
          <div className="stack-sm map-panel-intro">
            {/*<p className="eyebrow">county data</p>*/}
            <h3 className="panel-title">washington county map</h3>
            <p className="section-copy compact-copy">
              Over the WA counties compare: income, poverty, school funding, and the gini index. What do you notice?
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
