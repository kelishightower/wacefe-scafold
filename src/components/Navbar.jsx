import React, { useState } from 'react';

// Navigation items are centralized here so you only update one list
// when adding/removing major sections in the page.
//
// How to edit:
// 1) Add a new object with { id, label }.
// 2) Ensure `id` matches the target section's `id` in WacefePage.jsx.
// 3) Keep labels short so the side rail stays clean.
const sections = [
  { id: 'introduction', label: 'Introduction' },
  { id: 'current-state', label: 'Current State' },
  { id: 'history', label: 'History' },
  { id: 'comparison', label: 'Comparison' },
  { id: 'toolkit', label: 'Toolkit' }
];

export default function Navbar() {
  const [expanded, setExpanded] = useState(false);
  function handleClick(id) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  function renderNavLinks() {
    return sections.map(function (sec) {
      const displayedText = expanded ? sec.label : sec.label.charAt(0);
      return (
        <button
          key={sec.id}
          onClick={function () {
            handleClick(sec.id);
          }}
          className="wacefe-pill"
          aria-label={`Go to ${sec.label}`}
          title={sec.label}
        >
          {displayedText}
        </button>
      );
    });
  }

  return (
    <nav className={`wacefe-nav ${expanded ? 'expanded' : 'collapsed'}`} aria-label="Secondary navigation">
      <div className="wacefe-nav-inner">
        {!expanded && (
          <button
            className="wacefe-nav-circle"
            onClick={function () {
              setExpanded(true);
            }}
            aria-label="Click to open navigation"
          >
            Nav
          </button>
        )}

        {expanded && (
          <>
            <button
              className="wacefe-nav-close"
              onClick={function () {
                setExpanded(false);
              }}
              aria-label="Close navigation"
            >
              ×
            </button>

            <div className="wacefe-nav-links">{renderNavLinks()}</div>
          </>
        )}
      </div>
    </nav>
  );
}
