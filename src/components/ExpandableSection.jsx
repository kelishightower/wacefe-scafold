import React, { useState } from 'react';

// Generic accordion block used in multiple sections.
// Props:
// - title: heading text shown in the trigger row.
// - children: expanded content body.
export default function ExpandableSection({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="expandable">
      {/* The button toggles the open state when clicked. We compute a label explicitly using an if/else below rather than a ternary operator. */}
      <button className="expandable-trigger" onClick={() => setOpen((o) => !o)}>
        <span>{title}</span>
        <small>
          {(() => {
            // determine label text based on `open` value
            if (open) {
              return 'Hide';
            } else {
              return 'Open';
            }
          })()}
        </small>
      </button>

      {open && <div className="expandable-content">{children}</div>}
    </div>
  );
}
