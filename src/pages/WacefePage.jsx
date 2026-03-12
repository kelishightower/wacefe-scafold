import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Map from '../components/Map';
import ComparisonTool from '../components/ComparisonTool';
import Toolkit from '../components/Toolkit';
import ExpandableSection from '../components/ExpandableSection';
import QuickFactsFlow from '../components/QuickFactsFlow';

// The WacefePage component renders the main landing page of the app.
// It's intentionally verbose and heavily commented so that beginners can
// read through every piece of logic, understand where things live, and make
// edits without getting lost in terse syntax.
//
// Key notes for maintainers:
// 1. Each `<section>` represents a major page block. The `id` on the section
//    must match the corresponding link in `<Navbar>` so scrolling works.
// 2. We avoid using shorthand operators (like `?:` or `&&`) when rendering
//    content; instead, we compute intermediate variables or use simple `if`
//    statements. This makes control flow explicit and easier to follow.
// 3. The page is essentially static markup with a single piece of state
//    (`incomeEstimate`) used by the slider. Everything else is plain JSX.
//
export default function WacefePage() {
  // React state hook for the interactive slider value. Starts at 270000.
  const [incomeEstimate, setIncomeEstimate] = useState(270000);

  // Handler called when the user moves the input range. We parse the event
  // value and store it as a number in component state. The handler is defined
  // as a named function instead of an inline arrow so newcomers can find it
  // easily and modify it.
  function handleIncomeChange(event) {
    // event.target.value is a string; convert to number before storing.
    const rawValue = event.target.value;
    const parsed = Number(rawValue);
    setIncomeEstimate(parsed);
  }

  // Compute the percentage across the 0‑500k range so the label can be
  // positioned above the thumb. This separates logic from JSX.
  const sliderPercent = (incomeEstimate / 500000) * 100;

  // The value used in the disabled "real stats" slider. We keep it in its
  // own constant to make it easy to change later.
  const actualMedianIncome = 400000;

  // Render the component tree.
  return (
    <div className="wacefe-page">
      {/* The primary navigation is now a discreet top bar to fit the existing homepage style. */}
      <Navbar />

      {/* Content shell is offset from top nav (no left sidebar margin). */}
      <div className="wacefe-content-shell">
        <main>
          {/* ===== Introduction section ===== */}
          <section id="introduction" className="hero section-pad">
            <div className="container">
              <p className="eyebrow">WACEFE Prototyping</p>
              <h1>Data-driven visualizations for financial literacy</h1>
              <p className="lead">
                Financial learning is not just about budgeting. It is about
                understanding the economic landscape you are navigating.
              </p>
            </div>
          </section>

          {/* ===== Current state with map and guess slider ===== */}
          <section id="current-state" className="section-purple section-pad">
            <div className="container stack-lg">
              <div className="stack-sm">
                <p className="eyebrow">Current State</p>

                <p className="section-copy">
                  Data helps us see patterns that are hard to notice in everyday
                  life. It shows where incomes are higher or lower, where home
                  ownership is common or rare, and where educational investment
                  vary. When we can see these patterns we can better understand
                  the challenges, and advantages, that different communities are
                  given.
                </p>

                <h2>How wealth is distributed in Washington</h2>
                <p className="section-copy">
                  Explore county-level patterns in income, education, race and
                  ethnicity, homeownership, and school funding.
                </p>
              </div>

              {/* Map visualization component. */}
              <Map />

              {/* Panel containing slider that lets user guess a number. */}
              <div className="panel guess-panel">
                <p className="panel-title">
                  What do you think the median income is for the wealthiest 10%
                  of WA residents?
                </p>

                {/* Slider plus value label. */}
                <div className="slider-container">
                  <input
                    type="range"
                    min="0"
                    max="500000"
                    value={incomeEstimate}
                    onChange={handleIncomeChange}
                    className="slider"
                    aria-label="Income estimate"
                  />

                  {/* The floating value above the thumb is just a span positioned
                      using inline `left` style. We compute `sliderPercent` above. */}
                  <span
                    className="slider-value"
                    style={{ left: sliderPercent + '%' }}
                  >
                    ${incomeEstimate.toLocaleString()}
                  </span>
                </div>

                {/* Static labels under the slider. */}
                <div className="range-labels">
                  <span>$0</span>
                  <span>$500,000</span>
                </div>

                {/* Expandable section shows the actual value when opened. This
                    uses the generic <ExpandableSection> component. */}
                <ExpandableSection title="See Real Stats">
                  <p className="mb-2">
                    Actual median income for the wealthiest 10% of WA residents:
                  </p>

                  <div className="slider-container">
                    <input
                      type="range"
                      min="0"
                      max="500000"
                      value={actualMedianIncome}
                      disabled
                      className="slider"
                      aria-label="Actual median income"
                    />
                    <span
                      className="slider-value"
                      style={{ left: (actualMedianIncome / 500000) * 100 + '%' }}
                    >
                      ${actualMedianIncome.toLocaleString()}
                    </span>
                  </div>

                  <div className="range-labels">
                    <span>$0</span>
                    <span>$500,000</span>
                  </div>
                </ExpandableSection>

                {/* Additional explanatory text below the panel. This is just
                    plain paragraphs, which are easy to edit or remove. */}
                <p className="mb-3">
                  what can we tell from looking at these disparities?
                </p>

                <p className="mb-3">
                  clearly, money is not spread equally among WA residents. there
                  are notable differences in measures ‘wealth’ across many
                  different groups... geographic communities, income percentiles,
                  racial/ethnic identities, and more! [many of which to be detailed
                  beyond initial prototype & MVP stage].
                </p>
              </div>
            </div>
          </section>

          {/* ===== History section ===== */}
          <section id="history" className="section-yellow section-pad">
            <div className="container stack-lg">
              <div className="stack-sm">
                <p className="eyebrow">Context</p>
                <h2>Economic and social histories</h2>
                <p className="section-copy">
                  the history of Washington’s finances -- on both individual and
                  group levels -- do not exist in a bubble. to truly understand
                  the economy, we also need to understand the past and present
                  social contexts that have influenced the state of things today.
                </p>

                <p className="section-copy">
                  the current disparities we observe are not accidental -- they
                  are product of historical and systemic forces....
                </p>
              </div>

              {/* QuickFactsFlow renders a small interactive flow chart. No logic
                  here, just include the component. */}
              <QuickFactsFlow />
            </div>
          </section>

          {/* ===== Comparison simulator section ===== */}
          <section id="comparison" className="section-light section-pad">
            <div className="container stack-lg">
              <div className="stack-sm">
                <p className="eyebrow">the great wealth transfer</p>
                <h2>our future reality: the great wealth transfer</h2>
                <p className="section-copy">
                  The great wealth transfer refers to the large amount of money
                  and property that older generations are expected to pass down to
                  younger generations over the next several years.
                </p>
                <p className="section-copy">
                  It is happening now because many people from the baby boomer
                  generation are reaching older age. As this large generation
                  retires and eventually passes on their assets, such as homes,
                  savings, businesses, and investments, those assets will be
                  transferred to their children and grandchildren.
                </p>
                <p className="section-copy">
                  This shift is one of the largest transfers of wealth in U.S.
                  history. Many believe it could help younger generations build
                  financial stability, while others worry it may increase the gap
                  between wealthy and lower-income families.
                </p>
              </div>

              {/* Embed the interactive comparison tool component. */}
              <ComparisonTool />
            </div>
          </section>

          {/* ===== Toolkit section ===== */}
          <section id="toolkit" className="section-mint section-pad">
            <div className="container stack-lg">
              <div className="stack-sm">
                <p className="eyebrow">Action</p>
                <h2>Your toolkit for an equitable future</h2>
                <p className="section-copy">
                  We are entering a future that will not be equal, yet it remains
                  full of opportunity. Financial education isn’t just about
                  budgeting. It’s about understanding how money moves, how wealth
                  grows, and how our financial choices impact our communities. This
                  toolkit provides useful tools and resources to build your own
                  future while thinking beyond your own economic standing.
                </p>
              </div>
              <Toolkit />
            </div>
          </section>
        </main>

        {/* ===== Footer ===== */}
        <footer className="wacefe-footer section-pad">
          <div className="container footer-inner">
            <h3>WACEFE</h3>
            <p>
              Stay up to date on ways to help provide economic and financial
              education to students across the state.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}