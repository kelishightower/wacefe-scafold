import React, { useMemo, useState } from 'react';

// Static map of content for each node in the flow diagram. Each key is an
// identifier that is referenced in `flowRows` below. You can update the text
// here without touching any rendering logic.
const factMap = {
  slavery: {
    label: 'slavery',
    definition:
      'Slavery was a system of forced labor that built enormous wealth for some while denying Black Americans wages, property rights, and inheritance.',
    quickFact:
      'Enslaved labor created enormous wealth for the U.S. economy while preventing Black Americans from building wealth of their own through wages, property ownership, or inheritance.',
    whyItMatters:
      'The economic effects of slavery did not end when slavery was abolished. Generations of exclusion from land ownership, education, banking, and higher-paying jobs limited opportunities for many Black families to build wealth over time. These long-term disadvantages still influence modern wealth gaps seen in Washington and across the country today.',
    learnMore:
      'https://www.humanities.org/spark/a-little-known-story-of-slavery-in-washington-territory/'
  },
  landOwnership: {
    label: 'land ownership',
    definition:
      'Land ownership means holding property rights that families can use, invest, and pass down across generations.',
    quickFact:
      'Owning land and property has historically been one of the strongest ways families build and pass down wealth across generations.',
    whyItMatters:
      'Many communities of color were historically denied equal access to land ownership through discriminatory laws, violence, and unfair lending practices. Because homes and property often grow in value over time, being excluded from ownership also meant being excluded from opportunities to build long-term financial stability and generational wealth.',
    learnMore:
      'https://www.hillsdale.edu/educational-outreach/free-market-forum/2008-archive/property-rights-in-american-history/'
  },
  systemicRacism: {
    label: 'systemic racism',
    definition:
      'Systemic racism describes policies, institutions, and social systems that create unequal outcomes between racial groups, even when discrimination is not always obvious.',
    quickFact:
      'Systemic racism refers to policies, institutions, and social systems that create unequal outcomes between racial groups, even when discrimination is not always obvious.',
    whyItMatters:
      'Systemic racism can shape access to education, healthcare, housing, employment, and political power. Over time, these unequal systems compound and contribute to wealth disparities that continue across generations. The effects can still be seen today in differences in income, neighborhood resources, and economic opportunity throughout Washington State.',
    learnMore:
      'https://www.raceforward.org/resources/video-series/what-systemic-racism'
  },
  housing: {
    label: 'unequal housing policies',
    definition:
      'Unequal housing policies are rules and practices that limited where many people of color could live or buy homes.',
    quickFact:
      'Housing policies such as redlining and restrictive covenants historically limited where many people of color could live or buy homes.',
    whyItMatters:
      'Housing strongly affects access to safer neighborhoods, stronger schools, transportation, and long-term wealth. When families were excluded from certain neighborhoods or denied home loans, they often lost opportunities to build equity and financial security that could be passed down to future generations.',
    learnMore:
      'https://dsl.richmond.edu/panorama/redlining/'
  },
  neoliberalism: {
    label: 'neoliberalism',
    definition:
      'Neoliberalism is an economic approach that emphasizes free markets, privatization, and reduced government involvement in social programs.',
    quickFact:
      'Neoliberalism is an economic approach that emphasizes free markets, privatization, and reduced government involvement in social programs.',
    whyItMatters:
      'Supporters argue these policies encourage economic growth, but critics note they can widen inequality when access to resources is already uneven. Reductions in public support for housing, healthcare, education, and wages can disproportionately affect lower-income communities and make existing wealth gaps harder to close.',
    learnMore:
      'https://www.investopedia.com/terms/n/neoliberalism.asp'
  },
  votingBarriers: {
    label: 'voting barriers',
    definition:
      'Voting barriers are laws and practices that make it harder for some groups to participate in elections.',
    quickFact:
      'Throughout U.S. history, laws and practices have been used to limit voting access for certain racial and ethnic groups.',
    whyItMatters:
      'Voting influences which communities receive political attention, funding, and policy support. When groups face barriers to political participation, they may also have less influence over decisions related to schools, housing, transportation, wages, and economic investment in their communities.',
    learnMore:
      'https://nlihc.org/resource/history-voter-suppression'
  },
  culturalOppression: {
    label: 'cultural oppression',
    definition:
      'Cultural oppression happens when the traditions, identities, or experiences of some groups are treated as less valuable or accepted.',
    quickFact:
      'Cultural oppression occurs when the traditions, identities, or experiences of certain groups are treated as less valuable or less accepted within society.',
    whyItMatters:
      'Cultural oppression can affect confidence, representation, educational experiences, and access to opportunities. Over time, stereotypes and social exclusion can influence hiring, discipline in schools, media representation, and public policy in ways that contribute to unequal outcomes between communities.',
    learnMore:
      'https://www.youtube.com/watch?v=WKd3pmCaRGQ&themeRefresh=1'
  },
  hiring: {
    label: 'racist hiring processes',
    definition:
      'Racist hiring processes are practices that treat applicants differently based on race, ethnicity, names, accents, or appearance.',
    quickFact:
      'Hiring discrimination can happen when applicants are treated differently because of race, ethnicity, names, accents, or appearance.',
    whyItMatters:
      'Employment affects income, healthcare access, career advancement, and retirement savings. Even small patterns of discrimination in hiring or promotions can compound over time, limiting wealth-building opportunities for entire communities across generations.',
    learnMore:
      'https://www.aclu.org/news/racial-justice/the-long-history-of-discrimination-in-job-hiring-assessments'
  },
  schools: {
    label: 'racism in schools',
    definition:
      'Racism in schools refers to unequal access to funding, courses, technology, and support across different communities.',
    quickFact:
      'Schools in different communities often have unequal access to funding, advanced courses, technology, and experienced teachers.',
    whyItMatters:
      'Education is closely tied to future job opportunities and income. When students face unequal educational resources or discriminatory treatment, those disadvantages can follow them into adulthood and contribute to broader economic inequality over time.',
    learnMore:
      'https://www.sophe.org/wp-content/uploads/2017/01/StealthInequities.pdf'
  },
  homeownership: {
    label: 'barriers to homeownership',
    definition:
      'Barriers to homeownership are obstacles like credit access, savings requirements, and biased lending practices.',
    quickFact:
      'Buying a home often requires access to credit, savings, stable income, and fair lending practices.',
    whyItMatters:
      'Communities that face discrimination in lending, appraisals, or banking may have more difficulty purchasing homes and building equity. Because homeownership is one of the main ways families accumulate wealth in the United States, these barriers can have long-term effects on generational wealth.',
    learnMore:
      'https://www.habitat.org/historic-housing-discrimination-us'
  },
  justice: {
    label: 'criminal justice system',
    definition:
      'The criminal justice system can affect economic opportunity through policing, courts, and incarceration.',
    quickFact:
      'Interactions with the criminal justice system can affect employment, housing access, education opportunities, and long-term financial stability.',
    whyItMatters:
      'Communities that experience disproportionate policing, sentencing, or incarceration rates may also experience greater economic instability. Criminal records, legal fees, and lost income opportunities can create financial barriers that affect both individuals and families across generations.',
    learnMore:
      'https://www.ncsl.org/civil-and-criminal-justice/racial-and-ethnic-disparities-in-the-criminal-justice-system'
  },
  outcome: {
    label: 'wealth disparities in wa',
    definition:
      'These systems combine to shape measurable gaps in income, assets, and homeownership in Washington.',
    quickFact:
      'These combined systems produce measurable disparities in income, savings, homeownership, and assets.',
    whyItMatters:
      'Understanding the connected causes helps communities design solutions that target root conditions.',
    learnMore: 'https://opportunityinstitute.org/research/post/income-inequality-in-washington/'
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
  const [isExpanded, setIsExpanded] = useState(false);

  // look up the active node's data. useMemo is used here for illustration,
  // but this could just be a normal variable since the lookup is cheap.
  const activeFact = useMemo(function () {
    return factMap[activeId];
  }, [activeId]);

  function handleSelectTopic(nodeId) {
    setActiveId(nodeId);
    setIsExpanded(false);
  }

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
            handleSelectTopic(nodeId);
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
              how has our system shaped inequalities?
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
          <strong>Definition:</strong> {activeFact.definition}
        </p>
        <button
          type="button"
          className="accent-button"
          onClick={function () {
            setIsExpanded(true);
          }}
        >
          View more details
        </button>
      </aside>

      {isExpanded && (
        <div className="modal-overlay" onClick={function () {
          setIsExpanded(false);
        }}>
          <div
            className="modal-content quick-expand-modal"
            onClick={function (event) {
              event.stopPropagation();
            }}
          >
            <div className="modal-header">
              <div className="stack-sm">
                <p className="eyebrow">expanded detail</p>
                <h3>{activeFact.label}</h3>
              </div>
              <button
                type="button"
                className="modal-close"
                onClick={function () {
                  setIsExpanded(false);
                }}
              >
                ×
              </button>
            </div>
            <div className="modal-body quick-expand-modal-body">
              <p>
                <strong>Quick fact:</strong> {activeFact.quickFact}
              </p>
              <p>
                <strong>Why it matters today:</strong> {activeFact.whyItMatters}
              </p>
              {activeFact.learnMore && (
                <p>
                  <strong>Learn more:</strong>{' '}
                  <a href={activeFact.learnMore} target="_blank" rel="noreferrer">
                    {activeFact.learnMore}
                  </a>
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
