import React, { useMemo, useState } from 'react';

// Static map of content for each node in the flow diagram. Each key is an
// identifier that is referenced in `flowRows` below. You can update the text
// here without touching any rendering logic.
const factMap = {
  slavery: {
    label: 'Slavery',
    quickFact:
      'The wealth created through enslaved labor established long-term economic advantages that were inherited across generations.',
    whyItMatters:
      'This helps explain why present-day wealth gaps are rooted in structural history, not individual choices alone.'
  },
  landOwnership: {
    label: 'Land Ownership',
    quickFact:
      'Policy and legal access to land ownership strongly shaped who could accumulate intergenerational wealth.',
    whyItMatters:
      'Home and land equity are key wealth engines, so unequal access compounds over decades.'
  },
  systemicRacism: {
    label: 'Systemic Racism',
    quickFact:
      'Institutional rules across housing, labor, education, and lending have produced unequal outcomes at scale.',
    whyItMatters:
      'The issue is system-level, so long-term solutions also need policy and institutional change.'
  },
  housing: {
    label: 'Unequal Housing Policies',
    quickFact:
      'Redlining, exclusionary zoning, and unequal mortgage access limited where families could buy or build equity.',
    whyItMatters:
      'Housing policy directly impacts neighborhood opportunity, school quality, and wealth growth.'
  },
  neoliberalism: {
    label: 'Neoliberalism',
    quickFact:
      'Privatization and reduced public safety nets shifted risk to households with fewer financial protections.',
    whyItMatters:
      'When basic costs rise and supports shrink, existing wealth gaps expand faster.'
  },
  votingBarriers: {
    label: 'Voting Barriers',
    quickFact:
      'Restrictions on participation have historically reduced representation for communities most impacted by inequity.',
    whyItMatters:
      'Lower policy voice often leads to fewer protections and fewer public investments.'
  },
  culturalOppression: {
    label: 'Cultural Oppression',
    quickFact:
      'Bias in social norms and institutions influences who gets believed, hired, promoted, or funded.',
    whyItMatters:
      'Cultural narratives shape real economic outcomes through daily decisions and institutional gatekeeping.'
  },
  hiring: {
    label: 'Racist Hiring Processes',
    quickFact:
      'Bias in recruitment, interviews, and promotions contributes to wage and leadership disparities.',
    whyItMatters:
      'Income inequality today becomes wealth inequality tomorrow through savings and asset ownership gaps.'
  },
  schools: {
    label: 'Racism in Schools',
    quickFact:
      'Uneven school funding and disciplinary bias affect long-term educational and economic pathways.',
    whyItMatters:
      'Education access strongly predicts earning potential and mobility across generations.'
  },
  homeownership: {
    label: 'Barriers to Homeownership',
    quickFact:
      'Credit barriers, appraisal bias, and cost burdens reduce entry to homeownership for many families.',
    whyItMatters:
      'Without home equity, families miss one of the most common paths to intergenerational wealth.'
  },
  justice: {
    label: 'Criminal Justice System',
    quickFact:
      'Disproportionate policing and sentencing create employment, housing, and income barriers.',
    whyItMatters:
      'System involvement can reduce lifetime earnings and limit wealth transfer opportunities.'
  },
  outcome: {
    label: 'Wealth Disparities in WA',
    quickFact:
      'These combined systems produce measurable disparities in income, savings, homeownership, and assets.',
    whyItMatters:
      'Understanding the connected causes helps communities design solutions that target root conditions.'
  }
};

// Defines which nodes appear on each row of the flow diagram. This array
// structure is read by the renderer below, so keep it in sync with the keys
// defined in `factMap`.
const flowRows = [
  ['slavery', 'landOwnership', 'systemicRacism'],
  ['housing', 'neoliberalism', 'votingBarriers', 'culturalOppression'],
  ['hiring', 'schools', 'homeownership', 'justice'],
  ['outcome']
];

export default function QuickFactsFlow() {
  // which node is currently selected; start with the first one so there's
  // content visible immediately.
  const [activeId, setActiveId] = useState('slavery');

  // look up the active node's data. useMemo is used here for illustration,
  // but this could just be a normal variable since the lookup is cheap.
  const activeFact = useMemo(function () {
    return factMap[activeId];
  }, [activeId]);

  // helper to render a row of nodes; we do not use inline arrow functions
  // inside JSX so beginners can see the process more clearly.
  function renderRow(rowArray, rowIndex) {
    const cells = [];
    for (let i = 0; i < rowArray.length; i++) {
      const nodeId = rowArray[i];
      const node = factMap[nodeId];
      const isActive = nodeId === activeId;

      cells.push(
        <button
          key={nodeId}
          type="button"
          className={
            'quickfacts-node' + (isActive ? ' is-active' : '')
          }
          onClick={function () {
            setActiveId(nodeId);
          }}
          aria-pressed={isActive}
        >
          {node.label}
        </button>
      );
    }
    return (
      <div
        key={'row-' + rowIndex}
        className={'quickfacts-row quickfacts-row-' + (rowIndex + 1)}
      >
        {cells}
      </div>
    );
  }

  return (
    <div className="quickfacts-shell">
      <section
        className="panel quickfacts-panel"
        aria-labelledby="quickfacts-title"
      >
        <div className="quickfacts-main">
          <div className="quickfacts-header">
            <h3 id="quickfacts-title" className="panel-title">
              How Has Our System Shaped Inequalities?
            </h3>
            <span className="quickfacts-badge">Quick Facts</span>
          </div>

          <div
            className="quickfacts-tree"
            role="group"
            aria-label="Inequality factors flow diagram"
          >
            {flowRows.map(function (row, idx) {
              return renderRow(row, idx);
            })}
          </div>
        </div>
      </section>

      <aside className="quickfacts-popup" aria-live="polite">
        <p className="eyebrow">Selected Topic</p>
        <h4>{activeFact.label}</h4>
        <p>
          <strong>Quick fact:</strong> {activeFact.quickFact}
        </p>
        <p>
          <strong>Why it matters:</strong> {activeFact.whyItMatters}
        </p>
      </aside>
    </div>
  );
}
