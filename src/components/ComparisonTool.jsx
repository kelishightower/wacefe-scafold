import React, { useState } from 'react';
import DefinitionTooltip from './DefinitionTooltip';

const wealthTransferIntro = [
  'The Great Wealth Transfer refers to the large amount of money and property that older generations, especially the Baby Boomer generation, are expected to pass down to younger generations over the next several years.'
];

const wealthTransferSteps = [
  {
    title: 'What it is',
    text:
        'The Great Wealth Transfer refers to the large amount of money and property that older generations (specifically the Baby Boomers) are expected to pass down to younger generations over the next several years.'
  },
  {
    title: 'Why now',
    text:
        'We are thinking about this transfer now because many people from the Baby Boomer generation are reaching older age. As this large generation, composing slightly under 25% of Washington’s population as of 2018, retires and eventually passes on, their assets like homes, savings, businesses, and investments will be transferred to other individuals and communities.'
  },
  {
    title: 'Why it matters',
    text:
        'This shift is one of the largest transfers of wealth in U.S. history. Many believe it could help younger generations build financial stability, but others worry it may increase the gap between wealthy and lower-income families and communities. Knowing the impacts of the Great Wealth Transfer will help us navigate it in responsible and equitable ways.'
  }
];

const wealthTransferReflection =
    'What are some ways in which the Great Wealth Transfer might worsen gaps between different communities?';

const definedTerms = {
  demographic: 'Relating to the characteristics of a population, such as age, race, income, education, or location.',
  socioeconomic: 'Related to both social and economic factors combined, showing how income, education, and background affect opportunities.',
  positioning: 'The place or status someone holds in society based on their background, resources, and circumstances.',
  financial_opportunities: 'Chances to earn money, build wealth, invest, or gain access to resources that improve financial stability.',
  empathize: 'To understand and share the feelings of another person; to put yourself in their situation.'
};

const characterSectionIntro = [
  'Through analyzing data and looking at historical policies and practices, we have seen how someone\'s demographic and socioeconomic positioning can uniquely impact their financial opportunities in ways that could be more positive and or negative than another.',
  'But what do these impacts look like on a daily basis? How does this dynamic show up in real life? Let\'s find out.'
];

const characterPickerPrompt = [
  'Below are 3 representations of a Washington-state resident. Included are brief introductions, as well as descriptions of some economic opportunities or challenges they could potentially face.',
  'Pick your character and navigate their economic world. Imagine yourself as this person, empathize with the situation, and identify the path that you think you would realistically take.',
  'Your choices do not need to feel like the responsible ones. Choose what you are drawn to.'
];

const characterCards = [
  {
    id: 'jasmine',
    name: 'Jasmine',
    summary:
        'A high school senior in South Seattle, helps with her younger siblings, and wants to stay close to family while planning for college. Her dream is to study art after high school and eventually work in video game animation.',
    benefit: 'Could benefit if her family gains access to stable housing and inherited equity.',
    risk: 'Could be left out if rising costs force her to delay school or work multiple jobs.'
  },
  {
    id: 'julie',
    name: 'Julie',
    summary:
        'Lives on the Hoh Indian Reservation, out on the Olympic Peninsula, as a member of the tribe. Her top priority is supporting her family, community, and elders while also maintaining her personal identity both in and outside the reservation.',
    benefit:
        'Could benefit if given compassion, freedom, and support from her community, as well as other Washington-governed organizations outside of the tribe.',
    risk:
        'Could be left out if Washington’s economic policies ignore the economic and social infrastructure that already exist on the reservation, resulting in a clash of values and cultures.'
  },
  {
    id: 'isaiah',
    name: 'Isaiah',
    summary:
        'A recent high-school graduate living in rural eastern Washington. They work as a line cook and are deciding whether to stay local or move for opportunity. They do not want to pursue higher education, and instead hope to open their own restaurant one day in Seattle.',
    benefit: 'Could benefit if their family’s savings and or community’s support can create a starting point for their dreams.',
    risk:
        'Could be left out if local jobs stay limited, they cannot find stability in a new environment, or inherit family assets that are small or debt-heavy.'
  }
];

const scenarioTree = {
  jasmine: {
    start: {
      prompt:
          'Jasmine got into UW, where all her friends are going for college. She knows that delaying her acceptance and going to community college for 2 years first would be cheaper, but does not want to feel like she is falling behind. What should she do?',
      options: [
        { label: 'Attend UW straight out of high school', next: 'uw_housing' },
        { label: 'Wait 2 years and go to UW after community college', next: 'cc_internship' }
      ]
    },
    uw_housing: {
      prompt:
          'Jasmine’s best friend wants to live in the UW dorms with her freshman year, but that could cost up to $18,000 extra. Where should Jasmine live?',
      options: [
        {
          label: 'Take out a loan to afford living on-campus. "Think about how fun it would be!"',
          next: 'uw_loan_rates'
        },
        {
          label: 'Live at home and commute for class. "It costs too much, even if I get FOMO."',
          next: 'uw_commute_family'
        }
      ]
    },
    uw_loan_rates: {
      prompt:
          '20 years after she graduates, the bank she got the loan from raises interest rates because her generation is "richer" after the Great Wealth Transfer. They think that she should be able to afford paying more, but Jasmine did not receive any assets from her relatives. How should she move forward?',
      options: [
        {
          label: 'Work a part-time job on the weekends, in addition to her career',
          outcome:
              'Jasmine has a degree and a career, but she is exhausted from working weekends and never got the freedom that college was supposed to give her.',
          reflection:
              'How can someone plan for financial risks and consequences that are so far in the future and out of their control?'
        },
        {
          label: 'Default on the loan and risk repossession of her car',
          outcome:
              'Jasmine thought she was doing the right thing by going to UW and living on campus, but the loan never felt manageable and defaulting felt like the only way out, even though it caused even bigger problems.',
          reflection:
              "When someone borrows money for college and then cannot pay it back, who should be blamed: the student for borrowing, the bank for lending, the college for being so expensive, or the system that does not help people like Jasmine?"
        }
      ]
    },
    uw_commute_family: {
      prompt:
          'Big corporations have started buying plots of land in Jasmine’s neighborhood, which raises the price of rent for her family. Her single dad is struggling to keep up with these new financial demands. What should Jasmine do?',
      options: [
        {
          label: 'Work multiple jobs to help support and take less classes per quarter at UW. This would delay the timeline of her graduation',
          outcome:
              'Jasmine finishes her degree, but she is tired and older than her classmates when she graduates. She had to spend years helping her family survive instead of just being able to focus on school like some other students could.',
          reflection:
              'Jasmine did everything "right" by going to UW and saving money by commuting, but big companies moving into her neighborhood changed everything. How is that fair, and should the actions of big companies get to decide where someone can focus their life?'
        },
        {
          label:
              'Prioritize her education, knowing that the faster she graduates the quicker she can get a full-time job and start helping her dad substantially',
          outcome:
              'Jasmine graduates on time with a good job, but her family is in deeper trouble than before, and she has to spend her first few years of earnings trying to fix problems she could not solve while she was a student.',
          reflection:
              'Sometimes we are taught that education is the most important thing, but what if that means ignoring a family crisis? Is that really a choice, and something that systemic forces push you into? What tools can you use to navigate that dynamic?'
        }
      ]
    },
    cc_internship: {
      prompt:
          'While at community college, Jasmine has time to work on her art and applies to an internship with Nintendo. She gets the job, but it requires moving to the Bay Area for a summer. What should Jasmine do?',
      options: [
        {
          label: 'Stay at home, so she can help her single dad take care of her little siblings',
          next: 'cc_emergency'
        },
        {
          label: 'Chase her dream, but send a portion of her paycheck back home so her dad can pay for a babysitter',
          next: 'cc_uw_or_work'
        }
      ]
    },
    cc_emergency: {
      prompt:
          'Jasmine stays home, finishes community college, and has some savings. Should she pay her UW tuition first, or help with a family emergency?',
      options: [
        {
          label: 'Pay tuition',
          outcome:
              'Jasmine finishes her UW degree without extra debt, which is good, but she missed a career opportunity and had to decide between her education and her family.',
          reflection:
              'How can someone know when to choose the risky financial option, or when to make the smart and responsible decision?'
        },
        {
          label: 'Help with the emergency',
          outcome:
              'Jasmine keeps helping her family when they need her, but she likely will end up taking out loans to still afford tuition after helping with the emergency.',
          reflection:
              'Jasmine chose family over her own plans twice, which shows she cares. But why should a young person have to choose between helping their family and getting an education, when others do not have to make that choice? What forces are in place to create that dynamic?'
        }
      ]
    },
    cc_uw_or_work: {
      prompt:
          'By the time Jasmine can attend UW, she now has work experience but little savings. She would need to take out a medium-sized loan to afford all of UW’s tuition. What should Jasmine do?',
      options: [
        {
          label: 'Apply for full-time jobs with her current experience. A lot of animation jobs do not require a Bachelor’s degree',
          outcome:
              'Jasmine starts her career 2 years earlier than if she had gone to UW right away, makes good money, and does not have college debt.',
          reflection:
              'How can someone decide what options are best for them and their own goals in a world that presents so many choices to you?'
        },
        {
          label: 'Take out a loan and hope she qualifies for scholarships at UW that she can use to pay it back',
          outcome:
              'Jasmine graduates with a UW degree after community college and already has work experience, but also with debt, which she tried to avoid by not going to UW for all 4 years.',
          reflection:
              'Jasmine made a choice to help her family instead of saving for college, which delayed her degree and left her with debt. But was that really her choice, or was she forced into it because of policies that ignore certain communities’ needs?'
        }
      ]
    }
  },
  julie: {
    start: {
      prompt:
          'Julie’s tribe relies on salmon fishing as a vital cultural and financial resource. However, the fisheries often close for years at a time to let salmon populations recover, and her family depends on this income. Should she invest her time and money into the traditional practice, or find more stable work elsewhere?',
      options: [
        { label: 'Keep the familial tradition of salmon fishing alive', next: 'fishing_distribution' },
        {
          label: 'Prioritize a steady income so she and her family can afford to live comfortably under rising prices',
          next: 'logging_or_values'
        }
      ]
    },
    fishing_distribution: {
      prompt:
          'As Julie gets older, she starts to receive per capita distributions from her tribe. Until a tribe member turns 27, these distributions are saved for them by elders and released incrementally. As Julie approaches a distribution on her 23rd birthday, she has two options.',
      options: [
        {
          label: 'Keep working in fishing to help support her family, and receive 20% of the saved money',
          next: 'cousins_trust'
        },
        {
          label: 'Go to trade school and receive 40% of the saved money, but lose the income necessary to help her family',
          next: 'trade_school_future'
        }
      ]
    },
    cousins_trust: {
      prompt:
          'Julie’s aunt moved off the reservation decades ago to marry and build a business with a non-Native person. When her aunt passes, she leaves her children, Julie’s cousins, a multi-million dollar trust fund. They are barely connected to the tribe or land, meanwhile Julie’s family and community are struggling. Should she?',
      options: [
        {
          label: 'Reach out to these cousins, asking them to invest in tribal projects, scholarships, or language programs',
          outcome:
              'Julie’s cousins might donate some money, but they have no real connection to the tribe and may not feel obligated to help. Julie gets some support, but realizes that inherited wealth outside the tribe will stay outside the tribe, and fishing families like hers still struggle.',
          reflection:
              'When wealth leaves the tribe and goes to relatives who do not live in or care for the community, how does that impact others? Is it okay to ask them to help fix problems that they did not create?'
        },
        {
          label:
              'Listen to her parents, who told Julie that her aunt could have given that money back to the tribe, but chose to pass it only to her children. She needs to honor that decision',
          outcome:
              'Julie respects her parents’ wisdom but watches the wealth gap widen between her family and her cousins. She has to accept that some people who share her blood will never help her community, even though they could easily afford to.',
          reflection:
              'Is it okay to respect other people’s choices to keep wealth even when that choice hurts your community, or does family obligation mean something more than economic institutions might make us think?'
        }
      ]
    },
    trade_school_future: {
      prompt:
          'Julie’s friends are moving to nearby cities like Forks and Port Angeles, and now that Julie has finished trade school, she has the skills to easily find work there. Should she?',
      options: [
        {
          label: 'Stay to invest in and give back to the tribe',
          outcome:
              'Julie has more money and skills that benefit the tribe, but her family missed the income that she used to contribute from fishing. She has to balance her own financial independence with her sense of responsibility to help people she loves.',
          reflection:
              'Julie chose her own security over helping her family, but then used those skills to give back to the tribe. How can you know when a selfish decision will have more positive effects in the long run?'
        },
        {
          label: 'Leave to build her own future with her friends',
          outcome:
              'Julie builds financial and social independence, but leaves her family and the tribe loses her skills and energy. She has to live with the potential guilt that she left when the community needed her.',
          reflection:
              'Is it selfish to leave your community to build a better life for yourself, or is it realistic to know that staying might mean an unstable financial future? Is there a right choice here?'
        }
      ]
    },
    logging_or_values: {
      prompt:
          '60% of the Hoh River basin is owned and managed by corporations, as well as the Washington-state government. Commercial logging occurs near the river basin, which dramatically impacts water quality and salmon populations. The tribe is trying to protect the natural environment, but the logging companies are also opening up some jobs in the area. What should Julie do?',
      options: [
        { label: 'Take a job with a logging company to get more financial resources', next: 'logging_tension' },
        {
          label: 'Honor the goals of her community and try to find work more similar to these values',
          next: 'relocation_or_school'
        }
      ]
    },
    logging_tension: {
      prompt:
          'The tribe on the reservation is small and tight-knit. When they find out Julie has taken this job, word travels fast and many members of her community are upset with her. What should Julie do?',
      options: [
        {
          label:
              'Fill out a Disclaimer form to stop receiving per-capita distributions, in the hope that returning this money to the tribe will make up for her choice of work',
          outcome:
              'Julie loses tribal per capita money, which she depends on, to appease the community, but the logging company is still destroying the river. Her sacrifice will not actually stop the damage.',
          reflection:
              'When your community judges your economic choices, is it fair to expect you to sacrifice your own financial security to prove your loyalty? How do you balance competing interests and values?'
        },
        {
          label:
              'Stand her ground and publicly defend her choice to community members when asked about it. She needs an income to live',
          outcome:
              'Julie keeps her income and her integrity, but she becomes isolated in her community. She must live with the tension that she is right about needing money, but wrong in the eyes of people she loves.',
          reflection:
              'When a community needs you to sacrifice for shared values, but the system forces you to choose between values and survival, who is really responsible for that impossible choice: you, the community, the company, the government, or the system itself?'
        }
      ]
    },
    relocation_or_school: {
      prompt:
          'The Hoh reservation is located in high-risk tsunami zones and the tribe is working to relocate the community to higher ground. Would Julie work for tribal government and programs to help with that relocation, or pursue an education elsewhere?',
      options: [
        {
          label: 'Work in tribe relocation',
          outcome:
              'Julie finds work that aligns with both her need for income and her community’s values. She becomes part of the solution to one of the biggest challenges her tribe faces. But the relocation work is stressful, the pay might still be lower than off-reservation work, and her future is in the hands of her community’s timeline.',
          reflection:
              'When you find work that aligns with your community’s values, how do you know if that work aligns with your values as well, not just those around you?'
        },
        {
          label: 'Go to school',
          outcome:
              'Julie invests in her education hoping to come back and help, but school takes time and money. She might not come back after graduation, and the tribe does not get her help immediately while facing urgent problems.',
          reflection:
              'When you choose education hoping to help your community later, are you being smart and strategic, or are you choosing your own future over your community’s immediate needs? Is that wrong?'
        }
      ]
    }
  },
  isaiah: {
    start: {
      prompt:
          'Isaiah is deciding whether or not to move to Seattle to pursue their dreams. They have a few friends in the area, but would have no financial support from anyone else to help with the move. Should they?',
      options: [
        {
          label: 'Take the risk and move, hoping they can find work quickly enough to support themself and their goals',
          next: 'seattle_building'
        },
        {
          label: 'Stay home, remaining close to family and a stable job market. They can open a restaurant in their hometown',
          next: 'home_storefront'
        }
      ]
    },
    seattle_building: {
      prompt:
          'After a few years, Isaiah has enough money saved to pay for the furniture, supplies, and construction workers necessary for the restaurant. What Isaiah does not have, though, is the money to afford a down-payment on a building. What should they do?',
      options: [
        {
          label: 'Ask family members and friends for small sums of money, hopefully collecting enough altogether for the building',
          next: 'seattle_family_help'
        },
        {
          label: 'Take out a loan from the bank, not wanting to put the responsibility of their dream onto loved ones',
          next: 'seattle_inherited_home'
        }
      ]
    },
    seattle_family_help: {
      prompt:
          'Isaiah’s community cannot afford to help them out financially at this time. However, their family tells them that there is a big restaurant back home hiring for a Head Chef position. Should they?',
      options: [
        {
          label: 'Stay in Seattle longer and hope to have enough money after a few more years of saving',
          outcome:
              'Isaiah stays in Seattle chasing their dream but gets older without owning the restaurant, while missing a stable, well-paying job back home.',
          reflection:
              'What are some causes that resulted in Isaiah needing to risk everything for their dream, while someone from an affluent background could likely do the same thing safely?'
        },
        {
          label: 'Move back home and work in the Head Chef role, maybe one day working their way up to Director or Owner',
          outcome:
              'Isaiah gets stability and a good salary back home and can help their family, but leaves behind the Seattle restaurant dream.',
          reflection:
              'Isaiah had to choose between chasing a dream alone or being realistic. How much of that choice was smart thinking, and how much was forced by not having anyone to help them financially? Is that fair?'
        }
      ]
    },
    seattle_inherited_home: {
      prompt:
          'Isaiah opens the restaurant, but 10 years later they are still paying off the loan and their mom has unexpectedly passed away, leaving the family home to Isaiah in her will. The house is not paid off, though, and Isaiah must decide what to do with it. Should they?',
      options: [
        {
          label: 'Sell the family home, since paying the mortgage and restaurant loan would be quite expensive',
          outcome:
              'Isaiah owns a successful Seattle restaurant, but lost the childhood home they grew up in.',
          reflection:
              'How, in this case, was the asset left behind to Isaiah more of a challenge than an opportunity for wealth building?'
        },
        {
          label: 'Sell the restaurant so they can afford to keep the home they grew up in, and move back to eastern Washington',
          outcome:
              'Isaiah keeps their family home but gave up the restaurant they spent 10 years building.',
          reflection:
              'If Isaiah’s childhood home had been paid off, or if they had inherited money instead of debt, would they have even had to choose between their dream and their family?'
        }
      ]
    },
    home_storefront: {
      prompt:
          'After a few years as a line cook, Isaiah has some savings and found a discounted storefront. They can begin work on opening a restaurant. It would be quite time-consuming, though, and they also want to make sure they have enough time to take care of their chronically ill mother. Should they?',
      options: [
        {
          label: 'Start working on the restaurant and hope that their family has enough money saved to hire an at-home caretaker',
          next: 'home_inherited_house'
        },
        {
          label:
              'Take a promotion that the current restaurant has offered, hoping that one day they can work their way up to Head Chef or Owner',
          next: 'home_seattle_dream'
        }
      ]
    },
    home_inherited_house: {
      prompt:
          'Unfortunately, there is not enough money at home to hire a caretaker. But a few years go by, Isaiah’s mom seems healthy, and Isaiah is able to open the restaurant. A bit more time passes, though, and their mom unexpectedly passes away. She leaves the family home to Isaiah in her will, but the house is not paid off and Isaiah must decide what to do with it. Should they?',
      options: [
        {
          label: 'Sell the restaurant so they can afford to keep the home they grew up in',
          outcome:
              'Isaiah keeps the family home paid off but lost the restaurant they worked years to build.',
          reflection:
              'Some people have to choose between taking care of a sick parent and building their own future, but why is help not available so nobody has to make that choice?'
        },
        {
          label: 'Pick up an extra job on the weekends, on top of running the restaurant, to afford the mortgage on the house',
          outcome:
              'Isaiah keeps both the restaurant and the childhood home but works constantly with no real days off.',
          reflection:
              'Did Isaiah really win by keeping both things, or did they just trade one problem, losing something, for another problem, losing their health and happiness?'
        }
      ]
    },
    home_seattle_dream: {
      prompt:
          'Isaiah eventually works their way up to Head Chef. They get paid a high salary, and can easily save enough to open their own Seattle restaurant after a few years. But they have become close friends with their coworkers, and would be devastated to leave them. Should they?',
      options: [
        {
          label: 'Stay persistent with their dreams and open their own restaurant',
          outcome:
              'Isaiah finally opens their own Seattle restaurant but loses their sense of belonging, as well as the community that supported them.',
          reflection:
              'Why did Isaiah have to choose between their dream and their community, when someone born in Seattle might be able to do both?'
        },
        {
          label: 'Stay back home with their community, knowing that some things are more valuable than money',
          outcome:
              'Isaiah gives up their Seattle dream because their hometown community means more to them than ambition.',
          reflection: 'Isaiah had the money to chase their dream but chose not to. Why would someone make this choice?'
        }
      ]
    }
  }
};

function ParagraphGroup(props) {
  return props.items.map(function (item) {
    return <p key={item}>{item}</p>;
  });
}

function CharacterSectionIntroWithDefinitions() {
  return (
      <div className="section-copy" style={{ maxWidth: '65ch', lineHeight: 1.6 }}>
        <p>
          Through analyzing data and looking at historical policies and practices, we have seen how someone's{' '}
          <DefinitionTooltip term="demographic" definition={definedTerms.demographic} /> and{' '}
          <DefinitionTooltip term="socioeconomic positioning" definition={definedTerms.socioeconomic} /> can
          uniquely impact their{' '}
          <DefinitionTooltip term="financial opportunities" definition={definedTerms.financial_opportunities} /> in
          ways that could be more positive and or negative than another.
        </p>
        <p>
          But what do these impacts look like on a daily basis? How does this dynamic show up in real life? Let's find
          out.
        </p>
      </div>
  );
}

function CharacterPickerPromptWithDefinitions() {
  return (
      <div className="section-copy" style={{ maxWidth: '65ch', lineHeight: 1.6 }}>
        <p>
          Below are 3 representations of a Washington-state resident. Included are brief introductions, as well as
          descriptions of some economic opportunities or challenges they could potentially face.
        </p>
        <p>
          Pick your character and navigate their economic world. Imagine yourself as this person,{' '}
          <DefinitionTooltip term="empathize" definition={definedTerms.empathize} /> with the situation, and identify
          the path that you think you would realistically take.
        </p>
        <p>Your choices do not need to feel like the responsible ones. Choose what you are drawn to.</p>
      </div>
  );
}

function CharacterPicker(props) {
  return (
      <div
          className="scenario-panel stack-sm"
          style={{ width: '100%', maxWidth: '100%', display: 'block', marginLeft: 0 }}
      >
        <p className="scenario-prompt" style={{ marginBottom: '1.25rem', maxWidth: '60ch' }}>
          Pick a character to step into their economic world.
        </p>
        <div
            className="scenario-option-list scenario-option-list-characters"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
              gap: '1rem',
              width: '100%',
              maxWidth: '100%',
              alignItems: 'stretch',
              marginLeft: 0
            }}
        >
          {props.characters.map(function (character) {
            return (
                <button
                    key={character.id}
                    type="button"
                    className="scenario-option scenario-option-character"
                    style={{
                      width: '100%',
                      minHeight: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      textAlign: 'left'
                    }}
                    onClick={function () {
                      props.onChooseCharacter(character.id);
                    }}
                >
                  {/*<div className="scenario-option-copy stack-xs" style={{ width: '100%' }}>*/}
                  {/*  <span className="scenario-option-title">{character.name}</span>*/}
                  {/*  <p className="scenario-option-description">{character.summary}</p>*/}
                  {/*  <div className="stack-xs" style={{ marginTop: '0.75rem' }}>*/}
                  {/*    <p style={{ margin: 0 }}>*/}
                  {/*      <strong>Who benefits:</strong> {character.benefit}*/}
                  {/*    </p>*/}
                  {/*    <p style={{ margin: 0 }}>*/}
                  {/*      <strong>Who is left out:</strong> {character.risk}*/}
                  {/*    </p>*/}
                  {/*  </div>*/}
                  {/*</div>*/}
                  <div className="scenario-option-copy stack-xs" style={{ width: '100%' }}>
  <span
      className="scenario-option-title"
      style={{
        fontWeight: 700,
        fontSize: '1.1rem',
        marginBottom: '0.25rem'
      }}
  >
    {character.name}
  </span>

                    <p
                        className="scenario-option-description"
                        style={{
                          marginBottom: '0.75rem',
                          lineHeight: 1.5
                        }}
                    >
                      {character.summary}
                    </p>

                    {/* divider for visual separation */}
                    <div
                        style={{
                          width: '100%',
                          height: '1px',
                          background: 'rgba(255,255,255,0.08)',
                          margin: '0.5rem 0 0.75rem'
                        }}
                    />

                    <div className="stack-xs" style={{ gap: '0.4rem' }}>
                      <p style={{ margin: 0 }}>
                        <strong>Who benefits:</strong> {character.benefit}
                      </p>
                      <p style={{ margin: 0 }}>
                        <strong>Who is left out:</strong> {character.risk}
                      </p>
                    </div>
                  </div>
                  <small>start this story</small>
                </button>
            );
          })}
        </div>
      </div>
  );
}

function SelectedCharacterSummary(props) {
  const character = props.character;

  if (!character) {
    return null;
  }

  return (
      <div
          className="panel stack-sm"
          style={{
            width: '100%',
            marginBottom: '1.5rem'
          }}
      >
        <p className="eyebrow">selected character</p>
        <h4 className="panel-title" style={{ marginBottom: '0.5rem' }}>
          {character.name}
        </h4>
        <div className="section-copy" style={{ maxWidth: '70ch', lineHeight: 1.6 }}>
          <p>{character.summary}</p>
        </div>

        <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
              gap: '1rem',
              width: '100%'
            }}
        >
          <div className="outcome-panel stack-sm" style={{ margin: 0 }}>
            <p className="eyebrow">who benefits</p>
            <p style={{ margin: 0 }}>{character.benefit}</p>
          </div>

          <div className="outcome-panel stack-sm" style={{ margin: 0 }}>
            <p className="eyebrow">who is left out</p>
            <p style={{ margin: 0 }}>{character.risk}</p>
          </div>
        </div>
      </div>
  );
}

function ScenarioStep(props) {
  return (
      <div className="scenario-panel stack-sm" style={{ width: '100%' }}>
        <p className="scenario-prompt" style={{ maxWidth: '70ch', lineHeight: 1.6, marginBottom: '1rem' }}>
          {props.prompt}
        </p>
        <div
            className="scenario-option-list scenario-option-list-choices"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
              gap: '1rem',
              width: '100%',
              alignItems: 'stretch'
            }}
        >
          {props.options.map(function (option) {
            return (
                <button
                    key={option.label}
                    type="button"
                    className="scenario-option"
                    style={{
                      width: '100%',
                      minHeight: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      textAlign: 'left'
                    }}
                    onClick={function () {
                      props.onSelectOption(option);
                    }}
                >
                  <span>{option.label}</span>
                  <small>{option.next ? 'continue' : 'see outcome'}</small>
                </button>
            );
          })}
        </div>
      </div>
  );
}

function OutcomeStep(props) {
  return (
      <div className="outcome-panel stack-sm">
        <p className="eyebrow">outcome + reflection</p>
        <p>{props.outcome}</p>
        <p>
          <strong>Reflection prompt:</strong> {props.reflection}
        </p>
      </div>
  );
}

export default function ComparisonTool() {
  const [showTransferValue, setShowTransferValue] = useState(false);
  const [selectedCharacterId, setSelectedCharacterId] = useState(null);
  const [currentNodeId, setCurrentNodeId] = useState(null);
  const [outcomeData, setOutcomeData] = useState(null);
  const [history, setHistory] = useState([]);

  const selectedCharacter = selectedCharacterId
      ? characterCards.find(function (character) {
        return character.id === selectedCharacterId;
      })
      : null;

  const currentScenarioNode =
      selectedCharacterId && currentNodeId ? scenarioTree[selectedCharacterId][currentNodeId] : null;

  function chooseCharacter(characterId) {
    setSelectedCharacterId(characterId);
    setCurrentNodeId('start');
    setOutcomeData(null);
    setHistory([]);
  }

  function handleOptionSelect(option) {
    if (!selectedCharacterId || !currentNodeId) {
      return;
    }

    setHistory(function (previousHistory) {
      return previousHistory.concat({
        nodeId: currentNodeId,
        outcomeData: outcomeData
      });
    });

    if (option.next) {
      setCurrentNodeId(option.next);
      setOutcomeData(null);
      return;
    }

    setOutcomeData({
      outcome: option.outcome,
      reflection: option.reflection
    });
  }

  function restartScenario() {
    setCurrentNodeId(null);
    setSelectedCharacterId(null);
    setOutcomeData(null);
    setHistory([]);
  }

  function goBack() {
    if (!history.length) {
      setSelectedCharacterId(null);
      setCurrentNodeId(null);
      setOutcomeData(null);
      return;
    }

    const previousStep = history[history.length - 1];
    setHistory(function (previousHistory) {
      return previousHistory.slice(0, previousHistory.length - 1);
    });
    setCurrentNodeId(previousStep.nodeId);
    setOutcomeData(previousStep.outcomeData);
  }

  return (
      <section className="comparison-stack" style={{ gap: '2.5rem' }}>
        <div className="stack-sm">
          <div className="panel">
            <div className="stack-sm">
              <p className="eyebrow">short explanation flow</p>
              <h3 className="panel-title">A simple way to explain the Great Wealth Transfer</h3>
              <div className="section-copy compact-copy">
                <ParagraphGroup items={wealthTransferIntro} />
              </div>
            </div>
          </div>

          <div className="transfer-card-grid">
            {wealthTransferSteps.map(function (step, index) {
              const backgroundColors = [
                ' #fff6d5',
                '#d5fbf4',
                '#ebe1fa'
              ];

              return (
                  <article
                      key={step.title}
                      className="panel transfer-step-card"
                      style={{
                        background: backgroundColors[index],
                        border: '1px solid rgba(255,255,255,0.05)'
                      }}
                  >
                    <span className="transfer-step-label">{step.title}</span>
                    <p>{step.text}</p>
                  </article>
              );
            })}
          </div>

          <div className="panel">
            <p className="section-copy compact-copy">
              <strong>Reflection question:</strong> {wealthTransferReflection}
            </p>
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
                <p className="wealth-number">$104,000,000,000,000</p>
                <p className="section-copy compact-copy">
                  According to Federal Reserve data and industry research, anywhere between $90 trillion and $124 trillion are projected to transfer to younger generations by 2048. The number above is the median of this range. Generation Z is estimated to inherit $15 trillion of this total. Note that this is national data, though, and not specific to Washington-state.
                </p>
                <p className="section-copy compact-copy">
                  To help visualize how large this number is, each icon below represents $10 million, adding up to the total projection of transferred wealth.
                </p>
                <div className="money-stack-row" aria-hidden="true">
                  <span className="money-stack" />
                  <span className="money-stack" />
                  <span className="money-stack" />
                  <span className="money-stack" />
                  <span className="money-stack" />
                  <span className="money-stack" />
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

        <div className="stack-lg" style={{ paddingTop: '1.25rem', paddingBottom: '2.5rem' }}>
          <div className="intro-section stack-lg" style={{ marginBottom: '1.75rem' }}>
            <p className="eyebrow">who benefits and who is left out</p>
            <h3 className="panel-title">Character-based decision paths</h3>
            <CharacterSectionIntroWithDefinitions />
          </div>

          <div className="character-cards-section stack-lg" style={{ marginBottom: '2rem' }}>
            <CharacterPickerPromptWithDefinitions />
          </div>

          <div style={{ height: '1px', background: 'rgba(255,255,255,0.05)', margin: '1rem 0 1.25rem' }} />

          <div
              className="scenario-layout scenario-layout-linear"
              style={{ width: '100%', maxWidth: '100%', display: 'block' }}
          >
            <div
                className="scenario-flow stack-sm"
                style={{ width: '100%', maxWidth: '100%', display: 'block', gap: '1.75rem' }}
            >
              <div
                  className="scenario-flow-actions"
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    gap: '0.75rem',
                    width: '100%',
                    marginBottom: '1.5rem'
                  }}
              >
                {(selectedCharacterId || history.length || outcomeData) && (
                    <button type="button" className="ghost-button scenario-nav-button" onClick={goBack}>
                      ← Back
                    </button>
                )}
                {(selectedCharacterId || currentNodeId || outcomeData) && (
                    <button type="button" className="ghost-button scenario-nav-button" onClick={restartScenario}>
                      Restart
                    </button>
                )}
              </div>

              {!selectedCharacterId && (
                  <CharacterPicker
                      characters={characterCards}
                      onChooseCharacter={chooseCharacter}
                  />
              )}

              {selectedCharacterId && (
                  <SelectedCharacterSummary character={selectedCharacter} />
              )}

              {selectedCharacterId && currentScenarioNode && !outcomeData && (
                  <ScenarioStep
                      prompt={currentScenarioNode.prompt}
                      options={currentScenarioNode.options}
                      onSelectOption={handleOptionSelect}
                  />
              )}

              {selectedCharacterId && outcomeData && (
                  <OutcomeStep
                      outcome={outcomeData.outcome}
                      reflection={outcomeData.reflection}
                  />
              )}
            </div>
          </div>
        </div>
      </section>
  );
}