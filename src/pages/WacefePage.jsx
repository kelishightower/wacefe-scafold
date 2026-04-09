import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Map from '../components/Map';
import ComparisonTool from '../components/ComparisonTool';
import Toolkit from '../components/Toolkit';
import ExpandableSection from '../components/ExpandableSection';
import QuickFactsFlow from '../components/QuickFactsFlow';

const studentPrompts = [
  'What becomes easier for a family when they have savings, home equity, or inherited wealth?',
  'If two counties have very different school funding and incomes, what opportunities might students experience differently?',
  'When a statistic looks abstract, who in real life could be affected by that number?'
];

function ReflectionPrompts() {
  return (
    <div className="panel reflection-panel">
      <div className="panel-header">
        <h3 className="panel-title">reflection questions</h3>
      </div>
      <div className="prompt-list">
        {studentPrompts.map(function (prompt) {
          return (
            <div key={prompt} className="prompt-card">
              <span className="prompt-label">think about this</span>
              <p>{prompt}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function IncomeGuessCard() {
  const [incomeEstimate, setIncomeEstimate] = useState(270000);
  const [showAnswer, setShowAnswer] = useState(false);
  const actualTopTenIncome = 400000;

  const sliderPercent = (incomeEstimate / 500000) * 100;

  function handleIncomeChange(event) {
    setIncomeEstimate(Number(event.target.value));
  }

  return (
    <div className="panel guess-panel">
      <div className="stack-sm">
        <p className="eyebrow">student estimate</p>
        <h3 className="panel-title">
          What do you think the average income is for the top 10% of Washington residents?
        </h3>
        <p className="section-copy compact-copy">
          Let students guess first, then reveal the real comparison. Placeholder numbers are here so you can swap in confirmed data later.
        </p>
      </div>

      <div className="slider-container">
        <input
          type="range"
          min="0"
          max="500000"
          step="5000"
          value={incomeEstimate}
          onChange={handleIncomeChange}
          className="slider"
          aria-label="Income estimate"
        />
        <span className="slider-value" style={{ left: sliderPercent + '%' }}>
          ${incomeEstimate.toLocaleString()}
        </span>
      </div>

      <div className="range-labels">
        <span>$0</span>
        <span>$500,000</span>
      </div>

      <button
        type="button"
        className="accent-button"
        onClick={function () {
          setShowAnswer(function (previousValue) {
            return !previousValue;
          });
        }}
      >
        {showAnswer ? 'hide comparison' : 'reveal real comparison'}
      </button>

      {showAnswer && (
        <div className="mini-stat-card">
          <span className="mini-stat-label">top 10%</span>
          <strong>${actualTopTenIncome.toLocaleString()}</strong>
          <p>placeholder value for the higher-income group</p>
        </div>
      )}
    </div>
  );
}

function OtherNinetyGuessCard() {
  const [incomeEstimate, setIncomeEstimate] = useState(62000);
  const [showAnswer, setShowAnswer] = useState(false);
  const actualOtherIncome = 62000;
  const sliderPercent = (incomeEstimate / 200000) * 100;

  function handleIncomeChange(event) {
    setIncomeEstimate(Number(event.target.value));
  }

  return (
    <div className="panel guess-panel">
      <div className="stack-sm">
        <p className="eyebrow">student estimate</p>
        <h3 className="panel-title">
          What do you think the average income is for the other 90% of Washington residents?
        </h3>
        <p className="section-copy compact-copy">
          This interaction is separate from the top 10% slider so each estimate and reveal stands on its own.
        </p>
      </div>

      <div className="slider-container">
        <input
          type="range"
          min="0"
          max="200000"
          step="2500"
          value={incomeEstimate}
          onChange={handleIncomeChange}
          className="slider"
          aria-label="Other 90 percent income estimate"
        />
        <span className="slider-value" style={{ left: sliderPercent + '%' }}>
          ${incomeEstimate.toLocaleString()}
        </span>
      </div>

      <div className="range-labels">
        <span>$0</span>
        <span>$200,000</span>
      </div>

      <button
        type="button"
        className="accent-button"
        onClick={function () {
          setShowAnswer(function (previousValue) {
            return !previousValue;
          });
        }}
      >
        {showAnswer ? 'hide comparison' : 'reveal real comparison'}
      </button>

      {showAnswer && (
        <div className="mini-stat-card muted-card">
          <span className="mini-stat-label">other 90%</span>
          <strong>${actualOtherIncome.toLocaleString()}</strong>
          <p>placeholder value for the broader group</p>
        </div>
      )}
    </div>
  );
}

function EssentialsStatCard() {
  return (
    <div className="panel essentials-panel">
      <div className="essentials-graphic" aria-hidden="true">
        <div className="cart-icon">cart</div>
        <div className="cart-items">
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
      <div className="stack-sm">
        <p className="eyebrow">basic expenses</p>
        <h3 className="panel-title">How many households struggle to cover essentials?</h3>
        <p className="spotlight-number">31%</p>
        <p className="section-copy compact-copy">
          Placeholder graphic for the "Overlooked and Undercounted" stat. Swap the number and wording once your team confirms the exact source language.
        </p>
      </div>
    </div>
  );
}

function RacialIncomeComparison() {
  return (
    <div className="panel">
      <div className="stack-sm">
        <p className="eyebrow">income by race and ethnicity</p>
        <h3 className="panel-title">placeholder for racial income comparison</h3>
        <p className="section-copy compact-copy">
          This section can later hold the horizontal bar chart and statewide comparison once your team finalizes the real data.
        </p>
      </div>

      <div className="simple-placeholder">
        <span className="placeholder-tag">income by race chart will go here</span>
      </div>
    </div>
  );
}

function HistoryTimeline() {
  return (
    <div className="panel">
      <div className="stack-sm">
        <p className="eyebrow">income and wealth gaps over time</p>
        <h3 className="panel-title">placeholder for inequality timeline</h3>
        <p className="section-copy compact-copy">
          This section can later hold the scrollable timeline or line graph once your team decides what exact measure and years to show.
        </p>
      </div>

      <div className="simple-placeholder">
        <span className="placeholder-tag">scrollable timeline will go here</span>
      </div>
    </div>
  );
}

export default function WacefePage() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(function () {
    function handleScroll() {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;

      if (scrollHeight <= 0) {
        setScrollProgress(0);
        return;
      }

      const nextProgress = Math.min((scrollTop / scrollHeight) * 100, 100);
      setScrollProgress(nextProgress);
    }

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return function cleanupScrollListener() {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="wacefe-page">
      <div className="scroll-progress" aria-hidden="true">
        <span style={{ width: scrollProgress + '%' }} />
      </div>

      <Navbar />

      <div className="wacefe-content-shell">
        <main>
          <section id="introduction" className="hero section-pad">
            <div className="container hero-simple">
              <div className="stack-sm">
                {/* <p className="eyebrow">wacefe dashboard</p> */}
                <h1>Foundations of wealth</h1>
                <p className="lead">
                  Empowering students to understand not just money—but the systems that shape it.                </p>
              </div>
            </div>
          </section>

          <section id="current-state" className="section-surface section-pad">
            <div className="container stack-lg">
              <div className="stack-sm">
                <p className="eyebrow">the current state</p>
                <h2>what students should notice right now</h2>
                <p className="section-copy">
                  This section now matches your plan more closely: a guess-and-reveal interaction, a single-stat spotlight, a county comparison map, a race and ethnicity income comparison, and reflection prompts that help students connect numbers to lived outcomes.
                </p>
              </div>

              <div className="two-column-grid">
                <IncomeGuessCard />
                <OtherNinetyGuessCard />
              </div>

              <div className="two-column-grid">
                <EssentialsStatCard />
                <RacialIncomeComparison />
              </div>

              <Map />
              <ReflectionPrompts />
            </div>
          </section>

          <section id="history" className="section-tinted section-pad">
            <div className="container stack-lg">
              <div className="stack-sm">
                <p className="eyebrow">economic and social histories</p>
                <h2>how the past shaped the present</h2>
                <p className="section-copy">
                  This area now has two distinct jobs: show change over time, and explain the systems that created those changes. Both are still lightweight so your team can swap in the final evidence later.
                </p>
              </div>

              <HistoryTimeline />
              <QuickFactsFlow />

              <ExpandableSection title="questions to answer before this section is final">
                <ul className="simple-list">
                  <li>What exact unit is the existing inequality chart measuring?</li>
                  <li>Which historical policies do you want to feature as the core chain of causes?</li>
                  <li>Do you want this section to compare Washington to the U.S. in every graphic, or only in one anchor graphic?</li>
                </ul>
              </ExpandableSection>
            </div>
          </section>

          <section id="comparison" className="section-surface section-pad">
            <div className="container stack-lg">
              <div className="stack-sm">
                <p className="eyebrow">our future reality</p>
                <h2>the great wealth transfer</h2>
                <p className="section-copy">
                  The logic here is broken into three pieces: explain what it is, reveal the projected scale, and let students test how different backgrounds and decisions can change who benefits.
                </p>
              </div>

              <ComparisonTool />
            </div>
          </section>

          <section id="toolkit" className="section-tinted section-pad">
            <div className="container stack-lg">
              <div className="stack-sm">
                <p className="eyebrow">your toolkit for an equitable future</p>
                <h2>what students can do with this information</h2>
                <p className="section-copy">
                  The toolkit now splits into two clearer parts: policies and programs that support wealth-building, and a student-facing resource table built around real worries instead of generic "learn more" buttons.
                </p>
              </div>
              <Toolkit />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
