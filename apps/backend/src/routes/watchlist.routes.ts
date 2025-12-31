import { Router } from 'express';
import { authMiddleware, AuthRequest } from '../middleware/auth';

const router = Router();

router.post('/', authMiddleware, (req: AuthRequest, res) => {
  res.json({ message: 'Create watchlist' });
});

export default router;
