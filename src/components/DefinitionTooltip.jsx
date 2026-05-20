import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

// DefinitionTooltip renders a bold word the user can click to open a nearby
// popup with the definition. Used for inline glossary functionality.
export default function DefinitionTooltip(props) {
  const term = props.term;
  const definition = props.definition;

  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState(null);
  const tooltipRef = useRef(null);
  const triggerRef = useRef(null);
  const popoverRef = useRef(null);

  function updatePosition() {
    if (!triggerRef.current) {
      return;
    }

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const popoverWidth = Math.min(320, window.innerWidth - 32);
    const popoverHeight = popoverRef.current ? popoverRef.current.offsetHeight : 190;
    const preferredLeft = triggerRect.left + triggerRect.width / 2 - popoverWidth / 2;
    const left = Math.min(Math.max(16, preferredLeft), window.innerWidth - popoverWidth - 16);
    const hasRoomBelow = triggerRect.bottom + popoverHeight + 14 <= window.innerHeight;
    const hasMoreRoomBelow = window.innerHeight - triggerRect.bottom >= triggerRect.top;
    const placement = hasRoomBelow || hasMoreRoomBelow ? 'bottom' : 'top';
    const top =
        placement === 'bottom'
            ? triggerRect.bottom + 10
            : Math.max(16, triggerRect.top - popoverHeight - 10);

    setPosition({
      arrowLeft: triggerRect.left + triggerRect.width / 2 - left,
      left,
      placement,
      top,
      width: popoverWidth
    });
  }

  useEffect(function () {
    if (!visible) {
      return undefined;
    }

    function handleDocumentClick(event) {
      const clickedTrigger = tooltipRef.current && tooltipRef.current.contains(event.target);
      const clickedPopover = popoverRef.current && popoverRef.current.contains(event.target);

      if (!clickedTrigger && !clickedPopover) {
        setVisible(false);
      }
    }

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setVisible(false);
      }
    }

    updatePosition();

    document.addEventListener('mousedown', handleDocumentClick);
    document.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', updatePosition);
    window.addEventListener('scroll', updatePosition, true);

    return function cleanup() {
      document.removeEventListener('mousedown', handleDocumentClick);
      document.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', updatePosition);
      window.removeEventListener('scroll', updatePosition, true);
    };
  }, [visible]);

  useLayoutEffect(function () {
    if (visible) {
      updatePosition();
    }
  }, [visible, term, definition]);

  function toggleVisibility() {
    setVisible(function (prev) {
      return !prev;
    });
  }

  function closeModal() {
    setVisible(false);
  }

  return (
    <span className="definition-tooltip" ref={tooltipRef}>
      <button
        onClick={toggleVisibility}
        type="button"
        className="definition-tooltip-trigger"
        aria-expanded={visible}
        ref={triggerRef}
      >
        {term}
      </button>

      {visible && position && createPortal(
        <div
          className="definition-tooltip-popover"
          data-placement={position.placement}
          ref={popoverRef}
          role="dialog"
          aria-label={`${term} definition`}
          style={{
            '--definition-arrow-left': `${position.arrowLeft}px`,
            left: `${position.left}px`,
            top: `${position.top}px`,
            width: `${position.width}px`
          }}
        >
          <div className="definition-tooltip-header">
            <h3>{term}</h3>
            <button
              type="button"
              className="definition-tooltip-close"
              onClick={closeModal}
              aria-label="Close definition"
            >
              ×
            </button>
          </div>
          <div className="definition-tooltip-body">
            <p>{definition}</p>
          </div>
        </div>,
        document.body
      )}
    </span>
  );
}
