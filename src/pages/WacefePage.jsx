import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Navbar from '../components/Navbar';
import Map from '../components/Map';
import ComparisonTool from '../components/ComparisonTool';
import Toolkit from '../components/Toolkit';
import QuickFactsFlow from '../components/QuickFactsFlow';
import ReflectionQuestion from '../components/ReflectionQuestion';

const sections = [
  { id: 'current-state', label: 'Current State', description: 'Income, costs, county data, and visual comparisons' },
  { id: 'history', label: 'Economic Histories', description: 'Historical and systemic roots of wealth gaps' },
  { id: 'comparison', label: 'Future Reality', description: 'The Great Wealth Transfer and economic adventure paths' },
  { id: 'toolkit', label: 'Resources', description: 'Policies, supports, explainers, and action steps' },
  { id: 'teacher-guide', label: 'Teacher Guide', description: 'Setup notes, objectives, facilitation moves, and PDF guide' }
];

const reflectionPrompts = [
  'What becomes easier for a family when they have savings, home equity, or inherited wealth?',
  'If two counties have very different school funding and incomes, what opportunities might people experience differently?',
  'When a statistic looks abstract, who in real life could be affected by that number?'
];

const expandableVisuals = [
  {
    id: 'wa-homeowners-share',
    eyebrow: 'click to explore',
    title: 'Share of All Homeowners in Washington (2024)',
    summary: 'A bar chart showing how different groups make up the overall pool of Washington homeowners.',
    note:
      'This view helps show who is most represented among homeowners in Washington today and what barriers might shape those differences.',
    thumbnail: function Thumbnail() {
      return (
        <svg viewBox="0 0 240 120" aria-hidden="true">
          <line x1="18" y1="100" x2="224" y2="100" stroke="rgba(31,22,51,0.18)" strokeWidth="2" />
          <rect x="24" y="22" width="30" height="78" rx="4" fill="#27a0c8" />
          <rect x="70" y="86" width="30" height="14" rx="4" fill="#27a0c8" />
          <rect x="116" y="92" width="30" height="8" rx="4" fill="#27a0c8" />
          <rect x="162" y="72" width="30" height="28" rx="4" fill="#27a0c8" />
          <rect x="208" y="78" width="20" height="22" rx="4" fill="#27a0c8" />
        </svg>
      );
    },
    expanded: function Expanded() {
      return (
        <svg viewBox="0 0 520 260" aria-hidden="true">
          <g stroke="rgba(31,22,51,0.12)" strokeWidth="1">
            <line x1="54" y1="58" x2="482" y2="58" />
            <line x1="54" y1="118" x2="482" y2="118" />
            <line x1="54" y1="178" x2="482" y2="178" />
            <line x1="54" y1="228" x2="482" y2="228" />
          </g>
          <text x="24" y="62" className="mini-chart-label">60</text>
          <text x="24" y="122" className="mini-chart-label">40</text>
          <text x="24" y="182" className="mini-chart-label">20</text>
          <rect x="78" y="18" width="52" height="210" rx="8" fill="#27a0c8" />
          <rect x="166" y="220" width="52" height="8" rx="8" fill="#27a0c8" />
          <rect x="254" y="224" width="52" height="4" rx="8" fill="#27a0c8" />
          <rect x="342" y="202" width="52" height="26" rx="8" fill="#27a0c8" />
          <rect x="430" y="208" width="52" height="20" rx="8" fill="#27a0c8" />
          <text x="84" y="244" className="mini-chart-label mini-chart-label-small">White</text>
          <text x="172" y="244" className="mini-chart-label mini-chart-label-small">Black</text>
          <text x="220" y="244" className="mini-chart-label mini-chart-label-xsmall">American Indian /</text>
          <text x="228" y="255" className="mini-chart-label mini-chart-label-xsmall">Alaska Native</text>
          <text x="350" y="244" className="mini-chart-label mini-chart-label-small">Asian</text>
          <text x="410" y="244" className="mini-chart-label mini-chart-label-xsmall">Hispanic/Latino</text>
        </svg>
      );
    }
  },
  {
    id: 'generation-net-worth',
    eyebrow: 'click to explore',
    title: 'Net Worth of Each Generation (Trillions)',
    summary: 'A horizontal bar comparison of total net worth held by Baby Boomers, Gen X, and Millennials.',
    note:
      'This chart shows how much more wealth older generations currently hold, and why the Great Wealth Transfer matters.',
    thumbnail: function Thumbnail() {
      return (
        <svg viewBox="0 0 240 120" aria-hidden="true">
          <rect x="52" y="20" width="166" height="20" rx="5" fill="#e9edf2" />
          <rect x="52" y="50" width="166" height="20" rx="5" fill="#e9edf2" />
          <rect x="52" y="80" width="166" height="20" rx="5" fill="#e9edf2" />
          <rect x="52" y="20" width="150" height="20" rx="5" fill="#43b0e6" />
          <rect x="52" y="50" width="88" height="20" rx="5" fill="#ffaf98" />
          <rect x="52" y="80" width="40" height="20" rx="5" fill="#afc954" />
        </svg>
      );
    },
    expanded: function Expanded() {
      return (
        <svg viewBox="0 0 520 260" aria-hidden="true">
          <text x="36" y="82" className="mini-chart-label">Baby Boomer</text>
          <text x="36" y="142" className="mini-chart-label">Gen X</text>
          <text x="36" y="202" className="mini-chart-label">Millennial</text>
          <rect x="170" y="54" width="294" height="30" rx="7" fill="#edf1f5" />
          <rect x="170" y="114" width="294" height="30" rx="7" fill="#edf1f5" />
          <rect x="170" y="174" width="294" height="30" rx="7" fill="#edf1f5" />
          <rect x="170" y="54" width="294" height="30" rx="7" fill="#43b0e6" />
          <rect x="170" y="114" width="150" height="30" rx="7" fill="#ffaf98" />
          <rect x="170" y="174" width="96" height="30" rx="7" fill="#afc954" />
          <text x="182" y="74" className="mini-chart-label mini-chart-label-small" fontSize="16" fontWeight="bold">88,478,233</text>
          <text x="182" y="134" className="mini-chart-label mini-chart-label-small" fontSize="16" fontWeight="bold">45,422,187</text>
          <text x="182" y="194" className="mini-chart-label mini-chart-label-small" fontSize="16" fontWeight="bold">18,252,845</text>
        </svg>
      );
    }
  },
  {
    id: 'homeownership-over-time',
    eyebrow: 'click to explore',
    title: 'Homeownership Rates Over Time',
    summary: 'A two-line chart comparing Washington and the United States across the twentieth century.',
    note:
      'Use this chart to compare how Washington and U.S. homeownership changed over time and where those paths diverged.',
    thumbnail: function Thumbnail() {
      return (
        <svg viewBox="0 0 240 120" aria-hidden="true">
          <g stroke="rgba(31,22,51,0.12)" strokeWidth="1">
            <line x1="18" y1="30" x2="220" y2="30" />
            <line x1="18" y1="60" x2="220" y2="60" />
            <line x1="18" y1="90" x2="220" y2="90" />
          </g>
          <polyline fill="none" stroke="#2ba4d6" strokeWidth="3" points="24,72 58,88 92,56 126,74 160,24 194,38 224,60" />
          <polyline fill="none" stroke="#0e5d8b" strokeWidth="3" points="24,98 58,100 92,84 126,110 160,46 194,38 224,28" />
        </svg>
      );
    },
    expanded: function Expanded() {
      return (
        <svg viewBox="0 0 520 260" aria-hidden="true">
          <g stroke="rgba(31,22,51,0.12)" strokeWidth="1">
            <line x1="44" y1="44" x2="470" y2="44" />
            <line x1="44" y1="84" x2="470" y2="84" />
            <line x1="44" y1="124" x2="470" y2="124" />
            <line x1="44" y1="164" x2="470" y2="164" />
            <line x1="44" y1="204" x2="470" y2="204" />
          </g>
          <polyline
            fill="none"
            stroke="#2ba4d6"
            strokeWidth="4"
            points="60,152 98,176 136,120 174,156 212,56 250,28 288,46 326,62 364,78 402,112 440,88"
          />
          <polyline
            fill="none"
            stroke="#0e5d8b"
            strokeWidth="4"
            points="60,198 98,200 136,180 174,226 212,140 250,82 288,72 326,62 364,48 402,50 440,26"
          />
          <text x="18" y="208" className="mini-chart-label mini-chart-label-small">44</text>
          <text x="18" y="168" className="mini-chart-label mini-chart-label-small">52</text>
          <text x="18" y="128" className="mini-chart-label mini-chart-label-small">60</text>
          <text x="18" y="88" className="mini-chart-label mini-chart-label-small">64</text>
          <text x="18" y="48" className="mini-chart-label mini-chart-label-small">68</text>
          <text x="48" y="242" className="mini-chart-label mini-chart-label-small">1910</text>
          <text x="124" y="242" className="mini-chart-label mini-chart-label-small">1930</text>
          <text x="200" y="242" className="mini-chart-label mini-chart-label-small">1950</text>
          <text x="276" y="242" className="mini-chart-label mini-chart-label-small">1970</text>
          <text x="352" y="242" className="mini-chart-label mini-chart-label-small">1990</text>
          <text x="428" y="242" className="mini-chart-label mini-chart-label-small">2000</text>
          <text x="435" y="20" className="mini-chart-label mini-chart-label-small">United States</text>
          <text x="445" y="100" className="mini-chart-label mini-chart-label-small">Washington</text>
        </svg>
      );
    }
  }
];

function ReflectionPrompts() {
  return (
    <div className="panel reflection-panel">
      <div className="panel-header">
        <div className="stack-sm">
          <p className="eyebrow">reflection</p>
          <h3 className="panel-title">pause and connect the data to real life</h3>
        </div>
      </div>
      <div className="prompt-list">
        {reflectionPrompts.map(function (prompt) {
          return (
            <ReflectionQuestion key={prompt}>{prompt}</ReflectionQuestion>
          );
        })}
      </div>
    </div>
  );
}

function ChartZoomModal({ title, children, onClose }) {
  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content chart-expanded-modal"
        onClick={function (event) {
          event.stopPropagation();
        }}
      >
        <div className="modal-header">
          <div className="stack-sm">
            <p className="eyebrow">expanded chart</p>
            <h3>{title}</h3>
          </div>
          <button type="button" className="modal-close" onClick={onClose}>
            ×
          </button>
        </div>
        <div className="modal-body chart-expanded-body">
          <div className="chart-modal-graphic">{children}</div>
        </div>
      </div>
    </div>,
    document.body
  );
}

function TableOfContents() {
  function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  return (
    <nav className="toc-panel" aria-labelledby="toc-title">
      <div className="stack-sm">
        <p className="eyebrow">dashboard navigation</p>
        <h2 id="toc-title">choose where to begin</h2>
        <p className="section-copy compact-copy">
          Not sure where to start? Use these jump links to move between the dashboard sections.
        </p>
      </div>
      <div className="toc-grid">
        {sections.map(function (section) {
          return (
            <button
              key={section.id}
              type="button"
              className="toc-link"
              onClick={function () {
                scrollToSection(section.id);
              }}
            >
              <span>{section.label}</span>
              <small>{section.description}</small>
            </button>
          );
        })}
      </div>
    </nav>
  );
}

function BackToTop() {
  function scrollToTop() {
    const element = document.getElementById('introduction');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  return (
    <button type="button" className="back-to-top" onClick={scrollToTop}>
      Back to top
    </button>
  );
}

function QuickExpandVisualGallery() {
  const [openVisualId, setOpenVisualId] = useState('');
  const openVisual = expandableVisuals.find(function (visual) {
    return visual.id === openVisualId;
  });

  return (
    <div className="panel quick-expand-panel">
      <div className="panel-header align-start">
        <div className="stack-sm">
          <p className="eyebrow">more quick visuals</p>
          <h3 className="panel-title">tap a small chart to zoom in</h3>
          <p className="section-copy compact-copy">
            Click to explore each lightweight graph card without crowding the main page.
          </p>
        </div>
      </div>

      <div className="quick-expand-layout">
        <div className="quick-expand-card-grid">
          {expandableVisuals.map(function (visual) {
            const ThumbnailGraphic = visual.thumbnail;

            return (
              <button
                key={visual.id}
                type="button"
                className="quick-expand-card"
                onClick={function () {
                  setOpenVisualId(visual.id);
                }}
              >
                <div className="quick-expand-thumb">
                  <ThumbnailGraphic />
                </div>
                <div className="stack-sm">
                  <p className="eyebrow">{visual.eyebrow}</p>
                  <h4>{visual.title}</h4>
                  <p className="section-copy compact-copy">{visual.summary}</p>
                  <span className="click-label">Open expanded chart</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {openVisual && (
        <div
          className="modal-overlay"
          onClick={function () {
            setOpenVisualId('');
          }}
        >
          <div
            className="modal-content quick-expand-modal"
            onClick={function (event) {
              event.stopPropagation();
            }}
          >
            <div className="modal-header">
              <div className="stack-sm">
                <p className="eyebrow">expanded view</p>
                <h3>{openVisual.title}</h3>
              </div>
              <button
                type="button"
                className="modal-close"
                onClick={function () {
                  setOpenVisualId('');
                }}
              >
                ×
              </button>
            </div>
            <div className="modal-body quick-expand-modal-body">
              <div className="quick-expand-graphic">
                <openVisual.expanded />
              </div>
              <p className="section-copy">{openVisual.note}</p>
            </div>
          </div>
        </div>
      )}
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
    <div className="panel guess-panel estimate-card estimate-card-high">
      <div className="stack-sm">
        {/* <p className="eyebrow">estimate</p> */}
        <h3 className="panel-title">
          what do you think the average income is for the top 10% of washington residents?
        </h3>
          <p className="section-copy compact-copy">
           Guess first, then reveal the comparison.
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
          <div className="slider-container slider-container-static">
            <input
              type="range"
              min="0"
              max="500000"
              step="5000"
              value={actualTopTenIncome}
              className="slider slider-static"
              aria-label="Actual top 10 percent income"
              disabled
            />
            <span className="slider-value" style={{ left: ((actualTopTenIncome / 500000) * 100) + '%' }}>
              ${actualTopTenIncome.toLocaleString()}
            </span>
          </div>
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
    <div className="panel guess-panel align-right estimate-card estimate-card-low">
      <div className="stack-sm">
        {/* <p className="eyebrow">estimate</p> */}
        <h3 className="panel-title">
          what do you think the average income is for the other 90% of washington residents?
        </h3>
        <p className="section-copy compact-copy">
          Guess first, then reveal the comparison.
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
          <div className="slider-container slider-container-static">
            <input
              type="range"
              min="0"
              max="200000"
              step="2500"
              value={actualOtherIncome}
              className="slider slider-static"
              aria-label="Actual other 90 percent income"
              disabled
            />
            <span className="slider-value" style={{ left: ((actualOtherIncome / 200000) * 100) + '%' }}>
              ${actualOtherIncome.toLocaleString()}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

function DataDisclaimer() {
  return (
    <div className="panel disclaimer-panel">
      <p className="eyebrow">data note</p>
      <p className="section-copy">
        Some of these figures may undercount people and communities who are less visible in standard surveys or public data. Treat the visuals as a directional view while source details are being finalized.
      </p>
      <p className="key-takeaway">
        Key takeaway: a chart can show a pattern without explaining every cause. Use the historical context below to ask why the pattern exists.
      </p>
    </div>
  );
}

function SmallStatsRow() {
  return (
    <div className="small-stats-row">
      <div className="mini-stat-card highlight-teal">
        <div className="stat-icon" aria-hidden="true">{/*🛒*/}</div>
        <span className="mini-stat-label">basic expenses</span>
        <strong>31%</strong>
        <p>Households reporting trouble covering essentials like food, utilities, or childcare.</p>
      </div>
      <div className="mini-stat-card highlight-yellow">
        <span className="mini-stat-label">housing access</span>
        <strong>45%</strong>
        <p>Estimated share of families facing limited paths to stable homeownership.</p>
      </div>
      <div className="mini-stat-card muted-card">
        <span className="mini-stat-label">savings buffer</span>
        <strong>2 months</strong>
        <p>Typical emergency savings for many households in this broader group.</p>
      </div>
    </div>
  );
}

function RacialIncomeComparison() {
  const [isChartOpen, setIsChartOpen] = useState(false);

  return (
    <div className="showcase-item racial-income-showcase">
      <div className="panel showcase-panel">
        <div className="stack-sm">
          <p className="eyebrow">income by race and ethnicity</p>
          <h3 className="panel-title">washington and u.s. median income in one view</h3>
          <p className="section-copy compact-copy">
            This combined chart compares the Washington numbers against the national pattern in the same frame.
          </p>
        </div>

        <button
          type="button"
          className="chart-expand-trigger"
          onClick={function () {
            setIsChartOpen(true);
          }}
          aria-label="Zoom in on median income chart"
        >
          <RacialIncomeComparisonGraphic />
          <span className="chart-expand-hint">Zoom in</span>
        </button>
        <p className="chart-caption">
          Caption: This chart compares median household income by race and ethnicity in Washington State and across the United States. While Washington incomes are often higher than the national average, the same racial wealth gaps still appear. The chart highlights how historical and systemic inequalities continue to shape access to income and economic opportunity today.
        </p>
      </div>

      <div className="stack-sm showcase-copy">
        {/*<p className="eyebrow">side explanation blurb</p>*/}
        <h3 className="panel-title">look beyond the highest bar</h3>
        <p className="section-copy compact-copy">
          This chart compares median household income in Washington State with the United States overall across different racial and ethnic groups. At first glance, Washington may appear to be doing better because most income levels in the state are higher than the national average. However, the chart also shows that Washington still follows many of the same patterns seen across the country.
        </p>
        <p className="section-copy compact-copy">
          Some communities consistently earn less than others, even when the numbers improve overall. Groups such as Black or African American, Native American, and Hispanic or Latino households continue to have lower median incomes compared to White and Asian households. These differences are not simply the result of individual choices or effort. They connect to long histories of unequal access to education, housing, healthcare, higher-paying jobs, and financial opportunities.
        </p>
        <p className="section-copy compact-copy">
          Looking at the chart this way helps us move beyond asking “Who earns the most?” and instead ask deeper questions about opportunity, fairness, and access. The data reminds us that economic inequality is not evenly experienced and that progress for a state does not always mean equity for all communities living within it.
        </p>
      </div>

      {isChartOpen && (
        <ChartZoomModal
          title="Washington and U.S. median income"
          onClose={function () {
            setIsChartOpen(false);
          }}
        >
          <RacialIncomeComparisonGraphic />
        </ChartZoomModal>
      )}
    </div>
  );
}

function RacialIncomeComparisonGraphic() {
  return (
    <div className="racial-income-graphic" aria-label="Median income by race and ethnicity comparing Washington and the United States">
      <svg viewBox="0 0 1040 640" role="img" aria-hidden="true">
        <rect x="0" y="0" width="1040" height="640" rx="18" fill="#ffffff" />

        <text x="28" y="42" className="timeline-svg-title">
          Median Income by Race and Ethnicity
        </text>
        <text x="28" y="70" className="timeline-svg-subtitle">
          Washington compared with the United States
        </text>

        <g className="timeline-axis-labels">
          <text x="32" y="150">140K</text>
          <text x="32" y="220">120K</text>
          <text x="40" y="290">100K</text>
          <text x="40" y="360">80K</text>
          <text x="40" y="430">60K</text>
          <text x="40" y="500">40K</text>
          <text x="40" y="570">20K</text>
        </g>

        <g className="timeline-grid">
          <line x1="90" y1="140" x2="975" y2="140" />
          <line x1="90" y1="210" x2="975" y2="210" />
          <line x1="90" y1="280" x2="975" y2="280" />
          <line x1="90" y1="350" x2="975" y2="350" />
          <line x1="90" y1="420" x2="975" y2="420" />
          <line x1="90" y1="490" x2="975" y2="490" />
          <line x1="90" y1="560" x2="975" y2="560" />
        </g>

        <g className="income-bars">
          <rect x="118" y="288" width="38" height="272" fill="#ffd07a" rx="6" />
          <rect x="164" y="322" width="38" height="238" fill="#ffe4b4" rx="6" />

          <rect x="278" y="356" width="38" height="204" fill="#79bfe3" rx="6" />
          <rect x="324" y="398" width="38" height="162" fill="#b8def0" rx="6" />

          <rect x="438" y="372" width="38" height="188" fill="#2b86a7" rx="6" />
          <rect x="484" y="385" width="38" height="175" fill="#79b8cc" rx="6" />

          <rect x="598" y="140" width="38" height="420" fill="#1fb5a2" rx="6" />
          <rect x="644" y="214" width="38" height="346" fill="#9fe6dc" rx="6" />

          <rect x="758" y="286" width="38" height="274" fill="#6f86c2" rx="6" />
          <rect x="804" y="327" width="38" height="233" fill="#bcc8e8" rx="6" />

          <rect x="918" y="345" width="38" height="215" fill="#ff9100" rx="6" />
          <rect x="964" y="377" width="38" height="183" fill="#ffd08c" rx="6" />
        </g>

        <g className="income-value-labels" textAnchor="middle">
          <text x="137" y="276">100.2K</text>
          <text x="183" y="310">87.6K</text>

          <text x="297" y="344">75.9K</text>
          <text x="343" y="386">56.7K</text>

          <text x="457" y="360">69.3K</text>
          <text x="503" y="373">63.6K</text>

          <text x="617" y="128">143K</text>
          <text x="663" y="202">117.3K</text>

          <text x="777" y="274">100.8K</text>
          <text x="823" y="315">82.7K</text>

          <text x="937" y="333">79.5K</text>
          <text x="983" y="365">72.6K</text>
        </g>

        <g className="timeline-axis-labels" textAnchor="middle">
          <text x="160" y="594">White</text>
          <text x="320" y="594">Black or</text>
          <text x="320" y="610">African American</text>
          <text x="480" y="594">Native American</text>
          <text x="640" y="594">Asian</text>
          <text x="800" y="594">Native Hawaiian /</text>
          <text x="800" y="610">Pacific Islander</text>
          <text x="960" y="594">Hispanic or Latino</text>
        </g>

        <g className="income-legend">
          <rect x="740" y="32" width="18" height="18" rx="4" fill="#4f4f56" />
          <text x="766" y="46">Washington</text>
          <rect x="860" y="32" width="18" height="18" rx="4" fill="#c7c7ce" />
          <text x="886" y="46">U.S.</text>
        </g>
      </svg>
    </div>
  );
}

function InequalityTimelineGraphic() {
  return (
    <div className="timeline-graphic" aria-label="Income inequality chart for Washington and the United States over time">
      <svg viewBox="0 0 900 520" role="img" aria-hidden="true">
        <rect x="0" y="0" width="900" height="520" rx="18" fill="#ffffff" />

        <text x="28" y="42" className="timeline-svg-title">
          How Income Inequality Has Changed in Washington State
        </text>
        <text x="28" y="74" className="timeline-svg-title">
          Over Time
        </text>

        <g className="timeline-grid">
          <line x1="80" y1="120" x2="785" y2="120" />
          <line x1="80" y1="170" x2="785" y2="170" />
          <line x1="80" y1="220" x2="785" y2="220" />
          <line x1="80" y1="270" x2="785" y2="270" />
          <line x1="80" y1="320" x2="785" y2="320" />
          <line x1="80" y1="370" x2="785" y2="370" />
          <line x1="80" y1="420" x2="785" y2="420" />
          <line x1="80" y1="470" x2="785" y2="470" />
        </g>

        <g className="timeline-axis-labels">
          <text x="28" y="112">0.49</text>
          <text x="22" y="162">0.485</text>
          <text x="30" y="212">0.48</text>
          <text x="22" y="262">0.475</text>
          <text x="30" y="312">0.47</text>
          <text x="22" y="362">0.465</text>
          <text x="30" y="412">0.46</text>
          <text x="22" y="462">0.455</text>
          <text x="110" y="495">2008</text>
          <text x="185" y="495">2010</text>
          <text x="260" y="495">2012</text>
          <text x="335" y="495">2014</text>
          <text x="410" y="495">2016</text>
          <text x="485" y="495">2018</text>
          <text x="560" y="495">2020</text>
          <text x="635" y="495">2022</text>
          <text x="710" y="495">2024</text>
        </g>

        <polyline
          fill="none"
          stroke="#23a6d5"
          strokeWidth="3"
          points="90,300 165,300 240,300 280,200 360,200 400,120 438,185 480,180 520,182 560,150 600,190 640,165 680,142 720,170 772,190"
        />
        <polyline
          fill="none"
          stroke="#125f8c"
          strokeWidth="3"
          points="90,470 165,470 240,470 320,300 360,390 400,325 440,295 480,325 520,312 560,310 600,240 640,170 680,135 720,170 772,145"
        />

        <text x="785" y="198" className="timeline-series-label">United</text>
        <text x="785" y="222" className="timeline-series-label">States</text>
        <text x="785" y="160" className="timeline-series-label timeline-series-label-secondary">Washington</text>
      </svg>
    </div>
  );
}

function HistoryTimeline() {
  const [isChartOpen, setIsChartOpen] = useState(false);

  return (
    <div id="gini-section" className="showcase-item showcase-item-reverse history-showcase">
      <div className="panel showcase-panel">
        <button
          type="button"
          className="chart-expand-trigger"
          onClick={function () {
            setIsChartOpen(true);
          }}
          aria-label="Zoom in on income inequality over time chart"
        >
          <InequalityTimelineGraphic />
          <span className="chart-expand-hint">Zoom in</span>
        </button>
        <p className="chart-caption">
          Caption: This graph uses the Gini coefficient to compare income inequality in Washington State and the United States over time. Higher values mean income is distributed less evenly across the population. Although the changes between years may appear large because of the narrow scale, the graph mainly shows that economic inequality has continued to persist over time rather than disappearing.
        </p>
      </div>

      <div className="stack-sm showcase-copy">
        <p className="eyebrow">what are we looking at</p>
        <h3 className="panel-title">what the gini coefficient shows</h3>
        
        <div className="panel" style={{ padding: '1rem', marginBottom: '1rem', backgroundColor: 'rgba(231, 185, 38, 0.08)', borderLeft: '4px solid #e7b926' }}>
          <p><strong>What is a Gini coefficient?</strong> The Gini coefficient is a score from 0 to 1 that helps show how evenly income is shared in a place. A number closer to 0 means income is more evenly spread out, while a number closer to 1 means fewer people hold a larger share of the money.</p>
        </div>
        <p className="section-copy compact-copy">
          This graph shows that both Washington State and the United States have struggled with income inequality for many years. Even though the lines move up and down slightly over time, the overall pattern stays pretty similar: money and wealth are still not shared evenly across communities.
        </p>
        <p className="section-copy compact-copy">
          Washington’s line has slowly moved closer to the national average over time. This can connect to things like rising housing costs, rapid tech growth, and differences in access to higher-paying jobs, savings, and homeownership opportunities.
        </p>
        <p className="section-copy compact-copy">
          While the graph may make the changes look dramatic because the scale is zoomed in closely, the bigger story is about how inequality has continued year after year. The chart helps us think about how long-term systems and opportunities can shape people’s financial futures differently.
        </p>
      </div>

      {isChartOpen && (
        <ChartZoomModal
          title="Income inequality over time"
          onClose={function () {
            setIsChartOpen(false);
          }}
        >
          <InequalityTimelineGraphic />
        </ChartZoomModal>
      )}
    </div>
  );
}

function SectionSpacing({ children }) {
  return <div style={{ paddingTop: '1.75rem', paddingBottom: '1.75rem' }}>{children}</div>;
}

function TeacherToolkitSection() {
  const guideUrl = `${import.meta.env.BASE_URL}teacher-classroom-guide.pdf`;

  return (
    <section id="teacher-guide" className="section-teacher section-pad section-boundary">
      <div className="container stack-lg">
        <div className="section-heading-card">
          <p className="eyebrow">teacher guide</p>
          <h2>teacher toolkit</h2>
          <p className="section-copy">
            This area keeps facilitation support separate from the student-facing dashboard so students can focus on the activities while educators can quickly find setup notes.
          </p>
        </div>

        <div className="teacher-toolkit-grid">
          <div className="panel teacher-toolkit-card">
            <p className="eyebrow">setup instructions</p>
            <h3 className="panel-title">before students use the sliders</h3>
            <p>
              Ask students to privately predict what a high-income household and a more typical household in Washington might earn. After the reveal, invite them to name what surprised them and what the gap could mean for housing, savings, and everyday stability.
            </p>
          </div>
          <div className="panel teacher-toolkit-card">
            <p className="eyebrow">facilitation guidance</p>
            <h3 className="panel-title">keep discussion evidence-based</h3>
            <p>
              Encourage students to describe patterns before making claims. When a chart shows unequal outcomes, connect the observation to policy, local history, institutional access, and lived experience.
            </p>
          </div>
          <div className="panel teacher-toolkit-card">
            <p className="eyebrow">learning objectives</p>
            <h3 className="panel-title">students will be able to</h3>
            <ul className="simple-list">
              <li>Explain how wealth differs from income.</li>
              <li>Use data visuals to ask clearer questions about opportunity.</li>
              <li>Connect current outcomes to historical and systemic conditions.</li>
              <li>Reflect on choices people face inside unequal systems.</li>
            </ul>
          </div>
          <div className="panel teacher-toolkit-card">
            <p className="eyebrow">implementation notes</p>
            <h3 className="panel-title">classroom guide PDF</h3>
            <p>
              Use the PDF guide for a printable sequence before, during, and after the dashboard activity.
            </p>
            <a className="accent-button teacher-guide-link" href={guideUrl} target="_blank" rel="noreferrer">
              Open Teacher Guide PDF
            </a>
          </div>
        </div>
        <BackToTop />
      </div>
    </section>
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

  useEffect(function () {
    const nodes = document.querySelectorAll('.reveal-on-scroll');

    if (!nodes.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.18, rootMargin: '0px 0px -6% 0px' }
    );

    nodes.forEach(function (node) {
      observer.observe(node);
    });

    return function cleanupObserver() {
      observer.disconnect();
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
                <h1>foundations of wealth</h1>
                <p className="lead">
                  Explore not just money, but the systems that shape it.
                </p>
                <p className="section-copy">
                  This dashboard explores how income, assets, history, place, and policy shape financial opportunity in Washington.
                </p>
              </div>

              <div className="teacher-guide-callout">
                <div className="stack-sm">
                  <p className="eyebrow">teacher guide</p>
                  <h3 className="panel-title">classroom setup and facilitation support</h3>
                  <p className="section-copy compact-copy">
                    Teacher-facing instructions are collected in the Teacher Toolkit at the end of the dashboard.
                  </p>
                </div>
                <button type="button" className="ghost-button teacher-guide-link" onClick={function () {
                  const element = document.getElementById('teacher-guide');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}>
                  Open Teacher Toolkit
                </button>
              </div>
            </div>
          </section>

          <section className="toc-section section-pad">
            <div className="container">
              <TableOfContents />
            </div>
          </section>

          <section id="current-state" className="section-surface section-pad section-align-left section-boundary">
            <div className="container stack-lg">
              <div className="section-heading-card">
                <p className="eyebrow">the current state</p>
                <h2>what current data can show</h2>
                <p className="section-copy">
                  Use this section to explore how current income gaps, basic costs, and access to resources are linked through interactions, stats, and visuals.
                </p>
              </div>

              <SectionSpacing>
                <div className="estimate-activity-grid reveal-on-scroll reveal-left">
                  <div className="stack-sm estimate-guide-copy">
                    <p className="eyebrow">initial thoughts </p>
                    <h3 className="panel-title">guess the income gap before you reveal it</h3>
                    <p className="section-copy compact-copy">
                      Before moving the sliders, take a moment to think about how much a high-income household and how much a more typical household in WA might earn. Adjust the slider accordingly. Once both of your estimates are on the screen, reveal the statistic!
                    </p>
                    <p className="section-copy compact-copy">
                      What is surprising? Why did you make your assumptions? What do you think this gap means for everyday living?
                    </p>
                    <img 
                        src={`${import.meta.env.BASE_URL}WACEFE-circle.png`} 
                        alt="WACEFE circle" 
                        className="wacefe-circle-art is-left"
                      />
                  </div>

                  <div className="estimate-card-stack">
                    <IncomeGuessCard />
                    <OtherNinetyGuessCard />
                  </div>
                </div>
              </SectionSpacing>

              <SectionSpacing>
                <div className="reveal-on-scroll reveal-up">
                  <SmallStatsRow />
                </div>
              </SectionSpacing>

              <SectionSpacing>
                <div className="reveal-on-scroll reveal-right">
                  <DataDisclaimer />
                </div>
              </SectionSpacing>

              <SectionSpacing>
                <div className="reveal-on-scroll reveal-left">
                  <RacialIncomeComparison />
                </div>
              </SectionSpacing>

              <SectionSpacing>
                <div className="reveal-on-scroll reveal-right">
                  <Map />
                </div>
              </SectionSpacing>

              <SectionSpacing>
                <div className="reveal-on-scroll reveal-up">
                  {/* <QuickExpandVisualGallery /> */}
                </div>
              </SectionSpacing>

              <SectionSpacing>
                <div className="reveal-on-scroll reveal-left">
                  <ReflectionPrompts />
                </div>
              </SectionSpacing>
              <BackToTop />
            </div>
          </section>

          <section id="history" className="section-tinted section-pad section-boundary">
            <div className="container stack-lg">
              <div className="section-heading-card">
                <p className="eyebrow">economic and social histories</p>
                <h2>how the past shaped the present</h2>
                <p className="section-copy">
                  Use this section to look at change over time and connect present-day patterns to the systems, policies, and decisions that helped create them.
                </p>
              </div>

              <SectionSpacing>
                <div className="reveal-on-scroll reveal-right">
                  <HistoryTimeline />
                </div>
              </SectionSpacing>

              <SectionSpacing>
                <div className="reveal-on-scroll reveal-up">
                  <QuickFactsFlow />
                </div>
              </SectionSpacing>

              <SectionSpacing>
                <div className="reveal-on-scroll reveal-left">
                  <div className="panel reflection-panel">
                    <div className="panel-header">
                      <div className="stack-sm">
                        <p className="eyebrow">reflection</p>
                        <h3 className="panel-title">connect history to the patterns you noticed</h3>
                      </div>
                    </div>
                    <div className="prompt-list">
                      <ReflectionQuestion>
                        Which policy, system, or historical event from this section seems most connected to wealth gaps today?
                      </ReflectionQuestion>
                      <ReflectionQuestion>
                        How can a decision made many years ago still affect housing, schools, jobs, or family wealth now?
                      </ReflectionQuestion>
                      <ReflectionQuestion>
                        What would you want to learn more about before deciding what solutions would be fair?
                      </ReflectionQuestion>
                    </div>
                  </div>
                </div>
              </SectionSpacing>
              <BackToTop />
            </div>
          </section>

          <section id="comparison" className="section-surface section-pad section-boundary">
            <div className="container stack-lg">
              <div className="section-heading-card">
                <p className="eyebrow">our future reality</p>
                <h2>the great wealth transfer</h2>
                <p className="section-copy">
                  Why do today’s inequities matter for the future? Wealth in Washington-state is going to shift dramatically to different people and in different ways. This shift is called the Great Wealth Transfer. It is important that we know when this transfer will happen, how it will happen, and what we should do when it does. Especially because, if the power associated with this wealth falls in your hands, you have the responsibility to do good on the part of your peers.
                </p>
              </div>
              <SectionSpacing>
                <div className="reveal-on-scroll reveal-up">
                  <ComparisonTool />
                </div>
              </SectionSpacing>
              <BackToTop />
            </div>
          </section>

          <section id="toolkit" className="section-tinted section-pad section-boundary">
            <div className="container stack-lg">
              <div className="section-heading-card">
                <p className="eyebrow">resources</p>
                <h2>what this information can help with</h2>
                <p className="section-copy">
                  This toolkit combines clickable strategy cards, practical money concerns, and short explainers that define key ideas like equity, wealth, and systems.
                </p>
              </div>
              <SectionSpacing>
                <Toolkit />
              </SectionSpacing>
              <BackToTop />
            </div>
          </section>

          <TeacherToolkitSection />
        </main>
      </div>
    </div>
  );
}
