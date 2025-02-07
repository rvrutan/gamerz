import { Router } from 'express';
import { Game } from '../../models/index.js';

const router = Router();

// GET all games
router.get('/', async (_req, res) => {
  try {
    const games = await Game.findAll();
    res.status(200).json(games);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching games', error });
  }
});

// POST a new game
router.post('/', async (req, res) => {
  try {
    const newGame = await Game.create(req.body);
    res.status(201).json(newGame);
  } catch (error) {
    res.status(500).json({ message: 'Error creating game', error });
  }
});

export { router as gameRouter };