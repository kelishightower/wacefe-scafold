import React, { useState } from 'react';

// DefinitionTooltip renders a word the user can click to toggle a small
// popup containing a definition. This is a simple component meant to be
// reused across the site whenever you want inline glossary functionality.
export default function DefinitionTooltip(props) {
  const term = props.term;
  const definition = props.definition;

  // track whether the tooltip is currently visible
  const [visible, setVisible] = useState(false);

  function toggleVisibility() {
    setVisible(function (prev) {
      return !prev;
    });
  }

  return (
    <span className="relative inline-block">
      <button
        className="text-blue-600 underline"
        onClick={toggleVisibility}
        type="button"
      >
        {term}
      </button>

      {/* only render the popup div when `visible` is true */}
      {/* only render the tooltip div when `visible` is true */}
      {(() => {
        if (visible) {
          return (
            <div className="absolute z-10 p-2 w-64 bg-white border rounded shadow mt-2 text-sm">
              {definition}
            </div>
          );
        } else {
          return null;
        }
      })()}
    </span>
  );
}
