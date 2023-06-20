interface User 
{
  age: number;
  dependents: number;
  house?: 
  {
    ownership_status: 'owned' | 'mortgaged';
  };
  income: number;
  marital_status: 'single' | 'married';
  risk_questions: [number, number, number];
  vehicle?: 
  {
    year: number;
  };
}

interface RiskScores extends User 
{
  auto_score?: string;
  disability_score?: string;
  home_score?: string;
  life_score?: string;
}

export const calculateRiskScores = (user: User): RiskScores => 
{
  let baseScore = user.risk_questions.reduce((a, b) => a + b, 0);

  let autoScore = baseScore;
  let disabilityScore = baseScore;
  let homeScore = baseScore;
  let lifeScore = baseScore;

  if (user.income === 0) 
  {
    disabilityScore = 99;
  }
  if (!user.vehicle) 
  {
    autoScore = 99;
  }
  if (!user.house)
    {
    homeScore = 99;
  }
  if (user.age > 60) 
  {
    disabilityScore = 99;
    lifeScore = 99;
  }

  if (user.age < 30) 
  {
    lifeScore -= 2;
  } 
  else if (user.age >= 30 && user.age <= 40) 
  {
    lifeScore -= 1;
  }

  if (user.income > 200000) 
  {
    lifeScore -= 1;
  }

  if (user.house && user.house.ownership_status === 'mortgaged') 
  {
    homeScore += 1;
    disabilityScore += 1;
  }

  if (user.dependents > 0) 
  {
    disabilityScore += 1;
    lifeScore += 1;
  }

  if (user.marital_status === 'married') 
  {
    lifeScore += 1;
    disabilityScore -= 1;
  }

  if (user.vehicle && new Date().getFullYear() - user.vehicle.year <= 5) 
  {
    autoScore += 1;
  }

  const riskScores: RiskScores = 
  {
    ...user,
    auto_score: convertScoreToProfile(autoScore),
    disability_score: convertScoreToProfile(disabilityScore),
    home_score: convertScoreToProfile(homeScore),
    life_score: convertScoreToProfile(lifeScore),
  };

  return riskScores;
};

const convertScoreToProfile = (score: number): string => 
{
  if (score <= 0) 
  {
    return 'economic';
  } 
  else if (score >= 1 && score <= 2) 
  {
    return 'regular';
  } 
  else if (score >= 3 && score < 99)
  {
    return 'responsible';
  }
  else
  {
    return 'ineligible';
  }
};

export const convertRiskScoresToProfile = (riskScores: RiskScores) => 
{
  return {
    auto: riskScores.auto_score || 'ineligible',
    disability: riskScores.disability_score || 'ineligible',
    home: riskScores.home_score || 'ineligible',
    life: riskScores.life_score || 'ineligible',
  };
};
