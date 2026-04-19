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

const characterSectionIntro = [
  'Through analyzing data and looking at historical policies and practices, we have seen how someone’s demographic and socioeconomic positioning can uniquely impact their financial opportunities in ways that could be more positive and or negative than another.',
  'But what do these impacts look like on a daily basis? How does this dynamic show up in real life? Let’s find out.',
  'Below are 3 representations of a Washington-state resident. Included are brief introductions, as well as descriptions of some economic opportunities or challenges they could potentially face.',
  'Pick your character and navigate their economic world. Imagine yourself as this person, empathize with the situation, and identify the path that you think you would realistically take.',
  'Your choices do not need to feel like the responsible ones. Choose what you are drawn to.'
];

const expandableVisuals = [
  {
    id: 'rent-burden',
    eyebrow: 'quick expand',
    title: 'County rent burden snapshot',
    summary: 'A fast look at how housing pressure might vary across places.',
    note:
      'Teachers could use this graphic to ask where cost pressure seems highest and what that might mean for saving, moving, or staying in one community.',
    thumbnail: function Thumbnail() {
      return (
        <svg viewBox="0 0 240 120" aria-hidden="true">
          <rect x="20" y="72" width="26" height="28" rx="6" fill="#bcc8e8" />
          <rect x="58" y="54" width="26" height="46" rx="6" fill="#9fe6dc" />
          <rect x="96" y="40" width="26" height="60" rx="6" fill="#ffd08c" />
          <rect x="134" y="30" width="26" height="70" rx="6" fill="#79bfe3" />
          <rect x="172" y="18" width="26" height="82" rx="6" fill="#1fb5a2" />
          <line x1="18" y1="100" x2="210" y2="100" stroke="rgba(31,22,51,0.18)" strokeWidth="2" />
        </svg>
      );
    },
    expanded: function Expanded() {
      return (
        <svg viewBox="0 0 520 260" aria-hidden="true">
          <g stroke="rgba(31,22,51,0.12)" strokeWidth="1">
            <line x1="48" y1="48" x2="480" y2="48" />
            <line x1="48" y1="96" x2="480" y2="96" />
            <line x1="48" y1="144" x2="480" y2="144" />
            <line x1="48" y1="192" x2="480" y2="192" />
            <line x1="48" y1="228" x2="480" y2="228" />
          </g>
          <rect x="74" y="164" width="46" height="64" rx="8" fill="#bcc8e8" />
          <rect x="144" y="132" width="46" height="96" rx="8" fill="#9fe6dc" />
          <rect x="214" y="104" width="46" height="124" rx="8" fill="#ffd08c" />
          <rect x="284" y="82" width="46" height="146" rx="8" fill="#79bfe3" />
          <rect x="354" y="52" width="46" height="176" rx="8" fill="#1fb5a2" />
          <text x="72" y="246" className="mini-chart-label">Yakima</text>
          <text x="139" y="246" className="mini-chart-label">Spokane</text>
          <text x="208" y="246" className="mini-chart-label">Pierce</text>
          <text x="282" y="246" className="mini-chart-label">King</text>
          <text x="344" y="246" className="mini-chart-label">Whatcom</text>
        </svg>
      );
    }
  },
  {
    id: 'wealth-ladder',
    eyebrow: 'quick expand',
    title: 'Wealth-building ladder',
    summary: 'A simple staircase view of what helps families move from income to assets.',
    note:
      'This could help students talk through which steps are easier when a family already has support, savings, or inherited stability.',
    thumbnail: function Thumbnail() {
      return (
        <svg viewBox="0 0 240 120" aria-hidden="true">
          <rect x="26" y="78" width="34" height="22" rx="6" fill="#ffd08c" />
          <rect x="66" y="62" width="34" height="38" rx="6" fill="#bcc8e8" />
          <rect x="106" y="46" width="34" height="54" rx="6" fill="#9fe6dc" />
          <rect x="146" y="30" width="34" height="70" rx="6" fill="#79bfe3" />
          <rect x="186" y="14" width="34" height="86" rx="6" fill="#1fb5a2" />
        </svg>
      );
    },
    expanded: function Expanded() {
      return (
        <svg viewBox="0 0 520 260" aria-hidden="true">
          <rect x="38" y="180" width="72" height="46" rx="10" fill="#ffd08c" />
          <rect x="124" y="148" width="72" height="78" rx="10" fill="#bcc8e8" />
          <rect x="210" y="116" width="72" height="110" rx="10" fill="#9fe6dc" />
          <rect x="296" y="84" width="72" height="142" rx="10" fill="#79bfe3" />
          <rect x="382" y="52" width="72" height="174" rx="10" fill="#1fb5a2" />
          <text x="54" y="206" className="mini-chart-label">income</text>
          <text x="131" y="174" className="mini-chart-label">savings</text>
          <text x="224" y="142" className="mini-chart-label">credit</text>
          <text x="304" y="110" className="mini-chart-label">ownership</text>
          <text x="399" y="78" className="mini-chart-label">assets</text>
        </svg>
      );
    }
  },
  {
    id: 'savings-gap',
    eyebrow: 'quick expand',
    title: 'Emergency savings comparison',
    summary: 'A quick visual for how many months of cushion families may have.',
    note:
      'Students could use this to discuss how one unexpected bill feels different when a household has no buffer versus a few months of savings.',
    thumbnail: function Thumbnail() {
      return (
        <svg viewBox="0 0 240 120" aria-hidden="true">
          <circle cx="54" cy="62" r="18" fill="#ffd08c" />
          <circle cx="104" cy="62" r="18" fill="#ffd08c" />
          <circle cx="154" cy="62" r="18" fill="#bcc8e8" />
          <circle cx="204" cy="62" r="18" fill="#1fb5a2" />
        </svg>
      );
    },
    expanded: function Expanded() {
      return (
        <svg viewBox="0 0 520 260" aria-hidden="true">
          <g>
            <circle cx="86" cy="132" r="30" fill="#ffd08c" />
            <circle cx="158" cy="132" r="30" fill="#ffd08c" />
            <circle cx="278" cy="132" r="30" fill="#bcc8e8" />
            <circle cx="350" cy="132" r="30" fill="#9fe6dc" />
            <circle cx="422" cy="132" r="30" fill="#1fb5a2" />
          </g>
          <text x="60" y="196" className="mini-chart-label">1 month</text>
          <text x="238" y="196" className="mini-chart-label">2 months</text>
          <text x="382" y="196" className="mini-chart-label">3+ months</text>
        </svg>
      );
    }
  }
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
          <h3 className="panel-title">Tap a small chart to open a larger classroom discussion view</h3>
          <p className="section-copy compact-copy">
            This section can hold lightweight graph cards that expand when teachers or students want a closer look without crowding the main page.
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
    <div className="panel guess-panel align-right estimate-card estimate-card-low">
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

function DataDisclaimer() {
  return (
    <div className="panel disclaimer-panel">
      <p className="eyebrow">data note</p>
      <p className="section-copy">
        Some of these figures may undercount people and communities who are less visible in standard surveys or public data. Treat the visuals as a directional view while source details are being finalized.
      </p>
    </div>
  );
}

function SmallStatsRow() {
  return (
    <div className="small-stats-row">
      <div className="mini-stat-card highlight-teal">
        <div className="stat-icon" aria-hidden="true">🛒</div>
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
  return (
    <div className="showcase-item racial-income-showcase">
      <div className="panel showcase-panel">
        <div className="stack-sm">
          <p className="eyebrow">income by race and ethnicity</p>
          <h3 className="panel-title">Washington and U.S. median income in one view</h3>
          <p className="section-copy compact-copy">
            This combined chart helps students compare the Washington numbers against the national pattern in the same frame.
          </p>
        </div>

        <RacialIncomeComparisonGraphic />
      </div>

      <div className="stack-sm showcase-copy">
        <p className="eyebrow">what to notice</p>
        <h3 className="panel-title">Guide students toward patterns before they jump to conclusions</h3>
        <p className="section-copy compact-copy">
          This note could remind students to look for overall patterns, not just the highest or lowest bar. It is a useful place to ask which communities have historically had fewer opportunities to build wealth and what systems, policies, or barriers might be shaping the differences they see in the chart.
        </p>
      </div>
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

        <g className="income-value-labels">
          <text x="112" y="276">100.2K</text>
          <text x="158" y="310">87.6K</text>

          <text x="272" y="344">75.9K</text>
          <text x="318" y="386">56.7K</text>

          <text x="432" y="360">69.3K</text>
          <text x="478" y="373">63.6K</text>

          <text x="594" y="128">143K</text>
          <text x="636" y="202">117.3K</text>

          <text x="748" y="274">100.8K</text>
          <text x="798" y="315">82.7K</text>

          <text x="908" y="333">79.5K</text>
          <text x="956" y="365">72.6K</text>
        </g>

        <g className="timeline-axis-labels">
          <text x="106" y="592">White</text>
          <text x="252" y="592">Black or African American</text>
          <text x="444" y="592">Native American</text>
          <text x="606" y="592">Asian</text>
          <text x="730" y="592">Native Hawaiian / Pacific Islander</text>
          <text x="914" y="592">Hispanic or Latino</text>
        </g>

        <g className="income-legend">
          <rect x="740" y="32" width="18" height="18" rx="4" fill="#1fb5a2" />
          <text x="766" y="46">Washington</text>
          <rect x="860" y="32" width="18" height="18" rx="4" fill="#9fe6dc" />
          <text x="886" y="46">United States</text>
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
        <text x="785" y="180" className="timeline-series-label timeline-series-label-secondary">Washington</text>
      </svg>
    </div>
  );
}

function HistoryTimeline() {
  return (
    <div className="showcase-item showcase-item-reverse history-showcase">
      <div className="panel showcase-panel">
        <InequalityTimelineGraphic />
      </div>

      <div className="stack-sm showcase-copy">
        <p className="eyebrow">why this matters over time</p>
        <h3 className="panel-title">Use this space to connect past decisions to present outcomes</h3>
        <p className="section-copy compact-copy">
          A filled version of this text could introduce the timeline by explaining that wealth gaps are not random or recent. As students scroll, they should be watching for how housing policy, school access, labor systems, and public investment build on each other across generations.
        </p>
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

              <div className="teacher-guide-callout">
                <div className="stack-sm">
                  <p className="eyebrow">for teachers</p>
                  <h3 className="panel-title">How to implement this in the classroom</h3>
                  <p className="section-copy compact-copy">
                    A short step-by-step guide for using the dashboard before, during, and after class.
                  </p>
                </div>
                <a
                  className="ghost-button teacher-guide-link"
                  href="/teacher-classroom-guide.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  open pdf guide
                </a>
              </div>
            </div>
          </section>

          <section id="current-state" className="section-surface section-pad section-align-left">
            <div className="container stack-lg">
              <div className="stack-sm">
                <p className="eyebrow">the current state</p>
                <h2>what students should notice right now</h2>
                <p className="section-copy">
                  This section shows how current income gaps, basic costs, and access to resources are linked. A mix of interactions, stats, and visuals helps students follow the story.
                </p>
              </div>

              <div className="estimate-activity-grid">
                <div className="stack-sm estimate-guide-copy">
                  <p className="eyebrow">teacher setup</p>
                  <h3 className="panel-title">Ask students to predict the gap before they see the answer</h3>
                  <p className="section-copy compact-copy">
                    Before students move the sliders, invite them to explain what they think a high-income household and a more typical household in Washington might earn. Once both estimates are on the screen, ask what surprised them, what assumptions shaped their guesses, and what this gap could mean for housing, savings, and everyday stability.
                  </p>
                </div>

                <div className="estimate-card-stack">
                  <IncomeGuessCard />
                  <OtherNinetyGuessCard />
                </div>
              </div>

              <SmallStatsRow />

              <DataDisclaimer />

              <RacialIncomeComparison />
              <Map />

              <QuickExpandVisualGallery />

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
                  Why do today’s inequities matter for the future? Wealth in Washington-state is going to shift dramatically to different people and in different ways. This shift is called the Great Wealth Transfer. It is important that we know when this transfer will happen, how it will happen, and what we should do when it does. Especially because, if the power associated with this wealth falls in your hands, you have the responsibility to do good on the part of your peers.
                </p>
              </div>
              {/* {characterSectionIntro} */}
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
