import { Request, Response } from 'express';
import { calculateRiskScores, convertRiskScoresToProfile } from '../models/riskModel';

export const calculateRisk = (req: Request, res: Response) => 
{
  try {
    const riskScores = calculateRiskScores(
      req.body
    );

    const riskProfile = convertRiskScoresToProfile(riskScores);

    res.json(riskProfile);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: 'Bad request' });
  }
};
