import { Router } from 'express';
import { authMiddleware, AuthRequest } from '../middleware/auth';

const router = Router();

router.get('/watchlist', authMiddleware, (req: AuthRequest, res) => {
  res.json({ message: `Watchlist for user ${req.userId}` });
});

export default router;
