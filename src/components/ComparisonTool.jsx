import React, { useMemo, useState } from 'react';

const wealthTransferSteps = [
  {
    title: 'What it is',
    text: 'A large amount of money, homes, businesses, and savings is expected to move from older generations to younger ones.'
  },
  {
    title: 'Why now',
    text: 'Many baby boomers are reaching the stage of life when assets are being passed on, sold, or inherited.'
  },
  {
    title: 'Why it matters',
    text: 'If wealth is already unevenly distributed, a huge transfer can either widen those gaps or become a chance to reduce them.'
  }
];

const characterCards = [
  {
    id: 'maya',
    name: 'Maya',
    summary: 'Lives in South King County, helps with younger siblings, and wants to stay close to family while planning for college.',
    benefit: 'Could benefit if her family gains access to stable housing and inherited equity.',
    risk: 'Could be left out if rising costs force her to delay school or work multiple jobs.'
  },
  {
    id: 'jordan',
    name: 'Jordan',
    summary: 'Lives in a rural county, works part-time, and is deciding whether to stay local or move for opportunity.',
    benefit: 'Could benefit from land, business, or property transfer in a smaller community.',
    risk: 'Could be left out if local jobs stay limited and family assets are small or debt-heavy.'
  },
  {
    id: 'alina',
    name: 'Alina',
    summary: 'Lives in Spokane, is thinking about entrepreneurship, and wants to support elders while building her own future.',
    benefit: 'Could benefit if family savings or a small business create a starting point.',
    risk: 'Could be left out if caregiving pressure and unequal pay reduce her ability to save or invest.'
  }
];

const scenarioTree = {
  maya: {
    start: {
      prompt: 'A family member offers Maya a room at home so she can save money after high school. What does she do?',
      options: [
        { label: 'Stay home and save', next: 'save' },
        { label: 'Move out for independence', next: 'move' }
      ]
    },
    save: {
      prompt: 'Maya has some savings. Should she use them for tuition first or help with a family emergency?',
      options: [
        { label: 'Pay tuition first', outcome: 'Maya keeps momentum toward school, but feels pressure about family responsibility.' },
        { label: 'Help with the emergency', outcome: 'Maya supports her family, but her education timeline may slow down.' }
      ]
    },
    move: {
      prompt: 'Rent is higher than Maya expected. Does she take on extra work or go back to shared family housing?',
      options: [
        { label: 'Work more hours', outcome: 'Maya protects independence, but burnout makes long-term planning harder.' },
        { label: 'Return to shared housing', outcome: 'Maya regains breathing room and may be able to save again sooner.' }
      ]
    }
  },
  jordan: {
    start: {
      prompt: 'Jordan hears that a relative may leave family land to the next generation. What feels most realistic?',
      options: [
        { label: 'Stay local and prepare', next: 'local' },
        { label: 'Leave for a bigger city', next: 'city' }
      ]
    },
    local: {
      prompt: 'Jordan can learn the family business or take a certification program with better pay. Which path wins?',
      options: [
        { label: 'Learn the family business', outcome: 'Jordan may keep community ties strong, but income could grow slowly at first.' },
        { label: 'Take the certification path', outcome: 'Jordan may raise earning power, but risks losing the family asset connection.' }
      ]
    },
    city: {
      prompt: 'Living costs jump quickly. Does Jordan stay for opportunity or return home with new experience?',
      options: [
        { label: 'Stay in the city', outcome: 'Jordan may find more opportunity, but the cost of entry is much higher.' },
        { label: 'Return home later', outcome: 'Jordan brings back new skills and may be more ready to use any family asset well.' }
      ]
    }
  },
  alina: {
    start: {
      prompt: 'Alina wants to launch a small project, but an elder relative needs more support. What comes first?',
      options: [
        { label: 'Support family first', next: 'family' },
        { label: 'Start the project now', next: 'project' }
      ]
    },
    family: {
      prompt: 'A community grant appears later. Does Alina apply alone or with a local partner organization?',
      options: [
        { label: 'Apply alone', outcome: 'Alina keeps control, but the path may be slower and more uncertain.' },
        { label: 'Apply with a partner', outcome: 'Alina gains support and credibility, even if she shares decision-making.' }
      ]
    },
    project: {
      prompt: 'The project earns early income. Does Alina reinvest it or use it to reduce household stress right away?',
      options: [
        { label: 'Reinvest in growth', outcome: 'Alina may build stronger long-term wealth if the project keeps working.' },
        { label: 'Use it for current needs', outcome: 'Alina creates immediate stability, even if growth takes longer.' }
      ]
    }
  }
};

function CharacterScenario(props) {
  const characterId = props.characterId;
  const currentNodeId = props.currentNodeId;
  const onSelectOption = props.onSelectOption;
  const onReset = props.onReset;
  const scenarioNode = scenarioTree[characterId][currentNodeId];
  const isOutcomeStep = Boolean(scenarioNode.options[0].outcome);

  return (
    <div className="scenario-panel">
      <p className="scenario-prompt">{scenarioNode.prompt}</p>
      <div className="scenario-option-list">
        {scenarioNode.options.map(function (option) {
          return (
            <button
              key={option.label}
              type="button"
              className="scenario-option"
              onClick={function () {
                onSelectOption(option);
              }}
            >
              <span>{option.label}</span>
              <small>{option.next ? 'continue' : 'see outcome'}</small>
            </button>
          );
        })}
      </div>
      {isOutcomeStep && (
        <button type="button" className="ghost-button" onClick={onReset}>
          restart this story
        </button>
      )}
    </div>
  );
}

export default function ComparisonTool() {
  const [showTransferValue, setShowTransferValue] = useState(false);
  const [selectedCharacterId, setSelectedCharacterId] = useState('maya');
  const [currentNodeId, setCurrentNodeId] = useState('start');
  const [outcomeText, setOutcomeText] = useState('');

  const selectedCharacter = useMemo(function () {
    return (
      characterCards.find(function (character) {
        return character.id === selectedCharacterId;
      }) || characterCards[0]
    );
  }, [selectedCharacterId]);

  function chooseCharacter(characterId) {
    setSelectedCharacterId(characterId);
    setCurrentNodeId('start');
    setOutcomeText('');
  }

  function handleOptionSelect(option) {
    if (option.next) {
      setCurrentNodeId(option.next);
      setOutcomeText('');
      return;
    }

    setOutcomeText(option.outcome);
  }

  function restartScenario() {
    setCurrentNodeId('start');
    setOutcomeText('');
  }

  return (
    <section className="comparison-stack">
      <div className="panel">
        <div className="stack-sm">
          <p className="eyebrow">short explanation flow</p>
          <h3 className="panel-title">A simple way to explain the Great Wealth Transfer</h3>
        </div>
        <div className="transfer-flow">
          {wealthTransferSteps.map(function (step, index) {
            const isLast = index === wealthTransferSteps.length - 1;

            return (
              <React.Fragment key={step.title}>
                <article className="transfer-step">
                  <span className="transfer-step-label">{step.title}</span>
                  <p>{step.text}</p>
                </article>
                {!isLast && <div className="transfer-arrow" aria-hidden="true">~&gt;</div>}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      <div className="panel wealth-reveal-panel">
        <div className="stack-sm">
          <p className="eyebrow">projected scale</p>
          <h3 className="panel-title">How much wealth may transfer over the next 20 to 30 years?</h3>
        </div>
        <button
          type="button"
          className="accent-button"
          onClick={function () {
            setShowTransferValue(function (previousValue) {
              return !previousValue;
            });
          }}
        >
          {showTransferValue ? 'hide the big number' : 'click here to find out'}
        </button>

        {showTransferValue && (
          <div className="wealth-reveal-content">
            <p className="wealth-number">$124,000,000,000</p>
            <p className="section-copy compact-copy">
              Placeholder total. The visual stacks below are only there to help students feel the scale instead of just reading a huge number.
            </p>
            <div className="money-stack-row" aria-hidden="true">
              <span className="money-stack" />
              <span className="money-stack" />
              <span className="money-stack" />
              <span className="money-stack" />
              <span className="money-stack" />
              <span className="money-stack" />
            </div>
          </div>
        )}
      </div>

      <div className="panel">
        <div className="stack-sm">
          <p className="eyebrow">who benefits and who is left out</p>
          <h3 className="panel-title">Character-based decision paths</h3>
          <p className="section-copy compact-copy">
            This is the logic scaffold for your choose-your-own-adventure section. Each card can later be rewritten with final character details, but the branching structure is now in place.
          </p>
        </div>

        <div className="character-grid">
          {characterCards.map(function (character) {
            const isActive = character.id === selectedCharacterId;

            return (
              <button
                key={character.id}
                type="button"
                className={isActive ? 'character-card is-active' : 'character-card'}
                onClick={function () {
                  chooseCharacter(character.id);
                }}
              >
                <span className="character-name">{character.name}</span>
                <p>{character.summary}</p>
              </button>
            );
          })}
        </div>

        <div className="scenario-layout">
          <div className="selected-character-summary">
            <p className="eyebrow">selected character</p>
            <h4>{selectedCharacter.name}</h4>
            <p>{selectedCharacter.summary}</p>
            <p><strong>Could benefit:</strong> {selectedCharacter.benefit}</p>
            <p><strong>Could be left out:</strong> {selectedCharacter.risk}</p>
          </div>

          <CharacterScenario
            characterId={selectedCharacterId}
            currentNodeId={currentNodeId}
            onSelectOption={handleOptionSelect}
            onReset={restartScenario}
          />
        </div>

        {outcomeText && (
          <div className="outcome-panel">
            <p className="eyebrow">outcome + reflection</p>
            <p>{outcomeText}</p>
            <p>
              Reflection prompt: What choices were shaped by personal values, and what choices were shaped by the larger economic system?
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
