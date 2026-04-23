import React, { useState } from 'react';

const resourceCards = [
  {
    number: '01',
    title: 'Washington State Community Reinvestment Program (CRP)',
    summary:
      'A state program that invests in communities by supporting homeownership, small businesses, and financial education.',
    yearLabel: 'Year enacted',
    yearValue: '2026 (funding established 2022)',
    intendedFor:
      'Communities that have faced barriers to building wealth, including Black, Latino/Latinx, Indigenous, and low-income communities.',
    communityImpact:
      'Helps more families buy homes, start businesses, and build savings. This can increase long-term wealth in communities that were previously left out. WA’s $200M CRP investment is projected to generate $1.6B in long-term economic benefit.',
    studentSupport:
      'Students can learn about where this funding goes and support community organizations that receive these resources.',
    links: [
      {
        label: 'CRP Legislative Report',
        url: 'https://app.leg.wa.gov/ReportsToTheLegislature/Home/GetPDF?fileName=CRP+Legislative+Report_b9d260b4-ed86-47cd-8f2c-9703aab424bc.pdf'
      },
      {
        label: 'Community Reinvestment Program',
        url: 'https://www.commerce.wa.gov/crp/'
      }
    ]
  },
  {
    number: '02',
    title: 'WA Economic Justice Alliance– 10-Year Plan to Dismantle Poverty',
    summary:
      'A statewide plan that focuses on reducing poverty through investments in housing, education, childcare, and jobs.',
    yearLabel: 'Year debuted',
    yearValue: '2021',
    intendedFor:
      'Communities facing poverty, especially those affected by racial and rural inequality.',
    communityImpact:
      'Helps lower poverty rates and reduce gaps in income and opportunity across different communities.',
    studentSupport:
      'Students can learn about these strategies and vote for policies that invest in housing, education, and community services.',
    links: [
      {
        label: '10 year plan',
        url: 'https://waeconomicjusticealliance.com/wp-content/uploads/2024/08/Final10yearPlan.pdf'
      },
      {
        label: 'The 8 strategies',
        url: 'https://waeconomicjusticealliance.com/the-8-strategies/'
      }
    ]
  },
  {
    number: '03',
    title: 'WA Dept. of Commerce– Wealth Disparities & Homeownership Grants',
    summary:
      'A $29 million investment from the Washington State Department of Commerce that supports homeownership, small businesses, and financial education. It provides grants, loans, and services to help people build long-term financial stability.',
    yearLabel: 'Year enacted',
    yearValue: '2024',
    intendedFor:
      'Communities that have had limited access to wealth-building opportunities, especially Black, Latino/Latinx, Indigenous, and other underserved groups.',
    communityImpact:
      'Supports two major ways families build wealth: owning a home and owning a business. It also helps people access financial coaching, savings tools, and resources that support long-term financial growth.',
    studentSupport:
      'Students can research who qualifies and think about how these programs could be expanded to reach more people; They can also learn about and support local organizations that receive this funding.',
    links: [
      {
        label: 'The Seattle Medium',
        url: 'https://seattlemedium.com/wa-state-commerce-funding-grants/'
      },
      {
        label: 'WA Dept. of Commerce',
        url: 'https://www.commerce.wa.gov/commerce-awards-29-million-wealth-disparities/'
      }
    ]
  },
  {
    number: '04',
    title: 'Washington State Housing Trust Fund (HTF)',
    summary:
      'A long-standing state program that funds affordable housing, including rental housing and some homeownership support.',
    yearLabel: 'Year enacted',
    yearValue: '1986',
    intendedFor:
      'Low-income households and communities facing housing barriers.',
    communityImpact:
      'Improves housing stability and helps families save money and build financial security over time. Stable housing can also support long-term wealth building.',
    studentSupport:
      'Students can learn how housing policies affect their communities and support affordable housing efforts.',
    links: [
      {
        label: 'Housing Trust Fund Program (HTF)',
        url: 'https://www.commerce.wa.gov/multifamily-rental-housing/htf/'
      },
      {
        label: 'Washington State Standard',
        url: 'https://washingtonstatestandard.com/2024/04/08/washingtons-housing-trust-fund-explained/'
      }
    ]
  },
  {
    number: '05',
    title: 'Community Economic Revitalization Board (CERB)',
    summary:
      'A state program that funds public infrastructure like water systems, broadband, and roads to support economic development.',
    yearLabel: 'Year enacted',
    yearValue: '1982',
    intendedFor:
      'Local governments and Tribes, especially in rural and underserved communities.',
    communityImpact:
      'Create jobs, support small businesses, and improve access to economic opportunities by building the infrastructure communities need to grow.',
    studentSupport:
      'Students can learn how infrastructure affects job access and support local development projects.',
    links: [
      {
        label: 'CERB',
        url: 'https://www.commerce.wa.gov/cerb/'
      },
      {
        label: 'CERB Project Awards',
        url: 'https://www.commerce.wa.gov/cerb/'
      }
    ]
  },
  {
    number: '06',
    title: 'WorkFirst Program',
    summary:
      'A program that helps families receiving financial assistance build stability through job training, childcare support, and employment services.',
    yearLabel: 'Year enacted',
    yearValue: '1997',
    intendedFor:
      'Low-income families receiving Temporary Assistance for Needy Families (TANF).',
    communityImpact:
      'Helps people find jobs, access childcare, and increase their income over time. By reducing barriers to work, it supports long-term earning potential and creates a pathway toward financial stability and future wealth building.',
    studentSupport:
      'Students can learn about support systems that help families and advocate for programs that reduce barriers to work.',
    links: [
      {
        label: 'WorkFirst',
        url: 'https://workfirst.wa.gov/about-us'
      },
      {
        label: 'DSHS WorkFirst Plan Components',
        url: 'https://www.dshs.wa.gov/esa/workfirst-handbook/about-workfirst-and-handbook'
      }
    ]
  },
  {
    number: '07',
    title: 'Individual Development Account (IDA) Program',
    summary:
      'A matched savings program that helps people save money for goals like buying a home, starting a business, or education. Savings are matched by the program, and participants also receive financial education and support.',
    yearLabel: 'Year enacted',
    yearValue: '2005',
    intendedFor:
      'Low-income individuals and families.',
    communityImpact:
      'Helps people build savings faster and invest in long-term goals like homeownership and small businesses. This supports first-generation wealth building and long-term financial stability.',
    studentSupport:
      'Students can learn how savings programs work and support policies that make these opportunities more available to more people.',
    links: [
      {
        label: 'Dept. of Commerce IDA Program Info',
        url: 'https://www.commerce.wa.gov/crp/'
      },
      {
        label: 'Washington Workforce Association (WWA)',
        url: 'https://washingtonworkforce.org/ida/'
      }
    ]
  },
  {
    number: '08',
    title: 'Tribal Community Investment & Reinvestment',
    summary:
      'Tribal governments reinvest profits from their businesses into their communities. This includes funding jobs, housing, healthcare, education, and local development.',
    yearLabel: 'Timeframe',
    yearValue: '1990s - Present',
    intendedFor:
      'Native communities and surrounding regional economies.',
    communityImpact:
      'Creates jobs, increases income, and supports essential services like schools and healthcare. These investments help reduce poverty and build long-term economic strength in Tribal communities.',
    studentSupport:
      'Students can learn about Tribal economies and support policies that respect and invest in Tribal sovereignty and development.',
    links: [
      {
        label: 'Washington Indian Gaming Association',
        url: 'https://www.washingtonindiangaming.org/issues/economic-impact/'
      },
      {
        label: 'The Economic & Community Impact of Tribes in Washington',
        url: 'https://www.washingtonindiangaming.org/issues/economic-impact/'
      }
    ]
  },
  {
    number: '09',
    title: 'Washington State Broadband Construction Grant Program',
    summary:
      'A Washington State program that funds broadband and internet infrastructure in underserved and Tribal communities. It helps build or improve internet access so more people can connect to jobs, education, healthcare, and financial services.',
    yearLabel: 'Year enacted',
    yearValue: '2021',
    intendedFor:
      'Rural communities, low-income areas, and Tribal nations in Washington.',
    communityImpact:
      'Expands internet access, which helps people find jobs, start businesses, learn new skills, and access services online. This supports long-term economic growth and wealth-building by reducing the digital divide.',
    studentSupport:
      'Students can learn how internet access affects opportunity and support policies that expand broadband to more communities, especially those that have been historically left out.',
    links: [
      {
        label: 'Washington State Broadband Office',
        url: 'https://www.commerce.wa.gov/wsbo/'
      },
      {
        label: 'Washington State Broadband Office (WSBO)',
        url: 'https://www.commerce.wa.gov/wsbo/'
      }
    ]
  }
];

const concernRows = [
  {
    worry: 'I am concerned about paying for college or trade school.',
    feeling:
      'Paying for school can feel overwhelming, especially when you don’t know how much it will cost or how to afford it. Many students feel this way, and the system can be confusing because there are many steps and options. College costs have gone up over time, and not everyone has similar access to money or guidance. Financial aid rules can also be hard to understand, which makes planning feel uncertain.',
    actions: [
      'Create a simple list of schools or programs you’re interested in',
      'Fill out the FAFSA as early as possible (with a parent/guardian or counselor if needed)',
      'Talk to a school counselor or trusted adult about your options',
      'Look into community college or trade programs as lower-cost starting points',
      'Search for 1–2 scholarships each week (start small)'
    ],
    reassurance:
      'There are many ways to pay for school, and most students do not pay the full price. Financial aid, scholarships, and lower-cost pathways can make education more affordable over time.',
    resources: ['Federal Student Aid (FAFSA)', 'College Scorecard', 'CFPB']
  },
  {
    worry: 'I am concerned about supporting my family while simultaneously planning for myself.',
    feeling:
      'Many students feel this pressure. It can be hard to think about your own future while also wanting to help your family. In many families, money is shared, and costs like housing, food, and bills can be high. Some students feel expected to help, especially when wages are low or opportunities are unequal.',
    actions: [
      'Create a basic budget that includes both personal and family needs',
      'Research for support programs or financial aid resources',
      'Set aside even a small amount just for your future (even $5–$10 counts)',
      'Talk with a trusted adult or family member about your goals and expectations when possible',
      'Look into part-time jobs, internships, or paid training programs',
      'Ask a school counselor about financial aid or programs that can support you'
    ],
    reassurance:
      'Supporting your family and planning for yourself can happen at the same time, even if it’s slow. Small steps toward saving, learning, or earning still build your future over time.',
    resources: ["U.S. Career Institute: A High Schooler's Guide to Budgeting", 'CareerOneStop GetMyFuture']
  },
  {
    worry: 'I am nervous that I will never be able to buy a home.',
    feeling:
      'Many students feel this way. Buying a home can seem out of reach, especially with rising prices and high rent. Home prices and rent have gone up faster than wages nationally. This makes it harder to save money for a down payment, especially if you are already helping with other expenses.',
    actions: [
      'Learn how credit scores work and why they matter for renting and buying',
      'Start saving small amounts regularly (even $5–$10 helps build the habit)',
      'Learn the difference between renting and owning so you can plan ahead',
      'Explore first-time homebuyer programs in WA',
      'Talk to a trusted adult or counselor about long-term financial goals',
      'Visit your local library or school library and check out a book or guide about renting, credit, or buying a home'
    ],
    reassurance:
      'Many people do not buy homes right away, and that’s okay. There are different paths to housing stability, and programs exist to help first-time buyers over time.',
    resources: ['Washington State Housing Finance Commission', 'Khan Academy: Housing']
  },
  {
    worry: 'I am concerned that investing is only for rich people.',
    feeling:
      'Many people feel this way. Investing is often shown as something only wealthy people do, but that is not true. Not everyone is taught about investing, and it can seem confusing or risky. Some people also do not have extra money to invest right away, which can make it feel out of reach.',
    actions: [
      'Learn how compound interest works and why starting early matters',
      'Start saving small amounts regularly, even if you are not investing yet',
      'Ask a teacher, counselor, or trusted adult about basic investing terms',
      'Focus on learning first, not investing large amounts'
    ],
    reassurance:
      'You do not need a lot of money to start learning about investing. Many people begin with small amounts over time. Starting early and being consistent matters more than starting big.',
    resources: ['FINRA Investing Basics', 'What is Investing?', 'Khan Academy: Investing']
  },
  {
    worry: 'I am anxious about making the wrong financial decision.',
    feeling:
      'You are not alone in feeling this way. Money decisions can feel high-stakes because they affect your future, and there are many unknowns. Financial systems are complex, and not everyone is taught the same financial skills. Things like credit, loans, and investing are often not explained clearly in school, which can make decisions feel riskier than they are.',
    actions: [
      'Start with learning one financial skill at a time like budgeting, saving, or learning about compound interest instead of trying to understand everything at once',
      'Ask trusted adults, counselors, or mentors for advice when you are unsure',
      'Write down your options before making a decision and think through the pros and cons',
      'Give yourself time, most decisions do not need to be rushed'
    ],
    reassurance:
      'Most financial decisions are not permanent, and you can learn and adjust over time. Building knowledge step by step is more important than being perfect right away.',
    resources: [
      'Washington State Department of Financial Institutions (DFI)',
      'FDIC Money Smart for Young Adults',
      'Khan Academy: Financial Goals'
    ]
  },
  {
    worry: 'I am concerned that the system is unequal, so my choices will not matter.',
    feeling:
      'This is a real and valid concern. Systems are not equal for everyone, and people do not all have the same access to money, education, or opportunities. History and current systems have created differences in who has access to resources like safe housing, good schools, and financial opportunities. This can make it feel like your choices will not make a difference.',
    actions: [
      'Focus on what you can control, like learning new skills and building good habits',
      'Use your community for support, advice, and shared knowledge',
      'Learn how systems work so you can make informed choices',
      'Set small, realistic goals and build over time',
      'Stay informed about policies and programs that affect your community',
      'Understand that choices still matter within constraints'
    ],
    reassurance:
      'Even in an unequal system, your choices still matter. Small actions can build over time, and many people use knowledge, community, and support to create opportunities for themselves and others.',
    resources: ['FDIC: How Money Smart Are You?', 'Intuit', 'Intuit: Interactive Curriculum']
  },
  {
    worry: "I'm worried about how I can responsibly spend money I receive from the government.",
    feeling:
      'Managing financial support can feel stressful, especially when there is not always clear guidance on how to use it. Financial systems can be confusing, and people are often not taught how to manage money step by step. This can create pressure to “do it right,” even though there is no perfect way to manage money.',
    actions: [
      'Break your money into simple categories: needs, savings, and goals',
      'Write down your most important expenses first (like food, housing, transportation)',
      'Create a basic budget to see where your money is going',
      'Set aside a small amount for savings if possible, even if it is small',
      'Use free budgeting tools or ask a trusted adult or counselor for support'
    ],
    reassurance:
      'There is no single correct way to manage money. What matters most is making thoughtful choices and adjusting over time as your needs change.',
    resources: [
      'Khan Academy: Financial Literacy',
      'WA State Treasurer',
      'WA State Department of Financial Institutions DFI'
    ]
  }
];

const additionalInfoSections = [
  {
    eyebrow: 'additional information',
    title: 'Equality vs Equity in Real Life',
    body:
      'Equality means everyone is given the same resources or opportunities. Equity means people are given different levels of support based on what they need to have a fair chance.'
  },
  {
    eyebrow: 'additional information',
    title: 'Why This Matters in Policy and Law',
    body:
      'In real life, this matters in policies and laws. For example, a law or program that treats everyone the same might sound fair, but it can still lead to unequal outcomes if some groups have faced more barriers in the past. Equity-focused policies try to recognize these differences and provide extra support where it is needed most. As future voters, students will help shape these decisions. Understanding equity helps you think about whether a policy truly creates fairness, or whether it simply treats everyone the same without addressing the underlying social and economic conditions that shape people’s different starting points. Fairness is not always about giving everyone the same thing. It is about making sure everyone has a real chance to succeed.'
  },
  {
    eyebrow: 'additional information',
    title: 'What Does it Mean to Make Informed Choices in an Unequal System?',
    body:
      'Making informed choices in an unequal system means knowing that your decisions matter, but not everyone starts with the same access to opportunities or resources. Schools, jobs, and financial systems can affect what options are available and how risky a choice feels for different people. Because of this, the “best” choice is not the same for everyone. It also means using what you do have, your knowledge, community, and culture to guide your decisions. Advice from loved ones, and mentors can help you see options you might not notice on your own and make choices that fit your life and values. Ask yourself: What resources do I have right now? What risks can I handle? What goals matter most to me?'
  },
  {
    eyebrow: 'additional information',
    title: 'How Can Community and Culture Help Guide Your Choices?',
    body:
      'You don’t have to navigate everything on your own. Your community and culture can help guide you. Community and culture help guide financial decisions by shaping what people value and how they think about money. The people around you influence what feels normal, like saving, spending, or helping family. Your culture can also shape priorities, such as supporting relatives, avoiding debt, or focusing on long-term stability instead of quick spending. Friends, family, and community members can share advice, resources, and real examples that help you learn what works in real life. Because of this, financial decisions are not made alone, they are shaped by the experiences, values, and support of the communities you are part of. This can help you make choices that fit your life and also reflect what matters to you and the people you care about. Understanding how your family thinks about money, like debt or success, can help you decide which beliefs still work for you and which ones you want to change. These influences can help you make decisions that feel right for you, not just what others expect.'
  }
];

const financialSkillsRows = [
  {
    area: 'Budgeting & Cash Flow',
    skills: 'Tracking money, needs vs. wants',
    why: 'helps you manage your money so you spend wisely and save over time.'
  },
  {
    area: 'Saving & Emergency Planning',
    skills: 'Emergency funds, saving goals',
    why: 'helps you stay financially stable when unexpected expenses happen.'
  },
  {
    area: 'Credit & Debt',
    skills: 'Loans, credit scores',
    why: 'affects how much you pay when renting or buying a home, paying for school, or borrowing money.'
  },
  {
    area: 'Investing Fundamentals',
    skills: 'Compound interest, risk vs return',
    why: 'helps your money grow over time by earning returns from savings or investments.'
  },
  {
    area: 'Income & Career Strategy',
    skills: 'Salary, job skills',
    why: 'helps you build skills and experience so you can earn more money over time.'
  },
  {
    area: 'Tax Literacy',
    skills: 'Filing taxes, tax credits',
    why: 'helps you avoid overpaying taxes and keep more of your income for saving and spending.'
  },
  {
    area: 'Asset Ownership',
    skills: 'Housing, entrepreneurship',
    why: 'helps you grow money and assets over time so you have more financial security in the future.'
  },
  {
    area: 'Risk & Fraud Awareness',
    skills: 'Scams, contracts',
    why: 'helps keep your money safe and protects you from scams.'
  }
];

export default function Toolkit() {
  const [openModal, setOpenModal] = useState(-1);
  const [showSkillsTable, setShowSkillsTable] = useState(false);
  const [showAllResources, setShowAllResources] = useState(false);
  const [expandedRows, setExpandedRows] = useState({});
  const [activeAdditionalSection, setActiveAdditionalSection] = useState(1);

  const visibleResourceCards = showAllResources ? resourceCards : resourceCards.slice(0, 3);
  const featuredAdditionalSection = additionalInfoSections[0];
  const stackedAdditionalSections = additionalInfoSections.slice(1);
  const activeAdditionalCard = additionalInfoSections[activeAdditionalSection];

  function openCard(index) {
    setOpenModal(index);
  }

  function closeModal() {
    setOpenModal(-1);
  }

  function toggleRow(index) {
    setExpandedRows(function (previousValue) {
      return {
        ...previousValue,
        [index]: !previousValue[index]
      };
    });
  }

  return (
    <div className="toolkit-stack">
      <div className="stack-sm">
        <p className="eyebrow">section numero uno</p>
        <div className="toolkit-resource-header">
          <div className="stack-sm">
            <h3 className="panel-title">Resource cards for WA policies, programs, and investments</h3>
            <p className="section-copy compact-copy">
              Start with the first few, then open the rest when you want the full list.
            </p>
          </div>
          <button
            type="button"
            className="toolkit-toggle-button"
            onClick={function () {
              setShowAllResources(function (previousValue) {
                return !previousValue;
              });
            }}
          >
            {showAllResources ? 'show fewer cards' : 'show all 9 cards'}
          </button>
        </div>
        <div className="toolkit-grid">
          {visibleResourceCards.map(function (card, index) {
            return (
              <button
                key={card.title}
                type="button"
                className="tool-card"
                onClick={function () {
                  openCard(resourceCards.findIndex(function (resourceCard) {
                    return resourceCard.title === card.title;
                  }));
                }}
              >
                <div className="tool-card-meta">
                  <span className="tool-card-tag">open card</span>
                  <p className="eyebrow">{card.number}</p>
                </div>
                <div className="tool-card-heading">
                  <h3>{card.title}</h3>
                </div>
                <p>{card.summary}</p>
              </button>
            );
          })}
        </div>
      </div>

      <div className="showcase-item showcase-item-reverse toolkit-resource-showcase">
        <div className="panel showcase-panel">
          <div className="resource-table" role="table" aria-label="Student concerns and tools">
            {concernRows.map(function (row, index) {
              const isOpen = Boolean(expandedRows[index]);

              return (
                <div key={row.worry} className="resource-row" role="rowgroup">
                  <button
                    type="button"
                    className="resource-row-trigger"
                    onClick={function () {
                      toggleRow(index);
                    }}
                  >
                    <span>{row.worry}</span>
                    <small>{isOpen ? 'hide' : 'open'}</small>
                  </button>
                  <div className={isOpen ? 'resource-answer is-open' : 'resource-answer'}>
                    <div className="resource-answer-stack">
                      <p>{row.feeling}</p>
                      <div>
                        <p><strong>What you can do now:</strong></p>
                        <ul>
                          {row.actions.map(function (action) {
                            return <li key={action}>{action}</li>;
                          })}
                        </ul>
                      </div>
                      <div>
                        <p><strong>Why you don’t need to panic:</strong></p>
                        <p>{row.reassurance}</p>
                      </div>
                      <div>
                        <p><strong>Helpful resources:</strong></p>
                        <ul>
                          {row.resources.map(function (resource) {
                            return <li key={resource}>{resource}</li>;
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="stack-sm showcase-copy">
          <p className="eyebrow">your feelings about money are valid</p>
          <h3 className="panel-title">Many students feel stressed or unsure about money and the future</h3>
          <p className="section-copy compact-copy">
            You are not alone in these concerns. These feelings are common, especially when thinking about life after high school and an unequal economy.
          </p>
          <button
            type="button"
            className="skills-table-trigger"
            onClick={function () {
              setShowSkillsTable(true);
            }}
          >
            Financial Skills Behind These Concerns
          </button>
          <p className="section-copy compact-copy">
            All of these worries connect to real financial skills. Open the table to see what skills help build understanding and long-term financial stability.
          </p>
        </div>
      </div>

      <div className="toolkit-mini-grid">
        <div className="panel plain-text-panel toolkit-mini-panel toolkit-mini-panel-featured">
          <p className="eyebrow">{featuredAdditionalSection.eyebrow}</p>
          <h3 className="panel-title">{featuredAdditionalSection.title}</h3>
          <p>{featuredAdditionalSection.body}</p>
        </div>

        <div className="panel toolkit-mini-switcher">
          <div className="toolkit-mini-switcher-list">
            {stackedAdditionalSections.map(function (section, index) {
              const actualIndex = index + 1;
              const isActive = activeAdditionalSection === actualIndex;

              return (
                <button
                  key={section.title}
                  type="button"
                  className={isActive ? 'toolkit-mini-switcher-trigger is-active' : 'toolkit-mini-switcher-trigger'}
                  onClick={function () {
                    setActiveAdditionalSection(actualIndex);
                  }}
                >
                  <span className="eyebrow">{section.eyebrow}</span>
                  <h3>{section.title}</h3>
                </button>
              );
            })}
          </div>

          <div className="toolkit-mini-switcher-panel">
            <p className="eyebrow">{activeAdditionalCard.eyebrow}</p>
            <h3 className="panel-title">{activeAdditionalCard.title}</h3>
            <p>{activeAdditionalCard.body}</p>
          </div>
        </div>
      </div>

      {openModal !== -1 && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className="modal-content"
            onClick={function (event) {
              event.stopPropagation();
            }}
          >
            <div className="modal-header">
              <div className="stack-sm">
                <p className="eyebrow">resource card {resourceCards[openModal].number}</p>
                <h3>{resourceCards[openModal].title}</h3>
              </div>
              <button type="button" className="modal-close" onClick={closeModal}>
                ×
              </button>
            </div>
            <div className="modal-body">
              <p><strong>{resourceCards[openModal].yearLabel}:</strong> {resourceCards[openModal].yearValue}</p>
              <p><strong>What it is:</strong> {resourceCards[openModal].summary}</p>
              <p><strong>Intended for:</strong> {resourceCards[openModal].intendedFor}</p>
              <p><strong>Community impact:</strong> {resourceCards[openModal].communityImpact}</p>
              <p><strong>How students can support it:</strong> {resourceCards[openModal].studentSupport}</p>
              <div>
                <strong>Learn more here:</strong>
                {resourceCards[openModal].links.map(function (link) {
                  return (
                    <p key={link.label}>
                      <a href={link.url} target="_blank" rel="noreferrer">
                        {link.label}
                      </a>
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {showSkillsTable && (
        <div
          className="modal-overlay"
          onClick={function () {
            setShowSkillsTable(false);
          }}
        >
          <div
            className="modal-content skills-table-modal"
            onClick={function (event) {
              event.stopPropagation();
            }}
          >
            <div className="modal-header">
              <div className="stack-sm">
                <p className="eyebrow">financial skills behind these concerns</p>
                <h3>How these worries connect to real financial skills</h3>
              </div>
              <button
                type="button"
                className="modal-close"
                onClick={function () {
                  setShowSkillsTable(false);
                }}
              >
                ×
              </button>
            </div>
            <div className="modal-body">
              <p>
                All of these worries connect to real financial skills. The table below shows what
                skills help build understanding and long-term financial stability.
              </p>
              <div className="skills-table-wrap">
                <table className="skills-table">
                  <thead>
                    <tr>
                      <th>Financial Skill Area</th>
                      <th>Key Skills</th>
                      <th>Why it Matters</th>
                    </tr>
                  </thead>
                  <tbody>
                    {financialSkillsRows.map(function (row) {
                      return (
                        <tr key={row.area}>
                          <td>{row.area}</td>
                          <td>{row.skills}</td>
                          <td>{row.why}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
