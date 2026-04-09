import React, { useState } from 'react';

const policyCards = [
  {
    title: 'Baby Bonds',
    summary: 'A placeholder card for a policy that helps young people start adulthood with more assets.',
    year: 'Year placeholder',
    audience: 'Historically excluded students and families',
    impact: 'Could reduce the gap in starting wealth over time.',
    support: 'Students could learn about it, share it, and connect it to civic action or school projects.'
  },
  {
    title: 'Down Payment Support',
    summary: 'A placeholder example of a housing support program.',
    year: 'Year placeholder',
    audience: 'First-generation and lower-wealth homebuyers',
    impact: 'Could open a path into home equity for families shut out before.',
    support: 'Students can research local programs and compare who qualifies and who still gets missed.'
  },
  {
    title: 'Community Development Fund',
    summary: 'A placeholder example of investment in local businesses and neighborhood wealth-building.',
    year: 'Year placeholder',
    audience: 'Small businesses and community organizations',
    impact: 'Can strengthen jobs, local ownership, and neighborhood stability.',
    support: 'Students can highlight community businesses, attend events, and learn how local funding works.'
  }
];

const worryRows = [
  {
    worry: 'I am concerned about paying for college or training.',
    tools: 'Compare grants, apprenticeships, and community college pathways. Ask what lowers debt, not just what sounds impressive.'
  },
  {
    worry: 'I am concerned about helping my family and planning for myself at the same time.',
    tools: 'Build a plan that includes shared responsibilities, emergency savings, and a realistic timeline. Delayed does not mean failed.'
  },
  {
    worry: 'I am concerned that I will never be able to buy a home.',
    tools: 'Learn how credit, co-buying, first-time buyer programs, and location choices affect the path to ownership.'
  },
  {
    worry: 'I am concerned that investing is only for rich people.',
    tools: 'Start with the idea of consistency and time. Small amounts, basic knowledge, and low-cost tools still matter.'
  },
  {
    worry: 'I am concerned about making the wrong financial decision.',
    tools: 'Use a pause-check-plan habit: ask who benefits, what the risk is, and what support or advice you need before deciding.'
  },
  {
    worry: 'I am concerned that the system is unequal, so my choices will not matter.',
    tools: 'Both things can be true: systems are unequal and informed choices still matter. Use community, policy knowledge, and shared support to make stronger decisions.'
  }
];

export default function Toolkit() {
  const [openModal, setOpenModal] = useState(-1);
  const [expandedRows, setExpandedRows] = useState({ 0: true });

  function openCard(index) {
    setOpenModal(index);
  }

  function closeModal() {
    setOpenModal(-1);
  }

  function toggleRow(index) {
    setExpandedRows(function (previousValue) {
      return {
        ...previousValue,
        [index]: !previousValue[index]
      };
    });
  }

  return (
    <div className="toolkit-stack">
      <div className="stack-sm">
        <p className="eyebrow">policies, programs, and investments</p>
        <div className="toolkit-grid">
          {policyCards.map(function (card, index) {
            return (
              <button
                key={card.title}
                type="button"
                className="tool-card"
                onClick={function () {
                  openCard(index);
                }}
              >
                <span className="tool-card-tag">open card</span>
                <h3>{card.title}</h3>
                <p>{card.summary}</p>
              </button>
            );
          })}
        </div>
      </div>

      <div className="panel">
        <div className="resource-table" role="table" aria-label="Student worries and resources">
          {worryRows.map(function (row, index) {
            const isOpen = Boolean(expandedRows[index]);

            return (
              <div key={row.worry} className="resource-row" role="rowgroup">
                <button
                  type="button"
                  className="resource-row-trigger"
                  onClick={function () {
                    toggleRow(index);
                  }}
                >
                  <span>{row.worry}</span>
                  <small>{isOpen ? 'hide' : 'open'}</small>
                </button>
                <div className={isOpen ? 'resource-answer is-open' : 'resource-answer'}>
                  <p>{row.tools}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="panel plain-text-panel">
        <p className="eyebrow">informed economic choices</p>
        <h3 className="panel-title">What does it mean to make informed choices in an unequal system?</h3>
        <p>
          It means understanding that personal decisions do matter, but they do not happen on a level playing field. Students should learn how systems shape risk, opportunity, and access, while also learning how community knowledge, culture, and support can guide stronger choices.
        </p>
        <p>
          This section is intentionally plain and readable so your team can tighten the wording for an 8th grade audience without rebuilding the layout later.
        </p>
      </div>

      {openModal !== -1 && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className="modal-content"
            onClick={function (event) {
              event.stopPropagation();
            }}
          >
            <div className="modal-header">
              <h3>{policyCards[openModal].title}</h3>
              <button type="button" className="modal-close" onClick={closeModal}>
                ×
              </button>
            </div>
            <div className="modal-body">
              <p>{policyCards[openModal].summary}</p>
              <p><strong>Year enacted:</strong> {policyCards[openModal].year}</p>
              <p><strong>Intended for:</strong> {policyCards[openModal].audience}</p>
              <p><strong>Community impact:</strong> {policyCards[openModal].impact}</p>
              <p><strong>How students can support it:</strong> {policyCards[openModal].support}</p>
              <p><strong>External links:</strong> placeholder for website and readings</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
