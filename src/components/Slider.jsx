import React from 'react';

// Simple wrapper around an HTML range input. Accepts props for minimum,
// maximum, step size, current value, and a change handler. Default values
// are provided so the component can be used with or without all props.
export default function Slider(props) {
  const min = props.min !== undefined ? props.min : 0;
  const max = props.max !== undefined ? props.max : 100;
  const step = props.step !== undefined ? props.step : 1;
  const value = props.value;
  const onChangeHandler = props.onChange;

  function handleChange(event) {
    const raw = event.target.value;
    const numeric = Number(raw);
    onChangeHandler(numeric);
  }

  return (
    <div className="flex flex-col items-center p-4">
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
        className="w-full"
      />
      <span className="mt-2 text-sm">{value}</span>
    </div>
  );
}
