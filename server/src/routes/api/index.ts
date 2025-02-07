import { Router } from 'express';
import { userRouter } from './user-routes.js';
import { gameRouter } from './game-routes.js';

const router = Router();

router.use('/users', userRouter);
router.use('/games', gameRouter);

export default router;
