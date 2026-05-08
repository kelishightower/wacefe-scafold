import React from 'react';

export default function ReflectionQuestion({ children }) {
  return (
    <div className="reflection-question">
      <div className="reflection-question-marker" aria-hidden="true">
        ?
      </div>
      <div className="stack-sm">
        <p className="reflection-question-title">Reflection Question</p>
        <p>{children}</p>
      </div>
    </div>
  );
}
