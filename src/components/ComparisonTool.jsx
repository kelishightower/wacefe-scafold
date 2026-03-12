import React, { useMemo, useState } from 'react';

// Scenario presets for the comparison simulator. The keys (Low/Medium/High)
// represent user-selectable tiers. The values are objects containing strings
// formatted with currency or percent symbols. If you later switch to numeric
// values (e.g. from an API), adjust the parsing logic in `computeDelta`.
const options = {
  Low: { earnings: '$42,000', housing: '53%', savings: '$900' },
  Medium: { earnings: '$76,000', housing: '38%', savings: '$6,300' },
  High: { earnings: '$142,000', housing: '24%', savings: '$22,100' }
};

// ProfileCard is a small component used twice inside ComparisonTool. It shows
// a title, a <select> to pick the tier, and a simple list of the values for
// that tier. It receives all data from its parent via props so it has no state
// of its own.
function ProfileCard(props) {
  // Destructure props for clarity.
  const label = props.label;
  const value = props.value; // one of 'Low', 'Medium', 'High'
  const onChangeHandler = props.onChange;

  // Look up the data for whatever tier is currently selected.
  const data = options[value];

  return (
    <article className="profile-card">
      <p className="eyebrow">{label}</p>

      {/* dropdown to select tier */}
      <select value={value} onChange={onChangeHandler}>
        {/* build options list explicitly rather than using a map expression */}
        {Object.keys(options).map(function (o) {
          return (
            <option key={o} value={o}>
              {o}
            </option>
          );
        })}
      </select>

      {/* display the numeric values for the chosen tier */}
      <ul>
        <li>
          <span>Annual earnings</span>
          <strong>{data.earnings}</strong>
        </li>
        <li>
          <span>Housing burden</span>
          <strong>{data.housing}</strong>
        </li>
        <li>
          <span>Median savings</span>
          <strong>{data.savings}</strong>
        </li>
      </ul>
    </article>
  );
}

export default function ComparisonTool() {
  // state for the two profile selectors. Using descriptive variable names
  // makes it easier for newcomers to follow.
  const [firstProfile, setFirstProfile] = useState('Low');
  const [secondProfile, setSecondProfile] = useState('High');

  // Helper function to compute the dollar gap between the two selected
  // earnings values. We parse the strings by stripping out dollar signs and
  // commas, then convert to a Number. Using useMemo ensures the value is
  // recomputed only when `firstProfile` or `secondProfile` changes.
  const computeDelta = () => {
    function parseCurrency(str) {
      // remove any non-digit characters
      const digitsOnly = str.replace(/[^0-9]/g, '');
      return Number(digitsOnly);
    }

    const firstEarnings = options[firstProfile].earnings;
    const secondEarnings = options[secondProfile].earnings;

    const firstNumber = parseCurrency(firstEarnings);
    const secondNumber = parseCurrency(secondEarnings);

    return secondNumber - firstNumber;
  };

  const delta = useMemo(computeDelta, [firstProfile, secondProfile]);

  // Handler functions passed to the ProfileCard components. These simply
  // update the corresponding state variables with the new selection value.
  function handleFirstChange(event) {
    setFirstProfile(event.target.value);
  }

  function handleSecondChange(event) {
    setSecondProfile(event.target.value);
  }

  return (
    <section className="panel panel-compare">
      <div className="panel-header">
        <h3 className="panel-title">Wealth Comparison Simulator</h3>
      </div>

      {/* two profile cards side by side */}
      <div className="profile-grid">
        <ProfileCard
          label="Profile 1"
          value={firstProfile}
          onChange={handleFirstChange}
        />
        <ProfileCard
          label="Profile 2"
          value={secondProfile}
          onChange={handleSecondChange}
        />
      </div>

      {/* summary delta card */}
      <div className="delta-card">
        <p className="eyebrow">Income Difference</p>
        <h4>${delta.toLocaleString()}</h4>
      </div>
    </section>
  );
}
