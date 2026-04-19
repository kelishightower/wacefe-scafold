import React, { useState } from 'react';

// DefinitionTooltip renders a bold word the user can click to open a modal
// popup with the definition. Used for inline glossary functionality.
export default function DefinitionTooltip(props) {
  const term = props.term;
  const definition = props.definition;

  const [visible, setVisible] = useState(false);

  function toggleVisibility() {
    setVisible(function (prev) {
      return !prev;
    });
  }

  function closeModal() {
    setVisible(false);
  }

  return (
    <>
      <button
        onClick={toggleVisibility}
        type="button"
        style={{
          background: 'none',
          border: 'none',
          padding: 0,
          margin: 0,
          fontWeight: 'bold',
          cursor: 'pointer',
          textDecoration: 'underline',
          textDecorationStyle: 'dotted',
          color: 'inherit',
          font: 'inherit'
        }}
      >
        {term}
      </button>

      {visible && (
        <div
          className="modal-overlay"
          onClick={closeModal}
        >
          <div
            className="modal-content"
            onClick={function (event) {
              event.stopPropagation();
            }}
          >
            <div className="modal-header">
              <h3>{term}</h3>
              <button
                type="button"
                className="modal-close"
                onClick={closeModal}
              >
                ×
              </button>
            </div>
            <div className="modal-body">
              <p>{definition}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
