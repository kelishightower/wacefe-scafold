import React from 'react';
import DefinitionTooltip from './DefinitionTooltip';

export const definedTerms = {
  demographic: 'Relating to the characteristics of a population, such as age, race, income, education, or location.',
  socioeconomic: 'Related to both social and economic factors combined, showing how income, education, and background affect opportunities.',
  positioning: 'The place or status someone holds in society based on their background, resources, and circumstances.',
  financial_opportunities: 'Chances to earn money, build wealth, invest, or gain access to resources that improve financial stability.',
  empathize: 'To understand and share the feelings of another person; to put yourself in their situation.',
  asset:
      'Something valuable that you own that has money value, such as a house, car, savings account, stocks, or a business.',
  baby_boomers:
      'People born between 1946 and 1964, after World War II, during a time of increased birth rates.',
  close_for_years:
      'Refers to salmon fishing areas or seasons being shut down for long periods of time because of declining fish populations, environmental concerns, or legal protections.',
  default: 'When someone borrows money but fails to pay it back as agreed.',
  distribution_23:
      'The second release of saved tribal money a member of the Hoh Tribe can receive. Members who attended college or trade school receive 40%, while others receive 20%.',
  down_payment:
      'Money paid upfront when buying a house or property before borrowing the remaining amount from a bank.',
  federal_reserve:
      'The central bank of the United States that helps manage the country’s money system, banks, and interest rates.',
  generation_z:
      'People born roughly between 1997 and 2012 who grew up with the internet and smartphones.',
  great_generational_wealth_transfer:
      'The large transfer of money, property, and assets from older generations to younger generations through inheritance or gifts.',
  hoh_river_basin:
      'The area of land where water drains into the Hoh River, including streams, creeks, and surrounding land in Washington State.',
  inheritance_decision:
      'The choices someone has after inheriting property, such as keeping, selling, renting, or giving it away.',
  interest_rates:
      'The percentage lenders charge on top of the original amount borrowed.',
  loan: 'Money borrowed from a bank or lender that must be paid back, usually with interest.',
  mortgage: 'A long-term loan specifically used to buy a house or property.',
  paid_off: 'When all borrowed money has been fully repaid and nothing more is owed.',
  per_capita_distributions:
      'Money or tribal revenue divided equally among members of a tribe; “per capita” means “per person.”',
  repossession:
      'When a lender takes back property or belongings because loan payments were not made.',
  salmon_fishing:
      'The traditional practice of catching salmon for food, income, and cultural purposes, especially important to the Hoh Tribe. The Hoh Tribe has fished for salmon in the Hoh River for thousands of years and has protected legal fishing rights within their traditional lands.',
  socioeconomic_full:
      'Relating to both social and economic factors such as income, education, and social class.',
  storefront:
      'A physical store or business space where customers can shop in person.',
  trade_school:
      'A school that teaches practical skills for specific careers like plumbing, mechanics, or electrical work.',
  transferred:
      'When money, property, or assets are legally passed from one person to another, often through inheritance or a will.',
  uw_housing_rates_link:
      'https://hfs.uw.edu/live/uw-housing-agreements/housing-and-dining-rates/',
  external_resource_link:
      'A clickable website or source that gives readers more information about a topic, such as the Great Generational Wealth Transfer or UW housing costs.',
  great_generational_wealth_transfer_article_glenmede:
      'A research source explaining the expected transfer of trillions of dollars in wealth from older generations to younger generations and charities.',
  great_wealth_transfer_article_cfa:
      'A research source discussing myths and realities surrounding generational wealth transfer and inheritance trends.',
  barrier: 'Something that blocks, limits, or makes it harder for someone to reach a goal.',
  broadband: 'Fast internet service that can handle school, work, video calls, and online tools.',
  childcare: 'Care for children while parents or guardians are working, studying, or handling other responsibilities.',
  community_reinvestment:
      'Putting money or resources back into communities that have been harmed, ignored, or left out of opportunity.',
  compound_interest:
      'Interest earned on both the money you started with and the interest that money has already earned.',
  constraints: 'Limits or pressures that shape what choices are realistically available.',
  covenant:
      'A rule written into property documents. Restrictive covenants were often used to keep certain groups from living in certain neighborhoods.',
  digital_divide:
      'The gap between people who have reliable access to technology and the internet and people who do not.',
  discrimination:
      'Unfair treatment of a person or group because of identity, background, race, gender, disability, or another characteristic.',
  economic_development:
      'Work that helps an area grow jobs, businesses, income, and resources.',
  equity:
      'Fairness that gives people different support based on what they need to have a real chance.',
  equality:
      'Treating everyone the same, even if people have different needs or starting points.',
  ethnicity: 'A shared cultural background, such as language, ancestry, traditions, or national origin.',
  facilitation:
      'Helping guide a conversation, activity, or group process so people can participate and learn.',
  fafsa:
      'The Free Application for Federal Student Aid, a form students fill out to apply for college grants, loans, and work-study.',
  financial_aid:
      'Money that helps students pay for education, including grants, scholarships, work-study, and loans.',
  financial_literacy:
      'Knowing how money works, including budgeting, saving, borrowing, credit, and investing.',
  gini_coefficient:
      'A number from 0 to 1 that shows how evenly income is shared in a place.',
  homeownership: 'Owning a home instead of renting one.',
  income_inequality:
      'A gap in how much money different people or households earn.',
  incarceration: 'Being held in jail or prison.',
  indigenous:
      'Native peoples who have deep historical and cultural ties to land from before colonization.',
  infrastructure:
      'Basic systems a community needs to function, such as roads, water, electricity, internet, and public buildings.',
  institutional:
      'Connected to large organizations or systems such as schools, banks, government, courts, or workplaces.',
  median:
      'The middle value in a list of numbers, where half are higher and half are lower.',
  neoliberalism:
      'An economic approach that emphasizes free markets, privatization, and reduced government involvement in social programs.',
  oppression:
      'Unfair and repeated treatment that keeps a group from having equal power, rights, or opportunity.',
  policy:
      'A rule, plan, or decision made by a government, school, organization, or other group.',
  poverty: 'Not having enough money or resources to meet basic needs.',
  privatization:
      'Moving control of a service or resource from the government or public to private companies.',
  redlining:
      'A discriminatory practice where banks and institutions denied loans or services to neighborhoods, often because many residents were people of color.',
  resources:
      'Money, tools, services, information, support, or opportunities that help people meet needs or reach goals.',
  scholarship:
      'Money awarded to help pay for school that usually does not need to be paid back.',
  sovereignty:
      'The right of a nation or tribe to govern itself and make decisions for its people and land.',
  systemic:
      'Built into the way a whole system works, not just caused by one person.',
  tanf:
      'Temporary Assistance for Needy Families, a government program that gives support to families with low income.',
  underserved:
      'Not receiving enough access to services, resources, or opportunities.',
  wages: 'Money paid to someone for work, usually by the hour or by salary.',
  wealth:
      'The total value of what someone owns, such as savings, property, and investments, minus what they owe.'
};

const glossaryTerms = [
  ['Great Generational Wealth Transfer Article (Glenmede)', definedTerms.great_generational_wealth_transfer_article_glenmede],
  ['Great Wealth Transfer Article (CFA Institute)', definedTerms.great_wealth_transfer_article_cfa],
  ['Great Generational Wealth Transfer', definedTerms.great_generational_wealth_transfer],
  ['Distribution on Her 23rd Birthday', definedTerms.distribution_23],
  ['Per Capita Distributions', definedTerms.per_capita_distributions],
  ['UW Housing Rates Link', definedTerms.uw_housing_rates_link],
//   ['External Resource Link', definedTerms.external_resource_link],
  ['Community Reinvestment', definedTerms.community_reinvestment],
  ['Gini coefficient', definedTerms.gini_coefficient],
  ['Income inequality', definedTerms.income_inequality],
  ['Financial literacy', definedTerms.financial_literacy],
  ['Compound interest', definedTerms.compound_interest],
  ['Economic development', definedTerms.economic_development],
  ['Financial aid', definedTerms.financial_aid],
  ['Digital divide', definedTerms.digital_divide],
  ['Restrictive covenants', definedTerms.covenant],
  ['Criminal justice system', definedTerms.incarceration],
  ['Inheritance Decision', definedTerms.inheritance_decision],
  ['Great Wealth Transfer', definedTerms.great_generational_wealth_transfer],
  ['socioeconomic positioning', definedTerms.socioeconomic],
  ['Close for Years', definedTerms.close_for_years],
  ['Federal Reserve', definedTerms.federal_reserve],
  ['Hoh River Basin', definedTerms.hoh_river_basin],
  ['Interest Rates', definedTerms.interest_rates],
  ['Baby Boomers', definedTerms.baby_boomers],
  ['Baby Boomer', definedTerms.baby_boomers],
  ['Generation Z', definedTerms.generation_z],
  ['Salmon Fishing', definedTerms.salmon_fishing],
  ['Trade School', definedTerms.trade_school],
  ['Down Payment', definedTerms.down_payment],
  ['down-payment', definedTerms.down_payment],
  ['Paid-Off', definedTerms.paid_off],
  ['paid off', definedTerms.paid_off],
  ['per-capita distributions', definedTerms.per_capita_distributions],
  ['per capita distributions', definedTerms.per_capita_distributions],
  ['Socioeconomic', definedTerms.socioeconomic_full],
  ['Transferred', definedTerms.transferred],
  ['Repossession', definedTerms.repossession],
  ['Storefront', definedTerms.storefront],
  ['Mortgage', definedTerms.mortgage],
  ['Defaulting', definedTerms.default],
  ['Default', definedTerms.default],
  ['Homeownership', definedTerms.homeownership],
  ['Privatization', definedTerms.privatization],
  ['Neoliberalism', definedTerms.neoliberalism],
  ['Discrimination', definedTerms.discrimination],
  ['Incarceration', definedTerms.incarceration],
  ['Infrastructure', definedTerms.infrastructure],
  ['Institutional', definedTerms.institutional],
  ['Indigenous', definedTerms.indigenous],
  ['Underserved', definedTerms.underserved],
  ['Facilitation', definedTerms.facilitation],
  ['Scholarships', definedTerms.scholarship],
  ['Scholarship', definedTerms.scholarship],
  ['Sovereignty', definedTerms.sovereignty],
  ['Constraints', definedTerms.constraints],
  ['Broadband', definedTerms.broadband],
  ['Childcare', definedTerms.childcare],
  ['Ethnicity', definedTerms.ethnicity],
//   ['Resources', definedTerms.resources],
//   ['Resource', definedTerms.resources],
  ['Redlining', definedTerms.redlining],
  ['Oppression', definedTerms.oppression],
  ['Poverty', definedTerms.poverty],
  ['Equality', definedTerms.equality],
  ['Equity', definedTerms.equity],
  ['Policies', definedTerms.policy],
  ['Policy', definedTerms.policy],
  ['Barriers', definedTerms.barrier],
  ['Barrier', definedTerms.barrier],
  ['Systemic', definedTerms.systemic],
  ['Median', definedTerms.median],
  ['TANF', definedTerms.tanf],
  ['FAFSA', definedTerms.fafsa],
  ['Wages', definedTerms.wages],
  ['Wealth', definedTerms.wealth],
  ['Assets', definedTerms.asset],
  ['Asset', definedTerms.asset],
  ['Loans', definedTerms.loan],
  ['Loan', definedTerms.loan]
];

function escapeRegExp(text) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

const glossaryLookup = glossaryTerms.reduce(function (lookup, item) {
  lookup[item[0].toLowerCase()] = item[1];
  return lookup;
}, {});

const glossaryPattern = new RegExp(
    '(' +
        glossaryTerms
            .map(function (item) {
              return item[0];
            })
            .sort(function (a, b) {
              return b.length - a.length;
            })
            .map(escapeRegExp)
            .join('|') +
        ')',
    'gi'
);

export function renderDefinedText(text) {
  const parts = text.split(glossaryPattern);

  return parts.map(function (part, index) {
    const definition = glossaryLookup[part.toLowerCase()];

    if (!definition) {
      return part;
    }

    return (
        <DefinitionTooltip
            key={`${part}-${index}`}
            term={part}
            definition={definition}
        />
    );
  });
}

export default function GlossaryText({ children }) {
  return renderDefinedText(children);
}
