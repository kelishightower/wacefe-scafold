import React, { useState } from 'react';
import Slider from '../components/Slider';
import MapComponent from '../components/Map';
import ExpandableSection from '../components/ExpandableSection';
import ComparisonTool from '../components/ComparisonTool';
import Toolkit from '../components/Toolkit';
import DefinitionTooltip from '../components/DefinitionTooltip';

export default function Dashboard() {
  const [sliderValue, setSliderValue] = useState(2010);

  return (
    <div className="pt-16">
      <section id="introduction" className="min-h-screen p-8 bg-purple-50">
        <h1 className="text-3xl font-bold">Introduction</h1>
        <p className="mt-4">
          First, let’s begin with your thoughts… what do you think the median
          income is for the wealthiest 10% of WA residents? the other 90%?
        </p>
        <div className="mt-6">
          <Slider
            min={2000}
            max={2020}
            step={1}
            value={sliderValue}
            onChange={setSliderValue}
          />
          <p className="text-sm text-gray-600 mt-1">
            (slider is just a placeholder – imagine it changes a chart here)
          </p>
        </div>
      </section>

      <section id="current-state" className="min-h-screen p-8 bg-purple-100">
        <h2 className="text-2xl font-bold mb-4">Current State</h2>
        <MapComponent />
      </section>

      <section id="history" className="min-h-screen p-8 bg-purple-200">
        <h2 className="text-2xl font-bold mb-4">Economic &amp; Social Histories</h2>
        <ExpandableSection title="Systemic Inequality">
          <p>Placeholder text about systemic inequality.</p>
        </ExpandableSection>
        <ExpandableSection title="Housing">
          <p>Placeholder text about housing policies.</p>
        </ExpandableSection>
        <ExpandableSection title="Education">
          <p>Placeholder text about education.</p>
        </ExpandableSection>
      </section>

      <section id="comparison" className="min-h-screen p-8 bg-purple-300">
        <h2 className="text-2xl font-bold mb-4">Wealth Comparisons</h2>
        <ComparisonTool />
      </section>

      <section id="toolkit" className="min-h-screen p-8 bg-purple-400">
        <h2 className="text-2xl font-bold mb-4">Toolkit for an Equitable Future</h2>
        <Toolkit />
      </section>
    </div>
  );
}
