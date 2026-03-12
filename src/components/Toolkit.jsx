import React, { useState } from 'react';

// Toolkit cards are defined in this array. You can add or remove entries here
// and the UI will update automatically. Each object must have a `title` and
// `body` property; the strings are simply displayed to the user.
const cards = [
  {
    title: 'Budgeting & Cash Flow Management',
    body: 'Track monthly inflows, fixed costs, and decision tradeoffs with practical templates.'
  },
  {
    title: 'Investing Fundamentals',
    body: 'Understand risk tiers, index funds, and compounding through clear step-by-step paths.'
  },
  {
    title: 'Income & Career Strategy',
    body: 'Compare salary bands, benefits, and mobility options across regions and industries.'
  },
  {
    title: 'Tax Literacy',
    body: 'Learn how withholding, credits, and bracket shifts affect long-term financial planning.'
  },
  {
    title: 'Asset Ownership & Wealth Building',
    body: 'Explore pathways to ownership and how policy access impacts long-term outcomes.'
  }
];

export default function Toolkit() {
  // openModal holds the index of the currently open modal. When it is -1,
  // no modal is shown. Using an index keeps the modal logic simple.
  const [openModal, setOpenModal] = useState(-1);

  // Function to open a modal given its index.
  function openCard(index) {
    setOpenModal(index);
  }

  // Function to close whichever modal is open.
  function closeModal() {
    setOpenModal(-1);
  }

  // Helper to render each card button.
  function renderCard(card, idx) {
    return (
      <button
        key={card.title}
        className="tool-card"
        onClick={() => openCard(idx)}
      >
        <h3>{card.title}</h3>
        <p>{card.body}</p>
        <span>Tap to expand</span>
      </button>
    );
  }

  return (
    <>
      {/* grid of card buttons */}
      <div className="toolkit-grid">
        {cards.map(function (card, index) {
          return renderCard(card, index);
        })}
      </div>

      {/* modal overlay only rendered when a card is open */}
      {openModal !== -1 && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className="modal-content"
            onClick={function (e) {
              // prevent clicks inside modal from closing it
              e.stopPropagation();
            }}
          >
            <div className="modal-header">
              <h3>{cards[openModal].title}</h3>
              <button className="modal-close" onClick={closeModal}>
                ×
              </button>
            </div>
            <div className="modal-body">
              <p>{cards[openModal].body}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
