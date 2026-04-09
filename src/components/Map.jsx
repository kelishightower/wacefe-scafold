import React from 'react';

export default function MapComponent() {
  return (
    <section className="panel panel-map">
      <div className="panel-header align-start">
        <div className="stack-sm">
          <p className="eyebrow">county map + data</p>
          <h3 className="panel-title">placeholder for washington county map</h3>
          <p className="section-copy compact-copy">
            This section will hold the Washington county map, metric toggles, and county hover data once your team is ready to plug in the real content.
          </p>
        </div>
      </div>

      <div className="simple-placeholder simple-placeholder-map">
        <span className="placeholder-tag">map will go here</span>
      </div>
    </section>
  );
}
