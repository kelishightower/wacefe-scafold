import React, { useState } from 'react';

const sections = [
  { id: 'introduction', label: 'overview' },
  { id: 'current-state', label: 'current state' },
  { id: 'history', label: 'histories' },
  { id: 'comparison', label: 'future reality' },
  { id: 'toolkit', label: 'toolkit' }
];

export default function Navbar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  function handleClick(id) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  function toggleNav() {
    setIsCollapsed(function (previousValue) {
      return !previousValue;
    });
  }

  return (
    <nav className={`wacefe-nav ${isCollapsed ? 'is-collapsed' : ''}`} aria-label="Section navigation">
      <div className="wacefe-nav-header">
        {!isCollapsed && <span className="wacefe-nav-label">Nav</span>}
        <button
          type="button"
          className="wacefe-nav-toggle"
          onClick={toggleNav}
          aria-expanded={!isCollapsed}
          aria-label={isCollapsed ? 'Expand navigation' : 'Collapse navigation'}
        >
          {isCollapsed ? '≡' : 'collapse'}
        </button>
      </div>
      {!isCollapsed && (
        <div className="wacefe-nav-inner">
          <div className="wacefe-nav-links">
            {sections.map(function (section) {
              return (
                <button
                  key={section.id}
                  type="button"
                  className="wacefe-pill"
                  onClick={function () {
                    handleClick(section.id);
                  }}
                >
                  {section.label}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
